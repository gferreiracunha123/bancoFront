import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ExtratoService} from '../extrato/extrato.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Extratos} from "../extratos";

@Injectable({ providedIn: 'root' })
export class ExtratoListResolver implements Resolve<Observable<Extratos[]>> {

    constructor(private service: ExtratoService) { }
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Extratos[]> {
        return this.service.listFromUserPaginated();
    }
}
