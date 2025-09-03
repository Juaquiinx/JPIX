import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {


  //numero:number=0;
  mensaje:string;
  //activo:boolean=true;

  constructor() { 
    this.mensaje="Hola prueba!";
  }
  imprimirMsg(){
    console.log(this.mensaje);

  }


  ngOnInit() {
  }

}
