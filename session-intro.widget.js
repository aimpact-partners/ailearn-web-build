System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp100AssessmentsSelectionCode) {
      dependency_14 = _aimpactAilearnApp100AssessmentsSelectionCode;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/assessments/selection.code', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@bgroup/media-manager/audio-player', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/spinner', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/alert', dependency_25], ['pragmate-ui/form', dependency_26]]);
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
        hash: 3847813351,
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
          console.log(0.1, _wrapper2.AiLearnWrapper);
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
        hash: 3804375487,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibWV0YWRhdGEiLCJKU09OIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiU3RvcmVNYW5hZ2VyIiwib24iLCJsaXN0ZW4iLCJzdG9yZVJlYWR5Iiwid2lkZ2V0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiV2lkZ2V0IiwiQ2hhdEludHJvIiwiZXhwb3J0cyIsIlJlY29yZGVyIiwiRXZlbnRzIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwiZXJyb3IiLCJ2YWxpZCIsImF1ZGlvIiwiYW5hbHlzZXIiLCJ0cmFuc2NyaXB0aW9uIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJnbG9iYWxUaGlzIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsInRyaWdnZXIiLCJjYXRjaCIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlc29sdmUiLCJyZWNvcmQiLCJFcnJvciIsInN0YXJ0Iiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsInVuZGVmaW5lZCIsImxvZyIsIkFpTGVhcm5XcmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInJlY29yZGVyIiwiaXNUb3BpYyIsImFzc2Vzc21lbnQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiaXNSZWFkeSIsInByb21pc2VzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwidG9waWNzIiwibWFwIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIlRhYnNIZWFkZXIiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiSGVhZGVyIiwic2V0U2VsZWN0ZWQiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiVG9waWNIZWFkZXJBY3Rpb25zIiwiSWNvbkJ1dHRvbiIsInVwZGF0ZVZpZXciLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImFjdGlvbnMiLCJzZWxlY3Rpb24iLCJzcG9rZW4iLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJlc3JlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJBbmFseXNpcyIsInNldFZpZXciLCJzZXRDb250ZW50Iiwib25SZWRvIiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsInRlYWNoZXIiLCJUZWFjaGVyRmVlZGJhY2siLCJzdHVkZW50IiwiU3R1ZGVudEZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzIiwiVmlldyIsImNoYW5nZVZpZXciLCJhbmFseXNpc1RpdGxlIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInJlZG8iLCJmYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJvblN0b3AiLCJzaG93U2VuZCIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwiVGltZXIiLCJzZW5kIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9yZWNvcmRlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvVGFic0hlYWRlci50c3giLCJ0cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwidHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9BdWRpb1BsYXllci50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvc3R1ZGVudC50c3giLCJ0cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCJ0cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCJ0cy92aWV3cy9zcG9rZW4vaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19