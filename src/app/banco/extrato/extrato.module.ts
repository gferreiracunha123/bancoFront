import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './extrato.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ExtratoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ExtratoComponent]
})
export class ExtratoModule { }
