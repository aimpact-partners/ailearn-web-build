System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.2/entities", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, GClass, Lessons, Lesson, Sessions, Session, __beyond_pkg, hmr;
  _export({
    GClass: void 0,
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
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
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

      /*************************************************
      INTERNAL MODULE: ./lessons/ChatIntroductions/index
      *************************************************/

      ims.set('./lessons/ChatIntroductions/index', {
        hash: 158136438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatIntroductions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat/api");
          var _introduction = require("./introduction");
          class ChatIntroductions extends _model.ReactiveModel {
            #lesson;
            #api;
            #items = new Map();
            get items() {
              return this.#items;
            }
            constructor(lesson) {
              super();
              this.#lesson = lesson;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async get(type) {
              return this.#items.get(type);
            }
            async load() {
              try {
                if (!this.#lesson.id) {
                  throw new Error('no LessonId to load introductions');
                }
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/chats/introductions/${this.#lesson.id}`);
                if (!status) {
                  throw new Error('Introduction not found');
                }
                const elements = Object.values(data.elements);
                elements.forEach(element => {
                  const introduction = new _introduction.Introduction(element, this.#lesson);
                  this.#items.set(element.type, introduction);
                });
              } catch (e) {
                console.error('error introduction load', e);
              }
            }
          }
          exports.ChatIntroductions = ChatIntroductions;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./lessons/ChatIntroductions/introduction
      ********************************************************/

      ims.set('./lessons/ChatIntroductions/introduction', {
        hash: 3173441938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Introduction extends _model.ReactiveModel {
            #lesson;
            properties = ['id', 'type', 'value'];
            constructor(element, lesson) {
              super();
              this.#lesson = lesson;
              this.set(element);
            }
          }
          exports.Introduction = Introduction;
        }
      });

      /************************************************
      INTERNAL MODULE: ./lessons/Elements/Element/index
      ************************************************/

      ims.set('./lessons/Elements/Element/index', {
        hash: 2418622010,
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
                  console.log('it does not exist, so we create it');
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
        hash: 3262680120,
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

      /********************************************
      INTERNAL MODULE: ./lessons/Topics/Topic/index
      ********************************************/

      ims.set('./lessons/Topics/Topic/index', {
        hash: 1323907995,
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
          class Topic extends _model.ReactiveModel {
            #api;
            #lesson;
            #ELEMENTS = ['content', 'synthesis', 'previous', 'assessment'];
            properties = ['id', 'content', 'title'];
            #elementsData;
            get is() {
              return 'topic';
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
            }
            async load(specs = {}) {
              this.fetching = true;
              const {
                content
              } = specs;
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/lessons/${this.#lesson.id}/topics/${this.id}`);
              if (!response.status) {
                throw new Error(response.message);
              }
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
              this.fetching = false;
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
        hash: 1913750803,
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
        hash: 2716536942,
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
          var _ChatIntroductions = require("./ChatIntroductions");
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
              this.#chatIntroductions = new _ChatIntroductions.ChatIntroductions(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsd0JBQXdCMkMsUUFBUSxDQUFDN0MsS0FBSyxFQUFFLENBQUM7O2NBRzFELE9BQU87Z0JBQUVELE1BQU0sRUFBRThDLFFBQVEsQ0FBQzlDLE1BQU07Z0JBQUVFLElBQUksRUFBRTRDLFFBQVEsRUFBRTVDO2NBQUksQ0FBRTtZQUN6RDtZQUVBLE1BQU00RixNQUFNLENBQUMxRSxLQUFhO2NBQ3pCLE1BQU1rRSxHQUFHLEdBQUcsSUFBSTVFLFFBQUcsQ0FBQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLE1BQU1mLEtBQUssR0FBRztnQkFBRWtCLE1BQU0sRUFBRUcsS0FBSztnQkFBRTVCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRTtjQUU1QyxNQUFNc0QsUUFBUSxHQUFHLE1BQU13QyxHQUFHLENBQUNuRCxJQUFJLENBQUMsa0JBQWtCLEVBQUVwQyxLQUFLLENBQUM7Y0FDMUQsT0FBTytDLFFBQVE7WUFDaEI7O1VBQ0ExQyIsIm5hbWVzIjpbIkdDbGFzcyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiQ2hhdEludHJvZHVjdGlvbnMiLCJSZWFjdGl2ZU1vZGVsIiwiTWFwIiwiaXRlbXMiLCJsZXNzb24iLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImdldCIsInR5cGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVsZW1lbnRzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbnRyb2R1Y3Rpb24iLCJJbnRyb2R1Y3Rpb24iLCJzZXQiLCJlIiwiY29uc29sZSIsIkVsZW1lbnQiLCJwYXJlbnQiLCJwYXRoIiwiY3JlYXRlIiwicG9zdCIsImZldGNoaW5nIiwibG9nIiwidmFsdWUiLCJFbGVtZW50cyIsImhhcyIsImtleXMiLCJpdGVtIiwiVG9waWMiLCJpcyIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiVG9waWNzIiwibWFwIiwiYWRkIiwidG9waWNzIiwidG9waWMiLCJpbnN0YW5jZSIsImtleSIsInRpdGxlIiwibG9hZEZpcnN0IiwiUGVuZGluZ1Byb21pc2UiLCJMZXNzb25zIiwiQ29sbGVjdGlvbiIsIkxlc3NvbiIsIkxlc3NvbnNQcm92aWRlciIsImNoYXRJbnRyb2R1Y3Rpb25zIiwic2Vzc2lvbnNNYXAiLCJ0b3BpY3NFbGVtZW50cyIsImVsZW1lbnRzRGF0YSIsInJlYWN0aXZlUHJvcHMiLCJpc1JlYWR5IiwicmVhZHkiLCJ0b3BpY3NEYXRhIiwiaGFzT3duUHJvcGVydHkiLCJnbG9iYWxUaGlzIiwibCIsInB1Ymxpc2giLCJ0b3BpY1RpdGxlcyIsInQiLCJnZXRUb3BpYyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImFwaSIsImdlbmVyYXRlIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9DaGF0SW50cm9kdWN0aW9ucy9pbmRleC50cyIsImxlc3NvbnMvQ2hhdEludHJvZHVjdGlvbnMvaW50cm9kdWN0aW9uLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL1RvcGljcy9Ub3BpYy9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2ludGVyZmFjZS50cyIsImxlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwibGVzc29ucy9jb2xsZWN0aW9uLnRzIiwibGVzc29ucy9pdGVtLnRzIiwic2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsInNlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=