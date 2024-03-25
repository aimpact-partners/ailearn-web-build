System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.11/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.30/components/ui", "@aimpact/ailearn-app@0.0.30/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    }, function (_pragmateUi006Alert) {
      dependency_11 = _pragmateUi006Alert;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0030ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0030ComponentsUi;
    }, function (_aimpactAilearnApp0030Config) {
      dependency_15 = _aimpactAilearnApp0030Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_18 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi006Image) {
      dependency_19 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.30"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.30/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat-control.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/alert', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.30/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.30/assignments/spoken.widget');
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
        hash: 2021672495,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIlZvaWNlIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImdsb2JhbFRoaXMiLCJhIiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX21hcmtkb3duIiwiX2ZlZWRiYWNrIiwiX3Nlc3Npb24iLCJBbmFseXNpcyIsInRleHRzIiwiYXNzZXNzbWVudHMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwib25SZWRvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmlldyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwidmFyaWFudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJhbmFseXNpcyIsInJlZG8iLCJBbGVydCIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJhc3NpZ25tZW50Iiwic3Bva2VuIiwidGl0bGUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfYW5hbHlzaXMiLCJfaGVhZGVyIiwiX3JlY29yZGluZyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0J1dHRvbiIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJfYXVkaW9QbGF5ZXIiLCJfaW1hZ2UiLCJfbW9kYWwiLCJfdGltZXIiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwidGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIm9uQWN0aW9uIiwiY2xzIiwib25DbG9zZSIsIlRpbWVyIiwiTW9kYWwiLCJvcGVuIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJ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