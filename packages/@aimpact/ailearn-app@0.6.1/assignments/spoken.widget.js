System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.6.1/entities/assignments/activities/base", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/chat-sdk@1.5.5/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.8/components", "react@18.3.1", "pragmate-ui@1.0.8/alert", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "@aimpact/ailearn-app@0.6.1/config", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_5 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp061EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp061EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_8 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactChatSdk155Voice) {
      dependency_9 = _aimpactChatSdk155Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi108Alert) {
      dependency_13 = _pragmateUi108Alert;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_aimpactAilearnApp061Config) {
      dependency_15 = _aimpactAilearnApp061Config;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_17 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_18 = _aimpactAilearnApp061ModelWrapper;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_19 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Collapsible) {
      dependency_20 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108List) {
      dependency_21 = _pragmateUi108List;
    }, function (_pragmateUi108Tabs) {
      dependency_22 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Icons) {
      dependency_23 = _pragmateUi108Icons;
    }, function (_pragmateUi108Modal) {
      dependency_24 = _pragmateUi108Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/shared/hooks', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/tabs', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/assignments/spoken.widget');
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
        hash: 1362850241,
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
        hash: 2904905676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _context = require("../context");
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
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.assignmentId}/activities/${id}/progress/${userId}/audio?date=${feedback.date}`;
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", {
              className: "activity__content-container"
            }, _react.default.createElement("h6", null, texts.analysis.audio), _react.default.createElement(_ui.AudioPlayer, {
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
        hash: 1843538367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _react = require("react");
          var _feedback = require("./feedback");
          var _mobile = require("./mobile");
          function Analysis() {
            const screenSize = (0, _hooks.useMediaQuery)();
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_feedback.Feedback, null) : _react.default.createElement(_mobile.MobileAnalysis, null));
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
        hash: 351813387,
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
        hash: 4167575110,
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
              className: "aside__activity activity-content"
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
        hash: 1586908753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentInformation = ContentInformation;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _context = require("../context");
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
            }, _react.default.createElement("h5", {
              className: "mt-1"
            }, texts.aside.title), _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.activity), _react.default.createElement(_tabs.Tab, null, texts.criteria)), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            }), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              as: "div",
              className: "list-unstyled objectives-list",
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
        hash: 3521700128,
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
        hash: 3166668473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _feedback = require("./analysis/feedback");
          var _aside = require("./components/aside");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const {
              view
            } = (0, _context.useSpokenContext)();
            const cls = `scrolleable-child main-container ${view === 'analysis' ? 'analysis-view' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container assessment-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_feedback.Feedback, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })));
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
        hash: 1152730810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 3677681683,
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
        hash: 1112318652,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "spoken__container"
            }, _react.default.createElement("header", {
              className: "recording__header"
            }, _react.default.createElement("h2", {
              className: "p1"
            }, texts.title)), error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "success",
              variant: "success",
              icon: "info"
            }, _react.default.createElement("h4", {
              className: "p2"
            }, texts.assessments.review.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.assessments.review.text)) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info",
              icon: "info"
            }, _react.default.createElement("span", {
              className: "p2"
            }, texts.assessments.existingAudio))) : null, _react.default.createElement("div", {
              className: "recording__container flex-container flex-center "
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
        hash: 2387951913,
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
              className: "flex-container space-between btn-group-container"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJyZWFkeSIsIm1vZGVsSWQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJWb2ljZSIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiYXNzaWdtZW50SWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhc3NpZ25tZW50SWQiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkVGVzdCIsImRyYWZ0SWQiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJtb2RlbCIsInB1Ymxpc2hTcG9rZW4iLCJyZWNvcmQiLCJzdG9wIiwiX3JlYWN0IiwiX2ZlZWRiYWNrIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkRlc2t0b3BBbmFseXNpcyIsInNjcmVlblNpemUiLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInVzZXJJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJtZCIsIkZlZWRiYWNrIiwibGciLCJfaWNvbnMiLCJfdWkiLCJfd3JhcHBlciIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsImRhdGUiLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsImFuYWx5c2lzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJUcmFuc2NyaXB0aW9uIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwicmVwbGFjZSIsIkFwcEljb24iLCJfaG9va3MiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsImFsZXJ0Q29udGVudCIsImdldFNwZWNzIiwidGFzayIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiYXNpZGUiLCJ0aXRsZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rlc2t0b3AiLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl90YWJzMiIsInRhYnMiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwiZSIsImNoZWNrTWljcm9waG9uZVBlcm1pc3Npb24iLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25TdGF0dXMiLCJxdWVyeSIsInN0YXRlIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImVuc3VyZVBsYXkiLCJoYXNDcmVkaXRzIiwiY2xvc2VNb2RhbCIsIm9uQWN0aW9uIiwib25DbG9zZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsIkNvaW5zTW9kYWwiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwidGV4dCIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiLy90cy9hdWRpby1kYXRhYmFzZS50cyIsIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiLy90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi8vdHMvdmlld3MvYW5hbHlzaXMvdHJhbnNjcmlwdGlvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5mb3JtYXRpb24udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbW9iaWxlLnRzeCIsIi8vdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvL3RzL3ZpZXdzL3JlY29yZGluZy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiLy90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvL3RzL3ZpZXdzL3RhYnMudHN4IiwiLy90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUE7VUFDQSxNQUFNQyxhQUFjLFNBQVFGLE1BQUEsQ0FBQUcsT0FBSztZQUNoQ0MsVUFBVTtZQUVWQyxZQUFBO2NBQ0MsS0FBSyxDQUFDLGVBQWUsQ0FBQztjQUN0QixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUN0QkgsVUFBVSxFQUFFLHdCQUF3QixDQUFDO2VBQ3JDLENBQUM7Y0FDRixJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDM0M7O1VBWUQ7VUFDQSxNQUFNQyxFQUFFLEdBQUcsSUFBSVAsYUFBYSxFQUFFO1VBRTlCO1VBQ08sZUFBZVEsYUFBYUEsQ0FBQ0MsSUFBWSxFQUFFQyxJQUFVO1lBQzNEO1lBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQU1KLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNLLEtBQUssRUFBRTtZQUU1RSxJQUFJSCxhQUFhLEVBQUU7Y0FDbEI7Y0FDQSxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ2EsTUFBTSxDQUFDSixhQUFhLENBQUNLLEVBQUcsRUFBRTtnQkFDN0NDLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO2dCQUNmQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFBSTtnQkFDZlI7ZUFDQSxDQUFDO2NBQ0ZTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQlgsSUFBSSxrQkFBa0JFLGFBQWEsQ0FBQ0ssRUFBRSxHQUFHLENBQUM7Y0FDMUUsT0FBT0wsYUFBYSxDQUFDSyxFQUFHO2FBQ3hCLE1BQU07Y0FDTjtjQUNBLE1BQU1BLEVBQUUsR0FBRyxNQUFNVCxFQUFFLENBQUNMLFVBQVUsQ0FBQ21CLEdBQUcsQ0FBQztnQkFDbENaLElBQUk7Z0JBQ0pRLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO2dCQUNmQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFBSTtnQkFDZlI7ZUFDQSxDQUFDO2NBRUYsT0FBT00sRUFBRTs7VUFFWDtVQUVBO1VBQ08sZUFBZU0sWUFBWUEsQ0FBQ2IsSUFBWTtZQUM5QyxNQUFNYyxLQUFLLEdBQUcsTUFBTWhCLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNLLEtBQUssRUFBRTtZQUNwRSxJQUFJUyxLQUFLLEVBQUU7Y0FDVixPQUFPQSxLQUFLOztZQUdiLE9BQU9DLFNBQVM7VUFDakI7VUFFQTtVQUNPLGVBQWVDLGVBQWVBLENBQUNoQixJQUFZO1lBQ2pELElBQUk7Y0FDSDtjQUNBLE1BQU1jLEtBQUssR0FBRyxNQUFNRCxZQUFZLENBQUNiLElBQUksQ0FBQztjQUV0QyxJQUFJLENBQUNjLEtBQUssRUFBRTtnQkFDWCxPQUFPLEtBQUssQ0FBQyxDQUFDOztjQUdmO2NBQ0EsTUFBTWhCLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNpQixNQUFNLEVBQUU7Y0FFdkQsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNiLENBQUMsT0FBT0MsS0FBSyxFQUFFO2NBQ2ZSLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDLDBDQUEwQ2xCLElBQUksSUFBSSxFQUFFa0IsS0FBSyxDQUFDO2NBQ3hFLE9BQU8sS0FBSyxDQUFDLENBQUM7O1VBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGQSxJQUFBQyxXQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQThCLEtBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsTUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxNQUFBLEdBQUFoQyxPQUFBO1VBQ087VUFBVSxNQUNYaUMsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBRyxJQUFJQSxDQUFBO2NBQ0hsQixXQUFBLENBQUFtQixZQUFZLENBQUNDLEtBQUssRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBakIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCRCxJQUFBa0IsUUFBQSxHQUFBbkQsT0FBQTtVQUVBLElBQUFvRCxLQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXFELGNBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxTQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELGVBQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsY0FBQSxHQUFBekQsT0FBQTtVQUdPLFdBVFA7O1VBU2lCLE1BQU9xQyxZQUFhLFNBQVFlLEtBQUEsQ0FBQU0sZ0JBQWdCO1lBZ0I1REMsT0FBTyxHQUFHLElBQUk7WUFDZCxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxVQUFXO1lBRVgsQ0FBQUMsWUFBYSxHQUFHLElBQUlULGNBQUEsQ0FBQVUsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJRCxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFFLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUExQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBMkMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLElBQUksS0FBSyxDQUFDQSxLQUFLO1lBQ2xDO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUFoRSxZQUFBO2NBQ0MsS0FBSyxDQUFDb0QsZUFBQSxDQUFBYSxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN2QixJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlWLE1BQUEsQ0FBQWlCLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQU4sUUFBUyxHQUFHLElBQUlWLFNBQUEsQ0FBQWlCLFFBQVEsRUFBRTtZQUNoQztZQUVBQyxVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDQyxXQUFXLEVBQUU7WUFDbkI7WUFFQSxNQUFNN0IsSUFBSUEsQ0FBQzhCLFdBQVcsRUFBRWQsVUFBVTtjQUNqQyxLQUFLLENBQUNoQixJQUFJLENBQUM4QixXQUFXLEVBQUVkLFVBQVUsQ0FBQztjQUVuQyxNQUFNbkQsSUFBSSxHQUFHLEdBQUd5QyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUksQ0FBQzVELEVBQUUsSUFBSSxJQUFJLENBQUM2RCxZQUFZLElBQUksSUFBSSxDQUFDakIsVUFBVSxFQUFFO2NBQ2hGLE1BQU1yQyxLQUFLLEdBQUcsTUFBTSxJQUFBaUMsY0FBQSxDQUFBbEMsWUFBWSxFQUFDYixJQUFJLENBQUM7Y0FDdEMsSUFBSSxDQUFDLENBQUFjLEtBQU0sR0FBR0EsS0FBSyxFQUFFYixJQUFJO2NBQ3pCLElBQUksQ0FBQyxDQUFBd0QsS0FBTSxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDWSxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxPQUFPLEVBQUVwQixVQUFVO2NBQ2pDLEtBQUssQ0FBQ21CLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFcEIsVUFBVSxDQUFDO2NBQ25DLElBQUksQ0FBQyxDQUFBTyxPQUFRLEdBQUdhLE9BQU87Y0FFdkIsTUFBTXZFLElBQUksR0FBRyxHQUFHeUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUM1RCxFQUFFLElBQUksSUFBSSxDQUFDNkQsWUFBWSxJQUFJLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtjQUNoRixNQUFNckMsS0FBSyxHQUFHLE1BQU0sSUFBQWlDLGNBQUEsQ0FBQWxDLFlBQVksRUFBQ2IsSUFBSSxDQUFDO2NBQ3RDLElBQUksQ0FBQyxDQUFBYyxLQUFNLEdBQUdBLEtBQUssRUFBRWIsSUFBSTtjQUN6QixJQUFJLENBQUMsQ0FBQXdELEtBQU0sR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ1ksWUFBWSxFQUFFO1lBQ3BCO1lBRUFHLFVBQVUsR0FBRyxNQUFNMUQsS0FBSyxJQUFHO2NBRTFCLE1BQU0yRCxNQUFNLEdBQWlCO2dCQUFFM0QsS0FBSztnQkFBRXFDLFVBQVUsRUFBRSxJQUFJLENBQUNBO2NBQVUsQ0FBRTtjQUVuRSxJQUFJLElBQUksQ0FBQ3BCLE9BQU8sRUFBRTBDLE1BQU0sQ0FBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBYixPQUFRLENBQUMsS0FDNUNlLE1BQU0sQ0FBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWTtjQUU1QyxNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO2dCQUFFSCxNQUFNO2dCQUFFaEUsSUFBSSxFQUFFO2NBQVEsQ0FBRSxDQUFDO2NBQzNFLE1BQU0sSUFBSSxDQUFDa0UsS0FBSyxDQUFDeEMsSUFBSSxFQUFFO2NBRXZCO2NBQ0EsSUFBSSxDQUFDNkIsV0FBVyxFQUFFO2NBQ2xCLE9BQU9VLFFBQVE7WUFDaEIsQ0FBQztZQUVELE1BQU1HLE1BQU1BLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBdEIsUUFBUyxDQUFDc0IsTUFBTSxFQUFFO1lBQy9CO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQTtjQUNULE1BQU0sSUFBSSxDQUFDLENBQUF2QixRQUFTLENBQUN1QixJQUFJLEVBQUU7Y0FDM0IsTUFBTTlFLElBQUksR0FBRyxHQUFHeUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUM1RCxFQUFFLElBQUksSUFBSSxDQUFDNkQsWUFBWSxJQUFJLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtjQUNoRixJQUFJLENBQUMsQ0FBQXJDLEtBQU0sR0FBRyxJQUFJLENBQUMsQ0FBQXlDLFFBQVMsQ0FBQ3pDLEtBQUs7Y0FDbEMsSUFBSSxDQUFDdUQsWUFBWSxFQUFFO2NBQ25CLE1BQU0sSUFBQXRCLGNBQUEsQ0FBQWhELGFBQWEsRUFBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBdUQsUUFBUyxDQUFDekMsS0FBSyxDQUFDO1lBQ2hEO1lBRUFrRCxXQUFXQSxDQUFBO2NBQ1YsTUFBTWhFLElBQUksR0FBRyxHQUFHeUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUM1RCxFQUFFLElBQUksSUFBSSxDQUFDNkQsWUFBWSxJQUFJLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtjQUNoRixJQUFJLENBQUMsQ0FBQXJDLEtBQU0sR0FBR0MsU0FBUztjQUN2QixJQUFJLENBQUNzRCxZQUFZLEVBQUU7Y0FDbkIsSUFBQXRCLGNBQUEsQ0FBQS9CLGVBQWUsRUFBQ2hCLElBQUksQ0FBQztZQUN0Qjs7VUFDQXdDLE9BQUEsQ0FBQWIsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IRCxJQUFBb0QsTUFBQSxHQUFBekYsT0FBQTtVQUdBLElBQUEwRixTQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFHQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBRU0sU0FBVTZGLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFMUQsS0FBSztjQUFFMkQ7WUFBVSxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNoRCxNQUFNO2NBQUVDLFdBQVcsRUFBRUMsUUFBUTtjQUFFaEYsRUFBRSxFQUFFaUY7WUFBTSxDQUFFLEdBQUcvQyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUk7WUFFakUsT0FDQ1ksTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0MsR0FDcERYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRVIsVUFBVTtjQUNyQlMsT0FBTyxFQUFFO2dCQUNSQyxFQUFFLEVBQUVmLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFRLE9BQUc7Z0JBQ2hCQyxFQUFFLEVBQUVqQixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNULFNBQUEsQ0FBQWUsUUFBUTs7WUFDYixFQUNBLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQUUsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE0RyxHQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBOEcsY0FBQSxHQUFBOUcsT0FBQTtVQUNNLFNBQVV5RyxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRXRFLEtBQUs7Y0FBRTRFLEtBQUs7Y0FBRXZGO1lBQUssQ0FBRSxHQUFHLElBQUFtRSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ2xELE1BQU07Y0FBRTlFO1lBQUUsQ0FBRSxHQUFHa0IsS0FBSyxDQUFDa0QsS0FBSztZQUMxQixNQUFNO2NBQUVwRSxFQUFFLEVBQUVpRjtZQUFNLENBQUUsR0FBRy9DLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSTtZQUMxQyxNQUFNbUMsUUFBUSxHQUFHN0UsS0FBSyxDQUFDa0QsS0FBSyxDQUFDNEIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU1DLFFBQVEsR0FBRyxHQUFHTixRQUFBLENBQUFPLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGdCQUFnQm5GLEtBQUssQ0FBQzJDLFlBQVksZUFBZTdELEVBQUUsYUFBYWlGLE1BQU0sZUFBZWMsUUFBUSxDQUFDTyxJQUFJLEVBQUU7WUFDN0ksTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQUksQ0FBQ1IsUUFBUSxDQUFDVSxVQUFVLENBQUM7WUFFN0MsT0FDQ2pDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXFCLEdBQ3ZDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLWSxLQUFLLENBQUNZLFFBQVEsQ0FBQ25HLEtBQUssQ0FBTSxFQUMvQmlFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBZ0IsV0FBVztjQUFDQyxHQUFHLEVBQUVWO1lBQVEsRUFBSSxFQUM5QjFCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1csY0FBQSxDQUFBZ0IsYUFBYSxPQUFHLENBQ1osRUFDTnJDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsY0FDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLWSxLQUFLLENBQUNZLFFBQVEsQ0FBQ0ksTUFBTSxDQUFNLEVBQ2hDdEMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENvQixJQUFJLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEVBQUVDLEtBQUssS0FBSTtjQUM3QixNQUFNQyxJQUFJLEdBQUduQixRQUFRLENBQUNVLFVBQVUsQ0FBQ08sUUFBUSxDQUFDO2NBRTFDLE1BQU1HLElBQUksR0FBRyxTQUFTRCxJQUFJLENBQUNFLE1BQU0sRUFBRTtjQUNuQyxPQUNDNUMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtnQkFBU21DLEdBQUcsRUFBRUgsSUFBSSxDQUFDekgsSUFBSSxDQUFDNkgsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQUVuQyxTQUFTLEVBQUM7Y0FBMkIsR0FDOUVYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Z0JBQVNDLFNBQVMsRUFBQztjQUFpQyxHQUNuRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUSxNQUFBLENBQUE2QixPQUFPO2dCQUFDcEMsU0FBUyxFQUFDLDJCQUEyQjtnQkFBQ2dDLElBQUksRUFBRUE7Y0FBSSxFQUFJLENBQ3BELEVBQ1YzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGtCQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGlCQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNRLE1BQUEsQ0FBQTZCLE9BQU87Z0JBQUNwQyxTQUFTLEVBQUMsc0NBQXNDO2dCQUFDZ0MsSUFBSSxFQUFFQTtjQUFJLEVBQUksRUFDeEUzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtnQyxJQUFJLENBQUN6SCxJQUFJLENBQU0sQ0FDWixFQUNUK0UsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxZQUFJZ0MsSUFBSSxDQUFDbkIsUUFBUSxDQUFLLENBQ2IsQ0FDRDtZQUVaLENBQUMsQ0FBQyxDQUNHLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBeUIsTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBMEksT0FBQSxHQUFBMUksT0FBQTtVQUVNLFNBQVUySSxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU03QyxVQUFVLEdBQUcsSUFBQTJDLE1BQUEsQ0FBQUcsYUFBYSxHQUFFO1lBQ2xDLE9BQ0NuRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQyxHQUNuRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3lDLFFBQVEsQ0FBQy9DLFVBQVUsQ0FBQyxHQUFHTCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNULFNBQUEsQ0FBQWUsUUFBUSxPQUFHLEdBQUdoQixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1QyxPQUFBLENBQUFJLGNBQWMsT0FBRyxDQUNqRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFyRCxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFFTSxTQUFVOEksY0FBY0EsQ0FBQTtZQUM3QixPQUNDckQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0MsR0FDcERYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFRLE9BQUcsQ0FDUDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFoQixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFLQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUVBLElBQUErSSxZQUFBLEdBQUEvSSxPQUFBO1VBQ00sU0FBVThILGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFM0YsS0FBSztjQUFFMkQsVUFBVTtjQUFFaUI7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdkQsTUFBTWlCLFFBQVEsR0FBRzdFLEtBQUssQ0FBQ2tELEtBQUssQ0FBQzRCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUU3QyxPQUNDekIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDdUMsUUFBUSxDQUFDL0MsVUFBVSxDQUFDO2NBQ2xEbUQsT0FBTztjQUNQMUMsT0FBTyxFQUFFO2dCQUNSMkMsSUFBSSxFQUNIekQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSSxvQkFBb0IsUUFDcEIxRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFLLGlCQUFpQixRQUNqQjNELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUMwQixVQUFVLENBQU0sQ0FDakIsRUFDcEI1RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFPLGtCQUFrQixRQUFFdEMsUUFBUSxDQUFDdUMsYUFBYSxDQUFzQixDQUVsRTtnQkFFREMsS0FBSyxFQUNKL0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSSxvQkFBb0I7a0JBQUNNLElBQUk7Z0JBQUEsR0FDekJoRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFLLGlCQUFpQixRQUNqQjNELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUMwQixVQUFVLENBQU0sQ0FDakIsRUFDcEI1RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFPLGtCQUFrQixRQUFFdEMsUUFBUSxDQUFDdUMsYUFBYSxDQUFzQjs7WUFHbkUsRUFDQSxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUE5RCxNQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQTBKLFlBQUEsR0FBQTFKLE9BQUE7VUFDTztVQUFVLFNBQ1IySixLQUFLQSxDQUFBO1lBQ2IsT0FDQ2xFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWtDLEdBQ2xEWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1RCxZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBbkUsTUFBQSxHQUFBekYsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVU0SCxXQUFXQSxDQUFDO1lBQUVpQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUU7Y0FDVHpJLE9BQU8sQ0FBQzBJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1pELEdBQUcsR0FBR0UsR0FBRyxDQUFDQyxlQUFlLENBQUNILEdBQUcsQ0FBQztZQUM5QixNQUFNSSxHQUFHLEdBQUd4RSxNQUFBLENBQUF2RixPQUFLLENBQUNnSyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCekUsTUFBQSxDQUFBdkYsT0FBSyxDQUFDaUssU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FDMUIsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztnQkFDN0IsSUFBSUYsTUFBTSxDQUFDRyxRQUFRLEtBQUtDLFFBQVEsRUFBRTtnQkFFbENKLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLEtBQUs7Z0JBQzFCTCxNQUFNLENBQUNNLFlBQVksR0FBRyxNQUFLO2tCQUMxQk4sTUFBTSxDQUFDTSxZQUFZLEdBQUcsSUFBSTtrQkFDMUJOLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLENBQUM7Z0JBQ3ZCLENBQUM7Y0FDRixDQUFDO2NBQ0RMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUVDLFlBQVksQ0FBQztjQUV2RCxPQUFPLE1BQU1SLE1BQU0sQ0FBQ1MsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUVQLGdCQUFnQixDQUFDO1lBQzVFLENBQUMsRUFBRSxDQUFDVCxHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDcEUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFPMkUsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3RGLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBUTBELEdBQUcsRUFBRUEsR0FBRztjQUFFMUksSUFBSSxFQUFDLFdBQVc7Y0FBQzhJLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXJELEdBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFnTCxTQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQWlMLEtBQUEsR0FBQWpMLE9BQUE7VUFDQSxJQUFBa0wsS0FBQSxHQUFBbEwsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTztVQUFVLFNBQVU0SixrQkFBa0JBLENBQUE7WUFDNUMsTUFBTTtjQUFFekgsS0FBSztjQUFFNEU7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUUsUUFBUSxHQUFHOUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUNtQixXQUFXO1lBQ2hELE1BQU1tRixZQUFZLEdBQUdoSixLQUFLLENBQUNrRCxLQUFLLENBQUMrRixRQUFRLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFOUMsT0FBTyxDQUFDLElBQUksRUFBRXRDLFFBQVEsQ0FBQztZQUV6RSxNQUFNcUYsSUFBSSxHQUFHQSxDQUFDO2NBQUVuRDtZQUFJLENBQUUsS0FBSTtjQUN6QixPQUNDMUMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtnQyxJQUFJLENBQUN6SCxJQUFJLENBQU0sRUFDcEIrRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGVBQU9nQyxJQUFJLENBQUNvRCxPQUFPLENBQVEsQ0FDdEI7WUFFUixDQUFDO1lBQ0QsT0FDQzlGLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUE0RSxXQUFXO2NBQ1hwRixTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDeUQsR0FBRyxFQUFFMUgsS0FBSyxDQUFDa0QsS0FBSyxDQUFDb0csT0FBTztjQUN4QnRLLElBQUksRUFBRWdCLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ2xFLElBQUk7Y0FDdEJ1SyxNQUFNLEVBQUM7WUFBVSxFQUNoQixFQUVGakcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBTSxHQUFFVyxLQUFLLENBQUM0RSxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUM3Q25HLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQVcsYUFBYTtjQUFDQyxNQUFNLEVBQUU7WUFBQyxHQUN2QnJHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWEsSUFBSTtjQUFDM0YsU0FBUyxFQUFDO1lBQVksR0FDM0JYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWMsR0FBRyxRQUFFakYsS0FBSyxDQUFDa0YsUUFBUSxDQUFPLEVBQzNCeEcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBYyxHQUFHLFFBQUVqRixLQUFLLENBQUNtRixRQUFRLENBQU8sQ0FDckIsRUFDUHpHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWlCLEtBQUs7Y0FBQy9GLFNBQVMsRUFBQztZQUFrQixHQUNsQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNkUsU0FBQSxDQUFBb0IsUUFBUTtjQUFDQyxPQUFPLEVBQUVsQjtZQUFZLEVBQUksRUFFbkMxRixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzhFLEtBQUEsQ0FBQXFCLElBQUk7Y0FDSkMsRUFBRSxFQUFDLEtBQUs7Y0FDUm5HLFNBQVMsRUFBQywrQkFBK0I7Y0FDekNvRyxLQUFLLEVBQUVySyxLQUFLLENBQUNrRCxLQUFLLENBQUMrRixRQUFRLEVBQUUsQ0FBQ2MsUUFBUTtjQUN0Q08sT0FBTyxFQUFFbkI7WUFBSSxFQUNaLENBQ0csQ0FDQyxDQUNPLENBQ1gsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBN0YsTUFBQSxHQUFBekYsT0FBQTtVQXFCTyxNQUFNME0sYUFBYSxHQUFBeEosT0FBQSxDQUFBd0osYUFBQSxHQUFHakgsTUFBQSxDQUFBdkYsT0FBSyxDQUFDeU0sYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTTVHLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBNLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUN4SixPQUFBLENBQUE2QyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QnRFLElBQUFhLEdBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBb0QsS0FBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFFQSxJQUFBMEYsU0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUE2TSxNQUFBLEdBQUE3TSxPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBOE0sVUFBQSxHQUFBOU0sT0FBQTtVQUNBLElBQUFrTCxLQUFBLEdBQUFsTCxPQUFBO1VBRU87VUFBVSxTQUNSK00sV0FBV0EsQ0FBQztZQUFFNUs7VUFBSyxDQUEyQjtZQUN0RCxNQUFNO2NBQUU2SztZQUFJLENBQUUsR0FBRyxJQUFBckgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVuQyxNQUFNa0gsR0FBRyxHQUFHLG9DQUFvQ0QsSUFBSSxLQUFLLFVBQVUsR0FBRyxlQUFlLEdBQUcsRUFBRSxFQUFFO1lBQzVGLE9BQ0N2SCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNTLEdBQUEsQ0FBQXNHLGFBQWE7Y0FBQzlHLFNBQVMsRUFBQztZQUF5RCxHQUNqRlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDL0MsS0FBQSxDQUFBK0osY0FBYztjQUFDdkIsS0FBSyxFQUFFekosS0FBSyxDQUFDa0QsS0FBSyxDQUFDdUcsS0FBSztjQUFFeEQsSUFBSSxFQUFDLFFBQVE7Y0FBQ2pILElBQUksRUFBRWdCLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ2xFO1lBQUksRUFBSSxFQUNsRnNFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTRDLEdBQzFEWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMwRyxNQUFBLENBQUFsRCxLQUFLLE9BQUcsQ0FDSixFQUNObEUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUU2RztZQUFHLEdBQ2xCeEgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBa0MsVUFBVTtjQUFDQyxRQUFRLEVBQUVMLElBQUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FBRU0sU0FBUyxFQUFFLENBQUMsQ0FBQ25MLEtBQUssQ0FBQ2tELEtBQUssQ0FBQzRCO1lBQUksRUFBSSxFQUNwRnhCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRTBHLElBQUksS0FBSyxVQUFVO2NBQzlCL0QsT0FBTztjQUNQMUMsT0FBTyxFQUFFO2dCQUNSMkMsSUFBSSxFQUFFekQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDVCxTQUFBLENBQUFlLFFBQVEsT0FBRztnQkFDbEIrQyxLQUFLLEVBQUUvRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMyRyxVQUFBLENBQUFTLGdCQUFnQjs7WUFDeEIsRUFDQSxDQUNHLENBQ1M7VUFFbEI7Ozs7Ozs7Ozs7O1VDbkNBOztVQUVBOUYsTUFBQSxDQUFBK0YsY0FBQSxDQUFBdEssT0FBQTtZQUNBdUssS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFoRixNQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQTRHLEdBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUVBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQTBOLFFBQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBMEksT0FBQSxHQUFBMUksT0FBQTtVQUNPO1VBQVUsU0FDUnVDLFlBQVlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUN2RCxNQUFNLENBQUM2SyxJQUFJLEVBQUVXLE9BQU8sQ0FBQyxHQUFHbEksTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFTLENBQUMsQ0FBQ3pMLEtBQUssQ0FBQ2tELEtBQUssRUFBRTRCLElBQUksR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzlGLE1BQU0sQ0FBQ3JGLEtBQUssRUFBRWlNLFFBQVEsQ0FBQyxHQUFHcEksTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFxQm5NLFNBQVMsQ0FBQztZQUN2RSxNQUFNLENBQUNxTSxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdEksTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUNJLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd4SSxNQUFBLENBQUF2RixPQUFLLENBQUMwTixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU07Y0FBRXBCLEtBQUs7Y0FBRXJJLEtBQUs7Y0FBRTNDO1lBQUssQ0FBRSxHQUFHVyxLQUFLO1lBQ3JDLE1BQU07Y0FBRTRFO1lBQUssQ0FBRSxHQUFHNUUsS0FBSztZQUN2QixNQUFNMkQsVUFBVSxHQUFHLElBQUEyQyxNQUFBLENBQUFHLGFBQWEsR0FBRTtZQUNsQyxJQUFBSCxNQUFBLENBQUF5RixRQUFRLEVBQUMvTCxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzQnNELE1BQUEsQ0FBQXZGLE9BQUssQ0FBQ2lLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCd0QsT0FBTyxDQUFDLENBQUMsQ0FBQ3hMLEtBQUssQ0FBQ2tELEtBQUssRUFBRTRCLElBQUksR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQ3hELENBQUMsRUFBRSxDQUFDOUMsS0FBSyxDQUFDLENBQUM7WUFFWCxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPc0IsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUF1SCxVQUFVO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCbE0sS0FBSztjQUNMOEIsUUFBUSxFQUFFOUIsS0FBSyxDQUFDOEIsUUFBUTtjQUN4QjZKLFNBQVM7Y0FDVEMsWUFBWTtjQUNaaEgsS0FBSztjQUNMcUgsUUFBUSxFQUFFak0sS0FBSyxDQUFDaU0sUUFBUTtjQUN4QjVCLEtBQUs7Y0FDTGhMLEtBQUssRUFBRVcsS0FBSyxDQUFDWCxLQUFLO2NBQ2xCbU0sT0FBTztjQUNQSyxPQUFPO2NBQ1BoQixJQUFJO2NBQ0pwTCxLQUFLO2NBQ0xxTSxVQUFVO2NBQ1ZuSSxVQUFVO2NBQ1Z3SSxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN0QjtjQUNEO2FBQ0E7WUFFRCxNQUFNQyxLQUFLLEdBQUc7Y0FBRXRNO1lBQUssQ0FBRTtZQUV2QixPQUNDc0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxjQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNSLFFBQUEsQ0FBQStHLGFBQWEsQ0FBQ2dDLFFBQVE7Y0FBQ2pCLEtBQUssRUFBRVk7WUFBWSxHQUN6QyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3hGLFFBQVEsQ0FBQy9DLFVBQVUsQ0FBQyxHQUFHTCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1SCxRQUFBLENBQUFYLFdBQVc7Y0FBQSxHQUFLMEI7WUFBSyxFQUFJLEdBQUdoSixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1QyxPQUFBLENBQUFpRyxVQUFVO2NBQUEsR0FBS0Y7WUFBSyxFQUFJLENBQ25FLENBQ3BCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUF0TCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBa0wsS0FBQSxHQUFBbEwsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQTBJLE9BQUEsR0FBQTFJLE9BQUE7VUFDQSxJQUFBMEosWUFBQSxHQUFBMUosT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQThNLFVBQUEsR0FBQTlNLE9BQUE7VUFDQSxJQUFBNE8sTUFBQSxHQUFBNU8sT0FBQTtVQUVPO1VBQVUsU0FDUjJPLFVBQVVBLENBQUM7WUFBRXhNO1VBQUssQ0FBMkI7WUFDckQsTUFBTSxDQUFDcUssS0FBSyxDQUFDLEdBQUcsSUFBQS9HLE1BQUEsQ0FBQW1JLFFBQVEsRUFBQ3pMLEtBQUssQ0FBQ3FLLEtBQUssQ0FBQztZQUNyQyxNQUFNO2NBQUVRLElBQUk7Y0FBRWpHO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzFDLE1BQU07Y0FBRUMsV0FBVyxFQUFFQyxRQUFRO2NBQUVoRixFQUFFLEVBQUVpRjtZQUFNLENBQUUsR0FBRy9DLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSTtZQUNqRSxNQUFNO2NBQUVDLFlBQVk7Y0FBRTdEO1lBQUUsQ0FBRSxHQUFHa0IsS0FBSyxDQUFDa0QsS0FBSztZQUV4QyxPQUNDSSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQzVCWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFXLGFBQWE7Y0FBQ3pGLFNBQVMsRUFBQyxlQUFlO2NBQUMwRixNQUFNLEVBQUU7WUFBQyxHQUNqRHJHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWlCLEtBQUssUUFDTDFHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsY0FDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDeUksTUFBQSxDQUFBeEIsVUFBVTtjQUFDQyxRQUFRLEVBQUVMLElBQUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FBRU0sU0FBUyxFQUFFLENBQUMsQ0FBQ25MLEtBQUssQ0FBQ2tELEtBQUssQ0FBQzRCO1lBQUksRUFBSSxFQUNwRnhCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRTBHLElBQUksS0FBSyxVQUFVO2NBQzlCL0QsT0FBTztjQUNQMUMsT0FBTyxFQUFFO2dCQUNSMkMsSUFBSSxFQUFFekQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUMsT0FBQSxDQUFBSSxjQUFjLE9BQUc7Z0JBQ3hCVSxLQUFLLEVBQUUvRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMyRyxVQUFBLENBQUFTLGdCQUFnQjs7WUFDeEIsRUFDQSxDQUNHLEVBRU45SCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBRSxrQkFBa0IsT0FBRyxDQUNqQixDQUNDLEVBQ1JuRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFhLElBQUksUUFDSnRHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWMsR0FBRyxRQUFFakYsS0FBSyxDQUFDOEgsSUFBSSxDQUFDbEgsUUFBUSxDQUFPLEVBQ2hDbEMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBYyxHQUFHLFFBQUVqRixLQUFLLENBQUM4SCxJQUFJLENBQUM1QyxRQUFRLENBQU8sQ0FDMUIsQ0FDUSxDQUNWO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUF4RyxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRUEsSUFBQTRHLEdBQUEsR0FBQTVHLE9BQUE7VUFHQSxJQUFBK08sV0FBQSxHQUFBL08sT0FBQTtVQUVPLFdBTlA7O1VBTWtCLE1BQU1nUCxlQUFlLEdBQUdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxNQUFNO1lBQUVDO1VBQVMsQ0FBRSxLQUFJO1lBQzdFLE1BQU07Y0FBRXBJLEtBQUs7Y0FBRTlDLFFBQVE7Y0FBRTZKLFNBQVM7Y0FBRUMsWUFBWTtjQUFFdk0sS0FBSztjQUFFVztZQUFLLENBQUUsR0FBRyxJQUFBd0QsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVyRixNQUFNLENBQUNxSSxRQUFRLEVBQUVnQixXQUFXLENBQUMsR0FBRyxJQUFBM0osTUFBQSxDQUFBbUksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN5QixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUE3SixNQUFBLENBQUFtSSxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sQ0FBQ2hNLEtBQUssRUFBRWlNLFFBQVEsQ0FBQyxHQUFHLElBQUFwSSxNQUFBLENBQUFtSSxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU14RixJQUFJLEdBQUcwRixTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDdkMsTUFBTXlCLFFBQVEsR0FBRyxDQUFDekIsU0FBUyxJQUFJdE0sS0FBSztZQUNwQyxNQUFNZ08sT0FBTyxHQUFHLENBQUMxQixTQUFTLEdBQUl5QixRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBSSxNQUFNO1lBQ3BFLE1BQU0sQ0FBQ0UsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHakssTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNLENBQUMrQixhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUcsSUFBQW5LLE1BQUEsQ0FBQW1JLFFBQVEsRUFDakRpQyxVQUFVLEVBQUVDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQ2hFO1lBRUQsTUFBTUMsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILE1BQU03TixLQUFLLENBQUNvRCxNQUFNLEVBQUU7Z0JBQ3BCd0ksWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztnQkFDeEJxQixTQUFTLENBQUMsT0FBTyxDQUFDO2VBQ2xCLENBQUMsT0FBT2MsQ0FBQyxFQUFFO2dCQUNYcEMsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFFaEIsQ0FBQztZQUNELE1BQU1xQyx5QkFBeUIsR0FBRyxNQUFBQSxDQUFBLEtBQTZCO2NBQzlELElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsRUFBRTtrQkFDM0JoUCxPQUFPLENBQUMwSSxJQUFJLENBQUMsbURBQW1ELENBQUM7a0JBQ2pFLE9BQU8sS0FBSyxDQUFDLENBQUM7O2dCQUdmLE1BQU11RyxnQkFBZ0IsR0FBRyxNQUFNRixTQUFTLENBQUNDLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDO2tCQUFFNVAsSUFBSSxFQUFFO2dCQUE4QixDQUFFLENBQUM7Z0JBQ3BHLE9BQU8yUCxnQkFBZ0IsQ0FBQ0UsS0FBSyxLQUFLLFNBQVM7ZUFDM0MsQ0FBQyxPQUFPM08sS0FBSyxFQUFFO2dCQUNmUixPQUFPLENBQUNRLEtBQUssQ0FBQyx5Q0FBeUNBLEtBQUssRUFBRSxDQUFDO2dCQUMvRCxPQUFPLEtBQUssQ0FBQyxDQUFDOztZQUVoQixDQUFDO1lBRUQsTUFBTTRPLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSHBCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1PLGFBQWEsR0FBRyxNQUFNTyx5QkFBeUIsRUFBRTtnQkFFdkQsSUFBSSxDQUFDUCxhQUFhLEVBQUU7a0JBQ25CTCxZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUNsQjs7Z0JBR0RVLFFBQVEsRUFBRTtlQUNWLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYN08sT0FBTyxDQUFDUSxLQUFLLENBQUNxTyxDQUFDLENBQUM7Z0JBQ2hCcEMsUUFBUSxDQUFDLElBQUksQ0FBQztlQUNkLFNBQVM7Z0JBQ1R1QixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXFCLE1BQU0sR0FBRyxNQUFNbEMsS0FBSyxJQUFHO2NBQzVCLE1BQU1wTSxLQUFLLENBQUNxRCxJQUFJLEVBQUU7Y0FDbEJ1SSxZQUFZLENBQUMsS0FBSyxDQUFDO2NBQ25Cb0IsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTXVCLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ3pCek0sUUFBUSxDQUNOME0sY0FBYyxFQUFFLENBQ2hCQyxJQUFJLENBQUMsTUFBSztnQkFDVmYsVUFBVSxFQUFFQyxZQUFZLENBQUNlLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUM7Z0JBQ3hFakIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2NBQ3pCLENBQUMsQ0FBQyxDQUNEa0IsS0FBSyxDQUFDbFAsS0FBSyxJQUFHO2dCQUNkaU0sUUFBUSxDQUFDLElBQUksQ0FBQztjQUNmLENBQUMsQ0FBQztZQUNKLENBQUM7WUFFRCxNQUFNa0QsVUFBVSxHQUFHeEMsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixJQUFJLENBQUNyTSxLQUFLLENBQUM2TyxVQUFVLEVBQUU7Z0JBQ3RCdEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2dCQUN2Qjs7Y0FHRGMsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1TLFVBQVUsR0FBR0EsQ0FBQSxLQUFNdkIsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU13QixRQUFRLEdBQUdoQyxNQUFNLEtBQUssT0FBTyxHQUFHdUIsTUFBTSxHQUFHTSxVQUFVO1lBQ3pELE1BQU1JLE9BQU8sR0FBRzVDLEtBQUssSUFBRztjQUN2QmEsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkUsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsT0FDQzdKLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUF3TCxNQUFNO2NBQ05DLE9BQU8sRUFBQyxTQUFTO2NBQ2pCakosSUFBSSxFQUFFQSxJQUFJO2NBQ1ZnRyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJrRCxPQUFPLEVBQUVKLFFBQVE7Y0FDakJqQyxRQUFRLEVBQUVBLFFBQVEsSUFBSWI7WUFBUSxHQUU3QnJILEtBQUssQ0FBQ3lJLE9BQU8sQ0FBQyxDQUNQLEVBRVQvSixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMySSxNQUFBLENBQUF5QyxnQkFBZ0I7Y0FBQy9PLElBQUksRUFBRTZNLFNBQVM7Y0FBRThCLE9BQU8sRUFBRUEsT0FBTztjQUFFSyxTQUFTLEVBQUVkO1lBQVksRUFBSSxFQUNoRmpMLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzRJLFdBQUEsQ0FBQTBDLHFCQUFxQjtjQUFDalAsSUFBSSxFQUFFWixLQUFLO2NBQUV1UCxPQUFPLEVBQUVBLENBQUEsS0FBTXRELFFBQVEsQ0FBQyxLQUFLO1lBQUMsRUFBSSxFQUNyRTRCLGNBQWMsSUFDZGhLLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBOEssVUFBVTtjQUNWbFAsSUFBSSxFQUFFaU4sY0FBYztjQUNwQjBCLE9BQU8sRUFBRUYsVUFBVTtjQUNuQlUsV0FBVyxFQUFFeFAsS0FBSyxDQUFDd1AsV0FBVztjQUM5QnhRLElBQUksRUFBQyxhQUFhO2NBQ2xCeVEsU0FBUyxFQUFFelAsS0FBSyxDQUFDa0QsS0FBSyxDQUFDd007WUFBWSxFQUVwQyxDQUNDO1VBRUwsQ0FBQztVQUFDM08sT0FBQSxDQUFBOEwsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IRixJQUFBdkosTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRyxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQThPLE1BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUVPO1VBQVcsTUFBTXlSLHFCQUFxQixHQUFHQSxDQUFDO1lBQUVqUCxJQUFJO1lBQUUyTztVQUFPLENBQUUsS0FBSTtZQUNyRSxJQUFJLENBQUMzTyxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXVFO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU07Y0FBRTZGLEtBQUs7Y0FBRWtHO1lBQVcsQ0FBRSxHQUFHL0ssS0FBSyxDQUFDcUosV0FBVyxDQUFDeE8sS0FBSztZQUV0RCxPQUNDNkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMySSxNQUFBLENBQUFpRCxVQUFVO2NBQUMzTCxTQUFTLEVBQUMsaUJBQWlCO2NBQUNxRCxJQUFJLEVBQUUsSUFBSTtjQUFFakgsSUFBSSxFQUFFLElBQUk7Y0FBRTJPLE9BQU8sRUFBRUEsT0FBTztjQUFFYSxRQUFRO1lBQUEsR0FDekZ2TSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS3lGLEtBQUssQ0FBTSxDQUNYLEVBQ05uRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNRLE1BQUEsQ0FBQXNMLElBQUk7Y0FBQzdMLFNBQVMsRUFBQywwQkFBMEI7Y0FBQ2dDLElBQUksRUFBQztZQUFLLEVBQUcsRUFDeEQzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFMEwsV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQzVPLE9BQUEsQ0FBQXVPLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRixJQUFBUyxNQUFBLEdBQUFsUyxPQUFBO1VBQ0EsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUFtUyxNQUFBLEdBQUFuUyxPQUFBO1VBQ0EsSUFBQW9TLE9BQUEsR0FBQXBTLE9BQUE7VUFDQSxJQUFBcVMsT0FBQSxHQUFBclMsT0FBQTtVQUVPO1VBQVcsTUFBTXVOLGdCQUFnQixHQUFHQSxDQUFDO1lBQUUwQixRQUFRLEdBQUc7VUFBSyxDQUFFLEtBQUk7WUFDbkUsTUFBTTtjQUFFbEksS0FBSztjQUFFK0csU0FBUztjQUFFRSxPQUFPO2NBQUV4TSxLQUFLO2NBQUVXLEtBQUs7Y0FBRVA7WUFBSyxDQUFFLEdBQUcsSUFBQStELFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDN0UsTUFBTWtFLEdBQUcsR0FBR3hFLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQ2dLLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTXFGLFFBQVEsR0FBRyxDQUFDekIsU0FBUyxJQUFJdE0sS0FBSztZQUNwQyxNQUFNeUwsR0FBRyxHQUFHLDhCQUE4QmUsT0FBTyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDeEUsTUFBTSxDQUFDa0IsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzFKLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDdEQsTUFBTTBFLFdBQVcsR0FBRztjQUFFckQsUUFBUTtjQUFFQyxNQUFNO2NBQUVDO1lBQVMsQ0FBRTtZQUVuRCxPQUNDMUosTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUNqQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBbUIsR0FDcENYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQUksR0FBRVcsS0FBSyxDQUFDNkUsS0FBSyxDQUFNLENBQzdCLEVBQ1JoSyxLQUFLLElBQ0w2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrTCxNQUFBLENBQUFLLEtBQUs7Y0FBQ3BSLElBQUksRUFBQyxPQUFPO2NBQUNrUSxPQUFPLEVBQUM7WUFBTyxHQUNqQ3pQLEtBQUssQ0FFUCxFQUNBSixLQUFLLEdBQ0xpRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDRWtHLE1BQU0sS0FBSyxPQUFPLEdBQ2xCekosTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0wsTUFBQSxDQUFBSyxLQUFLO2NBQUNwUixJQUFJLEVBQUMsU0FBUztjQUFDa1EsT0FBTyxFQUFDLFNBQVM7Y0FBQ2pKLElBQUksRUFBQztZQUFNLEdBQ2xEM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBSSxHQUFFVyxLQUFLLENBQUN5TCxXQUFXLENBQUNDLE1BQU0sQ0FBQzdHLEtBQUssQ0FBTSxFQUN4RG5HLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRVcsS0FBSyxDQUFDeUwsV0FBVyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBUSxDQUNwRCxHQUVSak4sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0wsTUFBQSxDQUFBSyxLQUFLO2NBQUNwUixJQUFJLEVBQUMsTUFBTTtjQUFDa1EsT0FBTyxFQUFDLE1BQU07Y0FBQ2pKLElBQUksRUFBQztZQUFNLEdBQzVDM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFVyxLQUFLLENBQUN5TCxXQUFXLENBQUM1UixhQUFhLENBQVEsQ0FFOUQsQ0FDQyxHQUNBLElBQUksRUFDUjZFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtELEdBQ2hFWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQVM4RCxHQUFHLEVBQUVBLEdBQUc7Y0FBRTdELFNBQVMsRUFBRTZHO1lBQUcsR0FDaEN4SCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEyQixHQUN4QyxDQUFDNUUsS0FBSyxHQUNOaUUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNnTSxNQUFBLENBQUFRLEtBQUs7Y0FBQ3pELE1BQU0sRUFBRUE7WUFBTSxFQUFJLEVBQ3pCekosTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDaU0sT0FBQSxDQUFBcEQsZUFBZTtjQUFBLEdBQUtzRDtZQUFXLEVBQUksQ0FDbEMsR0FDQSxJQUFJLEVBRVI3TSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNrTSxPQUFBLENBQUFPLGVBQWU7Y0FBQ3BRLElBQUksRUFBRStNO1lBQVEsRUFBSSxDQUM5QixFQUNMdkIsT0FBTyxJQUNQdkksTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBaUIsR0FBRVcsS0FBSyxDQUFDeUwsV0FBVyxDQUFDSyxlQUFlLENBQU0sQ0FFekUsQ0FDUSxDQUNMLENBQ0QsQ0FDSjtVQUVMLENBQUM7VUFBQzNQLE9BQUEsQ0FBQXFLLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlERixJQUFBOUgsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRyxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQThPLE1BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUVPO1VBQVcsTUFBTXVSLGdCQUFnQixHQUFHQSxDQUFDO1lBQUUvTyxJQUFJO1lBQUUyTyxPQUFPO1lBQUVLO1VBQVMsQ0FBRSxLQUFJO1lBQzNFLElBQUksQ0FBQ2hQLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFdUU7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTStNLFFBQVEsR0FBRy9MLEtBQUssQ0FBQ3FKLFdBQVcsQ0FBQ3hFLEtBQUs7WUFDeEMsTUFBTWtHLFdBQVcsR0FBRy9LLEtBQUssQ0FBQ3FKLFdBQVcsQ0FBQzBCLFdBQVc7WUFFakQsT0FDQ3JNLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkksTUFBQSxDQUFBaUQsVUFBVTtjQUNWM0wsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQnFELElBQUksRUFBRSxJQUFJO2NBQ1ZqSCxJQUFJLEVBQUUsSUFBSTtjQUNWMk8sT0FBTyxFQUFFQSxPQUFPO2NBQ2hCYSxRQUFRO2NBQ1JSLFNBQVMsRUFBRUE7WUFBUyxHQUVwQi9MLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBc0IsR0FBRVcsS0FBSyxDQUFDcUosV0FBVyxDQUFDMkMsS0FBSyxDQUFRLEVBQ3ZFdE4sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLMk0sUUFBUSxDQUFNLENBQ2QsRUFDTnJOLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1EsTUFBQSxDQUFBc0wsSUFBSTtjQUFDN0wsU0FBUyxFQUFDLDBCQUEwQjtjQUFDZ0MsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4RDNDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQXlCLEdBQUUwTCxXQUFXLENBQUssQ0FDbkQsQ0FDTSxDQUNYO1VBRUwsQ0FBQztVQUFDNU8sT0FBQSxDQUFBcU8sZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENGLElBQUE5TCxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQWdULFlBQUEsR0FBQWhULE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBR00sU0FBVTRTLGVBQWVBLENBQUM7WUFBRXBRO1VBQUksQ0FBRTtZQUN2QyxNQUFNO2NBQUV1RSxLQUFLO2NBQUV2RixLQUFLO2NBQUVtTSxPQUFPO2NBQUV4TCxLQUFLO2NBQUU4TCxVQUFVO2NBQUVELE9BQU87Y0FBRXBNLEtBQUs7Y0FBRWlNO1lBQVEsQ0FBRSxHQUFHLElBQUFsSSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRWpHLElBQUksQ0FBQ3ZELElBQUksRUFBRTtZQUNYLE1BQU15USxNQUFNLEdBQUcsTUFBTTFFLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJQLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FFaEIsSUFBSTtnQkFDSCxNQUFNOUwsS0FBSyxDQUFDK0MsVUFBVSxDQUFDMUQsS0FBSyxDQUFDO2dCQUM3Qm1NLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ25CTSxVQUFVLENBQUMsS0FBSyxDQUFDO2VBQ2pCLENBQUMsT0FBT2dDLENBQUMsRUFBRTtnQkFDWDdPLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDcU8sQ0FBQyxDQUFDO2dCQUNoQnBDLFFBQVEsQ0FBQzlHLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQ1UsVUFBVSxDQUFDO2VBQ3RDLFNBQVM7Z0JBQ1RqRixVQUFVLENBQUMsS0FBSyxDQUFDOztZQUVuQixDQUFDO1lBRUQsTUFBTWtGLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCaFIsS0FBSyxDQUFDc0MsVUFBVSxFQUFFO1lBQ25CLENBQUM7WUFDRCxPQUNDZ0IsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNk0sWUFBQSxDQUFBcEwsV0FBVztjQUFDaUMsR0FBRyxFQUFFckk7WUFBSyxFQUFJLEVBQzNCaUUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBZSxHQUNoQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUF3TCxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUMrQixRQUFRO2NBQUM5QixPQUFPLEVBQUU2QjtZQUFPLEdBQ2pEaFIsS0FBSyxDQUFDd1AsV0FBVyxDQUFDMEIsT0FBTyxDQUFDQyxXQUFXLENBQzlCLEVBQ1Q3TixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQXdMLE1BQU07Y0FBQ2hKLElBQUksRUFBQyxNQUFNO2NBQUNrSixPQUFPLEVBQUUyQixNQUFNO2NBQUU1QixPQUFPLEVBQUM7WUFBUyxHQUNwRGxQLEtBQUssQ0FBQ3dQLFdBQVcsQ0FBQzBCLE9BQU8sQ0FBQ0UsSUFBSSxDQUN2QixDQUNELENBQ0osQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBOU4sTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRU0sU0FBVXdULFlBQVlBLENBQUE7WUFDM0IsTUFBTTtjQUFFdlAsUUFBUTtjQUFFNkosU0FBUztjQUFFQztZQUFZLENBQUUsR0FBRyxJQUFBcEksUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNzSixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHN0osTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2RDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBRUE7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFHQSxPQUFPO2NBQUd5QixTQUFTO2NBQUVDO1lBQVksQ0FBRTtVQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQW1FLEtBQUEsR0FBQXpULE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRU0sU0FBVW9OLFVBQVVBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFTLENBQUU7WUFDakQsTUFBTTtjQUFFdkcsS0FBSztjQUFFNEc7WUFBTyxDQUFFLEdBQUcsSUFBQWhJLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDN0MsTUFBTTJOLFVBQVUsR0FBR25GLEtBQUssSUFBRztjQUMxQlosT0FBTyxDQUFDWSxLQUFLLENBQUNvRixhQUFhLENBQUNDLE9BQU8sQ0FBQzVHLElBQUksQ0FBQztZQUMxQyxDQUFDO1lBRUQsSUFBSSxDQUFDTSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBRTNCLE9BQ0NtRyxLQUFBLENBQUF0TixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrRCxHQUNoRXFOLEtBQUEsQ0FBQXROLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBaU8sV0FBVztjQUFDeEcsUUFBUSxFQUFFQSxRQUFRO2NBQUVnRSxPQUFPLEVBQUMsU0FBUztjQUFDeUMsUUFBUSxFQUFFSjtZQUFVLEdBQ3RFRCxLQUFBLENBQUF0TixhQUFBLENBQUNQLFdBQUEsQ0FBQXdMLE1BQU07Y0FBQSxhQUFXO1lBQVUsR0FBRXJLLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQzdLLFFBQVEsRSxJQUFXLEVBQ25FOEwsS0FBQSxDQUFBdE4sYUFBQSxDQUFDUCxXQUFBLENBQUF3TCxNQUFNO2NBQUEsYUFBVztZQUFRLEdBQUVySyxLQUFLLENBQUN5TCxXQUFXLENBQUN1QixJQUFJLEUsSUFBVyxDQUNoRCxDQUNUO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUF0TyxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQWdVLFNBQUEsR0FBQWhVLE9BQUE7VUFGQTs7VUFRTSxTQUFVMlMsS0FBS0EsQ0FBQztZQUFFekQ7VUFBTSxDQUFjO1lBQzNDLE1BQU0rRSxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNwTCxRQUFRLENBQUNxRyxNQUFNLENBQUM7WUFDdkQsTUFBTWdGLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3JMLFFBQVEsQ0FBQ3FHLE1BQU0sQ0FBQztZQUVyRCxNQUFNLENBQUNpRixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBTixTQUFBLENBQUFPLFFBQVEsRUFBQ04sU0FBUyxFQUFFQyxPQUFPLEVBQUVoRixNQUFNLEtBQUssT0FBTyxDQUFDO1lBQ2hHLE1BQU1zRixXQUFXLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR1AsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQ2pQLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGVBQU8sR0FBR3dPLGVBQWUsRUFBRSxDQUFRLEVBQ25DbFAsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBa0IsT0FBUyxFQUMzQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxlQUFPLEdBQUdxTyxXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBL08sTUFBQSxHQUFBekYsT0FBQTtVQURBOztVQUVBLE1BQU07WUFBRTROLFFBQVE7WUFBRXpEO1VBQVMsQ0FBRSxHQUFHMUUsTUFBQSxDQUFBdkYsT0FBSztVQUUvQixTQUFVcVUsUUFBUUEsQ0FBQ04sU0FBa0IsRUFBRUMsT0FBZ0IsRUFBRVUsS0FBSyxHQUFHLElBQUk7WUFDMUUsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHbEgsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ3pELFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSTRLLFVBQTBCO2NBQzlCLElBQUlILEtBQUssRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQztjQUNyQixJQUFJYixTQUFTLEVBQUU7Z0JBQ2RjLFVBQVUsR0FBR0MsV0FBVyxDQUFDLE1BQUs7a0JBQzdCRixPQUFPLENBQUNHLFFBQVEsSUFBRztvQkFDbEIsT0FBT0EsUUFBUSxHQUFHLENBQUM7a0JBQ3BCLENBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2QsU0FBUyxDQUFDLENBQUM7WUFFZjlKLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSStKLE9BQU8sRUFBRTtnQkFDWlksT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1osT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUixPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQyIsImlnbm9yZUxpc3QiOltdfQ==