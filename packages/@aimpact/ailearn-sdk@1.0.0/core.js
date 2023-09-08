System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.4/entities", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_aimpactMediaManager100Uploader) {
      dependency_9 = _aimpactMediaManager100Uploader;
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
      __pkg.dependencies.update([['@aimpact/ailearn-api/core', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat/api', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@aimpact/media-manager/uploader', dependency_9]]);
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
        hash: 3057534875,
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
        hash: 1649836954,
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
              if (left > 0 && this.#times < 20) {
                this.#currentTimeout = globalThis.setTimeout(() => {
                  this.#parent.load({
                    progress: true
                  });
                }, 5000);
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
        hash: 1739170069,
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
                curriculumObjectives: curriculumObjective
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

      /******************************
      INTERNAL MODULE: ./lessons/item
      ******************************/

      ims.set('./lessons/item', {
        hash: 2664567929,
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
            }, 'status', 'content', 'userId', 'sessions'];
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
        hash: 444380346,
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
          var _uploader = require("@aimpact/media-manager/uploader");
          const call = {
            lessonId: 'dc9a070e-e3ee-4fe3-b90a-ed7a569fdf49',
            studentText: 'Este conflicto, que ocurrió hace más de un siglo, cambió el curso de la historia y moldeó el mundo tal y como lo conocemos hoy. Pero, ¿qué lo causó? ¿Quiénes estuvieron involucrados? ¿Cómo se desarrolló y cuáles fueron sus consecuencias? Estas son solo algunas de las preguntas que vamos a responder. Nuestro objetivo es que comprendas las causas de la Primera Guerra Mundial, conozcas a los principales actores involucrados y sus alianzas, entiendas cómo se desarrolló el conflicto y qué sucedió en los países en guerra, y finalmente, descubras las consecuencias y los tratados de paz que pusieron fin a este devastador conflicto. Este conocimiento no solo te ayudará a entender mejor la historia, sino que también te permitirá comprender cómo los eventos del pasado pueden influir en el presente y el futuro. Además, te ayudará a desarrollar habilidades de pensamiento crítico y análisis, que son esenciales en muchas áreas de la vida. Cada uno de estos temas está interconectado. Las causas de la guerra influyeron en quiénes se involucraron y cómo se formaron las alianzas. El desarrollo del conflicto afectó la vida en los países en guerra, y las consecuencias y tratados de paz fueron directamente influenciados por las etapas y batallas clave de la guerra.'
          };
          const aswer = {
            status: true,
            data: {
              analysis: [{
                subject: 'Comprensión del Texto',
                evaluation: 'Julio, has demostrado una buena comprensión del texto original. Has identificado correctamente los conceptos clave y los has presentado de manera clara.',
                grade: 'very good'
              }, {
                subject: 'Coherencia y Cohesión',
                evaluation: 'Tu texto es coherente y cohesivo. Has presentado las ideas en una secuencia lógica y las has conectado de manera efectiva.',
                grade: 'very good'
              }, {
                subject: 'Paráfrasis y Síntesis',
                evaluation: 'Has hecho un buen trabajo al reformular el contenido en tus propias palabras y al sintetizar los puntos clave.',
                grade: 'very good'
              }, {
                subject: 'Vocabulario',
                evaluation: 'Has utilizado un vocabulario apropiado para describir y discutir el tema.',
                grade: 'very good'
              }, {
                subject: 'Precisión en los Detalles',
                evaluation: 'Has adherido a los hechos y argumentos presentados en el texto original.',
                grade: 'very good'
              }, {
                subject: 'Opinión Crítica',
                evaluation: 'No has ofrecido una evaluación o perspectiva propia basada en tu comprensión del texto. Para mejorar, podrías intentar incluir tus propias ideas o reflexiones sobre el tema.',
                grade: 'regular'
              }]
            }
          };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1rSSxHQUFHLEdBQUcsSUFBSTNJLFFBQUcsQ0FBQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLE1BQU1mLEtBQUssR0FBRztnQkFBRWlCLE1BQU0sRUFBRUcsS0FBSztnQkFBRTNCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRTtjQUU1QyxNQUFNNkYsUUFBUSxHQUFHLE1BQU1nRSxHQUFHLENBQUNqSSxJQUFJLENBQUMsa0JBQWtCLEVBQUVyQixLQUFLLENBQUM7Y0FDMUQsT0FBT3NGLFFBQVE7WUFDaEI7O1VBQ0FqRiIsIm5hbWVzIjpbIkdDbGFzcyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiRWxlbWVudCIsIlJlYWN0aXZlTW9kZWwiLCJ0eXBlIiwicGFyZW50IiwicGF0aCIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsInZhbHVlIiwiRWxlbWVudHMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaXRlbXMiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsIlNldCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsImdsb2JhbFRoaXMiLCJfcCIsInByb2dyZXNzIiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJkZWxldGUiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiYWRkIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibGVzc29uIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJUb3BpY3MiLCJtYXAiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uIiwiTGVzc29uc1Byb3ZpZGVyIiwic2Vzc2lvbnNNYXAiLCJ0b3BpY3NFbGVtZW50cyIsImVsZW1lbnRzRGF0YSIsIlByb3ZpZGVyTGVzc29uIiwicmVhY3RpdmVQcm9wcyIsInByb2Nlc3NMb2FkIiwiaGFzT3duUHJvcGVydHkiLCJpc1JlYWR5IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImNhbGwiLCJzdHVkZW50VGV4dCIsImFzd2VyIiwiYW5hbHlzaXMiLCJzdWJqZWN0IiwiZXZhbHVhdGlvbiIsImdyYWRlIiwiQXNzZXNzbWVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiZmVlZGJhY2siLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyIsImFwaSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZ2NsYXNlc3MvaXRlbS50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbnRlcmZhY2UudHMiLCJsZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwibGVzc29ucy9Qcm9ncmVzc01hbmFnZXIudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pdGVtLnRzIiwibGVzc29ucy9wcm92aWRlci50cyIsInNlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCJzZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwic2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==