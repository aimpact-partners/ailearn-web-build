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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 718125783,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJhc3NpZ25tZW50IiwiY2hhdCIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJhc3Nlc3NtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsIm9wdGlvbiIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsImljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7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