import { DatePipe } from '@angular/common';
import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { PessoaOperacaoList, PessoaOperacaoRequest } from 'src/app/models/pessoa-operacao.model';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { PessoaOperacaoService } from 'src/app/services/pessoa-operacao.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Crypto } from 'src/app/utils/crypto';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnDestroy {

    faFile = faFile;
    modalOpen = false;
    objeto: PessoaOperacaoRequest = new PessoaOperacaoRequest;
    objetoList: PessoaOperacaoList = new PessoaOperacaoList;
    loading = false;
    subscription: Subscription[] = [];

    @ViewChild('template') template: TemplateRef<any>;
    @ViewChild('icon') icon: TemplateRef<any>;
    modal: Modal = new Modal;

    constructor(
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        private modalService: ModalService,
        private crypto: Crypto,
        private datepipe: DatePipe,
        private pessoaService: PessoaService,
        private pessoaOperacaoService: PessoaOperacaoService

    ) {


    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }
    
  ngAfterViewInit() {
    this.modal.id =  0;
    this.modal.template =  this.template;
    this.modal.icon =  this.icon;
    this.modal.style =  { 'max-width': '600px', overflow: 'visible' };
    this.modal.activatedRoute =  this.activatedRoute;
    this.modal.routerBackOptions = { relativeTo: this.activatedRoute };
    this.modal.title = 'Detalhes';
    this.modal.routerBack = ['../../'];


        var params = this.activatedRoute.params.subscribe(async p => {
            if (p['operacao_id']) {
                this.objeto.id = this.crypto.decrypt(p['operacao_id']);
                var list = this.pessoaOperacaoService.list.value;
                if (list.length == 0) 
                var list =  await lastValueFrom(this.pessoaOperacaoService.getList())
                this.objetoList = list.find(x => x.id == this.objeto.id) as PessoaOperacaoList;
                if (!this.objetoList) {
                    this.voltar();
                    return;
                }
                this.objeto.data = this.datepipe.transform(new Date(this.objeto.data), 'yyyy-MM-ddTHH:mm') as unknown as Date
                lastValueFrom(this.pessoaOperacaoService.get(this.objeto.id))
                    .then(operacao => {
                        this.objeto = operacao;
                        setTimeout(() => {
                            this.modal = this.modalService.addModal(this.modal, 'moeda');
                        }, 200);
                    })
                    .catch(res => {
                        this.voltar();
                    })
            } else {
                this.voltar();
            }
        });
        this.subscription.push(params);

    }

    
    voltar() {
        this.modalService.removeModal(this.modal.id);
    }


    exportarPDF() {
        this.loading = true;
      
        this.loading = false;
    }




}