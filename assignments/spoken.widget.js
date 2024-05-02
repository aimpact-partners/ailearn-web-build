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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiX21hcmtkb3duIiwiX2ZlZWRiYWNrIiwiX3Nlc3Npb24iLCJBbmFseXNpcyIsImFzc2Vzc21lbnRzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2FuYWx5c2lzIiwiX3JlY29yZGluZyIsIl9ob29rcyIsInNldFJlYWR5IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQnV0dG9uIiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiUGFnZUNvbnRhaW5lciIsIl9hdWRpb1BsYXllciIsIl9pbWFnZSIsIl9tb2RhbCIsIl90aW1lciIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwiZXJyb3IiLCJvblN0b3AiLCJzdG9wIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwib25TZW5kIiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FB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