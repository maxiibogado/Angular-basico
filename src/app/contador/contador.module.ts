import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[ // dicen que cosas tiene este modulo, ejemplo: que componentes, que otras cosas
    ContadorComponent
    ],
    exports:[
    ContadorComponent
    ],
    imports:[
    CommonModule
    ]
})

export class ContadorModule {


}