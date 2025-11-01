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
        hash: 3732336296,
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
                console.log('processQueue', this.#pending);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl9wcm92aWRlciIsIkl0ZW0iLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwicHJlZml4Iiwic3VmaXgiLCJFcnJvciIsImZvcm1hdHRlZFByb21wdCIsInRleHQiLCJwaWN0dXJlIiwiZ2VuZXJhdGVJbWFnZSIsImZpbGVzIiwidXJscyIsImFzc2V0IiwiYWRkQXNzZXQiLCJ1cGxvYWRJbWFnZSIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJfY29sbGVjdGlvbiIsIkFzc2V0cyIsIkNvbGxlY3Rpb24iLCJBc3NldCIsIl9zdGFydHVwIiwic3JjIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiQWN0aXZpdHlNYXRlcmlhbHNQcm92aWRlciIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUFydGljbGUiLCJlcnJvciIsImdlbmVyYXRlTWF0ZXJpYWwiLCJnZW5lcmF0ZUF1ZGlvIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwiYXNzZXRzIiwiYWRkSXRlbXMiLCJyZW1vdmVBc3NldCIsImRlbGV0ZUFzc2V0IiwiX2FwaSIsIl9zZXNzaW9uIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJkcmFmdElkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJ1cmwiLCJwb3N0Iiwic3RhdHVzIiwibWF0ZXJpYWxOYW1lIiwibW9kdWxlSWQiLCJhc3NldElkIiwiX3N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9ucyIsImxvYWQiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiZmlsZSIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImVudHJpZXMiLCJPYmplY3QiLCJmaWVsZHMiLCJrZXkiLCJvcHRpb25hbCIsImlzQXJyYXlWYWxpZCIsImFycmF5Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJjb25maWciLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl92YWxpZGF0ZURhdGEiLCJzdHJ1Y3R1cmVOYW1lIiwiZWxlbWVudCIsImdyb3VwZWQiLCJmaWVsZFN0cnVjdHVyZSIsInNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwidGFzayIsInJlcXVpcmVkIiwicm9sZSIsImxhYmVsIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJFeGVyY2lzZUFjdGl2aXR5U3BlY3MiLCJleGVyY2lzZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInJlcXVlc3RlZFRhc2siLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0U3VnZ2VzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJtb2R1bGUiLCJhdmFpbGFibGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiYXZhaWxhYmxlSW1hZ2VzIiwiaW1hZ2VzIiwidG90YWxJbWFnZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwicGVuZGluZyIsInJ1bm5pbmciLCJ0aW1lciIsImRlYm91bmNlTXMiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwicXVldWUiLCJjbGVhclRpbWVvdXQiLCJwcm9jZXNzUXVldWUiLCJzZXRUaW1lb3V0IiwiI3Byb2Nlc3NRdWV1ZSIsImJhdGNoIiwidG90YWxBY3Rpdml0aWVzIiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiLCJpbWFnZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2Fzc2V0cy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2Fzc2V0cy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9leGVyY2lzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mcmVlLWNvbnZlcnNhdGlvbi50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJRCxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLE9BQU9DLFlBQVksR0FBRyxJQUFJO1lBRTFCLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixjQUFlLEdBQUdZLE1BQU07WUFDOUI7WUFFQUUsU0FBU0EsQ0FBQ0YsTUFBTTtjQUNmLElBQUksQ0FBQyxDQUFBWixjQUFlLEdBQUdZLE1BQU07WUFDOUI7WUFFQUcsUUFBUUEsQ0FBQTtjQUNQLE1BQU1DLElBQUksR0FBMEIsRUFBRTtjQUV0QyxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDZ0IsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3hCRixJQUFJLENBQUNHLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxhQUFhLEVBQUUsQ0FBQztjQUNoQyxDQUFDLENBQUM7Y0FDRixPQUFPSixJQUFJO1lBQ1o7WUFFQSxJQUFJSyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUNsQixLQUFLLENBQUNtQixLQUFLLENBQUNKLElBQUksSUFBRztnQkFDOUIsT0FBT0EsSUFBSSxDQUFDSyxLQUFLLEtBQUssV0FBVztjQUNsQyxDQUFDLENBQUM7WUFDSDtZQUNBQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF2QixHQUFJLENBQUN1QixLQUFLLEVBQUU7Y0FDakIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBQ0EsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLENBQ04sZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixjQUFjLEVBQ2QsU0FBUyxFQUNULG1CQUFtQixFQUNuQixVQUFVLENBQ1Y7WUFDRjtZQUNBQyxRQUFRQSxDQUFDWCxJQUFJO2NBQ1osSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDWEEsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQ1csUUFBUSxFQUFFQyxLQUFLLEtBQUk7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUNILGNBQWMsQ0FBQ0ksUUFBUSxDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQyxFQUFFO2tCQUNqREMsT0FBTyxDQUFDQyxJQUFJLENBQUMsbUJBQW1CLEVBQUVMLFFBQVEsQ0FBQ0csSUFBSSxFQUFFLGtCQUFrQixDQUFDO2tCQUNwRTs7Z0JBR0QsSUFBSSxJQUFJLENBQUMsQ0FBQTlCLEdBQUksQ0FBQ2lDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDTyxFQUFFLENBQUMsRUFBRTtrQkFDL0IsTUFBTWpCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQWpCLEdBQUksQ0FBQ21DLEdBQUcsQ0FBQ1IsUUFBUSxDQUFDTyxFQUFFLENBQUU7a0JBQ3hDakIsSUFBSSxDQUFDbUIsR0FBRyxDQUFDVCxRQUFRLENBQUM7a0JBQ2xCOztnQkFHRCxNQUFNVSxRQUFRLEdBQUcsSUFBSXpDLEtBQUEsQ0FBQTBDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXZDLGNBQWUsRUFBRTtrQkFBRSxHQUFHNEIsUUFBUTtrQkFBRUM7Z0JBQUssQ0FBRSxDQUFDO2dCQUMzRSxJQUFJLENBQUMsQ0FBQTVCLEdBQUksQ0FBQ29DLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDSCxFQUFFLEVBQUVHLFFBQVEsQ0FBQztjQUNyQyxDQUFDLENBQUM7Y0FDRixPQUFPO2dCQUFFRSxPQUFPLEVBQUU7Y0FBSSxDQUFFO1lBQ3pCO1lBRUFILEdBQUdBLENBQUNyQixJQUFTO2NBQ1osSUFBSXlCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDMUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDVyxRQUFRLENBQUNYLElBQUksQ0FBQzs7Y0FHM0IsTUFBTTJCLFFBQVEsR0FBRyxLQUFLLENBQUNOLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztjQUNoQztjQUNBLE9BQU8yQixRQUFRO1lBQ2hCO1lBRUE7Ozs7Ozs7WUFPQSxNQUFNQyxHQUFHQSxDQUFDYixJQUFJLEVBQUVjLE1BQU0sR0FBRyxLQUFLO2NBQzdCLElBQUksQ0FBQyxJQUFJLENBQUNuQixjQUFjLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxtQkFBbUIsRUFBRUYsSUFBSSxFQUFFLGtCQUFrQixDQUFDO2dCQUMzRDs7Y0FFRCxNQUFNSCxRQUFRLEdBQUcsSUFBSS9CLEtBQUEsQ0FBQTBDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXZDLGNBQWUsRUFBRTtnQkFDbkQrQixJQUFJO2dCQUNKdkIsS0FBSyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDMkMsTUFBTTtnQkFDeEJDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQS9DLGNBQWUsQ0FBQytDO2VBQy9CLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQTlDLEdBQUksQ0FBQ29DLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDb0IsVUFBVSxFQUFFcEIsUUFBUSxDQUFDO2NBQzVDLElBQUksQ0FBQyxDQUFBNUIsY0FBZSxDQUFDaUQsU0FBUyxFQUFFO2NBRWhDLE9BQU9yQixRQUFRO1lBQ2hCO1lBRUE7Ozs7WUFJQSxNQUFNc0IsT0FBT0EsQ0FBQy9DLEtBQUs7Y0FDbEJBLEtBQUssQ0FBQ2MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRVcsS0FBSyxLQUFJO2dCQUM3QlgsSUFBSSxDQUFDVixLQUFLLEdBQUdxQixLQUFLO2NBQ25CLENBQUMsQ0FBQztjQUVGLE9BQU8sSUFBSSxDQUFDLENBQUE3QixjQUFlLENBQUNpRCxTQUFTLEVBQUU7WUFDeEM7WUFFQSxNQUFNRSxNQUFNQSxDQUFDaEIsRUFBRTtjQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ2lDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCSCxPQUFPLENBQUNDLElBQUksQ0FBQyxjQUFjLEVBQUVFLEVBQUUsRUFBRSxrQ0FBa0MsQ0FBQztnQkFDcEU7O2NBRUQsSUFBSSxDQUFDLENBQUFsQyxHQUFJLENBQUNtRCxNQUFNLENBQUNqQixFQUFFLENBQUM7Y0FFcEIsTUFBTSxJQUFJLENBQUMsQ0FBQW5DLGNBQWUsQ0FBQ2lELFNBQVMsRUFBRTtjQUN0QyxJQUFJLENBQUN4QixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUE0QixLQUFLQSxDQUFBO2NBQ0o7WUFBQTtZQUdEakIsR0FBR0EsQ0FBQ0QsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFsQyxHQUFJLENBQUNtQyxHQUFHLENBQUNELEVBQUUsQ0FBQztZQUN6QjtZQUVBRCxHQUFHQSxDQUFDQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ2lDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDO1lBQ3pCO1lBRUFtQixpQkFBaUJBLENBQUE7Y0FDaEIsTUFBTW5ELEtBQUssR0FBRyxFQUFFO2NBQ2hCLEtBQUssSUFBSWUsSUFBSSxJQUFJLElBQUksQ0FBQ2YsS0FBSyxFQUFFO2dCQUM1QkEsS0FBSyxDQUFDZ0IsSUFBSSxDQUFFRCxJQUFpQixDQUFDRSxhQUFhLEVBQUUsQ0FBQzs7Y0FFL0MsT0FBT2pCLEtBQUs7WUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25LRCxJQUFBTixLQUFBLEdBQUFELE9BQUE7VUFHQSxJQUFBMkQsVUFBQSxHQUFBM0QsT0FBQTtVQUVBLElBQUE0RCxRQUFBLEdBQUE1RCxPQUFBO1VBQ0EsSUFBQTZELFNBQUEsR0FBQTdELE9BQUE7VUFFTztVQUFVLE1BQU8yQyxRQUFTLFNBQVExQyxLQUFBLENBQUE2RCxJQUFnQztZQWF4RSxJQUFJbkMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDb0MsS0FBSyxDQUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQ3VDLEtBQUssSUFBSSxJQUFJLENBQUNDLFdBQVcsR0FBRyxXQUFXLEdBQUcsWUFBWTtZQUN2RjtZQUdBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLElBQUksSUFBSSxDQUFDSCxLQUFLLElBQUksSUFBSSxDQUFDQyxXQUFXO1lBQzlEO1lBRUEsSUFBSTFCLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQ2EsVUFBVTtZQUN2QjtZQUVBLElBQUlBLFVBQVVBLENBQUE7Y0FDYjtjQUNBLE9BQU8sS0FBSyxDQUFDYixFQUFFLElBQUksSUFBSSxDQUFDNkIsWUFBWTtZQUNyQztZQUNBLENBQUFoRSxjQUFlO1lBQ2YsSUFBSVksTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFaLGNBQWU7WUFDNUI7WUFFQSxJQUFJK0QsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDSixLQUFLLEVBQUVJLFNBQVM7WUFDN0I7WUFFQSxJQUFJRSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxFQUFFO1lBQ1Y7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxLQUFLLENBQUNBLFdBQVcsSUFBSSxJQUFJLENBQUNQLEtBQUssQ0FBQ08sV0FBVztZQUNuRDtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxNQUFNLENBQUNuRCxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM0QixNQUFNLEtBQUssQ0FBQztZQUM1RDtZQUNBLElBQUlzQixZQUFZQSxDQUFBO2NBQ2YsTUFBTUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztjQUVqRCxJQUFJLElBQUksQ0FBQ0YsS0FBSyxDQUFDTSxTQUFTLENBQUNNLE9BQU8sRUFBRUQsTUFBTSxDQUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ2EsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2NBQ2pGO2NBQ0EsSUFBSSxJQUFJLENBQUNiLEtBQUssQ0FBQ00sU0FBUyxDQUFDUSxLQUFLLEVBQUVILE1BQU0sQ0FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUNhLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztjQUU3RSxPQUFPRixNQUFNO1lBQ2Q7WUFFQSxJQUFJSSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sQ0FDTjtnQkFDQ0MsSUFBSSxFQUFFO2VBQ04sRUFDRDtnQkFDQ0EsSUFBSSxFQUFFO2VBQ04sRUFDRCxHQUFHLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2UsY0FBYyxDQUM1QjtZQUNGO1lBRUEvRCxZQUFZWCxjQUFxQixFQUFFYSxJQUFBLEdBQWdDLEVBQUU7Y0FDcEUsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1ArRCxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQ0MsUUFBUSxFQUFFcEIsU0FBQSxDQUFBcUIsZ0JBQWdCO2dCQUMxQjtnQkFDQUMsUUFBUSxFQUFFO2tCQUFFQyxNQUFNLEVBQUU7Z0JBQWtCLENBQUU7Z0JBQ3hDQyxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osTUFBTSxFQUNOLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLE9BQU8sRUFDUCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTjtrQkFDQ04sSUFBSSxFQUFFLFdBQVc7a0JBQ2pCTyxLQUFLLEVBQUUzQixVQUFBLENBQUE0QjtpQkFDUCxFQUNEO2tCQUNDUixJQUFJLEVBQUUsT0FBTztrQkFDYk8sS0FBSyxFQUFFMUIsUUFBQSxDQUFBNEIsb0JBQW9CLENBQUNoRCxHQUFHLENBQUN2QixJQUFJLENBQUNrQixJQUFJO2lCQUN6QztlQUVGLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQS9CLGNBQWUsR0FBR0EsY0FBYztjQUVyQyxJQUFJLENBQUNxRixTQUFTLENBQUNDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUF0RixjQUFlLENBQUM7Y0FDckQsSUFBSSxDQUFDMkQsS0FBSyxFQUFFMkIsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQXRGLGNBQWUsQ0FBQztjQUVsRCxJQUFJLENBQUMyRCxLQUFLLENBQUM0QixFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBSztnQkFDeEMsSUFBSSxDQUFDQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQy9ELE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNZ0UsUUFBUUEsQ0FBQztjQUFFQyxLQUFLO2NBQUUzQixTQUFTO2NBQUU0QjtZQUFPLENBQUU7Y0FDM0MsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUVwQixNQUFNNUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNkQsUUFBUSxDQUFDWSxRQUFRLENBQUM7a0JBQ3pDMUQsSUFBSSxFQUFFLFlBQVk7a0JBQ2xCSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFuQyxjQUFlLENBQUNtQyxFQUFFO2tCQUMzQlAsUUFBUSxFQUFFLElBQUksQ0FBQ0csSUFBSTtrQkFDbkJnQyxTQUFTO2tCQUNUOEIsVUFBVSxFQUFFLElBQUksQ0FBQzFELEVBQUU7a0JBQ25CWSxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2tCQUN2QjJDLEtBQUs7a0JBQ0xDO2lCQUNBLENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUN0RCxHQUFHLENBQUNyQixJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDMkMsS0FBSyxDQUFDdEIsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMyQyxLQUFLLENBQUNtQyxXQUFXLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQ0EsV0FBVyxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQTlGLGNBQWUsQ0FBQytGLFVBQVUsQ0FBQy9FLElBQUksQ0FBQ2dGLE9BQU8sQ0FBQztnQkFDN0MsSUFBSSxDQUFDLENBQUFoRyxjQUFlLENBQUNpRCxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbEMsT0FBT1QsSUFBSTtlQUNYLENBQUMsT0FBT2lGLENBQUMsRUFBRTtnQkFDWGpFLE9BQU8sQ0FBQ2tFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVCxJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBOzs7O1lBSUEsTUFBTU8sZUFBZUEsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsRUFBRTtjQUFFQyxNQUFNLEdBQUcsRUFBRTtjQUFFQyxLQUFLLEdBQUc7WUFBRSxDQUFFO2NBQzdELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDREQUE0RCxDQUFDOztjQUc5RSxNQUFNQyxlQUFlLEdBQUcsR0FBR0gsTUFBTSxJQUFJRCxNQUFNLElBQUlFLEtBQUssRUFBRTtjQUV0RCxNQUFNM0QsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDa0MsUUFBUSxDQUFDc0IsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBbkcsY0FBZSxDQUFDbUMsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxFQUFFO2dCQUN0RnNFLElBQUksRUFBRUQ7ZUFDTixDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUF4RyxjQUFlLENBQUNxQyxHQUFHLENBQUM7Z0JBQUUyRCxPQUFPLEVBQUVyRCxRQUFRLENBQUNxRDtjQUFPLENBQUUsQ0FBQztjQUN2RCxJQUFJLENBQUMsQ0FBQWhHLGNBQWUsQ0FBQ3lCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QyxJQUFJLENBQUNpRixPQUFPLEdBQUcvRCxRQUFRLENBQUMrRCxPQUFPO2NBRS9CLElBQUksQ0FBQ2xCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztjQUNwQyxPQUFPLElBQUksQ0FBQ2tCLE9BQU87WUFDcEI7WUFFQTs7Ozs7WUFLQSxNQUFNQyxhQUFhQSxDQUFDO2NBQUVGLElBQUk7Y0FBRUcsS0FBSztjQUFFQztZQUFJLENBQUU7Y0FDeEMsTUFBTTtnQkFBRWIsT0FBTztnQkFBRWM7Y0FBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNqQyxRQUFRLENBQUM4QixhQUFhLENBQUM7Z0JBQUVGLElBQUk7Z0JBQUVHLEtBQUs7Z0JBQUVDO2NBQUksQ0FBRSxDQUFDO2NBQ25GLElBQUksQ0FBQyxDQUFBN0csY0FBZSxDQUFDK0YsVUFBVSxDQUFDQyxPQUFPLENBQUM7Y0FFeEMsT0FBTyxJQUFJLENBQUNYLFNBQVMsQ0FBQzBCLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1lBQ3RDO1lBQ0EsTUFBTUUsV0FBV0EsQ0FBQ3JELEtBQUs7Y0FDdEIsTUFBTTtnQkFBRXFDLE9BQU87Z0JBQUVjO2NBQUssQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDakMsUUFBUSxDQUFDbUMsV0FBVyxDQUFDckQsS0FBSyxDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBM0QsY0FBZSxDQUFDK0YsVUFBVSxDQUFDQyxPQUFPLENBQUM7Y0FDeEMsT0FBTyxJQUFJLENBQUNYLFNBQVMsQ0FBQzBCLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1lBQ3RDO1lBRUEsTUFBTUcsWUFBWUEsQ0FBQTtjQUNqQixNQUFNLElBQUksQ0FBQ3RELEtBQUssQ0FBQ25DLEtBQUssRUFBRTtjQUN4QjtjQUNBLE1BQU0sSUFBSSxDQUFDLENBQUF4QixjQUFlLENBQUNpRCxTQUFTLEVBQUU7WUFDdkM7WUFFQWlFLElBQUksR0FBRyxNQUFPdkQsS0FBTSxJQUFJO2NBQ3ZCLElBQUlBLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQ3RCLEdBQUcsQ0FBQ3NCLEtBQUssQ0FBQztjQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDTyxXQUFXLEVBQUU7Y0FDdkIsSUFBSSxDQUFDMEIsUUFBUSxHQUFHLElBQUk7Y0FDcEI7Y0FDQSxNQUFNakQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEzQyxjQUFlLENBQUNpRCxTQUFTLEVBQUU7Y0FFdkQsSUFBSVUsS0FBSyxFQUFFcUMsT0FBTyxFQUFFO2dCQUNuQixJQUFJLENBQUMsQ0FBQWhHLGNBQWUsQ0FBQytGLFVBQVUsQ0FBQ3BDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQzs7Y0FFL0M7Y0FDQSxJQUFJLENBQUNyQyxLQUFLLENBQUNtQyxXQUFXLEVBQUU7Y0FDeEIsSUFBSSxDQUFDckUsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCLElBQUksQ0FBQ21FLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLE9BQU9qRCxRQUFRO1lBQ2hCLENBQUM7WUFFRFEsTUFBTUEsQ0FBQ2hCLEVBQUU7Y0FDUjtZQUFBO1lBR0RmLGFBQWFBLENBQUE7Y0FDWixJQUFJNkQsVUFBVSxHQUFHLEtBQUssQ0FBQzdELGFBQWEsRUFBRTtjQUN0QyxJQUFJLENBQUM2RCxVQUFVLENBQUM5QyxFQUFFLEVBQUU7Z0JBQ25CLE9BQU87a0JBQUUsR0FBRzhDLFVBQVU7a0JBQUU5QyxFQUFFLEVBQUUsSUFBSSxDQUFDYTtnQkFBVSxDQUFFOztjQUc5QyxPQUFPaUMsVUFBVTtZQUNsQjtZQUVBLE1BQU1rQyxTQUFTQSxDQUFDbkMsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDbEQsUUFBUSxDQUFDa0QsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pGaEQsT0FBTyxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUrQyxNQUFNLENBQUM7Z0JBQ3RDOztjQUVELElBQUksQ0FBQzNDLEdBQUcsQ0FBQztnQkFDUjBDLFFBQVEsRUFBRTtrQkFDVEM7O2VBRUQsQ0FBQztjQUNGLE1BQU0sSUFBSSxDQUFDLENBQUFoRixjQUFlLENBQUNpRCxTQUFTLEVBQUU7Y0FFdEM7Y0FDQSxJQUFJLENBQUN4QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsSUFBSSxDQUFDbUUsUUFBUSxHQUFHLEtBQUs7WUFDdEI7WUFFQXBCLFlBQVlBLENBQUM0QyxRQUFRO2NBQ3BCLElBQUksSUFBSSxDQUFDQSxRQUFRLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUM7O2NBR3hCLE9BQU8sSUFBSSxDQUFDekQsS0FBSyxDQUFDYSxZQUFZLENBQUM0QyxRQUFRLENBQUM7WUFDekM7O1VBQ0FDLE9BQUEsQ0FBQTlFLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3UEQsSUFBQStFLFdBQUEsR0FBQTFILE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU8ySCxNQUFPLFNBQVFELFdBQUEsQ0FBQUUsVUFBaUI7WUFDdkQ3RyxZQUFZRSxJQUFVO2NBQ3JCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQK0QsTUFBTSxFQUFFL0QsSUFBSSxFQUFFK0QsTUFBTSxJQUFJLE9BQU87Z0JBQy9CMUQsSUFBSSxFQUFFckIsS0FBQSxDQUFBNEg7ZUFDTixDQUFDO1lBQ0g7O1VBQ0FKLE9BQUEsQ0FBQUUsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFHLFFBQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFPTztVQUFVLE1BQU82SCxLQUFNLFNBQVE1SCxLQUFBLENBQUE2RCxJQUFZO1lBS2pELElBQUlpRSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxHQUFHRCxRQUFBLENBQUFFLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsT0FBTyxFQUFFO1lBQ2xEO1lBRUEvRixZQUFZRSxJQUFVO2NBQ3JCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQK0QsTUFBTSxFQUFFL0QsSUFBSSxFQUFFK0QsTUFBTSxJQUFJLE9BQU87Z0JBQy9CSyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSXBFLElBQUksRUFBRW9FLFVBQVUsSUFBSSxFQUFFLENBQUM7ZUFDaEYsQ0FBQztZQUNIOztVQUNBb0MsT0FBQSxDQUFBSSxLQUFBLEdBQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUE5SCxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBNkQsU0FBQSxHQUFBN0QsT0FBQTtVQUVBLElBQUEwSCxXQUFBLEdBQUExSCxPQUFBO1VBV00sTUFBT3VGLGlCQUFrQixTQUFReEYsTUFBQSxDQUFBSSxhQUFpQztZQU12RSxDQUFBOEUsUUFBUztZQUNULENBQUFqRSxNQUFPO1lBQ1AsQ0FBQW1ILEtBQU07WUFDTixDQUFBQyxTQUFVLEdBQUc7Y0FBRUMsT0FBTyxFQUFFLEVBQUU7Y0FBRUMsU0FBUyxFQUFFLEVBQUU7Y0FBRUMsWUFBWSxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUMsU0FBUyxFQUFFO1lBQUUsQ0FBRTtZQUUxRjFILFlBQVkySCxLQUFLLEdBQUcsRUFBRTtjQUNyQixLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsS0FBSztnQkFDUnJELFVBQVUsRUFBRSxDQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsY0FBYyxFQUNkLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUTtnQkFDUjtnQkFDQTtrQkFDQztrQkFDQU4sSUFBSSxFQUFFLFFBQVE7a0JBQ2Q7a0JBQ0FPLEtBQUssRUFBRW9DLFdBQUEsQ0FBQUM7aUJBQ1A7ZUFFRixDQUFDO2NBQ0Y7Y0FDQTtjQUNBLElBQUksQ0FBQyxDQUFBMUMsUUFBUyxHQUFHLElBQUlwQixTQUFBLENBQUE4RSx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7WUFDckQ7WUFFQWxHLEdBQUdBLENBQUNyQixJQUFJO2NBQ1AsTUFBTXNELE1BQU0sR0FBRyxLQUFLLENBQUNqQyxHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDOUI7Y0FDQSxPQUFPc0QsTUFBTTtZQUNkO1lBRUFnQixVQUFVLEdBQUdBLENBQUMxRSxNQUFnQixFQUFFbUgsS0FBWSxLQUFVO2NBQ3JELElBQUksQ0FBQyxDQUFBbkgsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBbUgsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCLENBQUM7WUFFRFMsT0FBT0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDcEgsYUFBYSxFQUFFO1lBQzVCO1lBRUFJLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUNhLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTJGLFNBQVUsQ0FBQztZQUMxQjtZQUVBLENBQUFTLFNBQVUsR0FBcUIsSUFBSXZJLEdBQUcsRUFBRTtZQUN4QyxJQUFJdUksU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxNQUFNQyxlQUFlQSxDQUFDaEQsS0FBYyxFQUFFM0IsU0FBa0I7Y0FDdkQsSUFBSTtnQkFDSCxJQUFJLENBQUM2QixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTTVFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDOEQsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUM1RixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF2QixNQUFPLENBQUN1QixFQUFFLEVBQUU7a0JBQ2xGeUIsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBaEQsTUFBTyxDQUFDZ0QsS0FBSztrQkFDekJHLFNBQVMsRUFBRUEsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFBbkQsTUFBTyxDQUFDK0MsS0FBSyxDQUFDSSxTQUFTO2tCQUNwRDJCO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDckQsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUNkLE1BQU0sSUFBSSxDQUFDLENBQUErRyxLQUFNLENBQUM5RSxTQUFTLENBQUM7a0JBQUUrQyxPQUFPLEVBQUVoRixJQUFJLENBQUNnRjtnQkFBTyxDQUFFLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxDQUFBK0IsS0FBTSxDQUFDdEcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUVyQyxPQUFPVCxJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYakUsT0FBTyxDQUFDNEcsS0FBSyxDQUFDM0MsQ0FBQyxDQUFDO2dCQUNoQixNQUFNQSxDQUFDO2VBQ1AsU0FBUztnQkFDVCxJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1ILFFBQVFBLENBQUNkLElBQVksRUFBRWUsS0FBYyxFQUFFM0IsU0FBa0I7Y0FDOUQsSUFBSVksSUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQytELGVBQWUsQ0FBQ2hELEtBQUssRUFBRTNCLFNBQVMsQ0FBQztjQUVyRSxJQUFJO2dCQUNILElBQUksQ0FBQzZCLFFBQVEsR0FBRyxJQUFJO2dCQUVwQixNQUFNNUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE2RCxRQUFTLENBQUNnRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDNUYsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDdUIsRUFBRSxFQUFFd0MsSUFBSSxFQUFFO2tCQUN6RmUsS0FBSztrQkFDTDNCO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDMUIsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUNkLE1BQU0sSUFBSSxDQUFDLENBQUErRyxLQUFNLENBQUM5RSxTQUFTLENBQUNqQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBK0csS0FBTSxDQUFDdEcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUVyQyxPQUFPVCxJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYakUsT0FBTyxDQUFDNEcsS0FBSyxDQUFDM0MsQ0FBQyxDQUFDO2dCQUNoQixNQUFNQSxDQUFDO2VBQ1AsU0FBUztnQkFDVCxJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1rRCxhQUFhQSxDQUFDekQsU0FBQSxHQUFzQixFQUFFO2NBQzNDLElBQUk7Z0JBQ0gsTUFBTXJFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDaUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBZixLQUFNLENBQUM1RixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF2QixNQUFPLENBQUN1QixFQUFFLEVBQUU7a0JBQ2hGa0QsU0FBUyxFQUFFQSxTQUFTLENBQUN2QyxNQUFNLEdBQUcsQ0FBQyxHQUFHdUMsU0FBUyxHQUFHMEQ7aUJBQzlDLENBQUM7Z0JBRUYsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDakIsSUFBSSxDQUFDLENBQUFsQixLQUFNLENBQUMxRixHQUFHLENBQUM7a0JBQUUyRCxPQUFPLEVBQUVoRixJQUFJLENBQUNnRjtnQkFBTyxDQUFFLENBQUMsRUFDMUMsSUFBSSxDQUFDM0QsR0FBRyxDQUFDO2tCQUFFNkcsTUFBTSxFQUFFO29CQUFFLEdBQUcsSUFBSSxDQUFDQSxNQUFNO29CQUFFLEdBQUdsSSxJQUFJLENBQUNrSTtrQkFBTTtnQkFBRSxDQUFFLENBQUMsQ0FDeEQsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQW5CLEtBQU0sQ0FBQ3RHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDckMsSUFBSSxDQUFDQSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Z0JBRTlCLE9BQU9ULElBQUk7ZUFDWCxDQUFDLE9BQU9pRixDQUFDLEVBQUU7Z0JBQ1hqRSxPQUFPLENBQUM0RyxLQUFLLENBQUMzQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU1BLENBQUM7O1lBRVQ7WUFFQSxNQUFNa0QsV0FBV0EsQ0FBQzlELFNBQUEsR0FBc0IsRUFBRTtjQUN6QyxJQUFJO2dCQUNILE1BQU1yRSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTZELFFBQVMsQ0FBQ3NFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQXBCLEtBQU0sQ0FBQzVGLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQXZCLE1BQU8sQ0FBQ3VCLEVBQUUsRUFBRTtrQkFDOUVrRCxTQUFTLEVBQUVBLFNBQVMsQ0FBQ3ZDLE1BQU0sR0FBRyxDQUFDLEdBQUd1QyxTQUFTLEdBQUcwRDtpQkFDOUMsQ0FBQztnQkFFRixNQUFNLElBQUksQ0FBQzFHLEdBQUcsQ0FBQztrQkFBRTZHLE1BQU0sRUFBRWxJLElBQUksQ0FBQ2tJO2dCQUFNLENBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDekgsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUU5QixPQUFPVCxJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYakUsT0FBTyxDQUFDNEcsS0FBSyxDQUFDM0MsQ0FBQyxDQUFDO2dCQUNoQixNQUFNQSxDQUFDOztZQUVUO1lBRUEsTUFBTW1ELFlBQVlBLENBQUE7Y0FDakIsSUFBSSxDQUFDL0csR0FBRyxDQUFDO2dCQUFFNkcsTUFBTSxFQUFFSDtjQUFTLENBQUUsQ0FBQztjQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUM5RSxTQUFTLEVBQUU7WUFDckM7WUFFQThELFFBQVFBLENBQUMvRixJQUFTO2NBQ2pCLElBQUksSUFBSSxDQUFDcUksTUFBTSxDQUFDcEosR0FBRyxDQUFDaUMsR0FBRyxDQUFDbEIsSUFBSSxDQUFDbUIsRUFBRSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUNrSCxNQUFNLENBQUNwSixHQUFHLENBQUNtQyxHQUFHLENBQUNwQixJQUFJLENBQUNtQixFQUFFLENBQUM7Y0FDckUsSUFBSSxDQUFDa0gsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ3RJLElBQUksQ0FBQyxDQUFDO2NBQzVCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixPQUFPLElBQUksQ0FBQzRILE1BQU0sQ0FBQ3BKLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQ3BCLElBQUksQ0FBQ21CLEVBQUUsQ0FBQztZQUNwQztZQUVBLE1BQU1vSCxXQUFXQSxDQUFDcEgsRUFBVTtjQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDa0gsTUFBTSxDQUFDcEosR0FBRyxDQUFDaUMsR0FBRyxDQUFDQyxFQUFFLENBQUMsRUFBRTtjQUM5QixNQUFNLElBQUksQ0FBQyxDQUFBMEMsUUFBUyxDQUFDMkUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBekIsS0FBTSxDQUFDNUYsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDdUIsRUFBRSxFQUFFQSxFQUFFLENBQUM7Y0FFckUsSUFBSSxDQUFDa0gsTUFBTSxDQUFDakcsTUFBTSxDQUFDakIsRUFBRSxDQUFDO2NBQ3RCLElBQUksQ0FBQ1YsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQTRGLE9BQUEsQ0FBQWxDLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25MRCxJQUFBc0UsSUFBQSxHQUFBN0osT0FBQTtVQUNBLElBQUE4SCxRQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQThKLFFBQUEsR0FBQTlKLE9BQUE7VUFrQk0sTUFBTzJJLHlCQUF5QjtZQUNyQyxDQUFBb0IsR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTmpKLFlBQVlpSixLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUYsSUFBQSxDQUFBSSxHQUFHLENBQUNuQyxRQUFBLENBQUFFLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUE4QixLQUFNLEdBQUdBLEtBQUs7WUFDcEI7WUFFQSxNQUFNakIsZUFBZUEsQ0FBQ21CLE9BQWUsRUFBRWpFLFVBQWtCLEVBQUVsQyxLQUE2QjtjQUN2RixNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTUksR0FBRyxHQUFHLG1CQUFtQkwsT0FBTyxlQUFlakUsVUFBVSxvQkFBb0I7Y0FDbkYsTUFBTWxELFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUNELEdBQUcsRUFBRXhHLEtBQUssQ0FBQztjQUVqRCxJQUFJLENBQUNoQixRQUFRLENBQUMwSCxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSTlELEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Y0FHckQsT0FBTzVELFFBQVEsQ0FBQzNCLElBQUk7WUFDckI7WUFFQSxNQUFNNkgsZ0JBQWdCQSxDQUNyQmlCLE9BQWUsRUFDZmpFLFVBQWtCLEVBQ2xCeUUsWUFBb0IsRUFDcEIzRyxLQUE2QjtjQUU3QixNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTUksR0FBRyxHQUFHLG1CQUFtQkwsT0FBTyxlQUFlakUsVUFBVSxjQUFjeUUsWUFBWSxFQUFFO2NBQzNGLE1BQU0zSCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWdILEdBQUksQ0FBQ1MsSUFBSSxDQUFDRCxHQUFHLEVBQUV4RyxLQUFLLENBQUM7Y0FFakQsSUFBSSxDQUFDaEIsUUFBUSxDQUFDMEgsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUk5RCxLQUFLLENBQUMsNEJBQTRCLENBQUM7O2NBRzlDLE9BQU81RCxRQUFRLENBQUMzQixJQUFJO1lBQ3JCO1lBRUEsTUFBTThILGFBQWFBLENBQUNnQixPQUFlLEVBQUVqRSxVQUFrQixFQUFFbEMsS0FBMEI7Y0FDbEYsTUFBTW9HLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU1JLEdBQUcsR0FBRyxtQkFBbUJMLE9BQU8sZUFBZWpFLFVBQVUsa0JBQWtCO2NBQ2pGLE1BQU1sRCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWdILEdBQUksQ0FBQ1MsSUFBSSxDQUFDRCxHQUFHLEVBQUV4RyxLQUFLLENBQUM7Y0FFakQsSUFBSSxDQUFDaEIsUUFBUSxDQUFDMEgsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUk5RCxLQUFLLENBQUMsaUNBQWlDLENBQUM7O2NBR25ELE9BQU81RCxRQUFRLENBQUMzQixJQUFJO1lBQ3JCO1lBRUEsTUFBTW1JLFdBQVdBLENBQUNXLE9BQWUsRUFBRWpFLFVBQWtCLEVBQUVsQyxLQUEwQjtjQUNoRixNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTUksR0FBRyxHQUFHLG1CQUFtQkwsT0FBTyxlQUFlakUsVUFBVSxrQkFBa0I7Y0FDakYsTUFBTWxELFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDdkcsTUFBTSxDQUFDK0csR0FBRyxFQUFFeEcsS0FBSyxDQUFDO2NBRW5ELElBQUksQ0FBQ2hCLFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJOUQsS0FBSyxDQUFDLCtCQUErQixDQUFDOztjQUdqRCxPQUFPNUQsUUFBUSxDQUFDM0IsSUFBSTtZQUNyQjtZQUVBLE1BQU13SSxXQUFXQSxDQUFDZSxRQUFnQixFQUFFMUUsVUFBa0IsRUFBRTJFLE9BQWU7Y0FDdEUsTUFBTVQsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTUksR0FBRyxHQUFHLFlBQVlJLFFBQVEsZUFBZTFFLFVBQVUsV0FBVzJFLE9BQU8sVUFBVTtjQUNyRixNQUFNN0gsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFnSCxHQUFJLENBQUN2RyxNQUFNLENBQUMrRyxHQUFHLENBQUM7Y0FFNUMsSUFBSSxDQUFDeEgsUUFBUSxDQUFDMEgsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUk5RCxLQUFLLENBQUMsc0JBQXNCLENBQUM7O2NBR3hDLE9BQU81RCxRQUFRLENBQUMzQixJQUFJO1lBQ3JCOztVQUNBcUcsT0FBQSxDQUFBa0IseUJBQUEsR0FBQUEseUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdELElBQUFrQixJQUFBLEdBQUE3SixPQUFBO1VBQ0EsSUFBQThILFFBQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBOEosUUFBQSxHQUFBOUosT0FBQTtVQUVBLElBQUE2SyxZQUFBLEdBQUE3SyxPQUFBO1VBMEVPO1VBQVUsTUFBT2tGLGdCQUFnQjtZQUN2QyxDQUFBNkUsR0FBSTtZQUNKLENBQUFDLEtBQU07WUFDTixDQUFBYyxXQUFZO1lBRVovSixZQUFZaUosS0FBSztjQUNoQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUksR0FBRyxDQUFDbkMsUUFBQSxDQUFBRSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBOEIsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBYyxXQUFZLEdBQUcsSUFBSUQsWUFBQSxDQUFBRSxXQUFXLEVBQUU7WUFDdEM7WUFFQSxNQUFNQyxJQUFJQSxDQUFDakgsS0FBVztjQUNyQjtjQUNBO2NBQ0EsT0FBTyxJQUFJO1lBQ1o7WUFFQSxNQUFNOEIsUUFBUUEsQ0FBQzlCLEtBQXFCO2NBQ25DLE1BQU0zQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTBKLFdBQVksQ0FBQ2pGLFFBQVEsQ0FBQzlCLEtBQUssQ0FBQztjQUNwRCxPQUFPM0MsSUFBSTtZQUNaO1lBRUE7Ozs7Ozs7O1lBUUEsTUFBTW1GLGVBQWVBLENBQ3BCb0UsUUFBZ0IsRUFDaEIxRSxVQUFrQixFQUNsQmxDLEtBQTRCO2NBRTVCLE1BQU07Z0JBQUU4QztjQUFJLENBQUUsR0FBRzlDLEtBQUs7Y0FFdEIsTUFBTW9HLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBQ3ZCLE1BQU1jLFFBQVEsR0FBRyxXQUFXTixRQUFRLGVBQWUxRSxVQUFVLFVBQVU7Y0FDdkUsTUFBTWxELFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUNTLFFBQVEsRUFBRTtnQkFBRXBFO2NBQUksQ0FBRSxDQUFDO2NBRXpELElBQUksQ0FBQzlELFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJOUQsS0FBSyxDQUFDNUQsUUFBUSxDQUFDaUcsS0FBSyxDQUFDOztjQUdoQyxPQUFPO2dCQUNObEMsT0FBTyxFQUFFL0QsUUFBUSxDQUFDM0IsSUFBSSxDQUFDMEYsT0FBTztnQkFDOUJWLE9BQU8sRUFBRXJELFFBQVEsQ0FBQzNCLElBQUksQ0FBQ2dGO2VBQ3ZCO1lBQ0Y7WUFFQSxNQUFNVyxhQUFhQSxDQUFDO2NBQUVGLElBQUk7Y0FBRUcsS0FBSztjQUFFQztZQUFJLENBQUU7Y0FDeEMsTUFBTWtELEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDO2NBQ0EsTUFBTTVILEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQXlILEtBQU0sQ0FBQ2hKLE1BQU0sQ0FBQ3VCLEVBQUU7Y0FDaEMsSUFBSSxDQUFDLENBQUF3SCxHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU1lLFdBQVcsR0FBd0I7Z0JBQUVyRTtjQUFJLENBQUU7Y0FDakQsSUFBSUcsS0FBSyxFQUFFO2dCQUNWa0UsV0FBVyxDQUFDbEUsS0FBSyxHQUFHQSxLQUFLO2dCQUN6QmtFLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHLElBQUk7O2NBRTdCLElBQUlsRSxJQUFJLEVBQUVpRSxXQUFXLENBQUNqRSxJQUFJLEdBQUdBLElBQUk7Y0FFakMsTUFBTWxFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUMsV0FBV2pJLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQXlILEtBQU0sQ0FBQ3pILEVBQUUseUJBQXlCLEVBQUU7Z0JBQzFHLEdBQUcySTtlQUNILENBQUM7Y0FFRixJQUFJLENBQUNuSSxRQUFRLENBQUMwSCxNQUFNLEVBQUU7Z0JBQ3JCLElBQUkxSCxRQUFRLENBQUNpRyxLQUFLLEVBQUVvQyxJQUFJLEtBQUssR0FBRyxFQUFFO2tCQUNqQyxNQUFNLElBQUl6RSxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2dCQUV0QyxJQUFJNUQsUUFBUSxDQUFDaUcsS0FBSyxFQUFFb0MsSUFBSSxLQUFLLEdBQUcsRUFBRTtrQkFDakMsTUFBTSxJQUFJekUsS0FBSyxDQUFDLG1CQUFtQixDQUFDOztnQkFFckMsSUFBSTVELFFBQVEsQ0FBQ2lHLEtBQUssRUFBRW9DLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ2pDLE1BQU0sSUFBSXpFLEtBQUssQ0FBQyxZQUFZLENBQUM7O2dCQUU5QixNQUFNLElBQUlBLEtBQUssQ0FBQzVELFFBQVEsQ0FBQ2lHLEtBQUssRUFBRXFDLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQzs7Y0FHdkUsT0FBT3RJLFFBQVEsQ0FBQzNCLElBQUk7WUFDckI7WUFFQSxNQUFNZ0csV0FBV0EsQ0FBQ3JELEtBQXdCO2NBQ3pDLE1BQU1vRyxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxNQUFNNUgsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBeUgsS0FBTSxDQUFDaEosTUFBTSxDQUFDdUIsRUFBRTtjQUNoQyxJQUFJLENBQUMsQ0FBQXdILEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTWMsUUFBUSxHQUFHLFdBQVcxSSxFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUF5SCxLQUFNLENBQUN6SCxFQUFFLHVCQUF1QjtjQUVsRixNQUFNK0ksT0FBTyxHQUFzQixFQUFFO2NBQ3JDLElBQUl2SCxLQUFLLENBQUN3SCxJQUFJLEVBQUU7Z0JBQ2ZELE9BQU8sQ0FBQ0MsSUFBSSxHQUFHeEgsS0FBSyxDQUFDd0gsSUFBSTtnQkFDekJELE9BQU8sQ0FBQ0gsU0FBUyxHQUFHLElBQUk7O2NBRXpCLElBQUlwSCxLQUFLLENBQUN3RyxHQUFHLEVBQUU7Z0JBQ2RlLE9BQU8sQ0FBQ2YsR0FBRyxHQUFHeEcsS0FBSyxDQUFDd0csR0FBRzs7Y0FHeEIsTUFBTXhILFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUNTLFFBQVEsRUFBRTtnQkFDL0MsR0FBR0ssT0FBTztnQkFDVkgsU0FBUyxFQUFFO2VBQ1gsQ0FBQztjQUVGLElBQUksQ0FBQ3BJLFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJOUQsS0FBSyxDQUFDNUQsUUFBUSxDQUFDaUcsS0FBSyxFQUFFcUMsT0FBTyxJQUFJLHdCQUF3QixDQUFDOztjQUdyRSxPQUFPdEksUUFBUSxDQUFDM0IsSUFBSTtZQUNyQjs7VUFDQXFHLE9BQUEsQ0FBQXZDLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlMRCxJQUFBbkYsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTZLLFlBQUEsR0FBQTdLLE9BQUE7VUFLTSxNQUFPd0wsYUFBYyxTQUFRekwsTUFBQSxDQUFBSSxhQUEwQztZQU81RSxJQUFJa0UsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sRUFBRTtZQUNWO1lBSUEsQ0FBQWpFLGNBQWU7WUFDZixDQUFBWSxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDVXlLLGlCQUFpQixHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzNDLENBQUFYLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLElBQUloRyxjQUFjQSxDQUFBO2NBQ2pCLE1BQU00RyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQ3JILFNBQVMsQ0FBQztjQUM5QyxNQUFNdUgsTUFBTSxHQUEwQyxFQUFFO2NBRXhELEtBQUssTUFBTSxDQUFDQyxHQUFHLEVBQUV2RyxLQUFLLENBQUMsSUFBSW9HLE9BQU8sRUFBRTtnQkFDbkMsSUFBSUcsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFFdkJELE1BQU0sQ0FBQ3JLLElBQUksQ0FBQztrQkFDWHdELElBQUksRUFBRThHLEdBQUc7a0JBQ1RDLFFBQVEsRUFBRXhHLEtBQUssQ0FBQ3dHO2lCQUNoQixDQUFDOztjQUdILE9BQU9GLE1BQU07WUFDZDtZQUVBLElBQUluSyxLQUFLQSxDQUFBO2NBQ1IsTUFBTXNLLFlBQVksR0FBR0EsQ0FBQ0MsS0FBWSxFQUFFSixNQUEyQixLQUM5RC9JLEtBQUssQ0FBQ0MsT0FBTyxDQUFDa0osS0FBSyxDQUFDLElBQ3BCQSxLQUFLLENBQUM5SSxNQUFNLEdBQUcsQ0FBQyxJQUNoQjhJLEtBQUssQ0FBQ3RLLEtBQUssQ0FBQ0osSUFBSSxJQUFJcUssTUFBTSxDQUFDTSxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDbEssS0FBSyxDQUFDd0ssS0FBSyxJQUFJNUssSUFBSSxDQUFDNEssS0FBSyxDQUFDLENBQUMsQ0FBQztjQUVyRSxNQUFNQyxpQkFBaUIsR0FBSTlILFNBQThCLElBQUk7Z0JBQzVELE9BQU9zSCxNQUFNLENBQUNELE9BQU8sQ0FBQ3JILFNBQVMsQ0FBQyxDQUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQzhGLFFBQVEsRUFBRTRFLE1BQU0sQ0FBQyxLQUFJO2tCQUM3RCxJQUFJQSxNQUFNLENBQUNqSyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUM1QixPQUFPNEosWUFBWSxDQUFDLElBQUksQ0FBQ3ZFLFFBQVEsQ0FBQyxFQUFFNEUsTUFBTSxDQUFDUixNQUFNLENBQUM7bUJBQ2xELE1BQU0sSUFBSVEsTUFBTSxDQUFDTixRQUFRLEVBQUU7b0JBQzNCLE9BQU8sSUFBSTs7a0JBRVosT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDdEUsUUFBUSxDQUFDO2dCQUN4QixDQUFDLENBQUM7Y0FDSCxDQUFDO2NBQ0QsT0FBTzJFLGlCQUFpQixDQUFDLElBQUksQ0FBQzlILFNBQVMsQ0FBQ00sT0FBTyxDQUFDLElBQUl3SCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM5SCxTQUFTLENBQUNRLEtBQUssQ0FBQztZQUM1RjtZQUVBLElBQUl3SCxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUN6SCxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ2xDO1lBRUEsSUFBSTBILFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQzFILFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDcEM7WUFFQSxJQUFJMkgsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDM0gsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUNyQztZQUVBN0QsWUFBWUUsSUFBSSxHQUFHO2NBQUVvRSxVQUFVLEVBQUU7WUFBRSxDQUFFO2NBQ3BDLEtBQUssQ0FBQztnQkFDTCxHQUFHcEUsSUFBSTtnQkFDUG9FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHcEUsSUFBSSxDQUFDb0UsVUFBVTtlQUM1QyxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUF5RixXQUFZLEdBQUcsSUFBSUQsWUFBQSxDQUFBRSxXQUFXLEVBQUU7WUFDdEM7WUFFQXlCLEtBQUtBLENBQUE7Y0FDSixJQUFJQyxPQUFPLEdBQUcsSUFBSTtjQUNsQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztjQUVaLE9BQU9ELE9BQU8sSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQ3JILFVBQVUsQ0FBQ25DLE1BQU0sRUFBRTtnQkFDaEQsSUFBSSxJQUFJLENBQUNtQyxVQUFVLENBQUNxSCxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7a0JBQzFDQSxJQUFJLEVBQUU7a0JBQ047O2dCQUVEO2dCQUNBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ3JILFVBQVUsQ0FBQ3FILElBQUksQ0FBQyxDQUFDLEVBQUU7a0JBQ2hDRCxPQUFPLEdBQUcsS0FBSzs7Z0JBRWhCQyxJQUFJLEVBQUU7O2NBRVAsT0FBT0QsT0FBTztZQUNmO1lBRUEvRyxVQUFVQSxDQUFDMUUsTUFBZ0IsRUFBRVosY0FBcUI7Y0FDakQsSUFBSSxDQUFDLENBQUFZLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVosY0FBZSxHQUFHQSxjQUFjO1lBQ3RDO1lBRUFxQyxHQUFHQSxDQUFDNEMsVUFBZ0Q7Y0FDbkQsS0FBSyxDQUFDNUMsR0FBRyxDQUFDNEMsVUFBVSxDQUFDO2NBQ3JCLElBQUksQ0FBQ3hELE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztjQUNsQyxPQUFPO2dCQUNOZSxPQUFPLEVBQUU7ZUFDVDtZQUNGO1lBRUEsTUFBTWhCLEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUN5RCxVQUFVLENBQUNoRSxPQUFPLENBQUNtRyxRQUFRLElBQUc7Z0JBQ2xDLElBQUlBLFFBQVEsS0FBSyxXQUFXLEVBQUU7Z0JBQzlCO2dCQUNBLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcyQixTQUFTO2NBQzNCLENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQ3RILE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUI7WUFFQSxNQUFNZ0UsUUFBUUEsQ0FBQ0MsS0FBSyxFQUFFL0IsS0FBSztjQUMxQixJQUFJLENBQUNpQyxRQUFRLEdBQUcsSUFBSTtjQUVwQixJQUFJO2dCQUNILE1BQU01RSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMwSixXQUFXLENBQUNqRixRQUFRLENBQUM7a0JBQzVDMUQsSUFBSSxFQUFFLGdCQUFnQjtrQkFDdEJJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQW5DLGNBQWUsQ0FBQ21DLEVBQUU7a0JBQzNCMEQsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBakYsTUFBTyxDQUFDdUIsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDb0MsVUFBVTtrQkFDdERwQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFoQixNQUFPLENBQUNtQixJQUFJO2tCQUMzQjtrQkFDQTtrQkFDQTJELEtBQUssRUFBRSxPQUFPQSxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQUdBLEtBQUssRUFBRUEsS0FBSztrQkFDdkQsR0FBRy9CO2lCQUNILENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUN0QixHQUFHLENBQUNyQixJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQzhFLFdBQVcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUFsRixNQUFPLENBQUNzRyxJQUFJLENBQUNsRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUMvQixPQUFPVCxJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE1BQU1LLENBQUM7O1lBRVQ7WUFFQXNHLGlCQUFpQkEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBdk0sY0FBZTtZQUM1QjtZQUVBd00sU0FBU0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUE1TCxNQUFPO1lBQ3BCO1lBRVVtRixVQUFVQSxDQUFDQyxPQUFZO2NBQ2hDLElBQUksQ0FBQyxDQUFBaEcsY0FBZSxDQUFDcUMsR0FBRyxDQUFDO2dCQUFFMkQ7Y0FBTyxDQUFFLENBQUM7WUFDdEM7WUFFQXlHLGFBQWFBLENBQUNDLGFBQWE7Y0FDMUIsSUFBSUosSUFBSSxHQUFHLElBQUk7Y0FFZixJQUFJLENBQUMsSUFBSSxDQUFDckksU0FBUyxDQUFDeUksYUFBYSxDQUFDLEVBQUU7Z0JBQ25DOztjQUdEbkIsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDNUgsU0FBUyxDQUFDeUksYUFBYSxDQUFDLENBQUMsQ0FBQ3pMLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUN6RCxNQUFNK0MsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDeUksYUFBYSxDQUFDLENBQUN4TCxJQUFJLENBQUM7Z0JBQ3JELE1BQU1rRyxRQUFRLEdBQUcsSUFBSSxDQUFDbEcsSUFBSSxDQUFDO2dCQUUzQixJQUFJK0MsU0FBUyxDQUFDbEMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQ3FGLFFBQVEsRUFBRXRFLE1BQU0sRUFBRXdKLElBQUksR0FBRyxLQUFLO2dCQUNuRSxJQUFJckksU0FBUyxDQUFDbEMsSUFBSSxLQUFLLE9BQU8sSUFBSXFGLFFBQVEsRUFBRXRFLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQ3ZEc0UsUUFBUSxDQUFDbkcsT0FBTyxDQUFFMEwsT0FBWSxJQUFJO29CQUNqQ3BCLE1BQU0sQ0FBQ00sSUFBSSxDQUFDNUgsU0FBUyxDQUFDdUgsTUFBTSxDQUFDLENBQUN2SyxPQUFPLENBQUM2SyxLQUFLLElBQUc7c0JBQzdDLElBQUksQ0FBQ2EsT0FBTyxDQUFDYixLQUFLLENBQUMsRUFBRVEsSUFBSSxHQUFHLEtBQUs7b0JBQ2xDLENBQUMsQ0FBQztrQkFDSCxDQUFDLENBQUM7O2dCQUVILElBQUksQ0FBQ2xGLFFBQVEsRUFBRWtGLElBQUksR0FBRyxLQUFLO2dCQUMzQjtjQUNELENBQUMsQ0FBQztjQUVGLE9BQU9BLElBQUk7WUFDWjtZQUVBOUgsWUFBWUEsQ0FBQ2tJLGFBQWE7Y0FDekIsSUFBSUosSUFBSSxHQUFHLElBQUk7Y0FDZixNQUFNckksU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDMkksT0FBTyxHQUFHLElBQUksQ0FBQzNJLFNBQVMsQ0FBQ3lJLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQ3pJLFNBQVM7Y0FDekYsSUFBSSxDQUFDQSxTQUFTLEVBQUU7Y0FFaEJzSCxNQUFNLENBQUNNLElBQUksQ0FBQzVILFNBQVMsQ0FBQyxDQUFDaEQsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3JDLE1BQU0yTCxjQUFjLEdBQUc1SSxTQUFTLENBQUMvQyxJQUFJLENBQUM7Z0JBQ3RDLE1BQU1rRyxRQUFRLEdBQUcsSUFBSSxDQUFDbEcsSUFBSSxDQUFDO2dCQUUzQixJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDWSxRQUFRLENBQUNaLElBQUksQ0FBQyxFQUFFO2dCQUVoRDtnQkFDQSxJQUFJMkwsY0FBYyxDQUFDQyxNQUFNLEVBQUU7a0JBQzFCLE1BQU1DLE1BQU0sR0FBR0YsY0FBYyxDQUFDQyxNQUFNLENBQUNFLFNBQVMsQ0FBQzVGLFFBQVEsQ0FBQztrQkFDeEQsSUFBSSxDQUFDMkYsTUFBTSxDQUFDRSxPQUFPLEVBQUVYLElBQUksR0FBRyxLQUFLO2lCQUNqQyxNQUFNO2tCQUNOO2tCQUNBLElBQUlPLGNBQWMsQ0FBQzlLLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUNxRixRQUFRLEVBQUV0RSxNQUFNLEVBQUV3SixJQUFJLEdBQUcsS0FBSztrQkFDeEUsSUFBSU8sY0FBYyxDQUFDOUssSUFBSSxLQUFLLE9BQU8sSUFBSXFGLFFBQVEsRUFBRXRFLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVEc0UsUUFBUSxDQUFDbkcsT0FBTyxDQUFFMEwsT0FBWSxJQUFJO3NCQUNqQ3BCLE1BQU0sQ0FBQ00sSUFBSSxDQUFDZ0IsY0FBYyxDQUFDckIsTUFBTSxDQUFDLENBQUN2SyxPQUFPLENBQUM2SyxLQUFLLElBQUc7d0JBQ2xELElBQUksQ0FBQ2EsT0FBTyxDQUFDYixLQUFLLENBQUMsRUFBRVEsSUFBSSxHQUFHLEtBQUs7c0JBQ2xDLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQUM7OztnQkFJSixJQUFJLENBQUNsRixRQUFRLEVBQUVrRixJQUFJLEdBQUcsS0FBSztjQUM1QixDQUFDLENBQUM7Y0FFRixPQUFPQSxJQUFJO1lBQ1o7O1VBQ0FqRixPQUFBLENBQUErRCxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOU5ELElBQUE4QixLQUFBLEdBQUF0TixPQUFBO1VBRU0sTUFBT3VOLDBCQUEyQixTQUFRRCxLQUFBLENBQUE5QixhQUFhO1lBSTVELElBQUluSCxTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTjs7OztnQkFJQTJJLE9BQU8sRUFBRSxJQUFJO2dCQUNickksT0FBTyxFQUFFO2tCQUNSNkksSUFBSSxFQUFFO29CQUNMckwsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCc0wsUUFBUSxFQUFFOztpQkFFWDtnQkFDRDVJLEtBQUssRUFBRTtrQkFDTjZJLElBQUksRUFBRTtvQkFDTEMsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCQyxRQUFRLEVBQUUsQ0FBQztvQkFDWHpMLElBQUksRUFBRSxVQUFVO29CQUNoQnNMLFFBQVEsRUFBRTttQkFDVjtrQkFDREksVUFBVSxFQUFFO29CQUNYRCxRQUFRLEVBQUUsQ0FBQztvQkFDWHpMLElBQUksRUFBRSxPQUFPO29CQUNic0wsUUFBUSxFQUFFLElBQUk7b0JBQ2Q3QixNQUFNLEVBQUU7c0JBQ1A3RyxJQUFJLEVBQUUsT0FBTztzQkFDYlosU0FBUyxFQUFFOzs7aUJBR2I7Z0JBQ0QySixRQUFRLEVBQUU7a0JBQ1RoQyxRQUFRLEVBQUUsSUFBSTtrQkFDZGlDLFlBQVksRUFBRTtvQkFDYkgsUUFBUSxFQUFFLENBQUM7b0JBQ1hFLFFBQVEsRUFBRSxJQUFJO29CQUNkM0wsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCMkosUUFBUSxFQUFFOzs7ZUFHWjtZQUNGO1lBRUEvSyxZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUG9FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjO2VBQ3RFLENBQUM7WUFDSDs7VUFDQW9DLE9BQUEsQ0FBQThGLDBCQUFBLEdBQUFBLDBCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RERCxJQUFBRCxLQUFBLEdBQUF0TixPQUFBO1VBRU0sTUFBT2dPLGlCQUFrQixTQUFRVixLQUFBLENBQUE5QixhQUFhO1lBR25EekssWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BvRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWTtlQUN0QyxDQUFDO1lBQ0g7O1VBQ0FvQyxPQUFBLENBQUF1RyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYRCxJQUFBVixLQUFBLEdBQUF0TixPQUFBO1VBRU0sTUFBT2lPLDBCQUEyQixTQUFRWCxLQUFBLENBQUE5QixhQUFhO1lBSTVELElBQUluSCxTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTjJJLE9BQU8sRUFBRSxJQUFJO2dCQUNickksT0FBTyxFQUFFO2tCQUNSNkksSUFBSSxFQUFFO29CQUNMckwsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCc0wsUUFBUSxFQUFFOztpQkFFWDtnQkFDRDVJLEtBQUssRUFBRTtrQkFDTnFKLEtBQUssRUFBRTtvQkFBRU4sUUFBUSxFQUFFLENBQUM7b0JBQUV6TCxJQUFJLEVBQUUsVUFBVTtvQkFBRXNMLFFBQVEsRUFBRTtrQkFBSSxDQUFFO2tCQUN4REksVUFBVSxFQUFFO29CQUNYRCxRQUFRLEVBQUUsQ0FBQztvQkFDWEUsUUFBUSxFQUFFLElBQUk7b0JBQ2QzTCxJQUFJLEVBQUUsT0FBTztvQkFDYnNMLFFBQVEsRUFBRSxJQUFJO29CQUNkN0IsTUFBTSxFQUFFO3NCQUNQN0csSUFBSSxFQUFFLE9BQU87c0JBQ2JaLFNBQVMsRUFBRTs7O2lCQUdiO2dCQUNEMkosUUFBUSxFQUFFO2tCQUNUaEMsUUFBUSxFQUFFLElBQUk7a0JBQ2RpQyxZQUFZLEVBQUU7b0JBQ2JILFFBQVEsRUFBRSxDQUFDO29CQUNYekwsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCMkosUUFBUSxFQUFFO21CQUNWO2tCQUNEcUMsV0FBVyxFQUFFO29CQUNaUCxRQUFRLEVBQUUsQ0FBQztvQkFDWFEsUUFBUSxFQUFFOzs7ZUFHWjtZQUNGO1lBQ0FyTixZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUG9FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsT0FBTztlQUMvRSxDQUFDO1lBQ0g7O1VBQ0FvQyxPQUFBLENBQUF3RywwQkFBQSxHQUFBQSwwQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREQsSUFBQVgsS0FBQSxHQUFBdE4sT0FBQTtVQUVNLE1BQU9xTyxtQkFBb0IsU0FBUWYsS0FBQSxDQUFBOUIsYUFBYTtZQUlyRDs7O1lBR0EsSUFBSW5ILFNBQVNBLENBQUE7Y0FDWixPQUFPO2dCQUNOMkksT0FBTyxFQUFFLElBQUk7Z0JBQ2JySSxPQUFPLEVBQUU7a0JBQ1I2SSxJQUFJLEVBQUU7b0JBQUVyTCxJQUFJLEVBQUUsVUFBVTtvQkFBRXNMLFFBQVEsRUFBRTtrQkFBSTtpQkFDeEM7Z0JBQ0Q1SSxLQUFLLEVBQUU7a0JBQ042SSxJQUFJLEVBQUU7b0JBQUV2TCxJQUFJLEVBQUUsVUFBVTtvQkFBRXNMLFFBQVEsRUFBRSxJQUFJO29CQUFFRyxRQUFRLEVBQUU7a0JBQUMsQ0FBRTtrQkFDdkRVLE9BQU8sRUFBRTtvQkFBRW5NLElBQUksRUFBRSxVQUFVO29CQUFFc0wsUUFBUSxFQUFFLElBQUk7b0JBQUVHLFFBQVEsRUFBRTtrQkFBQyxDQUFFO2tCQUMxREMsVUFBVSxFQUFFO29CQUNYRCxRQUFRLEVBQUUsQ0FBQztvQkFDWHpMLElBQUksRUFBRSxPQUFPO29CQUNic0wsUUFBUSxFQUFFLElBQUk7b0JBQ2Q3QixNQUFNLEVBQUU7c0JBQ1A3RyxJQUFJLEVBQUUsT0FBTztzQkFDYlosU0FBUyxFQUFFOzs7aUJBR2I7Z0JBQ0QySixRQUFRLEVBQUU7a0JBQ1RoQyxRQUFRLEVBQUUsSUFBSTtrQkFDZGlDLFlBQVksRUFBRTtvQkFDYkgsUUFBUSxFQUFFLENBQUM7b0JBQ1hFLFFBQVEsRUFBRSxJQUFJO29CQUNkM0wsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCMkosUUFBUSxFQUFFOzs7ZUFHWjtZQUNGO1lBRUEvSyxZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUG9FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTTtlQUNqRixDQUFDO1lBQ0g7O1VBQ0FvQyxPQUFBLENBQUE0RyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0QsSUFBQWYsS0FBQSxHQUFBdE4sT0FBQTtVQUVNLE1BQU91TyxxQkFBc0IsU0FBUWpCLEtBQUEsQ0FBQTlCLGFBQWE7WUFJdkQsSUFBSW5ILFNBQVNBLENBQUE7Y0FDWixPQUFPO2dCQUNOMkksT0FBTyxFQUFFLElBQUk7Z0JBQ2JySSxPQUFPLEVBQUU7a0JBQ1I2SSxJQUFJLEVBQUU7b0JBQ0xyTCxJQUFJLEVBQUUsVUFBVTtvQkFDaEJzTCxRQUFRLEVBQUU7O2lCQUVYO2dCQUNENUksS0FBSyxFQUFFO2tCQUNOcUosS0FBSyxFQUFFO29CQUFFTixRQUFRLEVBQUUsQ0FBQztvQkFBRXpMLElBQUksRUFBRSxVQUFVO29CQUFFc0wsUUFBUSxFQUFFO2tCQUFJLENBQUU7a0JBQ3hEZSxRQUFRLEVBQUU7b0JBQUVaLFFBQVEsRUFBRSxDQUFDO29CQUFFekwsSUFBSSxFQUFFLFVBQVU7b0JBQUVzTCxRQUFRLEVBQUU7a0JBQUksQ0FBRTtrQkFDM0RJLFVBQVUsRUFBRTtvQkFDWEQsUUFBUSxFQUFFLENBQUM7b0JBQ1hFLFFBQVEsRUFBRSxJQUFJO29CQUNkM0wsSUFBSSxFQUFFLE9BQU87b0JBQ2JzTCxRQUFRLEVBQUUsSUFBSTtvQkFDZDdCLE1BQU0sRUFBRTtzQkFDUDdHLElBQUksRUFBRSxPQUFPO3NCQUNiWixTQUFTLEVBQUU7OztpQkFHYjtnQkFDRDJKLFFBQVEsRUFBRTtrQkFDVGhDLFFBQVEsRUFBRSxJQUFJO2tCQUNkaUMsWUFBWSxFQUFFO29CQUNiSCxRQUFRLEVBQUUsQ0FBQztvQkFDWHpMLElBQUksRUFBRSxVQUFVO29CQUNoQjJKLFFBQVEsRUFBRTs7O2VBR1o7WUFDRjtZQUNBL0ssWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BvRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVO2VBQzNGLENBQUM7WUFDSDs7VUFDQW9DLE9BQUEsQ0FBQThHLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRCxJQUFBRSxjQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTBPLEtBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBMk8sY0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUE0TyxPQUFBLEdBQUE1TyxPQUFBO1VBQ0EsSUFBQTZPLFNBQUEsR0FBQTdPLE9BQUE7VUFDQSxJQUFBOE8sZUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUErTyxPQUFBLEdBQUEvTyxPQUFBO1VBQ0EsSUFBQWdQLGlCQUFBLEdBQUFoUCxPQUFBO1VBSU0sTUFBT3dGLG9CQUFvQjtZQUN4QixPQUFPeUosUUFBUSxHQUFxQyxJQUFJM08sR0FBRyxFQUFFO1lBRXJFLE9BQU80TyxRQUFRQSxDQUFDL00sSUFBWSxFQUFFZ04sSUFBeUI7Y0FDdEQsSUFBSSxDQUFDRixRQUFRLENBQUN4TSxHQUFHLENBQUNOLElBQUksRUFBRWdOLElBQUksQ0FBQztZQUM5QjtZQUVBLE9BQU9DLE1BQU1BLENBQUNqTixJQUFZO2NBQ3pCLE1BQU1PLFFBQVEsR0FBRyxJQUFJLENBQUN1TSxRQUFRLENBQUN6TSxHQUFHLENBQUNMLElBQUksQ0FBQztjQUN4QyxJQUFJLENBQUNPLFFBQVEsRUFBRTtnQkFDZCxNQUFNLElBQUlpRSxLQUFLLENBQUMsa0JBQWtCeEUsSUFBSSxzQkFBc0IsQ0FBQzs7Y0FFOUQsT0FBTyxJQUFJTyxRQUFRLEVBQUU7WUFDdEI7WUFFQSxPQUFPRixHQUFHQSxDQUFDTCxJQUFZO2NBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUM4TSxRQUFRLENBQUMzTSxHQUFHLENBQUNILElBQUksQ0FBQyxFQUFFO2dCQUM3QkMsT0FBTyxDQUFDQyxJQUFJLENBQUMscURBQXFERixJQUFJLEVBQUUsQ0FBQzs7Y0FFMUUsT0FBTyxJQUFJLENBQUM4TSxRQUFRLENBQUN6TSxHQUFHLENBQUNMLElBQUksQ0FBQztZQUMvQjs7VUFHRDtVQUFBc0YsT0FBQSxDQUFBakMsb0JBQUEsR0FBQUEsb0JBQUE7VUFDQUEsb0JBQW9CLENBQUMwSixRQUFRLENBQUMsTUFBTSxFQUFFUixLQUFBLENBQUFWLGlCQUFpQixDQUFDO1VBQ3hEeEksb0JBQW9CLENBQUMwSixRQUFRLENBQUMsUUFBUSxFQUFFTixPQUFBLENBQUFQLG1CQUFtQixDQUFDO1VBQzVEN0ksb0JBQW9CLENBQUMwSixRQUFRLENBQUMsZ0JBQWdCLEVBQUVULGNBQUEsQ0FBQWxCLDBCQUEwQixDQUFDO1VBQzNFL0gsb0JBQW9CLENBQUMwSixRQUFRLENBQUMsZ0JBQWdCLEVBQUVQLGNBQUEsQ0FBQVYsMEJBQTBCLENBQUM7VUFDM0V6SSxvQkFBb0IsQ0FBQzBKLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRUYsaUJBQUEsQ0FBQUssNkJBQTZCLENBQUM7VUFDakY3SixvQkFBb0IsQ0FBQzBKLFFBQVEsQ0FBQyxVQUFVLEVBQUVMLFNBQUEsQ0FBQU4scUJBQXFCLENBQUM7VUFDaEUvSSxvQkFBb0IsQ0FBQzBKLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRUosZUFBQSxDQUFBUSwyQkFBMkIsQ0FBQztVQUM3RTlKLG9CQUFvQixDQUFDMEosUUFBUSxDQUFDLFFBQVEsRUFBRUgsT0FBQSxDQUFBUSxtQkFBbUIsQ0FBQztVQUM1RC9KLG9CQUFvQixDQUFDMEosUUFBUSxDQUFDLGNBQWMsRUFBRUgsT0FBQSxDQUFBUSxtQkFBbUIsQ0FBQztVQUNsRS9KLG9CQUFvQixDQUFDMEosUUFBUSxDQUFDLFNBQVMsRUFBRUgsT0FBQSxDQUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QzdELElBQUFqQyxLQUFBLEdBQUF0TixPQUFBO1VBRU0sTUFBT3FQLDZCQUE4QixTQUFRL0IsS0FBQSxDQUFBOUIsYUFBYTtZQUkvRCxJQUFJbkgsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ04ySSxPQUFPLEVBQUUsSUFBSTtnQkFDYnJJLE9BQU8sRUFBRTtrQkFDUjZJLElBQUksRUFBRTtvQkFDTHJMLElBQUksRUFBRSxVQUFVO29CQUNoQnNMLFFBQVEsRUFBRTs7aUJBRVg7Z0JBQ0Q1SSxLQUFLLEVBQUU7a0JBQ04ySyxhQUFhLEVBQUU7b0JBQUU1QixRQUFRLEVBQUUsQ0FBQztvQkFBRXpMLElBQUksRUFBRSxVQUFVO29CQUFFc0wsUUFBUSxFQUFFO2tCQUFJLENBQUU7a0JBQ2hFSSxVQUFVLEVBQUU7b0JBQ1hELFFBQVEsRUFBRSxDQUFDO29CQUNYRSxRQUFRLEVBQUUsSUFBSTtvQkFDZDNMLElBQUksRUFBRSxPQUFPO29CQUNic0wsUUFBUSxFQUFFLElBQUk7b0JBQ2Q3QixNQUFNLEVBQUU7c0JBQ1A3RyxJQUFJLEVBQUUsT0FBTztzQkFDYlosU0FBUyxFQUFFOzs7aUJBR2I7Z0JBQ0QySixRQUFRLEVBQUU7a0JBQ1RoQyxRQUFRLEVBQUUsSUFBSTtrQkFDZGlDLFlBQVksRUFBRTtvQkFDYkgsUUFBUSxFQUFFLENBQUM7b0JBQ1h6TCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIySixRQUFRLEVBQUU7OztlQUdaO1lBQ0Y7WUFDQS9LLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQb0UsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxlQUFlO2VBQ3ZGLENBQUM7WUFDSDs7VUFDQW9DLE9BQUEsQ0FBQTRILDZCQUFBLEdBQUFBLDZCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDRCxJQUFBL0IsS0FBQSxHQUFBdE4sT0FBQTtVQUNBLElBQUF5UCxJQUFBLEdBQUF6UCxPQUFBO1VBTU0sTUFBT3NQLDJCQUE0QixTQUFRaEMsS0FBQSxDQUFBOUIsYUFBYTtZQUluREMsaUJBQWlCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO1lBRXRELElBQUlwSCxTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTnFMLFNBQVMsRUFBRTtrQkFDVmpDLFFBQVEsRUFBRSxJQUFJO2tCQUNkdEwsSUFBSSxFQUFFLE9BQU87a0JBQ2J3TixRQUFRLEVBQUUsSUFBSTtrQkFDZHpDLE1BQU0sRUFBRXVDLElBQUEsQ0FBQUcsQ0FBQyxDQUFDNUQsS0FBSyxDQUNkeUQsSUFBQSxDQUFBRyxDQUFDLENBQ0NDLE1BQU0sQ0FBQztvQkFDUEMsUUFBUSxFQUFFTCxJQUFBLENBQUFHLENBQUMsQ0FBQ0csTUFBTSxFQUFFLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNCQyxPQUFPLEVBQUVSLElBQUEsQ0FBQUcsQ0FBQyxDQUFDNUQsS0FBSyxDQUFDeUQsSUFBQSxDQUFBRyxDQUFDLENBQUNHLE1BQU0sRUFBRSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDMUNFLGFBQWEsRUFBRVQsSUFBQSxDQUFBRyxDQUFDLENBQUNPLE1BQU0sRUFBRSxDQUFDQyxHQUFHLEVBQUUsQ0FBQ0MsV0FBVzttQkFDM0MsQ0FBQyxDQUNEQyxNQUFNLENBQUNsUCxJQUFJLElBQUlBLElBQUksQ0FBQzhPLGFBQWEsR0FBRzlPLElBQUksQ0FBQzZPLE9BQU8sQ0FBQy9NLE1BQU0sQ0FBQyxDQUMxRDtrQkFDRDBJLE1BQU0sRUFBRTtvQkFDUGtFLFFBQVEsRUFBRSxPQUFPO29CQUNqQlMsT0FBTyxFQUFFO3NCQUNScE8sSUFBSSxFQUFFLE9BQU87c0JBQ2J5SixNQUFNLEVBQUU7d0JBQ1A0RSxNQUFNLEVBQUUsT0FBTzt3QkFDZkMsT0FBTyxFQUFFOzs7OztlQUtiO1lBQ0Y7WUFFQSxJQUFJaFAsS0FBS0EsQ0FBQTtjQUNSLElBQUksQ0FBQyxJQUFJLENBQUNpTyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3hNLE1BQU0sRUFBRSxPQUFPLEtBQUs7Y0FDM0QsT0FBTyxJQUFJLENBQUN3TSxTQUFTLENBQUNoTyxLQUFLLENBQUNvTyxRQUFRLElBQUc7Z0JBQ3RDLE9BQ0NBLFFBQVEsQ0FBQ0EsUUFBUSxJQUNqQkEsUUFBUSxDQUFDRyxPQUFPLENBQUMvTSxNQUFNLEdBQUcsQ0FBQyxJQUMzQjRNLFFBQVEsQ0FBQ0ksYUFBYSxJQUFJLENBQUMsSUFDM0JKLFFBQVEsQ0FBQ0ksYUFBYSxHQUFHSixRQUFRLENBQUNHLE9BQU8sQ0FBQy9NLE1BQU07Y0FFbEQsQ0FBQyxDQUFDO1lBQ0g7WUFFQW5DLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQb0UsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVM7ZUFDbkMsQ0FBQztZQUNIO1lBRUFtSCxLQUFLQSxDQUFBO2NBQ0osSUFBSUMsT0FBTyxHQUFHLElBQUk7Y0FDbEIsSUFBSUMsSUFBSSxHQUFHLENBQUM7Y0FFWixPQUFPRCxPQUFPLElBQUlDLElBQUksR0FBRyxJQUFJLENBQUNySCxVQUFVLENBQUNuQyxNQUFNLEVBQUU7Z0JBQ2hELE1BQU13TixHQUFHLEdBQUcsSUFBSSxDQUFDckwsVUFBVSxDQUFDcUgsSUFBSSxDQUFXO2dCQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDeEssUUFBUSxDQUFDd08sR0FBRyxDQUFDLEVBQUU7a0JBQzNDaEUsSUFBSSxFQUFFO2tCQUNOOztnQkFHRCxJQUFJLElBQUksQ0FBQ2dFLEdBQUcsQ0FBQyxFQUFFO2tCQUNkakUsT0FBTyxHQUFHLEtBQUs7O2dCQUVoQkMsSUFBSSxFQUFFOztjQUVQLE9BQU9ELE9BQU87WUFDZjtZQUVBLE1BQU01RyxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7Y0FBRUM7WUFBTyxDQUFFO2NBQ2hDLE1BQU0zRSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMwSixXQUFXLENBQUNqRixRQUFRLENBQUM7Z0JBQzVDMUQsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCSSxFQUFFLEVBQUUsSUFBSSxDQUFDb0ssaUJBQWlCLEVBQUUsQ0FBQ3BLLEVBQUU7Z0JBQy9Cd0QsT0FBTztnQkFDUDtnQkFDQTtnQkFDQUQsS0FBSyxFQUFFLE9BQU9BLEtBQUssS0FBSyxRQUFRLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxFQUFFQTtlQUNsRCxDQUFDO2NBRUYsSUFBSTFFLElBQUksQ0FBQzRILEtBQUssRUFBRTtnQkFDZixPQUFPNUgsSUFBSTs7Y0FHWixJQUFJLENBQUNxQixHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUNKLE1BQU0sQ0FBQ3NHLElBQUksQ0FBQ2xHLElBQUksQ0FBQztjQUV0QixJQUFJLENBQUNTLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztjQUMvQixPQUFPVCxJQUFJO1lBQ1o7WUFFQSxNQUFNdVAsZUFBZUEsQ0FBQztjQUFFN0ssS0FBSztjQUFFZ0ssUUFBUTtjQUFFN047WUFBSyxDQUFFO2NBQy9DLElBQUksQ0FBQytELFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU01RSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMwSixXQUFXLENBQUNqRixRQUFRLENBQUM7Z0JBQzVDMUQsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZJLEVBQUUsRUFBRSxJQUFJLENBQUNvSyxpQkFBaUIsRUFBRSxDQUFDcEssRUFBRTtnQkFDL0J1TixRQUFRO2dCQUNSaEs7ZUFDQSxDQUFDO2NBRUYsSUFBSSxDQUFDNEosU0FBUyxDQUFDek4sS0FBSyxDQUFDLENBQUNnTyxPQUFPLEdBQUc3TyxJQUFJLENBQUM2TyxPQUFPO2NBQzVDLElBQUksQ0FBQ1AsU0FBUyxDQUFDek4sS0FBSyxDQUFDLENBQUNpTyxhQUFhLEdBQUc5TyxJQUFJLENBQUM4TyxhQUFhO2NBQ3hELElBQUksQ0FBQ2xQLE1BQU0sQ0FBQ3NHLElBQUksQ0FBQ2xHLElBQUksQ0FBQztjQUN0QixPQUFPLElBQUksQ0FBQ3NPLFNBQVMsQ0FBQ3pOLEtBQUssQ0FBQztZQUM3Qjs7VUFDQXdGLE9BQUEsQ0FBQTZILDJCQUFBLEdBQUFBLDJCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BIRCxJQUFBaEMsS0FBQSxHQUFBdE4sT0FBQTtVQUVNLE1BQU91UCxtQkFBb0IsU0FBUWpDLEtBQUEsQ0FBQTlCLGFBQWE7WUFVckQsSUFBSW5ILFNBQVNBLENBQUE7Y0FDWixPQUFPO2dCQUNOMkksT0FBTyxFQUFFLElBQUk7Z0JBQ2JySSxPQUFPLEVBQUU7a0JBQ1I2SSxJQUFJLEVBQUU7b0JBQ0xyTCxJQUFJLEVBQUU7O2lCQUVQO2dCQUNEMEMsS0FBSyxFQUFFO2tCQUNOK0wsVUFBVSxFQUFFO29CQUNYek8sSUFBSSxFQUFFO21CQUNOO2tCQUNEME8sUUFBUSxFQUFFO29CQUNUMU8sSUFBSSxFQUFFLE9BQU87b0JBQ2J5SixNQUFNLEVBQUU7c0JBQ1A3RyxJQUFJLEVBQUUsT0FBTztzQkFDYnVKLE9BQU8sRUFBRTs7OztlQUlaO1lBQ0Y7WUFDQXZOLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQb0UsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVTtlQUMxRCxDQUFDO1lBQ0g7O1VBQ0FvQyxPQUFBLENBQUE4SCxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0QsSUFBQXVCLGlCQUFBLEdBQUE5USxPQUFBO1VBeUJBLE1BQU0rUSxLQUFLO1lBQ1YsQ0FBQUMsS0FBTSxHQUFrQyxDQUN2QztjQUNDek8sRUFBRSxFQUFFdU8saUJBQUEsQ0FBQUcsWUFBWSxDQUFDQyxhQUFhO2NBQzlCbk0sSUFBSSxFQUFFLGdCQUFnQjtjQUN0QmhCLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQztjQUVwQm9OLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2NBQ2hEMUwsU0FBUyxFQUFFLENBQ1Y7Z0JBQ0NWLElBQUksRUFBRTtlQUNOLEVBQ0Q7Z0JBQ0NxTSxZQUFZLEVBQUUsU0FBUztnQkFDdkJyTSxJQUFJLEVBQUU7ZUFDTixFQUNEO2dCQUNDcU0sWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCck0sSUFBSSxFQUFFO2VBQ04sRUFFRDtnQkFDQ3FNLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDekJyTSxJQUFJLEVBQUU7ZUFDTixDQUNEO2NBQ0Q2RyxNQUFNLEVBQUUsQ0FBQyxVQUFVO2FBQ25CLEVBQ0Q7Y0FDQ3JKLEVBQUUsRUFBRXVPLGlCQUFBLENBQUFHLFlBQVksQ0FBQ0ksTUFBTTtjQUN2QnRNLElBQUksRUFBRSxRQUFRO2NBQ2RoQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO2NBQy9Cb04sU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXO2FBQy9DLEVBQ0Q7Y0FDQzVPLEVBQUUsRUFBRXVPLGlCQUFBLENBQUFHLFlBQVksQ0FBQ0ssYUFBYTtjQUM5QnZNLElBQUksRUFBRSxnQkFBZ0I7Y0FDdEJoQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2NBQzVCb04sU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDO2NBQ3hEdkYsTUFBTSxFQUFFLENBQUMsVUFBVTthQUNuQixFQUNEO2NBQ0NySixFQUFFLEVBQUV1TyxpQkFBQSxDQUFBRyxZQUFZLENBQUNNLGNBQWM7Y0FDL0J4TSxJQUFJLEVBQUUsaUJBQWlCO2NBQ3ZCO2NBQ0FoQixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7Y0FDcEIwQixTQUFTLEVBQUUsRUFBRTtjQUNicUYsV0FBVyxFQUFFLFdBQVc7Y0FDeEJjLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVO2FBQ2hDO1lBQ0Q7WUFDQTtjQUNDckosRUFBRSxFQUFFdU8saUJBQUEsQ0FBQUcsWUFBWSxDQUFDTyxNQUFNO2NBQ3ZCek0sSUFBSSxFQUFFLFFBQVE7Y0FDZG9NLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2NBQ2hEdkYsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO2NBQ3BCN0gsS0FBSyxFQUFFLENBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ047Z0JBQ0NnQixJQUFJLEVBQUUsVUFBVTtnQkFDaEI2RyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUztlQUMxQjthQUVGLENBQ0Q7WUFFRCxJQUFJckwsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUF5USxLQUFNO1lBQ25CO1lBQ0EsQ0FBQTNRLEdBQUksR0FBOEIsSUFBSUMsR0FBRyxFQUFFO1lBQzNDLElBQUlvTCxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQXJMLEdBQUk7WUFDakI7WUFDQVUsWUFBQTtjQUNDLElBQUksQ0FBQyxDQUFBaVEsS0FBTSxDQUFDM1AsT0FBTyxDQUFFYyxJQUF3QixJQUFJO2dCQUNoRCxJQUFJLENBQUMsQ0FBQTlCLEdBQUksQ0FBQ29DLEdBQUcsQ0FBQ04sSUFBSSxDQUFDSSxFQUFFLEVBQUVKLElBQUksQ0FBQ0ksRUFBRSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztZQUNIO1lBRUFDLEdBQUdBLENBQUNELEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDbUMsR0FBRyxDQUFDRCxFQUFFLENBQUM7WUFDekI7O1VBR007VUFBVyxNQUFNa1AsYUFBYSxHQUFBaEssT0FBQSxDQUFBZ0ssYUFBQSxHQUFHLElBQUlWLEtBQUssRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvR25ELElBQUFySixXQUFBLEdBQUExSCxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZKLElBQUEsR0FBQTdKLE9BQUE7VUFFQSxJQUFBOEosUUFBQSxHQUFBOUosT0FBQTtVQUVBLElBQUE4SCxRQUFBLEdBQUE5SCxPQUFBO1VBRU0sTUFBTzBSLFdBQVksU0FBUWhLLFdBQUEsQ0FBQUUsVUFBc0I7WUFFdEQsQ0FBQW1DLEdBQUk7WUFDSixDQUFBL0ksTUFBTztZQUNQRCxZQUFZO2NBQUVDLE1BQU07Y0FBRSxHQUFHQztZQUFJLElBQVU7Y0FBRUQsTUFBTSxFQUFFbUk7WUFBUyxDQUFFO2NBQzNELEtBQUssQ0FBQztnQkFDTCxHQUFHbEksSUFBSTtnQkFDUCtELE1BQU0sRUFBRSxhQUFhO2dCQUNyQjFELElBQUksRUFBRXJCLEtBQUEsQ0FBQTBSO2VBQ04sQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBM1EsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBK0ksR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUksR0FBRyxDQUFDbkMsUUFBQSxDQUFBRSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQzVDO1lBQ0EsQ0FBQTBKLFVBQVcsR0FBNEIsSUFBSXRSLEdBQUcsRUFBRTtZQUNoRCxJQUFJc1IsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQTtZQUNBblAsR0FBR0EsQ0FBQ3JCLElBQTZCO2NBQ2hDO2NBQ0EsSUFBSXlCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDMUIsSUFBSSxDQUFDLEVBQUVBLElBQUksR0FBRztnQkFBRWIsS0FBSyxFQUFFYTtjQUFJLENBQUU7Y0FFL0MsSUFBSSxDQUFDeUIsS0FBSyxDQUFDQyxPQUFPLENBQUMxQixJQUFJLENBQUNiLEtBQUssQ0FBQyxFQUFFO2dCQUMvQjZCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHVDQUF1QyxFQUFFakIsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDakU7O2NBRUQsSUFBSSxDQUFDVyxRQUFRLENBQUNYLElBQUksQ0FBQ2IsS0FBSyxDQUFDO2NBQ3pCLElBQUksQ0FBQ0EsS0FBSyxDQUFDYyxPQUFPLENBQUNDLElBQUksSUFBRztnQkFDekIsSUFBSSxDQUFDLENBQUFzUSxVQUFXLENBQUNuUCxHQUFHLENBQUNuQixJQUFJLENBQUN1USxTQUFTLENBQUN0UCxFQUFFLEVBQUVqQixJQUFJLENBQUM7Y0FDOUMsQ0FBQyxDQUFDO1lBQ0g7WUFFQVMsUUFBUUEsQ0FBQ3hCLEtBQUs7Y0FDYixLQUFLLENBQUN3QixRQUFRLENBQUN4QixLQUFLLENBQUM7Y0FDckIsSUFBSSxDQUFDQSxLQUFLLENBQUNjLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUN6QixJQUFJLENBQUMsQ0FBQXNRLFVBQVcsQ0FBQ25QLEdBQUcsQ0FBQ25CLElBQUksQ0FBQ3VRLFNBQVMsQ0FBQ3RQLEVBQUUsRUFBRWpCLElBQUksQ0FBQztjQUM5QyxDQUFDLENBQUM7WUFDSDtZQUVBLE1BQU0wQixHQUFHQSxDQUFDOE8sV0FBVztjQUNwQixNQUFNL04sS0FBSyxHQUFHO2dCQUFFNEcsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBM0osTUFBTyxDQUFDdUIsRUFBRTtnQkFBRXVQO2NBQVcsQ0FBRTtjQUN4RCxNQUFNM0gsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkIsTUFBTXBILFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUMsY0FBYyxFQUFFekcsS0FBSyxDQUFDO2NBRTVELElBQUksQ0FBQ2hCLFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJOUQsS0FBSyxDQUFDNUQsUUFBUSxDQUFDaUcsS0FBSyxDQUFDOztjQUVoQyxNQUFNK0ksVUFBVSxHQUFHLElBQUk5UixLQUFBLENBQUEwUixVQUFVLENBQUM7Z0JBQUUzUSxNQUFNLEVBQUUsSUFBSTtnQkFBRSxHQUFHK0IsUUFBUSxDQUFDM0I7Y0FBSSxDQUFFLENBQUM7Y0FFckUsSUFBSSxDQUFDLENBQUF3USxVQUFXLENBQUNuUCxHQUFHLENBQUNxUCxXQUFXLEVBQUVDLFVBQVUsQ0FBQztjQUM3QyxJQUFJLENBQUMsQ0FBQS9RLE1BQU8sQ0FBQ2EsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUM5QjtjQUNBLE9BQU9rUSxVQUFVO1lBQ2xCOztVQUNBdEssT0FBQSxDQUFBaUssV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFRCxJQUFBelIsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXlQLElBQUEsR0FBQXpQLE9BQUE7VUFNQTs7O1VBR00sTUFBTzJSLFVBQVcsU0FBUTFSLEtBQUEsQ0FBQTZELElBQWlCO1lBSWhELElBQUlrTyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxjQUFjLElBQUksQ0FBQ3pQLEVBQUUsRUFBRTtZQUMvQjtZQUVBLElBQUkwUCxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDMVAsRUFBRSxFQUFFO1lBQ2pDO1lBQ1UySyxNQUFNLEdBQUd1QyxJQUFBLENBQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO2NBQzNCdE4sRUFBRSxFQUFFa04sSUFBQSxDQUFBRyxDQUFDLENBQUNHLE1BQU0sRUFBRTtjQUNkaEwsSUFBSSxFQUFFMEssSUFBQSxDQUFBRyxDQUFDLENBQUNHLE1BQU0sRUFBRTtjQUNoQjlMLFdBQVcsRUFBRXdMLElBQUEsQ0FBQUcsQ0FBQyxDQUFDRyxNQUFNLEVBQUUsQ0FBQ2pFLFFBQVE7YUFDaEMsQ0FBQztZQUVGL0ssWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUrRCxNQUFNLEVBQUUsYUFBYTtnQkFBRUssVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUk7Y0FBQyxDQUFFLENBQUM7WUFDM0U7O1VBQ0FvQyxPQUFBLENBQUFrSyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJELElBQUE1UixNQUFBLEdBQUFDLE9BQUE7VUFNTSxNQUFPa1Msc0JBQXVCLFNBQVFuUyxNQUFBLENBQUFJLGFBQXNDO1lBQ2pGWSxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFc0UsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FvQyxPQUFBLENBQUF5SyxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBalMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW1TLFVBQUEsR0FBQW5TLE9BQUE7VUFLTyxZQURQO1VBQ2tCLE1BQU9vUyxrQkFBbUIsU0FBUW5TLEtBQUEsQ0FBQTZELElBQXFDO1lBR3hGdU8sS0FBSztZQUNMbFAsUUFBUTtZQUNSYSxLQUFLO1lBQ0xDLFdBQVc7WUFDWEUsU0FBUztZQUNUMkMsT0FBTztZQUNQd0wsUUFBUTtZQUlSdlIsWUFBWTtjQUFFd0IsRUFBRSxHQUFHNEcsU0FBUztjQUFFOUQsVUFBVSxHQUFHLEVBQUU7Y0FBRWxELElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2xCO1lBQUksQ0FBRSxHQUFHLEVBQUU7Y0FDN0UsS0FBSyxDQUFDO2dCQUNMc0IsRUFBRTtnQkFDRnlDLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCQyxRQUFRLEVBQUVrTixVQUFBLENBQUFJLGNBQWM7Z0JBQ3hCLEdBQUd0UixJQUFJO2dCQUNQb0UsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxPQUFPLEVBQ1AsVUFBVSxFQUNWLE9BQU8sRUFDUCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLEdBQUdBLFVBQVU7ZUFFZCxDQUFDO1lBQ0g7WUFFQSxNQUFNbU4sWUFBWUEsQ0FBQ3JQLFFBQVE7Y0FDMUIsTUFBTW1QLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3JOLFFBQVEsQ0FBQ3dOLFdBQVcsQ0FBQ3RQLFFBQVEsQ0FBQztjQUMxRCxPQUFPbVAsUUFBUTtZQUNoQjs7VUFDQTdLLE9BQUEsQ0FBQTJLLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRCxJQUFBMUssV0FBQSxHQUFBMUgsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwUyxnQkFBQSxHQUFBMVMsT0FBQTtVQUdPLFdBRFA7VUFDaUIsTUFBTzJTLGVBQWdCLFNBQVFqTCxXQUFBLENBQUFFLFVBQWtEO1lBQ2pHLENBQUFnTCxTQUFVLEdBQUcsSUFBSXRTLEdBQUcsRUFBRTtZQUN0QixJQUFJc1MsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBMVEsSUFBSyxHQUFHLFFBQVE7WUFDaEIsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQXBCLFlBQVlFLElBQUEsR0FBOEM7Y0FBRWtCLElBQUksRUFBRSxTQUFTO2NBQUUwUSxRQUFRLEVBQUU7WUFBSyxDQUFFO2NBQzdGLEtBQUssQ0FBQztnQkFDTDdOLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCQyxRQUFRLEVBQUV5TixnQkFBQSxDQUFBSSxzQkFBc0I7Z0JBQ2hDeFIsSUFBSSxFQUFFckIsS0FBQSxDQUFBOFMsY0FBYztnQkFDcEIsR0FBRzlSO2VBQ0gsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBa0IsSUFBSyxHQUFHbEIsSUFBSSxDQUFDa0IsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQTBRLFFBQVMsR0FBRzVSLElBQUksQ0FBQzRSLFFBQVE7WUFDL0I7WUFFQSxNQUFNN0gsSUFBSUEsQ0FBQ2pILEtBQUs7Y0FDZixNQUFNaEIsUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDaUksSUFBSSxDQUFDakgsS0FBSyxDQUFDO2NBRXhDLE9BQU9oQixRQUFRO1lBQ2hCO1lBQ0EsTUFBTXlQLFlBQVlBLENBQUNyUCxRQUFRO2NBQzFCLElBQUksSUFBSSxDQUFDLENBQUF5UCxTQUFVLENBQUN0USxHQUFHLENBQUNhLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxDQUFBeVAsU0FBVSxDQUFDcFEsR0FBRyxDQUFDVyxRQUFRLENBQUM7O2NBRXJDLE1BQU1tUCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNyTixRQUFRLENBQUN3TixXQUFXLENBQUN0UCxRQUFRLENBQUM7Y0FDMUQsSUFBSSxDQUFDLENBQUF5UCxTQUFVLENBQUNuUSxHQUFHLENBQUNVLFFBQVEsRUFBRW1QLFFBQVEsQ0FBQztjQUN2QyxPQUFPQSxRQUFRO1lBQ2hCOztVQUNBN0ssT0FBQSxDQUFBa0wsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRCxJQUFBN0ssUUFBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUE2SixJQUFBLEdBQUE3SixPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBILFdBQUEsR0FBQTFILE9BQUE7VUFFQSxJQUFBZ1QsUUFBQSxHQUFBaFQsT0FBQTtVQUVBLElBQUFtUyxVQUFBLEdBQUFuUyxPQUFBO1VBQ0EsSUFBQTZLLFlBQUEsR0FBQTdLLE9BQUE7VUFLTyxZQUZQO1VBRWtCLE1BQU9pVCx1QkFBd0IsU0FBUWhULEtBQUEsQ0FBQTZELElBQXlDO1lBQ2pHLENBQUFnSCxXQUFZO1lBQ1osQ0FBQW9JLEtBQU07WUFNRSxPQUFPQyxTQUFTLEdBQUcsSUFBSTdTLEdBQUcsRUFBRTtZQUVwQyxDQUFBeUosR0FBSTtZQUNKLENBQUFxSixXQUFZO1lBQ1osQ0FBQWhOLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDNUQsR0FBRyxFQUFFO1lBQzNCO1lBQ0EsSUFBSTRELE9BQU9BLENBQUNoRixJQUFzQjtjQUNqQyxJQUFJLENBQUNBLElBQUksRUFBRTtjQUNYLElBQUksQ0FBQyxDQUFBZ0YsT0FBUSxDQUFDM0QsR0FBRyxDQUFDckIsSUFBSSxDQUFDO1lBQ3hCO1lBRUEsQ0FBQWlTLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUMvTixLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBK04sVUFBVyxDQUFDelIsS0FBSyxFQUFFO2NBQ3hCLElBQUksQ0FBQyxDQUFBeVIsVUFBVyxDQUFDNVEsR0FBRyxDQUFDNkMsS0FBSyxDQUFDO2NBQzNCLElBQUksQ0FBQ00sWUFBWSxFQUFFO1lBQ3BCO1lBRUE7Ozs7OztZQU1BN0UsWUFBWTtjQUFFd0IsRUFBRSxHQUFHNEcsU0FBUztjQUFFaEgsSUFBSSxHQUFHLFFBQVE7Y0FBRSxHQUFHbEI7WUFBSSxDQUFFLEdBQUcsRUFBRTtjQUM1RCxLQUFLLENBQUM7Z0JBQ0xzQixFQUFFO2dCQUNGeUMsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEJDLFFBQVEsRUFBRWtOLFVBQUEsQ0FBQUksY0FBYztnQkFDeEJsTixVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBRVQsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFFBQVEsQ0FBQztnQkFBQTtlQUVWLENBQUMsQ0FBQyxDQUFDO2NBRUosSUFBSSxDQUFDLENBQUFlLE9BQVEsR0FBRyxJQUFJNE0sUUFBQSxDQUFBTSxPQUFPLEVBQUU7Y0FDN0IsSUFBSSxDQUFDLENBQUF4SSxXQUFZLEdBQUcsSUFBSUQsWUFBQSxDQUFBRSxXQUFXLEVBQUU7Y0FFckMsSUFBSSxDQUFDLENBQUFzSSxVQUFXLEdBQUcsSUFBSTNMLFdBQUEsQ0FBQXhILFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDdkMsSUFBSSxDQUFDLENBQUFtVCxVQUFXLENBQUMxTixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRWhELElBQUksQ0FBQyxDQUFBbUUsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUksR0FBRyxDQUFDbkMsUUFBQSxDQUFBRSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRTNDLElBQUksQ0FBQ3FMLFVBQVUsQ0FBQztnQkFBRSxHQUFHdFM7Y0FBSSxDQUFFLENBQUM7WUFDN0I7WUFFQXdCLEdBQUdBLENBQUNyQixJQUFTO2NBQ1osTUFBTTJCLFFBQVEsR0FBRyxLQUFLLENBQUNOLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztjQUNoQyxJQUFJQSxJQUFJLENBQUNnUyxXQUFXLEVBQUU7Z0JBQ3JCO2dCQUNBLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUMzUSxHQUFHLENBQUNyQixJQUFJLENBQUNnUyxXQUFXLENBQUM7O2NBRXhDO2NBQ0EsSUFBSSxDQUFDaE4sT0FBTyxHQUFHaEYsSUFBSSxDQUFDZ0YsT0FBTztjQUMzQixJQUFJaEYsSUFBSSxDQUFDaVMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsQ0FBQUEsVUFBVyxDQUFDNVEsR0FBRyxDQUFDckIsSUFBSSxDQUFDaVMsVUFBVSxDQUFDOztjQUV0QyxPQUFPdFEsUUFBUTtZQUNoQjtZQUVBLE1BQU1NLFNBQVNBLENBQUNVLEtBQUssR0FBRyxFQUFFO2NBQ3pCLE1BQU0zQyxJQUFJLEdBQUc7Z0JBQ1osR0FBRyxJQUFJLENBQUNJLGFBQWEsRUFBRTtnQkFDdkIsR0FBR3VDLEtBQUs7Z0JBQ1JzUCxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUNsUyxRQUFRLEVBQUU7Z0JBQ3RDZ0IsSUFBSSxFQUFFO2VBQ047Y0FDRCxJQUFJLENBQUMsQ0FBQStRLEtBQU0sR0FBRyxJQUFJO2NBQ2xCLE1BQU1uUSxRQUFRLEdBQUcsS0FBSyxDQUFDeVEsT0FBTyxDQUFDcFMsSUFBSSxDQUFDO2NBQ3BDNlIsdUJBQXVCLENBQUNFLFNBQVMsQ0FBQzFRLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEVBQUUsRUFBRSxJQUFJLENBQUM7Y0FDcEQsT0FBT1EsUUFBUTtZQUNoQjtZQUNBOzs7OztZQUtBLE1BQU0wUSxtQkFBbUJBLENBQUNqVCxNQUFNO2NBQy9CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDa1QsYUFBYSxHQUFHLElBQUk7Z0JBQ3pCLElBQUksQ0FBQ2pSLEdBQUcsQ0FBQ2pDLE1BQU0sQ0FBQztnQkFDaEIsTUFBTVksSUFBSSxHQUF3QixNQUFNLElBQUksQ0FBQyxDQUFBdVMsY0FBZSxDQUFDO2tCQUM1RHBSLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7a0JBQ1g0QixTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTO2tCQUN6QmhDLElBQUksRUFBRSxRQUFRO2tCQUNkeVIsWUFBWSxFQUFFcFQsTUFBTSxDQUFDc0YsS0FBSztrQkFDMUJBLEtBQUssRUFBRXRGLE1BQU0sQ0FBQ3NGO2tCQUNkO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDMUUsSUFBSSxDQUFDNEMsS0FBSyxFQUFFO2tCQUNoQjVCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDBDQUEwQyxFQUFFakIsSUFBSSxDQUFDOztnQkFFL0QsTUFBTSxJQUFJLENBQUNxQixHQUFHLENBQUM7a0JBQUUsR0FBR3JCLElBQUk7a0JBQUVtQixFQUFFLEVBQUVuQixJQUFJLENBQUNtQixFQUFFO2tCQUFFWixLQUFLLEVBQUU7Z0JBQWtCLENBQUUsQ0FBQztnQkFDbkUsTUFBTSxJQUFJLENBQUMwQixTQUFTLENBQUM7a0JBQUUxQixLQUFLLEVBQUU7Z0JBQVcsQ0FBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMrUixhQUFhLEdBQUcsS0FBSztnQkFDMUIsSUFBSSxDQUFDOU4sWUFBWSxDQUFDLHNCQUFzQixDQUFDO2VBQ3pDLENBQUMsT0FBT1MsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSU0sS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDK00sYUFBYSxHQUFHLEtBQUs7O1lBRTVCO1lBRUEsTUFBTSxDQUFBQyxjQUFlRSxDQUFDOVAsS0FBSztjQUMxQixNQUFNM0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEwSixXQUFZLENBQUNqRixRQUFRLENBQUM5QixLQUFLLENBQUM7Y0FDcEQsTUFBTSxJQUFJLENBQUMsQ0FBQXFDLE9BQVEsQ0FBQzNELEdBQUcsQ0FBQ3JCLElBQUksQ0FBQ2dGLE9BQU8sQ0FBQztjQUNyQyxJQUFJLENBQUN2RSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsT0FBT1QsSUFBSTtZQUNaO1lBRUEsTUFBTTRKLElBQUlBLENBQUE7Y0FDVCxNQUFNNUosSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNkQsUUFBUSxDQUFDK0YsSUFBSSxFQUFFO2NBQ3ZDLElBQUksQ0FBQ3ZJLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztjQUNkLElBQUksQ0FBQ2lTLFVBQVUsQ0FBQ3RSLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDaVMsVUFBVSxDQUFDO2NBQ3pDLE9BQU9qUyxJQUFJO1lBQ1o7WUFFQSxhQUFhb0IsR0FBR0EsQ0FBQ3VCLEtBQUs7Y0FDckIsSUFBSUEsS0FBSyxFQUFFeEIsRUFBRSxJQUFJLElBQUksQ0FBQzRRLFNBQVMsQ0FBQzdRLEdBQUcsQ0FBQ3lCLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQyxFQUFFO2dCQUM5QyxPQUFPLElBQUksQ0FBQzRRLFNBQVMsQ0FBQzNRLEdBQUcsQ0FBQ3VCLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQzs7Y0FHcEMsTUFBTXVSLE1BQU0sR0FBRyxJQUFJYix1QkFBdUIsQ0FBQ2xQLEtBQUssQ0FBQztjQUNqRCxJQUFJQSxLQUFLLENBQUN4QixFQUFFLEVBQUU7Z0JBQ2IsTUFBTXVSLE1BQU0sQ0FBQzlJLElBQUksRUFBRTs7Y0FHcEIsSUFBSWpILEtBQUssQ0FBQ3hCLEVBQUUsRUFBRSxJQUFJLENBQUM0USxTQUFTLENBQUMxUSxHQUFHLENBQUNzQixLQUFLLENBQUN4QixFQUFFLEVBQUV1UixNQUFNLENBQUM7Y0FDbEQsT0FBT0EsTUFBTTtZQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkxELElBQUEvVCxNQUFBLEdBQUFDLE9BQUE7VUFHTztVQUFVLE1BQU9zVCxPQUFRLFNBQVF2VCxNQUFBLENBQUFJLGFBQXNCO1lBTTdELElBQUk0VCxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUN2UixHQUFHLEVBQUUsQ0FBQ3dSLEtBQUssR0FBRyxJQUFJLENBQUN4UixHQUFHLEVBQUUsQ0FBQ3lSLFFBQVEsSUFBSSxDQUFDO1lBQ25EO1lBRUEsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2NBQzFCLE9BQU8sSUFBSSxDQUFDQSxNQUFNLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsUUFBUSxJQUFJLENBQUM7WUFDckQ7WUFFQSxJQUFJRyxXQUFXQSxDQUFBO2NBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU8sQ0FBQztjQUMxQixPQUFPLElBQUksQ0FBQ0EsTUFBTSxDQUFDSCxLQUFLO1lBQ3pCO1lBQ0FqVCxZQUFZRSxJQUFJLEdBQUc7Y0FBRStTLEtBQUssRUFBRSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFDLENBQUU7Y0FDM0MsS0FBSyxDQUFDO2dCQUFFNU8sVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO2dCQUFFLEdBQUdwRTtjQUFJLENBQUUsQ0FBQztZQUN4RTtZQUVBdUIsR0FBR0EsQ0FBQTtjQUNGLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ3FFLElBQUksRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUNBLElBQUk7O2NBR2pCLE9BQU87Z0JBQUVvTixRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2dCQUFFRCxLQUFLLEVBQUUsSUFBSSxDQUFDQTtjQUFLLENBQUU7WUFDdEQ7O1VBQ0F2TSxPQUFBLENBQUE2TCxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7O1VDakNEOztVQUVBM0gsTUFBQSxDQUFBMEksY0FBQSxDQUFBNU0sT0FBQTtZQUNBbkMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFvQyxXQUFBLEdBQUExSCxPQUFBO1VBQ0EsSUFBQXNOLEtBQUEsR0FBQXROLE9BQUE7VUFFQSxJQUFBZ1QsUUFBQSxHQUFBaFQsT0FBQTtVQUdBLElBQUE2SyxZQUFBLEdBQUE3SyxPQUFBO1VBS08sWUFGUDtVQUVrQixNQUFPc1UsS0FBTSxTQUFRaEgsS0FBQSxDQUFBOEUsa0JBQWtCO1lBQ3hELENBQUF0SCxXQUFZO1lBRVosQ0FBQW9JLEtBQU07WUFFTixDQUFBcUIsT0FBUSxHQUFHLElBQUk7WUFDZixDQUFBQyxPQUFRLEdBQUcsS0FBSztZQUNoQixDQUFBQyxLQUFNLEdBQUcsSUFBSTtZQUNiLENBQUFDLFVBQVcsR0FBRyxHQUFHO1lBRWpCLElBQUlDLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQ2xULEtBQUssSUFBSSxJQUFJLENBQUM0UixVQUFVLENBQUM1UixLQUFLO1lBQzNDO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ2MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUN5QixLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0MsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNFLFNBQVM7WUFDM0U7WUFFQTs7Ozs7O1lBTUFwRCxZQUFZO2NBQUV3QixFQUFFLEdBQUc0RyxTQUFTO2NBQUVoSCxJQUFJLEdBQUcsT0FBTztjQUFFLEdBQUdsQjtZQUFJLElBQXFCO2NBQUVrQixJQUFJLEVBQUU7WUFBUSxDQUFFO2NBQzNGLEtBQUssQ0FBQztnQkFDTEksRUFBRTtnQkFDRkosSUFBSTtnQkFFSmtELFVBQVUsRUFBRSxDQUNYLE9BQU8sRUFDUCxvQkFBb0IsRUFDcEI7a0JBQ0NOLElBQUksRUFBRSxTQUFTO2tCQUNmTyxLQUFLLEVBQUUwTixRQUFBLENBQUFNO2lCQUNQLEVBQ0Q7a0JBQ0N2TyxJQUFJLEVBQUUsVUFBVTtrQkFDaEJPLEtBQUssRUFBRTBOLFFBQUEsQ0FBQU07aUJBQ1AsRUFDRDtrQkFDQ3ZPLElBQUksRUFBRSxZQUFZO2tCQUNsQk8sS0FBSyxFQUFFb0MsV0FBQSxDQUFBeEg7aUJBQ1AsQ0FDRDtnQkFDRCxHQUFHZTtlQUNILENBQUM7Y0FFRixJQUFJLENBQUNrQixJQUFJLEdBQUdBLElBQUk7Y0FDaEIsSUFBSSxDQUFDLENBQUEySSxXQUFZLEdBQUcsSUFBSUQsWUFBQSxDQUFBRSxXQUFXLEVBQUU7Y0FFckMsSUFBSSxDQUFDc0ksVUFBVSxDQUFDblMsU0FBUyxDQUFDLElBQUksQ0FBQztjQUMvQixJQUFJLENBQUMwVCxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QztZQUVBLE1BQU12UixTQUFTQSxDQUFDVSxLQUFLLEdBQUcsRUFBRSxFQUFFOFEsS0FBSyxHQUFHLElBQUk7Y0FDdkM7Y0FDQSxJQUFJLENBQUMsQ0FBQU4sT0FBUSxHQUFHLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtnQkFBRSxHQUFHeFE7Y0FBSyxDQUFFLEdBQUdBLEtBQUs7Y0FFdEUrUSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQztjQUN6QixJQUFJLENBQUNJLEtBQUssRUFBRTtnQkFDWHpTLE9BQU8sQ0FBQ2tFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUFpTyxPQUFRLENBQUM7Z0JBQzFDLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQVEsWUFBYSxFQUFFOztjQUVsQyxJQUFJLENBQUMsQ0FBQU4sS0FBTSxHQUFHTyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQUQsWUFBYSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFMLFVBQVcsQ0FBQztZQUN2RTtZQUVBLE1BQU0sQ0FBQUssWUFBYUUsQ0FBQTtjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFWLE9BQVEsSUFBSSxJQUFJLENBQUMsQ0FBQUMsT0FBUSxFQUFFO2NBQ3JDLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNVSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFYLE9BQVE7Y0FDM0IsSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBRyxJQUFJO2NBRXBCLElBQUk7Z0JBQ0gsTUFBTW5ULElBQUksR0FBRztrQkFDWixHQUFHLElBQUksQ0FBQ0ksYUFBYSxFQUFFO2tCQUN2QixHQUFHMFQsS0FBSztrQkFDUjdDLEtBQUssRUFBRTZDLEtBQUssQ0FBQzdDLEtBQUssSUFBSSxJQUFJLENBQUNBLEtBQUs7a0JBQ2hDZ0IsVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVSxDQUFDbFMsUUFBUSxFQUFFO2tCQUN0Q2dCLElBQUksRUFBRTtpQkFDTjtnQkFFRCxJQUFJLENBQUNNLEdBQUcsQ0FBQztrQkFBRSxHQUFHckI7Z0JBQUksQ0FBRSxDQUFDO2dCQUNyQixNQUFNLEtBQUssQ0FBQ29TLE9BQU8sRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBRyxJQUFJO2VBQ2xCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFzQixPQUFRLEdBQUcsS0FBSztnQkFDckI7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQUQsT0FBUSxFQUFFLElBQUksQ0FBQyxDQUFBUSxZQUFhLEVBQUU7O1lBRXpDO1lBRUE7Ozs7O1lBS0EsTUFBTXRCLG1CQUFtQkEsQ0FBQ2pULE1BQU07Y0FDL0IsSUFBSTtnQkFDSCxJQUFJLENBQUNrVCxhQUFhLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxDQUFDalIsR0FBRyxDQUFDakMsTUFBTSxDQUFDO2dCQUNoQixNQUFNLElBQUksQ0FBQzZDLFNBQVMsRUFBRTtnQkFDdEIsTUFBTWpDLElBQUksR0FBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQXVTLGNBQWUsQ0FBQztrQkFDNURwUixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYNEIsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztrQkFDekJoQyxJQUFJLEVBQUUsUUFBUTtrQkFDZHlSLFlBQVksRUFBRXBULE1BQU0sQ0FBQ3NGLEtBQUs7a0JBQzFCQSxLQUFLLEVBQUV0RixNQUFNLENBQUNzRixLQUFLO2tCQUNuQnFQLGVBQWUsRUFBRTNVLE1BQU0sQ0FBQzJVO2tCQUN4QjtpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQy9ULElBQUksQ0FBQzRDLEtBQUssRUFBRTtrQkFDaEI1QixPQUFPLENBQUNDLElBQUksQ0FBQywwQ0FBMEMsRUFBRWpCLElBQUksQ0FBQzs7Z0JBRy9ENFQsVUFBVSxDQUFDLFlBQVc7a0JBQ3JCLE1BQU0sSUFBSSxDQUFDM1IsU0FBUyxDQUFDO29CQUFFLEdBQUdqQyxJQUFJO29CQUFFTyxLQUFLLEVBQUU7a0JBQVcsQ0FBRSxDQUFDO2tCQUNyRCxJQUFJLENBQUMrUixhQUFhLEdBQUcsS0FBSztrQkFDMUIsSUFBSSxDQUFDOU4sWUFBWSxDQUFDLHNCQUFzQixDQUFDO2dCQUMxQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLE9BQU94RSxJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSU0sS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDK00sYUFBYSxHQUFHLEtBQUs7O1lBRTVCO1lBRUEsTUFBTSxDQUFBQyxjQUFlRSxDQUFDOVAsS0FBSztjQUMxQixNQUFNM0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEwSixXQUFZLENBQUNqRixRQUFRLENBQUM5QixLQUFLLENBQUM7Y0FDcEQsTUFBTSxJQUFJLENBQUN0QixHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDcEIsSUFBSSxDQUFDUyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsT0FBT1QsSUFBSTtZQUNaO1lBRUEsTUFBTTRKLElBQUlBLENBQUE7Y0FDVCxNQUFNNUosSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNkQsUUFBUSxDQUFDK0YsSUFBSSxFQUFFO2NBRXZDLElBQUksQ0FBQ3ZJLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztjQUNkLElBQUksQ0FBQ2lTLFVBQVUsQ0FBQ3RSLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDaVMsVUFBVSxDQUFDO2NBQ3pDLE9BQU9qUyxJQUFJO1lBQ1o7WUFFQWdVLFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsTUFBTXJTLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQ21RLFlBQVksRUFBRTtjQUVuRCxNQUFNLElBQUksQ0FBQzNTLEdBQUcsQ0FBQ00sUUFBUSxDQUFDO2NBQ3hCLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7Y0FDckMsT0FBT2tCLFFBQVE7WUFDaEIsQ0FBQztZQUVEOzs7O1lBSUEsTUFBTXNTLHdCQUF3QkEsQ0FBQztjQUFFbFIsU0FBUztjQUFFZ1I7WUFBZSxDQUFFO2NBQzVELElBQUk7Z0JBQ0gsSUFBSSxDQUFDblAsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU01RSxJQUFJLEdBQXNCLE1BQU0sSUFBSSxDQUFDLENBQUF1UyxjQUFlLENBQUM7a0JBQzFEeFIsSUFBSSxFQUFFLFdBQVc7a0JBQ2pCSSxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYNEI7aUJBQytCLENBQUM7Z0JBRWpDLElBQUksQ0FBQ2dDLFVBQVUsQ0FBQy9FLElBQUksQ0FBQ2dGLE9BQU8sQ0FBQztnQkFDN0I7OztnQkFHQSxPQUFPaEYsSUFBSTtnQkFDWDtlQUNBLENBQUMsT0FBT2lGLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlNLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQ1gsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUFHLFVBQVVBLENBQUMvRSxJQUFhO2NBQ3ZCLElBQUksQ0FBQ2dGLE9BQU8sQ0FBQzNELEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztjQUN0QixJQUFJLENBQUNTLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQjtZQUNBOzs7Ozs7O1lBT0EsTUFBTXlULGlCQUFpQkEsQ0FBQztjQUFFblIsU0FBUztjQUFFb1I7WUFBWSxDQUFFO2NBQ2xELElBQUk7Z0JBQ0gsSUFBSSxDQUFDdlAsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU01RSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXVTLGNBQWUsQ0FBQztrQkFDdkN4UixJQUFJLEVBQUUsdUJBQXVCO2tCQUM3Qm9ULFlBQVk7a0JBQ1poVCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYNEI7aUJBQ0EsQ0FBQztnQkFFRixPQUFPL0MsSUFBSTtlQUNYLENBQUMsT0FBT2lGLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlNLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQ1gsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUFPLGVBQWUsR0FBRyxNQUFBQSxDQUFPQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2NBQUVDLE1BQU0sR0FBRyxFQUFFO2NBQUVDLEtBQUssR0FBRztZQUFFLENBQUUsS0FBSTtjQUNwRSxJQUFJLENBQUNGLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsTUFBTUUsSUFBSSxHQUFHLEdBQUdKLE1BQU0sSUFBSUQsTUFBTSxJQUFJRSxLQUFLLEVBQUU7Y0FDM0MsTUFBTTNELFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQ3NCLGVBQWUsQ0FBQztnQkFDcERNO2VBQ0EsQ0FBQztjQUVGLElBQUksQ0FBQ3BFLEdBQUcsQ0FBQ00sUUFBUSxDQUFDO2NBQ2xCLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QixJQUFJLENBQUNpRixPQUFPLEdBQUcsR0FBRy9ELFFBQVEsQ0FBQytELE9BQU8sSUFBSTBPLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLEVBQUU7Y0FDekQsSUFBSSxDQUFDNVQsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2NBRS9CLE9BQU8sSUFBSSxDQUFDaUYsT0FBTztZQUNwQixDQUFDOztVQUNEVyxPQUFBLENBQUE2TSxLQUFBLEdBQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM09LLE1BQU9vQixXQUFZLFNBQVEvTyxLQUFLO1lBQ3JDMEUsT0FBTztZQUNQRCxJQUFJO1lBQ0pySyxZQUFZc0ssT0FBTyxFQUFFRCxJQUFJO2NBQ3hCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztjQUNoQixJQUFJLENBQUN0RyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7Y0FDM0IsSUFBSSxDQUFDcUcsSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQztZQUNuQjs7VUFDQTNELE9BQUEsQ0FBQWlPLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBQyxNQUFBLEdBQUEzVixPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBILFdBQUEsR0FBQTFILE9BQUE7VUFFQSxJQUFBbVMsVUFBQSxHQUFBblMsT0FBQTtVQUtPLFlBRlA7VUFFa0IsTUFBTytTLGNBQWUsU0FBUTlTLEtBQUEsQ0FBQTZELElBQXlDO1lBQ3hGLENBQUFnSCxXQUFZO1lBQ1osQ0FBQW9JLEtBQU07WUEyQkUsT0FBT0MsU0FBUyxHQUFHLElBQUk3UyxHQUFHLEVBQUU7WUFFcEMsSUFBSW1CLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNjLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDeUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDRSxTQUFTO1lBQzNFO1lBRUE7Ozs7OztZQU1BcEQsWUFBWTtjQUFFd0IsRUFBRSxHQUFHNEcsU0FBUztjQUFFOUQsVUFBVSxHQUFHLEVBQUU7Y0FBRWxELElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2xCO1lBQUksQ0FBRTtjQUN4RSxLQUFLLENBQUM7Z0JBQ0xzQixFQUFFO2dCQUNGeUMsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEJDLFFBQVEsRUFBRWtOLFVBQUEsQ0FBQUksY0FBYztnQkFDeEIsR0FBR3RSLElBQUk7Z0JBQ1BvRSxVQUFVLEVBQUUsQ0FDWCxHQUFHQSxVQUFVLEVBQ2IsSUFBSSxFQUNKLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNKLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFlBQVksRUFDWixRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsWUFBWSxFQUNaO2tCQUNDTixJQUFJLEVBQUUsYUFBYTtrQkFDbkJPLEtBQUssRUFBRW9DLFdBQUEsQ0FBQWdLO2lCQUNQLEVBQ0QsUUFBUTtnQkFDUjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQSxVQUFVO2VBRVgsQ0FBQyxDQUFDLENBQUM7Y0FFSixJQUFJLENBQUN2UCxJQUFJLEdBQUdBLElBQUk7WUFDakI7WUFFQSxhQUFhSyxHQUFHQSxDQUFDdUIsS0FBSztjQUNyQixJQUFJQSxLQUFLLEVBQUV4QixFQUFFLElBQUksSUFBSSxDQUFDNFEsU0FBUyxDQUFDN1EsR0FBRyxDQUFDeUIsS0FBSyxDQUFDeEIsRUFBRSxDQUFDLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDNFEsU0FBUyxDQUFDM1EsR0FBRyxDQUFDdUIsS0FBSyxDQUFDeEIsRUFBRSxDQUFDOztjQUdwQyxNQUFNdVIsTUFBTSxHQUFHLElBQUlmLGNBQWMsQ0FBQ2hQLEtBQUssQ0FBQztjQUN4QyxJQUFJQSxLQUFLLENBQUN4QixFQUFFLEVBQUU7Z0JBQ2IsTUFBTXVSLE1BQU0sQ0FBQzlJLElBQUksRUFBRTs7Y0FHcEIsSUFBSWpILEtBQUssQ0FBQ3hCLEVBQUUsRUFBRSxJQUFJLENBQUM0USxTQUFTLENBQUMxUSxHQUFHLENBQUNzQixLQUFLLENBQUN4QixFQUFFLEVBQUV1UixNQUFNLENBQUM7Y0FDbEQsT0FBT0EsTUFBTTtZQUNkO1lBRUE4QixLQUFLQSxDQUFDM1UsSUFBSTtjQUNULE9BQU8sSUFBSSxDQUFDZ0UsUUFBUSxDQUFDMlEsS0FBSyxDQUFDM1UsSUFBSSxDQUFDO1lBQ2pDO1lBRUEsTUFBTTRVLFVBQVVBLENBQUE7Y0FDZixNQUFNOVMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDa0MsUUFBUSxDQUFDNFEsVUFBVSxFQUFFO2NBQ2pELElBQUksQ0FBQzlTLFFBQVEsQ0FBQzBILE1BQU0sRUFBRSxNQUFNLElBQUlrTCxNQUFBLENBQUFELFdBQVcsQ0FBQzNTLFFBQVEsQ0FBQ2lHLEtBQUssQ0FBQ25DLElBQUksRUFBRTlELFFBQVEsQ0FBQ2lHLEtBQUssQ0FBQ29DLElBQUksQ0FBQztjQUNyRixPQUFPckksUUFBUTtZQUNoQjtZQUVBK1MsT0FBT0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDN1EsUUFBUSxDQUFDNlEsT0FBTyxFQUFFO1lBQy9CO1lBRUFDLE9BQU9BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQzlRLFFBQVEsQ0FBQzhRLE9BQU8sRUFBRTtZQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlIRCxJQUFBOVYsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW1TLFVBQUEsR0FBQW5TLE9BQUE7VUFLTyxZQURQO1VBQ2tCLE1BQU9nVyxjQUFlLFNBQVEvVixLQUFBLENBQUE2RCxJQUFxQztZQUdwRnVPLEtBQUs7WUFDTGxQLFFBQVE7WUFDUmEsS0FBSztZQUNMQyxXQUFXO1lBQ1hFLFNBQVM7WUFDVDJDLE9BQU87WUFDUHdMLFFBQVE7WUFDUmUsVUFBVTtZQUtWdFMsWUFBWTtjQUFFd0IsRUFBRSxHQUFHNEcsU0FBUztjQUFFOUQsVUFBVSxHQUFHLEVBQUU7Y0FBRWxELElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2xCO1lBQUksQ0FBRSxHQUFHLEVBQUU7Y0FDN0UsS0FBSyxDQUFDO2dCQUNMc0IsRUFBRTtnQkFDRnlDLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCQyxRQUFRLEVBQUVrTixVQUFBLENBQUFJLGNBQWM7Z0JBQ3hCLEdBQUd0UixJQUFJO2dCQUNQb0UsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxPQUFPLEVBQ1AsVUFBVSxFQUNWLE9BQU8sRUFDUCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWTtlQUViLENBQUM7WUFDSDs7VUFDQW9DLE9BQUEsQ0FBQXVPLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0QsSUFBQWxNLFFBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBNkosSUFBQSxHQUFBN0osT0FBQTtVQUVBLElBQUE4SCxRQUFBLEdBQUE5SCxPQUFBO1VBMEJNLE1BQU91UyxjQUFjO1lBQzFCLENBQUF4SSxHQUFJO1lBQ0osQ0FBQS9JLE1BQU87WUFFUEQsWUFBWUMsTUFBc0I7Y0FDakMsSUFBSSxDQUFDLENBQUErSSxHQUFJLEdBQUcsSUFBSUYsSUFBQSxDQUFBSSxHQUFHLENBQUNuQyxRQUFBLENBQUFFLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFsSCxNQUFPLEdBQUdBLE1BQU07WUFDdEIsQ0FBQyxDQUFDO1lBRUZnSyxJQUFJLEdBQUcsTUFBT2pILEtBQVcsSUFBSTtjQUM1QixNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkIsTUFBTThMLFNBQVMsR0FBRztnQkFDakJDLFNBQVMsRUFBRSxzQkFBc0IsSUFBSSxDQUFDLENBQUFsVixNQUFPLENBQUN1QixFQUFFLEVBQUU7Z0JBQ2xEdVIsTUFBTSxFQUFFLFlBQVksSUFBSSxDQUFDLENBQUE5UyxNQUFPLENBQUN1QixFQUFFLEVBQUU7Z0JBQ3JDNEYsS0FBSyxFQUFFLG1CQUFtQixJQUFJLENBQUMsQ0FBQW5ILE1BQU8sQ0FBQ3VCLEVBQUU7ZUFDekM7Y0FFRCxNQUFNSixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFuQixNQUFPLENBQUNtQixJQUFJLElBQUksUUFBUTtjQUMxQyxNQUFNO2dCQUFFc0ksTUFBTTtnQkFBRXJKO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEySSxHQUFJLENBQUN2SCxHQUFHLENBQUN5VCxTQUFTLENBQUM5VCxJQUFJLENBQUMsQ0FBQztjQUU3RCxJQUFJLENBQUNzSSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJOUQsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUd4QyxPQUFPdkYsSUFBSTtZQUNaLENBQUM7WUFFRCtVLElBQUksR0FBRyxNQUFNcFMsS0FBSyxJQUFHO2NBQ3BCLE1BQU1vRyxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNO2dCQUFFTSxNQUFNO2dCQUFFcko7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTJJLEdBQUksQ0FBQ3ZILEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF4QixNQUFPLENBQUN1QixFQUFFLEVBQUUsQ0FBQztjQUNsRixJQUFJLENBQUNrSSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJOUQsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUV4QyxPQUFPdkYsSUFBSTtZQUNaLENBQUM7WUFFRCxNQUFNZ1YsUUFBUUEsQ0FBQzdULEVBQUU7Y0FDaEIsTUFBTTRILEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUVNLE1BQU07Z0JBQUVySjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMkksR0FBSSxDQUFDdkgsR0FBRyxDQUFDLG1CQUFtQkQsRUFBRSxFQUFFLENBQUM7Y0FDckUsSUFBSSxDQUFDa0ksTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSTlELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FFOUMsT0FBT3ZGLElBQUk7WUFDWjtZQUVBLE1BQU1vQyxNQUFNQSxDQUFBO2NBQ1gsTUFBTTJHLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU0vSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTJJLEdBQUksQ0FBQ3ZHLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF4QyxNQUFPLENBQUN1QixFQUFFLEVBQUUsQ0FBQztjQUV6RSxPQUFPbkIsSUFBSTtZQUNaO1lBRUEsTUFBTXlVLFVBQVVBLENBQUE7Y0FDZixNQUFNMUwsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTS9JLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMkksR0FBSSxDQUFDdkcsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUF4QyxNQUFPLENBQUN1QixFQUFFLEVBQUUsQ0FBQztjQUVsRSxPQUFPbkIsSUFBSTtZQUNaO1lBRUEsTUFBTW9TLE9BQU9BLENBQUN6UCxLQUFBLEdBQXVDLEVBQUU7Y0FDdEQsSUFBSSxJQUFJLENBQUMsQ0FBQS9DLE1BQU8sQ0FBQ21CLElBQUksS0FBSyxPQUFPLEVBQUUsT0FBTyxJQUFJLENBQUNrQixTQUFTLENBQUNVLEtBQUssQ0FBQztjQUMvRCxNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDUyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBeEosTUFBTyxDQUFDdUIsRUFBRSxVQUFVLEVBQUV3QixLQUFLLENBQUM7WUFDM0U7WUFFQSxNQUFNVixTQUFTQSxDQUFDVSxLQUFLO2NBQ3BCLE1BQU1vRyxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNcEgsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFnSCxHQUFJLENBQUNTLElBQUksQ0FBQyxpQkFBaUIsRUFBRXpHLEtBQUssQ0FBQztjQUMvRCxJQUFJLENBQUNoQixRQUFRLENBQUMwSCxNQUFNLEVBQUU7Z0JBQ3JCO2NBQUE7Y0FFRCxPQUFPMUgsUUFBUTtZQUNoQjtZQUVBLE1BQU1xUyxZQUFZQSxDQUFBO2NBQ2pCLE1BQU1qTCxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QjtjQUNBLE1BQU1wSCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWdILEdBQUksQ0FBQ1MsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQXhKLE1BQU8sQ0FBQ3VCLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO2NBQzdGLElBQUksQ0FBQ1EsUUFBUSxDQUFDMEgsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUk5RCxLQUFLLENBQUMsdUJBQXVCLENBQUM7O2NBRXpDLE9BQU81RCxRQUFRLENBQUMzQixJQUFJO1lBQ3JCO1lBRUEsTUFBTXdVLEtBQUtBLENBQUM7Y0FBRWpMLFFBQVE7Y0FBRTBMLE9BQU87Y0FBRXJSLE1BQU07Y0FBRTdDO1lBQUksQ0FBRTtjQUM5QyxNQUFNZ0ksS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTThMLFNBQVMsR0FBRztnQkFDakJDLFNBQVMsRUFBRSxzQkFBc0J2TCxRQUFRLFFBQVE7Z0JBQ2pEbUosTUFBTSxFQUFFLFlBQVluSixRQUFRO2VBQzVCO2NBQ0QsTUFBTU0sUUFBUSxHQUFHZ0wsU0FBUyxDQUFDOVQsSUFBSSxDQUFDLElBQUk4VCxTQUFTLENBQUNuQyxNQUFNO2NBRXBELElBQUloSyxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDOUgsRUFBRSxLQUFLOFQsT0FBTyxJQUFJclIsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDNUQsT0FBTyxJQUFJLENBQUMsQ0FBQStFLEdBQUksQ0FBQ1MsSUFBSSxDQUFDUyxRQUFRLEVBQUUsRUFBRSxDQUFDOztjQUVwQyxPQUFPLElBQUksQ0FBQyxDQUFBbEIsR0FBSSxDQUFDUyxJQUFJLENBQUNTLFFBQVEsRUFBRTtnQkFBRXFMLGNBQWMsRUFBRUQsT0FBTztnQkFBRXJSO2NBQU0sQ0FBRSxDQUFDO1lBQ3JFO1lBRUE7Ozs7Ozs7O1lBUUEsTUFBTXVCLGVBQWVBLENBQUN4QyxLQUE0QjtjQUNqRCxNQUFNO2dCQUFFOEM7Y0FBSSxDQUFFLEdBQUc5QyxLQUFLO2NBRXRCLE1BQU1vRyxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNYyxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsQ0FBQWpLLE1BQU8sQ0FBQ3VCLEVBQUUsVUFBVTtjQUNyRCxNQUFNUSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWdILEdBQUksQ0FBQ1MsSUFBSSxDQUFDUyxRQUFRLEVBQUU7Z0JBQUVwRTtjQUFJLENBQUUsQ0FBQztjQUV6RCxJQUFJLENBQUM5RCxRQUFRLENBQUMwSCxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSTlELEtBQUssQ0FBQzVELFFBQVEsQ0FBQ2lHLEtBQUssQ0FBQzs7Y0FHaEMsT0FBTztnQkFDTmxDLE9BQU8sRUFBRS9ELFFBQVEsQ0FBQzNCLElBQUksQ0FBQzBGLE9BQU87Z0JBQzlCVixPQUFPLEVBQUVyRCxRQUFRLENBQUMzQixJQUFJLENBQUNnRjtlQUN2QjtZQUNGO1lBRUFxTSxXQUFXLEdBQUcsTUFBTXRQLFFBQVEsSUFBRztjQUM5QixNQUFNZ0gsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTTtnQkFBRU0sTUFBTTtnQkFBRXJKO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEySSxHQUFJLENBQUN2SCxHQUFHLENBQUMsZ0NBQWdDLEVBQUU7Z0JBQUVXO2NBQVEsQ0FBRSxDQUFDO2NBQzVGLElBQUksQ0FBQ3NILE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUk5RCxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRTFDLE9BQU92RixJQUFJO1lBQ1osQ0FBQztZQUVEbVYsWUFBWSxHQUFHLE1BQUFBLENBQU9yTSxPQUFPLEVBQUVqRSxVQUFVLEtBQUk7Y0FDNUMsTUFBTWtFLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUVNLE1BQU07Z0JBQUVySjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMkksR0FBSSxDQUFDUyxJQUFJLENBQzVDLG1CQUFtQk4sT0FBTyxlQUFlakUsVUFBVSxVQUFVLEVBQzdELEVBQUUsQ0FDRjtjQUNELE9BQU83RSxJQUFJO1lBQ1osQ0FBQztZQUVEb1Ysa0JBQWtCLEdBQUcsTUFBQUEsQ0FBT3RNLE9BQU8sRUFBRWpFLFVBQVUsS0FBSTtjQUNsRCxNQUFNa0UsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTTtnQkFBRU0sTUFBTTtnQkFBRXJKO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEySSxHQUFJLENBQUN2SCxHQUFHLENBQUMsbUJBQW1CMEgsT0FBTyxlQUFlakUsVUFBVSxVQUFVLENBQUM7Y0FDM0csT0FBTzdFLElBQUk7WUFDWixDQUFDO1lBRUQsTUFBTTJVLE9BQU9BLENBQUE7Y0FDWixNQUFNNUwsS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTXBILFFBQVEsR0FBYyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUMsWUFBYSxJQUFJLENBQUMsQ0FBQXhKLE1BQTBCLENBQUN1QixFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7Y0FDL0csSUFBSSxDQUFDUSxRQUFRLENBQUMwSCxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSTlELEtBQUssQ0FBQzVELFFBQVEsQ0FBQ2lHLEtBQUssQ0FBQ25DLElBQUksQ0FBQzs7Y0FHckMsT0FBTzlELFFBQVE7WUFDaEI7WUFDQSxNQUFNK1MsT0FBT0EsQ0FBQTtjQUNaLE1BQU0zTCxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNcEgsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUFnSCxHQUFJLENBQUNTLElBQUksQ0FBQyxZQUFhLElBQUksQ0FBQyxDQUFBeEosTUFBMEIsQ0FBQ3VCLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQztjQUMvRyxJQUFJLENBQUNRLFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJOUQsS0FBSyxDQUFDNUQsUUFBUSxDQUFDaUcsS0FBSyxDQUFDbkMsSUFBSSxDQUFDOztjQUdyQyxPQUFPOUQsUUFBUTtZQUNoQjs7VUFDQTBFLE9BQUEsQ0FBQThLLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzTkQsSUFBQXpJLFFBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBNkosSUFBQSxHQUFBN0osT0FBQTtVQUNBLElBQUE4SCxRQUFBLEdBQUE5SCxPQUFBO1VBZ0JNLE1BQU84UyxzQkFBc0I7WUFDbEMsQ0FBQS9JLEdBQUk7WUFDSixDQUFBL0ksTUFBTztZQUVQRCxZQUFZQyxNQUF3QztjQUNuRCxJQUFJLENBQUMsQ0FBQStJLEdBQUksR0FBRyxJQUFJRixJQUFBLENBQUFJLEdBQUcsQ0FBQ25DLFFBQUEsQ0FBQUUsU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWxILE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBbVYsSUFBSSxHQUFHLE1BQU1wUyxLQUFLLElBQUc7Y0FDcEIsTUFBTW9HLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLElBQUssSUFBSSxDQUFDLENBQUFuSixNQUEyQixDQUFDNlIsUUFBUSxFQUFFO2dCQUMvQyxNQUFNO2tCQUFFelI7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEySSxHQUFJLENBQUN2SCxHQUFHLENBQUMsbUJBQW1CLEVBQUV1QixLQUFLLENBQUM7Z0JBQ2hFLE9BQU8zQyxJQUFJLEVBQUViLEtBQUssSUFBSSxFQUFFOztjQUV6QixJQUFJd0QsS0FBSyxFQUFFMFMsS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDakMsT0FBTzFTLEtBQUssQ0FBQzBTLEtBQUs7Z0JBQ2xCLE1BQU07a0JBQUVyVjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTJJLEdBQUksQ0FBQ3ZILEdBQUcsQ0FBQyxvQkFBb0IsRUFBRXVCLEtBQUssQ0FBQztnQkFDakUsT0FBTzNDLElBQUksRUFBRWIsS0FBSyxJQUFJLEVBQUU7O2NBRXpCLE1BQU07Z0JBQUVrSyxNQUFNO2dCQUFFcko7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTJJLEdBQUksQ0FBQ3ZILEdBQUcsQ0FBQyxXQUFXdUIsS0FBSyxDQUFDMFMsS0FBSyxFQUFFLENBQUM7Y0FFdEUsT0FBT3JWLElBQUksRUFBRWIsS0FBSyxJQUFJLEVBQUU7WUFDekIsQ0FBQztZQUVELE1BQU1tVyxXQUFXQSxDQUFDblUsRUFBRTtjQUNuQixJQUFJO2dCQUNILE1BQU00SCxLQUFLLEdBQUcsTUFBTUwsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztnQkFDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBRXZCLE1BQU07a0JBQUVNLE1BQU07a0JBQUVySjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTJJLEdBQUksQ0FBQ3ZHLE1BQU0sQ0FBQyxtQkFBbUJqQixFQUFFLEVBQUUsQ0FBQztnQkFFeEUsSUFBSSxDQUFDa0ksTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSTlELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7Z0JBR3pDLE9BQU92RixJQUFJO2VBQ1gsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYakUsT0FBTyxDQUFDNEcsS0FBSyxDQUFDM0MsQ0FBQyxDQUFDOztZQUVsQjtZQUVBb00sV0FBVyxHQUFHLE1BQU10UCxRQUFRLElBQUc7Y0FDOUIsTUFBTWdILEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBSixHQUFJLENBQUNPLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUVNLE1BQU07Z0JBQUVySjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMkksR0FBSSxDQUFDdkgsR0FBRyxDQUFDLGdDQUFnQyxFQUFFO2dCQUFFVztjQUFRLENBQUUsQ0FBQztjQUM1RixJQUFJLENBQUNzSCxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJOUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUUxQyxPQUFPdkYsSUFBSTtZQUNaLENBQUM7O1VBQ0RxRyxPQUFBLENBQUFxTCxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUQsSUFBQS9TLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2SixJQUFBLEdBQUE3SixPQUFBO1VBRUEsSUFBQThKLFFBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBOEgsUUFBQSxHQUFBOUgsT0FBQTtVQUtNLE1BQU8rSyxXQUFZLFNBQVFoTCxNQUFBLENBQUFJLGFBQTJCO1lBRzNELENBQUE0SixHQUFJO1lBQ0poSixZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDNFYsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBNU0sR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUksR0FBRyxDQUFDbkMsUUFBQSxDQUFBRSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQzVDO1lBRUEsTUFBTXJDLFFBQVFBLENBQUM5QixLQUFVO2NBQ3hCLElBQUk7Z0JBQ0gsTUFBTW9HLEtBQUssR0FBRyxNQUFNTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2dCQUM3QyxJQUFJLENBQUMsQ0FBQUosR0FBSSxDQUFDTyxNQUFNLENBQUNILEtBQUssQ0FBQztnQkFDdkIsTUFBTXBILFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUMsY0FBYyxFQUFFO2tCQUFFLEdBQUd6RztnQkFBSyxDQUFFLENBQUM7Z0JBRW5FLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQzBILE1BQU0sRUFBRTtrQkFDckIsSUFBSTtvQkFDSHpCLEtBQUssRUFBRTtzQkFBRW5DLElBQUksRUFBRStQO29CQUFTLENBQUU7b0JBQzFCNU47a0JBQUssQ0FDTCxHQUFHakcsUUFBUTtrQkFFWixJQUFJNlQsU0FBUyxDQUFDMVUsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7b0JBQy9DLE9BQU87c0JBQUU4RyxLQUFLLEVBQUU7b0JBQXFCLENBQUU7O2tCQUV4QyxJQUFJNE4sU0FBUyxDQUFDMVUsUUFBUSxDQUFDLDZFQUE2RSxDQUFDLEVBQUU7b0JBQ3RHLE9BQU87c0JBQUU4RyxLQUFLLEVBQUUsbUJBQW1CO3NCQUFFNEMsTUFBTSxFQUFFNUMsS0FBSyxDQUFDNk4sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQUMsQ0FBRTs7a0JBR25FLE9BQU87b0JBQUU3TjtrQkFBSyxDQUFFOztnQkFFakIsT0FBT2pHLFFBQVEsQ0FBQzNCLElBQUk7ZUFDcEIsQ0FBQyxPQUFPaUYsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSU0sS0FBSyxDQUFDTixDQUFDLENBQUNnRixPQUFPLENBQUM7O1lBRTVCO1lBRUEsTUFBTXlMLEtBQUtBLENBQUMvUyxLQUF1RDtjQUNsRSxNQUFNb0csS0FBSyxHQUFHLE1BQU1MLFFBQUEsQ0FBQU0sY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFKLEdBQUksQ0FBQ08sTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkIsTUFBTXBILFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0gsR0FBSSxDQUFDUyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQUVySCxRQUFRLEVBQUUsSUFBSTtnQkFBRSxHQUFHWTtjQUFLLENBQUUsQ0FBQztjQUN2RixJQUFJLENBQUNoQixRQUFRLENBQUMwSCxNQUFNLEVBQUUsTUFBTSxJQUFJOUQsS0FBSyxDQUFDNUQsUUFBUSxDQUFDaUcsS0FBSyxDQUFDb0MsSUFBSSxDQUFDO2NBQzFEOzs7O2NBSUEsT0FBT3JJLFFBQVEsQ0FBQzNCLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEI7O1VBQ0FxRyxPQUFBLENBQUFzRCxXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNNO1VBQVAsSUFBdUJrRyxZQVV0QjtVQVZELFdBQXVCQSxZQUFZO1lBQ2xDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSxzQ0FBa0M7WUFDbENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsdUJBQW1CO1lBQ25CQSxZQUFBLHlCQUFxQjtZQUNyQkEsWUFBQSwwQ0FBc0M7WUFDdENBLFlBQUEsZ0NBQTRCO1VBQzdCLENBQUMsRUFWc0JBLFlBQVksS0FBQXhKLE9BQUEsQ0FBQXdKLFlBQUEsR0FBWkEsWUFBWTs7Ozs7Ozs7Ozs7VUNmbkM7O1VBRUF0RixNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFxRyxNQUFBLENBQUEwSSxjQUFBLENBQUE1TSxPQUFBO1lBQ0FuQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSk87VUFBUCxJQUF1QjJMLFlBUXRCO1VBUkQsV0FBdUJBLFlBQVk7WUFDbENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHNDQUFrQztZQUNsQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSx1QkFBbUI7WUFDbkJBLFlBQUEsbUJBQWU7VUFDaEIsQ0FBQyxFQVJzQkEsWUFBWSxLQUFBeEosT0FBQSxDQUFBd0osWUFBQSxHQUFaQSxZQUFZOzs7Ozs7Ozs7OztVQ0FuQzs7VUFFQXRGLE1BQUEsQ0FBQTBJLGNBQUEsQ0FBQTVNLE9BQUE7WUFDQW5DLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==