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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 3686020804,
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
              console.log(21, 'cambio', this.#__instance);
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
        hash: 4217974003,
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
            console.log(4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiYXNzaWdubWVudElkIiwic2Vzc2lvbklkIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJ0aGVuIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJ1cGRhdGVWb2ljZSIsIiN1cGRhdGVWb2ljZSIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJsYW5ndWFnZSIsInJhdGUiLCJhdWRpb1NwZWVkIiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsInByb2Nlc3MiLCJMZXNzb24iLCJpZCIsImlzUmVhZHkiLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsImxhbmciLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb250ZW50IiwiX3NlbGVjdGlvbiIsIl9ob29rcyIsIl9zcG9rZW4iLCJDb250ZW50TWFuYWdlciIsImFjdGl2ZUNvbnRyb2wiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJzZXRNb2RlbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIkNvbnRyb2wiLCJjcmVhdGVFbGVtZW50IiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJfY29tcG9uZW50cyIsIl9wbGF5YWJsZSIsIl9tYXJrZG93biIsIl9jb25maWciLCJfbGlua3MiLCJDb250ZW50IiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiZm9yRWFjaCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciIsIkxpbmtzIiwiY2hpbGRyZW4iLCJpdGVtIiwidXJpIiwiYmFzZVVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwibmFtZSIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsInVzZUVmZmVjdCIsImdldEF1ZGlvIiwic3JjIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIl9kZWZhdWx0IiwiX2xpbmsiLCJfaWNvbnMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIl90b3BpY0FjdGlvbnMiLCJIZWFkZXIiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJUb3BpY0hlYWRlckFjdGlvbnMiLCJJY29uQnV0dG9uIiwidXBkYXRlVmlldyIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiYWN0aW9ucyIsInNlbGVjdGlvbiIsInNwb2tlbiIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX0NvbnRlbnRNYW5hZ2VyIiwiX3ByZWxvYWQiLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3RpdmVDb250cm9sIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwiZmV0Y2hpbmciLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwidXNlUmVjb3JkZXJDb250ZXh0IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJfdGVhY2hlciIsIl9zdHVkZW50IiwiX2NvbXBldGVuY2llcyIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsIkZyYWdtZW50IiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiZGlzYWJsZWQiLCJwZXJtaXNzaW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2xpbmtzLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCIvdHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdG9waWMtYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNO1lBQ25CO1lBRUFTLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQVQsS0FBTSxD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