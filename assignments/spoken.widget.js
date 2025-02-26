System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.16/entities/assignments/activities/base", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/ailearn-app@0.3.16/config", "@aimpact/ailearn-app@0.3.16/components/icons", "@aimpact/ailearn-app@0.3.16/components/ui", "@aimpact/ailearn-app@0.3.16/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.16/main-layout.widget", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_4 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0316EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp0316EntitiesAssignmentsActivitiesBase;
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
    }, function (_aimpactAilearnApp0316Config) {
      dependency_14 = _aimpactAilearnApp0316Config;
    }, function (_aimpactAilearnApp0316ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0316ComponentsIcons;
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_aimpactAilearnApp0316ComponentsHooks) {
      dependency_17 = _aimpactAilearnApp0316ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_18 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_20 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_21 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0316MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0316MainLayoutWidget;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_23 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['pragmate-ui/components', dependency_10], ['react', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/hooks', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/tabs', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.3.16/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/assignments/spoken.widget');
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
        hash: 1876333634,
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
        hash: 3074311305,
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
        hash: 2992877930,
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
            //const audioUrl = `${config.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInJlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiVm9pY2UiLCJSZWNvcmRlciIsImNsZWFuQXVkaW8iLCJkZWxldGVBdWRpbyIsImFzc2lnbWVudElkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYXNzaWdubWVudElkIiwidHJpZ2dlckV2ZW50Iiwic2VuZFNwb2tlbiIsInBhcmFtcyIsInJlc3BvbnNlIiwibW9kZWwiLCJwdWJsaXNoU3Bva2VuIiwicmVjb3JkIiwic3RvcCIsIl9yZWFjdCIsIl9mZWVkYmFjayIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJEZXNrdG9wQW5hbHlzaXMiLCJzY3JlZW5TaXplIiwidXNlU3Bva2VuQ29udGV4dCIsImRpc3BsYXlOYW1lIiwidXNlck5hbWUiLCJ1c2VySWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibWQiLCJGZWVkYmFjayIsImxnIiwiX2ljb25zIiwiX2NvbmZpZyIsIl91aSIsIl90cmFuc2NyaXB0aW9uIiwidGV4dHMiLCJmZWVkYmFjayIsImRhdGEiLCJhdHRlbXB0cyIsImF1ZGlvVXJsIiwiYXBpcyIsImFpbGVhcm4iLCJkYXRlIiwia2V5cyIsIk9iamVjdCIsImFzc2Vzc21lbnQiLCJhbmFseXNpcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiVHJhbnNjcmlwdGlvbiIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsInJlcGxhY2UiLCJBcHBJY29uIiwiX2hvb2tzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQW5hbHlzaXMiLCJhbGVydENvbnRlbnQiLCJnZXRTcGVjcyIsInRhc2siLCJ1c2VNZWRpYVF1ZXJ5IiwiaW5jbHVkZXMiLCJNb2JpbGVBbmFseXNpcyIsIl9jb2xsYXBzaWJsZSIsIkZyYWdtZW50IiwidGVybmFyeSIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsInRyYW5zY3JpcHRpb24iLCJmYWxzZSIsIm9wZW4iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRBdWRpbyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJjaGVja01pY3JvcGhvbmVQZXJtaXNzaW9uIiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uU3RhdHVzIiwicXVlcnkiLCJzdGF0ZSIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiaGFzQ3JlZGl0cyIsImNsb3NlTW9kYWwiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvb2xkLXN0b3JlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDSyxLQUFLLEVBQUU7WUFFNUUsSUFBSUgsYUFBYSxF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