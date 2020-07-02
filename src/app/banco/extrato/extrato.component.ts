import { Component, OnInit, Input } from '@angular/core';
import {Extratos} from "../extratos";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @Input() extrato: Extratos;

  constructor() { }

  ngOnInit() {
  }

}
