import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { Opcion } from 'src/app/interfaces/Opcion';

@Component({
  selector: 'app-datos-de-entrada',
  templateUrl: './datos-de-entrada.component.html',
  styleUrls: ['./datos-de-entrada.component.css']
})
export class DatosDeEntradaComponent implements OnInit{
  myForm !: FormGroup;
  myOpcion : Opcion = {
    cantidad : 0, 
    strike : 0,
    prima : 0,
    futuroFinal : 0, 
    spotFinal : 0,   
    tipoCobertura : ""
  };

  actualizado:boolean = false;
  private subscription!: Subscription;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }
  

  createForm() {
    this.myForm = this.formBuilder.group({
      cantidad: [''],
      strike: [''],
      prima: [''],
      futuroFinal: [''],
      spotFinal: [''],
      tipoCobertura:[''],
      seEntrega: [false],
    });
  }

  submitForm(){
    const formData: Opcion = this.myForm.value;
    this.myOpcion = formData;
    this.actualizado = true;
    const timer$ = timer(2000);
    this.subscription = timer$.subscribe((valor) =>{
        this.actualizado = false;
        this.subscription.unsubscribe;
      })
    } 
}
