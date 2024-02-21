System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/alert"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_2 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_7 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Alert) {
      dependency_12 = _pragmateUi006Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/alert', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/assessment.widget",
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
        hash: 1055545111,
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
        hash: 645404188,
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
            const Control = views[store?.model.assessment.selection || view];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJhc3Nlc3NtZW50Iiwic2VsZWN0aW9uIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJJbnB1dENvbnRyb2wiLCJkb25lIiwiaXNNdWx0aXBsZSIsIm9uQ2hhbmdlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiUmFkaW8iLCJBbnN3ZXIiLCJsYWJlbCIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJ1c2VGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX2Zvcm1Db250ZXh0IiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIl9nZXRGb3JtRGF0YSIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiaW5kZXgiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJpIiwiaW5wdXRzIiwib3B0aW9ucyIsInRleHQiLCJfcmVzdWx0cyIsInZpZXciLCJyZXNwb25zZXMiLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJNLE1BQU1jLFdBQVcsR0FBSUMsV0FBNEIsSUFBb0I7WUFDM0UsTUFBTUMsUUFBUSxHQUFvQixFQUFFO1lBRXBDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxRQUFRLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxPQUF5QixJQUFJ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