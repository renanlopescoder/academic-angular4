import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ProjetoService } from '../projeto.service';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: `projetos`,
  templateUrl: `./lista-projetos.component.html`
})
export class ListaProjetosComponent {

  projetos: Object[] = [];
  service: ProjetoService;
  constructor(service: ProjetoService) {
    this.service = service;
    this.service.lista().subscribe(
      res => {
        this.projetos = res.json();
        console.log(this.projetos);
      }
    );
  }

  delete(projeto) {
    this.service.remove(projeto._id).subscribe(
      () => {
        // tslint:disable-next-line:prefer-const
        let novosProjetos = this.projetos.slice(0);
        const indice = this.projetos.indexOf(projeto);
        novosProjetos.splice(indice, 1);
        this.projetos = novosProjetos;
        console.log('Removido com sucesso');
      }
    );
  }
}
