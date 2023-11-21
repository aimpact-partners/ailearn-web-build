System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/components/ui", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
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
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_14 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/content",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/chat-sdk/widgets/playable', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-content",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/content.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/content.widget');
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
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 795404480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Model = void 0;
          const HARDCODED = {
            content: {
              id: '47290661-11db-4fc5-a031-a8a0e7157efe',
              type: 'content',
              value: '¡Bienvenido a una emocionante aventura a través del tiempo! En esta lección, nos embarcaremos en un viaje a través de la historia reciente de Argentina, explorando eventos cruciales que han moldeado la nación tal como la conocemos hoy. ¿Alguna vez te has preguntado cómo se formó la democracia en Argentina? ¿Cómo logró el país superar los oscuros días de la dictadura militar? ¡Prepárate para descubrirlo!\n\nNuestro objetivo curricular es comprender el comienzo de la democracia en Argentina. Abordaremos dos temas principales: el golpe de Estado de 1983 y el fin de la dictadura militar, seguido por la presidencia de Raúl Alfonsín y la transición a la democracia. \n\nEste conocimiento es relevante por varias razones. Primero, te permitirá entender mejor el contexto político y social actual de Argentina. Segundo, te proporcionará una base sólida para comprender los desafíos y triunfos de la democracia en general. Tercero, te ayudará a desarrollar una perspectiva crítica y reflexiva sobre la historia y la política.\n\nEstos dos temas están intrínsecamente vinculados. El golpe de Estado de 1983 marcó el fin de un oscuro período de dictadura militar y abrió el camino para la transición a la democracia. La presidencia de Raúl Alfonsín fue un hito en esta transición, marcando el comienzo de una nueva era de gobierno democrático. Por lo tanto, para entender completamente el comienzo de la democracia en Argentina, debemos explorar ambos temas en detalle.\n\nAsí que, ¡prepárate para un viaje fascinante a través de la historia de Argentina!'
            },
            assessment: {
              id: '7df69452-5ab7-4ff6-a0bf-47b190836824',
              type: 'assessment',
              value: JSON.parse('\n\t\t{  "assessment": [    \n\t\t\t{\n\t\t\t  "title": "Evaluacion",\n\t\t\t  "questions": [        \n\t\t\t\t{\n\t\t\t\t  "text": "¿Cual ha sido tu experiencia con este contenido?",\n\t\t\t\t  "options": [\n\t\t\t\t\t"Mala",\n\t\t\t\t\t"Regular",\n\t\t\t\t\t"Buena",\n\t\t\t\t\t"Excelente"          \n\t\t\t\t  ],\n\t\t\t\t  "correct_answer": 0\n\t\t\t\t}  \n\t\t\t  ]\n\t\t\t}\n\t\t\t]\n\t\t  }\n\t\t')
            },
            introduction: {
              id: '02ae8a8b-c742-49fd-bc9e-855b1a1da98a',
              type: 'introduction',
              value: '¡Hola %1! Soy Max, tu guía en este viaje de aprendizaje. Ya tienes el texto de la lección en tu pantalla. Te sugiero que lo leas detenidamente. Una vez que hayas terminado, estaré aquí para ayudarte a analizarlo, responder a tus preguntas y aclarar cualquier duda que puedas tener. Recuerda, no hay preguntas tontas, así que no dudes en preguntar cualquier cosa que no entiendas. ¡Empecemos!'
            },
            synthesis: {
              id: 'b88041ca-491c-42d2-9ab6-ae1f5eabaa67',
              type: 'synthesis',
              value: '- **Comienzo de la democracia en Argentina**\n  - *Golpe de Estado de 1983*\n    - Marca el fin de la dictadura militar\n    - Abre el camino para la transición a la democracia\n  - *Presidencia de Raúl Alfonsín*\n    - Hito en la transición a la democracia\n    - Marca el comienzo de una nueva era de gobierno democrático\n- **Relevancia del conocimiento**\n  - Entender mejor el contexto político y social actual de Argentina\n  - Proporcionar una base sólida para comprender los desafíos y triunfos de la democracia\n  - Ayudar a desarrollar una perspectiva crítica y reflexiva sobre la historia y la política\n- **Interconexión de los temas**\n  - Para entender completamente el comienzo de la democracia en Argentina, es necesario explorar tanto el golpe de Estado de 1983 como la presidencia de Raúl Alfonsín.'
            }
          };
          class Model {
            #elements = new Map();
            get items() {
              return this.#elements;
            }
            constructor() {
              Object.keys(HARDCODED).forEach(key => {
                this.#elements.set(key, HARDCODED[key]);
              });
            }
          }
          exports.Model = Model;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2247679351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _chat = require("@aimpact/chat/chat.widget");
          var _model = require("./model");
          var _model2 = require("@beyond-js/reactive/model");
          var _recorder = require("@bgroup/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model2.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #isTopic;
            get isTopic() {
              return !!this.#isTopic;
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
            #user;
            get user() {
              return this.#user;
            }
            #module;
            get module() {
              return this.#module;
            }
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              this.#recorder = new _recorder.Recorder();
              this.#model = new _model.Model();
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
                const response = await activity.load({
                  id: activityId,
                  assignmentId
                });
                this.#module = response.module;
                this.#user = response.user;
                activity.set(response.activity);
                this.ready = true;
                this.triggerEvent();
                await this.#process();
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
        hash: 2643668817,
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
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignment/${store.paramsUri.assignmentId}`], ['Class', `/assignment/${store.paramsUri.assignmentId}`], ['Content']]
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
        hash: 3474055548,
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
            const elements = store.model.items;
            const content = elements.has('content') ? elements.get('content').value : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis').value : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXQiLCJfbW9kZWwiLCJfbW9kZWwyIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpc1RvcGljIiwidm9pY2UiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInVzZXIiLCJtb2R1bGUiLCJWb2ljZSIsIlJlY29yZGVyIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpc1JlYWR5IiwicmVzcG9uc2UiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInByb2Nlc3MiLCJlIiwiY29uc29sZSIsImVycm9yIiwiI3Byb2Nlc3MiLCJyZXBsYWNlIiwic2Vzc2lvbldyYXBwZXIiLCJkaXNwbGF5TmFtZSIsIl9yZWFjdCIsIkNvbnRlbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl9tYXJrZG93biIsIl9wbGF5YWJsZSIsIl9jb21wb25lbnRzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJwYW5lc1JlZiIsInVzZVJlZiIsImhhcyIsInVuZGVmaW5lZCIsImludHJvIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImhlYWRlckxpc3QiLCJ1cmwiLCJzdGF0dXMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwibGlzdCIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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