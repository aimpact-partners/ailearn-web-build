System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.2/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/alert", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/image"], function (_export, _context) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp002ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp002ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_7 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Alert) {
      dependency_8 = _pragmateUi0037Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Image) {
      dependency_10 = _pragmateUi0037Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/gclassroom/permissions",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['pragmate-ui/image', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/gclassroom/permissions.widget",
        "is": "page",
        "route": "/gclassroom/permissions"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/gclassroom/permissions.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3262565724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 652728289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            get authorized() {
              return _gclassroom.gclassroom.authorized;
            }
            #gclassrooms = [];
            get gclassrooms() {
              return this.#gclassrooms;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 617150008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _image = require("pragmate-ui/image");
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            if (!textsReady) return null;
            const {
              title,
              ERROR_GETTING_URL,
              unauthorized
            } = texts;
            const onClick = async event => {
              try {
                setFetching(true);
                const url = await _gclassroom.gclassroom.getUrl();
                if (!url) {
                  throw new Error('ERROR_GETTING_URL');
                }
                setFetching(false);
                window.location.href = url;
              } catch (e) {
                console.error(3, ERROR_GETTING_URL, e);
                setError(ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("div", {
              className: "page__container place-center"
            }, _react.default.createElement("div", {
              className: "card"
            }, _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("h1", null, title), _react.default.createElement("h4", null, texts.subtitle), _react.default.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error), _react.default.createElement("span", null, texts.instructions), _react.default.createElement("section", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, texts.action)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiYXV0aG9yaXplZCIsImdjbGFzc3Jvb20iLCJnY2xhc3Nyb29tcyIsIl9yZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX2hvb2tzIiwiX2ltYWdlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInRpdGxlIiwiRVJST1JfR0VUVElOR19VUkwiLCJ1bmF1dGhvcml6ZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImUiLCJjb25zb2xlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN1YnRpdGxlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJBbGVydCIsInR5cGUiLCJpbnN0cnVjdGlvbnMiLCJCdXR0b24iLCJsb2FkaW5nIiwiYWN0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFD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