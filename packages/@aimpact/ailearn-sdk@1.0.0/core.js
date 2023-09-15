System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.5/entities", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0", "@bgroup/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Entities) {
      dependency_2 = _beyondJsReactive115Entities;
    }, function (_beyondJsReactive115Model) {
      dependency_3 = _beyondJsReactive115Model;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiSlNPTiIsInBhcnNlIiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlByb2dyZXNzTWFuYWdlciIsInRvcGljc0VsZW1lbnRzIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwibGVzc29uUGVuZGluZ3MiLCJTZXQiLCJNQVhfVElNRSIsIklOVEVSVkFMIiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNzUGVuZGluZ3MiLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsImxlc3NvbkVsZW1lbnRzVXBkYXRlZCIsInRvcGljc1VwZGF0ZWQiLCJ0aW1lcyIsImdsb2JhbFRoaXMiLCJfcCIsInByb2dyZXNzIiwiY3VycmVudFRpbWVvdXQiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJ0b3BpYyIsImRlbGV0ZSIsInByb2Nlc3MiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsInB1c2giLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiX0VsZW1lbnRzIiwiX0ludHJvZHVjdGlvbiIsIlRvcGljIiwibGVzc29uIiwiRUxFTUVOVFMiLCJlbGVtZW50c0RhdGEiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwib3JkZXIiLCJsb2FkZWQiLCJjb250ZW50IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2VuZXJhdGVFbGVtZW50IiwibmFtZSIsIl9Ub3BpYyIsIlRvcGljcyIsImZpcnN0TG9hZGVkIiwibWFwIiwia2V5IiwiZmluZCIsImxvYWRGaXJzdCIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiY3VycmljdWx1bU9iamVjdGl2ZXMiLCJsYW5ndWFnZSIsIl9pdGVtIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJfdXVpZCIsIl9Ub3BpY3MiLCJfcHJvdmlkZXIiLCJfUHJvZ3Jlc3NNYW5hZ2VyIiwiZmllbGRzIiwic2Vzc2lvbnNNYXAiLCJQcm92aWRlckxlc3NvbiIsInJlYWN0aXZlUHJvcHMiLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsImluaXQiLCJwcm9jZXNzTG9hZCIsImhhc093blByb3BlcnR5IiwiI2luaXQiLCJpc1JlYWR5IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwidjQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzZXNzbWVudHMiLCJzdHVkZW50cyIsImFnZSIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsIl91cGxvYWRlciIsIkFzc2Vzc21lbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJzZWxlY3Rpb24iLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNhdmVTZWxlY3Rpb24iLCJTZXNzaW9ucyIsIlNlc3Npb25zUHJvdmlkZXIiLCJ1cmwiLCJiYXNlVXJsIiwic2V0TGVzc29uIiwidHJhY2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvZ2NsYXNlc3MvaXRlbS50cyIsIi9sZXNzb25zL0VsZW1lbnRzL0VsZW1lbnQvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCIvbGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9sZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsIi9sZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsIi9sZXNzb25zL1RvcGljcy9pbmRleC50cyIsIi9sZXNzb25zL2NvbGxlY3Rpb24udHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZXNzb25zL2l0ZW0udHMiLCIvbGVzc29ucy9wcm92aWRlci50cyIsIi9zZXNzaW9ucy9hc3Nlc3NtZW50LnRzIiwiL3Nlc3Npb25zL2NvbGxlY3Rpb24udHMiLCIvSUV2YWx1YXRpb24udHMiLCIvc2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGws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