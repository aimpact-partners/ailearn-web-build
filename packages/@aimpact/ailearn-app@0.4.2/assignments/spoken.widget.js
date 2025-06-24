System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    ActivityView: void 0,
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_5 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_8 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactChatSdk154Voice) {
      dependency_9 = _aimpactChatSdk154Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactAilearnApp042Config) {
      dependency_15 = _aimpactAilearnApp042Config;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_17 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_18 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_19 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_20 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_21 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_22 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_23 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_24 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_25 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/components/hooks', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/icons', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/assignments/spoken.widget');
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
        hash: 2560799468,
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
              return _views.ActivityView;
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
        hash: 2849985028,
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
            isStore = true;
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
        hash: 1494190621,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _transcription = require("./transcription");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.assignmentId}/activities/${id}/progress/${userId}/audio?date=${feedback.date}`;
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
        hash: 308185010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileAnalysis = MobileAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          function MobileAnalysis() {
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
        hash: 293530314,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function ActivityView({
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
        hash: 784417116,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _mobile = require("./analysis/mobile");
          var _information = require("./components/information");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs2 = require("./tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${assignmentId}/activities/${id}/progress/${userId}/audio`;
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
        "from": "ActivityView",
        "name": "ActivityView"
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
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/index').ActivityView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJyZWFkeSIsIm1vZGVsSWQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJWb2ljZSIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiYXNzaWdtZW50SWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhc3NpZ25tZW50SWQiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkVGVzdCIsImRyYWZ0SWQiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJtb2RlbCIsInB1Ymxpc2hTcG9rZW4iLCJyZWNvcmQiLCJzdG9wIiwiX3JlYWN0IiwiX2ZlZWRiYWNrIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkRlc2t0b3BBbmFseXNpcyIsInNjcmVlblNpemUiLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInVzZXJJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJtZCIsIkZlZWRiYWNrIiwibGciLCJfaWNvbnMiLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsIl93cmFwcGVyIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsImRhdGUiLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsImFuYWx5c2lzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJUcmFuc2NyaXB0aW9uIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwicmVwbGFjZSIsIkFwcEljb24iLCJfaG9va3MiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJBbmFseXNpcyIsImFsZXJ0Q29udGVudCIsImdldFNwZWNzIiwidGFzayIsInVzZU1lZGlhUXVlcnkiLCJpbmNsdWRlcyIsIk1vYmlsZUFuYWx5c2lzIiwiX2NvbGxhcHNpYmxlIiwiRnJhZ21lbnQiLCJ0ZXJuYXJ5IiwidHJ1ZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0cmFuc2NyaXB0IiwiQ29sbGFwc2libGVDb250ZW50IiwidHJhbnNjcmlwdGlvbiIsImZhbHNlIiwib3BlbiIsIl9pbmZvcm1hdGlvbiIsIkFzaWRlIiwiQ29udGVudEluZm9ybWF0aW9uIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFya2Rvd24iLCJfbGlzdCIsIl90YWJzIiwiSXRlbSIsInN1YmplY3QiLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiY29udGVudCIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hc2lkZSIsIl9yZWNvcmRpbmciLCJEZXNrdG9wVmlldyIsInZpZXciLCJzZXRWaWV3Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEF1ZGlvIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJSZWNvcmRpbmdDb250cm9sIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInNldEVycm9yIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJ1c2VTdG9yZSIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiUHJvdmlkZXIiLCJNb2JpbGVWaWV3IiwiX3RhYnMyIiwidGFicyIsIl9tb2RhbCIsIl9lcnJvck1vZGFsIiwiUmVjb3JkaW5nQnV0dG9uIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNob3dTZW5kIiwibWVzc2FnZSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJlIiwiY2hlY2tNaWNyb3Bob25lUGVybWlzc2lvbiIsIm5hdmlnYXRvciIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvblN0YXR1cyIsInF1ZXJ5Iiwic3RhdGUiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImhhc0NyZWRpdHMiLCJjbG9zZU1vZGFsIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiQ29pbnNNb2RhbCIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX2FsZXJ0IiwiX3RpbWVyIiwiX2J1dHRvbiIsIl9yZXN1bHQiLCJjbHMiLCJidXR0b25TcGVjcyIsIkFsZXJ0IiwiYXNzZXNzbWVudHMiLCJyZXZpZXciLCJUaW1lciIsIlJlY29yZGluZ1Jlc3VsdCIsInByb2Nlc3NpbmdBdWRpbyIsInN1YnRpdGxlIiwiaW50cm8iLCJfYXVkaW9QbGF5ZXIiLCJvblNlbmQiLCJhdWRpb0Vycm9yIiwib25DbGVhbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsInJlY29yZEFnYWluIiwic2VuZCIsInVzZVJlY29yZGluZyIsIlJlYWN0IiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJvbkNoYW5nZSIsInJlZG8iLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9hdWRpby1kYXRhYmFzZS50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1B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