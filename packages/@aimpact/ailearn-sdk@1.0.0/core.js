System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.27/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, Organizations, Organization, Schools, School, Sessions, Faces, Session, StudentsHome, ISuggestionResponse, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, User, __beyond_pkg, hmr;
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
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    RoleType: void 0,
    IPeopleData: void 0,
    IInviteData: void 0,
    IAILearnUserData: void 0,
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
        const dependencies = new Map([["@bgroup/media-manager", "1.0.0"], ["@bgroup/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@bgroup/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9], ['@aimpact/chat-sdk/api', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['@aimpact/chat-sdk/users', dependency_11]]);
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
        hash: 3517958251,
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
              console.log(10, _session.sessionWrapper.user.token);
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

      /***************************************
      INTERNAL MODULE: ./classrooms/interfaces
      ***************************************/

      ims.set('./classrooms/interfaces', {
        hash: 3495768902,
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
        hash: 628161745,
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
        hash: 4251906690,
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
                console.log(specs, 'specs');
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
        hash: 3287821027,
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
        hash: 2899713410,
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
              return this.#learningModule?.language;
            }
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            get defaultLanguage() {
              return this.#learningModule?.language;
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
            async generate(notes) {
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

      /*****************************************************
      INTERNAL MODULE: ./modules/item/assignments/collection
      *****************************************************/

      ims.set('./modules/item/assignments/collection', {
        hash: 3237886606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleAssignments extends _model.ReactiveModel {
            #parent;
            #map = new Map();
            #api;
            get entries() {
              return this.#map;
            }
            get items() {
              return Array.from(this.#map.values());
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            set(items) {
              if (!Array.isArray(items)) {
                throw new Error('Items must be an array');
              }
              items.forEach(item => {
                const instance = this.#map.has(item.id) ? this.#map.get(item.id) : new _item.ModuleAssignment(this.#parent, item);
                this.#map.set(item.id, instance);
                this.#classrooms.set(item.classroom.id, instance);
              });
            }
            async add(classRoomId) {
              const specs = {
                moduleId: this.#parent.id,
                classRoomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.ModuleAssignment(this.#parent, response.data);
              this.#map.set(response.data.id, assignment);
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.ModuleAssignments = ModuleAssignments;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./modules/item/assignments/item
      ***********************************************/

      ims.set('./modules/item/assignments/item', {
        hash: 445887233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignment = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ModuleAssignment extends _model.ReactiveModel {
            #parent;
            get dashboard() {
              return `/assignments/${this.id}/dashboard/classroom`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            constructor(parent, data) {
              super({
                properties: ['classroom', 'id']
              });
              this.#parent = parent;
              this.set(data);
            }
          }
          exports.ModuleAssignment = ModuleAssignment;
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/item/index
      ************************************/

      ims.set('./modules/item/index', {
        hash: 1205047396,
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
          var _collection = require("./assignments/collection");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'members', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'pictureSuggestions', 'state'];
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
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #api;
            #suggestions;
            static instances = new Map();
            constructor({
              id = undefined,
              type = 'module'
            } = {}) {
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
              this.#assignments = new _collection.ModuleAssignments(this);
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
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
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
              console.log(44, response);
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
                type: 'draft'
              };
              const response = super.publish(data);
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
        hash: 737265201,
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
                if (specs.type === 'draft') return this.saveDraft(specs);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
                if (!response.status) {
                  throw new Error('error publishin module draft');
                }
                return response;
              } catch (e) {
                console.error(e);
              }
            }
            async saveDraft(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts`, specs);
                if (!response.status) {
                  throw new Error('error saving module draft');
                }
                return response;
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
        hash: 3674580005,
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
            properties = ['id', 'name', 'description', 'owner', 'people', 'joinSpecs'];
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
                if (!person.authorized) {
                  this.#pendings.push(person);
                  return;
                }
                person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
              };
              data.people.forEach(checkMember);
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
        hash: 2969187474,
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
                  if (res.error.code === 41) {
                    throw new Error('INVALID_CODE');
                  }
                  throw new Error('ERROR_PUBLISHING');
                }
                return res;
              } catch (e) {
                throw new Error(e);
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

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 2537550105,
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
              }, ...this.#schools];
            }
            properties = ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'token'];
            constructor(specs) {
              super({
                ...specs,
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'email', 'photoURL', 'phoneNumber', 'token']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load(firebaseToken) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.get('/users/me');
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
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
                  id: this.id
                });
                if (!response.status) throw new Error('Error fetching user data');
                await this.set(response.data);
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
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./users/interfaces/common/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./users/interfaces/common/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./users/interfaces/common/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./users/interfaces/common/coins').ICreditsConsumptionsData : value);
        (require || prop === 'RoleType') && _export("RoleType", RoleType = require ? require('./users/interfaces/common/people').RoleType : value);
        (require || prop === 'IPeopleData') && _export("IPeopleData", IPeopleData = require ? require('./users/interfaces/common/people').IPeopleData : value);
        (require || prop === 'IInviteData') && _export("IInviteData", IInviteData = require ? require('./users/interfaces/common/people').IInviteData : value);
        (require || prop === 'IAILearnUserData') && _export("IAILearnUserData", IAILearnUserData = require ? require('./users/interfaces/user').IAILearnUserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJsb2ciLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJwZW9wbGUiLCJ3YXJuIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwicm9sZSIsInNhdmUiLCJpbnZpdGUiLCJpbnZpdGVkIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsImV2ZXJ5Iiwic3RhdGUiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJBY3Rpdml0eSIsInJlbW92ZSIsImdldEl0ZW1zIiwiZ2V0RGF0YSIsImNsZWFyIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbFNwZWNzIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiZ2xvYmFsVGhpcyIsImEiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImFjdGl2aXR5SWQiLCJzYXZlRHJhZnQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJzYXZlUmVzcG9uc2UiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50IiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFuZ2UiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbiIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsImFkZE9wdGlvbiIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsInN1YmplY3QiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJzZXNzaW9uc01hcCIsImNvbXBsZXRlZCIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsIm93bmVyIiwiY3JlYXRvciIsImFkZFNlc3Npb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInJlZmluZUFjdGl2aXRpZXMiLCJvYnNlcnZhdGlvbnMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXREcmFmdCIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImNvZGUiLCJTY2hvb2xzIiwiU2Nob29sIiwiU2Nob29sUHJvdmlkZXIiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJGYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJsZXNzb24iLCJzZXRMZXNzb24iLCJsZXNzb25JZCIsInRyYWNlIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwiZGlzcGxheU5hbWUiLCJEQVRBIiwidGltZSIsInRvcGljcyIsImNyaXRlcmlhcyIsImtpbmQiLCJfaGFyZGNvZGVkRGF0YSIsImhhcmRjb2RlZEdlbmVyYXRlIiwicHJvbWlzZSIsInNldFRpbWVvdXQiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJvcmdhbml6YXRpb25zIiwiZW50aXR5IiwiZmlyZWJhc2VUb2tlbiIsImxvZ2luIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJ2YWxpZGF0ZSIsImdldEFjY2VzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIl0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9tb2R1bGVzL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9tb2R1bGVzL2l0ZW0vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL3Byb3ZpZGVyLnRzIiwiL29yZ2FuaXphdGlvbnMvY29sbGVjdGlvbi50cyIsIi9vcmdhbml6YXRpb25zL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi9zY2hvb2xzL2NvbGxlY3Rpb24udHMiLCIvc2Nob29scy9pdGVtLnRzIiwiL3NjaG9vbHMvcHJvdmlkZXIudHMiLCIvc2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2ZhY2VzLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiLCIvc3R1ZGVudHMtaG9tZS9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaGFyZGNvZGVkLWRhdGEudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiLCIvY29pbnMudHMiLCIvcGVvcGxlLnRzIiwiL3VzZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtjQUVuQkQsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNVLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7Z0JBRTVCLElBQUlFLFFBQVEsR0FBRyxJQUFJZCxLQUFBLENBQUFlLGtCQUFrQixDQUFDO2tCQUFFSDtnQkFBRSxDQUFFLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNhLEdBQUcsQ0FBQ0osRUFBRSxFQUFFRSxRQUFRLENBQUM7Z0JBQ2hDTCxRQUFRLENBQUNRLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxPQUFPLENBQUM7Y0FDaEMsQ0FBQyxD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