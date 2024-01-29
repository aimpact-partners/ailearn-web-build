System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.9/model", "react@18.2.0", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/form", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/chips", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/modal", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "framer-motion@10.17.8", "pragmate-ui@0.0.3/alert"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
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
    }, function (_beyondJsReactive119Model) {
      dependency_5 = _beyondJsReactive119Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi003List) {
      dependency_7 = _pragmateUi003List;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_pragmateUi003Form) {
      dependency_9 = _pragmateUi003Form;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_10 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi003Icons) {
      dependency_11 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi003Collapsible) {
      dependency_13 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Chips) {
      dependency_14 = _pragmateUi003Chips;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_15 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Modal) {
      dependency_16 = _pragmateUi003Modal;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi003Toast) {
      dependency_18 = _pragmateUi003Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_19 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi003Alert) {
      dependency_22 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/chips', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/modal', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/alert', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management.widget",
        "is": "page",
        "route": "/modules/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3399872820,
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
            hide() {
              this.#store.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3099725408,
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
            #improvements = [];
            get improvements() {
              return this.#improvements;
            }
            #selected;
            get defaultValues() {
              return {
                audience: 'school',
                duration: 45,
                target: 13,
                proposal: '',
                content: '',
                objective: '',
                observations: '',
                totalActivities: 3
              };
            }
            #editActivity;
            get editActivity() {
              return this.#editActivity;
            }
            set editActivity(value) {
              this.#editActivity = value;
              this.trigger('activity.selected');
            }
            get selected() {
              return this.#selected;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                const specs = id === 'new' ? {} : {
                  id
                };
                if (id === 'new' && this.#model) this.hide();
                this.#model = new _core.LearningModule(specs);
                await this.#model.isReady;
                if (id !== 'new') await this.#model.load({
                  id
                });
                // await this.#model.generateActivities(this.defaultValues);
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
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
            async clean() {
              this.#model.activities.clean();
              this.trigger('change');
            }
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.fetching = false;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = false;
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#model.objective = data.objective;
                this.triggerEvent('change');
                return this.#model.objective;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async publish() {
              try {
                this.fetching = true;
                const response = await this.model.publish();
                console.log(30, response);
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 675635946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _item = require("./list/item");
          var _form = require("pragmate-ui/form");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          function ModuleActivities() {
            const {
              texts,
              store,
              activities,
              onSubmit
            } = (0, _context.useModuleContext)();
            const attrs = {
              disabled: store.model.fetching || store.fetching
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_activity.ModuleInformation, {
              store: store,
              texts: texts
            }), _react.default.createElement(_list.List, {
              className: "module-activities__list",
              items: activities,
              control: _item.ModuleActivity
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              ...attrs,
              onClick: onSubmit,
              variant: "primary"
            }, texts.actions.save)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/index
      **************************************************/

      ims.set('./views/activities/list/item/index', {
        hash: 3006158981,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _specs = require("./specs");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          function ModuleActivity({
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
            const ref = (0, _react.useRef)(null);
            const edit = event => {
              event.stopPropagation();
              // store.editActivity(data.id);
              store.editActivity = data;
            };
            const deleteItem = event => {
              event.stopPropagation();
              ref.current.classList.add('fade-out');
              store.deleteActivity(index);
            };
            return _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement("section", null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h3", {
              className: "flex-container flex-05 flex-center "
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[data.type]
            }), data.title), _react.default.createElement("div", {
              className: "activity-details flex-container flex-vertical-center"
            }, _react.default.createElement("span", {
              className: "flex-container  flex-05"
            }, _react.default.createElement(_icons.Icon, {
              icon: "time"
            }), _react.default.createElement("span", null, data.duration, " ", texts.minutes)), _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: deleteItem
            })))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.objective, ": "), _react.default.createElement("span", null, data.objective)), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.description, ": "), data.description), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            })))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs-items
      ********************************************************/

      ims.set('./views/activities/list/item/specs-items', {
        hash: 2965749603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsList = SpecsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          const Item = ({
            data
          }) => _react.default.createElement("li", null, data);
          const QuestionItem = ({
            data,
            index
          }) => {
            const {
              text,
              correctAnswer,
              questionText
            } = data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", null, text));
          };
          function SpecsList({
            type,
            specs
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const types = {
              'content-theory': ['topics', Item],
              'multiple-choice': ['questions', QuestionItem],
              spoken: ['criterias', Item]
            };
            if (!types[type]) return null;
            const [itemsType, ItemControl] = types[type];
            const itemsList = type === 'content-theory' ? specs.hasOwnProperty('keyConcepts') ? specs.keyConcepts : specs[itemsType] : specs[itemsType];
            if (!itemsList) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts[itemsType]), _react.default.createElement(_list.List, {
              items: itemsList,
              control: ItemControl
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs
      **************************************************/

      ims.set('./views/activities/list/item/specs', {
        hash: 431299345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _specsItems = require("./specs-items");
          function ActivitySpecs({
            specs,
            type
          }) {
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              type: "primary"
            }, specs.kind), _react.default.createElement(_specsItems.SpecsList, {
              specs: specs,
              type: type
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/management
      *********************************************/

      ims.set('./views/activities/management', {
        hash: 3614336101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitiesManagement = ActivitiesManagement;
          var _react = require("react");
          var _ = require("./");
          var _components = require("pragmate-ui/components");
          var _refineActivitiesModal = require("./refine-activities-modal");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          function ActivitiesManagement() {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [editingActivity, setEditingActivity] = _react.default.useState();
            const [show, setShow] = _react.default.useState(false);
            const onClose = () => setShow(false);
            const onShow = () => setShow(true);
            (0, _hooks.useBinder)([store], () => {
              setEditingActivity(store.editActivity);
            }, 'activity.selected');
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            if (!activities.length) return null;
            const MainControl = editingActivity ? _activity.ModuleActivityForm : _.ModuleActivities;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-activity__container flex-container flex-space-between"
            }, _react.default.createElement("h2", null, texts.actions.activity), _react.default.createElement("div", {
              className: "buttons__container"
            }, _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, {
              onClick: onShow,
              variant: "primary",
              icon: _icons.ICONS.aiStars
            }, texts.actions.refine), _react.default.createElement(_components.Button, {
              icon: "doc",
              className: "btn-disabled",
              variant: "primary",
              bordered: true,
              disabled: true
            }, texts.actions.update)))), _react.default.createElement(MainControl, {
              store: store,
              activity: store.editActivity
            }), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
              onClose: onClose
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/activities/refine-activities-modal
      **********************************************************/

      ims.set('./views/activities/refine-activities-modal', {
        hash: 2271117704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineActivitiesModal = RefineActivitiesModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("../steps/error");
          function RefineActivitiesModal({
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts
                },
                actions: textActions,
                processMessages
              },
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              observations: '',
              generation: 'answers'
            });
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  await store.model.refineActivities({
                    observations: values.observations
                  });
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_error.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              label: texts.textarea.label,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 3633720660,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Header({
            texts
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: false
            };
            const onSubmit = async () => {
              try {
                const response = await store.publish();
                console.log(20, response);
                _toast.toast.success('Module published successfully');
                _routing.routing.pushState(`/modules/list?tab=publish`);
              } catch (e) {
                _toast.toast.error('Error while publishing module');
              }
            };
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              bordered: true,
              ...disabled
            }, "Publish")), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.postTitle)));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/options
      ******************************************/

      ims.set('./views/components/options', {
        hash: 400669663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              audience: [[texts.audience.school, texts.audience.school], [texts.audience.university, texts.audience.university], [texts.audience.company, texts.audience.company]],
              duration: [['15', texts.moduleLength.brief], ['45', texts.moduleLength.standard], ['60', texts.moduleLength.extended]],
              language: [['en', texts.languages.en], ['es', texts.languages.es], ['pt', texts.languages.pt], ['fr', texts.languages.fr], ['de', texts.languages.de]]
            };
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/radio-button
      ***********************************************/

      ims.set('./views/components/radio-button', {
        hash: 3019030998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _options = require("./options");
          function RadioButton({
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching || !!activities.length
            };
            const data = (0, _options.getOptions)(texts);
            const output = data[name].map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              "data-index": index,
              onClick: onChange,
              key: index,
              value: value
            }, label));
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3297649898,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2798955231,
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
          var _container = require("./steps/container");
          var _management = require("./activities/management");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel, setActivePanel] = React.useState(0);
            const [activities, setActivities] = React.useState(store.model?.activities?.items);
            const onActivitiesGenerated = () => {
              setActivePanel(1);
              setActivities(store.model?.activities?.items);
            };
            (0, _hooks2.useBinder)([store.model], () => setFetching(store.model.fetching));
            (0, _hooks2.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks2.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
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
              activePanel,
              activities,
              onSubmit
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            const Control = store.model?.activities?.items.length > 0 ? _management.ActivitiesManagement : _container.StepsContainer;
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              texts: texts
            }), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(Control, null)))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/steps/container
      ***************************************/

      ims.set('./views/steps/container', {
        hash: 3158144117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsContainer = StepsContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _step = require("./step0");
          var _step2 = require("./step1");
          var _step3 = require("./step2");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _context2 = require("./context");
          function StepsContainer() {
            const {
              store,
              fetching,
              texts
            } = (0, _context.useModuleContext)();
            const [current, setCurrent] = _react.default.useState(0);
            const [values, setValues] = _react.default.useState(store.defaultValues);
            const [error, setError] = _react.default.useState();
            const [isFetching, setIsFetching] = _react.default.useState(false);
            const Controls = [_step.Step0, _step2.Step1, _step3.Step2];
            const stepValues = ['objective', 'proposal', ['audience', 'duration']];
            const Control = Controls[current];
            const stepReady = (() => {
              const index = stepValues[current];
              if (typeof index === 'string' && !!values[index]) return true;
              const data = stepValues[current];
              let valid = true;
              if (Array.isArray(data)) {
                data.forEach(key => {
                  if (!values[key]) valid = false;
                });
              }
              return valid;
            })();
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            return _react.default.createElement(_context2.ModuleStepsFormContext.Provider, {
              value: {
                values,
                setValues,
                error,
                setError,
                store,
                texts,
                onChange,
                current,
                setCurrent,
                fetching: fetching || isFetching,
                setIsFetching
              }
            }, _react.default.createElement(_form.Form, {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement("div", {
              className: "wizard__container"
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, null))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching || isFetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            }))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/steps/context
      *************************************/

      ims.set('./views/steps/context', {
        hash: 3063528704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleStepsFormContext = exports.ModuleStepsFormContext = void 0;
          var _react = require("react");
          const ModuleStepsFormContext = exports.ModuleStepsFormContext = _react.default.createContext({});
          const useModuleStepsFormContext = () => _react.default.useContext(ModuleStepsFormContext);
          exports.useModuleStepsFormContext = useModuleStepsFormContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/error
      ***********************************/

      ims.set('./views/steps/error', {
        hash: 3301282445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/steps/footer
      ************************************/

      ims.set('./views/steps/footer', {
        hash: 2165885056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsFooter = StepsFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function StepsFooter({
            onSubmit,
            disabled = false,
            previous = true
          }) {
            const {
              texts,
              setCurrent,
              current
            } = (0, _context.useModuleStepsFormContext)();
            // const stepReady = (() => {
            // 	const index = stepValues[show];
            // 	if (typeof index === 'string' && !!values[index]) return true;
            // 	const data = stepValues[show];
            // 	let valid = true;
            // 	if (Array.isArray(data)) {
            // 		data.forEach(key => {
            // 			if (!values[key]) valid = false;
            // 		});
            // 	}
            // 	return valid;
            // })();
            return _react.default.createElement("footer", null, previous && _react.default.createElement(_components.Button, {
              className: "wizard-input",
              variant: "primary",
              bordered: true,
              onClick: () => setCurrent(current - 1)
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              variant: "primary",
              onClick: onSubmit,
              disabled: disabled,
              sizing: "xl"
            }, texts.actions.next));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/steps/step-container
      ********************************************/

      ims.set('./views/steps/step-container', {
        hash: 3386266850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepContainer = StepContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function StepContainer({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step0
      ***********************************/

      ims.set('./views/steps/step0', {
        hash: 1227813061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step0 = Step0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("./step-container");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _context = require("./context");
          var _footer = require("./footer");
          function Step0() {
            const {
              values,
              setValues,
              store,
              texts: {
                suggestions: texts,
                actions
              },
              setCurrent,
              current,
              onChange
            } = (0, _context.useModuleStepsFormContext)();
            const [improvement, setImprovement] = _react.default.useState();
            const analize = async () => {
              await store.getObjectiveImprovements({
                objective: values.proposal
              });
            };
            const onSubmit = async () => {
              if (typeof improvement === 'number' && improvement !== -1) {
                const selected = store.improvements[improvement];
                const objective = await store.generateObjective({
                  objective: values.proposal,
                  improvements: [selected]
                });
                setValues({
                  ...values,
                  objective
                });
              }
              setCurrent(current + 1);
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("label", null, texts.step0.title), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.description), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.proposal,
              name: "proposal",
              placeholder: texts.step0.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement("div", {
              className: "mt-30 flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: analize,
              variant: "primary",
              bordered: true,
              sizing: "xs"
            }, actions.analyse)), store.improvements.length > 0 && _react.default.createElement(_suggestions.ObjectiveSuggestions, {
              improvement: improvement,
              setImprovement: setImprovement
            }), _react.default.createElement(_footer.StepsFooter, {
              previous: false,
              disabled: !values.proposal,
              onSubmit: onSubmit
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step1
      ***********************************/

      ims.set('./views/steps/step1', {
        hash: 4135525060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step1 = Step1;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("./step-container");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _footer = require("./footer");
          function Step1() {
            const {
              values,
              setValues,
              texts: {
                suggestions: texts,
                actions
              },
              setCurrent,
              current
            } = (0, _context.useModuleStepsFormContext)();
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const onSubmit = () => {
              setCurrent(current + 1);
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("label", null, texts.step0.title), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.description), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: texts.step0.textArea,
              counter: true,
              maxLength: 400
            }), _react.default.createElement(_footer.StepsFooter, {
              disabled: !values.objective,
              onSubmit: onSubmit
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step2
      ***********************************/

      ims.set('./views/steps/step2', {
        hash: 1913231914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step2 = Step2;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _radioButton = require("../components/radio-button");
          var _routing = require("@beyond-js/kernel/routing");
          var _stepContainer = require("./step-container");
          var _context = require("./context");
          var _footer = require("./footer");
          function Step2() {
            const {
              texts,
              store,
              values,
              setValues,
              setError,
              setIsFetching
            } = (0, _context.useModuleStepsFormContext)();
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  audienceIndex: event.currentTarget.dataset?.index,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onChangeDuration: event => {
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
              }
            };
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.audienceIndex);
            if (values?.audience?.index) selected = parseInt(values.audience.index);
            const onSubmit = async event => {
              try {
                await store.model.draft({
                  ...values,
                  type: 'module',
                  totalActivities: 5
                });
                _routing.routing.replaceState({}, undefined, `/modules/management/${store.model.id}`);
                return;
              } catch (e) {
                setError(e.message);
              } finally {
                setIsFetching(false);
              }
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("div", {
              className: "second-flex-container"
            }, _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.audience,
              onChange: events.onChange,
              selected: firstSelected,
              name: "audience"
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.suggestions.step2.forWhom)), _react.default.createElement("div", {
              className: "second-flex-container mt-20 mb-20"
            }, _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.duration,
              name: "duration",
              selected: selected,
              onChange: events.onChangeDuration
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.suggestions.step2.howLong)), _react.default.createElement(_footer.StepsFooter, {
              onSubmit: onSubmit
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/steps/suggestions
      *****************************************/

      ims.set('./views/steps/suggestions', {
        hash: 1202194715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("./step-container");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          function ObjectiveSuggestions({
            improvement,
            setImprovement
          }) {
            const {
              texts: {
                suggestions: texts,
                actions
              },
              store,
              values
            } = (0, _context.useModuleStepsFormContext)();
            const onSelect = event => {
              event.stopPropagation();
              const {
                index
              } = event.currentTarget.dataset;
              if (index === 'original') {
                setImprovement(-1);
                return;
              }
              setImprovement(parseInt(index));
            };
            const Item = ({
              data,
              index
            }) => {
              const cls = `objectives__item${index === improvement ? ' selected' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                "data-index": index,
                onClick: onSelect
              }, _react.default.createElement("div", {
                className: "item__content"
              }, data));
            };
            const clsOriginal = `objectives__item${improvement === -1 ? ' selected' : ''}`;
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("div", {
              className: "help-info mt-15 mb-10"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.suggestions), _react.default.createElement(_list.List, {
              className: "objectives__list",
              control: Item,
              items: store.improvements
            }, _react.default.createElement("div", {
              "data-index": "original",
              className: clsOriginal
            }, "Keep original: ", values.proposal)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImltcHJvdmVtZW50cyIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJwcm9wb3NhbCIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJMZWFybmluZ01vZHVsZSIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJsb2ciLCJfcmVhY3QiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9mb3JtIiwiX2FjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdGllcyIsInRleHRzIiwib25TdWJtaXQiLCJ1c2VNb2R1bGVDb250ZXh0IiwiYXR0cnMiLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRm9ybSIsIk1vZHVsZUluZm9ybWF0aW9uIiwiTGlzdCIsImNsYXNzTmFtZSIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3NwZWNzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsImluZGV4IiwicmVmIiwidXNlUmVmIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsImljb24iLCJJQ09OUyIsInR5cGUiLCJ0aXRsZSIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInRleHQiLCJjb3JyZWN0QW5zd2VyIiwicXVlc3Rpb25UZXh0IiwiRnJhZ21lbnQiLCJTcGVjc0xpc3QiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfIiwiX3JlZmluZUFjdGl2aXRpZXNNb2RhbCIsIl9ob29rcyIsIkFjdGl2aXRpZXNNYW5hZ2VtZW50IiwiZWRpdGluZ0FjdGl2aXR5Iiwic2V0RWRpdGluZ0FjdGl2aXR5IiwidXNlU3RhdGUiLCJzZXRTaG93Iiwib25DbG9zZSIsIm9uU2hvdyIsInVzZUJpbmRlciIsImxlbmd0aCIsIk1haW5Db250cm9sIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHkiLCJCdXR0b25Hcm91cCIsImFpU3RhcnMiLCJyZWZpbmUiLCJib3JkZXJlZCIsInVwZGF0ZSIsIlJlZmluZUFjdGl2aXRpZXNNb2RhbCIsIl9tb2RhbCIsIl91aSIsIl9lcnJvciIsIm1vZHVsZSIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsImdlbmVyYXRpb24iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwicmVmaW5lQWN0aXZpdGllcyIsIm1lc3NhZ2UiLCJNb2RhbCIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfdG9hc3QiLCJfcm91dGluZyIsIkhlYWRlciIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJtYXAiLCJrZXkiLCJodG1sRm9yIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImNscyIsIkNvbnRyb2wiLCJTdGVwc0NvbnRhaW5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIl9mcmFtZXJNb3Rpb24iLCJfc3RlcCIsIl9zdGVwMiIsIl9zdGVwMyIsIl9jb250ZXh0MiIsInNldEN1cnJlbnQiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIkNvbnRyb2xzIiwiU3RlcDAiLCJTdGVwMSIsIlN0ZXAyIiwic3RlcFZhbHVlcyIsInN0ZXBSZWFkeSIsInZhbGlkIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIk1vZHVsZVN0ZXBzRm9ybUNvbnRleHQiLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VNb2R1bGVTdGVwc0Zvcm1Db250ZXh0IiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInByZXZpb3VzIiwiYmFjayIsInNpemluZyIsIm5leHQiLCJTdGVwQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9zdGVwQ29udGFpbmVyIiwiX3N1Z2dlc3Rpb25zIiwiX2Zvb3RlciIsInN1Z2dlc3Rpb25zIiwiaW1wcm92ZW1lbnQiLCJzZXRJbXByb3ZlbWVudCIsImFuYWxpemUiLCJzdGVwMCIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsImFuYWx5c2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIl9yYWRpb0J1dHRvbiIsImF1ZGllbmNlSW5kZXgiLCJkYXRhc2V0Iiwib25DaGFuZ2VEdXJhdGlvbiIsImFjdGl2aXRpZXNOdW1iZXIiLCJmaXJzdFNlbGVjdGVkIiwicGFyc2VJbnQiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsImZvcm0iLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIiwib25TZWxlY3QiLCJjbHNPcmlnaW5hbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy1pdGVtcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3RlcHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Zvb3Rlci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwLnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMS50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N1Z2dlc3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFB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