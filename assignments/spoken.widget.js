System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.18/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, Header, View, RecordingButton, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
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
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0018ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0018ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_15 = _pragmateUi003Alert;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_16 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi003Image) {
      dependency_18 = _pragmateUi003Image;
    }, function (_pragmateUi003Modal) {
      dependency_19 = _pragmateUi003Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/modal', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/assignments/spoken.widget');
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
        hash: 88302795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _chat = require("@aimpact/chat/chat.widget");
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
            #audioManager = new _chat.AudioManager(this);
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
                const activity = new _core.Activity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                globalThis.a = activity;
                this.#model = activity;
                await activity.isReady;
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
        hash: 163504075,
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
                key: item.subject.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, item.icon), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", null, item.feedback)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 2737391263,
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
              selected: 0
            }, _react.default.createElement(_components.Button, {
              "data-view": "teacher",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              onClick: onRedo,
              variant: "primary"
            }, texts.redo))))), _react.default.createElement(View, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/audio-player
      ************************************/

      ims.set('./views/audio-player', {
        hash: 2781382207,
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
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: 'audio-player'
            }, _react.default.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, _react.default.createElement("source", {
              src: src,
              type: 'audio/mp3',
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
        hash: 4088817353,
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
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Spoken', '']]
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
        hash: 3929262623,
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
            const [items, setItems] = (0, _react.useState)(store.items);
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
        hash: 2588901809,
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
            const alertContent = store.model.materials.introduction?.replace('%1', userName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJhc3NpZ25tZW50SWQiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJ2b2ljZSIsInJlY29yZGVyIiwicGFyYW1zVXJpIiwiVm9pY2UiLCJzZXNzaW9uSWQiLCJSZWNvcmRlciIsImFjdGl2aXR5SWQiLCJyZWFkeSIsImFjdGl2aXR5IiwiQWN0aXZpdHkiLCJnbG9iYWxUaGlzIiwiYSIsImlzUmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2VuZFNwb2tlbiIsImF1ZGlvIiwicGFyYW1zIiwicHVibGlzaFNwb2tlbiIsIl9yZWFjdCIsIl9jb250ZXh0IiwiRmVlZGJhY2siLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGF0YSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsInN1YmplY3QiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiaWNvbiIsImZlZWRiYWNrIiwiX2NvbXBvbmVudHMiLCJfZmVlZGJhY2siLCJBbmFseXNpcyIsInRleHRzIiwiYXNzZXNzbWVudHMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwib25SZWRvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmlldyIsImFuYWx5c2lzVGl0bGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwib25DbGljayIsImFuYWx5c2lzIiwidmFyaWFudCIsInJlZG8iLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwidGl0bGUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfYW5hbHlzaXMiLCJfaGVhZGVyIiwiX3JlY29yZGluZyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInNldEl0ZW1zIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQnV0dG9uIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX2F1ZGlvUGxheWVyIiwiX2ltYWdlIiwiX21vZGFsIiwiX3RpbWVyIiwiX2FsZXJ0IiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIm9uUGxheSIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzdG9wIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwib25TZW5kIiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJsZW5ndGgiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwibWF0ZXJpYWxzIiwiQWxlcnQiLCJNYXJrZG93biIsIlRpbWVyIiwiTW9kYWwiLCJvcGVuIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lB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