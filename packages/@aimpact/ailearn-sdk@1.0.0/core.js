System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-api@1.0.0/core", "@beyond-js/reactive@1.1.2/entities", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, GClass, Lessons, Lesson, Topic, Sessions, Session, __beyond_pkg, hmr;
  _export({
    GClass: void 0,
    Lessons: void 0,
    Lesson: void 0,
    Topic: void 0,
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
      __pkg.dependencies.update([['@aimpact/ailearn-api/core', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat/api', dependency_6]]);
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

      /***************************************************
      INTERNAL MODULE: ./lessons/Elements/Element/Provider
      ***************************************************/

      ims.set('./lessons/Elements/Element/Provider', {
        hash: 2196334908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ElementProvider = void 0;
          class ElementProvider {
            constructor() {
              //		const api = new Api(config.params.apis.ailearn);
            }
          }
          exports.ElementProvider = ElementProvider;
        }
      });

      /************************************************
      INTERNAL MODULE: ./lessons/Elements/Element/index
      ************************************************/

      ims.set('./lessons/Elements/Element/index', {
        hash: 3837540220,
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
            #lesson;
            properties = ['id', 'content', 'type', 'value'];
            constructor(type, lesson) {
              super();
              this.#lesson = lesson;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
            }
            async load(id) {
              try {
                console.log(10, 'cargamos', this.type);
                this.#api.bearer(_session.sessionWrapper.user.token);
                if (!id) {
                  const {
                    status,
                    data
                  } = await this.#api.post(`/lessons/${this.#lesson.id}/elements/${this.type}`);
                  if (!status) {
                    throw new Error('Element not found');
                  }
                  this.set(data);
                  return;
                }
                const {
                  status,
                  data
                } = await this.#api.get(`/lessons/elements/${id}`);
                if (!status) {
                  throw new Error('Element not found');
                }
                this.set(data);
                this.triggerEvent();
              } catch (e) {
                console.error('error in load', e);
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
        hash: 4209877020,
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
            #lesson;
            constructor(lesson, elements = []) {
              super();
              this.#lesson = lesson;
              elements.forEach(type => {
                const element = new _Element.Element(type, this.#lesson);
                this.#items.set(type, element);
              });
            }
            get items() {
              return this.#items;
            }
            async get(type) {
              return this.#items.get(type);
            }
          }
          exports.Elements = Elements;
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
        hash: 108295783,
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
          var _topic = require("./topic");
          var _item = require("../sessions/item");
          var _Elements = require("./Elements");
          var _ChatIntroductions = require("./ChatIntroductions");
          /*bundle*/
          class Lesson extends _entities.Item {
            properties = ['id', 'curriculumObjective', {
              name: 'topics',
              type: 'collection'
            }, 'status', 'content', 'userId', 'sessions'];
            #elements;
            get elements() {
              return this.#elements;
            }
            #chatIntroductions;
            get chatIntroductions() {
              return this.#chatIntroductions;
            }
            #ELEMENTS = ['content', 'synthesis', 'assessment'];
            #topics = [];
            get topics() {
              return this.#topics.map(topic => topic.getProperties());
            }
            #fields;
            #sessionsMap = new Map();
            get sessionsMap() {
              return this.#sessionsMap;
            }
            #provider;
            get topicsElements() {
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
              this.#elements = new _Elements.Elements(this, this.#ELEMENTS);
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
                this.#topics = await this.#loadTopics(data.topicsData);
              }
              const {
                elements
              } = data;
              this.#elementsData = elements;
              if (elements?.content) {
                const element = await this.#elements.get('content');
                await element.load(elements.content.id);
              }
              if (elements) {
                this.#ELEMENTS.forEach(type => {
                  if (type === 'content' || !elements.hasOwnProperty(type)) return;
                  const item = this.#elements.items.get(type);
                  item?.set(elements[type]);
                });
              }
              globalThis.l = this;
              return data;
            }
            #setTopics() {
              return Promise.all(this.topicTitles.map(title => {
                const topic = new _topic.Topic();
                topic.setClass(this);
                topic.title = title;
                topic.classId = this.id;
                return topic.isReady.then(() => {
                  return topic;
                });
              }));
              //return this.publish();
            }

            #loadTopics(topics) {
              return Promise.all(topics.map(item => {
                const topic = new _topic.Topic(item.id);
                topic.setClass(this);
                return topic.isReady.then(() => {
                  topic.set(item);
                  topic.setClass(this);
                  return topic;
                });
              }));
            }
            async publish() {
              this.#topics = await this.#setTopics();
              return super.publish();
            }
            getTopic(id) {
              return this.#topics.find(t => t.id === id);
            }
            async set(data) {
              super.set(data);
              if (data.topicsData) {
                this.#loadTopics(data.topicsData);
                this.#topics = await this.#loadTopics(data.topicsData);
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
            async upgrade(data) {
              if (data.is === 'topic') {
                const topic = this.getTopic(data.item.id);
                if (!topic) {
                  console.warn('topic not found');
                  return;
                }
                topic.set(data.item);
                return;
              }
              //@ts-ignore
              await this.localUpdate(data.item);
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
              const element = await this.#elements.get(name);
              return new Promise(async resolve => {
                await element.load();
                console.log(12, element);
                resolve(element);
              });
            }
            has(element) {
              return this.#elements.item.has(element);
            }
          }
          exports.Lesson = Lesson;
        }
      });

      /*******************************
      INTERNAL MODULE: ./lessons/topic
      *******************************/

      ims.set('./lessons/topic', {
        hash: 4158902519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topic = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          /*bundle*/
          class Topic extends _entities.Item {
            properties = ['id', 'status', 'content', 'title', 'synthesis', 'prerequisites', 'assessment'];
            #class;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Topics',
                provider: _core.LessonsProvider
              });
            }
            setClass(parent) {
              this.#class = parent;
            }
            update(data) {
              this.status = data.status;
              this.set(data);
              this.triggerEvent('change');
            }
            async #generate(specs) {
              try {
                this.fetching = true;
                await this.isReady;
                const response = this.provider.generate(this.#class.id, this.#class.curriculumObjective, specs);
                this.fetching = false;
                this.triggerEvent('topic.generate.content');
                return response;
              } catch {
                console.error('error generating', specs);
              }
            }
            async generateElement(element) {
              return this.#generate({
                is: 'topic',
                element,
                topic: {
                  id: this.id,
                  title: this.title
                }
              });
            }
          }
          exports.Topic = Topic;
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
        "im": "./lessons/topic",
        "from": "Topic",
        "name": "Topic"
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
        (require || prop === 'Topic') && _export("Topic", Topic = require ? require('./lessons/topic').Topic : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29uc3RydWN0b3IiLCJpZCIsInVuZGVmaW5lZCIsImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiQ2hhdEludHJvZHVjdGlvbnMiLCJSZWFjdGl2ZU1vZGVsIiwiTWFwIiwiaXRlbXMiLCJsZXNzb24iLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImdldCIsInR5cGUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVsZW1lbnRzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbnRyb2R1Y3Rpb24iLCJJbnRyb2R1Y3Rpb24iLCJzZXQiLCJlIiwiY29uc29sZSIsIkVsZW1lbnRQcm92aWRlciIsIkVsZW1lbnQiLCJsb2ciLCJwb3N0IiwidHJpZ2dlckV2ZW50IiwidmFsdWUiLCJFbGVtZW50cyIsIkxlc3NvbnMiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkxlc3NvbiIsIkxlc3NvbnNQcm92aWRlciIsIm5hbWUiLCJjaGF0SW50cm9kdWN0aW9ucyIsInRvcGljcyIsIm1hcCIsInRvcGljIiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zTWFwIiwidG9waWNzRWxlbWVudHMiLCJlbGVtZW50c0RhdGEiLCJyZWFjdGl2ZVByb3BzIiwiaXNSZWFkeSIsInJlYWR5IiwidG9waWNzRGF0YSIsImNvbnRlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImdsb2JhbFRoaXMiLCJsIiwiUHJvbWlzZSIsImFsbCIsInRvcGljVGl0bGVzIiwidGl0bGUiLCJUb3BpYyIsInNldENsYXNzIiwiY2xhc3NJZCIsInRoZW4iLCJwdWJsaXNoIiwiZ2V0VG9waWMiLCJmaW5kIiwidCIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsInVwZ3JhZGUiLCJpcyIsIndhcm4iLCJsb2NhbFVwZGF0ZSIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImFwaSIsInJlc3BvbnNlIiwiZ2VuZXJhdGVFbGVtZW50IiwicmVzb2x2ZSIsImhhcyIsInBhcmVudCIsInVwZGF0ZSIsImZldGNoaW5nIiwiZ2VuZXJhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwiU2Vzc2lvbnMiLCJTZXNzaW9uc1Byb3ZpZGVyIiwidXJsIiwiYmFzZVVybCIsInNldExlc3NvbiIsInRyYWNlIiwiYWNjZXNzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJnY2xhc2Vzcy9pdGVtLnRzIiwibGVzc29ucy9DaGF0SW50cm9kdWN0aW9ucy9pbmRleC50cyIsImxlc3NvbnMvQ2hhdEludHJvZHVjdGlvbnMvaW50cm9kdWN0aW9uLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L1Byb3ZpZGVyLnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2luZGV4LnRzIiwibGVzc29ucy9FbGVtZW50cy9FbGVtZW50L2ludGVyZmFjZS50cyIsImxlc3NvbnMvRWxlbWVudHMvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2l0ZW0udHMiLCJsZXNzb25zL3RvcGljLnRzIiwic2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsInNlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19