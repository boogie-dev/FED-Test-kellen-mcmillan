(self.webpackChunkdigital_engagement_fed_test=self.webpackChunkdigital_engagement_fed_test||[]).push([[179],{318:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},673:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},586:(e,t,n)=>{var r=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,s=o.length,c=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(e){return"[Circular]"}default:return e}})),u=o[n];n<s;u=o[++n])f(u)||!b(u)?c+=" "+u:c+=" "+i(u);return c},t.deprecate=function(e,r){if(g(n.g.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var o=!1;return function(){if(!o){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),o=!0}return e.apply(this,arguments)}};var o,s={};function i(e,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),l(r,e,r.depth)}function c(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function u(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return h(o)||(o=l(e,o,r)),o}var s=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return y(t)?e.stylize(""+t,"number"):m(t)?e.stylize(""+t,"boolean"):f(t)?e.stylize("null","null"):void 0}(e,n);if(s)return s;var i=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),A(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return a(n);if(0===i.length){if(S(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return e.stylize(Date.prototype.toString.call(n),"date");if(A(n))return a(n)}var b,L="",k=!1,C=["{","}"];return p(n)&&(k=!0,C=["[","]"]),S(n)&&(L=" [Function"+(n.name?": "+n.name:"")+"]"),v(n)&&(L=" "+RegExp.prototype.toString.call(n)),E(n)&&(L=" "+Date.prototype.toUTCString.call(n)),A(n)&&(L=" "+a(n)),0!==i.length||k&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),b=k?function(e,t,n,r,o){for(var s=[],i=0,c=t.length;i<c;++i)x(t,String(i))?s.push(d(e,t,n,r,String(i),!0)):s.push("");return o.forEach((function(o){o.match(/^\d+$/)||s.push(d(e,t,n,r,o,!0))})),s}(e,n,r,c,i):i.map((function(t){return d(e,n,r,c,t,k)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(b,L,C)):C[0]+L+C[1]}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,s){var i,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),x(r,o)||(i="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=f(n)?l(e,u.value,null):l(e,u.value,n-1)).indexOf("\n")>-1&&(c=s?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),g(i)){if(s&&o.match(/^\d+$/))return c;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+c}function p(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function f(e){return null===e}function y(e){return"number"==typeof e}function h(e){return"string"==typeof e}function g(e){return void 0===e}function v(e){return b(e)&&"[object RegExp]"===L(e)}function b(e){return"object"==typeof e&&null!==e}function E(e){return b(e)&&"[object Date]"===L(e)}function A(e){return b(e)&&("[object Error]"===L(e)||e instanceof Error)}function S(e){return"function"==typeof e}function L(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(g(o)&&(o=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=process.pid;s[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else s[e]=function(){};return s[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=m,t.isNull=f,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=h,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=v,t.isObject=b,t.isDate=E,t.isError=A,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(673);var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function O(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),C[e.getMonth()],t].join(" ")}function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",O(),t.format.apply(t,arguments))},t.inherits=n(318),t._extend=function(e,t){if(!t||!b(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}},873:(e,t,n)=>{"use strict";var r="win32"===process.platform,o=n(586);function s(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o))}return n}function i(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,u=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,l={};function a(e){var t=c.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=u.exec(r);return[n,o[1],o[2],o[3]]}function d(e){var t=c.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function p(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}l.resolve=function(){for(var e="",t="",n=!1,r=arguments.length-1;r>=-1;r--){var i;if(r>=0?i=arguments[r]:e?(i=process.env["="+e])&&i.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(i=e+"\\"):i=process.cwd(),!o.isString(i))throw new TypeError("Arguments to path.resolve must be strings");if(i){var c=d(i),u=c.device,l=c.isUnc,a=c.isAbsolute,m=c.tail;if((!u||!e||u.toLowerCase()===e.toLowerCase())&&(e||(e=u),n||(t=m+"\\"+t,n=a),e&&n))break}}return l&&(e=p(e)),e+(n?"\\":"")+(t=s(t.split(/[\\\/]+/),!n).join("\\"))||"."},l.normalize=function(e){var t=d(e),n=t.device,r=t.isUnc,o=t.isAbsolute,i=t.tail,c=/[\\\/]$/.test(i);return(i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&c&&(i+="\\"),r&&(n=p(n)),n+(o?"\\":"")+i},l.isAbsolute=function(e){return d(e).isAbsolute},l.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!o.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var r=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),l.normalize(r)},l.relative=function(e,t){e=l.resolve(e),t=l.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),o=i(t.split("\\")),s=i(n.split("\\")),c=i(r.split("\\")),u=Math.min(s.length,c.length),a=u,d=0;d<u;d++)if(s[d]!==c[d]){a=d;break}if(0==a)return t;var p=[];for(d=a;d<s.length;d++)p.push("..");return(p=p.concat(o.slice(a))).join("\\")},l._makeLong=function(e){if(!o.isString(e))return e;if(!e)return"";var t=l.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},l.dirname=function(e){var t=a(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},l.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},l.extname=function(e){return a(e)[3]},l.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===l.sep?n+r:n+l.sep+r:r},l.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=a(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},l.sep="\\",l.delimiter=";";var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,f={};function y(e){return m.exec(e).slice(1)}f.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var r=n>=0?arguments[n]:process.cwd();if(!o.isString(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,t="/"===r[0])}return(t?"/":"")+(e=s(e.split("/"),!t).join("/"))||"."},f.normalize=function(e){var t=f.isAbsolute(e),n=e&&"/"===e[e.length-1];return(e=s(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},f.isAbsolute=function(e){return"/"===e.charAt(0)},f.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!o.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n)}return f.normalize(e)},f.relative=function(e,t){e=f.resolve(e).substr(1),t=f.resolve(t).substr(1);for(var n=i(e.split("/")),r=i(t.split("/")),o=Math.min(n.length,r.length),s=o,c=0;c<o;c++)if(n[c]!==r[c]){s=c;break}var u=[];for(c=s;c<n.length;c++)u.push("..");return(u=u.concat(r.slice(s))).join("/")},f._makeLong=function(e){return e},f.dirname=function(e){var t=y(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},f.basename=function(e,t){var n=y(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},f.extname=function(e){return y(e)[3]},f.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+f.sep:"")+(e.base||"")},f.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=y(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},f.sep="/",f.delimiter=":",e.exports=r?l:f,e.exports.posix=f,e.exports.win32=l},133:(e,t,n)=>{"use strict";n(572),e=n.hmd(e);var r=n(873);e.exports={entry:"./src/index.js",output:{filename:"bundle.js",path:r.resolve("/","dist")}}},572:()=>{document.querySelector(".openThis").onclick=function(){document.querySelector(".mobile-menu").classList.remove("hidden")},document.querySelector(".closeThis").onclick=function(){document.querySelector(".mobile-menu").classList.add("hidden")};var e=function(e){"#"!==e?(document.querySelectorAll(".categories").classList.add("tempHidden"),document.querySelectorAll(".queryLetter").classList.add("tempGreyedOut"),document.querySelector(".Content".concat(e.toUpperCase())).classList.remove("tempHidden"),document.querySelector("#".concat(e)).classList.remove("tempGreyedOut")):(document.querySelectorAll(".categories").classList.remove("tempHidden"),document.querySelectorAll(".queryLetter").classList.remove("tempGreyedOut"))};document.querySelector("#hash")&&(document.querySelector("#a").onclick=function(){e("a")},document.querySelector("#b").onclick=function(){e("b")},document.querySelector("#c").onclick=function(){e("c")},document.querySelector("#d").onclick=function(){e("d")},document.querySelector("#e").onclick=function(){e("e")},document.querySelector("#f").onclick=function(){e("f")},document.querySelector("#g").onclick=function(){e("g")},document.querySelector("#h").onclick=function(){e("h")},document.querySelector("#i").onclick=function(){e("i")},document.querySelector("#j").onclick=function(){e("j")},document.querySelector("#k").onclick=function(){e("k")},document.querySelector("#l").onclick=function(){e("l")},document.querySelector("#m").onclick=function(){e("m")},document.querySelector("#n").onclick=function(){e("n")},document.querySelector("#o").onclick=function(){e("o")},document.querySelector("#p").onclick=function(){e("p")},document.querySelector("#q").onclick=function(){e("q")},document.querySelector("#r").onclick=function(){e("r")},document.querySelector("#s").onclick=function(){e("s")},document.querySelector("#t").onclick=function(){e("t")},document.querySelector("#u").onclick=function(){e("u")},document.querySelector("#v").onclick=function(){e("v")},document.querySelector("#w").onclick=function(){e("w")},document.querySelector("#x").onclick=function(){e("x")},document.querySelector("#y").onclick=function(){e("y")},document.querySelector("#z").onclick=function(){e("z")},document.querySelector("#hash").onclick=function(){e("#")}),fetch("./assets/data.json").then((function(e){return e.json()})).then((function(e){return Object.fromEntries(Object.entries(e.termList).map((function(e){return function(e){var t=e.title,n=document.createElement("li"),r=document.createElement("a");switch(0!==t.length){case"A"===t[0]:var o=document.getElementById("contentA"),s=document.getElementById("a");o.classList.remove("hidden"),s.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),o.appendChild(r),r.appendChild(n);break;case"B"===t[0]:var i=document.getElementById("contentB"),c=document.getElementById("b");i.classList.remove("hidden"),c.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),i.appendChild(r),r.appendChild(n);break;case"C"===t[0]:var u=document.getElementById("contentC"),l=document.getElementById("c");u.classList.remove("hidden"),l.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),u.appendChild(r),r.appendChild(n);break;case"D"===t[0]:var a=document.getElementById("contentD"),d=document.getElementById("d");a.classList.remove("hidden"),d.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),a.appendChild(r),r.appendChild(n);break;case"E"===t[0]:var p=document.getElementById("contentE"),m=document.getElementById("e");p.classList.remove("hidden"),m.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),p.appendChild(r),r.appendChild(n);break;case"F"===t[0]:var f=document.getElementById("contentF"),y=document.getElementById("f");f.classList.remove("hidden"),y.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),f.appendChild(r),r.appendChild(n);break;case"G"===t[0]:var h=document.getElementById("contentG"),g=document.getElementById("g");h.classList.remove("hidden"),g.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),h.appendChild(r),r.appendChild(n);break;case"H"===t[0]:var v=document.getElementById("contentH"),b=document.getElementById("h");v.classList.remove("hidden"),b.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),v.appendChild(r),r.appendChild(n);break;case"I"===t[0]:var E=document.getElementById("contentI"),A=document.getElementById("i");E.classList.remove("hidden"),A.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),E.appendChild(r),r.appendChild(n);break;case"J"===t[0]:var S=document.getElementById("contentJ"),L=document.getElementById("j");S.classList.remove("hidden"),L.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),S.appendChild(r),r.appendChild(n);break;case"K"===t[0]:var k=document.getElementById("contentK"),C=document.getElementById("k");k.classList.remove("hidden"),C.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),k.appendChild(r),r.appendChild(n);break;case"L"===t[0]:var O=document.getElementById("contentL"),x=document.getElementById("l");O.classList.remove("hidden"),x.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),O.appendChild(r),r.appendChild(n);break;case"M"===t[0]:var I=document.getElementById("contentM"),w=document.getElementById("m");I.classList.remove("hidden"),w.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),I.appendChild(r),r.appendChild(n);break;case"N"===t[0]:var B=document.getElementById("contentN"),j=document.getElementById("n");B.classList.remove("hidden"),j.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),B.appendChild(r),r.appendChild(n);break;case"O"===t[0]:var q=document.getElementById("contentO"),T=document.getElementById("o");q.classList.remove("hidden"),T.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),q.appendChild(r),r.appendChild(n);break;case"P"===t[0]:var z=document.getElementById("contentP"),D=document.getElementById("p");z.classList.remove("hidden"),D.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),z.appendChild(r),r.appendChild(n);break;case"Q"===t[0]:var _=document.getElementById("contentQ"),N=document.getElementById("q");_.classList.remove("hidden"),N.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),_.appendChild(r),r.appendChild(n);break;case"R"===t[0]:var U=document.getElementById("contentR"),H=document.getElementById("r");U.classList.remove("hidden"),H.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),U.appendChild(r),r.appendChild(n);break;case"S"===t[0]:var P=document.getElementById("contentS"),$=document.getElementById("s");P.classList.remove("hidden"),$.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),P.appendChild(r),r.appendChild(n);break;case"T"===t[0]:var G=document.getElementById("contentT"),J=document.getElementById("t");G.classList.remove("hidden"),J.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),G.appendChild(r),r.appendChild(n);break;case"U"===t[0]:var M=document.getElementById("contentU"),R=document.getElementById("u");M.classList.remove("hidden"),R.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),M.appendChild(r),r.appendChild(n);break;case"V"===t[0]:var F=document.getElementById("contentV"),Z=document.getElementById("v");F.classList.remove("hidden"),Z.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),F.appendChild(r),r.appendChild(n);break;case"W"===t[0]:var K=document.getElementById("contentW"),Q=document.getElementById("w");K.classList.remove("hidden"),Q.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),K.appendChild(r),r.appendChild(n);break;case"X"===t[0]:var V=document.getElementById("contentX"),W=document.getElementById("x");V.classList.remove("hidden"),W.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),V.appendChild(r),r.appendChild(n);break;case"Y"===t[0]:var X=document.getElementById("contentY"),Y=document.getElementById("y");X.classList.remove("hidden"),Y.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),X.appendChild(r),r.appendChild(n);break;case"Z"===t[0]:var ee=document.getElementById("contentZ"),te=document.getElementById("z");ee.classList.remove("hidden"),te.classList.remove("greyedOut"),n.innerText=t,r.setAttribute("href","#"),r.setAttribute("class","nostyle"),ee.appendChild(r),r.appendChild(n);break;default:return null}return!0}(e[1])}))),!0}))}},e=>{"use strict";e(e.s=133)}]);