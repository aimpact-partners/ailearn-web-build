System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/model", "@beyond-js/reactive@1.1.9/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Activity, Assessment, DashboardWall, Assignment, Classroom, GClass, LearningModules, IActivities, LearningModule, Sessions, Faces, Session, StudentsHome, ISuggestionResponse, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    Classroom: void 0,
    GClass: void 0,
    LearningModules: void 0,
    IActivities: void 0,
    LearningModule: void 0,
    Sessions: void 0,
    Faces: void 0,
    Session: void 0,
    StudentsHome: void 0,
    ISuggestionResponse: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive119Model) {
      dependency_1 = _beyondJsReactive119Model;
    }, function (_beyondJsReactive119Entities) {
      dependency_2 = _beyondJsReactive119Entities;
    }, function (_aimpactChatSdk100Core) {
      dependency_3 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_5 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_7 = _bgroupMediaManager100Uploader;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8]]);
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
        hash: 1965747209,
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
          exports.Activity = Activity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 1488338512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 3288292154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 1327475767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 1207257741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 2978209824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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
              const params = {};
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

      /*********************************
      INTERNAL MODULE: ./classrooms/item
      *********************************/

      ims.set('./classrooms/item', {
        hash: 2404221081,
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
        hash: 3317534623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 996235015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
              } = await this.#api.get(`/modules/drafts`);
              if (!status) {
                throw new Error('error loading module');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
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
        hash: 4035159874,
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
        hash: 142651933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 3474531768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _suggestions = require("../../../suggestions");
          var _item = require("./item");
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
            constructor(learningModule) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
            }
            setItems(data) {
              data.forEach((activity, index) => {
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
          }
          exports.Activities = Activities;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./modules/item/activities/item
      **********************************************/

      ims.set('./modules/item/activities/item', {
        hash: 735976326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _suggestions = require("../../../suggestions");
          var _specs = require("./specs");
          var _materials = require("./materials");
          /* bundle */
          class Activity extends _entities.Item {
            #properties = ['index', 'id', 'type', 'title', 'description', 'objective', 'duration', 'specs'];
            #types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
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
            #materials;
            get materials() {
              return this.#materials;
            }
            constructor(data) {
              super();
              this.reactiveProps(['index', 'id', 'type', 'title', 'description', 'objective', 'duration']);
              this.#specs = new _specs.ActivitySpecs(this);
              this.#learningModule = data.learningModule;
              this.set(data);
              this.#materials = new _materials.ActivityMaterials(this, this.#learningModule);
              if (data.materials) {
                this.#materials.set(data.materials);
              }
              this.#suggestions = new _suggestions.Suggestions();
            }
            set(data) {
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
              const data = this.#generate({
                type: 'questions',
                observations
              });
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
              const currentData = this.specs.getData()[data.type] ?? [];
              specs[type] = removeItems ? specs[type] : [...currentData, ...specs[type]];
              this.set({
                specs
              });
              this.trigger('change');
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
          }
          exports.Activity = Activity;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./modules/item/activities/materials/index
      *********************************************************/

      ims.set('./modules/item/activities/materials/index', {
        hash: 3175633334,
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
          var _materialTypes = require("./material-types");
          class ActivityMaterials extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            properties = ['article', 'synthesis', 'introduction', 'flashcard'];
            #items;
            get items() {
              return this.#items;
            }
            #api;
            #parent;
            TYPES = _materialTypes.MATERIAL_TYPES;
            #module;
            data = [];
            constructor(parent, module) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#module = module;
              this.#parent = parent;
              this.init();
            }
            init() {
              const type = this.TYPES.hasOwnProperty(this.#parent.type) ? this.#parent.type : 'default';
              this.#items = this.TYPES[type];
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
                  article: this.article
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
            set(data) {
              this.data.push(data);
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
              this.triggerEvent();
              globalThis._aa = this;
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

      /******************************************************************
      INTERNAL MODULE: ./modules/item/activities/materials/material-types
      ******************************************************************/

      ims.set('./modules/item/activities/materials/material-types', {
        hash: 833265413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MATERIAL_TYPES = void 0;
          const MATERIAL_TYPES = exports.MATERIAL_TYPES = {
            'content-theory': ['bullet-points', 'article', {
              required: 'article',
              name: 'synthesis'
            }, {
              required: 'article',
              name: 'introduction'
            }],
            conversation: ['bullet-points', 'introduction'],
            'multiple-choice': ['bullet-points', 'introduction'],
            spoken: ['bullet-points', 'introduction'],
            written: ['bullet-points', 'introduction'],
            default: ['bullet-points', 'introduction']
          };
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

      /***********************************************
      INTERNAL MODULE: ./modules/item/activities/specs
      ***********************************************/

      ims.set('./modules/item/activities/specs', {
        hash: 3648631481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _question = require("./question");
          class ActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['kind', 'topics', 'questions', 'criterias'];
            properties = ['kind', 'topics', 'criterias'];
            #questions;
            get questions() {
              return this.#questions;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['kind', 'topics', 'criterias']);
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
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /************************************
      INTERNAL MODULE: ./modules/item/index
      ************************************/

      ims.set('./modules/item/index', {
        hash: 1875719883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _activities = require("./activities");
          var _provider = require("./provider");
          var _progressManager = require("../progress-manager");
          var _suggestions = require("../../suggestions");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'picture', 'language', 'title', 'description', 'objective', 'audience', 'members', 'public', 'status', 'totalActivities', 'target', 'duration'];
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
            #provider;
            #api;
            #suggestions;
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
                db: 'chat-api',
                storeName: 'Modules',
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.#suggestions = new _suggestions.Suggestions();
              this.#activities = new _activities.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              // this.#chatIntroductions = new Introduction(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#progress = new _progressManager.ProgressManager(this);
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
              this.#progress.process(data);
            }
            async set(data) {
              super.set(data);
              if (data.activities) {
                this.#activities.setItems(data.activities);
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
            async draft(values) {
              try {
                this.fetching = true;
                this.set(values);
                const data = await this.#suggestions.generate(values);
                this.set({
                  ...data.module,
                  id: data.id
                });
                this.activities.setItems(data.activities);
                this.fetching = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
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
              this.set(answer.module);
              this.triggerEvent('activities.generated');
              return answer;
            }
            async generateObjectives({
              objective
            }) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'objective',
                  language: this.defaultLanguage,
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
            saveDraft() {
              const data = this.getProperties();
              data.activities = this.activities.getItems();
              return this.provider.saveDraft(data);
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /***************************************
      INTERNAL MODULE: ./modules/item/provider
      ***************************************/

      ims.set('./modules/item/provider', {
        hash: 239285901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
                const {
                  status,
                  data
                } = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
                if (!status) {
                  throw new Error('error deleting module draft');
                }
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
        hash: 984323222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 396831095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Session = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 2503339701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 2140974758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
                // return this.hardcodedGenerate(specs);
                this.#api.bearer(_session.sessionWrapper.user.token);
                // console.log(40, specs);
                // return this.hardcodedGenerate(specs);
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
          }
          exports.Suggestions = Suggestions;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./suggestions/interfaces/index
      **********************************************/

      ims.set('./suggestions/interfaces/index', {
        hash: 2482857404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
      }, {
        "im": "./suggestions/interfaces/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
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
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./modules/collection/index').LearningModules : value);
        (require || prop === 'IActivities') && _export("IActivities", IActivities = require ? require('./modules/interfaces/activities').IActivities : value);
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./modules/item/activities/item').Activity : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./modules/item/index').LearningModule : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./sessions/assessment').Assessment : value);
        (require || prop === 'Sessions') && _export("Sessions", Sessions = require ? require('./sessions/collection').Sessions : value);
        (require || prop === 'Faces') && _export("Faces", Faces = require ? require('./sessions/faces').Faces : value);
        (require || prop === 'Session') && _export("Session", Session = require ? require('./sessions/item').Session : value);
        (require || prop === 'StudentsHome') && _export("StudentsHome", StudentsHome = require ? require('./students-home/item').StudentsHome : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./suggestions/interfaces/index').ISuggestionResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFjdGl2aXR5Iiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9lbnRpdGllcyIsIl9jb3JlIiwiSXRlbSIsInByb3BlcnRpZXMiLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiY2hhdExvYWRlZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic3RhcnR1cCIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIm1hdGVyaWFscyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJjaGF0IiwibG9hZEludGVyYWN0aW9uIiwidHJpZ2dlciIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInNwb2tlbjEiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsInVzZXJJZCIsImxvYWRlZCIsInNhdmVTZWxlY3Rpb24iLCJEYXNoYm9hcmRXYWxsIiwiRGFzaGJvYXJkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsInVybCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbSIsImFzc2lnbm1lbnRzIiwiYXNpZ21lbnRzIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJhc3NpZ25tZW50IiwicmVhZHkiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJMZWFybmluZ01vZHVsZSIsIk1vZHVsZXNQcm92aWRlciIsImxpc3QiLCJlbnRyaWVzIiwiZGVsZXRlSXRlbXMiLCJkZWxldGUiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsIl9lbGVtZW50IiwiSW50cm9kdWN0aW9uIiwiX3N1Z2dlc3Rpb25zIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsIm1hcCIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJyZW1vdmUiLCJnZXRJdGVtcyIsImdldERhdGEiLCJjbGVhciIsIl9zcGVjcyIsIl9tYXRlcmlhbHMiLCJ0eXBlcyIsImRlZmF1bHRMYW5ndWFnZSIsInJlYWN0aXZlUHJvcHMiLCJBY3Rpdml0eVNwZWNzIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGVBbnN3ZXIiLCJnZW5lcmF0ZSIsInF1ZXN0aW9ucyIsIndhcm4iLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm9ic2VydmF0aW9ucyIsImdlbmVyYXRlQWxsQW5zd2VycyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJyZW1vdmVJdGVtcyIsImN1cnJlbnREYXRhIiwiI2dlbmVyYXRlIiwiZmV0Y2hpbmciLCJsYW5ndWFnZSIsImFjdGl2aXR5SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsIl9tYXRlcmlhbFR5cGVzIiwiVFlQRVMiLCJNQVRFUklBTF9UWVBFUyIsImluaXQiLCJuYW1lIiwiZ2VuZXJhdGVDb250ZW50IiwiYXJ0aWNsZSIsImdsb2JhbFRoaXMiLCJfYWEiLCJyZXF1aXJlZCIsImNvbnZlcnNhdGlvbiIsIndyaXR0ZW4iLCJBY3Rpdml0eVF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJhZGRPcHRpb24iLCJvcHRpb24iLCJvcHRpb25zIiwiaW5jbHVkZXMiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIl9xdWVzdGlvbiIsInF1ZXN0aW9uTGFiZWxzIiwidGV4dCIsImNoYW5nZSIsInF1ZXN0aW9uTW9kZWwiLCJfYWN0aXZpdGllcyIsIl9wcm9ncmVzc01hbmFnZXIiLCJzZXNzaW9uc01hcCIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiUHJvZ3Jlc3NNYW5hZ2VyIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsImFkZCIsImFkZFNlc3Npb24iLCJjbGFzc1Jvb21JZCIsIm1vZHVsZUlkIiwiZHJhZnQiLCJyZWZpbmVBY3Rpdml0aWVzIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJvYmplY3RpdmUiLCJhdWRpZW5jZSIsImFuc3dlciIsInRvdGFsQWN0aXZpdGllcyIsImdlbmVyYXRlT2JqZWN0aXZlcyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJzYXZlRHJhZnQiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0RHJhZnQiLCJ0b3BpY3NFbGVtZW50cyIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsImxlc3NvblBlbmRpbmdzIiwiU2V0IiwiTUFYX1RJTUUiLCJJTlRFUlZBTCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljc1BlbmRpbmdzIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwidGltZXMiLCJfcCIsImN1cnJlbnRUaW1lb3V0IiwiY2xlYXJMZXNzb25VcGRhdGVkIiwic3BsaWNlIiwiaW5kZXhPZiIsImNsZWFyVG9waWNVcGRhdGVkIiwidG9waWNJZCIsInRvcGljIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlNlc3Npb25zIiwiU2Vzc2lvbiIsIkZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsImxlc3NvbiIsInNldExlc3NvbiIsImxlc3NvbklkIiwidHJhY2UiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJkaXNwbGF5TmFtZSIsIkRBVEEiLCJ0aW1lIiwiY3JpdGVyaWFzIiwia2luZCIsIl9oYXJkY29kZWREYXRhIiwiaGFyZGNvZGVkR2VuZXJhdGUiLCJwcm9taXNlIl0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL21hdGVyaWFsLXR5cGVzLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzLnRzIiwiL21vZHVsZXMvaXRlbS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vcHJvdmlkZXIudHMiLCIvbW9kdWxlcy9wcm9ncmVzcy1tYW5hZ2VyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2hhcmRjb2RlZC1kYXRhLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkIsTUFBTUMsUUFBUSxHQUFHLEVBQUU7Y0FFbkJELFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQVQsUUFBUyxDQUFDVSxHQUFHLENBQUNELEVBQUUsQ0FBQyxFQUFFO2dCQUU1QixJQUFJRSxRQUFRLEdBQUcsSUFBSWQsS0FBQSxDQUFBZSxRQUFRLENBQUM7a0JBQUVIO2dCQUFFLENBQUUsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLENBQUFULFFBQVMsQ0FB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