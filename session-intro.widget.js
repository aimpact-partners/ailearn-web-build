System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.1/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.1/link", "pragmate-ui@0.0.1/icons", "pragmate-ui@0.0.1/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.1/preload", "pragmate-ui@0.0.1/alert"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, Recorder, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Recorder: void 0,
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
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_beyondJsReactive116Model) {
      dependency_7 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_8 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101ChatWidget) {
      dependency_10 = _aimpactChat101ChatWidget;
    }, function (_aimpactChatSdk100Voice) {
      dependency_11 = _aimpactChatSdk100Voice;
    }, function (_aimpactAilearnApp100ModelWrapper) {
      dependency_12 = _aimpactAilearnApp100ModelWrapper;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_aimpactAilearnApp100AssessmentsSelectionCode) {
      dependency_14 = _aimpactAilearnApp100AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi001Components) {
      dependency_16 = _pragmateUi001Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_19 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp100Config) {
      dependency_20 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi001Link) {
      dependency_21 = _pragmateUi001Link;
    }, function (_pragmateUi001Icons) {
      dependency_22 = _pragmateUi001Icons;
    }, function (_pragmateUi001Spinner) {
      dependency_23 = _pragmateUi001Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi001Preload) {
      dependency_25 = _pragmateUi001Preload;
    }, function (_pragmateUi001Alert) {
      dependency_26 = _pragmateUi001Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/assessments/selection.code', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@bgroup/media-manager/audio-player', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/spinner', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/preload', dependency_25], ['pragmate-ui/alert', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@1.0.0/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/session-intro.widget');
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

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1155225113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _dayjs = require("dayjs");
          /*bundle */
          class Recorder extends _core.Events {
            #initialised = false;
            #source;
            #stream;
            #startTime;
            #initPromise;
            #stopPromise;
            #audioContext;
            #recordingPromise;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #analyser;
            get analyser() {
              return this.#analyser;
            }
            #speechRecognition;
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            #promiseSpeech;
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#stream = stream;
                // Create an AudioContext
                this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
                // Create an AnalyserNode
                this.#analyser = this.#audioContext.createAnalyser();
                // Create a source from the stream and connect it to the analyser
                this.#source = this.#audioContext.createMediaStreamSource(stream);
                // this.#source.connect(this.#analyser);
                this.#mediaRecorder.addEventListener('dataavailable', event => {
                  if (event.data.size === 0) return;
                  this.#chunks.push(event.data);
                  this.trigger('dataavailable');
                });
              }).catch(error => {
                console.error(error);
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              // TODO - @ftovar ERROR
              // this.#chunks = [];
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error('Wait for recorder to be stopped and transcription ready');
              }
              this.#status = 'started';
              this.#recording = true;
              this.trigger('change');
              this.initialise().then(async () => {
                this.#startTime = (0, _dayjs.default)();
                // TODO - @ftovar ERROR
                // const audio = await this.#mediaRecorder?.start(1000);
                this.#mediaRecorder?.start();
              }).catch(error => {
                console.error(error);
              });
              return this.#recordingPromise;
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
            };

            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                const endtime = (0, _dayjs.default)();
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  };
                  if (this.#promiseSpeech) {
                    this.#promiseSpeech.then(onFinish);
                  } else {
                    if (this.#stopPromise) {
                      onFinish();
                    }
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1940245126,
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
          var _recorder = require("./recorder");
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
            #voice = new _voice.Voice();
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
            constructor(metadata) {
              super();
              this.#metadata = metadata;
              this.#recorder = new _recorder.Recorder();
              this.reactiveProps(['loadReady']);
              this.#assessment = new _core.Assessment();
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
              if (this.#lesson.language) this.voice.lang = this.#lesson.language;
              const promises = [this.#lesson.load(), this.#lesson.chatIntroductions.load(), this.#assessment.load(lesson.id)];
              await Promise.all(promises);
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
        hash: 1802067439,
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
            const [action, setAction] = _react.default.useState('');
            const [sending, setSending] = _react.default.useState(false);
            const {
              store
            } = (0, _context2.useLessonIntroContext)();
            const onPlay = async event => {
              try {
                event.preventDefault();
                const recordingState = !recording;
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
            const icon = recording ? 'stop' : 'mic';
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
            const onAction = action === 'start' ? onStop : onPlay;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            return _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_components.Button, {
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
        "im": "./recorder",
        "from": "Recorder",
        "name": "Recorder"
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
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./recorder').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwib24iLCJsaXN0ZW4iLCJzdG9yZVJlYWR5Iiwid2lkZ2V0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwiZXhwb3J0cyIsIlJlY29yZGVyIiwiRXZlbnRzIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwiZXJyb3IiLCJ2YWxpZCIsImF1ZGlvIiwiYW5hbHlzZXIiLCJ0cmFuc2NyaXB0aW9uIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJnbG9iYWxUaGlzIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsInRyaWdnZXIiLCJjYXRjaCIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlc29sdmUiLCJyZWNvcmQiLCJFcnJvciIsInN0YXJ0Iiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsInVuZGVmaW5lZCIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhdWRpb01hbmFnZXIiLCJWb2ljZSIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImlzUmVhZHkiLCJsYW5ndWFnZSIsImxhbmciLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsInRvcGljcyIsIm1hcCIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIlRhYnNIZWFkZXIiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsInRpdGxlcyIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJhY3Rpb25zIiwic2VsZWN0aW9uIiwic3Bva2VuIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJlbG9hZCIsIlByb3ZpZGVyIiwiUHJlbG9hZEVsZW1lbnQiLCJ3aWR0aCIsImZldGNoaW5nIiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsImZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsImluZGV4Iiwic3ViamVjdCIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsInVzZVJlY29yZGVyQ29udGV4dCIsInNldFJlY29yZGluZyIsImxlbmd0aCIsImFsZXJ0Q29udGVudCIsIm9yYWxUZXh0Iiwib25TdWJtaXQiLCJsb2ciLCJSZWNvcmRpbmdCdXR0b24iLCJBbGVydCIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsIm9uU3RvcCIsInNob3dTZW5kIiwib25TZW5kIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJUaW1lciIsInNlbmQiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3JlY29yZGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCJ0cy92aWV3cy9UYWJzSGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCJ0cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCJ0cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvcHJlbG9hZC50c3giLCJ0cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwidHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwidHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9yZWNvcmRpbmcudHN4IiwidHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19