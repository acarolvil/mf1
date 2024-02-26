"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[816],{9742:(v,m,e)=>{e.d(m,{p:()=>_});var o=e(9291),t=e(6434),n=e(132),f=e(2425);let _=(()=>{class u{constructor(d,h,p){this.accountService=d,this.router=h,this.toastr=p}canActivate(d,h){let p=this.accountService.accountValue;return p?!(d.data.roles&&!d.data.roles.includes(p?.role)&&(this.toastr.error("Acesso n\xe3o autorizado."),this.router.navigate([""]),1)):(this.toastr.error("Acesso n\xe3o autorizado. <br> Fa\xe7a login."),this.router.navigate(["account","login"],{queryParams:{returnUrl:h.url}}),!1)}static#t=this.\u0275fac=function(h){return new(h||u)(o.LFG(t.B),o.LFG(n.F0),o.LFG(f._W))};static#e=this.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},8145:(v,m,e)=>{e.d(m,{Yv:()=>d,c5:()=>i,cU:()=>n,fs:()=>f});var o=e(5219),t=e(2832);class n{constructor(){this.id=0,this.num_Op="",this.dataCadastro=new Date,this.dataTransacao=new Date,this.nomeCliente="",this.cpfCliente="",this.valorOperacao=0,this.statusOperacao="",this.limiteConcedido=0,this.limiteUtilizado=0,this.limiteAtual=0,this.usuarioCadastroNome="",this.usuarioCadastroEmail="",this.empresa_Id=0}}class f{constructor(){this.id=0,this.pessoa_Id="",this.dataCadastro=new Date,this.dataTransacao=new Date,this.valor="",this.num_Op="",this.operacao_Status_Id=void 0,this.tipoTransacao="",this.formaPagamento="",this.nomeComprador="",this.paisComprador="",this.moeda=""}}var i=[{field:"dataTransacao",header:"Data da Transa\xe7\xe3o",maskType:t.O.date,filterType:t.vA.date,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"valorOperacao",header:"Valor",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"statusOperacao",header:"Status",maskType:t.O.options,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS,values:[{value:"LIBERADO",output:"Liberado",class:"flag-green"},{value:"BLOQUEADO",output:"Bloqueado",class:"flag-danger"},{value:"CHARGEBACK",output:"Chargeback",class:"flag-warning"}]},{field:"num_Op",header:"N\xba Opera\xe7\xe3o",maskType:t.O.mask,mask:"0000",filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"dataCadastro",header:"Data de Cadastro",maskType:t.O.dateTime,filterType:t.vA.date,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"usuarioCadastroEmail",header:"Cadastrado Por",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS}],d=Object.assign([],i);d.unshift({field:"nomeCliente",header:"Nome",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"cpfCliente",header:"CPF",maskType:t.O.cpf,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS}),d.splice(5,0,{field:"limiteConcedido",header:"Limite Concedido",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"limiteUtilizado",header:"Limite Utilizado",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"limiteAtual",header:"Limite Dispon\xedvel",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS})},1102:(v,m,e)=>{e.d(m,{V8:()=>h,Zo:()=>n});var o=e(5219),t=e(2832);class n{constructor(){this.id=0,this.nome="",this.cpf="",this.situacao="",this.dataInscricao=new Date,this.digito="",this.nomeMae="",this.anoObito=0,this.telefone="",this.email="",this.obs="",this.excel_Status="",this.excel_Data_Cap=new Date,this.excel_Hora_Cap=new Date,this.excel_IdNum="",this.excel_Controle="",this.excel_Erro="",this.brConsulta_Status="",this.brConsulta_Data_Cap=new Date,this.brConsulta_Hora_Cap=new Date,this.brConsulta_Id_Consulta="",this.brConsulta_Controle="",this.brConsulta_Erro="",this.saldoAtual=0,this.dataCadastro=new Date,this.usuarioCadastroNome="",this.usuarioCadastroEmail="",this.dataAtualizacaoExcel=new Date,this.dataAtualizacaoBRConsulta=new Date,this.empresa_Id=0}}var h=[{field:"id",header:"Id",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"nome",header:"Nome",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.CONTAINS},{field:"cpf",header:"CPF",maskType:t.O.cpf,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"saldoAtual",header:"Saldo Atual",maskType:t.O.number,filterType:t.vA.numeric,decimal:"1.2",filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"dataCadastro",header:"Data de Cadastro",maskType:t.O.date,filterType:t.vA.date,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:o.a6.DATE_IS},{field:"situacaoCPF",header:"Situa\xe7\xe3o CPF",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"statusSaldo",header:"Status Saldo",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS},{field:"usuarioCadastroEmail",header:"Cadastrado por",maskType:t.O.undefined,filterType:t.vA.text,filterDisplay:t.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:o.a6.EQUALS}]},2828:(v,m,e)=>{e.d(m,{m:()=>D});var o=e(9862),t=e(5619),n=e(9397),f=e(2096),_=e(553),u=e(342),i=e(9291),d=e(8787),h=e(2425),p=e(6814),A=e(5038);let D=(()=>{class M{constructor(r,a,s,l,c){this.table=r,this.http=a,this.toastr=s,this.datePipe=l,this.empresaService=c,this.url=_.N.url,this.list=new t.X([]),this.listOperacaoPorPessoa=new t.X([]),this.status=new t.X([]),this.loading=new t.X(!1)}getStatus(){return this.http.get(`${this.url}/operacaoStatus/`).pipe((0,n.b)({next:r=>(this.status.next(r),(0,f.of)(r)),error:r=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de status da opera\xe7\xe3o.")}))}getList(r=!1){return this.loading.next(r),this.table.loading.next(!0),this.http.get(`${this.url}/operacao/list/empresa/${this.empresaService.empresaSelected.value.id}`).pipe((0,n.b)({next:s=>(this.list.next(s),this.loading.next(!1),(0,f.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es."),finalize:()=>this.loading.next(!1)}))}getListByPessoaId(r,a=!1){return this.loading.next(a),this.table.loading.next(!0),this.http.get(`${this.url}/operacao/list/pessoa/${r}`).pipe((0,n.b)({next:s=>(this.listOperacaoPorPessoa.next(s),this.loading.next(!1),(0,f.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es."),finalize:()=>this.loading.next(!1)}))}get(r){return this.http.get(`${this.url}/operacao/${r}`,{headers:new o.WM({loading:"true"})})}create(r){return this.http.post(`${this.url}/operacao`,r)}edit(r){return this.http.put(`${this.url}/operacao`,r)}delete(r){return this.http.delete(`${this.url}/operacao/${r}`)}exportacao(r){return this.http.post(`${this.url}/operacao/exportar-pdf/${this.empresaService.empresaSelected.value.id}`,r,{responseType:"blob"}).pipe((0,n.b)({next:s=>{var l=new Blob([s],{type:"application/pdf"});const c=window.URL.createObjectURL(l);var E=document.createElement("a");E.href=c,E.download=`Relatorio_Operacoes_${this.datePipe.transform(new Date,"yyyyMMddHHmmss")}`,E.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},error:s=>{this.toastr.error((0,u.b)(s)),this.toastr.error("N\xe3o foi poss\xedvel carregar opera\xe7\xf5es para exporta\xe7\xe3o.")}}))}exportacaoOperacao(r){return this.http.post(`${this.url}/operacao/exportar-pdf-operacao/${r}`,{},{responseType:"blob"}).pipe((0,n.b)({next:a=>{var s=new Blob([a],{type:"application/pdf"});const l=window.URL.createObjectURL(s);var c=document.createElement("a");c.href=l,c.download=`Relatorio_Operacao_${this.datePipe.transform(new Date,"yyyyMMddHHmmss")}`,c.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},error:a=>{this.toastr.error((0,u.b)(a)),this.toastr.error("N\xe3o foi poss\xedvel carregar opera\xe7\xf5es para exporta\xe7\xe3o.")}}))}importarArquivo(r){var a=new FormData;return a.append("file",r),this.http.post(`${this.url}/operacao/importa-excel/${this.empresaService.empresaSelected.value.id}`,a)}static#t=this.\u0275fac=function(a){return new(a||M)(i.LFG(d.i),i.LFG(o.eN),i.LFG(h._W),i.LFG(p.uU),i.LFG(A.P))};static#e=this.\u0275prov=i.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},2719:(v,m,e)=>{e.d(m,{N:()=>D});var o=e(9862),t=e(5619),n=e(9397),f=e(2096),_=e(553),u=e(1102),i=e(9291),d=e(8787),h=e(2425),p=e(6814),A=e(5038);let D=(()=>{class O{constructor(a,s,l,c,E){this.table=a,this.http=s,this.toastr=l,this.datepipe=c,this.empresaService=E,this.url=_.N.url,this.list=new t.X([]),this.object=new t.X(new u.Zo),this.loading=new t.X(!1)}getList(a=!1){return this.loading.next(a),this.table.loading.next(a),this.http.get(`${this.url}/pessoa/list/empresa/${this.empresaService.empresaSelected.value.id}`).pipe((0,n.b)({next:l=>(l=l.map(c=>(c.dataCadastro=new Date(c.dataCadastro),c)),this.list.next(Object.assign([],l)),this.loading.next(!1),(0,f.of)(l)),error:l=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas."),finalize:()=>this.loading.next(!1)}))}get(a){return this.http.get(`${this.url}/pessoa/${a}`,{headers:new o.WM({loading:"true"})}).pipe((0,n.b)({next:s=>(this.object.next(Object.assign({},s)),(0,f.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}importarArquivo(a){var s=new FormData;return s.append("file",a),this.http.post(`${this.url}/pessoa/importa-excel/${this.empresaService.empresaSelected.value.id}`,s)}post(a){return a.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.post(`${this.url}/pessoa`,a)}delete(a){return this.http.delete(`${this.url}/pessoa/${a}`)}getPessoa(a,s){var l=this.datepipe.transform(s,"dd/MM/yyyy");return this.http.post(`${this.url}/pessoa/consulta-pessoa`,{cpf:a,dataNasc:l})}static#t=this.\u0275fac=function(s){return new(s||O)(i.LFG(d.i),i.LFG(o.eN),i.LFG(h._W),i.LFG(p.uU),i.LFG(A.P))};static#e=this.\u0275prov=i.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"})}return O})()}}]);