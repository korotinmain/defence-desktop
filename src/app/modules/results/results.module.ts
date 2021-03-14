import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRouting} from './results.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultsComponent} from './pages/results/results.component';

@NgModule({
  declarations: [
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    ResultsRouting,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class ResultsModule {
}
