System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/form.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_5 = _beyondJsReactive113Model;
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
        hash: 1795492842,
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
              //await this.loadLesson(metadata.lesson);
              // this.#lesson.topics.add({ id: metadata.topic.id }})
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
        hash: 4060620834,
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
                  assessments: assessments.value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBT087VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUM3QyxNQUFNO1lBRU5DLFdBQVc7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsSUFBSU0sTUFBTTtjQUNULE9BQU9DLGdCQUFTO1lBQ2pCOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBVU0sTUFBT0gsWUFBYSxTQUFRSSxvQkFBMkI7WUFDNUQsT0FBTztZQUNQLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsTUFBTSxHQUFHLEVBQUU7WUFDWCxJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLGFBQWEsR0FBRyxJQUFJQyxrQkFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxhQUFhO1lBQ2IsSUFBSUMsWUFBWTtjQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDMUI7WUFDQSxJQUFJQyxZQUFZO2NBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYTtZQUMxQjtZQUVBLE1BQU0sR0FBRyxJQUFJQyxZQUFLLEVBQUU7WUFDcEIsSUFBSUMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxTQUFTO1lBQ1QsSUFBSWxCLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsSUFBSW1CLElBQUk7Y0FDUCxPQUFPQyxtQkFBVSxDQUFDQyxXQUFXO1lBQzlCO1lBRUFDLFlBQVl0QixRQUFtQjtjQUM5QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsU0FBUyxHQUFHQSxRQUFRO2NBRXpCLElBQUksQ0FBQ3VCLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2NBQ2pDLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7Y0FDdEIsSUFBSXhCLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUN5QixJQUFJLENBQUMsSUFBSSxDQUFDekIsUUFBUSxDQUFDLENBQUMwQixJQUFJLENBQUMsTUFBSztrQkFDbEMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtrQkFDakIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsSUFBSTtnQkFDdEIsQ0FBQyxDQUFDO2dCQUNGOztjQUdELElBQUksQ0FBQ0csS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsSUFBSTtZQUN0QjtZQUVBLE1BQU1DLElBQUksQ0FBQ3pCLFFBQW1CO2NBQzdCLElBQUlBLFFBQVEsQ0FBQ1UsTUFBTSxFQUFFO2dCQUNwQixNQUFNLElBQUksQ0FBQ2tCLFVBQVUsQ0FBQzVCLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUczQixJQUFJVixRQUFRLENBQUNXLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQzdCLFFBQVEsQ0FBQztjQUNsRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCO1lBRUEsTUFBTTRCLFVBQVUsQ0FBQ2xCLE1BQTJCO2NBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSW9CLFlBQU0sQ0FBQztnQkFBRUMsRUFBRSxFQUFFckIsTUFBTSxDQUFDcUI7Y0FBRSxDQUFFLENBQUM7Y0FDNUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDTixJQUFJLEVBQUU7Y0FDekIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDTyxpQkFBaUIsQ0FBQ1AsSUFBSSxFQUFFO1lBQzVDO1lBRUEsTUFBTUksU0FBUyxDQUFDN0IsUUFBbUI7Y0FDbEM7Y0FFQTtjQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDaUMsTUFBTSxDQUFDQyxHQUFHLENBQUM5QixHQUFHLENBQUNKLFFBQVEsQ0FBQ1csS0FBSyxDQUFDb0IsRUFBRSxDQUFDO2NBQ2xFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsaUJBQWlCLENBQUNQLElBQUksRUFBRTtjQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQzFCO1lBQ0EsUUFBUTtjQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ08saUJBQWlCLENBQUNHLEtBQUssQ0FDdEQvQixHQUFHLENBQUMsY0FBYyxDQUFDLENBQ25CZ0MsS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztZQUN2RDs7VUFDQWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hHRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVWlDLGNBQWM7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWEsQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBRXhELE1BQU0sQ0FBQy9CLEtBQUssRUFBRWdDLFFBQVEsQ0FBQyxHQUFHQyxjQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDOUIsS0FBSyxDQUFDO1lBQ3JELG9CQUFTLEVBQUMsQ0FBQzhCLEtBQUssQ0FBQyxFQUFFLE1BQU1FLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDOUIsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDOEIsS0FBSyxDQUFDOUIsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUM3QixNQUFNO2NBQUVvQjtZQUFpQixDQUFFLEdBQUdwQixLQUFLO1lBRW5DLE1BQU1tQyxPQUFPLEdBQUcsTUFBSztjQUNwQixJQUFJSixhQUFhLEtBQUssU0FBUyxFQUFFLE9BQU9FLDZCQUFDRyxnQkFBTyxPQUFHO2NBQ25ELElBQUlMLGFBQWEsS0FBSyxNQUFNLEVBQUU7Z0JBQzdCLE1BQU1NLFdBQVcsR0FBR2pCLGlCQUFpQixDQUFDRyxLQUFLLENBQUMvQixHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUM3RCxPQUFPeUMsNkJBQUNLLFVBQUk7a0JBQUNELFdBQVcsRUFBRUEsV0FBVyxDQUFDYixLQUFLO2tCQUFFZSxTQUFTLEVBQUVGLFdBQVcsQ0FBQ2IsS0FBSyxDQUFDZTtnQkFBUyxFQUFJOztZQUV6RixDQUFDO1lBRUQsT0FDQ04sMENBQ0NBLDZCQUFDRSxPQUFPLE9BQUcsQ0FDTjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUVBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNjLFNBQVVDLE9BQU87WUFDOUIsTUFBTTtjQUFFTixLQUFLO2NBQUVVLEtBQUs7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFDekQsTUFBTUMsUUFBUSxHQUFHVCxjQUFLLENBQUNVLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsTUFBTUMsUUFBUSxHQUFHZCxLQUFLLENBQUM5QixLQUFLLENBQUNvQixpQkFBaUIsQ0FBQ0csS0FBSztZQUNwRCxNQUFNc0IsT0FBTyxHQUFHRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBR0YsUUFBUSxDQUFDcEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDZ0MsS0FBSyxHQUFHdUIsU0FBUztZQUNuRixNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHRixRQUFRLENBQUNwRCxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNnQyxLQUFLLEdBQUd1QixTQUFTO1lBQ3pGLE1BQU1FLEtBQUssR0FBR25CLEtBQUssQ0FBQzNCLFlBQVk7WUFDaEMsTUFBTStDLFFBQVEsR0FBRyxHQUFHQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLDRCQUE0QnhCLEtBQUssQ0FBQzlCLEtBQUssQ0FBQ21CLEVBQUUsRUFBRTtZQUUxRixNQUFNb0MsWUFBWSxHQUFHQyxLQUFLLElBQUc7Y0FDNUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLGFBQWE7Y0FDbEMsTUFBTTtnQkFBRUM7Y0FBTyxDQUFFLEdBQUdILEtBQUssQ0FBQ0UsYUFBYSxDQUFDRSxPQUFPO2NBQy9DLE1BQU1DLEtBQUssR0FBR25CLFFBQVEsQ0FBQ29CLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2NBQy9ETixNQUFNLENBQ0pPLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUM3QkQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQzFCRSxPQUFPLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztjQUNwRFgsTUFBTSxDQUFDVSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDOUJSLEtBQUssQ0FBQ0ksT0FBTyxDQUFDSyxJQUFJLElBQUc7Z0JBQ3BCQSxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsSUFBSUUsSUFBSSxDQUFDVixPQUFPLENBQUNELE9BQU8sS0FBS0EsT0FBTyxFQUFFVyxJQUFJLENBQUNILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUNuRSxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQ3BDO2NBQVNzQyxTQUFTLEVBQUUsc0JBQXNCOUIsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO1lBQUUsR0FDcEVSO2NBQVFzQyxTQUFTLEVBQUM7WUFBd0IsR0FDekN0Qyx3Q0FBSWdCLEtBQUssQ0FBSyxFQUNkaEIsNkJBQUN1Qyx1QkFBVztjQUFDQyxHQUFHLEVBQUV2QixRQUFRO2NBQUV3QixNQUFNLEVBQUM7WUFBTyxFQUFHLENBQ3JDLEVBQ1R6QztjQUFTc0MsU0FBUyxFQUFDO1lBQTRDLEdBQzlEdEM7Y0FBQSxnQkFBb0IsV0FBVztjQUFDMEMsT0FBTyxFQUFFcEIsWUFBWTtjQUFFZ0IsU0FBUyxFQUFDO1lBQTJCLEdBQzFGL0IsS0FBSyxDQUFDSSxRQUFRLENBQUNJLFNBQVMsQ0FDbEIsRUFDUmY7Y0FBQSxnQkFBb0IsU0FBUztjQUFDMEMsT0FBTyxFQUFFcEIsWUFBWTtjQUFFZ0IsU0FBUyxFQUFDO1lBQW9CLEdBQ2pGL0IsS0FBSyxDQUFDSSxRQUFRLENBQUNDLE9BQU8sQ0FDaEIsQ0FDQyxFQUVWWjtjQUFTc0MsU0FBUyxFQUFDLGNBQWM7Y0FBQ0ssR0FBRyxFQUFFbEM7WUFBUSxHQUM5Q1Q7Y0FBU3NDLFNBQVMsRUFBQyxxQ0FBcUM7Y0FBQSxnQkFBYztZQUFXLEdBQ2hGdEMsNkJBQUM0QyxrQkFBUTtjQUFDaEMsT0FBTyxFQUFFRztZQUFTLEVBQUksQ0FDdkIsRUFDVmY7Y0FBU3NDLFNBQVMsRUFBQyw4QkFBOEI7Y0FBQSxnQkFBYztZQUFTLEdBQ3ZFdEMsNkJBQUM2QyxrQkFBUTtjQUFDQyxNQUFNLEVBQUVqRCxLQUFLLENBQUN4QixLQUFLO2NBQUV1QyxPQUFPLEVBQUVBLE9BQU87Y0FBRTFCLEVBQUUsRUFBQztZQUFTLEVBQUcsQ0FDdkQsQ0FDRCxFQUNWYyw2QkFBQytDLFlBQUssT0FBRyxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBO1VBQ0E7VUFDQTtVQUNBO1VBQ2MsU0FBVUMsTUFBTTtZQUM3QixNQUFNO2NBQ0x4QyxPQUFPO2NBQ1B5QyxnQkFBZ0I7Y0FDaEJDLFVBQVU7Y0FFVjNDLEtBQUssRUFBRTtnQkFBRTRDLE1BQU07Z0JBQUUvQztjQUFXO1lBQUUsQ0FDOUIsR0FBRyxrQ0FBcUIsR0FBRTtZQUMzQixNQUFNZ0QsYUFBYSxHQUFHN0IsS0FBSyxJQUFHO2NBQzdCMkIsVUFBVSxDQUFDM0IsS0FBSyxDQUFDRSxhQUFhLENBQUNFLE9BQU8sQ0FBQzBCLElBQUksQ0FBQztZQUM3QyxDQUFDO1lBRUQsT0FDQ3JEO2NBQVFzQyxTQUFTLEVBQUM7WUFBZSxHQUNoQ3RDO2NBQVNzQyxTQUFTLEVBQUM7WUFBOEIsR0FDaER0Qyw2QkFBQ3NELFdBQUk7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ2pCLFNBQVMsRUFBQztZQUFnQixFQUFHLEVBQ2hEdEMseUNBQUttRCxNQUFNLENBQUNLLEtBQUssQ0FBTSxDQUNkLEVBQ1Z4RDtjQUFLc0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CdEMsNkJBQUN5RCxrQkFBTTtjQUFBLGFBQVcsU0FBUztjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDaEIsT0FBTyxFQUFFVTtZQUFhLEdBQ2xFRCxNQUFNLENBQUNqRixZQUFZLENBQ1osRUFDVDhCLDZCQUFDeUQsa0JBQU07Y0FBQSxhQUFXLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ2hCLE9BQU8sRUFBRVU7WUFBYSxHQUMvRGhELFdBQVcsQ0FBQ3VELElBQUksQ0FDVCxFQUNUM0QsNkJBQUN5RCxrQkFBTTtjQUFBLGFBQVcsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDaEIsT0FBTyxFQUFFVTtZQUFhLEdBQy9EaEQsV0FBVyxDQUFDd0QsSUFBSSxDQUNULEVBQ1Q1RCw2QkFBQzZELGlCQUFVO2NBQ1ZOLElBQUksRUFBQyxPQUFPO2NBQ1pqQixTQUFTLEVBQUUsbUJBQW1COUIsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUU7Y0FDekRrQyxPQUFPLEVBQUVPO1lBQWdCLEVBQ3hCLENBQ0csQ0FDRTtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQTtVQUNBO1VBQ0E7VUFDQTtVQUNNLFNBQVVGLEtBQUs7WUFDcEIsTUFBTTtjQUFFbEQ7WUFBSyxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFDekMsSUFBSSxDQUFDQSxLQUFLLENBQUN2QixJQUFJLENBQUN3RixRQUFRLEVBQUUsT0FBTyxJQUFJO1lBQ3JDLE9BQ0M5RDtjQUFLc0MsU0FBUyxFQUFDO1lBQXVDLEdBQ3BEekMsS0FBSyxDQUFDdkIsSUFBSSxDQUFDd0YsUUFBUSxDQUFDekUsR0FBRyxDQUFDMEUsSUFBSSxJQUFHO2NBQy9CLE1BQU1DLEdBQUcsR0FBRyxHQUFHOUMsZUFBTSxDQUFDQyxNQUFNLENBQUM4QyxPQUFPLFNBQVNGLElBQUksQ0FBQzdFLEVBQUUsRUFBRTtjQUN0RCxPQUNDYyxvQkFBQ2tFLGdCQUFJO2dCQUFDQyxHQUFHLEVBQUVILEdBQUc7Z0JBQUVJLElBQUksRUFBRUosR0FBRztnQkFBRTFCLFNBQVMsRUFBQztjQUFXLEdBQzlDeUIsSUFBSSxDQUFDTSxJQUFJLENBQ0o7WUFFVCxDQUFDLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQTtVQUNBO1VBRU8sTUFBTUMsWUFBWSxHQUFHLENBQUM7WUFBRUM7VUFBSSxDQUFFLEtBQUk7WUFDeEMsTUFBTTtjQUFFMUU7WUFBSyxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFDekMsTUFBTTJFLElBQUksR0FBRyxZQUFZO1lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRyxtQkFBUSxFQUFDLElBQUksQ0FBQztZQUU5QyxvQkFBUyxFQUFDLE1BQUs7Y0FDZCxNQUFNQyxRQUFRLEdBQUcsWUFBVztnQkFDM0IsTUFBTW5DLEdBQUcsR0FBRyxNQUFNM0MsS0FBSyxDQUFDeEIsS0FBSyxDQUFDdUcsdUJBQXVCLENBQUNMLElBQUksRUFBRUMsSUFBSSxDQUFDO2dCQUNqRUUsV0FBVyxDQUFDbEMsR0FBRyxDQUFDO2NBQ2pCLENBQUM7Y0FDRG1DLFFBQVEsRUFBRTtZQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDM0UsMENBQ0NBO2NBQU82RSxRQUFRO1lBQUEsR0FDZDdFO2NBQVF3QyxHQUFHLEVBQUVpQyxRQUFRO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLENBQzlCLENBQ0g7VUFFUixDQUFDO1VBQUM3RztVQUFBLGVBRWEyRyxZQUFZO1VBQUEzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QjNCO1VBQ0E7VUFDQTtVQUVjLFNBQVVtSCxXQUFXLENBQUM7WUFBRWhIO1VBQUssQ0FBRTtZQUM1QyxPQUNDa0M7Y0FBS3NDLFNBQVMsRUFBQztZQUFPLEdBQ3JCdEMseUNBQUtsQyxLQUFLLENBQUMwRixLQUFLLENBQU0sRUFDdEJ4RCx3Q0FBSWxDLEtBQUssQ0FBQ2lELFNBQVMsQ0FBQ0gsT0FBTyxDQUFLLEVBQ2hDWiw2QkFBQ2tFLFVBQUk7Y0FBQzVCLFNBQVMsRUFBQyxrQkFBa0I7Y0FBQzhCLElBQUksRUFBRSxTQUFTdEcsS0FBSyxDQUFDb0IsRUFBRTtZQUFFLEdBQzNEYyw2QkFBQ3NELFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNwQnZELDZEQUFxQixDQUNmLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQVdPLE1BQU0rRSxrQkFBa0IsR0FBRy9FLEtBQUssQ0FBQ2dGLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQUNySDtVQUMxRSxNQUFNc0gscUJBQXFCLEdBQUcsTUFBTWpGLEtBQUssQ0FBQ2tGLFVBQVUsQ0FBQ0gsa0JBQWtCLENBQUM7VUFBQ3BIOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1poRjtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFHQTtVQUNBO1VBRU0sU0FBVUQsU0FBUyxDQUFDO1lBQUVtQztVQUFLLENBQUU7WUFDbEMsTUFBTSxDQUFDVyxPQUFPLEVBQUUyRSxVQUFVLENBQUMsR0FBR25GLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsRCxNQUFNLENBQUNuQixLQUFLLEVBQUVzRyxRQUFRLENBQUMsR0FBR3BGLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxNQUFNLENBQUNvRixVQUFVLEVBQUU5RSxLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDK0Usc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU10QyxnQkFBZ0IsR0FBRyxNQUFNa0MsVUFBVSxDQUFDLENBQUMzRSxPQUFPLENBQUM7WUFDbkQsTUFBTSxDQUFDVixhQUFhLEVBQUUwRixnQkFBZ0IsQ0FBQyxHQUFHeEYsY0FBSyxDQUFDQyxRQUFRLENBQVMsU0FBUyxDQUFDO1lBRTNFLHFCQUFTLEVBQUMsQ0FBQ0osS0FBSyxDQUFDLEVBQUUsTUFBTXVGLFFBQVEsQ0FBQ3ZGLEtBQUssQ0FBQ2YsS0FBSyxJQUFJZSxLQUFLLENBQUNsQixTQUFTLENBQUMsQ0FBQztZQUNsRSxNQUFNdUUsVUFBVSxHQUFHRyxJQUFJLElBQUc7Y0FDekJtQyxnQkFBZ0IsQ0FBQ25DLElBQUksQ0FBQztZQUN2QixDQUFDO1lBQ0QsTUFBTW9DLFlBQVksR0FBR3pGLGNBQUssQ0FBQzBGLE9BQU8sQ0FDakMsT0FBTztjQUNONUcsS0FBSyxFQUFFdUcsVUFBVSxJQUFJdkcsS0FBSyxJQUFJZSxLQUFLLENBQUNsQixTQUFTO2NBQzdDbUIsYUFBYTtjQUNib0QsVUFBVTtjQUNWckQsS0FBSztjQUNMVSxLQUFLO2NBQ0xDLE9BQU87Y0FDUHlDO2FBQ0EsQ0FBQyxFQUNGLENBQUNvQyxVQUFVLEVBQUV2RyxLQUFLLEVBQUVlLEtBQUssQ0FBQ2xCLFNBQVMsRUFBRW1CLGFBQWEsRUFBRUQsS0FBSyxFQUFFVSxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxDQUMxRTtZQUVELElBQUksQ0FBQzZFLFVBQVUsSUFBSSxDQUFDdkcsS0FBSyxFQUFFLE9BQU9rQiw2QkFBQzJGLGdCQUFPO2NBQUNDLE1BQU0sRUFBRSxJQUFJO2NBQUVwQixJQUFJLEVBQUM7WUFBUyxFQUFHO1lBRTFFLE9BQ0N4RSw2QkFBQytFLDJCQUFrQixDQUFDYyxRQUFRO2NBQUN0RyxLQUFLLEVBQUVrRztZQUFZLEdBQy9DekY7Y0FBU3NDLFNBQVMsRUFBQztZQUFjLEdBQ2hDdEM7Y0FBU3NDLFNBQVMsRUFBQztZQUFlLEdBQ2pDdEMsNkJBQUNnRCxlQUFNLE9BQUcsRUFDVmhELDZCQUFDSiw4QkFBYyxPQUFHLENBQ1QsQ0FDRCxDQUNtQjtVQUVoQyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImxpbmtzIiwiQXVkaW9NYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiY2hhdEludHJvZHVjdGlvbnMiLCJ0b3BpY3MiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiQ29udGVudE1hbmFnZXIiLCJzdG9yZSIsImFjdGl2ZUNvbnRyb2wiLCJzZXRNb2RlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250cm9sIiwiQ29udGVudCIsImFzc2Vzc21lbnRzIiwiUXVpeiIsInF1ZXN0aW9ucyIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImZvckVhY2giLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJjbGFzc05hbWUiLCJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwidXBkYXRlVmlldyIsImhlYWRlciIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiSWNvbiIsImljb24iLCJ0aXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJxdWl6Iiwib3JhbCIsIkljb25CdXR0b24iLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwiZ2V0QXVkaW8iLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiVG9waWNEZXRhaWwiLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3RpdmVDb250cm9sIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvbGlua3MudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==