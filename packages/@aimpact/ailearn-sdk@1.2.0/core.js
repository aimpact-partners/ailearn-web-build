System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@beyond-js/reactive@2.1.1/entities/item", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ArchiveCollection, ArchiveItem, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    GClass: void 0,
    ArchiveCollection: void 0,
    ArchiveItem: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    RoleType: void 0,
    IPeopleData: void 0,
    IInviteData: void 0,
    IAILearnUserData: void 0,
    Metadata: void 0,
    CreditsData: void 0,
    Credits: void 0,
    StudentsHome: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_2 = _beyondJsReactive211EntitiesItem;
    }, function (_aimpactChatSdk155Core) {
      dependency_3 = _aimpactChatSdk155Core;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_6 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_7 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsKernel0114Core) {
      dependency_8 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_11 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_12 = _beyondJsReactive211EntitiesCollection;
    }, function (_aimpactChatSdk155Users) {
      dependency_13 = _aimpactChatSdk155Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/media-manager/uploader', dependency_6], ['@beyond-js/http-suite/api', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['@beyond-js/reactive/entities/collection', dependency_12], ['@aimpact/chat-sdk/users', dependency_13]]);
      ims = new Map();
      /***************************************************
      INTERNAL MODULE: ./assignments/activities/collection
      ***************************************************/
      ims.set('./assignments/activities/collection', {
        hash: 871013365,
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
              activities.order.forEach(id => {
                if (this.#elements.has(id)) return;
                let instance = new _item.AssignmentActivity({
                  id
                });
                this.#elements.set(id, instance);
              });
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
        hash: 3252979891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _item = require("@beyond-js/reactive/entities/item");
          var _item2 = require("../item");
          /*bundle*/
          class AssignmentActivity extends _item.Item {
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
            materials() {
              return this.resources?.materials;
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
            #assigment;
            get assignment() {
              return this.#assigment;
            }
            constructor({
              id,
              assignmentId,
              data
            } = {}) {
              super({
                id,
                entity: 'Activities',
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'resources', 'chat', 'credits', 'data' // represents the tracking data
                ],
                //@ts-igonore
                provider: _provider.ActivityProvider
              });
              this.startup(assignmentId, data);
              globalThis.model = this;
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.id;
              specs.assignmentId = this.#assignmentId;
              this.#assigment = await _item2.Assignment.get({
                id: this.#assignmentId
              });
              await this.#assigment.load();
              const {
                status,
                data
              } = await super.load(specs);
              await this.set(data.activity);
              //todo: this code must be removed when the reactive model is fixed
              await this.set({
                credits: data.credits
              });
              this.#user = data.user;
              this.#module = data.module;
              if (!status) {
                throw new Error(`Error loading assignment:`);
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
              this.trigger('change');
            }
            async consumeCoins() {
              await this.#tracking.consumeCoins();
              this.set({
                credits: this.#tracking.credits
              });
              this.trigger('credits.change');
              return this.getProperties();
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 328703934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              /**
               * /activities/spoken/completion [spoken]
              /activities/hand-written/completion [carga de imagen]
              /activities/written/completion [escrita]
               */
              const endpoints = {
                assessment: '/activities/assessments/completion',
                written: '/activities/written/completion',
                handwritten: '/activities/hand-written/completion'
              };
              const {
                status,
                data,
                error
              } = await this.#api.post(endpoints[specs.type], specs);
              if (error) {
                throw new Error('error processing assessment');
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
                const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
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
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/assessment
      ****************************************/

      ims.set('./assignments/assessment', {
        hash: 4105246799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
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
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
                const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/assessments/spoken`);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
        hash: 395558036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/
          class DashboardWall extends _model.ReactiveModel {
            #api;
            properties = ['id', 'messages'];
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                error,
                data
              } = await this.#api.get(`/assignments/${specs.id}/wall`);
              console.log(20, data);
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
        hash: 538356217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Dashboard extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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

      /***************************************************
      INTERNAL MODULE: ./assignments/interfaces/assignment
      ***************************************************/

      ims.set('./assignments/interfaces/assignment', {
        hash: 2029198843,
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
        hash: 3852925263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          class Assignment extends _item.Item {
            static instances = new Map();
            #order;
            get order() {
              return this.#order;
            }
            #assessment;
            get url() {
              return `${_wrapper.settings.baseUrl}/assignments/access/${this.id}`;
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
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            constructor({
              id = undefined,
              data
            } = {
              data: {}
            }) {
              super({
                id,
                entity: 'Assignments',
                properties: ['id', 'lesson', 'classRoomId', 'users'],
                provider: _provider.AssignmentProvider
              });
            }
            setModule(parent) {
              this.#module = parent;
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.id;
              const response = await super.load(specs);
              const {
                status,
                data
              } = response;
              if (!status) {
                throw new Error(`Error loading assignment:`);
              }
              this.#accessed = data.accessed;
              this.#module = data.module;
              this.#activities = new Activities();
              await this.#activities.setData(data.activities);
              this.#order = data.activities.order;
              // this.#activities = data.activities;
              return data;
            };
            async access() {
              const specs = {
                id: this.id
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities.setData(data.activities);
              return this.#accessed;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const model = new Assignment(specs);
              if (specs.id) {
                await model.load();
              }
              this.instances.set(specs.id, model);
              return model;
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /**************************************
      INTERNAL MODULE: ./assignments/provider
      **************************************/

      ims.set('./assignments/provider', {
        hash: 1108432547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class AssignmentProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${specs.id}/progress`, specs);
              const {
                status,
                data
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            async access(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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

      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/

      ims.set('./gclasess/item', {
        hash: 1733562129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle*/
          class GClass extends _item.Item {
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'GClasses',
                properties: ['id', 'session']
              });
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error(`Error loading session: `);
              }
              return data;
            }
          }
          exports.GClass = GClass;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 2392155578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class OrganizationProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/organizations/${specs.id}`);
              return response;
            };
            async delete() {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const data = await this.#api.delete(`/organizations/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.post('/organizations', specs);
              return res;
            }
            async invite(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.post('/organizations/join', specs);
              if (!res.status) {
                if (res.error.code === 42 || res.error.code === 41) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 44) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
            async freeTrial(data = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/organizations/${this.#parent.id}/free-trial`, data);
            }
          }
          exports.OrganizationProvider = OrganizationProvider;
        }
      });

      /******************************************
      INTERNAL MODULE: ./users/archive/collection
      ******************************************/

      ims.set('./users/archive/collection', {
        hash: 1847499507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveCollection extends _collection.Collection {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                item: _item.ArchiveItem,
                provider: _provider.ArchiveProvider
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              this.setItems(Object.values(data.items));
              return data;
            };
          }
          exports.ArchiveCollection = ArchiveCollection;
        }
      });

      /************************************
      INTERNAL MODULE: ./users/archive/item
      ************************************/

      ims.set('./users/archive/item', {
        hash: 3473577115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveItem extends _item.Item {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                provider: _provider.ArchiveProvider,
                properties: ['code', 'module', 'classroom', 'id', 'payer']
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
            restore() {
              this.provider.restore();
            }
          }
          exports.ArchiveItem = ArchiveItem;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/archive/provider
      ****************************************/

      ims.set('./users/archive/provider', {
        hash: 1339350735,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ArchiveProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              return data.items;
            };
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
          }
          exports.ArchiveProvider = ArchiveProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/interfaces/coins
      ****************************************/

      ims.set('./users/interfaces/coins', {
        hash: 1796557223,
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

      /********************************
      INTERNAL MODULE: ./users/metadata
      ********************************/

      ims.set('./users/metadata', {
        hash: 473764545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Metadata = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/
          class Metadata extends _model.ReactiveModel {
            #api;
            #schools = new Map();
            #logged = false;
            constructor(specs) {
              super({
                properties: ['freeTrial', 'requests', 'notify'],
                ...specs
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
          }
          exports.Metadata = Metadata;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./users/organizations/credit-data
      *************************************************/

      ims.set('./users/organizations/credit-data', {
        hash: 735895709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsData = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class CreditsData extends _model.ReactiveModel {
            constructor(...args) {
              super({
                properties: ['credits', 'count'],
                ...args
              });
            }
          }
          exports.CreditsData = CreditsData;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./users/organizations/credits
      *********************************************/

      ims.set('./users/organizations/credits', {
        hash: 4086905048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                properties: ['suscription', 'modules', 'assignments'],
                ...args
              });
              const defaultValue = {
                consumed: 0,
                count: 0
              };
              if (!this.suscription) this.suscription = {
                assignments: 0,
                renewal: 0,
                modules: 0
              };
              if (!this.modules) this.modules = defaultValue;
              if (!this.assignments) this.assignments = defaultValue;
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./users/organizations/index
      *******************************************/

      ims.set('./users/organizations/index', {
        hash: 3301400281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("./item");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Organizations extends _model.ReactiveModel {
            #api;
            #elements = new Map();
            get items() {
              return [...this.#elements.values()];
            }
            constructor({
              data
            }) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              if (data) {
                data.forEach(element => {
                  this.#elements.set(element.id, new _item.Organization(element));
                });
              }
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /******************************************
      INTERNAL MODULE: ./users/organizations/item
      ******************************************/

      ims.set('./users/organizations/item', {
        hash: 1557308332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _credits = require("./credits");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Organization extends _model.ReactiveModel {
            #api;
            entity = 'organization';
            #credits;
            get credits() {
              return this.#credits;
            }
            get coins() {
              return this.#credits;
            }
            constructor(args) {
              super({
                properties: ['id', 'name', 'entities'],
                ...args
              });
              this.#credits = new _credits.Credits();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async getCredits() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/organizations/${this.id}/coins`);
              if (!response.status) {
                throw new Error(response.error);
              }
              await this.#credits.set(response.data);
              return this.#credits;
            }
          }
          exports.Organization = Organization;
        }
      });

      /*************************************
      INTERNAL MODULE: ./users/students/item
      *************************************/

      ims.set('./users/students/item', {
        hash: 1529057499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHome = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class StudentsHome extends _item.Item {
            #assignments;
            #student;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'StudentsHome',
                properties: ['assignments', 'student'],
                provider: _provider.StudentsHomeProvider
              });
            }
            async load() {
              //@ts-ignore
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
        hash: 158253164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class StudentsHomeProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
            archive = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
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
        hash: 2896646669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@beyond-js/http-suite/api");
          var _collection = require("./archive/collection");
          var _organizations = require("./organizations");
          var _credits = require("./organizations/credits");
          /*bundle*/
          class User extends _users.User {
            #api;
            #organizations;
            #logged = false;
            get logged() {
              return this.#logged;
            }
            get schools() {
              return {
                // items: [...this.#organizations.values()]
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
              return this.#organizations ?? [];
            }
            get accessibilityMode() {
              return !!globalThis.localStorage.getItem('aimpact.accessibility.mode');
            }
            get coins() {
              return this.credits;
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            #archive = new _collection.ArchiveCollection({
              parent: this
            });
            get archive() {
              return this.#archive;
            }
            constructor(specs) {
              super({
                ...specs,
                entity: 'User',
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', {
                  name: 'coins',
                  value: _credits.Credits
                }, 'roles']
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load({
              debug = false
            } = {}) {
              try {
                this.fetching = true;
                const token = await this.token;
                if (!token) throw new Error('No token');
                this.#api.bearer(token);
                const specs = {};
                if (debug) specs.debug = true;
                const response = await this.#api.get('/users/me', specs);
                if (response.error && response.error?.code === 503) {
                  this.#outdated = true;
                  return response;
                }
                this.#outdated = false;
                this.#data = response.data;
                if (this.#data.teacher) {
                  this.#organizations = new _organizations.Organizations({
                    data: this.#data.teacher.orgs
                  });
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
                const token = await this.token;
                // throw new Error('Error fetching user data');
                this.#api.bearer(token);
                const response = await this.#api.post('/users/login', {
                  firebaseToken,
                  ...this.getProperties()
                });
                if (!response.status) throw new Error('Error fetching user data');
                const answer = this.set(response.data);
                if (this.token) {
                  await this.load();
                }
                this.#data = response.data;
                this.#logged = true;
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.fetching = false;
              }
            }
            async getToken() {
              const token = await this.token;
              if (!token) throw new Error('No token');
              return token;
            }
            async acceptTerms(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(await this.getToken());
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
                this.#api.bearer(await this.getToken());
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
                this.#api.bearer(await this.getToken());
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
            async freeTrial(data) {
              this.#api.bearer(await this.getToken());
              const response = await this.#api.post(`/users/free-trial`, data);
              await this.load();
              return response;
            }
            hasAccess = () => {
              const code = globalThis.localStorage.getItem('rvd.access.code');
              if (!code) return false;
              return this.getAccess(code);
            };
            async getHome() {
              if (this.#hasAccess) return true;
              this.fetching = true;
              this.#api.bearer(await this.getToken());
              return await this.#api.get(`/users/home`);
            }
            async getOrganizationCredits(id) {
              this.#api.bearer(await this.getToken());
              return await this.#api.get(`/organizations/${id}/coins`);
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
        "im": "./gclasess/item",
        "from": "GClass",
        "name": "GClass"
      }, {
        "im": "./users/archive/collection",
        "from": "ArchiveCollection",
        "name": "ArchiveCollection"
      }, {
        "im": "./users/archive/item",
        "from": "ArchiveItem",
        "name": "ArchiveItem"
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
        "im": "./users/metadata",
        "from": "Metadata",
        "name": "Metadata"
      }, {
        "im": "./users/organizations/credit-data",
        "from": "CreditsData",
        "name": "CreditsData"
      }, {
        "im": "./users/organizations/credits",
        "from": "Credits",
        "name": "Credits"
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
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'ArchiveCollection') && _export("ArchiveCollection", ArchiveCollection = require ? require('./users/archive/collection').ArchiveCollection : value);
        (require || prop === 'ArchiveItem') && _export("ArchiveItem", ArchiveItem = require ? require('./users/archive/item').ArchiveItem : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./users/interfaces/common/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./users/interfaces/common/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./users/interfaces/common/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./users/interfaces/common/coins').ICreditsConsumptionsData : value);
        (require || prop === 'RoleType') && _export("RoleType", RoleType = require ? require('./users/interfaces/common/people').RoleType : value);
        (require || prop === 'IPeopleData') && _export("IPeopleData", IPeopleData = require ? require('./users/interfaces/common/people').IPeopleData : value);
        (require || prop === 'IInviteData') && _export("IInviteData", IInviteData = require ? require('./users/interfaces/common/people').IInviteData : value);
        (require || prop === 'IAILearnUserData') && _export("IAILearnUserData", IAILearnUserData = require ? require('./users/interfaces/user').IAILearnUserData : value);
        (require || prop === 'Metadata') && _export("Metadata", Metadata = require ? require('./users/metadata').Metadata : value);
        (require || prop === 'CreditsData') && _export("CreditsData", CreditsData = require ? require('./users/organizations/credit-data').CreditsData : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./users/organizations/credits').Credits : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJlbmRwb2ludHMiLCJ3cml0dGVuIiwiaGFuZHdyaXR0ZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJfY29yZSIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsImNoYXQiLCJjaGF0TG9hZGVkIiwidXNlcklkIiwibG9hZEludGVyYWN0aW9uIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJDaGF0IiwibG9hZEFsbCIsInJlc29sdmUiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsImxvZyIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfd3JhcHBlciIsImluc3RhbmNlcyIsInVybCIsInNldHRpbmdzIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsInJlc3RvcmUiLCJhcmNoaXZlIiwidGV4dCIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZldGNoaW5nIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJhbnN3ZXIiLCJnZXRUb2tlbiIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi8vYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiLy9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiLy9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvL0lFdmFsdWF0aW9uLnRzLyIsIi8vYXNzaWdubWVudC50cy8iLCIvL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiLy9nY2xhc2Vzcy9pdGVtLnRzIiwiLy9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiLy91c2Vycy9hcmNoaXZlL2NvbGxlY3Rpb24udHMiLCIvL3VzZXJzL2FyY2hpdmUvaXRlbS50cyIsIi8vdXNlcnMvYXJjaGl2ZS9wcm92aWRlci50cyIsIi8vY29pbnMudHMvIiwiLy9wZW9wbGUudHMvIiwiLy91c2VyLnRzLyIsIi8vdXNlcnMvbWV0YWRhdGEudHMiLCIvL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0LWRhdGEudHMiLCIvL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0cy50cyIsIi8vdXNlcnMvb3JnYW5pemF0aW9ucy9pbmRleC50cyIsIi8vdXNlcnMvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiLy91c2Vycy9zdHVkZW50cy9pdGVtLnRzIiwiLy91c2Vycy9zdHVkZW50cy9wcm92aWRlci50cyIsIi8vdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU0sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLFFBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDckIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLFFBQVMsQ0FBQ0csTUFBTSxFQUFFLENB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