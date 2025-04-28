System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/ailearn-app@0.3.32/entities/assignments/activities/base", "@aimpact/chat-sdk@1.4.4/chat-component.code", "@aimpact/chat-sdk@1.4.4/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.4.4/widgets/markdown", "@aimpact/ailearn-app@0.3.32/config", "@aimpact/ailearn-app@0.3.32/components/icons", "@aimpact/ailearn-app@0.3.32/components/ui", "@aimpact/ailearn-app@0.3.32/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, SpokenActivityView, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    SpokenActivityView: void 0,
    MobileView: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_5 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk144Session) {
      dependency_6 = _aimpactChatSdk144Session;
    }, function (_aimpactAilearnApp0332EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp0332EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk144ChatComponentCode) {
      dependency_8 = _aimpactChatSdk144ChatComponentCode;
    }, function (_aimpactChatSdk144Voice) {
      dependency_9 = _aimpactChatSdk144Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk144WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk144WidgetsMarkdown;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_15 = _aimpactAilearnApp0332Config;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_aimpactAilearnApp0332ComponentsHooks) {
      dependency_18 = _aimpactAilearnApp0332ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_19 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_21 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_22 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_23 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/components/hooks', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/tabs', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/assignments/spoken.widget');
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
        hash: 3527387062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              return _views.SpokenActivityView;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1290593143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _beyond_context = require("beyond_context");
          var _audioDatabase = require("./audio-database");
          /*bundle*/ //@ts-ignore

          class StoreManager extends _base.BaseStoreManager {
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
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
            #audio;
            get audio() {
              return this.#audio;
            }
            #ready;
            get ready() {
              return this.#ready && super.ready;
            }
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              this.#voice = new _voice.Voice();
              this.#recorder = new _recorder.Recorder();
            }
            cleanAudio() {
              this.deleteAudio();
            }
            async load(assigmentId, activityId) {
              super.load(assigmentId, activityId);
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              const audio = await (0, _audioDatabase.getAudioBlob)(name);
              this.#audio = audio?.blob;
              this.#ready = true;
              this.triggerEvent();
            }
            async loadTest(draftId, activityId) {
              super.loadTest(draftId, activityId);
              this.#modelId = draftId;
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              const audio = await (0, _audioDatabase.getAudioBlob)(name);
              this.#audio = audio?.blob;
              this.#ready = true;
              this.triggerEvent();
            }
            sendSpoken = async audio => {
              const params = {
                audio,
                activityId: this.activityId
              };
              if (this.testing) params.draftId = this.#modelId;else params.assignmentId = this.assignmentId;
              const response = await this.model.publishSpoken({
                params,
                type: 'spoken'
              });
              //@ts-ignore
              await this.model.load();
              //await this.tracking.activities.load({ id: this.activityId });
              this.deleteAudio();
              return response;
            };
            async record() {
              return this.#recorder.record();
            }
            async stop() {
              await this.#recorder.stop();
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              this.#audio = this.#recorder.audio;
              this.triggerEvent();
              await (0, _audioDatabase.saveAudioBlob)(name, this.#recorder.audio);
            }
            deleteAudio() {
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              this.#audio = undefined;
              this.triggerEvent();
              (0, _audioDatabase.deleteAudioBlob)(name);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/analysis/desktop
      ****************************************/

      ims.set('./views/analysis/desktop', {
        hash: 2879778301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopAnalysis = DesktopAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          function DesktopAnalysis() {
            const {
              store,
              screenSize
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize,
              options: {
                md: _react.default.createElement(_feedback.Feedback, null),
                lg: _react.default.createElement(_feedback.Feedback, null)
              }
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 519534033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-app/config");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _transcription = require("./transcription");
          function Feedback() {
            const {
              store,
              texts,
              audio
            } = (0, _context.useSpokenContext)();
            const {
              id
            } = store.model;
            const {
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_config.default.params.apis[_config.default.params.project]}/assignments/${store.assignmentId}/activities/${id}/tracking/${userId}/audio?date=${feedback.date}`;
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.audio), _react.default.createElement(_ui.AudioPlayer, {
              url: audioUrl
            }), _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
              className: "feedback__container"
            }, keys.map((property, index) => {
              const item = feedback.assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container hidden-xs"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement(_icons.AppIcon, {
                className: "visible-xs assessment__analysis-icon",
                icon: icon
              }), _react.default.createElement("h6", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 2862672246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          function Analysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const screenSize = (0, _hooks.useMediaQuery)();
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopAnalysis, null) : _react.default.createElement(_mobile.MobileAnalysis, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/analysis/mobile
      ***************************************/

      ims.set('./views/analysis/mobile', {
        hash: 2190610202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileAnalysis = MobileAnalysis;
          var _config = require("@aimpact/ailearn-app/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _context = require("../context");
          var _feedback = require("./feedback");
          function MobileAnalysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const {
              assignmentId,
              id
            } = store.model;
            const audioUrl = `${_config.default.params.apis[_config.default.params.project]}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/analysis/transcription
      **********************************************/

      ims.set('./views/analysis/transcription', {
        hash: 692852811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcription = Transcription;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _collapsible = require("pragmate-ui/collapsible");
          function Transcription() {
            const {
              store,
              screenSize,
              texts
            } = (0, _context.useSpokenContext)();
            const feedback = store.model.data.attempts[0];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: ['xs', 'sm', 'md'].includes(screenSize),
              ternary: true,
              options: {
                true: _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription)),
                false: _react.default.createElement(_collapsible.CollapsibleContainer, {
                  open: true
                }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription))
              }
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/aside
      ****************************************/

      ims.set('./views/components/aside', {
        hash: 2385574452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _information = require("./information");
          /*bundle*/
          function Aside() {
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/audio-player
      ***********************************************/

      ims.set('./views/components/audio-player', {
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

      /**********************************************
      INTERNAL MODULE: ./views/components/information
      **********************************************/

      ims.set('./views/components/information', {
        hash: 513427005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentInformation = ContentInformation;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          /*bundle*/
          function ContentInformation() {
            const {
              store,
              texts
            } = (0, _context.useSpokenContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const Item = ({
              item
            }) => {
              return _react.default.createElement("div", {
                className: "aside__item-list"
              }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.subject));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover activity",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.activity), _react.default.createElement(_tabs.Tab, null, texts.criteria)), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            }), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              as: "div",
              className: "list-unstyled",
              items: store.model.getSpecs().criteria,
              control: Item
            }))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1825610531,
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
        hash: 2620558913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _desktop = require("./analysis/desktop");
          var _aside = require("./components/aside");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
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
              className: "content-activity--desktop-container   main-chat-layout spoken-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: "scrolleable-child no-p"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_desktop.DesktopAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 1802278743,
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
        hash: 2504108101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivityView = SpokenActivityView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function SpokenActivityView({
            store
          }) {
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [error, setError] = _react.default.useState(undefined);
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const {
              items,
              ready,
              audio
            } = store;
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks.useStore)(store, ['change']);
            _react.default.useEffect(() => {
              setView(!!store.model?.data ? 'analysis' : 'recording');
            }, [ready]);
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
              screenSize,
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
        hash: 1165617326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _config = require("@aimpact/ailearn-app/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _mobile = require("./analysis/mobile");
          var _information = require("./components/information");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs2 = require("./tabs");
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
            const {
              assignmentId,
              id
            } = store.model;
            //const audioUrl = `${config.params.apis[config.params.project]}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const audioUrl = `${_config.default.params.apis[_config.default.params.project]}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "activity-tabs",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs2.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_mobile.MobileAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 2903183929,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
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
            const checkMicrophonePermission = async () => {
              try {
                if (!navigator.permissions) {
                  console.warn('Permissions API is not supported in this browser.');
                  return false; // Default to no permission if API is unavailable
                }
                const permissionStatus = await navigator.permissions.query({
                  name: 'microphone'
                });
                return permissionStatus.state === 'granted';
              } catch (error) {
                console.error(`Error checking microphone permission: ${error}`);
                return false; // Default to no permission in case of an error
              }
            };
            const playAction = async () => {
              try {
                setFetching(true);
                const hasPermission = await checkMicrophonePermission();
                if (!hasPermission) {
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
              if (!store.hasCredits) {
                setShowCoinsModal(true);
                return;
              }
              playAction();
            };
            const closeModal = () => setShowCoinsModal(false);
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
            }), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins
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
        hash: 2813178619,
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
            return _react.default.createElement(_react.default.Fragment, null, error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.review) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.existingAudio)) : null, _react.default.createElement("div", {
              className: "spoken__container"
            }, _react.default.createElement("div", {
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
            }, texts.assessments.processingAudio))))));
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
        hash: 3044781854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../components/audio-player");
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
                console.error(e);
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
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/components/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/components/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/components/information",
        "from": "ContentInformation",
        "name": "ContentInformation"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "SpokenActivityView",
        "name": "SpokenActivityView"
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
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/components/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/components/audio-player').AudioPlayer : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'SpokenActivityView') && _export("SpokenActivityView", SpokenActivityView = require ? require('./views/index').SpokenActivityView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNwb2tlbkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInJlYWR5IiwibW9kZWxJZCIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsImxvYWRUZXN0IiwiZHJhZnRJZCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInJlY29yZCIsInN0b3AiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIm1kIiwiRmVlZGJhY2siLCJsZyIsIl9pY29ucyIsIl9jb25maWciLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsInRleHRzIiwiZmVlZGJhY2siLCJkYXRhIiwiYXR0ZW1wdHMiLCJhdWRpb1VybCIsImFwaXMiLCJwcm9qZWN0IiwiZGF0ZSIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsInVybCIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJJdGVtIiwic3ViamVjdCIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsInNldFZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0QXVkaW8iLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInVzZVN0b3JlIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJjaGVja01pY3JvcGhvbmVQZXJtaXNzaW9uIiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uU3RhdHVzIiwicXVlcnkiLCJzdGF0ZSIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiaGFzQ3JlZGl0cyIsImNsb3NlTW9kYWwiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZGVza3RvcC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL3RyYW5zY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFN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