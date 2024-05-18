System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32-beta.13/dashboard-layout.widget", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-beta.13/components/navbar-header.code", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0032Beta13DashboardLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0032Beta13DashboardLayoutWidget;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnApp0032Beta13ComponentsNavbarHeaderCode) {
      dependency_5 = _aimpactAilearnApp0032Beta13ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Image) {
      dependency_6 = _pragmateUi011Image;
    }, function (_pragmateUi011Icons) {
      dependency_7 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/dashboard/participant"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/icons', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/dashboard/participant",
        "is": "page",
        "route": "/old-assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 310124453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
            show() {
              _dashboardLayout.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get('assignmentId')}/dashboard/classroom`); // set the back link
            }
            hide() {
              _dashboardLayout.LayoutBroker.removeOverlay();
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1847805944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          function Header() {
            const [studentDetails, setStudentDetails] = _react.default.useState(JSON.parse(localStorage.getItem('student.details')));
            const onRefresh = () => '';
            return _react.default.createElement(_navbarHeader.NavbarHeader, null, _react.default.createElement("div", {
              className: "user-section__modal-header"
            }, _react.default.createElement(_image.Image, {
              src: studentDetails?.photoUrl ? studentDetails.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${studentDetails.name}-avatar-modal`,
              className: "avatar__image"
            }), _react.default.createElement("div", {
              className: "user-section__text-header-container"
            }, _react.default.createElement("h3", {
              className: "h3"
            }, studentDetails.name))), _react.default.createElement("div", null, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: onRefresh
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2187413372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          function View({
            uri
          }) {
            const assignmentId = uri.vars.get('assignmentId');
            const participantId = uri.vars.get('participantId');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("assignment-dashboard-participant", {
              id: assignmentId,
              "participant-id": participantId
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9uYXZiYXJIZWFkZXIiLCJfaW1hZ2UiLCJfaWNvbnMiLCJIZWFkZXIiLCJzdHVkZW50RGV0YWlscyIsInNldFN0dWRlbnREZXRhaWxzIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVmcmVzaCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwibmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsImFzc2lnbm1lbnRJZCIsInBhcnRpY2lwYW50SWQiLCJGcmFnbWVudCIsImlkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGdCQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9KLE1BQUEsQ0FBQUssSUFBSTtZQUNaO1lB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