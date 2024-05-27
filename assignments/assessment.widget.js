System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.43/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.0.43/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0043CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0043CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_7 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0043ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0043ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.43"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.43/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/ailearn-sdk/tracking', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.43/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.43/assignments/assessment.widget');
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
        hash: 1017247818,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvaW5zTGF5b3V0IiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmFja2luZyIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsInNldEFuc3dlciIsInF1ZXN0aW9uIiwic2V0IiwidHJpZ2dlciIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZWxlY3Rpb24iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJhc3Nlc3NtZW50IiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwiUGFnZUNvbnRhaW5lciIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiQW5zd2VyIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFDWEMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlLLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEs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