System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.2/entities", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@0.0.2/api", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_aimpactChat002Api) {
      dependency_6 = _aimpactChat002Api;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.2"], ["socket.io-client", "4.7.2"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2808370244,
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
        hash: 859925547,
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
        hash: 629923770,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImxvZyIsImdldCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiX1RvcGljIiwiVG9waWNzIiwiZmlyc3RMb2FkZWQiLCJtYXAiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpYyIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsIl9pdGVtIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJfVG9waWNzIiwiX3V1aWQiLCJmaWVsZHMiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCIjaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsInRvcGljc0RhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsImdsb2JhbFRoaXMiLCJsIiwicHVibGlzaCIsInRvcGljVGl0bGVzIiwidCIsInY0IiwiZ2V0VG9waWMiLCJzZXNzaW9ucyIsInNlc3Npb24iLCJTZXNzaW9uIiwiY2xhc3NSb29tSWQiLCJnY2xhc3MiLCJhZGRTZXNzaW9uIiwibGVzc29uSWQiLCJnZW5lcmF0ZSIsIlNlc3Npb25zIiwiU2Vzc2lvbnNQcm92aWRlciIsInVybCIsImJhc2VVcmwiLCJzZXRMZXNzb24iLCJ0cmFjZSIsImFjY2VzcyJdLCJzb3VyY2VzIjpbIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL2xlc3NvbnMvRWxlbWVudHMvRWxlbWVudC9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvbGVzc29ucy9FbGVtZW50cy9pbmRleC50cyIsIi9sZXNzb25zL0ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25FbGVtZW50LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2xlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwiL2xlc3NvbnMvVG9waWNzL2luZGV4LnRzIiwiL2xlc3NvbnMvY29sbGVjdGlvbi50cyIsIi9sZXNzb25zL2l0ZW0udHMiLCIvc2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsIi9zZXNzaW9ucy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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