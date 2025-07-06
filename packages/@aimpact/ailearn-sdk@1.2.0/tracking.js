System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.0/entities/item", "@beyond-js/reactive@2.1.0/entities/collection", "@aimpact/chat-sdk@1.5.4/core", "@beyond-js/reactive@2.1.0/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
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
    }, function (_aimpactChatSdk154Session) {
      dependency_2 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_5 = _beyondJsReactive210EntitiesItem;
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_6 = _beyondJsReactive210EntitiesCollection;
    }, function (_aimpactChatSdk154Core) {
      dependency_7 = _aimpactChatSdk154Core;
    }, function (_beyondJsReactive210Model) {
      dependency_8 = _beyondJsReactive210Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.3"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIl9hcGkiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsImVuZHBvaW50cyIsIndyaXR0ZW4iLCJBc3NpZ25tZW50cyIsIkFzc2lnbm1lbnQiLCJhcmdzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIkRhc2hib2FyZEFjdGl2aXRpZXMiLCJEYXNoYm9hcmRBY3Rpdml0eSIsImRhc2hib2FyZCIsInBhcnRpY2lwYW50cyIsImZpbHRlciIsInBhcnRpY2lwYW50IiwiYWN0aXZpdGllcyIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIl9kYXNoYm9hcmQiLCJUcmFja2luZ0Rhc2hib2FyZCIsImlzVXNlckNyZWF0b3IiLCJjcmVhdG9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJQYXJ0aWNpcGFudHMiLCJEYXNoYm9hcmRQcm92aWRlciIsImFyY2hpdmUiLCJhcmNoaXZlZCIsInJlc3RvcmUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwiTWFwIiwidHJhY2UiLCJzZXREYXRhIiwiUGFydGljaXBhbnRBY3Rpdml0eSIsImNoZWNrIiwidHlwZXMiLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInBpY3R1cmUiLCJhdHRlbXB0cyIsInRpdGxlIiwicXVlc3Rpb25zIiwiaW5kZXgiLCJyZXNwb25zZXMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJrZXkiLCJvYmplY3RpdmUiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicmVkdWNlIiwiYWNjIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWRzIiwiX3BhcnRpY2lwYW50IiwiX3VzZXIiLCJhY3Rpdml0aWVzRGF0YSIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJVc2VyRGF0YSIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInVpZCIsInJlYWR5IiwiZW5hYmxlQUkiLCJ0ZXh0IiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInRleHRzIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9jbGFzc3Jvb21zIiwiVHJhY2tpbmciLCJtb2RlbFR5cGUiLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiTW9kdWxlTGlzdEl0ZW0iLCJDbGFzc3Jvb20iLCJyZWFjdGl2ZVByb3BzIiwibG9hZFRlc3RpbmciLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJjbGFzc3Jvb20iLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsImFjY2Vzc2VkIiwiQWN0aXZpdHlUeXBlRW51bSIsIkFjdGl2aXR5U3RhdHVzIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2NyZWRpdHMudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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