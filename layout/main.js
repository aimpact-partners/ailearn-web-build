System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0"],function(n,e){"use strict";var r,t,o,i,a,s,l;return n("Controller",void 0),{setters:[function(e){r=e},function(e){t=e},function(e){o=e},function(e){i=e},function(e){a=e}],execute:function(){l=t.Bundle,(s=new l({module:{vspecifier:"@aimpact/ailearn-app@0.0.33.dev-01/layout/main"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",r],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/base",i],["react",a]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-layout",vspecifier:"@aimpact/ailearn-app@0.0.33.dev-01/layout/main",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.33.dev-01/layout/main"),(l=new Map).set("./controller",{hash:705071867,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Controller=void 0;var t=e("@beyond-js/react-18-widgets/base"),n=e("./views");class o extends t.ReactWidgetController{get Widget(){return n.Layout}}r.Controller=o}}),l.set("./views/index",{hash:503030043,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Layout=function(){var e=t.useRef();return t.createElement("main",{ref:e},t.createElement("beyond-layout-children",null))};var t=e("react")}}),s.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],s.exports.process=function({require:e,prop:r,value:t}){!e&&"Controller"!==r||n("Controller",e?e("./controller").Controller:t)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,r)=>s.hmr.on(e,r),this.off=(e,r)=>s.hmr.off(e,r)}),s.initialise(l)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6ImdnQ0FBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxRQUdNRSxVQUFtQkgsRUFBQUksc0JBQ3hCQyxhQUNDLE9BQU9ILEVBQUFJLE1BQ1IsQyxDQUNBQyxFQUFBSixXQUFBQSxDLDBIQ0VLLFdBQ0wsSUFBTUssRUFBTUMsRUFBTUMsT0FBTSxFQUV4QixPQUNDRCxFQUFBRSxjQUFBLE9BQUEsQ0FBTUgsSUFBS0EsQ0FBRyxFQUNiQyxFQUFBRSxjQUFBLHlCQUFBLElBQUEsQ0FBMEIsQ0FHN0IsRUFsQkEsSUFBQUYsRUFBQVIsRUFBQSxPQUFBIn0=