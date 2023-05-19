import { Routes } from '@angular/router';
import { CallbackfunctionComponent } from './callbackfunction/callbackfunction.component';
import { HigherorderFunctionComponent } from './higherorder-function/higherorder-function.component';
import { JavascriptIndexComponent } from './javascript-index/javascript-index.component';
import { PromiseComponent } from './promise/promise.component';

export const javaScriptRout: Routes = [
  {
    path: '',
    component: JavascriptIndexComponent,
    children: [
      { path: 'higherorder', component: HigherorderFunctionComponent },
      { path: 'callback', component: CallbackfunctionComponent },
      { path: 'promise', component: PromiseComponent },
    ],
  },
];
