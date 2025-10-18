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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl9wcm92aWRlciIsIkl0ZW0iLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsImZvcm1hdHRlZFByb21wdCIsInNpemUiLCJwaWN0dXJlIiwiZ2VuZXJhdGVJbWFnZSIsInRleHQiLCJmaWxlcyIsInVybHMiLCJhc3NldCIsImFkZEFzc2V0IiwidXBsb2FkSW1hZ2UiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwicHJvcGVydHkiLCJleHBvcnRzIiwiX2NvbGxlY3Rpb24iLCJBc3NldHMiLCJDb2xsZWN0aW9uIiwiQXNzZXQiLCJfc3RhcnR1cCIsInNyYyIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwiZHJhZnQiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsIkFjdGl2aXR5TWF0ZXJpYWxzUHJvdmlkZXIiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBcnRpY2xlIiwiZXJyb3IiLCJnZW5lcmF0ZU1hdGVyaWFsIiwiZ2VuZXJhdGVBdWRpbyIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsImFzc2V0cyIsImFkZEl0ZW1zIiwicmVtb3ZlQXNzZXQiLCJkZWxldGVBc3NldCIsIl9hcGkiLCJfc2Vzc2lvbiIsImFwaSIsIm1vZGVsIiwiQXBpIiwiZHJhZnRJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwidXJsIiwicG9zdCIsInN0YXR1cyIsIm1hdGVyaWFsTmFtZSIsIm1vZHVsZUlkIiwiYXNzZXRJZCIsIl9zdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnMiLCJsb2FkIiwiaW1hZ2UiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiZmlsZSIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImVudHJpZXMiLCJPYmplY3QiLCJmaWVsZHMiLCJrZXkiLCJvcHRpb25hbCIsImlzQXJyYXlWYWxpZCIsImFycmF5Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJjb25maWciLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl92YWxpZGF0ZURhdGEiLCJzdHJ1Y3R1cmVOYW1lIiwiZWxlbWVudCIsImdyb3VwZWQiLCJmaWVsZFN0cnVjdHVyZSIsInNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwidGFzayIsInJlcXVpcmVkIiwicm9sZSIsImxhYmVsIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJFeGVyY2lzZUFjdGl2aXR5U3BlY3MiLCJleGVyY2lzZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInJlcXVlc3RlZFRhc2siLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0U3VnZ2VzdGlvbnMiLCJvYnNlcnZhdGlvbnMiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVJlc3BvbnNlIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiXSwic291cmNlcyI6WyIvL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi8vYWN0aXZpdGllcy9pdGVtLnRzIiwiLy9hY3Rpdml0aWVzL21hdGVyaWFscy9hc3NldHMvY29sbGVjdGlvbi50cyIsIi8vYWN0aXZpdGllcy9tYXRlcmlhbHMvYXNzZXRzL2l0ZW0udHMiLCIvL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiLy9hY3Rpdml0aWVzL21hdGVyaWFscy9wcm92aWRlci50cyIsIi8vYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi8vYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL2NoYXQudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL2V4ZXJjaXNlLnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvZnJlZS1jb252ZXJzYXRpb24udHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi8vYWN0aXZpdHktdHlwZXMudHMvIiwiLy9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiLy9hc3NpZ25tZW50cy9pdGVtLnRzIiwiLy9hdWRpZW5jZS50cy8iLCIvL2Jhc2UudHMvIiwiLy9jb2xsZWN0aW9uLnRzLyIsIi8vY29tbXVuaXR5LnRzLyIsIi8vY3JlZGl0cy9pbmRleC50cyIsIi8vdHlwZXMudHMvIiwiLy9kcmFmdC50cy8iLCIvL2Vycm9yLnRzLyIsIi8vaXRlbS50cy8iLCIvL2xpc3QudHMvIiwiLy9wcm92aWRlcnMvaW5kZXgudHMiLCIvL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiLy9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi8vdHlwZXMvYWN0aXZpdGllcy50cyIsIi8vb3duZXIudHMvIiwiLy9kcmFmdC1pbXByb3ZlbWVudHMudHMvIiwiLy9kcmFmdHMudHMvIiwiLy9pbmRleC50cy8iLCIvL2ludGVyZmFjZXMudHMvIiwiLy9sZWFybmluZy1tb2R1bGUtYmFzZS50cy8iLCIvL2xlYXJuaW5nLW1vZHVsZS50cy8iLCIvL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiLy90aW1lU3RhbXAudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlELEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2pFO1lBRUEsT0FBT0MsWUFBWSxHQUFHLElBQUk7WUFFMUIsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENB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