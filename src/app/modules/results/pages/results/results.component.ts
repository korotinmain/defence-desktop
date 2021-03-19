import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AddedAirplanesService} from '../../../../core/services/added-airplanes.service';
import {Observable} from 'rxjs';
import {AddedAirplaneType} from '../../../../core/types/added-airplane.type';
import {tap} from 'rxjs/operators';
import {ResourceType} from '../../../../core/types/resource.type';
import {ResourceNameEnum} from '../../../../core/enums/resource-name.enum';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {

  addedAirplanes$: Observable<Array<AddedAirplaneType>>;
  selectedAirplane: any = null;
  parsedModulesData: Array<ResourceType> = [];

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addedAirplanesService.addedAirplanes$
      .subscribe(response => {
        console.log(response);
        if (response.length) {
          this.selectedAirplane = response[0];
          this.parseModules(response[0]);
          this.cdr.detectChanges();
        }
      });
    // const data = {
    //   airplaneName: 'Су-27',
    //   result: {
    //     airAir: {
    //       control_0: {type: 'Р-27T', value: 206, count: 3},
    //       control_1: {type: 'Р-73К(Л)', value: 274, count: 4},
    //       control_2: {type: 'Р-73К(Л)', value: 343, count: 5},
    //       firstFlying: 12,
    //       flyingResource: 24,
    //     },
    //   },
    // };
    // this.selectedAirplane = data;
    // this.parseModules(data);
  }

  getResourceName(resource: string): string {
    return ResourceNameEnum[resource];
  }

  parseModules(data: any): void {
    const result = [];
    Object.keys(data.result).forEach((resourceKey) => {
      const modules = [];
      if (resourceKey !== 'firstFlying' && resourceKey !== 'flyingResource') {
        Object.keys(data.result[resourceKey]).forEach((moduleKey) => {
          if (moduleKey !== 'firstFlying' && moduleKey !== 'flyingResource') {
            modules.push(data.result[resourceKey][moduleKey]);
          }
        });
        const resource = {
          resourceType: this.getResourceName(resourceKey),
          flyingResource: data.result[resourceKey]['flyingResource'],
          firstFlying: data.result[resourceKey]['firstFlying'],
          modules,
        };
        result.push(resource);
      }
    });
    this.parsedModulesData = result;
    this.cdr.detectChanges();
  }
}
