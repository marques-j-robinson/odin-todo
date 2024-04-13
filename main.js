(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbody {\n    max-width: 960px;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 40px;\n}\n\n.hide {\n    display: none;\n}\n\n#projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.project__header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 20px 0;\n    width: 100%;\n}\n\n.project__details {\n    width: 50%;\n}\n\n.project__name {\n    font-size: 24px;\n}\n\n.project__todos {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.todos__list {\n    display: grid;\n    gap: 20px;\n    width: 80%;\n    margin: 20px auto;\n}\n\n.todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.btn__new-task {\n    width: 50%;\n    margin: 0 auto;\n}\n",""]);const c=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],c=0;c<e.length;c++){var d=e[c],i=o.base?d[0]+o.base:d[0],l=a[i]||0,p="".concat(i," ").concat(l);a[i]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var d=o(e,r),i=0;i<a.length;i++){var l=n(a[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),a=n(659),s=n.n(a),c=n(56),d=n.n(c),i=n(540),l=n.n(i),p=n(113),u=n.n(p),m=n(208),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const v=()=>(localStorage.projects||localStorage.setItem("projects",JSON.stringify([])),JSON.parse(localStorage.projects)),h=(e,{name:t,description:n,todos:o})=>{const r=v();r[e]={...r[e],name:t||r[e].name,description:n||r[e].description,todos:o||r[e].todos},localStorage.setItem("projects",JSON.stringify(r))},_=(e,t,n,o,r)=>{const a=document.createElement("div");a.classList.add("todo");const s=(({title:e,description:t,dueDate:n,priority:o})=>{const r=document.createElement("div");r.classList.add("todo__details");const a=document.createElement("p");a.classList.add("todo__title"),a.innerText=e,r.append(a);const s=document.createElement("input");s.classList.add("todo__title-input"),s.classList.add("hide"),s.placeholder=e,r.append(s);const c=document.createElement("p");c.classList.add("todo__description"),c.innerText=t,r.append(c);const d=document.createElement("input");d.classList.add("todo__description-input"),d.classList.add("hide"),d.placeholder=t,r.append(d);const i=document.createElement("p");i.classList.add("todo__duedate"),i.innerText=n,r.append(i);const l=document.createElement("input");l.classList.add("todo__duedate-input"),l.classList.add("hide"),l.type="date",l.value=n,r.append(l);const p=document.createElement("p");p.classList.add("todo__priority"),p.innerText=o?1===o?"medium":"high":"low",r.append(p);const u=document.createElement("input");return u.classList.add("todo__priority-input"),u.classList.add("hide"),u.type="range",u.min=0,u.max=2,u.value=o,r.append(u),r})(o);return a.append(s),a.append(((e,t,n,o,r)=>{const a=document.createElement("div");a.classList.add("todo__actions");const s=r.querySelector(".todo__title"),c=r.querySelector(".todo__title-input"),d=r.querySelector(".todo__description"),i=r.querySelector(".todo__description-input"),l=r.querySelector(".todo__duedate"),p=r.querySelector(".todo__duedate-input"),u=r.querySelector(".todo__priority"),m=r.querySelector(".todo__priority-input"),f=document.createElement("button");f.innerText="Save",f.classList.add("hide"),a.append(f);const v=document.createElement("button");v.innerText="Edit",a.append(v),f.addEventListener("click",(()=>{n[o]={...n[o],title:c.value||c.placeholder,description:i.value||i.placeholder,dueDate:p.value||null,priority:Number(m.value)||0},h(t,{todos:n}),L()})),v.addEventListener("click",(()=>{v.classList.add("hide"),s.classList.add("hide"),d.classList.add("hide"),l.classList.add("hide"),u.classList.add("hide"),f.classList.remove("hide"),c.classList.remove("hide"),i.classList.remove("hide"),p.classList.remove("hide"),m.classList.remove("hide")}));const _=document.createElement("button");return _.innerText="Delete",_.addEventListener("click",(()=>{n.splice(o,1),h(t,{todos:n}),L()})),a.append(_),a})(0,t,n,r,s)),a},y=(e,t)=>{const n=document.createElement("div");n.classList.add("project");const o=(({name:e,description:t})=>{const n=document.createElement("div");n.classList.add("project__details");const o=document.createElement("p");o.classList.add("project__name"),o.innerText=e,n.append(o);const r=document.createElement("input");r.classList.add("project__name-input"),r.classList.add("hide"),r.placeholder=e,n.append(r);const a=document.createElement("p");a.classList.add("project__description"),a.innerText=t,n.append(a);const s=document.createElement("textarea");return s.classList.add("project__description-input"),s.classList.add("hide"),s.placeholder=t,n.append(s),n})(e),r=((e,t)=>{const n=document.createElement("div");return n.classList.add("project__header"),n.append(e),n.append(t),n})(o,((e,t)=>{const n=document.createElement("div");n.classList.add("project__actions");const o=t.querySelector(".project__name"),r=t.querySelector(".project__name-input"),a=t.querySelector(".project__description"),s=t.querySelector(".project__description-input"),c=document.createElement("button");c.innerText="Save",c.classList.add("hide"),n.append(c);const d=document.createElement("button");d.innerText="Edit",n.append(d),c.addEventListener("click",(()=>{const t={name:r.value||r.placeholder,description:s.value||s.placeholder};h(e,t),L()})),d.addEventListener("click",(()=>{d.classList.add("hide"),o.classList.add("hide"),a.classList.add("hide"),c.classList.remove("hide"),r.classList.remove("hide"),s.classList.remove("hide")}));const i=document.createElement("button");return i.innerText="Delete",i.addEventListener("click",(()=>{(e=>{const t=v();t.splice(e,1),localStorage.setItem("projects",JSON.stringify(t))})(e),L()})),n.append(i),n})(t,o));n.append(r);const a=((e,t,{todos:n})=>{const o=document.createElement("div");o.classList.add("project__todos");const r=document.createElement("div");r.classList.add("todos__list");const a=document.createElement("button");return a.classList.add("btn__new-task"),a.innerText="Create New Task",a.addEventListener("click",(()=>{n.push({title:"New Task",description:"About new task...",dueDate:null,priority:0}),h(t,{todos:n}),r.innerText="",n.forEach(((e,o)=>{r.append(_(0,t,n,e,o))}))})),o.append(a),r.innerText="",n.forEach(((e,o)=>{r.append(_(0,t,n,e,o))})),o.append(r),o})(projects,t,e);return n.append(a),n},L=()=>{const e=document.querySelector("#projects");e.innerText="";const t=v();for(let n=t.length-1;n>=0;--n)e.append(y(t[n],n))};document.querySelector("#createNewProject").addEventListener("click",(()=>{(()=>{const e=v();e.push({name:"New Project",description:"About new project...",todos:[]}),localStorage.setItem("projects",JSON.stringify(e))})(),L()})),L()})()})();