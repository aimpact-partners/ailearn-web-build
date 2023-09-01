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
        hash: 870700308,
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
        hash: 1223599554,
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
        hash: 1541918136,
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
        hash: 2278858508,
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
            const [content, setContent] = _react.default.useState('teacher');
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
              "data-view": "teacher",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              "data-view": "student",
              onClick: changeView
            }, texts.feedback), _react.default.createElement(_components.Button, {
              "data-view": "competencies",
              onClick: changeView
            }, texts.competencies))), _react.default.createElement(_components.Button, {
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
        hash: 1537792609,
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
                let i = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVIsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRU4sSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1ULE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVOLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVixLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXR0cmlidXRlcyIsImdldCIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNoYXRJbnRybyIsImV4cG9ydHMiLCJSZWNvcmRlciIsIkV2ZW50cyIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwidHJhbnNjcmlwdGlvbiIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJ0cmlnZ2VyIiwiY2F0Y2giLCJjb25zb2xlIiwibWVzc2FnZSIsInJlamVjdCIsImZpbmFsbHkiLCJyZXNvbHZlIiwicmVjb3JkIiwiRXJyb3IiLCJzdGFydCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwid2FybiIsImVuZHRpbWUiLCJCbG9iIiwidHlwZSIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJ1bmRlZmluZWQiLCJSZWFjdGl2ZU1vZGVsIiwibGVzc29uIiwidG9waWMiLCJtb2RlbCIsImxpbmtzIiwiQXVkaW9NYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYXVkaW9NYW5hZ2VyIiwiVm9pY2UiLCJ2b2ljZSIsImNoYXQiLCJBcHBXcmFwcGVyIiwiY3VycmVudENoYXQiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwicmVjb3JkZXIiLCJpc1RvcGljIiwiYXNzZXNzbWVudCIsInN0b3JlUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJBc3Nlc3NtZW50IiwibG9hZFJlYWR5IiwibG9hZCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwibG9hZExlc3NvbiIsImxvYWRUb3BpYyIsIkxlc3NvbiIsImlkIiwiaXNSZWFkeSIsInByb21pc2VzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwidG9waWNzIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZW5kQXNzZXNzbWVudCIsInNwZWNzIiwidG9waWNJZCIsImxlc3NvbklkIiwicHVibGlzaCIsImUiLCJDb250ZW50TWFuYWdlciIsInN0b3JlIiwiYWN0aXZlQ29udHJvbCIsInNldE1vZGVsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRyb2wiLCJDb250ZW50IiwiUXVpeiIsImFzc2Vzc21lbnRzIiwicXVlc3Rpb25zIiwiT3JhbEFzc3Nlc3NtZW50IiwiVGFic0hlYWRlciIsInRleHRzIiwidmlzaWJsZSIsInBhbmVzUmVmIiwidXNlUmVmIiwiZWxlbWVudHMiLCJjb250ZW50IiwiaGFzIiwic3ludGhlc2lzIiwiaW50cm8iLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib25TZWxlY3RWaWV3IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJiYWRnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhbmUiLCJjbGFzc05hbWUiLCJBdWRpb1BsYXllciIsInNyYyIsImNyZWF0ZSIsIm9uQ2xpY2siLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwiQnV0dG9uIiwidmFyaWFudCIsIkhlYWRlciIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ0b2dnbGVWaXNpYmlsaXR5IiwidXBkYXRlVmlldyIsImhlYWRlciIsIm9uQWN0aW9uQ2xpY2siLCJ2aWV3IiwiYnV0dG9ucyIsInF1aXoiLCJvcmFsIiwiQnV0dG9uR3JvdXAiLCJJY29uQnV0dG9uIiwic2V0VmlzaWJsZSIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2ZUNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiZXNyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVzZUVmZmVjdCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsInByZWxvYWQiLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJzZXRWaWV3Iiwic2V0Q29udGVudCIsIm9uUmVkbyIsInByZXZlbnREZWZhdWx0Iiwidmlld3MiLCJ0ZWFjaGVyIiwiVGVhY2hlckZlZWRiYWNrIiwic3R1ZGVudCIsIlN0dWRlbnRGZWVkYmFjayIsImNvbXBldGVuY2llcyIsIlZpZXciLCJjaGFuZ2VWaWV3IiwiYW5hbHlzaXNUaXRsZSIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJyZWRvIiwiZmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiaW5kZXgiLCJzdWJqZWN0IiwiZ3JhZGUiLCJldmFsdWF0aW9uIiwiUmVjb3JkZXJDb250ZXh0IiwidXNlUmVjb3JkZXJDb250ZXh0Iiwic2V0UmVjb3JkaW5nIiwibGVuZ3RoIiwiYWxlcnRDb250ZW50Iiwib3JhbFRleHQiLCJvblN1Ym1pdCIsImxvZyIsIlJlY29yZGluZ0J1dHRvbiIsIkFsZXJ0IiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsIm9uUGxheSIsInJlY29yZGluZ1N0YXRlIiwib25TdG9wIiwic2hvd1NlbmQiLCJvblNlbmQiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJpIiwiaW50ZXJ2YWxEb3RzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImRvdHMiLCJvbkFjdGlvbiIsImNscyIsIlRpbWVyIiwic2VuZCIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VUaW1lciIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvcmVjb3JkZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL0NvbnRlbnRNYW5hZ2VyLnRzeCIsInRzL3ZpZXdzL1RhYnNIZWFkZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvbGlua3MudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL29yYWwvY29udGV4dC50c3giLCJ0cy92aWV3cy9vcmFsL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL29yYWwvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=