System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.18/components/ui", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
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
    }, function (_aimpactChat101ChatWidget) {
      dependency_5 = _aimpactChat101ChatWidget;
    }, function (_beyondJsReactive116Model) {
      dependency_6 = _beyondJsReactive116Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_7 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0018ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0018ComponentsUi;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_14 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_16 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/content",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/chat-sdk/widgets/playable', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-content",
        "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/content.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/assignments/content.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3286864425,
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
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3143011401,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _chat = require("@aimpact/chat/chat.widget");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@bgroup/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #audioManager = new _chat.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              this.#recorder = new _recorder.Recorder();
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
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                this.#introduction = activity.assessment;
                this.ready = true;
                this.triggerEvent();
                //await this.#process();
              } catch (e) {
                console.error(e);
              }
            }
            #process() {
              // AiLearnWrapper.sessionModel = this.#model;
              // AiLearnWrapper.sessionAssessment = this.#assessment;
              this.#introduction = this.#model.items.get('introduction').value.replace('%1', _session.sessionWrapper.user.displayName);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2276632942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContentContext = exports.ContentContext = void 0;
          var _react = require("react");
          const ContentContext = exports.ContentContext = _react.default.createContext({});
          const useContentContext = () => _react.default.useContext(ContentContext);
          exports.useContentContext = useContentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 624628268,
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
            } = (0, _context.useContentContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Content', '']]
            }), _react.default.createElement("h4", {
              className: "h2 content__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2930801095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _components2 = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const panesRef = _react.default.useRef(null);
            const elements = store.model;
            //const content = elements.has('content') ? elements.get('content').value : undefined;
            //const synthesis = elements.has('synthesis') ? elements.get('synthesis').value : undefined;
            const intro = store.introduction;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components2.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              items
            };
            const onSelectView = event => {
              const target = event.currentTarget;
              const {
                element
              } = event.currentTarget.dataset;
              const panes = panesRef.current.querySelectorAll('.intro__pane');
              target.closest('.badges__container').querySelectorAll('.badge').forEach(badge => badge.classList.remove('active'));
              target.classList.add('active');
              panes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.dataset.element === element) pane.classList.add('active');
              });
            };
            const headerList = [{
              url: '/',
              status: 'waiting'
            }, {
              url: '/',
              status: 'current'
            }, {
              url: '/',
              status: 'waiting'
            }];
            return 'content';
            return _react.default.createElement(_context.ContentContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", null, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("section", null, _react.default.createElement(_ui.HeaderCard, {
              option: 'light',
              list: headerList
            }, _react.default.createElement("p", null, "An Inspector Calls")), _react.default.createElement("header", {
              className: "intro__content__header my-20"
            }, _react.default.createElement("p", null, intro)), _react.default.createElement("section", {
              className: "badges__container my-10"
            }, _react.default.createElement(_components.ButtonGroup, {
              selected: 0
            }, _react.default.createElement(_components.Button, {
              "data-element": "synthesis",
              onClick: onSelectView
            }, texts.elements.synthesis), _react.default.createElement(_components.Button, {
              "data-element": "content",
              onClick: onSelectView
            }, texts.elements.content))), _react.default.createElement("section", {
              className: "intro__panes",
              ref: panesRef
            }, _react.default.createElement("article", {
              className: "intro__pane intro__synthesis active",
              "data-element": "synthesis"
            }, _react.default.createElement(_markdown.Markdown, {
              content: synthesis
            })), _react.default.createElement("article", {
              className: "intro__pane intro__synthesis",
              "data-element": "content"
            }, _react.default.createElement(_playable.Playable, {
              player: store.voice,
              content: content,
              id: "content"
            })))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9jaGF0IiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ2b2ljZSIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInJlY29yZGVyIiwicGFyYW1zVXJpIiwiY29uc3RydWN0b3IiLCJWb2ljZSIsIlJlY29yZGVyIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJhc3Nlc3NtZW50IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIl9yZWFjdCIsIkNvbnRlbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl9tYXJrZG93biIsIl9wbGF5YWJsZSIsIl9jb21wb25lbnRzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiaW50cm8iLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImhlYWRlckxpc3QiLCJ1cmwiLCJzdGF0dXMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwibGlzdCIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwic3ludGhlc2lzIiwiY29udGVudCIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7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