import { RouterModule, Routes } from '@angular/router';
import { ListaProjetosComponent } from './projeto/lista/lista-projetos.component';
import { ProjetoFormComponent } from './projeto/form/projeto-form.component';

const appRoutes: Routes = [
  { path: '/', component: ListaProjetosComponent },
  { path: 'alterar/:id', component: ProjetoFormComponent },
  { path: 'cadastro', component: ProjetoFormComponent },
  { path: '**', component: ListaProjetosComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
