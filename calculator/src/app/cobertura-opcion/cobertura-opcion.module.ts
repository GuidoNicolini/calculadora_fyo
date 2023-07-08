import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaPrincipalOpcionesComponent } from './views/pantalla-principal-opciones/pantalla-principal-opciones.component';
import { DatosDeEntradaComponent } from './components/datos-de-entrada/datos-de-entrada.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PantallaPrincipalOpcionesComponent,
    DatosDeEntradaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PantallaPrincipalOpcionesComponent
  ]
})
export class CoberturaOpcionModule { }
