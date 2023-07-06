import { Injectable } from '@angular/core';
import { Futuro } from '../interfaces/Futuro';

@Injectable({
  providedIn: 'root'
})
export class FuturoCoberturaService {

  constructor() { }

  resultadoFinal(futuro: Futuro): number {
    if (futuro.tipoCobertura === "vendedora") {

      return futuro.cantidad * (futuro.futuroInicial + this.base(futuro));
    } else {
      return futuro.cantidad * (-futuro.futuroInicial - this.base(futuro));
    }

  }

  resultadoSpot(futuro: Futuro): number {
    if (futuro.tipoCobertura === "vendedora") {
      return futuro.cantidad * futuro.spotFinal;
    } else {
      return futuro.cantidad * -futuro.spotFinal;
    }
  }

  resultadoFuturo(futuro: Futuro): number {
    if (futuro.tipoCobertura === "vendedora") {
      return futuro.cantidad * (futuro.futuroInicial - futuro.futuroFinal);
    } else {
      return futuro.cantidad * (-futuro.futuroInicial + futuro.futuroFinal);
    }
  }

  base(futuro: Futuro): number {
    return futuro.spotFinal - futuro.futuroFinal;
  }

}
