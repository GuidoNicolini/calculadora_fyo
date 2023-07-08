import { Component, ViewChild } from '@angular/core';
import { DatosDeEntradaComponent } from '../../components/datos-de-entrada/datos-de-entrada.component';
import { Opcion } from 'src/app/interfaces/Opcion';
import { OpcionCoberturaService } from 'src/app/services/opcion-cobertura.service';

@Component({
  selector: 'app-pantalla-principal-opciones',
  templateUrl: './pantalla-principal-opciones.component.html',
  styleUrls: ['./pantalla-principal-opciones.component.css']
})
export class PantallaPrincipalOpcionesComponent {

  @ViewChild(DatosDeEntradaComponent)
  child !: DatosDeEntradaComponent;

  datos !: Opcion;

  resultadoFinal !: number;
  resultadoSpot !: number;
  resultadoFuturo !: number;
  base !: number;
  breakheaven !: number;
  valorIntrinseco !: number;
  valorExtrinseco !: number;
  estado !: string;

  mostrar: boolean = false;

  constructor(private service: OpcionCoberturaService) { }


  actualizarDatos() {
    this.datos = this.child.myOpcion;

    this.resultadoFinal = this.service.resultadoFinal(this.datos);
    this.resultadoSpot = this.service.resultadoSpot(this.datos);
    this.resultadoFuturo = this.service.resultadoFuturo(this.datos);
    this.base = this.service.base(this.datos);
    this.breakheaven = this.service.breakheaven(this.datos);
    this.valorIntrinseco = this.service.valorIntrinseco(this.datos);
    this.valorExtrinseco = this.service.valorExtrinseco(this.datos);
    this.estado = this.service.estado(this.datos);

    this.mostrar = true;
  }

}
