System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.6/ripple","tippy.js@6.3.7","pragmate-ui@1.0.0-beta.6/icons","pragmate-ui@1.0.0-beta.6/base"],function(n,e){var t,i,a,r,c,p,s,u,o;return n({Chip:void 0,Chips:void 0}),{setters:[function(e){t=e},function(e){i=e},function(e){a=e},function(e){r=e},function(e){c=e},function(e){p=e},function(e){s=e}],execute:function(){o=t.Bundle,(u=new o({module:{vspecifier:"pragmate-ui@1.0.0-beta.6/chips"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",i],["react",a],["pragmate-ui/ripple",r],["tippy.js",c],["pragmate-ui/icons",p],["pragmate-ui/base",s]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@1.0.0-beta.6/chips"),(o=new Map).set("./chip",{hash:4064505056,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chip=function(e){let{title:t,children:i,icon:n}=e,a={...e},r=s.default.useRef(null),c=(["children","type","className","variant"].forEach(e=>delete a[e]),s.default.useEffect(()=>{a.onClick&&(new u.RippleEffect).addRippleEffect(r.current),t&&(0,o.default)(r.current)},[a.onClick,t]),t&&(a["data-tippy-content"]=t),e.variant||e.type||"default"),p="pui-chip pui-chip--"+c;return a.onClick&&(p+=" is-clickable"),s.default.createElement("span",{ref:r,className:p,...a},i,n&&s.default.createElement(l.Icon,{icon:n}))};var s=e("react"),u=e("pragmate-ui/ripple"),o=e("tippy.js"),l=e("pragmate-ui/icons")}}),o.set("./index",{hash:3044580695,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chips=function(e){let t=e.children,i={...e},n=(["items","type","variant"].forEach(e=>delete i[e]),e.variant||e.type||"default"),a="pui-chip__container pui-chip__container--"+n;return i.className=`pui-chip__container${i.className?" "+i.className:""} `+a,r.default.createElement("div",{...i},r.default.createElement("div",{className:"content-chip"},t))};var r=e("react")}}),o.set("./types",{hash:710310839,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.exports.descriptor=[{im:"./chip",from:"Chip",name:"Chip"},{im:"./index",from:"Chips",name:"Chips"}],u.exports.process=function({require:e,prop:t,value:i}){!e&&"Chip"!==t||n("Chip",e?e("./chip").Chip:i),!e&&"Chips"!==t||n("Chips",e?e("./index").Chips:i)},n("__beyond_pkg",u),n("hmr",new function(){this.on=(e,t)=>u.hmr.on(e,t),this.off=(e,t)=>u.hmr.off(e,t)}),u.initialise(o)}}});