System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/reactive@0.0.1/entities/collection", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
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
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_9 = _aimpactReactive001EntitiesCollection;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 2467656386,
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
        hash: 777714064,
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
        hash: 2653343886,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJvbiIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJ0eXBlIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJzZXQiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJpdGVtcyIsImdldEZpbHRlcnMiLCJsZXZlbCIsImZldGNoaW5nIiwic3BlY3MiLCJnZXRBdWRpZW5jZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImxhYmVsIiwibmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwibGVuZ3RoIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfaG9va3MiLCJfbW9kYWwiLCJfbGV2ZWwiLCJGaWx0ZXJzRm9ybSIsIm9uQ2xvc2UiLCJzZXRGZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZUJpbmRlciIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiX2ZpbHRlcnMiLCJfbGlzdCIsIl9sYWJlbHMiLCJzZXRSZWFkeSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hpbmdEYXRhIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiaXNGZXRjaGluZyIsImNscyIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2luZGV4LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xhYmVscy50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sZXZlbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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