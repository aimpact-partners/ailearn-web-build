System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031EntitiesAssignmentsActivitiesBase) {
      dependency_9 = _aimpactAilearnApp031EntitiesAssignmentsActivitiesBase;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_11 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/assessment.widget');
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
        hash: 344908278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
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
                _mainLayout.LayoutBroker.backLink = `/assignments/${assignmentId}`;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                const breadcrumb = [[activity.module.title, `/assignments/${assignmentId}`], [this.#model.title]];
                const backLink = `/assignments/${assignmentId}`;
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  breadcrumb,
                  backLink
                });
                super.ready = true;
                this.#found = true;
                globalThis.store = this;
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
        hash: 980942222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
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
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
            }, _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_selection.Selection, {
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
        hash: 4173962036,
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
        hash: 4188454258,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const Control = views[store?.model.getMaterials().assessment.selection || view];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJpZCIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImxvYWRBY3Rpdml0eSIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsImdsb2JhbFRoaXMiLCJlIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9iYXNlIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfc2VsZWN0aW9uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJhc3Nlc3NtZW50IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJpY29uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiZ2V0TWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBQ1hDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVB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