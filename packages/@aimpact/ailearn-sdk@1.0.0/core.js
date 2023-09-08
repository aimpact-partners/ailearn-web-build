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
        hash: 2332655205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ProgressManager extends _model.ReactiveModel {
            #parent;
            #topicsElements = ['synthesis', 'assessment', 'previous', 'content', 'introduction'];
            #lessonElements = ['introduction', 'content', 'synthesis', 'assessment'];
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
            clearLessonUpdated = element => {
              if (!this.#lessonElementsUpdated.includes(element)) return;
              this.#lessonElementsUpdated.splice(this.#lessonElementsUpdated.indexOf(element), 1);
              this.triggerEvent('lesson.updated');
            };
            clearTopicUpdated = (topicId, element) => {
              if (!this.#topicsUpdated.has(topicId)) return;
              const topic = this.#topicsUpdated.get(topicId);
              if (!topic.includes(element)) return;
              topic.splice(topic.indexOf(element), 1);
              this.triggerEvent(`topic.${topicId}.updated`);
            };
            process(data) {
              globalThis.data = data;
              this.#times++;
              this.#topicsUpdated = new Map();
              console.log(0.1, 'progress', this.#times);
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
                    this.#topicsUpdated.get(topic.id).add(element);
                    topicChanges = true;
                  }
                  if (!topic.elements[element]?.id) {
                    if (!this.#topicsPendings.has(topic.id)) this.#topicsPendings.set(topic.id, new Set());
                    this.#topicsPendings.get(topic.id).add(element);
                    left++;
                  }
                });
                if (topicChanges) this.triggerEvent(`topic.${topic.id}.updated`);
              });
              if (left > 0) {
                globalThis.setTimeout(() => {
                  this.#parent.load({
                    progress: true
                  });
                }, 5000);
              }
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
        hash: 230693291,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEJGLEtBQUssRUFBRSxDQUFDOztjQUduRCxPQUFPQyxJQUFJO1lBQ1o7WUFFQTs7OztZQUlBLE1BQU0yRyxPQUFPLENBQUNVLFFBQWdCLEVBQUVILFdBQW1CO2NBQ2xEN0YsT0FBTyxDQUFDMEgsS0FBSyxDQUFDLGtCQUFrQixFQUFFMUIsUUFBUSxFQUFFSCxXQUFXLENBQUM7Y0FDeEQsTUFBTWpDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3ZGLFFBQVEsQ0FBQ2lILE9BQU8sQ0FBQ1UsUUFBUSxFQUFFSCxXQUFXLENBQUM7Y0FDbkUsSUFBSSxDQUFDakMsUUFBUSxDQUFDbkYsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlHLEtBQUssQ0FBQyx3QkFBd0JnRixRQUFRLENBQUNsRixLQUFLLEVBQUUsQ0FBQzs7Y0FHMUQsT0FBTztnQkFBRUQsTUFBTSxFQUFFbUYsUUFBUSxDQUFDbkYsTUFBTTtnQkFBRUUsSUFBSSxFQUFFaUYsUUFBUSxFQUFFakY7Y0FBSSxDQUFFO1lBQ3pEO1lBRUEsTUFBTWdKLE1BQU0sQ0FBQy9ILEtBQWE7Y0FDekIsTUFBTWdJLEdBQUcsR0FBRyxJQUFJekksUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsTUFBTWYsS0FBSyxHQUFHO2dCQUFFaUIsTUFBTSxFQUFFRyxLQUFLO2dCQUFFM0IsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRTVDLE1BQU0yRixRQUFRLEdBQUcsTUFBTWdFLEdBQUcsQ0FBQy9ILElBQUksQ0FBQyxrQkFBa0IsRUFBRXJCLEtBQUssQ0FBQztjQUMxRCxPQUFPb0YsUUFBUTtZQUNoQjs7VUFDQS9FIiwibmFtZXMiOlsiR0NsYXNzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkdDbGFzc2VzUHJvdmlkZXIiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJFcnJvciIsImV4cG9ydHMiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwYXJlbnQiLCJwYXRoIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjcmVhdGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInBvc3QiLCJzZXQiLCJlIiwiY29uc29sZSIsImZldGNoaW5nIiwiZ2V0IiwibG9nIiwiT2JqZWN0IiwidmFsdWUiLCJFbGVtZW50cyIsIk1hcCIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtcyIsImhhcyIsIndhcm4iLCJ0aXRsZSIsImtleXMiLCJpdGVtIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsIkpTT04iLCJwYXJzZSIsIkludHJvZHVjdGlvbiIsInZhbHVlcyIsImluc3RhbmNlIiwiUHJvZ3Jlc3NNYW5hZ2VyIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwiU2V0IiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwiZ2xvYmFsVGhpcyIsIl9wIiwicHJvZ3Jlc3MiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJ0b3BpYyIsInByb2Nlc3MiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsInB1c2giLCJkZWxldGUiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibGVzc29uIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJUb3BpY3MiLCJtYXAiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uIiwiTGVzc29uc1Byb3ZpZGVyIiwic2Vzc2lvbnNNYXAiLCJ0b3BpY3NFbGVtZW50cyIsImVsZW1lbnRzRGF0YSIsIlByb3ZpZGVyTGVzc29uIiwicmVhY3RpdmVQcm9wcyIsInByb2Nlc3NMb2FkIiwiaGFzT3duUHJvcGVydHkiLCJpc1JlYWR5IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImNhbGwiLCJzdHVkZW50VGV4dCIsImFzd2VyIiwiYW5hbHlzaXMiLCJzdWJqZWN0IiwiZXZhbHVhdGlvbiIsImdyYWRlIiwiQXNzZXNzbWVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiZmVlZGJhY2siLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyIsImFwaSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZ2NsYXNlc3MvaXRlbS50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbnRlcmZhY2UudHMiLCJsZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwibGVzc29ucy9Qcm9ncmVzc01hbmFnZXIudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pdGVtLnRzIiwibGVzc29ucy9wcm92aWRlci50cyIsInNlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCJzZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwic2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==