System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.36/components", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_12 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi0036Components) {
      dependency_14 = _pragmateUi0036Components;
    }, function (_aimpactAilearnApp100Config) {
      dependency_15 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Icons) {
      dependency_17 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_18 = _pragmateUi0036Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_20 = _pragmateUi0036Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/widgets/playable', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/spinner', dependency_20]]);
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
        hash: 3010632604,
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
              const {
                items: chats
              } = _wrapper.AppWrapper.chats;
              //process links
              if (!this.#model.topics) return;
              this.model.topics.items.forEach(item => {
                const name = item.title;
                const chat = chats.find(chat => chat.metadata?.topic?.id === item.id);
                this.#links.push({
                  href: `/chat/${chat.id}`,
                  name
                });
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/content
      ******************************************/

      ims.set('./views/components/content', {
        hash: 4184593593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _links = require("./links");
          var _config = require("@aimpact/ailearn-app/config");
          var _components2 = require("@aimpact/chat/shared/components");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            const [ready, setReady] = _react.default.useState(store.ready);
            const [fetching, setFetching] = _react.default.useState(store.model?.fetching);
            const panesRef = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            // useBinder([store.model], () => setFetching(store.model?.fetching));
            if (!ready) return _react.default.createElement("div", {
              className: "collapsible-content visible intro__loading"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary",
              size: "xl"
            }));
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
            }, _react.default.createElement("p", null, intro), _react.default.createElement(_components2.AudioPlayer, {
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
        hash: 3679615765,
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
            }, _react.default.createElement("section", {
              className: "intro-logo"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            })), _react.default.createElement("h3", null, header.title), _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: `md collapse-icon${visible ? ' visible' : ''}`,
              onClick: toggleVisibility
            }));
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
        hash: 2968400046,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBLE1BQU1BLFFBQVEsR0FBRyxzQ0FBc0M7VUFLaEQ7VUFBVSxNQUNYQyxVQUFXLFNBQVFDLDJCQUFxQjtZQUM3QyxNQUFNO1lBRU5DLFdBQVc7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsSUFBSU0sTUFBTTtjQUNULE9BQU9DLGdCQUFTO1lBQ2pCOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBVU0sTUFBT0gsWUFBYSxTQUFRSSxvQkFBMkI7WUFDNUQsT0FBTztZQUNQLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsTUFBTSxHQUFHLEVBQUU7WUFDWCxJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLGFBQWEsR0FBRyxJQUFJQyxrQkFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxhQUFhO1lBQ2IsSUFBSUMsWUFBWTtjQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDMUI7WUFDQSxJQUFJQyxZQUFZO2NBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYTtZQUMxQjtZQUVBLE1BQU0sR0FBRyxJQUFJQyxZQUFLLEVBQUU7WUFDcEIsSUFBSUMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxTQUFTO1lBQ1QsSUFBSWxCLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBR0FtQixZQUFZbkIsUUFBbUI7Y0FDOUIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBR0EsUUFBUTtjQUV6QixJQUFJQSxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDb0IsSUFBSSxDQUFDLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQyxDQUFDcUIsSUFBSSxDQUFDLE1BQU8sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSyxDQUFDO2dCQUN4RDs7Y0FFRCxJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUEsTUFBTUYsSUFBSSxDQUFDcEIsUUFBbUI7Y0FDN0IsSUFBSUEsUUFBUSxDQUFDVSxNQUFNLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDYSxVQUFVLENBQUN2QixRQUFRLENBQUNVLE1BQU0sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FHM0IsSUFBSVYsUUFBUSxDQUFDVyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUNhLFNBQVMsQ0FBQ3hCLFFBQVEsQ0FBQztjQUNsRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCO1lBRUEsTUFBTXVCLFVBQVUsQ0FBQ2IsTUFBMkI7Y0FDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJZSxZQUFNLENBQUM7Z0JBQUVDLEVBQUUsRUFBRWhCLE1BQU0sQ0FBQ2dCO2NBQUUsQ0FBRSxDQUFDO2NBQzVDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQ04sSUFBSSxFQUFFO2NBQ3pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQ08saUJBQWlCLENBQUNQLElBQUksRUFBRTtZQUM1QztZQUVBLE1BQU1JLFNBQVMsQ0FBQ3hCLFFBQW1CO2NBQ2xDO2NBRUE7Y0FDQSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQzRCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDekIsR0FBRyxDQUFDSixRQUFRLENBQUNXLEtBQUssQ0FBQ2UsRUFBRSxDQUFDO2NBQ2xFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsaUJBQWlCLENBQUNQLElBQUksRUFBRTtjQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQzFCO1lBQ0EsUUFBUTtjQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ08saUJBQWlCLENBQUNHLEtBQUssQ0FDdEQxQixHQUFHLENBQUMsY0FBYyxDQUFDLENBQ25CMkIsS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztjQUN0RCxNQUFNO2dCQUFFTCxLQUFLLEVBQUVNO2NBQUssQ0FBRSxHQUFHQyxtQkFBVSxDQUFDRCxLQUFLO2NBQ3pDO2NBRUEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUNSLE1BQU0sRUFBRTtjQUN6QixJQUFJLENBQUNoQixLQUFLLENBQUNnQixNQUFNLENBQUNFLEtBQUssQ0FBQ1EsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3RDLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxLQUFLO2dCQUN2QixNQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxJQUFJLElBQUlBLElBQUksQ0FBQzFDLFFBQVEsRUFBRVcsS0FBSyxFQUFFZSxFQUFFLEtBQUthLElBQUksQ0FBQ2IsRUFBRSxDQUFDO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDa0IsSUFBSSxDQUFDO2tCQUFFQyxJQUFJLEVBQUUsU0FBU0gsSUFBSSxDQUFDaEIsRUFBRSxFQUFFO2tCQUFFYztnQkFBSSxDQUFFLENBQUM7Y0FDckQsQ0FBQyxDQUFDO1lBQ0g7O1VBQ0FoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2R0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ2MsU0FBVXNDLE9BQU87WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFDekQsTUFBTSxDQUFDM0IsS0FBSyxFQUFFNEIsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDTCxLQUFLLENBQUN6QixLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDK0IsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR0gsY0FBSyxDQUFDQyxRQUFRLENBQUNMLEtBQUssQ0FBQ25DLEtBQUssRUFBRXlDLFFBQVEsQ0FBQztZQUNyRSxNQUFNRSxRQUFRLEdBQUdKLGNBQUssQ0FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQyxvQkFBUyxFQUFDLENBQUNULEtBQUssQ0FBQyxFQUFFLE1BQU1HLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDekIsS0FBSyxDQUFDLENBQUM7WUFDL0M7WUFDQSxJQUFJLENBQUNBLEtBQUssRUFDVCxPQUNDNkI7Y0FBS00sU0FBUyxFQUFDO1lBQTRDLEdBQzFETiw2QkFBQ08sbUJBQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRUMsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUM3QztZQUdSLE1BQU1DLFFBQVEsR0FBR2YsS0FBSyxDQUFDbkMsS0FBSyxDQUFDZSxpQkFBaUIsQ0FBQ0csS0FBSztZQUVwRCxNQUFNaUMsT0FBTyxHQUFHRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBR0YsUUFBUSxDQUFDMUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDMkIsS0FBSyxHQUFHa0MsU0FBUztZQUNuRixNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHRixRQUFRLENBQUMxRCxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMyQixLQUFLLEdBQUdrQyxTQUFTO1lBRXpGLE1BQU1FLFlBQVksR0FBR0MsS0FBSyxJQUFHO2NBQzVCLE1BQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxhQUFhO2NBQ2xDLE1BQU07Z0JBQUVDO2NBQU8sQ0FBRSxHQUFHSCxLQUFLLENBQUNFLGFBQWEsQ0FBQ0UsT0FBTztjQUMvQyxNQUFNQyxLQUFLLEdBQUdsQixRQUFRLENBQUNtQixPQUFPLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztjQUMvRE4sTUFBTSxDQUNKTyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FDN0JELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUMxQnJDLE9BQU8sQ0FBQ3VDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztjQUNwRFYsTUFBTSxDQUFDUyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDOUJQLEtBQUssQ0FBQ25DLE9BQU8sQ0FBQzJDLElBQUksSUFBRztnQkFDcEJBLElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUMvQixJQUFJRSxJQUFJLENBQUNULE9BQU8sQ0FBQ0QsT0FBTyxLQUFLQSxPQUFPLEVBQUVVLElBQUksQ0FBQ0gsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ25FLENBQUMsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNRSxLQUFLLEdBQUduQyxLQUFLLENBQUNoQyxZQUFZO1lBQ2hDLE1BQU1vRSxRQUFRLEdBQUcsR0FBR0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyw0QkFBNEJ4QyxLQUFLLENBQUNuQyxLQUFLLENBQUNjLEVBQUUsRUFBRTtZQUMxRixPQUNDeUI7Y0FBU00sU0FBUyxFQUFFLHNCQUFzQlIsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO1lBQUUsR0FDcEVFO2NBQVFNLFNBQVMsRUFBQztZQUFlLEdBQ2hDTix3Q0FBSStCLEtBQUssQ0FBSyxFQUNkL0IsNkJBQUNxQyx3QkFBVztjQUFDQyxHQUFHLEVBQUVOLFFBQVE7Y0FBRU8sTUFBTSxFQUFDO1lBQU8sRUFBRyxDQUNyQyxFQUNUdkM7Y0FBU00sU0FBUyxFQUFDO1lBQTRDLEdBQzlETjtjQUFBLGdCQUFvQixXQUFXO2NBQUN3QyxPQUFPLEVBQUV4QixZQUFZO2NBQUVWLFNBQVMsRUFBQztZQUEyQixHQUMxRlQsS0FBSyxDQUFDYyxRQUFRLENBQUNJLFNBQVMsQ0FDbEIsRUFDUmY7Y0FBQSxnQkFBb0IsU0FBUztjQUFDd0MsT0FBTyxFQUFFeEIsWUFBWTtjQUFFVixTQUFTLEVBQUM7WUFBb0IsR0FDakZULEtBQUssQ0FBQ2MsUUFBUSxDQUFDQyxPQUFPLENBQ2hCLENBQ0MsRUFFVlo7Y0FBU00sU0FBUyxFQUFDLGNBQWM7Y0FBQ21DLEdBQUcsRUFBRXJDO1lBQVEsR0FDOUNKO2NBQVNNLFNBQVMsRUFBQyxxQ0FBcUM7Y0FBQSxnQkFBYztZQUFXLEdBQ2hGTiw2QkFBQzBDLGtCQUFRO2NBQUM5QixPQUFPLEVBQUVHO1lBQVMsRUFBSSxDQUN2QixFQUNWZjtjQUFTTSxTQUFTLEVBQUMsOEJBQThCO2NBQUEsZ0JBQWM7WUFBUyxHQUN2RU4sNkJBQUMyQyxrQkFBUTtjQUFDQyxNQUFNLEVBQUVoRCxLQUFLLENBQUM3QixLQUFLO2NBQUU2QyxPQUFPLEVBQUVBLE9BQU87Y0FBRXJDLEVBQUUsRUFBQztZQUFTLEVBQUcsQ0FDdkQsQ0FDRCxFQUNWeUIsNkJBQUM2QyxZQUFLLE9BQUcsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQTtVQUNBO1VBQ0E7VUFFYyxTQUFVQyxNQUFNO1lBQzdCLE1BQU07Y0FDTGhELE9BQU87Y0FDUGlELGdCQUFnQjtjQUNoQmxELEtBQUssRUFBRTtnQkFBRW1EO2NBQU07WUFBRSxDQUNqQixHQUFHLGtDQUFxQixHQUFFO1lBQzNCLE9BQ0NoRDtjQUFRTSxTQUFTLEVBQUM7WUFBYyxHQUMvQk47Y0FBU00sU0FBUyxFQUFDO1lBQVksR0FDOUJOLDZCQUFDaUQsV0FBSTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDNUMsU0FBUyxFQUFDO1lBQWdCLEVBQUcsQ0FDdkMsRUFDVk4seUNBQUtnRCxNQUFNLENBQUMxRCxLQUFLLENBQU0sRUFDdkJVLDZCQUFDbUQsaUJBQVU7Y0FDVkQsSUFBSSxFQUFDLE9BQU87Y0FDWjVDLFNBQVMsRUFBRSxtQkFBbUJSLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFO2NBQ3pEMEMsT0FBTyxFQUFFTztZQUFnQixFQUN4QixDQUNNO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVUYsS0FBSztZQUNwQixNQUFNO2NBQUVqRDtZQUFLLENBQUUsR0FBRyxrQ0FBcUIsR0FBRTtZQUN6QyxJQUFJLENBQUNBLEtBQUssQ0FBQ2xDLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDN0IsT0FDQ3NDO2NBQUtNLFNBQVMsRUFBQztZQUF1QyxHQUNwRFYsS0FBSyxDQUFDbEMsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDVSxJQUFJLElBQUc7Y0FDdkIsTUFBTWdFLEdBQUcsR0FBRyxHQUFHbkIsZUFBTSxDQUFDQyxNQUFNLENBQUNtQixPQUFPLEdBQUdqRSxJQUFJLENBQUNNLElBQUksRUFBRTtjQUNsRCxPQUNDTSxvQkFBQ3NELGdCQUFJO2dCQUFDQyxHQUFHLEVBQUVILEdBQUc7Z0JBQUUxRCxJQUFJLEVBQUUwRCxHQUFHO2dCQUFFOUMsU0FBUyxFQUFDO2NBQTRCLEdBQy9EbEIsSUFBSSxDQUFDQyxJQUFJLENBQ0o7WUFFVCxDQUFDLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQTtVQUNBO1VBRU8sTUFBTW1FLFlBQVksR0FBRyxDQUFDO1lBQUVDO1VBQUksQ0FBRSxLQUFJO1lBQ3hDLE1BQU07Y0FBRTdEO1lBQUssQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBQ3pDLE1BQU1hLElBQUksR0FBRyxZQUFZO1lBQ3pCLE1BQU0sQ0FBQ2lELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcsbUJBQVEsRUFBQyxJQUFJLENBQUM7WUFFOUMsb0JBQVMsRUFBQyxNQUFLO2NBQ2QsTUFBTUMsUUFBUSxHQUFHLFlBQVc7Z0JBQzNCLE1BQU10QixHQUFHLEdBQUcsTUFBTTFDLEtBQUssQ0FBQzdCLEtBQUssQ0FBQzhGLHVCQUF1QixDQUFDSixJQUFJLEVBQUVoRCxJQUFJLENBQUM7Z0JBQ2pFa0QsV0FBVyxDQUFDckIsR0FBRyxDQUFDO2NBQ2pCLENBQUM7Y0FDRHNCLFFBQVEsRUFBRTtZQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDNUQsMENBQ0NBO2NBQU84RCxRQUFRO1lBQUEsR0FDZDlEO2NBQVFzQyxHQUFHLEVBQUVvQixRQUFRO2NBQUVqRCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUM5QixDQUNIO1VBRVIsQ0FBQztVQUFDcEQ7VUFBQSxlQUVhbUcsWUFBWTtVQUFBbkc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekIzQjtVQUNBO1VBQ0E7VUFFYyxTQUFVMEcsV0FBVyxDQUFDO1lBQUV2RztVQUFLLENBQUU7WUFDNUMsT0FDQ3dDO2NBQUtNLFNBQVMsRUFBQztZQUFPLEdBQ3JCTix5Q0FBS3hDLEtBQUssQ0FBQzhCLEtBQUssQ0FBTSxFQUN0QlUsd0NBQUl4QyxLQUFLLENBQUN1RCxTQUFTLENBQUNILE9BQU8sQ0FBSyxFQUNoQ1osNkJBQUNzRCxVQUFJO2NBQUNoRCxTQUFTLEVBQUMsa0JBQWtCO2NBQUNaLElBQUksRUFBRSxTQUFTbEMsS0FBSyxDQUFDZSxFQUFFO1lBQUUsR0FDM0R5Qiw2QkFBQ2lELFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNwQmxELDZEQUFxQixDQUNmLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQVFPLE1BQU1nRSxrQkFBa0IsR0FBR2hFLEtBQUssQ0FBQ2lFLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQUM1RztVQUMxRSxNQUFNNkcscUJBQXFCLEdBQUcsTUFBTWxFLEtBQUssQ0FBQ21FLFVBQVUsQ0FBQ0gsa0JBQWtCLENBQUM7VUFBQzNHOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RoRjtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBRU0sU0FBVUQsU0FBUyxDQUFDO1lBQUV3QztVQUFLLENBQUU7WUFDbEMsTUFBTSxDQUFDRSxPQUFPLEVBQUVzRSxVQUFVLENBQUMsR0FBR3BFLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsRCxNQUFNLENBQUM5QixLQUFLLEVBQUU0QixRQUFRLENBQUMsR0FBR0MsY0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU0sQ0FBQ29FLFVBQVUsRUFBRXhFLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUN5RSxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTXhCLGdCQUFnQixHQUFHLE1BQU1xQixVQUFVLENBQUMsQ0FBQ3RFLE9BQU8sQ0FBQztZQUVuRCxxQkFBUyxFQUFDLENBQUNGLEtBQUssQ0FBQyxFQUFFLE1BQU1HLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDekIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDa0csVUFBVSxJQUFJLENBQUNsRyxLQUFLLEVBQUUsT0FBTzZCLDZCQUFDTyxnQkFBTztjQUFDQyxNQUFNLEVBQUUsSUFBSTtjQUFFQyxJQUFJLEVBQUM7WUFBUyxFQUFHO1lBQzFFLE9BQ0NULDZCQUFDZ0UsMkJBQWtCLENBQUNRLFFBQVE7Y0FBQzVGLEtBQUssRUFBRTtnQkFBRWdCLEtBQUs7Z0JBQUVDLEtBQUs7Z0JBQUVDLE9BQU87Z0JBQUVpRDtjQUFnQjtZQUFFLEdBQzlFL0M7Y0FBU00sU0FBUyxFQUFDO1lBQWMsR0FFaENOO2NBQVNNLFNBQVMsRUFBQztZQUFlLEdBQ2pDTiw2QkFBQzhDLGVBQU0sT0FBRyxFQUNWOUMsNkJBQUNMLGdCQUFPLE9BQUcsQ0FDRixDQUNELENBQ21CO1VBRWhDIiwibmFtZXMiOlsiQ0xBU1NfSUQiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjb25zdHJ1Y3RvciIsImxvYWQiLCJ0aGVuIiwicmVhZHkiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiTGVzc29uIiwiaWQiLCJjaGF0SW50cm9kdWN0aW9ucyIsInRvcGljcyIsIm1hcCIsIml0ZW1zIiwidmFsdWUiLCJyZXBsYWNlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJmb3JFYWNoIiwiaXRlbSIsIm5hbWUiLCJ0aXRsZSIsImNoYXQiLCJmaW5kIiwicHVzaCIsImhyZWYiLCJDb250ZW50Iiwic3RvcmUiLCJ0ZXh0cyIsInZpc2libGUiLCJzZXRSZWFkeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJjbGFzc05hbWUiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsInNpemUiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciIsIkxpbmtzIiwiSGVhZGVyIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsIkljb24iLCJpY29uIiwiSWNvbkJ1dHRvbiIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2V0VmlzaWJsZSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvbGlua3MudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=