System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.14/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, CharacterCard, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_11 = _beyondJsReact18Widgets103Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/conversation",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-conversation",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/conversation.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/conversation/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/conversation.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1843069525,
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
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 711658769,
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
            async load(assignmentId, activityId) {
              try {
                const activity = new _core.Activity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
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
        hash: 137171848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useConversationContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignment/${store.paramsUri.assignmentId}`], ['Conversation', '']]
            }), _react.default.createElement("h4", {
              className: "h2 conversation__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1363117869,
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
          var _charactersCard = require("./characters-card");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
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
            }, _react.default.createElement("div", null, _react.default.createElement(_header.Header, null), _react.default.createElement(_charactersCard.CharacterCard, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiYWN0aXZpdHkiLCJBY3Rpdml0eSIsImlkIiwiaXNSZWFkeSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJDaGFyYWN0ZXJDYXJkIiwidGV4dHMiLCJ1c2VDb252ZXJzYXRpb25Db250ZXh0Iiwib25BY3Rpb25DbGljayIsImV2ZW50IiwibG9nIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZWxlY3RUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGFiZWwiLCJidXR0b25UZXh0IiwiQ29udmVyc2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInRpdGxlIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9oZWFkZXIiLCJfY2hhcmFjdGVyc0NhcmQiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhcmFjdGVycy1jYXJkLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFhLEtBQUEsR0FBQWhCLE9BQUE7VUFFQSxJQUFBaUIsTUFBQSxHQUFBakIsT0FB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