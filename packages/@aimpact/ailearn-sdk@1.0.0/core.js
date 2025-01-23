System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ArchiveCollection, ArchiveItem, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    GClass: void 0,
    ArchiveCollection: void 0,
    ArchiveItem: void 0,
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
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_10 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactChatSdk141Users) {
      dependency_11 = _aimpactChatSdk141Users;
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
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@aimpact/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@aimpact/reactive/entities/collection', dependency_10], ['@aimpact/chat-sdk/users', dependency_11]]);
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

      /******************************************
      INTERNAL MODULE: ./users/archive/collection
      ******************************************/

      ims.set('./users/archive/collection', {
        hash: 2467397109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveCollection = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveCollection extends _collection.Collection {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                item: _item.ArchiveItem,
                provider: _provider.ArchiveProvider
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              this.setItems(Object.values(data.items));
              return data;
            };
          }
          exports.ArchiveCollection = ArchiveCollection;
        }
      });

      /************************************
      INTERNAL MODULE: ./users/archive/item
      ************************************/

      ims.set('./users/archive/item', {
        hash: 1123328672,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveItem = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveItem extends _item.Item {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                provider: _provider.ArchiveProvider,
                properties: ['code', 'module', 'classroom', 'id', 'payer']
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
          }
          exports.ArchiveItem = ArchiveItem;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/archive/provider
      ****************************************/

      ims.set('./users/archive/provider', {
        hash: 4022255426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          class ArchiveProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              console.log(1, data);
              return data.items;
            };
          }
          exports.ArchiveProvider = ArchiveProvider;
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
        hash: 4241823589,
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
        hash: 3452934768,
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
            archive = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              console.log(1, data);
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
        hash: 282490435,
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
          var _collection = require("./archive/collection");
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
            get coins() {
              return this.credits;
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            #archive = new _collection.ArchiveCollection({
              parent: this
            });
            get archive() {
              return this.#archive;
            }
            constructor(specs) {
              super({
                ...specs,
                entity: 'User',
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', {
                  name: 'coins',
                  value: _credits.Credits
                }, 'token', 'roles']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
        "im": "./users/archive/collection",
        "from": "ArchiveCollection",
        "name": "ArchiveCollection"
      }, {
        "im": "./users/archive/item",
        "from": "ArchiveItem",
        "name": "ArchiveItem"
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
        (require || prop === 'ArchiveCollection') && _export("ArchiveCollection", ArchiveCollection = require ? require('./users/archive/collection').ArchiveCollection : value);
        (require || prop === 'ArchiveItem') && _export("ArchiveItem", ArchiveItem = require ? require('./users/archive/item').ArchiveItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwidXJsIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsImxvZyIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImFyY2hpdmUiLCJfdXNlcnMiLCJfb3JnYW5pemF0aW9ucyIsIlVzZXIiLCJvcmdhbml6YXRpb25zIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm91dGRhdGVkIiwiZGVidWciLCJmZXRjaGluZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFuc3dlciIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi91c2Vycy9hcmNoaXZlL2NvbGxlY3Rpb24udHMiLCIvdXNlcnMvYXJjaGl2ZS9pdGVtLnRzIiwiL3VzZXJzL2FyY2hpdmUvcHJvdmlkZXIudHMiLCIvY29pbnMudHMiLCIvcGVvcGxlLnRzIiwiL3VzZXIudHMiLCIvdXNlcnMvbWV0YWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXQtZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdHMudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pbmRleC50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9wcm92aWRlci50cyIsIi91c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QkEsVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBUixRQUFT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