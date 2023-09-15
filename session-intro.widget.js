System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@1.0.0/model/wrapper", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_7 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl9kYXlqcyIsIlJlY29yZGVyIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwidHJpZ2dlciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsIkVycm9yIiwiZGVmYXVsdCIsInN0YXJ0Iiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsIlZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwibG9nIiwibGFuZ3VhZ2UiLCJsYW5nIiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2F1ZGlvUGxheWVyIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsInVzZUVmZmVjdCIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIl9kZWZhdWx0IiwiX2xpbmsiLCJfaWNvbnMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIl90b3BpY0FjdGlvbnMiLCJIZWFkZXIiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVZpc2liaWxpdHkiLCJoZWFkZXIiLCJ0aXRsZXMiLCJUb3BpY0hlYWRlckFjdGlvbnMiLCJJY29uQnV0dG9uIiwidXBkYXRlVmlldyIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiYWN0aW9ucyIsInNlbGVjdGlvbiIsInNwb2tlbiIsIl9zcGlubmVyIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfQ29udGVudE1hbmFnZXIiLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3RpdmVDb250cm9sIiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsImVzcmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX2Zvcm0iLCJfdGltZXIiLCJfQXVkaW9QbGF5ZXIiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJvblN0b3AiLCJzaG93U2VuZCIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwiVGltZXIiLCJzZW5kIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9yZWNvcmRlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9Db250ZW50TWFuYWdlci50c3giLCIvdHMvdmlld3MvVGFic0hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9saW5rcy50c3giLCIvdHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvdG9waWMtZGV0YWlsLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3RvcGljLWFjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vQXVkaW9QbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy90ZWFjaGVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VB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