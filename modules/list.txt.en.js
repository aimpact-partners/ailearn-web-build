System.register(["@beyond-js/kernel@0.1.9/bundle"],function(o,e){"use strict";var t,i,n;return o("txt",void 0),{setters:[function(e){t=e}],execute:function(){n=t.Bundle,(i=new n({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/modules/list",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(n=new Map).set("./txt",{hash:3319200327,creator:function(e,t){t.txt={actions:{assign:"Assign",use:"Use",continue:"Continue",create:"Create",delete:"Delete item"},assign:{title:"Classrooms list",noAssigned:"No assigned classrooms",module:"Module",item:{description:"The item does not have description"},messages:{copied:"Link copied to clipboard",assigned:"Classroom assigned"},actions:{dashboard:"Dashboard",copy:"Copy link",test:"Test",navigate:"Navigate",assign:{button:"Assign",label:"The module has not been assigned to this Classroom"}}},breadcrumb:{modules:"Modules",management:"Management",assignment:"Assignment",chat:"Chat"},errors:{failed:"Operation failed. Please try again.",ERROR_GETTING_URL:"Error getting url"},title:"My Learning Modules",tabs:{drafts:"Drafts",published:"Published",community:"Library"},loading:{title:"Loading Data",description:"We are loading your data. Please wait for a moment."},item:{description:"The module does not have a description yet"},empty:{general:{title:"Create Your First Module",description:"Modernize your teaching approach by bringing your first module to life. Unleash your creativity, shape your content, and enjoy the experience of learning! 🚀"},drafts:{title:"No Drafts Yet",description:"You don't have any drafts at the moment. Start creating and perfecting your content before publishing. 📚"},published:{title:"No Published Modules",description:"There are no published modules available. Work on each module and publish them to update this list of publications. 🎓"},community:{title:"No Modules in the Community",description:"There are no modules available in the community. Share your modules with the community and discover modules from other authors! 🌍"}}}}}),i.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],i.exports.process=function({require:e,prop:t,value:i}){!e&&"txt"!==t||o("txt",e?e("./txt").txt:i)},o("__beyond_pkg",i),o("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(n)}}});