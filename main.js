(()=>{"use strict";var e={333:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'      * {\n        outline: none;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n\n      html {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n      }\n\n      body {\n        padding: 0.5rem;\n        margin: 0.5rem;\n        background-color: #f5f5f5;\n        font-family: "Source Sans Pro", sans-serif;\n      }\n\n      /* selects all containers with id number suffix*/\n      [id^="container"] {\n        padding: 10px;\n        margin: 5px;\n        background-color: #fff;\n        border-radius: 0.8rem;\n        overflow: hidden;\n        box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n        transition: 0.2s;\n      }\n\n      #item-score{\n          width: 100%;\n          height:100%;\n      }\n\n      /* set min width of each container here - 300px*/\n      #grid-container {\n        width: 99%;\n        display: grid;\n        grid-gap: 10px;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      }\n      .button-layout {\n        width: 99%;\n        display: grid;\n        grid-gap: 15px;\n        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n        padding: 25px;\n      }\n\n      @media screen and (max-width: 705px) {\n        .button-layout {\n          grid-gap: 10px;\n          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n          padding: 15px;\n        }\n\n        .switch-container {\n          padding: 10px auto;\n          margin-left: 35%;\n        }\n      }\n\n      .ySelectButton {\n        position: sticky;\n        bottom: 10px;\n        background-color: #ff5232;\n        border: 0;\n        margin: auto;\n        padding: 10px 30px;\n        color: #fff;\n        font-size: 12px;\n        font-weight: 600;\n        border-radius: 20px;\n        flex-shrink: 0;\n        z-index: 1;\n        cursor: pointer;\n      }\n      .ySelectButton:hover {\n        font-weight: bold;\n        cursor: pointer;\n      }\n\n      .ySelectButtonClicked{\n        background-color: white;\n        color: #ff5232;\n        border: 2px solid #ff5232;\n      }\n\n      .ySelectButton::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        width: 0;\n        height: 0;\n      }\n      /*remove blue outlien ::After.focus*/\n\n      .switch-container #switch, #switch-item {\n        display: none;\n        padding: 25px;\n        margin: 10px;\n      }\n\n      .switch-container .switch-label {\n        position: relative;\n        cursor: pointer;\n        margin: 20px;\n      }\n      .switch-container .switch-label .switch-rail {\n        transition: all 0.2s ease-in-out;\n        position: absolute;\n        align-items: center;\n        width: 60px;\n        height: 30px;\n        background: #696969;\n        border-radius: 50px;\n        overflow: hidden;\n      }\n      .switch-container .switch-label .switch-rail .switch-slider {\n        transition: all 0.2s ease-in-out;\n        position: absolute;\n        top: 4px;\n        left: 4px;\n        width: 22px;\n        height: 22px;\n        border-radius: 50%;\n        background: #fff;\n      }\n      .switch-container #switch:checked + .switch-label .switch-rail {\n        transition: all 0.2s ease-in-out;\n        background: #ff5232;\n      }\n      .switch-container\n        #switch:checked\n        + .switch-label\n        .switch-rail\n        .switch-slider {\n        transition: all 0.2s ease-in-out;\n        transform: translateX(30px);\n      }\n\n      #switch-text {\n        position: relative;\n        width: 49%;\n        padding: 10px 10px 40px 10px;\n        border-radius: 10px;\n        margin: 10px auto;\n        text-align: center;\n      }',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=f||(f=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=[["user343",5.5,2,55,0,0,1,1,1,NaN,1],["user213",8.1,1.5,34,1,1,null,void 0,1,1,1],["user3",3.2,3,77,1,0,0,1,1,1,1],["user333",4.3,4,38,0,1,1,1,0,1,1],["user334",7.1,2,66,0,1,1,0,1,0,1],["user2",5.3,3,78,1,1,0,1,0,1,1],["user37",2.3,6,18,0,1,1,1,0,1,1],["user363",7.7,6,88,0,1,1,0,1,1,1],["user373",6.7,9,88,0,1,1,0,0,1,1],["user3439",1.7,.5,28,0,1,0,0,0,1,0],["user3435",2.7,4,88,0,0,1,0,0,1,1],["user3442",2.6,1,58,0,0,0,0,0,1,1],["user346573",3.7,2,38,0,1,1,0,0,1,1]],t={userUnitTests:["user373",6.7,9,88,0,0,0,0,0,1,1],itemData:[["user373",6.7,9,88,3],["user373",6.7,9,88,3],["user373",6.7,9,88,1],["user373",6.7,9,88,4]]};let r={skill:null,experience:null,percentage:null},o={unitTestDataBool:null,scatterData:!1,category:null};function i(e,n){let r=function(){let e=o.unitTestDataBool?t.userUnitTests:t.itemData;return!1===o.unitTestDataBool?function(e){let t=e[1][o.category],n=[];return e.map((e=>n.push([e[4],t]))),n}(e):!0===o.unitTestDataBool&&function(e,t){let n=t[o.category],r=[];return e.map((e=>r.push([[e,n]]))),r}(e.slice(4),e)}();!function(e,t){t.addSeries({name:"Your data",color:"#ff5232",tooltip:{pointFormat:f("y")+"<b> {point.y}</b>",valueDecimals:2},marker:{symbol:"circle",radius:6},type:"scatter",data:e})}(o.unitTestDataBool?r[e]:r,n)}function a(e,t){t.addSeries({name:"Individual Results",color:"grey",type:"scatter",data:e[1],jitter:{x:.14},marker:{fillColor:"rgba(191, 191, 191, 0.8)"},tooltip:{pointFormat:"Observation: {point.y}"}})}const s=["Skill score","Experience (years)","% correct"],c=["Unit tests","Item score Categories"],l=["Failed","Passed"],u=["Speed","OO","Refactoring","Implimentations","Unit tests","Regression"],d=["test1","test2","test3","test4","test5","test6","test7"];function p(e){let t=0;if(o.unitTestDataBool)e.forEach((e=>{let n=m(t,e);t++,!0===o.scatterData&&a(n[0],n[1])}));else{let n=m(t,e[0]);!0===o.scatterData&&a(n[0],n[1])}}function f(e){if("x"===e)switch(o.unitTestDataBool){case!0:return c[0];case!1:return c[1]}else if("y"===e)return s[o.category-1]}function h(){switch(o.category){case 1:return 9.9;case 2:return v;case 3:return 100}}function m(e,t){let n={chart:{type:"boxplot",renderTo:"container"+e.toString()},title:{text:d[e]},legend:{enabled:!0},credits:{enabled:!1},xAxis:{categories:l,title:{text:f("x")}},yAxis:{max:h(),title:{text:f("y")}},plotOptions:{boxplot:{fillColor:"#F2F2F2",lineWidth:2,medianColor:"#FF5232",medianWidth:3,stemColor:"#696969",stemWidth:1,whiskerColor:"#696969",whiskerLength:"20%",whiskerWidth:3,events:{legendItemClick:function(e){e.preventDefault()}}}},series:[{name:"Observations",color:"#ff5232",data:t[0],tooltip:{headerFormat:"Factor: <em>{point.key}</em><br/>",valueDecimals:2}}]};const r=new Highcharts.Chart(n);return i(e,r),function(e){!1===o.unitTestDataBool&&e.update({chart:{inverted:!0},title:{text:"Item Score"},xAxis:{reversed:!1,categories:u},legend:{enabled:!1}})}(r),[t,r]}function g(e,t){e.sort();const n=t*e.length;let r=0;return r=Math.floor(n)==n?(e[n-1]+e[n])/2:e[Math.floor(n)],r}function x(e){const t=e[0].length-4,n=[];for(let r=4;r<t+4;r++){const t=b(e,r);n.push(t)}return n}function b(e,t){let n=function(e){let t=function(e){let t=[];e.map((e=>t.push(e[1])));let n=[...new Set(t)],r=[null,NaN,void 0];return n.filter((e=>!r.includes(e)))}(e),n=[];return t.map((t=>n.push(function(e,t){let n=[];return t.map((t=>t[1]===e?n.push(t[0]):"")),n}(t,e)))),n}(function(e,t){let n=[];return e.map((e=>n.push([e[o.category],e[t]]))),n}(e,t));return[n.map((e=>function(e){const t=g(e,.25),n=function(e){const t=e.slice().sort(((e,t)=>e-t));return t.length%2==0?(t[t.length/2-1]+t[t.length/2])/2:t[Math.floor(t.length/2)]}(e),r=g(e,.75);return[function(e,t){let n=t-1.5*(e-t);return n<0?0:n}(r,t),t,n,r,function(e,t){let n=e+1.5*(e-t),r=h();return n>r?r:n}(r,t)]}(e))),function(e){let t=[];for(let n=0;n<e.length;n++)e[n].map((e=>t.push([n,e])));return t}(n)]}let v=function(e,t){let n=[];return e.map((e=>n.push(e[2]))),Math.max(...n)}(e);function y(){switch(o.category){case 1:return r.skill;case 2:return r.experience;case 3:return r.percentage}}const w=document.getElementById("skill");D(w);const k=document.getElementById("experience");D(k);const B=document.getElementById("percent");D(B);const S=[w,k,B];function D(e){e.addEventListener("click",(()=>{var t;(t=e).val!==o.category&&(t.classList.add("ySelectButtonClicked"),S.map((e=>t!==e?function(e){e.classList.contains("ySelectButtonClicked")&&e.classList.remove("ySelectButtonClicked")}(e):t))),function(e){let t=Number(e);t!==o.category&&(o.category=t,p(y()))}(e.value)}))}const T=document.getElementById("switch");T.addEventListener("change",(()=>{!0===T.checked?o.scatterData=!0:o.scatterData=!1,p(y())})),console.log(o.category),S[2].classList.add("ySelectButtonClicked");var C=n(379),E=n.n(C),I=n(333);function F(e){let t=document.createElement("div");t.id="container"+e.toString(),o.unitTestDataBool?document.getElementById("grid-container").append(t):document.getElementById("item-score").append(t)}E()(I.Z,{insert:"head",singleton:!1}),I.Z.locals,o.category=1,r.skill=x(e),o.category=2,r.experience=x(e),o.category=3,r.percentage=x(e);const M=y();!function(e){let t=e[1].slice(4);1===t.length?(o.unitTestDataBool=!1,console.log("Unit test data set detected: "+o.unitTestDataBool)):(t.map((e=>o.unitTestDataBool=0===e||1===e)),console.log("Unit test data set detected: "+o.unitTestDataBool))}(e),function(e){let t=0;o.unitTestDataBool?e.forEach((e=>{F(t),t++})):F(t)}(M),p(M)})()})();