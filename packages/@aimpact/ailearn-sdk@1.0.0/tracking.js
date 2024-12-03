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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.15"]]);
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
        hash: 2824682841,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInNwZWNzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3RhdHVzIiwiZXJyb3IiLCJhY3Rpdml0eSIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsInB1Ymxpc2hTcG9rZW4iLCJhY3Rpdml0eUlkIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIkNyZWRpdHMiLCJhcmdzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiZ2V0UHJvcGVydGllcyIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJhY2Nlc3NlZCIsImNvZGUiLCJmb3VuZCIsIm1vZHVsZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInVzZXJJZCIsInRyYWNraW5nSWQiLCJyZXF1ZXN0Q2xhc3Nyb29tQWNjZXNzIiwiY29uc29sZSIsInRvTG93ZXJDYXNlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0eS9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXR5L2luZGV4LnRzIiwiL2FjdGl2aXR5L3Byb3ZpZGVyLnRzIiwiL2NyZWRpdHMudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxDQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFB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Q0FBQzNCLEVBQUUsV0FBVyxFQUFFMkIsS0FBSyxDQUFDO2NBQ2hGLE1BQU07Z0JBQUVhLE1BQU07Z0JBQUVwQyxJQUFJO2dCQUFFcUM7Y0FBSyxDQUFFLEdBQUdZLFFBQVE7Y0FFeEMsSUFBSSxDQUFDYixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSyxLQUFLLENBQUMscUJBQXFCLENBQUM7O2NBR3ZDLElBQUlsQixLQUFLLEVBQUU2QyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQTlFLE1BQU8sQ0FBQytFLFdBQVcsQ0FBQ3JFLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFb0MsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVxQztjQUFLLENBQUU7WUFDL0IsQ0FBQztZQUVELE1BQU00RCxNQUFNQSxDQUFDMUUsS0FBQSxHQUF5QixFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBb0MsR0FBSSxDQUFDSyxNQUFNLENBQUNQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNbEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQmhELEtBQUssQ0FBQzNCLEVBQUUsU0FBUyxFQUFFMkIsS0FBSyxDQUFDO2NBQy9FLElBQUksQ0FBQzBCLFFBQVEsQ0FBQ2IsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlLLEtBQUssQ0FBQywrQkFBK0JRLFFBQVEsQ0FBQ1osS0FBSyxFQUFFLENBQUM7O2NBR2pFLE9BQU9ZLFFBQVEsQ0FBQ2pELElBQUk7WUFDckI7WUFDQXNELFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsSUFBSSxDQUFDLENBQUFLLEdBQUksQ0FBQ0ssTUFBTSxDQUFDUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsT0FBTyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDWSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBakYsTUFBTyxDQUFDb0IsWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQzs7VUFDREMsT0FBQSxDQUFBZ0YsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7O1VDdkREOztVQUVBbEIsTUFBQSxDQUFBOEIsY0FBQSxDQUFBNUYsT0FBQTtZQUNBNkYsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119