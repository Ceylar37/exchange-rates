(this["webpackJsonpexchange-rates"]=this["webpackJsonpexchange-rates"]||[]).push([[0],{176:function(e,r,t){"use strict";t.r(r);var c=t(0),n=t(18),s=t.n(n),u=(t(97),t(98),t(25)),a=t(61),o=t.n(a),i=t(78),j=t(41),l=t(55),d=t.n(l),b="27b6fd44b20851862a460b1af37d2601",f=function(){return d.a.ajax({url:"http://data.fixer.io/api/symbols?access_key="+b,method:"get",success:function(e){if(!e.success)throw new Error("Server Error");return e}})},h=function(){return d.a.ajax({url:"http://data.fixer.io/api/latest?access_key="+b+"&format=1",method:"get",success:function(e){if(!e.success)throw new Error("Server Error");return e}})},y=function(){return d.a.ajax({url:"http://country.io/currency.json",method:"get",success:function(e){return e}})},x=Object(j.c)({name:"currency",initialState:{currencies:[],selectedCurrency:{country:"",symbol:"",rate:0}},reducers:{setCurrencies:function(e,r){e.currencies=r.payload.currencies},setSelectedCurrency:function(e,r){var t=e.currencies.find((function(e){return e.country===r.payload.country}));t&&(e.selectedCurrency=t)}}}),O=x.reducer,p=x.actions,m=Object(j.b)("currency/requestCurrenciesAndPull",function(){var e=Object(i.a)(o.a.mark((function e(r,t){var c,n,s,u,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return c=e.sent,n=c.symbols,e.next=6,h();case 6:return s=e.sent,u=s.rates,e.next=10,y();case 10:a=e.sent,i=Object.keys(a).map((function(e){return{rate:u[a[e]],symbol:n[a[e]],country:e}})),t.dispatch(p.setCurrencies({currencies:i}));case 13:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),g=t(180),w=t(181),v=t(182),C=t(178),E=t(6),S=C.a.Option,k=function(e){var r=e.currencies,t=Object(u.b)();return Object(E.jsx)(g.a,{justify:"center",children:Object(E.jsx)(C.a,{showSearch:!0,style:{width:200},placeholder:"Select a currency",optionFilterProp:"children",onChange:function(e){t(p.setSelectedCurrency({country:e}))},filterOption:function(e,r){try{return(null===r||void 0===r?void 0:r.children[1].toLowerCase().indexOf(e.toLowerCase()))>=0}catch(t){return!1}},children:r.map((function(e){return Object(E.jsxs)(S,{value:e.country,children:[Object(E.jsx)("img",{src:"https://flagcdn.com/16x12/".concat(e.country.toLowerCase(),".png")}),e.symbol]},e.country)}))})})},L=u.c,F=function(){var e=L((function(e){return e.currency.selectedCurrency}));return Object(E.jsx)(E.Fragment,{children:e.country&&Object(E.jsx)(g.a,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)(g.a,{children:Object(E.jsx)("img",{src:"https://flagcdn.com/256x192/".concat(e.country.toLowerCase(),".png")})}),Object(E.jsx)(g.a,{children:Object(E.jsx)("strong",{children:e.symbol})}),Object(E.jsx)(g.a,{children:Object(E.jsxs)("span",{children:["Rate to Euro : ",e.rate]})})]})})})},J=function(){var e=Object(u.b)(),r=L((function(e){return e.currency.currencies}));return Object(c.useEffect)((function(){e(m())}),[]),Object(E.jsx)(g.a,{justify:"center",children:r.length?Object(E.jsxs)(w.a,{children:[Object(E.jsx)(k,{currencies:r}),Object(E.jsx)(F,{})]}):Object(E.jsx)(v.a,{size:"large"})})},P=Object(j.a)({reducer:{currency:O}});s.a.render(Object(E.jsx)(u.a,{store:P,children:Object(E.jsx)(J,{})}),document.getElementById("root"))},98:function(e,r,t){}},[[176,1,2]]]);
//# sourceMappingURL=main.764e9fcc.chunk.js.map