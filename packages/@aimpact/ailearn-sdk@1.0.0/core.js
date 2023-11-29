System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.15/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Activity, Assessment, DashboardWall, Assignment, Classroom, GClass, Topic, Lessons, Lesson, LearningModules, OldActivity, LearningModule, Sessions, Faces, Session, StudentsHome, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    Classroom: void 0,
    GClass: void 0,
    Topic: void 0,
    Lessons: void 0,
    Lesson: void 0,
    LearningModules: void 0,
    OldActivity: void 0,
    LearningModule: void 0,
    Sessions: void 0,
    Faces: void 0,
    Session: void 0,
    StudentsHome: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }, function (_beyondJsReactive116Entities) {
      dependency_2 = _beyondJsReactive116Entities;
    }, function (_aimpactChatSdk100Core) {
      dependency_3 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Api) {
      dependency_4 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp0015Config) {
      dependency_5 = _aimpactAilearnApp0015Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_7 = _bgroupMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_9 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.15"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/chat/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9]]);
      ims = new Map();
      /***************************************************
      INTERNAL MODULE: ./assignments/activities/collection
      ***************************************************/
      ims.set('./assignments/activities/collection', {
        hash: 1399101060,
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
                let instance = new _item.Activity({
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
        hash: 1377926407,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/chat-sdk/core");
          /*bundle*/
          class Activity extends _entities.Item {
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
          exports.Activity = Activity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 2610669471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@aimpact/chat/api");
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
              console.log(specs, 'TODO: Revisar respuesta');
              const {
                status,
                data,
                error
              } = await this.#api.post('activities/spoken/completion', specs);
              console.log(500, {
                status,
                data,
                error
              });
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
        hash: 2308048471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
        hash: 3553079506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
        hash: 1447299566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
        hash: 4259160543,
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
            // #module: LearningModule;
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
        hash: 4151103251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _api = require("@aimpact/chat/api");
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
              } = await this.#api.get(`/assignments/${specs.id}/tracking`);
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

      /*********************************
      INTERNAL MODULE: ./classrooms/item
      *********************************/

      ims.set('./classrooms/item', {
        hash: 3309276786,
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
            properties = ['id', 'name', 'section'];
            #assignments = new Map();
            get assignments() {
              return [...this.#assignments.values()];
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
              await this.isReady;
              const {
                status,
                error,
                data
              } = await super.load(specs);
              const promises = [];
              data.assignments.forEach(assignment => {
                this.#assignments.set(assignment.id, assignment);
              });
              await Promise.all(promises);
              this.set(data);
              this.ready = true;
              if (!status) {
                throw new Error(`Error loading session: ${error}`);
              }
              return data;
            }
          }
          exports.Classroom = Classroom;
        }
      });

      /*************************************
      INTERNAL MODULE: ./classrooms/provider
      *************************************/

      ims.set('./classrooms/provider', {
        hash: 2174013578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomProvider = void 0;
          var _api = require("@aimpact/chat/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ClassroomProvider extends _model.ReactiveModel {
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
              } = await this.#api.get(`/classrooms/${specs.id}`);
              // if (!status) {
              // 	throw new Error('error loading class');
              // }
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
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

      /************************************************
      INTERNAL MODULE: ./lessons/Elements/Element/index
      ************************************************/

      ims.set('./lessons/Elements/Element/index', {
        hash: 3508605510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Element = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
          class Element extends _model.ReactiveModel {
            #api;
            #parent;
            properties = ['id', 'content', 'type', 'value'];
            #path = '';
            constructor(type, parent, path) {
              super();
              this.#path = path;
              this.#parent = parent;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
            }
            async create() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.post(`/${this.#path}/${this.#parent.id}/elements/${this.type}`);
                if (!status) {
                  throw new Error('Element not found');
                }
                this.set(data);
                return;
              } catch (e) {
                console.error('error in create', e);
              }
            }
            async load(create) {
              try {
                this.fetching = true;
                if (!this.id && create) {
                  await this.create();
                  return true;
                }
                if (!this.id) return false;
                const path = `/lessons/elements/${this.id}`;
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(path);
                if (!status) {
                  throw new Error('Element not found');
                }
                if (!data) {
                  console.log('no existe, debemos crearlo..');
                }
                this.set(data);
              } catch (e) {
                console.error('error in load', e);
              } finally {
                this.fetching = false;
                return true;
              }
            }
          }
          exports.Element = Element;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./lessons/Elements/Element/interface
      ****************************************************/

      ims.set('./lessons/Elements/Element/interface', {
        hash: 2607841057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./lessons/Elements/index
      ****************************************/

      ims.set('./lessons/Elements/index', {
        hash: 3476903149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Elements = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _Element = require("./Element");
          class Elements extends _model.ReactiveModel {
            #items = new Map();
            #parent;
            #path;
            constructor(parent, elements = [], path) {
              super();
              this.#parent = parent;
              this.#path = path;
              elements.forEach(type => {
                const element = new _Element.Element(type, this.#parent, path);
                this.#items.set(type, element);
              });
            }
            get items() {
              return this.#items;
            }
            get(type) {
              return this.#items.get(type);
            }
            has(type) {
              return this.#items.get(type)?.value;
            }
            set(elements) {
              if (!elements) {
                console.warn('elements is undefined', this.#parent.title, elements);
                return;
              }
              Object.keys(elements).forEach(type => {
                const item = elements[type];
                this.#items.get(type).set(item);
              });
            }
            load(element) {
              if (!this.#items.has(element)) return;
              const item = this.#items.get(element);
              return item.load();
            }
          }
          exports.Elements = Elements;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./lessons/Introduction/IntroductionElement
      **********************************************************/

      ims.set('./lessons/Introduction/IntroductionElement', {
        hash: 3218113037,
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
      INTERNAL MODULE: ./lessons/Introduction/index
      ********************************************/

      ims.set('./lessons/Introduction/index', {
        hash: 361123314,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
          var _IntroductionElement = require("./IntroductionElement");
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
                  const instance = new _IntroductionElement.IntroductionElement(element, this.#parent);
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

      /*****************************************
      INTERNAL MODULE: ./lessons/ProgressManager
      *****************************************/

      ims.set('./lessons/ProgressManager', {
        hash: 4260455720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ProgressManager extends _model.ReactiveModel {
            #parent;
            #topicsElements = ['content', 'introduction', 'synthesis', 'assessment', 'previous'];
            #lessonElements = ['content', 'introduction', 'synthesis', 'assessment'];
            get lessonElements() {
              return this.#lessonElements;
            }
            get topicElements() {
              return this.#topicsElements;
            }
            #lessonPendings = new Set();
            MAX_TIME = 60;
            INTERVAL = 5000;
            get lessonElementsPending() {
              return [...this.#lessonPendings];
            }
            #topicsPendings = new Map();
            get topicElementsPending() {
              return this.#topicsPendings;
            }
            #lessonElementsUpdated = [];
            get lessonElementsUpdated() {
              return this.#lessonElementsUpdated;
            }
            #topicsUpdated = new Map();
            get topicsUpdated() {
              return this.#topicsUpdated;
            }
            #times = 0;
            constructor(parent) {
              super();
              this.#parent = parent;
              globalThis._p = this;
              globalThis.progress = this;
            }
            #currentTimeout;
            clearLessonUpdated = element => {
              if (!this.#lessonElementsUpdated.includes(element)) return;
              this.#lessonElementsUpdated.splice(this.#lessonElementsUpdated.indexOf(element), 1);
              this.triggerEvent('lesson.updated');
            };
            clearTopicUpdated = (topicId, element) => {
              if (!this.#topicsUpdated.has(topicId)) return;
              const topic = this.#topicsUpdated.get(topicId);
              if (!topic.has(element)) return;
              topic.delete(element);
              this.triggerEvent(`topic.${topicId}.updated`);
            };
            process(data) {
              globalThis.data = data;
              this.#times++;
              this.#topicsUpdated = new Map();
              let lessonChanges = false;
              let left = this.#lessonElements.reduce((acc, element) => {
                if (data.elements[element]?.id) {
                  if (this.#lessonPendings.has(element)) {
                    lessonChanges = true;
                    this.#lessonElementsUpdated.push(element);
                    this.#lessonPendings.delete(element);
                  }
                  return acc;
                }
                this.#lessonPendings.add(element);
                return acc + 1;
              }, 0);
              if (lessonChanges) this.triggerEvent('lesson.updated');
              data.topics.forEach(topic => {
                let topicChanges = false;
                this.#topicsElements.forEach(element => {
                  const lastTopicData = this.#topicsPendings.get(topic.id) ?? new Set();
                  if (lastTopicData.has(element) && topic.elements[element]?.id) {
                    if (!this.#topicsUpdated.has(topic.id)) this.#topicsUpdated.set(topic.id, new Set());
                    if (this.#topicsPendings.has(topic.id)) {
                      this.#topicsPendings.get(topic.id).delete(element);
                    }
                    this.#topicsUpdated.get(topic.id).add(element);
                    topicChanges = true;
                  }
                  if (!topic.elements[element]?.id) {
                    if (!this.#topicsPendings.has(topic.id)) this.#topicsPendings.set(topic.id, new Set());
                    this.#topicsPendings.get(topic.id).add(element);
                    left++;
                  }
                });
                if (topicChanges) {
                  this.triggerEvent(`topic.${topic.id}.updated`);
                }
              });
              if (left > 0 && this.#times < this.MAX_TIME) {
                this.#currentTimeout = globalThis.setTimeout(() => {
                  this.#parent.load({
                    progress: true
                  });
                }, this.INTERVAL);
              }
            }
            clear() {
              this.#lessonPendings.clear();
              this.#topicsPendings.clear();
              this.#lessonElementsUpdated = [];
              this.#topicsUpdated = new Map();
              this.#times = 0;
              if (this.#currentTimeout) globalThis.clearTimeout(this.#currentTimeout);
            }
          }
          exports.ProgressManager = ProgressManager;
        }
      });

      /********************************************
      INTERNAL MODULE: ./lessons/Topics/Topic/index
      ********************************************/

      ims.set('./lessons/Topics/Topic/index', {
        hash: 674701433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topic = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _Elements = require("../../Elements");
          var _Introduction = require("../../Introduction");
          /*bundle */
          class Topic extends _model.ReactiveModel {
            #api;
            #lesson;
            #ELEMENTS = ['introduction', 'content', 'synthesis', 'previous', 'assessment'];
            properties = ['id', 'content', 'title'];
            #elementsData;
            get is() {
              return 'topic';
            }
            #chatIntroductions;
            get chatIntroductions() {
              return this.#chatIntroductions;
            }
            #elements;
            get elements() {
              return this.#elements;
            }
            #order;
            #loaded;
            get order() {
              return this.#order;
            }
            constructor(data, lesson, order = 0) {
              super();
              this.#lesson = lesson;
              this.#order = order;
              this.#elements = new _Elements.Elements(this, this.#ELEMENTS, 'lessons/topics');
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#chatIntroductions = new _Introduction.Introduction(this);
            }
            async load(specs = {}) {
              try {
                if (this.#loaded) return;
                this.fetching = true;
                const {
                  content
                } = specs;
                if (this.value) return;
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/lessons/${this.#lesson.id}/topics/${this.id}`);
                if (!response.status) {
                  throw new Error(response.message);
                }
                if (!response.data) return;
                const values = {
                  ...response.data
                };
                this.elements.set(response.data.elements);
                delete values.elements;
                this.set(values);
                if (content) {
                  const item = this.elements.items.get('content');
                  await item.load();
                }
                this.#loaded = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateElement(name) {
              try {
                const element = await this.#elements.get(name);
                await element.load(true);
                return element;
              } catch (e) {
                console.error(e);
                return undefined;
              }
            }
            set(data) {
              let params = {
                ...data
              };
              if (data.elements) {
                this.elements.set(data.elements);
                delete params.elements;
              }
              super.set(params);
            }
          }
          exports.Topic = Topic;
        }
      });

      /************************************************
      INTERNAL MODULE: ./lessons/Topics/Topic/interface
      ************************************************/

      ims.set('./lessons/Topics/Topic/interface', {
        hash: 3863804622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./lessons/Topics/index
      **************************************/

      ims.set('./lessons/Topics/index', {
        hash: 2936885918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topics = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _Topic = require("./Topic");
          var _core = require("@beyond-js/kernel/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          class Topics extends _model.ReactiveModel {
            #items = new Map();
            #lesson;
            #firstLoaded;
            #api;
            constructor(lesson) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#lesson = lesson;
            }
            get items() {
              return [...this.#items.values()];
            }
            get map() {
              return this.#items;
            }
            add(topics) {
              topics.forEach((topic, order) => {
                const instance = new _Topic.Topic(topic, this.#lesson, order);
                const key = topic.id ?? topic.title;
                this.#items.set(key, instance);
              });
            }
            async get(type) {
              return this.items.find(item => item.type === type);
              return this.#items.get(type);
            }
            async loadFirst() {
              try {
                if (this.#firstLoaded) return this.#firstLoaded;
                this.#firstLoaded = new _core.PendingPromise();
                const topic = this.items[0];
                await topic.load({
                  content: true
                });
              } catch (e) {
                console.error('error loading first topic', e);
              }
            }
            async generate(curriculumObjective) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get('/lessons/suggestions', {
                curriculumObjectives: curriculumObjective,
                language: this.#lesson.language
              });
              if (!response.status) {
                throw new Error('ERROR_GETTING_TOPICS');
              }
              return response.data.topics;
            }
          }
          exports.Topics = Topics;
        }
      });

      /************************************
      INTERNAL MODULE: ./lessons/collection
      ************************************/

      ims.set('./lessons/collection', {
        hash: 2988265037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lessons = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class Lessons extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Lessons',
                db: 'chat-api',
                item: _item.Lesson
              });
              globalThis.c = this;
            }
          }
          exports.Lessons = Lessons;
        }
      });

      /************************************
      INTERNAL MODULE: ./lessons/interfaces
      ************************************/

      ims.set('./lessons/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./lessons/item
      ******************************/

      ims.set('./lessons/item', {
        hash: 1456710200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lesson = void 0;
          var _uuid = require("uuid");
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _Topics = require("./Topics");
          var _Elements = require("./Elements");
          var _Introduction = require("./Introduction");
          var _provider = require("./provider");
          var _ProgressManager = require("./ProgressManager");
          /*bundle*/ /**
                      * Lesson does not uses localdb.
                      */
          class Lesson extends _entities.Item {
            properties = ['id', 'curriculumObjective', {
              name: 'topics',
              type: 'collection'
            }, 'status', 'content', 'userId', 'sessions', 'language', 'students', 'contents', 'assessments'];
            get is() {
              return 'lesson';
            }
            #elements;
            get elements() {
              return this.#elements;
            }
            #chatIntroductions;
            get chatIntroductions() {
              return this.#chatIntroductions;
            }
            #ELEMENTS = ['introduction', 'content', 'synthesis', 'assessment'];
            #fields;
            #sessionsMap = new Map();
            get sessionsMap() {
              return this.#sessionsMap;
            }
            #provider;
            get topicsElements() {
              return this.#topics;
            }
            #api;
            #topics;
            get topics() {
              return this.#topics;
            }
            #elementsData;
            get elementsData() {
              return this.#elementsData;
            }
            #progress;
            get progress() {
              return this.#progress;
            }
            constructor({
              id = undefined
            } = {}) {
              // super({ id, db: 'chat-api', storeName: 'Lessons', provider: ProviderLesson });
              super({
                id,
                localdb: false,
                provider: _provider.ProviderLesson
              });
              this.initialise();
              this.reactiveProps(['topicTitles']);
              this.#elements = new _Elements.Elements(this, this.#ELEMENTS, 'lessons');
              this.#topics = new _Topics.Topics(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#chatIntroductions = new _Introduction.Introduction(this);
              this.#progress = new _ProgressManager.ProgressManager(this);
              this.contents = {
                characteristics: 0
              };
              this.#init();
            }
            async processLoad(data) {
              if (!data) {
                throw new Error('error loading class');
              }
              if (data.topics) {
                this.#topics.add(data.topics);
              }
              const {
                elements
              } = data;
              this.#elementsData = elements;
              this.#progress.process(data);
              if (elements) {
                this.#ELEMENTS.forEach(type => {
                  if (!elements.hasOwnProperty(type)) return;
                  const item = this.#elements.items.get(type);
                  item?.set(elements[type]);
                });
                if (elements?.content) {
                  const element = await this.#elements.get('content');
                  await element.load();
                }
              }
            }
            async #init() {
              try {
                await this.isReady;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async publish() {
              //	this.#topics = await t.his.#setTopics();
              const topics = this.topicTitles.map(t => ({
                id: (0, _uuid.v4)(),
                title: t
              }));
              this.#topics.add(topics);
              const properties = this.getProperties();
              properties.specs = {
                language: this.language,
                contents: this.contents,
                assessments: {
                  characteristics: 0
                },
                students: {
                  age: 18
                }
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/lessons', properties);
              //return super.publish();6
              return response;
            }
            async set(data) {
              super.set(data);
              if (data.topics) {
                this.#topics.add(data.topics);
              }
              if (data.sessions) {
                data.sessions.forEach(async item => {
                  // const session = new Session();
                  // await session.isReady;
                  // session.set({
                  // 	id: item.id,
                  // 	classRoomId: item.gclass.id,
                  // 	lesson: {
                  // 		id: data.id,
                  // 		name: data.name
                  // 	}
                  // });
                  // this.sessionsMap.set(item.gclass.id, session);
                });
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
            async generateElement(name) {
              try {
                const element = await this.#elements.get(name);
                await element.generate();
                return element;
              } catch (e) {
                console.error(e);
                return undefined;
              }
            }
            has(element) {
              return this.#elements.item.has(element);
            }
          }
          exports.Lesson = Lesson;
        }
      });

      /**********************************
      INTERNAL MODULE: ./lessons/provider
      **********************************/

      ims.set('./lessons/provider', {
        hash: 1804861305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProviderLesson = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ProviderLesson extends _model.ReactiveModel {
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
              } = await this.#api.get(`/lessons/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
          }
          exports.ProviderLesson = ProviderLesson;
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/collection
      ************************************/

      ims.set('./modules/collection', {
        hash: 2564080200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class LearningModules extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Lessons',
                db: 'chat-api',
                item: _item.LearningModule
              });
              globalThis.c = this;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /************************************************
      INTERNAL MODULE: ./modules/elements/element/index
      ************************************************/

      ims.set('./modules/elements/element/index', {
        hash: 266697591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Element = void 0;
          var _api = require("@aimpact/chat/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Element extends _model.ReactiveModel {
            #api;
            #parent;
            properties = ['id', 'content', 'type', 'value'];
            #path = '';
            constructor(type, parent, path) {
              super();
              this.#path = path;
              this.#parent = parent;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
            }
            async create() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.post(`/${this.#path}/${this.#parent.id}/elements/${this.type}`);
                if (!status) {
                  throw new Error('Element not found');
                }
                this.set(data);
                return;
              } catch (e) {
                console.error('error in create', e);
              }
            }
            async load(create) {
              try {
                this.fetching = true;
                if (!this.id && create) {
                  await this.create();
                  return true;
                }
                if (!this.id) return false;
                const path = `/lessons/elements/${this.id}`;
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(path);
                if (!status) {
                  throw new Error('Element not found');
                }
                if (!data) {
                  //console.log('no existe, debemos crearlo..');
                }
                this.set(data);
              } catch (e) {
                console.error('error in load', e);
              } finally {
                this.fetching = false;
                return true;
              }
            }
          }
          exports.Element = Element;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./modules/elements/element/interface
      ****************************************************/

      ims.set('./modules/elements/element/interface', {
        hash: 2607841057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./modules/elements/index
      ****************************************/

      ims.set('./modules/elements/index', {
        hash: 2512164350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Elements = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _element = require("./element");
          class Elements extends _model.ReactiveModel {
            #items = new Map();
            #parent;
            #path;
            constructor(parent, elements = [], path) {
              super();
              this.#parent = parent;
              this.#path = path;
              elements.forEach(type => {
                const element = new _element.Element(type, this.#parent, path);
                this.#items.set(type, element);
              });
            }
            get items() {
              return this.#items;
            }
            get(type) {
              return this.#items.get(type);
            }
            has(type) {
              return this.#items.get(type)?.value;
            }
            set(elements) {
              if (!elements) {
                console.warn('elements is undefined', this.#parent.title, elements);
                return;
              }
              Object.keys(elements).forEach(type => {
                const item = elements[type];
                this.#items.get(type).set(item);
              });
            }
            load(element) {
              if (!this.#items.has(element)) return;
              const item = this.#items.get(element);
              return item.load();
            }
          }
          exports.Elements = Elements;
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/interfaces
      ************************************/

      ims.set('./modules/interfaces', {
        hash: 3371199714,
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
        hash: 3143116362,
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
        hash: 1522338839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
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

      /********************************************************
      INTERNAL MODULE: ./modules/item/activities/activity/index
      ********************************************************/

      ims.set('./modules/item/activities/activity/index', {
        hash: 1678074252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OldActivity = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _elements = require("../../../elements");
          var _introduction = require("../../../introduction");
          /*bundle */
          class OldActivity extends _model.ReactiveModel {
            #api;
            #lesson;
            #ELEMENTS = ['introduction', 'content', 'synthesis', 'previous', 'assessment'];
            properties = ['id', 'content', 'title'];
            #elementsData;
            get is() {
              return 'topic';
            }
            #chatIntroductions;
            get chatIntroductions() {
              return this.#chatIntroductions;
            }
            #elements;
            get elements() {
              return this.#elements;
            }
            #order;
            #loaded;
            get order() {
              return this.#order;
            }
            constructor(data, lesson, order = 0) {
              super();
              this.#lesson = lesson;
              this.#order = order;
              this.#elements = new _elements.Elements(this, this.#ELEMENTS, 'lessons/topics');
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#chatIntroductions = new _introduction.Introduction(this);
            }
            async load(specs = {}) {
              try {
                if (this.#loaded) return;
                this.fetching = true;
                const {
                  content
                } = specs;
                if (this.value) return;
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/lessons/${this.#lesson.id}/topics/${this.id}`);
                if (!response.status) {
                  throw new Error(response.message);
                }
                if (!response.data) return;
                const values = {
                  ...response.data
                };
                this.elements.set(response.data.elements);
                delete values.elements;
                this.set(values);
                if (content) {
                  const item = this.elements.items.get('content');
                  await item.load();
                }
                this.#loaded = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateElement(name) {
              try {
                const element = await this.#elements.get(name);
                await element.load(true);
                return element;
              } catch (e) {
                console.error(e);
                return undefined;
              }
            }
            set(data) {
              let params = {
                ...data
              };
              if (data.elements) {
                this.elements.set(data.elements);
                delete params.elements;
              }
              super.set(params);
            }
          }
          exports.OldActivity = OldActivity;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./modules/item/activities/activity/interface
      ************************************************************/

      ims.set('./modules/item/activities/activity/interface', {
        hash: 1826982984,
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
        hash: 114475327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          class Activities extends _model.ReactiveModel {
            #items = new Map();
            #lesson;
            #firstLoaded;
            #api;
            constructor(lesson) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#lesson = lesson;
            }
            get items() {
              return [...this.#items.values()];
            }
            get map() {
              return this.#items;
            }
            add(topics) {
              topics.forEach((topic, order) => {
                const instance = new Topic(topic, this.#lesson, order);
                const key = topic.id ?? topic.title;
                this.#items.set(key, instance);
              });
            }
            async get(type) {
              return this.items.find(item => item.type === type);
              return this.#items.get(type);
            }
            async loadFirst() {
              try {
                if (this.#firstLoaded) return this.#firstLoaded;
                this.#firstLoaded = new _core.PendingPromise();
                const topic = this.items[0];
                await topic.load({
                  content: true
                });
              } catch (e) {
                console.error('error loading first topic', e);
              }
            }
            async generate(curriculumObjective) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get('/lessons/suggestions', {
                curriculumObjectives: curriculumObjective,
                language: this.#lesson.language
              });
              if (!response.status) {
                throw new Error('ERROR_GETTING_TOPICS');
              }
              return response.data.topics;
            }
          }
          exports.Activities = Activities;
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/item/index
      ************************************/

      ims.set('./modules/item/index', {
        hash: 3515066722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _activities = require("./activities");
          var _api = require("@aimpact/chat/api");
          var _elements = require("../elements");
          var _introduction = require("../introduction");
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          var _progressManager = require("../progress-manager");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uuid = require("uuid");
          /*bundle*/ /**
                      * Lesson does not uses localdb.
                      */
          class LearningModule extends _entities.Item {
            properties = ['id', 'objective', {
              name: 'activities',
              type: 'collection'
            }, 'title', 'status', 'content', 'userId', 'sessions', 'language', 'students', 'contents', 'assessments', 'type', 'subtype'];
            get is() {
              return 'lesson';
            }
            #elements;
            get elements() {
              return this.#elements;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            #chatIntroductions;
            get chatIntroductions() {
              return this.#chatIntroductions;
            }
            #ELEMENTS = ['introduction', 'content', 'synthesis', 'assessment'];
            #fields;
            #sessionsMap = new Map();
            get sessionsMap() {
              return this.#sessionsMap;
            }
            #provider;
            #api;
            #elementsData;
            get elementsData() {
              return this.#elementsData;
            }
            #progress;
            get progress() {
              return this.#progress;
            }
            constructor({
              id = undefined
            } = {}) {
              // super({ id, db: 'chat-api', storeName: 'Lessons', provider: ProviderLesson });
              super({
                id,
                localdb: false,
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.reactiveProps(['activitiesTitles']);
              this.#elements = new _elements.Elements(this, this.#ELEMENTS, 'lessons');
              this.#activities = new _activities.Activities(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#chatIntroductions = new _introduction.Introduction(this);
              this.#progress = new _progressManager.ProgressManager(this);
              this.contents = {
                characteristics: 0
              };
              this.#init();
            }
            async processLoad(data) {
              if (!data) {
                throw new Error('error loading class');
              }
              if (data.activities) {
                this.#activities.add(data.activities);
              }
              const {
                elements
              } = data;
              this.#elementsData = elements;
              this.#progress.process(data);
              if (elements) {
                this.#ELEMENTS.forEach(type => {
                  if (!elements.hasOwnProperty(type)) return;
                  const item = this.#elements.items.get(type);
                  item?.set(elements[type]);
                });
                if (elements?.content) {
                  const element = await this.#elements.get('content');
                  await element.load();
                }
              }
            }
            async #init() {
              try {
                await this.isReady;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async publish() {
              //	this.#activities = await t.his.#setactivities();
              const activities = this.activitiesTitles.map(t => ({
                id: (0, _uuid.v4)(),
                title: t
              }));
              this.#activities.add(activities);
              const properties = this.getProperties();
              properties.specs = {
                language: this.language,
                contents: this.contents,
                assessments: {
                  characteristics: 0
                },
                students: {
                  age: 18
                }
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/lessons', properties);
              //return super.publish();6
              return response;
            }
            async set(data) {
              super.set(data);
              if (data.activities) {
                this.#activities.add(data.activities);
              }
              if (data.sessions) {
                data.sessions.forEach(async item => {});
              }
            }
            async addSession(classRoomId) {
              const specs = {
                moduleId: this.id,
                classRoomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assign', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              return response.data;
            }
            async generateElement(name) {
              try {
                const element = await this.#elements.get(name);
                await element.generate();
                return element;
              } catch (e) {
                console.error(e);
                return undefined;
              }
            }
            has(element) {
              return this.#elements.item.has(element);
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /***************************************
      INTERNAL MODULE: ./modules/item/provider
      ***************************************/

      ims.set('./modules/item/provider', {
        hash: 2234971190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
              } = await this.#api.get(`/lessons/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /******************************************
      INTERNAL MODULE: ./modules/progress-manager
      ******************************************/

      ims.set('./modules/progress-manager', {
        hash: 644350473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ProgressManager extends _model.ReactiveModel {
            #parent;
            #topicsElements = ['content', 'introduction', 'synthesis', 'assessment', 'previous'];
            #lessonElements = ['content', 'introduction', 'synthesis', 'assessment'];
            get lessonElements() {
              return this.#lessonElements;
            }
            get topicElements() {
              return this.#topicsElements;
            }
            #lessonPendings = new Set();
            MAX_TIME = 60;
            INTERVAL = 5000;
            get lessonElementsPending() {
              return [...this.#lessonPendings];
            }
            #topicsPendings = new Map();
            get topicElementsPending() {
              return this.#topicsPendings;
            }
            #lessonElementsUpdated = [];
            get lessonElementsUpdated() {
              return this.#lessonElementsUpdated;
            }
            #topicsUpdated = new Map();
            get topicsUpdated() {
              return this.#topicsUpdated;
            }
            #times = 0;
            constructor(parent) {
              super();
              this.#parent = parent;
              globalThis._p = this;
              globalThis.progress = this;
            }
            #currentTimeout;
            clearLessonUpdated = element => {
              if (!this.#lessonElementsUpdated.includes(element)) return;
              this.#lessonElementsUpdated.splice(this.#lessonElementsUpdated.indexOf(element), 1);
              this.triggerEvent('lesson.updated');
            };
            clearTopicUpdated = (topicId, element) => {
              if (!this.#topicsUpdated.has(topicId)) return;
              const topic = this.#topicsUpdated.get(topicId);
              if (!topic.has(element)) return;
              topic.delete(element);
              this.triggerEvent(`topic.${topicId}.updated`);
            };
            process(data) {
              globalThis.data = data;
              this.#times++;
              this.#topicsUpdated = new Map();
              let lessonChanges = false;
              let left = this.#lessonElements.reduce((acc, element) => {
                if (data.elements[element]?.id) {
                  if (this.#lessonPendings.has(element)) {
                    lessonChanges = true;
                    this.#lessonElementsUpdated.push(element);
                    this.#lessonPendings.delete(element);
                  }
                  return acc;
                }
                this.#lessonPendings.add(element);
                return acc + 1;
              }, 0);
              if (lessonChanges) this.triggerEvent('lesson.updated');
              data.topics.forEach(topic => {
                let topicChanges = false;
                this.#topicsElements.forEach(element => {
                  const lastTopicData = this.#topicsPendings.get(topic.id) ?? new Set();
                  if (lastTopicData.has(element) && topic.elements[element]?.id) {
                    if (!this.#topicsUpdated.has(topic.id)) this.#topicsUpdated.set(topic.id, new Set());
                    if (this.#topicsPendings.has(topic.id)) {
                      this.#topicsPendings.get(topic.id).delete(element);
                    }
                    this.#topicsUpdated.get(topic.id).add(element);
                    topicChanges = true;
                  }
                  if (!topic.elements[element]?.id) {
                    if (!this.#topicsPendings.has(topic.id)) this.#topicsPendings.set(topic.id, new Set());
                    this.#topicsPendings.get(topic.id).add(element);
                    left++;
                  }
                });
                if (topicChanges) {
                  this.triggerEvent(`topic.${topic.id}.updated`);
                }
              });
              if (left > 0 && this.#times < this.MAX_TIME) {
                this.#currentTimeout = globalThis.setTimeout(() => {
                  this.#parent.load({
                    progress: true
                  });
                }, this.INTERVAL);
              }
            }
            clear() {
              this.#lessonPendings.clear();
              this.#topicsPendings.clear();
              this.#lessonElementsUpdated = [];
              this.#topicsUpdated = new Map();
              this.#times = 0;
              if (this.#currentTimeout) globalThis.clearTimeout(this.#currentTimeout);
            }
          }
          exports.ProgressManager = ProgressManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./sessions/assessment
      *************************************/

      ims.set('./sessions/assessment', {
        hash: 3012206781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
        hash: 1355716675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Session = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
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
        hash: 2604454439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@aimpact/chat/api");
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
      __pkg.exports.descriptor = [{
        "im": "./assignments/activities/item",
        "from": "Activity",
        "name": "Activity"
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
        "im": "./classrooms/item",
        "from": "Classroom",
        "name": "Classroom"
      }, {
        "im": "./gclasess/item",
        "from": "GClass",
        "name": "GClass"
      }, {
        "im": "./lessons/Topics/Topic/index",
        "from": "Topic",
        "name": "Topic"
      }, {
        "im": "./lessons/collection",
        "from": "Lessons",
        "name": "Lessons"
      }, {
        "im": "./lessons/item",
        "from": "Lesson",
        "name": "Lesson"
      }, {
        "im": "./modules/collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./modules/item/activities/activity/index",
        "from": "OldActivity",
        "name": "OldActivity"
      }, {
        "im": "./modules/item/index",
        "from": "LearningModule",
        "name": "LearningModule"
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./assignments/activities/item').Activity : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./assignments/assessment').Assessment : value);
        (require || prop === 'DashboardWall') && _export("DashboardWall", DashboardWall = require ? require('./assignments/dashboard/dasboard-wall').DashboardWall : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'Classroom') && _export("Classroom", Classroom = require ? require('./classrooms/item').Classroom : value);
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'Topic') && _export("Topic", Topic = require ? require('./lessons/Topics/Topic/index').Topic : value);
        (require || prop === 'Lessons') && _export("Lessons", Lessons = require ? require('./lessons/collection').Lessons : value);
        (require || prop === 'Lesson') && _export("Lesson", Lesson = require ? require('./lessons/item').Lesson : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./modules/collection').LearningModules : value);
        (require || prop === 'OldActivity') && _export("OldActivity", OldActivity = require ? require('./modules/item/activities/activity/index').OldActivity : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./modules/item/index').LearningModule : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./sessions/assessment').Assessment : value);
        (require || prop === 'Sessions') && _export("Sessions", Sessions = require ? require('./sessions/collection').Sessions : value);
        (require || prop === 'Faces') && _export("Faces", Faces = require ? require('./sessions/faces').Faces : value);
        (require || prop === 'Session') && _export("Session", Session = require ? require('./sessions/item').Session : value);
        (require || prop === 'StudentsHome') && _export("StudentsHome", StudentsHome = require ? require('./students-home/item').StudentsHome : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFjdGl2aXR5Iiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9lbnRpdGllcyIsIl9jb3JlIiwiSXRlbSIsInByb3BlcnRpZXMiLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiY2hhdExvYWRlZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic3RhcnR1cCIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIm1hdGVyaWFscyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJjaGF0IiwibG9hZEludGVyYWN0aW9uIiwidHJpZ2dlciIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInNwb2tlbjEiLCJsb2ciLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsInVzZXJJZCIsImxvYWRlZCIsInNhdmVTZWxlY3Rpb24iLCJEYXNoYm9hcmRXYWxsIiwiRGFzaGJvYXJkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsInVybCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbSIsImFzc2lnbm1lbnRzIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJhc3NpZ25tZW50IiwicmVhZHkiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiRWxlbWVudCIsInBhdGgiLCJjcmVhdGUiLCJmZXRjaGluZyIsIl9FbGVtZW50IiwiRWxlbWVudHMiLCJlbGVtZW50Iiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJQcm9ncmVzc01hbmFnZXIiLCJ0b3BpY3NFbGVtZW50cyIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsImxlc3NvblBlbmRpbmdzIiwiU2V0IiwiTUFYX1RJTUUiLCJJTlRFUlZBTCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljc1BlbmRpbmdzIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwidGltZXMiLCJnbG9iYWxUaGlzIiwiX3AiLCJjdXJyZW50VGltZW91dCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsImNsZWFyVG9waWNVcGRhdGVkIiwidG9waWNJZCIsInRvcGljIiwiZGVsZXRlIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiX0VsZW1lbnRzIiwiX0ludHJvZHVjdGlvbiIsIlRvcGljIiwibGVzc29uIiwiRUxFTUVOVFMiLCJlbGVtZW50c0RhdGEiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwiY29udGVudCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiX1RvcGljIiwiVG9waWNzIiwiZmlyc3RMb2FkZWQiLCJtYXAiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiY3VycmljdWx1bU9iamVjdGl2ZXMiLCJsYW5ndWFnZSIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uIiwiYyIsIl91dWlkIiwiX1RvcGljcyIsIl9Qcm9ncmVzc01hbmFnZXIiLCJmaWVsZHMiLCJzZXNzaW9uc01hcCIsImxvY2FsZGIiLCJQcm92aWRlckxlc3NvbiIsImluaXRpYWxpc2UiLCJyZWFjdGl2ZVByb3BzIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJpbml0IiwiaGFzT3duUHJvcGVydHkiLCIjaW5pdCIsInRvcGljVGl0bGVzIiwidCIsInY0IiwiZ2V0UHJvcGVydGllcyIsImFzc2Vzc21lbnRzIiwic3R1ZGVudHMiLCJhZ2UiLCJzZXNzaW9ucyIsImFkZFNlc3Npb24iLCJjbGFzc1Jvb21JZCIsIm1vZHVsZUlkIiwiTGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGUiLCJfZWxlbWVudCIsIl9lbGVtZW50cyIsIl9pbnRyb2R1Y3Rpb24iLCJPbGRBY3Rpdml0eSIsIl9hY3Rpdml0aWVzIiwiX3Byb2dyZXNzTWFuYWdlciIsIk1vZHVsZVByb3ZpZGVyIiwiYWN0aXZpdGllc1RpdGxlcyIsIlNlc3Npb25zIiwiU2Vzc2lvbiIsIkZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsInNldExlc3NvbiIsImxlc3NvbklkIiwidHJhY2UiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9wcm92aWRlci50cyIsIi9jbGFzc3Jvb21zL2l0ZW0udHMiLCIvY2xhc3Nyb29tcy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvbGVzc29ucy9FbGVtZW50cy9pbmRleC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2xlc3NvbnMvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL2xlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwiL2xlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwiL2xlc3NvbnMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlc3NvbnMvaXRlbS50cyIsIi9sZXNzb25zL3Byb3ZpZGVyLnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIi9tb2R1bGVzL2VsZW1lbnRzL2VsZW1lbnQvaW5kZXgudHMiLCIvbW9kdWxlcy9lbGVtZW50cy9pbmRleC50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2FjdGl2aXR5L2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vcHJvdmlkZXIudHMiLCIvbW9kdWxlcy9wcm9ncmVzcy1tYW5hZ2VyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFB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