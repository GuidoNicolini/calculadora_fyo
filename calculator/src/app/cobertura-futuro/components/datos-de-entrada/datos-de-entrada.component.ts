import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Subscription, interval, timer } from 'rxjs';
import { Futuro } from 'src/app/interfaces/Futuro';


@Component({
  selector: 'app-datos-de-entrada',
  templateUrl: './datos-de-entrada.component.html',
  styleUrls: ['./datos-de-entrada.component.css']
})
export class DatosDeEntradaComponent implements OnInit{

  myForm !: FormGroup;
  myFuturo : Futuro = {
    cantidad : 0, 
    futuroInicial : 0,
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
      futuroInicial: [''],
      futuroFinal: [''],
      spotFinal: [''],
      tipoCobertura:[''],
      seEntrega: [false],
    });
  }

  submitForm(){
    const formData: Futuro = this.myForm.value;
    this.myFuturo = formData;
    this.actualizado = true;
    const timer$ = timer(2000);
    this.subscription = timer$.subscribe((valor) =>{
        this.actualizado = false;
        this.subscription.unsubscribe;
      })
    } 
    
  }
  
  
  

