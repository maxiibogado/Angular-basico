import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  { // implementa onInit
  heroes: string[] = ["Spiderman","Ironman", "Hulk","Aquaman" , "Goku"];
  heroeBorradoAMostrar:string = "";
  listadoDeHeroesBorrado:string[] = [];

  
  borrarHeroe() {
  console.log("Borrando...");
  console.log(`Los Héroes actuales son: ${ this.heroes }`);
  const heroeBorrado = this.heroes.shift();
  console.log(`Los nuevos Héroes son: ${ this.heroes }`);
  console.log(`El Héroe borrado es :  ${heroeBorrado || "No se pudo borrar el héroe ya que no había"}`);
  this.heroeBorradoAMostrar = heroeBorrado || "";
  if (this.heroeBorradoAMostrar != "" ) {
    this.listadoDeHeroesBorrado.push(heroeBorrado || " ");
  }
  console.log(`El listado de héroes borrados son: ${this.listadoDeHeroesBorrado}`)
  }

    
  


  }


