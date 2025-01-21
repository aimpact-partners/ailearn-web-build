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
      /**********************************************
      INTERNAL MODULE: ./activity/collection-provider
      **********************************************/
      ims.set('./activity/collection-provider', {
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

      /*************************************
      INTERNAL MODULE: ./activity/collection
      *************************************/

      ims.set('./activity/collection', {
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

      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/

      ims.set('./activity/index', {
        hash: 254539830,
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
            get materials() {
              return this.resources?.materials ?? {};
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
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'chat', {
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
                tracking,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
              this.startup(assignmentId, data);
            }
            setTracking(tracking) {
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => {
                this.#tracking.credits.set(this.credits.getProperties());
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

      /***********************************
      INTERNAL MODULE: ./activity/provider
      ***********************************/

      ims.set('./activity/provider', {
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
        hash: 726639871,
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
          var _collection = require("./activity/collection");
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
        "im": "./activity/index",
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
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activity/index').Activity : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibWFwIiwic2V0SXRlbXMiLCJzZXRUcmFja2luZyIsImxvYWRBY3Rpdml0eSIsImhhcyIsImluc3RhbmNlIiwibW9kZWxJZCIsInRlc3RpbmciLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfaXRlbSIsIl9jcmVkaXRzIiwiSXRlbSIsImZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsIm9iamVjdGl2ZXMiLCJjaGF0TW9kZWwiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQ3JlZGl0cyIsInN0YXJ0dXAiLCJvbiIsImNyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImFjdGl2aXR5SWQiLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwiZHJhZnRJZCIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJhcmdzIiwiVHJhY2tpbmciLCJtb2RlbFR5cGUiLCJpbnN0YW5jZXMiLCJNYXAiLCJUcmFja2luZ1Byb3ZpZGVyIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiYWN0aXZpdGllcyIsInJlYWR5IiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwiYWNjZXNzIiwidXNlcklkIiwidHJhY2tpbmdJZCIsInNldENyZWRpdHMiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiY29kZSIsImNvbnNvbGUiLCJ0b0xvd2VyQ2FzZSIsImFjY2Vzc2VkIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYWN0aXZpdHkvY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9hY3Rpdml0eS9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXR5L2luZGV4LnRzIiwiL2FjdGl2aXR5L3Byb3ZpZGVyLnRzIiwiL2NyZWRpdHMudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvYWN0aXZpdHkudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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