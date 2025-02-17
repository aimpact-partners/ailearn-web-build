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
        hash: 2396681470,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJnbG9iYWxUaGlzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib24iLCJsaXN0ZW5UZXh0cyIsInRyaWdnZXJFdmVudCIsImxldmVsIiwidW5kZWZpbmVkIiwib2ZmIiwidHlwZSIsInJvdXRlIiwibG9hZEF1ZGllbmNlIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwiZ2V0RmlsdGVycyIsImZldGNoaW5nIiwic3BlY3MiLCJnZXRBdWRpZW5jZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImxhYmVsIiwibmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaXNEaXNhYmxlZCIsInNhdmVkIiwibGVuZ3RoIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfaG9va3MiLCJfbW9kYWwiLCJfbGV2ZWwiLCJGaWx0ZXJzRm9ybSIsIm9uQ2xvc2UiLCJzZXRGZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZUJpbmRlciIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiX2ZpbHRlcnMiLCJfbGlzdCIsIl9sYWJlbHMiLCJzZXRSZWFkeSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidG90YWwiLCJFbXB0eSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmdEYXRhIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FB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