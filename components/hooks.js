System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0"],function(t,e){"use strict";var r,n,i,u;return t("useMediaQuery",void 0),{setters:[function(e){r=e},function(e){n=e}],execute:function(){u=r.Bundle,(i=new u({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/components/hooks"},type:"code"},e.meta.url).package()).dependencies.update([["react",n]]),(u=new Map).set("./use-media-query",{hash:2034606327,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.useMediaQuery=function(){const[e,r]=(0,n.useState)("lg");return(0,n.useEffect)(()=>{const e=()=>{var e=(e=window.innerWidth)<576?"xs":576<=e&&e<768?"sm":768<=e&&e<992?"md":"lg";r(e)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e};var n=e("react")}}),i.exports.descriptor=[{im:"./use-media-query",from:"useMediaQuery",name:"useMediaQuery"}],i.exports.process=function({require:e,prop:r,value:n}){!e&&"useMediaQuery"!==r||t("useMediaQuery",e?e("./use-media-query").useMediaQuery:n)},t("__beyond_pkg",i),t("hmr",new function(){this.on=(e,r)=>i.hmr.on(e,r),this.off=(e,r)=>i.hmr.off(e,r)}),i.initialise(u)}}});