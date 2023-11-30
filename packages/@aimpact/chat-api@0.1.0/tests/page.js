System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_react) {
      dependency_3 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.6"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/firestore-collection", "0.0.2"], ["@beyond-js/response", "0.0.1"], ["@google-cloud/storage", "6.11.0"], ["@google-cloud/tasks", "3.2.0"], ["@pinecone-database/pinecone", "0.1.6"], ["langchain", "0.0.145"], ["axios", "1.4.0"], ["busboy", "1.6.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["express-openapi-validator", "5.0.4"], ["firebase", "8.6.8"], ["firebase-admin", "11.11.0"], ["fluent-ffmpeg", "2.1.2"], ["form-data", "4.0.0"], ["google-auth-library", "8.9.0"], ["jsonwebtoken", "9.0.1"], ["node-fetch", "2.6.12"], ["openai", "4.5.0"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.2"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["swagger-ui-express", "5.0.0"], ["yaml", "2.3.1"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-api@0.1.0//tests/page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-api-test",
        "vspecifier": "@aimpact/chat-api@0.1.0//tests/page",
        "is": "page",
        "route": "/chat-api/tests"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2740985082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View() {
            return React.createElement("h2", null, "Chat Api tests");
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNOLE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNmOztVQUNIQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxLQUFBLEdBQUFQLE9BQUE7VUFFTztVQUFVLFNBQ1JLLElBQUlBLENBQUE7WUFDWixPQUFPRSxLQUFBLENBQUFDLGFBQUEsOEJBQXVCO1VBQy9CIn0=