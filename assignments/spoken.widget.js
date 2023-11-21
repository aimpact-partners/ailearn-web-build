System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "react@18.2.0", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.14/components/ui", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
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
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_pragmateUi003Alert) {
      dependency_13 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_aimpactChatSdk100Session) {
      dependency_15 = _aimpactChatSdk100Session;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Image) {
      dependency_18 = _pragmateUi003Image;
    }, function (_pragmateUi003Modal) {
      dependency_19 = _pragmateUi003Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat/chat.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/modal', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/spoken.widget');
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
        hash: 1051781380,
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
            #lesson;
            get lesson() {
              return this.#lesson;
            }
            #topic;
            get topic() {
              return this.#topic;
            }
            #isTopic;
            get isTopic() {
              return !!this.#isTopic;
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
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#assessment = new _core.Assessment({
                assignmentId: this.sessionId
              });
              this.#recorder = new _recorder.Recorder();
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            async load(assignmentId, activityId) {
              try {
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            async loadTopic() {
              this.#isTopic = true;
              this.#topic = await this.#lesson.topics.map.get(this.topic.id);
              this.#model = this.#topic;
              const promises = [this.#topic.chatIntroductions.load(), this.#assessment.load(this.topic.id)];
              await Promise.all(promises);
              this.#model = this.#topic;
            }
            sendAssessment = async audio => {
              try {
                const specs = {
                  audio
                };
                if (this.#isTopic) specs.topicId = this.#topic.id;else specs.lessonId = this.#lesson.id;
                return this.#assessment.publish(specs);
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/analysis/competencies
      *********************************************/

      ims.set('./views/analysis/competencies', {
        hash: 1905995529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompetenciesFeedback = CompetenciesFeedback;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _context = require("../context");
          function CompetenciesFeedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.competenciesFeedback
            });
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 1921505514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _components = require("pragmate-ui/components");
          var _competencies = require("./competencies");
          var _react = require("react");
          var _student = require("./student");
          var _teacher = require("./teacher");
          var _context = require("../context");
          function Analysis() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const [content, setContent] = _react.default.useState('student');
            const onRedo = event => {
              event.preventDefault();
              setView('recording');
            };
            const views = {
              teacher: _teacher.TeacherFeedback,
              student: _student.StudentFeedback,
              competencies: _competencies.CompetenciesFeedback
            };
            const View = views[content];
            const changeView = event => {
              setContent(event.currentTarget.dataset.view);
            };
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.analysisTitle), _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 0
            }, _react.default.createElement(_components.Button, {
              "data-view": "student",
              onClick: changeView
            }, texts.feedback), _react.default.createElement(_components.Button, {
              "data-view": "competencies",
              onClick: changeView
            }, texts.competencies), _react.default.createElement(_components.Button, {
              "data-view": "teacher",
              onClick: changeView
            }, texts.analysis))), _react.default.createElement(_components.Button, {
              onClick: onRedo,
              variant: "primary"
            }, texts.redo))), _react.default.createElement(View, null));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/analysis/student
      ****************************************/

      ims.set('./views/analysis/student', {
        hash: 1836246646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFeedback = StudentFeedback;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _context = require("../context");
          function StudentFeedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.feedback
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/analysis/teacher
      ****************************************/

      ims.set('./views/analysis/teacher', {
        hash: 3415794655,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFeedback = TeacherFeedback;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _react = require("react");
          var _context = require("../context");
          function TeacherFeedback() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            return _react.default.createElement(_react.default.Fragment, null, store.assessment.analysis.map((item, index) => {
              return _react.default.createElement("article", {
                key: item.subject.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, _core.Faces[item.grade]), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", null, item.evaluation)));
            }));
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
        hash: 2783688549,
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
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignment/${store.paramsUri.assignmentId}`], ['Class', `/assignment/${store.paramsUri.assignmentId}`], ['Spoken']]
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
        hash: 2726853397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _analysis = require("./analysis");
          var _header = require("./header");
          var _components = require("@aimpact/chat/shared/components");
          var _recording = require("./recording");
          var _context = require("./context");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = _react.default.useState(!!store.assessment.analysis.length ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            const userName = _session.sessionWrapper.user.displayName;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const alertContent = texts.assessments.oralText?.replace('%1', userName);
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, alertContent), _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement(Control, null))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/recording
      *********************************/

      ims.set('./views/recording', {
        hash: 2509147154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
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
              store.sendAssessment(audio).then(response => {
                setView('analysis');
                setSending(false);
              });
              setTimeout(() => {
                const text = ref.current.querySelector('.sending-message');
                const contents = texts.processMessages;
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
            return _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, _react.default.createElement(_timer.Timer, {
              action: action
            }), showModal && _react.default.createElement(_modal.Modal, {
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
            }, store.button))), _react.default.createElement(_components.Button, {
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
            }, texts.processMessages[0])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJIQVJEQ09ERUQiLCJjb250ZW50IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiaW50cm9kdWN0aW9uIiwic3ludGhlc2lzIiwiTW9kZWwiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldCIsIl9jb3JlIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJhc3NpZ25tZW50SWQiLCJsZXNzb24iLCJ0b3BpYyIsImlzVG9waWMiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJ2b2ljZSIsInJlY29yZGVyIiwiVm9pY2UiLCJzZXNzaW9uSWQiLCJBc3Nlc3NtZW50IiwiUmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9hZFRvcGljIiwidG9waWNzIiwibWFwIiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiX21hcmtkb3duIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsInVzZVNwb2tlbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk1hcmtkb3duIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJfY29tcG9uZW50cyIsIl9jb21wZXRlbmNpZXMiLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsInNldFZpZXciLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJvblJlZG8iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJjbGFzc05hbWUiLCJhbmFseXNpc1RpdGxlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJmZWVkYmFjayIsImFuYWx5c2lzIiwidmFyaWFudCIsInJlZG8iLCJGcmFnbWVudCIsIml0ZW0iLCJpbmRleCIsInN1YmplY3QiLCJyZXBsYWNlIiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwidGl0bGUiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfaGVhZGVyIiwiX3JlY29yZGluZyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2hvb2tzIiwiX2hvb2tzMiIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJsZW5ndGgiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImFsZXJ0Q29udGVudCIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0J1dHRvbiIsIlByb3ZpZGVyIiwiQWxlcnQiLCJfYXVkaW9QbGF5ZXIiLCJfaW1hZ2UiLCJfbW9kYWwiLCJfdGltZXIiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwidGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJpY29uIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFB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