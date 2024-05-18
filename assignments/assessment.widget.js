System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.32-beta.13/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-beta.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0032Beta13CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032Beta13CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0032Beta13ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032Beta13ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.12/assignments/assessment.widget');
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
        hash: 765172784,
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
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
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
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
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
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
                this.triggerEvent();
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
        hash: 192783876,
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
            const [title, setTitle] = _react.default.useState(store.model?.title || '');
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvcmUiLCJfY29pbnNMYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJhY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsImlkIiwiZSIsInNldEFuc3dlciIsInF1ZXN0aW9uIiwic2V0IiwidHJpZ2dlciIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwicHVibGlzaCIsIl9yZWFjdCIsIkFzc2Vzc21lbnRDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3Nlc3NtZW50Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3NlbGVjdGlvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsImFzc2Vzc21lbnQiLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwiaWNvbiIsIlBhZ2VDb250YWluZXIiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIl9pY29ucyIsIl9mb3JtQ29udGV4dCIsIlJhZGlvSW5wdXQiLCJzZWxlY3RlZCIsInF1ZXN0aW9uSW5kZXgiLCJpbmRleCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1c2VGb3JtQ29udGV4dCIsImNscyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwib3B0aW9uIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJ0cmFja2luZyIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsVUFBVztZQUNYQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ0EsSUFBSUssTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFB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