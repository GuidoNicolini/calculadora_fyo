import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CoberturaFuturoModule } from './cobertura-futuro/cobertura-futuro.module';
import { AppRoutingModule } from './app-routing.module';
import { CoberturaOpcionModule } from './cobertura-opcion/cobertura-opcion.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    CoberturaFuturoModule,
    CoberturaOpcionModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
