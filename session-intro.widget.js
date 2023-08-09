System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat@1.0.1/voice", "react@18.2.0", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_7 = _aimpactChat101ChatWidget;
    }, function (_aimpactChat101Voice) {
      dependency_8 = _aimpactChat101Voice;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0036Toast) {
      dependency_10 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Icons) {
      dependency_11 = _pragmateUi0036Icons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Link) {
      dependency_13 = _pragmateUi0036Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_16 = _pragmateUi0036Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/link', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/spinner', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@1.0.0/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/session-intro.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3036882296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _store = require("./store");
          const CLASS_ID = '365d9eb6-fb3a-4bcb-b7d5-81e51a6e2091';
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            //@ts-ignore
            createStore() {
              //@ts-ignore
              const metadata = JSON.parse(this.attributes.get('metadata'));
              console.log(0.1, metadata);
              this.#store = new _store.StoreManager(metadata);
              return this.#store;
            }
            get Widget() {
              return _views.ChatIntro;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*********************************
      INTERNAL MODULE: ./store/hardcoded
      *********************************/

      ims.set('./store/hardcoded', {
        hash: 2798558442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TOPICS = exports.CLASS = void 0;
          const CLASS = {
            intro: 'Hola Pedro! El tema que vamos a ver hoy aborda las diversas sociedades indígenas que habitaron América, sus formas de organización política, social, económica y territorial, y los procesos de cambio que experimentaron a lo largo del tiempo.',
            curriculumObjective: 'Crear un chatbot con la plataforma de Aimpact',
            id: '1',
            status: 'completed',
            synthesis: {
              content: 'En este curso aprenderás a crear un chatbot con la plataforma de Aimpact. Para ello, utilizaremos el lenguaje de programación Python y la librería Rasa.',
              status: 'completed'
            },
            assessment: {
              content: '¿Qué es un chatbot?',
              status: 'completed'
            }
          };
          exports.CLASS = CLASS;
          const TOPICS = [{
            id: '1',
            title: 'Introducción',
            synthesis: {
              content: 'En este curso aprenderás a crear un chatbot con la plataforma de Aimpact. Para ello, utilizaremos el lenguaje de programación Python y la librería Rasa.',
              status: 'completed'
            },
            assessment: {
              content: '¿Qué es un chatbot?',
              status: 'completed'
            },
            prerequisites: {
              content: 'Conocimientos básicos de programación',
              status: 'completed'
            }
          }, {
            id: '2',
            title: '¿Qué es un chatbot?',
            synthesis: {
              content: 'Un chatbot es un programa informático que simula mantener una conversación con una persona al proveer respuestas automáticas a las entradas que recibe. Estos programas pueden ser utilizados para diversos fines, como por ejemplo, para brindar información, realizar reservas, responder preguntas frecuentes, entre otros.',
              status: 'completed'
            },
            assessment: {
              content: '¿Qué es un chatbot?',
              status: 'completed'
            },
            prerequisites: {
              content: 'Conocimientos básicos de programación',
              status: 'completed'
            }
          }, {
            id: '3',
            title: '¿Qué es un chatbot?',
            synthesis: {
              content: 'Un chatbot es un programa informático que simula mantener una conversación con una persona al proveer respuestas automáticas a las entradas que recibe. Estos programas pueden ser utilizados para diversos fines, como por ejemplo, para brindar información, realizar reservas, responder preguntas frecuentes, entre otros.',
              status: 'completed'
            },
            assessment: {
              content: '¿Qué es un chatbot?',
              status: 'completed'
            },
            prerequisites: {
              content: 'Conocimientos básicos de programación',
              status: 'completed'
            }
          }];
          exports.TOPICS = TOPICS;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2180035972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _chat = require("@aimpact/chat/chat.widget");
          var _voice = require("@aimpact/chat/voice");
          class StoreManager extends _model.ReactiveModel {
            #lesson;
            get lesson() {
              return this.#lesson;
            }
            #topic;
            get topic() {
              return this.#topic;
            }
            #audioManager = new _chat.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice = new _voice.Voice();
            get voice() {
              return this.#voice;
            }
            #metadata;
            get metadata() {
              return this.#metadata;
            }
            constructor(metadata) {
              super();
              this.#metadata = metadata;
              if (metadata) {
                this.load(this.metadata);
                return;
              }
              this.ready = true;
            }
            async load(metadata) {
              if (metadata.lesson) return this.loadLesson(metadata.lesson);
              if (metadata.topic) return this.loadTopic(metadata.topic);
            }
            async loadLesson(lesson) {
              console.log(1, lesson.id);
              this.#lesson = new _core.Lesson({
                id: lesson.id
              });
              await this.#lesson.load();
              await this.#lesson.chatIntroductions.load();
              console.log('lesson', this.#lesson);
            }
            async loadTopic(topic) {
              this.#topic = new _core.Topic({
                id: topic.id
              });
              await this.#topic.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/content
      ******************************************/

      ims.set('./views/components/content', {
        hash: 64885097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _context = require("../context");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("pragmate-ui/icons");
          var _topicDetail = require("./topic-detail");
          var _components = require("@aimpact/chat/shared/components");
          var _player = require("./player");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            return null;
            const {
              topics,
              classData
            } = store;
            const topicsList = topics.map((topic, i) => _react.default.createElement(_topicDetail.default, {
              key: `topic ${i}`,
              topic: topic
            }));
            const handlePlay = () => {};
            const copyMessage = async () => {
              await navigator.clipboard.writeText(classData.synthesis.content);
              _toast.toast.success('Message copied to clipboard');
            };
            return _react.default.createElement("section", {
              className: `collapsible-content${visible ? ' visible' : ''}`
            }, _react.default.createElement("article", null, _react.default.createElement(_components.Playable, {
              content: classData.intro,
              player: store.audioManager.player
            }), _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_icons.Icon, {
              onClick: copyMessage,
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              onClick: handlePlay,
              "data-listen": "api",
              icon: 'play'
            }))), _react.default.createElement(_player.default, {
              text: classData.synthesis.content
            }), _react.default.createElement(_components.Playable, {
              content: texts.intro,
              player: store.audioManager.player
            }), topicsList);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 1969728479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Header() {
            const {
              visible,
              toggleVisibility,
              texts: {
                header
              }
            } = (0, _context.useLessonIntroContext)();
            return _react.default.createElement("header", {
              className: "intro-header"
            }, _react.default.createElement("h3", null, header.title), _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: `md collapse-icon${visible ? ' visible' : ''}`,
              onClick: toggleVisibility
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/player
      *****************************************/

      ims.set('./views/components/player', {
        hash: 3008754464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.TextToSpeech = void 0;
          var _react = require("react");
          var _context = require("../context");
          const TextToSpeech = ({
            text
          }) => {
            const {
              store
            } = (0, _context.useLessonIntroContext)();
            const type = 'audio/mpeg';
            const [audioSrc, setAudioSrc] = (0, _react.useState)(null);
            (0, _react.useEffect)(() => {
              const getAudio = async () => {
                const src = await store.voice.createBlobAudioFromText(text, type);
                setAudioSrc(src);
              };
              getAudio();
            }, []);
            return _react.default.createElement("div", null, _react.default.createElement("audio", {
              controls: true
            }, _react.default.createElement("source", {
              src: audioSrc,
              type: type
            })));
          };
          exports.TextToSpeech = TextToSpeech;
          var _default = TextToSpeech;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/topic-detail
      ***********************************************/

      ims.set('./views/components/topic-detail', {
        hash: 2513435789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = TopicDetail;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          function TopicDetail({
            topic
          }) {
            return _react.default.createElement("div", {
              className: 'topic'
            }, _react.default.createElement("h4", null, topic.title), _react.default.createElement("p", null, topic.synthesis.content), _react.default.createElement(_link.Link, {
              className: 'topic-navigation',
              href: `/chat/${topic.id}`
            }, _react.default.createElement(_icons.Icon, {
              icon: 'chat'
            }), _react.default.createElement("h5", null, "Ir al T\u00F3pico")));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2575969349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLessonIntroContext = exports.LessonIntroContext = void 0;
          var React = require("react");
          const LessonIntroContext = React.createContext({});
          exports.LessonIntroContext = LessonIntroContext;
          const useLessonIntroContext = () => React.useContext(LessonIntroContext);
          exports.useLessonIntroContext = useLessonIntroContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1433639353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _content = require("./components/content");
          var _spinner = require("pragmate-ui/spinner");
          function ChatIntro({
            store
          }) {
            const [visible, setVisible] = _react.default.useState(true);
            const [ready, setReady] = _react.default.useState(true);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const toggleVisibility = () => setVisible(!visible);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            if (!textsReady || !ready) return _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: "primary"
            });
            return _react.default.createElement(_context.LessonIntroContext.Provider, {
              value: {
                store,
                texts,
                visible,
                toggleVisibility
              }
            }, _react.default.createElement("article", {
              className: "lesson-intro"
            }, _react.default.createElement("section", {
              className: "intro-logo"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            })), _react.default.createElement("section", {
              className: "intro-content"
            }, _react.default.createElement(_header.default, null), _react.default.createElement(_content.default, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiQ0xBU1MiLCJpbnRybyIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJpZCIsInN0YXR1cyIsInN5bnRoZXNpcyIsImNvbnRlbnQiLCJhc3Nlc3NtZW50IiwiVE9QSUNTIiwidGl0bGUiLCJwcmVyZXF1aXNpdGVzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwiQXVkaW9NYW5hZ2VyIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNvbnN0cnVjdG9yIiwibG9hZCIsInJlYWR5IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiVG9waWMiLCJDb250ZW50Iiwic3RvcmUiLCJ0ZXh0cyIsInZpc2libGUiLCJ0b3BpY3MiLCJjbGFzc0RhdGEiLCJ0b3BpY3NMaXN0IiwibWFwIiwiaSIsIlJlYWN0IiwiVG9waWNEZXRhaWwiLCJrZXkiLCJoYW5kbGVQbGF5IiwiY29weU1lc3NhZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJQbGF5YWJsZSIsInBsYXllciIsIkljb24iLCJvbkNsaWNrIiwiaWNvbiIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwiSWNvbkJ1dHRvbiIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiTGluayIsImhyZWYiLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaGFyZGNvZGVkLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb21wb25lbnRzL2NvbnRlbnQudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=