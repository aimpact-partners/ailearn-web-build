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
        hash: 4156063542,
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
              if (this.#times > 2) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Y0FHMUQsT0FBTztnQkFBRUQsTUFBTSxFQUFFOEUsUUFBUSxDQUFDOUUsTUFBTTtnQkFBRUUsSUFBSSxFQUFFNEUsUUFBUSxFQUFFNUU7Y0FBSSxDQUFFO1lBQ3pEO1lBRUEsTUFBTTRJLE1BQU0sQ0FBQzNILEtBQWE7Y0FDekIsTUFBTTRILEdBQUcsR0FBRyxJQUFJckksUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsTUFBTWYsS0FBSyxHQUFHO2dCQUFFaUIsTUFBTSxFQUFFRyxLQUFLO2dCQUFFM0IsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRTVDLE1BQU1zRixRQUFRLEdBQUcsTUFBTWlFLEdBQUcsQ0FBQzNILElBQUksQ0FBQyxrQkFBa0IsRUFBRXJCLEtBQUssQ0FBQztjQUMxRCxPQUFPK0UsUUFBUTtZQUNoQjs7VUFDQTFFIiwibmFtZXMiOlsiR0NsYXNzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkdDbGFzc2VzUHJvdmlkZXIiLCJsb2FkIiwic3BlY3MiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJFcnJvciIsImV4cG9ydHMiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwYXJlbnQiLCJwYXRoIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjcmVhdGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInBvc3QiLCJzZXQiLCJlIiwiY29uc29sZSIsImZldGNoaW5nIiwiZ2V0IiwibG9nIiwiT2JqZWN0IiwidmFsdWUiLCJFbGVtZW50cyIsIk1hcCIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtcyIsImhhcyIsIndhcm4iLCJ0aXRsZSIsImtleXMiLCJpdGVtIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsIkpTT04iLCJwYXJzZSIsIkludHJvZHVjdGlvbiIsInZhbHVlcyIsImluc3RhbmNlIiwiUHJvZ3Jlc3NNYW5hZ2VyIiwibGVzc29uRWxlbWVudHNQZW5kaW5nIiwidG9waWNFbGVtZW50c1BlbmRpbmciLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3BpY3NVcGRhdGVkIiwiZ2xvYmFsVGhpcyIsInByb2dyZXNzIiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwidG9waWMiLCJwcm9jZXNzIiwibGVzc29uQ2hhbmdlcyIsImxlZnQiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwidG9waWNzIiwidG9waWNDaGFuZ2VzIiwibGFzdFRvcGljRGF0YSIsInVwZGF0ZWQiLCJzZXRUaW1lb3V0IiwiVG9waWMiLCJpcyIsImNoYXRJbnRyb2R1Y3Rpb25zIiwib3JkZXIiLCJsZXNzb24iLCJjb250ZW50IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2VuZXJhdGVFbGVtZW50IiwibmFtZSIsIlRvcGljcyIsIm1hcCIsImFkZCIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwiZWxlbWVudHNEYXRhIiwiUHJvdmlkZXJMZXNzb24iLCJyZWFjdGl2ZVByb3BzIiwicHJvY2Vzc0xvYWQiLCJoYXNPd25Qcm9wZXJ0eSIsImlzUmVhZHkiLCJyZWFkeSIsInB1Ymxpc2giLCJ0b3BpY1RpdGxlcyIsInQiLCJnZXRQcm9wZXJ0aWVzIiwic2Vzc2lvbnMiLCJzZXNzaW9uIiwiU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwiZ2NsYXNzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiY2FsbCIsInN0dWRlbnRUZXh0IiwiYXN3ZXIiLCJhbmFseXNpcyIsInN1YmplY3QiLCJldmFsdWF0aW9uIiwiZ3JhZGUiLCJBc3Nlc3NtZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJmZWVkYmFjayIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCJsZXNzb25zL1Byb2dyZXNzTWFuYWdlci50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2l0ZW0udHMiLCJsZXNzb25zL3Byb3ZpZGVyLnRzIiwic2Vzc2lvbnMvYXNzZXNzbWVudC50cyIsInNlc3Npb25zL2NvbGxlY3Rpb24udHMiLCJzZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19