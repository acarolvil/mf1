"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[896],{1064:(U,M,r)=>{r.d(M,{V:()=>C}),r(5219),r(2832);class C{constructor(){this.id=0,this.nome="",this.simbolo="",this.codigo=""}}},896:(U,M,r)=>{r.r(M),r.d(M,{LogModule:()=>de});var h=r(132),c=r(5861),C=r(5219),l=r(2832);class i{constructor(){this.id=0,this.data=new Date,this.acao="",this.objeto="",this.entidade="",this.usuarioNome="",this.usuarioEmail="",this.empresa_Id=0}}class P{constructor(){this.id=0,this.inputs=[],this.data=new Date,this.acao="",this.objeto="",this.entidade="",this.usuarioNome="",this.usuarioEmail="",this.usuario_Id=void 0,this.empresa_Id=0}}var y=[{field:"id",header:"Id",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:C.a6.CONTAINS},{field:"data",header:"Data",maskType:l.O.dateTime,filterType:l.vA.datetime,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:C.a6.CONTAINS},{field:"entidade",header:"Entidade",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:C.a6.CONTAINS},{field:"acao",header:"A\xe7\xe3o",maskType:l.O.options,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:C.a6.EQUALS,values:[{value:"Cadastro",output:"Cadastro",class:"flag-green"},{value:"Exclus\xe3o",output:"Exclus\xe3o",class:"flag-danger"},{value:"Edi\xe7\xe3o",output:"Edi\xe7\xe3o",class:"flag-warning"},{value:"Reset de Senha",output:"Reset de Senha",class:"flag-dark"},{value:"Desabilitar Conta",output:"Desabilitar Conta",class:"flag-dark"},{value:"Habilitar Conta",output:"Habilitar Conta",class:"flag-dark"},{value:"Cadastro de Nova senha",output:"Cadastro de Nova senha",class:"flag-dark"},{value:"BR Consulta",output:"BR Consulta",class:"flag-dark"},{value:"Atribui\xe7\xe3o",output:"Atribui\xe7\xe3o",class:"flag-dark"},{value:"Importa\xe7\xe3o",output:"Importa\xe7\xe3o",class:"flag-dark"},{value:"Importa\xe7\xe3o de Opera\xe7\xf5es",output:"Importa\xe7\xe3o de Opera\xe7\xf5es",class:"flag-dark"},{value:"Importa\xe7\xe3o de Pessoas",output:"Importa\xe7\xe3o de Pessoas",class:"flag-dark"},{value:"Verifica\xe7\xe3o de Conta",output:"Verifica\xe7\xe3o de Conta",class:"flag-dark"},{value:"Esqueci minha senha",output:"Esqueci minha senha",class:"flag-dark"},{value:"Assinatura Contratante",output:"Assinatura Contratante",class:"flag-dark"},{value:"Assinatura Intermediadora",output:"Assinatura Intermediadora",class:"flag-dark"},{value:"Certificado Assinatura",output:"Certificado Assinatura",class:"flag-dark"},{value:"Edi\xe7\xe3o Representante Legal",output:"Edi\xe7\xe3o Representante Legal",class:"flag-dark"},{value:"Edi\xe7\xe3o Conta",output:"Edi\xe7\xe3o Conta",class:"flag-dark"},{value:"Edi\xe7\xe3o Campo Conta",output:"Edi\xe7\xe3o Campo Conta",class:"flag-dark"},{value:"Habilitar Empresa",output:"Habilitar Empresa",class:"flag-dark"},{value:"Desabilitar Empresa",output:"Desabilitar Empresa",class:"flag-dark"}]},{field:"usuarioNome",header:"Nome",colgroup:"Usu\xe1rio",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:C.a6.CONTAINS},{field:"usuarioEmail",header:"E-mail",colgroup:"Usu\xe1rio",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:C.a6.CONTAINS}],A=r(708),v=r(1449),a=r(9291),f=r(8787),T=r(9862),_=r(5619),b=r(9397),B=r(553),p=r(2425),k=r(5038);let d=(()=>{class n{constructor(s,t,e,o){this.table=s,this.http=t,this.toastr=e,this.empresaService=o,this.url=B.N.url,this.list=new _.X([]),this.loading=new _.X(!1)}getList(s=!1){return this.loading.next(s),this.table.loading.next(!0),this.http.get(`${this.url}/log-acoes/list/${this.empresaService.empresaSelected.value.id}`).pipe((0,b.b)(e=>{this.list.next(e),this.loading.next(!1)},e=>{this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de logs.")}))}get(s){return this.http.get(`${this.url}/log-acoes/${s}`,{headers:new T.WM({loading:"true"})})}static#e=this.\u0275fac=function(t){return new(t||n)(a.LFG(f.i),a.LFG(T.eN),a.LFG(p._W),a.LFG(k.P))};static#a=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var u=r(6814),E=r(5597),D=r(6599),Z=r(9901);function x(n,R){if(1&n&&(a.TgZ(0,"p",12)(1,"small"),a._uU(2,"Logs cadastrados em "),a.TgZ(3,"strong"),a._uU(4),a.qZA()()()),2&n){const s=a.oxw();a.xp6(4),a.Oqu(s.empresaSelected.nome||"Empresa X")}}function j(n,R){1&n&&a._UZ(0,"span",13)}let W=(()=>{class n{constructor(s,t,e){var o=this;this.table=s,this.logService=t,this.empresaService=e,this.faClock=v.SZw,this.maskType=l.O,this.list=[],this.tableLinks=[],this.columns=y,this.subscription=[],this.objeto=new i,this.loading=!1;var g=this.logService.list.subscribe(m=>this.list=Object.assign([],m));this.subscription.push(g),console.log("teste",g);var O=this.logService.loading.subscribe(m=>this.loading=m);this.subscription.push(O);var N=this.table.selected.subscribe(m=>{m&&(this.tableLinks=[{label:"Detalhes",routePath:["detalhes"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(N);var I=this.empresaService.empresaSelected.subscribe(function(){var m=(0,c.Z)(function*(S){o.empresaSelected=S.empresa,S&&S.id&&(yield(0,A.n)(o.logService.getList(!0)))});return function(S){return m.apply(this,arguments)}}());this.subscription.push(I)}ngOnDestroy(){this.subscription.forEach(s=>s.unsubscribe())}getList(){(0,A.n)(this.logService.getList(!0))}static#e=this.\u0275fac=function(t){return new(t||n)(a.Y36(f.i),a.Y36(d),a.Y36(k.P))};static#a=this.\u0275cmp=a.Xpm({type:n,selectors:[["app-list"]],decls:16,vars:13,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],["class","page__header-subtitle",4,"ngIf"],[1,"ms-auto","mt-auto",2,"margin-bottom","7px"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],[3,"list","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"page__header-subtitle"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(t,e){1&t&&(a.TgZ(0,"section",0)(1,"div",1)(2,"span",2),a._UZ(3,"fa-icon",3),a.qZA(),a.TgZ(4,"div",4)(5,"h3",5),a._uU(6,"Logs"),a.qZA(),a.YNc(7,x,5,1,"p",6),a.qZA(),a.TgZ(8,"div",7)(9,"button",8),a.NdJ("click",function(){return e.getList()}),a.YNc(10,j,1,0,"span",9),a._uU(11,"Atualizar"),a.qZA()(),a._UZ(12,"app-empresa-selected"),a.qZA(),a.TgZ(13,"div",10),a._UZ(14,"app-list-shared",11),a.qZA()(),a._UZ(15,"router-outlet")),2&t&&(a.xp6(3),a.Q6J("icon",e.faClock),a.xp6(4),a.Q6J("ngIf",e.empresaSelected),a.xp6(2),a.Q6J("disabled",e.loading),a.xp6(1),a.Q6J("ngIf",e.loading),a.xp6(4),a.Q6J("list",e.list)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",e.columns)("tableLinks",e.tableLinks)("selectable",!0))},dependencies:[u.O5,h.lC,E.BN,D.o,Z.j]})}return n})();var w=r(2855),K=r(2667),Y=r(1208),V=r(3337),J=r(7397),z=r(1433),H=r(3735);const G=["template"],Q=["icon"];function $(n,R){if(1&n&&(a.TgZ(0,"span",3),a._UZ(1,"fa-icon",4),a.qZA()),2&n){const s=a.oxw();a.xp6(1),a.Q6J("icon",s.faClock)}}function X(n,R){if(1&n&&(a.TgZ(0,"tr")(1,"td",12)(2,"strong"),a._uU(3),a.qZA()(),a._UZ(4,"td",13),a.qZA()),2&n){const s=R.$implicit;a.xp6(3),a.Oqu(s[0]),a.xp6(1),a.Q6J("innerHTML",s[1],a.oJD)}}function q(n,R){if(1&n&&(a.TgZ(0,"h6",5),a._uU(1),a.qZA(),a.TgZ(2,"div",6)(3,"table",7)(4,"tbody")(5,"tr")(6,"td")(7,"strong"),a._uU(8,"Data:"),a.qZA(),a._uU(9),a.ALo(10,"date"),a.qZA(),a.TgZ(11,"td")(12,"strong"),a._uU(13,"A\xe7\xe3o:"),a.qZA(),a._uU(14),a.qZA(),a.TgZ(15,"td")(16,"strong"),a._uU(17,"Objeto da A\xe7\xe3o:"),a.qZA(),a._uU(18),a.qZA()(),a.TgZ(19,"tr")(20,"td",8)(21,"strong"),a._uU(22,"Usu\xe1rio:"),a.qZA(),a._uU(23),a.qZA()()()(),a.TgZ(24,"table",9)(25,"tbody",10),a.YNc(26,X,5,2,"tr",11),a.qZA()()()),2&n){const s=a.oxw();a.xp6(1),a.AsE("",s.obj.acao," de ",s.obj.entidade,""),a.xp6(8),a.hij(" ",a.xi3(10,8,s.obj.data,"dd/MM/yyyy '\xe0s' HH:mm"),""),a.xp6(5),a.hij(" ",s.obj.acao,""),a.xp6(4),a.hij(" ",s.obj.entidade,""),a.xp6(5),a.AsE(" ",s.obj.usuarioNome," - ",s.obj.usuarioEmail,""),a.xp6(3),a.Q6J("ngForOf",s.values)}}const te=[{path:"",component:W,children:[{path:"detalhes/:log_id",component:(()=>{class n{constructor(s,t,e,o,g,O,N,I,m,S,F){this.activatedRoute=s,this.modalService=t,this.crypto=e,this.logService=o,this.currency=g,this.date=O,this.contratoTipoService=N,this.contratoEventoService=I,this.paisService=m,this.moedaService=S,this.mask=F,this.faClock=v.SZw,this.obj=new P,this.erro="",this.loading=!1,this.subscription=[],this.isEditPage=!1,this.modal=new w.u,this.values=[],(0,A.n)(this.paisService.getList()),(0,A.n)(this.contratoTipoService.getList()),(0,A.n)(this.contratoEventoService.getList()),(0,A.n)(this.moedaService.getList())}ngAfterViewInit(){var s=this;this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"650px"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t=this.activatedRoute.params.subscribe(function(){var e=(0,c.Z)(function*(o){if(o.log_id){s.obj.id=s.crypto.decrypt(o.log_id),s.modal.title="Log de A\xe7\xe3o",s.modal.routerBack=["../../"],s.isEditPage=!0,0==s.logService.list.value.length&&(yield(0,A.n)(s.logService.getList()));var g=s.logService.list.value.find(O=>O.id==s.obj.id);if(!g)return void s.voltar();"string"==typeof g.objeto&&(g.objeto=JSON.parse(g.objeto)),s.obj=g,s.insereDados(s.obj.objeto),s.ordenaArray(),setTimeout(()=>{s.modal=s.modalService.addModal(s.modal,"log-acoes")},200)}});return function(o){return e.apply(this,arguments)}}());this.subscription.push(t)}formataCampos(s,t){var e=s,o=t,g=!0;switch(s){case"Id":e="Id";break;case"CodigoSwift":e="C\xf3digo Swift";break;case"Pais_Id":e="Pa\xeds";var O=this.paisService.list.value.find(L=>L.id==parseInt(o));o=O?O.nome:"Id: "+o;break;case"Invoice_Id":e="Id do Invoice";break;case"Tipo_Id":e="Tipo do Contrato";var N=this.contratoTipoService.list.value.find(L=>L.id==parseInt(o));o=N?N.nome:"Id: "+o;break;case"Evento_Id":e="Evendo do Contrato";var I=this.contratoEventoService.list.value.find(L=>L.id==parseInt(o));o=I?I.nome:"Id: "+o;break;case"Beneficiario_Id":e="Id do Benefici\xe1rio";break;case"InstituicaoFinanceira_Id":e="Id da Institui\xe7\xe3o Financeira";break;case"Moeda_Id":e="Moeda";var S=this.moedaService.list.value.find(L=>L.id==parseInt(o));o=S?S.nome:"Id: "+o;break;case"Usuario_Cadastro_Id":e="Id do Usu\xe1rio de Cadastro",g=!1;break;case"Operacao_Status_Id":e="Id do Status da Opera\xe7\xe3o";break;case"Pessoa_Id":e="Id da Pessoa";break;case"Lote_Id":e="Excel - Lote Id";break;case"Logradouro":e="Endere\xe7o";break;case"CodigoRegistro":e="C\xf3digo de Registro";break;case"DataLiquidacao":e="Data de Liquida\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"ValorNacional":e="Valor Nacional",o=null!=t?this.currency.transform(t,"BRL","R$ ","1.2")??"N/A":"N/A";break;case"Taxa":e="Taxa",o=null!=t?this.currency.transform(t,"BRL"," ","1.0-10")??"N/A":"N/A";break;case"NumContrato":e="N\xba do Contrato";break;case"PagRecExterior":e="Pagador/Recebedor no Exterior";break;case"PercentualAdiantamento":e="Percentual de Adiantamento",o=null!=t?this.currency.transform(t,"BRL"," ","1.0-2")+"%":"N/A";break;case"Especificacoes":e="Especifica\xe7\xf5es";break;case"Clausulas":e="Cl\xe1usulas";break;case"InstrucoesRecebimentoPagamento":e="Instru\xe7\xf5es de Recebimento/Pagamento";break;case"NumContrato":e="N\xba Contrato";break;case"Simbolo":case"Simbolo":e="S\xedmbolo";break;case"Codigo":e="C\xf3digo";break;case"DataTransacao":e="Data de Transa\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"Data":e="Data",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s ' HH:mm")??"N/A":"N/A";break;case"DataCadastro":e="Data de Cadastro",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s ' HH:mm")??"N/A":"N/A";break;case"NomeComprador":e="Nome do Comprador";break;case"PaisComprador":e="Pa\xeds do Comprador";break;case"TipoTransacao":e="Tipo de Transa\xe7\xe3o";break;case"FormaPagamento":e="Forma de Pagamento";break;case"ValorMoedaEstrangeira":e="Valor em Moeda Estrangeira",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"Num_Op":e="N\xba Opera\xe7\xe3o";break;case"Situacao":case"SITUACAO":e="Situa\xe7\xe3o";break;case"DataInscricao":e="Excel - Data de Inscri\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"DataNascimento":e="Data de Nascimento",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"NomeMae":e="Nome da M\xe3e";break;case"Email":e="E-mail";break;case"Obs":e="Observa\xe7\xf5es";break;case"Digito":e="Excel - D\xedgito";break;case"AnoObito":e="Excel - Ano \xd3bito";break;case"Excel_Status":e="Excel - Status";break;case"Excel_Data_Cap":e="Excel - Data de Capta\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"Excel_Hora_Cap":e="Excel - Hora de Capta\xe7\xe3o",o=null!=t?this.date.transform(t,"HH:mm")??"N/A":"N/A";break;case"Excel_IdNum":e="Excel - Id Num";break;case"Excel_Controle":e="Excel - Controle";break;case"Excel_Erro":e="Excel - Tipo Erro";break;case"BRConsulta_Status":e="BR Consulta - Status";break;case"BRConsulta_Data_Cap":e="BR Consulta - Data de Capta\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy")??"N/A":"N/A";break;case"BRConsulta_Hora_Cap":e="BR Consulta - Hora de Capta\xe7\xe3o",o=null!=t?this.date.transform(t,"HH:mm")??"N/A":"N/A";break;case"BRConsulta_Id_Consulta":e="BR Consulta - Id Consulta";break;case"BRConsulta_Controle":e="BR Consulta - Controle";break;case"BRConsulta_Erro":e="BR Consulta - Erro";break;case"DataAtualizacaoExcel":e="Data de Atualiza\xe7\xe3o pelo Excel",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"DataAtualizacaoBRConsulta":e="Data de Atualiza\xe7\xe3o pelo BR Consulta",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"PEP":e="Excel - PEP";break;case"DataConcessao":e="Data de Concess\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"ValorConcedido":e="Valor Concedido",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"Valor":e="Valor",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"NomeCliente":e="Nome do Cliente";break;case"CPFCliente":e="CPF do CLiente";break;case"StatusOperacao":e="Status da Opera\xe7\xe3o";break;case"LimiteConcedido":e="Limite Concedido",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"LimiteUtilizado":e="Limite Utilizado",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"LimiteAtual":e="Limite Atual",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"SaldoAnterior":e="Saldo Anterior",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"ValorOpera\xe7\xe3o":e="Valor Opera\xe7\xe3o",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"SaldoAtual":case"SaldoAtual":e="Saldo Atual",o=null!=t?this.currency.transform(t,"BRL"," ","1.2")??"N/A":"N/A";break;case"UsuarioCadastroNome":e="Nome do Usu\xe1rio de Cadastro";break;case"UsuarioCadastroEmail":e="E-mail do Usu\xe1rio de Cadastro";break;case"NomeBanco":e="Banco";break;case"NomePais":case"Pais":e="Pa\xeds";break;case"PerfilAcesso_Id":case"usuario_Id":g=!1;break;case"PerfilAcesso":e="Perfil";var F=JSON.parse(JSON.stringify(t));o=t&&""!=t?F.Perfil:"N/A";break;case"Name":case"NOME":e="Nome";break;case"TelefoneCelular":e="Telefone/Celular";break;case"StatusSaldo":e="Status Saldo";break;case"IsVerified":e="Conta Verificada pelo Usu\xe1rio",o=t?"Sim":"N\xe3o";break;case"Created":e="Data de Cadastro",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"Updated":e="Data de \xdaltima Atualiza\xe7\xe3o",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"DataDesativado":e="Data Desativado",o=null!=t?this.date.transform(t,"dd/MM/yyyy '\xe0s' HH:mm")??"N/A":"N/A";break;case"dataNasc":case"DATA_NASC":e="Data de Nascimento";break;case"cpf":e="CPF",o=null!=t?this.mask.applyMask(t.toString().padStart(11,"0"),"000.000.000-00")??"N/A":"N/A";break;case"NomeBeneficiario":case"Beneficiario":e="Benefici\xe1rio";break;case"Instituicao":e="Institui\xe7\xe3o Financeira";break;case"SituacaoCPF":e="Situa\xe7\xe3o CPF";break;case"ID_CONSULTA":e="Id da Consulta";break;case"ERRO":e="Erro";break;case"RETORNO":e="Retorno";break;case"CPF":o=null!=t?this.mask.applyMask(t.toString().padStart(11,"0"),"000.000.000-00")??"N/A":"N/A";break;case"DATA_INSCRICAO":e="Data de Inscri\xe7\xe3o";break;case"DIGITO":e="D\xedgito";break;case"CONTROLE":e="Controle";break;case"DATA_CAP":e="Data de Capta\xe7\xe3o";break;case"HORA_CAP":e="Hora de Capta\xe7\xe3o";break;case"STATUS":e="Status";break;default:e=s,o=null!=t&&""!=t?t:"N/A"}return[e,o=null!=o&&""!=o?o:"N/A",g]}insereDados(s){for(const[N,I]of Object.entries(s)){var t;try{t=JSON.parse(JSON.parse(JSON.stringify(s[N])))}catch{t=s[N]}if(null!=t&&"object"==typeof t&&"PerfilAcesso"!=N)this.insereDados(t);else{var[e,o,g]=this.formataCampos(N,I);g&&(this.values.find(m=>m[0]==e)||this.values.push([e,o]))}}}ordenaArray(){var s=[];switch(this.obj.entidade){case"Pessoa":s="BR Consulta"==this.obj.acao?["Id da Consulta","Nome","CPF","Data de Nascimento","Situa\xe7\xe3o","Data de Inscri\xe7\xe3o","D\xedgito","Controle","Status","Data de Capta\xe7\xe3o","Hora de Capta\xe7\xe3o","Retorno","Erro"]:["Id","Nome","CPF","Data de Nascimento","Data de Cadastro","Situa\xe7\xe3o CPF","Saldo Atual","Status Saldo","Nome da M\xe3e","Situa\xe7\xe3o","Telefone","E-mail","Observa\xe7\xf5es","Nome do Usu\xe1rio de Cadastro","E-mail do Usu\xe1rio de Cadastro","Excel - Data de Inscri\xe7\xe3o","Excel - D\xedgito","Excel - Ano \xd3bito","Excel - Status","Excel - Data de Capta\xe7\xe3o","Excel - Hora de Capta\xe7\xe3o","Excel - Id Num","Excel - Controle","Excel - Tipo Erro","Excel - Lote Id","Excel - PEP","Data de Atualiza\xe7\xe3o pelo Excel","BR Consulta - Status","BR Consulta - Data de Capta\xe7\xe3o","BR Consulta - Hora de Capta\xe7\xe3o","BR Consulta - Id Consulta","BR Consulta - Controle","BR Consulta - Erro","Data de Atualiza\xe7\xe3o pelo BR Consulta"];break;case"Opera\xe7\xe3o":s=["Id","Nome","CPF","Data de Transa\xe7\xe3o","Data de Cadastro","Status","Valor Opera\xe7\xe3o","Saldo Anterior","Saldo Atual","N\xba Opera\xe7\xe3o","Nome do Usu\xe1rio de Cadastro","E-mail do Usu\xe1rio de Cadastro","Moeda","Valor em Moeda Estrangeira","Nome do Comprador","Pa\xeds do Comprador","Tipo de Transa\xe7\xe3o","Forma de Pagamento"];break;case"Saldo":s=["Nome","CPF","Data de Concess\xe3o","Valor Concedido","Saldo Anterior","Saldo Atual"];break;case"Banco":s=["Id","Nome","C\xf3digo Swift","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Benefici\xe1rio":s=["Id","Nome","C\xf3digo de Registro","Conta","Representante","Banco","C\xf3digo Swift","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Representante":s=["Id","Nome","C\xf3digo"];break;case"Institui\xe7\xe3o Financeira":s=["Id","Nome","C\xf3digo de Registro","Endere\xe7o","Cidade","Estado","Pa\xeds"];break;case"Invoice":s=["Id","Data","Valor","Benefici\xe1rio","Representante","Banco","Conta"];break;case"Usu\xe1rio":s=["Id","Nome","E-mail","Telefone/Celular","Perfil","Data de Cadastro","Data Desativado","Data de \xdaltima Atualiza\xe7\xe3o","Conta Verificada pelo Usu\xe1rio"];break;case"Contrato":s=["Id","Tipo","Evento","N\xba do Contrato","Data","Valor Nacional","Institui\xe7\xe3o Financeira","Benefici\xe1rio","Banco","Percentual de Adiantamento","Pagador/Recebedor no Exterior","Pa\xeds","Taxa","Data de Liquida\xe7\xe3o"]}return this.values=this.values.sort((t,e)=>s.indexOf(t[0])-s.indexOf(e[0])),this.values}ngOnDestroy(){this.subscription.forEach(s=>s.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}static#e=this.\u0275fac=function(t){return new(t||n)(a.Y36(h.gz),a.Y36(w.Z),a.Y36(K.w),a.Y36(d),a.Y36(u.H9),a.Y36(u.uU),a.Y36(Y.M),a.Y36(V.n),a.Y36(J.Z),a.Y36(z.g),a.Y36(H.KD))};static#a=this.\u0275cmp=a.Xpm({type:n,selectors:[["app-form"]],viewQuery:function(t,e){if(1&t&&(a.Gf(G,5),a.Gf(Q,5)),2&t){let o;a.iGM(o=a.CRH())&&(e.template=o.first),a.iGM(o=a.CRH())&&(e.icon=o.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon",2,"translate","0px 6px"],[3,"icon"],[1,"mb-2","mt-2","ms-2"],[1,"table-responsive"],[1,"table","table-striped","mt-2"],["colspan","3"],[1,"table","table-striped","mb-3"],[1,"padding-tr"],[4,"ngFor","ngForOf"],[2,"white-space","nowrap"],["colspan","2",3,"innerHTML"]],template:function(t,e){1&t&&(a.YNc(0,$,2,1,"ng-template",0,1,a.W1O),a.YNc(2,q,27,11,"ng-template",null,2,a.W1O))},dependencies:[u.sg,E.BN,u.uU],styles:[".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#433f3f;padding-top:7px;padding-bottom:7px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{white-space:unset;text-wrap:wrap}.table[_ngcontent-%COMP%]   .padding-tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:7px;padding-bottom:7px}"]})}return n})(),data:{modalOrder:1}},r(7280).D]}];let se=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#a=this.\u0275mod=a.oAB({type:n});static#t=this.\u0275inj=a.cJS({imports:[h.Bz.forChild(te),h.Bz]})}return n})();var oe=r(2352),re=r(6223),ie=r(9227),ne=r(4685),le=r(1532);let de=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#a=this.\u0275mod=a.oAB({type:n});static#t=this.\u0275inj=a.cJS({providers:[(0,H.e$)()],imports:[u.ez,se,E.uH,oe.kW,re.u5,ie.m,ne.U$,le._8]})}return n})()},1433:(U,M,r)=>{r.d(M,{g:()=>a});var h=r(9862),c=r(5619),C=r(9397),l=r(2096),i=r(553),P=r(1064),y=r(9291),A=r(8787),v=r(2425);let a=(()=>{class f{constructor(_,b,B){this.table=_,this.http=b,this.toastr=B,this.url=i.N.url,this.list=new c.X([]),this.object=new c.X(new P.V),this.loading=new c.X(!1)}getList(_=!1){return this.http.get(`${this.url}/moeda/`).pipe((0,C.b)({next:b=>(this.list.next(b),(0,l.of)(b)),error:b=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de moedas.")}))}get(_){return this.http.get(`${this.url}/moeda/${_}`,{headers:new h.WM({loading:"true"})}).pipe((0,C.b)({next:b=>(this.object.next(Object.assign({},b)),(0,l.of)(b)),error:b=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de moedas.")}))}send(_){return this.http.post(`${this.url}/moeda`,_)}delete(_){return this.http.delete(`${this.url}/moeda/${_}`)}static#e=this.\u0275fac=function(b){return new(b||f)(y.LFG(A.i),y.LFG(h.eN),y.LFG(v._W))};static#a=this.\u0275prov=y.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},7397:(U,M,r)=>{r.d(M,{Z:()=>A});var h=r(5619),c=r(9397),C=r(2096),l=r(553),i=r(9291),P=r(9862),y=r(2425);let A=(()=>{class v{constructor(f,T){this.http=f,this.toastr=T,this.url=l.N.url,this.list=new h.X([]),this.loading=new h.X(!1)}getList(){return this.http.get(`${this.url}/pais/`).pipe((0,c.b)({next:f=>(this.list.next(f),(0,C.of)(f)),error:f=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de paises.")}))}static#e=this.\u0275fac=function(T){return new(T||v)(i.LFG(P.eN),i.LFG(y._W))};static#a=this.\u0275prov=i.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},9901:(U,M,r)=>{r.d(M,{j:()=>B});var h=r(5861),c=r(708),C=r(490),l=r(5038),i=r(9291),P=r(6434),y=r(6814),A=r(6223),v=r(5219),a=r(2352);function f(p,k){if(1&p&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&p){const d=i.oxw(3);i.xp6(1),i.Oqu(null==d.empresaSelected.empresa?null:d.empresaSelected.empresa.nome)}}function T(p,k){if(1&p&&i.YNc(0,f,2,1,"span",7),2&p){const d=i.oxw(2);i.Q6J("ngIf",d.empresaSelected.id)}}function _(p,k){if(1&p&&(i.TgZ(0,"p"),i._uU(1),i.qZA(),i.TgZ(2,"p"),i._uU(3),i.qZA()),2&p){const d=k.$implicit;i.xp6(1),i.Oqu(d.nome),i.xp6(2),i.Oqu(d.logo)}}function b(p,k){if(1&p){const d=i.EpF();i.TgZ(0,"div",1)(1,"label",2),i._uU(2,"Selecione a Empresa para carregar dados"),i.qZA(),i.TgZ(3,"p-dropdown",3,4),i.NdJ("ngModelChange",function(E){i.CHM(d);const D=i.oxw();return i.KtG(D.empresaChange(E))})("ngModelChange",function(E){i.CHM(d);const D=i.oxw();return i.KtG(D.empresaSelected.id=E)}),i.YNc(5,T,1,1,"ng-template",5),i.YNc(6,_,4,2,"ng-template",6),i.qZA()()}if(2&p){const d=i.oxw();i.xp6(3),i.Q6J("options",d.empresas)("ngModel",d.empresaSelected.id)("filter",!0)("showClear",!1)("required",!0)}}let B=(()=>{class p{constructor(d,u){this.empresaService=d,this.accountService=u,this.empresaSelected=new l.I,this.empresas=[],this.loading=!1,this.Role=C.uU,this.subscription=[];var E=this.accountService.account.subscribe(x=>this.account=x);this.subscription.push(E);var D=this.empresaService.empresaSelected.subscribe(x=>this.empresaSelected=x);this.subscription.push(D);var Z=this.empresaService.list.subscribe(x=>this.empresas=x);this.subscription.push(Z)}ngOnDestroy(){this.subscription.forEach(d=>d.unsubscribe())}empresaChange(d){var u=this;return(0,h.Z)(function*(){if(u.accountService.accountValue&&1==u.accountService.accountValue?.perfilAcesso_Id&&d){0==u.empresas.length&&(yield(0,c.n)(u.empresaService.getList()));var E=u.empresas.find(D=>D.id==d);u.empresaService.empresaSelected.next({empresa:E,id:d})}})()}static#e=this.\u0275fac=function(u){return new(u||p)(i.Y36(l.P),i.Y36(P.B))};static#a=this.\u0275cmp=i.Xpm({type:p,selectors:[["app-empresa-selected"]],decls:1,vars:1,consts:[["class","form-group ms-2",4,"ngIf"],[1,"form-group","ms-2"],["for","empresa_Id"],["name","empresa_Id","id","empresa_Id","optionValue","id","filterBy","nome","styleClass","form-control","placeholder","Selecione uma empresa",3,"options","ngModel","filter","showClear","required","ngModelChange"],["empresa_Id","ngModel"],["pTemplate","selectedItem"],["pTemplate","item"],[4,"ngIf"]],template:function(u,E){1&u&&i.YNc(0,b,7,5,"div",0),2&u&&i.Q6J("ngIf",E.account&&1==(null==E.account?null:E.account.perfilAcesso_Id))},dependencies:[y.O5,A.JJ,A.Q7,A.On,v.jx,a.Lt]})}return p})()}}]);