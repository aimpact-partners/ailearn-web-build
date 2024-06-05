System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-06/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev06MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0046Dev06MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0046Dev06ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/assignments/assessment.widget');
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
        hash: 3398090082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
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
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = new _tracking.Tracking({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
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
                assignmentId: this.assignmentId,
                activityId: this.#activityId
              };
              console.log(10, this.#paramsUri);
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
        hash: 2099369638,
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
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              model: {
                assessment
              }
            } = store;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store
            };
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
        hash: 1841192681,
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
                data: tracking
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiaWQiLCJlIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicHVibGlzaCIsIl9yZWFjdCIsIkFzc2Vzc21lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3Nlc3NtZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsImFzc2Vzc21lbnQiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiZXJyb3IiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFDWEMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlLLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FB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