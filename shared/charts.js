System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","apexcharts@3.53.0"],function(n,e){"use strict";var t,r,o,a,s,c;return n({Control:void 0,ALGO:void 0,ALGO2:void 0,Chart:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){a=e}],execute:function(){c=t.Bundle,(s=new c({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/shared/charts"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",r],["react",o],["apexcharts",a]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/shared/charts"),(c=new Map).set("./control",{hash:3537212923,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Control=t.ALGO2=t.ALGO=void 0,t.Control=class{constructor(){}testing(){console.log("testing")}},t.ALGO="11",t.ALGO2="11"}}),c.set("./index",{hash:3643900951,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chart=function(t){const r=o.default.useRef(null),[,n]=o.default.useState(null);return o.default.useEffect(()=>{var e=new a.default(r.current,t.options);e.render(),n(e)},[r]),o.default.createElement("div",{ref:r})};var o=e("react"),a=e("apexcharts")}}),s.exports.descriptor=[{im:"./control",from:"Control",name:"Control"},{im:"./control",from:"ALGO",name:"ALGO"},{im:"./control",from:"ALGO2",name:"ALGO2"},{im:"./index",from:"Chart",name:"Chart"}],s.exports.process=function({require:e,prop:t,value:r}){!e&&"Control"!==t||n("Control",e?e("./control").Control:r),!e&&"ALGO"!==t||n("ALGO",e?e("./control").ALGO:r),!e&&"ALGO2"!==t||n("ALGO2",e?e("./control").ALGO2:r),!e&&"Chart"!==t||n("Chart",e?e("./index").Chart:r)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(c)}}});