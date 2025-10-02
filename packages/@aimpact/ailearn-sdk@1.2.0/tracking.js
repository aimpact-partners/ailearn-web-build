System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/core", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
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
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_5 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_6 = _beyondJsReactive211EntitiesCollection;
    }, function (_aimpactChatSdk155Core) {
      dependency_7 = _aimpactChatSdk155Core;
    }, function (_beyondJsReactive211Model) {
      dependency_8 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.3"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIl9hcGkiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwiX2Vycm9yIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkN1c3RvbUVycm9yIiwidGV4dHMiLCJtZXNzYWdlIiwiY29kZSIsImVuZHBvaW50IiwiZW5kcG9pbnRzIiwid3JpdHRlbiIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJhY3Rpdml0aWVzIiwiX2FjdGl2aXRpZXMiLCJfcGFydGljaXBhbnRzIiwiX2Rhc2hib2FyZCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiaXNVc2VyQ3JlYXRvciIsImNyZWF0b3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIlBhcnRpY2lwYW50cyIsIkRhc2hib2FyZFByb3ZpZGVyIiwiYXJjaGl2ZSIsImFyY2hpdmVkIiwicmVzdG9yZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJNYXAiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJ0eXBlcyIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiY3VycmVudHMiLCJ3YXJuIiwicGljdHVyZSIsImF0dGVtcHRzIiwidGl0bGUiLCJxdWVzdGlvbnMiLCJpbmRleCIsInJlc3BvbnNlcyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsImtleSIsIm9iamVjdGl2ZSIsInBhcnRpY2lwYXRpb25EYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImljb25zIiwidG90YWxQb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJwb2ludHMiLCJQYXJ0aWNpcGFudCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJBcnJheSIsImlzQXJyYXkiLCJpZHMiLCJfcGFydGljaXBhbnQiLCJfdXNlciIsImFjdGl2aXRpZXNEYXRhIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlVzZXJEYXRhIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlcklkIiwidWlkIiwicmVhZHkiLCJlbmFibGVBSSIsInRleHQiLCJsb2ciLCJpbnB1dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiVHJhY2tpbmdQcm92aWRlciIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiY2xhc3Nyb29tIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwiYWNjZXNzIiwidHJhY2tpbmdJZCIsInNldENyZWRpdHMiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsIkFjdGl2aXR5VHlwZUVudW0iLCJBY3Rpdml0eVN0YXR1cyIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi8vYWN0aXZpdGllcy9pbmRleC50cyIsIi8vYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi8vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi8vYXNzaWdubWVudHMvaXRlbS50cyIsIi8vY3JlZGl0cy50cy8iLCIvL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2luZGV4LnRzIiwiLy9kYXNoYm9hcmQvYWN0aXZpdGllcy9pdGVtLnRzIiwiLy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pbmRleC50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaW5kZXgudHMiLCIvL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy91c2VyLnRzIiwiLy9kYXNoYm9hcmQvcHJvdmlkZXJzL2Rhc2hib2FyZC50cyIsIi8vZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi8vZXJyb3IudHMvIiwiLy9pbmRleC50cy8iLCIvL3Byb3ZpZGVyLnRzLyIsIi8vdHlwZXMvYWN0aXZpdHkudHMiLCIvL3R5cGVzL2Rhc2hib2FyZC50cyIsIi8vcmVzcG9uc2UudHMvIiwiLy90cmFja2luZy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBw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