!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.disabled=!0,t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,d=setInterval(n,1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a3200be1.js.map