System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.33.dev-01/config"],function(r,e){"use strict";var t,n,i,a,o,s,c,d,l,u;return r({Controller:void 0,Widget:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){i=e},function(e){a=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){d=e}],execute:function(){u=n.Bundle,(l=new u({module:{vspecifier:"@aimpact/auth@0.0.1/auth/login/presentation",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/base",i],["react",a],["pragmate-ui/image",o],["pragmate-ui/components",s],["@beyond-js/react-18-widgets/hooks",c],["@aimpact/auth/config",d]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"aimpact-login-presentation",attrs:["dynamic-children"],vspecifier:"@aimpact/auth@0.0.1/auth/login/presentation.widget"}]),(u=new Map).set("./controller",{hash:1036550463,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/base"),r=e("./store"),i=e("./views");class a extends n.ReactWidgetController{#store;createStore(){var e=JSON.parse(this.attributes.get("dynamic-children"));return this.#store=new r.StoreManager(e),this.#store}get Widget(){return i.Widget}show(){}hide(){}}t.Controller=a}}),u.set("./store",{hash:618884279,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;t.StoreManager=class{#dynamicChildren;get dynamicChildren(){return this.#dynamicChildren}constructor(e){this.#dynamicChildren=e}}}}),u.set("./views/index",{hash:3983980955,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Widget=function({store:e}){var[t,n]=(0,s.useTexts)(o.module.specifier);return t?r.default.createElement("div",{className:"presentation-container "+(e.dynamicChildren&&" visible")},r.default.createElement("div",{className:"presentation-header__container"},r.default.createElement("div",{className:"logo__container"},r.default.createElement(i.Image,{src:c.default.params.APP_LOGO}))),r.default.createElement("div",{className:"presentation-content__container "+(e.dynamicChildren&&" visible")},r.default.createElement("h2",{className:"content__title h1"},n.title),r.default.createElement("p",{className:"content__description"},n.description))):r.default.createElement(a.Spinner,{active:!0,type:"primary"})};var r=e("react"),i=e("pragmate-ui/image"),a=e("pragmate-ui/components"),o=e("beyond_context"),s=e("@beyond-js/react-18-widgets/hooks"),c=e("@aimpact/auth/config")}}),l.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"Widget",name:"Widget"}],l.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:n),!e&&"Widget"!==t||r("Widget",e?e("./views/index").Widget:n)},r("__beyond_pkg",l),r("hmr",new function(){this.on=(e,t)=>l.hmr.on(e,t),this.off=(e,t)=>l.hmr.off(e,t)}),l.initialise(u)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiI3N0b3JlIiwiY3JlYXRlU3RvcmUiLCJkeW5hbWljQ2hpbGRyZW4iLCJKU09OIiwicGFyc2UiLCJ0aGlzIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsInNob3ciLCJoaWRlIiwiZXhwb3J0cyIsIiNkeW5hbWljQ2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsInN0b3JlIiwidGV4dFJlYWR5IiwidGV4dHMiLCJfaG9va3MiLCJ1c2VUZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIm1vZHVsZSIsInNwZWNpZmllciIsIl9yZWFjdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiX2ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJfY29uZmlnIiwicGFyYW1zIiwiQVBQX0xPR08iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX2NvbXBvbmVudHMiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSJdLCJtYXBwaW5ncyI6Im10Q0FBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsUUFHTUcsVUFBbUJKLEVBQUFLLHNCQUN4QkMsT0FDQUMsY0FDQyxJQUFNQyxFQUFrQkMsS0FBS0MsTUFBTUMsS0FBS0MsV0FBV0MsSUFBSSxrQkFBa0IsQ0FBQyxFQUcxRSxPQURBRixLQUFLTCxPQUFTLElBQUlKLEVBQUFZLGFBQWFOLENBQWUsRUFDdkNHLEtBQUtMLE1BQ2IsQ0FDQVMsYUFDQyxPQUFPWixFQUFBWSxNQUNSLENBS0FDLFFBS0FDLFEsQ0FDQUMsRUFBQWQsV0FBQUEsQyxpSUNoQkFjLEVBQUFKLG1CQVJBSyxpQkFDQVgsc0JBQ0MsT0FBT0csS0FBS1EsZ0JBQ2IsQ0FFQUMsWUFBWVosR0FDWEcsS0FBS1EsaUJBQW1CWCxDQUN6QixDLDRIQ0RnQixTQUNELENBQUVhLE1BQUFBLENBQUssR0FDdEIsR0FBTSxDQUFDQyxFQUFXQyxJQUFTLEVBQUFDLEVBQUFDLFVBQVNDLEVBQUFDLE9BQU9DLFNBQVMsRUFFcEQsT0FBS04sRUFHSk8sRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVcsMkJBQTBCWCxFQUFNYixpQkFBbUIsV0FBWSxFQUM5RXFCLEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFLQyxVQUFVLGdDQUFnQyxFQUM5Q0gsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsaUJBQWlCLEVBQy9CSCxFQUFBQyxRQUFBQyxjQUFDRSxFQUFBQyxNQUFLLENBQUNDLElBQUtDLEVBQUFOLFFBQU9PLE9BQU9DLFFBQVEsQ0FBQSxDQUFJLENBQ2pDLEVBRVBULEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFLQyxVQUFXLG9DQUFtQ1gsRUFBTWIsaUJBQW1CLFdBQVksRUFDdkZxQixFQUFBQyxRQUFBQyxjQUFBLEtBQUEsQ0FBSUMsVUFBVSxtQkFBbUIsRUFBRVQsRUFBTWdCLEtBQUssRUFDOUNWLEVBQUFDLFFBQUFDLGNBQUEsSUFBQSxDQUFHQyxVQUFVLHNCQUFzQixFQUFFVCxFQUFNaUIsV0FBVyxDQUFLLENBQ3RELEVBWmVYLEVBQUFDLFFBQUFDLGNBQUNVLEVBQUFDLFFBQU8sQ0FBQ0MsT0FBTSxDQUFBLEVBQUNDLEtBQUssU0FBUyxDQUFBLENBZXRELEVBM0JBLElBQUFmLEVBQUE1QixFQUFBLE9BQUEsRUFDQWdDLEVBQUFoQyxFQUFBLG1CQUFBLEVBQ0F3QyxFQUFBeEMsRUFBQSx3QkFBQSxFQUNBeUIsRUFBQXpCLEVBQUEsZ0JBQUEsRUFDQXVCLEVBQUF2QixFQUFBLG1DQUFBLEVBRUFtQyxFQUFBbkMsRUFBQSxzQkFBQSJ9