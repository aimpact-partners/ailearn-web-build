System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/media-manager@0.0.1-beta.1/uploader"], function (_export, _context) {
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
    }, function (_aimpactChatSdk110Core) {
      dependency_3 = _aimpactChatSdk110Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_aimpactMediaManager001Beta1Uploader) {
      dependency_7 = _aimpactMediaManager001Beta1Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.10"]]);
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
        hash: 1150210147,
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
          }
          exports.Activities = Activities;
        }
      });

      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/

      ims.set('./activity/index', {
        hash: 1883736624,
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
        hash: 2157052092,
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
            properties = ['module', 'activities', 'module', 'status', 'user', 'access', 'assignment'];
            #api;
            #assignmentId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5Iiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJhY3Rpdml0eUlkIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIkNyZWRpdHMiLCJhcmdzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIlRyYWNraW5nIiwiZ2V0UHJvcGVydGllcyIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJhY2Nlc3NlZCIsImNvZGUiLCJmb3VuZCIsIm1vZHVsZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwidG9Mb3dlckNhc2UiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5L2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdHkvaW5kZXgudHMiLCIvYWN0aXZpdHkvcHJvdmlkZXIudHMiLCIvY3JlZGl0cy50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLENBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0Es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