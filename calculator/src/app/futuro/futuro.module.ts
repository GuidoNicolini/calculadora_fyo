import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaFuturoComponent } from './views/vista-futuro/vista-futuro.component';



@NgModule({
  declarations: [
    VistaFuturoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VistaFuturoComponent
  ]

})
export class FuturoModule { }
