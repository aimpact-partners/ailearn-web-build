System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/form.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
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
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_8 = _aimpactChat101ChatWidget;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/chat.widget', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/assessments/form.code', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/playable', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/link', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/spinner', dependency_21]]);
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
        hash: 136747673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _store = require("./store");
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2173884993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _chat = require("@aimpact/chat/chat.widget");
          var _wrapper = require("@aimpact/chat/wrapper");
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
            get chat() {
              return _wrapper.AppWrapper.currentChat;
            }
            constructor(metadata) {
              super();
              this.#metadata = metadata;
              this.reactiveProps(['loadReady']);
              this.loadReady = false;
              if (metadata) {
                this.load(this.metadata).then(() => {
                  this.ready = true;
                  this.loadReady = true;
                });
                return;
              }
              this.ready = true;
              this.loadReady = true;
            }
            async load(metadata) {
              if (metadata.lesson) {
                await this.loadLesson(metadata.lesson);
                this.#model = this.#lesson;
              }
              if (metadata.topic) await this.loadTopic(metadata);
              this.#process();
            }
            async loadLesson(lesson) {
              this.#lesson = new _core.Lesson({
                id: lesson.id
              });
              await this.#lesson.load();
              await this.#lesson.chatIntroductions.load();
            }
            async loadTopic(metadata) {
              this.#topic = await this.#lesson.topics.map.get(metadata.topic.id);
              await this.#topic.chatIntroductions.load();
              this.#model = this.#topic;
            }
            #process() {
              this.#introduction = this.#model.chatIntroductions.items.get('introduction').value.replace('%1', _session.sessionWrapper.user.displayName);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/ContentManager
      **************************************/

      ims.set('./views/ContentManager', {
        hash: 2447233140,
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
                const assessment = chatIntroductions.items.get('assessment').value.assessment[0];
                return _react.default.createElement(_form.Quiz, {
                  assessments: assessment,
                  questions: assessment.questions
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
        hash: 3418800473,
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
            const panesRef = _react.default.useRef(null);
            const elements = store.model.chatIntroductions.items;
            const content = elements.has('content') ? elements.get('content').value : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis').value : undefined;
            const intro = store.introduction;
            const audioUrl = `${_config.default.params.apis.ailearn}/lessons/elements/audios/${store.model.id}`;
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
            return _react.default.createElement("section", {
              className: `collapsible-content${visible ? ' visible' : ''}`
            }, _react.default.createElement("header", {
              className: "intro__content__header"
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
        hash: 640519615,
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
              "data-view": "content",
              variant: "primary",
              onClick: onActionClick
            }, header.introduction), _react.default.createElement(_components.Button, {
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
        hash: 292111697,
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
            if (!store.chat.children) return null;
            return React.createElement("div", {
              className: "intro__actions actions flex-container"
            }, store.chat.children.map(item => {
              const uri = `${_config.default.params.baseUrl}/chat/${item.id}`;
              return React.createElement(_components.Link, {
                key: uri,
                href: uri,
                className: "chat-link"
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
        hash: 1377995120,
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
            (0, _hooks2.useBinder)([store], () => setReady(store.ready && store.loadReady));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7VUFFaEMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImNoYXRJbnRyb2R1Y3Rpb25zIiwidG9waWNzIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJhc3Nlc3NtZW50IiwiUXVpeiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJ1cGRhdGVWaWV3IiwiaGVhZGVyIiwib25BY3Rpb25DbGljayIsInZpZXciLCJJY29uIiwiaWNvbiIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsInF1aXoiLCJvcmFsIiwiSWNvbkJ1dHRvbiIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2NvbnRlbnQudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9saW5rcy50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL3BsYXllci50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL3RvcGljLWRldGFpbC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19