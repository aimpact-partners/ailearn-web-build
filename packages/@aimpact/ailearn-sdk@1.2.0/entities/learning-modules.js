System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/entities/item", "@beyond-js/reactive@2.1.2/model", "@beyond-js/reactive@2.1.2/entities/collection", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "zod@3.25.67", "@aimpact/ailearn-sdk@1.2.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Activity, Assets, Asset, ActivityProvider, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, ModuleListItem, ActivityType, IActivityListItem, IOwnerData, IActivityDraftData, ISuggestionResponse, IModuleListItem, ILearningModuleDraft, ICreditsConsumptionsData, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, IEvaluationActivity0, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assets: void 0,
    Asset: void 0,
    ActivityProvider: void 0,
    ActivityTypes: void 0,
    LearningModuleBase: void 0,
    LearningModules: void 0,
    CommunityLearningModule: void 0,
    Credits: void 0,
    Draft: void 0,
    LearningModule: void 0,
    ModuleListItem: void 0,
    ActivityType: void 0,
    IActivityListItem: void 0,
    IOwnerData: void 0,
    IActivityDraftData: void 0,
    ISuggestionResponse: void 0,
    IModuleListItem: void 0,
    ILearningModuleDraft: void 0,
    ICreditsConsumptionsData: void 0,
    IActivityObjective: void 0,
    IActivityBase: void 0,
    IContentTheoryActivity: void 0,
    ICharacterTalkActivity: void 0,
    IDebateActivity: void 0,
    IMultipleChoiceActivity: void 0,
    ISpokenActivity: void 0,
    IEvaluationActivity0: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_1 = _beyondJsReactive212EntitiesItem;
    }, function (_beyondJsReactive212Model) {
      dependency_2 = _beyondJsReactive212Model;
    }, function (_beyondJsReactive212EntitiesCollection) {
      dependency_3 = _beyondJsReactive212EntitiesCollection;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_zod2) {
      dependency_7 = _zod2;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_8 = _aimpactAilearnSdk120Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/reactive/entities/collection', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['zod', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 1492276237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
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
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()].sort((a, b) => a.order - b.order);
            }
            static isCollection = true;
            #saveTimeout;
            constructor(parent, args) {
              super();
              this.#learningModule = parent;
            }
            setParent(parent) {
              this.#learningModule = parent;
            }
            getItems() {
              const data = [];
              this.#map.forEach(item => {
                data.push(item.getProperties());
              });
              return data;
            }
            get valid() {
              return this.items.every(item => {
                return item.state === 'completed';
              });
            }
            clear() {
              this.#map.clear();
              this.trigger('change');
            }
            get availableTypes() {
              return ['content-theory', 'debate', 'multiple-choice', 'character-talk', 'spoken', 'hand-written', 'written', 'free-conversation', 'exercise'];
            }
            setItems(data) {
              if (!data) return;
              data.forEach((activity, index) => {
                if (!this.availableTypes.includes(activity.type)) {
                  console.warn('The activity type', activity.type, 'is not available');
                  return;
                }
                if (this.#map.has(activity.id)) {
                  const item = this.#map.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity(this.#learningModule, {
                  ...activity,
                  index
                });
                this.#map.set(instance.id, instance);
              });
              return {
                updated: true
              };
            }
            set(data) {
              if (Array.isArray(data)) {
                return this.setItems(data);
              }
              const response = super.set(data);
              // this.types = data.types;
              return response;
            }
            /**
             * Add a new activity to the learning module when it is a Draft
             *
             * @param type
             * @param manual
             * @returns
             */
            async add(type, manual = false) {
              if (!this.availableTypes.includes(type)) {
                console.warn('The activity type', type, 'is not available');
                return;
              }
              const activity = new _item.Activity(this.#learningModule, {
                type,
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#map.set(activity.instanceId, activity);
              this.#learningModule.saveDraft();
              return activity;
            }
            /**
             * TODO: Validate this method
             * @param items
             */
            async reorder(items) {
              items.forEach((item, index) => {
                item.order = index;
              });
              return this.#learningModule.saveDraft();
            }
            async remove(id) {
              if (!this.#map.has(id)) {
                console.warn('The activity', id, 'does not exist in the collection');
                return;
              }
              this.#map.delete(id);
              await this.#learningModule.saveDraft();
              this.trigger('change');
            }
            clean() {
              // TODO: Implement this method
            }
            get(id) {
              return this.#map.get(id);
            }
            has(id) {
              return this.#map.has(id);
            }
            getItemProperties() {
              const items = [];
              for (let item of this.items) {
                items.push(item.getProperties());
              }
              return items;
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************
      INTERNAL MODULE: ./activities/item
      *********************************/

      ims.set('./activities/item', {
        hash: 2221922715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _materials = require("./materials");
          var _factory = require("./specs/factory");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _item.Item {
            get state() {
              return this.specs.valid && this.title && this.description ? 'completed' : 'processing';
            }
            get prepared() {
              return this.specs.objective && this.title && this.description;
            }
            get id() {
              return this.instanceId;
            }
            get instanceId() {
              //@ts-ignore
              return super.id ?? this.__instanceId;
            }
            #learningModule;
            get parent() {
              return this.#learningModule;
            }
            get objective() {
              return this.specs?.objective;
            }
            get structure() {
              return {};
            }
            get unpublished() {
              return super.unpublished || this.specs.unpublished;
            }
            get readyToTest() {
              return this.progressData.filter(item => !item).length === 0;
            }
            get progressData() {
              const output = [!!this.title, !!this.description];
              if (this.specs.structure.general) output.push(this.specs.validateData('general'));
              // if (this.specs.structure.advanced) output.push(this.specs.validateData('advanced'));
              if (this.specs.structure.agent) output.push(this.specs.validateData('agent'));
              return output;
            }
            get progressFields() {
              return [{
                name: 'title'
              }, {
                name: 'description'
              }, ...this.specs.progressFields];
            }
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                provider: _provider.ActivityProvider,
                //@ts-ignore
                settings: {
                  layout: 'main-chat-layout'
                },
                properties: ['id', 'type', 'title', 'settings', 'description', 'order', 'types', 'duration', 'picture', 'language', 'pictureSuggestions', 'type', {
                  name: 'materials',
                  value: _materials.ActivityMaterials
                }, {
                  name: 'specs',
                  value: _factory.ActivitySpecsFactory.get(args.type)
                }]
              });
              this.#learningModule = learningModule;
              this.materials.setParents(this, this.#learningModule);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
                this.trigger('change');
              });
            }
            async generate({
              notes,
              objective,
              related
            }) {
              try {
                this.fetching = true;
                const data = await this.provider.generate({
                  type: 'activities',
                  id: this.#learningModule.id,
                  activity: this.type,
                  objective,
                  activityId: this.id,
                  language: this.language,
                  notes,
                  related
                });
                await this.set(data);
                await this.specs.set(data);
                this.specs.saveChanges();
                this.saveChanges();
                this.#learningModule.setCredits(data.credits);
                this.#learningModule.saveDraft();
                this.trigger('activity.generated');
                return data;
              } catch (e) {
                console.log(e);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param observations
             */
            async generatePicture(prompt = '', {
              prefix = '',
              sufix = ''
            }) {
              if (!prompt) {
                throw new Error('Prompt is required to generate a picture for the activity.');
              }
              const formattedPrompt = `${prefix} ${prompt} ${sufix}`;
              const response = await this.provider.generatePicture(this.#learningModule.id, this.id, {
                text: formattedPrompt
              });
              this.#learningModule.set({
                credits: response.credits
              });
              this.#learningModule.trigger('credits.change');
              this.picture = response.picture;
              this.triggerEvent('image.generated');
              return this.picture;
            }
            /**
             * Generates an image for the activity using the Banana model by default
             * @param param0
             * @returns
             */
            async generateImage({
              text,
              files,
              urls
            }) {
              const {
                credits,
                asset
              } = await this.provider.generateImage({
                text,
                files,
                urls
              });
              this.#learningModule.setCredits(credits);
              return this.materials.addAsset(asset);
            }
            async uploadImage(specs) {
              const {
                credits,
                asset
              } = await this.provider.uploadImage(specs);
              this.#learningModule.setCredits(credits);
              return this.materials.addAsset(asset);
            }
            async clearContent() {
              await this.specs.clear();
              // await this.materials?.clear();
              await this.#learningModule.saveDraft();
            }
            save = async specs => {
              if (specs) await this.set(specs);
              if (!this.unpublished) return;
              this.fetching = true;
              // super.save();
              const response = await this.#learningModule.saveDraft();
              if (specs?.credits) {
                this.#learningModule.setCredits(specs.credits);
              }
              //  persist changes in memory
              this.specs.saveChanges();
              this.trigger('activity.saved');
              this.fetching = false;
              return response;
            };
            remove(id) {
              // TODO: Implement this method
            }
            getProperties() {
              let properties = super.getProperties();
              if (!properties.id) {
                return {
                  ...properties,
                  id: this.instanceId
                };
              }
              return properties;
            }
            async setLayout(layout) {
              if (!['main-chat-layout', 'main-content-layout', 'full-content-layout'].includes(layout)) {
                console.warn('invalid layout', layout);
                return;
              }
              this.set({
                settings: {
                  layout
                }
              });
              await this.#learningModule.saveDraft();
              //  persist changes in memory
              this.trigger('activity.saved');
              this.fetching = false;
            }
            validateData(property) {
              if (this[property]) {
                return !!this[property];
              }
              return this.specs.validateData(property);
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./activities/materials/assets/collection
      ********************************************************/

      ims.set('./activities/materials/assets/collection', {
        hash: 3723152935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assets = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assets extends _collection.Collection {
            constructor(args) {
              super({
                ...args,
                entity: args?.entity || 'Asset',
                item: _item.Asset
              });
            }
          }
          exports.Assets = Assets;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/materials/assets/item
      **************************************************/

      ims.set('./activities/materials/assets/item', {
        hash: 566733318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Asset = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle*/
          class Asset extends _item.Item {
            get src() {
              return `${_startup.sdkConfig.apis.ailearn}${this.picture}`;
            }
            constructor(args) {
              super({
                ...args,
                entity: args?.entity || 'Asset',
                properties: ['id', 'type', 'picture', 'description', ...(args?.properties || [])]
              });
            }
          }
          exports.Asset = Asset;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 1359476630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _provider = require("./provider");
          var _collection = require("./assets/collection");
          class ActivityMaterials extends _model.ReactiveModel {
            #provider;
            #parent;
            #draft;
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            constructor(props = {}) {
              super({
                ...props,
                properties: ['article', 'synthesis', 'introduction', 'dyslexia', 'flashcard', 'audios',
                //@ts-ignore
                {
                  //@ts-ignore
                  name: 'assets',
                  //@ts-ignore
                  value: _collection.Assets
                }]
              });
              //@ts-ignore
              // this.setAssets(props.assets);
              this.#provider = new _provider.ActivityMaterialsProvider(this);
            }
            set(data) {
              const output = super.set(data);
              // this.setAssets(data.assets);
              return output;
            }
            setParents = (parent, draft) => {
              this.#parent = parent;
              this.#draft = draft;
            };
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData);
            }
            #audiosMap = new Map();
            get audiosMap() {
              return this.#audiosMap;
            }
            async generateContent(notes, objective) {
              try {
                this.fetching = true;
                const data = await this.#provider.generateArticle(this.#draft.id, this.#parent.id, {
                  title: this.#parent.title,
                  objective: objective ?? this.#parent.specs.objective,
                  notes
                });
                this.set(data);
                await this.#draft.saveDraft({
                  credits: data.credits
                });
                this.#draft.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
                throw e;
              } finally {
                this.fetching = false;
              }
            }
            async generate(name, notes, objective) {
              if (name === 'article') return this.generateContent(notes, objective);
              try {
                this.fetching = true;
                const data = await this.#provider.generateMaterial(this.#draft.id, this.#parent.id, name, {
                  notes,
                  objective
                });
                this.set(data);
                await this.#draft.saveDraft(data);
                this.#draft.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
                throw e;
              } finally {
                this.fetching = false;
              }
            }
            async generateAudio(materials = []) {
              try {
                const data = await this.#provider.generateAudio(this.#draft.id, this.#parent.id, {
                  materials: materials.length > 0 ? materials : undefined
                });
                await Promise.all([this.#draft.set({
                  credits: data.credits
                }), this.set({
                  audios: {
                    ...this.audios,
                    ...data.audios
                  }
                })]);
                this.#draft.trigger('credits.change');
                this.trigger('audios.changed');
                return data;
              } catch (e) {
                console.error(e);
                throw e;
              }
            }
            async deleteAudio(materials = []) {
              try {
                const data = await this.#provider.deleteAudio(this.#draft.id, this.#parent.id, {
                  materials: materials.length > 0 ? materials : undefined
                });
                await this.set({
                  audios: data.audios
                });
                this.trigger('audios.changed');
                return data;
              } catch (e) {
                console.error(e);
                throw e;
              }
            }
            async deleteAudios() {
              this.set({
                audios: undefined
              });
              return await this.#draft.saveDraft();
            }
            addAsset(data) {
              if (this.assets.map.has(data.id)) return this.assets.map.get(data.id);
              this.assets.addItems([data]);
              this.trigger('change');
              return this.assets.map.get(data.id);
            }
            async removeAsset(id) {
              if (!this.assets.map.has(id)) return;
              await this.#provider.deleteAsset(this.#draft.id, this.#parent.id, id);
              this.assets.delete(id);
              this.trigger('change');
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/materials/provider
      ***********************************************/

      ims.set('./activities/materials/provider', {
        hash: 2634900347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterialsProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterialsProvider {
            #api;
            #model;
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#model = model;
            }
            async generateArticle(draftId, activityId, specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const url = `/modules/drafts/${draftId}/activities/${activityId}/materials/article`;
              const response = await this.#api.post(url, specs);
              if (!response.status) {
                throw new Error('error generating article material');
              }
              return response.data;
            }
            async generateMaterial(draftId, activityId, materialName, specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const url = `/modules/drafts/${draftId}/activities/${activityId}/materials/${materialName}`;
              const response = await this.#api.post(url, specs);
              if (!response.status) {
                throw new Error('error generating materials');
              }
              return response.data;
            }
            async generateAudio(draftId, activityId, specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const url = `/modules/drafts/${draftId}/activities/${activityId}/materials/audio`;
              const response = await this.#api.post(url, specs);
              if (!response.status) {
                throw new Error('error generating audio material');
              }
              return response.data;
            }
            async deleteAudio(draftId, activityId, specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const url = `/modules/drafts/${draftId}/activities/${activityId}/materials/audio`;
              const response = await this.#api.delete(url, specs);
              if (!response.status) {
                throw new Error('error deleting audio material');
              }
              return response.data;
            }
            async deleteAsset(moduleId, activityId, assetId) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const url = `/modules/${moduleId}/activities/${activityId}/assets/${assetId}/picture`;
              const response = await this.#api.delete(url);
              if (!response.status) {
                throw new Error('error deleting asset');
              }
              return response.data;
            }
          }
          exports.ActivityMaterialsProvider = ActivityMaterialsProvider;
        }
      });

      /*************************************
      INTERNAL MODULE: ./activities/provider
      *************************************/

      ims.set('./activities/provider', {
        hash: 3030893247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _suggestions = require("../suggestions");
          /*bundle*/
          class ActivityProvider {
            #api;
            #model;
            #suggestions;
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#model = model;
              this.#suggestions = new _suggestions.Suggestions();
            }
            async load(specs) {
              // This method is required by IEntityProvider but not used for Activity
              // Activities are loaded as part of the learning module draft
              return null;
            }
            async generate(specs) {
              const data = await this.#suggestions.generate(specs);
              return data;
            }
            /**
             *  It generates a cover picture for the activity using the Banana model by default
             *
             * @param moduleId
             * @param activityId
             * @param specs
             * @returns
             */
            async generatePicture(moduleId, activityId, specs) {
              const {
                text
              } = specs;
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const endpoint = `/drafts/${moduleId}/activities/${activityId}/picture`;
              const response = await this.#api.post(endpoint, {
                text
              });
              if (!response.status) {
                throw new Error(response.error);
              }
              return {
                picture: response.data.picture,
                credits: response.data.credits
              };
            }
            async generateImage({
              text,
              files,
              urls
            }) {
              const token = await _session.sessionWrapper.user.token;
              // getting  draftId
              const id = this.#model.parent.id;
              this.#api.bearer(token);
              const requestBody = {
                text
              };
              if (files) {
                requestBody.files = files;
                requestBody.multipart = true;
              }
              if (urls) requestBody.urls = urls;
              const response = await this.#api.post(`/drafts/${id}/activities/${this.#model.id}/assets/images/generate`, {
                ...requestBody
              });
              if (!response.status) {
                if (response.error?.code === 110) {
                  throw new Error('NO_IMAGE_GENERATED');
                }
                if (response.error?.code === 109) {
                  throw new Error('NO_ENOUGH_CONTEXT');
                }
                if (response.error?.code === 236) {
                  throw new Error('NO_CREDITS');
                }
                throw new Error(response.error?.message || 'Failed to generate image');
              }
              return response.data;
            }
            async uploadImage(specs) {
              const token = await _session.sessionWrapper.user.token;
              const id = this.#model.parent.id;
              this.#api.bearer(token);
              const endpoint = `/drafts/${id}/activities/${this.#model.id}/assets/images/upload`;
              const payload = {};
              if (specs.file) {
                payload.file = specs.file;
                payload.multipart = true;
              }
              if (specs.url) {
                payload.url = specs.url;
              }
              const response = await this.#api.post(endpoint, {
                ...payload,
                multipart: true
              });
              if (!response.status) {
                throw new Error(response.error?.message || 'Failed to upload image');
              }
              return response.data;
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 2520513949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _suggestions = require("../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            get structure() {
              return {};
            }
            #learningModule;
            #parent;
            get parent() {
              return this.#parent;
            }
            ignoredProperties = ['objective'];
            #suggestions;
            get suggestions() {
              return this.#suggestions;
            }
            get progressFields() {
              const entries = Object.entries(this.structure);
              const fields = [];
              for (const [key, value] of entries) {
                if (key === 'grouped') continue;
                fields.push({
                  name: key,
                  optional: value.optional
                });
              }
              return fields;
            }
            get valid() {
              const isArrayValid = (array, fields) => Array.isArray(array) && array.length > 0 && array.every(item => Object.keys(fields).every(field => item[field]));
              const validateStructure = structure => {
                return Object.entries(structure).every(([property, config]) => {
                  if (config.type === 'array') {
                    return isArrayValid(this[property], config.fields);
                  } else if (config.optional) {
                    return true;
                  }
                  return !!this[property];
                });
              };
              return validateStructure(this.structure.general) && validateStructure(this.structure.agent);
            }
            get agentData() {
              return this.validateData('agent');
            }
            get generalData() {
              return this.validateData('general');
            }
            get advancedData() {
              return this.validateData('advanced');
            }
            constructor(args = {
              properties: []
            }) {
              super({
                ...args,
                properties: ['objective', ...args.properties]
              });
              this.#suggestions = new _suggestions.Suggestions();
            }
            empty() {
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                if (this.properties[band] === 'objective') {
                  band++;
                  continue;
                }
                //@ts-ignore;
                if (this[this.properties[band]]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
            }
            setParents(parent, learningModule) {
              this.#parent = parent;
              this.#learningModule = learningModule;
            }
            set(properties) {
              super.set(properties);
              this.trigger('properties.changed');
              return {
                updated: true
              };
            }
            async clear() {
              this.properties.forEach(property => {
                if (property === 'objective') return;
                //@ts-ignore
                this[property] = undefined;
              });
              this.trigger('specs.cleaned');
            }
            async generate(notes, specs) {
              this.fetching = true;
              try {
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.#learningModule.id,
                  activityId: this.#parent.id ?? this.#parent.instanceId,
                  activity: this.#parent.type,
                  // todo: in some place the notes is a string, in others it's an object
                  // we need to standardize this
                  notes: typeof notes === 'string' ? notes : notes?.notes,
                  ...specs
                });
                await this.set(data);
                this.saveChanges();
                this.#parent.save(data);
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                this.fetching = false;
                throw e;
              }
            }
            getLearningModule() {
              return this.#learningModule;
            }
            getParent() {
              return this.#parent;
            }
            setCredits(credits) {
              this.#learningModule.set({
                credits
              });
            }
            _validateData(structureName) {
              let band = true;
              if (!this.structure[structureName]) {
                return;
              }
              Object.keys(this.structure[structureName]).forEach(item => {
                const structure = this.structure[structureName][item];
                const property = this[item];
                if (structure.type === 'array' && !!!property?.length) band = false;
                if (structure.type === 'array' && property?.length > 0) {
                  property.forEach(element => {
                    Object.keys(structure.fields).forEach(field => {
                      if (!element[field]) band = false;
                    });
                  });
                }
                if (!property) band = false;
                // if (structure.required && !property) band = false;
              });
              return band;
            }
            validateData(structureName) {
              let band = true;
              const structure = this.structure.grouped ? this.structure[structureName] : this.structure;
              if (!structure) return;
              Object.keys(structure).forEach(item => {
                const fieldStructure = structure[item];
                const property = this[item];
                if (['optional', 'attachments'].includes(item)) return;
                // Validar usando el esquema de Zod si está definido
                if (fieldStructure.schema) {
                  const result = fieldStructure.schema.safeParse(property);
                  if (!result.success) band = false;
                } else {
                  //old logic
                  if (fieldStructure.type === 'array' && !!!property?.length) band = false;
                  if (fieldStructure.type === 'array' && property?.length > 0) {
                    property.forEach(element => {
                      Object.keys(fieldStructure.fields).forEach(field => {
                        if (!element[field]) band = false;
                      });
                    });
                  }
                }
                if (!property) band = false;
              });
              return band;
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/character-talk
      *************************************************/

      ims.set('./activities/specs/character-talk', {
        hash: 1833066880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _base = require("./base");
          class CharacterTalkActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                /**
                 *   This is a flag to indicate that the fields are grouped and is used by validateData method
                 *  to know if the fields are grouped or not
                 */
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  role: {
                    label: 'characterRole',
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 2,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 3,
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions']
              });
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/chat
      ***************************************/

      ims.set('./activities/specs/chat', {
        hash: 3437788342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivitySpecs = void 0;
          var _base = require("./base");
          class ChatActivitySpecs extends _base.ActivitySpecs {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'objectives']
              });
            }
          }
          exports.ChatActivitySpecs = ChatActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/content-theory
      *************************************************/

      ims.set('./activities/specs/content-theory', {
        hash: 232364619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivitySpecs = void 0;
          var _base = require("./base");
          class ContentTheoryActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  topic: {
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 2,
                    advanced: true,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 5,
                    type: 'textarea',
                    optional: true
                  },
                  attachments: {
                    position: 3,
                    multiple: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'topic']
              });
            }
          }
          exports.ContentTheoryActivitySpecs = ContentTheoryActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/debate
      *****************************************/

      ims.set('./activities/specs/debate', {
        hash: 788669142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivitySpecs = void 0;
          var _base = require("./base");
          class DebateActivitySpecs extends _base.ActivitySpecs {
            /**
             * Task, instructions and objectives are common fields for all content activities
             */
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  role: {
                    type: 'textarea',
                    required: true,
                    position: 1
                  },
                  subject: {
                    type: 'textarea',
                    required: true,
                    position: 2
                  },
                  objectives: {
                    position: 3,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 4,
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'instructions', 'subject', 'objectives', 'task']
              });
            }
          }
          exports.DebateActivitySpecs = DebateActivitySpecs;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activities/specs/exercise
      *******************************************/

      ims.set('./activities/specs/exercise', {
        hash: 4120180563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExerciseActivitySpecs = void 0;
          var _base = require("./base");
          class ExerciseActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  topic: {
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  exercise: {
                    position: 2,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 3,
                    advanced: true,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 4,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'topic', 'exercise']
              });
            }
          }
          exports.ExerciseActivitySpecs = ExerciseActivitySpecs;
        }
      });

      /******************************************
      INTERNAL MODULE: ./activities/specs/factory
      ******************************************/

      ims.set('./activities/specs/factory', {
        hash: 412877767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _characterTalk = require("./character-talk");
          var _chat = require("./chat");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _exercise = require("./exercise");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          var _freeConversation = require("./free-conversation");
          class ActivitySpecsFactory {
            static registry = new Map();
            static register(type, ctor) {
              this.registry.set(type, ctor);
            }
            static create(type) {
              const instance = this.registry.get(type);
              if (!instance) {
                throw new Error(`Activity type "${type}" is not registered.`);
              }
              return new instance();
            }
            static get(type) {
              if (!this.registry.has(type)) {
                console.warn(`the activity type passed is not registered, type: ${type}`);
              }
              return this.registry.get(type);
            }
          }
          // Registering the activity types
          exports.ActivitySpecsFactory = ActivitySpecsFactory;
          ActivitySpecsFactory.register('chat', _chat.ChatActivitySpecs);
          ActivitySpecsFactory.register('debate', _debate.DebateActivitySpecs);
          ActivitySpecsFactory.register('character-talk', _characterTalk.CharacterTalkActivitySpecs);
          ActivitySpecsFactory.register('content-theory', _contentTheory.ContentTheoryActivitySpecs);
          ActivitySpecsFactory.register('free-conversation', _freeConversation.FreeConversationActivitySpecs);
          ActivitySpecsFactory.register('exercise', _exercise.ExerciseActivitySpecs);
          ActivitySpecsFactory.register('multiple-choice', _multipleChoice.MultipleChoiceActivitySpecs);
          ActivitySpecsFactory.register('spoken', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('hand-written', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('written', _spoken.SpokenActivitySpecs);
        }
      });

      /****************************************************
      INTERNAL MODULE: ./activities/specs/free-conversation
      ****************************************************/

      ims.set('./activities/specs/free-conversation', {
        hash: 1109991533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FreeConversationActivitySpecs = void 0;
          var _base = require("./base");
          class FreeConversationActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  requestedTask: {
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 2,
                    advanced: true,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 5,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'requestedTask']
              });
            }
          }
          exports.FreeConversationActivitySpecs = FreeConversationActivitySpecs;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/multiple-choice
      **************************************************/

      ims.set('./activities/specs/multiple-choice', {
        hash: 3018563661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          var _zod = require("zod");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            ignoredProperties = ['objective', 'related'];
            get structure() {
              return {
                questions: {
                  required: true,
                  type: 'array',
                  progress: true,
                  schema: _zod.z.array(_zod.z.object({
                    question: _zod.z.string().min(1),
                    options: _zod.z.array(_zod.z.string().min(1)).min(1),
                    correctAnswer: _zod.z.number().int().nonnegative()
                  }).refine(data => data.correctAnswer < data.options.length)),
                  fields: {
                    question: 'input',
                    answers: {
                      type: 'array',
                      fields: {
                        answer: 'input',
                        correct: 'boolean'
                      }
                    }
                  }
                }
              };
            }
            get valid() {
              if (!this.questions || !this.questions.length) return false;
              return this.questions.every(question => {
                return question.question && question.options.length > 0 && question.correctAnswer >= 0 && question.correctAnswer < question.options.length;
              });
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['questions', 'related']
              });
            }
            empty() {
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                const str = this.properties[band];
                if (['objective', 'related'].includes(str)) {
                  band++;
                  continue;
                }
                if (this[str]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
            }
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.getLearningModule().id,
                related,
                // todo: in some place the notes is a string, in others it's an object
                // we need to standardize this
                notes: typeof notes === 'string' ? notes : notes?.notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.parent.save(data);
              this.trigger('specs.generated');
              return data;
            }
            async generateAnswers({
              notes,
              question,
              index
            }) {
              this.fetching = true;
              const data = await this.suggestions.generate({
                type: 'answers',
                id: this.getLearningModule().id,
                question,
                notes
              });
              this.questions[index].options = data.options;
              this.questions[index].correctAnswer = data.correctAnswer;
              this.parent.save(data);
              return this.questions[index];
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/spoken
      *****************************************/

      ims.set('./activities/specs/spoken', {
        hash: 618343526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _base = require("./base");
          class SpokenActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea'
                  }
                },
                agent: {
                  assessment: {
                    type: 'textarea'
                  },
                  criteria: {
                    type: 'array',
                    fields: {
                      name: 'input',
                      subject: 'textarea'
                    }
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'task', 'assessment', 'criteria']
              });
            }
          }
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
        }
      });

      /********************************
      INTERNAL MODULE: ./activity-types
      ********************************/

      ims.set('./activity-types', {
        hash: 2374617754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          var _moduleActivities = require("./types/module-activities");
          class Types {
            #types = [{
              id: _moduleActivities.ActivityType.ContentTheory,
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
              id: _moduleActivities.ActivityType.Debate,
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: _moduleActivities.ActivityType.CharacterTalk,
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role'],
              fields: ['language']
            }, {
              id: _moduleActivities.ActivityType.MultipleChoice,
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions', 'language']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: _moduleActivities.ActivityType.Spoken,
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
                this.#map.set(type.id, type.id);
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

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 1564677649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Assignments extends _collection.Collection {
            #api;
            #parent;
            constructor({
              parent,
              ...args
            } = {
              parent: undefined
            }) {
              super({
                ...args,
                entity: 'Assignments',
                item: _item.Assignment
              });
              this.#parent = parent;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            //@ts-ignore
            set(data) {
              // console.log(3, items);
              if (Array.isArray(data)) data = {
                items: data
              };
              if (!Array.isArray(data.items)) {
                console.warn('se esta asignando assigments sin dato', data, this);
                return;
              }
              this.setItems(data.items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            setItems(items) {
              super.setItems(items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            async add(classroomId) {
              const specs = {
                moduleId: this.#parent.id,
                classroomId
              };
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.Assignment({
                parent: this,
                ...response.data
              });
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 2225456919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          /**
           * TODO: Review if this object is really needed.
           */
          class Assignment extends _item.Item {
            get dashboard() {
              return `/dashboard/${this.id}`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              description: _zod.z.string().optional()
            });
            constructor(args = {}) {
              super({
                ...args,
                entity: 'Assignments',
                properties: ['classroom', 'id']
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /**************************
      INTERNAL MODULE: ./audience
      **************************/

      ims.set('./audience', {
        hash: 618611988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleAudience = void 0;
          var _model = require("@beyond-js/reactive/model");
          class LearningModuleAudience extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['category', 'level']
              });
            }
          }
          exports.LearningModuleAudience = LearningModuleAudience;
        }
      });

      /**********************
      INTERNAL MODULE: ./base
      **********************/

      ims.set('./base', {
        hash: 27328805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class LearningModuleBase extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'type', 'audience', ...properties]
              });
            }
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
            }
          }
          exports.LearningModuleBase = LearningModuleBase;
        }
      });

      /****************************
      INTERNAL MODULE: ./collection
      ****************************/

      ims.set('./collection', {
        hash: 2362661404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _learningModules = require("./providers/learning-modules");
          /*bundle*/ //your code here
          class LearningModules extends _collection.Collection {
            #audiences = new Map();
            get audiences() {
              return this.#audiences;
            }
            #archived;
            get archived() {
              return this.#archived;
            }
            #type = 'module';
            get type() {
              return this.#type;
            }
            constructor(args = {
              type: 'modules',
              archived: false
            }) {
              super({
                entity: 'LearningModule',
                provider: _learningModules.LearningModuleProvider,
                item: _item.LearningModule,
                ...args
              });
              this.#type = args.type;
              this.#archived = args.archived;
            }
            async load(specs) {
              const response = await super.load(specs);
              return response;
            }
            async loadAudience(language) {
              if (this.#audiences.has(language)) {
                return this.#audiences.get(language);
              }
              const audience = await this.provider.getAudience(language);
              this.#audiences.set(language, audience);
              return audience;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /***************************
      INTERNAL MODULE: ./community
      ***************************/

      ims.set('./community', {
        hash: 3852843409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityLearningModule = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _credits = require("./credits");
          var _providers = require("./providers");
          var _suggestions = require("./suggestions");
          /*bundle */ //your code here
          class CommunityLearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            #api;
            #assignments;
            #credits;
            get credits() {
              return this.#credits.get();
            }
            set credits(data) {
              if (!data) return;
              this.#credits.set(data);
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                properties: ['id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#credits = new _credits.Credits();
              this.#suggestions = new _suggestions.Suggestions();
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.initialize({
                ...args
              });
            }
            set(data) {
              const response = super.set(data);
              if (data.assignments) {
                // todo: @jircdev
                this.#assignments.set(data.assignments);
              }
              // if (!this.owner) this.owner = this.creator;
              this.credits = data.credits;
              if (data.activities) {
                this.#activities.set(data.activities);
              }
              return response;
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
              CommunityLearningModule.instances.set(this.id, this);
              return response;
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
                const data = await this.#getSuggestions({
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
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#credits.set(data.credits);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.provider.load();
              this.set(data);
              this.activities.setItems(data.activities);
              return data;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new CommunityLearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.CommunityLearningModule = CommunityLearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/index
      *******************************/

      ims.set('./credits/index', {
        hash: 513124460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            get available() {
              return this.get().total - this.get().consumed || 0;
            }
            get availableImages() {
              if (!this.images) return 0;
              return this.images.total - this.images.consumed || 0;
            }
            get totalImages() {
              if (!this.images) return 0;
              return this.images.total;
            }
            constructor(args = {
              total: 0,
              consumed: 0
            }) {
              super({
                properties: ['consumed', 'total', 'images', 'text'],
                ...args
              });
            }
            get() {
              if (!!this.text) {
                return this.text;
              }
              return {
                consumed: this.consumed,
                total: this.total
              };
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 4136643725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 691940758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _collection = require("./activities/collection");
          var _base = require("./base");
          var _credits = require("./credits");
          var _suggestions = require("./suggestions");
          /*bundle */ //your code here
          class Draft extends _base.LearningModuleBase {
            #suggestions;
            #saved;
            #pending = null;
            #running = false;
            #timer = null;
            #debounceMs = 500;
            get completed() {
              return this.valid && this.activities.valid;
            }
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'draft',
              ...args
            } = {
              type: 'module'
            }) {
              super({
                id,
                type,
                properties: ['state', 'pictureSuggestions', {
                  name: 'credits',
                  value: _credits.Credits
                }, {
                  name: 'pictures',
                  value: _credits.Credits
                }, {
                  name: 'activities',
                  value: _collection.Activities
                }],
                ...args
              });
              this.type = type;
              this.#suggestions = new _suggestions.Suggestions();
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
            }
            async saveDraft(specs = {}) {
              // merge con lo pendiente
              this.#pending = this.#pending ? {
                ...this.#pending,
                ...specs
              } : specs;
              clearTimeout(this.#timer);
              this.#timer = setTimeout(() => this.#processQueue(), this.#debounceMs);
            }
            async #processQueue() {
              if (!this.#pending || this.#running) return;
              this.#running = true;
              const batch = this.#pending;
              this.#pending = null;
              try {
                const data = {
                  ...this.getProperties(),
                  ...batch,
                  owner: batch.owner ?? this.owner,
                  activities: this.activities.getItems(),
                  type: 'draft'
                };
                this.set({
                  ...data
                });
                await super.publish();
                this.#saved = true;
              } finally {
                this.#running = false;
                // si entraron nuevos cambios mientras tanto, los procesa después
                if (this.#pending) this.#processQueue();
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
                await this.saveDraft();
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes,
                  totalActivities: values.totalActivities
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                setTimeout(async () => {
                  await this.saveDraft({
                    ...data,
                    state: 'confirmed'
                  });
                  this.fetchingDraft = false;
                  this.triggerEvent('activities.generated');
                }, 10);
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.set(data);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.provider.load();
              this.set(data);
              this.activities.setItems(data.activities);
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              await this.set(response);
              this.trigger('credits.change', 'add');
              return response;
            };
            /**
             * Returns a list of suggestions to be applied to the module
            
             */
            async getObjectiveImprovements({
              objective,
              totalActivities
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'objective',
                  id: this.id,
                  objective
                });
                this.setCredits(data.credits);
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
            setCredits(data) {
              this.credits.set(data);
              this.trigger('credits.change');
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
                const data = await this.#getSuggestions({
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
            generatePicture = async (prompt = '', {
              prefix = '',
              sufix = ''
            }) => {
              if (!prompt) {
                throw new Error('Prompt is required');
              }
              const text = `${prefix} ${prompt} ${sufix}`;
              const response = await this.provider.generatePicture({
                text
              });
              this.set(response);
              this.trigger('credits.change');
              this.picture = `${response.picture}?${performance.now()}`;
              this.trigger('image.generated');
              return this.picture;
            };
          }
          exports.Draft = Draft;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1401106681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _error = require("./error");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./assignments/collection");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'types', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'activities', {
                  name: 'assignments',
                  value: _collection.Assignments
                }, 'manual',
                // {
                // 	name: 'audience',
                // 	value: LearningModuleAudience
                // },
                'audience']
              }); // super call ends.
              this.type = type;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
            clone(args) {
              return this.provider.clone(args);
            }
            async deleteItem() {
              const response = await this.provider.deleteItem();
              if (!response.status) throw new _error.CustomError(response.error.text, response.error.code);
              return response;
            }
            restore() {
              return this.provider.restore();
            }
            archive() {
              return this.provider.archive();
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 572354641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleListItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class ModuleListItem extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            activities;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'audience', 'activities']
              });
            }
          }
          exports.ModuleListItem = ModuleListItem;
        }
      });

      /*********************************
      INTERNAL MODULE: ./providers/index
      *********************************/

      ims.set('./providers/index', {
        hash: 489225466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            } //
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const endpoints = {
                community: `/community/modules/${this.#parent.id}`,
                module: `/modules/${this.#parent.id}`,
                draft: `/modules/drafts/${this.#parent.id}`
              };
              const type = this.#parent.type ?? 'module';
              const {
                status,
                data
              } = await this.#api.get(endpoints[type]);
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
            };
            list = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
            };
            async getDraft(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
              return data;
            }
            async deleteItem() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const data = await this.#api.delete(`/modules/${this.#parent.id}`);
              return data;
            }
            async publish(specs = {}) {
              if (this.#parent.type === 'draft') return this.saveDraft(specs);
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/drafts`, specs);
              if (!response.status) {
                //throw new Error('error saving module draft');
              }
              return response;
            }
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              // return this.#api.post(`/assignments/${this.#parent.id}/coins/consume`, {});
              const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
              if (!response.status) {
                throw new Error('error consuming coins');
              }
              return response.data;
            }
            async clone({
              moduleId,
              ownerId,
              entity,
              type
            }) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const endpoints = {
                community: `/community/modules/${moduleId}/clone`,
                module: `/modules/${moduleId}/clone`
              };
              const endpoint = endpoints[type] ?? endpoints.module;
              if (_session.sessionWrapper.user.id === ownerId || entity === 'user') {
                return this.#api.post(endpoint, {});
              }
              return this.#api.post(endpoint, {
                organizationId: ownerId,
                entity
              });
            }
            /**
             *  It generates a cover picture for the activity using the Banana model by default
             *
             * @param moduleId
             * @param activityId
             * @param specs
             * @returns
             */
            async generatePicture(specs) {
              const {
                text
              } = specs;
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const endpoint = `/drafts/${this.#parent.id}/picture`;
              const response = await this.#api.post(endpoint, {
                text
              });
              if (!response.status) {
                throw new Error(response.error);
              }
              return {
                picture: response.data.picture,
                credits: response.data.credits
              };
            }
            getAudience = async language => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/application/metadata/audience`, {
                language
              });
              if (!status) {
                throw new Error('error getting audience');
              }
              return data;
            };
            testActivity = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.post(`/modules/drafts/${draftId}/activities/${activityId}/testing`, {});
              return data;
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./providers/learning-modules
      ********************************************/

      ims.set('./providers/learning-modules', {
        hash: 2946664250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class LearningModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              if (this.#parent.archived) {
                const {
                  data
                } = await this.#api.get(`/modules/archived`, specs);
                return data?.items ?? [];
              }
              if (specs?.route === 'community') {
                delete specs.route;
                const {
                  data
                } = await this.#api.get(`/community/modules`, specs);
                return data?.items ?? [];
              }
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              return data?.items ?? [];
            };
            async deleteItems(id) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
            getAudience = async language => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/application/metadata/audience`, {
                language
              });
              if (!status) {
                throw new Error('error getting audience');
              }
              return data;
            };
          }
          exports.LearningModuleProvider = LearningModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 122768128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async generate(specs) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!response.status) {
                  let {
                    error: {
                      text: errorText
                    },
                    error
                  } = response;
                  if (errorText.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (errorText.includes('The draft does not have the following parameters to process the suggestion:')) {
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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

      /**********************************
      INTERNAL MODULE: ./types/activities
      **********************************/

      ims.set('./types/activities', {
        hash: 338252156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityType = void 0;
          /*bundle*/
          var ActivityType;
          (function (ActivityType) {
            ActivityType["Spoken"] = "spoken";
            ActivityType["MultipleChoice"] = "multiple-choice";
            ActivityType["CharacterTalk"] = "character-talk";
            ActivityType["ContentTheory"] = "content-theory";
            ActivityType["Debate"] = "debate";
            ActivityType["Written"] = "written";
            ActivityType["Exercise"] = "exercise";
            ActivityType["FreeConversation"] = "free-conversation";
            ActivityType["HandWritten"] = "hand-written";
          })(ActivityType || (exports.ActivityType = ActivityType = {}));
        }
      });

      /************************************
      INTERNAL MODULE: ./types/common/owner
      ************************************/

      ims.set('./types/common/owner', {
        hash: 3016744349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./types/draft-improvements
      ******************************************/

      ims.set('./types/draft-improvements', {
        hash: 402250074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./types/drafts
      ******************************/

      ims.set('./types/drafts', {
        hash: 3255660472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 1067830134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/interfaces
      **********************************/

      ims.set('./types/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./types/learning-module-base
      ********************************************/

      ims.set('./types/learning-module-base', {
        hash: 2023505170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/learning-module
      ***************************************/

      ims.set('./types/learning-module', {
        hash: 3556353232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./types/module-activities
      *****************************************/

      ims.set('./types/module-activities', {
        hash: 2425380602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityType = void 0;
          /*bundle*/
          var ActivityType;
          (function (ActivityType) {
            ActivityType["Spoken"] = "spoken";
            ActivityType["MultipleChoice"] = "multiple-choice";
            ActivityType["CharacterTalk"] = "character-talk";
            ActivityType["ContentTheory"] = "content-theory";
            ActivityType["Debate"] = "debate";
            ActivityType["Written"] = "written";
            ActivityType["Image"] = "image";
          })(ActivityType || (exports.ActivityType = ActivityType = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/timeStamp
      *********************************/

      ims.set('./types/timeStamp', {
        hash: 1228819976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./activities/materials/assets/collection",
        "from": "Assets",
        "name": "Assets"
      }, {
        "im": "./activities/materials/assets/item",
        "from": "Asset",
        "name": "Asset"
      }, {
        "im": "./activities/provider",
        "from": "ActivityProvider",
        "name": "ActivityProvider"
      }, {
        "im": "./activity-types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./base",
        "from": "LearningModuleBase",
        "name": "LearningModuleBase"
      }, {
        "im": "./collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./community",
        "from": "CommunityLearningModule",
        "name": "CommunityLearningModule"
      }, {
        "im": "./credits/index",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./draft",
        "from": "Draft",
        "name": "Draft"
      }, {
        "im": "./item",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./list",
        "from": "ModuleListItem",
        "name": "ModuleListItem"
      }, {
        "im": "./types/activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/activities",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/common/owner",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/drafts",
        "from": "IActivityDraftData",
        "name": "IActivityDraftData"
      }, {
        "im": "./types/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }, {
        "im": "./types/learning-module-base",
        "from": "IModuleListItem",
        "name": "IModuleListItem"
      }, {
        "im": "./types/learning-module",
        "from": "ILearningModuleDraft",
        "name": "ILearningModuleDraft"
      }, {
        "im": "./types/learning-module",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/learning-module",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./types/module-activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityObjective",
        "name": "IActivityObjective"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/module-activities",
        "from": "IContentTheoryActivity",
        "name": "IContentTheoryActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ICharacterTalkActivity",
        "name": "ICharacterTalkActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IDebateActivity",
        "name": "IDebateActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IMultipleChoiceActivity",
        "name": "IMultipleChoiceActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ISpokenActivity",
        "name": "ISpokenActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IEvaluationActivity0",
        "name": "IEvaluationActivity0"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/item').Activity : value);
        (require || prop === 'Assets') && _export("Assets", Assets = require ? require('./activities/materials/assets/collection').Assets : value);
        (require || prop === 'Asset') && _export("Asset", Asset = require ? require('./activities/materials/assets/item').Asset : value);
        (require || prop === 'ActivityProvider') && _export("ActivityProvider", ActivityProvider = require ? require('./activities/provider').ActivityProvider : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./activity-types').ActivityTypes : value);
        (require || prop === 'LearningModuleBase') && _export("LearningModuleBase", LearningModuleBase = require ? require('./base').LearningModuleBase : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection').LearningModules : value);
        (require || prop === 'CommunityLearningModule') && _export("CommunityLearningModule", CommunityLearningModule = require ? require('./community').CommunityLearningModule : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits/index').Credits : value);
        (require || prop === 'Draft') && _export("Draft", Draft = require ? require('./draft').Draft : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./item').LearningModule : value);
        (require || prop === 'ModuleListItem') && _export("ModuleListItem", ModuleListItem = require ? require('./list').ModuleListItem : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/activities').ActivityType : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activities').IActivityListItem : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/common/owner').IOwnerData : value);
        (require || prop === 'IActivityDraftData') && _export("IActivityDraftData", IActivityDraftData = require ? require('./types/drafts').IActivityDraftData : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./types/index').ISuggestionResponse : value);
        (require || prop === 'IModuleListItem') && _export("IModuleListItem", IModuleListItem = require ? require('./types/learning-module-base').IModuleListItem : value);
        (require || prop === 'ILearningModuleDraft') && _export("ILearningModuleDraft", ILearningModuleDraft = require ? require('./types/learning-module').ILearningModuleDraft : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/learning-module').IOwnerData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./types/learning-module').ICreditsConsumptionsData : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/module-activities').ActivityType : value);
        (require || prop === 'IActivityObjective') && _export("IActivityObjective", IActivityObjective = require ? require('./types/module-activities').IActivityObjective : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/module-activities').IActivityBase : value);
        (require || prop === 'IContentTheoryActivity') && _export("IContentTheoryActivity", IContentTheoryActivity = require ? require('./types/module-activities').IContentTheoryActivity : value);
        (require || prop === 'ICharacterTalkActivity') && _export("ICharacterTalkActivity", ICharacterTalkActivity = require ? require('./types/module-activities').ICharacterTalkActivity : value);
        (require || prop === 'IDebateActivity') && _export("IDebateActivity", IDebateActivity = require ? require('./types/module-activities').IDebateActivity : value);
        (require || prop === 'IMultipleChoiceActivity') && _export("IMultipleChoiceActivity", IMultipleChoiceActivity = require ? require('./types/module-activities').IMultipleChoiceActivity : value);
        (require || prop === 'ISpokenActivity') && _export("ISpokenActivity", ISpokenActivity = require ? require('./types/module-activities').ISpokenActivity : value);
        (require || prop === 'IEvaluationActivity0') && _export("IEvaluationActivity0", IEvaluationActivity0 = require ? require('./types/module-activities').IEvaluationActivity0 : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl9wcm92aWRlciIsIkl0ZW0iLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwicHJlZml4Iiwic3VmaXgiLCJFcnJvciIsImZvcm1hdHRlZFByb21wdCIsInRleHQiLCJwaWN0dXJlIiwiZ2VuZXJhdGVJbWFnZSIsImZpbGVzIiwidXJscyIsImFzc2V0IiwiYWRkQXNzZXQiLCJ1cGxvYWRJbWFnZSIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJfY29sbGVjdGlvbiIsIkFzc2V0cyIsIkNvbGxlY3Rpb24iLCJBc3NldCIsIl9zdGFydHVwIiwic3JjIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiQWN0aXZpdHlNYXRlcmlhbHNQcm92aWRlciIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUFydGljbGUiLCJlcnJvciIsImdlbmVyYXRlTWF0ZXJpYWwiLCJnZW5lcmF0ZUF1ZGlvIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwiYXNzZXRzIiwiYWRkSXRlbXMiLCJyZW1vdmVBc3NldCIsImRlbGV0ZUFzc2V0IiwiX2FwaSIsIl9zZXNzaW9uIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJkcmFmdElkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJ1cmwiLCJwb3N0Iiwic3RhdHVzIiwibWF0ZXJpYWxOYW1lIiwibW9kdWxlSWQiLCJhc3NldElkIiwiX3N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9ucyIsImxvYWQiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiZmlsZSIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImVudHJpZXMiLCJPYmplY3QiLCJmaWVsZHMiLCJrZXkiLCJvcHRpb25hbCIsImlzQXJyYXlWYWxpZCIsImFycmF5Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJjb25maWciLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl92YWxpZGF0ZURhdGEiLCJzdHJ1Y3R1cmVOYW1lIiwiZWxlbWVudCIsImdyb3VwZWQiLCJmaWVsZFN0cnVjdHVyZSIsInNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwidGFzayIsInJlcXVpcmVkIiwicm9sZSIsImxhYmVsIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJFeGVyY2lzZUFjdGl2aXR5U3BlY3MiLCJleGVyY2lzZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInJlcXVlc3RlZFRhc2siLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0U3VnZ2VzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJtb2R1bGUiLCJhdmFpbGFibGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiYXZhaWxhYmxlSW1hZ2VzIiwiaW1hZ2VzIiwidG90YWxJbWFnZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwicGVuZGluZyIsInJ1bm5pbmciLCJ0aW1lciIsImRlYm91bmNlTXMiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInByb2Nlc3NRdWV1ZSIsIiNwcm9jZXNzUXVldWUiLCJiYXRjaCIsInRvdGFsQWN0aXZpdGllcyIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJDdXN0b21FcnJvciIsIl9lcnJvciIsImNsb25lIiwiZGVsZXRlSXRlbSIsInJlc3RvcmUiLCJhcmNoaXZlIiwiTW9kdWxlTGlzdEl0ZW0iLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0IiwiaW1hZ2UiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9hc3NldHMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9hc3NldHMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZXhlcmNpc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZnJlZS1jb252ZXJzYXRpb24udHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIiwiL2xpc3QudHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL3R5cGVzL2FjdGl2aXRpZXMudHMiLCIvb3duZXIudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyIsIi90aW1lU3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxPQUFPQyxZQUFZLEdBQUcsSUFBSTtZQUUxQixDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWIsY0FBZSxHQUFH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