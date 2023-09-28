System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.1/components", "pragmate-ui@0.0.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.1/image"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi001Components) {
      dependency_7 = _pragmateUi001Components;
    }, function (_pragmateUi001Alert) {
      dependency_8 = _pragmateUi001Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi001Image) {
      dependency_10 = _pragmateUi001Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom/permissions",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['pragmate-ui/image', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom/permissions.widget",
        "is": "page",
        "route": "/gclassroom/permissions"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/gclassroom/permissions.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELENBQ0Q7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwidGl0bGUiLCJFUlJPUl9HRVRUSU5HX1VSTCIsInVuYXV0aG9yaXplZCIsIm9uQ2xpY2siLCJldmVudCIsInVybCIsImdldFVybCIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJzdWJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiQWxlcnQiLCJ0eXBlIiwiaW5zdHJ1Y3Rpb25zIiwiQnV0dG9uIiwibG9hZGluZyIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19