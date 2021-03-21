import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddedAirplanesService} from '../../../../core/services/added-airplanes.service';
import {AirplaneType} from '../../../../core/types/airplane.type';
import {CoefficientType} from '../../../../core/types/coefficient.type';
import {AIRPLANES_DATA} from '../../../../core/constants/calculation.constants';
import {COEFFICIENTS} from '../../../../core/constants/coefficients.constant';
import {Subject} from 'rxjs';
import {CoefficientEnum} from '../../../../core/enums/coefficient.enum';
import {AddedAirplaneType} from '../../../../core/types/added-airplane.type';

export type FormType = {
  firstFlying: number;
  flyingResource: number;
  [key: string]: {};
};

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationComponent implements OnInit, OnDestroy {

  private _ngUnsubscribe = new Subject();

  airplaneFormGroup: FormGroup;
  coefficients: Array<CoefficientType> = COEFFICIENTS;
  airplanesData: Array<AirplaneType> = AIRPLANES_DATA;
  selectedAirplane: AirplaneType = null;

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onAirplaneSelect(airplane: AirplaneType): void {
    this.selectedAirplane = airplane;
    this.createAirplaneForm();
  }

  onAirplaneChange(): void {
    this.selectedAirplane = null;
  }

  createAirplaneForm(): void {
    const formValue = {};
    this.airplanesData.forEach((airplane: AirplaneType) => {
      const outfitFormGroup = {};
      airplane.outfitGroups.forEach(group => {
        const outfitControls = {};
        const coefficientsForm = {};
        group.outfits.forEach((outfit, index) => {
          outfitControls[outfit.control] = new FormControl('');
          outfitControls['countControl' + index] = new FormControl('');
        });
        this.coefficients.forEach(coefficient => {
          coefficientsForm[coefficient.name] = new FormControl(coefficient.startValue);
        });
        outfitFormGroup[group.groupControlName] = new FormGroup({
          controls: new FormGroup(outfitControls),
          coefficients: new FormGroup(coefficientsForm),
        });
      });
      formValue[airplane.airplaneControlName] = new FormGroup({
        ...outfitFormGroup,
        firstFlying: new FormControl(''),
        flyingResource: new FormControl(''),
      });
    });
    this.airplaneFormGroup = new FormGroup(formValue);
  }

  submitForm(): void {
    if (this.selectedAirplane) {
      const formValue = this.airplaneFormGroup.value[this.selectedAirplane.airplaneControlName];
      const filteredOutfits = {};
      Object.entries(formValue).forEach(([key, value]) => {
        const filteredValues = {};
        if (key !== 'firstFlying' && key !== 'flyingResource') {
          Object.entries(value['controls']).forEach(([controlKey, controlValue]) => {
            if (value['controls'][controlKey]) {
              filteredValues[controlKey] = controlValue;
            }
          });
          filteredOutfits[key] = {
            coefficients: value['coefficients'],
            controls: filteredValues,
          };
        } else {
          filteredOutfits[key] = value;
        }
      });
      const filteredGroups = {};
      Object.entries(filteredOutfits).forEach(([key, value]) => {
        if (key !== 'firstFlying' && key !== 'flyingResource') {
          if (Object.keys(filteredOutfits[key].controls).length) {
            filteredGroups[key] = value;
          }
        } else {
          filteredGroups[key] = value;
        }
      });
      this.calculateAirplane(filteredGroups as FormType);
    }
  }

  calculateAirplane(config: FormType): void {
    const result = {};
    Object.entries(config).forEach(([key, value]) => {
      if (key !== 'firstFlying' && key !== 'flyingResource') {
        const resourceValues = [];
        Object.entries(value['controls']).forEach(([resourceKey, resourceValue], index) => {
          if (resourceKey.includes('control_')) {
            const controlLettersArray = resourceKey.split('');
            const controlIndex = controlLettersArray[controlLettersArray.length - 1];
            resourceValues.push({
              ['control_' + controlIndex]: value['controls']['control_' + controlIndex],
              ['countControl' + controlIndex]: value['controls']['countControl' + controlIndex],
            });
          }
        });
        result[key] = {};
        const kb = config[key]['coefficients']['kb'];
        const kvi = config[key]['coefficients']['kvi'];
        const di = value['coefficients'][CoefficientEnum.di];
        result[key] = resourceValues.reduce((acc, curr, index) => {
          const calculationValue = Math.round(
            (1 + parseFloat(di)) *
            (curr['countControl' + index] * kvi *
              (config.firstFlying *
                ((1 - ((1 - kb) ** config.flyingResource)) / kb))));
          return {
            ...acc,
            ['control_' + index]: {
              type: curr['control_' + index],
              value: calculationValue,
              count: curr['countControl' + index],
            },
          };
        }, {});
        result['flyingResource'] = config.flyingResource;
        result['firstFlying'] = config.firstFlying;
      }
    });
    const airplane: AddedAirplaneType = {
      airplaneName: this.selectedAirplane.airplaneName,
      result,
    };
    this.addedAirplanesService.addNewAirplane(airplane);
    this.selectedAirplane = null;
    if (!this.cdr['destroyed']) {
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
