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
        hash: 767796497,
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
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Lessons',
                db: 'chat-api',
                provider: _core.LessonsProvider,
                item: _item.Lesson
              });
              console.log(1, 'collection constructor');
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
        hash: 3633691717,
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
        hash: 2825385073,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDeEYsTUFBTTtnQkFBRUUsSUFBSSxFQUFFc0YsUUFBUSxFQUFFdEY7Y0FBSSxDQUFFO1lBQ3pEO1lBRUEsTUFBTXVKLE1BQU0sQ0FBQ3RJLEtBQWE7Y0FDekIsTUFBTXVJLEdBQUcsR0FBRyxJQUFJaEosUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsTUFBTWYsS0FBSyxHQUFHO2dCQUFFaUIsTUFBTSxFQUFFRyxLQUFLO2dCQUFFM0IsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRTVDLE1BQU1nRyxRQUFRLEdBQUcsTUFBTWtFLEdBQUcsQ0FBQ3RJLElBQUksQ0FBQyxrQkFBa0IsRUFBRXJCLEtBQUssQ0FBQztjQUMxRCxPQUFPeUYsUUFBUTtZQUNoQjs7VUFDQXBGIiwibmFtZXMiOlsiR0NsYXNzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkdDbGFzc2VzUHJvdmlkZXIiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJFcnJvciIsImV4cG9ydHMiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwYXJlbnQiLCJwYXRoIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjcmVhdGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInBvc3QiLCJzZXQiLCJlIiwiY29uc29sZSIsImZldGNoaW5nIiwiZ2V0IiwibG9nIiwiT2JqZWN0IiwidmFsdWUiLCJFbGVtZW50cyIsIk1hcCIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtcyIsImhhcyIsIndhcm4iLCJ0aXRsZSIsImtleXMiLCJpdGVtIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsIkpTT04iLCJwYXJzZSIsIkludHJvZHVjdGlvbiIsImlzUmVhZHkiLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsIlNldCIsIk1BWF9USU1FIiwiSU5URVJWQUwiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsImxlc3NvbkVsZW1lbnRzVXBkYXRlZCIsInRvcGljc1VwZGF0ZWQiLCJnbG9iYWxUaGlzIiwiX3AiLCJwcm9ncmVzcyIsImNsZWFyTGVzc29uVXBkYXRlZCIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsInRyaWdnZXJFdmVudCIsImNsZWFyVG9waWNVcGRhdGVkIiwidG9waWNJZCIsInRvcGljIiwiZGVsZXRlIiwicHJvY2VzcyIsImxlc3NvbkNoYW5nZXMiLCJsZWZ0IiwicmVkdWNlIiwiYWNjIiwicHVzaCIsImFkZCIsInRvcGljcyIsInRvcGljQ2hhbmdlcyIsImxhc3RUb3BpY0RhdGEiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJjbGVhclRpbWVvdXQiLCJUb3BpYyIsImlzIiwiY2hhdEludHJvZHVjdGlvbnMiLCJvcmRlciIsImxlc3NvbiIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiVG9waWNzIiwibWFwIiwia2V5IiwiZmluZCIsImxvYWRGaXJzdCIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiY3VycmljdWx1bU9iamVjdGl2ZXMiLCJsYW5ndWFnZSIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uc1Byb3ZpZGVyIiwiTGVzc29uIiwiYyIsInNlc3Npb25zTWFwIiwidG9waWNzRWxlbWVudHMiLCJlbGVtZW50c0RhdGEiLCJsb2NhbGRiIiwiUHJvdmlkZXJMZXNzb24iLCJpbml0aWFsaXNlIiwicmVhY3RpdmVQcm9wcyIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwicHJvY2Vzc0xvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYWR5IiwicHVibGlzaCIsInRvcGljVGl0bGVzIiwidCIsImdldFByb3BlcnRpZXMiLCJhc3Nlc3NtZW50cyIsInN0dWRlbnRzIiwiYWdlIiwic2Vzc2lvbnMiLCJhZGRTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJsZXNzb25JZCIsIkFzc2Vzc21lbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImZlZWRiYWNrIiwiYW5hbHlzaXMiLCJzZWxlY3Rpb24iLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNhdmVTZWxlY3Rpb24iLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCJsZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2ludGVyZmFjZXMudHMiLCJsZXNzb25zL2l0ZW0udHMiLCJsZXNzb25zL3Byb3ZpZGVyLnRzIiwic2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsInNlc3Npb25zL2NvbGxlY3Rpb24udHMiLCJzZXNzaW9ucy9pbnRlcmZhY2VzL0lFdmFsdWF0aW9uLnRzIiwic2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=