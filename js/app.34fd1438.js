(function(t){function e(e){for(var n,o,u=e[0],a=e[1],c=e[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);s&&s(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],n=!0,u=1;u<i.length;u++){var a=i[u];0!==r[a]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuebilling/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=a;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"041e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Bill",{attrs:{bills:t.bills},on:{"bill-item-changed":t.Changed,"bill-item-deleted":t.Delete}})],1)},l=[],o=(i("d81d"),i("4de4"),i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",[t.edit?t._e():i("tr",[i("th",[t._v("Név")]),i("th",[t._v("Ár")]),i("th",[t._v("Darabszám")]),i("th",[t._v("Operations")]),i("th",[t._v("Összérték")])])]),t._l(t.bills,(function(e){return i("BillItem",{key:e.title,attrs:{bill:e},on:{"bill-item-changed":t.Changed,"bill-item-deleted":t.Deleted}})}))],2)}),u=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[t.edit?t._e():i("tr",[i("td",[t._v(" "+t._s(t.title)+" ")]),i("td",[t._v(" "+t._s(t.price)+" ")]),i("td",[t._v(" "+t._s(t.quantity)+" ")]),i("td",[i("button",{on:{click:t.Delete}},[t._v("X")]),i("button",{on:{click:t.Edit}},[t._v("Edit")])]),i("td",[t._v(" "+t._s(t.price*t.quantity))])]),t.edit?t._e():i("tr",[t._m(0),t._m(1),t._m(2),i("td",[i("button",{on:{click:t.New}},[t._v("New")])])]),t.edit?i("tr",[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),i("td",[i("button",{on:{click:t.Save}},[t._v("Save")])])]):t._e()])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("input",{attrs:{type:"number"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("input",{attrs:{type:"number"}})])}],s={props:["bill"],data:function(){return{title:this.bill.title,price:this.bill.price,quantity:this.bill.quantity,edit:!1}},methods:{Edit:function(){this.edit=!0},Delete:function(){},Save:function(){this.edit=!1,this.$emit("bill-title-changed",{original:this.bill,new:{title:this.title}}),this.$emit("bill-price-changed",{original:this.bill,new:{price:this.price}}),this.$emit("bill-quantity-changed",{original:this.bill,new:{quantity:this.quantity}})}}},p=s,d=i("2877"),f=Object(d["a"])(p,a,c,!1,null,null,null),h=f.exports,b={props:["bills"],components:{BillItem:h},methods:{Changed:function(t){this.$emit("bill-title-changed",t),this.$emit("bill-price-changed",t),this.$emit("bill-quantity-changed",t)},Deleted:function(t){this.$emit("bill-item-deleted",t)}}},m=b,v=(i("5e6c"),Object(d["a"])(m,o,u,!1,null,null,null)),y=v.exports,_={name:"App",components:{Bill:y},data:function(){return{bills:[{title:"Kerék",price:100,quantity:12},{title:"Teleszkóp",price:1e3,quantity:300},{title:"Kormány",price:230,quantity:5},{title:"Ajtó",price:45120,quantity:321}]}},methods:{Changed:function(t){this.bills.map((function(e){if(e.title!=t.original.title||e.price!=t.original.price||e.quantity!=t.original.quantity)return e}))},Deleted:function(t){this.bills=this.bills.filter((function(e){return t.original!=e}))}}},g=_,w=(i("034f"),Object(d["a"])(g,r,l,!1,null,null,null)),q=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"5e6c":function(t,e,i){"use strict";i("041e")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.34fd1438.js.map