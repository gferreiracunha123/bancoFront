import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExtratosModule} from './banco/extratos.module';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageComponent} from './shared/components/vmessage/vmessage.component';
import {ExtratoListModule} from "./banco/extrato-list/extrato-list.module";

@NgModule({
  declarations: [
    AppComponent,
    VmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExtratosModule,
    ReactiveFormsModule, ExtratoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
