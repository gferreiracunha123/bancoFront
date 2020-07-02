import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DarkenOnHoverModule} from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import {CardModule} from 'src/app/shared/components/card/card.module';
import {ExtratoListComponent} from "./extrato-list.component";
import {ExtratoModule} from "../extrato/extrato.module";
import {ExtratosComponent} from "./extratos/extratos.component";

@NgModule({
  declarations: [
    ExtratosComponent
    , ExtratoListComponent
  ],
  exports: [
    ExtratoListComponent
  ],
  imports: [
    CommonModule
    , ExtratoModule
    , CardModule
    , DarkenOnHoverModule
  ]
})
export class ExtratoListModule {
}
