System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
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
        hash: 2290105790,
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
              console.log(9, value);
              if (value === this.#audience?.id) return;
              this.#audience = this.#audiences.find(item => item.id === value);
              console.log(12, this.#audience);
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
              console.log(10, 'me dispare', language, audience, level);
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
        hash: 3951594171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FiltersForm = FiltersForm;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          var _level = require("./level");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _modal = require("pragmate-ui/modal");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImZpbmQiLCJpdGVtIiwidHJpZ2dlciIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImZldGNoIiwiTGVhcm5pbmdNb2R1bGVzIiwiZ2xvYmFsVGhpcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsIm9uIiwibGlzdGVuVGV4dHMiLCJzZXRCcmVhZGNydW1iIiwidHJpZ2dlckV2ZW50Iiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsInR5cGUiLCJyb3V0ZSIsImxvYWRBdWRpZW5jZSIsIml0ZW1zIiwiZ2V0RmlsdGVycyIsImxldmVsIiwiZmV0Y2hpbmciLCJnZXRBdWRpZW5jZSIsIl9yZWFjdCIsIkxpc3RDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMaXN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImxhYmVsIiwibmFtZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwic2V0IiwidW5kZWZpbmVkIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwibGVuZ3RoIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfbGV2ZWwiLCJfaG9va3MiLCJfbW9kYWwiLCJGaWx0ZXJzRm9ybSIsIm9uQ2xvc2UiLCJzZXRGZXRjaGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImxldmVscyIsInNldExldmVscyIsInVzZUJpbmRlciIsIm9uU2VhcmNoIiwib25BdWRpZW5jZUNoYW5nZSIsImF1ZGllbmNlSXRlbXMiLCJsZXZlbE9wdGlvbnMiLCJNb2RhbCIsImZpbHRlciIsImFjdGlvbiIsIm9uU3VibWl0IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImNhbmNlbCIsInNlYXJjaCIsIkZpbHRlckxhYmVscyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiVGFnIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsIm9uUmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiX2ZpbHRlcnMiLCJfbGlzdCIsIl9sYWJlbHMiLCJzZXRSZWFkeSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VMb2FkZXIiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9tb2R1bGVDYXJkIiwiX293bmVyQXNzaWduIiwiQ29tbXVuaXR5SXRlbSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW4iLCJvblVzZSIsIkZyYWdtZW50IiwiTW9kdWxlQ2FyZCIsImVudGl0eSIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwiQXBwSWNvbkJ1dHRvbiIsInRlc3QiLCJ1c2UiLCJPd25lckFzc2lnbkZvcm0iLCJfaXRlbSIsIl9lbXB0eSIsInByZXZlbnRNZXNzYWdlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidG90YWwiLCJmZXRjaGluZ0RhdGEiLCJFbXB0eSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJpc0ZldGNoaW5nIiwiY2xzIiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbGFiZWxzLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xldmVsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDTCxHQUFHLENBQUM7WUFDdEI7WUFFQU0sSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBaEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBaUIsV0FBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLGdCQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsZUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixLQUFBLEdBQUF6QixPQUFBO1VBWU0sTUFBT08sWUFBYSxTQUFRYyxNQUFBLENBQUFLLGFBQTJCO1lBQzVELENBQUFDLE1BQU87WUFFUCxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBakIsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsQ0FBQWtCLEtBQU0sR0FBc0IsSUFBSU4sTUFBQSxDQUFBTyxZQUFZLENBQUNOLGVBQUEsQ0FBQU8sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDOUQsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNLLEtBQUs7WUFDeEM7WUFFQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ0gsS0FBSztZQUMvQjtZQUVBLENBQUFJLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlBLFFBQVFBLENBQUNKLEtBQWE7Y0FDekJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRU4sS0FBSyxDQUFDO2NBQ3JCLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQUksUUFBUyxFQUFFRyxFQUFFLEVBQUU7Y0FDbEMsSUFBSSxDQUFDLENBQUFILFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsU0FBVSxDQUFDTSxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDRixFQUFFLEtBQUtQLEtBQUssQ0FBQztjQUNoRUssT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUM7Y0FDL0IsSUFBSSxDQUFDTSxPQUFPLENBQUMsa0JBQWtCLENBQUM7Y0FDaEMsSUFBSSxDQUFDQSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBS0FDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCO2NBQUMsQ0FBRSxDQUFDO2NBQzlELElBQUksQ0FBQyxDQUFBVCxXQUFZLEdBQUcsSUFBSWIsTUFBQSxDQUFBTyxZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFNLFdBQVksQ0FBQ1UsS0FBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBbEIsU0FBVSxHQUFHLElBQUlOLGdCQUFBLENBQUF5QixlQUFlLEVBQUU7Y0FDdkNDLFVBQVUsQ0FBQzNDLEtBQUssR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQzRDLFFBQVEsR0FBR3hCLEtBQUEsQ0FBQXlCLFNBQVMsQ0FBQ0MsT0FBTztZQUNsQztZQUVBcEMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBYyxLQUFNLENBQUN1QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO2NBQzFDLElBQUksQ0FBQ0EsV0FBVyxFQUFFO1lBQ25CO1lBQ0FBLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXhCLEtBQU0sQ0FBQ0ssS0FBSyxFQUFFO2NBRXhCLElBQUksQ0FBQ29CLGFBQWEsRUFBRTtjQUNwQixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUNwQixDQUFDO1lBQ0RyQyxLQUFLQSxDQUFBO2NBQ0osS0FBSyxDQUFDZ0IsS0FBSyxHQUFHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQzJCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDSCxXQUFXLENBQUM7WUFDNUM7WUFFQUMsYUFBYUEsQ0FBQTtjQUNabEMsV0FBQSxDQUFBcUMsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztZQUM3QjtZQUVBLE1BQU0xQyxJQUFJQSxDQUFDMkMsSUFBSSxHQUFHLFdBQVc7Y0FDNUIsTUFBTSxJQUFJLENBQUMsQ0FBQS9CLFNBQVUsQ0FBQ1osSUFBSSxDQUFDO2dCQUFFMkMsSUFBSSxFQUFFLFdBQVc7Z0JBQUVDLEtBQUssRUFBRTtjQUFXLENBQUUsQ0FBQztjQUNyRSxNQUFNekIsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFQLFNBQVUsQ0FBQ2lDLFlBQVksQ0FBQ3BDLEtBQUEsQ0FBQXlCLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO2NBQ3ZFLElBQUksQ0FBQyxDQUFBaEIsU0FBVSxHQUFHQSxTQUFTLENBQUMyQixLQUFLO2NBQ2pDLEtBQUssQ0FBQzVCLEtBQUssR0FBRyxJQUFJO1lBQ25CO1lBRUEyQixZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU0xQixTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVAsU0FBVSxDQUFDaUMsWUFBWSxDQUFDcEMsS0FBQSxDQUFBeUIsU0FBUyxDQUFDQyxPQUFPLENBQUM7Y0FDdkUsSUFBSSxDQUFDLENBQUFoQixTQUFVLEdBQUdBLFNBQVMsQ0FBQzJCLEtBQUs7WUFDbEMsQ0FBQztZQUVEQyxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFZCxRQUFRO2NBQUVaLFFBQVE7Y0FBRTJCO1lBQUssQ0FBRSxLQUFJO2NBQ3BELElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Y0FDcEIzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFVSxRQUFRLEVBQUVaLFFBQVEsRUFBRTJCLEtBQUssQ0FBQztjQUN4RCxJQUFJLENBQUNmLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUNaLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUMyQixLQUFLLEdBQUdBLEtBQUs7Y0FFbEIsTUFBTSxJQUFJLENBQUMsQ0FBQXBDLFNBQVUsQ0FBQ1osSUFBSSxDQUFDO2dCQUMxQjJDLElBQUksRUFBRSxXQUFXO2dCQUNqQkMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCWCxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2dCQUN2QlosUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtnQkFDdkIyQixLQUFLLEVBQUUsSUFBSSxDQUFDQTtlQUNaLENBQUM7Y0FFRixJQUFJLENBQUNDLFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFREMsV0FBV0EsQ0FBQzdCLFFBQVE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsU0FBVSxDQUFDTSxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDRixFQUFFLEtBQUtILFFBQVEsQ0FBQztZQUMxRDs7VUFDQWxCLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVIRCxJQUFBNEQsTUFBQSxHQUFBbkUsT0FBQTtVQVdPLE1BQU1vRSxXQUFXLEdBQUFqRCxPQUFBLENBQUFpRCxXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUNqRCxPQUFBLENBQUFvRCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFLElBQUFFLEtBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLEdBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVNkUsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVoRDtZQUFLLENBQUUsR0FBRyxJQUFBOEMsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFDbEMsT0FDQ0UsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQUcsU0FBUztjQUFDQyxJQUFJLEVBQUVuRCxLQUFLLENBQUNvRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUV2RCxLQUFLLENBQUNvRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsV0FBVztjQUFFQyxJQUFJLEVBQUM7WUFBTSxHQUNwR1osS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFvQyxHQUNsRGIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUMscUJBQXFCO2NBQUNGLFNBQVMsRUFBQztZQUFzQixHQUMvRHpELEtBQUssQ0FBQzRELE9BQU8sQ0FBQ0MsTUFBTSxDQUNmLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFDLFlBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBeUUsS0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU0sU0FBVTRGLGFBQWFBLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBQ3pDLE1BQU07Y0FDTGhFLEtBQUssRUFBRTtnQkFDTmlFLE9BQU8sRUFBRTtrQkFBRXpELFFBQVEsRUFBRVI7Z0JBQUs7Y0FBRSxDQUM1QjtjQUNEeEI7WUFBSyxDQUNMLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRXBCLE1BQU1ULEtBQUssR0FBVXpELEtBQUssQ0FBQzhCLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQzFELFFBQVEsS0FBSztjQUFFSixLQUFLLEVBQUVJLFFBQVEsQ0FBQ0csRUFBRTtjQUFFd0QsS0FBSyxFQUFFM0QsUUFBUSxDQUFDNEQ7WUFBSSxDQUFFLENBQUMsQ0FBQztZQUNwRyxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxQixLQUFLLENBQUMyQixRQUFRLENBQUN0QyxLQUFLLENBQUM7WUFHbkQsTUFBTXVDLFFBQVEsR0FBRyxNQUFPQyxLQUEyQyxJQUFJO2NBQ3RFakcsS0FBSyxDQUFDZ0MsUUFBUSxHQUFHaUUsS0FBSyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLO2NBQ25DNUIsS0FBSyxDQUFDbUcsR0FBRyxDQUFDO2dCQUFFeEMsS0FBSyxFQUFFeUM7Y0FBUyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1DLFVBQVUsR0FBRztjQUFFQSxVQUFVLEVBQUVyRyxLQUFLLENBQUNzRyxLQUFLLElBQUlkLFFBQVEsSUFBSSxDQUFDSyxPQUFPLENBQUNVO1lBQU0sQ0FBRTtZQUU3RSxPQUNDbkMsS0FBQSxDQUFBSyxhQUFBLGNBQ0NMLEtBQUEsQ0FBQUssYUFBQTtjQUFPK0IsT0FBTyxFQUFDO1lBQUUsR0FBRWhGLEtBQUssQ0FBQ21FLEtBQUssQ0FBUyxFQUN2Q3ZCLEtBQUEsQ0FBQUssYUFBQSxDQUFDYSxZQUFBLENBQUFtQixXQUFXO2NBQ1hiLElBQUksRUFBQyxVQUFVO2NBQ2ZjLFdBQVcsRUFBRWxGLEtBQUssQ0FBQ21GLE1BQU07Y0FDekJkLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZEs7WUFBVSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWYsWUFBQSxHQUFBM0YsT0FBQTtVQUVBLElBQUF5RSxLQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFFQSxJQUFBaUgsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRUEsSUFBQWtILE1BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBbUgsTUFBQSxHQUFBbkgsT0FBQTtVQUVNLFNBQVVvSCxXQUFXQSxDQUFDO1lBQUVDLE9BQU87WUFBRXhCLFFBQVEsR0FBRztVQUFLLENBQStDO1lBQ3JHLE1BQU07Y0FBRWhFLEtBQUs7Y0FBRXhCO1lBQUssQ0FBRSxHQUFHLElBQUFzRSxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUN6QyxNQUFNLENBQUNOLFFBQVEsRUFBRXFELFdBQVcsQ0FBQyxHQUFHN0MsS0FBSyxDQUFDMkIsUUFBUSxDQUFDL0YsS0FBSyxDQUFDNEQsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ3NELE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcvQyxLQUFLLENBQUMyQixRQUFRLENBQUM7Y0FDMUNuRCxRQUFRLEVBQUU1QyxLQUFLLENBQUM0QyxRQUFRO2NBQ3hCWixRQUFRLEVBQUVoQyxLQUFLLENBQUNnQyxRQUFRO2NBQ3hCMkIsS0FBSyxFQUFFM0QsS0FBSyxDQUFDMkQ7YUFDYixDQUFDO1lBQ0YsTUFBTSxDQUFDeUQsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2pELEtBQUssQ0FBQzJCLFFBQVEsQ0FBQy9GLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRW9GLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFFLE1BQU1wQixRQUFRLEdBQUcsTUFBT0MsS0FBMkMsSUFBSTtjQUN0RWpHLEtBQUssQ0FBQ21HLEdBQUcsQ0FBQztnQkFBRXZELFFBQVEsRUFBRXFELEtBQUssQ0FBQ0MsTUFBTSxDQUFDdEUsS0FBSztnQkFBRUksUUFBUSxFQUFFb0UsU0FBUztnQkFBRXpDLEtBQUssRUFBRXlDO2NBQVMsQ0FBRSxDQUFDO2NBQ2xGcEcsS0FBSyxDQUFDd0QsWUFBWSxFQUFFO1lBQ3JCLENBQUM7WUFDRCxJQUFBcUQsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQ3RILEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmlILFdBQVcsQ0FBQ2pILEtBQUssQ0FBQzRELFFBQVEsQ0FBQztZQUM1QixDQUFDLEVBQ0Qsa0JBQWtCLENBQ2xCO1lBQ0QsTUFBTXlDLFVBQVUsR0FBRztjQUFFQSxVQUFVLEVBQUViO1lBQVEsQ0FBRTtZQUMzQyxNQUFNSyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNILEdBQUcsQ0FBQ3JELElBQUksS0FBSztjQUFFVCxLQUFLLEVBQUVTLElBQUk7Y0FBRXNELEtBQUssRUFBRW5FLEtBQUssQ0FBQ2lFLE9BQU8sQ0FBQzVDLFNBQVMsQ0FBQ1IsSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBRWpHLE1BQU1rRixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCdkgsS0FBSyxDQUFDMEQsVUFBVSxDQUFDd0QsTUFBTSxDQUFDO2NBQ3hCRixPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsTUFBTVEsZ0JBQWdCLEdBQUcsTUFBT3ZCLEtBQTJDLElBQUk7Y0FDOUVrQixTQUFTLENBQUM7Z0JBQUUsR0FBR0QsTUFBTTtnQkFBRWxGLFFBQVEsRUFBRWlFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDdEU7Y0FBSyxDQUFFLENBQUM7Y0FDdEQsTUFBTUksUUFBUSxHQUFHaEMsS0FBSyxDQUFDNkQsV0FBVyxDQUFDb0MsS0FBSyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLLENBQUM7Y0FDdER5RixTQUFTLENBQUNyRixRQUFRLENBQUNvRixNQUFNLENBQUM7Y0FDMUJwSCxLQUFLLENBQUNtRyxHQUFHLENBQUM7Z0JBQUV4QyxLQUFLLEVBQUV5QztjQUFTLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBRUQsTUFBTXFCLGFBQWEsR0FBVXpILEtBQUssQ0FBQzhCLFNBQVMsQ0FBQzRELEdBQUcsQ0FBQzFELFFBQVEsS0FBSztjQUFFSixLQUFLLEVBQUVJLFFBQVEsQ0FBQ0csRUFBRTtjQUFFd0QsS0FBSyxFQUFFM0QsUUFBUSxDQUFDNEQ7WUFBSSxDQUFFLENBQUMsQ0FBQztZQUM1RyxNQUFNOEIsWUFBWSxHQUFHMUgsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFb0YsTUFBTSxJQUFJLEVBQUU7WUFFakQsT0FDQ2hELEtBQUEsQ0FBQUssYUFBQSxDQUFDcUMsTUFBQSxDQUFBYSxLQUFLO2NBQUN0SCxJQUFJO2NBQUMyRyxPQUFPLEVBQUVBO1lBQU8sR0FDM0I1QyxLQUFBLENBQUFLLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDYixLQUFBLENBQUFLLGFBQUEsaUJBQ0NMLEtBQUEsQ0FBQUssYUFBQSxhQUFLakQsS0FBSyxDQUFDb0csTUFBTSxDQUFDOUMsS0FBSyxDQUFNLEVBQzdCVixLQUFBLENBQUFLLGFBQUEsZUFBT2pELEtBQUssQ0FBQ29HLE1BQU0sQ0FBQzdDLFdBQVcsQ0FBUSxDQUMvQixFQUNUWCxLQUFBLENBQUFLLGFBQUE7Y0FBTW9ELE1BQU0sRUFBQyxFQUFFO2NBQUNDLFFBQVEsRUFBRVA7WUFBUSxHQUNqQ25ELEtBQUEsQ0FBQUssYUFBQSxjQUNDTCxLQUFBLENBQUFLLGFBQUE7Y0FBTytCLE9BQU8sRUFBQztZQUFFLEdBQUVoRixLQUFLLENBQUNpRSxPQUFPLENBQUM1QyxTQUFTLENBQUM4RCxNQUFNLENBQUNoQixLQUFLLENBQVMsRUFDaEV2QixLQUFBLENBQUFLLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBbUIsV0FBVztjQUNYQyxXQUFXLEVBQUVsRixLQUFLLENBQUNpRSxPQUFPLENBQUM1QyxTQUFTLENBQUM4RCxNQUFNLENBQUNELFdBQVc7Y0FDdkQ7Y0FDQTlFLEtBQUssRUFBRTVCLEtBQUssQ0FBQzRDLFFBQVE7Y0FDckJnRCxJQUFJLEVBQUMsVUFBVTtjQUNmQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJHLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RLO1lBQVUsRUFDYixDQUNHLEVBQ05qQyxLQUFBLENBQUFLLGFBQUEsY0FDQ0wsS0FBQSxDQUFBSyxhQUFBO2NBQU8rQixPQUFPLEVBQUM7WUFBRSxHQUFFaEYsS0FBSyxDQUFDaUUsT0FBTyxDQUFDekQsUUFBUSxDQUFDMkQsS0FBSyxDQUFTLEVBQ3hEdkIsS0FBQSxDQUFBSyxhQUFBLENBQUNhLFlBQUEsQ0FBQW1CLFdBQVc7Y0FDWGIsSUFBSSxFQUFDLFVBQVU7Y0FDZmMsV0FBVyxFQUFFbEYsS0FBSyxDQUFDaUUsT0FBTyxDQUFDekQsUUFBUSxDQUFDMkUsTUFBTTtjQUMxQ2QsT0FBTyxFQUFFNEIsYUFBYTtjQUN0QnpCLFFBQVEsRUFBRXdCLGdCQUFnQjtjQUFBLEdBQ3RCbkI7WUFBVSxFQUNiLENBQ0csRUFDTmpDLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUMsTUFBQSxDQUFBbUIsa0JBQWtCO2NBQUNsQyxPQUFPLEVBQUV1QixNQUFNO2NBQUU1QixRQUFRLEVBQUVBLFFBQVE7Y0FBRTJCLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pGL0MsS0FBQSxDQUFBSyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUM5QmIsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQTJELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsUUFBUTtjQUFDQyxPQUFPLEVBQUVuQjtZQUFPLEdBQ2pEaEgsS0FBSyxDQUFDK0IsV0FBVyxDQUFDcUQsT0FBTyxDQUFDZ0QsTUFBTSxDQUN6QixFQUNUaEUsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQTJELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQzNFLElBQUksRUFBQztZQUFRLEdBQ3JDdEQsS0FBSyxDQUFDK0IsV0FBVyxDQUFDcUQsT0FBTyxDQUFDaUQsTUFBTSxDQUN6QixDQUNKLENBQ0EsQ0FDRixDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0ZBLElBQUFqRSxLQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNNLFNBQVUySSxZQUFZQSxDQUFDO1lBQUVDO1VBQVcsQ0FBRTtZQUMzQyxNQUFNO2NBQUV2STtZQUFLLENBQUUsR0FBRyxJQUFBc0UsUUFBQSxDQUFBSixjQUFjLEdBQUU7WUFFbEMsTUFBTSxDQUFDc0UsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3JFLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBQWMsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3RILEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJ5SSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsR0FBRyxHQUFHQSxDQUFDO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUSxDQUFFLEtBQUk7Y0FDdEMsTUFBTUMsUUFBUSxHQUFHNUMsS0FBSyxJQUFHO2dCQUN4QkEsS0FBSyxDQUFDNkMsZUFBZSxFQUFFO2dCQUN2QjlJLEtBQUssQ0FBQzRJLFFBQVEsQ0FBQyxHQUFHeEMsU0FBUztnQkFDM0JwRyxLQUFLLENBQUMwRCxVQUFVLENBQUM7a0JBQ2hCZCxRQUFRLEVBQUU1QyxLQUFLLENBQUM0QyxRQUFRO2tCQUN4QlosUUFBUSxFQUFFaEMsS0FBSyxDQUFDZ0MsUUFBUSxFQUFFRyxFQUFFO2tCQUM1QndCLEtBQUssRUFBRTNELEtBQUssQ0FBQzJEO2lCQUNiLENBQUM7Y0FDSCxDQUFDO2NBRUQsT0FDQ1MsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUM7Y0FBWSxHQUMzQmIsS0FBQSxDQUFBSyxhQUFBO2dCQUFNUSxTQUFTLEVBQUMsT0FBTztnQkFBQ2tELE9BQU8sRUFBRUk7Y0FBVyxHQUMxQ0ksUUFBUSxFQUFFLEdBQUcsQ0FDUixFQUNQdkUsS0FBQSxDQUFBSyxhQUFBO2dCQUFRMEQsT0FBTyxFQUFFVTtjQUFRLE9BQVksQ0FDL0I7WUFFVCxDQUFDO1lBRUQsT0FDQ3pFLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBNkIsR0FDMUNqRixLQUFLLENBQUNnQyxRQUFRLEdBQUdvQyxLQUFBLENBQUFLLGFBQUEsQ0FBQ2lFLEdBQUc7Y0FBQ0UsUUFBUSxFQUFDO1lBQVUsR0FBRTVJLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRTRELElBQUksQ0FBTyxHQUFHLElBQUksRUFDN0U1RixLQUFLLENBQUMyRCxLQUFLLEdBQUdTLEtBQUEsQ0FBQUssYUFBQSxDQUFDaUUsR0FBRztjQUFDRSxRQUFRLEVBQUM7WUFBTyxHQUFFNUksS0FBSyxDQUFDMkQsS0FBSyxDQUFPLEdBQUcsSUFBSSxDQUMxRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBMkIsWUFBQSxHQUFBM0YsT0FBQTtVQUVBLElBQUF5RSxLQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFFTSxTQUFVb0ksa0JBQWtCQSxDQUFDO1lBQ2xDdkMsUUFBUTtZQUNSSyxPQUFPLEdBQUcsRUFBRTtZQUNac0I7VUFBUyxDQUtUO1lBQ0EsTUFBTTtjQUNMM0YsS0FBSyxFQUFFO2dCQUNOaUUsT0FBTyxFQUFFO2tCQUFFOUIsS0FBSyxFQUFFbkM7Z0JBQUs7Y0FBRSxDQUN6QjtjQUNEMEYsTUFBTTtjQUNObEg7WUFBSyxDQUNMLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRXBCLE1BQU04QixRQUFRLEdBQUlDLEtBQTJDLElBQUk7Y0FDaEVrQixTQUFTLENBQUNELE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFdkQsS0FBSyxFQUFFc0MsS0FBSyxDQUFDQyxNQUFNLENBQUN0RTtjQUFLLENBQUUsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNeUUsVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRWIsUUFBUSxJQUFJLENBQUNLLE9BQU8sQ0FBQ1U7WUFBTSxDQUFFO1lBRTlELE9BQ0NuQyxLQUFBLENBQUFLLGFBQUEsY0FDQ0wsS0FBQSxDQUFBSyxhQUFBO2NBQU8rQixPQUFPLEVBQUM7WUFBRSxHQUFFaEYsS0FBSyxDQUFDbUUsS0FBSyxDQUFTLEVBQ3ZDdkIsS0FBQSxDQUFBSyxhQUFBLENBQUNhLFlBQUEsQ0FBQW1CLFdBQVc7Y0FDWGIsSUFBSSxFQUFDLE9BQU87Y0FDWmMsV0FBVyxFQUFFbEYsS0FBSyxDQUFDbUYsTUFBTTtjQUN6QmQsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCRyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkSztZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBOUIsR0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQXlFLEtBQUEsR0FBQXpFLE9BQUE7VUFFQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFvSixRQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQXFKLEtBQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVBLElBQUFzSixPQUFBLEdBQUF0SixPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDNkIsS0FBSyxFQUFFcUgsUUFBUSxDQUFDLEdBQUc5RSxLQUFLLENBQUMyQixRQUFRLENBQVUvRixLQUFLLENBQUM2QixLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDK0IsUUFBUSxDQUFDLEdBQUdRLEtBQUssQ0FBQzJCLFFBQVEsQ0FBVS9GLEtBQUssQ0FBQzRELFFBQVEsQ0FBQztZQUMxRCxNQUFNO2NBQUVwQztZQUFLLENBQUUsR0FBR3hCLEtBQUs7WUFDdkIsTUFBTSxDQUFDbUosU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2hGLEtBQUssQ0FBQzJCLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsSUFBQWMsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3RILEtBQUssQ0FBQyxFQUFFLE1BQU1rSixRQUFRLENBQUNsSixLQUFLLENBQUM2QixLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPdUMsS0FBQSxDQUFBSyxhQUFBLENBQUNGLEdBQUEsQ0FBQThFLFVBQVUsT0FBRztZQUVqQyxNQUFNekgsS0FBSyxHQUFHO2NBQUVKLEtBQUs7Y0FBRXhCLEtBQUs7Y0FBRTREO1lBQVEsQ0FBRTtZQUN4QyxNQUFNMEYsUUFBUSxHQUFHQSxDQUFBLEtBQU1GLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDL0MsT0FDQy9FLEtBQUEsQ0FBQUssYUFBQSxDQUFDSCxRQUFBLENBQUFQLFdBQVcsQ0FBQ3dGLFFBQVE7Y0FBQzNILEtBQUssRUFBRUE7WUFBSyxHQUNqQ3dDLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFpRixhQUFhLFFBQ2JwRixLQUFBLENBQUFLLGFBQUEsQ0FBQ0YsR0FBQSxDQUFBa0YsU0FBUztjQUFDM0UsS0FBSyxFQUFFOUUsS0FBSyxDQUFDd0IsS0FBSyxDQUFDc0Q7WUFBSyxHQUNsQ1YsS0FBQSxDQUFBSyxhQUFBLENBQUNKLFdBQUEsQ0FBQTJELE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFbUI7WUFBUSxHQUN6Q3RKLEtBQUssQ0FBQytCLFdBQVcsQ0FBQ3FELE9BQU8sQ0FBQ0ssT0FBTyxDQUMxQixDQUNFLEVBQ1pyQixLQUFBLENBQUFLLGFBQUEsQ0FBQ3dFLE9BQUEsQ0FBQVgsWUFBWTtjQUFDQyxXQUFXLEVBQUVlO1lBQVEsRUFBSSxFQUN0Q0gsU0FBUyxJQUFJL0UsS0FBQSxDQUFBSyxhQUFBLENBQUNzRSxRQUFBLENBQUFoQyxXQUFXO2NBQUNDLE9BQU8sRUFBRXNDO1lBQVEsRUFBSSxFQUVoRGxGLEtBQUEsQ0FBQUssYUFBQSxDQUFDdUUsS0FBQSxDQUFBVSxJQUFJLE9BQUcsQ0FDTyxDQUNNO1VBRXpCOzs7Ozs7Ozs7OztVQ3RDQTs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUE5SSxPQUFBO1lBQ0FjLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaUksTUFBQSxHQUFBbEssT0FBQTtVQUNBLElBQUFtSyxXQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQW9LLFlBQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBeUUsS0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU0sU0FBVXFLLGFBQWFBLENBQUM7WUFBRTNIO1VBQUksQ0FBRTtZQUNyQyxNQUFNO2NBQUViO1lBQUssQ0FBRSxHQUFHLElBQUE4QyxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUMrRixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHOUYsS0FBSyxDQUFDMkIsUUFBUSxDQUFDO2NBQUVvRSxJQUFJLEVBQUUsS0FBSztjQUFFOUg7WUFBSSxDQUFFLENBQUM7WUFFdkUsTUFBTWtHLFdBQVcsR0FBR0EsQ0FBQSxLQUFNMkIsWUFBWSxDQUFDO2NBQUU3SCxJQUFJO2NBQUU4SCxJQUFJLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDRTtZQUFJLENBQUUsQ0FBQztZQUN2RSxNQUFNQyxLQUFLLEdBQUduRSxLQUFLLElBQUc7Y0FDckJBLEtBQUssQ0FBQzZDLGVBQWUsRUFBRTtjQUN2Qm9CLFlBQVksQ0FBQztnQkFBRUMsSUFBSSxFQUFFLElBQUk7Z0JBQUU5SDtjQUFJLENBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FDQytCLEtBQUEsQ0FBQUssYUFBQSxDQUFBTCxLQUFBLENBQUFpRyxRQUFBLFFBQ0NqRyxLQUFBLENBQUFLLGFBQUEsQ0FBQ3FGLFdBQUEsQ0FBQVEsVUFBVTtjQUFDakksSUFBSSxFQUFFQSxJQUFJO2NBQUU0QyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUN6RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRStJLE1BQU0sRUFBQztZQUFZLEdBQ25GbkcsS0FBQSxDQUFBSyxhQUFBLENBQUNxRixXQUFBLENBQUFVLGdCQUFnQjtjQUFDbkksSUFBSSxFQUFFQTtZQUFJLEdBQzNCK0IsS0FBQSxDQUFBSyxhQUFBLENBQUNxRixXQUFBLENBQUFXLHVCQUF1QixRQUN2QnJHLEtBQUEsQ0FBQUssYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBZ0MsR0FDN0M1QyxJQUFJLEVBQUVxSSxVQUFVLEVBQUVDLFVBQVUsSUFDNUJ2RyxLQUFBLENBQUFLLGFBQUEsQ0FBQ29GLE1BQUEsQ0FBQWUsYUFBYTtjQUNiNUYsSUFBSSxFQUFDLE9BQU87Y0FDWkYsS0FBSyxFQUFFdEQsS0FBSyxDQUFDNEQsT0FBTyxDQUFDeUYsSUFBSTtjQUN6QjNFLE1BQU0sRUFBQyxRQUFRO2NBQ2ZmLElBQUksRUFBRTlDLElBQUksQ0FBQ3FJLFVBQVUsQ0FBQ0M7WUFBVSxFQUVqQyxFQUVEdkcsS0FBQSxDQUFBSyxhQUFBLENBQUNvRixNQUFBLENBQUFlLGFBQWE7Y0FBQ3pDLE9BQU8sRUFBRWlDLEtBQUs7Y0FBRXBGLElBQUksRUFBQyxPQUFPO2NBQUNGLEtBQUssRUFBRXRELEtBQUssQ0FBQzRELE9BQU8sQ0FBQzBGO1lBQUcsRUFBSSxDQUNuRSxDQUNtQixDQUNSLENBQ1AsRUFDWmIsU0FBUyxDQUFDRSxJQUFJLElBQUkvRixLQUFBLENBQUFLLGFBQUEsQ0FBQ3NGLFlBQUEsQ0FBQWdCLGVBQWU7Y0FBQzFJLElBQUksRUFBRUEsSUFBSTtjQUFFMkUsT0FBTyxFQUFFdUIsV0FBVztjQUFFL0csS0FBSyxFQUFFQSxLQUFLO2NBQUU4QixJQUFJLEVBQUM7WUFBVyxFQUFHLENBQ3JHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFjLEtBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFxTCxLQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQXFKLEtBQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBNEUsR0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQXNMLE1BQUEsR0FBQXRMLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVNLFNBQVUrSixJQUFJQSxDQUFDLEVBQUU7WUFDdEIsTUFBTTtjQUFFMUosS0FBSztjQUFFd0I7WUFBSyxDQUFFLEdBQUcsSUFBQThDLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBQ3pDLE1BQU1nSCxjQUFjLEdBQUcxSixLQUFLLENBQUNvRCxLQUFLLENBQUNyRCxTQUFTO1lBQzVDLE1BQU00SixVQUFVLEdBQUduTCxLQUFLLENBQUN1QixTQUFTO1lBQ2xDLE1BQU0sQ0FBQzZKLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdqSCxLQUFLLENBQUMyQixRQUFRLENBQUM7Y0FDdEN0QyxLQUFLLEVBQUUwSCxVQUFVLENBQUMxSCxLQUFLO2NBQ3ZCRyxRQUFRLEVBQUV1SCxVQUFVLENBQUN2SCxRQUFRO2NBQzdCMEgsS0FBSyxFQUFFSCxVQUFVLENBQUMxSCxLQUFLLEVBQUU4QzthQUN6QixDQUFDLENBQUMsQ0FBQztZQUVKLElBQUFNLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM2RCxVQUFVLENBQUMsRUFBRSxNQUFLO2NBQzVCRSxPQUFPLENBQUM7Z0JBQ1AsR0FBR0QsSUFBSTtnQkFDUDNILEtBQUssRUFBRTBILFVBQVUsQ0FBQzFILEtBQUs7Z0JBQ3ZCRyxRQUFRLEVBQUV1SCxVQUFVLENBQUN2SCxRQUFRO2dCQUM3QjBILEtBQUssRUFBRUgsVUFBVSxDQUFDMUgsS0FBSyxFQUFFOEM7ZUFDekIsQ0FBQztZQUNILENBQUMsQ0FBQztZQUVGLElBQUFNLE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUN0SCxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0ppQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRWxDLEtBQUssQ0FBQ3VMLFlBQVksQ0FBQztjQUN6REYsT0FBTyxDQUFDO2dCQUNQLEdBQUdELElBQUk7Z0JBQ1AzSCxLQUFLLEVBQUUwSCxVQUFVLENBQUMxSCxLQUFLO2dCQUN2QkcsUUFBUSxFQUFFdUgsVUFBVSxDQUFDdkgsUUFBUTtnQkFDN0IwSCxLQUFLLEVBQUVILFVBQVUsQ0FBQzFILEtBQUssRUFBRThDO2VBQ3pCLENBQUM7WUFDSCxDQUFDLEVBQ0Qsa0JBQWtCLENBQ2xCO1lBQ0QsSUFBSTZFLElBQUksQ0FBQ3hILFFBQVEsSUFBSSxDQUFDd0gsSUFBSSxDQUFDRSxLQUFLLEVBQUU7Y0FDakMsT0FDQ2xILEtBQUEsQ0FBQUssYUFBQSxDQUFDd0csTUFBQSxDQUFBTyxLQUFLO2dCQUFDdkcsU0FBUyxFQUFDO2NBQW1CLEdBQ25DYixLQUFBLENBQUFLLGFBQUEsQ0FBQ0osV0FBQSxDQUFBb0gsT0FBTztnQkFBQ0MsTUFBTTtjQUFBLEVBQUcsQ0FDWDs7WUFJVixJQUFJLENBQUNQLFVBQVUsQ0FBQzFILEtBQUssRUFBRThDLE1BQU0sSUFBSSxDQUFDNEUsVUFBVSxDQUFDdkgsUUFBUSxFQUFFO2NBQ3RELE9BQU9RLEtBQUEsQ0FBQUssYUFBQSxDQUFDRixHQUFBLENBQUFHLFNBQVM7Z0JBQUNDLElBQUksRUFBRXVHLGNBQWMsQ0FBQ3BHLEtBQUs7Z0JBQUVDLFdBQVcsRUFBRW1HLGNBQWMsQ0FBQ25HLFdBQVc7Z0JBQUVDLElBQUksRUFBQztjQUFNLEVBQUc7O1lBR3RHLE1BQU0yRyxVQUFVLEdBQUdSLFVBQVUsQ0FBQ3ZILFFBQVEsSUFBSTVELEtBQUssQ0FBQ3VMLFlBQVksSUFBSXZMLEtBQUssQ0FBQzRELFFBQVE7WUFDOUUsTUFBTWdJLEdBQUcsR0FBRyxnQkFBZ0JELFVBQVUsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTlELE9BQ0N2SCxLQUFBLENBQUFLLGFBQUEsQ0FBQUwsS0FBQSxDQUFBaUcsUUFBQSxRQUNDakcsS0FBQSxDQUFBSyxhQUFBLENBQUN1RSxLQUFBLENBQUFVLElBQVk7Y0FBQ3pFLFNBQVMsRUFBRTJHLEdBQUc7Y0FBRW5JLEtBQUssRUFBRTBILFVBQVUsQ0FBQzFILEtBQUs7Y0FBRW9JLE9BQU8sRUFBRWIsS0FBQSxDQUFBaEI7WUFBYSxFQUFJLENBQy9FO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=