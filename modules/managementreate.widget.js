System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/form", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.3/chips", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/chips', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17]]);
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

      /********************************
      INTERNAL MODULE: ./hardcoded-data
      ********************************/

      ims.set('./hardcoded-data', {
        hash: 4138464345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            module: {
              title: 'Introduction to JavaScript',
              description: 'This module provides a comprehensive overview of JavaScript, tailored for anyone interested in learning this programming language. It covers fundamental concepts and practical applications in a concise and engaging format.'
            },
            activities: [{
              type: 'content-theory',
              name: 'JavaScript Basics',
              description: 'Learn the fundamentals of JavaScript, including syntax, data types, and basic operations.',
              objective: 'Understanding basic JavaScript concepts.',
              time: 5,
              specs: {
                topics: ['Syntax', 'Variables', 'Data Types', 'Operators']
              }
            }, {
              type: 'conversation',
              name: 'Debating JavaScript Uses',
              description: 'Engage in an AI-powered debate about the various applications of JavaScript.',
              objective: 'Exploring different perspectives on JavaScript usage.',
              time: 5,
              specs: {
                kind: 'debate'
              }
            }, {
              type: 'multiple-choice',
              name: 'JavaScript Syntax Quiz',
              description: 'Test your knowledge of JavaScript syntax and basics with multiple-choice questions.',
              objective: 'Evaluating understanding of JavaScript syntax.',
              time: 5,
              specs: {
                questions: ['What is a variable in JavaScript?', 'Which symbol is used for comments in JavaScript?', 'How do you declare a function in JavaScript?']
              }
            }, {
              type: 'spoken',
              name: 'Explaining JavaScript Functions',
              description: 'Orally explain the concept and usage of functions in JavaScript.',
              objective: 'Articulating understanding of JavaScript functions.',
              time: 5,
              specs: {
                criterias: ['Clarity of Explanation', 'Correct Usage of Terms', 'Logical Structure']
              }
            }, {
              type: 'written',
              name: 'Writing JavaScript Code',
              description: 'Write a short script using basic JavaScript concepts.',
              objective: 'Demonstrating proficiency in writing JavaScript.',
              time: 5,
              specs: {}
            }, {
              type: 'content-theory',
              name: 'Advanced JavaScript Topics',
              description: 'Delve deeper into advanced JavaScript concepts like closures, callbacks, and asynchronous programming.',
              objective: 'Understanding advanced JavaScript topics.',
              time: 5,
              specs: {
                topics: ['Closures', 'Callbacks', 'Asynchronous Programming']
              }
            }, {
              type: 'conversation',
              name: 'JavaScript in Web Development',
              description: 'Engage in a simulated conversation about the role of JavaScript in web development.',
              objective: "Discussing JavaScript's impact on web development.",
              time: 5,
              specs: {
                kind: 'theory-question-and-answer'
              }
            }, {
              type: 'multiple-choice',
              name: 'Asynchronous JavaScript Quiz',
              description: 'A set of questions to assess understanding of asynchronous programming in JavaScript.',
              objective: 'Evaluating knowledge of asynchronous JavaScript.',
              time: 5,
              specs: {
                questions: ['What is a Promise in JavaScript?', 'How does async/await work in JavaScript?', 'What are the benefits of asynchronous programming?']
              }
            }, {
              type: 'spoken',
              name: 'Discussing JavaScript Libraries',
              description: 'Verbally discuss various JavaScript libraries and their applications.',
              objective: 'Understanding different JavaScript libraries.',
              time: 5,
              specs: {
                criterias: ['Knowledge of Libraries', 'Practical Applications', 'Comparison and Contrast']
              }
            }, {
              type: 'written',
              name: 'JavaScript Project Proposal',
              description: 'Write a proposal for a small project that can be accomplished using JavaScript.',
              objective: 'Applying JavaScript knowledge to project planning.',
              time: 5,
              specs: {}
            }]
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1305868540,
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
        hash: 620233373,
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
              className: "flex-container flex-05 flex-vertical-center"
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[data.type]
            }), data.name), _react.default.createElement("div", {
              className: "activity-details flex-container flex-05 flex-vertical-center"
            }, _react.default.createElement(_icons.Icon, {
              icon: "time"
            }), _react.default.createElement("span", null, data.time, " ", texts.minutes))), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.objective, ": "), _react.default.createElement("span", null, data.objective)), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.description, ": "), data.description), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            })), _react.default.createElement("div", {
              className: "activity-item__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "circle",
              onClick: deleteItem
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
        hash: 658392985,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
            }));
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
        hash: 3530670194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleForm = ModuleForm;
          var _react = require("react");
          var _module = require("./module");
          var _list = require("../activities/list");
          var _information = require("./information");
          function ModuleForm() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_module.ModuleSpecifications, null), _react.default.createElement(_information.ModuleInformation, null), _react.default.createElement(_list.ModuleActivities, null));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/form/information
      ****************************************/

      ims.set('./views/form/information', {
        hash: 1635378882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleInformation = ModuleInformation;
          var _react = require("react");
          var _context = require("../context");
          var _alert = require("pragmate-ui/alert");
          function ModuleInformation() {
            const {
              store: {
                model
              }
            } = (0, _context.useModuleContext)();
            if (!model.activities.items.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.Alert, null, _react.default.createElement("h4", {
              className: "mt-15"
            }, "Title: "), _react.default.createElement("p", null, model.title), _react.default.createElement("h4", null, "Description"), _react.default.createElement("p", null, model.description)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/form/module
      ***********************************/

      ims.set('./views/form/module', {
        hash: 1115627133,
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
          function ModuleSpecifications() {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [name, setName] = _react.default.useState(store.model.title ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              audience: '',
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
            }, _react.default.createElement("div", {
              className: "module-form__details"
            }, _react.default.createElement(_form.Input, {
              onChange: onChange,
              type: "text",
              value: values.audience,
              name: "audience",
              label: texts.form.audience,
              ...disabled,
              floating: true
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              type: "text",
              value: values.duration,
              name: "duration",
              label: texts.form.duration,
              floating: true,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              type: "number",
              ...disabled,
              value: values.target,
              floating: true,
              label: "target",
              name: "target"
            })), _react.default.createElement("div", {
              className: "module-form__details"
            }, _react.default.createElement("div", {
              className: "input--buttons-field"
            }, _react.default.createElement("span", null, texts.form.size), _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              ...disabled
            }, _react.default.createElement(_components.Button, {
              onClick: onChange,
              name: "duration",
              value: "3"
            }, "Small"), _react.default.createElement(_components.Button, {
              onClick: onChange,
              value: "6",
              name: "duration"
            }, "Extensa"))), _react.default.createElement("div", {
              className: "input--buttons-field"
            }, _react.default.createElement("span", null, texts.languages.label), _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              ...disabled
            }, _react.default.createElement(_components.Button, {
              onClick: onChange,
              name: "language",
              value: "en"
            }, texts.languages.en), _react.default.createElement(_components.Button, {
              onClick: onChange,
              name: "language",
              value: "es"
            }, texts.languages.es), _react.default.createElement(_components.Button, {
              onClick: onChange,
              name: "language",
              value: "pt"
            }, texts.languages.pt)))), _react.default.createElement("div", {
              className: "content__section"
            }, _react.default.createElement(_form.Input, {
              value: name,
              label: texts.module,
              name: "content",
              type: "text",
              onChange: onChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              ...attrs,
              className: "mt-30"
            }, texts.actions.activities)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2342164947,
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
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            (0, _hooks2.useBinder)([store.model], () => {
              setFetching(store.model.fetching);
            });
            if (!textsReady) return null; // TODO: add preload screen (or not
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
              texts,
              activities: store.model?.activities.items,
              onSubmit
            };
            const cls = `app-module-creation-page ${fetching ? 'is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching
            }, React.createElement("h1", null, texts.title), React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_form.ModuleForm, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIkRBVEEiLCJtb2R1bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aXZpdGllcyIsInR5cGUiLCJuYW1lIiwib2JqZWN0aXZlIiwidGltZSIsInNwZWNzIiwidG9waWNzIiwia2luZCIsInF1ZXN0aW9ucyIsImNyaXRlcmlhcyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwic2VsZWN0ZWQiLCJpZCIsIkxlYXJuaW5nTW9kdWxlIiwiaXNSZWFkeSIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImVkaXRBY3Rpdml0eSIsIm1hcCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsIl9yZWFjdCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb250cm9sIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwidGV4dHMiLCJvblN1Ym1pdCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VCaW5kZXIiLCJsZW5ndGgiLCJhdHRycyIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkZvcm0iLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJfaXRlbSIsImRhdGEiLCJpbmRleCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJDb250cm9sIiwiTW9kdWxlQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidXNlRWZmZWN0IiwiX29wdGlvbnMiLCJfdXNlQWN0aXZpdHlDb250YWluZXIiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsInJlZiIsInVzZUFjdGl2aXR5Q29udGFpbmVyIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiY2FuY2VsIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJJbnB1dCIsIlRleHRhcmVhIiwiaGFzT3duUHJvcGVydHkiLCJBY3Rpdml0eU9wdGlvbnMiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiX3NwZWNzIiwiX2ljb25zIiwiX2ljb25zMiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJtaW51dGVzIiwiQWN0aXZpdHlTcGVjcyIsIkljb25CdXR0b24iLCJfY2hpcHMiLCJJdGVtIiwiQ2hpcCIsInVzZVJlZiIsImNsb3Nlc3QiLCJ0b2dnbGUiLCJfdWkiLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2R1bGUiLCJfaW5mb3JtYXRpb24iLCJNb2R1bGVGb3JtIiwiTW9kdWxlU3BlY2lmaWNhdGlvbnMiLCJNb2R1bGVJbmZvcm1hdGlvbiIsIl9hbGVydCIsIkFsZXJ0Iiwic2V0TmFtZSIsInNldEZldGNoaW5nIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsImNvbnRlbnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlIiwibGFiZWwiLCJmb3JtIiwiZmxvYXRpbmciLCJzaXplIiwiQnV0dG9uR3JvdXAiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJyZXF1aXJlZCIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGFyZGNvZGVkLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9jb250cm9sLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9mb3JtL29wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS91c2UtYWN0aXZpdHktY29udGFpbmVyLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL21vZHVsZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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