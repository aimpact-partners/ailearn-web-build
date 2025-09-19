System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/core", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.2"]]);
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
        hash: 2901413739,
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
          class ActivityProvider {
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
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            loadTestingActivity = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            list = this.load;
            publish = async specs => {
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
              xhr.bearer(await _session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
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
        hash: 385040768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor({
              texts,
              code
            }) {
              super(texts); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3441500721,
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
                // await this.#activities.setData(data.activities);
                this.#order = data.activities.order;
              }
              this.ready = true;
              // this.#activities = data.activities;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              //await this.credits.set(response.data.credits);
              await this.set(response.data);
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
        hash: 1556176488,
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
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${specs.id}/progress`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (error) {
                throw new _error.CustomError(error);
              }
              if (!status) {
                throw new Error('error loading class');
              }
              return data;
            };
            async access(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIl9hcGkiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsImVuZHBvaW50cyIsIndyaXR0ZW4iLCJBc3NpZ25tZW50cyIsIkFzc2lnbm1lbnQiLCJhcmdzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIkRhc2hib2FyZEFjdGl2aXRpZXMiLCJEYXNoYm9hcmRBY3Rpdml0eSIsImRhc2hib2FyZCIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBhcnRpY2lwYW50IiwiYWN0aXZpdGllcyIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIl9kYXNoYm9hcmQiLCJUcmFja2luZ0Rhc2hib2FyZCIsImlzVXNlckNyZWF0b3IiLCJjcmVhdG9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJQYXJ0aWNpcGFudHMiLCJEYXNoYm9hcmRQcm92aWRlciIsImFyY2hpdmUiLCJhcmNoaXZlZCIsInJlc3RvcmUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwiTWFwIiwidHJhY2UiLCJzZXREYXRhIiwiUGFydGljaXBhbnRBY3Rpdml0eSIsImNoZWNrIiwidHlwZXMiLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInBpY3R1cmUiLCJhdHRlbXB0cyIsInRpdGxlIiwicXVlc3Rpb25zIiwiaW5kZXgiLCJyZXNwb25zZXMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJrZXkiLCJvYmplY3RpdmUiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicmVkdWNlIiwiYWNjIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWRzIiwiX3BhcnRpY2lwYW50IiwiX3VzZXIiLCJhY3Rpdml0aWVzRGF0YSIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJVc2VyRGF0YSIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInVpZCIsInJlYWR5IiwiZW5hYmxlQUkiLCJ0ZXh0IiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInRleHRzIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9jbGFzc3Jvb21zIiwiVHJhY2tpbmciLCJtb2RlbFR5cGUiLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiTW9kdWxlTGlzdEl0ZW0iLCJDbGFzc3Jvb20iLCJyZWFjdGl2ZVByb3BzIiwibG9hZFRlc3RpbmciLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJjbGFzc3Jvb20iLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsImFjY2Vzc2VkIiwiQWN0aXZpdHlUeXBlRW51bSIsIkFjdGl2aXR5U3RhdHVzIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi8vYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiLy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiLy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiLy9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiLy9hc3NpZ25tZW50cy9pdGVtLnRzIiwiLy9jcmVkaXRzLnRzLyIsIi8vZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvL2Rhc2hib2FyZC9pbmRleC50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiLy9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pbmRleC50cyIsIi8vZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pdGVtLnRzIiwiLy9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvL2Rhc2hib2FyZC9wcm92aWRlcnMvZGFzaGJvYXJkLnRzIiwiLy9kYXNoYm9hcmQvcHJvdmlkZXJzL3BhcnRpY2lwYW50LnRzIiwiLy9lcnJvci50cy8iLCIvL2luZGV4LnRzLyIsIi8vcHJvdmlkZXIudHMvIiwiLy90eXBlcy9hY3Rpdml0eS50cyIsIi8vdHlwZXMvZGFzaGJvYXJkLnRzIiwiLy9yZXNwb25zZS50cy8iLCIvL3RyYWNraW5nLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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