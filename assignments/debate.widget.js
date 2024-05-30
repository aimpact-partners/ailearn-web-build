System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.45/coins-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.45/components/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0045CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0045CoinsLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0045ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0045ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/assignments/debate.widget');
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
        hash: 3516754202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
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
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                this.#chatId = chatId;
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = new _tracking.Tracking({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _coinsLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
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
        hash: 19038571,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ChatControl() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            const onClick = () => _coinsLayout.LayoutBroker.ensureCredits(() => {});
            const [hasCredits, setHasCredits] = _react.default.useState(store.hasCredits);
            //'credits.change'
            (0, _hooks.useBinder)([store.model], () => {
              setHasCredits(store.hasCredits);
            }, 'credits.change');
            if (!hasCredits) {
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
        hash: 1756712869,
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
            }, _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              type: store.model.type,
              src: store.model.picture,
              entity: "activity"
            }), _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.model.description)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2564894817,
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
            const size = (0, _hooks2.useMediaQuery)();
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            (0, _hooks.useBinder)([store], () => {
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
        hash: 1703638579,
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
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJpdGVtcyIsInBhcmFtc1VyaSIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJjaGF0SWQiLCJyZWFkeSIsImZvdW5kIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwidHJhY2tpbmciLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJpZCIsImUiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZWxlY3RUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGFiZWwiLCJidXR0b25UZXh0IiwiX3VpIiwiX2hvb2tzIiwiQ2hhdENvbnRyb2wiLCJlbnN1cmVDcmVkaXRzIiwic2V0SGFzQ3JlZGl0cyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiQ2hhdFByZWxvYWQiLCJ0ZXh0Iiwibm9DcmVkaXRzIiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJEZXNrdG9wVmlldyIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIlBhZ2VDb250YWluZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJkZXNjcmlwdGlvbiIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRSZWFkeSIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiQ29udHJvbCIsIk1vYmlsZVZpZXciLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY2hhdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7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