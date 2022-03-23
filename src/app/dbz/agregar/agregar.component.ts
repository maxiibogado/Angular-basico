import { Component, Input, Output ,EventEmitter  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {
  
  @Input('nuevo')      nuevo:Personaje = {nombre: "", poder:0}

  constructor (private dbzService:dbzService){

  }  
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter ();
  
  agregar(){
   // event.preventDefault(); // prevee el comportamiento por defecto que tiene un formulario. 
   // lo hacemos de otra manera para Angular
   if (this.nuevo.nombre.trim().length === 0) {return;}
    // this.onNuevoPersonaje.emit(this.nuevo) // emite un valor , en este caso Personaje o undefined
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder:0
    }
    
  }
 

}
