!function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.1c482a96.js"],(function(e,n){"use strict";var r,o,i,a=document.createElement("style");return a.textContent=".table-dark td{border-color:#c6c8ca}\n",document.head.appendChild(a),{setters:[function(t){r=t.n,o=t.B,i=t.c}],execute:function(){e("default",r({components:{BIconInfoCircleFill:o},data:function(){return{isBusy:!1,items:[]}},computed:{fields:function(){return[{key:"id",label:this.$t("Id")},{key:"name",label:this.$t("Node Name")},{key:"address",label:this.$t("Ip Address")},{key:"port",label:this.$t("Port")},{key:"tags",label:this.$t("Tags")},{key:"actions",label:this.$t("Actions")}]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.isBusy=!0;var n=this.getCookie("cap.node");i.get("/nodes").then((function(r){var o,i=t(r.data);try{for(i.s();!(o=i.n()).done;){var a=o.value;a.name==n&&(a._rowVariant="dark")}}catch(s){i.e(s)}finally{i.f()}e.items=r.data,e.isBusy=!1}))},switchNode:function(t){document.cookie="cap.node=".concat(escape(t.name),";"),window.location.reload()},getCookie:function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}}},(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-left mb-4"},[t._v(t._s(t.$t("Nodes")))]),e("b-table",{attrs:{fields:t.fields,items:t.items,busy:t.isBusy,"show-empty":"","empty-text":"Unconfigure node discovery !"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-secondary my-2"},[e("b-spinner",{staticClass:"align-middle"}),e("strong",{staticClass:"ml-2"},[t._v(t._s(t.$t("Loading"))+"...")])],1)]},proxy:!0},{key:"empty",fn:function(n){return[e("h5",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e("b-icon-info-circle-fill"),t._v(" "+t._s(n.emptyText)+" ")],1)]}},{key:"cell(actions)",fn:function(n){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(e){return t.switchNode(n.item)}}},[t._v(" "+t._s(t.$t("Switch"))+" ")])]}}])})],1)}),[],!1,null,null,null,null).exports)}}}))}();
