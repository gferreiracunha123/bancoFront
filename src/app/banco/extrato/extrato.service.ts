import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Extratos} from "../extratos";

const API = 'http://localhost:8080/api';

@Injectable({providedIn: 'root'})
export class ExtratoService {

  constructor(private http: HttpClient) {
  }

  listFromUserPaginated() {
    return this.http
      .get<Extratos[]>(API + '/extratos');
  };

}
