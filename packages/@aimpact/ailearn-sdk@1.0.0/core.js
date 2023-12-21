System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.23/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Activity, Assessment, DashboardWall, Assignment, Classroom, GClass, LearningModules, OldActivity, LearningModule, Sessions, Faces, Session, StudentsHome, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    Classroom: void 0,
    GClass: void 0,
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
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0023Config) {
      dependency_5 = _aimpactAilearnApp0023Config;
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9]]);
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
        hash: 2930414169,
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
        hash: 868050368,
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
        hash: 56403950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Element = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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

      /********************************************************
      INTERNAL MODULE: ./modules/item/activities/activity/index
      ********************************************************/

      ims.set('./modules/item/activities/activity/index', {
        hash: 203429649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OldActivity = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 3897305817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 34458032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _activities = require("./activities");
          var _api = require("@aimpact/chat-sdk/api");
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
        hash: 4101661933,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFjdGl2aXR5Iiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9lbnRpdGllcyIsIl9jb3JlIiwiSXRlbSIsInByb3BlcnRpZXMiLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiY2hhdExvYWRlZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic3RhcnR1cCIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIm1hdGVyaWFscyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJjaGF0IiwibG9hZEludGVyYWN0aW9uIiwidHJpZ2dlciIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInNwb2tlbjEiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsInVzZXJJZCIsImxvYWRlZCIsInNhdmVTZWxlY3Rpb24iLCJEYXNoYm9hcmRXYWxsIiwiRGFzaGJvYXJkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsInVybCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbSIsImFzc2lnbm1lbnRzIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJhc3NpZ25tZW50IiwicmVhZHkiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJMZWFybmluZ01vZHVsZSIsImdsb2JhbFRoaXMiLCJjIiwiRWxlbWVudCIsInBhdGgiLCJjcmVhdGUiLCJmZXRjaGluZyIsIl9lbGVtZW50IiwiRWxlbWVudHMiLCJlbGVtZW50Iiwid2FybiIsInRpdGxlIiwia2V5cyIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJfZWxlbWVudHMiLCJfaW50cm9kdWN0aW9uIiwiT2xkQWN0aXZpdHkiLCJsZXNzb24iLCJFTEVNRU5UUyIsImVsZW1lbnRzRGF0YSIsImlzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJjb250ZW50IiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJmaXJzdExvYWRlZCIsIm1hcCIsImFkZCIsInRvcGljcyIsInRvcGljIiwiVG9waWMiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiY3VycmljdWx1bU9iamVjdGl2ZXMiLCJsYW5ndWFnZSIsIl9hY3Rpdml0aWVzIiwiX3Byb2dyZXNzTWFuYWdlciIsIl91dWlkIiwiZmllbGRzIiwic2Vzc2lvbnNNYXAiLCJsb2NhbGRiIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwicmVhY3RpdmVQcm9wcyIsIlByb2dyZXNzTWFuYWdlciIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiaW5pdCIsImhhc093blByb3BlcnR5IiwiI2luaXQiLCJhY3Rpdml0aWVzVGl0bGVzIiwidCIsInY0IiwiZ2V0UHJvcGVydGllcyIsImFzc2Vzc21lbnRzIiwic3R1ZGVudHMiLCJhZ2UiLCJzZXNzaW9ucyIsImFkZFNlc3Npb24iLCJjbGFzc1Jvb21JZCIsIm1vZHVsZUlkIiwidG9waWNzRWxlbWVudHMiLCJsZXNzb25FbGVtZW50cyIsInRvcGljRWxlbWVudHMiLCJsZXNzb25QZW5kaW5ncyIsIlNldCIsIk1BWF9USU1FIiwiSU5URVJWQUwiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY3NQZW5kaW5ncyIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInRpbWVzIiwiX3AiLCJjdXJyZW50VGltZW91dCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsImNsZWFyVG9waWNVcGRhdGVkIiwidG9waWNJZCIsImRlbGV0ZSIsImxlc3NvbkNoYW5nZXMiLCJsZWZ0IiwicmVkdWNlIiwiYWNjIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIlNlc3Npb25zIiwiU2Vzc2lvbiIsIkZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsInNldExlc3NvbiIsImxlc3NvbklkIiwidHJhY2UiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9wcm92aWRlci50cyIsIi9jbGFzc3Jvb21zL2l0ZW0udHMiLCIvY2xhc3Nyb29tcy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIi9tb2R1bGVzL2VsZW1lbnRzL2VsZW1lbnQvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL21vZHVsZXMvZWxlbWVudHMvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2FjdGl2aXR5L2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vcHJvdmlkZXIudHMiLCIvbW9kdWxlcy9wcm9ncmVzcy1tYW5hZ2VyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvaXRlbS50cyIsIi9zdHVkZW50cy1ob21lL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QixNQUFNQyxRQUFRLEdBQUcsRUFBRTtjQUVuQkQsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBRUMsRUFBVSxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNVLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7Z0JBRTVCLElBQUlFLFFBQVEsR0FBRyxJQUFJZCxLQUFBLENBQUFlLFFBQVEsQ0FBQztrQkFBRUg7Z0JBQUUsQ0FBRSxDQUFDO2dCQUVuQyxJQUFJLENBQUMsQ0FBQVQsUUFBUyxDQUFDYSxHQUFHLENBQUNKLEVBQUUsRUFBRUUsUUFBUSxDQUFDO2dCQUNoQ0wsUUFBUSxDQUFDUSxJQUFJLENBQUNILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUVGLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxRQUFRLENBQUM7Y0FFM0IsTUFBTVksZ0JBQWdCLEdBQUcsRUFBRTtjQUMzQmIsVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxFQUFFLEVBQUVVLEtBQUssS0FBSTtnQkFDdEMsTUFBTVIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBWCxRQUFTLENBQUNvQixHQUFHLENBQUNYLEVBQUUsQ0FBQztnQkFDdkNFLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDUixVQUFVLENBQUNILEtBQUssQ0FBQ08sRUFBRSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBVCxRQUFTLENBQUNhLEdBQUcsQ0FBQ0osRUFBRSxFQUFFRSxRQUFRLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsT0FBT0ssT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDO1lBQ3JDOztVQUNBRyxPQUFBLENBQUF2QixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNELElBQUF3QixTQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLFNBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsS0FBQSxHQUFBNUIsT0FBQTtVQVNPO1VBQVUsTUFBT2dCLFFBQVMsU0FBUVcsU0FBQSxDQUFBRSxJQUFlO1lBQ3ZEOzs7WUFHVUMsVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixNQUFNLENBQUM7WUFBQSxDQUNQOztZQVNELENBQUFDLFlBQWE7WUFDYixDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxJQUFJRixZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFHLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUFDLG9CQUFxQjtZQUNyQixJQUFJQSxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBRUEsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQUMsVUFBVztZQUNYQyxZQUFZO2NBQUU1QixFQUFFO2NBQUVrQixZQUFZO2NBQUVXO1lBQUksSUFBYSxFQUFFO2NBQ2xELEtBQUssQ0FBQztnQkFDTDdCLEVBQUU7Z0JBQ0Y4QixFQUFFLEVBQUUsVUFBVTtnQkFDZEMsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCO2dCQUNBQyxRQUFRLEVBQUVuQixTQUFBLENBQUFvQjtlQUNWLENBQUM7Y0FDRixJQUFJLENBQUNDLE9BQU8sQ0FBQ2hCLFlBQVksRUFBRVcsSUFBSSxDQUFDO1lBQ2pDO1lBRUEsTUFBTUssT0FBT0EsQ0FBQ2hCLFlBQVksRUFBRVcsSUFBSztjQUNoQyxJQUFJLENBQUMsQ0FBQVgsWUFBYSxHQUFHQSxZQUFZO1lBQ2xDO1lBQ0EsTUFBTWlCLElBQUlBLENBQUNDLEtBQUEsR0FBZ0QsRUFBRTtjQUM1RCxNQUFNLElBQUksQ0FBQzlCLE9BQU87Y0FFbEIsSUFBSSxDQUFDOEIsS0FBSyxDQUFDcEMsRUFBRSxFQUFFb0MsS0FBSyxDQUFDcEMsRUFBRSxHQUFHLElBQUksQ0FBQ0EsRUFBRTtjQUNqQ29DLEtBQUssQ0FBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtjQUV2QyxNQUFNO2dCQUFFbUIsTUFBTTtnQkFBRUMsS0FBSztnQkFBRVQ7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQ3ZELE1BQU0sSUFBSSxDQUFDaEMsR0FBRyxDQUFDeUIsSUFBSSxDQUFDVSxRQUFRLENBQUM7Y0FFN0IsSUFBSSxDQUFDLENBQUFwQixJQUFLLEdBQUdVLElBQUksQ0FBQ1YsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQUMsTUFBTyxHQUFHUyxJQUFJLENBQUNULE1BQU07Y0FDMUIsSUFBSSxDQUFDaUIsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZCQUE2QkYsS0FBSyxFQUFFLENBQUM7O2NBRXRELElBQUksQ0FBQyxDQUFBRyxPQUFRLEVBQUU7Y0FDZixPQUFPWixJQUFJO1lBQ1o7WUFFQSxDQUFBWSxPQUFRQyxDQUFBO2NBQ1AsSUFBSSxJQUFJLENBQUNDLFNBQVMsRUFBRWpCLFVBQVUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLENBQUFBLFVBQVcsR0FBR2tCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0YsU0FBUyxDQUFDakIsVUFBVSxDQUFDOztjQUV6RCxJQUFJLElBQUksQ0FBQ0csSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxDQUFBUixRQUFTLEdBQUcsSUFBSSxDQUFDUSxJQUFJOztZQUU1QjtZQUNBLE1BQU1pQixPQUFPQSxDQUFDO2NBQUVDLE1BQU07Y0FBRUM7WUFBSSxDQUFFO2NBQzdCLElBQUk7Z0JBQ0gsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDakIsUUFBUSxDQUFDYyxPQUFPLENBQUM7a0JBQUVDLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLENBQUEzQixRQUFTLEdBQUc0QixRQUFRLENBQUNwQixJQUFJLENBQUNSLFFBQVE7Z0JBQ3ZDLElBQUksQ0FBQyxDQUFBSyxVQUFXLENBQUN3QixTQUFTLEdBQUcsU0FBUztlQUN0QyxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRSxhQUFhQSxDQUFDO2NBQUVOLE1BQU07Y0FBRUM7WUFBSSxDQUFFO2NBQ25DLElBQUk7Z0JBQ0gsTUFBTW5CLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ0csUUFBUSxDQUFDYyxPQUFPLENBQUM7a0JBQUVqQixJQUFJLEVBQUVrQixNQUFNO2tCQUFFQztnQkFBSSxDQUFFLENBQUM7Z0JBRWhFLElBQUksQ0FBQzVDLEdBQUcsQ0FBQztrQkFBRXlCO2dCQUFJLENBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLENBQUFQLFFBQVMsR0FBR08sSUFBSSxDQUFDUCxRQUFRO2dCQUM5QixJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHTSxJQUFJLENBQUNOLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxDQUFBRSxvQkFBcUIsR0FBR0ksSUFBSSxDQUFDSixvQkFBb0I7ZUFDdEQsQ0FBQyxPQUFPMEIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU0vQyxHQUFHQSxDQUFDeUIsSUFBSTtjQUNiLE1BQU0sS0FBSyxDQUFDekIsR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2NBQ3JCLElBQUksQ0FBQyxDQUFBWSxPQUFRLEVBQUU7Y0FDZixJQUFJLElBQUksQ0FBQ2EsSUFBSSxFQUFFdEQsRUFBRSxFQUFFO2dCQUNsQixJQUFJLENBQUN1RCxlQUFlLEVBQUU7O2NBRXZCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU1ELGVBQWVBLENBQUE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQTVCLFVBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO2NBQzdDLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUcsSUFBSThCLGNBQWMsRUFBRTtjQUV2QyxNQUFNSCxJQUFJLEdBQUcsSUFBSXZDLEtBQUEsQ0FBQTJDLElBQUksQ0FBQztnQkFBRTFELEVBQUUsRUFBRSxJQUFJLENBQUNzRCxJQUFJLENBQUN0RDtjQUFFLENBQUUsQ0FBQztjQUMzQyxNQUFNc0QsSUFBSSxDQUFDSyxPQUFPLEVBQUU7Y0FDcEIsSUFBSSxDQUFDLENBQUFuQyxTQUFVLEdBQUc4QixJQUFJO2NBRXRCLElBQUksQ0FBQyxDQUFBM0IsVUFBVyxDQUFDaUMsT0FBTyxFQUFFO2NBQzFCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNqQzs7VUFDQWpELE9BQUEsQ0FBQVQsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlKRCxJQUFBMkQsSUFBQSxHQUFBM0UsT0FBQTtVQUdBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBOEUsU0FBQSxHQUFBOUUsT0FBQTtVQUVNLE1BQU84QyxnQkFBaUIsU0FBUS9DLE1BQUEsQ0FBQUksYUFBK0I7WUFDcEUsQ0FBQTRFLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBRVB2QyxZQUFZdUMsTUFBa0I7Y0FDN0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUosTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBQ0FoQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVyQyxNQUFNO2dCQUFFUjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGdCQUFnQnlCLEtBQUssQ0FBQ2xCLFlBQVksZUFBZWtCLEtBQUssQ0FBQ3BDLEVBQUUsRUFBRSxDQUFDO2NBRXpHLElBQUksQ0FBQ3FDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7Y0FHMUMsSUFBSUosS0FBSyxFQUFFdUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDL0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVRLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRURpQixPQUFPLEdBQUcsTUFBTVYsS0FBSyxJQUFHO2NBQ3ZCLElBQUlBLEtBQUssQ0FBQ1ksSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBT1osS0FBSyxDQUFDWSxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQ3RCLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDVyxNQUFNLENBQUM7O2NBRXJDLE9BQU8sSUFBSSxDQUFDOEIsTUFBTSxDQUFDekMsS0FBSyxDQUFDUCxJQUFJLENBQUM7WUFDL0IsQ0FBQztZQUVESCxVQUFVLEdBQUcsTUFBT1UsS0FBVSxJQUFJO2NBQ2pDLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVyQyxNQUFNO2dCQUFFUixJQUFJO2dCQUFFUztjQUFLLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNEIsR0FBSSxDQUFDWSxJQUFJLENBQUMsb0NBQW9DLEVBQUUxQyxLQUFLLENBQUM7Y0FFakcsSUFBSUUsS0FBSyxFQUFFO2dCQUNWLE1BQU0sSUFBSUUsS0FBSyxDQUFDLDZCQUE2QixDQUFDOztjQUcvQyxPQUFPO2dCQUFFSCxNQUFNO2dCQUFFUjtjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUVEa0QsT0FBTyxHQUFHLE1BQU8zQyxLQUFVLElBQUk7Y0FDOUIsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRXJDLE1BQU07Z0JBQUVSLElBQUk7Z0JBQUVTO2NBQUssQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE0QixHQUFJLENBQUNZLElBQUksQ0FBQyw4QkFBOEIsRUFBRTFDLEtBQUssQ0FBQztjQUUzRixJQUFJRSxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJRSxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRzFDLE9BQU87Z0JBQUVILE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRURnRCxNQUFNLEdBQUcsTUFBTXpDLEtBQUssSUFBRztjQUN0QixJQUFJO2dCQUNILE1BQU00QyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM5QyxLQUFLLENBQUM7Z0JBQy9DLE1BQU0rQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2dCQUMzQkosS0FBSyxDQUFDakYsT0FBTyxDQUFDc0YsSUFBSSxJQUFHO2tCQUNwQkYsSUFBSSxDQUFDRyxNQUFNLENBQUNELElBQUksRUFBRWpELEtBQUssQ0FBQ2lELElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUM7Z0JBRUYsTUFBTUUsR0FBRyxHQUFHLElBQUl0QixTQUFBLENBQUF1QixTQUFTLEVBQUU7Z0JBQzNCRCxHQUFHLENBQUNmLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQ3JDLE1BQU16QixRQUFRLEdBQUcsTUFBTXNDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDTixJQUFJLEVBQUUsR0FBR3BCLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLCtCQUErQixDQUFDO2dCQUNyRyxNQUFNbUIsSUFBSSxHQUFHLE1BQU16QyxRQUFRLENBQUN5QyxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQ0EsSUFBSSxDQUFDckQsTUFBTSxFQUFFO2tCQUNqQixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Z0JBRy9DLElBQUksQ0FBQ3FCLFlBQVksRUFBRTtnQkFDbkIsT0FBTzZCLElBQUksQ0FBQzdELElBQUk7ZUFDaEIsQ0FBQyxPQUFPc0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQ2EsQ0FBQyxDQUFDOztZQUVsQixDQUFDOztVQUNEdkMsT0FBQSxDQUFBcUIsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZELElBQUEvQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBNEIsS0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE4RSxTQUFBLEdBQUE5RSxPQUFBO1VBR0EsSUFBQXdHLE1BQUEsR0FBQXhHLE9BQUE7VUFDTztVQUFVLE1BQU95RyxVQUFXLFNBQVExRyxNQUFBLENBQUFJLGFBQXlCO1lBQ25FLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQLENBQUFuRSxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFDQSxDQUFBeUIsb0JBQXFCO1lBQ3JCLElBQUlBLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFDQSxDQUFBRixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBRCxRQUFTLEdBQVUsRUFBRTtZQUNyQixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUE0QixTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBMkMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsQ0FBQXZDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFwQyxZQUFhO1lBQ2IsQ0FBQVMsVUFBVztZQUNYQyxZQUFZO2NBQUVWO1lBQVksQ0FBeUM7Y0FDbEUsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFBLFlBQWEsR0FBR0EsWUFBWTtjQUNqQyxJQUFJLENBQUMsQ0FBQWdELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBcEMsSUFBSSxHQUFHLE1BQUFBLENBQU9uQyxFQUFFLEVBQUU4RixNQUFPLEtBQUk7Y0FDNUIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFekQsTUFBTTtrQkFBRVI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQ3RDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDLENBQ2pDL0QsR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQU8sWUFBYSxJQUFJbEIsRUFBRSxTQUFTLEVBQUU7a0JBQUU4RjtnQkFBTSxDQUFFLENBQUM7Z0JBRXBFLElBQUksQ0FBQ3pELE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztnQkFFeEQsSUFBSSxDQUFDLENBQUFsQixRQUFTLEdBQUdPLElBQUksQ0FBQ1AsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBQyxRQUFTLEdBQUdNLElBQUksQ0FBQ04sUUFBUTtnQkFDOUIsSUFBSSxDQUFDLENBQUEyQixTQUFVLEdBQUdyQixJQUFJLENBQUNxQixTQUFTO2dCQUNoQyxJQUFJLENBQUMsQ0FBQXpCLG9CQUFxQixHQUFHSSxJQUFJLENBQUNKLG9CQUFvQjtnQkFDdEQsSUFBSSxDQUFDLENBQUFvRSxXQUFZLEdBQUdoRSxJQUFJLENBQUNnRSxXQUFXO2dCQUNwQyxJQUFJLENBQUN0QyxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ3dDLE1BQU0sR0FBRyxJQUFJO2VBQ2xCLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVELE1BQU1JLGVBQWVBLENBQUE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQTVCLFVBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO2NBQzdDLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUcsSUFBSWdFLE1BQUEsQ0FBQWxDLGNBQWMsRUFBRTtjQUV2QyxNQUFNSCxJQUFJLEdBQUcsSUFBSXZDLEtBQUEsQ0FBQTJDLElBQUksQ0FBQztnQkFBRTFELEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTZGLFdBQVksQ0FBQ3ZDLElBQUksQ0FBQ3REO2NBQUUsQ0FBRSxDQUFDO2NBQ3hELE1BQU1zRCxJQUFJLENBQUNLLE9BQU8sRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQUwsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBM0IsVUFBVyxDQUFDaUMsT0FBTyxFQUFFO2NBQzFCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNqQztZQUVBZixPQUFPLEdBQUcsTUFBTVYsS0FBSyxJQUFHO2NBQ3ZCLElBQUk7Z0JBQ0gsTUFBTTRDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQzlDLEtBQUssQ0FBQztnQkFDL0MsTUFBTStDLElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Z0JBQzNCSixLQUFLLENBQUNqRixPQUFPLENBQUNzRixJQUFJLElBQUc7a0JBQ3BCRixJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFakQsS0FBSyxDQUFDaUQsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQztnQkFFRkYsSUFBSSxDQUFDRyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBcEUsWUFBYSxDQUFDO2dCQUUvQyxNQUFNcUUsR0FBRyxHQUFHLElBQUl0QixTQUFBLENBQUF1QixTQUFTLEVBQUU7Z0JBQzNCRCxHQUFHLENBQUNmLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQ3JDLE1BQU16QixRQUFRLEdBQUcsTUFBTXNDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDTixJQUFJLEVBQUUsR0FBR3BCLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLHFCQUFxQixDQUFDO2dCQUMzRixNQUFNbUIsSUFBSSxHQUFHLE1BQU16QyxRQUFRLENBQUN5QyxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQ0EsSUFBSSxDQUFDckQsTUFBTSxFQUFFO2tCQUNqQixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Z0JBRS9DLElBQUksQ0FBQyxDQUFBbEIsUUFBUyxHQUFHb0UsSUFBSSxDQUFDN0QsSUFBSSxDQUFDUCxRQUFRO2dCQUNuQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHbUUsSUFBSSxDQUFDN0QsSUFBSSxDQUFDTixRQUFRO2dCQUNuQyxJQUFJLENBQUMsQ0FBQUUsb0JBQXFCLEdBQUdpRSxJQUFJLENBQUM3RCxJQUFJLENBQUNKLG9CQUFvQjtnQkFDM0QsSUFBSSxDQUFDb0MsWUFBWSxFQUFFO2dCQUNuQixPQUFPNkIsSUFBSSxDQUFDN0QsSUFBSTtlQUNoQixDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRDZDLGFBQWEsR0FBRyxNQUFNNUQsS0FBSyxJQUFHO2NBQzdCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU16QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWlCLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2tCQUMvRCxHQUFHMUMsS0FBSztrQkFDUmxCLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQUE7aUJBQ25CLENBQUM7Z0JBRUYsSUFBSSxDQUFDK0IsUUFBUSxDQUFDWixNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxDQUFBVSxTQUFVLEdBQUdELFFBQVEsQ0FBQ3BCLElBQUksQ0FBQ3FCLFNBQVM7Z0JBQ3pDLElBQUksQ0FBQ00sT0FBTyxDQUFDLFFBQVEsQ0FBQztlQUN0QixDQUFDLE9BQU9MLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQzs7VUFDRHZDLE9BQUEsQ0FBQWdGLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SEQsSUFBQTFHLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUVPO1VBQVUsTUFBTzhHLGFBQWMsU0FBUS9HLE1BQUEsQ0FBQUksYUFBNkI7WUFDMUUsQ0FBQTRFLEdBQUk7WUFDTWpELFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7WUFJekNXLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXNDLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUVBLE1BQU1wQyxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRXJDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVUO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsZ0JBQWdCeUIsS0FBSyxDQUFDcEMsRUFBRSxPQUFPLENBQUM7Y0FFcEYsSUFBSSxDQUFDcUMsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDBCQUEwQkYsS0FBSyxFQUFFLENBQUM7O2NBR25ELE9BQU9ULElBQUk7WUFDWjs7VUFDQWpCLE9BQUEsQ0FBQXFGLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkQsSUFBQS9HLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLE9BQUEsR0FBQTVFLE9BQUE7VUFDTSxNQUFPK0csU0FBVSxTQUFRaEgsTUFBQSxDQUFBSSxhQUF3QjtZQUN0RCxDQUFBNEUsR0FBSTtZQUNKdEMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBc0MsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEOztVQUNBM0QsT0FBQSxDQUFBc0YsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7OztVQ1REOztVQUVBakIsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUF2RixTQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUVBLElBQUFrSCxXQUFBLEdBQUFsSCxPQUFBO1VBU087VUFBVSxNQUFPbUgsVUFBVyxTQUFReEYsU0FBQSxDQUFBRSxJQUFpQjtZQUNqREMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBVS9ELENBQUFuQixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBNEIsVUFBVztZQUNYLElBQUk2RSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxHQUFHeEMsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN5RCxPQUFPLHVCQUF1QixJQUFJLENBQUN4RyxFQUFFLEVBQUU7WUFDaEU7WUFFQTtZQUNBLENBQUFvQixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBcUYsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQTdHLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBZ0MsWUFBWTtjQUFFNUIsRUFBRSxHQUFHMEcsU0FBUztjQUFFN0U7WUFBSSxDQUFFLEdBQUcsRUFBRTtjQUN4QyxLQUFLLENBQUM7Z0JBQUU3QixFQUFFO2dCQUFFOEIsRUFBRSxFQUFFLFVBQVU7Z0JBQUVDLFNBQVMsRUFBRSxhQUFhO2dCQUFFQyxRQUFRLEVBQUVuQixTQUFBLENBQUE4RjtjQUFrQixDQUFFLENBQUM7Y0FDckYsSUFBSSxDQUFDekUsT0FBTyxDQUFDTCxJQUFJLENBQUM7WUFDbkI7WUFFQSxNQUFNSyxPQUFPQSxDQUFDTCxJQUFJO2NBQ2pCLE1BQU0sSUFBSSxDQUFDdkIsT0FBTztZQUNuQjtZQUNBc0csU0FBU0EsQ0FBQ3pDLE1BQXNCO2NBQy9CLElBQUksQ0FBQyxDQUFBL0MsTUFBTyxHQUFHK0MsTUFBTTtZQUN0QjtZQUVBLE1BQU1oQyxJQUFJQSxDQUFDQyxLQUFBLEdBQTBDLEVBQUU7Y0FDdEQsTUFBTSxJQUFJLENBQUM5QixPQUFPO2NBQ2xCLElBQUksQ0FBQzhCLEtBQUssQ0FBQ3BDLEVBQUUsRUFBRW9DLEtBQUssQ0FBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7Y0FFakMsTUFBTTtnQkFBRXFDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVUO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDTSxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUV2RCxJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkJGLEtBQUssRUFBRSxDQUFDOztjQUd0RCxJQUFJLENBQUMsQ0FBQW1FLFFBQVMsR0FBRzVFLElBQUksQ0FBQzRFLFFBQVE7Y0FDOUIsSUFBSSxDQUFDLENBQUFyRixNQUFPLEdBQUdTLElBQUksQ0FBQ1QsTUFBTTtjQUUxQixJQUFJLENBQUMsQ0FBQXhCLFVBQVcsR0FBRyxJQUFJeUcsV0FBQSxDQUFBaEgsVUFBVSxFQUFFO2NBQ25DLE1BQU0sSUFBSSxDQUFDLENBQUFPLFVBQVcsQ0FBQ0QsT0FBTyxDQUFDa0MsSUFBSSxDQUFDakMsVUFBVSxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBRSxLQUFNLEdBQUcrQixJQUFJLENBQUNqQyxVQUFVLENBQUNFLEtBQUs7Y0FFbkM7Y0FFQSxPQUFPK0IsSUFBSTtZQUNaO1lBRUEsTUFBTWdGLE1BQU1BLENBQUE7Y0FDWCxNQUFNekUsS0FBSyxHQUFHO2dCQUFFcEMsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBQzdCLE1BQU02QixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNHLFFBQVEsQ0FBQzZFLE1BQU0sQ0FBQ3pFLEtBQUssQ0FBQztjQUM5QyxJQUFJLENBQUMsQ0FBQXFFLFFBQVMsR0FBRzVFLElBQUksQ0FBQzRFLFFBQVE7Y0FDOUIsSUFBSSxDQUFDLENBQUE3RyxVQUFXLENBQUNELE9BQU8sQ0FBQ2tDLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQztjQUV6QyxPQUFPLElBQUksQ0FBQyxDQUFBNkcsUUFBUztZQUN0Qjs7VUFDQTdGLE9BQUEsQ0FBQTBGLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRkQsSUFBQXhDLElBQUEsR0FBQTNFLE9BQUE7VUFHQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU0sTUFBT3dILGtCQUFtQixTQUFRekgsTUFBQSxDQUFBSSxhQUFpQztZQUN4RSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUHZDLFlBQVl1QyxNQUFrQjtjQUM3QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLElBQUksQ0FBQyxDQUFBSixNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFDQWhDLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTTNCLE1BQU0sR0FBd0IsRUFBRTtjQUN0QyxNQUFNO2dCQUFFVixNQUFNO2dCQUFFUjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGdCQUFnQnlCLEtBQUssQ0FBQ3BDLEVBQUUsV0FBVyxFQUFFb0MsS0FBSyxDQUFDO2NBRXhGLElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUd2QyxJQUFJSixLQUFLLEVBQUV1QyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQVIsTUFBTyxDQUFDUyxXQUFXLENBQUMvQyxJQUFJLENBQUM7Y0FFekQsT0FBTztnQkFBRVEsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRCxNQUFNZ0YsTUFBTUEsQ0FBQ3pFLEtBQUEsR0FBeUIsRUFBRTtjQUN2QyxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUMzQyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFpQixHQUFJLENBQUNZLElBQUksQ0FBQyxnQkFBZ0IxQyxLQUFLLENBQUNwQyxFQUFFLFNBQVMsRUFBRW9DLEtBQUssQ0FBQztjQUMvRSxJQUFJLENBQUNhLFFBQVEsQ0FBQ1osTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQywrQkFBK0JTLFFBQVEsQ0FBQ1gsS0FBSyxFQUFFLENBQUM7O2NBR2pFLE9BQU9XLFFBQVEsQ0FBQ3BCLElBQUk7WUFDckI7O1VBQ0FqQixPQUFBLENBQUErRixrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0QsSUFBQTdGLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBMEIsU0FBQSxHQUFBMUIsT0FBQTtVQVdPO1VBQVUsTUFBTzJILFNBQVUsU0FBUWhHLFNBQUEsQ0FBQUUsSUFBZTtZQUM5Q0MsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7WUFRaEQsQ0FBQThGLFdBQVksR0FBRyxJQUFJdkgsR0FBRyxFQUFFO1lBQ3hCLElBQUl1SCxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ3JILE1BQU0sRUFBRSxDQUFDO1lBQ3ZDO1lBQ0FrQyxZQUFZO2NBQUU1QixFQUFFLEdBQUcwRztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFlBQVk7Z0JBQUVDLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQW1HO2NBQWlCLENBQUUsQ0FBQztZQUNwRjtZQUVBLE1BQU03RSxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsTUFBTSxJQUFJLENBQUM5QixPQUFPO2NBRWxCLE1BQU07Z0JBQUUrQixNQUFNO2dCQUFFQyxLQUFLO2dCQUFFVDtjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDdkQsTUFBTXZDLFFBQVEsR0FBRyxFQUFFO2NBQ25CZ0MsSUFBSSxDQUFDa0YsV0FBVyxDQUFDaEgsT0FBTyxDQUFDa0gsVUFBVSxJQUFHO2dCQUNyQyxJQUFJLENBQUMsQ0FBQUYsV0FBWSxDQUFDM0csR0FBRyxDQUFDNkcsVUFBVSxDQUFDakgsRUFBRSxFQUFFaUgsVUFBVSxDQUFDO2NBQ2pELENBQUMsQ0FBQztjQUNGLE1BQU0xRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsUUFBUSxDQUFDO2NBQzNCLElBQUksQ0FBQ08sR0FBRyxDQUFDeUIsSUFBSSxDQUFDO2NBRWQsSUFBSSxDQUFDcUYsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDN0UsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDBCQUEwQkYsS0FBSyxFQUFFLENBQUM7O2NBR25ELE9BQU9ULElBQUk7WUFDWjs7VUFDQWpCLE9BQUEsQ0FBQWtHLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREQsSUFBQWhELElBQUEsR0FBQTNFLE9BQUE7VUFJQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU0sTUFBTzZILGlCQUFrQixTQUFROUgsTUFBQSxDQUFBSSxhQUFnQztZQUN0RSxDQUFBNEUsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFDUCxDQUFBUSxRQUFTO1lBQ1QvQyxZQUFZdUMsTUFBaUI7Y0FDNUIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUosTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBQ0FoQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVyQyxNQUFNO2dCQUFFUjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLGVBQWV5QixLQUFLLENBQUNwQyxFQUFFLEVBQUUsQ0FBQztjQUV2RTtjQUNBO2NBQ0E7Y0FFQSxJQUFJb0MsS0FBSyxFQUFFdUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ1MsV0FBVyxDQUFDL0MsSUFBSSxDQUFDO2NBRXpELE9BQU87Z0JBQUVRLE1BQU07Z0JBQUVSO2NBQUksQ0FBRTtZQUN4QixDQUFDOztVQUNEakIsT0FBQSxDQUFBb0csaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFsRyxTQUFBLEdBQUEzQixPQUFBO1VBT087VUFBVSxNQUFPZ0ksTUFBTyxTQUFRckcsU0FBQSxDQUFBRSxJQUFlO1lBQzNDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBVXpDVyxZQUFZO2NBQUU1QixFQUFFLEdBQUcwRztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUU4QixFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFVBQVU7Z0JBQUVDLFFBQVEsRUFBRW9GO2NBQWdCLENBQUUsQ0FBQztZQUNqRjtZQUVBLE1BQU1qRixJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsTUFBTTtnQkFBRUMsTUFBTTtnQkFBRUMsS0FBSztnQkFBRVQ7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRXZELElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDBCQUEwQkYsS0FBSyxFQUFFLENBQUM7O2NBR25ELE9BQU9ULElBQUk7WUFDWjs7VUFDQWpCLE9BQUEsQ0FBQXVHLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkQsSUFBQXJHLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9rSSxlQUFnQixTQUFRdkcsU0FBQSxDQUFBd0csVUFBVTtZQUN6RDtZQUNBMUYsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUcsU0FBUyxFQUFFLFNBQVM7Z0JBQUVELEVBQUUsRUFBRSxVQUFVO2dCQUFFeUYsSUFBSSxFQUFFbkksS0FBQSxDQUFBb0k7Y0FBYyxDQUFFLENBQUM7Y0FFckVDLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUk7WUFDcEI7O1VBQ0E5RyxPQUFBLENBQUF5RyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQXZELElBQUEsR0FBQTNFLE9BQUE7VUFHQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBRU0sTUFBT3dJLE9BQVEsU0FBUXpJLE1BQUEsQ0FBQUksYUFBdUI7WUFJbkQsQ0FBQTRFLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBQ1BsRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDL0MsQ0FBQTJHLElBQUssR0FBRyxFQUFFO1lBQ1ZoRyxZQUFZb0IsSUFBSSxFQUFFbUIsTUFBTSxFQUFFeUQsSUFBSTtjQUM3QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBekQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDdkIsSUFBSSxHQUFHQSxJQUFJO1lBQ2pCO1lBRUEsTUFBTTZFLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBM0QsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNO2tCQUFFckMsTUFBTTtrQkFBRVI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUNZLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBOEMsSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBekQsTUFBTyxDQUFDbkUsRUFBRSxhQUFhLElBQUksQ0FBQ2dELElBQUksRUFBRSxDQUFDO2dCQUN4RyxJQUFJLENBQUNYLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7Z0JBRXJDLElBQUksQ0FBQ3BDLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztnQkFDZDtlQUNBLENBQUMsT0FBT3NCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUMsaUJBQWlCLEVBQUVhLENBQUMsQ0FBQzs7WUFFckM7WUFFQSxNQUFNaEIsSUFBSUEsQ0FBQzBGLE1BQWdCO2NBQzFCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQzlILEVBQUUsSUFBSTZILE1BQU0sRUFBRTtrQkFDdkIsTUFBTSxJQUFJLENBQUNBLE1BQU0sRUFBRTtrQkFDbkIsT0FBTyxJQUFJOztnQkFFWixJQUFJLENBQUMsSUFBSSxDQUFDN0gsRUFBRSxFQUFFLE9BQU8sS0FBSztnQkFDMUIsTUFBTTRILElBQUksR0FBRyxxQkFBcUIsSUFBSSxDQUFDNUgsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsQ0FBQWtFLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFDM0MsTUFBTTtrQkFBRXJDLE1BQU07a0JBQUVSO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcUMsR0FBSSxDQUFDdkQsR0FBRyxDQUFDaUgsSUFBSSxDQUFDO2dCQUVsRCxJQUFJLENBQUN2RixNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7O2dCQUdyQyxJQUFJLENBQUNwQyxHQUFHLENBQUN5QixJQUFJLENBQUM7ZUFDZCxDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRWEsQ0FBQyxDQUFDO2VBQ2pDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMkUsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE9BQU8sSUFBSTs7WUFFYjs7VUFDQWxILE9BQUEsQ0FBQStHLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7VUMvREQ7O1VBRUExQyxNQUFBLENBQUFrQixjQUFBLENBQUF2RixPQUFBO1lBQ0F3RixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWxILE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUE0SSxRQUFBLEdBQUE1SSxPQUFBO1VBU00sTUFBTzZJLFFBQVMsU0FBUTlJLE1BQUEsQ0FBQUksYUFBd0I7WUFDckQsQ0FBQUcsS0FBTSxHQUFHLElBQUlELEdBQUcsRUFBRTtZQUNsQixDQUFBMkUsTUFBTztZQUVQLENBQUF5RCxJQUFLO1lBQ0xoRyxZQUFZdUMsTUFBaUMsRUFBRTVFLFFBQUEsR0FBcUIsRUFBRSxFQUFFcUksSUFBWTtjQUNuRixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXpELE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQXlELElBQUssR0FBR0EsSUFBSTtjQUNqQnJJLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDaUQsSUFBSSxJQUFHO2dCQUN2QixNQUFNaUYsT0FBTyxHQUFZLElBQUlGLFFBQUEsQ0FBQUosT0FBTyxDQUFDM0UsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBbUIsTUFBTyxFQUFFeUQsSUFBSSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsQ0FBQW5JLEtBQU0sQ0FBQ1csR0FBRyxDQUFDNEMsSUFBSSxFQUFFaUYsT0FBTyxDQUFDO2NBQy9CLENBQUMsQ0FBQztZQUNIO1lBQ0EsSUFBSXhJLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFrQixHQUFHQSxDQUFDcUMsSUFBSTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUF2RCxLQUFNLENBQUNrQixHQUFHLENBQUNxQyxJQUFJLENBQUM7WUFDN0I7WUFFQS9DLEdBQUdBLENBQUMrQyxJQUFJO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQXZELEtBQU0sQ0FBQ2tCLEdBQUcsQ0FBQ3FDLElBQUksQ0FBQyxFQUFFb0QsS0FBSztZQUNwQztZQUNBaEcsR0FBR0EsQ0FBQ2IsUUFBUTtjQUNYLElBQUksQ0FBQ0EsUUFBUSxFQUFFO2dCQUNkNkQsT0FBTyxDQUFDOEUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFBL0QsTUFBTyxDQUFDZ0UsS0FBSyxFQUFFNUksUUFBUSxDQUFDO2dCQUNuRTs7Y0FFRDBGLE1BQU0sQ0FBQ21ELElBQUksQ0FBQzdJLFFBQVEsQ0FBQyxDQUFDUSxPQUFPLENBQUNpRCxJQUFJLElBQUc7Z0JBQ3BDLE1BQU11RSxJQUFJLEdBQUdoSSxRQUFRLENBQUN5RCxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxDQUFBdkQsS0FBTSxDQUFDa0IsR0FBRyxDQUFDcUMsSUFBSSxDQUFDLENBQUM1QyxHQUFHLENBQUNtSCxJQUFJLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQXBGLElBQUlBLENBQUM4RixPQUFPO2NBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBeEksS0FBTSxDQUFDUSxHQUFHLENBQUNnSSxPQUFPLENBQUMsRUFBRTtjQUMvQixNQUFNVixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUE5SCxLQUFNLENBQUNrQixHQUFHLENBQUNzSCxPQUFPLENBQUM7Y0FDckMsT0FBT1YsSUFBSSxDQUFDcEYsSUFBSSxFQUFFO1lBQ25COztVQUNBdkIsT0FBQSxDQUFBb0gsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7OztVQ3JERDs7VUFFQS9DLE1BQUEsQ0FBQWtCLGNBQUEsQ0FBQXZGLE9BQUE7WUFDQXdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBbEgsTUFBQSxHQUFBQyxPQUFBO1VBS00sTUFBT2tKLG1CQUFvQixTQUFRbkosTUFBQSxDQUFBSSxhQUFtQztZQUszRSxDQUFBNkUsTUFBTztZQUNQbEQsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDcENXLFlBQVlxRyxPQUE2QixFQUFFOUQsTUFBaUM7Y0FDM0UsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJOEQsT0FBTyxDQUFDakYsSUFBSSxLQUFLLFlBQVksRUFBRWlGLE9BQU8sQ0FBQzdCLEtBQUssR0FBR3hELElBQUksQ0FBQ0MsS0FBSyxDQUFDb0YsT0FBTyxDQUFDN0IsS0FBSyxDQUFDO2NBQzVFLElBQUksQ0FBQ2hHLEdBQUcsQ0FBQzZILE9BQU8sQ0FBQztZQUNsQjs7VUFDQXJILE9BQUEsQ0FBQXlILG1CQUFBLEdBQUFBLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBbkosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRJLFFBQUEsR0FBQTVJLE9BQUE7VUFNTSxNQUFPbUosWUFBYSxTQUFRcEosTUFBQSxDQUFBSSxhQUE0QjtZQUM3RCxDQUFBNkUsTUFBTztZQUNQLENBQUFELEdBQUk7WUFFSixDQUFBekUsS0FBTSxHQUFHLElBQUlELEdBQUcsRUFBRTtZQUNsQixJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBbUMsWUFBWXVDLE1BQWlDO2NBQzVDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUVBLE1BQU01RCxHQUFHQSxDQUFDcUMsSUFBWTtjQUNyQixPQUFPLElBQUksQ0FBQyxDQUFBdkQsS0FBTSxDQUFDa0IsR0FBRyxDQUFDcUMsSUFBSSxDQUFDO1lBQzdCO1lBRUEsTUFBTWIsSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUM3QixPQUFPO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE2RCxNQUFPLENBQUNuRSxFQUFFLEVBQUU7a0JBQ3JCLE1BQU0sSUFBSXdDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBR3JELElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2dCQUMzQyxNQUFNO2tCQUFFckMsTUFBTTtrQkFBRVI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQUN2RCxHQUFHLENBQUMsd0JBQXdCLElBQUksQ0FBQyxDQUFBd0QsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Z0JBRXZGLElBQUksQ0FBQ3FDLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7Z0JBRzFDLE1BQU1qRCxRQUFRLEdBQTJCMEYsTUFBTSxDQUFDdkYsTUFBTSxDQUFDbUMsSUFBSSxDQUFDdEMsUUFBUSxDQUFDO2dCQUVyRUEsUUFBUSxDQUFDUSxPQUFPLENBQUNrSSxPQUFPLElBQUc7a0JBQzFCLE1BQU0vSCxRQUFRLEdBQUcsSUFBSTZILFFBQUEsQ0FBQU0sbUJBQW1CLENBQUNKLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTlELE1BQU8sQ0FBQztrQkFDL0QsSUFBSSxDQUFDLENBQUExRSxLQUFNLENBQUNXLEdBQUcsQ0FBQzZILE9BQU8sQ0FBQ2pGLElBQUksRUFBRTlDLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDO2VBQ0YsQ0FBQyxPQUFPaUQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQyw0QkFBNEIsRUFBRWEsQ0FBQyxDQUFDOztZQUVoRDs7VUFDQXZDLE9BQUEsQ0FBQTBILFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7VUZyREQ7O1VBRUFyRCxNQUFBLENBQUFrQixjQUFBLENBQUF2RixPQUFBO1lBQ0F3RixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VHSkEsSUFBQWxILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUlBLElBQUFvSixTQUFBLEdBQUFwSixPQUFBO1VBRUEsSUFBQXFKLGFBQUEsR0FBQXJKLE9BQUE7VUFHTztVQUFXLE1BQU9zSixXQUFZLFNBQVF2SixNQUFBLENBQUFJLGFBQXdCO1lBSXBFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQXdFLE1BQU87WUFDUCxDQUFBQyxRQUFTLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO1lBQzlFMUgsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFDdkMsQ0FBQTJILFlBQWE7WUFDYixJQUFJQyxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxPQUFPO1lBQ2Y7WUFFQSxDQUFBQyxpQkFBa0I7WUFDbEIsSUFBSUEsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGlCQUFrQjtZQUMvQjtZQUVBLENBQUF2SixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBTyxLQUFNO1lBQ04sQ0FBQWlHLE1BQU87WUFDUCxJQUFJakcsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQThCLFlBQVlDLElBQUksRUFBRTZHLE1BQXNCLEVBQUU1SSxLQUFLLEdBQUcsQ0FBQztjQUNsRCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQTRJLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQTVJLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVAsUUFBUyxHQUFHLElBQUlnSixTQUFBLENBQUFQLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFXLFFBQVMsRUFBRSxnQkFBZ0IsQ0FBQztjQUNyRSxJQUFJLENBQUN2SSxHQUFHLENBQUN5QixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUMsQ0FBQXFDLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQXVFLGlCQUFrQixHQUFHLElBQUlOLGFBQUEsQ0FBQUYsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNqRDtZQUVBLE1BQU1uRyxJQUFJQSxDQUFDQyxLQUFBLEdBQStCLEVBQUU7Y0FDM0MsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBMkQsTUFBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMrQixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRWlCO2dCQUFPLENBQUUsR0FBRzNHLEtBQUs7Z0JBRXpCLElBQUksSUFBSSxDQUFDZ0UsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztnQkFFM0MsTUFBTXpCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBaUIsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUErSCxNQUFPLENBQUMxSSxFQUFFLFdBQVcsSUFBSSxDQUFDQSxFQUFFLEVBQUUsQ0FBQztnQkFDckYsSUFBSSxDQUFDaUQsUUFBUSxDQUFDWixNQUFNLEVBQUU7a0JBQ3JCLE1BQU0sSUFBSUcsS0FBSyxDQUFDUyxRQUFRLENBQUMrRixPQUFPLENBQUM7O2dCQUVsQyxJQUFJLENBQUMvRixRQUFRLENBQUNwQixJQUFJLEVBQUU7Z0JBQ3BCLE1BQU1uQyxNQUFNLEdBQUc7a0JBQUUsR0FBR3VELFFBQVEsQ0FBQ3BCO2dCQUFJLENBQUU7Z0JBRW5DLElBQUksQ0FBQ3RDLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDNkMsUUFBUSxDQUFDcEIsSUFBSSxDQUFDdEMsUUFBUSxDQUFDO2dCQUN6QyxPQUFPRyxNQUFNLENBQUNILFFBQVE7Z0JBRXRCLElBQUksQ0FBQ2EsR0FBRyxDQUFDVixNQUFNLENBQUM7Z0JBQ2hCLElBQUlxSixPQUFPLEVBQUU7a0JBQ1osTUFBTXhCLElBQUksR0FBWSxJQUFJLENBQUNoSSxRQUFRLENBQUNFLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFTLENBQUM7a0JBQ3hELE1BQU00RyxJQUFJLENBQUNwRixJQUFJLEVBQUU7O2dCQUVsQixJQUFJLENBQUMsQ0FBQTRELE1BQU8sR0FBRyxJQUFJO2VBQ25CLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQzJFLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUNBLE1BQU1tQixlQUFlQSxDQUFDQyxJQUFZO2NBQ2pDLElBQUk7Z0JBQ0gsTUFBTWpCLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMUksUUFBUyxDQUFDb0IsR0FBRyxDQUFDdUksSUFBSSxDQUFDO2dCQUM5QyxNQUFNakIsT0FBTyxDQUFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEIsT0FBTzhGLE9BQU87ZUFDZCxDQUFDLE9BQU85RSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU91RCxTQUFTOztZQUVsQjtZQUVBdEcsR0FBR0EsQ0FBQ3lCLElBQUk7Y0FDUCxJQUFJa0IsTUFBTSxHQUFHO2dCQUFFLEdBQUdsQjtjQUFJLENBQUU7Y0FDeEIsSUFBSUEsSUFBSSxDQUFDdEMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDeUIsSUFBSSxDQUFDdEMsUUFBUSxDQUFDO2dCQUNoQyxPQUFPd0QsTUFBTSxDQUFDeEQsUUFBUTs7Y0FHdkIsS0FBSyxDQUFDYSxHQUFHLENBQUMyQyxNQUFNLENBQUM7WUFDbEI7O1VBQ0FuQyxPQUFBLENBQUE2SCxXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7O1VMcEdEOztVQUVBeEQsTUFBQSxDQUFBa0IsY0FBQSxDQUFBdkYsT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVTUpBLElBQUFsSCxNQUFBLEdBQUFDLE9BQUE7VUFJQSxJQUFBNEIsS0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUtNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUEwQjtZQUN6RCxDQUFBRyxLQUFNLEdBQUcsSUFBSUQsR0FBRyxFQUFFO1lBQ2xCLENBQUFrSixNQUFPO1lBQ1AsQ0FBQVMsV0FBWTtZQUNaLENBQUFqRixHQUFJO1lBQ0p0QyxZQUFZOEcsTUFBYztjQUN6QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXhFLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQW1FLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBLElBQUlqSixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFDakM7WUFFQSxJQUFJMEosR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUEzSixLQUFNO1lBQ25CO1lBRUE0SixHQUFHQSxDQUFDQyxNQUFNO2NBQ1RBLE1BQU0sQ0FBQ3ZKLE9BQU8sQ0FBQyxDQUFDd0osS0FBSyxFQUFFekosS0FBSyxLQUFJO2dCQUMvQixNQUFNSSxRQUFRLEdBQUcsSUFBSXNKLEtBQUssQ0FBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBYixNQUFPLEVBQUU1SSxLQUFLLENBQUM7Z0JBQ3RELE1BQU0ySixHQUFHLEdBQUdGLEtBQUssQ0FBQ3ZKLEVBQUUsSUFBSXVKLEtBQUssQ0FBQ3BCLEtBQUs7Z0JBQ25DLElBQUksQ0FBQyxDQUFBMUksS0FBTSxDQUFDVyxHQUFHLENBQUNxSixHQUFHLEVBQUV2SixRQUFRLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNUyxHQUFHQSxDQUFDcUMsSUFBSTtjQUNiLE9BQU8sSUFBSSxDQUFDdkQsS0FBSyxDQUFDaUssSUFBSSxDQUFDbkMsSUFBSSxJQUFJQSxJQUFJLENBQUN2RSxJQUFJLEtBQUtBLElBQUksQ0FBQztjQUNsRCxPQUFPLElBQUksQ0FBQyxDQUFBdkQsS0FBTSxDQUFDa0IsR0FBRyxDQUFDcUMsSUFBSSxDQUFDO1lBQzdCO1lBRUEsTUFBTTJHLFNBQVNBLENBQUE7Y0FDZCxJQUFJO2dCQUNILElBQUksSUFBSSxDQUFDLENBQUFSLFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2dCQUMvQyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUlwSSxLQUFBLENBQUEwQyxjQUFjLEVBQUU7Z0JBQ3hDLE1BQU04RixLQUFLLEdBQUcsSUFBSSxDQUFDOUosS0FBSyxDQUFDLENBQUMsQ0FBVTtnQkFDcEMsTUFBTThKLEtBQUssQ0FBQ3BILElBQUksQ0FBQztrQkFBRTRHLE9BQU8sRUFBRTtnQkFBSSxDQUFFLENBQUM7ZUFDbkMsQ0FBQyxPQUFPNUYsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNkLEtBQUssQ0FBQywyQkFBMkIsRUFBRWEsQ0FBQyxDQUFDOztZQUUvQztZQUVBLE1BQU15RyxRQUFRQSxDQUFDQyxtQkFBbUI7Y0FDakMsSUFBSSxDQUFDLENBQUEzRixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Y0FFM0MsTUFBTXpCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBaUIsR0FBSSxDQUFDdkQsR0FBRyxDQUFDLHNCQUFzQixFQUFFO2dCQUM1RG1KLG9CQUFvQixFQUFFRCxtQkFBbUI7Z0JBQ3pDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFyQixNQUFPLENBQUNxQjtlQUN2QixDQUFDO2NBQ0YsSUFBSSxDQUFDOUcsUUFBUSxDQUFDWixNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUV4QyxPQUFPUyxRQUFRLENBQUNwQixJQUFJLENBQUN5SCxNQUFNO1lBQzVCOztVQUNBMUksT0FBQSxDQUFBdkIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFRCxJQUFBMkssV0FBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW9KLFNBQUEsR0FBQXBKLE9BQUE7VUFFQSxJQUFBcUosYUFBQSxHQUFBckosT0FBQTtVQUNBLElBQUEyQixTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTBCLFNBQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBOEssZ0JBQUEsR0FBQTlLLE9BQUE7VUFFQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQStLLEtBQUEsR0FBQS9LLE9BQUE7VUFVTyxXQUhQOzs7VUFHaUIsTUFBT3FJLGNBQWUsU0FBUTFHLFNBQUEsQ0FBQUUsSUFBYTtZQUNqREMsVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixXQUFXLEVBQ1g7Y0FDQ2lJLElBQUksRUFBRSxZQUFZO2NBQ2xCbEcsSUFBSSxFQUFFO2FBQ04sRUFDRCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDYixNQUFNLEVBQ04sU0FBUyxDQUNUO1lBRUQsSUFBSTZGLEVBQUVBLENBQUE7Y0FDTCxPQUFPLFFBQVE7WUFDaEI7WUFDQSxDQUFBdEosUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUssVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQWtKLGlCQUFrQjtZQUNsQixJQUFJQSxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsaUJBQWtCO1lBQy9CO1lBRUEsQ0FBQUgsUUFBUyxHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1lBRWxFLENBQUF3QixNQUFPO1lBQ1AsQ0FBQUMsV0FBWSxHQUF5QixJQUFJNUssR0FBRyxFQUFFO1lBRTlDLElBQUk0SyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFwSSxRQUFTO1lBRVQsQ0FBQWtDLEdBQUk7WUFFSixDQUFBMEUsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQWpFLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBL0MsWUFBWTtjQUFFNUIsRUFBRSxHQUFHMEc7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQztjQUNBLEtBQUssQ0FBQztnQkFBRTFHLEVBQUU7Z0JBQUVxSyxPQUFPLEVBQUUsS0FBSztnQkFBRXJJLFFBQVEsRUFBRW5CLFNBQUEsQ0FBQXlKO2NBQWMsQ0FBRSxDQUFDO2NBQ3ZELElBQUksQ0FBQ0MsVUFBVSxFQUFFO2NBQ2pCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQWpMLFFBQVMsR0FBRyxJQUFJZ0osU0FBQSxDQUFBUCxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBVyxRQUFTLEVBQUUsU0FBUyxDQUFDO2NBQzlELElBQUksQ0FBQyxDQUFBL0ksVUFBVyxHQUFHLElBQUlvSyxXQUFBLENBQUEzSyxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBNkUsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLElBQUksQ0FBQyxDQUFBdUUsaUJBQWtCLEdBQUcsSUFBSU4sYUFBQSxDQUFBRixZQUFZLENBQUMsSUFBSSxDQUFDO2NBQ2hELElBQUksQ0FBQyxDQUFBM0QsUUFBUyxHQUFHLElBQUlzRixnQkFBQSxDQUFBUSxlQUFlLENBQUMsSUFBSSxDQUFDO2NBRTFDLElBQUksQ0FBQ0MsUUFBUSxHQUFHO2dCQUFFQyxlQUFlLEVBQUU7Y0FBQyxDQUFFO2NBQ3RDLElBQUksQ0FBQyxDQUFBQyxJQUFLLEVBQUU7WUFDYjtZQUVBLE1BQU1oRyxXQUFXQSxDQUFDL0MsSUFBSTtjQUNyQixJQUFJLENBQUNBLElBQUksRUFBRTtnQkFDVixNQUFNLElBQUlXLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Y0FFdkMsSUFBSVgsSUFBSSxDQUFDakMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsQ0FBQUEsVUFBVyxDQUFDeUosR0FBRyxDQUFDeEgsSUFBSSxDQUFDakMsVUFBVSxDQUFDOztjQUV0QyxNQUFNO2dCQUFFTDtjQUFRLENBQUUsR0FBR3NDLElBQUk7Y0FDekIsSUFBSSxDQUFDLENBQUErRyxZQUFhLEdBQUdySixRQUFRO2NBQzdCLElBQUksQ0FBQyxDQUFBb0YsUUFBUyxDQUFDbEMsT0FBTyxDQUFDWixJQUFJLENBQUM7Y0FDNUIsSUFBSXRDLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUMsQ0FBQW9KLFFBQVMsQ0FBQzVJLE9BQU8sQ0FBQ2lELElBQUksSUFBRztrQkFDN0IsSUFBSSxDQUFDekQsUUFBUSxDQUFDc0wsY0FBYyxDQUFDN0gsSUFBSSxDQUFDLEVBQUU7a0JBQ3BDLE1BQU11RSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFoSSxRQUFTLENBQUNFLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQ3FDLElBQUksQ0FBQztrQkFDM0N1RSxJQUFJLEVBQUVuSCxHQUFHLENBQUNiLFFBQVEsQ0FBQ3lELElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUM7Z0JBRUYsSUFBSXpELFFBQVEsRUFBRXdKLE9BQU8sRUFBRTtrQkFDdEIsTUFBTWQsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExSSxRQUFTLENBQUNvQixHQUFHLENBQUMsU0FBUyxDQUFDO2tCQUNuRCxNQUFNc0gsT0FBTyxDQUFDOUYsSUFBSSxFQUFFOzs7WUFHdkI7WUFDQSxNQUFNLENBQUF5SSxJQUFLRSxDQUFBO2NBQ1YsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQ3hLLE9BQU87Z0JBQ2xCLElBQUksQ0FBQzRHLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBTy9ELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNTCxPQUFPQSxDQUFBO2NBQ1o7Y0FFQSxNQUFNbEQsVUFBVSxHQUFHLElBQUksQ0FBQ21MLGdCQUFnQixDQUFDM0IsR0FBRyxDQUFDNEIsQ0FBQyxLQUFLO2dCQUFFaEwsRUFBRSxFQUFFLElBQUFrSyxLQUFBLENBQUFlLEVBQU0sR0FBRTtnQkFBRTlDLEtBQUssRUFBRTZDO2NBQUMsQ0FBRSxDQUFDLENBQUM7Y0FDL0UsSUFBSSxDQUFDLENBQUFwTCxVQUFXLENBQUN5SixHQUFHLENBQUN6SixVQUFVLENBQUM7Y0FDaEMsTUFBTXFCLFVBQVUsR0FBRyxJQUFJLENBQUNpSyxhQUFhLEVBQUU7Y0FFdkNqSyxVQUFVLENBQUNtQixLQUFLLEdBQUc7Z0JBQ2xCMkgsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtnQkFDdkJXLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7Z0JBQ3ZCUyxXQUFXLEVBQUU7a0JBQUVSLGVBQWUsRUFBRTtnQkFBQyxDQUFFO2dCQUNuQ1MsUUFBUSxFQUFFO2tCQUFFQyxHQUFHLEVBQUU7Z0JBQUU7ZUFDbkI7Y0FDRCxJQUFJLENBQUMsQ0FBQW5ILEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUMzQyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFpQixHQUFJLENBQUNZLElBQUksQ0FBQyxVQUFVLEVBQUU3RCxVQUFVLENBQUM7Y0FDN0Q7Y0FDQSxPQUFPZ0MsUUFBUTtZQUNoQjtZQUVBLE1BQU03QyxHQUFHQSxDQUFDeUIsSUFBSTtjQUNiLEtBQUssQ0FBQ3pCLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQztjQUVmLElBQUlBLElBQUksQ0FBQ2pDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFVBQVcsQ0FBQ3lKLEdBQUcsQ0FBQ3hILElBQUksQ0FBQ2pDLFVBQVUsQ0FBQzs7Y0FFdEMsSUFBSWlDLElBQUksQ0FBQ3lKLFFBQVEsRUFBRTtnQkFDbEJ6SixJQUFJLENBQUN5SixRQUFRLENBQUN2TCxPQUFPLENBQUMsTUFBTXdILElBQUksSUFBRyxDQUFFLENBQUMsQ0FBQzs7WUFFekM7WUFFQSxNQUFNZ0UsVUFBVUEsQ0FBQ0MsV0FBbUI7Y0FDbkMsTUFBTXBKLEtBQUssR0FBRztnQkFBRXFKLFFBQVEsRUFBRSxJQUFJLENBQUN6TCxFQUFFO2dCQUFFd0w7Y0FBVyxDQUFFO2NBQ2hELElBQUksQ0FBQyxDQUFBdEgsR0FBSSxDQUFDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDO2NBQzNDLE1BQU16QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWlCLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLFNBQVMsRUFBRTFDLEtBQUssQ0FBQztjQUV2RCxJQUFJLENBQUNhLFFBQVEsQ0FBQ1osTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQ1MsUUFBUSxDQUFDWCxLQUFLLENBQUM7O2NBR2hDLE9BQU9XLFFBQVEsQ0FBQ3BCLElBQUk7WUFDckI7WUFFQSxNQUFNb0gsZUFBZUEsQ0FBQ0MsSUFBWTtjQUNqQyxJQUFJO2dCQUNILE1BQU1qQixPQUFPLEdBQWEsTUFBTSxJQUFJLENBQUMsQ0FBQTFJLFFBQVMsQ0FBQ29CLEdBQUcsQ0FBQ3VJLElBQUksQ0FBQztnQkFDeEQsTUFBTWpCLE9BQU8sQ0FBQzJCLFFBQVEsRUFBRTtnQkFDeEIsT0FBTzNCLE9BQU87ZUFDZCxDQUFDLE9BQU85RSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU91RCxTQUFTOztZQUVsQjtZQUVBekcsR0FBR0EsQ0FBQ2dJLE9BQU87Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBMUksUUFBUyxDQUFDZ0ksSUFBSSxDQUFDdEgsR0FBRyxDQUFDZ0ksT0FBTyxDQUFDO1lBQ3hDOztVQUNBckgsT0FBQSxDQUFBNEcsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZMRCxJQUFBdEksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLElBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxRQUFBLEdBQUE3RSxPQUFBO1VBSU0sTUFBT21MLGNBQWUsU0FBUXBMLE1BQUEsQ0FBQUksYUFBNkI7WUFDaEUsQ0FBQTRFLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBQ1AsQ0FBQVEsUUFBUztZQUNUL0MsWUFBWXVDLE1BQXNCO2NBQ2pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBaEMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFBd0QsTUFBTyxDQUFDbkUsRUFBRSxFQUFFLENBQUM7Y0FFM0UsSUFBSSxDQUFDcUMsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUd2QyxJQUFJSixLQUFLLEVBQUV1QyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQVIsTUFBTyxDQUFDUyxXQUFXLENBQUMvQyxJQUFJLENBQUM7Y0FFekQsT0FBTztnQkFBRVEsTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7O1VBQ0RqQixPQUFBLENBQUEwSixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFwTCxNQUFBLEdBQUFDLE9BQUE7VUFHTSxNQUFPc0wsZUFBZ0IsU0FBUXZMLE1BQUEsQ0FBQUksYUFBOEI7WUFDbEUsQ0FBQTZFLE1BQU87WUFDUCxDQUFBdUgsY0FBZSxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztZQUNwRixDQUFBQyxjQUFlLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7WUFDeEUsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBRUEsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBRixjQUFlO1lBQzVCO1lBQ0EsQ0FBQUcsY0FBZSxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNuQkMsUUFBUSxHQUFHLEVBQUU7WUFDYkMsUUFBUSxHQUFHLElBQUk7WUFDdkIsSUFBSUMscUJBQXFCQSxDQUFBO2NBQ3hCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBSixjQUFlLENBQUM7WUFDakM7WUFDQSxDQUFBSyxjQUFlLEdBQUcsSUFBSTFNLEdBQUcsRUFBRTtZQUMzQixJQUFJMk0sb0JBQW9CQSxDQUFBO2NBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUFELGNBQWU7WUFDNUI7WUFFQSxDQUFBRSxxQkFBc0IsR0FBYSxFQUFFO1lBQ3JDLElBQUlBLHFCQUFxQkEsQ0FBQTtjQUN4QixPQUFPLElBQUksQ0FBQyxDQUFBQSxxQkFBc0I7WUFDbkM7WUFFQSxDQUFBQyxhQUFjLEdBQUcsSUFBSTdNLEdBQUcsRUFBRTtZQUMxQixJQUFJNk0sYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBQ0EsQ0FBQUMsS0FBTSxHQUFHLENBQUM7WUFDVjFLLFlBQVl1QyxNQUFNO2NBQ2pCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckJzRCxVQUFVLENBQUM4RSxFQUFFLEdBQUcsSUFBSTtjQUNwQjlFLFVBQVUsQ0FBQzlDLFFBQVEsR0FBRyxJQUFJO1lBQzNCO1lBRUEsQ0FBQTZILGNBQWU7WUFDZkMsa0JBQWtCLEdBQUd4RSxPQUFPLElBQUc7Y0FDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbUUscUJBQXNCLENBQUNNLFFBQVEsQ0FBQ3pFLE9BQU8sQ0FBQyxFQUFFO2NBQ3BELElBQUksQ0FBQyxDQUFBbUUscUJBQXNCLENBQUNPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQVAscUJBQXNCLENBQUNRLE9BQU8sQ0FBQzNFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUNuRixJQUFJLENBQUNwRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7WUFDcEMsQ0FBQztZQUVEZ0osaUJBQWlCLEdBQUdBLENBQUNDLE9BQU8sRUFBRTdFLE9BQU8sS0FBSTtjQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFvRSxhQUFjLENBQUNwTSxHQUFHLENBQUM2TSxPQUFPLENBQUMsRUFBRTtjQUN2QyxNQUFNdkQsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBOEMsYUFBYyxDQUFDMUwsR0FBRyxDQUFDbU0sT0FBTyxDQUFDO2NBQzlDLElBQUksQ0FBQ3ZELEtBQUssQ0FBQ3RKLEdBQUcsQ0FBQ2dJLE9BQU8sQ0FBQyxFQUFFO2NBQ3pCc0IsS0FBSyxDQUFDd0QsTUFBTSxDQUFDOUUsT0FBTyxDQUFDO2NBQ3JCLElBQUksQ0FBQ3BFLFlBQVksQ0FBQyxTQUFTaUosT0FBTyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUNEckssT0FBT0EsQ0FBQ1osSUFBSTtjQUNYNEYsVUFBVSxDQUFDNUYsSUFBSSxHQUFHQSxJQUFJO2NBQ3RCLElBQUksQ0FBQyxDQUFBeUssS0FBTSxFQUFFO2NBQ2IsSUFBSSxDQUFDLENBQUFELGFBQWMsR0FBRyxJQUFJN00sR0FBRyxFQUFFO2NBRS9CLElBQUl3TixhQUFhLEdBQUcsS0FBSztjQUN6QixJQUFJQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUF0QixjQUFlLENBQUN1QixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFbEYsT0FBTyxLQUFJO2dCQUN2RCxJQUFJcEcsSUFBSSxDQUFDdEMsUUFBUSxDQUFDMEksT0FBTyxDQUFDLEVBQUVqSSxFQUFFLEVBQUU7a0JBQy9CLElBQUksSUFBSSxDQUFDLENBQUE2TCxjQUFlLENBQUM1TCxHQUFHLENBQUNnSSxPQUFPLENBQUMsRUFBRTtvQkFDdEMrRSxhQUFhLEdBQUcsSUFBSTtvQkFDcEIsSUFBSSxDQUFDLENBQUFaLHFCQUFzQixDQUFDL0wsSUFBSSxDQUFDNEgsT0FBTyxDQUFDO29CQUN6QyxJQUFJLENBQUMsQ0FBQTRELGNBQWUsQ0FBQ2tCLE1BQU0sQ0FBQzlFLE9BQU8sQ0FBQzs7a0JBRXJDLE9BQU9rRixHQUFHOztnQkFHWCxJQUFJLENBQUMsQ0FBQXRCLGNBQWUsQ0FBQ3hDLEdBQUcsQ0FBQ3BCLE9BQU8sQ0FBQztnQkFDakMsT0FBT2tGLEdBQUcsR0FBRyxDQUFDO2NBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUVMLElBQUlILGFBQWEsRUFBRSxJQUFJLENBQUNuSixZQUFZLENBQUMsZ0JBQWdCLENBQUM7Y0FFdERoQyxJQUFJLENBQUN5SCxNQUFNLENBQUN2SixPQUFPLENBQUN3SixLQUFLLElBQUc7Z0JBQzNCLElBQUk2RCxZQUFZLEdBQUcsS0FBSztnQkFFeEIsSUFBSSxDQUFDLENBQUExQixjQUFlLENBQUMzTCxPQUFPLENBQUNrSSxPQUFPLElBQUc7a0JBQ3RDLE1BQU1vRixhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUFuQixjQUFlLENBQUN2TCxHQUFHLENBQUM0SSxLQUFLLENBQUN2SixFQUFFLENBQUMsSUFBSSxJQUFJOEwsR0FBRyxFQUFFO2tCQUVyRSxJQUFJdUIsYUFBYSxDQUFDcE4sR0FBRyxDQUFDZ0ksT0FBTyxDQUFDLElBQUlzQixLQUFLLENBQUNoSyxRQUFRLENBQUMwSSxPQUFPLENBQUMsRUFBRWpJLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBcU0sYUFBYyxDQUFDcE0sR0FBRyxDQUFDc0osS0FBSyxDQUFDdkosRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUFxTSxhQUFjLENBQUNqTSxHQUFHLENBQUNtSixLQUFLLENBQUN2SixFQUFFLEVBQUUsSUFBSThMLEdBQUcsRUFBRSxDQUFDO29CQUNwRixJQUFJLElBQUksQ0FBQyxDQUFBSSxjQUFlLENBQUNqTSxHQUFHLENBQUNzSixLQUFLLENBQUN2SixFQUFFLENBQUMsRUFBRTtzQkFDdkMsSUFBSSxDQUFDLENBQUFrTSxjQUFlLENBQUN2TCxHQUFHLENBQUM0SSxLQUFLLENBQUN2SixFQUFFLENBQUMsQ0FBQytNLE1BQU0sQ0FBQzlFLE9BQU8sQ0FBQzs7b0JBRW5ELElBQUksQ0FBQyxDQUFBb0UsYUFBYyxDQUFDMUwsR0FBRyxDQUFDNEksS0FBSyxDQUFDdkosRUFBRSxDQUFDLENBQUNxSixHQUFHLENBQUNwQixPQUFPLENBQUM7b0JBQzlDbUYsWUFBWSxHQUFHLElBQUk7O2tCQUdwQixJQUFJLENBQUM3RCxLQUFLLENBQUNoSyxRQUFRLENBQUMwSSxPQUFPLENBQUMsRUFBRWpJLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBa00sY0FBZSxDQUFDak0sR0FBRyxDQUFDc0osS0FBSyxDQUFDdkosRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUFrTSxjQUFlLENBQUM5TCxHQUFHLENBQUNtSixLQUFLLENBQUN2SixFQUFFLEVBQUUsSUFBSThMLEdBQUcsRUFBRSxDQUFDO29CQUN0RixJQUFJLENBQUMsQ0FBQUksY0FBZSxDQUFDdkwsR0FBRyxDQUFDNEksS0FBSyxDQUFDdkosRUFBRSxDQUFDLENBQUNxSixHQUFHLENBQUNwQixPQUFPLENBQUM7b0JBRS9DZ0YsSUFBSSxFQUFFOztnQkFFUixDQUFDLENBQUM7Z0JBQ0YsSUFBSUcsWUFBWSxFQUFFO2tCQUNqQixJQUFJLENBQUN2SixZQUFZLENBQUMsU0FBUzBGLEtBQUssQ0FBQ3ZKLEVBQUUsVUFBVSxDQUFDOztjQUVoRCxDQUFDLENBQUM7Y0FFRixJQUFJaU4sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQVgsS0FBTSxHQUFHLElBQUksQ0FBQ1AsUUFBUSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsQ0FBQVMsY0FBZSxHQUFHL0UsVUFBVSxDQUFDNkYsVUFBVSxDQUFDLE1BQUs7a0JBQ2pELElBQUksQ0FBQyxDQUFBbkosTUFBTyxDQUFDaEMsSUFBSSxDQUFDO29CQUFFd0MsUUFBUSxFQUFFO2tCQUFJLENBQUUsQ0FBQztnQkFDdEMsQ0FBQyxFQUFFLElBQUksQ0FBQ3FILFFBQVEsQ0FBQzs7WUFFbkI7WUFFQXVCLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQTFCLGNBQWUsQ0FBQzBCLEtBQUssRUFBRTtjQUM1QixJQUFJLENBQUMsQ0FBQXJCLGNBQWUsQ0FBQ3FCLEtBQUssRUFBRTtjQUM1QixJQUFJLENBQUMsQ0FBQW5CLHFCQUFzQixHQUFHLEVBQUU7Y0FDaEMsSUFBSSxDQUFDLENBQUFDLGFBQWMsR0FBRyxJQUFJN00sR0FBRyxFQUFFO2NBQy9CLElBQUksQ0FBQyxDQUFBOE0sS0FBTSxHQUFHLENBQUM7Y0FDZixJQUFJLElBQUksQ0FBQyxDQUFBRSxjQUFlLEVBQUUvRSxVQUFVLENBQUMrRixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUFoQixjQUFlLENBQUM7WUFDeEU7O1VBQ0E1TCxPQUFBLENBQUE2SixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEhELElBQUF2TCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsSUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFQSxJQUFBOEUsU0FBQSxHQUFBOUUsT0FBQTtVQUVBLElBQUE0QixLQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQXdHLE1BQUEsR0FBQXhHLE9BQUE7VUFDTztVQUFVLE1BQU95RyxVQUFXLFNBQVExRyxNQUFBLENBQUFJLGFBQXlCO1lBQ25FLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQLENBQUFuRSxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFDQSxDQUFBeUIsb0JBQXFCO1lBQ3JCLElBQUlBLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFDQSxDQUFBRixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBRCxRQUFTLEdBQVUsRUFBRTtZQUNyQixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUE0QixTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBMkMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsQ0FBQXZDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFwQyxZQUFhO1lBQ2IsQ0FBQVMsVUFBVztZQUNYQyxZQUFZO2NBQUVWO1lBQVksQ0FBeUM7Y0FDbEUsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFBLFlBQWEsR0FBR0EsWUFBWTtjQUNqQyxJQUFJLENBQUMsQ0FBQWdELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBcEMsSUFBSSxHQUFHLE1BQUFBLENBQU9uQyxFQUFFLEVBQUU4RixNQUFPLEtBQUk7Y0FDNUIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFekQsTUFBTTtrQkFBRVI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFxQyxHQUFJLENBQ3RDTSxNQUFNLENBQUNSLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDdUQsS0FBSyxDQUFDLENBQ2pDL0QsR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQU8sWUFBYSxJQUFJbEIsRUFBRSxTQUFTLEVBQUU7a0JBQUU4RjtnQkFBTSxDQUFFLENBQUM7Z0JBRXBFLElBQUksQ0FBQ3pELE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztnQkFFeEQsSUFBSSxDQUFDLENBQUFsQixRQUFTLEdBQUdPLElBQUksQ0FBQ1AsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBQyxRQUFTLEdBQUdNLElBQUksQ0FBQ04sUUFBUTtnQkFDOUIsSUFBSSxDQUFDLENBQUEyQixTQUFVLEdBQUdyQixJQUFJLENBQUNxQixTQUFTO2dCQUNoQyxJQUFJLENBQUMsQ0FBQXpCLG9CQUFxQixHQUFHSSxJQUFJLENBQUNKLG9CQUFvQjtnQkFDdEQsSUFBSSxDQUFDLENBQUFvRSxXQUFZLEdBQUdoRSxJQUFJLENBQUNnRSxXQUFXO2dCQUNwQyxJQUFJLENBQUN0QyxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ3dDLE1BQU0sR0FBRyxJQUFJO2VBQ2xCLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVELE1BQU1JLGVBQWVBLENBQUE7Y0FDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQTVCLFVBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO2NBQzdDLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUcsSUFBSWdFLE1BQUEsQ0FBQWxDLGNBQWMsRUFBRTtjQUV2QyxNQUFNSCxJQUFJLEdBQUcsSUFBSXZDLEtBQUEsQ0FBQTJDLElBQUksQ0FBQztnQkFBRTFELEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTZGLFdBQVksQ0FBQ3ZDLElBQUksQ0FBQ3REO2NBQUUsQ0FBRSxDQUFDO2NBQ3hELE1BQU1zRCxJQUFJLENBQUNLLE9BQU8sRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQUwsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBM0IsVUFBVyxDQUFDaUMsT0FBTyxFQUFFO2NBQzFCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNqQztZQUVBZixPQUFPLEdBQUcsTUFBTVYsS0FBSyxJQUFHO2NBQ3ZCLElBQUk7Z0JBQ0gsTUFBTTRDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQzlDLEtBQUssQ0FBQztnQkFDL0MsTUFBTStDLElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Z0JBQzNCSixLQUFLLENBQUNqRixPQUFPLENBQUNzRixJQUFJLElBQUc7a0JBQ3BCRixJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFakQsS0FBSyxDQUFDaUQsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQztnQkFFRkYsSUFBSSxDQUFDRyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBcEUsWUFBYSxDQUFDO2dCQUUvQyxNQUFNcUUsR0FBRyxHQUFHLElBQUl0QixTQUFBLENBQUF1QixTQUFTLEVBQUU7Z0JBQzNCRCxHQUFHLENBQUNmLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBQ3JDLE1BQU16QixRQUFRLEdBQUcsTUFBTXNDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDTixJQUFJLEVBQUUsR0FBR3BCLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLHFCQUFxQixDQUFDO2dCQUMzRixNQUFNbUIsSUFBSSxHQUFHLE1BQU16QyxRQUFRLENBQUN5QyxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQ0EsSUFBSSxDQUFDckQsTUFBTSxFQUFFO2tCQUNqQixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Z0JBRS9DLElBQUksQ0FBQyxDQUFBbEIsUUFBUyxHQUFHb0UsSUFBSSxDQUFDN0QsSUFBSSxDQUFDUCxRQUFRO2dCQUNuQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHbUUsSUFBSSxDQUFDN0QsSUFBSSxDQUFDTixRQUFRO2dCQUNuQyxJQUFJLENBQUMsQ0FBQUUsb0JBQXFCLEdBQUdpRSxJQUFJLENBQUM3RCxJQUFJLENBQUNKLG9CQUFvQjtnQkFDM0QsSUFBSSxDQUFDb0MsWUFBWSxFQUFFO2dCQUNuQixPQUFPNkIsSUFBSSxDQUFDN0QsSUFBSTtlQUNoQixDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDYSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRDZDLGFBQWEsR0FBRyxNQUFNNUQsS0FBSyxJQUFHO2NBQzdCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE4QixHQUFJLENBQUNNLE1BQU0sQ0FBQ1IsUUFBQSxDQUFBUyxjQUFjLENBQUN0RCxJQUFJLENBQUN1RCxLQUFLLENBQUM7Z0JBRTNDLE1BQU16QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWlCLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2tCQUMvRCxHQUFHMUMsS0FBSztrQkFDUmxCLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQUE7aUJBQ25CLENBQUM7Z0JBRUYsSUFBSSxDQUFDK0IsUUFBUSxDQUFDWixNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxDQUFBVSxTQUFVLEdBQUdELFFBQVEsQ0FBQ3BCLElBQUksQ0FBQ3FCLFNBQVM7Z0JBQ3pDLElBQUksQ0FBQ00sT0FBTyxDQUFDLFFBQVEsQ0FBQztlQUN0QixDQUFDLE9BQU9MLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZCxLQUFLLENBQUNhLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQzs7VUFDRHZDLE9BQUEsQ0FBQWdGLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SEQsSUFBQTlFLFNBQUEsR0FBQTNCLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9zTyxRQUFTLFNBQVEzTSxTQUFBLENBQUF3RyxVQUFVO1lBQ2xEQyxJQUFJLEdBQUduSSxLQUFBLENBQUFzTyxPQUFPO1lBQ2Q5TCxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFRyxTQUFTLEVBQUUsVUFBVTtnQkFBRUQsRUFBRSxFQUFFO2NBQVUsQ0FBRSxDQUFDO1lBQ2pEOztVQUNBbEIsT0FBQSxDQUFBNk0sUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RNO1VBQVcsTUFBTUUsS0FBSyxHQUFBL00sT0FBQSxDQUFBK00sS0FBQSxHQUFHO1lBQy9CQyxXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsV0FBVyxFQUFFLElBQUk7WUFDakJDLEdBQUcsRUFBRSxJQUFJO1lBQ1RDLGFBQWEsRUFBRTtXQUNmOzs7Ozs7Ozs7OztVcEJSRDs7VUFFQWhKLE1BQUEsQ0FBQWtCLGNBQUEsQ0FBQXZGLE9BQUE7WUFDQXdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VXFCSkEsSUFBQXRGLFNBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEUsT0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRSxJQUFBLEdBQUEzRSxPQUFBO1VBV087VUFBVSxNQUFPdU8sT0FBUSxTQUFRNU0sU0FBQSxDQUFBRSxJQUFjO1lBQzNDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7WUFFL0QsQ0FBQXlILE1BQU87WUFVUCxDQUFBaEgsVUFBVztZQUNYLElBQUk2RSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxHQUFHeEMsT0FBQSxDQUFBTSxPQUFNLENBQUN0QixNQUFNLENBQUN5RCxPQUFPLG9CQUFvQixJQUFJLENBQUN4RyxFQUFFLEVBQUU7WUFDN0Q7WUFFQTRCLFlBQVk7Y0FBRTVCLEVBQUUsR0FBRzBHO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFMUcsRUFBRTtnQkFBRThCLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUU7Y0FBVSxDQUFFLENBQUM7WUFDckQ7WUFFQW1NLFNBQVNBLENBQUMvSixNQUFjO2NBQ3ZCLElBQUksQ0FBQyxDQUFBdUUsTUFBTyxHQUFHdkUsTUFBTTtZQUN0QjtZQUVBLE1BQU1oQyxJQUFJQSxDQUFDQyxLQUFBLEdBQXlCLEVBQUU7Y0FDckMsTUFBTSxJQUFJLENBQUM5QixPQUFPO2NBQ2xCLElBQUksQ0FBQzhCLEtBQUssQ0FBQ3BDLEVBQUUsRUFBRW9DLEtBQUssQ0FBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7Y0FDakMsTUFBTTtnQkFBRXFDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVUO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDTSxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUV2RCxJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEJGLEtBQUssRUFBRSxDQUFDOztjQUduRCxPQUFPVCxJQUFJO1lBQ1o7WUFFQTs7OztZQUlBLE1BQU1pQixPQUFPQSxDQUFDcUwsUUFBZ0IsRUFBRTNDLFdBQW1CO2NBQ2xEcEksT0FBTyxDQUFDZ0wsS0FBSyxDQUFDLGtCQUFrQixFQUFFRCxRQUFRLEVBQUUzQyxXQUFXLENBQUM7Y0FDeEQsTUFBTXZJLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQ2MsT0FBTyxDQUFDcUwsUUFBUSxFQUFFM0MsV0FBVyxDQUFDO2NBQ25FLElBQUksQ0FBQ3ZJLFFBQVEsQ0FBQ1osTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0JTLFFBQVEsQ0FBQ1gsS0FBSyxFQUFFLENBQUM7O2NBRzFELE9BQU87Z0JBQUVELE1BQU0sRUFBRVksUUFBUSxDQUFDWixNQUFNO2dCQUFFUixJQUFJLEVBQUVvQixRQUFRLEVBQUVwQjtjQUFJLENBQUU7WUFDekQ7WUFFQSxNQUFNZ0YsTUFBTUEsQ0FBQ25DLEtBQWE7Y0FDekIsTUFBTVIsR0FBRyxHQUFHLElBQUlKLElBQUEsQ0FBQU0sR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLE1BQU1uQyxLQUFLLEdBQUc7Z0JBQUVvQyxNQUFNLEVBQUVFLEtBQUs7Z0JBQUUxRSxFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUU7Y0FFNUMsTUFBTWlELFFBQVEsR0FBRyxNQUFNaUIsR0FBRyxDQUFDWSxJQUFJLENBQUMsa0JBQWtCLEVBQUUxQyxLQUFLLENBQUM7Y0FDMUQsT0FBT2EsUUFBUTtZQUNoQjs7VUFDQXJDLE9BQUEsQ0FBQThNLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUQsSUFBQTVNLFNBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBMEIsU0FBQSxHQUFBMUIsT0FBQTtVQWtCTztVQUFVLE1BQU9rUCxZQUFhLFNBQVF2TixTQUFBLENBQUFFLElBQW1CO1lBQ3JEQyxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDO1lBV2pELENBQUE4RixXQUFZO1lBQ1osQ0FBQXVILE9BQVE7WUFFUjFNLFlBQVk7Y0FBRTVCLEVBQUUsR0FBRzBHO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFMUcsRUFBRTtnQkFBRThCLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsY0FBYztnQkFBRUMsUUFBUSxFQUFFbkIsU0FBQSxDQUFBME47Y0FBb0IsQ0FBRSxDQUFDO1lBQ3pGO1lBRUEsTUFBTXBNLElBQUlBLENBQUE7Y0FDVCxNQUFNLElBQUksQ0FBQzdCLE9BQU87Y0FFbEIsTUFBTTtnQkFBRStCLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVUO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDTSxJQUFJLEVBQUU7Y0FDbEQsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsNkJBQTZCRixLQUFLLEVBQUUsQ0FBQzs7Y0FHdEQsSUFBSSxDQUFDLENBQUF5RSxXQUFZLEdBQUdsRixJQUFJLENBQUNrRixXQUFXO2NBQ3BDLElBQUksQ0FBQyxDQUFBdUgsT0FBUSxHQUFHek0sSUFBSSxDQUFDeU0sT0FBTztjQUU1QixPQUFPek0sSUFBSTtZQUNaOztVQUNBakIsT0FBQSxDQUFBeU4sWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25ERCxJQUFBdkssSUFBQSxHQUFBM0UsT0FBQTtVQUVBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE0RSxPQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFFTSxNQUFPb1Asb0JBQXFCLFNBQVFyUCxNQUFBLENBQUFJLGFBQW1DO1lBQzVFLENBQUE0RSxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQdkMsWUFBWXVDLE1BQW9CO2NBQy9CLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBTSxHQUFHLENBQUNMLE9BQUEsQ0FBQU0sT0FBTSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBaEMsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixJQUFJLENBQUMsQ0FBQStCLEdBQUksQ0FBQ00sTUFBTSxDQUFDUixRQUFBLENBQUFTLGNBQWMsQ0FBQ3RELElBQUksQ0FBQ3VELEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFckMsTUFBTTtnQkFBRUMsS0FBSztnQkFBRVQ7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLEdBQUksQ0FBQ3ZELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztjQUVyRTs7O2NBR0EsSUFBSSxDQUFDMEIsTUFBTSxFQUFFO2dCQUNaLE9BQU87a0JBQ05BLE1BQU0sRUFBRSxJQUFJO2tCQUNaUixJQUFJLEVBQUU7b0JBQ0xrRixXQUFXLEVBQUUsRUFBRTtvQkFDZnVILE9BQU8sRUFBRTtzQkFBRXRPLEVBQUUsRUFBRWdFLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDbkIsRUFBRTtzQkFBRWtKLElBQUksRUFBRWxGLFFBQUEsQ0FBQVMsY0FBYyxDQUFDdEQsSUFBSSxDQUFDcU47b0JBQVc7O2lCQUU3RTs7Y0FHRixPQUFPO2dCQUFFbk0sTUFBTTtnQkFBRVI7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7O1VBQ0RqQixPQUFBLENBQUEyTixvQkFBQSxHQUFBQSxvQkFBQSJ9