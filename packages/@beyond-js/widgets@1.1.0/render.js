System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"],function(s,e){var t,r,o,i,n;return s({attributes:void 0,NodeWidget:void 0,prerender:void 0,IBeyondWidgetController:void 0,WidgetCSR:void 0,IWidgetSpecs:void 0,BeyondWidget:void 0,GlobalCSS:void 0,StylesManager:void 0,widgets:void 0}),{setters:[function(e){t=e},function(e){r=e}],execute:function(){o=e=>{var t=new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/widgets","1.1.0"],["@aimpact/ailearn-app","0.1.6-dev.17"]]);return globalThis.bimport(globalThis.bimport.resolve(e,t))},n=t.Bundle,(i=new n({module:{vspecifier:"@beyond-js/widgets@1.1.0/render"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",r]]),(n=new Map).set("./anchor",{hash:157107968,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),"object"!=typeof process&&customElements.define("beyond-link",class extends HTMLElement{#routing;constructor(){super(),o("@beyond-js/kernel/routing").then(({routing:e})=>this.#routing=e)}connectedCallback(){this.addEventListener("click",()=>{var e;this.hasAttribute("data-url")&&(e=this.getAttribute("data-url"),this.#routing?.pushState(e))})}})}}),n.set("./attributes",{hash:1948053846,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.attributes=t.Attributes=void 0,e=e("@beyond-js/kernel/core");class r extends e.Events{#values=new Map;get values(){return this.#values}add(e,t){this.#values.set(e,t),this.trigger("add",e,t),this.trigger("change")}remove(e){this.#values.delete(e),this.trigger("remove",e),this.trigger("change")}}t.Attributes=r,t.attributes=new r}}),n.set("./instances/index",{hash:2203205286,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.instances=void 0;var s=e("./node");t.instances=new class extends Set{register(r){this.add(r);var e=(()=>{let e=r;for(;;){var t=e.getRootNode();if(t===document)return;if(e=t.host,this.has(e))return e}})(),t=new s.NodeWidget(r,e);return e?.wnode.children.add(r),this.add(r),t}}}}),n.set("./instances/node",{hash:2635585213,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NodeWidget=void 0,t.NodeWidget=class{#widget;get widget(){return this.#widget}#parent;get parent(){return this.#parent}#children=new Set;get children(){return this.#children}constructor(e,t){this.#widget=e,this.#parent=t}}}}),n.set("./prerendered/index",{hash:1802094002,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.prerender=void 0,t.prerender=new class{#ssr=[];get ssr(){return this.#ssr}find(t,r){return this.#ssr.find(e=>{if(e.element!==t)return!1;let s=new Map(e.attributes);return[...r].reduce((e,[t,r])=>e||s.get(t)===r,!0)})}}}}),n.set("./widget/attributes",{hash:1844817953,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetGlobalAttributes=void 0;var r=e("../attributes");class s{#holder;get holder(){return this.#holder}#set=(e,t)=>{this.#holder.setAttribute(e,t)};#remove=e=>{this.#holder.removeAttribute(e)};initialise(e){this.#holder=e,r.attributes.values.forEach((e,t)=>this.#set(t,e)),r.attributes.on("add",this.#set),r.attributes.on("remove",this.#remove)}destroy(){r.attributes.off("add",this.#set),r.attributes.off("remove",this.#remove)}}t.WidgetGlobalAttributes=s}}),n.set("./widget/checksum",{hash:1000731235,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=0,r,s,i=e.length;if(0===i)return t;for(r=0;r<i;r++)s=e.charCodeAt(r),t=(t<<5)-t+s,t&=t;return t.toString().replace("-","n")}}}),n.set("./widget/csr",{hash:3612276883,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetCSR=void 0,e=e("@beyond-js/kernel/core");class r extends e.Events{#widget;#bundle;get bundle(){return this.#bundle}#controller;get controller(){return this.#controller}#error;get error(){return this.#error}#loading=!1;get loading(){return this.#loading}#loaded=!1;get loaded(){return this.#loaded}#holders=new Set(["initialised","loaded"]);initialise(){if(this.#widget.specs.render.csr){if(!this.#holders.has("initialised"))throw new Error("Widget CSR already initialised");this.#holders.delete("initialised"),this.#render()}}constructor(e){super();let{specifier:t,specs:r}=this.#widget=e;r.render.csr&&o(t).then(e=>{this.#bundle=e,this.#loading=!1,this.#loaded=!0,this.#holders.delete("loaded"),this.#render()}).catch(e=>{console.error(`Error loading widget "${t}"`,e.stack),this.#error=e.message,this.#loading=!1})}#render=()=>{var e;this.#holders.size||((e=this.#bundle.Controller)&&"function"==typeof e?(this.#controller=new e(this.#widget),this.#controller.initialise().then(()=>this.trigger("controller.initialised")).catch(e=>console.log(e instanceof Error?e.stack:e))):(e=`Widget "${this.#widget.localName}" does not export its Controller`,console.error(e),this.#error=e))};disconnect(){this.#controller?.disconnect?.()}attributeChanged(e,t,r){this.#controller?.attributeChanged(e,t,r)}}t.WidgetCSR=r}}),n.set("./widget/index",{hash:2614430817,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BeyondWidget=void 0;var r=e("../instances"),i=e("./sr"),n=e("./csr"),o=e("./ssr"),d=e("./attributes"),a=e("./styles"),e="undefined"==typeof HTMLElement?null:HTMLElement;class s extends e{#specs;get specs(){return this.#specs}get name(){return this.#specs.name}get vspecifier(){return this.#specs.vspecifier}#specifier;get specifier(){return this.#specifier}get host(){return location.origin+"/"}get is(){return this.#specs.is}get route(){return this.#specs.route}get layout(){return this.#specs.layout}#holder;get holder(){return this.#holder}#sr;get sr(){return this.#sr}#csr;get csr(){return this.#csr}get controller(){return this.#csr.controller}#ssr;get ssr(){return this.#ssr}#attributes;#styles;get styles(){return this.#styles}#wnode;get wnode(){return this.#wnode}get wparent(){return this.#wnode.parent}get wchildren(){return[...this.#wnode.children]}#oncontroller=()=>{var e=new CustomEvent("controller.initialised",{bubbles:!1,composed:!1});this.dispatchEvent(e)};constructor(s){super(),this.#specs=s,this.attachShadow({mode:"open"}),this.#specifier=(()=>{var e=s.vspecifier.split("/"),t=e[0].startsWith("@")?e.shift():void 0,[r]=e.shift().split("@");return(t?t+"/"+r:r)+((e=e.join("/"))?"/"+e:"")})(),this.#attributes=new d.WidgetGlobalAttributes,this.#sr=new i.WidgetSR(this),this.#ssr=new o.WidgetSSR(this),this.#csr=new n.WidgetCSR(this),this.#csr?.on("controller.initialised",this.#oncontroller),this.#styles=new a.StylesManager(this)}connectedCallback(){this.#wnode=r.instances.register(this),this.#holder=document.createElement("span"),this.#holder.style.display="none",this.shadowRoot.append(this.#holder),this.#attributes.initialise(this.#holder),this.#ssr.initialise().catch(e=>console.error(e.stack)),this.#sr.initialise().catch(e=>console.error(e.stack)),this.#csr.initialise()}disconnectedCallback(){this.#csr.disconnect()}attributeChangedCallback(e,t,r){this.#csr.attributeChanged(e,t,r)}}t.BeyondWidget=s}}),n.set("./widget/renderer",{hash:442693055,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0,t.Renderer=class{#widget;constructor(e){this.#widget=e}#ct=0;async render(r){let s=++this.#ct,{name:e,holder:i,styles:n}=this.#widget;if(r.errors?.length)console.error(`Error fetching static rendered widget "${e}":`,r.errors);else if(!i.children.length){if(!r.html)return"";let e=await this.#widget.host,t=(i.innerHTML=r.html.replace(/##_!(.*?)!_##/g,()=>e),[]);(r=i.querySelectorAll("link")).forEach(e=>t.push(e.href)),t.length&&await n.initialise(t),r.forEach(e=>"link"===e.localName&&e.addEventListener("load",n.onloaded)),await n?.ready,this.#ct===s&&(i.style.display="")}}}}}),n.set("./widget/sr",{hash:828831605,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetSR=void 0;var o=e("./checksum"),r=e("./renderer");t.WidgetSR=class{#widget;#renderer;#prerender;get prerender(){return this.#prerender}constructor(e){this.#widget=e,this.#renderer=new r.Renderer(e)}#initialised=!1;async initialise(){if(this.#initialised)throw new Error("Widget SSR already initialised");this.#initialised=!0;let i=this.#widget.specs;if(i.render.sr){let e=(()=>{if(!i.render.multilanguage)return"";let e=localStorage.__beyond_language;return(e=(e=e||navigator.language).slice(0,2))+":"})(),t;if("page"===i.is){var r=""+e+i.name+"//"+location.pathname+location.search;t=(0,o.default)(r)}else if("layout"===i.is)t=(0,o.default)(""+e+i.name);else{let r=new Map,s=(i.attrs?.forEach(e=>{var t=this.#widget.getAttribute(e);t&&r.set(e,t)}),e);[...r].sort((e,t)=>e[0]<t[0]?1:0).forEach(([e,t])=>s+=e+`//${t}///`),t=(0,o.default)(s)}r=`${await this.#widget.host}__sr_widgets__/${i.name}.${t}.js`;try{var s,n=await fetch(r);200!==n.status?console.error(`Error fetching static rendered widget "${i.name}". Status code: `+n.status):(s=await n.json(),this.#prerender=s,await this.#renderer.render(s))}catch(e){console.error("Widget static content fetch error:",e.message)}}}}}}),n.set("./widget/ssr",{hash:3024365739,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetSSR=void 0;var s=e("../prerendered"),r=e("./renderer");t.WidgetSSR=class{#widget;#renderer;#prerender;get prerender(){return this.#prerender}constructor(e){this.#widget=e,this.#renderer=new r.Renderer(e)}#initialised=!1;async initialise(){if(this.#widget.specs.render.ssr){if(this.#initialised)throw new Error("Widget SSR already initialised");this.#initialised=!0;let t=this.#widget;var e=t.specs,r=new Map(e.attrs?e.attrs.map(e=>[e,t.getAttribute(e)]):void 0);if(!(e=s.prerender.find(e.name,r)))return this.#load();this.#prerender=e,await this.#renderer.render(e)}}async#load(){var{specifier:e,name:t}=this.#widget,r=(r=e.split("/"))[0].startsWith("@")?r.shift()+"/"+r.shift():r.shift();if(s=await((s=(await o(r+"/config")).default.ssr)&&s.host?s.host:void console.error(`Project "${r}" does not support SSR (host not configured). `+`Required by "${t}" widget.`))){var r=(()=>{if(!this.#widget.specs.render.multilanguage)return"";let e=localStorage.__beyond_language;return"&language="+(e=(e=e||navigator.language).slice(0,2))})(),s=s+"/widget?name="+t+r+(()=>{var e=this.#widget.specs;if(!e.attrs?.length)return"";let r="&attrs="+e.attrs.join(",");e.attrs.forEach(e=>{var t=this.#widget.getAttribute(e);t&&(r+=`&attr.${e}=`+t)})})();try{var i,n=await fetch(s);200!==n.status?console.error(`Error fetching SSR of widget "${t}". Status code: `+n.status):(i=await n.json(),this.#prerender=i,await this.#renderer.render(i))}catch(e){console.error(e.stack)}}}}}}),n.set("./widget/styles/global",{hash:1112922337,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalCSS=void 0,e=e("@beyond-js/kernel/core");class r extends e.Events{#widget;#version=0;constructor(e){super(),this.#widget=e;var e=this.#widget.host,t=0!==this.#version?"?version="+this.#version:"";this.#link=e+"global.css"+t}#link;get link(){return this.#link}update(){this.#version++,this.trigger("change")}}t.GlobalCSS=r}}),n.set("./widget/styles/index",{hash:3021483485,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StylesManager=void 0;var r=e("@beyond-js/kernel/core"),i=e("./link"),s=e("./global");class n{#events=new r.Events;on=(e,t)=>this.#events.on(e,t);off=(e,t)=>this.#events.off(e,t);#loaded=new Map;#globalcss;#version=0;get version(){return this.#version}#changed(){this.#version++,this.#resolved&&this.#events.trigger("change")}get resources(){return new Set([...this.#loaded.keys()])}get loaded(){return this.#check(),this.#resolved}#promise;#resolved=!1;#resolve;get ready(){return this.#check(),this.#promise}onloaded=e=>{if(e="string"==typeof e?e:e.currentTarget.getAttribute("href"),this.#loaded.has(e))return this.#loaded.set(e,!0),this.#check(),this.#purge()&&this.#changed(),!0;console.warn(`Stylesheet href="${e}" not registered`)};#check(){var e;return!!this.#resolved||((e=[...this.#loaded.values()].reduce((e,t)=>e&&t,!0))&&this.#resolve(),this.#resolved=e)}#purge(){let r={last:new Map,values:new Map,lastLoaded:new Map},s=([...this.#loaded.keys()].forEach(e=>{var e=new i.default(e),t=(t=r.last.get(e.resource))&&t>e.version?t:e.version;r.last.set(e.resource,t),this.#loaded.get(e.href)&&(t=(t=r.lastLoaded.get(e.resource))&&t>e.version?t:e.version,r.lastLoaded.set(e.resource,t)),(t=r.values.has(e.resource)?r.values.get(e.resource):new Set).add(e.version),r.values.set(e.resource,t)}),[]);return[...this.#loaded.keys()].forEach(e=>{var e=new i.default(e),t=r.lastLoaded.get(e.resource);e.version<t&&s.push(e)}),s.forEach(e=>this.#loaded.delete(e.href)),!!s.length}#last;#refresh=()=>{this.#last&&this.#update(this.#last)&&this.#changed()};#update(e){(this.#last=e).unshift(this.#globalcss.link),e=e.map(e=>new i.default(e));let t=!1;return e.forEach(e=>{this.#loaded.has(e.href)||(this.#loaded.set(e.href,!1),t=!0)}),t}update(e){this.#update(e)&&this.#changed()}constructor(e){this.#globalcss=new s.GlobalCSS(e),this.#promise=new Promise(e=>this.#resolve=e)}#initialised=!1;get initialised(){return this.#initialised}async initialise(e){if(this.#initialised)throw new Error("Widget styles already initialised");this.#initialised=!0,this.#update(e),this.#globalcss.on("change",this.#refresh)}destroy(){this.#globalcss.off("change",this.#refresh)}}t.StylesManager=n}}),n.set("./widget/styles/link",{hash:2453054171,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=class{#href;get href(){return this.#href}#resource;get resource(){return this.#resource}#version;get version(){return this.#version}constructor(e){e=(this.#href=e).split("?version="),this.#resource=e[0],this.#version=e[1]?parseInt(e[1]):0}}}}),n.set("./widgets",{hash:334125737,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.widgets=void 0;var s=e("./widget"),r=e("./instances"),i=e("./attributes");e("./anchor");class n extends Map{#ssr=!0;get ssr(){return this.#ssr}constructor(){super()}setup(e){this.#ssr="boolean"!=typeof e?.ssr||e.ssr}get instances(){return r.instances}get attributes(){return i.attributes}register(e){e.forEach(e=>{var t,r;this.has(e.name)||(e.render=e.render||{csr:!0,ssr:!1,sr:!1},{name:t,render:r}=e,r.csr="boolean"!=typeof r.csr||r.csr,this.set(t,e),"object"!=typeof process&&customElements.define(t,class extends s.BeyondWidget{static get observedAttributes(){return e.attrs||[]}constructor(){super(e)}}))})}}t.widgets=new n}}),i.exports.descriptor=[{im:"./attributes",from:"attributes",name:"attributes"},{im:"./instances/node",from:"NodeWidget",name:"NodeWidget"},{im:"./prerendered/index",from:"prerender",name:"prerender"},{im:"./widget/csr",from:"IBeyondWidgetController",name:"IBeyondWidgetController"},{im:"./widget/csr",from:"WidgetCSR",name:"WidgetCSR"},{im:"./widget/index",from:"IWidgetSpecs",name:"IWidgetSpecs"},{im:"./widget/index",from:"BeyondWidget",name:"BeyondWidget"},{im:"./widget/styles/global",from:"GlobalCSS",name:"GlobalCSS"},{im:"./widget/styles/index",from:"StylesManager",name:"StylesManager"},{im:"./widgets",from:"widgets",name:"widgets"}],i.exports.process=function({require:e,prop:t,value:r}){!e&&"attributes"!==t||s("attributes",e?e("./attributes").attributes:r),!e&&"NodeWidget"!==t||s("NodeWidget",e?e("./instances/node").NodeWidget:r),!e&&"prerender"!==t||s("prerender",e?e("./prerendered/index").prerender:r),!e&&"IBeyondWidgetController"!==t||s("IBeyondWidgetController",e?e("./widget/csr").IBeyondWidgetController:r),!e&&"WidgetCSR"!==t||s("WidgetCSR",e?e("./widget/csr").WidgetCSR:r),!e&&"IWidgetSpecs"!==t||s("IWidgetSpecs",e?e("./widget/index").IWidgetSpecs:r),!e&&"BeyondWidget"!==t||s("BeyondWidget",e?e("./widget/index").BeyondWidget:r),!e&&"GlobalCSS"!==t||s("GlobalCSS",e?e("./widget/styles/global").GlobalCSS:r),!e&&"StylesManager"!==t||s("StylesManager",e?e("./widget/styles/index").StylesManager:r),!e&&"widgets"!==t||s("widgets",e?e("./widgets").widgets:r)},s("__beyond_pkg",i),s("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(n)}}});