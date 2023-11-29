System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.18/model/wrapper", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.18/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.18/config", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0018ModelWrapper) {
      dependency_6 = _aimpactAilearnApp0018ModelWrapper;
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
    }, function (_aimpactAilearnApp0018AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0018AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_14 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Icons) {
      dependency_15 = _pragmateUi003Icons;
    }, function (_pragmateUi003Components) {
      dependency_16 = _pragmateUi003Components;
    }, function (_pragmateUi003Toast) {
      dependency_17 = _pragmateUi003Toast;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactAilearnApp0018Config) {
      dependency_20 = _aimpactAilearnApp0018Config;
    }, function (_pragmateUi003Link) {
      dependency_21 = _pragmateUi003Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_22 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Preload) {
      dependency_23 = _pragmateUi003Preload;
    }, function (_pragmateUi003Alert) {
      dependency_24 = _pragmateUi003Alert;
    }, function (_pragmateUi003Modal) {
      dependency_25 = _pragmateUi003Modal;
    }, function (_pragmateUi003Image) {
      dependency_26 = _pragmateUi003Image;
    }, function (_react1820JsxRuntime) {
      dependency_27 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/assignment-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['pragmate-ui/preload', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/image', dependency_26], ['react/jsx-runtime', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.18/assignment-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/assignment-intro.widget');
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
        hash: 4021418264,
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
            #materials = new Map();
            get materials() {
              return this.#materials;
            }
            #__instance = instance;
            constructor(metadata) {
              super();
              instance++;
              this.#metadata = metadata;
              this.#voice = new _voice.Voice();
              if (this.#metadata.activity) {
                this.loadActivity();
                return;
              }
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
            async loadActivity() {
              try {
                const activity = new _core.Activity({
                  id: this.#metadata.activity.id,
                  assignmentId: this.#metadata.assignment.id
                });
                this.#model = activity;
                await activity.isReady;
                await activity.load({
                  id: this.#metadata.activity.id,
                  assignmentId: this.#metadata.assignment.id
                });
                this.ready = true;
                this.loadReady = true;
                this.#storeReady = true;
                const keys = Object.keys(activity.materials);
                keys.forEach(key => {
                  this.#materials.set(key, activity.materials[key]);
                });
                this.#process();
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
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
            #process() {
              _wrapper.AiLearnWrapper.sessionModel = this.#model;
              _wrapper.AiLearnWrapper.sessionAssessment = this.#assessment;
              this.#introduction = this.#materials.get('introduction').replace('%1', _session.sessionWrapper.user.displayName);
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

      /*********************************************
      INTERNAL MODULE: ./views/content/actions/index
      *********************************************/

      ims.set('./views/content/actions/index', {
        hash: 971202851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentControls = ContentControls;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentControls({
            id,
            text,
            store,
            player
          }) {
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              player.positionToCut = 0;
              await player.play(text, id);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const disabled = {
              disabled: true
            };
            const icon = action === 'play' ? 'stop' : 'play';
            const onClick = action === 'play' ? onPause : onPlay;
            return _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              "data-listen": "api",
              icon: icon
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 2738001455,
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
          var _actions = require("./actions");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            const panesRef = _react.default.useRef(null);
            const elements = store.materials;
            const content = elements.has('content') ? elements.get('content') : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis') : undefined;
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
            }, _react.default.createElement("section", {
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
            }, _react.default.createElement(_markdown.Markdown, {
              content: intro
            }), _react.default.createElement("article", {
              className: "intro__pane intro__synthesis active",
              "data-element": "synthesis"
            }, _react.default.createElement(_markdown.Markdown, {
              content: synthesis
            })), _react.default.createElement("article", {
              className: "intro__pane intro__synthesis",
              "data-element": "content"
            }, _react.default.createElement("div", null, _react.default.createElement(_actions.ContentControls, {
              id: "content",
              text: content,
              store: store,
              player: store.voice
            }), _react.default.createElement(_playable.Playable, {
              player: store.voice,
              content: content,
              id: "content"
            })))), _react.default.createElement(_links.Links, null));
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
        hash: 3363470639,
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
        hash: 2770863488,
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
              activeControl,
              model,
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
            }), _react.default.createElement("h3", null, title, ": ", model.title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "right",
              className: `md collapse-icon${visible ? ' visible' : ''}`,
              onClick: toggleVisibility
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1983253146,
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
              model: store.model,
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
        hash: 3521073819,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
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
            }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfc2Vzc2lvbiIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwibWF0ZXJpYWxzIiwiTWFwIiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiVm9pY2UiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQWN0aXZpdHkiLCJpZCIsImFzc2lnbm1lbnQiLCJpc1JlYWR5Iiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJzZXQiLCJwcm9jZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInVwZGF0ZVZvaWNlIiwiI3VwZGF0ZVZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJhdWRpbyIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX2xpbmtzIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJfZGVmYXVsdCIsIl9saW5rIiwiX2ljb25zIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJJY29uQnV0dG9uIiwiX0NvbnRlbnRNYW5hZ2VyIiwiX2hlYWRlciIsIl9wcmVsb2FkIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJ1cGRhdGVWaWV3IiwidmlldyIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJ3aWR0aCIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJwZXJtaXNzaW9ucyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNO1lBQ25CO1lBRUFTLE1BQU0s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