System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.2/model/wrapper", "@bgroup/media-manager@1.0.0/recorder", "react@18.2.0", "@aimpact/ailearn-app@0.0.2/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.2/config", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/preload", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    RecordingButton: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_aimpactChat101Wrapper) {
      dependency_3 = _aimpactChat101Wrapper;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_7 = _aimpactChat101ChatWidget;
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_aimpactAilearnApp002ModelWrapper) {
      dependency_9 = _aimpactAilearnApp002ModelWrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_10 = _bgroupMediaManager100Recorder;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp002AssessmentsSelectionCode) {
      dependency_12 = _aimpactAilearnApp002AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_14 = _pragmateUi0037Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_15 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_17 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp002Config) {
      dependency_18 = _aimpactAilearnApp002Config;
    }, function (_pragmateUi0037Link) {
      dependency_19 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Icons) {
      dependency_20 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Spinner) {
      dependency_21 = _pragmateUi0037Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_22 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Preload) {
      dependency_23 = _pragmateUi0037Preload;
    }, function (_pragmateUi0037Alert) {
      dependency_24 = _pragmateUi0037Alert;
    }, function (_pragmateUi0037Modal) {
      dependency_25 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_26 = _pragmateUi0037Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@aimpact/chat/wrapper', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@bgroup/media-manager/recorder', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/assessments/selection.code', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat-sdk/widgets/playable', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/link', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/spinner', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['pragmate-ui/preload', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/image', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.2/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/session-intro.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3110211888,
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
              this.#store.on('change', this.listen);
              return this.#store;
            }
            listen = () => {
              if (this.#store.storeReady) {
                this.widget.dispatchEvent(new CustomEvent('ready'));
              }
            };
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
        hash: 4003646755,
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
          var _wrapper2 = require("@aimpact/ailearn-app/model/wrapper");
          var _recorder = require("@bgroup/media-manager/recorder");
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
            get userName() {
              return _session.sessionWrapper.user.displayName;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #isTopic;
            get isTopic() {
              return !!this.#isTopic;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #storeReady = false;
            get storeReady() {
              return this.#storeReady;
            }
            constructor(metadata) {
              super();
              this.#metadata = metadata;
              this.#recorder = new _recorder.Recorder();
              this.reactiveProps(['loadReady']);
              this.#assessment = new _core.Assessment();
              this.loadReady = false;
              if (metadata) {
                this.load(this.metadata).then(() => {
                  this.ready = true;
                  this.loadReady = true;
                  this.#storeReady = true;
                  this.triggerEvent();
                });
                return;
              }
              this.ready = true;
              this.loadReady = true;
              this.#storeReady = true;
              this.triggerEvent();
            }
            async load(metadata) {
              if (metadata.lesson) {
                await this.loadLesson(metadata.lesson);
                this.#model = this.#lesson;
              }
              if (metadata.topic) await this.loadTopic(metadata);
              await this.#process();
            }
            async loadLesson(lesson) {
              this.#lesson = new _core.Lesson({
                id: lesson.id
              });
              await this.#lesson.isReady;
              if (this.#lesson.language) this.voice.lang = this.#lesson.language;
              const promises = [this.#lesson.load(), this.#lesson.chatIntroductions.load(), this.#assessment.load(lesson.id)];
              await Promise.all(promises);
            }
            async loadTopic(metadata) {
              this.#isTopic = true;
              this.#topic = await this.#lesson.topics.map.get(metadata.topic.id);
              this.#model = this.#topic;
              const promises = [this.#topic.chatIntroductions.load(), this.#assessment.load(metadata.topic.id)];
              await Promise.all(promises);
              this.#model = this.#topic;
            }
            #process() {
              _wrapper2.AiLearnWrapper.sessionModel = this.#model;
              _wrapper2.AiLearnWrapper.sessionAssessment = this.#assessment;
              this.#introduction = this.#model.chatIntroductions.items.get('introduction').value.replace('%1', _session.sessionWrapper.user.displayName);
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

      /**************************************
      INTERNAL MODULE: ./views/ContentManager
      **************************************/

      ims.set('./views/ContentManager', {
        hash: 361263099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
          var _selection = require("@aimpact/ailearn-app/assessments/selection.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _spoken = require("./spoken");
          function ContentManager() {
            let {
              store,
              activeControl
            } = (0, _context.useLessonIntroContext)();
            // activeControl = 'quiz';
            const [model, setModel] = _react.default.useState(store.model);
            (0, _hooks.useBinder)([store], () => setModel(store.model));
            if (!store.model) return null;
            const {
              chatIntroductions
            } = model;
            const Control = () => {
              if (activeControl === 'content') return _react.default.createElement(_content.default, null);
              if (activeControl === 'selection') {
                const assessment = chatIntroductions.items.get('assessment').value.assessment[0];
                return _react.default.createElement(_selection.Selection, {
                  assessments: assessment,
                  questions: assessment.questions
                });
              }
              if (activeControl === 'spoken') return _react.default.createElement(_spoken.OralAsssessment, null);
            };
            return _react.default.createElement("div", null, _react.default.createElement(Control, null));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/TabsHeader
      **********************************/

      ims.set('./views/TabsHeader', {
        hash: 911424043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsHeader = TabsHeader;
          function TabsHeader({}) {}
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 2322346003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
          var _links = require("./links");
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
            const audioUrl = `${_config.default?.params.apis.ailearn}/lessons/elements/audios/${store.model.id}`;
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
            }, _react.default.createElement("p", null, intro)), _react.default.createElement("section", {
              className: "m-1 flex-container flex-space-between badges__container"
            }, _react.default.createElement("div", null), _react.default.createElement(_components.ButtonGroup, {
              selected: 0
            }, _react.default.createElement(_components.Button, {
              "data-element": "synthesis",
              onClick: onSelectView
            }, texts.elements.synthesis), _react.default.createElement(_components.Button, {
              "data-element": "content",
              onClick: onSelectView
            }, texts.elements.content))), _react.default.createElement("section", {
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

      /*************************************
      INTERNAL MODULE: ./views/content/links
      *************************************/

      ims.set('./views/content/links', {
        hash: 4143830885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Links = Links;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _config = require("@aimpact/ailearn-app/config");
          function Links() {
            const {
              store
            } = (0, _context.useLessonIntroContext)();
            if (!store.chat.children) return null;
            return _react.default.createElement("div", {
              className: "intro__actions actions flex-container"
            }, store.chat.children.map(item => {
              const uri = `${_config.default.params.baseUrl}/chat/${item.id}`;
              return _react.default.createElement(_components.Link, {
                key: uri,
                href: uri,
                className: "chat-link"
              }, item.name);
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/content/player
      **************************************/

      ims.set('./views/content/player', {
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

      /********************************************
      INTERNAL MODULE: ./views/content/topic-detail
      ********************************************/

      ims.set('./views/content/topic-detail', {
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
        hash: 391364784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLessonIntroContext = exports.LessonIntroContext = void 0;
          var _react = require("react");
          const LessonIntroContext = _react.default.createContext({});
          exports.LessonIntroContext = LessonIntroContext;
          const useLessonIntroContext = () => _react.default.useContext(LessonIntroContext);
          exports.useLessonIntroContext = useLessonIntroContext;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/header/TabButton
      ****************************************/

      ims.set('./views/header/TabButton', {
        hash: 288045917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabButton = TabButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function TabButton({
            label,
            onClick,
            value
          }) {
            return _react.default.createElement(_components.Button, {
              "data-view": value,
              variant: "primary",
              onClick: onClick
            }, label);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 899359629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _topicActions = require("./topic-actions");
          function Header() {
            const [selected, setSelected] = _react.default.useState('content');
            const {
              visible,
              toggleVisibility,
              activeControl,
              texts: {
                header
              }
            } = (0, _context.useLessonIntroContext)();
            const title = header.titles[activeControl];
            return _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_topicActions.TopicHeaderActions, null), _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: `md collapse-icon${visible ? ' visible' : ''}`,
              onClick: toggleVisibility
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/header/topic-actions
      ********************************************/

      ims.set('./views/header/topic-actions', {
        hash: 162382706,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicHeaderActions = TopicHeaderActions;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function TopicHeaderActions() {
            const [selected, setSelected] = _react.default.useState('content');
            const {
              store,
              updateView,
              texts: {
                header,
                assessments
              }
            } = (0, _context.useLessonIntroContext)();
            if (!store.isTopic) return null;
            const onActionClick = event => {
              updateView(event.currentTarget.dataset.view);
            };
            return _react.default.createElement(_components.ButtonGroup, {
              selected: selected === 'content' ? 0 : 1
            }, _react.default.createElement(_components.Button, {
              onClick: onActionClick,
              "data-view": "content"
            }, header.titles.introduction), _react.default.createElement(_components.Button, {
              onClick: onActionClick,
              "data-view": "selection"
            }, header.actions.selection), _react.default.createElement(_components.Button, {
              onClick: onActionClick,
              "data-view": "spoken"
            }, header.actions.spoken));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 337883530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _header = require("./header");
          var _ContentManager = require("./ContentManager");
          var _preload = require("./preload");
          function ChatIntro({
            store
          }) {
            const [visible, setVisible] = _react.default.useState(true);
            const [ready, setReady] = _react.default.useState(store.storeReady);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const toggleVisibility = () => setVisible(!visible);
            const [activeControl, setActiveControl] = _react.default.useState('content');
            (0, _hooks2.useBinder)([store], () => setReady(store.storeReady && store.loadReady));
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
            if (!textsReady || !ready) return _react.default.createElement(_preload.Preload, null);
            return _react.default.createElement(_context.LessonIntroContext.Provider, {
              value: contextValue
            }, _react.default.createElement("article", {
              className: "lesson-intro"
            }, _react.default.createElement("section", {
              className: "intro-content"
            }, _react.default.createElement(_header.default, null), _react.default.createElement(_ContentManager.ContentManager, null))), _react.default.createElement("slot", null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 3940858257,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _preload = require("pragmate-ui/preload");
          function Preload() {
            return _react.default.createElement("div", {
              className: "lesson-intro"
            }, _react.default.createElement("section", {
              className: "intro-content"
            }, _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              className: "circle lg logo",
              icon: "class"
            }), _react.default.createElement("h3", null, _react.default.createElement(_preload.Preload, {
              width: "100px"
            }))), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.ButtonGroup, {
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: true
            }, "\u00A0"), _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: true
            }, "\u00A0"), _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: true
            }, "\u00A0")), _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: "md collapse-icon"
            })))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/spoken/AudioPlayer
      ******************************************/

      ims.set('./views/spoken/AudioPlayer', {
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

      /****************************************************
      INTERNAL MODULE: ./views/spoken/analysis/competencies
      ****************************************************/

      ims.set('./views/spoken/analysis/competencies', {
        hash: 118481483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompetenciesFeedback = CompetenciesFeedback;
          var _react = require("react");
          var _context = require("../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          function CompetenciesFeedback() {
            const {
              store
            } = (0, _context.useRecorderContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.competenciesFeedback
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/spoken/analysis/index
      *********************************************/

      ims.set('./views/spoken/analysis/index', {
        hash: 3216807206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _teacher = require("./teacher");
          var _student = require("./student");
          var _competencies = require("./competencies");
          function Analysis() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useRecorderContext)();
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

      /***********************************************
      INTERNAL MODULE: ./views/spoken/analysis/student
      ***********************************************/

      ims.set('./views/spoken/analysis/student', {
        hash: 1317064032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFeedback = StudentFeedback;
          var _react = require("react");
          var _context = require("../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          function StudentFeedback() {
            const {
              store
            } = (0, _context.useRecorderContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.feedback
            });
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/spoken/analysis/teacher
      ***********************************************/

      ims.set('./views/spoken/analysis/teacher', {
        hash: 2324826974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFeedback = TeacherFeedback;
          var _react = require("react");
          var _context = require("../context");
          function TeacherFeedback() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useRecorderContext)();
            const faces = {
              outstanding: '🤩',
              'very good': '😁',
              good: '😀',
              regular: '😐',
              indifferent: '😑',
              bad: '😕',
              inappropriate: '😖'
            };
            return _react.default.createElement(_react.default.Fragment, null, store.assessment.analysis.map((item, index) => {
              return _react.default.createElement("article", {
                key: item.subject.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, faces[item.grade]), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", null, item.evaluation)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/spoken/context
      **************************************/

      ims.set('./views/spoken/context', {
        hash: 489382465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecorderContext = exports.RecorderContext = void 0;
          var _react = require("react");
          const RecorderContext = _react.default.createContext(null);
          exports.RecorderContext = RecorderContext;
          const useRecorderContext = () => _react.default.useContext(RecorderContext);
          exports.useRecorderContext = useRecorderContext;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/spoken/index
      ************************************/

      ims.set('./views/spoken/index', {
        hash: 1855764615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OralAsssessment = OralAsssessment;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _analysis = require("./analysis");
          var _recording = require("./recording");
          var _context2 = require("./context");
          function OralAsssessment() {
            const {
              store,
              texts: {
                assessments: texts
              }
            } = (0, _context.useLessonIntroContext)();
            const [recording, setRecording] = _react.default.useState(false);
            const [view, setView] = _react.default.useState(!!store.assessment.analysis.length ? 'analysis' : 'recording');
            const alertContent = texts.oralText?.replace('%1', store.userName);
            const value = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              audio: store.recorder.audio,
              setView,
              onSubmit: event => {
                event.preventDefault();
                console.log('onSubmit');
                return;
              }
            };
            const Control = view === 'analysis' ? _analysis.Analysis : _recording.RecordingButton;
            return _react.default.createElement("div", null, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, alertContent), _react.default.createElement(_context2.RecorderContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement(Control, null))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/spoken/recording
      ****************************************/

      ims.set('./views/spoken/recording', {
        hash: 2428002838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _context2 = require("../context");
          var _timer = require("./timer");
          var _AudioPlayer = require("./AudioPlayer");
          var _modal = require("pragmate-ui/modal");
          var _image = require("pragmate-ui/image");
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
              setView
            } = (0, _context.useRecorderContext)();
            const {
              texts: {
                permissions
              }
            } = (0, _context2.useLessonIntroContext)();
            const [action, setAction] = _react.default.useState('');
            const [sending, setSending] = _react.default.useState(false);
            const {
              store
            } = (0, _context2.useLessonIntroContext)();
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
            // if (recording) return <Player />;
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
            }, _react.default.createElement("h3", null, permissions.title), _react.default.createElement(_image.Image, {
              src: "/assets/permissions2.svg"
            }), _react.default.createElement("p", null, permissions.description), _react.default.createElement("footer", {
              className: "mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClose
            }, permissions.button))), _react.default.createElement(_components.Button, {
              icon: icon,
              onClick: onAction,
              disabled: disabled
            }, texts[message]), showSend && _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_AudioPlayer.AudioPlayer, {
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

      /******************************************
      INTERNAL MODULE: ./views/spoken/timer/index
      ******************************************/

      ims.set('./views/spoken/timer/index', {
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

      /**********************************************
      INTERNAL MODULE: ./views/spoken/timer/use-timer
      **********************************************/

      ims.set('./views/spoken/timer/use-timer', {
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
        "im": "./views/spoken/AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/spoken/recording",
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/spoken/AudioPlayer').AudioPlayer : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/spoken/recording').RecordingButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsIlZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwibGFuZ3VhZ2UiLCJsYW5nIiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9zZWxlY3Rpb24iLCJfaG9va3MiLCJfc3Bva2VuIiwiQ29udGVudE1hbmFnZXIiLCJhY3RpdmVDb250cm9sIiwidXNlTGVzc29uSW50cm9Db250ZXh0Iiwic2V0TW9kZWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJfcHJlbG9hZCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiZGlzYWJsZWQiLCJwZXJtaXNzaW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsIi90cy92aWV3cy9UYWJzSGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2xpbmtzLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCIvdHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdG9waWMtYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNO1lBQ25CO1lBRUFTLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ2IsSUFBSSxJ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