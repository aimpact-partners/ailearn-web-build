System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/chat-sdk@1.4.1/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    GClass: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    RoleType: void 0,
    IPeopleData: void 0,
    IInviteData: void 0,
    IAILearnUserData: void 0,
    Metadata: void 0,
    CreditsData: void 0,
    Credits: void 0,
    StudentsHome: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_2 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactChatSdk141Core) {
      dependency_3 = _aimpactChatSdk141Core;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_9 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactChatSdk141Users) {
      dependency_10 = _aimpactChatSdk141Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@aimpact/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@aimpact/chat-sdk/users', dependency_10]]);
      ims = new Map();
      /***************************************************
      INTERNAL MODULE: ./assignments/activities/collection
      ***************************************************/
      ims.set('./assignments/activities/collection', {
        hash: 4110040743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@aimpact/reactive/model");
          var _item = require("./item");
          class Activities extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            get items() {
              return [...this.#elements.values()];
            }
            async setData(activities) {
              activities.order.forEach(id => {
                if (this.#elements.has(id)) return;
                let instance = new _item.AssignmentActivity({
                  id
                });
                this.#elements.set(id, instance);
              });
              const instancePromises = [];
              activities.order.forEach((id, index) => {
                const instance = this.#elements.get(id);
                instance.set(activities.items[id]);
                this.#elements.set(id, instance);
              });
              return Promise.all(instancePromises);
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./assignments/activities/item
      *********************************************/

      ims.set('./assignments/activities/item', {
        hash: 4090438448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _item = require("@aimpact/reactive/entities/item");
          var _item2 = require("../item");
          /*bundle*/
          class AssignmentActivity extends _item.Item {
            #assignmentId;
            #user;
            get user() {
              return this.#user;
            }
            #module;
            get module() {
              return this.#module;
            }
            get assignmentId() {
              return this.#assignmentId;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            materials() {
              return this.resources?.materials;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #assigment;
            get assignment() {
              return this.#assigment;
            }
            constructor({
              id,
              assignmentId,
              data
            } = {}) {
              super({
                id,
                entity: 'Activities',
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'resources', 'chat', 'credits', 'data' // represents the tracking data
                ],
                //@ts-igonore
                provider: _provider.ActivityProvider
              });
              this.startup(assignmentId, data);
              globalThis.model = this;
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.id;
              specs.assignmentId = this.#assignmentId;
              this.#assigment = await _item2.Assignment.get({
                id: this.#assignmentId
              });
              await this.#assigment.load();
              this.#assigment.on('credits.change', () => this.trigger('credits.change', 'add'));
              const {
                status,
                data
              } = await super.load(specs);
              await this.set(data.activity);
              //todo: this code must be removed when the reactive model is fixed
              await this.set({
                credits: data.credits
              });
              this.#user = data.user;
              this.#module = data.module;
              if (!status) {
                throw new Error(`Error loading assignment:`);
              }
              this.#process();
              return data;
            }
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.data) {
                this.#tracking = this.data;
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
            async consumeCoins() {
              return this.#tracking.consumeCoins();
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 4119834748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
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

      /****************************************
      INTERNAL MODULE: ./assignments/assessment
      ****************************************/

      ims.set('./assignments/assessment', {
        hash: 657405006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@aimpact/chat-sdk/core");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class Assessment extends _model.ReactiveModel {
            #api;
            #parent;
            #id;
            get id() {
              return this.#id;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #analysis = [];
            get analysis() {
              return this.#analysis;
            }
            #selection;
            get selection() {
              return this.#selection;
            }
            #interaction;
            get interaction() {
              return this.#interaction;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            #assignmentId;
            #chatLoaded;
            constructor({
              assignmentId
            }) {
              super();
              this.#assignmentId = assignmentId;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            load = async (id, userId) => {
              try {
                const {
                  status,
                  data
                } = await this.#api.bearer(_session.sessionWrapper.user.token).get(`/assessments/${this.#assignmentId}.${id}/report`, {
                  userId
                });
                if (!status) throw new Error('error loading assessment');
                this.#analysis = data.analysis ?? [];
                this.#feedback = data.feedback;
                this.#selection = data.selection;
                this.#competenciesFeedback = data.competenciesFeedback;
                this.#interaction = data.interaction;
                this.loadInteraction();
                this.loaded = true;
              } catch (e) {
                console.error(e);
              }
            };
            async loadInteraction() {
              if (this.#chatLoaded) return this.#chatLoaded;
              this.#chatLoaded = new _core2.PendingPromise();
              const chat = new _core.Chat({
                id: this.#interaction.chat.id
              });
              await chat.loadAll();
              this.#chat = chat;
              this.#chatLoaded.resolve();
              this.triggerEvent('chat.loaded');
            }
            publish = async specs => {
              try {
                const props = Object.getOwnPropertyNames(specs);
                const form = new FormData();
                props.forEach(prop => {
                  form.append(prop, specs[prop]);
                });
                form.append('assignmentId', this.#assignmentId);
                const xhr = new _uploader.XHRLoader();
                xhr.bearer(_session.sessionWrapper.user.token);
                const response = await xhr.upload(form, `${_config.default.params.apis.ailearn}/assessments/spoken`);
                const json = await response.json();
                if (!json.status) {
                  throw new Error('error publishing assessment');
                }
                this.#analysis = json.data.analysis;
                this.#feedback = json.data.feedback;
                this.#competenciesFeedback = json.data.competenciesFeedback;
                this.triggerEvent();
                return json.data;
              } catch (e) {
                console.error(e);
              }
            };
            saveSelection = async specs => {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/assessments/selection', {
                  ...specs,
                  assignmentId: this.#assignmentId
                });
                if (!response.status) throw new Error('error saving selection');
                this.#selection = response.data.selection;
                this.trigger('change');
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.Assessment = Assessment;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./assignments/dashboard/dasboard-wall
      *****************************************************/

      ims.set('./assignments/dashboard/dasboard-wall', {
        hash: 2458656799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class DashboardWall extends _model.ReactiveModel {
            #api;
            properties = ['id', 'messages'];
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async load(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                error,
                data
              } = await this.#api.get(`/assignments/${specs.id}/wall`);
              if (!status) {
                throw new Error(`Error loading session: ${error}`);
              }
              return data;
            }
          }
          exports.DashboardWall = DashboardWall;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./assignments/dashboard/index
      *********************************************/

      ims.set('./assignments/dashboard/index', {
        hash: 1776160769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          class Dashboard extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./assignments/interfaces/IEvaluation
      ****************************************************/

      ims.set('./assignments/interfaces/IEvaluation', {
        hash: 2105227437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./assignments/interfaces/assignment
      ***************************************************/

      ims.set('./assignments/interfaces/assignment', {
        hash: 2029198843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 4179102236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _item = require("@aimpact/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class Assignment extends _item.Item {
            static instances = new Map();
            #order;
            get order() {
              return this.#order;
            }
            #assessment;
            get url() {
              return `${_config.default.params.baseUrl}/assignments/access/${this.id}`;
            }
            #module;
            get module() {
              return this.#module;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            constructor({
              id = undefined,
              data
            } = {
              data: {}
            }) {
              super({
                id,
                entity: 'Assignments',
                properties: ['id', 'lesson', 'classRoomId', 'users'],
                provider: _provider.AssignmentProvider
              });
            }
            setModule(parent) {
              this.#module = parent;
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.id;
              const response = await super.load(specs);
              const {
                status,
                data
              } = response;
              if (!status) {
                throw new Error(`Error loading assignment:`);
              }
              this.#accessed = data.accessed;
              this.#module = data.module;
              this.#activities = new Activities();
              await this.#activities.setData(data.activities);
              this.#order = data.activities.order;
              // this.#activities = data.activities;
              return data;
            };
            async access() {
              const specs = {
                id: this.id
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities.setData(data.activities);
              return this.#accessed;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const model = new Assignment(specs);
              if (specs.id) {
                await model.load();
              }
              this.instances.set(specs.id, model);
              return model;
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /**************************************
      INTERNAL MODULE: ./assignments/provider
      **************************************/

      ims.set('./assignments/provider', {
        hash: 1786591630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          class AssignmentProvider {
            #api;
            #parent;
            constructor(parent) {
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
              // if (specs?.progress) await this.#parent.processLoad(data);
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
          }
          exports.AssignmentProvider = AssignmentProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/

      ims.set('./gclasess/item', {
        hash: 972393318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          /*bundle*/
          class GClass extends _item.Item {
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'GClasses',
                properties: ['id', 'session']
              });
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error(`Error loading session: `);
              }
              return data;
            }
          }
          exports.GClass = GClass;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 3212118082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class OrganizationProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/organizations`);
              return {
                status,
                data
              };
            };
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/organizations/${specs.id}`);
              return response;
            };
            async delete() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const data = await this.#api.delete(`/organizations/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post('/organizations', specs);
              return res;
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/organizations/${this.#parent.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post('/organizations/join', specs);
              if (!res.status) {
                if (res.error.code === 42 || res.error.code === 41) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 44) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/organizations/${this.#parent.id}/approve`, specs);
                if (!res.status) {
                  throw new Error('Error approving someone in the organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async reject(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                //const res = await this.#api.post(`/organizations/${this.#parent.id}/reject`, specs);
                // if (!res.status) {
                // 	throw new Error('Error rejecting someone in the organization');
                // }
                // return res;
                return specs;
              } catch (e) {
                console.error(e);
              }
            }
            async freeTrial(data = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/organizations/${this.#parent.id}/free-trial`, data);
            }
          }
          exports.OrganizationProvider = OrganizationProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/interfaces/coins
      ****************************************/

      ims.set('./users/interfaces/coins', {
        hash: 1796557223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./users/interfaces/common/coins
      ***********************************************/

      ims.set('./users/interfaces/common/coins', {
        hash: 2316480134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./users/interfaces/common/people
      ************************************************/

      ims.set('./users/interfaces/common/people', {
        hash: 2362724122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./users/interfaces/user
      ***************************************/

      ims.set('./users/interfaces/user', {
        hash: 2483430249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./users/metadata
      ********************************/

      ims.set('./users/metadata', {
        hash: 1265898644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Metadata = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          /*bundle*/
          class Metadata extends _model.ReactiveModel {
            properties = ['freeTrial', 'requests', 'notify'];
            #api;
            #schools = new Map();
            #logged = false;
            constructor(specs) {
              super({
                ...specs
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            set(data) {}
          }
          exports.Metadata = Metadata;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./users/organizations/credit-data
      *************************************************/

      ims.set('./users/organizations/credit-data', {
        hash: 2619218225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsData = void 0;
          var _model = require("@aimpact/reactive/model");
          /*bundle*/
          class CreditsData extends _model.ReactiveModel {
            constructor(...args) {
              super({
                properties: ['credits', 'count'],
                ...args
              });
            }
          }
          exports.CreditsData = CreditsData;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./users/organizations/credits
      *********************************************/

      ims.set('./users/organizations/credits', {
        hash: 2239029497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@aimpact/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                properties: ['suscription', 'modules', 'assignments'],
                ...args
              });
              const defaultValue = {
                consumed: 0,
                count: 0
              };
              if (!this.suscription) this.suscription = {
                assignments: 0,
                renewal: 0,
                modules: 0
              };
              if (!this.modules) this.modules = defaultValue;
              if (!this.assignments) this.assignments = defaultValue;
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./users/organizations/index
      *******************************************/

      ims.set('./users/organizations/index', {
        hash: 2443278442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _item = require("./item");
          class Organizations extends _model.ReactiveModel {
            #api;
            #elements = new Map();
            get items() {
              return [...this.#elements.values()];
            }
            constructor({
              data
            }) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              if (data) {
                data.forEach(element => {
                  this.#elements.set(element.id, new _item.Organization(element));
                });
              }
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /******************************************
      INTERNAL MODULE: ./users/organizations/item
      ******************************************/

      ims.set('./users/organizations/item', {
        hash: 647861700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _credits = require("./credits");
          class Organization extends _model.ReactiveModel {
            #api;
            entity = 'organization';
            #credits;
            get credits() {
              return this.#credits;
            }
            get coins() {
              return this.#credits;
            }
            constructor(args) {
              super({
                properties: ['id', 'name', 'entities'],
                ...args
              });
              this.#credits = new _credits.Credits();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async getCredits() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/organizations/${this.id}/coins`);
              if (!response.status) {
                throw new Error(response.error);
              }
              await this.#credits.set(response.data);
              return this.#credits;
            }
          }
          exports.Organization = Organization;
        }
      });

      /*************************************
      INTERNAL MODULE: ./users/students/item
      *************************************/

      ims.set('./users/students/item', {
        hash: 2301497509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHome = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class StudentsHome extends _item.Item {
            #assignments;
            #student;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'StudentsHome',
                properties: ['assignments', 'student'],
                provider: _provider.StudentsHomeProvider
              });
            }
            async load() {
              //@ts-ignore
              const {
                status,
                error,
                data
              } = await super.load();
              if (!status) {
                throw new Error(`Error loading assignment: ${error}`);
              }
              this.#assignments = data.assignments;
              this.#student = data.student;
              return data;
            }
          }
          exports.StudentsHome = StudentsHome;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./users/students/provider
      *****************************************/

      ims.set('./users/students/provider', {
        hash: 148291954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class StudentsHomeProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            load = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                error,
                data
              } = await this.#api.get(`/students/home`);
              /**
               * The student does not have assignment records, return an empty list
               */
              if (!status) {
                return {
                  status: true,
                  data: {
                    assignments: [],
                    student: {
                      id: _session.sessionWrapper.user.id,
                      name: _session.sessionWrapper.user.displayName
                    }
                  }
                };
              }
              return {
                status,
                data
              };
            };
          }
          exports.StudentsHomeProvider = StudentsHomeProvider;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 550659391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _organizations = require("./organizations");
          var _credits = require("./organizations/credits");
          /*bundle*/
          class User extends _users.User {
            #api;
            #organizations;
            #logged = false;
            get logged() {
              return this.#logged;
            }
            get schools() {
              return {
                // items: [...this.#organizations.values()]
              };
            }
            #data;
            get underage() {
              return this.age < 18;
            }
            get termsAccepted() {
              return this.terms?.accepted;
            }
            #hasAccess = false;
            get data() {
              return this.#data;
            }
            get organizations() {
              return this.#organizations ?? [];
            }
            get accessibilityMode() {
              return !!globalThis.localStorage.getItem('aimpact.accessibility.mode');
            }
            #coins;
            get coins() {
              return this.#coins;
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            constructor(specs) {
              super({
                ...specs,
                entity: 'User',
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', 'token', 'roles']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#coins = new _credits.Credits();
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load({
              debug = false
            } = {}) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const specs = {};
                if (debug) specs.debug = true;
                const response = await this.#api.get('/users/me', specs);
                if (response.error && response.error?.code === 503) {
                  this.#outdated = true;
                  return response;
                }
                this.#outdated = false;
                this.#data = response.data;
                if (this.#data.coins) {
                  this.#coins = new _credits.Credits(this.#data.coins);
                  await this.#coins.set(this.#data.coins);
                }
                if (this.#data.teacher) {
                  this.#organizations = new _organizations.Organizations({
                    data: this.#data.teacher.orgs
                  });
                }
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                this.trigger('user.loaded');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async login(firebaseToken) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/login', {
                  firebaseToken,
                  ...this.getProperties()
                });
                if (!response.status) throw new Error('Error fetching user data');
                const answer = this.set(response.data);
                if (this.token) {
                  await this.load();
                }
                this.#data = response.data;
                this.#logged = true;
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.fetching = false;
              }
            }
            async acceptTerms(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/terms', {
                  birthdate
                });
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                return true;
              } catch (e) {
                throw new Error('ERROR_ACCEPTING_TERMS');
              } finally {
                this.fetching = false;
              }
            }
            async validate(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/validate', {
                  birthdate
                });
                if (!response.status) throw new Error('Error fetching terms');
                this.#data = response.data;
                await this.set(response.data);
                return response.data.age >= 18;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async getAccess(code) {
              try {
                if (this.#hasAccess) return true;
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.get(`/codes/${code}`);
                if (!response.status) throw new Error('Error fetching terms');
                if (response.data.valid) {
                  globalThis.localStorage.setItem('rvd.access.code', code);
                  this.#hasAccess = true;
                }
                return response.data.valid;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async freeTrial(data) {
              this.#api.bearer(this.token);
              const response = await this.#api.post(`/users/free-trial`, data);
              await this.load();
              return response;
            }
            hasAccess = () => {
              const code = globalThis.localStorage.getItem('rvd.access.code');
              if (!code) return false;
              return this.getAccess(code);
            };
            async getHome() {
              if (this.#hasAccess) return true;
              this.fetching = true;
              this.#api.bearer(this.token);
              return await this.#api.get(`/users/home`);
            }
            async getOrganizationCredits(id) {
              this.#api.bearer(this.token);
              return await this.#api.get(`/organizations/${id}/coins`);
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./assignments/activities/item",
        "from": "AssignmentActivity",
        "name": "AssignmentActivity"
      }, {
        "im": "./assignments/assessment",
        "from": "Assessment",
        "name": "Assessment"
      }, {
        "im": "./assignments/dashboard/dasboard-wall",
        "from": "DashboardWall",
        "name": "DashboardWall"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./gclasess/item",
        "from": "GClass",
        "name": "GClass"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinsCreditData",
        "name": "ICoinsCreditData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinModuleConsumptionData",
        "name": "ICoinModuleConsumptionData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinAssignmentConsumptionData",
        "name": "ICoinAssignmentConsumptionData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "RoleType",
        "name": "RoleType"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "IPeopleData",
        "name": "IPeopleData"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "IInviteData",
        "name": "IInviteData"
      }, {
        "im": "./users/interfaces/user",
        "from": "IAILearnUserData",
        "name": "IAILearnUserData"
      }, {
        "im": "./users/metadata",
        "from": "Metadata",
        "name": "Metadata"
      }, {
        "im": "./users/organizations/credit-data",
        "from": "CreditsData",
        "name": "CreditsData"
      }, {
        "im": "./users/organizations/credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./users/students/item",
        "from": "StudentsHome",
        "name": "StudentsHome"
      }, {
        "im": "./users/user",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AssignmentActivity') && _export("AssignmentActivity", AssignmentActivity = require ? require('./assignments/activities/item').AssignmentActivity : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./assignments/assessment').Assessment : value);
        (require || prop === 'DashboardWall') && _export("DashboardWall", DashboardWall = require ? require('./assignments/dashboard/dasboard-wall').DashboardWall : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./users/interfaces/common/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./users/interfaces/common/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./users/interfaces/common/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./users/interfaces/common/coins').ICreditsConsumptionsData : value);
        (require || prop === 'RoleType') && _export("RoleType", RoleType = require ? require('./users/interfaces/common/people').RoleType : value);
        (require || prop === 'IPeopleData') && _export("IPeopleData", IPeopleData = require ? require('./users/interfaces/common/people').IPeopleData : value);
        (require || prop === 'IInviteData') && _export("IInviteData", IInviteData = require ? require('./users/interfaces/common/people').IInviteData : value);
        (require || prop === 'IAILearnUserData') && _export("IAILearnUserData", IAILearnUserData = require ? require('./users/interfaces/user').IAILearnUserData : value);
        (require || prop === 'Metadata') && _export("Metadata", Metadata = require ? require('./users/metadata').Metadata : value);
        (require || prop === 'CreditsData') && _export("CreditsData", CreditsData = require ? require('./users/organizations/credit-data').CreditsData : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./users/organizations/credits').Credits : value);
        (require || prop === 'StudentsHome') && _export("StudentsHome", StudentsHome = require ? require('./users/students/item').StudentsHome : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/user').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwidXJsIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJNZXRhZGF0YSIsInNjaG9vbHMiLCJsb2dnZWQiLCJDcmVkaXRzRGF0YSIsImFyZ3MiLCJDcmVkaXRzIiwiZGVmYXVsdFZhbHVlIiwiY29uc3VtZWQiLCJjb3VudCIsInN1c2NyaXB0aW9uIiwiYXNzaWdubWVudHMiLCJyZW5ld2FsIiwibW9kdWxlcyIsIk9yZ2FuaXphdGlvbnMiLCJlbGVtZW50IiwiT3JnYW5pemF0aW9uIiwiX2NyZWRpdHMiLCJjb2lucyIsImdldENyZWRpdHMiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJfdXNlcnMiLCJfb3JnYW5pemF0aW9ucyIsIlVzZXIiLCJvcmdhbml6YXRpb25zIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm91dGRhdGVkIiwiZGVidWciLCJmZXRjaGluZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFuc3dlciIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi9jb2lucy50cyIsIi9wZW9wbGUudHMiLCIvdXNlci50cyIsIi91c2Vycy9tZXRhZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdC1kYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0cy50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2luZGV4LnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL3Byb3ZpZGVyLnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkJBLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQVIsUUFBUyxDQUFDUyxHQUFHLENBQUNELEVBQUUsQ0FBQyxFQUFFO2dCQUM1QixJQUFJRSxRQUFRLEdBQUcsSUFBSWIsS0FBQSxDQUFBYyxrQkFBa0IsQ0FBQztrQkFBRUg7Z0JBQUUsQ0FBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsQ0FBQVIsUUFBUyxDQUFDWSxHQUFHLENBQUNKLEVBQUUsRUFBRUUsUUFBUSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUVGLE1BQU1HLGdCQUFnQixHQUFHLEVBQUU7Y0FDM0JSLFVBQVUsQ0FB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