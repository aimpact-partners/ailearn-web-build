System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.9/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/modal", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/image", "framer-motion@10.17.8", "pragmate-ui@0.0.6/alert"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006List) {
      dependency_7 = _pragmateUi006List;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_10 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Collapsible) {
      dependency_13 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Chips) {
      dependency_14 = _pragmateUi006Chips;
    }, function (_pragmateUi006Modal) {
      dependency_15 = _pragmateUi006Modal;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Toast) {
      dependency_17 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_20 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Image) {
      dependency_21 = _pragmateUi006Image;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_pragmateUi006Alert) {
      dependency_23 = _pragmateUi006Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/chips', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/alert', dependency_23]]);
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
        hash: 951085730,
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
            #objectivesGenerated = new Map();
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
                const specs = id === 'new' ? {
                  type: 'draft'
                } : {
                  id,
                  type: 'draft'
                };
                if (id === 'new' && this.#model) this.hide();
                this.#model = new _core.LearningModule(specs);
                globalThis.model = this.#model;
                await this.#model.isReady;
                if (id !== 'new') await this.#model.load({
                  id,
                  type: 'draft'
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
                if (this.#objectivesGenerated.has(improvements)) return this.#objectivesGenerated.get(improvements);
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#objectivesGenerated.set(objective, data.objective);
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
        hash: 1053747505,
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
            }, _react.default.createElement(_list.List, {
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

      /**********************************************************
      INTERNAL MODULE: ./views/activities/refine-activities-modal
      **********************************************************/

      ims.set('./views/activities/refine-activities-modal', {
        hash: 2973180359,
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
            confirm,
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts,
                  textarea: textAreaTexts
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
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setOpenConfirm(false);
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
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
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
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            }), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 130094170,
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
            }, texts.actions.publish)), _react.default.createElement(_ui.PageTitle, {
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
        hash: 3611900498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _container = require("./steps/container");
          var _module2 = require("./module");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel, setActivePanel] = React.useState(0);
            const [activities, setActivities] = React.useState(store.model?.activities?.items);
            const [editingActivity, setEditingActivity] = React.useState();
            const onActivitiesGenerated = () => {
              setActivePanel(1);
              setActivities(store.model?.activities?.items);
            };
            (0, _hooks2.useBinder)([store.model], () => setFetching(store?.model?.fetching));
            (0, _hooks2.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks2.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks2.useBinder)([store], () => {
              setEditingActivity(store.editActivity);
            }, 'activity.selected');
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
            const Control = store.model?.activities?.items.length > 0 ? editingActivity ? _activity.ModuleActivityForm : _module2.ModuleManagement : _container.StepsContainer;
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              texts: texts
            }), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(Control, {
              store: store,
              activity: store.editActivity
            })))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/module/cover-image/actions
      **************************************************/

      ims.set('./views/module/cover-image/actions', {
        hash: 3737179292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _refinementModal = require("./refinement-modal");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [image, setImage] = _react.default.useState();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            (0, _hooks.useBinder)([store.model], () => {
              console.log('disparada imagen', store.model.cover);
              setImage(store.model.cover);
            }, 'image.generated');
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await store.model.generatePicture();
              setFetching(false);
            };
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: () => setShowRefiningModal(true),
                icon: _icons.ICONS.aiStars
              }, texts.actions.refine), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: generateImage,
              bordered: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.cover), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.upload));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/module/cover-image/index
      ************************************************/

      ims.set('./views/module/cover-image/index', {
        hash: 180632105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          function CoverImage() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [image, setImage] = _react.default.useState(store.model?.picture);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([store.model], () => setImage(store.model.picture), 'image.generated');
            return _react.default.createElement("div", {
              className: "cover-image__container"
            }, store.model.picture && _react.default.createElement(_image.Image, {
              src: image
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching,
              generated: !!store.model.picture
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/module/cover-image/refinement-modal
      ***********************************************************/

      ims.set('./views/module/cover-image/refinement-modal', {
        hash: 2594354998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("../../steps/error");
          function RefinementModal({
            confirm,
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts,
                  textarea: textAreaTexts
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
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await store.model.generatePicture(values.observations);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
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
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 3735187649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleManagement = ModuleManagement;
          var _react = require("react");
          var _activities = require("../activities");
          var _components = require("pragmate-ui/components");
          var _refineActivitiesModal = require("../activities/refine-activities-modal");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _coverImage = require("./cover-image");
          function ModuleManagement() {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const onClose = () => setShow(false);
            const onShow = () => setShow(true);
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            if (!activities.length) return null;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "relative-container module-header-description"
            }, _react.default.createElement("h2", null, store.model.title), _react.default.createElement("span", null, store.model.description), _react.default.createElement("section", {
              className: "actions__section buttons__container mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onShow,
              variant: "primary",
              icon: _icons.ICONS.aiStars
            }, texts.actions.refine))), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement(_activities.ModuleActivities, {
              store: store,
              activity: store.editActivity
            }), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
              confirm: true,
              onClose: onClose
            }));
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

      /*****************************************
      INTERNAL MODULE: ./views/steps/step0/index
      *****************************************/

      ims.set('./views/steps/step0/index', {
        hash: 2786685514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step0 = Step0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("../step-container");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _context = require("../context");
          var _footer = require("../footer");
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
              } else {
                setValues({
                  ...values,
                  objective: values.proposal
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

      /***********************************************
      INTERNAL MODULE: ./views/steps/step0/suggestions
      ***********************************************/

      ims.set('./views/steps/step0/suggestions', {
        hash: 2190795046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("../step-container");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
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
              className: clsOriginal,
              onClick: onSelect
            }, "Keep original: ", values.proposal)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImltcHJvdmVtZW50cyIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJwcm9wb3NhbCIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJsb2ciLCJfcmVhY3QiLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsInRleHRzIiwib25TdWJtaXQiLCJ1c2VNb2R1bGVDb250ZXh0IiwiYXR0cnMiLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRm9ybSIsIkxpc3QiLCJjbGFzc05hbWUiLCJpdGVtcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYWN0aW9ucyIsIl9zcGVjcyIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJ0aXRsZSIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInRleHQiLCJjb3JyZWN0QW5zd2VyIiwicXVlc3Rpb25UZXh0IiwiRnJhZ21lbnQiLCJTcGVjc0xpc3QiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfbW9kYWwiLCJfdWkiLCJfZXJyb3IiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJjb25maXJtIiwib25DbG9zZSIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwicmVmaW5lQWN0aXZpdGllcyIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9jb250YWluZXIiLCJfbW9kdWxlMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwiZWRpdGluZ0FjdGl2aXR5Iiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwidXNlQmluZGVyIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiY2xzIiwiQ29udHJvbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIk1vZHVsZU1hbmFnZW1lbnQiLCJTdGVwc0NvbnRhaW5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImFjdGl2aXR5IiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiUmVmaW5lbWVudE1vZGFsIiwidXBsb2FkIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiX2FjdGl2aXRpZXMiLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiX2NvdmVySW1hZ2UiLCJzZXRTaG93Iiwib25TaG93IiwiX2ZyYW1lck1vdGlvbiIsIl9zdGVwIiwiX3N0ZXAyIiwiX3N0ZXAzIiwiX2NvbnRleHQyIiwic2V0Q3VycmVudCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiTW9kdWxlU3RlcHNGb3JtQ29udGV4dCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZU1vZHVsZVN0ZXBzRm9ybUNvbnRleHQiLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwicHJldmlvdXMiLCJiYWNrIiwic2l6aW5nIiwibmV4dCIsIlN0ZXBDb250YWluZXIiLCJjaGlsZHJlbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3N0ZXBDb250YWluZXIiLCJfc3VnZ2VzdGlvbnMiLCJfZm9vdGVyIiwic3VnZ2VzdGlvbnMiLCJpbXByb3ZlbWVudCIsInNldEltcHJvdmVtZW50IiwiYW5hbGl6ZSIsInN0ZXAwIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiYW5hbHlzZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJkYXRhc2V0IiwicGFyc2VJbnQiLCJjbHNPcmlnaW5hbCIsIl9yYWRpb0J1dHRvbiIsImF1ZGllbmNlSW5kZXgiLCJvbkNoYW5nZUR1cmF0aW9uIiwiYWN0aXZpdGllc051bWJlciIsImZpcnN0U2VsZWN0ZWQiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsImZvcm0iLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3RlcHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Zvb3Rlci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMC9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDEudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FB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