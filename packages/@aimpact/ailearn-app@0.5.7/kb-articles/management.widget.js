System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "@aimpact/chat-sdk@1.5.5/session", "react@18.3.1", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/toast", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.6/form/react-select", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/form", "@aimpact/chat-sdk@1.5.5/editor", "@aimpact/ailearn-app@0.5.7/components/tags-input", "clsx@2.1.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp057StoresBase) {
      dependency_4 = _aimpactAilearnApp057StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_react) {
      dependency_7 = _react;
    }, function (_pragmateUi106Components) {
      dependency_8 = _pragmateUi106Components;
    }, function (_pragmateUi106Toast) {
      dependency_9 = _pragmateUi106Toast;
    }, function (_beyondJsKernel0112Routing) {
      dependency_10 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_11 = _aimpactAilearnApp057SharedHooks;
    }, function (_beyondJsKernel0112Core) {
      dependency_12 = _beyondJsKernel0112Core;
    }, function (_pragmateUi106FormReactSelect) {
      dependency_13 = _pragmateUi106FormReactSelect;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_14 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106Form) {
      dependency_15 = _pragmateUi106Form;
    }, function (_aimpactChatSdk155Editor) {
      dependency_16 = _aimpactChatSdk155Editor;
    }, function (_aimpactAilearnApp057ComponentsTagsInput) {
      dependency_17 = _aimpactAilearnApp057ComponentsTagsInput;
    }, function (_clsx2) {
      dependency_18 = _clsx2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/kb-articles/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/chat-sdk/editor', dependency_16], ['@aimpact/ailearn-app/components/tags-input', dependency_17], ['clsx', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-management",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/kb-articles/management.widget",
        "is": "page",
        "route": "/kb/articles/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/kb-articles/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 431460841,
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
        hash: 1766740243,
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
                // const breadcrumb = [[this.texts.title]];
                this.broker.set({
                  overlay: true,
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
        hash: 542119195,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 306654466,
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
              placeholder: texts.administrator.select,
              name: "owner",
              options: store.ownerships,
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
        hash: 3624862902,
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
        hash: 2401291639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormInput = FormInput;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 1220688305,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 834709562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
            (0, _hooks.useStore)(store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImlkIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2FydGljbGVzIiwiX3Nlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsInZhbHVlIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjbGVhciIsInVuZGVmaW5lZCIsInJlYWR5IiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJjcmVhdGVOZXdEcmFmdCIsIkRyYWZ0QXJ0aWNsZSIsInR5cGUiLCJsYW5ndWFnZSIsInN0YXRlIiwidGFncyIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJzYXZlRHJhZnQiLCJzbHVnIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJ0cmltIiwic2F2ZSIsInB1Ymxpc2hEcmFmdCIsInJlc3BvbnNlIiwicHVibGlzaCIsInVwZGF0ZUZpZWxkIiwiZmllbGQiLCJsb2ciLCJ1cGRhdGVUYWdzIiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2NvbnRleHQiLCJfaG9va3MiLCJBY3Rpb25CdXR0b25zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlU3RvcmUiLCJoYXNSZXF1aXJlZERhdGEiLCJ1c2VNZW1vIiwiaGFzVGl0bGUiLCJCb29sZWFuIiwiaGFzRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImhhc0NvbnRlbnQiLCJjb250ZW50IiwiaGFzTGFuZ3VhZ2UiLCJoYXNPd25lciIsIm93bmVyIiwiaXNGZXRjaGluZyIsImZldGNoaW5nIiwiaGFuZGxlU2F2ZSIsInJlc3VsdCIsInRvYXN0Iiwic3VjY2VzcyIsInN0YXR1cyIsInNhdmVkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImVycm9ycyIsImhhbmRsZVB1Ymxpc2giLCJwdWJsaXNoZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwidmFyaWFudCIsInNhdmluZyIsImFjdGlvbnMiLCJwdWJsaXNoaW5nIiwiX2NvcmUiLCJfcmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkcyIsIm9uQ2hhbmdlIiwiZ2xvYmFsVGV4dHMiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwib3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJsYW5nQ29kZSIsImluY2x1ZGVzIiwibGFuZ0RhdGEiLCJpc0Rpc2FibGVkIiwiRnJhZ21lbnQiLCJodG1sRm9yIiwibGFuZ3VhZ2VzU2VsZWN0IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIk93bmVyc2hpcEZpZWxkIiwiZm9ybSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwic2VsZWN0IiwiYXR0cnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mb3JtIiwiRm9ybUlucHV0IiwiZmllbGROYW1lIiwicmVxdWlyZWQiLCJmaWVsZFZhbHVlIiwiZm9ybVRleHRzIiwid2FybiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZm9ybUV2ZW50IiwiY3VycmVudFRhcmdldCIsIkNvbXBvbmVudCIsIlRleHRhcmVhIiwiSW5wdXQiLCJfZWRpdG9yIiwiX3RhZ3NJbnB1dCIsIl9mb3JtSW5wdXQiLCJfbGFuZ3VhZ2UiLCJfb3duZXJzaGlwIiwiQXJ0aWNsZUZvcm0iLCJoYW5kbGVGaWVsZENoYW5nZSIsImVtcHR5IiwiY3VycmVudFRhZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJXaWtpRWRpdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJUYWdzSW5wdXQiLCJfdWkiLCJfYWN0aW9uQnV0dG9ucyIsIl9jbHN4IiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsImRlZmF1bHQiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2FjdGlvbi1idXR0b25zLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9sYW5ndWFnZS50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3duZXJzaGlwLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZm9ybS1pbnB1dC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0udHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVB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