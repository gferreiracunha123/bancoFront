import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExtratoModule } from './extrato/extrato.module';
import { ExtratoListModule } from './extrato-list/extrato-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';



@NgModule({
  imports: [
      HttpClientModule
    , CommonModule
    , ExtratoListModule
    , ExtratoModule
    , DarkenOnHoverModule
    , CardModule]
})
export class ExtratosModule { }
