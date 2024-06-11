System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.46.dev-16/main-layout.widget", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-16/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, View, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    View: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
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
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0046Dev16MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev16MainLayoutWidget;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_8 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_9 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_10 = _aimpactChatSdk100Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_11 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_pragmateUi011Alert) {
      dependency_14 = _pragmateUi011Alert;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100Session) {
      dependency_16 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev16ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0046Dev16ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_20 = _pragmateUi011Icons;
    }, function (_pragmateUi011Modal) {
      dependency_21 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-16"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-16/assignments/spoken.widget');
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
        hash: 2521993515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatControl = require("@aimpact/chat/chat-control.widget");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #items;
            get items() {
              return this.#items;
            }
            #audioManager = new _chatControl.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
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
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              this.#recorder = new _recorder.Recorder();
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
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
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            sendSpoken = async audio => {
              try {
                const params = {
                  audio,
                  ...this.#paramsUri
                };
                return this.model.publishSpoken({
                  params,
                  type: 'spoken'
                });
              } catch (e) {
                super.ready = true;
                this.#found = false;
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 3153650538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          function Feedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const keys = Object.keys(store.model.data);
            return _react.default.createElement(_react.default.Fragment, null, keys.map((property, index) => {
              const item = store.model.data[property];
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, item.icon), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 2639330932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          function Analysis() {
            const {
              texts: {
                assessments: texts
              },
              store,
              setView
            } = (0, _context.useSpokenContext)();
            const [content, setContent] = _react.default.useState('feedback');
            const onRedo = event => {
              event.preventDefault();
              setView('recording');
            };
            const views = {
              feedback: _feedback.Feedback
            };
            const View = views[content];
            const changeView = event => {
              setContent(event.currentTarget.dataset.view);
            };
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              onClick: onRedo
            }, texts.redo))))), _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "activity__info"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })), _react.default.createElement(View, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/audio-player
      ************************************/

      ims.set('./views/audio-player', {
        hash: 1190578037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3296568220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpokenContext = exports.SpokenContext = void 0;
          var _react = require("react");
          const SpokenContext = exports.SpokenContext = _react.default.createContext({});
          const useSpokenContext = () => _react.default.useContext(SpokenContext);
          exports.useSpokenContext = useSpokenContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1693468854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("@aimpact/chat/shared/components");
          var _analysis = require("./analysis");
          var _recording = require("./recording");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setView(!!store.model?.data ? 'analysis' : 'recording');
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              fetching: store.fetching,
              items,
              audio: store.recorder.audio,
              setView,
              sending,
              setSending,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const Control = view === 'analysis' ? _analysis.Analysis : _recording.RecordingControl;
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(Control, null))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 2375701035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio
            } = (0, _context.useSpokenContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await recorder.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const playAction = async event => {
              try {
                setFetching(true);
                if (!hasPermission || hasPermission !== 'true') {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await recorder.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                console.log('permisos no concedidos');
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              _mainLayout.LayoutBroker.ensureCredits(playAction);
            };
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 153949891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _timer = require("../timer");
          var _context = require("../context");
          var _tabs = require("./tabs");
          var _result = require("./result");
          var _button = require("./button");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store
            } = (0, _context.useSpokenContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.ButtonTabs, {
              available: !!store.model.data
            }), _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "activity__info"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })), _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            }), _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processMessages[0])))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 957625054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 3648048102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending
            } = (0, _context.useSpokenContext)();
            if (!show) return;
            const onSend = event => {
              event.preventDefault();
              setSending(true);
              store.sendSpoken(audio).then(response => {
                setView('analysis');
                setSending(false);
              });
              setTimeout(() => {
                globalThis.setTimeout(() => {
                  if (sending) setSending(false);
                }, 45000);
              }, 100);
            };
            return _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: store.recorder.audio
            }), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, texts.send));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/recording/tabs
      **************************************/

      ims.set('./views/recording/tabs', {
        hash: 2166838320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ButtonTabs({
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => setView('analysis');
            if (!available) return null;
            return _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 1,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.assessments.analysis), _react.default.createElement(_components.Button, null, texts.assessments.redo))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 2475814657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useSpokenContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = ['restart', 'reset'].includes(action);
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart, action === 'reset');
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", null, `${minutesRendered}`), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
        hash: 1583638382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart, reset = true) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (reset) setTime(0);
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => {
                    return prevTime + 1;
                  });
                }, 10); // 10 ms interval for tracking milliseconds
              }

              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/audio-player').AudioPlayer : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiVm9pY2UiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIlJlY29yZGVyIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJlIiwiY29uc29sZSIsInRyYWNlIiwic2VuZFNwb2tlbiIsImF1ZGlvIiwicGFyYW1zIiwicHVibGlzaFNwb2tlbiIsIl9yZWFjdCIsIl9jb250ZXh0IiwiRmVlZGJhY2siLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGF0YSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsIm5hbWUiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiaWNvbiIsImZlZWRiYWNrIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJfbWFya2Rvd24iLCJfZmVlZGJhY2siLCJfc2Vzc2lvbiIsIkFuYWx5c2lzIiwiYXNzZXNzbWVudHMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwib25SZWRvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmlldyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwidmFyaWFudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJhbmFseXNpcyIsInJlZG8iLCJBbGVydCIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfaG9va3MiLCJzZXRSZWFkeSIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQ29udHJvbCIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIlBhZ2VDb250YWluZXIiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJlcnJvciIsInNldEVycm9yIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicmVjb3JkIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsInN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJlbnN1cmVQbGF5IiwiZW5zdXJlQ3JlZGl0cyIsIm9uQWN0aW9uIiwib25DbG9zZSIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJfaWNvbnMiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsIkljb24iLCJfdGltZXIiLCJfdGFicyIsIl9yZXN1bHQiLCJfYnV0dG9uIiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJCdXR0b25UYWJzIiwiYXZhaWxhYmxlIiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzTWVzc2FnZXMiLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0Iiwic2VuZCIsInVzZVJlY29yZGluZyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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