System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/chat-sdk@1.5.5/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.8/components", "react@18.3.1", "pragmate-ui@1.0.8/alert", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "@aimpact/ailearn-app@0.7.0/config", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/modal"], function (_export, _context2) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_5 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp070EntitiesAssignmentsActivitiesBase;
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
    }, function (_aimpactAilearnApp070Config) {
      dependency_15 = _aimpactAilearnApp070Config;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_17 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_18 = _aimpactAilearnApp070ModelWrapper;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_19 = _aimpactAilearnApp070SharedHooks;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/shared/hooks', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/tabs', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/assignments/spoken.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJyZWFkeSIsIm1vZGVsSWQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJWb2ljZSIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiYXNzaWdtZW50SWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhc3NpZ25tZW50SWQiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkVGVzdCIsImRyYWZ0SWQiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJtb2RlbCIsInB1Ymxpc2hTcG9rZW4iLCJyZWNvcmQiLCJzdG9wIiwiX3JlYWN0IiwiX2ZlZWRiYWNrIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkRlc2t0b3BBbmFseXNpcyIsInNjcmVlblNpemUiLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInVzZXJJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJtZCIsIkZlZWRiYWNrIiwibGciLCJfaWNvbnMiLCJfdWkiLCJfd3JhcHBlciIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsImRhdGUiLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsImFuYWx5c2lzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJUcmFuc2NyaXB0aW9uIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwicmVwbGFjZSIsIkFwcEljb24iLCJfaG9va3MiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsImFsZXJ0Q29udGVudCIsImdldFNwZWNzIiwidGFzayIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiYXNpZGUiLCJ0aXRsZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rlc2t0b3AiLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl90YWJzMiIsInRhYnMiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwiZSIsImNoZWNrTWljcm9waG9uZVBlcm1pc3Npb24iLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25TdGF0dXMiLCJxdWVyeSIsInN0YXRlIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImVuc3VyZVBsYXkiLCJoYXNDcmVkaXRzIiwiY2xvc2VNb2RhbCIsIm9uQWN0aW9uIiwib25DbG9zZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsIkNvaW5zTW9kYWwiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwidGV4dCIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZGVza3RvcC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL3RyYW5zY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDSyxLQUFLLEVBQUU7WUFFNUUsSUFBSUgsYUFBYSxFQUFFO2NBQ2xCO2NBQ0EsTUFBTUosRUFBRSxDQUFDTCxVQUFVLENBQUNhLE1BQU0sQ0FBQ0osYUFBYSxDQUFDSyxFQUFHLEVBQUU7Z0JBQzdDQyxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTtnQkFDZkMsSUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUk7Z0JBQ2ZSO2VBQ0EsQ0FBQztjQUNGUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0JYLElBQUksa0JBQWtCRSxhQUFhLENBQUNLLEVBQUUsR0FBRyxDQUFDO2NBQzFFLE9BQU9MLGFBQWEsQ0FBQ0ssRUFBRzthQUN4QixNQUFNO2NBQ047Y0FDQSxNQUFNQSxFQUFFLEdBQUcsTUFBTVQsRUFBRSxDQUFDTCxVQUFVLENBQUNtQixHQUFHLENBQUM7Z0JBQ2xDWixJQUFJO2dCQUNKUSxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTtnQkFDZkMsSUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUk7Z0JBQ2ZSO2VBQ0EsQ0FBQztjQUVGLE9BQU9NLEVBQUU7O1VBRVg7VUFFQTtVQUNPLGVBQWVNLFlBQVlBLENBQUNiLElBQVk7WUFDOUMsTUFBTWMsS0FBSyxHQUFHLE1BQU1oQixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDSyxLQUFLLEVBQUU7WUFDcEUsSUFBSVMsS0FBSyxFQUFFO2NBQ1YsT0FBT0EsS0FBSzs7WUFHYixPQUFPQyxTQUFTO1VBQ2pCO1VBRUE7VUFDTyxlQUFlQyxlQUFlQSxDQUFDaEIsSUFBWTtZQUNqRCxJQUFJO2NBQ0g7Y0FDQSxNQUFNYyxLQUFLLEdBQUcsTUFBTUQsWUFBWSxDQUFDYixJQUFJLENBQUM7Y0FFdEMsSUFBSSxDQUFDYyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxLQUFLLENBQUMsQ0FBQzs7Y0FHZjtjQUNBLE1BQU1oQixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDaUIsTUFBTSxFQUFFO2NBRXZELE9BQU8sSUFBSSxDQUFDLENBQUM7YUFDYixDQUFDLE9BQU9DLEtBQUssRUFBRTtjQUNmUixPQUFPLENBQUNRLEtBQUssQ0FBQywwQ0FBMENsQixJQUFJLElBQUksRUFBRWtCLEtBQUssQ0FBQztjQUN4RSxPQUFPLEtBQUssQ0FBQyxDQUFDOztVQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRkEsSUFBQUMsV0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixLQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLE1BQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBZ0MsTUFBQSxHQUFBaEMsT0FBQTtVQUNPO1VBQVUsTUFDWGlDLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUN6RCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUcsSUFBSUEsQ0FBQTtjQUNIbEIsV0FBQSxDQUFBbUIsWUFBWSxDQUFDQyxLQUFLLEVBQUU7WUFDckI7O1VBQ0FDLE9BQUEsQ0FBQWpCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkQsSUFBQWtCLFFBQUEsR0FBQW5ELE9BQUE7VUFFQSxJQUFBb0QsS0FBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUFxRCxjQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBdUQsU0FBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUF3RCxlQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXlELGNBQUEsR0FBQXpELE9BQUE7VUFHTyxXQVRQOztVQVNpQixNQUFPcUMsWUFBYSxTQUFRZSxLQUFBLENBQUFNLGdCQUFnQjtZQWdCNURDLE9BQU8sR0FBRyxJQUFJO1lBQ2QsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsVUFBVztZQUVYLENBQUFDLFlBQWEsR0FBRyxJQUFJVCxjQUFBLENBQUFVLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSUQsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBMUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQTJDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxJQUFJLEtBQUssQ0FBQ0EsS0FBSztZQUNsQztZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBaEUsWUFBQTtjQUNDLEtBQUssQ0FBQ29ELGVBQUEsQ0FBQWEsTUFBTSxDQUFDQyxTQUFTLENBQUM7Y0FDdkIsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBRyxJQUFJVixNQUFBLENBQUFpQixLQUFLLEVBQUU7Y0FDekIsSUFBSSxDQUFDLENBQUFOLFFBQVMsR0FBRyxJQUFJVixTQUFBLENBQUFpQixRQUFRLEVBQUU7WUFDaEM7WUFFQUMsVUFBVUEsQ0FBQTtjQUNULElBQUksQ0FBQ0MsV0FBVyxFQUFFO1lBQ25CO1lBRUEsTUFBTTdCLElBQUlBLENBQUM4QixXQUFXLEVBQUVkLFVBQVU7Y0FDakMsS0FBSyxDQUFDaEIsSUFBSSxDQUFDOEIsV0FBVyxFQUFFZCxVQUFVLENBQUM7Y0FFbkMsTUFBTW5ELElBQUksR0FBRyxHQUFHeUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUM1RCxFQUFFLElBQUksSUFBSSxDQUFDNkQsWUFBWSxJQUFJLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtjQUNoRixNQUFNckMsS0FBSyxHQUFHLE1BQU0sSUFBQWlDLGNBQUEsQ0FBQWxDLFlBQVksRUFBQ2IsSUFBSSxDQUFDO2NBQ3RDLElBQUksQ0FBQyxDQUFBYyxLQUFNLEdBQUdBLEtBQUssRUFBRWIsSUFBSTtjQUN6QixJQUFJLENBQUMsQ0FBQXdELEtBQU0sR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ1ksWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsT0FBTyxFQUFFcEIsVUFBVTtjQUNqQyxLQUFLLENBQUNtQixRQUFRLENBQUNDLE9BQU8sRUFBRXBCLFVBQVUsQ0FBQztjQUNuQyxJQUFJLENBQUMsQ0FBQU8sT0FBUSxHQUFHYSxPQUFPO2NBRXZCLE1BQU12RSxJQUFJLEdBQUcsR0FBR3lDLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDNUQsRUFBRSxJQUFJLElBQUksQ0FBQzZELFlBQVksSUFBSSxJQUFJLENBQUNqQixVQUFVLEVBQUU7Y0FDaEYsTUFBTXJDLEtBQUssR0FBRyxNQUFNLElBQUFpQyxjQUFBLENBQUFsQyxZQUFZLEVBQUNiLElBQUksQ0FBQztjQUN0QyxJQUFJLENBQUMsQ0FBQWMsS0FBTSxHQUFHQSxLQUFLLEVBQUViLElBQUk7Y0FDekIsSUFBSSxDQUFDLENBQUF3RCxLQUFNLEdBQUcsSUFBSTtjQUNsQixJQUFJLENBQUNZLFlBQVksRUFBRTtZQUNwQjtZQUVBRyxVQUFVLEdBQUcsTUFBTTFELEtBQUssSUFBRztjQUUxQixNQUFNMkQsTUFBTSxHQUFpQjtnQkFBRTNELEtBQUs7Z0JBQUVxQyxVQUFVLEVBQUUsSUFBSSxDQUFDQTtjQUFVLENBQUU7Y0FFbkUsSUFBSSxJQUFJLENBQUNwQixPQUFPLEVBQUUwQyxNQUFNLENBQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQWIsT0FBUSxDQUFDLEtBQzVDZSxNQUFNLENBQUNMLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVk7Y0FFNUMsTUFBTU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsQ0FBQztnQkFBRUgsTUFBTTtnQkFBRWhFLElBQUksRUFBRTtjQUFRLENBQUUsQ0FBQztjQUMzRSxNQUFNLElBQUksQ0FBQ2tFLEtBQUssQ0FBQ3hDLElBQUksRUFBRTtjQUV2QjtjQUNBLElBQUksQ0FBQzZCLFdBQVcsRUFBRTtjQUNsQixPQUFPVSxRQUFRO1lBQ2hCLENBQUM7WUFFRCxNQUFNRyxNQUFNQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQXRCLFFBQVMsQ0FBQ3NCLE1BQU0sRUFBRTtZQUMvQjtZQUVBLE1BQU1DLElBQUlBLENBQUE7Y0FDVCxNQUFNLElBQUksQ0FBQyxDQUFBdkIsUUFBUyxDQUFDdUIsSUFBSSxFQUFFO2NBQzNCLE1BQU05RSxJQUFJLEdBQUcsR0FBR3lDLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDNUQsRUFBRSxJQUFJLElBQUksQ0FBQzZELFlBQVksSUFBSSxJQUFJLENBQUNqQixVQUFVLEVBQUU7Y0FDaEYsSUFBSSxDQUFDLENBQUFyQyxLQUFNLEdBQUcsSUFBSSxDQUFDLENBQUF5QyxRQUFTLENBQUN6QyxLQUFLO2NBQ2xDLElBQUksQ0FBQ3VELFlBQVksRUFBRTtjQUNuQixNQUFNLElBQUF0QixjQUFBLENBQUFoRCxhQUFhLEVBQUNDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQXVELFFBQVMsQ0FBQ3pDLEtBQUssQ0FBQztZQUNoRDtZQUVBa0QsV0FBV0EsQ0FBQTtjQUNWLE1BQU1oRSxJQUFJLEdBQUcsR0FBR3lDLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDNUQsRUFBRSxJQUFJLElBQUksQ0FBQzZELFlBQVksSUFBSSxJQUFJLENBQUNqQixVQUFVLEVBQUU7Y0FDaEYsSUFBSSxDQUFDLENBQUFyQyxLQUFNLEdBQUdDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDc0QsWUFBWSxFQUFFO2NBQ25CLElBQUF0QixjQUFBLENBQUEvQixlQUFlLEVBQUNoQixJQUFJLENBQUM7WUFDdEI7O1VBQ0F3QyxPQUFBLENBQUFiLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvSEQsSUFBQW9ELE1BQUEsR0FBQXpGLE9BQUE7VUFHQSxJQUFBMEYsU0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBR0EsSUFBQW1ELFFBQUEsR0FBQW5ELE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUVNLFNBQVU2RixlQUFlQSxDQUFBO1lBQzlCLE1BQU07Y0FBRTFELEtBQUs7Y0FBRTJEO1lBQVUsQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDaEQsTUFBTTtjQUFFQyxXQUFXLEVBQUVDLFFBQVE7Y0FBRWhGLEVBQUUsRUFBRWlGO1lBQU0sQ0FBRSxHQUFHL0MsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJO1lBRWpFLE9BQ0NZLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNDLEdBQ3BEWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVSLFVBQVU7Y0FDckJTLE9BQU8sRUFBRTtnQkFDUkMsRUFBRSxFQUFFZixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNULFNBQUEsQ0FBQWUsUUFBUSxPQUFHO2dCQUNoQkMsRUFBRSxFQUFFakIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDVCxTQUFBLENBQUFlLFFBQVE7O1lBQ2IsRUFDQSxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFFLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBNEcsR0FBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQW1ELFFBQUEsR0FBQW5ELE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQThHLGNBQUEsR0FBQTlHLE9BQUE7VUFDTSxTQUFVeUcsUUFBUUEsQ0FBQTtZQUN2QixNQUFNO2NBQUV0RSxLQUFLO2NBQUU0RSxLQUFLO2NBQUV2RjtZQUFLLENBQUUsR0FBRyxJQUFBbUUsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNsRCxNQUFNO2NBQUU5RTtZQUFFLENBQUUsR0FBR2tCLEtBQUssQ0FBQ2tELEtBQUs7WUFDMUIsTUFBTTtjQUFFcEUsRUFBRSxFQUFFaUY7WUFBTSxDQUFFLEdBQUcvQyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUk7WUFDMUMsTUFBTW1DLFFBQVEsR0FBRzdFLEtBQUssQ0FBQ2tELEtBQUssQ0FBQzRCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNQyxRQUFRLEdBQUcsR0FBR04sUUFBQSxDQUFBTyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxnQkFBZ0JuRixLQUFLLENBQUMyQyxZQUFZLGVBQWU3RCxFQUFFLGFBQWFpRixNQUFNLGVBQWVjLFFBQVEsQ0FBQ08sSUFBSSxFQUFFO1lBQzdJLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNSLFFBQVEsQ0FBQ1UsVUFBVSxDQUFDO1lBRTdDLE9BQ0NqQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFxQixHQUN2Q1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUNuRyxLQUFLLENBQU0sRUFDL0JpRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNTLEdBQUEsQ0FBQWdCLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFVjtZQUFRLEVBQUksRUFDOUIxQixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNXLGNBQUEsQ0FBQWdCLGFBQWEsT0FBRyxDQUNaLEVBQ05yQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUNJLE1BQU0sQ0FBTSxFQUNoQ3RDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQ2xDb0IsSUFBSSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEtBQUk7Y0FDN0IsTUFBTUMsSUFBSSxHQUFHbkIsUUFBUSxDQUFDVSxVQUFVLENBQUNPLFFBQVEsQ0FBQztjQUUxQyxNQUFNRyxJQUFJLEdBQUcsU0FBU0QsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Y0FDbkMsT0FDQzVDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Z0JBQVNtQyxHQUFHLEVBQUVILElBQUksQ0FBQ3pILElBQUksQ0FBQzZILE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUFFbkMsU0FBUyxFQUFDO2NBQTJCLEdBQzlFWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2dCQUFTQyxTQUFTLEVBQUM7Y0FBaUMsR0FDbkRYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1EsTUFBQSxDQUFBNkIsT0FBTztnQkFBQ3BDLFNBQVMsRUFBQywyQkFBMkI7Z0JBQUNnQyxJQUFJLEVBQUVBO2NBQUksRUFBSSxDQUNwRCxFQUNWM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxrQkFDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxpQkFDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUSxNQUFBLENBQUE2QixPQUFPO2dCQUFDcEMsU0FBUyxFQUFDLHNDQUFzQztnQkFBQ2dDLElBQUksRUFBRUE7Y0FBSSxFQUFJLEVBQ3hFM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLZ0MsSUFBSSxDQUFDekgsSUFBSSxDQUFNLENBQ1osRUFDVCtFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsWUFBSWdDLElBQUksQ0FBQ25CLFFBQVEsQ0FBSyxDQUNiLENBQ0Q7WUFFWixDQUFDLENBQUMsQ0FDRyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQXlCLE1BQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEwRixTQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTBJLE9BQUEsR0FBQTFJLE9BQUE7VUFFTSxTQUFVMkksUUFBUUEsQ0FBQTtZQUN2QixNQUFNN0MsVUFBVSxHQUFHLElBQUEyQyxNQUFBLENBQUFHLGFBQWEsR0FBRTtZQUNsQyxPQUNDbkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0MsR0FDbkQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN5QyxRQUFRLENBQUMvQyxVQUFVLENBQUMsR0FBR0wsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDVCxTQUFBLENBQUFlLFFBQVEsT0FBRyxHQUFHaEIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUMsT0FBQSxDQUFBSSxjQUFjLE9BQUcsQ0FDakU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBckQsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEwRixTQUFBLEdBQUExRixPQUFBO1VBRU0sU0FBVThJLGNBQWNBLENBQUE7WUFDN0IsT0FDQ3JELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNDLEdBQ3BEWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNULFNBQUEsQ0FBQWUsUUFBUSxPQUFHLENBQ1A7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBaEIsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBS0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFFQSxJQUFBK0ksWUFBQSxHQUFBL0ksT0FBQTtVQUNNLFNBQVU4SCxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRTNGLEtBQUs7Y0FBRTJELFVBQVU7Y0FBRWlCO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXZELE1BQU1pQixRQUFRLEdBQUc3RSxLQUFLLENBQUNrRCxLQUFLLENBQUM0QixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FDQ3pCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUFTLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3VDLFFBQVEsQ0FBQy9DLFVBQVUsQ0FBQztjQUNsRG1ELE9BQU87Y0FDUDFDLE9BQU8sRUFBRTtnQkFDUjJDLElBQUksRUFDSHpELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzRDLFlBQUEsQ0FBQUksb0JBQW9CLFFBQ3BCMUQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSyxpQkFBaUIsUUFDakIzRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtZLEtBQUssQ0FBQ1ksUUFBUSxDQUFDMEIsVUFBVSxDQUFNLENBQ2pCLEVBQ3BCNUQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBTyxrQkFBa0IsUUFBRXRDLFFBQVEsQ0FBQ3VDLGFBQWEsQ0FBc0IsQ0FFbEU7Z0JBRURDLEtBQUssRUFDSi9ELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzRDLFlBQUEsQ0FBQUksb0JBQW9CO2tCQUFDTSxJQUFJO2dCQUFBLEdBQ3pCaEUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSyxpQkFBaUIsUUFDakIzRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtZLEtBQUssQ0FBQ1ksUUFBUSxDQUFDMEIsVUFBVSxDQUFNLENBQ2pCLEVBQ3BCNUQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBTyxrQkFBa0IsUUFBRXRDLFFBQVEsQ0FBQ3VDLGFBQWEsQ0FBc0I7O1lBR25FLEVBQ0EsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBOUQsTUFBQSxHQUFBekYsT0FBQTtVQUVBLElBQUEwSixZQUFBLEdBQUExSixPQUFBO1VBQ087VUFBVSxTQUNSMkosS0FBS0EsQ0FBQTtZQUNiLE9BQ0NsRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFrQyxHQUNsRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBRSxrQkFBa0IsT0FBRyxDQUNmO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQW5FLE1BQUEsR0FBQXpGLE9BQUE7VUFFTyxhQUhQOztVQUdtQixTQUFVNEgsV0FBV0EsQ0FBQztZQUFFaUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1R6SSxPQUFPLENBQUMwSSxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaRCxHQUFHLEdBQUdFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSCxHQUFHLENBQUM7WUFDOUIsTUFBTUksR0FBRyxHQUFHeEUsTUFBQSxDQUFBdkYsT0FBSyxDQUFDZ0ssTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnpFLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQ2lLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxPQUFPO2NBQzFCLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Z0JBQzdCLElBQUlGLE1BQU0sQ0FBQ0csUUFBUSxLQUFLQyxRQUFRLEVBQUU7Z0JBRWxDSixNQUFNLENBQUNLLFdBQVcsR0FBRyxLQUFLO2dCQUMxQkwsTUFBTSxDQUFDTSxZQUFZLEdBQUcsTUFBSztrQkFDMUJOLE1BQU0sQ0FBQ00sWUFBWSxHQUFHLElBQUk7a0JBQzFCTixNQUFNLENBQUNLLFdBQVcsR0FBRyxDQUFDO2dCQUN2QixDQUFDO2NBQ0YsQ0FBQztjQUNETCxNQUFNLENBQUNPLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFQyxZQUFZLENBQUM7Y0FFdkQsT0FBTyxNQUFNUixNQUFNLENBQUNTLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztZQUM1RSxDQUFDLEVBQUUsQ0FBQ1QsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ3BFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTzJFLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakN0RixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQVEwRCxHQUFHLEVBQUVBLEdBQUc7Y0FBRTFJLElBQUksRUFBQyxXQUFXO2NBQUM4SSxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV4QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUFyRCxHQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW1ELFFBQUEsR0FBQW5ELE9BQUE7VUFDQSxJQUFBZ0wsU0FBQSxHQUFBaEwsT0FBQTtVQUNBLElBQUFpTCxLQUFBLEdBQUFqTCxPQUFBO1VBQ0EsSUFBQWtMLEtBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRU87VUFBVSxTQUFVNEosa0JBQWtCQSxDQUFBO1lBQzVDLE1BQU07Y0FBRXpILEtBQUs7Y0FBRTRFO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1FLFFBQVEsR0FBRzlDLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDbUIsV0FBVztZQUNoRCxNQUFNbUYsWUFBWSxHQUFHaEosS0FBSyxDQUFDa0QsS0FBSyxDQUFDK0YsUUFBUSxFQUFFLENBQUNDLElBQUksRUFBRTlDLE9BQU8sQ0FBQyxJQUFJLEVBQUV0QyxRQUFRLENBQUM7WUFFekUsTUFBTXFGLElBQUksR0FBR0EsQ0FBQztjQUFFbkQ7WUFBSSxDQUFFLEtBQUk7Y0FDekIsT0FDQzFDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Z0JBQUtDLFNBQVMsRUFBQztjQUFrQixHQUNoQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLZ0MsSUFBSSxDQUFDekgsSUFBSSxDQUFNLEVBQ3BCK0UsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxlQUFPZ0MsSUFBSSxDQUFDb0QsT0FBTyxDQUFRLENBQ3RCO1lBRVIsQ0FBQztZQUNELE9BQ0M5RixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBNEUsV0FBVztjQUNYcEYsU0FBUyxFQUFDLDZCQUE2QjtjQUN2Q3lELEdBQUcsRUFBRTFILEtBQUssQ0FBQ2tELEtBQUssQ0FBQ29HLE9BQU87Y0FDeEJ0SyxJQUFJLEVBQUVnQixLQUFLLENBQUNrRCxLQUFLLENBQUNsRSxJQUFJO2NBQ3RCdUssTUFBTSxFQUFDO1lBQVUsRUFDaEIsRUFFRmpHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQU0sR0FBRVcsS0FBSyxDQUFDNEUsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDN0NuRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFXLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFO1lBQUMsR0FDdkJyRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFhLElBQUk7Y0FBQzNGLFNBQVMsRUFBQztZQUFZLEdBQzNCWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFjLEdBQUcsUUFBRWpGLEtBQUssQ0FBQ2tGLFFBQVEsQ0FBTyxFQUMzQnhHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWMsR0FBRyxRQUFFakYsS0FBSyxDQUFDbUYsUUFBUSxDQUFPLENBQ3JCLEVBQ1B6RyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFpQixLQUFLO2NBQUMvRixTQUFTLEVBQUM7WUFBa0IsR0FDbENYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzZFLFNBQUEsQ0FBQW9CLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFbEI7WUFBWSxFQUFJLEVBRW5DMUYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxjQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM4RSxLQUFBLENBQUFxQixJQUFJO2NBQ0pDLEVBQUUsRUFBQyxLQUFLO2NBQ1JuRyxTQUFTLEVBQUMsK0JBQStCO2NBQ3pDb0csS0FBSyxFQUFFckssS0FBSyxDQUFDa0QsS0FBSyxDQUFDK0YsUUFBUSxFQUFFLENBQUNjLFFBQVE7Y0FDdENPLE9BQU8sRUFBRW5CO1lBQUksRUFDWixDQUNHLENBQ0MsQ0FDTyxDQUNYLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTdGLE1BQUEsR0FBQXpGLE9BQUE7VUFxQk8sTUFBTTBNLGFBQWEsR0FBQXhKLE9BQUEsQ0FBQXdKLGFBQUEsR0FBR2pILE1BQUEsQ0FBQXZGLE9BQUssQ0FBQ3lNLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU01RyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUF2RixPQUFLLENBQUMwTSxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDeEosT0FBQSxDQUFBNkMsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJ0RSxJQUFBYSxHQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW9ELEtBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBNk0sTUFBQSxHQUFBN00sT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQThNLFVBQUEsR0FBQTlNLE9BQUE7VUFDQSxJQUFBa0wsS0FBQSxHQUFBbEwsT0FBQTtVQUVPO1VBQVUsU0FDUitNLFdBQVdBLENBQUM7WUFBRTVLO1VBQUssQ0FBMkI7WUFDdEQsTUFBTTtjQUFFNks7WUFBSSxDQUFFLEdBQUcsSUFBQXJILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFbkMsTUFBTWtILEdBQUcsR0FBRyxvQ0FBb0NELElBQUksS0FBSyxVQUFVLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUM1RixPQUNDdkgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUFzRyxhQUFhO2NBQUM5RyxTQUFTLEVBQUM7WUFBeUQsR0FDakZYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQy9DLEtBQUEsQ0FBQStKLGNBQWM7Y0FBQ3ZCLEtBQUssRUFBRXpKLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ3VHLEtBQUs7Y0FBRXhELElBQUksRUFBQyxRQUFRO2NBQUNqSCxJQUFJLEVBQUVnQixLQUFLLENBQUNrRCxLQUFLLENBQUNsRTtZQUFJLEVBQUksRUFDbEZzRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QyxHQUMxRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMEcsTUFBQSxDQUFBbEQsS0FBSyxPQUFHLENBQ0osRUFDTmxFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFFNkc7WUFBRyxHQUNsQnhILE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWtDLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFTCxJQUFJLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQUVNLFNBQVMsRUFBRSxDQUFDLENBQUNuTCxLQUFLLENBQUNrRCxLQUFLLENBQUM0QjtZQUFJLEVBQUksRUFDcEZ4QixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUwRyxJQUFJLEtBQUssVUFBVTtjQUM5Qi9ELE9BQU87Y0FDUDFDLE9BQU8sRUFBRTtnQkFDUjJDLElBQUksRUFBRXpELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFRLE9BQUc7Z0JBQ2xCK0MsS0FBSyxFQUFFL0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkcsVUFBQSxDQUFBUyxnQkFBZ0I7O1lBQ3hCLEVBQ0EsQ0FDRyxDQUNTO1VBRWxCOzs7Ozs7Ozs7OztVQ25DQTs7VUFFQTlGLE1BQUEsQ0FBQStGLGNBQUEsQ0FBQXRLLE9BQUE7WUFDQXVLLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaEYsTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUE0RyxHQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFFQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUEwTixRQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQTBJLE9BQUEsR0FBQTFJLE9BQUE7VUFDTztVQUFVLFNBQ1J1QyxZQUFZQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDdkQsTUFBTSxDQUFDNkssSUFBSSxFQUFFVyxPQUFPLENBQUMsR0FBR2xJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBUyxDQUFDLENBQUN6TCxLQUFLLENBQUNrRCxLQUFLLEVBQUU0QixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUM5RixNQUFNLENBQUNyRixLQUFLLEVBQUVpTSxRQUFRLENBQUMsR0FBR3BJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBcUJuTSxTQUFTLENBQUM7WUFDdkUsTUFBTSxDQUFDcU0sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3RJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDSSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHeEksTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVwQixLQUFLO2NBQUVySSxLQUFLO2NBQUUzQztZQUFLLENBQUUsR0FBR1csS0FBSztZQUNyQyxNQUFNO2NBQUU0RTtZQUFLLENBQUUsR0FBRzVFLEtBQUs7WUFDdkIsTUFBTTJELFVBQVUsR0FBRyxJQUFBMkMsTUFBQSxDQUFBRyxhQUFhLEdBQUU7WUFDbEMsSUFBQUgsTUFBQSxDQUFBeUYsUUFBUSxFQUFDL0wsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0JzRCxNQUFBLENBQUF2RixPQUFLLENBQUNpSyxTQUFTLENBQUMsTUFBSztjQUNwQndELE9BQU8sQ0FBQyxDQUFDLENBQUN4TCxLQUFLLENBQUNrRCxLQUFLLEVBQUU0QixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUN4RCxDQUFDLEVBQUUsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDO1lBRVgsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBT3NCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBdUgsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU1DLFlBQVksR0FBRztjQUNwQmxNLEtBQUs7Y0FDTDhCLFFBQVEsRUFBRTlCLEtBQUssQ0FBQzhCLFFBQVE7Y0FDeEI2SixTQUFTO2NBQ1RDLFlBQVk7Y0FDWmhILEtBQUs7Y0FDTHFILFFBQVEsRUFBRWpNLEtBQUssQ0FBQ2lNLFFBQVE7Y0FDeEI1QixLQUFLO2NBQ0xoTCxLQUFLLEVBQUVXLEtBQUssQ0FBQ1gsS0FBSztjQUNsQm1NLE9BQU87Y0FDUEssT0FBTztjQUNQaEIsSUFBSTtjQUNKcEwsS0FBSztjQUNMcU0sVUFBVTtjQUNWbkksVUFBVTtjQUNWd0ksUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtnQkFDdEI7Y0FDRDthQUNBO1lBRUQsTUFBTUMsS0FBSyxHQUFHO2NBQUV0TTtZQUFLLENBQUU7WUFFdkIsT0FDQ3NELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsY0FDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUixRQUFBLENBQUErRyxhQUFhLENBQUNnQyxRQUFRO2NBQUNqQixLQUFLLEVBQUVZO1lBQVksR0FDekMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN4RixRQUFRLENBQUMvQyxVQUFVLENBQUMsR0FBR0wsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUgsUUFBQSxDQUFBWCxXQUFXO2NBQUEsR0FBSzBCO1lBQUssRUFBSSxHQUFHaEosTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUMsT0FBQSxDQUFBaUcsVUFBVTtjQUFBLEdBQUtGO1lBQUssRUFBSSxDQUNuRSxDQUNwQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBdEwsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQWtMLEtBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUVBLElBQUEwSSxPQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQTBKLFlBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUE4TSxVQUFBLEdBQUE5TSxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFFTztVQUFVLFNBQ1IyTyxVQUFVQSxDQUFDO1lBQUV4TTtVQUFLLENBQTJCO1lBQ3JELE1BQU0sQ0FBQ3FLLEtBQUssQ0FBQyxHQUFHLElBQUEvRyxNQUFBLENBQUFtSSxRQUFRLEVBQUN6TCxLQUFLLENBQUNxSyxLQUFLLENBQUM7WUFDckMsTUFBTTtjQUFFUSxJQUFJO2NBQUVqRztZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMxQyxNQUFNO2NBQUVDLFdBQVcsRUFBRUMsUUFBUTtjQUFFaEYsRUFBRSxFQUFFaUY7WUFBTSxDQUFFLEdBQUcvQyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUk7WUFDakUsTUFBTTtjQUFFQyxZQUFZO2NBQUU3RDtZQUFFLENBQUUsR0FBR2tCLEtBQUssQ0FBQ2tELEtBQUs7WUFFeEMsT0FDQ0ksTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBYSxHQUM1QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBVyxhQUFhO2NBQUN6RixTQUFTLEVBQUMsZUFBZTtjQUFDMEYsTUFBTSxFQUFFO1lBQUMsR0FDakRyRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFpQixLQUFLLFFBQ0wxRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ3lJLE1BQUEsQ0FBQXhCLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFTCxJQUFJLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQUVNLFNBQVMsRUFBRSxDQUFDLENBQUNuTCxLQUFLLENBQUNrRCxLQUFLLENBQUM0QjtZQUFJLEVBQUksRUFDcEZ4QixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUwRyxJQUFJLEtBQUssVUFBVTtjQUM5Qi9ELE9BQU87Y0FDUDFDLE9BQU8sRUFBRTtnQkFDUjJDLElBQUksRUFBRXpELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ3VDLE9BQUEsQ0FBQUksY0FBYyxPQUFHO2dCQUN4QlUsS0FBSyxFQUFFL0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkcsVUFBQSxDQUFBUyxnQkFBZ0I7O1lBQ3hCLEVBQ0EsQ0FDRyxFQUVOOUgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ3VELFlBQUEsQ0FBQUUsa0JBQWtCLE9BQUcsQ0FDakIsQ0FDQyxFQUNSbkUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBYSxJQUFJLFFBQ0p0RyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFjLEdBQUcsUUFBRWpGLEtBQUssQ0FBQzhILElBQUksQ0FBQ2xILFFBQVEsQ0FBTyxFQUNoQ2xDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWMsR0FBRyxRQUFFakYsS0FBSyxDQUFDOEgsSUFBSSxDQUFDNUMsUUFBUSxDQUFPLENBQzFCLENBQ1EsQ0FDVjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBeEcsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQThPLE1BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUVBLElBQUE0RyxHQUFBLEdBQUE1RyxPQUFBO1VBR0EsSUFBQStPLFdBQUEsR0FBQS9PLE9BQUE7VUFFTyxXQU5QOztVQU1rQixNQUFNZ1AsZUFBZSxHQUFHQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsTUFBTTtZQUFFQztVQUFTLENBQUUsS0FBSTtZQUM3RSxNQUFNO2NBQUVwSSxLQUFLO2NBQUU5QyxRQUFRO2NBQUU2SixTQUFTO2NBQUVDLFlBQVk7Y0FBRXZNLEtBQUs7Y0FBRVc7WUFBSyxDQUFFLEdBQUcsSUFBQXdELFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFckYsTUFBTSxDQUFDcUksUUFBUSxFQUFFZ0IsV0FBVyxDQUFDLEdBQUcsSUFBQTNKLE1BQUEsQ0FBQW1JLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUIsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBN0osTUFBQSxDQUFBbUksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNoTSxLQUFLLEVBQUVpTSxRQUFRLENBQUMsR0FBRyxJQUFBcEksTUFBQSxDQUFBbUksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNeEYsSUFBSSxHQUFHMEYsU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLO1lBQ3ZDLE1BQU15QixRQUFRLEdBQUcsQ0FBQ3pCLFNBQVMsSUFBSXRNLEtBQUs7WUFDcEMsTUFBTWdPLE9BQU8sR0FBRyxDQUFDMUIsU0FBUyxHQUFJeUIsUUFBUSxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUksTUFBTTtZQUNwRSxNQUFNLENBQUNFLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2pLLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTSxDQUFDK0IsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUFuSyxNQUFBLENBQUFtSSxRQUFRLEVBQ2pEaUMsVUFBVSxFQUFFQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUNoRTtZQUVELE1BQU1DLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNN04sS0FBSyxDQUFDb0QsTUFBTSxFQUFFO2dCQUNwQndJLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7Z0JBQ3hCcUIsU0FBUyxDQUFDLE9BQU8sQ0FBQztlQUNsQixDQUFDLE9BQU9jLENBQUMsRUFBRTtnQkFDWHBDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBRWhCLENBQUM7WUFDRCxNQUFNcUMseUJBQXlCLEdBQUcsTUFBQUEsQ0FBQSxLQUE2QjtjQUM5RCxJQUFJO2dCQUNILElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLEVBQUU7a0JBQzNCaFAsT0FBTyxDQUFDMEksSUFBSSxDQUFDLG1EQUFtRCxDQUFDO2tCQUNqRSxPQUFPLEtBQUssQ0FBQyxDQUFDOztnQkFHZixNQUFNdUcsZ0JBQWdCLEdBQUcsTUFBTUYsU0FBUyxDQUFDQyxXQUFXLENBQUNFLEtBQUssQ0FBQztrQkFBRTVQLElBQUksRUFBRTtnQkFBOEIsQ0FBRSxDQUFDO2dCQUNwRyxPQUFPMlAsZ0JBQWdCLENBQUNFLEtBQUssS0FBSyxTQUFTO2VBQzNDLENBQUMsT0FBTzNPLEtBQUssRUFBRTtnQkFDZlIsT0FBTyxDQUFDUSxLQUFLLENBQUMseUNBQXlDQSxLQUFLLEVBQUUsQ0FBQztnQkFDL0QsT0FBTyxLQUFLLENBQUMsQ0FBQzs7WUFFaEIsQ0FBQztZQUVELE1BQU00TyxVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0hwQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNTyxhQUFhLEdBQUcsTUFBTU8seUJBQXlCLEVBQUU7Z0JBRXZELElBQUksQ0FBQ1AsYUFBYSxFQUFFO2tCQUNuQkwsWUFBWSxDQUFDLElBQUksQ0FBQztrQkFDbEI7O2dCQUdEVSxRQUFRLEVBQUU7ZUFDVixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWDdPLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDcU8sQ0FBQyxDQUFDO2dCQUNoQnBDLFFBQVEsQ0FBQyxJQUFJLENBQUM7ZUFDZCxTQUFTO2dCQUNUdUIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1xQixNQUFNLEdBQUcsTUFBTWxDLEtBQUssSUFBRztjQUM1QixNQUFNcE0sS0FBSyxDQUFDcUQsSUFBSSxFQUFFO2NBQ2xCdUksWUFBWSxDQUFDLEtBQUssQ0FBQztjQUNuQm9CLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU11QixZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QnpNLFFBQVEsQ0FDTjBNLGNBQWMsRUFBRSxDQUNoQkMsSUFBSSxDQUFDLE1BQUs7Z0JBQ1ZmLFVBQVUsRUFBRUMsWUFBWSxDQUFDZSxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDO2dCQUN4RWpCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztjQUN6QixDQUFDLENBQUMsQ0FDRGtCLEtBQUssQ0FBQ2xQLEtBQUssSUFBRztnQkFDZGlNLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTWtELFVBQVUsR0FBR3hDLEtBQUssSUFBRztjQUMxQkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIsSUFBSSxDQUFDck0sS0FBSyxDQUFDNk8sVUFBVSxFQUFFO2dCQUN0QnRCLGlCQUFpQixDQUFDLElBQUksQ0FBQztnQkFDdkI7O2NBR0RjLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFDRCxNQUFNUyxVQUFVLEdBQUdBLENBQUEsS0FBTXZCLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNd0IsUUFBUSxHQUFHaEMsTUFBTSxLQUFLLE9BQU8sR0FBR3VCLE1BQU0sR0FBR00sVUFBVTtZQUN6RCxNQUFNSSxPQUFPLEdBQUc1QyxLQUFLLElBQUc7Y0FDdkJhLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJFLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0M3SixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBd0wsTUFBTTtjQUNOQyxPQUFPLEVBQUMsU0FBUztjQUNqQmpKLElBQUksRUFBRUEsSUFBSTtjQUNWZ0csUUFBUSxFQUFFQSxRQUFRO2NBQ2xCa0QsT0FBTyxFQUFFSixRQUFRO2NBQ2pCakMsUUFBUSxFQUFFQSxRQUFRLElBQUliO1lBQVEsR0FFN0JySCxLQUFLLENBQUN5SSxPQUFPLENBQUMsQ0FDUCxFQUVUL0osTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkksTUFBQSxDQUFBeUMsZ0JBQWdCO2NBQUMvTyxJQUFJLEVBQUU2TSxTQUFTO2NBQUU4QixPQUFPLEVBQUVBLE9BQU87Y0FBRUssU0FBUyxFQUFFZDtZQUFZLEVBQUksRUFDaEZqTCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0SSxXQUFBLENBQUEwQyxxQkFBcUI7Y0FBQ2pQLElBQUksRUFBRVosS0FBSztjQUFFdVAsT0FBTyxFQUFFQSxDQUFBLEtBQU10RCxRQUFRLENBQUMsS0FBSztZQUFDLEVBQUksRUFDckU0QixjQUFjLElBQ2RoSyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNTLEdBQUEsQ0FBQThLLFVBQVU7Y0FDVmxQLElBQUksRUFBRWlOLGNBQWM7Y0FDcEIwQixPQUFPLEVBQUVGLFVBQVU7Y0FDbkJVLFdBQVcsRUFBRXhQLEtBQUssQ0FBQ3dQLFdBQVc7Y0FDOUJ4USxJQUFJLEVBQUMsYUFBYTtjQUNsQnlRLFNBQVMsRUFBRXpQLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ3dNO1lBQVksRUFFcEMsQ0FDQztVQUVMLENBQUM7VUFBQzNPLE9BQUEsQ0FBQThMLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvSEYsSUFBQXZKLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMkcsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE4TyxNQUFBLEdBQUE5TyxPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTztVQUFXLE1BQU15UixxQkFBcUIsR0FBR0EsQ0FBQztZQUFFalAsSUFBSTtZQUFFMk87VUFBTyxDQUFFLEtBQUk7WUFDckUsSUFBSSxDQUFDM08sSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV1RTtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUU2RixLQUFLO2NBQUVrRztZQUFXLENBQUUsR0FBRy9LLEtBQUssQ0FBQ3FKLFdBQVcsQ0FBQ3hPLEtBQUs7WUFFdEQsT0FDQzZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkksTUFBQSxDQUFBaUQsVUFBVTtjQUFDM0wsU0FBUyxFQUFDLGlCQUFpQjtjQUFDcUQsSUFBSSxFQUFFLElBQUk7Y0FBRWpILElBQUksRUFBRSxJQUFJO2NBQUUyTyxPQUFPLEVBQUVBLE9BQU87Y0FBRWEsUUFBUTtZQUFBLEdBQ3pGdk0sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUt5RixLQUFLLENBQU0sQ0FDWCxFQUNObkcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUSxNQUFBLENBQUFzTCxJQUFJO2NBQUM3TCxTQUFTLEVBQUMsMEJBQTBCO2NBQUNnQyxJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hEM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBeUIsR0FBRTBMLFdBQVcsQ0FBSyxDQUNuRCxDQUNNLENBQ1g7VUFFTCxDQUFDO1VBQUM1TyxPQUFBLENBQUF1TyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkYsSUFBQVMsTUFBQSxHQUFBbFMsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBbVMsTUFBQSxHQUFBblMsT0FBQTtVQUNBLElBQUFvUyxPQUFBLEdBQUFwUyxPQUFBO1VBQ0EsSUFBQXFTLE9BQUEsR0FBQXJTLE9BQUE7VUFFTztVQUFXLE1BQU11TixnQkFBZ0IsR0FBR0EsQ0FBQztZQUFFMEIsUUFBUSxHQUFHO1VBQUssQ0FBRSxLQUFJO1lBQ25FLE1BQU07Y0FBRWxJLEtBQUs7Y0FBRStHLFNBQVM7Y0FBRUUsT0FBTztjQUFFeE0sS0FBSztjQUFFVyxLQUFLO2NBQUVQO1lBQUssQ0FBRSxHQUFHLElBQUErRCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzdFLE1BQU1rRSxHQUFHLEdBQUd4RSxNQUFBLENBQUF2RixPQUFLLENBQUNnSyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU1xRixRQUFRLEdBQUcsQ0FBQ3pCLFNBQVMsSUFBSXRNLEtBQUs7WUFDcEMsTUFBTXlMLEdBQUcsR0FBRyw4QkFBOEJlLE9BQU8sR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQ3hFLE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcxSixNQUFBLENBQUF2RixPQUFLLENBQUMwTixRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3RELE1BQU0wRSxXQUFXLEdBQUc7Y0FBRXJELFFBQVE7Y0FBRUMsTUFBTTtjQUFFQztZQUFTLENBQUU7WUFFbkQsT0FDQzFKLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQW1CLEdBQ3BDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFJLEdBQUVXLEtBQUssQ0FBQzZFLEtBQUssQ0FBTSxDQUM3QixFQUNSaEssS0FBSyxJQUNMNkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0wsTUFBQSxDQUFBSyxLQUFLO2NBQUNwUixJQUFJLEVBQUMsT0FBTztjQUFDa1EsT0FBTyxFQUFDO1lBQU8sR0FDakN6UCxLQUFLLENBRVAsRUFDQUosS0FBSyxHQUNMaUUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0VrRyxNQUFNLEtBQUssT0FBTyxHQUNsQnpKLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytMLE1BQUEsQ0FBQUssS0FBSztjQUFDcFIsSUFBSSxFQUFDLFNBQVM7Y0FBQ2tRLE9BQU8sRUFBQyxTQUFTO2NBQUNqSixJQUFJLEVBQUM7WUFBTSxHQUNsRDNDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQUksR0FBRVcsS0FBSyxDQUFDeUwsV0FBVyxDQUFDQyxNQUFNLENBQUM3RyxLQUFLLENBQU0sRUFDeERuRyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVXLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQVEsQ0FDcEQsR0FFUmpOLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytMLE1BQUEsQ0FBQUssS0FBSztjQUFDcFIsSUFBSSxFQUFDLE1BQU07Y0FBQ2tRLE9BQU8sRUFBQyxNQUFNO2NBQUNqSixJQUFJLEVBQUM7WUFBTSxHQUM1QzNDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRVcsS0FBSyxDQUFDeUwsV0FBVyxDQUFDNVIsYUFBYSxDQUFRLENBRTlELENBQ0MsR0FDQSxJQUFJLEVBQ1I2RSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrRCxHQUNoRVgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFTOEQsR0FBRyxFQUFFQSxHQUFHO2NBQUU3RCxTQUFTLEVBQUU2RztZQUFHLEdBQ2hDeEgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDeEMsQ0FBQzVFLEtBQUssR0FDTmlFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDZ00sTUFBQSxDQUFBUSxLQUFLO2NBQUN6RCxNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUN6QnpKLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ2lNLE9BQUEsQ0FBQXBELGVBQWU7Y0FBQSxHQUFLc0Q7WUFBVyxFQUFJLENBQ2xDLEdBQ0EsSUFBSSxFQUVSN00sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDa00sT0FBQSxDQUFBTyxlQUFlO2NBQUNwUSxJQUFJLEVBQUUrTTtZQUFRLEVBQUksQ0FDOUIsRUFDTHZCLE9BQU8sSUFDUHZJLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQWlCLEdBQUVXLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQ0ssZUFBZSxDQUFNLENBRXpFLENBQ1EsQ0FDTCxDQUNELENBQ0o7VUFFTCxDQUFDO1VBQUMzUCxPQUFBLENBQUFxSyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REYsSUFBQTlILE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMkcsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE4TyxNQUFBLEdBQUE5TyxPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTztVQUFXLE1BQU11UixnQkFBZ0IsR0FBR0EsQ0FBQztZQUFFL08sSUFBSTtZQUFFMk8sT0FBTztZQUFFSztVQUFTLENBQUUsS0FBSTtZQUMzRSxJQUFJLENBQUNoUCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXVFO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0rTSxRQUFRLEdBQUcvTCxLQUFLLENBQUNxSixXQUFXLENBQUN4RSxLQUFLO1lBQ3hDLE1BQU1rRyxXQUFXLEdBQUcvSyxLQUFLLENBQUNxSixXQUFXLENBQUMwQixXQUFXO1lBRWpELE9BQ0NyTSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzJJLE1BQUEsQ0FBQWlELFVBQVU7Y0FDVjNMLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JxRCxJQUFJLEVBQUUsSUFBSTtjQUNWakgsSUFBSSxFQUFFLElBQUk7Y0FDVjJPLE9BQU8sRUFBRUEsT0FBTztjQUNoQmEsUUFBUTtjQUNSUixTQUFTLEVBQUVBO1lBQVMsR0FFcEIvTCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQXNCLEdBQUVXLEtBQUssQ0FBQ3FKLFdBQVcsQ0FBQzJDLEtBQUssQ0FBUSxFQUN2RXROLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBSzJNLFFBQVEsQ0FBTSxDQUNkLEVBQ05yTixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNRLE1BQUEsQ0FBQXNMLElBQUk7Y0FBQzdMLFNBQVMsRUFBQywwQkFBMEI7Y0FBQ2dDLElBQUksRUFBQztZQUFLLEVBQUcsRUFDeEQzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFMEwsV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQzVPLE9BQUEsQ0FBQXFPLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDRixJQUFBOUwsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUFnVCxZQUFBLEdBQUFoVCxPQUFBO1VBQ0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUdNLFNBQVU0UyxlQUFlQSxDQUFDO1lBQUVwUTtVQUFJLENBQUU7WUFDdkMsTUFBTTtjQUFFdUUsS0FBSztjQUFFdkYsS0FBSztjQUFFbU0sT0FBTztjQUFFeEwsS0FBSztjQUFFOEwsVUFBVTtjQUFFRCxPQUFPO2NBQUVwTSxLQUFLO2NBQUVpTTtZQUFRLENBQUUsR0FBRyxJQUFBbEksUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVqRyxJQUFJLENBQUN2RCxJQUFJLEVBQUU7WUFDWCxNQUFNeVEsTUFBTSxHQUFHLE1BQU0xRSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCUCxVQUFVLENBQUMsSUFBSSxDQUFDO2NBRWhCLElBQUk7Z0JBQ0gsTUFBTTlMLEtBQUssQ0FBQytDLFVBQVUsQ0FBQzFELEtBQUssQ0FBQztnQkFDN0JtTSxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNuQk0sVUFBVSxDQUFDLEtBQUssQ0FBQztlQUNqQixDQUFDLE9BQU9nQyxDQUFDLEVBQUU7Z0JBQ1g3TyxPQUFPLENBQUNRLEtBQUssQ0FBQ3FPLENBQUMsQ0FBQztnQkFDaEJwQyxRQUFRLENBQUM5RyxLQUFLLENBQUN5TCxXQUFXLENBQUNVLFVBQVUsQ0FBQztlQUN0QyxTQUFTO2dCQUNUakYsVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFFbkIsQ0FBQztZQUVELE1BQU1rRixPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQmhSLEtBQUssQ0FBQ3NDLFVBQVUsRUFBRTtZQUNuQixDQUFDO1lBQ0QsT0FDQ2dCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzZNLFlBQUEsQ0FBQXBMLFdBQVc7Y0FBQ2lDLEdBQUcsRUFBRXJJO1lBQUssRUFBSSxFQUMzQmlFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQWUsR0FDaENYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBd0wsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDK0IsUUFBUTtjQUFDOUIsT0FBTyxFQUFFNkI7WUFBTyxHQUNqRGhSLEtBQUssQ0FBQ3dQLFdBQVcsQ0FBQzBCLE9BQU8sQ0FBQ0MsV0FBVyxDQUM5QixFQUNUN04sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUF3TCxNQUFNO2NBQUNoSixJQUFJLEVBQUMsTUFBTTtjQUFDa0osT0FBTyxFQUFFMkIsTUFBTTtjQUFFNUIsT0FBTyxFQUFDO1lBQVMsR0FDcERsUCxLQUFLLENBQUN3UCxXQUFXLENBQUMwQixPQUFPLENBQUNFLElBQUksQ0FDdkIsQ0FDRCxDQUNKLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTlOLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUVNLFNBQVV3VCxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRXZQLFFBQVE7Y0FBRTZKLFNBQVM7Y0FBRUM7WUFBWSxDQUFFLEdBQUcsSUFBQXBJLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDc0osU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzdKLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkQ7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBR0EsT0FBTztjQUFHeUIsU0FBUztjQUFFQztZQUFZLENBQUU7VUFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFtRSxLQUFBLEdBQUF6VCxPQUFBO1VBQ0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUVNLFNBQVVvTixVQUFVQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUyxDQUFFO1lBQ2pELE1BQU07Y0FBRXZHLEtBQUs7Y0FBRTRHO1lBQU8sQ0FBRSxHQUFHLElBQUFoSSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzdDLE1BQU0yTixVQUFVLEdBQUduRixLQUFLLElBQUc7Y0FDMUJaLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDb0YsYUFBYSxDQUFDQyxPQUFPLENBQUM1RyxJQUFJLENBQUM7WUFDMUMsQ0FBQztZQUVELElBQUksQ0FBQ00sU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUUzQixPQUNDbUcsS0FBQSxDQUFBdE4sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0QsR0FDaEVxTixLQUFBLENBQUF0TixhQUFBLENBQUNQLFdBQUEsQ0FBQWlPLFdBQVc7Y0FBQ3hHLFFBQVEsRUFBRUEsUUFBUTtjQUFFZ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ3lDLFFBQVEsRUFBRUo7WUFBVSxHQUN0RUQsS0FBQSxDQUFBdE4sYUFBQSxDQUFDUCxXQUFBLENBQUF3TCxNQUFNO2NBQUEsYUFBVztZQUFVLEdBQUVySyxLQUFLLENBQUN5TCxXQUFXLENBQUM3SyxRQUFRLEUsSUFBVyxFQUNuRThMLEtBQUEsQ0FBQXROLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBd0wsTUFBTTtjQUFBLGFBQVc7WUFBUSxHQUFFckssS0FBSyxDQUFDeUwsV0FBVyxDQUFDdUIsSUFBSSxFLElBQVcsQ0FDaEQsQ0FDVDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdE8sTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUFnVSxTQUFBLEdBQUFoVSxPQUFBO1VBRkE7O1VBUU0sU0FBVTJTLEtBQUtBLENBQUM7WUFBRXpEO1VBQU0sQ0FBYztZQUMzQyxNQUFNK0UsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDcEwsUUFBUSxDQUFDcUcsTUFBTSxDQUFDO1lBQ3ZELE1BQU1nRixPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNyTCxRQUFRLENBQUNxRyxNQUFNLENBQUM7WUFFckQsTUFBTSxDQUFDaUYsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQU4sU0FBQSxDQUFBTyxRQUFRLEVBQUNOLFNBQVMsRUFBRUMsT0FBTyxFQUFFaEYsTUFBTSxLQUFLLE9BQU8sQ0FBQztZQUNoRyxNQUFNc0YsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN2RCxNQUFNQyxlQUFlLEdBQUdQLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0NqUCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxlQUFPLEdBQUd3TyxlQUFlLEVBQUUsQ0FBUSxFQUNuQ2xQLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWtCLE9BQVMsRUFDM0NYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsZUFBTyxHQUFHcU8sV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQS9PLE1BQUEsR0FBQXpGLE9BQUE7VUFEQTs7VUFFQSxNQUFNO1lBQUU0TixRQUFRO1lBQUV6RDtVQUFTLENBQUUsR0FBRzFFLE1BQUEsQ0FBQXZGLE9BQUs7VUFFL0IsU0FBVXFVLFFBQVFBLENBQUNOLFNBQWtCLEVBQUVDLE9BQWdCLEVBQUVVLEtBQUssR0FBRyxJQUFJO1lBQzFFLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2xILFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkN6RCxTQUFTLENBQUMsTUFBSztjQUNkLElBQUk0SyxVQUEwQjtjQUM5QixJQUFJSCxLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Y0FDckIsSUFBSWIsU0FBUyxFQUFFO2dCQUNkYyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxNQUFLO2tCQUM3QkYsT0FBTyxDQUFDRyxRQUFRLElBQUc7b0JBQ2xCLE9BQU9BLFFBQVEsR0FBRyxDQUFDO2tCQUNwQixDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNkLFNBQVMsQ0FBQyxDQUFDO1lBRWY5SixTQUFTLENBQUMsTUFBSztjQUNkLElBQUkrSixPQUFPLEVBQUU7Z0JBQ1pZLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNaLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVIsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1ULE9BQU8sR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVixLQUFLLEdBQUdnQixJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0MiLCJpZ25vcmVMaXN0IjpbXX0=