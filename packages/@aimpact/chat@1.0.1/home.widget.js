System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/wrapper"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_4 = _react;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat/ui/manager', dependency_8], ['@aimpact/chat/wrapper', dependency_9]]);
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
        hash: 3880616409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _manager = require("@aimpact/chat/ui/manager");
          var _wrapper = require("@aimpact/chat/wrapper");
          function View() {
            const openDialog = () => _manager.UIManager.modalOpened = true;
            const navigateToDocuments = () => _routing.routing.pushState('/documents');
            const chatText = !!_wrapper.AppWrapper.chats?.items?.length ? {
              title: 'Chat now',
              subtitle: 'Select a chat to start talking.',
              description: ' Or create a new one here:'
            } : {
              title: 'Chat now',
              subtitle: 'There are no chats in your space yet.',
              description: 'You can start by creating your first chat now.'
            };
            const kbText = !!_wrapper.AppWrapper.knowledgeBoxes?.items?.length ? {
              title: 'Upload documents',
              subtitle: 'Use your documents to talk to AI.',
              description: ' Or create a new one here:'
            } : {
              title: 'Upload documents',
              subtitle: 'There are no knowledge box in your space yet.',
              description: 'You can start by creating your first knowledge box now.'
            };
            return React.createElement("section", {
              className: 'empty-view-container'
            }, React.createElement("section", {
              className: 'empty-view-banner'
            }, React.createElement("div", {
              className: 'title-xl'
            }, "Welcome!"), React.createElement("p", null, "At AImpact we believe the time is NOW to integrate AI into our organizations and personal learning journeys in order to boost individual and collective performance.")), React.createElement("section", {
              className: 'cards'
            }, React.createElement("div", {
              className: 'empty-view-card'
            }, React.createElement("header", null, React.createElement(_icons.Icon, {
              icon: 'add-chat',
              className: 'lg'
            }), React.createElement("h1", null, chatText.title)), React.createElement("p", null, chatText.subtitle, chatText.description), React.createElement(_form.Button, {
              onClick: openDialog,
              label: 'Start Chat'
            })), React.createElement("div", {
              className: 'empty-view-card'
            }, React.createElement("header", null, React.createElement(_icons.Icon, {
              icon: 'upload-file',
              className: 'lg'
            }), React.createElement("h1", null, kbText.title)), React.createElement("p", null, kbText.subtitle, kbText.description), React.createElement(_form.Button, {
              onClick: navigateToDocuments,
              label: 'Create Knowledge Box'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJfaWNvbnMiLCJfZm9ybSIsIl9yb3V0aW5nIiwiX21hbmFnZXIiLCJfd3JhcHBlciIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIm5hdmlnYXRlVG9Eb2N1bWVudHMiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2hhdFRleHQiLCJBcHBXcmFwcGVyIiwiY2hhdHMiLCJpdGVtcyIsImxlbmd0aCIsInRpdGxlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtiVGV4dCIsImtub3dsZWRnZUJveGVzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiQnV0dG9uIiwib25DbGljayIsImxhYmVsIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxLQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7VUFDQSxJ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