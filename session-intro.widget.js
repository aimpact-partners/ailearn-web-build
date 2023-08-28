System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/form.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_7 = _aimpactChat101ChatWidget;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Voice) {
      dependency_9 = _aimpactChatSdk100Voice;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp100AssessmentsFormCode) {
      dependency_11 = _aimpactAilearnApp100AssessmentsFormCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_13 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp100Config) {
      dependency_15 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Icons) {
      dependency_17 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Components) {
      dependency_18 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Link) {
      dependency_19 = _pragmateUi0036Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_21 = _pragmateUi0036Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/assessments/form.code', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/playable', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/link', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/spinner', dependency_21]]);
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
        hash: 3877594712,
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1463596496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _chat = require("@aimpact/chat/chat.widget");
          var _voice = require("@aimpact/chat-sdk/voice");
          class StoreManager extends _model.ReactiveModel {
            #lesson;
            get lesson() {
              return this.#lesson;
            }
            #topic;
            get topic() {
              return this.#topic;
            }
            #model;
            get model() {
              return this.#model;
            }
            #links = [];
            get links() {
              return this.#links;
            }
            #audioManager = new _chat.AudioManager(this);
            #introduction;
            get introduction() {
              return this.#introduction;
            }
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
              this.reactiveProps(['loadReady']);
              this.loadReady = false;
              if (metadata) {
                this.load(this.metadata).then(() => {
                  console.log(2.3);
                  this.ready = true;
                  this.loadReady = true;
                });
                return;
              }
              console.log(2.2);
              this.ready = true;
              this.loadReady = true;
            }
            async load(metadata) {
              if (metadata.lesson) {
                await this.loadLesson(metadata.lesson);
                this.#model = this.#lesson;
              }
              if (metadata.topic) await this.loadTopic(metadata);
              //this.#process();
            }

            async loadLesson(lesson) {
              this.#lesson = new _core.Lesson({
                id: lesson.id
              });
              await this.#lesson.load();
              await this.#lesson.chatIntroductions.load();
              console.log(99);
            }
            async loadTopic(metadata) {
              //await this.loadLesson(metadata.lesson);
              // this.#lesson.topics.add({ id: metadata.topic.id }})
              this.#topic = await this.#lesson.topics.map.get(metadata.topic.id);
              await this.#topic.chatIntroductions.load();
              this.#model = this.#topic;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/ContentManager
      **************************************/

      ims.set('./views/ContentManager', {
        hash: 3510837071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./components/content");
          var _form = require("@aimpact/ailearn-app/assessments/form.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentManager() {
            const {
              store,
              activeControl
            } = (0, _context.useLessonIntroContext)();
            const [model, setModel] = _react.default.useState(store.model);
            (0, _hooks.useBinder)([store], () => setModel(store.model));
            if (!store.model) return null;
            const {
              chatIntroductions
            } = model;
            const Control = () => {
              if (activeControl === 'content') return _react.default.createElement(_content.default, null);
              if (activeControl === 'quiz') {
                const assessments = chatIntroductions.items.get('assessment');
                return _react.default.createElement(_form.Quiz, {
                  questions: assessments.value.questions
                });
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(Control, null));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/content
      ******************************************/

      ims.set('./views/components/content', {
        hash: 1003971770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          var _links = require("./links");
          var _config = require("@aimpact/ailearn-app/config");
          var _components = require("@aimpact/chat/shared/components");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            const [fetching, setFetching] = _react.default.useState(store.model?.fetching);
            const panesRef = _react.default.useRef(null);
            // useBinder([store.model], () => setFetching(store.model?.fetching));
            const elements = store.model.chatIntroductions.items;
            const content = elements.has('content') ? elements.get('content').value : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis').value : undefined;
            const onSelectView = event => {
              const target = event.currentTarget;
              const {
                element
              } = event.currentTarget.dataset;
              const panes = panesRef.current.querySelectorAll('.intro__pane');
              target.closest('.badges__container').querySelectorAll('.badge').forEach(badge => badge.classList.remove('active'));
              target.classList.add('active');
              panes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.dataset.element === element) pane.classList.add('active');
              });
            };
            const intro = store.introduction;
            const audioUrl = `${_config.default.params.apis.ailearn}/lessons/elements/audios/${store.model.id}`;
            return _react.default.createElement("section", {
              className: `collapsible-content${visible ? ' visible' : ''}`
            }, _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("p", null, intro), _react.default.createElement(_components.AudioPlayer, {
              src: audioUrl,
              create: "false"
            })), _react.default.createElement("section", {
              className: "badges__container badges__container--right"
            }, _react.default.createElement("label", {
              "data-element": "synthesis",
              onClick: onSelectView,
              className: "badge badge__intro active"
            }, texts.elements.synthesis), _react.default.createElement("label", {
              "data-element": "content",
              onClick: onSelectView,
              className: "badge badge__intro"
            }, texts.elements.content)), _react.default.createElement("section", {
              className: "intro__panes",
              ref: panesRef
            }, _react.default.createElement("article", {
              className: "intro__pane intro__synthesis active",
              "data-element": "synthesis"
            }, _react.default.createElement(_markdown.Markdown, {
              content: synthesis
            })), _react.default.createElement("article", {
              className: "intro__pane intro__synthesis",
              "data-element": "content"
            }, _react.default.createElement(_playable.Playable, {
              player: store.voice,
              content: content,
              id: "content"
            }))), _react.default.createElement(_links.Links, null));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 1822820350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function Header() {
            const {
              visible,
              toggleVisibility,
              updateView,
              texts: {
                header,
                assessments
              }
            } = (0, _context.useLessonIntroContext)();
            const onActionClick = event => {
              updateView(event.currentTarget.dataset.view);
            };
            return _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, header.title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.Button, {
              "data-view": "quiz",
              variant: "primary",
              onClick: onActionClick
            }, assessments.quiz), _react.default.createElement(_components.Button, {
              "data-view": "oral",
              variant: "primary",
              onClick: onActionClick
            }, assessments.oral), _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: `md collapse-icon${visible ? ' visible' : ''}`,
              onClick: toggleVisibility
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/links
      ****************************************/

      ims.set('./views/components/links', {
        hash: 1003701012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Links = Links;
          var React = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _config = require("@aimpact/ailearn-app/config");
          function Links() {
            const {
              store
            } = (0, _context.useLessonIntroContext)();
            if (!store.links) return null;
            return React.createElement("div", {
              className: "intro__actions actions flex-container"
            }, store.links.map(item => {
              const uri = `${_config.default.params.baseUrl}${item.href}`;
              return React.createElement(_components.Link, {
                key: uri,
                href: uri,
                className: "btn btn-border btn-primary"
              }, item.name);
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
        hash: 3638353101,
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
        hash: 1484415195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _spinner = require("pragmate-ui/spinner");
          var _ContentManager = require("./ContentManager");
          function ChatIntro({
            store
          }) {
            const [visible, setVisible] = _react.default.useState(true);
            const [ready, setReady] = _react.default.useState(true);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const toggleVisibility = () => setVisible(!visible);
            const [activeControl, setActiveControl] = _react.default.useState('content');
            (0, _hooks2.useBinder)([store], () => {
              console.log(1.8);
              setReady(store.ready && store.loadReady);
            });
            const updateView = view => {
              setActiveControl(view);
            };
            const contextValue = _react.default.useMemo(() => ({
              ready: textsReady && ready && store.loadReady,
              activeControl,
              updateView,
              store,
              texts,
              visible,
              toggleVisibility
            }), [textsReady, ready, store.loadReady, activeControl, store, texts, visible]);
            if (!textsReady || !ready) return _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: "primary"
            });
            return _react.default.createElement(_context.LessonIntroContext.Provider, {
              value: contextValue
            }, _react.default.createElement("article", {
              className: "lesson-intro"
            }, _react.default.createElement("section", {
              className: "intro-content"
            }, _react.default.createElement(_header.default, null), _react.default.createElement(_ContentManager.ContentManager, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDO2NBQ2hCb0csUUFBUSxDQUFDMUYsS0FBSyxDQUFDVCxLQUFLLElBQUlTLEtBQUssQ0FBQ2QsU0FBUyxDQUFDO1lBQ3pDLENBQUMsQ0FBQztZQUNGLE1BQU11RSxVQUFVLEdBQUdHLElBQUksSUFBRztjQUN6QmtDLGdCQUFnQixDQUFDbEMsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNbUMsWUFBWSxHQUFHNUYsY0FBSyxDQUFDNkYsT0FBTyxDQUNqQyxPQUFPO2NBQ056RyxLQUFLLEVBQUVvRyxVQUFVLElBQUlwRyxLQUFLLElBQUlTLEtBQUssQ0FBQ2QsU0FBUztjQUM3Q2UsYUFBYTtjQUNid0QsVUFBVTtjQUNWekQsS0FBSztjQUNMWSxLQUFLO2NBQ0xDLE9BQU87Y0FDUDJDO2FBQ0EsQ0FBQyxFQUNGLENBQUNtQyxVQUFVLEVBQUVwRyxLQUFLLEVBQUVTLEtBQUssQ0FBQ2QsU0FBUyxFQUFFZSxhQUFhLEVBQUVELEtBQUssRUFBRVksS0FBSyxFQUFFQyxPQUFPLENBQUMsQ0FDMUU7WUFFRCxJQUFJLENBQUM4RSxVQUFVLElBQUksQ0FBQ3BHLEtBQUssRUFBRSxPQUFPWSw2QkFBQzhGLGdCQUFPO2NBQUNDLE1BQU0sRUFBRSxJQUFJO2NBQUVwQixJQUFJLEVBQUM7WUFBUyxFQUFHO1lBRTFFLE9BQ0MzRSw2QkFBQ2tGLDJCQUFrQixDQUFDYyxRQUFRO2NBQUN4RixLQUFLLEVBQUVvRjtZQUFZLEdBQy9DNUY7Y0FBUzBDLFNBQVMsRUFBQztZQUFjLEdBQ2hDMUM7Y0FBUzBDLFNBQVMsRUFBQztZQUFlLEdBQ2pDMUMsNkJBQUNvRCxlQUFNLE9BQUcsRUFDVnBELDZCQUFDSiw4QkFBYyxPQUFHLENBQ1QsQ0FDRCxDQUNtQjtVQUVoQyIsIm5hbWVzIjpbIkNMQVNTX0lEIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhdWRpb01hbmFnZXIiLCJWb2ljZSIsInZvaWNlIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVhZHkiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiTGVzc29uIiwiaWQiLCJjaGF0SW50cm9kdWN0aW9ucyIsInRvcGljcyIsIm1hcCIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJhc3Nlc3NtZW50cyIsIml0ZW1zIiwiUXVpeiIsInF1ZXN0aW9ucyIsInZhbHVlIiwidGV4dHMiLCJ2aXNpYmxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImZvckVhY2giLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjbGFzc05hbWUiLCJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwidXBkYXRlVmlldyIsImhlYWRlciIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiSWNvbiIsImljb24iLCJ0aXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJxdWl6Iiwib3JhbCIsIkljb25CdXR0b24iLCJpdGVtIiwidXJpIiwiYmFzZVVybCIsImhyZWYiLCJMaW5rIiwia2V5IiwibmFtZSIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIlRvcGljRGV0YWlsIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInVzZUNvbnRleHQiLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvY29udGVudC50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2xpbmtzLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvdG9waWMtZGV0YWlsLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=