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
        hash: 2737425497,
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
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'chat', 'data' // represents the tracking data
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
        hash: 1811437861,
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
        hash: 3732435234,
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
            properties = ['id', 'name', 'description', 'section', 'external', 'join', 'owner', 'students', 'teachers'];
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
              console.log(specs, 'THIS specs');
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
        hash: 2874976416,
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
                if (!res.status) {
                  throw new Error('error publishing classroom');
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
        hash: 513248590,
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
        hash: 813055658,
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
              console.log(400);
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
        hash: 1995575060,
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
            #specs;
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            #learningModule;
            #suggestions;
            get defaultLanguage() {
              return 'es';
            }
            #settingsType;
            #materials;
            get materials() {
              return this.#materials;
            }
            set materials(value) {
              this.#materials.set(value);
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
            /**
             * This method is used to generate the answers of one question
             *
             * Is no way to identify index of questions, so the client could not know which question index must be replaced
             * if are passed more than one question.
             *
             * @param index
             * @param data
             */
            generateAnswer = async (index, data) => {
              const response = await this.#generate({
                type: 'answers',
                questions: [data]
              });
              if (!this.specs.questions[index]) {
                console.warn(index, data, this);
                throw new Error('error setting question');
              }
              this.specs.questions[index].set(response.questions[0]);
              this.trigger('change');
            };
            generateQuestions = async observations => {
              const data = await this.#generate({
                type: 'questions',
                observations
              });
              this.materials.updateQuestons(data.questions);
              this.set(data);
              this.trigger('change');
            };
            async generateAllAnswers() {
              const data = await this.#generate({
                type: 'answers',
                questions: this.specs.questions
              });
              this.set(data);
            }
            async generateSuggestions(data) {
              let {
                type,
                removeItems
              } = data;
              delete data.removeItems;
              if (type === 'answers') {
                data.questions = this.specs.questions;
                // the value came as answers to let identify the type of suggestions to generate,
                // but the api returns "questions" with the answers.
                type = 'questions';
              }
              let specs = await this.#generate(data);
              this.materials.questions = specs.questions;
              const currentData = this.specs.getData()[data.type] ?? [];
              specs[type] = removeItems ? specs[type] : [...currentData, ...specs[type]];
              this.set({
                specs
              });
            }
            async #generate(specs) {
              try {
                this.fetching = true;
                return await this.#suggestions.generate({
                  ...specs,
                  language: this.defaultLanguage,
                  id: this.#learningModule.id,
                  activityId: this.id,
                  title: this.title,
                  description: this.description
                });
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
            async generatePicture(observations = '') {
              try {
                this.fetching = true;
                let prompt = `Generate a cover image for the one activity with this title: ${this.objective} and this description: ${this.description}`;
                if (observations) {
                  prompt += ` taking into account the following recommendations: ${observations}`;
                }
                const response = await this.#suggestions.image({
                  prompt: this.pictureSuggestions ?? prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.picture = response.url;
                this.triggerEvent('image.generated');
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`, {
                  url: response.url
                });
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
        hash: 2729560120,
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
          var _question = require("../question");
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
            async generate(name) {
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent();
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
                  language: this.#parent.language
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
            updateQuestons(questions) {
              this.#questions = questions?.map(data => {
                const questionModel = new _question.ActivityQuestion(this.#parent);
                const specs = typeof data === 'string' ? {
                  text: data
                } : data;
                questionModel.set(specs);
                return questionModel;
              });
              this.questions = this.#questions;
              this.triggerEvent();
            }
            async generateContent() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#module.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  description: this.#parent.description
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
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./modules/item/activities/question
      **************************************************/

      ims.set('./modules/item/activities/question', {
        hash: 1945380418,
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
            properties = ['text', 'options', 'correctAnswer'];
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
        hash: 228763343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _question = require("../question");
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
            get questionLabels() {
              return this.#questions.map(item => item.text);
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
                this.#questions = data[property]?.map(data => {
                  const questionModel = new _question.ActivityQuestion(this.#parent);
                  const specs = typeof data === 'string' ? {
                    text: data
                  } : data;
                  questionModel.set(specs);
                  return questionModel;
                });
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
        hash: 1414565386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _question = require("../question");
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
            get questionLabels() {
              return this.#questions.map(item => item.text);
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
                this.#questions = data[property]?.map(data => {
                  const questionModel = new _question.ActivityQuestion(this.#parent);
                  const specs = typeof data === 'string' ? {
                    text: data
                  } : data;
                  questionModel.set(specs);
                  return questionModel;
                });
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
        hash: 976779576,
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
            async generate(name, observations) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  id: this.#learningModule.id,
                  activityId: this.#parent.id,
                  type: 'specifications',
                  observations
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
        hash: 3887094717,
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
              return this.questions.map(item => item.text);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (property === 'questions' && data.hasOwnProperty(property)) {
                  if (data[property]) change = true;
                  const questions = data[property]?.map((data, index) => {
                    const questionModel = this.#questions[index] ?? new _question.ActivityQuestion(this.#parent);
                    const specs = typeof data === 'string' ? {
                      text: data
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
        hash: 1885872389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _ = require("./");
          class SpokenActivitySpecs extends _.ActivitySpecs {
            #parent;
            properties = ['objective', 'criteria', 'task', 'instructions'];
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
            get questionLabels() {
              return this.#questions.map(item => item.text);
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
        hash: 2601202640,
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
                name: 'flashcards'
              }, {
                required: 'article',
                name: 'audio'
              }],
              suggestions: 'topics',
              fields: {}
            }, {
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'role']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'character', 'role']
            }, {
              id: 'multiple-choice',
              name: 'Multiple-Choice',
              specs: ['objective', 'related'],
              materials: ['questions'],
              suggestions: 'questions',
              fields: ['questions']
            }, {
              id: 'written/spoken',
              name: 'Spoken'
            }, {
              id: 'spoken',
              name: 'Spoken',
              specs: ['related', 'objective', 'instructions', 'task', {
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
        hash: 2896197269,
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
             * @param values
             */
            async draft(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#suggestions.generate({
                  ...values,
                  language: this.defaultLanguage,
                  totalActivities: 5
                });
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                if (data.activities) {
                  this.activities.setItems(data.activities);
                }
                await this.saveDraft();
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async saveDraft(specs = {}) {
              await this.set(specs);
              const data = this.getProperties();
              data.activities = this.activities.getItems();
              return this.provider.saveDraft({
                ...data,
                language: this.defaultLanguage
              });
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
                  language: this.defaultLanguage,
                  objective
                });
                /**
                 * the IDraftImprovement interface is a new structure, so now we need to adapt the response to the new structure
                 */
                return data.suggestions.map(item => item.suggestion);
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
                  language: this.defaultLanguage,
                  improvements,
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
            async generatePicture(observations = '') {
              try {
                this.fetching = true;
                let prompt = `Generate a cover image for the module with this title: ${this.objective} and this description: ${this.description}`;
                if (observations) {
                  prompt += ` taking into account the following recommendations: ${observations}`;
                }
                const response = await this.#suggestions.image({
                  prompt: this.pictureSuggestions ?? prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.picture = response.url;
                this.triggerEvent('image.generated');
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.id}/image`, {
                  url: response.url
                });
                if (!saveResponse.status) throw new Error('error saving image');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
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
        hash: 1271570466,
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
                storeName: 'Classrooms',
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

      /************************************
      INTERNAL MODULE: ./organizations/item
      ************************************/

      ims.set('./organizations/item', {
        hash: 2651829031,
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
            properties = ['id', 'name', 'description', 'join', 'owner', 'people', 'teachers'];
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
                provider: _provider.OrganizationProvider
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

          exports.Organization = Organization;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 3331390672,
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
            loadById = async specs => {
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
                console.log(res, 'res');
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
        hash: 1488661443,
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
                  language: 'es',
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
        hash: 2002374340,
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
        hash: 379988382,
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
              name: 'Belgrano Day School'
            }, {
              id: 'm4r14e6e-209b-40fe-923e-4df1381c8d65',
              name: 'Colegio Maria de Guadalupe'
            }, {
              id: 'n0rt4ne6e-209b-40fe-923e-4df1381c8d65',
              name: 'Northlands School'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibG9hZEJ5SWQiLCJzYXZlIiwibG9nIiwiaW52aXRlIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJjbGVhciIsIkFjdGl2aXR5IiwicmVtb3ZlIiwiZ2V0SXRlbXMiLCJnZXREYXRhIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsInNldHRpbmdzVHlwZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJnbG9iYWxUaGlzIiwiYSIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZUFuc3dlciIsImdlbmVyYXRlIiwicXVlc3Rpb25zIiwid2FybiIsImdlbmVyYXRlUXVlc3Rpb25zIiwib2JzZXJ2YXRpb25zIiwidXBkYXRlUXVlc3RvbnMiLCJnZW5lcmF0ZUFsbEFuc3dlcnMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwicmVtb3ZlSXRlbXMiLCJjdXJyZW50RGF0YSIsIiNnZW5lcmF0ZSIsImxhbmd1YWdlIiwiYWN0aXZpdHlJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJvYmplY3RpdmUiLCJpbWFnZSIsInBpY3R1cmVTdWdnZXN0aW9ucyIsInNpemUiLCJmb3JtYXQiLCJwaWN0dXJlIiwic2F2ZVJlc3BvbnNlIiwiX3F1ZXN0aW9uIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsInNldHRpbmdzIiwibmFtZSIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJ0ZXh0Iiwib3B0aW9ucyIsImNvcnJlY3RfYW5zd2VyIiwiYWRkT3B0aW9uIiwib3B0aW9uIiwiaW5jbHVkZXMiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25MYWJlbHMiLCJjaGFuZ2UiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsInJlZHVjZSIsImFjYyIsImhhc1ZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImFkZEFuc3dlciIsImFuc3dlciIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJyZXF1aXJlZCIsImZpZWxkcyIsIl9hY3Rpdml0aWVzIiwic2Vzc2lvbnNNYXAiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImRyYWZ0IiwiZmV0Y2hpbmdEcmFmdCIsInRvdGFsQWN0aXZpdGllcyIsInN0YXRlIiwic2F2ZURyYWZ0IiwicmVmaW5lQWN0aXZpdGllcyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJzdWdnZXN0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwiZ2V0RHJhZnQiLCJPcmdhbml6YXRpb25zIiwiT3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9uUHJvdmlkZXIiLCJTY2hvb2xzIiwiU2Nob29sIiwiU2Nob29sUHJvdmlkZXIiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJGYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJsZXNzb24iLCJzZXRMZXNzb24iLCJsZXNzb25JZCIsInRyYWNlIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwiZGlzcGxheU5hbWUiLCJEQVRBIiwidGltZSIsInRvcGljcyIsImNyaXRlcmlhcyIsImtpbmQiLCJfaGFyZGNvZGVkRGF0YSIsImhhcmRjb2RlZEdlbmVyYXRlIiwicHJvbWlzZSIsInNldFRpbWVvdXQiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsIm9yZ2FuaXphdGlvbnMiLCJlbnRpdHkiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9jb2xsZWN0aW9uLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvbW9kdWxlcy9pdGVtL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9wcm92aWRlci50cyIsIi9vcmdhbml6YXRpb25zL2NvbGxlY3Rpb24udHMiLCIvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvc2Nob29scy9jb2xsZWN0aW9uLnRzIiwiL3NjaG9vbHMvaXRlbS50cyIsIi9zY2hvb2xzL3Byb3ZpZGVyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2hhcmRjb2RlZC1kYXRhLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkIsTUFBTUMsUUFBUSxHQUFHLEVBQUU7Y0FFbkJELFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQVQsUUFBUyxDQUFDVSxHQUFHLENBQUNELEVBQUUsQ0FBQyxFQUFFO2dCQUU1QixJ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