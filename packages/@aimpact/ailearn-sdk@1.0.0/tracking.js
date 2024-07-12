System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, Tracking, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Tracking: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_beyondJsReactive1112Entities) {
      dependency_2 = _beyondJsReactive1112Entities;
    }, function (_aimpactChatSdk101Core) {
      dependency_3 = _aimpactChatSdk101Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.57"]]);
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
        hash: 1370145270,
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
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'resources', 'chat', 'credits', 'assignmentId', 'data' // represents the tracking data
            ];
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
              await this.#tracking.set({
                credits: data.credits
              });
              //todo: this code must be removed when the reactive model is fixed
              await this.set({
                credits: data.credits
              });
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
                params.assignmentId = this.#assignmentId;
                params.activityId = this.id;
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2522689335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _provider = require("./provider");
          var _collection = require("./activity/collection");
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/
          class Tracking extends _entities.Item {
            properties = ['module', 'activities', 'credits', 'module', 'status', 'user'];
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
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
                throw new Error(`Error loading assignment: ${error}`);
              }
              this.#accessed = data.accessed;
              this.module = data.module;
              await this.set({
                credits: data.credits
              });
              await this.#activities.setData(data.activities);
              this.#order = data.activities.order;
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
            async access() {
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
              chat
            }) {
              if (this.#instances.has(assignmentId)) {
                return this.#instances.get(assignmentId);
              }
              const instance = new Tracking({
                assignmentId,
                chat
              });
              this.#instances.set(assignmentId, instance);
              return instance;
            }
          }
          exports.Tracking = Tracking;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 3164588001,
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
                data
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
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
        hash: 1578903371,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImFjdGl2aXR5SWQiLCJ0cmlnZ2VyIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb2xsZWN0aW9uIiwiVHJhY2tpbmciLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiYWNjZXNzZWQiLCJtb2R1bGUiLCJhY2Nlc3MiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5L2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdHkvaW5kZXgudHMiLCIvYWN0aXZpdHkvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxDQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gs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