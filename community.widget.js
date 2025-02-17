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
        hash: 2642199931,
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
              this.#community = new _learningModules.LearningModules();
              globalThis.store = this;
              this.language = _core.languages.current;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.setBreadcrumb();
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            setBreadcrumb() {
              _mainLayout.LayoutBroker.overlay = false;
            }
            async load(type = 'published') {
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              const audiences = await this.#community.loadAudience(_core.languages.current);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.community]]
              });
              this.#audiences = audiences.items;
              super.ready = true;
            }
            loadAudience = async () => {
              const audiences = await this.#community.loadAudience(_core.languages.current);
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
        hash: 3287997583,
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
              store.loadAudience();
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
        hash: 2424307701,
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
                  level: store.level
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
            if (store.level) {
              level = store.audience.levels.find(level => level.id === store.level);
            }
            return React.createElement("div", {
              className: "filters-selected__container"
            }, store.audience ? React.createElement(Tag, {
              property: "audience"
            }, store.audience?.name) : null, store.level ? React.createElement(Tag, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJnbG9iYWxUaGlzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwidHlwZSIsInJvdXRlIiwibG9hZEF1ZGllbmNlIiwic2V0IiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwiaXRlbXMiLCJnZXRGaWx0ZXJzIiwibGV2ZWwiLCJmZXRjaGluZyIsInNwZWNzIiwiZ2V0QXVkaWVuY2UiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJkaXNhYmxlZCIsImZpbHRlcnMiLCJtYXAiLCJsYWJlbCIsIm5hbWUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInVuZGVmaW5lZCIsImlzRGlzYWJsZWQiLCJzYXZlZCIsImxlbmd0aCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2hvb2tzIiwiX21vZGFsIiwiX2xldmVsIiwiRmlsdGVyc0Zvcm0iLCJvbkNsb3NlIiwic2V0RmV0Y2hpbmciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJsZXZlbHMiLCJzZXRMZXZlbHMiLCJ1c2VCaW5kZXIiLCJvblNlYXJjaCIsIm9uQXVkaWVuY2VDaGFuZ2UiLCJhdWRpZW5jZUl0ZW1zIiwiTW9kYWwiLCJmaWx0ZXIiLCJhY3Rpb24iLCJvblN1Ym1pdCIsIkF1ZGllbmNlTGV2ZWxGaWVsZCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJjYW5jZWwiLCJzZWFyY2giLCJGaWx0ZXJMYWJlbHMiLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsIlRhZyIsImNoaWxkcmVuIiwicHJvcGVydHkiLCJvblJlbW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9maWx0ZXJzIiwiX2xpc3QiLCJfbGFiZWxzIiwic2V0UmVhZHkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlTG9hZGVyIiwib25Ub2dnbGUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eUl0ZW0iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvcGVuIiwib25Vc2UiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsIkFwcEljb25CdXR0b24iLCJ0ZXN0IiwidXNlIiwiT3duZXJBc3NpZ25Gb3JtIiwiX2l0ZW0iLCJfZW1wdHkiLCJwcmV2ZW50TWVzc2FnZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsInRvdGFsIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiaXNGZXRjaGluZyIsImZldGNoaW5nRGF0YSIsImNscyIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2luZGV4LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xhYmVscy50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sZXZlbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFB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