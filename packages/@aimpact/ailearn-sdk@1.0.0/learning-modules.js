System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "uuid@9.0.1", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/api"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_beyondJsReactive1112Entities) {
      dependency_2 = _beyondJsReactive1112Entities;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.52"]]);
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
        hash: 2747266104,
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
        hash: 1395086005,
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
        hash: 2136308954,
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
                    prefix: 'Ilustación: ',
                    sufix: 'genera la imagen en formato 16:9.'
                  },
                  en: {
                    prefix: 'Illustration: ',
                    sufix: 'generate the image in 16:9 format.'
                  },
                  de: {
                    prefix: 'Illustration: ',
                    sufix: 'generieren Sie das Bild im 16:9-Format.'
                  }
                };
                prompt += ` ${stringFormat[this.language] ?? stringFormat.en}`;
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
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              this.instances.set(specs.id, module);
              return module;
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
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 30393467,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlbiIsInB0IiwiZGUiLCJlcyIsInVybCIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJhc3Nlc3NtZW50IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJyZXNwb25zZSIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJfY29sbGVjdGlvbiIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsImFyZ3MiLCJjcmVkaXRzIiwib3duZXIiLCJjcmVhdG9yIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJwdWJsaXNoIiwicmVmaW5lQWN0aXZpdGllcyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJwcm9wcyIsInByZWZpeCIsInN1Zml4IiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImdldERyYWZ0Iiwib253ZXJJZCIsImVudGl0eSIsIm9yZ2FuaXphdGlvbklkIiwidGV4dCIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvb3B0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvaXRlbS9pbmRleC50cyIsIi9pdGVtL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZQUM3Qzs7VUFDQUMsT0FBQSxDQUFBSixPQUFBLEdBQUFB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