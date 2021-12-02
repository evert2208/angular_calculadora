import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./app.component.css'],
})
export class toolbarComponent {
  name = 'Angular ' + VERSION.major;
}
