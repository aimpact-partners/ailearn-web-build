System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Alert) {
      dependency_10 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Components) {
      dependency_11 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Image) {
      dependency_12 = _pragmateUi0036Image;
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
          "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassrooms/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/image', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassrooms/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/gclassrooms/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1069450016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              if (this.uri.qs.get('state') && this.uri.qs.get('code')) {
                this.#store.validate(this.uri.qs.get('state'), this.uri.qs.get('code'));
              } else this.#store.ready = true;
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 774891343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
            }
            get error() {
              return _gclassroom.gclassroom.error;
            }
            get gclassroom() {
              return _gclassroom.gclassroom;
            }
            async validate(state, code) {
              try {
                this.fetching = true;
                await _gclassroom.gclassroom.callback(state, code);
                this.fetching = false;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 752145297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("@aimpact/chat/shared/components");
          var _alert = require("pragmate-ui/alert");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              gclassroom: {
                code,
                state,
                error,
                fetching
              }
            } = store;
            const [isFetching, setFetching] = React.useState(store.fetching || fetching);
            (0, _hooks2.useBinder)([store], () => setFetching(store.fetching));
            if (!textsReady || isFetching) return React.createElement(_components.PreloadScreen, null);
            // if (!code || !state || error) {
            // 	return (
            // 		<div className="page__container">
            // 			<h1 className="warning-text">404</h1>
            // 		</div>
            // 	);
            // }
            return React.createElement("div", {
              className: "page__container place-center"
            }, React.createElement("div", {
              className: "card"
            }, React.createElement("div", {
              className: "card__content"
            }, React.createElement("h1", null, texts.title), React.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && React.createElement(_alert.Alert, {
              type: "error"
            }, error), React.createElement("h4", null, texts.subtitle))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDO1lBQWUsR0FDN0JILGdDQUFLTCxLQUFLLENBQUNTLEtBQUssQ0FBTSxFQUV0Qkosb0JBQUNLLFlBQUs7Y0FBQ0MsR0FBRyxFQUFDLHdCQUF3QjtjQUFDQyxHQUFHLEVBQUM7WUFBa0IsRUFBRyxFQUM1RHJCLEtBQUssSUFBSWMsb0JBQUNRLFlBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU8sR0FBRXZCLEtBQUssQ0FBUyxFQUM3Q2MsZ0NBQUtMLEtBQUssQ0FBQ2UsUUFBUSxDQUFNLENBQ3BCLENBQ0QsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwidXJpIiwicXMiLCJnZXQiLCJ2YWxpZGF0ZSIsInJlYWR5IiwiaGlkZSIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJnY2xhc3Nyb29tIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJlcnJvciIsInN0YXRlIiwiY29kZSIsImZldGNoaW5nIiwiY2FsbGJhY2siLCJlIiwiY29uc29sZSIsInN0b3JlIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiQWxlcnQiLCJ0eXBlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=