/*! For license information please see app.bundle.js.LICENSE */
webpackJsonp([0],{117:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},118:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(y){var o=h++;r=f||(f=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),m.ssrId&&t.setAttribute(g,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(219),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,i){p=n,m=i||{};var o=c(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=l[s.id];a.refs--,n.push(a)}e?(o=c(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},119:function(t,e,n){"use strict";var r=n(220),i=n(224);e.a={components:{Header:r.a,VceSample:i.a}}},120:function(t,e,n){"use strict";var r=n(83);e.a={computed:Object(r.b)(["vars"])}},121:function(t,e,n){"use strict";var r=n(122),i=n(83),o=n(124),s=n.n(o);e.a={store:r.a,props:{api:String},computed:Object(i.b)(["posts"]),mounted:function(){r.a.dispatch(r.b.SET_POSTS,this.api)},methods:{setImg:function(){return"//placeimg.com/"+s.a.Number.random(400,800)+"/"+s.a.Number.random(400,800)+"/any"}}}},122:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(81),i=n(83),o=n(225),s=n.n(o),a=n(84),u=n(226),c=n(227),l=n(228),d=n(229);n.n(d);n.d(e,"b",function(){return a.a}),r.default.use(i.a);var f=new i.a.Store({state:{vars:d.vars,posts:null},getters:u.a,actions:c.a,mutations:l.a,plugins:[s()()]});window.$store=f},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(81),i=n(215),o=n.n(i),s=n(216),a=n(122);r.default.use(o.a),new r.default({el:"#app",components:{App:s.a},template:"<App></App>",store:a.a})},215:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function e(t){t=t||{};var e=arguments.length,i=0;if(1===e)return t;for(;++i<e;){var o=arguments[i];y(t)&&(t=o),r(o)&&n(t,o)}return t}function n(t,n){b(t,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var s=n[o];r(s)?("undefined"===w(t[o])&&"function"===w(s)&&(t[o]=s),t[o]=e(t[o]||{},s)):t[o]=s}return t}function r(t){return"object"===w(t)||"function"===w(t)}function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function s(t,e){for(var n=!1,r=0,i=t.length;r<i;r++)if(e(t[r])){n=!0;break}return n}function a(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),r=[],i=t.parentNode,o=i.offsetWidth*e,s=void 0,a=void 0,u=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),s=t.lastIndexOf(" "),-1===s?(a=t,u=999998):(a=t.substr(0,s),u=parseInt(t.substr(s+1,t.length-s-2),10)),r.push([u,a])}),r.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var c="",l=void 0,d=r.length,f=0;f<d;f++)if(l=r[f],l[0]>=o){c=l[1];break}return c}}function u(t,e){for(var n=void 0,r=0,i=t.length;r<i;r++)if(e(t[r])){n=t[r];break}return n}function c(){if(!j)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function l(t,e){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,s=arguments,a=function(){r=Date.now(),n=!1,t.apply(o,s)};i>=e?a():n=setTimeout(a,e)}}}function d(t){return null!==t&&"object"===(void 0===t?"undefined":v(t))}function f(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}function h(t){for(var e=t.length,n=[],r=0;r<e;r++)n.push(t[r]);return n}function p(){}var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},g=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":v(t))},b=function(t,e){if(null===t||void 0===t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,r=Object(t),i=arguments.length,o=0;++o<i;)for(var s=Object(arguments[o]),a=Object.getOwnPropertySymbols(s),u=0;u<a.length;u++){var c=a[u];n.call(s,c)&&(r[c]=s[c])}return r},_=Object.prototype.toString,w=function(e){var n=void 0===e?"undefined":v(e);return"undefined"===n?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===n||e instanceof String?"string":"number"===n||e instanceof Number?"number":"function"===n||e instanceof Function?void 0!==e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":(n=_.call(e),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":t(e)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},E=e,j="undefined"!=typeof window,L=j&&"IntersectionObserver"in window,C={event:"event",observer:"observer"},S=function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if(j)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t)}(),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return j?window.devicePixelRatio||t:t},A=function(){if(j){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),O={on:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];A?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,r)}},x=function(t,e,n){var r=new Image;r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(t){n(t)}},$=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},T=function(t){return $(t,"overflow")+$(t,"overflow-y")+$(t,"overflow-x")},M=function(t){if(j){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(T(e)))return e;e=e.parentNode}return window}},z={},I=function(){function t(e){var n=e.el,r=e.src,i=e.error,o=e.loading,s=e.bindType,a=e.$parent,u=e.options,c=e.elRenderer;m(this,t),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=s,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=a,this.elRenderer=c,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return g(t,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,r=t.error,i=this.src;this.src=e,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;f(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(t){var e=this;x({src:this.loading},function(n){e.render("loading",!1),t()},function(){t(),e.options.silent||console.warn("VueLazyload log: load failed with loading image("+e.loading+")")})}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void e()):this.state.loaded||z[this.src]?(this.state.loaded=!0,e(),this.render("loaded",!0)):void this.renderLoading(function(){t.attempt++,t.record("loadStart"),x({src:t.src},function(n){t.naturalHeight=n.naturalHeight,t.naturalWidth=n.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),z[t.src]=1,e()},function(e){!t.options.silent&&console.error(e),t.state.error=!0,t.state.loaded=!1,t.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),N="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",H=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],R={rootMargin:"0px",threshold:0},P=function(t){return function(){function e(t){var n=t.preLoad,r=t.error,i=t.throttleWait,o=t.preLoadTop,s=t.dispatchEvent,a=t.loading,u=t.attempt,d=t.silent,f=void 0===d||d,h=t.scale,p=t.listenEvents,v=(t.hasbind,t.filter),g=t.adapter,y=t.observer,b=t.observerOptions;m(this,e),this.version="1.2.3",this.mode=C.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:f,dispatchEvent:!!s,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||N,loading:a||N,attempt:u||3,scale:h||k(h),ListenEvents:p||H,hasbind:!1,supportWebp:c(),filter:v||{},adapter:g||{},observer:!!y,observerOptions:b||R},this._initEvent(),this.lazyLoadHandler=l(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?C.observer:C.event)}return g(e,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),j&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(e,n,r){var i=this;if(s(this.ListenerQueue,function(t){return t.el===e}))return this.update(e,n),t.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,c=o.loading,l=o.error;t.nextTick(function(){u=a(e,i.options.scale)||u,i._observer&&i._observer.observe(e);var o=Object.keys(n.modifiers)[0],s=void 0;o&&(s=r.context.$refs[o],s=s?s.$el||s:document.getElementById(o)),s||(s=M(e));var d=new I({bindType:n.arg,$parent:s,el:e,loading:c,error:l,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(d),j&&(i._addListenerTarget(window),i._addListenerTarget(s)),i.lazyLoadHandler(),t.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(e,n){var r=this,i=this._valueFormatter(n.value),o=i.src,s=i.loading,c=i.error;o=a(e,this.options.scale)||o;var l=u(this.ListenerQueue,function(t){return t.el===e});l&&l.update({src:o,loading:s,error:c}),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),t.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=u(this.ListenerQueue,function(e){return e.el===t});e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,e)&&e.destroy())}}},{key:"removeComponent",value:function(t){t&&(o(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;L||t!==C.observer||(t=C.event),this.mode=t,t===C.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=u(this.TargetQueue,function(e){return e.el===t});return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===C.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach(function(n,r){n.el===t&&(--n.childrenCount||(e._initListen(n.el,!1),e.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(t,e){var n=this;this.options.ListenEvents.forEach(function(r){return O[e?"on":"off"](t,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e].push(n)},this.$once=function(e,n){function r(){i.$off(e,r),n.apply(i,arguments)}var i=t;t.$on(e,r)},this.$off=function(e,n){if(!n)return void(t.Event.listeners[e]=[]);o(t.Event.listeners[e],n)},this.$emit=function(e,n,r){t.Event.listeners[e].forEach(function(t){return t(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(e=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&t.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var t=this;L&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach(function(t){t.isIntersecting&&n.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var r=t.el,i=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var s=new S(e,{detail:t});r.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(t){var e=t,n=this.options.loading,r=this.options.error;return d(t)&&(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),e=t.src,n=t.loading||this.options.loading,r=t.error||this.options.error),{src:e,loading:n,error:r}}}]),e}()},Q=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),j&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function t(e){var n=e.lazy;m(this,t),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return g(t,[{key:"bind",value:function(t,e,n){var r=new B({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(t,e,n){var r=u(this._queue,function(e){return e.el===t});r&&r.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var r=u(this._queue,function(e){return e.el===t});r&&(r.clear(),o(this._queue,r))}}]),t}(),G={selector:"img"},B=function(){function t(e){var n=e.el,r=e.binding,i=e.vnode,o=e.lazy;m(this,t),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return g(t,[{key:"update",value:function(t){var e=this,n=t.el,r=t.binding;this.el=n,this.options=E({},G,r.value),this.getImgs().forEach(function(t){e.lazy.add(t,E({},e.binding,{value:{src:t.dataset.src,error:t.dataset.error,loading:t.dataset.loading}}),e.vnode)})}},{key:"getImgs",value:function(){return h(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this;this.getImgs().forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}();return{install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=P(t),r=new n(e),i=new V({lazy:r}),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=r,e.lazyComponent&&t.component("lazy-component",Q(r)),o?(t.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),t.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(t.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(t,e){E(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}})},216:function(t,e,n){"use strict";function r(t){n(217)}var i=n(119),o=n(827),s=n(82),a=r,u=s(i.a,o.a,!1,a,null,null);e.a=u.exports},217:function(t,e,n){var r=n(218);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(118)("3182a32e",r,!0,{})},218:function(t,e,n){e=t.exports=n(117)(!1),e.push([t.i,".v-app__cont{padding:30px}",""])},219:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],l={id:t+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},220:function(t,e,n){"use strict";function r(t){n(221)}var i=n(120),o=n(223),s=n(82),a=r,u=s(i.a,o.a,!1,a,null,null);e.a=u.exports},221:function(t,e,n){var r=n(222);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(118)("f02950ac",r,!0,{})},222:function(t,e,n){e=t.exports=n(117)(!1),e.push([t.i,"",""])},223:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"hero is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[t._v(t._s(t.vars.appName))]),n("h2",{staticClass:"subtitle"},[t._v("Primary subtitle")])])])])},i=[],o={render:r,staticRenderFns:i};e.a=o},224:function(t,e,n){"use strict";var r=n(121),i=n(826),o=n(82),s=o(r.a,i.a,!1,null,null,null);e.a=s.exports},225:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e){return t.filter(e)[0]}function e(n,r){if(void 0===r&&(r=[]),null===n||"object"!=typeof n)return n;var i=t(r,function(t){return t.original===n});if(i)return i.copy;var o=Array.isArray(n)?[]:{};return r.push({original:n,copy:o}),Object.keys(n).forEach(function(t){o[t]=e(n[t],r)}),o}function n(t){void 0===t&&(t={});var n=t.collapsed;void 0===n&&(n=!0);var r=t.filter;void 0===r&&(r=function(t,e,n){return!0});var o=t.transformer;void 0===o&&(o=function(t){return t});var s=t.mutationTransformer;void 0===s&&(s=function(t){return t});var a=t.logger;return void 0===a&&(a=console),function(t){var u=e(t.state);t.subscribe(function(t,c){if(void 0!==a){var l=e(c);if(r(t,u,l)){var d=new Date,f=" @ "+i(d.getHours(),2)+":"+i(d.getMinutes(),2)+":"+i(d.getSeconds(),2)+"."+i(d.getMilliseconds(),3),h=s(t),p="mutation "+t.type+f,v=n?a.groupCollapsed:a.group;try{v.call(a,p)}catch(t){console.log(p)}a.log("%c prev state","color: #9E9E9E; font-weight: bold",o(u)),a.log("%c mutation","color: #03A9F4; font-weight: bold",h),a.log("%c next state","color: #4CAF50; font-weight: bold",o(l));try{a.groupEnd()}catch(t){a.log("—— log end ——")}}u=l}})}}function r(t,e){return new Array(e+1).join(t)}function i(t,e){return r("0",e-t.toString().length)+t}return n})},226:function(t,e,n){"use strict";var r={state:function(t){return t}};e.a=r},227:function(t,e,n){"use strict";var r=n(84),i=n(123),o=n.n(i),s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},r.a.SET_POSTS,function(t,e){var n=t.commit;t.state;o.a.ajax({url:e}).done(function(t){n(r.a.SET_POSTS,t)})});e.a=s},228:function(t,e,n){"use strict";var r=n(84),i=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},r.a.SET_POSTS,function(t,e){t.posts=e});e.a=i},229:function(t,e,n){"use strict";var r="./_src",i="./dist/assets";t.exports={vars:{appName:"app-name",root:"/",host:"https://example.com",assets:"./assets"},src:{dir:r,js:r,sass:r,pug:r,json:r+"/json",fonts:r+"/assets/fonts",vue:r,port:8001},dest:{dir:"./dist",root:"./dist",assets:i,css:i+"/css",js:i+"/js",json:i+"/json",ssi:i+"/ssi",fonts:i+"/fonts",img:i+"/img"},browsers:["last 5 versions","ie >= 11","safari >= 8","ios >= 8","android >= 5"],npm:"./node_modules"}},82:function(t,e){t.exports=function(t,e,n,r,i,o){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:a,options:c}}},826:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts?n("div",{staticClass:"vce-sample"},[n("div",{staticClass:"vce-sample__posts"},t._l(t.posts,function(e){return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"v-img"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.setImg(),expression:"setImg()",arg:"background-image"}],staticClass:"v-img-bg"})]),n("p",{staticClass:"title is-5"},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.body))])]),t._m(0,!0)])}))]):t._e()},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"card-footer"},[n("p",{staticClass:"card-footer-item"},[n("span",[t._v("View on"),n("a",{attrs:{href:"#"}},[t._v("Twitter")])])]),n("p",{staticClass:"card-footer-item"},[n("span",[t._v("Share on"),n("a",{attrs:{href:"#"}},[t._v("Facebook")])])])])}],o={render:r,staticRenderFns:i};e.a=o},827:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-app"},[n("Header"),n("div",{staticClass:"v-app__cont"},[n("VceSample",{attrs:{api:"//jsonplaceholder.typicode.com/posts/"}})],1)],1)},i=[],o={render:r,staticRenderFns:i};e.a=o},83:function(t,e,n){"use strict";function r(t){C&&(t._devtoolHook=C,C.emit("vuex:init",t),C.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){C.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o(t){return null!==t&&"object"==typeof t}function s(t){return t&&"function"==typeof t.then}function a(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;a(t.concat(r),e.getChild(r),n.modules[r])}}function u(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,s={};i(o,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=O.config.silent;O.config.silent=!0,t._vm=new O({data:{$$state:e},computed:s}),O.config.silent=a,t.strict&&g(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),O.nextTick(function(){return r.$destroy()}))}function d(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]=r),!o&&!i){var a=y(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){O.set(a,u,r.state)})}var c=r.context=f(t,s,n);r.forEachMutation(function(e,n){p(t,s+n,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:s+n,i=e.handler||e;v(t,r,i,c)}),r.forEachGetter(function(e,n){m(t,s+n,e,c)}),r.forEachChild(function(r,o){d(t,e,n.concat(o),r,i)})}function f(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=b(n,r,i),s=o.payload,a=o.options,u=o.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:r?t.commit:function(n,r,i){var o=b(n,r,i),s=o.payload,a=o.options,u=o.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return h(t,e)}},state:{get:function(){return y(t.state,n)}}}),i}function h(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function p(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}function v(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return s(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function m(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function g(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function b(t,e,n){return o(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function _(t){O&&t===O||(O=t,L(O))}function w(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function E(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){return t._modulesNamespaceMap[n]}n.d(e,"b",function(){return T});var L=function(t){function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:e});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}},C="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,S=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},k={namespaced:{configurable:!0}};k.namespaced.get=function(){return!!this._rawModule.namespaced},S.prototype.addChild=function(t,e){this._children[t]=e},S.prototype.removeChild=function(t){delete this._children[t]},S.prototype.getChild=function(t){return this._children[t]},S.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},S.prototype.forEachChild=function(t){i(this._children,t)},S.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},S.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},S.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(S.prototype,k);var A=function(t){this.register([],t,!1)};A.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},A.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},A.prototype.update=function(t){a([],this.root,t)},A.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new S(e,n);if(0===t.length)this.root=o;else{this.get(t.slice(0,-1)).addChild(t[t.length-1],o)}e.modules&&i(e.modules,function(e,i){r.register(t.concat(i),e,n)})},A.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var O,x=function(t){var e=this;void 0===t&&(t={}),!O&&"undefined"!=typeof window&&window.Vue&&_(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.state;void 0===o&&(o={}),"function"==typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new A(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new O;var s=this,a=this,u=a.dispatch,c=a.commit;this.dispatch=function(t,e){return u.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=i,d(this,o,[],this._modules.root),l(this,o),n.forEach(function(t){return t(e)}),O.config.devtools&&r(this)},$={state:{configurable:!0}};$.state.get=function(){return this._vm._data.$$state},$.state.set=function(t){},x.prototype.commit=function(t,e,n){var r=this,i=b(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,r.state)}))},x.prototype.dispatch=function(t,e){var n=this,r=b(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(o)})):a[0](o)},x.prototype.subscribe=function(t){return u(t,this._subscribers)},x.prototype.subscribeAction=function(t){return u(t,this._actionSubscribers)},x.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},x.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},x.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t),n.preserveState),l(this,this.state)},x.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));O.delete(n,t[t.length-1])}),c(this)},x.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},x.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(x.prototype,$);var T=E(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=j(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),M=E(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=j(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"==typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),z=E(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||j(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),I=E(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=j(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"==typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),N=function(t){return{mapState:T.bind(null,t),mapGetters:z.bind(null,t),mapMutations:M.bind(null,t),mapActions:I.bind(null,t)}},H={Store:x,install:_,version:"3.0.1",mapState:T,mapMutations:M,mapGetters:z,mapActions:I,createNamespacedHelpers:N};e.a=H},84:function(t,e,n){"use strict";var r={LOADING:"LOADING",SET_POSTS:"SET_POSTS"};e.a=r}},[211]);
//# sourceMappingURL=app.bundle.js.map