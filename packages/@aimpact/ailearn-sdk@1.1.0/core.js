System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/chat-sdk@1.4.1/users"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk110Config) {
      dependency_4 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_9 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_10 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactChatSdk141Users) {
      dependency_11 = _aimpactChatSdk141Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/core"
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
        hash: 4125301451,
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
            restore() {
              this.provider.restore();
            }
          }
          exports.ArchiveItem = ArchiveItem;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/archive/provider
      ****************************************/

      ims.set('./users/archive/provider', {
        hash: 782655133,
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
              return data.items;
            };
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
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
        hash: 3278864787,
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
        hash: 1276610833,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwidXJsIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsInJlc3RvcmUiLCJhcmNoaXZlIiwidGV4dCIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZldGNoaW5nIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJnZXRQcm9wZXJ0aWVzIiwiYW5zd2VyIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJ2YWxpZGF0ZSIsImdldEFjY2VzcyIsInZhbGlkIiwic2V0SXRlbSIsImdldEhvbWUiLCJnZXRPcmdhbml6YXRpb25DcmVkaXRzIl0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL3VzZXJzL2FyY2hpdmUvY29sbGVjdGlvbi50cyIsIi91c2Vycy9hcmNoaXZlL2l0ZW0udHMiLCIvdXNlcnMvYXJjaGl2ZS9wcm92aWRlci50cyIsIi9jb2lucy50cyIsIi9wZW9wbGUudHMiLCIvdXNlci50cyIsIi91c2Vycy9tZXRhZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdC1kYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0cy50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2luZGV4LnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL3Byb3ZpZGVyLnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU0sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLFFBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDckIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLFFBQVMsQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDcEM7WUFDQSxNQUFNQyxPQUFPQSxDQUFDQyxVQUFVO2NBQ3ZCQSxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFFQyxFQUFVLElBQUk7Z0JBQ3ZDLElBQUksSUFBSSxDQUFD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