System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_3 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_4 = _aimpactAilearnApp0014Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_7 = _bgroupMediaManager100Uploader;
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@bgroup/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['uuid', dependency_9]]);
      ims = new Map();
      /*********************************************
      INTERNAL MODULE: ./assignments/activities/item
      *********************************************/
      ims.set('./assignments/activities/item', {
        hash: 4003068185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _entities.Item {
            /**
             * TODO: Add activity properties
             */
            properties = ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'materials', 'chat'];
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
              if (!status) {
                throw new Error(`Error loading assignment: ${error}`);
              }
              return data;
            }
            async publish(data) {
              try {
                const response = await this.provider.publish(data);
                // this.#assessment = JSON.parse(response.data)
                //this.triggerEvent();
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
        hash: 435422512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
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
        hash: 1738953627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiQWN0aXZpdHkiLCJJdGVtIiwicHJvcGVydGllcyIsImFzc2lnbm1lbnRJZCIsInVzZXIiLCJtb2R1bGUiLCJhc3Nlc3NtZW50IiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic3RhcnR1cCIsImxvYWQiLCJzcGVjcyIsImlzUmVhZHkiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJzZXQiLCJhY3Rpdml0eSIsIm1hdGVyaWFscyIsIkpTT04iLCJwYXJzZSIsIkVycm9yIiwicHVibGlzaCIsInJlc3BvbnNlIiwiZSIsImNvbnNvbGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwiZ2V0IiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIl9jb3JlIiwiX3VwbG9hZGVyIiwiX2NvcmUyIiwiQXNzZXNzbWVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInNlbGVjdGlvbiIsImludGVyYWN0aW9uIiwiY2hhdCIsImNoYXRMb2FkZWQiLCJ1c2VySWQiLCJsb2FkSW50ZXJhY3Rpb24iLCJsb2FkZWQiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNhdmVTZWxlY3Rpb24iLCJwb3N0IiwidHJpZ2dlciIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJBc3NpZ25tZW50IiwidXJsIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwiYWN0aXZpdGllcyIsIkFzc2lnbm1lbnRQcm92aWRlciIsInNldE1vZHVsZSIsImFjY2VzcyIsIkNsYXNzcm9vbSIsImFzc2lnbm1lbnRzIiwiTWFwIiwidmFsdWVzIiwiQ2xhc3Nyb29tUHJvdmlkZXIiLCJwcm9taXNlcyIsImFzc2lnbm1lbnQiLCJQcm9taXNlIiwiYWxsIiwicmVhZHkiLCJHQ2xhc3MiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwiRWxlbWVudCIsInBhdGgiLCJ0eXBlIiwiY3JlYXRlIiwiZmV0Y2hpbmciLCJsb2ciLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJfSW50cm9kdWN0aW9uRWxlbWVudCIsIkludHJvZHVjdGlvbiIsImluc3RhbmNlIiwiUHJvZ3Jlc3NNYW5hZ2VyIiwidG9waWNzRWxlbWVudHMiLCJsZXNzb25FbGVtZW50cyIsInRvcGljRWxlbWVudHMiLCJsZXNzb25QZW5kaW5ncyIsIlNldCIsIk1BWF9USU1FIiwiSU5URVJWQUwiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY3NQZW5kaW5ncyIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInRpbWVzIiwiZ2xvYmFsVGhpcyIsIl9wIiwiY3VycmVudFRpbWVvdXQiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJ0b3BpYyIsImRlbGV0ZSIsInByb2Nlc3MiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsInB1c2giLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiX0VsZW1lbnRzIiwiX0ludHJvZHVjdGlvbiIsIlRvcGljIiwibGVzc29uIiwiRUxFTUVOVFMiLCJlbGVtZW50c0RhdGEiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwib3JkZXIiLCJjb250ZW50IiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJfVG9waWMiLCJUb3BpY3MiLCJmaXJzdExvYWRlZCIsIm1hcCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsImxhbmd1YWdlIiwiX2l0ZW0iLCJMZXNzb25zIiwiQ29sbGVjdGlvbiIsIkxlc3NvbiIsImMiLCJfdXVpZCIsIl9Ub3BpY3MiLCJfUHJvZ3Jlc3NNYW5hZ2VyIiwiZmllbGRzIiwic2Vzc2lvbnNNYXAiLCJsb2NhbGRiIiwiUHJvdmlkZXJMZXNzb24iLCJpbml0aWFsaXNlIiwicmVhY3RpdmVQcm9wcyIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiaW5pdCIsImhhc093blByb3BlcnR5IiwiI2luaXQiLCJ0b3BpY1RpdGxlcyIsInQiLCJ2NCIsImdldFByb3BlcnRpZXMiLCJhc3Nlc3NtZW50cyIsInN0dWRlbnRzIiwiYWdlIiwic2Vzc2lvbnMiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJtb2R1bGVJZCIsIkxlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlIiwiX2VsZW1lbnQiLCJfZWxlbWVudHMiLCJfaW50cm9kdWN0aW9uIiwiT2xkQWN0aXZpdHkiLCJBY3Rpdml0aWVzIiwiX2FjdGl2aXRpZXMiLCJfcHJvZ3Jlc3NNYW5hZ2VyIiwiTW9kdWxlUHJvdmlkZXIiLCJhY3Rpdml0aWVzVGl0bGVzIiwiU2Vzc2lvbnMiLCJTZXNzaW9uIiwiRmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwic2V0TGVzc29uIiwibGVzc29uSWQiLCJ0cmFjZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvY2xhc3Nyb29tcy9pdGVtLnRzIiwiL2NsYXNzcm9vbXMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9sZXNzb25zL0VsZW1lbnRzL0VsZW1lbnQvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCIvbGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9sZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsIi9sZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsIi9sZXNzb25zL1RvcGljcy9pbmRleC50cyIsIi9sZXNzb25zL2NvbGxlY3Rpb24udHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZXNzb25zL2l0ZW0udHMiLCIvbGVzc29ucy9wcm92aWRlci50cyIsIi9tb2R1bGVzL2NvbGxlY3Rpb24udHMiLCIvbW9kdWxlcy9lbGVtZW50cy9lbGVtZW50L2luZGV4LnRzIiwiL21vZHVsZXMvZWxlbWVudHMvaW5kZXgudHMiLCIvbW9kdWxlcy9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9tb2R1bGVzL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9hY3Rpdml0eS9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9tb2R1bGVzL2l0ZW0vaW5kZXgudHMiLCIvbW9kdWxlcy9pdGVtL3Byb3ZpZGVyLnRzIiwiL21vZHVsZXMvcHJvZ3Jlc3MtbWFuYWdlci50cyIsIi9zZXNzaW9ucy9hc3Nlc3NtZW50LnRzIiwiL3Nlc3Npb25zL2NvbGxlY3Rpb24udHMiLCIvc2Vzc2lvbnMvZmFjZXMudHMiLCIvc2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVUsTUFBT0UsUUFBUyxTQUFRSCxTQUFBLENBQUFJLElBQWU7WUFDdkQ7OztZQUdVQyxVQUFVLEdBQUcsQ0FDdEIsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxDQUNOO1lBVUQsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUlGLFlBQVlBLENBQUE7Y0FDZixPQUFPLElB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