(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"zNu/":function(t,e,o){"use strict";o.r(e),o.d(e,"IonTab",function(){return l}),o.d(e,"IonTabButton",function(){return s}),o.d(e,"IonTabbar",function(){return c}),o.d(e,"IonTabs",function(){return d});var n=o("cBjU"),a=o("6W4l"),i=o("+/n5"),r=function(t,e,o,n){return new(o||(o=Promise))(function(a,i){function r(t){try{l(n.next(t))}catch(t){i(t)}}function b(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){t.done?a(t.value):new o(function(e){e(t.value)}).then(r,b)}l((n=n.apply(t,e||[])).next())})},b=function(t,e){var o,n,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:b(0),throw:b(1),return:b(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function b(i){return function(b){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,n=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=e.call(t,r)}catch(t){i=[6,t],n=0}finally{o=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,b])}}},l=function(){function t(){this.loaded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}return t.prototype.selectedChanged=function(t){t&&this.ionSelect.emit()},t.prototype.componentWillLoad=function(){},t.prototype.onPropChanged=function(){this.ionTabMutated.emit()},t.prototype.getTabId=function(){return this.name?this.name:"string"==typeof this.component?this.component:null},t.prototype.setActive=function(){return r(this,void 0,void 0,function(){return b(this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return!this.loaded&&this.component?(this.loaded=!0,Object(a.a)(this.delegate,this.el,this.component,["ion-page"])):Promise.resolve()},t.prototype.hostData=function(){var t=this.active;return{"aria-labelledby":this.btnId,"aria-hidden":t?null:"true",role:"tabpanel",class:{"ion-page":!this.component,"tab-hidden":!t}}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge",watchCallbacks:["onPropChanged"]},badgeColor:{type:String,attr:"badge-color",watchCallbacks:["onPropChanged"]},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["onPropChanged"]},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href",watchCallbacks:["onPropChanged"]},icon:{type:String,attr:"icon",watchCallbacks:["onPropChanged"]},label:{type:String,attr:"label",watchCallbacks:["onPropChanged"]},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show",watchCallbacks:["onPropChanged"]},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabMutated",method:"ionTabMutated",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".tab-hidden[data-ion-tab-host]{display:none!important}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.keyFocus=!1,this.selected=!1}return t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1},t.prototype.hostData=function(){var t=this.selected,e=!!this.label,o=!!this.icon,n=e&&!o,a=o&&!e,r=!!this.badge;return{role:"tab","aria-selected":t,class:Object.assign({},Object(i.b)(this.color),{"tab-selected":t,"has-label":e,"has-icon":o,"has-label-only":n,"has-icon-only":a,"has-badge":r,"tab-button-disabled":this.disabled,focused:this.keyFocus})}},t.prototype.render=function(){var t=this,e=t.icon,o=t.label,a=t.href,i=t.badge,r=t.badgeColor,b=t.mode;return[Object(n.b)("a",{href:a||"#",class:"tab-button-native",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},e&&Object(n.b)("ion-icon",{class:"tab-button-icon",icon:e}),o&&Object(n.b)("span",{class:"tab-button-text"},o),i&&Object(n.b)("ion-badge",{class:"tab-badge",color:r},i),"md"===b&&Object(n.b)("ion-ripple-effect",{tapClick:!0}))]},Object.defineProperty(t,"is",{get:function(){return"ion-tab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{badge:{type:String,attr:"badge"},badgeColor:{type:String,attr:"badge-color"},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},keyFocus:{state:!0},label:{type:String,attr:"label"},mode:{type:String,attr:"mode"},selected:{type:Boolean,attr:"selected"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-tab-button-md-host]{border-radius:0;margin:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;border:0;background:var(--background);color:var(--color);text-align:center;text-decoration:none;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;box-sizing:border-box}.focused[data-ion-tab-button-md-host]{background:var(--background-focused)}.tab-selected[data-ion-tab-button-md-host], [data-ion-tab-button-md-host]:hover{color:var(--color-selected)}.tab-hidden[data-ion-tab-button-md-host]{display:none!important}a[data-ion-tab-button-md]{text-decoration:none}.tab-button-native[data-ion-tab-button-md]{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;height:100%;border:0;background:0 0;color:inherit;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-button-native[data-ion-tab-button-md]:active, .tab-button-native[data-ion-tab-button-md]:focus{outline:0}.tab-button-disabled[data-ion-tab-button-md-host]{pointer-events:none}.tab-button-disabled[data-ion-tab-button-md-host]   .tab-button-native[data-ion-tab-button-md]{opacity:.4}.tab-button-icon[data-ion-tab-button-md], .tab-button-text[data-ion-tab-button-md]{display:none;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.has-icon[data-ion-tab-button-md-host]   .tab-button-icon[data-ion-tab-button-md], .has-label[data-ion-tab-button-md-host]   .tab-button-text[data-ion-tab-button-md]{display:block}.has-label-only[data-ion-tab-button-md-host]   .tab-button-text[data-ion-tab-button-md]{white-space:normal}.has-icon-only[data-ion-tab-button-md-host]   .tab-button-native[data-ion-tab-button-md], .has-label-only[data-ion-tab-button-md-host]   .tab-button-native[data-ion-tab-button-md]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tab-badge[data-ion-tab-button-md]{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon[data-ion-tab-button-md-host]   .tab-badge[data-ion-tab-button-md]{right:calc(50% - 30px)}.layout-icon-start[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-icon-end[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md], .layout-icon-hide[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md], .layout-icon-start[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md], .layout-label-hide[data-ion-tab-button-md]   .tab-button[data-ion-tab-button-md]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide[data-ion-tab-button-md]   .tab-button-icon[data-ion-tab-button-md], .layout-label-hide[data-ion-tab-button-md]   .tab-button-text[data-ion-tab-button-md]{display:none}.layout-icon-bottom[data-ion-tab-button-md]   .tab-badge[data-ion-tab-button-md], .layout-icon-end[data-ion-tab-button-md]   .tab-badge[data-ion-tab-button-md], .layout-icon-start[data-ion-tab-button-md]   .tab-badge[data-ion-tab-button-md]{right:calc(50% - 50px)}[data-ion-tab-button-md-host]{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);max-width:168px;font-weight:400}.tab-button-native[data-ion-tab-button-md]{padding:8px 12px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.tab-button-text[data-ion-tab-button-md]{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:12px;text-transform:none}.tab-selected[data-ion-tab-button-md-host]   .tab-button-text[data-ion-tab-button-md]{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tab-button-icon[data-ion-tab-button-md]{-webkit-transform-origin:center center;transform-origin:center center;width:24px;height:24px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:24px}.tab-selected[data-ion-tab-button-md-host]   .tab-button-icon[data-ion-tab-button-md]{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}.layout-icon-end[data-ion-tab-button-md]   .tab-button-md.tab-selected[data-ion-tab-button-md]   .tab-button-icon[data-ion-tab-button-md]{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}.layout-icon-bottom[data-ion-tab-button-md]   .tab-button-md.tab-selected[data-ion-tab-button-md]   .tab-button-icon[data-ion-tab-button-md]{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}.layout-icon-start[data-ion-tab-button-md]   .tab-button-md.tab-selected[data-ion-tab-button-md]   .tab-button-icon[data-ion-tab-button-md]{-webkit-transform:translate3d(-2px,0,0);transform:translate3d(-2px,0,0)}.layout-icon-top[data-ion-tab-button-md]   .tab-button-md[data-ion-tab-button-md]   .has-icon[data-ion-tab-button-md]   .tab-button-text[data-ion-tab-button-md]{margin-bottom:-2px}.layout-icon-bottom[data-ion-tab-button-md]   .tab-button-md[data-ion-tab-button-md]   .tab-button-text[data-ion-tab-button-md]{-webkit-transform-origin:center top;transform-origin:center top;margin-top:-2px}.layout-icon-hide[data-ion-tab-button-md]   .tab-button-md[data-ion-tab-button-md], .layout-label-hide[data-ion-tab-button-md]   .tab-button-md[data-ion-tab-button-md]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.canScrollLeft=!1,this.canScrollRight=!1,this.keyboardVisible=!1,this.layout="icon-top",this.placement="bottom",this.scrollable=!1,this.tabs=[],this.highlight=!1,this.translucent=!1}return t.prototype.selectedTabChanged=function(){this.scrollable&&this.scrollToSelectedButton(),this.highlight&&this.updateHighlight()},t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.keyboardVisible=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.placement&&(this.keyboardVisible=!0)},t.prototype.onResize=function(){this.highlight&&this.updateHighlight()},t.prototype.componentDidLoad=function(){this.scrollable&&this.updateBoundaries(),this.highlight&&this.updateHighlight()},t.prototype.analyzeTabs=function(){for(var t=Array.from(this.doc.querySelectorAll("ion-tab-button")),e=this.scrollEl.scrollLeft,o=this.scrollEl.clientWidth,n=void 0,a=void 0,i=0,r=t;i<r.length;i++){var b=r[i],l=b.offsetLeft,s=l+b.offsetWidth;l<e&&(n={tab:b,amount:l}),!a&&s>o+e&&(a={tab:b,amount:s-o})}return{previous:n,next:a}},t.prototype.getSelectedButton=function(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(function(t){return t.selected})},t.prototype.scrollToSelectedButton=function(){var t=this;this.scrollEl&&this.queue.read(function(){var e=t.getSelectedButton();if(e){var o=t.scrollEl.scrollLeft,n=t.scrollEl.clientWidth,a=e.offsetLeft,i=a+e.offsetWidth,r=0;i>n+o?r=i-n:a<o&&(r=a),0!==r&&t.queue.write(function(){t.scrollEl.scrollToPoint(r,0,250).then(function(){t.updateBoundaries()})})}})},t.prototype.scrollByTab=function(t){var e=this;this.queue.read(function(){var o=e.analyzeTabs(),n="right"===t?o.next:o.previous,a=n&&n.amount;n&&a&&e.scrollEl.scrollToPoint(a,0,250).then(function(){e.updateBoundaries()})})},t.prototype.updateBoundaries=function(){this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth},t.prototype.updateHighlight=function(){var t=this;this.highlight&&this.queue.read(function(){var e=t.getSelectedButton(),o=t.el.querySelector("div.tabbar-highlight");e&&o&&(o.style.transform="translate3d("+e.offsetLeft+"px,0,0) scaleX("+e.offsetWidth+")")})},t.prototype.hostData=function(){var t,e=this,o=e.color,n=e.translucent,a=e.layout,r=e.placement,b=e.keyboardVisible,l=e.scrollable;return{role:"tablist","aria-hidden":b?"true":null,class:Object.assign({},Object(i.b)(o),(t={"tabbar-translucent":n},t["layout-"+a]=!0,t["placement-"+r]=!0,t["tabbar-hidden"]=b,t.scrollable=l,t))}},t.prototype.render=function(){var t=this,e=this.selectedTab,o=this.highlight?Object(n.b)("div",{class:"animated tabbar-highlight"}):null,a=this.tabs.map(function(o){return Object(n.b)("ion-tab-button",{id:o.btnId,label:o.label,icon:o.icon,badge:o.badge,disabled:o.disabled,badgeColor:o.badgeColor,href:o.href,selected:e===o,mode:t.mode,color:t.color,"aria-hidden":o.show?null:"true",class:{"tab-hidden":!o.show},onClick:function(e){o.disabled||t.ionTabbarClick.emit(o),e.stopPropagation(),e.preventDefault()}})});return this.scrollable?[Object(n.b)("ion-button",{onClick:function(){return t.scrollByTab("left")},fill:"clear",class:{inactive:!this.canScrollLeft}},Object(n.b)("ion-icon",{name:"arrow-dropleft"})),Object(n.b)("ion-scroll",{forceOverscroll:!1,ref:function(e){return t.scrollEl=e}},a,o),Object(n.b)("ion-button",{onClick:function(){return t.scrollByTab("right")},fill:"clear",class:{inactive:!this.canScrollRight}},Object(n.b)("ion-icon",{name:"arrow-dropright"}))]:a.concat([o])},Object.defineProperty(t,"is",{get:function(){return"ion-tabbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},placement:{type:String,attr:"placement"},queue:{context:"queue"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-tabbar-md-host]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);z-index:10}.ion-color[data-ion-tabbar-md-host], .ion-color[data-ion-tabbar-md-host]   ion-tab-button[data-ion-tabbar-md]{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden[data-ion-tabbar-md-host]{display:none!important}.placement-top[data-ion-tabbar-md-host]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.tabbar-highlight[data-ion-tabbar-md]{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated[data-ion-tabbar-md]{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top[data-ion-tabbar-md-host]   .tabbar-highlight[data-ion-tabbar-md]{bottom:0}.placement-bottom[data-ion-tabbar-md-host]   .tabbar-highlight[data-ion-tabbar-md]{top:0}ion-scroll[data-ion-tabbar-md]{overflow:hidden;margin:0 8px;max-width:650px}.scroll-inner[data-ion-tabbar-md]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ion-button.inactive[data-ion-tabbar-md]{visibility:hidden}[data-ion-tabbar-md-host]{--background:var(--ion-tabbar-background-color, #f8f8f8);--color:var(--ion-tabbar-text-color-active, #488aff);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);contain:strict}.placement-top[data-ion-tabbar-md-host]   .tab-button.tab-selected[data-ion-tabbar-md]   .tab-button-icon[data-ion-tabbar-md], .placement-top[data-ion-tabbar-md-host]   .tab-button.tab-selected[data-ion-tabbar-md]   .tab-button-text[data-ion-tabbar-md]{-webkit-transform:inherit;transform:inherit}.scrollable[data-ion-tabbar-md]   .tab-button[data-ion-tabbar-md]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(){this.ids=-1,this.transitioning=!1,this.tabsId=++u,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1,this.useRouter=!1}return t.prototype.componentWillLoad=function(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.loadConfig("tabbarLayout","bottom"),this.loadConfig("tabbarLayout","icon-top"),this.loadConfig("tabbarHighlight",!1),this.initTabs(),this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return r(this,void 0,void 0,function(){return b(this,function(t){switch(t.label){case 0:return[4,this.initSelect()];case 1:return t.sent(),[2]}})})},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.onTabMutated=function(){this.el.forceUpdate()},t.prototype.onTabClicked=function(t){var e=t.detail;if(this.useRouter&&null!=e.href){var o=this.doc.querySelector("ion-router");o&&o.push(e.href)}else this.select(e)},t.prototype.select=function(t){return r(this,void 0,void 0,function(){var e;return b(this,function(o){switch(o.label){case 0:return e=this.getTab(t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return o.sent(),[4,this.notifyRouter()];case 2:return o.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.setRouteId=function(t){return r(this,void 0,void 0,function(){var e,o=this;return b(this,function(n){switch(n.label){case 0:return e=this.getTab(t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return n.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return o.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){var t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t,element:this.selectedTab}:void 0},t.prototype.getTab=function(t){return"string"==typeof t?this.tabs.find(function(e){return e.getTabId()===t}):"number"==typeof t?this.tabs[t]:t},t.prototype.getSelected=function(){return this.selectedTab},t.prototype.initTabs=function(){var t=this;(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).forEach(function(e){var o="t-"+t.tabsId+"-"+ ++t.ids;e.btnId="tab-"+o,e.id="tabpanel-"+o})},t.prototype.initSelect=function(){return r(this,void 0,void 0,function(){var t,e,o,n,a;return b(this,function(i){switch(i.label){case 0:if(t=this.tabs,this.useRouter)return[2];for(e=t.find(function(t){return t.selected})||t.find(function(t){return t.show&&!t.disabled}),o=0,n=t;o<n.length;o++)(a=n[o])!==e&&(a.selected=!1);return e?[4,e.setActive()]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.selectedTab=e,e&&(e.selected=!0,e.active=!0),[2]}})})},t.prototype.loadConfig=function(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))},t.prototype.setActive=function(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(var e=0,o=this.tabs;e<o.length;e++){var n=o[e];t!==n&&(n.selected=!1)}return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){return!(!t||t===this.selectedTab||this.transitioning)},t.prototype.hostData=function(){return{class:Object(i.b)(this.color)}},t.prototype.render=function(){var t=[Object(n.b)("div",{class:"tabs-inner"},Object(n.b)("slot",null))];return this.tabbarHidden||t.push(Object(n.b)("ion-tabbar",{tabs:this.tabs.slice(),color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),t},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabMutated",method:"onTabMutated"},{name:"ionTabbarClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-tabs-host]{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner[data-ion-tabs]{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"},enumerable:!0,configurable:!0}),t}(),u=-1}}]);