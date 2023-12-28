import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa.model';
import { BRConsultaResponse, PessoaService } from 'src/app/services/pessoa.service';
import { getError } from 'src/app/utils/error';
import { IsMobile, ScreenWidth } from 'src/app/utils/mobile';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { validateCPF } from 'src/app/utils/validate-cpf';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {
    faUser = faUser;
    objeto: Pessoa = new Pessoa;
    erro: string = '';
    loading = false;
    subscription: Subscription[] = [];
    emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    @ViewChild('template') template: TemplateRef<any>
    @ViewChild('icon') icon: TemplateRef<any>
    loadingConsultaApi = false;

    screen: ScreenWidth = ScreenWidth.lg;
    liberaNome = false;
    modal: Modal = new Modal;

    minDate = new Date('1900-01-01')
    maxDate = new Date()


    constructor(
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        private modalService: ModalService,
        private pessoaService: PessoaService,
        private mobile: IsMobile,
    ) {
        this.mobile.value.subscribe(res => this.screen = res);

    }
    ngAfterViewInit(): void {
        this.modal.title = 'Cadastrar Pessoa';
        this.modal.template = this.template;
        this.modal.style = { 'max-width': '600px' };
        this.modal.routerBack = ['../'];
        this.modal.activatedRoute = this.activatedRoute;
        this.modal.routerBackOptions = { relativeTo: this.activatedRoute };
        this.modal.icon = this.icon;

        setTimeout(() => {
            this.modal = this.modalService.addModal(this.modal, 'create pessoa');
        }, 200);
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    voltar() {
        this.modalService.removeModal(this.modal);
    }

    validaData(input: NgModel) {
        console.log(input)
    }

    validaCPF(input: NgModel, doc: number) {
        if (!input) {
            return;
        }
        if (!doc || doc == 0) {
            input.control.setErrors({ required: true });
            return;
        }

        if (input.name == 'cpf') {
            var valid = validateCPF(doc)
            if (!valid) {
                input.control.setErrors({ invalid: true });
                return;
            }
        }

        var lista: any[] = []
        var existe = lista.filter(x => x.cpf == doc);
        if (existe.length > 0) {
            input.control.setErrors({ jaCadastrado: true });
            return;
        }

        input.control.setErrors(null);
    }

    procuraPessoa(cpf: NgModel) {
        if (cpf.invalid || !this.objeto.dataNascimento) {
            return;
        }

        this.loadingConsultaApi = true;
        this.erro = '';
        this.liberaNome = false;

        lastValueFrom(this.pessoaService.getPessoa(this.objeto.cpf, this.objeto.dataNascimento))
            .then(res => {
                this.loadingConsultaApi = false;
                
                if (typeof(res) == 'object') {
                    var obj = JSON.parse(JSON.stringify(res)) as BRConsultaResponse;
                    if (obj.ERRO == 'ERRO') {
                        this.objeto.brConsulta_Id_Consulta = obj.ID_CONSULTA;
                        this.objeto.brConsulta_Erro = obj.ERRO as unknown as string;
                        this.liberaNome = true;
                        this.erro = obj.ERRO;
                        this.toastr.error(obj.ERRO)
                    } else if (!obj.ERRO) {
                        this.objeto.dataNascimento = this.formataData(obj.DATA_NASC).substring(0, 10) as unknown as Date;
                        this.objeto.brConsulta_Data_Cap = this.formataData(obj.DATA_CAP) as unknown as Date;
                        this.objeto.brConsulta_Hora_Cap = this.formataData(obj.DATA_CAP, obj.HORA_CAP) as unknown as Date;
                        this.objeto.dataInscricao = this.formataData(obj.DATA_INSCRICAO) as unknown as Date;
                        this.objeto.nome = obj.NOME;
                        this.objeto.digito = obj.DIGITO;
                        this.objeto.brConsulta_Controle = obj.CONTROLE;
                        this.objeto.brConsulta_Id_Consulta = obj.ID_CONSULTA;
                        this.objeto.situacao = obj.SITUACAO;
                        this.objeto.brConsulta_Status = obj.STATUS;
                    }
                    this.objeto.dataAtualizacaoBRConsulta = new Date().toISOString() as unknown as Date;
                    this.liberaNome = false;
                } else {
                    this.liberaNome = true;
                    this.objeto.brConsulta_Erro = res as string;
                    this.erro = res as string;
                    this.toastr.error(res as string)
                }
            })
            .catch(res => {
                console.log('erro', res)
                this.loadingConsultaApi = false;
                this.liberaNome = true;
                this.erro = getError(res);
            })

    }

    send(model: NgForm) {
        this.loading = true;
        this.erro = '';

        lastValueFrom(this.pessoaService.create(this.objeto))
            .then(res => {
                this.loading = false;
                if (res.sucesso) {
                    this.voltar();
                    lastValueFrom(this.pessoaService.getList());
                } else {
                    this.erro = res.detalhes;
                }
            })
            .catch(res => {
                this.loading = false;
                this.erro = getError(res);
            })

    }

    formataData(dataString: string, horaString?: string, where?: string) {
        var hour = 0;
        var min = 0;
        var seg = 0;
        var date = dataString.split('/')

        var year = parseInt(date[2]);
        var month = parseInt(date[1]) - 1;
        var day = parseInt(date[0]);

        if (horaString) {
            var time = horaString.split(':');
            hour = parseInt(time[0]);
            min = parseInt(time[1]);
            seg = parseInt(time[2]);
        }
        var fullDate = new Date(year, month, day, hour, min, seg).toISOString();
        return fullDate;
    }
}
