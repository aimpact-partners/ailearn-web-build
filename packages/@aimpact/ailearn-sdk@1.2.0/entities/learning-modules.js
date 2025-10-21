System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "zod@3.25.67", "@aimpact/ailearn-sdk@1.2.0/config"], function (_export, _context) {
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
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_1 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_3 = _beyondJsReactive211EntitiesCollection;
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
        hash: 4062769013,
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
            async generatePicture(prompt = '') {
              if (!prompt) {
                throw new Error('Prompt is required to generate a picture for the activity.');
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
              const formattedPrompt = `${format.prefix} ${prompt} ${format.sufix}`;
              const response = await this.provider.generatePicture(this.#learningModule.id, this.id, {
                prompt: formattedPrompt,
                size: '1792x1024',
                format: 'url'
              });
              this.#learningModule.set({
                credits: response.credits
              });
              this.#learningModule.trigger('credits.change');
              this.picture = response.picture;
              this.triggerEvent('image.generated');
              return this.picture;
            }
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
        hash: 1485526143,
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
            async generatePicture(moduleId, activityId, specs) {
              const {
                prompt,
                size = '1792x1024',
                format = 'url'
              } = specs;
              const {
                url
              } = await this.#suggestions.image({
                prompt,
                size,
                format
              });
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const endpoint = `/modules/drafts/${moduleId}/activities/${activityId}/image`;
              const response = await this.#api.post(endpoint, {
                url
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
        hash: 773585045,
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
              return {
                ...this.#credits.getProperties(),
                available: this.#credits.available
              };
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
        hash: 4277097651,
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
              return this.total - this.consumed || 0;
            }
            constructor(args = {}) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 2037358772,
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
        hash: 1041458194,
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
            async saveDraft(specs = {
              owner: undefined,
              credits: undefined
            }) {
              let {
                owner
              } = specs;
              const data = {
                ...this.getProperties(),
                ...specs,
                owner: owner ? owner?.isReactive ? owner.getProperties() : owner : this.owner,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.set({
                ...data
              });
              // const response = this.getProperties();
              const response = await super.publish();
              this.#saved = true;
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
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
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
                const saveResponse = await this.provider.savePicture(response.url);
                this.set(saveResponse.data);
                // await this.#credits.set(saveResponse.data.credits);
                this.trigger('credits.change');
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
            }
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
        hash: 3086171028,
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
              return this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
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
            async savePicture(url) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/image`, {
                url
              });
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl9wcm92aWRlciIsIkl0ZW0iLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsImZvcm1hdHRlZFByb21wdCIsInNpemUiLCJwaWN0dXJlIiwiZ2VuZXJhdGVJbWFnZSIsInRleHQiLCJmaWxlcyIsInVybHMiLCJhc3NldCIsImFkZEFzc2V0IiwidXBsb2FkSW1hZ2UiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwicHJvcGVydHkiLCJleHBvcnRzIiwiX2NvbGxlY3Rpb24iLCJBc3NldHMiLCJDb2xsZWN0aW9uIiwiQXNzZXQiLCJfc3RhcnR1cCIsInNyYyIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwiZHJhZnQiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsIkFjdGl2aXR5TWF0ZXJpYWxzUHJvdmlkZXIiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBcnRpY2xlIiwiZXJyb3IiLCJnZW5lcmF0ZU1hdGVyaWFsIiwiZ2VuZXJhdGVBdWRpbyIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsImFzc2V0cyIsImFkZEl0ZW1zIiwicmVtb3ZlQXNzZXQiLCJkZWxldGVBc3NldCIsIl9hcGkiLCJfc2Vzc2lvbiIsImFwaSIsIm1vZGVsIiwiQXBpIiwiZHJhZnRJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwidXJsIiwicG9zdCIsInN0YXR1cyIsIm1hdGVyaWFsTmFtZSIsIm1vZHVsZUlkIiwiYXNzZXRJZCIsIl9zdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnMiLCJsb2FkIiwiaW1hZ2UiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiZmlsZSIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImVudHJpZXMiLCJPYmplY3QiLCJmaWVsZHMiLCJrZXkiLCJvcHRpb25hbCIsImlzQXJyYXlWYWxpZCIsImFycmF5Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJjb25maWciLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl92YWxpZGF0ZURhdGEiLCJzdHJ1Y3R1cmVOYW1lIiwiZWxlbWVudCIsImdyb3VwZWQiLCJmaWVsZFN0cnVjdHVyZSIsInNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwidGFzayIsInJlcXVpcmVkIiwicm9sZSIsImxhYmVsIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJFeGVyY2lzZUFjdGl2aXR5U3BlY3MiLCJleGVyY2lzZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInJlcXVlc3RlZFRhc2siLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0U3VnZ2VzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVJlc3BvbnNlIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9hc3NldHMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9hc3NldHMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZXhlcmNpc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZnJlZS1jb252ZXJzYXRpb24udHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIiwiL2xpc3QudHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL3R5cGVzL2FjdGl2aXRpZXMudHMiLCIvb3duZXIudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyIsIi90aW1lU3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxPQUFPQyxZQUFZLEdBQUcsSUFBSTtZQUUxQixDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWIsY0FBZSxHQUFHWSxNQUFNO1lBQzlCO1lBRUFFLFNBQVNBLENBQUNGLE1BQU07Y0FDZixJQUFJLENB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