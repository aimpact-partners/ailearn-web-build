System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "@aimpact/ailearn-app@0.2.10/i18n.ts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/media-manager@1.0.0/recorder", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_7 = _aimpactAilearnApp0210I18nTs;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_9 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_10 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130Voice) {
      dependency_11 = _aimpactChatSdk130Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_12 = _aimpactMediaManager100Recorder;
    }, function (_beyondJsKernel019Texts) {
      dependency_13 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_15 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_16 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_18 = _aimpactAilearnApp0210Config;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_21 = _aimpactAilearnApp0210ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_22 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_23 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_25 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_26 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_27 = _pragmateUi100Beta7Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@aimpact/ailearn-sdk/tracking', dependency_9], ['@aimpact/chat-sdk/chat-component.code', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/media-manager/recorder', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['pragmate-ui/components', dependency_14], ['react', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/components/hooks', dependency_21], ['pragmate-ui/collapsible', dependency_22], ['pragmate-ui/list', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['pragmate-ui/icons', dependency_26], ['pragmate-ui/modal', dependency_27]]);
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
        hash: 2079595808,
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
        hash: 3677169636,
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
            });
            _react.default.useEffect(() => {
              setView(!!store.model?.data ? 'analysis' : 'recording');
            }, [ready]);
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
        hash: 2323320894,
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
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs2.Tabs, null, _react.default.createElement(_tabs2.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs2.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 2188411911,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInJlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiVm9pY2UiLCJSZWNvcmRlciIsImNsZWFuQXVkaW8iLCJkZWxldGVBdWRpbyIsImFzc2lnbWVudElkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYXNzaWdubWVudElkIiwidHJpZ2dlckV2ZW50Iiwic2VuZFNwb2tlbiIsInBhcmFtcyIsInJlc3BvbnNlIiwibW9kZWwiLCJwdWJsaXNoU3Bva2VuIiwidHJhY2tpbmciLCJhY3Rpdml0aWVzIiwicmVjb3JkIiwic3RvcCIsIl9yZWFjdCIsIl9mZWVkYmFjayIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJEZXNrdG9wQW5hbHlzaXMiLCJzY3JlZW5TaXplIiwidXNlU3Bva2VuQ29udGV4dCIsImRpc3BsYXlOYW1lIiwidXNlck5hbWUiLCJ1c2VySWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibWQiLCJGZWVkYmFjayIsImxnIiwiX2ljb25zIiwiX2NvbmZpZyIsIl91aSIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwiYXBpcyIsImFpbGVhcm4iLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsImF1ZGlvU3BlY3MiLCJzcmMiLCJ1cmwiLCJhbmFseXNpcyIsIkF1ZGlvUGxheWVyIiwiVHJhbnNjcmlwdGlvbiIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsInJlcGxhY2UiLCJBcHBJY29uIiwiX2hvb2tzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRBdWRpbyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImhhc0NyZWRpdHMiLCJjbG9zZU1vZGFsIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfbW9kYWwiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzaW5nQXVkaW8iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvb2xkLXN0b3JlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDSyxLQUFLLEVBQUU7WUFFNUUsSUFBSUgsYUFBYSxFQUFFO2NBQ2xCO2NBQ0EsTUFBTUosRUFBRSxDQUFDTCxVQUFVLENBQUNhLE1B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