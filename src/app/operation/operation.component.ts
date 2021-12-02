import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-operation',
  templateUrl: './operation.component.html',
  styleUrls: [ './app.component.css' ]
})
export class operationComponent  {
  name = 'Angular ' + VERSION.major;
}