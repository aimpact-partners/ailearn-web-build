System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.9/model", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/tabs", "pragmate-ui@0.0.3/form", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/chips", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "framer-motion@10.17.8", "pragmate-ui@0.0.3/alert"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, OptionAnswers, ItemOption, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    OptionAnswers: void 0,
    ItemOption: void 0,
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
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }, function (_pragmateUi003Tabs) {
      dependency_8 = _pragmateUi003Tabs;
    }, function (_pragmateUi003Form) {
      dependency_9 = _pragmateUi003Form;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi003List) {
      dependency_13 = _pragmateUi003List;
    }, function (_pragmateUi003Chips) {
      dependency_14 = _pragmateUi003Chips;
    }, function (_pragmateUi003Icons) {
      dependency_15 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_16 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_pragmateUi003Modal) {
      dependency_19 = _pragmateUi003Modal;
    }, function (_pragmateUi003Toast) {
      dependency_20 = _pragmateUi003Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_22 = _aimpactChat101SharedHooks;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }, function (_pragmateUi003Alert) {
      dependency_24 = _pragmateUi003Alert;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/tabs', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/chips', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/toast', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['framer-motion', dependency_23], ['pragmate-ui/alert', dependency_24]]);
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
        hash: 2031912405,
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
            #objectives = [];
            get objectives() {
              return this.#objectives;
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
            async generateObjectives({
              objective
            }) {
              try {
                this.fetching = false;
                const data = await this.model.generateObjectives({
                  objective
                });
                this.#objectives = data;
                this.triggerEvent('change');
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

      /***********************************************
      INTERNAL MODULE: ./views/activities/form/actions
      ***********************************************/

      ims.set('./views/activities/form/actions', {
        hash: 3022291680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityActions = ActivityActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ActivityActions() {
            const {
              activity
            } = (0, _context.useFormActivityContext)();
            globalThis.activity = activity;
            const materialsAttrs = {};
            return _react.default.createElement("section", {
              className: "mt-15 mb-15 flex-container flex-100 flex-end"
            }, _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "Portrait"), activity.type === 'content-theory' && _react.default.createElement(_components.Button, null, "Generate "), _react.default.createElement(_components.Button, null, "Generate materials")));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/activities/form/activity/index
      ******************************************************/

      ims.set('./views/activities/form/activity/index', {
        hash: 3826197848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityForm = ActivityForm;
          var _react = require("react");
          var _options = require("../options");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function ActivityForm({}) {
            const {
              store: {
                editActivity: activity
              },
              store,
              texts: {
                actions
              }
            } = (0, _context.useModuleContext)();
            const ref = _react.default.useRef(null);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const save = async () => {
              activity.set(values);
              await store.model.saveDraft();
              store.editActivity = undefined;
            };
            return _react.default.createElement(_form.Form, null, _react.default.createElement("div", {
              className: "module-activity__form",
              ref: ref
            }, _react.default.createElement(_options.ActivityOptions, {
              values: values,
              activity: activity,
              setValues: setValues
            }), _react.default.createElement("footer", {
              className: "form__footer flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: save
            }, actions.save))));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/activities/form/activity/information
      ************************************************************/

      ims.set('./views/activities/form/activity/information', {
        hash: 771417908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleInformation = ModuleInformation;
          var _react = require("react");
          var _context = require("../../../context");
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

      /***********************************************
      INTERNAL MODULE: ./views/activities/form/context
      ***********************************************/

      ims.set('./views/activities/form/context', {
        hash: 530831101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormActivityContext = exports.FormActivityContext = void 0;
          var _react = require("react");
          const FormActivityContext = exports.FormActivityContext = _react.default.createContext(null);
          const useFormActivityContext = () => _react.default.useContext(FormActivityContext);
          exports.useFormActivityContext = useFormActivityContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/activities/form/get-options
      ***************************************************/

      ims.set('./views/activities/form/get-options', {
        hash: 739493005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              type: [['answers', texts.answers], ['questions', texts.questions]]
            };
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/form/index
      *********************************************/

      ims.set('./views/activities/form/index', {
        hash: 2187382193,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context2 = require("./context");
          var _refineModal = require("./refine-modal");
          var _headerTitle = require("./sections/header-title");
          var _tabs = require("./tabs");
          function ModuleActivityForm({}) {
            const {
              store: {
                editActivity: activity
              }
            } = (0, _context.useModuleContext)();
            const [, setUpdate] = _react.default.useState({});
            const [showRefiningModal, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
            const {
              type
            } = activity;
            const itemsType = types[type];
            const onClose = () => setShowRefiningModal(false);
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            globalThis.activity = activity;
            return _react.default.createElement(_context2.FormActivityContext.Provider, {
              value: {
                activity,
                setValues,
                types,
                currentTab,
                setCurrentTab,
                itemsType,
                values,
                setShowRefiningModal
              }
            }, _react.default.createElement(_headerTitle.HeaderTitle, null), _react.default.createElement(_tabs.ActivityFormTabs, null), showRefiningModal && _react.default.createElement(_refineModal.RefineModal, {
              type: itemsType,
              data: activity,
              onClose: onClose
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/activities/form/interface
      *************************************************/

      ims.set('./views/activities/form/interface', {
        hash: 3998975187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/activities/form/materials/index
      *******************************************************/

      ims.set('./views/activities/form/materials/index', {
        hash: 1676320527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterial = ActivityMaterial;
          var _react = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context2 = require("../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          function ActivityMaterial({
            material
          }) {
            const {
              activity
            } = (0, _context2.useFormActivityContext)();
            let name = typeof material === 'string' ? material : material.name;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [data, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => {
              await activity.materials.generate(name);
            };
            if (!activity.materials[name]) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: "no elements"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate), _react.default.createElement(_ui.ProcessContainer, {
                fetching: fetching
              }));
            }
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, name), _react.default.createElement(_markdown.Markdown, {
              content: activity.materials[name]
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/activities/form/options/answer-form
      ***********************************************************/

      ims.set('./views/activities/form/options/answer-form', {
        hash: 3039286241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function AnswerForm({
            activity,
            toggleAnswerForm
          }) {
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              activity.addOption(value);
              toggleAnswerForm(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              variant: "primary"
            }, "Add"));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/form/options/answers/index
      *************************************************************/

      ims.set('./views/activities/form/options/answers/index', {
        hash: 1441974100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _answerForm = require("../answer-form");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            data: activity,
            index
          }) {
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(false);
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity], () => {
              setUpdate({});
            });
            if (!activity.options) return null;
            const openForm = event => {
              event.stopPropagation();
              toggleAnswerForm(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-100 flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: openForm
            }, "Add answer")), _react.default.createElement(_list.List, {
              className: "question-options__list",
              specs: {
                activity
              },
              items: activity.options,
              control: _item.AnswerItem
            }), showAnswerForm && _react.default.createElement(_answerForm.AnswerForm, {
              activity: activity,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/activities/form/options/answers/item
      ************************************************************/

      ims.set('./views/activities/form/options/answers/item', {
        hash: 3331292250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          const AnswerItem = props => {
            const {
              specs: {
                activity
              },
              item,
              index
            } = props;
            const mark = event => {
              event.preventDefault();
              activity.setCorrect(index);
            };
            return _react.default.createElement("li", null, _react.default.createElement("span", null, item), activity.correctAnswer === index ? _react.default.createElement(_chips.Chip, {
              icon: "check",
              sizing: "xs",
              type: "primary"
            }, "Correct answer") : _react.default.createElement(_components.Button, {
              onClick: mark,
              icon: "info",
              bordered: true,
              sizing: "xs",
              variant: "primary"
            }, "Mark as correct"));
          };
          exports.AnswerItem = AnswerItem;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/activities/form/options/index
      *****************************************************/

      ims.set('./views/activities/form/options/index', {
        hash: 3110928230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityOptions = ActivityOptions;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("./options-header");
          var _context2 = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityOptions({
            activity,
            values,
            setValues
          }) {
            const {
              types,
              itemsType
            } = (0, _context2.useFormActivityContext)();
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              setValues(values => {
                return {
                  ...values,
                  specs: {
                    [itemsType]: target.value
                  }
                };
              });
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            if (itemsType === 'questions') {
              //values = activity.specs.questionLabels;
              actionsSpecs.answers = {
                //@ts-ignore
                icon: _icons.ICONS.aiStars,
                title: texts.actions.generateAnswers,
                onClick: async (event, index, data) => {
                  const promise = new _core.PendingPromise();
                  await activity.generateAnswer(index, data);
                  globalThis.setTimeout(() => {
                    promise.resolve();
                  }, 2000);
                  return promise;
                }
              };
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.types[type]), _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: bulletValues,
              Item: _item.ItemOption,
              specs: {
                type: itemsType
              },
              handleChange: handleChange,
              fieldName: "topics"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/activities/form/options/item
      ****************************************************/

      ims.set('./views/activities/form/options/item', {
        hash: 466191399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const text = specs.type === 'questions' ? data.text : data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), typeof data === 'object' && _react.default.createElement(_answers.OptionAnswers, {
              data: data,
              index: index
            }));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/activities/form/options/options-header
      **************************************************************/

      ims.set('./views/activities/form/options/options-header', {
        hash: 2790742457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function BulletPointsHeader() {
            const {
              setShowRefiningModal,
              itemsType
            } = (0, _context.useFormActivityContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const couldBeRefined = ['questions', 'topics'].includes(itemsType);
            return _react.default.createElement("div", {
              className: "flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              onClick: addBulletPoint
            }, "Add bullet point"), couldBeRefined && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal(true)
            }, "Refine"));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/activities/form/radio-button
      ****************************************************/

      ims.set('./views/activities/form/radio-button', {
        hash: 2213780907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalRadioButton = ModalRadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _getOptions = require("./get-options");
          function ModalRadioButton({
            value: currentValue,
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
            };
            const data = (0, _getOptions.getOptions)(texts.activities.refine.type);
            const output = data[name].map(([value, label], index) => {
              if (value === currentValue) selected = index;
              return _react.default.createElement(_components.Button, {
                name: name,
                ...disabled,
                "data-index": index,
                onClick: onChange,
                key: index,
                value: value
              }, label);
            });
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

      /**********************************************************
      INTERNAL MODULE: ./views/activities/form/refine-modal/index
      **********************************************************/

      ims.set('./views/activities/form/refine-modal/index', {
        hash: 4145522406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions");
          var _topics = require("./topics");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          function RefineModal({
            type,
            onClose,
            data: activity
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [selectedValue, setSelectedValue] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              observations: '',
              removeItems: false,
              type
            });
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                setFetching(true);
                await activity.generateSuggestions(values);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            const Forms = {
              questions: _questions.RefineQuestionsModal,
              topics: _topics.RefineTopicsModal,
              criterias: _topics.RefineTopicsModal
            };
            const Control = Forms[type];
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(Control, {
              events: events,
              values: values,
              setValues: setValues,
              fetching: fetching,
              setFetching: setFetching
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, "Generate")), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            })));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/activities/form/refine-modal/questions
      **************************************************************/

      ims.set('./views/activities/form/refine-modal/questions', {
        hash: 1720838365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("../radio-button");
          var _context = require("../../../context");
          function RefineQuestionsModal({
            values,
            events
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific sgit uggestions or areas for improvement..."
            }), _react.default.createElement(_radioButton.ModalRadioButton, {
              name: "type",
              value: values.type,
              label: texts.activities.refine.type.label,
              onChange: events.onChange
            }), values.type === 'questions' && _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/activities/form/refine-modal/topics
      ***********************************************************/

      ims.set('./views/activities/form/refine-modal/topics', {
        hash: 1843204223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineTopicsModal = RefineTopicsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function RefineTopicsModal({
            values,
            events
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific suggestions or areas for improvement..."
            }), _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/form/sections/header-title
      *************************************************************/

      ims.set('./views/activities/form/sections/header-title', {
        hash: 854158850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          var _context2 = require("../context");
          function HeaderTitle() {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const {
              values,
              setValues
            } = (0, _context2.useFormActivityContext)();
            const onChange = event => setValues({
              ...values,
              [event.currentTarget.name]: event.currentTarget.value
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Input, {
              name: "title",
              label: texts.form.title,
              value: values.title,
              onChange: onChange
            }), _react.default.createElement(_form.Textarea, {
              label: texts.form.description,
              value: values.description,
              name: "description",
              onChange: onChange
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/activities/form/tabs
      ********************************************/

      ims.set('./views/activities/form/tabs', {
        hash: 717056198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _activity = require("./activity");
          var _context = require("../../context");
          var _materials = require("./materials");
          var _context2 = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityFormTabs({}) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              setCurrentTab,
              currentTab,
              activity
            } = (0, _context2.useFormActivityContext)();
            const onChange = (event, index, a) => {};
            const [materials, setMaterials] = _react.default.useState(activity.materials.items);
            const panes = [];
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => {
              console.log(-24);
              setMaterials([...activity.materials.items]);
            });
            activity.materials.items.forEach(item => {
              if (typeof item === 'string') {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: `${activity.id}.${item}-tab`
                }, item));
                const PaneControl = item === 'bullet-points' ? _activity.ActivityForm : _materials.ActivityMaterial;
                panes.push(_react.default.createElement(PaneControl, {
                  key: `${activity.id}.${item}-pane`,
                  material: item
                }));
                return;
              }
              const attrs = {
                disabled: false
              };
              if (item.required && !activity.materials[item.required]) {
                attrs.disabled = true;
              }
              panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                key: `${activity.id}.${item.name}-pane`,
                material: item
              }));
              tabs.push(_react.default.createElement(_tabs.Tab, {
                ...attrs
              }, item.name));
            });
            return _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "mt-15 ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, panes));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 2958675417,
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
          var _information = require("./form/activity/information");
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
            }, _react.default.createElement(_information.ModuleInformation, null), _react.default.createElement(_list.List, {
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
        hash: 2475635529,
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
            return _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h3", {
              className: "flex-container flex-05 "
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
        hash: 704965892,
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
          var _form = require("./form");
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
            const MainControl = editingActivity ? _form.ModuleActivityForm : _.ModuleActivities;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h2", null, texts.actions.activity), _react.default.createElement("div", null, _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, {
              onClick: onShow,
              variant: "primary",
              icon: _icons.ICONS.aiStars
            }, texts.actions.refine), _react.default.createElement(_components.Button, {
              icon: "doc",
              className: "btn-disabled",
              variant: "primary",
              bordered: true,
              disabled: true
            }, texts.actions.update)))), _react.default.createElement(MainControl, null), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
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
        hash: 190170956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsContainer = StepsContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _step = require("./step0");
          var _step2 = require("./step1");
          var _step3 = require("./step2");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _routing = require("@beyond-js/kernel/routing");
          function StepsContainer() {
            const {
              store,
              fetching,
              texts
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(0);
            const [values, setValues] = _react.default.useState(store.defaultValues);
            const [error, setError] = _react.default.useState();
            const [isFetching, setIsFetching] = _react.default.useState(false);
            const Controls = [_step.Step0, _step2.Step1, _step3.Step2];
            const stepValues = ['objective', 'proposal', ['audience', 'duration']];
            const Control = Controls[show];
            const stepReady = (() => {
              const index = stepValues[show];
              if (typeof index === 'string' && !!values[index]) return true;
              const data = stepValues[show];
              let valid = true;
              if (Array.isArray(data)) {
                data.forEach(key => {
                  if (!values[key]) valid = false;
                });
              }
              return valid;
            })();
            const disabled = {
              disabled: !stepReady || store.fetching
            };
            const onSubmit = async () => {
              if (show === 0) await store.generateObjectives({
                objective: values.proposal
              });
              if (show + 1 !== Controls.length) {
                setShow(show + 1);
                return;
              }
              setIsFetching(true);
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
            return _react.default.createElement(_form.Form, null, _react.default.createElement("div", {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement("div", {
              className: "wizard__container"
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, {
              key: `step-${show}`,
              values: values,
              setValues: setValues
            }))), _react.default.createElement("footer", null, show > 0 && _react.default.createElement(_components.Button, {
              className: "wizard-input",
              variant: "primary",
              bordered: true,
              onClick: () => setShow(show - 1)
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              variant: "primary",
              onClick: onSubmit,
              ...disabled,
              sizing: "xl"
            }, texts.actions.next)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching || isFetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            }))));
          }
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
        hash: 4237612849,
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
          var _context = require("../context");
          function Step0({
            values,
            setValues
          }) {
            const {
              texts: {
                suggestions: texts
              }
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.proposal,
              name: "proposal",
              label: texts.step0.title,
              placeholder: texts.step0.textArea,
              counter: true,
              maxLength: 200
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.description));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step1
      ***********************************/

      ims.set('./views/steps/step1', {
        hash: 4277213806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step1 = Step1;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("./step-container");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          function Step1({
            values,
            setValues
          }) {
            const {
              texts: {
                suggestions: texts,
                actions
              },
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState();
            const onSelect = event => {
              event.stopPropagation();
              const {
                index
              } = event.currentTarget.dataset;
              const objective = store.objectives[index];
              store.model.set({
                objective
              });
              setValues({
                ...values,
                objective
              });
              setSelected(parseInt(index));
            };
            const Item = ({
              data,
              index
            }) => {
              const cls = `objectives__item${index === selected ? ' selected' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                "data-index": index,
                onClick: onSelect
              }, _react.default.createElement("div", {
                className: "item__content"
              }, data));
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("label", {
              htmlFor: 'objective'
            }, texts.step1.title), _react.default.createElement("div", {
              className: "help-info mb-10"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step1.description), _react.default.createElement(_list.List, {
              className: "objectives__list",
              control: Item,
              items: store.objectives
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step2
      ***********************************/

      ims.set('./views/steps/step2', {
        hash: 3978446772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step2 = Step2;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _radioButton = require("../components/radio-button");
          var _context = require("../context");
          var _stepContainer = require("./step-container");
          function Step2({
            values,
            setValues
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
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
            }), texts.suggestions.step2.howLong)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/activities/form/options/answers/index",
        "from": "OptionAnswers",
        "name": "OptionAnswers"
      }, {
        "im": "./views/activities/form/options/item",
        "from": "ItemOption",
        "name": "ItemOption"
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
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./views/activities/form/options/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./views/activities/form/options/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIm9iamVjdGl2ZXMiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwidGFyZ2V0IiwicHJvcG9zYWwiLCJjb250ZW50Iiwib2JqZWN0aXZlIiwib2JzZXJ2YXRpb25zIiwidG90YWxBY3Rpdml0aWVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiTGVhcm5pbmdNb2R1bGUiLCJpc1JlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwiYWN0aXZpdGllcyIsInJlbW92ZSIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiZ2VuZXJhdGVPYmplY3RpdmVzIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInB1Ymxpc2giLCJyZXNwb25zZSIsImxvZyIsIl9yZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUFjdGlvbnMiLCJhY3Rpdml0eSIsInVzZUZvcm1BY3Rpdml0eUNvbnRleHQiLCJnbG9iYWxUaGlzIiwibWF0ZXJpYWxzQXR0cnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwidHlwZSIsIl9vcHRpb25zIiwiX2Zvcm0iLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsImFjdGlvbnMiLCJ1c2VNb2R1bGVDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2V0IiwiRm9ybSIsIkFjdGl2aXR5T3B0aW9ucyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiTW9kdWxlSW5mb3JtYXRpb24iLCJpdGVtcyIsImxlbmd0aCIsImxhYmVscyIsIkZvcm1BY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImdldE9wdGlvbnMiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX2hvb2tzIiwiX2NvbnRleHQyIiwiX3JlZmluZU1vZGFsIiwiX2hlYWRlclRpdGxlIiwiX3RhYnMiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJzZXRVcGRhdGUiLCJzaG93UmVmaW5pbmdNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIm9uQ2xvc2UiLCJ1c2VCaW5kZXIiLCJQcm92aWRlciIsIkhlYWRlclRpdGxlIiwiQWN0aXZpdHlGb3JtVGFicyIsIlJlZmluZU1vZGFsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdWkiLCJfbWFya2Rvd24iLCJBY3Rpdml0eU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJuYW1lIiwic2V0RmV0Y2hpbmciLCJtYXRlcmlhbHMiLCJzZXREYXRhIiwiZXZlbnQiLCJnZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJQcm9jZXNzQ29udGFpbmVyIiwiTWFya2Rvd24iLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwib25BZGQiLCJhZGRPcHRpb24iLCJGcmFnbWVudCIsIklucHV0IiwiX2xpc3QiLCJfYW5zd2VyRm9ybSIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImluZGV4Iiwic2hvd0Fuc3dlckZvcm0iLCJ1cGRhdGUiLCJvcHRpb25zIiwib3BlbkZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJMaXN0IiwiY29udHJvbCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIml0ZW0iLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJpY29uIiwic2l6aW5nIiwiYm9yZGVyZWQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJfaWNvbnMiLCJfb3B0aW9uc0hlYWRlciIsInNldEVycm9yIiwiaGFzT3duUHJvcGVydHkiLCJoYW5kbGVDaGFuZ2UiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJJdGVtIiwiSXRlbU9wdGlvbiIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9hbnN3ZXJzIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwibGFiZWwiLCJkaXNhYmxlZCIsInJlZmluZSIsIm91dHB1dCIsIm1hcCIsImtleSIsImh0bWxGb3IiLCJfbW9kYWwiLCJfcXVlc3Rpb25zIiwiX3RvcGljcyIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwiRm9ybXMiLCJSZWZpbmVRdWVzdGlvbnNNb2RhbCIsInRvcGljcyIsIlJlZmluZVRvcGljc01vZGFsIiwiY3JpdGVyaWFzIiwiQ29udHJvbCIsIk1vZGFsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsInByb2Nlc3NNZXNzYWdlcyIsIl9yYWRpb0J1dHRvbiIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJDaGVja2JveCIsImNoZWNrZWQiLCJmb3JtIiwiX2FjdGl2aXR5IiwiX21hdGVyaWFscyIsImEiLCJzZXRNYXRlcmlhbHMiLCJwYW5lcyIsInRhYnMiLCJmb3JFYWNoIiwicHVzaCIsIlRhYiIsIlBhbmVDb250cm9sIiwiYXR0cnMiLCJyZXF1aXJlZCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJfaW5mb3JtYXRpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJNb2R1bGVBY3Rpdml0eSIsIl9zcGVjcyIsIl9pY29uczIiLCJlZGl0IiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJJY29uIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb25UZXh0IiwiU3BlY3NMaXN0IiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJrZXlDb25jZXB0cyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIl8iLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJlZGl0aW5nQWN0aXZpdHkiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJzZXRTaG93Iiwib25TaG93IiwiTWFpbkNvbnRyb2wiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJfZXJyb3IiLCJtb2R1bGUiLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRpb24iLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInRleHRhcmVhIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIlJhZGlvQnV0dG9uIiwiTW9kdWxlQ29udGV4dCIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsImNscyIsIlN0ZXBzQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsIl9mcmFtZXJNb3Rpb24iLCJfc3RlcCIsIl9zdGVwMiIsIl9zdGVwMyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsImJhY2siLCJuZXh0IiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9zdGVwQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJzdGVwMCIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsInNldFNlbGVjdGVkIiwib25TZWxlY3QiLCJkYXRhc2V0IiwicGFyc2VJbnQiLCJzdGVwMSIsImF1ZGllbmNlSW5kZXgiLCJvbkNoYW5nZUR1cmF0aW9uIiwiYWN0aXZpdGllc051bWJlciIsImZpcnN0U2VsZWN0ZWQiLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL2FjdGl2aXR5L2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL2dldC1vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL2Fuc3dlci1mb3JtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vb3B0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vb3B0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vb3B0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vb3B0aW9ucy9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL3JlZmluZS1tb2RhbC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9yZWZpbmUtbW9kYWwvdG9waWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vc2VjdGlvbnMvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vdGFicy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3JlZmluZS1hY3Rpdml0aWVzLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9zdGVwcy9lcnJvci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwLnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMS50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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