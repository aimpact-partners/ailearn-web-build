System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.14/model/wrapper", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0014ModelWrapper) {
      dependency_6 = _aimpactAilearnApp0014ModelWrapper;
    }, function (_aimpactChat101ChatWidget) {
      dependency_7 = _aimpactChat101ChatWidget;
    }, function (_beyondJsReactive116Model) {
      dependency_8 = _beyondJsReactive116Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_9 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_10 = _aimpactChatSdk100Voice;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp0014AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0014AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi003Components) {
      dependency_15 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_18 = _aimpactAilearnApp0014Config;
    }, function (_pragmateUi003Link) {
      dependency_19 = _pragmateUi003Link;
    }, function (_pragmateUi003Icons) {
      dependency_20 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedHooks) {
      dependency_21 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Preload) {
      dependency_22 = _pragmateUi003Preload;
    }, function (_pragmateUi003Alert) {
      dependency_23 = _pragmateUi003Alert;
    }, function (_pragmateUi003Modal) {
      dependency_24 = _pragmateUi003Modal;
    }, function (_pragmateUi003Image) {
      dependency_25 = _pragmateUi003Image;
    }, function (_react1820JsxRuntime) {
      dependency_26 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/link', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/preload', dependency_22], ['pragmate-ui/alert', dependency_23], ['pragmate-ui/modal', dependency_24], ['pragmate-ui/image', dependency_25], ['react/jsx-runtime', dependency_26]]);
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
        hash: 3588882632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _wrapper2 = require("@aimpact/chat/wrapper");
          var _chat = require("@aimpact/chat/chat.widget");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@bgroup/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _session = require("@aimpact/chat-sdk/session");
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
              return _wrapper2.AppWrapper.currentChat;
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
                language: _wrapper2.AppWrapper.language,
                rate: _wrapper2.AppWrapper.audioSpeed
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
              _wrapper.AiLearnWrapper.sessionModel = this.#model;
              _wrapper.AiLearnWrapper.sessionAssessment = this.#assessment;
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
        hash: 1399599556,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _components = require("pragmate-ui/components");
          var _links = require("./links");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
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
        hash: 2647378379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _ContentManager = require("./ContentManager");
          var _header = require("./header");
          var _context = require("./context");
          var _preload = require("./preload");
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          function ChatIntro({
            store
          }) {
            const [visible, setVisible] = _react.default.useState(true);
            const [ready, setReady] = _react.default.useState(store.storeReady);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const toggleVisibility = () => setVisible(!visible);
            const [activeControl, setActiveControl] = _react.default.useState('content');
            (0, _hooks.useBinder)([store], () => setReady(store.storeReady && store.loadReady));
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
        hash: 481749330,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfc2Vzc2lvbiIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiVm9pY2UiLCJhc3NpZ25tZW50SWQiLCJzZXNzaW9uSWQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInVwZGF0ZVZvaWNlIiwiI3VwZGF0ZVZvaWNlIiwic2V0IiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJsYW5nIiwidG9waWNzIiwibWFwIiwiI3Byb2Nlc3MiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInNlc3Npb25Bc3Nlc3NtZW50IiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiQ29udHJvbCIsImNyZWF0ZUVsZW1lbnQiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiX2xpbmtzIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX0NvbnRlbnRNYW5hZ2VyIiwiX2hlYWRlciIsIl9wcmVsb2FkIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJkaXNhYmxlZCIsInBlcm1pc3Npb25zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25TdG9wIiwic3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNO1lBQ25CO1lBRUFTLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ2IsSUFBSSxJQUFJLENBQUMsQ0FB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