(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{m22C:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return p});var o=n("GGff"),r="$ionRelocated";function i(t,e,n,o){void 0===o&&(o=0),t[r]!==n&&(n?(function(t,e){var n,o,r=t.parentElement,i=t.ownerDocument;if(t&&r){var a=t.offsetTop,l=t.offsetLeft,s=t.offsetWidth,u=t.offsetHeight,c=i.createElement("div"),f=c.style;(n=c.classList).add.apply(n,Array.from(t.classList)),c.classList.add("cloned-input"),c.setAttribute("aria-hidden","true"),f.pointerEvents="none",f.position="absolute",f.top=a+"px",f.left=l+"px",f.width=s+"px",f.height=u+"px";var d=i.createElement("input");(o=d.classList).add.apply(o,Array.from(e.classList)),d.value=e.value,d.type=e.type,d.placeholder=e.placeholder,d.tabIndex=-1,c.appendChild(d),r.appendChild(c),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e),e.style.transform="translate3d("+("rtl"===t.ownerDocument.dir?9999:-9999)+"px,"+o+"px,0)"):function(t,e){if(t&&t.parentElement){for(var n=t.parentElement.querySelectorAll(".cloned-input"),o=0;o<n.length;o++)n[o].remove();t.style.pointerEvents=""}e.style.transform="",e.style.opacity=""}(t,e),t[r]=n)}function a(t){return t===t.ownerDocument.activeElement}var l=["INPUT","TEXTAREA","ION-INPUT","ION-TEXTAREA"],s=.3;var u="$ionPaddingTimer";function c(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(n){var o=n[u];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[u]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var f=!0,d=!0;function p(t,e){var n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),p=e.getBoolean("inputBlurring",!0),v=e.getBoolean("scrollPadding",!0),m=new WeakMap,E=new WeakMap;function g(t){var e=(t.shadowRoot||t).querySelector("input"),l=t.closest("ion-content"),c=l&&l.getScrollElement();if(e){if(c&&u&&!m.has(t)){var f=function(t,e,n){if(!n||!e)return function(){};var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},l=function(){return o(!0)},s=function(){return o(!1)};return n&&n.addEventListener("ionScrollStart",l),n&&n.addEventListener("ionScrollEnd",s),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",l),n.removeEventListener("ionScrollEnd",s),e.addEventListener("ionBlur",r)}}(t,e,c);m.set(t,f)}if(l&&r&&!E.has(t)){var d=function(t,e,n,r){var l,u=function(t){l=Object(o.b)(t)},c=function(u){if(l){var c=Object(o.b)(u);(function(t,e,n){if(e&&c){var o=e.x-c.x,r=e.y-c.y;return o*o+r*r>36}return!1})(0,l)||a(e)||(u.preventDefault(),u.stopPropagation(),function(t,e,n,o){var r=function(t,e,n){return e?function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top+10,l=Math.min(e.bottom,o-n)/2-i,u=a-r,c=Math.round(l<0?-l:u>0?-u:0),f=Math.abs(c)/s;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight):{scrollAmount:0,scrollPadding:0,scrollDuration:0,inputSafeY:0}}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.getScrollElement().scrollByPoint(0,r.scrollAmount,r.scrollDuration,function(){i(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",c,!0)}}(t,e,l,n);E.set(t,d)}}}p&&f&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&-1!==l.indexOf(r.tagName)){var i=o.target;i!==r&&(l.indexOf(i.tagName)>=0||i.classList.contains("input-cover")||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),v&&d&&function(t,e){t.addEventListener("focusin",function(t){c(t.target,e)}),t.addEventListener("focusout",function(t){c(t.target,0)})}(t,n);for(var h=0,y=Array.from(t.querySelectorAll("ion-input"));h<y.length;h++)g(y[h]);t.body.addEventListener("ionInputDidLoad",function(t){g(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){!function(t){if(u){var e=m.get(t);e&&e(),m.delete(t)}if(r){var n=E.get(t);n&&n(),E.delete(t)}}(t.target)})}}}]);