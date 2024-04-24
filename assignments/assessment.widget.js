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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2NvbmZpZyIsIl9ob29rcyIsIkhlYWRlciIsInRleHRzIiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiYXNzaWdubWVudCIsImNsYXNzTmFtZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsInNldFJlYWR5Iiwic2V0QnJlYWRjcnVtYiIsIkxheW91dEJyb2tlciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0c0NhbGxiYWNrIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsImljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwib3B0aW9uIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInVzZVRleHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsInRyYWNraW5nIiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCTSxNQUFNYyxXQUFXLEdBQUlDLFdBQTRCLElBQW9CO1lBQzNFLE1BQU1DLFFBQVEsR0FBb0IsRUFBRTtZQUVwQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILFdBQVcsQ0FBQ0ksUUFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBRUMsT0FBeUIsSUFBSTtjQUN0RSxJQUFJQSxPQUFPLENBQUNDLElBQUksRUFBRTtnQkFDakIsSUFBSUQsT0FBTyxDQUFDRSxJQUFJLEtBQUssVUFBVSxFQUFFO2tCQUNoQ1AsUUFBUSxDQUFDSyxPQUFPLENBQUNDLElBQUksQ0FBQyxHQUFHRCxPQUFPLENBQUNHLE9BQU87aUJBQ3hDLE1BQU0sSUFBSUgsT0FBTyxDQUFDRSxJQUFJLEtBQUssT0FBTyxFQUFFO2tCQUNwQyxJQUFJRixPQUFPLENBQUNHLE9BQU8sRUFBRTtvQkFDcEJSLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsR0FBR0QsT0FBTyxDQUFDSSxLQUFLOztpQkFFdkMsTUFBTTtrQkFDTlQsUUFBUSxDQUFDSyxPQUFPLENBQUNDLElBQUksQ0FBQyxHQUFHRCxPQUFPLENBQUNJLEtBQUs7OztZQUd6QyxDQUFDLENBQUM7WUFFRixPQUFPVCxRQUFRO1VBQ2hCLENBQUM7VUFBQ0gsT0FBQSxDQUFBQyxXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJGLElBQUFZLEtBQUEsR0FBQTdCLE9BQUE7VUFHQSxJQUFBOEIsTUFBQSxHQUFBOUIsT0FBQTtVQUdNLE1BQU9PLFlBQWEsU0FBUXVCLE1BQUEsQ0FBQUMsYUFBcUI7WUFDdEQsQ0FBQUMsS0FBTTtZQUVOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNwQixJQUFJRCxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBRSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ0osWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBQSxZQUFhLEdBQUcsSUFBSSxDQUFDSyxTQUFTO1lBQzVEO1lBRUEsTUFBTTVCLElBQUlBLENBQUN1QixZQUFZLEVBQUVNLFVBQVU7Y0FDbEMsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQU4sWUFBYSxHQUFHQSxZQUFZO2dCQUVqQyxNQUFNTyxRQUFRLEdBQUcsSUFBSVosS0FBQSxDQUFBYSxrQkFBa0IsQ0FBQztrQkFDdkNDLEVBQUUsRUFBRUgsVUFBVTtrQkFDZE47aUJBQ0EsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQUMsU0FBVSxHQUFHO2tCQUNqQkQsWUFBWTtrQkFDWk07aUJBQ0E7Z0JBRUQsSUFBSSxDQUFDLENBQUFSLEtBQU0sR0FBR1MsUUFBUTtnQkFFdEIsTUFBTUEsUUFBUSxDQUFDOUIsSUFBSSxDQUFDO2tCQUNuQmdDLEVBQUUsRUFBRUgsVUFBVTtrQkFDZE47aUJBQ0EsQ0FBQztnQkFFRixJQUFJLENBQUNVLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQUcsU0FBU0EsQ0FBQ0MsUUFBUSxFQUFFdEIsS0FBSztjQUN4QixJQUFJLENBQUMsQ0FBQVEsT0FBUSxDQUFDZSxHQUFHLENBQUNELFFBQVEsRUFBRXRCLEtBQUssQ0FBQztjQUNsQyxJQUFJLENBQUN3QixPQUFPLENBQUMsWUFBWSxDQUFDO1lBQzNCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsSUFBSTtjQUNkLElBQUksQ0FBQ1YsS0FBSyxHQUFHLEtBQUs7Y0FDbEIsSUFBSVcsTUFBTSxHQUFHO2dCQUNabkIsT0FBTyxFQUFFa0IsSUFBSTtnQkFDYixHQUFHLElBQUksQ0FBQyxDQUFBbkI7ZUFDUjtjQUNELE1BQU0sSUFBSSxDQUFDSCxLQUFLLENBQUN3QixPQUFPLENBQUM7Z0JBQUVELE1BQU07Z0JBQUU3QixJQUFJLEVBQUU7Y0FBWSxDQUFFLENBQUM7Y0FDeEQsSUFBSSxDQUFDa0IsS0FBSyxHQUFHLElBQUk7WUFDbEI7O1VBQ0E1QixPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRUQsSUFBQWtELE1BQUEsR0FBQXpELE9BQUE7VUFRTyxNQUFNMEQsaUJBQWlCLEdBQUExQyxPQUFBLENBQUEwQyxpQkFBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDdkUsTUFBTUMsb0JBQW9CLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osaUJBQWlCLENBQUM7VUFBQzFDLE9BQUEsQ0FBQTZDLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Q5RSxJQUFBRSxhQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQXlELE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBZ0UsUUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFpRSxPQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWtFLE1BQUEsR0FBQWxFLE9BQUE7VUFDTztVQUFVLFNBQVVtRSxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRUMsS0FBSztjQUFFL0Q7WUFBSyxDQUFFLEdBQUcsSUFBQTJELFFBQUEsQ0FBQUgsb0JBQW9CLEdBQUU7WUFFL0MsTUFBTSxDQUFDUSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHYixNQUFBLENBQUFFLE9BQUssQ0FBQ1ksUUFBUSxDQUFDbEUsS0FBSyxDQUFDMkIsS0FBSyxFQUFFcUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsRSxJQUFBSCxNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkUsS0FBSyxDQUFDMkIsS0FBSyxDQUFDLEVBQUUsTUFBTXNDLFFBQVEsQ0FBQ2pFLEtBQUssQ0FBQzJCLEtBQUssRUFBRXFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUNDWixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxDQUFBaEIsTUFBQSxDQUFBRSxPQUFBLENBQUFlLFFBQUEsUUFDQ2pCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLENBQUNWLGFBQUEsQ0FBQVksWUFBWTtjQUNaQyxVQUFVLEVBQUUsQ0FDWCxDQUFDWCxPQUFBLENBQUFOLE9BQU0sQ0FBQ0osTUFBTSxDQUFDc0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUM3QixDQUFDVCxLQUFLLENBQUNRLFVBQVUsQ0FBQ0UsVUFBVSxFQUFFLGdCQUFnQnpFLEtBQUssQ0FBQzhCLFNBQVMsQ0FBQ0QsWUFBWSxFQUFFLENBQUMsRUFDN0UsQ0FBQ21DLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDWCxFQUNBLEVBQ0ZaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBO2NBQUlNLFNBQVMsRUFBQztZQUFzQixHQUFFWCxLQUFLLENBQUNDLEtBQUssQ0FBTSxDQUNyRDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBVyxHQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQXlELE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBa0UsTUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFnRSxRQUFBLEdBQUFoRSxPQUFBO1VBRUEsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBa0YsVUFBQSxHQUFBbEYsT0FBQTtVQUVBLElBQUFtRixlQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLFlBQUEsR0FBQXBGLE9BQUE7VUFDTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUN1QyxLQUFLLEVBQUV5QyxRQUFRLENBQUMsR0FBRyxJQUFBNUIsTUFBQSxDQUFBYyxRQUFRLEVBQUNsRSxLQUFLLENBQUN1QyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUIsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2IsTUFBQSxDQUFBRSxPQUFLLENBQUNZLFFBQVEsQ0FBQ2xFLEtBQUssQ0FBQzJCLEtBQUssRUFBRXFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFFbEUsTUFBTWlCLGFBQWEsR0FBR2xCLEtBQUssSUFBRztjQUM3QmdCLFlBQUEsQ0FBQUcsWUFBWSxDQUFDWCxVQUFVLEdBQUcsQ0FDekIsQ0FBQ1IsS0FBSyxDQUFDUSxVQUFVLENBQUNFLFVBQVUsRUFBRSxnQkFBZ0J6RSxLQUFLLENBQUM4QixTQUFTLENBQUNELFlBQVksRUFBRSxDQUFDLEVBQzdFLENBQUNtQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ1g7WUFDRixDQUFDO1lBQ0QsTUFBTSxDQUFDbUIsVUFBVSxFQUFFcEIsS0FBSyxDQUFDLEdBQUcsSUFBQVksR0FBQSxDQUFBUyxnQkFBZ0IsRUFBQ04sZUFBQSxDQUFBTyxNQUFNLENBQUNDLFNBQVMsRUFBRUwsYUFBYSxDQUFDO1lBQzdFLElBQUFwQixNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkUsS0FBSyxDQUFDLEVBQUUsTUFBTWdGLFFBQVEsQ0FBQ2hGLEtBQUssQ0FBQ3VDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUFzQixNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkUsS0FBSyxDQUFDMkIsS0FBSyxDQUFDLEVBQUUsTUFBTXNDLFFBQVEsQ0FBQ2pFLEtBQUssQ0FBQzJCLEtBQUssRUFBRXFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUN6QixLQUFLLElBQUksQ0FBQzRDLFVBQVUsRUFBRSxPQUFPL0IsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBVyxhQUFhLE9BQUc7WUFFbkQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCekIsS0FBSztjQUNMMEIsUUFBUSxFQUFFekYsS0FBSyxDQUFDeUYsUUFBUTtjQUN4QnpGO2FBQ0E7WUFFRCxNQUFNO2NBQ0wyQixLQUFLLEVBQUU7Z0JBQUUrRDtjQUFVO1lBQUUsQ0FDckIsR0FBRzFGLEtBQUs7WUFFVCxPQUNDb0QsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1QsUUFBQSxDQUFBTixpQkFBaUIsQ0FBQ3NDLFFBQVE7Y0FBQ3BFLEtBQUssRUFBRWlFO1lBQVksR0FDOUNwQyxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFRTSxTQUFTLEVBQUM7WUFBaUIsR0FDbEN0QixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxhQUFLcEUsS0FBSyxDQUFDMkIsS0FBSyxDQUFDcUMsS0FBSyxDQUFNLENBQ3BCLEVBQ1RaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLENBQUNPLEdBQUEsQ0FBQWlCLGFBQWEsUUFDYnhDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFPLEdBQ3JCdEIsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1MsVUFBQSxDQUFBZ0IsU0FBUztjQUFDQyxXQUFXLEVBQUVKO1lBQVUsRUFBSSxDQUNqQyxDQUNTLENBQ1k7VUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBdEMsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFvRyxLQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQXFHLE9BQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUF1RyxZQUFBLEdBQUF2RyxPQUFBO1VBYU0sU0FBVXdHLFVBQVVBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxhQUFhO1lBQUVDLEtBQUs7WUFBRUMsS0FBSztZQUFFbkYsSUFBSTtZQUFFb0YsUUFBUTtZQUFFakY7VUFBSyxDQUFFO1lBQzFGLE1BQU07Y0FBRXZCO1lBQUssQ0FBRSxHQUFHLElBQUFrRyxZQUFBLENBQUFPLGNBQWMsR0FBRTtZQUNsQyxNQUFNQyxHQUFHLEdBQUcsZUFBZU4sUUFBUSxLQUFLRSxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxPQUNDbEQsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUE7Y0FDQ00sU0FBUyxFQUFFZ0MsR0FBRztjQUNkQyxPQUFPLEVBQUVDLEtBQUssSUFBRztnQkFDaEJKLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDO2NBQ2hCO1lBQUMsR0FFQUwsS0FBSyxFQUNMSCxRQUFRLEtBQUtFLEtBQUssSUFBSWxELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLENBQUM2QixNQUFBLENBQUFZLElBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQWMsRUFBRyxDQUM5QztVQUVSO1VBRU8sTUFBTUMsWUFBWSxHQUF5QkEsQ0FBQztZQUNsRFYsYUFBYTtZQUNiQyxLQUFLO1lBQ0xVLElBQUk7WUFDSlosUUFBUTtZQUNSN0UsS0FBSztZQUNMMEYsTUFBTTtZQUNON0YsSUFBSTtZQUNKOEYsVUFBVTtZQUNWVjtVQUFRLENBQ1IsS0FBSTtZQUNKLElBQUlXLE9BQU8sR0FBR0QsVUFBVSxHQUFHbkIsS0FBQSxDQUFBcUIsUUFBUSxHQUFHakIsVUFBVTtZQUNoRCxJQUFJYSxJQUFJLEVBQUVHLE9BQU8sR0FBR25CLE9BQUEsQ0FBQXFCLE1BQU07WUFDMUIsT0FDQ2pFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLENBQUMrQyxPQUFPO2NBQ1BaLEtBQUssRUFBRVUsTUFBTTtjQUNiYixRQUFRLEVBQUVBLFFBQVE7Y0FDbEI3RSxLQUFLLEVBQUVBLEtBQUs7Y0FDWkgsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZrRixLQUFLLEVBQUVBLEtBQUs7Y0FDWkUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCYyxRQUFRO1lBQUEsRUFDUDtVQUVKLENBQUM7VUFBQzNHLE9BQUEsQ0FBQW9HLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREYsSUFBQTNELE1BQUEsR0FBQXpELE9BQUE7VUFRTyxNQUFNNEgsV0FBVyxHQUFBNUcsT0FBQSxDQUFBNEcsV0FBQSxHQUFHbkUsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1rRCxjQUFjLEdBQUdBLENBQUEsS0FBTXJELE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUM4RCxXQUFXLENBQUM7VUFBQzVHLE9BQUEsQ0FBQThGLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUbEUsSUFBQXJELE1BQUEsR0FBQXpELE9BQUE7VUFXTztVQUFVLFNBQVU2SCxJQUFJQSxDQUFDQyxLQUFhO1lBQzVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFakMsUUFBUTtjQUFFLEdBQUdrQztZQUFTLENBQUUsR0FBR0YsS0FBSztZQUVsRCxNQUFNLENBQUNHLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd6RSxNQUFBLENBQUFFLE9BQUssQ0FBQ1ksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM1RCxNQUFNNEQsR0FBRyxHQUFHMUUsTUFBQSxDQUFBRSxPQUFLLENBQUN5RSxNQUFNLENBQWtCLElBQUksQ0FBQztZQUUvQyxNQUFNeEcsS0FBSyxHQUFHO2NBQUVxRyxPQUFPO2NBQUVJLGFBQWEsRUFBRVAsS0FBSyxDQUFDekgsS0FBSyxFQUFFK0IsT0FBTyxDQUFDa0csSUFBSTtjQUFFeEM7WUFBUSxDQUFFO1lBQzdFLE1BQU15QyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUN6QztZQUFRLENBQUU7WUFFeEMsT0FBTyxJQUFJO1VBQ1o7Ozs7Ozs7Ozs7Ozs7VUNwQkEsTUFBTTBDLFdBQVcsR0FBSUwsR0FBRyxJQUFhO1lBQ3BDLE1BQU1NLElBQUksR0FBR04sR0FBRyxDQUFDTyxPQUFPO1lBRXhCLElBQUksQ0FBQ0QsSUFBSSxFQUFFO2NBQ1YxRixPQUFPLENBQUNDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztjQUN4QyxPQUFPLEtBQUs7O1lBR2IsTUFBTTJGLGtCQUFrQixHQUFHLElBQUlDLEdBQUcsRUFBVTtZQUM1QyxLQUFLLE1BQU1wSCxPQUFPLElBQUlKLEtBQUssQ0FBQ0MsSUFBSSxDQUFDb0gsSUFBSSxDQUFDbkgsUUFBUSxDQUFzQixFQUFFO2NBQ3JFLElBQUlFLE9BQU8sQ0FBQ21HLFFBQVEsRUFBRTtnQkFDckIsSUFBSW5HLE9BQU8sQ0FBQ0UsSUFBSSxLQUFLLE9BQU8sRUFBRTtrQkFDN0IsSUFBSWlILGtCQUFrQixDQUFDRSxHQUFHLENBQUNySCxPQUFPLENBQUNDLElBQUksQ0FBQyxFQUFFO29CQUN6Qzs7a0JBRUQsTUFBTXFILFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxnQkFBZ0IsQ0FBQyxlQUFldkgsT0FBTyxDQUFDQyxJQUFJLElBQUksQ0FBQztrQkFFekUsSUFBSSxDQUFDTCxLQUFLLENBQUNDLElBQUksQ0FBQ3lILFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUVDLEtBQXVCLElBQUtBLEtBQUssQ0FBQ3RILE9BQU8sQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEtBQUs7O2tCQUViZ0gsa0JBQWtCLENBQUNPLEdBQUcsQ0FBQzFILE9BQU8sQ0FBQ0MsSUFBSSxDQUFDOztnQkFFckMsSUFBSUQsT0FBTyxZQUFZMkgsZ0JBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDNUgsT0FBTyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDRixPQUFPLENBQUNHLE9BQU8sRUFBRTtrQkFDbkcsT0FBTyxLQUFLO2lCQUNaLE1BQU0sSUFBSUgsT0FBTyxDQUFDSSxLQUFLLEtBQUssRUFBRSxFQUFFO2tCQUNoQyxPQUFPLEtBQUs7Ozs7WUFLZixPQUFPLElBQUk7VUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDRCxJQUFBcUQsV0FBQSxHQUFBakYsT0FBQTtVQUVBLElBQUF5RCxNQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQWtFLE1BQUEsR0FBQWxFLE9BQUE7VUFFTSxTQUFVcUosWUFBWUEsQ0FBQ3ZCLEtBQUs7WUFDakMsTUFBTTtjQUFFekg7WUFBSyxDQUFFLEdBQUd5SCxLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ1MsUUFBUSxFQUFFZSxXQUFXLENBQUMsR0FBRzdGLE1BQUEsQ0FBQUUsT0FBSyxDQUFDWSxRQUFRLENBQUMsQ0FBQ2xFLEtBQUssQ0FBQzRILE9BQU8sQ0FBQztZQUU5RCxJQUFBL0QsTUFBQSxDQUFBTSxTQUFTLEVBQ1IsQ0FBQ25FLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmlKLFdBQVcsQ0FBQyxDQUFDakosS0FBSyxDQUFDNEgsT0FBTyxDQUFDO1lBQzVCLENBQUMsRUFDRCxZQUFZLENBQ1o7WUFFRCxNQUFNO2NBQUVzQjtZQUFRLENBQUUsR0FBR3pCLEtBQUs7WUFDMUIsTUFBTTBCLEtBQUssR0FBRztjQUFFLEdBQUcxQjtZQUFLLENBQUU7WUFDMUIwQixLQUFLLENBQUNqQixRQUFRLEdBQUdULEtBQUssQ0FBQ1MsUUFBUTtZQUMvQixPQUFPaUIsS0FBSyxDQUFDRCxRQUFRO1lBRXJCLE9BQU85RixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxDQUFDUSxXQUFBLENBQUF3RSxNQUFNO2NBQUEsR0FBS0Q7WUFBSyxHQUFHRCxRQUFRLENBQVU7VUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFoRCxZQUFBLEdBQUF2RyxPQUFBO1VBQ0EsSUFBQTBKLFNBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUEySixhQUFBLEdBQUEzSixPQUFBO1VBRUEsSUFBQWdFLFFBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBa0UsTUFBQSxHQUFBbEUsT0FBQTtVQUVPO1VBQVUsU0FBVTRKLGFBQWFBLENBQUM7WUFBRXpEO1VBQVcsQ0FBK0I7WUFDcEYsTUFBTTtjQUFFOUYsS0FBSztjQUFFK0Q7WUFBSyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSCxvQkFBb0IsR0FBRTtZQUUvQyxNQUFNLENBQUNiLEtBQUssRUFBRTZHLFFBQVEsQ0FBQyxHQUFHcEcsTUFBQSxDQUFBRSxPQUFLLENBQUNZLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDdUYsWUFBWSxFQUFFQyxVQUFVLENBQUMsR0FBR3RHLE1BQUEsQ0FBQUUsT0FBSyxDQUFDWSxRQUFRLENBQUNsRSxLQUFLLENBQUMrQixPQUFPLENBQUNrRyxJQUFJLENBQUM7WUFDckUsTUFBTSxDQUFDeEMsUUFBUSxFQUFFa0UsV0FBVyxDQUFDLEdBQUd2RyxNQUFBLENBQUFFLE9BQUssQ0FBQ1ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNNEQsR0FBRyxHQUFHMUUsTUFBQSxDQUFBRSxPQUFLLENBQUN5RSxNQUFNLENBQWtCLElBQUksQ0FBQztZQUMvQyxNQUFNLENBQUNILE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd6RSxNQUFBLENBQUFFLE9BQUssQ0FBQ1ksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM1RCxNQUFNZ0UsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRWxJLEtBQUssQ0FBQytCLE9BQU8sQ0FBQ2tHLElBQUksS0FBS25DLFdBQVcsQ0FBQzhELFNBQVMsQ0FBQ0M7WUFBTSxDQUFFO1lBRWxGLElBQUFoRyxNQUFBLENBQUFNLFNBQVMsRUFDUixDQUFDbkUsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKMEosVUFBVSxDQUFDMUosS0FBSyxDQUFDK0IsT0FBTyxDQUFDa0csSUFBSSxDQUFDO2NBQzlCLElBQUlqSSxLQUFLLENBQUMrQixPQUFPLENBQUNrRyxJQUFJLEtBQUtuQyxXQUFXLENBQUM4RCxTQUFTLENBQUNDLE1BQU0sRUFBRWhDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDMUUsQ0FBQyxFQUNELFlBQVksQ0FDWjtZQUVELE1BQU1pQyxZQUFZLEdBQUcsTUFBT2xELEtBQUssSUFBbUI7Y0FDbkRBLEtBQUssQ0FBQ21ELGNBQWMsRUFBRTtjQUN0Qm5ELEtBQUssQ0FBQ29ELGVBQWUsRUFBRTtjQUN2QixJQUFJO2dCQUNIcEQsS0FBSyxDQUFDbUQsY0FBYyxFQUFFO2dCQUN0QkosV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTXZCLElBQUksR0FBR3hCLEtBQUssQ0FBQ3FELE1BQXlCO2dCQUU1QyxNQUFNaEgsSUFBSSxHQUFHLEVBQUU7Z0JBQ2ZqRCxLQUFLLENBQUMrQixPQUFPLENBQUNiLE9BQU8sQ0FBQyxDQUFDZ0osTUFBTSxFQUFFckgsUUFBUSxLQUFJO2tCQUMxQ0ksSUFBSSxDQUFDSixRQUFRLENBQUMsR0FBR3FILE1BQU07Z0JBQ3hCLENBQUMsQ0FBQztnQkFFRixNQUFNbEssS0FBSyxDQUFDZ0QsSUFBSSxDQUFDQyxJQUFJLENBQUM7ZUFDdEIsQ0FBQyxPQUFPUixDQUFDLEVBQUU7Z0JBQ1grRyxRQUFRLENBQUMvRyxDQUFDLENBQUMwSCxPQUFPLENBQUM7ZUFDbkIsU0FBUztnQkFDVFIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1TLE1BQU0sR0FBR3RFLFdBQVcsQ0FBQzhELFNBQVMsQ0FBQ1MsR0FBRyxDQUFDLENBQUN4SCxRQUFRLEVBQUV5RCxLQUFLLEtBQ3hEbEQsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2lGLFNBQUEsQ0FBQWlCLFFBQVE7Y0FBQ0MsR0FBRyxFQUFFakUsS0FBSztjQUFFQSxLQUFLLEVBQUVBLEtBQUs7Y0FBRXpELFFBQVEsRUFBRUEsUUFBUTtjQUFFN0MsS0FBSyxFQUFFQTtZQUFLLEVBQ3BFLENBQUM7WUFFRixNQUFNdUIsS0FBSyxHQUFHO2NBQUVxRyxPQUFPO2NBQUVJLGFBQWEsRUFBRXlCLFlBQVk7Y0FBRWhFLFFBQVE7Y0FBRXpGO1lBQUssQ0FBRTtZQUN2RSxPQUNDb0QsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQzhCLFlBQUEsQ0FBQXFCLFdBQVcsQ0FBQzVCLFFBQVE7Y0FBQ3BFLEtBQUssRUFBRUE7WUFBSyxHQUNqQzZCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBO2NBQU1zRCxRQUFRLEVBQUVvQyxZQUFZO2NBQUVwRixTQUFTLEVBQUMsdUJBQXVCO2NBQUNvRCxHQUFHLEVBQUVBO1lBQUcsR0FDdEVzQyxNQUFNLEVBQ1BoSCxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFRTSxTQUFTLEVBQUM7WUFBb0IsR0FDckN0QixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa0YsYUFBQSxDQUFBTixZQUFZO2NBQUNoSixLQUFLLEVBQUVBLEtBQUs7Y0FBQSxHQUFNa0ksUUFBUTtjQUFFc0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ25KLElBQUksRUFBQztZQUFRLEdBQ3ZFMEMsS0FBSyxFQUFFMEcsTUFBTSxDQUNBLENBQ1AsQ0FDSCxDQUNlO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25FQSxJQUFBckgsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUErSyxNQUFBLEdBQUEvSyxPQUFBO1VBYU8sTUFBTTJLLFFBQVEsR0FBNkJBLENBQUM7WUFBRXpILFFBQVE7WUFBRXlELEtBQUs7WUFBRXRHO1VBQUssQ0FBa0IsS0FBSTtZQUNoRyxNQUFNLENBQUNvRyxRQUFRLEVBQUV1RSxXQUFXLENBQUMsR0FBR3ZILE1BQUEsQ0FBQUUsT0FBSyxDQUFDWSxRQUFRLEVBQVU7WUFDeEQsTUFBTXNDLFFBQVEsR0FBR0EsQ0FBQ0gsYUFBYSxFQUFFdUUsV0FBVyxFQUFFaEUsS0FBaUMsS0FBVTtjQUN4RkEsS0FBSyxDQUFDb0QsZUFBZSxFQUFFO2NBQ3ZCaEssS0FBSyxDQUFDNEMsU0FBUyxDQUFDeUQsYUFBYSxFQUFFdUUsV0FBVyxDQUFDO2NBQzNDRCxXQUFXLENBQUNDLFdBQVcsQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTUMsTUFBTSxHQUFHaEksUUFBUSxDQUFDaUksT0FBTyxDQUFDVCxHQUFHLENBQUMsQ0FBQ3BELE1BQU0sRUFBRThELENBQUMsS0FBSTtjQUNqRCxPQUNDM0gsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3NHLE1BQUEsQ0FBQTNELFlBQVk7Z0JBQ1p3RCxHQUFHLEVBQUUsR0FBR2pFLEtBQUssSUFBSXlFLENBQUMsRUFBRTtnQkFDcEJ4SixLQUFLLEVBQUUsR0FBR3dKLENBQUMsRUFBRTtnQkFDYjlELE1BQU0sRUFBRUEsTUFBTTtnQkFDZGIsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQmhGLElBQUksRUFBRWtGLEtBQUs7Z0JBQ1hBLEtBQUssRUFBRXlFLENBQUM7Z0JBQ1IxRSxhQUFhLEVBQUVDLEtBQUs7Z0JBQ3BCWSxVQUFVLEVBQUVyRSxRQUFRLENBQUNxRSxVQUFVO2dCQUMvQlYsUUFBUSxFQUFFL0QsQ0FBQyxJQUFJK0QsUUFBUSxDQUFDRixLQUFLLEVBQUV5RSxDQUFDLEVBQUV0SSxDQUFDO2NBQUMsRUFDbkM7WUFFSixDQUFDLENBQUM7WUFFRixPQUNDVyxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBMEIsR0FDeEN0QixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFJTSxTQUFTLEVBQUM7WUFBZ0IsR0FBRTdCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFNLEVBQ3REZ0ksTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDbEssT0FBQSxDQUFBMkosUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDRixJQUFBbEgsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFxTCxRQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQW9HLEtBQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBbUYsZUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFnRSxRQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQWtFLE1BQUEsR0FBQWxFLE9BQUE7VUFVTztVQUFVLFNBQVVrRyxTQUFTQSxDQUFDO1lBQUVDO1VBQVcsQ0FBRTtZQUNuRCxNQUFNLENBQUNYLFVBQVUsRUFBRXBCLEtBQUssQ0FBQyxHQUFHLElBQUFGLE1BQUEsQ0FBQW9ILFFBQVEsRUFBQ25HLGVBQUEsQ0FBQU8sTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTTtjQUFFdEY7WUFBSyxDQUFFLEdBQUcsSUFBQTJELFFBQUEsQ0FBQUgsb0JBQW9CLEdBQUU7WUFDeEMsTUFBTTdCLEtBQUssR0FBRzNCLEtBQUssQ0FBQzJCLEtBQUs7WUFDekIsTUFBTXVKLElBQUksR0FBR3ZKLEtBQUssRUFBRXNCLElBQUksR0FBRyxTQUFTLEdBQUcsTUFBTTtZQUU3QyxNQUFNa0ksS0FBSyxHQUFHO2NBQ2JDLE9BQU8sRUFBRUosUUFBQSxDQUFBSyxPQUFPO2NBQ2hCakQsSUFBSSxFQUFFckMsS0FBQSxDQUFBd0Q7YUFDTjtZQUVELE1BQU1wQyxPQUFPLEdBQUdnRSxLQUFLLENBQUNuTCxLQUFLLEVBQUUyQixLQUFLLENBQUMySixTQUFTLENBQUNDLFNBQVMsQ0FBQzdGLFVBQVUsQ0FBQzhGLFNBQVMsSUFBSU4sSUFBSSxDQUFDO1lBQ3BGLE9BQU85SCxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxDQUFDK0MsT0FBTztjQUFDckIsV0FBVyxFQUFFQSxXQUFXO2NBQUUvQixLQUFLLEVBQUVBO1lBQUssRUFBSTtVQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQVgsTUFBQSxHQUFBekQsT0FBQTtVQUNNLFNBQVUwSCxNQUFNQSxDQUFDO1lBQUVKLE1BQU07WUFBRXBFO1VBQVEsQ0FBRTtZQUMxQyxPQUNDTyxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBbUMsR0FDakR0QixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxlQUFPNkMsTUFBTSxDQUFRLENBQ2hCO1VBRVI7Ozs7Ozs7Ozs7O1VDUEE7O1VBRUF3RSxNQUFBLENBQUFDLGNBQUEsQ0FBQS9LLE9BQUE7WUFDQVksS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBa0ssTUFBQSxDQUFBQyxjQUFBLENBQUEvSyxPQUFBO1lBQ0FZLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBb0ssTUFBQSxHQUFBaE0sT0FBQTtVQUVBLElBQUF5RCxNQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQWdFLFFBQUEsR0FBQWhFLE9BQUE7VUFDTztVQUFXLE1BQU0wTCxPQUFPLEdBQThCQSxDQUFDO1lBQUV2RjtVQUFXLENBQUUsS0FBSTtZQUNoRixNQUFNO2NBQUU5RixLQUFLO2NBQUUrRDtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFILG9CQUFvQixHQUFFO1lBRS9DLE1BQU07Y0FDTDdCLEtBQUssRUFBRTtnQkFBRWlLO2NBQVE7WUFBRSxDQUNuQixHQUFHNUwsS0FBSztZQUNULE1BQU07Y0FBRTZMO1lBQVEsQ0FBRSxHQUFHRCxRQUFRO1lBQzdCLE1BQU14QixNQUFNLEdBQUd0RSxXQUFXLENBQUM4RCxTQUFTLENBQUNTLEdBQUcsQ0FBQyxDQUFDeEgsUUFBUSxFQUFFeUQsS0FBSyxLQUFJO2NBQzVELElBQUlyRCxJQUFJLEdBQUcySSxRQUFRLEVBQUU3SixPQUFPLEdBQUc2SixRQUFRLENBQUM3SixPQUFPLEdBQUc2SixRQUFRLEVBQUVFLFNBQVM7Y0FDckU3SSxJQUFJLEdBQUdBLElBQUksQ0FBQ3FELEtBQUssQ0FBQztjQUNsQixNQUFNd0UsT0FBTyxHQUFHakksUUFBUSxDQUFDaUksT0FBTyxDQUFDVCxHQUFHLENBQUMsQ0FBQ3BELE1BQU0sRUFBRThELENBQUMsS0FBSTtnQkFDbEQsSUFBSXJFLEdBQUcsR0FBRyxjQUFjekQsSUFBSSxDQUFDaUgsTUFBTSxLQUFLYSxDQUFDLEdBQUcsbUJBQW1CLEdBQUcsRUFBRSxHQUFHO2dCQUV2RSxJQUFJOUgsSUFBSSxDQUFDaUgsTUFBTSxLQUFLYSxDQUFDLEVBQUU7a0JBQ3RCckUsR0FBRyxJQUFJLFNBQVN6RCxJQUFJLENBQUM4SSxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLEVBQUU7O2dCQUV4RSxJQUFJbEosUUFBUSxDQUFDbUosYUFBYSxLQUFLakIsQ0FBQyxFQUFFckUsR0FBRyxJQUFJLGtCQUFrQjtnQkFDM0QsT0FDQ3RELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBO2tCQUFLbUcsR0FBRyxFQUFFdEQsTUFBTTtrQkFBRXZDLFNBQVMsRUFBRWdDO2dCQUFHLEdBQy9CdEQsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsZUFBTzZDLE1BQU0sQ0FBUSxDQUNoQjtjQUVSLENBQUMsQ0FBQztjQUNGLE9BQ0M3RCxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtnQkFBS21HLEdBQUcsRUFBRTFILFFBQVEsQ0FBQ0EsUUFBUTtnQkFBRTZCLFNBQVMsRUFBQztjQUFrRCxHQUN4RnRCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLGFBQUt2QixRQUFRLENBQUNBLFFBQVEsQ0FBTSxFQUMzQmlJLE9BQU8sQ0FDSDtZQUVSLENBQUMsQ0FBQztZQUVGLE9BQ0MxSCxNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQTtjQUFLbUcsR0FBRyxFQUFDLEVBQUU7Y0FBQzdGLFNBQVMsRUFBQztZQUF1QixHQUM1Q3RCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLGFBQUtMLEtBQUssQ0FBQ3FILE9BQU8sQ0FBTSxFQUN4QmhJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYyxhQUFBLENBQUN1SCxNQUFBLENBQUFNLEtBQUs7Y0FBQzVLLElBQUksRUFBQztZQUFNLEdBQ2pCK0IsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQTRDLEdBQzFEdEIsTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsaUJBQVNMLEtBQUssQ0FBQ21JLE9BQU8sRSxJQUFXLEVBQ2pDOUksTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsa0JBQ0NoQixNQUFBLENBQUFFLE9BQUEsQ0FBQWMsYUFBQSxlQUFPeUgsUUFBUSxDQUFDSyxPQUFPLENBQVEsRSxLQUFDOUksTUFBQSxDQUFBRSxPQUFBLENBQUFjLGFBQUEsZUFBT3lILFFBQVEsQ0FBQ00sS0FBSyxDQUFRLENBQ3BELENBQ0wsQ0FDQyxFQUNQL0IsTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDekosT0FBQSxDQUFBMEssT0FBQSxHQUFBQSxPQUFBIiwiaWdub3JlTGlzdCI6W119