System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.21/model/wrapper", "@aimpact/chat@1.0.1/chat-control.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.21/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/toast", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.21/config", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_aimpactChat101Wrapper) {
      dependency_4 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0021ModelWrapper) {
      dependency_6 = _aimpactAilearnApp0021ModelWrapper;
    }, function (_aimpactChat101ChatControlWidget) {
      dependency_7 = _aimpactChat101ChatControlWidget;
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
    }, function (_aimpactAilearnApp0021AssessmentsSelectionCode) {
      dependency_13 = _aimpactAilearnApp0021AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
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
    }, function (_aimpactAilearnApp0021Config) {
      dependency_21 = _aimpactAilearnApp0021Config;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/assignment-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['pragmate-ui/link', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/preload', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['react/jsx-runtime', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.21/assignment-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.21/assignment-intro.widget');
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
        hash: 3594898387,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXRDb250cm9sIiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJpbnN0YW5jZSIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsIm1hdGVyaWFscyIsIk1hcCIsIl9faW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwiYWN0aXZpdHkiLCJsb2FkQWN0aXZpdHkiLCJhc3NpZ25tZW50SWQiLCJzZXNzaW9uSWQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInRoZW4iLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsIkFjdGl2aXR5IiwiaWQiLCJhc3NpZ25tZW50IiwiaXNSZWFkeSIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5Iiwic2V0IiwicHJvY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJ1cGRhdGVWb2ljZSIsIiN1cGRhdGVWb2ljZSIsImxhbmd1YWdlIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiI3Byb2Nlc3MiLCJBaUxlYXJuV3JhcHBlciIsInNlc3Npb25Nb2RlbCIsInNlc3Npb25Bc3Nlc3NtZW50IiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb250ZW50IiwiX3NlbGVjdGlvbiIsIl9ob29rcyIsIl9zcG9rZW4iLCJDb250ZW50TWFuYWdlciIsImFjdGl2ZUNvbnRyb2wiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJzZXRNb2RlbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiQ29udHJvbCIsImNyZWF0ZUVsZW1lbnQiLCJpdGVtcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJfY29tcG9uZW50cyIsIkNvbnRlbnRDb250cm9scyIsInRleHQiLCJwbGF5ZXIiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJzdG9wIiwiZGlzYWJsZWQiLCJpY29uIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsIl9hdWRpb1BsYXllciIsIl9saW5rcyIsIl9tYXJrZG93biIsIl9wbGF5YWJsZSIsIl9jb25maWciLCJfYWN0aW9ucyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInVuZGVmaW5lZCIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInJlZiIsIlBsYXlhYmxlIiwiTGlua3MiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidHlwZSIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJfZGVmYXVsdCIsIl9saW5rIiwiX2ljb25zIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJJY29uQnV0dG9uIiwiX0NvbnRlbnRNYW5hZ2VyIiwiX2hlYWRlciIsIl9wcmVsb2FkIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJ1cGRhdGVWaWV3IiwidmlldyIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJ3aWR0aCIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwidXNlUmVjb3JkZXJDb250ZXh0IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJfdGVhY2hlciIsIl9zdHVkZW50IiwiX2NvbXBldGVuY2llcyIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsIkZyYWdtZW50IiwiaW5kZXgiLCJzdWJqZWN0IiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwicGVybWlzc2lvbnMiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJlY29yZGluZ1N0YXRlIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvblN0b3AiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJnbG9iYWxUaGlzIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJvbkNsb3NlIiwiVGltZXIiLCJNb2RhbCIsIm9wZW4iLCJzaG93IiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInNlbmQiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQVUsWUFBWSxDQUFDTCxRQUFRLENBQUM7Y0FDeEMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUNyQyxPQUFPLElBQUks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