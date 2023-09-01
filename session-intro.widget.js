System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/form.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp100AssessmentsFormCode) {
      dependency_13 = _aimpactAilearnApp100AssessmentsFormCode;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_15 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp100Config) {
      dependency_18 = _aimpactAilearnApp100Config;
    }, function (_pragmateUi0036Components) {
      dependency_19 = _pragmateUi0036Components;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/form.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/widgets/playable', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/form', dependency_25]]);
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
        hash: 136747673,
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
              return this.#store;
            }
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
        hash: 1433749557,
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
          // import { Uploader, XHRLoader } from '@aimpact/media-manager/uploader';
          // import config from '@aimpact/ailearn-sdk/config';

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
                });
                return;
              }
              this.ready = true;
              this.loadReady = true;
            }
            async load(metadata) {
              if (metadata.lesson) {
                await this.loadLesson(metadata.lesson);
                this.#model = this.#lesson;
              }
              if (metadata.topic) await this.loadTopic(metadata);
              this.#process();
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
        hash: 3692571521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./components/content");
          var _form = require("@aimpact/ailearn-app/assessments/form.code");
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
                return _react.default.createElement(_form.Quiz, {
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

      /******************************************
      INTERNAL MODULE: ./views/components/content
      ******************************************/

      ims.set('./views/components/content', {
        hash: 4287886792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Content;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("@aimpact/chat/shared/components");
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
            }, _react.default.createElement("p", null, intro), _react.default.createElement(_components.AudioPlayer, {
              src: audioUrl,
              create: "false"
            })), _react.default.createElement("section", {
              className: "badges__container badges__container--right"
            }, _react.default.createElement("label", {
              "data-element": "synthesis",
              onClick: onSelectView,
              className: "badge badge__intro active"
            }, texts.elements.synthesis), _react.default.createElement("label", {
              "data-element": "content",
              onClick: onSelectView,
              className: "badge badge__intro"
            }, texts.elements.content)), _react.default.createElement("section", {
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

      /****************************************
      INTERNAL MODULE: ./views/components/links
      ****************************************/

      ims.set('./views/components/links', {
        hash: 1874038341,
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

      /*****************************************
      INTERNAL MODULE: ./views/components/player
      *****************************************/

      ims.set('./views/components/player', {
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

      /***********************************************
      INTERNAL MODULE: ./views/components/topic-detail
      ***********************************************/

      ims.set('./views/components/topic-detail', {
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
        hash: 1844934523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _TabButton = require("./TabButton");
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
            return _react.default.createElement("header", {
              className: "intro__header"
            }, _react.default.createElement("section", {
              className: "header__title flex-container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "class",
              className: "circle lg logo"
            }), _react.default.createElement("h3", null, header.title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_TabButton.TabButton, {
              label: header.introduction,
              onClick: onActionClick,
              value: "content"
            }), store.isTopic && _react.default.createElement(_TabButton.TabButton, {
              label: assessments.quiz,
              onClick: onActionClick,
              value: "quiz"
            }), _react.default.createElement(_TabButton.TabButton, {
              label: assessments.oral,
              onClick: onActionClick,
              value: "oral"
            }), _react.default.createElement(_icons.IconButton, {
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
        hash: 1969586163,
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
            const [ready, setReady] = _react.default.useState(true);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const toggleVisibility = () => setVisible(!visible);
            const [activeControl, setActiveControl] = _react.default.useState('content');
            (0, _hooks2.useBinder)([store], () => setReady(store.ready && store.loadReady));
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
            }, _react.default.createElement(_header.default, null), _react.default.createElement(_ContentManager.ContentManager, null))));
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

      /*******************************************
      INTERNAL MODULE: ./views/oral/analysis/index
      *******************************************/

      ims.set('./views/oral/analysis/index', {
        hash: 68140136,
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
          function Analysis() {
            const {
              store,
              texts,
              setView
            } = (0, _context.useRecorderContext)();
            const [content, setContent] = _react.default.useState('teacher');
            const onRedo = event => {
              event.preventDefault();
              setView('recording');
            };
            const views = {
              teacher: _teacher.TeacherFeedback,
              student: _student.StudentFeedback
            };
            const View = views[content];
            const changeView = event => {
              setContent(event.currentTarget.dataset.view);
            };
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement("h1", null, texts.analysisTitle), _react.default.createElement(_components.Button, {
              "data-view": "teacher",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              "data-view": "student",
              onClick: changeView
            }, texts.feedback)), _react.default.createElement(_components.Button, {
              onClick: onRedo,
              variant: "primary"
            }, texts.redo)), _react.default.createElement(View, null));
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
        hash: 1660227424,
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
        hash: 2073411032,
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
            const alertContent = texts.oralText.replace('%1', store.userName);
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
        hash: 1320402324,
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
                const texts = ['Estamos enviando tu respuesta', 'Estamos transcribiendo el texto', 'Mira que hay mucho que analizar', 'Ya falta poco!'];
                let i = 0;
                const interval = globalThis.setInterval(() => {
                  if (!sending) {
                    clearInterval(interval);
                    return;
                  }
                  text.innerHTML = texts[i];
                  i++;
                }, 10000);
                globalThis.setTimeout(() => {
                  if (sending) setSending(false);
                }, 45000);
              }, 50);
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
            }, "Estamos enviando el formulario")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJSZWNvcmRlciIsIkV2ZW50cyIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwidHJhbnNjcmlwdGlvbiIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJ0cmlnZ2VyIiwiY2F0Y2giLCJjb25zb2xlIiwibWVzc2FnZSIsInJlamVjdCIsImZpbmFsbHkiLCJyZXNvbHZlIiwicmVjb3JkIiwiRXJyb3IiLCJzdGFydCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwid2FybiIsImVuZHRpbWUiLCJCbG9iIiwidHlwZSIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJ1bmRlZmluZWQiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImxpbmtzIiwiQXVkaW9NYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsIkFzc2Vzc21lbnQiLCJsb2FkUmVhZHkiLCJsb2FkIiwicmVhZHkiLCJsb2FkTGVzc29uIiwibG9hZFRvcGljIiwiTGVzc29uIiwiaWQiLCJpc1JlYWR5IiwicHJvbWlzZXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJ0b3BpY3MiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwicmVwbGFjZSIsInNlbmRBc3Nlc3NtZW50Iiwic3BlY3MiLCJ0b3BpY0lkIiwibGVzc29uSWQiLCJwdWJsaXNoIiwiZSIsIkNvbnRlbnRNYW5hZ2VyIiwic3RvcmUiLCJhY3RpdmVDb250cm9sIiwic2V0TW9kZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbCIsIkNvbnRlbnQiLCJRdWl6IiwiYXNzZXNzbWVudHMiLCJxdWVzdGlvbnMiLCJPcmFsQXNzc2Vzc21lbnQiLCJUYWJzSGVhZGVyIiwidGV4dHMiLCJ2aXNpYmxlIiwicGFuZXNSZWYiLCJ1c2VSZWYiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJoYXMiLCJzeW50aGVzaXMiLCJpbnRybyIsImF1ZGlvVXJsIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJvblNlbGVjdFZpZXciLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VzdCIsImJhZGdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFuZSIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwic3JjIiwiY3JlYXRlIiwib25DbGljayIsInJlZiIsIk1hcmtkb3duIiwiUGxheWFibGUiLCJwbGF5ZXIiLCJMaW5rcyIsImNoaWxkcmVuIiwiaXRlbSIsInVyaSIsImJhc2VVcmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJUZXh0VG9TcGVlY2giLCJ0ZXh0IiwiYXVkaW9TcmMiLCJzZXRBdWRpb1NyYyIsImdldEF1ZGlvIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJjb250cm9scyIsIlRvcGljRGV0YWlsIiwidGl0bGUiLCJJY29uIiwiaWNvbiIsIkxlc3NvbkludHJvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25JbnRyb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiVGFiQnV0dG9uIiwibGFiZWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiSGVhZGVyIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVZpc2liaWxpdHkiLCJ1cGRhdGVWaWV3IiwiaGVhZGVyIiwib25BY3Rpb25DbGljayIsInZpZXciLCJxdWl6Iiwib3JhbCIsIkljb25CdXR0b24iLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJwcmVsb2FkIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiaW5kZXgiLCJzdWJqZWN0IiwiZ3JhZGUiLCJldmFsdWF0aW9uIiwiUmVjb3JkZXJDb250ZXh0IiwidXNlUmVjb3JkZXJDb250ZXh0Iiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsIm9uUGxheSIsInJlY29yZGluZ1N0YXRlIiwib25TdG9wIiwic2hvd1NlbmQiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwib25BY3Rpb24iLCJjbHMiLCJUaW1lciIsInNlbmQiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvcmVjb3JkZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsInRzL3ZpZXdzL1RhYnNIZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvbGlua3MudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL29yYWwvY29udGV4dC50c3giLCJ0cy92aWV3cy9vcmFsL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL29yYWwvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19