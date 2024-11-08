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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.1"]]);
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
        hash: 1330898643,
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
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'chat', 'credits', 'assignmentId', 'data', 'user'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInNwZWNzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3RhdHVzIiwiZXJyb3IiLCJhY3Rpdml0eSIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiYWN0aXZpdHlJZCIsImNvbnN1bWVDb2lucyIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJDcmVkaXRzIiwiYXJncyIsIl9jb2xsZWN0aW9uIiwiX2NyZWRpdHMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImdldFByb3BlcnRpZXMiLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiYWNjZXNzZWQiLCJjb2RlIiwiZm91bmQiLCJtb2R1bGUiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ1c2VySWQiLCJ0cmFja2luZ0lkIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0eS9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXR5L2luZGV4LnRzIiwiL2FjdGl2aXR5L3Byb3ZpZGVyLnRzIiwiL2NyZWRpdHMudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxDQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFB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QUFNbkIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFXLEdBQUksQ0FBQ3BELEdBQUcsQ0FBQyxnQkFBZ0JlLEtBQUssQ0FBQzNCLEVBQUUsV0FBVyxFQUFFMkIsS0FBSyxDQUFDO2NBQ2hGLE1BQU07Z0JBQUVhLE1BQU07Z0JBQUVwQyxJQUFJO2dCQUFFcUM7Y0FBSyxDQUFFLEdBQUdZLFFBQVE7Y0FFeEMsSUFBSSxDQUFDYixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSyxLQUFLLENBQUMscUJBQXFCLENBQUM7O2NBR3ZDLElBQUlsQixLQUFLLEVBQUU4QyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQS9FLE1BQU8sQ0FBQ2dGLFdBQVcsQ0FBQ3RFLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFb0MsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVxQztjQUFLLENBQUU7WUFDL0IsQ0FBQztZQUVELE1BQU02RCxNQUFNQSxDQUFDM0UsS0FBQSxHQUF5QixFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDSyxNQUFNLENBQUNQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNbkIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFXLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQmpELEtBQUssQ0FBQzNCLEVBQUUsU0FBUyxFQUFFMkIsS0FBSyxDQUFDO2NBQy9FLElBQUksQ0FBQzBCLFFBQVEsQ0FBQ2IsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlLLEtBQUssQ0FBQywrQkFBK0JRLFFBQVEsQ0FBQ1osS0FBSyxFQUFFLENBQUM7O2NBR2pFLE9BQU9ZLFFBQVEsQ0FBQ2pELElBQUk7WUFDckI7WUFDQXVELFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsSUFBSSxDQUFDLENBQUFLLEdBQUksQ0FBQ0ssTUFBTSxDQUFDUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsT0FBTyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDWSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBbEYsTUFBTyxDQUFDb0IsWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQzs7VUFDREMsT0FBQSxDQUFBaUYsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7O1VDdkREOztVQUVBbEIsTUFBQSxDQUFBNkIsY0FBQSxDQUFBNUYsT0FBQTtZQUNBNkYsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119