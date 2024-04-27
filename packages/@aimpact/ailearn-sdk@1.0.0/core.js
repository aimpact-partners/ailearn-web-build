System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@aimpact/chat-sdk@1.0.0/users"], function (_export, _context) {
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
    }, function (_bgroupHttpSuite103Api) {
      dependency_4 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_5 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_7 = _bgroupMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_9 = _aimpactAilearnSdk100LearningModules;
    }, function (_aimpactChatSdk100Users) {
      dependency_10 = _aimpactChatSdk100Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bgroup/media-manager", "1.0.0"], ["@bgroup/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@bgroup/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/learning-modules', dependency_9], ['@aimpact/chat-sdk/users', dependency_10]]);
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
        hash: 4154770850,
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
              console.log(10, this);
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
              console.log(50);
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
        hash: 105959047,
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
        hash: 3970737197,
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
        hash: 2323295426,
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

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 427426647,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJpc1JlYWR5IiwiUHJvbWlzZSIsImFsbCIsImluc3RhbmNlUHJvbWlzZXMiLCJpbmRleCIsImdldCIsImV4cG9ydHMiLCJfcHJvdmlkZXIiLCJfZW50aXRpZXMiLCJfY29yZSIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiYXNzaWdubWVudElkIiwidXNlciIsIm1vZHVsZSIsInRyYWNraW5nIiwiYW5hbHlzaXMiLCJmZWVkYmFjayIsImNoYXRNb2RlbCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYXNzZXNzbWVudCIsImNoYXRMb2FkZWQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInN0YXJ0dXAiLCJjb25zb2xlIiwibG9nIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJhY3Rpdml0eSIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiY2hhdCIsImxvYWRJbnRlcmFjdGlvbiIsInRyaWdnZXIiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsInNwb2tlbiIsInBvc3QiLCJzcG9rZW4xIiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJ1c2VySWQiLCJsb2FkZWQiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJDbGFzc3Jvb21zIiwiQ29sbGVjdGlvbiIsImdvb2dsZUNsYXNzcm9vbXNJZHMiLCJTZXQiLCJnb29nbGVDbGFzc3Jvb21zIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJmZXRjaGluZyIsImZpbHRlciIsImV4dGVybmFsIiwiYWRkIiwibWVzc2FnZSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJwZW9wbGUiLCJ3YXJuIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJhdXRob3JpemVkIiwicm9sZSIsInNhdmUiLCJpbnZpdGUiLCJpbnZpdGVkIiwiam9pbiIsImFwcHJvdmUiLCJ1aWQiLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsImV2ZW50TmFtZSIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJsaXN0IiwiZGVsZXRlIiwicmVzIiwiR0NsYXNzIiwiR0NsYXNzZXNQcm92aWRlciIsIk9yZ2FuaXphdGlvbnMiLCJPcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb25Qcm92aWRlciIsIm9yZyIsImNvZGUiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJfdXNlcnMiLCJVc2VyIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJvcmdhbml6YXRpb25zIiwiZW50aXR5IiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJnZXRQcm9wZXJ0aWVzIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJ2YWxpZGF0ZSIsImdldEFjY2VzcyIsInZhbGlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9jb2xsZWN0aW9uLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY2xhc3Nyb29tcy9pdGVtLnRzIiwiL2NsYXNzcm9vbXMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL2NvbGxlY3Rpb24udHMiLCIvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvY29pbnMudHMiLCIvcGVvcGxlLnRzIiwiL3VzZXIudHMiLCIvdXNlcnMvc3R1ZGVudHMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9wcm92aWRlci50cyIsIi91c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtjQUVuQkQsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNVLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7Z0JBRTVCLElBQUlFLFFBQVEsR0FBRyxJQUFJZCxLQUFBLENBQUFlLGtCQUFrQixDQUFDO2tCQUFFSDtnQkFB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