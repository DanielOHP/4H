import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eje1Component } from './ejercicios/eje1/eje1.component';
import { Eje2Component } from './ejercicios/eje2/eje2.component';

const routes: Routes = [
{path:'eje1',component:Eje1Component},
{path:'eje2',component:Eje2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
