System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.2/list","@aimpact/ailearn-app@0.1.6-dev.16/components/icons","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","pragmate-ui@1.0.0-beta.2/components","dayjs@1.11.10","pragmate-ui@1.0.0-beta.2/image"],function(n,e){var t,a,r,i,o,c,s,l,m,d,u;return n({Container:void 0,ModuleCardFooter:void 0,ModuleCard:void 0,UserData:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){c=e},function(e){s=e},function(e){l=e},function(e){m=e}],execute:function(){u=t.Bundle,(d=new u({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/components/module-card"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",r],["pragmate-ui/list",i],["@aimpact/ailearn-app/components/icons",o],["@aimpact/ailearn-app/components/ui",c],["pragmate-ui/components",s],["dayjs",l],["pragmate-ui/image",m]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/components/module-card"),(u=new Map).set("./activities",{hash:492192634,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivities=function({types:e}){return e?a.default.createElement(n.List,{className:"activity-types__list",items:e,control:({item:e})=>a.default.createElement("section",{className:"activity-type__icon activity--"+e},a.default.createElement(r.AppIcon,{icon:e}))}):null};var a=e("react"),n=e("pragmate-ui/list"),r=e("@aimpact/ailearn-app/components/icons")}}),u.set("./container",{hash:2993138320,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Container=function({item:e,texts:t,children:a}){var n=e.title??e.objective,t=e.description??t.item.description;return r.createElement("article",{className:"entity__item"},r.createElement(i.EntityImage,{src:e.picture,entity:"module",alt:n}),r.createElement("section",{className:"card__header-container"},r.createElement(o.ModuleActivities,{types:e?.activities?.types}),e.audience),r.createElement("section",{className:"entity__item-content"},r.createElement("h4",null,n),r.createElement("span",null,t)),a)};var r=e("react"),i=e("@aimpact/ailearn-app/components/ui"),o=e("./activities")}}),u.set("./footer",{hash:3252565470,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleCardFooter=function({item:e,className:t,children:a}={showUser:!0}){var n=e.owner??e.creator,e=(0,i.default)(e.timeCreated).format("MM/DD/YYYY"),t="entity__footer"+(t?" "+t:"");return r.createElement("footer",{className:t},r.createElement(o.UserData,{data:n,date:e}),r.createElement("div",{className:"actions-container"},a))};var r=e("react"),i=e("dayjs"),o=e("./user-data")}}),u.set("./index",{hash:4091591037,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleCard=function({item:e,texts:t,href:a,children:n}){return e.title,a?r.createElement(i.Link,{href:a},r.createElement(o.Container,{item:e,texts:t},n)):r.createElement(o.Container,{item:e,texts:t},n)};var r=e("react"),i=e("pragmate-ui/components"),o=e("./container")}}),u.set("./user-data",{hash:3207490455,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserData=function({label:e,date:t,data:a}){var n;return a?({photoUrl:a,name:n}=a,r.createElement("div",{className:"user-data__section"},e&&r.createElement("h6",{className:"user-data__label"},e),r.createElement("section",{className:"user-data__detail"},r.createElement(i.Image,{className:"user-data__img",src:a}),r.createElement("div",null,r.createElement("span",{className:"user-data__name"},n),r.createElement("span",{className:"user-data__date"},t))))):null};var r=e("react"),i=e("pragmate-ui/image")}}),d.exports.descriptor=[{im:"./container",from:"Container",name:"Container"},{im:"./footer",from:"ModuleCardFooter",name:"ModuleCardFooter"},{im:"./index",from:"ModuleCard",name:"ModuleCard"},{im:"./user-data",from:"UserData",name:"UserData"}],d.exports.process=function({require:e,prop:t,value:a}){!e&&"Container"!==t||n("Container",e?e("./container").Container:a),!e&&"ModuleCardFooter"!==t||n("ModuleCardFooter",e?e("./footer").ModuleCardFooter:a),!e&&"ModuleCard"!==t||n("ModuleCard",e?e("./index").ModuleCard:a),!e&&"UserData"!==t||n("UserData",e?e("./user-data").UserData:a)},n("__beyond_pkg",d),n("hmr",new function(){this.on=(e,t)=>d.hmr.on(e,t),this.off=(e,t)=>d.hmr.off(e,t)}),d.initialise(u)}}});