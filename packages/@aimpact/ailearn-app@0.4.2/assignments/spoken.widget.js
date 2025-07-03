System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.2/components", "react@18.3.1", "pragmate-ui@1.0.2/alert", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/collapsible", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/modal"], function (_export, _context2) {
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
    }, function (_pragmateUi102Components) {
      dependency_11 = _pragmateUi102Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi102Alert) {
      dependency_13 = _pragmateUi102Alert;
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
    }, function (_pragmateUi102Collapsible) {
      dependency_20 = _pragmateUi102Collapsible;
    }, function (_pragmateUi102List) {
      dependency_21 = _pragmateUi102List;
    }, function (_pragmateUi102Tabs) {
      dependency_22 = _pragmateUi102Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_23 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102Icons) {
      dependency_24 = _pragmateUi102Icons;
    }, function (_pragmateUi102Modal) {
      dependency_25 = _pragmateUi102Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
        hash: 2501374756,
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
            }), _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
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
        hash: 1186413543,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 2382901653,
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
            }, _react.default.createElement("h4", {
              className: "p1"
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
        hash: 2473591530,
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
            const cls = `scrolleable-child main-container p1 ${view === 'analysis' ? 'analysis-view' : ''}`;
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
        hash: 1856143310,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJyZWFkeSIsIm1vZGVsSWQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJWb2ljZSIsIlJlY29yZGVyIiwiY2xlYW5BdWRpbyIsImRlbGV0ZUF1ZGlvIiwiYXNzaWdtZW50SWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhc3NpZ25tZW50SWQiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkVGVzdCIsImRyYWZ0SWQiLCJzZW5kU3Bva2VuIiwicGFyYW1zIiwicmVzcG9uc2UiLCJtb2RlbCIsInB1Ymxpc2hTcG9rZW4iLCJyZWNvcmQiLCJzdG9wIiwiX3JlYWN0IiwiX2ZlZWRiYWNrIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIkRlc2t0b3BBbmFseXNpcyIsInNjcmVlblNpemUiLCJ1c2VTcG9rZW5Db250ZXh0IiwiZGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInVzZXJJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJtZCIsIkZlZWRiYWNrIiwibGciLCJfaWNvbnMiLCJfdWkiLCJfd3JhcHBlciIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsImRhdGUiLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsImFuYWx5c2lzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJUcmFuc2NyaXB0aW9uIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwicmVwbGFjZSIsIkFwcEljb24iLCJfaG9va3MiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsImFsZXJ0Q29udGVudCIsImdldFNwZWNzIiwidGFzayIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiYXNpZGUiLCJ0aXRsZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rlc2t0b3AiLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl90YWJzMiIsInRhYnMiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwiZSIsImNoZWNrTWljcm9waG9uZVBlcm1pc3Npb24iLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25TdGF0dXMiLCJxdWVyeSIsInN0YXRlIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImVuc3VyZVBsYXkiLCJoYXNDcmVkaXRzIiwiY2xvc2VNb2RhbCIsIm9uQWN0aW9uIiwib25DbG9zZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsIkNvaW5zTW9kYWwiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwidGV4dCIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZGVza3RvcC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL3RyYW5zY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUE7VUFDQSxNQUFNQyxhQUFjLFNBQVFGLE1BQUEsQ0FBQUcsT0FBSztZQUNoQ0MsVUFBVTtZQUVWQyxZQUFBO2NBQ0MsS0FBSyxDQUFDLGVBQWUsQ0FBQztjQUN0QixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUN0QkgsVUFBVSxFQUFFLHdCQUF3QixDQUFDO2VBQ3JDLENBQUM7Y0FDRixJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDM0M7O1VBWUQ7VUFDQSxNQUFNQyxFQUFFLEdBQUcsSUFBSVAsYUFBYSxFQUFFO1VBRTlCO1VBQ08sZUFBZVEsYUFBYUEsQ0FBQ0MsSUFBWSxFQUFFQyxJQUFVO1lBQzNEO1lBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQU1KLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNLLEtBQUssRUFBRTtZQUU1RSxJQUFJSCxhQUFhLEVBQUU7Y0FDbEI7Y0FDQSxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ2EsTUFBTSxDQUFDSixhQUFhLENBQUNLLEVBQUcsRUFBRTtnQkFDN0NDLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO2dCQUNmQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFBSTtnQkFDZlI7ZUFDQSxDQUFDO2NBQ0ZTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQlgsSUFBSSxrQkFBa0JFLGFBQWEsQ0FBQ0ssRUFBRSxHQUFHLENBQUM7Y0FDMUUsT0FBT0wsYUFBYSxDQUFDSyxFQUFHO2FBQ3hCLE1BQU07Y0FDTjtjQUNBLE1BQU1BLEVBQUUsR0FBRyxNQUFNVCxFQUFFLENBQUNMLFVBQVUsQ0FBQ21CLEdBQUcsQ0FBQztnQkFDbENaLElBQUk7Z0JBQ0pRLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO2dCQUNmQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFBSTtnQkFDZlI7ZUFDQSxDQUFDO2NBRUYsT0FBT00sRUFBRTs7VUFFWDtVQUVBO1VBQ08sZUFBZU0sWUFBWUEsQ0FBQ2IsSUFBWTtZQUM5QyxNQUFNYyxLQUFLLEdBQUcsTUFBTWhCLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNLLEtBQUssRUFBRTtZQUNwRSxJQUFJUyxLQUFLLEVBQUU7Y0FDVixPQUFPQSxLQUFLOztZQUdiLE9BQU9DLFNBQVM7VUFDakI7VUFFQTtVQUNPLGVBQWVDLGVBQWVBLENBQUNoQixJQUFZO1lBQ2pELElBQUk7Y0FDSDtjQUNBLE1BQU1jLEtBQUssR0FBRyxNQUFNRCxZQUFZLENBQUNiLElBQUksQ0FBQztjQUV0QyxJQUFJLENBQUNjLEtBQUssRUFBRTtnQkFDWCxPQUFPLEtBQUssQ0FBQyxDQUFDOztjQUdmO2NBQ0EsTUFBTWhCLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLENBQUNpQixNQUFNLEVBQUU7Y0FFdkQsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNiLENBQUMsT0FBT0MsS0FBSyxFQUFFO2NBQ2ZSLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDLDBDQUEwQ2xCLElBQUksSUFBSSxFQUFFa0IsS0FBSyxDQUFDO2NBQ3hFLE9BQU8sS0FBSyxDQUFDLENBQUM7O1VBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGQSxJQUFBQyxXQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQThCLEtBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsTUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxNQUFBLEdBQUFoQyxPQUFBO1VBQ087VUFBVSxNQUNYaUMsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBRyxJQUFJQSxDQUFBO2NBQ0hsQixXQUFBLENBQUFtQixZQUFZLENBQUNDLEtBQUssRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBakIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCRCxJQUFBa0IsUUFBQSxHQUFBbkQsT0FBQTtVQUVBLElBQUFvRCxLQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXFELGNBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxTQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELGVBQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsY0FBQSxHQUFBekQsT0FBQTtVQUdPLFdBVFA7O1VBU2lCLE1BQU9xQyxZQUFhLFNBQVFlLEtBQUEsQ0FBQU0sZ0JBQWdCO1lBZ0I1REMsT0FBTyxHQUFHLElBQUk7WUFDZCxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxVQUFXO1lBRVgsQ0FBQUMsWUFBYSxHQUFHLElBQUlULGNBQUEsQ0FBQVUsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJRCxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFFLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUExQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBMkMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLElBQUksS0FBSyxDQUFDQSxLQUFLO1lBQ2xDO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUFoRSxZQUFBO2NBQ0MsS0FBSyxDQUFDb0QsZUFBQSxDQUFBYSxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN2QixJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHLElBQUlWLE1BQUEsQ0FBQWlCLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQU4sUUFBUyxHQUFHLElBQUlWLFNBQUEsQ0FBQWlCLFFBQVEsRUFBRTtZQUNoQztZQUVBQyxVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDQyxXQUFXLEVBQUU7WUFDbkI7WUFFQSxNQUFNN0IsSUFBSUEsQ0FBQzhCLFdBQVcsRUFBRWQsVUFBVTtjQUNqQyxLQUFLLENBQUNoQixJQUFJLENBQUM4QixXQUFXLEVBQUVkLFVBQVUsQ0FBQztjQUVuQyxNQUFNbkQsSUFBSSxHQUFHLEdBQUd5QyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUksQ0FBQzVELEVBQUUsSUFBSSxJQUFJLENBQUM2RCxZQUFZLElBQUksSUFBSSxDQUFDakIsVUFBVSxFQUFFO2NBQ2hGLE1BQU1yQyxLQUFLLEdBQUcsTUFBTSxJQUFBaUMsY0FBQSxDQUFBbEMsWUFBWSxFQUFDYixJQUFJLENBQUM7Y0FDdEMsSUFBSSxDQUFDLENBQUFjLEtBQU0sR0FBR0EsS0FBSyxFQUFFYixJQUFJO2NBQ3pCLElBQUksQ0FBQyxDQUFBd0QsS0FBTSxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDWSxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxPQUFPLEVBQUVwQixVQUFVO2NBQ2pDLEtBQUssQ0FBQ21CLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFcEIsVUFBVSxDQUFDO2NBQ25DLElBQUksQ0FBQyxDQUFBTyxPQUFRLEdBQUdhLE9BQU87Y0FFdkIsTUFBTXZFLElBQUksR0FBRyxHQUFHeUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUM1RCxFQUFFLElBQUksSUFBSSxDQUFDNkQsWUFBWSxJQUFJLElBQUksQ0FBQ2pCLFVBQVUsRUFBRTtjQUNoRixNQUFNckMsS0FBSyxHQUFHLE1BQU0sSUFBQWlDLGNBQUEsQ0FBQWxDLFlBQVksRUFBQ2IsSUFBSSxDQUFDO2NBQ3RDLElBQUksQ0FBQyxDQUFBYyxLQUFNLEdBQUdBLEtBQUssRUFBRWIsSUFBSTtjQUN6QixJQUFJLENBQUMsQ0FBQXdELEtBQU0sR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ1ksWUFBWSxFQUFFO1lBQ3BCO1lBRUFHLFVBQVUsR0FBRyxNQUFNMUQsS0FBSyxJQUFHO2NBRTFCLE1BQU0yRCxNQUFNLEdBQWlCO2dCQUFFM0QsS0FBSztnQkFBRXFDLFVBQVUsRUFBRSxJQUFJLENBQUNBO2NBQVUsQ0FBRTtjQUVuRSxJQUFJLElBQUksQ0FBQ3BCLE9BQU8sRUFBRTBDLE1BQU0sQ0FBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBYixPQUFRLENBQUMsS0FDNUNlLE1BQU0sQ0FBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWTtjQUU1QyxNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO2dCQUFFSCxNQUFNO2dCQUFFaEUsSUFBSSxFQUFFO2NBQVEsQ0FBRSxDQUFDO2NBRTNFO2NBQ0EsTUFBTSxJQUFJLENBQUNrRSxLQUFLLENBQUN4QyxJQUFJLEVBQUU7Y0FFdkI7Y0FDQSxJQUFJLENBQUM2QixXQUFXLEVBQUU7Y0FDbEIsT0FBT1UsUUFBUTtZQUNoQixDQUFDO1lBRUQsTUFBTUcsTUFBTUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUF0QixRQUFTLENBQUNzQixNQUFNLEVBQUU7WUFDL0I7WUFFQSxNQUFNQyxJQUFJQSxDQUFBO2NBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLFFBQVMsQ0FBQ3VCLElBQUksRUFBRTtjQUMzQixNQUFNOUUsSUFBSSxHQUFHLEdBQUd5QyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUksQ0FBQzVELEVBQUUsSUFBSSxJQUFJLENBQUM2RCxZQUFZLElBQUksSUFBSSxDQUFDakIsVUFBVSxFQUFFO2NBQ2hGLElBQUksQ0FBQyxDQUFBckMsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBeUMsUUFBUyxDQUFDekMsS0FBSztjQUNsQyxJQUFJLENBQUN1RCxZQUFZLEVBQUU7Y0FDbkIsTUFBTSxJQUFBdEIsY0FBQSxDQUFBaEQsYUFBYSxFQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUF1RCxRQUFTLENBQUN6QyxLQUFLLENBQUM7WUFDaEQ7WUFFQWtELFdBQVdBLENBQUE7Y0FDVixNQUFNaEUsSUFBSSxHQUFHLEdBQUd5QyxRQUFBLENBQUF5QixjQUFjLENBQUNDLElBQUksQ0FBQzVELEVBQUUsSUFBSSxJQUFJLENBQUM2RCxZQUFZLElBQUksSUFBSSxDQUFDakIsVUFBVSxFQUFFO2NBQ2hGLElBQUksQ0FBQyxDQUFBckMsS0FBTSxHQUFHQyxTQUFTO2NBQ3ZCLElBQUksQ0FBQ3NELFlBQVksRUFBRTtjQUNuQixJQUFBdEIsY0FBQSxDQUFBL0IsZUFBZSxFQUFDaEIsSUFBSSxDQUFDO1lBQ3RCOztVQUNBd0MsT0FBQSxDQUFBYixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaklELElBQUFvRCxNQUFBLEdBQUF6RixPQUFBO1VBR0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUdBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQTRGLFdBQUEsR0FBQTVGLE9BQUE7VUFFTSxTQUFVNkYsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUUxRCxLQUFLO2NBQUUyRDtZQUFVLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ2hELE1BQU07Y0FBRUMsV0FBVyxFQUFFQyxRQUFRO2NBQUVoRixFQUFFLEVBQUVpRjtZQUFNLENBQUUsR0FBRy9DLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSTtZQUVqRSxPQUNDWSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQyxHQUNwRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUFTLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFUixVQUFVO2NBQ3JCUyxPQUFPLEVBQUU7Z0JBQ1JDLEVBQUUsRUFBRWYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDVCxTQUFBLENBQUFlLFFBQVEsT0FBRztnQkFDaEJDLEVBQUUsRUFBRWpCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFROztZQUNiLEVBQ0EsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBRSxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTRHLEdBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFtRCxRQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUE4RyxjQUFBLEdBQUE5RyxPQUFBO1VBQ00sU0FBVXlHLFFBQVFBLENBQUE7WUFDdkIsTUFBTTtjQUFFdEUsS0FBSztjQUFFNEUsS0FBSztjQUFFdkY7WUFBSyxDQUFFLEdBQUcsSUFBQW1FLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDbEQsTUFBTTtjQUFFOUU7WUFBRSxDQUFFLEdBQUdrQixLQUFLLENBQUNrRCxLQUFLO1lBQzFCLE1BQU07Y0FBRXBFLEVBQUUsRUFBRWlGO1lBQU0sQ0FBRSxHQUFHL0MsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJO1lBQzFDLE1BQU1tQyxRQUFRLEdBQUc3RSxLQUFLLENBQUNrRCxLQUFLLENBQUM0QixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTUMsUUFBUSxHQUFHLEdBQUdOLFFBQUEsQ0FBQU8sUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sZ0JBQWdCbkYsS0FBSyxDQUFDMkMsWUFBWSxlQUFlN0QsRUFBRSxhQUFhaUYsTUFBTSxlQUFlYyxRQUFRLENBQUNPLElBQUksRUFBRTtZQUM3SSxNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDUixRQUFRLENBQUNVLFVBQVUsQ0FBQztZQUU3QyxPQUNDakMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBcUIsR0FDdkNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtZLEtBQUssQ0FBQ1ksUUFBUSxDQUFDbkcsS0FBSyxDQUFNLEVBQy9CaUUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUFnQixXQUFXO2NBQUNDLEdBQUcsRUFBRVY7WUFBUSxFQUFJLEVBQzlCMUIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDVyxjQUFBLENBQUFnQixhQUFhLE9BQUcsQ0FDWixFQUNOckMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNyQlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLWSxLQUFLLENBQUNZLFFBQVEsQ0FBQ0ksTUFBTSxDQUFNLEVBQ2hDdEMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENvQixJQUFJLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEVBQUVDLEtBQUssS0FBSTtjQUM3QixNQUFNQyxJQUFJLEdBQUduQixRQUFRLENBQUNVLFVBQVUsQ0FBQ08sUUFBUSxDQUFDO2NBRTFDLE1BQU1HLElBQUksR0FBRyxTQUFTRCxJQUFJLENBQUNFLE1BQU0sRUFBRTtjQUNuQyxPQUNDNUMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtnQkFBU21DLEdBQUcsRUFBRUgsSUFBSSxDQUFDekgsSUFBSSxDQUFDNkgsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQUVuQyxTQUFTLEVBQUM7Y0FBMkIsR0FDOUVYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Z0JBQVNDLFNBQVMsRUFBQztjQUFpQyxHQUNuRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUSxNQUFBLENBQUE2QixPQUFPO2dCQUFDcEMsU0FBUyxFQUFDLDJCQUEyQjtnQkFBQ2dDLElBQUksRUFBRUE7Y0FBSSxFQUFJLENBQ3BELEVBQ1YzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGtCQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGlCQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNRLE1BQUEsQ0FBQTZCLE9BQU87Z0JBQUNwQyxTQUFTLEVBQUMsc0NBQXNDO2dCQUFDZ0MsSUFBSSxFQUFFQTtjQUFJLEVBQUksRUFDeEUzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtnQyxJQUFJLENBQUN6SCxJQUFJLENBQU0sQ0FDWixFQUNUK0UsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxZQUFJZ0MsSUFBSSxDQUFDbkIsUUFBUSxDQUFLLENBQ2IsQ0FDRDtZQUVaLENBQUMsQ0FBQyxDQUNHLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBeUIsTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBMEksT0FBQSxHQUFBMUksT0FBQTtVQUVNLFNBQVUySSxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU03QyxVQUFVLEdBQUcsSUFBQTJDLE1BQUEsQ0FBQUcsYUFBYSxHQUFFO1lBQ2xDLE9BQ0NuRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQyxHQUNuRCxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3lDLFFBQVEsQ0FBQy9DLFVBQVUsQ0FBQyxHQUFHTCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNULFNBQUEsQ0FBQWUsUUFBUSxPQUFHLEdBQUdoQixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1QyxPQUFBLENBQUFJLGNBQWMsT0FBRyxDQUNqRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFyRCxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFFTSxTQUFVOEksY0FBY0EsQ0FBQTtZQUM3QixPQUNDckQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0MsR0FDcERYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFRLE9BQUcsQ0FDUDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFoQixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFLQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUVBLElBQUErSSxZQUFBLEdBQUEvSSxPQUFBO1VBQ00sU0FBVThILGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFM0YsS0FBSztjQUFFMkQsVUFBVTtjQUFFaUI7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdkQsTUFBTWlCLFFBQVEsR0FBRzdFLEtBQUssQ0FBQ2tELEtBQUssQ0FBQzRCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUU3QyxPQUNDekIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDdUMsUUFBUSxDQUFDL0MsVUFBVSxDQUFDO2NBQ2xEbUQsT0FBTztjQUNQMUMsT0FBTyxFQUFFO2dCQUNSMkMsSUFBSSxFQUNIekQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSSxvQkFBb0IsUUFDcEIxRCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFLLGlCQUFpQixRQUNqQjNELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUMwQixVQUFVLENBQU0sQ0FDakIsRUFDcEI1RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFPLGtCQUFrQixRQUFFdEMsUUFBUSxDQUFDdUMsYUFBYSxDQUFzQixDQUVsRTtnQkFFREMsS0FBSyxFQUNKL0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEMsWUFBQSxDQUFBSSxvQkFBb0I7a0JBQUNNLElBQUk7Z0JBQUEsR0FDekJoRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFLLGlCQUFpQixRQUNqQjNELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsYUFBS1ksS0FBSyxDQUFDWSxRQUFRLENBQUMwQixVQUFVLENBQU0sQ0FDakIsRUFDcEI1RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM0QyxZQUFBLENBQUFPLGtCQUFrQixRQUFFdEMsUUFBUSxDQUFDdUMsYUFBYSxDQUFzQjs7WUFHbkUsRUFDQSxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUE5RCxNQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQTBKLFlBQUEsR0FBQTFKLE9BQUE7VUFDTztVQUFVLFNBQ1IySixLQUFLQSxDQUFBO1lBQ2IsT0FDQ2xFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWtDLEdBQ2xEWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1RCxZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBbkUsTUFBQSxHQUFBekYsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVU0SCxXQUFXQSxDQUFDO1lBQUVpQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUU7Y0FDVHpJLE9BQU8sQ0FBQzBJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1pELEdBQUcsR0FBR0UsR0FBRyxDQUFDQyxlQUFlLENBQUNILEdBQUcsQ0FBQztZQUM5QixNQUFNSSxHQUFHLEdBQUd4RSxNQUFBLENBQUF2RixPQUFLLENBQUNnSyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCekUsTUFBQSxDQUFBdkYsT0FBSyxDQUFDaUssU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FDMUIsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztnQkFDN0IsSUFBSUYsTUFBTSxDQUFDRyxRQUFRLEtBQUtDLFFBQVEsRUFBRTtnQkFFbENKLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLEtBQUs7Z0JBQzFCTCxNQUFNLENBQUNNLFlBQVksR0FBRyxNQUFLO2tCQUMxQk4sTUFBTSxDQUFDTSxZQUFZLEdBQUcsSUFBSTtrQkFDMUJOLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLENBQUM7Z0JBQ3ZCLENBQUM7Y0FDRixDQUFDO2NBQ0RMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUVDLFlBQVksQ0FBQztjQUV2RCxPQUFPLE1BQU1SLE1BQU0sQ0FBQ1MsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUVQLGdCQUFnQixDQUFDO1lBQzVFLENBQUMsRUFBRSxDQUFDVCxHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDcEUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFPMkUsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3RGLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBUTBELEdBQUcsRUFBRUEsR0FBRztjQUFFMUksSUFBSSxFQUFDLFdBQVc7Y0FBQzhJLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXJELEdBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBbUQsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFnTCxTQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQWlMLEtBQUEsR0FBQWpMLE9BQUE7VUFDQSxJQUFBa0wsS0FBQSxHQUFBbEwsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTztVQUFVLFNBQVU0SixrQkFBa0JBLENBQUE7WUFDNUMsTUFBTTtjQUFFekgsS0FBSztjQUFFNEU7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUUsUUFBUSxHQUFHOUMsUUFBQSxDQUFBeUIsY0FBYyxDQUFDQyxJQUFJLENBQUNtQixXQUFXO1lBQ2hELE1BQU1tRixZQUFZLEdBQUdoSixLQUFLLENBQUNrRCxLQUFLLENBQUMrRixRQUFRLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFOUMsT0FBTyxDQUFDLElBQUksRUFBRXRDLFFBQVEsQ0FBQztZQUV6RSxNQUFNcUYsSUFBSSxHQUFHQSxDQUFDO2NBQUVuRDtZQUFJLENBQUUsS0FBSTtjQUN6QixPQUNDMUMsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUtnQyxJQUFJLENBQUN6SCxJQUFJLENBQU0sRUFDcEIrRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGVBQU9nQyxJQUFJLENBQUNvRCxPQUFPLENBQVEsQ0FDdEI7WUFFUixDQUFDO1lBQ0QsT0FDQzlGLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNDdkQsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUE0RSxXQUFXO2NBQ1hwRixTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDeUQsR0FBRyxFQUFFMUgsS0FBSyxDQUFDa0QsS0FBSyxDQUFDb0csT0FBTztjQUN4QnRLLElBQUksRUFBRWdCLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ2xFLElBQUk7Y0FDdEJ1SyxNQUFNLEVBQUM7WUFBVSxFQUNoQixFQUVGakcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBSSxHQUFFVyxLQUFLLENBQUM0RSxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUMzQ25HLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQVcsYUFBYTtjQUFDQyxNQUFNLEVBQUU7WUFBQyxHQUN2QnJHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWEsSUFBSTtjQUFDM0YsU0FBUyxFQUFDO1lBQVksR0FDM0JYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWMsR0FBRyxRQUFFakYsS0FBSyxDQUFDa0YsUUFBUSxDQUFPLEVBQzNCeEcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBYyxHQUFHLFFBQUVqRixLQUFLLENBQUNtRixRQUFRLENBQU8sQ0FDckIsRUFDUHpHLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWlCLEtBQUs7Y0FBQy9GLFNBQVMsRUFBQztZQUFrQixHQUNsQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNkUsU0FBQSxDQUFBb0IsUUFBUTtjQUFDQyxPQUFPLEVBQUVsQjtZQUFZLEVBQUksRUFFbkMxRixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzhFLEtBQUEsQ0FBQXFCLElBQUk7Y0FDSkMsRUFBRSxFQUFDLEtBQUs7Y0FDUm5HLFNBQVMsRUFBQyxlQUFlO2NBQ3pCb0csS0FBSyxFQUFFckssS0FBSyxDQUFDa0QsS0FBSyxDQUFDK0YsUUFBUSxFQUFFLENBQUNjLFFBQVE7Y0FDdENPLE9BQU8sRUFBRW5CO1lBQUksRUFDWixDQUNHLENBQ0MsQ0FDTyxDQUNYLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTdGLE1BQUEsR0FBQXpGLE9BQUE7VUFxQk8sTUFBTTBNLGFBQWEsR0FBQXhKLE9BQUEsQ0FBQXdKLGFBQUEsR0FBR2pILE1BQUEsQ0FBQXZGLE9BQUssQ0FBQ3lNLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU01RyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUF2RixPQUFLLENBQUMwTSxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDeEosT0FBQSxDQUFBNkMsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJ0RSxJQUFBYSxHQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW9ELEtBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUF5RixNQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBNk0sTUFBQSxHQUFBN00sT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQThNLFVBQUEsR0FBQTlNLE9BQUE7VUFDQSxJQUFBa0wsS0FBQSxHQUFBbEwsT0FBQTtVQUVPO1VBQVUsU0FDUitNLFdBQVdBLENBQUM7WUFBRTVLO1VBQUssQ0FBMkI7WUFDdEQsTUFBTTtjQUFFNks7WUFBSSxDQUFFLEdBQUcsSUFBQXJILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFbkMsTUFBTWtILEdBQUcsR0FBRyx1Q0FBdUNELElBQUksS0FBSyxVQUFVLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUMvRixPQUNDdkgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUFzRyxhQUFhO2NBQUM5RyxTQUFTLEVBQUM7WUFBeUQsR0FDakZYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQy9DLEtBQUEsQ0FBQStKLGNBQWM7Y0FBQ3ZCLEtBQUssRUFBRXpKLEtBQUssQ0FBQ2tELEtBQUssQ0FBQ3VHLEtBQUs7Y0FBRXhELElBQUksRUFBQyxRQUFRO2NBQUNqSCxJQUFJLEVBQUVnQixLQUFLLENBQUNrRCxLQUFLLENBQUNsRTtZQUFJLEVBQUksRUFDbEZzRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QyxHQUMxRFgsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMEcsTUFBQSxDQUFBbEQsS0FBSyxPQUFHLENBQ0osRUFDTmxFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFFNkc7WUFBRyxHQUNsQnhILE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWtDLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFTCxJQUFJLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQUVNLFNBQVMsRUFBRSxDQUFDLENBQUNuTCxLQUFLLENBQUNrRCxLQUFLLENBQUM0QjtZQUFJLEVBQUksRUFDcEZ4QixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUwRyxJQUFJLEtBQUssVUFBVTtjQUM5Qi9ELE9BQU87Y0FDUDFDLE9BQU8sRUFBRTtnQkFDUjJDLElBQUksRUFBRXpELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1QsU0FBQSxDQUFBZSxRQUFRLE9BQUc7Z0JBQ2xCK0MsS0FBSyxFQUFFL0QsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDMkcsVUFBQSxDQUFBUyxnQkFBZ0I7O1lBQ3hCLEVBQ0EsQ0FDRyxDQUNTO1VBRWxCOzs7Ozs7Ozs7OztVQ25DQTs7VUFFQTlGLE1BQUEsQ0FBQStGLGNBQUEsQ0FBQXRLLE9BQUE7WUFDQXVLLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaEYsTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUE0RyxHQUFBLEdBQUE1RyxPQUFBO1VBRUEsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFFQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUEwTixRQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQTBJLE9BQUEsR0FBQTFJLE9BQUE7VUFFTztVQUFVLFNBQ1J1QyxZQUFZQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDdkQsTUFBTSxDQUFDNkssSUFBSSxFQUFFVyxPQUFPLENBQUMsR0FBR2xJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBUyxDQUFDLENBQUN6TCxLQUFLLENBQUNrRCxLQUFLLEVBQUU0QixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUM5RixNQUFNLENBQUNyRixLQUFLLEVBQUVpTSxRQUFRLENBQUMsR0FBR3BJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBcUJuTSxTQUFTLENBQUM7WUFDdkUsTUFBTSxDQUFDcU0sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3RJLE1BQUEsQ0FBQXZGLE9BQUssQ0FBQzBOLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDSSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHeEksTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVwQixLQUFLO2NBQUVySSxLQUFLO2NBQUUzQztZQUFLLENBQUUsR0FBR1csS0FBSztZQUNyQyxNQUFNO2NBQUU0RTtZQUFLLENBQUUsR0FBRzVFLEtBQUs7WUFDdkIsTUFBTTJELFVBQVUsR0FBRyxJQUFBMkMsTUFBQSxDQUFBRyxhQUFhLEdBQUU7WUFDbEMsSUFBQUgsTUFBQSxDQUFBeUYsUUFBUSxFQUFDL0wsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0JzRCxNQUFBLENBQUF2RixPQUFLLENBQUNpSyxTQUFTLENBQUMsTUFBSztjQUNwQndELE9BQU8sQ0FBQyxDQUFDLENBQUN4TCxLQUFLLENBQUNrRCxLQUFLLEVBQUU0QixJQUFJLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUN4RCxDQUFDLEVBQUUsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDO1lBRVgsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBT3NCLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBdUgsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU1DLFlBQVksR0FBRztjQUNwQmxNLEtBQUs7Y0FDTDhCLFFBQVEsRUFBRTlCLEtBQUssQ0FBQzhCLFFBQVE7Y0FDeEI2SixTQUFTO2NBQ1RDLFlBQVk7Y0FDWmhILEtBQUs7Y0FDTHFILFFBQVEsRUFBRWpNLEtBQUssQ0FBQ2lNLFFBQVE7Y0FDeEI1QixLQUFLO2NBQ0xoTCxLQUFLLEVBQUVXLEtBQUssQ0FBQ1gsS0FBSztjQUNsQm1NLE9BQU87Y0FDUEssT0FBTztjQUNQaEIsSUFBSTtjQUNKcEwsS0FBSztjQUNMcU0sVUFBVTtjQUNWbkksVUFBVTtjQUNWd0ksUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtnQkFDdEI7Y0FDRDthQUNBO1lBRUQsTUFBTUMsS0FBSyxHQUFHO2NBQUV0TTtZQUFLLENBQUU7WUFFdkIsT0FDQ3NELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsY0FDQ1YsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUixRQUFBLENBQUErRyxhQUFhLENBQUNnQyxRQUFRO2NBQUNqQixLQUFLLEVBQUVZO1lBQVksR0FDekMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN4RixRQUFRLENBQUMvQyxVQUFVLENBQUMsR0FBR0wsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUgsUUFBQSxDQUFBWCxXQUFXO2NBQUEsR0FBSzBCO1lBQUssRUFBSSxHQUFHaEosTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDdUMsT0FBQSxDQUFBaUcsVUFBVTtjQUFBLEdBQUtGO1lBQUssRUFBSSxDQUNuRSxDQUNwQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBdEwsUUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQWtMLEtBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUVBLElBQUEwSSxPQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQTBKLFlBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBMkYsUUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUE4TSxVQUFBLEdBQUE5TSxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNPO1VBQVUsU0FDUjJPLFVBQVVBLENBQUM7WUFBRXhNO1VBQUssQ0FBMkI7WUFDckQsTUFBTSxDQUFDcUssS0FBSyxDQUFDLEdBQUcsSUFBQS9HLE1BQUEsQ0FBQW1JLFFBQVEsRUFBQ3pMLEtBQUssQ0FBQ3FLLEtBQUssQ0FBQztZQUNyQyxNQUFNO2NBQUVRLElBQUk7Y0FBRWpHO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzFDLE1BQU07Y0FBRUMsV0FBVyxFQUFFQyxRQUFRO2NBQUVoRixFQUFFLEVBQUVpRjtZQUFNLENBQUUsR0FBRy9DLFFBQUEsQ0FBQXlCLGNBQWMsQ0FBQ0MsSUFBSTtZQUNqRSxNQUFNO2NBQUVDLFlBQVk7Y0FBRTdEO1lBQUUsQ0FBRSxHQUFHa0IsS0FBSyxDQUFDa0QsS0FBSztZQUV4QyxNQUFNOEIsUUFBUSxHQUFHLEdBQUdOLFFBQUEsQ0FBQU8sUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sZ0JBQWdCeEMsWUFBWSxlQUFlN0QsRUFBRSxhQUFhaUYsTUFBTSxRQUFRO1lBQ2pILE9BQ0NULE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWEsR0FDNUJYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQVcsYUFBYTtjQUFDekYsU0FBUyxFQUFDLGVBQWU7Y0FBQzBGLE1BQU0sRUFBRTtZQUFDLEdBQ2pEckcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBaUIsS0FBSyxRQUNMMUcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxjQUNDVixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN5SSxNQUFBLENBQUF4QixVQUFVO2NBQUNDLFFBQVEsRUFBRUwsSUFBSSxLQUFLLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQztjQUFFTSxTQUFTLEVBQUUsQ0FBQyxDQUFDbkwsS0FBSyxDQUFDa0QsS0FBSyxDQUFDNEI7WUFBSSxFQUFJLEVBQ3BGeEIsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUCxXQUFBLENBQUFTLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFMEcsSUFBSSxLQUFLLFVBQVU7Y0FDOUIvRCxPQUFPO2NBQ1AxQyxPQUFPLEVBQUU7Z0JBQ1IyQyxJQUFJLEVBQUV6RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1QyxPQUFBLENBQUFJLGNBQWMsT0FBRztnQkFDeEJVLEtBQUssRUFBRS9ELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzJHLFVBQUEsQ0FBQVMsZ0JBQWdCOztZQUN4QixFQUNBLENBQ0csRUFFTjlILE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUN1RCxZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2pCLENBQ0MsRUFDUm5FLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytFLEtBQUEsQ0FBQWEsSUFBSSxRQUNKdEcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDK0UsS0FBQSxDQUFBYyxHQUFHLFFBQUVqRixLQUFLLENBQUM4SCxJQUFJLENBQUNsSCxRQUFRLENBQU8sRUFDaENsQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrRSxLQUFBLENBQUFjLEdBQUcsUUFBRWpGLEtBQUssQ0FBQzhILElBQUksQ0FBQzVDLFFBQVEsQ0FBTyxDQUMxQixDQUNRLENBQ1Y7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXhHLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBNEYsV0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUE4TyxNQUFBLEdBQUE5TyxPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFQSxJQUFBNEcsR0FBQSxHQUFBNUcsT0FBQTtVQUdBLElBQUErTyxXQUFBLEdBQUEvTyxPQUFBO1VBRU8sV0FOUDs7VUFNa0IsTUFBTWdQLGVBQWUsR0FBR0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE1BQU07WUFBRUM7VUFBUyxDQUFFLEtBQUk7WUFDN0UsTUFBTTtjQUFFcEksS0FBSztjQUFFOUMsUUFBUTtjQUFFNkosU0FBUztjQUFFQyxZQUFZO2NBQUV2TSxLQUFLO2NBQUVXO1lBQUssQ0FBRSxHQUFHLElBQUF3RCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXJGLE1BQU0sQ0FBQ3FJLFFBQVEsRUFBRWdCLFdBQVcsQ0FBQyxHQUFHLElBQUEzSixNQUFBLENBQUFtSSxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3lCLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQTdKLE1BQUEsQ0FBQW1JLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDaE0sS0FBSyxFQUFFaU0sUUFBUSxDQUFDLEdBQUcsSUFBQXBJLE1BQUEsQ0FBQW1JLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDekMsTUFBTXhGLElBQUksR0FBRzBGLFNBQVMsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUN2QyxNQUFNeUIsUUFBUSxHQUFHLENBQUN6QixTQUFTLElBQUl0TSxLQUFLO1lBQ3BDLE1BQU1nTyxPQUFPLEdBQUcsQ0FBQzFCLFNBQVMsR0FBSXlCLFFBQVEsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFJLE1BQU07WUFDcEUsTUFBTSxDQUFDRSxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdqSyxNQUFBLENBQUF2RixPQUFLLENBQUMwTixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQytCLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFBbkssTUFBQSxDQUFBbUksUUFBUSxFQUNqRGlDLFVBQVUsRUFBRUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FDaEU7WUFFRCxNQUFNQyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTTdOLEtBQUssQ0FBQ29ELE1BQU0sRUFBRTtnQkFDcEJ3SSxZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2dCQUN4QnFCLFNBQVMsQ0FBQyxPQUFPLENBQUM7ZUFDbEIsQ0FBQyxPQUFPYyxDQUFDLEVBQUU7Z0JBQ1hwQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUVoQixDQUFDO1lBQ0QsTUFBTXFDLHlCQUF5QixHQUFHLE1BQUFBLENBQUEsS0FBNkI7Y0FDOUQsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFO2tCQUMzQmhQLE9BQU8sQ0FBQzBJLElBQUksQ0FBQyxtREFBbUQsQ0FBQztrQkFDakUsT0FBTyxLQUFLLENBQUMsQ0FBQzs7Z0JBR2YsTUFBTXVHLGdCQUFnQixHQUFHLE1BQU1GLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDRSxLQUFLLENBQUM7a0JBQUU1UCxJQUFJLEVBQUU7Z0JBQThCLENBQUUsQ0FBQztnQkFDcEcsT0FBTzJQLGdCQUFnQixDQUFDRSxLQUFLLEtBQUssU0FBUztlQUMzQyxDQUFDLE9BQU8zTyxLQUFLLEVBQUU7Z0JBQ2ZSLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDLHlDQUF5Q0EsS0FBSyxFQUFFLENBQUM7Z0JBQy9ELE9BQU8sS0FBSyxDQUFDLENBQUM7O1lBRWhCLENBQUM7WUFFRCxNQUFNNE8sVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNIcEIsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTU8sYUFBYSxHQUFHLE1BQU1PLHlCQUF5QixFQUFFO2dCQUV2RCxJQUFJLENBQUNQLGFBQWEsRUFBRTtrQkFDbkJMLFlBQVksQ0FBQyxJQUFJLENBQUM7a0JBQ2xCOztnQkFHRFUsUUFBUSxFQUFFO2VBQ1YsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1g3TyxPQUFPLENBQUNRLEtBQUssQ0FBQ3FPLENBQUMsQ0FBQztnQkFDaEJwQyxRQUFRLENBQUMsSUFBSSxDQUFDO2VBQ2QsU0FBUztnQkFDVHVCLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxNQUFNcUIsTUFBTSxHQUFHLE1BQU1sQyxLQUFLLElBQUc7Y0FDNUIsTUFBTXBNLEtBQUssQ0FBQ3FELElBQUksRUFBRTtjQUNsQnVJLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDbkJvQixTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNdUIsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJ6TSxRQUFRLENBQ04wTSxjQUFjLEVBQUUsQ0FDaEJDLElBQUksQ0FBQyxNQUFLO2dCQUNWZixVQUFVLEVBQUVDLFlBQVksQ0FBQ2UsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQztnQkFDeEVqQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Y0FDekIsQ0FBQyxDQUFDLENBQ0RrQixLQUFLLENBQUNsUCxLQUFLLElBQUc7Z0JBQ2RpTSxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ2YsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU1rRCxVQUFVLEdBQUd4QyxLQUFLLElBQUc7Y0FDMUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLElBQUksQ0FBQ3JNLEtBQUssQ0FBQzZPLFVBQVUsRUFBRTtnQkFDdEJ0QixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCOztjQUdEYyxVQUFVLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTVMsVUFBVSxHQUFHQSxDQUFBLEtBQU12QixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTXdCLFFBQVEsR0FBR2hDLE1BQU0sS0FBSyxPQUFPLEdBQUd1QixNQUFNLEdBQUdNLFVBQVU7WUFDekQsTUFBTUksT0FBTyxHQUFHNUMsS0FBSyxJQUFHO2NBQ3ZCYSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCRSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUNDN0osTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQXdMLE1BQU07Y0FDTkMsT0FBTyxFQUFDLFNBQVM7Y0FDakJqSixJQUFJLEVBQUVBLElBQUk7Y0FDVmdHLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmtELE9BQU8sRUFBRUosUUFBUTtjQUNqQmpDLFFBQVEsRUFBRUEsUUFBUSxJQUFJYjtZQUFRLEdBRTdCckgsS0FBSyxDQUFDeUksT0FBTyxDQUFDLENBQ1AsRUFFVC9KLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzJJLE1BQUEsQ0FBQXlDLGdCQUFnQjtjQUFDL08sSUFBSSxFQUFFNk0sU0FBUztjQUFFOEIsT0FBTyxFQUFFQSxPQUFPO2NBQUVLLFNBQVMsRUFBRWQ7WUFBWSxFQUFJLEVBQ2hGakwsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDNEksV0FBQSxDQUFBMEMscUJBQXFCO2NBQUNqUCxJQUFJLEVBQUVaLEtBQUs7Y0FBRXVQLE9BQU8sRUFBRUEsQ0FBQSxLQUFNdEQsUUFBUSxDQUFDLEtBQUs7WUFBQyxFQUFJLEVBQ3JFNEIsY0FBYyxJQUNkaEssTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUyxHQUFBLENBQUE4SyxVQUFVO2NBQ1ZsUCxJQUFJLEVBQUVpTixjQUFjO2NBQ3BCMEIsT0FBTyxFQUFFRixVQUFVO2NBQ25CVSxXQUFXLEVBQUV4UCxLQUFLLENBQUN3UCxXQUFXO2NBQzlCeFEsSUFBSSxFQUFDLGFBQWE7Y0FDbEJ5USxTQUFTLEVBQUV6UCxLQUFLLENBQUNrRCxLQUFLLENBQUN3TTtZQUFZLEVBRXBDLENBQ0M7VUFFTCxDQUFDO1VBQUMzTyxPQUFBLENBQUE4TCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0hGLElBQUF2SixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJHLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRU87VUFBVyxNQUFNeVIscUJBQXFCLEdBQUdBLENBQUM7WUFBRWpQLElBQUk7WUFBRTJPO1VBQU8sQ0FBRSxLQUFJO1lBQ3JFLElBQUksQ0FBQzNPLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFdUU7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFNkYsS0FBSztjQUFFa0c7WUFBVyxDQUFFLEdBQUcvSyxLQUFLLENBQUNxSixXQUFXLENBQUN4TyxLQUFLO1lBRXRELE9BQ0M2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQzJJLE1BQUEsQ0FBQWlELFVBQVU7Y0FBQzNMLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQ3FELElBQUksRUFBRSxJQUFJO2NBQUVqSCxJQUFJLEVBQUUsSUFBSTtjQUFFMk8sT0FBTyxFQUFFQSxPQUFPO2NBQUVhLFFBQVE7WUFBQSxHQUN6RnZNLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxhQUFLeUYsS0FBSyxDQUFNLENBQ1gsRUFDTm5HLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1EsTUFBQSxDQUFBc0wsSUFBSTtjQUFDN0wsU0FBUyxFQUFDLDBCQUEwQjtjQUFDZ0MsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4RDNDLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQXlCLEdBQUUwTCxXQUFXLENBQUssQ0FDbkQsQ0FDTSxDQUNYO1VBRUwsQ0FBQztVQUFDNU8sT0FBQSxDQUFBdU8scUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJGLElBQUFTLE1BQUEsR0FBQWxTLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQW1TLE1BQUEsR0FBQW5TLE9BQUE7VUFDQSxJQUFBb1MsT0FBQSxHQUFBcFMsT0FBQTtVQUNBLElBQUFxUyxPQUFBLEdBQUFyUyxPQUFBO1VBRU87VUFBVyxNQUFNdU4sZ0JBQWdCLEdBQUdBLENBQUM7WUFBRTBCLFFBQVEsR0FBRztVQUFLLENBQUUsS0FBSTtZQUNuRSxNQUFNO2NBQUVsSSxLQUFLO2NBQUUrRyxTQUFTO2NBQUVFLE9BQU87Y0FBRXhNLEtBQUs7Y0FBRVcsS0FBSztjQUFFUDtZQUFLLENBQUUsR0FBRyxJQUFBK0QsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM3RSxNQUFNa0UsR0FBRyxHQUFHeEUsTUFBQSxDQUFBdkYsT0FBSyxDQUFDZ0ssTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNcUYsUUFBUSxHQUFHLENBQUN6QixTQUFTLElBQUl0TSxLQUFLO1lBQ3BDLE1BQU15TCxHQUFHLEdBQUcsOEJBQThCZSxPQUFPLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRTtZQUN4RSxNQUFNLENBQUNrQixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHMUosTUFBQSxDQUFBdkYsT0FBSyxDQUFDME4sUUFBUSxDQUFTLEVBQUUsQ0FBQztZQUN0RCxNQUFNMEUsV0FBVyxHQUFHO2NBQUVyRCxRQUFRO2NBQUVDLE1BQU07Y0FBRUM7WUFBUyxDQUFFO1lBRW5ELE9BQ0MxSixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFtQixHQUNwQ1gsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBSSxHQUFFVyxLQUFLLENBQUM2RSxLQUFLLENBQU0sQ0FDN0IsRUFDUmhLLEtBQUssSUFDTDZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQytMLE1BQUEsQ0FBQUssS0FBSztjQUFDcFIsSUFBSSxFQUFDLE9BQU87Y0FBQ2tRLE9BQU8sRUFBQztZQUFPLEdBQ2pDelAsS0FBSyxDQUVQLEVBQ0FKLEtBQUssR0FDTGlFLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQVYsTUFBQSxDQUFBdkYsT0FBQSxDQUFBOEksUUFBQSxRQUNFa0csTUFBTSxLQUFLLE9BQU8sR0FDbEJ6SixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrTCxNQUFBLENBQUFLLEtBQUs7Y0FBQ3BSLElBQUksRUFBQyxTQUFTO2NBQUNrUSxPQUFPLEVBQUMsU0FBUztjQUFDakosSUFBSSxFQUFDO1lBQU0sR0FDbEQzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFJLEdBQUVXLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDN0csS0FBSyxDQUFNLEVBQ3hEbkcsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFVyxLQUFLLENBQUN5TCxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFRLENBQ3BELEdBRVJqTixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMrTCxNQUFBLENBQUFLLEtBQUs7Y0FBQ3BSLElBQUksRUFBQyxNQUFNO2NBQUNrUSxPQUFPLEVBQUMsTUFBTTtjQUFDakosSUFBSSxFQUFDO1lBQU0sR0FDNUMzQyxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVXLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQzVSLGFBQWEsQ0FBUSxDQUU5RCxDQUNDLEdBQ0EsSUFBSSxFQUNSNkUsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0QsR0FDaEVYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBUzhELEdBQUcsRUFBRUEsR0FBRztjQUFFN0QsU0FBUyxFQUFFNkc7WUFBRyxHQUNoQ3hILE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3hDLENBQUM1RSxLQUFLLEdBQ05pRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ2dNLE1BQUEsQ0FBQVEsS0FBSztjQUFDekQsTUFBTSxFQUFFQTtZQUFNLEVBQUksRUFDekJ6SixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNpTSxPQUFBLENBQUFwRCxlQUFlO2NBQUEsR0FBS3NEO1lBQVcsRUFBSSxDQUNsQyxHQUNBLElBQUksRUFFUjdNLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ2tNLE9BQUEsQ0FBQU8sZUFBZTtjQUFDcFEsSUFBSSxFQUFFK007WUFBUSxFQUFJLENBQzlCLEVBQ0x2QixPQUFPLElBQ1B2SSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFpQixHQUFFVyxLQUFLLENBQUN5TCxXQUFXLENBQUNLLGVBQWUsQ0FBTSxDQUV6RSxDQUNRLENBQ0wsQ0FDRCxDQUNKO1VBRUwsQ0FBQztVQUFDM1AsT0FBQSxDQUFBcUssZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURGLElBQUE5SCxNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJHLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUEyRixRQUFBLEdBQUEzRixPQUFBO1VBRU87VUFBVyxNQUFNdVIsZ0JBQWdCLEdBQUdBLENBQUM7WUFBRS9PLElBQUk7WUFBRTJPLE9BQU87WUFBRUs7VUFBUyxDQUFFLEtBQUk7WUFDM0UsSUFBSSxDQUFDaFAsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV1RTtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNK00sUUFBUSxHQUFHL0wsS0FBSyxDQUFDcUosV0FBVyxDQUFDeEUsS0FBSztZQUN4QyxNQUFNa0csV0FBVyxHQUFHL0ssS0FBSyxDQUFDcUosV0FBVyxDQUFDMEIsV0FBVztZQUVqRCxPQUNDck0sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFBVixNQUFBLENBQUF2RixPQUFBLENBQUE4SSxRQUFBLFFBQ0N2RCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUMySSxNQUFBLENBQUFpRCxVQUFVO2NBQ1YzTCxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCcUQsSUFBSSxFQUFFLElBQUk7Y0FDVmpILElBQUksRUFBRSxJQUFJO2NBQ1YyTyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJhLFFBQVE7Y0FDUlIsU0FBUyxFQUFFQTtZQUFTLEdBRXBCL0wsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFzQixHQUFFVyxLQUFLLENBQUNxSixXQUFXLENBQUMyQyxLQUFLLENBQVEsRUFDdkV0TixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGFBQUsyTSxRQUFRLENBQU0sQ0FDZCxFQUNOck4sTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQSxDQUFDUSxNQUFBLENBQUFzTCxJQUFJO2NBQUM3TCxTQUFTLEVBQUMsMEJBQTBCO2NBQUNnQyxJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hEM0MsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBeUIsR0FBRTBMLFdBQVcsQ0FBSyxDQUNuRCxDQUNNLENBQ1g7VUFFTCxDQUFDO1VBQUM1TyxPQUFBLENBQUFxTyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0YsSUFBQTlMLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBZ1QsWUFBQSxHQUFBaFQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFHTSxTQUFVNFMsZUFBZUEsQ0FBQztZQUFFcFE7VUFBSSxDQUFFO1lBQ3ZDLE1BQU07Y0FBRXVFLEtBQUs7Y0FBRXZGLEtBQUs7Y0FBRW1NLE9BQU87Y0FBRXhMLEtBQUs7Y0FBRThMLFVBQVU7Y0FBRUQsT0FBTztjQUFFcE0sS0FBSztjQUFFaU07WUFBUSxDQUFFLEdBQUcsSUFBQWxJLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFakcsSUFBSSxDQUFDdkQsSUFBSSxFQUFFO1lBQ1gsTUFBTXlRLE1BQU0sR0FBRyxNQUFNMUUsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QlAsVUFBVSxDQUFDLElBQUksQ0FBQztjQUVoQixJQUFJO2dCQUNILE1BQU05TCxLQUFLLENBQUMrQyxVQUFVLENBQUMxRCxLQUFLLENBQUM7Z0JBQzdCbU0sT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDbkJNLFVBQVUsQ0FBQyxLQUFLLENBQUM7ZUFDakIsQ0FBQyxPQUFPZ0MsQ0FBQyxFQUFFO2dCQUNYN08sT0FBTyxDQUFDUSxLQUFLLENBQUNxTyxDQUFDLENBQUM7Z0JBQ2hCcEMsUUFBUSxDQUFDOUcsS0FBSyxDQUFDeUwsV0FBVyxDQUFDVSxVQUFVLENBQUM7ZUFDdEMsU0FBUztnQkFDVGpGLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1lBRW5CLENBQUM7WUFFRCxNQUFNa0YsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEJoUixLQUFLLENBQUNzQyxVQUFVLEVBQUU7WUFDbkIsQ0FBQztZQUNELE9BQ0NnQixNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUFWLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQThJLFFBQUEsUUFDQ3ZELE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUM2TSxZQUFBLENBQUFwTCxXQUFXO2NBQUNpQyxHQUFHLEVBQUVySTtZQUFLLEVBQUksRUFDM0JpRSxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFlLEdBQ2hDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLENBQUNQLFdBQUEsQ0FBQXdMLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQytCLFFBQVE7Y0FBQzlCLE9BQU8sRUFBRTZCO1lBQU8sR0FDakRoUixLQUFLLENBQUN3UCxXQUFXLENBQUMwQixPQUFPLENBQUNDLFdBQVcsQ0FDOUIsRUFDVDdOLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBd0wsTUFBTTtjQUFDaEosSUFBSSxFQUFDLE1BQU07Y0FBQ2tKLE9BQU8sRUFBRTJCLE1BQU07Y0FBRTVCLE9BQU8sRUFBQztZQUFTLEdBQ3BEbFAsS0FBSyxDQUFDd1AsV0FBVyxDQUFDMEIsT0FBTyxDQUFDRSxJQUFJLENBQ3ZCLENBQ0QsQ0FDSixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUE5TixNQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTSxTQUFVd1QsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUV2UCxRQUFRO2NBQUU2SixTQUFTO2NBQUVDO1lBQVksQ0FBRSxHQUFHLElBQUFwSSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ3NKLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc3SixNQUFBLENBQUF2RixPQUFLLENBQUMwTixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZEO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFFQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUdBLE9BQU87Y0FBR3lCLFNBQVM7Y0FBRUM7WUFBWSxDQUFFO1VBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBbUUsS0FBQSxHQUFBelQsT0FBQTtVQUNBLElBQUE0RixXQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQTJGLFFBQUEsR0FBQTNGLE9BQUE7VUFFTSxTQUFVb04sVUFBVUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQUV2RyxLQUFLO2NBQUU0RztZQUFPLENBQUUsR0FBRyxJQUFBaEksUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM3QyxNQUFNMk4sVUFBVSxHQUFHbkYsS0FBSyxJQUFHO2NBQzFCWixPQUFPLENBQUNZLEtBQUssQ0FBQ29GLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDNUcsSUFBSSxDQUFDO1lBQzFDLENBQUM7WUFFRCxJQUFJLENBQUNNLFNBQVMsRUFBRSxPQUFPLElBQUk7WUFFM0IsT0FDQ21HLEtBQUEsQ0FBQXROLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtELEdBQ2hFcU4sS0FBQSxDQUFBdE4sYUFBQSxDQUFDUCxXQUFBLENBQUFpTyxXQUFXO2NBQUN4RyxRQUFRLEVBQUVBLFFBQVE7Y0FBRWdFLE9BQU8sRUFBQyxTQUFTO2NBQUN5QyxRQUFRLEVBQUVKO1lBQVUsR0FDdEVELEtBQUEsQ0FBQXROLGFBQUEsQ0FBQ1AsV0FBQSxDQUFBd0wsTUFBTTtjQUFBLGFBQVc7WUFBVSxHQUFFckssS0FBSyxDQUFDeUwsV0FBVyxDQUFDN0ssUUFBUSxFLElBQVcsRUFDbkU4TCxLQUFBLENBQUF0TixhQUFBLENBQUNQLFdBQUEsQ0FBQXdMLE1BQU07Y0FBQSxhQUFXO1lBQVEsR0FBRXJLLEtBQUssQ0FBQ3lMLFdBQVcsQ0FBQ3VCLElBQUksRSxJQUFXLENBQ2hELENBQ1Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXRPLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBZ1UsU0FBQSxHQUFBaFUsT0FBQTtVQUZBOztVQVFNLFNBQVUyUyxLQUFLQSxDQUFDO1lBQUV6RDtVQUFNLENBQWM7WUFDM0MsTUFBTStFLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3BMLFFBQVEsQ0FBQ3FHLE1BQU0sQ0FBQztZQUN2RCxNQUFNZ0YsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDckwsUUFBUSxDQUFDcUcsTUFBTSxDQUFDO1lBRXJELE1BQU0sQ0FBQ2lGLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFOLFNBQUEsQ0FBQU8sUUFBUSxFQUFDTixTQUFTLEVBQUVDLE9BQU8sRUFBRWhGLE1BQU0sS0FBSyxPQUFPLENBQUM7WUFDaEcsTUFBTXNGLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHUCxPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDalAsTUFBQSxDQUFBdkYsT0FBQSxDQUFBaUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENYLE1BQUEsQ0FBQXZGLE9BQUEsQ0FBQWlHLGFBQUEsZUFBTyxHQUFHd08sZUFBZSxFQUFFLENBQVEsRUFDbkNsUCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFrQixPQUFTLEVBQzNDWCxNQUFBLENBQUF2RixPQUFBLENBQUFpRyxhQUFBLGVBQU8sR0FBR3FPLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUEvTyxNQUFBLEdBQUF6RixPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFNE4sUUFBUTtZQUFFekQ7VUFBUyxDQUFFLEdBQUcxRSxNQUFBLENBQUF2RixPQUFLO1VBRS9CLFNBQVVxVSxRQUFRQSxDQUFDTixTQUFrQixFQUFFQyxPQUFnQixFQUFFVSxLQUFLLEdBQUcsSUFBSTtZQUMxRSxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdsSCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5DekQsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJNEssVUFBMEI7Y0FDOUIsSUFBSUgsS0FBSyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ3JCLElBQUliLFNBQVMsRUFBRTtnQkFDZGMsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFHO29CQUNsQixPQUFPQSxRQUFRLEdBQUcsQ0FBQztrQkFDcEIsQ0FBQyxDQUFDO2dCQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDZCxTQUFTLENBQUMsQ0FBQztZQUVmOUosU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJK0osT0FBTyxFQUFFO2dCQUNaWSxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWixPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR08sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwiaWdub3JlTGlzdCI6W119