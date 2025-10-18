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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJvbiIsImxpc3RlblRleHRzIiwiTGVhcm5pbmdNb2R1bGVzIiwidHlwZSIsImdsb2JhbFRoaXMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsIkxheW91dEJyb2tlciIsInNldCIsIm1vZGVsIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwibGFuZ3VhZ2UiLCJnZXRGaWx0ZXJzIiwiZmV0Y2hpbmciLCJzcGVjcyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9tb2RhbCIsIl9sZXZlbCIsIl9ob29rcyIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZVN0b3JlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzTGV2ZWwiLCJfZmlsdGVycyIsIl9sYWJlbHMiLCJfbGlzdCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwidG90YWwiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmdEYXRhIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvZmlsdGVycy9hdWRpZW5jZS50c3giLCIvL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9maWx0ZXJzL2xhYmVscy50c3giLCIvL3RzL3ZpZXdzL2ZpbHRlcnMvbGV2ZWwudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL2ludGVyZmFjZXMudHMvIiwiLy90cy92aWV3cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9B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