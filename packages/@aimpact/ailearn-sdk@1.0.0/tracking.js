System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/media-manager@0.0.1-beta.1/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, Tracking, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.3-test.06"]]);
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
        hash: 3956832935,
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
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'resources', 'chat', 'credits', 'assignmentId', 'data', 'user'];
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1313806807,
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
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _entities.Item {
            properties = ['module', 'activities', 'credits', 'module', 'status', 'user', 'access', 'assignment'];
            #api;
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
              await this.set({
                credits: data.credits
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiXyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiZWxlbWVudHMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInRyYWNraW5nIiwibG9hZENoYXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsInNldERhdGEiLCJhY3Rpdml0aWVzIiwicHJvbWlzZXMiLCJvcmRlciIsImZvckVhY2giLCJpZCIsImhhcyIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJkYXRhIiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwibG9hZCIsImFzc2lnbm1lbnRJZCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwiYXNzZXNzbWVudCIsImNoYXRNb2RlbCIsImxvY2FsZGIiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiY2hhdCIsIkNoYXQiLCJsb2FkQWxsIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwicHVibGlzaFNwb2tlbiIsImFjdGl2aXR5SWQiLCJ0cmlnZ2VyIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb2xsZWN0aW9uIiwiVHJhY2tpbmciLCJpbnN0YW5jZXMiLCJUcmFja2luZ1Byb3ZpZGVyIiwiYWNjZXNzZWQiLCJjb2RlIiwiZm91bmQiLCJtb2R1bGUiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ1c2VySWQiLCJ0cmFja2luZ0lkIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0eS9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXR5L2luZGV4LnRzIiwiL2FjdGl2aXR5L3Byb3ZpZGVyLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2ludGVyZmFjZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsQ0FBQSxHQUFBRCxPQUFBO1VBR00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLFFBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDckIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLFFBQVMsQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDcEM7WUFFQSxDQUFBQyxRQUFTO1lBQ1Qs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