import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HelloWorldComponent} from './hello-world.component';
import {GenruleModule} from '../genrule-module/index';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    GenruleModule, FormsModule, RouterModule, RouterModule.forChild([{path: '', component: HelloWorldComponent}])
  ],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}