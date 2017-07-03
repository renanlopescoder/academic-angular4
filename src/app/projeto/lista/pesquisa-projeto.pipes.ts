import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesquisa'
})
export class PesquisaProjeto implements PipeTransform {
  transform (projetos, digitado: string) {
    digitado = digitado.toLowerCase();
    return projetos.filter( projeto => projeto.project.toLowerCase().includes(digitado) );
  }
};
