(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,n){e.exports=n(332)},332:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(15),o=n.n(r),c=n(20),l=n(21),s=n(23),u=n(22),m=n(24),p=n(59),h=n.n(p),v=n(60),w=n.n(v),d=n(18),b=n.n(d),f=n(58),g=n.n(f),y=n(61),E=n.n(y),j=n(126),O=n.n(j),D=n(25),R=n.n(D),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderPanel=function(){return n.props.enable?i.a.createElement(R.a,null,i.a.createElement(b.a,null,"Panel")):i.a.createElement(R.a,{container:!0,style:{width:window.innerWidth,height:400,opacity:.5},direction:"column",alignItems:"center",justify:"center"},i.a.createElement(b.a,{variant:"body1"},"Para come\xe7ar, crie uma nova revis\xe3o."))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"panel"},this.renderPanel())}}]),t}(a.Component),x=n(62),S=n.n(x),C=n(42),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.options;return i.a.createElement("div",{className:"side-menu"},i.a.createElement(C.b,null,e.map(function(e,t){var n=e.type,a=e.name,r=e.action;return"option"===n?i.a.createElement(C.c,{button:!0,key:a,onClick:r},i.a.createElement(C.d,{primary:a})):i.a.createElement(C.a,{key:t})})))}}]),t}(a.Component),A=n(54),V=n.n(A),M=n(55),J=n.n(M),P=n(56),T=n.n(P),B=n(26),z=n.n(B),I=n(57),F=n.n(I),q=(n(63),{}),H=function(e,t,n,a){q={title:e,researchers:t,description:n,goals:a,articles:[],first:[],second:[],result:[]}},W=function(){console.log(q)},Y=function(){return q},G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).initReview=function(){var e=n.state,t=e.title,a=e.description,i=e.researchers,r=e.goals,o=n.props.initializeReview;H(t,i,a,r),o(),W()},n.title={title:"",researchers:"",goals:"",description:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.visible;return i.a.createElement(V.a,{open:t},i.a.createElement(J.a,null,"Nova Revis\xe3o"),i.a.createElement(T.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 20px 40px 20px",alignItems:"center"}},i.a.createElement("form",{style:{display:"flex",flexDirection:"column",width:400,padding:"0 30px"}},i.a.createElement(R.a,{container:!0,style:{marginBottom:20}},i.a.createElement(z.a,{style:{marginRight:15,width:150},label:"T\xedtulo",onChange:function(t){return e.setState({title:t.target.value})}}),i.a.createElement(z.a,{style:{width:150},label:"Pesquisador(es)",onChange:function(t){return e.setState({researchers:t.target.value})}})),i.a.createElement(z.a,{style:{marginBottom:8},label:"Descri\xe7\xe3o",multiline:!0,rowsMax:3,onChange:function(t){return e.setState({description:t.target.value})}}),i.a.createElement(z.a,{style:{marginBottom:8},label:"Objetivos",multiline:!0,rowsMax:3,onChange:function(t){return e.setState({goals:t.target.value})}})),i.a.createElement(F.a,{onClick:this.initReview,variant:"contained",color:"primary",style:{marginTop:25}},"Criar")))}}]),t}(a.Component),K=n(125),L=function(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Ago";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return null}},Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).showDrawer=function(){return n.setState({isDrawerVisible:!0})},n.hideDrawer=function(){return n.setState({isDrawerVisible:!1})},n.showNewReviewDialog=function(){return n.setState({isNewReviewDialogVisible:!0})},n.hideNewReviewDialog=function(){return n.setState({isNewReviewDialogVisible:!1})},n.initializeReview=function(){n.setState({isNewReviewActive:!0}),n.hideNewReviewDialog()},document.title="Systematic Review Assistant",n.state={isNewReviewActive:!1,isNewReviewDialogVisible:!1,isDrawerVisible:!1,options:[{type:"option",name:"Nova revis\xe3o ...",action:function(){n.hideDrawer(),n.showNewReviewDialog()}},{type:"option",name:"Salvar como ...",action:function(){var e=Y(),t=new Date,a="".concat(e.title," - ").concat(L(t.getMonth())," ").concat(t.getDate(),", ").concat(t.getFullYear()," ").concat(t.getHours(),"h").concat(t.getMinutes(),"min"),i=JSON.stringify(e),r=new Blob([i],{type:"text/json;charset=utf-8"});Object(K.saveAs)(r,a),n.hideDrawer()}},{type:"divider"},{type:"option",name:"Abrir",action:function(){return console.log("Abrir")}},{type:"divider"},{type:"option",name:"Sobre",action:function(){return console.log("Sobre")}}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isNewReviewActive,n=e.isDrawerVisible,a=e.options,r=e.isNewReviewDialogVisible;return i.a.createElement("div",null,i.a.createElement(g.a,null),i.a.createElement(h.a,{position:"static"},i.a.createElement(w.a,null,i.a.createElement(E.a,{color:"inherit",onClick:this.showDrawer},i.a.createElement(O.a,null)),i.a.createElement(b.a,{variant:"h6",color:"inherit"},"Systematic Review Assistant"))),i.a.createElement(S.a,{open:n,onClose:this.hideDrawer},i.a.createElement(k,{options:a})),i.a.createElement(N,{enable:t}),i.a.createElement(G,{visible:r,initializeReview:this.initializeReview}))}}]),t}(i.a.Component),U=n(16),X=Object(U.createMuiTheme)({palette:{primary:{light:"#4dabf5",main:"#2196f3",dark:"#1769aa",contrastText:"#fff"},secondary:{light:"#ab003c",main:"#f50057",dark:"#ab003c",contrastText:"#000"}},typography:{useNextVariants:!0}});o.a.render(i.a.createElement(U.MuiThemeProvider,{theme:X},i.a.createElement(Q,null)),document.getElementById("root"))}},[[196,2,1]]]);
//# sourceMappingURL=main.2a53bf2f.chunk.js.map