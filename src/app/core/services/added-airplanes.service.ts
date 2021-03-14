import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AirplaneType} from '../types/airplane.type';
import {AddedAirplaneType} from '../types/added-airplane.type';

@Injectable({
  providedIn: 'root',
})
export class AddedAirplanesService {

  private _addedAirplanes: Array<AddedAirplaneType> = [];

  private _addedAirplanesSubject$ = new BehaviorSubject<Array<AddedAirplaneType>>([]);

  constructor() {
  }

  addNewAirplane(airplane: AddedAirplaneType): void {
    this._addedAirplanes.push(airplane);
    this._addedAirplanesSubject$.next(this._addedAirplanes);
  }

  removeAirplane(airplane: AirplaneType): void {
    this._addedAirplanes = this._addedAirplanes.filter(value => value.airplaneName !== airplane.airplaneName);
    this._addedAirplanesSubject$.next(this._addedAirplanes);
  }

  isAirplaneAdded(airplane: AirplaneType): boolean {
    return !!this._addedAirplanes.find(item => item.airplaneName === airplane.airplaneName);
  }

  get addedAirplanes$(): Observable<Array<AddedAirplaneType>> {
    return this._addedAirplanesSubject$.asObservable();
  }

  get addedAirplanes(): Array<AddedAirplaneType> {
    return this._addedAirplanes;
  }

  calculateForm(): void {
    console.log(this.addedAirplanes);
  }

  get airplaneList(): Array<AddedAirplaneType> {
    return this._addedAirplanes;
  }
}
