(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{v6rI:function(n,e,t){"use strict";t.r(e),t.d(e,"IonSpinner",function(){return a});var r=t("cBjU"),i=t("+/n5"),s={lines:{dur:1e3,lines:12,fn:function(n,e,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/t-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/t-n+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(n,e,t){var r=n*e/t-n+"ms",i=2*Math.PI*e/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,e,t){var r=e/t,i=n*r-n+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}}},a=function(){function n(){this.paused=!1}return n.prototype.getName=function(){var n=this.name||this.config.get("spinner");return n?("ios"===n?(console.warn('spinner "ios" has been renamed to "lines"'),n="lines"):"ios-small"===n&&(console.warn('spinner "ios-small" has been renamed to "lines-small"'),n="lines-small"),n):"md"===this.mode?"crescent":"lines"},n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(i.b)(this.color),(n={},n["spinner-"+this.getName()]=!0,n["spinner-paused"]=!!this.paused,n))}},n.prototype.render=function(){var n=this.getName(),e=s[n]||s.lines,t="number"==typeof this.duration&&this.duration>10?this.duration:e.dur,r=[];if(e.circles)for(var i=0;i<e.circles;i++)r.push(o(e,t,i,e.circles));else if(e.lines)for(i=0;i<e.lines;i++)r.push(l(e,t,i,e.lines));return r},Object.defineProperty(n,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"[data-ion-spinner-md-host]{display:inline-block;position:relative;width:28px;height:28px}.ion-color[data-ion-spinner-md-host]{color:var(--ion-color-base)}svg[data-ion-spinner-md]{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.spinner-lines[data-ion-spinner-md-host]   line[data-ion-spinner-md], .spinner-lines-small[data-ion-spinner-md-host]   line[data-ion-spinner-md]{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines[data-ion-spinner-md-host]   svg[data-ion-spinner-md], .spinner-lines-small[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}.spinner-bubbles[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}.spinner-circles[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}.spinner-crescent[data-ion-spinner-md-host]   circle[data-ion-spinner-md]{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}.spinner-dots[data-ion-spinner-md-host]   circle[data-ion-spinner-md]{stroke-width:0;fill:currentColor}.spinner-dots[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}.spinner-paused[data-ion-spinner-md-host]   svg[data-ion-spinner-md]{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}.spinner-lines-md[data-ion-spinner-md-host]{--ion-color-base:var(--ion-text-color-step-400, #666666)}.spinner-bubbles[data-ion-spinner-md-host]{--ion-color-base:var(--ion-text-color, #000)}.spinner-circles[data-ion-spinner-md-host]{--ion-color-base:var(--ion-text-color-step-400, #666666)}.spinner-crescent[data-ion-spinner-md-host]{--ion-color-base:var(--ion-text-color, #000)}.spinner-dots[data-ion-spinner-md-host]{--ion-color-base:var(--ion-text-color-step-300, #4d4d4d)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),n}();function o(n,e,t,i){var s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("circle",{transform:"translate(32,32)",r:s.r}))}function l(n,e,t,i){var s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",Object(r.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(r.b)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}}}]);