System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.1/page", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/components/ui", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_2 = _beyondJsReact18Widgets111Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_pragmateUi006Image) {
      dependency_5 = _pragmateUi006Image;
    }, function (_pragmateUi006Icons) {
      dependency_6 = _pragmateUi006Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/dashboard/participant"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/icons', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/dashboard/participant",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "general-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1803575294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 3261243151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          function Header() {
            const [studentDetails, setStudentDetails] = _react.default.useState(JSON.parse(localStorage.getItem('student.details')));
            const onRefresh = () => '';
            return _react.default.createElement(_ui.NavbarHeader, null, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3VpIiwiX2ltYWdlIiwiX2ljb25zIiwiSGVhZGVyIiwic3R1ZGVudERldGFpbHMiLCJzZXRTdHVkZW50RGV0YWlscyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlZnJlc2giLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsImFsdCIsIm5hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJ1cmkiLCJhc3NpZ25tZW50SWQiLCJ2YXJzIiwiZ2V0IiwicGFydGljaXBhbnRJZCIsIkZyYWdtZW50IiwiaWQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLEdBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUNNLFNBQVVXLE1BQU1BLENBQUE7WUFDckIsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdOLE1BQUEsQ0FBQU8sT0FBSyxDQUFDQyxRQUFRLENBQ3pEQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUNuRDtZQUNELE1BQU1DLFNBQVMsR0FBR0EsQ0FBQSxLQUFNLEVBQUU7WUFDMUIsT0FDQ2IsTUFBQSxDQUFBTyxPQUFBLENBQUFPLGFBQUEsQ0FBQ2IsR0FBQSxDQUFBYyxZQUFZLFFBQ1pmLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQ2hCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBLENBQUNaLE1BQUEsQ0FBQWUsS0FBSztjQUNMQyxHQUFHLEVBQ0ZiLGNBQWMsRUFBRWMsUUFBUSxHQUNyQmQsY0FBYyxDQUFDYyxRQUFRLEdBQ3ZCLHdGQUF3RjtjQUU1RkMsR0FBRyxFQUFFLEdBQUdmLGNBQWMsQ0FBQ2dCLElBQUksZUFBZTtjQUMxQ0wsU0FBUyxFQUFDO1lBQWUsRUFDeEIsRUFDRmhCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQyxHQUNuRGhCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFJLEdBQUVYLGNBQWMsQ0FBQ2dCLElBQUksQ0FBTSxDQUN4QyxDQUNELEVBQ05yQixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQSxjQUNDZCxNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQSxDQUFDWCxNQUFBLENBQUFtQixVQUFVO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRVg7WUFBUyxFQUFJLENBQzVDLENBQ1E7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFiLE1BQUEsR0FBQVAsT0FBQTtVQVVNLFNBQVVLLElBQUlBLENBQUM7WUFBRTJCO1VBQUcsQ0FBRTtZQUMzQixNQUFNQyxZQUFZLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ2pELE1BQU1DLGFBQWEsR0FBR0osR0FBRyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7WUFFbkQsT0FDQzVCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBLENBQUFkLE1BQUEsQ0FBQU8sT0FBQSxDQUFBdUIsUUFBQSxRQUNDOUIsTUFBQSxDQUFBTyxPQUFBLENBQUFPLGFBQUE7Y0FDQ2lCLEVBQUUsRUFBRUwsWUFBWTtjQUFBLGtCQUNBRztZQUFhLEVBQ00sQ0FDbEM7VUFFTCJ9