import { Injectable } from '@angular/core';
import { Opcion } from '../interfaces/Opcion';

@Injectable({
  providedIn: 'root'
})
export class OpcionCoberturaService {

  constructor() { }

  resultadoFinal(opcion: Opcion): number {
    if (opcion.tipoCobertura === "vendedora") {
      if (opcion.strike >= opcion.futuroFinal) {
        return opcion.cantidad * (opcion.strike + this.base(opcion) - opcion.prima);
      } else {
        return opcion.cantidad * (opcion.spotFinal - opcion.prima);
      }

    } else {
      if (opcion.strike <= opcion.futuroFinal) {
        return opcion.cantidad * (-opcion.strike - this.base(opcion) - opcion.prima);
      } else {
        return opcion.cantidad * (-opcion.spotFinal - opcion.prima);
      }

    }

  }

  resultadoSpot(opcion: Opcion): number {
    if (opcion.tipoCobertura === "vendedora") {
      return opcion.cantidad * opcion.spotFinal;
    } else {
      return opcion.cantidad * -opcion.spotFinal;
    }

  }

  resultadoFuturo(opcion: Opcion): number {
    if (opcion.tipoCobertura === "vendedora") {
      if (opcion.strike >= opcion.futuroFinal) {
        return opcion.cantidad * (opcion.strike - opcion.futuroFinal - opcion.prima);
      } else {
        return opcion.cantidad * -opcion.prima;
      }
    } else {
      if (opcion.strike <= opcion.futuroFinal) {
        return opcion.cantidad * (-opcion.strike + opcion.futuroFinal - opcion.prima);
      } else {
        return opcion.cantidad * -opcion.prima;
      }
    }
  }

  base(opcion: Opcion): number {
    return opcion.spotFinal - opcion.futuroFinal;
  }

  breakheaven(opcion: Opcion): number {
    if (opcion.tipoCobertura === "vendedora") {
      return opcion.strike - opcion.prima;
    } else {
      return opcion.strike + opcion.prima;
    }
  }

  valorIntrinseco(opcion: Opcion): number {
    if (opcion.tipoCobertura === "vendedora") {
      return Math.max(0, opcion.strike - opcion.futuroFinal);
    } else {
      return Math.max(0, -opcion.strike + opcion.futuroFinal);
    }
  }

  valorExtrinseco(opcion: Opcion): number {
    return opcion.prima - this.valorIntrinseco(opcion);
  }

  estado(opcion: Opcion): string {

    if (opcion.strike === opcion.futuroFinal) {
      return "ATM"
    }

    if (opcion.tipoCobertura === "vendedora") {
      if (opcion.strike > opcion.futuroFinal) {
        return "ITM"
      }
    } else {
      if (opcion.strike < opcion.futuroFinal) {
        return "ITM"
      }
    }


    if (opcion.tipoCobertura === "vendedora") {
      if (opcion.strike < opcion.futuroFinal) {
        return "OTM"
      }
    } else {
      if (opcion.strike > opcion.futuroFinal) {
        return "OTM"
      }
    }

    return "";

  }
}
