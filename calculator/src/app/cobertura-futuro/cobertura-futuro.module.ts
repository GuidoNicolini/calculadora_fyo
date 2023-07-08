import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosDeEntradaComponent } from './components/datos-de-entrada/datos-de-entrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PantallaPrincipalFuturoComponent } from './views/pantalla-principal/pantalla-principal-futuro.component';



@NgModule({
  declarations: [
    PantallaPrincipalFuturoComponent,
    DatosDeEntradaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PantallaPrincipalFuturoComponent
  ]
})
export class CoberturaFuturoModule { }
