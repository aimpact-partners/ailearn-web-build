System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.24/model/wrapper", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.11/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/assignments/assessment.widget", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/preload", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0024ModelWrapper) {
      dependency_5 = _aimpactAilearnApp0024ModelWrapper;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
    }, function (_beyondJsReactive1111Model) {
      dependency_8 = _beyondJsReactive1111Model;
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_14 = _beyondJsReact18Widgets104Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 884895855,
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
              if (!this.#materials.size) {
                console.warn('No materials found');
                return;
              }
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
        hash: 768517232,
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
            if (!store.model || !store.materials.size) return null;
            const {
              chatIntroductions
            } = model;
            console.log(0.1, chatIntroductions);
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
        hash: 336171064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _config = require("@aimpact/ailearn-app/config");
          var _links = require("./links");
          var _actions = require("./actions");
          var _context = require("../context");
          function Content() {
            const {
              store,
              texts,
              visible
            } = (0, _context.useLessonIntroContext)();
            const panesRef = _react.default.useRef(null);
            const elements = store.materials;
            const content = elements.has('article') ? elements.get('article') : undefined;
            const synthesis = elements.has('synthesis') ? elements.get('synthesis') : undefined;
            const intro = store.introduction;
            const audioUrl = `${_config.default?.params.apis.ailearn}/activities/${store.model.id}/materials/article/audio`;
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
            }, _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: audioUrl
            }), "Your browser does not support the audio element.")), _react.default.createElement(_components.ButtonGroup, {
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
        hash: 3103028581,
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
            console.log(0.2, model);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
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
            }))), model.description && _react.default.createElement("p", null, model.description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxpc3RlbkFwcENoYW5nZXMiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsInNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjbGlzdGVuQXBwQ2hhbmdlcyIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJzaXplIiwid2FybiIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9hc3Nlc3NtZW50IiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJsb2ciLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9saW5rcyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIk1hcmtkb3duIiwiY29udHJvbHMiLCJwcmVsb2FkIiwic3JjIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInJlZiIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiZGVzY3JpcHRpb24iLCJfY29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsInVwZGF0ZVZpZXciLCJ2aWV3IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwicGVybWlzc2lvbnMiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJidXR0b24iLCJzZW5kIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZW50LW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JD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