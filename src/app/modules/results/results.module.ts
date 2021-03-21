import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRouting} from './results.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultsComponent} from './pages/results/results.component';
import {MatButtonToggleModule} from '@angular/material';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    ResultsRouting,
    ReactiveFormsModule,
    MatButtonToggleModule,
    ChartModule,
    HighchartsChartModule,
  ],
  providers: [
    {provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting]},
  ],
})
export class ResultsModule {
}
