"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[953],{6953:($,d,i)=>{i.r(d),i.d(d,{BancoModule:()=>G});var l=i(132),x=i(2832),m=i(708),h=i(590),p=i(674),T=i(1005),t=i(9291),y=i(8787),u=i(4809),Z=i(6599);const C=function(){return["cadastrar"]};function L(e,r){1&e&&(t.TgZ(0,"div",10)(1,"a",11)(2,"span",12),t._uU(3," Cadastrar Banco"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,C)))}let A=(()=>{class e{constructor(s,n,o){this.table=s,this.bancoService=n,this.isMobile=o,this.faFilePdf=h.gSj,this.maskType=x.O,this.list=[],this.tableLinks=[],this.columns=T.sB,this.subscription=[],this.screen=p.I.lg;var a=this.bancoService.list.subscribe(c=>{this.list=Object.assign([],c)});this.subscription.push(a);var W=this.isMobile.value.subscribe(c=>this.screen=c);this.subscription.push(W),(0,m.n)(this.bancoService.getList());var P=this.table.selected.subscribe(c=>{c&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}],this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(P)}ngOnDestroy(){this.subscription.forEach(s=>s.unsubscribe())}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(y.i),t.Y36(u.r),t.Y36(p.h))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:13,vars:10,consts:[[1,"page"],[1,"page__header"],[1,"title-icon","align-items-center"],["xmlns","http://www.w3.org/2000/svg","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],["topActions",""],[3,"list","topActions","filterLink","filterTable","paginator","sortTable","menuTable","columns","tableLinks","selectable"],[1,"col-xl-3","col-lg-3","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(n,o){if(1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"path",4),t.qZA()(),t.kcU(),t.TgZ(5,"div",5)(6,"h3",6),t._uU(7,"Bancos"),t.qZA()()(),t.TgZ(8,"div",7),t.YNc(9,L,4,2,"ng-template",null,8,t.W1O),t._UZ(11,"app-list-shared",9),t.qZA()(),t._UZ(12,"router-outlet")),2&n){const a=t.MAs(10);t.xp6(11),t.Q6J("list",o.list)("topActions",a)("filterLink",!1)("filterTable",!0)("paginator",!0)("sortTable",!0)("menuTable",!0)("columns",o.columns)("tableLinks",o.tableLinks)("selectable",!0)}},dependencies:[l.lC,l.rH,Z.o]})}return e})();var v=i(2996),f=i(2855),M=i(342),U=i(2667),g=i(6814),b=i(5597);const B=["template"],H=["icon"];function O(e,r){if(1&e&&t._UZ(0,"fa-icon",2),2&e){const s=t.oxw();t.Q6J("icon",s.faTrash)}}function S(e,r){if(1&e&&(t.TgZ(0,"div",7)(1,"p",8),t._uU(2),t.qZA()()),2&e){const s=t.oxw(2);t.xp6(2),t.Oqu(s.erro)}}function D(e,r){1&e&&t._UZ(0,"span",9)}function Y(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"div")(1,"p",3),t._uU(2,"Tem certeza que deseja excluir esse registro? "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Ele n\xe3o poder\xe1 ser recuperado."),t.qZA(),t.YNc(5,S,3,1,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.send())}),t.YNc(7,D,1,0,"span",6),t.TgZ(8,"span"),t._uU(9,"Excluir"),t.qZA()()()}if(2&e){const s=t.oxw();t.xp6(5),t.Q6J("ngIf",s.erro),t.xp6(2),t.Q6J("ngIf",s.loading)}}let E=(()=>{class e{constructor(s,n,o,a){this.activatedRoute=s,this.modalService=n,this.bancoService=o,this.crypto=a,this.faTrash=h.$aW,this.id=0,this.erro="",this.loading=!1,this.subscription=[],this.modal=new f.u}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"400px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute},this.modal.routerBack=["../../"],this.modal.title="Excluir registro";var s=this.activatedRoute.params.subscribe(n=>{if(n.banco_id)try{this.id=this.crypto.decrypt(n.banco_id),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"delete banco")},200)}catch{this.voltar()}else this.voltar()});this.subscription.push(s)}ngOnDestroy(){this.subscription.forEach(s=>s.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}send(){this.loading=!0,this.erro="",(0,m.n)(this.bancoService.delete(this.id)).then(s=>{this.loading=!1,s.sucesso?((0,m.n)(this.bancoService.getList()),this.voltar()):this.erro=s.mensagem}).catch(s=>{this.loading=!1,this.erro=(0,M.b)(s)})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(f.Z),t.Y36(u.r),t.Y36(U.w))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete"]],viewQuery:function(n,o){if(1&n&&(t.Gf(B,5),t.Gf(H,5)),2&n){let a;t.iGM(a=t.CRH())&&(o.template=a.first),t.iGM(a=t.CRH())&&(o.icon=a.first)}},decls:4,vars:0,consts:[["icon",""],["template",""],[3,"icon"],[1,"mt-2"],["class","m-0  mt-1",4,"ngIf"],[1,"btn","btn-grey","ms-auto","d-flex","mt-2",3,"click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"m-0","mt-1"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(n,o){1&n&&(t.YNc(0,O,1,1,"ng-template",null,0,t.W1O),t.YNc(2,Y,10,2,"ng-template",null,1,t.W1O))},dependencies:[g.O5,b.BN]})}return e})();var V=i(7280);const F=[{path:"",component:A,children:[{path:"cadastrar",component:v.U,data:{modalOrder:1}},{path:"editar/:banco_id",component:v.U,data:{modalOrder:1}},{path:"excluir/:banco_id",component:E,data:{modalOrder:1}},V.D]}];let N=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(F),l.Bz]})}return e})();var z=i(2352),J=i(6223),R=i(8839),I=i(6208),Q=i(4685),j=i(1532);let G=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[g.ez,N,b.uH,z.kW,J.u5,R.yI.forChild(),I.m,Q.U$,j._8]})}return e})()}}]);