import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription, lastValueFrom } from 'rxjs';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { PessoaOperacaoService } from 'src/app/services/pessoa-operacao.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Crypto } from 'src/app/utils/crypto';
import { getError } from 'src/app/utils/error';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    faTrash = faTrash;
    id: number = 0;
    erro: string = '';
    loading = false;
    subscription: Subscription[] = [];
    @ViewChild('template') template: TemplateRef<any>
    @ViewChild('icon') icon: TemplateRef<any>
    modal: Modal = new Modal;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modalService: ModalService,
        private pessoaService: PessoaService,
        private pessoaOperacaoService: PessoaOperacaoService,
        private crypto: Crypto,
    ) { }
    
    ngAfterViewInit(): void {
        this.modal.id =  0;
        this.modal.template =  this.template;
        this.modal.icon =  this.icon;
        this.modal.style =  { 'max-width': '400px', overflow: 'visible' };
        this.modal.activatedRoute =  this.activatedRoute;
        this.modal.routerBackOptions = { relativeTo: this.activatedRoute };
        this.modal.routerBack = ['../../'];
        this.modal.title = 'Excluir registro';

        
        var params = this.activatedRoute.params.subscribe(p => {
            if (p['operacao_id']) {
                try {
                    this.id = this.crypto.decrypt(p['operacao_id']);
                    setTimeout(() => {
                        this.modal = this.modalService.addModal(this.modal, 'delete operacao');
                    }, 200);
                } catch(e) {
                    this.voltar();
                }
            } else {
                this.voltar();
            }
        });
        this.subscription.push(params);
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

   
    voltar() {
        this.modalService.removeModal(this.modal);
    }


    send() {
        this.loading = true;
        this.erro = '';

        lastValueFrom(this.pessoaOperacaoService.delete(this.id))
            .then(res => {
                this.loading = false;
                if (res.sucesso) {
                    var list = this.pessoaOperacaoService.list.value;
                    var index = list.findIndex(x => x.id == this.id)
                    if (index != -1) {
                        list.splice(index, 1);
                        this.pessoaOperacaoService.list.next(list);
                    }

                    lastValueFrom(this.pessoaService.getList());
                    lastValueFrom(this.pessoaOperacaoService.getList());
                    this.voltar();
                } else {
                    this.erro = res.mensagem;
                }
            })
            .catch(res => {
                this.loading = false;
                this.erro = getError(res);
            })
    }
}
