System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/base", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.30/model/wrapper", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.11/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.30/assignments/assessment.widget", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.30/config", "pragmate-ui@0.0.6/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/preload", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    RecordingButton: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_3 = _beyondJsReact18Widgets111Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0030ModelWrapper) {
      dependency_5 = _aimpactAilearnApp0030ModelWrapper;
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
    }, function (_aimpactAilearnApp0030AssignmentsAssessmentWidget) {
      dependency_13 = _aimpactAilearnApp0030AssignmentsAssessmentWidget;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_14 = _beyondJsReact18Widgets111Hooks;
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
    }, function (_aimpactAilearnApp0030Config) {
      dependency_21 = _aimpactAilearnApp0030Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.30"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.30/assignment-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assignments/assessment.widget', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['pragmate-ui/link', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['react/jsx-runtime', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.30/assignment-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.30/assignment-intro.widget');
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
        hash: 471717907,
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
        hash: 4073642422,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, model.title)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsImxpc3RlbkFwcENoYW5nZXMiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsInNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjbGlzdGVuQXBwQ2hhbmdlcyIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJzaXplIiwid2FybiIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsImF1ZGlvIiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfY29udGVudCIsIl9hc3Nlc3NtZW50IiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY2hhdEludHJvZHVjdGlvbnMiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIl9jb21wb25lbnRzIiwiQ29udGVudENvbnRyb2xzIiwidGV4dCIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJkaXNhYmxlZCIsImljb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiX21hcmtkb3duIiwiX3BsYXlhYmxlIiwiX2NvbmZpZyIsIl9saW5rcyIsIl9hY3Rpb25zIiwiQ29udGVudCIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwidW5kZWZpbmVkIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsIk1hcmtkb3duIiwiY29udHJvbHMiLCJwcmVsb2FkIiwic3JjIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInJlZiIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiX2RlZmF1bHQiLCJfbGluayIsIl9pY29ucyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJIZWFkZXIiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiZGVzY3JpcHRpb24iLCJfY29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsInVwZGF0ZVZpZXciLCJ2aWV3IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByZWxvYWQiLCJQcm92aWRlciIsIndpZHRoIiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwicGVybWlzc2lvbnMiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJidXR0b24iLCJzZW5kIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZW50LW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWO2NBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBRTVELElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBVSxZQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JDLE9BQU8s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