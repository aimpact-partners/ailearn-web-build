System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/wrapper", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.9/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/assignments/assessment.widget", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/preload", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0024ModelWrapper) {
      dependency_5 = _aimpactAilearnApp0024ModelWrapper;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
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
    }, function (_aimpactAilearnApp0024AssignmentsAssessmentWidget) {
      dependency_13 = _aimpactAilearnApp0024AssignmentsAssessmentWidget;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assignments/assessment.widget', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['pragmate-ui/link', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['react/jsx-runtime', dependency_28]]);
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
        hash: 2786205,
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
        hash: 953900038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
          var _assessment = require("@aimpact/ailearn-app/assignments/assessment.widget");
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
                return _react.default.createElement(_assessment.Selection, {
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
        hash: 1219792031,
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
        hash: 1628485481,
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
        hash: 2915434314,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxpc3RlbkFwcENoYW5nZXMiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsInNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjbGlzdGVuQXBwQ2hhbmdlcyIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJhdWRpbyIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfYXNzZXNzbWVudCIsIl9ob29rcyIsIl9zcG9rZW4iLCJDb250ZW50TWFuYWdlciIsImFjdGl2ZUNvbnRyb2wiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJzZXRNb2RlbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiQ29udHJvbCIsImNyZWF0ZUVsZW1lbnQiLCJpdGVtcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJfY29tcG9uZW50cyIsIkNvbnRlbnRDb250cm9scyIsInRleHQiLCJwbGF5ZXIiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJzdG9wIiwiZGlzYWJsZWQiLCJpY29uIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsIl9hdWRpb1BsYXllciIsIl9saW5rcyIsIl9tYXJrZG93biIsIl9wbGF5YWJsZSIsIl9jb25maWciLCJfYWN0aW9ucyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInJlZiIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJfZGVmYXVsdCIsIl9saW5rIiwiX2ljb25zIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJJY29uQnV0dG9uIiwiX2NvbnRlbnRNYW5hZ2VyIiwiX2hlYWRlciIsIl9wcmVsb2FkIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJ1cGRhdGVWaWV3IiwidmlldyIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJ3aWR0aCIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwidXNlUmVjb3JkZXJDb250ZXh0IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJfdGVhY2hlciIsIl9zdHVkZW50IiwiX2NvbXBldGVuY2llcyIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsIkZyYWdtZW50IiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwicGVybWlzc2lvbnMiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRlbnQtbWFuYWdlci50c3giLCIvdHMvdmlld3MvY29udGVudC9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2xpbmtzLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCIvdHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFNTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUdOQyxXQUFXQSxDQUFBO2NBQ1Y7Y0FDQSxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FFNUQsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFVLFlBQVksQ0FBQ0wsUUFBUSxDQUFDO2NBQ3hDLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxNQUFN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