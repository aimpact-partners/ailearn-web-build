System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.18/model/wrapper", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.18/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.18/config", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
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
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_20 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactAilearnApp0018Config) {
      dependency_21 = _aimpactAilearnApp0018Config;
    }, function (_pragmateUi003Link) {
      dependency_22 = _pragmateUi003Link;
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
    }, function (_react1820JsxRuntime) {
      dependency_28 = _react1820JsxRuntime;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['pragmate-ui/link', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['react/jsx-runtime', dependency_28]]);
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
        hash: 1523866899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _components = require("pragmate-ui/components");
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
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
            ///activities/:id/materials/content/audio
            const audioUrl = `${_config.default?.params.apis.ailearn}/activities/${store.model.id}/content/audio`;
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
            }, _react.default.createElement(_markdown.Markdown, {
              content: intro
            }), _react.default.createElement("section", {
              className: "intro-actions__container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audioUrl,
              create: "false"
            }), _react.default.createElement(_components.ButtonGroup, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfc2Vzc2lvbiIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwibWF0ZXJpYWxzIiwiTWFwIiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiVm9pY2UiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQWN0aXZpdHkiLCJpZCIsImFzc2lnbm1lbnQiLCJpc1JlYWR5Iiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJzZXQiLCJwcm9jZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInVwZGF0ZVZvaWNlIiwiI3VwZGF0ZVZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJhdWRpbyIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX2F1ZGlvUGxheWVyIiwiX2xpbmtzIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwicmVmIiwiUGxheWFibGUiLCJMaW5rcyIsImNoaWxkcmVuIiwibWFwIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsInVzZUVmZmVjdCIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIl9kZWZhdWx0IiwiX2xpbmsiLCJfaWNvbnMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiSGVhZGVyIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIkljb25CdXR0b24iLCJfQ29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsInVwZGF0ZVZpZXciLCJ2aWV3IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJwZXJtaXNzaW9ucyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUFULEtBQU07WUFDbkI7WUFFQVMsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDYixJQUFJLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLFVBQVUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRXJELENBQUM7WUFDRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT2xCLE1BQUEsQ0FBQW1CLFNBQVM7WUFDakI7O1VBQ0FDLE9BQUEsQ0FBQWxCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkQsSUFBQW1CLEtBQUEsR0FBQXRCLE9BQUE7VUFFQSxJQUFBdUIsUUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixTQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLEtBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLE1BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUVBLElBQUk4QixRQUFRLEdBQUcsQ0FBQztVQXNCVixNQUFPbEIsWUFBYSxTQUFRYyxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLEtBQU0sR0FBRyxFQUFFO1lBQ1gsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxZQUFhLEdBQUcsSUFBSVgsS0FBQSxDQUFBWSxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3RDLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLElBQUlGLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQUcsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQWhDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlpQyxJQUFJQSxDQUFBO2NBQ1AsT0FBT2hCLFNBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0MsV0FBVztZQUM5QjtZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPZCxRQUFBLENBQUFlLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ3ZDO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUN2QjtZQUNBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFsQyxVQUFXLEdBQVksS0FBSztZQUU1QixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFtQyxTQUFVLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3RCLElBQUlELFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQUUsVUFBVyxHQUFHdEIsUUFBUTtZQUN0QnVCLFlBQVk5QyxRQUFtQjtjQUM5QixLQUFLLEVBQUU7Y0FDUHVCLFFBQVEsRUFBRTtjQUNWLElBQUksQ0FBQyxDQUFBdkIsUUFBUyxHQUFHQSxRQUFRO2NBQ3pCLElBQUksQ0FBQyxDQUFBZ0MsS0FBTSxHQUFHLElBQUlYLE1BQUEsQ0FBQTBCLEtBQUssRUFBRTtjQUV6QixJQUFJLElBQUksQ0FBQyxDQUFBL0MsUUFBUyxDQUFDZ0QsUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLFlBQVksRUFBRTtnQkFDbkI7O2NBRUQ7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFqRCxRQUFTLENBQUNrRCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUFsRCxRQUFTLENBQUNrRCxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFsRCxRQUFTLENBQUNtRCxTQUFTO2NBQ3hGLElBQUksQ0FBQyxDQUFBWCxRQUFTLEdBQUcsSUFBSXBCLFNBQUEsQ0FBQWdDLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2NBRWpDLElBQUksQ0FBQyxDQUFBWCxVQUFXLEdBQUcsSUFBSTNCLEtBQUEsQ0FBQXVDLFVBQVUsQ0FBQztnQkFDakNKLFlBQVksRUFBRWxELFFBQVEsQ0FBQ21EO2VBQ3ZCLENBQUM7Y0FDRixJQUFJLENBQUNJLFNBQVMsR0FBRyxLQUFLO2NBQ3RCLElBQUl2RCxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDd0QsSUFBSSxDQUFDLElBQUksQ0FBQ3hELFFBQVEsQ0FBQyxDQUFDeUQsSUFBSSxDQUFDLE1BQUs7a0JBQ2xDLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7a0JBQ2pCLElBQUksQ0FBQ0gsU0FBUyxHQUFHLElBQUk7a0JBQ3JCLElBQUksQ0FBQyxDQUFBL0MsVUFBVyxHQUFHLElBQUk7a0JBQ3ZCLElBQUksQ0FBQ21ELFlBQVksRUFBRTtnQkFDcEIsQ0FBQyxDQUFDO2dCQUNGOztjQUdELElBQUksQ0FBQ0QsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsSUFBSTtjQUNyQixJQUFJLENBQUMsQ0FBQS9DLFVBQVcsR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQ21ELFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU1WLFlBQVlBLENBQUE7Y0FDakIsSUFBSTtnQkFDSCxNQUFNRCxRQUFRLEdBQUcsSUFBSWpDLEtBQUEsQ0FBQTZDLFFBQVEsQ0FBQztrQkFDN0JDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTdELFFBQVMsQ0FBQ2dELFFBQVEsQ0FBQ2EsRUFBRTtrQkFDOUJYLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQWxELFFBQVMsQ0FBQzhELFVBQVUsQ0FBQ0Q7aUJBQ3hDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLENBQUFsQyxLQUFNLEdBQUdxQixRQUFRO2dCQUN0QixNQUFNQSxRQUFRLENBQUNlLE9BQU87Z0JBQ3RCLE1BQU1mLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDO2tCQUNuQkssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBN0QsUUFBUyxDQUFDZ0QsUUFBUSxDQUFDYSxFQUFFO2tCQUM5QlgsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBbEQsUUFBUyxDQUFDOEQsVUFBVSxDQUFDRDtpQkFDeEMsQ0FBQztnQkFFRixJQUFJLENBQUNILEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNILFNBQVMsR0FBRyxJQUFJO2dCQUNyQixJQUFJLENBQUMsQ0FBQS9DLFVBQVcsR0FBRyxJQUFJO2dCQUN2QixNQUFNd0QsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ0wsU0FBUyxDQUFDO2dCQUM1Q3FCLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLElBQUc7a0JBQ2xCLElBQUksQ0FBQyxDQUFBeEIsU0FBVSxDQUFDeUIsR0FBRyxDQUFDRCxHQUFHLEVBQUVuQixRQUFRLENBQUNMLFNBQVMsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFFLE9BQVEsRUFBRTtnQkFDZixJQUFJLENBQUNWLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9XLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFDQSxDQUFBRyxXQUFZLEdBQUdDLENBQUEsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQTFDLEtBQU0sQ0FBQ29DLEdBQUcsQ0FBQztnQkFBRU8sUUFBUSxFQUFFMUQsU0FBQSxDQUFBaUIsVUFBVSxDQUFDeUMsUUFBUTtnQkFBRUMsSUFBSSxFQUFFM0QsU0FBQSxDQUFBaUIsVUFBVSxDQUFDMkM7Y0FBVSxDQUFFLENBQUM7WUFDaEYsQ0FBQztZQUVELE1BQU1yQixJQUFJQSxDQUFDeEQsUUFBbUI7Y0FDN0IsSUFBSUEsUUFBUSxDQUFDeUIsTUFBTSxFQUFFO2dCQUNwQixNQUFNLElBQUksQ0FBQ3FELFVBQVUsQ0FBQzlFLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLENBQUFFLEtBQU0sR0FBRyxJQUFJLENBQUMsQ0FBQUYsTUFBTzs7Y0FHM0IsSUFBSXpCLFFBQVEsQ0FBQzBCLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQ3FELFNBQVMsQ0FBQy9FLFFBQVEsQ0FBQztjQUVsRCxNQUFNLElBQUksQ0FBQyxDQUFBcUUsT0FBUSxFQUFFO1lBQ3RCO1lBRUEsQ0FBQUEsT0FBUVcsQ0FBQTtjQUNQaEUsUUFBQSxDQUFBaUUsY0FBYyxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUF2RCxLQUFNO2NBQ3pDWCxRQUFBLENBQUFpRSxjQUFjLENBQUNFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFBekMsVUFBVztjQUVuRCxJQUFJLENBQUMsQ0FBQVgsWUFBYSxHQUFHLElBQUksQ0FBQyxDQUFBWSxTQUFVLENBQUN2QyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUNnRixPQUFPLENBQUMsSUFBSSxFQUFFOUQsUUFBQSxDQUFBZSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQ3hHO1lBRUE4QyxjQUFjLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCLElBQUk7Z0JBTUgsTUFBTUMsS0FBSyxHQUFXO2tCQUFFRDtnQkFBSyxDQUFFO2dCQUMvQixJQUFJLElBQUksQ0FBQyxDQUFBN0MsT0FBUSxFQUFFOEMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE5RCxLQUFNLENBQUNtQyxFQUFFLENBQUMsS0FDN0MwQixLQUFLLENBQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQWhFLE1BQU8sQ0FBQ29DLEVBQUU7Z0JBRXJDLE9BQU8sSUFBSSxDQUFDLENBQUFuQixVQUFXLENBQUNnRCxPQUFPLENBQUNILEtBQUssQ0FBQztlQUN0QyxDQUFDLE9BQU9qQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0R4RCxPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxTUQsSUFBQXNGLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFvRyxRQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQXFHLFVBQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUF1RyxPQUFBLEdBQUF2RyxPQUFBO1VBQ00sU0FBVXdHLGNBQWNBLENBQUE7WUFDN0IsSUFBSTtjQUFFbkcsS0FBSztjQUFFb0c7WUFBYSxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBTyxxQkFBcUIsR0FBRTtZQUN0RDtZQUNBLE1BQU0sQ0FBQ3hFLEtBQUssRUFBRXlFLFFBQVEsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDeEcsS0FBSyxDQUFDNkIsS0FBSyxDQUFDO1lBQ3JELElBQUFvRSxNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDekcsS0FBSyxDQUFDLEVBQUUsTUFBTXNHLFFBQVEsQ0FBQ3RHLEtBQUssQ0FBQzZCLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQzdCLEtBQUssQ0FBQzZCLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDN0IsTUFBTTtjQUFFNkU7WUFBaUIsQ0FBRSxHQUFHN0UsS0FBSztZQUVuQyxNQUFNOEUsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEIsSUFBSVAsYUFBYSxLQUFLLFNBQVMsRUFBRSxPQUFPUCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDYixRQUFBLENBQUFRLE9BQU8sT0FBRztjQUNuRCxJQUFJSCxhQUFhLEtBQUssV0FBVyxFQUFFO2dCQUNsQyxNQUFNeEQsVUFBVSxHQUFHOEQsaUJBQWlCLENBQUNHLEtBQUssQ0FBQ3ZHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQ3dHLEtBQUssQ0FBQ2xFLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLE9BQU9pRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDWixVQUFBLENBQUFlLFNBQVM7a0JBQUNDLFdBQVcsRUFBRXBFLFVBQVU7a0JBQUVxRSxTQUFTLEVBQUVyRSxVQUFVLENBQUNxRTtnQkFBUyxFQUFJOztjQUUvRSxJQUFJYixhQUFhLEtBQUssUUFBUSxFQUFFLE9BQU9QLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNWLE9BQUEsQ0FBQWdCLGVBQWUsT0FBRztZQUMzRCxDQUFDO1lBRUQsT0FDQ3JCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGNBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNELE9BQU8sT0FBRyxDQUNOO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFkLE1BQUEsR0FBQWxHLE9BQUE7VUFFQSxJQUFBd0gsV0FBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBSU0sU0FBVXlILGVBQWVBLENBQUM7WUFBRXJELEVBQUU7WUFBRXNELElBQUk7WUFBRXJILEtBQUs7WUFBRXNIO1VBQU0sQ0FBRTtZQUMxRCxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUczQixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNpQixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN0IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsSUFBQVAsTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ2EsTUFBTSxDQUFDLEVBQUUsTUFBTUksYUFBYSxDQUFDSixNQUFNLENBQUNLLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCRixhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3BCRixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUNELElBQUF2QixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDYSxNQUFNLENBQUMsRUFBRU0sUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUUxQyxNQUFNQyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFcEg7WUFBTSxDQUFFLEtBQUk7Y0FDbkMrRyxTQUFTLENBQUMsTUFBTSxDQUFDO2NBRWpCRixNQUFNLENBQUNRLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU1SLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDVixJQUFJLEVBQUV0RCxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUNELE1BQU1pRSxPQUFPLEdBQUcsTUFBQUEsQ0FBTztjQUFFdkg7WUFBTSxDQUFFLEtBQUk7Y0FDcEMsTUFBTTZHLE1BQU0sQ0FBQ1csSUFBSSxFQUFFO2NBQ25CVCxTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNUSxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUksQ0FBRTtZQUVuQyxNQUFNQyxJQUFJLEdBQUdaLE1BQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDaEQsTUFBTWEsT0FBTyxHQUFHYixNQUFNLEtBQUssTUFBTSxHQUFHUyxPQUFPLEdBQUdILE1BQU07WUFFcEQsT0FDQ2hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUNGLE9BQU8sRUFBRUEsT0FBTztjQUFBLGVBQWMsS0FBSztjQUFDRCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNyRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBaEIsV0FBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUE0SSxZQUFBLEdBQUE1SSxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBOEksU0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUErSSxTQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQWtHLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBZ0osT0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQWlKLFFBQUEsR0FBQWpKLE9BQUE7VUFFYyxTQUFVa0osT0FBT0EsQ0FBQTtZQUM5QixNQUFNO2NBQUU3SSxLQUFLO2NBQUU4SSxLQUFLO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFqRCxRQUFBLENBQUFPLHFCQUFxQixHQUFFO1lBQ3pELE1BQU0yQyxRQUFRLEdBQUduRCxNQUFBLENBQUFVLE9BQUssQ0FBQzBDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsTUFBTUMsUUFBUSxHQUFHbEosS0FBSyxDQUFDNkMsU0FBUztZQUVoQyxNQUFNc0csT0FBTyxHQUFHRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBR0YsUUFBUSxDQUFDNUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHK0ksU0FBUztZQUM3RSxNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHRixRQUFRLENBQUM1SSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcrSSxTQUFTO1lBQ25GLE1BQU1FLEtBQUssR0FBR3ZKLEtBQUssQ0FBQ2lDLFlBQVk7WUFDaEM7WUFFQSxNQUFNdUgsUUFBUSxHQUFHLEdBQUdiLE9BQUEsQ0FBQXBDLE9BQU0sRUFBRWtELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGVBQWUzSixLQUFLLENBQUM2QixLQUFLLENBQUNrQyxFQUFFLGdCQUFnQjtZQUU1RixNQUFNNkYsWUFBWSxHQUFHQyxLQUFLLElBQUc7Y0FDNUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLGFBQWE7Y0FDbEMsTUFBTTtnQkFBRUM7Y0FBTyxDQUFFLEdBQUdILEtBQUssQ0FBQ0UsYUFBYSxDQUFDRSxPQUFPO2NBQy9DLE1BQU1DLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2NBQy9ETixNQUFNLENBQ0pPLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUM3QkQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQzFCaEcsT0FBTyxDQUFDa0csS0FBSyxJQUFJQSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ3BEVixNQUFNLENBQUNTLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUM5QlAsS0FBSyxDQUFDOUYsT0FBTyxDQUFDc0csSUFBSSxJQUFHO2dCQUNwQkEsSUFBSSxDQUFDSCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUlFLElBQUksQ0FBQ1QsT0FBTyxDQUFDRCxPQUFPLEtBQUtBLE9BQU8sRUFBRVUsSUFBSSxDQUFDSCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDbkUsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0M1RSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFFLHNCQUFzQlUsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO1lBQUUsR0FDcEVsRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDNkIsU0FBQSxDQUFBa0MsUUFBUTtjQUFDeEIsT0FBTyxFQUFFSTtZQUFLLEVBQUksRUFDNUIxRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDO1lBQTBCLEdBQzVDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzJCLFlBQUEsQ0FBQXFDLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFckIsUUFBUTtjQUFFc0IsTUFBTSxFQUFDO1lBQU8sRUFBRyxFQUU3Q2pGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQTRELFdBQVc7Y0FBQ0MsUUFBUSxFQUFFO1lBQUMsR0FDdkJuRixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUEsZ0JBQWMsV0FBVztjQUFDRixPQUFPLEVBQUV3QjtZQUFZLEdBQ3BEZCxLQUFLLENBQUNJLFFBQVEsQ0FBQ0ksU0FBUyxDQUNqQixFQUNUekQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFBLGdCQUFjLFNBQVM7Y0FBQ0YsT0FBTyxFQUFFd0I7WUFBWSxHQUNsRGQsS0FBSyxDQUFDSSxRQUFRLENBQUNDLE9BQU8sQ0FDZixDQUNJLENBQ0wsRUFDVnRELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUMsY0FBYztjQUFDNEMsR0FBRyxFQUFFakM7WUFBUSxHQUM5Q25ELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUMscUNBQXFDO2NBQUEsZ0JBQWM7WUFBVyxHQUNoRnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUM2QixTQUFBLENBQUFrQyxRQUFRO2NBQUN4QixPQUFPLEVBQUVHO1lBQVMsRUFBSSxDQUN2QixFQUNWekQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQyw4QkFBOEI7Y0FBQSxnQkFBYztZQUFTLEdBQ3ZFeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsY0FDQ2YsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ2dDLFFBQUEsQ0FBQXhCLGVBQWU7Y0FBQ3JELEVBQUUsRUFBQyxTQUFTO2NBQUNzRCxJQUFJLEVBQUU4QixPQUFPO2NBQUVuSixLQUFLLEVBQUVBLEtBQUs7Y0FBRXNILE1BQU0sRUFBRXRILEtBQUssQ0FBQ2tDO1lBQUssRUFBSSxFQUNsRjJELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUM4QixTQUFBLENBQUF3QyxRQUFRO2NBQUM1RCxNQUFNLEVBQUV0SCxLQUFLLENBQUNrQyxLQUFLO2NBQUVpSCxPQUFPLEVBQUVBLE9BQU87Y0FBRXBGLEVBQUUsRUFBQztZQUFTLEVBQUcsQ0FDM0QsQ0FDRyxDQUNELEVBQ1Y4QixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDNEIsTUFBQSxDQUFBMkMsS0FBSyxPQUFHLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUEsSUFBQXRGLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF3SCxXQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQWdKLE9BQUEsR0FBQWhKLE9BQUE7VUFFTSxTQUFVd0wsS0FBS0EsQ0FBQTtZQUNwQixNQUFNO2NBQUVuTDtZQUFLLENBQUUsR0FBRyxJQUFBOEYsUUFBQSxDQUFBTyxxQkFBcUIsR0FBRTtZQUV6QyxJQUFJLENBQUNyRyxLQUFLLENBQUNtQyxJQUFJLENBQUNpSixRQUFRLEVBQUUsT0FBTyxJQUFJO1lBQ3JDLE9BQ0N2RixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQXVDLEdBQ3BEckksS0FBSyxDQUFDbUMsSUFBSSxDQUFDaUosUUFBUSxDQUFDQyxHQUFHLENBQUNDLElBQUksSUFBRztjQUMvQixNQUFNQyxHQUFHLEdBQUcsR0FBRzVDLE9BQUEsQ0FBQXBDLE9BQU0sQ0FBQ2tELE1BQU0sQ0FBQytCLE9BQU8sU0FBU0YsSUFBSSxDQUFDdkgsRUFBRSxFQUFFO2NBQ3RELE9BQ0M4QixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFzRSxJQUFJO2dCQUFDcEgsR0FBRyxFQUFFa0gsR0FBRztnQkFBRUcsSUFBSSxFQUFFSCxHQUFHO2dCQUFFbEQsU0FBUyxFQUFDO2NBQVcsR0FDOUNpRCxJQUFJLENBQUNLLElBQUksQ0FDSjtZQUVULENBQUMsQ0FBQyxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUE5RixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFFTyxNQUFNaU0sWUFBWSxHQUFHQSxDQUFDO1lBQUV2RTtVQUFJLENBQUUsS0FBSTtZQUN4QyxNQUFNO2NBQUVySDtZQUFLLENBQUUsR0FBRyxJQUFBOEYsUUFBQSxDQUFBTyxxQkFBcUIsR0FBRTtZQUN6QyxNQUFNd0YsSUFBSSxHQUFHLFlBQVk7WUFDekIsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFsRyxNQUFBLENBQUFXLFFBQVEsRUFBQyxJQUFJLENBQUM7WUFFOUMsSUFBQVgsTUFBQSxDQUFBbUcsU0FBUyxFQUFDLE1BQUs7Y0FDZCxNQUFNQyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2dCQUMzQixNQUFNcEIsR0FBRyxHQUFHLE1BQU03SyxLQUFLLENBQUNrQyxLQUFLLENBQUNnSyx1QkFBdUIsQ0FBQzdFLElBQUksRUFBRXdFLElBQUksQ0FBQztnQkFDakVFLFdBQVcsQ0FBQ2xCLEdBQUcsQ0FBQztjQUNqQixDQUFDO2NBQ0RvQixRQUFRLEVBQUU7WUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ3BHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGNBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQU91RixRQUFRO1lBQUEsR0FDZHRHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVFpRSxHQUFHLEVBQUVpQixRQUFRO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLENBQzlCLENBQ0g7VUFFUixDQUFDO1VBQUM3SyxPQUFBLENBQUE0SyxZQUFBLEdBQUFBLFlBQUE7VUFBQSxJQUFBUSxRQUFBLEdBQUFwTCxPQUFBLENBQUF1RixPQUFBLEdBRWFxRixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCM0IsSUFBQS9GLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBME0sS0FBQSxHQUFBMU0sT0FBQTtVQUNBLElBQUEyTSxNQUFBLEdBQUEzTSxPQUFBO1VBRWMsU0FBVTRNLFdBQVdBLENBQUM7WUFBRTNLO1VBQUssQ0FBRTtZQUM1QyxPQUNDaUUsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFPLEdBQ3JCeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsYUFBS2hGLEtBQUssQ0FBQzRLLEtBQUssQ0FBTSxFQUN0QjNHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLFlBQUloRixLQUFLLENBQUMwSCxTQUFTLENBQUNILE9BQU8sQ0FBSyxFQUNoQ3RELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUN5RixLQUFBLENBQUFaLElBQUk7Y0FBQ3BELFNBQVMsRUFBQyxrQkFBa0I7Y0FBQ3FELElBQUksRUFBRSxTQUFTOUosS0FBSyxDQUFDbUMsRUFBRTtZQUFFLEdBQzNEOEIsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzBGLE1BQUEsQ0FBQUcsSUFBSTtjQUFDdEUsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNwQnRDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGlDQUFxQixDQUNmLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBZixNQUFBLEdBQUFsRyxPQUFBO1VBYU8sTUFBTStNLGtCQUFrQixHQUFBMUwsT0FBQSxDQUFBMEwsa0JBQUEsR0FBRzdHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDb0csYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFDekUsTUFBTXRHLHFCQUFxQixHQUFHQSxDQUFBLEtBQU1SLE1BQUEsQ0FBQVUsT0FBSyxDQUFDcUcsVUFBVSxDQUFDRixrQkFBa0IsQ0FBQztVQUFDMUwsT0FBQSxDQUFBcUYscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZGhGLElBQUFSLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBd0gsV0FBQSxHQUFBeEgsT0FBQTtVQUVNLFNBQVVrTixTQUFTQSxDQUFDO1lBQUVDLEtBQUs7WUFBRTFFLE9BQU87WUFBRXRCO1VBQUssQ0FBRTtZQUNsRCxPQUNDakIsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFBLGFBQVl4QixLQUFLO2NBQUVpRyxPQUFPLEVBQUMsU0FBUztjQUFDM0UsT0FBTyxFQUFFQTtZQUFPLEdBQzFEMEUsS0FBSyxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQWpILE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBMk0sTUFBQSxHQUFBM00sT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBR2MsU0FBVXFOLE1BQU1BLENBQUE7WUFDN0IsTUFBTTtjQUNMakUsT0FBTztjQUNQa0UsZ0JBQWdCO2NBQ2hCN0csYUFBYTtjQUNidkUsS0FBSztjQUNMaUgsS0FBSyxFQUFFO2dCQUFFb0U7Y0FBTTtZQUFFLENBQ2pCLEdBQUcsSUFBQXBILFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFFM0IsTUFBTW1HLEtBQUssR0FBR1UsTUFBTSxDQUFDQyxNQUFNLENBQUMvRyxhQUFhLENBQUM7WUFFMUMsT0FDQ1AsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBUXlCLFNBQVMsRUFBQztZQUFlLEdBQ2hDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQztZQUE4QixHQUNoRHhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUMwRixNQUFBLENBQUFHLElBQUk7Y0FBQ3RFLElBQUksRUFBQyxPQUFPO2NBQUNFLFNBQVMsRUFBQztZQUFnQixFQUFHLEVBQ2hEeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsYUFDRTRGLEtBQUssRSxNQUFJM0ssS0FBSyxDQUFDMkssS0FBSyxDQUNqQixDQUNJLEVBQ1YzRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEdBQy9CeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzBGLE1BQUEsQ0FBQWMsVUFBVTtjQUNWakYsSUFBSSxFQUFDLE9BQU87Y0FDWkUsU0FBUyxFQUFFLG1CQUFtQlUsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUU7Y0FDekRYLE9BQU8sRUFBRTZFO1lBQWdCLEVBQ3hCLENBQ0csQ0FDRTtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBSSxlQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQTJOLE9BQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUE0TixRQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQWtHLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBNk4sZUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBQ0EsSUFBQThOLE9BQUEsR0FBQTlOLE9BQUE7VUFFTSxTQUFVb0IsU0FBU0EsQ0FBQztZQUFFZjtVQUFLLENBQUU7WUFDbEMsTUFBTSxDQUFDK0ksT0FBTyxFQUFFMkUsVUFBVSxDQUFDLEdBQUc3SCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsRCxNQUFNLENBQUM1QyxLQUFLLEVBQUUrSixRQUFRLENBQUMsR0FBRzlILE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUN4RyxLQUFLLENBQUNVLFVBQVUsQ0FBQztZQUMxRCxNQUFNLENBQUNrTixVQUFVLEVBQUU5RSxLQUFLLENBQUMsR0FBRyxJQUFBMkUsT0FBQSxDQUFBSSxRQUFRLEVBQUNMLGVBQUEsQ0FBQU0sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTWQsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVMsVUFBVSxDQUFDLENBQUMzRSxPQUFPLENBQUM7WUFDbkQsTUFBTSxDQUFDM0MsYUFBYSxFQUFFNEgsZ0JBQWdCLENBQUMsR0FBR25JLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQVMsU0FBUyxDQUFDO1lBRTNFLElBQUFQLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUN6RyxLQUFLLENBQUMsRUFBRSxNQUFNMk4sUUFBUSxDQUFDM04sS0FBSyxDQUFDVSxVQUFVLElBQUlWLEtBQUssQ0FBQ3lELFNBQVMsQ0FBQyxDQUFDO1lBRXZFLE1BQU13SyxVQUFVLEdBQUdDLElBQUksSUFBRztjQUN6QkYsZ0JBQWdCLENBQUNFLElBQUksQ0FBQztZQUN2QixDQUFDO1lBRUQsTUFBTUMsWUFBWSxHQUFHdEksTUFBQSxDQUFBVSxPQUFLLENBQUM2SCxPQUFPLENBQ2pDLE9BQU87Y0FDTnhLLEtBQUssRUFBRWdLLFVBQVUsSUFBSWhLLEtBQUssSUFBSTVELEtBQUssQ0FBQ3lELFNBQVM7Y0FDN0MyQyxhQUFhO2NBQ2I2SCxVQUFVO2NBQ1ZqTyxLQUFLO2NBQ0w4SSxLQUFLO2NBQ0xqSCxLQUFLLEVBQUU3QixLQUFLLENBQUM2QixLQUFLO2NBQ2xCa0gsT0FBTztjQUNQa0U7YUFDQSxDQUFDLEVBQ0YsQ0FBQ1csVUFBVSxFQUFFaEssS0FBSyxFQUFFNUQsS0FBSyxDQUFDeUQsU0FBUyxFQUFFMkMsYUFBYSxFQUFFcEcsS0FBSyxFQUFFOEksS0FBSyxFQUFFQyxPQUFPLENBQUMsQ0FDMUU7WUFFRCxJQUFJLENBQUM2RSxVQUFVLElBQUksQ0FBQ2hLLEtBQUssRUFBRSxPQUFPaUMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzJHLFFBQUEsQ0FBQWMsT0FBTyxPQUFHO1lBRTdDLE9BQ0N4SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDZCxRQUFBLENBQUE0RyxrQkFBa0IsQ0FBQzRCLFFBQVE7Y0FBQ3hILEtBQUssRUFBRXFIO1lBQVksR0FDL0N0SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDO1lBQWMsR0FDaEN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDO1lBQWUsR0FDakN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDMEcsT0FBQSxDQUFBL0csT0FBTSxPQUFHLEVBQ1ZWLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUN5RyxlQUFBLENBQUFsSCxjQUFjLE9BQUcsQ0FDVCxDQUNELEVBQ1ZOLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGNBQVEsQ0FDcUI7VUFFaEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFmLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBMk0sTUFBQSxHQUFBM00sT0FBQTtVQUVBLElBQUE0TixRQUFBLEdBQUE1TixPQUFBO1VBQ00sU0FBVTBPLE9BQU9BLENBQUE7WUFDdEIsT0FDQ3hJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBYyxHQUM1QnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUM7WUFBZSxHQUNqQ3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVF5QixTQUFTLEVBQUM7WUFBZSxHQUNoQ3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUM7WUFBOEIsR0FDaER4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDMEYsTUFBQSxDQUFBRyxJQUFJO2NBQUNwRSxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNGLElBQUksRUFBQztZQUFPLEVBQUcsRUFDaER0QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxhQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDMkcsUUFBQSxDQUFBYyxPQUFjO2NBQUNFLEtBQUssRUFBQztZQUFPLEVBQUcsQ0FDNUIsQ0FDSSxDQUNGLENBQ0EsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBMUksTUFBQSxHQUFBbEcsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVVpTCxXQUFXQSxDQUFDO1lBQUVDO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRTtjQUNUcEcsT0FBTyxDQUFDK0osSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWjNELEdBQUcsR0FBRzRELEdBQUcsQ0FBQ0MsZUFBZSxDQUFDN0QsR0FBRyxDQUFDO1lBQzlCLE1BQU1JLEdBQUcsR0FBR3BGLE1BQUEsQ0FBQVUsT0FBSyxDQUFDMEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnBELE1BQUEsQ0FBQVUsT0FBSyxDQUFDeUYsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWxDLE1BQU0sR0FBR21CLEdBQUcsQ0FBQ2QsT0FBTztjQUMxQkwsTUFBTSxDQUFDNkUsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSTdFLE1BQU0sQ0FBQzhFLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQy9FLE1BQU0sQ0FBQ2dGLFdBQVcsR0FBRyxLQUFLO2tCQUMxQmhGLE1BQU0sQ0FBQ2lGLFlBQVksR0FBRyxNQUFLO29CQUMxQmpGLE1BQU0sQ0FBQ2lGLFlBQVksR0FBRyxJQUFJO29CQUMxQmpGLE1BQU0sQ0FBQ2dGLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDakUsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ2hGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBYyxHQUM1QnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQU91RixRQUFRO2NBQUM2QyxPQUFPLEVBQUM7WUFBVSxHQUNqQ25KLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVFpRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRWdCLElBQUksRUFBQyxXQUFXO2NBQUNaLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQXBGLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUE4SSxTQUFBLEdBQUE5SSxPQUFBO1VBQ00sU0FBVXNQLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUVqUDtZQUFLLENBQUUsR0FBRyxJQUFBOEYsUUFBQSxDQUFBb0osa0JBQWtCLEdBQUU7WUFFdEMsT0FBT3JKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUM2QixTQUFBLENBQUFrQyxRQUFRO2NBQUN4QixPQUFPLEVBQUVuSixLQUFLLENBQUM0QyxVQUFVLENBQUN1TTtZQUFvQixFQUFJO1VBQ3BFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF0SixNQUFBLEdBQUFsRyxPQUFBO1VBRUEsSUFBQXdILFdBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF5UCxRQUFBLEdBQUF6UCxPQUFBO1VBQ0EsSUFBQTBQLFFBQUEsR0FBQTFQLE9BQUE7VUFDQSxJQUFBMlAsYUFBQSxHQUFBM1AsT0FBQTtVQUVNLFNBQVU0UCxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRXZQLEtBQUs7Y0FBRThJLEtBQUs7Y0FBRTBHO1lBQU8sQ0FBRSxHQUFHLElBQUExSixRQUFBLENBQUFvSixrQkFBa0IsR0FBRTtZQUN0RCxNQUFNLENBQUMvRixPQUFPLEVBQUVzRyxVQUFVLENBQUMsR0FBRzVKLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQVMsU0FBUyxDQUFDO1lBQy9ELE1BQU1rSixNQUFNLEdBQUc3RixLQUFLLElBQUc7Y0FDdEJBLEtBQUssQ0FBQzhGLGNBQWMsRUFBRTtjQUN0QkgsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTUksS0FBSyxHQUFHO2NBQ2JDLE9BQU8sRUFBRVQsUUFBQSxDQUFBVSxlQUFlO2NBQ3hCQyxPQUFPLEVBQUVWLFFBQUEsQ0FBQVcsZUFBZTtjQUN4QkMsWUFBWSxFQUFFWCxhQUFBLENBQUFMO2FBQ2Q7WUFDRCxNQUFNaUIsSUFBSSxHQUFHTixLQUFLLENBQUN6RyxPQUFPLENBQUM7WUFDM0IsTUFBTWdILFVBQVUsR0FBR3RHLEtBQUssSUFBRztjQUMxQjRGLFVBQVUsQ0FBQzVGLEtBQUssQ0FBQ0UsYUFBYSxDQUFDRSxPQUFPLENBQUNpRSxJQUFJLENBQUM7WUFDN0MsQ0FBQztZQUNELE9BQ0NySSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWdDLEdBQzlDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsaUJBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGFBQUtrQyxLQUFLLENBQUNzSCxhQUFhLENBQU0sRUFDOUJ2SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQThCLEdBQzVDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsa0JBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQTRELFdBQVc7Y0FBQ0MsUUFBUSxFQUFFO1lBQUMsR0FDdkJuRixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUEsYUFBVyxTQUFTO2NBQUNGLE9BQU8sRUFBRStIO1lBQVUsR0FDN0NySCxLQUFLLENBQUN1SCxRQUFRLENBQ1AsRUFDVHhLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQSxhQUFXLGNBQWM7Y0FBQ0YsT0FBTyxFQUFFK0g7WUFBVSxHQUNsRHJILEtBQUssQ0FBQ21ILFlBQVksQ0FDWCxFQUNUcEssTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFBLGFBQVcsU0FBUztjQUFDRixPQUFPLEVBQUUrSDtZQUFVLEdBQzdDckgsS0FBSyxDQUFDd0gsUUFBUSxDQUNQLENBQ0ksQ0FDTCxFQUNWekssTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFDRixPQUFPLEVBQUVzSCxNQUFNO2NBQUUzQyxPQUFPLEVBQUM7WUFBUyxHQUN4Q2pFLEtBQUssQ0FBQ3lILElBQUksQ0FDSCxDQUNKLENBQ0UsRUFDVDFLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNzSixJQUFJLE9BQUcsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBckssTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQThJLFNBQUEsR0FBQTlJLE9BQUE7VUFDTSxTQUFVcVEsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVoUTtZQUFLLENBQUUsR0FBRyxJQUFBOEYsUUFBQSxDQUFBb0osa0JBQWtCLEdBQUU7WUFFdEMsT0FBT3JKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUM2QixTQUFBLENBQUFrQyxRQUFRO2NBQUN4QixPQUFPLEVBQUVuSixLQUFLLENBQUM0QyxVQUFVLENBQUN5TjtZQUFRLEVBQUk7VUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXhLLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFzQixLQUFBLEdBQUF0QixPQUFBO1VBQ00sU0FBVW1RLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFOVAsS0FBSztjQUFFOEksS0FBSztjQUFFMEc7WUFBTyxDQUFFLEdBQUcsSUFBQTFKLFFBQUEsQ0FBQW9KLGtCQUFrQixHQUFFO1lBRXRELE9BQ0NySixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFBZixNQUFBLENBQUFVLE9BQUEsQ0FBQWlLLFFBQUEsUUFDRXhRLEtBQUssQ0FBQzRDLFVBQVUsQ0FBQzBOLFFBQVEsQ0FBQ2pGLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVtRixLQUFLLEtBQUk7Y0FDOUMsT0FDQzVLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2dCQUFTdkMsR0FBRyxFQUFFaUgsSUFBSSxDQUFDb0YsT0FBTyxDQUFDcEwsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQUUrQyxTQUFTLEVBQUM7Y0FBMkIsR0FDakZ4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtnQkFBU3lCLFNBQVMsRUFBQztjQUF1QixHQUFFcEgsS0FBQSxDQUFBMFAsS0FBSyxDQUFDckYsSUFBSSxDQUFDc0YsS0FBSyxDQUFDLENBQVcsRUFDeEUvSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxrQkFDQ2YsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsaUJBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGFBQUswRSxJQUFJLENBQUNvRixPQUFPLENBQU0sQ0FDZixFQUNUN0ssTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsWUFBSTBFLElBQUksQ0FBQ3VGLFVBQVUsQ0FBSyxDQUNmLENBQ0Q7WUFFWixDQUFDLENBQUMsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBaEwsTUFBQSxHQUFBbEcsT0FBQTtVQVlPLE1BQU1tUixlQUFlLEdBQUE5UCxPQUFBLENBQUE4UCxlQUFBLEdBQUdqTCxNQUFBLENBQUFVLE9BQUssQ0FBQ29HLGFBQWEsQ0FBQyxJQUF3QixDQUFDO1VBQ3JFLE1BQU11QyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNckosTUFBQSxDQUFBVSxPQUFLLENBQUNxRyxVQUFVLENBQUNrRSxlQUFlLENBQUM7VUFBQzlQLE9BQUEsQ0FBQWtPLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2IxRSxJQUFBckosTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFvUixNQUFBLEdBQUFwUixPQUFBO1VBRUEsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBcVIsU0FBQSxHQUFBclIsT0FBQTtVQUNBLElBQUFzUixVQUFBLEdBQUF0UixPQUFBO1VBQ0EsSUFBQXVSLFNBQUEsR0FBQXZSLE9BQUE7VUFFTSxTQUFVdUgsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQ0xsSCxLQUFLO2NBQ0w4SSxLQUFLLEVBQUU7Z0JBQUU5QixXQUFXLEVBQUU4QjtjQUFLO1lBQUUsQ0FDN0IsR0FBRyxJQUFBaEQsUUFBQSxDQUFBTyxxQkFBcUIsR0FBRTtZQUMzQixNQUFNLENBQUM4SyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdkwsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDMEgsSUFBSSxFQUFFc0IsT0FBTyxDQUFDLEdBQUczSixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFTLENBQUMsQ0FBQ3hHLEtBQUssQ0FBQzRDLFVBQVUsQ0FBQzBOLFFBQVEsQ0FBQ2UsTUFBTSxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDN0csTUFBTUMsWUFBWSxHQUFHeEksS0FBSyxDQUFDeUksUUFBUSxFQUFFak0sT0FBTyxDQUFDLElBQUksRUFBRXRGLEtBQUssQ0FBQ3NDLFFBQVEsQ0FBQztZQUNsRSxNQUFNd0UsS0FBSyxHQUFHO2NBQ2I5RyxLQUFLO2NBQ0wwQyxRQUFRLEVBQUUxQyxLQUFLLENBQUMwQyxRQUFRO2NBQ3hCeU8sU0FBUztjQUNUQyxZQUFZO2NBQ1p0SSxLQUFLO2NBQ0x0RCxLQUFLLEVBQUV4RixLQUFLLENBQUMwQyxRQUFRLENBQUM4QyxLQUFLO2NBQzNCZ0ssT0FBTztjQUNQZ0MsUUFBUSxFQUFFM0gsS0FBSyxJQUFHO2dCQUNqQkEsS0FBSyxDQUFDOEYsY0FBYyxFQUFFO2dCQUN0QjtjQUNEO2FBQ0E7WUFFRCxNQUFNaEosT0FBTyxHQUFHdUgsSUFBSSxLQUFLLFVBQVUsR0FBRzhDLFNBQUEsQ0FBQXpCLFFBQVEsR0FBRzBCLFVBQUEsQ0FBQVEsZUFBZTtZQUVoRSxPQUNDNUwsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsY0FDQ2YsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ21LLE1BQUEsQ0FBQVcsS0FBSztjQUFDN0YsSUFBSSxFQUFDO1lBQU0sR0FBRXlGLFlBQVksQ0FBUyxFQUN6Q3pMLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNzSyxTQUFBLENBQUFKLGVBQWUsQ0FBQ3hDLFFBQVE7Y0FBQ3hILEtBQUssRUFBRUE7WUFBSyxHQUNyQ2pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBaUQsR0FDL0R4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDRCxPQUFPLE9BQUcsQ0FDTixDQUNvQixDQUN0QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBZCxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXdILFdBQUEsR0FBQXhILE9BQUE7VUFFQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF1UixTQUFBLEdBQUF2UixPQUFBO1VBQ0EsSUFBQWdTLE1BQUEsR0FBQWhTLE9BQUE7VUFDQSxJQUFBaVMsWUFBQSxHQUFBalMsT0FBQTtVQUNBLElBQUFrUyxNQUFBLEdBQUFsUyxPQUFBO1VBQ0EsSUFBQW1TLE1BQUEsR0FBQW5TLE9BQUE7VUFFTztVQUFXLE1BQU04UixlQUFlLEdBQUdBLENBQUM7WUFBRXZKLFFBQVEsR0FBRztVQUFLLENBQUUsS0FBSTtZQUNsRSxNQUFNO2NBQUVZLEtBQUs7Y0FBRXBHLFFBQVE7Y0FBRXlPLFNBQVM7Y0FBRUMsWUFBWTtjQUFFNUwsS0FBSztjQUFFZ0s7WUFBTyxDQUFFLEdBQUcsSUFBQTFKLFFBQUEsQ0FBQW9KLGtCQUFrQixHQUFFO1lBQ3pGLE1BQU07Y0FDTHBHLEtBQUssRUFBRTtnQkFBRWlKO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFiLFNBQUEsQ0FBQTdLLHFCQUFxQixHQUFFO1lBRTNCLE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUczQixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUF5QyxFQUFFLENBQUM7WUFDdEYsTUFBTSxDQUFDd0wsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3BNLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU07Y0FBRXhHO1lBQUssQ0FBRSxHQUFHLElBQUFrUixTQUFBLENBQUE3SyxxQkFBcUIsR0FBRTtZQUN6QyxNQUFNLENBQUM2TCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUF0TSxNQUFBLENBQUFXLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTXFCLE1BQU0sR0FBRyxNQUFNZ0MsS0FBSyxJQUFHO2NBQzVCLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQzhGLGNBQWMsRUFBRTtnQkFDdEIsTUFBTXlDLGNBQWMsR0FBRyxDQUFDakIsU0FBUztnQkFDakMsTUFBTWtCLFVBQVUsR0FBRyxNQUFNM1AsUUFBUSxDQUFDNFAsY0FBYyxFQUFFO2dCQUNsRCxJQUFJRCxVQUFVLENBQUNFLEtBQUssS0FBSyxTQUFTLEVBQUVKLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBRXRELE1BQU16UCxRQUFRLENBQUM4UCxNQUFNLEVBQUU7Z0JBQ3ZCcEIsWUFBWSxDQUFDZ0IsY0FBYyxDQUFDO2dCQUM1QjVLLFNBQVMsQ0FBQyxPQUFPLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaEQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRUYsQ0FBQyxDQUFDOztZQUV0QyxDQUFDO1lBQ0QsTUFBTWlPLE1BQU0sR0FBRyxNQUFNNUksS0FBSyxJQUFHO2NBQzVCLE1BQU1yRSxLQUFLLEdBQUcsTUFBTTlDLFFBQVEsQ0FBQ3VGLElBQUksRUFBRTtjQUNuQ21KLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDbkI1SixTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNeUQsR0FBRyxHQUFHcEYsTUFBQSxDQUFBVSxPQUFLLENBQUMwQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCO1lBRUEsTUFBTXlKLFFBQVEsR0FBRyxDQUFDdkIsU0FBUyxJQUFJM0wsS0FBSztZQUNwQyxNQUFNbU4sT0FBTyxHQUFHLENBQUN4QixTQUFTLEdBQUl1QixRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBSSxNQUFNO1lBQ3BFLE1BQU1FLE1BQU0sR0FBRy9JLEtBQUssSUFBRztjQUN0QkEsS0FBSyxDQUFDOEYsY0FBYyxFQUFFO2NBQ3RCc0MsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQmpTLEtBQUssQ0FBQ3VGLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM3QixJQUFJLENBQUNrUCxRQUFRLElBQUc7Z0JBQzNDckQsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFFbkJ5QyxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2xCLENBQUMsQ0FBQztjQUVGYSxVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNekwsSUFBSSxHQUFHNEQsR0FBRyxDQUFDZCxPQUFPLENBQUM0SSxhQUFhLENBQUMsa0JBQWtCLENBQUM7Z0JBRTFELE1BQU1DLFFBQVEsR0FBR2xLLEtBQUssQ0FBQ21LLGVBQWU7Z0JBQ3RDLElBQUlDLENBQUMsR0FBRyxDQUFDO2dCQUNULElBQUlDLFlBQVk7Z0JBQ2hCLE1BQU1DLFFBQVEsR0FBR0MsVUFBVSxDQUFDQyxXQUFXLENBQUMsTUFBSztrQkFDNUNqTSxJQUFJLENBQUNrRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7a0JBQ3BDbkQsSUFBSSxDQUFDa0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO2tCQUNoQ3FJLFVBQVUsQ0FBQyxNQUFLO29CQUNmekwsSUFBSSxDQUFDa0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUNuQ25ELElBQUksQ0FBQ2tELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLGFBQWEsQ0FBQztrQkFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFFUnBELElBQUksQ0FBQ2tNLFNBQVMsR0FBR1AsUUFBUSxDQUFDRSxDQUFDLENBQUM7a0JBQzVCLElBQUlNLElBQUksR0FBRyxHQUFHO2tCQUNkTCxZQUFZLEdBQUdHLFdBQVcsQ0FBQyxNQUFLO29CQUMvQixJQUFJRSxJQUFJLEtBQUssR0FBRyxFQUFFO3NCQUNqQkEsSUFBSSxHQUFHLElBQUk7cUJBQ1gsTUFBTSxJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO3NCQUN6QkEsSUFBSSxHQUFHLEtBQUs7cUJBQ1osTUFBTTtzQkFDTkEsSUFBSSxHQUFHLEdBQUc7O29CQUVYbk0sSUFBSSxDQUFDa00sU0FBUyxHQUFHUCxRQUFRLENBQUNFLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBR00sSUFBSTtrQkFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFDUixJQUFJTixDQUFDLEtBQUtGLFFBQVEsQ0FBQzNCLE1BQU0sR0FBRyxDQUFDLEVBQUU2QixDQUFDLEdBQUcsQ0FBQztrQkFDcENBLENBQUMsRUFBRTtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUVSRyxVQUFVLENBQUNQLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQixJQUFJZCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxLQUFLLENBQUM7Y0FDVixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUNELE1BQU05SixJQUFJLEdBQUdnSixTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDdkMsTUFBTXNDLFFBQVEsR0FBR2xNLE1BQU0sS0FBSyxPQUFPLEdBQUdrTCxNQUFNLEdBQUc1SyxNQUFNO1lBRXJELE1BQU02TCxHQUFHLEdBQUcsOEJBQThCMUIsT0FBTyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDeEUsTUFBTTJCLE9BQU8sR0FBRzlKLEtBQUssSUFBRztjQUN2QnNJLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0N0TSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTcUUsR0FBRyxFQUFFQSxHQUFHO2NBQUU1QyxTQUFTLEVBQUVxTDtZQUFHLEdBQ2hDN04sTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUEyQixHQUN6Q3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUMrSyxNQUFBLENBQUFpQyxLQUFLO2NBQUNyTSxNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUN4QjJLLFNBQVMsSUFDVHJNLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNpTCxNQUFBLENBQUFnQyxLQUFLO2NBQUNDLElBQUksRUFBRSxJQUFJO2NBQUVDLElBQUksRUFBRSxJQUFJO2NBQUVKLE9BQU8sRUFBRUE7WUFBTyxHQUM5QzlOLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGFBQUttTCxXQUFXLENBQUN2RixLQUFLLENBQU0sRUFDNUIzRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDa0wsTUFBQSxDQUFBa0MsS0FBSztjQUFDbkosR0FBRyxFQUFDO1lBQTBCLEVBQUcsRUFDeENoRixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxZQUFJbUwsV0FBVyxDQUFDa0MsV0FBVyxDQUFLLEVBQ2hDcE8sTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBUXlCLFNBQVMsRUFBQztZQUFPLEdBQ3hCeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFDeUUsT0FBTyxFQUFDLFNBQVM7Y0FBQzNFLE9BQU8sRUFBRXVMO1lBQU8sR0FDeEM1QixXQUFXLENBQUNtQyxNQUFNLENBQ1gsQ0FDRCxDQUVWLEVBQ0RyTyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUNILElBQUksRUFBRUEsSUFBSTtjQUFFQyxPQUFPLEVBQUVxTCxRQUFRO2NBQUV2TCxRQUFRLEVBQUVBO1lBQVEsR0FDdkRZLEtBQUssQ0FBQzZKLE9BQU8sQ0FBQyxDQUNQLEVBQ1JELFFBQVEsSUFDUjdNLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBNkIsR0FDM0N4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDZ0wsWUFBQSxDQUFBaEgsV0FBVztjQUFDQyxHQUFHLEVBQUU3SyxLQUFLLENBQUMwQyxRQUFRLENBQUM4QztZQUFLLEVBQUksRUFDMUNLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ0gsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFd0ssTUFBTTtjQUFFN0YsT0FBTyxFQUFDO1lBQVMsR0FDcERqRSxLQUFLLENBQUNxTCxJQUFJLENBQ0gsQ0FFVixDQUNJLEVBRUxuQyxPQUFPLElBQ1BuTSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWUsR0FDN0J4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFJeUIsU0FBUyxFQUFDO1lBQWlCLEdBQUVTLEtBQUssQ0FBQ21LLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBTSxDQUVoRSxDQUNRO1VBRVosQ0FBQztVQUFDalMsT0FBQSxDQUFBeVEsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25JRixJQUFBNUwsTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUF5VSxTQUFBLEdBQUF6VSxPQUFBO1VBRkE7O1VBUU0sU0FBVWlVLEtBQUtBLENBQUM7WUFBRXJNO1VBQU0sQ0FBYztZQUMzQyxNQUFNOE0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMvTSxNQUFNLENBQUM7WUFDdkQsTUFBTWdOLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ0QsUUFBUSxDQUFDL00sTUFBTSxDQUFDO1lBRXJELE1BQU0sQ0FBQ2lOLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFQLFNBQUEsQ0FBQVEsUUFBUSxFQUFDUCxTQUFTLEVBQUVFLE9BQU8sRUFBRWhOLE1BQU0sS0FBSyxPQUFPLENBQUM7WUFDaEcsTUFBTXNOLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHUCxPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDbFAsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFrQixHQUNoQ3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGVBQU8sR0FBR29PLGVBQWUsRUFBRSxDQUFRLEVBQ25DblAsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBTXlCLFNBQVMsRUFBQztZQUFrQixPQUFTLEVBQzNDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsZUFBTyxHQUFHaU8sV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQWhQLE1BQUEsR0FBQWxHLE9BQUE7VUFEQTs7VUFFQSxNQUFNO1lBQUU2RyxRQUFRO1lBQUV3RjtVQUFTLENBQUUsR0FBR25HLE1BQUEsQ0FBQVUsT0FBSztVQUUvQixTQUFVcU8sUUFBUUEsQ0FBQ1AsU0FBa0IsRUFBRUUsT0FBZ0IsRUFBRVUsS0FBSyxHQUFHLElBQUk7WUFDMUUsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHM08sUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ3dGLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSW9KLFVBQTBCO2NBQzlCLElBQUlILEtBQUssRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQztjQUNyQixJQUFJZCxTQUFTLEVBQUU7Z0JBQ2RlLFVBQVUsR0FBRzlCLFdBQVcsQ0FBQyxNQUFLO2tCQUM3QjZCLE9BQU8sQ0FBQ0UsUUFBUSxJQUFHO29CQUNsQixPQUFPQSxRQUFRLEdBQUcsQ0FBQztrQkFDcEIsQ0FBQyxDQUFDO2dCQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2YsU0FBUyxDQUFDLENBQUM7WUFFZnJJLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXVJLE9BQU8sRUFBRTtnQkFDWlksT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1osT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUixPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIn0=