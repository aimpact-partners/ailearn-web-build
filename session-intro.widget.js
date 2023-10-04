System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/ailearn-app@0.0.2/model/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.2/assessments/selection.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.2/config", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/preload", "pragmate-ui@0.0.37/alert"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp002ModelWrapper) {
      dependency_12 = _aimpactAilearnApp002ModelWrapper;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_aimpactAilearnApp002AssessmentsSelectionCode) {
      dependency_14 = _aimpactAilearnApp002AssessmentsSelectionCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_16 = _pragmateUi0037Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_19 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp002Config) {
      dependency_20 = _aimpactAilearnApp002Config;
    }, function (_pragmateUi0037Link) {
      dependency_21 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Icons) {
      dependency_22 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Spinner) {
      dependency_23 = _pragmateUi0037Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Preload) {
      dependency_25 = _pragmateUi0037Preload;
    }, function (_pragmateUi0037Alert) {
      dependency_26 = _pragmateUi0037Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/session-intro",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/assessments/selection.code', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@bgroup/media-manager/audio-player', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/link', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/spinner', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/preload', dependency_25], ['pragmate-ui/alert', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.2/session-intro.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/session-intro.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIm9uIiwibGlzdGVuIiwic3RvcmVSZWFkeSIsIndpZGdldCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJfY29yZSIsIl9kYXlqcyIsIlJlY29yZGVyIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwidHJpZ2dlciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsIkVycm9yIiwiZGVmYXVsdCIsInN0YXJ0Iiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NoYXQiLCJfd3JhcHBlciIsIl92b2ljZSIsIl93cmFwcGVyMiIsIl9yZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJsZXNzb24iLCJ0b3BpYyIsIm1vZGVsIiwibGlua3MiLCJhdWRpb01hbmFnZXIiLCJBdWRpb01hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJ2b2ljZSIsIlZvaWNlIiwiY2hhdCIsIkFwcFdyYXBwZXIiLCJjdXJyZW50Q2hhdCIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJyZWNvcmRlciIsImlzVG9waWMiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJwcm9jZXNzIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwibGFuZ3VhZ2UiLCJsYW5nIiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY3MiLCJtYXAiLCIjcHJvY2VzcyIsIkFpTGVhcm5XcmFwcGVyIiwic2Vzc2lvbk1vZGVsIiwic2Vzc2lvbkFzc2Vzc21lbnQiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2NvbnRlbnQiLCJfc2VsZWN0aW9uIiwiX2hvb2tzIiwiX3Nwb2tlbiIsIkNvbnRlbnRNYW5hZ2VyIiwiYWN0aXZlQ29udHJvbCIsInVzZUxlc3NvbkludHJvQ29udGV4dCIsInNldE1vZGVsIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJDb250cm9sIiwiY3JlYXRlRWxlbWVudCIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsIl9jb21wb25lbnRzIiwiX3BsYXlhYmxlIiwiX21hcmtkb3duIiwiX2NvbmZpZyIsIl9saW5rcyIsIkNvbnRlbnQiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJ1c2VFZmZlY3QiLCJnZXRBdWRpbyIsInNyYyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJfZGVmYXVsdCIsIl9saW5rIiwiX2ljb25zIiwiVG9waWNEZXRhaWwiLCJ0aXRsZSIsIkljb24iLCJpY29uIiwiTGVzc29uSW50cm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJUYWJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJfdG9waWNBY3Rpb25zIiwiSGVhZGVyIiwic2V0U2VsZWN0ZWQiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyIiwidGl0bGVzIiwiVG9waWNIZWFkZXJBY3Rpb25zIiwiSWNvbkJ1dHRvbiIsInVwZGF0ZVZpZXciLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImFjdGlvbnMiLCJzZWxlY3Rpb24iLCJzcG9rZW4iLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9Db250ZW50TWFuYWdlciIsIl9wcmVsb2FkIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcmVsb2FkIiwiUHJvdmlkZXIiLCJ3aWR0aCIsImZldGNoaW5nIiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl90ZWFjaGVyIiwiX3N0dWRlbnQiLCJfY29tcGV0ZW5jaWVzIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiRnJhZ21lbnQiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJfYWxlcnQiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2NvbnRleHQyIiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiX3RpbWVyIiwiX0F1ZGlvUGxheWVyIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsIm9uUGxheSIsInJlY29yZGluZ1N0YXRlIiwib25TdG9wIiwic2hvd1NlbmQiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIlRpbWVyIiwic2VuZCIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvcmVjb3JkZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL1RhYnNIZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZW50L3RvcGljLWRldGFpbC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIvVGFiQnV0dG9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci90b3BpYy1hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL0F1ZGlvUGxheWVyLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9hbmFseXNpcy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vYW5hbHlzaXMvdGVhY2hlci50c3giLCIvdHMvdmlld3Mvc3Bva2VuL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3JlY29yZGluZy50c3giLCIvdHMvdmlld3Mvc3Bva2VuL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9zcG9rZW4vdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0Es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