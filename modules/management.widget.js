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
        hash: 2202328179,
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
        hash: 3042207659,
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
          var _components = require("pragmate-ui/components");
          var _tabs = require("./tabs");
          function ModuleActivityForm({}) {
            const {
              store: {
                editActivity: activity
              },
              texts,
              store
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
            const onClick = () => {
              store.editActivity = undefined;
            };
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
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
            }, _react.default.createElement(_headerTitle.HeaderTitle, null), _react.default.createElement(_tabs.ActivityFormTabs, null), _react.default.createElement("div", {
              className: "flex-container flex-end separator mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick
            }, texts.actions.back)), showRefiningModal && _react.default.createElement(_refineModal.RefineModal, {
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
        hash: 1185523764,
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
            return _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, {
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
        hash: 2175048887,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
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
        hash: 1839473376,
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
              activity,
              itemsType
            } = (0, _context2.useFormActivityContext)();
            const onChange = (event, index, a) => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const panes = [];
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => setMaterials([...activity.materials.items]));
            activity.materials.items.forEach(item => {
              const isBulletPoint = item === 'bullet-points';
              const labels = !isBulletPoint ? texts.activities.materials : texts.activities.types;
              const labelTab = isBulletPoint ? labels[itemsType] : typeof item === 'string' ? item : labels[item.name];
              const attrs = {
                disabled: false
              };
              const addTab = (attrs = {}) => {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  ...attrs,
                  key: `${activity.id}.${item}-tab`
                }, labelTab));
              };
              if (typeof item === 'string') {
                addTab();
                if (item === 'bullet-points') panes.push(_react.default.createElement(_activity.ActivityForm, {
                  key: `${activity.id}.${item}-pane`
                }));
                panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                  key: `${activity.id}.${item}-pane`,
                  material: item
                }));
                return;
              }
              if (item.required && !activity.materials[item.required]) attrs.disabled = true;
              panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                key: `${activity.id}.${item.name}-pane`,
                material: item
              }));
              addTab(attrs);
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
        hash: 1232522359,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIm9iamVjdGl2ZXMiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwidGFyZ2V0IiwicHJvcG9zYWwiLCJjb250ZW50Iiwib2JqZWN0aXZlIiwib2JzZXJ2YXRpb25zIiwidG90YWxBY3Rpdml0aWVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiTGVhcm5pbmdNb2R1bGUiLCJpc1JlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwiYWN0aXZpdGllcyIsInJlbW92ZSIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiZ2VuZXJhdGVPYmplY3RpdmVzIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInB1Ymxpc2giLCJyZXNwb25zZSIsImxvZyIsIl9yZWFjdCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUFjdGlvbnMiLCJhY3Rpdml0eSIsInVzZUZvcm1BY3Rpdml0eUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwidHlwZSIsIl9vcHRpb25zIiwiX2Zvcm0iLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsImFjdGlvbnMiLCJ1c2VNb2R1bGVDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2V0IiwiRm9ybSIsIkFjdGl2aXR5T3B0aW9ucyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiTW9kdWxlSW5mb3JtYXRpb24iLCJpdGVtcyIsImxlbmd0aCIsImxhYmVscyIsIkZvcm1BY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImdldE9wdGlvbnMiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX2hvb2tzIiwiX2NvbnRleHQyIiwiX3JlZmluZU1vZGFsIiwiX2hlYWRlclRpdGxlIiwiX3RhYnMiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJzZXRVcGRhdGUiLCJzaG93UmVmaW5pbmdNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIm9uQ2xvc2UiLCJ1c2VCaW5kZXIiLCJQcm92aWRlciIsIkhlYWRlclRpdGxlIiwiQWN0aXZpdHlGb3JtVGFicyIsImJhY2siLCJSZWZpbmVNb2RhbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3VpIiwiX21hcmtkb3duIiwiQWN0aXZpdHlNYXRlcmlhbCIsIm1hdGVyaWFsIiwibmFtZSIsInNldEZldGNoaW5nIiwibWF0ZXJpYWxzIiwic2V0RGF0YSIsImV2ZW50IiwiZ2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIk1hcmtkb3duIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiRnJhZ21lbnQiLCJJbnB1dCIsIl9saXN0IiwiX2Fuc3dlckZvcm0iLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJpbmRleCIsInNob3dBbnN3ZXJGb3JtIiwidXBkYXRlIiwib3B0aW9ucyIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJpdGVtIiwibWFyayIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJDaGlwIiwiaWNvbiIsInNpemluZyIsImJvcmRlcmVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2ljb25zIiwiX29wdGlvbnNIZWFkZXIiLCJzZXRFcnJvciIsImhhc093blByb3BlcnR5IiwiaGFuZGxlQ2hhbmdlIiwiYnVsbGV0VmFsdWVzIiwiYWN0aW9uc1NwZWNzIiwiSUNPTlMiLCJhaVN0YXJzIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Fuc3dlcnMiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJfZ2V0T3B0aW9ucyIsIk1vZGFsUmFkaW9CdXR0b24iLCJjdXJyZW50VmFsdWUiLCJsYWJlbCIsImRpc2FibGVkIiwicmVmaW5lIiwib3V0cHV0IiwibWFwIiwia2V5IiwiaHRtbEZvciIsIl9tb2RhbCIsIl9xdWVzdGlvbnMiLCJfdG9waWNzIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJGb3JtcyIsIlJlZmluZVF1ZXN0aW9uc01vZGFsIiwidG9waWNzIiwiUmVmaW5lVG9waWNzTW9kYWwiLCJjcml0ZXJpYXMiLCJDb250cm9sIiwiTW9kYWwiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwicHJvY2Vzc01lc3NhZ2VzIiwiX3JhZGlvQnV0dG9uIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImZvcm0iLCJfYWN0aXZpdHkiLCJfbWF0ZXJpYWxzIiwiYSIsInNldE1hdGVyaWFscyIsInBhbmVzIiwidGFicyIsImZvckVhY2giLCJpc0J1bGxldFBvaW50IiwibGFiZWxUYWIiLCJhdHRycyIsImFkZFRhYiIsInB1c2giLCJUYWIiLCJyZXF1aXJlZCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJfaW5mb3JtYXRpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJNb2R1bGVBY3Rpdml0eSIsIl9zcGVjcyIsIl9pY29uczIiLCJlZGl0IiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJJY29uIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb25UZXh0IiwiU3BlY3NMaXN0IiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJrZXlDb25jZXB0cyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIl8iLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJlZGl0aW5nQWN0aXZpdHkiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJzZXRTaG93Iiwib25TaG93IiwiTWFpbkNvbnRyb2wiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJfZXJyb3IiLCJtb2R1bGUiLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRpb24iLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInRleHRhcmVhIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIlJhZGlvQnV0dG9uIiwiTW9kdWxlQ29udGV4dCIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsImNscyIsIlN0ZXBzQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsIl9mcmFtZXJNb3Rpb24iLCJfc3RlcCIsIl9zdGVwMiIsIl9zdGVwMyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm5leHQiLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBDb250YWluZXIiLCJjaGlsZHJlbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3N0ZXBDb250YWluZXIiLCJzdWdnZXN0aW9ucyIsInN0ZXAwIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwic2V0U2VsZWN0ZWQiLCJvblNlbGVjdCIsImRhdGFzZXQiLCJwYXJzZUludCIsInN0ZXAxIiwiYXVkaWVuY2VJbmRleCIsIm9uQ2hhbmdlRHVyYXRpb24iLCJhY3Rpdml0aWVzTnVtYmVyIiwiZmlyc3RTZWxlY3RlZCIsInN0ZXAyIiwiZm9yV2hvbSIsImhvd0xvbmciXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vYWN0aXZpdHkvaW5mb3JtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vZ2V0LW9wdGlvbnMudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL29wdGlvbnMvYW5zd2VyLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL29wdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9vcHRpb25zL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vcmVmaW5lLW1vZGFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0vcmVmaW5lLW1vZGFsL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtL3JlZmluZS1tb2RhbC90b3BpY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS9zZWN0aW9ucy9oZWFkZXItdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS90YWJzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MtaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvcmVmaW5lLWFjdGl2aXRpZXMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdGVwcy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwLWNvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDAudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAxLnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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