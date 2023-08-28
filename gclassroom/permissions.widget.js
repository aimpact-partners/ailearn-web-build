System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi0036Components) {
      dependency_7 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Alert) {
      dependency_8 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9]]);
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
        hash: 852931728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            if (!textsReady) return null;
            const {
              title,
              ERROR_GETTING_URL,
              unauthorized: {
                text,
                action,
                error: errorMessage
              }
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
                console.log(3, ERROR_GETTING_URL, e);
                setError(ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement("div", {
              className: "empty-page__message-container"
            }, React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement("h3", null, title)), error && React.createElement(_alert.Alert, {
              type: "error"
            }, error), React.createElement("section", {
              className: "actions"
            }, React.createElement(_components.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, action))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsTUFBT0EsVUFBVyxTQUFRQywrQkFBeUI7WUFDbkUsTUFBTTtZQUNOQyxXQUFXO2NBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQyxtQkFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsVUFBSTtZQUNaOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRDtVQUNBO1VBRU0sTUFBT0gsWUFBYSxTQUFRSSxvQkFBMkI7WUFHNUQsSUFBSUMsVUFBVTtjQUNiLE9BQU9DLHNCQUFVLENBQUNELFVBQVU7WUFDN0I7WUFDQSxZQUFZLEdBQVUsRUFBRTtZQUN4QixJQUFJRSxXQUFXO2NBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6Qjs7VUFDQUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkQ7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVUQsSUFBSSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxDQUFDTSxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUNDLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdILEtBQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUNQLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFFNUIsTUFBTTtjQUNMVSxLQUFLO2NBQ0xDLGlCQUFpQjtjQUNqQkMsWUFBWSxFQUFFO2dCQUFFQyxJQUFJO2dCQUFFQyxNQUFNO2dCQUFFTixLQUFLLEVBQUVPO2NBQVk7WUFBRSxDQUNuRCxHQUFHZCxLQUFLO1lBRVQsTUFBTWUsT0FBTyxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUM3QixJQUFJO2dCQUNIWixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNYSxHQUFHLEdBQUcsTUFBTXBCLHNCQUFVLENBQUNxQixNQUFNLEVBQUU7Z0JBRXJDLElBQUksQ0FBQ0QsR0FBRyxFQUFFO2tCQUNULE1BQU0sSUFBSUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDOztnQkFFckNmLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCZ0IsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBR0wsR0FBRztlQUMxQixDQUFDLE9BQU9NLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFZixpQkFBaUIsRUFBRWEsQ0FBQyxDQUFDO2dCQUNwQ2YsUUFBUSxDQUFDRSxpQkFBaUIsQ0FBQztlQUMzQixTQUFTO2dCQUNUTixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ0M7Y0FBS3FCLFNBQVMsRUFBQztZQUFpQixHQUMvQnJCO2NBQUtxQixTQUFTLEVBQUM7WUFBK0IsR0FDN0NyQixvQkFBQ3NCLFlBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FDakJ2QixnQ0FBS0ksS0FBSyxDQUFNLENBQ1QsRUFFUEYsS0FBSyxJQUFJRixvQkFBQ3NCLFlBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU8sR0FBRXJCLEtBQUssQ0FBUyxFQUU3Q0Y7Y0FBU3FCLFNBQVMsRUFBQztZQUFTLEdBQzNCckIsb0JBQUN3QixrQkFBTTtjQUFDZCxPQUFPLEVBQUVBLE9BQU87Y0FBRWUsT0FBTyxFQUFFM0IsUUFBUTtjQUFFdUIsU0FBUyxFQUFDO1lBQWlCLEdBQ3RFYixNQUFNLENBQ0MsQ0FDQSxDQUNMLENBQ0Q7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwidGl0bGUiLCJFUlJPUl9HRVRUSU5HX1VSTCIsInVuYXV0aG9yaXplZCIsInRleHQiLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJ1cmwiLCJnZXRVcmwiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiQnV0dG9uIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19