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
        hash: 1927897168,
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