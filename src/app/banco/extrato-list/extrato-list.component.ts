import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {ExtratoService} from '../extrato/extrato.service';
import {Extratos} from "../extratos";
import {error} from "util";

@Component({
  selector: 'app-extrato-list',
  templateUrl: './extrato-list.component.html',
  styleUrls: ['./extrato-list.component.css']
})
export class ExtratoListComponent implements OnInit {

  title: string = '';
  extrato: Extratos[] = [];
  hasMore: boolean = false;
  currentPage: number = 1;
  userName: string = '';
  filter: string = '';
  name1="Pesquisar";
  name2="Próximo";
  name3="Voltar"

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: ExtratoService) {
  }

  ngOnInit() {
    this.load("")
  }

  load(title) {
    this.extrato = [];
    this.photoService.listFromUserPaginated()
      .subscribe(extrato => {
        this.extrato = this.extrato.concat(extrato);
        if (!extrato.length)
          this.hasMore = true;
      });
  }

}



