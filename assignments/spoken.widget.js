System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "dexie@3.2.7", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.29/main-layout.widget", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.29/entities/assignments/activities/base", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/ailearn-app@0.3.29/config", "@aimpact/ailearn-app@0.3.29/components/icons", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0329MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0329MainLayoutWidget;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0329EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp0329EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_8 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141Voice) {
      dependency_9 = _aimpactChatSdk141Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactAilearnApp0329Config) {
      dependency_15 = _aimpactAilearnApp0329Config;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329ComponentsHooks) {
      dependency_18 = _aimpactAilearnApp0329ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_19 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_21 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_22 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_23 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/components/hooks', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/tabs', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.3.29/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/assignments/spoken.widget');
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
        hash: 2426236470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwidGVzdGluZyIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsInZhcnMiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJleHBvcnRzIiwiX3Nlc3Npb24iLCJfYmFzZSIsIl9jaGF0Q29tcG9uZW50IiwiX3ZvaWNlIiwiX3JlY29yZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2F1ZGlvRGF0YWJhc2UiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJwYXJhbXNVcmkiLCJyZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInJlY29yZCIsInN0b3AiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIm1kIiwiRmVlZGJhY2siLCJsZyIsIl9pY29ucyIsIl9jb25maWciLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsInRleHRzIiwiZmVlZGJhY2siLCJkYXRhIiwiYXR0ZW1wdHMiLCJhdWRpb1VybCIsImFwaXMiLCJhaWxlYXJuIiwiZGF0ZSIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsInVybCIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJJdGVtIiwic3ViamVjdCIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsInNldFZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0QXVkaW8iLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzMiIsInNldEVycm9yIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiUHJvdmlkZXIiLCJNb2JpbGVWaWV3IiwiX3RhYnMyIiwidGFicyIsIl9tb2RhbCIsIl9lcnJvck1vZGFsIiwiUmVjb3JkaW5nQnV0dG9uIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNob3dTZW5kIiwibWVzc2FnZSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJlIiwiY2hlY2tNaWNyb3Bob25lUGVybWlzc2lvbiIsIm5hdmlnYXRvciIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvblN0YXR1cyIsInF1ZXJ5Iiwic3RhdGUiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwiZW5zdXJlUGxheSIsImhhc0NyZWRpdHMiLCJjbG9zZU1vZGFsIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiQ29pbnNNb2RhbCIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX2FsZXJ0IiwiX3RpbWVyIiwiX2J1dHRvbiIsIl9yZXN1bHQiLCJjbHMiLCJidXR0b25TcGVjcyIsIkFsZXJ0IiwiYXNzZXNzbWVudHMiLCJyZXZpZXciLCJUaW1lciIsIlJlY29yZGluZ1Jlc3VsdCIsInByb2Nlc3NpbmdBdWRpbyIsInN1YnRpdGxlIiwiaW50cm8iLCJfYXVkaW9QbGF5ZXIiLCJvblNlbmQiLCJhdWRpb0Vycm9yIiwib25DbGVhbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsInJlY29yZEFnYWluIiwic2VuZCIsInVzZVJlY29yZGluZyIsIlJlYWN0IiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJvbkNoYW5nZSIsInJlZG8iLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9hdWRpby1kYXRhYmFzZS50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL29sZC1zdG9yZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL21vYmlsZS50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvdHJhbnNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hc2lkZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5mb3JtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvYnV0dG9uLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvcmVzdWx0LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGFicy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQTtVQUNBLE1BQU1DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxPQUFLO1lBQ2hDQyxVQUFVO1lBRVZDLFlBQUE7Y0FDQyxLQUFLLENBQUMsZUFBZSxDQUFDO2NBQ3RCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM7Z0JBQ3RCSCxVQUFVLEVBQUUsd0JBQXdCLENBQUM7ZUFDckMsQ0FBQztjQUNGLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQztZQUMzQzs7VUFZRDtVQUNBLE1BQU1DLEVBQUUsR0FBRyxJQUFJUCxhQUFhLEVBQUU7VUFFOUI7VUFDTyxlQUFlUSxhQUFhQSxDQUFDQyxJQUFZLEVBQUVDLElBQVU7WUFDM0Q7WUFDQSxNQUFNQyxhQUFhLEdBQUcsTUFBTUosRUFBRSxDQUFDTCxVQUFVLENBQUNVLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENB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