System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0"],function(o,e){"use strict";var r,t,n,a,s;return o("AudioPlayer",void 0),{setters:[function(e){r=e},function(e){t=e},function(e){n=e}],execute:function(){s=r.Bundle,(a=new s({module:{vspecifier:"@bgroup/media-manager@1.0.0/player"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",t],["react",n]]),brequire("@beyond-js/kernel/styles").styles.register("@bgroup/media-manager@1.0.0/player"),(s=new Map).set("./control",{hash:3146932,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.AudioPlayer=function({src:t}){(new Audio).canPlayType(t.type);const[e,o]=s.useState({uri:void 0,type:void 0}),n=s.useRef(null),{uri:r,type:a}=(s.useEffect(()=>{var e=new FileReader;e.onload=e=>{var e=e.target.result,r=t.type.includes(";")?t.type.substr(0,t.type.indexOf(";")):t.type;o({uri:e,type:r}),setTimeout(()=>{(async()=>{var e=n.current;try{e.load(),e.play()}catch(e){}})()},1e3)},e.readAsDataURL(t)},[]),e);return s.createElement("div",{className:"audio-player"},s.createElement("audio",{controls:!0,preload:"metadata",ref:n},s.createElement("source",{src:r,type:a}),"Your browser does not support the audio element."))};var s=e("react")}}),a.exports.descriptor=[{im:"./control",from:"AudioPlayer",name:"AudioPlayer"}],a.exports.process=function({require:e,prop:r,value:t}){!e&&"AudioPlayer"!==r||o("AudioPlayer",e?e("./control").AudioPlayer:t)},o("__beyond_pkg",a),o("hmr",new function(){this.on=(e,r)=>a.hmr.on(e,r),this.off=(e,r)=>a.hmr.off(e,r)}),a.initialise(s)}}});