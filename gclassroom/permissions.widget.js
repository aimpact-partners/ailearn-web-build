System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "react@18.2.0", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/image"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat101SharedComponents) {
      dependency_7 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Image) {
      dependency_11 = _pragmateUi003Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/gclassroom/permissions",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/components', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/image', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/gclassroom/permissions.widget",
        "is": "page",
        "route": "/gclassroom/permissions"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/gclassroom/permissions.widget');
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
        hash: 389888570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _components2 = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _image = require("pragmate-ui/image");
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            if (!textsReady) return null;
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
                console.error(3, texts.ERROR_GETTING_URL, e);
                setError(texts.ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("div", {
              className: "flex-page__container"
            }, _react.default.createElement("div", {
              className: "panel"
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: "panel"
            }, _react.default.createElement("div", {
              className: "permission-container"
            }, _react.default.createElement("div", {
              className: "permission__header"
            }, _react.default.createElement(_components.ThemeSwitch, {
              text: texts.theme
            })), _react.default.createElement("div", {
              className: "gclassroom__container"
            }, _react.default.createElement("div", {
              className: "card"
            }, _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("span", {
              className: "h5"
            }, texts.preTitle), _react.default.createElement("h3", {
              className: "h3"
            }, texts.title), _react.default.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error), _react.default.createElement("span", {
              className: "instructions_text h5"
            }, texts.instructions), _react.default.createElement("section", {
              className: "actions"
            }, _react.default.createElement(_components2.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, texts.action))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiYXV0aG9yaXplZCIsImdjbGFzc3Jvb20iLCJnY2xhc3Nyb29tcyIsIl9yZWFjdCIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMyIiwiX2FsZXJ0IiwiX2hvb2tzIiwiX2ltYWdlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ2xpY2siLCJldmVudCIsInVybCIsImdldFVybCIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsImNvbnNvbGUiLCJFUlJPUl9HRVRUSU5HX1VSTCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJUaGVtZVN3aXRjaCIsInRleHQiLCJ0aGVtZSIsInByZVRpdGxlIiwidGl0bGUiLCJJbWFnZSIsInNyYyIsImFsdCIsIkFsZXJ0IiwidHlwZSIsImluc3RydWN0aW9ucyIsIkJ1dHRvbiIsImxvYWRpbmciLCJhY3Rpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFB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