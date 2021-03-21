import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AddedAirplanesService} from '../../core/services/added-airplanes.service';
import {Observable} from 'rxjs';
import {AirplaneType} from '../../core/types/airplane.type';
import {MatDialog} from '@angular/material';
import {RemoveAirplaneDialogComponent} from '../../shared/dialogs/remove-airplane-dialog/remove-airplane-dialog.component';
import {AddedAirplaneType} from '../../core/types/added-airplane.type';
import {Router} from '@angular/router';
import {appRoutes} from '../../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  addedAirplanes$: Observable<Array<AddedAirplaneType>>;

  constructor(private addedAirplanesService: AddedAirplanesService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.addedAirplanes$ = this.addedAirplanesService.addedAirplanes$;
  }

  removeAirplane(airplane: AddedAirplaneType): void {
    this.dialog.open(RemoveAirplaneDialogComponent, {panelClass: 'remove-airplane-dialog-container'})
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.addedAirplanesService.removeAirplane(airplane);
        }
      });
  }

  get airplanesLength(): number {
    return this.addedAirplanesService.airplaneList.length;
  }

  onCalculateClick(): void {
    this.router.navigate([appRoutes.results]).then();
  }

}
