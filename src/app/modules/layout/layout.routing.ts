import {RouterModule, Routes} from '@angular/router';
import {appRoutes} from '../../app.routes';
import {CalculationComponent} from './pages/calculation/calculation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: appRoutes.calculation, pathMatch: 'full',
      },
      {
        path: appRoutes.calculation,
        component: CalculationComponent,
      },
    ],
  },
];

export const LayoutRouting = RouterModule.forChild(routes);
