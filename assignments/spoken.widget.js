System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "@aimpact/ailearn-app@0.2.10/i18n.ts", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/media-manager@1.0.0/recorder", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.2.10/config", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_23 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['@aimpact/ailearn-sdk/tracking', dependency_9], ['@aimpact/chat-sdk/chat-component.code', dependency_10], ['@aimpact/chat-sdk/voice', dependency_11], ['@aimpact/media-manager/recorder', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['pragmate-ui/components', dependency_14], ['react', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/components/hooks', dependency_21], ['pragmate-ui/collapsible', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/modal', dependency_26]]);
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
        hash: 171175651,
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
          function DesktopAnalysis() {
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

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 3124624071,
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
          function Feedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              assignmentId,
              id
            } = store.model;
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AudioPlayer, {
              url: audioUrl
            }), _react.default.createElement("div", null, _react.default.createElement("p", null, feedback.transcription)), _react.default.createElement("div", {
              className: "feedback__container"
            }, keys.map((property, index) => {
              const item = feedback.assessment[property];
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
            })));
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
        hash: 1571716662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileAnalysis = MobileAnalysis;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, _react.default.createElement(_ui.AudioPlayer, {
              url: audioUrl
            }), _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/analysis/transcription
      **********************************************/

      ims.set('./views/analysis/transcription', {
        hash: 2233347100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcription = Transcription;
          var _react = require("react");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-app/config");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          function Transcription() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              assignmentId,
              id
            } = store.model;
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            const keys = Object.keys(feedback.assessment);
            const screenSize = (0, _hooks.useMediaQuery)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: ['sm', 'md'].includes(screenSize),
              ternary: true,
              options: {
                true: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h2", null, "ola")),
                false: _react.default.createElement(_react.default.Fragment, null, ' ', _react.default.createElement("h1", null, "hola"))
              }
            }), _react.default.createElement("p", null, feedback.transcription));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/aside
      ****************************************/

      ims.set('./views/components/aside', {
        hash: 3678807075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
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
        hash: 1477195810,
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
          var _aside = require("./components/aside");
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
        hash: 174619831,
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
        hash: 2185500234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          var _tabs = require("pragmate-ui/tabs");
          var _feedback = require("./analysis/feedback");
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
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_feedback.Feedback, null), _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, texts.tabs.activity))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJhc3NpZ25tZW50SWQiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInRyYWNraW5nIiwiYWN0aXZpdGllcyIsInJlY29yZCIsInN0b3AiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIkRlc2t0b3BBbmFseXNpcyIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwicmVwbGFjZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJGZWVkYmFjayIsIl9pY29ucyIsIl9jb25maWciLCJfdWkiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwiYXBpcyIsImFpbGVhcm4iLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsIkZyYWdtZW50IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJ0cmFuc2NyaXB0aW9uIiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJpbmNsdWRlcyIsIk1vYmlsZUFuYWx5c2lzIiwiX2NvbXBvbmVudHMiLCJUcmFuc2NyaXB0aW9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJmYWxzZSIsIl9tYXJrZG93biIsIkFzaWRlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiTWFya2Rvd24iLCJjb250ZW50Iiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYW5hbHlzaXMiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiX3RhYnMiLCJEZXNrdG9wVmlldyIsInZpZXciLCJzZXRWaWV3IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRBdWRpbyIsInRleHRzIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJSZWNvcmRpbmdDb250cm9sIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJzZXRFcnJvciIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiYW5hbHlzaXMiLCJhY3Rpdml0eSIsIl9tb2RhbCIsIl9tYWluTGF5b3V0IiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwiZSIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIm9uQWN0aW9uIiwib25DbG9zZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9hbGVydCIsIl90aW1lciIsIl9idXR0b24iLCJfcmVzdWx0IiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJBbGVydCIsImFzc2Vzc21lbnRzIiwicmV2aWV3IiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzaW5nQXVkaW8iLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwiYXVkaW9FcnJvciIsIm9uQ2xlYW4iLCJib3JkZXJlZCIsImdsb2JhbFRleHRzIiwiYWN0aW9ucyIsInJlY29yZEFnYWluIiwic2VuZCIsInVzZVJlY29yZGluZyIsIlJlYWN0IiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJvbkNoYW5nZSIsInJlZG8iLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9hdWRpby1kYXRhYmFzZS50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL29sZC1zdG9yZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL21vYmlsZS50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvdHJhbnNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hc2lkZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvYnV0dG9uLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvcmVzdWx0LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGFicy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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