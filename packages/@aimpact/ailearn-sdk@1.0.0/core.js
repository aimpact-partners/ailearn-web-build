System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.6/entities", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0", "@bgroup/media-manager@1.0.0/uploader"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp002Config) {
      dependency_5 = _aimpactAilearnApp002Config;
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 3762596833,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiSlNPTiIsInBhcnNlIiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJpc1JlYWR5IiwidmFsdWVzIiwiaW5zdGFuY2UiLCJQcm9ncmVzc01hbmFnZXIiLCJ0b3BpY3NFbGVtZW50cyIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsImxlc3NvblBlbmRpbmdzIiwiU2V0IiwiTUFYX1RJTUUiLCJJTlRFUlZBTCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljc1BlbmRpbmdzIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwidGltZXMiLCJnbG9iYWxUaGlzIiwiX3AiLCJwcm9ncmVzcyIsImN1cnJlbnRUaW1lb3V0IiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJkZWxldGUiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiYWRkIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInNldFRpbWVvdXQiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibG9hZGVkIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJfVG9waWMiLCJUb3BpY3MiLCJmaXJzdExvYWRlZCIsIm1hcCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwibGFuZ3VhZ2UiLCJfaXRlbSIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uc1Byb3ZpZGVyIiwiTGVzc29uIiwiYyIsIl91dWlkIiwiX1RvcGljcyIsIl9wcm92aWRlciIsIl9Qcm9ncmVzc01hbmFnZXIiLCJmaWVsZHMiLCJzZXNzaW9uc01hcCIsImxvY2FsZGIiLCJQcm92aWRlckxlc3NvbiIsImluaXRpYWxpc2UiLCJyZWFjdGl2ZVByb3BzIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJpbml0IiwicHJvY2Vzc0xvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsIiNpbml0IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwidjQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzZXNzbWVudHMiLCJzdHVkZW50cyIsImFnZSIsInNlc3Npb25zIiwiYWRkU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwibGVzc29uSWQiLCJfdXBsb2FkZXIiLCJBc3Nlc3NtZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJmZWVkYmFjayIsImFuYWx5c2lzIiwic2VsZWN0aW9uIiwicHJvcHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJzYXZlU2VsZWN0aW9uIiwiU2Vzc2lvbnMiLCJTZXNzaW9uIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyJdLCJzb3VyY2VzIjpbIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvbGVzc29ucy9FbGVtZW50cy9pbmRleC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2xlc3NvbnMvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL2xlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwiL2xlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwiL2xlc3NvbnMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlc3NvbnMvaXRlbS50cyIsIi9sZXNzb25zL3Byb3ZpZGVyLnRzIiwiL3Nlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFPTztVQUFVLE1BQU9FLE1BQU8sU0FBUUQsU0FBQSxDQUFBRSxJQUFlO1lBQzNDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBVXpDQyxZQUFZO2NBQUVDLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVFLEVBQUUsRUFBRSxVQUFVO2dCQUFFQyxTQUFTLEVBQUUsVUFBVTtnQkFBRUMsUUFBUSxFQUFFWCxLQUFBLENBQUFZO2NBQWdCLENBQUUsQ0FBQztZQUNqRjtZQUVBLE1BQU1DLElBQUlBLENBQUNDLEtBQUs7Y0FDZixNQUFNO2dCQUFFQyxNQUFNO2dCQUFFQyxLQUFLO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQ0osSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDdkQsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsMEJBQTBCRixLQUFLLEVBQUUsQ0FBQzs7Y0FHbkQsT0FBT0MsSUFBSTtZQUNaOztVQUNBRSxPQUFBLENBQUFoQixNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFpQixNQUFBLEdBQUFuQixPQUFBO1VBR0EsSUFBQW9CLFFBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsT0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixJQUFBLEdBQUF0QixPQUFBO1VBSU0sTUFBT3VCLE9BQVEsU0FBUUosTUFBQSxDQUFBSyxhQUF1QjtZQUluRCxDQUFB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