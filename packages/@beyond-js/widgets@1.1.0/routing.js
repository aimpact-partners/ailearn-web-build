System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/routing","@beyond-js/events@0.0.4/events"],function(a,e){var t,n,s,r,i,u,o,h;return a({LayoutInstance:void 0,manager:void 0,PageInstance:void 0,Route:void 0,PageURI:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){s=e},function(e){r=e},function(e){i=e}],execute:function(){u=e=>{var t=new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/widgets","1.1.0"],["@aimpact/ailearn-app","0.1.0-dev.06"]]);return globalThis.bimport(globalThis.bimport.resolve(e,t))},h=t.Bundle,(o=new h({module:{vspecifier:"@beyond-js/widgets@1.1.0/routing"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",n],["@beyond-js/widgets/render",s],["@beyond-js/kernel/routing",r],["@beyond-js/events/events",i]]),(h=new Map).set("./layouts/index",{hash:2720616762,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class n extends Map{register(e){this.set(e.id,e)}}t.default=n}}),h.set("./layouts/layout",{hash:3657772330,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutInstance=void 0,e=e("@beyond-js/kernel/core");class s extends e.Events{get is(){return"layout"}#layouts;#element;get element(){return this.#element}get id(){return this.#element}#active;get active(){return this.#active}#parent;#children=new Map;get children(){return this.#children}constructor(e,t,n){super(),this.#layouts=e,this.#element=t||"main",this.#parent=n}activate(n,a){var e=(()=>{if(!a.length)return n;let t=a[0].name,e=[...this.#children.values()].find(e=>e.element===t);return e||(e=new s(this.#layouts,t,this),this.#layouts.register(e),e)})(),t=(this.#children.set(e.id,e),this.#active!==e);t&&"layout"===this.#active?.is&&this.#active.deactivate(),this.#active=e,a.shift(),"layout"===e.is&&e.activate(n,a),t&&this.trigger("change")}deactivate(){var e=this.#active;e?(this.#active=void 0,"layout"===e.is&&e.deactivate(),this.trigger("change")):console.warn(`Layout "${this.#element}" doesn't have any active child`)}}t.LayoutInstance=s}}),h.set("./manager",{hash:772391908,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.manager=void 0;var n=e("@beyond-js/kernel/core"),a=e("@beyond-js/kernel/routing"),s=e("./layouts/layout"),r=e("./pages"),i=e("./layouts"),o=e("./pages/route");t.manager="object"==typeof process?void 0:new class{#instances={layouts:new i.default,pages:new r.default};#initialised=!1;get initialised(){return this.#initialised}#resolve;#ready=new Promise(e=>this.#resolve=e);get ready(){return this.#ready}constructor(){let t=()=>this.set(a.routing.uri).catch(e=>console.log(e.stack)),e=globalThis.__app_package.specifier;Promise.all([u(e+"/config"),u(e+"/start")]).then(([{default:e}])=>{this.#main=new s.LayoutInstance(this.#instances.layouts,e.layout),a.routing.on("change",t),a.routing.initialised?t():a.routing.ready.then(t)})}get layouts(){return this.#instances.layouts}get pages(){return this.#instances.pages}#main;get main(){return this.#main}#ct=new n.CancellationToken;async set(e){var t,n,a=this.#ct.reset(),s=new o.Route(e.pathname);if(await s.process(),this.#ct.check(a))return a=()=>{this.#initialised||this.#resolve(),this.#initialised=!0},s.page?({error:s,value:n}=(t=this.#instances.pages.register(e,s)).parents,s?console.error(`Page on "${e.uri}" cannot be shown: `+s):(n.length&&n[0].name===this.main.element&&n.shift(),this.#main.activate(t,n))):console.error(`Pathname "${e.pathname}" does not have a page widget associated to it`),a()}}}}),h.set("./pages/index",{hash:2934692868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=e("./instance");class n extends Map{instance(t){return[...this.values()].find(e=>e.id===t)}obtain({widget:e,id:t}){return t=t||e.getAttribute("data-child-id"),this.instance(t)}register(e,t){var n=e.pathname,a=this.has(n)?((a=this.get(n)).uri.update(e),a):new s.PageInstance(e,t);return this.set(n,a),a}}t.default=n}}),h.set("./pages/instance",{hash:3034563768,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageInstance=void 0;var s=e("@beyond-js/widgets/render"),n=e("./uri");let a=0;t.PageInstance=class{#uri;get uri(){return this.#uri}get route(){return this.#uri.route}get element(){return this.#uri.route.page}get is(){return"page"}#id;get id(){return this.element+":"+this.#id}constructor(e,t){this.#uri=new n.PageURI({uri:e,route:t}),this.#id=++a}get parents(){var e=[],t=s.widgets.get(this.element);if(!t)throw new Error(`Widget "${this.element}" not found`);let n=t.layout;for(;n;){var a=[...s.widgets.values()].find(({name:e})=>e===n);if(!a)return{error:`Layout "${n}" not found`};e.unshift(a),n=a.layout}return{value:e}}}}}),h.set("./pages/route",{hash:228538911,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Route=void 0;var n=e("@beyond-js/widgets/render"),r=e("@beyond-js/kernel/routing");t.Route=class{#pathname;get pathname(){return this.#pathname}#page;get page(){return this.#page}#vars;get vars(){return this.#vars}constructor(e){this.#pathname=e}async process(){let s=this.#pathname.split("/"),a=new Map;n.widgets.forEach(({is:e,name:t,route:n})=>"page"===e&&a.set(t,n.split("/")));var e=[...a].filter(([,e])=>e.length===s.length),e=(this.#vars=new Map,e.find(([,t])=>{this.#vars.clear();for(let e=0;e<s.length;e++){var n=t[e];if(n.startsWith("${")&&n.endsWith("}")){var a=n.slice(2,n.length-1);this.#vars.set(a,s[e])}else if(n!==s[e])return!1}return!0}));this.#page=e?e[0]:await r.routing.missing?.(this.#pathname)}}}}),h.set("./pages/uri",{hash:3243525408,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageURI=void 0,e=e("@beyond-js/events/events");class n extends e.Events{#route;get route(){return this.#route}#uri;get uri(){return this.#uri}get pathname(){return this.#uri.pathname}get search(){return this.#uri.search}get qs(){return this.#uri.qs}get hash(){return this.#uri.hash}get vars(){return this.#route.vars}constructor({uri:e,route:t}){super(),this.#route=t,this.#uri=e}update(e){this.#uri!==e&&(this.#uri=e,e=this.qs,this.trigger("change",{qs:e}))}}t.PageURI=n}}),o.exports.descriptor=[{im:"./layouts/layout",from:"LayoutInstance",name:"LayoutInstance"},{im:"./manager",from:"manager",name:"manager"},{im:"./pages/instance",from:"PageInstance",name:"PageInstance"},{im:"./pages/route",from:"Route",name:"Route"},{im:"./pages/uri",from:"PageURI",name:"PageURI"}],o.exports.process=function({require:e,prop:t,value:n}){!e&&"LayoutInstance"!==t||a("LayoutInstance",e?e("./layouts/layout").LayoutInstance:n),!e&&"manager"!==t||a("manager",e?e("./manager").manager:n),!e&&"PageInstance"!==t||a("PageInstance",e?e("./pages/instance").PageInstance:n),!e&&"Route"!==t||a("Route",e?e("./pages/route").Route:n),!e&&"PageURI"!==t||a("PageURI",e?e("./pages/uri").PageURI:n)},a("__beyond_pkg",o),a("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(h)}}});