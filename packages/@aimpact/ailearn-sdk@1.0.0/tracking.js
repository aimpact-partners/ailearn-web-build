System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.39/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0039Config) {
      dependency_5 = _aimpactAilearnApp0039Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.39"]]);
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
        hash: 2648146248,
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
        hash: 938851545,
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
              console.log(1, this.#assignmentId, this.assignmentId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImFjdGl2aXR5SWQiLCJ0cmlnZ2VyIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb2xsZWN0aW9uIiwiVHJhY2tpbmciLCJUcmFja2luZ1Byb3ZpZGVyIiwiYWNjZXNzZWQiLCJtb2R1bGUiLCJhY2Nlc3MiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5L2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdHkvaW5kZXgudHMiLCIvYWN0aXZpdHkvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxDQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJ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