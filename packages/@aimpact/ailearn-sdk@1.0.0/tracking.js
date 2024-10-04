System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/media-manager@0.0.1-beta.1/uploader"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Entities) {
      dependency_2 = _beyondJsReactive120Entities;
    }, function (_aimpactChatSdk130Core) {
      dependency_3 = _aimpactChatSdk130Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactMediaManager001Beta1Uploader) {
      dependency_7 = _aimpactMediaManager001Beta1Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 1254790321,
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
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'resources', 'chat', 'credits', 'assignmentId', 'data', 'user'];
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
                console.error(e);
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
                console.error(e);
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
        hash: 3387378513,
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
              try {
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
              } catch (e) {
                console.error(e);
              }
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
        hash: 1449439076,
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
            properties = ['module', 'activities', 'module', 'status', 'user', 'access', 'assignment', 'credits'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5Iiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJhY3Rpdml0eUlkIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIkNyZWRpdHMiLCJhcmdzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiZ2V0UHJvcGVydGllcyIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJhY2Nlc3NlZCIsImNvZGUiLCJmb3VuZCIsIm1vZHVsZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5L2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdHkvaW5kZXgudHMiLCIvYWN0aXZpdHkvcHJvdmlkZXIudHMiLCIvY3JlZGl0cy50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLENBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEs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