(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),r=a(19),i=a.n(r),o=a(17),l=a(8),j=a.n(l),d=a(12),u=a(7),h=(a(27),a(10)),b=a(2),m=function(){return Object(s.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-danger",children:Object(s.jsx)("a",{className:"navbar-brand",href:"/Pokedex/",children:"Pokedex"})})},p=function(e){return Object(s.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(s.jsxs)("div",{className:"container-fluid",id:"jumbotron-texto",children:[Object(s.jsx)("h1",{className:"display-4",children:"Hola!"}),Object(s.jsx)("p",{className:"lead",children:"Esta aplicaci\xf3n te va a mostrar todos los Pokemones con sus respectivas habilidades."}),Object(s.jsx)("hr",{className:"my-4"}),Object(s.jsx)("p",{children:"Pok\xe9mon are the creatures that inhabit the world of the Pok\xe9mon games. They can be caught using Pok\xe9balls and trained by battling with other Pok\xe9mon. Each Pok\xe9mon belongs to a specific species but may take on a variant which makes it differ from other Pok\xe9mon of the same species, such as base stats, available abilities and typings."}),Object(s.jsxs)("p",{className:"lead",children:["Hay un total de ",Object(s.jsx)("strong",{id:"total-pokemones",children:e.total})," ","Pokemones. Consultalos en el siguiente cat\xe1logo."]})]})})},x=function(e){for(var t=e.pokemonesPerPage,a=e.pokemonesTotales,c=e.paginate,n=[],r=1;r<=Math.ceil(a/t);r++)n.push(r);return Object(s.jsx)("div",{id:"div-pagination",children:Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(s.jsx)("li",{className:"page-item",children:Object(s.jsx)(h.b,{to:"/Pokedex/"+e,children:Object(s.jsx)("a",{onClick:function(){return c(e)},href:e,className:"page-link text-danger",children:e})})},e)}))})})})},O=function(e){var t=e.match,a=(e.currentPage,Object(c.useState)(!0)),n=Object(u.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)({}),l=Object(u.a)(o,2),h=l[0],b=l[1],m=t.path.slice(3);return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/",e.next=3,fetch("https://cors-anywhere.herokuapp.com/"+g+m);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent;try{b(a),i(!1)}catch(s){console.error(s)}case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(s.jsx)("div",{className:"container-fluid",children:r?Object(s.jsx)("h1",{children:"Cargando data..."}):Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("p",{className:"h1",children:["Stats para ",f(h.name),":"," "]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("img",{src:h.sprites.front_default,className:"img-thumbnail",alt:"..."})})})})]})}),Object(s.jsxs)("div",{className:"container-fluid",id:"stats, peso y tipo",children:[Object(s.jsx)("div",{className:"row",id:"types",children:Object.keys(h.types).map((function(e,t){return Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("p",{className:"h4",children:["Type #",t+1,":"," ",f(h.types[e].type.name)," "]})})}))}),Object(s.jsxs)("div",{className:"row",id:"height and weight",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("p",{className:"h4",children:["Height: ",h.height," "]})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("p",{className:"h4",children:["Weight: ",h.weight," "]})})]}),Object(s.jsx)("div",{className:"row",id:"stats",children:Object.keys(h.stats).map((function(e){return Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("ul",{className:"list-group",children:Object(s.jsxs)("li",{className:"list-group-item align-items-center",children:[f(h.stats[e].stat.name),":"," ",Object(s.jsx)("span",{className:"badge badge-primary badge-pill",children:h.stats[e].base_stat})]},e)})})}))})]})]})})};function f(e){return e=e.charAt(0).toUpperCase()+e.slice(1)}var v=function(e){for(var t=e.pokemones,a=e.currentPage,c=e.handleButtonID,n=[],r=0;r<t.length;r++)n.push(r);return Object(s.jsx)("div",{className:"container-fluid",id:"tabla-pokemones",children:Object(s.jsx)("div",{className:"row",children:n.map((function(e,n){return Object(s.jsx)("div",{className:"col-3",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"h-25 w-50",children:Object(s.jsx)("img",{className:"card-img-top",src:t[n].sprite,alt:null===t[n].sprite?"Sprite no disponible para este Pokemon":"Cargando sprite..."})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:f(t[n].name)}),Object(s.jsx)(h.b,{to:"/"+a+"/"+f(t[n].name),children:Object(s.jsx)("a",{href:"/Pokedex/"+a+"/"+t[n].name,className:"btn btn-primary","data-id":t[n].name,onClick:c,children:"Ver detalles"},t[n].name)})]})]})},n)}))})})},g="https://pokeapi.co/api/v2/pokemon/",N=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(u.a)(r,2),l=i[0],f=i[1],N=Object(c.useState)(20),k=Object(u.a)(N,1)[0],y=Object(c.useState)(null),P=Object(u.a)(y,2),w=P[0],S=P[1],C=Object(c.useState)(1),E=Object(u.a)(C,2),T=E[0],B=E[1],H=Object(c.useState)(!0),I=Object(u.a)(H,2),_=I[0],D=I[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"?offset=").concat((T-1)*k,"&limit=").concat(k)).then((function(e){return e.json()})).then((function(e){return e.results}));case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(){var e=Object(d.a)(j.a.mark((function e(a,s){var c,n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.url);case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.next=8,n.sprites;case 8:r=e.sent,i=r.front_default,t[s].sprite=i;case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 5:return e.next=7,fetch(g);case 7:return a=e.sent,e.next=10,a.json();case 10:return s=e.sent,e.next=13,s.count;case 13:c=e.sent,n(c),f(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{D(!0),e(),D(!1)}catch(t){console.log(t)}}),[T,k]);return Object(s.jsxs)(h.a,{children:[Object(s.jsx)(m,{}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/Pokedex"+T+"/"+w,render:function(e){return Object(s.jsx)(O,Object(o.a)(Object(o.a)({},e),{},{currentPage:T}))}}),Object(s.jsxs)(b.a,{path:"/Pokedex",children:[Object(s.jsx)(p,{total:a}),_?Object(s.jsx)("p",{className:"h1",children:"Cargando data de los Pokemones..."}):Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(v,{pokemones:l,currentPage:T,handleButtonID:function(e){return S(e.currentTarget.dataset.id)}}),Object(s.jsx)(x,{pokemonesPerPage:k,pokemonesTotales:a,paginate:function(e){return B(e)}})]})]})]})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b9c685a2.chunk.js.map