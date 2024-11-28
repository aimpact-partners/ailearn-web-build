System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "@aimpact/ailearn-app@0.2.10/i18n.ts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/media-manager@1.0.0/recorder", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
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
    }, function (_dexie2) {
      dependency_2 = _dexie2;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk130Session) {
      dependency_4 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase) {
      dependency_5 = _aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_6 = _aimpactAilearnApp0210I18nTs;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_8 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_9 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130Voice) {
      dependency_10 = _aimpactChatSdk130Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_11 = _aimpactMediaManager100Recorder;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_15 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_17 = _aimpactAilearnApp0210Config;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_19 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_20 = _aimpactAilearnApp0210ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_21 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_22 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_23 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_24 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_25 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_26 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['dexie', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['@aimpact/chat-sdk/chat-component.code', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/media-manager/recorder', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['pragmate-ui/components', dependency_13], ['react', dependency_14], ['pragmate-ui/alert', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/components/ui', dependency_19], ['@aimpact/ailearn-app/components/hooks', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/list', dependency_22], ['pragmate-ui/tabs', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/modal', dependency_26]]);
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

      /***************************
      INTERNAL MODULE: ./old-store
      ***************************/

      ims.set('./old-store', {
        hash: 2180078592,
        creator: function (require, exports) {
          // import { sessionWrapper } from '@aimpact/chat-sdk/session';
          // import { CurrentTexts } from '@beyond-js/kernel/texts';
          // import { module } from 'beyond_context';
          // import { LayoutBroker } from '@aimpact/ailearn-app/main-layout.widget';
          // import { AudioManager } from '@aimpact/chat-sdk/chat-component.code';
          // import type { IWidgetStore } from '@beyond-js/widgets/controller';
          // import { ReactiveModel } from '@beyond-js/reactive/model';
          // import { Recorder } from '@aimpact/media-manager/recorder';
          // import { Voice } from '@aimpact/chat-sdk/voice';
          // import { Tracking } from '@aimpact/ailearn-sdk/tracking';
          // import { globalTexts } from '@aimpact/ailearn-app/i18n.ts';
          // import { deleteAudioBlob, getAudioBlob, saveAudioBlob } from './audio-database';
          // interface IStore {}
          // export class StoreManager extends ReactiveModel<IStore> implements IWidgetStore {
          // 	#model;
          // 	get model() {
          // 		return this.#model;
          // 	}
          // 	#introduction: string;
          // 	get introduction() {
          // 		return this.#introduction;
          // 	}
          // 	#activityId: string;
          // 	#assignmentId: string;
          // 	get assignmentId() {
          // 		return this.#assignmentId;
          // 	}
          // 	#items;
          // 	get items() {
          // 		return this.#items;
          // 	}
          // 	get globalTexts() {
          // 		return globalTexts.texts;
          // 	}
          // 	#audioManager = new AudioManager(this);
          // 	get audioManager() {
          // 		return this.#audioManager;
          // 	}
          // 	#voice: Voice;
          // 	get voice() {
          // 		return this.#voice;
          // 	}
          // 	#recorder: Recorder;
          // 	get recorder() {
          // 		return this.#recorder;
          // 	}
          // 	#paramsUri;
          // 	get paramsUri() {
          // 		return this.#paramsUri;
          // 	}
          // 	#texts: CurrentTexts<StoreManager> = new CurrentTexts(module.specifier);
          // 	get texts() {
          // 		return this.#texts?.value;
          // 	}
          // 	get ready() {
          // 		return super.ready && this.#texts.ready;
          // 	}
          // 	#found: boolean;
          // 	get found() {
          // 		return this.#found;
          // 	}
          // 	get canConsumeCredits() {
          // 		return this.#found;
          // 	}
          // 	#tracking: Tracking;
          // 	get tracking() {
          // 		return this.#tracking;
          // 	}
          // 	#audio: any;
          // 	get audio() {
          // 		return this.#audio;
          // 	}
          // 	constructor() {
          // 		super();
          // 		this.#voice = new Voice();
          // 		if (!this.assignmentId) this.#assignmentId = this.sessionId;
          // 		this.#texts.on('change', this.triggerEvent);
          // 		this.#recorder = new Recorder();
          // 		globalTexts.on('change', this.triggerEvent);
          // 	}
          // 	cleanAudio() {
          // 		this.deleteAudio();
          // 	}
          // 	async load(assignmentId, activityId) {
          // 		try {
          // 			LayoutBroker.overlay = true;
          // 			LayoutBroker.canConsumeCredits = true;
          // 			if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
          // 				LayoutBroker.addModel(this.#tracking);
          // 				return;
          // 			}
          // 			this.#assignmentId = assignmentId;
          // 			this.#activityId = activityId;
          // 			const tracking = Tracking.get({ assignmentId });
          // 			this.#tracking = tracking;
          // 			const activity = await tracking.activities.load({ id: activityId });
          // 			this.#model = activity;
          // 			const name = `${sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
          // 			const audio = await getAudioBlob(name);
          // 			this.#audio = audio?.blob;
          // 			LayoutBroker.addModel(this.#tracking);
          // 			super.ready = true;
          // 			this.#found = true;
          // 			this.triggerEvent();
          // 		} catch (e) {
          // 			console.trace(e);
          // 			super.ready = true;
          // 			this.#found = false;
          // 			LayoutBroker.canConsumeCredits = false;
          // 		}
          // 	}
          // 	sendSpoken = async audio => {
          // 		const params = { audio, assignmentId: this.#assignmentId, activityId: this.#activityId };
          // 		// return;
          // 		const response = await this.model.publishSpoken({ params, type: 'spoken' });
          // 		await this.#tracking.activities.load({ id: this.#activityId });
          // 		this.deleteAudio();
          // 		return response;
          // 	};
          // 	async record() {
          // 		return this.#recorder.record();
          // 	}
          // 	async stop() {
          // 		await this.#recorder.stop();
          // 		const name = `${sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
          // 		this.#audio = this.#recorder.audio;
          // 		this.triggerEvent();
          // 		await saveAudioBlob(name, this.#recorder.audio);
          // 	}
          // 	deleteAudio() {
          // 		const name = `${sessionWrapper.user.id}-${this.#assignmentId}-${this.#activityId}`;
          // 		this.#audio = undefined;
          // 		this.triggerEvent();
          // 		deleteAudioBlob(name);
          // 	}
          // }
          "use strict";
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 35428572,
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
            }
            sendSpoken = async audio => {
              const params = {
                audio,
                assignmentId: this.assignmentId,
                activityId: this.activityId
              };
              // return;
              const response = await this.model.publishSpoken({
                params,
                type: 'spoken'
              });
              //@ts-ignore
              await this.tracking.activities.load({
                id: this.activityId
              });
              this.deleteAudio();
              return response;
            };
            async record() {
              return this.#recorder.record();
            }
            async stop() {
              await this.#recorder.stop();
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.#activityId}`;
              this.#audio = this.#recorder.audio;
              this.triggerEvent();
              await (0, _audioDatabase.saveAudioBlob)(name, this.#recorder.audio);
            }
            deleteAudio() {
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.#activityId}`;
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
        hash: 715517435,
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
              assignmentId,
              id
            } = store.model;
            const {
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            const keys = Object.keys(feedback.assessment);
            const audioSpecs = {
              src: undefined,
              url: undefined
            };
            if (audio) audioSpecs.src = audio;else audioSpecs.url = audioUrl;
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.audio), _react.default.createElement(_ui.AudioPlayer, {
              ...audioSpecs
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
        hash: 1271925241,
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
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
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
        hash: 4046668001,
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
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const {
              assignmentId,
              id
            } = store.model;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
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
        hash: 2847368759,
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
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
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
              items: store.model.resources.specs.criteria,
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
        hash: 2514072316,
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
          var _aside = require("./components/aside");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          var _context = require("./context");
          var _desktop = require("./analysis/desktop");
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
              className: "content-activity--desktop-container spoken-activity"
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
                true: _react.default.createElement(_desktop.DesktopAnalysis, null),
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
        hash: 361634826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
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
              setView(!!store.model?.data ? 'analysis' : 'recording');
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
        hash: 2722613956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _recording = require("./recording");
          var _config = require("@aimpact/ailearn-app/config");
          var _tabs = require("./tabs");
          var _tabs2 = require("pragmate-ui/tabs");
          var _mobile = require("./analysis/mobile");
          var _information = require("./components/information");
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
            //const audioUrl = `${config.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs2.TabsContainer, {
              className: "activity-tabs",
              active: 0
            }, _react.default.createElement(_tabs2.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_mobile.MobileAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", null, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs2.Tabs, null, _react.default.createElement(_tabs2.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs2.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 1543433656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            const playAction = async () => {
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
            }, texts[message]), _react.default.createElement(_errorModal.PermissionsErrorModal, {
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
        hash: 2625529458,
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
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/components/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/components/audio-player').AudioPlayer : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJhc3NpZ25tZW50SWQiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInRyYWNraW5nIiwiYWN0aXZpdGllcyIsInJlY29yZCIsInN0b3AiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIm1kIiwiRmVlZGJhY2siLCJsZyIsIl9pY29ucyIsIl9jb25maWciLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsInRleHRzIiwiZmVlZGJhY2siLCJkYXRhIiwiYXR0ZW1wdHMiLCJhdWRpb1VybCIsImFwaXMiLCJhaWxlYXJuIiwia2V5cyIsIk9iamVjdCIsImFzc2Vzc21lbnQiLCJhdWRpb1NwZWNzIiwic3JjIiwidXJsIiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJJdGVtIiwic3ViamVjdCIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsInNldFZpZXciLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRBdWRpbyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImhhc0NyZWRpdHMiLCJjbG9zZU1vZGFsIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfbW9kYWwiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzaW5nQXVkaW8iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvb2xkLXN0b3JlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQTtVQUNBLE1BQU1DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxPQUFLO1lBQ2hDQyxVQUFVO1lBRVZDLFlBQUE7Y0FDQyxLQUFLLENBQUMsZUFBZSxDQUFDO2NBQ3RCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM7Z0JBQ3RCSCxVQUFVLEVBQUUsd0JBQXdCLENBQUM7ZUFDckMsQ0FBQztjQUNGLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQztZQUMzQzs7VUFZRDtVQUNBLE1BQU1DLEVBQUUsR0FBRyxJQUFJUCxhQUFhLEVBQUU7VUFFOUI7VUFDTyxlQUFlUSxhQUFhQSxDQUFDQyxJQUFZLEVBQUVDLElBQVU7WUFDM0Q7WUFDQSxNQUFNQyxhQUFhLEdBQUcsTUFBTUosRUFBRSxDQUFDTCxVQUFVLENBQUNVLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENBQUMsQ0FBQ0ssS0FBSyxFQUFFO1lBRTVFLElBQUlILGFBQWEsRUFBRTtjQUNsQjtjQUNBLE1BQU1KLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDYSxNQUFN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