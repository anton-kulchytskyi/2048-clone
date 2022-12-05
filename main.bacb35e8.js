parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HKAT":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,i,l){return i&&t(e.prototype,i),l&&t(e,l),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=function(){function t(i,l,r){e(this,t),this.cellElement=i,this.x=l,this.y=r}return i(t,[{key:"canAccept",value:function(e){return!this._tile||!this._mergeTile&&this._tile.value===e.value}},{key:"mergeTiles",value:function(){if(!this._tile||!this._mergeTile)return 0;this._tile.value=this._tile.value+this._mergeTile.value;var e=this._tile.value;return this._mergeTile.remove(),this._mergeTile=null,e}},{key:"tile",get:function(){return this._tile},set:function(e){this._tile=e,e&&(this._tile.x=this.x,this._tile.y=this.y)}},{key:"mergeTile",get:function(){return this._mergeTile},set:function(e){this._mergeTile=e,e&&(this._mergeTile.x=this.x,this._mergeTile.y=this.y)}}]),t}();exports.default=l;
},{}],"dWaE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Cell.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var o=function(){function t(r,l,o,u,i){n(this,t),r.style.setProperty("--grid-size",l),r.style.setProperty("--cell-size","".concat(o,"vmin")),r.style.setProperty("--cell-gap","".concat(u,"vmin")),r.style.setProperty("--font-size","".concat(i,"vmin"));for(var s=[],c=0;c<l*l;c++){var a=document.createElement("div");a.classList.add("cell"),s.push(a),r.append(a)}this.cells=s.map(function(t,n){return new e.default(t,n%l,Math.floor(n/l))})}return l(t,[{key:"randomEmptyCell",value:function(){var e=Math.floor(Math.random()*this.emptyCells.length);return this.emptyCells[e]}},{key:"cellsByRow",get:function(){return this.cells.reduce(function(e,t){return e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e},[])}},{key:"cellsByColumn",get:function(){return this.cells.reduce(function(e,t){return e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e},[])}},{key:"emptyCells",get:function(){return this.cells.filter(function(e){return!e.tile})}}]),t}();exports.default=o;
},{"./Cell.js":"HKAT"}],"WEy1":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random()>.2?2:4;e(this,t),this.tileElement=document.createElement("div"),this.tileElement.classList.add("tile"),n.append(this.tileElement),this.value=i}return n(t,[{key:"remove",value:function(){this.tileElement.remove()}},{key:"value",get:function(){return this._value},set:function(e){this._value=e,this.tileElement.textContent=e;var t=100-9*Math.log2(e);this.tileElement.style.setProperty("--bg-color","".concat(t,"%")),this.tileElement.style.setProperty("--text-color","".concat(t<=70?90:10,"%"))}},{key:"x",set:function(e){this._x=e,this.tileElement.style.setProperty("--x",e)}},{key:"y",set:function(e){this._y=e,this.tileElement.style.setProperty("--y",e)}}]),t}();exports.default=i;
},{}],"wBvu":[function(require,module,exports) {
function e(e){e.map(function(e){for(var t=1;t<e.length;t++){var i=e[t];if(i.tile){for(var n=void 0,l=t-1;l>=0;l--){var r=e[l];if(!r.canAccept(i.tile))break;n=r}n&&(n._tile?n.mergeTile=i.tile:n.tile=i.tile,i.tile=null)}}})}function t(e){return e.some(function(e){return e.some(function(t,i){return 0!==i&&(!!t.tile&&e[i-1].canAccept(t.tile))})})}module.exports={slideTiles:e,canMove:t};
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=r(require("./Grid.js")),t=r(require("./Tile.js")),n=require("./slideTiles.js");function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return l(e)||u(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,d=document.querySelector("#game-board"),f=document.querySelector(".select-size"),m=document.querySelector(".score--current"),v=document.querySelector(".score--best"),y=document.querySelector(".modal-container"),b=document.querySelector(".modal--lose"),h=document.querySelector(".modal--win"),p=document.querySelectorAll(".button"),w=0,M=0,E=4,T=20,S=1.5,A=7;function C(){for(;d.firstChild;)d.removeChild(d.firstChild);(s=new e.default(d,E,T,S,A)).randomEmptyCell().tile=new t.default(d),s.randomEmptyCell().tile=new t.default(d),d.style.opacity=1,w=0,m.textContent=0,y.style.display="none",x(),document.addEventListener("touchmove",_,!1),document.activeElement.blur(),d.focus()}function q(){return s.cellsByColumn}function g(){return s.cellsByColumn.map(function(e){return o(e).reverse()})}function k(){return s.cellsByRow}function L(){return s.cellsByRow.map(function(e){return o(e).reverse()})}function j(e){switch(document.removeEventListener("keydown",j),e.key){case"ArrowUp":case"w":if(!(0,n.canMove)(q()))return void x();(0,n.slideTiles)(q());break;case"ArrowDown":case"s":if(!(0,n.canMove)(g()))return void x();(0,n.slideTiles)(g());break;case"ArrowLeft":case"a":if(!(0,n.canMove)(k()))return void x();(0,n.slideTiles)(k());break;case"ArrowRight":case"d":if(!(0,n.canMove)(L()))return void x();(0,n.slideTiles)(L());break;default:return}setTimeout(function(){B(),I()&&O(),x()},100)}function x(){return document.addEventListener("keydown",j)}function B(){s.cells.forEach(function(e){var t=e.mergeTiles();2048===t&&O(t),w+=t,m.textContent=w,M=M<=w?w:M,v.textContent=M}),s.randomEmptyCell().tile=new t.default(d)}function I(){return!((0,n.canMove)(k())||(0,n.canMove)(L())||(0,n.canMove)(q())||(0,n.canMove)(g()))}function O(e){var t=e?h:b;y.style.display="flex",t.style.display="block",d.style.opacity=.2,document.removeEventListener("keydown",j),document.removeEventListener("touchmove",_,!1)}C(),p.forEach(function(e){return e.addEventListener("click",C)}),f.addEventListener("change",function(e){E=+e.target.value,T=4===E?20:20-E,S=E<6?1.5:.75,A=E<6?7:5,C()}),document.addEventListener("touchstart",Y,!1);var R=null,U=null;function X(e){return e.touches}function Y(e){var t=X(e)[0];R=t.clientX,U=t.clientY}function _(e){if(R&&U){var t=e.touches[0].clientX,r=e.touches[0].clientY,o=R-t,i=U-r;if(Math.abs(o)>Math.abs(i))if(o>0){if(!(0,n.canMove)(k()))return;(0,n.slideTiles)(k())}else{if(!(0,n.canMove)(L()))return;(0,n.slideTiles)(L())}else if(i>0){if(!(0,n.canMove)(q()))return;(0,n.slideTiles)(q())}else{if(!(0,n.canMove)(g()))return;(0,n.slideTiles)(g())}setTimeout(function(){B(),I()&&O()},100),R=null,U=null}}
},{"./Grid.js":"dWaE","./Tile.js":"WEy1","./slideTiles.js":"wBvu"}]},{},["KIzB"], null)
//# sourceMappingURL=main.bacb35e8.js.map