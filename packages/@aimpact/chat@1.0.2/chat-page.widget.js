System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/chat@1.0.2/ui/manager", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.2/wrapper", "@aimpact/chat@1.0.2/shared/components", "@aimpact/chat@1.0.2/shared/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat102UiManager) {
      dependency_7 = _aimpactChat102UiManager;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_9 = _pragmateUi011Icons;
    }, function (_aimpactChat102Wrapper) {
      dependency_10 = _aimpactChat102Wrapper;
    }, function (_aimpactChat102SharedComponents) {
      dependency_11 = _aimpactChat102SharedComponents;
    }, function (_aimpactChat102SharedIcons) {
      dependency_12 = _aimpactChat102SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/chat-page",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@aimpact/chat/ui/manager', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/icons', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.2/chat-page.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/chat-page.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2861114136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              //this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 734981720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3049306109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          function View({
            store,
            uri
          }) {
            const [id] = _react.default.useState(uri.vars.get('id'));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aimpact-chat-control", {
              id: id
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 4064363242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          var _manager = require("@aimpact/chat/ui/manager");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components2 = require("@aimpact/chat/shared/components");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ChatNotFound() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            if (!_wrapper.AppWrapper.ready) return _react.default.createElement(_components2.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'not__found_chat '
            }, _react.default.createElement("img", {
              src: '/assets/not-found.png',
              alt: 'Chat not found'
            }), _react.default.createElement("span", {
              className: 'not__found__details'
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'not-found__ailogo'
            }), _react.default.createElement("h2", null, "Chat not found"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", _react.default.createElement("br", null), "Please enter URL correctly or create a new chat."), _react.default.createElement(_components.Button, {
              icon: 'chat',
              onClick: openDialog,
              label: 'Start New Chat'
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJfcmVhY3QiLCJ1cmkiLCJpZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInZhcnMiLCJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiX3dyYXBwZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwiQ2hhdE5vdEZvdW5kIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiQXBwV3JhcHBlciIsInJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJCdXR0b24iLCJvbkNsaWNrIiwibGFiZWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0g7WUFBQTtZQUdEQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFYLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkQsSUFBQVksTUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsZUFBQSxHQUFBakIsT0FBQTtVQU9NLE1BQU9PLFlBQWEsU0FBUVEsTUFBQSxDQUFBRyxhQUFxQjtZQUV0RCxDQUFBQyxLQUFNLEdBQStCLElBQUlILE1BQUEsQ0FBQUksWUFBWSxDQUFDSCxlQUFBLENBQUFJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7O1VBRUFULE9BQUEsQ0FBQVAsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRCxJQUFBaUIsTUFBQSxHQUFBeEIsT0FBQTtVQVVNLFNBQVVVLElBQUlBLENBQUM7WUFBRUwsS0FBSztZQUFFb0I7VUFBRyxDQUFFO1lBQ2xDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLEdBQUdGLE1BQUEsQ0FBQUcsT0FBSyxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFL0MsT0FDQ04sTUFBQSxDQUFBRyxPQUFBLENBQUFJLGFBQUEsQ0FBQVAsTUFBQSxDQUFBRyxPQUFBLENBQUFLLFFBQUEsUUFDQ1IsTUFBQSxDQUFBRyxPQUFBLENBQUFJLGFBQUE7Y0FBc0JMLEVBQUUsRUFBRUE7WUFBRSxFQUFJLENBQzlCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFGLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBaUMsUUFBQSxHQUFBakMsT0FBQTtVQUNBLElBQUFrQyxXQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW1DLE1BQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBb0MsUUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxZQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQXNDLE9BQUEsR0FBQXRDLE9BQUE7VUFFTSxTQUFVdUMsWUFBWUEsQ0FBQTtZQUMzQixTQUFTQyxVQUFVQSxDQUFBO2NBQ2xCUCxRQUFBLENBQUFRLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUNOLFFBQUEsQ0FBQU8sVUFBVSxDQUFDQyxLQUFLLEVBQUUsT0FBT3BCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBSSxhQUFBLENBQUNNLFlBQUEsQ0FBQVEsYUFBYSxPQUFHO1lBQy9DLE9BQ0NyQixNQUFBLENBQUFHLE9BQUEsQ0FBQUksYUFBQTtjQUFLZSxTQUFTLEVBQUM7WUFBa0IsR0FDaEN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0IsR0FBRyxFQUFDLHVCQUF1QjtjQUFDQyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RHhCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBSSxhQUFBO2NBQU1lLFNBQVMsRUFBQztZQUFxQixHQUNwQ3RCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBSSxhQUFBLENBQUNJLE1BQUEsQ0FBQWMsSUFBSTtjQUFDQyxJQUFJLEVBQUVaLE9BQUEsQ0FBQWEsS0FBSyxDQUFDLGVBQWUsQ0FBQztjQUFFTCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRXRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBSSxhQUFBLDhCQUF1QixFQUN2QlAsTUFBQSxDQUFBRyxPQUFBLENBQUFJLGFBQUEsWUFDQ1AsTUFBQSxDQUFBRyxPQUFBLENBQUFJLGFBQUEsb0VBQWlFLEUsS0FBQ1AsTUFBQSxDQUFBRyxPQUFBLENBQUFJLGFBQUEsWUFBTSxFLG1EQUVyRSxFQUNKUCxNQUFBLENBQUFHLE9BQUEsQ0FBQUksYUFBQSxDQUFDRyxXQUFBLENBQUFrQixNQUFNO2NBQUNGLElBQUksRUFBQyxNQUFNO2NBQUNHLE9BQU8sRUFBRWIsVUFBVTtjQUFFYyxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIifQ==