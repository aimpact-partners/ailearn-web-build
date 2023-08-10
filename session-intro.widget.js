System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat@1.0.1/voice", "react@18.2.0", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Link) {
      dependency_14 = _pragmateUi0036Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['pragmate-ui/link', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/spinner', dependency_16]]);
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
        hash: 3064338883,
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
            show() {
              /* this.#store.load(CLASS_ID); */
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
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
        hash: 3297958680,
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
                this.load(this.metadata).then(() => this.ready = true);
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
        hash: 2677183747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../context");
          var _topicDetail = require("./topic-detail");
          var _session = require("@aimpact/chat-sdk/session");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement("h1", null, "Cargando...");
            const elements = store.lesson.chatIntroductions.items;
            const content = elements.has('content') ? elements.get('content').value : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis').value : undefined;
            // console.log('--->>', content, synthesis);
            const {
              topic
            } = store;
            let topicsList;
            if (topic) {
              topicsList = topic.elements?.map((topic, i) => _react.default.createElement(_topicDetail.default, {
                key: `topic ${i}`,
                topic: topic
              }));
            }
            const handlePlay = () => {
              store.voice.text = content;
              console.warn('play');
              store.voice.play();
            };
            // const copyMessage = async () => {
            // 	await navigator.clipboard.writeText(synthesis);
            // 	toast.success('Message copied to clipboard');
            // };
            const intro = `${texts.intro.hello} ${_session.sessionWrapper.user.displayName}, ${texts.intro.message}`;
            return _react.default.createElement("section", {
              className: `collapsible-content${visible ? ' visible' : ''}`
            }, _react.default.createElement("article", null, _react.default.createElement(_components.Playable, {
              content: intro,
              player: store.audioManager.player
            })), _react.default.createElement("a", null, _react.default.createElement(_icons.Icon, {
              onClick: handlePlay,
              "data-listen": "api",
              icon: 'play'
            })), _react.default.createElement("a", {
              href: "#"
            }, "synthesis: ", synthesis), topicsList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQVEsRUFBQ2tELHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNbkIsZ0JBQWdCLEdBQUcsTUFBTWdCLFVBQVUsQ0FBQyxDQUFDL0MsT0FBTyxDQUFDO1lBRW5ELHFCQUFTLEVBQUMsQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsTUFBTUcsUUFBUSxDQUFDSCxLQUFLLENBQUNQLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ3lELFVBQVUsSUFBSSxDQUFDekQsS0FBSyxFQUFFLE9BQU9XLDZCQUFDaUQsZ0JBQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRWpCLElBQUksRUFBQztZQUFTLEVBQUc7WUFDMUUsT0FDQ2pDLDZCQUFDeUMsMkJBQWtCLENBQUNVLFFBQVE7Y0FBQzlDLEtBQUssRUFBRTtnQkFBRVQsS0FBSztnQkFBRUMsS0FBSztnQkFBRUMsT0FBTztnQkFBRStCO2NBQWdCO1lBQUUsR0FDOUU3QjtjQUFTcUIsU0FBUyxFQUFDO1lBQWMsR0FDaENyQjtjQUFTcUIsU0FBUyxFQUFDO1lBQVksR0FDOUJyQiw2QkFBQ3dCLFdBQUk7Y0FBQ0UsSUFBSSxFQUFDLE9BQU87Y0FBQ0wsU0FBUyxFQUFDO1lBQWdCLEVBQUcsQ0FDdkMsRUFDVnJCO2NBQVNxQixTQUFTLEVBQUM7WUFBZSxHQUNqQ3JCLDZCQUFDNEIsZUFBTSxPQUFHLEVBQ1Y1Qiw2QkFBQ0wsZ0JBQU8sT0FBRyxDQUNGLENBQ0QsQ0FDbUI7VUFFaEMiLCJuYW1lcyI6WyJDTEFTU19JRCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiQ0xBU1MiLCJpbnRybyIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJpZCIsInN0YXR1cyIsInN5bnRoZXNpcyIsImNvbnRlbnQiLCJhc3Nlc3NtZW50IiwiVE9QSUNTIiwidGl0bGUiLCJwcmVyZXF1aXNpdGVzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwiQXVkaW9NYW5hZ2VyIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlYWR5IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiVG9waWMiLCJDb250ZW50Iiwic3RvcmUiLCJ0ZXh0cyIsInZpc2libGUiLCJzZXRSZWFkeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJlbGVtZW50cyIsIml0ZW1zIiwiaGFzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0b3BpY3NMaXN0IiwibWFwIiwiaSIsIlRvcGljRGV0YWlsIiwia2V5IiwiaGFuZGxlUGxheSIsInRleHQiLCJ3YXJuIiwicGxheSIsImhlbGxvIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJJY29uIiwib25DbGljayIsImljb24iLCJocmVmIiwiSGVhZGVyIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsIkljb25CdXR0b24iLCJUZXh0VG9TcGVlY2giLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsImdldEF1ZGlvIiwic3JjIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIkxpbmsiLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsInNldFZpc2libGUiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaGFyZGNvZGVkLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb21wb25lbnRzL2NvbnRlbnQudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=