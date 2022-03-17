import { Component } from "@angular/core";

@Component({
    selector:"app-contador",
    template:`
    <h1>{{titulo}}</h1>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)= "acumular(base);"> {{base}} </button> <!--con () se ingresa el evento-->

    <span> {{numero}} </span>

    <button (click)= "acumular(-base);"> {{-base}} </button> <!--no se usa this porque todo hace referencia a la 
                                                      a la misma clase      -->
    `
})


export class ContadorComponent{
    titulo:string = 'Contador App'; // es el nombre del proyecto que le habiamos dado
    // bases estaba , se puede modificar y lo llamar en el html con {{}}

    numero:number = 0;

    base:number = 5;

    acumular (valor:number){
    this.numero +=  valor;
    }
}