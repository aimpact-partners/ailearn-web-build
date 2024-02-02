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
        hash: 3175051063,
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
        hash: 3592361060,
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
        hash: 2878793690,
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
            (0, _hooks2.useBinder)([store.model], () => setFetching(store.model.fetching));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImltcHJvdmVtZW50cyIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJwcm9wb3NhbCIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiTGVhcm5pbmdNb2R1bGUiLCJpc1JlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwiYWN0aXZpdGllcyIsInJlbW92ZSIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwicHVibGlzaCIsInJlc3BvbnNlIiwibG9nIiwiX3JlYWN0IiwiX2xpc3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0ZXh0cyIsIm9uU3VibWl0IiwidXNlTW9kdWxlQ29udGV4dCIsImF0dHJzIiwiZGlzYWJsZWQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJfc3BlY3MiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwidHlwZSIsInRpdGxlIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwidGV4dCIsImNvcnJlY3RBbnN3ZXIiLCJxdWVzdGlvblRleHQiLCJGcmFnbWVudCIsIlNwZWNzTGlzdCIsInR5cGVzIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiX2NoaXBzIiwiX3NwZWNzSXRlbXMiLCJraW5kIiwiQ2hpcCIsIl9tb2RhbCIsIl91aSIsIl9lcnJvciIsIlJlZmluZUFjdGl2aXRpZXNNb2RhbCIsImNvbmZpcm0iLCJvbkNsb3NlIiwicmVmaW5lIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImFpU3RhcnMiLCJDb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfdG9hc3QiLCJfcm91dGluZyIsIkhlYWRlciIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9hY3Rpdml0eSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2NvbnRhaW5lciIsIl9tb2R1bGUyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJlZGl0aW5nQWN0aXZpdHkiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xzIiwiQ29udHJvbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIk1vZHVsZU1hbmFnZW1lbnQiLCJTdGVwc0NvbnRhaW5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImFjdGl2aXR5IiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiUmVmaW5lbWVudE1vZGFsIiwidXBsb2FkIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiX2FjdGl2aXRpZXMiLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiX2NvdmVySW1hZ2UiLCJzZXRTaG93Iiwib25TaG93IiwiX2ZyYW1lck1vdGlvbiIsIl9zdGVwIiwiX3N0ZXAyIiwiX3N0ZXAzIiwiX2NvbnRleHQyIiwic2V0Q3VycmVudCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiTW9kdWxlU3RlcHNGb3JtQ29udGV4dCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZU1vZHVsZVN0ZXBzRm9ybUNvbnRleHQiLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwicHJldmlvdXMiLCJiYWNrIiwic2l6aW5nIiwibmV4dCIsIlN0ZXBDb250YWluZXIiLCJjaGlsZHJlbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3N0ZXBDb250YWluZXIiLCJfc3VnZ2VzdGlvbnMiLCJfZm9vdGVyIiwic3VnZ2VzdGlvbnMiLCJpbXByb3ZlbWVudCIsInNldEltcHJvdmVtZW50IiwiYW5hbGl6ZSIsInN0ZXAwIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiYW5hbHlzZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJkYXRhc2V0IiwicGFyc2VJbnQiLCJjbHNPcmlnaW5hbCIsIl9yYWRpb0J1dHRvbiIsImF1ZGllbmNlSW5kZXgiLCJvbkNoYW5nZUR1cmF0aW9uIiwiYWN0aXZpdGllc051bWJlciIsImZpcnN0U2VsZWN0ZWQiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsImZvcm0iLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3RlcHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Zvb3Rlci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMC9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDEudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FB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