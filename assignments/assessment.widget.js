System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.36/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.0.36/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0036CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0036CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0036ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0036ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.36"], ["@aimpact/ailearn-app", "0.0.36"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.36/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.36/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.36/assignments/assessment.widget');
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
        hash: 550503501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#tracking);
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
                _coinsLayout.LayoutBroker.addModel(this.#model);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvaW5zTGF5b3V0IiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmFja2luZyIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsInNldEFuc3dlciIsInF1ZXN0aW9uIiwic2V0IiwidHJpZ2dlciIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwicHVibGlzaCIsIl9yZWFjdCIsIkFzc2Vzc21lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3Nlc3NtZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsImFzc2Vzc21lbnQiLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFDWEMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlLLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWYs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