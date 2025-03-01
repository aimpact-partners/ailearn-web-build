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
        hash: 1246308976,
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
        hash: 3995121936,
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
              this.set(data);
              return data;
            }
            async restore() {
              const data = await this.provider.restore();
              this.set(data);
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
        hash: 3909753700,
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
        hash: 1061904367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _core = require("@aimpact/chat-sdk/core");
          class ParticipantActivity extends _item.Item {
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            get activity() {
              return this.#parent?.dashboard?.activities?.get(this.id);
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            constructor({
              parent,
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['id', 'alerts', 'messages', 'interactions', 'progress', 'activity', 'synthesis', 'chat', 'data', 'counters', 'responses', ...properties]
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
        hash: 2575498656,
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
                properties: ['id', 'user', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJnZXRQcm9wZXJ0eSIsImNoYXQiLCJDaGF0IiwibGFuZ3VhZ2UiLCJsb2FkQWxsIiwibG9hZFRlc3RpbmdBY3Rpdml0eSIsImFjdGl2aXR5IiwiY3JlZGl0cyIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJkcmFmdElkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJEYXNoYm9hcmRBY3Rpdml0aWVzIiwiRGFzaGJvYXJkQWN0aXZpdHkiLCJkYXNoYm9hcmQiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwYXJ0aWNpcGFudCIsImFjdGl2aXRpZXMiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwiY3JlYXRvciIsIlBhcnRpY2lwYW50cyIsIkRhc2hib2FyZFByb3ZpZGVyIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwiTWFwIiwiY29uc29sZSIsInRyYWNlIiwic2V0RGF0YSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJjaGVjayIsInR5cGVzIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJjdXJyZW50cyIsIndhcm4iLCJxdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJvYmplY3RpdmUiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIlBhcnRpY2lwYW50Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIkFycmF5IiwiaXNBcnJheSIsImlkcyIsIl9wYXJ0aWNpcGFudCIsImFjdGl2aXRpZXNEYXRhIiwiUGFydGljaXBhbnRQcm92aWRlciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInVpZCIsInJlYWR5IiwidGV4dCIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJ0ZXh0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiTW9kdWxlTGlzdEl0ZW0iLCJDbGFzc3Jvb20iLCJUcmFja2luZ1Byb3ZpZGVyIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwiYWNjZXNzIiwidHJhY2tpbmdJZCIsInNldENyZWRpdHMiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJfZXJyb3IiLCJhY2Nlc3NlZCIsIkFjdGl2aXR5VHlwZUVudW0iLCJBY3Rpdml0eVN0YXR1cyIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jcmVkaXRzLnRzIiwiL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS00sTUFBT0ksMEJBQTBCO1lBQ3RDLENB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