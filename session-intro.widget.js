System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.11/model/wrapper", "@bgroup/media-manager@1.0.0/recorder", "react@18.2.0", "@aimpact/ailearn-app@0.0.11/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.11/config", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_8 = _aimpactChat101ChatWidget;
    }, function (_aimpactChatSdk100Voice) {
      dependency_9 = _aimpactChatSdk100Voice;
    }, function (_aimpactAilearnApp0011ModelWrapper) {
      dependency_10 = _aimpactAilearnApp0011ModelWrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_11 = _bgroupMediaManager100Recorder;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp0011AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0011AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_14 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Components) {
      dependency_15 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_19 = _aimpactAilearnApp0011Config;
    }, function (_pragmateUi003Link) {
      dependency_20 = _pragmateUi003Link;
    }, function (_pragmateUi003Icons) {
      dependency_21 = _pragmateUi003Icons;
    }, function (_pragmateUi003Spinner) {
      dependency_22 = _pragmateUi003Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Preload) {
      dependency_24 = _pragmateUi003Preload;
    }, function (_pragmateUi003Alert) {
      dependency_25 = _pragmateUi003Alert;
    }, function (_pragmateUi003Modal) {
      dependency_26 = _pragmateUi003Modal;
    }, function (_pragmateUi003Image) {
      dependency_27 = _pragmateUi003Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/chat.widget', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@bgroup/media-manager/recorder', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27]]);
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
        hash: 1929689028,
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
              //@todo: remove;
              if (!this.#metadata.assignmentId) this.#metadata.assignmentId = this.#metadata.sessionId;
              this.#recorder = new _recorder.Recorder();
              this.reactiveProps(['loadReady']);
              this.#assessment = new _core.Assessment({
                assignmentId: metadata.sessionId
              });
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
              const promises = [this.#lesson.load(), this.#lesson.chatIntroductions.load(), this.#assessment.load(lesson.id)];
              await Promise.all(promises);
              if (this.#lesson.language) this.voice.lang = this.#lesson.language;
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
        hash: 4199758027,
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
            const audioUrl = `${_config.default?.params.apis.ailearn}/classworks/elements/audios/${store.model.id}`;
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
        hash: 1433600420,
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
          var _default = exports.default = TextToSpeech;
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
          const LessonIntroContext = exports.LessonIntroContext = _react.default.createContext({});
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
        hash: 1474432510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFeedback = TeacherFeedback;
          var _react = require("react");
          var _context = require("../context");
          var _core = require("@aimpact/ailearn-sdk/core");
          function TeacherFeedback() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useRecorderContext)();
            return _react.default.createElement(_react.default.Fragment, null, store.assessment.analysis.map((item, index) => {
              return _react.default.createElement("article", {
                key: item.subject.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, _core.Faces[item.grade]), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", null, item.evaluation)));
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
          const RecorderContext = exports.RecorderContext = _react.default.createContext(null);
          const useRecorderContext = () => _react.default.useContext(RecorderContext);
          exports.useRecorderContext = useRecorderContext;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/spoken/index
      ************************************/

      ims.set('./views/spoken/index', {
        hash: 1428340955,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsIlZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJhc3NpZ25tZW50SWQiLCJzZXNzaW9uSWQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJsYW5ndWFnZSIsImxhbmciLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9zZWxlY3Rpb24iLCJfaG9va3MiLCJfc3Bva2VuIiwiQ29udGVudE1hbmFnZXIiLCJhY3RpdmVDb250cm9sIiwidXNlTGVzc29uSW50cm9Db250ZXh0Iiwic2V0TW9kZWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJfcHJlbG9hZCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwibG9nIiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJkaXNhYmxlZCIsInBlcm1pc3Npb25zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL1RhYnNIZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUdOQyxXQUFXQSxDQUFBO2NBQ1Y7Y0FDQSxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FFNUQsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFVLFlBQVksQ0FBQ0wsUUFBUSxDQUFDO2NBQ3hDLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7Y0FDckMsT0FBTyxJQUFJLENBQUMsQ0FBQVQsS0FBTTtZQUNuQjtZQUVBUyxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNiLElBQUksSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsVUFBVSxFQUFFO2dC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