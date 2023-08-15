System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/spinner"], function (_export, _context2) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['react', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/playable', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/link', dependency_17], ['pragmate-ui/spinner', dependency_18]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDTEFTU19JRCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2NoYXQiLCJfdm9pY2UiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwiVm9pY2UiLCJjb25zdHJ1Y3RvciIsInRoZW4iLCJyZWFkeSIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImNoYXRJbnRyb2R1Y3Rpb25zIiwidG9waWNzIiwibWFwIiwiX3JlYWN0IiwiX2hvb2tzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZXNzaW9uIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldFJlYWR5IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInBhbmVzUmVmIiwidXNlUmVmIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwic2l6ZSIsImVsZW1lbnRzIiwiaXRlbXMiLCJjb250ZW50IiwiaGFzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImludHJvIiwiaGVsbG8iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm1lc3NhZ2UiLCJQbGF5ZXJCdXR0b24iLCJwbGF5ZXIiLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsIl9pY29ucyIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZSIsIkljb25CdXR0b24iLCJpY29uIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJfZGVmYXVsdCIsIl9saW5rIiwiVG9waWNEZXRhaWwiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJSZWFjdCIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfY29udGVudCIsIl9zcGlubmVyIiwic2V0VmlzaWJsZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3Vy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