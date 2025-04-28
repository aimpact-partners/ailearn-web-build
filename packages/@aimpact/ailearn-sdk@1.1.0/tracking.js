System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.4.4/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
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
    }, function (_beyondJsHttpSuite010Api) {
      dependency_1 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_2 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_3 = _aimpactChatSdk144Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_4 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_5 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_6 = _beyondJsReactive204EntitiesCollection;
    }, function (_aimpactChatSdk144Core) {
      dependency_7 = _aimpactChatSdk144Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_beyondJsReactive204Model) {
      dependency_9 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_10 = _aimpactAilearnSdk110EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_10]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 3857548212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              this.triggerEvent();
              return json.data;
            };
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 3895407134,
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
              this.triggerEvent('chat.loaded');
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
                this.#tracking = response.data.tracking;
                this.#assessment.selection = 'results';
                this.data = response.data.tracking;
              } catch (e) {
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
        hash: 3414194117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              return json.data;
            };
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 1072921300,
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
        hash: 3061938277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          //@ts-ignore

          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#parent = parent;
            }
            async load() {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
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
        hash: 3292571397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/tracking`, specs);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
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
        hash: 3262316440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
              this.classroom.set(data.assignment.classroom);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 1928810318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
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
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            async access(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsInByb2plY3QiLCJhaWxlYXJuIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiYXNzaWdubWVudElkIiwiaWQiLCJFcnJvciIsImxpc3QiLCJwdWJsaXNoIiwidHlwZSIsImFzc2Vzc21lbnQiLCJzcG9rZW4iLCJlcnJvciIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsImV4cG9ydHMiLCJfY29sbGVjdGlvbiIsIl8iLCJfcHJvdmlkZXIiLCJBY3Rpdml0aWVzIiwiQ29sbGVjdGlvbiIsInRyYWNraW5nIiwibG9hZENoYXQiLCJvcmRlciIsImVudGl0eSIsIml0ZW0iLCJBY3Rpdml0eSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInNldCIsImtleXMiLCJsZW5ndGgiLCJpdGVtcyIsInZhbHVlcyIsIm1vZHVsZSIsImdldFByb3BlcnRpZXMiLCJtYXAiLCJzZXRJdGVtcyIsInNldFRyYWNraW5nIiwicHJvY2Vzc01hdGVyaWFscyIsImxvYWRBY3Rpdml0eSIsImhhcyIsImluc3RhbmNlIiwibW9kZWxJZCIsInRlc3RpbmciLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfaXRlbSIsIl9jcmVkaXRzIiwiSXRlbSIsImZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhbmFseXNpcyIsIm9iamVjdGl2ZXMiLCJyZXNvdXJjZXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJtYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDcmVkaXRzIiwic3RhcnR1cCIsIm9uIiwiY3JlZGl0cyIsImdldFByb3BlcnR5IiwiY2hhdCIsIkNoYXQiLCJsYW5ndWFnZSIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJhY3Rpdml0aWVzIiwiX2FjdGl2aXRpZXMiLCJfcGFydGljaXBhbnRzIiwiX2Rhc2hib2FyZCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiaXNVc2VyQ3JlYXRvciIsImNyZWF0b3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIlBhcnRpY2lwYW50cyIsIkRhc2hib2FyZFByb3ZpZGVyIiwiYXJjaGl2ZSIsImFyY2hpdmVkIiwicmVzdG9yZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJNYXAiLCJjb25zb2xlIiwidHJhY2UiLCJzZXREYXRhIiwiUGFydGljaXBhbnRBY3Rpdml0eSIsImNoZWNrIiwidHlwZXMiLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInRpdGxlIiwicXVlc3Rpb25zIiwiaW5kZXgiLCJyZXNwb25zZXMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsImtleSIsIm9iamVjdGl2ZSIsInBhcnRpY2lwYXRpb25EYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImljb25zIiwidG90YWxQb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJwb2ludHMiLCJQYXJ0aWNpcGFudCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJBcnJheSIsImlzQXJyYXkiLCJpZHMiLCJfcGFydGljaXBhbnQiLCJfdXNlciIsImFjdGl2aXRpZXNEYXRhIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlVzZXJEYXRhIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlcklkIiwidWlkIiwicmVhZHkiLCJlbmFibGVBSSIsInRleHQiLCJsb2ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJNb2R1bGVMaXN0SXRlbSIsIkNsYXNzcm9vbSIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsImFjY2Vzc2VkIiwiQWN0aXZpdHlUeXBlRW51bSIsIkFjdGl2aXR5U3RhdHVzIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2NyZWRpdHMudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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