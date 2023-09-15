System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.4/entities", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0", "@bgroup/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, GClass, Topic, Lessons, Lesson, Assessment, Sessions, Session, __beyond_pkg, hmr;
  _export({
    GClass: void 0,
    Topic: void 0,
    Lessons: void 0,
    Lesson: void 0,
    Assessment: void 0,
    Sessions: void 0,
    Session: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApi100Core) {
      dependency_1 = _aimpactAilearnApi100Core;
    }, function (_beyondJsReactive114Entities) {
      dependency_2 = _beyondJsReactive114Entities;
    }, function (_beyondJsReactive114Model) {
      dependency_3 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_9 = _bgroupMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-api/core', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat/api', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@bgroup/media-manager/uploader', dependency_9]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/
      ims.set('./gclasess/item', {
        hash: 511576394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _core = require("@aimpact/ailearn-api/core");
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
                provider: _core.GClassesProvider
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
        hash: 1014259069,
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
                if (!this.#parent.id) {
                  throw new Error('no LessonId to load introductions');
                }
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/chats/introductions/${this.#parent.id}`);
                console.log(10, data);
                if (!status) {
                  throw new Error('Introduction not found');
                }
                const elements = Object.values(data.elements);
                elements.forEach(element => {
                  const instance = new _IntroductionElement.IntroductionElement(element, this.#parent);
                  this.#items.set(element.type, instance);
                });
              } catch (e) {
                console.error('error introduction load', e);
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
        hash: 3272368324,
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
        hash: 977673658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lessons = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          var _item = require("./item");
          /*bundle*/
          class Lessons extends _entities.Collection {
            item = _item.Lesson;
            constructor() {
              super({
                storeName: 'Lessons',
                db: 'chat-api',
                provider: _core.LessonsProvider
              });
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
        hash: 34950413,
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
          var _item = require("../sessions/item");
          var _Elements = require("./Elements");
          var _Introduction = require("./Introduction");
          var _provider = require("./provider");
          var _ProgressManager = require("./ProgressManager");
          /*bundle*/
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
              super({
                id,
                db: 'chat-api',
                storeName: 'Lessons',
                provider: _provider.ProviderLesson
              });
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
                console.log(10, data);
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
                  const session = new _item.Session();
                  await session.isReady;
                  session.set({
                    id: item.id,
                    classRoomId: item.gclass.id,
                    lesson: {
                      id: data.id,
                      name: data.name
                    }
                  });
                  this.sessionsMap.set(item.gclass.id, session);
                });
              }
            }
            async addSession(classRoomId) {
              const specs = {
                lessonId: this.id,
                classRoomId
              };
              const response = await this.#api.post('/sessions', specs);
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
        hash: 126725589,
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
              if (specs.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
          }
          exports.ProviderLesson = ProviderLesson;
        }
      });

      /*************************************
      INTERNAL MODULE: ./sessions/assessment
      *************************************/

      ims.set('./sessions/assessment', {
        hash: 1923771925,
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
          /*bundle*/
          class Assessment extends _model.ReactiveModel {
            #api;
            #parent;
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
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            load = async id => {
              try {
                const data = await this.#api.bearer(_session.sessionWrapper.user.token).get(`/assessments/${id}/report`);
                if (!data.status) throw new Error('error loading assessment');
                this.#analysis = data.data.analysis ?? [];
                this.#feedback = data.data.feedback;
                this.#selection = data.data.selection;
                this.#competenciesFeedback = data.data.competenciesFeedback;
              } catch (e) {
                console.error(e);
              }
            };
            publish = async specs => {
              try {
                const props = Object.getOwnPropertyNames(specs);
                const form = new FormData();
                props.forEach(prop => {
                  form.append(prop, specs[prop]);
                });
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
                const response = await this.#api.post('/assessments/selection', specs);
                if (!response.status) throw new Error('error saving selection');
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
        hash: 2871552492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sessions = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          var _item = require("./item");
          /*bundle*/
          class Sessions extends _entities.Collection {
            item = _item.Session;
            constructor() {
              super({
                storeName: 'Sessions',
                db: 'chat-api',
                provider: _core.SessionsProvider
              });
            }
          }
          exports.Sessions = Sessions;
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
        hash: 4091973734,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Session = void 0;
          var _core = require("@aimpact/ailearn-api/core");
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
          /*bundle*/
          class Session extends _entities.Item {
            properties = ['id', 'lesson', 'classRoomId', 'users'];
            #lesson;
            get url() {
              return `${_config.default.params.baseUrl}/sessions/access/${this.id}`;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Sessions',
                provider: _core.SessionsProvider
              });
            }
            setLesson(parent) {
              this.#lesson = parent;
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
        "im": "./sessions/assessment",
        "from": "Assessment",
        "name": "Assessment"
      }, {
        "im": "./sessions/collection",
        "from": "Sessions",
        "name": "Sessions"
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
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'Topic') && _export("Topic", Topic = require ? require('./lessons/Topics/Topic/index').Topic : value);
        (require || prop === 'Lessons') && _export("Lessons", Lessons = require ? require('./lessons/collection').Lessons : value);
        (require || prop === 'Lesson') && _export("Lesson", Lesson = require ? require('./lessons/item').Lesson : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./sessions/assessment').Assessment : value);
        (require || prop === 'Sessions') && _export("Sessions", Sessions = require ? require('./sessions/collection').Sessions : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFPTztVQUFVLE1BQU9BLE1BQU8sU0FBUUMsY0FBZTtZQUMzQ0MsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQVV6Q0MsWUFBWTtjQUFFQyxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFRSxFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFVBQVU7Z0JBQUVDLFFBQVEsRUFBRUM7Y0FBZ0IsQ0FBRSxDQUFDO1lBQ2pGO1lBRUEsTUFBTUMsSUFBSSxDQUFDQyxLQUFLO2NBQ2YsTUFBTTtnQkFBRUMsTUFBTTtnQkFBRUMsS0FBSztnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxLQUFLLENBQUNKLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQ3ZELElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDBCQUEwQkYsS0FBSyxFQUFFLENBQUM7O2NBR25ELE9BQU9DLElBQUk7WUFDWjs7VUFDQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JEO1VBR0E7VUFDQTtVQUNBO1VBSU0sTUFBT0MsT0FBUSxTQUFRQyxvQkFBdUI7WUFJbkQsSUFBSTtZQUNKLE9BQU87WUFDUGhCLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztZQUMvQyxLQUFLLEdBQUcsRUFBRTtZQUNWQyxZQUFZZ0IsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Y0FDN0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLEtBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHRCxNQUFNO2NBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSUUsUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDUCxJQUFJLEdBQUdBLElBQUk7WUFDakI7WUFFQSxNQUFNUSxNQUFNO2NBQ1gsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLHVCQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUMzQyxNQUFNO2tCQUFFbkIsTUFBTTtrQkFBRUU7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzVCLEVBQUUsYUFBYSxJQUFJLENBQUNlLElBQUksRUFBRSxDQUFDO2dCQUN4RyxJQUFJLENBQUNQLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7Z0JBRXJDLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQ25CLElBQUksQ0FBQztnQkFDZDtlQUNBLENBQUMsT0FBT29CLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFcUIsQ0FBQyxDQUFDOztZQUVyQztZQUVBLE1BQU14QixJQUFJLENBQUNpQixNQUFnQjtjQUMxQixJQUFJO2dCQUNILElBQUksQ0FBQ1MsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLElBQUksQ0FBQyxJQUFJLENBQUNoQyxFQUFFLElBQUl1QixNQUFNLEVBQUU7a0JBQ3ZCLE1BQU0sSUFBSSxDQUFDQSxNQUFNLEVBQUU7a0JBQ25CLE9BQU8sSUFBSTs7Z0JBRVosSUFBSSxDQUFDLElBQUksQ0FBQ3ZCLEVBQUUsRUFBRSxPQUFPLEtBQUs7Z0JBQzFCLE1BQU1pQixJQUFJLEdBQUcscUJBQXFCLElBQUksQ0FBQ2pCLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQ3dCLE1BQU0sQ0FBQ0MsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU07a0JBQUVuQixNQUFNO2tCQUFFRTtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDdUIsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO2dCQUVsRCxJQUFJLENBQUNULE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7Z0JBR3JDLElBQUksQ0FBQ0QsSUFBSSxFQUFFO2tCQUNWcUIsT0FBTyxDQUFDRyxHQUFHLENBQUMsOEJBQThCLENBQUM7O2dCQUU1QyxJQUFJLENBQUNMLEdBQUcsQ0FBQ25CLElBQUksQ0FBQztlQUNkLENBQUMsT0FBT29CLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRXFCLENBQUMsQ0FBQztlQUNqQyxTQUFTO2dCQUNULElBQUksQ0FBQ0UsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE9BQU8sSUFBSTs7WUFFYjs7VUFDQXBCOzs7Ozs7Ozs7OztVQ25FRDs7VUFFQXVCO1lBQ0FDO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFJQTtVQU9NLE1BQU9DLFFBQVMsU0FBUXZCLG9CQUF3QjtZQUNyRCxNQUFNLEdBQUcsSUFBSXdCLEdBQUcsRUFBRTtZQUNsQixPQUFPO1lBRVAsS0FBSztZQUNMdkMsWUFBWWlCLE1BQXNCLEVBQUV1QixXQUFxQixFQUFFLEVBQUV0QixJQUFZO2NBQ3hFLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxPQUFPLEdBQUdELE1BQU07Y0FDckIsSUFBSSxDQUFDLEtBQUssR0FBR0MsSUFBSTtjQUNqQnNCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDekIsSUFBSSxJQUFHO2dCQUN2QixNQUFNMEIsT0FBTyxHQUFZLElBQUk1QixnQkFBTyxDQUFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRUUsSUFBSSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDWSxHQUFHLENBQUNkLElBQUksRUFBRTBCLE9BQU8sQ0FBQztjQUMvQixDQUFDLENBQUM7WUFDSDtZQUNBLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUFULEdBQUcsQ0FBQ2xCLElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNrQixHQUFHLENBQUNsQixJQUFJLENBQUM7WUFDN0I7WUFFQTRCLEdBQUcsQ0FBQzVCLElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNrQixHQUFHLENBQUNsQixJQUFJLENBQUMsRUFBRXFCLEtBQUs7WUFDcEM7WUFDQVAsR0FBRyxDQUFDVSxRQUFRO2NBQ1gsSUFBSSxDQUFDQSxRQUFRLEVBQUU7Z0JBQ2RSLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUNDLEtBQUssRUFBRU4sUUFBUSxDQUFDO2dCQUNuRTs7Y0FFREosTUFBTSxDQUFDVyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDQyxPQUFPLENBQUN6QixJQUFJLElBQUc7Z0JBQ3BDLE1BQU1nQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ3hCLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQ2tCLEdBQUcsQ0FBQ2xCLElBQUksQ0FBQyxDQUFDYyxHQUFHLENBQUNrQixJQUFJLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQXpDLElBQUksQ0FBQ21DLE9BQU87Y0FDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDRixPQUFPLENBQUMsRUFBRTtjQUMvQixNQUFNTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDUSxPQUFPLENBQUM7Y0FDckMsT0FBT00sSUFBSSxDQUFDekMsSUFBSSxFQUFFO1lBQ25COztVQUNBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREQ7VUFVTSxNQUFPb0MsbUJBQW9CLFNBQVFsQyxvQkFBbUM7WUFLM0UsT0FBTztZQUNQaEIsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDcENDLFlBQVkwQyxPQUE2QixFQUFFekIsTUFBc0I7Y0FDaEUsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJeUIsT0FBTyxDQUFDMUIsSUFBSSxLQUFLLFlBQVksRUFBRTBCLE9BQU8sQ0FBQ0wsS0FBSyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsT0FBTyxDQUFDTCxLQUFLLENBQUM7Y0FDNUUsSUFBSSxDQUFDUCxHQUFHLENBQUNZLE9BQU8sQ0FBQztZQUNsQjs7VUFDQTdCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBT00sTUFBT3VDLFlBQWEsU0FBUXJDLG9CQUE0QjtZQUM3RCxPQUFPO1lBQ1AsSUFBSTtZQUVKLE1BQU0sR0FBRyxJQUFJd0IsR0FBRyxFQUFFO1lBQ2xCLElBQUlJLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEzQyxZQUFZaUIsTUFBc0I7Y0FDakMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUlFLFFBQUcsQ0FBQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEO1lBRUEsTUFBTVcsR0FBRyxDQUFDbEIsSUFBWTtjQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNrQixHQUFHLENBQUNsQixJQUFJLENBQUM7WUFDN0I7WUFFQSxNQUFNVCxJQUFJO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ04sRUFBRSxFQUFFO2tCQUNyQixNQUFNLElBQUlXLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBR3JELElBQUksQ0FBQyxJQUFJLENBQUNhLE1BQU0sQ0FBQ0MsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU07a0JBQUVuQixNQUFNO2tCQUFFRTtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDdUIsR0FBRyxDQUFDLHdCQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDakMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZGK0IsT0FBTyxDQUFDRyxHQUFHLENBQUMsRUFBRSxFQUFFeEIsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUNGLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7Z0JBRzFDLE1BQU00QixRQUFRLEdBQTJCSixNQUFNLENBQUNpQixNQUFNLENBQUMxQyxJQUFJLENBQUM2QixRQUFRLENBQUM7Z0JBRXJFQSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO2tCQUMxQixNQUFNWSxRQUFRLEdBQUcsSUFBSUwsd0NBQW1CLENBQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2tCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDWixHQUFHLENBQUNZLE9BQU8sQ0FBQzFCLElBQUksRUFBRXNDLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDO2VBQ0YsQ0FBQyxPQUFPdkIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN0QixLQUFLLENBQUMseUJBQXlCLEVBQUVxQixDQUFDLENBQUM7O1lBRTdDOztVQUNBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckREO1VBR00sTUFBTzBDLGVBQWdCLFNBQVF4QyxvQkFBOEI7WUFDbEUsT0FBTztZQUNQLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7WUFDcEYsZUFBZSxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1lBQ3hFLElBQUl5QyxjQUFjO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDNUI7WUFFQSxJQUFJQyxhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDNUI7WUFDQSxlQUFlLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ25CQyxRQUFRLEdBQUcsRUFBRTtZQUNiQyxRQUFRLEdBQUcsSUFBSTtZQUN2QixJQUFJQyxxQkFBcUI7Y0FDeEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNqQztZQUNBLGVBQWUsR0FBRyxJQUFJdEIsR0FBRyxFQUFFO1lBQzNCLElBQUl1QixvQkFBb0I7Y0FDdkIsT0FBTyxJQUFJLENBQUMsZUFBZTtZQUM1QjtZQUVBLHNCQUFzQixHQUFhLEVBQUU7WUFDckMsSUFBSUMscUJBQXFCO2NBQ3hCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjtZQUNuQztZQUVBLGNBQWMsR0FBRyxJQUFJeEIsR0FBRyxFQUFFO1lBQzFCLElBQUl5QixhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDM0I7WUFDQSxNQUFNLEdBQUcsQ0FBQztZQUNWaEUsWUFBWWlCLE1BQU07Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNyQmdELFVBQVUsQ0FBQ0MsRUFBRSxHQUFHLElBQUk7Y0FDcEJELFVBQVUsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7WUFDM0I7WUFFQSxlQUFlO1lBQ2ZDLGtCQUFrQixHQUFHMUIsT0FBTyxJQUFHO2NBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMyQixRQUFRLENBQUMzQixPQUFPLENBQUMsRUFBRTtjQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUM0QixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDQyxPQUFPLENBQUM3QixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Y0FDbkYsSUFBSSxDQUFDOEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1lBQ3BDLENBQUM7WUFFREMsaUJBQWlCLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFaEMsT0FBTyxLQUFJO2NBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDRSxHQUFHLENBQUM4QixPQUFPLENBQUMsRUFBRTtjQUN2QyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQ3pDLEdBQUcsQ0FBQ3dDLE9BQU8sQ0FBQztjQUM5QyxJQUFJLENBQUNDLEtBQUssQ0FBQy9CLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLEVBQUU7Y0FDekJpQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ2xDLE9BQU8sQ0FBQztjQUNyQixJQUFJLENBQUM4QixZQUFZLENBQUMsU0FBU0UsT0FBTyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUNERyxPQUFPLENBQUNsRSxJQUFJO2NBQ1hzRCxVQUFVLENBQUN0RCxJQUFJLEdBQUdBLElBQUk7Y0FDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtjQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTRCLEdBQUcsRUFBRTtjQUUvQixJQUFJdUMsYUFBYSxHQUFHLEtBQUs7Y0FDekIsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUV2QyxPQUFPLEtBQUk7Z0JBQ3ZELElBQUkvQixJQUFJLENBQUM2QixRQUFRLENBQUNFLE9BQU8sQ0FBQyxFQUFFekMsRUFBRSxFQUFFO2tCQUMvQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMyQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxFQUFFO29CQUN0Q29DLGFBQWEsR0FBRyxJQUFJO29CQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUNJLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQztvQkFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQ2tDLE1BQU0sQ0FBQ2xDLE9BQU8sQ0FBQzs7a0JBRXJDLE9BQU91QyxHQUFHOztnQkFHWCxJQUFJLENBQUMsZUFBZSxDQUFDRSxHQUFHLENBQUN6QyxPQUFPLENBQUM7Z0JBQ2pDLE9BQU91QyxHQUFHLEdBQUcsQ0FBQztjQUNmLENBQUMsRUFBRSxDQUFDLENBQUM7Y0FFTCxJQUFJSCxhQUFhLEVBQUUsSUFBSSxDQUFDTixZQUFZLENBQUMsZ0JBQWdCLENBQUM7Y0FFdEQ3RCxJQUFJLENBQUN5RSxNQUFNLENBQUMzQyxPQUFPLENBQUNrQyxLQUFLLElBQUc7Z0JBQzNCLElBQUlVLFlBQVksR0FBRyxLQUFLO2dCQUV4QixJQUFJLENBQUMsZUFBZSxDQUFDNUMsT0FBTyxDQUFDQyxPQUFPLElBQUc7a0JBQ3RDLE1BQU00QyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQ3BELEdBQUcsQ0FBQ3lDLEtBQUssQ0FBQzFFLEVBQUUsQ0FBQyxJQUFJLElBQUl5RCxHQUFHLEVBQUU7a0JBRXJFLElBQUk0QixhQUFhLENBQUMxQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxJQUFJaUMsS0FBSyxDQUFDbkMsUUFBUSxDQUFDRSxPQUFPLENBQUMsRUFBRXpDLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMyQyxHQUFHLENBQUMrQixLQUFLLENBQUMxRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDNkIsR0FBRyxDQUFDNkMsS0FBSyxDQUFDMUUsRUFBRSxFQUFFLElBQUl5RCxHQUFHLEVBQUUsQ0FBQztvQkFDcEYsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDZCxHQUFHLENBQUMrQixLQUFLLENBQUMxRSxFQUFFLENBQUMsRUFBRTtzQkFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQ2lDLEdBQUcsQ0FBQ3lDLEtBQUssQ0FBQzFFLEVBQUUsQ0FBQyxDQUFDMkUsTUFBTSxDQUFDbEMsT0FBTyxDQUFDOztvQkFFbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQ1IsR0FBRyxDQUFDeUMsS0FBSyxDQUFDMUUsRUFBRSxDQUFDLENBQUNrRixHQUFHLENBQUN6QyxPQUFPLENBQUM7b0JBQzlDMkMsWUFBWSxHQUFHLElBQUk7O2tCQUdwQixJQUFJLENBQUNWLEtBQUssQ0FBQ25DLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLEVBQUV6QyxFQUFFLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDMkMsR0FBRyxDQUFDK0IsS0FBSyxDQUFDMUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzZCLEdBQUcsQ0FBQzZDLEtBQUssQ0FBQzFFLEVBQUUsRUFBRSxJQUFJeUQsR0FBRyxFQUFFLENBQUM7b0JBQ3RGLElBQUksQ0FBQyxlQUFlLENBQUN4QixHQUFHLENBQUN5QyxLQUFLLENBQUMxRSxFQUFFLENBQUMsQ0FBQ2tGLEdBQUcsQ0FBQ3pDLE9BQU8sQ0FBQztvQkFFL0NxQyxJQUFJLEVBQUU7O2dCQUVSLENBQUMsQ0FBQztnQkFDRixJQUFJTSxZQUFZLEVBQUU7a0JBQ2pCLElBQUksQ0FBQ2IsWUFBWSxDQUFDLFNBQVNHLEtBQUssQ0FBQzFFLEVBQUUsVUFBVSxDQUFDOztjQUVoRCxDQUFDLENBQUM7Y0FFRixJQUFJOEUsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQ3BCLFFBQVEsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBR00sVUFBVSxDQUFDc0IsVUFBVSxDQUFDLE1BQUs7a0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUNoRixJQUFJLENBQUM7b0JBQUU0RCxRQUFRLEVBQUU7a0JBQUksQ0FBRSxDQUFDO2dCQUN0QyxDQUFDLEVBQUUsSUFBSSxDQUFDUCxRQUFRLENBQUM7O1lBRW5CO1lBRUE0QixLQUFLO2NBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQ0EsS0FBSyxFQUFFO2NBQzVCLElBQUksQ0FBQyxlQUFlLENBQUNBLEtBQUssRUFBRTtjQUM1QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtjQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUlqRCxHQUFHLEVBQUU7Y0FDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO2NBQ2YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFMEIsVUFBVSxDQUFDd0IsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDeEU7O1VBQ0E1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4SEQ7VUFDQTtVQUNBO1VBQ0E7VUFNQTtVQUVBO1VBRU87VUFBVyxNQUFPNkUsS0FBTSxTQUFRM0Usb0JBQXFCO1lBSTNELElBQUk7WUFDSixPQUFPO1lBQ1AsU0FBUyxHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUM5RWhCLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO1lBQ3ZDLGFBQWE7WUFDYixJQUFJNEYsRUFBRTtjQUNMLE9BQU8sT0FBTztZQUNmO1lBRUEsa0JBQWtCO1lBQ2xCLElBQUlDLGlCQUFpQjtjQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0I7WUFDL0I7WUFFQSxTQUFTO1lBQ1QsSUFBSXBELFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0EsTUFBTTtZQUNOLE9BQU87WUFDUCxJQUFJcUQsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQTdGLFlBQVlXLElBQUksRUFBRW1GLE1BQWMsRUFBRUQsS0FBSyxHQUFHLENBQUM7Y0FDMUMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBR0MsTUFBTTtjQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHRCxLQUFLO2NBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSXZELGtCQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7Y0FDckUsSUFBSSxDQUFDUixHQUFHLENBQUNuQixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUlRLFFBQUcsQ0FBQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJNkIsMEJBQVksQ0FBQyxJQUFJLENBQUM7WUFDakQ7WUFFQSxNQUFNN0MsSUFBSSxDQUFDQyxRQUErQixFQUFFO2NBQzNDLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRThEO2dCQUFPLENBQUUsR0FBR3ZGLEtBQUs7Z0JBRXpCLElBQUksSUFBSSxDQUFDNkIsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDWixNQUFNLENBQUNDLHVCQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUUzQyxNQUFNb0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQzlELEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUNqQyxFQUFFLFdBQVcsSUFBSSxDQUFDQSxFQUFFLEVBQUUsQ0FBQztnQkFDckYsSUFBSSxDQUFDK0YsUUFBUSxDQUFDdkYsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQ29GLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDOztnQkFFbEMsSUFBSSxDQUFDRCxRQUFRLENBQUNyRixJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0wQyxNQUFNLEdBQUc7a0JBQUUsR0FBRzJDLFFBQVEsQ0FBQ3JGO2dCQUFJLENBQUU7Z0JBRW5DLElBQUksQ0FBQzZCLFFBQVEsQ0FBQ1YsR0FBRyxDQUFDa0UsUUFBUSxDQUFDckYsSUFBSSxDQUFDNkIsUUFBUSxDQUFDO2dCQUN6QyxPQUFPYSxNQUFNLENBQUNiLFFBQVE7Z0JBRXRCLElBQUksQ0FBQ1YsR0FBRyxDQUFDdUIsTUFBTSxDQUFDO2dCQUNoQixJQUFJMEMsT0FBTyxFQUFFO2tCQUNaLE1BQU0vQyxJQUFJLEdBQVksSUFBSSxDQUFDUixRQUFRLENBQUNHLEtBQUssQ0FBQ1QsR0FBRyxDQUFDLFNBQVMsQ0FBQztrQkFDeEQsTUFBTWMsSUFBSSxDQUFDekMsSUFBSSxFQUFFOztnQkFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO2VBQ25CLENBQUMsT0FBT3dCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEIsS0FBSyxDQUFDcUIsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFDQSxNQUFNaUUsZUFBZSxDQUFDQyxJQUFZO2NBQ2pDLElBQUk7Z0JBQ0gsTUFBTXpELE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUNSLEdBQUcsQ0FBQ2lFLElBQUksQ0FBQztnQkFDOUMsTUFBTXpELE9BQU8sQ0FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU9tQyxPQUFPO2VBQ2QsQ0FBQyxPQUFPWCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3RCLEtBQUssQ0FBQ3FCLENBQUMsQ0FBQztnQkFDaEIsT0FBTzdCLFNBQVM7O1lBRWxCO1lBRUE0QixHQUFHLENBQUNuQixJQUFJO2NBQ1AsSUFBSVUsTUFBTSxHQUFHO2dCQUFFLEdBQUdWO2NBQUksQ0FBRTtjQUN4QixJQUFJQSxJQUFJLENBQUM2QixRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0EsUUFBUSxDQUFDVixHQUFHLENBQUNuQixJQUFJLENBQUM2QixRQUFRLENBQUM7Z0JBQ2hDLE9BQU9uQixNQUFNLENBQUNtQixRQUFROztjQUd2QixLQUFLLENBQUNWLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO1lBQ2xCOztVQUNBUjs7Ozs7Ozs7Ozs7VUNyR0Q7O1VBRUF1QjtZQUNBQztVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBRUE7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUtNLE1BQU8rRCxNQUFPLFNBQVFyRixvQkFBc0I7WUFDakQsTUFBTSxHQUFHLElBQUl3QixHQUFHLEVBQUU7WUFDbEIsT0FBTztZQUNQLFlBQVk7WUFDWixJQUFJO1lBQ0p2QyxZQUFZOEYsTUFBYztjQUN6QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUkzRSxRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHdUUsTUFBTTtZQUN0QjtZQUNBLElBQUluRCxLQUFLO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ1UsTUFBTSxFQUFFLENBQUM7WUFDakM7WUFFQSxJQUFJZ0QsR0FBRztjQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQWxCLEdBQUcsQ0FBQ0MsTUFBTTtjQUNUQSxNQUFNLENBQUMzQyxPQUFPLENBQUMsQ0FBQ2tDLEtBQUssRUFBRWtCLEtBQUssS0FBSTtnQkFDL0IsTUFBTXZDLFFBQVEsR0FBRyxJQUFJb0MsWUFBSyxDQUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRWtCLEtBQUssQ0FBQztnQkFDdEQsTUFBTVMsR0FBRyxHQUFHM0IsS0FBSyxDQUFDMUUsRUFBRSxJQUFJMEUsS0FBSyxDQUFDN0IsS0FBSztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ3dFLEdBQUcsRUFBRWhELFFBQVEsQ0FBQztjQUMvQixDQUFDLENBQUM7WUFDSDtZQUVBLE1BQU1wQixHQUFHLENBQUNsQixJQUFJO2NBQ2IsT0FBTyxJQUFJLENBQUMyQixLQUFLLENBQUM0RCxJQUFJLENBQUN2RCxJQUFJLElBQUlBLElBQUksQ0FBQ2hDLElBQUksS0FBS0EsSUFBSSxDQUFDO2NBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQ2tCLEdBQUcsQ0FBQ2xCLElBQUksQ0FBQztZQUM3QjtZQUVBLE1BQU13RixTQUFTO2NBQ2QsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJQyxvQkFBYyxFQUFFO2dCQUN4QyxNQUFNOUIsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQyxDQUFDLENBQVU7Z0JBQ3BDLE1BQU1nQyxLQUFLLENBQUNwRSxJQUFJLENBQUM7a0JBQUV3RixPQUFPLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2VBQ25DLENBQUMsT0FBT2hFLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEIsS0FBSyxDQUFDLDJCQUEyQixFQUFFcUIsQ0FBQyxDQUFDOztZQUUvQztZQUVBLE1BQU0yRSxRQUFRLENBQUNDLG1CQUFtQjtjQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDbEYsTUFBTSxDQUFDQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNb0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQzlELEdBQUcsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDNUQwRSxvQkFBb0IsRUFBRUQsbUJBQW1CO2dCQUN6Q0UsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUNBO2VBQ3ZCLENBQUM7Y0FDRixJQUFJLENBQUNiLFFBQVEsQ0FBQ3ZGLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7O2NBRXhDLE9BQU9vRixRQUFRLENBQUNyRixJQUFJLENBQUN5RSxNQUFNO1lBQzVCOztVQUNBdkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVEO1VBQ0E7VUFDQTtVQUVPO1VBQVUsTUFBT2lHLE9BQVEsU0FBUUMsb0JBQVU7WUFDakQvRCxJQUFJLEdBQUdnRSxZQUFNO1lBQ2JoSDtjQUNDLEtBQUssQ0FBQztnQkFBRUksU0FBUyxFQUFFLFNBQVM7Z0JBQUVELEVBQUUsRUFBRSxVQUFVO2dCQUFFRSxRQUFRLEVBQUU0RztjQUFlLENBQUUsQ0FBQztZQUMzRTs7VUFDQXBHOzs7Ozs7Ozs7OztVQ1REOztVQUVBdUI7WUFDQUM7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFFQTtVQUNBO1VBT087VUFBVSxNQUFPMkUsTUFBTyxTQUFRbEgsY0FBYTtZQUN6Q0MsVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixxQkFBcUIsRUFDckI7Y0FDQ29HLElBQUksRUFBRSxRQUFRO2NBQ2RuRixJQUFJLEVBQUU7YUFDTixFQUNELFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLENBQ2I7WUFFRCxJQUFJMkUsRUFBRTtjQUNMLE9BQU8sUUFBUTtZQUNoQjtZQUNBLFNBQVM7WUFDVCxJQUFJbkQsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFFQSxrQkFBa0I7WUFDbEIsSUFBSW9ELGlCQUFpQjtjQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0I7WUFDL0I7WUFFQSxTQUFTLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7WUFFbEUsT0FBTztZQUNQLFlBQVksR0FBeUIsSUFBSXJELEdBQUcsRUFBRTtZQUU5QyxJQUFJMkUsV0FBVztjQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7WUFFQSxTQUFTO1lBRVQsSUFBSUMsY0FBYztjQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBQ0EsSUFBSTtZQUNKLE9BQU87WUFDUCxJQUFJL0IsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDcEI7WUFDQSxhQUFhO1lBQ2IsSUFBSWdDLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCO1lBQ0EsU0FBUztZQUNULElBQUlqRCxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBbkUsWUFBWTtjQUFFQyxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFRSxFQUFFLEVBQUUsVUFBVTtnQkFBRUMsU0FBUyxFQUFFLFNBQVM7Z0JBQUVDLFFBQVEsRUFBRWdIO2NBQWMsQ0FBRSxDQUFDO2NBQzdFLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Y0FDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJaEYsa0JBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7Y0FDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJOEQsY0FBTSxDQUFDLElBQUksQ0FBQztjQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUlqRixRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSTZCLDBCQUFZLENBQUMsSUFBSSxDQUFDO2NBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSUcsZ0NBQWUsQ0FBQyxJQUFJLENBQUM7Y0FDMUMsSUFBSSxDQUFDZ0UsUUFBUSxHQUFHO2dCQUFFQyxlQUFlLEVBQUU7Y0FBQyxDQUFFO2NBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYjtZQUVBLE1BQU1DLFdBQVcsQ0FBQzlHLElBQUk7Y0FDckIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Z0JBQ1ZxQixPQUFPLENBQUNHLEdBQUcsQ0FBQyxFQUFFLEVBQUV4QixJQUFJLENBQUM7Z0JBQ3JCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUV2QyxJQUFJRCxJQUFJLENBQUN5RSxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUNELEdBQUcsQ0FBQ3hFLElBQUksQ0FBQ3lFLE1BQU0sQ0FBQzs7Y0FFOUIsTUFBTTtnQkFBRTVDO2NBQVEsQ0FBRSxHQUFHN0IsSUFBSTtjQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHNkIsUUFBUTtjQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDcUMsT0FBTyxDQUFDbEUsSUFBSSxDQUFDO2NBQzVCLElBQUk2QixRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDekIsSUFBSSxJQUFHO2tCQUM3QixJQUFJLENBQUN3QixRQUFRLENBQUNrRixjQUFjLENBQUMxRyxJQUFJLENBQUMsRUFBRTtrQkFDcEMsTUFBTWdDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDTCxLQUFLLENBQUNULEdBQUcsQ0FBQ2xCLElBQUksQ0FBQztrQkFDM0NnQyxJQUFJLEVBQUVsQixHQUFHLENBQUNVLFFBQVEsQ0FBQ3hCLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUM7Z0JBRUYsSUFBSXdCLFFBQVEsRUFBRXVELE9BQU8sRUFBRTtrQkFDdEIsTUFBTXJELE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUNSLEdBQUcsQ0FBQyxTQUFTLENBQUM7a0JBQ25ELE1BQU1RLE9BQU8sQ0FBQ25DLElBQUksRUFBRTs7O1lBR3ZCO1lBQ0EsTUFBTSxLQUFLO2NBQ1YsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQ29ILE9BQU87Z0JBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7ZUFDakIsQ0FBQyxPQUFPN0YsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN0QixLQUFLLENBQUNxQixDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTThGLE9BQU87Y0FDWjtjQUVBLE1BQU16QyxNQUFNLEdBQUcsSUFBSSxDQUFDMEMsV0FBVyxDQUFDekIsR0FBRyxDQUFDMEIsQ0FBQyxLQUFLO2dCQUFFOUgsRUFBRSxFQUFFLFlBQU0sR0FBRTtnQkFBRTZDLEtBQUssRUFBRWlGO2NBQUMsQ0FBRSxDQUFDLENBQUM7Y0FDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQzVDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDO2NBQ3hCLE1BQU1yRixVQUFVLEdBQUcsSUFBSSxDQUFDaUksYUFBYSxFQUFFO2NBRXZDakksVUFBVSxDQUFDUyxLQUFLLEdBQUc7Z0JBQ2xCcUcsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtnQkFDdkJVLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7Z0JBQ3ZCVSxXQUFXLEVBQUU7a0JBQUVULGVBQWUsRUFBRTtnQkFBQyxDQUFFO2dCQUNuQ1UsUUFBUSxFQUFFO2tCQUFFQyxHQUFHLEVBQUU7Z0JBQUU7ZUFDbkI7Y0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDMUcsTUFBTSxDQUFDQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNb0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ25FLElBQUksQ0FBQyxVQUFVLEVBQUU5QixVQUFVLENBQUM7Y0FDN0Q7Y0FDQSxPQUFPaUcsUUFBUTtZQUNoQjtZQUVBLE1BQU1sRSxHQUFHLENBQUNuQixJQUFJO2NBQ2IsS0FBSyxDQUFDbUIsR0FBRyxDQUFDbkIsSUFBSSxDQUFDO2NBRWYsSUFBSUEsSUFBSSxDQUFDeUUsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDRCxHQUFHLENBQUN4RSxJQUFJLENBQUN5RSxNQUFNLENBQUM7O2NBRTlCLElBQUl6RSxJQUFJLENBQUN5SCxRQUFRLEVBQUU7Z0JBQ2xCekgsSUFBSSxDQUFDeUgsUUFBUSxDQUFDM0YsT0FBTyxDQUFDLE1BQU1PLElBQUksSUFBRztrQkFDbEMsTUFBTXFGLE9BQU8sR0FBRyxJQUFJQyxhQUFPLEVBQUU7a0JBQzdCLE1BQU1ELE9BQU8sQ0FBQ1YsT0FBTztrQkFDckJVLE9BQU8sQ0FBQ3ZHLEdBQUcsQ0FBQztvQkFDWDdCLEVBQUUsRUFBRStDLElBQUksQ0FBQy9DLEVBQUU7b0JBQ1hzSSxXQUFXLEVBQUV2RixJQUFJLENBQUN3RixNQUFNLENBQUN2SSxFQUFFO29CQUMzQjZGLE1BQU0sRUFBRTtzQkFDUDdGLEVBQUUsRUFBRVUsSUFBSSxDQUFDVixFQUFFO3NCQUNYa0csSUFBSSxFQUFFeEYsSUFBSSxDQUFDd0Y7O21CQUVaLENBQUM7a0JBQ0YsSUFBSSxDQUFDZSxXQUFXLENBQUNwRixHQUFHLENBQUNrQixJQUFJLENBQUN3RixNQUFNLENBQUN2SSxFQUFFLEVBQUVvSSxPQUFPLENBQUM7Z0JBQzlDLENBQUMsQ0FBQzs7WUFFSjtZQUVBLE1BQU1JLFVBQVUsQ0FBQ0YsV0FBbUI7Y0FDbkMsTUFBTS9ILEtBQUssR0FBRztnQkFBRWtJLFFBQVEsRUFBRSxJQUFJLENBQUN6SSxFQUFFO2dCQUFFc0k7Y0FBVyxDQUFFO2NBRWhELE1BQU12QyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDbkUsSUFBSSxDQUFDLFdBQVcsRUFBRXJCLEtBQUssQ0FBQztjQUN6RCxJQUFJLENBQUN3RixRQUFRLENBQUN2RixNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSUcsS0FBSyxDQUFDb0YsUUFBUSxDQUFDdEYsS0FBSyxDQUFDOztjQUdoQyxPQUFPc0YsUUFBUSxDQUFDckYsSUFBSTtZQUNyQjtZQUVBLE1BQU11RixlQUFlLENBQUNDLElBQVk7Y0FDakMsSUFBSTtnQkFDSCxNQUFNekQsT0FBTyxHQUFhLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQ1IsR0FBRyxDQUFDaUUsSUFBSSxDQUFDO2dCQUN4RCxNQUFNekQsT0FBTyxDQUFDZ0UsUUFBUSxFQUFFO2dCQUN4QixPQUFPaEUsT0FBTztlQUNkLENBQUMsT0FBT1gsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN0QixLQUFLLENBQUNxQixDQUFDLENBQUM7Z0JBQ2hCLE9BQU83QixTQUFTOztZQUVsQjtZQUVBMEMsR0FBRyxDQUFDRixPQUFPO2NBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDTSxJQUFJLENBQUNKLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO1lBQ3hDOztVQUNBN0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUxEO1VBQ0E7VUFDQTtVQUNBO1VBSU0sTUFBT3dHLGNBQWUsU0FBUXRHLG9CQUE2QjtZQUNoRSxJQUFJO1lBQ0osT0FBTztZQUNQLFNBQVM7WUFDVGYsWUFBWWlCLE1BQWM7Y0FDekIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJRSxRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsT0FBTyxHQUFHTixNQUFNO1lBQ3RCO1lBQ0FWLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ2lCLE1BQU0sQ0FBQ0MsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTTtnQkFBRW5CLE1BQU07Z0JBQUVFO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ3VCLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUNqQyxFQUFFLEVBQUUsQ0FBRztjQUU3RSxJQUFJLENBQUNRLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Y0FFdkMsSUFBSUosS0FBSyxDQUFDMkQsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQ3NELFdBQVcsQ0FBQzlHLElBQUksQ0FBQztjQUV4RCxPQUFPO2dCQUFFRixNQUFNO2dCQUFFRTtjQUFJLENBQUU7WUFDeEIsQ0FBQzs7VUFDREU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JEO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFHTztVQUFVLE1BQU84SCxVQUFXLFNBQVE1SCxvQkFBeUI7WUFDbkUsSUFBSTtZQUNKLE9BQU87WUFFUCxxQkFBcUI7WUFDckIsSUFBSTZILG9CQUFvQjtjQUN2QixPQUFPLElBQUksQ0FBQyxxQkFBcUI7WUFDbEM7WUFDQSxTQUFTO1lBQ1QsSUFBSUMsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFDQSxTQUFTLEdBQVUsRUFBRTtZQUNyQixJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLFVBQVU7WUFDVixJQUFJQyxTQUFTO2NBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTtZQUN2QjtZQUNBL0k7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUltQixRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBaEIsSUFBSSxHQUFHLE1BQU1OLEVBQUUsSUFBRztjQUNqQixJQUFJO2dCQUNILE1BQU1VLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNjLE1BQU0sQ0FBQ0MsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ00sR0FBRyxDQUFDLGdCQUFnQmpDLEVBQUUsU0FBUyxDQUFDO2dCQUMvRixJQUFJLENBQUNVLElBQUksQ0FBQ0YsTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDBCQUEwQixDQUFDO2dCQUU3RCxJQUFJLENBQUMsU0FBUyxHQUFHRCxJQUFJLENBQUNBLElBQUksQ0FBQ21JLFFBQVEsSUFBSSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHbkksSUFBSSxDQUFDQSxJQUFJLENBQUNrSSxRQUFRO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHbEksSUFBSSxDQUFDQSxJQUFJLENBQUNvSSxTQUFTO2dCQUVyQyxJQUFJLENBQUMscUJBQXFCLEdBQUdwSSxJQUFJLENBQUNBLElBQUksQ0FBQ2lJLG9CQUFvQjtlQUMzRCxDQUFDLE9BQU83RyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3RCLEtBQUssQ0FBQ3FCLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVEOEYsT0FBTyxHQUFHLE1BQU1ySCxLQUFLLElBQUc7Y0FDdkIsSUFBSTtnQkFDSCxNQUFNd0ksS0FBSyxHQUFHNUcsTUFBTSxDQUFDNkcsbUJBQW1CLENBQUN6SSxLQUFLLENBQUM7Z0JBQy9DLE1BQU0wSSxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2dCQUMzQkgsS0FBSyxDQUFDdkcsT0FBTyxDQUFDMkcsSUFBSSxJQUFHO2tCQUNwQkYsSUFBSSxDQUFDRyxNQUFNLENBQUNELElBQUksRUFBRTVJLEtBQUssQ0FBQzRJLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUM7Z0JBRUYsTUFBTUUsR0FBRyxHQUFHLElBQUlDLG1CQUFTLEVBQUU7Z0JBQzNCRCxHQUFHLENBQUM3SCxNQUFNLENBQUNDLHVCQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUNyQyxNQUFNb0UsUUFBUSxHQUFHLE1BQU1zRCxHQUFHLENBQUNFLE1BQU0sQ0FBQ04sSUFBSSxFQUFFLEdBQUc5SCxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLHFCQUFxQixDQUFDO2dCQUMzRixNQUFNa0ksSUFBSSxHQUFHLE1BQU16RCxRQUFRLENBQUN5RCxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQ0EsSUFBSSxDQUFDaEosTUFBTSxFQUFFO2tCQUNqQixNQUFNLElBQUlHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Z0JBRS9DLElBQUksQ0FBQyxTQUFTLEdBQUc2SSxJQUFJLENBQUM5SSxJQUFJLENBQUNtSSxRQUFRO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHVyxJQUFJLENBQUM5SSxJQUFJLENBQUNrSSxRQUFRO2dCQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUdZLElBQUksQ0FBQzlJLElBQUksQ0FBQ2lJLG9CQUFvQjtnQkFDM0QsSUFBSSxDQUFDcEUsWUFBWSxFQUFFO2dCQUNuQixPQUFPaUYsSUFBSSxDQUFDOUksSUFBSTtlQUNoQixDQUFDLE9BQU9vQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3RCLEtBQUssQ0FBQ3FCLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVEMkgsYUFBYSxHQUFHLE1BQU1sSixLQUFLLElBQUc7Y0FDN0IsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDaUIsTUFBTSxDQUFDQyx1QkFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTW9FLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNuRSxJQUFJLENBQUMsd0JBQXdCLEVBQUVyQixLQUFLLENBQUM7Z0JBQ3RFLElBQUksQ0FBQ3dGLFFBQVEsQ0FBQ3ZGLE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztlQUMvRCxDQUFDLE9BQU9tQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3RCLEtBQUssQ0FBQ3FCLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQzs7VUFDRGxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGRDtVQUNBO1VBQ0E7VUFFTztVQUFVLE1BQU84SSxRQUFTLFNBQVE1QyxvQkFBVTtZQUNsRC9ELElBQUksR0FBR3NGLGFBQU87WUFDZHRJO2NBQ0MsS0FBSyxDQUFDO2dCQUFFSSxTQUFTLEVBQUUsVUFBVTtnQkFBRUQsRUFBRSxFQUFFLFVBQVU7Z0JBQUVFLFFBQVEsRUFBRXVKO2NBQWdCLENBQUUsQ0FBQztZQUM3RTs7VUFDQS9JOzs7Ozs7Ozs7OztVQ1REOztVQUVBdUI7WUFDQUM7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQTtVQVVPO1VBQVUsTUFBT2lHLE9BQVEsU0FBUXhJLGNBQWM7WUFDM0NDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztZQUUvRCxPQUFPO1lBVVAsSUFBSThKLEdBQUc7Y0FDTixPQUFPLEdBQUd6SSxlQUFNLENBQUNDLE1BQU0sQ0FBQ3lJLE9BQU8sb0JBQW9CLElBQUksQ0FBQzdKLEVBQUUsRUFBRTtZQUM3RDtZQUVBRCxZQUFZO2NBQUVDLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVFLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsVUFBVTtnQkFBRUMsUUFBUSxFQUFFdUo7Y0FBZ0IsQ0FBRSxDQUFDO1lBQ2pGO1lBRUFHLFNBQVMsQ0FBQzlJLE1BQWM7Y0FDdkIsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBLE1BQU1WLElBQUksQ0FBQ0MsS0FBSztjQUNmLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDSixJQUFJLENBQUNDLEtBQUssQ0FBQztjQUN2RCxJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEJGLEtBQUssRUFBRSxDQUFDOztjQUduRCxPQUFPQyxJQUFJO1lBQ1o7WUFFQTs7OztZQUlBLE1BQU1rSCxPQUFPLENBQUNhLFFBQWdCLEVBQUVILFdBQW1CO2NBQ2xEdkcsT0FBTyxDQUFDZ0ksS0FBSyxDQUFDLGtCQUFrQixFQUFFdEIsUUFBUSxFQUFFSCxXQUFXLENBQUM7Y0FDeEQsTUFBTXZDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQzNGLFFBQVEsQ0FBQ3dILE9BQU8sQ0FBQ2EsUUFBUSxFQUFFSCxXQUFXLENBQUM7Y0FDbkUsSUFBSSxDQUFDdkMsUUFBUSxDQUFDdkYsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0JvRixRQUFRLENBQUN0RixLQUFLLEVBQUUsQ0FBQzs7Y0FHMUQsT0FBTztnQkFBRUQsTUFBTSxFQUFFdUYsUUFBUSxDQUFDdkYsTUFBTTtnQkFBRUUsSUFBSSxFQUFFcUYsUUFBUSxFQUFFckY7Y0FBSSxDQUFFO1lBQ3pEO1lBRUEsTUFBTXNKLE1BQU0sQ0FBQ3JJLEtBQWE7Y0FDekIsTUFBTXNJLEdBQUcsR0FBRyxJQUFJL0ksUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsTUFBTWYsS0FBSyxHQUFHO2dCQUFFaUIsTUFBTSxFQUFFRyxLQUFLO2dCQUFFM0IsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRTVDLE1BQU0rRixRQUFRLEdBQUcsTUFBTWtFLEdBQUcsQ0FBQ3JJLElBQUksQ0FBQyxrQkFBa0IsRUFBRXJCLEtBQUssQ0FBQztjQUMxRCxPQUFPd0YsUUFBUTtZQUNoQjs7VUFDQW5GIiwibmFtZXMiOlsiR0NsYXNzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkdDbGFzc2VzUHJvdmlkZXIiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJFcnJvciIsImV4cG9ydHMiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwYXJlbnQiLCJwYXRoIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjcmVhdGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInBvc3QiLCJzZXQiLCJlIiwiY29uc29sZSIsImZldGNoaW5nIiwiZ2V0IiwibG9nIiwiT2JqZWN0IiwidmFsdWUiLCJFbGVtZW50cyIsIk1hcCIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtcyIsImhhcyIsIndhcm4iLCJ0aXRsZSIsImtleXMiLCJpdGVtIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsIkpTT04iLCJwYXJzZSIsIkludHJvZHVjdGlvbiIsInZhbHVlcyIsImluc3RhbmNlIiwiUHJvZ3Jlc3NNYW5hZ2VyIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwiU2V0IiwiTUFYX1RJTUUiLCJJTlRFUlZBTCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsImdsb2JhbFRoaXMiLCJfcCIsInByb2dyZXNzIiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJkZWxldGUiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiYWRkIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibGVzc29uIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJUb3BpY3MiLCJtYXAiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsImxhbmd1YWdlIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwiZWxlbWVudHNEYXRhIiwiUHJvdmlkZXJMZXNzb24iLCJyZWFjdGl2ZVByb3BzIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJwcm9jZXNzTG9hZCIsImhhc093blByb3BlcnR5IiwiaXNSZWFkeSIsInJlYWR5IiwicHVibGlzaCIsInRvcGljVGl0bGVzIiwidCIsImdldFByb3BlcnRpZXMiLCJhc3Nlc3NtZW50cyIsInN0dWRlbnRzIiwiYWdlIiwic2Vzc2lvbnMiLCJzZXNzaW9uIiwiU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwiZ2NsYXNzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiQXNzZXNzbWVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiZmVlZGJhY2siLCJhbmFseXNpcyIsInNlbGVjdGlvbiIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2F2ZVNlbGVjdGlvbiIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyIsImFwaSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZ2NsYXNlc3MvaXRlbS50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbnRlcmZhY2UudHMiLCJsZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwibGVzc29ucy9Qcm9ncmVzc01hbmFnZXIudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pbnRlcmZhY2VzLnRzIiwibGVzc29ucy9pdGVtLnRzIiwibGVzc29ucy9wcm92aWRlci50cyIsInNlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCJzZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwic2Vzc2lvbnMvaW50ZXJmYWNlcy9JRXZhbHVhdGlvbi50cyIsInNlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19