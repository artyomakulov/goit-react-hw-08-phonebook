"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{3304:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9439),r=n(2791),s=n(5218),c=n(3715),i="Form_formSection__tiVog",o="Form_input__FTtTw",l=n(2733),u=n(184);var d=function(){var e=(0,l.Tn)(),t=(0,a.Z)(e,1)[0],n=(0,l.Jx)().data,d=void 0===n?[]:n,m=(0,r.useState)(""),h=(0,a.Z)(m,2),f=h[0],p=h[1],x=(0,r.useState)(""),v=(0,a.Z)(x,2),_=v[0],j=v[1],b=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?p(a):j(a)},C=function(){p(""),j("")};return(0,u.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),d.map((function(e){return e.name.toLowerCase()})).includes(f.toLowerCase()))?alert("".concat(f," is already in contact")):(t({name:f,number:_}),C(),s.ZP.success("\u0421ontact added successfully!"))},className:i,children:[(0,u.jsxs)("label",{children:["Name"," ",(0,u.jsx)("input",{type:"text",name:"name",value:f,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:o})]}),(0,u.jsxs)("label",{children:["Number"," ",(0,u.jsx)("input",{type:"tel",name:"number",value:_,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:o})]}),(0,u.jsx)(c.Z,{variant:"contained",type:"submit",disabled:""===f||""===_,children:"Add contact"})]})},m="App_section__a1Jg4",h=n(5048),f=n(1993);function p(){var e=(0,h.v9)((function(e){return e.filter})),t=(0,h.I0)();return(0,u.jsxs)("label",{children:[(0,u.jsx)("h3",{children:"Filter by name "}),(0,u.jsx)("input",{onChange:function(e){t((0,f.T)(e.currentTarget.value))},type:"text",name:"filter",value:e})]})}var x="Contacts_ContactList__tFy-k",v="Contacts_ContactList_item__PAPEU",_="Contacts_ContactList_btn__8xo+S";function j(){var e=(0,l.Jx)().data,t=void 0===e?[]:e;console.log("contacts",t);var n=(0,l.Nt)(),r=(0,a.Z)(n,1)[0],i=(0,h.v9)((function(e){return e.filter})),o=function(){var e=i.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ol",{className:x,children:o.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,u.jsxs)("li",{className:v,children:[(0,u.jsxs)("p",{children:[n,": ",a]}),(0,u.jsx)(c.Z,{variant:"contained",className:_,onClick:function(){return r(t),s.ZP.error("\u0421ontact deleted successfully!")},type:"button",children:"Delete"})]},t)}))})})}var b=function(){return(0,u.jsxs)("div",{className:m,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(d,{})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(p,{}),(0,u.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=304.366e0b44.chunk.js.map