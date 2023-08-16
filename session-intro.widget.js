System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0036Toast) {
      dependency_10 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Icons) {
      dependency_11 = _pragmateUi0036Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_13 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi0036Components) {
      dependency_15 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Link) {
      dependency_17 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Spinner) {
      dependency_18 = _pragmateUi0036Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/playable', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/link', dependency_17], ['pragmate-ui/spinner', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.11/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/session-intro.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3334374660,
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 3388174436,
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
              if (metadata.lesson) {
                await this.loadLesson(metadata.lesson);
                this.#model = this.#lesson;
              }
              if (metadata.topic) return this.loadTopic(metadata);
            }
            async loadLesson(lesson) {
              this.#lesson = new _core.Lesson({
                id: lesson.id
              });
              await this.#lesson.load();
              await this.#lesson.chatIntroductions.load();
            }
            async loadTopic(metadata) {
              await this.loadLesson(metadata.lesson);
              // this.#lesson.topics.add({ id: metadata.topic.id }})
              this.#topic = await this.#lesson.topics.map.get(metadata.topic.id);
              await this.#topic.chatIntroductions.load();
              this.#model = this.#topic;
              // this.#topic = new Topic({ id: metadata.topic.id });
              // this.#model = this.#topic;
              // console.log(99, this.#topic);
              // await this.#topic.load();
            }
          }

          exports.StoreManager = StoreManager;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/content
      ******************************************/

      ims.set('./views/components/content', {
        hash: 2471609396,
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
          var _session = require("@aimpact/chat-sdk/session");
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
            // const { topic } = store;
            // let topicsList;
            // if (topic) {
            // 	topicsList = topic.elements?.map((topic, i) => <TopicDetail key={`topic ${i}`} topic={topic} />);
            // }
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
            const intro = `${texts.intro.hello} ${_session.sessionWrapper.user.displayName}!, ${texts.intro.message}:`;
            return _react.default.createElement("section", {
              className: `collapsible-content${visible ? ' visible' : ''}`
            }, _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("h4", null, intro), _react.default.createElement(_playable.PlayerButton, {
              player: store.voice,
              content: content,
              id: "content"
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
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0UsVUFBVSxFQUFFeEUsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ3lFLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNeEIsZ0JBQWdCLEdBQUcsTUFBTXFCLFVBQVUsQ0FBQyxDQUFDdEUsT0FBTyxDQUFDO1lBRW5ELHFCQUFTLEVBQUMsQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsTUFBTUcsUUFBUSxDQUFDSCxLQUFLLENBQUNULEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ2tGLFVBQVUsSUFBSSxDQUFDbEYsS0FBSyxFQUFFLE9BQU9hLDZCQUFDTyxnQkFBTztjQUFDQyxNQUFNLEVBQUUsSUFBSTtjQUFFQyxJQUFJLEVBQUM7WUFBUyxFQUFHO1lBQzFFLE9BQ0NULDZCQUFDZ0UsMkJBQWtCLENBQUNRLFFBQVE7Y0FBQ3pELEtBQUssRUFBRTtnQkFBRW5CLEtBQUs7Z0JBQUVDLEtBQUs7Z0JBQUVDLE9BQU87Z0JBQUVpRDtjQUFnQjtZQUFFLEdBQzlFL0M7Y0FBU00sU0FBUyxFQUFDO1lBQWMsR0FDaENOO2NBQVNNLFNBQVMsRUFBQztZQUFZLEdBQzlCTiw2QkFBQytELFdBQUk7Y0FBQ1osSUFBSSxFQUFDLE9BQU87Y0FBQzdDLFNBQVMsRUFBQztZQUFnQixFQUFHLENBQ3ZDLEVBQ1ZOO2NBQVNNLFNBQVMsRUFBQztZQUFlLEdBQ2pDTiw2QkFBQzhDLGVBQU0sT0FBRyxFQUNWOUMsNkJBQUNMLGdCQUFPLE9BQUcsQ0FDRixDQUNELENBQ21CO1VBRWhDIiwibmFtZXMiOlsiQ0xBU1NfSUQiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJBdWRpb01hbmFnZXIiLCJhdWRpb01hbmFnZXIiLCJWb2ljZSIsInZvaWNlIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwicmVhZHkiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiTGVzc29uIiwiaWQiLCJjaGF0SW50cm9kdWN0aW9ucyIsInRvcGljcyIsIm1hcCIsIkNvbnRlbnQiLCJzdG9yZSIsInRleHRzIiwidmlzaWJsZSIsInNldFJlYWR5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJwYW5lc1JlZiIsInVzZVJlZiIsImNsYXNzTmFtZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwic2l6ZSIsImVsZW1lbnRzIiwiaXRlbXMiLCJjb250ZW50IiwiaGFzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImludHJvIiwiaGVsbG8iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJQbGF5ZXJCdXR0b24iLCJwbGF5ZXIiLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZSIsIkljb25CdXR0b24iLCJpY29uIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsIkxpbmsiLCJocmVmIiwiSWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2V0VmlzaWJsZSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvdG9waWMtZGV0YWlsLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==