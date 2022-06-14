import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHierarchyModule } from 'ngx-hierarchy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHierarchyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
