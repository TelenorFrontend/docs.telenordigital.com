!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Barba",[],t):"object"==typeof exports?exports.Barba=t():e.Barba=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="http://localhost:8080/dist",t(0)}([function(e,t,r){"function"!=typeof Promise&&(window.Promise=r(1));var n={version:"1.0.0",BaseTransition:r(4),BaseView:r(6),BaseCache:r(8),Dispatcher:r(7),HistoryManager:r(9),Pjax:r(10),Prefetch:r(13),Utils:r(5)};e.exports=n},function(e,t,r){(function(t){!function(r){function n(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,f(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,n)}else(1===e._state?a:u)(t.promise,e._value)})):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof r)return void d(i(r,t),e)}e._state=1,e._value=t,c(e)}catch(t){u(e,t)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&f(function(){e._handled||p(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)s(e,e._deferreds[t]);e._deferreds=null}function l(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function d(e,t){var r=!1;try{e(function(e){r||(r=!0,a(t,e))},function(e){r||(r=!0,u(t,e))})}catch(e){if(r)return;r=!0,u(t,e)}}var h=setTimeout,f="function"==typeof t&&t||function(e){h(e,0)},p=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return s(this,new l(e,t,r)),r},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,r){function n(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){n(o,e)},r)}t[o]=s,0==--i&&e(t)}catch(e){r(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)n(o,t[o])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,r){r(e)})},o.race=function(e){return new o(function(t,r){for(var n=0,i=e.length;n<i;n++)e[n].then(t,r)})},o._setImmediateFn=function(e){f=e},o._setUnhandledRejectionFn=function(e){p=e},void 0!==e&&e.exports?e.exports=o:r.Promise||(r.Promise=o)}(this)}).call(t,r(2).setImmediate)},function(e,t,r){(function(e,n){function i(e,t){this._id=e,this._clearFn=t}var o=r(3).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,u={},c=0;t.setTimeout=function(){return new i(s.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(s.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var r=c++,n=!(arguments.length<2)&&a.call(arguments,1);return u[r]=!0,o(function(){u[r]&&(n?e.apply(null,n):e.call(null),t.clearImmediate(r))}),r},t.clearImmediate="function"==typeof n?n:function(e){delete u[e]}}).call(t,r(2).setImmediate,r(2).clearImmediate)},function(e,t){function r(){d&&c&&(d=!1,c.length?l=c.concat(l):h=-1,l.length&&n())}function n(){if(!d){var e=s(r);d=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,d=!1,a(e)}}function i(e,t){this.fun=e,this.array=t}function o(){}var s,a,u=e.exports={};!function(){try{s=setTimeout}catch(e){s=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(e){a=function(){throw new Error("clearTimeout is not defined")}}}();var c,l=[],d=!1,h=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new i(e,t)),1!==l.length||d||s(n,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=o,u.addListener=o,u.once=o,u.off=o,u.removeListener=o,u.removeAllListeners=o,u.emit=o,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,r){var n=r(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(e){return n.extend(this,e)},init:function(e,t){var r=this;return this.oldContainer=e,this._newContainerPromise=t,this.deferred=n.deferred(),this.newContainerReady=n.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(e){r.newContainer=e,r.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};e.exports=i},function(e,t){var r={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(e){return e.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(e){var t=this.deferred(),r=new XMLHttpRequest;return r.onreadystatechange=function(){if(4===r.readyState)return 200===r.status?t.resolve(r.responseText):t.reject(new Error("xhr: HTTP code is not 200"))},r.ontimeout=function(){return t.reject(new Error("xhr: Timeout exceeded"))},r.open("GET",e),r.timeout=this.xhrTimeout,r.setRequestHeader("x-barba","yes"),r.send(),t.promise},extend:function(e,t){var r=Object.create(e);for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(e,t){this.resolve=e,this.reject=t}.bind(this))}},getPort:function(e){var t=void 0!==e?e:window.location.port,r=window.location.protocol;return""!=t?parseInt(t):"http:"===r?80:"https:"===r?443:void 0}};e.exports=r},function(e,t,r){var n=r(7),i=r(5),o={namespace:null,extend:function(e){return i.extend(this,e)},init:function(){var e=this;n.on("initStateChange",function(t,r){r&&r.namespace===e.namespace&&e.onLeave()}),n.on("newPageReady",function(t,r,n){e.container=n,t.namespace===e.namespace&&e.onEnter()}),n.on("transitionCompleted",function(t,r){t.namespace===e.namespace&&e.onEnterCompleted(),r&&r.namespace===e.namespace&&e.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};e.exports=o},function(e,t){var r={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){e in this.events!=!1&&this.events[e].splice(this.events[e].indexOf(t),1)},trigger:function(e){if(e in this.events!=!1)for(var t=0;t<this.events[e].length;t++)this.events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}};e.exports=r},function(e,t,r){var n=r(5),i={data:{},extend:function(e){return n.extend(this,e)},set:function(e,t){this.data[e]=t},get:function(e){return this.data[e]},reset:function(){this.data={}}};e.exports=i},function(e,t){var r={history:[],add:function(e,t){t||(t=void 0),this.history.push({url:e,namespace:t})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var e=this.history;return e.length<2?null:e[e.length-2]}};e.exports=r},function(e,t,r){var n=r(5),i=r(7),o=r(11),s=r(8),a=r(9),u={Dom:r(12),History:a,Cache:s,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var e=this.Dom.getContainer();this.Dom.getWrapper().setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(e)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},e,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return n.cleanLink(n.getCurrentUrl())},goTo:function(e){window.history.pushState(null,null,e),this.onStateChange()},forceGoTo:function(e){window.location=e},load:function(e){var t,r=n.deferred(),i=this;return(t=this.Cache.get(e))||(t=n.xhr(e),this.Cache.set(e,t)),t.then(function(e){var t=i.Dom.parseResponse(e);i.Dom.putContainer(t),i.cacheEnabled||i.Cache.reset(),r.resolve(t)},function(){i.forceGoTo(e),r.reject()}),r.promise},getHref:function(e){if(e)return e.getAttribute&&"string"==typeof e.getAttribute("xlink:href")?e.getAttribute("xlink:href"):"string"==typeof e.href?e.href:void 0},onLinkClick:function(e){for(var t=e.target;t&&!this.getHref(t);)t=t.parentNode;if(this.preventCheck(e,t)){e.stopPropagation(),e.preventDefault(),i.trigger("linkClicked",t,e);var r=this.getHref(t);this.goTo(r)}},preventCheck:function(e,t){if(!window.history.pushState)return!1;var r=this.getHref(t);return!(!t||!r)&&(!(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)&&((!t.target||"_blank"!==t.target)&&(window.location.protocol===t.protocol&&window.location.hostname===t.hostname&&(n.getPort()===n.getPort(t.port)&&(!(r.indexOf("#")>-1)&&((!t.getAttribute||"string"!=typeof t.getAttribute("download"))&&(n.cleanLink(r)!=n.cleanLink(location.href)&&!t.classList.contains(this.ignoreClassLink))))))))},getTransition:function(){return o},onStateChange:function(){var e=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(e),this.History.currentStatus().url===e)return!1;this.History.add(e);var t=this.load(e),r=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var n=r.init(this.Dom.getContainer(),t);t.then(this.onNewContainerLoaded.bind(this)),n.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(e){this.History.currentStatus().namespace=this.Dom.getNamespace(e),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),e,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};e.exports=u},function(e,t,r){var n=r(4).extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});e.exports=n},function(e,t){var r={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(e){this.currentHTML=e;var t=document.createElement("div");t.innerHTML=e;var r=t.querySelector("title");return r&&(document.title=r.textContent),this.getContainer(t)},getWrapper:function(){var e=document.getElementById(this.wrapperId);if(!e)throw new Error("Barba.js: wrapper not found!");return e},getContainer:function(e){if(e||(e=document.body),!e)throw new Error("Barba.js: DOM not ready!");var t=this.parseContainer(e);if(t&&t.jquery&&(t=t[0]),!t)throw new Error("Barba.js: no container found");return t},getNamespace:function(e){return e&&e.dataset?e.dataset[this.dataNamespace]:e?e.getAttribute("data-"+this.dataNamespace):null},putContainer:function(e){e.style.visibility="hidden",this.getWrapper().appendChild(e)},parseContainer:function(e){return e.querySelector("."+this.containerClass)}};e.exports=r},function(e,t,r){var n=r(5),i=r(10),o={ignoreClassLink:"no-barba-prefetch",init:function(){if(!window.history.pushState)return!1;document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),document.body.addEventListener("touchstart",this.onLinkEnter.bind(this))},onLinkEnter:function(e){for(var t=e.target;t&&!i.getHref(t);)t=t.parentNode;if(t&&!t.classList.contains(this.ignoreClassLink)){var r=i.getHref(t);if(i.preventCheck(e,t)&&!i.Cache.get(r)){var o=n.xhr(r);i.Cache.set(r,o)}}}};e.exports=o}])}),function(){var e=function(t){var r=new e.Builder;return r.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),r.searchPipeline.add(e.stemmer),t.call(r,r),r.build()};e.version="2.1.2",/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */
e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),e.utils.asString=function(e){return void 0===e||null===e?"":e.toString()},e.FieldRef=function(t,r){this.docRef=t,this.fieldName=r,this._stringValue=r+e.FieldRef.joiner+t},e.FieldRef.joiner="/",e.FieldRef.fromString=function(t){var r=t.indexOf(e.FieldRef.joiner);if(-1===r)throw"malformed field ref string";var n=t.slice(0,r),i=t.slice(r+1);return new e.FieldRef(i,n)},e.FieldRef.prototype.toString=function(){return this._stringValue},e.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},e.Token=function(e,t){this.str=e||"",this.metadata=t||{}},e.Token.prototype.toString=function(){return this.str},e.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},e.Token.prototype.clone=function(t){return t=t||function(e){return e},new e.Token(t(this.str,this.metadata),this.metadata)},/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */
e.tokenizer=function(t){if(null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return new e.Token(e.utils.asString(t).toLowerCase())});for(var r=t.toString().trim().toLowerCase(),n=r.length,i=[],o=0,s=0;o<=n;o++){var a=o-s;(r.charAt(o).match(e.tokenizer.separator)||o==n)&&(a>0&&i.push(new e.Token(r.slice(s,o),{position:[s,a],index:i.length})),s=o+1)}return i},e.tokenizer.separator=/[\s\-]+/,/*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */
e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions=Object.create(null),e.Pipeline.registerFunction=function(t,r){r in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+r),t.label=r,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){t.label&&t.label in this.registeredFunctions||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var r=new e.Pipeline;return t.forEach(function(t){var n=e.Pipeline.registeredFunctions[t];if(!n)throw new Error("Cannot load unregistered function: "+t);r.add(n)}),r},e.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,r){e.Pipeline.warnIfFunctionNotRegistered(r);var n=this._stack.indexOf(t);if(-1==n)throw new Error("Cannot find existingFn");n+=1,this._stack.splice(n,0,r)},e.Pipeline.prototype.before=function(t,r){e.Pipeline.warnIfFunctionNotRegistered(r);var n=this._stack.indexOf(t);if(-1==n)throw new Error("Cannot find existingFn");this._stack.splice(n,0,r)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){var n=this._stack[r];e=e.reduce(function(t,r,i){var o=n(r,i,e);return void 0===o||""===o?t:t.concat(o)},[])}return e},e.Pipeline.prototype.runString=function(t){var r=new e.Token(t);return this.run([r]).map(function(e){return e.toString()})},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */
e.Vector=function(e){this._magnitude=0,this.elements=e||[]},e.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),o=this.elements[2*i];n>1&&(o<e&&(t=i),o>e&&(r=i),o!=e);)n=r-t,i=t+Math.floor(n/2),o=this.elements[2*i];return o==e?2*i:o>e?2*i:o<e?2*(i+1):void 0},e.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},e.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},e.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,o=n.length,s=0,a=0,u=0,c=0;u<i&&c<o;)(s=r[u])<(a=n[c])?u+=2:s>a?c+=2:s==a&&(t+=r[u+1]*n[c+1],u+=2,c+=2);return t},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},e.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},e.Vector.prototype.toJSON=function(){return this.elements},/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},r="[aeiouy]",n="[^aeiou][^aeiouy]*",i=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),o=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),s=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),a=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),u=/^(.+?)(ss|i)es$/,c=/^(.+?)([^s])s$/,l=/^(.+?)eed$/,d=/^(.+?)(ed|ing)$/,h=/.$/,f=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),y=new RegExp("^"+n+r+"[^aeiouwxy]$"),m=/^(.+?[^aeiou])y$/,v=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,g=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,x=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,w=/^(.+?)(s|t)(ion)$/,T=/^(.+?)e$/,b=/ll$/,k=new RegExp("^"+n+r+"[^aeiouwxy]$"),L=function(r){var n,L,S,C,Q,E,P;if(r.length<3)return r;if("y"==(S=r.substr(0,1))&&(r=S.toUpperCase()+r.substr(1)),C=u,Q=c,C.test(r)?r=r.replace(C,"$1$2"):Q.test(r)&&(r=r.replace(Q,"$1$2")),C=l,Q=d,C.test(r)){var _=C.exec(r);(C=i).test(_[1])&&(C=h,r=r.replace(C,""))}else Q.test(r)&&(n=(_=Q.exec(r))[1],(Q=a).test(n)&&(r=n,E=p,P=y,(Q=f).test(r)?r+="e":E.test(r)?(C=h,r=r.replace(C,"")):P.test(r)&&(r+="e")));return(C=m).test(r)&&(r=(n=(_=C.exec(r))[1])+"i"),(C=v).test(r)&&(n=(_=C.exec(r))[1],L=_[2],(C=i).test(n)&&(r=n+e[L])),(C=g).test(r)&&(n=(_=C.exec(r))[1],L=_[2],(C=i).test(n)&&(r=n+t[L])),C=x,Q=w,C.test(r)?(n=(_=C.exec(r))[1],(C=o).test(n)&&(r=n)):Q.test(r)&&(n=(_=Q.exec(r))[1]+_[2],(Q=o).test(n)&&(r=n)),(C=T).test(r)&&(n=(_=C.exec(r))[1],Q=s,E=k,((C=o).test(n)||Q.test(n)&&!E.test(n))&&(r=n)),C=b,Q=o,C.test(r)&&Q.test(r)&&(C=h,r=r.replace(C,"")),"y"==S&&(r=S.toLowerCase()+r.substr(1)),r};return function(e){return e.update(L)}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */
e.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},e.stopWordFilter=e.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */
e.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},e.Pipeline.registerFunction(e.trimmer,"trimmer"),/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */
e.TokenSet=function(){this.final=!1,this.edges={},this.id=e.TokenSet._nextId,e.TokenSet._nextId+=1},e.TokenSet._nextId=1,e.TokenSet.fromArray=function(t){for(var r=new e.TokenSet.Builder,n=0,i=t.length;n<i;n++)r.insert(t[n]);return r.finish(),r.root},e.TokenSet.fromClause=function(t){return"editDistance"in t?e.TokenSet.fromFuzzyString(t.term,t.editDistance):e.TokenSet.fromString(t.term)},e.TokenSet.fromFuzzyString=function(t,r){for(var n=new e.TokenSet,i=[{node:n,editsRemaining:r,str:t}];i.length;){var o=i.pop();if(o.str.length>0){var s;(u=o.str.charAt(0))in o.node.edges?s=o.node.edges[u]:(s=new e.TokenSet,o.node.edges[u]=s),1==o.str.length?s.final=!0:i.push({node:s,editsRemaining:o.editsRemaining,str:o.str.slice(1)})}if(o.editsRemaining>0&&o.str.length>1){var a,u=o.str.charAt(1);u in o.node.edges?a=o.node.edges[u]:(a=new e.TokenSet,o.node.edges[u]=a),o.str.length<=2?a.final=!0:i.push({node:a,editsRemaining:o.editsRemaining-1,str:o.str.slice(2)})}if(o.editsRemaining>0&&1==o.str.length&&(o.node.final=!0),o.editsRemaining>0&&o.str.length>=1){if("*"in o.node.edges)c=o.node.edges["*"];else{var c=new e.TokenSet;o.node.edges["*"]=c}1==o.str.length?c.final=!0:i.push({node:c,editsRemaining:o.editsRemaining-1,str:o.str.slice(1)})}if(o.editsRemaining>0){if("*"in o.node.edges)l=o.node.edges["*"];else{var l=new e.TokenSet;o.node.edges["*"]=l}0==o.str.length?l.final=!0:i.push({node:l,editsRemaining:o.editsRemaining-1,str:o.str})}if(o.editsRemaining>0&&o.str.length>1){var d,h=o.str.charAt(0),f=o.str.charAt(1);f in o.node.edges?d=o.node.edges[f]:(d=new e.TokenSet,o.node.edges[f]=d),1==o.str.length?d.final=!0:i.push({node:d,editsRemaining:o.editsRemaining-1,str:h+o.str.slice(2)})}}return n},e.TokenSet.fromString=function(t){for(var r=new e.TokenSet,n=r,i=!1,o=0,s=t.length;o<s;o++){var a=t[o],u=o==s-1;if("*"==a)i=!0,r.edges[a]=r,r.final=u;else{var c=new e.TokenSet;c.final=u,r.edges[a]=c,r=c,i&&(r.edges["*"]=n)}}return n},e.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&e.push(r.prefix);for(var o=0;o<i;o++){var s=n[o];t.push({prefix:r.prefix.concat(s),node:r.node.edges[s]})}}return e},e.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},e.TokenSet.prototype.intersect=function(t){for(var r=new e.TokenSet,n=void 0,i=[{qNode:t,output:r,node:this}];i.length;){n=i.pop();for(var o=Object.keys(n.qNode.edges),s=o.length,a=Object.keys(n.node.edges),u=a.length,c=0;c<s;c++)for(var l=o[c],d=0;d<u;d++){var h=a[d];if(h==l||"*"==l){var f=n.node.edges[h],p=n.qNode.edges[l],y=f.final&&p.final,m=void 0;h in n.output.edges?(m=n.output.edges[h]).final=m.final||y:((m=new e.TokenSet).final=y,n.output.edges[h]=m),i.push({qNode:p,output:m,node:f})}}}return r},e.TokenSet.Builder=function(){this.previousWord="",this.root=new e.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},e.TokenSet.Builder.prototype.insert=function(t){var r,n=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(i=0;i<t.length&&i<this.previousWord.length&&t[i]==this.previousWord[i];i++)n++;this.minimize(n),r=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var i=n;i<t.length;i++){var o=new e.TokenSet,s=t[i];r.edges[s]=o,this.uncheckedNodes.push({parent:r,char:s,child:o}),r=o}r.final=!0,this.previousWord=t},e.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},e.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */
e.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},e.Index.prototype.search=function(t){return this.query(function(r){new e.QueryParser(t,r).parse()})},e.Index.prototype.query=function(t){var r=new e.Query(this.fields),n=Object.create(null),i=Object.create(null);t.call(r,r);for(C=0;C<r.clauses.length;C++){var o=r.clauses[C],s=null;s=o.usePipeline?this.pipeline.runString(o.term):[o.term];for(var a=0;a<s.length;a++){var u=s[a];o.term=u;for(var c=e.TokenSet.fromClause(o),l=this.tokenSet.intersect(c).toArray(),d=0;d<l.length;d++)for(var h=l[d],f=this.invertedIndex[h],p=f._index,y=0;y<o.fields.length;y++){var m=o.fields[y],v=f[m],g=Object.keys(v);m in i||(i[m]=new e.Vector),i[m].upsert(p,1*o.boost,function(e,t){return e+t});for(var x=0;x<g.length;x++){var w,T,b=g[x],k=new e.FieldRef(b,m);w=v[b],T=new e.MatchData(h,m,w),k in n?n[k].combine(T):n[k]=T}}}}for(var L=Object.keys(n),S={},C=0;C<L.length;C++){var Q=e.FieldRef.fromString(L[C]),E=Q.docRef,P=this.fieldVectors[Q],_=i[Q.fieldName].similarity(P);E in S?(S[E].score+=_,S[E].matchData.combine(n[Q])):S[E]={ref:E,score:_,matchData:n[Q]}}return Object.keys(S).map(function(e){return S[e]}).sort(function(e,t){return t.score-e.score})},e.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),r=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:e.version,fields:this.fields,fieldVectors:r,invertedIndex:t,pipeline:this.pipeline.toJSON()}},e.Index.load=function(t){var r={},n={},i=t.fieldVectors,o={},s=t.invertedIndex,a=new e.TokenSet.Builder,u=e.Pipeline.load(t.pipeline);t.version!=e.version&&e.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+e.version+"' does not match serialized index '"+t.version+"'");for(d=0;d<i.length;d++){var c=(h=i[d])[0],l=h[1];n[c]=new e.Vector(l)}for(var d=0;d<s.length;d++){var h=s[d],f=h[0],p=h[1];a.insert(f),o[f]=p}return a.finish(),r.fields=t.fields,r.fieldVectors=n,r.invertedIndex=o,r.tokenSet=a.root,r.pipeline=u,new e.Index(r)},/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */
e.Builder=function(){this._ref="id",this._fields=[],this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=e.tokenizer,this.pipeline=new e.Pipeline,this.searchPipeline=new e.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},e.Builder.prototype.ref=function(e){this._ref=e},e.Builder.prototype.field=function(e){this._fields.push(e)},e.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},e.Builder.prototype.k1=function(e){this._k1=e},e.Builder.prototype.add=function(t){var r=t[this._ref];this.documentCount+=1;for(var n=0;n<this._fields.length;n++){var i=this._fields[n],o=t[i],s=this.tokenizer(o),a=this.pipeline.run(s),u=new e.FieldRef(r,i),c=Object.create(null);this.fieldTermFrequencies[u]=c,this.fieldLengths[u]=0,this.fieldLengths[u]+=a.length;for(var l=0;l<a.length;l++){var d=a[l];if(void 0==c[d]&&(c[d]=0),c[d]+=1,void 0==this.invertedIndex[d]){var h=Object.create(null);h._index=this.termIndex,this.termIndex+=1;for(var f=0;f<this._fields.length;f++)h[this._fields[f]]=Object.create(null);this.invertedIndex[d]=h}void 0==this.invertedIndex[d][i][r]&&(this.invertedIndex[d][i][r]=Object.create(null));for(var p=0;p<this.metadataWhitelist.length;p++){var y=this.metadataWhitelist[p],m=d.metadata[y];void 0==this.invertedIndex[d][i][r][y]&&(this.invertedIndex[d][i][r][y]=[]),this.invertedIndex[d][i][r][y].push(m)}}}},e.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),r=t.length,n={},i={},o=0;o<r;o++){var s=e.FieldRef.fromString(t[o]);i[a=s.fieldName]||(i[a]=0),i[a]+=1,n[a]||(n[a]=0),n[a]+=this.fieldLengths[s]}for(o=0;o<this._fields.length;o++){var a=this._fields[o];n[a]=n[a]/i[a]}this.averageFieldLength=n},e.Builder.prototype.createFieldVectors=function(){for(var t={},r=Object.keys(this.fieldTermFrequencies),n=r.length,i=0;i<n;i++){for(var o=e.FieldRef.fromString(r[i]),s=o.fieldName,a=this.fieldLengths[o],u=new e.Vector,c=this.fieldTermFrequencies[o],l=Object.keys(c),d=l.length,h=0;h<d;h++){var f=l[h],p=c[f],y=this.invertedIndex[f]._index,m=e.idf(this.invertedIndex[f],this.documentCount)*((this._k1+1)*p)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[s]))+p),v=Math.round(1e3*m)/1e3;u.insert(y,v)}t[o]=u}this.fieldVectors=t},e.Builder.prototype.createTokenSet=function(){this.tokenSet=e.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},e.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new e.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:this._fields,pipeline:this.searchPipeline})},e.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},e.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r),o=0;o<i.length;o++){var s=i[o];n[s]=r[s].slice()}this.metadata=Object.create(null),this.metadata[e]=Object.create(null),this.metadata[e][t]=n},e.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);void 0==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var o=0;o<i.length;o++){var s=i[o],a=Object.keys(e.metadata[n][s]);void 0==this.metadata[n][s]&&(this.metadata[n][s]=Object.create(null));for(var u=0;u<a.length;u++){var c=a[u];void 0==this.metadata[n][s][c]?this.metadata[n][s][c]=e.metadata[n][s][c]:this.metadata[n][s][c]=this.metadata[n][s][c].concat(e.metadata[n][s][c])}}}},e.Query=function(e){this.clauses=[],this.allFields=e},e.Query.wildcard=new String("*"),e.Query.wildcard.NONE=0,e.Query.wildcard.LEADING=1,e.Query.wildcard.TRAILING=2,e.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=e.Query.wildcard.NONE),t.wildcard&e.Query.wildcard.LEADING&&t.term.charAt(0)!=e.Query.wildcard&&(t.term="*"+t.term),t.wildcard&e.Query.wildcard.TRAILING&&t.term.slice(-1)!=e.Query.wildcard&&(t.term=t.term+"*"),this.clauses.push(t),this},e.Query.prototype.term=function(e,t){var r=t||{};return r.term=e,this.clause(r),this},e.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},e.QueryParseError.prototype=new Error,e.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},e.QueryLexer.prototype.run=function(){for(var t=e.QueryLexer.lexText;t;)t=t(this)},e.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},e.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},e.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},e.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return e.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},e.QueryLexer.prototype.width=function(){return this.pos-this.start},e.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},e.QueryLexer.prototype.backup=function(){this.pos-=1},e.QueryLexer.prototype.acceptDigitRun=function(){var t,r;do{r=(t=this.next()).charCodeAt(0)}while(r>47&&r<58);t!=e.QueryLexer.EOS&&this.backup()},e.QueryLexer.prototype.more=function(){return this.pos<this.length},e.QueryLexer.EOS="EOS",e.QueryLexer.FIELD="FIELD",e.QueryLexer.TERM="TERM",e.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",e.QueryLexer.BOOST="BOOST",e.QueryLexer.lexField=function(t){return t.backup(),t.emit(e.QueryLexer.FIELD),t.ignore(),e.QueryLexer.lexText},e.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(e.QueryLexer.TERM)),t.ignore(),t.more())return e.QueryLexer.lexText},e.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.EDIT_DISTANCE),e.QueryLexer.lexText},e.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.BOOST),e.QueryLexer.lexText},e.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(e.QueryLexer.TERM)},e.QueryLexer.termSeparator=e.tokenizer.separator,e.QueryLexer.lexText=function(t){for(;;){var r=t.next();if(r==e.QueryLexer.EOS)return e.QueryLexer.lexEOS;if(92!=r.charCodeAt(0)){if(":"==r)return e.QueryLexer.lexField;if("~"==r)return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexEditDistance;if("^"==r)return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexBoost;if(r.match(e.QueryLexer.termSeparator))return e.QueryLexer.lexTerm}else t.escapeCharacter()}},e.QueryParser=function(t,r){this.lexer=new e.QueryLexer(t),this.query=r,this.currentClause={},this.lexemeIdx=0},e.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=e.QueryParser.parseFieldOrTerm;t;)t=t(this);return this.query},e.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},e.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},e.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},e.QueryParser.parseFieldOrTerm=function(t){var r=t.peekLexeme();if(void 0!=r)switch(r.type){case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var n="expected either a field or a term, found "+r.type;throw r.str.length>=1&&(n+=" with value '"+r.str+"'"),new e.QueryParseError(n,r.start,r.end)}},e.QueryParser.parseField=function(t){var r=t.consumeLexeme();if(void 0!=r){if(-1==t.query.allFields.indexOf(r.str)){var n=t.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),i="unrecognised field '"+r.str+"', possible fields: "+n;throw new e.QueryParseError(i,r.start,r.end)}t.currentClause.fields=[r.str];var o=t.peekLexeme();if(void 0==o){i="expecting term, found nothing";throw new e.QueryParseError(i,r.start,r.end)}switch(o.type){case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:i="expecting term, found '"+o.type+"'";throw new e.QueryParseError(i,o.start,o.end)}}},e.QueryParser.parseTerm=function(t){var r=t.consumeLexeme();if(void 0!=r){t.currentClause.term=r.str.toLowerCase(),-1!=r.str.indexOf("*")&&(t.currentClause.usePipeline=!1);var n=t.peekLexeme();if(void 0!=n)switch(n.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var i="Unexpected lexeme type '"+n.type+"'";throw new e.QueryParseError(i,n.start,n.end)}else t.nextClause()}},e.QueryParser.parseEditDistance=function(t){var r=t.consumeLexeme();if(void 0!=r){var n=parseInt(r.str,10);if(isNaN(n)){o="edit distance must be numeric";throw new e.QueryParseError(o,r.start,r.end)}t.currentClause.editDistance=n;var i=t.peekLexeme();if(void 0!=i)switch(i.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var o="Unexpected lexeme type '"+i.type+"'";throw new e.QueryParseError(o,i.start,i.end)}else t.nextClause()}},e.QueryParser.parseBoost=function(t){var r=t.consumeLexeme();if(void 0!=r){var n=parseInt(r.str,10);if(isNaN(n)){o="boost must be numeric";throw new e.QueryParseError(o,r.start,r.end)}t.currentClause.boost=n;var i=t.peekLexeme();if(void 0!=i)switch(i.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;default:var o="Unexpected lexeme type '"+i.type+"'";throw new e.QueryParseError(o,i.start,i.end)}else t.nextClause()}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}();