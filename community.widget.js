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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJvbiIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJ0eXBlIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJzZXQiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJpdGVtcyIsImdldEZpbHRlcnMiLCJsZXZlbCIsImZldGNoaW5nIiwic3BlY3MiLCJnZXRBdWRpZW5jZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImxhYmVsIiwibmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwibGVuZ3RoIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfaG9va3MiLCJfbW9kYWwiLCJfbGV2ZWwiLCJGaWx0ZXJzRm9ybSIsIm9uQ2xvc2UiLCJzZXRGZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZUJpbmRlciIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiX2ZpbHRlcnMiLCJfbGlzdCIsIl9sYWJlbHMiLCJzZXRSZWFkeSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidG90YWwiLCJFbXB0eSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmdEYXRhIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQs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