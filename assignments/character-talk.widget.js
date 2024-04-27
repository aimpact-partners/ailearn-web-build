System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/ui"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    CharacterCard: void 0,
    View: void 0
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
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/coins-layout.widget', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3537792020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [title, setTitle] = _react.default.useState('');
            const setBreadcrumb = texts => {
              _coinsLayout.LayoutBroker.breadcrumb = [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']];
            };
            const [textsReady, texts] = (0, _ui.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            (0, _hooks.useBinder)([store], () => {
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
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiYWN0aXZpdHkiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiQ2hhcmFjdGVyQ2FyZCIsInRleHRzIiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImxvZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0VGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsIkNvbnZlcnNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl9ob29rcyIsIl91aSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRJdGVtcyIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRCcmVhZGNydW1iIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsImFzc2lnbm1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHNDYWxsYmFjayIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJBY3Rpdml0eUhlYWRlciIsImljb24iLCJ0eXBlIiwiY29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlHOztVQUNBQyxP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QkFBZ0IsRUFBQ2QsZUFBQSxDQUFBZSxNQUFNLENBQUNDLFNBQVMsRUFBRVAsYUFBYSxDQUFDO1lBQzdFLElBQUFQLE1BQUEsQ0FBQWUsU0FBUyxFQUFDLENBQUNuRSxLQUFLLENBQUNjLEtBQUssQ0FBQyxFQUFFLE1BQU00QyxRQUFRLENBQUMxRCxLQUFLLENBQUNjLEtBQUssRUFBRTJDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsRSxNQUFNdkMsWUFBWSxHQUFHWCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNUSxNQUFNLEdBQUdWLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUEyQyxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDbkUsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnNELFFBQVEsQ0FBQ3RELEtBQUssQ0FBQ3dCLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUNBLEtBQUssSUFBSSxDQUFDdUMsVUFBVSxFQUFFLE9BQU9sQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixXQUFBLENBQUFxQyxhQUFhLE9BQUc7WUFDbkQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCcEMsS0FBSztjQUNMcUMsUUFBUSxFQUFFdEUsS0FBSyxDQUFDc0UsUUFBUTtjQUN4QnRFLEtBQUs7Y0FDTGU7YUFDQTtZQUVELE9BQ0NjLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNULFFBQUEsQ0FBQWlCLG1CQUFtQixDQUFDd0IsUUFBUTtjQUFDQyxLQUFLLEVBQUVIO1lBQVksR0FDaER4QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxHQUFBLENBQUFvQixjQUFjO2NBQUNoQixLQUFLLEVBQUV6RCxLQUFLLENBQUNjLEtBQUssQ0FBQzJDLEtBQUs7Y0FBRWlCLElBQUksRUFBRTFFLEtBQUssQ0FBQ2MsS0FBSyxDQUFDNkQsSUFBSTtjQUFFQSxJQUFJLEVBQUUzRSxLQUFLLENBQUNjLEtBQUssQ0FBQzZEO1lBQUksRUFBSSxFQUM1RjlDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF3QixHQUN0Q1gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBc0JqQixFQUFFLEVBQUVMLE1BQU07Y0FBQSxpQkFBaUJDLFlBQVk7Y0FBRTBELFNBQVMsRUFBQztZQUFVLEVBQUcsQ0FDakYsQ0FDd0I7VUFFakMiLCJpZ25vcmVMaXN0IjpbXX0=