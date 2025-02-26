System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, Tracking, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assignments: void 0,
    Assignment: void 0,
    Credits: void 0,
    Tracking: void 0
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
        hash: 2906637041,
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
        hash: 1060032465,
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
        "im": "./index",
        "from": "Tracking",
        "name": "Tracking"
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
        (require || prop === 'Tracking') && _export("Tracking", Tracking = require ? require('./index').Tracking : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJnZXRQcm9wZXJ0eSIsImNoYXQiLCJDaGF0IiwibGFuZ3VhZ2UiLCJsb2FkQWxsIiwibG9hZFRlc3RpbmdBY3Rpdml0eSIsImFjdGl2aXR5IiwiY3JlZGl0cyIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJkcmFmdElkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIk1hcCIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwiVHJhY2tpbmdQcm92aWRlciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsImNvZGUiLCJjb25zb2xlIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jcmVkaXRzLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXR5LnRzIiwiL3RyYWNraW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTSxNQUFPSSwwQkFBMEI7WUFDdEMsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUEMsWUFBWUQsTUFBa0I7Y0FDN0IsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJTixJQUFBLENBQUFTLEdBQUcsQ0FBQ1AsT0FBQSxDQUFBUSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ2IsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ2dCLEdBQUcsQ0FBQyxnQkFBZ0JQLEtBQUssQ0FBQ1EsWUFBWSxlQUFlUixLQUFLLENBQUNTLEVBQUUsRUFBRSxDQUFDO2NBRXpHLElBQUksQ0FBQ0osTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUssS0FBSyxDQUFDLHdCQUF3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QixFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ2IsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU13QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJDLEdBQUksQ0FBQzBCLElBQUksQ0FBQyxnQkFBZ0JqQixLQUFLLENBQUNTLEVBQUUsU0FBUyxFQUFFVCxLQUFLLENBQUM7Y0FDL0UsSUFBSSxDQUFDNEIsUUFBUSxDQUFDdkIsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlLLEtBQUssQ0FBQywrQkFBK0JrQixRQUFRLENBQUNaLEtBQUssRUFBRSxDQUFDOztjQUdqRSxPQUFPWSxRQUFRLENBQUN0QixJQUFJO1lBQ3JCO1lBQ0EwQixZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLElBQUksQ0FBQyxDQUFBekMsR0FBSSxDQUFDVSxNQUFNLENBQUNiLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxPQUFPLElBQUksQ0FBQyxDQUFBYixHQUFJLENBQUMwQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBekIsTUFBTyxDQUFDZ0IsWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQztZQUVEOEcsa0JBQWtCLEdBQUcsTUFBQUEsQ0FBT2pCLE9BQU8sRUFBRUgsVUFBVSxLQUFJO2NBQ2xELElBQUksQ0FBQyxDQUFBM0csR0FBSSxDQUFDVSxNQUFNLENBQUNiLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFQyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZixHQUFJLENBQUNnQixHQUFHLENBQUMsbUJBQW1COEYsT0FBTyxlQUFlSCxVQUFVLFVBQVUsQ0FBQztjQUMzRyxPQUFPNUYsSUFBSTtZQUNaLENBQUM7O1VBQ0QyQixPQUFBLENBQUFrRixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7VUM5REQ7O1VBRUFoRyxNQUFBLENBQUFnSCxjQUFBLENBQUFsRyxPQUFBO1lBQ0E4QyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUE1RCxNQUFBLENBQUFnSCxjQUFBLENBQUFsRyxPQUFBO1lBQ0E4QyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=