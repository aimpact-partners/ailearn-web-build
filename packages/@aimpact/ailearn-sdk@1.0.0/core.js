System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.6/entities", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0", "@bgroup/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_beyondJsReactive116Entities) {
      dependency_2 = _beyondJsReactive116Entities;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
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
        hash: 985030634,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztjQUN4RCxNQUFNdkMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDM0YsUUFBUSxDQUFDd0gsT0FBTyxDQUFDYSxRQUFRLEVBQUVILFdBQVcsQ0FBQztjQUNuRSxJQUFJLENBQUN2QyxRQUFRLENBQUN2RixNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUF3Qm9GLFFBQVEsQ0FBQ3RGLEtBQUssRUFBRSxDQUFDOztjQUcxRCxPQUFPO2dCQUFFRCxNQUFNLEVBQUV1RixRQUFRLENBQUN2RixNQUFNO2dCQUFFRSxJQUFJLEVBQUVxRixRQUFRLEVBQUVyRjtjQUFJLENBQUU7WUFDekQ7WUFFQSxNQUFNc0osTUFBTSxDQUFDckksS0FBYTtjQUN6QixNQUFNc0ksR0FBRyxHQUFHLElBQUkvSSxRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxNQUFNZixLQUFLLEdBQUc7Z0JBQUVpQixNQUFNLEVBQUVHLEtBQUs7Z0JBQUUzQixFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUU7Y0FFNUMsTUFBTStGLFFBQVEsR0FBRyxNQUFNa0UsR0FBRyxDQUFDckksSUFBSSxDQUFDLGtCQUFrQixFQUFFckIsS0FBSyxDQUFDO2NBQzFELE9BQU93RixRQUFRO1lBQ2hCOztVQUNBbkYiLCJuYW1lcyI6WyJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIkVsZW1lbnQiLCJSZWFjdGl2ZU1vZGVsIiwidHlwZSIsInBhcmVudCIsInBhdGgiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImNyZWF0ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJnZXQiLCJsb2ciLCJPYmplY3QiLCJ2YWx1ZSIsIkVsZW1lbnRzIiwiTWFwIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIml0ZW1zIiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiSlNPTiIsInBhcnNlIiwiSW50cm9kdWN0aW9uIiwidmFsdWVzIiwiaW5zdGFuY2UiLCJQcm9ncmVzc01hbmFnZXIiLCJsZXNzb25FbGVtZW50cyIsInRvcGljRWxlbWVudHMiLCJTZXQiLCJNQVhfVElNRSIsIklOVEVSVkFMIiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwiZ2xvYmFsVGhpcyIsIl9wIiwicHJvZ3Jlc3MiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJ0b3BpYyIsImRlbGV0ZSIsInByb2Nlc3MiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsInB1c2giLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiVG9waWMiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwib3JkZXIiLCJsZXNzb24iLCJjb250ZW50IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2VuZXJhdGVFbGVtZW50IiwibmFtZSIsIlRvcGljcyIsIm1hcCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwibGFuZ3VhZ2UiLCJMZXNzb25zIiwiQ29sbGVjdGlvbiIsIkxlc3NvbiIsIkxlc3NvbnNQcm92aWRlciIsInNlc3Npb25zTWFwIiwidG9waWNzRWxlbWVudHMiLCJlbGVtZW50c0RhdGEiLCJQcm92aWRlckxlc3NvbiIsInJlYWN0aXZlUHJvcHMiLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsInByb2Nlc3NMb2FkIiwiaGFzT3duUHJvcGVydHkiLCJpc1JlYWR5IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0UHJvcGVydGllcyIsImFzc2Vzc21lbnRzIiwic3R1ZGVudHMiLCJhZ2UiLCJzZXNzaW9ucyIsInNlc3Npb24iLCJTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJnY2xhc3MiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJBc3Nlc3NtZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJmZWVkYmFjayIsImFuYWx5c2lzIiwic2VsZWN0aW9uIiwicHJvcHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJzYXZlU2VsZWN0aW9uIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCJsZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2ludGVyZmFjZXMudHMiLCJsZXNzb25zL2l0ZW0udHMiLCJsZXNzb25zL3Byb3ZpZGVyLnRzIiwic2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsInNlc3Npb25zL2NvbGxlY3Rpb24udHMiLCJzZXNzaW9ucy9pbnRlcmZhY2VzL0lFdmFsdWF0aW9uLnRzIiwic2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=