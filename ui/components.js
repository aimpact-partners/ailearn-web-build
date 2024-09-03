System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","pragmate-ui@1.0.0-beta.2/alert","react@18.2.0","@aimpact/ailearn-app@0.1.6-dev.17/components/ui","pragmate-ui@1.0.0-beta.2/components","pragmate-ui@1.0.0-beta.2/form","pragmate-ui@1.0.0-beta.2/icons","pragmate-ui@1.0.0-beta.2/image","pragmate-ui@1.0.0-beta.2/list"],function(l,e){var t,a,n,r,c,s,o,u,i,m,d,f,p,E;return l({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){r=e},function(e){c=e},function(e){s=e},function(e){o=e},function(e){u=e},function(e){i=e},function(e){m=e},function(e){d=e},function(e){f=e}],execute:function(){E=a.Bundle,(p=new E({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.17/ui/components"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",r],["pragmate-ui/alert",c],["react",s],["@aimpact/ailearn-app/components/ui",o],["pragmate-ui/components",u],["pragmate-ui/form",i],["pragmate-ui/icons",m],["pragmate-ui/image",d],["pragmate-ui/list",f]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-ui-components",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.17/ui/components",is:"page",route:"/ui/components",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.17/ui/components"),(E=new Map).set("./controller",{hash:1927493790,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),l=e("./store"),n=e("./views");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new l.StoreManager,this.#store}get Widget(){return n.View}show(){}hide(){}}t.Controller=r}}),E.set("./data/template",{hash:3019401528,creator:function(e,t){}}),E.set("./store",{hash:1793251939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0,t.StoreManager=class{}}}),E.set("./views/components/alerts",{hash:575573814,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Alerts=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",null," Texts states"),l.default.createElement("span",{className:"text-success"}," Success alert"),l.default.createElement("span",{className:"text-error"}," error alert"),l.default.createElement("span",{className:"text-info"}," info alert"),l.default.createElement("span",{className:"text-warning"}," warning alert"),l.default.createElement("h3",{className:"mb-10 h2"},"Alerts"),l.default.createElement("section",{className:"elements__container"},l.default.createElement("div",{className:"item__container"},l.default.createElement(a.Alert,{type:"success"}," Success alert"),l.default.createElement(a.Alert,{type:"error"}," error alert"),l.default.createElement(a.Alert,{type:"info"}," info alert"),l.default.createElement(a.Alert,{type:"warning"}," warning alert")),l.default.createElement("div",{className:"item__container"},l.default.createElement(a.Alert,{type:"error",message:"Esto es un error"}),l.default.createElement(a.Alert,{type:"success",message:"Esto es un success"}),l.default.createElement(a.Alert,{type:"info",message:"Esto es un info"}),l.default.createElement(a.Alert,{type:"warning",message:"Esto es un error"}),l.default.createElement(a.Alert,{type:"error"},l.default.createElement("h3",null,"Alert title"),l.default.createElement("p",null,"Content in de alert")),l.default.createElement(a.Alert,{type:"success"},l.default.createElement("h3",null,"Alert title"),l.default.createElement("p",null,"Content in de alert")),l.default.createElement(a.Alert,{type:"error"},l.default.createElement("h3",null,"Alert title"),l.default.createElement("p",null,"Content in de alert")),l.default.createElement(a.Alert,{type:"info"},l.default.createElement("h3",null,"Alert title"),l.default.createElement("p",null,"Content in de alert")))))};var a=e("pragmate-ui/alert"),l=e("react")}}),E.set("./views/components/backgrounds",{hash:1161471450,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Backgrounds=function(){return a.default.createElement("div",null,["primary-container","secondary-container","primary-dark-container","secondary-dark-container","primary-light-container","secondary-light-container","background","surface","surface-variant"].map(e=>a.default.createElement("div",{key:e},a.default.createElement("h3",null,e),a.default.createElement("div",{className:"bg-box bg-"+e}))))};var a=e("react")}}),E.set("./views/components/banners",{hash:3095340695,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Banners=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Banners"),a.default.createElement("div",{className:"item__container"},a.default.createElement("h4",null,"Default"),a.default.createElement(a.default.Fragment,null,a.default.createElement(l.HeaderCard,{title:"¡Hello <Student Name>!",alt:"card-robot",image:"/assets/ai-robot.webp"},a.default.createElement("p",{className:"p2"},"Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))),a.default.createElement("h4",null,"Default Light"),a.default.createElement(a.default.Fragment,null,a.default.createElement(l.HeaderCard,{option:"light",title:"¡Hello <Student Name>!",alt:"card-robot",image:"/assets/ai-robot.webp"},a.default.createElement("p",{className:"p2"},"Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))),a.default.createElement("h4",null,"Default with Numbers/List"),a.default.createElement(a.default.Fragment,null,a.default.createElement(l.HeaderCard,{optional:"light",list:[{url:"",status:"waiting"},{url:"",status:"current"},{url:"",status:"done"}],title:"Let's keep evolving"},a.default.createElement("p",{className:"p1 mb-20"},"Here you have a space to list multiple pages and follow up with a nice dynamic header.",a.default.createElement("br",null),a.default.createElement("br",null),"Showing the different possibilities that have redirections through links and multiple colours such as the following:"," "),a.default.createElement("p",{className:"p2 mb-10"},"current: var(--on-primary)"),a.default.createElement("p",{className:"p2 mb-10"},"waiting: var(--tertiary-20)"),a.default.createElement("p",{className:"p2 mb-10"},"success: var(--success-70)")))))};var a=e("react"),l=e("@aimpact/ailearn-app/components/ui")}}),E.set("./views/components/buttons copy",{hash:504127515,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Buttons=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"button-row"},a.default.createElement(l.Button,{variant:"primary"},"Primary button"),a.default.createElement(l.Button,{variant:"secondary"},"Primary button"),a.default.createElement(l.Button,{variant:"primary",icon:"user"},"Primary button"),a.default.createElement(l.Button,{variant:"secondary",icon:"user"},"Primary button")),a.default.createElement("div",{className:"button-row"},a.default.createElement(l.Button,{bordered:!0,variant:"primary"},"Primary button"),a.default.createElement(l.Button,{bordered:!0,variant:"secondary"},"Primary button"),a.default.createElement(l.Button,{bordered:!0,variant:"primary",icon:"user"},"Primary button"),a.default.createElement(l.Button,{bordered:!0,variant:"secondary",icon:"user"},"Primary button")))};var a=e("react"),l=e("pragmate-ui/components")}}),E.set("./views/components/buttons",{hash:1649869800,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Buttons=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Buttons"),a.default.createElement("section",{className:"elements__container"},a.default.createElement("div",{className:"item__container"},a.default.createElement("span",{className:"h3"},"Normal state"),a.default.createElement(l.Button,null,"Primary button"),a.default.createElement(l.Button,{variant:"secondary"},"Secondary button"),a.default.createElement(l.Button,{variant:"tertiary"},"Tertiary button"),a.default.createElement("span",{className:"h3"},"Disabled Buttons"),a.default.createElement(l.Button,{disabled:!0},"Primary disabled button"),a.default.createElement(l.Button,{variant:"secondary",disabled:!0},"Secondary disable button"),a.default.createElement(l.Button,{variant:"tertiary",disabled:!0},"Tertiary disable button"),a.default.createElement("span",{className:"h3"},"Bordered"),a.default.createElement(l.Button,{variant:"primary",bordered:!0},"primary button"),a.default.createElement(l.Button,{variant:"secondary",bordered:!0},"secondary button"),a.default.createElement(l.Button,{variant:"tertiary",bordered:!0},"tertiary button"),a.default.createElement("span",{className:"h3"},"ButtonGroup"),a.default.createElement(l.ButtonGroup,null,a.default.createElement(l.Button,null,"btn 1"),a.default.createElement(l.Button,null,"btn 2"),a.default.createElement(l.Button,null,"btn 3")))))};var a=e("react"),l=e("pragmate-ui/components")}}),E.set("./views/components/cards",{hash:2632731124,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Cards=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Cards"),a.default.createElement("span",{className:"p1"},"New Cards"),a.default.createElement("div",{className:"list-example__container"},a.default.createElement(l.Card,null,a.default.createElement(l.CardImage,{src:n.activity.data.picture,alt:n.activity.data.title},a.default.createElement("div",{className:"card__top_text secondary"},"Classroom")),a.default.createElement(l.CardContent,{option:"column",className:"theme-0"},a.default.createElement("section",{className:"card-footer__container"},a.default.createElement("div",{className:"card__text-content"},a.default.createElement("h4",{className:"card__title"},n.activity.data.title),a.default.createElement("span",{className:"card__subtitle p2"},n.activity.data.description))),a.default.createElement("div",{className:"card__footer-actions"},a.default.createElement("hr",{className:"card__divider"}),a.default.createElement("div",{className:"card__details"},a.default.createElement("span",{className:"cart__text-non-hover p2"},n.activity.data.activities?.count," Actividad"),a.default.createElement("span",{className:"card__text-hover p2"},"Acceder")))))),a.default.createElement("span",{className:"p1"},"Old card"),a.default.createElement("div",{className:"item__container"},a.default.createElement("div",{className:"list__item"},a.default.createElement("section",{className:"list__item__header curriculum-objective"},a.default.createElement("header",null,a.default.createElement("a",{href:"/classworks/management/5c47e4e4-61a6-4ee7-83e1-6b206f89a990"},a.default.createElement("h4",null,a.default.createElement("svg",{viewBox:"0 0 24 24",className:"pragmate-icon"},a.default.createElement("g",null,a.default.createElement("g",null,a.default.createElement("path",{id:"Trazado_229","data-name":"Trazado 229",d:"M0,0H24V24H0Z",transform:"translate(0)",fill:"none"}),a.default.createElement("path",{id:"Trazado_230","data-name":"Trazado 230",d:"M13,3,1,9.545l4.364,2.378v6.545L13,22.636l7.636-4.167V11.924l2.182-1.189v7.538H25V9.545Zm7.44,6.545L13,13.6,5.56,9.545,13,5.487Zm-1.985,7.625L13,20.149,7.545,17.171V13.113L13,16.091l5.455-2.978Z",transform:"translate(-1 -0.818)"})))),"Card title"))),a.default.createElement("section",{className:"class-actions"},a.default.createElement("button",{type:"button",className:"pragmate-icon-button btn-default ripple"},a.default.createElement("svg",{viewBox:"0 0 24 24",className:"pragmate-icon"},a.default.createElement("g",null,a.default.createElement("g",null," ",a.default.createElement("path",{id:"Trazado_175","data-name":"Trazado 175",d:"M0,0H24V24H0Z",fill:"none"}),a.default.createElement("path",{id:"Trazado_176","data-name":"Trazado 176",d:"M51.375,38.33a2.912,2.912,0,0,0-1.96.77l-7.13-4.15a2.767,2.767,0,0,0,0-1.4l7.05-4.11a2.993,2.993,0,1,0-.96-2.19,3.274,3.274,0,0,0,.09.7l-7.05,4.11a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65,2.92,2.92,0,1,0,2.92-2.92Zm0-12.08a1,1,0,1,1-1,1A1,1,0,0,1,51.375,26.25Zm-12,9a1,1,0,1,1,1-1A1,1,0,0,1,39.375,35.25Zm12,7.02a1,1,0,1,1,1-1A1,1,0,0,1,51.375,42.27Z",transform:"translate(-33.375 -22.25)"}))))),a.default.createElement("button",{type:"button",className:"pragmate-icon-button btn-default ripple"},a.default.createElement("svg",{viewBox:"0 0 24 24",className:"pragmate-icon"},a.default.createElement("g",null,a.default.createElement("g",{id:"delete"},a.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))))),a.default.createElement("article",{className:"collapsible__container  topics "},a.default.createElement("header",{className:"collapsible__header  topics-header "},a.default.createElement("div",{className:"collapsible__header-content"},a.default.createElement("h5",null,"Any content")))))))};var a=e("react"),l=e("@aimpact/ailearn-app/components/ui"),n=e("../../data/template")}}),E.set("./views/components/empty",{hash:2006490327,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Empty=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"EmptyList"),a.default.createElement("section",{className:"elements__container"},a.default.createElement("div",{className:"item__container"},a.default.createElement(l.EmptyCard,{text:"This is a text field to explain what data is missing.",icon:"generate"}))))};var a=e("react"),l=e("@aimpact/ailearn-app/components/ui")}}),E.set("./views/components/forms",{hash:3020221867,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Forms=function(){let[a,l]=o.default.useState({defaultName:"",examplePassword:"",exampleEmail:"",hoverText:"",defaultText:""}),e=({currentTarget:e})=>{var t={...a};t[e.name]=e.value,l(t)},{defaultName:t,examplePassword:n,exampleEmail:r,hoverText:c,defaultText:s}=a;return o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",{className:"mb-10 h2"},"Forms"),o.default.createElement("section",{className:"elements__container"},o.default.createElement("div",{className:"item__container"},o.default.createElement(u.Input,{label:"Full Name - Default State",type:"text",name:"defaultName",value:t,onChange:e,required:!0}),o.default.createElement(u.Input,{label:"Full Password - Default State",type:"password",name:"examplePassword",value:n,onChange:e,required:!0}),o.default.createElement(u.Input,{label:"Full Email - Default State",type:"text",name:"hoverText",value:c,onChange:e,placeholder:"This is a placeholder example. Complete State"}),o.default.createElement(u.Input,{label:"Full Email - Default State",type:"text",name:"defaultText",value:s,onChange:e,placeholder:"Input user name and surname. Complete State"}),o.default.createElement(u.Input,{placeholder:"Default Disabled Input State",type:"email",name:"exampleEmail",disabled:!0,value:r,onChange:e,required:!0}))))};var o=e("react"),u=e("pragmate-ui/form")}}),E.set("./views/components/icons",{hash:2311052754,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Icons=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Icons"),a.default.createElement("section",{className:"elements__container"},a.default.createElement("div",{className:"item__container optional centered"},a.default.createElement("div",{className:"sub-item__container optional"},a.default.createElement("span",{className:"p2 mb-10"},"Default"),a.default.createElement(l.Icon,{className:"md",icon:"menu"}),a.default.createElement(l.Icon,{className:"md",icon:"profile"}),a.default.createElement(l.Icon,{className:"md",icon:"refresh"}),a.default.createElement(l.Icon,{className:"md",icon:"drag"}),a.default.createElement(l.Icon,{className:"md",icon:"list-menu"}),a.default.createElement(l.Icon,{className:"md",icon:"mic"}),a.default.createElement(l.Icon,{className:"md",icon:"delete"}),a.default.createElement(l.Icon,{className:"md",icon:"copy"}),a.default.createElement(l.Icon,{className:"md",icon:"chat"})),a.default.createElement("div",{className:"sub-item__container optional"},a.default.createElement("span",{className:"p2 mb-10"},"Hover"),a.default.createElement(l.Icon,{className:"hover md",icon:"menu"}),a.default.createElement(l.Icon,{className:"hover md",icon:"profile"}),a.default.createElement(l.Icon,{className:"hover md",icon:"refresh"}),a.default.createElement(l.Icon,{className:"hover md",icon:"drag"}),a.default.createElement(l.Icon,{className:"hover md",icon:"list-menu"}),a.default.createElement(l.Icon,{className:"hover md",icon:"mic"}),a.default.createElement(l.Icon,{className:"hover md",icon:"delete"}),a.default.createElement(l.Icon,{className:"hover md",icon:"copy"}),a.default.createElement(l.Icon,{className:"hover md",icon:"chat"})))))};var a=e("react"),l=e("pragmate-ui/icons")}}),E.set("./views/components/illustrations",{hash:2599249148,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Illustrations=function(){return a.default.createElement("section",{className:"elements__container"},a.default.createElement("h3",{className:"mb-10 h2"},"Illustrations"),a.default.createElement("div",{className:"item__container"},a.default.createElement("div",{className:"images-list__container"},a.default.createElement(l.Image,{src:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/fujhhbk2li36uxgyaipn",alt:"Sad Explorer"}),a.default.createElement(l.Image,{src:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/lwkztda1sq08ushwipmi",alt:"Happy Explorer"}),a.default.createElement(l.Image,{src:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_270/v1/AImpact/f7knfihku0pyr8eo2yqh",alt:"Neutral Explorer"}),a.default.createElement(l.Image,{src:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat",alt:"Neutral Explorer"}))))};var a=e("react"),l=e("pragmate-ui/image")}}),E.set("./views/components/lists",{hash:110724290,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Lists=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Lists"),a.default.createElement("section",null,a.default.createElement("div",{className:"item__container optional centered"},a.default.createElement(l.List,{className:"list__container",items:n,control:r}))))};var a=e("react"),l=e("pragmate-ui/list");let n=[{text:"3"},{text:"2"},{text:"1"},{text:"..."},{text:""}];function r({data:e}){return a.default.createElement("span",{className:"p2"},e.text)}}}),E.set("./views/components/typography",{hash:2386178516,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Typography=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"mb-10 h2"},"Fonts"),a.default.createElement("section",{className:"elements__container"},a.default.createElement("div",{className:"item__container"},a.default.createElement("h1",null,"h1: Title with h1"),a.default.createElement("h2",null,"h2: Title with h2"),a.default.createElement("h3",null,"h3: Title with h3"),a.default.createElement("h4",null,"h4: Title with h4"),a.default.createElement("h5",null,"h5: Title with h5"))),a.default.createElement("h3",{className:"mb-10 h2"},"Paragraph"),a.default.createElement("section",{className:"elements__container"},a.default.createElement("div",{className:"item__container"},a.default.createElement(l.SubDivider,{title:"Example of a subtitle divider"}),a.default.createElement("p",{className:"p1"},"P1. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."),a.default.createElement("p",{className:"p2"},"P2. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."),a.default.createElement("p",{className:"p1 disabled-text"},"P1 Disable text"),a.default.createElement("p",{className:"p2 disabled-text"},"P2 Disable text"))))};var a=e("react"),l=e("@aimpact/ailearn-app/components/ui")}}),E.set("./views/index",{hash:381670367,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){return a.default.createElement(l.PageContainer,null,a.default.createElement(n.Alerts,null))};var a=e("react"),l=e("@aimpact/ailearn-app/components/ui"),n=e("./components/alerts")}}),E.set("./views/old_",{hash:3234661470,creator:function(e,t){}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],p.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||l("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||l("View",e?e("./views/index").View:a)},l("__beyond_pkg",p),l("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(E)}}});