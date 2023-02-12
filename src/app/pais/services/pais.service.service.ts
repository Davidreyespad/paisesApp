import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<PaisInterface> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisInterface>(url);
  }

  buscarRegion( region: string ): Observable<PaisInterface[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<PaisInterface[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }
}
