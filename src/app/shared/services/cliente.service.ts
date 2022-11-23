import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/cliente';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTES = 'http://localhost:3000/clientes';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTES)

  }

  inserir(novoCliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      this.URL_CLIENTES, novoCliente);
  }

  // DELETE /clientes/3
  apagar(idParaRemocao: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_CLIENTES}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_CLIENTES}/${id}`);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .put<Cliente>(`${this.URL_CLIENTES}/${cliente.id}`, cliente);
  }
}

