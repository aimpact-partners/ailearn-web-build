System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/wrapper", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.9/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/preload", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0024ModelWrapper) {
      dependency_6 = _aimpactAilearnApp0024ModelWrapper;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive119Model) {
      dependency_8 = _beyondJsReactive119Model;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_9 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Voice) {
      dependency_10 = _aimpactChatSdk100Voice;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp0024AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0024AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_14 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Icons) {
      dependency_15 = _pragmateUi006Icons;
    }, function (_pragmateUi006Components) {
      dependency_16 = _pragmateUi006Components;
    }, function (_pragmateUi006Toast) {
      dependency_17 = _pragmateUi006Toast;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_20 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_21 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Link) {
      dependency_22 = _pragmateUi006Link;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Preload) {
      dependency_24 = _pragmateUi006Preload;
    }, function (_pragmateUi006Alert) {
      dependency_25 = _pragmateUi006Alert;
    }, function (_pragmateUi006Modal) {
      dependency_26 = _pragmateUi006Modal;
    }, function (_pragmateUi006Image) {
      dependency_27 = _pragmateUi006Image;
    }, function (_react1820JsxRuntime) {
      dependency_28 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['pragmate-ui/link', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['react/jsx-runtime', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignment-intro.widget');
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
        hash: 2146390641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _wrapper2 = require("@aimpact/chat/wrapper");
          var _chatControl = require("@aimpact/chat/chat-control.widget");
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
            #audioManager = new _chatControl.AudioManager(this);
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
              this.#voice = new _voice.Voice({
                language: _wrapper2.AppWrapper.language,
                rate: _wrapper2.AppWrapper.audioSpeed
              });
              _wrapper2.AppWrapper.on('app.settings.change', this.#listenAppChanges);
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
                const activity = new _core.AssignmentActivity({
                  id: this.#metadata.activity.id,
                  assignmentId: this.#metadata.assignment.id
                });
                this.#model = activity;
                await activity.isReady;
                await activity.load({
                  id: this.#metadata.activity.id,
                  assignmentId: this.#metadata.assignment.id
                });
                this.#voice.set({
                  language: activity.language
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
            #listenAppChanges = () => {
              this.#voice.set({
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

      /***************************************
      INTERNAL MODULE: ./views/content-manager
      ***************************************/

      ims.set('./views/content-manager', {
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
        hash: 1741744978,
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
        hash: 2210682937,
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
            const audioUrl = `${_config.default?.params.apis.ailearn}/activities/${store.model.id}/materials/content/audio`;
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
              className: "intro-actions__container  badges__container"
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
            }), _react.default.createElement("div", {
              className: "p1"
            }, _react.default.createElement(_playable.Playable, {
              player: store.voice,
              content: content,
              id: "content"
            }))))), _react.default.createElement(_links.Links, null));
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
        hash: 786320532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _contentManager = require("./content-manager");
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
            }, _react.default.createElement(_header.default, null), _react.default.createElement(_contentManager.ContentManager, null))), _react.default.createElement("slot", null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxpc3RlbkFwcENoYW5nZXMiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsInNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjbGlzdGVuQXBwQ2hhbmdlcyIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJhdWRpbyIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX2F1ZGlvUGxheWVyIiwiX2xpbmtzIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwicmVmIiwiUGxheWFibGUiLCJMaW5rcyIsImNoaWxkcmVuIiwibWFwIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsInVzZUVmZmVjdCIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIl9kZWZhdWx0IiwiX2xpbmsiLCJfaWNvbnMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiSGVhZGVyIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIkljb25CdXR0b24iLCJfY29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsInVwZGF0ZVZpZXciLCJ2aWV3IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJwZXJtaXNzaW9ucyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGVudC1tYW5hZ2VyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNO1lBQ25CO1lBRUFTLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxVQUFVLEVBQUU7Z0JBQzNCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUMsSUFBSUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUVyRCxDQUFDO1lBQ0QsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9sQixNQUFBLENBQUFtQixTQUFTO1lBQ2pCOztVQUNBQyxPQUFBLENBQUFsQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFtQixLQUFBLEdBQUF0QixPQUFBO1VBRUEsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsU0FBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixZQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQTBCLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBMkIsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixNQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFFQSxJQUFJOEIsUUFBUSxHQUFHLENBQUM7VUFzQlYsTUFBT2xCLFlBQWEsU0FBUWMsTUFBQSxDQUFBSyxhQUEyQjtZQUM1RCxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxLQUFNLEdBQUcsRUFBRTtZQUNYLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsWUFBYSxHQUFHLElBQUlYLFlBQUEsQ0FBQVksWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxJQUFJRixZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLENBQUFHLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFoQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJaUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9oQixTQUFBLENBQUFpQixVQUFVLENBQUNDLFdBQVc7WUFDOUI7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBT2QsUUFBQSxDQUFBZSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsV0FBVztZQUN2QztZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDdkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBbEMsVUFBVyxHQUFZLEtBQUs7WUFFNUIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBbUMsU0FBVSxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN0QixJQUFJRCxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUFFLFVBQVcsR0FBR3RCLFFBQVE7WUFDdEJ1QixZQUFZOUMsUUFBbUI7Y0FDOUIsS0FBSyxFQUFFO2NBQ1B1QixRQUFRLEVBQUU7Y0FDVixJQUFJLENBQUMsQ0FBQXZCLFFBQVMsR0FBR0EsUUFBUTtjQUN6QixJQUFJLENBQUMsQ0FBQWdDLEtBQU0sR0FBRyxJQUFJWCxNQUFBLENBQUEwQixLQUFLLENBQUM7Z0JBQ3ZCQyxRQUFRLEVBQUUvQixTQUFBLENBQUFpQixVQUFVLENBQUNjLFFBQVE7Z0JBQzdCQyxJQUFJLEVBQUVoQyxTQUFBLENBQUFpQixVQUFVLENBQUNnQjtlQUNqQixDQUFDO2NBRUZqQyxTQUFBLENBQUFpQixVQUFVLENBQUM1QixFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUE2QyxnQkFBaUIsQ0FBQztjQUM1RCxJQUFJLElBQUksQ0FBQyxDQUFBbkQsUUFBUyxDQUFDb0QsUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLFlBQVksRUFBRTtnQkFDbkI7O2NBRUQ7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFyRCxRQUFTLENBQUNzRCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUF0RCxRQUFTLENBQUNzRCxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUF0RCxRQUFTLENBQUN1RCxTQUFTO2NBQ3hGLElBQUksQ0FBQyxDQUFBZixRQUFTLEdBQUcsSUFBSXBCLFNBQUEsQ0FBQW9DLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2NBRWpDLElBQUksQ0FBQyxDQUFBZixVQUFXLEdBQUcsSUFBSTNCLEtBQUEsQ0FBQTJDLFVBQVUsQ0FBQztnQkFDakNKLFlBQVksRUFBRXRELFFBQVEsQ0FBQ3VEO2VBQ3ZCLENBQUM7Y0FDRixJQUFJLENBQUNJLFNBQVMsR0FBRyxLQUFLO2NBQ3RCLElBQUkzRCxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDNEQsSUFBSSxDQUFDLElBQUksQ0FBQzVELFFBQVEsQ0FBQyxDQUFDNkQsSUFBSSxDQUFDLE1BQUs7a0JBQ2xDLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7a0JBQ2pCLElBQUksQ0FBQ0gsU0FBUyxHQUFHLElBQUk7a0JBQ3JCLElBQUksQ0FBQyxDQUFBbkQsVUFBVyxHQUFHLElBQUk7a0JBQ3ZCLElBQUksQ0FBQ3VELFlBQVksRUFBRTtnQkFDcEIsQ0FBQyxDQUFDO2dCQUNGOztjQUdELElBQUksQ0FBQ0QsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsSUFBSTtjQUNyQixJQUFJLENBQUMsQ0FBQW5ELFVBQVcsR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQ3VELFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU1WLFlBQVlBLENBQUE7Y0FDakIsSUFBSTtnQkFDSCxNQUFNRCxRQUFRLEdBQUcsSUFBSXJDLEtBQUEsQ0FBQWlELGtCQUFrQixDQUFDO2tCQUN2Q0MsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBakUsUUFBUyxDQUFDb0QsUUFBUSxDQUFDYSxFQUFFO2tCQUM5QlgsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBdEQsUUFBUyxDQUFDa0UsVUFBVSxDQUFDRDtpQkFDeEMsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQXRDLEtBQU0sR0FBR3lCLFFBQVE7Z0JBQ3RCLE1BQU1BLFFBQVEsQ0FBQ2UsT0FBTztnQkFFdEIsTUFBTWYsUUFBUSxDQUFDUSxJQUFJLENBQUM7a0JBQ25CSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFqRSxRQUFTLENBQUNvRCxRQUFRLENBQUNhLEVBQUU7a0JBQzlCWCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUF0RCxRQUFTLENBQUNrRSxVQUFVLENBQUNEO2lCQUN4QyxDQUFDO2dCQUVGLElBQUksQ0FBQyxDQUFBakMsS0FBTSxDQUFDb0MsR0FBRyxDQUFDO2tCQUFFcEIsUUFBUSxFQUFFSSxRQUFRLENBQUNKO2dCQUFRLENBQUUsQ0FBQztnQkFFaEQsSUFBSSxDQUFDYyxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsSUFBSTtnQkFDckIsSUFBSSxDQUFDLENBQUFuRCxVQUFXLEdBQUcsSUFBSTtnQkFDdkIsTUFBTTZELElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNqQixRQUFRLENBQUNULFNBQVMsQ0FBQztnQkFDNUMwQixJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxJQUFHO2tCQUNsQixJQUFJLENBQUMsQ0FBQTdCLFNBQVUsQ0FBQ3lCLEdBQUcsQ0FBQ0ksR0FBRyxFQUFFcEIsUUFBUSxDQUFDVCxTQUFTLENBQUM2QixHQUFHLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxDQUFBQyxPQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDVixZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPVyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBQ0EsQ0FBQXZCLGdCQUFpQixHQUFHMEIsQ0FBQSxLQUFLO2NBQ3hCLElBQUksQ0FBQyxDQUFBN0MsS0FBTSxDQUFDb0MsR0FBRyxDQUFDO2dCQUFFbkIsSUFBSSxFQUFFaEMsU0FBQSxDQUFBaUIsVUFBVSxDQUFDZ0I7Y0FBVSxDQUFFLENBQUM7WUFDakQsQ0FBQztZQUVELE1BQU1VLElBQUlBLENBQUM1RCxRQUFtQjtjQUM3QixJQUFJQSxRQUFRLENBQUN5QixNQUFNLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDcUQsVUFBVSxDQUFDOUUsUUFBUSxDQUFDeUIsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsQ0FBQUUsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBRixNQUFPOztjQUczQixJQUFJekIsUUFBUSxDQUFDMEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDcUQsU0FBUyxDQUFDL0UsUUFBUSxDQUFDO2NBRWxELE1BQU0sSUFBSSxDQUFDLENBQUF5RSxPQUFRLEVBQUU7WUFDdEI7WUFFQSxDQUFBQSxPQUFRTyxDQUFBO2NBQ1BoRSxRQUFBLENBQUFpRSxjQUFjLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQXZELEtBQU07Y0FDekNYLFFBQUEsQ0FBQWlFLGNBQWMsQ0FBQ0UsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUF6QyxVQUFXO2NBRW5ELElBQUksQ0FBQyxDQUFBWCxZQUFhLEdBQUcsSUFBSSxDQUFDLENBQUFZLFNBQVUsQ0FBQ3ZDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dGLE9BQU8sQ0FBQyxJQUFJLEVBQUU5RCxRQUFBLENBQUFlLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUM7WUFDeEc7WUFFQThDLGNBQWMsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUIsSUFBSTtnQkFNSCxNQUFNQyxLQUFLLEdBQVc7a0JBQUVEO2dCQUFLLENBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLENBQUE3QyxPQUFRLEVBQUU4QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTlELEtBQU0sQ0FBQ3VDLEVBQUUsQ0FBQyxLQUM3Q3NCLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBaEUsTUFBTyxDQUFDd0MsRUFBRTtnQkFFckMsT0FBTyxJQUFJLENBQUMsQ0FBQXZCLFVBQVcsQ0FBQ2dELE9BQU8sQ0FBQ0gsS0FBSyxDQUFDO2VBQ3RDLENBQUMsT0FBT2IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDOztVQUNENUQsT0FBQSxDQUFBVCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak5ELElBQUFzRixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBb0csUUFBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUFxRyxVQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQXNHLE1BQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUcsT0FBQSxHQUFBdkcsT0FBQTtVQUNNLFNBQVV3RyxjQUFjQSxDQUFBO1lBQzdCLElBQUk7Y0FBRW5HLEtBQUs7Y0FBRW9HO1lBQWEsQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFDdEQ7WUFDQSxNQUFNLENBQUN4RSxLQUFLLEVBQUV5RSxRQUFRLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQ3hHLEtBQUssQ0FBQzZCLEtBQUssQ0FBQztZQUNyRCxJQUFBb0UsTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ3pHLEtBQUssQ0FBQyxFQUFFLE1BQU1zRyxRQUFRLENBQUN0RyxLQUFLLENBQUM2QixLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUM3QixLQUFLLENBQUM2QixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQzdCLE1BQU07Y0FBRTZFO1lBQWlCLENBQUUsR0FBRzdFLEtBQUs7WUFFbkMsTUFBTThFLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCLElBQUlQLGFBQWEsS0FBSyxTQUFTLEVBQUUsT0FBT1AsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ2IsUUFBQSxDQUFBUSxPQUFPLE9BQUc7Y0FDbkQsSUFBSUgsYUFBYSxLQUFLLFdBQVcsRUFBRTtnQkFDbEMsTUFBTXhELFVBQVUsR0FBRzhELGlCQUFpQixDQUFDRyxLQUFLLENBQUN2RyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUN3RyxLQUFLLENBQUNsRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixPQUFPaUQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ1osVUFBQSxDQUFBZSxTQUFTO2tCQUFDQyxXQUFXLEVBQUVwRSxVQUFVO2tCQUFFcUUsU0FBUyxFQUFFckUsVUFBVSxDQUFDcUU7Z0JBQVMsRUFBSTs7Y0FFL0UsSUFBSWIsYUFBYSxLQUFLLFFBQVEsRUFBRSxPQUFPUCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDVixPQUFBLENBQUFnQixlQUFlLE9BQUc7WUFDM0QsQ0FBQztZQUVELE9BQ0NyQixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxjQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDRCxPQUFPLE9BQUcsQ0FDTjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBZCxNQUFBLEdBQUFsRyxPQUFBO1VBRUEsSUFBQXdILFdBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUlNLFNBQVV5SCxlQUFlQSxDQUFDO1lBQUVqRCxFQUFFO1lBQUVrRCxJQUFJO1lBQUVySCxLQUFLO1lBQUVzSDtVQUFNLENBQUU7WUFDMUQsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHM0IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDaUIsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzdCLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXpELElBQUFQLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNhLE1BQU0sQ0FBQyxFQUFFLE1BQU1JLGFBQWEsQ0FBQ0osTUFBTSxDQUFDSyxRQUFRLENBQUMsQ0FBQztZQUV6RCxNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkYsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBQ0QsSUFBQXpCLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNhLE1BQU0sQ0FBQyxFQUFFTSxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBRTFDLE1BQU1DLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVwSDtZQUFNLENBQUUsS0FBSTtjQUNuQytHLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJGLE1BQU0sQ0FBQ1EsYUFBYSxHQUFHLENBQUM7Y0FDeEIsTUFBTVIsTUFBTSxDQUFDUyxJQUFJLENBQUNWLElBQUksRUFBRWxELEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBQ0QsTUFBTTZELE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUV2SDtZQUFNLENBQUUsS0FBSTtjQUNwQyxNQUFNNkcsTUFBTSxDQUFDVyxJQUFJLEVBQUU7Y0FDbkJULFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJFLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1RLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUU7WUFBSSxDQUFFO1lBRW5DLE1BQU1DLElBQUksR0FBR1osTUFBTSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUNoRCxNQUFNYSxPQUFPLEdBQUdiLE1BQU0sS0FBSyxNQUFNLEdBQUdTLE9BQU8sR0FBR0gsTUFBTTtZQUVwRCxPQUNDaEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFnQixHQUM5QnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ0YsT0FBTyxFQUFFQSxPQUFPO2NBQUEsZUFBYyxLQUFLO2NBQUNELElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ3JEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFoQixXQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQTRJLFlBQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUE4SSxTQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQStJLFNBQUEsR0FBQS9JLE9BQUE7VUFDQSxJQUFBa0csTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFnSixPQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBaUosUUFBQSxHQUFBakosT0FBQTtVQUVjLFNBQVVrSixPQUFPQSxDQUFBO1lBQzlCLE1BQU07Y0FBRTdJLEtBQUs7Y0FBRThJLEtBQUs7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQWpELFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFDekQsTUFBTTJDLFFBQVEsR0FBR25ELE1BQUEsQ0FBQVUsT0FBSyxDQUFDMEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQyxNQUFNQyxRQUFRLEdBQUdsSixLQUFLLENBQUM2QyxTQUFTO1lBRWhDLE1BQU1zRyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHRixRQUFRLENBQUM1SSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcrSSxTQUFTO1lBQzdFLE1BQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDRSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUdGLFFBQVEsQ0FBQzVJLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRytJLFNBQVM7WUFDbkYsTUFBTUUsS0FBSyxHQUFHdkosS0FBSyxDQUFDaUMsWUFBWTtZQUNoQztZQUVBLE1BQU11SCxRQUFRLEdBQUcsR0FBR2IsT0FBQSxDQUFBcEMsT0FBTSxFQUFFa0QsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sZUFBZTNKLEtBQUssQ0FBQzZCLEtBQUssQ0FBQ3NDLEVBQUUsMEJBQTBCO1lBRXRHLE1BQU15RixZQUFZLEdBQUdDLEtBQUssSUFBRztjQUM1QixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsYUFBYTtjQUNsQyxNQUFNO2dCQUFFQztjQUFPLENBQUUsR0FBR0gsS0FBSyxDQUFDRSxhQUFhLENBQUNFLE9BQU87Y0FDL0MsTUFBTUMsS0FBSyxHQUFHbEIsUUFBUSxDQUFDbUIsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7Y0FDL0ROLE1BQU0sQ0FDSk8sT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQzdCRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FDMUIzRixPQUFPLENBQUM2RixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Y0FDcERWLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQzlCUCxLQUFLLENBQUN6RixPQUFPLENBQUNpRyxJQUFJLElBQUc7Z0JBQ3BCQSxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsSUFBSUUsSUFBSSxDQUFDVCxPQUFPLENBQUNELE9BQU8sS0FBS0EsT0FBTyxFQUFFVSxJQUFJLENBQUNILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUNuRSxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQzVFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUUsc0JBQXNCVSxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUU7WUFBRSxHQUNwRWxELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUM2QixTQUFBLENBQUFrQyxRQUFRO2NBQUN4QixPQUFPLEVBQUVJO1lBQUssRUFBSSxFQUM1QjFELE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUM7WUFBNkMsR0FDL0R4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDMkIsWUFBQSxDQUFBcUMsV0FBVztjQUFDQyxHQUFHLEVBQUVyQixRQUFRO2NBQUVzQixNQUFNLEVBQUM7WUFBTyxFQUFHLEVBRTdDakYsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBNEQsV0FBVztjQUFDQyxRQUFRLEVBQUU7WUFBQyxHQUN2Qm5GLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQSxnQkFBYyxXQUFXO2NBQUNGLE9BQU8sRUFBRXdCO1lBQVksR0FDcERkLEtBQUssQ0FBQ0ksUUFBUSxDQUFDSSxTQUFTLENBQ2pCLEVBQ1R6RCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUEsZ0JBQWMsU0FBUztjQUFDRixPQUFPLEVBQUV3QjtZQUFZLEdBQ2xEZCxLQUFLLENBQUNJLFFBQVEsQ0FBQ0MsT0FBTyxDQUNmLENBQ0ksQ0FDTCxFQUNWdEQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQyxjQUFjO2NBQUM0QyxHQUFHLEVBQUVqQztZQUFRLEdBQzlDbkQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQyxxQ0FBcUM7Y0FBQSxnQkFBYztZQUFXLEdBQ2hGeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzZCLFNBQUEsQ0FBQWtDLFFBQVE7Y0FBQ3hCLE9BQU8sRUFBRUc7WUFBUyxFQUFJLENBQ3ZCLEVBQ1Z6RCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDLDhCQUE4QjtjQUFBLGdCQUFjO1lBQVMsR0FDdkV4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxjQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDZ0MsUUFBQSxDQUFBeEIsZUFBZTtjQUFDakQsRUFBRSxFQUFDLFNBQVM7Y0FBQ2tELElBQUksRUFBRThCLE9BQU87Y0FBRW5KLEtBQUssRUFBRUEsS0FBSztjQUFFc0gsTUFBTSxFQUFFdEgsS0FBSyxDQUFDa0M7WUFBSyxFQUFJLEVBQ2xGMkQsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFJLEdBQ2xCeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzhCLFNBQUEsQ0FBQXdDLFFBQVE7Y0FBQzVELE1BQU0sRUFBRXRILEtBQUssQ0FBQ2tDLEtBQUs7Y0FBRWlILE9BQU8sRUFBRUEsT0FBTztjQUFFaEYsRUFBRSxFQUFDO1lBQVMsRUFBRyxDQUMzRCxDQUNELENBQ0csQ0FDRCxFQUNWMEIsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQTJDLEtBQUssT0FBRyxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVBLElBQUF0RixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBd0gsV0FBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUFnSixPQUFBLEdBQUFoSixPQUFBO1VBRU0sU0FBVXdMLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUFFbkw7WUFBSyxDQUFFLEdBQUcsSUFBQThGLFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFFekMsSUFBSSxDQUFDckcsS0FBSyxDQUFDbUMsSUFBSSxDQUFDaUosUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUNyQyxPQUNDdkYsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUF1QyxHQUNwRHJJLEtBQUssQ0FBQ21DLElBQUksQ0FBQ2lKLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLElBQUc7Y0FDL0IsTUFBTUMsR0FBRyxHQUFHLEdBQUc1QyxPQUFBLENBQUFwQyxPQUFNLENBQUNrRCxNQUFNLENBQUMrQixPQUFPLFNBQVNGLElBQUksQ0FBQ25ILEVBQUUsRUFBRTtjQUN0RCxPQUNDMEIsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBc0UsSUFBSTtnQkFBQy9HLEdBQUcsRUFBRTZHLEdBQUc7Z0JBQUVHLElBQUksRUFBRUgsR0FBRztnQkFBRWxELFNBQVMsRUFBQztjQUFXLEdBQzlDaUQsSUFBSSxDQUFDSyxJQUFJLENBQ0o7WUFFVCxDQUFDLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBOUYsTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBRU8sTUFBTWlNLFlBQVksR0FBR0EsQ0FBQztZQUFFdkU7VUFBSSxDQUFFLEtBQUk7WUFDeEMsTUFBTTtjQUFFckg7WUFBSyxDQUFFLEdBQUcsSUFBQThGLFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFDekMsTUFBTXdGLElBQUksR0FBRyxZQUFZO1lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRyxJQUFBbEcsTUFBQSxDQUFBVyxRQUFRLEVBQUMsSUFBSSxDQUFDO1lBRTlDLElBQUFYLE1BQUEsQ0FBQW1HLFNBQVMsRUFBQyxNQUFLO2NBQ2QsTUFBTUMsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztnQkFDM0IsTUFBTXBCLEdBQUcsR0FBRyxNQUFNN0ssS0FBSyxDQUFDa0MsS0FBSyxDQUFDZ0ssdUJBQXVCLENBQUM3RSxJQUFJLEVBQUV3RSxJQUFJLENBQUM7Z0JBQ2pFRSxXQUFXLENBQUNsQixHQUFHLENBQUM7Y0FDakIsQ0FBQztjQUNEb0IsUUFBUSxFQUFFO1lBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0NwRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxjQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFPdUYsUUFBUTtZQUFBLEdBQ2R0RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFRaUUsR0FBRyxFQUFFaUIsUUFBUTtjQUFFRCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUM5QixDQUNIO1VBRVIsQ0FBQztVQUFDN0ssT0FBQSxDQUFBNEssWUFBQSxHQUFBQSxZQUFBO1VBQUEsSUFBQVEsUUFBQSxHQUFBcEwsT0FBQSxDQUFBdUYsT0FBQSxHQUVhcUYsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QjNCLElBQUEvRixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTBNLEtBQUEsR0FBQTFNLE9BQUE7VUFDQSxJQUFBMk0sTUFBQSxHQUFBM00sT0FBQTtVQUVjLFNBQVU0TSxXQUFXQSxDQUFDO1lBQUUzSztVQUFLLENBQUU7WUFDNUMsT0FDQ2lFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBTyxHQUNyQnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGFBQUtoRixLQUFLLENBQUM0SyxLQUFLLENBQU0sRUFDdEIzRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxZQUFJaEYsS0FBSyxDQUFDMEgsU0FBUyxDQUFDSCxPQUFPLENBQUssRUFDaEN0RCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDeUYsS0FBQSxDQUFBWixJQUFJO2NBQUNwRCxTQUFTLEVBQUMsa0JBQWtCO2NBQUNxRCxJQUFJLEVBQUUsU0FBUzlKLEtBQUssQ0FBQ3VDLEVBQUU7WUFBRSxHQUMzRDBCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUMwRixNQUFBLENBQUFHLElBQUk7Y0FBQ3RFLElBQUksRUFBQztZQUFNLEVBQUcsRUFDcEJ0QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxpQ0FBcUIsQ0FDZixDQUNGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQWYsTUFBQSxHQUFBbEcsT0FBQTtVQWFPLE1BQU0rTSxrQkFBa0IsR0FBQTFMLE9BQUEsQ0FBQTBMLGtCQUFBLEdBQUc3RyxNQUFBLENBQUFVLE9BQUssQ0FBQ29HLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQ3pFLE1BQU10RyxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNUixNQUFBLENBQUFVLE9BQUssQ0FBQ3FHLFVBQVUsQ0FBQ0Ysa0JBQWtCLENBQUM7VUFBQzFMLE9BQUEsQ0FBQXFGLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RoRixJQUFBUixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXdILFdBQUEsR0FBQXhILE9BQUE7VUFFTSxTQUFVa04sU0FBU0EsQ0FBQztZQUFFQyxLQUFLO1lBQUUxRSxPQUFPO1lBQUV0QjtVQUFLLENBQUU7WUFDbEQsT0FDQ2pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQSxhQUFZeEIsS0FBSztjQUFFaUcsT0FBTyxFQUFDLFNBQVM7Y0FBQzNFLE9BQU8sRUFBRUE7WUFBTyxHQUMxRDBFLEtBQUssQ0FDRTtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFqSCxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTJNLE1BQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUdjLFNBQVVxTixNQUFNQSxDQUFBO1lBQzdCLE1BQU07Y0FDTGpFLE9BQU87Y0FDUGtFLGdCQUFnQjtjQUNoQjdHLGFBQWE7Y0FDYnZFLEtBQUs7Y0FDTGlILEtBQUssRUFBRTtnQkFBRW9FO2NBQU07WUFBRSxDQUNqQixHQUFHLElBQUFwSCxRQUFBLENBQUFPLHFCQUFxQixHQUFFO1lBRTNCLE1BQU1tRyxLQUFLLEdBQUdVLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDL0csYUFBYSxDQUFDO1lBRTFDLE9BQ0NQLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVF5QixTQUFTLEVBQUM7WUFBZSxHQUNoQ3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVN5QixTQUFTLEVBQUM7WUFBOEIsR0FDaER4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDMEYsTUFBQSxDQUFBRyxJQUFJO2NBQUN0RSxJQUFJLEVBQUMsT0FBTztjQUFDRSxTQUFTLEVBQUM7WUFBZ0IsRUFBRyxFQUNoRHhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGFBQ0U0RixLQUFLLEUsTUFBSTNLLEtBQUssQ0FBQzJLLEtBQUssQ0FDakIsQ0FDSSxFQUNWM0csTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFpQixHQUMvQnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUMwRixNQUFBLENBQUFjLFVBQVU7Y0FDVmpGLElBQUksRUFBQyxPQUFPO2NBQ1pFLFNBQVMsRUFBRSxtQkFBbUJVLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFO2NBQ3pEWCxPQUFPLEVBQUU2RTtZQUFnQixFQUN4QixDQUNHLENBQ0U7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQUksZUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUEyTixPQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBNE4sUUFBQSxHQUFBNU4sT0FBQTtVQUNBLElBQUFrRyxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTZOLGVBQUEsR0FBQTdOLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUE4TixPQUFBLEdBQUE5TixPQUFBO1VBRU0sU0FBVW9CLFNBQVNBLENBQUM7WUFBRWY7VUFBSyxDQUFFO1lBQ2xDLE1BQU0sQ0FBQytJLE9BQU8sRUFBRTJFLFVBQVUsQ0FBQyxHQUFHN0gsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEQsTUFBTSxDQUFDeEMsS0FBSyxFQUFFMkosUUFBUSxDQUFDLEdBQUc5SCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDeEcsS0FBSyxDQUFDVSxVQUFVLENBQUM7WUFDMUQsTUFBTSxDQUFDa04sVUFBVSxFQUFFOUUsS0FBSyxDQUFDLEdBQUcsSUFBQTJFLE9BQUEsQ0FBQUksUUFBUSxFQUFDTCxlQUFBLENBQUFNLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU1kLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1TLFVBQVUsQ0FBQyxDQUFDM0UsT0FBTyxDQUFDO1lBQ25ELE1BQU0sQ0FBQzNDLGFBQWEsRUFBRTRILGdCQUFnQixDQUFDLEdBQUduSSxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFTLFNBQVMsQ0FBQztZQUUzRSxJQUFBUCxNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDekcsS0FBSyxDQUFDLEVBQUUsTUFBTTJOLFFBQVEsQ0FBQzNOLEtBQUssQ0FBQ1UsVUFBVSxJQUFJVixLQUFLLENBQUM2RCxTQUFTLENBQUMsQ0FBQztZQUV2RSxNQUFNb0ssVUFBVSxHQUFHQyxJQUFJLElBQUc7Y0FDekJGLGdCQUFnQixDQUFDRSxJQUFJLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU1DLFlBQVksR0FBR3RJLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNkgsT0FBTyxDQUNqQyxPQUFPO2NBQ05wSyxLQUFLLEVBQUU0SixVQUFVLElBQUk1SixLQUFLLElBQUloRSxLQUFLLENBQUM2RCxTQUFTO2NBQzdDdUMsYUFBYTtjQUNiNkgsVUFBVTtjQUNWak8sS0FBSztjQUNMOEksS0FBSztjQUNMakgsS0FBSyxFQUFFN0IsS0FBSyxDQUFDNkIsS0FBSztjQUNsQmtILE9BQU87Y0FDUGtFO2FBQ0EsQ0FBQyxFQUNGLENBQUNXLFVBQVUsRUFBRTVKLEtBQUssRUFBRWhFLEtBQUssQ0FBQzZELFNBQVMsRUFBRXVDLGFBQWEsRUFBRXBHLEtBQUssRUFBRThJLEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQzFFO1lBRUQsSUFBSSxDQUFDNkUsVUFBVSxJQUFJLENBQUM1SixLQUFLLEVBQUUsT0FBTzZCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUMyRyxRQUFBLENBQUFjLE9BQU8sT0FBRztZQUU3QyxPQUNDeEksTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ2QsUUFBQSxDQUFBNEcsa0JBQWtCLENBQUM0QixRQUFRO2NBQUN4SCxLQUFLLEVBQUVxSDtZQUFZLEdBQy9DdEksTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQztZQUFjLEdBQ2hDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3lCLFNBQVMsRUFBQztZQUFlLEdBQ2pDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzBHLE9BQUEsQ0FBQS9HLE9BQU0sT0FBRyxFQUNWVixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDeUcsZUFBQSxDQUFBbEgsY0FBYyxPQUFHLENBQ1QsQ0FDRCxFQUNWTixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxjQUFRLENBQ3FCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBZixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTJNLE1BQUEsR0FBQTNNLE9BQUE7VUFFQSxJQUFBNE4sUUFBQSxHQUFBNU4sT0FBQTtVQUNNLFNBQVUwTyxPQUFPQSxDQUFBO1lBQ3RCLE9BQ0N4SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWMsR0FDNUJ4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDO1lBQWUsR0FDakN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFReUIsU0FBUyxFQUFDO1lBQWUsR0FDaEN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFTeUIsU0FBUyxFQUFDO1lBQThCLEdBQ2hEeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzBGLE1BQUEsQ0FBQUcsSUFBSTtjQUFDcEUsU0FBUyxFQUFDLGdCQUFnQjtjQUFDRixJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQ2hEdEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsYUFDQ2YsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQzJHLFFBQUEsQ0FBQWMsT0FBYztjQUFDRSxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQzVCLENBQ0ksQ0FDRixDQUNBLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTFJLE1BQUEsR0FBQWxHLE9BQUE7VUFFTyxhQUhQOztVQUdtQixTQUFVaUwsV0FBV0EsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUU7Y0FDVGhHLE9BQU8sQ0FBQzJKLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1ozRCxHQUFHLEdBQUc0RCxHQUFHLENBQUNDLGVBQWUsQ0FBQzdELEdBQUcsQ0FBQztZQUM5QixNQUFNSSxHQUFHLEdBQUdwRixNQUFBLENBQUFVLE9BQUssQ0FBQzBDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJwRCxNQUFBLENBQUFVLE9BQUssQ0FBQ3lGLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1sQyxNQUFNLEdBQUdtQixHQUFHLENBQUNkLE9BQU87Y0FDMUJMLE1BQU0sQ0FBQzZFLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQUs7Z0JBQzlDLElBQUk3RSxNQUFNLENBQUM4RSxRQUFRLEtBQUtDLFFBQVEsRUFBRTtrQkFDakMvRSxNQUFNLENBQUNnRixXQUFXLEdBQUcsS0FBSztrQkFDMUJoRixNQUFNLENBQUNpRixZQUFZLEdBQUcsTUFBSztvQkFDMUJqRixNQUFNLENBQUNpRixZQUFZLEdBQUcsSUFBSTtvQkFDMUJqRixNQUFNLENBQUNnRixXQUFXLEdBQUcsQ0FBQztrQkFDdkIsQ0FBQzs7Y0FFSCxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQ2pFLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0NoRixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWMsR0FDNUJ4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFPdUYsUUFBUTtjQUFDNkMsT0FBTyxFQUFDO1lBQVUsR0FDakNuSixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFRaUUsR0FBRyxFQUFFQSxHQUFHO2NBQUVnQixJQUFJLEVBQUMsV0FBVztjQUFDWixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV4QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFwRixNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBOEksU0FBQSxHQUFBOUksT0FBQTtVQUNNLFNBQVVzUCxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFalA7WUFBSyxDQUFFLEdBQUcsSUFBQThGLFFBQUEsQ0FBQW9KLGtCQUFrQixHQUFFO1lBRXRDLE9BQU9ySixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDNkIsU0FBQSxDQUFBa0MsUUFBUTtjQUFDeEIsT0FBTyxFQUFFbkosS0FBSyxDQUFDNEMsVUFBVSxDQUFDdU07WUFBb0IsRUFBSTtVQUNwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBdEosTUFBQSxHQUFBbEcsT0FBQTtVQUVBLElBQUF3SCxXQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBeVAsUUFBQSxHQUFBelAsT0FBQTtVQUNBLElBQUEwUCxRQUFBLEdBQUExUCxPQUFBO1VBQ0EsSUFBQTJQLGFBQUEsR0FBQTNQLE9BQUE7VUFFTSxTQUFVNFAsUUFBUUEsQ0FBQTtZQUN2QixNQUFNO2NBQUV2UCxLQUFLO2NBQUU4SSxLQUFLO2NBQUUwRztZQUFPLENBQUUsR0FBRyxJQUFBMUosUUFBQSxDQUFBb0osa0JBQWtCLEdBQUU7WUFDdEQsTUFBTSxDQUFDL0YsT0FBTyxFQUFFc0csVUFBVSxDQUFDLEdBQUc1SixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFTLFNBQVMsQ0FBQztZQUMvRCxNQUFNa0osTUFBTSxHQUFHN0YsS0FBSyxJQUFHO2NBQ3RCQSxLQUFLLENBQUM4RixjQUFjLEVBQUU7Y0FDdEJILE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1JLEtBQUssR0FBRztjQUNiQyxPQUFPLEVBQUVULFFBQUEsQ0FBQVUsZUFBZTtjQUN4QkMsT0FBTyxFQUFFVixRQUFBLENBQUFXLGVBQWU7Y0FDeEJDLFlBQVksRUFBRVgsYUFBQSxDQUFBTDthQUNkO1lBQ0QsTUFBTWlCLElBQUksR0FBR04sS0FBSyxDQUFDekcsT0FBTyxDQUFDO1lBQzNCLE1BQU1nSCxVQUFVLEdBQUd0RyxLQUFLLElBQUc7Y0FDMUI0RixVQUFVLENBQUM1RixLQUFLLENBQUNFLGFBQWEsQ0FBQ0UsT0FBTyxDQUFDaUUsSUFBSSxDQUFDO1lBQzdDLENBQUM7WUFDRCxPQUNDckksTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGlCQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxhQUFLa0MsS0FBSyxDQUFDc0gsYUFBYSxDQUFNLEVBQzlCdkssTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUE4QixHQUM1Q3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGtCQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUE0RCxXQUFXO2NBQUNDLFFBQVEsRUFBRTtZQUFDLEdBQ3ZCbkYsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFBLGFBQVcsU0FBUztjQUFDRixPQUFPLEVBQUUrSDtZQUFVLEdBQzdDckgsS0FBSyxDQUFDdUgsUUFBUSxDQUNQLEVBQ1R4SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUEsYUFBVyxjQUFjO2NBQUNGLE9BQU8sRUFBRStIO1lBQVUsR0FDbERySCxLQUFLLENBQUNtSCxZQUFZLENBQ1gsRUFDVHBLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQSxhQUFXLFNBQVM7Y0FBQ0YsT0FBTyxFQUFFK0g7WUFBVSxHQUM3Q3JILEtBQUssQ0FBQ3dILFFBQVEsQ0FDUCxDQUNJLENBQ0wsRUFDVnpLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ0YsT0FBTyxFQUFFc0gsTUFBTTtjQUFFM0MsT0FBTyxFQUFDO1lBQVMsR0FDeENqRSxLQUFLLENBQUN5SCxJQUFJLENBQ0gsQ0FDSixDQUNFLEVBQ1QxSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDc0osSUFBSSxPQUFHLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQXJLLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUE4SSxTQUFBLEdBQUE5SSxPQUFBO1VBQ00sU0FBVXFRLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFaFE7WUFBSyxDQUFFLEdBQUcsSUFBQThGLFFBQUEsQ0FBQW9KLGtCQUFrQixHQUFFO1lBRXRDLE9BQU9ySixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDNkIsU0FBQSxDQUFBa0MsUUFBUTtjQUFDeEIsT0FBTyxFQUFFbkosS0FBSyxDQUFDNEMsVUFBVSxDQUFDeU47WUFBUSxFQUFJO1VBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF4SyxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBc0IsS0FBQSxHQUFBdEIsT0FBQTtVQUNNLFNBQVVtUSxlQUFlQSxDQUFBO1lBQzlCLE1BQU07Y0FBRTlQLEtBQUs7Y0FBRThJLEtBQUs7Y0FBRTBHO1lBQU8sQ0FBRSxHQUFHLElBQUExSixRQUFBLENBQUFvSixrQkFBa0IsR0FBRTtZQUV0RCxPQUNDckosTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQWYsTUFBQSxDQUFBVSxPQUFBLENBQUFpSyxRQUFBLFFBQ0V4USxLQUFLLENBQUM0QyxVQUFVLENBQUMwTixRQUFRLENBQUNqRixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFbUYsS0FBSyxLQUFJO2NBQzlDLE9BQ0M1SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtnQkFBU2xDLEdBQUcsRUFBRTRHLElBQUksQ0FBQ29GLE9BQU8sQ0FBQ3BMLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUFFK0MsU0FBUyxFQUFDO2NBQTJCLEdBQ2pGeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Z0JBQVN5QixTQUFTLEVBQUM7Y0FBdUIsR0FBRXBILEtBQUEsQ0FBQTBQLEtBQUssQ0FBQ3JGLElBQUksQ0FBQ3NGLEtBQUssQ0FBQyxDQUFXLEVBQ3hFL0ssTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsa0JBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGlCQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxhQUFLMEUsSUFBSSxDQUFDb0YsT0FBTyxDQUFNLENBQ2YsRUFDVDdLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLFlBQUkwRSxJQUFJLENBQUN1RixVQUFVLENBQUssQ0FDZixDQUNEO1lBRVosQ0FBQyxDQUFDLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQWhMLE1BQUEsR0FBQWxHLE9BQUE7VUFZTyxNQUFNbVIsZUFBZSxHQUFBOVAsT0FBQSxDQUFBOFAsZUFBQSxHQUFHakwsTUFBQSxDQUFBVSxPQUFLLENBQUNvRyxhQUFhLENBQUMsSUFBd0IsQ0FBQztVQUNyRSxNQUFNdUMsa0JBQWtCLEdBQUdBLENBQUEsS0FBTXJKLE1BQUEsQ0FBQVUsT0FBSyxDQUFDcUcsVUFBVSxDQUFDa0UsZUFBZSxDQUFDO1VBQUM5UCxPQUFBLENBQUFrTyxrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiMUUsSUFBQXJKLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBb1IsTUFBQSxHQUFBcFIsT0FBQTtVQUVBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQXFSLFNBQUEsR0FBQXJSLE9BQUE7VUFDQSxJQUFBc1IsVUFBQSxHQUFBdFIsT0FBQTtVQUNBLElBQUF1UixTQUFBLEdBQUF2UixPQUFBO1VBRU0sU0FBVXVILGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUNMbEgsS0FBSztjQUNMOEksS0FBSyxFQUFFO2dCQUFFOUIsV0FBVyxFQUFFOEI7Y0FBSztZQUFFLENBQzdCLEdBQUcsSUFBQWhELFFBQUEsQ0FBQU8scUJBQXFCLEdBQUU7WUFDM0IsTUFBTSxDQUFDOEssU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3ZMLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQzBILElBQUksRUFBRXNCLE9BQU8sQ0FBQyxHQUFHM0osTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBUyxDQUFDLENBQUN4RyxLQUFLLENBQUM0QyxVQUFVLENBQUMwTixRQUFRLENBQUNlLE1BQU0sR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzdHLE1BQU1DLFlBQVksR0FBR3hJLEtBQUssQ0FBQ3lJLFFBQVEsRUFBRWpNLE9BQU8sQ0FBQyxJQUFJLEVBQUV0RixLQUFLLENBQUNzQyxRQUFRLENBQUM7WUFDbEUsTUFBTXdFLEtBQUssR0FBRztjQUNiOUcsS0FBSztjQUNMMEMsUUFBUSxFQUFFMUMsS0FBSyxDQUFDMEMsUUFBUTtjQUN4QnlPLFNBQVM7Y0FDVEMsWUFBWTtjQUNadEksS0FBSztjQUNMdEQsS0FBSyxFQUFFeEYsS0FBSyxDQUFDMEMsUUFBUSxDQUFDOEMsS0FBSztjQUMzQmdLLE9BQU87Y0FDUGdDLFFBQVEsRUFBRTNILEtBQUssSUFBRztnQkFDakJBLEtBQUssQ0FBQzhGLGNBQWMsRUFBRTtnQkFDdEI7Y0FDRDthQUNBO1lBRUQsTUFBTWhKLE9BQU8sR0FBR3VILElBQUksS0FBSyxVQUFVLEdBQUc4QyxTQUFBLENBQUF6QixRQUFRLEdBQUcwQixVQUFBLENBQUFRLGVBQWU7WUFFaEUsT0FDQzVMLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGNBQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNtSyxNQUFBLENBQUFXLEtBQUs7Y0FBQzdGLElBQUksRUFBQztZQUFNLEdBQUV5RixZQUFZLENBQVMsRUFDekN6TCxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDc0ssU0FBQSxDQUFBSixlQUFlLENBQUN4QyxRQUFRO2NBQUN4SCxLQUFLLEVBQUVBO1lBQUssR0FDckNqQixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWlELEdBQy9EeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ0QsT0FBTyxPQUFHLENBQ04sQ0FDb0IsQ0FDdEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQWQsTUFBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUF3SCxXQUFBLEdBQUF4SCxPQUFBO1VBRUEsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBdVIsU0FBQSxHQUFBdlIsT0FBQTtVQUNBLElBQUFnUyxNQUFBLEdBQUFoUyxPQUFBO1VBQ0EsSUFBQWlTLFlBQUEsR0FBQWpTLE9BQUE7VUFDQSxJQUFBa1MsTUFBQSxHQUFBbFMsT0FBQTtVQUNBLElBQUFtUyxNQUFBLEdBQUFuUyxPQUFBO1VBRU87VUFBVyxNQUFNOFIsZUFBZSxHQUFHQSxDQUFDO1lBQUV2SixRQUFRLEdBQUc7VUFBSyxDQUFFLEtBQUk7WUFDbEUsTUFBTTtjQUFFWSxLQUFLO2NBQUVwRyxRQUFRO2NBQUV5TyxTQUFTO2NBQUVDLFlBQVk7Y0FBRTVMLEtBQUs7Y0FBRWdLO1lBQU8sQ0FBRSxHQUFHLElBQUExSixRQUFBLENBQUFvSixrQkFBa0IsR0FBRTtZQUN6RixNQUFNO2NBQ0xwRyxLQUFLLEVBQUU7Z0JBQUVpSjtjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBYixTQUFBLENBQUE3SyxxQkFBcUIsR0FBRTtZQUUzQixNQUFNLENBQUNrQixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHM0IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBeUMsRUFBRSxDQUFDO1lBQ3RGLE1BQU0sQ0FBQ3dMLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdwTSxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUV4RztZQUFLLENBQUUsR0FBRyxJQUFBa1IsU0FBQSxDQUFBN0sscUJBQXFCLEdBQUU7WUFDekMsTUFBTSxDQUFDNkwsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBdE0sTUFBQSxDQUFBVyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1xQixNQUFNLEdBQUcsTUFBTWdDLEtBQUssSUFBRztjQUM1QixJQUFJO2dCQUNIQSxLQUFLLENBQUM4RixjQUFjLEVBQUU7Z0JBQ3RCLE1BQU15QyxjQUFjLEdBQUcsQ0FBQ2pCLFNBQVM7Z0JBQ2pDLE1BQU1rQixVQUFVLEdBQUcsTUFBTTNQLFFBQVEsQ0FBQzRQLGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUV0RCxNQUFNelAsUUFBUSxDQUFDOFAsTUFBTSxFQUFFO2dCQUN2QnBCLFlBQVksQ0FBQ2dCLGNBQWMsQ0FBQztnQkFDNUI1SyxTQUFTLENBQUMsT0FBTyxDQUFDO2VBQ2xCLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsa0JBQWtCLEVBQUVGLENBQUMsQ0FBQzs7WUFFdEMsQ0FBQztZQUNELE1BQU02TixNQUFNLEdBQUcsTUFBTTVJLEtBQUssSUFBRztjQUM1QixNQUFNckUsS0FBSyxHQUFHLE1BQU05QyxRQUFRLENBQUN1RixJQUFJLEVBQUU7Y0FDbkNtSixZQUFZLENBQUMsS0FBSyxDQUFDO2NBQ25CNUosU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTXlELEdBQUcsR0FBR3BGLE1BQUEsQ0FBQVUsT0FBSyxDQUFDMEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QjtZQUVBLE1BQU15SixRQUFRLEdBQUcsQ0FBQ3ZCLFNBQVMsSUFBSTNMLEtBQUs7WUFDcEMsTUFBTW1OLE9BQU8sR0FBRyxDQUFDeEIsU0FBUyxHQUFJdUIsUUFBUSxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUksTUFBTTtZQUNwRSxNQUFNRSxNQUFNLEdBQUcvSSxLQUFLLElBQUc7Y0FDdEJBLEtBQUssQ0FBQzhGLGNBQWMsRUFBRTtjQUN0QnNDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEJqUyxLQUFLLENBQUN1RixjQUFjLENBQUNDLEtBQUssQ0FBQyxDQUFDekIsSUFBSSxDQUFDOE8sUUFBUSxJQUFHO2dCQUMzQ3JELE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBRW5CeUMsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNsQixDQUFDLENBQUM7Y0FFRmEsVUFBVSxDQUFDLE1BQUs7Z0JBQ2YsTUFBTXpMLElBQUksR0FBRzRELEdBQUcsQ0FBQ2QsT0FBTyxDQUFDNEksYUFBYSxDQUFDLGtCQUFrQixDQUFDO2dCQUUxRCxNQUFNQyxRQUFRLEdBQUdsSyxLQUFLLENBQUNtSyxlQUFlO2dCQUN0QyxJQUFJQyxDQUFDLEdBQUcsQ0FBQztnQkFDVCxJQUFJQyxZQUFZO2dCQUNoQixNQUFNQyxRQUFRLEdBQUdDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLE1BQUs7a0JBQzVDak0sSUFBSSxDQUFDa0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO2tCQUNwQ25ELElBQUksQ0FBQ2tELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFlBQVksQ0FBQztrQkFDaENxSSxVQUFVLENBQUMsTUFBSztvQkFDZnpMLElBQUksQ0FBQ2tELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDbkNuRCxJQUFJLENBQUNrRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxhQUFhLENBQUM7a0JBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUM7a0JBRVJwRCxJQUFJLENBQUNrTSxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDO2tCQUM1QixJQUFJTSxJQUFJLEdBQUcsR0FBRztrQkFDZEwsWUFBWSxHQUFHRyxXQUFXLENBQUMsTUFBSztvQkFDL0IsSUFBSUUsSUFBSSxLQUFLLEdBQUcsRUFBRTtzQkFDakJBLElBQUksR0FBRyxJQUFJO3FCQUNYLE1BQU0sSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRTtzQkFDekJBLElBQUksR0FBRyxLQUFLO3FCQUNaLE1BQU07c0JBQ05BLElBQUksR0FBRyxHQUFHOztvQkFFWG5NLElBQUksQ0FBQ2tNLFNBQVMsR0FBR1AsUUFBUSxDQUFDRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUdNLElBQUk7a0JBQzdDLENBQUMsRUFBRSxJQUFJLENBQUM7a0JBQ1IsSUFBSU4sQ0FBQyxLQUFLRixRQUFRLENBQUMzQixNQUFNLEdBQUcsQ0FBQyxFQUFFNkIsQ0FBQyxHQUFHLENBQUM7a0JBQ3BDQSxDQUFDLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFFUkcsVUFBVSxDQUFDUCxVQUFVLENBQUMsTUFBSztrQkFDMUIsSUFBSWQsT0FBTyxFQUFFQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMvQixDQUFDLEVBQUUsS0FBSyxDQUFDO2NBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSLENBQUM7WUFDRCxNQUFNOUosSUFBSSxHQUFHZ0osU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLO1lBQ3ZDLE1BQU1zQyxRQUFRLEdBQUdsTSxNQUFNLEtBQUssT0FBTyxHQUFHa0wsTUFBTSxHQUFHNUssTUFBTTtZQUVyRCxNQUFNNkwsR0FBRyxHQUFHLDhCQUE4QjFCLE9BQU8sR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQ3hFLE1BQU0yQixPQUFPLEdBQUc5SixLQUFLLElBQUc7Y0FDdkJzSSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUNDdE0sTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBU3FFLEdBQUcsRUFBRUEsR0FBRztjQUFFNUMsU0FBUyxFQUFFcUw7WUFBRyxHQUNoQzdOLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBMkIsR0FDekN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDK0ssTUFBQSxDQUFBaUMsS0FBSztjQUFDck0sTUFBTSxFQUFFQTtZQUFNLEVBQUksRUFDeEIySyxTQUFTLElBQ1RyTSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDaUwsTUFBQSxDQUFBZ0MsS0FBSztjQUFDQyxJQUFJLEVBQUUsSUFBSTtjQUFFQyxJQUFJLEVBQUUsSUFBSTtjQUFFSixPQUFPLEVBQUVBO1lBQU8sR0FDOUM5TixNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxhQUFLbUwsV0FBVyxDQUFDdkYsS0FBSyxDQUFNLEVBQzVCM0csTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ2tMLE1BQUEsQ0FBQWtDLEtBQUs7Y0FBQ25KLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3hDaEYsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsWUFBSW1MLFdBQVcsQ0FBQ2tDLFdBQVcsQ0FBSyxFQUNoQ3BPLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQVF5QixTQUFTLEVBQUM7WUFBTyxHQUN4QnhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLENBQUNPLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ3lFLE9BQU8sRUFBQyxTQUFTO2NBQUMzRSxPQUFPLEVBQUV1TDtZQUFPLEdBQ3hDNUIsV0FBVyxDQUFDbUMsTUFBTSxDQUNYLENBQ0QsQ0FFVixFQUNEck8sTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ08sV0FBQSxDQUFBbUIsTUFBTTtjQUFDSCxJQUFJLEVBQUVBLElBQUk7Y0FBRUMsT0FBTyxFQUFFcUwsUUFBUTtjQUFFdkwsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZEWSxLQUFLLENBQUM2SixPQUFPLENBQUMsQ0FDUCxFQUNSRCxRQUFRLElBQ1I3TSxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQTtjQUFLeUIsU0FBUyxFQUFDO1lBQTZCLEdBQzNDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUEsQ0FBQ2dMLFlBQUEsQ0FBQWhILFdBQVc7Y0FBQ0MsR0FBRyxFQUFFN0ssS0FBSyxDQUFDMEMsUUFBUSxDQUFDOEM7WUFBSyxFQUFJLEVBQzFDSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxDQUFDTyxXQUFBLENBQUFtQixNQUFNO2NBQUNILElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXdLLE1BQU07Y0FBRTdGLE9BQU8sRUFBQztZQUFTLEdBQ3BEakUsS0FBSyxDQUFDcUwsSUFBSSxDQUNILENBRVYsQ0FDSSxFQUVMbkMsT0FBTyxJQUNQbk0sTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBS3lCLFNBQVMsRUFBQztZQUFlLEdBQzdCeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFLLGFBQUE7Y0FBSXlCLFNBQVMsRUFBQztZQUFpQixHQUFFUyxLQUFLLENBQUNtSyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQU0sQ0FFaEUsQ0FDUTtVQUVaLENBQUM7VUFBQ2pTLE9BQUEsQ0FBQXlRLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSUYsSUFBQTVMLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBeVUsU0FBQSxHQUFBelUsT0FBQTtVQUZBOztVQVFNLFNBQVVpVSxLQUFLQSxDQUFDO1lBQUVyTTtVQUFNLENBQWM7WUFDM0MsTUFBTThNLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDL00sTUFBTSxDQUFDO1lBQ3ZELE1BQU1nTixPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNELFFBQVEsQ0FBQy9NLE1BQU0sQ0FBQztZQUVyRCxNQUFNLENBQUNpTixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBUCxTQUFBLENBQUFRLFFBQVEsRUFBQ1AsU0FBUyxFQUFFRSxPQUFPLEVBQUVoTixNQUFNLEtBQUssT0FBTyxDQUFDO1lBQ2hHLE1BQU1zTixXQUFXLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR1AsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQ2xQLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQUt5QixTQUFTLEVBQUM7WUFBa0IsR0FDaEN4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUssYUFBQSxlQUFPLEdBQUdvTyxlQUFlLEVBQUUsQ0FBUSxFQUNuQ25QLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBO2NBQU15QixTQUFTLEVBQUM7WUFBa0IsT0FBUyxFQUMzQ3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSyxhQUFBLGVBQU8sR0FBR2lPLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFoUCxNQUFBLEdBQUFsRyxPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFNkcsUUFBUTtZQUFFd0Y7VUFBUyxDQUFFLEdBQUduRyxNQUFBLENBQUFVLE9BQUs7VUFFL0IsU0FBVXFPLFFBQVFBLENBQUNQLFNBQWtCLEVBQUVFLE9BQWdCLEVBQUVVLEtBQUssR0FBRyxJQUFJO1lBQzFFLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzNPLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkN3RixTQUFTLENBQUMsTUFBSztjQUNkLElBQUlvSixVQUEwQjtjQUM5QixJQUFJSCxLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Y0FDckIsSUFBSWQsU0FBUyxFQUFFO2dCQUNkZSxVQUFVLEdBQUc5QixXQUFXLENBQUMsTUFBSztrQkFDN0I2QixPQUFPLENBQUNFLFFBQVEsSUFBRztvQkFDbEIsT0FBT0EsUUFBUSxHQUFHLENBQUM7a0JBQ3BCLENBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNGLFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNmLFNBQVMsQ0FBQyxDQUFDO1lBRWZySSxTQUFTLENBQUMsTUFBSztjQUNkLElBQUl1SSxPQUFPLEVBQUU7Z0JBQ1pZLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNaLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVIsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1ULE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVOLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVixLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQyJ9