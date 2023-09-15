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
        hash: 2475219492,
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
              console.log(0.2, this.#lesson.language);
              this.voice.lang = this.#lesson.language;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ04sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0MiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJvbiIsImxpc3RlbiIsInN0b3JlUmVhZHkiLCJ3aWRnZXQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVjb3JkZXIiLCJFdmVudHMiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInRyYW5zY3JpcHRpb24iLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwidHJpZ2dlciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsIkVycm9yIiwic3RhcnQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsIndhcm4iLCJlbmR0aW1lIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInJlY29yZGVyIiwiaXNUb3BpYyIsImFzc2Vzc21lbnQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiaXNSZWFkeSIsImxvZyIsImxhbmd1YWdlIiwibGFuZyIsInByb21pc2VzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwidG9waWNzIiwibWFwIiwiQWlMZWFybldyYXBwZXIiLCJzZXNzaW9uTW9kZWwiLCJzZXNzaW9uQXNzZXNzbWVudCIsIml0ZW1zIiwidmFsdWUiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiQ29udGVudE1hbmFnZXIiLCJzdG9yZSIsImFjdGl2ZUNvbnRyb2wiLCJzZXRNb2RlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250cm9sIiwiQ29udGVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJjbGFzc05hbWUiLCJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwicmVmIiwiTWFya2Rvd24iLCJQbGF5YWJsZSIsInBsYXllciIsIkxpbmtzIiwiY2hpbGRyZW4iLCJpdGVtIiwidXJpIiwiYmFzZVVybCIsIkxpbmsiLCJrZXkiLCJocmVmIiwibmFtZSIsIlRleHRUb1NwZWVjaCIsInRleHQiLCJhdWRpb1NyYyIsInNldEF1ZGlvU3JjIiwiZ2V0QXVkaW8iLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsImNvbnRyb2xzIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJpY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJIZWFkZXIiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJUb3BpY0hlYWRlckFjdGlvbnMiLCJJY29uQnV0dG9uIiwidXBkYXRlVmlldyIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiYWN0aW9ucyIsInNlbGVjdGlvbiIsInNwb2tlbiIsInNldFZpc2libGUiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3RpdmVDb250cm9sIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsImVzcmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkFuYWx5c2lzIiwic2V0VmlldyIsInNldENvbnRlbnQiLCJvblJlZG8iLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwidGVhY2hlciIsIlRlYWNoZXJGZWVkYmFjayIsInN0dWRlbnQiLCJTdHVkZW50RmVlZGJhY2siLCJjb21wZXRlbmNpZXMiLCJWaWV3IiwiY2hhbmdlVmlldyIsImFuYWx5c2lzVGl0bGUiLCJmZWVkYmFjayIsImFuYWx5c2lzIiwicmVkbyIsImZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsImluZGV4Iiwic3ViamVjdCIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIlJlY29yZGVyQ29udGV4dCIsInVzZVJlY29yZGVyQ29udGV4dCIsInNldFJlY29yZGluZyIsImxlbmd0aCIsImFsZXJ0Q29udGVudCIsIm9yYWxUZXh0Iiwib25TdWJtaXQiLCJSZWNvcmRpbmdCdXR0b24iLCJBbGVydCIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJvblBsYXkiLCJyZWNvcmRpbmdTdGF0ZSIsIm9uU3RvcCIsInNob3dTZW5kIiwib25TZW5kIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnRzIiwicHJvY2Vzc01lc3NhZ2VzIiwiaSIsImludGVydmFsRG90cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJkb3RzIiwib25BY3Rpb24iLCJjbHMiLCJUaW1lciIsInNlbmQiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3JlY29yZGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCJ0cy92aWV3cy9UYWJzSGVhZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCJ0cy92aWV3cy9jb250ZW50L3BsYXllci50c3giLCJ0cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaGVhZGVyL1RhYkJ1dHRvbi50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL2luZGV4LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL3Nwb2tlbi90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=