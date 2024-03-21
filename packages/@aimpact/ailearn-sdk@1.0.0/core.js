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
        hash: 3476982412,
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
        hash: 1530488162,
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

      /*****************************************************
      INTERNAL MODULE: ./modules/item/assignments/collection
      *****************************************************/

      ims.set('./modules/item/assignments/collection', {
        hash: 778572741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
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
                moduleId: this.id,
                classRoomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              this.#map.set(response.data.id, new _item.ModuleAssignment(this.#parent, response.data));
              // console.log(this.#map);
              return response.data;
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
        hash: 3795761800,
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
        hash: 871752324,
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
                this.setFirebaseUser(firebaseToken);
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
                this.setFirebaseUser(firebaseToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImFjdGl2aXR5IiwiRXJyb3IiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJtYXRlcmlhbHMiLCJKU09OIiwicGFyc2UiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJwZW9wbGUiLCJ3YXJuIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwicm9sZSIsInNhdmUiLCJpbnZpdGUiLCJpbnZpdGVkIiwiam9pbiIsImFwcHJvdmUiLCJyZWplY3QiLCJsb2ciLCJ1cGRhdGVSb2xlIiwibGlzdCIsImRlbGV0ZSIsInJlcyIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsInJvdXRlIiwiZW50cmllcyIsImRlbGV0ZUl0ZW1zIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsImV2ZXJ5Iiwic3RhdGUiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiY2xlYW4iLCJBY3Rpdml0eSIsInJlbW92ZSIsImdldEl0ZW1zIiwiZ2V0RGF0YSIsImNsZWFyIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbFNwZWNzIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiZ2xvYmFsVGhpcyIsImEiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJhY3Rpdml0eVR5cGUiLCJub3RlcyIsImFjdGl2aXR5SWQiLCJzYXZlRHJhZnQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJzYXZlUmVzcG9uc2UiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50IiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFuZ2UiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbiIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsImFkZE9wdGlvbiIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsInN1YmplY3QiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsInNlc3Npb25zTWFwIiwiY29tcGxldGVkIiwiaW5zdGFuY2VzIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwib24iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsIm1vZGVsIiwib3duZXIiLCJjcmVhdG9yIiwiYWRkU2Vzc2lvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwicmVmaW5lQWN0aXZpdGllcyIsIm9ic2VydmF0aW9ucyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldERyYWZ0IiwiT3JnYW5pemF0aW9ucyIsIk9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvblByb3ZpZGVyIiwiU2Nob29scyIsIlNjaG9vbCIsIlNjaG9vbFByb3ZpZGVyIiwiU2Vzc2lvbnMiLCJTZXNzaW9uIiwiRmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwibGVzc29uIiwic2V0TGVzc29uIiwibGVzc29uSWQiLCJ0cmFjZSIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsImRpc3BsYXlOYW1lIiwiREFUQSIsInRpbWUiLCJ0b3BpY3MiLCJjcml0ZXJpYXMiLCJraW5kIiwiX2hhcmRjb2RlZERhdGEiLCJoYXJkY29kZWRHZW5lcmF0ZSIsInByb21pc2UiLCJzZXRUaW1lb3V0IiwiX3VzZXJzIiwiVXNlciIsInNjaG9vbHMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwib3JnYW5pemF0aW9ucyIsImVudGl0eSIsImZpcmViYXNlVG9rZW4iLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJjb2RlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9jb2xsZWN0aW9uLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY2xhc3Nyb29tcy9pdGVtLnRzIiwiL2NsYXNzcm9vbXMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9tb2R1bGVzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24udHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL21vZHVsZXMvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL21vZHVsZXMvaXRlbS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vcHJvdmlkZXIudHMiLCIvb3JnYW5pemF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL3NjaG9vbHMvY29sbGVjdGlvbi50cyIsIi9zY2hvb2xzL2l0ZW0udHMiLCIvc2Nob29scy9wcm92aWRlci50cyIsIi9zZXNzaW9ucy9hc3Nlc3NtZW50LnRzIiwiL3Nlc3Npb25zL2NvbGxlY3Rpb24udHMiLCIvc2Vzc2lvbnMvZmFjZXMudHMiLCIvc2Vzc2lvbnMvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL2l0ZW0udHMiLCIvc3R1ZGVudHMtaG9tZS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9oYXJkY29kZWQtZGF0YS50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyIsIi9jb2lucy50cyIsIi9wZW9wbGUudHMiLCIvdXNlci50cyIsIi91c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU0sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLFFBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDckIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLFFBQVMsQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDcEM7WUFDQSxNQUFNQyxPQUFPQSxDQUFDQyxVQUFVO2NBQ3ZCLE1BQU1DLFFBQVEsR0FBRyxFQUFFO2NBRW5CRCxVQUFVLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxDQUFFQyxFQUFVLElBQUk7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLENBQUFULFFBQVMsQ0FBQ1UsR0FBRyxDQUFDRCxFQUFFLENBQUMsRUFBRTtnQkFFNUIsSUFBSUUsUUFBUSxHQUFHLElBQUlkLEtBQUEsQ0FBQWUsa0JBQWtCLENBQUM7a0JBQUVIO2dCQUFFLENBQUUsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLENBQUFULFFBQVMsQ0FBQ2EsR0FBRyxDQUFDSixFQUFFLEVBQUVFLFFBQVEsQ0FBQztnQkFDaENMLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDSCxRQUFRLENBQUNJLE9B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