System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.2.10/i18n.ts", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, Aside, AudioPlayer, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_9 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReactive1112Model) {
      dependency_10 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_11 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk130Voice) {
      dependency_12 = _aimpactChatSdk130Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_13 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_14 = _aimpactAilearnApp0210I18nTs;
    }, function (_react2) {
      dependency_15 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_17 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_18 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_20 = _aimpactAilearnApp0210Config;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_21 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_22 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_23 = _aimpactAilearnApp0210ComponentsHooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_24 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_25 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_26 = _pragmateUi100Beta6Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@aimpact/chat-sdk/chat-component.code', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@aimpact/media-manager/recorder', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@aimpact/ailearn-sdk/tracking', dependency_13], ['@aimpact/ailearn-app/i18n.ts', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/alert', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['@aimpact/ailearn-app/components/hooks', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/modal', dependency_26]]);
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
        hash: 2741409973,
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
            #assessment;
            get assessment() {
              return this.#assessment;
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
        hash: 4139376006,
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
            const keys = Object.keys(store.model.data);
            return _react.default.createElement(_react.default.Fragment, null, keys.map((property, index) => {
              const item = store.model.data[property];
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
        hash: 3332996010,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX2NoYXRDb21wb25lbnQiLCJfbW9kZWwiLCJfcmVjb3JkZXIiLCJfdm9pY2UiLCJfdHJhY2tpbmciLCJfaTE4biIsIl9hdWRpb0RhdGFiYXNlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsIml0ZW1zIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJhc3Nlc3NtZW50IiwicGFyYW1zVXJpIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmFja2luZyIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsImNsZWFuQXVkaW8iLCJkZWxldGVBdWRpbyIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZSIsInRyYWNlIiwic2VuZFNwb2tlbiIsInBhcmFtcyIsInJlc3BvbnNlIiwicHVibGlzaFNwb2tlbiIsInJlY29yZCIsInN0b3AiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImtleXMiLCJPYmplY3QiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwicmVwbGFjZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJmZWVkYmFjayIsIl9mZWVkYmFjayIsIkFuYWx5c2lzIiwiZGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInVzZXJJZCIsImFsZXJ0Q29udGVudCIsInJlc291cmNlcyIsInNwZWNzIiwidGFzayIsIl91aSIsIl9tYXJrZG93biIsIkFzaWRlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiTWFya2Rvd24iLCJjb250ZW50IiwiQXVkaW9QbGF5ZXIiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9jb21wb25lbnRzIiwiX2FuYWx5c2lzIiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIl90YWJzIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRBdWRpbyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJmYWxzZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRFcnJvciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJNb2JpbGVWaWV3IiwiX2NvbmZpZyIsIl90YWJzMiIsImF1ZGlvVXJsIiwiYXBpcyIsImFpbGVhcm4iLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJUYWJzIiwiVGFiIiwidGFicyIsImFuYWx5c2lzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImVuc3VyZVBsYXkiLCJlbnN1cmVDcmVkaXRzIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX2FsZXJ0IiwiX3RpbWVyIiwiX2J1dHRvbiIsIl9yZXN1bHQiLCJjbHMiLCJidXR0b25TcGVjcyIsIkFsZXJ0IiwiYXNzZXNzbWVudHMiLCJyZXZpZXciLCJUaW1lciIsIlJlY29yZGluZ1Jlc3VsdCIsInByb2Nlc3NpbmdBdWRpbyIsInN1YnRpdGxlIiwiaW50cm8iLCJfYXVkaW9QbGF5ZXIiLCJvblNlbmQiLCJhdWRpb0Vycm9yIiwib25DbGVhbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsInJlY29yZEFnYWluIiwic2VuZCIsInVzZVJlY29yZGluZyIsIlJlYWN0IiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJvbkNoYW5nZSIsInJlZG8iLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9hdWRpby1kYXRhYmFzZS50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQTtVQUNBLE1BQU1DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxPQUFLO1lBQ2hDQyxVQUFVO1lBRVZDLFlBQUE7Y0FDQyxLQUFLLENBQUMsZUFBZSxDQUFD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