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
        hash: 3201533222,
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
                console.log(10, assessment, chatIntroductions.items.get('assessment'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztZQUFjLEdBQ2hDekM7Y0FBU3lDLFNBQVMsRUFBQztZQUFlLEdBQ2pDekMsNkJBQUNtRCxlQUFNLE9BQUcsRUFDVm5ELDZCQUFDSiw4QkFBYyxPQUFHLENBQ1QsQ0FDRCxDQUNtQjtVQUVoQyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImxpbmtzIiwiQXVkaW9NYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiY2hhdEludHJvZHVjdGlvbnMiLCJ0b3BpY3MiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiQ29udGVudE1hbmFnZXIiLCJzdG9yZSIsImFjdGl2ZUNvbnRyb2wiLCJzZXRNb2RlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250cm9sIiwiQ29udGVudCIsImFzc2Vzc21lbnQiLCJjb25zb2xlIiwibG9nIiwiUXVpeiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJ1cGRhdGVWaWV3IiwiaGVhZGVyIiwib25BY3Rpb25DbGljayIsInZpZXciLCJJY29uIiwiaWNvbiIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsInF1aXoiLCJvcmFsIiwiSWNvbkJ1dHRvbiIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2NvbnRlbnQudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9saW5rcy50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL3BsYXllci50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL3RvcGljLWRldGFpbC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19