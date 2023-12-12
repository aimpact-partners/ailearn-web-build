System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.23/components/ui", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0023ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0023ComponentsUi;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_7 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Form) {
      dependency_9 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_12 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/alert', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.21/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
      }]);
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
        hash: 3654888784,
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
        hash: 3633327756,
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
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Assessment', '']]
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
        hash: 1920215223,
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
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
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
              assessments: assessment
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
        hash: 1878408545,
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
            assessments
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
        hash: 2031147807,
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
        hash: 3662087497,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpZCIsImlzUmVhZHkiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJhc3Nlc3NtZW50Iiwic2VsZWN0aW9uIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJJbnB1dENvbnRyb2wiLCJkb25lIiwiaXNNdWx0aXBsZSIsIm9uQ2hhbmdlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJ1c2VGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX2Zvcm1Db250ZXh0IiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIl9nZXRGb3JtRGF0YSIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiaW5kZXgiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJfcmVzdWx0cyIsInZpZXciLCJyZXNwb25zZXMiLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJNLE1BQU1jLFdBQVcsR0FBSUMsV0FBNEIsSUFBb0I7WUFDM0UsTUFBTUMsUUFBUSxHQUFvQixFQUFFO1lBRXBDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxRQUFRLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxPQUF5QixJQUFJ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