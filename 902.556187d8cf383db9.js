"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[902],{9296:(O,T,s)=>{s.d(T,{F:()=>b,XM:()=>g});var p=s(5219),l=s(2832);class b{constructor(){this.id=0,this.nome="",this.codigoRegistro="",this.cep="",this.cidade="",this.estado="",this.logradouro="",this.numero="",this.codigoSwift="",this.conta="",this.complemento="",this.bairro="",this.banco_Id=void 0,this.pais_Id=void 0,this.representante_Id=void 0,this.empresa_Id=0}}var g=[{field:"nome",header:"Nome",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:p.a6.CONTAINS},{field:"codigoRegistro",header:"C\xf3digo de Registro",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:p.a6.EQUALS},{field:"codigoSwift",header:"C\xf3digo Swift",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:p.a6.EQUALS},{field:"nomeBanco",header:"Banco",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:p.a6.CONTAINS},{field:"conta",header:"Conta",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:p.a6.EQUALS},{field:"nomePais",header:"Pa\xeds",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:p.a6.CONTAINS},{field:"representante",header:"Representante",maskType:l.O.undefined,filterType:l.vA.text,filterDisplay:l.w2.menu,showAddButton:!1,showMatchMode:!0,showOperator:!1,filterMatchMode:p.a6.CONTAINS}]},8902:(O,T,s)=>{s.d(T,{U:()=>he});var p=s(5861),l=s(708),E=s(342),b=s(9296),g=s(2855),a=s(1005),v=s(6687),M=s(9411),h=s(590),u=s(5556),e=s(9291),d=s(132),m=s(2667),Z=s(2425),I=s(7502),U=s(8487),D=s(4809),S=s(7397),w=s(8839),y=s(3416),F=s(6814),C=s(6223),R=s(5597),B=s(5219),N=s(2352);const j=["template"],J=["icon"],L=["cep"];function K(n,_){1&n&&(e.TgZ(0,"span",3),e.O4$(),e.TgZ(1,"svg",4),e._UZ(2,"path",5),e.qZA()())}function q(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function Q(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,q,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(10);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function W(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function Y(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,W,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(16);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function H(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function G(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,H,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(22);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function V(n,_){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(2),e.AsE("",t.representanteSelected.codigo," - ",t.representanteSelected.nome,"")}}function $(n,_){if(1&n&&e.YNc(0,V,3,2,"div",15),2&n){const t=e.oxw(2);e.Q6J("ngIf",t.representanteSelected)}}function z(n,_){if(1&n){const t=e.EpF();e.TgZ(0,"div",69)(1,"div",70)(2,"p",71),e._uU(3),e.qZA(),e.TgZ(4,"p",71)(5,"strong"),e._uU(6,"C\xf3digo:"),e.qZA(),e._uU(7),e.qZA()(),e.TgZ(8,"div",72)(9,"a",73),e.NdJ("click",function(){const r=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.editar(r,"representante"))}),e._UZ(10,"fa-icon",74),e.qZA(),e.TgZ(11,"a",75),e.NdJ("click",function(){const r=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.excluir(r.id,"representante"))}),e._UZ(12,"fa-icon",74),e.qZA()()()}if(2&n){const t=_.$implicit,o=e.oxw(2);e.xp6(3),e.Oqu(t.nome),e.xp6(4),e.hij(" ",t.codigo,""),e.xp6(3),e.Q6J("icon",o.faEdit),e.xp6(2),e.Q6J("icon",o.faTrash)}}const X=function(){return["./representante"]};function k(n,_){1&n&&(e.TgZ(0,"div",76),e._uU(1," N\xe3o encontrou? Clique para "),e.TgZ(2,"a",77),e._uU(3,"adicionar"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,X)))}function ee(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function te(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ee,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(30);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function oe(n,_){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&n){const t=_.$implicit;e.xp6(2),e.Oqu(t.nome),e.xp6(2),e.Oqu(t.cidade)}}const ne=function(){return["./banco"]};function ie(n,_){1&n&&(e.TgZ(0,"div",76),e._uU(1," N\xe3o encontrou? Clique para "),e.TgZ(2,"a",77),e._uU(3,"adicionar"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,ne)))}function re(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function se(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,re,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(41);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function ae(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Este campo \xe9 obrigat\xf3rio."),e.qZA())}function le(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ae,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(51);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function ce(n,_){if(1&n&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Oqu(t.erro)}}function _e(n,_){1&n&&(e.TgZ(0,"p",12),e._uU(1,"Preencha todos os campos obrigat\xf3rios (*) corretamente para salvar."),e.qZA())}function de(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ce,2,1,"p",68),e.YNc(2,_e,2,0,"p",68),e.qZA()),2&n){e.oxw();const t=e.MAs(1),o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.erro),e.xp6(1),e.Q6J("ngIf",t.invalid&&!o.erro)}}function pe(n,_){1&n&&e._UZ(0,"span",78)}const ge=function(){return["codigo","nome"]},me=function(){return["nome","cidade"]};function ue(n,_){if(1&n){const t=e.EpF();e.TgZ(0,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.MAs(1),r=e.oxw();return e.KtG(r.send(i))}),e.TgZ(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),e._uU(6,"Nome:"),e.TgZ(7,"span",12),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"input",13,14),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.nome=i)})("change",function(){e.CHM(t);const i=e.MAs(10),r=e.oxw();return e.KtG(r.objeto.nome=i.value.trim())}),e.qZA(),e.YNc(11,Q,2,1,"div",15),e.qZA(),e.TgZ(12,"div",16)(13,"label",17),e._uU(14,"C\xf3digo de Registro: "),e.qZA(),e.TgZ(15,"input",18,19),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.codigoRegistro=i)}),e.qZA(),e.YNc(17,Y,2,1,"div",15),e.qZA(),e.TgZ(18,"div",20)(19,"label",21),e._uU(20,"Pa\xeds: "),e.qZA(),e.TgZ(21,"p-dropdown",22,23),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.pais_Id=i)})("onChange",function(){e.CHM(t);const i=e.oxw();return i.paisChange(),e.KtG(i.limpaEndereco())}),e.qZA(),e.YNc(23,G,2,1,"div",15),e.qZA(),e.TgZ(24,"div",24)(25,"label",25),e._uU(26,"Representante: "),e.TgZ(27,"span",12),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"p-dropdown",26,27),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.representante_Id=i)})("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.representanteChanged(i))}),e.YNc(31,$,1,1,"ng-template",28),e.YNc(32,z,13,4,"ng-template",29),e.YNc(33,k,4,2,"ng-template",30),e.qZA(),e.YNc(34,te,2,1,"div",15),e.qZA(),e.TgZ(35,"div",31)(36,"label",32),e._uU(37,"Banco: "),e.TgZ(38,"span",12),e._uU(39,"*"),e.qZA()(),e.TgZ(40,"p-dropdown",33,34),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.banco_Id=i)})("ngModelChange",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.preencheBanco())}),e.YNc(42,oe,5,2,"ng-template",29),e.YNc(43,ie,4,2,"ng-template",30),e.qZA(),e.YNc(44,se,2,1,"div",15),e.qZA(),e.TgZ(45,"div",31)(46,"label",35),e._uU(47,"Conta: "),e.TgZ(48,"span",12),e._uU(49,"*"),e.qZA()(),e.TgZ(50,"input",36,37),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.conta=i)})("change",function(){e.CHM(t);const i=e.MAs(51),r=e.oxw();return e.KtG(r.objeto.conta=i.value.trim())}),e.qZA(),e.YNc(52,le,2,1,"div",15),e.qZA()(),e.TgZ(53,"div",9)(54,"div",38)(55,"label",39),e._uU(56,"Endere\xe7o: "),e.qZA(),e.TgZ(57,"input",40,41),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.logradouro=i)})("change",function(){e.CHM(t);const i=e.MAs(58),r=e.oxw();return e.KtG(r.objeto.logradouro=i.value.trim())}),e.qZA()(),e.TgZ(59,"div",42)(60,"label",43),e._uU(61,"Cidade: "),e.qZA(),e.TgZ(62,"input",44,45),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.cidade=i)})("change",function(){e.CHM(t);const i=e.MAs(63),r=e.oxw();return e.KtG(r.objeto.cidade=i.value.trim())}),e.qZA()(),e.TgZ(64,"div",46)(65,"label",47),e._uU(66,"UF: "),e.qZA(),e.TgZ(67,"input",48,49),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.objeto.estado=i)})("change",function(){e.CHM(t);const i=e.MAs(68),r=e.oxw();return e.KtG(r.objeto.estado=i.value.trim())}),e.qZA()()(),e.TgZ(69,"div",9)(70,"div",50),e._UZ(71,"hr",51),e.qZA()(),e.TgZ(72,"div",9)(73,"div",52)(74,"div",53)(75,"div",9)(76,"div")(77,"h6"),e._uU(78,"Dados do Banco "),e.qZA(),e.TgZ(79,"p",54)(80,"small",12),e._uU(81,"(Selecione um banco para carregar os dados)"),e.qZA()()()(),e.TgZ(82,"div",9)(83,"div",55)(84,"label",11),e._uU(85,"Nome: "),e.qZA(),e._UZ(86,"input",56),e.qZA(),e.TgZ(87,"div",57)(88,"label",58),e._uU(89,"C\xf3digo Swift: "),e.qZA(),e._UZ(90,"input",59),e.qZA(),e.TgZ(91,"div",42)(92,"label",60),e._uU(93,"Pa\xeds:"),e.qZA(),e._UZ(94,"input",61),e.qZA()(),e.TgZ(95,"div",9)(96,"div",38)(97,"label",39),e._uU(98,"Endere\xe7o: "),e.qZA(),e._UZ(99,"input",62),e.qZA(),e.TgZ(100,"div",42)(101,"label",43),e._uU(102,"Cidade: "),e.qZA(),e._UZ(103,"input",63),e.qZA(),e.TgZ(104,"div",46)(105,"label",47),e._uU(106,"UF: "),e.qZA(),e._UZ(107,"input",64),e.qZA()()()()()(),e.TgZ(108,"div",65),e.YNc(109,de,3,2,"div",15),e.TgZ(110,"button",66),e.YNc(111,pe,1,0,"span",67),e.TgZ(112,"span"),e._uU(113,"Salvar"),e.qZA()()()()}if(2&n){const t=e.MAs(1),o=e.MAs(10),i=e.MAs(16),r=e.MAs(22),x=e.MAs(30),A=e.MAs(41),P=e.MAs(51),c=e.oxw();e.xp6(9),e.Q6J("ngModel",c.objeto.nome),e.xp6(2),e.Q6J("ngIf",o.touched&&o.errors),e.xp6(4),e.Q6J("ngModel",c.objeto.codigoRegistro),e.xp6(2),e.Q6J("ngIf",i.touched&&i.errors),e.xp6(4),e.Q6J("styleClass","form-control "+(c.loadingPaises?"form-control-loading":""))("options",c.paises)("ngModel",c.objeto.pais_Id)("placeholder","Selecione")("disabled",c.loadingPaises)("filter",!0)("showClear",!0),e.xp6(2),e.Q6J("ngIf",r.touched&&r.errors),e.xp6(6),e.Q6J("styleClass","form-control "+(c.loadingRepresentantes?"form-control-loading":""))("options",c.representantes)("ngModel",c.objeto.representante_Id)("placeholder","Selecione")("disabled",c.loadingRepresentantes)("filter",!0)("filterFields",e.DdM(45,ge))("showClear",!0)("required",!0),e.xp6(5),e.Q6J("ngIf",x.touched&&x.errors),e.xp6(6),e.Q6J("options",c.bancos)("ngModel",c.objeto.banco_Id)("styleClass","form-control "+(c.loadingBanco?"form-control-loading":""))("showClear",!0)("filter",!0)("filterFields",e.DdM(46,me))("required",!0)("showClear",!0),e.xp6(4),e.Q6J("ngIf",A.touched&&A.errors),e.xp6(6),e.Q6J("ngModel",c.objeto.conta),e.xp6(2),e.Q6J("ngIf",P.touched&&P.errors),e.xp6(5),e.Q6J("ngModel",c.objeto.logradouro),e.xp6(5),e.Q6J("ngModel",c.objeto.cidade),e.xp6(5),e.Q6J("ngModel",c.objeto.estado),e.xp6(19),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.nome),e.xp6(4),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.codigoSwift),e.xp6(4),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.pais_Id),e.xp6(5),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.logradouro),e.xp6(4),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.cidade),e.xp6(4),e.Q6J("value",null==c.bancoSelected?null:c.bancoSelected.estado),e.xp6(2),e.Q6J("ngIf",c.erro||t.invalid),e.xp6(1),e.Q6J("disabled",t.invalid||c.loading),e.xp6(1),e.Q6J("ngIf",c.loading)}}let he=(()=>{class n{constructor(t,o,i,r,x,A,P,c,fe,ve,Me){this.activatedRoute=t,this.modalService=o,this.crypto=i,this.toastr=r,this.beneficiarioService=x,this.cepService=A,this.bancoService=P,this.paisesService=c,this.mask=fe,this.representanteService=ve,this.router=Me,this.faEdit=h.Xcf,this.faTrash=h.$aW,this.objeto=new b.F,this.erro="",this.loading=!1,this.subscription=[],this.isEditPage=!0,this.modal=new g.u,this.loadingCNPJ=!1,this.loadingBanco=!0,this.loadingPaises=!0,this.paises=[],this.loadingRepresentantes=!0,this.representantes=[],this.cepPreenchido=!1,this.executaCEP=!0,this.loadingCep=!1,(0,l.n)(this.bancoService.getList()).then(f=>{this.loadingBanco=!1,this.bancos=f});var Ce=this.bancoService.list.subscribe(f=>this.bancos=f);this.subscription.push(Ce),(0,l.n)(this.representanteService.getList()).then(f=>{this.loadingRepresentantes=!1,this.representantes=f});var xe=this.representanteService.list.subscribe(f=>this.representantes=f);this.subscription.push(xe),(0,l.n)(this.paisesService.getList()).then(f=>{this.loadingPaises=!1,this.paises=f})}ngAfterViewInit(){this.modal.id=0,this.modal.template=this.template,this.modal.icon=this.icon,this.modal.style={"max-width":"900px",overflow:"visible"},this.modal.activatedRoute=this.activatedRoute,this.modal.routerBackOptions={relativeTo:this.activatedRoute};var t=this.activatedRoute.params.subscribe(o=>{o.beneficiario_id?(this.objeto.id=this.crypto.decrypt(o.beneficiario_id),this.modal.title="Editar Benefici\xe1rio",this.modal.routerBack=["../../"],this.isEditPage=!0,(0,l.n)(this.beneficiarioService.get(this.objeto.id)).then(i=>{this.objeto=i,this.representanteChanged(i.representante_Id),this.preencheBanco(),setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"beneficiario")},200)}).catch(i=>{this.voltar()})):(this.modal.title="Cadastrar Benefici\xe1rio",this.modal.routerBack=["../"],this.isEditPage=!1,this.objeto.pais_Id=30,setTimeout(()=>{this.modal=this.modalService.addModal(this.modal,"beneficiario")},200))});this.subscription.push(t)}ngOnDestroy(){this.subscription.forEach(t=>t.unsubscribe())}voltar(){this.modalService.removeModal(this.modal)}preencheBanco(){var t=this;return(0,p.Z)(function*(){t.loadingBanco=!0,t.objeto.banco_Id?yield(0,l.n)(t.bancoService.get(t.objeto.banco_Id)).then(o=>{t.bancoSelected=o,t.bancoSelected.pais_Id=t.paises.find(i=>i.id==o.pais_Id)?.nome??""}):t.bancoSelected=new a.th,t.loadingBanco=!1})()}paisChange(){this.executaCEP=30==this.objeto.pais_Id,this.cepPreenchido=!1}limpaEndereco(){this.objeto.cep="",this.objeto.bairro="",this.objeto.cidade="",this.objeto.numero="",this.objeto.complemento="",this.objeto.logradouro=""}buscaCEP(t){if(1==this.executaCEP&&this.cep){if(this.loadingCep=!0,t.control.setErrors(null),this.cepPreenchido=!1,!this.validaCEP(t))return this.toastr.error("CEP inv\xe1lido."),void t.control.setErrors({invalid:!0});(0,l.n)(this.cepService.buscar(this.objeto.cep)).then(o=>{if(1==o.erro)return this.toastr.error("CEP inv\xe1lido."),void t.control.setErrors({invalid:!0});this.objeto.logradouro=o.logradouro,this.objeto.bairro=o.bairro,this.objeto.cidade=o.localidade,this.objeto.estado=o.uf,this.cepPreenchido=!0}).catch(o=>{this.toastr.error("N\xe3o foi poss\xedvel carregar CEP")}).finally(()=>this.loadingCep=!1)}}validaCEP(t){return this.loadingCep=!0,this.objeto.cep.toString().trim()?this.objeto.cep.toString().length<8?(t.control.setErrors({invalid:!0}),this.loadingCep=!1,!1):(0,v.c)(this.objeto.cep)?(this.loadingCep=!1,t.control.setErrors(null),!0):(t.control.setErrors({invalid:!0}),this.loadingCep=!1,!1):(t.control.setErrors({required:!0}),this.loadingCep=!1,!1)}validaCNPJ(t){return this.erro="",this.loadingCNPJ=!0,this.objeto.codigoRegistro.toString().length<14?(t.control.setErrors({invalid:!0}),this.loadingCNPJ=!1,!1):this.objeto.codigoRegistro&&0!=parseInt(this.objeto.codigoRegistro)?(0,M.V)(this.objeto.codigoRegistro)?(this.loadingCNPJ=!1,t.control.setErrors(null),!0):(t.control.setErrors({invalid:!0}),this.loadingCNPJ=!1,!1):(t.control.setErrors({required:!0}),this.loadingCNPJ=!1,!1)}representanteChanged(t){var o=this;return(0,p.Z)(function*(){o.loadingRepresentantes=!0,(!o.representantes||!o.representantes.length)&&(yield(0,l.n)(o.representanteService.getList())),o.representanteSelected=o.representantes.find(i=>i.id==t),o.loadingRepresentantes=!1,console.log(o.objeto.representante_Id,o.representanteSelected)})()}editar(t,o){var i=this.crypto.encrypt(t.id);this.router.navigate([o,i],{relativeTo:this.activatedRoute})}excluir(t,o){var i=this.crypto.encrypt(t);this.router.navigate([o,"excluir",i],{relativeTo:this.activatedRoute})}send(t){return t.invalid?(this.toastr.error("Campos inv\xe1lidos"),void(this.erro="Campos inv\xe1lidos")):(this.erro="",this.loading=!0,(0,l.n)(this.beneficiarioService.post(this.objeto)).then(o=>{0!=o.sucesso?(o.objeto?(0,u.f)(this.beneficiarioService,o.objeto):(0,l.n)(this.beneficiarioService.getList()),this.voltar()):this.erro=o.mensagem,this.loading=!1}).catch(o=>{console.error(o),this.loading=!1,this.erro=(0,E.b)(o)}))}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.gz),e.Y36(g.Z),e.Y36(m.w),e.Y36(Z._W),e.Y36(I.i),e.Y36(U.q),e.Y36(D.r),e.Y36(S.Z),e.Y36(w.d6),e.Y36(y.Z),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],viewQuery:function(o,i){if(1&o&&(e.Gf(j,5),e.Gf(J,5),e.Gf(L,5)),2&o){let r;e.iGM(r=e.CRH())&&(i.template=r.first),e.iGM(r=e.CRH())&&(i.icon=r.first),e.iGM(r=e.CRH())&&(i.cep=r.first)}},decls:5,vars:0,consts:[["class","align-items-center"],["icon",""],["template",""],[1,"title-icon"],["xmlns","http://www.w3.org/2000/svg","fontsize","14","height","16","width","16","viewBox","0 0 512 512","fill","currentColor"],["d","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],[1,"needs-validation",3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-xl-6","col-lg-5","col-md-5","col-sm-4","col-12"],["for","nome"],[1,"text-danger"],["type","text","name","nome","id","nome","pattern","\\S(.*\\S)?","required","",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],[1,"form-group","col-xl-3","col-lg-3","col-md-4","col-sm-4","col-12"],["for","codigoRegistro"],["type","text","name","codigoRegistro","id","codigoRegistro",1,"form-control",3,"ngModel","ngModelChange"],["codigoRegistro","ngModel"],[1,"form-group","col-xl-3","col-lg-4","col-md-3","col-sm-4","col-12"],["for","pais_Id"],["optionLabel","nome","optionValue","id","name","pais_Id","id","pais_Id","filterBy","nome",3,"styleClass","options","ngModel","placeholder","disabled","filter","showClear","ngModelChange","onChange"],["pais_Id","ngModel"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-12"],["for","representante_Id"],["optionLabel","nome","optionValue","id","name","representante_Id","id","representante_Id",3,"styleClass","options","ngModel","placeholder","disabled","filter","filterFields","showClear","required","ngModelChange"],["representante_Id","ngModel"],["pTemplate","selectedItem"],["pTemplate","item"],["pTemplate","footer"],[1,"form-group","col-xl-4","col-lg-4","col-md-6","col-sm-6","col-12"],["for","banco_Id"],["name","banco_Id","inputId","banco_Id","filterBy","nome, cidade","optionLabel","nome","optionValue","id","placeholder","Selecione um banco",3,"options","ngModel","styleClass","showClear","filter","filterFields","required","ngModelChange"],["banco_Id","ngModel"],["for","conta"],["type","text","name","conta","id","conta","required","","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["conta","ngModel"],[1,"form-group","col-xl-6","col-lg-6","col-md-5","col-sm-12","col-12"],["for","logradouro"],["type","text","name","logradouro","id","logradouro","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["logradouro","ngModel"],[1,"form-group","col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12"],["for","cidade"],["type","text","name","cidade","id","cidade","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["cidade","ngModel"],[1,"form-group","col-xl-2","col-lg-2","col-md-3","col-sm-6","col-12"],["for","estado"],["type","text","name","estado","id","estado","pattern","\\S(.*\\S)?",1,"form-control",3,"ngModel","ngModelChange","change"],["estado","ngModel"],[1,"col-12"],[1,"w-100","mt-2","mb-0","border-dark"],[1,"form-group","mt-3"],[1,"col-sm-12","card","py-3","px-4"],[1,"mb-3"],[1,"form-group","col-xl-5","col-lg-5","col-md-4","col-sm-12","col-12"],["type","text","id","nome","disabled","",1,"form-control",3,"value"],[1,"form-group","col-xl-3","col-lg-3","col-md-4","col-sm-6","col-12"],["for","codigoSwift"],["type","text","id","codigoSwift","disabled","",1,"form-control",3,"value"],["for","pais"],["type","text","id","pais","disabled","",1,"form-control",3,"value"],["type","text","id","logradouro","disabled","",1,"form-control",3,"value"],["type","text","id","cidade","disabled","",1,"form-control",3,"value"],["type","text","id","estado","disabled","",1,"form-control",3,"value"],[1,"d-flex","align-items-center","mt-2"],[1,"btn","btn-primary","me-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-between"],[1,"w-100"],[1,"text-ellipsis"],[1,"ms-2"],["title","Editar",1,"py-1","px-1","text-dark",3,"click"],[3,"icon"],["title","Excluir",1,"py-1","px-1","text-dark",3,"click"],[1,"py-2","px-3","border-top","bg-light"],[1,"link","text-info",3,"routerLink"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(o,i){1&o&&(e.YNc(0,K,3,0,"ng-template",0,1,e.W1O),e.YNc(2,ue,114,47,"ng-template",null,2,e.W1O),e._UZ(4,"router-outlet"))},dependencies:[F.O5,C._Y,C.Fj,C.JJ,C.JL,C.Q7,C.c5,C.On,C.F,d.lC,d.rH,R.BN,B.jx,N.Lt]})}return n})()},3416:(O,T,s)=>{s.d(T,{Z:()=>h});var p=s(9862),l=s(5619),E=s(9397),b=s(2096),g=s(553),a=s(9291),v=s(8787),M=s(2425);let h=(()=>{class u{constructor(d,m,Z){this.table=d,this.http=m,this.toastr=Z,this.url=g.N.url,this.list=new l.X([])}getList(d=!1){return this.table.loading.next(!0),this.http.get(`${this.url}/representante`,{headers:new p.WM({loading:"false"})}).pipe((0,E.b)({next:m=>(m=m.map(Z=>Z),this.list.next(Object.assign([],m)),(0,b.of)(m)),error:m=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de representante.")}))}get(d){return this.http.get(`${this.url}/representante/${d}`,{headers:new p.WM({loading:"false"})})}create(d){return this.http.post(`${this.url}/representante`,d)}edit(d){return this.http.put(`${this.url}/representante`,d)}delete(d){return this.http.delete(`${this.url}/representante/${d}`)}static#e=this.\u0275fac=function(m){return new(m||u)(a.LFG(v.i),a.LFG(p.eN),a.LFG(M._W))};static#t=this.\u0275prov=a.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},9411:(O,T,s)=>{s.d(T,{V:()=>l});const p=/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/;function l(g){var a=g.toString();if(!g||!a||a.length>14||"00000000000000"==(a=a.padStart(14,"0"))||"11111111111111"==a||"22222222222222"==a||"33333333333333"==a||"44444444444444"==a||"55555555555555"==a||"66666666666666"==a||"77777777777777"==a||"88888888888888"==a||"99999999999999"==a)return!1;const v="string"==typeof a;if(!(v||Number.isInteger(a)||Array.isArray(a)))return!1;if(v){const Z=/^\d{14}$/.test(a),I=p.test(a);if(!Z&&!I)return!1}const h=function b(g=""){const a=g.toString().match(/\d/g);return Array.isArray(a)?a.map(Number):[]}(a);if(14!==a.length||1===[...new Set(a)].length)return!1;const e=a.slice(12);return E(12,h).toString()===e[0]&&E(13,h).toString()===e[1]}function E(g,a){const v=a.slice(0,g);let M=g-7,h=0;for(let e=g;e>=1;e--)h+=v[g-e]*M--,M<2&&(M=9);const u=11-h%11;return u>9?0:u}}}]);