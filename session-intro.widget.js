System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.14/model/wrapper", "@bgroup/media-manager@1.0.0/recorder", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0014ModelWrapper) {
      dependency_10 = _aimpactAilearnApp0014ModelWrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_11 = _bgroupMediaManager100Recorder;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp0014AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0014AssessmentsSelectionCode;
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
    }, function (_aimpactAilearnApp0014Config) {
      dependency_19 = _aimpactAilearnApp0014Config;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/chat.widget', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@bgroup/media-manager/recorder', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.14/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/session-intro.widget');
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
        hash: 2710687732,
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
          let instance = 1;
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
            #voice;
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
            #__instance = instance;
            constructor(metadata) {
              super();
              instance++;
              this.#metadata = metadata;
              this.#voice = new _voice.Voice();
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
            #updateVoice = () => {
              this.#voice.set({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiVm9pY2UiLCJhc3NpZ25tZW50SWQiLCJzZXNzaW9uSWQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInVwZGF0ZVZvaWNlIiwiI3VwZGF0ZVZvaWNlIiwic2V0IiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJsYW5nIiwidG9waWNzIiwibWFwIiwiI3Byb2Nlc3MiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInNlc3Npb25Bc3Nlc3NtZW50IiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiQ29udHJvbCIsImNyZWF0ZUVsZW1lbnQiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJfcHJlbG9hZCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwibG9nIiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJkaXNhYmxlZCIsInBlcm1pc3Npb25zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUFULEtBQU07WUFDbkI7WUFFQVMsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDYixJQUFJLElBQUks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