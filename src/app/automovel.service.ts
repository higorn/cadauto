import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Automovel } from './automovel';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AutomovelService {

  constructor(private http: Http) { }

  getAutomoveis(): Promise<Automovel[]> {
    return this.http.get('api/automovel')
      .toPromise()
      .then(resp => resp.json().data as Automovel[]);
  }

  get(id: number): Observable<Automovel> {
    return this.http.get(`api/automovel/${id}`)
      .map(resp => resp.json().data as Automovel);
  }

  create(automovel: Automovel): Observable<Automovel> {
    return this.http.post(`api/automovel/`, automovel).pipe(
      tap(_ => console.log(`added automovel w/ id=${automovel.id}`)));
  }

  update(automovel: Automovel): Observable<Automovel> {
    return this.http.put(`api/automovel/${automovel.id}`, automovel).pipe(
      tap(_ => console.log(`updated automovel id=${automovel.id}`)));
  }

  delete(automovel: Automovel): Observable<Automovel> {
    return this.http.delete(`api/automovel/${automovel.id}`).pipe(
      tap(_ => console.log(`deleted automovel id=${automovel.id}`)));
  }
}
