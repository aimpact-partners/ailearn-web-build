System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, Header, View, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    Header: void 0,
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_5 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_7 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011Alert) {
      dependency_11 = _pragmateUi011Alert;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_19 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi011Image) {
      dependency_20 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_21 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat-control.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/alert', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
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
        hash: 952715371,
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1039408152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
        hash: 2955841271,
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
        hash: 580222120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIlZvaWNlIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZW5kU3Bva2VuIiwiYXVkaW8iLCJwYXJhbXMiLCJwdWJsaXNoU3Bva2VuIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJGZWVkYmFjayIsInVzZVNwb2tlbkNvbnRleHQiLCJkYXRhIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwibmFtZSIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJpY29uIiwiZmVlZGJhY2siLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9tYXJrZG93biIsIl9mZWVkYmFjayIsIl9zZXNzaW9uIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsImFzc2lnbm1lbnQiLCJzcG9rZW4iLCJ0aXRsZSIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9hbmFseXNpcyIsIl9oZWFkZXIiLCJfcmVjb3JkaW5nIiwiX2hvb2tzMiIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQnV0dG9uIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsIl9hdWRpb1BsYXllciIsIl9pbWFnZSIsIl9tb2RhbCIsIl90aW1lciIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInRoZW4iLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJ0ZXh0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwiZ2xvYmFsVGhpcyIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIm9uQWN0aW9uIiwiY2xzIiwib25DbG9zZSIsIlRpbWVyIiwiTW9kYWwiLCJvcGVuIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsTUFBTWMsU0FBUyxHQUFHO1lBQ2pCQyxPQUFPLEVBQUU7Y0FDUkMsRUFBRSxFQUFFLHNDQUFzQztjQUMxQ0MsSUFBSSxFQUFFLFNBQVM7Y0FDZkMsS0FBSyxFQUFFO2FBQ1A7WUFDREMsVUFBVSxFQUFFO2NBQ1hILEVBQUUsRUFBRSxzQ0FBc0M7Y0FDMUNDLElBQUksRUFBRSxZQUFZO2NBQ2xCQyxLQUFLLEVBQUVFLElBQUksQ0FBQ0MsS0FBSyxDQUNoQixxWkFBcVo7YUFFdFo7WUFDREMsWUFBWSxFQUFFO2NBQ2JOLEVBQUUsRUFBRSxzQ0FBc0M7Y0FDMUNDLElBQUksRUFBRSxjQUFjO2NBQ3BCQyxLQUFLLEVBQUU7YUFDUDtZQUNESyxTQUFTLEVBQUU7Y0FDVlAsRUFBRSxFQUFFLHNDQUFzQztjQUMxQ0MsSUFBSSxFQUFFLFdBQVc7Y0FDakJDLEtBQUssRUFBRTs7V0FFUjtVQUVLLE1BQU9NLEtBQUs7WUFDakIsQ0FBQUMsUUFBUyxHQUFrQyxJQUFJQyxHQUFHLEVBQUU7WUFFcEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFGLFFBQVM7WUFDdEI7WUFDQUcsWUFBQTtjQUNDQyxNQUFNLENBQUNDLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQyxDQUFDaUIsT0FBTyxDQUFDQyxHQUFHLElBQUc7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBUCxRQUFTLENBQUNRLEdBQUcsQ0FBQ0QsR0FBRyxFQUFFbEIsU0FBUyxDQUFDa0IsR0FBRyxDQUFDLENBQUM7Y0FDeEMsQ0FBQyxDQUFDO1lBQ0g7O1VBQ0FuQixPQUFBLENBQUFXLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0QsSUFBQVUsS0FBQSxHQUFBckMsT0FBQTtVQUVBLElBQUFzQyxZQUFBLEdBQUF0QyxPQUFBO1VBRUEsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBd0MsU0FBQSxHQUFBeEMsT0FBQTtVQUNBLElBQUF5QyxNQUFBLEdBQUF6QyxPQUFBO1VBR00sTUFBT08sWUFBYSxTQUFRZ0MsTUFBQSxDQUFBRyxhQUFxQjtZQUV0RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBbEIsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQW1CLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLENBQUFkLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFlLFlBQWEsR0FBRyxJQUFJUCxZQUFBLENBQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSUQsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBMUIsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQTJCLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBbEIsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBZ0IsS0FBTSxHQUFHLElBQUlOLE1BQUEsQ0FBQVMsS0FBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUNOLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUksQ0FBQ08sU0FBUztjQUUzRCxJQUFJLENBQUMsQ0FBQUgsUUFBUyxHQUFHLElBQUlSLFNBQUEsQ0FBQVksUUFBUSxFQUFFO1lBQ2hDO1lBRUEsTUFBTXpDLElBQUlBLENBQUNpQyxZQUFZLEVBQUVTLFVBQVU7Y0FDbEMsSUFBSTtnQkFDSCxJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO2dCQUNsQixNQUFNQyxRQUFRLEdBQUcsSUFBSWxCLEtBQUEsQ0FBQW1CLGtCQUFrQixDQUFDO2tCQUN2Q3JDLEVBQUUsRUFBRWtDLFVBQVU7a0JBQ2RUO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDLENBQUFLLFNBQVUsR0FBRztrQkFDakJMLFlBQVk7a0JBQ1pTO2lCQUNBO2dCQUVELElBQUksQ0FBQyxDQUFBVixLQUFNLEdBQUdZLFFBQVE7Z0JBRXRCLE1BQU1BLFFBQVEsQ0FBQzVDLElBQUksQ0FBQztrQkFDbkJRLEVBQUUsRUFBRWtDLFVBQVU7a0JBQ2RUO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDVSxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUFHLFVBQVUsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDMUIsSUFBSTtnQkFNSCxNQUFNQyxNQUFNLEdBQVk7a0JBQUVELEtBQUs7a0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWI7Z0JBQVUsQ0FBRTtnQkFDckQsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ3FCLGFBQWEsQ0FBQztrQkFBRUQsTUFBTTtrQkFBRTNDLElBQUksRUFBRTtnQkFBUSxDQUFFLENBQUM7ZUFDM0QsQ0FBQyxPQUFPc0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDOztVQUNEMUMsT0FBQSxDQUFBVCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEdELElBQUEwRCxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWtFLFFBQUEsR0FBQWxFLE9BQUE7VUFFTSxTQUFVbUUsUUFBUUEsQ0FBQTtZQUN2QixNQUFNO2NBQUU5RDtZQUFLLENBQUUsR0FBRyxJQUFBNkQsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUVwQyxNQUFNbkMsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQzVCLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQzBCLElBQUksQ0FBQztZQUMxQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTixNQUFBLENBQUFLLE9BQUEsQ0FBQUUsUUFBQSxRQUNFdkMsSUFBSSxDQUFDd0MsR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxLQUFJO2NBQzdCLE1BQU1DLElBQUksR0FBR3ZFLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQzBCLElBQUksQ0FBQ0ssUUFBUSxDQUFDO2NBRXZDLE9BQ0NULE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2dCQUFTcEMsR0FBRyxFQUFFeUMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUFFQyxTQUFTLEVBQUM7Y0FBMkIsR0FDOUVkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2dCQUFTUSxTQUFTLEVBQUM7Y0FBdUIsR0FBRUgsSUFBSSxDQUFDSSxJQUFJLENBQVcsRUFDaEVmLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGtCQUNDTixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ04sTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsYUFBS0ssSUFBSSxDQUFDQyxJQUFJLENBQU0sQ0FDWixFQUNUWixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSyxJQUFJLENBQUNLLFFBQVEsQ0FBSyxDQUNiLENBQ0Q7WUFFWixDQUFDLENBQUMsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBQyxXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQWlFLE1BQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixTQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXFGLFNBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFzRixRQUFBLEdBQUF0RixPQUFBO1VBQ00sU0FBVXVGLFFBQVFBLENBQUE7WUFDdkIsTUFBTTtjQUNMQyxLQUFLLEVBQUU7Z0JBQUVDLFdBQVcsRUFBRUQ7Y0FBSyxDQUFFO2NBQzdCbkYsS0FBSztjQUNMcUY7WUFBTyxDQUNQLEdBQUcsSUFBQXhCLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTSxDQUFDbEQsT0FBTyxFQUFFeUUsVUFBVSxDQUFDLEdBQUcxQixNQUFBLENBQUFLLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBUyxVQUFVLENBQUM7WUFDaEUsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLElBQUc7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCTCxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNTSxLQUFLLEdBQUc7Y0FDYmYsUUFBUSxFQUFFSSxTQUFBLENBQUFsQjthQUNWO1lBQ0QsTUFBTTFELElBQUksR0FBR3VGLEtBQUssQ0FBQzlFLE9BQU8sQ0FBQztZQUMzQixNQUFNK0UsVUFBVSxHQUFHSCxLQUFLLElBQUc7Y0FDMUJILFVBQVUsQ0FBQ0csS0FBSyxDQUFDSSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO1lBQzdDLENBQUM7WUFDRCxNQUFNQyxRQUFRLEdBQUdmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ2hELE1BQU1DLFlBQVksR0FBR3BHLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQytELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLEVBQUU5QixPQUFPLENBQUMsSUFBSSxFQUFFdUIsUUFBUSxDQUFDO1lBQzlFLE9BQ0NwQyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGlCQUNDTixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGtCQUNDTixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxXQUFBLENBQUEyQixXQUFXO2NBQUNDLFFBQVEsRUFBRSxDQUFDO2NBQUVDLE9BQU8sRUFBQztZQUFTLEdBQzFDOUMsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csV0FBQSxDQUFBOEIsTUFBTTtjQUFBLGFBQVcsVUFBVTtjQUFDQyxPQUFPLEVBQUVoQjtZQUFVLEdBQzlDVCxLQUFLLENBQUMwQixRQUFRLENBQ1AsRUFDVGpELE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNXLFdBQUEsQ0FBQThCLE1BQU07Y0FBQ0MsT0FBTyxFQUFFcEI7WUFBTSxHQUFHTCxLQUFLLENBQUMyQixJQUFJLENBQVUsQ0FDakMsQ0FDTCxDQUNMLENBQ0UsRUFDVGxELE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNZLE1BQUEsQ0FBQWlDLEtBQUs7Y0FBQ2hHLElBQUksRUFBQyxNQUFNO2NBQUMyRCxTQUFTLEVBQUM7WUFBZ0IsR0FDNUNkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNhLFNBQUEsQ0FBQWlDLFFBQVE7Y0FBQ25HLE9BQU8sRUFBRXVGO1lBQVksRUFBSSxDQUM1QixFQUNSeEMsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzlELElBQUksT0FBRyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUF3RCxNQUFBLEdBQUFqRSxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVXNILFdBQVdBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1Q1RCxPQUFPLENBQUM2RCxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaRCxHQUFHLEdBQUdFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSCxHQUFHLENBQUM7WUFDOUIsTUFBTUksR0FBRyxHQUFHMUQsTUFBQSxDQUFBSyxPQUFLLENBQUNzRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCM0QsTUFBQSxDQUFBSyxPQUFLLENBQUN1RCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUMxQixNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2dCQUM3QixJQUFJRixNQUFNLENBQUNHLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2dCQUVsQ0osTUFBTSxDQUFDSyxXQUFXLEdBQUcsS0FBSztnQkFDMUJMLE1BQU0sQ0FBQ00sWUFBWSxHQUFHLE1BQUs7a0JBQzFCTixNQUFNLENBQUNNLFlBQVksR0FBRyxJQUFJO2tCQUMxQk4sTUFBTSxDQUFDSyxXQUFXLEdBQUcsQ0FBQztnQkFDdkIsQ0FBQztjQUNGLENBQUM7Y0FDREwsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRUMsWUFBWSxDQUFDO2NBRXZELE9BQU8sTUFBTVIsTUFBTSxDQUFDUyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7WUFDNUUsQ0FBQyxFQUFFLENBQUNULEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0N0RCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBYyxHQUM1QmQsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBT2lFLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakN4RSxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFRZ0QsR0FBRyxFQUFFQSxHQUFHO2NBQUVuRyxJQUFJLEVBQUMsV0FBVztjQUFDdUcsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFeEMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQSxJQUFBMUQsTUFBQSxHQUFBakUsT0FBQTtVQWVPLE1BQU0wSSxhQUFhLEdBQUExSCxPQUFBLENBQUEwSCxhQUFBLEdBQUd6RSxNQUFBLENBQUFLLE9BQUssQ0FBQ3FFLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU12RSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSCxNQUFBLENBQUFLLE9BQUssQ0FBQ3NFLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUMxSCxPQUFBLENBQUFvRCxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQnRFLElBQUF5RSxhQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQWlFLE1BQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUE4SSxPQUFBLEdBQUE5SSxPQUFBO1VBQ087VUFBVSxTQUFVK0ksTUFBTUEsQ0FBQTtZQUNoQyxNQUFNO2NBQUV2RCxLQUFLO2NBQUVuRjtZQUFLLENBQUUsR0FBRyxJQUFBNkQsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUUzQyxPQUNDSCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTixNQUFBLENBQUFLLE9BQUEsQ0FBQUUsUUFBQSxRQUNDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0UsYUFBQSxDQUFBRyxZQUFZO2NBQ1pDLFVBQVUsRUFBRSxDQUNYLENBQUNILE9BQUEsQ0FBQXhFLE9BQU0sQ0FBQ1AsTUFBTSxDQUFDbUYsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUM3QixDQUFDMUQsS0FBSyxDQUFDeUQsVUFBVSxDQUFDRSxVQUFVLEVBQUUsZ0JBQWdCOUksS0FBSyxDQUFDNEMsU0FBUyxDQUFDTCxZQUFZLEVBQUUsQ0FBQyxFQUM3RSxDQUFDNEMsS0FBSyxDQUFDeUQsVUFBVSxDQUFDRyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzdCLEVBQ0EsRUFDRm5GLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUlRLFNBQVMsRUFBQztZQUFrQixHQUFFUyxLQUFLLENBQUM2RCxLQUFLLENBQU0sQ0FDakQ7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXBGLE1BQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBc0osR0FBQSxHQUFBdEosT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBRUEsSUFBQXVKLE1BQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBd0osZUFBQSxHQUFBeEosT0FBQTtVQUVBLElBQUF5SixTQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTBKLE9BQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBMkosVUFBQSxHQUFBM0osT0FBQTtVQUNBLElBQUFrRSxRQUFBLEdBQUFsRSxPQUFBO1VBRUEsSUFBQTRKLE9BQUEsR0FBQTVKLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUNpRCxLQUFLLEVBQUV1RyxRQUFRLENBQUMsR0FBRyxJQUFBNUYsTUFBQSxDQUFBMkIsUUFBUSxFQUFDdkYsS0FBSyxDQUFDaUQsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUFtQyxNQUFBLENBQUEyQixRQUFRLEVBQUN2RixLQUFLLENBQUN5QixLQUFLLENBQUM7WUFDckMsTUFBTSxDQUFDZ0ksVUFBVSxFQUFFdEUsS0FBSyxDQUFDLEdBQUcsSUFBQStELE1BQUEsQ0FBQVEsUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzdELElBQUksRUFBRVYsT0FBTyxDQUFDLEdBQUd6QixNQUFBLENBQUFLLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBUyxDQUFDLENBQUN2RixLQUFLLENBQUNzQyxLQUFLLENBQUMwQixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUM3RixNQUFNLENBQUM2RixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbEcsTUFBQSxDQUFBSyxPQUFLLENBQUNzQixRQUFRLENBQVUsS0FBSyxDQUFDO1lBRWhFLElBQUFnRSxPQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDL0osS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QndKLFFBQVEsQ0FBQ3hKLEtBQUssQ0FBQ2lELEtBQUssQ0FBQztjQUNyQm9DLE9BQU8sQ0FBQyxDQUFDLENBQUNyRixLQUFLLENBQUNzQyxLQUFLLENBQUMwQixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUN2RCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNmLEtBQUssSUFBSSxDQUFDd0csVUFBVSxFQUFFLE9BQU83RixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxXQUFBLENBQUFtRixhQUFhLE9BQUc7WUFFbkQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCakssS0FBSztjQUNMMkMsUUFBUSxFQUFFM0MsS0FBSyxDQUFDMkMsUUFBUTtjQUN4QmtILFNBQVM7Y0FDVEMsWUFBWTtjQUNaM0UsS0FBSztjQUNMK0UsUUFBUSxFQUFFbEssS0FBSyxDQUFDa0ssUUFBUTtjQUN4QnpJLEtBQUs7Y0FDTGdDLEtBQUssRUFBRXpELEtBQUssQ0FBQzJDLFFBQVEsQ0FBQ2MsS0FBSztjQUMzQjRCLE9BQU87Y0FDUDhFLFFBQVEsRUFBRTFFLEtBQUssSUFBRztnQkFDakJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN0QjtjQUNEO2FBQ0E7WUFFRCxNQUFNMEUsT0FBTyxHQUFHckUsSUFBSSxLQUFLLFVBQVUsR0FBR3FELFNBQUEsQ0FBQWxFLFFBQVEsR0FBR29FLFVBQUEsQ0FBQWUsZUFBZTtZQUVoRSxPQUNDekcsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsY0FDQ04sTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsUUFBQSxDQUFBd0UsYUFBYSxDQUFDaUMsUUFBUTtjQUFDdEosS0FBSyxFQUFFaUo7WUFBWSxHQUMxQ3JHLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNtRixPQUFBLENBQUFYLE1BQU0sT0FBRyxFQUNWOUUsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQytFLEdBQUEsQ0FBQXNCLGFBQWEsUUFDYjNHLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUMrRSxHQUFBLENBQUF1QixVQUFVO2NBQUNDLE1BQU0sRUFBQztZQUFPLEdBQ3pCN0csTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsWUFBSWxFLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQzBHLEtBQUssQ0FBSyxDQUNkLEVBQ2JwRixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0csT0FBTyxPQUFHLENBQ0ksQ0FDUSxDQUNwQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBbkYsUUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQW1GLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBb0YsU0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUErSyxZQUFBLEdBQUEvSyxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBZ0wsTUFBQSxHQUFBaEwsT0FBQTtVQUNBLElBQUFpTCxNQUFBLEdBQUFqTCxPQUFBO1VBQ0EsSUFBQWtMLE1BQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUVPO1VBQVcsTUFBTTBLLGVBQWUsR0FBR0EsQ0FBQztZQUFFUyxRQUFRLEdBQUc7VUFBSyxDQUFFLEtBQUk7WUFDbEUsTUFBTTtjQUFFM0YsS0FBSztjQUFFeEMsUUFBUTtjQUFFa0gsU0FBUztjQUFFQyxZQUFZO2NBQUVyRyxLQUFLO2NBQUU0QixPQUFPO2NBQUVyRjtZQUFLLENBQUUsR0FBRyxJQUFBNkQsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUM5RixNQUFNLENBQUNnSCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHcEgsTUFBQSxDQUFBSyxPQUFLLENBQUNzQixRQUFRLENBQXlDLEVBQUUsQ0FBQztZQUN0RixNQUFNLENBQUMwRixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHdEgsTUFBQSxDQUFBSyxPQUFLLENBQUNzQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQzRGLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQXhILE1BQUEsQ0FBQTJCLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTThGLE1BQU0sR0FBRyxNQUFNNUYsS0FBSyxJQUFHO2NBQzVCLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN0QixNQUFNNEYsY0FBYyxHQUFHLENBQUN6QixTQUFTO2dCQUNqQyxNQUFNMEIsVUFBVSxHQUFHLE1BQU01SSxRQUFRLENBQUM2SSxjQUFjLEVBQUU7Z0JBQ2xELElBQUlELFVBQVUsQ0FBQ0UsS0FBSyxLQUFLLFNBQVMsRUFBRUwsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFFdEQsTUFBTXpJLFFBQVEsQ0FBQytJLE1BQU0sRUFBRTtnQkFDdkI1QixZQUFZLENBQUN3QixjQUFjLENBQUM7Z0JBQzVCTixTQUFTLENBQUMsT0FBTyxDQUFDO2VBQ2xCLENBQUMsT0FBTzNILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsa0JBQWtCLEVBQUVGLENBQUMsQ0FBQzs7WUFFdEMsQ0FBQztZQUNELE1BQU1zSSxNQUFNLEdBQUcsTUFBTWxHLEtBQUssSUFBRztjQUM1QixNQUFNaEMsS0FBSyxHQUFHLE1BQU1kLFFBQVEsQ0FBQ2lKLElBQUksRUFBRTtjQUNuQzlCLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDbkJrQixTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNMUQsR0FBRyxHQUFHMUQsTUFBQSxDQUFBSyxPQUFLLENBQUNzRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1zRSxRQUFRLEdBQUcsQ0FBQ2hDLFNBQVMsSUFBSXBHLEtBQUs7WUFDcEMsTUFBTXFJLE9BQU8sR0FBRyxDQUFDakMsU0FBUyxHQUFJZ0MsUUFBUSxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUksTUFBTTtZQUNwRSxNQUFNRSxNQUFNLEdBQUd0RyxLQUFLLElBQUc7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCd0YsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQmxMLEtBQUssQ0FBQ3dELFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLENBQUN1SSxJQUFJLENBQUNDLFFBQVEsSUFBRztnQkFDdkM1RyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNuQjZGLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDbEIsQ0FBQyxDQUFDO2NBRUZnQixVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNQyxJQUFJLEdBQUc3RSxHQUFHLENBQUNJLE9BQU8sQ0FBQzBFLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztnQkFFMUQsTUFBTUMsUUFBUSxHQUFHbEgsS0FBSyxDQUFDQyxXQUFXLENBQUNrSCxlQUFlO2dCQUNsRCxJQUFJQyxDQUFDLEdBQUcsQ0FBQztnQkFDVCxJQUFJQyxZQUFZO2dCQUNoQixNQUFNQyxRQUFRLEdBQUdDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLE1BQUs7a0JBQzVDUixJQUFJLENBQUNTLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztrQkFDcENWLElBQUksQ0FBQ1MsU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO2tCQUNoQ1osVUFBVSxDQUFDLE1BQUs7b0JBQ2ZDLElBQUksQ0FBQ1MsU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUNuQ1YsSUFBSSxDQUFDUyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxhQUFhLENBQUM7a0JBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUM7a0JBRVJYLElBQUksQ0FBQ1ksU0FBUyxHQUFHVixRQUFRLENBQUNFLENBQUMsQ0FBQztrQkFDNUIsSUFBSVMsSUFBSSxHQUFHLEdBQUc7a0JBQ2RSLFlBQVksR0FBR0csV0FBVyxDQUFDLE1BQUs7b0JBQy9CLElBQUlLLElBQUksS0FBSyxHQUFHLEVBQUU7c0JBQ2pCQSxJQUFJLEdBQUcsSUFBSTtxQkFDWCxNQUFNLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUU7c0JBQ3pCQSxJQUFJLEdBQUcsS0FBSztxQkFDWixNQUFNO3NCQUNOQSxJQUFJLEdBQUcsR0FBRzs7b0JBRVhiLElBQUksQ0FBQ1ksU0FBUyxHQUFHVixRQUFRLENBQUNFLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBR1MsSUFBSTtrQkFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFDUixJQUFJVCxDQUFDLEtBQUtGLFFBQVEsQ0FBQ1ksTUFBTSxHQUFHLENBQUMsRUFBRVYsQ0FBQyxHQUFHLENBQUM7a0JBQ3BDQSxDQUFDLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFFUkcsVUFBVSxDQUFDUixVQUFVLENBQUMsTUFBSztrQkFDMUIsSUFBSWpCLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDL0IsQ0FBQyxFQUFFLEtBQUssQ0FBQztjQUNWLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDO1lBQ0QsTUFBTXZHLElBQUksR0FBR2tGLFNBQVMsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUN2QyxNQUFNcUQsUUFBUSxHQUFHbkMsTUFBTSxLQUFLLE9BQU8sR0FBR1ksTUFBTSxHQUFHTixNQUFNO1lBRXJELE1BQU04QixHQUFHLEdBQUcsOEJBQThCbEMsT0FBTyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDeEUsTUFBTW1DLE9BQU8sR0FBRzNILEtBQUssSUFBRztjQUN2QjJGLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE1BQU1wRixRQUFRLEdBQUdmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ2hELE1BQU1DLFlBQVksR0FBR3BHLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQytELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLEVBQUU5QixPQUFPLENBQUMsSUFBSSxFQUFFdUIsUUFBUSxDQUFDO1lBQzlFLE1BQU1KLFVBQVUsR0FBR0gsS0FBSyxJQUFJSixPQUFPLENBQUMsVUFBVSxDQUFDO1lBQy9DLE9BQ0N6QixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTixNQUFBLENBQUFLLE9BQUEsQ0FBQUUsUUFBQSxRQUNFLENBQUMsQ0FBQ25FLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQzBCLElBQUksSUFDbEJKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE4QixHQUM1Q2QsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsa0JBQ0NOLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNXLFdBQUEsQ0FBQTJCLFdBQVc7Y0FBQ0MsUUFBUSxFQUFFLENBQUM7Y0FBRUMsT0FBTyxFQUFDO1lBQVMsR0FDMUM5QyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxXQUFBLENBQUE4QixNQUFNO2NBQUEsYUFBVyxVQUFVO2NBQUNDLE9BQU8sRUFBRWhCO1lBQVUsR0FDOUNULEtBQUssQ0FBQ0MsV0FBVyxDQUFDeUIsUUFBUSxDQUNuQixFQUNUakQsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csV0FBQSxDQUFBOEIsTUFBTSxRQUFFeEIsS0FBSyxDQUFDQyxXQUFXLENBQUMwQixJQUFJLENBQVUsQ0FDNUIsQ0FDTCxDQUVYLEVBQ0RsRCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxNQUFBLENBQUFpQyxLQUFLO2NBQUNoRyxJQUFJLEVBQUMsTUFBTTtjQUFDMkQsU0FBUyxFQUFDO1lBQWdCLEdBQzVDZCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxTQUFBLENBQUFpQyxRQUFRO2NBQUNuRyxPQUFPLEVBQUV1RjtZQUFZLEVBQUksQ0FDNUIsRUFDUnhDLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFpRCxHQUMvRGQsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBU29ELEdBQUcsRUFBRUEsR0FBRztjQUFFNUMsU0FBUyxFQUFFeUk7WUFBRyxHQUNoQ3ZKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUEyQixHQUN6Q2QsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJHLE1BQUEsQ0FBQXdDLEtBQUs7Y0FBQ3RDLE1BQU0sRUFBRUE7WUFBTSxFQUFJLEVBQ3hCSSxTQUFTLElBQ1R2SCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEcsTUFBQSxDQUFBMEMsS0FBSztjQUFDNUksU0FBUyxFQUFDLG1CQUFtQjtjQUFDNkksSUFBSSxFQUFFLElBQUk7Y0FBRWxOLElBQUksRUFBRSxJQUFJO2NBQUUrTSxPQUFPLEVBQUVBO1lBQU8sR0FDNUV4SixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxhQUFLbEUsS0FBSyxDQUFDZ0osS0FBSyxDQUFNLEVBQ3RCcEYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lHLE1BQUEsQ0FBQTZDLEtBQUs7Y0FBQ3RHLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3hDdEQsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsWUFBSWxFLEtBQUssQ0FBQ3lOLFdBQVcsQ0FBSyxFQUMxQjdKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQVFRLFNBQVMsRUFBQztZQUFPLEdBQ3hCZCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxXQUFBLENBQUE4QixNQUFNO2NBQUNELE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRXdHO1lBQU8sR0FDeENqSSxLQUFLLENBQUNDLFdBQVcsQ0FBQ3NHLE1BQU0sQ0FDakIsQ0FDRCxDQUVWLEVBQ0Q5SCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxXQUFBLENBQUE4QixNQUFNO2NBQUNELE9BQU8sRUFBQyxTQUFTO2NBQUMvQixJQUFJLEVBQUVBLElBQUk7Y0FBRWlDLE9BQU8sRUFBRXNHLFFBQVE7Y0FBRXBDLFFBQVEsRUFBRUE7WUFBUSxHQUN6RTNGLEtBQUssQ0FBQzJHLE9BQU8sQ0FBQyxDQUNQLEVBQ1JELFFBQVEsSUFDUmpJLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE2QixHQUMzQ2QsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dHLFlBQUEsQ0FBQXpELFdBQVc7Y0FBQ0MsR0FBRyxFQUFFbEgsS0FBSyxDQUFDMkMsUUFBUSxDQUFDYztZQUFLLEVBQUksRUFDMUNHLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNXLFdBQUEsQ0FBQThCLE1BQU07Y0FBQ2hDLElBQUksRUFBQyxNQUFNO2NBQUNpQyxPQUFPLEVBQUVtRixNQUFNO2NBQUVyRixPQUFPLEVBQUM7WUFBUyxHQUNwRHZCLEtBQUssQ0FBQ3VJLElBQUksQ0FDSCxDQUVWLENBQ0ksRUFFTHpDLE9BQU8sSUFDUHJILE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFlLEdBQzdCZCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFJUSxTQUFTLEVBQUM7WUFBaUIsR0FBRVMsS0FBSyxDQUFDQyxXQUFXLENBQUNrSCxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQU0sQ0FFNUUsQ0FDUSxDQUNMLENBQ0o7VUFFTCxDQUFDO1VBQUMzTCxPQUFBLENBQUEwSixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkpGLElBQUF6RyxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWdPLFNBQUEsR0FBQWhPLE9BQUE7VUFGQTs7VUFRTSxTQUFVME4sS0FBS0EsQ0FBQztZQUFFdEM7VUFBTSxDQUFjO1lBQzNDLE1BQU02QyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQzlDLE1BQU0sQ0FBQztZQUN2RCxNQUFNK0MsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDRCxRQUFRLENBQUM5QyxNQUFNLENBQUM7WUFFckQsTUFBTSxDQUFDZ0QsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQVAsU0FBQSxDQUFBUSxRQUFRLEVBQUNQLFNBQVMsRUFBRUUsT0FBTyxFQUFFL0MsTUFBTSxLQUFLLE9BQU8sQ0FBQztZQUNoRyxNQUFNcUQsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN2RCxNQUFNQyxlQUFlLEdBQUdQLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0MxSyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBa0IsR0FDaENkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGVBQU8sR0FBR3FLLGVBQWUsRUFBRSxDQUFRLEVBQ25DM0ssTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTVEsU0FBUyxFQUFDO1lBQWtCLE9BQVMsRUFDM0NkLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGVBQU8sR0FBR2tLLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUF4SyxNQUFBLEdBQUFqRSxPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFNEYsUUFBUTtZQUFFaUM7VUFBUyxDQUFFLEdBQUc1RCxNQUFBLENBQUFLLE9BQUs7VUFFL0IsU0FBVWtLLFFBQVFBLENBQUNQLFNBQWtCLEVBQUVFLE9BQWdCLEVBQUVVLEtBQUssR0FBRyxJQUFJO1lBQzFFLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR25KLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkNpQyxTQUFTLENBQUMsTUFBSztjQUNkLElBQUltSCxVQUEwQjtjQUM5QixJQUFJSCxLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Y0FDckIsSUFBSWQsU0FBUyxFQUFFO2dCQUNkZSxVQUFVLEdBQUdoQyxXQUFXLENBQUMsTUFBSztrQkFDN0IrQixPQUFPLENBQUNFLFFBQVEsSUFBRztvQkFDbEIsT0FBT0EsUUFBUSxHQUFHLENBQUM7a0JBQ3BCLENBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2YsU0FBUyxDQUFDLENBQUM7WUFFZnBHLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXNHLE9BQU8sRUFBRTtnQkFDWlksT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1osT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUixPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwiaWdub3JlTGlzdCI6W119