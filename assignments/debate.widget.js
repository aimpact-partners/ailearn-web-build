System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp0032ComponentsHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/debate.widget');
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
        hash: 3429503819,
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
            get hasAudio() {
              return this.#model?.materials?.audios?.length > 0;
            }
            #found;
            get found() {
              return this.#found;
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
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
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
        hash: 2532971169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function DesktopView() {
            const {
              store,
              chatId,
              assignmentId,
              texts
            } = (0, _context.useConversationContext)();
            console.log(20);
            return _react.default.createElement("div", {
              className: "page-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId
            }), _react.default.createElement("aside", {
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
        hash: 1251216433,
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
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
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
        hash: 1947077886,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _react = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }), _react.default.createElement("aimpact-chat-control", {
              id: chatId,
              "assignment-id": assignmentId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsIml0ZW1zIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImNoYXRJZCIsInJlYWR5IiwiaGFzQXVkaW8iLCJtYXRlcmlhbHMiLCJhdWRpb3MiLCJsZW5ndGgiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJpc1JlYWR5IiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsYWJlbCIsImJ1dHRvblRleHQiLCJDb252ZXJzYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJEZXNrdG9wVmlldyIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIlBhZ2VDb250YWluZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsImltYWdlIiwiZW50aXR5IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJDb250cm9sIiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFH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