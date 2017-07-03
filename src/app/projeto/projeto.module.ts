import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaProjetosComponent } from './lista/lista-projetos.component';
import { ProjetoFormComponent } from './form/projeto-form.component';
import { PesquisaProjeto } from './lista/pesquisa-projeto.pipes';
import { ProjetoService } from './projeto.service';
import { routing } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    ListaProjetosComponent,
    ProjetoFormComponent,
    PesquisaProjeto
  ],
  exports: [
    ListaProjetosComponent,
    ProjetoFormComponent,
    PesquisaProjeto
  ],
  providers: [
    ProjetoService
  ]
})
export class ProjetoModule { }
