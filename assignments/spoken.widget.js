System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.2.10/i18n.ts", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Aside, AudioPlayer, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    DesktopView: void 0,
    View: void 0,
    MobileView: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_8 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReactive1112Model) {
      dependency_9 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk130Voice) {
      dependency_11 = _aimpactChatSdk130Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_12 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_13 = _aimpactAilearnApp0210I18nTs;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_17 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_22 = _aimpactAilearnApp0210ComponentsHooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_23 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_24 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_25 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@aimpact/ailearn-app/i18n.ts', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['@aimpact/ailearn-app/components/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/icons', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/spoken.widget');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./audio-database
      ********************************/
      ims.set('./audio-database', {
        hash: 322848769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.deleteAudioBlob = deleteAudioBlob;
          exports.getAudioBlob = getAudioBlob;
          exports.saveAudioBlob = saveAudioBlob;
          var _dexie = require("dexie");
          // Create the database and table for audio storage
          class AudioDatabase extends _dexie.default {
            audioFiles;
            constructor() {
              super('AudioDatabase');
              this.version(1).stores({
                audioFiles: '++id, name, size, type' // Auto-incrementing ID, name, size, and type fields
              });
              this.audioFiles = this.table('audioFiles');
            }
          }
          // Initialize the database
          const db = new AudioDatabase();
          // Function to save an audio Blob
          async function saveAudioBlob(name, blob) {
            // Check if an audio file with the same name exists
            const existingAudio = await db.audioFiles.where('name').equals(name).first();
            if (existingAudio) {
              // Update the existing audio record
              await db.audioFiles.update(existingAudio.id, {
                size: blob.size,
                type: blob.type,
                blob
              });
              console.log(`Audio with name "${name}" updated (ID: ${existingAudio.id})`);
              return existingAudio.id;
            } else {
              // Add a new audio record
              const id = await db.audioFiles.add({
                name,
                size: blob.size,
                type: blob.type,
                blob
              });
              return id;
            }
          }
          // Function to retrieve an audio Blob by name
          async function getAudioBlob(name) {
            const audio = await db.audioFiles.where('name').equals(name).first();
            if (audio) {
              return audio;
            }
            return undefined;
          }
          // Function to delete an audio Blob by name
          async function deleteAudioBlob(name) {
            try {
              // Retrieve the audio Blob by name
              const audio = await getAudioBlob(name);
              if (!audio) {
                return false; // Return false if the audio is not found
              }
              // Delete the audio Blob from the database
              await db.audioFiles.where('name').equals(name).delete();
              return true; // Return true if the deletion is successful
            } catch (error) {
              console.error(`Failed to delete audio file with name "${name}".`, error);
              return false; // Return false if there was an error
            }
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3286864425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1204249692,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _audioDatabase = require("./audio-database");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #items;
            get items() {
              return this.#items;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            #audioManager = new _chatComponent.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              this.#recorder = new _recorder.Recorder();
              _i18n.globalTexts.on('change', this.triggerEvent);
            }
            cleanAudio() {
              this.deleteAudio();
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
                const audio = await (0, _audioDatabase.getAudioBlob)(name);
                this.#audio = audio?.blob;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            sendSpoken = async audio => {
              const params = {
                audio,
                assignmentId: this.#assignmentId,
                activityId: this.#activityId
              };
              // return;
              const response = await this.model.publishSpoken({
                params,
                type: 'spoken'
              });
              await this.#tracking.activities.load({
                id: this.#activityId
              });
              this.deleteAudio();
              return response;
            };
            async record() {
              return this.#recorder.record();
            }
            async stop() {
              await this.#recorder.stop();
              const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
              this.#audio = this.#recorder.audio;
              this.triggerEvent();
              await (0, _audioDatabase.saveAudioBlob)(name, this.#recorder.audio);
            }
            deleteAudio() {
              const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
              this.#audio = undefined;
              this.triggerEvent();
              (0, _audioDatabase.deleteAudioBlob)(name);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 1698116340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Feedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const keys = Object.keys(store.model.data.attempts[0].assessment);
            return _react.default.createElement(_react.default.Fragment, null, keys.map((property, index) => {
              const item = store.model.data.attempts[0].assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 4079985221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          function Analysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/aside
      *****************************/

      ims.set('./views/aside', {
        hash: 845445861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function Aside() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/audio-player
      ************************************/

      ims.set('./views/audio-player', {
        hash: 1190578037,
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
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2201583942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpokenContext = exports.SpokenContext = void 0;
          var _react = require("react");
          const SpokenContext = exports.SpokenContext = _react.default.createContext({});
          const useSpokenContext = () => _react.default.useContext(SpokenContext);
          exports.useSpokenContext = useSpokenContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 681228393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _analysis = require("./analysis");
          var _aside = require("./aside");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          var _context = require("./context");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const {
              view,
              setView
            } = (0, _context.useSpokenContext)();
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [audio, setAudio] = _react.default.useState(store.audio);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setAudio(store.audio);
            });
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement(_aside.Aside, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 3193748728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3465678857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _context = require("./context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [error, setError] = _react.default.useState(undefined);
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const [audio, setAudio] = _react.default.useState(store.audio);
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setAudio(store.audio);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              fetching: store.fetching,
              items,
              audio: store.audio,
              setView,
              sending,
              view,
              error,
              setError,
              setSending,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const props = {
              store
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopView, {
              ...props
            }) : _react.default.createElement(_mobile.MobileView, {
              ...props
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 2063950675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _analysis = require("./analysis");
          var _context = require("./context");
          var _recording = require("./recording");
          var _config = require("@aimpact/ailearn-app/config");
          var _tabs = require("./tabs");
          var _tabs2 = require("pragmate-ui/tabs");
          /*bundle*/
          function MobileView({
            store
          }) {
            const [items] = (0, _react.useState)(store.items);
            const {
              view,
              texts
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const {
              assignmentId,
              id
            } = store.model;
            console.log(0.2, store.model);
            //const audioUrl = `${config.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs2.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs2.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })))), _react.default.createElement(_tabs2.Tabs, null, _react.default.createElement(_tabs2.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs2.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 420227171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio,
              store
            } = (0, _context.useSpokenContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await store.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const playAction = async event => {
              try {
                setFetching(true);
                if (!hasPermission || hasPermission !== 'true') {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await store.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              _mainLayout.LayoutBroker.ensureCredits(playAction);
            };
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 2308911085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../context");
          var _timer = require("../timer");
          var _button = require("./button");
          var _result = require("./result");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store,
              error
            } = (0, _context.useSpokenContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.review) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.existingAudio)) : null), _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, !audio ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            })) : null, _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processingAudio)))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 957625054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 3141075608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending,
              error,
              setError
            } = (0, _context.useSpokenContext)();
            if (!show) return;
            const onSend = async event => {
              event.preventDefault();
              setSending(true);
              try {
                await store.sendSpoken(audio);
                setView('analysis');
                setSending(false);
              } catch (e) {
                setError(texts.assessments.audioError);
              } finally {
                setSending(false);
              }
            };
            const onClean = () => {
              store.cleanAudio();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audio
            }), _react.default.createElement("footer", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClean
            }, store.globalTexts.actions.recordAgain), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, store.globalTexts.actions.send))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 2475814657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useSpokenContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 2980108176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ButtonTabs({
            selected,
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => {
              setView(event.currentTarget.dataset.view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between mt-15"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: changeView
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.assessments.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.assessments.redo, " ")));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
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

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
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
        "im": "./views/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/audio-player').AudioPlayer : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX2NoYXRDb21wb25lbnQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfdHJhY2tpbmciLCJfaTE4biIsIl9hdWRpb0RhdGFiYXNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsIml0ZW1zIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiVm9pY2UiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJlIiwidHJhY2UiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoU3Bva2VuIiwicmVjb3JkIiwic3RvcCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiRmVlZGJhY2siLCJ1c2VTcG9rZW5Db250ZXh0Iiwia2V5cyIsIk9iamVjdCIsImRhdGEiLCJhdHRlbXB0cyIsImFzc2Vzc21lbnQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImZlZWRiYWNrIiwiX2ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiX3VpIiwiX21hcmtkb3duIiwiQXNpZGUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJNYXJrZG93biIsImNvbnRlbnQiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfYW5hbHlzaXMiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiX3RhYnMiLCJEZXNrdG9wVmlldyIsInZpZXciLCJzZXRWaWV3Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEF1ZGlvIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsImZhbHNlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldEVycm9yIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIk1vYmlsZVZpZXciLCJfY29uZmlnIiwiX3RhYnMyIiwiYXVkaW9VcmwiLCJhcGlzIiwiYWlsZWFybiIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiYW5hbHlzaXMiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImVuc3VyZUNyZWRpdHMiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQTtVQUNBLE1BQU1DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxPQUFLO1lBQ2hDQyxVQUFVO1lBRVZDLFlBQUE7Y0FDQyxLQUFLLENBQUMs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System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.2.10/i18n.ts", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Aside, AudioPlayer, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    DesktopView: void 0,
    View: void 0,
    MobileView: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_8 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReactive1112Model) {
      dependency_9 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk130Voice) {
      dependency_11 = _aimpactChatSdk130Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_12 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_13 = _aimpactAilearnApp0210I18nTs;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_17 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_22 = _aimpactAilearnApp0210ComponentsHooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_23 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_24 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_25 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@aimpact/ailearn-app/i18n.ts', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['@aimpact/ailearn-app/components/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/icons', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/spoken.widget');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./audio-database
      ********************************/
      ims.set('./audio-database', {
        hash: 322848769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.deleteAudioBlob = deleteAudioBlob;
          exports.getAudioBlob = getAudioBlob;
          exports.saveAudioBlob = saveAudioBlob;
          var _dexie = require("dexie");
          // Create the database and table for audio storage
          class AudioDatabase extends _dexie.default {
            audioFiles;
            constructor() {
              super('AudioDatabase');
              this.version(1).stores({
                audioFiles: '++id, name, size, type' // Auto-incrementing ID, name, size, and type fields
              });
              this.audioFiles = this.table('audioFiles');
            }
          }
          // Initialize the database
          const db = new AudioDatabase();
          // Function to save an audio Blob
          async function saveAudioBlob(name, blob) {
            // Check if an audio file with the same name exists
            const existingAudio = await db.audioFiles.where('name').equals(name).first();
            if (existingAudio) {
              // Update the existing audio record
              await db.audioFiles.update(existingAudio.id, {
                size: blob.size,
                type: blob.type,
                blob
              });
              console.log(`Audio with name "${name}" updated (ID: ${existingAudio.id})`);
              return existingAudio.id;
            } else {
              // Add a new audio record
              const id = await db.audioFiles.add({
                name,
                size: blob.size,
                type: blob.type,
                blob
              });
              return id;
            }
          }
          // Function to retrieve an audio Blob by name
          async function getAudioBlob(name) {
            const audio = await db.audioFiles.where('name').equals(name).first();
            if (audio) {
              return audio;
            }
            return undefined;
          }
          // Function to delete an audio Blob by name
          async function deleteAudioBlob(name) {
            try {
              // Retrieve the audio Blob by name
              const audio = await getAudioBlob(name);
              if (!audio) {
                return false; // Return false if the audio is not found
              }
              // Delete the audio Blob from the database
              await db.audioFiles.where('name').equals(name).delete();
              return true; // Return true if the deletion is successful
            } catch (error) {
              console.error(`Failed to delete audio file with name "${name}".`, error);
              return false; // Return false if there was an error
            }
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3286864425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1204249692,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _audioDatabase = require("./audio-database");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #items;
            get items() {
              return this.#items;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            #audioManager = new _chatComponent.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              this.#recorder = new _recorder.Recorder();
              _i18n.globalTexts.on('change', this.triggerEvent);
            }
            cleanAudio() {
              this.deleteAudio();
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
                const audio = await (0, _audioDatabase.getAudioBlob)(name);
                this.#audio = audio?.blob;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            sendSpoken = async audio => {
              const params = {
                audio,
                assignmentId: this.#assignmentId,
                activityId: this.#activityId
              };
              // return;
              const response = await this.model.publishSpoken({
                params,
                type: 'spoken'
              });
              await this.#tracking.activities.load({
                id: this.#activityId
              });
              this.deleteAudio();
              return response;
            };
            async record() {
              return this.#recorder.record();
            }
            async stop() {
              await this.#recorder.stop();
              const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
              this.#audio = this.#recorder.audio;
              this.triggerEvent();
              await (0, _audioDatabase.saveAudioBlob)(name, this.#recorder.audio);
            }
            deleteAudio() {
              const name = `${_session.sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
              this.#audio = undefined;
              this.triggerEvent();
              (0, _audioDatabase.deleteAudioBlob)(name);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 1698116340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Feedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const keys = Object.keys(store.model.data.attempts[0].assessment);
            return _react.default.createElement(_react.default.Fragment, null, keys.map((property, index) => {
              const item = store.model.data.attempts[0].assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 4079985221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          function Analysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/aside
      *****************************/

      ims.set('./views/aside', {
        hash: 845445861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function Aside() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/audio-player
      ************************************/

      ims.set('./views/audio-player', {
        hash: 1190578037,
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
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2201583942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpokenContext = exports.SpokenContext = void 0;
          var _react = require("react");
          const SpokenContext = exports.SpokenContext = _react.default.createContext({});
          const useSpokenContext = () => _react.default.useContext(SpokenContext);
          exports.useSpokenContext = useSpokenContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 681228393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _analysis = require("./analysis");
          var _aside = require("./aside");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          var _context = require("./context");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const {
              view,
              setView
            } = (0, _context.useSpokenContext)();
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [audio, setAudio] = _react.default.useState(store.audio);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setAudio(store.audio);
            });
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement(_aside.Aside, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 3193748728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3465678857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _context = require("./context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [error, setError] = _react.default.useState(undefined);
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const [audio, setAudio] = _react.default.useState(store.audio);
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setAudio(store.audio);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              fetching: store.fetching,
              items,
              audio: store.audio,
              setView,
              sending,
              view,
              error,
              setError,
              setSending,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const props = {
              store
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopView, {
              ...props
            }) : _react.default.createElement(_mobile.MobileView, {
              ...props
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 2063950675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _analysis = require("./analysis");
          var _context = require("./context");
          var _recording = require("./recording");
          var _config = require("@aimpact/ailearn-app/config");
          var _tabs = require("./tabs");
          var _tabs2 = require("pragmate-ui/tabs");
          /*bundle*/
          function MobileView({
            store
          }) {
            const [items] = (0, _react.useState)(store.items);
            const {
              view,
              texts
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const {
              assignmentId,
              id
            } = store.model;
            console.log(0.2, store.model);
            //const audioUrl = `${config.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs2.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs2.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })))), _react.default.createElement(_tabs2.Tabs, null, _react.default.createElement(_tabs2.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs2.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 420227171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio,
              store
            } = (0, _context.useSpokenContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await store.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const playAction = async event => {
              try {
                setFetching(true);
                if (!hasPermission || hasPermission !== 'true') {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await store.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              _mainLayout.LayoutBroker.ensureCredits(playAction);
            };
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 2308911085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../context");
          var _timer = require("../timer");
          var _button = require("./button");
          var _result = require("./result");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store,
              error
            } = (0, _context.useSpokenContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.review) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.existingAudio)) : null), _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, !audio ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            })) : null, _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processingAudio)))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 957625054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 3141075608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending,
              error,
              setError
            } = (0, _context.useSpokenContext)();
            if (!show) return;
            const onSend = async event => {
              event.preventDefault();
              setSending(true);
              try {
                await store.sendSpoken(audio);
                setView('analysis');
                setSending(false);
              } catch (e) {
                setError(texts.assessments.audioError);
              } finally {
                setSending(false);
              }
            };
            const onClean = () => {
              store.cleanAudio();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audio
            }), _react.default.createElement("footer", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClean
            }, store.globalTexts.actions.recordAgain), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, store.globalTexts.actions.send))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 2475814657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useSpokenContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 2980108176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ButtonTabs({
            selected,
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => {
              setView(event.currentTarget.dataset.view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between mt-15"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: changeView
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.assessments.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.assessments.redo, " ")));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
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

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
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
        "im": "./views/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/audio-player').AudioPlayer : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX2NoYXRDb21wb25lbnQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfdHJhY2tpbmciLCJfaTE4biIsIl9hdWRpb0RhdGFiYXNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsIml0ZW1zIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiVm9pY2UiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJlIiwidHJhY2UiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoU3Bva2VuIiwicmVjb3JkIiwic3RvcCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ljb25zIiwiRmVlZGJhY2siLCJ1c2VTcG9rZW5Db250ZXh0Iiwia2V5cyIsIk9iamVjdCIsImRhdGEiLCJhdHRlbXB0cyIsImFzc2Vzc21lbnQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImZlZWRiYWNrIiwiX2ZlZWRiYWNrIiwiQW5hbHlzaXMiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiX3VpIiwiX21hcmtkb3duIiwiQXNpZGUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJNYXJrZG93biIsImNvbnRlbnQiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfYW5hbHlzaXMiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiX3RhYnMiLCJEZXNrdG9wVmlldyIsInZpZXciLCJzZXRWaWV3Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEF1ZGlvIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsImZhbHNlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldEVycm9yIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIk1vYmlsZVZpZXciLCJfY29uZmlnIiwiX3RhYnMyIiwiYXVkaW9VcmwiLCJhcGlzIiwiYWlsZWFybiIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiYW5hbHlzaXMiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImVuc3VyZUNyZWRpdHMiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc2lkZS50c3giLCIvdHMvdmlld3MvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQTtVQUNBLE1BQU1DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxPQUFLO1lBQ2hDQyxVQUFVO1lBRVZDLFlBQUE7Y0FDQyxLQUFLLENBQUMs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