import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({ // es el decorador
  declarations: [ // en declaraciones van los componentes
    AppComponent // es sobre los componentes que se están utilizando
  ],
  imports: [ // colocamos otros modulos
    BrowserModule,HeroesModule,ContadorModule
  ],
  providers: [], // son servicios especificos a un módulo
  bootstrap: [AppComponent] // es un componente principal
})
export class AppModule { }
