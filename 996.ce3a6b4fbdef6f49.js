"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[996],{1005:(T,u,o)=>{o.d(u,{sB:()=>l,th:()=>d});var _=o(5219),a=o(2832);class d{constructor(){this.id=0,this.nome="",this.codigoSwift="",this.pais_Id=void 0,this.empresa_Id=void 0}}var l=[{field:"nome",header:"Nome",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:_.a6.CONTAINS},{field:"codigoSwift",header:"C\xf3digo Swift",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:_.a6.CONTAINS},{field:"cidade",header:"Cidade",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:_.a6.CONTAINS},{field:"estado",header:"UF",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:_.a6.EQUALS},{field:"pais",header:"Pa\xeds",maskType:a.O.undefined,filterType:a.vA.text,filterDisplay:a.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:_.a6.CONTAINS}]},2996:(T,u,o)=>{o.d(u,{U:()=>W});var _=o(708),a=o(342),v=o(1005),d=o(6687),l=o(2855),c=o(9324),e=o(9291),E=o(132),M=o(2667),P=o(2425),m=o(4809),x=o(8487),p=o(7397),C=o(6814),h=o(6223),O=o(2352);const A=["template"],b=["icon"],D=["cep"];function I(i,f){1&i&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function U(i,f){1&i&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function Z(i,f){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,U,2,0,"p",39),e.qZA()),2&i){e.oxw();const t=e.MAs(10);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function S(i,f){1&i&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function j(i,f){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,S,2,0,"p",39),e.qZA()),2&i){e.oxw();const t=e.MAs(18);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function w(i,f){1&i&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function L(i,f){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,w,2,0,"p",39),e.qZA()),2&i){e.oxw();const t=e.MAs(43);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function B(i,f){if(1&i&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Oqu(t.erro)}}function F(i,f){1&i&&(e.TgZ(0,"p",12),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function K(i,f){if(1&i&&(e.TgZ(0,"div",40),e.YNc(1,B,2,1,"p",39),e.YNc(2,F,2,0,"p",39),e.qZA()),2&i){e.oxw();const t=e.MAs(1),r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.erro),e.xp6(1),e.Q6J("ngIf",t.invalid&&!r.erro)}}function R(i,f){1&i&&e._UZ(0,"span",41)}function y(i,f){if(1&i){const t=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.MAs(1),s=e.oxw();return e.KtG(s.send(n))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),e._uU(6,"Nome: "),e.TgZ(7,"span",12),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",13,14),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.nome=n)})("change",function(){e.CHM(t);const n=e.MAs(10),s=e.oxw();return e.KtG(s.objeto.nome=n.value.toUpperCase().trim())}),e.qZA(),e.YNc(11,Z,2,1,"div",15),e.qZA(),e.TgZ(12,"div",16)(13,"label",17),e._uU(14,"C\xf3digo Swift: "),e.TgZ(15,"span",12),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",18,19),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.codigoSwift=n)})("change",function(){e.CHM(t);const n=e.MAs(18),s=e.oxw();return e.KtG(s.objeto.codigoSwift=n.value.trim().toUpperCase())}),e.qZA(),e.YNc(19,j,2,1,"div",15),e.qZA()(),e.TgZ(20,"div",9)(21,"div",20)(22,"label",21),e._uU(23,"Endere\xe7o: "),e.qZA(),e.TgZ(24,"textarea",22,23),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.logradouro=n)})("change",function(){e.CHM(t);const n=e.MAs(25),s=e.oxw();return e.KtG(s.objeto.logradouro=n.value.trim().toUpperCase())}),e._uU(26,"                    "),e.qZA()(),e.TgZ(27,"div",24)(28,"label",25),e._uU(29,"Cidade: "),e.qZA(),e.TgZ(30,"input",26,27),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.cidade=n)})("change",function(){e.CHM(t);const n=e.MAs(31),s=e.oxw();return e.KtG(s.objeto.cidade=n.value.trim().toUpperCase())}),e.qZA()(),e.TgZ(32,"div",28)(33,"label",29),e._uU(34,"UF: "),e.qZA(),e.TgZ(35,"input",30,31),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.estado=n)})("change",function(){e.CHM(t);const n=e.MAs(36),s=e.oxw();return e.KtG(s.objeto.estado=n.value.trim().toUpperCase())}),e.qZA()(),e.TgZ(37,"div",24)(38,"label",32),e._uU(39,"Pa\xeds: "),e.TgZ(40,"span",12),e._uU(41,"*"),e.qZA()(),e.TgZ(42,"p-dropdown",33,34),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objeto.pais_Id=n)}),e.qZA(),e.YNc(44,L,2,1,"div",15),e.qZA()(),e.TgZ(45,"div",9)(46,"div",35),e.YNc(47,K,3,2,"div",36),e.TgZ(48,"button",37),e.YNc(49,R,1,0,"span",38),e.TgZ(50,"span"),e._uU(51,"Salvar"),e.qZA()()()()()()}if(2&i){const t=e.MAs(1),r=e.MAs(10),n=e.MAs(18),s=e.MAs(43),g=e.oxw();e.xp6(9),e.Q6J("ngModel",g.objeto.nome),e.xp6(2),e.Q6J("ngIf",r.touched&&r.errors),e.xp6(6),e.Q6J("ngModel",g.objeto.codigoSwift),e.xp6(2),e.Q6J("ngIf",n.touched&&n.errors),e.xp6(5),e.Q6J("ngModel",g.objeto.logradouro),e.xp6(6),e.Q6J("ngModel",g.objeto.cidade),e.xp6(5),e.Q6J("ngModel",g.objeto.estado),e.xp6(7),e.Q6J("styleClass","form-control "+(g.loadingPaises?"form-control-loading":""))("options",g.paises)("ngModel",g.objeto.pais_Id)("placeholder","Selecione")("disabled",g.loadingPaises)("filter",!0)("showClear",!0)("required",!0),e.xp6(2),e.Q6J("ngIf",s.touched&&s.errors),e.xp6(3),e.Q6J("ngIf",g.erro||t.invalid),e.xp6(1),e.Q6J("disabled",t.invalid||g.loading),e.xp6(1),e.Q6J("ngIf",g.loading)}}let W=(()=>{class i{constructor(t,r,n,s,g,N,J){this.activatedRoute=t,this.modalService=r,this.crypto=n,this.toastr=s,this.bancoService=g,this.cepService=N,this.paisesService=J,this.objeto=new v.th,this.erro="",this.loading=!1,this.subscription=[],this.isEditPage=!1,this.modal=new l.u,this.loadingPaises=!0,this.paises=[],this.cepPreenchido=!1,this.executaCEP=!0,this.loadingCep=!1,(0,_.n)(this.paisesService.getList()).then(G=>{this.loadingPaises=!1,this.paises=G})}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"650px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t=this.activatedRoute.params.subscribe(r=>{r.banco_id?(this.objeto.id=this.crypto.decrypt(r.banco_id),this.modal.title="Editar Banco",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,_.n)(this.bancoService.get(this.objeto.id)).then(n=>{this.objeto=n,this.paisChange(),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"banco")},200)}).catch(n=>{this.voltar()})):(this.modal.title="Cadastrar Banco",this.modal.routerBack=["../"],this.isEditPage=!1,this.objeto.pais_Id=30,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"banco")},200))});this.subscription.push(t)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}paisChange(){this.executaCEP=30==this.objeto.pais_Id,this.cepPreenchido=!1}limpaEndereco(){this.objeto.cep="",this.objeto.bairro="",this.objeto.cidade="",this.objeto.numero="",this.objeto.complemento="",this.objeto.logradouro=""}buscaCEP(t){if(1==this.executaCEP&&this.cep){if(this.loadingCep=!0,t.control.setErrors(null),this.cepPreenchido=!1,!this.objeto.cep)return t.control.setErrors({required:!0}),void(this.loadingCep=!1);if(!this.validaCEP(t))return this.toastr.error("CEP inv\xe1lido."),void t.control.setErrors({invalid:!0});(0,_.n)(this.cepService.buscar(this.objeto.cep)).then(r=>{if(1==r.erro)return this.toastr.error("CEP inv\xe1lido."),void t.control.setErrors({invalid:!0});this.objeto.logradouro=r.logradouro,this.objeto.bairro=r.bairro,this.objeto.cidade=r.localidade,this.objeto.estado=r.uf,this.cepPreenchido=!0}).catch(r=>{this.toastr.error("N\xe3o foi poss\xedvel carregar CEP")}).finally(()=>this.loadingCep=!1)}}validaCEP(t){return this.loadingCep=!0,this.objeto.cep&&this.objeto.cep.toString().trim()?this.objeto.cep.toString().length<8?(t.control.setErrors({invalid:!0}),this.loadingCep=!1,!1):(0,d.c)(this.objeto.cep)?(this.loadingCep=!1,t.control.setErrors(null),!0):(t.control.setErrors({invalid:!0}),this.loadingCep=!1,!1):(t.control.setErrors({required:!0}),this.loadingCep=!1,!1)}send(t){if(t.invalid)return this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos");this.erro="",this.request().then(r=>{this.loading=!1,1==r.sucesso?(r.objeto?(0,c.f)(this.bancoService,r.objeto):(0,_.n)(this.bancoService.getList()),this.voltar()):this.erro=r.mensagem}).catch(r=>{this.loading=!1,this.erro=(0,a.b)(r)})}request(){return(0,_.n)(0==this.objeto.id?this.bancoService.create(this.objeto):this.bancoService.edit(this.objeto))}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(E.gz),e.Y36(l.Z),e.Y36(M.w),e.Y36(P._W),e.Y36(m.r),e.Y36(x.q),e.Y36(p.Z))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-form"]],viewQuery:function(r,n){if(1&r&&(e.Gf(A,5),e.Gf(b,5),e.Gf(D,5)),2&r){let s;e.iGM(s=e.CRH())&&(n.template=s.first),e.iGM(s=e.CRH())&&(n.icon=s.first),e.iGM(s=e.CRH())&&(n.cep=s.first)}},decls:4,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-8","col-lg-8","col-md-8","col-sm-6","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12"],["for","codigoSwift"],["type","text","name","codigoSwift","id","codigoSwift","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["codigoSwift","ngModel"],[1,"form-group","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],["for","logradouro"],["rows","1","name","logradouro","id","logradouro","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["logradouro","ngModel"],[1,"form-group","col-xl-5","col-lg-5","col-md-5","col-sm-4","col-12"],["for","cidade"],["type","text","name","cidade","id","cidade","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["cidade","ngModel"],[1,"form-group","col-xl-2","col-lg-2","col-md-2","col-sm-4","col-12"],["for","estado"],["type","text","name","estado","id","estado","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["estado","ngModel"],["for","pais_Id"],["optionLabel","nome","optionValue","id","name","pais_Id","id","pais_Id","filterBy","nome",3,"styleClass","options","ngModel","placeholder","disabled","filter","showClear","required","ngModelChange"],["pais_Id","ngModel"],[1,"d-flex","align-items-center","mt-2","mb-1"],["class","",4,"ngIf"],[1,"btn","btn-primary","mr-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,""],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,n){1&r&&(e.YNc(0,I,3,0,"ng-template",0,1,e.W1O),e.YNc(2,y,52,19,"ng-template",null,2,e.W1O))},dependencies:[C.O5,h._Y,h.Fj,h.JJ,h.JL,h.Q7,h.c5,h.On,h.F,O.Lt]})}return i})()},4809:(T,u,o)=>{o.d(u,{r:()=>P});var _=o(9862),a=o(5619),v=o(9397),d=o(2096),l=o(553),c=o(9291),e=o(8787),E=o(2425),M=o(5038);let P=(()=>{class m{constructor(p,C,h,O){this.table=p,this.http=C,this.toastr=h,this.empresaService=O,this.url=l.N.url,this.list=new a.X([]),this.loading=new a.X(!1)}getList(p=!1){return this.loading.next(p),this.table.loading.next(!0),this.http.get(`${this.url}/banco/list/${this.empresaService.empresaSelected.value.id}`).pipe((0,v.b)({next:h=>(this.loading.next(!1),this.list.next(Object.assign([],h)),console.log("service",h),(0,d.of)(h)),error:h=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de bancos."),finalize:()=>this.loading.next(!1)}))}get(p){return this.http.get(`${this.url}/banco/${p}`,{headers:new _.WM({loading:"true"})})}create(p){return p.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.post(`${this.url}/banco`,p)}edit(p){return p.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.put(`${this.url}/banco`,p)}delete(p){return this.http.delete(`${this.url}/banco/${p}`)}static#e=this.\u0275fac=function(C){return new(C||m)(c.LFG(e.i),c.LFG(_.eN),c.LFG(E._W),c.LFG(M.P))};static#t=this.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},8487:(T,u,o)=>{o.d(u,{q:()=>v});var _=o(9291),a=o(9862);let v=(()=>{class d{constructor(c){this.http=c}buscar(c){return this.http.get(`https://viacep.com.br/ws/${c}/json/`)}static#e=this.\u0275fac=function(e){return new(e||d)(_.LFG(a.eN))};static#t=this.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},7397:(T,u,o)=>{o.d(u,{Z:()=>E});var _=o(5619),a=o(9397),v=o(2096),d=o(553),l=o(9291),c=o(9862),e=o(2425);let E=(()=>{class M{constructor(m,x){this.http=m,this.toastr=x,this.url=d.N.url,this.list=new _.X([]),this.loading=new _.X(!1)}getList(){return this.http.get(`${this.url}/pais/`).pipe((0,a.b)({next:m=>(this.list.next(m),(0,v.of)(m)),error:m=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de paises.")}))}static#e=this.\u0275fac=function(x){return new(x||M)(l.LFG(c.eN),l.LFG(e._W))};static#t=this.\u0275prov=l.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},6687:(T,u,o)=>{function _(d){var l=d.toString().replace(/^\s+|\s+$/g,""),c=parseInt(l);return!(Number.isNaN(c)||0==c||l.length>8||(l=l.padStart(8,"0"),8!=l.length)||function a(d){return d.split("").every(l=>l===d[0])}(l)||function v(d){var l=d+"";return(l=l.split("")).every((e,E)=>E===l.length-1||e<l[E+1])}(c))}o.d(u,{c:()=>_})}}]);