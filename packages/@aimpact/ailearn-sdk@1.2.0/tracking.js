System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.2/entities/item", "@beyond-js/reactive@2.1.2/entities/collection", "@aimpact/chat-sdk@1.5.5/core", "@beyond-js/reactive@2.1.2/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assignments: void 0,
    Assignment: void 0,
    Credits: void 0,
    TrackingDashboard: void 0,
    ParticipantProvider: void 0,
    Tracking: void 0,
    IActivityListItem: void 0,
    IActivityBase: void 0,
    TrackingStatusType: void 0,
    IActivityTrackingBase: void 0,
    IDashboard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_1 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_2 = _aimpactChatSdk155Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_5 = _beyondJsReactive212EntitiesItem;
    }, function (_beyondJsReactive212EntitiesCollection) {
      dependency_6 = _beyondJsReactive212EntitiesCollection;
    }, function (_aimpactChatSdk155Core) {
      dependency_7 = _aimpactChatSdk155Core;
    }, function (_beyondJsReactive212Model) {
      dependency_8 = _beyondJsReactive212Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/startup', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/media-manager/uploader', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 3089474622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            list = this.load;
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(_session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              this.triggerEvent();
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityCollectionProvider = ActivityCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/

      ims.set('./activities/collection', {
        hash: 74674477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _ = require("./");
          var _provider = require("./provider");
          class Activities extends _collection.Collection {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'activity',
                item: _.Activity,
                provider: _provider.ActivityProvider
              });
              const {
                parent,
                loadChat = false,
                ...specs
              } = props;
              this.#tracking = parent;
              this.#loadChat = loadChat;
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              let items = Object.values(data.items);
              const module = this.#tracking.module.getProperties();
              items = data.order.map(id => ({
                ...data.items[id],
                module,
                parent: this,
                loadChat: true
              }));
              this.setItems(items);
              this.items.forEach(item => {
                item.setTracking(this.#tracking);
                item.processMaterials();
              });
              return data;
            };
            async loadActivity({
              id
            }) {
              if (this.map.has(id)) return this.map.get(id);
              // const instance = new Activity({ id, assignmentId: this.tracking.assignmentId, tracking: this.tracking });
              const instance = new _.Activity({
                parent: this,
                id,
                loadChat: this.#loadChat,
                assignmentId: this.tracking.modelId,
                testing: this.tracking.testing,
                tracking: this.tracking
              });
              // instance.setTracking(this.#tracking);
              await instance.load();
              instance.trigger('credits.change');
              this.#tracking.trigger('credits.change');
              return instance;
            }
          }
          exports.Activities = Activities;
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 1955657530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          var _credits = require("../credits");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _item.Item {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            get objectives() {
              return this.resources?.specs?.objectives;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #testing;
            get testing() {
              return this.#testing;
            }
            #loadChat;
            getMaterials() {
              return this.resources?.materials ? this.resources.materials : this.materials;
            }
            getSpecs() {
              return this.resources?.specs ? this.resources.specs : this.specs;
            }
            constructor({
              parent,
              id,
              testing = false,
              ...specs
            }) {
              super({
                id,
                entity: 'Activities',
                ...specs,
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'settings', 'specs', 'chat', 'module', {
                  name: 'credits',
                  value: _credits.Credits
                }, 'data', 'user'],
                provider: _provider.ActivityProvider
              });
              if (specs.tracking) this.setTracking(specs.tracking);
              this.#testing = testing;
              let {
                assignmentId,
                data,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
              assignmentId = assignmentId ? assignmentId : parent.tracking.assignmentId;
              this.startup(assignmentId, data);
            }
            setTracking(tracking) {
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => {
                if (!this.#tracking) return;
                this.set({
                  credits: this.#tracking.credits.getProperties()
                });
                this.trigger('credits.change');
              });
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
              if (this.#loadChat && this.getProperty('chat')) {
                this.loadChat(this.getProperty('chat'));
              }
            }
            async loadChat(data) {
              const chat = new _core.Chat({
                id: data.id,
                language: this.language
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: data.id
              });
              this.trigger('chat.loaded');
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.getProperty('id');
              specs.assignmentId = this.#assignmentId;
              const data = this.testing ? await this.provider.loadTestingActivity(this.tracking.getProperty('id'), this.getProperty('id')) : await super.load(specs);
              await this.set({
                ...data.activity,
                credits: data.credits,
                module: data.module
              });
              //when the activity is loaded in assignments view, the tracking is not loaded.
              this.#tracking.set(data);
              this.#tracking.trigger('credits.change');
              //todo: this code must be removed when the reactive model is fixed
              this.#process();
              return data;
            };
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.resources?.materials?.assessment) {
                this.#assessment = JSON.parse(this.resources.materials.assessment);
              }
            }
            processMaterials() {
              return this.#process();
            }
            async publish({
              params,
              type
            }) {
              try {
                const response = await this.provider.publish({
                  params,
                  type
                });
                if (response.data.tracking) {
                  this.#tracking = response.data.tracking;
                }
                if (type === 'assessment') {
                  this.#assessment.selection = 'results';
                }
                this.data = type === 'assessment' ? response.data.tracking : response.data;
              } catch (e) {
                console.error(e);
                throw new Error('error publishing spoken activity');
              }
            }
            async publishSpoken({
              params,
              type
            }) {
              if (!params.draftId) params.assignmentId = params.assignmentId ?? this.#assignmentId;
              params.activityId = params.activityId ?? this.id;
              const data = await this.provider.publish({
                data: params,
                type
              });
              this.set({
                data
              });
              this.#analysis = data.analysis;
              this.#feedback = data.feedback;
              this.#competenciesFeedback = data.competenciesFeedback;
            }
            set = data => {
              const response = super.set(data);
              this.#process();
              this.trigger('change');
              return response;
            };
            consumeCoins = async () => {
              return this.#tracking.consumeCoins();
            };
          }
          exports.Activity = Activity;
        }
      });

      /*************************************
      INTERNAL MODULE: ./activities/provider
      *************************************/

      ims.set('./activities/provider', {
        hash: 41009165,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _error = require("../error");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const {
                  status,
                  data,
                  error
                } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
                if (error) throw new Error(error);
                if (!status) throw new Error('Failed to load activity');
                if (specs?.progress) await this.#parent.processLoad(data);
                return data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error loading activity',
                  code: 500,
                  endpoint: `/assignments/${specs.assignmentId}/activities/${specs.id}`,
                  specs
                });
              }
            };
            loadTestingActivity = async (draftId, activityId) => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const {
                  status,
                  data,
                  error
                } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
                if (error) throw new Error(error);
                if (!status) throw new Error('Failed to load testing activity');
                return data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error loading testing activity',
                  code: 500,
                  endpoint: `/modules/drafts/${draftId}/activities/${activityId}/testing`,
                  specs: {
                    draftId,
                    activityId
                  }
                });
              }
            };
            list = this.load;
            publish = async specs => {
              try {
                if (specs.type === 'spoken') {
                  return this.spoken(specs.data);
                }
                const endpoints = {
                  assessment: '/activities/assessments/completion',
                  written: '/activities/written/completion',
                  'hand-written': '/activities/hand-written/completion'
                };
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const {
                  status,
                  data,
                  error
                } = await this.#api.post(endpoints[specs.type], specs.params);
                if (error) throw new Error(error);
                if (!status) throw new Error('Failed to process assessment');
                return {
                  status,
                  data
                };
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error processing assessment',
                  code: 500,
                  endpoint: `/activities/${specs.type}/completion`,
                  specs
                });
              }
            };
            spoken = async specs => {
              try {
                const props = Object.getOwnPropertyNames(specs);
                const form = new FormData();
                props.forEach(prop => {
                  form.append(prop, specs[prop]);
                });
                const xhr = new _uploader.XHRLoader();
                xhr.bearer(await _session.sessionWrapper.user.token);
                const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
                const json = await response.json();
                if (!json.status) throw new Error('Failed to publish spoken assessment');
                return json.data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error publishing spoken assessment',
                  code: 500,
                  endpoint: '/activities/spoken/completion',
                  specs
                });
              }
            };
            async consumeCoins() {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
                if (!response.status) throw new Error(`Error consuming coins: ${response.error}`);
                return response.data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error consuming coins',
                  code: 500,
                  endpoint: `/assignments/${this.#parent.assignmentId}/coins/consume`,
                  specs: {
                    assignmentId: this.#parent.assignmentId
                  }
                });
              }
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 2173799384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assignments extends _collection.Collection {
            constructor() {
              super({
                entity: 'assignments',
                item: _item.Assignment
              });
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1328445365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle */
          class Assignment extends _item.Item {
            constructor(args) {
              super({
                entity: 'assignments',
                properties: ['id', 'title', 'description', 'name'],
                ...args
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /*************************
      INTERNAL MODULE: ./credits
      *************************/

      ims.set('./credits', {
        hash: 2299380065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /********************************************
      INTERNAL MODULE: ./dashboard/activities/index
      ********************************************/

      ims.set('./dashboard/activities/index', {
        hash: 3676316793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class DashboardActivities extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardActivities',
                item: _item.DashboardActivity
              });
              this.#parent = parent;
            }
            /**
             * Processes the activities data by sorting the items according to the given order.
             * It then updates the items structure accordingly.
             *
             * @param {IDashboard["activities"]} activities - The activities data containing the order array and items record.
             
             */
            // @ts-ignore
            set(data) {
              const items = data.order.map(id => data.items[id]);
              super.setItems(items);
              //@ts-ignore
              return super.set(items);
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
          }
          exports.DashboardActivities = DashboardActivities;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./dashboard/activities/item
      *******************************************/

      ims.set('./dashboard/activities/item', {
        hash: 1697760133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class DashboardActivity extends _item.Item {
            #parent;
            #dashboard;
            get participants() {
              return this.#dashboard?.participants.items.filter(participant => participant.activities.has(this.id)) ?? [];
            }
            get assessment() {
              return JSON.parse(this.resources?.materials?.assessment ?? '{}');
            }
            constructor({
              parent,
              ...args
            } = {}) {
              super({
                ...args,
                entity: 'DashboardParticipants',
                properties: ['id', 'type', 'language', 'title', 'description', 'picture', 'settings', 'materials', 'specs', 'resources']
              });
              this.#parent = parent;
              this.#dashboard = parent.parent;
            }
          }
          exports.DashboardActivity = DashboardActivity;
        }
      });

      /*********************************
      INTERNAL MODULE: ./dashboard/index
      *********************************/

      ims.set('./dashboard/index', {
        hash: 3873797573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingDashboard = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participants = require("./participants");
          var _dashboard = require("./providers/dashboard");
          /*bundle*/
          class TrackingDashboard extends _item.Item {
            get isUserCreator() {
              return _session.sessionWrapper.user.id === this.module.creator?.id;
            }
            get totalParticipants() {
              return this.participants.items.length;
            }
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'Dashboard',
                properties: ['id', 'classroom', 'module', 'archived', {
                  name: 'activities',
                  value: _activities.DashboardActivities
                }, {
                  name: 'participants',
                  value: _participants.Participants
                }],
                provider: _dashboard.DashboardProvider
              });
            }
            set(data) {
              const response = super.set(data);
              return response;
            }
            async archive() {
              const data = await this.provider.archive();
              this.set({
                archived: data.archived
              });
              return data;
            }
            async restore() {
              const data = await this.provider.restore();
              this.set({
                archived: data.archived
              });
              return data;
            }
          }
          exports.TrackingDashboard = TrackingDashboard;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/index
      *********************************************************/

      ims.set('./dashboard/participants/activities/index', {
        hash: 225838489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ParticipantActivities extends _model.ReactiveModel {
            #data;
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            constructor(parent) {
              super();
              if (!parent) console.trace(2, parent);
              this.#parent = parent;
              this.#data = {};
            }
            setData(data) {
              this.#data = data;
            }
            set(data) {
              data.forEach(item => {
                if (this.#map.has(item.id)) {
                  this.#map.get(item.id).set(item);
                  return;
                }
                this.#map.set(item.id, new _item.ParticipantActivity({
                  parent: this,
                  ...item
                }));
              });
              return data;
            }
            /**
             * @deprecated
             * @param activities
             */
            check(activities) {
              const types = {
                spoken: _spoken.ParticipantSpokenActivity,
                detault: _item.ParticipantActivity,
                'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
              };
              const currents = Object.keys(this.#data);
              currents.forEach(id => {
                if (!activities.has(id)) {
                  console.warn('something wrong, this activity is not loaded in dashboard tracking: ', id);
                  return;
                }
                const activity = activities.get(id);
                if (this.has(id)) {
                  this.get(activity.id).set(this.#data[id]?.data ?? this.#data[id]);
                  return this.get(activity.id);
                }
                const Activity = types[activity.type] || types.detault;
                const data = this.#data[id]?.data ?? this.#data[id];
                const instance = new Activity({
                  parent: this,
                  activity,
                  ...data
                });
                this.#map.set(activity.id, instance);
                return instance;
              });
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/item
      ********************************************************/

      ims.set('./dashboard/participants/activities/item', {
        hash: 2936359814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            get activity() {
              return this.dashboard?.activities?.get(this.id);
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            get picture() {
              return this.attempts?.[0]?.picture;
            }
            get assessment() {
              const data = this.activity.assessment;
              if (this.activity.type === 'multiple-choice') {
                return {
                  title: data.title,
                  questions: data.questions.map((item, index) => {
                    return {
                      ...item,
                      ...this.responses[index]
                    };
                  })
                };
              }
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              parent,
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['id', 'alerts', 'messages', 'interactions', 'progress', 'synthesis', 'attempts', 'chat', 'data', 'counters', 'responses', ...properties]
              });
              this.#parent = parent;
            }
            async loadChat() {
              if (!this.chat || !this.chat?.id) {
                console.warn('The activity does not have a chat id');
                return;
              }
              const chat = new _core.Chat({
                id: this.chat.id
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: this.chat.id
              });
              this.triggerEvent('chat.loaded');
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/multiple-choice
      *******************************************************************/

      ims.set('./dashboard/participants/activities/multiple-choice', {
        hash: 4142976364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get questions() {
              try {
                return JSON.parse(this?.activity.resources.materials.assessment).questions;
              } catch (e) {
                console.warn(e);
              }
            }
            get participationData() {
              return this.questions?.map((question, index) => {
                return {
                  ...question,
                  answer: this.responses?.[index].answer,
                  accuracy: this.responses?.[index].accuracy
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', 'counters', 'responses', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantMultipleChoiceActivity = ParticipantMultipleChoiceActivity;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/spoken
      **********************************************************/

      ims.set('./dashboard/participants/activities/spoken', {
        hash: 1641659011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            get icons() {
              if (this.assessment) {
                return Object.keys(this.assessment).map(key => this.assessment[key]);
              }
              return [];
            }
            get totalPoints() {
              return this.assessment?.reduce((acc, objective) => acc + this.assessment[objective].points, 0);
            }
            get assessment() {
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['activity', 'attempts']
              });
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./dashboard/participants/index
      **********************************************/

      ims.set('./dashboard/participants/index', {
        hash: 3470754433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class Participants extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            get dashboard() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardParticipants',
                item: _item.Participant
              });
              this.#parent = parent;
            }
            set(data) {
              const sort = (a, b) => {
                return a.user.name?.localeCompare(b.user.name);
              };
              if (Array.isArray(data)) {
                const items = data.sort((a, b) => a.name?.localeCompare(b.name));
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              } else {
                const ids = Object.keys(data);
                const items = ids.map(id => ({
                  id,
                  ...data[id]
                })).sort(sort);
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              }
            }
          }
          exports.Participants = Participants;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/item
      *********************************************/

      ims.set('./dashboard/participants/item', {
        hash: 3841754010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participant = require("../providers/participant");
          var _credits = require("../../credits");
          var _user = require("./user");
          class Participant extends _item.Item {
            #activitiesData;
            get assignmentId() {
              return this.#parent.dashboard.id;
            }
            #parent;
            get dashboard() {
              return this.#parent?.dashboard;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                provider: _participant.ParticipantProvider,
                properties: ['id', {
                  name: 'user',
                  value: _user.UserData
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              // console.log(-1, this?.dashboard);
              this.#parent = parent;
              this.#activities = new _activities.ParticipantActivities(this);
              this.setActivities(args.activities);
            }
            setActivities(elements) {
              if (Array.isArray(elements.order)) {
                const activitiesData = elements.order.filter(id => !!elements.items[id]?.data);
                const activities = activitiesData.map(id => {
                  const item = {
                    ...elements.items[id]
                  };
                  const {
                    data
                  } = item;
                  delete item.data;
                  return {
                    ...item,
                    ...data
                  };
                });
                this.#activities.set(activities);
              } else {
                const ids = Object.keys(elements);
                const activities = ids.map(id => {
                  const data = elements[id]?.data ?? elements[id];
                  return {
                    id,
                    ...data
                  };
                });
                this.#activities.set(activities);
              }
            }
            set(data) {
              this.setActivities(data.activities);
              return super.set({
                ...data
              });
            }
            async load() {
              // console.log(1, 'loading', this.user.id);
              const data = await super.load({
                userId: this.user.id ?? this.user.uid
              });
              super.ready = true;
              return data;
            }
            enableAI = async () => {
              const data = await this.provider.enableAI({
                userId: this.user.id
              });
              this.credits.set(data.credits);
              this.trigger('credits.changed');
              this.trigger('change');
            };
          }
          exports.Participant = Participant;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/user
      *********************************************/

      ims.set('./dashboard/participants/user', {
        hash: 3284649687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class UserData extends _item.Item {
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                properties: ['photoUrl', 'name', 'id']
              });
            }
          }
          exports.UserData = UserData;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./dashboard/providers/dashboard
      ***********************************************/

      ims.set('./dashboard/providers/dashboard', {
        hash: 2251720750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            async load() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${this.#parent.id}/dashboard`);
              if (!status) {
                throw new Error('error loading dashboard');
              }
              return data;
            }
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
          }
          exports.DashboardProvider = DashboardProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./dashboard/providers/participant
      *************************************************/

      ims.set('./dashboard/providers/participant', {
        hash: 922316604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/progress`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            enableAI = async props => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                data,
                status
              } = await this.#api.post(`/assignments/${this.#parent.assignmentId}/ai/enable`, props);
              if (!status) {
                console.log(data);
                throw new Error('error enabling AI');
              }
              return data;
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 1573520434,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            endpoint;
            specs;
            constructor(input) {
              // Handle string input
              if (typeof input === 'string') {
                super(input);
                this.name = 'CustomError';
                this.message = input;
                this.code = 500; // Default error code
                this.endpoint = ''; // Default empty endpoint
                this.specs = {}; // Default empty specs
              } else {
                // Handle object input
                const {
                  texts,
                  code = 500,
                  endpoint = '',
                  specs = {}
                } = input;
                super(texts || 'Unknown error'); // Call the parent constructor (Error) with the message
                this.name = 'CustomError'; // Set the name of the error (optional)
                this.message = texts || 'Unknown error';
                this.code = code; // Add a custom 'code' property
                this.endpoint = endpoint;
                this.specs = specs;
              }
            }
            getProperties() {
              return {
                message: this.message,
                code: this.code,
                endpoint: this.endpoint,
                specs: this.specs
              };
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1651772423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _credits = require("./credits");
          var _provider = require("./provider");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _item.Item {
            #api;
            #modelId;
            modelType = 'tracking';
            get modelId() {
              return this.#modelId;
            }
            get assignmentId() {
              return this.#modelId;
            }
            #order;
            get order() {
              return this.#order;
            }
            static #instances = new Map();
            constructor({
              id,
              chat,
              testing
            }) {
              super({
                id,
                entity: 'Tracking',
                provider: _provider.TrackingProvider,
                properties: ['id', {
                  name: 'module',
                  value: _learningModules.ModuleListItem
                }, 'status', 'user', 'community', 'access', 'accessed', 'assignment', 'realtime', {
                  name: 'classroom',
                  value: _classrooms.Classroom
                }, {
                  name: 'activities',
                  value: _collection.Activities,
                  properties: {
                    loadChat: true
                  }
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              //@ts-ignore;
              this.reactiveProps(['loadChat', 'testing']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.loadChat = !!chat;
              this.testing = testing;
              this.#modelId = id;
            }
            async loadTesting({
              id,
              activityId
            }) {
              return this.provider.getActivityTesting(id, activityId);
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.getProperty('id');
              const data = this.testing ? await this.loadTesting(specs) : await super.load(specs);
              this.classroom.set(data.classroom);
              this.getProperty('activities').items.map(item => {
                item.set({
                  credits: data.credits
                });
              });
              if (data.activities) {
                this.#order = data.activities.order;
              }
              this.ready = true;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              await this.credits.set(response);
              await this.set(response);
              this.trigger('credits.change', 'add');
              return response;
            };
            async accessToAssignment() {
              const specs = {
                id: this.#modelId
              };
              const data = await this.provider.access(specs);
              this.set(data);
            }
            static get({
              id,
              userId,
              chat,
              testing = false
            }) {
              const trackingId = `${id}.${userId}`;
              if (this.#instances.has(trackingId)) {
                return this.#instances.get(trackingId);
              }
              const instance = new Tracking({
                id,
                chat,
                testing
              });
              this.#instances.set(trackingId, instance);
              return instance;
            }
            async setCredits(data) {
              await this.credits.set(data);
              this.trigger('credits.change');
            }
            async requestClassroomAccess() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/classrooms/${this.classroom.id}/request`, {});
              if (!response.status && response.error?.code === 38) {
                console.error(response.error);
                return response;
              }
              if (response.data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.modelId
                });
              } else {
                await this.set({
                  access: response.data.status
                });
              }
              return response;
            }
          }
          exports.Tracking = Tracking;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 1470739975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          class TrackingProvider {
            #api;
            #parent;
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.get(`/assignments/${specs.id}/progress`, specs);
                const {
                  status,
                  data,
                  error
                } = response;
                if (error) throw new Error(error);
                if (!status) throw new Error('Failed to load tracking data');
                return data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error loading tracking data',
                  code: 500,
                  endpoint: `/assignments/${specs.id}/progress`,
                  specs
                });
              }
            };
            async access(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
                if (!response.status) throw new Error(`Error accessing assignment: ${response.error}`);
                return response.data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error accessing assignment',
                  code: 500,
                  endpoint: `/assignments/${specs.id}/access`,
                  specs
                });
              }
            }
            consumeCoins = async () => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
                if (!response.status) throw new Error(`Error consuming coins: ${response.error}`);
                return response.data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error consuming coins',
                  code: 500,
                  endpoint: `/assignments/${this.#parent.assignmentId}/coins/consume`,
                  specs: {
                    assignmentId: this.#parent.assignmentId
                  }
                });
              }
            };
            getActivityTesting = async (draftId, activityId) => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
                const {
                  status,
                  data,
                  error
                } = response;
                if (error) throw new Error(`Error getting activity testing: ${error}`);
                if (!status) throw new Error('Failed to get activity testing data');
                return data;
              } catch (error) {
                throw new _error.CustomError({
                  texts: error.message || 'Error getting activity testing data',
                  code: 500,
                  endpoint: `/modules/drafts/${draftId}/activities/${activityId}/testing`,
                  specs: {
                    draftId,
                    activityId
                  }
                });
              }
            };
          }
          exports.TrackingProvider = TrackingProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./types/activity
      ********************************/

      ims.set('./types/activity', {
        hash: 3025505518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var ActivityTypeEnum;
          (function (ActivityTypeEnum) {
            ActivityTypeEnum["ContentTheory"] = "content-theory";
            ActivityTypeEnum["CharacterTalk"] = "character-talk";
            ActivityTypeEnum["Debate"] = "debate";
            ActivityTypeEnum["MultipleChoice"] = "multiple-choice";
            ActivityTypeEnum["Spoken"] = "spoken";
          })(ActivityTypeEnum || (ActivityTypeEnum = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/dashboard
      *********************************/

      ims.set('./types/dashboard', {
        hash: 2151938038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStatus = void 0;
          /**
           * Represents the possible statuses of an activity.
           */
          var ActivityStatus;
          (function (ActivityStatus) {
            ActivityStatus["PENDING"] = "pending";
            ActivityStatus["IN_PROGRESS"] = "in-progress";
            ActivityStatus["COMPLETED"] = "completed";
            ActivityStatus["OUTSTANDING"] = "outstanding";
          })(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
        }
      });

      /********************************
      INTERNAL MODULE: ./types/response
      ********************************/

      ims.set('./types/response', {
        hash: 1501783281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./types/tracking
      ********************************/

      ims.set('./types/tracking', {
        hash: 3168921732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/index",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./assignments/collection",
        "from": "Assignments",
        "name": "Assignments"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./dashboard/index",
        "from": "TrackingDashboard",
        "name": "TrackingDashboard"
      }, {
        "im": "./dashboard/providers/participant",
        "from": "ParticipantProvider",
        "name": "ParticipantProvider"
      }, {
        "im": "./index",
        "from": "Tracking",
        "name": "Tracking"
      }, {
        "im": "./types/activity",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/activity",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/dashboard",
        "from": "TrackingStatusType",
        "name": "TrackingStatusType"
      }, {
        "im": "./types/dashboard",
        "from": "IActivityTrackingBase",
        "name": "IActivityTrackingBase"
      }, {
        "im": "./types/dashboard",
        "from": "IDashboard",
        "name": "IDashboard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/index').Activity : value);
        (require || prop === 'Assignments') && _export("Assignments", Assignments = require ? require('./assignments/collection').Assignments : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits').Credits : value);
        (require || prop === 'TrackingDashboard') && _export("TrackingDashboard", TrackingDashboard = require ? require('./dashboard/index').TrackingDashboard : value);
        (require || prop === 'ParticipantProvider') && _export("ParticipantProvider", ParticipantProvider = require ? require('./dashboard/providers/participant').ParticipantProvider : value);
        (require || prop === 'Tracking') && _export("Tracking", Tracking = require ? require('./index').Tracking : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activity').IActivityListItem : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/activity').IActivityBase : value);
        (require || prop === 'TrackingStatusType') && _export("TrackingStatusType", TrackingStatusType = require ? require('./types/dashboard').TrackingStatusType : value);
        (require || prop === 'IActivityTrackingBase') && _export("IActivityTrackingBase", IActivityTrackingBase = require ? require('./types/dashboard').IActivityTrackingBase : value);
        (require || prop === 'IDashboard') && _export("IDashboard", IDashboard = require ? require('./types/dashboard').IDashboard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIl9hcGkiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwiX2Vycm9yIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkN1c3RvbUVycm9yIiwidGV4dHMiLCJtZXNzYWdlIiwiY29kZSIsImVuZHBvaW50IiwiZW5kcG9pbnRzIiwid3JpdHRlbiIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJhY3Rpdml0aWVzIiwiX2FjdGl2aXRpZXMiLCJfcGFydGljaXBhbnRzIiwiX2Rhc2hib2FyZCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiaXNVc2VyQ3JlYXRvciIsImNyZWF0b3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIlBhcnRpY2lwYW50cyIsIkRhc2hib2FyZFByb3ZpZGVyIiwiYXJjaGl2ZSIsImFyY2hpdmVkIiwicmVzdG9yZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJNYXAiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJ0eXBlcyIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiY3VycmVudHMiLCJ3YXJuIiwicGljdHVyZSIsImF0dGVtcHRzIiwidGl0bGUiLCJxdWVzdGlvbnMiLCJpbmRleCIsInJlc3BvbnNlcyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsImtleSIsIm9iamVjdGl2ZSIsInBhcnRpY2lwYXRpb25EYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImljb25zIiwidG90YWxQb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJwb2ludHMiLCJQYXJ0aWNpcGFudCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJBcnJheSIsImlzQXJyYXkiLCJpZHMiLCJfcGFydGljaXBhbnQiLCJfdXNlciIsImFjdGl2aXRpZXNEYXRhIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlVzZXJEYXRhIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlcklkIiwidWlkIiwicmVhZHkiLCJlbmFibGVBSSIsInRleHQiLCJsb2ciLCJpbnB1dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiVHJhY2tpbmdQcm92aWRlciIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiY2xhc3Nyb29tIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwiYWNjZXNzIiwidHJhY2tpbmdJZCIsInNldENyZWRpdHMiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsIkFjdGl2aXR5VHlwZUVudW0iLCJBY3Rpdml0eVN0YXR1cyIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jcmVkaXRzLnRzIiwiL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy91c2VyLnRzIiwiL2Rhc2hib2FyZC9wcm92aWRlcnMvZGFzaGJvYXJkLnRzIiwiL2Rhc2hib2FyZC9wcm92aWRlcnMvcGFydGljaXBhbnQudHMiLCIvZXJyb3IudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvdHlwZXMvYWN0aXZpdHkudHMiLCIvdHlwZXMvZGFzaGJvYXJkLnRzIiwiL3Jlc3BvbnNlLnRzIiwiL3RyYWNraW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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