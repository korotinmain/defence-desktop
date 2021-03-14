import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculationComponent} from './pages/calculation/calculation.component';
import {LayoutRouting} from './layout.routing';
import {AirplaneSelectComponent} from './pages/calculation/components/airplane-select/airplane-select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoefficientComponent} from './pages/calculation/components/coefficient/coefficient.component';

@NgModule({
  declarations: [
    CalculationComponent,
    AirplaneSelectComponent,
    CoefficientComponent,
  ],
  imports: [
    CommonModule,
    LayoutRouting,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class LayoutModule {
}
