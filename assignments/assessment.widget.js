System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_6 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_7 = _aimpactAilearnApp0032Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_11 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Form) {
      dependency_12 = _pragmateUi011Form;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Alert) {
      dependency_16 = _pragmateUi011Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/ailearn-app/coins-layout.widget', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/assessment.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3286864425,
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***************************************
      INTERNAL MODULE: ./helpers/get-form-data
      ***************************************/

      ims.set('./helpers/get-form-data', {
        hash: 187723676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getFormData = void 0;
          const getFormData = formElement => {
            const formData = {};
            Array.from(formElement.elements).forEach(element => {
              if (element.name) {
                if (element.type === 'checkbox') {
                  formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                  if (element.checked) {
                    formData[element.name] = element.value;
                  }
                } else {
                  formData[element.name] = element.value;
                }
              }
            });
            return formData;
          };
          exports.getFormData = getFormData;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1725033617,
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
            #items;
            get items() {
              return this.#items;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
            }
            async load(assignmentId, activityId) {
              try {
                this.#assignmentId = assignmentId;
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            setAnswer(question, value) {
              this.#answers.set(question, value);
              this.trigger('set.answer');
            }
            async save(data) {
              this.ready = false;
              let params = {
                answers: data,
                ...this.#paramsUri
              };
              await this.model.publish({
                params,
                type: 'assessment'
              });
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4165182190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssessmentContext = exports.AssessmentContext = void 0;
          var _react = require("react");
          const AssessmentContext = exports.AssessmentContext = _react.default.createContext({});
          const useAssessmentContext = () => _react.default.useContext(AssessmentContext);
          exports.useAssessmentContext = useAssessmentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 20865814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAssessmentContext)();
            const [title, setTitle] = _react.default.useState(store.model?.title || '');
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']]
            }), _react.default.createElement("h4", {
              className: "h2 assessment__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3766194571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _selection = require("./selection");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [title, setTitle] = _react.default.useState(store.model?.title || '');
            const setBreadcrumb = texts => {
              _coinsLayout.LayoutBroker.breadcrumb = [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']];
            };
            const [textsReady, texts] = (0, _ui.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store
            };
            const {
              model: {
                assessment
              }
            } = store;
            return _react.default.createElement(_context.AssessmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement("header", {
              className: "activity-header"
            }, _react.default.createElement("h3", null, store.model.title)), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: "my-20"
            }, _react.default.createElement(_selection.Selection, {
              assessments: assessment
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/Input
      ********************************************/

      ims.set('./views/selection/form/Input', {
        hash: 489088116,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          exports.RadioInput = RadioInput;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _answer = require("../interfaces/answer");
          var _icons = require("pragmate-ui/icons");
          var _formContext = require("./controls/form-context");
          function RadioInput({
            selected,
            questionIndex,
            index,
            label,
            name,
            onChange,
            value
          }) {
            const {
              store
            } = (0, _formContext.useFormContext)();
            const cls = `item__option${selected === index ? ' selected' : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: event => {
                onChange(event);
              }
            }, label, selected === index && _react.default.createElement(_icons.Icon, {
              icon: "circle-check"
            }));
          }
          const InputControl = ({
            questionIndex,
            index,
            done,
            selected,
            value,
            option,
            name,
            isMultiple,
            onChange
          }) => {
            let Control = isMultiple ? _form.CheckBox : RadioInput;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              selected: selected,
              value: value,
              name: name,
              index: index,
              onChange: onChange,
              required: true
            });
          };
          exports.InputControl = InputControl;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/form-context
      ************************************************************/

      ims.set('./views/selection/form/controls/form-context', {
        hash: 1804000310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormContext = exports.FormContext = void 0;
          var _react = require("react");
          const FormContext = exports.FormContext = _react.default.createContext({});
          const useFormContext = () => _react.default.useContext(FormContext);
          exports.useFormContext = useFormContext;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/selection/form/controls/index
      *****************************************************/

      ims.set('./views/selection/form/controls/index', {
        hash: 1895905073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              fetching,
              ...restProps
            } = props;
            const [isValid, setIsValid] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const value = {
              isValid,
              totalAnswered: props.store?.answers.size,
              fetching
            };
            const disabled = {
              disabled: !fetching
            };
            return null;
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/is-ready-function
      *****************************************************************/

      ims.set('./views/selection/form/controls/is-ready-function', {
        hash: 3877003488,
        creator: function (require, exports) {
          "use strict";

          const isFormReady = ref => {
            const form = ref.current;
            if (!form) {
              console.error('Form reference is null.');
              return false;
            }
            const checkedRadioGroups = new Set();
            for (const element of Array.from(form.elements)) {
              if (element.required) {
                if (element.type === 'radio') {
                  if (checkedRadioGroups.has(element.name)) {
                    continue;
                  }
                  const radioGroup = form.querySelectorAll(`input[name="${element.name}"]`);
                  if (!Array.from(radioGroup).some(radio => radio.checked)) {
                    return false;
                  }
                  checkedRadioGroups.add(element.name);
                }
                if (element instanceof HTMLInputElement && ['checkbox'].includes(element.type) && !element.checked) {
                  return false;
                } else if (element.value === '') {
                  return false;
                }
              }
            }
            return true;
          };
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/submit-button
      *************************************************************/

      ims.set('./views/selection/form/controls/submit-button', {
        hash: 1795831310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubmitButton = SubmitButton;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function SubmitButton(props) {
            const {
              store
            } = props;
            const [disabled, setDisabled] = _react.default.useState(!store.isValid);
            (0, _hooks.useBinder)([store], () => {
              setDisabled(!store.isValid);
            }, 'set.answer');
            const {
              children
            } = props;
            const attrs = {
              ...props
            };
            attrs.disabled = props.disabled;
            delete attrs.children;
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, children);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/index
      ********************************************/

      ims.set('./views/selection/form/index', {
        hash: 861037594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = SelectionForm;
          var _formContext = require("./controls/form-context");
          var _question = require("./question");
          var _react = require("react");
          var _submitButton = require("./controls/submit-button");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function SelectionForm({
            assessments
          }) {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const [error, setError] = _react.default.useState('');
            const [totalAnswers, setAnswers] = _react.default.useState(store.answers.size);
            const [fetching, setFetching] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const [isValid, setIsValid] = _react.default.useState(false);
            const disabled = {
              disabled: store.answers.size !== assessments.questions.length
            };
            (0, _hooks.useBinder)([store], () => {
              setAnswers(store.answers.size);
              if (store.answers.size === assessments.questions.length) setIsValid(true);
            }, 'set.answer');
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                event.preventDefault();
                setFetching(true);
                const form = event.target;
                const data = {};
                store.answers.forEach((answer, question) => {
                  data[question] = answer;
                });
                await store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: index,
              question: question,
              store: store
            }));
            const value = {
              isValid,
              totalAnswered: totalAnswers,
              fetching,
              store
            };
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "assessment__container",
              ref: ref
            }, output, _react.default.createElement("footer", {
              className: "assessment__footer"
            }, _react.default.createElement(_submitButton.SubmitButton, {
              store: store,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/form/question
      ***********************************************/

      ims.set('./views/selection/form/question', {
        hash: 1765910605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Question = void 0;
          var _react = require("react");
          var _Input = require("./Input");
          const Question = ({
            question,
            index,
            store
          }) => {
            const [selected, setSelected] = _react.default.useState();
            const onChange = (questionIndex, answerIndex, event) => {
              event.stopPropagation();
              store.setAnswer(questionIndex, answerIndex);
              setSelected(answerIndex);
            };
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                selected: selected,
                name: index,
                index: i,
                questionIndex: index,
                isMultiple: question.isMultiple,
                onChange: e => onChange(index, i, e)
              });
            });
            return _react.default.createElement("div", {
              className: "question__form-container"
            }, _react.default.createElement("h4", {
              className: "question-title"
            }, question.question), inputs);
          };
          exports.Question = Question;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/selection/index
      ***************************************/

      ims.set('./views/selection/index', {
        hash: 930221062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = Selection;
          var _react = require("react");
          var _results = require("./results");
          var _form = require("./form");
          var _beyond_context = require("beyond_context");
          var _context = require("../context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function Selection({
            assessments
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              store
            } = (0, _context.useAssessmentContext)();
            const model = store.model;
            const view = model?.data ? 'results' : 'form';
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            const Control = views[store?.model.resources.materials.assessment.selection || view];
            return _react.default.createElement(Control, {
              assessments: assessments,
              texts: texts
            });
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/selection/interfaces/answer
      ***************************************************/

      ims.set('./views/selection/interfaces/answer', {
        hash: 1239399579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Answer = Answer;
          var _react = require("react");
          function Answer({
            option,
            question
          }) {
            return _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("span", null, option));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/selection/interfaces/questions
      ******************************************************/

      ims.set('./views/selection/interfaces/questions', {
        hash: 4168001512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/selection/interfaces/selection-props
      ************************************************************/

      ims.set('./views/selection/interfaces/selection-props', {
        hash: 3118408654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/results/index
      ***********************************************/

      ims.set('./views/selection/results/index', {
        hash: 1866822694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../../context");
          /*bundle*/
          const Results = ({
            assessments
          }) => {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const {
              model: {
                tracking
              }
            } = store;
            const {
              counters
            } = tracking;
            const output = assessments.questions.map((question, index) => {
              let data = tracking?.answers ? tracking.answers : tracking?.responses;
              data = data[index];
              const options = question.options.map((option, i) => {
                let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
                if (data.answer === i) {
                  cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
                }
                if (question.correctAnswer === i) cls += ' option--correct';
                return _react.default.createElement("div", {
                  key: option,
                  className: cls
                }, _react.default.createElement("span", null, option));
              });
              return _react.default.createElement("div", {
                key: question.question,
                className: "question__container question__container--results"
              }, _react.default.createElement("h3", null, question.question), options);
            });
            return _react.default.createElement("div", {
              key: "",
              className: "assessment__container"
            }, _react.default.createElement("h3", null, texts.results), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("div", {
              className: "flex-container flex-100 flex-space-between"
            }, _react.default.createElement("strong", null, texts.correct, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.correct), "/", _react.default.createElement("span", null, counters.total)))), output);
          };
          exports.Results = Results;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/selection/form/controls/index",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/selection/form/index",
        "from": "SelectionForm",
        "name": "SelectionForm"
      }, {
        "im": "./views/selection/index",
        "from": "Selection",
        "name": "Selection"
      }, {
        "im": "./views/selection/results/index",
        "from": "Results",
        "name": "Results"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/selection/form/controls/index').Form : value);
        (require || prop === 'SelectionForm') && _export("SelectionForm", SelectionForm = require ? require('./views/selection/form/index').SelectionForm : value);
        (require || prop === 'Selection') && _export("Selection", Selection = require ? require('./views/selection/index').Selection : value);
        (require || prop === 'Results') && _export("Results", Results = require ? require('./views/selection/results/index').Results : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2hvb2tzIiwiSGVhZGVyIiwidGV4dHMiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiYXNzaWdubWVudCIsImNsYXNzTmFtZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsInNldFJlYWR5Iiwic2V0QnJlYWRjcnVtYiIsIkxheW91dEJyb2tlciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0c0NhbGxiYWNrIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsImljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwib3B0aW9uIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInVzZVRleHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsInRyYWNraW5nIiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7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