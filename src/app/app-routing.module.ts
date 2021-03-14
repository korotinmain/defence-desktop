import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', redirectTo: appRoutes.layout, pathMatch: 'full',
  },
  {
    path: appRoutes.layout,
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: appRoutes.results,
    loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
