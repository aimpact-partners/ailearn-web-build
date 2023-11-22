System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.14/model/wrapper", "@aimpact/chat@1.0.1/chat.widget", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/toast", "pragmate-ui@0.0.3/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/link", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "react@18.2.0/jsx-runtime"], function (_export, _context3) {
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
    }, function (_pragmateUi003Icons) {
      dependency_15 = _pragmateUi003Icons;
    }, function (_pragmateUi003Toast) {
      dependency_16 = _pragmateUi003Toast;
    }, function (_pragmateUi003Components) {
      dependency_17 = _pragmateUi003Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_20 = _aimpactAilearnApp0014Config;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignment-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/model/wrapper', dependency_6], ['@aimpact/chat/chat.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@bgroup/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/selection.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/components', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['pragmate-ui/preload', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/image', dependency_26], ['react/jsx-runtime', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignment-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignment-intro.widget');
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
        hash: 327943112,
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

      /*********************************************
      INTERNAL MODULE: ./views/content/actions/index
      *********************************************/

      ims.set('./views/content/actions/index', {
        hash: 1052186546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentControls = ContentControls;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
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
            }, _react.default.createElement(_icons.IconButton, {
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
        hash: 1441105032,
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
            }), _react.default.createElement(_actions.ContentControls, {
              id: "content",
              text: content,
              store: store,
              player: store.voice
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
        hash: 2216784147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl93cmFwcGVyIiwiX3dyYXBwZXIyIiwiX2NoYXQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfc2Vzc2lvbiIsImluc3RhbmNlIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwibWF0ZXJpYWxzIiwiTWFwIiwiX19pbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiVm9pY2UiLCJhY3Rpdml0eSIsImxvYWRBY3Rpdml0eSIsImFzc2lnbm1lbnRJZCIsInNlc3Npb25JZCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwidGhlbiIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiQWN0aXZpdHkiLCJpZCIsImFzc2lnbm1lbnQiLCJpc1JlYWR5Iiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJzZXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwidXBkYXRlVm9pY2UiLCIjdXBkYXRlVm9pY2UiLCJsYW5ndWFnZSIsInJhdGUiLCJhdWRpb1NwZWVkIiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsInByb2Nlc3MiLCJMZXNzb24iLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsImxhbmciLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50IiwiYXVkaW8iLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJfcmVhY3QiLCJfY29udGV4dCIsIl9jb250ZW50IiwiX3NlbGVjdGlvbiIsIl9ob29rcyIsIl9zcG9rZW4iLCJDb250ZW50TWFuYWdlciIsImFjdGl2ZUNvbnRyb2wiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJzZXRNb2RlbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIkNvbnRyb2wiLCJjcmVhdGVFbGVtZW50IiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJfaWNvbnMiLCJDb250ZW50Q29udHJvbHMiLCJ0ZXh0IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwic3RvcCIsImRpc2FibGVkIiwiaWNvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiX2NvbXBvbmVudHMiLCJfbGlua3MiLCJfbWFya2Rvd24iLCJfcGxheWFibGUiLCJfY29uZmlnIiwiX2FjdGlvbnMiLCJDb250ZW50IiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJ1bmRlZmluZWQiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJMaW5rcyIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0eXBlIiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsInVzZUVmZmVjdCIsImdldEF1ZGlvIiwic3JjIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIl9kZWZhdWx0IiwiX2xpbmsiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX3RvcGljQWN0aW9ucyIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsInVwZGF0ZVZpZXciLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImFjdGlvbnMiLCJzZWxlY3Rpb24iLCJzcG9rZW4iLCJfQ29udGVudE1hbmFnZXIiLCJfaGVhZGVyIiwiX3ByZWxvYWQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJ3aWR0aCIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsIl9hbGVydCIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfY29udGV4dDIiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJwZXJtaXNzaW9ucyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicmVjb3JkaW5nU3RhdGUiLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uU3RvcCIsInNob3dTZW5kIiwibWVzc2FnZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsImdsb2JhbFRoaXMiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIm9uQ2xvc2UiLCJUaW1lciIsIk1vZGFsIiwib3BlbiIsInNob3ciLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztj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