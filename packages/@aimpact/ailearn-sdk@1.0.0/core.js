System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.0.1/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, Organizations, Organization, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, StudentsHome, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    Classrooms: void 0,
    Classroom: void 0,
    GClass: void 0,
    Organizations: void 0,
    Organization: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    RoleType: void 0,
    IPeopleData: void 0,
    IInviteData: void 0,
    IAILearnUserData: void 0,
    StudentsHome: void 0,
    User: void 0
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
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk101Users) {
      dependency_10 = _aimpactChatSdk101Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.52"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/learning-modules', dependency_9], ['@aimpact/chat-sdk/users', dependency_10]]);
      ims = new Map();
      /***************************************************
      INTERNAL MODULE: ./assignments/activities/collection
      ***************************************************/
      ims.set('./assignments/activities/collection', {
        hash: 2502382949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
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
              const promises = [];
              activities.order.forEach(id => {
                if (this.#elements.has(id)) return;
                let instance = new _item.AssignmentActivity({
                  id
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
          }
          exports.Activities = Activities;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./assignments/activities/item
      *********************************************/

      ims.set('./assignments/activities/item', {
        hash: 3427549535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/
          class AssignmentActivity extends _entities.Item {
            /**
             * TODO: Add activity properties
             */
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'resources', 'chat', 'credits', 'data' // represents the tracking data
            ];
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
                db: 'chat-api',
                storeName: 'Activities',
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
              await this.isReady;
              if (!specs.id) specs.id = this.id;
              specs.assignmentId = this.#assignmentId;
              this.#assigment = await Assignment.get({
                id: this.#assignmentId
              });
              await this.#assigment.load();
              this.#assigment.on('credits.change', () => this.trigger('credits.change', 'add'));
              const {
                status,
                error,
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
                throw new Error(`Error loading assignment: ${error}`);
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
              return this.#assigment.consumeCoins();
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
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

      /****************************************
      INTERNAL MODULE: ./assignments/assessment
      ****************************************/

      ims.set('./assignments/assessment', {
        hash: 3629073468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 3873569549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1944676832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1510026156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _collection = require("./activities/collection");
          /*bundle*/
          class Assignment extends _entities.Item {
            properties = ['id', 'lesson', 'classRoomId', 'users'];
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
                db: 'chat-api',
                storeName: 'Assignments',
                provider: _provider.AssignmentProvider
              });
              this.startup(data);
            }
            async startup(data) {
              await this.isReady;
            }
            setModule(parent) {
              this.#module = parent;
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
              this.#module = data.module;
              this.#activities = new _collection.Activities();
              await this.#activities.setData(data.activities);
              this.#order = data.activities.order;
              // this.#activities = data.activities;
              return data;
            }
            async access() {
              const specs = {
                id: this.id
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities.setData(data.activities);
              return this.#accessed;
            }
            async consumeCoins() {
              const response = await this.provider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const model = new Assignment(specs);
              if (specs.id) {
                await model.load();
              } else {
                await model.isReady;
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
        hash: 2782598561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class AssignmentProvider extends _model.ReactiveModel {
            #api;
            #parent;
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
          }
          exports.AssignmentProvider = AssignmentProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./classrooms/collection
      ***************************************/

      ims.set('./classrooms/collection', {
        hash: 3132188730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classrooms = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class Classrooms extends _entities.Collection {
            #googleClassroomsIds = new Set();
            #googleClassrooms = [];
            get googleClassrooms() {
              return this.#googleClassrooms;
            }
            #ready = false;
            get ready() {
              return super.ready && this.#ready;
            }
            constructor() {
              super({
                localdb: false,
                item: _item.Classroom,
                provider: _provider.ClassroomProvider
              });
            }
            async importFromGoogleClassroom(specs) {
              return this.provider.imports(specs);
            }
            async load(specs) {
              try {
                this.fetching = true;
                await super.load(specs);
                this.#ready = true;
                this.#googleClassrooms = this.items.filter(item => {
                  if (!item.external?.id) return false;
                  this.#googleClassroomsIds.add(item.external.id);
                  return true;
                });
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Classrooms = Classrooms;
        }
      });

      /***************************************
      INTERNAL MODULE: ./classrooms/interfaces
      ***************************************/

      ims.set('./classrooms/interfaces', {
        hash: 2454086770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./classrooms/item
      *********************************/

      ims.set('./classrooms/item', {
        hash: 4277500333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class Classroom extends _entities.Item {
            properties = ['id', 'name', 'description', 'section', 'external', 'joinSpecs', 'owner', 'people'];
            #assignments = new Map();
            get assignments() {
              return [...this.#assignments.values()];
            }
            asigments = new Map();
            #members = [];
            get members() {
              return this.#members;
            }
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            #isAdmin;
            get isAdmin() {
              return this.#isAdmin;
            }
            #people = [];
            get people() {
              return this.#people;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                localdb: false,
                provider: _provider.ClassroomProvider
              });
            }
            async load(specs) {
              const {
                status,
                data,
                error
              } = await super.load(specs);
              if (!status && error) {
                if (error.code === 403) {
                  this.found = true;
                  this.hasAccess = false;
                  this.error = 403;
                  return;
                }
                this.found = false;
                this.error = error;
              }
              if (!status) throw new Error('ERROR_GETTING_DATA');
              if (!data.people) {
                console.warn('No people found in organization', data);
                return;
              }
              this.hasAccess = true;
              const isAdmin = data.people.some(i => i.role === 'manager' && (i.uid === _session.sessionWrapper.user.id || i.id === _session.sessionWrapper.user.id));
              this.#isAdmin = isAdmin;
              this.items = data.people;
              const checkMember = person => {
                if (person.authorized === false || person.invited === true) {
                  this.#pendings.push(person);
                  return;
                }
                if (isAdmin && !person.authorized || person.invited) {
                  this.#pendings.push(person);
                  return;
                }
                person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
              };
              this.#people = data.people;
              data.people.forEach(checkMember);
              return data;
            }
            async save(specs) {
              return await this.provider.publish(specs);
            }
            async invite(specs) {
              this.pendings.push({
                ...specs,
                invited: true
              });
              this.trigger('member.invited');
              return await this.provider.invite(specs);
            }
            async join(specs) {
              return await this.provider.join(specs);
            }
            async approve(specs) {
              try {
                // Validate input
                if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
                const {
                  uid
                } = specs;
                // Find and remove the pending member with the specified id
                const pendingIndex = this.#pendings.findIndex(p => p.uid === uid);
                if (pendingIndex === -1) {
                  throw new Error(`Pending member with id ${uid} not found.`);
                }
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
                const eventName = specs.role === 'member' ? 'model.members.invited' : 'model.managers.invited';
                globalThis.setTimeout(() => {
                  this.trigger(eventName);
                  this.trigger('model.pendings.list.changed');
                }, 1000);
                // Call the provider's approve method
                return await this.provider.approve(specs);
              } catch (e) {
                console.error(`Error in approving member: ${e.message}`, specs);
              }
            }
            async reject(specs) {
              console.log('waiting API integration for reject user');
              return specs;
              // return await this.provider.reject(specs);
            }
            async updateRole(specs) {
              console.log('waiting API integration update role by user', specs);
              return specs;
              // return await this.provider.updateRole(specs);
            }
          }
          exports.Classroom = Classroom;
        }
      });

      /*************************************
      INTERNAL MODULE: ./classrooms/provider
      *************************************/

      ims.set('./classrooms/provider', {
        hash: 909088127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ClassroomProvider {
            #api;
            #parent;
            #progress;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async ({
              user,
              ...specs
            } = {
              user: false
            }) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoint = user ? `/users/classrooms` : '/classrooms';
              const {
                status,
                data
              } = await this.#api.get(endpoint, specs);
              return {
                status,
                data
              };
            };
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data,
                error
              } = await this.#api.get(`/classrooms/${specs.id}`);
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data,
                error
              };
            };
            async delete() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const data = await this.#api.delete(`/classrooms/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post('/classrooms', specs);
                if (!res.status) {
                  throw new Error('error publishing classroom');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/classrooms/${this.#parent.id}/invite`, specs);
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post('/classrooms/join', specs);
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async imports(specs = []) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post('/classrooms/bulk', specs);
                if (!res.status) {
                  throw new Error('error publishing classroom');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async approve(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                console.log(specs, 'specs');
                const res = await this.#api.post(`/classrooms/${this.#parent.id}/approve`, specs);
                if (!res.status) {
                  throw new Error('Error approving someone in the classroom');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async reject(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                //const res = await this.#api.post(`/classrooms/${this.#parent.id}/reject`, specs);
                // if (!res.status) {
                // 	throw new Error('Error rejecting someone in the organization');
                // }
                // return res;
                return specs;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.ClassroomProvider = ClassroomProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/

      ims.set('./gclasess/item', {
        hash: 2049497888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/
          class GClass extends _entities.Item {
            properties = ['id', 'sessions'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'GClasses',
                provider: GClassesProvider
              });
            }
            async load(specs) {
              const {
                status,
                error,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error(`Error loading session: ${error}`);
              }
              return data;
            }
          }
          exports.GClass = GClass;
        }
      });

      /******************************************
      INTERNAL MODULE: ./organizations/collection
      ******************************************/

      ims.set('./organizations/collection', {
        hash: 351587606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class Organizations extends _entities.Collection {
            constructor() {
              super({
                storeName: 'Organizations',
                db: 'chat-api',
                localdb: false,
                item: _item.Organization,
                provider: _provider.OrganizationProvider
              });
            }
            async importFromGoogleClassroom(specs) {
              return this.provider.imports(specs);
            }
            async load(specs) {
              try {
                this.fetching = true;
                await super.load(specs);
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /******************************************
      INTERNAL MODULE: ./organizations/interfaces
      ******************************************/

      ims.set('./organizations/interfaces', {
        hash: 1676601180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./organizations/item
      ************************************/

      ims.set('./organizations/item', {
        hash: 754985347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class Organization extends _entities.Item {
            properties = ['id', 'name', 'coins', 'description', 'owner', 'people', 'joinSpecs', 'owner', 'people'];
            #assignments = new Map();
            get assignments() {
              return [...this.#assignments.values()];
            }
            asigments = new Map();
            #members = [];
            get members() {
              return this.#members;
            }
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                localdb: false,
                provider: _provider.OrganizationProvider
              });
              globalThis.org = this;
            }
            async invite(specs) {
              this.pendings.push({
                ...specs,
                invited: true
              });
              this.trigger('member.invited');
              return await this.provider.invite(specs);
            }
            async join(specs) {
              return await this.provider.join(specs);
            }
            async load(specs) {
              const {
                status,
                data,
                error
              } = await super.load(specs);
              if (!status && error) {
                if (error.code === 403) {
                  this.found = true;
                  this.hasAccess = false;
                  this.error = 403;
                  return;
                }
                this.found = false;
                this.error = error;
              }
              this.hasAccess = true;
              if (!data.people) {
                console.warn('No people found in organization', data);
                return;
              }
              const isAdmin = data.people.some(i => i.role === 'manager' && (i.uid === _session.sessionWrapper.user.id || i.id === _session.sessionWrapper.user.id));
              const checkMember = person => {
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                  return;
                }
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                  return;
                }
              };
              data.people.forEach(checkMember);
              return data;
            }
            async approve(specs) {
              try {
                // Validate input
                if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
                const {
                  uid
                } = specs;
                // Find and remove the pending member with the specified id
                const pendingIndex = this.#pendings.findIndex(p => p.uid === uid);
                if (pendingIndex === -1) {
                  throw new Error(`Pending member with id ${uid} not found.`);
                }
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
                const eventName = specs.role === 'member' ? 'model.members.invited' : 'model.managers.invited';
                globalThis.setTimeout(() => {
                  this.trigger(eventName);
                  this.trigger('model.pendings.list.changed');
                }, 1000);
                // Call the provider's approve method
                return await this.provider.approve(specs);
              } catch (e) {
                console.error(`Error in approving member: ${e.message}`, specs);
              }
            }
            async reject(specs) {
              console.log('waiting API integration for reject user');
              return specs;
              // return await this.provider.reject(specs);
            }
            async updateRole(specs) {
              console.log('waiting API integration update role by user', specs);
              return specs;
              // return await this.provider.updateRole(specs);
            }
          }
          exports.Organization = Organization;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 419922192,
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
              return await this.#api.get(`/organizations/${specs.id}`);
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
                if (res.error.code === 41) {
                  throw new Error('INVALID_CODE');
                }
                if (res.error.code === 42) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
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

      /*************************************
      INTERNAL MODULE: ./users/students/item
      *************************************/

      ims.set('./users/students/item', {
        hash: 2927655051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHome = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          /*bundle*/
          class StudentsHome extends _entities.Item {
            properties = ['assignments', 'student'];
            #assignments;
            #student;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'StudentsHome',
                provider: _provider.StudentsHomeProvider
              });
            }
            async load() {
              await this.isReady;
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
        hash: 3037216349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1388787387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          /*bundle*/
          class User extends _users.User {
            properties = ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'roles', 'token', 'coins'];
            #api;
            #schools = new Map();
            #logged = false;
            get logged() {
              return this.#logged;
            }
            get schools() {
              return {
                items: [...this.#schools.values()]
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
              return [{
                id: this.id,
                name: this.displayName,
                entity: 'user'
              }, ...this.#schools.values()];
            }
            get accessibilityMode() {
              return !!globalThis.localStorage.getItem('aimpact.accessibility.mode');
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            constructor(specs) {
              super({
                ...specs,
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'token']
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
                  this.#data.teacher.orgs.forEach(org => this.#schools.set(org.id, org));
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
                await this.set(response.data);
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
        "im": "./classrooms/collection",
        "from": "Classrooms",
        "name": "Classrooms"
      }, {
        "im": "./classrooms/item",
        "from": "Classroom",
        "name": "Classroom"
      }, {
        "im": "./gclasess/item",
        "from": "GClass",
        "name": "GClass"
      }, {
        "im": "./organizations/collection",
        "from": "Organizations",
        "name": "Organizations"
      }, {
        "im": "./organizations/item",
        "from": "Organization",
        "name": "Organization"
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
        (require || prop === 'Classrooms') && _export("Classrooms", Classrooms = require ? require('./classrooms/collection').Classrooms : value);
        (require || prop === 'Classroom') && _export("Classroom", Classroom = require ? require('./classrooms/item').Classroom : value);
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'Organizations') && _export("Organizations", Organizations = require ? require('./organizations/collection').Organizations : value);
        (require || prop === 'Organization') && _export("Organization", Organization = require ? require('./organizations/item').Organization : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./users/interfaces/common/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./users/interfaces/common/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./users/interfaces/common/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./users/interfaces/common/coins').ICreditsConsumptionsData : value);
        (require || prop === 'RoleType') && _export("RoleType", RoleType = require ? require('./users/interfaces/common/people').RoleType : value);
        (require || prop === 'IPeopleData') && _export("IPeopleData", IPeopleData = require ? require('./users/interfaces/common/people').IPeopleData : value);
        (require || prop === 'IInviteData') && _export("IInviteData", IInviteData = require ? require('./users/interfaces/common/people').IInviteData : value);
        (require || prop === 'IAILearnUserData') && _export("IAILearnUserData", IAILearnUserData = require ? require('./users/interfaces/user').IAILearnUserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJ0cmFja2luZyIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJjaGF0TW9kZWwiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFzc2Vzc21lbnQiLCJhc3NpZ21lbnQiLCJhc3NpZ25tZW50IiwiY29uc3RydWN0b3IiLCJkYXRhIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbGxlY3Rpb24iLCJpbnN0YW5jZXMiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJsb2FkQ2hhdCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbXMiLCJDb2xsZWN0aW9uIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsIlNldCIsImdvb2dsZUNsYXNzcm9vbXMiLCJyZWFkeSIsImxvY2FsZGIiLCJpdGVtIiwiQ2xhc3Nyb29tIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJpbXBvcnRGcm9tR29vZ2xlQ2xhc3Nyb29tIiwiaW1wb3J0cyIsImZldGNoaW5nIiwiZmlsdGVyIiwiZXh0ZXJuYWwiLCJhZGQiLCJtZXNzYWdlIiwiYXNzaWdubWVudHMiLCJhc2lnbWVudHMiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsImlzQWRtaW4iLCJwZW9wbGUiLCJjb2RlIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJ3YXJuIiwic29tZSIsImkiLCJyb2xlIiwidWlkIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwiaW52aXRlZCIsInNhdmUiLCJpbnZpdGUiLCJqb2luIiwiYXBwcm92ZSIsInBlbmRpbmdJbmRleCIsImZpbmRJbmRleCIsInAiLCJwZW5kaW5nTWVtYmVyIiwic3BsaWNlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsInJlamVjdCIsImxvZyIsInVwZGF0ZVJvbGUiLCJsaXN0IiwiZW5kcG9pbnQiLCJkZWxldGUiLCJyZXMiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvblByb3ZpZGVyIiwib3JnIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiX3VzZXJzIiwiVXNlciIsInNjaG9vbHMiLCJsb2dnZWQiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwib3JnYW5pemF0aW9ucyIsImVudGl0eSIsImFjY2Vzc2liaWxpdHlNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm91dGRhdGVkIiwiZGVidWciLCJ0ZWFjaGVyIiwib3JncyIsImxvZ2luIiwiZmlyZWJhc2VUb2tlbiIsImdldFByb3BlcnRpZXMiLCJhY2NlcHRUZXJtcyIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZ2V0QWNjZXNzIiwidmFsaWQiLCJzZXRJdGVtIiwiZ2V0SG9tZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtjQUVuQkQsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNVLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7Z0JBRTVCLElBQUlFLFFBQVEsR0FBRyxJQUFJZCxLQUFBLENBQUFlLGtCQUFrQixDQUFDO2tCQUFFSDtnQkFBRSxDQUFFLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNhLEdBQUcsQ0FBQ0osRUFBRSxFQUFFRSxRQUFRLENBQUM7Z0JBQ2hDTCxRQUFRLENBQUNRLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxPQUFPLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO2NBRUYsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLFFBQVEsQ0FBQztjQUUzQixNQUFNWSxnQkFBZ0IsR0FBRyxFQUFFO2NBQzNCYixVQUFVLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLEVBQUUsRUFBRVUsS0FBSyxLQUFJO2dCQUN0QyxNQUFNUixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFYLFFBQVMsQ0FBQ29CLEdBQUcsQ0FBQ1gsRUFBRSxDQUFDO2dCQUN2Q0UsUUFBUSxDQUFDRSxHQUFHLENBQUNSLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDTyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLENBQUFULFFBQVMsQ0FBQ2EsR0FBRyxDQUFDSixFQUFFLEVBQUVFLFFBQVEsQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FFRixPQUFPSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7WUFDckM7O1VBQ0FHLE9BQUEsQ0FBQXZCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0QsSUFBQXdCLFNBQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBMkIsU0FBQSxHQUFBM0IsT0FBQTtVQVlPO1VBQVUsTUFBT2dCLGtCQUFtQixTQUFRVyxTQUFBLENBQUFDLElBQWU7WUFDakU7OztZQUdVQyxVQUFVLEdBQUcsQ0FDdEIsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLENBQUM7WUFBQSxDQUNQO1lBU0QsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUlGLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUcsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUFDLFNBQVNBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQ0MsU0FBUyxFQUFFRCxTQUFTO1lBQ2pDO1lBQ0EsQ0FBQUUsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQUMsb0JBQXFCO1lBQ3JCLElBQUlBLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFFQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFELFNBQVU7WUFDdkI7WUFDQUUsWUFBWTtjQUFFOUIsRUFBRTtjQUFFaUIsWUFBWTtjQUFFYztZQUFJLElBQWEsRUFBRTtjQUNsRCxLQUFLLENBQUM7Z0JBQ0wvQixFQUFFO2dCQUNGZ0MsRUFBRSxFQUFFLFVBQVU7Z0JBQ2RDLFNBQVMsRUFBRSxZQUFZO2dCQUN2QjtnQkFDQUMsUUFBUSxFQUFFckIsU0FBQSxDQUFBc0I7ZUFDVixDQUFDO2NBRUYsSUFBSSxDQUFDQyxPQUFPLENBQUNuQixZQUFZLEVBQUVjLElBQUksQ0FBQztjQUVoQ00sVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU1GLE9BQU9BLENBQUNuQixZQUFZLEVBQUVjLElBQUs7Y0FDaEMsSUFBSSxDQUFDLENBQUFkLFlBQWEsR0FBR0EsWUFBWTtZQUNsQztZQUNBLE1BQU1zQixJQUFJQSxDQUFDQyxLQUFBLEdBQWdELEVBQUU7Y0FDNUQsTUFBTSxJQUFJLENBQUNsQyxPQUFPO2NBRWxCLElBQUksQ0FBQ2tDLEtBQUssQ0FBQ3hDLEVBQUUsRUFBRXdDLEtBQUssQ0FBQ3hDLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7Y0FDakN3QyxLQUFLLENBQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFBLFlBQWE7Y0FDdkMsSUFBSSxDQUFDLENBQUFXLFNBQVUsR0FBRyxNQUFNYSxVQUFVLENBQUM5QixHQUFHLENBQUM7Z0JBQUVYLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQWlCO2NBQWEsQ0FBRSxDQUFDO2NBQ2xFLE1BQU0sSUFBSSxDQUFDLENBQUFXLFNBQVUsQ0FBQ1csSUFBSSxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFBWCxTQUFVLENBQUNjLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO2NBQ2pGLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVkO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDUSxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUN2RCxNQUFNLElBQUksQ0FBQ3BDLEdBQUcsQ0FBQzJCLElBQUksQ0FBQ2UsUUFBUSxDQUFDO2NBRTdCO2NBQ0EsTUFBTSxJQUFJLENBQUMxQyxHQUFHLENBQUM7Z0JBQUUyQyxPQUFPLEVBQUVoQixJQUFJLENBQUNnQjtjQUFPLENBQUUsQ0FBQztjQUV6QyxJQUFJLENBQUMsQ0FBQTdCLElBQUssR0FBR2EsSUFBSSxDQUFDYixJQUFJO2NBQ3RCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEdBQUdZLElBQUksQ0FBQ1osTUFBTTtjQUUxQixJQUFJLENBQUN5QixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSSxLQUFLLENBQUMsNkJBQTZCSCxLQUFLLEVBQUUsQ0FBQzs7Y0FFdEQsSUFBSSxDQUFDLENBQUFJLE9BQVEsRUFBRTtjQUNmLE9BQU9sQixJQUFJO1lBQ1o7WUFFQSxDQUFBa0IsT0FBUUMsQ0FBQTtjQUNQLElBQUksSUFBSSxDQUFDN0IsU0FBUyxFQUFFTSxVQUFVLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUd3QixJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMvQixTQUFTLENBQUNNLFVBQVUsQ0FBQzs7Y0FFekQsSUFBSSxJQUFJLENBQUNJLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsQ0FBQVgsUUFBUyxHQUFHLElBQUksQ0FBQ1csSUFBSTs7WUFFNUI7WUFDQSxNQUFNc0IsT0FBT0EsQ0FBQztjQUFFQyxNQUFNO2NBQUVDO1lBQUksQ0FBRTtjQUM3QixJQUFJO2dCQUNILE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQztrQkFBRUMsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsQ0FBQW5DLFFBQVMsR0FBR29DLFFBQVEsQ0FBQ3pCLElBQUksQ0FBQ1gsUUFBUTtnQkFDdkMsSUFBSSxDQUFDLENBQUFPLFVBQVcsQ0FBQzhCLFNBQVMsR0FBRyxTQUFTO2dCQUN0QyxJQUFJLENBQUMxQixJQUFJLEdBQUd5QixRQUFRLENBQUN6QixJQUFJLENBQUNYLFFBQVE7ZUFDbEMsQ0FBQyxPQUFPc0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1FLGFBQWFBLENBQUM7Y0FBRU4sTUFBTTtjQUFFQztZQUFJLENBQUU7Y0FDbkMsSUFBSTtnQkFDSCxNQUFNeEIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDRyxRQUFRLENBQUNtQixPQUFPLENBQUM7a0JBQUV0QixJQUFJLEVBQUV1QixNQUFNO2tCQUFFQztnQkFBSSxDQUFFLENBQUM7Z0JBRWhFLElBQUksQ0FBQ25ELEdBQUcsQ0FBQztrQkFBRTJCO2dCQUFJLENBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLENBQUFSLFFBQVMsR0FBR1EsSUFBSSxDQUFDUixRQUFRO2dCQUM5QixJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHTyxJQUFJLENBQUNQLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBRSxvQkFBcUIsR0FBR0ssSUFBSSxDQUFDTCxvQkFBb0I7ZUFDdEQsQ0FBQyxPQUFPZ0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU10RCxHQUFHQSxDQUFDMkIsSUFBSTtjQUNiLE1BQU0sS0FBSyxDQUFDM0IsR0FBRyxDQUFDMkIsSUFBSSxDQUFDO2NBQ3JCLElBQUksQ0FBQyxDQUFBa0IsT0FBUSxFQUFFO2NBRWYsSUFBSSxDQUFDTixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTWtCLFlBQVlBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQWpDLFNBQVUsQ0FBQ2lDLFlBQVksRUFBRTtZQUN0Qzs7VUFDQWpELE9BQUEsQ0FBQVQsa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDektELElBQUEyRCxJQUFBLEdBQUEzRSxPQUFBO1VBR0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxTQUFBLEdBQUE5RSxPQUFBO1VBRU0sTUFBT2dELGdCQUFpQixTQUFRakQsTUFBQSxDQUFBSSxhQUErQjtZQUNwRSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUHJDLFlBQVlxQyxNQUEwQjtjQUNyQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBNUIsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFOUIsTUFBTTtnQkFBRWI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW1DLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0I2QixLQUFLLENBQUN2QixZQUFZLGVBQWV1QixLQUFLLENBQUN4QyxFQUFFLEVBQUUsQ0FBQztjQUV6RyxJQUFJLENBQUM0QyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSSxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRzFDLElBQUlSLEtBQUssRUFBRW1DLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLFdBQVcsQ0FBQzdDLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFYSxNQUFNO2dCQUFFYjtjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUVEc0IsT0FBTyxHQUFHLE1BQU1iLEtBQUssSUFBRztjQUN2QixJQUFJQSxLQUFLLENBQUNlLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU9mLEtBQUssQ0FBQ2UsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUM1QixVQUFVLENBQUNhLEtBQUssQ0FBQ2MsTUFBTSxDQUFDOztjQUVyQyxPQUFPLElBQUksQ0FBQ3VCLE1BQU0sQ0FBQ3JDLEtBQUssQ0FBQ1QsSUFBSSxDQUFDO1lBQy9CLENBQUM7WUFFREosVUFBVSxHQUFHLE1BQU9hLEtBQVUsSUFBSTtjQUNqQyxJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFOUIsTUFBTTtnQkFBRWIsSUFBSTtnQkFBRWM7Y0FBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFCLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLG9DQUFvQyxFQUFFdEMsS0FBSyxDQUFDO2NBRWpHLElBQUlLLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Y0FHL0MsT0FBTztnQkFBRUosTUFBTTtnQkFBRWI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRDhDLE1BQU0sR0FBRyxNQUFNckMsS0FBSyxJQUFHO2NBQ3RCLElBQUk7Z0JBQ0gsTUFBTXVDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQ3pDLEtBQUssQ0FBQztnQkFDL0MsTUFBTTBDLElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Z0JBQzNCSixLQUFLLENBQUNoRixPQUFPLENBQUNxRixJQUFJLElBQUc7a0JBQ3BCRixJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFNUMsS0FBSyxDQUFDNEMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQztnQkFFRixNQUFNRSxHQUFHLEdBQUcsSUFBSXJCLFNBQUEsQ0FBQXNCLFNBQVMsRUFBRTtnQkFDM0JELEdBQUcsQ0FBQ2QsTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztnQkFDckMsTUFBTWxCLFFBQVEsR0FBRyxNQUFNOEIsR0FBRyxDQUFDRSxNQUFNLENBQUNOLElBQUksRUFBRSxHQUFHbkIsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTywrQkFBK0IsQ0FBQztnQkFDckcsTUFBTWtCLElBQUksR0FBRyxNQUFNakMsUUFBUSxDQUFDaUMsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQzdDLE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJSSxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUcvQyxJQUFJLENBQUMwQyxZQUFZLEVBQUU7Z0JBQ25CLE9BQU9ELElBQUksQ0FBQzFELElBQUk7ZUFDaEIsQ0FBQyxPQUFPMkIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsTUFBTUcsWUFBWUEsQ0FBQTtjQUNqQixJQUFJLENBQUMsQ0FBQUssR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2NBRTNDLE9BQU8sSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDbEQsWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckY7O1VBQ0FMLE9BQUEsQ0FBQXVCLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGRCxJQUFBakQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQXdHLEtBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBOEUsU0FBQSxHQUFBOUUsT0FBQTtVQUdBLElBQUF5RyxNQUFBLEdBQUF6RyxPQUFBO1VBQ087VUFBVSxNQUFPMEcsVUFBVyxTQUFRM0csTUFBQSxDQUFBSSxhQUF5QjtZQUNuRSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUCxDQUFBbkUsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsQ0FBQTBCLG9CQUFxQjtZQUNyQixJQUFJQSxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBQ0EsQ0FBQUYsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUQsUUFBUyxHQUFVLEVBQUU7WUFDckIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBa0MsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQXFDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUE5RSxZQUFhO1lBQ2IsQ0FBQStFLFVBQVc7WUFDWGxFLFlBQVk7Y0FBRWI7WUFBWSxDQUF5QztjQUNsRSxLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHQSxZQUFZO2NBQ2pDLElBQUksQ0FBQyxDQUFBaUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFDQWhDLElBQUksR0FBRyxNQUFBQSxDQUFPdkMsRUFBRSxFQUFFaUcsTUFBTyxLQUFJO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRXJELE1BQU07a0JBQUViO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUMsR0FBSSxDQUN0Q00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQyxDQUNqQy9ELEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFNLFlBQWEsSUFBSWpCLEVBQUUsU0FBUyxFQUFFO2tCQUFFaUc7Z0JBQU0sQ0FBRSxDQUFDO2dCQUVwRSxJQUFJLENBQUNyRCxNQUFNLEVBQUUsTUFBTSxJQUFJSSxLQUFLLENBQUMsMEJBQTBCLENBQUM7Z0JBRXhELElBQUksQ0FBQyxDQUFBekIsUUFBUyxHQUFHUSxJQUFJLENBQUNSLFFBQVEsSUFBSSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHTyxJQUFJLENBQUNQLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBaUMsU0FBVSxHQUFHMUIsSUFBSSxDQUFDMEIsU0FBUztnQkFDaEMsSUFBSSxDQUFDLENBQUEvQixvQkFBcUIsR0FBR0ssSUFBSSxDQUFDTCxvQkFBb0I7Z0JBQ3RELElBQUksQ0FBQyxDQUFBb0UsV0FBWSxHQUFHL0QsSUFBSSxDQUFDK0QsV0FBVztnQkFDcEMsSUFBSSxDQUFDSSxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7ZUFDbEIsQ0FBQyxPQUFPekMsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsTUFBTXdDLGVBQWVBLENBQUE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQUYsVUFBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7Y0FDN0MsSUFBSSxDQUFDLENBQUFBLFVBQVcsR0FBRyxJQUFJSixNQUFBLENBQUFRLGNBQWMsRUFBRTtjQUV2QyxNQUFNTCxJQUFJLEdBQUcsSUFBSUosS0FBQSxDQUFBVSxJQUFJLENBQUM7Z0JBQUVyRyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE4RixXQUFZLENBQUNDLElBQUksQ0FBQy9GO2NBQUUsQ0FBRSxDQUFDO2NBQ3hELE1BQU0rRixJQUFJLENBQUNPLE9BQU8sRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQVAsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBQyxVQUFXLENBQUNPLE9BQU8sRUFBRTtjQUMxQixJQUFJLENBQUNiLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDakM7WUFFQXJDLE9BQU8sR0FBRyxNQUFNYixLQUFLLElBQUc7Y0FDdkIsSUFBSTtnQkFDSCxNQUFNdUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDekMsS0FBSyxDQUFDO2dCQUMvQyxNQUFNMEMsSUFBSSxHQUFHLElBQUlDLFFBQVEsRUFBRTtnQkFDM0JKLEtBQUssQ0FBQ2hGLE9BQU8sQ0FBQ3FGLElBQUksSUFBRztrQkFDcEJGLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxJQUFJLEVBQUU1QyxLQUFLLENBQUM0QyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDO2dCQUVGRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUFwRSxZQUFhLENBQUM7Z0JBRS9DLE1BQU1xRSxHQUFHLEdBQUcsSUFBSXJCLFNBQUEsQ0FBQXNCLFNBQVMsRUFBRTtnQkFDM0JELEdBQUcsQ0FBQ2QsTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztnQkFDckMsTUFBTWxCLFFBQVEsR0FBRyxNQUFNOEIsR0FBRyxDQUFDRSxNQUFNLENBQUNOLElBQUksRUFBRSxHQUFHbkIsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztnQkFDM0YsTUFBTWtCLElBQUksR0FBRyxNQUFNakMsUUFBUSxDQUFDaUMsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQzdDLE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJSSxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUUvQyxJQUFJLENBQUMsQ0FBQXpCLFFBQVMsR0FBR2tFLElBQUksQ0FBQzFELElBQUksQ0FBQ1IsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBR2lFLElBQUksQ0FBQzFELElBQUksQ0FBQ1AsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFFLG9CQUFxQixHQUFHK0QsSUFBSSxDQUFDMUQsSUFBSSxDQUFDTCxvQkFBb0I7Z0JBQzNELElBQUksQ0FBQ2dFLFlBQVksRUFBRTtnQkFDbkIsT0FBT0QsSUFBSSxDQUFDMUQsSUFBSTtlQUNoQixDQUFDLE9BQU8yQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRDhDLGFBQWEsR0FBRyxNQUFNaEUsS0FBSyxJQUFHO2NBQzdCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVUsR0FBSSxDQUFDWSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7a0JBQy9ELEdBQUd0QyxLQUFLO2tCQUNSdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBQTtpQkFDbkIsQ0FBQztnQkFFRixJQUFJLENBQUN1QyxRQUFRLENBQUNaLE1BQU0sRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLENBQUFTLFNBQVUsR0FBR0QsUUFBUSxDQUFDekIsSUFBSSxDQUFDMEIsU0FBUztnQkFDekMsSUFBSSxDQUFDZCxPQUFPLENBQUMsUUFBUSxDQUFDO2VBQ3RCLENBQUMsT0FBT2UsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDOztVQUNEOUMsT0FBQSxDQUFBaUYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVIRCxJQUFBM0csTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU87VUFBVSxNQUFPc0gsYUFBYyxTQUFRdkgsTUFBQSxDQUFBSSxhQUE2QjtZQUMxRSxDQUFBNEUsR0FBSTtZQUNNbEQsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUl6Q2MsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBb0MsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNaEMsSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUU5QixNQUFNO2dCQUFFQyxLQUFLO2dCQUFFZDtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGdCQUFnQjZCLEtBQUssQ0FBQ3hDLEVBQUUsT0FBTyxDQUFDO2NBRXBGLElBQUksQ0FBQzRDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlJLEtBQUssQ0FBQywwQkFBMEJILEtBQUssRUFBRSxDQUFDOztjQUduRCxPQUFPZCxJQUFJO1lBQ1o7O1VBQ0FuQixPQUFBLENBQUE2RixhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUF2SCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ00sTUFBT3VILFNBQVUsU0FBUXhILE1BQUEsQ0FBQUksYUFBd0I7WUFDdEQsQ0FBQTRFLEdBQUk7WUFDSnBDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQW9DLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEOztVQUNBM0QsT0FBQSxDQUFBOEYsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7OztVQ1REOztVQUVBMUIsTUFBQSxDQUFBMkIsY0FBQSxDQUFBL0YsT0FBQTtZQUNBZ0csS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNUIsTUFBQSxDQUFBMkIsY0FBQSxDQUFBL0YsT0FBQTtZQUNBZ0csS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUEvRixTQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEwSCxXQUFBLEdBQUExSCxPQUFBO1VBR087VUFBVSxNQUFPc0QsVUFBVyxTQUFRM0IsU0FBQSxDQUFBQyxJQUFpQjtZQUNqREMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBQ3ZELE9BQU84RixTQUFTLEdBQUcsSUFBSXRILEdBQUcsRUFBRTtZQVNwQyxDQUFBTSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBNkIsVUFBVztZQUNYLElBQUlvRixHQUFHQSxDQUFBO2NBQ04sT0FBTyxHQUFHaEQsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQzBELE9BQU8sdUJBQXVCLElBQUksQ0FBQ2hILEVBQUUsRUFBRTtZQUNoRTtZQUVBLENBQUFtQixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBOEYsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQXJILFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFzSCxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQXBGLFlBQVk7Y0FBRTlCLEVBQUUsR0FBR21ILFNBQVM7Y0FBRXBGO1lBQUksQ0FBRSxHQUFHO2NBQUVBLElBQUksRUFBRTtZQUFFLENBQUU7Y0FDbEQsS0FBSyxDQUFDO2dCQUFFL0IsRUFBRTtnQkFBRWdDLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsYUFBYTtnQkFBRUMsUUFBUSxFQUFFckIsU0FBQSxDQUFBdUc7Y0FBa0IsQ0FBRSxDQUFDO2NBQ3JGLElBQUksQ0FBQ2hGLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDO1lBQ25CO1lBRUEsTUFBTUssT0FBT0EsQ0FBQ0wsSUFBSTtjQUNqQixNQUFNLElBQUksQ0FBQ3pCLE9BQU87WUFDbkI7WUFDQStHLFNBQVNBLENBQUNsRCxNQUFzQjtjQUMvQixJQUFJLENBQUMsQ0FBQWhELE1BQU8sR0FBR2dELE1BQU07WUFDdEI7WUFFQSxNQUFNNUIsSUFBSUEsQ0FBQ0MsS0FBQSxHQUEwQyxFQUFFO2NBQ3RELE1BQU0sSUFBSSxDQUFDbEMsT0FBTztjQUNsQixJQUFJLENBQUNrQyxLQUFLLENBQUN4QyxFQUFFLEVBQUV3QyxLQUFLLENBQUN4QyxFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO2NBRWpDLE1BQU13RCxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUNqQixJQUFJLENBQUNDLEtBQUssQ0FBQztjQUN4QyxNQUFNO2dCQUFFSSxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFZDtjQUFJLENBQUUsR0FBR3lCLFFBQVE7Y0FFeEMsSUFBSSxDQUFDWixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSSxLQUFLLENBQUMsNkJBQTZCSCxLQUFLLEVBQUUsQ0FBQzs7Y0FHdEQsSUFBSSxDQUFDLENBQUFvRSxRQUFTLEdBQUdsRixJQUFJLENBQUNrRixRQUFRO2NBQzlCLElBQUksQ0FBQyxDQUFBOUYsTUFBTyxHQUFHWSxJQUFJLENBQUNaLE1BQU07Y0FFMUIsSUFBSSxDQUFDLENBQUF2QixVQUFXLEdBQUcsSUFBSWlILFdBQUEsQ0FBQXhILFVBQVUsRUFBRTtjQUNuQyxNQUFNLElBQUksQ0FBQyxDQUFBTyxVQUFXLENBQUNELE9BQU8sQ0FBQ29DLElBQUksQ0FBQ25DLFVBQVUsQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUUsS0FBTSxHQUFHaUMsSUFBSSxDQUFDbkMsVUFBVSxDQUFDRSxLQUFLO2NBRW5DO2NBRUEsT0FBT2lDLElBQUk7WUFDWjtZQUVBLE1BQU11RixNQUFNQSxDQUFBO2NBQ1gsTUFBTTlFLEtBQUssR0FBRztnQkFBRXhDLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRTtjQUM3QixNQUFNK0IsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDRyxRQUFRLENBQUNvRixNQUFNLENBQUM5RSxLQUFLLENBQUM7Y0FDOUMsSUFBSSxDQUFDLENBQUF5RSxRQUFTLEdBQUdsRixJQUFJLENBQUNrRixRQUFRO2NBQzlCLElBQUksQ0FBQyxDQUFBckgsVUFBVyxDQUFDRCxPQUFPLENBQUNvQyxJQUFJLENBQUNuQyxVQUFVLENBQUM7Y0FFekMsT0FBTyxJQUFJLENBQUMsQ0FBQXFILFFBQVM7WUFDdEI7WUFFQSxNQUFNcEQsWUFBWUEsQ0FBQTtjQUNqQixNQUFNTCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN0QixRQUFRLENBQUMyQixZQUFZLEVBQUU7Y0FFbkQsSUFBSSxDQUFDTCxRQUFRLENBQUNaLE1BQU0sRUFBRTtnQkFDckIsT0FBT1ksUUFBUTs7Y0FFaEIsTUFBTSxJQUFJLENBQUNwRCxHQUFHLENBQUNvRCxRQUFRLENBQUN6QixJQUFJLENBQUM7Y0FDN0IsSUFBSSxDQUFDWSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2NBQ3JDLE9BQU9hLFFBQVE7WUFDaEI7WUFFQSxhQUFhN0MsR0FBR0EsQ0FBQzZCLEtBQUs7Y0FDckIsSUFBSUEsS0FBSyxFQUFFeEMsRUFBRSxJQUFJLElBQUksQ0FBQzhHLFNBQVMsQ0FBQzdHLEdBQUcsQ0FBQ3VDLEtBQUssQ0FBQ3hDLEVBQUUsQ0FBQyxFQUFFO2dCQUM5QyxPQUFPLElBQUksQ0FBQzhHLFNBQVMsQ0FBQ25HLEdBQUcsQ0FBQzZCLEtBQUssQ0FBQ3hDLEVBQUUsQ0FBQzs7Y0FHcEMsTUFBTXNDLEtBQUssR0FBRyxJQUFJRyxVQUFVLENBQUNELEtBQUssQ0FBQztjQUNuQyxJQUFJQSxLQUFLLENBQUN4QyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTXNDLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO2VBQ2xCLE1BQU07Z0JBQ04sTUFBTUQsS0FBSyxDQUFDaEMsT0FBTzs7Y0FHcEIsSUFBSSxDQUFDd0csU0FBUyxDQUFDMUcsR0FBRyxDQUFDb0MsS0FBSyxDQUFDeEMsRUFBRSxFQUFFc0MsS0FBSyxDQUFDO2NBQ25DLE9BQU9BLEtBQUs7WUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BIRCxJQUFBd0IsSUFBQSxHQUFBM0UsT0FBQTtVQUdBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTSxNQUFPaUksa0JBQW1CLFNBQVFsSSxNQUFBLENBQUFJLGFBQWlDO1lBQ3hFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQckMsWUFBWXFDLE1BQWtCO2NBQzdCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDZixNQUFNLENBQUNnQixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUosTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBQ0E1QixJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2NBRTNDLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVUsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGdCQUFnQjZCLEtBQUssQ0FBQ3hDLEVBQUUsV0FBVyxFQUFFd0MsS0FBSyxDQUFDO2NBQ2hGLE1BQU07Z0JBQUVJLE1BQU07Z0JBQUViO2NBQUksQ0FBRSxHQUFHeUIsUUFBUTtjQUVqQyxJQUFJLENBQUNaLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Y0FHdkMsSUFBSVIsS0FBSyxFQUFFbUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDN0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVhLE1BQU07Z0JBQUViO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQsTUFBTXVGLE1BQU1BLENBQUM5RSxLQUFBLEdBQXlCLEVBQUU7Y0FDdkMsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Y0FDM0MsTUFBTWxCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBVSxHQUFJLENBQUNZLElBQUksQ0FBQyxnQkFBZ0J0QyxLQUFLLENBQUN4QyxFQUFFLFNBQVMsRUFBRXdDLEtBQUssQ0FBQztjQUMvRSxJQUFJLENBQUNnQixRQUFRLENBQUNaLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJSSxLQUFLLENBQUMsK0JBQStCUSxRQUFRLENBQUNYLEtBQUssRUFBRSxDQUFDOztjQUdqRSxPQUFPVyxRQUFRLENBQUN6QixJQUFJO1lBQ3JCOztVQUNBbkIsT0FBQSxDQUFBd0csa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNELElBQUF0RyxTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFFTztVQUFVLE1BQU9vSSxVQUFXLFNBQVF6RyxTQUFBLENBQUEwRyxVQUFVO1lBSXBELENBQUFDLG1CQUFvQixHQUFnQixJQUFJQyxHQUFHLEVBQUU7WUFFN0MsQ0FBQUMsZ0JBQWlCLEdBQWdCLEVBQUU7WUFDbkMsSUFBSUEsZ0JBQWdCQSxDQUFBO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLGdCQUFpQjtZQUM5QjtZQUNBLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ2xDO1lBQ0E5RixZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMK0YsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RDLElBQUksRUFBRTFJLEtBQUEsQ0FBQTJJLFNBQVM7Z0JBQ2Y3RixRQUFRLEVBQUVyQixTQUFBLENBQUFtSDtlQUNWLENBQUM7WUFDSDtZQUVBLE1BQU1DLHlCQUF5QkEsQ0FBQ3pGLEtBQUs7Y0FDcEMsT0FBTyxJQUFJLENBQUNOLFFBQVEsQ0FBQ2dHLE9BQU8sQ0FBQzFGLEtBQUssQ0FBQztZQUNwQztZQUVBLE1BQU1ELElBQUlBLENBQUNDLEtBQUs7Y0FDZixJQUFJO2dCQUNILElBQUksQ0FBQzJGLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLEtBQUssQ0FBQzVGLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsQ0FBQW9GLEtBQU0sR0FBRyxJQUFJO2dCQUVsQixJQUFJLENBQUMsQ0FBQUQsZ0JBQWlCLEdBQUcsSUFBSSxDQUFDbEksS0FBSyxDQUFDMkksTUFBTSxDQUFDTixJQUFJLElBQUc7a0JBQ2pELElBQUksQ0FBQ0EsSUFBSSxDQUFDTyxRQUFRLEVBQUVySSxFQUFFLEVBQUUsT0FBTyxLQUFLO2tCQUNwQyxJQUFJLENBQUMsQ0FBQXlILG1CQUFvQixDQUFDYSxHQUFHLENBQUNSLElBQUksQ0FBQ08sUUFBUSxDQUFDckksRUFBRSxDQUFDO2tCQUMvQyxPQUFPLElBQUk7Z0JBQ1osQ0FBQyxDQUFDO2VBQ0YsQ0FBQyxPQUFPMEQsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVYsS0FBSyxDQUFDVSxDQUFDLENBQUM2RSxPQUFPLENBQUM7ZUFDMUIsU0FBUztnQkFDVCxJQUFJLENBQUNKLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQXZILE9BQUEsQ0FBQTJHLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUMvQ0Q7O1VBRUF2QyxNQUFBLENBQUEyQixjQUFBLENBQUEvRixPQUFBO1lBQ0FnRyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTlGLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBMEIsU0FBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ087VUFBVSxNQUFPNEksU0FBVSxTQUFRakgsU0FBQSxDQUFBQyxJQUFlO1lBQzlDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBUTNHLENBQUF3SCxXQUFZLEdBQUcsSUFBSWhKLEdBQUcsRUFBRTtZQUN4QixJQUFJZ0osV0FBV0EsQ0FBQTtjQUNkLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUM5SSxNQUFNLEVBQUUsQ0FBQztZQUN2QztZQUNBK0ksU0FBUyxHQUFHLElBQUlqSixHQUFHLEVBQUU7WUFFckIsQ0FBQWtKLE9BQVEsR0FBWSxFQUFFO1lBQ3RCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBQ0EsQ0FBQUMsUUFBUyxHQUFZLEVBQUU7WUFDdkIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBQyxRQUFTLEdBQVksRUFBRTtZQUN2QixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLENBQUFDLE1BQU8sR0FBWSxFQUFFO1lBQ3JCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUFoSCxZQUFZO2NBQUU5QixFQUFFLEdBQUdtSDtZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRW5ILEVBQUU7Z0JBQUU2SCxPQUFPLEVBQUUsS0FBSztnQkFBRTNGLFFBQVEsRUFBRXJCLFNBQUEsQ0FBQW1IO2NBQWlCLENBQUUsQ0FBQztZQUMzRDtZQUVBLE1BQU16RixJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsTUFBTTtnQkFBRUksTUFBTTtnQkFBRWIsSUFBSTtnQkFBRWM7Y0FBSyxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNOLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRXZELElBQUksQ0FBQ0ksTUFBTSxJQUFJQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUlBLEtBQUssQ0FBQ2tHLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7a0JBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7a0JBQ3RCLElBQUksQ0FBQ3BHLEtBQUssR0FBRyxHQUFHO2tCQUNoQjs7Z0JBR0QsSUFBSSxDQUFDbUcsS0FBSyxHQUFHLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQ25HLEtBQUssR0FBR0EsS0FBSzs7Y0FFbkIsSUFBSSxDQUFDRCxNQUFNLEVBQUUsTUFBTSxJQUFJSSxLQUFLLENBQUMsb0JBQW9CLENBQUM7Y0FFbEQsSUFBSSxDQUFDakIsSUFBSSxDQUFDK0csTUFBTSxFQUFFO2dCQUNqQm5GLE9BQU8sQ0FBQ3VGLElBQUksQ0FBQyxpQ0FBaUMsRUFBRW5ILElBQUksQ0FBQztnQkFDckQ7O2NBRUQsSUFBSSxDQUFDa0gsU0FBUyxHQUFHLElBQUk7Y0FFckIsTUFBTUosT0FBTyxHQUFHOUcsSUFBSSxDQUFDK0csTUFBTSxDQUFDSyxJQUFJLENBQy9CQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsS0FBS0QsQ0FBQyxDQUFDRSxHQUFHLEtBQUt0RixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ2xCLEVBQUUsSUFBSW9KLENBQUMsQ0FBQ3BKLEVBQUUsS0FBS2dFLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDbEIsRUFBRSxDQUFDLENBQ2xHO2NBQ0QsSUFBSSxDQUFDLENBQUE2SSxPQUFRLEdBQUdBLE9BQU87Y0FDdkIsSUFBSSxDQUFDcEosS0FBSyxHQUFHc0MsSUFBSSxDQUFDK0csTUFBTTtjQUN4QixNQUFNUyxXQUFXLEdBQUdDLE1BQU0sSUFBRztnQkFDNUIsSUFBSUEsTUFBTSxDQUFDQyxVQUFVLEtBQUssS0FBSyxJQUFJRCxNQUFNLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7a0JBQzNELElBQUksQ0FBQyxDQUFBZCxRQUFTLENBQUN2SSxJQUFJLENBQUNtSixNQUFNLENBQUM7a0JBQzNCOztnQkFFRCxJQUFLWCxPQUFPLElBQUksQ0FBQ1csTUFBTSxDQUFDQyxVQUFVLElBQUtELE1BQU0sQ0FBQ0UsT0FBTyxFQUFFO2tCQUN0RCxJQUFJLENBQUMsQ0FBQWQsUUFBUyxDQUFDdkksSUFBSSxDQUFDbUosTUFBTSxDQUFDO2tCQUMzQjs7Z0JBRURBLE1BQU0sQ0FBQ0gsSUFBSSxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQVYsUUFBUyxDQUFDdEksSUFBSSxDQUFDbUosTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFkLE9BQVEsQ0FBQ3JJLElBQUksQ0FBQ21KLE1BQU0sQ0FBQztjQUNyRixDQUFDO2NBQ0QsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBRy9HLElBQUksQ0FBQytHLE1BQU07Y0FDMUIvRyxJQUFJLENBQUMrRyxNQUFNLENBQUMvSSxPQUFPLENBQUN3SixXQUFXLENBQUM7Y0FFaEMsT0FBT3hILElBQUk7WUFDWjtZQUVBLE1BQU00SCxJQUFJQSxDQUFDbkgsS0FBSztjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUNOLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDO1lBQzFDO1lBRUEsTUFBTW9ILE1BQU1BLENBQUNwSCxLQUFLO2NBQ2pCLElBQUksQ0FBQ29HLFFBQVEsQ0FBQ3ZJLElBQUksQ0FBQztnQkFDbEIsR0FBR21DLEtBQUs7Z0JBQ1JrSCxPQUFPLEVBQUU7ZUFDVCxDQUFDO2NBQ0YsSUFBSSxDQUFDL0csT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUNULFFBQVEsQ0FBQzBILE1BQU0sQ0FBQ3BILEtBQUssQ0FBQztZQUN6QztZQUVBLE1BQU1xSCxJQUFJQSxDQUFDckgsS0FBSztjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUNOLFFBQVEsQ0FBQzJILElBQUksQ0FBQ3JILEtBQUssQ0FBQztZQUN2QztZQUVBLE1BQU1zSCxPQUFPQSxDQUFDdEgsS0FBSztjQUNsQixJQUFJO2dCQUNIO2dCQUNBLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQzhHLEdBQUcsRUFBRSxNQUFNLElBQUl0RyxLQUFLLENBQUMsa0NBQWtDLENBQUM7Z0JBRTdFLE1BQU07a0JBQUVzRztnQkFBRyxDQUFFLEdBQUc5RyxLQUFLO2dCQUNyQjtnQkFDQSxNQUFNdUgsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBbkIsUUFBUyxDQUFDb0IsU0FBUyxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ1gsR0FBRyxLQUFLQSxHQUFHLENBQUM7Z0JBQ2pFLElBQUlTLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtrQkFDeEIsTUFBTSxJQUFJL0csS0FBSyxDQUFDLDBCQUEwQnNHLEdBQUcsYUFBYSxDQUFDOztnQkFFNUQsTUFBTSxDQUFDWSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXRCLFFBQVMsQ0FBQ3VCLE1BQU0sQ0FBQ0osWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFFOUQ7Z0JBQ0F2SCxLQUFLLENBQUM2RyxJQUFJLEtBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBWCxPQUFRLENBQUNySSxJQUFJLENBQUM2SixhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXZCLFFBQVMsQ0FBQ3RJLElBQUksQ0FBQzZKLGFBQWEsQ0FBQztnQkFDaEcsTUFBTUUsU0FBUyxHQUFHNUgsS0FBSyxDQUFDNkcsSUFBSSxLQUFLLFFBQVEsR0FBRyx1QkFBdUIsR0FBRyx3QkFBd0I7Z0JBRTlGaEgsVUFBVSxDQUFDZ0ksVUFBVSxDQUFDLE1BQUs7a0JBQzFCLElBQUksQ0FBQzFILE9BQU8sQ0FBQ3lILFNBQVMsQ0FBQztrQkFDdkIsSUFBSSxDQUFDekgsT0FBTyxDQUFDLDZCQUE2QixDQUFDO2dCQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUNSO2dCQUNBLE9BQU8sTUFBTSxJQUFJLENBQUNULFFBQVEsQ0FBQzRILE9BQU8sQ0FBQ3RILEtBQUssQ0FBQztlQUN6QyxDQUFDLE9BQU9rQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDLDhCQUE4QmEsQ0FBQyxDQUFDNkUsT0FBTyxFQUFFLEVBQUUvRixLQUFLLENBQUM7O1lBRWpFO1lBRUEsTUFBTThILE1BQU1BLENBQUM5SCxLQUFLO2NBQ2pCbUIsT0FBTyxDQUFDNEcsR0FBRyxDQUFDLHlDQUF5QyxDQUFDO2NBQ3RELE9BQU8vSCxLQUFLO2NBQ1o7WUFDRDtZQUVBLE1BQU1nSSxVQUFVQSxDQUFDaEksS0FBSztjQUNyQm1CLE9BQU8sQ0FBQzRHLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRS9ILEtBQUssQ0FBQztjQUNqRSxPQUFPQSxLQUFLO2NBQ1o7WUFDRDs7VUFDQTVCLE9BQUEsQ0FBQW1ILFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSkQsSUFBQWpFLElBQUEsR0FBQTNFLE9BQUE7VUFJQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBTU0sTUFBTzZJLGlCQUFpQjtZQUM3QixDQUFBOUQsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFDUCxDQUFBUSxRQUFTO1lBQ1Q3QyxZQUFZcUMsTUFBaUI7Y0FDNUIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQXNHLElBQUksR0FBRyxNQUFBQSxDQUFPO2NBQUV2SixJQUFJO2NBQUUsR0FBR3NCO1lBQUssSUFBcUI7Y0FBRXRCLElBQUksRUFBRTtZQUFLLENBQUUsS0FBSTtjQUNyRSxJQUFJLENBQUMsQ0FBQWdELEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUUzQyxNQUFNZ0csUUFBUSxHQUFHeEosSUFBSSxHQUFHLG1CQUFtQixHQUFHLGFBQWE7Y0FDM0QsTUFBTTtnQkFBRTBCLE1BQU07Z0JBQUViO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtQyxHQUFJLENBQUN2RCxHQUFHLENBQUMrSixRQUFRLEVBQUVsSSxLQUFLLENBQUM7Y0FFN0QsT0FBTztnQkFBRUksTUFBTTtnQkFBRWI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRFEsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFOUIsTUFBTTtnQkFBRWIsSUFBSTtnQkFBRWM7Y0FBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFCLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxlQUFlNkIsS0FBSyxDQUFDeEMsRUFBRSxFQUFFLENBQUM7Y0FFOUUsSUFBSXdDLEtBQUssRUFBRW1DLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLFdBQVcsQ0FBQzdDLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFYSxNQUFNO2dCQUFFYixJQUFJO2dCQUFFYztjQUFLLENBQUU7WUFDL0IsQ0FBQztZQUVELE1BQU04SCxNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXpHLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztnQkFFM0MsTUFBTTNDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUMsR0FBSSxDQUFDeUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUF4RyxNQUFPLENBQUNuRSxFQUFFLEVBQUUsQ0FBQztnQkFFckUsT0FBTytCLElBQUk7ZUFDWCxDQUFDLE9BQU8yQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUwsT0FBT0EsQ0FBQ2IsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztnQkFDM0MsTUFBTWtHLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMUcsR0FBSSxDQUFDWSxJQUFJLENBQUMsYUFBYSxFQUFFdEMsS0FBSyxDQUFDO2dCQUN0RCxJQUFJLENBQUNvSSxHQUFHLENBQUNoSSxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUksS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFFOUMsT0FBTzRILEdBQUc7ZUFDVixDQUFDLE9BQU9sSCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTWtHLE1BQU1BLENBQUNwSCxLQUFLLEdBQUcsRUFBRTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2dCQUMzQyxNQUFNa0csR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExRyxHQUFJLENBQUNZLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNuRSxFQUFFLFNBQVMsRUFBRXdDLEtBQUssQ0FBQztnQkFFaEYsT0FBT29JLEdBQUc7ZUFDVixDQUFDLE9BQU9sSCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTW1HLElBQUlBLENBQUNySCxLQUFLLEdBQUcsRUFBRTtjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2dCQUUzQyxNQUFNa0csR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExRyxHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsRUFBRXRDLEtBQUssQ0FBQztnQkFDM0QsT0FBT29JLEdBQUc7ZUFDVixDQUFDLE9BQU9sSCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTXdFLE9BQU9BLENBQUMxRixLQUFLLEdBQUcsRUFBRTtjQUN2QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2dCQUMzQyxNQUFNa0csR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExRyxHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsRUFBRXRDLEtBQUssQ0FBQztnQkFDM0QsSUFBSSxDQUFDb0ksR0FBRyxDQUFDaEksTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Z0JBRTlDLE9BQU80SCxHQUFHO2VBQ1YsQ0FBQyxPQUFPbEgsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1vRyxPQUFPQSxDQUFDdEgsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztnQkFDM0NmLE9BQU8sQ0FBQzRHLEdBQUcsQ0FBQy9ILEtBQUssRUFBRSxPQUFPLENBQUM7Z0JBQzNCLE1BQU1vSSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFHLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQ25FLEVBQUUsVUFBVSxFQUFFd0MsS0FBSyxDQUFDO2dCQUNqRixJQUFJLENBQUNvSSxHQUFHLENBQUNoSSxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDOztnQkFFNUQsT0FBTzRILEdBQUc7ZUFDVixDQUFDLE9BQU9sSCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTTRHLE1BQU1BLENBQUM5SCxLQUFLLEdBQUcsRUFBRTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2dCQUMzQztnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQSxPQUFPbEMsS0FBSztlQUNaLENBQUMsT0FBT2tCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0E5QyxPQUFBLENBQUFvSCxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5SEQsSUFBQWxILFNBQUEsR0FBQTNCLE9BQUE7VUFPTztVQUFVLE1BQU8wTCxNQUFPLFNBQVEvSixTQUFBLENBQUFDLElBQWU7WUFDM0NDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7WUFVekNjLFlBQVk7Y0FBRTlCLEVBQUUsR0FBR21IO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFbkgsRUFBRTtnQkFBRWdDLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsVUFBVTtnQkFBRUMsUUFBUSxFQUFFNEk7Y0FBZ0IsQ0FBRSxDQUFDO1lBQ2pGO1lBRUEsTUFBTXZJLElBQUlBLENBQUNDLEtBQUs7Y0FDZixNQUFNO2dCQUFFSSxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFZDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ1EsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFdkQsSUFBSSxDQUFDSSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJSSxLQUFLLENBQUMsMEJBQTBCSCxLQUFLLEVBQUUsQ0FBQzs7Y0FHbkQsT0FBT2QsSUFBSTtZQUNaOztVQUNBbkIsT0FBQSxDQUFBaUssTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRCxJQUFBL0osU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwQixTQUFBLEdBQUExQixPQUFBO1VBRU87VUFBVSxNQUFPNEwsYUFBYyxTQUFRakssU0FBQSxDQUFBMEcsVUFBVTtZQUl2RDFGLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0xHLFNBQVMsRUFBRSxlQUFlO2dCQUMxQkQsRUFBRSxFQUFFLFVBQVU7Z0JBQ2Q2RixPQUFPLEVBQUUsS0FBSztnQkFDZEMsSUFBSSxFQUFFMUksS0FBQSxDQUFBNEwsWUFBWTtnQkFDbEI5SSxRQUFRLEVBQUVyQixTQUFBLENBQUFvSztlQUNWLENBQUM7WUFDSDtZQUVBLE1BQU1oRCx5QkFBeUJBLENBQUN6RixLQUFLO2NBQ3BDLE9BQU8sSUFBSSxDQUFDTixRQUFRLENBQUNnRyxPQUFPLENBQUMxRixLQUFLLENBQUM7WUFDcEM7WUFFQSxNQUFNRCxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsSUFBSTtnQkFDSCxJQUFJLENBQUMyRixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxLQUFLLENBQUM1RixJQUFJLENBQUNDLEtBQUssQ0FBQztlQUN2QixDQUFDLE9BQU9rQixDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJVixLQUFLLENBQUNVLENBQUMsQ0FBQzZFLE9BQU8sQ0FBQztlQUMxQixTQUFTO2dCQUNULElBQUksQ0FBQ0osUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBdkgsT0FBQSxDQUFBbUssYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7OztVSmhDRDs7VUFFQS9GLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWdHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUtKQSxJQUFBOUYsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUEwQixTQUFBLEdBQUExQixPQUFBO1VBRUEsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDTztVQUFVLE1BQU82TCxZQUFhLFNBQVFsSyxTQUFBLENBQUFDLElBQWtCO1lBQ3BEQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQVNoSCxDQUFBd0gsV0FBWSxHQUFHLElBQUloSixHQUFHLEVBQUU7WUFDeEIsSUFBSWdKLFdBQVdBLENBQUE7Y0FDZCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDOUksTUFBTSxFQUFFLENBQUM7WUFDdkM7WUFDQStJLFNBQVMsR0FBRyxJQUFJakosR0FBRyxFQUFFO1lBRXJCLENBQUFrSixPQUFRLEdBQVksRUFBRTtZQUN0QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLENBQUFDLFFBQVMsR0FBWSxFQUFFO1lBQ3ZCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsUUFBUyxHQUFZLEVBQUU7WUFDdkIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQTlHLFlBQVk7Y0FBRTlCLEVBQUUsR0FBR21IO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFbkgsRUFBRTtnQkFBRTZILE9BQU8sRUFBRSxLQUFLO2dCQUFFM0YsUUFBUSxFQUFFckIsU0FBQSxDQUFBb0s7Y0FBb0IsQ0FBRSxDQUFDO2NBQzdENUksVUFBVSxDQUFDNkksR0FBRyxHQUFHLElBQUk7WUFDdEI7WUFFQSxNQUFNdEIsTUFBTUEsQ0FBQ3BILEtBQUs7Y0FDakIsSUFBSSxDQUFDb0csUUFBUSxDQUFDdkksSUFBSSxDQUFDO2dCQUNsQixHQUFHbUMsS0FBSztnQkFDUmtILE9BQU8sRUFBRTtlQUNULENBQUM7Y0FDRixJQUFJLENBQUMvRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsT0FBTyxNQUFNLElBQUksQ0FBQ1QsUUFBUSxDQUFDMEgsTUFBTSxDQUFDcEgsS0FBSyxDQUFDO1lBQ3pDO1lBRUEsTUFBTXFILElBQUlBLENBQUNySCxLQUFLO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ04sUUFBUSxDQUFDMkgsSUFBSSxDQUFDckgsS0FBSyxDQUFDO1lBQ3ZDO1lBRUEsTUFBTUQsSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLE1BQU07Z0JBQUVJLE1BQU07Z0JBQUViLElBQUk7Z0JBQUVjO2NBQUssQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDTixJQUFJLENBQUNDLEtBQUssQ0FBQztjQUV2RCxJQUFJLENBQUNJLE1BQU0sSUFBSUMsS0FBSyxFQUFFO2dCQUNyQixJQUFJQSxLQUFLLENBQUNrRyxJQUFJLEtBQUssR0FBRyxFQUFFO2tCQUN2QixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2tCQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO2tCQUN0QixJQUFJLENBQUNwRyxLQUFLLEdBQUcsR0FBRztrQkFDaEI7O2dCQUdELElBQUksQ0FBQ21HLEtBQUssR0FBRyxLQUFLO2dCQUNsQixJQUFJLENBQUNuRyxLQUFLLEdBQUdBLEtBQUs7O2NBRW5CLElBQUksQ0FBQ29HLFNBQVMsR0FBRyxJQUFJO2NBQ3JCLElBQUksQ0FBQ2xILElBQUksQ0FBQytHLE1BQU0sRUFBRTtnQkFDakJuRixPQUFPLENBQUN1RixJQUFJLENBQUMsaUNBQWlDLEVBQUVuSCxJQUFJLENBQUM7Z0JBQ3JEOztjQUdELE1BQU04RyxPQUFPLEdBQUc5RyxJQUFJLENBQUMrRyxNQUFNLENBQUNLLElBQUksQ0FDL0JDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUssU0FBUyxLQUFLRCxDQUFDLENBQUNFLEdBQUcsS0FBS3RGLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDbEIsRUFBRSxJQUFJb0osQ0FBQyxDQUFDcEosRUFBRSxLQUFLZ0UsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUNsQixFQUFFLENBQUMsQ0FDbEc7Y0FFRCxNQUFNdUosV0FBVyxHQUFHQyxNQUFNLElBQUc7Z0JBQzVCLElBQUlYLE9BQU8sS0FBSyxDQUFDVyxNQUFNLENBQUNDLFVBQVUsSUFBSUQsTUFBTSxDQUFDRSxPQUFPLENBQUMsRUFBRTtrQkFDdEQsSUFBSSxDQUFDLENBQUFkLFFBQVMsQ0FBQ3ZJLElBQUksQ0FBQ21KLE1BQU0sQ0FBQztrQkFDM0I7O2dCQUVELElBQUlBLE1BQU0sQ0FBQ0gsSUFBSSxFQUFFO2tCQUNoQkcsTUFBTSxDQUFDSCxJQUFJLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFBVixRQUFTLENBQUN0SSxJQUFJLENBQUNtSixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQWQsT0FBUSxDQUFDckksSUFBSSxDQUFDbUosTUFBTSxDQUFDO2tCQUNwRjs7Y0FFRixDQUFDO2NBQ0R6SCxJQUFJLENBQUMrRyxNQUFNLENBQUMvSSxPQUFPLENBQUN3SixXQUFXLENBQUM7Y0FFaEMsT0FBT3hILElBQUk7WUFDWjtZQUNBLE1BQU0rSCxPQUFPQSxDQUFDdEgsS0FBSztjQUNsQixJQUFJO2dCQUNIO2dCQUNBLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQzhHLEdBQUcsRUFBRSxNQUFNLElBQUl0RyxLQUFLLENBQUMsa0NBQWtDLENBQUM7Z0JBRTdFLE1BQU07a0JBQUVzRztnQkFBRyxDQUFFLEdBQUc5RyxLQUFLO2dCQUNyQjtnQkFDQSxNQUFNdUgsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBbkIsUUFBUyxDQUFDb0IsU0FBUyxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ1gsR0FBRyxLQUFLQSxHQUFHLENBQUM7Z0JBQ2pFLElBQUlTLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtrQkFDeEIsTUFBTSxJQUFJL0csS0FBSyxDQUFDLDBCQUEwQnNHLEdBQUcsYUFBYSxDQUFDOztnQkFFNUQsTUFBTSxDQUFDWSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXRCLFFBQVMsQ0FBQ3VCLE1BQU0sQ0FBQ0osWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFFOUQ7Z0JBQ0F2SCxLQUFLLENBQUM2RyxJQUFJLEtBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBWCxPQUFRLENBQUNySSxJQUFJLENBQUM2SixhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXZCLFFBQVMsQ0FBQ3RJLElBQUksQ0FBQzZKLGFBQWEsQ0FBQztnQkFDaEcsTUFBTUUsU0FBUyxHQUFHNUgsS0FBSyxDQUFDNkcsSUFBSSxLQUFLLFFBQVEsR0FBRyx1QkFBdUIsR0FBRyx3QkFBd0I7Z0JBRTlGaEgsVUFBVSxDQUFDZ0ksVUFBVSxDQUFDLE1BQUs7a0JBQzFCLElBQUksQ0FBQzFILE9BQU8sQ0FBQ3lILFNBQVMsQ0FBQztrQkFDdkIsSUFBSSxDQUFDekgsT0FBTyxDQUFDLDZCQUE2QixDQUFDO2dCQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUVSO2dCQUNBLE9BQU8sTUFBTSxJQUFJLENBQUNULFFBQVEsQ0FBQzRILE9BQU8sQ0FBQ3RILEtBQUssQ0FBQztlQUN6QyxDQUFDLE9BQU9rQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDLDhCQUE4QmEsQ0FBQyxDQUFDNkUsT0FBTyxFQUFFLEVBQUUvRixLQUFLLENBQUM7O1lBRWpFO1lBRUEsTUFBTThILE1BQU1BLENBQUM5SCxLQUFLO2NBQ2pCbUIsT0FBTyxDQUFDNEcsR0FBRyxDQUFDLHlDQUF5QyxDQUFDO2NBQ3RELE9BQU8vSCxLQUFLO2NBQ1o7WUFDRDtZQUVBLE1BQU1nSSxVQUFVQSxDQUFDaEksS0FBSztjQUNyQm1CLE9BQU8sQ0FBQzRHLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRS9ILEtBQUssQ0FBQztjQUNqRSxPQUFPQSxLQUFLO2NBQ1o7WUFDRDs7VUFDQTVCLE9BQUEsQ0FBQW9LLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoSUQsSUFBQWxILElBQUEsR0FBQTNFLE9BQUE7VUFHQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU0sTUFBTzhMLG9CQUFvQjtZQUNoQyxDQUFBL0csR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUHJDLFlBQVlxQyxNQUFvQjtjQUMvQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBc0csSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixJQUFJLENBQUMsQ0FBQXZHLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFOUIsTUFBTTtnQkFBRWI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW1DLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztjQUU5RCxPQUFPO2dCQUFFaUMsTUFBTTtnQkFBRWI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRFEsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQTBCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3dELEtBQUssQ0FBQztjQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxrQkFBa0I2QixLQUFLLENBQUN4QyxFQUFFLEVBQUUsQ0FBQztZQUN6RCxDQUFDO1lBRUQsTUFBTTJLLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBekcsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2dCQUUzQyxNQUFNM0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtQyxHQUFJLENBQUN5RyxNQUFNLENBQUMsa0JBQWtCLElBQUksQ0FBQyxDQUFBeEcsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Z0JBRXhFLE9BQU8rQixJQUFJO2VBQ1gsQ0FBQyxPQUFPMkIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1MLE9BQU9BLENBQUNiLEtBQUssR0FBRyxFQUFFO2NBQ3ZCLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2NBQzNDLE1BQU1rRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFHLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQixFQUFFdEMsS0FBSyxDQUFDO2NBRXpELE9BQU9vSSxHQUFHO1lBQ1g7WUFFQSxNQUFNaEIsTUFBTUEsQ0FBQ3BILEtBQUssR0FBRyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Z0JBQzNDLE1BQU1rRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFHLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDbkUsRUFBRSxTQUFTLEVBQUV3QyxLQUFLLENBQUM7Z0JBQ25GLElBQUksQ0FBQ29JLEdBQUcsQ0FBQ2hJLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJSSxLQUFLLENBQUMsK0JBQStCLENBQUM7O2dCQUVqRCxPQUFPNEgsR0FBRztlQUNWLENBQUMsT0FBT2xILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNbUcsSUFBSUEsQ0FBQ3JILEtBQUssR0FBRyxFQUFFO2NBQ3BCLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdkQsSUFBSSxDQUFDd0QsS0FBSyxDQUFDO2NBRTNDLE1BQU1rRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFHLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLHFCQUFxQixFQUFFdEMsS0FBSyxDQUFDO2NBRTlELElBQUksQ0FBQ29JLEdBQUcsQ0FBQ2hJLE1BQU0sRUFBRTtnQkFDaEIsSUFBSWdJLEdBQUcsQ0FBQy9ILEtBQUssQ0FBQ2tHLElBQUksS0FBSyxFQUFFLEVBQUU7a0JBQzFCLE1BQU0sSUFBSS9GLEtBQUssQ0FBQyxjQUFjLENBQUM7O2dCQUVoQyxJQUFJNEgsR0FBRyxDQUFDL0gsS0FBSyxDQUFDa0csSUFBSSxLQUFLLEVBQUUsRUFBRTtrQkFDMUIsTUFBTSxJQUFJL0YsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztnQkFFbEMsSUFBSTRILEdBQUcsQ0FBQy9ILEtBQUssQ0FBQ2tHLElBQUksS0FBSyxFQUFFLEVBQUU7a0JBQzFCLE1BQU0sSUFBSS9GLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBRW5DLE1BQU0sSUFBSUEsS0FBSyxDQUFDLGtCQUFrQixDQUFDOztjQUVwQyxPQUFPNEgsR0FBRztZQUNYO1lBRUEsTUFBTWQsT0FBT0EsQ0FBQ3RILEtBQUssR0FBRyxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Z0JBQzNDLE1BQU1rRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFHLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDbkUsRUFBRSxVQUFVLEVBQUV3QyxLQUFLLENBQUM7Z0JBQ3BGLElBQUksQ0FBQ29JLEdBQUcsQ0FBQ2hJLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJSSxLQUFLLENBQUMsNkNBQTZDLENBQUM7O2dCQUUvRCxPQUFPNEgsR0FBRztlQUNWLENBQUMsT0FBT2xILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNNEcsTUFBTUEsQ0FBQzlILEtBQUssR0FBRyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Z0JBQzNDO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBLE9BQU9sQyxLQUFLO2VBQ1osQ0FBQyxPQUFPa0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQTlDLE9BQUEsQ0FBQXFLLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7OztVQzFHRDs7VUFFQWpHLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWdHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUFKQTs7VUFFQTVCLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWdHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTVCLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWdHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTVCLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQS9GLE9BQUE7WUFDQWdHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBOUYsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUEwQixTQUFBLEdBQUExQixPQUFBO1VBa0JPO1VBQVUsTUFBT2dNLFlBQWEsU0FBUXJLLFNBQUEsQ0FBQUMsSUFBbUI7WUFDckRDLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7WUFXakQsQ0FBQXdILFdBQVk7WUFDWixDQUFBNEMsT0FBUTtZQUVSdEosWUFBWTtjQUFFOUIsRUFBRSxHQUFHbUg7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVuSCxFQUFFO2dCQUFFZ0MsRUFBRSxFQUFFLFVBQVU7Z0JBQUVDLFNBQVMsRUFBRSxjQUFjO2dCQUFFQyxRQUFRLEVBQUVyQixTQUFBLENBQUF3SztjQUFvQixDQUFFLENBQUM7WUFDekY7WUFFQSxNQUFNOUksSUFBSUEsQ0FBQTtjQUNULE1BQU0sSUFBSSxDQUFDakMsT0FBTztjQUVsQixNQUFNO2dCQUFFc0MsTUFBTTtnQkFBRUMsS0FBSztnQkFBRWQ7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNRLElBQUksRUFBRTtjQUNsRCxJQUFJLENBQUNLLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlJLEtBQUssQ0FBQyw2QkFBNkJILEtBQUssRUFBRSxDQUFDOztjQUd0RCxJQUFJLENBQUMsQ0FBQTJGLFdBQVksR0FBR3pHLElBQUksQ0FBQ3lHLFdBQVc7Y0FDcEMsSUFBSSxDQUFDLENBQUE0QyxPQUFRLEdBQUdySixJQUFJLENBQUNxSixPQUFPO2NBRTVCLE9BQU9ySixJQUFJO1lBQ1o7O1VBQ0FuQixPQUFBLENBQUF1SyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRELElBQUFySCxJQUFBLEdBQUEzRSxPQUFBO1VBRUEsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUVNLE1BQU9rTSxvQkFBcUIsU0FBUW5NLE1BQUEsQ0FBQUksYUFBbUM7WUFDNUUsQ0FBQTRFLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBRVByQyxZQUFZcUMsTUFBb0I7Y0FDL0IsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQTVCLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakIsSUFBSSxDQUFDLENBQUEyQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN2RCxJQUFJLENBQUN3RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRTlCLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVkO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsZ0JBQWdCLENBQUM7Y0FFckU7OztjQUdBLElBQUksQ0FBQ2lDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2tCQUNOQSxNQUFNLEVBQUUsSUFBSTtrQkFDWmIsSUFBSSxFQUFFO29CQUNMeUcsV0FBVyxFQUFFLEVBQUU7b0JBQ2Y0QyxPQUFPLEVBQUU7c0JBQUVwTCxFQUFFLEVBQUVnRSxRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ2xCLEVBQUU7c0JBQUVzTCxJQUFJLEVBQUV0SCxRQUFBLENBQUFTLGNBQWMsQ0FBQ3ZELElBQUksQ0FBQ3FLO29CQUFXOztpQkFFN0U7O2NBR0YsT0FBTztnQkFBRTNJLE1BQU07Z0JBQUViO2NBQUksQ0FBRTtZQUN4QixDQUFDOztVQUNEbkIsT0FBQSxDQUFBeUssb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNELElBQUFHLE1BQUEsR0FBQXJNLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBRU87VUFBVSxNQUFPc00sSUFBSyxTQUFRRCxNQUFBLENBQUFDLElBQVE7WUFDNUN6SyxVQUFVLEdBQUcsQ0FDWixJQUFJLEVBQ0osV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsT0FBTyxFQUNQLGFBQWEsRUFDYixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sQ0FDUDtZQUdELENBQUFrRCxHQUFJO1lBQ0osQ0FBQXdILE9BQVEsR0FBcUIsSUFBSWxNLEdBQUcsRUFBRTtZQUN0QyxDQUFBbU0sTUFBTyxHQUFZLEtBQUs7WUFDeEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFJQSxJQUFJRCxPQUFPQSxDQUFBO2NBQ1YsT0FBTztnQkFDTmpNLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFpTSxPQUFRLENBQUNoTSxNQUFNLEVBQUU7ZUFDakM7WUFDRjtZQUVBLENBQUFxQyxJQUFLO1lBQ0wsSUFBSTZKLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0MsR0FBRyxHQUFHLEVBQUU7WUFDckI7WUFFQSxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDQyxLQUFLLEVBQUVDLFFBQVE7WUFDNUI7WUFDQSxDQUFBL0MsU0FBVSxHQUFZLEtBQUs7WUFDM0IsSUFBSWxILElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSWtLLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxDQUFDO2dCQUFFak0sRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFBRXNMLElBQUksRUFBRSxJQUFJLENBQUNDLFdBQVc7Z0JBQUVXLE1BQU0sRUFBRTtjQUFNLENBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBUixPQUFRLENBQUNoTSxNQUFNLEVBQUUsQ0FBQztZQUM1RjtZQUVBLElBQUl5TSxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBTyxDQUFDLENBQUM5SixVQUFVLENBQUMrSixZQUFZLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztZQUN2RTtZQUVBLENBQUFDLFFBQVMsR0FBWSxLQUFLO1lBQzFCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0F4SyxZQUFZVSxLQUFLO2NBQ2hCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxLQUFLO2dCQUNSeEIsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsZUFBZSxFQUNmLE9BQU8sRUFDUCxhQUFhLEVBQ2IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsT0FBTztlQUVSLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQWtELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DO2NBQ0E7WUFDRDtZQUVBLE1BQU1oQyxJQUFJQSxDQUFDO2NBQUVnSyxLQUFLLEdBQUc7WUFBSyxDQUFFLEdBQUcsRUFBRTtjQUNoQyxJQUFJO2dCQUNILElBQUksQ0FBQ3BFLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUMsQ0FBQWpFLEdBQUksQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDO2dCQUU1QixNQUFNbEMsS0FBSyxHQUF3QixFQUFFO2dCQUNyQyxJQUFJK0osS0FBSyxFQUFFL0osS0FBSyxDQUFDK0osS0FBSyxHQUFHLElBQUk7Z0JBRTdCLE1BQU0vSSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVUsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLFdBQVcsRUFBRTZCLEtBQUssQ0FBQztnQkFDeEQsSUFBSWdCLFFBQVEsQ0FBQ1gsS0FBSyxJQUFJVyxRQUFRLENBQUNYLEtBQUssRUFBRWtHLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ25ELElBQUksQ0FBQyxDQUFBdUQsUUFBUyxHQUFHLElBQUk7a0JBQ3JCLE9BQU85SSxRQUFROztnQkFFaEIsSUFBSSxDQUFDLENBQUE4SSxRQUFTLEdBQUcsS0FBSztnQkFDdEIsSUFBSSxDQUFDLENBQUF2SyxJQUFLLEdBQUd5QixRQUFRLENBQUN6QixJQUFJO2dCQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUN5SyxPQUFPLEVBQUU7a0JBQ3ZCLElBQUksQ0FBQyxDQUFBekssSUFBSyxDQUFDeUssT0FBTyxDQUFDQyxJQUFJLENBQUMxTSxPQUFPLENBQUNtTCxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFRLE9BQVEsQ0FBQ3RMLEdBQUcsQ0FBQzhLLEdBQUcsQ0FBQ2xMLEVBQUUsRUFBRWtMLEdBQUcsQ0FBQyxDQUFDOztnQkFFdkUsSUFBSSxDQUFDMUgsUUFBUSxDQUFDWixNQUFNLEVBQUUsTUFBTSxJQUFJSSxLQUFLLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdELE1BQU0sSUFBSSxDQUFDNUMsR0FBRyxDQUFDb0QsUUFBUSxDQUFDekIsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUNZLE9BQU8sQ0FBQyxhQUFhLENBQUM7ZUFDM0IsQ0FBQyxPQUFPZSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUN5RSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNdUUsS0FBS0EsQ0FBQ0MsYUFBYTtjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQ3hFLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUMsQ0FBQWpFLEdBQUksQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDO2dCQUU1QixNQUFNbEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGNBQWMsRUFBRTtrQkFBRTZILGFBQWE7a0JBQUUsR0FBRyxJQUFJLENBQUNDLGFBQWE7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNqRyxJQUFJLENBQUNwSixRQUFRLENBQUNaLE1BQU0sRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztnQkFFakUsTUFBTSxJQUFJLENBQUM1QyxHQUFHLENBQUNvRCxRQUFRLENBQUN6QixJQUFJLENBQUM7Z0JBRTdCLElBQUksSUFBSSxDQUFDMkMsS0FBSyxFQUFFO2tCQUNmLE1BQU0sSUFBSSxDQUFDbkMsSUFBSSxFQUFFOztnQkFFbEIsSUFBSSxDQUFDLENBQUFSLElBQUssR0FBR3lCLFFBQVEsQ0FBQ3pCLElBQUk7Z0JBQzFCLElBQUksQ0FBQyxDQUFBNEosTUFBTyxHQUFHLElBQUk7Z0JBQ25CLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT2pJLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxLQUFLO2VBQ1osU0FBUztnQkFDVCxJQUFJLENBQUN5RSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNMEUsV0FBV0EsQ0FBQ0MsU0FBUztjQUMxQixJQUFJO2dCQUNILElBQUksQ0FBQzNFLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUMsQ0FBQWpFLEdBQUksQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDO2dCQUM1QixNQUFNbEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGNBQWMsRUFBRTtrQkFBRWdJO2dCQUFTLENBQUUsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLENBQUEvSyxJQUFLLEdBQUd5QixRQUFRLENBQUN6QixJQUFJO2dCQUUxQixJQUFJLENBQUN5QixRQUFRLENBQUNaLE1BQU0sRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0QsTUFBTSxJQUFJLENBQUM1QyxHQUFHLENBQUNvRCxRQUFRLENBQUN6QixJQUFJLENBQUM7Z0JBQzdCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBTzJCLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlWLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztlQUN4QyxTQUFTO2dCQUNULElBQUksQ0FBQ21GLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU00RSxRQUFRQSxDQUFDRCxTQUFTO2NBQ3ZCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDM0UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBakUsR0FBSSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDRSxLQUFLLENBQUM7Z0JBQzVCLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVUsR0FBSSxDQUFDWSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7a0JBQUVnSTtnQkFBUyxDQUFFLENBQUM7Z0JBRXZFLElBQUksQ0FBQ3RKLFFBQVEsQ0FBQ1osTUFBTSxFQUFFLE1BQU0sSUFBSUksS0FBSyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3RCxJQUFJLENBQUMsQ0FBQWpCLElBQUssR0FBR3lCLFFBQVEsQ0FBQ3pCLElBQUk7Z0JBQzFCLE1BQU0sSUFBSSxDQUFDM0IsR0FBRyxDQUFDb0QsUUFBUSxDQUFDekIsSUFBSSxDQUFDO2dCQUM3QixPQUFPeUIsUUFBUSxDQUFDekIsSUFBSSxDQUFDOEosR0FBRyxJQUFJLEVBQUU7ZUFDOUIsQ0FBQyxPQUFPbkksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDeUUsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTTZFLFNBQVNBLENBQUNqRSxJQUFJO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQUUsU0FBVSxFQUFFLE9BQU8sSUFBSTtnQkFDaEMsSUFBSSxDQUFDZCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLENBQUFqRSxHQUFJLENBQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUNFLEtBQUssQ0FBQztnQkFFNUIsTUFBTWxCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBVSxHQUFJLENBQUN2RCxHQUFHLENBQUMsVUFBVW9JLElBQUksRUFBRSxDQUFDO2dCQUN0RCxJQUFJLENBQUN2RixRQUFRLENBQUNaLE1BQU0sRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0QsSUFBSVEsUUFBUSxDQUFDekIsSUFBSSxDQUFDa0wsS0FBSyxFQUFFO2tCQUN4QjVLLFVBQVUsQ0FBQytKLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLGlCQUFpQixFQUFFbkUsSUFBSSxDQUFDO2tCQUN4RCxJQUFJLENBQUMsQ0FBQUUsU0FBVSxHQUFHLElBQUk7O2dCQUd2QixPQUFPekYsUUFBUSxDQUFDekIsSUFBSSxDQUFDa0wsS0FBSztlQUMxQixDQUFDLE9BQU92SixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUN5RSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQWMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDaEIsTUFBTUYsSUFBSSxHQUFHMUcsVUFBVSxDQUFDK0osWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Y0FDL0QsSUFBSSxDQUFDdEQsSUFBSSxFQUFFLE9BQU8sS0FBSztjQUV2QixPQUFPLElBQUksQ0FBQ2lFLFNBQVMsQ0FBQ2pFLElBQUksQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTW9FLE9BQU9BLENBQUE7Y0FDWixJQUFJLElBQUksQ0FBQyxDQUFBbEUsU0FBVSxFQUFFLE9BQU8sSUFBSTtjQUNoQyxJQUFJLENBQUNkLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBakUsR0FBSSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDRSxLQUFLLENBQUM7Y0FFNUIsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUN2RCxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUE2SyxJQUFBLEdBQUFBLElBQUEiLCJpZ25vcmVMaXN0IjpbXX0=