System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.3/entities", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.11/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Entities) {
      dependency_2 = _beyondJsReactive113Entities;
    }, function (_beyondJsReactive113Model) {
      dependency_3 = _beyondJsReactive113Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_5 = _aimpactAilearnApp0011Config;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 2513354397,
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
                console.log(99, this.type, this.id);
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
        hash: 2840922511,
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
                console.log(e);
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
        hash: 3173305136,
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
        hash: 2973591509,
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
          var _session = require("@aimpact/chat-sdk/session");
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
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
              console.log(20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2NBQUUsQ0FBRTtjQUU1QyxNQUFNeUQsUUFBUSxHQUFHLE1BQU1nRCxHQUFHLENBQUNqRixJQUFJLENBQUMsa0JBQWtCLEVBQUVqQixLQUFLLENBQUM7Y0FDMUQsT0FBT2tELFFBQVE7WUFDaEI7O1VBQ0E3QyIsIm5hbWVzIjpbIkdDbGFzcyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiRWxlbWVudCIsIlJlYWN0aXZlTW9kZWwiLCJ0eXBlIiwicGFyZW50IiwicGF0aCIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImxvZyIsImdldCIsIk9iamVjdCIsInZhbHVlIiwiRWxlbWVudHMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaXRlbXMiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsImxlc3NvbiIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiVG9waWNzIiwibWFwIiwiYWRkIiwidG9waWNzIiwidG9waWMiLCJrZXkiLCJmaW5kIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZSIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlcyIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiTGVzc29uIiwiTGVzc29uc1Byb3ZpZGVyIiwic2Vzc2lvbnNNYXAiLCJ0b3BpY3NFbGVtZW50cyIsImVsZW1lbnRzRGF0YSIsInJlYWN0aXZlUHJvcHMiLCJpc1JlYWR5IiwicmVhZHkiLCJ0b3BpY3NEYXRhIiwiaGFzT3duUHJvcGVydHkiLCJnbG9iYWxUaGlzIiwibCIsInB1Ymxpc2giLCJ0b3BpY1RpdGxlcyIsInQiLCJnZXRQcm9wZXJ0aWVzIiwic2Vzc2lvbnMiLCJzZXNzaW9uIiwiU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwiZ2NsYXNzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwibGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pdGVtLnRzIiwic2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsInNlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=