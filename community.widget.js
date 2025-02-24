System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.8/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/reactive@0.0.1/entities/collection", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.8/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.8/components/icons", "@aimpact/ailearn-app@0.3.8/components/module-card", "@aimpact/ailearn-app@0.3.8/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp038MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp038MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk110EntitiesLearningModules;
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
    }, function (_aimpactAilearnApp038ComponentsUi) {
      dependency_12 = _aimpactAilearnApp038ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_14 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp038ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp038ComponentsIcons;
    }, function (_aimpactAilearnApp038ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp038ComponentsModuleCard;
    }, function (_aimpactAilearnApp038ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp038ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.8"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.8/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/reactive/entities/collection', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.3.8/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.8/community.widget');
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
        hash: 2793767174,
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
              _mainLayout.LayoutBroker.set({
                model: undefined
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwiZ2xvYmFsVGhpcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsIkxheW91dEJyb2tlciIsInNldCIsIm1vZGVsIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwiaXRlbXMiLCJnZXRGaWx0ZXJzIiwiZmV0Y2hpbmciLCJzcGVjcyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9ob29rcyIsIl9tb2RhbCIsIl9sZXZlbCIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInNldEZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwibGV2ZWxzIiwic2V0TGV2ZWxzIiwidXNlQmluZGVyIiwib25TZWFyY2giLCJvbkF1ZGllbmNlQ2hhbmdlIiwiYXVkaWVuY2VJdGVtcyIsIk1vZGFsIiwiZmlsdGVyIiwiYWN0aW9uIiwib25TdWJtaXQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiY2FuY2VsIiwic2VhcmNoIiwiRmlsdGVyTGFiZWxzIiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJUYWciLCJjaGlsZHJlbiIsInByb3BlcnR5Iiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNMZXZlbCIsIl9maWx0ZXJzIiwiX2xpc3QiLCJfbGFiZWxzIiwic2V0UmVhZHkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlTG9hZGVyIiwib25Ub2dnbGUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eUl0ZW0iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvcGVuIiwib25Vc2UiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsIkFwcEljb25CdXR0b24iLCJ0ZXN0IiwidXNlIiwiT3duZXJBc3NpZ25Gb3JtIiwiX2l0ZW0iLCJfZW1wdHkiLCJwcmV2ZW50TWVzc2FnZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsInRvdGFsIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiaXNGZXRjaGluZyIsImZldGNoaW5nRGF0YSIsImNscyIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2luZGV4LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xhYmVscy50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sZXZlbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQ0wsR0FBRyxDQUFDO1lBQ3RCO1lBRUFNLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkQsSUFBQWlCLFdBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixnQkFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLGVBQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBeUIsS0FBQSxHQUFBekIsT0FBQTtVQWFNLE1BQU9PLFlBQWEsU0FBUWMsTUFBQSxDQUFBSyxhQUEyQjtZQUM1RCxDQUFBQyxNQUFPO1lBRVAsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQWpCLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUNBLENBQUFrQixLQUFNLEdBQXNCLElBQUlOLE1BQUEsQ0FBQU8sWUFBWSxDQUFDTixlQUFBLENBQUFPLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQzlELElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDSyxLQUFLO1lBQ3hDO1lBRUEsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUNILEtBQUs7WUFDL0I7WUFFQSxDQUFBSSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJQSxRQUFRQSxDQUFDSixLQUFhO2NBQ3pCLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQUksUUFBUyxFQUFFQyxFQUFFLEVBQUU7Y0FDbEMsSUFBSSxDQUFDLENBQUFELFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsU0FBVSxDQUFDSSxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDRixFQUFFLEtBQUtMLEtBQUssQ0FBQztjQUVoRSxJQUFJLENBQUNRLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztjQUNoQyxJQUFJLENBQUNBLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFNQUMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0I7Y0FBQyxDQUFFLENBQUM7Y0FDOUQsSUFBSSxDQUFDLENBQUFQLFdBQVksR0FBRyxJQUFJYixNQUFBLENBQUFPLFlBQVksQ0FBQywyQkFBMkIsQ0FBQztjQUNqRSxJQUFJLENBQUMsQ0FBQU0sV0FBWSxDQUFDUSxLQUFLLEVBQUU7Y0FDekIsSUFBSSxDQUFDLENBQUFoQixTQUFVLEdBQUcsSUFBSU4sZ0JBQUEsQ0FBQXVCLGVBQWUsQ0FBQztnQkFBRUMsSUFBSSxFQUFFO2NBQVcsQ0FBRSxDQUFDO2NBQzVEQyxVQUFVLENBQUMxQyxLQUFLLEdBQUcsSUFBSTtjQUN2QixJQUFJLENBQUMyQyxRQUFRLEdBQUd2QixLQUFBLENBQUF3QixTQUFTLENBQUNDLE9BQU87WUFDbEM7WUFFQW5DLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQWMsS0FBTSxDQUFDc0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQztjQUMxQyxJQUFJLENBQUNBLFdBQVcsRUFBRTtZQUNuQjtZQUNBQSxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF2QixLQUFNLENBQUNLLEtBQUssRUFBRTtjQUV4QixJQUFJLENBQUNtQixZQUFZLEVBQUU7WUFDcEIsQ0FBQztZQUVEbkMsS0FBS0EsQ0FBQTtjQUNKLEtBQUssQ0FBQ2dCLEtBQUssR0FBRyxLQUFLO2NBQ25CLElBQUksQ0FBQ29CLEtBQUssR0FBR0MsU0FBUztjQUN0QixJQUFJLENBQUNsQixRQUFRLEdBQUdrQixTQUFTO2NBQ3pCLElBQUksQ0FBQyxDQUFBMUIsS0FBTSxDQUFDMkIsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNKLFdBQVcsQ0FBQztZQUM1QztZQUVBLE1BQU1wQyxJQUFJQSxDQUFDOEIsSUFBSSxHQUFHLFdBQVc7Y0FDNUIxQixXQUFBLENBQUFxQyxZQUFZLENBQUNDLEdBQUcsQ0FBQztnQkFBRUMsS0FBSyxFQUFFSjtjQUFTLENBQUUsQ0FBQztjQUN0QyxNQUFNLElBQUksQ0FBQyxDQUFBM0IsU0FBVSxDQUFDWixJQUFJLENBQUM7Z0JBQzFCOEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCYyxLQUFLLEVBQUUsV0FBVztnQkFDbEJaLFFBQVEsRUFBRSxJQUFJO2dCQUNkWCxRQUFRLEVBQUU7ZUFDVixDQUFDO2NBQ0YsTUFBTUYsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFQLFNBQVUsQ0FBQ2lDLFlBQVksQ0FBQ3BDLEtBQUEsQ0FBQXdCLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO2NBQ3ZFOUIsV0FBQSxDQUFBcUMsWUFBWSxDQUFDQyxHQUFHLENBQUM7Z0JBQ2hCSSxPQUFPLEVBQUUsS0FBSztnQkFDZEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMzQixXQUFXLENBQUM0QixRQUFRLENBQUNwQyxTQUFTLENBQUM7ZUFDbEQsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBTyxTQUFVLEdBQUdBLFNBQVMsQ0FBQzhCLEtBQUs7Y0FDakMsS0FBSyxDQUFDL0IsS0FBSyxHQUFHLElBQUk7WUFDbkI7WUFFQTJCLFlBQVksR0FBRyxNQUFNYixRQUFRLElBQUc7Y0FDL0IsTUFBTWIsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFQLFNBQVUsQ0FBQ2lDLFlBQVksQ0FBQ2IsUUFBUSxDQUFDO2NBRTlELElBQUksQ0FBQyxDQUFBYixTQUFVLEdBQUdBLFNBQVMsQ0FBQzhCLEtBQUs7WUFDbEMsQ0FBQztZQUVEQyxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFbEIsUUFBUTtjQUFFWCxRQUFRO2NBQUVpQjtZQUFLLENBQUUsS0FBSTtjQUNwRCxJQUFJLENBQUNhLFFBQVEsR0FBRyxJQUFJO2NBRXBCLElBQUksQ0FBQ25CLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUNYLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUNpQixLQUFLLEdBQUdBLEtBQUs7Y0FFbEIsTUFBTWMsS0FBSyxHQUFHO2dCQUNidEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCYyxLQUFLLEVBQUUsV0FBVztnQkFDbEJaLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7Z0JBQ3ZCWCxRQUFRO2dCQUNSaUI7ZUFDQTtjQUVELE1BQU0sSUFBSSxDQUFDLENBQUExQixTQUFVLENBQUNaLElBQUksQ0FBQ29ELEtBQUssQ0FBQztjQUVqQyxJQUFJLENBQUNELFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFREUsV0FBV0EsQ0FBQ2hDLFFBQVE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsU0FBVSxDQUFDSSxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDRixFQUFFLEtBQUtELFFBQVEsQ0FBQztZQUMxRDs7VUFDQWxCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hJRCxJQUFBK0QsTUFBQSxHQUFBdEUsT0FBQTtVQVdPLE1BQU11RSxXQUFXLEdBQUFwRCxPQUFBLENBQUFvRCxXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUNwRCxPQUFBLENBQUF1RCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFLElBQUFFLEtBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsV0FBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLEdBQUEsR0FBQS9FLE9BQUE7VUFFTSxTQUFVZ0YsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVuRDtZQUFLLENBQUUsR0FBRyxJQUFBaUQsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsT0FDQ0UsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQUcsU0FBUztjQUFDQyxJQUFJLEVBQUV0RCxLQUFLLENBQUN1RCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUUxRCxLQUFLLENBQUN1RCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsV0FBVztjQUFFQyxJQUFJLEVBQUM7WUFBTSxHQUNwR1osS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFvQyxHQUNsRGIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUMscUJBQXFCO2NBQUNGLFNBQVMsRUFBQztZQUFzQixHQUMvRDVELEtBQUssQ0FBQytELE9BQU8sQ0FBQ0MsTUFBTSxDQUNmLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFDLFlBQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBNEUsS0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBRU0sU0FBVStGLGFBQWFBLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBQ3pDLE1BQU07Y0FDTG5FLEtBQUssRUFBRTtnQkFDTm9FLE9BQU8sRUFBRTtrQkFBRTVELFFBQVEsRUFBRVI7Z0JBQUs7Y0FBRSxDQUM1QjtjQUNEeEI7WUFBSyxDQUNMLEdBQUcsSUFBQXlFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRXBCLE1BQU1ULEtBQUssR0FBVTVELEtBQUssQ0FBQzhCLFNBQVMsQ0FBQytELEdBQUcsQ0FBQzdELFFBQVEsS0FBSztjQUFFSixLQUFLLEVBQUVJLFFBQVEsQ0FBQ0MsRUFBRTtjQUFFNkQsS0FBSyxFQUFFOUQsUUFBUSxDQUFDK0Q7WUFBSSxDQUFFLENBQUMsQ0FBQztZQUNwRyxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxQixLQUFLLENBQUMyQixRQUFRLENBQUN0QyxLQUFLLENBQUM7WUFHbkQsTUFBTXVDLFFBQVEsR0FBRyxNQUFPQyxLQUEyQyxJQUFJO2NBQ3RFcEcsS0FBSyxDQUFDZ0MsUUFBUSxHQUFHb0UsS0FBSyxDQUFDQyxNQUFNLENBQUN6RSxLQUFLO2NBQ25DNUIsS0FBSyxDQUFDcUQsR0FBRyxDQUFDO2dCQUFFSixLQUFLLEVBQUVDO2NBQVMsQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNb0QsVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRXRHLEtBQUssQ0FBQ3VHLEtBQUssSUFBSVosUUFBUSxJQUFJLENBQUNLLE9BQU8sQ0FBQ1E7WUFBTSxDQUFFO1lBRTdFLE9BQ0NqQyxLQUFBLENBQUFLLGFBQUEsY0FDQ0wsS0FBQSxDQUFBSyxhQUFBO2NBQU82QixPQUFPLEVBQUM7WUFBRSxHQUFFakYsS0FBSyxDQUFDc0UsS0FBSyxDQUFTLEVBQ3ZDdkIsS0FBQSxDQUFBSyxhQUFBLENBQUNhLFlBQUEsQ0FBQWlCLFdBQVc7Y0FDWFgsSUFBSSxFQUFDLFVBQVU7Y0FDZlksV0FBVyxFQUFFbkYsS0FBSyxDQUFDb0YsTUFBTTtjQUN6QlosT0FBTyxFQUFFQSxPQUFPO2NBQ2hCRyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkRztZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBYixZQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQWtILE1BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBNkUsV0FBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQTRFLEtBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBOEUsUUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFvSCxNQUFBLEdBQUFwSCxPQUFBO1VBRU0sU0FBVXFILFdBQVdBLENBQUM7WUFBRUMsT0FBTztZQUFFdEIsUUFBUSxHQUFHO1VBQUssQ0FBK0M7WUFDckcsTUFBTTtjQUFFbkUsS0FBSztjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQXlFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3pDLE1BQU0sQ0FBQ1AsUUFBUSxFQUFFb0QsV0FBVyxDQUFDLEdBQUczQyxLQUFLLENBQUMyQixRQUFRLENBQUNsRyxLQUFLLENBQUM4RCxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDcUQsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzdDLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQztjQUMxQ3ZELFFBQVEsRUFBRTNDLEtBQUssQ0FBQzJDLFFBQVE7Y0FDeEJYLFFBQVEsRUFBRWhDLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRUMsRUFBRTtjQUM1QmdCLEtBQUssRUFBRWpELEtBQUssQ0FBQ2lEO2FBQ2IsQ0FBQztZQUVGLE1BQU0sQ0FBQ29FLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcvQyxLQUFLLENBQUMyQixRQUFRLENBQUNsRyxLQUFLLENBQUNnQyxRQUFRLEVBQUVxRixNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNbEIsUUFBUSxHQUFHLE1BQU9DLEtBQTJDLElBQUk7Y0FDdEVwRyxLQUFLLENBQUNxRCxHQUFHLENBQUM7Z0JBQUVWLFFBQVEsRUFBRXlELEtBQUssQ0FBQ0MsTUFBTSxDQUFDekUsS0FBSztnQkFBRUksUUFBUSxFQUFFa0IsU0FBUztnQkFBRUQsS0FBSyxFQUFFQztjQUFTLENBQUUsQ0FBQztjQUNsRmxELEtBQUssQ0FBQ3dELFlBQVksQ0FBQzRDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDekUsS0FBSyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxJQUFBaUYsTUFBQSxDQUFBVSxTQUFTLEVBQ1IsQ0FBQ3ZILEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmtILFdBQVcsQ0FBQ2xILEtBQUssQ0FBQzhELFFBQVEsQ0FBQztjQUMzQnNELFNBQVMsQ0FBQztnQkFBRSxHQUFHRCxNQUFNO2dCQUFFeEUsUUFBUSxFQUFFM0MsS0FBSyxDQUFDMkM7Y0FBUSxDQUFFLENBQUM7WUFDbkQsQ0FBQyxFQUNELENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQzlCO1lBRUQsTUFBTTJELFVBQVUsR0FBRztjQUFFQSxVQUFVLEVBQUVYO1lBQVEsQ0FBRTtZQUMzQyxNQUFNSyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNILEdBQUcsQ0FBQzFELElBQUksS0FBSztjQUFFUCxLQUFLLEVBQUVPLElBQUk7Y0FBRTJELEtBQUssRUFBRXRFLEtBQUssQ0FBQ29FLE9BQU8sQ0FBQ2hELFNBQVMsQ0FBQ1QsSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBRWpHLE1BQU1xRixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCeEgsS0FBSyxDQUFDNkQsVUFBVSxDQUFDc0QsTUFBTSxDQUFDO2NBQ3hCRixPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsTUFBTVEsZ0JBQWdCLEdBQUcsTUFBT3JCLEtBQTJDLElBQUk7Y0FDOUVnQixTQUFTLENBQUM7Z0JBQUUsR0FBR0QsTUFBTTtnQkFBRW5GLFFBQVEsRUFBRW9FLEtBQUssQ0FBQ0MsTUFBTSxDQUFDekU7Y0FBSyxDQUFFLENBQUM7Y0FDdEQsTUFBTUksUUFBUSxHQUFHaEMsS0FBSyxDQUFDZ0UsV0FBVyxDQUFDb0MsS0FBSyxDQUFDQyxNQUFNLENBQUN6RSxLQUFLLENBQUM7Y0FDdEQwRixTQUFTLENBQUN0RixRQUFRLENBQUNxRixNQUFNLENBQUM7Y0FDMUJySCxLQUFLLENBQUNxRCxHQUFHLENBQUM7Z0JBQUVKLEtBQUssRUFBRUM7Y0FBUyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU13RSxhQUFhLEdBQVUxSCxLQUFLLENBQUM4QixTQUFTLENBQUMrRCxHQUFHLENBQUM3RCxRQUFRLEtBQUs7Y0FBRUosS0FBSyxFQUFFSSxRQUFRLENBQUNDLEVBQUU7Y0FBRTZELEtBQUssRUFBRTlELFFBQVEsQ0FBQytEO1lBQUksQ0FBRSxDQUFDLENBQUM7WUFFNUcsT0FDQ3hCLEtBQUEsQ0FBQUssYUFBQSxDQUFDa0MsTUFBQSxDQUFBYSxLQUFLO2NBQUN0SCxJQUFJO2NBQUM0RyxPQUFPLEVBQUVBO1lBQU8sR0FDM0IxQyxLQUFBLENBQUFLLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDYixLQUFBLENBQUFLLGFBQUEsaUJBQ0NMLEtBQUEsQ0FBQUssYUFBQSxhQUFLcEQsS0FBSyxDQUFDb0csTUFBTSxDQUFDM0MsS0FBSyxDQUFNLEVBQzdCVixLQUFBLENBQUFLLGFBQUEsZUFBT3BELEtBQUssQ0FBQ29HLE1BQU0sQ0FBQzFDLFdBQVcsQ0FBUSxDQUMvQixFQUNUWCxLQUFBLENBQUFLLGFBQUE7Y0FBTWlELE1BQU0sRUFBQyxFQUFFO2NBQUNDLFFBQVEsRUFBRU47WUFBUSxHQUNqQ2pELEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTzZCLE9BQU8sRUFBQztZQUFFLEdBQUVqRixLQUFLLENBQUNvRSxPQUFPLENBQUNoRCxTQUFTLENBQUNnRSxNQUFNLENBQUNkLEtBQUssQ0FBUyxFQUNoRXZCLEtBQUEsQ0FBQUssYUFBQSxDQUFDYSxZQUFBLENBQUFpQixXQUFXO2NBQ1hDLFdBQVcsRUFBRW5GLEtBQUssQ0FBQ29FLE9BQU8sQ0FBQ2hELFNBQVMsQ0FBQ2dFLE1BQU0sQ0FBQ0QsV0FBVztjQUN2RDtjQUNBL0UsS0FBSyxFQUFFNUIsS0FBSyxDQUFDMkMsUUFBUTtjQUNyQm9ELElBQUksRUFBQyxVQUFVO2NBQ2ZDLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZEc7WUFBVSxFQUNiLENBQ0csRUFDTi9CLEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTzZCLE9BQU8sRUFBQztZQUFFLEdBQUVqRixLQUFLLENBQUNvRSxPQUFPLENBQUM1RCxRQUFRLENBQUM4RCxLQUFLLENBQVMsRUFDeER2QixLQUFBLENBQUFLLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBaUIsV0FBVztjQUNYWCxJQUFJLEVBQUMsVUFBVTtjQUNmWSxXQUFXLEVBQUVuRixLQUFLLENBQUNvRSxPQUFPLENBQUM1RCxRQUFRLENBQUM0RSxNQUFNO2NBQzFDWixPQUFPLEVBQUUwQixhQUFhO2NBQ3RCOUYsS0FBSyxFQUFFdUYsTUFBTSxDQUFDbkYsUUFBUTtjQUN0Qm1FLFFBQVEsRUFBRXNCLGdCQUFnQjtjQUFBLEdBQ3RCbkI7WUFBVSxFQUNiLENBQ0csRUFDTi9CLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUMsTUFBQSxDQUFBZ0Isa0JBQWtCO2NBQ2xCbkcsS0FBSyxFQUFFdUYsTUFBTSxDQUFDbEUsS0FBSztjQUNuQitDLE9BQU8sRUFBRXFCLE1BQU07Y0FDZjFCLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnlCLFNBQVMsRUFBRUE7WUFBUyxFQUNuQixFQUNGN0MsS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUM5QmIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQXdELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsUUFBUTtjQUFDQyxPQUFPLEVBQUVsQjtZQUFPLEdBQ2pEakgsS0FBSyxDQUFDK0IsV0FBVyxDQUFDd0QsT0FBTyxDQUFDNkMsTUFBTSxDQUN6QixFQUNUN0QsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQXdELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3hGLElBQUksRUFBQztZQUFRLEdBQ3JDekMsS0FBSyxDQUFDK0IsV0FBVyxDQUFDd0QsT0FBTyxDQUFDOEMsTUFBTSxDQUN6QixDQUNKLENBQ0EsQ0FDRixDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0ZBLElBQUE5RCxLQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQThFLFFBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNNLFNBQVUySSxZQUFZQSxDQUFDO1lBQUVDO1VBQVcsQ0FBRTtZQUMzQyxNQUFNO2NBQUV2STtZQUFLLENBQUUsR0FBRyxJQUFBeUUsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFFbEMsTUFBTSxDQUFDbUUsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2xFLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBQVcsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3ZILEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJ5SSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsR0FBRyxHQUFHQSxDQUFDO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUSxDQUFFLEtBQUk7Y0FDdEMsTUFBTUMsUUFBUSxHQUFHekMsS0FBSyxJQUFHO2dCQUN4QkEsS0FBSyxDQUFDMEMsZUFBZSxFQUFFO2dCQUN2QjlJLEtBQUssQ0FBQzRJLFFBQVEsQ0FBQyxHQUFHMUYsU0FBUztnQkFDM0JsRCxLQUFLLENBQUM2RCxVQUFVLENBQUM7a0JBQ2hCbEIsUUFBUSxFQUFFM0MsS0FBSyxDQUFDMkMsUUFBUTtrQkFDeEJYLFFBQVEsRUFBRWhDLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRUMsRUFBRTtrQkFDNUJnQixLQUFLLEVBQUUsQ0FBQyxDQUFDakQsS0FBSyxDQUFDZ0MsUUFBUSxHQUFHaEMsS0FBSyxDQUFDaUQsS0FBSyxHQUFHQztpQkFDeEMsQ0FBQztjQUNILENBQUM7Y0FFRCxPQUNDcUIsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUM7Y0FBWSxHQUMzQmIsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUMsT0FBTztnQkFBQytDLE9BQU8sRUFBRUk7Y0FBVyxHQUMxQ0ksUUFBUSxFQUFFLEdBQUcsQ0FDUixFQUNQcEUsS0FBQSxDQUFBSyxhQUFBO2dCQUFRdUQsT0FBTyxFQUFFVTtjQUFRLE9BQVksQ0FDL0I7WUFFVCxDQUFDO1lBQ0QsSUFBSTVGLEtBQVU7WUFDZCxNQUFNOEYsUUFBUSxHQUFHL0ksS0FBSyxDQUFDaUQsS0FBSyxJQUFJakQsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFcUYsTUFBTTtZQUN0RCxJQUFJMEIsUUFBUSxFQUFFO2NBQ2I5RixLQUFLLEdBQUdqRCxLQUFLLENBQUNnQyxRQUFRLENBQUNxRixNQUFNLENBQUNuRixJQUFJLENBQUNlLEtBQUssSUFBSUEsS0FBSyxDQUFDaEIsRUFBRSxLQUFLakMsS0FBSyxDQUFDaUQsS0FBSyxDQUFDOztZQUV0RSxPQUNDc0IsS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUE2QixHQUMxQ3BGLEtBQUssQ0FBQzJDLFFBQVEsR0FBRzRCLEtBQUEsQ0FBQUssYUFBQSxDQUFDOEQsR0FBRztjQUFDRSxRQUFRLEVBQUM7WUFBVSxHQUFFNUksS0FBSyxDQUFDMkMsUUFBUSxDQUFPLEdBQUcsSUFBSSxFQUN2RTNDLEtBQUssQ0FBQ2dDLFFBQVEsR0FBR3VDLEtBQUEsQ0FBQUssYUFBQSxDQUFDOEQsR0FBRztjQUFDRSxRQUFRLEVBQUM7WUFBVSxHQUFFNUksS0FBSyxDQUFDZ0MsUUFBUSxFQUFFK0QsSUFBSSxDQUFPLEdBQUcsSUFBSSxFQUM3RWdELFFBQVEsR0FBR3hFLEtBQUEsQ0FBQUssYUFBQSxDQUFDOEQsR0FBRztjQUFDRSxRQUFRLEVBQUM7WUFBTyxHQUFFM0YsS0FBSyxDQUFDNkMsS0FBSyxDQUFPLEdBQUcsSUFBSSxDQUN2RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBTCxZQUFBLEdBQUE5RixPQUFBO1VBRUEsSUFBQTRFLEtBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBOEUsUUFBQSxHQUFBOUUsT0FBQTtVQUVNLFNBQVVvSSxrQkFBa0JBLENBQUM7WUFDbENwQyxRQUFRO1lBQ1JLLE9BQU8sR0FBRyxFQUFFO1lBQ1pwRSxLQUFLO1lBQ0x3RjtVQUFTLENBTVQ7WUFDQSxNQUFNO2NBQ0w1RixLQUFLLEVBQUU7Z0JBQ05vRSxPQUFPLEVBQUU7a0JBQUUzQyxLQUFLLEVBQUV6QjtnQkFBSztjQUFFLENBQ3pCO2NBQ0QyRixNQUFNO2NBQ05uSDtZQUFLLENBQ0wsR0FBRyxJQUFBeUUsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFFcEIsTUFBTThCLFFBQVEsR0FBSUMsS0FBMkMsSUFBSTtjQUNoRWdCLFNBQVMsQ0FBQ0QsTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVsRSxLQUFLLEVBQUVtRCxLQUFLLENBQUNDLE1BQU0sQ0FBQ3pFO2NBQUssQ0FBRSxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELE1BQU0wRSxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFWCxRQUFRLElBQUksQ0FBQ0ssT0FBTyxDQUFDUTtZQUFNLENBQUU7WUFFOUQsT0FDQ2pDLEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTzZCLE9BQU8sRUFBQztZQUFFLEdBQUVqRixLQUFLLENBQUNzRSxLQUFLLENBQVMsRUFDdkN2QixLQUFBLENBQUFLLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBaUIsV0FBVztjQUNYWCxJQUFJLEVBQUMsT0FBTztjQUNaWSxXQUFXLEVBQUVuRixLQUFLLENBQUNvRixNQUFNO2NBQ3pCaEYsS0FBSyxFQUFFQSxLQUFLO2NBQ1pvRSxPQUFPLEVBQUVBLE9BQU8sQ0FBQ0gsR0FBRyxDQUFFMUQsSUFBUyxLQUFNO2dCQUFFUCxLQUFLLEVBQUVPLElBQUksQ0FBQ0YsRUFBRTtnQkFBRTZELEtBQUssRUFBRTNELElBQUksQ0FBQzJEO2NBQUssQ0FBRSxDQUFDLENBQUM7Y0FDNUVLLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RHO1lBQVUsRUFDYixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUE1QixHQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQWtILE1BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBNEUsS0FBQSxHQUFBNUUsT0FBQTtVQUVBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQXFKLFFBQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBc0osS0FBQSxHQUFBdEosT0FBQTtVQUNBLElBQUE2RSxXQUFBLEdBQUE3RSxPQUFBO1VBRUEsSUFBQXVKLE9BQUEsR0FBQXZKLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUM2QixLQUFLLEVBQUVzSCxRQUFRLENBQUMsR0FBRzVFLEtBQUssQ0FBQzJCLFFBQVEsQ0FBVWxHLEtBQUssQ0FBQzZCLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUNpQyxRQUFRLENBQUMsR0FBR1MsS0FBSyxDQUFDMkIsUUFBUSxDQUFVbEcsS0FBSyxDQUFDOEQsUUFBUSxDQUFDO1lBQzFELE1BQU07Y0FBRXRDO1lBQUssQ0FBRSxHQUFHeEIsS0FBSztZQUN2QixNQUFNLENBQUNvSixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHOUUsS0FBSyxDQUFDMkIsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxJQUFBVyxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDdkgsS0FBSyxDQUFDLEVBQUUsTUFBTW1KLFFBQVEsQ0FBQ25KLEtBQUssQ0FBQzZCLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU8wQyxLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBNEUsVUFBVSxPQUFHO1lBRWpDLE1BQU0xSCxLQUFLLEdBQUc7Y0FBRUosS0FBSztjQUFFeEIsS0FBSztjQUFFOEQ7WUFBUSxDQUFFO1lBQ3hDLE1BQU15RixRQUFRLEdBQUdBLENBQUEsS0FBTUYsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUMvQyxPQUNDN0UsS0FBQSxDQUFBSyxhQUFBLENBQUNILFFBQUEsQ0FBQVAsV0FBVyxDQUFDc0YsUUFBUTtjQUFDNUgsS0FBSyxFQUFFQTtZQUFLLEdBQ2pDMkMsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQStFLGFBQWEsUUFDYmxGLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFnRixTQUFTO2NBQUN6RSxLQUFLLEVBQUVqRixLQUFLLENBQUN3QixLQUFLLENBQUN5RDtZQUFLLEdBQ2xDVixLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBd0QsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDRSxPQUFPLEVBQUVvQjtZQUFRLEdBQ3pDdkosS0FBSyxDQUFDK0IsV0FBVyxDQUFDd0QsT0FBTyxDQUFDSyxPQUFPLENBQzFCLENBQ0UsRUFDWnJCLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0UsT0FBQSxDQUFBWixZQUFZO2NBQUNDLFdBQVcsRUFBRWdCO1lBQVEsRUFBSSxFQUN0Q0gsU0FBUyxJQUFJN0UsS0FBQSxDQUFBSyxhQUFBLENBQUNvRSxRQUFBLENBQUFoQyxXQUFXO2NBQUNDLE9BQU8sRUFBRXNDO1lBQVEsRUFBSSxFQUVoRGhGLEtBQUEsQ0FBQUssYUFBQSxDQUFDcUUsS0FBQSxDQUFBVSxJQUFJLE9BQUcsQ0FDTyxDQUNNO1VBRXpCOzs7Ozs7Ozs7OztVQ3RDQTs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUEvSSxPQUFBO1lBQ0FjLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBa0ksTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFvSyxXQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXFLLFlBQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBNEUsS0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBRU0sU0FBVXNLLGFBQWFBLENBQUM7WUFBRTlIO1VBQUksQ0FBRTtZQUNyQyxNQUFNO2NBQUVYO1lBQUssQ0FBRSxHQUFHLElBQUFpRCxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUM2RixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHNUYsS0FBSyxDQUFDMkIsUUFBUSxDQUFDO2NBQUVrRSxJQUFJLEVBQUUsS0FBSztjQUFFakk7WUFBSSxDQUFFLENBQUM7WUFFdkUsTUFBTW9HLFdBQVcsR0FBR0EsQ0FBQSxLQUFNNEIsWUFBWSxDQUFDO2NBQUVoSSxJQUFJO2NBQUVpSSxJQUFJLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDRTtZQUFJLENBQUUsQ0FBQztZQUN2RSxNQUFNQyxLQUFLLEdBQUdqRSxLQUFLLElBQUc7Y0FDckJBLEtBQUssQ0FBQzBDLGVBQWUsRUFBRTtjQUN2QnFCLFlBQVksQ0FBQztnQkFBRUMsSUFBSSxFQUFFLElBQUk7Z0JBQUVqSTtjQUFJLENBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FDQ29DLEtBQUEsQ0FBQUssYUFBQSxDQUFBTCxLQUFBLENBQUErRixRQUFBLFFBQ0MvRixLQUFBLENBQUFLLGFBQUEsQ0FBQ21GLFdBQUEsQ0FBQVEsVUFBVTtjQUFDcEksSUFBSSxFQUFFQSxJQUFJO2NBQUVpRCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUM1RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRWdKLE1BQU0sRUFBQztZQUFZLEdBQ25GakcsS0FBQSxDQUFBSyxhQUFBLENBQUNtRixXQUFBLENBQUFVLGdCQUFnQjtjQUFDdEksSUFBSSxFQUFFQTtZQUFJLEdBQzNCb0MsS0FBQSxDQUFBSyxhQUFBLENBQUNtRixXQUFBLENBQUFXLHVCQUF1QixRQUN2Qm5HLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBZ0MsR0FDN0NqRCxJQUFJLEVBQUV3SSxVQUFVLEVBQUVDLFVBQVUsSUFDNUJyRyxLQUFBLENBQUFLLGFBQUEsQ0FBQ2tGLE1BQUEsQ0FBQWUsYUFBYTtjQUNiMUYsSUFBSSxFQUFDLE9BQU87Y0FDWkYsS0FBSyxFQUFFekQsS0FBSyxDQUFDK0QsT0FBTyxDQUFDdUYsSUFBSTtjQUN6QnhGLElBQUksRUFBRW5ELElBQUksQ0FBQ3dJLFVBQVUsQ0FBQ0M7WUFBVSxFQUVqQyxFQUVEckcsS0FBQSxDQUFBSyxhQUFBLENBQUNrRixNQUFBLENBQUFlLGFBQWE7Y0FBQzFDLE9BQU8sRUFBRWtDLEtBQUs7Y0FBRWxGLElBQUksRUFBQyxPQUFPO2NBQUNGLEtBQUssRUFBRXpELEtBQUssQ0FBQytELE9BQU8sQ0FBQ3dGO1lBQUcsRUFBSSxDQUNuRSxDQUNtQixDQUNSLENBQ1AsRUFDWmIsU0FBUyxDQUFDRSxJQUFJLElBQUk3RixLQUFBLENBQUFLLGFBQUEsQ0FBQ29GLFlBQUEsQ0FBQWdCLGVBQWU7Y0FBQzdJLElBQUksRUFBRUEsSUFBSTtjQUFFOEUsT0FBTyxFQUFFc0IsV0FBVztjQUFFL0csS0FBSyxFQUFFQSxLQUFLO2NBQUVpQixJQUFJLEVBQUM7WUFBVyxFQUFHLENBQ3JHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUE4QixLQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQThFLFFBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBc0wsS0FBQSxHQUFBdEwsT0FBQTtVQUNBLElBQUFzSixLQUFBLEdBQUF0SixPQUFBO1VBQ0EsSUFBQStFLEdBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUF1TCxNQUFBLEdBQUF2TCxPQUFBO1VBQ0EsSUFBQTZFLFdBQUEsR0FBQTdFLE9BQUE7VUFFTSxTQUFVZ0ssSUFBSUEsQ0FBQyxFQUFFO1lBQ3RCLE1BQU07Y0FBRTNKLEtBQUs7Y0FBRXdCO1lBQUssQ0FBRSxHQUFHLElBQUFpRCxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUN6QyxNQUFNOEcsY0FBYyxHQUFHM0osS0FBSyxDQUFDdUQsS0FBSyxDQUFDeEQsU0FBUztZQUM1QyxNQUFNNkosVUFBVSxHQUFHcEwsS0FBSyxDQUFDdUIsU0FBUztZQUNsQyxNQUFNLENBQUM4SixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHL0csS0FBSyxDQUFDMkIsUUFBUSxDQUFDO2NBQ3RDdEMsS0FBSyxFQUFFd0gsVUFBVSxDQUFDeEgsS0FBSztjQUN2QkUsUUFBUSxFQUFFc0gsVUFBVSxDQUFDdEgsUUFBUTtjQUM3QnlILEtBQUssRUFBRUgsVUFBVSxDQUFDeEgsS0FBSyxFQUFFNEM7YUFDekIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFBSyxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDNkQsVUFBVSxDQUFDLEVBQUUsTUFBSztjQUM1QkUsT0FBTyxDQUFDO2dCQUNQLEdBQUdELElBQUk7Z0JBQ1B6SCxLQUFLLEVBQUV3SCxVQUFVLENBQUN4SCxLQUFLO2dCQUN2QkUsUUFBUSxFQUFFc0gsVUFBVSxDQUFDdEgsUUFBUTtnQkFDN0J5SCxLQUFLLEVBQUVILFVBQVUsQ0FBQ3hILEtBQUssRUFBRTRDO2VBQ3pCLENBQUM7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFBSyxNQUFBLENBQUFVLFNBQVMsRUFDUixDQUFDdkgsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKc0wsT0FBTyxDQUFDO2dCQUNQLEdBQUdELElBQUk7Z0JBQ1B6SCxLQUFLLEVBQUV3SCxVQUFVLENBQUN4SCxLQUFLO2dCQUN2QkUsUUFBUSxFQUFFc0gsVUFBVSxDQUFDdEgsUUFBUTtnQkFDN0J5SCxLQUFLLEVBQUVILFVBQVUsQ0FBQ3hILEtBQUssRUFBRTRDO2VBQ3pCLENBQUM7WUFDSCxDQUFDLEVBQ0Qsa0JBQWtCLENBQ2xCO1lBQ0QsSUFBSTZFLElBQUksQ0FBQ3ZILFFBQVEsSUFBSSxDQUFDdUgsSUFBSSxDQUFDRSxLQUFLLEVBQUU7Y0FDakMsT0FDQ2hILEtBQUEsQ0FBQUssYUFBQSxDQUFDc0csTUFBQSxDQUFBTSxLQUFLO2dCQUFDcEcsU0FBUyxFQUFDO2NBQW1CLEdBQ25DYixLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBaUgsT0FBTztnQkFBQ0MsTUFBTTtjQUFBLEVBQUcsQ0FDWDs7WUFJVixJQUFJLENBQUNOLFVBQVUsQ0FBQ3hILEtBQUssRUFBRTRDLE1BQU0sSUFBSSxDQUFDNEUsVUFBVSxDQUFDdEgsUUFBUSxFQUFFO2NBQ3RELE9BQU9TLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFHLFNBQVM7Z0JBQUNDLElBQUksRUFBRXFHLGNBQWMsQ0FBQ2xHLEtBQUs7Z0JBQUVDLFdBQVcsRUFBRWlHLGNBQWMsQ0FBQ2pHLFdBQVc7Z0JBQUVDLElBQUksRUFBQztjQUFNLEVBQUc7O1lBR3RHLE1BQU13RyxVQUFVLEdBQUdQLFVBQVUsQ0FBQ3RILFFBQVEsSUFBSTlELEtBQUssQ0FBQzRMLFlBQVksSUFBSTVMLEtBQUssQ0FBQzhELFFBQVE7WUFDOUUsTUFBTStILEdBQUcsR0FBRyxnQkFBZ0JGLFVBQVUsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTlELE9BQ0NwSCxLQUFBLENBQUFLLGFBQUEsQ0FBQUwsS0FBQSxDQUFBK0YsUUFBQSxRQUNDL0YsS0FBQSxDQUFBSyxhQUFBLENBQUNxRSxLQUFBLENBQUFVLElBQVk7Y0FBQ3ZFLFNBQVMsRUFBRXlHLEdBQUc7Y0FBRWpJLEtBQUssRUFBRXdILFVBQVUsQ0FBQ3hILEtBQUs7Y0FBRWtJLE9BQU8sRUFBRWIsS0FBQSxDQUFBaEI7WUFBYSxFQUFJLENBQy9FO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=