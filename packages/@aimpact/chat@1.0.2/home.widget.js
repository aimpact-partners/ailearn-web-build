System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.2/ui/manager", "@aimpact/chat@1.0.2/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_5 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_6 = _pragmateUi100Beta1Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChat102UiManager) {
      dependency_8 = _aimpactChat102UiManager;
    }, function (_aimpactChat102SharedHooks) {
      dependency_9 = _aimpactChat102SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat/ui/manager', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-home-page",
        "vspecifier": "@aimpact/chat@1.0.2/home.widget",
        "is": "page",
        "route": "/_this_route_does_not_exists",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1999589969,
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
        hash: 805176192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _manager = require("@aimpact/chat/ui/manager");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          function View() {
            const openDialog = () => _manager.UIManager.modalOpened = true;
            const navigateToDocuments = () => _routing.routing.pushState('/documents');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_components.Spinner, null);
            return _react.default.createElement("section", {
              className: "empty-view-container"
            }, _react.default.createElement("header", {
              className: "empty-view-banner"
            }, _react.default.createElement("div", {
              className: "title-xl"
            }, texts.welcome.title), _react.default.createElement("p", null, texts.welcome.text)), _react.default.createElement("section", {
              className: "cards"
            }, _react.default.createElement("div", {
              className: "empty-view-card"
            }, _react.default.createElement("header", null, _react.default.createElement(_icons.Icon, {
              icon: "add-chat",
              className: "lg"
            }), _react.default.createElement("h1", null, texts.chat.title)), _react.default.createElement("p", null, texts.chat.subtitle, texts.chat.description), _react.default.createElement(_components.Button, {
              onClick: openDialog,
              label: "Start Chat"
            })), _react.default.createElement("div", {
              className: "empty-view-card"
            }, _react.default.createElement("header", null, _react.default.createElement(_icons.Icon, {
              icon: "upload-file",
              className: "lg"
            }), _react.default.createElement("h1", null, texts.kb.title)), _react.default.createElement("p", null, texts.kb.subtitle, texts.kb.description), _react.default.createElement(_components.Button, {
              onClick: navigateToDocuments,
              label: texts.kb.action
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIl9tYW5hZ2VyIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0Iiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwibmF2aWdhdGVUb0RvY3VtZW50cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImNsYXNzTmFtZSIsIndlbGNvbWUiLCJ0aXRsZSIsInRleHQiLCJJY29uIiwiaWNvbiIsImNoYXQiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwib25DbGljayIsImxhYmVsIiwia2IiLCJhY3Rpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFB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