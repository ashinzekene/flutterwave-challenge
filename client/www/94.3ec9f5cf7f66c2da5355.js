(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{dokD:function(e,n,t){"use strict";t.r(n),t.d(n,"IonSpinner",function(){return o});var r=t("cBjU"),i=t("+/n5"),s={lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/t-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/t-e+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r=e*n/t-e+"ms",i=2*Math.PI*n/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,i=e*r-e+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}}},o=function(){function e(){this.paused=!1}return e.prototype.getName=function(){var e=this.name||this.config.get("spinner");return e?("ios"===e?(console.warn('spinner "ios" has been renamed to "lines"'),e="lines"):"ios-small"===e&&(console.warn('spinner "ios-small" has been renamed to "lines-small"'),e="lines-small"),e):"md"===this.mode?"crescent":"lines"},e.prototype.hostData=function(){var e;return{class:Object.assign({},Object(i.b)(this.color),(e={},e["spinner-"+this.getName()]=!0,e["spinner-paused"]=!!this.paused,e))}},e.prototype.render=function(){var e=this.getName(),n=s[e]||s.lines,t="number"==typeof this.duration&&this.duration>10?this.duration:n.dur,r=[];if(n.circles)for(var i=0;i<n.circles;i++)r.push(a(n,t,i,n.circles));else if(n.lines)for(i=0;i<n.lines;i++)r.push(l(n,t,i,n.lines));return r},Object.defineProperty(e,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}:host(.spinner-bubbles) svg{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}:host(.spinner-lines){--ion-color-base:var(--ion-text-color-step-400, #666666)}:host(.spinner-bubbles){--ion-color-base:var(--ion-text-color, #000)}:host(.spinner-circles){--ion-color-base:var(--ion-text-color-step-400, #666666)}:host(.spinner-crescent){--ion-color-base:var(--ion-text-color, #000)}:host(.spinner-dots){--ion-color-base:var(--ion-text-color-step-300, #4d4d4d)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function a(e,n,t,i){var s=e.fn(n,t,i);return s.style["animation-duration"]=n+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("circle",{transform:"translate(32,32)",r:s.r}))}function l(e,n,t,i){var s=e.fn(n,t,i);return s.style["animation-duration"]=n+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}}}]);