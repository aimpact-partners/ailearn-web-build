System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.36/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_aimpactChatSdk100Core) {
      dependency_3 = _aimpactChatSdk100Core;
    }, function (_aimpactHttpSuite103Api) {
      dependency_4 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0036Config) {
      dependency_5 = _aimpactAilearnApp0036Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.36"]]);
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
        hash: 3406086735,
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
        hash: 1567553968,
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
        hash: 2683095787,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsInRyaWdnZXIiLCJjb25zdW1lQ29pbnMiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiYXBpIiwiQXBpIiwiZGVmYXVsdCIsImFwaXMiLCJhaWxlYXJuIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwiX2NvbGxlY3Rpb24iLCJUcmFja2luZyIsIlRyYWNraW5nUHJvdmlkZXIiLCJhY2Nlc3NlZCIsIm1vZHVsZSIsImFjY2VzcyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvYWN0aXZpdHkvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0eS9pbmRleC50cyIsIi9hY3Rpdml0eS9wcm92aWRlci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLENBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFT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