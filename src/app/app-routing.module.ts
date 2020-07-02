import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoListComponent } from './banco/extrato-list/extrato-list.component';
import { ExtratoListResolver } from './banco/extrato-list/extrato-list.resolver';


const routes: Routes = [
  { path: '', component: ExtratoListComponent,resolve:{extratos:ExtratoListResolver} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
