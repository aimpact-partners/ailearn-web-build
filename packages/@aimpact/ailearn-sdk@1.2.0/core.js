System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@beyond-js/reactive@2.0.5/entities/item", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/users"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_2 = _beyondJsReactive205EntitiesItem;
    }, function (_aimpactChatSdk154Core) {
      dependency_3 = _aimpactChatSdk154Core;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_6 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_7 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_11 = _aimpactAilearnApp042ModelWrapper;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_12 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Users) {
      dependency_13 = _aimpactChatSdk154Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.1"]]);
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
        hash: 3248434388,
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
                console.log(2, this.type);
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
        hash: 632583417,
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
        hash: 2812375437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
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
        hash: 3642099447,
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
                this.#api.bearer(this.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzZWxlY3Rpb24iLCJlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJlbmRwb2ludHMiLCJ3cml0dGVuIiwiaGFuZHdyaXR0ZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJfY29yZSIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsImNoYXQiLCJjaGF0TG9hZGVkIiwidXNlcklkIiwibG9hZEludGVyYWN0aW9uIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJDaGF0IiwibG9hZEFsbCIsInJlc29sdmUiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfd3JhcHBlciIsImluc3RhbmNlcyIsInVybCIsInNldHRpbmdzIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsInJlc3RvcmUiLCJhcmNoaXZlIiwidGV4dCIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZldGNoaW5nIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJhbnN3ZXIiLCJnZXRUb2tlbiIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi91c2Vycy9hcmNoaXZlL2NvbGxlY3Rpb24udHMiLCIvdXNlcnMvYXJjaGl2ZS9pdGVtLnRzIiwiL3VzZXJzL2FyY2hpdmUvcHJvdmlkZXIudHMiLCIvY29pbnMudHMiLCIvcGVvcGxlLnRzIiwiL3VzZXIudHMiLCIvdXNlcnMvbWV0YWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXQtZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdHMudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pbmRleC50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9wcm92aWRlci50cyIsIi91c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUND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