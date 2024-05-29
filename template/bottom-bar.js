System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0","react-icons@5.2.1/io5"],function(o,e){"use strict";var t,r,n,a,l,s,c,i;return o("Controller",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){a=e},function(e){l=e},function(e){s=e}],execute:function(){i=r.Bundle,(c=new i({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/template/bottom-bar"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",a],["react",l],["react-icons/io5",s]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-template-bottom-bar",vspecifier:"@aimpact/ailearn-app@0.0.43/template/bottom-bar",is:"page",route:"/template/bottom-bar"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.43/template/bottom-bar"),(i=new Map).set("./controller",{hash:1927493790,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),o=e("./store"),n=e("./views");class a extends r.PageReactWidgetController{#store;createStore(){return this.#store=new o.StoreManager,this.#store}get Widget(){return n.View}show(){}hide(){}}t.Controller=a}}),i.set("./store",{hash:1793251939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;t.StoreManager=class{}}}),i.set("./views/bottom-bar",{hash:2676281599,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BottomBar=void 0;var r=e("react"),o=e("react-icons/io5");t.BottomBar=()=>r.default.createElement("div",{className:"bottom-bar"},r.default.createElement("button",{className:"icon-button"},r.default.createElement(o.IoCamera,null)),r.default.createElement("button",{className:"icon-button"},r.default.createElement(o.IoImage,null)),r.default.createElement("button",{className:"icon-button"},r.default.createElement(o.IoDocument,null)),r.default.createElement("input",{type:"text",className:"message-input",placeholder:"Message"}),r.default.createElement("button",{className:"icon-button"},r.default.createElement(o.IoSend,null)),r.default.createElement("button",{className:"icon-button"},r.default.createElement(o.IoArrowUp,null)))}}),i.set("./views/index",{hash:1024548891,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("h1",null,"hola mundo"),r.default.createElement(o.BottomBar,null))};var r=e("react"),o=e("./bottom-bar")}}),c.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],c.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||o("Controller",e?e("./controller").Controller:r)},o("__beyond_pkg",c),o("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(i)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2JvdHRvbS1iYXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfaW8iLCJCb3R0b21CYXIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIklvQ2FtZXJhIiwiSW9JbWFnZSIsIklvRG9jdW1lbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJJb1NlbmQiLCJJb0Fycm93VXAiLCJGcmFnbWVudCIsIl9ib3R0b21CYXIiXSwibWFwcGluZ3MiOiJ5bUNBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBRUMsT0FEQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNYRCxLQUFLRixNQUNiLENBQ0FJLGFBQ0MsT0FBT1AsRUFBQVEsSUFDUixDQUtBQyxRQUtBQyxRLENBQ0FDLEVBQUFWLFdBQUFBLEMsa0lDdkJtRFUsRUFBQUwsb0IsMElDRHBELElBQUFNLEVBQUFkLEVBQUEsT0FBQSxFQUNBZSxFQUFBZixFQUFBLGlCQUFBLEVBdUJFYSxFQUFBRyxVQXJCaUNBLElBRWpDRixFQUFBRyxRQUFBQyxjQUFBLE1BQUEsQ0FBS0MsVUFBVSxZQUFZLEVBQzFCTCxFQUFBRyxRQUFBQyxjQUFBLFNBQUEsQ0FBUUMsVUFBVSxhQUFhLEVBQzlCTCxFQUFBRyxRQUFBQyxjQUFDSCxFQUFBSyxTQUFRLElBQUEsQ0FBRyxFQUViTixFQUFBRyxRQUFBQyxjQUFBLFNBQUEsQ0FBUUMsVUFBVSxhQUFhLEVBQzlCTCxFQUFBRyxRQUFBQyxjQUFDSCxFQUFBTSxRQUFPLElBQUEsQ0FBRyxFQUVaUCxFQUFBRyxRQUFBQyxjQUFBLFNBQUEsQ0FBUUMsVUFBVSxhQUFhLEVBQzlCTCxFQUFBRyxRQUFBQyxjQUFDSCxFQUFBTyxXQUFVLElBQUEsQ0FBRyxFQUVmUixFQUFBRyxRQUFBQyxjQUFBLFFBQUEsQ0FBT0ssS0FBSyxPQUFPSixVQUFVLGdCQUFnQkssWUFBWSxTQUFTLENBQUEsRUFDbEVWLEVBQUFHLFFBQUFDLGNBQUEsU0FBQSxDQUFRQyxVQUFVLGFBQWEsRUFDOUJMLEVBQUFHLFFBQUFDLGNBQUNILEVBQUFVLE9BQU0sSUFBQSxDQUFHLEVBRVhYLEVBQUFHLFFBQUFDLGNBQUEsU0FBQSxDQUFRQyxVQUFVLGFBQWEsRUFDOUJMLEVBQUFHLFFBQUFDLGNBQUNILEVBQUFXLFVBQVMsSUFBQSxDQUFHLENBQ0wsQyx5SENsQk4sV0FDTCxPQUNDWixFQUFBRyxRQUFBQyxjQUFBSixFQUFBRyxRQUFBVSxTQUFBLEtBQ0NiLEVBQUFHLFFBQUFDLGNBQUEsS0FBQSxLQUFBLFlBQUEsRUFDQUosRUFBQUcsUUFBQUMsY0FBQ1UsRUFBQVosVUFBUyxJQUFBLENBQUcsQ0FHaEIsRUFWQSxJQUFBRixFQUFBZCxFQUFBLE9BQUEsRUFDQTRCLEVBQUE1QixFQUFBLGNBQUEifQ==