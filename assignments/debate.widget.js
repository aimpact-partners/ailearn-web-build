System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-beta.12/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-beta.12/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32-beta.12/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, DesktopView, View, MobileView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    DesktopView: void 0,
    View: void 0,
    MobileView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0032Beta12CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Beta12CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Beta12ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Beta12ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032Beta12ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032Beta12ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.12"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.12/assignments/debate.widget');
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
        hash: 2033716279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #assignmentId;
            #activityId;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #chatId;
            get chatId() {
              return this.#chatId;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#model);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
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
                _coinsLayout.LayoutBroker.addModel(this.#model);
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                this.#found = true;
                super.ready = true;
                console.log(3);
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
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

      /****************************
      INTERNAL MODULE: ./views/chat
      ****************************/

      ims.set('./views/chat', {
        hash: 3850554498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          function ChatControl() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            const onClick = () => _coinsLayout.LayoutBroker.ensureCredits(() => {});
            if (!store.hasCredits) {
              return _react.default.createElement(_ui.ChatPreload, {
                text: texts.noCredits,
                onClick: onClick
              });
            }
            return _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3226836486,
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

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 97198126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chat = require("./chat");
          /*bundle*/
          function DesktopView() {
            const {
              store,
              texts
            } = (0, _context.useConversationContext)();
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement(_chat.ChatControl, null), _react.default.createElement("aside", {
              className: "content-activity__aside"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.image,
              entity: "assignment"
            }), _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.model.description))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2718327468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [title, setTitle] = _react.default.useState('');
            const size = (0, _hooks2.useMediaQuery)();
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            (0, _hooks.useBinder)([store], () => {
              console.log('me disparo', store.ready);
              setReady(store.ready);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items
            };
            const Control = size === 'md' || size === 'lg' ? _desktop.DesktopView : _mobile.MobileView;
            return _react.default.createElement(_context.ConversationContext.Provider, {
              value: contextValue
            }, _react.default.createElement(Control, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 906907669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chat = require("./chat");
          /*bundle*/
          function MobileView() {
            const {
              store,
              chatId,
              assignmentId
            } = (0, _context.useConversationContext)();
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--container"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.image,
              entity: "assignment"
            }), _react.default.createElement(_chat.ChatControl, null)));
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
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'CharacterCard') && _export("CharacterCard", CharacterCard = require ? require('./views/characters-card').CharacterCard : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiZm91bmQiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIl91aSIsIkNoYXRDb250cm9sIiwiZW5zdXJlQ3JlZGl0cyIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiRGVza3RvcFZpZXciLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiaWNvbiIsInR5cGUiLCJQYWdlQ29udGFpbmVyIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJpbWFnZSIsImVudGl0eSIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRUaXRsZSIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiQ29udHJvbCIsIk1vYmlsZVZpZXciLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY2hhdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJ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