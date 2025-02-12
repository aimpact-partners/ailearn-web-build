System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100Config) {
      dependency_2 = _aimpactAilearnSdk100Config;
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
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactReactive001Model) {
      dependency_9 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_10 = _aimpactAilearnSdk100EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/tracking"
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
        hash: 787880975,
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
              items = items.map(item => ({
                ...item,
                module,
                loadChat: true
              }));
              this.setItems(items);
              this.items.forEach(item => item.setTracking(this.#tracking));
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
        hash: 371323529,
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
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
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
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'settings', 'specs', 'chat', {
                  name: 'module',
                  value: _learningModules.ModuleListItem
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }, 'data', 'user'],
                provider: _provider.ActivityProvider
              });
              if (specs.tracking) this.setTracking(specs.tracking);
              this.#testing = testing;
              const {
                assignmentId,
                data,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
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
                id: data.id
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
        hash: 1275133445,
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
                }, 'status', 'user', 'access', 'accessed', 'assignment', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJsb2FkQWN0aXZpdHkiLCJoYXMiLCJpbnN0YW5jZSIsIm1vZGVsSWQiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsIl9jb3JlIiwiX2l0ZW0iLCJfY3JlZGl0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIk1vZHVsZUxpc3RJdGVtIiwiQ3JlZGl0cyIsInN0YXJ0dXAiLCJvbiIsImdldFByb3BlcnR5IiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwibG9hZFRlc3RpbmdBY3Rpdml0eSIsImFjdGl2aXR5IiwiY3JlZGl0cyIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJkcmFmdElkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiTWFwIiwiQ2xhc3Nyb29tIiwiVHJhY2tpbmdQcm92aWRlciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsImNvZGUiLCJjb25zb2xlIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jcmVkaXRzLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXR5LnRzIiwiL3RyYWNraW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTSxNQUFPSSwwQkFBMEI7WUFDdEMsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUEMsWUFBWUQsTUFBa0I7Y0FDN0IsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJTixJQUFBLENBQUFTLEdBQUcsQ0FBQ1AsT0FBQSxDQUFBUSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ2IsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ2dCLEdBQUcsQ0FBQyxnQkFBZ0JQLEtBQUssQ0FBQ1EsWUFBWSxlQUFlUixLQUFLLENBQUNTLEVBQUUsRUFBRSxDQUFDO2NBRXpHLElBQUksQ0FBQ0osTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUssS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUcxQztjQUVBLE9BQU87Z0JBQUVM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