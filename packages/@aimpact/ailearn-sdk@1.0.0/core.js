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
        hash: 3877574902,
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
              return this.items.every(item => item.state === 'completed');
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
        hash: 3547877222,
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
            get learningModule() {
              return this.#learningModule;
            }
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
            get aiCompleted() {
              const type = _types.ActivityTypes.get(this.type);
              /**
               * If the type does not have AI content, then it is considered complete.
               */
              if (!type?.aiContent) return true;
              return type.aiContent.every(field => {
                if (['role', 'objective'].includes(field)) {
                  return !!this.specs[field];
                }
                return !!this[field];
              });
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
              const materials = !type.materials ? [] : type.materials?.filter(item => item.required);
              const specs = type.specs?.map(item => typeof item === 'string' ? item : item.name);
              const totalMaterials = materials.reduce((acc, item) => {
                const {
                  name
                } = item;
                if (Array.isArray(this.#materials[name])) {
                  return this.#materials[name].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#materials[name]) ? acc : acc + 1;
              }, 0);
              const totalSpecs = specs.reduce((acc, item) => {
                if (Array.isArray(this.#specs[item])) {
                  return this.#specs[item].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#specs[item]) ? acc : acc + 1;
              }, 0);
              if (totalMaterials === 0 && totalSpecs === 0) return 'processing'; // real state is 'empty'
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
                  activity: this.type,
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
            async clearContent() {
              this.specs.clear();
              this.materials.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              await this.set(specs);
              return this.#learningModule.saveDraft(specs);
            }
          }
          exports.Activity = Activity;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./modules/item/activities/materials/index
      *********************************************************/

      ims.set('./modules/item/activities/materials/index', {
        hash: 3194015669,
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
              dyslexia: '',
              introduction: '',
              flashcard: {}
            };
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            data = [];
            get empty() {
              const hasContent = this.properties.some(property => !!this[property]);
              return !hasContent;
            }
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
        hash: 3964664583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _types = require("../types");
          var _suggestions = require("../../../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective'];
            properties = ['objective'];
            #api;
            suggestions;
            learningModule;
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            get hasValues() {
              const has = this.properties.some(property => {
                if (property === 'objective') return false;
                if (this[property] && Array.isArray(this[property])) {
                  return this[property].length > 0;
                }
                return !!this[property];
              });
              return has;
            }
            get empty() {
              return !this.hasValues;
            }
            constructor(type, learningModule, parent) {
              super();
              const settings = _types.ActivityTypes.get(type);
              this.learningModule = learningModule;
              this.parent = parent;
              if (!settings) {
                throw new Error(`Activity type ${type} not found`);
              }
              this.suggestions = new _suggestions.Suggestions();
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
            async generate(activity, specs) {
              try {
                this.fetching = true;
                if (activity === 'multiple-choice') return this.generateQuestions(specs);
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.learningModule.id,
                  activityId: this.#parent.id,
                  activity,
                  ...specs
                });
                this.set(data);
                this.learningModule.saveDraft();
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

      /*********************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/multiple-choice/index
      *********************************************************************/

      ims.set('./modules/item/activities/specs/multiple-choice/index', {
        hash: 3587825143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _ = require("../");
          var _question = require("./question");
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
            get valid() {
              return this.questions.length > 0 && this.#questions.every(item => item.valid);
            }
            get isValid() {
              return this.valid;
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
                    const questionModel = this.#questions[index] ?? new _question.ActivityQuestion(this.parent);
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
            async generate(specs) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'questions',
                  id: this.learningModule.id,
                  ...specs
                });
                this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/multiple-choice/question
      ************************************************************************/

      ims.set('./modules/item/activities/specs/multiple-choice/question', {
        hash: 2809092747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _suggestions = require("../../../../../suggestions");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            suggestions;
            properties = ['question', 'options', 'correctAnswer'];
            #api;
            get valid() {
              console.log(this.question, this.options.length, this.correctAnswer);
              return !!this.question && this.options.length > 1 && !!this.correctAnswer;
            }
            constructor(parent) {
              super();
              this.id = (0, _uuid.v4)();
              this.#parent = parent;
              this.learningModule = parent.learningModule;
              this.options = [];
              this.suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
            removeOption(index) {
              this.options.splice(index, 1);
              this.triggerEvent();
            }
            setCorrect(index) {
              if (this.correctAnswer === index) return;
              this.correctAnswer = index;
              this.triggerEvent();
            }
            async generateAnswers() {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: this.question
                });
                this.set({
                  options: data.options,
                  correctAnswer: data.correct_answer
                });
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
                return data.options;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityQuestion = ActivityQuestion;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/spoken
      ******************************************************/

      ims.set('./modules/item/activities/specs/spoken', {
        hash: 3630591571,
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
        hash: 1735014290,
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
              aiContent: ['title', 'description', 'objective'],
              materials: [{
                name: 'article',
                required: true
              }, {
                dependencies: 'article',
                name: 'synthesis'
              }, {
                dependencies: 'article',
                name: 'dyslexia'
              }, {
                dependencies: ['article'],
                name: 'audios'
              }],
              fields: {}
            }, {
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role']
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
              aiContent: ['title', 'description', 'objective'],
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
        hash: 261918129,
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
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'members', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'pictureSuggestions', 'state', 'assignments'];
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
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            get completed() {
              return this.valid && this.activities.valid;
            }
            #api;
            #suggestions;
            static instances = new Map();
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
              if (!this.owner) this.owner = this.creator;
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
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
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
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
              } catch (e) {
                console.error(e);
              }
            }
            static async get(specs) {
              if (this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /***************************************
      INTERNAL MODULE: ./modules/item/provider
      ***************************************/

      ims.set('./modules/item/provider', {
        hash: 990510373,
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
        hash: 670647538,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibG9hZEJ5SWQiLCJzYXZlIiwiaW52aXRlIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJsb2ciLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsImV2ZXJ5Iiwic3RhdGUiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJjbGVhciIsIkFjdGl2aXR5IiwicmVtb3ZlIiwiZ2V0SXRlbXMiLCJnZXREYXRhIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbFNwZWNzIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiZ2xvYmFsVGhpcyIsImEiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJhY3Rpdml0eVR5cGUiLCJub3RlcyIsImFjdGl2aXR5SWQiLCJzYXZlRHJhZnQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJzYXZlUmVzcG9uc2UiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50IiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFuZ2UiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsImdlbmVyYXRlUXVlc3Rpb25zIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsInN1YmplY3QiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIl9hY3Rpdml0aWVzIiwic2Vzc2lvbnNNYXAiLCJjb21wbGV0ZWQiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJvd25lciIsImNyZWF0b3IiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwicmVmaW5lQWN0aXZpdGllcyIsIm9ic2VydmF0aW9ucyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldERyYWZ0IiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvblByb3ZpZGVyIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJwZW9wbGUiLCJwZXJzb24iLCJhdXRob3JpemVkIiwicm9sZSIsIlNjaG9vbHMiLCJTY2hvb2wiLCJTY2hvb2xQcm92aWRlciIsIlNlc3Npb25zIiwiU2Vzc2lvbiIsIkZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsImxlc3NvbiIsInNldExlc3NvbiIsImxlc3NvbklkIiwidHJhY2UiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJkaXNwbGF5TmFtZSIsIkRBVEEiLCJ0aW1lIiwidG9waWNzIiwiY3JpdGVyaWFzIiwia2luZCIsIl9oYXJkY29kZWREYXRhIiwiaGFyZGNvZGVkR2VuZXJhdGUiLCJwcm9taXNlIiwic2V0VGltZW91dCIsIl91c2VycyIsIlVzZXIiLCJzY2hvb2xzIiwiZW50aXR5Iiwib3JnYW5pemF0aW9ucyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9wcm92aWRlci50cyIsIi9jbGFzc3Jvb21zL2NvbGxlY3Rpb24udHMiLCIvY2xhc3Nyb29tcy9pdGVtLnRzIiwiL2NsYXNzcm9vbXMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9tb2R1bGVzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvbW9kdWxlcy9pdGVtL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9wcm92aWRlci50cyIsIi9vcmdhbml6YXRpb25zL2NvbGxlY3Rpb24udHMiLCIvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvc2Nob29scy9jb2xsZWN0aW9uLnRzIiwiL3NjaG9vbHMvaXRlbS50cyIsIi9zY2hvb2xzL3Byb3ZpZGVyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2hhcmRjb2RlZC1kYXRhLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkIsTUFBTUMsUUFBUSxHQUFHLEVBQUU7Y0FFbkJELFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQVQsUUFBUyxDQUFDVSxHQUFHLENBQUNELEVBQUUsQ0FBQyxFQUFFO2dCQUU1QixJQUFJRSxRQUFRLEdBQUcsSUFBSWQsS0FBQSxDQUFBZSxrQkFBa0IsQ0FBQztrQkFBRUg7Z0JBQUUsQ0FBRSxDQUFDO2dCQUU3QyxJQUFJLENBQUMsQ0FBQVQsUUFBUyxDQUFDYSxHQUFHLENBQUNKLEVBQUUsRUFBRUUsUUFBUSxDQUFDO2dCQUNoQ0wsUUFBUSxDQUFDUSxJQUFJLENBQUNILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUVGLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxRQUFRLENBQUM7Y0FFM0IsTUFBTVksZ0JBQWdCLEdBQUcsRUFBRTtjQUMzQmIsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxFQUFFLEVBQUVVLEtBQUssS0FBSTtnQkFDdEMsTUFBTVIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBWCxRQUFTLENBQUNvQixHQUFHLENBQUNYLEVBQUUsQ0FBQztnQkFDdkNFLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDUixVQUFVLENBQUNILEtBQUssQ0FBQ08sRUFBRSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNhLEdBQUcsQ0FBQ0osRUFBRSxFQUFFRSxRQUFRLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsT0FBT0ssT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDO1lBQ3JDOztVQUNBRyxPQUFBLENBQUF2QixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNELElBQUF3QixTQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLFNBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsS0FBQSxHQUFBNUIsT0FBQTtVQVNPO1VBQVUsTUFBT2dCLGtCQUFtQixTQUFRVyxTQUFBLENBQUFFLElBQWU7WUFDakU7OztZQUdVQyxVQUFVLEdBQUcsQ0FDdEIsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLE1BQU0sRUFDTixNQUFNLENBQUM7WUFBQSxDQUNQO1lBU0QsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUlGLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUcsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQUMsb0JBQXFCO1lBQ3JCLElBQUlBLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFFQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBQyxVQUFXO1lBQ1hDLFlBQVk7Y0FBRTVCLEVBQUU7Y0FBRWtCLFlBQVk7Y0FBRVc7WUFBSSxJQUFhLEVBQUU7Y0FDbEQsS0FBSyxDQUFDO2dCQUNMN0IsRUFBRTtnQkFDRjhCLEVBQUUsRUFBRSxVQUFVO2dCQUNkQyxTQUFTLEVBQUUsWUFBWTtnQkFDdkI7Z0JBQ0FDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQW9CO2VBQ1YsQ0FBQztjQUVGLElBQUksQ0FBQ0MsT0FBTyxDQUFDaEIsWUFBWSxFQUFFVyxJQUFJLENBQUM7WUFDakM7WUFFQSxNQUFNSyxPQUFPQSxDQUFDaEIsWUFBWSxFQUFFVyxJQUFLO2NBQ2hDLElBQUksQ0FBQyxDQUFBWCxZQUFhLEdBQUdBLFlBQVk7WUFDbEM7WUFDQSxNQUFNaUIsSUFBSUEsQ0FBQ0MsS0FBQSxHQUFnRCxFQUFFO2NBQzVELE1BQU0sSUFBSSxDQUFDOUIsT0FBTztjQUVsQixJQUFJLENBQUM4QixLQUFLLENBQUNwQyxFQUFFLEVBQUVvQyxLQUFLLENBQUNwQyxFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO2NBQ2pDb0MsS0FBSyxDQUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBQSxZQUFhO2NBRXZDLE1BQU07Z0JBQUVtQixNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDdkQsTUFBTSxJQUFJLENBQUNoQyxHQUFHLENBQUN5QixJQUFJLENBQUNVLFFBQVEsQ0FBQztjQUU3QixJQUFJLENBQUMsQ0FBQXBCLElBQUssR0FBR1UsSUFBSSxDQUFDVixJQUFJO2NBQ3RCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEdBQUdTLElBQUksQ0FBQ1QsTUFBTTtjQUUxQixJQUFJLENBQUNpQixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsNkJBQTZCRixLQUFLLEVBQUUsQ0FBQzs7Y0FFdEQsSUFBSSxDQUFDLENBQUFHLE9BQVEsRUFBRTtjQUNmLE9BQU9aLElBQUk7WUFDWjtZQUVBLENBQUFZLE9BQVFDLENBQUE7Y0FDUCxJQUFJLElBQUksQ0FBQ0MsU0FBUyxFQUFFakIsVUFBVSxFQUFFO2dCQUMvQixJQUFJLENBQUMsQ0FBQUEsVUFBVyxHQUFHa0IsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDRixTQUFTLENBQUNqQixVQUFVLENBQUM7O2NBRXpELElBQUksSUFBSSxDQUFDRyxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLENBQUFSLFFBQVMsR0FBRyxJQUFJLENBQUNRLElBQUk7O1lBRTVCO1lBQ0EsTUFBTWlCLE9BQU9BLENBQUM7Y0FBRUMsTUFBTTtjQUFFQztZQUFJLENBQUU7Y0FDN0IsSUFBSTtnQkFDSCxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNqQixRQUFRLENBQUNjLE9BQU8sQ0FBQztrQkFBRUMsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsQ0FBQTNCLFFBQVMsR0FBRzRCLFFBQVEsQ0FBQ3BCLElBQUksQ0FBQ1IsUUFBUTtnQkFDdkMsSUFBSSxDQUFDLENBQUFLLFVBQVcsQ0FBQ3dCLFNBQVMsR0FBRyxTQUFTO2dCQUN0QyxJQUFJLENBQUNyQixJQUFJLEdBQUdvQixRQUFRLENBQUNwQixJQUFJLENBQUNSLFFBQVE7ZUFDbEMsQ0FBQyxPQUFPOEIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1FLGFBQWFBLENBQUM7Y0FBRU4sTUFBTTtjQUFFQztZQUFJLENBQUU7Y0FDbkMsSUFBSTtnQkFDSCxNQUFNbkIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDRyxRQUFRLENBQUNjLE9BQU8sQ0FBQztrQkFBRWpCLElBQUksRUFBRWtCLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsQ0FBQztnQkFFaEUsSUFBSSxDQUFDNUMsR0FBRyxDQUFDO2tCQUFFeUI7Z0JBQUksQ0FBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsQ0FBQVAsUUFBUyxHQUFHTyxJQUFJLENBQUNQLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBQyxRQUFTLEdBQUdNLElBQUksQ0FBQ04sUUFBUTtnQkFDOUIsSUFBSSxDQUFDLENBQUFFLG9CQUFxQixHQUFHSSxJQUFJLENBQUNKLG9CQUFvQjtlQUN0RCxDQUFDLE9BQU8wQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTS9DLEdBQUdBLENBQUN5QixJQUFJO2NBQ2IsTUFBTSxLQUFLLENBQUN6QixHQUFHLENBQUN5QixJQUFJLENBQUM7Y0FDckIsSUFBSSxDQUFDLENBQUFZLE9BQVEsRUFBRTtjQUNmLElBQUksSUFBSSxDQUFDYSxJQUFJLEVBQUV0RCxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ3VELGVBQWUsRUFBRTs7Y0FFdkIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUQsZUFBZUEsQ0FBQTtjQUNwQixJQUFJLElBQUksQ0FBQyxDQUFBNUIsVUFBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7Y0FDN0MsSUFBSSxDQUFDLENBQUFBLFVBQVcsR0FBRyxJQUFJOEIsY0FBYyxFQUFFO2NBRXZDLE1BQU1ILElBQUksR0FBRyxJQUFJdkMsS0FBQSxDQUFBMkMsSUFBSSxDQUFDO2dCQUFFMUQsRUFBRSxFQUFFLElBQUksQ0FBQ3NELElBQUksQ0FBQ3REO2NBQUUsQ0FBRSxDQUFDO2NBQzNDLE1BQU1zRCxJQUFJLENBQUNLLE9BQU8sRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQW5DLFNBQVUsR0FBRzhCLElBQUk7Y0FFdEIsSUFBSSxDQUFDLENBQUEzQixVQUFXLENBQUNpQyxPQUFPLEVBQUU7Y0FDMUIsSUFBSSxDQUFDQyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ2pDOztVQUNBakQsT0FBQSxDQUFBVCxrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsS0QsSUFBQTJELElBQUEsR0FBQTNFLE9BQUE7VUFHQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQThFLFNBQUEsR0FBQTlFLE9BQUE7VUFFTSxNQUFPOEMsZ0JBQWlCLFNBQVEvQyxNQUFBLENBQUFJLGFBQStCO1lBQ3BFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQdkMsWUFBWXVDLE1BQTBCO2NBQ3JDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBaEMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0J5QixLQUFLLENBQUNsQixZQUFZLGVBQWVrQixLQUFLLENBQUNwQyxFQUFFLEVBQUUsQ0FBQztjQUV6RyxJQUFJLENBQUNxQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRzFDLElBQUlKLEtBQUssRUFBRXVDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLFdBQVcsQ0FBQy9DLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFUSxNQUFNO2dCQUFFUjtjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUVEaUIsT0FBTyxHQUFHLE1BQU1WLEtBQUssSUFBRztjQUN2QixJQUFJQSxLQUFLLENBQUNZLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU9aLEtBQUssQ0FBQ1ksSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUN0QixVQUFVLENBQUNVLEtBQUssQ0FBQ1csTUFBTSxDQUFDOztjQUVyQyxPQUFPLElBQUksQ0FBQzhCLE1BQU0sQ0FBQ3pDLEtBQUssQ0FBQ1AsSUFBSSxDQUFDO1lBQy9CLENBQUM7WUFFREgsVUFBVSxHQUFHLE1BQU9VLEtBQVUsSUFBSTtjQUNqQyxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVIsSUFBSTtnQkFBRVM7Y0FBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTRCLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLG9DQUFvQyxFQUFFMUMsS0FBSyxDQUFDO2NBRWpHLElBQUlFLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUlFLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Y0FHL0MsT0FBTztnQkFBRUgsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRGtELE9BQU8sR0FBRyxNQUFPM0MsS0FBVSxJQUFJO2NBQzlCLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVyQyxNQUFNO2dCQUFFUixJQUFJO2dCQUFFUztjQUFLLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNEIsR0FBSSxDQUFDWSxJQUFJLENBQUMsOEJBQThCLEVBQUUxQyxLQUFLLENBQUM7Y0FFM0YsSUFBSUUsS0FBSyxFQUFFO2dCQUNWLE1BQU0sSUFBSUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUcxQyxPQUFPO2dCQUFFSCxNQUFNO2dCQUFFUjtjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUVEZ0QsTUFBTSxHQUFHLE1BQU16QyxLQUFLLElBQUc7Y0FDdEIsSUFBSTtnQkFDSCxNQUFNNEMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDOUMsS0FBSyxDQUFDO2dCQUMvQyxNQUFNK0MsSUFBSSxHQUFHLElBQUlDLFFBQVEsRUFBRTtnQkFDM0JKLEtBQUssQ0FBQ2pGLE9BQU8sQ0FBQ3NGLElBQUksSUFBRztrQkFDcEJGLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxJQUFJLEVBQUVqRCxLQUFLLENBQUNpRCxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDO2dCQUVGLE1BQU1FLEdBQUcsR0FBRyxJQUFJdEIsU0FBQSxDQUFBdUIsU0FBUyxFQUFFO2dCQUMzQkQsR0FBRyxDQUFDZixNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUNyQyxNQUFNekIsUUFBUSxHQUFHLE1BQU1zQyxHQUFHLENBQUNFLE1BQU0sQ0FBQ04sSUFBSSxFQUFFLEdBQUdwQixPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTywrQkFBK0IsQ0FBQztnQkFDckcsTUFBTW1CLElBQUksR0FBRyxNQUFNekMsUUFBUSxDQUFDeUMsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQ3JELE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJRyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUcvQyxJQUFJLENBQUNxQixZQUFZLEVBQUU7Z0JBQ25CLE9BQU82QixJQUFJLENBQUM3RCxJQUFJO2VBQ2hCLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQzs7VUFDRHZDLE9BQUEsQ0FBQXFCLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGRCxJQUFBL0MsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQTRCLEtBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBOEUsU0FBQSxHQUFBOUUsT0FBQTtVQUdBLElBQUF3RyxNQUFBLEdBQUF4RyxPQUFBO1VBQ087VUFBVSxNQUFPeUcsVUFBVyxTQUFRMUcsTUFBQSxDQUFBSSxhQUF5QjtZQUNuRSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUCxDQUFBbkUsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsQ0FBQXlCLG9CQUFxQjtZQUNyQixJQUFJQSxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBQ0EsQ0FBQUYsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUQsUUFBUyxHQUFVLEVBQUU7WUFDckIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBNEIsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQTJDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUF2QyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBcEMsWUFBYTtZQUNiLENBQUFTLFVBQVc7WUFDWEMsWUFBWTtjQUFFVjtZQUFZLENBQXlDO2NBQ2xFLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBQSxZQUFhLEdBQUdBLFlBQVk7Y0FDakMsSUFBSSxDQUFDLENBQUFnRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFDQXBDLElBQUksR0FBRyxNQUFBQSxDQUFPbkMsRUFBRSxFQUFFOEYsTUFBTyxLQUFJO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRXpELE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUN0Q00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQyxDQUNqQy9ELEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFPLFlBQWEsSUFBSWxCLEVBQUUsU0FBUyxFQUFFO2tCQUFFOEY7Z0JBQU0sQ0FBRSxDQUFDO2dCQUVwRSxJQUFJLENBQUN6RCxNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7Z0JBRXhELElBQUksQ0FBQyxDQUFBbEIsUUFBUyxHQUFHTyxJQUFJLENBQUNQLFFBQVEsSUFBSSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHTSxJQUFJLENBQUNOLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBMkIsU0FBVSxHQUFHckIsSUFBSSxDQUFDcUIsU0FBUztnQkFDaEMsSUFBSSxDQUFDLENBQUF6QixvQkFBcUIsR0FBR0ksSUFBSSxDQUFDSixvQkFBb0I7Z0JBQ3RELElBQUksQ0FBQyxDQUFBb0UsV0FBWSxHQUFHaEUsSUFBSSxDQUFDZ0UsV0FBVztnQkFDcEMsSUFBSSxDQUFDdEMsZUFBZSxFQUFFO2dCQUN0QixJQUFJLENBQUN3QyxNQUFNLEdBQUcsSUFBSTtlQUNsQixDQUFDLE9BQU81QyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNSSxlQUFlQSxDQUFBO2NBQ3BCLElBQUksSUFBSSxDQUFDLENBQUE1QixVQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztjQUM3QyxJQUFJLENBQUMsQ0FBQUEsVUFBVyxHQUFHLElBQUlnRSxNQUFBLENBQUFsQyxjQUFjLEVBQUU7Y0FFdkMsTUFBTUgsSUFBSSxHQUFHLElBQUl2QyxLQUFBLENBQUEyQyxJQUFJLENBQUM7Z0JBQUUxRCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE2RixXQUFZLENBQUN2QyxJQUFJLENBQUN0RDtjQUFFLENBQUUsQ0FBQztjQUN4RCxNQUFNc0QsSUFBSSxDQUFDSyxPQUFPLEVBQUU7Y0FDcEIsSUFBSSxDQUFDLENBQUFMLElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQTNCLFVBQVcsQ0FBQ2lDLE9BQU8sRUFBRTtjQUMxQixJQUFJLENBQUNDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDakM7WUFFQWYsT0FBTyxHQUFHLE1BQU1WLEtBQUssSUFBRztjQUN2QixJQUFJO2dCQUNILE1BQU00QyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM5QyxLQUFLLENBQUM7Z0JBQy9DLE1BQU0rQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2dCQUMzQkosS0FBSyxDQUFDakYsT0FBTyxDQUFDc0YsSUFBSSxJQUFHO2tCQUNwQkYsSUFBSSxDQUFDRyxNQUFNLENBQUNELElBQUksRUFBRWpELEtBQUssQ0FBQ2lELElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUM7Z0JBRUZGLElBQUksQ0FBQ0csTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQXBFLFlBQWEsQ0FBQztnQkFFL0MsTUFBTXFFLEdBQUcsR0FBRyxJQUFJdEIsU0FBQSxDQUFBdUIsU0FBUyxFQUFFO2dCQUMzQkQsR0FBRyxDQUFDZixNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUNyQyxNQUFNekIsUUFBUSxHQUFHLE1BQU1zQyxHQUFHLENBQUNFLE1BQU0sQ0FBQ04sSUFBSSxFQUFFLEdBQUdwQixPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztnQkFDM0YsTUFBTW1CLElBQUksR0FBRyxNQUFNekMsUUFBUSxDQUFDeUMsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQ3JELE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJRyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUUvQyxJQUFJLENBQUMsQ0FBQWxCLFFBQVMsR0FBR29FLElBQUksQ0FBQzdELElBQUksQ0FBQ1AsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBR21FLElBQUksQ0FBQzdELElBQUksQ0FBQ04sUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFFLG9CQUFxQixHQUFHaUUsSUFBSSxDQUFDN0QsSUFBSSxDQUFDSixvQkFBb0I7Z0JBQzNELElBQUksQ0FBQ29DLFlBQVksRUFBRTtnQkFDbkIsT0FBTzZCLElBQUksQ0FBQzdELElBQUk7ZUFDaEIsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQ2QyxhQUFhLEdBQUcsTUFBTTVELEtBQUssSUFBRztjQUM3QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUUzQyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFpQixHQUFJLENBQUNZLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtrQkFDL0QsR0FBRzFDLEtBQUs7a0JBQ1JsQixZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUFBO2lCQUNuQixDQUFDO2dCQUVGLElBQUksQ0FBQytCLFFBQVEsQ0FBQ1osTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2dCQUMvRCxJQUFJLENBQUMsQ0FBQVUsU0FBVSxHQUFHRCxRQUFRLENBQUNwQixJQUFJLENBQUNxQixTQUFTO2dCQUN6QyxJQUFJLENBQUNNLE9BQU8sQ0FBQyxRQUFRLENBQUM7ZUFDdEIsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0R2QyxPQUFBLENBQUFnRixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUhELElBQUExRyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTztVQUFVLE1BQU84RyxhQUFjLFNBQVEvRyxNQUFBLENBQUFJLGFBQTZCO1lBQzFFLENBQUE0RSxHQUFJO1lBQ01qRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBSXpDVyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFzQyxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNcEMsSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVyQyxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGdCQUFnQnlCLEtBQUssQ0FBQ3BDLEVBQUUsT0FBTyxDQUFDO2NBRXBGLElBQUksQ0FBQ3FDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEJGLEtBQUssRUFBRSxDQUFDOztjQUduRCxPQUFPVCxJQUFJO1lBQ1o7O1VBQ0FqQixPQUFBLENBQUFxRixhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUEvRyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ00sTUFBTytHLFNBQVUsU0FBUWhILE1BQUEsQ0FBQUksYUFBd0I7WUFDdEQsQ0FBQTRFLEdBQUk7WUFDSnRDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXNDLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDs7VUFDQTNELE9BQUEsQ0FBQXNGLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7VUNURDs7VUFFQWpCLE1BQUEsQ0FBQWtCLGNBQUEsQ0FBQXZGLE9BQUE7WUFDQXdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBdkYsU0FBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixTQUFBLEdBQUEzQixPQUFBO1VBRUEsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFFQSxJQUFBa0gsV0FBQSxHQUFBbEgsT0FBQTtVQVNPO1VBQVUsTUFBT21ILFVBQVcsU0FBUXhGLFNBQUEsQ0FBQUUsSUFBaUI7WUFDakRDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztZQVUvRCxDQUFBbkIsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQTRCLFVBQVc7WUFDWCxJQUFJNkUsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sR0FBR3hDLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDeUQsT0FBTyx1QkFBdUIsSUFBSSxDQUFDeEcsRUFBRSxFQUFFO1lBQ2hFO1lBRUEsQ0FBQW9CLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFxRixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBN0csVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0FnQyxZQUFZO2NBQUU1QixFQUFFLEdBQUcwRyxTQUFTO2NBQUU3RTtZQUFJLENBQUUsR0FBRyxFQUFFO2NBQ3hDLEtBQUssQ0FBQztnQkFBRTdCLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLGFBQWE7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQThGO2NBQWtCLENBQUUsQ0FBQztjQUNyRixJQUFJLENBQUN6RSxPQUFPLENBQUNMLElBQUksQ0FBQztZQUNuQjtZQUVBLE1BQU1LLE9BQU9BLENBQUNMLElBQUk7Y0FDakIsTUFBTSxJQUFJLENBQUN2QixPQUFPO1lBQ25CO1lBQ0FzRyxTQUFTQSxDQUFDekMsTUFBc0I7Y0FDL0IsSUFBSSxDQUFDLENBQUEvQyxNQUFPLEdBQUcrQyxNQUFNO1lBQ3RCO1lBRUEsTUFBTWhDLElBQUlBLENBQUNDLEtBQUEsR0FBMEMsRUFBRTtjQUN0RCxNQUFNLElBQUksQ0FBQzlCLE9BQU87Y0FDbEIsSUFBSSxDQUFDOEIsS0FBSyxDQUFDcEMsRUFBRSxFQUFFb0MsS0FBSyxDQUFDcEMsRUFBRSxHQUFHLElBQUksQ0FBQ0EsRUFBRTtjQUVqQyxNQUFNO2dCQUFFcUMsTUFBTTtnQkFBRUMsS0FBSztnQkFBRVQ7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRXZELElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZCQUE2QkYsS0FBSyxFQUFFLENBQUM7O2NBR3RELElBQUksQ0FBQyxDQUFBbUUsUUFBUyxHQUFHNUUsSUFBSSxDQUFDNEUsUUFBUTtjQUM5QixJQUFJLENBQUMsQ0FBQXJGLE1BQU8sR0FBR1MsSUFBSSxDQUFDVCxNQUFNO2NBRTFCLElBQUksQ0FBQyxDQUFBeEIsVUFBVyxHQUFHLElBQUl5RyxXQUFBLENBQUFoSCxVQUFVLEVBQUU7Y0FDbkMsTUFBTSxJQUFJLENBQUMsQ0FBQU8sVUFBVyxDQUFDRCxPQUFPLENBQUNrQyxJQUFJLENBQUNqQyxVQUFVLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFFLEtBQU0sR0FBRytCLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQ0UsS0FBSztjQUVuQztjQUVBLE9BQU8rQixJQUFJO1lBQ1o7WUFFQSxNQUFNZ0YsTUFBTUEsQ0FBQTtjQUNYLE1BQU16RSxLQUFLLEdBQUc7Z0JBQUVwQyxFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUU7Y0FDN0IsTUFBTTZCLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ0csUUFBUSxDQUFDNkUsTUFBTSxDQUFDekUsS0FBSyxDQUFDO2NBQzlDLElBQUksQ0FBQyxDQUFBcUUsUUFBUyxHQUFHNUUsSUFBSSxDQUFDNEUsUUFBUTtjQUM5QixJQUFJLENBQUMsQ0FBQTdHLFVBQVcsQ0FBQ0QsT0FBTyxDQUFDa0MsSUFBSSxDQUFDakMsVUFBVSxDQUFDO2NBRXpDLE9BQU8sSUFBSSxDQUFDLENBQUE2RyxRQUFTO1lBQ3RCOztVQUNBN0YsT0FBQSxDQUFBMEYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNGRCxJQUFBeEMsSUFBQSxHQUFBM0UsT0FBQTtVQUdBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTSxNQUFPd0gsa0JBQW1CLFNBQVF6SCxNQUFBLENBQUFJLGFBQWlDO1lBQ3hFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQdkMsWUFBWXVDLE1BQWtCO2NBQzdCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBaEMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0J5QixLQUFLLENBQUNwQyxFQUFFLFdBQVcsRUFBRW9DLEtBQUssQ0FBQztjQUV4RixJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Y0FHdkMsSUFBSUosS0FBSyxFQUFFdUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDL0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVRLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQsTUFBTWdGLE1BQU1BLENBQUN6RSxLQUFBLEdBQXlCLEVBQUU7Y0FDdkMsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FDM0MsTUFBTXpCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBaUIsR0FBSSxDQUFDWSxJQUFJLENBQUMsZ0JBQWdCMUMsS0FBSyxDQUFDcEMsRUFBRSxTQUFTLEVBQUVvQyxLQUFLLENBQUM7Y0FDL0UsSUFBSSxDQUFDYSxRQUFRLENBQUNaLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJRyxLQUFLLENBQUMsK0JBQStCUyxRQUFRLENBQUNYLEtBQUssRUFBRSxDQUFDOztjQUdqRSxPQUFPVyxRQUFRLENBQUNwQixJQUFJO1lBQ3JCOztVQUNBakIsT0FBQSxDQUFBK0Ysa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENELElBQUE3RixTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFFTztVQUFVLE1BQU8ySCxVQUFXLFNBQVFoRyxTQUFBLENBQUFpRyxVQUFVO1lBSXBELENBQUFDLG1CQUFvQixHQUFnQixJQUFJQyxHQUFHLEVBQUU7WUFDN0MsSUFBSUQsbUJBQW1CQSxDQUFBLEdBQUk7WUFDM0IsQ0FBQUUsZ0JBQWlCLEdBQWdCLEVBQUU7WUFDbkMsSUFBSUEsZ0JBQWdCQSxDQUFBO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLGdCQUFpQjtZQUM5QjtZQUNBdEYsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUcsU0FBUyxFQUFFLFlBQVk7Z0JBQUVELEVBQUUsRUFBRSxVQUFVO2dCQUFFcUYsSUFBSSxFQUFFL0gsS0FBQSxDQUFBZ0ksU0FBUztnQkFBRXBGLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQXdHO2NBQWlCLENBQUUsQ0FBQztZQUNqRztZQUVBLE1BQU1DLHlCQUF5QkEsQ0FBQ2xGLEtBQUs7Y0FDcEMsT0FBTyxJQUFJLENBQUNKLFFBQVEsQ0FBQ3VGLE9BQU8sQ0FBQ25GLEtBQUssQ0FBQztZQUNwQztZQUVBLE1BQU1ELElBQUlBLENBQUNDLEtBQUs7Y0FDZixJQUFJO2dCQUNILElBQUksQ0FBQ29GLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLEtBQUssQ0FBQ3JGLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUV2QixJQUFJLENBQUMsQ0FBQThFLGdCQUFpQixHQUFHLElBQUksQ0FBQ3pILEtBQUssQ0FBQ2dJLE1BQU0sQ0FBQ04sSUFBSSxJQUFHO2tCQUNqRCxJQUFJLENBQUNBLElBQUksQ0FBQ08sUUFBUSxFQUFFMUgsRUFBRSxFQUFFLE9BQU8sS0FBSztrQkFDcEMsSUFBSSxDQUFDLENBQUFnSCxtQkFBb0IsQ0FBQ1csR0FBRyxDQUFDUixJQUFJLENBQUNPLFFBQVEsQ0FBQzFILEVBQUUsQ0FBQztrQkFDL0MsT0FBTyxJQUFJO2dCQUNaLENBQUMsQ0FBQztlQUNGLENBQUMsT0FBT21ELENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlYLEtBQUssQ0FBQ1csQ0FBQyxDQUFDeUUsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0E1RyxPQUFBLENBQUFrRyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENELElBQUFoRyxTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFFTztVQUFVLE1BQU9pSSxTQUFVLFNBQVF0RyxTQUFBLENBQUFFLElBQWU7WUFDOUNDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFRdEcsQ0FBQTRHLFdBQVksR0FBRyxJQUFJckksR0FBRyxFQUFFO1lBQ3hCLElBQUlxSSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ25JLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDO1lBQ0FvSSxTQUFTLEdBQUcsSUFBSXRJLEdBQUcsRUFBRTtZQUVyQm9DLFlBQVk7Y0FBRTVCLEVBQUUsR0FBRzBHO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFMUcsRUFBRTtnQkFBRThCLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsWUFBWTtnQkFBRUMsUUFBUSxFQUFFbkIsU0FBQSxDQUFBd0c7Y0FBaUIsQ0FBRSxDQUFDO1lBQ3BGO1lBRUEsTUFBTWxGLElBQUlBLENBQUNDLEtBQUs7Y0FDZixNQUFNO2dCQUFFUDtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ0csUUFBUSxDQUFDK0YsUUFBUSxDQUFDM0YsS0FBSyxDQUFDO2NBRXBELEtBQUssQ0FBQ2hDLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztjQUVmLE9BQU9BLElBQUk7WUFDWjtZQUVBLE1BQU1tRyxJQUFJQSxDQUFDNUYsS0FBSztjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUNKLFFBQVEsQ0FBQ2MsT0FBTyxDQUFDVixLQUFLLENBQUM7WUFDMUM7WUFFQSxNQUFNNkYsTUFBTUEsQ0FBQzdGLEtBQUs7Y0FDakIsT0FBTyxNQUFNLElBQUksQ0FBQ0osUUFBUSxDQUFDaUcsTUFBTSxDQUFDN0YsS0FBSyxDQUFDO1lBQ3pDO1lBRUEsTUFBTThGLElBQUlBLENBQUM5RixLQUFLO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0osUUFBUSxDQUFDa0csSUFBSSxDQUFDOUYsS0FBSyxDQUFDO1lBQ3ZDO1lBRUEsTUFBTStGLE9BQU9BLENBQUMvRixLQUFLO2NBQ2xCLE9BQU8sTUFBTSxJQUFJLENBQUNKLFFBQVEsQ0FBQ21HLE9BQU8sQ0FBQy9GLEtBQUssQ0FBQztZQUMxQztZQUVBLE1BQU1nRyxNQUFNQSxDQUFDaEcsS0FBSztjQUNqQmdCLE9BQU8sQ0FBQ2lGLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztjQUN0RCxPQUFPakcsS0FBSztjQUNaO1lBQ0Q7WUFFQSxNQUFNa0csVUFBVUEsQ0FBQ2xHLEtBQUs7Y0FDckJnQixPQUFPLENBQUNpRixHQUFHLENBQUMsNkNBQTZDLEVBQUVqRyxLQUFLLENBQUM7Y0FDakUsT0FBT0EsS0FBSztjQUNaO1lBQ0Q7O1VBQ0F4QixPQUFBLENBQUF3RyxTQUFBLEdBQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRELElBQUF0RCxJQUFBLEdBQUEzRSxPQUFBO1VBSUEsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUVNLE1BQU9rSSxpQkFBaUI7WUFDN0IsQ0FBQW5ELEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBQ1AsQ0FBQVEsUUFBUztZQUNUL0MsWUFBWXVDLE1BQWlCO2NBQzVCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBb0UsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixJQUFJLENBQUMsQ0FBQXJFLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxhQUFhLENBQUM7Y0FFM0QsT0FBTztnQkFBRTBCLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRURrRyxRQUFRLEdBQUcsTUFBTTNGLEtBQUssSUFBRztjQUN4QixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxlQUFleUIsS0FBSyxDQUFDcEMsRUFBRSxFQUFFLENBQUM7Y0FFdkUsSUFBSW9DLEtBQUssRUFBRXVDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLFdBQVcsQ0FBQy9DLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFUSxNQUFNO2dCQUFFUjtjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUVELE1BQU0yRyxNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXRFLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFFM0MsTUFBTTdDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDc0UsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUFyRSxNQUFPLENBQUNuRSxFQUFFLEVBQUUsQ0FBQztnQkFFckUsT0FBTzZCLElBQUk7ZUFDWCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUwsT0FBT0EsQ0FBQ1YsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFDM0MsTUFBTStELEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBdkUsR0FBSSxDQUFDWSxJQUFJLENBQUMsYUFBYSxFQUFFMUMsS0FBSyxDQUFDO2dCQUN0RCxJQUFJLENBQUNxRyxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFFOUMsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTThFLE1BQU1BLENBQUM3RixLQUFLLEdBQUcsRUFBRTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNK0QsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2RSxHQUFJLENBQUNZLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNuRSxFQUFFLFNBQVMsRUFBRW9DLEtBQUssQ0FBQztnQkFFaEYsT0FBT3FHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTStFLElBQUlBLENBQUM5RixLQUFLLEdBQUcsRUFBRTtjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQ3RCLE9BQU8sQ0FBQ2lGLEdBQUcsQ0FBQ2pHLEtBQUssRUFBRSxPQUFPLENBQUM7Z0JBQzNCLE1BQU1xRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZFLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGtCQUFrQixFQUFFMUMsS0FBSyxDQUFDO2dCQUMzRGdCLE9BQU8sQ0FBQ2lGLEdBQUcsQ0FBQ0ksR0FBRyxFQUFFLEtBQUssQ0FBQztnQkFFdkIsSUFBSSxDQUFDQSxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFFOUMsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTW9FLE9BQU9BLENBQUNuRixLQUFLLEdBQUcsRUFBRTtjQUN2QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNK0QsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2RSxHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsRUFBRTFDLEtBQUssQ0FBQztnQkFDM0QsSUFBSSxDQUFDcUcsR0FBRyxDQUFDcEcsTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlHLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Z0JBRTlDLE9BQU9pRyxHQUFHO2VBQ1YsQ0FBQyxPQUFPdEYsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1nRixPQUFPQSxDQUFDL0YsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFDM0N0QixPQUFPLENBQUNpRixHQUFHLENBQUNqRyxLQUFLLEVBQUUsT0FBTyxDQUFDO2dCQUMzQixNQUFNcUcsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2RSxHQUFJLENBQUNZLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNuRSxFQUFFLFVBQVUsRUFBRW9DLEtBQUssQ0FBQztnQkFDakYsSUFBSSxDQUFDcUcsR0FBRyxDQUFDcEcsTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlHLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQzs7Z0JBRTVELE9BQU9pRyxHQUFHO2VBQ1YsQ0FBQyxPQUFPdEYsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1pRixNQUFNQSxDQUFDaEcsS0FBSyxHQUFHLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFDM0M7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0EsT0FBT3RDLEtBQUs7ZUFDWixDQUFDLE9BQU9lLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0F2QyxPQUFBLENBQUF5RyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3SEQsSUFBQXZHLFNBQUEsR0FBQTNCLE9BQUE7VUFPTztVQUFVLE1BQU91SixNQUFPLFNBQVE1SCxTQUFBLENBQUFFLElBQWU7WUFDM0NDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7WUFVekNXLFlBQVk7Y0FBRTVCLEVBQUUsR0FBRzBHO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFMUcsRUFBRTtnQkFBRThCLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsVUFBVTtnQkFBRUMsUUFBUSxFQUFFMkc7Y0FBZ0IsQ0FBRSxDQUFDO1lBQ2pGO1lBRUEsTUFBTXhHLElBQUlBLENBQUNDLEtBQUs7Y0FDZixNQUFNO2dCQUFFQyxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFdkQsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsMEJBQTBCRixLQUFLLEVBQUUsQ0FBQzs7Y0FHbkQsT0FBT1QsSUFBSTtZQUNaOztVQUNBakIsT0FBQSxDQUFBOEgsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRCxJQUFBNUgsU0FBQSxHQUFBM0IsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwQixTQUFBLEdBQUExQixPQUFBO1VBRU87VUFBVSxNQUFPeUosZUFBZ0IsU0FBUTlILFNBQUEsQ0FBQWlHLFVBQVU7WUFDekQ7WUFDQW5GLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVHLFNBQVMsRUFBRSxTQUFTO2dCQUFFRCxFQUFFLEVBQUUsVUFBVTtnQkFBRXFGLElBQUksRUFBRS9ILEtBQUEsQ0FBQXlKLGNBQWM7Z0JBQUU3RyxRQUFRLEVBQUVuQixTQUFBLENBQUFpSTtjQUFlLENBQUUsQ0FBQztZQUNqRzs7VUFDQWxJLE9BQUEsQ0FBQWdJLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURCxJQUFBMUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBR00sTUFBTzJKLGVBQWdCLFNBQVE1SixNQUFBLENBQUFJLGFBQThCO1lBQ2xFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQdkMsWUFBWXVDLE1BQXNCO2NBQ2pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBb0UsSUFBSSxHQUFHLE1BQU1uRyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRXJDLE1BQU07Z0JBQUVSO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsV0FBV3lCLEtBQUssQ0FBQzJHLEtBQUssRUFBRSxDQUFDO2NBRXRFLElBQUksQ0FBQzFHLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7Y0FHeEMsT0FBTztnQkFBRUgsTUFBTTtnQkFBRVIsSUFBSSxFQUFFO2tCQUFFbUgsT0FBTyxFQUFFbkgsSUFBSSxDQUFDcEMsS0FBSyxJQUFJO2dCQUFFO2NBQUUsQ0FBRTtZQUN2RCxDQUFDO1lBRUQsTUFBTXdKLFdBQVdBLENBQUNqSixFQUFFO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFrRSxHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU07a0JBQUVyQyxNQUFNO2tCQUFFUjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3NFLE1BQU0sQ0FBQyxtQkFBbUJ4SSxFQUFFLEVBQUUsQ0FBQztnQkFFeEUsSUFBSSxDQUFDcUMsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDOztnQkFHekMsT0FBT1gsSUFBSTtlQUNYLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0F2QyxPQUFBLENBQUFrSSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7O1VDN0NEOztVQUVBN0QsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBbkIsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBbkIsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBbkIsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFsSCxNQUFBLEdBQUFDLE9BQUE7VUFLTSxNQUFPK0osbUJBQW9CLFNBQVFoSyxNQUFBLENBQUFJLGFBQW1DO1lBSTNFLENBQUE2RSxNQUFPO1lBQ1BsRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztZQUNwQ1csWUFBWXVILE9BQTZCLEVBQUVoRixNQUFpQztjQUMzRSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUlnRixPQUFPLENBQUNuRyxJQUFJLEtBQUssWUFBWSxFQUFFbUcsT0FBTyxDQUFDL0MsS0FBSyxHQUFHeEQsSUFBSSxDQUFDQyxLQUFLLENBQUNzRyxPQUFPLENBQUMvQyxLQUFLLENBQUM7Y0FDNUUsSUFBSSxDQUFDaEcsR0FBRyxDQUFDK0ksT0FBTyxDQUFDO1lBQ2xCOztVQUNBdkksT0FBQSxDQUFBc0ksbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFoSyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBaUssUUFBQSxHQUFBakssT0FBQTtVQUtNLE1BQU9rSyxZQUFhLFNBQVFuSyxNQUFBLENBQUFJLGFBQTRCO1lBQzdELENBQUE2RSxNQUFPO1lBQ1AsQ0FBQUQsR0FBSTtZQUVKLENBQUF6RSxLQUFNLEdBQUcsSUFBSUQsR0FBRyxFQUFFO1lBQ2xCLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFtQyxZQUFZdUMsTUFBaUM7Y0FDNUMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEO1lBRUEsTUFBTTVELEdBQUdBLENBQUNxQyxJQUFZO2NBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUF2RCxLQUFNLENBQUNrQixHQUFHLENBQUNxQyxJQUFJLENBQUM7WUFDN0I7WUFFQSxNQUFNYixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQzdCLE9BQU87Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTZELE1BQU8sQ0FBQ25FLEVBQUUsRUFBRTtrQkFDckIsTUFBTSxJQUFJd0MsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztnQkFHckQsSUFBSSxDQUFDLENBQUEwQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQzNDLE1BQU07a0JBQUVyQyxNQUFNO2tCQUFFUjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyx3QkFBd0IsSUFBSSxDQUFDLENBQUF3RCxNQUFPLENBQUNuRSxFQUFFLEVBQUUsQ0FBQztnQkFFdkYsSUFBSSxDQUFDcUMsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDOztnQkFHMUMsTUFBTWpELFFBQVEsR0FBMkIwRixNQUFNLENBQUN2RixNQUFNLENBQUNtQyxJQUFJLENBQUN0QyxRQUFRLENBQUM7Z0JBRXJFQSxRQUFRLENBQUNRLE9BQU8sQ0FBQ29KLE9BQU8sSUFBRztrQkFDMUIsTUFBTWpKLFFBQVEsR0FBRyxJQUFJa0osUUFBQSxDQUFBRixtQkFBbUIsQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBaEYsTUFBTyxDQUFDO2tCQUMvRCxJQUFJLENBQUMsQ0FBQTFFLEtBQU0sQ0FBQ1csR0FBRyxDQUFDK0ksT0FBTyxDQUFDbkcsSUFBSSxFQUFFOUMsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLENBQUM7ZUFDRixDQUFDLE9BQU9pRCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDLDRCQUE0QixFQUFFYSxDQUFDLENBQUM7O1lBRWhEOztVQUNBdkMsT0FBQSxDQUFBeUksWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7OztVSHBERDs7VUFFQXBFLE1BQUEsQ0FBQWtCLGNBQUEsQ0FBQXZGLE9BQUE7WUFDQXdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUlKQSxJQUFBbEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUdBLElBQUFtSyxZQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9LLE1BQUEsR0FBQXBLLE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQTBCO1lBQ3pELENBQUFrSyxjQUFlO1lBQ2YsQ0FBQXRGLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBQ1AsQ0FBQXNGLFdBQVk7WUFDWixDQUFBaEssS0FBTSxHQUFtQyxJQUFJRCxHQUFHLEVBQUU7WUFDbEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDO1lBRUEsSUFBSWdLLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBakssS0FBTTtZQUNuQjtZQUVBLElBQUlrSyxLQUFLQSxDQUFBO2NBQ1IsT0FBT0osTUFBQSxDQUFBSyxhQUFhLENBQUNuSyxLQUFLO1lBQzNCO1lBRUEsSUFBSW9LLEtBQUtBLENBQUE7Y0FDUixJQUFJLElBQUksQ0FBQ3BLLEtBQUssQ0FBQ3FLLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBTyxLQUFLO2NBQ3pDLE9BQU8sSUFBSSxDQUFDckssS0FBSyxDQUFDc0ssS0FBSyxDQUFDNUMsSUFBSSxJQUFJQSxJQUFJLENBQUM2QyxLQUFLLEtBQUssV0FBVyxDQUFDO1lBQzVEO1lBRUFwSSxZQUFZNEgsY0FBOEI7Y0FDekMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUF0RixHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFpRixjQUFlLEdBQUdBLGNBQWM7Y0FDckMsSUFBSSxDQUFDLENBQUFDLFdBQVksR0FBRyxJQUFJSCxZQUFBLENBQUFXLFdBQVcsRUFBRTtZQUN0QztZQUVBQyxRQUFRQSxDQUFDckksSUFBSSxFQUFFc0ksS0FBSyxHQUFHLEtBQUs7Y0FDM0IsSUFBSUEsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBMUssS0FBTSxDQUFDMkssS0FBSyxFQUFFO2NBRTlCdkksSUFBSSxDQUFDOUIsT0FBTyxDQUFDLENBQUN3QyxRQUFRLEVBQUU3QixLQUFLLEtBQUk7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLENBQUFqQixLQUFNLENBQUNRLEdBQUcsQ0FBQ3NDLFFBQVEsQ0FBQ3ZDLEVBQUUsQ0FBQyxFQUFFO2tCQUNqQyxNQUFNbUgsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBMUgsS0FBTSxDQUFDa0IsR0FBRyxDQUFDNEIsUUFBUSxDQUFDdkMsRUFBRSxDQUFFO2tCQUMxQ21ILElBQUksQ0FBQy9HLEdBQUcsQ0FBQ21DLFFBQVEsQ0FBQztrQkFDbEI7O2dCQUdELElBQUksQ0FBQyxDQUFBOUMsS0FBTSxDQUFDVyxHQUFHLENBQUNtQyxRQUFRLENBQUN2QyxFQUFFLEVBQUUsSUFBSVosS0FBQSxDQUFBaUwsUUFBUSxDQUFDO2tCQUFFLEdBQUc5SCxRQUFRO2tCQUFFN0IsS0FBSztrQkFBRThJLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQWUsQ0FBRSxDQUFDLENBQUM7Y0FDekcsQ0FBQyxDQUFDO1lBQ0g7WUFFQWMsTUFBTUEsQ0FBQ3RLLEVBQUU7Y0FDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsR0FBRyxDQUFDRCxFQUFFLENBQUMsRUFBRTtjQUMxQixJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDK0ksTUFBTSxDQUFDeEksRUFBRSxDQUFDO2NBQ3RCLElBQUksQ0FBQ3dELE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsT0FBTyxJQUFJO1lBQ1o7WUFFQStHLFFBQVFBLENBQUE7Y0FDUCxNQUFNMUksSUFBSSxHQUEwQixFQUFFO2NBQ3RDLElBQUksQ0FBQyxDQUFBcEMsS0FBTSxDQUFDTSxPQUFPLENBQUNvSCxJQUFJLElBQUl0RixJQUFJLENBQUN4QixJQUFJLENBQUM4RyxJQUFJLENBQUNxRCxPQUFPLEVBQUUsQ0FBQyxDQUFDO2NBQ3RELE9BQU8zSSxJQUFJO1lBQ1o7WUFFQXVJLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQTNLLEtBQU0sQ0FBQzJLLEtBQUssRUFBRTtjQUNuQixJQUFJLENBQUM1RyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTW1FLEdBQUdBLENBQUMzRSxJQUFJO2NBQ2IsTUFBTVQsUUFBUSxHQUFHLElBQUluRCxLQUFBLENBQUFpTCxRQUFRLENBQUM7Z0JBQUVySCxJQUFJO2dCQUFFd0csY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBQTtjQUFlLENBQUUsQ0FBQztjQUM3RSxNQUFNakgsUUFBUSxDQUFDakMsT0FBTztjQUN0QixJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDVyxHQUFHLENBQUNtQyxRQUFRLENBQUN2QyxFQUFFLEVBQUV1QyxRQUFRLENBQUM7Y0FDdEMsSUFBSSxDQUFDLENBQUFpSCxjQUFlLENBQUMzRixZQUFZLEVBQUU7Y0FDbkMsT0FBT3RCLFFBQVE7WUFDaEI7O1VBQ0EzQixPQUFBLENBQUF2QixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZELElBQUFpSyxZQUFBLEdBQUFuSyxPQUFBO1VBR0EsSUFBQXNMLFVBQUEsR0FBQXRMLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBdUwsUUFBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUFvSyxNQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXdMLEtBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFZLE1BQU9rTCxRQUFTLFNBQVFuTCxNQUFBLENBQUFJLGFBQXVCO1lBQ2pFLENBQUEyQixVQUFXLEdBQUcsQ0FDYixJQUFJLEVBQ0osTUFBTSxFQUNOLE9BQU8sRUFDUCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFVBQVUsRUFDVixXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1Ysb0JBQW9CLENBQ3BCO1lBQ0QsSUFBSTBJLEtBQUtBLENBQUE7Y0FDUixPQUFPSixNQUFBLENBQUFLLGFBQWEsQ0FBQ25LLEtBQUs7WUFDM0I7WUFFQSxDQUFBbUwsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHckIsTUFBQSxDQUFBSyxhQUFhLENBQUNqSixHQUFHLENBQUMsSUFBSSxDQUFDcUMsSUFBSSxDQUFDO2NBQzdDLE9BQU8sSUFBSSxDQUFDLENBQUE0SCxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQTFHLEdBQUk7WUFDSixDQUFBc0YsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUNBLENBQUFDLFdBQVk7WUFDWixDQUFBb0IsWUFBYTtZQUNiLENBQUF6SSxLQUFNO1lBRU4sSUFBSTBJLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUk7WUFDWjtZQUNBLElBQUkxSSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUNnRSxLQUFLO2NBQ2QsSUFBSSxDQUFDLENBQUFoRSxLQUFNLENBQUNoQyxHQUFHLENBQUNnRyxLQUFLLENBQUM7WUFDdkI7WUFFQSxJQUFJMkUsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUk7WUFDWjtZQUVBLENBQUFwSSxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJQSxTQUFTQSxDQUFDeUQsS0FBSztjQUNsQixJQUFJLENBQUMsQ0FBQXpELFNBQVUsQ0FBQ3ZDLEdBQUcsQ0FBQ2dHLEtBQUssQ0FBQztZQUMzQjtZQUVBLElBQUk0RSxXQUFXQSxDQUFBO2NBQ2QsTUFBTWhJLElBQUksR0FBR3VHLE1BQUEsQ0FBQUssYUFBYSxDQUFDakosR0FBRyxDQUFDLElBQUksQ0FBQ3FDLElBQUksQ0FBQztjQUN6Qzs7O2NBR0EsSUFBSSxDQUFDQSxJQUFJLEVBQUVpSSxTQUFTLEVBQUUsT0FBTyxJQUFJO2NBRWpDLE9BQU9qSSxJQUFJLENBQUNpSSxTQUFTLENBQUNsQixLQUFLLENBQUNtQixLQUFLLElBQUc7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUNDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLEVBQUU7a0JBQzFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzlJLEtBQUssQ0FBQzhJLEtBQUssQ0FBQzs7Z0JBRzNCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDO2NBQ3JCLENBQUMsQ0FBQztZQUNIO1lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkEsSUFBSWxCLEtBQUtBLENBQUE7Y0FDUixNQUFNaEgsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBNkgsWUFBYTtjQUMvQixNQUFNbEksU0FBUyxHQUFHLENBQUNLLElBQUksQ0FBQ0wsU0FBUyxHQUFHLEVBQUUsR0FBR0ssSUFBSSxDQUFDTCxTQUFTLEVBQUU4RSxNQUFNLENBQUNOLElBQUksSUFBSUEsSUFBSSxDQUFDaUUsUUFBUSxDQUFDO2NBRXRGLE1BQU1oSixLQUFLLEdBQUdZLElBQUksQ0FBQ1osS0FBSyxFQUFFc0gsR0FBRyxDQUFDdkMsSUFBSSxJQUFLLE9BQU9BLElBQUksS0FBSyxRQUFRLEdBQUdBLElBQUksR0FBR0EsSUFBSSxDQUFDa0UsSUFBSyxDQUFDO2NBQ3BGLE1BQU1DLGNBQWMsR0FBRzNJLFNBQVMsQ0FBQzRJLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVyRSxJQUFJLEtBQUk7Z0JBQ3JELE1BQU07a0JBQUVrRTtnQkFBSSxDQUFFLEdBQUdsRSxJQUFJO2dCQUNyQixJQUFJc0UsS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEvSSxTQUFVLENBQUMwSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUN6QyxPQUFPLElBQUksQ0FBQyxDQUFBMUksU0FBVSxDQUFDMEksSUFBSSxDQUFDLENBQUN2QixNQUFNLEdBQUcwQixHQUFHLEdBQUcsQ0FBQyxHQUFHQSxHQUFHOztnQkFFcEQsT0FBTyxDQUFDOUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ3lFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXhJLFNBQVUsQ0FBQzBJLElBQUksQ0FBQyxDQUFDLEdBQUdHLEdBQUcsR0FBR0EsR0FBRyxHQUFHLENBQUM7Y0FDN0UsQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUNMLE1BQU1HLFVBQVUsR0FBR3ZKLEtBQUssQ0FBQ21KLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVyRSxJQUFJLEtBQUk7Z0JBQzdDLElBQUlzRSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXRKLEtBQU0sQ0FBQytFLElBQUksQ0FBQyxDQUFDLEVBQUU7a0JBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUEvRSxLQUFNLENBQUMrRSxJQUFJLENBQUMsQ0FBQzJDLE1BQU0sR0FBRzBCLEdBQUcsR0FBRyxDQUFDLEdBQUdBLEdBQUc7O2dCQUVoRCxPQUFPLENBQUM5RSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDeUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBL0ksS0FBTSxDQUFDK0UsSUFBSSxDQUFDLENBQUMsR0FBR3FFLEdBQUcsR0FBR0EsR0FBRyxHQUFHLENBQUM7Y0FDekUsQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUNMLElBQUlGLGNBQWMsS0FBSyxDQUFDLElBQUlLLFVBQVUsS0FBSyxDQUFDLEVBQUUsT0FBTyxZQUFZLENBQUMsQ0FBQztjQUNuRSxJQUFJTCxjQUFjLEtBQUszSSxTQUFTLENBQUNtSCxNQUFNLElBQUk2QixVQUFVLEtBQUt2SixLQUFLLENBQUMwSCxNQUFNLEVBQUUsT0FBTyxXQUFXO2NBRTFGLE9BQU8sWUFBWTtZQUNwQjtZQUVBLElBQUk4QixRQUFRQSxDQUFBO2NBQ1gsTUFBTTVJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQTZILFlBQWE7Y0FDL0IsTUFBTWdCLGlCQUFpQixHQUFHN0ksSUFBSSxDQUFDWixLQUFLLENBQUMrSSxRQUFRLENBQUMsV0FBVyxDQUFDO2NBQzFELE9BQ0MsQ0FBQyxDQUFDLElBQUksQ0FBQ1csS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFDRixpQkFBaUIsSUFBS0EsaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ3pKLEtBQUssQ0FBQzRKLFNBQVUsQ0FBQztZQUU3RztZQUNBcEssWUFBWUMsSUFBSTtjQUNmLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ29LLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDekYsSUFBSSxDQUFDLENBQUF6QyxjQUFlLEdBQUczSCxJQUFJLENBQUMySCxjQUFjO2NBQzFDLElBQUksQ0FBQ3hKLEVBQUUsR0FBRzZCLElBQUksQ0FBQzdCLEVBQUUsSUFBSSxJQUFBMkssS0FBQSxDQUFBdUIsRUFBTSxHQUFFO2NBQzdCLElBQUksQ0FBQyxDQUFBOUosS0FBTSxHQUFHc0ksUUFBQSxDQUFBeUIsb0JBQW9CLENBQUN4TCxHQUFHLENBQUNrQixJQUFJLENBQUNtQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUF3RyxjQUFlLEVBQUUsSUFBSSxDQUFDO2NBQzdFLElBQUksQ0FBQyxDQUFBcUIsWUFBYSxHQUFHdEIsTUFBQSxDQUFBSyxhQUFhLENBQUNqSixHQUFHLENBQUNrQixJQUFJLENBQUNtQixJQUFJLENBQUU7Y0FDbEQsSUFBSSxDQUFDLENBQUFMLFNBQVUsR0FBRyxJQUFJOEgsVUFBQSxDQUFBMkIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBNUMsY0FBZSxFQUFFLElBQUksQ0FBQyxDQUFBcUIsWUFBYSxDQUFDbEksU0FBUyxDQUFDO2NBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWtJLFlBQWEsRUFBRSxNQUFNLElBQUlySSxLQUFLLENBQUMsaUJBQWlCWCxJQUFJLENBQUNtQixJQUFJLFlBQVksQ0FBQztjQUNoRixJQUFJLENBQUM1QyxHQUFHLENBQUN5QixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUMsQ0FBQXFDLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQzhILFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUk7Y0FDbkIsSUFBSXpLLElBQUksQ0FBQ2MsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsQ0FBQUEsU0FBVSxDQUFDdkMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDYyxTQUFTLEVBQUUsSUFBSSxDQUFDOztjQUcxQyxJQUFJLENBQUMsQ0FBQThHLFdBQVksR0FBRyxJQUFJSCxZQUFBLENBQUFXLFdBQVcsRUFBRTtZQUN0QztZQUNBO1lBQ0E3SixHQUFHQSxDQUFDeUIsSUFBSTtjQUNQLElBQUlBLElBQUksQ0FBQ2MsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsQ0FBQUEsU0FBVSxDQUFDdkMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDYyxTQUFTLENBQUM7O2NBRXBDLElBQUksQ0FBQyxDQUFBMUIsVUFBVyxDQUFDbEIsT0FBTyxDQUFDd00sUUFBUSxJQUFHO2dCQUNuQyxJQUFJLENBQUMxSyxJQUFJLENBQUMySyxjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHMUssSUFBSSxDQUFDMEssUUFBUSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztZQUNIO1lBRUEvQixPQUFPQSxDQUFBO2NBQ04sTUFBTWlDLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQyxDQUFBeEwsVUFBVyxDQUFDbEIsT0FBTyxDQUFDd00sUUFBUSxJQUFHO2dCQUNuQyxJQUFJQSxRQUFRLEtBQUssT0FBTyxFQUFFO2tCQUN6QkUsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxDQUFDL0IsT0FBTyxFQUFFO2tCQUMzQzs7Z0JBRUQsSUFBSStCLFFBQVEsS0FBSyxXQUFXLEVBQUU7a0JBQzdCLElBQUksT0FBTyxJQUFJLENBQUM1SixTQUFTLEVBQUU2SCxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNsRGlDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUMsRUFBRS9CLE9BQU8sRUFBRTs7a0JBRTdDOztnQkFFRGlDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsWUFBWSxFQUFFQyxLQUFLO2NBQ2pDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDcEYsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU0zRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTRILFdBQVksQ0FBQ2lELFFBQVEsQ0FBQztrQkFDN0MxSixJQUFJLEVBQUUsVUFBVTtrQkFDaEJoRCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF3SixjQUFlLENBQUN4SixFQUFFO2tCQUMzQnVDLFFBQVEsRUFBRSxJQUFJLENBQUNTLElBQUk7a0JBQ25CNkosVUFBVSxFQUFFLElBQUksQ0FBQzdNLEVBQUU7a0JBQ25COEssUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtrQkFDdkI4QjtpQkFDQSxDQUFDO2dCQUNGLElBQUksQ0FBQ3hNLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztnQkFDZCxJQUFJLENBQUMsQ0FBQTJILGNBQWUsQ0FBQ3NELFNBQVMsRUFBRTtnQkFDaEMsT0FBT2pMLElBQUk7ZUFDWCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJWCxLQUFLLENBQUNXLENBQUMsQ0FBQ3lFLE9BQU8sQ0FBQztlQUMxQixTQUFTO2dCQUNULElBQUksQ0FBQ0osUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUE7Ozs7WUFJQSxNQUFNdUYsZUFBZUEsQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7Y0FDaEMsSUFBSTtnQkFDSCxJQUFJLENBQUNBLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUl4SyxLQUFLLENBQUMsNERBQTRELENBQUM7O2dCQUc5RSxNQUFNUyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXdHLFdBQVksQ0FBQ3dELEtBQUssQ0FBQztrQkFDOUNELE1BQU07a0JBQ05FLElBQUksRUFBRSxXQUFXO2tCQUNqQkMsTUFBTSxFQUFFO2lCQUNSLENBQUM7Z0JBRUYsSUFBSSxDQUFDLENBQUFqSixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU0wSSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWxKLEdBQUksQ0FBQ1ksSUFBSSxDQUN4QyxtQkFBbUIsSUFBSSxDQUFDLENBQUEwRSxjQUFlLENBQUN4SixFQUFFLGVBQWUsSUFBSSxDQUFDQSxFQUFFLFFBQVEsRUFDeEU7a0JBQ0N1RyxHQUFHLEVBQUV0RCxRQUFRLENBQUNzRDtpQkFDZCxDQUNEO2dCQUNELElBQUksQ0FBQzhHLE9BQU8sR0FBR0QsWUFBWSxDQUFDdkwsSUFBSSxDQUFDd0wsT0FBTztnQkFDeEMsSUFBSSxDQUFDeEosWUFBWSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxJQUFJLENBQUN1SixZQUFZLENBQUMvSyxNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7ZUFDL0QsQ0FBQyxPQUFPVyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNxRSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNOEYsWUFBWUEsQ0FBQTtjQUNqQixJQUFJLENBQUNsTCxLQUFLLENBQUNnSSxLQUFLLEVBQUU7Y0FDbEIsSUFBSSxDQUFDekgsU0FBUyxDQUFDeUgsS0FBSyxFQUFFO2NBQ3RCLE1BQU0sSUFBSSxDQUFDLENBQUFaLGNBQWUsQ0FBQ3NELFNBQVMsRUFBRTtZQUN2QztZQUVBLE1BQU05RSxJQUFJQSxDQUFDNUYsS0FBSztjQUNmLE1BQU0sSUFBSSxDQUFDaEMsR0FBRyxDQUFDZ0MsS0FBSyxDQUFDO2NBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUFvSCxjQUFlLENBQUNzRCxTQUFTLENBQUMxSyxLQUFLLENBQUM7WUFDN0M7O1VBQ0F4QixPQUFBLENBQUF5SixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVBELElBQUFuTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFLTSxNQUFPaU4saUJBQWtCLFNBQVFsTixNQUFBLENBQUFJLGFBQWdDO1lBQ3RFLENBQUFDLFFBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDckIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBeUUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFLUCxDQUFBL0MsTUFBTztZQUVQLENBQUFtTSxTQUFVO1lBQ1YsQ0FBQUMsWUFBYSxHQUFHO2NBQUVDLE9BQU8sRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRSxFQUFFO2NBQUVDLFFBQVEsRUFBRSxFQUFFO2NBQUVDLFlBQVksRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFDN0YsQ0FBQUMsU0FBVSxHQUFHO2NBQUVMLE9BQU8sRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRSxFQUFFO2NBQUVFLFlBQVksRUFBRSxFQUFFO2NBQUVELFFBQVEsRUFBRSxFQUFFO2NBQUVFLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFDMUZoTSxJQUFJLEdBQVUsRUFBRTtZQUVoQixJQUFJa00sS0FBS0EsQ0FBQTtjQUNSLE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUMvTSxVQUFVLENBQUNnTixJQUFJLENBQUMxQixRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUM7Y0FDckUsT0FBTyxDQUFDeUIsVUFBVTtZQUNuQjtZQUVBcE0sWUFBWXVDLE1BQWdCLEVBQUUvQyxNQUFzQixFQUFFOE0sUUFBUTtjQUM3RCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWhLLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUN0RCxVQUFVLEdBQUdpTixRQUFRLEdBQUdBLFFBQVEsQ0FBQ3hFLEdBQUcsQ0FBQ3ZDLElBQUksSUFBSyxPQUFPQSxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2tFLElBQUssQ0FBQyxHQUFHLEVBQUU7Y0FFckcsSUFBSSxDQUFDLENBQUE1TCxLQUFNLEdBQUd5TyxRQUFRLElBQUksRUFBRTtjQUM1QixJQUFJLENBQUMsQ0FBQTlNLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQStDLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBcUcsT0FBT0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDMkQsYUFBYSxFQUFFO1lBQzVCO1lBRUEvRCxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDaEssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBME4sU0FBVSxFQUFFLElBQUksQ0FBQztZQUNoQztZQUNBLE1BQU1wQixRQUFRQSxDQUFDckIsSUFBSSxFQUFFdUIsS0FBYTtjQUNqQyxJQUFJO2dCQUNILElBQUksQ0FBQ3BGLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJNkQsSUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQytDLGVBQWUsQ0FBQ3hCLEtBQUssQ0FBQztnQkFFMUQsSUFBSSxDQUFDLENBQUExSSxHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU02QixHQUFHLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBbkYsTUFBTyxDQUFDcEIsRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFBbUUsTUFBTyxDQUFDbkUsRUFBRSxZQUFZO2dCQUN4RixNQUFNO2tCQUFFcUMsTUFBTTtrQkFBRVI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUNZLElBQUksQ0FBQ3lCLEdBQUcsRUFBRTtrQkFDbER1RixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUEzSCxNQUFPLENBQUMySCxLQUFLO2tCQUN6QjlJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQW1CLE1BQU8sQ0FBQ25CLElBQUk7a0JBQ3ZCK0ksV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBNUgsTUFBTyxDQUFDNEgsV0FBVztrQkFDckMwQixPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO2tCQUNyQjNDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTNHLE1BQU8sQ0FBQzJHLFFBQVE7a0JBQy9Ca0IsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBN0gsTUFBTyxDQUFDL0IsS0FBSyxDQUFDNEosU0FBUztrQkFDdkNZO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDdkssTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFHOUMsSUFBSSxDQUFDcEMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2dCQUNkLE9BQU9BLElBQUk7ZUFDWCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNxRSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQTs7Ozs7WUFLQXBILEdBQUdBLENBQUN5QixJQUFJLEVBQUV3TSxhQUFhLEdBQUcsS0FBSztjQUM5QixJQUFJQSxhQUFhLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBYixZQUFhLEdBQUczTCxJQUFJOztjQUUxQixJQUFJLENBQUNBLElBQUksQ0FBQ3hCLElBQUksQ0FBQ3dCLElBQUksQ0FBQztjQUVwQixJQUFJLENBQUNaLFVBQVUsQ0FBQ2xCLE9BQU8sQ0FBQ3dNLFFBQVEsSUFBRztnQkFDbEMsSUFBSSxDQUFDMUssSUFBSSxDQUFDMkssY0FBYyxDQUFDRCxRQUFRLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRzFLLElBQUksQ0FBQzBLLFFBQVEsQ0FBQztjQUNoQyxDQUFDLENBQUM7Y0FDRixJQUFJLENBQUMxSSxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNdUssZUFBZUEsQ0FBQ3hCLEtBQUs7Y0FDMUIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTFJLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFFM0MsTUFBTTZCLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUFuRixNQUFPLENBQUNwQixFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUFtRSxNQUFPLENBQUNuRSxFQUFFLG9CQUFvQjtnQkFDaEcsTUFBTTtrQkFBRXFDLE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDWSxJQUFJLENBQUN5QixHQUFHLEVBQUU7a0JBQ2xEdUYsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBM0gsTUFBTyxDQUFDMkgsS0FBSztrQkFDekJFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTdILE1BQU8sQ0FBQy9CLEtBQUssQ0FBQzRKLFNBQVM7a0JBQ3ZDWTtpQkFDQSxDQUFDO2dCQUNGLElBQUksQ0FBQ3ZLLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBRXJELElBQUksQ0FBQ3BDLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztnQkFFZCxPQUFPQSxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDcUUsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTThHLGFBQWFBLENBQUMxQixLQUFLO2NBQ3hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUExSSxHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU02QixHQUFHLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBbkYsTUFBTyxDQUFDcEIsRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFBbUUsTUFBTyxDQUFDbkUsRUFBRSxrQkFBa0I7Z0JBQzlGLE1BQU07a0JBQUVxQyxNQUFNO2tCQUFFUjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ1ksSUFBSSxDQUFDeUIsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDdEQsSUFBSSxDQUFDbEUsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztnQkFHckQsSUFBSSxDQUFDcEMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2dCQUVkLE9BQU9BLElBQUk7ZUFDWCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNxRSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0E1RyxPQUFBLENBQUF3TCxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSkQsSUFBQWxOLE1BQUEsR0FBQUMsT0FBQTtVQUtNLE1BQU9vUCwwQkFBMkIsU0FBUXJQLE1BQUEsQ0FBQUksYUFBMEI7WUFDekUsQ0FBQTZFLE1BQU87WUFDUCxDQUFBbEQsVUFBVyxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUN4Q0EsVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUV2QyxDQUFBc00sU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEzTCxZQUFZdUMsTUFBZ0I7Y0FDM0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDOEgsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Y0FDakMsSUFBSSxDQUFDLENBQUE5SCxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQS9ELEdBQUdBLENBQUN5QixJQUFJO2NBQ1AsSUFBSTJNLE1BQU0sR0FBRyxLQUFLO2NBQ2xCLE1BQU0vTCxPQUFPLEdBQUc4SixRQUFRLElBQUc7Z0JBQzFCLElBQUksQ0FBQzFLLElBQUksQ0FBQzJLLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDLEVBQUU7Z0JBRXBDLElBQUlBLFFBQVEsS0FBSyxXQUFXLEVBQUU7a0JBQzdCLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcxSyxJQUFJLENBQUMwSyxRQUFRLENBQUM7a0JBQy9CaUMsTUFBTSxHQUFHLElBQUk7a0JBQ2I7O2dCQUdELElBQUkzTSxJQUFJLENBQUMwSyxRQUFRLENBQUMsRUFBRWlDLE1BQU0sR0FBRyxJQUFJO2NBQ2xDLENBQUM7Y0FFRCxJQUFJLENBQUMsQ0FBQXZOLFVBQVcsQ0FBQ2xCLE9BQU8sQ0FBQzBDLE9BQU8sQ0FBQztjQUVqQyxJQUFJK0wsTUFBTSxFQUFFLElBQUksQ0FBQ2hMLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQWdILE9BQU9BLENBQUE7Y0FDTixNQUFNaUMsTUFBTSxHQUFHLEVBQUU7Y0FDakIsSUFBSSxDQUFDLENBQUF4TCxVQUFXLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ25DRSxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQ2xDLENBQUMsQ0FBQztjQUVGLE9BQU9FLE1BQU07WUFDZDs7VUFDQTdMLE9BQUEsQ0FBQTJOLDBCQUFBLEdBQUFBLDBCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hERCxJQUFBclAsTUFBQSxHQUFBQyxPQUFBO1VBS00sTUFBT3NQLHlCQUEwQixTQUFRdlAsTUFBQSxDQUFBSSxhQUEwQjtZQUN4RSxDQUFBNkUsTUFBTztZQUNQLENBQUFsRCxVQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDM0JBLFVBQVUsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUUxQixDQUFBc00sU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEzTCxZQUFZdUMsTUFBZ0I7Y0FDM0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDOEgsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQ2hGLElBQUksQ0FBQyxDQUFBOUgsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEvRCxHQUFHQSxDQUFDeUIsSUFBSTtjQUNQLElBQUkyTSxNQUFNLEdBQUcsS0FBSztjQUNsQixNQUFNL0wsT0FBTyxHQUFHOEosUUFBUSxJQUFHO2dCQUMxQixJQUFJLENBQUMxSyxJQUFJLENBQUMySyxjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUVwQyxJQUFJQSxRQUFRLEtBQUssV0FBVyxFQUFFO2tCQUM3QixJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHMUssSUFBSSxDQUFDMEssUUFBUSxDQUFDO2tCQUMvQmlDLE1BQU0sR0FBRyxJQUFJO2tCQUNiOztnQkFHRCxJQUFJM00sSUFBSSxDQUFDMEssUUFBUSxDQUFDLEVBQUVpQyxNQUFNLEdBQUcsSUFBSTtjQUNsQyxDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUF2TixVQUFXLENBQUNsQixPQUFPLENBQUMwQyxPQUFPLENBQUM7Y0FFakMsSUFBSStMLE1BQU0sRUFBRSxJQUFJLENBQUNoTCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25DO1lBRUFnSCxPQUFPQSxDQUFBO2NBQ04sTUFBTWlDLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQyxDQUFBeEwsVUFBVyxDQUFDbEIsT0FBTyxDQUFDd00sUUFBUSxJQUFHO2dCQUNuQ0UsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVEsQ0FBQztjQUNsQyxDQUFDLENBQUM7Y0FFRixPQUFPRSxNQUFNO1lBQ2Q7O1VBQ0E3TCxPQUFBLENBQUE2Tix5QkFBQSxHQUFBQSx5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREQsSUFBQUMsQ0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF3UCxlQUFBLEdBQUF4UCxPQUFBO1VBRUEsSUFBQXlQLE9BQUEsR0FBQXpQLE9BQUE7VUFFTSxNQUFPZ04sb0JBQW9CO1lBQ3hCLE9BQU8wQyxLQUFLLEdBQUc7Y0FDdEJ4SyxPQUFPLEVBQUVxSyxDQUFBLENBQUFJLGFBQWE7Y0FDdEIsaUJBQWlCLEVBQUVILGVBQUEsQ0FBQUksMkJBQTJCO2NBQzlDbEssTUFBTSxFQUFFK0osT0FBQSxDQUFBSTthQUNSO1lBQ0QsT0FBT3JPLEdBQUdBLENBQUNxQyxJQUFJLEVBQUV3RyxjQUFjLEVBQUVyRixNQUFNO2NBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMwSyxLQUFLLENBQUM3TCxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDNkwsS0FBSyxDQUFDeEssT0FBTyxDQUFDckIsSUFBSSxFQUFFd0csY0FBYyxFQUFFckYsTUFBTSxDQUFDO2NBRWxGLE9BQU8sSUFBSSxJQUFJLENBQUMwSyxLQUFLLENBQUM3TCxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxFQUFFd0csY0FBYyxFQUFFckYsTUFBTSxDQUFDO2NBQ3pEO1lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQWpGLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFFQSxJQUFBb0ssTUFBQSxHQUFBcEssT0FBQTtVQUNBLElBQUFtSyxZQUFBLEdBQUFuSyxPQUFBO1VBSU0sTUFBTzJQLGFBQWMsU0FBUTVQLE1BQUEsQ0FBQUksYUFBMEI7WUFDNUQsQ0FBQTZFLE1BQU87WUFDUCxDQUFBbEQsVUFBVyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzNCQSxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDMUIsQ0FBQWlELEdBQUk7WUFFTXVGLFdBQVc7WUFDWEQsY0FBYztZQUV4QixJQUFJeUYsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDaE8sVUFBVSxDQUFDc0ssTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRWUsUUFBUSxLQUFJO2dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUMsRUFBRSxPQUFPLEtBQUs7Z0JBQ2pDLE9BQU9mLEdBQUc7Y0FDWCxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1Q7WUFFQSxJQUFJMEQsU0FBU0EsQ0FBQTtjQUNaLE1BQU1qUCxHQUFHLEdBQUcsSUFBSSxDQUFDZ0IsVUFBVSxDQUFDZ04sSUFBSSxDQUFDMUIsUUFBUSxJQUFHO2dCQUMzQyxJQUFJQSxRQUFRLEtBQUssV0FBVyxFQUFFLE9BQU8sS0FBSztnQkFDMUMsSUFBSSxJQUFJLENBQUNBLFFBQVEsQ0FBQyxJQUFJZCxLQUFLLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNhLFFBQVEsQ0FBQyxDQUFDLEVBQUU7a0JBQ3BELE9BQU8sSUFBSSxDQUFDQSxRQUFRLENBQUMsQ0FBQ3pDLE1BQU0sR0FBRyxDQUFDOztnQkFFakMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDeUMsUUFBUSxDQUFDO2NBQ3hCLENBQUMsQ0FBQztjQUVGLE9BQU90TSxHQUFHO1lBQ1g7WUFFQSxJQUFJOE4sS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUNtQixTQUFTO1lBQ3ZCO1lBRUF0TixZQUFZb0IsSUFBSSxFQUFFd0csY0FBYyxFQUFFckYsTUFBZ0I7Y0FDakQsS0FBSyxFQUFFO2NBQ1AsTUFBTStKLFFBQVEsR0FBRzNFLE1BQUEsQ0FBQUssYUFBYSxDQUFDakosR0FBRyxDQUFDcUMsSUFBSSxDQUFDO2NBQ3hDLElBQUksQ0FBQ3dHLGNBQWMsR0FBR0EsY0FBYztjQUNwQyxJQUFJLENBQUNyRixNQUFNLEdBQUdBLE1BQU07Y0FFcEIsSUFBSSxDQUFDK0osUUFBUSxFQUFFO2dCQUNkLE1BQU0sSUFBSTFMLEtBQUssQ0FBQyxpQkFBaUJRLElBQUksWUFBWSxDQUFDOztjQUVuRCxJQUFJLENBQUN5RyxXQUFXLEdBQUcsSUFBSUgsWUFBQSxDQUFBVyxXQUFXLEVBQUU7Y0FDcEMsSUFBSSxDQUFDLENBQUEvRixHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDdEQsVUFBVSxHQUFHd0ssS0FBSyxDQUFDQyxPQUFPLENBQUN3QyxRQUFRLENBQUM5TCxLQUFLLENBQUMsR0FBRzhMLFFBQVEsQ0FBQzlMLEtBQUssR0FBRyxFQUFFO2NBRXJFLElBQUksQ0FBQyxDQUFBK0IsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEvRCxHQUFHQSxDQUFDeUIsSUFBSTtjQUNQLElBQUkyTSxNQUFNLEdBQUcsS0FBSztjQUVsQixJQUFJLENBQUN2TixVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDLElBQUksQ0FBQzFLLElBQUksQ0FBQzJLLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BDaUMsTUFBTSxHQUFHLElBQUk7Z0JBQ2IsSUFBSSxDQUFDakMsUUFBUSxDQUFDLEdBQUcxSyxJQUFJLENBQUMwSyxRQUFRLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO2NBQ0YsSUFBSWlDLE1BQU0sRUFBRSxJQUFJLENBQUNoTCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25DO1lBRUFnSCxPQUFPQSxDQUFBO2NBQ04sTUFBTWlDLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQ3hMLFVBQVUsQ0FBQ2xCLE9BQU8sQ0FBQ3dNLFFBQVEsSUFBRztnQkFDbENFLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQ25LLFFBQVEsRUFBRUgsS0FBSztjQUM3QixJQUFJO2dCQUNILElBQUksQ0FBQ29GLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJakYsUUFBUSxLQUFLLGlCQUFpQixFQUFFLE9BQU8sSUFBSSxDQUFDNE0saUJBQWlCLENBQUMvTSxLQUFLLENBQUM7Z0JBQ3hFLE1BQU1QLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzRILFdBQVcsQ0FBQ2lELFFBQVEsQ0FBQztrQkFDNUMxSixJQUFJLEVBQUUsZ0JBQWdCO2tCQUN0QmhELEVBQUUsRUFBRSxJQUFJLENBQUN3SixjQUFjLENBQUN4SixFQUFFO2tCQUMxQjZNLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTFJLE1BQU8sQ0FBQ25FLEVBQUU7a0JBQzNCdUMsUUFBUTtrQkFDUixHQUFHSDtpQkFDSCxDQUFDO2dCQUVGLElBQUksQ0FBQ2hDLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztnQkFDZCxJQUFJLENBQUMySCxjQUFjLENBQUNzRCxTQUFTLEVBQUU7Z0JBQy9CLElBQUksQ0FBQ3RKLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztlQUMvQixDQUFDLE9BQU9MLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlYLEtBQUssQ0FBQ1csQ0FBQyxDQUFDeUUsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQTRDLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUNuSixVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDOzs7Z0JBR0EsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRzdGLFNBQVM7Y0FDM0IsQ0FBQyxDQUFDO2NBQ0YsSUFBSSxDQUFDbEQsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQTVDLE9BQUEsQ0FBQWtPLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3R0QsSUFBQUosQ0FBQSxHQUFBdlAsT0FBQTtVQUVBLElBQUFpUSxTQUFBLEdBQUFqUSxPQUFBO1VBRUE7OztVQUdNLE1BQU80UCwyQkFBNEIsU0FBUUwsQ0FBQSxDQUFBSSxhQUFhO1lBQzdELENBQUEzSyxNQUFPO1lBRVBsRCxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO1lBQ3JDLENBQUFzTSxTQUFVLEdBQXVCLEVBQUU7WUFDbkMsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJMUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDMEQsU0FBUyxDQUFDekQsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQXlELFNBQVUsQ0FBQ3hELEtBQUssQ0FBQzVDLElBQUksSUFBSUEsSUFBSSxDQUFDMEMsS0FBSyxDQUFDO1lBQzlFO1lBRUEsSUFBSW9GLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ3BGLEtBQUs7WUFDbEI7WUFFQSxJQUFJd0YsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQzlCLFNBQVMsQ0FBQzdELEdBQUcsQ0FBQ3ZDLElBQUksSUFBSUEsSUFBSSxDQUFDbUksUUFBUSxDQUFDO1lBQ2pEO1lBRUFsUCxHQUFHQSxDQUFDeUIsSUFBSTtjQUNQLElBQUkyTSxNQUFNLEdBQUcsS0FBSztjQUVsQixJQUFJLENBQUN2TixVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDLElBQUlBLFFBQVEsS0FBSyxXQUFXLElBQUkxSyxJQUFJLENBQUMySyxjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2tCQUM5RCxJQUFJMUssSUFBSSxDQUFDMEssUUFBUSxDQUFDLEVBQUVpQyxNQUFNLEdBQUcsSUFBSTtrQkFFakMsTUFBTWpCLFNBQVMsR0FBRzFMLElBQUksQ0FBQzBLLFFBQVEsQ0FBQyxFQUFFN0MsR0FBRyxDQUFDLENBQUM3SCxJQUFJLEVBQUVuQixLQUFLLEtBQUk7b0JBQ3JELE1BQU02TyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUFoQyxTQUFVLENBQUM3TSxLQUFLLENBQUMsSUFBSSxJQUFJME8sU0FBQSxDQUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNyTCxNQUFNLENBQUM7b0JBQ2pGLE1BQU0vQixLQUFLLEdBQUcsT0FBT1AsSUFBSSxLQUFLLFFBQVEsR0FBRztzQkFBRXlOLFFBQVEsRUFBRXpOO29CQUFJLENBQUUsR0FBR0EsSUFBSTtvQkFDbEUwTixhQUFhLENBQUNuUCxHQUFHLENBQUNnQyxLQUFLLENBQUM7b0JBQ3hCLE9BQU9tTixhQUFhO2tCQUNyQixDQUFDLENBQUM7a0JBQ0YsSUFBSSxDQUFDLENBQUFoQyxTQUFVLEdBQUdBLFNBQVM7a0JBRTNCOztnQkFFRCxJQUFJLENBQUMxTCxJQUFJLENBQUMySyxjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUNwQ2lDLE1BQU0sR0FBRyxJQUFJO2dCQUNiLElBQUksQ0FBQ2pDLFFBQVEsQ0FBQyxHQUFHMUssSUFBSSxDQUFDMEssUUFBUSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUVGLElBQUlpQyxNQUFNLEVBQUUsSUFBSSxDQUFDaEwsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNuQztZQUVBZ0gsT0FBT0EsQ0FBQTtjQUNOLE1BQU1pQyxNQUFNLEdBQUcsRUFBRTtjQUVqQixJQUFJLENBQUN4TCxVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDLElBQUlBLFFBQVEsS0FBSyxXQUFXLEVBQUU7a0JBQzdCRSxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUM3QyxHQUFHLENBQUN2QyxJQUFJLElBQUlBLElBQUksQ0FBQ3FELE9BQU8sRUFBRSxDQUFDO2tCQUM3RDs7Z0JBRURpQyxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQ2xDLENBQUMsQ0FBQztjQUVGLE9BQU9FLE1BQU07WUFDZDtZQUVBckMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ25KLFVBQVUsQ0FBQ2xCLE9BQU8sQ0FBQ3dNLFFBQVEsSUFBRztnQkFDbEMsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtrQkFDN0IsSUFBSSxDQUFDLENBQUFnQixTQUFVLEdBQUcsRUFBRTtrQkFDcEI7O2dCQUVELElBQUloQixRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHN0YsU0FBUztjQUMzQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUNsRCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUFpTSxTQUFTQSxDQUFDL08sS0FBSyxFQUFFZ1AsTUFBTTtjQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFuQyxTQUFVLENBQUM3TSxLQUFLLENBQUMsRUFBRTtnQkFDNUIwQyxPQUFPLENBQUN1TSxJQUFJLENBQUMsNEJBQTRCLEVBQUVqUCxLQUFLLENBQUM7Z0JBQ2pEOztjQUVELElBQUksQ0FBQyxDQUFBNk0sU0FBVSxDQUFDN00sS0FBSyxDQUFDLENBQUNrUCxTQUFTLENBQUNGLE1BQU0sQ0FBQztjQUV4QyxJQUFJLENBQUM3TCxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNNkksUUFBUUEsQ0FBQ3RLLEtBQUs7Y0FDbkIsSUFBSTtnQkFDSCxJQUFJLENBQUNvRixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTNGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzRILFdBQVcsQ0FBQ2lELFFBQVEsQ0FBQztrQkFDNUMxSixJQUFJLEVBQUUsV0FBVztrQkFDakJoRCxFQUFFLEVBQUUsSUFBSSxDQUFDd0osY0FBYyxDQUFDeEosRUFBRTtrQkFDMUIsR0FBR29DO2lCQUNILENBQUM7Z0JBRUYsSUFBSSxDQUFDaEMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2dCQUNkLElBQUksQ0FBQzJILGNBQWMsQ0FBQ3NELFNBQVMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDdEosT0FBTyxDQUFDLGlCQUFpQixDQUFDO2VBQy9CLENBQUMsT0FBT0wsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVgsS0FBSyxDQUFDVyxDQUFDLENBQUN5RSxPQUFPLENBQUM7ZUFDMUIsU0FBUztnQkFDVCxJQUFJLENBQUNKLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQTVHLE9BQUEsQ0FBQW1PLDJCQUFBLEdBQUFBLDJCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHRCxJQUFBN1AsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQXdMLEtBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBbUssWUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFFTSxNQUFPcVEsZ0JBQWlCLFNBQVF0USxNQUFBLENBQUFJLGFBQTBCO1lBQy9ELENBQUE2RSxNQUFPO1lBQ0dzRixXQUFXO1lBQ3JCeEksVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUM7WUFDckQsQ0FBQWlELEdBQUk7WUFFSixJQUFJMkYsS0FBS0EsQ0FBQTtjQUNSekcsT0FBTyxDQUFDaUYsR0FBRyxDQUFDLElBQUksQ0FBQ2lILFFBQVEsRUFBRSxJQUFJLENBQUNPLE9BQU8sQ0FBQy9GLE1BQU0sRUFBRSxJQUFJLENBQUNnRyxhQUFhLENBQUM7Y0FDbkUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDUixRQUFRLElBQUksSUFBSSxDQUFDTyxPQUFPLENBQUMvRixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNnRyxhQUFhO1lBQzFFO1lBQ0FsTyxZQUFZdUMsTUFBZ0I7Y0FDM0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDbkUsRUFBRSxHQUFHLElBQUEySyxLQUFBLENBQUF1QixFQUFJLEdBQUU7Y0FDaEIsSUFBSSxDQUFDLENBQUEvSCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDcUYsY0FBYyxHQUFHckYsTUFBTSxDQUFDcUYsY0FBYztjQUMzQyxJQUFJLENBQUNxRyxPQUFPLEdBQUcsRUFBRTtjQUNqQixJQUFJLENBQUNwRyxXQUFXLEdBQUcsSUFBSUgsWUFBQSxDQUFBVyxXQUFXLEVBQUU7Y0FDcEMsSUFBSSxDQUFDLENBQUEvRixHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQW5FLEdBQUdBLENBQUN5QixJQUFJO2NBQ1AsSUFBSSxDQUFDWixVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDLElBQUlBLFFBQVEsS0FBSyxlQUFlLEVBQUUsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRzFLLElBQUksQ0FBQ2tPLGNBQWM7Z0JBQ3RFLElBQUksQ0FBQ2xPLElBQUksQ0FBQzJLLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcxSyxJQUFJLENBQUMwSyxRQUFRLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQS9CLE9BQU9BLENBQUE7Y0FDTixNQUFNaUMsTUFBTSxHQUFHLEVBQUU7Y0FDakIsSUFBSSxDQUFDeEwsVUFBVSxDQUFDbEIsT0FBTyxDQUFDd00sUUFBUSxJQUFHO2dCQUNsQ0UsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVEsQ0FBQztjQUNsQyxDQUFDLENBQUM7Y0FFRixPQUFPRSxNQUFNO1lBQ2Q7WUFFQW1ELFNBQVNBLENBQUNJLE1BQU07Y0FDZixJQUFJLElBQUksQ0FBQ0gsT0FBTyxDQUFDMUUsUUFBUSxDQUFDNkUsTUFBTSxDQUFDLEVBQUU7Y0FDbkMsSUFBSSxDQUFDSCxPQUFPLENBQUN4UCxJQUFJLENBQUMyUCxNQUFNLENBQUM7Y0FDekIsSUFBSSxDQUFDbk0sWUFBWSxFQUFFO1lBQ3BCO1lBQ0FvTSxZQUFZQSxDQUFDdlAsS0FBSztjQUNqQixJQUFJLENBQUNtUCxPQUFPLENBQUNLLE1BQU0sQ0FBQ3hQLEtBQUssRUFBRSxDQUFDLENBQUM7Y0FDN0IsSUFBSSxDQUFDbUQsWUFBWSxFQUFFO1lBQ3BCO1lBRUFzTSxVQUFVQSxDQUFDelAsS0FBSztjQUNmLElBQUksSUFBSSxDQUFDb1AsYUFBYSxLQUFLcFAsS0FBSyxFQUFFO2NBQ2xDLElBQUksQ0FBQ29QLGFBQWEsR0FBR3BQLEtBQUs7Y0FDMUIsSUFBSSxDQUFDbUQsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTXVNLGVBQWVBLENBQUE7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUM1SSxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTTNGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzRILFdBQVcsQ0FBQ2lELFFBQVEsQ0FBQztrQkFDNUMxSixJQUFJLEVBQUUsU0FBUztrQkFDZmhELEVBQUUsRUFBRSxJQUFJLENBQUN3SixjQUFjLENBQUN4SixFQUFFO2tCQUMxQnNQLFFBQVEsRUFBRSxJQUFJLENBQUNBO2lCQUNmLENBQUM7Z0JBRUYsSUFBSSxDQUFDbFAsR0FBRyxDQUFDO2tCQUFFeVAsT0FBTyxFQUFFaE8sSUFBSSxDQUFDZ08sT0FBTztrQkFBRUMsYUFBYSxFQUFFak8sSUFBSSxDQUFDa087Z0JBQWMsQ0FBRSxDQUFDO2dCQUN2RSxJQUFJLENBQUN2RyxjQUFjLENBQUNzRCxTQUFTLEVBQUU7Z0JBRS9CLElBQUksQ0FBQ3RKLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0IsT0FBTzNCLElBQUksQ0FBQ2dPLE9BQU87ZUFDbkIsQ0FBQyxPQUFPMU0sQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVgsS0FBSyxDQUFDVyxDQUFDLENBQUN5RSxPQUFPLENBQUM7ZUFDMUIsU0FBUztnQkFDVCxJQUFJLENBQUNKLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQTVHLE9BQUEsQ0FBQTRPLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFRCxJQUFBZCxDQUFBLEdBQUF2UCxPQUFBO1VBQ00sTUFBTzZQLG1CQUFvQixTQUFRTixDQUFBLENBQUFJLGFBQWE7WUFDckQsQ0FBQTNLLE1BQU87WUFFUGxELFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQztZQUM1RCxDQUFBaUQsR0FBSTtZQUNKLENBQUFxSixTQUFVO1lBQ1YsQ0FBQTlELFdBQVk7WUFDWixDQUFBRCxjQUFlO1lBRWYsQ0FBQTZHLGFBQWMsR0FBRztjQUNoQkMsUUFBUSxFQUFFLEVBQUU7Y0FDWkMsSUFBSSxFQUFFLEVBQUU7Y0FDUkMsT0FBTyxFQUFFO2FBQ1Q7WUFDRDVPLFlBQVlvQixJQUFJLEVBQUV3RyxjQUFjLEVBQUVyRixNQUFnQjtjQUNqRCxLQUFLLENBQUNuQixJQUFJLEVBQUV3RyxjQUFjLEVBQUVyRixNQUFNLENBQUM7Y0FDbkMsSUFBSSxDQUFDL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBaVEsYUFBYyxDQUFDO1lBQzlCO1lBRUEsSUFBSXBCLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ2hPLFVBQVUsQ0FBQ3NLLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVlLFFBQVEsS0FBSTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsT0FBTyxLQUFLO2dCQUNqQyxPQUFPZixHQUFHO2NBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNUO1lBRUFwTCxHQUFHQSxDQUFDeUIsSUFBSTtjQUNQLElBQUkyTSxNQUFNLEdBQUcsS0FBSztjQUVsQixJQUFJLENBQUN2TixVQUFVLENBQUNsQixPQUFPLENBQUN3TSxRQUFRLElBQUc7Z0JBQ2xDLElBQUksQ0FBQzFLLElBQUksQ0FBQzJLLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BDaUMsTUFBTSxHQUFHLElBQUk7Z0JBQ2IsSUFBSXBJLEtBQUssR0FBR21HLFFBQVEsS0FBSyxVQUFVLElBQUksQ0FBQzFLLElBQUksQ0FBQzBLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRzFLLElBQUksQ0FBQzBLLFFBQVEsQ0FBQztnQkFDNUUsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBR25HLEtBQUs7Y0FDdkIsQ0FBQyxDQUFDO2NBQ0YsSUFBSW9JLE1BQU0sRUFBRSxJQUFJLENBQUNoTCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25DO1lBRUE0RyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDaEssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBaVEsYUFBYyxDQUFDO2NBQzdCLElBQUksQ0FBQzdNLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7O1VBQ0E1QyxPQUFBLENBQUFvTyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkQsTUFBTXlCLEtBQUs7WUFDVixDQUFBOUcsS0FBTSxHQUFHLENBQ1I7Y0FDQzNKLEVBQUUsRUFBRSxnQkFBZ0I7Y0FDcEJxTCxJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCakosS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDO2NBQ3BCNkksU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7Y0FDaER0SSxTQUFTLEVBQUUsQ0FDVjtnQkFDQzBJLElBQUksRUFBRSxTQUFTO2dCQUNmRCxRQUFRLEVBQUU7ZUFDVixFQUNEO2dCQUNDc0YsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCckYsSUFBSSxFQUFFO2VBQ04sRUFDRDtnQkFDQ3FGLFlBQVksRUFBRSxTQUFTO2dCQUN2QnJGLElBQUksRUFBRTtlQUNOLEVBRUQ7Z0JBQ0NxRixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3pCckYsSUFBSSxFQUFFO2VBQ04sQ0FDRDtjQUNEc0YsTUFBTSxFQUFFO2FBQ1IsRUFDRDtjQUNDM1EsRUFBRSxFQUFFLFFBQVE7Y0FDWnFMLElBQUksRUFBRSxRQUFRO2NBQ2RqSixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO2NBQy9CNkksU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXO2FBQy9DLEVBQ0Q7Y0FDQ2pMLEVBQUUsRUFBRSxnQkFBZ0I7Y0FDcEJxTCxJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCakosS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztjQUM1QjZJLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU07YUFDdkQsRUFDRDtjQUNDakwsRUFBRSxFQUFFLGlCQUFpQjtjQUNyQnFMLElBQUksRUFBRSxpQkFBaUI7Y0FDdkI7Y0FDQWpKLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQztjQUNwQk8sU0FBUyxFQUFFLEVBQUU7Y0FDYjhHLFdBQVcsRUFBRSxXQUFXO2NBQ3hCa0gsTUFBTSxFQUFFLENBQUMsV0FBVzthQUNwQjtZQUNEO1lBQ0E7Y0FDQzNRLEVBQUUsRUFBRSxRQUFRO2NBQ1pxTCxJQUFJLEVBQUUsUUFBUTtjQUNkSixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztjQUNoRDdJLEtBQUssRUFBRSxDQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOO2dCQUNDaUosSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCc0YsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVM7ZUFDMUI7YUFFRixDQUNEO1lBRUQsSUFBSWxSLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBa0ssS0FBTTtZQUNuQjtZQUNBLENBQUFELEdBQUksR0FBOEIsSUFBSWxLLEdBQUcsRUFBRTtZQUMzQyxJQUFJd0osT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFVLEdBQUk7WUFDakI7WUFDQTlILFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQStILEtBQU0sQ0FBQzVKLE9BQU8sQ0FBQ2lELElBQUksSUFBRztnQkFDMUIsSUFBSSxDQUFDLENBQUEwRyxHQUFJLENBQUN0SixHQUFHLENBQUM0QyxJQUFJLENBQUNoRCxFQUFFLEVBQUVnRCxJQUFJLENBQUM7Y0FDN0IsQ0FBQyxDQUFDO1lBQ0g7WUFFQXJDLEdBQUdBLENBQUNYLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBMEosR0FBSSxDQUFDL0ksR0FBRyxDQUFDWCxFQUFFLENBQUM7WUFDekI7O1VBR007VUFBVyxNQUFNNEosYUFBYSxHQUFBaEosT0FBQSxDQUFBZ0osYUFBQSxHQUFHLElBQUk2RyxLQUFLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0duRCxJQUFBM1AsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUF5UixXQUFBLEdBQUF6UixPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFJQSxJQUFBbUssWUFBQSxHQUFBbkssT0FBQTtVQUlPO1VBQVUsTUFBTzBKLGNBQWUsU0FBUS9ILFNBQUEsQ0FBQUUsSUFBcUI7WUFDekRDLFVBQVUsR0FBRyxDQUN0QixJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxFQUNSLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsU0FBUyxFQUNULG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsYUFBYSxDQUNiO1lBRUQsQ0FBQXJCLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUN3RyxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBeEcsVUFBVyxDQUFDd0ssS0FBSyxFQUFFO2NBQ3hCLElBQUksQ0FBQyxDQUFBeEssVUFBVyxDQUFDUSxHQUFHLENBQUNnRyxLQUFLLENBQUM7Y0FDM0IsSUFBSSxDQUFDdkMsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsSUFBSWtILGVBQWVBLENBQUE7Y0FDbEI7Y0FDQSxPQUFPLElBQUk7WUFDWjtZQUNBLENBQUE4RixXQUFZLEdBQXlCLElBQUlyUixHQUFHLEVBQUU7WUFFOUMsSUFBSXFSLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsSUFBSWhILEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM3SixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzhMLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0MsU0FBUztZQUMzRTtZQUVBLElBQUk4RSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUNqSCxLQUFLLElBQUksSUFBSSxDQUFDakssVUFBVSxDQUFDaUssS0FBSztZQUMzQztZQUVBLENBQUEzRixHQUFJO1lBQ0osQ0FBQXVGLFdBQVk7WUFDSixPQUFPc0gsU0FBUyxHQUFHLElBQUl2UixHQUFHLEVBQUU7WUFFcENvQyxZQUFZO2NBQUU1QixFQUFFLEdBQUcwRyxTQUFTO2NBQUUxRCxJQUFJLEdBQUc7WUFBUSxDQUFFLEdBQUcsRUFBRTtjQUNuRDtjQUNBLEtBQUssQ0FBQztnQkFBRWhELEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFNBQVM7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQW1RO2NBQWMsQ0FBRSxDQUFDO2NBQzdFLElBQUksQ0FBQ0MsVUFBVSxFQUFFO2NBQ2pCLElBQUksQ0FBQyxDQUFBeEgsV0FBWSxHQUFHLElBQUlILFlBQUEsQ0FBQVcsV0FBVyxFQUFFO2NBQ3JDLElBQUksQ0FBQ2dDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2NBQ3JDLElBQUksQ0FBQyxDQUFBck0sVUFBVyxHQUFHLElBQUlnUixXQUFBLENBQUF2UixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBTyxVQUFXLENBQUNzUixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3JOLFlBQVksQ0FBQztjQUNoRDtjQUNBLElBQUksQ0FBQyxDQUFBSyxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDdkIsSUFBSSxHQUFHQSxJQUFJO2NBRWhCLElBQUksQ0FBQ21PLFFBQVEsR0FBRztnQkFBRUMsZUFBZSxFQUFFO2NBQUMsQ0FBRTtjQUN0Qy9FLFVBQVUsQ0FBQ2dGLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEsTUFBTXpNLFdBQVdBLENBQUMvQyxJQUFJO2NBQ3JCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUNWLE1BQU0sSUFBSVcsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUV2QyxJQUFJWCxJQUFJLENBQUNqQyxVQUFVLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBQSxVQUFXLENBQUMrSCxHQUFHLENBQUM5RixJQUFJLENBQUNqQyxVQUFVLENBQUM7O1lBRXZDO1lBRUEsTUFBTVEsR0FBR0EsQ0FBQ3lCLElBQUk7Y0FDYixLQUFLLENBQUN6QixHQUFHLENBQUN5QixJQUFJLENBQUM7Y0FDZixJQUFJLENBQUMsSUFBSSxDQUFDeVAsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQ0MsT0FBTztjQUUxQyxJQUFJMVAsSUFBSSxDQUFDakMsVUFBVSxJQUFJNkwsS0FBSyxDQUFDQyxPQUFPLENBQUM3SixJQUFJLENBQUNqQyxVQUFVLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLENBQUFBLFVBQVcsQ0FBQ3NLLFFBQVEsQ0FBQ3JJLElBQUksQ0FBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUM7O1lBRWxEO1lBRUEsTUFBTTRSLFVBQVVBLENBQUNDLFdBQW1CO2NBQ25DLE1BQU1yUCxLQUFLLEdBQUc7Z0JBQUVzUCxRQUFRLEVBQUUsSUFBSSxDQUFDMVIsRUFBRTtnQkFBRXlSO2NBQVcsQ0FBRTtjQUNoRCxJQUFJLENBQUMsQ0FBQXZOLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUMzQyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFpQixHQUFJLENBQUNZLElBQUksQ0FBQyxjQUFjLEVBQUUxQyxLQUFLLENBQUM7Y0FFNUQsSUFBSSxDQUFDYSxRQUFRLENBQUNaLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJRyxLQUFLLENBQUNTLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDOztjQUdoQyxPQUFPVyxRQUFRLENBQUNwQixJQUFJO1lBQ3JCO1lBRUE7Ozs7O1lBS0EsTUFBTThQLG1CQUFtQkEsQ0FBQ2pTLE1BQU07Y0FDL0IsSUFBSTtnQkFDSCxJQUFJLENBQUNrUyxhQUFhLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxDQUFDeFIsR0FBRyxDQUFDVixNQUFNLENBQUM7Z0JBQ2hCLE1BQU1tQyxJQUFJLEdBQXdCLE1BQU0sSUFBSSxDQUFDLENBQUE0SCxXQUFZLENBQUNpRCxRQUFRLENBQUM7a0JBQ2xFMU0sRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtrQkFDWGdNLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVM7a0JBQ3pCaEosSUFBSSxFQUFFO2lCQUNOLENBQUM7Z0JBRUYsSUFBSSxDQUFDbkIsSUFBSSxDQUFDaUssS0FBSyxFQUFFO2tCQUNoQjFJLE9BQU8sQ0FBQ3VNLElBQUksQ0FBQywwQ0FBMEMsRUFBRTlOLElBQUksQ0FBQzs7Z0JBRS9ELE1BQU0sSUFBSSxDQUFDekIsR0FBRyxDQUFDO2tCQUFFLEdBQUd5QixJQUFJO2tCQUFFN0IsRUFBRSxFQUFFNkIsSUFBSSxDQUFDN0IsRUFBRTtrQkFBRWdLLEtBQUssRUFBRTtnQkFBa0IsQ0FBRSxDQUFDO2dCQUVuRSxJQUFJbkksSUFBSSxDQUFDakMsVUFBVSxFQUFFO2tCQUNwQixJQUFJLENBQUNBLFVBQVUsQ0FBQ3NLLFFBQVEsQ0FBQ3JJLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQzs7Z0JBRzFDLElBQUksQ0FBQ2dTLGFBQWEsR0FBRyxLQUFLO2dCQUMxQixJQUFJLENBQUMvTixZQUFZLENBQUMsc0JBQXNCLENBQUM7ZUFDekMsQ0FBQyxPQUFPVixDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJWCxLQUFLLENBQUMsMkJBQTJCLENBQUM7ZUFDNUMsU0FBUztnQkFDVCxJQUFJLENBQUNvUCxhQUFhLEdBQUcsS0FBSzs7WUFFNUI7WUFDQSxNQUFNOUUsU0FBU0EsQ0FBQzFLLEtBQUssR0FBRyxFQUFFO2NBQ3pCLE1BQU1QLElBQUksR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQ3NNLGFBQWEsRUFBRTtnQkFDdkIsR0FBRy9MLEtBQUs7Z0JBQ1J4QyxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUMySyxRQUFRLEVBQUU7Z0JBQ3RDTyxRQUFRLEVBQUUsSUFBSSxDQUFDQztlQUNmO2NBRUQsTUFBTTlILFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQzhLLFNBQVMsQ0FBQ2pMLElBQUksQ0FBQztjQUVwRCxNQUFNLElBQUksQ0FBQ3pCLEdBQUcsQ0FBQzZDLFFBQVEsQ0FBQztjQUV4QixPQUFPQSxRQUFRO1lBQ2hCO1lBRUEsTUFBTTRPLGdCQUFnQkEsQ0FBQztjQUFFQztZQUFZLENBQUU7Y0FDdEMsTUFBTWpRLElBQUksR0FBRztnQkFDWmtRLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7Z0JBQ3ZCaEcsV0FBVyxFQUFFLElBQUksQ0FBQ0EsV0FBVztnQkFDN0IrRixZQUFZO2dCQUNaRSxNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNO2dCQUNuQmhHLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVM7Z0JBQ3pCaE0sRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFDWGlTLFFBQVEsRUFBRSxJQUFJLENBQUNBO2VBQ2Y7Y0FFRCxNQUFNdkMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFqRyxXQUFZLENBQUNpRCxRQUFRLENBQUM7Z0JBQy9DMUosSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUduQixJQUFJO2dCQUNQaVEsWUFBWTtnQkFDWkksZUFBZSxFQUFFLENBQUM7Z0JBQ2xCdFMsVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVSxDQUFDMkssUUFBUTtlQUNwQyxDQUFDO2NBRUYsSUFBSSxDQUFDbkssR0FBRyxDQUFDc1AsTUFBTSxDQUFDO2NBQ2hCLElBQUksQ0FBQzdMLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztjQUN6QyxPQUFPNkwsTUFBTTtZQUNkO1lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkEsTUFBTXlDLHdCQUF3QkEsQ0FBQztjQUFFbkc7WUFBUyxDQUFFO2NBQzNDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDeEUsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU0zRixJQUFJLEdBQXNCLE1BQU0sSUFBSSxDQUFDLENBQUE0SCxXQUFZLENBQUNpRCxRQUFRLENBQUM7a0JBQ2hFMUosSUFBSSxFQUFFLFdBQVc7a0JBQ2pCaEQsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtrQkFDWGdNO2lCQUMrQixDQUFDO2dCQUVqQzs7O2dCQUdBLE9BQU9uSyxJQUFJO2dCQUNYO2VBQ0EsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVgsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDZ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUE7Ozs7Ozs7WUFPQSxNQUFNNEssaUJBQWlCQSxDQUFDO2NBQUVwRyxTQUFTO2NBQUVxRztZQUFZLENBQUU7Y0FDbEQsSUFBSTtnQkFDSCxJQUFJLENBQUM3SyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTNGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNEgsV0FBWSxDQUFDaUQsUUFBUSxDQUFDO2tCQUM3QzFKLElBQUksRUFBRSx1QkFBdUI7a0JBQzdCcVAsWUFBWTtrQkFDWnJTLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7a0JBQ1hnTTtpQkFDQSxDQUFDO2dCQUVGLE9BQU9uSyxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVgsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDZ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTThLLG1CQUFtQkEsQ0FBQztjQUFFdFAsSUFBSTtjQUFFOE8sWUFBWTtjQUFFL0YsV0FBVztjQUFFRDtZQUFLLENBQUU7Y0FDbkUsT0FBTyxJQUFJLENBQUN5RyxrQkFBa0IsQ0FBQ3ZQLElBQUksRUFBRTtnQkFDcEMrSSxXQUFXO2dCQUNYK0YsWUFBWTtnQkFDWmhHO2VBQ0EsQ0FBQztZQUNIO1lBRUEsTUFBTWhKLE9BQU9BLENBQUNrQyxLQUFLO2NBQ2xCLElBQUksQ0FBQ2hDLElBQUksR0FBRyxRQUFRO2NBQ3BCLEtBQUssQ0FBQ0YsT0FBTyxDQUFDa0MsS0FBSyxDQUFDO1lBQ3JCO1lBRUEsTUFBTStILGVBQWVBLENBQUNDLE1BQU0sR0FBRyxFQUFFO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQSxNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJeEssS0FBSyxDQUFDLG9CQUFvQixDQUFDOztnQkFHdEMsTUFBTVMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF3RyxXQUFZLENBQUN3RCxLQUFLLENBQUM7a0JBQzlDRCxNQUFNO2tCQUNORSxJQUFJLEVBQUUsV0FBVztrQkFDakJDLE1BQU0sRUFBRTtpQkFDUixDQUFDO2dCQUVGLElBQUksQ0FBQyxDQUFBakosR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNMEksWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFsSixHQUFJLENBQUNZLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDOUUsRUFBRSxRQUFRLEVBQUU7a0JBQzdFdUcsR0FBRyxFQUFFdEQsUUFBUSxDQUFDc0Q7aUJBQ2QsQ0FBQztnQkFFRixJQUFJLENBQUM4RyxPQUFPLEdBQUcsR0FBR0QsWUFBWSxDQUFDdkwsSUFBSSxDQUFDd0wsT0FBTyxJQUFJbUYsV0FBVyxDQUFDQyxHQUFHLEVBQUUsRUFBRTtnQkFFbEUsSUFBSSxDQUFDNU8sWUFBWSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxJQUFJLENBQUN1SixZQUFZLENBQUMvSyxNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7ZUFDL0QsQ0FBQyxPQUFPVyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsYUFBYXhDLEdBQUdBLENBQUN5QixLQUFLO2NBQ3JCLElBQUksSUFBSSxDQUFDMk8sU0FBUyxDQUFDOVEsR0FBRyxDQUFDbUMsS0FBSyxDQUFDcEMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDK1EsU0FBUyxDQUFDcFEsR0FBRyxDQUFDeUIsS0FBSyxDQUFDcEMsRUFBRSxDQUFDOztjQUdwQyxNQUFNb0IsTUFBTSxHQUFHLElBQUl5SCxjQUFjLENBQUN6RyxLQUFLLENBQUM7Y0FDeEMsSUFBSUEsS0FBSyxDQUFDcEMsRUFBRSxFQUFFO2dCQUNiLE1BQU1vQixNQUFNLENBQUNlLElBQUksRUFBRTtlQUNuQixNQUFNO2dCQUNOLE1BQU1mLE1BQU0sQ0FBQ2QsT0FBTzs7Y0FHckIsSUFBSSxDQUFDeVEsU0FBUyxDQUFDM1EsR0FBRyxDQUFDZ0MsS0FBSyxDQUFDcEMsRUFBRSxFQUFFb0IsTUFBTSxDQUFDO2NBQ3BDLE9BQU9BLE1BQU07WUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25URCxJQUFBbEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBSU0sTUFBTzZSLGNBQWUsU0FBUTlSLE1BQUEsQ0FBQUksYUFBNkI7WUFDaEUsQ0FBQTRFLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBQ1AsQ0FBQVEsUUFBUztZQUNUL0MsWUFBWXVDLE1BQXNCO2NBQ2pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBaEMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF3RCxNQUFPLENBQUNuRSxFQUFFLEVBQUUsQ0FBQztjQUVsRixJQUFJLENBQUNxQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7O2NBR3hDLElBQUksQ0FBQyxDQUFBMkIsTUFBTyxDQUFDL0QsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBc0MsTUFBTyxDQUFDdkUsVUFBVSxDQUFDc0ssUUFBUSxDQUFDckksSUFBSSxDQUFDakMsVUFBVSxDQUFDO2NBRWpELElBQUl3QyxLQUFLLEVBQUV1QyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQVIsTUFBTyxDQUFDUyxXQUFXLENBQUMvQyxJQUFJLENBQUM7Y0FFekQsT0FBTztnQkFBRVEsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRCxNQUFNaUwsU0FBU0EsQ0FBQzFLLEtBQUs7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFFM0MsTUFBTTtrQkFBRXJDLE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDWSxJQUFJLENBQUMsaUJBQWlCLEVBQUUxQyxLQUFLLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQ0MsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDJCQUEyQixDQUFDOztnQkFFN0MsT0FBT1gsSUFBSTtlQUNYLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNdVAsUUFBUUEsQ0FBQzFTLEVBQUU7Y0FDaEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQWtFLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFFM0MsTUFBTTtrQkFBRXJDLE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLG1CQUFtQlgsRUFBRSxFQUFFLENBQUM7Z0JBQ3JFLElBQUksQ0FBQ3FDLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Z0JBRTlDLE9BQU9YLElBQUk7ZUFDWCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTXFGLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBdEUsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUUzQyxNQUFNN0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUNzRSxNQUFNLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBckUsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Z0JBRXpFLE9BQU82QixJQUFJO2VBQ1gsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1MLE9BQU9BLENBQUNWLEtBQUssR0FBRyxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQzNDLE1BQU07a0JBQUVyQyxNQUFNO2tCQUFFUjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDbkUsRUFBRSxVQUFVLEVBQUVvQyxLQUFLLENBQUM7Z0JBQ2xHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDhCQUE4QixDQUFDOztnQkFFaEQsT0FBT1gsSUFBSTtlQUNYLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0F2QyxPQUFBLENBQUFvUSxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZELElBQUFsUSxTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFFTztVQUFVLE1BQU93VCxhQUFjLFNBQVE3UixTQUFBLENBQUFpRyxVQUFVO1lBSXZEbkYsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUcsU0FBUyxFQUFFLGVBQWU7Z0JBQUVELEVBQUUsRUFBRSxVQUFVO2dCQUFFcUYsSUFBSSxFQUFFL0gsS0FBQSxDQUFBd1QsWUFBWTtnQkFBRTVRLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQWdTO2NBQW9CLENBQUUsQ0FBQztZQUMxRztZQUVBLE1BQU12TCx5QkFBeUJBLENBQUNsRixLQUFLO2NBQ3BDLE9BQU8sSUFBSSxDQUFDSixRQUFRLENBQUN1RixPQUFPLENBQUNuRixLQUFLLENBQUM7WUFDcEM7WUFFQSxNQUFNRCxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsSUFBSTtnQkFDSCxJQUFJLENBQUNvRixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxLQUFLLENBQUNyRixJQUFJLENBQUNDLEtBQUssQ0FBQztlQUN2QixDQUFDLE9BQU9lLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlYLEtBQUssQ0FBQ1csQ0FBQyxDQUFDeUUsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0E1RyxPQUFBLENBQUErUixhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7O1VqQjFCRDs7VUFFQTFOLE1BQUEsQ0FBQWtCLGNBQUEsQ0FBQXZGLE9BQUE7WUFDQXdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VWtCSkEsSUFBQXRGLFNBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBMEIsU0FBQSxHQUFBMUIsT0FBQTtVQUdPO1VBQVUsTUFBT3lULFlBQWEsU0FBUTlSLFNBQUEsQ0FBQUUsSUFBa0I7WUFDcERDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFRdkUsQ0FBQTRHLFdBQVksR0FBRyxJQUFJckksR0FBRyxFQUFFO1lBQ3hCLElBQUlxSSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ25JLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDO1lBQ0FvSSxTQUFTLEdBQUcsSUFBSXRJLEdBQUcsRUFBRTtZQUVyQixDQUFBc1QsT0FBUSxHQUFZLEVBQUU7WUFDdEIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxDQUFBQyxRQUFTLEdBQVksRUFBRTtZQUN2QixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLFFBQVMsR0FBWSxFQUFFO1lBQ3ZCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0FwUixZQUFZO2NBQUU1QixFQUFFLEdBQUcwRztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLGVBQWU7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQWdTO2NBQW9CLENBQUUsQ0FBQztZQUMxRjtZQUVBLE1BQU01SyxNQUFNQSxDQUFDN0YsS0FBSztjQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDSixRQUFRLENBQUNpRyxNQUFNLENBQUM3RixLQUFLLENBQUM7WUFDekM7WUFFQSxNQUFNOEYsSUFBSUEsQ0FBQzlGLEtBQUs7Y0FDZixPQUFPLE1BQU0sSUFBSSxDQUFDSixRQUFRLENBQUNrRyxJQUFJLENBQUM5RixLQUFLLENBQUM7WUFDdkM7WUFFQSxNQUFNRCxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsTUFBTTtnQkFBRUMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQ2hELElBQUksQ0FBQ0MsTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2NBRWxELElBQUksQ0FBQ1gsSUFBSSxDQUFDb1IsTUFBTSxFQUFFO2dCQUNqQjdQLE9BQU8sQ0FBQ3VNLElBQUksQ0FBQyxpQ0FBaUMsRUFBRTlOLElBQUksQ0FBQztnQkFDckQ7O2NBR0RBLElBQUksQ0FBQ29SLE1BQU0sQ0FBQ2xULE9BQU8sQ0FBQ21ULE1BQU0sSUFBRztnQkFDNUIsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFVBQVUsRUFBRTtrQkFDdkIsSUFBSSxDQUFDLENBQUFILFFBQVMsQ0FBQzNTLElBQUksQ0FBQzZTLE1BQU0sQ0FBQztrQkFDM0I7O2dCQUVEQSxNQUFNLENBQUNFLElBQUksS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFMLFFBQVMsQ0FBQzFTLElBQUksQ0FBQzZTLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBSixPQUFRLENBQUN6UyxJQUFJLENBQUM2UyxNQUFNLENBQUM7Y0FDckYsQ0FBQyxDQUFDO2NBRUYsT0FBT3JSLElBQUk7WUFDWjtZQUNBLE1BQU1zRyxPQUFPQSxDQUFDL0YsS0FBSztjQUNsQixPQUFPLE1BQU0sSUFBSSxDQUFDSixRQUFRLENBQUNtRyxPQUFPLENBQUMvRixLQUFLLENBQUM7WUFDMUM7WUFFQSxNQUFNZ0csTUFBTUEsQ0FBQ2hHLEtBQUs7Y0FDakJnQixPQUFPLENBQUNpRixHQUFHLENBQUMseUNBQXlDLENBQUM7Y0FDdEQsT0FBT2pHLEtBQUs7Y0FDWjtZQUNEO1lBRUEsTUFBTWtHLFVBQVVBLENBQUNsRyxLQUFLO2NBQ3JCZ0IsT0FBTyxDQUFDaUYsR0FBRyxDQUFDLDZDQUE2QyxFQUFFakcsS0FBSyxDQUFDO2NBQ2pFLE9BQU9BLEtBQUs7Y0FDWjtZQUNEOztVQUNBeEIsT0FBQSxDQUFBZ1MsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdFRCxJQUFBOU8sSUFBQSxHQUFBM0UsT0FBQTtVQUdBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTSxNQUFPMFQsb0JBQW9CO1lBQ2hDLENBQUEzTyxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQdkMsWUFBWXVDLE1BQW9CO2NBQy9CLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBb0UsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixJQUFJLENBQUMsQ0FBQXJFLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztjQUU5RCxPQUFPO2dCQUFFMEIsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRE0sSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxrQkFBa0J5QixLQUFLLENBQUNwQyxFQUFFLEVBQUUsQ0FBQztjQUUxRSxJQUFJb0MsS0FBSyxFQUFFdUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDL0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVRLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQsTUFBTTJHLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBdEUsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUUzQyxNQUFNN0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUNzRSxNQUFNLENBQUMsa0JBQWtCLElBQUksQ0FBQyxDQUFBckUsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Z0JBRXhFLE9BQU82QixJQUFJO2VBQ1gsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1MLE9BQU9BLENBQUNWLEtBQUssR0FBRyxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQzNDLE1BQU0rRCxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZFLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGdCQUFnQixFQUFFMUMsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUNxRyxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTThFLE1BQU1BLENBQUM3RixLQUFLLEdBQUcsRUFBRTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNK0QsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2RSxHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQ25FLEVBQUUsU0FBUyxFQUFFb0MsS0FBSyxDQUFDO2dCQUNuRixJQUFJLENBQUNxRyxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTStFLElBQUlBLENBQUM5RixLQUFLLEdBQUcsRUFBRTtjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQ3RCLE9BQU8sQ0FBQ2lGLEdBQUcsQ0FBQ2pHLEtBQUssRUFBRSxPQUFPLENBQUM7Z0JBQzNCLE1BQU1xRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZFLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLHFCQUFxQixFQUFFMUMsS0FBSyxDQUFDO2dCQUU5RCxJQUFJLENBQUNxRyxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTWdGLE9BQU9BLENBQUMvRixLQUFLLEdBQUcsRUFBRTtjQUN2QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNK0QsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2RSxHQUFJLENBQUNZLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQ25FLEVBQUUsVUFBVSxFQUFFb0MsS0FBSyxDQUFDO2dCQUNwRixJQUFJLENBQUNxRyxHQUFHLENBQUNwRyxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZDQUE2QyxDQUFDOztnQkFFL0QsT0FBT2lHLEdBQUc7ZUFDVixDQUFDLE9BQU90RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTWlGLE1BQU1BLENBQUNoRyxLQUFLLEdBQUcsRUFBRTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQztnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQSxPQUFPdEMsS0FBSztlQUNaLENBQUMsT0FBT2UsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQXZDLE9BQUEsQ0FBQWlTLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9HRCxJQUFBL1IsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwQixTQUFBLEdBQUExQixPQUFBO1VBRU87VUFBVSxNQUFPa1UsT0FBUSxTQUFRdlMsU0FBQSxDQUFBaUcsVUFBVTtZQUNqRDtZQUNBbkYsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUcsU0FBUyxFQUFFLFNBQVM7Z0JBQUVELEVBQUUsRUFBRSxVQUFVO2dCQUFFcUYsSUFBSSxFQUFFL0gsS0FBQSxDQUFBa1UsTUFBTTtnQkFBRXRSLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQTBTO2NBQWMsQ0FBRSxDQUFDO1lBQ3hGOztVQUNBM1MsT0FBQSxDQUFBeVMsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RELElBQUF2UyxTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFDTztVQUFXLE1BQU9tVSxNQUFPLFNBQVF4UyxTQUFBLENBQUFFLElBQVk7WUFDbkRZLFlBQVk7Y0FBRTVCO1lBQUUsQ0FBRTtjQUNqQixLQUFLLENBQUM7Z0JBQUVBLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFNBQVM7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQTBTO2NBQWMsQ0FBRSxDQUFDO1lBQzlFOztVQUNBM1MsT0FBQSxDQUFBMFMsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05ELElBQUFwVSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFJTSxNQUFPb1UsY0FBZSxTQUFRclUsTUFBQSxDQUFBSSxhQUE2QjtZQUNoRSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFDUHZDLFlBQVl1QyxNQUF3QjtjQUNuQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFDQWhDLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRXJDLE1BQU07Z0JBQUVSO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBd0QsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Y0FFbEYsSUFBSSxDQUFDcUMsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUV4QyxJQUFJLENBQUMsQ0FBQTJCLE1BQU8sQ0FBQy9ELEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztjQUN0QixJQUFJLENBQUMsQ0FBQXNDLE1BQU8sQ0FBQ3ZFLFVBQVUsQ0FBQ3NLLFFBQVEsQ0FBQ3JJLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQztjQUVqRCxJQUFJd0MsS0FBSyxFQUFFdUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDL0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVRLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDOztVQUNEakIsT0FBQSxDQUFBMlMsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRCxJQUFBclUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRUEsSUFBQThFLFNBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBNEIsS0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUF3RyxNQUFBLEdBQUF4RyxPQUFBO1VBQ087VUFBVSxNQUFPeUcsVUFBVyxTQUFRMUcsTUFBQSxDQUFBSSxhQUF5QjtZQUNuRSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUCxDQUFBbkUsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsQ0FBQXlCLG9CQUFxQjtZQUNyQixJQUFJQSxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBQ0EsQ0FBQUYsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUQsUUFBUyxHQUFVLEVBQUU7WUFDckIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBNEIsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQTJDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUF2QyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBcEMsWUFBYTtZQUNiLENBQUFTLFVBQVc7WUFDWEMsWUFBWTtjQUFFVjtZQUFZLENBQXlDO2NBQ2xFLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBQSxZQUFhLEdBQUdBLFlBQVk7Y0FDakMsSUFBSSxDQUFDLENBQUFnRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFDQXBDLElBQUksR0FBRyxNQUFBQSxDQUFPbkMsRUFBRSxFQUFFOEYsTUFBTyxLQUFJO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRXpELE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUN0Q00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQyxDQUNqQy9ELEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFPLFlBQWEsSUFBSWxCLEVBQUUsU0FBUyxFQUFFO2tCQUFFOEY7Z0JBQU0sQ0FBRSxDQUFDO2dCQUVwRSxJQUFJLENBQUN6RCxNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7Z0JBRXhELElBQUksQ0FBQyxDQUFBbEIsUUFBUyxHQUFHTyxJQUFJLENBQUNQLFFBQVEsSUFBSSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHTSxJQUFJLENBQUNOLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBMkIsU0FBVSxHQUFHckIsSUFBSSxDQUFDcUIsU0FBUztnQkFDaEMsSUFBSSxDQUFDLENBQUF6QixvQkFBcUIsR0FBR0ksSUFBSSxDQUFDSixvQkFBb0I7Z0JBQ3RELElBQUksQ0FBQyxDQUFBb0UsV0FBWSxHQUFHaEUsSUFBSSxDQUFDZ0UsV0FBVztnQkFDcEMsSUFBSSxDQUFDdEMsZUFBZSxFQUFFO2dCQUN0QixJQUFJLENBQUN3QyxNQUFNLEdBQUcsSUFBSTtlQUNsQixDQUFDLE9BQU81QyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNSSxlQUFlQSxDQUFBO2NBQ3BCLElBQUksSUFBSSxDQUFDLENBQUE1QixVQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztjQUM3QyxJQUFJLENBQUMsQ0FBQUEsVUFBVyxHQUFHLElBQUlnRSxNQUFBLENBQUFsQyxjQUFjLEVBQUU7Y0FFdkMsTUFBTUgsSUFBSSxHQUFHLElBQUl2QyxLQUFBLENBQUEyQyxJQUFJLENBQUM7Z0JBQUUxRCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE2RixXQUFZLENBQUN2QyxJQUFJLENBQUN0RDtjQUFFLENBQUUsQ0FBQztjQUN4RCxNQUFNc0QsSUFBSSxDQUFDSyxPQUFPLEVBQUU7Y0FDcEIsSUFBSSxDQUFDLENBQUFMLElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQTNCLFVBQVcsQ0FBQ2lDLE9BQU8sRUFBRTtjQUMxQixJQUFJLENBQUNDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDakM7WUFFQWYsT0FBTyxHQUFHLE1BQU1WLEtBQUssSUFBRztjQUN2QixJQUFJO2dCQUNILE1BQU00QyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM5QyxLQUFLLENBQUM7Z0JBQy9DLE1BQU0rQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2dCQUMzQkosS0FBSyxDQUFDakYsT0FBTyxDQUFDc0YsSUFBSSxJQUFHO2tCQUNwQkYsSUFBSSxDQUFDRyxNQUFNLENBQUNELElBQUksRUFBRWpELEtBQUssQ0FBQ2lELElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUM7Z0JBRUZGLElBQUksQ0FBQ0csTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQXBFLFlBQWEsQ0FBQztnQkFFL0MsTUFBTXFFLEdBQUcsR0FBRyxJQUFJdEIsU0FBQSxDQUFBdUIsU0FBUyxFQUFFO2dCQUMzQkQsR0FBRyxDQUFDZixNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUNyQyxNQUFNekIsUUFBUSxHQUFHLE1BQU1zQyxHQUFHLENBQUNFLE1BQU0sQ0FBQ04sSUFBSSxFQUFFLEdBQUdwQixPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztnQkFDM0YsTUFBTW1CLElBQUksR0FBRyxNQUFNekMsUUFBUSxDQUFDeUMsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQ3JELE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJRyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUUvQyxJQUFJLENBQUMsQ0FBQWxCLFFBQVMsR0FBR29FLElBQUksQ0FBQzdELElBQUksQ0FBQ1AsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBR21FLElBQUksQ0FBQzdELElBQUksQ0FBQ04sUUFBUTtnQkFDbkMsSUFBSSxDQUFDLENBQUFFLG9CQUFxQixHQUFHaUUsSUFBSSxDQUFDN0QsSUFBSSxDQUFDSixvQkFBb0I7Z0JBQzNELElBQUksQ0FBQ29DLFlBQVksRUFBRTtnQkFDbkIsT0FBTzZCLElBQUksQ0FBQzdELElBQUk7ZUFDaEIsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQ2QyxhQUFhLEdBQUcsTUFBTTVELEtBQUssSUFBRztjQUM3QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUUzQyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFpQixHQUFJLENBQUNZLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtrQkFDL0QsR0FBRzFDLEtBQUs7a0JBQ1JsQixZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUFBO2lCQUNuQixDQUFDO2dCQUVGLElBQUksQ0FBQytCLFFBQVEsQ0FBQ1osTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2dCQUMvRCxJQUFJLENBQUMsQ0FBQVUsU0FBVSxHQUFHRCxRQUFRLENBQUNwQixJQUFJLENBQUNxQixTQUFTO2dCQUN6QyxJQUFJLENBQUNNLE9BQU8sQ0FBQyxRQUFRLENBQUM7ZUFDdEIsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0R2QyxPQUFBLENBQUFnRixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0hELElBQUE5RSxTQUFBLEdBQUEzQixPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPcVUsUUFBUyxTQUFRMVMsU0FBQSxDQUFBaUcsVUFBVTtZQUNsREksSUFBSSxHQUFHL0gsS0FBQSxDQUFBcVUsT0FBTztZQUNkN1IsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUcsU0FBUyxFQUFFLFVBQVU7Z0JBQUVELEVBQUUsRUFBRTtjQUFVLENBQUUsQ0FBQztZQUNqRDs7VUFDQWxCLE9BQUEsQ0FBQTRTLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUTTtVQUFXLE1BQU1FLEtBQUssR0FBQTlTLE9BQUEsQ0FBQThTLEtBQUEsR0FBRztZQUMvQkMsV0FBVyxFQUFFLElBQUk7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakJDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCQyxHQUFHLEVBQUUsSUFBSTtZQUNUQyxhQUFhLEVBQUU7V0FDZjs7Ozs7Ozs7Ozs7VXBDUkQ7O1VBRUEvTyxNQUFBLENBQUFrQixjQUFBLENBQUF2RixPQUFBO1lBQ0F3RixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VxQ0pBLElBQUF0RixTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQVdPO1VBQVUsTUFBT3NVLE9BQVEsU0FBUTNTLFNBQUEsQ0FBQUUsSUFBYztZQUMzQ0MsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBRS9ELENBQUFnVCxNQUFPO1lBU1AsQ0FBQXZTLFVBQVc7WUFDWCxJQUFJNkUsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sR0FBR3hDLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDeUQsT0FBTyxvQkFBb0IsSUFBSSxDQUFDeEcsRUFBRSxFQUFFO1lBQzdEO1lBRUE0QixZQUFZO2NBQUU1QixFQUFFLEdBQUcwRztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFO2NBQVUsQ0FBRSxDQUFDO1lBQ3JEO1lBRUFtUyxTQUFTQSxDQUFDL1AsTUFBYztjQUN2QixJQUFJLENBQUMsQ0FBQThQLE1BQU8sR0FBRzlQLE1BQU07WUFDdEI7WUFFQSxNQUFNaEMsSUFBSUEsQ0FBQ0MsS0FBQSxHQUF5QixFQUFFO2NBQ3JDLE1BQU0sSUFBSSxDQUFDOUIsT0FBTztjQUNsQixJQUFJLENBQUM4QixLQUFLLENBQUNwQyxFQUFFLEVBQUVvQyxLQUFLLENBQUNwQyxFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO2NBQ2pDLE1BQU07Z0JBQUVxQyxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFdkQsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsMEJBQTBCRixLQUFLLEVBQUUsQ0FBQzs7Y0FHbkQsT0FBT1QsSUFBSTtZQUNaO1lBRUE7Ozs7WUFJQSxNQUFNaUIsT0FBT0EsQ0FBQ3FSLFFBQWdCLEVBQUUxQyxXQUFtQjtjQUNsRHJPLE9BQU8sQ0FBQ2dSLEtBQUssQ0FBQyxrQkFBa0IsRUFBRUQsUUFBUSxFQUFFMUMsV0FBVyxDQUFDO2NBQ3hELE1BQU14TyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNqQixRQUFRLENBQUNjLE9BQU8sQ0FBQ3FSLFFBQVEsRUFBRTFDLFdBQVcsQ0FBQztjQUNuRSxJQUFJLENBQUN4TyxRQUFRLENBQUNaLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJRyxLQUFLLENBQUMsd0JBQXdCUyxRQUFRLENBQUNYLEtBQUssRUFBRSxDQUFDOztjQUcxRCxPQUFPO2dCQUFFRCxNQUFNLEVBQUVZLFFBQVEsQ0FBQ1osTUFBTTtnQkFBRVIsSUFBSSxFQUFFb0IsUUFBUSxFQUFFcEI7Y0FBSSxDQUFFO1lBQ3pEO1lBRUEsTUFBTWdGLE1BQU1BLENBQUNuQyxLQUFhO2NBQ3pCLE1BQU1SLEdBQUcsR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxNQUFNbkMsS0FBSyxHQUFHO2dCQUFFb0MsTUFBTSxFQUFFRSxLQUFLO2dCQUFFMUUsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRTVDLE1BQU1pRCxRQUFRLEdBQUcsTUFBTWlCLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDLGtCQUFrQixFQUFFMUMsS0FBSyxDQUFDO2NBQzFELE9BQU9hLFFBQVE7WUFDaEI7O1VBQ0FyQyxPQUFBLENBQUE2UyxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVELElBQUEzUyxTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFrQk87VUFBVSxNQUFPa1YsWUFBYSxTQUFRdlQsU0FBQSxDQUFBRSxJQUFtQjtZQUNyREMsVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQztZQVdqRCxDQUFBNEcsV0FBWTtZQUNaLENBQUF5TSxPQUFRO1lBRVIxUyxZQUFZO2NBQUU1QixFQUFFLEdBQUcwRztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLGNBQWM7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQTBUO2NBQW9CLENBQUUsQ0FBQztZQUN6RjtZQUVBLE1BQU1wUyxJQUFJQSxDQUFBO2NBQ1QsTUFBTSxJQUFJLENBQUM3QixPQUFPO2NBRWxCLE1BQU07Z0JBQUUrQixNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ00sSUFBSSxFQUFFO2NBQ2xELElBQUksQ0FBQ0UsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZCQUE2QkYsS0FBSyxFQUFFLENBQUM7O2NBR3RELElBQUksQ0FBQyxDQUFBdUYsV0FBWSxHQUFHaEcsSUFBSSxDQUFDZ0csV0FBVztjQUNwQyxJQUFJLENBQUMsQ0FBQXlNLE9BQVEsR0FBR3pTLElBQUksQ0FBQ3lTLE9BQU87Y0FFNUIsT0FBT3pTLElBQUk7WUFDWjs7VUFDQWpCLE9BQUEsQ0FBQXlULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREQsSUFBQXZRLElBQUEsR0FBQTNFLE9BQUE7VUFFQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU0sTUFBT29WLG9CQUFxQixTQUFRclYsTUFBQSxDQUFBSSxhQUFtQztZQUM1RSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUHZDLFlBQVl1QyxNQUFvQjtjQUMvQixLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQWhDLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakIsSUFBSSxDQUFDLENBQUErQixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRXJDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVUO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsZ0JBQWdCLENBQUM7Y0FFckU7OztjQUdBLElBQUksQ0FBQzBCLE1BQU0sRUFBRTtnQkFDWixPQUFPO2tCQUNOQSxNQUFNLEVBQUUsSUFBSTtrQkFDWlIsSUFBSSxFQUFFO29CQUNMZ0csV0FBVyxFQUFFLEVBQUU7b0JBQ2Z5TSxPQUFPLEVBQUU7c0JBQUV0VSxFQUFFLEVBQUVnRSxRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ25CLEVBQUU7c0JBQUVxTCxJQUFJLEVBQUVySCxRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3FUO29CQUFXOztpQkFFN0U7O2NBR0YsT0FBTztnQkFBRW5TLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDOztVQUNEakIsT0FBQSxDQUFBMlQsb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENNLE1BQU1FLElBQUksR0FBQTdULE9BQUEsQ0FBQTZULElBQUEsR0FBRztZQUNuQnJULE1BQU0sRUFBRTtjQUNQMEssS0FBSyxFQUFFLDRCQUE0QjtjQUNuQ0MsV0FBVyxFQUNWO2FBQ0Q7WUFDRG5NLFVBQVUsRUFBRSxDQUNYO2NBQ0NvRCxJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCcUksSUFBSSxFQUFFLG1CQUFtQjtjQUN6QlUsV0FBVyxFQUFFLDJGQUEyRjtjQUN4R0MsU0FBUyxFQUFFLDBDQUEwQztjQUNyRDBJLElBQUksRUFBRSxDQUFDO2NBQ1B0UyxLQUFLLEVBQUU7Z0JBQ051UyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXOzthQUUxRCxFQUVEO2NBQ0MzUixJQUFJLEVBQUUsaUJBQWlCO2NBQ3ZCcUksSUFBSSxFQUFFLHdCQUF3QjtjQUM5QlUsV0FBVyxFQUFFLHFGQUFxRjtjQUNsR0MsU0FBUyxFQUFFLGdEQUFnRDtjQUMzRDBJLElBQUksRUFBRSxDQUFDO2NBQ1B0UyxLQUFLLEVBQUU7Z0JBQ05tTCxTQUFTLEVBQUUsQ0FDVixtQ0FBbUMsRUFDbkMsa0RBQWtELEVBQ2xELDhDQUE4Qzs7YUFHaEQsRUFDRDtjQUNDdkssSUFBSSxFQUFFLFFBQVE7Y0FDZHFJLElBQUksRUFBRSxpQ0FBaUM7Y0FDdkNVLFdBQVcsRUFBRSxrRUFBa0U7Y0FDL0VDLFNBQVMsRUFBRSxxREFBcUQ7Y0FDaEUwSSxJQUFJLEVBQUUsQ0FBQztjQUNQdFMsS0FBSyxFQUFFO2dCQUNOd1MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1COzthQUVwRixFQUVEO2NBQ0M1UixJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCcUksSUFBSSxFQUFFLDRCQUE0QjtjQUNsQ1UsV0FBVyxFQUNWLHdHQUF3RztjQUN6R0MsU0FBUyxFQUFFLDJDQUEyQztjQUN0RDBJLElBQUksRUFBRSxDQUFDO2NBQ1B0UyxLQUFLLEVBQUU7Z0JBQ051UyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLDBCQUEwQjs7YUFFN0QsRUFDRDtjQUNDM1IsSUFBSSxFQUFFLGNBQWM7Y0FDcEJxSSxJQUFJLEVBQUUsK0JBQStCO2NBQ3JDVSxXQUFXLEVBQUUscUZBQXFGO2NBQ2xHQyxTQUFTLEVBQUUsb0RBQW9EO2NBQy9EMEksSUFBSSxFQUFFLENBQUM7Y0FDUHRTLEtBQUssRUFBRTtnQkFDTnlTLElBQUksRUFBRTs7YUFFUCxFQUVEO2NBQ0M3UixJQUFJLEVBQUUsU0FBUztjQUNmcUksSUFBSSxFQUFFLDZCQUE2QjtjQUNuQ1UsV0FBVyxFQUFFLGlGQUFpRjtjQUM5RkMsU0FBUyxFQUFFLG9EQUFvRDtjQUMvRDBJLElBQUksRUFBRSxDQUFDO2NBQ1B0UyxLQUFLLEVBQUU7YUFDUDtXQUVGOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFRCxJQUFBbEQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyVixjQUFBLEdBQUEzVixPQUFBO1VBQ0EsSUFBQTRCLEtBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUdNLE1BQU84SyxXQUFZLFNBQVEvSyxNQUFBLENBQUFJLGFBQTBCO1lBRzFELENBQUE0RSxHQUFJO1lBQ0p0QyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDcUssYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBL0gsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEO1lBRUEsTUFBTW1JLFFBQVFBLENBQUN0SyxLQUFVO2NBQ3hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU07a0JBQUVyQyxNQUFNO2tCQUFFUjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGNBQWMsRUFBRTtrQkFBRSxHQUFHMUM7Z0JBQUssQ0FBRSxDQUFDO2dCQUMzRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztnQkFDNUQsT0FBT1gsSUFBSTtlQUNYLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlYLEtBQUssQ0FBQ1csQ0FBQyxDQUFDeUUsT0FBTyxDQUFDOztZQUU1QjtZQUVBbU4saUJBQWlCQSxDQUFDM1MsS0FBdUI7Y0FDeEMsTUFBTTRTLE9BQU8sR0FBRyxJQUFJalUsS0FBQSxDQUFBMEMsY0FBYyxFQUFFO2NBQ3BDNEksVUFBVSxDQUFDNEksVUFBVSxDQUFDLE1BQU1ELE9BQU8sQ0FBQ3BSLE9BQU8sQ0FBQ2tSLGNBQUEsQ0FBQUwsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ3hELE9BQU9PLE9BQU87WUFDZjtZQUVBLE1BQU0vSCxLQUFLQSxDQUFDN0ssS0FBdUQ7Y0FDbEUsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFDM0MsTUFBTXpCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBaUIsR0FBSSxDQUFDWSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7a0JBQUVnRyxRQUFRLEVBQUUsSUFBSTtrQkFBRSxHQUFHMUk7Z0JBQUssQ0FBRSxDQUFDO2dCQUN2RixJQUFJLENBQUNhLFFBQVEsQ0FBQ1osTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2dCQUMvRDs7OztnQkFJQSxPQUFPUyxRQUFRLENBQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ3ZCLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlYLEtBQUssQ0FBQ1csQ0FBQyxDQUFDeUUsT0FBTyxDQUFDOztZQUU1Qjs7VUFDQWhILE9BQUEsQ0FBQXFKLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7VUNsREQ7O1VBRUFoRixNQUFBLENBQUFrQixjQUFBLENBQUF2RixPQUFBO1lBQ0F3RixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQThPLE1BQUEsR0FBQS9WLE9BQUE7VUFFTztVQUFVLE1BQU9nVyxJQUFLLFNBQVFELE1BQUEsQ0FBQUMsSUFBUTtZQUM1QyxDQUFBQyxPQUFRLEdBQUcsQ0FDVjtjQUFFcFYsRUFBRSxFQUFFLHdDQUF3QztjQUFFcUwsSUFBSSxFQUFFLGdCQUFnQjtjQUFFZ0ssTUFBTSxFQUFFO1lBQWMsQ0FBRSxFQUNoRztjQUFFclYsRUFBRSxFQUFFLHNDQUFzQztjQUFFcUwsSUFBSSxFQUFFLHVCQUF1QjtjQUFFZ0ssTUFBTSxFQUFFO1lBQWMsQ0FBRSxFQUNyRztjQUFFclYsRUFBRSxFQUFFLHVDQUF1QztjQUFFcUwsSUFBSSxFQUFFLG1CQUFtQjtjQUFFZ0ssTUFBTSxFQUFFO1lBQWMsQ0FBRSxDQUNsRztZQUdELElBQUlELE9BQU9BLENBQUE7Y0FDVixPQUFPO2dCQUNOM1YsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBMlY7ZUFDWjtZQUNGO1lBRUEsSUFBSUUsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLENBQUM7Z0JBQUV0VixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2dCQUFFcUwsSUFBSSxFQUFFLElBQUksQ0FBQ21KLFdBQVc7Z0JBQUVhLE1BQU0sRUFBRTtjQUFNLENBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUM7WUFDbkY7O1VBQ0F4VSxPQUFBLENBQUF1VSxJQUFBLEdBQUFBLElBQUEifQ==