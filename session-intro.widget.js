System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/quiz.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Recorder, AudioPlayer, RecordingButton, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp100AssessmentsQuizCode) {
      dependency_13 = _aimpactAilearnApp100AssessmentsQuizCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Components) {
      dependency_15 = _pragmateUi0036Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp100Config) {
      dependency_19 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0036Link) {
      dependency_20 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Icons) {
      dependency_21 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_22 = _pragmateUi0036Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Alert) {
      dependency_24 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_25 = _pragmateUi0036Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/quiz.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/form', dependency_25]]);
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
        hash: 3834698892,
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
        hash: 467392406,
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
            const {
              store,
              activeControl
            } = (0, _context.useLessonIntroContext)();
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
        hash: 850779747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function Header() {
            const [selected, setSelected] = _react.default.useState('content');
            const {
              visible,
              toggleVisibility,
              updateView,
              store,
              texts: {
                header,
                assessments
              }
            } = (0, _context.useLessonIntroContext)();
            const onActionClick = event => {
              updateView(event.currentTarget.dataset.view);
            };
            const buttons = [_react.default.createElement(_components.Button, {
              onClick: onActionClick,
              "data-view": "content",
              key: "content"
            }, header.introduction)];
            if (store.isTopic) {
              buttons.push(_react.default.createElement(_components.Button, {
                key: "quiz",
                onClick: onActionClick,
                "data-view": "quiz"
              }, assessments.quiz));
            }
            buttons.push(_react.default.createElement(_components.Button, {
              key: "oral",
              onClick: onActionClick,
              "data-view": "oral"
            }, assessments.oral));
            return _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, header.title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.ButtonGroup, {
              selected: selected === 'content' ? 0 : 1
            }, buttons), _react.default.createElement(_icons.IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7Y0FDckIsSUFBSWQsU0FBUyxFQUFFO2dCQUNkZSxVQUFVLEdBQUd0QixXQUFXLENBQUMsTUFBSztrQkFDN0JxQixPQUFPLENBQUNFLFFBQVEsSUFBRztvQkFDbEIsT0FBT0EsUUFBUSxHQUFHLENBQUM7a0JBQ3BCLENBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNGLFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNmLFNBQVMsQ0FBQyxDQUFDO1lBRWZ2RSxTQUFTLENBQUMsTUFBSztjQUNkLElBQUl5RSxPQUFPLEVBQUU7Z0JBQ1pZLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNaLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVIsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1ULE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVOLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVixLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJSZWNvcmRlciIsIkV2ZW50cyIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwidHJhbnNjcmlwdGlvbiIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJ0cmlnZ2VyIiwiY2F0Y2giLCJjb25zb2xlIiwibWVzc2FnZSIsInJlamVjdCIsImZpbmFsbHkiLCJyZXNvbHZlIiwicmVjb3JkIiwiRXJyb3IiLCJzdGFydCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwid2FybiIsImVuZHRpbWUiLCJCbG9iIiwidHlwZSIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJ1bmRlZmluZWQiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImxpbmtzIiwiQXVkaW9NYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY3MiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJRdWl6IiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJUYWJzSGVhZGVyIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsInVwZGF0ZVZpZXciLCJoZWFkZXIiLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImJ1dHRvbnMiLCJxdWl6Iiwib3JhbCIsIkljb25CdXR0b24iLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJlc3JlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJBbmFseXNpcyIsInNldFZpZXciLCJzZXRDb250ZW50Iiwib25SZWRvIiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsInRlYWNoZXIiLCJUZWFjaGVyRmVlZGJhY2siLCJzdHVkZW50IiwiU3R1ZGVudEZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzIiwiVmlldyIsImNoYW5nZVZpZXciLCJhbmFseXNpc1RpdGxlIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInJlZG8iLCJmYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwibG9nIiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJvblN0b3AiLCJzaG93U2VuZCIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwiVGltZXIiLCJzZW5kIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9yZWNvcmRlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvVGFic0hlYWRlci50c3giLCJ0cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwidHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL29yYWwvY29udGV4dC50c3giLCJ0cy92aWV3cy9vcmFsL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL29yYWwvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=