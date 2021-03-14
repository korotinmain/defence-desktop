import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AirplaneType} from '../../../../../../core/types/airplane.type';
import {AIRPLANES_DATA} from '../../calculation.constants';
import {AddedAirplanesService} from '../../../../../../core/services/added-airplanes.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AddedAirplaneType} from '../../../../../../core/types/added-airplane.type';

@Component({
  selector: 'app-airplane-select',
  templateUrl: './airplane-select.component.html',
  styleUrls: ['./airplane-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirplaneSelectComponent implements OnInit, OnDestroy {

  private _ngUnsubscribe = new Subject();
  private _addedAirplanes: Array<AddedAirplaneType> = [];

  airplaneTypes: Array<AirplaneType> = AIRPLANES_DATA;
  @Output() airplaneSelectEvent: EventEmitter<AirplaneType> = new EventEmitter<AirplaneType>();

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addedAirplanesSubscription();
  }

  private addedAirplanesSubscription(): void {
    this.addedAirplanesService.addedAirplanes$
      .pipe(
        takeUntil(this._ngUnsubscribe),
      )
      .subscribe((data: Array<AddedAirplaneType>) => {
        this._addedAirplanes = data;
        this.cdr.detectChanges();
      });
  }

  selectAirplane(airplane: AirplaneType): void {
    if (!this.isAirplaneAdded(airplane)) {
      this.airplaneSelectEvent.emit(airplane);
    }
  }

  isAirplaneAdded(airplane: AirplaneType): boolean {
    return !!this._addedAirplanes.find(item => item.airplaneName === airplane.airplaneName);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
