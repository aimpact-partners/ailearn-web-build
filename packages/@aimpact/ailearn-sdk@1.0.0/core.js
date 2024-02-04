System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/model", "@beyond-js/reactive@1.1.9/entities", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, Classrooms, Classroom, GClass, LearningModules, IActivities, Activity, LearningModule, Sessions, Faces, Session, StudentsHome, ISuggestionResponse, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Api) {
      dependency_9 = _aimpactChatSdk100Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.9"], ["@bgroup/http-suite", "1.0.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.1"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@bgroup/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat-sdk/api', dependency_9]]);
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
        hash: 4014111198,
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
            constructor() {
              super({
                storeName: 'Classrooms',
                db: 'chat-api',
                item: _item.Classroom,
                provider: _provider.ClassroomProvider
              });
              console.log(this, 'Collection Classroom');
            }
            async importFromGoogleClassroom(specs) {
              console.log(specs, 'specs');
              return this.provider.imports(specs);
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
        hash: 1592223405,
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
              console.log(33, data);
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
        hash: 4199077601,
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
            setItems(data, clean = false) {
              if (clean) this.#items.clear();
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
        hash: 3353167908,
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
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /* bundle */
          class Activity extends _entities.Item {
            #properties = ['index', 'id', 'type', 'title', 'description', 'objective', 'duration', 'specs', 'picture', 'language'];
            #types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
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
            #materials;
            get materials() {
              return this.#materials;
            }
            constructor(data) {
              super();
              this.reactiveProps(['index', 'id', 'type', 'title', 'description', 'objective', 'duration', 'language']);
              this.#specs = new _specs.ActivitySpecs(this);
              this.#learningModule = data.learningModule;
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
             * MODULO: POST /modules/drafts/:id/image
            ACTIVITIES: POST `/modules/drafts/:id/activities/:activityId/image
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
                  prompt,
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
        hash: 3212971135,
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
                console.log(88, name);
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
        hash: 3024294061,
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
            conversation: ['bullet-topics', 'introduction'],
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
        hash: 2429413663,
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
            #properties = ['kind', 'topics', 'questions', 'criterias', 'observation'];
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
        hash: 1702033442,
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
            properties = ['id', 'title', 'status', 'userId', 'sessions', 'picture', 'language', 'description', 'objective', 'audience', 'members', 'public', 'totalActivities', 'target', 'duration', 'type', 'assignments'];
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
              this.set(answer);
              this.triggerEvent('activities.generated');
              return answer;
            }
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
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
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
            saveDraft() {
              const data = this.getProperties();
              console.log(0.2, data);
              data.activities = this.activities.getItems();
              return this.provider.saveDraft(data);
            }
            async generatePicture(observations = '') {
              try {
                this.fetching = true;
                let prompt = `Generate a cover image for the module with this title: ${this.objective} and this description: ${this.description}`;
                if (observations) {
                  prompt += ` taking into account the following recommendations: ${observations}`;
                }
                const response = await this.#suggestions.image({
                  prompt,
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
        hash: 1918153214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsInByb21pc2VzIiwib3JkZXIiLCJmb3JFYWNoIiwiaWQiLCJoYXMiLCJpbnN0YW5jZSIsIkFjdGl2aXR5Iiwic2V0IiwicHVzaCIsImlzUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwiaW5zdGFuY2VQcm9taXNlcyIsImluZGV4IiwiZ2V0IiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9lbnRpdGllcyIsIl9jb3JlIiwiQXNzaWdubWVudEFjdGl2aXR5IiwiSXRlbSIsInByb3BlcnRpZXMiLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiY2hhdExvYWRlZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic3RhcnR1cCIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiYWN0aXZpdHkiLCJFcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIm1hdGVyaWFscyIsIkpTT04iLCJwYXJzZSIsInB1Ymxpc2giLCJwYXJhbXMiLCJ0eXBlIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiY29uc29sZSIsInB1Ymxpc2hTcG9rZW4iLCJjaGF0IiwibG9hZEludGVyYWN0aW9uIiwidHJpZ2dlciIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJhcGlzIiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInNwb2tlbjEiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsInVzZXJJZCIsImxvYWRlZCIsInNhdmVTZWxlY3Rpb24iLCJEYXNoYm9hcmRXYWxsIiwiRGFzaGJvYXJkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsInVybCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsInVuZGVmaW5lZCIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbXMiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkNsYXNzcm9vbSIsIkNsYXNzcm9vbVByb3ZpZGVyIiwibG9nIiwiaW1wb3J0RnJvbUdvb2dsZUNsYXNzcm9vbSIsImltcG9ydHMiLCJhc3NpZ25tZW50cyIsImFzaWdtZW50cyIsImxvYWRCeUlkIiwic2F2ZSIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGUiLCJNb2R1bGVzUHJvdmlkZXIiLCJyb3V0ZSIsImVudHJpZXMiLCJkZWxldGVJdGVtcyIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJlbGVtZW50IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJsZWFybmluZ01vZHVsZSIsInN1Z2dlc3Rpb25zIiwibWFwIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImNsZWFuIiwiY2xlYXIiLCJyZW1vdmUiLCJnZXRJdGVtcyIsImdldERhdGEiLCJfc3BlY3MiLCJfbWF0ZXJpYWxzIiwidHlwZXMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJyZWFjdGl2ZVByb3BzIiwiQWN0aXZpdHlTcGVjcyIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlQW5zd2VyIiwiZ2VuZXJhdGUiLCJxdWVzdGlvbnMiLCJ3YXJuIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0ZUFsbEFuc3dlcnMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwicmVtb3ZlSXRlbXMiLCJjdXJyZW50RGF0YSIsIiNnZW5lcmF0ZSIsImZldGNoaW5nIiwibGFuZ3VhZ2UiLCJhY3Rpdml0eUlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJvYmplY3RpdmUiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJwaWN0dXJlIiwic2F2ZVJlc3BvbnNlIiwiX21hdGVyaWFsVHlwZXMiLCJUWVBFUyIsIk1BVEVSSUFMX1RZUEVTIiwiaW5pdCIsIm5hbWUiLCJnZW5lcmF0ZUNvbnRlbnQiLCJhcnRpY2xlIiwiZ2xvYmFsVGhpcyIsIl9hYSIsInJlcXVpcmVkIiwiY29udmVyc2F0aW9uIiwid3JpdHRlbiIsIkFjdGl2aXR5UXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsImFkZE9wdGlvbiIsIm9wdGlvbiIsIm9wdGlvbnMiLCJpbmNsdWRlcyIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJ0ZXh0IiwiY2hhbmdlIiwicXVlc3Rpb25Nb2RlbCIsIl9hY3Rpdml0aWVzIiwic2Vzc2lvbnNNYXAiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsImRyYWZ0IiwicmVmaW5lQWN0aXZpdGllcyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJhbnN3ZXIiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJzYXZlRHJhZnQiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0RHJhZnQiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJGYWNlcyIsIm91dHN0YW5kaW5nIiwiZ29vZCIsInJlZ3VsYXIiLCJpbmRpZmZlcmVudCIsImJhZCIsImluYXBwcm9wcmlhdGUiLCJsZXNzb24iLCJzZXRMZXNzb24iLCJsZXNzb25JZCIsInRyYWNlIiwiU3R1ZGVudHNIb21lIiwic3R1ZGVudCIsIlN0dWRlbnRzSG9tZVByb3ZpZGVyIiwiZGlzcGxheU5hbWUiLCJEQVRBIiwidGltZSIsInRvcGljcyIsImNyaXRlcmlhcyIsImtpbmQiLCJfaGFyZGNvZGVkRGF0YSIsImhhcmRjb2RlZEdlbmVyYXRlIiwicHJvbWlzZSIsInNldFRpbWVvdXQiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9jb2xsZWN0aW9uLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL21vZHVsZXMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL21hdGVyaWFsLXR5cGVzLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3F1ZXN0aW9uLnRzIiwiL21vZHVsZXMvaXRlbS9hY3Rpdml0aWVzL3NwZWNzLnRzIiwiL21vZHVsZXMvaXRlbS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vcHJvdmlkZXIudHMiLCIvc2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2ZhY2VzLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiLCIvc3R1ZGVudHMtaG9tZS9pdGVtLnRzIiwiL3N0dWRlbnRzLWhvbWUvcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaGFyZGNvZGVkLWRhdGEudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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