System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_2 = _beyondJsReact18Widgets111Page;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_8 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Form) {
      dependency_11 = _pragmateUi011Form;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Alert) {
      dependency_15 = _pragmateUi011Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_16 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
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
        hash: 639778867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2NvbmZpZyIsIl9ob29rcyIsIkhlYWRlciIsInRleHRzIiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsImNsYXNzTmFtZSIsIl91aSIsIl9oZWFkZXIiLCJfY29tcG9uZW50cyIsIl9zZWxlY3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsImFzc2Vzc21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiaWNvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiQW5zd2VyIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiYW5zd2VyIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsInNldFNlbGVjdGVkIiwiYW5zd2VySW5kZXgiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsIl9yZXN1bHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsInRyYWNraW5nIiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEs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