import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class dbzService{

 private _personajes: Personaje[] = [ // con el private hago que nadie modifiqué
                                        // los personajes. El _ se usa de forma 
                                        // estandar para decir que es propiedad privada.

        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:7500
        }
      ];

      
    get personajes():Personaje[] {      //Js manda los objetos por referencia y esto puede ser un 
    return [...this._personajes];  // inconveniente porque puede que el getter se pueda
                               // manipular. Entonces para evitar y romper esa relación
                               // se hace de la manera con el operador spread.
                               // las llaves de que es un array, el operador spread que separa
                               // cada uno de los elementos independientes que tiene el array
                               // y crea uno nuevo. De está manera rompé la referencia con los
                               // personajes.
    }  

    constructor(){}

    agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);

    }

}