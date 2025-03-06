System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactHttpSuite001Api) {
      dependency_1 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_2 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_3 = _aimpactChatSdk141Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_4 = _aimpactMediaManager100Uploader;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_6 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactChatSdk141Core) {
      dependency_7 = _aimpactChatSdk141Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_9 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_10 = _aimpactAilearnSdk110EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.16"]]);
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
      __pkg.dependencies.update([['@aimpact/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_10]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 3897867853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
              const response = await xhr.upload(form, `${_config.default.params.apis.ailearn}/activities/spoken/completion`);
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
        hash: 952222850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 3076571287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@aimpact/reactive/entities/item");
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
              params.assignmentId = params.assignmentId ?? this.#assignmentId;
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
            consumeCoins = () => {
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
        hash: 229187184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
              const response = await xhr.upload(form, `${_config.default.params.apis.ailearn}/activities/spoken/completion`);
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
        hash: 3043141596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 3263239267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 1084823483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 2352927759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivities = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 3025749353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 715770240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingDashboard = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _activities = require("./activities");
          var _participants = require("./participants");
          var _dashboard = require("./providers/dashboard");
          var _session = require("@aimpact/chat-sdk/session");
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
        hash: 219202554,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 1871136456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 3949132676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 1727874112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 2157475046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 3760561599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
          }
          exports.Participant = Participant;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/user
      *********************************************/

      ims.set('./dashboard/participants/user', {
        hash: 4160778205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
            set(data) {
              super.set(data);
              console.log(1, this.getProperties());
            }
          }
          exports.UserData = UserData;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./dashboard/providers/dashboard
      ***********************************************/

      ims.set('./dashboard/providers/dashboard', {
        hash: 3048493390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          //@ts-ignore

          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
        hash: 3632341174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
        hash: 3891556518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _item = require("@aimpact/reactive/entities/item");
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
                }],
                provider: _provider.TrackingProvider
              });
              //@ts-ignore;
              this.reactiveProps(['loadChat', 'testing']);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
              const response = await this.#api.post(`/assignments/${this.modelId}/classroom/request`, {});
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
        hash: 4146209239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _error = require("./error");
          class TrackingProvider extends _model.ReactiveModel {
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
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJnZXRQcm9wZXJ0eSIsImNoYXQiLCJDaGF0IiwibGFuZ3VhZ2UiLCJsb2FkQWxsIiwibG9hZFRlc3RpbmdBY3Rpdml0eSIsImFjdGl2aXR5IiwiY3JlZGl0cyIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJkcmFmdElkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJEYXNoYm9hcmRBY3Rpdml0aWVzIiwiRGFzaGJvYXJkQWN0aXZpdHkiLCJkYXNoYm9hcmQiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwYXJ0aWNpcGFudCIsImFjdGl2aXRpZXMiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwiY3JlYXRvciIsInRvdGFsUGFydGljaXBhbnRzIiwiUGFydGljaXBhbnRzIiwiRGFzaGJvYXJkUHJvdmlkZXIiLCJhcmNoaXZlIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJ0eXBlcyIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiY3VycmVudHMiLCJ3YXJuIiwidGl0bGUiLCJxdWVzdGlvbnMiLCJpbmRleCIsInJlc3BvbnNlcyIsImF0dGVtcHRzIiwidHJhbnNjcmlwdGlvbiIsIm9iamVjdGl2ZXNLZXlzIiwia2V5Iiwib2JqZWN0aXZlIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImFuc3dlciIsImFjY3VyYWN5IiwiaWNvbnMiLCJ0b3RhbFBvaW50cyIsInJlZHVjZSIsImFjYyIsInBvaW50cyIsIlBhcnRpY2lwYW50Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIkFycmF5IiwiaXNBcnJheSIsImlkcyIsIl9wYXJ0aWNpcGFudCIsIl91c2VyIiwiYWN0aXZpdGllc0RhdGEiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVXNlckRhdGEiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJ1c2VySWQiLCJ1aWQiLCJyZWFkeSIsImxvZyIsInRleHQiLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwiVHJhY2tpbmdQcm92aWRlciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiX2Vycm9yIiwiYWNjZXNzZWQiLCJBY3Rpdml0eVR5cGVFbnVtIiwiQWN0aXZpdHlTdGF0dXMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY3JlZGl0cy50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvdXNlci50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL2Rhc2hib2FyZC50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL3BhcnRpY2lwYW50LnRzIiwiL2Vycm9yLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzL2FjdGl2aXR5LnRzIiwiL3R5cGVzL2Rhc2hib2FyZC50cyIsIi9yZXNwb25zZS50cyIsIi90cmFja2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVB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