System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_7 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_9 = _aimpactAilearnApp0027Config;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_10 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/chat",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-chat",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/chat.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/activity/${activityId}/chat/${chatId}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/assignments/chat.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1310206847,
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
              // todo: @carlos ADd validation error if the vars are not present
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3414700685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #chatId;
            get chatId() {
              return this.#chatId;
            }
            async load(assignmentId, activityId, chatId) {
              try {
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#chatId = chatId;
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.isReady;
                await activity.load();
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/characters-card
      ***************************************/

      ims.set('./views/characters-card', {
        hash: 574123641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterCard = CharacterCard;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /* bundle */ // import { Image } from 'pragmate-ui/image';
          function CharacterCard() {
            const {
              texts
            } = (0, _context.useConversationContext)();
            const onActionClick = event => {
              console.log('clickAvatar');
            };
            return _react.default.createElement("section", {
              className: "character-card__container"
            }, _react.default.createElement("span", {
              className: "character-card__title"
            }, texts.selectTitle), _react.default.createElement("div", {
              className: "character-card__actions"
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "character-card__button mt-15",
              onClick: onActionClick,
              label: texts.buttonText
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1015691194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConversationContext = exports.ConversationContext = void 0;
          var _react = require("react");
          const ConversationContext = exports.ConversationContext = _react.default.createContext({});
          const useConversationContext = () => _react.default.useContext(ConversationContext);
          exports.useConversationContext = useConversationContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 571928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useConversationContext)();
            const [title, setTitle] = _react.default.useState('');
            (0, _hooks.useBinder)([store.model], () => {
              setTitle(store.model?.title || '');
            });
            return _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']]
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2553172452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _header = require("./header");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              items
            };
            return _react.default.createElement(_context.ConversationContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: "ailearn-chat-container"
            }, _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId,
              container: "centered"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/characters-card",
        "from": "CharacterCard",
        "name": "CharacterCard"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'CharacterCard') && _export("CharacterCard", CharacterCard = require ? require('./views/characters-card').CharacterCard : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInRleHRzIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImxvZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJfaG9va3MiLCJIZWFkZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJhc3NpZ25tZW50IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9oZWFkZXIiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFD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