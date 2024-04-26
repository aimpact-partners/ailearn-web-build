System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.12/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/alert", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_15 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0032ComponentsIcons;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat-control.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/alert', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/coins-layout.widget', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/modal', dependency_20]]);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1524358414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _analysis = require("./analysis");
          var _recording = require("./recording");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [view, setView] = _react.default.useState(!!store.model.data ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            const setBreadcrumb = texts => {
              _coinsLayout.LayoutBroker.breadcrumb = [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [texts.breadcrumb.spoken, '']];
            };
            const [textsReady, texts] = (0, _ui.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            (0, _hooks.useBinder)([store], () => {
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
            }, _react.default.createElement("header", {
              className: "activity-header"
            }, _react.default.createElement("div", {
              className: "container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "spoken"
            }), _react.default.createElement("h1", null, store.model.title))), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("header", null), _react.default.createElement(Control, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYXNzaWdubWVudElkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIlZvaWNlIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZW5kU3Bva2VuIiwiYXVkaW8iLCJwYXJhbXMiLCJwdWJsaXNoU3Bva2VuIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJGZWVkYmFjayIsInVzZVNwb2tlbkNvbnRleHQiLCJkYXRhIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwibmFtZSIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJpY29uIiwiZmVlZGJhY2siLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9tYXJrZG93biIsIl9mZWVkYmFjayIsIl9zZXNzaW9uIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29pbnNMYXlvdXQiLCJfYmV5b25kX2NvbnRleHQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2hvb2tzIiwiX2ljb25zIiwic2V0UmVhZHkiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZXRCcmVhZGNydW1iIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsImFzc2lnbm1lbnQiLCJzcG9rZW4iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHNDYWxsYmFjayIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0J1dHRvbiIsIlByb3ZpZGVyIiwiQXBwSWNvbiIsInRpdGxlIiwiUGFnZUNvbnRhaW5lciIsIl9hdWRpb1BsYXllciIsIl9pbWFnZSIsIl9tb2RhbCIsIl90aW1lciIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInRoZW4iLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJ0ZXh0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwiZ2xvYmFsVGhpcyIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIm9uQWN0aW9uIiwiY2xzIiwib25DbG9zZSIsIlRpbWVyIiwiTW9kYWwiLCJvcGVuIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixH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