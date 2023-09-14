System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/quiz.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_7 = _beyondJsReactive114Model;
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
    }, function (_aimpactAilearnApp100AssessmentsQuizCode) {
      dependency_14 = _aimpactAilearnApp100AssessmentsQuizCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Components) {
      dependency_16 = _pragmateUi0036Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_19 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp100Config) {
      dependency_20 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0036Link) {
      dependency_21 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Icons) {
      dependency_22 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_23 = _pragmateUi0036Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Alert) {
      dependency_25 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_26 = _pragmateUi0036Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/assessments/quiz.code', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@bgroup/media-manager/audio-player', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/spinner', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/form', dependency_26]]);
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
        hash: 674307,
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
                const audio = await this.#mediaRecorder?.start();
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
        hash: 1112800661,
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
              // AiLearnWrapper.sessionModel = this.#model;
              // AiLearnWrapper.sessionAssessment = this.#assessment;
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
        hash: 484399327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
          var _quiz = require("@aimpact/ailearn-app/assessments/quiz.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _oral = require("./oral");
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
              if (activeControl === 'quiz') {
                const assessment = chatIntroductions.items.get('assessment').value.assessment[0];
                return _react.default.createElement(_quiz.Quiz, {
                  assessments: assessment,
                  questions: assessment.questions
                });
              }
              if (activeControl === 'oral') return _react.default.createElement(_oral.OralAsssessment, null);
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
        hash: 1136737364,
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
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
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
            }, _react.default.createElement("div", null, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audioUrl,
              create: "false"
            })), _react.default.createElement(_components.ButtonGroup, {
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
        hash: 3522368348,
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
              texts: {
                header
              }
            } = (0, _context.useLessonIntroContext)();
            return _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, header.title)), _react.default.createElement("div", {
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
        hash: 2755340461,
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
            }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              onClick: onActionClick,
              "data-view": "content",
              key: "content"
            }, header.introduction), _react.default.createElement(_components.Button, {
              key: "quiz",
              onClick: onActionClick,
              "data-view": "quiz"
            }, assessments.quiz), _react.default.createElement(_components.Button, {
              key: "oral",
              onClick: onActionClick,
              "data-view": "oral"
            }, assessments.oral)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 744456686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntro = ChatIntro;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _header = require("./header");
          var _ContentManager = require("./ContentManager");
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
              esready: textsReady && ready && store.loadReady,
              activeControl,
              updateView,
              store,
              texts,
              visible,
              toggleVisibility
            }), [textsReady, ready, store.loadReady, activeControl, store, texts, visible]);
            if (!textsReady || !ready) return _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: "primary"
            });
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

      /****************************************
      INTERNAL MODULE: ./views/oral/AudioPlayer
      ****************************************/

      ims.set('./views/oral/AudioPlayer', {
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

      /**************************************************
      INTERNAL MODULE: ./views/oral/analysis/competencies
      **************************************************/

      ims.set('./views/oral/analysis/competencies', {
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

      /*******************************************
      INTERNAL MODULE: ./views/oral/analysis/index
      *******************************************/

      ims.set('./views/oral/analysis/index', {
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

      /*********************************************
      INTERNAL MODULE: ./views/oral/analysis/student
      *********************************************/

      ims.set('./views/oral/analysis/student', {
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

      /*********************************************
      INTERNAL MODULE: ./views/oral/analysis/teacher
      *********************************************/

      ims.set('./views/oral/analysis/teacher', {
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

      /************************************
      INTERNAL MODULE: ./views/oral/context
      ************************************/

      ims.set('./views/oral/context', {
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

      /**********************************
      INTERNAL MODULE: ./views/oral/index
      **********************************/

      ims.set('./views/oral/index', {
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

      /**************************************
      INTERNAL MODULE: ./views/oral/recording
      **************************************/

      ims.set('./views/oral/recording', {
        hash: 2990793451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
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
              event.preventDefault();
              const recordingState = !recording;
              recorder.record();
              setRecording(recordingState);
              setAction('start');
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
                  }, 5000);
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
                }, 6000);
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
            }), _react.default.createElement(_form.Button, {
              icon: icon,
              onClick: onAction,
              disabled: disabled
            }, texts[message]), showSend && _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_AudioPlayer.AudioPlayer, {
              src: store.recorder.audio
            }), _react.default.createElement(_form.Button, {
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

      /****************************************
      INTERNAL MODULE: ./views/oral/timer/index
      ****************************************/

      ims.set('./views/oral/timer/index', {
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

      /********************************************
      INTERNAL MODULE: ./views/oral/timer/use-timer
      ********************************************/

      ims.set('./views/oral/timer/use-timer', {
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
        "im": "./views/oral/AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/oral/recording",
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/oral/AudioPlayer').AudioPlayer : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/oral/recording').RecordingButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUM7VUFDL0MiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJvbiIsImxpc3RlbiIsInN0b3JlUmVhZHkiLCJ3aWRnZXQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVjb3JkZXIiLCJFdmVudHMiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInRyYW5zY3JpcHRpb24iLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwidHJpZ2dlciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsIkVycm9yIiwic3RhcnQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsIndhcm4iLCJlbmR0aW1lIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInJlY29yZGVyIiwiaXNUb3BpYyIsImFzc2Vzc21lbnQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiaXNSZWFkeSIsInByb21pc2VzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwidG9waWNzIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsImUiLCJDb250ZW50TWFuYWdlciIsInN0b3JlIiwiYWN0aXZlQ29udHJvbCIsInNldE1vZGVsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRyb2wiLCJDb250ZW50IiwiUXVpeiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJjbGFzc05hbWUiLCJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciIsIkxpbmtzIiwiY2hpbGRyZW4iLCJpdGVtIiwidXJpIiwiYmFzZVVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwibmFtZSIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwiZ2V0QXVkaW8iLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJpY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJIZWFkZXIiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJUb3BpY0hlYWRlckFjdGlvbnMiLCJJY29uQnV0dG9uIiwidXBkYXRlVmlldyIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwicXVpeiIsIm9yYWwiLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJlc3JlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJBbmFseXNpcyIsInNldFZpZXciLCJzZXRDb250ZW50Iiwib25SZWRvIiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsInRlYWNoZXIiLCJUZWFjaGVyRmVlZGJhY2siLCJzdHVkZW50IiwiU3R1ZGVudEZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzIiwiVmlldyIsImNoYW5nZVZpZXciLCJhbmFseXNpc1RpdGxlIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInJlZG8iLCJmYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwibG9nIiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJvblN0b3AiLCJzaG93U2VuZCIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwiVGltZXIiLCJzZW5kIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9yZWNvcmRlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvVGFic0hlYWRlci50c3giLCJ0cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwidHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL29yYWwvY29udGV4dC50c3giLCJ0cy92aWV3cy9vcmFsL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL29yYWwvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==