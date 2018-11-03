import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<span>Some text</span>',
})
export class MyComponent {}

@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class GenruleModule {}