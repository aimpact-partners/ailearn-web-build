System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi003Image) {
      dependency_5 = _pragmateUi003Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard/participant"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/image', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard/participant",
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
        hash: 4036314691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          function Header() {
            const [studentDetails, setStudentDetails] = _react.default.useState(JSON.parse(localStorage.getItem('student.details')));
            return _react.default.createElement(_ui.PageHeader, null, _react.default.createElement("div", {
              className: "user-section__modal-header"
            }, _react.default.createElement(_image.Image, {
              src: studentDetails?.photoUrl ? studentDetails.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${studentDetails.name}-avatar-modal`,
              className: "avatar__image"
            }), _react.default.createElement("div", {
              className: "user-section__text-header-container"
            }, _react.default.createElement("h3", {
              className: "h3"
            }, studentDetails.name))), _react.default.createElement("div", null, _react.default.createElement(IconButton, {
              icon: "refresh",
              onClick: () => store.refresh()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX3VpIiwiX2ltYWdlIiwiSGVhZGVyIiwic3R1ZGVudERldGFpbHMiLCJzZXRTdHVkZW50RGV0YWlscyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiUGFnZUhlYWRlciIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJhbHQiLCJuYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwic3RvcmUiLCJyZWZyZXNoIiwidXJpIiwiYXNzaWdubWVudElkIiwidmFycyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJGcmFnbWVudCIsImlkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsR0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUsTUFBTUEsQ0FBQTtZQUNyQixNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR0wsTUFBQSxDQUFBTSxPQUFLLENBQUNDLFFBQVEsQ0FDekRDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQ25EO1lBQ0QsT0FDQ1gsTUFBQSxDQUFBTSxPQUFBLENBQUFNLGFBQUEsQ0FBQ1gsR0FBQSxDQUFBWSxVQUFVLFFBQ1ZiLE1BQUEsQ0FBQU0sT0FBQSxDQUFBTSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQ2QsTUFBQSxDQUFBTSxPQUFBLENBQUFNLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBYSxLQUFLO2NBQ0xDLEdBQUcsRUFDRlosY0FBYyxFQUFFYSxRQUFRLEdBQ3JCYixjQUFjLENBQUNhLFFBQVEsR0FDdkIsd0ZBQXdGO2NBRTVGQyxHQUFHLEVBQUUsR0FBR2QsY0FBYyxDQUFDZSxJQUFJLGVBQWU7Y0FDMUNMLFNBQVMsRUFBQztZQUFlLEVBQ3hCLEVBQ0ZkLE1BQUEsQ0FBQU0sT0FBQSxDQUFBTSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQyxHQUNuRGQsTUFBQSxDQUFBTSxPQUFBLENBQUFNLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQUksR0FBRVYsY0FBYyxDQUFDZSxJQUFJLENBQU0sQ0FDeEMsQ0FDRCxFQUNObkIsTUFBQSxDQUFBTSxPQUFBLENBQUFNLGFBQUEsY0FDQ1osTUFBQSxDQUFBTSxPQUFBLENBQUFNLGFBQUEsQ0FBQ1EsVUFBVTtjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTUMsS0FBSyxDQUFDQyxPQUFPO1lBQUUsRUFBSSxDQUN4RCxDQUNNO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUF4QixNQUFBLEdBQUFQLE9BQUE7VUFVTSxTQUFVSyxJQUFJQSxDQUFDO1lBQUUyQjtVQUFHLENBQUU7WUFDM0IsTUFBTUMsWUFBWSxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNQyxhQUFhLEdBQUdKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO1lBRW5ELE9BQ0M1QixNQUFBLENBQUFNLE9BQUEsQ0FBQU0sYUFBQSxDQUFBWixNQUFBLENBQUFNLE9BQUEsQ0FBQXdCLFFBQUEsUUFDQzlCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBTSxhQUFBO2NBQ0NtQixFQUFFLEVBQUVMLFlBQVk7Y0FBQSxrQkFDQUc7WUFBYSxFQUNNLENBQ2xDO1VBRUwifQ==