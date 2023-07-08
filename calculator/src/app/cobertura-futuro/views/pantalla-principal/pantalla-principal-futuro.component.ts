import { Component, ViewChild } from '@angular/core';
import { DatosDeEntradaComponent } from '../../components/datos-de-entrada/datos-de-entrada.component';
import { FuturoCoberturaService } from 'src/app/services/futuro-cobertura.service';
import { Futuro } from 'src/app/interfaces/Futuro';

@Component({
  selector: 'app-pantalla-principal-futuro',
  templateUrl: './pantalla-principal-futuro.component.html',
  styleUrls: ['./pantalla-principal-futuro.component.css']
})
export class PantallaPrincipalFuturoComponent {

  @ViewChild(DatosDeEntradaComponent)
  child !: DatosDeEntradaComponent;

  datos !: Futuro;

  resultadoFinal !: number;
  resultadoSpot !: number;
  resultadoFuturo !: number;
  base !: number;

  mostrar: boolean = false;

  constructor(private service: FuturoCoberturaService) { }


  actualizarDatos() {
    this.datos = this.child.myFuturo;

    this.resultadoFinal = this.service.resultadoFinal(this.datos);
    this.resultadoSpot = this.service.resultadoSpot(this.datos);
    this.resultadoFuturo = this.service.resultadoFuturo(this.datos);
    this.base = this.service.base(this.datos);

    this.mostrar = true;
  }

}
