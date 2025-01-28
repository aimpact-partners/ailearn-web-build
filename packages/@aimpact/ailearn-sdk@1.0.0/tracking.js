System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Activity, Credits, Tracking, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
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
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
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
      __pkg.dependencies.update([['@aimpact/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/reactive/model', dependency_8]]);
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
        hash: 534348878,
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
              items = items.map(item => ({
                ...item,
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
        hash: 454376669,
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
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'specs', 'chat', {
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
                credits: data.credits
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
              try {
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
              } catch (e) {
                throw new Error('error publishing spoken activity');
              }
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
        hash: 2588589366,
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
              this.triggerEvent();
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
        hash: 1941684297,
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
          var _credits = require("./credits");
          var _provider = require("./provider");
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
                properties: ['id', 'module', 'status', 'user', 'access', 'accessed', 'assignment', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibWFwIiwic2V0SXRlbXMiLCJzZXRUcmFja2luZyIsImxvYWRBY3Rpdml0eSIsImhhcyIsImluc3RhbmNlIiwibW9kZWxJZCIsInRlc3RpbmciLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfaXRlbSIsIl9jcmVkaXRzIiwiSXRlbSIsImZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhbmFseXNpcyIsIm9iamVjdGl2ZXMiLCJyZXNvdXJjZXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJtYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDcmVkaXRzIiwic3RhcnR1cCIsIm9uIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJjcmVkaXRzIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwic2VsZWN0aW9uIiwiZSIsInB1Ymxpc2hTcG9rZW4iLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsImRyYWZ0SWQiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiYXJncyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiTWFwIiwiVHJhY2tpbmdQcm92aWRlciIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsImNvZGUiLCJjb25zb2xlIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3NlZCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2NyZWRpdHMudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvYWN0aXZpdHkudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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