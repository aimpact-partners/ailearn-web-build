System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.0.43/dashboard-layout.widget","react@18.2.0","@aimpact/ailearn-app@0.0.43/components/navbar-header.code","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/icons"],function(r,e){"use strict";var a,t,n,i,o,s,d,l,c,u;return r("Controller",void 0),{setters:[function(e){a=e},function(e){t=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){d=e},function(e){l=e}],execute:function(){u=t.Bundle,(c=new u({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/assignments/dashboard/participant"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",a],["@beyond-js/react-18-widgets/page",n],["@aimpact/ailearn-app/dashboard-layout.widget",i],["react",o],["@aimpact/ailearn-app/components/navbar-header.code",s],["pragmate-ui/image",d],["pragmate-ui/icons",l]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"old-assignment-dashboard-participant-page",vspecifier:"@aimpact/ailearn-app@0.0.43/assignments/dashboard/participant",is:"page",route:"/old-assignments/${assignmentId}/dashboard/participant/${participantId}",layout:"dashboard-layout"}]),(u=new Map).set("./controller",{hash:310124453,creator:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.Controller=void 0;var t=e("@beyond-js/react-18-widgets/page"),r=e("./views"),n=e("@aimpact/ailearn-app/dashboard-layout.widget");class i extends t.PageReactWidgetController{get Widget(){return r.View}show(){n.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get("assignmentId")}/dashboard/classroom`)}hide(){n.LayoutBroker.removeOverlay()}}a.Controller=i}}),u.set("./views/header",{hash:1847805944,creator:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.Header=function(){var[e,,]=t.default.useState(JSON.parse(localStorage.getItem("student.details"))),a=()=>"";return t.default.createElement(r.NavbarHeader,null,t.default.createElement("div",{className:"user-section__modal-header"},t.default.createElement(n.Image,{src:e?.photoUrl?e.photoUrl:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default",alt:e.name+"-avatar-modal",className:"avatar__image"}),t.default.createElement("div",{className:"user-section__text-header-container"},t.default.createElement("h3",{className:"h3"},e.name))),t.default.createElement("div",null,t.default.createElement(i.IconButton,{icon:"refresh",onClick:a})))};var t=e("react"),r=e("@aimpact/ailearn-app/components/navbar-header.code"),n=e("pragmate-ui/image"),i=e("pragmate-ui/icons")}}),u.set("./views/index",{hash:2187413372,creator:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.View=function({uri:e}){var a=e.vars.get("assignmentId"),e=e.vars.get("participantId");return t.default.createElement(t.default.Fragment,null,t.default.createElement("assignment-dashboard-participant",{id:a,"participant-id":e}))};var t=e("react")}}),c.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],c.exports.process=function({require:e,prop:a,value:t}){!e&&"Controller"!==a||r("Controller",e?e("./controller").Controller:t)},r("__beyond_pkg",c),r("hmr",new function(){this.on=(e,a)=>c.hmr.on(e,a),this.off=(e,a)=>c.hmr.off(e,a)}),c.initialise(u)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl92aWV3cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwic2V0QmFja0xpbmsiLCJ0aGlzIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsInN0dWRlbnREZXRhaWxzIiwiX3JlYWN0IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVmcmVzaCIsImNyZWF0ZUVsZW1lbnQiLCJfbmF2YmFySGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiY2xhc3NOYW1lIiwiX2ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsImFsdCIsIm5hbWUiLCJfaWNvbnMiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJhc3NpZ25tZW50SWQiLCJwYXJ0aWNpcGFudElkIiwiRnJhZ21lbnQiLCJpZCIsInBhcnRpY2lwYW50LWlkIl0sIm1hcHBpbmdzIjoicTNDQUFBLElBQUFBLEVBQUFDLEVBQUEsa0NBQUEsRUFFQUMsRUFBQUQsRUFBQSxTQUFBLEVBQ0FFLEVBQUFGLEVBQUEsOENBQUEsUUFFTUcsVUFBbUJKLEVBQUFLLDBCQUN4QkMsYUFDQyxPQUFPSixFQUFBSyxJQUNSLENBRUFDLE9BQ0NMLEVBQUFNLGFBQWFDLDRCQUE0QkMsS0FBS0MsSUFBSUMsS0FBS0MsSUFBSSxjQUFjLHVCQUF1QixDQUVqRyxDQUVBQyxPQUNDWixFQUFBTSxhQUFhTyxjQUFhLENBQzNCLEMsQ0FDQUMsRUFBQWIsV0FBQUEsQyw0SENkSyxXQUNMLEdBQU0sQ0FBQ2MsRUFBRCxHQUFzQ0MsRUFBQUMsUUFBTUMsU0FDakRDLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsaUJBQWlCLENBQUMsQ0FBQyxFQUU5Q0MsRUFBWUEsSUFBTSxHQUN4QixPQUNDUCxFQUFBQyxRQUFBTyxjQUFDQyxFQUFBQyxhQUFZLEtBQ1pWLEVBQUFDLFFBQUFPLGNBQUEsTUFBQSxDQUFLRyxVQUFVLDRCQUE0QixFQUMxQ1gsRUFBQUMsUUFBQU8sY0FBQ0ksRUFBQUMsTUFBSyxDQUNMQyxJQUNDZixHQUFnQmdCLFNBQ2JoQixFQUFlZ0IsU0FDZix5RkFFSkMsSUFBUWpCLEVBQWVrQixLQUFsQixnQkFDTE4sVUFBVSxlQUFlLENBQUEsRUFFMUJYLEVBQUFDLFFBQUFPLGNBQUEsTUFBQSxDQUFLRyxVQUFVLHFDQUFxQyxFQUNuRFgsRUFBQUMsUUFBQU8sY0FBQSxLQUFBLENBQUlHLFVBQVUsSUFBSSxFQUFFWixFQUFla0IsSUFBSSxDQUFNLENBQ3hDLEVBRVBqQixFQUFBQyxRQUFBTyxjQUFBLE1BQUEsS0FDQ1IsRUFBQUMsUUFBQU8sY0FBQ1UsRUFBQUMsV0FBVSxDQUFDQyxLQUFLLFVBQVVDLFFBQVNkLENBQVMsQ0FBQSxDQUFJLENBQzVDLENBR1QsRUE5QkEsSUFBQVAsRUFBQWxCLEVBQUEsT0FBQSxFQUNBMkIsRUFBQTNCLEVBQUEsb0RBQUEsRUFDQThCLEVBQUE5QixFQUFBLG1CQUFBLEVBQ0FvQyxFQUFBcEMsRUFBQSxtQkFBQSxDLHlIQ09NLFNBQWUsQ0FBRVcsSUFBQUEsQ0FBRyxHQUN6QixJQUFNNkIsRUFBZTdCLEVBQUlDLEtBQUtDLElBQUksY0FBYyxFQUMxQzRCLEVBQWdCOUIsRUFBSUMsS0FBS0MsSUFBSSxlQUFlLEVBRWxELE9BQ0NLLEVBQUFDLFFBQUFPLGNBQUFSLEVBQUFDLFFBQUF1QixTQUFBLEtBQ0N4QixFQUFBQyxRQUFBTyxjQUFBLG1DQUFBLENBQ0NpQixHQUFJSCxFQUFZSSxpQkFDQUgsQ0FBYSxDQUFBLENBQ00sQ0FHdkMsRUF0QkEsSUFBQXZCLEVBQUFsQixFQUFBLE9BQUEifQ==