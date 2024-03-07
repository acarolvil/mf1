"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[901],{2901:(K,F,l)=>{l.r(F),l.d(F,{UsuariosModule:()=>dt});var b=l(6814),N=l(5592),g=l(490),e=l(9291),r=l(6434),J=l(9862),I=l(5619),D=l(9397),O=l(2096),m=l(2832),A=l(5219);class U{constructor(){this.id=0,this.perfilAcesso=void 0,this.perfilAcesso_Id=void 0,this.name="",this.email="",this.telefoneCelular="",this.empresa_Id=0}}var R=[{field:"id",header:"Id",maskType:m.O.undefined,filterType:m.vA.text,filterDisplay:m.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS},{field:"name",header:"Nome",filterType:m.vA.text,filterDisplay:m.w2.menu,maskType:m.O.substring,substringLength:22,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"email",header:"E-mail",filterType:m.vA.text,filterDisplay:m.w2.menu,maskType:m.O.substring,substringLength:30,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"telefoneCelular",header:"Telefone/Celular",filterType:m.vA.text,filterDisplay:m.w2.menu,maskType:m.O.undefined,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.CONTAINS},{field:"perfilAcesso.perfil",header:"Tipo de Acesso",maskType:m.O.options,filterType:m.vA.text,filterDisplay:m.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS,values:[{value:"Admin",output:"Admin",class:"flag-yellow"},{value:"Master",output:"Master",class:"flag-info"},{value:"Consultor",output:"Consultor",class:"flag-warning"}]},{field:"ativo",header:"Ativo",maskType:m.O.options,filterType:m.vA.text,filterDisplay:m.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:A.a6.EQUALS,values:[{value:!0,output:"Ativo",class:"flag-green"},{value:!1,output:"Inativo",class:"flag-danger"}]}],j=l(553),Q=l(697),_=l(8787),T=l(2425),c=l(2667),h=l(5038);let f=(()=>{class i{constructor(t,s,o,a,p,C){this.table=t,this.http=s,this.toastr=o,this.crypto=a,this.accountService=p,this.empresaService=C,this.url=j.N.url,this.list=new I.X([]),this.objeto=new I.X(void 0),this.account=new Q.mR,this.perfilAcesso=new I.X([]),this.loading=new I.X(!1),this.accountService.account.subscribe(S=>this.account=S??new Q.mR)}getObject(){var t=localStorage.getItem("usuario");return t&&this.setObject(this.crypto.decrypt(t)??new U),this.objeto}setObject(t){localStorage.setItem("usuario",this.crypto.encrypt(t)??""),this.objeto.next(t)}getList(t=!1){return this.loading.next(t),this.table.loading.next(!0),this.http.get(`${this.url}/usuario/list/${this.empresaService.empresaSelected.value.id}`).pipe((0,D.b)({next:o=>(o=o.map(a=>(a.ativo=!a.dataDesativado,a)),this.list.next(o),this.loading.next(!1),(0,O.of)(o)),error:o=>this.toastr.error("N\xe3o foi poss\xedvel carregar usu\xe1rios."),finalize:()=>this.loading.next(!1)}))}get(t){return this.http.get(`${this.url}/usuario/${t}`,{headers:new J.WM({loading:"true"})})}getPerfilAcesso(){return this.http.get(`${this.url}/perfilAcesso/getAll`).pipe((0,D.b)({next:t=>(this.perfilAcesso.next(t),t),error:t=>this.toastr.error("N\xe3o foi poss\xedvel carregar perfil.")}))}create(t){return t.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.post(`${this.url}/usuario`,t)}edit(t){return t.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.put(`${this.url}/usuario`,t)}delete(t){return this.http.delete(`${this.url}/usuario/${t}`)}deactivated(t,s){return this.http.patch(`${this.url}/usuario/${t}/${s}`,{})}resetPassword(t){return this.http.patch(`${this.url}/usuario/reset-password/${t}`,{})}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(_.i),e.LFG(J.eN),e.LFG(T._W),e.LFG(c.w),e.LFG(r.B),e.LFG(h.P))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var d=l(132);let E=(()=>{class i{constructor(t,s,o,a){this.accountService=t,this.userService=s,this.router=o,this.toastr=a}canActivate(t,s){return new N.y(o=>{this.userService.objeto.subscribe(a=>{var p=this.accountService.accountValue;o.next(p?.perfilAcesso_Id!=g.uU.Master||a?.perfilAcesso_Id!=g.uU.Admin)})})}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(r.B),e.LFG(f),e.LFG(d.F0),e.LFG(T._W))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var y=l(5861),w=l(590),u=l(708),Z=l(6599),$=l(9901),Y=l(5597);function z(i,n){if(1&i&&(e.TgZ(0,"p",13)(1,"small"),e._uU(2,"Usu\xe1rios cadastrados em "),e.TgZ(3,"strong"),e._uU(4),e.qZA()()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(t.empresaSelected.nome||"Empresa X")}}function X(i,n){1&i&&e._UZ(0,"span",14)}const k=function(){return["cadastrar"]};function ee(i,n){1&i&&(e.TgZ(0,"div",15)(1,"a",16)(2,"span",17),e._uU(3," Cadastrar Usu\xe1rio"),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("routerLink",e.DdM(1,k)))}let te=(()=>{class i{constructor(t,s,o,a){var p=this;this.table=t,this.userService=s,this.accountService=o,this.empresaService=a,this.faUsers=w.FVb,this.list=[],this.tableLinks=[],this.columns=R,this.subscription=[],this.loading=!1;var C=this.userService.list.subscribe(v=>this.list=Object.assign([],v));this.subscription.push(C);var S=this.userService.loading.subscribe(v=>this.loading=v);this.subscription.push(S);var q=this.empresaService.empresaSelected.subscribe(function(){var v=(0,y.Z)(function*(L){p.empresaSelected=L.empresa,L&&L.id&&(yield(0,u.n)(p.userService.getList(!0)))});return function(L){return v.apply(this,arguments)}}());this.subscription.push(q),(0,u.n)(this.userService.getList(!0));var P=this.table.selected.subscribe(v=>{v&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:v.ativo?"Desabilitar":"Habilitar",routePath:[v.ativo?"desabilitar":"habilitar"],paramsFieldName:["id"]},{label:"Resetar senha",routePath:["reset-password"],paramsFieldName:["id"]}],3!=this.accountService.accountValue?.perfilAcesso_Id&&this.tableLinks.push({label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}),this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(P)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}getList(){(0,u.n)(this.userService.getList(!0))}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(_.i),e.Y36(f),e.Y36(r.B),e.Y36(h.P))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-list"]],decls:18,vars:14,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],["class","page__header-subtitle",4,"ngIf"],[1,"ms-auto","mt-auto",2,"margin-bottom","7px"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"page__header-subtitle"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(s,o){if(1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"span",2),e._UZ(3,"fa-icon",3),e.qZA(),e.TgZ(4,"div",4)(5,"h3",5),e._uU(6,"Usu\xe1rios"),e.qZA(),e.YNc(7,z,5,1,"p",6),e.qZA(),e.TgZ(8,"div",7)(9,"button",8),e.NdJ("click",function(){return o.getList()}),e.YNc(10,X,1,0,"span",9),e._uU(11,"Atualizar"),e.qZA()(),e._UZ(12,"app-empresa-selected"),e.qZA(),e.TgZ(13,"div",10),e.YNc(14,ee,4,2,"ng-template",null,11,e.W1O),e._UZ(16,"app-list-shared",12),e.qZA()(),e._UZ(17,"router-outlet")),2&s){const a=e.MAs(15);e.xp6(3),e.Q6J("icon",o.faUsers),e.xp6(4),e.Q6J("ngIf",o.empresaSelected),e.xp6(2),e.Q6J("disabled",o.loading),e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(6),e.Q6J("list",o.list)("topActions",a)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",o.columns)("tableLinks",o.tableLinks)("selectable",!0)}},dependencies:[b.O5,d.lC,d.rH,Z.o,$.j,Y.BN]})}return i})();var M=l(2855),G=l(342),x=l(6223),H=l(2352);const ie=["template"],se=["icon"];function oe(i,n){if(1&i&&e._UZ(0,"fa-icon",2),2&i){const t=e.oxw();e.Q6J("icon",t.faUser)}}function ae(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ne(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1,"Remova os espa\xe7os antes e depois do texto."),e.qZA())}function re(i,n){if(1&i&&(e.TgZ(0,"p",9),e.YNc(1,ne,2,0,"span",12),e.qZA()),2&i){e.oxw(2);const t=e.MAs(10);e.xp6(1),e.Q6J("ngIf","^\\S(.*\\S)?$"==t.errors.pattern.requiredPattern)}}function le(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,ae,2,0,"p",27),e.YNc(2,re,2,1,"p",27),e.qZA()),2&i){e.oxw();const t=e.MAs(10);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.pattern)}}function ce(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function pe(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Telefone/celular inv\xe1lido"),e.qZA())}function de(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,ce,2,0,"p",27),e.YNc(2,pe,2,0,"p",27),e.qZA()),2&i){e.oxw();const t=e.MAs(18);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.mask)}}function ue(i,n){if(1&i&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("ngValue",t.id),e.xp6(1),e.Oqu(t.perfil)}}function me(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function _e(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,me,2,0,"p",27),e.qZA()),2&i){e.oxw();const t=e.MAs(26);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function he(i,n){if(1&i&&(e.TgZ(0,"div",32)(1,"div",33)(2,"p",34),e._uU(3),e.qZA(),e.TgZ(4,"p",34)(5,"strong"),e._uU(6,"C\xf3digo:"),e.qZA(),e._uU(7),e.qZA()()()),2&i){const t=n.$implicit;e.xp6(3),e.Oqu(t.nome),e.xp6(4),e.hij(" ",t.codigoRegistro,"")}}function fe(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function ge(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,fe,2,0,"p",27),e.qZA()),2&i){e.oxw();const t=e.MAs(6);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}const ve=function(){return["nome","codigoRegistro","socioDiretor","ativo"]};function xe(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"label",28),e._uU(2,"Empresa: "),e.TgZ(3,"span",9),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"p-dropdown",29,30),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.objeto.empresa_Id=o)}),e.YNc(7,he,8,2,"ng-template",31),e.qZA(),e.YNc(8,ge,2,1,"div",12),e.qZA()}if(2&i){const t=e.MAs(6),s=e.oxw(2);e.xp6(5),e.Q6J("styleClass","form-control "+(s.loadingEmpresas?"form-control-loading":""))("options",s.empresas)("ngModel",s.objeto.empresa_Id)("placeholder","Selecione")("disabled",s.loadingEmpresas)("filter",!0)("filterFields",e.DdM(10,ve))("showClear",!0)("required",!0),e.xp6(3),e.Q6J("ngIf",t.touched&&t.errors)}}function be(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function Te(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"E-mail inv\xe1lido"),e.qZA())}function Ae(i,n){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,be,2,0,"p",27),e.YNc(2,Te,2,0,"p",27),e.qZA()),2&i){e.oxw();const t=e.MAs(38);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.email)}}function Ze(i,n){if(1&i&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"json"),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t))}}function Ce(i,n){1&i&&(e.TgZ(0,"p",9),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar"),e.qZA())}function Me(i,n){if(1&i&&(e.TgZ(0,"div",39),e.YNc(1,Ze,3,3,"p",40),e.YNc(2,Ce,2,0,"p",27),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1),s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.erro),e.xp6(1),e.Q6J("ngIf",t.invalid&&0==s.erro.length)}}function Ee(i,n){1&i&&e._UZ(0,"span",41)}function Se(i,n){if(1&i&&(e.TgZ(0,"div",35),e.YNc(1,Me,3,2,"div",36),e.TgZ(2,"button",37),e.YNc(3,Ee,1,0,"span",38),e.TgZ(4,"span"),e._uU(5,"Salvar"),e.qZA()()()),2&i){e.oxw();const t=e.MAs(1),s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.erro||t.invalid),e.xp6(1),e.Q6J("disabled",t.invalid||s.loading||!s.podeEditar),e.xp6(1),e.Q6J("ngIf",s.loading)}}function Ie(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"form",3,4),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.MAs(1),a=e.oxw();return e.KtG(a.send(o))}),e.TgZ(2,"div",5)(3,"div",6)(4,"div",7)(5,"label",8),e._uU(6,"Nome: "),e.TgZ(7,"span",9),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",10,11),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.objeto.name=o)})("change",function(){e.CHM(t);const o=e.MAs(10),a=e.oxw();return e.KtG(a.objeto.name=o.value.trim().toUpperCase())}),e.qZA(),e.YNc(11,le,3,2,"div",12),e.qZA(),e.TgZ(12,"div",7)(13,"label",13),e._uU(14,"Telefone/Celular: "),e.TgZ(15,"span",9),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",14,15),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.objeto.telefoneCelular=o)}),e.qZA(),e.YNc(19,de,3,2,"div",12),e.qZA(),e.TgZ(20,"div",7)(21,"label",16),e._uU(22,"Perfil: "),e.TgZ(23,"span",9),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"select",17,18),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.objeto.perfilAcesso_Id=o)}),e.TgZ(27,"option",19),e._uU(28,"Selecione"),e.qZA(),e.YNc(29,ue,2,2,"option",20),e.qZA(),e.YNc(30,_e,2,1,"div",12),e.qZA(),e.YNc(31,xe,9,11,"div",21),e.TgZ(32,"div",22)(33,"label",23),e._uU(34,"E-mail: "),e.TgZ(35,"span",9),e._uU(36,"*"),e.qZA()(),e.TgZ(37,"input",24,25),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.objeto.email=o)}),e.qZA(),e.YNc(39,Ae,3,2,"div",12),e.qZA()(),e.TgZ(40,"div",6),e.YNc(41,Se,6,3,"div",26),e.qZA()()()}if(2&i){const t=e.MAs(10),s=e.MAs(18),o=e.MAs(26),a=e.MAs(38),p=e.oxw();e.xp6(9),e.Q6J("ngModel",p.objeto.name)("disabled",!p.podeEditar),e.xp6(2),e.Q6J("ngIf",t.touched&&t.errors),e.xp6(6),e.Q6J("ngModel",p.objeto.telefoneCelular)("disabled",!p.podeEditar),e.xp6(2),e.Q6J("ngIf",s.touched&&s.errors),e.xp6(6),e.Q6J("ngModel",p.objeto.perfilAcesso_Id)("disabled",!p.podeEditar),e.xp6(2),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngForOf",p.perfil),e.xp6(1),e.Q6J("ngIf",o.touched&&o.errors),e.xp6(1),e.Q6J("ngIf",1==(null==p.account?null:p.account.perfilAcesso_Id)),e.xp6(6),e.Q6J("email",!0)("ngModel",p.objeto.email)("readonly",p.isEditPage)("pattern",p.emailPattern)("disabled",!p.podeEditar),e.xp6(2),e.Q6J("ngIf",a.touched&&a.errors),e.xp6(2),e.Q6J("ngIf",p.podeEditar)}}let V=(()=>{class i{constructor(t,s,o,a,p,C,S){this.usuarioService=t,this.accountService=s,this.empresaService=o,this.modalService=a,this.activatedRoute=p,this.crypto=C,this.toastr=S,this.faUser=w.ILF,this.objeto=new U,this.loading=!1,this.erro="",this.isEditPage=!1,this.empresas=[],this.loadingEmpresas=!1,this.perfil=[],this.subscription=[],this.emailPattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,this.modal=new M.u,this.podeEditar=!0,this.perfil=g.JH,this.account=this.accountService.accountValue;var q=this.empresaService.empresaSelected.subscribe(v=>{this.perfil=[],this.account?.perfilAcesso_Id==g.uU.Admin?(this.perfil=[{id:2,perfil:"Master"},{id:3,perfil:"Consultor"}],27==v.id&&this.perfil.unshift({id:1,perfil:"Admin"})):this.account?.perfilAcesso_Id==g.uU.Master?this.perfil=[{id:2,perfil:"Master"},{id:3,perfil:"Consultor"}]:this.account?.perfilAcesso_Id==g.uU.Consultor&&(this.perfil=[{id:3,perfil:"Consultor"}])});this.subscription.push(q),0==this.empresaService.list.value.length&&(this.loadingEmpresas=!0,(0,u.n)(this.empresaService.getList()).then(v=>{this.loadingEmpresas=!1}));var P=this.empresaService.list.subscribe(v=>this.empresas=v);this.subscription.push(P)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}ngAfterViewInit(){var t=this;return(0,y.Z)(function*(){t.modal.id=0,t.modal.template=t.template,t.modal.icon=t.icon,t.modal.style={"max-width":"500px",overflow:"visible"},t.modal.activatedRoute=t.activatedRoute,t.modal.routerBackOptions={relativeTo:t.activatedRoute};var s=t.activatedRoute.params.subscribe(o=>{o.usuario_id?(t.objeto.id=t.crypto.decrypt(o.usuario_id),t.modal.title="Editar Usu\xe1rio",t.modal.routerBack=["../../"],t.isEditPage=!0,(0,u.n)(t.usuarioService.get(t.objeto.id)).then(a=>{t.objeto=a,t.account?.perfilAcesso_Id==g.uU.Master&&a.perfilAcesso_Id==g.uU.Admin&&(t.podeEditar=!1,t.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para editar uma conta administradora.")),setTimeout(()=>{t.modal=t.modalService.addModal(t.modal,"usuario")},200)}).catch(a=>{t.voltar()})):(t.modal.title="Cadastrar Usu\xe1rio",t.modal.routerBack=["../"],t.isEditPage=!1,setTimeout(()=>{t.modal=t.modalService.addModal(t.modal,"usuario")},200))});t.subscription.push(s)})()}voltar(){this.modalService.removeModal(this.modal)}send(t){var s=this;this.loading=!0,this.erro="",this.request().then(function(){var o=(0,y.Z)(function*(a){yield(0,u.n)(s.usuarioService.getList()),s.voltar()});return function(a){return o.apply(this,arguments)}}()).catch(o=>{this.erro=(0,G.b)(o)}).finally(()=>this.loading=!1)}request(){return(0,u.n)(0==this.objeto.id?this.usuarioService.create(this.objeto):this.usuarioService.edit(this.objeto))}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(f),e.Y36(r.B),e.Y36(h.P),e.Y36(M.Z),e.Y36(d.gz),e.Y36(c.w),e.Y36(T._W))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-form"]],viewQuery:function(s,o){if(1&s&&(e.Gf(ie,5),e.Gf(se,5)),2&s){let a;e.iGM(a=e.CRH())&&(o.template=a.first),e.iGM(a=e.CRH())&&(o.icon=a.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-6","col-lg-4","col-md-6","col-sm-6","col-12"],["for","name"],[1,"text-danger"],["type","text","name","name","id","name","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["name","ngModel"],[4,"ngIf"],["for","telefoneCelular"],["type","text","name","telefoneCelular","id","telefoneCelular","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["telefoneCelular","ngModel"],["for","perfilAcesso_Id"],["name","perfilAcesso_Id","id","perfilAcesso_Id","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["perfilAcesso_Id","ngModel"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["class","form-group col-xl-6 col-lg-4 col-md-6 col-sm-6 col-12",4,"ngIf"],[1,"form-group","col","email-container"],["for","email"],["type","email","name","email","id","email","placeholder","example@hotmail.com","required","",1,"form-control",3,"email","ngModel","readonly","pattern","disabled","ngModelChange"],["email","ngModel"],["class","d-flex align-items-start flex-wrap mt-2 mb-1",4,"ngIf"],["class","text-danger",4,"ngIf"],["for","empresa_Id"],["optionLabel","nome","optionValue","id","name","empresa_Id","id","empresa_Id","appendTo","body",3,"styleClass","options","ngModel","placeholder","disabled","filter","filterFields","showClear","required","ngModelChange"],["empresa_Id","ngModel"],["pTemplate","item"],[1,"d-flex","justify-content-between"],[1,"w-100"],[1,"text-ellipsis"],[1,"d-flex","align-items-start","flex-wrap","mt-2","mb-1"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0"],["class","text-danger",4,"ngFor","ngForOf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(s,o){1&s&&(e.YNc(0,oe,1,1,"ng-template",null,0,e.W1O),e.YNc(2,Ie,42,19,"ng-template",null,1,e.W1O),e._UZ(4,"router-outlet"))},dependencies:[b.sg,b.O5,d.lC,Y.BN,x._Y,x.YN,x.Kr,x.Fj,x.EJ,x.JJ,x.JL,x.Q7,x.c5,x.on,x.On,x.F,H.Lt,A.jx,b.Ts]})}return i})();const Ue=["template"],ye=["icon"];function we(i,n){if(1&i&&e._UZ(0,"fa-icon",2),2&i){const t=e.oxw();e.Q6J("icon",t.faTrash)}}function Oe(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"p",9),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("innerHTML",t.erro,e.oJD)}}function Ye(i,n){1&i&&e._UZ(0,"span",10)}function Fe(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"p",3),e._uU(2,"Tem certeza que deseja excluir esse registro? Ele n\xe3o poder\xe1 ser recuperado."),e.qZA(),e.TgZ(3,"p"),e._uU(4,"O usu\xe1rio n\xe3o ter\xe1 acesso mais \xe0 plataforma."),e.qZA(),e.TgZ(5,"p",4),e._uU(6,"Obs.: Se esse usu\xe1rio estiver relacionado a um outro registro, n\xe3o poder\xe1 ser exclu\xeddo."),e.qZA(),e.YNc(7,Oe,2,1,"div",5),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.send())}),e.YNc(9,Ye,1,0,"span",7),e.TgZ(10,"span"),e._uU(11,"Excluir"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(7),e.Q6J("ngIf",t.erro),e.xp6(2),e.Q6J("ngIf",t.loading)}}let Ne=(()=>{class i{constructor(t,s,o,a){this.activatedRoute=t,this.modalService=s,this.usuarioService=o,this.crypto=a,this.faTrash=w.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new M.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var t=this.activatedRoute.params.subscribe(s=>{if(s.usuario_id)try{this.id=this.crypto.decrypt(s.usuario_id),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete usuario")},200)}catch{this.voltar()}else this.voltar()});this.subscription.push(t)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,u.n)(this.usuarioService.delete(this.id)).then(t=>{this.loading=!1,(0,u.n)(this.usuarioService.getList()),this.voltar()}).catch(t=>{this.loading=!1,this.erro=(0,G.b)(t)})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(d.gz),e.Y36(M.Z),e.Y36(f),e.Y36(c.w))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-delete"]],viewQuery:function(s,o){if(1&s&&(e.Gf(Ue,5),e.Gf(ye,5)),2&s){let a;e.iGM(a=e.CRH())&&(o.template=a.first),e.iGM(a=e.CRH())&&(o.icon=a.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],[1,"text-info"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger",3,"innerHTML"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(s,o){1&s&&(e.YNc(0,we,1,1,"ng-template",null,0,e.W1O),e.YNc(2,Fe,12,2,"ng-template",null,1,e.W1O))},dependencies:[b.O5,Y.BN]})}return i})();var Je=l(7280),De=l(9336);const Qe=["template"],Le=["icon"];function Re(i,n){if(1&i&&e._UZ(0,"fa-icon",2),2&i){const t=e.oxw();e.Q6J("icon",t.faKey)}}function je(i,n){1&i&&(e.TgZ(0,"div")(1,"p"),e._uU(2,"Tem certeza que deseja resetar sua senha?"),e.qZA(),e.TgZ(3,"p",7)(4,"small"),e._uU(5,"Voc\xea receber\xe1 um email com o link de altera\xe7\xe3o de senha."),e.qZA()(),e.TgZ(6,"p"),e._uU(7,"Ao resetar sua senha, voc\xea ser\xe1 automaticamente deslogado para realizar novo login."),e.qZA()())}function qe(i,n){1&i&&(e.TgZ(0,"div")(1,"p"),e._uU(2,"Tem certeza que deseja resetar a senha desse usu\xe1rio? "),e.qZA(),e.TgZ(3,"p",7)(4,"small"),e._uU(5,"Esse usu\xe1rio receber\xe1 um email com o link de altera\xe7\xe3o de senha."),e.qZA()()())}function Pe(i,n){if(1&i&&(e.TgZ(0,"p",7),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Oqu(t.erro)}}function Be(i,n){1&i&&e._UZ(0,"span",8)}function Ge(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.YNc(1,je,8,0,"div",3),e.YNc(2,qe,6,0,"div",3),e.YNc(3,Pe,2,1,"p",4),e.TgZ(4,"button",5),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.send())}),e.YNc(5,Be,1,0,"span",6),e.TgZ(6,"span"),e._uU(7," Resetar"),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",(null==t.userLogado?null:t.userLogado.email)==t.objeto.email),e.xp6(1),e.Q6J("ngIf",(null==t.userLogado?null:t.userLogado.email)!=t.objeto.email),e.xp6(1),e.Q6J("ngIf",t.erro),e.xp6(2),e.Q6J("ngIf",t.loading)}}function He(i,n){1&i&&(e.TgZ(0,"div")(1,"p",7),e._uU(2,"Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),e.qZA()())}function Ve(i,n){if(1&i&&(e.YNc(0,Ge,8,4,"div",3),e.YNc(1,He,3,0,"div",3)),2&i){const t=e.oxw();e.Q6J("ngIf",t.podeResetar),e.xp6(1),e.Q6J("ngIf",!t.podeResetar)}}let We=(()=>{class i{constructor(t,s,o,a,p,C,S){this.activatedRoute=t,this.usuarioService=s,this.accountService=o,this.crypto=a,this.toastr=p,this.modalService=C,this.alertService=S,this.faKey=w.DD4,this.objeto=new U,this.loading=!1,this.erro="",this.subscription=[],this.modal=new M.u,this.podeResetar=!0}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"500px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.title="Resetar Senha",this.modal.routerBack=["../../"];var t=this.activatedRoute.params.subscribe(s=>{s.usuario_id?(this.objeto.id=this.crypto.decrypt(s.usuario_id),(0,u.n)(this.usuarioService.get(this.objeto.id)).then(o=>{this.objeto=o;var a=this.accountService.accountValue;a?.perfilAcesso_Id==g.uU.Master&&o.perfilAcesso_Id==g.uU.Admin&&(this.toastr.info("Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora."),this.erro="Voc\xea n\xe3o tem permiss\xe3o para resetar a senha de uma conta administradora.",this.podeResetar=!1),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(o=>{this.voltar()})):this.voltar()});this.subscription.push(t)}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,(0,u.n)(this.usuarioService.resetPassword(this.objeto.id)).then(t=>{this.voltar(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),this.alertService.success("O usu\xe1rio deve verificar a caixa de e-mail para seguir as instru\xe7\xf5es."),this.objeto.email==this.userLogado?.email&&this.accountService.logout()}).catch().finally(()=>this.loading=!1)}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(d.gz),e.Y36(f),e.Y36(r.B),e.Y36(c.w),e.Y36(T._W),e.Y36(M.Z),e.Y36(De.c))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-reset-password"]],viewQuery:function(s,o){if(1&s&&(e.Gf(Qe,5),e.Gf(Le,5)),2&s){let a;e.iGM(a=e.CRH())&&(o.template=a.first),e.iGM(a=e.CRH())&&(o.icon=a.first)}},decls:5,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(s,o){1&s&&(e.YNc(0,Re,1,1,"ng-template",null,0,e.W1O),e.YNc(2,Ve,2,2,"ng-template",null,1,e.W1O),e._UZ(4,"router-outlet"))},dependencies:[b.O5,d.lC,Y.BN]})}return i})();const Ke=["template"];function $e(i,n){1&i&&(e.TgZ(0,"span",7),e._uU(1,"habilitar"),e.qZA())}function ze(i,n){1&i&&(e.TgZ(0,"span",7),e._uU(1,"desabilitar"),e.qZA())}function Xe(i,n){1&i&&(e.TgZ(0,"p",8),e._uU(1,"Voc\xea automaticamente ser\xe1 deslogado e n\xe3o poder\xe1 acessar o Planner."),e.qZA())}function ke(i,n){1&i&&(e.TgZ(0,"p",8),e._uU(1,"Ap\xf3s isso, o usu\xe1rio n\xe3o poder\xe1 acessar o Planner."),e.qZA())}function et(i,n){if(1&i&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Oqu(t.erro)}}function tt(i,n){1&i&&e._UZ(0,"span",9)}function it(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1,"Desabilitar"),e.qZA())}function st(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1,"Habilitar"),e.qZA())}function ot(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"p"),e._uU(2,"Tem certeza que deseja "),e.YNc(3,$e,2,0,"span",3),e.YNc(4,ze,2,0,"span",3),e._uU(5," esse registro? "),e.qZA(),e.YNc(6,Xe,2,0,"p",4),e.YNc(7,ke,2,0,"p",4),e.YNc(8,et,2,1,"p",4),e.TgZ(9,"button",5),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.send())}),e.YNc(10,tt,1,0,"span",6),e.YNc(11,it,2,0,"span",1),e.YNc(12,st,2,0,"span",1),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("ngIf",t.habilitar),e.xp6(1),e.Q6J("ngIf",!t.habilitar),e.xp6(2),e.Q6J("ngIf",t.isUser&&t.habilitar&&t.objeto.email==(null==t.account?null:t.account.email)),e.xp6(1),e.Q6J("ngIf",t.isUser&&t.habilitar&&t.objeto.email!=(null==t.account?null:t.account.email)),e.xp6(1),e.Q6J("ngIf",t.erro),e.xp6(2),e.Q6J("ngIf",t.loading),e.xp6(1),e.Q6J("ngIf",!t.habilitar),e.xp6(1),e.Q6J("ngIf",t.habilitar)}}function at(i,n){if(1&i&&(e.TgZ(0,"div",10)(1,"p",8),e._uU(2),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(2),e.Oqu(t.erro)}}function nt(i,n){if(1&i&&(e.YNc(0,ot,13,8,"div",1),e.YNc(1,at,3,1,"div",2)),2&i){const t=e.oxw();e.Q6J("ngIf",t.podeAtivar),e.xp6(1),e.Q6J("ngIf",!t.podeAtivar)}}let W=(()=>{class i{constructor(t,s,o,a,p,C){this.usuarioService=t,this.modalService=s,this.activatedRoute=o,this.crypto=a,this.accountService=p,this.toastr=C,this.objeto=new U,this.loading=!1,this.erro="",this.subscription=[],this.modal=new M.u,this.podeAtivar=!0,this.habilitar=!1,this.isUser=!1,this.account=this.accountService.accountValue}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t=this.activatedRoute.params.subscribe(s=>{s.usuario_id?(this.objeto.id=this.crypto.decrypt(s.usuario_id),this.isUser=this.account?.id==this.objeto.id,this.modal.routerBack=["../../"],(0,u.n)(this.usuarioService.get(this.objeto.id)).then(o=>{this.objeto=o,this.habilitar=!(null==this.objeto.dataDesativado||null==this.objeto.dataDesativado),this.objeto.ativo=!this.habilitar;var a=this.accountService.accountValue;if(this.modal.title=this.habilitar?"Habilitar Usu\xe1rio":"Desabilitar Usu\xe1rio",a?.perfilAcesso_Id==g.uU.Master&&o.perfilAcesso_Id==g.uU.Admin){this.podeAtivar=!1;var p=this.habilitar?"habilitar":"desabilitar";this.toastr.info(`Voc\xea n\xe3o tem permiss\xe3o para ${p} uma conta administradora.`),this.erro=`Voc\xea n\xe3o tem permiss\xe3o para ${p} uma conta administradora.`}setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"usuario")},200)}).catch(o=>{this.voltar()})):this.voltar()});this.subscription.push(t)}voltar(){this.modalService.removeModal(this.modal)}send(){var t=this;this.loading=!0,this.erro="",(0,u.n)(this.usuarioService.deactivated(this.objeto.id,this.habilitar)).then(function(){var s=(0,y.Z)(function*(o){!t.habilitar&&t.isUser&&t.accountService.logout(),yield(0,u.n)(t.usuarioService.getList()),t.voltar()});return function(o){return s.apply(this,arguments)}}()).finally(()=>this.loading=!1)}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(f),e.Y36(M.Z),e.Y36(d.gz),e.Y36(c.w),e.Y36(r.B),e.Y36(T._W))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-deactivated"]],viewQuery:function(s,o){if(1&s&&e.Gf(Ke,5),2&s){let a;e.iGM(a=e.CRH())&&(o.template=a.first)}},decls:3,vars:0,consts:[["template",""],[4,"ngIf"],["class","mb-2",4,"ngIf"],["class","font-weight-bold",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"font-weight-bold"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"mb-2"]],template:function(s,o){1&s&&(e.YNc(0,nt,2,2,"ng-template",null,0,e.W1O),e._UZ(2,"router-outlet"))},dependencies:[b.O5,d.lC]})}return i})();var rt=l(9742);const lt=[{path:"",component:te,children:[{path:"cadastrar",component:V,data:{modalOrder:1},title:"Zentech - Cadastrar usu\xe1rio"},{path:"editar/:usuario_id",component:V,data:{modalOrder:1},title:"Zentech - Editar usu\xe1rio",canActivate:[E]},{path:"excluir/:usuario_id",component:Ne,data:{modalOrder:1,roles:[g.uU.Admin]},title:"Zentech - Excluir usu\xe1rio",canActivate:[E,rt.p]},{path:"reset-password/:usuario_id",component:We,data:{modalOrder:1},title:"Zentech - Resetar senha",canActivate:[E]},{path:"habilitar/:usuario_id",component:W,data:{modalOrder:1},title:"Zentech - Habilitar usu\xe1rio",canActivate:[E]},{path:"desabilitar/:usuario_id",component:W,data:{modalOrder:1},title:"Zentech - Desabilitar usu\xe1rio",canActivate:[E]},Je.D]}];let ct=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(lt),d.Bz]})}return i})();var pt=l(9227);let dt=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[b.ez,ct,pt.m,Y.uH,x.u5,H.kW]})}return i})()},9901:(K,F,l)=>{l.d(F,{j:()=>Q});var b=l(5861),N=l(708),g=l(490),e=l(5038),r=l(9291),J=l(6434),I=l(4939),D=l(6814),O=l(6223),m=l(5219),A=l(2352);function U(_,T){if(1&_&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&_){const c=r.oxw(3);r.xp6(1),r.Oqu(null==c.empresaSelected.empresa?null:c.empresaSelected.empresa.nome)}}function B(_,T){if(1&_&&r.YNc(0,U,2,1,"span",7),2&_){const c=r.oxw(2);r.Q6J("ngIf",c.empresaSelected.id)}}function R(_,T){if(1&_&&(r.TgZ(0,"p"),r._uU(1),r.qZA(),r.TgZ(2,"p"),r._uU(3),r.qZA()),2&_){const c=T.$implicit;r.xp6(1),r.Oqu(c.nome),r.xp6(2),r.Oqu(c.logo)}}function j(_,T){if(1&_){const c=r.EpF();r.TgZ(0,"div",1)(1,"label",2),r._uU(2,"Selecione a Empresa para carregar dados"),r.qZA(),r.TgZ(3,"p-dropdown",3,4),r.NdJ("ngModelChange",function(f){r.CHM(c);const d=r.oxw();return r.KtG(d.empresaChange(f))})("ngModelChange",function(f){r.CHM(c);const d=r.oxw();return r.KtG(d.empresaSelected.id=f)}),r.YNc(5,B,1,1,"ng-template",5),r.YNc(6,R,4,2,"ng-template",6),r.qZA()()}if(2&_){const c=r.oxw();r.xp6(3),r.Q6J("options",c.empresas)("ngModel",c.empresaSelected.id)("filter",!0)("showClear",!1)("required",!0)}}let Q=(()=>{class _{constructor(c,h,f){var d=this;this.empresaService=c,this.accountService=h,this.colors=f,this.empresaSelected=new e.I,this.empresas=[],this.loading=!1,this.Role=g.uU,this.subscription=[];var E=this.accountService.accountSubject.subscribe(function(){var u=(0,b.Z)(function*(Z){d.account=Z,Z&&(1==Z.perfilAcesso_Id&&0==d.empresaService.list.value.length&&(yield(0,N.n)(d.empresaService.getList())),(1!=Z.perfilAcesso_Id||!d.empresaService.empresaSelected.value.empresa)&&d.empresaService.empresaSelected.next({id:Z.empresa_Id,empresa:Z.empresa}))});return function(Z){return u.apply(this,arguments)}}());this.subscription.push(E);var y=this.empresaService.empresaSelected.subscribe(u=>{this.empresaSelected=u,u&&this.setColorsJquery()});this.subscription.push(y);var w=this.empresaService.list.subscribe(u=>{this.empresas=u});this.subscription.push(w)}ngOnDestroy(){this.subscription.forEach(c=>c.unsubscribe())}empresaChange(c){var h=this;return(0,b.Z)(function*(){if(h.accountService.accountValue&&1==h.accountService.accountValue?.perfilAcesso_Id&&c){0==h.empresas.length&&(yield(0,N.n)(h.empresaService.getList()));var f=h.empresas.find(d=>d.id==c);h.empresaService.empresaSelected.next({empresa:f,id:c})}})()}setColorsJquery(){this.colors.setColorsJquery(this.empresaSelected.empresa)}static#e=this.\u0275fac=function(h){return new(h||_)(r.Y36(e.P),r.Y36(J.B),r.Y36(I.w))};static#t=this.\u0275cmp=r.Xpm({type:_,selectors:[["app-empresa-selected"]],decls:1,vars:1,consts:[["class","form-group ms-2",4,"ngIf"],[1,"form-group","ms-2"],["for","empresa_Id"],["name","empresa_Id","id","empresa_Id","optionValue","id","filterBy","nome","styleClass","form-control","placeholder","Selecione uma empresa",3,"options","ngModel","filter","showClear","required","ngModelChange"],["empresa_Id","ngModel"],["pTemplate","selectedItem"],["pTemplate","item"],[4,"ngIf"]],template:function(h,f){1&h&&r.YNc(0,j,7,5,"div",0),2&h&&r.Q6J("ngIf",f.account&&1==(null==f.account?null:f.account.perfilAcesso_Id))},dependencies:[D.O5,O.JJ,O.Q7,O.On,m.jx,A.Lt]})}return _})()}}]);