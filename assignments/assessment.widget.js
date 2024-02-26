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
        hash: 1268763750,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [texts.breadcrumb.chat, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsImNoYXQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIl9ob29rcyIsIl9oZWFkZXIiLCJfY29tcG9uZW50cyIsIl9zZWxlY3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIl9pY29ucyIsIl9mb3JtQ29udGV4dCIsIlJhZGlvSW5wdXQiLCJzZWxlY3RlZCIsInF1ZXN0aW9uSW5kZXgiLCJpbmRleCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1c2VGb3JtQ29udGV4dCIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJpY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwidHJhY2tpbmciLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7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