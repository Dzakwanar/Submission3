/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var n={705:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function t(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}function a(n){var e="function"==typeof Map?new Map:void 0;return a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,a)}function a(){return r(n,arguments,u(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,n)},a(n)}function r(n,e,t){return r=i()?Reflect.construct.bind():function(n,e,t){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(n,a));return t&&o(r,t.prototype),r},r.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function o(n,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},o(n,e)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var c=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&o(n,e)}(p,n);var a,r,c,s,l=(a=p,r=i(),function(){var n,e=u(a);if(r){var i=u(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return t(this,n)});function p(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return c=p,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n        * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n          }\n        :host {\n          display: block;\n          padding: 16px;\n          width: 100%;\n          background-color: #a13333 ;\n          /*  #a13333 */\n          color: white;\n          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n        }\n        \n        :host a {\n          color: #a13333 ;\n          background-color: white ;\n          /* white */\n          border-radius: 5px;\n        }\n\n        h2 {\n          padding: 16px;\n        }\n        </style>\n        \n        \n        <h2>Expre<a>Sinema</a></h2>"}}])&&e(c.prototype,s),Object.defineProperty(c,"prototype",{writable:!1}),p}(a(HTMLElement));customElements.define("app-bar",c)},998:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function t(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}function a(n){var e="function"==typeof Map?new Map:void 0;return a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,a)}function a(){return r(n,arguments,u(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,n)},a(n)}function r(n,e,t){return r=i()?Reflect.construct.bind():function(n,e,t){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(n,a));return t&&o(r,t.prototype),r},r.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function o(n,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},o(n,e)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var c=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&o(n,e)}(p,n);var a,r,c,s,l=(a=p,r=i(),function(){var n,e=u(a);if(r){var i=u(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return t(this,n)});function p(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return c=p,(s=[{key:"movie",set:function(n){this._movie=n,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n        * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        }\n\n          :host {\n            margin-bottom: 18px;\n            box-shadow: 0 4px 8px 0 #00000033;\n            border-radius: 10px;\n            overflow: hidden;\n            display: block;\n          }\n          \n          .fan-art-club {\n            width: 100%;\n            max-height: 300px;\n            object-fit: cover;\n            object-position: center;\n            \n          }\n          \n          .club-info {\n            padding: 24px;\n          }\n          \n          .club-info > h2 {\n            font-weight: lighter;\n            background-color: #a13333;\n            color: white;\n            text-align: center;\n            border-radius: 5px;\n          }\n          \n          .club-info > p {\n            margin-top: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 10;\n          }\n        </style>\n\n            <img class="fan-art-club" src="'.concat(this._movie.fanArt,'" alt="Fan Art">\n            <div class="club-info">\n                <h2>').concat(this._movie.name,"</h2>\n                <p>").concat(this._movie.description,"</p>\n            </div>\n        ")}}])&&e(c.prototype,s),Object.defineProperty(c,"prototype",{writable:!1}),p}(a(HTMLElement));customElements.define("movie-item",c)},484:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function t(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}function a(n){var e="function"==typeof Map?new Map:void 0;return a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,a)}function a(){return r(n,arguments,u(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,n)},a(n)}function r(n,e,t){return r=i()?Reflect.construct.bind():function(n,e,t){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(n,a));return t&&o(r,t.prototype),r},r.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function o(n,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},o(n,e)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var c=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&o(n,e)}(p,n);var a,r,c,s,l=(a=p,r=i(),function(){var n,e=u(a);if(r){var i=u(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return t(this,n)});function p(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return c=p,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n\n        <style>\n        .search-container {\n          max-width: 800px;\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          padding: 16px;\n          border-radius: 5px;\n          display: flex;\n          position: sticky;\n          top: 10px;\n          background-color: white;\n        }\n        \n        .search-container > input {\n          width: 75%;\n          padding: 16px;\n          border: 0;\n          border-bottom: 1px #A13333;\n          font-weight: bold;\n        }\n        \n        .search-container > input:focus {\n          outline: 0;\n          border-bottom: 2px solid #A13333;\n        }\n        \n        .search-container > input:focus::placeholder {\n          font-weight: bold;\n        }\n        \n        .search-container > input::placeholder {\n          color: #A13333;\n          font-weight: normal;\n        }\n        \n        .search-container > button {\n          width: 23%;\n          cursor: pointer;\n          margin-left: auto;\n          padding: 16px;\n          background-color: #a13333 ;\n          color: white;\n          border: 0;\n          text-transform: uppercase;\n          border-radius: 3px;\n        }\n        \n        @media screen and (max-width: 550px) {\n          .search-container {\n            flex-direction: column;\n            position: static;\n          }\n        \n          .search-container > input {\n            width: 100%;\n            margin-bottom: 12px;\n          }\n        \n          .search-container > button {\n            width: 100%;\n          }\n        }\n        </style>\n\n\n\n\n        <div id="search-container" class="search-container">\n          <input placeholder="search your fav movie" id="searchElement" type="search">\n          <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n      ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&e(c.prototype,s),Object.defineProperty(c,"prototype",{writable:!1}),p}(a(HTMLElement));customElements.define("search-bar",c)},982:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 90%;\r\n  max-width: 800px;\r\n  margin: 32px auto;\r\n}\r\n\r\nmovie-list {\r\n  margin-top: 32px;\r\n  width: 100%;\r\n  padding: 16px;\r\n  display: block;\r\n}\r\n\r\nmovie-list > .placeholder {\r\n  font-weight: lighter;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  \r\n}",""]);const u=o},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],u=0;u<n.length;u++){var c=n[u],s=a.base?c[0]+a.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var h=r(d,a);a.byIndex=u,e.splice(u,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var u=t(i[o]);e[u].references--}for(var c=a(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),a=t(795),r=t.n(a),i=t(569),o=t.n(i),u=t(565),c=t.n(u),s=t(216),l=t.n(s),p=t(589),f=t.n(p),d=t(982),h={};function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function y(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function b(n,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function g(n){var e="function"==typeof Map?new Map:void 0;return g=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,a)}function a(){return k(n,arguments,j(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),w(a,n)},g(n)}function k(n,e,t){return k=v()?Reflect.construct.bind():function(n,e,t){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(n,a));return t&&w(r,t.prototype),r},k.apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function w(n,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},w(n,e)}function j(n){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},j(n)}h.styleTagTransform=f(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals,t(705),t(998);var x=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&w(n,e)}(o,n);var e,t,a,r,i=(e=o,t=v(),function(){var n,a=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b(this,n)});function o(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return a=o,(r=[{key:"movie",set:function(n){this._movies=n,this.render()}},{key:"renderError",value:function(n){this.shadowDOM.innerHTML="\n        <style>\n           .placeholder {\n            font-weight: lighter;\n            color: rgba(0,0,0,0.5);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n          }\n        </style>\n      ",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(n,"</h2>")}},{key:"render",value:function(){var n=this;this.shadowDOM.innerHTML="",this._movies.forEach((function(e){var t=document.createElement("movie-item");t.movie=e,n.shadowDOM.appendChild(t)}))}}])&&y(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),o}(g(HTMLElement));customElements.define("movie-list",x);const O=[{name:"Gundala",fanArt:"https://akcdn.detik.net.id/visual/2019/08/09/863b706b-ca59-486a-98c6-5be297d48bb3_169.jpeg?w=650",description:"Sancaka (Muzakki Ramdhan) adalah putra seorang pekerja pabrik miskin yang berjuang untuk memenuhi kebutuhan hidup. Sancaka yang masih muda itu menunjukkan tanda-tanda kecemerlangan dalam mengutak-atik produk listrik, tetapi takut dengan petir dan badai yang seakan selalu mengincarnya. Ayah Sancaka (Rio Dewanto) memimpin rekan-rekan buruh pabriknya dalam sebuah protes terhadap pemilik pabrik, menuntut kenaikan gaji. Kelompok itu bertemu dengan penjaga bersenjata yang disewa oleh pemilik pabrik, lalu protes itu berubah menjadi anarkis. Pada protes kedua, ayah Sancaka dikhianati dan ditikam oleh rekan-rekannya yang telah disuap oleh pemilik pabrik dan meninggal di lengan Sancaka. Sancaka disambar oleh petir lalu meretakkan tameng para pasukan bersenjata sambil memegangnya, lalu saat orang-orang ingin menolongnya, mereka semua terlempar dan tersengat petir dari tubuh Sancaka. Setahun kemudian, ibu Sancaka (Marissa Anita) pergi ke kota lain untuk mencari pekerjaan. Dia berjanji untuk kembali keesokan harinya, tetapi tidak pernah kembali."},{name:"Serigala Terakhir",fanArt:"https://thumbor.prod.vidiocdn.com/MNm8n0F2Qkw8kdmxaObns9ajbPM=/640x360/filters:quality(75)/vidio-web-prod-video/uploads/video/image/2035857/ep-02-salam-dari-kawan-lama-6d534e.jpg",description:"Di sebuah pinggiran kota Jakarta, terdapat sekelompok remaja laki-laki yang tumbuh dan menjalin persahabatan yang sangat kuat. Mereka adalah Ale (Al Fathir Muchtar), Jarot (Vino G. Bastian), Lukman (Dion Wiyoko), Sadat (Ali Syakieb) dan Jago (Dallas Pratama). Ale adalah sosok yang paling menonjol di antara mereka berlima. Jiwa kepemimpinannya sangat kentara sekali. Sementara Jarot adalah sosok yang paling tidak banyak berbicara dan tertutup.Suatu hari, ada pertandingan sepak bola antara kelompok Ale dan kelompok saingan. Setelah pertandingan, muncul insiden perkelahian. Salah satu anggota saingan berencana menusuk Ale, tetapi Jarot berhasil menggagalkan rencana itu dengan memukul kepala si penyerang dengan batu, membuat sang penyerang itu mati hingga Jarot ditangkap. Kelompok Ale, orang tua Jarot serta adiknya, Yani (Zaneta Georgina), sangat terkejut, tetapi kelompok Ale masih melakukan rutinitas mereka. Fatir (Reza Pahlevi), pemuda berkebutuhan khusus yang kesepian, ingin menjadi anggota kelompok Ale, tetapi ia ditolak dan dihina oleh mereka. Pulang ke rumah, Fatir melihat neneknya sudah mati, sehingga dirinya yang sudah sebatang kara akhirnya beranjak pergi meninggalkan perkampungan kumuh itu."},{name:"Laskar Pelangi",fanArt:"https://media.suara.com/pictures/653x366/2022/03/17/48903-film-laskar-pelangi-imdb.jpg",description:'Kisah ini dimulai dari rencana penutupan SD Muhammadiyah di Gantung, Belitung Timur. Sebagai syarat perizinan kegiatan belajar mengajar, perlu setidaknya 10 siswa untuk angkatan tahun tersebut. Andrea Hirata membuka cerita dengan memberikan ketegangan di awal. Menit-menit terakhir pendaftaran siswa tahun ajaran baru, jumlah pendaftar belum mencukupi standar siswa sebanyak 10 orang. Kecemasan disuguhkan penulis dengan penggambaran pidato penutupan sekolah oleh Pak Harfan selaku kepala sekolah. Melalui ketegangan ini muncul sesosok anak bernama Harun yang melengkapi jumlah siswa SD Muhammadiyah Gantong. Karena murid yang terdaftar genap berjumlah 10 orang, sekolah dengan bangunan sederhana tersebut tetap diizinkan beroperasi. Ke-10 anak ini kemudian diberikan nama oleh guru mereka, Bu Mus dengan nama "Laskar Pelangi". Tokoh-tokoh dalam novel ini di antaranya: Ikal, Lintang, Sahara, Mahar, A Kiong, Syahdan, Kucai, Borek, Trapani, dan Harun.'},{name:"Marmut Merah Jambu",fanArt:"https://layartancep.id/assets/uploads/images/galIdFC_08052014_67134(3).jpg",description:"Marmut Merah Jambu ini berkisah tentang Dika yang menceritakan kisah cinta pertamanya ketika masa SMA, dengan perempuan bernama Ina Mangunkusumo.[3] Selain itu dikisahkan pula saat Dika dan temannya Bertus yang membentuk grup detektif untuk memecahkan masalah teman-temannya, juga persahabatannya dengan Cindy.Suatu hari Dika bertemu dengan bapaknya Ina Mangunkusumo, cinta pertamanya di SMA. Dika menceritakan usahanya membuat grup detektif untuk menarik perhatian Ina. Grup itu dibuat bersama Bertus, temannya yang sama-sama anak terbuang di sekolah. Dika juga bercerita tentang persahabatannya dengan cewek unik bernama Cindy di SMA. Seiring dengan cerita Dika, dia sadar: ada kasus pada masa lalunya yang belum selesai hingga dia dewasa. Seiring dia berusaha memecahkannya, seiring itu pula dia bertanya, benarkah cinta pertama enggak ke mana-mana?"},{name:"Yowis ben",fanArt:"https://www.tentangsinopsis.com/wp-content/uploads/2020/09/Yowis-Ben-The-Series-1.jpg",description:"Bayu (Bayu Skak) menyukai Susan (Cut Meyriska) sejak lama. Namun karena dia merasa minder dengan keadaan dirinya yang pas-pasan, Bayu memutuskan memendam perasaan itu.Namun hari-hari Bayu berubah sejak Susan mengirim voice chat ke ponsel Bayu, yang membuatnya kegeeran luar biasa mengira Susan memberi isyarat agar didekati. Ternyata Susan hanya memanfaatkan Bayu untuk membantunya mensuplai pecel untuk konsumsi teman-teman OSIS. Bayu bertekad mengubah dirinya menjadi lebih populer dari Roy (Indra Widjaya), pacar Susan, yang dikenal piawai sebagai gitaris band sekolah mereka,Bayu berinisiatif membentuk band bersama Doni (Joshua Suherman) - sahabat dekatnya, Yayan (Tutus Thomson) - seorang tukang tabuh beduk sebagai drummer dan Nando (Brandon Salim) - siswa ganteng yang jago keyboard. Mereka sepakat menamakan band mereka YOWIS BEN.Namun rupanya langkah Bayu dan teman-temannya tidak mudah. Dalam masa-masa YOWIS BEN tumbuh di dunia musik kota Malang, perlahan tapi pasti celah perpecahan antar personil YOWIS BEN mulai tampak.Berhasilkah Bayu mempertahankan band-nya dan mendapatkan Susan?"},{name:"Danur",fanArt:"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7565/737565-h",description:"Risa adalah seorang gadis indigo — dia memiliki kemampuan untuk melihat makhluk gaib. Sejak kecil, Risa menjalani hidup kesepian: ayahnya bekerja di luar negeri dan hanya berkunjung enam bulan sekali, sementara ibunya, Elly, bekerja sebagai seorang guru. Ketika Risa genap usia delapan tahun, dia berharap dikaruniai teman. Tak disangka, tiga bocah laki-laki sebayanya: Janshen, Peter, dan William hadir secara tiba-tiba. Anehnya, hanya Risa yang dapat melihat mereka. Mereka akhirnya mengungkapkan bahwa mereka adalah hantu orang Indo yang mati saat masa pendudukan Jepang di Hindia Belanda. Muak dengan keanehan yang dialami Risa, Elly memanggil Asep, seorang dukun yang juga memiliki indra indigo. Dia menjelaskan bahwa Risa dapat melihat makhluk gaib karena dia dapat mencium bau danur, atau mayat. Asep memperlihatkan wujud asli Janshen, Peter, dan William kepada Risa untuk menakutinya sehingga dia lupa akan kemampuan melihat mereka."},{name:"Ouija",fanArt:"https://cdn.kincir.com/2/o1quGGHDPoGKkXnqsKtwbiHAeue97nFA_Eu1khDw52w/transform/rs:fill:764:400/src/production/2019-08/3d6981611b94cb9c765f412a5fecb64f08a99a2a.jpg",description:'Debbie dan leanie adalah dua orang sahabat sejak kecil, mereka suka memainkan permainan papan ouija, yaitu papan permainan pemanggilan roh yang konon dapat bergerak sendiri.Debbie Galardi kenang bermain Ouija dengan sahabatnya Laine Morris sebagai anak-anak. Pada hari ini, Debbie melempar membakar papan Ouija dia ke dalam api. Debbie menyiratkan bahwa sesuatu yang aneh sedang terjadi dengan papan Ouija Laine. Setelah meninggalkan Laine, papan Ouija muncul kembali di kamar tidur Debbie. Debbie menjadi dimiliki dan menggantung diri.Keesokan harinya, Laine hidup sampai Debbie dengan pacarnya Trevor, adik Sarah, teman Isabelle dan pacar Debbie Pete. Lima teman bertemu di rumah Debbie dan menggunakan papan Ouija untuk mencoba berkomunikasi dengannya. hal-hal aneh terjadi, dan kehadiran kepala Pete pemogokan di cermin. Kemudian, teman-teman mulai memikirkan kalimat "Halo teman" (pesan yang diberikan selama sesi papan Ouija) ditulis di tempat yang berbeda, seperti Isabelle jendela mobil, dinding terowongan dan komputer Laine ini. Pikirkan Deb mencoba untuk berkomunikasi dengan mereka, kelompok memiliki sesi Ouija yang berbeda.'}];function S(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}const E=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t;return e=n,t=[{key:"searchClub",value:function(n){return new Promise((function(e,t){var a=O.filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())}));a.length?e(a):t("".concat(n," is not found"))}))}}],null&&S(e.prototype,null),t&&S(e,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function M(n){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},M(n)}function P(){P=function(){return n};var n={},e=Object.prototype,t=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function u(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{u({},"")}catch(n){u=function(n,e,t){return n[e]=t}}function c(n,e,t,a){var r=e&&e.prototype instanceof p?e:p,i=Object.create(r.prototype),o=new x(a||[]);return i._invoke=function(n,e,t){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return{value:void 0,done:!0}}for(t.method=r,t.arg=i;;){var o=t.delegate;if(o){var u=v(o,t);if(u){if(u===l)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===a)throw a="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);a="executing";var c=s(n,e,t);if("normal"===c.type){if(a=t.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(a="completed",t.method="throw",t.arg=c.arg)}}}(n,t,o),i}function s(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=c;var l={};function p(){}function f(){}function d(){}var h={};u(h,r,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&t.call(y,r)&&(h=y);var b=d.prototype=p.prototype=Object.create(h);function g(n){["next","throw","return"].forEach((function(e){u(n,e,(function(n){return this._invoke(e,n)}))}))}function k(n,e){function a(r,i,o,u){var c=s(n[r],n,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==M(p)&&t.call(p,"__await")?e.resolve(p.__await).then((function(n){a("next",n,o,u)}),(function(n){a("throw",n,o,u)})):e.resolve(p).then((function(n){l.value=n,o(l)}),(function(n){return a("throw",n,o,u)}))}u(c.arg)}var r;this._invoke=function(n,t){function i(){return new e((function(e,r){a(n,t,e,r)}))}return r=r?r.then(i,i):i()}}function v(n,e){var t=n.iterator[e.method];if(void 0===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,v(n,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var a=s(t,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var r=a.arg;return r?r.done?(e[n.resultName]=r.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function j(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function x(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(w,this),this.reset(!0)}function O(n){if(n){var e=n[r];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,i=function e(){for(;++a<n.length;)if(t.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,u(b,"constructor",d),u(d,"constructor",f),f.displayName=u(d,o,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,d):(n.__proto__=d,u(n,o,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},g(k.prototype),u(k.prototype,i,(function(){return this})),n.AsyncIterator=k,n.async=function(e,t,a,r,i){void 0===i&&(i=Promise);var o=new k(c(e,t,a,r),i);return n.isGeneratorFunction(t)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},g(b),u(b,o,"Generator"),u(b,r,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var a=e.pop();if(a in n)return t.value=a,t.done=!1,t}return t.done=!0,t}},n.values=O,x.prototype={constructor:x,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&t.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(t,a){return o.type="throw",o.arg=n,e.next=t,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=t.call(i,"catchLoc"),c=t.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(n,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&t.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),l},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),l}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var a=t.completion;if("throw"===a.type){var r=a.arg;j(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:O(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=void 0),l}},n}function _(n,e,t,a,r,i,o){try{var u=n[i](o),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(a,r)}t(484);document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("search-bar"),e=document.querySelector("movie-list"),t=function(){var e,t=(e=P().mark((function e(){var t;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.searchClub(n.value);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(n){_(i,a,r,o,u,"next",n)}function u(n){_(i,a,r,o,u,"throw",n)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),a=function(n){e.movie=n},r=function(n){e.renderError(n)};n.clickEvent=t}))})()})();