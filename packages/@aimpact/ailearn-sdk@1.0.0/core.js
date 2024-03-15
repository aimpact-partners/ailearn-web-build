System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.27/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0027Config) {
      dependency_5 = _aimpactAilearnApp0027Config;
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.11"], ["@bgroup/http-suite", "1.0.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
        hash: 3605099983,
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
              data.forEach(async (activity, index) => {
                if (this.#items.has(activity.id)) {
                  const item = this.#items.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity({
                  ...activity,
                  index,
                  learningModule: this.#learningModule
                });
                this.#items.set(instance.id, instance);
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
        hash: 1433805110,
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
                await this.set(data);
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
              return this.#learningModule.saveDraft();
            }
          }
          exports.Activity = Activity;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./modules/item/activities/materials/index
      *********************************************************/

      ims.set('./modules/item/activities/materials/index', {
        hash: 2473869021,
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
            #learningModule;
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
              this.#learningModule = module;
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
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
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
                await this.set(data);
                this.#learningModule.saveDraft();
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
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/article`;
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
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
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
        hash: 2029541235,
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
            #type;
            get type() {
              return this.#type;
            }
            constructor(type, learningModule, parent) {
              super();
              const settings = _types.ActivityTypes.get(type);
              this.learningModule = learningModule;
              this.parent = parent;
              this.#type = type;
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
                if (!data[property]) return;
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
            async generate(notes, specs) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.learningModule.id,
                  activityId: this.#parent.id,
                  activity: this.type,
                  notes,
                  ...specs
                });
                await this.set(data);
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
        hash: 961759705,
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
                if (!data[property]) return;
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
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'questions',
                  id: this.learningModule.id,
                  notes
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
        hash: 3633695167,
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
                await this.set({
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
        hash: 3648052228,
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
                change = true;
                let value = property === 'criteria' && !data[property] ? [] : data[property];
                if (!value) return;
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
        hash: 4158991902,
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
                return this.picture;
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
        hash: 2009291211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          /*bundle*/
          class User extends _users.User {
            #api;
            #schools = [];
            get schools() {
              return {
                items: this.#schools
              };
            }
            #data;
            #hasAccess = false;
            get data() {
              return this.#data;
            }
            get organizations() {
              return [{
                id: this.id,
                name: this.displayName,
                entity: 'user'
              }, ...this.#schools];
            }
            constructor(specs) {
              super(specs);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load() {
              try {
                return false;
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.get('/users/me');
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                return true;
              } catch (e) {
                console.error(e);
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
                return true;
              } catch (e) {
                console.error(e);
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
            async hasAccess() {
              const code = globalThis.localStorage.getItem('rvd.access.code');
              if (!code) return false;
              return this.getAccess(code);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibG9hZEJ5SWQiLCJzYXZlIiwiaW52aXRlIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJsb2ciLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsImV2ZXJ5Iiwic3RhdGUiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJBY3Rpdml0eSIsInJlbW92ZSIsImdldEl0ZW1zIiwiZ2V0RGF0YSIsImNsZWFyIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbFNwZWNzIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiZ2xvYmFsVGhpcyIsImEiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJhY3Rpdml0eVR5cGUiLCJub3RlcyIsImFjdGl2aXR5SWQiLCJzYXZlRHJhZnQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJzYXZlUmVzcG9uc2UiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50IiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFuZ2UiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbiIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZHMiLCJfYWN0aXZpdGllcyIsInNlc3Npb25zTWFwIiwiY29tcGxldGVkIiwiaW5zdGFuY2VzIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwib24iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsIm1vZGVsIiwib3duZXIiLCJjcmVhdG9yIiwiYWRkU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwibW9kdWxlSWQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInJlZmluZUFjdGl2aXRpZXMiLCJvYnNlcnZhdGlvbnMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXREcmFmdCIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwicGVvcGxlIiwicGVyc29uIiwiYXV0aG9yaXplZCIsInJvbGUiLCJTY2hvb2xzIiwiU2Nob29sIiwiU2Nob29sUHJvdmlkZXIiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJGYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJsZXNzb24iLCJzZXRMZXNzb24iLCJsZXNzb25JZCIsInRyYWNlIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwiZGlzcGxheU5hbWUiLCJEQVRBIiwidGltZSIsInRvcGljcyIsImNyaXRlcmlhcyIsImtpbmQiLCJfaGFyZGNvZGVkRGF0YSIsImhhcmRjb2RlZEdlbmVyYXRlIiwicHJvbWlzZSIsInNldFRpbWVvdXQiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsImhhc0FjY2VzcyIsIm9yZ2FuaXphdGlvbnMiLCJlbnRpdHkiLCJhY2NlcHRUZXJtcyIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiYWdlIiwiZ2V0QWNjZXNzIiwiY29kZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIl0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9jbGFzc3Jvb21zL2l0ZW0udHMiLCIvY2xhc3Nyb29tcy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9tb2R1bGVzL2l0ZW0vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL3Byb3ZpZGVyLnRzIiwiL29yZ2FuaXphdGlvbnMvY29sbGVjdGlvbi50cyIsIi9vcmdhbml6YXRpb25zL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi9zY2hvb2xzL2NvbGxlY3Rpb24udHMiLCIvc2Nob29scy9pdGVtLnRzIiwiL3NjaG9vbHMvcHJvdmlkZXIudHMiLCIvc2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2ZhY2VzLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiLCIvc3R1ZGVudHMtaG9tZS9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaGFyZGNvZGVkLWRhdGEudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FB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