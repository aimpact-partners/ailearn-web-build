System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/widgets@1.1.0/render"],function(n,e){var t,r,i,s,o;return n("ssr",void 0),{setters:[function(e){t=e},function(e){r=e}],execute:function(){i=e=>{var t=new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/widgets","1.1.0"],["@aimpact/ailearn-app","0.1.5-test.03"]]);return globalThis.bimport(globalThis.bimport.resolve(e,t))},o=t.Bundle,(s=new o({module:{vspecifier:"@beyond-js/widgets@1.1.0/layout"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",r]]),(o=new Map).set("./children",{hash:3435386799,creator:function(e,t){var r=e("@beyond-js/widgets/render"),n=e("./ssr");let s;customElements.define("beyond-layout-children",class extends HTMLElement{#layout;#active;connectedCallback(){this.attachShadow({mode:"open"});let t=()=>{var e=()=>this.#start().catch(e=>console.error(e.stack));s.initialised?e():s.ready.then(e)};if(s)return t();n.ssr.page?this.#onssr():n.ssr.addEventListener("received",this.#onssr);var e=[],r=(e.push(i("@beyond-js/widgets/routing")),e.push(i("@beyond-js/kernel/core")),globalThis.__app_package.specifier);e.push(i(r+"/start")),Promise.all(e).then(([e])=>{({manager:s}=e),t()}).catch(e=>console.log(e.stack))}#container;get container(){var e;return void 0!==this.#container?this.#container:(e=(()=>{let e=this;for(;;){var t=e.getRootNode();if(t===document)return t;if(e=t.host,r.widgets.instances.has(e))return e}})())?this.#container=e:(console.error("Widget container of beyond-layout-children not found"),this.#container=null)}#onssr=()=>{n.ssr.removeEventListener("received",this.#onssr);var e,t,r=this.container;null!==r&&({element:e,error:t}=(t=n.ssr.hierarchy,r===document?{element:t[0]}:(e=r.localName,-1===(r=t.indexOf(e))?{error:`Container widget of beyond-layout-children "${e}" not found in ssr hierarchy`}:r===t.length-1?{error:`Container widget of beyond-layout-children "${e}" is the page, not a layout`}:{element:t[r+1]})),t?console.error(t,this):this.shadowRoot.appendChild(document.createElement(e)))};#render=()=>{let t;this.#layout.children.forEach(r=>{let n=[...this.shadowRoot.children].find(e=>e.getAttribute("data-child-id")===r.id);n||((n=document.createElement(r.element)).setAttribute("data-child-id",r.id),this.shadowRoot.append(n));var e=this.#layout.active===r,s=n.controller;if(e&&(t=n),e&&n!==this.#active){let t=()=>{if(n.removeEventListener("controller.initialised",t),n===this.#active){var e=n.controller;if(!e)throw new Error(`Controller of element widget "${r.element}" is undefined`);this.#active===n&&e.show?.()}};s?s.show?.():n.addEventListener("controller.initialised",t)}else n.hidden||e||s?.hide?.();n.hidden=!e}),this.#active=t};#hydrate(){var e=this.shadowRoot.children,t=this.#layout;e.length&&(1<e.length?console.error("Only one child was expected on beyond-layout-children start",this):e[0].setAttribute("data-child-id",[...t.children.keys()][0]))}async#start(){var e,t;if(n.ssr.removeEventListener("received",this.#onssr),null!==this.container)return e=e=>{this.#layout=e,this.#hydrate(),this.#layout.on("change",this.#render),this.#render()},this.container===document||(t=this.container.localName)===s.main.element?e(s.main):void(s.layouts.has(t)?e(s.layouts.get(t)):console.error(`Layout "${t}" not found`,[...s.layouts],s))}})}}),o.set("./ssr",{hash:3616680628,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ssr=void 0,t.ssr=new class extends EventTarget{#main;get main(){return this.#main}#page;get page(){return this.#page}#layouts;get layouts(){return this.#layouts}#hierarchy=[];get hierarchy(){return this.#hierarchy}data(e,t){this.#main=e,this.#page=t.element,this.#layouts=t.parents,e&&this.#hierarchy.push(e),t.parents&&(this.#hierarchy=this.#hierarchy.concat(t.parents)),this.#hierarchy.push(t.element),e=new Event("received"),this.dispatchEvent(e)}}}}),s.exports.descriptor=[{im:"./ssr",from:"ssr",name:"ssr"}],s.exports.process=function({require:e,prop:t,value:r}){!e&&"ssr"!==t||n("ssr",e?e("./ssr").ssr:r)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(o)}}});