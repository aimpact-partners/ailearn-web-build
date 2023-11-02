System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.11/model/wrapper", "@bgroup/media-manager@1.0.0/recorder", "react@18.2.0", "@aimpact/ailearn-app@0.0.11/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.11/config", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/preload", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
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
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_15 = _pragmateUi0037Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_19 = _aimpactAilearnApp0011Config;
    }, function (_pragmateUi0037Link) {
      dependency_20 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Icons) {
      dependency_21 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Spinner) {
      dependency_22 = _pragmateUi0037Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Preload) {
      dependency_24 = _pragmateUi0037Preload;
    }, function (_pragmateUi0037Alert) {
      dependency_25 = _pragmateUi0037Alert;
    }, function (_pragmateUi0037Modal) {
      dependency_26 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_27 = _pragmateUi0037Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO1lBQ2pDLE1BQU1SLE9BQU8sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUVOLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ04sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0MiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJvbiIsImxpc3RlbiIsInN0b3JlUmVhZHkiLCJ3aWRnZXQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInJlY29yZGVyIiwiaXNUb3BpYyIsImFzc2Vzc21lbnQiLCJjb25zdHJ1Y3RvciIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiaXNSZWFkeSIsInByb21pc2VzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibGFuZ3VhZ2UiLCJsYW5nIiwidG9waWNzIiwibWFwIiwiQWlMZWFybldyYXBwZXIiLCJzZXNzaW9uTW9kZWwiLCJzZXNzaW9uQXNzZXNzbWVudCIsIml0ZW1zIiwidmFsdWUiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJhdWRpbyIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb250ZW50TWFuYWdlciIsInN0b3JlIiwiYWN0aXZlQ29udHJvbCIsInNldE1vZGVsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRyb2wiLCJDb250ZW50IiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJUYWJzSGVhZGVyIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciIsIkxpbmtzIiwiY2hpbGRyZW4iLCJpdGVtIiwidXJpIiwiYmFzZVVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwibmFtZSIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsImdldEF1ZGlvIiwic3JjIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiSGVhZGVyIiwic2V0U2VsZWN0ZWQiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiVG9waWNIZWFkZXJBY3Rpb25zIiwiSWNvbkJ1dHRvbiIsInVwZGF0ZVZpZXciLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImFjdGlvbnMiLCJzZWxlY3Rpb24iLCJzcG9rZW4iLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJQcmVsb2FkRWxlbWVudCIsIndpZHRoIiwiZmV0Y2hpbmciLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJBbmFseXNpcyIsInNldFZpZXciLCJzZXRDb250ZW50Iiwib25SZWRvIiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsInRlYWNoZXIiLCJUZWFjaGVyRmVlZGJhY2siLCJzdHVkZW50IiwiU3R1ZGVudEZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzIiwiVmlldyIsImNoYW5nZVZpZXciLCJhbmFseXNpc1RpdGxlIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInJlZG8iLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsInVzZVJlY29yZGVyQ29udGV4dCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsImxlbmd0aCIsImFsZXJ0Q29udGVudCIsIm9yYWxUZXh0Iiwib25TdWJtaXQiLCJsb2ciLCJSZWNvcmRpbmdCdXR0b24iLCJBbGVydCIsImRpc2FibGVkIiwicGVybWlzc2lvbnMiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIm9uUGxheSIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzdG9wIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwib25TZW5kIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwiZ2xvYmFsVGhpcyIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwib25DbG9zZSIsIlRpbWVyIiwiTW9kYWwiLCJvcGVuIiwic2hvdyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJzZW5kIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsInRzL3ZpZXdzL1RhYnNIZWFkZXIudHN4IiwidHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCJ0cy92aWV3cy9jb250ZW50L2xpbmtzLnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsInRzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCJ0cy92aWV3cy9oZWFkZXIvdG9waWMtYWN0aW9ucy50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9wcmVsb2FkLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCJ0cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCJ0cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19