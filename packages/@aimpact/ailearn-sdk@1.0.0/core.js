System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, Schools, School, Sessions, Faces, Session, StudentsHome, ISuggestionResponse, User, __beyond_pkg, hmr;
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
        hash: 3934762954,
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
        hash: 1328917429,
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
            properties = ['id', 'name', 'description', 'section', 'external'];
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
              return data;
            }
            async save(specs) {
              return await this.provider.publish(specs);
            }
          }
          exports.Classroom = Classroom;
        }
      });

      /*************************************
      INTERNAL MODULE: ./classrooms/provider
      *************************************/

      ims.set('./classrooms/provider', {
        hash: 1497500691,
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
        hash: 3337423025,
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
              console.log(40, data);
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
              console.log(99, data);
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
            async addOption(index, option) {
              console.log(20, index, option);
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
        hash: 44353350,
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
            #originalData = {};
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
              this.set(this.#originalData, true);
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
            set(data, persistedData = false) {
              if (persistedData) {
                this.#originalData = data;
              }
              this.data.push(data);
              let change = false;
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
        hash: 4186560569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            properties = ['text', 'options', 'correctAnswer'];
            constructor(parent) {
              super();
              this.#parent = parent;
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
        hash: 3410483989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _ = require("./");
          var _characterTalk = require("./character-talk");
          var _conversation = require("./conversation");
          var _multipleChoice = require("./multiple-choice");
          class ActivitySpecsFactory {
            static TYPES = {
              default: _.ActivitySpecs,
              debate: _conversation.ConversationActivitySpecs,
              'character-talk': _characterTalk.CharacterTalkActivitySpecs,
              'multiple-choice': _multipleChoice.MultipleChoiceActivitySpecs
            };
            static get(type, learningModule, parent) {
              // if (!this.TYPES[type])
              return new this.TYPES.default(type, learningModule, parent);
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
        hash: 128327603,
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
            #questions;
            #suggestions;
            #learningModule;
            get questions() {
              return this.#questions;
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
            get questionLabels() {
              return this.#questions.map(item => item.text);
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
            async generate(name) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  id: this.#learningModule.id,
                  activityId: this.#parent.id,
                  type: 'specifications',
                  activity: name
                });
                this.set(data);
                this.trigger('specs.generated');
                console.log(12, data, this.properties, this.getData());
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./modules/item/activities/specs/multiple-choice
      ***************************************************************/

      ims.set('./modules/item/activities/specs/multiple-choice', {
        hash: 3808335536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _question = require("../question");
          /**
           * criteria
           */
          class MultipleChoiceActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['questions'];
            properties = ['related'];
            #questions;
            get questions() {
              return this.#questions;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['related']);
              this.#parent = parent;
            }
            get questionLabels() {
              return this.#questions.map(item => item.text);
            }
            set(data) {
              let change = false;
              this.#properties.forEach(property => {
                if (property === 'questions' && data.hasOwnProperty(property)) {
                  if (data[property]) change = true;
                  this.#questions = data[property]?.map(data => {
                    const questionModel = new _question.ActivityQuestion(this.#parent);
                    const specs = typeof data === 'string' ? {
                      text: data
                    } : data;
                    questionModel.set(specs);
                    return questionModel;
                  });
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
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/item/activities/types
      ***********************************************/

      ims.set('./modules/item/activities/types', {
        hash: 3894565469,
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
                fields: ['criteria', 'subject']
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
        hash: 830602616,
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
        hash: 1768540570,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibG9hZEJ5SWQiLCJzYXZlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJjbGVhciIsIkFjdGl2aXR5IiwicmVtb3ZlIiwiZ2V0SXRlbXMiLCJnZXREYXRhIiwibG9nIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsInNldHRpbmdzVHlwZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJnbG9iYWxUaGlzIiwiYSIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZUFuc3dlciIsImdlbmVyYXRlIiwicXVlc3Rpb25zIiwid2FybiIsImdlbmVyYXRlUXVlc3Rpb25zIiwib2JzZXJ2YXRpb25zIiwidXBkYXRlUXVlc3RvbnMiLCJnZW5lcmF0ZUFsbEFuc3dlcnMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwicmVtb3ZlSXRlbXMiLCJjdXJyZW50RGF0YSIsImFkZE9wdGlvbiIsIm9wdGlvbiIsIiNnZW5lcmF0ZSIsImxhbmd1YWdlIiwiYWN0aXZpdHlJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJvYmplY3RpdmUiLCJpbWFnZSIsInBpY3R1cmVTdWdnZXN0aW9ucyIsInNpemUiLCJmb3JtYXQiLCJwaWN0dXJlIiwic2F2ZVJlc3BvbnNlIiwiX3F1ZXN0aW9uIiwib3JpZ2luYWxEYXRhIiwic2V0dGluZ3MiLCJuYW1lIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsImFydGljbGUiLCJwZXJzaXN0ZWREYXRhIiwiY2hhbmdlIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJ0ZXh0IiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb25zIiwiaW5jbHVkZXMiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25MYWJlbHMiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnZlcnNhdGlvbiIsIl9tdWx0aXBsZUNob2ljZSIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsImRlYmF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIkFycmF5IiwiaXNBcnJheSIsIlR5cGVzIiwicmVxdWlyZWQiLCJmaWVsZHMiLCJfYWN0aXZpdGllcyIsInNlc3Npb25zTWFwIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwib24iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsIm1vZGVsIiwiYWRkU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwibW9kdWxlSWQiLCJkcmFmdCIsImZldGNoaW5nRHJhZnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzdGF0ZSIsInNhdmVEcmFmdCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwiYW5zd2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsImdldERyYWZ0IiwiU2Nob29scyIsIlNjaG9vbCIsIlNjaG9vbFByb3ZpZGVyIiwiU2Vzc2lvbnMiLCJTZXNzaW9uIiwiRmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwibGVzc29uIiwic2V0TGVzc29uIiwibGVzc29uSWQiLCJ0cmFjZSIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsImRpc3BsYXlOYW1lIiwiREFUQSIsInRpbWUiLCJ0b3BpY3MiLCJjcml0ZXJpYXMiLCJraW5kIiwiX2hhcmRjb2RlZERhdGEiLCJoYXJkY29kZWRHZW5lcmF0ZSIsInByb21pc2UiLCJzZXRUaW1lb3V0IiwiX3VzZXJzIiwiVXNlciIsInNjaG9vbHMiLCJvcmdhbml6YXRpb25zIiwiZW50aXR5Il0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9jbGFzc3Jvb21zL2l0ZW0udHMiLCIvY2xhc3Nyb29tcy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9xdWVzdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvbW9kdWxlcy9pdGVtL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9wcm92aWRlci50cyIsIi9zY2hvb2xzL2NvbGxlY3Rpb24udHMiLCIvc2Nob29scy9pdGVtLnRzIiwiL3NjaG9vbHMvcHJvdmlkZXIudHMiLCIvc2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2ZhY2VzLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiLCIvc3R1ZGVudHMtaG9tZS9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaGFyZGNvZGVkLWRhdGEudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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