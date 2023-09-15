System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_5 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101UiManager) {
      dependency_8 = _aimpactChat101UiManager;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Components) {
      dependency_11 = _pragmateUi0036Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat/ui/manager', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/components', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-home-page",
        "vspecifier": "@aimpact/chat@1.0.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/home.widget');
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
        hash: 3339139433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _manager = require("@aimpact/chat/ui/manager");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          function View() {
            const openDialog = () => _manager.UIManager.modalOpened = true;
            const navigateToDocuments = () => _routing.routing.pushState('/documents');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_components.Spinner, null);
            return _react.default.createElement("section", {
              className: 'empty-view-container'
            }, _react.default.createElement("section", {
              className: 'empty-view-banner'
            }, _react.default.createElement("div", {
              className: 'title-xl'
            }, texts.welcome.title), _react.default.createElement("p", null, texts.welcome.text)), _react.default.createElement("section", {
              className: 'cards'
            }, _react.default.createElement("div", {
              className: 'empty-view-card'
            }, _react.default.createElement("header", null, _react.default.createElement(_icons.Icon, {
              icon: 'add-chat',
              className: 'lg'
            }), _react.default.createElement("h1", null, texts.chat.title)), _react.default.createElement("p", null, texts.chat.subtitle, texts.chat.description), _react.default.createElement(_form.Button, {
              onClick: openDialog,
              label: 'Start Chat'
            })), _react.default.createElement("div", {
              className: 'empty-view-card'
            }, _react.default.createElement("header", null, _react.default.createElement(_icons.Icon, {
              icon: 'upload-file',
              className: 'lg'
            }), _react.default.createElement("h1", null, texts.kb.title)), _react.default.createElement("p", null, texts.kb.subtitle, texts.kb.description), _react.default.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiX2ljb25zIiwiX2Zvcm0iLCJfcm91dGluZyIsIl9tYW5hZ2VyIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJuYXZpZ2F0ZVRvRG9jdW1lbnRzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiY2xhc3NOYW1lIiwid2VsY29tZSIsInRpdGxlIiwidGV4dCIsIkljb24iLCJpY29uIiwiY2hhdCIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJrYiIsImFjdGlvbiJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLFFBQUEsR0FBQVgsT0FBQTtVQUVBLElBQUFZLE1BQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLGVBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFdBQUEsR0FBQWQsT0FBQTtVQUVNLFNBQVVLLElBQUlBLENBQUE7WUFDbkIsTUFBTVUsVUFBVSxHQUFHQSxDQUFBLEtBQU9KLFFBQUEsQ0FBQUssU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSztZQUN2RCxNQUFNQyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNUixRQUFBLENBQUFTLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUVqRSxNQUFNLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQUcsSUFBQVYsTUFBQSxDQUFBVyxRQUFRLEVBQUNWLGVBQUEsQ0FBQVcsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsSUFBSSxDQUFDSixVQUFVLEVBQUUsT0FBT2QsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUNiLFdBQUEsQ0FBQWMsT0FBTyxPQUFHO1lBRW5DLE9BQ0NyQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDdEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFtQixHQUNyQ3RCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVSxHQUFFUCxLQUFLLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFPLEVBQ3JEeEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLFlBQUlMLEtBQUssQ0FBQ1EsT0FBTyxDQUFDRSxJQUFJLENBQUssQ0FDbEIsRUFDVnpCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBTyxHQUN6QnRCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBaUIsR0FDL0J0QixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsaUJBQ0NwQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ25CLE1BQUEsQ0FBQXlCLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0wsU0FBUyxFQUFDO1lBQUksRUFBRyxFQUN2Q3RCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTCxLQUFLLENBQUNhLElBQUksQ0FBQ0osS0FBSyxDQUFNLENBQ25CLEVBQ1R4QixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsWUFDRUwsS0FBSyxDQUFDYSxJQUFJLENBQUNDLFFBQVEsRUFDbkJkLEtBQUssQ0FBQ2EsSUFBSSxDQUFDRSxXQUFXLENBQ3BCLEVBQ0o5QixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLEtBQUEsQ0FBQTZCLE1BQU07Y0FBQ0MsT0FBTyxFQUFFeEIsVUFBVTtjQUFFeUIsS0FBSyxFQUFDO1lBQVksRUFBRyxDQUM3QyxFQUNOakMsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixHQUMvQnRCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ3BCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbkIsTUFBQSxDQUFBeUIsSUFBSTtjQUFDQyxJQUFJLEVBQUMsYUFBYTtjQUFDTCxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQzFDdEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtMLEtBQUssQ0FBQ21CLEVBQUUsQ0FBQ1YsS0FBSyxDQUFNLENBQ2pCLEVBQ1R4QixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsWUFDRUwsS0FBSyxDQUFDbUIsRUFBRSxDQUFDTCxRQUFRLEVBQ2pCZCxLQUFLLENBQUNtQixFQUFFLENBQUNKLFdBQVcsQ0FDbEIsRUFDSjlCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsS0FBQSxDQUFBNkIsTUFBTTtjQUFDQyxPQUFPLEVBQUVyQixtQkFBbUI7Y0FBRXNCLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21CLEVBQUUsQ0FBQ0M7WUFBTSxFQUFJLENBQzNELENBQ0csQ0FDRDtVQUVaIn0=