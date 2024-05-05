System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, View, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    View: void 0,
    RecordingButton: void 0
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_8 = _beyondJsReactive1112Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_9 = _bgroupMediaManager100Recorder;
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
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_19 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_20 = _pragmateUi011Modal;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['react', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/spoken.widget');
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
        hash: 374197372,
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
          var _recorder = require("@bgroup/media-manager/recorder");
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
        hash: 115454387,
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
        hash: 694765734,
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
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const Control = view === 'analysis' ? _analysis.Analysis : _recording.RecordingButton;
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

      /*********************************
      INTERNAL MODULE: ./views/recording
      *********************************/

      ims.set('./views/recording', {
        hash: 3677007537,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _audioPlayer = require("./audio-player");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _timer = require("./timer");
          var _context = require("./context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          const RecordingButton = ({
            disabled = false
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio,
              setView,
              store
            } = (0, _context.useSpokenContext)();
            const [action, setAction] = _react.default.useState('');
            const [sending, setSending] = _react.default.useState(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const onPlay = async event => {
              try {
                event.preventDefault();
                const recordingState = !recording;
                const permission = await recorder.hasPermissions();
                if (permission.state !== 'granted') setShowModal(true);
                await recorder.record();
                setRecording(recordingState);
                setAction('start');
              } catch (e) {
                console.error('error in on play', e);
              }
            };
            const onStop = async event => {
              await recorder.stop();
              setRecording(false);
              setAction('reset');
            };
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
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
            const icon = recording ? 'stop' : 'mic';
            const onAction = action === 'start' ? onStop : () => _coinsLayout.LayoutBroker.ensureCredits(onPlay);
            _coinsLayout.LayoutBroker;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const onClose = event => {
              setShowModal(false);
            };
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const changeView = event => setView('analysis');
            return _react.default.createElement(_react.default.Fragment, null, !!store.model.data && _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 1,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.assessments.analysis), _react.default.createElement(_components.Button, null, texts.assessments.redo)))), _react.default.createElement(_alert.Alert, {
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
            }), showModal && _react.default.createElement(_modal.Modal, {
              className: "permissions-modal",
              open: true,
              show: true,
              onClose: onClose
            }, _react.default.createElement("h3", null, store.title), _react.default.createElement(_image.Image, {
              src: "/assets/permissions2.svg"
            }), _react.default.createElement("p", null, store.description), _react.default.createElement("footer", {
              className: "mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClose
            }, texts.assessments.record))), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              onClick: onAction,
              disabled: disabled
            }, texts[message]), showSend && _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: store.recorder.audio
            }), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, texts.send))), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processMessages[0])))));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 518301096,
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
        "im": "./views/recording",
        "from": "RecordingButton",
        "name": "RecordingButton"
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
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording').RecordingButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX21hcmtkb3duIiwiX2ZlZWRiYWNrIiwiX3Nlc3Npb24iLCJBbmFseXNpcyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FuYWx5c2lzIiwiX3JlY29yZGluZyIsIl9ob29rcyIsInNldFJlYWR5IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQnV0dG9uIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiUGFnZUNvbnRhaW5lciIsIl9hdWRpb1BsYXllciIsIl9pbWFnZSIsIl9tb2RhbCIsIl90aW1lciIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwiZXJyb3IiLCJvblN0b3AiLCJzdG9wIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwib25TZW5kIiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsImdsb2JhbFRoaXMiLCJvbkFjdGlvbiIsImVuc3VyZUNyZWRpdHMiLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwic2VuZCIsInByb2Nlc3NNZXNzYWdlcyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEs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