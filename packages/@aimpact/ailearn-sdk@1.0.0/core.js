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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVxRixRQUFRLEVBQUVyRjtjQUFJLENBQUU7WUFDekQ7WUFFQSxNQUFNb0osTUFBTSxDQUFDbkksS0FBYTtjQUN6QixNQUFNb0ksR0FBRyxHQUFHLElBQUk3SSxRQUFHLENBQUNDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxNQUFNZixLQUFLLEdBQUc7Z0JBQUVpQixNQUFNLEVBQUVHLEtBQUs7Z0JBQUUzQixFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUU7Y0FFNUMsTUFBTStGLFFBQVEsR0FBRyxNQUFNZ0UsR0FBRyxDQUFDbkksSUFBSSxDQUFDLGtCQUFrQixFQUFFckIsS0FBSyxDQUFDO2NBQzFELE9BQU93RixRQUFRO1lBQ2hCOztVQUNBbkYiLCJuYW1lcyI6WyJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIkVsZW1lbnQiLCJSZWFjdGl2ZU1vZGVsIiwidHlwZSIsInBhcmVudCIsInBhdGgiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImNyZWF0ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJnZXQiLCJsb2ciLCJPYmplY3QiLCJ2YWx1ZSIsIkVsZW1lbnRzIiwiTWFwIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIml0ZW1zIiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiSlNPTiIsInBhcnNlIiwiSW50cm9kdWN0aW9uIiwidmFsdWVzIiwiaW5zdGFuY2UiLCJQcm9ncmVzc01hbmFnZXIiLCJsZXNzb25FbGVtZW50cyIsInRvcGljRWxlbWVudHMiLCJTZXQiLCJNQVhfVElNRSIsIklOVEVSVkFMIiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwiZ2xvYmFsVGhpcyIsIl9wIiwicHJvZ3Jlc3MiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJ0b3BpYyIsImRlbGV0ZSIsInByb2Nlc3MiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsInB1c2giLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiVG9waWMiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwib3JkZXIiLCJsZXNzb24iLCJjb250ZW50IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2VuZXJhdGVFbGVtZW50IiwibmFtZSIsIlRvcGljcyIsIm1hcCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwiZWxlbWVudHNEYXRhIiwiUHJvdmlkZXJMZXNzb24iLCJyZWFjdGl2ZVByb3BzIiwicHJvY2Vzc0xvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsImlzUmVhZHkiLCJyZWFkeSIsInB1Ymxpc2giLCJ0b3BpY1RpdGxlcyIsInQiLCJnZXRQcm9wZXJ0aWVzIiwic2Vzc2lvbnMiLCJzZXNzaW9uIiwiU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwiZ2NsYXNzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiY2FsbCIsInN0dWRlbnRUZXh0IiwiYXN3ZXIiLCJhbmFseXNpcyIsInN1YmplY3QiLCJldmFsdWF0aW9uIiwiZ3JhZGUiLCJBc3Nlc3NtZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJmZWVkYmFjayIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCJsZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2l0ZW0udHMiLCJsZXNzb25zL3Byb3ZpZGVyLnRzIiwic2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsInNlc3Npb25zL2NvbGxlY3Rpb24udHMiLCJzZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19