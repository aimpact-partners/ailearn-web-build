System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@aimpact/ailearn-app@0.1.4-test.02/main-layout.widget"],function(u,e){var r,a,t,n,o;return u({useBroker:void 0,useMediaQuery:void 0}),{setters:[function(e){r=e},function(e){a=e},function(e){t=e}],execute:function(){o=r.Bundle,(n=new o({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/components/hooks"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["@aimpact/ailearn-app/main-layout.widget",t]]),(o=new Map).set("./use-breadcrumb",{hash:813885386,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.useBroker=function({breadcrumb:e,onChange:r},a=[]){var u=n.LayoutBroker;return t.default.useEffect(()=>(n.LayoutBroker.breadcrumb=e,r&&n.LayoutBroker.on("change",r),()=>{r&&n.LayoutBroker.off("change",r)}),a),u};var t=e("react"),n=e("@aimpact/ailearn-app/main-layout.widget")}}),o.set("./use-media-query",{hash:2034606327,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.useMediaQuery=function(){let[e,r]=(0,a.useState)("lg");return(0,a.useEffect)(()=>{let e=()=>{var e=(e=window.innerWidth)<576?"xs":576<=e&&e<768?"sm":768<=e&&e<992?"md":"lg";r(e)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e};var a=e("react")}}),n.exports.descriptor=[{im:"./use-breadcrumb",from:"useBroker",name:"useBroker"},{im:"./use-media-query",from:"useMediaQuery",name:"useMediaQuery"}],n.exports.process=function({require:e,prop:r,value:a}){!e&&"useBroker"!==r||u("useBroker",e?e("./use-breadcrumb").useBroker:a),!e&&"useMediaQuery"!==r||u("useMediaQuery",e?e("./use-media-query").useMediaQuery:a)},u("__beyond_pkg",n),u("hmr",new function(){this.on=(e,r)=>n.hmr.on(e,r),this.off=(e,r)=>n.hmr.off(e,r)}),n.initialise(o)}}});