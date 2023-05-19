import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../login/login.component').then((r) => r.LoginComponent),
  },
  {
    path: 'index',
    loadComponent: () =>
      import('../main-index/main-index.component').then(
        (r) => r.MainIndexComponent
      ),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('../javascript/javascript.routes').then((r) => r.javaScriptRout),
  },
  {
    path: 'angular',
    loadComponent: () =>
      import('../angular/angular.component').then((r) => r.AngularComponent),
  },
];
