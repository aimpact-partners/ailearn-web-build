System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.2/entities", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, GClass, Topic, Lessons, Lesson, Sessions, Session, __beyond_pkg, hmr;
  _export({
    GClass: void 0,
    Topic: void 0,
    Lessons: void 0,
    Lesson: void 0,
    Sessions: void 0,
    Session: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApi100Core) {
      dependency_1 = _aimpactAilearnApi100Core;
    }, function (_beyondJsReactive112Entities) {
      dependency_2 = _beyondJsReactive112Entities;
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
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
      __pkg.dependencies.update([['@aimpact/ailearn-api/core', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat/api', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8]]);
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
        hash: 1481905865,
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
            //4a4ab3cd-b589-4f64-a65f-3682967427e8
            async create() {
              try {
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
                this.#api.bearer(_session.sessionWrapper.user.token);
                if (!this.id && create) {
                  await this.create();
                  return true;
                }
                if (!this.id) return false;
                const path = `/lessons/elements/${this.id}`;
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
        hash: 1365980350,
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
        hash: 2599231051,
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

      /********************************************
      INTERNAL MODULE: ./lessons/Topics/Topic/index
      ********************************************/

      ims.set('./lessons/Topics/Topic/index', {
        hash: 663343144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topic = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/chat/api");
          var _Elements = require("../../Elements");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _Introduction = require("../../Introduction");
          /*bundle */
          class Topic extends _model.ReactiveModel {
            #api;
            #lesson;
            #ELEMENTS = ['content', 'synthesis', 'previous', 'assessment'];
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
            constructor(data, lesson) {
              super();
              this.#lesson = lesson;
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
                  await item.load(true);
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
                console.log(e);
                return undefined;
              }
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
        hash: 531053712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topics = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _Topic = require("./Topic");
          var _core = require("@beyond-js/kernel/core");
          class Topics extends _model.ReactiveModel {
            #items = new Map();
            #lesson;
            #firstLoaded;
            constructor(lesson) {
              super();
              this.#lesson = lesson;
            }
            get items() {
              return [...this.#items.values()];
            }
            get map() {
              return this.#items;
            }
            add(topics) {
              topics.forEach(topic => {
                const instance = new _Topic.Topic(topic, this.#lesson);
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
                console.log('error loading first topic', e);
              }
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
        hash: 2741053670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lesson = void 0;
          var _core = require("@aimpact/ailearn-api/core");
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _Topics = require("./Topics");
          var _item = require("../sessions/item");
          var _Elements = require("./Elements");
          var _Introduction = require("./Introduction");
          var _uuid = require("uuid");
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
            #ELEMENTS = ['content', 'synthesis', 'assessment'];
            #fields;
            #sessionsMap = new Map();
            get sessionsMap() {
              return this.#sessionsMap;
            }
            #provider;
            get topicsElements() {
              return this.#topics;
            }
            #topics;
            get topics() {
              return this.#topics;
            }
            #elementsData;
            get elementsData() {
              return this.#elementsData;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Lessons',
                provider: _core.LessonsProvider
              });
              this.reactiveProps(['topicTitles']);
              this.#elements = new _Elements.Elements(this, this.#ELEMENTS, 'lessons');
              this.#topics = new _Topics.Topics(this);
              this.#chatIntroductions = new _Introduction.Introduction(this);
              this.#init();
            }
            async #init() {
              try {
                await this.isReady;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error('error loading class');
              }
              if (data.topicsData) {
                this.#topics.add(data.topicsData);
              }
              const {
                elements
              } = data;
              this.#elementsData = elements;
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
              globalThis.l = this;
              return data;
            }
            async publish() {
              //	this.#topics = await t.his.#setTopics();
              const topics = this.topicTitles.map(t => ({
                id: (0, _uuid.v4)(),
                title: t
              }));
              this.#topics.add(topics);
              return super.publish();
            }
            getTopic(id) {
              //return this.#topics.find(t => t.id === id);
            }
            async set(data) {
              super.set(data);
              if (data.topicsData) {
                this.#topics.add(data.topicsData);
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
              const api = new _api.Api(_config.default.params.apis.ailearn);
              const response = await api.post('/sessions', specs);
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
                console.log(e);
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
        hash: 433802318,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7WUFDaEI7O1VBQ0E3QyIsIm5hbWVzIjpbIkdDbGFzcyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiRWxlbWVudCIsIlJlYWN0aXZlTW9kZWwiLCJ0eXBlIiwicGFyZW50IiwicGF0aCIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImdldCIsImxvZyIsIk9iamVjdCIsInZhbHVlIiwiRWxlbWVudHMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaXRlbXMiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsImxlc3NvbiIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiVG9waWNzIiwibWFwIiwiYWRkIiwidG9waWNzIiwidG9waWMiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJMZXNzb25zIiwiQ29sbGVjdGlvbiIsIkxlc3NvbiIsIkxlc3NvbnNQcm92aWRlciIsInNlc3Npb25zTWFwIiwidG9waWNzRWxlbWVudHMiLCJlbGVtZW50c0RhdGEiLCJyZWFjdGl2ZVByb3BzIiwiaXNSZWFkeSIsInJlYWR5IiwidG9waWNzRGF0YSIsImhhc093blByb3BlcnR5IiwiZ2xvYmFsVGhpcyIsImwiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0VG9waWMiLCJzZXNzaW9ucyIsInNlc3Npb24iLCJTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJnY2xhc3MiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJhcGkiLCJnZW5lcmF0ZSIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZ2NsYXNlc3MvaXRlbS50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsImxlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbnRlcmZhY2UudHMiLCJsZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uRWxlbWVudC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW5kZXgudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbnRlcmZhY2UudHMiLCJsZXNzb25zL1RvcGljcy9pbmRleC50cyIsImxlc3NvbnMvY29sbGVjdGlvbi50cyIsImxlc3NvbnMvaXRlbS50cyIsInNlc3Npb25zL2NvbGxlY3Rpb24udHMiLCJzZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19