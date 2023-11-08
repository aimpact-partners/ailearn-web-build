System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@0.2.0/core", "@beyond-js/reactive@1.1.6/entities", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, GClass, Topic, Lessons, Lesson, Assessment, Sessions, Faces, Session, __beyond_pkg, hmr;
  _export({
    GClass: void 0,
    Topic: void 0,
    Lessons: void 0,
    Lesson: void 0,
    Assessment: void 0,
    Sessions: void 0,
    Faces: void 0,
    Session: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApi020Core) {
      dependency_1 = _aimpactAilearnApi020Core;
    }, function (_beyondJsReactive116Entities) {
      dependency_2 = _beyondJsReactive116Entities;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_5 = _aimpactAilearnApp0014Config;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_9 = _bgroupMediaManager100Uploader;
    }, function (_aimpactChatSdk100Core) {
      dependency_10 = _aimpactChatSdk100Core;
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
      __pkg.dependencies.update([['@aimpact/ailearn-api/core', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat/api', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@bgroup/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/
      ims.set('./gclasess/item', {
        hash: 3708070689,
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
        hash: 4129740885,
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
        hash: 1971259130,
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
        hash: 331044424,
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
                storeName: 'Sessions',
                provider: _core.SessionsProvider
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
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'Topic') && _export("Topic", Topic = require ? require('./lessons/Topics/Topic/index').Topic : value);
        (require || prop === 'Lessons') && _export("Lessons", Lessons = require ? require('./lessons/collection').Lessons : value);
        (require || prop === 'Lesson') && _export("Lesson", Lesson = require ? require('./lessons/item').Lesson : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiSlNPTiIsInBhcnNlIiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJpc1JlYWR5IiwidmFsdWVzIiwiaW5zdGFuY2UiLCJQcm9ncmVzc01hbmFnZXIiLCJ0b3BpY3NFbGVtZW50cyIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsImxlc3NvblBlbmRpbmdzIiwiU2V0IiwiTUFYX1RJTUUiLCJJTlRFUlZBTCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljc1BlbmRpbmdzIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwidGltZXMiLCJnbG9iYWxUaGlzIiwiX3AiLCJwcm9ncmVzcyIsImN1cnJlbnRUaW1lb3V0IiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJkZWxldGUiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiYWRkIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibG9hZGVkIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJfVG9waWMiLCJUb3BpY3MiLCJmaXJzdExvYWRlZCIsIm1hcCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwibGFuZ3VhZ2UiLCJfaXRlbSIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uc1Byb3ZpZGVyIiwiTGVzc29uIiwiYyIsIl91dWlkIiwiX1RvcGljcyIsIl9wcm92aWRlciIsIl9Qcm9ncmVzc01hbmFnZXIiLCJmaWVsZHMiLCJzZXNzaW9uc01hcCIsImxvY2FsZGIiLCJQcm92aWRlckxlc3NvbiIsImluaXRpYWxpc2UiLCJyZWFjdGl2ZVByb3BzIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJpbml0IiwicHJvY2Vzc0xvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIiNpbml0IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwidjQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzZXNzbWVudHMiLCJzdHVkZW50cyIsImFnZSIsInNlc3Npb25zIiwiYWRkU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwibGVzc29uSWQiLCJfdXBsb2FkZXIiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJmZWVkYmFjayIsImFuYWx5c2lzIiwic2VsZWN0aW9uIiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiYXNzaWdubWVudElkIiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsIkNoYXQiLCJsb2FkQWxsIiwicmVzb2x2ZSIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2F2ZVNlbGVjdGlvbiIsInRyaWdnZXIiLCJTZXNzaW9ucyIsIlNlc3Npb24iLCJTZXNzaW9uc1Byb3ZpZGVyIiwiRmFjZXMiLCJvdXRzdGFuZGluZyIsImdvb2QiLCJyZWd1bGFyIiwiaW5kaWZmZXJlbnQiLCJiYWQiLCJpbmFwcHJvcHJpYXRlIiwiYXNzZXNzbWVudCIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyJdLCJzb3VyY2VzIjpbIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvbGVzc29ucy9FbGVtZW50cy9pbmRleC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2xlc3NvbnMvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL2xlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwiL2xlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwiL2xlc3NvbnMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlc3NvbnMvaXRlbS50cyIsIi9sZXNzb25zL3Byb3ZpZGVyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9mYWNlcy50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQU9PO1VBQVUsTUFBT0UsTUFBTyxTQUFRRCxTQUFBLENBQUFFLElBQWU7WUFDM0NDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7WUFVekNDLFlBQVk7Y0FBRUMsRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRUQsRUFBRTtnQkFBRUUsRUFBRSxFQUFFLFVBQVU7Z0JBQUVDLFNBQVMsRUFBRSxVQUFVO2dCQUFFQyxRQUFRLEVBQUVYLEtBQUEsQ0FBQVk7Y0FBZ0IsQ0FBRSxDQUFDO1lBQ2pGO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sS0FBSyxDQUFDSixJQUFJLENBQUNDLEtBQUssQ0FBQztjQUV2RCxJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEJGLEtBQUssRUFBRSxDQUFDOztj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