import {RouterModule, Routes} from '@angular/router';
import {ResultsComponent} from './pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
  },
];

export const ResultsRouting = RouterModule.forChild(routes);
