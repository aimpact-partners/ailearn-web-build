System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.42/coins-layout.widget", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.42/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0042CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0042CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0042ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0042ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.42"], ["@aimpact/ailearn-app", "0.0.42"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.42/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.42/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.42/assignments/spoken.widget');
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
        hash: 3260433500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                console.trace(e);
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl9jaGF0Q29udHJvbCIsIl9tb2RlbCIsIl9yZWNvcmRlciIsIl92b2ljZSIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJhc3NpZ25tZW50SWQiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJ2b2ljZSIsInJlY29yZGVyIiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmFja2luZyIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiZSIsImNvbnNvbGUiLCJ0cmFjZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX21hcmtkb3duIiwiX2ZlZWRiYWNrIiwiX3Nlc3Npb24iLCJBbmFseXNpcyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2hvb2tzIiwic2V0UmVhZHkiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0NvbnRyb2wiLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dTZW5kIiwibWVzc2FnZSIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInJlY29yZCIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJzdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwibG9nIiwiZW5zdXJlUGxheSIsImVuc3VyZUNyZWRpdHMiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiX2ljb25zIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3RpbWVyIiwiX3RhYnMiLCJfcmVzdWx0IiwiX2J1dHRvbiIsImNscyIsImJ1dHRvblNwZWNzIiwiQnV0dG9uVGFicyIsImF2YWlsYWJsZSIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc01lc3NhZ2VzIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy90YWJzLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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