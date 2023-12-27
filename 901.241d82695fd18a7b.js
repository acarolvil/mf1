"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[901],{2901:(kt,M,r)=>{r.r(M),r.d(M,{UsuariosModule:()=>Wt});var g=r(6814),j=r(5592),m=r(490),t=r(9291),x=r(6434),w=r(9862),U=r(5619),E=r(9397),R=r(2096),c=r(2832),I=r(5219);class C{constructor(){this.id=0,this.perfilAcesso=void 0,this.perfilAcesso_Id=void 0,this.name="",this.email="",this.telefoneCelular=""}}var q=[{field:"id",header:"Id",maskType:c.O.undefined,filterType:c.vA.text,filterDisplay:c.w2.menu},{field:"name",header:"Nome",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.substring,substringLength:22},{field:"email",header:"E-mail",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.substring,substringLength:30},{field:"telefoneCelular",header:"Telefone/Celular",filterType:c.vA.text,filterDisplay:c.w2.menu,maskType:c.O.telefoneCelular},{field:"perfilAcesso.perfil",header:"Tipo de Acesso",maskType:c.O.options,filterType:c.vA.text,filterDisplay:c.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:I.a6.EQUALS,values:[{value:"Admin",output:"Admin",class:"flag-yellow"},{value:"Master",output:"Master",class:"flag-info"}]},{field:"ativo",header:"Ativo",maskType:c.O.options,filterType:c.vA.text,filterDisplay:c.w2.menu,filterShowAddButton:!1,filterShowMatchMode:!1,showOperator:!1,filterMatchMode:I.a6.EQUALS,values:[{value:!0,output:"Ativo",class:"flag-green"},{value:!1,output:"Inativo",class:"flag-danger"}]}],D=r(553),F=r(697),Y=r(8787),b=r(2425),T=r(2667);let v=(()=>{class i{constructor(e,o,s,a,l){this.table=e,this.http=o,this.toastr=s,this.crypto=a,this.accountService=l,this.url=D.N.url,this.list=new U.X([]),this.objeto=new U.X(void 0),this.account=new F.mR,this.perfilAcesso=new U.X([]),this.accountService.account.subscribe(h=>this.account=h??new F.mR)}getObject(){var e=localStorage.getItem("usuario");return e&&this.setObject(this.crypto.decrypt(e)??new C),this.objeto}setObject(e){localStorage.setItem("usuario",this.crypto.encrypt(e)??""),this.objeto.next(e)}getList(){return this.table.loading.next(!0),this.http.get(`${this.url}/usuario`,{headers:new w.WM({loading:"false"})}).pipe((0,E.b)({next:e=>(e=e.map(o=>(o.ativo=!o.dataDesativado,o)),this.list.next(e),(0,R.of)(e)),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar usu\xe1rios.")}))}get(e){return this.http.get(`${this.url}/usuario/${e}`,{headers:new w.WM({loading:"true"})})}getPerfilAcesso(){return this.http.get(`${this.url}/perfilAcesso/getAll`).pipe((0,E.b)({next:e=>(this.perfilAcesso.next(e),e),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar perfil.")}))}create(e){return this.http.post(`${this.url}/usuario`,e)}edit(e){return this.http.put(`${this.url}/usuario`,e)}delete(e){return this.http.delete(`${this.url}/usuario/${e}`)}deactivated(e,o){return this.http.patch(`${this.url}/usuario/${e}/${o}`,{})}resetPassword(e){return this.http.patch(`${this.url}/usuario/reset-password/${e}`,{})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(Y.i),t.LFG(w.eN),t.LFG(b._W),t.LFG(T.w),t.LFG(x.B))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var d=r(132);let Z=(()=>{class i{constructor(e,o,s,a){this.accountService=e,this.userService=o,this.router=s,this.toastr=a}canActivate(e,o){return new j.y(s=>{this.userService.objeto.subscribe(a=>{var l=this.accountService.accountValue;s.next(l?.perfilAcesso_Id!=m.uU.Master||a?.perfilAcesso_Id!=m.uU.Admin)})})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(x.B),t.LFG(v),t.LFG(d.F0),t.LFG(b._W))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var y=r(590),p=r(708),S=r(674),L=r(6599),A=r(5597);const G=function(){return["cadastrar"]};function P(i,n){1&i&&(t.TgZ(0,"div",9)(1,"a",10)(2,"span",11),t._uU(3," Cadastrar Usu\xe1rio"),t.qZA()()()),2&i&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,G)))}let B=(()=>{class i{constructor(e,o,s){this.table=e,this.userService=o,this.isMobile=s,this.faUsers=y.FVb,this.list=[],this.tableLinks=[],this.columns=q,this.subscription=[],this.screen=S.I.lg;var a=this.userService.list.subscribe(_=>this.list=_);this.subscription.push(a);var l=this.isMobile.value.subscribe(_=>this.screen=_);this.subscription.push(l),(0,p.n)(this.userService.getList()),console.log("oi");var h=this.table.selected.subscribe(_=>{_&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]},{label:_.ativo?"Desabilitar":"Habilitar",routePath:[_.ativo?"desabilitar":"habilitar"],paramsFieldName:["id"]},{label:"Resetar senha",routePath:["reset-password"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(h)}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(Y.i),t.Y36(v),t.Y36(S.h))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:12,vars:11,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"col-xl-3","col-lg-3","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(o,s){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Usu\xe1rios"),t.qZA()()(),t.TgZ(7,"div",6),t.YNc(8,P,4,2,"ng-template",null,7,t.W1O),t._UZ(10,"app-list-shared",8),t.qZA()(),t._UZ(11,"router-outlet")),2&o){const a=t.MAs(9);t.xp6(3),t.Q6J("icon",s.faUsers),t.xp6(7),t.Q6J("list",s.list)("topActions",a)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",s.columns)("tableLinks",s.tableLinks)("selectable",!0)}},dependencies:[d.lC,d.rH,L.o,A.BN]})}return i})();var N=r(5861),f=r(2855),J=r(342),u=r(6223);const H=["template"],V=["icon"];function $(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faUser)}}function W(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function k(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Remova os espa\xe7os antes e depois do texto."),t.qZA())}function z(i,n){if(1&i&&(t.TgZ(0,"p",8),t.YNc(1,k,2,0,"span",11),t.qZA()),2&i){t.oxw(2);const e=t.MAs(9);t.xp6(1),t.Q6J("ngIf","^\\S(.*\\S)?$"==e.errors.pattern.requiredPattern)}}function K(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,W,2,0,"p",25),t.YNc(2,z,2,1,"p",25),t.qZA()),2&i){t.oxw();const e=t.MAs(9);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.pattern)}}function X(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function tt(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Telefone/celular inv\xe1lido"),t.qZA())}function et(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,X,2,0,"p",25),t.YNc(2,tt,2,0,"p",25),t.qZA()),2&i){t.oxw();const e=t.MAs(17);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.mask)}}function it(i,n){if(1&i&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.Oqu(e.perfil)}}function ot(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function st(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,ot,2,0,"p",25),t.qZA()),2&i){t.oxw();const e=t.MAs(25);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function at(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Este campo \xe9 obrigat\xf3rio."),t.qZA())}function nt(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"E-mail inv\xe1lido"),t.qZA())}function rt(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,at,2,0,"p",25),t.YNc(2,nt,2,0,"p",25),t.qZA()),2&i){t.oxw();const e=t.MAs(36);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.email)}}function lt(i,n){if(1&i&&(t.TgZ(0,"p",33),t._uU(1),t.ALo(2,"json"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function ct(i,n){1&i&&(t.TgZ(0,"p",33),t._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar"),t.qZA())}function ut(i,n){if(1&i&&(t.TgZ(0,"div",30),t.YNc(1,lt,3,3,"p",31),t.YNc(2,ct,2,0,"p",32),t.qZA()),2&i){t.oxw(2);const e=t.MAs(1),o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.erro),t.xp6(1),t.Q6J("ngIf",e.invalid&&0==o.erro.length)}}function dt(i,n){1&i&&t._UZ(0,"span",34)}function pt(i,n){if(1&i&&(t.TgZ(0,"div",26),t.YNc(1,ut,3,2,"div",27),t.TgZ(2,"button",28),t.YNc(3,dt,1,0,"span",29),t._uU(4," Salvar "),t.qZA()()),2&i){t.oxw();const e=t.MAs(1),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.erro||e.invalid),t.xp6(1),t.Q6J("disabled",e.invalid||o.loading||!o.podeEditar),t.xp6(1),t.Q6J("ngIf",o.loading)}}function mt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.MAs(1),a=t.oxw();return t.KtG(a.send(s))}),t.TgZ(2,"div",5)(3,"div",6)(4,"label",7),t._uU(5,"Nome: "),t.TgZ(6,"span",8),t._uU(7,"*"),t.qZA()(),t.TgZ(8,"input",9,10),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.objeto.name=s)})("change",function(){t.CHM(e);const s=t.MAs(9),a=t.oxw();return t.KtG(a.objeto.name=s.value.trim())}),t.qZA(),t.YNc(10,K,3,2,"div",11),t.qZA(),t.TgZ(11,"div",6)(12,"label",12),t._uU(13,"Telefone/Celular: "),t.TgZ(14,"span",8),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"input",13,14),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.objeto.telefoneCelular=s)}),t.qZA(),t.YNc(18,et,3,2,"div",11),t.qZA(),t.TgZ(19,"div",6)(20,"label",15),t._uU(21,"Perfil: "),t.TgZ(22,"span",8),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"select",16,17),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.objeto.perfilAcesso_Id=s)}),t.TgZ(26,"option",18),t._uU(27,"Selecione"),t.qZA(),t.YNc(28,it,2,2,"option",19),t.qZA(),t.YNc(29,st,2,1,"div",11),t.qZA(),t.TgZ(30,"div",20)(31,"label",21),t._uU(32,"E-mail: "),t.TgZ(33,"span",8),t._uU(34,"*"),t.qZA()(),t.TgZ(35,"input",22,23),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.objeto.email=s)}),t.qZA(),t.YNc(37,rt,3,2,"div",11),t.qZA()(),t.YNc(38,pt,5,3,"div",24),t.qZA()}if(2&i){const e=t.MAs(9),o=t.MAs(17),s=t.MAs(25),a=t.MAs(36),l=t.oxw();t.xp6(8),t.Q6J("ngModel",l.objeto.name)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",e.touched&&e.errors),t.xp6(6),t.Q6J("ngModel",l.objeto.telefoneCelular)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",o.touched&&o.errors),t.xp6(6),t.Q6J("ngModel",l.objeto.perfilAcesso_Id)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngForOf",l.perfil),t.xp6(1),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(6),t.Q6J("email",!0)("ngModel",l.objeto.email)("readonly",l.isEditPage)("pattern",l.emailPattern)("disabled",!l.podeEditar),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(1),t.Q6J("ngIf",l.podeEditar)}}let Q=(()=>{class i{constructor(e,o,s,a,l,h){this.usuarioService=e,this.modalService=o,this.activatedRoute=s,this.crypto=a,this.accountService=l,this.toastr=h,this.faUser=y.ILF,this.objeto=new C,this.loading=!1,this.erro="",this.isEditPage=!1,this.perfil=[],this.subscription=[],this.emailPattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,this.modal=new f.u,this.podeEditar=!0,this.perfil=m.JH,this.account=this.accountService.accountValue,this.perfil=this.account?.perfilAcesso_Id==m.uU.Master?[{id:2,perfil:"Master"}]:[{id:1,perfil:"Admin"},{id:2,perfil:"Master"}]}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"900px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),this.modal.title="Editar Usu\xe1rio",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,p.n)(this.usuarioService.get(this.objeto.id)).then(s=>{this.objeto=s,this.account?.perfilAcesso_Id==m.uU.Master&&s.perfilAcesso_Id==m.uU.Admin&&(this.podeEditar=!1,this.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para editar uma conta administradora.")),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(s=>{this.voltar()})):(this.modal.title="Cadastrar Usu\xe1rio",this.modal.routerBack=["../"],this.isEditPage=!1,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200))});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(e){var o=this;this.loading=!0,this.erro="",this.request().then(function(){var s=(0,N.Z)(function*(a){yield(0,p.n)(o.usuarioService.getList()),o.voltar()});return function(a){return s.apply(this,arguments)}}()).catch(s=>{this.erro=(0,J.b)(s)}).finally(()=>this.loading=!1)}request(){return(0,p.n)(0==this.objeto.id?this.usuarioService.create(this.objeto):this.usuarioService.edit(this.objeto))}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(v),t.Y36(f.Z),t.Y36(d.gz),t.Y36(T.w),t.Y36(x.B),t.Y36(b._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-form"]],viewQuery:function(o,s){if(1&o&&(t.Gf(H,5),t.Gf(V,5)),2&o){let a;t.iGM(a=t.CRH())&&(s.template=a.first),t.iGM(a=t.CRH())&&(s.icon=a.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[3,"ngSubmit"],["form","ngForm"],[1,"row","form-row"],[1,"form-group","col-xl-4","col-lg-4","col-md-6","col-sm-6","col-12"],["for","name"],[1,"text-danger"],["type","text","name","name","id","name","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["name","ngModel"],[4,"ngIf"],["for","telefoneCelular"],["type","text","name","telefoneCelular","id","telefoneCelular","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["telefoneCelular","ngModel"],["for","perfilAcesso_Id"],["name","perfilAcesso_Id","id","perfilAcesso_Id","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["perfilAcesso_Id","ngModel"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"form-group","col-xl-12","col-lg-12","col-md-6","col-sm-6","col-12","email-container"],["for","email"],["type","email","name","email","id","email","placeholder","example@hotmail.com","required","",1,"form-control",3,"email","ngModel","readonly","pattern","disabled","ngModelChange"],["email","ngModel"],["class","d-flex align-items-start flex-wrap  mt-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"d-flex","align-items-start","flex-wrap","mt-1"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0"],["class","text-red",4,"ngFor","ngForOf"],["class","text-red",4,"ngIf"],[1,"text-red"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,s){1&o&&(t.YNc(0,$,1,1,"ng-template",null,0,t.W1O),t.YNc(2,mt,39,18,"ng-template",null,1,t.W1O),t._UZ(4,"router-outlet"))},dependencies:[g.sg,g.O5,d.lC,A.BN,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.Q7,u.c5,u.on,u.On,u.F,g.Ts]})}return i})();const ht=["template"],_t=["icon"];function ft(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faTrash)}}function gt(i,n){if(1&i&&(t.TgZ(0,"div",8)(1,"p",9),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu(e.erro)}}function vt(i,n){1&i&&t._UZ(0,"span",10)}function xt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"p",3),t._uU(2,"Tem certeza que deseja excluir esse registro? Ele n\xe3o poder\xe1 ser recuperado."),t.qZA(),t.TgZ(3,"p"),t._uU(4,"O usu\xe1rio n\xe3o ter\xe1 acesso mais \xe0 plataforma."),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"Obs.: Se esse usu\xe1rio estiver relacionado a um outro registro, n\xe3o poder\xe1 ser exclu\xeddo."),t.qZA(),t.YNc(7,gt,3,1,"div",5),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.send())}),t.YNc(9,vt,1,0,"span",7),t.TgZ(10,"span"),t._uU(11,"Excluir"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading)}}let bt=(()=>{class i{constructor(e,o,s,a){this.activatedRoute=e,this.modalService=o,this.usuarioService=s,this.crypto=a,this.faTrash=y.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new f.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var e=this.activatedRoute.params.subscribe(o=>{if(o.usuario_id)try{this.id=this.crypto.decrypt(o.usuario_id),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete usuario")},200)}catch{this.voltar()}else this.voltar()});this.subscription.push(e)}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,p.n)(this.usuarioService.delete(this.id)).then(e=>{this.loading=!1,(0,p.n)(this.usuarioService.getList()),this.voltar()}).catch(e=>{this.loading=!1,this.erro=(0,J.b)(e)})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(d.gz),t.Y36(f.Z),t.Y36(v),t.Y36(T.w))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-delete"]],viewQuery:function(o,s){if(1&o&&(t.Gf(ht,5),t.Gf(_t,5)),2&o){let a;t.iGM(a=t.CRH())&&(s.template=a.first),t.iGM(a=t.CRH())&&(s.icon=a.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],[1,"text-info"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,s){1&o&&(t.YNc(0,ft,1,1,"ng-template",null,0,t.W1O),t.YNc(2,xt,12,2,"ng-template",null,1,t.W1O))},dependencies:[g.O5,A.BN]})}return i})();var Tt=r(7280),Zt=r(9336);const At=["template"],Ct=["icon"];function yt(i,n){if(1&i&&t._UZ(0,"fa-icon",2),2&i){const e=t.oxw();t.Q6J("icon",e.faKey)}}function wt(i,n){1&i&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja resetar sua senha?"),t.qZA(),t.TgZ(3,"p",7)(4,"small"),t._uU(5,"Voc\xea receber\xe1 um email com o link de altera\xe7\xe3o de senha."),t.qZA()(),t.TgZ(6,"p"),t._uU(7,"Ao resetar sua senha, voc\xea ser\xe1 automaticamente deslogado para realizar novo login."),t.qZA()())}function Ut(i,n){1&i&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja resetar a senha desse usu\xe1rio? "),t.qZA(),t.TgZ(3,"p",7)(4,"small"),t._uU(5,"Esse usu\xe1rio receber\xe1 um email com o link de altera\xe7\xe3o de senha."),t.qZA()()())}function Mt(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Oqu(e.erro)}}function Et(i,n){1&i&&t._UZ(0,"span",8)}function It(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,wt,8,0,"div",3),t.YNc(2,Ut,6,0,"div",3),t.YNc(3,Mt,2,1,"p",4),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.send())}),t.YNc(5,Et,1,0,"span",6),t.TgZ(6,"span"),t._uU(7," Resetar"),t.qZA()()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",(null==e.userLogado?null:e.userLogado.email)==e.objeto.email),t.xp6(1),t.Q6J("ngIf",(null==e.userLogado?null:e.userLogado.email)!=e.objeto.email),t.xp6(1),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading)}}function Ft(i,n){1&i&&(t.TgZ(0,"div")(1,"p",7),t._uU(2,"Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),t.qZA()())}function Yt(i,n){if(1&i&&(t.YNc(0,It,8,4,"div",3),t.YNc(1,Ft,3,0,"div",3)),2&i){const e=t.oxw();t.Q6J("ngIf",e.podeResetar),t.xp6(1),t.Q6J("ngIf",!e.podeResetar)}}let St=(()=>{class i{constructor(e,o,s,a,l,h,_){this.activatedRoute=e,this.usuarioService=o,this.accountService=s,this.crypto=a,this.toastr=l,this.modalService=h,this.alertService=_,this.faKey=y.DD4,this.objeto=new C,this.loading=!1,this.erro="",this.subscription=[],this.modal=new f.u,this.podeResetar=!0}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"500px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.title="Resetar Senha",this.modal.routerBack=["../../"];var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),(0,p.n)(this.usuarioService.get(this.objeto.id)).then(s=>{this.objeto=s;var a=this.accountService.accountValue;a?.perfilAcesso_Id==m.uU.Master&&s.perfilAcesso_Id==m.uU.Admin&&(this.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),this.erro="Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora.",this.podeResetar=!1),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(s=>{this.voltar()})):this.voltar()});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,(0,p.n)(this.accountService.forgotPassword(this.objeto.email)).then(e=>{this.voltar(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),this.alertService.success(e.message),this.objeto.email==this.userLogado?.email&&this.accountService.logout()}).catch().finally(()=>this.loading=!1)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(d.gz),t.Y36(v),t.Y36(x.B),t.Y36(T.w),t.Y36(b._W),t.Y36(f.Z),t.Y36(Zt.c))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-reset-password"]],viewQuery:function(o,s){if(1&o&&(t.Gf(At,5),t.Gf(Ct,5)),2&o){let a;t.iGM(a=t.CRH())&&(s.template=a.first),t.iGM(a=t.CRH())&&(s.icon=a.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,s){1&o&&(t.YNc(0,yt,1,1,"ng-template",null,0,t.W1O),t.YNc(2,Yt,2,2,"ng-template",null,1,t.W1O),t._UZ(4,"router-outlet"))},dependencies:[g.O5,d.lC,A.BN]})}return i})();const Nt=["template"];function Jt(i,n){1&i&&(t.TgZ(0,"span",7),t._uU(1,"habilitar"),t.qZA())}function Qt(i,n){1&i&&(t.TgZ(0,"span",7),t._uU(1,"desabilitar"),t.qZA())}function Ot(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Voc\xea automaticamente ser\xe1 deslogado e n\xe3o poder\xe1 acessar o Planner."),t.qZA())}function jt(i,n){1&i&&(t.TgZ(0,"p",8),t._uU(1,"Ap\xf3s isso, o usu\xe1rio n\xe3o poder\xe1 acessar o Planner."),t.qZA())}function Rt(i,n){if(1&i&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Oqu(e.erro)}}function qt(i,n){1&i&&t._UZ(0,"span",9)}function Dt(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Desabilitar"),t.qZA())}function Lt(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Habilitar"),t.qZA())}function Gt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"p"),t._uU(2,"Tem certeza que deseja "),t.YNc(3,Jt,2,0,"span",3),t.YNc(4,Qt,2,0,"span",3),t._uU(5," esse registro? "),t.qZA(),t.YNc(6,Ot,2,0,"p",4),t.YNc(7,jt,2,0,"p",4),t.YNc(8,Rt,2,1,"p",4),t.TgZ(9,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.send())}),t.YNc(10,qt,1,0,"span",6),t.YNc(11,Dt,2,0,"span",1),t.YNc(12,Lt,2,0,"span",1),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(3),t.Q6J("ngIf",e.habilitar),t.xp6(1),t.Q6J("ngIf",!e.habilitar),t.xp6(2),t.Q6J("ngIf",e.isUser&&e.habilitar&&e.objeto.email==(null==e.account?null:e.account.email)),t.xp6(1),t.Q6J("ngIf",e.isUser&&e.habilitar&&e.objeto.email!=(null==e.account?null:e.account.email)),t.xp6(1),t.Q6J("ngIf",e.erro),t.xp6(2),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",!e.habilitar),t.xp6(1),t.Q6J("ngIf",e.habilitar)}}function Pt(i,n){if(1&i&&(t.TgZ(0,"div",10)(1,"p",8),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu(e.erro)}}function Bt(i,n){if(1&i&&(t.YNc(0,Gt,13,8,"div",1),t.YNc(1,Pt,3,1,"div",2)),2&i){const e=t.oxw();t.Q6J("ngIf",e.podeAtivar),t.xp6(1),t.Q6J("ngIf",!e.podeAtivar)}}let O=(()=>{class i{constructor(e,o,s,a,l,h){this.usuarioService=e,this.modalService=o,this.activatedRoute=s,this.crypto=a,this.accountService=l,this.toastr=h,this.objeto=new C,this.loading=!1,this.erro="",this.subscription=[],this.modal=new f.u,this.podeAtivar=!0,this.habilitar=!1,this.isUser=!1,this.account=this.accountService.accountValue}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var e=this.activatedRoute.params.subscribe(o=>{o.usuario_id?(this.objeto.id=this.crypto.decrypt(o.usuario_id),this.isUser=this.account?.id==this.objeto.id,this.modal.routerBack=["../../"],(0,p.n)(this.usuarioService.get(this.objeto.id)).then(s=>{this.objeto=s,this.habilitar=!(null==this.objeto.dataDesativado||null==this.objeto.dataDesativado),this.objeto.ativo=!this.habilitar;var a=this.accountService.accountValue;if(this.modal.title=this.habilitar?"Habilitar Usu\xe1rio":"Desabilitar Usu\xe1rio",a?.perfilAcesso_Id==m.uU.Master&&s.perfilAcesso_Id==m.uU.Admin){this.podeAtivar=!1;var l=this.habilitar?"habilitar":"desabilitar";this.toastr.info(`Voc\xea n\xe3o tem permiss\xe3o para ${l} uma conta administradora.`),this.erro=`Voc\xea n\xe3o tem permiss\xe3o para ${l} uma conta administradora.`}setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(s=>{this.voltar()})):this.voltar()});this.subscription.push(e)}voltar(){this.modalService.removeModal(this.modal)}send(){var e=this;this.loading=!0,this.erro="",(0,p.n)(this.usuarioService.deactivated(this.objeto.id,this.habilitar)).then(function(){var o=(0,N.Z)(function*(s){e.habilitar&&e.isUser&&e.accountService.logout(),yield(0,p.n)(e.usuarioService.getList()),e.voltar()});return function(s){return o.apply(this,arguments)}}()).finally(()=>this.loading=!1)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(v),t.Y36(f.Z),t.Y36(d.gz),t.Y36(T.w),t.Y36(x.B),t.Y36(b._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-deactivated"]],viewQuery:function(o,s){if(1&o&&t.Gf(Nt,5),2&o){let a;t.iGM(a=t.CRH())&&(s.template=a.first)}},decls:3,vars:0,consts:[["template",""],[4,"ngIf"],["class","mb-2",4,"ngIf"],["class","font-weight-bold",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"font-weight-bold"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"mb-2"]],template:function(o,s){1&o&&(t.YNc(0,Bt,2,2,"ng-template",null,0,t.W1O),t._UZ(2,"router-outlet"))},dependencies:[g.O5,d.lC]})}return i})();const Ht=[{path:"",component:B,children:[{path:"cadastrar",component:Q,data:{modalOrder:1},title:"Zentech - Cadastrar usu\xe1rio"},{path:"editar/:usuario_id",component:Q,data:{modalOrder:1},title:"Zentech - Editar usu\xe1rio",canActivate:[Z]},{path:"excluir/:usuario_id",component:bt,data:{modalOrder:1},title:"Zentech - Excluir usu\xe1rio",canActivate:[Z]},{path:"reset-password/:usuario_id",component:St,data:{modalOrder:1},title:"Zentech - Resetar senha",canActivate:[Z]},{path:"habilitar/:usuario_id",component:O,data:{modalOrder:1},title:"Zentech - Habilitar usu\xe1rio",canActivate:[Z]},{path:"desabilitar/:usuario_id",component:O,data:{modalOrder:1},title:"Zentech - Desabilitar usu\xe1rio",canActivate:[Z]},Tt.D]}];let Vt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(Ht),d.Bz]})}return i})();var $t=r(6208);let Wt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[g.ez,Vt,$t.m,A.uH,u.u5]})}return i})()}}]);