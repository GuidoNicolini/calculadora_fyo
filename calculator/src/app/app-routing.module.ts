import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalFuturoComponent } from './cobertura-futuro/views/pantalla-principal/pantalla-principal-futuro.component';
import { VistaFuturoComponent } from './futuro/views/vista-futuro/vista-futuro.component';
import { PantallaPrincipalOpcionesComponent } from './cobertura-opcion/views/pantalla-principal-opciones/pantalla-principal-opciones.component';

const routes: Routes = [
  {
    path:'',
    component: VistaFuturoComponent,
    pathMatch: "full"
  },
  {
    path:'futuro',
    component: VistaFuturoComponent,
  },
  {
    
    path:"cobertura-futuros",
    component: PantallaPrincipalFuturoComponent
  },
  {
    
    path:"cobertura-opciones",
    component: PantallaPrincipalOpcionesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
