System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_7 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_9 = _aimpactAilearnApp0024Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/chat",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-chat",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/chat.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/activity/${activityId}/chat/${chatId}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/chat.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4029694674,
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
              console.log('showing widget', this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('id'));
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
        hash: 3737613349,
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
            return _react.default.createElement(_ui.PageHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwicGFyYW1zVXJpIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJpc1JlYWR5IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInRleHRzIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJfaG9va3MiLCJIZWFkZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJfaGVhZGVyIiwic2V0UmVhZHkiLCJzZXRJdGVtcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFyYWN0ZXJzLWNhcmQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FDVixnQkFBZ0IsRUFDaEIsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FDdkI7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