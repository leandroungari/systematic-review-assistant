(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){e.exports=a(373)},373:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(27),l=a.n(r),o=a(12),c=a(13),s=a(15),u=a(14),d=a(16),m=a(86),p=a.n(m),h=a(67),f=a.n(h),v=a(23),b=a.n(v),g=a(85),y=a.n(g),E=a(32),w=a.n(E),j=a(41),C=a.n(j),O=a(87),x=a.n(O),D=a(159),A=a.n(D),R=a(9),S=a.n(R),k=a(21),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.options;return i.a.createElement("div",{className:"side-menu"},i.a.createElement(k.e,null,e.map(function(e,t){var a=e.type,n=e.name,r=e.action;return"option"===a?i.a.createElement(k.f,{button:!0,key:n,onClick:r},i.a.createElement(k.g,{primary:n})):i.a.createElement(k.b,{key:t})})))}}]),t}(n.Component),N=a(26),V=a(80),M=a.n(V),I=a(82),B=a.n(I),T=a(31),W=a.n(T),F=a(20),q=a.n(F),z=a(84),J=a.n(z),H=a(83),Y=a.n(H),L=a(81),X=a.n(L),_=a(117),G=a.n(_),K=a(116),Q=a.n(K),U=a(119),Z=a.n(U),$=a(118),ee=a.n($),te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changePage=function(e,t){a.setPage(t)},a.changeRowsPerPage=function(e){a.setRowsPerPage(e.target.value)},a.setPage=function(e){return a.setState({page:e})},a.setRowsPerPage=function(e){return a.setState({rowsPerPage:e})},a.state={page:0,rowsPerPage:5},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.page,n=t.rowsPerPage,r=this.props,l=r.rows,o=r.titles;return void 0===l||0===l.length?i.a.createElement(k.c,{style:{display:"flex",width:"100%",height:400,justifyContent:"center",alignItems:"center"}},i.a.createElement(b.a,null,"N\xe3o h\xe1 registros")):i.a.createElement(M.a,null,i.a.createElement(X.a,null,i.a.createElement(W.a,null,o.map(function(e,t){return i.a.createElement(q.a,{key:t},e)}))),i.a.createElement(B.a,null,l.slice(a*n,a*n+n).map(function(t){return e.props.renderRow(t)})),i.a.createElement(Y.a,null,i.a.createElement(W.a,null,i.a.createElement(J.a,{rowsPerPageOptions:[5,10,25,50],colSpan:3,count:l.length,rowsPerPage:n,page:a,SelectProps:{native:!0},onChangePage:this.changePage,onChangeRowsPerPage:this.changeRowsPerPage,ActionsComponent:ae}))))}}]),t}(n.Component),ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,0)},a.handleBackButtonClick=function(e){var t=a.props.page;a.props.onChangePage(e,t-1)},a.handleNextButtonClick=function(e){var t=a.props.page;a.props.onChangePage(e,t+1)},a.handleLastPageButtonClick=function(e){var t=a.props,n=t.count,i=t.rowsPerPage;a.props.onChangePage(e,Math.max(0,Math.ceil(n/i)-1))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(N.withTheme)(),t=this.props,a=t.count,n=t.page,r=t.rowsPerPage;return i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement(w.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"Primeira P\xe1gina"},"rtl"===e.direction?i.a.createElement(Q.a,null):i.a.createElement(G.a,null)),i.a.createElement(w.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"P\xe1gina Anterior"},"rtl"===e.direction?i.a.createElement(ee.a,null):i.a.createElement(Z.a,null)),i.a.createElement(w.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"Pr\xf3xima P\xe1gina"},"rtl"===e.direction?i.a.createElement(Z.a,null):i.a.createElement(ee.a,null)),i.a.createElement(w.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"\xdaltima P\xe1gina"},"rtl"===e.direction?i.a.createElement(G.a,null):i.a.createElement(Q.a,null)))}}]),t}(n.Component),ne=a(89),ie=a(156),re=a.n(ie),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onClick=function(){var e=a.props,t=e.source,n=e.fields,i=e.filename;console.log(t);var r=re.a.parse(t,{fields:n}),l=new Blob([r],{type:"text/csv;charset=utf-8"});Object(ne.saveAs)(l,"".concat(i,".csv"))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:{width:180,margin:"10px 0"},color:"primary",variant:"contained",onClick:this.onClick},"Exportar CSV")}}]),t}(n.Component),oe=function(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Ago";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return null}},ce=a(33),se={},ue="first",de=!0,me=!1,pe=function(e,t,a,n){se={title:e,researchers:t,description:a,goals:n,addCriterion:[],deleteCriterion:[],articles:[],first:[],second:[],result:[]}},he=function(e){se.addCriterion=[].concat(Object(ce.a)(se.addCriterion?se.addCriterion:[]),[{id:"CA".concat(se.addCriterion?se.addCriterion.length:0),criterion:e}]),ve()},fe=function(e){se.deleteCriterion=[].concat(Object(ce.a)(se.deleteCriterion?se.deleteCriterion:[]),[{id:"CR".concat(se.deleteCriterion?se.deleteCriterion.length:0),criterion:e}]),ve()},ve=function(){console.log(se)},be=function(){return se.articles},ge=function(){var e=[];se.first=[];var t={},a=!0,n=!1,i=void 0;try{for(var r,l=function(){var a=r.value;t[a.name]=[].concat(Object(ce.a)(t[a.name]?t[a.name]:[]),[a.base]),e.includes(a.name)?se.articles.map(function(e){return e.name===a.name}):(e=[].concat(Object(ce.a)(e),[a.name]),se.first=[].concat(Object(ce.a)(se.first),[{id:a.id}]))},o=se.articles[Symbol.iterator]();!(a=(r=o.next()).done);a=!0)l()}catch(c){n=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return se.first},ye=function(){return se.first?(se.second=se.first.filter(function(e){var t=e.analysis,a=e.review;return t&&a&&t.result===de&&a.researchers===de}).map(function(e){return{id:e.id}}),se.second):[]},Ee=function(){return se.second?(se.result=se.second.filter(function(e){var t=e.analysis,a=e.review;return t&&a&&t.result===de&&a.researchers===de}).map(function(e){return{id:e.id}}),se.result):[]},we=function(){return JSON.stringify(se)},je=function(e){se=JSON.parse(e)},Ce=function(){return se.title},Oe=function(e){return se.articles.filter(function(t){return t.id===e})[0]},xe=function(e,t,a,n,i,r,l,o){var c="".concat(n).concat(se.articles.length);se.articles=[].concat(Object(ce.a)(se.articles),[{id:c,name:e,authors:t,year:a,base:[n],abstract:i,booktitle:r,doi:l,bibtex:o}])},De=function(e,t,a,n){se[t]=se[t].map(function(t){return t.id===e?{id:t.id,analysis:{result:a,criterion:n}}:t})},Ae=function(e,t,a,n){se[t]=se[t].map(function(t){return t.id===e?{id:t.id,analysis:t.analysis,review:{result:a,criterion:n}}:t})},Re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:a.props.articles()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.articles,t=new Date,a="".concat(Ce()," - Todos Estudos - ").concat(oe(t.getMonth())," ").concat(t.getDate(),", ").concat(t.getFullYear()," ").concat(t.getHours(),"h").concat(t.getMinutes(),"min"),n=e.map(function(e){var t=e.name,a=e.authors,n=e.year,i=e.base,r=e.booktitle,l=e.doi;return{name:t,authors:a,year:n,base:i.join("/"),booktitle:r,doi:l}});return i.a.createElement(S.a,{container:!0},i.a.createElement(S.a,{container:!0,style:{maxWidth:.75*window.innerWidth,overflowX:"auto"}},i.a.createElement(te,{rows:e,titles:["T\xedtulo","Autor(es)","Ano","Base Bibliogr\xe1fica","T\xedtulo do Livro","DOI"],renderRow:function(e){var t=e.id,a=e.name,n=e.authors,r=e.year,l=e.base,o=(e.abstract,e.booktitle),c=e.doi;e.bibtex;return i.a.createElement(W.a,{key:t,style:{cursor:"pointer"},onClick:function(){return console.log(t)}},i.a.createElement(q.a,{style:{minWidth:350}},a),i.a.createElement(q.a,{style:{minWidth:300}},n),i.a.createElement(q.a,null,r),i.a.createElement(q.a,null,l.join("/")),i.a.createElement(q.a,{style:{minWidth:300}},o),i.a.createElement(q.a,null,i.a.createElement(k.j,null,c?i.a.createElement(k.d,{target:"_blank",color:"inherit",href:"http://doi.org/".concat(c)},c):null)))}})),i.a.createElement(S.a,{container:!0,direction:"column",style:{display:0===e.length?"none":"flex",padding:"30px 0"}},i.a.createElement(k.j,{variant:"body2"},"Exportar os dados da tabela"),i.a.createElement(le,{source:n,fields:["name","authors","year","base","booktitle","doi"],filename:a})))}}]),t}(n.Component),Se=a(91),ke=a.n(Se),Pe=a(92),Ne=a.n(Pe),Ve=a(93),Me=a.n(Ve),Ie=a(90),Be=a.n(Ie),Te=a(79),We=a.n(Te),Fe=a(28),qe=a.n(Fe),ze=a(29),Je=a.n(ze),He=a(30),Ye=a.n(He),Le=a(24),Xe=a.n(Le),_e=a(68),Ge=a.n(_e),Ke=a(66),Qe=a.n(Ke),Ue=a(53),Ze=a.n(Ue),$e=a(65),et=a.n($e),tt=a(64),at=a.n(tt),nt=a(63),it=a.n(nt),rt=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value}),a.props.update(e.target.value)};var n=a.props.value;return a.state={value:void 0!==n?n:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.value;return i.a.createElement(at.a,{style:{margin:"15px 0"}},i.a.createElement(it.a,{shrink:!0},this.props.label),i.a.createElement(Ze.a,{value:e,onChange:this.handleChange,inputProps:{name:"age",id:"age-simple"}},this.props.items.map(function(e,t){var a=e.label,n=e.value;return i.a.createElement(Qe.a,{key:t,value:n},a)})),i.a.createElement(et.a,null,this.props.placeholder))}}]),t}(n.Component),lt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).confirm=function(){var e=a.props.articleId,t=a.state,n=t.statusAnalysis,i=t.criteriaAnalysis,r=t.statusReview,l=t.criteriaReview;""!==n&&i.length>0&&(De(e,ue,n,i),""!==r&&l.length>0&&Ae(e,ue,r,l)),a.cancel(),ve()},a.cancel=function(){a.setState({statusAnalysis:"",criteriaAnalysis:[],statusReview:"",criteriaReview:[]}),a.props.closeDialog()},a.state={statusAnalysis:"",criteriaAnalysis:[],statusReview:"",criteriaReview:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.closeDialog,r=(t.articleId,se.addCriterion?se.addCriterion:[]),l=se.deleteCriterion?se.deleteCriterion:[];return i.a.createElement(qe.a,{open:a,onClose:n},i.a.createElement(Je.a,null,"Status do Artigo"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:570,padding:"20px 30px 40px 30px",alignItems:"flex-start"}},i.a.createElement(S.a,{container:!0,justify:"space-between",direction:"row",wrap:"nowrap",style:{width:500}},i.a.createElement(S.a,{container:!0,direction:"column",style:{maxWidth:220}},i.a.createElement(rt,{label:"An\xe1lise do Artigo",value:this.state.statusAnalysis,items:[{label:"Aceito",value:!0},{label:"Rejeitado",value:!1}],update:function(t){return e.setState({statusAnalysis:t,criteriaAnalysis:[]},function(){return console.log(e.state.statusAnalysis)})}}),i.a.createElement(rt,{label:"Crit\xe9rio(s)",placeholder:"Selecione v\xe1rios",items:this.state.statusAnalysis?r.map(function(e){return{label:"".concat(e.id," - ").concat(e.criterion),value:e.id}}):l.map(function(e){return{label:"".concat(e.id," - ").concat(e.criterion),value:e.id}}),update:function(t){return e.setState({criteriaAnalysis:[].concat(Object(ce.a)(e.state.criteriaAnalysis),[t])})}}),i.a.createElement(S.a,{container:!0,direction:"row",style:{width:250,margin:"20px 10px"}},this.state.criteriaAnalysis.map(function(e,t){return i.a.createElement(Ge.a,{key:t,style:{margin:"3px 5px",width:50},label:e})}))),i.a.createElement(S.a,{container:!0,direction:"column",style:{maxWidth:220}},i.a.createElement(rt,{label:"Revis\xe3o do Artigo",value:this.state.statusReview,items:[{label:"Aceito",value:!0},{label:"Rejeitado",value:!1}],update:function(t){return e.setState({statusReview:t,criteriaReview:[]})}}),i.a.createElement(rt,{label:"Crit\xe9rio(s)",placeholder:"Selecione v\xe1rios",items:this.state.statusReview?r.map(function(e){return{label:"".concat(e.id," - ").concat(e.criterion),value:e.id}}):l.map(function(e){return{label:"".concat(e.id," - ").concat(e.criterion),value:e.id}}),update:function(t){return e.setState({criteriaReview:[].concat(Object(ce.a)(e.state.criteriaReview),[t])})}}),i.a.createElement(S.a,{container:!0,direction:"row",style:{width:250,margin:"20px 10px"}},this.state.criteriaReview.map(function(e,t){return i.a.createElement(Ge.a,{key:t,style:{margin:"3px 5px",width:50},label:e})})))),i.a.createElement(S.a,{container:!0,justify:"center",style:{marginTop:15}},i.a.createElement(Xe.a,{onClick:this.confirm,variant:"contained",color:"primary",style:{marginRight:30}},"Confirmar"),i.a.createElement(Xe.a,{onClick:this.cancel,variant:"contained",color:"primary"},"Cancelar"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.statusAnalysis,n=t.statusReview;if(""===e.articleId)return null;var i,r=(i=e.articleId,se[ue].filter(function(e){return e.id===i})[0]),l=r.analysis,o=r.review;return""!==e.articleId&&""===a&&""===n?{statusAnalysis:l?l.result:"",criteriaAnalysis:l?l.criterion:[],statusReview:o?o.result:"",criteriaReview:o?o.criterion:[]}:(console.log("passou2"),""!==a||""!==n?null:{statusAnalysis:l?l.result:"",criteriaAnalysis:l?l.criterion:[],statusReview:o?o.result:"",criteriaReview:o?o.criterion:[]})}}]),t}(n.Component),ot=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showStatusDialog=function(e){return a.setState({isStatusDialogVisible:!0,articleId:e})},a.hideStatusDialog=function(){a.setState({isStatusDialogVisible:!1,articles:a.props.articles()})},a.processStatus=function(e,t){return{resultAnalysis:e?e.result?"Aceito: ".concat(e.criterion.join(", ")):"Rejeitado: ".concat(e.criterion.join(", ")):"N\xe3o analisado",resultReview:t?t.result?"Aceito: ".concat(t.criterion.join(", ")):"Rejeitado: ".concat(t.criterion.join(", ")):"N\xe3o revisado"}},a.calculateStatus=function(e,t){return e||t?e.result===de&&t.result===de||e.result===me&&t.result===me?i.a.createElement(k.i,{title:"Revisado"},i.a.createElement(ke.a,null)):e.result!==de&&e.result!==me||t?i.a.createElement(k.i,{title:"Indeterminado"},i.a.createElement(Me.a,null)):i.a.createElement(k.i,{title:"Analisado/N\xe3o Revisado"},i.a.createElement(Ne.a,null)):i.a.createElement(k.i,{title:"N\xe3o analisado"},i.a.createElement(Be.a,null))},a.state={isStatusDialogVisible:!1,articleId:"",articles:a.props.articles()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.articles,n=t.isStatusDialogVisible,r=t.articleId,l=new Date,o="".concat(Ce()," - Sele\xe7\xe3o Inicial - ").concat(oe(l.getMonth())," ").concat(l.getDate(),", ").concat(l.getFullYear()," ").concat(l.getHours(),"h").concat(l.getMinutes(),"min"),c=a.map(function(t){var a=t.id,n=t.analysis,i=t.review,r=Oe(a),l=r.name,o=r.authors,c=r.abstract,s=r.year,u=r.base,d=e.processStatus(n,i),m=d.resultAnalysis,p=d.resultReview;return{name:l,abstract:c,authors:o,year:s,base:u.join("/"),analysis:m,review:p}});return i.a.createElement(S.a,{container:!0},i.a.createElement(S.a,{container:!0,style:{maxWidth:.75*window.innerWidth,overflowX:"auto"}},i.a.createElement(te,{rows:a,titles:["Status","T\xedtulo","Resumo","Autor(es)","Ano","Base Bibliogr\xe1fica","An\xe1lise","Revis\xe3o da An\xe1lise"],renderRow:function(t){var a=t.id,n=t.analysis,r=t.review,l=Oe(a),o=l.name,c=l.authors,s=l.abstract,u=l.year,d=l.base,m=l.doi,p=e.processStatus(n,r),h=p.resultAnalysis,f=p.resultReview;return i.a.createElement(W.a,{key:a},i.a.createElement(q.a,{style:{cursor:"pointer"},onClick:function(t){return e.showStatusDialog(a)}},e.calculateStatus(n,r)),i.a.createElement(q.a,{style:{minWidth:300,cursor:"pointer"}},i.a.createElement(k.j,null,i.a.createElement(We.a,{target:"_blank",color:"inherit",href:"http://doi.org/".concat(m)},o))),i.a.createElement(q.a,{style:{minWidth:550},align:"justify"},s),i.a.createElement(q.a,{style:{minWidth:250}},c),i.a.createElement(q.a,null,u),i.a.createElement(q.a,null,d.join("/")),i.a.createElement(q.a,null,h),i.a.createElement(q.a,null,f))}})),i.a.createElement(S.a,{container:!0,direction:"column",style:{display:0===a.length?"none":"flex",padding:"30px 0"}},i.a.createElement(k.j,{variant:"body2"},"Exportar os dados da tabela"),i.a.createElement(le,{source:c,fields:["name","abstract","authors","year","base","analysis","review"],filename:o})),i.a.createElement(lt,{closeDialog:this.hideStatusDialog,visible:n,articleId:r}))}}]),t}(n.Component),ct=a(40),st=a.n(ct),ut=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showStatusDialog=function(e){return a.setState({isStatusDialogVisible:!0,articleId:e})},a.hideStatusDialog=function(){a.setState({isStatusDialogVisible:!1,articles:a.props.articles()})},a.processStatus=function(e,t){return{resultAnalysis:e?e.result?"Aceito: ".concat(e.criterion.join(", ")):"Rejeitado: ".concat(e.criterion.join(", ")):"N\xe3o analisado",resultReview:t?t.result?"Aceito: ".concat(t.criterion.join(", ")):"Rejeitado: ".concat(t.criterion.join(", ")):"N\xe3o revisado"}},a.calculateStatus=function(e,t){return e||t?e.result===de&&t.result===de||e.result===me&&t.result===me?i.a.createElement(st.a,{title:"Revisado"},i.a.createElement(ke.a,null)):e.result!==de&&e.result!==me||t?i.a.createElement(st.a,{title:"Indeterminado"},i.a.createElement(Me.a,null)):i.a.createElement(st.a,{title:"Analisado/N\xe3o Revisado"},i.a.createElement(Ne.a,null)):i.a.createElement(st.a,{title:"N\xe3o analisado"},i.a.createElement(Be.a,null))},a.state={articleId:"",articles:a.props.articles(),isStatusDialogVisible:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.articles,n=t.articleId,r=t.isStatusDialogVisible,l=new Date,o="".concat(Ce()," - Sele\xe7\xe3o Final - ").concat(oe(l.getMonth())," ").concat(l.getDate(),", ").concat(l.getFullYear()," ").concat(l.getHours(),"h").concat(l.getMinutes(),"min"),c=a.map(function(t){var a=t.id,n=t.analysis,i=t.review,r=Oe(a),l=r.name,o=r.authors,c=r.year,s=r.base,u=e.processStatus(n,i),d=u.resultAnalysis,m=u.resultReview;return{name:l,authors:o,year:c,base:s.join("/"),analysis:d,review:m}});return i.a.createElement(S.a,{container:!0},i.a.createElement(S.a,{container:!0,style:{maxWidth:.75*window.innerWidth,overflowX:"auto"}},i.a.createElement(te,{rows:a,titles:["Status","T\xedtulo","Autor(es)","Ano","Base Bibliogr\xe1fica","An\xe1lise","Revis\xe3o da An\xe1lise"],renderRow:function(t){var a=t.id,n=t.analysis,r=t.review,l=Oe(a),o=l.name,c=l.authors,s=l.year,u=l.base,d=e.processStatus(n,r),m=d.resultAnalysis,p=d.resultReview;return i.a.createElement(W.a,{key:a},i.a.createElement(q.a,{onClick:function(t){return e.showStatusDialog(a)}},e.calculateStatus(n,r)),i.a.createElement(q.a,{style:{minWidth:300,cursor:"pointer"},onClick:function(){return console.log(a)}},o),i.a.createElement(q.a,{style:{minWidth:250}},c),i.a.createElement(q.a,null,s),i.a.createElement(q.a,null,u.join("/")),i.a.createElement(q.a,null,m),i.a.createElement(q.a,null,p))}})),i.a.createElement(S.a,{container:!0,direction:"column",style:{display:0===a.length?"none":"flex",padding:"30px 0"}},i.a.createElement(k.j,{variant:"body2"},"Exportar os dados da tabela"),i.a.createElement(le,{source:c,fields:["name","authors","year","base","analysis","review"],filename:o})),i.a.createElement(lt,{closeDialog:this.hideStatusDialog,visible:r,articleId:n}))}}]),t}(n.Component),dt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:a.props.articles()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.articles,t=new Date,a="".concat(Ce()," - Resultado Final - ").concat(oe(t.getMonth())," ").concat(t.getDate(),", ").concat(t.getFullYear()," ").concat(t.getHours(),"h").concat(t.getMinutes(),"min"),n=e.map(function(e){var t=e.id,a=Oe(t);return{name:a.name,authors:a.authors,year:a.year,base:a.base.join("/")}});return i.a.createElement(S.a,{container:!0},i.a.createElement(S.a,{container:!0,style:{maxWidth:.75*window.innerWidth,overflowX:"auto"}},i.a.createElement(te,{rows:e,titles:["T\xedtulo","Autor(es)","Ano","Base Bibliogr\xe1fica"],renderRow:function(e){var t=e.id,a=Oe(t),n=a.name,r=a.authors,l=a.year,o=a.base;return i.a.createElement(W.a,{key:t},i.a.createElement(q.a,{style:{minWidth:300,cursor:"pointer"},onClick:function(){return console.log(t)}},n),i.a.createElement(q.a,{style:{minWidth:250}},r),i.a.createElement(q.a,null,l),i.a.createElement(q.a,null,o.join("/")))}})),i.a.createElement(S.a,{container:!0,direction:"column",style:{display:0===e.length?"none":"flex",padding:"30px 0"}},i.a.createElement(k.j,{variant:"body2"},"Exportar os dados da tabela"),i.a.createElement(le,{source:n,fields:["name","authors","year","base"],filename:a})))}}]),t}(n.Component),mt=a(5),pt=a.n(mt),ht=a(94),ft=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onDrop=function(e){var t=a.state.base;e.forEach(function(e){var n=new FileReader;n.onload=function(){var e=n.result;a.props.loadFile(t,e),a.props.closeDialog()},n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.readAsText(e)})},a.state={base:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.closeDialog;return i.a.createElement(qe.a,{open:a,onClose:n},i.a.createElement(Je.a,null,"Adicionar Pesquisa"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:450,padding:"20px 30px 40px 30px",alignItems:"flex-start"}},i.a.createElement(k.h,{label:"Base Bibliogr\xe1fica",style:{width:180,marginBottom:40},onChange:function(t){return e.setState({base:t.target.value})}}),i.a.createElement(ht.a,{onDrop:this.onDrop},function(e){var t=e.getRootProps,a=e.getInputProps,n=e.isDragActive;return i.a.createElement("div",Object.assign({},t(),{className:pt()("dropzone",{"dropzone--isActive":n})}),i.a.createElement("input",a()),n?i.a.createElement(b.a,null,"Arraste o arquivo aqui ..."):i.a.createElement(b.a,null,"Arraste o(s) arquivo(s) .bib aqui ou clique para carreg\xe1-lo(s) ..."))}),i.a.createElement(S.a,{container:!0,justify:"center",style:{marginTop:55}},i.a.createElement(Xe.a,{onClick:n,variant:"contained",color:"primary"},"Cancelar"))))}}]),t}(n.Component),vt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addCriteria=function(){a.props.addCriteria(a.state.criteria),a.setState({criteria:""})},a.state={criteria:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.closeDialog,r=this.state.criteria;return i.a.createElement(qe.a,{open:a,onClose:n},i.a.createElement(Je.a,null,"Crit\xe9rio de Aceita\xe7\xe3o"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 30px 40px 30px",alignItems:"flex-start"}},i.a.createElement(k.h,{label:"Crit\xe9rio de Aceita\xe7\xe3o",value:r,style:{width:250,marginBottom:30},onChange:function(t){return e.setState({criteria:t.target.value})}}),i.a.createElement(S.a,{container:!0,justify:"center",style:{marginTop:15}},i.a.createElement(Xe.a,{onClick:this.addCriteria,variant:"contained",color:"primary",style:{marginRight:30}},"Adicionar"),i.a.createElement(Xe.a,{onClick:function(){e.setState({criteria:""}),n()},variant:"contained",color:"primary"},"Voltar"))))}}]),t}(n.Component),bt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addCriteria=function(){a.props.addCriteria(a.state.criteria),a.setState({criteria:""})},a.state={criteria:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.closeDialog,r=this.state.criteria;return i.a.createElement(qe.a,{open:a,onClose:n},i.a.createElement(Je.a,null,"Crit\xe9rio de Rejei\xe7\xe3o"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 30px 40px 30px",alignItems:"flex-start"}},i.a.createElement(k.h,{label:"Crit\xe9rio de Rejei\xe7\xe3o",value:r,style:{width:250,marginBottom:30},onChange:function(t){return e.setState({criteria:t.target.value})}}),i.a.createElement(S.a,{container:!0,justify:"center",style:{marginTop:15}},i.a.createElement(Xe.a,{onClick:this.addCriteria,variant:"contained",color:"primary",style:{marginRight:30}},"Adicionar"),i.a.createElement(Xe.a,{onClick:function(){e.setState({criteria:""}),n()},variant:"contained",color:"primary"},"Voltar"))))}}]),t}(n.Component),gt=a(158),yt=a.n(gt),Et=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showAddSearch=function(){return a.setState({isAddSearchModalVisible:!0})},a.hideAddSearch=function(){return a.setState({isAddSearchModalVisible:!1})},a.showAddCriteria=function(){return a.setState({isAddCriteriaModalVisible:!0})},a.hideAddCriteria=function(){return a.setState({isAddCriteriaModalVisible:!1})},a.showDeleteCriteria=function(){return a.setState({isDeleteCriteriaModalVisible:!0})},a.hideDeleteCriteria=function(){return a.setState({isDeleteCriteriaModalVisible:!1})},a.addCriteria=function(e){he(e)},a.deleteCriteria=function(e){fe(e)},a.loadBibTexFile=function(e,t){var a=yt.a.toJSON(t),n=t.split("@").map(function(e){return"@".concat(e)});a.forEach(function(t,a){var i=t.entryTags,r=i.abstract,l=i.author,o=i.booktitle,c=i.doi,s=i.title,u=i.year;xe(s,l,Number.parseInt(u),e,r,o,c,n[a])}),ve()},a.state={isAddSearchModalVisible:!1,isAddCriteriaModalVisible:!1,isDeleteCriteriaModalVisible:!1,options:[{type:"option",name:"Adicionar Pesquisa",action:function(){return a.showAddSearch()}},{type:"option",name:"Crit\xe9rios de Aceita\xe7\xe3o",action:function(){return a.showAddCriteria()}},{type:"option",name:"Crit\xe9rios de Rejei\xe7\xe3o",action:function(){return a.showDeleteCriteria()}},{type:"option",name:"Mostrar Itens de Pesquisa Duplicados",action:function(){}}]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.options,a=e.isAddSearchModalVisible,n=e.isAddCriteriaModalVisible,r=e.isDeleteCriteriaModalVisible,l=this.props.tab;return i.a.createElement(S.a,{container:!0,style:{display:"flex",flexWrap:"nowrap",flexDirection:"row"}},i.a.createElement(S.a,{container:!0,style:{width:.2*window.innerWidth}},i.a.createElement(P,{options:t})),i.a.createElement(S.a,{style:{width:.8*window.innerWidth,padding:"25px 20px"}},0===l&&i.a.createElement(Re,{articles:be}),1===l&&i.a.createElement(ot,{articles:ge}),2===l&&i.a.createElement(ut,{articles:ye}),3===l&&i.a.createElement(dt,{articles:Ee})),i.a.createElement(ft,{closeDialog:this.hideAddSearch,visible:a,loadFile:this.loadBibTexFile}),i.a.createElement(vt,{closeDialog:this.hideAddCriteria,visible:n,addCriteria:this.addCriteria}),i.a.createElement(bt,{closeDialog:this.hideDeleteCriteria,visible:r,addCriteria:this.deleteCriteria}))}}]),t}(n.Component),wt=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderPanel=function(){var e=a.props,t=e.enable,n=e.tab;return t?i.a.createElement(Et,{tab:n}):i.a.createElement(S.a,{container:!0,style:{width:window.innerWidth,height:400,opacity:.5},direction:"column",alignItems:"center",justify:"center"},i.a.createElement(b.a,{variant:"body1"},"Para come\xe7ar, crie uma nova revis\xe3o."))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"panel"},this.renderPanel())}}]),t}(n.Component),jt=a(88),Ct=a.n(jt),Ot=a(39),xt=a.n(Ot),Dt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).initReview=function(){var e=a.state,t=e.title,n=e.description,i=e.researchers,r=e.goals,l=a.props.initializeReview;pe(t,i,n,r),l(),ve()},a.cancelReview=function(){a.props.closeDialog()},a.title={title:"",researchers:"",goals:"",description:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.closeDialog;return i.a.createElement(qe.a,{open:a,onClose:n},i.a.createElement(Je.a,null,"Nova Revis\xe3o"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 20px 40px 20px",alignItems:"center"}},i.a.createElement("form",{style:{display:"flex",flexDirection:"column",width:400,padding:"0 30px"}},i.a.createElement(S.a,{container:!0,style:{marginBottom:20}},i.a.createElement(xt.a,{style:{marginRight:15,width:150},label:"T\xedtulo",onChange:function(t){return e.setState({title:t.target.value})}}),i.a.createElement(xt.a,{style:{width:150},label:"Pesquisador(es)",onChange:function(t){return e.setState({researchers:t.target.value})}})),i.a.createElement(xt.a,{style:{marginBottom:8},label:"Descri\xe7\xe3o",multiline:!0,rowsMax:3,onChange:function(t){return e.setState({description:t.target.value})}}),i.a.createElement(xt.a,{style:{marginBottom:8},label:"Objetivos",multiline:!0,rowsMax:3,onChange:function(t){return e.setState({goals:t.target.value})}})),i.a.createElement(S.a,{container:!0,justify:"space-between",style:{width:220,marginTop:25}},i.a.createElement(Xe.a,{onClick:this.initReview,variant:"contained",color:"primary"},"Criar"),i.a.createElement(Xe.a,{onClick:this.cancelReview,variant:"contained",color:"primary"},"Cancelar"))))}}]),t}(n.Component),At=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onDrop=function(e){e.forEach(function(e){var t=new FileReader;t.onload=function(){var e=t.result;a.props.openReview(e),a.props.closeDialog()},t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.readAsText(e)})},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.closeDialog;return i.a.createElement(qe.a,{open:t,onClose:a},i.a.createElement(Je.a,null,"Abrir Revis\xe3o"),i.a.createElement(Ye.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 30px 40px 30px",alignItems:"center"}},i.a.createElement(ht.a,{onDrop:this.onDrop},function(e){var t=e.getRootProps,a=e.getInputProps,n=e.isDragActive;return i.a.createElement("div",Object.assign({},t(),{className:pt()("dropzone",{"dropzone--isActive":n})}),i.a.createElement("input",a()),n?i.a.createElement(b.a,null,"Arraste o arquivo aqui ..."):i.a.createElement(b.a,null,"Arraste o arquivo aqui ou clique para carreg\xe1-lo ..."))}),i.a.createElement(S.a,{container:!0,justify:"center",style:{width:220,marginTop:55}},i.a.createElement(Xe.a,{onClick:a,variant:"contained",color:"primary"},"Cancelar"))))}}]),t}(n.Component),Rt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showDrawer=function(){return a.setState({isDrawerVisible:!0})},a.hideDrawer=function(){return a.setState({isDrawerVisible:!1})},a.showNewReviewDialog=function(){return a.setState({isNewReviewDialogVisible:!0})},a.hideNewReviewDialog=function(){return a.setState({isNewReviewDialogVisible:!1})},a.showOpenReviewDialog=function(){return a.setState({isOpenReviewDialogVisible:!0})},a.hideOpenReviewDialog=function(){return a.setState({isOpenReviewDialogVisible:!1})},a.initializeReview=function(){a.setState({isNewReviewActive:!0}),a.hideNewReviewDialog()},a.openReview=function(e){je(e),ve(),a.setState({isNewReviewActive:!0})},document.title="Systematic Review Assistant",a.state={isNewReviewActive:!1,isNewReviewDialogVisible:!1,isOpenReviewDialogVisible:!1,isDrawerVisible:!1,tabNumber:0,options:[{type:"option",name:"Nova revis\xe3o ...",action:function(){a.hideDrawer(),a.showNewReviewDialog()}},{type:"option",name:"Salvar como ...",action:function(){var e=new Date,t="".concat(Ce()," - ").concat(oe(e.getMonth())," ").concat(e.getDate(),", ").concat(e.getFullYear()," ").concat(e.getHours(),"h").concat(e.getMinutes(),"min"),n=we(),i=new Blob([n],{type:"text/json;charset=utf-8"});Object(ne.saveAs)(i,"".concat(t,".json")),a.hideDrawer()}},{type:"divider"},{type:"option",name:"Abrir",action:function(){a.hideDrawer(),a.showOpenReviewDialog()}},{type:"divider"},{type:"option",name:"Sobre",action:function(){return console.log("Sobre")}}]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isNewReviewActive,n=t.isDrawerVisible,r=t.options,l=t.isNewReviewDialogVisible,o=t.isOpenReviewDialogVisible,c=t.tabNumber;return i.a.createElement("div",null,i.a.createElement(y.a,null),i.a.createElement(p.a,{position:"static",style:{display:"flex",flexDirection:"row"}},i.a.createElement(f.a,null,i.a.createElement(w.a,{color:"inherit",onClick:this.showDrawer},i.a.createElement(A.a,null)),i.a.createElement(b.a,{variant:"h6",color:"inherit"},"Systematic Review Assistant")),i.a.createElement(x.a,{style:{display:a?"flex":"none",marginLeft:"150px",alignItems:"flex-end"},value:c,onChange:function(t,a){e.setState({tabNumber:a})}},i.a.createElement(C.a,{label:"Todos Estudos"}),i.a.createElement(C.a,{label:"Sele\xe7\xe3o Inicial"}),i.a.createElement(C.a,{label:"Sele\xe7\xe3o Final"}),i.a.createElement(C.a,{label:"Resultado Final"}))),i.a.createElement(Ct.a,{open:n,onClose:this.hideDrawer},i.a.createElement(P,{options:r})),i.a.createElement(wt,{enable:a,tab:c}),i.a.createElement(Dt,{closeDialog:this.hideNewReviewDialog,visible:l,initializeReview:this.initializeReview}),i.a.createElement(At,{closeDialog:this.hideOpenReviewDialog,visible:o,openReview:this.openReview}))}}]),t}(i.a.Component),St=Object(N.createMuiTheme)({palette:{primary:{light:"#4dabf5",main:"#2196f3",dark:"#1769aa",contrastText:"#fff"},secondary:{light:"#ab003c",main:"#f50057",dark:"#ab003c",contrastText:"#000"}},typography:{useNextVariants:!0}});l.a.render(i.a.createElement(N.MuiThemeProvider,{theme:St},i.a.createElement(Rt,null)),document.getElementById("root"))}},[[215,2,1]]]);
//# sourceMappingURL=main.f2569938.chunk.js.map