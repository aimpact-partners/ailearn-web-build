System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","pragmate-ui@1.0.0-beta.1/base","react@18.2.0","pragmate-ui@1.0.0-beta.1/icons"],function(a,e){var t,n,i,r,c,l,s;return a("VerticalLine",void 0),{setters:[function(e){t=e},function(e){n=e},function(e){i=e},function(e){r=e},function(e){c=e}],execute:function(){s=t.Bundle,(l=new s({module:{vspecifier:"pragmate-ui@1.0.0-beta.1/vertical-line"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["pragmate-ui/base",i],["react",r],["pragmate-ui/icons",c]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@1.0.0-beta.1/vertical-line"),(s=new Map).set("./definitions",{hash:2671738761,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),s.set("./index",{hash:250329619,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.VerticalLine=function({events:e,variant:t="primary"}){let n=t?"timeline-event__content--icon "+t:"timeline-event__content--icon",a=e.map((e,t)=>i.default.createElement("div",{key:t,className:"timeline-event"},i.default.createElement("div",{className:n},i.default.createElement(r.Icon,{icon:e.icon})),i.default.createElement("div",{className:"timeline-event__content--block"},i.default.createElement("header",{className:"item-header"},i.default.createElement("h3",{className:"item-header__h3"},e.title),i.default.createElement("span",{className:"item-header__span"},e.date)),i.default.createElement("p",{className:"block-description"},e.description))));return i.default.createElement("div",{className:"pui__vertical-line"},i.default.createElement("div",{className:"line"}),i.default.createElement("div",{className:"container-timeline"},a))};var i=e("react"),r=e("pragmate-ui/icons")}}),l.exports.descriptor=[{im:"./index",from:"VerticalLine",name:"VerticalLine"}],l.exports.process=function({require:e,prop:t,value:n}){!e&&"VerticalLine"!==t||a("VerticalLine",e?e("./index").VerticalLine:n)},a("__beyond_pkg",l),a("hmr",new function(){this.on=(e,t)=>l.hmr.on(e,t),this.off=(e,t)=>l.hmr.off(e,t)}),l.initialise(s)}}});