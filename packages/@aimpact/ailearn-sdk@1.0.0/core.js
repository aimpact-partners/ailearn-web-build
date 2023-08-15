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
        hash: 2372424631,
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
              const topics = this.topicTitles.map(t => ({
                id: (0, _uuid.v4)(),
                title: t
              }));
              this.#topics.add(topics);
              const properties = this.getProperties();
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/lessons', properties);
              //return super.publish();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZW50aXRpZXMiLCJHQ2xhc3MiLCJJdGVtIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJkYiIsInN0b3JlTmFtZSIsInByb3ZpZGVyIiwiR0NsYXNzZXNQcm92aWRlciIsImxvYWQiLCJzcGVjcyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsIkVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJFbGVtZW50IiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcmVudCIsInBhdGgiLCJ0eXBlIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwicG9zdCIsInNldCIsImUiLCJjb25zb2xlIiwiZmV0Y2hpbmciLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImxvZyIsImdldCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfRWxlbWVudCIsIkVsZW1lbnRzIiwiaXRlbXMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaGFzIiwid2FybiIsInRpdGxlIiwia2V5cyIsIml0ZW0iLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiX0ludHJvZHVjdGlvbkVsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIl9FbGVtZW50cyIsIl9JbnRyb2R1Y3Rpb24iLCJUb3BpYyIsImxlc3NvbiIsIkVMRU1FTlRTIiwiZWxlbWVudHNEYXRhIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsImNvbnRlbnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVsZW1lbnQiLCJuYW1lIiwiX1RvcGljIiwiVG9waWNzIiwiZmlyc3RMb2FkZWQiLCJtYXAiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpYyIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsIl9pdGVtIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJfVG9waWNzIiwiX3V1aWQiLCJmaWVsZHMiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCIjaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsInRvcGljc0RhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsImdsb2JhbFRoaXMiLCJsIiwicHVibGlzaCIsInRvcGljVGl0bGVzIiwidCIsInY0IiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImdlbmVyYXRlIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiL2djbGFzZXNzL2l0ZW0udHMiLCIvbGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9sZXNzb25zL0VsZW1lbnRzL2luZGV4LnRzIiwiL2xlc3NvbnMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbkVsZW1lbnQudHMiLCIvbGVzc29ucy9JbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvbGVzc29ucy9Ub3BpY3MvVG9waWMvaW5kZXgudHMiLCIvbGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCIvbGVzc29ucy9jb2xsZWN0aW9uLnRzIiwiL2xlc3NvbnMvaXRlbS50cyIsIi9zZXNzaW9ucy9jb2xsZWN0aW9uLnRzIiwiL3Nlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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