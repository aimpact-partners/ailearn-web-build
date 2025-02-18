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
        hash: 502647187,
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
                parent: this,
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
        hash: 4145137092,
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
        hash: 3123391273,
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
                }, 'status', 'user', 'access', 'accessed', 'assignment', 'realtime', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJsb2FkQWN0aXZpdHkiLCJoYXMiLCJpbnN0YW5jZSIsIm1vZGVsSWQiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsIl9jb3JlIiwiX2l0ZW0iLCJfY3JlZGl0cyIsIkl0ZW0iLCJmZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYW5hbHlzaXMiLCJvYmplY3RpdmVzIiwicmVzb3VyY2VzIiwiY2hhdE1vZGVsIiwiZ2V0TWF0ZXJpYWxzIiwibWF0ZXJpYWxzIiwiZ2V0U3BlY3MiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQ3JlZGl0cyIsInN0YXJ0dXAiLCJvbiIsImdldFByb3BlcnR5IiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwibG9hZFRlc3RpbmdBY3Rpdml0eSIsImFjdGl2aXR5IiwiY3JlZGl0cyIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJkcmFmdElkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIk1hcCIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwiVHJhY2tpbmdQcm92aWRlciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsImNvZGUiLCJjb25zb2xlIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jcmVkaXRzLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXR5LnRzIiwiL3RyYWNraW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTSxNQUFPSSwwQkFBMEI7WUFDdEMsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUEMsWUFBWUQsTUFBa0I7Y0FDN0IsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJTixJQUFBLENBQUFTLEdBQUcsQ0FBQ1AsT0FBQSxDQUFBUSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ2IsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ2dCLEdBQUcsQ0FBQyxnQkFBZ0JQLEtBQUssQ0FBQ1EsWUFBWSxlQUFlUixLQUFLLENBQUNTLEVBQUUsRUFBRSxDQUFDO2NBRXpHLElBQUksQ0FBQ0osTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUssS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUcxQztjQUVBLE9BQU87Z0JBQUVM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