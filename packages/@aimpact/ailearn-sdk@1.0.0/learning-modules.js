System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "uuid@9.0.1", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Credits, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, ISuggestionResponse, __beyond_pkg, hmr;
  _export({
    Credits: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    LearningModules: void 0,
    IActivities: void 0,
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModule: void 0,
    ISuggestionResponse: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Entities) {
      dependency_2 = _beyondJsReactive120Entities;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk101Api) {
      dependency_8 = _aimpactChatSdk101Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/chat-sdk/api', dependency_8]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./coins/credits
      *******************************/
      ims.set('./coins/credits', {
        hash: 3044232913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['consumed', 'total']
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*****************************
      INTERNAL MODULE: ./coins/index
      *****************************/

      ims.set('./coins/index', {
        hash: 16742768,
        creator: function (require, exports) {
          "use strict";

          var _model = require("@beyond-js/reactive/model");
          class CoinModel extends _model.ReactiveModel {
            constructor(initialCoins) {
              super({
                coins: initialCoins,
                properties: ['coins']
              });
            }
            consume(amount) {}
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./coins/types/coins
      ***********************************/

      ims.set('./coins/types/coins', {
        hash: 2316480134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/

      ims.set('./collection/index', {
        hash: 1826412075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("../item");
          var _provider = require("./provider");
          /*bundle*/
          class LearningModules extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Modules',
                db: 'chat-api',
                item: _item.LearningModule,
                provider: _provider.ModulesProvider,
                localdb: false
              });
              this.orderBy = 'timeCreated';
              globalThis.collection = this;
            }
            async load(args) {
              const data = await super.load(args);
              this.triggerEvent('items.loaded');
              return data;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /*************************************
      INTERNAL MODULE: ./collection/provider
      *************************************/

      ims.set('./collection/provider', {
        hash: 2976651968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModulesProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              if (specs.route === 'community') {
                const {
                  status,
                  data
                } = await this.#api.get(`/community/modules`);
                return {
                  status,
                  data: {
                    entries: data.items ?? []
                  }
                };
              }
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              return {
                status,
                data: {
                  entries: data.items ?? []
                }
              };
            };
            async deleteItems(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.delete(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error deleting module');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.ModulesProvider = ModulesProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/activities
      ***************************************/

      ims.set('./interfaces/activities', {
        hash: 1670046334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./interfaces/draft-improvements
      ***********************************************/

      ims.set('./interfaces/draft-improvements', {
        hash: 2979653217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/interfaces
      ***************************************/

      ims.set('./interfaces/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./interfaces/learning-module
      ********************************************/

      ims.set('./interfaces/learning-module', {
        hash: 3287821027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./introduction/element
      **************************************/

      ims.set('./introduction/element', {
        hash: 2604797932,
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

      /************************************
      INTERNAL MODULE: ./introduction/index
      ************************************/

      ims.set('./introduction/index', {
        hash: 23176832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/http-suite/api");
          var _element = require("./element");
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
                await this.isReady;
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
                  const instance = new _element.IntroductionElement(element, this.#parent);
                  this.#items.set(element.type, instance);
                });
              } catch (e) {
                console.error('error loading introduction', e);
              }
            }
          }
          exports.Introduction = Introduction;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./introduction/interfaces
      *****************************************/

      ims.set('./introduction/interfaces', {
        hash: 4198660095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/activities/index
      ***************************************/

      ims.set('./item/activities/index', {
        hash: 4039456007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _suggestions = require("../../suggestions");
          var _item = require("./item");
          var _types = require("./types");
          /**
           * type
           *
           * 1. Contenido/Teoría (ID: content-theory)
           * 2. Conversación (ID: conversation)
           * 3. Multiple-Choice (ID: multiple-choice):
           * 4. Hablado (ID: spoken)
           * 5. Escrito (ID: written) # Esta no la vamos a usar hasta que implementemos la pantalla de assignments
           */
          class Activities extends _model.ReactiveModel {
            #learningModule;
            #api;
            #parent;
            #suggestions;
            #items = new Map();
            get items() {
              return [...this.#items.values()].sort((a, b) => a.order - b.order);
            }
            get map() {
              return this.#items;
            }
            get types() {
              return _types.ActivityTypes.items;
            }
            get valid() {
              if (this.items.length === 0) return false;
              return this.items.every(item => item.state === 'completed');
            }
            constructor(learningModule) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
            }
            setItems(data) {
              data.forEach(async (activity, index) => {
                if (this.#items.has(activity.id)) {
                  const item = this.#items.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity({
                  ...activity,
                  index,
                  learningModule: this.#learningModule
                });
                this.#items.set(instance.id, instance);
              });
            }
            remove(id) {
              if (!this.#items.has(id)) return;
              this.#items.delete(id);
              this.trigger('change');
              return true;
            }
            getItems() {
              const data = [];
              this.#items.forEach(item => data.push(item.getData()));
              return data;
            }
            clear() {
              this.#items.clear();
              this.trigger('change');
            }
            async add(type, manual = false) {
              const activity = new _item.Activity({
                type,
                manual,
                learningModule: this.#learningModule,
                order: this.items.length,
                language: this.#learningModule.language
              });
              await activity.isReady;
              this.#items.set(activity.id, activity);
              this.#learningModule.triggerEvent();
              return activity;
            }
            #saveTimeout;
            async reorder(items) {
              items.forEach((item, index) => {
                item.order = index;
              });
              // Clear existing timeout if there is one
              if (this.#saveTimeout) {
                clearTimeout(this.#saveTimeout);
              }
              this.#saveTimeout = setTimeout(() => this.#learningModule.saveDraft(), 500);
              // await this.#parent.saveDraft();
              // console.log(40, 'guardamos', this.#items);
            }
          }

          exports.Activities = Activities;
        }
      });

      /**************************************
      INTERNAL MODULE: ./item/activities/item
      **************************************/

      ims.set('./item/activities/item', {
        hash: 2394035483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _suggestions = require("./../../suggestions");
          var _materials = require("./materials");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _factory = require("./specs/factory");
          var _types = require("./types");
          var _uuid = require("uuid");
          var _model = require("@beyond-js/reactive/model");
          /* bundle */
          class Activity extends _model.ReactiveModel {
            #properties = ['id', 'type', 'title', 'description', 'order', 'objective', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions'];
            get types() {
              return _types.ActivityTypes.items;
            }
            #dataType;
            get dataType() {
              this.#dataType = _types.ActivityTypes.get(this.type);
              return this.#dataType;
            }
            #api;
            #learningModule;
            get learningModule() {
              return this.#learningModule;
            }
            #suggestions;
            #settingsType;
            #specs;
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            get defaultLanguage() {
              return this.#learningModule?.language;
            }
            #materials;
            get materials() {
              return this.#materials;
            }
            set materials(value) {
              this.#materials.set(value);
            }
            /**
             * Indicates if the activity is currently defined as a manual activity.
             */
            #manual;
            get manual() {
              return this.#manual;
            }
            set manual(value) {
              this.#manual = value;
            }
            get aiCompleted() {
              const type = _types.ActivityTypes.get(this.type);
              /**
               * If the type does not have AI content, then it is considered complete.
               */
              if (!type?.aiContent) return true;
              return type.aiContent.every(field => {
                if (['role', 'objective'].includes(field)) {
                  return !!this.specs[field];
                }
                return !!this[field];
              });
            }
            /**
             * Evaluates the current state of the object based on the completeness of its materials and specifications.
             * This method assesses both `materials` and `specs` derived from the object's settings type, determining
             * if they are fully defined and non-empty. The state is categorized into one of three outcomes:
             * 'empty', 'completed', or 'processing'.
             *
             * ## States Defined:
             * - `'empty'`: Both `materials` and `specs` are either not defined or contain no valid entries.
             * - `'completed'`: All entries in both `materials` and `specs` are valid and non-empty.
             * - `'processing'`: Partial completeness is detected, where not all, but at least one, entry in either
             *   `materials` or `specs` is valid and non-empty.
             *
             * ## Preconditions:
             * - The object must have `#settingsType` property that includes `materials` and `specs` arrays.
             *   The `materials` and `specs` can contain strings or objects with a `name` property.
             * - The object must have `#materials` and `#specs` private properties used to store the actual
             *   values for materials and specifications, which are matched against `#settingsType`.
             *
             * ## Note:
             * This method relies heavily on the internal structure and initialization of `#settingsType`,
             * `#materials`, and `#specs` private properties. Ensure these are correctly set before invoking
             * `get state()`.
             *
             * @returns {string} The current state of the object: 'empty', 'completed', or 'processing'.
             */
            get state() {
              const type = this.#settingsType;
              const materials = !type.materials ? [] : type.materials?.filter(item => item.required);
              const totalMaterials = materials.reduce((acc, item) => {
                const {
                  name
                } = item;
                if (Array.isArray(this.#materials[name])) {
                  return this.#materials[name].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#materials[name]) ? acc : acc + 1;
              }, 0);
              // const totalSpecs = specs.reduce((acc, item) => {
              // 	if (Array.isArray(this.#specs[item])) {
              // 		return this.#specs[item].length ? acc + 1 : acc;
              // 	}
              // 	console.log(20, this.#specs);
              // 	return [undefined, null, ''].includes(this.#specs[item]) ? acc : acc + 1;
              // }, 0);
              const fields = !!this.title && !!this.description;
              if (fields && totalMaterials === 0 && !this.specs.valid) return 'processing'; // real state is 'empty'
              if (fields && totalMaterials === materials.length && this.specs.valid) return 'completed';
              return 'processing';
            }
            get prepared() {
              const type = this.#settingsType;
              const includesObjective = type.specs.includes('objective');
              return !!this.title && !!this.description && (!includesObjective || includesObjective && !!this.specs.objective);
            }
            constructor(data) {
              super();
              this.reactiveProps(['type', 'title', 'description', 'objective', 'duration', 'language']);
              this.#learningModule = data.learningModule;
              this.id = data.id ?? (0, _uuid.v4)();
              this.#specs = _factory.ActivitySpecsFactory.get(data.type, this.#learningModule, this);
              this.#settingsType = _types.ActivityTypes.get(data.type);
              this.#materials = new _materials.ActivityMaterials(this, this.#learningModule, this.#settingsType.materials);
              if (!this.#settingsType) throw new Error(`Activity type ${data.type} not found`);
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#manual = data.manual ?? false;
              if (data.materials) {
                this.#materials.set(data.materials, true);
              }
              this.#suggestions = new _suggestions.Suggestions();
            }
            //@ts-ignore
            set(data) {
              if (data.materials) {
                this.#materials.set(data.materials);
              }
              this.#properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                if (property === 'materials') {
                  if (typeof this.materials?.getData === 'function') {
                    output[property] = this[property]?.getData();
                  }
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'activity',
                  id: this.#learningModule.id,
                  activity: this.type,
                  activityId: this.id,
                  language: this.language,
                  notes
                });
                await this.set(data);
                this.#learningModule.saveDraft();
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param observations
             */
            async generatePicture(prompt = '') {
              if (!prompt) {
                throw new Error('Prompt is required to generate a picture for the activity.');
              }
              const stringFormat = {
                en: 'generate the image in 16:9 format.',
                pt: 'gerar a imagem no formato 16:9.',
                de: 'generieren Sie das Bild im 16:9-Format.',
                es: 'generar la imagen en formato 16:9.'
              };
              prompt += ` ${stringFormat[this.language] ?? stringFormat.en}`;
              const {
                url
              } = await this.#suggestions.image({
                prompt,
                size: '1792x1024',
                format: 'url'
              });
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoint = `/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`;
              const saveResponse = await this.#api.post(endpoint, {
                url
              });
              this.picture = saveResponse.data.picture;
              this.triggerEvent('image.generated');
              if (!saveResponse.status) {
                throw new Error(saveResponse.error);
              }
              return this.picture;
            }
            async clearContent() {
              await this.specs.clear();
              await this.materials.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              await this.set(specs);
              return this.#learningModule.saveDraft();
            }
          }
          exports.Activity = Activity;
          0;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./item/activities/materials/index
      *************************************************/

      ims.set('./item/activities/materials/index', {
        hash: 3352065334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterials extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            #items;
            get items() {
              return this.#items;
            }
            #api;
            #parent;
            #learningModule;
            #questions;
            #originalData = {
              article: '',
              synthesis: '',
              dyslexia: '',
              introduction: '',
              flashcard: {}
            };
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            data = [];
            get empty() {
              const hasContent = this.properties.some(property => !!this[property]);
              return !hasContent;
            }
            constructor(parent, module, settings) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = settings ? settings.map(item => typeof item === 'string' ? item : item.name) : [];
              this.#items = settings ?? [];
              this.#learningModule = module;
              this.#parent = parent;
            }
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData, true);
            }
            async generate(name, notes) {
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent(notes);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  type: this.#parent.type,
                  description: this.#parent.description,
                  article: this.article,
                  language: this.#parent.language,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating materials');
                }
                await this.set(data);
                this.#learningModule.saveDraft();
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param data
             * @param persistedData  is used to overwrite values
             */
            set(data, persistedData = false) {
              if (persistedData) {
                this.#originalData = data;
              }
              this.data.push(data);
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
              this.triggerEvent();
            }
            async generateContent(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateAudio(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {});
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./item/activities/specs/character-talk
      ******************************************************/

      ims.set('./item/activities/specs/character-talk', {
        hash: 1511272129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class CharacterTalkActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective', 'character'];
            properties = ['objective', 'character'];
            get valid() {
              return !!this.objective && !!this.character;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['character']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./item/activities/specs/conversation
      ****************************************************/

      ims.set('./item/activities/specs/conversation', {
        hash: 1872403344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ConversationActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective'];
            properties = ['objective'];
            get valid() {
              return !!this.objective;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['kind', 'description', 'topics', 'criterias', 'activityId']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.ConversationActivitySpecs = ConversationActivitySpecs;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./item/activities/specs/factory
      ***********************************************/

      ims.set('./item/activities/specs/factory', {
        hash: 3776427608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _ = require("./");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ActivitySpecsFactory {
            static TYPES = {
              default: _.ActivitySpecs,
              'multiple-choice': _multipleChoice.MultipleChoiceActivitySpecs,
              spoken: _spoken.SpokenActivitySpecs
            };
            static get(type, learningModule, parent) {
              if (!this.TYPES[type]) return new this.TYPES.default(type, learningModule, parent);
              return new this.TYPES[type](type, learningModule, parent);
              // return new this.TYPES[type](parent);
            }
          }

          exports.ActivitySpecsFactory = ActivitySpecsFactory;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./item/activities/specs/index
      *********************************************/

      ims.set('./item/activities/specs/index', {
        hash: 1306715269,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _types = require("../types");
          var _suggestions = require("../../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            #parent;
            properties = ['objective', 'instructions'];
            #api;
            suggestions;
            learningModule;
            get valid() {
              return this.isValid;
            }
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            get hasValues() {
              const has = this.properties.some(property => {
                if (property === 'objective') return false;
                if (this[property] && Array.isArray(this[property])) {
                  return this[property].length > 0;
                }
                return !!this[property];
              });
              return has;
            }
            get empty() {
              return !this.hasValues;
            }
            #type;
            get type() {
              return this.#type;
            }
            constructor(type, learningModule, parent) {
              super();
              const settings = _types.ActivityTypes.get(type);
              this.learningModule = learningModule;
              this.parent = parent;
              this.#type = type;
              if (!settings) {
                throw new Error(`Activity type ${type} not found`);
              }
              this.suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = Array.isArray(settings.specs) ? settings.specs : [];
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                change = true;
                if (!data[property]) return;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => output[property] = this[property]);
              return output;
            }
            async generate(notes, specs) {
              this.fetching = true;
              try {
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.learningModule.id,
                  activityId: this.#parent.id,
                  activity: this.type,
                  notes,
                  ...specs
                });
                await this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                this.fetching = false;
                throw e;
              }
            }
            clear() {
              this.properties.forEach(property => {
                /**
                 * the objective is generated by AI, so we don't want to clear it
                 */
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/index
      *************************************************************/

      ims.set('./item/activities/specs/multiple-choice/index', {
        hash: 3471700775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _ = require("../");
          var _questions = require("./questions");
          /**
           * criteria
           */
          class MultipleChoiceActivitySpecs extends _.ActivitySpecs {
            #parent;
            properties = ['questions', 'related'];
            #questions = [];
            get questions() {
              return this.#questions;
            }
            get valid() {
              return this.questions.length > 0 && this.#questions.every(item => item.valid);
            }
            get isValid() {
              return this.valid;
            }
            get questionLabels() {
              return this.questions.map(item => item.question);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (property === 'questions' && data.hasOwnProperty(property)) {
                  if (data[property]) change = true;
                  const questions = data[property]?.map((data, index) => {
                    const questionModel = this.#questions[index] ?? new _questions.ActivityQuestion(this.parent);
                    const specs = typeof data === 'string' ? {
                      question: data
                    } : data;
                    questionModel.set(specs);
                    return questionModel;
                  });
                  this.#questions = questions;
                  return;
                }
                if (!data.hasOwnProperty(property)) return;
                change = true;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'questions') {
                  output[property] = this[property].map(item => item.getData());
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            clear() {
              this.properties.forEach(property => {
                if (property === 'questions') {
                  this.#questions = [];
                  return;
                }
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
            addAnswer(index, answer) {
              if (!this.#questions[index]) {
                console.warn('Question not found, index:', index);
                return;
              }
              this.#questions[index].addOption(answer);
              this.triggerEvent();
            }
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.learningModule.id,
                related,
                notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.learningModule.saveDraft();
              this.trigger('specs.generated');
              return data;
            }
            async generateAnswers({
              notes,
              question
            }) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: question ?? this.question,
                  notes
                });
                return data.options;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/questions/index
      ***********************************************************************/

      ims.set('./item/activities/specs/multiple-choice/questions/index', {
        hash: 3924675292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _suggestions = require("../../../../../suggestions");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            suggestions;
            properties = ['question', 'options', 'correctAnswer'];
            #api;
            get valid() {
              return !!this.question && this.options.length > 1 && this.correctAnswer !== undefined && this.correctAnswer !== null;
            }
            constructor(parent) {
              super();
              this.id = (0, _uuid.v4)();
              this.#parent = parent;
              this.learningModule = parent.learningModule;
              this.options = [];
              this.suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            set(data) {
              this.properties.forEach(property => {
                if (property === 'correctAnswer') this[property] = data.correct_answer;
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
            addOption(option) {
              return !!this.question && this.options.length > 1 && ![undefined, null, NaN].includes(this.correctAnswer);
              this.options.push(option);
              this.triggerEvent();
            }
            removeOption(index) {
              this.options.splice(index, 1);
              this.triggerEvent();
            }
            setCorrect(index) {
              if (this.correctAnswer === index) return;
              this.correctAnswer = index;
              this.triggerEvent();
            }
            async generateAnswers({
              notes,
              question
            }) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: question ?? this.question,
                  notes
                });
                this.trigger('specs.generated');
                return data.options;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityQuestion = ActivityQuestion;
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/questions/option
      ************************************************************************/

      ims.set('./item/activities/specs/multiple-choice/questions/option', {
        hash: 3165191194,
        creator: function (require, exports) {
          // export class OptionAnswer {
          //     #correct;
          //     get correct() {
          //         return this.#correct;
          //     }
          //     set correct(value) {
          //         this.#correct = value;
          //     }
          //     get option() {
          //     }
          // }
          "use strict";
        }
      });

      /**********************************************
      INTERNAL MODULE: ./item/activities/specs/spoken
      **********************************************/

      ims.set('./item/activities/specs/spoken', {
        hash: 3202177657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _ = require("./");
          class SpokenActivitySpecs extends _.ActivitySpecs {
            properties = ['objective', 'criteria', 'task', 'assessment'];
            #defaultValues = {
              criteria: [],
              task: '',
              assessment: ''
            };
            #criteria = [];
            get criteria() {
              return this.#criteria;
            }
            set criteria(value) {
              this.#criteria = value;
            }
            get valid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                if (Array.isArray(this[property]) && !this[property].length) return false;
                return acc;
              }, true);
            }
            constructor(type, learningModule, parent) {
              super(type, learningModule, parent);
              this.set(this.#defaultValues);
            }
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                change = true;
                let value = property === 'criteria' && !data[property] ? [] : data[property];
                if (!data.hasOwnProperty(property)) return;
                this[property] = value;
              });
              if (change) this.trigger('change');
            }
            async clear() {
              await this.set(this.#defaultValues);
              this.trigger('change');
            }
          }
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/activities/types
      ***************************************/

      ims.set('./item/activities/types', {
        hash: 2308661213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          class Types {
            #types = [{
              id: 'content-theory',
              name: 'Content/Theory',
              specs: ['objective'],
              aiContent: ['title', 'description', 'objective'],
              materials: [{
                name: 'article'
              }, {
                dependencies: 'article',
                name: 'synthesis'
              }, {
                dependencies: 'article',
                name: 'dyslexia'
              }, {
                dependencies: ['article'],
                name: 'audios'
              }],
              fields: ['language']
            }, {
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role'],
              fields: ['language']
            }, {
              id: 'multiple-choice',
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions', 'language']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: 'spoken',
              name: 'Spoken',
              aiContent: ['title', 'description', 'objective'],
              fields: ['language'],
              specs: ['objective', 'assessment', 'task', {
                name: 'criteria',
                fields: ['name', 'subject']
              }]
            }];
            get items() {
              return this.#types;
            }
            #map = new Map();
            get entries() {
              return this.#map;
            }
            constructor() {
              this.#types.forEach(type => {
                this.#map.set(type.id, type);
              });
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          /*bundle*/
          const ActivityTypes = exports.ActivityTypes = new Types();
        }
      });

      /*********************************************
      INTERNAL MODULE: ./item/assignments/collection
      *********************************************/

      ims.set('./item/assignments/collection', {
        hash: 2276502694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleAssignments extends _model.ReactiveModel {
            #parent;
            #map = new Map();
            #api;
            get entries() {
              return this.#map;
            }
            get items() {
              return Array.from(this.#map.values());
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.orderBy = 'timeCreated';
              this.#parent = parent;
            }
            set(items) {
              if (!Array.isArray(items)) {
                throw new Error('Items must be an array');
              }
              items.forEach(item => {
                const instance = this.#map.has(item.id) ? this.#map.get(item.id) : new _item.ModuleAssignment(this.#parent, item);
                this.#map.set(item.id, instance);
                this.#classrooms.set(item.classroom.id, instance);
              });
            }
            async add(classroomId) {
              const specs = {
                moduleId: this.#parent.id,
                classroomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.ModuleAssignment(this.#parent, response.data);
              this.#map.set(response.data.id, assignment);
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.ModuleAssignments = ModuleAssignments;
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/assignments/item
      ***************************************/

      ims.set('./item/assignments/item', {
        hash: 3596087344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignment = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ModuleAssignment extends _model.ReactiveModel {
            #parent;
            get dashboard() {
              return `/assignments/${this.id}/dashboard/classroom`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            constructor(parent, data) {
              super({
                properties: ['classroom', 'id']
              });
              this.#parent = parent;
              this.set(data);
            }
          }
          exports.ModuleAssignment = ModuleAssignment;
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1192962899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _entities = require("@beyond-js/reactive/entities");
          var _suggestions = require("../suggestions");
          var _activities = require("./activities");
          var _collection = require("./assignments/collection");
          var _provider = require("./provider");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'credits', 'manual' // let the system know that the module was created manually
            ];

            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            #saved;
            get saved() {
              return this.#saved;
            }
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            get completed() {
              return this.valid && this.activities.valid;
            }
            // #credits: Credits;
            // get credits() {
            // 	return this.#credits.getProperties();
            // }
            // set credits(value) {
            // 	this.#credits.set(value);
            // 	this.triggerEvent();
            // }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #api;
            #suggestions;
            static instances = new Map();
            constructor({
              id = undefined,
              type = 'module'
            } = {}) {
              super({
                id,
                localdb: false,
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.#suggestions = new _suggestions.Suggestions();
              this.reactiveProps(['fetchingDraft']);
              this.#activities = new _activities.Activities(this);
              // this.#credits = new Credits();
              this.#assignments = new _collection.ModuleAssignments(this);
              this.#activities.on('change', this.triggerEvent);
              // this.#chatIntroductions = new Introduction(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
              this.contents = {
                characteristics: 0
              };
              globalThis.model = this;
            }
            async processLoad(data) {
              /**
               * this property is used to know when the module has been saved
               * the module is considered saved when it has an id
               * are was persisted in the database
               */
              this.#saved = true;
            }
            async load(...args) {
              const {
                data
              } = await super.load(...args);
              // console.log(0.1, data, data.credits, this.credits);
              //todo: this code must be removed when the reactive model is fixed
              await this.set({
                credits: data.credits
              });
            }
            async set(data) {
              super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              if (!this.owner) this.owner = this.creator;
              // if (data.credits) {
              // 	this.#credits.set(data.credits);
              // }
              if (data.activities && Array.isArray(data.activities)) {
                this.#activities.setItems(data.activities);
              }
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#suggestions.generate({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes
                  // test: true
                });

                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                await this.saveDraft({
                  state: 'confirmed'
                });
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              LearningModule.instances.set(this.id, this);
              return response;
            }
            async refineActivities({
              observations
            }) {
              const data = {
                duration: this.duration,
                description: this.description,
                observations,
                notes: observations,
                target: this.target,
                objective: this.objective,
                id: this.id,
                audience: this.audience
              };
              const answer = await this.#suggestions.generate({
                type: 'activities',
                ...data,
                observations,
                notes: observations,
                totalActivities: 5,
                activities: this.activities.getItems()
              });
              this.set(answer);
              this.triggerEvent('activities.generated');
              return answer;
            }
            /**
             * Returns a list of suggestions to be applied to the module
            
             */
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'objective',
                  id: this.id,
                  objective
                });
                /**
                 * the IDraftImprovement interface is a new structure, so now we need to adapt the response to the new structure
                 */
                return data;
                // return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * Generates a refined objective based on the improvements
             * @param objective The original objective
             * @param improvements The improvements to be applied (array of strings)
             * @returns
             */
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = true;
                const data = await this.#suggestions.generate({
                  type: 'objective-refinements',
                  improvements,
                  id: this.id,
                  objective
                });
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            async activitySuggestions({
              type,
              observations,
              description,
              title
            }) {
              return this.generateSugestions(type, {
                description,
                observations,
                notes: observations,
                title
              });
            }
            async publish(props) {
              this.type = 'module';
              return super.publish(props);
            }
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required');
                }
                const stringFormat = {
                  es: {
                    prefix: 'Ilustación:',
                    sufix: 'genera la imagen en formato 16:9.'
                  },
                  en: {
                    prefix: 'Illustration:',
                    sufix: 'generate the image in 16:9 format.'
                  },
                  de: {
                    prefix: 'Illustration:',
                    sufix: 'generieren Sie das Bild im 16:9-Format.'
                  }
                };
                const format = stringFormat[this.language] ?? stringFormat.en;
                prompt = `${format.prefix} ${prompt} ${format.sufix}`;
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.id}/image`, {
                  url: response.url
                });
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
            }
            async consumeCoins() {
              const response = await this.provider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            }
            clone(...args) {
              return this.provider.clone(...args);
            }
            static async get(specs) {
              // console.log(0.1, specs.id, this.instances);
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 3915103370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            } //
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              this.#parent.set(data);
              this.#parent.activities.setItems(data.activities);
              // if (specs?.progress)
              await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            async getDraft(id) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${id}`);
              if (!status) {
                throw new Error('error getting module draft');
              }
              return data;
            }
            async delete() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
              return data;
            }
            async publish(specs = {}) {
              if (specs.type === 'draft') return this.saveDraft(specs);
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/drafts`, specs);
              if (!response.status) {
                //throw new Error('error saving module draft');
              }
              return response;
            }
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              // return this.#api.post(`/assignments/${this.#parent.id}/coins/consume`, {});
              return this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
            }
            async clone(moduleId, onwerId, entity) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              if (_session.sessionWrapper.user.id === onwerId || entity === 'user') {
                return this.#api.post(`/community/modules/${moduleId}/clone`, {});
              }
              return this.#api.post(`/community/modules/${moduleId}/clone`, {
                organizationId: onwerId,
                entity
              });
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 3743550615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async generate(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!response.status) {
                  let {
                    error: {
                      text: error
                    }
                  } = response;
                  if (error.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (error.includes('The draft does not have the following parameters to process the suggestion:')) {
                    return {
                      error: 'INCOMPLETE_MODULE',
                      fields: error.split(':')[1]
                    };
                  }
                  return {
                    error
                  };
                }
                return response.data;
              } catch (e) {
                throw new Error(e.message);
              }
            }
            async image(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/images/generate', {
                language: 'es',
                ...specs
              });
              if (!response.status) throw new Error(response.error.code);
              /**
               * openai response return an array, the current model (dalle-3) generates always a unique
               * image, so we return always the first element of the array
               */
              return response.data[0];
            }
          }
          exports.Suggestions = Suggestions;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./suggestions/interfaces/index
      **********************************************/

      ims.set('./suggestions/interfaces/index', {
        hash: 2888578579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./coins/credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinsCreditData",
        "name": "ICoinsCreditData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinModuleConsumptionData",
        "name": "ICoinModuleConsumptionData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinAssignmentConsumptionData",
        "name": "ICoinAssignmentConsumptionData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./collection/index",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./interfaces/activities",
        "from": "IActivities",
        "name": "IActivities"
      }, {
        "im": "./item/activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./item/activities/types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./item/index",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./suggestions/interfaces/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./coins/credits').Credits : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./coins/types/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./coins/types/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./coins/types/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./coins/types/coins').ICreditsConsumptionsData : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection/index').LearningModules : value);
        (require || prop === 'IActivities') && _export("IActivities", IActivities = require ? require('./interfaces/activities').IActivities : value);
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./item/activities/item').Activity : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./item/activities/types').ActivityTypes : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./item/index').LearningModule : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./suggestions/interfaces/index').ISuggestionResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsImdsb2JhbFRoaXMiLCJjb2xsZWN0aW9uIiwibG9hZCIsImFyZ3MiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlbiIsInB0IiwiZGUiLCJlcyIsInVybCIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJhc3Nlc3NtZW50IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJyZXNwb25zZSIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJfY29sbGVjdGlvbiIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsInByb2Nlc3NMb2FkIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwcmVmaXgiLCJzdWZpeCIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FDLE9BQUEsQ0FB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