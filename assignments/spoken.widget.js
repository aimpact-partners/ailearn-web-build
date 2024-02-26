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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 599655790,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Spoken', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIlZvaWNlIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImdsb2JhbFRoaXMiLCJhIiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJhbmFseXNpc1RpdGxlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwidGl0bGUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfYW5hbHlzaXMiLCJfaGVhZGVyIiwiX3JlY29yZGluZyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0J1dHRvbiIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9hdWRpb1BsYXllciIsIl9pbWFnZSIsIl9tb2RhbCIsIl90aW1lciIsIl9hbGVydCIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInRoZW4iLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJ0ZXh0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImFsZXJ0Q29udGVudCIsInJlc291cmNlcyIsInNwZWNzIiwidGFzayIsIkFsZXJ0IiwiTWFya2Rvd24iLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJzZW5kIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFD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