import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { toolbarComponent } from './toolbar/toolbar.Component';
import { navbarComponent } from './navbar/navbar.Component';
import { operationComponent } from './operation/operation.Component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule,
    toolbarComponent,
    navbarComponent,
    operationComponent,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
