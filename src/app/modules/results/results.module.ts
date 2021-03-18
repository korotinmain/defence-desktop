import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRouting} from './results.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultsComponent} from './pages/results/results.component';
import {MatButtonToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    ResultsRouting,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  providers: [],
})
export class ResultsModule {
}
