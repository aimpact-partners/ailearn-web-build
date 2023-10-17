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
        hash: 1503512744,
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
              this.#recorder = new _recorder.Recorder();
              this.reactiveProps(['loadReady']);
              this.#assessment = new _core.Assessment();
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : parseInt(localStorage.getItem('aimpact.audio.speed'));
              this.#voice = new _voice.Voice({
                language: _wrapper.AppWrapper.language,
                rate: audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.#updateVoice);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwidXBkYXRlVm9pY2UiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiI3VwZGF0ZVZvaWNlIiwiY29uc29sZSIsImxvZyIsInNldCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJsYW5nIiwidG9waWNzIiwibWFwIiwiI3Byb2Nlc3MiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInNlc3Npb25Bc3Nlc3NtZW50IiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9zZWxlY3Rpb24iLCJfaG9va3MiLCJfc3Bva2VuIiwiQ29udGVudE1hbmFnZXIiLCJhY3RpdmVDb250cm9sIiwidXNlTGVzc29uSW50cm9Db250ZXh0Iiwic2V0TW9kZWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsInR5cGUiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwidXNlRWZmZWN0IiwiZ2V0QXVkaW8iLCJzcmMiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJfcHJlbG9hZCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwid2lkdGgiLCJmZXRjaGluZyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiZGlzYWJsZWQiLCJwZXJtaXNzaW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCIvdHMvdmlld3MvVGFic0hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1Es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