System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32-beta.12/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
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
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactHttpSuite103Api) {
      dependency_5 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Beta12Config) {
      dependency_6 = _aimpactAilearnApp0032Beta12Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_8 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk100Users) {
      dependency_10 = _aimpactChatSdk100Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/media-manager/uploader', dependency_8], ['@aimpact/ailearn-sdk/learning-modules', dependency_9], ['@aimpact/chat-sdk/users', dependency_10]]);
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
        hash: 2579949282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/chat-sdk/core");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class AssignmentActivity extends _entities.Item {
            /**
             * TODO: Add activity properties
             */
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'resources', 'chat', 'credits', 'data' // represents the tracking data
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
            #backendId;
            #chatLoaded;
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
              const {
                status,
                error,
                data
              } = await super.load(specs);
              await this.set(data.activity);
              this.#backendId = data.id;
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
              if (this.chat?.id) {
                this.loadInteraction();
              }
              this.trigger('change');
            }
            async loadInteraction() {
              if (this.#chatLoaded) return this.#chatLoaded;
              this.#chatLoaded = new _core2.PendingPromise();
              const chat = new _core.Chat({
                id: this.chat.id
              });
              await chat.loadAll();
              this.#chatModel = chat;
              this.#chatLoaded.resolve();
              this.triggerEvent('chat.loaded');
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
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 311901916,
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
            spoken1 = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data,
                error
              } = await this.#api.post('activities/spoken/completion', specs);
              if (error) {
                throw new Error('error loading activity');
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
        hash: 3586450762,
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
            constructor({
              id = undefined,
              data
            } = {}) {
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
        hash: 3040313315,
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
                storeName: 'Classrooms',
                db: 'chat-api',
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
        hash: 959512517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
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
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Classrooms',
                provider: _provider.ClassroomProvider
              });
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) throw new Error('ERROR_GETTING_DATA');
              if (!data.people) {
                console.warn('No people found in organization', data);
                return;
              }
              const checkMember = person => {
                if (!person.authorized) {
                  this.#pendings.push(person);
                  return;
                }
                person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
              };
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
                this.trigger(eventName);
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
        hash: 1782952152,
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
            list = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/classrooms`);
              return {
                status,
                data
              };
            };
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/classrooms/${specs.id}`);
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
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
                if (!res.status) {
                  throw new Error('error publishing classroom');
                }
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
        hash: 3824495706,
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
        hash: 2854716733,
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
                db: 'chat-api',
                storeName: 'Organizations',
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
                data
              } = await super.load(specs);
              if (!status) throw new Error('ERROR_GETTING_DATA');
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
                this.trigger(eventName);
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
        hash: 3778215740,
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
            #api;
            #schools = new Map();
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
            properties = ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'roles', 'token'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIl9jb3JlMiIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImJhY2tlbmRJZCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJwZW9wbGUiLCJ3YXJuIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwicm9sZSIsInNhdmUiLCJpbnZpdGUiLCJpbnZpdGVkIiwiam9pbiIsImFwcHJvdmUiLCJ1aWQiLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsImV2ZW50TmFtZSIsInJlamVjdCIsImxvZyIsInVwZGF0ZVJvbGUiLCJsaXN0IiwiZGVsZXRlIiwicmVzIiwiR0NsYXNzIiwiR0NsYXNzZXNQcm92aWRlciIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsIm9yZyIsImNvZGUiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJvcmdhbml6YXRpb25zIiwiZW50aXR5IiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJnZXRQcm9wZXJ0aWVzIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJ2YWxpZGF0ZSIsImdldEFjY2VzcyIsInZhbGlkIiwic2V0SXRlbSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtjQUVuQkQsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNVLEdBQUcsQ0FBQ0QsRUFBRSxDQUFD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