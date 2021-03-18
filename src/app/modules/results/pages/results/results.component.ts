import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AddedAirplanesService} from '../../../../core/services/added-airplanes.service';
import {Observable} from 'rxjs';
import {AddedAirplaneType} from '../../../../core/types/added-airplane.type';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {

  addedAirplanes$: Observable<Array<AddedAirplaneType>>;

  constructor(private addedAirplanesService: AddedAirplanesService) {
  }

  ngOnInit(): void {
    this.addedAirplanes$ = this.addedAirplanesService.addedAirplanes$;
  }

}
