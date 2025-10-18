System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "@aimpact/chat-sdk@1.5.5/session", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form/react-select", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form", "@aimpact/chat-sdk@1.5.5/editor", "@aimpact/ailearn-app@0.7.0/components/tags-input", "clsx@2.1.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_react) {
      dependency_7 = _react;
    }, function (_pragmateUi108Components) {
      dependency_8 = _pragmateUi108Components;
    }, function (_pragmateUi108Toast) {
      dependency_9 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Core) {
      dependency_12 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_13 = _pragmateUi108FormReactSelect;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_14 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_aimpactChatSdk155Editor) {
      dependency_16 = _aimpactChatSdk155Editor;
    }, function (_aimpactAilearnApp070ComponentsTagsInput) {
      dependency_17 = _aimpactAilearnApp070ComponentsTagsInput;
    }, function (_clsx2) {
      dependency_18 = _clsx2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/chat-sdk/editor', dependency_16], ['@aimpact/ailearn-app/components/tags-input', dependency_17], ['clsx', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-management",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/management.widget",
        "is": "page",
        "route": "/kb/articles/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/kb-articles/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 888802019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            get store() {
              return this.#store;
            }
            show() {
              const id = this.uri.qs.get('id');
              this.#store.load(id);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1675497946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _articles = require("@aimpact/ailearn-sdk/entities/articles");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #model;
            get model() {
              return this.#model;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get ownerships() {
              const orgs = this.user.organizations.items?.length ? this.user.organizations.items : [];
              return [{
                value: this.user.id,
                label: this.user.displayName
              }, ...orgs.map(item => ({
                value: item.id,
                label: item.name
              }))];
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            async getAdministrator(id) {
              if (this.user.id === id) {
                return this.user;
              }
              const org = this.user.organizations.items.find(item => item.id === id);
              return org;
            }
            async createNewDraft() {
              try {
                // Create a new DraftArticle instance with minimal properties
                this.#model = new _articles.DraftArticle({
                  type: 'article',
                  language: 'en',
                  state: 'draft',
                  tags: [] // Initialize tags as empty array
                });
                super.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error('Error creating new draft:', e);
              }
            }
            async load(id) {
              try {
                if (id && this.#model && this.#model.id === id) return;
                if (this.#model) {
                  this.#model = undefined;
                }
                await this.isReady;
                // const breadcrumb = [[this.texts.title]];
                this.broker.set({
                  overlay: true,
                  breadcrumb: [[this.globalTexts.entities.kbArticles, '/kb/articles/list'], [this.globalTexts.actions.create]],
                  backLink: `/modules/list?tab=drafts`
                });
                this.#model = new _articles.DraftArticle({
                  id
                });
                if (id) {
                  await this.#model.load();
                }
              } catch (e) {
                console.error('Error loading draft:', e);
              } finally {
                super.ready = true;
                this.triggerEvent();
              }
            }
            async saveDraft() {
              if (!this.#model) return;
              try {
                // Generate slug from title if not present
                if (!this.#model.slug && this.#model.title) {
                  this.#model.slug = this.#model.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
                }
                return await this.#model.save();
              } catch (e) {
                console.error('Error saving draft:', e);
                throw e;
              }
            }
            async publishDraft() {
              if (!this.#model) return;
              try {
                // Publish the draft using the model's publish method
                await this.saveDraft();
                const response = await this.#model.publish();
                return response;
              } catch (e) {
                console.error('Error publishing draft:', e);
                throw e;
              }
            }
            updateField(field, value) {
              if (!this.#model) return;
              if (field === 'tags') {
                console.log('Store: Updating tags to:', value);
              }
              this.#model.set({
                [field]: value
              });
            }
            updateTags(tags) {
              this.updateField('tags', tags);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/action-buttons
      **************************************/

      ims.set('./views/action-buttons', {
        hash: 2659076781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionButtons = ActionButtons;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActionButtons() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model);
            // Validate required fields outside return statement
            // Both Save and Publish buttons require: title, description, content, language, and owner
            const hasRequiredData = React.useMemo(() => {
              if (!store.model) return false;
              const hasTitle = Boolean(store.model.title?.trim());
              const hasDescription = Boolean(store.model.description?.trim());
              const hasContent = Boolean(store.model.content?.trim());
              const hasLanguage = Boolean(store.model.language?.trim());
              const hasOwner = Boolean(store.model.owner?.id);
              return hasTitle && hasDescription && hasContent && hasLanguage && hasOwner;
            }, [store.model?.title, store.model?.description, store.model?.content, store.model?.language, store.model?.owner?.id]);
            const isFetching = store.model?.fetching || false;
            const handleSave = async () => {
              try {
                const result = await store.saveDraft();
                // Check if save was successful by verifying the model has an ID
                if (store.model?.id) {
                  // Show success toast
                  _toast.toast.success(texts.status.saved);
                  // Update routing to include article ID
                  _routing.routing.replaceState({}, null, `/kb/articles/management?id=${store.model.id}`);
                }
              } catch (error) {
                console.error('Error saving draft:', error);
                // Show error toast
                _toast.toast.error(texts.errors.save);
              }
            };
            const handlePublish = async () => {
              try {
                await store.publishDraft();
                _toast.toast.success(texts.status.published);
                _routing.routing.replaceState({}, null, `/kb/articles/list?tab=published`);
              } catch (error) {
                console.error('Error publishing draft:', error);
                // Show error toast
                _toast.toast.error(texts.errors.publish);
              }
            };
            return React.createElement("div", {
              className: "article-actions"
            }, React.createElement(_components.Button, {
              onClick: handleSave,
              disabled: isFetching || !hasRequiredData,
              variant: "secondary"
            }, isFetching ? texts.status.saving : texts.actions.save), React.createElement(_components.Button, {
              onClick: handlePublish,
              disabled: isFetching || !hasRequiredData,
              variant: "primary"
            }, isFetching ? texts.status.publishing : texts.actions.publish));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/components/language
      *******************************************/

      ims.set('./views/components/language', {
        hash: 2516261494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _core = require("@beyond-js/kernel/core");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function LanguageFields({
            onChange
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              globalTexts
            } = store;
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            // Get languages from globalTexts and filter by supportedLanguages
            const options = globalTexts?.languages ? Object.entries(globalTexts.languages).filter(([langCode]) => supportedLanguages.includes(langCode)).map(([langCode, langData]) => ({
              value: langCode,
              label: langData.name
            })) : [];
            const isDisabled = {
              isDisabled: store.saved || store.model.fetching
            };
            return React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, globalTexts.languagesSelect.label), React.createElement(_reactSelect.ReactSelect, {
              placeholder: globalTexts.languagesSelect.placeholder,
              value: store.model.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/components/ownership
      ********************************************/

      ims.set('./views/components/ownership', {
        hash: 4211404488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function OwnershipField({
            onChange
          }) {
            const {
              texts: {
                form: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = React.useState(null);
            let defaultOption = {
              value: '',
              label: texts.administrator.select
            };
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships?.length === 0 || store.saved || store.model.fetching
            };
            const handleChange = async event => {
              const owner = await store.getAdministrator(event.target.value);
              store.model.owner = {
                id: owner.id,
                name: owner.name
              };
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "field-container"
            }, React.createElement("label", {
              htmlFor: ""
            }, texts.administrator.label), React.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: texts.administrator.placeholder,
              name: "owner",
              options: [...store.ownerships],
              onChange: handleChange,
              ...attrs
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1165446272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form-input
      **********************************/

      ims.set('./views/form-input', {
        hash: 3369301363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormInput = FormInput;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FormInput({
            fieldName,
            type = 'text',
            required = false,
            onChange
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            if (!store.model) return null;
            (0, _hooks.useStore)(store.model, [`${fieldName}.changed`, 'change']);
            const fieldValue = store.model[fieldName];
            // Access form texts through texts.form since form.json is loaded separately
            const formTexts = texts.form?.[fieldName];
            console.log(4, fieldValue, fieldName);
            if (!formTexts) {
              console.warn(`Form texts not found for field: ${fieldName}`);
              return null;
            }
            // Create a wrapper function that converts both Input and Textarea events to our FormEvent format
            const handleInputChange = e => {
              const formEvent = {
                target: {
                  name: fieldName,
                  value: e.target.value
                },
                currentTarget: {
                  name: fieldName,
                  value: e.target.value
                }
              };
              onChange(formEvent);
            };
            const Component = type === 'textarea' ? _form.Textarea : _form.Input;
            return React.createElement("div", {
              className: "form-row"
            }, React.createElement(Component, {
              type: type,
              label: formTexts.label,
              name: fieldName,
              placeholder: formTexts.placeholder,
              value: fieldValue || '',
              onChange: handleInputChange,
              required: required,
              variant: "floating"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 4142687751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleForm = ArticleForm;
          var React = require("react");
          var _editor = require("@aimpact/chat-sdk/editor");
          var _tagsInput = require("@aimpact/ailearn-app/components/tags-input");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _formInput = require("./form-input");
          var _language = require("./components/language");
          var _ownership = require("./components/ownership");
          function ArticleForm() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            // Subscribe to tags changes specifically
            (0, _hooks.useStore)(store.model, ['tags.changed']);
            // Dynamic onChange handler for all form fields - now receives event objects directly
            const handleFieldChange = event => {
              if (!store.model) {
                console.warn(`Cannot update field '${event.target.name}': model is not available`);
                return;
              }
              const {
                name,
                value
              } = event.target;
              if (name === 'tags') store.updateTags(value);else store.updateField(name, value);
            };
            if (!store.model) {
              return React.createElement("div", {
                className: "article-form__empty"
              }, React.createElement("h3", null, texts.empty.title), React.createElement("p", null, texts.empty.description));
            }
            // Ensure tags is always an array
            const currentTags = Array.isArray(store.model.tags) ? store.model.tags : [];
            return React.createElement("div", {
              className: "article-form"
            }, React.createElement("div", {
              className: "article-form__fields"
            }, React.createElement(_formInput.FormInput, {
              fieldName: "title",
              required: true,
              onChange: handleFieldChange
            }), React.createElement("div", {
              className: "form-row"
            }, React.createElement("div", {
              className: "content-editor"
            }, React.createElement("label", {
              className: "content-editor__label"
            }, texts.form?.content?.label || 'Content'), React.createElement(_editor.WikiEditor, {
              name: "content",
              onChange: handleFieldChange,
              initialContent: store.model.content
            })))), React.createElement("section", {
              className: "article-form__sidebar"
            }, React.createElement(_language.LanguageFields, {
              onChange: handleFieldChange
            }), React.createElement(_ownership.OwnershipField, {
              onChange: handleFieldChange
            }), React.createElement(_formInput.FormInput, {
              fieldName: "description",
              type: "textarea",
              required: true,
              onChange: handleFieldChange
            }), React.createElement("div", {
              className: "form-row"
            }, React.createElement("label", {
              className: "tags-input__label"
            }, texts.form?.tags?.label || 'Tags'), React.createElement(_tagsInput.TagsInput, {
              name: "tags",
              value: currentTags,
              onChange: handleFieldChange,
              placeholder: texts.form?.tags?.placeholder || 'Add tags separated by commas'
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 37291044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _actionButtons = require("./action-buttons");
          var _form = require("./form");
          var _clsx = require("clsx");
          /*bundle*/
          function View({
            store
          }) {
            const {
              texts
            } = store;
            (0, _hooks.useStore)(store.model, ['fetching.changed']);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title,
              className: (0, _clsx.default)({
                'is-fetching': store.fetching || store.model?.fetching
              })
            }, React.createElement(_actionButtons.ActionButtons, null)), React.createElement(_form.ArticleForm, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 2914349569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImlkIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2FydGljbGVzIiwiX3Nlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsInZhbHVlIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjbGVhciIsInVuZGVmaW5lZCIsInJlYWR5IiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJjcmVhdGVOZXdEcmFmdCIsIkRyYWZ0QXJ0aWNsZSIsInR5cGUiLCJsYW5ndWFnZSIsInN0YXRlIiwidGFncyIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJpc1JlYWR5IiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImFjdGlvbnMiLCJjcmVhdGUiLCJiYWNrTGluayIsInNhdmVEcmFmdCIsInNsdWciLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRyaW0iLCJzYXZlIiwicHVibGlzaERyYWZ0IiwicmVzcG9uc2UiLCJwdWJsaXNoIiwidXBkYXRlRmllbGQiLCJmaWVsZCIsImxvZyIsInVwZGF0ZVRhZ3MiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJfY29udGV4dCIsIl9ob29rcyIsIkFjdGlvbkJ1dHRvbnMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VTdG9yZSIsImhhc1JlcXVpcmVkRGF0YSIsInVzZU1lbW8iLCJoYXNUaXRsZSIsIkJvb2xlYW4iLCJoYXNEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiaGFzQ29udGVudCIsImNvbnRlbnQiLCJoYXNMYW5ndWFnZSIsImhhc093bmVyIiwib3duZXIiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmciLCJoYW5kbGVTYXZlIiwicmVzdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwic3RhdHVzIiwic2F2ZWQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiaGFuZGxlUHVibGlzaCIsInB1Ymxpc2hlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ2YXJpYW50Iiwic2F2aW5nIiwicHVibGlzaGluZyIsIl9jb3JlIiwiX3JlYWN0U2VsZWN0IiwiTGFuZ3VhZ2VGaWVsZHMiLCJvbkNoYW5nZSIsInN1cHBvcnRlZExhbmd1YWdlcyIsImxhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJvcHRpb25zIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImxhbmdDb2RlIiwiaW5jbHVkZXMiLCJsYW5nRGF0YSIsImlzRGlzYWJsZWQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJsYW5ndWFnZXNTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiT3duZXJzaGlwRmllbGQiLCJmb3JtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJzZWxlY3QiLCJhdHRycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm0iLCJGb3JtSW5wdXQiLCJmaWVsZE5hbWUiLCJyZXF1aXJlZCIsImZpZWxkVmFsdWUiLCJmb3JtVGV4dHMiLCJ3YXJuIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJmb3JtRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiQ29tcG9uZW50IiwiVGV4dGFyZWEiLCJJbnB1dCIsIl9lZGl0b3IiLCJfdGFnc0lucHV0IiwiX2Zvcm1JbnB1dCIsIl9sYW5ndWFnZSIsIl9vd25lcnNoaXAiLCJBcnRpY2xlRm9ybSIsImhhbmRsZUZpZWxkQ2hhbmdlIiwiZW1wdHkiLCJjdXJyZW50VGFncyIsIkFycmF5IiwiaXNBcnJheSIsIldpa2lFZGl0b3IiLCJpbml0aWFsQ29udGVudCIsIlRhZ3NJbnB1dCIsIl91aSIsIl9hY3Rpb25CdXR0b25zIiwiX2Nsc3giLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiZGVmYXVsdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aW9uLWJ1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0taW5wdXQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7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QUNHLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBMkMsR0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUFnRixLQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQXFGLE1BQUEsR0FBQXJGLE9BQUE7VUFHQSxJQUFBb0YsUUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUEwTCxjQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQThKLEtBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU07Y0FBRWtGO1lBQUssQ0FBRSxHQUFHbEYsS0FBSztZQUV2QixJQUFBZ0YsTUFBQSxDQUFBSSxRQUFRLEVBQUNwRixLQUFLLENBQUNpQixLQUFLLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ29DLEtBQUssRUFBRSxPQUFPdUMsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdUUsR0FBQSxDQUFBRyxVQUFVO2NBQUN0RixRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRXZELE1BQU14RSxLQUFLLEdBQUc7Y0FDYnlELEtBQUs7Y0FDTGxGO2FBQ0E7WUFFRCxPQUNDMkUsS0FBQSxDQUFBa0MsYUFBQSxDQUFDOUIsUUFBQSxDQUFBdUUsYUFBYSxDQUFDa0MsUUFBUTtjQUFDL0osS0FBSyxFQUFFQTtZQUFLLEdBQ25Da0QsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdUUsR0FBQSxDQUFBSyxhQUFhLFFBQ2I5RyxLQUFBLENBQUFrQyxhQUFBLENBQUN1RSxHQUFBLENBQUFNLFNBQVM7Y0FDVDNILEtBQUssRUFBRW1CLEtBQUssQ0FBQ25CLEtBQUs7Y0FDbEIrQyxTQUFTLEVBQUUsSUFBQXdFLEtBQUEsQ0FBQUssT0FBSSxFQUFDO2dCQUFFLGFBQWEsRUFBRTNMLEtBQUssQ0FBQ2lHLFFBQVEsSUFBSWpHLEtBQUssQ0FBQ2lCLEtBQUssRUFBRWdGO2NBQVEsQ0FBRTtZQUFDLEdBRTNFdEIsS0FBQSxDQUFBa0MsYUFBQSxDQUFDd0UsY0FBQSxDQUFBcEcsYUFBYSxPQUFHLENBQ04sRUFDWk4sS0FBQSxDQUFBa0MsYUFBQSxDQUFDNEMsS0FBQSxDQUFBa0IsV0FBVyxPQUFHLENBQ0EsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7VUNuQ0E7O1VBRUE3QyxNQUFBLENBQUE4RCxjQUFBLENBQUFqTCxPQUFBO1lBQ0FjLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "@aimpact/chat-sdk@1.5.5/session", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form/react-select", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form", "@aimpact/chat-sdk@1.5.5/editor", "@aimpact/ailearn-app@0.7.0/components/tags-input", "clsx@2.1.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_react) {
      dependency_7 = _react;
    }, function (_pragmateUi108Components) {
      dependency_8 = _pragmateUi108Components;
    }, function (_pragmateUi108Toast) {
      dependency_9 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Core) {
      dependency_12 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_13 = _pragmateUi108FormReactSelect;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_14 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_aimpactChatSdk155Editor) {
      dependency_16 = _aimpactChatSdk155Editor;
    }, function (_aimpactAilearnApp070ComponentsTagsInput) {
      dependency_17 = _aimpactAilearnApp070ComponentsTagsInput;
    }, function (_clsx2) {
      dependency_18 = _clsx2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/chat-sdk/editor', dependency_16], ['@aimpact/ailearn-app/components/tags-input', dependency_17], ['clsx', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-management",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/management.widget",
        "is": "page",
        "route": "/kb/articles/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/kb-articles/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 888802019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            get store() {
              return this.#store;
            }
            show() {
              const id = this.uri.qs.get('id');
              this.#store.load(id);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1675497946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _articles = require("@aimpact/ailearn-sdk/entities/articles");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #model;
            get model() {
              return this.#model;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get ownerships() {
              const orgs = this.user.organizations.items?.length ? this.user.organizations.items : [];
              return [{
                value: this.user.id,
                label: this.user.displayName
              }, ...orgs.map(item => ({
                value: item.id,
                label: item.name
              }))];
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            async getAdministrator(id) {
              if (this.user.id === id) {
                return this.user;
              }
              const org = this.user.organizations.items.find(item => item.id === id);
              return org;
            }
            async createNewDraft() {
              try {
                // Create a new DraftArticle instance with minimal properties
                this.#model = new _articles.DraftArticle({
                  type: 'article',
                  language: 'en',
                  state: 'draft',
                  tags: [] // Initialize tags as empty array
                });
                super.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error('Error creating new draft:', e);
              }
            }
            async load(id) {
              try {
                if (id && this.#model && this.#model.id === id) return;
                if (this.#model) {
                  this.#model = undefined;
                }
                await this.isReady;
                // const breadcrumb = [[this.texts.title]];
                this.broker.set({
                  overlay: true,
                  breadcrumb: [[this.globalTexts.entities.kbArticles, '/kb/articles/list'], [this.globalTexts.actions.create]],
                  backLink: `/modules/list?tab=drafts`
                });
                this.#model = new _articles.DraftArticle({
                  id
                });
                if (id) {
                  await this.#model.load();
                }
              } catch (e) {
                console.error('Error loading draft:', e);
              } finally {
                super.ready = true;
                this.triggerEvent();
              }
            }
            async saveDraft() {
              if (!this.#model) return;
              try {
                // Generate slug from title if not present
                if (!this.#model.slug && this.#model.title) {
                  this.#model.slug = this.#model.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
                }
                return await this.#model.save();
              } catch (e) {
                console.error('Error saving draft:', e);
                throw e;
              }
            }
            async publishDraft() {
              if (!this.#model) return;
              try {
                // Publish the draft using the model's publish method
                await this.saveDraft();
                const response = await this.#model.publish();
                return response;
              } catch (e) {
                console.error('Error publishing draft:', e);
                throw e;
              }
            }
            updateField(field, value) {
              if (!this.#model) return;
              if (field === 'tags') {
                console.log('Store: Updating tags to:', value);
              }
              this.#model.set({
                [field]: value
              });
            }
            updateTags(tags) {
              this.updateField('tags', tags);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/action-buttons
      **************************************/

      ims.set('./views/action-buttons', {
        hash: 2659076781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionButtons = ActionButtons;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActionButtons() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model);
            // Validate required fields outside return statement
            // Both Save and Publish buttons require: title, description, content, language, and owner
            const hasRequiredData = React.useMemo(() => {
              if (!store.model) return false;
              const hasTitle = Boolean(store.model.title?.trim());
              const hasDescription = Boolean(store.model.description?.trim());
              const hasContent = Boolean(store.model.content?.trim());
              const hasLanguage = Boolean(store.model.language?.trim());
              const hasOwner = Boolean(store.model.owner?.id);
              return hasTitle && hasDescription && hasContent && hasLanguage && hasOwner;
            }, [store.model?.title, store.model?.description, store.model?.content, store.model?.language, store.model?.owner?.id]);
            const isFetching = store.model?.fetching || false;
            const handleSave = async () => {
              try {
                const result = await store.saveDraft();
                // Check if save was successful by verifying the model has an ID
                if (store.model?.id) {
                  // Show success toast
                  _toast.toast.success(texts.status.saved);
                  // Update routing to include article ID
                  _routing.routing.replaceState({}, null, `/kb/articles/management?id=${store.model.id}`);
                }
              } catch (error) {
                console.error('Error saving draft:', error);
                // Show error toast
                _toast.toast.error(texts.errors.save);
              }
            };
            const handlePublish = async () => {
              try {
                await store.publishDraft();
                _toast.toast.success(texts.status.published);
                _routing.routing.replaceState({}, null, `/kb/articles/list?tab=published`);
              } catch (error) {
                console.error('Error publishing draft:', error);
                // Show error toast
                _toast.toast.error(texts.errors.publish);
              }
            };
            return React.createElement("div", {
              className: "article-actions"
            }, React.createElement(_components.Button, {
              onClick: handleSave,
              disabled: isFetching || !hasRequiredData,
              variant: "secondary"
            }, isFetching ? texts.status.saving : texts.actions.save), React.createElement(_components.Button, {
              onClick: handlePublish,
              disabled: isFetching || !hasRequiredData,
              variant: "primary"
            }, isFetching ? texts.status.publishing : texts.actions.publish));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/components/language
      *******************************************/

      ims.set('./views/components/language', {
        hash: 2516261494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _core = require("@beyond-js/kernel/core");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function LanguageFields({
            onChange
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              globalTexts
            } = store;
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            // Get languages from globalTexts and filter by supportedLanguages
            const options = globalTexts?.languages ? Object.entries(globalTexts.languages).filter(([langCode]) => supportedLanguages.includes(langCode)).map(([langCode, langData]) => ({
              value: langCode,
              label: langData.name
            })) : [];
            const isDisabled = {
              isDisabled: store.saved || store.model.fetching
            };
            return React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, globalTexts.languagesSelect.label), React.createElement(_reactSelect.ReactSelect, {
              placeholder: globalTexts.languagesSelect.placeholder,
              value: store.model.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/components/ownership
      ********************************************/

      ims.set('./views/components/ownership', {
        hash: 4211404488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function OwnershipField({
            onChange
          }) {
            const {
              texts: {
                form: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = React.useState(null);
            let defaultOption = {
              value: '',
              label: texts.administrator.select
            };
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships?.length === 0 || store.saved || store.model.fetching
            };
            const handleChange = async event => {
              const owner = await store.getAdministrator(event.target.value);
              store.model.owner = {
                id: owner.id,
                name: owner.name
              };
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "field-container"
            }, React.createElement("label", {
              htmlFor: ""
            }, texts.administrator.label), React.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: texts.administrator.placeholder,
              name: "owner",
              options: [...store.ownerships],
              onChange: handleChange,
              ...attrs
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1165446272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form-input
      **********************************/

      ims.set('./views/form-input', {
        hash: 3369301363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormInput = FormInput;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FormInput({
            fieldName,
            type = 'text',
            required = false,
            onChange
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            if (!store.model) return null;
            (0, _hooks.useStore)(store.model, [`${fieldName}.changed`, 'change']);
            const fieldValue = store.model[fieldName];
            // Access form texts through texts.form since form.json is loaded separately
            const formTexts = texts.form?.[fieldName];
            console.log(4, fieldValue, fieldName);
            if (!formTexts) {
              console.warn(`Form texts not found for field: ${fieldName}`);
              return null;
            }
            // Create a wrapper function that converts both Input and Textarea events to our FormEvent format
            const handleInputChange = e => {
              const formEvent = {
                target: {
                  name: fieldName,
                  value: e.target.value
                },
                currentTarget: {
                  name: fieldName,
                  value: e.target.value
                }
              };
              onChange(formEvent);
            };
            const Component = type === 'textarea' ? _form.Textarea : _form.Input;
            return React.createElement("div", {
              className: "form-row"
            }, React.createElement(Component, {
              type: type,
              label: formTexts.label,
              name: fieldName,
              placeholder: formTexts.placeholder,
              value: fieldValue || '',
              onChange: handleInputChange,
              required: required,
              variant: "floating"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 4142687751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleForm = ArticleForm;
          var React = require("react");
          var _editor = require("@aimpact/chat-sdk/editor");
          var _tagsInput = require("@aimpact/ailearn-app/components/tags-input");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _formInput = require("./form-input");
          var _language = require("./components/language");
          var _ownership = require("./components/ownership");
          function ArticleForm() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            // Subscribe to tags changes specifically
            (0, _hooks.useStore)(store.model, ['tags.changed']);
            // Dynamic onChange handler for all form fields - now receives event objects directly
            const handleFieldChange = event => {
              if (!store.model) {
                console.warn(`Cannot update field '${event.target.name}': model is not available`);
                return;
              }
              const {
                name,
                value
              } = event.target;
              if (name === 'tags') store.updateTags(value);else store.updateField(name, value);
            };
            if (!store.model) {
              return React.createElement("div", {
                className: "article-form__empty"
              }, React.createElement("h3", null, texts.empty.title), React.createElement("p", null, texts.empty.description));
            }
            // Ensure tags is always an array
            const currentTags = Array.isArray(store.model.tags) ? store.model.tags : [];
            return React.createElement("div", {
              className: "article-form"
            }, React.createElement("div", {
              className: "article-form__fields"
            }, React.createElement(_formInput.FormInput, {
              fieldName: "title",
              required: true,
              onChange: handleFieldChange
            }), React.createElement("div", {
              className: "form-row"
            }, React.createElement("div", {
              className: "content-editor"
            }, React.createElement("label", {
              className: "content-editor__label"
            }, texts.form?.content?.label || 'Content'), React.createElement(_editor.WikiEditor, {
              name: "content",
              onChange: handleFieldChange,
              initialContent: store.model.content
            })))), React.createElement("section", {
              className: "article-form__sidebar"
            }, React.createElement(_language.LanguageFields, {
              onChange: handleFieldChange
            }), React.createElement(_ownership.OwnershipField, {
              onChange: handleFieldChange
            }), React.createElement(_formInput.FormInput, {
              fieldName: "description",
              type: "textarea",
              required: true,
              onChange: handleFieldChange
            }), React.createElement("div", {
              className: "form-row"
            }, React.createElement("label", {
              className: "tags-input__label"
            }, texts.form?.tags?.label || 'Tags'), React.createElement(_tagsInput.TagsInput, {
              name: "tags",
              value: currentTags,
              onChange: handleFieldChange,
              placeholder: texts.form?.tags?.placeholder || 'Add tags separated by commas'
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 37291044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _actionButtons = require("./action-buttons");
          var _form = require("./form");
          var _clsx = require("clsx");
          /*bundle*/
          function View({
            store
          }) {
            const {
              texts
            } = store;
            (0, _hooks.useStore)(store.model, ['fetching.changed']);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title,
              className: (0, _clsx.default)({
                'is-fetching': store.fetching || store.model?.fetching
              })
            }, React.createElement(_actionButtons.ActionButtons, null)), React.createElement(_form.ArticleForm, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 2914349569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImlkIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2FydGljbGVzIiwiX3Nlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsInZhbHVlIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjbGVhciIsInVuZGVmaW5lZCIsInJlYWR5IiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJjcmVhdGVOZXdEcmFmdCIsIkRyYWZ0QXJ0aWNsZSIsInR5cGUiLCJsYW5ndWFnZSIsInN0YXRlIiwidGFncyIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJpc1JlYWR5IiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImFjdGlvbnMiLCJjcmVhdGUiLCJiYWNrTGluayIsInNhdmVEcmFmdCIsInNsdWciLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRyaW0iLCJzYXZlIiwicHVibGlzaERyYWZ0IiwicmVzcG9uc2UiLCJwdWJsaXNoIiwidXBkYXRlRmllbGQiLCJmaWVsZCIsImxvZyIsInVwZGF0ZVRhZ3MiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJfY29udGV4dCIsIl9ob29rcyIsIkFjdGlvbkJ1dHRvbnMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VTdG9yZSIsImhhc1JlcXVpcmVkRGF0YSIsInVzZU1lbW8iLCJoYXNUaXRsZSIsIkJvb2xlYW4iLCJoYXNEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiaGFzQ29udGVudCIsImNvbnRlbnQiLCJoYXNMYW5ndWFnZSIsImhhc093bmVyIiwib3duZXIiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmciLCJoYW5kbGVTYXZlIiwicmVzdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwic3RhdHVzIiwic2F2ZWQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiaGFuZGxlUHVibGlzaCIsInB1Ymxpc2hlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ2YXJpYW50Iiwic2F2aW5nIiwicHVibGlzaGluZyIsIl9jb3JlIiwiX3JlYWN0U2VsZWN0IiwiTGFuZ3VhZ2VGaWVsZHMiLCJvbkNoYW5nZSIsInN1cHBvcnRlZExhbmd1YWdlcyIsImxhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJvcHRpb25zIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImxhbmdDb2RlIiwiaW5jbHVkZXMiLCJsYW5nRGF0YSIsImlzRGlzYWJsZWQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJsYW5ndWFnZXNTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiT3duZXJzaGlwRmllbGQiLCJmb3JtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJzZWxlY3QiLCJhdHRycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvcm0iLCJGb3JtSW5wdXQiLCJmaWVsZE5hbWUiLCJyZXF1aXJlZCIsImZpZWxkVmFsdWUiLCJmb3JtVGV4dHMiLCJ3YXJuIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJmb3JtRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiQ29tcG9uZW50IiwiVGV4dGFyZWEiLCJJbnB1dCIsIl9lZGl0b3IiLCJfdGFnc0lucHV0IiwiX2Zvcm1JbnB1dCIsIl9sYW5ndWFnZSIsIl9vd25lcnNoaXAiLCJBcnRpY2xlRm9ybSIsImhhbmRsZUZpZWxkQ2hhbmdlIiwiZW1wdHkiLCJjdXJyZW50VGFncyIsIkFycmF5IiwiaXNBcnJheSIsIldpa2lFZGl0b3IiLCJpbml0aWFsQ29udGVudCIsIlRhZ3NJbnB1dCIsIl91aSIsIl9hY3Rpb25CdXR0b25zIiwiX2Nsc3giLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiZGVmYXVsdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aW9uLWJ1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0taW5wdXQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7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QUNHLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBMkMsR0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUFnRixLQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQXFGLE1BQUEsR0FBQXJGLE9BQUE7VUFHQSxJQUFBb0YsUUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUEwTCxjQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQThKLEtBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU07Y0FBRWtGO1lBQUssQ0FBRSxHQUFHbEYsS0FBSztZQUV2QixJQUFBZ0YsTUFBQSxDQUFBSSxRQUFRLEVBQUNwRixLQUFLLENBQUNpQixLQUFLLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ29DLEtBQUssRUFBRSxPQUFPdUMsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdUUsR0FBQSxDQUFBRyxVQUFVO2NBQUN0RixRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRXZELE1BQU14RSxLQUFLLEdBQUc7Y0FDYnlELEtBQUs7Y0FDTGxGO2FBQ0E7WUFFRCxPQUNDMkUsS0FBQSxDQUFBa0MsYUFBQSxDQUFDOUIsUUFBQSxDQUFBdUUsYUFBYSxDQUFDa0MsUUFBUTtjQUFDL0osS0FBSyxFQUFFQTtZQUFLLEdBQ25Da0QsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdUUsR0FBQSxDQUFBSyxhQUFhLFFBQ2I5RyxLQUFBLENBQUFrQyxhQUFBLENBQUN1RSxHQUFBLENBQUFNLFNBQVM7Y0FDVDNILEtBQUssRUFBRW1CLEtBQUssQ0FBQ25CLEtBQUs7Y0FDbEIrQyxTQUFTLEVBQUUsSUFBQXdFLEtBQUEsQ0FBQUssT0FBSSxFQUFDO2dCQUFFLGFBQWEsRUFBRTNMLEtBQUssQ0FBQ2lHLFFBQVEsSUFBSWpHLEtBQUssQ0FBQ2lCLEtBQUssRUFBRWdGO2NBQVEsQ0FBRTtZQUFDLEdBRTNFdEIsS0FBQSxDQUFBa0MsYUFBQSxDQUFDd0UsY0FBQSxDQUFBcEcsYUFBYSxPQUFHLENBQ04sRUFDWk4sS0FBQSxDQUFBa0MsYUFBQSxDQUFDNEMsS0FBQSxDQUFBa0IsV0FBVyxPQUFHLENBQ0EsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7VUNuQ0E7O1VBRUE3QyxNQUFBLENBQUE4RCxjQUFBLENBQUFqTCxPQUFBO1lBQ0FjLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==