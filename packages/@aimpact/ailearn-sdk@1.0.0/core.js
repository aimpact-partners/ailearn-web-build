System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.4/entities", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@0.0.1/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@0.0.2/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive114Entities) {
      dependency_2 = _beyondJsReactive114Entities;
    }, function (_beyondJsReactive114Model) {
      dependency_3 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk001Session) {
      dependency_4 = _aimpactChatSdk001Session;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat002Api) {
      dependency_6 = _aimpactChat002Api;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImxvZyIsImdldCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiX1RvcGljIiwiVG9waWNzIiwiZmlyc3RMb2FkZWQiLCJtYXAiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpYyIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwiX2l0ZW0iLCJMZXNzb25zIiwiQ29sbGVjdGlvbiIsIkxlc3NvbiIsIkxlc3NvbnNQcm92aWRlciIsIl9Ub3BpY3MiLCJfdXVpZCIsImZpZWxkcyIsInNlc3Npb25zTWFwIiwidG9waWNzRWxlbWVudHMiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsIiNpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwidG9waWNzRGF0YSIsImhhc093blByb3BlcnR5IiwiZ2xvYmFsVGhpcyIsImwiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwidjQiLCJnZXRQcm9wZXJ0aWVzIiwic2Vzc2lvbnMiLCJzZXNzaW9uIiwiU2Vzc2lvbiIsImNsYXNzUm9vbUlkIiwiZ2NsYXNzIiwiYWRkU2Vzc2lvbiIsImxlc3NvbklkIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiL2djbGFzZXNzL2l0ZW0udHMiLCIvbGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9sZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbkVsZW1lbnQudHMiLCIvbGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbGVzc29ucy9Ub3BpY3MvVG9waWMvaW5kZXgudHMiLCIvbGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCIvbGVzc29ucy9jb2xsZWN0aW9uLnRzIiwiL2xlc3NvbnMvaXRlbS50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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