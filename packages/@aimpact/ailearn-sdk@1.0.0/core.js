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
        hash: 1770125618,
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
            #lessonPendings = [];
            get lessonElementsPending() {
              return this.#lessonPendings;
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
              this.#times++;
              this.#topicsUpdated = new Map();
              let lessonChanges = false;
              let left = this.#lessonElements.reduce((acc, element) => {
                if (data.elements[element]?.id) {
                  if (this.#lessonPendings.includes(element)) {
                    lessonChanges = true;
                    this.#lessonElementsUpdated.push(element);
                    this.#lessonPendings.splice(this.#lessonPendings.indexOf(element), 1);
                  }
                  return acc;
                }
                this.#lessonPendings.push(element);
                return acc + 1;
              }, 0);
              if (lessonChanges) this.triggerEvent('lesson.updated');
              data.topics.forEach(topic => {
                let topicChanges = false;
                this.#topicsElements.forEach(element => {
                  const lastTopicData = this.#topicsPendings.get(topic.id) ?? [];
                  if (lastTopicData.includes(element) && topic.elements[element]?.id) {
                    if (!this.topics.updated.has(topic.id)) this.topics.updated.set(topic.id, []);
                    this.topics.updated.get(topic.id).push(element);
                    topicChanges = true;
                  }
                  if (!topic.elements[element]?.id) {
                    if (!this.#topicsPendings.has(topic.id)) this.#topicsPendings.set(topic.id, []);
                    this.#topicsPendings.get(topic.id).push(element);
                    left++;
                  }
                });
                if (topicChanges) this.triggerEvent(`topic.${topic.id}.updated`);
              });
              if (left > 0) {
                globalThis.setTimeout(() => {
                  this.#parent.load();
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
        hash: 2557597697,
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
        hash: 3163691687,
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
        hash: 847388789,
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
            async load(specs) {
              if (!specs.id) {
                throw new Error('Lesson id is required');
              }
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/lessons/${specs.id}`);
              if (!status) {
                throw new Error('error loading class');
              }
              await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzlFLE1BQU07Z0JBQUVFLElBQUksRUFBRTRFLFFBQVEsRUFBRTVFO2NBQUksQ0FBRTtZQUN6RDtZQUVBLE1BQU00SSxNQUFNLENBQUMzSCxLQUFhO2NBQ3pCLE1BQU00SCxHQUFHLEdBQUcsSUFBSXJJLFFBQUcsQ0FBQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLE1BQU1mLEtBQUssR0FBRztnQkFBRWlCLE1BQU0sRUFBRUcsS0FBSztnQkFBRTNCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRTtjQUU1QyxNQUFNc0YsUUFBUSxHQUFHLE1BQU1pRSxHQUFHLENBQUMzSCxJQUFJLENBQUMsa0JBQWtCLEVBQUVyQixLQUFLLENBQUM7Y0FDMUQsT0FBTytFLFFBQVE7WUFDaEI7O1VBQ0ExRSIsIm5hbWVzIjpbIkdDbGFzcyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiRWxlbWVudCIsIlJlYWN0aXZlTW9kZWwiLCJ0eXBlIiwicGFyZW50IiwicGF0aCIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsInZhbHVlIiwiRWxlbWVudHMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaXRlbXMiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsImdsb2JhbFRoaXMiLCJwcm9ncmVzcyIsImNsZWFyTGVzc29uVXBkYXRlZCIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsInRyaWdnZXJFdmVudCIsImNsZWFyVG9waWNVcGRhdGVkIiwidG9waWNJZCIsInRvcGljIiwicHJvY2VzcyIsImxlc3NvbkNoYW5nZXMiLCJsZWZ0IiwicmVkdWNlIiwiYWNjIiwicHVzaCIsInRvcGljcyIsInRvcGljQ2hhbmdlcyIsImxhc3RUb3BpY0RhdGEiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibGVzc29uIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJUb3BpY3MiLCJtYXAiLCJhZGQiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uIiwiTGVzc29uc1Byb3ZpZGVyIiwic2Vzc2lvbnNNYXAiLCJ0b3BpY3NFbGVtZW50cyIsImVsZW1lbnRzRGF0YSIsIlByb3ZpZGVyTGVzc29uIiwicmVhY3RpdmVQcm9wcyIsInByb2Nlc3NMb2FkIiwiaGFzT3duUHJvcGVydHkiLCJpc1JlYWR5IiwicmVhZHkiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImNhbGwiLCJzdHVkZW50VGV4dCIsImFzd2VyIiwiYW5hbHlzaXMiLCJzdWJqZWN0IiwiZXZhbHVhdGlvbiIsImdyYWRlIiwiQXNzZXNzbWVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiZmVlZGJhY2siLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyIsImFwaSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZ2NsYXNlc3MvaXRlbS50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbnRlcmZhY2UudHMiLCJsZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwibGVzc29ucy9Qcm9ncmVzc01hbmFnZXIudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pdGVtLnRzIiwibGVzc29ucy9wcm92aWRlci50cyIsInNlc3Npb25zL2Fzc2Vzc21lbnQudHMiLCJzZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwic2Vzc2lvbnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==