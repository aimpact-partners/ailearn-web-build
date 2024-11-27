System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, Credits, Tracking, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Credits: void 0,
    Tracking: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_beyondJsReactive1112Entities) {
      dependency_2 = _beyondJsReactive1112Entities;
    }, function (_aimpactChatSdk130Core) {
      dependency_3 = _aimpactChatSdk130Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/media-manager/uploader', dependency_7]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./activity/collection
      *************************************/
      ims.set('./activity/collection', {
        hash: 637317288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _ = require("./");
          class Activities extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            get items() {
              return [...this.#elements.values()];
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            constructor(parent, loadChat) {
              super();
              this.#tracking = parent;
              this.#loadChat = loadChat;
            }
            async setData(activities) {
              const promises = [];
              activities.order.forEach(id => {
                if (this.#elements.has(id)) return;
                let instance = new _.Activity({
                  id,
                  tracking: this.tracking,
                  loadChat: this.loadChat,
                  data: activities.items[id]
                });
                this.#elements.set(id, instance);
                promises.push(instance.isReady);
              });
              await Promise.all(promises);
              const instancePromises = [];
              activities.order.forEach((id, index) => {
                const instance = this.#elements.get(id);
                instance.set(activities.items[id]);
                this.#elements.set(id, instance);
              });
              return Promise.all(instancePromises);
            }
            async load({
              id
            }) {
              if (this.elements.has(id)) return this.#elements.get(id);
              const instance = new _.Activity({
                id,
                assignmentId: this.tracking.assignmentId,
                tracking: this.tracking
              });
              await instance.isReady;
              await instance.load();
              return instance;
            }
            has(id) {
              return this.#elements.has(id);
            }
            get(id) {
              return this.#elements.get(id);
            }
          }
          exports.Activities = Activities;
        }
      });

      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/

      ims.set('./activity/index', {
        hash: 830191939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/chat-sdk/core");
          /*bundle*/
          class Activity extends _entities.Item {
            /**
             * TODO: Add activity properties
             */
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'chat', 'credits', 'assignmentId', 'data', 'user', 'data'];
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
              return this.resources?.materials;
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
            #loadChat;
            constructor({
              id,
              assignmentId,
              data,
              tracking,
              loadChat
            } = {}) {
              super({
                id,
                localdb: false,
                //@ts-igonore
                provider: _provider.ActivityProvider
              });
              this.#loadChat = loadChat;
              this.startup(assignmentId, data);
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => this.trigger('credits.change'));
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
              if (this.#loadChat && data.chat) {
                this.loadChat(data.chat);
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
            async load(specs = {}) {
              await this.isReady;
              if (!specs.id) specs.id = this.id;
              specs.assignmentId = this.#assignmentId;
              const {
                status,
                error,
                data
              } = await super.load(specs);
              console.log(99, data, data.activity.attempts);
              await this.set(data.activity);
              await this.#tracking.setCredits(data.credits);
              this.#tracking.trigger('credits.change');
              //todo: this code must be removed when the reactive model is fixed
              if (!status) {
                throw new Error(`Error loading assignment: ${error}`);
              }
              this.#process();
              return data;
            }
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
            async set(data) {
              await super.set(data);
              this.#process();
              this.trigger('change');
            }
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
        hash: 1568270711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
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
              return {
                status,
                data
              };
            };
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
        hash: 2132163029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(...args) {
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
        hash: 1420879055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _provider = require("./provider");
          var _collection = require("./activity/collection");
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _credits = require("./credits");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _entities.Item {
            properties = ['id', 'module', 'activities', 'module', 'status', 'user', 'access', 'assignment', 'credits'];
            #api;
            #assignmentId;
            modelType = 'tracking';
            get assignmentId() {
              return this.#assignmentId;
            }
            #credits;
            get credits() {
              return this.#credits.getProperties();
            }
            set credits(data) {
              this.#credits.set(data);
            }
            static #instances = new Map();
            #loadChat;
            constructor({
              assignmentId,
              chat
            }) {
              super({
                id: assignmentId,
                localdb: false,
                provider: _provider.TrackingProvider
              });
              this.#credits = new _credits.Credits();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#loadChat = !!chat;
              this.#assignmentId = assignmentId;
              this.#activities = new _collection.Activities(this, true);
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #order;
            get order() {
              return this.#order;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(items) {
              this.#activities.setData(items);
            }
            async load(specs = {}) {
              await this.isReady;
              if (!specs.id) specs.id = this.id;
              const response = await super.load(specs);
              const {
                status,
                error,
                data
              } = response;
              if (!status) {
                if (error?.code === 404) {
                  this.found = false;
                }
                throw new Error('404');
              }
              this.#accessed = data.accessed;
              this.module = data.module;
              if (data.activities) {
                await this.#activities.setData(data.activities);
                this.#order = data.activities.order;
              }
              // this.#activities = data.activities;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              await this.#credits.set(response.data.credits);
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            async accessToAssignment() {
              const specs = {
                id: this.#assignmentId
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities.setData(data.activities);
              return this.#accessed;
            }
            static get({
              assignmentId,
              userId,
              chat
            }) {
              const trackingId = `${assignmentId}.${userId}`;
              if (this.#instances.has(trackingId)) {
                return this.#instances.get(trackingId);
              }
              const instance = new Tracking({
                assignmentId,
                chat
              });
              this.#instances.set(trackingId, instance);
              return instance;
            }
            async setCredits(data) {
              await this.#credits.set(data);
              this.trigger('credits.change');
            }
            async requestClassroomAccess() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.assignmentId}/classroom/request`, {});
              if (!response.status && response.error?.code === 38) {
                console.error(response.error);
                return response;
              }
              if (response.data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.assignmentId
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
        hash: 1561941773,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
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
              return {
                status,
                data,
                error
              };
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
          }
          exports.TrackingProvider = TrackingProvider;
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/interfaces
      **********************************/

      ims.set('./types/interfaces', {
        hash: 1162130268,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInNwZWNzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZpdHkiLCJhdHRlbXB0cyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsInB1Ymxpc2hTcG9rZW4iLCJhY3Rpdml0eUlkIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIkNyZWRpdHMiLCJhcmdzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiZ2V0UHJvcGVydGllcyIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJhY2Nlc3NlZCIsImNvZGUiLCJmb3VuZCIsIm1vZHVsZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5L2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdHkvaW5kZXgudHMiLCIvYWN0aXZpdHkvcHJvdmlkZXIudHMiLCIvY3JlZGl0cy50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLENBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElB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LENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVUsR0FBSSxDQUFDdEQsR0FBRyxDQUFDLGdCQUFnQmUsS0FBSyxDQUFDM0IsRUFBRSxXQUFXLEVBQUUyQixLQUFLLENBQUM7Y0FDaEYsTUFBTTtnQkFBRWEsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVxQztjQUFLLENBQUUsR0FBR2UsUUFBUTtjQUV4QyxJQUFJLENBQUNoQixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJUSxLQUFLLENBQUMscUJBQXFCLENBQUM7O2NBR3ZDLElBQUlyQixLQUFLLEVBQUVnRCxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQWpGLE1BQU8sQ0FBQ2tGLFdBQVcsQ0FBQ3hFLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFb0MsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVxQztjQUFLLENBQUU7WUFDL0IsQ0FBQztZQUVELE1BQU0rRCxNQUFNQSxDQUFDN0UsS0FBQSxHQUF5QixFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBdUMsR0FBSSxDQUFDSyxNQUFNLENBQUNQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNbEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQm5ELEtBQUssQ0FBQzNCLEVBQUUsU0FBUyxFQUFFMkIsS0FBSyxDQUFDO2NBQy9FLElBQUksQ0FBQzZCLFFBQVEsQ0FBQ2hCLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJUSxLQUFLLENBQUMsK0JBQStCUSxRQUFRLENBQUNmLEtBQUssRUFBRSxDQUFDOztjQUdqRSxPQUFPZSxRQUFRLENBQUNwRCxJQUFJO1lBQ3JCO1lBQ0F5RCxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLElBQUksQ0FBQyxDQUFBSyxHQUFJLENBQUNLLE1BQU0sQ0FBQ1AsUUFBQSxDQUFBUSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE9BQU8sSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQXBGLE1BQU8sQ0FBQ29CLFlBQVksZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3JGLENBQUM7O1VBQ0RDLE9BQUEsQ0FBQW1GLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7OztVQ3ZERDs7VUFFQWxCLE1BQUEsQ0FBQTZCLGNBQUEsQ0FBQTlGLE9BQUE7WUFDQStGLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==