import { CommonModule } from "@angular/common";
import { NgModule  } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ // dicen que cosas tiene este modulo, ejemplo: que componentes, que otras cosas
    HeroeComponent,ListadoComponent
    ],
    exports:[
    ListadoComponent
    ],
    imports:[
    CommonModule
    ]


})

export class HeroesModule {


}