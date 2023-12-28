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
        hash: 677068110,
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
            const onChangeDuration = event => {
              const activitiesNumber = {
                '15': 3,
                '45': 5,
                '60': 7
              };
              setValues({
                ...values,
                totalActivities: activitiesNumber[event.currentTarget.value],
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            console.log(104, values);
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
              onChange: onChange,
              name: "audience",
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
              name: "duration",
              onChange: onChangeDuration,
              ...disabled,
              items: [['15', texts.moduleLength.brief], ['45', texts.moduleLength.standard], ['60', texts.moduleLength.extended]]
            }), _react.default.createElement(_radioButton.RadioButton, {
              label: texts.languages.label,
              name: "language",
              onChange: onChange,
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
        hash: 1621854887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function RadioButton({
            name,
            onChange,
            disabled,
            label,
            items
          }) {
            const output = items.map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              onClick: onChange,
              key: index,
              value: value
            }, label));
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
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
        hash: 1128334815,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwic2VsZWN0ZWQiLCJpZCIsInNwZWNzIiwiTGVhcm5pbmdNb2R1bGUiLCJpc1JlYWR5IiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdGllcyIsIm1hcCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsIl9yZWFjdCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb250cm9sIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwidGV4dHMiLCJvblN1Ym1pdCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VCaW5kZXIiLCJsZW5ndGgiLCJhdHRycyIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkZvcm0iLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJfaXRlbSIsImRhdGEiLCJpbmRleCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJDb250cm9sIiwiTW9kdWxlQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidXNlRWZmZWN0IiwiX29wdGlvbnMiLCJfdXNlQWN0aXZpdHlDb250YWluZXIiLCJ0eXBlIiwidHlwZXMiLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJyZWYiLCJ1c2VBY3Rpdml0eUNvbnRhaW5lciIsInZhbHVlcyIsInNldFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhbmNlbCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJzZXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJJbnB1dCIsIlRleHRhcmVhIiwiaGFzT3duUHJvcGVydHkiLCJBY3Rpdml0eU9wdGlvbnMiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiX3NwZWNzIiwiX2ljb25zIiwiX2ljb25zMiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJ0aW1lIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwiSXRlbSIsImtpbmQiLCJDaGlwIiwidXNlUmVmIiwiY2xvc2VzdCIsInRvZ2dsZSIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZHVsZSIsIl9pbmZvcm1hdGlvbiIsIk1vZHVsZUZvcm0iLCJNb2R1bGVJbmZvcm1hdGlvbiIsIk1vZHVsZVNwZWNpZmljYXRpb25zIiwibGFiZWxzIiwiX3JhZGlvQnV0dG9uIiwic2V0TmFtZSIsInNldEZldGNoaW5nIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsImNvbnRlbnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlIiwib25DaGFuZ2VEdXJhdGlvbiIsImFjdGl2aXRpZXNOdW1iZXIiLCJsb2ciLCJsYWJlbCIsIm1vZHVsZSIsInJlcXVpcmVkIiwiUmFkaW9CdXR0b24iLCJmb3JtIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwib3V0cHV0Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9yaWdodFBhbmVsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJQcm92aWRlciIsIlJpZ2h0UGFuZWwiLCJfZW1wdHkiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwicHJvY2Vzc01lc3NhZ2VzIiwiRW1wdHkiLCJlbXB0eSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vY29udHJvbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZm9ybS9vcHRpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vdXNlLWFjdGl2aXR5LWNvbnRhaW5lci50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmlnaHQtcGFuZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRCxJQUFBYSxLQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEs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