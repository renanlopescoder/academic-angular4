import { Http, Headers } from '@angular/http';
import { ProjetoComponent } from './projeto.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjetoService {

  public http: Http;
  public headers: Headers;
  public url: string = 'https://rest-api-node.herokuapp.com';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  public salvar(projeto: ProjetoComponent) {
    if (projeto._id) {

      return this.http.put(`${this.url}/projects/update/${projeto._id}`, JSON.stringify(projeto), { headers: this.headers });

    } else {

        return this.http.post(`${this.url}/projects/create`, JSON.stringify(projeto), { headers: this.headers });

    }
  };

  public lista() {
    return this.http.get(`${this.url}/projects`);
  };

  public selecionar(id: string) {
    return this.http.get(`${this.url}/projects/select/${id}`);
  };

  public remove(projetoId: ProjetoComponent) {
    return this.http.delete(`${this.url}/projects/delete/${projetoId}`);
  };
};
