System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/form", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.3/chips", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/alert", "react-dom@18.2.0", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Header, View, RightPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0,
    RightPanel: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003List) {
      dependency_7 = _pragmateUi003List;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Form) {
      dependency_10 = _pragmateUi003Form;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi003Chips) {
      dependency_14 = _pragmateUi003Chips;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi003Alert) {
      dependency_16 = _pragmateUi003Alert;
    }, function (_reactDom) {
      dependency_17 = _reactDom;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Empty) {
      dependency_19 = _pragmateUi003Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/managementreate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/chips', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['react-dom', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/empty', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/managementreate.widget",
        "is": "page",
        "route": "/modules/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/managementreate.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3781797263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1696189235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #selected;
            get selected() {
              return this.#selected;
            }
            async load(id) {
              try {
                const specs = id === 'new' ? {} : {
                  id
                };
                this.#model = new _core.LearningModule(specs);
                await this.#model.isReady;
                if (id !== 'new') await this.#model.load({
                  id
                });
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async editActivity(id) {
              this.#selected = this.#model.activities.map.get(id);
            }
            async deleteActivity(id) {
              this.#model.activities.remove(id);
              this.trigger('change');
            }
            async save() {
              this.fetching = true;
              await this.model.saveDraft();
              this.fetching = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/list/index
      *********************************************/

      ims.set('./views/activities/list/index', {
        hash: 1018482332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _control = require("./item/control");
          var _form = require("pragmate-ui/form");
          function ModuleActivities() {
            const {
              texts,
              store,
              activities,
              onSubmit
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.generated');
            if (!activities.length) return null;
            const attrs = {
              disabled: store.model.fetching || store.fetching
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_list.List, {
              className: "module-activities__list",
              items: activities,
              control: _control.ModuleActivity
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              ...attrs,
              onClick: onSubmit,
              variant: "primary"
            }, texts.actions.save))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/activities/list/item/control
      ****************************************************/

      ims.set('./views/activities/list/item/control', {
        hash: 550168781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _item = require("./item");
          var _form = require("./form");
          function ModuleActivity({
            data,
            index
          }) {
            const [view, setView] = (0, _react.useState)('view');
            const Control = view === 'view' ? _item.ModuleActivityView : _form.ModuleActivityForm;
            _react.default.useEffect(() => {}, [view]);
            return _react.default.createElement(Control, {
              setView: setView,
              data: data,
              index: index
            });
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/activities/list/item/form/index
      *******************************************************/

      ims.set('./views/activities/list/item/form/index', {
        hash: 2769002699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _context = require("../../../../context");
          var _form = require("pragmate-ui/form");
          var _options = require("./options");
          var _components = require("pragmate-ui/components");
          var _useActivityContainer = require("../use-activity-container");
          function ModuleActivityForm({
            data,
            setView
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              type
            } = data;
            const types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
            const itemsType = types[type];
            const ref = (0, _useActivityContainer.useActivityContainer)('view');
            const [values, setValues] = _react.default.useState({
              name: data.name,
              description: data.description,
              specs: data.specs
            });
            const cancel = () => setView('view');
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const save = () => {
              data.set(values);
              window.setTimeout(() => {
                setView('view');
              }, 300);
            };
            return _react.default.createElement("div", {
              className: "module-activity__form",
              ref: ref
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, data.title)), _react.default.createElement(_form.Input, {
              name: "name",
              value: values.name,
              onChange: onChange
            }), _react.default.createElement(_form.Textarea, {
              value: values.description,
              name: "description",
              onChange: onChange
            }), types.hasOwnProperty(type) && _react.default.createElement(_options.ActivityOptions, {
              setValues: setValues,
              type: itemsType,
              value: values.specs[itemsType]
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: save
            }, "Confirm"), _react.default.createElement(_components.Button, {
              onClick: cancel
            }, "Cancel")));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/list/item/form/options
      *********************************************************/

      ims.set('./views/activities/list/item/form/options', {
        hash: 2825272917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityOptions = ActivityOptions;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          function ActivityOptions({
            setValues,
            value,
            type
          }) {
            const [error, setError] = _react.default.useState('');
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              setValues(values => ({
                ...values,
                specs: {
                  [type]: target.value
                }
              }));
            };
            return _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              values: value,
              handleChange: handleChange,
              fieldName: "topics"
            });
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/activities/list/item/item
      *************************************************/

      ims.set('./views/activities/list/item/item', {
        hash: 111871275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityView = ModuleActivityView;
          var _react = require("react");
          var _specs = require("./specs");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _useActivityContainer = require("./use-activity-container");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          function ModuleActivityView({
            setView,
            data,
            index
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _useActivityContainer.useActivityContainer)('view');
            const edit = event => {
              event.stopPropagation();
              // store.editActivity(data.id);
              setView('form');
            };
            const deleteItem = event => {
              event.stopPropagation();
              ref.current.classList.add('fade-out');
              store.deleteActivity(index);
            };
            return _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h3", {
              className: "flex-container flex-05 "
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[data.type]
            }), data.name), _react.default.createElement("div", {
              className: "activity-details flex-container flex-05 flex-vertical-center"
            }, _react.default.createElement(_icons.Icon, {
              icon: "time"
            }), _react.default.createElement("span", null, data.time, " ", texts.minutes), _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: deleteItem
            }))), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.objective, ": "), _react.default.createElement("span", null, data.objective)), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.description, ": "), data.description), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs
      **************************************************/

      ims.set('./views/activities/list/item/specs', {
        hash: 514913083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _chips = require("pragmate-ui/chips");
          var _context = require("../../../context");
          function ActivitySpecs({
            specs,
            type
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
            const Item = ({
              data
            }) => _react.default.createElement("li", null, data);
            const itemsType = types[type];
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              type: "primary"
            }, specs.kind), types.hasOwnProperty(type) && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts[itemsType]), _react.default.createElement(_list.List, {
              items: specs[itemsType],
              control: Item
            })));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/list/item/use-activity-container
      *******************************************************************/

      ims.set('./views/activities/list/item/use-activity-container', {
        hash: 3742898744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActivityContainer = useActivityContainer;
          var _react = require("react");
          function useActivityContainer(view) {
            const ref = (0, _react.useRef)(null);
            _react.default.useEffect(() => {
              ref.current?.closest('.module-activities__list').classList.toggle('module-activities__list--form');
            }, [view]);
            return ref;
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 1872877926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          /*bundle*/
          function Header({
            texts
          }) {
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
            }), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.postTitle)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2026304676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 298220829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleForm = ModuleForm;
          var _react = require("react");
          var _module = require("./module");
          var _information = require("./information");
          function ModuleForm() {
            return _react.default.createElement("div", {
              className: "card__section"
            }, _react.default.createElement("div", {
              className: "sticky-section"
            }, _react.default.createElement(_information.ModuleInformation, null), _react.default.createElement(_module.ModuleSpecifications, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/form/information
      ****************************************/

      ims.set('./views/form/information', {
        hash: 2685449235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleInformation = ModuleInformation;
          var _react = require("react");
          var _context = require("../context");
          function ModuleInformation() {
            const {
              texts,
              store: {
                model
              }
            } = (0, _context.useModuleContext)();
            if (!model.activities.items.length) return null;
            return _react.default.createElement("div", {
              className: "form-content-text"
            }, _react.default.createElement("h5", {
              className: "mt-15"
            }, texts.labels.title, " "), _react.default.createElement("span", null, model.title), _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.labels.description, " "), _react.default.createElement("span", null, model.description)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/form/module
      ***********************************/

      ims.set('./views/form/module', {
        hash: 279005864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleSpecifications = ModuleSpecifications;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _radioButton = require("./radio-button");
          function ModuleSpecifications() {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [name, setName] = _react.default.useState(store.model.title ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              audience: 13,
              duration: 45,
              target: '13',
              content: '',
              totalActivities: 3
            });
            (0, _hooks.useBinder)([store.model], () => {
              setName(store.model.title ?? '');
              setFetching(store.model.fetching);
            });
            const onSubmit = async event => {
              event.preventDefault();
              await store.model.generate(values);
            };
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const disabled = {
              disabled: store.fetching || store.model.fetching || !!activities.length
            };
            const attrs = {
              disabled: !values?.content || disabled.disabled,
              fetching,
              onClick: onSubmit
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "create-module__section"
            }, _react.default.createElement(_form.Input, {
              ...disabled,
              value: name,
              label: texts.module,
              name: "content",
              type: "text",
              onChange: onChange,
              required: true
            }), _react.default.createElement("div", {
              className: "module-form__details"
            }, _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.audience,
              values: values,
              setValues: setValues,
              ...disabled,
              items: [['13', texts.audience.school], ['20', texts.audience.university], ['25', texts.audience.company]]
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              type: "number",
              ...disabled,
              value: values.target,
              label: "target",
              name: "target"
            })), _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.duration,
              values: values,
              setValues: setValues,
              ...disabled,
              items: [['15', texts.moduleLength.brief], ['45', texts.moduleLength.standard], ['60', texts.moduleLength.extended]]
            }), _react.default.createElement(_radioButton.RadioButton, {
              label: texts.languages.label,
              values: values,
              setValues: setValues,
              ...disabled,
              items: [['en', texts.languages.en], ['es', texts.languages.es], ['pt', texts.languages.pt], ['fr', texts.languages.fr], ['de', texts.languages.de]]
            }), _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              ...attrs
            }, texts.actions.activities));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/radio-button
      *****************************************/

      ims.set('./views/form/radio-button', {
        hash: 1803652299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function RadioButton({
            disabled,
            label,
            items,
            values,
            setValues
          }) {
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const output = items.map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: "duration",
              ...disabled,
              onChange: onChange,
              key: index,
              value: value
            }, label));
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: "duration"
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              ...disabled
            }, output));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2653787952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _rightPanel = require("./right-panel");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            (0, _hooks2.useBinder)([store.model], () => {
              setFetching(store.model.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              await store.save();
              globalThis.setTimeout(() => {
                setFetching(false);
              }, 1000);
            };
            const value = {
              store,
              fetching,
              texts,
              activities: store.model?.activities.items,
              onSubmit
            };
            const cls = `app-module-creation-page ${fetching ? 'is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_header.Header, {
              texts: texts
            }), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement("section", {
              className: "page-card__container grid-container g-2-columns"
            }, React.createElement(_form.ModuleForm, null), React.createElement(_rightPanel.RightPanel, {
              fetching: fetching && !value.activities.length
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/right-panel
      ***********************************/

      ims.set('./views/right-panel', {
        hash: 2784014979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RightPanel = RightPanel;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("./activities/list");
          var _context = require("./context");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function RightPanel({
            fetching
          }) {
            const {
              texts,
              activities
            } = (0, _context.useModuleContext)();
            if (fetching) {
              return _react.default.createElement(_ui.ProcessContainer, {
                fetching: true
              }, _react.default.createElement("div", null, _react.default.createElement(_ui.RotatingMessage, {
                content: texts.processMessages
              })));
            }
            if (!activities.length) return _react.default.createElement(_empty.Empty, null, texts.empty, " ");
            const Control = !fetching ? _list.ModuleActivities : _ui.ProcessContainer;
            return _react.default.createElement("div", null, _react.default.createElement(Control, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/right-panel",
        "from": "RightPanel",
        "name": "RightPanel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/components/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RightPanel') && _export("RightPanel", RightPanel = require ? require('./views/right-panel').RightPanel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwic2VsZWN0ZWQiLCJpZCIsInNwZWNzIiwiTGVhcm5pbmdNb2R1bGUiLCJpc1JlYWR5IiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdGllcyIsIm1hcCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsIl9yZWFjdCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb250cm9sIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwidGV4dHMiLCJvblN1Ym1pdCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VCaW5kZXIiLCJsZW5ndGgiLCJhdHRycyIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkZvcm0iLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJfaXRlbSIsImRhdGEiLCJpbmRleCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJDb250cm9sIiwiTW9kdWxlQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidXNlRWZmZWN0IiwiX29wdGlvbnMiLCJfdXNlQWN0aXZpdHlDb250YWluZXIiLCJ0eXBlIiwidHlwZXMiLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJyZWYiLCJ1c2VBY3Rpdml0eUNvbnRhaW5lciIsInZhbHVlcyIsInNldFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhbmNlbCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJzZXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJJbnB1dCIsIlRleHRhcmVhIiwiaGFzT3duUHJvcGVydHkiLCJBY3Rpdml0eU9wdGlvbnMiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiX3NwZWNzIiwiX2ljb25zIiwiX2ljb25zMiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJ0aW1lIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwiSXRlbSIsImtpbmQiLCJDaGlwIiwidXNlUmVmIiwiY2xvc2VzdCIsInRvZ2dsZSIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZHVsZSIsIl9pbmZvcm1hdGlvbiIsIk1vZHVsZUZvcm0iLCJNb2R1bGVJbmZvcm1hdGlvbiIsIk1vZHVsZVNwZWNpZmljYXRpb25zIiwibGFiZWxzIiwiX3JhZGlvQnV0dG9uIiwic2V0TmFtZSIsInNldEZldGNoaW5nIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsImNvbnRlbnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlIiwibGFiZWwiLCJtb2R1bGUiLCJyZXF1aXJlZCIsIlJhZGlvQnV0dG9uIiwiZm9ybSIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwibW9kdWxlTGVuZ3RoIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIm91dHB1dCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfcmlnaHRQYW5lbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJjbHMiLCJQYWdlQ29udGFpbmVyIiwiUHJvdmlkZXIiLCJSaWdodFBhbmVsIiwiX2VtcHR5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInByb2Nlc3NNZXNzYWdlcyIsIkVtcHR5IiwiZW1wdHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2NvbnRyb2wudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2Zvcm0vb3B0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3VzZS1hY3Rpdml0eS1jb250YWluZXIudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5mb3JtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vbW9kdWxlLnRzeCIsIi90cy92aWV3cy9mb3JtL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JpZ2h0LXBhbmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQWEsS0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ00sTUFBT08sWUFBYSxTQUFRVSxNQUFBLENBQUFD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