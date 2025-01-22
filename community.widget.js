System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
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
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_11 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_13 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_14 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031ModulesOwnerAssignCode) {
      dependency_17 = _aimpactAilearnApp031ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta7List) {
      dependency_18 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_19 = _pragmateUi100Beta7Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/empty', dependency_19]]);
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
        hash: 2714016099,
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
              await this.#community.load({
                type: 'community',
                route: 'community',
                language: this.language,
                audience: this.audience,
                level: this.level
              });
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
        hash: 3189263695,
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
              audience: store.audience,
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
            }, 'fetching.changed');
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
            const levelOptions = store.audience?.levels ?? [];
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
              name: "audience",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.audience.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.filters.audience.select,
              options: audienceItems,
              onChange: onAudienceChange,
              ...isDisabled
            })), React.createElement(_level.AudienceLevelField, {
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
        hash: 3699646227,
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
            return React.createElement("div", {
              className: "filters-selected__container"
            }, store.audience ? React.createElement(Tag, {
              property: "audience"
            }, store.audience?.name) : null, store.level ? React.createElement(Tag, {
              property: "level"
            }, store.level) : null);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/level
      *************************************/

      ims.set('./views/filters/level', {
        hash: 1626656338,
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
              options: options,
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
        hash: 2340373981,
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
              target: "_blank",
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
        hash: 196463429,
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
              console.log('escuchamos los cambios', store.fetchingData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJnbG9iYWxUaGlzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib24iLCJsaXN0ZW5UZXh0cyIsInNldEJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwidHlwZSIsInJvdXRlIiwibG9hZEF1ZGllbmNlIiwiaXRlbXMiLCJnZXRGaWx0ZXJzIiwibGV2ZWwiLCJmZXRjaGluZyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZXQiLCJ1bmRlZmluZWQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9ob29rcyIsIl9tb2RhbCIsIl9sZXZlbCIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInNldEZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwibGV2ZWxzIiwic2V0TGV2ZWxzIiwidXNlQmluZGVyIiwib25TZWFyY2giLCJvbkF1ZGllbmNlQ2hhbmdlIiwiYXVkaWVuY2VJdGVtcyIsImxldmVsT3B0aW9ucyIsIk1vZGFsIiwiZmlsdGVyIiwiYWN0aW9uIiwib25TdWJtaXQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiY2FuY2VsIiwic2VhcmNoIiwiRmlsdGVyTGFiZWxzIiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJUYWciLCJjaGlsZHJlbiIsInByb3BlcnR5Iiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJfZmlsdGVycyIsIl9saXN0IiwiX2xhYmVscyIsInNldFJlYWR5Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUGFnZUxvYWRlciIsIm9uVG9nZ2xlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX21vZHVsZUNhcmQiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlJdGVtIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwib3BlbiIsIm9uVXNlIiwiRnJhZ21lbnQiLCJNb2R1bGVDYXJkIiwiZW50aXR5IiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsInVzZSIsIk93bmVyQXNzaWduRm9ybSIsIl9pdGVtIiwiX2VtcHR5IiwicHJldmVudE1lc3NhZ2UiLCJjb2xsZWN0aW9uIiwiZGF0YSIsInNldERhdGEiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaGluZ0RhdGEiLCJFbXB0eSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJpc0ZldGNoaW5nIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxN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