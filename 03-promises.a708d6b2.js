!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("h6c0i"),i=document.querySelector(".form"),a=document.querySelectorAll("input");function l(e,n){return new Promise((function(t,o){var r={position:e,delay:n};Math.random()>.3?t(r):o(r)}))}a[0].value=700,a[1].value=300,a[2].value=10,r.Notify.init({useIcon:!1,position:"center-top"}),i.addEventListener("submit",(function(e){var n={};e.preventDefault();var t=!0,o=!1,i=void 0;try{for(var u,c=a[Symbol.iterator]();!(t=(u=c.next()).done);t=!0){var f=u.value;n[f.name]=Number(f.value)}}catch(e){o=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}for(var d=n.delay,s=n.step,p=n.amount,v=0;v<p;v+=1){l(v+1,s*v+d).then((function(e){var n=e.position,t=e.delay;setTimeout(r.Notify.success,t,"✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;setTimeout(r.Notify.failure,t,"❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.a708d6b2.js.map