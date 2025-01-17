import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { Eje1Component } from './ejercicios/eje1/eje1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Eje1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
