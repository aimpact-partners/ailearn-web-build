System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_7 = _aimpactAilearnApp0027Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/assignments/assessment.widget');
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
        hash: 3392845743,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAssessmentContext)();
            const [title, setTitle] = _react.default.useState(store.model?.title || '');
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiX2hvb2tzIiwiSGVhZGVyIiwidGV4dHMiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJhc3NpZ25tZW50IiwiY2xhc3NOYW1lIiwiX2hlYWRlciIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJvcHRpb24iLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIl9pY29ucyIsIl9mb3JtQ29udGV4dCIsIlJhZGlvSW5wdXQiLCJzZWxlY3RlZCIsInF1ZXN0aW9uSW5kZXgiLCJpbmRleCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1c2VGb3JtQ29udGV4dCIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJpY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwidHJhY2tpbmciLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7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