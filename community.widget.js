System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/reactive@0.0.1/entities/collection", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_9 = _aimpactReactive001EntitiesCollection;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_14 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/reactive/entities/collection', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/community.widget');
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
        hash: 2980438737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
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
              this.#community = new _learningModules.LearningModules({
                type: 'community'
              });
              globalThis.store = this;
              this.language = _core.languages.current;
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
              await this.#community.load({
                type: 'community',
                route: 'community',
                language: 'en',
                audience: 'schools:secondary'
              });
              const audiences = await this.#community.loadAudience(_core.languages.current);
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
              this.language = language;
              this.audience = audience;
              this.level = level;
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
        hash: 2390616515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FiltersForm = FiltersForm;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _context = require("../context");
          var _level = require("./level");
          function FiltersForm({
            onClose,
            disabled = false
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
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
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setValues({
                ...values,
                language: store.language
              });
            }, ['fetching.changed', 'change']);
            const isDisabled = {
              isDisabled: disabled
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.filters.languages[item]
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
        hash: 990421364,
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
              className: "filters-selected__container"
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
        hash: 2440236138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("./context");
          var _filters = require("./filters");
          var _list = require("./list");
          var _components = require("pragmate-ui/components");
          var _labels = require("./filters/labels");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching] = React.useState(store.fetching);
            const {
              texts
            } = store;
            const [showModal, setShowModal] = React.useState(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return React.createElement(_ui.PageLoader, null);
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
        hash: 3272651874,
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
              entity: "assignment"
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
        hash: 733536379,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function List({}) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const preventMessage = texts.empty.community;
            const collection = store.community;
            const [data, setData] = React.useState({
              items: collection.items,
              fetching: collection.fetching,
              total: collection.items?.length
            }); // [1
            (0, _hooks.useBinder)([collection], () => {
              setData({
                ...data,
                items: collection.items,
                fetching: collection.fetching,
                total: collection.items?.length
              });
            });
            (0, _hooks.useBinder)([store], () => {
              setData({
                ...data,
                items: collection.items,
                fetching: collection.fetching,
                total: collection.items?.length
              });
            }, 'fetching.changed');
            if (data.fetching && !data.total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!collection.items?.length && !collection.fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            const isFetching = collection.fetching || store.fetchingData || store.fetching;
            const cls = `entity__list ${isFetching ? ' is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: cls,
              items: collection.items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwiZ2xvYmFsVGhpcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsInJvdXRlIiwibG9hZEF1ZGllbmNlIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwiZ2V0RmlsdGVycyIsImZldGNoaW5nIiwic3BlY3MiLCJnZXRBdWRpZW5jZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImxhYmVsIiwibmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaXNEaXNhYmxlZCIsInNhdmVkIiwibGVuZ3RoIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfaG9va3MiLCJfbW9kYWwiLCJfbGV2ZWwiLCJGaWx0ZXJzRm9ybSIsIm9uQ2xvc2UiLCJzZXRGZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZUJpbmRlciIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzTGV2ZWwiLCJfZmlsdGVycyIsIl9saXN0IiwiX2xhYmVscyIsInNldFJlYWR5Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUGFnZUxvYWRlciIsIm9uVG9nZ2xlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX21vZHVsZUNhcmQiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlJdGVtIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib3BlbiIsIm9uVXNlIiwiRnJhZ21lbnQiLCJNb2R1bGVDYXJkIiwiZW50aXR5IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsInVzZSIsIk93bmVyQXNzaWduRm9ybSIsIl9pdGVtIiwiX2VtcHR5IiwicHJldmVudE1lc3NhZ2UiLCJjb2xsZWN0aW9uIiwiZGF0YSIsInNldERhdGEiLCJ0b3RhbCIsIkVtcHR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsImlzRmV0Y2hpbmciLCJmZXRjaGluZ0RhdGEiLCJjbHMiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvZmlsdGVycy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZmlsdGVycy9pbmRleC50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sYWJlbHMudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGV2ZWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFB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