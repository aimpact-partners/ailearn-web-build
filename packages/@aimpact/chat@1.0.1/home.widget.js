System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0037Icons) {
      dependency_5 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Components) {
      dependency_6 = _pragmateUi0037Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101UiManager) {
      dependency_8 = _aimpactChat101UiManager;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat/ui/manager', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10]]);
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
        hash: 3893292162,
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
              className: 'empty-view-container'
            }, _react.default.createElement("header", {
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
            }), _react.default.createElement("h1", null, texts.chat.title)), _react.default.createElement("p", null, texts.chat.subtitle, texts.chat.description), _react.default.createElement(_components.Button, {
              onClick: openDialog,
              label: 'Start Chat'
            })), _react.default.createElement("div", {
              className: 'empty-view-card'
            }, _react.default.createElement("header", null, _react.default.createElement(_icons.Icon, {
              icon: 'upload-file',
              className: 'lg'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQ2pELElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBR00sU0FBVUQsSUFBSTtZQUNuQixNQUFNRSxVQUFVLEdBQUcsTUFBT0Msa0JBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUs7WUFDdkQsTUFBTUMsbUJBQW1CLEdBQUcsTUFBTUMsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUVqRSxNQUFNLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ0Msc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELElBQUksQ0FBQ0gsVUFBVSxFQUFFLE9BQU9JLDZCQUFDQyxtQkFBTyxPQUFHO1lBRW5DLE9BQ0NEO2NBQVNFLFNBQVMsRUFBQztZQUFzQixHQUN4Q0Y7Y0FBUUUsU0FBUyxFQUFDO1lBQW1CLEdBQ3BDRjtjQUFLRSxTQUFTLEVBQUM7WUFBVSxHQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFPLEVBQ3JESix3Q0FBSUgsS0FBSyxDQUFDTSxPQUFPLENBQUNFLElBQUksQ0FBSyxDQUNuQixFQUNUTDtjQUFTRSxTQUFTLEVBQUM7WUFBTyxHQUN6QkY7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CRiw2Q0FDQ0EsNkJBQUNNLFdBQUk7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0wsU0FBUyxFQUFDO1lBQUksRUFBRyxFQUN2Q0YseUNBQUtILEtBQUssQ0FBQ1csSUFBSSxDQUFDSixLQUFLLENBQU0sQ0FDbkIsRUFDVEosd0NBQ0VILEtBQUssQ0FBQ1csSUFBSSxDQUFDQyxRQUFRLEVBQ25CWixLQUFLLENBQUNXLElBQUksQ0FBQ0UsV0FBVyxDQUNwQixFQUNKViw2QkFBQ1csa0JBQU07Y0FBQ0MsT0FBTyxFQUFFdEIsVUFBVTtjQUFFdUIsS0FBSyxFQUFDO1lBQVksRUFBRyxDQUM3QyxFQUNOYjtjQUFLRSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JGLDZDQUNDQSw2QkFBQ00sV0FBSTtjQUFDQyxJQUFJLEVBQUMsYUFBYTtjQUFDTCxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQzFDRix5Q0FBS0gsS0FBSyxDQUFDaUIsRUFBRSxDQUFDVixLQUFLLENBQU0sQ0FDakIsRUFDVEosd0NBQ0VILEtBQUssQ0FBQ2lCLEVBQUUsQ0FBQ0wsUUFBUSxFQUNqQlosS0FBSyxDQUFDaUIsRUFBRSxDQUFDSixXQUFXLENBQ2xCLEVBQ0pWLDZCQUFDVyxrQkFBTTtjQUFDQyxPQUFPLEVBQUVuQixtQkFBbUI7Y0FBRW9CLEtBQUssRUFBRWhCLEtBQUssQ0FBQ2lCLEVBQUUsQ0FBQ0M7WUFBTSxFQUFJLENBQzNELENBQ0csQ0FDRDtVQUVaIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIm5hdmlnYXRlVG9Eb2N1bWVudHMiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUmVhY3QiLCJTcGlubmVyIiwiY2xhc3NOYW1lIiwid2VsY29tZSIsInRpdGxlIiwidGV4dCIsIkljb24iLCJpY29uIiwiY2hhdCIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJrYiIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19