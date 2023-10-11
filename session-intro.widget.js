System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.2/model/wrapper", "@bgroup/media-manager@1.0.0/recorder", "react@18.2.0", "@aimpact/ailearn-app@0.0.2/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.2/config", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/preload", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp002ModelWrapper) {
      dependency_10 = _aimpactAilearnApp002ModelWrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_11 = _bgroupMediaManager100Recorder;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp002AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp002AssessmentsSelectionCode;
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
    }, function (_aimpactAilearnApp002Config) {
      dependency_19 = _aimpactAilearnApp002Config;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/chat.widget', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@bgroup/media-manager/recorder', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27]]);
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
        hash: 2249683309,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsIlZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJsYW5ndWFnZSIsImxhbmciLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9zZWxlY3Rpb24iLCJfaG9va3MiLCJfc3Bva2VuIiwiQ29udGVudE1hbmFnZXIiLCJhY3RpdmVDb250cm9sIiwidXNlTGVzc29uSW50cm9Db250ZXh0Iiwic2V0TW9kZWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJfcHJlbG9hZCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiZGlzYWJsZWQiLCJwZXJtaXNzaW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsIi90cy92aWV3cy9UYWJzSGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2xpbmtzLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCIvdHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdG9waWMtYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUFULEtBQU07WUFDbkI7WUFFQVMsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDYixJQUFJ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