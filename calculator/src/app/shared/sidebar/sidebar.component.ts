import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

  irFuturo(){
    this.router.navigate(["/futuro"])
  }
  
  irCoberturaFuturo(){
    this.router.navigate(["/cobertura-futuros"])
  }

  irCoberturaOpcion(){
    this.router.navigate(["/cobertura-opciones"])
  }
}
