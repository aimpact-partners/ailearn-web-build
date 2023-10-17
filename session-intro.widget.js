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
        const dependencies = new Map([["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUixPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwib24iLCJsaXN0ZW4iLCJzdG9yZVJlYWR5Iiwid2lkZ2V0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhdWRpb01hbmFnZXIiLCJWb2ljZSIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImlzUmVhZHkiLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsImxhbmd1YWdlIiwibGFuZyIsInRvcGljcyIsIm1hcCIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiQ29udGVudE1hbmFnZXIiLCJzdG9yZSIsImFjdGl2ZUNvbnRyb2wiLCJzZXRNb2RlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250cm9sIiwiQ29udGVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImZvckVhY2giLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJjbGFzc05hbWUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwiUHJlbG9hZEVsZW1lbnQiLCJ3aWR0aCIsImZldGNoaW5nIiwiQXVkaW9QbGF5ZXIiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsInByZWxvYWQiLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiaW5kZXgiLCJzdWJqZWN0IiwiZ3JhZGUiLCJldmFsdWF0aW9uIiwiUmVjb3JkZXJDb250ZXh0IiwidXNlUmVjb3JkZXJDb250ZXh0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiZGlzYWJsZWQiLCJwZXJtaXNzaW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvVGFic0hlYWRlci50c3giLCJ0cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwidHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3ByZWxvYWQudHN4IiwidHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=