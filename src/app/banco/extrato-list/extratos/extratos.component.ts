import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Extratos} from "../../extratos";

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html',
  styleUrls: ['./extratos.component.css']
})
export class ExtratosComponent implements  OnChanges {


  @Input() extratos: Extratos[] = [];
  rows: Extratos[] = [];


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.extratos) {
      this.rows = this.getGroupColuns(this.extratos);
    }
  }


  getGroupColuns(extrato: Extratos[]) {
    const newRows = [];
    for (let index = 0; index < extrato.length; index += 3) {
      newRows.push(extrato.slice(index, index + 3));
    }
    return newRows;
  }



}
