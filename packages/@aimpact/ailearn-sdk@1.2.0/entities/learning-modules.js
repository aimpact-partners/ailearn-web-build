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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.2"]]);
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
        hash: 2966068170,
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
                ...payload
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
        hash: 3575223858,
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
            async saveDraft(specs = {}, queue = true) {
              // merge con lo pendiente
              this.#pending = this.#pending ? {
                ...this.#pending,
                ...specs
              } : specs;
              clearTimeout(this.#timer);
              if (!queue) {
                return await this.#processQueue();
              }
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
              this.fetching = true;
              const data = await this.#getSuggestions({
                type: 'objective',
                id: this.id,
                objective
              });
              this.fetching = false;
              this.setCredits(data.credits);
              return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl9wcm92aWRlciIsIkl0ZW0iLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwicHJlZml4Iiwic3VmaXgiLCJFcnJvciIsImZvcm1hdHRlZFByb21wdCIsInRleHQiLCJwaWN0dXJlIiwiZ2VuZXJhdGVJbWFnZSIsImZpbGVzIiwidXJscyIsImFzc2V0IiwiYWRkQXNzZXQiLCJ1cGxvYWRJbWFnZSIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJfY29sbGVjdGlvbiIsIkFzc2V0cyIsIkNvbGxlY3Rpb24iLCJBc3NldCIsIl9zdGFydHVwIiwic3JjIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiQWN0aXZpdHlNYXRlcmlhbHNQcm92aWRlciIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUFydGljbGUiLCJlcnJvciIsImdlbmVyYXRlTWF0ZXJpYWwiLCJnZW5lcmF0ZUF1ZGlvIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwiYXNzZXRzIiwiYWRkSXRlbXMiLCJyZW1vdmVBc3NldCIsImRlbGV0ZUFzc2V0IiwiX2FwaSIsIl9zZXNzaW9uIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJkcmFmdElkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJ1cmwiLCJwb3N0Iiwic3RhdHVzIiwibWF0ZXJpYWxOYW1lIiwibW9kdWxlSWQiLCJhc3NldElkIiwiX3N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9ucyIsImxvYWQiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiZmlsZSIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImVudHJpZXMiLCJPYmplY3QiLCJmaWVsZHMiLCJrZXkiLCJvcHRpb25hbCIsImlzQXJyYXlWYWxpZCIsImFycmF5Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJjb25maWciLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl92YWxpZGF0ZURhdGEiLCJzdHJ1Y3R1cmVOYW1lIiwiZWxlbWVudCIsImdyb3VwZWQiLCJmaWVsZFN0cnVjdHVyZSIsInNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwidGFzayIsInJlcXVpcmVkIiwicm9sZSIsImxhYmVsIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJFeGVyY2lzZUFjdGl2aXR5U3BlY3MiLCJleGVyY2lzZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInJlcXVlc3RlZFRhc2siLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0U3VnZ2VzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJtb2R1bGUiLCJhdmFpbGFibGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiYXZhaWxhYmxlSW1hZ2VzIiwiaW1hZ2VzIiwidG90YWxJbWFnZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwicGVuZGluZyIsInJ1bm5pbmciLCJ0aW1lciIsImRlYm91bmNlTXMiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwicXVldWUiLCJjbGVhclRpbWVvdXQiLCJwcm9jZXNzUXVldWUiLCJzZXRUaW1lb3V0IiwiI3Byb2Nlc3NRdWV1ZSIsImJhdGNoIiwidG90YWxBY3Rpdml0aWVzIiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiLCJpbWFnZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2Fzc2V0cy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2Fzc2V0cy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9leGVyY2lzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mcmVlLWNvbnZlcnNhdGlvbi50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJRCxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLE9BQU9DLFlBQVksR0FBRyxJQUFJO1lBRTFCLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixj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