System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, Organizations, Organization, Schools, School, Sessions, Faces, Session, StudentsHome, ISuggestionResponse, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    Classrooms: void 0,
    Classroom: void 0,
    GClass: void 0,
    LearningModules: void 0,
    IActivities: void 0,
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModule: void 0,
    Organizations: void 0,
    Organization: void 0,
    Schools: void 0,
    School: void 0,
    Sessions: void 0,
    Faces: void 0,
    Session: void 0,
    StudentsHome: void 0,
    ISuggestionResponse: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1111Model) {
      dependency_1 = _beyondJsReactive1111Model;
    }, function (_beyondJsReactive1111Entities) {
      dependency_2 = _beyondJsReactive1111Entities;
    }, function (_aimpactChatSdk100Core) {
      dependency_3 = _aimpactChatSdk100Core;
    }, function (_bgroupHttpSuite103Api) {
      dependency_4 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_5 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_7 = _bgroupMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_9 = _uuid2;
    }, function (_aimpactChatSdk100Api) {
      dependency_10 = _aimpactChatSdk100Api;
    }, function (_aimpactChatSdk100Users) {
      dependency_11 = _aimpactChatSdk100Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.11"], ["@bgroup/http-suite", "1.0.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@bgroup/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9], ['@aimpact/chat-sdk/api', dependency_10], ['@aimpact/chat-sdk/users', dependency_11]]);
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
        hash: 134315837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/chat-sdk/core");
          /*bundle*/
          class AssignmentActivity extends _entities.Item {
            /**
             * TODO: Add activity properties
             */
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'resources', 'chat', 'data' // represents the tracking data
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
              this.#chatLoaded = new PendingPromise();
              const chat = new _core.Chat({
                id: this.chat.id
              });
              await chat.loadAll();
              this.#chatModel = chat;
              this.#chatLoaded.resolve();
              this.triggerEvent('chat.loaded');
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 139511691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@bgroup/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@bgroup/media-manager/uploader");
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
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/assessment
      ****************************************/

      ims.set('./assignments/assessment', {
        hash: 3662865129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@aimpact/chat-sdk/core");
          var _uploader = require("@bgroup/media-manager/uploader");
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
        hash: 702742753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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
        hash: 1798856273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 2815112242,
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
              const {
                status,
                error,
                data
              } = await super.load(specs);
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
        hash: 3054821920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _api = require("@bgroup/http-suite/api");
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
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
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
        hash: 2480259260,
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

      /*********************************
      INTERNAL MODULE: ./classrooms/item
      *********************************/

      ims.set('./classrooms/item', {
        hash: 678984796,
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
            properties = ['id', 'name', 'description', 'section', 'external', 'join', 'owner', 'people'];
            #assignments = new Map();
            get assignments() {
              return [...this.#assignments.values()];
            }
            asigments = new Map();
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
                data
              } = await this.provider.loadById(specs);
              super.set(data);
              return data;
            }
            async save(specs) {
              return await this.provider.publish(specs);
            }
            async invite(specs) {
              return await this.provider.invite(specs);
            }
            async join(specs) {
              return await this.provider.join(specs);
            }
            async approve(specs) {
              return await this.provider.approve(specs);
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
        hash: 2223894586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomProvider = void 0;
          var _api = require("@bgroup/http-suite/api");
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
            loadById = async specs => {
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
                console.log(specs, 'specs');
                const res = await this.#api.post('/classrooms/join', specs);
                console.log(res, 'res');
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
      INTERNAL MODULE: ./modules/collection/index
      ******************************************/

      ims.set('./modules/collection/index', {
        hash: 2329555532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("../item");
          var _provider = require("./provider");
          /*bundle*/
          class LearningModules extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Modules',
                db: 'chat-api',
                item: _item.LearningModule,
                provider: _provider.ModulesProvider
              });
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./modules/collection/provider
      *********************************************/

      ims.set('./modules/collection/provider', {
        hash: 673504757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModulesProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              if (!status) {
                throw new Error('error loading module');
              }
              return {
                status,
                data: {
                  entries: data.items ?? []
                }
              };
            };
            async deleteItems(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.delete(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error deleting module');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.ModulesProvider = ModulesProvider;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/interfaces/activities
      ***********************************************/

      ims.set('./modules/interfaces/activities', {
        hash: 1670046334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./modules/interfaces/draft-improvements
      *******************************************************/

      ims.set('./modules/interfaces/draft-improvements', {
        hash: 2979653217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/interfaces/interfaces
      ***********************************************/

      ims.set('./modules/interfaces/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./modules/interfaces/learning-module
      ****************************************************/

      ims.set('./modules/interfaces/learning-module', {
        hash: 693571055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************************
      INTERNAL MODULE: ./modules/introduction/element
      **********************************************/

      ims.set('./modules/introduction/element', {
        hash: 3061474754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IntroductionElement = void 0;
          var _model = require("@beyond-js/reactive/model");
          class IntroductionElement extends _model.ReactiveModel {
            #parent;
            properties = ['id', 'type', 'value'];
            constructor(element, parent) {
              super();
              this.#parent = parent;
              if (element.type === 'assessment') element.value = JSON.parse(element.value);
              this.set(element);
            }
          }
          exports.IntroductionElement = IntroductionElement;
        }
      });

      /********************************************
      INTERNAL MODULE: ./modules/introduction/index
      ********************************************/

      ims.set('./modules/introduction/index', {
        hash: 3821615973,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@bgroup/http-suite/api");
          var _element = require("./element");
          class Introduction extends _model.ReactiveModel {
            #parent;
            #api;
            #items = new Map();
            get items() {
              return this.#items;
            }
            constructor(parent) {
              super();
              this.#parent = parent;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async get(type) {
              return this.#items.get(type);
            }
            async load() {
              try {
                await this.isReady;
                if (!this.#parent.id) {
                  throw new Error('no LessonId to load introductions');
                }
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/chats/introductions/${this.#parent.id}`);
                if (!status) {
                  throw new Error('Introduction not found');
                }
                const elements = Object.values(data.elements);
                elements.forEach(element => {
                  const instance = new _element.IntroductionElement(element, this.#parent);
                  this.#items.set(element.type, instance);
                });
              } catch (e) {
                console.error('error loading introduction', e);
              }
            }
          }
          exports.Introduction = Introduction;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./modules/introduction/interfaces
      *************************************************/

      ims.set('./modules/introduction/interfaces', {
        hash: 4198660095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/item/activities/index
      ***********************************************/

      ims.set('./modules/item/activities/index', {
        hash: 3764004889,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _suggestions = require("../../../suggestions");
          var _item = require("./item");
          var _types = require("./types");
          /**
           * type
           *
           * 1. Contenido/Teoría (ID: content-theory)
           * 2. Conversación (ID: conversation)
           * 3. Multiple-Choice (ID: multiple-choice):
           * 4. Hablado (ID: spoken)
           * 5. Escrito (ID: written) # Esta no la vamos a usar hasta que implementemos la pantalla de assignments
           */
          class Activities extends _model.ReactiveModel {
            #learningModule;
            #api;
            #parent;
            #suggestions;
            #items = new Map();
            get items() {
              return [...this.#items.values()];
            }
            get map() {
              return this.#items;
            }
            get types() {
              return _types.ActivityTypes.items;
            }
            get valid() {
              if (this.items.length === 0) return false;
              return this.items.filter(item => item.state === 'completed');
            }
            constructor(learningModule) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
            }
            setItems(data, clean = false) {
              if (clean) this.#items.clear();
              data.forEach((activity, index) => {
                if (this.#items.has(activity.id)) {
                  const item = this.#items.get(activity.id);
                  item.set(activity);
                  return;
                }
                this.#items.set(activity.id, new _item.Activity({
                  ...activity,
                  index,
                  learningModule: this.#learningModule
                }));
              });
            }
            remove(id) {
              if (!this.#items.has(id)) return;
              this.#items.delete(id);
              this.trigger('change');
              return true;
            }
            getItems() {
              const data = [];
              this.#items.forEach(item => data.push(item.getData()));
              return data;
            }
            clear() {
              this.#items.clear();
              this.trigger('change');
            }
            async add(type) {
              const activity = new _item.Activity({
                type,
                learningModule: this.#learningModule
              });
              await activity.isReady;
              this.#items.set(activity.id, activity);
              this.#learningModule.triggerEvent();
              return activity;
            }
          }
          exports.Activities = Activities;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./modules/item/activities/item
      **********************************************/

      ims.set('./modules/item/activities/item', {
        hash: 775558790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _suggestions = require("../../../suggestions");
          var _materials = require("./materials");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _factory = require("./specs/factory");
          var _types = require("./types");
          var _uuid = require("uuid");
          var _model = require("@beyond-js/reactive/model");
          /* bundle */
          class Activity extends _model.ReactiveModel {
            #properties = ['id', 'type', 'title', 'description', 'objective', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions'];
            get types() {
              return _types.ActivityTypes.items;
            }
            #dataType;
            get dataType() {
              this.#dataType = _types.ActivityTypes.get(this.type);
              return this.#dataType;
            }
            #api;
            #learningModule;
            #suggestions;
            #settingsType;
            #specs;
            get language() {
              return 'es';
            }
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            get defaultLanguage() {
              return 'es';
            }
            #materials;
            get materials() {
              return this.#materials;
            }
            set materials(value) {
              this.#materials.set(value);
            }
            /**
             * Evaluates the current state of the object based on the completeness of its materials and specifications.
             * This method assesses both `materials` and `specs` derived from the object's settings type, determining
             * if they are fully defined and non-empty. The state is categorized into one of three outcomes:
             * 'empty', 'completed', or 'processing'.
             *
             * ## States Defined:
             * - `'empty'`: Both `materials` and `specs` are either not defined or contain no valid entries.
             * - `'completed'`: All entries in both `materials` and `specs` are valid and non-empty.
             * - `'processing'`: Partial completeness is detected, where not all, but at least one, entry in either
             *   `materials` or `specs` is valid and non-empty.
             *
             * ## Preconditions:
             * - The object must have `#settingsType` property that includes `materials` and `specs` arrays.
             *   The `materials` and `specs` can contain strings or objects with a `name` property.
             * - The object must have `#materials` and `#specs` private properties used to store the actual
             *   values for materials and specifications, which are matched against `#settingsType`.
             *
             * ## Note:
             * This method relies heavily on the internal structure and initialization of `#settingsType`,
             * `#materials`, and `#specs` private properties. Ensure these are correctly set before invoking
             * `get state()`.
             *
             * @returns {string} The current state of the object: 'empty', 'completed', or 'processing'.
             */
            get state() {
              const type = this.#settingsType;
              const materials = !type.materials ? [] : type.materials?.map(item => typeof item === 'string' ? item : item.name);
              const specs = type.specs?.map(item => typeof item === 'string' ? item : item.name);
              const totalMaterials = materials.reduce((acc, item) => {
                if (Array.isArray(this.#materials[item])) {
                  return this.#materials[item].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#materials[item]) ? acc : acc + 1;
              }, 0);
              const totalSpecs = specs.reduce((acc, item) => {
                if (Array.isArray(this.#specs[item])) {
                  return this.#specs[item].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#specs[item]) ? acc : acc + 1;
              }, 0);
              if (totalMaterials === 0 && totalSpecs === 0) return 'empty';
              if (totalMaterials === materials.length && totalSpecs === specs.length) return 'completed';
              return 'processing';
            }
            get prepared() {
              const type = this.#settingsType;
              const includesObjective = type.specs.includes('objective');
              return !!this.title && !!this.description && (!includesObjective || includesObjective && !!this.specs.objective);
            }
            constructor(data) {
              super();
              this.reactiveProps(['type', 'title', 'description', 'objective', 'duration', 'language']);
              this.#learningModule = data.learningModule;
              this.id = data.id ?? (0, _uuid.v4)();
              this.#specs = _factory.ActivitySpecsFactory.get(data.type, this.#learningModule, this);
              this.#settingsType = _types.ActivityTypes.get(data.type);
              this.#materials = new _materials.ActivityMaterials(this, this.#learningModule, this.#settingsType.materials);
              if (!this.#settingsType) throw new Error(`Activity type ${data.type} not found`);
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              globalThis.a = this;
              if (data.materials) {
                this.#materials.set(data.materials, true);
              }
              this.#suggestions = new _suggestions.Suggestions();
            }
            //@ts-ignore
            set(data) {
              if (data.materials) {
                this.#materials.set(data.materials);
              }
              this.#properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                if (property === 'materials') {
                  if (typeof this.materials?.getData === 'function') {
                    output[property] = this[property]?.getData();
                  }
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            async generate(activityType, notes) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'activity',
                  id: this.#learningModule.id,
                  activity: activityType,
                  activityId: this.id,
                  language: this.language,
                  notes
                });
                this.set(data);
                this.#learningModule.saveDraft();
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param observations
             */
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required to generate a picture for the activity.');
                }
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`, {
                  url: response.url
                });
                this.picture = saveResponse.data.picture;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Activity = Activity;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./modules/item/activities/materials/index
      *********************************************************/

      ims.set('./modules/item/activities/materials/index', {
        hash: 4211499746,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterials extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            #items;
            get items() {
              return this.#items;
            }
            #api;
            #parent;
            #module;
            #questions;
            #originalData = {
              article: '',
              synthesis: '',
              introduction: '',
              flashcard: {}
            };
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              flashcard: {}
            };
            data = [];
            constructor(parent, module, settings) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = settings ? settings.map(item => typeof item === 'string' ? item : item.name) : [];
              this.#items = settings ?? [];
              this.#module = module;
              this.#parent = parent;
            }
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData, true);
            }
            async generate(name, notes) {
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent(notes);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#module.id}/activities/${this.#parent.id}/materials`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  type: this.#parent.type,
                  description: this.#parent.description,
                  article: this.article,
                  language: this.#parent.language,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating materials');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param data
             * @param persistedData  is used to overwrite values
             */
            set(data, persistedData = false) {
              if (persistedData) {
                this.#originalData = data;
              }
              this.data.push(data);
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
              this.triggerEvent();
            }
            async generateContent(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#module.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateAudio(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#module.id}/activities/${this.#parent.id}/materials/audio`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {});
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./modules/item/activities/question
      **************************************************/

      ims.set('./modules/item/activities/question', {
        hash: 1222184457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            properties = ['question', 'options', 'correctAnswer'];
            constructor(parent) {
              super();
              this.id = (0, _uuid.v4)();
              this.#parent = parent;
              this.options = [];
            }
            set(data) {
              this.properties.forEach(property => {
                if (property === 'correctAnswer') this[property] = data.correct_answer;
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
            addOption(option) {
              if (this.options.includes(option)) return;
              this.options.push(option);
              this.triggerEvent();
            }
            setCorrect(index) {
              if (this.correctAnswer === index) return;
              this.correctAnswer = index;
              this.triggerEvent();
            }
          }
          exports.ActivityQuestion = ActivityQuestion;
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/character-talk
      **************************************************************/

      ims.set('./modules/item/activities/specs/character-talk', {
        hash: 1565315943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class CharacterTalkActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective', 'character'];
            properties = ['objective', 'character'];
            #questions;
            get questions() {
              return this.#questions;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['character']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/conversation
      ************************************************************/

      ims.set('./modules/item/activities/specs/conversation', {
        hash: 834317912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ConversationActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective'];
            properties = ['objective'];
            #questions;
            get questions() {
              return this.#questions;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['kind', 'description', 'topics', 'criterias', 'activityId']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.ConversationActivitySpecs = ConversationActivitySpecs;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/factory
      *******************************************************/

      ims.set('./modules/item/activities/specs/factory', {
        hash: 3776427608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _ = require("./");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ActivitySpecsFactory {
            static TYPES = {
              default: _.ActivitySpecs,
              'multiple-choice': _multipleChoice.MultipleChoiceActivitySpecs,
              spoken: _spoken.SpokenActivitySpecs
            };
            static get(type, learningModule, parent) {
              if (!this.TYPES[type]) return new this.TYPES.default(type, learningModule, parent);
              return new this.TYPES[type](type, learningModule, parent);
              // return new this.TYPES[type](parent);
            }
          }
          exports.ActivitySpecsFactory = ActivitySpecsFactory;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/index
      *****************************************************/

      ims.set('./modules/item/activities/specs/index', {
        hash: 1510110805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _types = require("../types");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _suggestions = require("../../../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective'];
            properties = ['objective'];
            #api;
            #suggestions;
            #learningModule;
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            get hasValues() {
              const has = this.properties.reduce((acc, property) => {
                if (this[property]) return true;
                return acc;
              }, false);
              return has;
            }
            constructor(type, learningModule, parent) {
              super();
              const settings = _types.ActivityTypes.get(type);
              this.#learningModule = learningModule;
              if (!settings) {
                throw new Error(`Activity type ${type} not found`);
              }
              this.#suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = Array.isArray(settings.specs) ? settings.specs : [];
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                change = true;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
            async generate(activity, notes) {
              try {
                this.fetching = true;
                if (activity === 'multiple-choice') return this.generateQuestions(notes);
                const data = await this.#suggestions.generate({
                  type: 'specifications',
                  id: this.#learningModule.id,
                  activityId: this.#parent.id,
                  activity,
                  notes
                });
                this.set(data);
                this.trigger('specs.generated');
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            async generateQuestions(notes) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'questions',
                  id: this.#learningModule.id,
                  notes
                });
                this.set(data);
                this.trigger('specs.generated');
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            clear() {
              this.properties.forEach(property => {
                /**
                 * the objective is generated by AI, so we don't want to clear it
                 */
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/multiple-choice
      ***************************************************************/

      ims.set('./modules/item/activities/specs/multiple-choice', {
        hash: 3187511616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _question = require("../question");
          var _ = require("./");
          /**
           * criteria
           */
          class MultipleChoiceActivitySpecs extends _.ActivitySpecs {
            #parent;
            properties = ['questions', 'related'];
            #questions = [];
            get questions() {
              return this.#questions;
            }
            get questionLabels() {
              return this.questions.map(item => item.question);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (property === 'questions' && data.hasOwnProperty(property)) {
                  if (data[property]) change = true;
                  const questions = data[property]?.map((data, index) => {
                    const questionModel = this.#questions[index] ?? new _question.ActivityQuestion(this.#parent);
                    const specs = typeof data === 'string' ? {
                      question: data
                    } : data;
                    questionModel.set(specs);
                    return questionModel;
                  });
                  this.#questions = questions;
                  return;
                }
                if (!data.hasOwnProperty(property)) return;
                change = true;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'questions') {
                  output[property] = this[property].map(item => item.getData());
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            clear() {
              this.properties.forEach(property => {
                if (property === 'questions') {
                  this.#questions = [];
                  return;
                }
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
            addAnswer(index, answer) {
              if (!this.#questions[index]) {
                console.warn('Question not found, index:', index);
                return;
              }
              this.#questions[index].addOption(answer);
              this.triggerEvent();
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/spoken
      ******************************************************/

      ims.set('./modules/item/activities/specs/spoken', {
        hash: 7313450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _ = require("./");
          class SpokenActivitySpecs extends _.ActivitySpecs {
            #parent;
            properties = ['objective', 'criteria', 'task', 'assessment'];
            #api;
            #questions;
            #suggestions;
            #learningModule;
            #defaultValues = {
              criteria: [],
              task: '',
              subject: ''
            };
            constructor(type, learningModule, parent) {
              super(type, learningModule, parent);
              this.set(this.#defaultValues);
            }
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                change = true;
                let value = property === 'criteria' && !data[property] ? [] : data[property];
                this[property] = value;
              });
              if (change) this.trigger('change');
            }
            clear() {
              console.log(500);
              this.set(this.#defaultValues);
              this.trigger('change');
            }
          }
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/item/activities/types
      ***********************************************/

      ims.set('./modules/item/activities/types', {
        hash: 3418117264,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          class Types {
            #types = [{
              id: 'content-theory',
              name: 'Content/Theory',
              specs: ['objective'],
              materials: ['article', {
                required: 'article',
                name: 'synthesis'
              }, {
                required: 'article',
                name: 'dyslexia'
              }, {
                required: 'article',
                name: 'audios'
              }],
              fields: {}
            }, {
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'subject']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'role']
            }, {
              id: 'multiple-choice',
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: 'spoken',
              name: 'Spoken',
              specs: ['objective', 'assessment', 'task', {
                name: 'criteria',
                fields: ['name', 'subject']
              }]
            }];
            get items() {
              return this.#types;
            }
            #map = new Map();
            get entries() {
              return this.#map;
            }
            constructor() {
              this.#types.forEach(type => {
                this.#map.set(type.id, type);
              });
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          /*bundle*/
          const ActivityTypes = exports.ActivityTypes = new Types();
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/item/index
      ************************************/

      ims.set('./modules/item/index', {
        hash: 2292990032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _activities = require("./activities");
          var _provider = require("./provider");
          var _suggestions = require("../../suggestions");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'members', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'owner', 'pictureSuggestions', 'state', 'assignments'];
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            get defaultLanguage() {
              // return languages.current;
              return 'es';
            }
            #sessionsMap = new Map();
            get sessionsMap() {
              return this.#sessionsMap;
            }
            get valid() {
              return this.id && this.title && this.description && this.objective;
            }
            #api;
            #suggestions;
            constructor({
              id = undefined,
              type = 'module'
            } = {}) {
              // super({ id, db: 'chat-api', storeName: 'Lessons', provider: ProviderLesson });
              super({
                id,
                db: 'chat-api',
                storeName: 'Modules',
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.#suggestions = new _suggestions.Suggestions();
              this.reactiveProps(['fetchingDraft']);
              this.#activities = new _activities.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              // this.#chatIntroductions = new Introduction(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
              this.contents = {
                characteristics: 0
              };
              globalThis.model = this;
            }
            async processLoad(data) {
              if (!data) {
                throw new Error('error loading class');
              }
              if (data.activities) {
                this.#activities.add(data.activities);
              }
            }
            async set(data) {
              super.set(data);
              if (data.activities && Array.isArray(data.activities)) {
                this.#activities.setItems(data.activities, true);
              }
            }
            async addSession(classRoomId) {
              const specs = {
                moduleId: this.id,
                classRoomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              return response.data;
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#suggestions.generate({
                  id: this.id,
                  objective: this.objective,
                  type: 'module'
                });
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                if (data.activities) {
                  this.activities.setItems(data.activities);
                }
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                language: this.defaultLanguage
              };
              const response = await this.provider.saveDraft(data);
              await this.set(response);
              return response;
            }
            async refineActivities({
              observations
            }) {
              const data = {
                duration: this.duration,
                description: this.description,
                observations,
                target: this.target,
                objective: this.objective,
                id: this.id,
                audience: this.audience
              };
              const answer = await this.#suggestions.generate({
                type: 'activities',
                ...data,
                observations,
                totalActivities: 5,
                activities: this.activities.getItems()
              });
              this.set(answer);
              this.triggerEvent('activities.generated');
              return answer;
            }
            /**
             * Returns a list of suggestions to be applied to the module
             *
             *
             * {
            "status": true,
            "data": {
                "irrelevant": false,
                "improved": "Introducción a la inteligencia aumentada",
                "suggestions": [
                    {
                        "reference": "Desarrollo del pensamiento crítico y científico",
                        "suggestion": "Incluir ejemplos que demuestren el uso de la inteligencia aumentada para fomentar la reflexión crítica y comprensión de su impacto en la ciencia y sociedad."
                    }
            }
            }
             * @param param0
             * @returns
             */
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'objective',
                  id: this.id,
                  objective
                });
                /**
                 * the IDraftImprovement interface is a new structure, so now we need to adapt the response to the new structure
                 */
                return data;
                // return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * Generates a refined objective based on the improvements
             * @param objective The original objective
             * @param improvements The improvements to be applied (array of strings)
             * @returns
             */
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'objective-refinements',
                  improvements,
                  id: this.id,
                  objective
                });
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            async activitySuggestions({
              type,
              observations,
              description,
              title
            }) {
              return this.generateSugestions(type, {
                description,
                observations,
                title
              });
            }
            async publish(props) {
              this.type = 'module';
              super.publish(props);
            }
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required');
                }
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.id}/image`, {
                  url: response.url
                });
                this.picture = saveResponse.data.picture;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /***************************************
      INTERNAL MODULE: ./modules/item/provider
      ***************************************/

      ims.set('./modules/item/provider', {
        hash: 320700191,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleProvider extends _model.ReactiveModel {
            #api;
            #parent;
            #progress;
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
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              this.#parent.set(data);
              this.#parent.activities.setItems(data.activities);
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            async saveDraft(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.post(`/modules/drafts`, specs);
                if (!status) {
                  throw new Error('error saving module draft');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async getDraft(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error getting module draft');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async delete() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
                if (!status) {
                  throw new Error('error publishin module draft');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.ModuleProvider = ModuleProvider;
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
        hash: 3495768902,
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
        hash: 3912073691,
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
            properties = ['id', 'name', 'description', 'owner', 'people'];
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
            }
            async invite(specs) {
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
              data.people.forEach(person => {
                if (!person.authorized) {
                  this.#pendings.push(person);
                  return;
                }
                person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
              });
              return data;
            }
            async approve(specs) {
              return await this.provider.approve(specs);
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
        hash: 2079472175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _api = require("@bgroup/http-suite/api");
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
              const {
                status,
                data
              } = await this.#api.get(`/organizations/${specs.id}`);
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
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
              try {
                console.log(21, {
                  ...specs
                });
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post('/organizations', specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
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
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                console.log(specs, 'specs');
                const res = await this.#api.post('/organizations/join', specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
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

      /************************************
      INTERNAL MODULE: ./schools/collection
      ************************************/

      ims.set('./schools/collection', {
        hash: 3642306637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Schools = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class Schools extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Modules',
                db: 'chat-api',
                item: _item.School,
                provider: _provider.SchoolProvider
              });
            }
          }
          exports.Schools = Schools;
        }
      });

      /******************************
      INTERNAL MODULE: ./schools/item
      ******************************/

      ims.set('./schools/item', {
        hash: 598060469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.School = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          /*bundle */
          class School extends _entities.Item {
            constructor({
              id
            }) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Schools',
                provider: _provider.SchoolProvider
              });
            }
          }
          exports.School = School;
        }
      });

      /**********************************
      INTERNAL MODULE: ./schools/provider
      **********************************/

      ims.set('./schools/provider', {
        hash: 434646802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SchoolProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class SchoolProvider extends _model.ReactiveModel {
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
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              this.#parent.set(data);
              this.#parent.activities.setItems(data.activities);
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
          }
          exports.SchoolProvider = SchoolProvider;
        }
      });

      /*************************************
      INTERNAL MODULE: ./sessions/assessment
      *************************************/

      ims.set('./sessions/assessment', {
        hash: 4011598352,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@bgroup/media-manager/uploader");
          var _core = require("@aimpact/chat-sdk/core");
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

      /*************************************
      INTERNAL MODULE: ./sessions/collection
      *************************************/

      ims.set('./sessions/collection', {
        hash: 2764869129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sessions = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class Sessions extends _entities.Collection {
            item = _item.Session;
            constructor() {
              super({
                storeName: 'Sessions',
                db: 'chat-api'
              });
            }
          }
          exports.Sessions = Sessions;
        }
      });

      /********************************
      INTERNAL MODULE: ./sessions/faces
      ********************************/

      ims.set('./sessions/faces', {
        hash: 2564500033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Faces = void 0;
          /*bundle*/
          const Faces = exports.Faces = {
            outstanding: '🌟',
            'very good': '😁',
            good: '😊',
            regular: '😐',
            indifferent: '😑',
            bad: '😕',
            inappropriate: '👎'
          };
        }
      });

      /*************************************************
      INTERNAL MODULE: ./sessions/interfaces/IEvaluation
      *************************************************/

      ims.set('./sessions/interfaces/IEvaluation', {
        hash: 2105227437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./sessions/item
      *******************************/

      ims.set('./sessions/item', {
        hash: 3437748661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Session = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@bgroup/http-suite/api");
          /*bundle*/
          class Session extends _entities.Item {
            properties = ['id', 'lesson', 'classRoomId', 'users'];
            #lesson;
            #assessment;
            get url() {
              return `${_config.default.params.baseUrl}/sessions/access/${this.id}`;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Sessions'
              });
            }
            setLesson(parent) {
              this.#lesson = parent;
            }
            async load(specs = {}) {
              await this.isReady;
              if (!specs.id) specs.id = this.id;
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
            /**
             *
             * @deprecated
             */
            async publish(lessonId, classRoomId) {
              console.trace('sessions publish', lessonId, classRoomId);
              const response = await this.provider.publish(lessonId, classRoomId);
              if (!response.status) {
                throw new Error(`Error share session: ${response.error}`);
              }
              return {
                status: response.status,
                data: response?.data
              };
            }
            async access(token) {
              const api = new _api.Api(_config.default.params.apis.ailearn);
              const specs = {
                bearer: token,
                id: this.id
              };
              const response = await api.post('/sessions/access', specs);
              return response;
            }
          }
          exports.Session = Session;
        }
      });

      /************************************
      INTERNAL MODULE: ./students-home/item
      ************************************/

      ims.set('./students-home/item', {
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

      /****************************************
      INTERNAL MODULE: ./students-home/provider
      ****************************************/

      ims.set('./students-home/provider', {
        hash: 573070287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@bgroup/http-suite/api");
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

      /********************************************
      INTERNAL MODULE: ./suggestions/hardcoded-data
      ********************************************/

      ims.set('./suggestions/hardcoded-data', {
        hash: 2856762173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            module: {
              title: 'Introduction to JavaScript',
              description: 'This module provides a comprehensive overview of JavaScript, tailored for anyone interested in learning this programming language. It covers fundamental concepts and practical applications in a concise and engaging format.'
            },
            activities: [{
              type: 'content-theory',
              name: 'JavaScript Basics',
              description: 'Learn the fundamentals of JavaScript, including syntax, data types, and basic operations.',
              objective: 'Understanding basic JavaScript concepts.',
              time: 5,
              specs: {
                topics: ['Syntax', 'Variables', 'Data Types', 'Operators']
              }
            }, {
              type: 'multiple-choice',
              name: 'JavaScript Syntax Quiz',
              description: 'Test your knowledge of JavaScript syntax and basics with multiple-choice questions.',
              objective: 'Evaluating understanding of JavaScript syntax.',
              time: 5,
              specs: {
                questions: ['What is a variable in JavaScript?', 'Which symbol is used for comments in JavaScript?', 'How do you declare a function in JavaScript?']
              }
            }, {
              type: 'spoken',
              name: 'Explaining JavaScript Functions',
              description: 'Orally explain the concept and usage of functions in JavaScript.',
              objective: 'Articulating understanding of JavaScript functions.',
              time: 5,
              specs: {
                criterias: ['Clarity of Explanation', 'Correct Usage of Terms', 'Logical Structure']
              }
            }, {
              type: 'content-theory',
              name: 'Advanced JavaScript Topics',
              description: 'Delve deeper into advanced JavaScript concepts like closures, callbacks, and asynchronous programming.',
              objective: 'Understanding advanced JavaScript topics.',
              time: 5,
              specs: {
                topics: ['Closures', 'Callbacks', 'Asynchronous Programming']
              }
            }, {
              type: 'conversation',
              name: 'JavaScript in Web Development',
              description: 'Engage in a simulated conversation about the role of JavaScript in web development.',
              objective: "Discussing JavaScript's impact on web development.",
              time: 5,
              specs: {
                kind: 'theory-question-and-answer'
              }
            }, {
              type: 'written',
              name: 'JavaScript Project Proposal',
              description: 'Write a proposal for a small project that can be accomplished using JavaScript.',
              objective: 'Applying JavaScript knowledge to project planning.',
              time: 5,
              specs: {}
            }]
          };
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 1267853903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _hardcodedData = require("./hardcoded-data");
          var _core = require("@beyond-js/kernel/core");
          var _session = require("@aimpact/chat-sdk/session");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async generate(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!status) throw new Error('error generating suggestions');
                return data;
              } catch (e) {
                throw new Error(e.message);
              }
            }
            hardcodedGenerate(specs) {
              const promise = new _core.PendingPromise();
              globalThis.setTimeout(() => promise.resolve(_hardcodedData.DATA), 5000);
              return promise;
            }
            async image(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/images/generate', {
                  language: 'es',
                  ...specs
                });
                if (!response.status) throw new Error('error generating image');
                /**
                 * openai response return an array, the current model (dalle-3) generates always a unique
                 * image, so we return always the first element of the array
                 */
                return response.data[0];
              } catch (e) {
                throw new Error(e.message);
              }
            }
          }
          exports.Suggestions = Suggestions;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./suggestions/interfaces/index
      **********************************************/

      ims.set('./suggestions/interfaces/index', {
        hash: 2888578579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 1037152446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          /*bundle*/
          class User extends _users.User {
            #schools = [{
              id: 'b3lgr4ne6e-209b-40fe-923e-4df1381c8d65',
              name: 'Escuela Normal',
              entity: 'organization'
            }, {
              id: 'm4r14e6e-209b-40fe-923e-4df1381c8d65',
              name: 'Escuela Ángel Estrada',
              entity: 'organization'
            }, {
              id: 'n0rt4ne6e-209b-40fe-923e-4df1381c8d65',
              name: 'Escuela Rivadavia',
              entity: 'organization'
            }];
            get schools() {
              return {
                items: this.#schools
              };
            }
            get organizations() {
              return [{
                id: this.id,
                name: this.displayName,
                entity: 'user'
              }, ...this.#schools];
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
        "im": "./modules/collection/index",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./modules/interfaces/activities",
        "from": "IActivities",
        "name": "IActivities"
      }, {
        "im": "./modules/item/activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./modules/item/activities/types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./modules/item/index",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./organizations/collection",
        "from": "Organizations",
        "name": "Organizations"
      }, {
        "im": "./organizations/item",
        "from": "Organization",
        "name": "Organization"
      }, {
        "im": "./schools/collection",
        "from": "Schools",
        "name": "Schools"
      }, {
        "im": "./schools/item",
        "from": "School",
        "name": "School"
      }, {
        "im": "./sessions/assessment",
        "from": "Assessment",
        "name": "Assessment"
      }, {
        "im": "./sessions/collection",
        "from": "Sessions",
        "name": "Sessions"
      }, {
        "im": "./sessions/faces",
        "from": "Faces",
        "name": "Faces"
      }, {
        "im": "./sessions/item",
        "from": "Session",
        "name": "Session"
      }, {
        "im": "./students-home/item",
        "from": "StudentsHome",
        "name": "StudentsHome"
      }, {
        "im": "./suggestions/interfaces/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
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
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./modules/collection/index').LearningModules : value);
        (require || prop === 'IActivities') && _export("IActivities", IActivities = require ? require('./modules/interfaces/activities').IActivities : value);
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./modules/item/activities/item').Activity : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./modules/item/activities/types').ActivityTypes : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./modules/item/index').LearningModule : value);
        (require || prop === 'Organizations') && _export("Organizations", Organizations = require ? require('./organizations/collection').Organizations : value);
        (require || prop === 'Organization') && _export("Organization", Organization = require ? require('./organizations/item').Organization : value);
        (require || prop === 'Schools') && _export("Schools", Schools = require ? require('./schools/collection').Schools : value);
        (require || prop === 'School') && _export("School", School = require ? require('./schools/item').School : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./sessions/assessment').Assessment : value);
        (require || prop === 'Sessions') && _export("Sessions", Sessions = require ? require('./sessions/collection').Sessions : value);
        (require || prop === 'Faces') && _export("Faces", Faces = require ? require('./sessions/faces').Faces : value);
        (require || prop === 'Session') && _export("Session", Session = require ? require('./sessions/item').Session : value);
        (require || prop === 'StudentsHome') && _export("StudentsHome", StudentsHome = require ? require('./students-home/item').StudentsHome : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./suggestions/interfaces/index').ISuggestionResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibG9hZEJ5SWQiLCJzYXZlIiwiaW52aXRlIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJsb2ciLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImNsZWFuIiwiY2xlYXIiLCJBY3Rpdml0eSIsInJlbW92ZSIsImdldEl0ZW1zIiwiZ2V0RGF0YSIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJsYW5ndWFnZSIsImRlZmF1bHRMYW5ndWFnZSIsIm5hbWUiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwidG90YWxTcGVjcyIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsImdsb2JhbFRoaXMiLCJhIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlIiwiYWN0aXZpdHlUeXBlIiwibm90ZXMiLCJhY3Rpdml0eUlkIiwic2F2ZURyYWZ0IiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0Iiwic2F2ZVJlc3BvbnNlIiwicGljdHVyZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJmbGFzaGNhcmQiLCJlbXB0eURhdGEiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkFjdGl2aXR5UXVlc3Rpb24iLCJvcHRpb25zIiwiY29ycmVjdF9hbnN3ZXIiLCJhZGRPcHRpb24iLCJvcHRpb24iLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhbmdlIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIl9xdWVzdGlvbiIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJyZXF1aXJlZCIsImZpZWxkcyIsIl9hY3Rpdml0aWVzIiwic2Vzc2lvbnNNYXAiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwicmVmaW5lQWN0aXZpdGllcyIsIm9ic2VydmF0aW9ucyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJnZXREcmFmdCIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwicGVvcGxlIiwicGVyc29uIiwiYXV0aG9yaXplZCIsInJvbGUiLCJTY2hvb2xzIiwiU2Nob29sIiwiU2Nob29sUHJvdmlkZXIiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJGYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJsZXNzb24iLCJzZXRMZXNzb24iLCJsZXNzb25JZCIsInRyYWNlIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwiZGlzcGxheU5hbWUiLCJEQVRBIiwidGltZSIsInRvcGljcyIsImNyaXRlcmlhcyIsImtpbmQiLCJfaGFyZGNvZGVkRGF0YSIsImhhcmRjb2RlZEdlbmVyYXRlIiwicHJvbWlzZSIsInNldFRpbWVvdXQiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsImVudGl0eSIsIm9yZ2FuaXphdGlvbnMiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9jb2xsZWN0aW9uLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvbW9kdWxlcy9pdGVtL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9wcm92aWRlci50cyIsIi9vcmdhbml6YXRpb25zL2NvbGxlY3Rpb24udHMiLCIvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvc2Nob29scy9jb2xsZWN0aW9uLnRzIiwiL3NjaG9vbHMvaXRlbS50cyIsIi9zY2hvb2xzL3Byb3ZpZGVyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2hhcmRjb2RlZC1kYXRhLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkIsTUFBTUMsUUFBUSxHQUFHLEVBQUU7Y0FFbkJELFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLENB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