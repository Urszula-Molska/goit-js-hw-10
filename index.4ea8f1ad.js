!function(){function o(o){return o&&o.__esModule?o.default:o}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(o){return o&&o.constructor===Symbol?"symbol":typeof o};var n;n="con",console.log(n),console.log(void 0===n?"undefined":o(e)(n)),fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(o){if(!o.ok)throw new Error(o.status);return o.json().then((function(o){o.length>10&&console.log("Too many matches found. Please enter a more specific name.");var e=!0,n=!1,t=void 0;if(1===o.length)try{for(var l,r=o[Symbol.iterator]();!(e=(l=r.next()).done);e=!0)properties=l.value,console.log(properties.capital),console.log(properties.name.official),console.log(properties.flags.svg),console.log(properties.name.official)}catch(o){n=!0,t=o}finally{try{e||null==r.return||r.return()}finally{if(n)throw t}}if(o.length>=2&o.length<=10){console.log(o.length),console.log(o);var a=!0,c=!1,i=void 0;try{for(var s,f=o[Symbol.iterator]();!(a=(s=f.next()).done);a=!0)country=s.value,console.log(country.flags.svg),console.log(country.name.official)}catch(o){c=!0,i=o}finally{try{a||null==f.return||f.return()}finally{if(c)throw i}}}})).catch((function(o){return console.log(o)}))}))}();
//# sourceMappingURL=index.4ea8f1ad.js.map
