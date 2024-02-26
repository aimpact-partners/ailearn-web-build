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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJfaG9va3MiLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfc2VsZWN0aW9uIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsImFzc2Vzc21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiaWNvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiQW5zd2VyIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiYW5zd2VyIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsInNldFNlbGVjdGVkIiwiYW5zd2VySW5kZXgiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsIl9yZXN1bHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsInRyYWNraW5nIiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJNLE1BQU1jLFdBQVcs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