(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{17:function(e,t,n){e.exports={button__delete:"ContactList_button__delete__12_sR"}},18:function(e,t,n){e.exports={input__filter:"Filter_input__filter__29T8e"}},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),o=n(2),a=n.n(o),u=n(4),l=(n(30),n(31),n(32),n(8)),s=n(17),f=n.n(s),j="ADD_CONTACTS",b="DELETE_CONTACTS",d="SET_FILTER",h=Object(u.b)((function(e){return{items:e.items,filter:e.filter}}),(function(e){return{onRemove:function(t){return e(function(e){return{type:b,payload:e}}(t))}}}))((function(e){var t=e.items,n=e.filter,c=e.onRemove;return 0===t.length?null:Object(r.jsx)("ul",{children:function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n).map((function(e){var t=e.id,n=e.name,i=e.phone;return Object(r.jsxs)("li",{children:[n," : ",i,Object(r.jsx)("button",{onClick:function(){c(t)},className:f.a.button__delete,children:"Delete"})]},t)}))})})),p=n(14),m=(n(33),n(39));var O=Object(u.b)((function(e){return{items:e.items}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:j,payload:e}}(t))}}}))((function(e){var t=e.items,n=e.onAdd,i=Object(c.useState)(""),o=Object(p.a)(i,2),a=o[0],u=o[1],s=Object(c.useState)(""),f=Object(p.a)(s,2),j=f[0],b=f[1],d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":u(r);break;case"phone":b(r);break;default:console.log("Sorry, we are not have "+n+".")}},h=function(){return a&&j?function(e,t){var n=!!e.find((function(e){return e.name===t}));return n&&alert("Contact is already exist"),!n}(t,a):(Object(l.b)("Some filed is empty"),!1)};return Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),h()){var t={id:Object(m.a)(),name:a,phone:j};n(t),u(""),b("")}},children:[Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:a,onChange:d}),Object(r.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:j,onChange:d}),Object(r.jsx)("button",{type:"submit",children:"Add Contact"})]})})),v=n(18),x=n.n(v),_=Object(u.b)((function(e){return{filter:e.filter}}),(function(e){return{handleFilterChange:function(t){return e({type:d,payload:t})}}}))((function(e){var t=e.filter,n=e.handleFilterChange;return Object(r.jsx)("input",{className:x.a.input__filter,type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter name for Search"})}));n(34);var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"From Contact"}),Object(r.jsx)(O,{}),Object(r.jsx)("h2",{children:"Contacts list"}),Object(r.jsx)(_,{}),Object(r.jsx)(h,{}),Object(r.jsx)(l.a,{})]})},C=n(5),g=n(19),S=n(15);var E=Object(C.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case j:return[].concat(Object(S.a)(e),[r]);case b:return Object(S.a)(e.filter((function(e){return e.id!==r})));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return d===n?r:e}}),T=Object(C.createStore)(E,Object(g.composeWithDevTools)());a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:T,children:Object(r.jsx)(y,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.069fe6e1.chunk.js.map