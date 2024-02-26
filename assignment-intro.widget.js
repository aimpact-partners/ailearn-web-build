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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 1066449144,
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
            const content = elements.has('article') ? elements.get('article') : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxpc3RlbkFwcENoYW5nZXMiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsInNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjbGlzdGVuQXBwQ2hhbmdlcyIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJzaXplIiwid2FybiIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9hc3Nlc3NtZW50IiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJsb2ciLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX2xpbmtzIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIk1hcmtkb3duIiwiY29udHJvbHMiLCJwcmVsb2FkIiwic3JjIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInJlZiIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiZGVzY3JpcHRpb24iLCJfY29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsInVwZGF0ZVZpZXciLCJ2aWV3IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwicGVybWlzc2lvbnMiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJidXR0b24iLCJzZW5kIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZW50LW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JD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