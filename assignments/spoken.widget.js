System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.11/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/alert", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, Header, View, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    Header: void 0,
    View: void 0,
    RecordingButton: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_5 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1111Model) {
      dependency_6 = _beyondJsReactive1111Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_7 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_12 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Alert) {
      dependency_16 = _pragmateUi006Alert;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_17 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006Image) {
      dependency_19 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat-control.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/spoken.widget');
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
        hash: 207947195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
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
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#recorder = new _recorder.Recorder();
            }
            async load(assignmentId, activityId) {
              try {
                this.ready = false;
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                globalThis.a = activity;
                this.#model = activity;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
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
                console.error(e);
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
        hash: 481244201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          function Analysis() {
            const {
              texts: {
                assessments: texts
              },
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
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: "mb-15"
            }, texts.analysisTitle), _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              onClick: onRedo
            }, texts.redo))))), _react.default.createElement(View, null));
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1604148196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [texts.breadcrumb.spoken, '']]
            }), _react.default.createElement("h4", {
              className: "h2 spoken__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3139538752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _analysis = require("./analysis");
          var _header = require("./header");
          var _recording = require("./recording");
          var _context = require("./context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = _react.default.useState(!!store.model.data ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setView(!!store.model.data ? 'analysis' : 'recording');
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light"
            }, _react.default.createElement("p", null, store.model.title)), _react.default.createElement(Control, null))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/recording
      *********************************/

      ims.set('./views/recording', {
        hash: 96275224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _audioPlayer = require("./audio-player");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _timer = require("./timer");
          var _alert = require("pragmate-ui/alert");
          var _context = require("./context");
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
              const audio = await recorder.stop();
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
                const text = ref.current.querySelector('.sending-message');
                const contents = texts.assessments.processMessages;
                let i = 1;
                let intervalDots;
                const interval = globalThis.setInterval(() => {
                  text.classList.remove('fade-out-up');
                  text.classList.add('fade-in-up');
                  setTimeout(() => {
                    text.classList.remove('fade-in-up');
                    text.classList.add('fade-out-up');
                  }, 8000);
                  text.innerHTML = contents[i];
                  let dots = '.';
                  intervalDots = setInterval(() => {
                    if (dots === '.') {
                      dots = '..';
                    } else if (dots === '..') {
                      dots = '...';
                    } else {
                      dots = '.';
                    }
                    text.innerHTML = contents[i] + '<br>' + dots;
                  }, 1000);
                  if (i === contents.length - 1) i = 0;
                  i++;
                }, 8000);
                globalThis.setTimeout(() => {
                  if (sending) setSending(false);
                }, 45000);
              }, 100);
            };
            const icon = recording ? 'stop' : 'mic';
            const onAction = action === 'start' ? onStop : onPlay;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const onClose = event => {
              setShowModal(false);
            };
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.Alert, {
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
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIlZvaWNlIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImdsb2JhbFRoaXMiLCJhIiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJhbmFseXNpc1RpdGxlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsInNwb2tlbiIsInRpdGxlIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2FuYWx5c2lzIiwiX2hlYWRlciIsIl9yZWNvcmRpbmciLCJfaG9va3MyIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJvblN1Ym1pdCIsIkNvbnRyb2wiLCJSZWNvcmRpbmdCdXR0b24iLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiX3Nlc3Npb24iLCJfbWFya2Rvd24iLCJfYXVkaW9QbGF5ZXIiLCJfaW1hZ2UiLCJfbW9kYWwiLCJfdGltZXIiLCJfYWxlcnQiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwidGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIm9uQWN0aW9uIiwiY2xzIiwib25DbG9zZSIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJBbGVydCIsIk1hcmtkb3duIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFD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