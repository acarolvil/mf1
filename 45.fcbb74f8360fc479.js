"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[45],{9742:(P,g,e)=>{e.d(g,{p:()=>p});var a=e(9291),f=e(6434),E=e(132),L=e(2425);let p=(()=>{class r{constructor(l,c,t){this.accountService=l,this.router=c,this.toastr=t}canActivate(l,c){let t=this.accountService.accountValue;return t?!(l.data.roles&&!l.data.roles.includes(t?.role)&&(this.toastr.error("Acesso n\xe3o autorizado."),this.router.navigate([""]),1)):(this.toastr.error("Acesso n\xe3o autorizado. <br> Fa\xe7a login."),this.router.navigate(["account","login"],{queryParams:{returnUrl:c.url}}),!1)}static#t=this.\u0275fac=function(c){return new(c||r)(a.LFG(f.B),a.LFG(E.F0),a.LFG(L._W))};static#e=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},9045:(P,g,e)=>{e.r(g),e.d(g,{RepresentanteModule:()=>j});var a=e(6814),f=e(6223),E=e(5597),L=e(2352),p=e(132),r=e(5861),T=e(708),l=e(590),c=e(2898),t=e(9291),d=e(8787),U=e(3416),n=e(6434),m=e(5038),h=e(6599),A=e(9901);function Z(s,x){if(1&s&&(t.TgZ(0,"p",13)(1,"small"),t._uU(2,"Representantes cadastrados em "),t.TgZ(3,"strong"),t._uU(4),t.qZA()()()),2&s){const u=t.oxw();t.xp6(4),t.Oqu(u.empresaSelected.nome||"Empresa X")}}function C(s,x){1&s&&t._UZ(0,"span",14)}const R=function(){return["cadastrar"]};function S(s,x){1&s&&(t.TgZ(0,"div",15)(1,"a",16)(2,"span",17),t._uU(3," Cadastrar Representante"),t.qZA()()()),2&s&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,R)))}let I=(()=>{class s{constructor(u,i,o,O){var D=this;this.table=u,this.representanteService=i,this.accountService=o,this.empresaService=O,this.faUsers=l.FVb,this.list=[],this.tableLinks=[],this.columns=c.T,this.subscription=[],this.loading=!1;var z=this.representanteService.list.subscribe(v=>this.list=Object.assign([],v));this.subscription.push(z);var J=this.representanteService.loading.subscribe(v=>this.loading=v);this.subscription.push(J);var Y=this.empresaService.empresaSelected.subscribe(function(){var v=(0,r.Z)(function*(b){D.empresaSelected=b.empresa,b&&b.id&&(yield(0,T.n)(D.representanteService.getList(!0)))});return function(b){return v.apply(this,arguments)}}());this.subscription.push(Y);var G=this.table.selected.subscribe(v=>{v&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}],1==this.accountService.accountValue?.perfilAcesso_Id&&this.tableLinks.push({label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}),this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(G)}ngOnDestroy(){this.subscription.forEach(u=>u.unsubscribe())}getList(){(0,T.n)(this.representanteService.getList(!0))}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(d.i),t.Y36(U.Z),t.Y36(n.B),t.Y36(m.P))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-list"]],decls:18,vars:14,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],["class","page__header-subtitle",4,"ngIf"],[1,"ms-auto","mt-auto",2,"margin-bottom","7px"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"page__header-subtitle"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-5","col-lg-5","col-md-5","col-sm-7","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(i,o){if(1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Representantes"),t.qZA(),t.YNc(7,Z,5,1,"p",6),t.qZA(),t.TgZ(8,"div",7)(9,"button",8),t.NdJ("click",function(){return o.getList()}),t.YNc(10,C,1,0,"span",9),t._uU(11,"Atualizar"),t.qZA()(),t._UZ(12,"app-empresa-selected"),t.qZA(),t.TgZ(13,"div",10),t.YNc(14,S,4,2,"ng-template",null,11,t.W1O),t._UZ(16,"app-list-shared",12),t.qZA()(),t._UZ(17,"router-outlet")),2&i){const O=t.MAs(15);t.xp6(3),t.Q6J("icon",o.faUsers),t.xp6(4),t.Q6J("ngIf",o.empresaSelected),t.xp6(2),t.Q6J("disabled",o.loading),t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(6),t.Q6J("list",o.list)("topActions",O)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",o.columns)("tableLinks",o.tableLinks)("selectable",!0)}},dependencies:[a.O5,p.lC,p.rH,E.BN,h.o,A.j]})}return s})();var M=e(2951),y=e(8410),B=e(7280),F=e(9742),W=e(490);const K=[{path:"",component:I,title:"Zentech - Representantes",children:[{path:"cadastrar",component:M.U,data:{modalOrder:1},title:"Zentech - Cadastrar Representante"},{path:"editar/:representante_id",component:M.U,data:{modalOrder:1},title:"Zentech - Editar Representante"},{path:"excluir/:representante_id",component:y.T,data:{modalOrder:1,roles:[W.uU.Admin]},canActivate:[F.p],title:"Zentech - Excluir Representante"},B.D]}];let _=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(K),p.Bz]})}return s})();var N=e(9227);let j=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[a.ez,_,f.u5,E.uH,N.m,L.kW]})}return s})()},3416:(P,g,e)=>{e.d(g,{Z:()=>t});var a=e(9862),f=e(5619),E=e(9397),L=e(2096),p=e(553),r=e(9291),T=e(8787),l=e(2425),c=e(5038);let t=(()=>{class d{constructor(n,m,h,A){this.table=n,this.http=m,this.toastr=h,this.empresaService=A,this.url=p.N.url,this.list=new f.X([]),this.loading=new f.X(!1)}getList(n=!1){return this.loading.next(n),this.table.loading.next(!0),this.http.get(`${this.url}/representante/list/${this.empresaService.empresaSelected.value.id}`).pipe((0,E.b)({next:h=>(this.list.next(Object.assign([],h)),this.loading.next(!1),(0,L.of)(h)),error:h=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de representante."),finalize:()=>this.loading.next(!1)}))}get(n){return this.http.get(`${this.url}/representante/${n}`,{headers:new a.WM({loading:"true"})})}create(n){return console.log(this.empresaService.empresaSelected.value),n.empresa_Id=this.empresaService.empresaSelected.value.id,this.http.post(`${this.url}/representante`,n)}edit(n){return this.http.put(`${this.url}/representante`,n)}delete(n){return this.http.delete(`${this.url}/representante/${n}`)}static#t=this.\u0275fac=function(m){return new(m||d)(r.LFG(T.i),r.LFG(a.eN),r.LFG(l._W),r.LFG(c.P))};static#e=this.\u0275prov=r.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);