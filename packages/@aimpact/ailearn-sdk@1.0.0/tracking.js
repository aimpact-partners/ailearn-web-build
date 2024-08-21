System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/media-manager@0.0.1-beta.1/uploader"], function (_export, _context) {
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
    }, function (_aimpactChatSdk101Core) {
      dependency_3 = _aimpactChatSdk101Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_aimpactMediaManager001Beta1Uploader) {
      dependency_7 = _aimpactMediaManager001Beta1Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
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
        hash: 573638042,
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
            consumeCoins() {
              return this.#tracking.consumeCoins();
            }
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
        hash: 3442733273,
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
            async consumeCoins() {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            }
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
        hash: 3307508261,
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
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
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