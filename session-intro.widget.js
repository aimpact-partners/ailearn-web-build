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
        hash: 1616026575,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBT087VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUM3QyxNQUFNO1lBR05DLFdBQVc7Y0FDVjtjQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUU1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLENBQUNMLFFBQVEsQ0FBQztjQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQUEsTUFBTSxHQUFHLE1BQUs7Y0FDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUNDLFVBQVUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRXJELENBQUM7WUFDRCxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsZ0JBQVM7WUFDakI7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRDtVQUNBO1VBRU87VUFBVyxNQUNaQyxRQUFTLFNBQVFDLFlBQU07WUFDNUIsWUFBWSxHQUFHLEtBQUs7WUFDcEIsT0FBTztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFFZCxPQUFPLEdBQWUsRUFBRTtZQUN4QixJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUNBLE9BQU87WUFDUCxJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUVBLFVBQVUsR0FBRyxLQUFLO1lBQ2xCLElBQUlDLFNBQVM7Y0FDWixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ3ZCO1lBRUEsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsSUFBSUMsS0FBSztjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQjtZQUVBLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBLFNBQVM7WUFDVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLGtCQUFrQjtZQUNsQixjQUFjLEdBQUcsRUFBRTtZQUNuQixJQUFJQyxhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDM0I7WUFFQSxjQUFjO1lBQ2QsTUFBTUMsVUFBVTtjQUNmLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVk7Y0FDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJQyxvQkFBYyxFQUFRO2NBQzlDQyxTQUFTLENBQUNDLFlBQVksQ0FDcEJDLFlBQVksQ0FBQztnQkFBRVAsS0FBSyxFQUFFO2NBQUksQ0FBRSxDQUFDLENBQzdCUSxJQUFJLENBQUNDLE1BQU0sSUFBRztnQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUlDLGFBQWEsQ0FBQ0QsTUFBTSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHQSxNQUFNO2dCQUNyQjtnQkFDQSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUtFLFVBQVUsQ0FBQ0MsWUFBWSxJQUFJRCxVQUFVLENBQUNFLGtCQUFrQixHQUFHO2dCQUVyRjtnQkFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUNDLGNBQWMsRUFBRTtnQkFFcEQ7Z0JBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDQyx1QkFBdUIsQ0FBQ04sTUFBTSxDQUFDO2dCQUNqRTtnQkFFQSxJQUFJLENBQUMsY0FBYyxDQUFDTyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUVDLEtBQUssSUFBRztrQkFDN0QsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLElBQUksS0FBSyxDQUFDLEVBQUU7a0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDQyxJQUFJLENBQUM7a0JBRTdCLElBQUksQ0FBQ0csT0FBTyxDQUFDLGVBQWUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDO2NBQ0gsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ3hCLEtBQUssSUFBRztnQkFDZHlCLE9BQU8sQ0FBQ3pCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHQSxLQUFLLENBQUMwQixPQUFPO2dCQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDQyxNQUFNLEVBQUU7Y0FDM0IsQ0FBQyxDQUFDLENBQ0RDLE9BQU8sQ0FBQyxNQUFLO2dCQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQ0MsT0FBTyxFQUFFO2NBQzVCLENBQUMsQ0FBQztjQUVILE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7WUFFQUMsTUFBTTtjQUNMO2NBRUEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxJQUFJLENBQUMsaUJBQWlCO2NBRXpEO2NBQ0E7Y0FFQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSXhCLG9CQUFjLEVBQVE7Y0FDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixNQUFNLElBQUl5QixLQUFLLENBQUMseURBQXlELENBQUM7O2NBRTNFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUztjQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUk7Y0FDdEIsSUFBSSxDQUFDUixPQUFPLENBQUMsUUFBUSxDQUFDO2NBRXRCLElBQUksQ0FBQ2xCLFVBQVUsRUFBRSxDQUNmSyxJQUFJLENBQUMsWUFBVztnQkFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBSyxHQUFFO2dCQUN6QjtnQkFDQTtnQkFFQSxNQUFNUixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFOEIsS0FBSyxFQUFFO2NBQ2pELENBQUMsQ0FBQyxDQUVEUixLQUFLLENBQUN4QixLQUFLLElBQUc7Z0JBQ2R5QixPQUFPLENBQUN6QixLQUFLLENBQUNBLEtBQUssQ0FBQztjQUNyQixDQUFDLENBQUM7Y0FDSCxPQUFPLElBQUksQ0FBQyxpQkFBaUI7WUFDOUI7WUFDQWlDLFVBQVUsR0FBRyxNQUFLO2NBQ2pCO2NBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FDVkMsU0FBUyxFQUFFLENBQUM7Y0FBQSxDQUNaQyxPQUFPLENBQUVDLEtBQUssSUFBa0NBLEtBQUssQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7O1lBRURBLElBQUk7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDekJaLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNqRDs7Y0FFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtjQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUloQyxvQkFBYyxFQUFPO2NBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSXlCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztjQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Y0FDeEIsTUFBTU0sSUFBSSxHQUFHLE1BQUs7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2dCQUN2QixNQUFNRSxPQUFPLEdBQUcsa0JBQUssR0FBRTtnQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQ3JCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFXO2tCQUN2RCxNQUFNaEIsS0FBSyxHQUFHLElBQUlzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFBRUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUNDO2tCQUFRLENBQUUsQ0FBQztrQkFFNUU7a0JBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBR3hDLEtBQUs7a0JBRW5CLE1BQU15QyxRQUFRLEdBQUcsTUFBSztvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQ2QsT0FBTyxDQUFDM0IsS0FBSyxDQUFDO29CQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHMEMsU0FBUztrQkFDOUIsQ0FBQztrQkFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUNsQyxJQUFJLENBQUNpQyxRQUFRLENBQUM7bUJBQ2xDLE1BQU07b0JBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO3NCQUN0QkEsUUFBUSxFQUFFOzs7a0JBSVosSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQ2QsT0FBTyxDQUFDM0IsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcwQyxTQUFTOztrQkFFbkMsSUFBSSxDQUFDWCxVQUFVLEVBQUU7a0JBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUdXLFNBQVM7a0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUdBLFNBQVM7a0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUdBLFNBQVM7Z0JBQzlCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsY0FBYyxFQUFFUCxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRUEsSUFBSSxFQUFFO2dCQUUvQixJQUFJLENBQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQztjQUVELElBQUksQ0FBQyxZQUFZLEdBQUdjLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ2hDLFVBQVUsRUFBRSxDQUFDSyxJQUFJLENBQUMyQixJQUFJLENBQUM7Y0FDekQsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6Qjs7VUFDQTNDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BMRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBVU0sTUFBT1QsWUFBYSxTQUFRNEQsb0JBQTJCO1lBQzVELE9BQU87WUFDUCxJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUVBLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBLE1BQU0sR0FBRyxFQUFFO1lBQ1gsSUFBSUMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxhQUFhLEdBQUcsSUFBSUMsa0JBQVksQ0FBQyxJQUFJLENBQUM7WUFDdEMsYUFBYTtZQUNiLElBQUlDLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCO1lBQ0EsSUFBSUMsWUFBWTtjQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDMUI7WUFFQSxNQUFNLEdBQUcsSUFBSUMsWUFBSyxFQUFFO1lBQ3BCLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsU0FBUztZQUNULElBQUkxRSxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLElBQUkyRSxJQUFJO2NBQ1AsT0FBT0MsbUJBQVUsQ0FBQ0MsV0FBVztZQUM5QjtZQUVBLElBQUlDLFFBQVE7Y0FDWCxPQUFPQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLFdBQVc7WUFDdkM7WUFFQSxTQUFTO1lBQ1QsSUFBSUMsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFDQSxRQUFRO1lBQ1IsSUFBSUMsT0FBTztjQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3ZCO1lBQ0EsV0FBVztZQUNYLElBQUlDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBRUEsV0FBVyxHQUFZLEtBQUs7WUFFNUIsSUFBSTVFLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0E2RSxZQUFZckYsUUFBbUI7Y0FDOUIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBR0EsUUFBUTtjQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUllLGtCQUFRLEVBQUU7Y0FDL0IsSUFBSSxDQUFDdUUsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Y0FDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJQyxnQkFBVSxFQUFFO2NBQ25DLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7Y0FDdEIsSUFBSXhGLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUN5RixJQUFJLENBQUMsSUFBSSxDQUFDekYsUUFBUSxDQUFDLENBQUM4QixJQUFJLENBQUMsTUFBSztrQkFDbEMsSUFBSSxDQUFDNEQsS0FBSyxHQUFHLElBQUk7a0JBQ2pCLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUk7a0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtrQkFFdkIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7Z0JBQ3BCLENBQUMsQ0FBQztnQkFDRjs7Y0FHRCxJQUFJLENBQUNELEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUk7Y0FDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQ0csWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUYsSUFBSSxDQUFDekYsUUFBbUI7Y0FDN0IsSUFBSUEsUUFBUSxDQUFDa0UsTUFBTSxFQUFFO2dCQUNwQixNQUFNLElBQUksQ0FBQzBCLFVBQVUsQ0FBQzVGLFFBQVEsQ0FBQ2tFLE1BQU0sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FHM0IsSUFBSWxFLFFBQVEsQ0FBQ21FLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQzBCLFNBQVMsQ0FBQzdGLFFBQVEsQ0FBQztjQUVsRCxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEI7WUFFQSxNQUFNNEYsVUFBVSxDQUFDMUIsTUFBMkI7Y0FDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJNEIsWUFBTSxDQUFDO2dCQUFFQyxFQUFFLEVBQUU3QixNQUFNLENBQUM2QjtjQUFFLENBQUUsQ0FBQztjQUM1QyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUNDLE9BQU87Y0FFMUIsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ1IsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQ1MsaUJBQWlCLENBQUNULElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUNBLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQzZCLEVBQUUsQ0FBQyxDQUFDO2NBQy9HLE1BQU1JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7WUFDNUI7WUFFQSxNQUFNSixTQUFTLENBQUM3RixRQUFtQjtjQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUNxRyxNQUFNLENBQUNDLEdBQUcsQ0FBQ2xHLEdBQUcsQ0FBQ0osUUFBUSxDQUFDbUUsS0FBSyxDQUFDNEIsRUFBRSxDQUFDO2NBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07Y0FFekIsTUFBTUUsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsaUJBQWlCLENBQUNULElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUNBLElBQUksQ0FBQ3pGLFFBQVEsQ0FBQ21FLEtBQUssQ0FBQzRCLEVBQUUsQ0FBQyxDQUFDO2NBQ2pHLE1BQU1JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7Y0FDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtZQUMxQjtZQUNBLFFBQVE7Y0FDUE0sd0JBQWMsQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNO2NBQ3pDRCx3QkFBYyxDQUFDRSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVztjQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUNQLGlCQUFpQixDQUFDUSxLQUFLLENBQ3REdEcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUNuQnVHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksRUFBRTdCLHVCQUFjLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQ3ZEO1lBRUE0QixjQUFjLEdBQUcsTUFBTXZGLEtBQUssSUFBRztjQUM5QixJQUFJO2dCQU1ILE1BQU13RixLQUFLLEdBQVc7a0JBQUV4RjtnQkFBSyxDQUFFO2dCQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUV3RixLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDaEIsRUFBRSxDQUFDLEtBQzdDZSxLQUFLLENBQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDakIsRUFBRTtnQkFFckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDa0IsT0FBTyxDQUFDSCxLQUFLLENBQUM7ZUFDdEMsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hyRSxPQUFPLENBQUN6QixLQUFLLENBQUM4RixDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0RwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5SkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVXFHLGNBQWM7WUFDN0IsSUFBSTtjQUFFQyxLQUFLO2NBQUVDO1lBQWEsQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBQ3REO1lBQ0EsTUFBTSxDQUFDakQsS0FBSyxFQUFFa0QsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNoRCxLQUFLLENBQUM7WUFDckQsb0JBQVMsRUFBQyxDQUFDZ0QsS0FBSyxDQUFDLEVBQUUsTUFBTUUsUUFBUSxDQUFDRixLQUFLLENBQUNoRCxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUNnRCxLQUFLLENBQUNoRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQzdCLE1BQU07Y0FBRThCO1lBQWlCLENBQUUsR0FBRzlCLEtBQUs7WUFFbkMsTUFBTXFELE9BQU8sR0FBRyxNQUFLO2NBQ3BCLElBQUlKLGFBQWEsS0FBSyxTQUFTLEVBQUUsT0FBT0UsNkJBQUNHLGdCQUFPLE9BQUc7Y0FDbkQsSUFBSUwsYUFBYSxLQUFLLE1BQU0sRUFBRTtnQkFDN0IsTUFBTWpDLFVBQVUsR0FBR2MsaUJBQWlCLENBQUNRLEtBQUssQ0FBQ3RHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQ3VHLEtBQUssQ0FBQ3ZCLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLE9BQU9tQyw2QkFBQ0ksVUFBSTtrQkFBQ0MsV0FBVyxFQUFFeEMsVUFBVTtrQkFBRXlDLFNBQVMsRUFBRXpDLFVBQVUsQ0FBQ3lDO2dCQUFTLEVBQUk7O2NBRTFFLElBQUlSLGFBQWEsS0FBSyxNQUFNLEVBQUUsT0FBT0UsNkJBQUNPLHFCQUFlLE9BQUc7WUFDekQsQ0FBQztZQUVELE9BQ0NQLDBDQUNDQSw2QkFBQ0UsT0FBTyxPQUFHLENBQ047VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQk0sU0FBVU0sVUFBVSxDQUFDLEVBQUUsR0FFN0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVjLFNBQVVMLE9BQU87WUFDOUIsTUFBTTtjQUFFTixLQUFLO2NBQUVZLEtBQUs7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFDekQsTUFBTUMsUUFBUSxHQUFHWCxjQUFLLENBQUNZLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsTUFBTUMsUUFBUSxHQUFHaEIsS0FBSyxDQUFDaEQsS0FBSyxDQUFDOEIsaUJBQWlCLENBQUNRLEtBQUs7WUFDcEQsTUFBTTJCLE9BQU8sR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ2hJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQ3VHLEtBQUssR0FBRzNDLFNBQVM7WUFDbkYsTUFBTXVFLFNBQVMsR0FBR0gsUUFBUSxDQUFDRSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ2hJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ3VHLEtBQUssR0FBRzNDLFNBQVM7WUFDekYsTUFBTXdFLEtBQUssR0FBR3BCLEtBQUssQ0FBQzdDLFlBQVk7WUFDaEMsTUFBTWtFLFFBQVEsR0FBRyxHQUFHQyxlQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLDRCQUE0QnpCLEtBQUssQ0FBQ2hELEtBQUssQ0FBQzJCLEVBQUUsRUFBRTtZQUUzRixNQUFNK0MsWUFBWSxHQUFHdkcsS0FBSyxJQUFHO2NBQzVCLE1BQU13RyxNQUFNLEdBQUd4RyxLQUFLLENBQUN5RyxhQUFhO2NBQ2xDLE1BQU07Z0JBQUVDO2NBQU8sQ0FBRSxHQUFHMUcsS0FBSyxDQUFDeUcsYUFBYSxDQUFDRSxPQUFPO2NBQy9DLE1BQU1DLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2NBQy9ETixNQUFNLENBQ0pPLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUM3QkQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQzFCOUYsT0FBTyxDQUFDZ0csS0FBSyxJQUFJQSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ3BEVixNQUFNLENBQUNTLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUM5QlAsS0FBSyxDQUFDNUYsT0FBTyxDQUFDb0csSUFBSSxJQUFHO2dCQUNwQkEsSUFBSSxDQUFDSCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUlFLElBQUksQ0FBQ1QsT0FBTyxDQUFDRCxPQUFPLEtBQUtBLE9BQU8sRUFBRVUsSUFBSSxDQUFDSCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDbkUsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0NuQztjQUFTcUMsU0FBUyxFQUFFLHNCQUFzQjNCLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTtZQUFFLEdBQ3BFVjtjQUFRcUMsU0FBUyxFQUFDO1lBQXdCLEdBQ3pDckMsd0NBQUlpQixLQUFLLENBQUssQ0FDTixFQUNUakI7Y0FBU3FDLFNBQVMsRUFBQztZQUF5RCxHQUMzRXJDLDBDQUNDQSw2QkFBQ3NDLHdCQUFXO2NBQUNDLEdBQUcsRUFBRXJCLFFBQVE7Y0FBRXNCLE1BQU0sRUFBQztZQUFPLEVBQUcsQ0FDeEMsRUFDTnhDLDZCQUFDeUMsdUJBQVc7Y0FBQ0MsUUFBUSxFQUFFO1lBQUMsR0FDdkIxQyw2QkFBQzJDLGtCQUFNO2NBQUEsZ0JBQWMsV0FBVztjQUFDQyxPQUFPLEVBQUVyQjtZQUFZLEdBQ3BEZCxLQUFLLENBQUNJLFFBQVEsQ0FBQ0csU0FBUyxDQUNqQixFQUNUaEIsNkJBQUMyQyxrQkFBTTtjQUFBLGdCQUFjLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFckI7WUFBWSxHQUNsRGQsS0FBSyxDQUFDSSxRQUFRLENBQUNDLE9BQU8sQ0FDZixDQUNJLENBQ0wsRUFDVmQ7Y0FBU3FDLFNBQVMsRUFBQyxjQUFjO2NBQUNRLEdBQUcsRUFBRWxDO1lBQVEsR0FDOUNYO2NBQVNxQyxTQUFTLEVBQUMscUNBQXFDO2NBQUEsZ0JBQWM7WUFBVyxHQUNoRnJDLDZCQUFDOEMsa0JBQVE7Y0FBQ2hDLE9BQU8sRUFBRUU7WUFBUyxFQUFJLENBQ3ZCLEVBQ1ZoQjtjQUFTcUMsU0FBUyxFQUFDLDhCQUE4QjtjQUFBLGdCQUFjO1lBQVMsR0FDdkVyQyw2QkFBQytDLGtCQUFRO2NBQUNDLE1BQU0sRUFBRW5ELEtBQUssQ0FBQzFDLEtBQUs7Y0FBRTJELE9BQU8sRUFBRUEsT0FBTztjQUFFdEMsRUFBRSxFQUFDO1lBQVMsRUFBRyxDQUN2RCxDQUNELEVBQ1Z3Qiw2QkFBQ2lELFlBQUssT0FBRyxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVUEsS0FBSztZQUNwQixNQUFNO2NBQUVwRDtZQUFLLENBQUUsR0FBRyxrQ0FBcUIsR0FBRTtZQUV6QyxJQUFJLENBQUNBLEtBQUssQ0FBQ3pDLElBQUksQ0FBQzhGLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDckMsT0FDQ2xEO2NBQUtxQyxTQUFTLEVBQUM7WUFBdUMsR0FDcER4QyxLQUFLLENBQUN6QyxJQUFJLENBQUM4RixRQUFRLENBQUNuRSxHQUFHLENBQUNvRSxJQUFJLElBQUc7Y0FDL0IsTUFBTUMsR0FBRyxHQUFHLEdBQUdqQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ2lDLE9BQU8sU0FBU0YsSUFBSSxDQUFDM0UsRUFBRSxFQUFFO2NBQ3RELE9BQ0N3Qiw2QkFBQ3NELGdCQUFJO2dCQUFDQyxHQUFHLEVBQUVILEdBQUc7Z0JBQUVJLElBQUksRUFBRUosR0FBRztnQkFBRWYsU0FBUyxFQUFDO2NBQVcsR0FDOUNjLElBQUksQ0FBQ00sSUFBSSxDQUNKO1lBRVQsQ0FBQyxDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFDQTtVQUVPLE1BQU1DLFlBQVksR0FBRyxDQUFDO1lBQUVDO1VBQUksQ0FBRSxLQUFJO1lBQ3hDLE1BQU07Y0FBRTlEO1lBQUssQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBQ3pDLE1BQU12RCxJQUFJLEdBQUcsWUFBWTtZQUN6QixNQUFNLENBQUNzSCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLG1CQUFRLEVBQUMsSUFBSSxDQUFDO1lBRTlDLG9CQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1DLFFBQVEsR0FBRyxZQUFXO2dCQUMzQixNQUFNdkIsR0FBRyxHQUFHLE1BQU0xQyxLQUFLLENBQUMxQyxLQUFLLENBQUM0Ryx1QkFBdUIsQ0FBQ0osSUFBSSxFQUFFckgsSUFBSSxDQUFDO2dCQUNqRXVILFdBQVcsQ0FBQ3RCLEdBQUcsQ0FBQztjQUNqQixDQUFDO2NBQ0R1QixRQUFRLEVBQUU7WUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQzlELDBDQUNDQTtjQUFPZ0UsUUFBUTtZQUFBLEdBQ2RoRTtjQUFRdUMsR0FBRyxFQUFFcUIsUUFBUTtjQUFFdEgsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDOUIsQ0FDSDtVQUVSLENBQUM7VUFBQy9DO1VBQUEsZUFFYW1LLFlBQVk7VUFBQW5LOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCM0I7VUFDQTtVQUNBO1VBRWMsU0FBVTBLLFdBQVcsQ0FBQztZQUFFckg7VUFBSyxDQUFFO1lBQzVDLE9BQ0NvRDtjQUFLcUMsU0FBUyxFQUFDO1lBQU8sR0FDckJyQyx5Q0FBS3BELEtBQUssQ0FBQ3NILEtBQUssQ0FBTSxFQUN0QmxFLHdDQUFJcEQsS0FBSyxDQUFDb0UsU0FBUyxDQUFDRixPQUFPLENBQUssRUFDaENkLDZCQUFDc0QsVUFBSTtjQUFDakIsU0FBUyxFQUFDLGtCQUFrQjtjQUFDbUIsSUFBSSxFQUFFLFNBQVM1RyxLQUFLLENBQUM0QixFQUFFO1lBQUUsR0FDM0R3Qiw2QkFBQ21FLFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNwQnBFLDZEQUFxQixDQUNmLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQVlPLE1BQU1xRSxrQkFBa0IsR0FBR3JFLGNBQUssQ0FBQ3NFLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQUMvSztVQUMxRSxNQUFNZ0wscUJBQXFCLEdBQUcsTUFBTXZFLGNBQUssQ0FBQ3dFLFVBQVUsQ0FBQ0gsa0JBQWtCLENBQUM7VUFBQzlLOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JoRjtVQUNBO1VBRU0sU0FBVWtMLFNBQVMsQ0FBQztZQUFFQyxLQUFLO1lBQUU5QixPQUFPO1lBQUV4RDtVQUFLLENBQUU7WUFDbEQsT0FDQ1ksNkJBQUMyQyxrQkFBTTtjQUFBLGFBQVl2RCxLQUFLO2NBQUV1RixPQUFPLEVBQUMsU0FBUztjQUFDL0IsT0FBTyxFQUFFQTtZQUFPLEdBQzFEOEIsS0FBSyxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEE7VUFDQTtVQUNBO1VBRUE7VUFDYyxTQUFVRSxNQUFNO1lBQzdCLE1BQU0sQ0FBQ2xDLFFBQVEsRUFBRW1DLFdBQVcsQ0FBQyxHQUFHN0UsY0FBSyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBRXpELE1BQU07Y0FDTFMsT0FBTztjQUNQb0UsZ0JBQWdCO2NBQ2hCckUsS0FBSyxFQUFFO2dCQUFFc0U7Y0FBTTtZQUFFLENBQ2pCLEdBQUcsa0NBQXFCLEdBQUU7WUFFM0IsT0FDQy9FO2NBQVFxQyxTQUFTLEVBQUM7WUFBZSxHQUNoQ3JDO2NBQVNxQyxTQUFTLEVBQUM7WUFBOEIsR0FDaERyQyw2QkFBQ21FLFdBQUk7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQy9CLFNBQVMsRUFBQztZQUFnQixFQUFHLEVBQ2hEckMseUNBQUsrRSxNQUFNLENBQUNiLEtBQUssQ0FBTSxDQUNkLEVBQ1ZsRTtjQUFLcUMsU0FBUyxFQUFDO1lBQWlCLEdBQy9CckMsNkJBQUNnRixnQ0FBa0IsT0FBRyxFQUN0QmhGLDZCQUFDaUYsaUJBQVU7Y0FDVmIsSUFBSSxFQUFDLE9BQU87Y0FDWi9CLFNBQVMsRUFBRSxtQkFBbUIzQixPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRTtjQUN6RGtDLE9BQU8sRUFBRWtDO1lBQWdCLEVBQ3hCLENBQ0csQ0FDRTtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQTtVQUNBO1VBQ0E7VUFDTSxTQUFVRSxrQkFBa0I7WUFDakMsTUFBTSxDQUFDdEMsUUFBUSxFQUFFbUMsV0FBVyxDQUFDLEdBQUc3RSxjQUFLLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDekQsTUFBTTtjQUNMSixLQUFLO2NBQ0xxRixVQUFVO2NBQ1Z6RSxLQUFLLEVBQUU7Z0JBQUVzRSxNQUFNO2dCQUFFMUU7Y0FBVztZQUFFLENBQzlCLEdBQUcsa0NBQXFCLEdBQUU7WUFDM0IsSUFBSSxDQUFDUixLQUFLLENBQUNqQyxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQy9CLE1BQU11SCxhQUFhLEdBQUduSyxLQUFLLElBQUc7Y0FDN0JrSyxVQUFVLENBQUNsSyxLQUFLLENBQUN5RyxhQUFhLENBQUNFLE9BQU8sQ0FBQ3lELElBQUksQ0FBQztZQUM3QyxDQUFDO1lBRUQsT0FDQ3BGLDZCQUFDeUMsdUJBQVc7Y0FBQ0MsUUFBUSxFQUFFQSxRQUFRLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRztZQUFDLEdBQ3BEMUMsNERBQ0NBLDZCQUFDMkMsa0JBQU07Y0FBQ0MsT0FBTyxFQUFFdUMsYUFBYTtjQUFBLGFBQVksU0FBUztjQUFDNUIsR0FBRyxFQUFDO1lBQVMsR0FDL0R3QixNQUFNLENBQUMvSCxZQUFZLENBQ1osRUFDVGdELDZCQUFDMkMsa0JBQU07Y0FBQ1ksR0FBRyxFQUFDLE1BQU07Y0FBQ1gsT0FBTyxFQUFFdUMsYUFBYTtjQUFBLGFBQVk7WUFBTSxHQUN6RDlFLFdBQVcsQ0FBQ2dGLElBQUksQ0FDVCxFQUNUckYsNkJBQUMyQyxrQkFBTTtjQUFDWSxHQUFHLEVBQUMsTUFBTTtjQUFDWCxPQUFPLEVBQUV1QyxhQUFhO2NBQUEsYUFBWTtZQUFNLEdBQ3pEOUUsV0FBVyxDQUFDaUYsSUFBSSxDQUNULENBQ1AsQ0FDVTtVQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVVoTSxTQUFTLENBQUM7WUFBRXVHO1VBQUssQ0FBRTtZQUNsQyxNQUFNLENBQUNhLE9BQU8sRUFBRTZFLFVBQVUsQ0FBQyxHQUFHdkYsY0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xELE1BQU0sQ0FBQzlCLEtBQUssRUFBRXFILFFBQVEsQ0FBQyxHQUFHeEYsY0FBSyxDQUFDQyxRQUFRLENBQUNKLEtBQUssQ0FBQzVHLFVBQVUsQ0FBQztZQUMxRCxNQUFNLENBQUN3TSxVQUFVLEVBQUVoRixLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDaUYsc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU1iLGdCQUFnQixHQUFHLE1BQU1TLFVBQVUsQ0FBQyxDQUFDN0UsT0FBTyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ1osYUFBYSxFQUFFOEYsZ0JBQWdCLENBQUMsR0FBRzVGLGNBQUssQ0FBQ0MsUUFBUSxDQUFTLFNBQVMsQ0FBQztZQUUzRSxxQkFBUyxFQUFDLENBQUNKLEtBQUssQ0FBQyxFQUFFLE1BQU0yRixRQUFRLENBQUMzRixLQUFLLENBQUM1RyxVQUFVLElBQUk0RyxLQUFLLENBQUM1QixTQUFTLENBQUMsQ0FBQztZQUN2RSxNQUFNaUgsVUFBVSxHQUFHRSxJQUFJLElBQUc7Y0FDekJRLGdCQUFnQixDQUFDUixJQUFJLENBQUM7WUFDdkIsQ0FBQztZQUNELE1BQU1TLFlBQVksR0FBRzdGLGNBQUssQ0FBQzhGLE9BQU8sQ0FDakMsT0FBTztjQUNOQyxPQUFPLEVBQUVOLFVBQVUsSUFBSXRILEtBQUssSUFBSTBCLEtBQUssQ0FBQzVCLFNBQVM7Y0FDL0M2QixhQUFhO2NBQ2JvRixVQUFVO2NBQ1ZyRixLQUFLO2NBQ0xZLEtBQUs7Y0FDTEMsT0FBTztjQUNQb0U7YUFDQSxDQUFDLEVBQ0YsQ0FBQ1csVUFBVSxFQUFFdEgsS0FBSyxFQUFFMEIsS0FBSyxDQUFDNUIsU0FBUyxFQUFFNkIsYUFBYSxFQUFFRCxLQUFLLEVBQUVZLEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQzFFO1lBRUQsSUFBSSxDQUFDK0UsVUFBVSxJQUFJLENBQUN0SCxLQUFLLEVBQUUsT0FBTzZCLDZCQUFDZ0csZ0JBQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRTNKLElBQUksRUFBQztZQUFTLEVBQUc7WUFFMUUsT0FDQzBELDZCQUFDcUUsMkJBQWtCLENBQUM2QixRQUFRO2NBQUM5RyxLQUFLLEVBQUV5RztZQUFZLEdBQy9DN0Y7Y0FBU3FDLFNBQVMsRUFBQztZQUFjLEdBQ2hDckM7Y0FBU3FDLFNBQVMsRUFBQztZQUFlLEdBQ2pDckMsNkJBQUM0RSxlQUFNLE9BQUcsRUFDVjVFLDZCQUFDSiw4QkFBYyxPQUFHLENBQ1QsQ0FDRCxFQUNWSSwwQ0FBUSxDQUNxQjtVQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0E7VUFFTyxhQUhQOztVQUdtQixTQUFVc0MsV0FBVyxDQUFDO1lBQUVDO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRTtjQUNUakgsT0FBTyxDQUFDYSxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdab0csR0FBRyxHQUFHNEQsR0FBRyxDQUFDQyxlQUFlLENBQUM3RCxHQUFHLENBQUM7WUFDOUIsTUFBTU0sR0FBRyxHQUFHN0MsY0FBSyxDQUFDWSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCWixjQUFLLENBQUNxRyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNN0UsTUFBTSxHQUFHcUIsR0FBRyxDQUFDaEIsT0FBTztjQUMxQkwsTUFBTSxDQUFDekcsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSXlHLE1BQU0sQ0FBQzhFLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQy9FLE1BQU0sQ0FBQ2dGLFdBQVcsR0FBRyxLQUFLO2tCQUMxQmhGLE1BQU0sQ0FBQ2lGLFlBQVksR0FBRyxNQUFLO29CQUMxQmpGLE1BQU0sQ0FBQ2lGLFlBQVksR0FBRyxJQUFJO29CQUMxQmpGLE1BQU0sQ0FBQ2dGLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDakUsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ3ZDO2NBQUtxQyxTQUFTLEVBQUM7WUFBYyxHQUM1QnJDO2NBQU9nRSxRQUFRO2NBQUMwQyxPQUFPLEVBQUM7WUFBVSxHQUNqQzFHO2NBQVF1QyxHQUFHLEVBQUVBLEdBQUc7Y0FBRWpHLElBQUksRUFBQyxXQUFXO2NBQUN1RyxHQUFHLEVBQUVBO1lBQUcsRUFBSSxxREFFeEMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBO1VBQ0E7VUFDTSxTQUFVOEQsb0JBQW9CO1lBQ25DLE1BQU07Y0FBRTlHO1lBQUssQ0FBRSxHQUFHLCtCQUFrQixHQUFFO1lBRXRDLE9BQU9HLDZCQUFDOEMsa0JBQVE7Y0FBQ2hDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQ2hDLFVBQVUsQ0FBQytJO1lBQW9CLEVBQUk7VUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEE7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVUMsUUFBUTtZQUN2QixNQUFNO2NBQUVoSCxLQUFLO2NBQUVZLEtBQUs7Y0FBRXFHO1lBQU8sQ0FBRSxHQUFHLCtCQUFrQixHQUFFO1lBQ3RELE1BQU0sQ0FBQ2hHLE9BQU8sRUFBRWlHLFVBQVUsQ0FBQyxHQUFHL0csY0FBSyxDQUFDQyxRQUFRLENBQVMsU0FBUyxDQUFDO1lBQy9ELE1BQU0rRyxNQUFNLEdBQUdoTSxLQUFLLElBQUc7Y0FDdEJBLEtBQUssQ0FBQ2lNLGNBQWMsRUFBRTtjQUN0QkgsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTUksS0FBSyxHQUFHO2NBQ2JDLE9BQU8sRUFBRUMsd0JBQWU7Y0FDeEJDLE9BQU8sRUFBRUMsd0JBQWU7Y0FDeEJDLFlBQVksRUFBRVo7YUFDZDtZQUNELE1BQU1hLElBQUksR0FBR04sS0FBSyxDQUFDcEcsT0FBTyxDQUFDO1lBQzNCLE1BQU0yRyxVQUFVLEdBQUd6TSxLQUFLLElBQUc7Y0FDMUIrTCxVQUFVLENBQUMvTCxLQUFLLENBQUN5RyxhQUFhLENBQUNFLE9BQU8sQ0FBQ3lELElBQUksQ0FBQztZQUM3QyxDQUFDO1lBQ0QsT0FDQ3BGO2NBQUtxQyxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNyQyw2Q0FDQ0EseUNBQUtTLEtBQUssQ0FBQ2lILGFBQWEsQ0FBTSxFQUM5QjFIO2NBQUtxQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNyQyw4Q0FDQ0EsNkJBQUN5Qyx1QkFBVztjQUFDQyxRQUFRLEVBQUU7WUFBQyxHQUN2QjFDLDZCQUFDMkMsa0JBQU07Y0FBQSxhQUFXLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFNkU7WUFBVSxHQUM3Q2hILEtBQUssQ0FBQ2tILFFBQVEsQ0FDUCxFQUNUM0gsNkJBQUMyQyxrQkFBTTtjQUFBLGFBQVcsY0FBYztjQUFDQyxPQUFPLEVBQUU2RTtZQUFVLEdBQ2xEaEgsS0FBSyxDQUFDOEcsWUFBWSxDQUNYLEVBQ1R2SCw2QkFBQzJDLGtCQUFNO2NBQUEsYUFBVyxTQUFTO2NBQUNDLE9BQU8sRUFBRTZFO1lBQVUsR0FDN0NoSCxLQUFLLENBQUNtSCxRQUFRLENBQ1AsQ0FDSSxDQUNMLEVBQ1Y1SCw2QkFBQzJDLGtCQUFNO2NBQUNDLE9BQU8sRUFBRW9FLE1BQU07Y0FBRXJDLE9BQU8sRUFBQztZQUFTLEdBQ3hDbEUsS0FBSyxDQUFDb0gsSUFBSSxDQUNILENBQ0osQ0FDRSxFQUNUN0gsNkJBQUN3SCxJQUFJLE9BQUcsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQTtVQUNBO1VBQ0E7VUFDTSxTQUFVRixlQUFlO1lBQzlCLE1BQU07Y0FBRXpIO1lBQUssQ0FBRSxHQUFHLCtCQUFrQixHQUFFO1lBRXRDLE9BQU9HLDZCQUFDOEMsa0JBQVE7Y0FBQ2hDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQ2hDLFVBQVUsQ0FBQzhKO1lBQVEsRUFBSTtVQUN4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQTtVQUNBO1VBRU0sU0FBVVAsZUFBZTtZQUM5QixNQUFNO2NBQUV2SCxLQUFLO2NBQUVZLEtBQUs7Y0FBRXFHO1lBQU8sQ0FBRSxHQUFHLCtCQUFrQixHQUFFO1lBRXRELE1BQU1nQixLQUFLLEdBQUc7Y0FDYkMsV0FBVyxFQUFFLElBQUk7Y0FDakIsV0FBVyxFQUFFLElBQUk7Y0FDakJDLElBQUksRUFBRSxJQUFJO2NBQ1ZDLE9BQU8sRUFBRSxJQUFJO2NBQ2JDLFdBQVcsRUFBRSxJQUFJO2NBQ2pCQyxHQUFHLEVBQUUsSUFBSTtjQUNUQyxhQUFhLEVBQUU7YUFDZjtZQUNELE9BQ0NwSSw0REFDRUgsS0FBSyxDQUFDaEMsVUFBVSxDQUFDK0osUUFBUSxDQUFDN0ksR0FBRyxDQUFDLENBQUNvRSxJQUFJLEVBQUVrRixLQUFLLEtBQUk7Y0FDOUMsT0FDQ3JJO2dCQUFTdUQsR0FBRyxFQUFFSixJQUFJLENBQUNtRixPQUFPLENBQUNqSixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFBRWdELFNBQVMsRUFBQztjQUEyQixHQUNqRnJDO2dCQUFTcUMsU0FBUyxFQUFDO2NBQXVCLEdBQUV5RixLQUFLLENBQUMzRSxJQUFJLENBQUNvRixLQUFLLENBQUMsQ0FBVyxFQUN4RXZJLDhDQUNDQSw2Q0FDQ0EseUNBQUttRCxJQUFJLENBQUNtRixPQUFPLENBQU0sQ0FDZixFQUNUdEksd0NBQUltRCxJQUFJLENBQUNxRixVQUFVLENBQUssQ0FDZixDQUNEO1lBRVosQ0FBQyxDQUFDLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFZTyxNQUFNQyxlQUFlLEdBQUd6SSxjQUFLLENBQUNzRSxhQUFhLENBQUMsSUFBd0IsQ0FBQztVQUFDL0s7VUFDdEUsTUFBTW1QLGtCQUFrQixHQUFHLE1BQU0xSSxjQUFLLENBQUN3RSxVQUFVLENBQUNpRSxlQUFlLENBQUM7VUFBQ2xQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2IxRTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVZ0gsZUFBZTtZQUM5QixNQUFNO2NBQ0xWLEtBQUs7Y0FDTFksS0FBSyxFQUFFO2dCQUFFSixXQUFXLEVBQUVJO2NBQUs7WUFBRSxDQUM3QixHQUFHLGtDQUFxQixHQUFFO1lBQzNCLE1BQU0sQ0FBQzdHLFNBQVMsRUFBRStPLFlBQVksQ0FBQyxHQUFHM0ksY0FBSyxDQUFDQyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ21GLElBQUksRUFBRTBCLE9BQU8sQ0FBQyxHQUFHOUcsY0FBSyxDQUFDQyxRQUFRLENBQVMsQ0FBQyxDQUFDSixLQUFLLENBQUNoQyxVQUFVLENBQUMrSixRQUFRLENBQUNnQixNQUFNLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUM3RyxNQUFNQyxZQUFZLEdBQUdwSSxLQUFLLENBQUNxSSxRQUFRLEVBQUV6SixPQUFPLENBQUMsSUFBSSxFQUFFUSxLQUFLLENBQUN0QyxRQUFRLENBQUM7WUFDbEUsTUFBTTZCLEtBQUssR0FBRztjQUNiUyxLQUFLO2NBQ0xsQyxRQUFRLEVBQUVrQyxLQUFLLENBQUNsQyxRQUFRO2NBQ3hCL0QsU0FBUztjQUNUK08sWUFBWTtjQUNabEksS0FBSztjQUNMMUcsS0FBSyxFQUFFOEYsS0FBSyxDQUFDbEMsUUFBUSxDQUFDNUQsS0FBSztjQUMzQitNLE9BQU87Y0FDUGlDLFFBQVEsRUFBRS9OLEtBQUssSUFBRztnQkFDakJBLEtBQUssQ0FBQ2lNLGNBQWMsRUFBRTtnQkFDdEIzTCxPQUFPLENBQUMwTixHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUN2QjtjQUNEO2FBQ0E7WUFFRCxNQUFNOUksT0FBTyxHQUFHa0YsSUFBSSxLQUFLLFVBQVUsR0FBR3lCLGtCQUFRLEdBQUdvQywwQkFBZTtZQUNoRSxPQUNDakosMENBQ0NBLDZCQUFDa0osWUFBSztjQUFDNU0sSUFBSSxFQUFDO1lBQU0sR0FBRXVNLFlBQVksQ0FBUyxFQUN6QzdJLDZCQUFDeUkseUJBQWUsQ0FBQ3ZDLFFBQVE7Y0FBQzlHLEtBQUssRUFBRUE7WUFBSyxHQUNyQ1k7Y0FBS3FDLFNBQVMsRUFBQztZQUFpRCxHQUMvRHJDLDZCQUFDRSxPQUFPLE9BQUcsQ0FDTixDQUNvQixDQUN0QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFXLE1BQU0rSSxlQUFlLEdBQUcsQ0FBQztZQUFFRSxRQUFRLEdBQUc7VUFBSyxDQUFFLEtBQUk7WUFDbEUsTUFBTTtjQUFFMUksS0FBSztjQUFFOUMsUUFBUTtjQUFFL0QsU0FBUztjQUFFK08sWUFBWTtjQUFFNU8sS0FBSztjQUFFK007WUFBTyxDQUFFLEdBQUcsK0JBQWtCLEdBQUU7WUFFekYsTUFBTSxDQUFDc0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3JKLGNBQUssQ0FBQ0MsUUFBUSxDQUF5QyxFQUFFLENBQUM7WUFDdEYsTUFBTSxDQUFDcUosT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3ZKLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVKO1lBQUssQ0FBRSxHQUFHLG1DQUFxQixHQUFFO1lBQ3pDLE1BQU0ySixNQUFNLEdBQUcsTUFBTXhPLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDaU0sY0FBYyxFQUFFO2NBQ3RCLE1BQU13QyxjQUFjLEdBQUcsQ0FBQzdQLFNBQVM7Y0FDakMrRCxRQUFRLENBQUNoQyxNQUFNLEVBQUU7Y0FDakJnTixZQUFZLENBQUNjLGNBQWMsQ0FBQztjQUM1QkosU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTUssTUFBTSxHQUFHLE1BQU0xTyxLQUFLLElBQUc7Y0FDNUIsTUFBTWpCLEtBQUssR0FBRyxNQUFNNEQsUUFBUSxDQUFDekIsSUFBSSxFQUFFO2NBQ25DeU0sWUFBWSxDQUFDLEtBQUssQ0FBQztjQUNuQlUsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTXhHLEdBQUcsR0FBRzdDLGNBQUssQ0FBQ1ksTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QjtZQUNDLE1BQU13RCxJQUFJLEdBQUd4SyxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDdkMsTUFBTStQLFFBQVEsR0FBRyxDQUFDL1AsU0FBUyxJQUFJRyxLQUFLO1lBQ3JDLE1BQU13QixPQUFPLEdBQUcsQ0FBQzNCLFNBQVMsR0FBSStQLFFBQVEsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFJLE1BQU07WUFDcEUsTUFBTUMsTUFBTSxHQUFHNU8sS0FBSyxJQUFHO2NBQ3RCQSxLQUFLLENBQUNpTSxjQUFjLEVBQUU7Y0FDdEJzQyxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2hCMUosS0FBSyxDQUFDUCxjQUFjLENBQUN2RixLQUFLLENBQUMsQ0FBQ1EsSUFBSSxDQUFDc1AsUUFBUSxJQUFHO2dCQUMzQy9DLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBRW5CeUMsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNsQixDQUFDLENBQUM7Y0FFRk8sVUFBVSxDQUFDLE1BQUs7Z0JBQ2YsTUFBTW5HLElBQUksR0FBR2QsR0FBRyxDQUFDaEIsT0FBTyxDQUFDa0ksYUFBYSxDQUFDLGtCQUFrQixDQUFDO2dCQUUxRCxNQUFNQyxRQUFRLEdBQUd2SixLQUFLLENBQUN3SixlQUFlO2dCQUN0QyxJQUFJQyxDQUFDLEdBQUcsQ0FBQztnQkFDVCxJQUFJQyxZQUFZO2dCQUNoQixNQUFNQyxRQUFRLEdBQUcxUCxVQUFVLENBQUMyUCxXQUFXLENBQUMsTUFBSztrQkFDNUMxRyxJQUFJLENBQUMxQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7a0JBQ3BDeUIsSUFBSSxDQUFDMUIsU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO2tCQUNoQzJILFVBQVUsQ0FBQyxNQUFLO29CQUNmbkcsSUFBSSxDQUFDMUIsU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUNuQ3lCLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLGFBQWEsQ0FBQztrQkFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFFUndCLElBQUksQ0FBQzJHLFNBQVMsR0FBR04sUUFBUSxDQUFDRSxDQUFDLENBQUM7a0JBQzVCLElBQUlLLElBQUksR0FBRyxHQUFHO2tCQUNkSixZQUFZLEdBQUdFLFdBQVcsQ0FBQyxNQUFLO29CQUMvQixJQUFJRSxJQUFJLEtBQUssR0FBRyxFQUFFO3NCQUNqQkEsSUFBSSxHQUFHLElBQUk7cUJBQ1gsTUFBTSxJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO3NCQUN6QkEsSUFBSSxHQUFHLEtBQUs7cUJBQ1osTUFBTTtzQkFDTkEsSUFBSSxHQUFHLEdBQUc7O29CQUVYNUcsSUFBSSxDQUFDMkcsU0FBUyxHQUFHTixRQUFRLENBQUNFLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBR0ssSUFBSTtrQkFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFDUixJQUFJTCxDQUFDLEtBQUtGLFFBQVEsQ0FBQ3BCLE1BQU0sR0FBRyxDQUFDLEVBQUVzQixDQUFDLEdBQUcsQ0FBQztrQkFDcENBLENBQUMsRUFBRTtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUVSeFAsVUFBVSxDQUFDb1AsVUFBVSxDQUFDLE1BQUs7a0JBQzFCLElBQUlSLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDL0IsQ0FBQyxFQUFFLEtBQUssQ0FBQztjQUNWLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDO1lBQ0QsTUFBTWlCLFFBQVEsR0FBR3BCLE1BQU0sS0FBSyxPQUFPLEdBQUdNLE1BQU0sR0FBR0YsTUFBTTtZQUVyRCxNQUFNaUIsR0FBRyxHQUFHLDhCQUE4Qm5CLE9BQU8sR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBRXhFLE9BQ0N0SjtjQUFTNkMsR0FBRyxFQUFFQSxHQUFHO2NBQUVSLFNBQVMsRUFBRW9JO1lBQUcsR0FDaEN6SztjQUFLcUMsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDckMsNkJBQUMwSyxZQUFLO2NBQUN0QixNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUN6QnBKLDZCQUFDMkMsWUFBTTtjQUFDeUIsSUFBSSxFQUFFQSxJQUFJO2NBQUV4QixPQUFPLEVBQUU0SCxRQUFRO2NBQUVyQixRQUFRLEVBQUVBO1lBQVEsR0FDdkQxSSxLQUFLLENBQUNsRixPQUFPLENBQUMsQ0FDUCxFQUNSb08sUUFBUSxJQUNSM0o7Y0FBS3FDLFNBQVMsRUFBQztZQUE2QixHQUMzQ3JDLDZCQUFDc0Msd0JBQVc7Y0FBQ0MsR0FBRyxFQUFFMUMsS0FBSyxDQUFDbEMsUUFBUSxDQUFDNUQ7WUFBSyxFQUFJLEVBQzFDaUcsNkJBQUMyQyxZQUFNO2NBQUN5QixJQUFJLEVBQUMsTUFBTTtjQUFDeEIsT0FBTyxFQUFFZ0gsTUFBTTtjQUFFakYsT0FBTyxFQUFDO1lBQVMsR0FDcERsRSxLQUFLLENBQUNrSyxJQUFJLENBQ0gsQ0FFVixDQUNJLEVBRUxyQixPQUFPLElBQ1B0SjtjQUFLcUMsU0FBUyxFQUFDO1lBQWUsR0FDN0JyQztjQUFJcUMsU0FBUyxFQUFDO1lBQWlCLEdBQUU1QixLQUFLLENBQUN3SixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQU0sQ0FFaEUsQ0FDUTtVQUVaLENBQUM7VUFBQzFROzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RHRjtVQUNBO1VBRkE7O1VBUU0sU0FBVW1SLEtBQUssQ0FBQztZQUFFdEI7VUFBTSxDQUFjO1lBQzNDLE1BQU13QixTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3pCLE1BQU0sQ0FBQztZQUN2RCxNQUFNMEIsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDRCxRQUFRLENBQUN6QixNQUFNLENBQUM7WUFFckQsTUFBTSxDQUFDMkIsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsc0JBQVEsRUFBQ04sU0FBUyxFQUFFRSxPQUFPLEVBQUUxQixNQUFNLEtBQUssT0FBTyxDQUFDO1lBQ2hHLE1BQU0rQixXQUFXLEdBQUdGLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR04sT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQ3JMO2NBQUtxQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENyQywyQ0FBTyxHQUFHc0wsZUFBZSxFQUFFLENBQVEsRUFDbkN0TDtjQUFNcUMsU0FBUyxFQUFDO1lBQWtCLE9BQVMsRUFDM0NyQywyQ0FBTyxHQUFHbUwsV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFEQTs7VUFFQSxNQUFNO1lBQUVsTCxRQUFRO1lBQUVvRztVQUFTLENBQUUsR0FBR3JHLGNBQUs7VUFFL0IsU0FBVXVMLFFBQVEsQ0FBQ1gsU0FBa0IsRUFBRUUsT0FBZ0IsRUFBRVUsS0FBSyxHQUFHLElBQUk7WUFDMUUsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHekwsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ29HLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXNGLFVBQTBCO2NBQzlCLElBQUlILEtBQUssRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQztjQUNyQixJQUFJZCxTQUFTLEVBQUU7Z0JBQ2RlLFVBQVUsR0FBR3RCLFdBQVcsQ0FBQyxNQUFLO2tCQUM3QnFCLE9BQU8sQ0FBQ0UsUUFBUSxJQUFHO29CQUNsQixPQUFPQSxRQUFRLEdBQUcsQ0FBQztrQkFDcEIsQ0FBQyxDQUFDO2dCQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2YsU0FBUyxDQUFDLENBQUM7WUFFZnZFLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXlFLE9BQU8sRUFBRTtnQkFDWlksT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1osT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUixPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwib24iLCJsaXN0ZW4iLCJzdG9yZVJlYWR5Iiwid2lkZ2V0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwiZXhwb3J0cyIsIlJlY29yZGVyIiwiRXZlbnRzIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwiZXJyb3IiLCJ2YWxpZCIsImF1ZGlvIiwiYW5hbHlzZXIiLCJ0cmFuc2NyaXB0aW9uIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJnbG9iYWxUaGlzIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsInRyaWdnZXIiLCJjYXRjaCIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlc29sdmUiLCJyZWNvcmQiLCJFcnJvciIsInN0YXJ0Iiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsInVuZGVmaW5lZCIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhdWRpb01hbmFnZXIiLCJWb2ljZSIsInZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImlzUmVhZHkiLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsInRvcGljcyIsIm1hcCIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJRdWl6IiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJUYWJzSGVhZGVyIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsIlRvcGljSGVhZGVyQWN0aW9ucyIsIkljb25CdXR0b24iLCJ1cGRhdGVWaWV3Iiwib25BY3Rpb25DbGljayIsInZpZXciLCJxdWl6Iiwib3JhbCIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3RpdmVDb250cm9sIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsImVzcmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsImZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsImluZGV4Iiwic3ViamVjdCIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsInVzZVJlY29yZGVyQ29udGV4dCIsInNldFJlY29yZGluZyIsImxlbmd0aCIsImFsZXJ0Q29udGVudCIsIm9yYWxUZXh0Iiwib25TdWJtaXQiLCJsb2ciLCJSZWNvcmRpbmdCdXR0b24iLCJBbGVydCIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsIm9uU3RvcCIsInNob3dTZW5kIiwib25TZW5kIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJUaW1lciIsInNlbmQiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3JlY29yZGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCJ0cy92aWV3cy9UYWJzSGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCJ0cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCJ0cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC9BdWRpb1BsYXllci50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL2NvbXBldGVuY2llcy50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvYW5hbHlzaXMvc3R1ZGVudC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3RlYWNoZXIudHN4IiwidHMvdmlld3Mvb3JhbC9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL29yYWwvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC9yZWNvcmRpbmcudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19