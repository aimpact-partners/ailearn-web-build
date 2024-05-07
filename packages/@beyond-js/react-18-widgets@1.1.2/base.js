System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/widgets@1.1.0/controller","react@18.2.0","react-dom@18.2.0/client","@beyond-js/widgets@1.1.0/routing"],function(o,e){"use strict";var t,r,n,s,i,d,l;return o({IWidgetProps:void 0,IPageWidgetProps:void 0,ReactWidgetController:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){s=e},function(e){i=e}],execute:function(){l=t.Bundle,(d=new l({module:{vspecifier:"@beyond-js/react-18-widgets@1.1.2/base"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/controller",r],["react",n],["react-dom/client",s],["@beyond-js/widgets/routing",i]]),(l=new Map).set("./controller",{hash:2404965063,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ReactWidgetController=void 0;var l=e("react"),a=e("react-dom/client"),r=e("@beyond-js/widgets/controller"),c=e("./widget"),g=e("./wrapper");class o extends r.WidgetClientController{#wrapper;#root;#mounted=!1;get mounted(){return this.#mounted}get Widget(){return null}mount(e){if(!this.#mounted){if(this.#mounted=!0,!this.Widget)return{errors:[`Widget "${this.element}" does not export a Widget class`]};e=Object.assign({widget:this.widget,attributes:this.attributes,component:this.widget,store:this.store},e||{});var t=!!this.widget.holder.children.length;try{var r=this.#wrapper=new g.Wrapper(this),{styles:o,widget:n}=this,s=n.holder,i={wrapper:r,props:e,styles:o,holder:s,hydrate:t},d=l.createElement(c.default,i);t?this.#root=(0,a.hydrateRoot)(s,d):(this.#root=(0,a.createRoot)(s)).render(d)}catch(e){console.log(`Error rendering widget "${this.widget.localName}":`),console.log(e.stack)}}}unmount(){this.#mounted&&(this.#mounted=!1,globalThis.setTimeout(()=>this.#root.unmount(),0))}refresh(){this.#wrapper.changed()}}t.ReactWidgetController=o}}),l.set("./styles",{hash:3367909987,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({styles:r}){const t=o.useState(0),e=(o.useEffect(()=>{const e=()=>t[1](e=>e+1);return r.on("change",e),()=>r.off("change",e)&&void 0},[]),[...r.resources].map(e=>{var t=()=>r.onloaded(e);return o.createElement("link",{key:e,href:e,rel:"stylesheet",onLoad:t,onError:t})}));return o.createElement(o.Fragment,null,e)};var o=e("react")}}),l.set("./widget",{hash:2641106731,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({wrapper:e,props:t,styles:r,holder:o,hydrate:n}){const s=[],i=(s.push(g.createElement(u.default,{key:"styles",styles:r,widget:t.widget})),g.useState(0)),d=()=>i[1](i[0]+1),l=(e.changed=d,r.loaded||r.ready.then(d),o.style.display="",r.loaded),a=e.Widget,c=g.createElement(a,{key:"widget",...t});return(n||l)&&s.push(c),g.createElement(g.Fragment,null,s)};var g=e("react"),u=e("./styles")}}),l.set("./wrapper",{hash:4085792261,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=void 0,t.Wrapper=class{#Widget;get Widget(){return this.#Widget.Widget}changed=()=>{};constructor(e){this.#Widget=e}}}}),d.exports.descriptor=[{im:"./controller",from:"IWidgetProps",name:"IWidgetProps"},{im:"./controller",from:"IPageWidgetProps",name:"IPageWidgetProps"},{im:"./controller",from:"ReactWidgetController",name:"ReactWidgetController"}],d.exports.process=function({require:e,prop:t,value:r}){!e&&"IWidgetProps"!==t||o("IWidgetProps",e?e("./controller").IWidgetProps:r),!e&&"IPageWidgetProps"!==t||o("IPageWidgetProps",e?e("./controller").IPageWidgetProps:r),!e&&"ReactWidgetController"!==t||o("ReactWidgetController",e?e("./controller").ReactWidgetController:r)},o("__beyond_pkg",d),o("hmr",new function(){this.on=(e,t)=>d.hmr.on(e,t),this.off=(e,t)=>d.hmr.off(e,t)}),d.initialise(l)}}});