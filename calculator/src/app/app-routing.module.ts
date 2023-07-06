import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalFuturoComponent } from './cobertura-futuro/views/pantalla-principal/pantalla-principal-futuro.component';
import { VistaFuturoComponent } from './futuro/views/vista-futuro/vista-futuro.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
