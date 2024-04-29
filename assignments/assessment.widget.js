System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0032ComponentsIcons;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
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
        hash: 3196055500,
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
            #assignmentId;
            #activityId;
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
        hash: 2800556286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #activityId;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId) {
              try {
                this.#assignmentId = assignmentId;
                _coinsLayout.LayoutBroker.overlay = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#model);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
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
                _coinsLayout.LayoutBroker.addModel(this.#model);
                super.ready = true;
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
              super.ready = false;
              let params = {
                answers: data,
                ...this.#paramsUri
              };
              await this.model.publish({
                params,
                type: 'assessment'
              });
              super.ready = true;
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1404005213,
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
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_selection.Selection, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvcmUiLCJfY29pbnNMYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfc2VsZWN0aW9uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRCcmVhZGNydW1iIiwiYnJlYWRjcnVtYiIsImFzc2lnbm1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHNDYWxsYmFjayIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJhc3Nlc3NtZW50IiwiUHJvdmlkZXIiLCJBY3Rpdml0eUhlYWRlciIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBQ1hDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFH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