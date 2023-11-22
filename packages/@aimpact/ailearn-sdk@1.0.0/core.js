System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat@1.0.1/api", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Activity, Assessment, Assignment, Classroom, GClass, Topic, Lessons, Lesson, LearningModules, OldActivity, LearningModule, Sessions, Faces, Session, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assessment: void 0,
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
    Session: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Entities) {
      dependency_1 = _beyondJsReactive116Entities;
    }, function (_aimpactChat101Api) {
      dependency_2 = _aimpactChat101Api;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_4 = _aimpactAilearnApp0014Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_6 = _bgroupMediaManager100Uploader;
    }, function (_aimpactChatSdk100Core) {
      dependency_7 = _aimpactChatSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_9 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat/api', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@bgroup/media-manager/uploader', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9]]);
      ims = new Map();
      /*********************************************
      INTERNAL MODULE: ./assignments/activities/item
      *********************************************/
      ims.set('./assignments/activities/item', {
        hash: 1226896763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
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
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            constructor({
              id = undefined,
              assignmentId
            } = {
              id: undefined,
              assignmentId: undefined
            }) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Activities',
                //@ts-igonore
                provider: _provider.ActivityProvider
              });
              this.startup(assignmentId);
            }
            startup(assignmentId) {
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
              if (this.materials.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.data) {
                this.#tracking = this.data;
              }
              if (!status) {
                throw new Error(`Error loading assignment: ${error}`);
              }
              return data;
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
        hash: 3502753079,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _provider = require("./provider");
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          /*bundle*/
          class Assignment extends _entities.Item {
            properties = ['id', 'lesson', 'classRoomId', 'users'];
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
              this.#activities = data.activities;
              return data;
            }
            async access() {
              const specs = {
                id: this.id
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities = data.activities;
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
        hash: 2683824379,
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
              } = await this.#api.get(`/assignments/${specs.id}`);
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
      __pkg.exports.descriptor = [{
        "im": "./assignments/activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./assignments/assessment",
        "from": "Assessment",
        "name": "Assessment"
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./assignments/activities/item').Activity : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./assignments/assessment').Assessment : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcHJvdmlkZXIiLCJyZXF1aXJlIiwiX2VudGl0aWVzIiwiQWN0aXZpdHkiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJ0cmFja2luZyIsImFuYWx5c2lzIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFzc2Vzc21lbnQiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwibG9hZCIsInNwZWNzIiwiaXNSZWFkeSIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsInNldCIsImFjdGl2aXR5IiwibWF0ZXJpYWxzIiwiSlNPTiIsInBhcnNlIiwiRXJyb3IiLCJwdWJsaXNoIiwicGFyYW1zIiwidHlwZSIsInJlc3BvbnNlIiwic2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJwdWJsaXNoU3Bva2VuIiwiZXhwb3J0cyIsIl9hcGkiLCJfbW9kZWwiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsImFwaXMiLCJhaWxlYXJuIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ0b2tlbiIsImdldCIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0Iiwic3Bva2VuMSIsImxvZyIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsIl9jb3JlIiwiX2NvcmUyIiwiQXNzZXNzbWVudCIsImludGVyYWN0aW9uIiwiY2hhdCIsImNoYXRMb2FkZWQiLCJ1c2VySWQiLCJsb2FkSW50ZXJhY3Rpb24iLCJsb2FkZWQiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInNhdmVTZWxlY3Rpb24iLCJ0cmlnZ2VyIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkFzc2lnbm1lbnQiLCJ1cmwiLCJiYXNlVXJsIiwiYWNjZXNzZWQiLCJhY3Rpdml0aWVzIiwiQXNzaWdubWVudFByb3ZpZGVyIiwic2V0TW9kdWxlIiwiYWNjZXNzIiwiQ2xhc3Nyb29tIiwiYXNzaWdubWVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJDbGFzc3Jvb21Qcm92aWRlciIsInByb21pc2VzIiwiYXNzaWdubWVudCIsIlByb21pc2UiLCJhbGwiLCJyZWFkeSIsIkdDbGFzcyIsIkdDbGFzc2VzUHJvdmlkZXIiLCJFbGVtZW50IiwicGF0aCIsImNyZWF0ZSIsImZldGNoaW5nIiwiX0VsZW1lbnQiLCJFbGVtZW50cyIsIml0ZW1zIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJpbnN0YW5jZSIsIlByb2dyZXNzTWFuYWdlciIsInRvcGljc0VsZW1lbnRzIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwibGVzc29uUGVuZGluZ3MiLCJTZXQiLCJNQVhfVElNRSIsIklOVEVSVkFMIiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNzUGVuZGluZ3MiLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsImxlc3NvbkVsZW1lbnRzVXBkYXRlZCIsInRvcGljc1VwZGF0ZWQiLCJ0aW1lcyIsImdsb2JhbFRoaXMiLCJfcCIsImN1cnJlbnRUaW1lb3V0IiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJkZWxldGUiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiYWRkIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwiY29udGVudCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiX1RvcGljIiwiVG9waWNzIiwiZmlyc3RMb2FkZWQiLCJtYXAiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiY3VycmljdWx1bU9iamVjdGl2ZXMiLCJsYW5ndWFnZSIsIl9pdGVtIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJjIiwiX3V1aWQiLCJfVG9waWNzIiwiX1Byb2dyZXNzTWFuYWdlciIsImZpZWxkcyIsInNlc3Npb25zTWFwIiwibG9jYWxkYiIsIlByb3ZpZGVyTGVzc29uIiwiaW5pdGlhbGlzZSIsInJlYWN0aXZlUHJvcHMiLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsImluaXQiLCJoYXNPd25Qcm9wZXJ0eSIsIiNpbml0IiwidG9waWNUaXRsZXMiLCJ0IiwidjQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzZXNzbWVudHMiLCJzdHVkZW50cyIsImFnZSIsInNlc3Npb25zIiwiYWRkU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwibW9kdWxlSWQiLCJMZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZSIsIl9lbGVtZW50IiwiX2VsZW1lbnRzIiwiX2ludHJvZHVjdGlvbiIsIk9sZEFjdGl2aXR5IiwiQWN0aXZpdGllcyIsIl9hY3Rpdml0aWVzIiwiX3Byb2dyZXNzTWFuYWdlciIsIk1vZHVsZVByb3ZpZGVyIiwiYWN0aXZpdGllc1RpdGxlcyIsIlNlc3Npb25zIiwiU2Vzc2lvbiIsIkZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiYmFkIiwiaW5hcHByb3ByaWF0ZSIsInNldExlc3NvbiIsImxlc3NvbklkIiwidHJhY2UiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2NsYXNzcm9vbXMvaXRlbS50cyIsIi9jbGFzc3Jvb21zL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvbGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9sZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbkVsZW1lbnQudHMiLCIvbGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbGVzc29ucy9Qcm9ncmVzc01hbmFnZXIudHMiLCIvbGVzc29ucy9Ub3BpY3MvVG9waWMvaW5kZXgudHMiLCIvbGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCIvbGVzc29ucy9jb2xsZWN0aW9uLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVzc29ucy9pdGVtLnRzIiwiL2xlc3NvbnMvcHJvdmlkZXIudHMiLCIvbW9kdWxlcy9jb2xsZWN0aW9uLnRzIiwiL21vZHVsZXMvZWxlbWVudHMvZWxlbWVudC9pbmRleC50cyIsIi9tb2R1bGVzL2VsZW1lbnRzL2luZGV4LnRzIiwiL21vZHVsZXMvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvYWN0aXZpdHkvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL2luZGV4LnRzIiwiL21vZHVsZXMvaXRlbS9wcm92aWRlci50cyIsIi9tb2R1bGVzL3Byb2dyZXNzLW1hbmFnZXIudHMiLCIvc2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2ZhY2VzLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFNTztVQUFVLE1BQU9FLFFBQVMsU0FBUUQsU0FBQSxDQUFBRSxJQUFlO1lBQ3ZEOzs7WUFHVUMsVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixNQUFNLENBQUM7WUFBQSxDQUNQOztZQVVELENBQUFDLFlBQWE7WUFDYixDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNU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