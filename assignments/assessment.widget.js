System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024Config) {
      dependency_7 = _aimpactAilearnApp0024Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_8 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Form) {
      dependency_10 = _pragmateUi006Form;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Alert) {
      dependency_14 = _pragmateUi006Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/assessment.widget');
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
        hash: 1877935763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAssessmentContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Assessment', '']]
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
        hash: 4051572690,
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
            if (store.model.tracking?.answers) {
              console.log(10, store.model.tracking?.answers);
            }
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
        hash: 3572097891,
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
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement("footer", {
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
        hash: 1280975178,
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
        hash: 2676972369,
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
        hash: 3866513121,
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
              }, _react.default.createElement("h3", null, question.text), options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfc2VsZWN0aW9uIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsImFzc2Vzc21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJ0cmFja2luZyIsImxvZyIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJpY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJ0ZXh0IiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hC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