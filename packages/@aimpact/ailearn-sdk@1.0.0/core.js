System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-20/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
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
    }, function (_aimpactChatSdk100Core) {
      dependency_3 = _aimpactChatSdk100Core;
    }, function (_aimpactHttpSuite103Api) {
      dependency_4 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0046Dev20Config) {
      dependency_5 = _aimpactAilearnApp0046Dev20Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk100Users) {
      dependency_10 = _aimpactChatSdk100Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
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
        hash: 122269618,
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
            get googleClassroomsIds() {}
            #googleClassrooms = [];
            get googleClassrooms() {
              return this.#googleClassrooms;
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
        hash: 3183367991,
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
              const isAdmin = data.people.some(i => i.role === 'admin' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
                if (isAdmin && !person.authorized) {
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
        hash: 351780767,
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
        hash: 1403387670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          /*bundle*/
          class Organization extends _entities.Item {
            properties = ['id', 'name', 'description', 'owner', 'people', 'joinSpecs', 'owner', 'people'];
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
              const checkMember = person => {
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                  return;
                }
                if (!person.authorized || person.invited) {
                  this.#pendings.push(person);
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
        hash: 3767104444,
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
            properties = ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'roles', 'token'];
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
            constructor(specs) {
              super({
                ...specs,
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'token']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }

            async load() {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.get('/users/me');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJ0cmFja2luZyIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJjaGF0TW9kZWwiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFzc2Vzc21lbnQiLCJhc3NpZ21lbnQiLCJhc3NpZ25tZW50IiwiY29uc3RydWN0b3IiLCJkYXRhIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbGxlY3Rpb24iLCJpbnN0YW5jZXMiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJsb2FkQ2hhdCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbXMiLCJDb2xsZWN0aW9uIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsIlNldCIsImdvb2dsZUNsYXNzcm9vbXMiLCJsb2NhbGRiIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJpc0FkbWluIiwicGVvcGxlIiwiY29kZSIsImZvdW5kIiwiaGFzQWNjZXNzIiwid2FybiIsInNvbWUiLCJpIiwicm9sZSIsInVpZCIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiYXV0aG9yaXplZCIsInNhdmUiLCJpbnZpdGUiLCJpbnZpdGVkIiwiam9pbiIsImFwcHJvdmUiLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsImV2ZW50TmFtZSIsInNldFRpbWVvdXQiLCJyZWplY3QiLCJsb2ciLCJ1cGRhdGVSb2xlIiwibGlzdCIsImVuZHBvaW50IiwiZGVsZXRlIiwicmVzIiwiR0NsYXNzIiwiR0NsYXNzZXNQcm92aWRlciIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsIm9yZyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIlVzZXIiLCJzY2hvb2xzIiwibG9nZ2VkIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsIm9yZ2FuaXphdGlvbnMiLCJlbnRpdHkiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZWFjaGVyIiwib3JncyIsImxvZ2luIiwiZmlyZWJhc2VUb2tlbiIsImdldFByb3BlcnRpZXMiLCJhY2NlcHRUZXJtcyIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZ2V0QWNjZXNzIiwidmFsaWQiLCJzZXRJdGVtIiwiZ2V0SG9tZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtj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