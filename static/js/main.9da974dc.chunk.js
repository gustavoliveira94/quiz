(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{38:function(n,e,t){n.exports=t(51)},51:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"quiz",(function(){return zn}));var a=t(0),o=t.n(a),i=t(18),c=t.n(i),l=t(29),u=t(12),s=t(26),f=t(31),d=t.n(f),p=t(11),b=t(32);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(10),h=t(15),g=t(1),x=t(2);function v(){var n=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: calc(100vh - 60px);\n    overflow: scroll;\n    margin-top: 15px;\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #d3d3d3;\n    }\n"]);return v=function(){return n},n}var w=x.b.div(v());function O(){var n=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 90%;\n    max-width: 1200px;\n    margin: 50px 5%;\n\n    li {\n        list-style: none;\n    }\n"]);return O=function(){return n},n}var j=x.b.ul(O());function E(){var n=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    background-color: #46b3e6;\n    cursor: pointer;\n    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.59);\n\n    a {\n        text-decoration: none;\n    }\n\n    p {\n        font-size: 48px;\n        color: #fff;\n        font-weight: lighter;\n    }\n"]);return E=function(){return n},n}var y=x.b.div(E());function k(){var n=Object(g.a)(["\n    position: relative;\n    width: 280px;\n    height: 120px;\n    background-color: #fff;\n    padding: 10px;\n    margin: 0 20px;\n    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);\n    margin-top: 15px;\n\n    :hover {\n        cursor: pointer;\n        opacity: 0.9;\n    }\n\n    i {\n        position: absolute;\n        right: 10px;\n        z-index: 2;\n        color: #f00;\n    }\n"]);return k=function(){return n},n}var q=x.b.li(k());function P(){var n=Object(g.a)(["\n    color: #000;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"]);return P=function(){return n},n}var z=x.b.h4(P()),S=function(n){var e=n.data,t=Object(p.b)();return o.a.createElement(q,null,o.a.createElement("i",{onClick:function(){return t(function(n){return function(e){e({type:"REMOVE_QUIZ",data:n})}}(e._id))},className:"fas fa-minus-circle",title:"remover"}),o.a.createElement(m.b,{to:"/quiz/".concat(e._id),style:{textDecoration:"none",width:"100%",height:"100%",marginTop:20}},o.a.createElement(z,{title:e.name},"Name: ",e.name),o.a.createElement(z,{title:e.description},"Descri\xe7\xe3o: ",e.description),o.a.createElement("br",null),o.a.createElement(z,null,e.questions.length<=1?"Pergunta":"Perguntas"," ",e.questions.length)))};function D(){var n=Object(g.a)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 60px;\n    border-bottom: 1px solid #000;\n    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.59);\n\n    a {\n        text-decoration: none;\n    }\n\n    h1 {\n        font-family: 'Alatsi', sans-serif;\n        color: #000;\n    }\n"]);return D=function(){return n},n}var _=x.b.div(D()),C=function(){var n=Object(h.f)();return o.a.createElement(_,null,"/"!==n.pathname&&o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"#000",position:"absolute",left:20}},o.a.createElement("i",{className:"fas fa-2x fa-angle-left"})),o.a.createElement(m.b,{to:"/"},o.a.createElement("h1",null,"QUIZ")))},A=function(){var n=Object(p.c)((function(n){return n.quiz}));return console.log(n),o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(w,null,o.a.createElement(j,{"data-testid":"quiz"},n&&n.quiz.map((function(n){return o.a.createElement(S,{key:n._id,data:n})}))),o.a.createElement(y,null,o.a.createElement(m.b,{to:"/create","data-testid":"create"},o.a.createElement("p",null,"+")))))};function F(){var n=Object(g.a)(["\n    width: 100%;\n    height: calc(100% - 60px);\n    overflow-y: scroll;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #d3d3d3;\n    }\n"]);return F=function(){return n},n}var I=x.b.div(F());function M(){var n=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 100%;\n    margin: 40px 5%;\n"]);return M=function(){return n},n}var N=x.b.div(M()),R=t(7),Q=t(19),U=t(9);function Z(){var n=Object(g.a)(["\n    position: relative;\n    width: 600px;\n    height: 800px;\n    background-color: #fff;\n    padding: 15px;\n    overflow-y: scroll;\n\n    label {\n        color: #000;\n    }\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #d3d3d3;\n    }\n\n    @media (max-width: 500px) {\n        width: 90%;\n        height: 100%;\n    }\n"]);return Z=function(){return n},n}var T=x.b.form(Z());function B(){var n=Object(g.a)(["\n    width: 100%;\n    height: 40px;\n    border: 1px solid #000;\n    padding: 0 10px;\n    margin: 5px 0;\n"]);return B=function(){return n},n}var J=x.b.input(B());function V(){var n=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start !important;\n    width: 100%;\n\n    i {\n        color #f00;\n        cursor: pointer;\n    }\n"]);return V=function(){return n},n}var W=x.b.div(V());function $(){var n=Object(g.a)(["\n    width: 40%;\n    height: 50px;\n    background-color: #46b3e6;\n    color: #fff;\n    font-size: 18px;\n    border: 0;\n    cursor: pointer;\n\n    @media (max-width: 500px) {\n        font-size: 16px;\n    }\n"]);return $=function(){return n},n}var G=x.b.button($());function H(){var n=Object(g.a)(["\n    position: absolute;\n    display: flex;\n    justify-content: space-between;\n    width: calc(100% - 30px);\n    height: 60px;\n"]);return H=function(){return n},n}var K=x.b.div(H());function L(){var n=Object(g.a)(["\n    display: flex;\n    align-items: center;\n    button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 15px;\n        margin-left: 5px;\n        color: #fff;\n        cursor: pointer;\n        border: 0;\n\n        i {\n            width: 18px;\n            color: #46b3e6;\n            background-color: #fff;\n        }\n    }\n"]);return L=function(){return n},n}var X=x.b.div(L());function Y(){var n=Object(g.a)(["\n    width: 100%;\n    min-height: calc(100% - 430px);\n    height: 200px;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #d3d3d3;\n    }\n"]);return Y=function(){return n},n}var nn=x.b.div(Y());function en(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function tn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?en(t,!0).forEach((function(e){Object(Q.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):en(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var rn=function(){var n=Object(p.b)(),e=Object(a.useState)(""),t=Object(U.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)({name:"",description:""}),l=Object(U.a)(c,2),u=l[0],s=l[1],f=Object(a.useState)({question:"",textAnswers:"",answers:[],correct:""}),d=Object(U.a)(f,2),b=d[0],m=d[1],h=Object(a.useState)({add:[]}),g=Object(U.a)(h,2),x=g[0],v=g[1],w=function(n){n.preventDefault(),b.answers.length>=4&&b.correct&&b.question&&(m(tn({},b,{question:"",answers:[],textAnswers:"",correct:""})),v(tn({},x,{add:[].concat(Object(R.a)(x.add),[{answers:b.answers,correct:b.correct,question:b.question}])})),i("")),b.question||i("Por favor, adicione uma pergunta!"),b.correct||i("Por favor, adicione uma resposta correta!"),b.answers.length<4&&i("Por favor, adicione pelo menos 4 respostas!")},O=function(e){e.preventDefault(),x.add.length<1&&i("Por favor, adicione pelo menos 1 pergunta!"),n(function(n){var e=n.name,t=n.description,r=n.questions;return function(n){n({type:"SET_QUIZ",data:{_id:Math.floor(0x8bbbe634f741e0000*Math.random()),name:e,description:t,questions:r}})}}({name:u.name,description:u.description,questions:x.add})),window.location="/"};return o.a.createElement(T,null,o.a.createElement("label",{htmlFor:"name"},"Nome:"),o.a.createElement(J,{"data-testid":"name",name:"name",required:!0,onChange:function(n){return s(tn({},u,{name:n.target.value}))}}),o.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:"),o.a.createElement(J,{"data-testid":"description",name:"description",required:!0,onChange:function(n){return s(tn({},u,{description:n.target.value}))}}),o.a.createElement("label",{htmlFor:"question"},"Pergunta:"),o.a.createElement(J,{"data-testid":"question",name:"question",value:b.question,onChange:function(n){return m(tn({},b,{question:n.target.value}))}}),o.a.createElement("label",{htmlFor:"correct"},"Resposta correta:"),o.a.createElement(J,{"data-testid":"correct",name:"correct",value:b.correct,onChange:function(n){return m(tn({},b,{correct:n.target.value}))}}),o.a.createElement(X,null,o.a.createElement("label",{htmlFor:"answers"},"Respostas:"),o.a.createElement("button",{type:"button",onClick:function(n){return function(n){b.textAnswers.trim()&&m(tn({},b,{answers:[].concat(Object(R.a)(b.answers),[{_id:Math.floor(13215610236456413e7*Math.random()),name:b.textAnswers}])})),n.preventDefault()}(n)},"data-testid":"create-answers"},o.a.createElement("i",{className:"fas fa-plus-circle"}))),o.a.createElement(J,{"data-testid":"answers",value:b.textAnswers,name:"answers",onChange:function(n){return function(n){m(tn({},b,{textAnswers:n.target.value}))}(n)}}),o.a.createElement("small",{style:{color:"#f05"}},r),o.a.createElement(nn,{"data-testid":"content-answers"},b.answers.length>=1&&b.answers.map((function(n,e){return o.a.createElement(W,{key:e},o.a.createElement("span",null,"Resposta: ",n.name," ",o.a.createElement("i",{onClick:function(){m(tn({},b,{answers:Object(R.a)(b.answers.filter((function(e){return e.name!==n.name})))}))},className:"fas fa-minus-circle"})))}))),o.a.createElement(K,null,o.a.createElement(G,{"data-testid":"create-quiz",onClick:function(n){return O(n)}},"Criar"),o.a.createElement(G,{"data-testid":"create-more-answers",onClick:function(n){return w(n)}},"Adicionar Pergunta")))},an=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(I,null,o.a.createElement(N,null,o.a.createElement(rn,null))))};function on(){var n=Object(g.a)(["\n    width: 100%;\n    height: calc(100% - 60px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return on=function(){return n},n}var cn=x.b.div(on());function ln(){var n=Object(g.a)(["\n    width: 500px;\n    height: calc(100% - 60px);\n    max-height: 800px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background-color: #fff;\n    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);\n    margin: 60px 0;\n\n    @media (max-width: 500px) {\n        width: 90%;\n        margin: 30px 5%;\n        min-height: 400px;\n    }\n"]);return ln=function(){return n},n}var un=x.b.div(ln());function sn(){var n=Object(g.a)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    text-align: center;\n    border-bottom: 4px solid #e7ecef;\n    padding-bottom: 6px;\n\n    h2 {\n        width: 100px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-size: 16px;\n    }\n\n    span {\n        :nth-of-type(1) {\n            position: absolute;\n            left: 15px;\n            white-space: nowrap;\n            font-size: 14px;\n        }\n        :nth-of-type(2) {\n            position: absolute;\n            right: 15px;\n            white-space: nowrap;\n            font-size: 14px;\n        }\n    }\n"]);return sn=function(){return n},n}var fn=x.b.div(sn());function dn(){var n=Object(g.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 4px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #d3d3d3;\n    }\n"]);return dn=function(){return n},n}var pn=x.b.div(dn());function bn(){var n=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #e7ecef;\n\n    h3 {\n        padding-top: 10px;\n    }\n\n    button {\n        border: 0;\n        height: 40px;\n        cursor: pointer;\n    }\n"]);return bn=function(){return n},n}var mn=x.b.form(bn());function hn(){var n=Object(g.a)(["\n    background-color: ",";\n    background-color: ",";\n    color: ",";\n    color: ",";\n"]);return hn=function(){return n},n}var gn=x.b.button(hn(),(function(n){return n.correct&&"#b4be58"}),(function(n){return n.incorrect&&"#ff6060"}),(function(n){return n.correct&&"#fff"}),(function(n){return n.incorrect&&"#fff"}));function xn(){var n=Object(g.a)(["\n    display: flex;\n    align-items: center;\n    padding: 10px 0;\n\n    button {\n        width: 100%;\n    }\n\n    p {\n        margin-left: 10px;\n    }\n"]);return xn=function(){return n},n}var vn=x.b.div(xn()),wn=function(){var n=Object(p.c)((function(n){return n.quiz}));console.log(n);var e=Object(a.useState)([]),t=Object(U.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)([]),l=Object(U.a)(c,2),u=l[0],s=l[1],f=Object(a.useState)([]),d=Object(U.a)(f,2),b=d[0],m=d[1],g=Object(a.useState)([]),x=Object(U.a)(g,2),v=x[0],w=x[1],O=Object(a.useState)(0),j=Object(U.a)(O,2),E=j[0],y=j[1],k=Object(h.g)(),q=n.quiz.filter((function(n){return String(n._id)===k.id}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(cn,null,o.a.createElement(un,null,o.a.createElement(fn,null,o.a.createElement("span",null,q&&q[0].questions.length>1?"Perguntas:":"Pergunta:"," ",q&&q[0].questions.length),o.a.createElement("h2",{title:q&&q.map((function(n){return n.name}))},q&&q.map((function(n){return n.name})))," ",o.a.createElement("span",null,"R. certas: ",E)),o.a.createElement(pn,null,q&&q[0].questions.map((function(n){return o.a.createElement(mn,{key:n.question},o.a.createElement("h3",null,"Pergunta: ",n.question),o.a.createElement("br",null),n.answers.map((function(e,t){return o.a.createElement(vn,{key:t},o.a.createElement(gn,{"data-testid":"option",type:"button",correct:b.find((function(n){return n._id===e._id})),incorrect:v.find((function(n){return n._id===e._id})),disabled:r.find((function(e){return e===n.question})),onClick:function(){return function(n,e,t){s([].concat(Object(R.a)(u),[e])),n===e.name?(y(E+1),m([].concat(Object(R.a)(b),[e])),i([].concat(Object(R.a)(r),[t]))):(w([].concat(Object(R.a)(v),[e])),i([].concat(Object(R.a)(r),[t])))}(n.correct,e,n.question)}},o.a.createElement("p",null,e.name)))})))}))))))},On=function(){return o.a.createElement(m.a,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,component:A}),o.a.createElement(h.a,{path:"/create",component:an}),o.a.createElement(h.a,{path:"/quiz/:id",component:wn})))},jn=function(){return o.a.createElement(On,null)};function En(){var n=Object(g.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n        font-family: 'Poppins', sans-serif;\n    }\n\n    html, body, #root {\n        height: 100vh;\n    }\n\n    body {\n        overflow-y: hidden;\n        -webkit-font-smoothing: antialiased !important;\n        background-color: #e7ecef;\n    }\n"]);return En=function(){return n},n}var yn=Object(x.a)(En());function kn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function qn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?kn(t,!0).forEach((function(e){Object(Q.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Pn={quiz:[]},zn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_QUIZ":return qn({},n,{quiz:[].concat(Object(R.a)(n.quiz),[e.data])});case"REMOVE_QUIZ":return qn({},n,{quiz:Object(R.a)(n.quiz.filter((function(n){return n._id!==e.data})))});default:return n}},Sn={key:"root",storage:d.a},Dn=Object(s.a)(Sn,Object(u.c)(r)),_n=Object(u.d)(Dn,Object(u.a)(l.a)),Cn=Object(s.b)(_n);c.a.render(o.a.createElement(p.a,{store:_n},o.a.createElement(b.a,{loading:null,persistor:Cn},o.a.createElement(jn,null),o.a.createElement(yn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9da974dc.chunk.js.map