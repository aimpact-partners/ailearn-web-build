System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/chat.widget", "@aimpact/chat-sdk@1.0.0/voice", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/assessments/form.code", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@1.0.0/config", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form"], function (_export, _context3) {
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
    }, function (_pragmateUi0036Components) {
      dependency_15 = _pragmateUi0036Components;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat/wrapper', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/chat/chat.widget', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/assessments/form.code', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/link', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/spinner', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/alert', dependency_24], ['pragmate-ui/form', dependency_25]]);
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
        hash: 2672389856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentManager = ContentManager;
          var _react = require("react");
          var _context = require("./context");
          var _content = require("./content");
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

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 3991662797,
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
          var _components2 = require("@aimpact/chat/shared/components");
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
            }, _react.default.createElement("p", null, intro), _react.default.createElement(_components2.AudioPlayer, {
              src: audioUrl,
              create: "false"
            })), _react.default.createElement("section", {
              className: "badges__container badges__container--right"
            }, _react.default.createElement(_components.ButtonGroup, {
              selected: 0
            }, _react.default.createElement(_components.Button, {
              "data-element": "synthesis",
              onClick: onSelectView,
              c: true
            }, texts.elements.synthesis), _react.default.createElement(_components.Button, {
              "data-element": "content",
              onClick: onSelectView,
              className: "badge badge__intro"
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
        hash: 4089895575,
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
            console.log(0.1, store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Z0JBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDRixVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDZixTQUFTLENBQUMsQ0FBQztZQUVmdEUsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJd0UsT0FBTyxFQUFFO2dCQUNaWSxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWixPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR08sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1SLE9BQU8sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUVOLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFTixJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ04sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0MiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJtZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDaGF0SW50cm8iLCJleHBvcnRzIiwiUmVjb3JkZXIiLCJFdmVudHMiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInRyYW5zY3JpcHRpb24iLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwidHJpZ2dlciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsIkVycm9yIiwic3RhcnQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsIndhcm4iLCJlbmR0aW1lIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiUmVhY3RpdmVNb2RlbCIsImxlc3NvbiIsInRvcGljIiwibW9kZWwiLCJsaW5rcyIsIkF1ZGlvTWFuYWdlciIsImludHJvZHVjdGlvbiIsImF1ZGlvTWFuYWdlciIsIlZvaWNlIiwidm9pY2UiLCJjaGF0IiwiQXBwV3JhcHBlciIsImN1cnJlbnRDaGF0IiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInJlY29yZGVyIiwiaXNUb3BpYyIsImFzc2Vzc21lbnQiLCJzdG9yZVJlYWR5IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXNzZXNzbWVudCIsImxvYWRSZWFkeSIsImxvYWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImxvYWRMZXNzb24iLCJsb2FkVG9waWMiLCJMZXNzb24iLCJpZCIsImlzUmVhZHkiLCJwcm9taXNlcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsInRvcGljcyIsIm1hcCIsIml0ZW1zIiwidmFsdWUiLCJyZXBsYWNlIiwic2VuZEFzc2Vzc21lbnQiLCJzcGVjcyIsInRvcGljSWQiLCJsZXNzb25JZCIsInB1Ymxpc2giLCJlIiwiQ29udGVudE1hbmFnZXIiLCJzdG9yZSIsImFjdGl2ZUNvbnRyb2wiLCJzZXRNb2RlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250cm9sIiwiQ29udGVudCIsIlF1aXoiLCJhc3Nlc3NtZW50cyIsInF1ZXN0aW9ucyIsIk9yYWxBc3NzZXNzbWVudCIsIlRhYnNIZWFkZXIiLCJ0ZXh0cyIsInZpc2libGUiLCJwYW5lc1JlZiIsInVzZVJlZiIsImVsZW1lbnRzIiwiY29udGVudCIsImhhcyIsInN5bnRoZXNpcyIsImludHJvIiwiYXVkaW9VcmwiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm9uU2VsZWN0VmlldyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYW5lIiwiY2xhc3NOYW1lIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwib25DbGljayIsImMiLCJyZWYiLCJNYXJrZG93biIsIlBsYXlhYmxlIiwicGxheWVyIiwiTGlua3MiLCJsb2ciLCJjaGlsZHJlbiIsIml0ZW0iLCJ1cmkiLCJiYXNlVXJsIiwiTGluayIsImtleSIsImhyZWYiLCJuYW1lIiwiVGV4dFRvU3BlZWNoIiwidGV4dCIsImF1ZGlvU3JjIiwic2V0QXVkaW9TcmMiLCJnZXRBdWRpbyIsImNyZWF0ZUJsb2JBdWRpb0Zyb21UZXh0IiwiY29udHJvbHMiLCJUb3BpY0RldGFpbCIsInRpdGxlIiwiSWNvbiIsImljb24iLCJMZXNzb25JbnRyb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uSW50cm9Db250ZXh0IiwidXNlQ29udGV4dCIsIlRhYkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIkhlYWRlciIsInNldFNlbGVjdGVkIiwidG9nZ2xlVmlzaWJpbGl0eSIsInVwZGF0ZVZpZXciLCJoZWFkZXIiLCJvbkFjdGlvbkNsaWNrIiwidmlldyIsImJ1dHRvbnMiLCJxdWl6Iiwib3JhbCIsIkljb25CdXR0b24iLCJzZXRWaXNpYmxlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZlQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJlc3JlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwicHJlbG9hZCIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJBbmFseXNpcyIsInNldFZpZXciLCJzZXRDb250ZW50Iiwib25SZWRvIiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsInRlYWNoZXIiLCJUZWFjaGVyRmVlZGJhY2siLCJzdHVkZW50IiwiU3R1ZGVudEZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzIiwiVmlldyIsImNoYW5nZVZpZXciLCJhbmFseXNpc1RpdGxlIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInJlZG8iLCJmYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJpbmRleCIsInN1YmplY3QiLCJncmFkZSIsImV2YWx1YXRpb24iLCJSZWNvcmRlckNvbnRleHQiLCJ1c2VSZWNvcmRlckNvbnRleHQiLCJzZXRSZWNvcmRpbmciLCJsZW5ndGgiLCJhbGVydENvbnRlbnQiLCJvcmFsVGV4dCIsIm9uU3VibWl0IiwiUmVjb3JkaW5nQnV0dG9uIiwiQWxlcnQiLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib25QbGF5IiwicmVjb3JkaW5nU3RhdGUiLCJvblN0b3AiLCJzaG93U2VuZCIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50cyIsInByb2Nlc3NNZXNzYWdlcyIsImkiLCJpbnRlcnZhbERvdHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZG90cyIsIm9uQWN0aW9uIiwiY2xzIiwiVGltZXIiLCJzZW5kIiwiaXNSdW5uaW5nIiwiaW5jbHVkZXMiLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9yZWNvcmRlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvQ29udGVudE1hbmFnZXIudHN4IiwidHMvdmlld3MvVGFic0hlYWRlci50c3giLCJ0cy92aWV3cy9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NvbnRlbnQvbGlua3MudHN4IiwidHMvdmlld3MvY29udGVudC9wbGF5ZXIudHN4IiwidHMvdmlld3MvY29udGVudC90b3BpYy1kZXRhaWwudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2hlYWRlci9UYWJCdXR0b24udHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvQXVkaW9QbGF5ZXIudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9jb21wZXRlbmNpZXMudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmFsL2FuYWx5c2lzL3N0dWRlbnQudHN4IiwidHMvdmlld3Mvb3JhbC9hbmFseXNpcy90ZWFjaGVyLnRzeCIsInRzL3ZpZXdzL29yYWwvY29udGV4dC50c3giLCJ0cy92aWV3cy9vcmFsL2luZGV4LnRzeCIsInRzL3ZpZXdzL29yYWwvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL29yYWwvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3Mvb3JhbC90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=