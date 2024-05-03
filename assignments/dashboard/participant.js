System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_4 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Image) {
      dependency_5 = _pragmateUi011Image;
    }, function (_pragmateUi011Icons) {
      dependency_6 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard/participant"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/icons', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard/participant",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX25hdmJhckhlYWRlciIsIl9pbWFnZSIsIl9pY29ucyIsIkhlYWRlciIsInN0dWRlbnREZXRhaWxzIiwic2V0U3R1ZGVudERldGFpbHMiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWZyZXNoIiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJhbHQiLCJuYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwidXJpIiwiYXNzaWdubWVudElkIiwidmFycyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJGcmFnbWVudCIsImlkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxhQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxNQUFBLEdBQUFWLE9BQUE7VUFDTSxTQUFVVyxNQUFNQSxDQUFBO1lBQ3JCLE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHTixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUN6REMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FDbkQ7WUFDRCxNQUFNQyxTQUFTLEdBQUdBLENBQUEsS0FBTSxFQUFFO1lBQzFCLE9BQ0NiLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBLENBQUNiLGFBQUEsQ0FBQWMsWUFBWSxRQUNaZixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNEIsR0FDMUNoQixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQSxDQUFDWixNQUFBLENBQUFlLEtBQUs7Y0FDTEMsR0FBRyxFQUNGYixjQUFjLEVBQUVjLFFBQVEsR0FDckJkLGNBQWMsQ0FBQ2MsUUFBUSxHQUN2Qix3RkFBd0Y7Y0FFNUZDLEdBQUcsRUFBRSxHQUFHZixjQUFjLENBQUNnQixJQUFJLGVBQWU7Y0FDMUNMLFNBQVMsRUFBQztZQUFlLEVBQ3hCLEVBQ0ZoQixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUMsR0FDbkRoQixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQTtjQUFJRSxTQUFTLEVBQUM7WUFBSSxHQUFFWCxjQUFjLENBQUNnQixJQUFJLENBQU0sQ0FDeEMsQ0FDRCxFQUNOckIsTUFBQSxDQUFBTyxPQUFBLENBQUFPLGFBQUEsY0FDQ2QsTUFBQSxDQUFBTyxPQUFBLENBQUFPLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBbUIsVUFBVTtjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVYO1lBQVMsRUFBSSxDQUM1QyxDQUNRO1VBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBYixNQUFBLEdBQUFQLE9BQUE7VUFVTSxTQUFVSyxJQUFJQSxDQUFDO1lBQUUyQjtVQUFHLENBQUU7WUFDM0IsTUFBTUMsWUFBWSxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNQyxhQUFhLEdBQUdKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO1lBRW5ELE9BQ0M1QixNQUFBLENBQUFPLE9BQUEsQ0FBQU8sYUFBQSxDQUFBZCxNQUFBLENBQUFPLE9BQUEsQ0FBQXVCLFFBQUEsUUFDQzlCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBTyxhQUFBO2NBQ0NpQixFQUFFLEVBQUVMLFlBQVk7Y0FBQSxrQkFDQUc7WUFBYSxFQUNNLENBQ2xDO1VBRUwifQ==