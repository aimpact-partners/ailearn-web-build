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
        hash: 3593841439,
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
              if (data.topics) {
                this.#topics.add(data.topics);
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

      /*************************************
      INTERNAL MODULE: ./sessions/assessment
      *************************************/

      ims.set('./sessions/assessment', {
        hash: 220914904,
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
                this.#analysis = data.data.analysis;
                this.#feedback = data.data.feedback;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ImRiIiwic3RvcmVOYW1lIiwicHJvdmlkZXIiLCJHQ2xhc3Nlc1Byb3ZpZGVyIiwibG9hZCIsInNwZWNzIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwiRXJyb3IiLCJleHBvcnRzIiwiRWxlbWVudCIsIlJlYWN0aXZlTW9kZWwiLCJ0eXBlIiwicGFyZW50IiwicGF0aCIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJmZXRjaGluZyIsImdldCIsImxvZyIsIk9iamVjdCIsInZhbHVlIiwiRWxlbWVudHMiLCJNYXAiLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwiaXRlbXMiLCJoYXMiLCJ3YXJuIiwidGl0bGUiLCJrZXlzIiwiaXRlbSIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCJJbnRyb2R1Y3Rpb24iLCJ2YWx1ZXMiLCJpbnN0YW5jZSIsIlRvcGljIiwiaXMiLCJjaGF0SW50cm9kdWN0aW9ucyIsIm9yZGVyIiwibGVzc29uIiwiY29udGVudCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdlbmVyYXRlRWxlbWVudCIsIm5hbWUiLCJUb3BpY3MiLCJtYXAiLCJhZGQiLCJ0b3BpY3MiLCJ0b3BpYyIsImtleSIsImZpbmQiLCJsb2FkRmlyc3QiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImN1cnJpY3VsdW1PYmplY3RpdmVzIiwiTGVzc29ucyIsIkNvbGxlY3Rpb24iLCJMZXNzb24iLCJMZXNzb25zUHJvdmlkZXIiLCJzZXNzaW9uc01hcCIsInRvcGljc0VsZW1lbnRzIiwiZWxlbWVudHNEYXRhIiwicmVhY3RpdmVQcm9wcyIsImlzUmVhZHkiLCJyZWFkeSIsImhhc093blByb3BlcnR5IiwiZ2xvYmFsVGhpcyIsImwiLCJwdWJsaXNoIiwidG9waWNUaXRsZXMiLCJ0IiwiZ2V0UHJvcGVydGllcyIsInNlc3Npb25zIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJjbGFzc1Jvb21JZCIsImdjbGFzcyIsImFkZFNlc3Npb24iLCJsZXNzb25JZCIsImNhbGwiLCJzdHVkZW50VGV4dCIsImFzd2VyIiwiYW5hbHlzaXMiLCJzdWJqZWN0IiwiZXZhbHVhdGlvbiIsImdyYWRlIiwiQXNzZXNzbWVudCIsImZlZWRiYWNrIiwicHJvcHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJTZXNzaW9ucyIsIlNlc3Npb25zUHJvdmlkZXIiLCJ1cmwiLCJiYXNlVXJsIiwic2V0TGVzc29uIiwidHJhY2UiLCJhY2Nlc3MiLCJhcGkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImdjbGFzZXNzL2l0ZW0udHMiLCJsZXNzb25zL0VsZW1lbnRzL0VsZW1lbnQvaW5kZXgudHMiLCJsZXNzb25zL0VsZW1lbnRzL0VsZW1lbnQvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9FbGVtZW50cy9pbmRleC50cyIsImxlc3NvbnMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbkVsZW1lbnQudHMiLCJsZXNzb25zL0ludHJvZHVjdGlvbi9pbmRleC50cyIsImxlc3NvbnMvVG9waWNzL1RvcGljL2luZGV4LnRzIiwibGVzc29ucy9Ub3BpY3MvVG9waWMvaW50ZXJmYWNlLnRzIiwibGVzc29ucy9Ub3BpY3MvaW5kZXgudHMiLCJsZXNzb25zL2NvbGxlY3Rpb24udHMiLCJsZXNzb25zL2l0ZW0udHMiLCJzZXNzaW9ucy9hc3Nlc3NtZW50LnRzIiwic2Vzc2lvbnMvY29sbGVjdGlvbi50cyIsInNlc3Npb25zL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==