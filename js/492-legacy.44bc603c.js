(self["webpackChunkmain"]=self["webpackChunkmain"]||[]).push([[492],{37234:function(t,e,r){var n=r(29753);t.exports=n((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},76543:function(t,e,r){var n=r(59763),o=Math.floor,i=function(t,e){var r=t.length,c=o(r/2);return r<8?a(t,e):u(t,i(n(t,0,c),e),i(n(t,c),e),e)},a=function(t,e){var r,n,o=t.length,i=1;while(i<o){n=i,r=t[i];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},u=function(t,e,r,n){var o=e.length,i=r.length,a=0,u=0;while(a<o||u<i)t[a+u]=a<o&&u<i?n(e[a],r[u])<=0?e[a++]:r[u++]:a<o?e[a++]:r[u++];return t};t.exports=i},76375:function(t,e,r){var n=r(43991),o=n.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},17162:function(t,e,r){var n=r(43991);t.exports=/MSIE|Trident/.test(n)},35910:function(t,e,r){var n=r(43991),o=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},35288:function(t,e,r){var n=r(29753);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},48371:function(t,e,r){var n=r(74633),o=r(67616),i=Math.floor,a=n("".charAt),u=n("".replace),c=n("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,h,p){var l=r+t.length,d=n.length,v=f;return void 0!==h&&(h=o(h),v=s),u(p,v,(function(o,u){var s;switch(a(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,l);case"<":s=h[c(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>d){var p=i(f/10);return 0===p?o:p<=d?void 0===n[p-1]?a(u,1):n[p-1]+a(u,1):o}s=n[f-1]}return void 0===s?"":s}))}},17168:function(t,e,r){var n=r(79989),o=r(74633),i=r(11479),a=r(23502),u=r(72772),c=r(73645).f,s=r(6389),f=r(63011),h=r(18050),p=r(55044),l=r(35288),d=!1,v=p("meta"),y=0,g=function(t){c(t,v,{value:{objectID:"O"+y++,weakData:{}}})},m=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,v)){if(!h(t))return"F";if(!e)return"E";g(t)}return t[v].objectID},w=function(t,e){if(!u(t,v)){if(!h(t))return!0;if(!e)return!1;g(t)}return t[v].weakData},b=function(t){return l&&d&&h(t)&&!u(t,v)&&g(t),t},x=function(){k.enable=function(){},d=!0;var t=s.f,e=o([].splice),r={};r[v]=1,t(r).length&&(s.f=function(r){for(var n=t(r),o=0,i=n.length;o<i;o++)if(n[o]===v){e(n,o,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},k=t.exports={enable:x,fastKey:m,getWeakData:w,onFreeze:b};i[v]=!0},18050:function(t,e,r){var n=r(29753),o=r(23502),i=r(86742),a=r(37234),u=Object.isExtensible,c=n((function(){u(1)}));t.exports=c||a?function(t){return!!o(t)&&((!a||"ArrayBuffer"!=i(t))&&(!u||u(t)))}:u},9918:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},20131:function(t,e,r){"use strict";var n=r(3070),o=r(75503),i=r(61418),a=r(25873),u=n.RangeError;t.exports=function(t){var e=i(a(this)),r="",n=o(t);if(n<0||n==1/0)throw u("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},41827:function(t,e,r){var n=r(29406).PROPER,o=r(29753),i=r(53358),a="​᠎";t.exports=function(t){return o((function(){return!!i[t]()||a[t]()!==a||n&&i[t].name!==t}))}},48580:function(t,e,r){"use strict";var n=r(79989),o=r(74633),i=r(36404),a=r(36993),u=r(61376),c=o([].join),s=i!=Object,f=u("join",",");n({target:"Array",proto:!0,forced:s||!f},{join:function(t){return c(a(this),void 0===t?",":t)}})},89925:function(t,e,r){"use strict";var n=r(79989),o=r(74633),i=r(88099),a=r(67616),u=r(18344),c=r(61418),s=r(29753),f=r(76543),h=r(61376),p=r(76375),l=r(17162),d=r(67550),v=r(35910),y=[],g=o(y.sort),m=o(y.push),w=s((function(){y.sort(void 0)})),b=s((function(){y.sort(null)})),x=h("sort"),k=!s((function(){if(d)return d<70;if(!(p&&p>3)){if(l)return!0;if(v)return v<603;var t,e,r,n,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)y.push({k:e+n,v:r})}for(y.sort((function(t,e){return e.v-t.v})),n=0;n<y.length;n++)e=y[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),R=w||!b||!x||!k,E=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};n({target:"Array",proto:!0,forced:R},{sort:function(t){void 0!==t&&i(t);var e=a(this);if(k)return void 0===t?g(e):g(e,t);var r,n,o=[],c=u(e);for(n=0;n<c;n++)n in e&&m(o,e[n]);f(o,E(t)),r=o.length,n=0;while(n<r)e[n]=o[n++];while(n<c)delete e[n++];return e}})},24430:function(t,e,r){var n=r(79989),o=r(3070),i=r(21223),a=r(76362),u=r(74633),c=r(29753),s=o.Array,f=i("JSON","stringify"),h=u(/./.exec),p=u("".charAt),l=u("".charCodeAt),d=u("".replace),v=u(1..toString),y=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,w=function(t,e,r){var n=p(r,e-1),o=p(r,e+1);return h(g,t)&&!h(m,o)||h(m,t)&&!h(g,n)?"\\u"+v(l(t,0),16):t},b=c((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&n({target:"JSON",stat:!0,forced:b},{stringify:function(t,e,r){for(var n=0,o=arguments.length,i=s(o);n<o;n++)i[n]=arguments[n];var u=a(f,null,i);return"string"==typeof u?d(u,y,w):u}})},66797:function(t,e,r){"use strict";var n=r(79989),o=r(3070),i=r(74633),a=r(75503),u=r(10276),c=r(20131),s=r(29753),f=o.RangeError,h=o.String,p=Math.floor,l=i(c),d=i("".slice),v=i(1..toFixed),y=function(t,e,r){return 0===e?r:e%2===1?y(t,e-1,r*t):y(t*t,e/2,r)},g=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},m=function(t,e,r){var n=-1,o=r;while(++n<6)o+=e*t[n],t[n]=o%1e7,o=p(o/1e7)},w=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=p(n/e),n=n%e*1e7},b=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=h(t[e]);r=""===r?n:r+l("0",7-n.length)+n}return r},x=s((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!s((function(){v({})}));n({target:"Number",proto:!0,forced:x},{toFixed:function(t){var e,r,n,o,i=u(this),c=a(t),s=[0,0,0,0,0,0],p="",v="0";if(c<0||c>20)throw f("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return h(i);if(i<0&&(p="-",i=-i),i>1e-21)if(e=g(i*y(2,69,1))-69,r=e<0?i*y(2,-e,1):i/y(2,e,1),r*=4503599627370496,e=52-e,e>0){m(s,0,r),n=c;while(n>=7)m(s,1e7,0),n-=7;m(s,y(10,n,1),0),n=e-1;while(n>=23)w(s,1<<23),n-=23;w(s,1<<n),m(s,1,1),w(s,2),v=b(s)}else m(s,0,r),m(s,1<<-e,0),v=b(s)+l("0",c);return c>0?(o=v.length,v=p+(o<=c?"0."+l("0",c-o)+v:d(v,0,o-c)+"."+d(v,o-c))):v=p+v,v}})},38383:function(t,e,r){var n=r(79989),o=r(35288),i=r(29753),a=r(23502),u=r(17168).onFreeze,c=Object.freeze,s=i((function(){c(1)}));n({target:"Object",stat:!0,forced:s,sham:!o},{freeze:function(t){return c&&a(t)?c(u(t)):t}})},86939:function(t,e,r){var n=r(79989),o=r(67616),i=r(86061),a=r(29753),u=a((function(){i(1)}));n({target:"Object",stat:!0,forced:u},{keys:function(t){return i(o(t))}})},58002:function(t,e,r){var n=r(79989),o=r(20131);n({target:"String",proto:!0},{repeat:o})},29951:function(t,e,r){"use strict";var n=r(76362),o=r(78608),i=r(74633),a=r(58346),u=r(29753),c=r(48849),s=r(85467),f=r(75503),h=r(62717),p=r(61418),l=r(25873),d=r(88475),v=r(78631),y=r(48371),g=r(4581),m=r(93081),w=m("replace"),b=Math.max,x=Math.min,k=i([].concat),R=i([].push),E=i("".indexOf),O=i("".slice),A=function(t){return void 0===t?t:String(t)},C=function(){return"$0"==="a".replace(/./,"$0")}(),j=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),$=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,r){var i=j?"$":"$0";return[function(t,r){var n=l(this),i=void 0==t?void 0:v(t,w);return i?o(i,t,n,r):o(e,p(n),t,r)},function(t,o){var a=c(this),u=p(t);if("string"==typeof o&&-1===E(o,i)&&-1===E(o,"$<")){var l=r(e,a,u,o);if(l.done)return l.value}var v=s(o);v||(o=p(o));var m=a.global;if(m){var w=a.unicode;a.lastIndex=0}var C=[];while(1){var j=g(a,u);if(null===j)break;if(R(C,j),!m)break;var $=p(j[0]);""===$&&(a.lastIndex=d(u,h(a.lastIndex),w))}for(var S="",_=0,P=0;P<C.length;P++){j=C[P];for(var T=p(j[0]),L=b(x(f(j.index),u.length),0),I=[],F=1;F<j.length;F++)R(I,A(j[F]));var q=j.groups;if(v){var B=k([T],I,L,u);void 0!==q&&R(B,q);var M=p(n(o,void 0,B))}else M=y(T,u,L,I,q,o);L>=_&&(S+=O(u,_,L)+M,_=L+T.length)}return S+O(u,_)}]}),!$||!C||j)},29378:function(t,e,r){"use strict";var n=r(78608),o=r(58346),i=r(48849),a=r(25873),u=r(9918),c=r(61418),s=r(78631),f=r(4581);o("search",(function(t,e,r){return[function(e){var r=a(this),o=void 0==e?void 0:s(e,t);return o?n(o,e,r):new RegExp(e)[t](c(r))},function(t){var n=i(this),o=c(t),a=r(e,n,o);if(a.done)return a.value;var s=n.lastIndex;u(s,0)||(n.lastIndex=0);var h=f(n,o);return u(n.lastIndex,s)||(n.lastIndex=s),null===h?-1:h.index}]}))},30665:function(t,e,r){"use strict";var n=r(79989),o=r(79045).trim,i=r(41827);n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},77492:function(t,e,r){"use strict";r.r(e);var n=r(47772);r(56620),r(71719),r(98223),r(35261),r(29951),r(34397),r(30665),r(96704),r(25765),r(48580),r(26911),r(86939),r(44969),r(38383),r(89925),r(10629),r(55960),r(34515),r(83236),r(58002),r(24430),r(11586),r(96896),r(56296),r(45742),r(66797),r(34930),r(33344),r(52209),r(65900),r(77618),r(58671),r(29378);function o(t,e){for(var r in e)t[r]=e[r];return t}var i=/[!'()*]/g,a=function(t){return"%"+t.charCodeAt(0).toString(16)},u=/%2C/g,c=function(t){return encodeURIComponent(t).replace(i,a).replace(u,",")};function s(t){try{return decodeURIComponent(t)}catch(e){0}return t}function f(t,e,r){void 0===e&&(e={});var n,o=r||p;try{n=o(t||"")}catch(u){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(h):h(a)}return n}var h=function(t){return null==t||"object"===(0,n.Z)(t)?t:String(t)};function p(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=s(r.shift()),o=r.length>0?s(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function l(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return c(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(c(e)):n.push(c(e)+"="+c(t)))})),n.join("&")}return c(e)+"="+c(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function v(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=y(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:w(e,o),matched:t?m(t):[]};return r&&(a.redirectedFrom=w(r,o)),Object.freeze(a)}function y(t){if(Array.isArray(t))return t.map(y);if(t&&"object"===(0,n.Z)(t)){var e={};for(var r in t)e[r]=y(t[r]);return e}return t}var g=v(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function w(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||l;return(r||"/")+i(n)+o}function b(t,e,r){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(r||t.hash===e.hash&&x(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(r||t.hash===e.hash&&x(t.query,e.query)&&x(t.params,e.params))))}function x(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),o=Object.keys(e).sort();return r.length===o.length&&r.every((function(r,i){var a=t[r],u=o[i];if(u!==r)return!1;var c=e[r];return null==a||null==c?a===c:"object"===(0,n.Z)(a)&&"object"===(0,n.Z)(c)?x(a,c):String(a)===String(c)}))}function k(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&R(t.query,e.query)}function R(t,e){for(var r in e)if(!(r in t))return!1;return!0}function E(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var O={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,i=e.parent,a=e.data;a.routerView=!0;var u=i.$createElement,c=r.name,s=i.$route,f=i._routerViewCache||(i._routerViewCache={}),h=0,p=!1;while(i&&i._routerRoot!==i){var l=i.$vnode?i.$vnode.data:{};l.routerView&&h++,l.keepAlive&&i._directInactive&&i._inactive&&(p=!0),i=i.$parent}if(a.routerViewDepth=h,p){var d=f[c],v=d&&d.component;return v?(d.configProps&&A(v,a,d.route,d.configProps),u(v,a,n)):u()}var y=s.matched[h],g=y&&y.components[c];if(!y||!g)return f[c]=null,u();f[c]={component:g},a.registerRouteInstance=function(t,e){var r=y.instances[c];(e&&r!==t||!e&&r===t)&&(y.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[c]&&(y.instances[c]=t.componentInstance),E(s)};var m=y.props&&y.props[c];return m&&(o(f[c],{route:s,configProps:m}),A(g,a,s,m)),u(g,a,n)}};function A(t,e,r,n){var i=e.props=C(r,n);if(i){i=e.props=o({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}function C(t,e){switch((0,n.Z)(e)){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function j(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function $(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function S(t){return t.replace(/\/+/g,"/")}var _=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},P=X,T=B,L=M,I=U,F=Q,q=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function B(t,e){var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(r=q.exec(t))){var c=r[0],s=r[1],f=r.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var h=t[i],p=r[2],l=r[3],d=r[4],v=r[5],y=r[6],g=r[7];a&&(n.push(a),a="");var m=null!=p&&null!=h&&h!==p,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:p||"",delimiter:x,optional:b,repeat:w,partial:m,asterisk:!!g,pattern:k?z(k):g?".*":"[^"+Z(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function M(t,e){return U(B(t,e),e)}function D(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var r=new Array(t.length),o=0;o<t.length;o++)"object"===(0,n.Z)(t[o])&&(r[o]=new RegExp("^(?:"+t[o].pattern+")$",H(e)));return function(e,n){for(var o="",i=e||{},a=n||{},u=a.pretty?D:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!==typeof s){var f,h=i[s.name];if(null==h){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(_(h)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(f=u(h[p]),!r[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===p?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?N(h):u(h),!r[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function Z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function V(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function K(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return V(t,e)}function J(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(X(t[o],e,r).source);var i=new RegExp("(?:"+n.join("|")+")",H(r));return V(i,e)}function W(t,e,r){return Q(B(t,r),e,r)}function Q(t,e,r){_(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=Z(u);else{var c=Z(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=Z(r.delimiter||"/"),h=i.slice(-f.length)===f;return n||(i=(h?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":n&&h?"":"(?="+f+"|$)",V(new RegExp("^"+i,H(r)),e)}function X(t,e,r){return _(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?K(t,e):_(t)?J(t,e,r):W(t,e,r)}P.parse=T,P.compile=L,P.tokensToFunction=I,P.tokensToRegExp=F;var Y=Object.create(null);function G(t,e,r){e=e||{};try{var n=Y[t]||(Y[t]=P.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function tt(t,e,r,i){var a="string"===typeof t?{path:t}:t;if(a._normalized)return a;if(a.name){a=o({},t);var u=a.params;return u&&"object"===(0,n.Z)(u)&&(a.params=o({},u)),a}if(!a.path&&a.params&&e){a=o({},a),a._normalized=!0;var c=o(o({},e.params),a.params);if(e.name)a.name=e.name,a.params=c;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;a.path=G(s,c,"path "+e.path)}else 0;return a}var h=$(a.path||""),p=e&&e.path||"/",l=h.path?j(h.path,p,r||a.append):p,d=f(h.query,a.query,i&&i.options.parseQuery),v=a.hash||h.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:l,query:d,hash:v}}var et,rt=[String,Object],nt=[String,Array],ot=function(){},it={name:"RouterLink",props:{to:{type:rt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,i=r.resolve(this.to,n,this.append),a=i.location,u=i.route,c=i.href,s={},f=r.options.linkActiveClass,h=r.options.linkExactActiveClass,p=null==f?"router-link-active":f,l=null==h?"router-link-exact-active":h,d=null==this.activeClass?p:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,g=u.redirectedFrom?v(null,tt(u.redirectedFrom),null,r):u;s[y]=b(n,g,this.exactPath),s[d]=this.exact||this.exactPath?s[y]:k(n,g);var m=s[y]?this.ariaCurrentValue:null,w=function(t){at(t)&&(e.replace?r.replace(a,ot):r.push(a,ot))},x={click:at};Array.isArray(this.event)?this.event.forEach((function(t){x[t]=w})):x[this.event]=w;var R={class:s},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:w,isActive:s[d],isExactActive:s[y]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=x,R.attrs={href:c,"aria-current":m};else{var O=ut(this.$slots.default);if(O){O.isStatic=!1;var A=O.data=o({},O.data);for(var C in A.on=A.on||{},A.on){var j=A.on[C];C in x&&(A.on[C]=Array.isArray(j)?j:[j])}for(var $ in x)$ in A.on?A.on[$].push(x[$]):A.on[$]=w;var S=O.data.attrs=o({},O.data.attrs);S.href=c,S["aria-current"]=m}else R.on=x}return t(this.tag,R,this.$slots.default)}};function at(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ut(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=ut(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",O),t.component("RouterLink",it);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var st="undefined"!==typeof window;function ft(t,e,r,n,o){var i=e||[],a=r||Object.create(null),u=n||Object.create(null);t.forEach((function(t){ht(i,a,u,t,o)}));for(var c=0,s=i.length;c<s;c++)"*"===i[c]&&(i.push(i.splice(c,1)[0]),s--,c--);return{pathList:i,pathMap:a,nameMap:u}}function ht(t,e,r,n,o,i){var a=n.path,u=n.name;var c=n.pathToRegexpOptions||{},s=lt(a,o,c.strict);"boolean"===typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var f={path:s,regex:pt(s,c),components:n.components||{default:n.component},alias:n.alias?"string"===typeof n.alias?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?S(i+"/"+n.path):void 0;ht(t,e,r,n,f,o)})),e[f.path]||(t.push(f.path),e[f.path]=f),void 0!==n.alias)for(var h=Array.isArray(n.alias)?n.alias:[n.alias],p=0;p<h.length;++p){var l=h[p];0;var d={path:l,children:n.children};ht(t,e,r,d,o,f.path||"/")}u&&(r[u]||(r[u]=f))}function pt(t,e){var r=P(t,[],e);return r}function lt(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:S(e.path+"/"+t)}function dt(t,e){var r=ft(t),o=r.pathList,i=r.pathMap,a=r.nameMap;function u(t){ft(t,o,i,a)}function c(t,e){var r="object"!==(0,n.Z)(t)?a[t]:void 0;ft([e||t],o,i,a,r),r&&r.alias.length&&ft(r.alias.map((function(t){return{path:t,children:[e]}})),o,i,a,r)}function s(){return o.map((function(t){return i[t]}))}function f(t,r,u){var c=tt(t,r,!1,e),s=c.name;if(s){var f=a[s];if(!f)return l(null,c);var h=f.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==(0,n.Z)(c.params)&&(c.params={}),r&&"object"===(0,n.Z)(r.params))for(var p in r.params)!(p in c.params)&&h.indexOf(p)>-1&&(c.params[p]=r.params[p]);return c.path=G(f.path,c.params,'named route "'+s+'"'),l(f,c,u)}if(c.path){c.params={};for(var d=0;d<o.length;d++){var v=o[d],y=i[v];if(vt(y.regex,c.path,c.params))return l(y,c,u)}}return l(null,c)}function h(t,r){var o=t.redirect,i="function"===typeof o?o(v(t,r,null,e)):o;if("string"===typeof i&&(i={path:i}),!i||"object"!==(0,n.Z)(i))return l(null,r);var u=i,c=u.name,s=u.path,h=r.query,p=r.hash,d=r.params;if(h=u.hasOwnProperty("query")?u.query:h,p=u.hasOwnProperty("hash")?u.hash:p,d=u.hasOwnProperty("params")?u.params:d,c){a[c];return f({_normalized:!0,name:c,query:h,hash:p,params:d},void 0,r)}if(s){var y=yt(s,t),g=G(y,d,'redirect route with path "'+y+'"');return f({_normalized:!0,path:g,query:h,hash:p},void 0,r)}return l(null,r)}function p(t,e,r){var n=G(r,e.params,'aliased route with path "'+r+'"'),o=f({_normalized:!0,path:n});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,l(a,e)}return l(null,e)}function l(t,r,n){return t&&t.redirect?h(t,n||r):t&&t.matchAs?p(t,r,t.matchAs):v(t,r,n,e)}return{match:f,addRoute:c,getRoutes:s,addRoutes:u}}function vt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"===typeof n[o]?s(n[o]):n[o])}return!0}function yt(t,e){return j(t,e.parent?e.parent.path:"/",!0)}var gt=st&&window.performance&&window.performance.now?window.performance:Date;function mt(){return gt.now().toFixed(3)}var wt=mt();function bt(){return wt}function xt(t){return wt=t}var kt=Object.create(null);function Rt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=o({},window.history.state);return r.key=bt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function Et(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=Ct(),a=o.call(t,e,r,n?i:null);a&&("function"===typeof a.then?a.then((function(t){Lt(t,i)})).catch((function(t){0})):Lt(a,i))}))}}function Ot(){var t=bt();t&&(kt[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){Ot(),t.state&&t.state.key&&xt(t.state.key)}function Ct(){var t=bt();if(t)return kt[t]}function jt(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function $t(t){return Pt(t.x)||Pt(t.y)}function St(t){return{x:Pt(t.x)?t.x:window.pageXOffset,y:Pt(t.y)?t.y:window.pageYOffset}}function _t(t){return{x:Pt(t.x)?t.x:0,y:Pt(t.y)?t.y:0}}function Pt(t){return"number"===typeof t}var Tt=/^#\d/;function Lt(t,e){var r="object"===(0,n.Z)(t);if(r&&"string"===typeof t.selector){var o=Tt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"===(0,n.Z)(t.offset)?t.offset:{};i=_t(i),e=jt(o,i)}else $t(t)&&(e=St(t))}else r&&$t(t)&&(e=St(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var It=st&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Ft(t,e){Ot();var r=window.history;try{if(e){var n=o({},r.state);n.key=bt(),r.replaceState(n,"",t)}else r.pushState({key:xt(mt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function qt(t){Ft(t,!0)}function Bt(t,e,r){var n=function n(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return zt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function Nt(t,e){var r=zt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function Ut(t,e){return zt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Zt(t,e){return zt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Vt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Vt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Jt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,r,n){var o=!1,i=0,a=null;Qt(t,(function(t,e,r,u){if("function"===typeof t&&void 0===t.cid){o=!0,i++;var c,s=te((function(e){Gt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),r.components[u]=e,i--,i<=0&&n()})),f=te((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Kt(t)?t:new Error(e),n(a))}));try{c=t(s,f)}catch(p){f(p)}if(c)if("function"===typeof c.then)c.then(s,f);else{var h=c.component;h&&"function"===typeof h.then&&h.then(s,f)}}})),o||n()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===(0,n.Z)(Symbol.toStringTag);function Gt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var ee=function(t,e){this.router=t,this.base=re(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function re(t){if(!t)if(st){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n;r++)if(t[r]!==e[r])break;return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function oe(t,e,r,n){var o=Qt(t,(function(t,n,o,i){var a=ie(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Xt(n?o.reverse():o)}function ie(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function ae(t){return oe(t,"beforeRouteLeave",ce,!0)}function ue(t){return oe(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function se(t){return oe(t,"beforeRouteEnter",(function(t,e,r,n){return fe(t,r,n)}))}function fe(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"===typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Jt(t,Mt.redirected)&&i===g||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,r){var o=this,i=this.current;this.pending=t;var a=function(t){!Jt(t)&&Kt(t)&&(o.errorCbs.length?o.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},u=t.matched.length-1,c=i.matched.length-1;if(b(t,i)&&u===c&&t.matched[u]===i.matched[c])return this.ensureURL(),t.hash&&Et(this.router,i,t,!1),a(Nt(i,t));var s=ne(this.current.matched,t.matched),f=s.updated,h=s.deactivated,p=s.activated,l=[].concat(ae(h),this.router.beforeHooks,ue(f),p.map((function(t){return t.beforeEnter})),Wt(p)),d=function(e,r){if(o.pending!==t)return a(Ut(i,t));try{e(t,i,(function(e){!1===e?(o.ensureURL(!0),a(Zt(i,t))):Kt(e)?(o.ensureURL(!0),a(e)):"string"===typeof e||"object"===(0,n.Z)(e)&&("string"===typeof e.path||"string"===typeof e.name)?(a(Dt(i,t)),"object"===(0,n.Z)(e)&&e.replace?o.replace(e):o.push(e)):r(e)}))}catch(u){a(u)}};Bt(l,d,(function(){var r=se(p),n=r.concat(o.router.resolveHooks);Bt(n,d,(function(){if(o.pending!==t)return a(Ut(i,t));o.pending=null,e(t),o.router.app&&o.router.app.$nextTick((function(){E(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var he=function(t){function e(e,r){t.call(this,e,r),this._startLocation=pe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=It&&r;n&&this.listeners.push(Rt());var o=function(){var r=t.current,o=pe(t.base);t.current===g&&o===t._startLocation||t.transitionTo(o,(function(t){n&&Et(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){Ft(S(n.base+t.fullPath)),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(S(n.base+t.fullPath)),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(pe(this.base)!==this.current.fullPath){var e=S(this.base+this.current.fullPath);t?Ft(e):qt(e)}},e.prototype.getCurrentLocation=function(){return pe(this.base)},e}(ee);function pe(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(S(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var le=function(t){function e(e,r,n){t.call(this,e,r),n&&de(this.base)||ve()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=It&&r;n&&this.listeners.push(Rt());var o=function(){var e=t.current;ve()&&t.transitionTo(ye(),(function(r){n&&Et(t.router,r,e,!0),It||we(r.fullPath)}))},i=It?"popstate":"hashchange";window.addEventListener(i,o),this.listeners.push((function(){window.removeEventListener(i,o)}))}},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){me(t.fullPath),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){we(t.fullPath),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ye()!==e&&(t?me(e):we(e))},e.prototype.getCurrentLocation=function(){return ye()},e}(ee);function de(t){var e=pe(t);if(!/^\/#/.test(e))return window.location.replace(S(t+"/#"+e)),!0}function ve(){var t=ye();return"/"===t.charAt(0)||(we("/"+t),!1)}function ye(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function me(t){It?Ft(ge(t)):window.location.hash=t}function we(t){It?qt(ge(t)):window.location.replace(ge(t))}var be=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Jt(t,Mt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),xe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!It&&!1!==t.fallback,this.fallback&&(e="hash"),st||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new le(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},ke={currentRoute:{configurable:!0}};function Re(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ee(t,e,r){var n="hash"===r?"#"+e:e;return t?S(t+"/"+n):n}xe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},ke.currentRoute.get=function(){return this.history&&this.history.current},xe.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof he||r instanceof le){var n=function(t){var n=r.current,o=e.options.scrollBehavior,i=It&&o;i&&"fullPath"in t&&Et(e,t,n,!1)},o=function(t){r.setupListeners(),n(t)};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},xe.prototype.beforeEach=function(t){return Re(this.beforeHooks,t)},xe.prototype.beforeResolve=function(t){return Re(this.resolveHooks,t)},xe.prototype.afterEach=function(t){return Re(this.afterHooks,t)},xe.prototype.onReady=function(t,e){this.history.onReady(t,e)},xe.prototype.onError=function(t){this.history.onError(t)},xe.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},xe.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},xe.prototype.go=function(t){this.history.go(t)},xe.prototype.back=function(){this.go(-1)},xe.prototype.forward=function(){this.go(1)},xe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},xe.prototype.resolve=function(t,e,r){e=e||this.history.current;var n=tt(t,e,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=Ee(a,i,this.mode);return{location:n,route:o,href:u,normalizedTo:n,resolved:o}},xe.prototype.getRoutes=function(){return this.matcher.getRoutes()},xe.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},xe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(xe.prototype,ke),xe.install=ct,xe.version="3.5.3",xe.isNavigationFailure=Jt,xe.NavigationFailureType=Mt,xe.START_LOCATION=g,st&&window.Vue&&window.Vue.use(xe),e["default"]=xe}}]);
//# sourceMappingURL=492-legacy.44bc603c.js.map