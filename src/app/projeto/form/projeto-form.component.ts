import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ProjetoComponent } from '../projeto.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'projeto',
    templateUrl: './projeto-form.component.html'
})
export class ProjetoFormComponent {

    projeto: ProjetoComponent = new ProjetoComponent();
    http: Http;
    route: ActivatedRoute;
    service: ProjetoService;
    router: Router;

    constructor(service: ProjetoService, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            const id = params['id'];

            if (id) {
                this.service.selecionar(id)
                .subscribe(projeto => this.projeto = projeto.json());
            }
        });
    }

    cadastrar(event) {
        event.preventDefault();
        this.service.cadastra(this.projeto)
            .subscribe(() => {
                console.log('salvo com sucesso');
                this.projeto = new ProjetoComponent();
                this.router.navigate(['']);
            }, erro => console.log(erro));
    }

    alterar() {
        this.service.cadastra(this.projeto)
            .subscribe(() => {
                console.log('salvo com sucesso');
                this.projeto = new ProjetoComponent();
            }, erro => console.log(erro));
    }
}
