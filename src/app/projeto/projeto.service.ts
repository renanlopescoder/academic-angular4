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
    this.headers.append('Content-Type', 'application/json')
  }

  public salvar(projeto: ProjetoComponent) {
    if (projeto._id) {

      return this.http.put(`${this.url}/update/project/${projeto._id}`, JSON.stringify(projeto), { headers: this.headers });

    } else {

        return this.http.post(`${this.url}/create/project`, JSON.stringify(projeto), { headers: this.headers });

    }
  };

  public lista() {
    return this.http.get(`${this.url}/list/projects`);
  };

  public selecionar(id: string) {
    return this.http.get(`${this.url}/select/project/${id}`);
  };

  public remove(projetoId: ProjetoComponent) {
    return this.http.delete(`${this.url}/delete/project/${projetoId}`);
  };
};
