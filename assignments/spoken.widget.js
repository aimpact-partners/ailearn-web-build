System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/ailearn-app@0.3.1/config", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, View, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp031EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_7 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141Voice) {
      dependency_8 = _aimpactChatSdk141Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_9 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_12 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactAilearnApp031Config) {
      dependency_14 = _aimpactAilearnApp031Config;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_16 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_17 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_18 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_20 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_23 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['pragmate-ui/components', dependency_10], ['react', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/hooks', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/tabs', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/spoken.widget');
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
        hash: 1979657434,
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
              this.#store.testing = this.uri.qs.get('type') === 'draft';
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
        hash: 3886169978,
        creator: function (require, exports) {
          // import { sessionWrapper } from '@aimpact/chat-sdk/session';
          // import { CurrentTexts } from '@beyond-js/kernel/texts';
          // import { module } from 'beyond_context';
          // import { LayoutBroker } from '@aimpact/ailearn-app/main-layout.widget';
          // import { AudioManager } from '@aimpact/chat-sdk/chat-component.code';
          // import type { IWidgetStore } from '@beyond-js/widgets/controller';
          // import { ReactiveModel } from '@aimpact/reactive/model';
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
        hash: 3773230895,
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
        hash: 553766565,
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
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.assignmentId}/activities/${id}/tracking/${userId}/audio?date=${feedback.date}`;
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
        hash: 376151617,
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
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInJlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiVm9pY2UiLCJSZWNvcmRlciIsImNsZWFuQXVkaW8iLCJkZWxldGVBdWRpbyIsImFzc2lnbWVudElkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYXNzaWdubWVudElkIiwidHJpZ2dlckV2ZW50Iiwic2VuZFNwb2tlbiIsInBhcmFtcyIsInJlc3BvbnNlIiwibW9kZWwiLCJwdWJsaXNoU3Bva2VuIiwidHJhY2tpbmciLCJhY3Rpdml0aWVzIiwicmVjb3JkIiwic3RvcCIsIl9yZWFjdCIsIl9mZWVkYmFjayIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJEZXNrdG9wQW5hbHlzaXMiLCJzY3JlZW5TaXplIiwidXNlU3Bva2VuQ29udGV4dCIsImRpc3BsYXlOYW1lIiwidXNlck5hbWUiLCJ1c2VySWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibWQiLCJGZWVkYmFjayIsImxnIiwiX2ljb25zIiwiX2NvbmZpZyIsIl91aSIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwiYXBpcyIsImFpbGVhcm4iLCJkYXRlIiwia2V5cyIsIk9iamVjdCIsImFzc2Vzc21lbnQiLCJhbmFseXNpcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiVHJhbnNjcmlwdGlvbiIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsInJlcGxhY2UiLCJBcHBJY29uIiwiX2hvb2tzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRBdWRpbyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJjaGVja01pY3JvcGhvbmVQZXJtaXNzaW9uIiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uU3RhdHVzIiwicXVlcnkiLCJzdGF0ZSIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiaGFzQ3JlZGl0cyIsImNsb3NlTW9kYWwiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvb2xkLXN0b3JlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxD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