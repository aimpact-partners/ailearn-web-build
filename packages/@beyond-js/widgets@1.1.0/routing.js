System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/routing","@beyond-js/events@0.0.4/events"],function(a,e){"use strict";var t,n,s,r,i,u,o,c;return a({LayoutInstance:void 0,manager:void 0,PageInstance:void 0,Route:void 0,PageURI:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){s=e},function(e){r=e},function(e){i=e}],execute:function(){u=e=>{var t=new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/widgets","1.1.0"],["@aimpact/ailearn-app","0.0.34.dev-01"]]);return globalThis.bimport(globalThis.bimport.resolve(e,t))},c=t.Bundle,(o=new c({module:{vspecifier:"@beyond-js/widgets@1.1.0/routing"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",n],["@beyond-js/widgets/render",s],["@beyond-js/kernel/routing",r],["@beyond-js/events/events",i]]),(c=new Map).set("./layouts/index",{hash:2720616762,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class n extends Map{register(e){this.set(e.id,e)}}t.default=n}}),c.set("./layouts/layout",{hash:3657772330,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutInstance=void 0;class s extends e("@beyond-js/kernel/core").Events{get is(){return"layout"}#layouts;#element;get element(){return this.#element}get id(){return this.#element}#active;get active(){return this.#active}#parent;#children=new Map;get children(){return this.#children}constructor(e,t,n){super(),this.#layouts=e,this.#element=t||"main",this.#parent=n}activate(n,a){var e=(()=>{if(!a.length)return n;const t=a[0]["name"];var e=[...this.#children.values()].find(e=>e.element===t);return e||(e=new s(this.#layouts,t,this),this.#layouts.register(e),e)})(),t=(this.#children.set(e.id,e),this.#active!==e);t&&"layout"===this.#active?.is&&this.#active.deactivate(),this.#active=e,a.shift(),"layout"===e.is&&e.activate(n,a),t&&this.trigger("change")}deactivate(){var e=this.#active;e?(this.#active=void 0,"layout"===e.is&&e.deactivate(),this.trigger("change")):console.warn(`Layout "${this.#element}" doesn't have any active child`)}}t.LayoutInstance=s}}),c.set("./manager",{hash:772391908,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.manager=void 0;var n=e("@beyond-js/kernel/core"),a=e("@beyond-js/kernel/routing"),s=e("./layouts/layout"),r=e("./pages"),i=e("./layouts"),o=e("./pages/route");t.manager="object"==typeof process?void 0:new class{#instances={layouts:new i.default,pages:new r.default};#initialised=!1;get initialised(){return this.#initialised}#resolve;#ready=new Promise(e=>this.#resolve=e);get ready(){return this.#ready}constructor(){const t=()=>this.set(a.routing.uri).catch(e=>console.log(e.stack));var e=globalThis.__app_package["specifier"];Promise.all([u(e+"/config"),u(e+"/start")]).then(([{default:e}])=>{this.#main=new s.LayoutInstance(this.#instances.layouts,e.layout),a.routing.on("change",t),a.routing.initialised?t():a.routing.ready.then(t)})}get layouts(){return this.#instances.layouts}get pages(){return this.#instances.pages}#main;get main(){return this.#main}#ct=new n.CancellationToken;async set(e){var t,n,a=this.#ct.reset(),s=new o.Route(e.pathname);if(await s.process(),this.#ct.check(a))return a=()=>{this.#initialised||this.#resolve(),this.#initialised=!0},t=s["page"],t?({error:s,value:n}=(t=this.#instances.pages.register(e,s)).parents,s?console.error(`Page on "${e.uri}" cannot be shown: `+s):(n.length&&n[0].name===this.main.element&&n.shift(),this.#main.activate(t,n))):console.error(`Pathname "${e.pathname}" does not have a page widget associated to it`),a()}}}}),c.set("./pages/index",{hash:2934692868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=e("./instance");class n extends Map{instance(t){return[...this.values()].find(e=>e.id===t)}obtain({widget:e,id:t}){return t=t||e.getAttribute("data-child-id"),this.instance(t)}register(e,t){const n=e["pathname"];var a=this.has(n)?((a=this.get(n)).uri.update(e),a):new s.PageInstance(e,t);return this.set(n,a),a}}t.default=n}}),c.set("./pages/instance",{hash:3034563768,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageInstance=void 0;var s=e("@beyond-js/widgets/render"),n=e("./uri");let a=0;t.PageInstance=class{#uri;get uri(){return this.#uri}get route(){return this.#uri.route}get element(){return this.#uri.route.page}get is(){return"page"}#id;get id(){return this.element+":"+this.#id}constructor(e,t){this.#uri=new n.PageURI({uri:e,route:t}),this.#id=++a}get parents(){var e=[],t=s.widgets.get(this.element);if(!t)throw new Error(`Widget "${this.element}" not found`);let n=t["layout"];for(;n;){var a=[...s.widgets.values()].find(({name:e})=>e===n);if(!a)return{error:`Layout "${n}" not found`};e.unshift(a),n=a.layout}return{value:e}}}}}),c.set("./pages/route",{hash:228538911,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Route=void 0;var n=e("@beyond-js/widgets/render"),r=e("@beyond-js/kernel/routing");t.Route=class{#pathname;get pathname(){return this.#pathname}#page;get page(){return this.#page}#vars;get vars(){return this.#vars}constructor(e){this.#pathname=e}async process(){const s=this.#pathname.split("/"),a=new Map;n.widgets.forEach(({is:e,name:t,route:n})=>"page"===e&&a.set(t,n.split("/")));var e=[...a].filter(([,e])=>e.length===s.length),e=(this.#vars=new Map,e.find(([,t])=>{this.#vars.clear();for(let e=0;e<s.length;e++){var n=t[e];if(n.startsWith("${")&&n.endsWith("}")){var a=n.slice(2,n.length-1);this.#vars.set(a,s[e])}else if(n!==s[e])return!1}return!0}));this.#page=e?e[0]:await r.routing.missing?.(this.#pathname)}}}}),c.set("./pages/uri",{hash:3243525408,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageURI=void 0;class n extends e("@beyond-js/events/events").Events{#route;get route(){return this.#route}#uri;get uri(){return this.#uri}get pathname(){return this.#uri.pathname}get search(){return this.#uri.search}get qs(){return this.#uri.qs}get hash(){return this.#uri.hash}get vars(){return this.#route.vars}constructor({uri:e,route:t}){super(),this.#route=t,this.#uri=e}update(e){this.#uri!==e&&(this.#uri=e,e=this["qs"],this.trigger("change",{qs:e}))}}t.PageURI=n}}),o.exports.descriptor=[{im:"./layouts/layout",from:"LayoutInstance",name:"LayoutInstance"},{im:"./manager",from:"manager",name:"manager"},{im:"./pages/instance",from:"PageInstance",name:"PageInstance"},{im:"./pages/route",from:"Route",name:"Route"},{im:"./pages/uri",from:"PageURI",name:"PageURI"}],o.exports.process=function({require:e,prop:t,value:n}){!e&&"LayoutInstance"!==t||a("LayoutInstance",e?e("./layouts/layout").LayoutInstance:n),!e&&"manager"!==t||a("manager",e?e("./manager").manager:n),!e&&"PageInstance"!==t||a("PageInstance",e?e("./pages/instance").PageInstance:n),!e&&"Route"!==t||a("Route",e?e("./pages/route").Route:n),!e&&"PageURI"!==t||a("PageURI",e?e("./pages/uri").PageURI:n)},a("__beyond_pkg",o),a("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(c)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9sYXlvdXRzL2luZGV4LnRzIiwiL2xheW91dHMvbGF5b3V0LnRzIiwiL21hbmFnZXIudHMiLCIvcGFnZXMvaW5kZXgudHMiLCIvcGFnZXMvaW5zdGFuY2UudHMiLCIvcGFnZXMvcm91dGUudHMiLCIvcGFnZXMvdXJpLnRzIl0sIm5hbWVzIjpbIl9kZWZhdWx0IiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJ0aGlzIiwic2V0IiwiaWQiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkxheW91dEluc3RhbmNlIiwicmVxdWlyZSIsIkV2ZW50cyIsImlzIiwiI2xheW91dHMiLCIjZWxlbWVudCIsImVsZW1lbnQiLCIjYWN0aXZlIiwiYWN0aXZlIiwiI3BhcmVudCIsIiNjaGlsZHJlbiIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJsYXlvdXRzIiwicGFyZW50Iiwic3VwZXIiLCJhY3RpdmF0ZSIsInBhZ2UiLCJjaGlsZCIsImxlbmd0aCIsIm5hbWUiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGFuZ2VkIiwiZGVhY3RpdmF0ZSIsInNoaWZ0IiwidHJpZ2dlciIsImNvbnNvbGUiLCJ3YXJuIiwiX2NvcmUiLCJfcm91dGluZyIsIl9sYXlvdXQiLCJfcGFnZXMiLCJfbGF5b3V0cyIsIl9yb3V0ZSIsIm1hbmFnZXIiLCJwcm9jZXNzIiwiI2luc3RhbmNlcyIsInBhZ2VzIiwiI2luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZWQiLCIjcmVzb2x2ZSIsIiNyZWFkeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJsb2ciLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCIjbWFpbiIsIm9uIiwibWFpbiIsIiNjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJhd2FpdCIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwiX2luc3RhbmNlIiwiaW5zdGFuY2UiLCJvYnRhaW4iLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJoYXMiLCJnZXQiLCJ1cGRhdGUiLCJQYWdlSW5zdGFuY2UiLCJfcmVuZGVyIiwiX3VyaSIsImxldCIsIiN1cmkiLCIjaWQiLCJQYWdlVVJJIiwib3V0cHV0Iiwid2lkZ2V0cyIsIkVycm9yIiwidW5zaGlmdCIsIiNwYXRobmFtZSIsIiNwYWdlIiwiI3ZhcnMiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiI3JvdXRlIiwic2VhcmNoIiwicXMiLCJoYXNoIl0sIm1hcHBpbmdzIjoibWlDQUtjQSxVQUFlQyxJQUM1QkMsU0FBU0MsR0FDUkMsS0FBS0MsSUFBSUYsRUFBT0csR0FBSUgsQ0FBTSxDQUMzQixDLENBQ0FJLEVBQUFDLFFBQUFSLEMsbUpDREtTLFVBTk5DLEVBQUEsd0JBQUEsRUFNNkJDLE9BQzVCQyxTQUNDLE1BQU8sUUFDUixDQUVTQyxTQUVBQyxTQUNUQyxjQUNDLE9BQU9YLEtBQUtVLFFBQ2IsQ0FFQVIsU0FDQyxPQUFPRixLQUFLVSxRQUNiLENBR0FFLFFBQ0FDLGFBQ0MsT0FBT2IsS0FBS1ksT0FDYixDQUdBRSxRQUdTQyxVQUFzQyxJQUFJbEIsSUFDbkRtQixlQUNDLE9BQU9oQixLQUFLZSxTQUNiLENBVUFFLFlBQVlDLEVBQWtCUCxFQUFrQlEsR0FDL0NDLE1BQUssRUFFTHBCLEtBQUtTLFNBQVdTLEVBQ2hCbEIsS0FBS1UsU0FBV0MsR0FBb0IsT0FDcENYLEtBQUtjLFFBQVVLLENBQ2hCLENBUUFFLFNBQVNDLEVBQW9CSixHQUc1QixJQUFNSyxHQUFxQixLQUMxQixHQUFJLENBQUNMLEVBQVFNLE9BQVEs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