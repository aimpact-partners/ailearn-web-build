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
        hash: 778988148,
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
              }), _react.default.createElement("h5", null, item.name)), _react.default.createElement("p", null, item.feedback)));
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
        hash: 3806237664,
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
                false: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h6", null, texts.analysis.transcript), feedback.transcription)
              }
            }));
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
        hash: 2281028411,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _recording = require("./recording");
          var _config = require("@aimpact/ailearn-app/config");
          var _tabs = require("./tabs");
          var _tabs2 = require("pragmate-ui/tabs");
          var _mobile = require("./analysis/mobile");
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
            })), _react.default.createElement("div", null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })))), _react.default.createElement(_tabs2.Tabs, null, _react.default.createElement(_tabs2.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs2.Tab, null, texts.tabs.activity))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJhc3NpZ25tZW50SWQiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInRyYWNraW5nIiwiYWN0aXZpdGllcyIsInJlY29yZCIsInN0b3AiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0cmlnZ2VyRXZlbnQiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIm1kIiwiRmVlZGJhY2siLCJsZyIsIl9pY29ucyIsIl9jb25maWciLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsInRleHRzIiwiZmVlZGJhY2siLCJkYXRhIiwiYXR0ZW1wdHMiLCJhdWRpb1VybCIsImFwaXMiLCJhaWxlYXJuIiwia2V5cyIsIk9iamVjdCIsImFzc2Vzc21lbnQiLCJhdWRpb1NwZWNzIiwic3JjIiwidXJsIiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJfbWFya2Rvd24iLCJBc2lkZSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsIk1hcmtkb3duIiwiY29udGVudCIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIl90YWJzIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0QXVkaW8iLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzMiIsInNldEVycm9yIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiUHJvdmlkZXIiLCJNb2JpbGVWaWV3IiwiX3RhYnMyIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJhY3Rpdml0eSIsIl9lcnJvck1vZGFsIiwiUmVjb3JkaW5nQnV0dG9uIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNob3dTZW5kIiwibWVzc2FnZSIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJlIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImVuc3VyZVBsYXkiLCJoYXNDcmVkaXRzIiwiY2xvc2VNb2RhbCIsIm9uQWN0aW9uIiwib25DbG9zZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiQ29pbnNNb2RhbCIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiX21vZGFsIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX2FsZXJ0IiwiX3RpbWVyIiwiX2J1dHRvbiIsIl9yZXN1bHQiLCJjbHMiLCJidXR0b25TcGVjcyIsIkFsZXJ0IiwiYXNzZXNzbWVudHMiLCJyZXZpZXciLCJUaW1lciIsIlJlY29yZGluZ1Jlc3VsdCIsInByb2Nlc3NpbmdBdWRpbyIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwiYXVkaW9FcnJvciIsIm9uQ2xlYW4iLCJib3JkZXJlZCIsImFjdGlvbnMiLCJyZWNvcmRBZ2FpbiIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJSZWFjdCIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwib25DaGFuZ2UiLCJyZWRvIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvYXVkaW8tZGF0YWJhc2UudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9vbGQtc3RvcmUudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZGVza3RvcC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL3RyYW5zY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBO1VBQ0EsTUFBTUMsYUFBYyxTQUFRRixNQUFBLENBQUFHLE9BQUs7WUFDaENDLFVBQVU7WUFFVkMsWUFBQTtjQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FDdEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQztnQkFDdEJILFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztlQUNyQyxDQUFDO2NBQ0YsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzNDOztVQVlEO1VBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlQLGFBQWEsRUFBRTtVQUU5QjtVQUNPLGVBQWVRLGFBQWFBLENBQUNDLElBQVksRUFBRUMsSUFBVTtZQUMzRDtZQUNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNSixFQUFFLENBQUNMLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQyxDQUFDSyxLQUFLLEVBQUU7WUFFNUUsSUFBSUgsYUFBYSxFQUFFO2NBQ2xCO2NBQ0EsTUFBTUosRUFBRSxDQUFDTCxVQUFVLENBQUNhLE1BQU0sQ0FBQ0osYUFBYSxDQUFDSyxFQUFHLEVBQUU7Z0JBQzdDQyxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTtnQkFDZkMsSUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUk7Z0JBQ2ZSO2VBQ0EsQ0FBQztjQUNGUyxPQUFPLENBQUNDLEdBQUcsQ0FB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