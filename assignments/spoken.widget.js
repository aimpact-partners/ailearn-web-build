System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32-beta.13/coins-layout.widget", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32-beta.13/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, View, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032Beta13CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032Beta13CoinsLayoutWidget;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_8 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_9 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_10 = _aimpactChatSdk100Voice;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011Alert) {
      dependency_13 = _pragmateUi011Alert;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100Session) {
      dependency_15 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032Beta13ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0032Beta13ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_19 = _pragmateUi011Icons;
    }, function (_pragmateUi011Modal) {
      dependency_20 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['react', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.13/assignments/spoken.widget');
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
        hash: 3749741947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _chatControl = require("@aimpact/chat/chat-control.widget");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
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
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              this.#recorder = new _recorder.Recorder();
            }
            async load(assignmentId, activityId) {
              try {
                super.ready = false;
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#model);
                  super.ready = true;
                  return;
                }
                this.#found = true;
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                super.ready = true;
                _coinsLayout.LayoutBroker.addModel(this.#model);
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
                this.triggerEvent();
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
        hash: 2782537436,
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
            const [view, setView] = _react.default.useState(!!store.model.data ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setView(!!store.model.data ? 'analysis' : 'recording');
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
        hash: 3438148106,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              _coinsLayout.LayoutBroker.ensureCredits(playAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX21hcmtkb3duIiwiX2ZlZWRiYWNrIiwiX3Nlc3Npb24iLCJBbmFseXNpcyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FuYWx5c2lzIiwiX3JlY29yZGluZyIsIl9ob29rcyIsInNldFJlYWR5IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJvblN1Ym1pdCIsIkNvbnRyb2wiLCJSZWNvcmRpbmdDb250cm9sIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiUGFnZUNvbnRhaW5lciIsIl9tb2RhbCIsIl9lcnJvck1vZGFsIiwiUmVjb3JkaW5nQnV0dG9uIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImVycm9yIiwic2V0RXJyb3IiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwic3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImxvZyIsImVuc3VyZVBsYXkiLCJlbnN1cmVDcmVkaXRzIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsIl9pY29ucyIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl90aW1lciIsIl90YWJzIiwiX3Jlc3VsdCIsIl9idXR0b24iLCJjbHMiLCJidXR0b25TcGVjcyIsIkJ1dHRvblRhYnMiLCJhdmFpbGFibGUiLCJUaW1lciIsIlJlY29yZGluZ1Jlc3VsdCIsInByb2Nlc3NNZXNzYWdlcyIsInN1YnRpdGxlIiwiaW50cm8iLCJfYXVkaW9QbGF5ZXIiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvYnV0dG9uLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvcmVzdWx0LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdGFicy50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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