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
        hash: 3122939713,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJvbiIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJ0eXBlIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJzZXQiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJpdGVtcyIsImdldEZpbHRlcnMiLCJsZXZlbCIsImZldGNoaW5nIiwiZ2V0QXVkaWVuY2UiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJkaXNhYmxlZCIsImZpbHRlcnMiLCJtYXAiLCJsYWJlbCIsIm5hbWUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInVuZGVmaW5lZCIsImlzRGlzYWJsZWQiLCJzYXZlZCIsImxlbmd0aCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2hvb2tzIiwiX21vZGFsIiwiX2xldmVsIiwiRmlsdGVyc0Zvcm0iLCJvbkNsb3NlIiwic2V0RmV0Y2hpbmciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJsZXZlbHMiLCJzZXRMZXZlbHMiLCJ1c2VCaW5kZXIiLCJvblNlYXJjaCIsIm9uQXVkaWVuY2VDaGFuZ2UiLCJhdWRpZW5jZUl0ZW1zIiwibGV2ZWxPcHRpb25zIiwiTW9kYWwiLCJmaWx0ZXIiLCJhY3Rpb24iLCJvblN1Ym1pdCIsIkF1ZGllbmNlTGV2ZWxGaWVsZCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJjYW5jZWwiLCJzZWFyY2giLCJGaWx0ZXJMYWJlbHMiLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsIlRhZyIsImNoaWxkcmVuIiwicHJvcGVydHkiLCJvblJlbW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9maWx0ZXJzIiwiX2xpc3QiLCJfbGFiZWxzIiwic2V0UmVhZHkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlTG9hZGVyIiwib25Ub2dnbGUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eUl0ZW0iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvcGVuIiwib25Vc2UiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsIkFwcEljb25CdXR0b24iLCJ0ZXN0IiwidXNlIiwiT3duZXJBc3NpZ25Gb3JtIiwiX2l0ZW0iLCJfZW1wdHkiLCJwcmV2ZW50TWVzc2FnZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImZldGNoaW5nRGF0YSIsIkVtcHR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsImlzRmV0Y2hpbmciLCJjbHMiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvZmlsdGVycy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZmlsdGVycy9pbmRleC50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sYWJlbHMudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGV2ZWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDTCxHQUFHLENBQUM7WUFDdEI7WUFFQU0sSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBaEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBaUIsV0FBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLGdCQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsZUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixLQUFBLEdBQUF6QixPQUFBO1VBWU0sTUFBT08sWUFBYSxTQUFRYyxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLE1BQU87WUFFUCxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBakIsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsQ0FBQWtCLEtBQU0sR0FBc0IsSUFBSU4sTUFBQSxDQUFBTyxZQUFZLENBQUNOLGVBQUEsQ0FBQU8sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDOUQsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNLLEtBQUs7WUFDeEM7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ0gsS0FBSztZQUMvQjtZQUVBLENBQUFJLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlBLFFBQVFBLENBQUNKLEtBQWE7Y0FDekIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBSSxRQUFTLEVBQUVDLEVBQUUsRUFBRTtjQUNsQyxJQUFJLENBQUMsQ0FBQUQsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBRixTQUFVLENBQUNJLElBQUksQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNGLEVBQUUsS0FBS0wsS0FBSyxDQUFDO2NBRWhFLElBQUksQ0FBQ1EsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2NBQ2hDLElBQUksQ0FBQ0EsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUtBQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGdCQUFnQjtjQUFDLENBQUUsQ0FBQztjQUM5RCxJQUFJLENBQUMsQ0FBQVAsV0FBWSxHQUFHLElBQUliLE1BQUEsQ0FBQU8sWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBTSxXQUFZLENBQUNRLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQWhCLFNBQVUsR0FBRyxJQUFJTixnQkFBQSxDQUFBdUIsZUFBZSxFQUFFO2NBRXZDLElBQUksQ0FBQ0MsUUFBUSxHQUFHckIsS0FBQSxDQUFBc0IsU0FBUyxDQUFDQyxPQUFPO1lBQ2xDO1lBRUFqQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFjLEtBQU0sQ0FBQ29CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUM7Y0FDMUMsSUFBSSxDQUFDQSxXQUFXLEVBQUU7WUFDbkI7WUFDQUEsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDSyxLQUFLLEVBQUU7Y0FFeEIsSUFBSSxDQUFDaUIsYUFBYSxFQUFFO2NBQ3BCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCLENBQUM7WUFDRGxDLEtBQUtBLENBQUE7Y0FDSixLQUFLLENBQUNnQixLQUFLLEdBQUcsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDd0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNILFdBQVcsQ0FBQztZQUM1QztZQUVBQyxhQUFhQSxDQUFBO2NBQ1ovQixXQUFBLENBQUFrQyxZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO1lBQzdCO1lBRUEsTUFBTXZDLElBQUlBLENBQUN3QyxJQUFJLEdBQUcsV0FBVztjQUM1QixNQUFNLElBQUksQ0FBQyxDQUFBNUIsU0FBVSxDQUFDWixJQUFJLENBQUM7Z0JBQUV3QyxJQUFJLEVBQUUsV0FBVztnQkFBRUMsS0FBSyxFQUFFO2NBQVcsQ0FBRSxDQUFDO2NBQ3JFLE1BQU10QixTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVAsU0FBVSxDQUFDOEIsWUFBWSxDQUFDakMsS0FBQSxDQUFBc0IsU0FBUyxDQUFDQyxPQUFPLENBQUM7Y0FDdkU1QixXQUFBLENBQUFrQyxZQUFZLENBQUNLLEdBQUcsQ0FBQztnQkFDaEJKLE9BQU8sRUFBRSxLQUFLO2dCQUNkSyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ3hCLFdBQVcsQ0FBQ3lCLFFBQVEsQ0FBQ2pDLFNBQVMsQ0FBQztlQUNsRCxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFPLFNBQVUsR0FBR0EsU0FBUyxDQUFDMkIsS0FBSztjQUNqQyxLQUFLLENBQUM1QixLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUVBd0IsWUFBWSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixNQUFNdkIsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFQLFNBQVUsQ0FBQzhCLFlBQVksQ0FBQ2pDLEtBQUEsQ0FBQXNCLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO2NBQ3ZFLElBQUksQ0FBQyxDQUFBYixTQUFVLEdBQUdBLFNBQVMsQ0FBQzJCLEtBQUs7WUFDbEMsQ0FBQztZQUVEQyxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFakIsUUFBUTtjQUFFVCxRQUFRO2NBQUUyQjtZQUFLLENBQUUsS0FBSTtjQUNwRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBRXBCLElBQUksQ0FBQ25CLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUNULFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUMyQixLQUFLLEdBQUdBLEtBQUs7Y0FFbEIsTUFBTSxJQUFJLENBQUMsQ0FBQXBDLFNBQVUsQ0FBQ1osSUFBSSxDQUFDO2dCQUMxQndDLElBQUksRUFBRSxXQUFXO2dCQUNqQkMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCWCxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2dCQUN2QlQsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtnQkFDdkIyQixLQUFLLEVBQUUsSUFBSSxDQUFDQTtlQUNaLENBQUM7Y0FFRixJQUFJLENBQUNDLFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFREMsV0FBV0EsQ0FBQzdCLFFBQVE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsU0FBVSxDQUFDSSxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDRixFQUFFLEtBQUtELFFBQVEsQ0FBQztZQUMxRDs7VUFDQWxCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IRCxJQUFBNEQsTUFBQSxHQUFBbkUsT0FBQTtVQVdPLE1BQU1vRSxXQUFXLEdBQUFqRCxPQUFBLENBQUFpRCxXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUNqRCxPQUFBLENBQUFvRCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFLElBQUFFLEtBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLEdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVNkUsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVoRDtZQUFLLENBQUUsR0FBRyxJQUFBOEMsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsT0FDQ0UsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQUcsU0FBUztjQUFDQyxJQUFJLEVBQUVuRCxLQUFLLENBQUNvRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUV2RCxLQUFLLENBQUNvRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsV0FBVztjQUFFQyxJQUFJLEVBQUM7WUFBTSxHQUNwR1osS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFvQyxHQUNsRGIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUMscUJBQXFCO2NBQUNGLFNBQVMsRUFBQztZQUFzQixHQUMvRHpELEtBQUssQ0FBQzRELE9BQU8sQ0FBQ0MsTUFBTSxDQUNmLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFDLFlBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBeUUsS0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU0sU0FBVTRGLGFBQWFBLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBQ3pDLE1BQU07Y0FDTGhFLEtBQUssRUFBRTtnQkFDTmlFLE9BQU8sRUFBRTtrQkFBRXpELFFBQVEsRUFBRVI7Z0JBQUs7Y0FBRSxDQUM1QjtjQUNEeEI7WUFBSyxDQUNMLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRXBCLE1BQU1ULEtBQUssR0FBVXpELEtBQUssQ0FBQzhCLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQzFELFFBQVEsS0FBSztjQUFFSixLQUFLLEVBQUVJLFFBQVEsQ0FBQ0MsRUFBRTtjQUFFMEQsS0FBSyxFQUFFM0QsUUFBUSxDQUFDNEQ7WUFBSSxDQUFFLENBQUMsQ0FBQztZQUNwRyxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxQixLQUFLLENBQUMyQixRQUFRLENBQUN0QyxLQUFLLENBQUM7WUFHbkQsTUFBTXVDLFFBQVEsR0FBRyxNQUFPQyxLQUEyQyxJQUFJO2NBQ3RFakcsS0FBSyxDQUFDZ0MsUUFBUSxHQUFHaUUsS0FBSyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLO2NBQ25DNUIsS0FBSyxDQUFDc0QsR0FBRyxDQUFDO2dCQUFFSyxLQUFLLEVBQUV3QztjQUFTLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTUMsVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRXBHLEtBQUssQ0FBQ3FHLEtBQUssSUFBSWIsUUFBUSxJQUFJLENBQUNLLE9BQU8sQ0FBQ1M7WUFBTSxDQUFFO1lBRTdFLE9BQ0NsQyxLQUFBLENBQUFLLGFBQUEsY0FDQ0wsS0FBQSxDQUFBSyxhQUFBO2NBQU84QixPQUFPLEVBQUM7WUFBRSxHQUFFL0UsS0FBSyxDQUFDbUUsS0FBSyxDQUFTLEVBQ3ZDdkIsS0FBQSxDQUFBSyxhQUFBLENBQUNhLFlBQUEsQ0FBQWtCLFdBQVc7Y0FDWFosSUFBSSxFQUFDLFVBQVU7Y0FDZmEsV0FBVyxFQUFFakYsS0FBSyxDQUFDa0YsTUFBTTtjQUN6QmIsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCRyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkSTtZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBZCxZQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQWdILE1BQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFpSCxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQXlFLEtBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBRU0sU0FBVW1ILFdBQVdBLENBQUM7WUFBRUMsT0FBTztZQUFFdkIsUUFBUSxHQUFHO1VBQUssQ0FBK0M7WUFDckcsTUFBTTtjQUFFaEUsS0FBSztjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3pDLE1BQU0sQ0FBQ04sUUFBUSxFQUFFb0QsV0FBVyxDQUFDLEdBQUc1QyxLQUFLLENBQUMyQixRQUFRLENBQUMvRixLQUFLLENBQUM0RCxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDcUQsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzlDLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQztjQUMxQ3RELFFBQVEsRUFBRXpDLEtBQUssQ0FBQ3lDLFFBQVE7Y0FDeEJULFFBQVEsRUFBRWhDLEtBQUssQ0FBQ2dDLFFBQVE7Y0FDeEIyQixLQUFLLEVBQUUzRCxLQUFLLENBQUMyRDthQUNiLENBQUM7WUFDRixNQUFNLENBQUN3RCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEQsS0FBSyxDQUFDMkIsUUFBUSxDQUFDL0YsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFbUYsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTW5CLFFBQVEsR0FBRyxNQUFPQyxLQUEyQyxJQUFJO2NBQ3RFakcsS0FBSyxDQUFDc0QsR0FBRyxDQUFDO2dCQUFFYixRQUFRLEVBQUV3RCxLQUFLLENBQUNDLE1BQU0sQ0FBQ3RFLEtBQUs7Z0JBQUVJLFFBQVEsRUFBRW1FLFNBQVM7Z0JBQUV4QyxLQUFLLEVBQUV3QztjQUFTLENBQUUsQ0FBQztjQUNsRm5HLEtBQUssQ0FBQ3FELFlBQVksRUFBRTtZQUNyQixDQUFDO1lBQ0QsSUFBQXNELE1BQUEsQ0FBQVUsU0FBUyxFQUNSLENBQUNySCxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0pnSCxXQUFXLENBQUNoSCxLQUFLLENBQUM0RCxRQUFRLENBQUM7WUFDNUIsQ0FBQyxFQUNELGtCQUFrQixDQUNsQjtZQUNELE1BQU13QyxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFWjtZQUFRLENBQUU7WUFDM0MsTUFBTUssT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDSCxHQUFHLENBQUN2RCxJQUFJLEtBQUs7Y0FBRVAsS0FBSyxFQUFFTyxJQUFJO2NBQUV3RCxLQUFLLEVBQUVuRSxLQUFLLENBQUNpRSxPQUFPLENBQUMvQyxTQUFTLENBQUNQLElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUVqRyxNQUFNbUYsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQnRILEtBQUssQ0FBQzBELFVBQVUsQ0FBQ3VELE1BQU0sQ0FBQztjQUN4QkYsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE1BQU1RLGdCQUFnQixHQUFHLE1BQU90QixLQUEyQyxJQUFJO2NBQzlFaUIsU0FBUyxDQUFDO2dCQUFFLEdBQUdELE1BQU07Z0JBQUVqRixRQUFRLEVBQUVpRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ3RFO2NBQUssQ0FBRSxDQUFDO2NBQ3RELE1BQU1JLFFBQVEsR0FBR2hDLEtBQUssQ0FBQzZELFdBQVcsQ0FBQ29DLEtBQUssQ0FBQ0MsTUFBTSxDQUFDdEUsS0FBSyxDQUFDO2NBQ3REd0YsU0FBUyxDQUFDcEYsUUFBUSxDQUFDbUYsTUFBTSxDQUFDO2NBQzFCbkgsS0FBSyxDQUFDc0QsR0FBRyxDQUFDO2dCQUFFSyxLQUFLLEVBQUV3QztjQUFTLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBRUQsTUFBTXFCLGFBQWEsR0FBVXhILEtBQUssQ0FBQzhCLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQzFELFFBQVEsS0FBSztjQUFFSixLQUFLLEVBQUVJLFFBQVEsQ0FBQ0MsRUFBRTtjQUFFMEQsS0FBSyxFQUFFM0QsUUFBUSxDQUFDNEQ7WUFBSSxDQUFFLENBQUMsQ0FBQztZQUM1RyxNQUFNNkIsWUFBWSxHQUFHekgsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFbUYsTUFBTSxJQUFJLEVBQUU7WUFFakQsT0FDQy9DLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUMsTUFBQSxDQUFBYyxLQUFLO2NBQUNySCxJQUFJO2NBQUMwRyxPQUFPLEVBQUVBO1lBQU8sR0FDM0IzQyxLQUFBLENBQUFLLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDYixLQUFBLENBQUFLLGFBQUEsaUJBQ0NMLEtBQUEsQ0FBQUssYUFBQSxhQUFLakQsS0FBSyxDQUFDbUcsTUFBTSxDQUFDN0MsS0FBSyxDQUFNLEVBQzdCVixLQUFBLENBQUFLLGFBQUEsZUFBT2pELEtBQUssQ0FBQ21HLE1BQU0sQ0FBQzVDLFdBQVcsQ0FBUSxDQUMvQixFQUNUWCxLQUFBLENBQUFLLGFBQUE7Y0FBTW1ELE1BQU0sRUFBQyxFQUFFO2NBQUNDLFFBQVEsRUFBRVA7WUFBUSxHQUNqQ2xELEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTzhCLE9BQU8sRUFBQztZQUFFLEdBQUUvRSxLQUFLLENBQUNpRSxPQUFPLENBQUMvQyxTQUFTLENBQUNnRSxNQUFNLENBQUNmLEtBQUssQ0FBUyxFQUNoRXZCLEtBQUEsQ0FBQUssYUFBQSxDQUFDYSxZQUFBLENBQUFrQixXQUFXO2NBQ1hDLFdBQVcsRUFBRWpGLEtBQUssQ0FBQ2lFLE9BQU8sQ0FBQy9DLFNBQVMsQ0FBQ2dFLE1BQU0sQ0FBQ0QsV0FBVztjQUN2RDtjQUNBN0UsS0FBSyxFQUFFNUIsS0FBSyxDQUFDeUMsUUFBUTtjQUNyQm1ELElBQUksRUFBQyxVQUFVO2NBQ2ZDLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZEk7WUFBVSxFQUNiLENBQ0csRUFDTmhDLEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTzhCLE9BQU8sRUFBQztZQUFFLEdBQUUvRSxLQUFLLENBQUNpRSxPQUFPLENBQUN6RCxRQUFRLENBQUMyRCxLQUFLLENBQVMsRUFDeER2QixLQUFBLENBQUFLLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBa0IsV0FBVztjQUNYWixJQUFJLEVBQUMsVUFBVTtjQUNmYSxXQUFXLEVBQUVqRixLQUFLLENBQUNpRSxPQUFPLENBQUN6RCxRQUFRLENBQUMwRSxNQUFNO2NBQzFDYixPQUFPLEVBQUUyQixhQUFhO2NBQ3RCeEIsUUFBUSxFQUFFdUIsZ0JBQWdCO2NBQUEsR0FDdEJuQjtZQUFVLEVBQ2IsQ0FDRyxFQUNOaEMsS0FBQSxDQUFBSyxhQUFBLENBQUNvQyxNQUFBLENBQUFpQixrQkFBa0I7Y0FBQ2pDLE9BQU8sRUFBRXNCLE1BQU07Y0FBRTNCLFFBQVEsRUFBRUEsUUFBUTtjQUFFMEIsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDakY5QyxLQUFBLENBQUFLLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQWdCLEdBQzlCYixLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBMEQsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxRQUFRO2NBQUNDLE9BQU8sRUFBRW5CO1lBQU8sR0FDakQvRyxLQUFLLENBQUMrQixXQUFXLENBQUNxRCxPQUFPLENBQUMrQyxNQUFNLENBQ3pCLEVBQ1QvRCxLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBMEQsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDN0UsSUFBSSxFQUFDO1lBQVEsR0FDckNuRCxLQUFLLENBQUMrQixXQUFXLENBQUNxRCxPQUFPLENBQUNnRCxNQUFNLENBQ3pCLENBQ0osQ0FDQSxDQUNGLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RkEsSUFBQWhFLEtBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFnSCxNQUFBLEdBQUFoSCxPQUFBO1VBQ00sU0FBVTBJLFlBQVlBLENBQUM7WUFBRUM7VUFBVyxDQUFFO1lBQzNDLE1BQU07Y0FBRXRJO1lBQUssQ0FBRSxHQUFHLElBQUFzRSxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUVsQyxNQUFNLENBQUNxRSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHcEUsS0FBSyxDQUFDMkIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxJQUFBWSxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDckgsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QndJLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixNQUFNQyxHQUFHLEdBQUdBLENBQUM7Y0FBRUMsUUFBUTtjQUFFQztZQUFRLENBQUUsS0FBSTtjQUN0QyxNQUFNQyxRQUFRLEdBQUczQyxLQUFLLElBQUc7Z0JBQ3hCQSxLQUFLLENBQUM0QyxlQUFlLEVBQUU7Z0JBQ3ZCN0ksS0FBSyxDQUFDMkksUUFBUSxDQUFDLEdBQUd4QyxTQUFTO2dCQUMzQm5HLEtBQUssQ0FBQzBELFVBQVUsQ0FBQztrQkFDaEJqQixRQUFRLEVBQUV6QyxLQUFLLENBQUN5QyxRQUFRO2tCQUN4QlQsUUFBUSxFQUFFaEMsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFQyxFQUFFO2tCQUM1QjBCLEtBQUssRUFBRTNELEtBQUssQ0FBQzJEO2lCQUNiLENBQUM7Y0FDSCxDQUFDO2NBRUQsT0FDQ1MsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUM7Y0FBWSxHQUMzQmIsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUMsT0FBTztnQkFBQ2lELE9BQU8sRUFBRUk7Y0FBVyxHQUMxQ0ksUUFBUSxFQUFFLEdBQUcsQ0FDUixFQUNQdEUsS0FBQSxDQUFBSyxhQUFBO2dCQUFReUQsT0FBTyxFQUFFVTtjQUFRLE9BQVksQ0FDL0I7WUFFVCxDQUFDO1lBRUQsT0FDQ3hFLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBNkIsR0FDMUNqRixLQUFLLENBQUNnQyxRQUFRLEdBQUdvQyxLQUFBLENBQUFLLGFBQUEsQ0FBQ2dFLEdBQUc7Y0FBQ0UsUUFBUSxFQUFDO1lBQVUsR0FBRTNJLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRTRELElBQUksQ0FBTyxHQUFHLElBQUksRUFDN0U1RixLQUFLLENBQUMyRCxLQUFLLEdBQUdTLEtBQUEsQ0FBQUssYUFBQSxDQUFDZ0UsR0FBRztjQUFDRSxRQUFRLEVBQUM7WUFBTyxHQUFFM0ksS0FBSyxDQUFDMkQsS0FBSyxDQUFPLEdBQUcsSUFBSSxDQUMxRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBMkIsWUFBQSxHQUFBM0YsT0FBQTtVQUVBLElBQUF5RSxLQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFFTSxTQUFVbUksa0JBQWtCQSxDQUFDO1lBQ2xDdEMsUUFBUTtZQUNSSyxPQUFPLEdBQUcsRUFBRTtZQUNacUI7VUFBUyxDQUtUO1lBQ0EsTUFBTTtjQUNMMUYsS0FBSyxFQUFFO2dCQUNOaUUsT0FBTyxFQUFFO2tCQUFFOUIsS0FBSyxFQUFFbkM7Z0JBQUs7Y0FBRSxDQUN6QjtjQUNEeUYsTUFBTTtjQUNOakg7WUFBSyxDQUNMLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRXBCLE1BQU04QixRQUFRLEdBQUlDLEtBQTJDLElBQUk7Y0FDaEVpQixTQUFTLENBQUNELE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFdEQsS0FBSyxFQUFFc0MsS0FBSyxDQUFDQyxNQUFNLENBQUN0RTtjQUFLLENBQUUsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNd0UsVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRVosUUFBUSxJQUFJLENBQUNLLE9BQU8sQ0FBQ1M7WUFBTSxDQUFFO1lBRTlELE9BQ0NsQyxLQUFBLENBQUFLLGFBQUEsY0FDQ0wsS0FBQSxDQUFBSyxhQUFBO2NBQU84QixPQUFPLEVBQUM7WUFBRSxHQUFFL0UsS0FBSyxDQUFDbUUsS0FBSyxDQUFTLEVBQ3ZDdkIsS0FBQSxDQUFBSyxhQUFBLENBQUNhLFlBQUEsQ0FBQWtCLFdBQVc7Y0FDWFosSUFBSSxFQUFDLE9BQU87Y0FDWmEsV0FBVyxFQUFFakYsS0FBSyxDQUFDa0YsTUFBTTtjQUN6QmIsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCRyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkSTtZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBN0IsR0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFnSCxNQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQXlFLEtBQUEsR0FBQXpFLE9BQUE7VUFFQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFtSixRQUFBLEdBQUFuSixPQUFBO1VBQ0EsSUFBQW9KLEtBQUEsR0FBQXBKLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVBLElBQUFxSixPQUFBLEdBQUFySixPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDNkIsS0FBSyxFQUFFb0gsUUFBUSxDQUFDLEdBQUc3RSxLQUFLLENBQUMyQixRQUFRLENBQVUvRixLQUFLLENBQUM2QixLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDK0IsUUFBUSxDQUFDLEdBQUdRLEtBQUssQ0FBQzJCLFFBQVEsQ0FBVS9GLEtBQUssQ0FBQzRELFFBQVEsQ0FBQztZQUMxRCxNQUFNO2NBQUVwQztZQUFLLENBQUUsR0FBR3hCLEtBQUs7WUFDdkIsTUFBTSxDQUFDa0osU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRy9FLEtBQUssQ0FBQzJCLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsSUFBQVksTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3JILEtBQUssQ0FBQyxFQUFFLE1BQU1pSixRQUFRLENBQUNqSixLQUFLLENBQUM2QixLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPdUMsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQTZFLFVBQVUsT0FBRztZQUVqQyxNQUFNeEgsS0FBSyxHQUFHO2NBQUVKLEtBQUs7Y0FBRXhCLEtBQUs7Y0FBRTREO1lBQVEsQ0FBRTtZQUN4QyxNQUFNeUYsUUFBUSxHQUFHQSxDQUFBLEtBQU1GLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDL0MsT0FDQzlFLEtBQUEsQ0FBQUssYUFBQSxDQUFDSCxRQUFBLENBQUFQLFdBQVcsQ0FBQ3VGLFFBQVE7Y0FBQzFILEtBQUssRUFBRUE7WUFBSyxHQUNqQ3dDLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFnRixhQUFhLFFBQ2JuRixLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBaUYsU0FBUztjQUFDMUUsS0FBSyxFQUFFOUUsS0FBSyxDQUFDd0IsS0FBSyxDQUFDc0Q7WUFBSyxHQUNsQ1YsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQTBELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFbUI7WUFBUSxHQUN6Q3JKLEtBQUssQ0FBQytCLFdBQVcsQ0FBQ3FELE9BQU8sQ0FBQ0ssT0FBTyxDQUMxQixDQUNFLEVBQ1pyQixLQUFBLENBQUFLLGFBQUEsQ0FBQ3VFLE9BQUEsQ0FBQVgsWUFBWTtjQUFDQyxXQUFXLEVBQUVlO1lBQVEsRUFBSSxFQUN0Q0gsU0FBUyxJQUFJOUUsS0FBQSxDQUFBSyxhQUFBLENBQUNxRSxRQUFBLENBQUFoQyxXQUFXO2NBQUNDLE9BQU8sRUFBRXNDO1lBQVEsRUFBSSxFQUVoRGpGLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0UsS0FBQSxDQUFBVSxJQUFJLE9BQUcsQ0FDTyxDQUNNO1VBRXpCOzs7Ozs7Ozs7OztVQ3RDQTs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUE3SSxPQUFBO1lBQ0FjLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBZ0ksTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUFrSyxXQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQW1LLFlBQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBeUUsS0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU0sU0FBVW9LLGFBQWFBLENBQUM7WUFBRTVIO1VBQUksQ0FBRTtZQUNyQyxNQUFNO2NBQUVYO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUM4RixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHN0YsS0FBSyxDQUFDMkIsUUFBUSxDQUFDO2NBQUVtRSxJQUFJLEVBQUUsS0FBSztjQUFFL0g7WUFBSSxDQUFFLENBQUM7WUFFdkUsTUFBTW1HLFdBQVcsR0FBR0EsQ0FBQSxLQUFNMkIsWUFBWSxDQUFDO2NBQUU5SCxJQUFJO2NBQUUrSCxJQUFJLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDRTtZQUFJLENBQUUsQ0FBQztZQUN2RSxNQUFNQyxLQUFLLEdBQUdsRSxLQUFLLElBQUc7Y0FDckJBLEtBQUssQ0FBQzRDLGVBQWUsRUFBRTtjQUN2Qm9CLFlBQVksQ0FBQztnQkFBRUMsSUFBSSxFQUFFLElBQUk7Z0JBQUUvSDtjQUFJLENBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FDQ2lDLEtBQUEsQ0FBQUssYUFBQSxDQUFBTCxLQUFBLENBQUFnRyxRQUFBLFFBQ0NoRyxLQUFBLENBQUFLLGFBQUEsQ0FBQ29GLFdBQUEsQ0FBQVEsVUFBVTtjQUFDbEksSUFBSSxFQUFFQSxJQUFJO2NBQUU4QyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUN6RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRThJLE1BQU0sRUFBQztZQUFZLEdBQ25GbEcsS0FBQSxDQUFBSyxhQUFBLENBQUNvRixXQUFBLENBQUFVLGdCQUFnQjtjQUFDcEksSUFBSSxFQUFFQTtZQUFJLEdBQzNCaUMsS0FBQSxDQUFBSyxhQUFBLENBQUNvRixXQUFBLENBQUFXLHVCQUF1QixRQUN2QnBHLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBZ0MsR0FDN0M5QyxJQUFJLEVBQUVzSSxVQUFVLEVBQUVDLFVBQVUsSUFDNUJ0RyxLQUFBLENBQUFLLGFBQUEsQ0FBQ21GLE1BQUEsQ0FBQWUsYUFBYTtjQUNiM0YsSUFBSSxFQUFDLE9BQU87Y0FDWkYsS0FBSyxFQUFFdEQsS0FBSyxDQUFDNEQsT0FBTyxDQUFDd0YsSUFBSTtjQUN6QjFFLE1BQU0sRUFBQyxRQUFRO2NBQ2ZmLElBQUksRUFBRWhELElBQUksQ0FBQ3NJLFVBQVUsQ0FBQ0M7WUFBVSxFQUVqQyxFQUVEdEcsS0FBQSxDQUFBSyxhQUFBLENBQUNtRixNQUFBLENBQUFlLGFBQWE7Y0FBQ3pDLE9BQU8sRUFBRWlDLEtBQUs7Y0FBRW5GLElBQUksRUFBQyxPQUFPO2NBQUNGLEtBQUssRUFBRXRELEtBQUssQ0FBQzRELE9BQU8sQ0FBQ3lGO1lBQUcsRUFBSSxDQUNuRSxDQUNtQixDQUNSLENBQ1AsRUFDWmIsU0FBUyxDQUFDRSxJQUFJLElBQUk5RixLQUFBLENBQUFLLGFBQUEsQ0FBQ3FGLFlBQUEsQ0FBQWdCLGVBQWU7Y0FBQzNJLElBQUksRUFBRUEsSUFBSTtjQUFFNEUsT0FBTyxFQUFFdUIsV0FBVztjQUFFOUcsS0FBSyxFQUFFQSxLQUFLO2NBQUUyQixJQUFJLEVBQUM7WUFBVyxFQUFHLENBQ3JHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFpQixLQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBb0wsS0FBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUFvSixLQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQTRFLEdBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBZ0gsTUFBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUFxTCxNQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFFTSxTQUFVOEosSUFBSUEsQ0FBQyxFQUFFO1lBQ3RCLE1BQU07Y0FBRXpKLEtBQUs7Y0FBRXdCO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUN6QyxNQUFNK0csY0FBYyxHQUFHekosS0FBSyxDQUFDb0QsS0FBSyxDQUFDckQsU0FBUztZQUM1QyxNQUFNMkosVUFBVSxHQUFHbEwsS0FBSyxDQUFDdUIsU0FBUztZQUNsQyxNQUFNLENBQUM0SixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHaEgsS0FBSyxDQUFDMkIsUUFBUSxDQUFDO2NBQ3RDdEMsS0FBSyxFQUFFeUgsVUFBVSxDQUFDekgsS0FBSztjQUN2QkcsUUFBUSxFQUFFc0gsVUFBVSxDQUFDdEgsUUFBUTtjQUM3QnlILEtBQUssRUFBRUgsVUFBVSxDQUFDekgsS0FBSyxFQUFFNkM7YUFDekIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFBSyxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDNkQsVUFBVSxDQUFDLEVBQUUsTUFBSztjQUM1QkUsT0FBTyxDQUFDO2dCQUNQLEdBQUdELElBQUk7Z0JBQ1AxSCxLQUFLLEVBQUV5SCxVQUFVLENBQUN6SCxLQUFLO2dCQUN2QkcsUUFBUSxFQUFFc0gsVUFBVSxDQUFDdEgsUUFBUTtnQkFDN0J5SCxLQUFLLEVBQUVILFVBQVUsQ0FBQ3pILEtBQUssRUFBRTZDO2VBQ3pCLENBQUM7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFBSyxNQUFBLENBQUFVLFNBQVMsRUFDUixDQUFDckgsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKc0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUV2TCxLQUFLLENBQUN3TCxZQUFZLENBQUM7Y0FDekRKLE9BQU8sQ0FBQztnQkFDUCxHQUFHRCxJQUFJO2dCQUNQMUgsS0FBSyxFQUFFeUgsVUFBVSxDQUFDekgsS0FBSztnQkFDdkJHLFFBQVEsRUFBRXNILFVBQVUsQ0FBQ3RILFFBQVE7Z0JBQzdCeUgsS0FBSyxFQUFFSCxVQUFVLENBQUN6SCxLQUFLLEVBQUU2QztlQUN6QixDQUFDO1lBQ0gsQ0FBQyxFQUNELGtCQUFrQixDQUNsQjtZQUNELElBQUk2RSxJQUFJLENBQUN2SCxRQUFRLElBQUksQ0FBQ3VILElBQUksQ0FBQ0UsS0FBSyxFQUFFO2NBQ2pDLE9BQ0NqSCxLQUFBLENBQUFLLGFBQUEsQ0FBQ3VHLE1BQUEsQ0FBQVMsS0FBSztnQkFBQ3hHLFNBQVMsRUFBQztjQUFtQixHQUNuQ2IsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQXFILE9BQU87Z0JBQUNDLE1BQU07Y0FBQSxFQUFHLENBQ1g7O1lBSVYsSUFBSSxDQUFDVCxVQUFVLENBQUN6SCxLQUFLLEVBQUU2QyxNQUFNLElBQUksQ0FBQzRFLFVBQVUsQ0FBQ3RILFFBQVEsRUFBRTtjQUN0RCxPQUFPUSxLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBRyxTQUFTO2dCQUFDQyxJQUFJLEVBQUVzRyxjQUFjLENBQUNuRyxLQUFLO2dCQUFFQyxXQUFXLEVBQUVrRyxjQUFjLENBQUNsRyxXQUFXO2dCQUFFQyxJQUFJLEVBQUM7Y0FBTSxFQUFHOztZQUd0RyxNQUFNNEcsVUFBVSxHQUFHVixVQUFVLENBQUN0SCxRQUFRLElBQUk1RCxLQUFLLENBQUN3TCxZQUFZLElBQUl4TCxLQUFLLENBQUM0RCxRQUFRO1lBQzlFLE1BQU1pSSxHQUFHLEdBQUcsZ0JBQWdCRCxVQUFVLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUU5RCxPQUNDeEgsS0FBQSxDQUFBSyxhQUFBLENBQUFMLEtBQUEsQ0FBQWdHLFFBQUEsUUFDQ2hHLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0UsS0FBQSxDQUFBVSxJQUFZO2NBQUN4RSxTQUFTLEVBQUU0RyxHQUFHO2NBQUVwSSxLQUFLLEVBQUV5SCxVQUFVLENBQUN6SCxLQUFLO2NBQUVxSSxPQUFPLEVBQUVmLEtBQUEsQ0FBQWhCO1lBQWEsRUFBSSxDQUMvRTtVQUVMIiwiaWdub3JlTGlzdCI6W119