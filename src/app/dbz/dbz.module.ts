import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { dbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent,PersonajesComponent,AgregarComponent
    ],
  imports: [
    CommonModule,FormsModule
  ],
  providers: [ //son todos los servicios sirven como singleton, unica instancia que vamos
              // a tenera a lo largo de todo el módulo de DBZ
     dbzService
  ]
})
export class DbzModule { }
