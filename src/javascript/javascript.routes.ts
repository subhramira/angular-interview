import { Routes } from '@angular/router';
import { AsyncJavaScriptComponent } from './async_javascript/async_javascript.component';

import { HigherorderFunctionComponent } from './higherorder-function/higherorder-function.component';
import { ImportantConceptComponent } from './Important_concepts/important_concepts.component';
import { JavascriptIndexComponent } from './javascript-index/javascript-index.component';

export const javaScriptRout: Routes = [
  {
    path: '',
    component: JavascriptIndexComponent,
    children: [
      { path: 'higherorder', component: HigherorderFunctionComponent },
      { path: 'asyncjavascript', component: AsyncJavaScriptComponent },
      { path: 'importantconcept', component: ImportantConceptComponent },
    ],
  },
];
