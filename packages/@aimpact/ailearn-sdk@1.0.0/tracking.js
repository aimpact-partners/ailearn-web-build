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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
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
        hash: 217326134,
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
        hash: 99748241,
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
            setCredits(data) {
              this.#credits.set(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5Iiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJ0cmlnZ2VyIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsImNvbnN1bWVDb2lucyIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJDcmVkaXRzIiwiYXJncyIsIl9jb2xsZWN0aW9uIiwiX2NyZWRpdHMiLCJUcmFja2luZyIsImdldFByb3BlcnRpZXMiLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiYWNjZXNzZWQiLCJjb2RlIiwiZm91bmQiLCJtb2R1bGUiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ1c2VySWQiLCJ0cmFja2luZ0lkIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0eS9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXR5L2luZGV4LnRzIiwiL2FjdGl2aXR5L3Byb3ZpZGVyLnRzIiwiL2NyZWRpdHMudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxDQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7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