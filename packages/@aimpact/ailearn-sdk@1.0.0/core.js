System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/media-manager@0.0.1-beta.1/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.3.0/users"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Entities) {
      dependency_2 = _beyondJsReactive120Entities;
    }, function (_aimpactChatSdk130Core) {
      dependency_3 = _aimpactChatSdk130Core;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactMediaManager001Beta1Uploader) {
      dependency_7 = _aimpactMediaManager001Beta1Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk130Users) {
      dependency_10 = _aimpactChatSdk130Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 3897669694,
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
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'token']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJ0cmFja2luZyIsIm1hdGVyaWFscyIsInJlc291cmNlcyIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJjaGF0TW9kZWwiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFzc2Vzc21lbnQiLCJhc3NpZ21lbnQiLCJhc3NpZ25tZW50IiwiY29uc3RydWN0b3IiLCJkYXRhIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsIm9uIiwidHJpZ2dlciIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJjcmVkaXRzIiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY29uc3VtZUNvaW5zIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbGxlY3Rpb24iLCJpbnN0YW5jZXMiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJsb2FkQ2hhdCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbXMiLCJDb2xsZWN0aW9uIiwiZ29vZ2xlQ2xhc3Nyb29tc0lkcyIsIlNldCIsImdvb2dsZUNsYXNzcm9vbXMiLCJyZWFkeSIsImxvY2FsZGIiLCJpdGVtIiwiQ2xhc3Nyb29tIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJpbXBvcnRGcm9tR29vZ2xlQ2xhc3Nyb29tIiwiaW1wb3J0cyIsImZldGNoaW5nIiwiZmlsdGVyIiwiZXh0ZXJuYWwiLCJhZGQiLCJtZXNzYWdlIiwiYXNzaWdubWVudHMiLCJhc2lnbWVudHMiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsImlzQWRtaW4iLCJwZW9wbGUiLCJjb2RlIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJ3YXJuIiwic29tZSIsImkiLCJyb2xlIiwidWlkIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwiaW52aXRlZCIsInNhdmUiLCJpbnZpdGUiLCJqb2luIiwiYXBwcm92ZSIsInBlbmRpbmdJbmRleCIsImZpbmRJbmRleCIsInAiLCJwZW5kaW5nTWVtYmVyIiwic3BsaWNlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsInJlamVjdCIsImxvZyIsInVwZGF0ZVJvbGUiLCJsaXN0IiwiZW5kcG9pbnQiLCJkZWxldGUiLCJyZXMiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvblByb3ZpZGVyIiwiZW50aXR5Iiwib3JnIiwiZnJlZVRyaWFsIiwiTWV0YWRhdGEiLCJzY2hvb2xzIiwibG9nZ2VkIiwiQ3JlZGl0c0RhdGEiLCJhcmdzIiwiQ3JlZGl0cyIsImRlZmF1bHRWYWx1ZSIsImNvbnN1bWVkIiwiY291bnQiLCJzdWJzY3JpcHRpb24iLCJyZW5ld2FsIiwibW9kdWxlcyIsImVsZW1lbnQiLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL21ldGFkYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0LWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXRzLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaW5kZXgudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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