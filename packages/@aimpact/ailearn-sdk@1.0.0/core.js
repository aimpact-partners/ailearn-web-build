System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.3.0/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, Organizations, Organization, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
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
    Metadata: void 0,
    CreditsData: void 0,
    Credits: void 0,
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
    }, function (_aimpactChatSdk130Core) {
      dependency_3 = _aimpactChatSdk130Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk130Users) {
      dependency_10 = _aimpactChatSdk130Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
        hash: 1546506862,
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
                console.log(33, params, type);
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
        hash: 1675689865,
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
        hash: 4287445599,
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
            // get people() {
            // 	return this.#people;
            // }
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
        hash: 1002815132,
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
        hash: 4281396465,
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
            entity = 'organization';
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
              this.#isAdmin = isAdmin;
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
            async freeTrial() {
              return this.provider.freeTrial();
            }
          }
          exports.Organization = Organization;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 2348014567,
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
        hash: 2043932562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Metadata = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 735895709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsData = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 3122603724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(...args) {
              super({
                properties: ['subscription', 'modules', 'assignments'],
                ...args
              });
              const defaultValue = {
                consumed: 0,
                count: 0
              };
              if (!this.subscription) this.subscription = {
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
        hash: 3936297865,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 665489209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 2318257281,
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
            properties = ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'metadata', 'roles', 'token'];
            #api;
            #organizations;
            #logged = false;
            get logged() {
              return this.#logged;
            }
            entity = 'user';
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
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', 'token']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJ0cmFja2luZyIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJjaGF0TW9kZWwiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFzc2Vzc21lbnQiLCJhc3NpZ21lbnQiLCJhc3NpZ25tZW50IiwiY29uc3RydWN0b3IiLCJkYXRhIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwibG9nIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbGxlY3Rpb24iLCJpbnN0YW5jZXMiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJsb2FkQ2hhdCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbXMiLCJDb2xsZWN0aW9uIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsIlNldCIsImdvb2dsZUNsYXNzcm9vbXMiLCJyZWFkeSIsImxvY2FsZGIiLCJpdGVtIiwiQ2xhc3Nyb29tIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJpbXBvcnRGcm9tR29vZ2xlQ2xhc3Nyb29tIiwiaW1wb3J0cyIsImZldGNoaW5nIiwiZmlsdGVyIiwiZXh0ZXJuYWwiLCJhZGQiLCJtZXNzYWdlIiwiYXNzaWdubWVudHMiLCJhc2lnbWVudHMiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsImlzQWRtaW4iLCJwZW9wbGUiLCJjb2RlIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJ3YXJuIiwic29tZSIsImkiLCJyb2xlIiwidWlkIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwiaW52aXRlZCIsInNhdmUiLCJpbnZpdGUiLCJqb2luIiwiYXBwcm92ZSIsInBlbmRpbmdJbmRleCIsImZpbmRJbmRleCIsInAiLCJwZW5kaW5nTWVtYmVyIiwic3BsaWNlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJsaXN0IiwiZW5kcG9pbnQiLCJkZWxldGUiLCJyZXMiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvblByb3ZpZGVyIiwiZW50aXR5Iiwib3JnIiwiZnJlZVRyaWFsIiwiTWV0YWRhdGEiLCJzY2hvb2xzIiwibG9nZ2VkIiwiQ3JlZGl0c0RhdGEiLCJhcmdzIiwiQ3JlZGl0cyIsImRlZmF1bHRWYWx1ZSIsImNvbnN1bWVkIiwiY291bnQiLCJzdWJzY3JpcHRpb24iLCJyZW5ld2FsIiwibW9kdWxlcyIsImVsZW1lbnQiLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL21ldGFkYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0LWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXRzLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaW5kZXgudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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