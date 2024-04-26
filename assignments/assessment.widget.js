System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, Header, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_15 = _pragmateUi011Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Alert) {
      dependency_17 = _pragmateUi011Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/ailearn-app/coins-layout.widget', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/alert', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
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
        hash: 20865814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
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
              breadcrumb: [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']]
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
        hash: 2830401148,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            }, _react.default.createElement("div", {
              className: "container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "multiple-choice"
            }), _react.default.createElement("h1", null, store.model.title))), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_selection.Selection, {
              assessments: assessment
            })));
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
        hash: 3269473002,
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
            }, _react.default.createElement("h3", {
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
        hash: 503683932,
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
              }, _react.default.createElement("h3", {
                className: "question-title"
              }, question.question), options);
            });
            return _react.default.createElement("div", {
              key: "",
              className: "assessment__container"
            }, _react.default.createElement(_alert.Alert, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJnZXRGb3JtRGF0YSIsImZvcm1FbGVtZW50IiwiZm9ybURhdGEiLCJBcnJheSIsImZyb20iLCJlbGVtZW50cyIsImZvckVhY2giLCJlbGVtZW50IiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudElkIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl9jb250ZXh0IiwiX2hvb2tzIiwiSGVhZGVyIiwidGV4dHMiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiYXNzaWdubWVudCIsImNsYXNzTmFtZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl9pY29ucyIsInNldFJlYWR5Iiwic2V0QnJlYWRjcnVtYiIsIkxheW91dEJyb2tlciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0c0NhbGxiYWNrIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsIlByb3ZpZGVyIiwiQXBwSWNvbiIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJ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