import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiveiculosService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(veiculo: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/veiculo', veiculo).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro))
    )
  }

  cadastrar(cliente: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/cliente', cliente).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro))
    )
  }
}
