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
        hash: 1240564257,
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
              this.#learningModule.saveDraft();
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