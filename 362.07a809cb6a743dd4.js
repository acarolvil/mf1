"use strict";(self.webpackChunkZenTech=self.webpackChunkZenTech||[]).push([[362],{9362:(f,c,a)=>{a.r(c),a.d(c,{AnaliseModule:()=>A});var i=a(6814),d=a(132),g=a(590),p=a(708),t=a(9291),l=a(2719),E=a(1225),v=a(2828),_=a(5597),o=a(4201);let O=(()=>{class r{constructor(){this.dataChart={labels:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],datasets:[{label:"My First Dataset",data:[81,56,55,40,65,59,80,81,56,55,40,65],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]}}static#t=this.\u0275fac=function(n){return new(n||r)};static#s=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-chart-data"]],decls:2,vars:2,consts:[[3,"data","type"],["chartData",""]],template:function(n,h){1&n&&t._UZ(0,"p-chart",0,1),2&n&&t.Q6J("data",h.dataChart)("type","line")},dependencies:[o.C]})}return r})(),s=(()=>{class r{constructor(){this.dataChart={labels:[2023,2022,2021,2019,2018,2017,2016],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1,tension:.1}]},this.options={indexAxis:"y"}}static#t=this.\u0275fac=function(n){return new(n||r)};static#s=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-chart-ano"]],decls:2,vars:3,consts:[[3,"data","type","options"],["chartData",""]],template:function(n,h){1&n&&t._UZ(0,"p-chart",0,1),2&n&&t.Q6J("data",h.dataChart)("type","bar")("options",h.options)},dependencies:[o.C]})}return r})();const u=[{path:"",component:(()=>{class r{constructor(m,n,h){this.pessoaService=m,this.pessoaSaldoService=n,this.pessoaOperacaoService=h,this.faChartLine=g.Stf,this.subscription=[],this.pessoasList=[],this.operacoesList=[],(0,p.n)(m.getList());var C=m.list.subscribe(M=>{this.pessoasList=M});this.subscription.push(C);var P=h.list.subscribe(M=>{});this.subscription.push(P),(0,p.n)(h.getList());var L=h.list.subscribe(M=>{this.operacoesList=M});this.subscription.push(L)}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(l.N),t.Y36(E.R),t.Y36(v.m))};static#s=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-analise"]],decls:56,vars:16,consts:[[1,"page"],[1,"page__header"],[1,"title-icon"],[3,"icon"],[1,"me-auto"],[1,"page__header-title"],[1,"page__body"],[1,"row","d-flex","align-items-start"],[1,"col-xl-2","col-lg-2","col-md-4","col-sm-12","col-12","mb-3"],[1,"card","card-body","bg-light","py-2"],[1,"d-flex","justify-content-between"],[1,"mb-0"],[1,"row","align-items-start"],[1,"col-12","mb-3"],[1,"col-md-6","col-12","mb-3"]],template:function(n,h){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"span",2),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6,"Relat\xf3rio "),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"p")(12,"small"),t._uU(13,"Total pessoas"),t.qZA()(),t.TgZ(14,"div",10)(15,"h3"),t._uU(16),t.qZA(),t.TgZ(17,"div")(18,"p",11)(19,"small")(20,"span"),t._uU(21),t.qZA(),t._uU(22," Importados"),t.qZA()(),t.TgZ(23,"p",11)(24,"small")(25,"span"),t._uU(26),t.ALo(27,"currency"),t.qZA(),t._uU(28," BRConsulta"),t.qZA()(),t.TgZ(29,"p",11)(30,"small")(31,"span"),t._uU(32),t.ALo(33,"currency"),t.qZA(),t._uU(34," Formul\xe1rio"),t.qZA()()()()()(),t.TgZ(35,"div",8)(36,"div",9)(37,"p")(38,"small"),t._uU(39,"Total opera\xe7\xf5es"),t.qZA()(),t.TgZ(40,"h3"),t._uU(41),t.qZA()()()(),t.TgZ(42,"div",12)(43,"div",13)(44,"h5"),t._uU(45,"Opera\xe7\xf5es"),t.qZA()(),t.TgZ(46,"div",14)(47,"div",9)(48,"h4"),t._uU(49,"M\xeas 2023"),t.qZA(),t._UZ(50,"app-chart-data"),t.qZA()(),t.TgZ(51,"div",14)(52,"div",9)(53,"h4"),t._uU(54,"Ano"),t.qZA(),t._UZ(55,"app-chart-ano"),t.qZA()()()()()),2&n&&(t.xp6(3),t.Q6J("icon",h.faChartLine),t.xp6(13),t.Oqu(h.pessoasList.length),t.xp6(5),t.Oqu(h.pessoasList.length/2),t.xp6(5),t.Oqu(t.gM2(27,6,h.pessoasList.length/3*1,"","","1.0-0")),t.xp6(6),t.Oqu(t.gM2(33,11,h.pessoasList.length/3*2,"","","1.0-0")),t.xp6(9),t.Oqu(h.operacoesList.length))},dependencies:[_.BN,O,s,i.H9]})}return r})()}];let D=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#s=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(u),d.Bz]})}return r})(),A=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#s=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[i.ez,D,_.uH,o.S]})}return r})()},2828:(f,c,a)=>{a.d(c,{m:()=>_});var i=a(9862),d=a(5619),g=a(9397),p=a(2096),t=a(553),l=a(9291),E=a(8787),v=a(2425);let _=(()=>{class o{constructor(s,e,u){this.table=s,this.http=e,this.toastr=u,this.url=t.N.url,this.list=new d.X([]),this.listOperacaoPorPessoa=new d.X([]),this.status=new d.X([])}getList(){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/`,{headers:new i.WM({loading:"false"})}).pipe((0,g.b)({next:s=>(s=s.map(e=>(e.dataOperacao=new Date(e.dataOperacao),e)),this.list.next(s),(0,p.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getListById(s){return this.table.loading.next(!0),this.http.get(`${this.url}/operacao/pessoa/${s}`,{headers:new i.WM({loading:"false"})}).pipe((0,g.b)({next:e=>(e=e.map(u=>(u.dataOperacao=new Date(u.dataOperacao),u)),this.listOperacaoPorPessoa.next(e),(0,p.of)(e)),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de opera\xe7\xf5es.")}))}getStatus(){return this.http.get(`${this.url}/operacaoStatus/`,{headers:new i.WM({loading:"false"})}).pipe((0,g.b)({next:s=>(this.status.next(s),(0,p.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de status da opera\xe7\xe3o.")}))}get(s){return this.http.get(`${this.url}/operacao/${s}`,{headers:new i.WM({loading:"false"})})}create(s){return this.http.post(`${this.url}/operacao`,s)}importacao(s){return this.http.post(`${this.url}/operacao/import`,s)}edit(s){return this.http.put(`${this.url}/operacao`,s)}delete(s){return this.http.delete(`${this.url}/operacao/${s}`)}static#t=this.\u0275fac=function(e){return new(e||o)(l.LFG(E.i),l.LFG(i.eN),l.LFG(v._W))};static#s=this.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},1225:(f,c,a)=>{a.d(c,{R:()=>_});var i=a(9862),d=a(5619),g=a(9397),p=a(2096),t=a(553),l=a(9291),E=a(8787),v=a(2425);let _=(()=>{class o{constructor(s,e,u){this.table=s,this.http=e,this.toastr=u,this.url=t.N.url,this.list=new d.X([])}getList(s){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoaSaldo/${s}`,{headers:new i.WM({loading:"false"})}).pipe((0,g.b)({next:e=>(e=e.map(u=>(u.dataConcessao=new Date(u.dataConcessao),u)),this.list.next(e),(0,p.of)(e)),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de saldos.")}))}create(s){return this.http.post(`${this.url}/pessoaSaldo`,s)}delete(s){return this.http.delete(`${this.url}/pessoaSaldo/${s}`)}static#t=this.\u0275fac=function(e){return new(e||o)(l.LFG(E.i),l.LFG(i.eN),l.LFG(v._W))};static#s=this.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},2719:(f,c,a)=>{a.d(c,{N:()=>_});var i=a(9862),d=a(5619),g=a(9397),p=a(2096),t=a(553),l=a(9291),E=a(8787),v=a(2425);let _=(()=>{class o{constructor(s,e,u){this.table=s,this.http=e,this.toastr=u,this.url=t.N.url,this.list=new d.X([])}getList(){return this.table.loading.next(!0),this.http.get(`${this.url}/pessoa`,{headers:new i.WM({loading:"false"})}).pipe((0,g.b)({next:s=>(s=s.map(e=>(e.dataCadastro=new Date(e.dataCadastro),e)),this.list.next(Object.assign([],s)),(0,p.of)(s)),error:s=>this.toastr.error("N\xe3o foi poss\xedvel carregar listagem de pessoas.")}))}get(s){return this.http.get(`${this.url}/pessoa/${s}`,{headers:new i.WM({loading:"true"})})}create(s){return this.http.post(`${this.url}/pessoa`,s)}delete(s){return this.http.delete(`${this.url}/pessoa/${s}`)}static#t=this.\u0275fac=function(e){return new(e||o)(l.LFG(E.i),l.LFG(i.eN),l.LFG(v._W))};static#s=this.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},553:(f,c,a)=>{a.d(c,{N:()=>i});const i={production:!1,url:"https://zentechonboardingback.azurewebsites.net"}},708:(f,c,a)=>{a.d(c,{n:()=>d});var i=a(6973);function d(g,p){const t="object"==typeof p;return new Promise((l,E)=>{let _,v=!1;g.subscribe({next:o=>{_=o,v=!0},error:E,complete:()=>{v?l(_):t?l(p.defaultValue):E(new i.K)}})})}}}]);