System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.14/components/ui", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Form) {
      dependency_10 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_11 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_13 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/alert', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/assessment.widget');
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
        hash: 2335361901,
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
                const activity = new _core.Activity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.isReady;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                console.log(10, activity);
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
              this.model.assessment.selection = 'results';
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
        hash: 1980678630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAssessmentContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignment/${store.paramsUri.assignmentId}`], ['Assessment', '']]
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
        hash: 1779215140,
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
          var _header = require("./header");
          var _components = require("@aimpact/chat/shared/components");
          var _selection = require("./selection");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [assessmentView, setAssessmentView] = (0, _react.useState)('form');
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setAssessmentView(store.model.assessments?.selection);
            });
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light"
            }, _react.default.createElement("p", null, store.model.title)), _react.default.createElement("div", {
              className: "my-20"
            }, _react.default.createElement(_selection.Selection, {
              assessments: assessment,
              manage: assessmentView
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/Input
      ********************************************/

      ims.set('./views/selection/form/Input', {
        hash: 2170583926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _answer = require("../interfaces/answer");
          const InputControl = ({
            done,
            value,
            option,
            name,
            isMultiple,
            onChange
          }) => {
            let Control = isMultiple ? _form.CheckBox : _form.Radio;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              value: value,
              name: name,
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
        hash: 3870665038,
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
        hash: 1910606565,
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
          var _getFormData = require("../../../helpers/get-form-data");
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
                const data = (0, _getFormData.getFormData)(form);
                await store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: `${index}`,
              question: question,
              store: store
            }));
            const value = {
              isValid,
              totalAnswered: totalAnswers,
              fetching
            };
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "assessment__container",
              ref: ref
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement(_submitButton.SubmitButton, {
              store: store,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish)));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/form/question
      ***********************************************/

      ims.set('./views/selection/form/question', {
        hash: 2986252008,
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
            const onChange = (index, i, event) => {
              event.stopPropagation();
              store.setAnswer(index, i);
            };
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                name: index,
                isMultiple: question.isMultiple,
                onChange: e => onChange(index, i, e)
              });
            });
            return _react.default.createElement("div", {
              className: "question__container"
            }, _react.default.createElement("h4", null, question.text), inputs);
          };
          exports.Question = Question;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/selection/index
      ***************************************/

      ims.set('./views/selection/index', {
        hash: 127993142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = void 0;
          var _react = require("react");
          var _results = require("./results");
          var _form = require("./form");
          var _beyond_context = require("beyond_context");
          var _context = require("../context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          const Selection = ({
            assessments,
            manage
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              store
            } = (0, _context.useAssessmentContext)();
            const model = store.model;
            const view = model?.data?.responses ? 'results' : 'form';
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            const Control = views[store.model.assessment.selection || view];
            return _react.default.createElement(Control, {
              assessments: assessments,
              texts: texts
            });
          };
          exports.Selection = Selection;
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
        hash: 3781113722,
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
        hash: 2274059044,
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
                return _react.default.createElement("div", {
                  key: option,
                  className: cls
                }, _react.default.createElement("span", null, option));
              });
              return _react.default.createElement("div", {
                key: question.text,
                className: "question__container question__container--results"
              }, _react.default.createElement("h3", null, question.text), options);
            });
            return _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJhc3Nlc3NtZW50Iiwic2VsZWN0aW9uIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhc3Nlc3NtZW50VmlldyIsInNldEFzc2Vzc21lbnRWaWV3IiwidXNlQmluZGVyIiwiYXNzZXNzbWVudHMiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwibWFuYWdlIiwiX2Zvcm0iLCJfYW5zd2VyIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsImlzTXVsdGlwbGUiLCJvbkNoYW5nZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIlJhZGlvIiwiQW5zd2VyIiwibGFiZWwiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwidXNlRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9mb3JtQ29udGV4dCIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJfZ2V0Rm9ybURhdGEiLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0IiwiaSIsImlucHV0cyIsIm9wdGlvbnMiLCJ0ZXh0IiwiX3Jlc3VsdHMiLCJ2aWV3IiwicmVzcG9uc2VzIiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwidHJhY2tpbmciLCJjb3VudGVycyIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJNLE1BQU1jLFdBQVcsR0FBSUMsV0FBNEIsSUFBb0I7WUFDM0UsTUFBTUMsUUFBUSxHQUFvQixFQUFFO1lBRXBDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsV0FBVyxDQUFD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