System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/kernel@0.1.14/core", "@beyond-js/reactive@2.1.1/entities/collection", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/components/module-card", "@aimpact/ailearn-app@0.7.0/modules/owner-assign.code", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_beyondJsKernel0114Core) {
      dependency_8 = _beyondJsKernel0114Core;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_9 = _beyondJsReactive211EntitiesCollection;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_12 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_14 = _pragmateUi108FormReactSelect;
    }, function (_pragmateUi108Modal) {
      dependency_15 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_aimpactAilearnApp070ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp070ModulesOwnerAssignCode;
    }, function (_pragmateUi108List) {
      dependency_19 = _pragmateUi108List;
    }, function (_pragmateUi108Empty) {
      dependency_20 = _pragmateUi108Empty;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/reactive/entities/collection', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/community.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2572910578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _core = require("@beyond-js/kernel/core");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            #community;
            get community() {
              return this.#community;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #audiences;
            get audiences() {
              return this.#audiences;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #audience;
            get audience() {
              return this.#audience;
            }
            set audience(value) {
              if (value === this.#audience?.id) return;
              this.#audience = this.#audiences.find(item => item.id === value);
              this.trigger('audience.changed');
              this.trigger('change');
            }
            constructor() {
              super({
                properties: ['language', 'level', 'fetchingFilter']
              });
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#globalTexts.on('change', this.listenTexts);
              this.#community = new _learningModules.LearningModules({
                type: 'community'
              });
              globalThis.store = this;
              // this.language = languages.current;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.level = undefined;
              this.audience = undefined;
              this.#texts.off('change', this.listenTexts);
            }
            async load(type = 'published') {
              _mainLayout.LayoutBroker.set({
                model: undefined
              });
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              const audiences = await this.#community.loadAudience(_core.languages.current);
              await this.#globalTexts.fetch();
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.community]]
              });
              this.#audiences = audiences.items;
              super.ready = true;
            }
            loadAudience = async language => {
              const audiences = await this.#community.loadAudience(language);
              this.#audiences = audiences.items;
            };
            getFilters = async ({
              language,
              audience,
              level
            }) => {
              this.fetching = true;
              this.language = language || this.language;
              this.audience = audience || this.audience;
              this.level = level || this.level;
              const specs = {
                type: 'community',
                route: 'community',
                language: this.language,
                audience,
                level
              };
              await this.#community.load(specs);
              this.fetching = false;
            };
            getAudience(audience) {
              return this.#audiences.find(item => item.id === audience);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 817106939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/filters/audience
      ****************************************/

      ims.set('./views/filters/audience', {
        hash: 15484137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                filters: {
                  audience: texts
                }
              },
              store
            } = (0, _context.useListContext)();
            const items = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            const [options, setOptions] = React.useState(items);
            const onChange = async event => {
              store.audience = event.target.value;
              store.set({
                level: undefined
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/index
      *************************************/

      ims.set('./views/filters/index', {
        hash: 4032345987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FiltersForm = FiltersForm;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _core = require("@beyond-js/kernel/core");
          var _context = require("../context");
          var _level = require("./level");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FiltersForm({
            onClose,
            disabled = false
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const {
              fetching,
              globalTexts
            } = store;
            const [values, setValues] = React.useState({
              language: store.language,
              audience: store.audience?.id,
              level: store.level
            });
            const [levels, setLevels] = React.useState(store.audience?.levels ?? []); // [1
            const onChange = async event => {
              store.set({
                language: event.target.value,
                audience: undefined,
                level: undefined
              });
              store.loadAudience(event.target.value);
            };
            (0, _hooks.useStore)(store, ['fetching.changed', 'change']);
            const isDisabled = {
              isDisabled: disabled
            };
            // Get supported languages dynamically from the languages object, same as in Languages Component
            const supportedLanguages = [..._core.languages.supported.keys()];
            const options = supportedLanguages.map(item => ({
              value: item,
              label: globalTexts.languages[item].name
            }));
            const onSearch = async () => {
              store.getFilters(values);
              onClose();
            };
            const onAudienceChange = async event => {
              setValues({
                ...values,
                audience: event.target.value
              });
              const audience = store.getAudience(event.target.value);
              setLevels(audience.levels);
              store.set({
                level: undefined
              });
            };
            const audienceItems = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, React.createElement("div", {
              className: "filters__container"
            }, React.createElement("header", null, React.createElement("h3", null, texts.filter.title), React.createElement("span", null, texts.filter.description)), React.createElement("form", {
              action: "",
              onSubmit: onSearch
            }, React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.languages.select.label), React.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.filters.languages.select.placeholder,
              // value={store.model.language}
              value: store.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.audience.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.filters.audience.select,
              options: audienceItems,
              value: values.audience,
              onChange: onAudienceChange,
              ...isDisabled
            })), React.createElement(_level.AudienceLevelField, {
              value: values.level,
              options: levels,
              disabled: disabled,
              setValues: setValues
            }), React.createElement("div", {
              className: "modal__actions"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, store.globalTexts.actions.cancel), React.createElement(_components.Button, {
              variant: "primary",
              type: "submit"
            }, store.globalTexts.actions.search)))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/filters/labels
      **************************************/

      ims.set('./views/filters/labels', {
        hash: 2350644024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilterLabels = FilterLabels;
          var React = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FilterLabels({
            toggleModal
          }) {
            const {
              store
            } = (0, _context.useListContext)();
            const [update, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdate({});
            });
            const Tag = ({
              children,
              property
            }) => {
              const onRemove = event => {
                event.stopPropagation();
                store[property] = undefined;
                store.getFilters({
                  language: store.language,
                  audience: store.audience?.id,
                  level: !!store.audience ? store.level : undefined
                });
              };
              return React.createElement("span", {
                className: "filter-tag"
              }, React.createElement("span", {
                className: "label",
                onClick: toggleModal
              }, children, ' '), React.createElement("button", {
                onClick: onRemove
              }, "x"));
            };
            let level;
            const hasLevel = store.level && store.audience?.levels;
            if (hasLevel) {
              level = store.audience.levels.find(level => level.id === store.level);
            }
            return React.createElement("div", {
              className: "filters-selected__container mb-15"
            }, store.language ? React.createElement(Tag, {
              property: "language"
            }, store.language) : null, store.audience ? React.createElement(Tag, {
              property: "audience"
            }, store.audience?.name) : null, hasLevel ? React.createElement(Tag, {
              property: "level"
            }, level.label) : null);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/level
      *************************************/

      ims.set('./views/filters/level', {
        hash: 3810936293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceLevelField({
            disabled,
            options = [],
            value,
            setValues
          }) {
            const {
              texts: {
                filters: {
                  level: texts
                }
              },
              values,
              store
            } = (0, _context.useListContext)();
            const onChange = event => {
              setValues(values => ({
                ...values,
                level: event.target.value
              }));
            };
            const isDisabled = {
              isDisabled: disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
              value: value,
              options: options.map(item => ({
                value: item.id,
                label: item.label
              })),
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3450889930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _filters = require("./filters");
          var _labels = require("./filters/labels");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [fetching] = React.useState(store.fetching);
            const {
              texts
            } = store;
            const [showModal, setShowModal] = React.useState(false);
            (0, _hooks.useStore)(store);
            if (!store.ready) return React.createElement(_ui.PageLoader, null);
            const value = {
              texts,
              store,
              fetching
            };
            const onToggle = () => setShowModal(!showModal);
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }, React.createElement(_components.Button, {
              variant: "primary",
              onClick: onToggle
            }, store.globalTexts.actions.filters)), React.createElement(_labels.FilterLabels, {
              toggleModal: onToggle
            }), showModal && React.createElement(_filters.FiltersForm, {
              onClose: onToggle
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 3849354313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 2116139051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var React = require("react");
          var _context = require("./context");
          function CommunityItem({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState({
              open: false,
              item
            });
            const toggleModal = () => setOpenModal({
              item,
              open: !openModal.open
            });
            const onUse = event => {
              event.stopPropagation();
              setOpenModal({
                open: true,
                item
              });
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              className: "community-card",
              texts: texts,
              entity: "assignment",
              href: item.playground.assignment
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            }))))), openModal.open && React.createElement(_ownerAssign.OwnerAssignForm, {
              item: item,
              onClose: toggleModal,
              texts: texts,
              type: "community"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3253851244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _context = require("./context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function List({}) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const preventMessage = texts.empty.community;
            // Use useStore to subscribe to store changes
            (0, _hooks.useStore)(store);
            (0, _hooks.useStore)(store.community);
            const {
              items,
              fetching
            } = store.community;
            const total = items?.length;
            const isFetching = fetching || store.fetchingData || store.fetching;
            if (fetching && !total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!items?.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            const cls = `entity__list ${isFetching ? ' is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: cls,
              items: items,
              control: _item.CommunityItem
            }));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJvbiIsImxpc3RlblRleHRzIiwiTGVhcm5pbmdNb2R1bGVzIiwidHlwZSIsImdsb2JhbFRoaXMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsIkxheW91dEJyb2tlciIsInNldCIsIm1vZGVsIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwibGFuZ3VhZ2UiLCJnZXRGaWx0ZXJzIiwiZmV0Y2hpbmciLCJzcGVjcyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9tb2RhbCIsIl9sZXZlbCIsIl9ob29rcyIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZVN0b3JlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzTGV2ZWwiLCJfZmlsdGVycyIsIl9sYWJlbHMiLCJfbGlzdCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwidG90YWwiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmdEYXRhIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFD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System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/kernel@0.1.14/core", "@beyond-js/reactive@2.1.1/entities/collection", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/components/module-card", "@aimpact/ailearn-app@0.7.0/modules/owner-assign.code", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_beyondJsKernel0114Core) {
      dependency_8 = _beyondJsKernel0114Core;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_9 = _beyondJsReactive211EntitiesCollection;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_12 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_14 = _pragmateUi108FormReactSelect;
    }, function (_pragmateUi108Modal) {
      dependency_15 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_aimpactAilearnApp070ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp070ModulesOwnerAssignCode;
    }, function (_pragmateUi108List) {
      dependency_19 = _pragmateUi108List;
    }, function (_pragmateUi108Empty) {
      dependency_20 = _pragmateUi108Empty;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/reactive/entities/collection', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/community.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2572910578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _core = require("@beyond-js/kernel/core");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            #community;
            get community() {
              return this.#community;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #audiences;
            get audiences() {
              return this.#audiences;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #audience;
            get audience() {
              return this.#audience;
            }
            set audience(value) {
              if (value === this.#audience?.id) return;
              this.#audience = this.#audiences.find(item => item.id === value);
              this.trigger('audience.changed');
              this.trigger('change');
            }
            constructor() {
              super({
                properties: ['language', 'level', 'fetchingFilter']
              });
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#globalTexts.on('change', this.listenTexts);
              this.#community = new _learningModules.LearningModules({
                type: 'community'
              });
              globalThis.store = this;
              // this.language = languages.current;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.level = undefined;
              this.audience = undefined;
              this.#texts.off('change', this.listenTexts);
            }
            async load(type = 'published') {
              _mainLayout.LayoutBroker.set({
                model: undefined
              });
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              const audiences = await this.#community.loadAudience(_core.languages.current);
              await this.#globalTexts.fetch();
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.community]]
              });
              this.#audiences = audiences.items;
              super.ready = true;
            }
            loadAudience = async language => {
              const audiences = await this.#community.loadAudience(language);
              this.#audiences = audiences.items;
            };
            getFilters = async ({
              language,
              audience,
              level
            }) => {
              this.fetching = true;
              this.language = language || this.language;
              this.audience = audience || this.audience;
              this.level = level || this.level;
              const specs = {
                type: 'community',
                route: 'community',
                language: this.language,
                audience,
                level
              };
              await this.#community.load(specs);
              this.fetching = false;
            };
            getAudience(audience) {
              return this.#audiences.find(item => item.id === audience);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 817106939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/filters/audience
      ****************************************/

      ims.set('./views/filters/audience', {
        hash: 15484137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                filters: {
                  audience: texts
                }
              },
              store
            } = (0, _context.useListContext)();
            const items = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            const [options, setOptions] = React.useState(items);
            const onChange = async event => {
              store.audience = event.target.value;
              store.set({
                level: undefined
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/index
      *************************************/

      ims.set('./views/filters/index', {
        hash: 4032345987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FiltersForm = FiltersForm;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _core = require("@beyond-js/kernel/core");
          var _context = require("../context");
          var _level = require("./level");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FiltersForm({
            onClose,
            disabled = false
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const {
              fetching,
              globalTexts
            } = store;
            const [values, setValues] = React.useState({
              language: store.language,
              audience: store.audience?.id,
              level: store.level
            });
            const [levels, setLevels] = React.useState(store.audience?.levels ?? []); // [1
            const onChange = async event => {
              store.set({
                language: event.target.value,
                audience: undefined,
                level: undefined
              });
              store.loadAudience(event.target.value);
            };
            (0, _hooks.useStore)(store, ['fetching.changed', 'change']);
            const isDisabled = {
              isDisabled: disabled
            };
            // Get supported languages dynamically from the languages object, same as in Languages Component
            const supportedLanguages = [..._core.languages.supported.keys()];
            const options = supportedLanguages.map(item => ({
              value: item,
              label: globalTexts.languages[item].name
            }));
            const onSearch = async () => {
              store.getFilters(values);
              onClose();
            };
            const onAudienceChange = async event => {
              setValues({
                ...values,
                audience: event.target.value
              });
              const audience = store.getAudience(event.target.value);
              setLevels(audience.levels);
              store.set({
                level: undefined
              });
            };
            const audienceItems = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, React.createElement("div", {
              className: "filters__container"
            }, React.createElement("header", null, React.createElement("h3", null, texts.filter.title), React.createElement("span", null, texts.filter.description)), React.createElement("form", {
              action: "",
              onSubmit: onSearch
            }, React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.languages.select.label), React.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.filters.languages.select.placeholder,
              // value={store.model.language}
              value: store.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.audience.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.filters.audience.select,
              options: audienceItems,
              value: values.audience,
              onChange: onAudienceChange,
              ...isDisabled
            })), React.createElement(_level.AudienceLevelField, {
              value: values.level,
              options: levels,
              disabled: disabled,
              setValues: setValues
            }), React.createElement("div", {
              className: "modal__actions"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, store.globalTexts.actions.cancel), React.createElement(_components.Button, {
              variant: "primary",
              type: "submit"
            }, store.globalTexts.actions.search)))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/filters/labels
      **************************************/

      ims.set('./views/filters/labels', {
        hash: 2350644024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilterLabels = FilterLabels;
          var React = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FilterLabels({
            toggleModal
          }) {
            const {
              store
            } = (0, _context.useListContext)();
            const [update, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdate({});
            });
            const Tag = ({
              children,
              property
            }) => {
              const onRemove = event => {
                event.stopPropagation();
                store[property] = undefined;
                store.getFilters({
                  language: store.language,
                  audience: store.audience?.id,
                  level: !!store.audience ? store.level : undefined
                });
              };
              return React.createElement("span", {
                className: "filter-tag"
              }, React.createElement("span", {
                className: "label",
                onClick: toggleModal
              }, children, ' '), React.createElement("button", {
                onClick: onRemove
              }, "x"));
            };
            let level;
            const hasLevel = store.level && store.audience?.levels;
            if (hasLevel) {
              level = store.audience.levels.find(level => level.id === store.level);
            }
            return React.createElement("div", {
              className: "filters-selected__container mb-15"
            }, store.language ? React.createElement(Tag, {
              property: "language"
            }, store.language) : null, store.audience ? React.createElement(Tag, {
              property: "audience"
            }, store.audience?.name) : null, hasLevel ? React.createElement(Tag, {
              property: "level"
            }, level.label) : null);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/level
      *************************************/

      ims.set('./views/filters/level', {
        hash: 3810936293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceLevelField({
            disabled,
            options = [],
            value,
            setValues
          }) {
            const {
              texts: {
                filters: {
                  level: texts
                }
              },
              values,
              store
            } = (0, _context.useListContext)();
            const onChange = event => {
              setValues(values => ({
                ...values,
                level: event.target.value
              }));
            };
            const isDisabled = {
              isDisabled: disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
              value: value,
              options: options.map(item => ({
                value: item.id,
                label: item.label
              })),
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3450889930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _filters = require("./filters");
          var _labels = require("./filters/labels");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [fetching] = React.useState(store.fetching);
            const {
              texts
            } = store;
            const [showModal, setShowModal] = React.useState(false);
            (0, _hooks.useStore)(store);
            if (!store.ready) return React.createElement(_ui.PageLoader, null);
            const value = {
              texts,
              store,
              fetching
            };
            const onToggle = () => setShowModal(!showModal);
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }, React.createElement(_components.Button, {
              variant: "primary",
              onClick: onToggle
            }, store.globalTexts.actions.filters)), React.createElement(_labels.FilterLabels, {
              toggleModal: onToggle
            }), showModal && React.createElement(_filters.FiltersForm, {
              onClose: onToggle
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 3849354313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 2116139051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var React = require("react");
          var _context = require("./context");
          function CommunityItem({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState({
              open: false,
              item
            });
            const toggleModal = () => setOpenModal({
              item,
              open: !openModal.open
            });
            const onUse = event => {
              event.stopPropagation();
              setOpenModal({
                open: true,
                item
              });
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              className: "community-card",
              texts: texts,
              entity: "assignment",
              href: item.playground.assignment
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            }))))), openModal.open && React.createElement(_ownerAssign.OwnerAssignForm, {
              item: item,
              onClose: toggleModal,
              texts: texts,
              type: "community"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 3253851244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _context = require("./context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function List({}) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const preventMessage = texts.empty.community;
            // Use useStore to subscribe to store changes
            (0, _hooks.useStore)(store);
            (0, _hooks.useStore)(store.community);
            const {
              items,
              fetching
            } = store.community;
            const total = items?.length;
            const isFetching = fetching || store.fetchingData || store.fetching;
            if (fetching && !total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!items?.length && !fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            const cls = `entity__list ${isFetching ? ' is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: cls,
              items: items,
              control: _item.CommunityItem
            }));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJvbiIsImxpc3RlblRleHRzIiwiTGVhcm5pbmdNb2R1bGVzIiwidHlwZSIsImdsb2JhbFRoaXMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsIkxheW91dEJyb2tlciIsInNldCIsIm1vZGVsIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwibGFuZ3VhZ2UiLCJnZXRGaWx0ZXJzIiwiZmV0Y2hpbmciLCJzcGVjcyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9tb2RhbCIsIl9sZXZlbCIsIl9ob29rcyIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZVN0b3JlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzTGV2ZWwiLCJfZmlsdGVycyIsIl9sYWJlbHMiLCJfbGlzdCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwidG90YWwiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmdEYXRhIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFD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