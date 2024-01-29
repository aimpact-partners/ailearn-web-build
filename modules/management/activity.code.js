System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/chips", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/tabs"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ModuleInformation, ModuleActivityForm, OptionAnswers, ItemOption, __beyond_pkg, hmr;
  _export({
    ModuleInformation: void 0,
    ModuleActivityForm: void 0,
    OptionAnswers: void 0,
    ItemOption: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Form) {
      dependency_3 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_4 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_5 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_7 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi003List) {
      dependency_8 = _pragmateUi003List;
    }, function (_pragmateUi003Chips) {
      dependency_9 = _pragmateUi003Chips;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_pragmateUi003Modal) {
      dependency_13 = _pragmateUi003Modal;
    }, function (_pragmateUi003Tabs) {
      dependency_14 = _pragmateUi003Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/widgets/markdown', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/chips', dependency_9], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/tabs', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 2500814378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityForm = ActivityForm;
          var _react = require("react");
          var _options = require("../options");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ActivityForm() {
            const {
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const activity = store.editActivity;
            const ref = _react.default.useRef(null);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const save = async () => {
              activity.set(values);
              await store.model.saveDraft();
              store.editActivity = undefined;
            };
            return _react.default.createElement(_form.Form, null, _react.default.createElement("div", {
              className: "module-activity__form",
              ref: ref
            }, _react.default.createElement(_options.ActivityOptions, {
              values: values,
              activity: activity,
              setValues: setValues,
              texts: texts.activities.texts
            }), _react.default.createElement("footer", {
              className: "form__footer flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: save
            }, texts.actions.save))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./activity/information
      **************************************/

      ims.set('./activity/information', {
        hash: 524527754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleInformation = ModuleInformation;
          var _react = require("react");
          /* bundle */
          function ModuleInformation({
            store,
            texts
          }) {
            if (!store.model.activities.items.length) return null;
            return _react.default.createElement("div", {
              className: "form-content-text"
            }, _react.default.createElement("h5", {
              className: "mt-15"
            }, texts.labels.title, " "), _react.default.createElement("span", null, store.model.title), _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.labels.description, " "), _react.default.createElement("span", null, store.model.description)));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2213092495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormActivityContext = exports.FormActivityContext = void 0;
          var _react = require("react");
          const FormActivityContext = exports.FormActivityContext = _react.default.createContext({});
          const useFormActivityContext = () => _react.default.useContext(FormActivityContext);
          exports.useFormActivityContext = useFormActivityContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./get-options
      *****************************/

      ims.set('./get-options', {
        hash: 739493005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              type: [['answers', texts.answers], ['questions', texts.questions]]
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4158402683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _headerTitle = require("./sections/header-title");
          var _beyond_context = require("beyond_context");
          var _tabs = require("./tabs");
          var _refineModal = require("./refine-modal");
          var _context = require("./context");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [showRefiningModal, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias'
            };
            const {
              type
            } = activity;
            const itemsType = types[type];
            const onClose = () => setShowRefiningModal(false);
            const onClick = () => {
              store.editActivity = undefined;
            };
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            return _react.default.createElement(_context.FormActivityContext.Provider, {
              value: {
                activity,
                texts,
                store,
                setValues,
                types,
                currentTab,
                setCurrentTab,
                itemsType,
                values,
                setShowRefiningModal
              }
            }, _react.default.createElement(_headerTitle.HeaderTitle, null), _react.default.createElement(_tabs.ActivityFormTabs, {
              texts: texts
            }), _react.default.createElement("div", {
              className: "flex-container flex-end separator mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "btn-primary outline",
              onClick: onClick
            }, texts.actions.back)), showRefiningModal && _react.default.createElement(_refineModal.RefineModal, {
              type: itemsType,
              data: activity,
              onClose: onClose,
              texts: texts
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3998975187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./materials/index
      *********************************/

      ims.set('./materials/index', {
        hash: 2958958199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterial = ActivityMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          function ActivityMaterial({
            material,
            texts
          }) {
            const {
              activity
            } = (0, _context.useFormActivityContext)();
            let name = typeof material === 'string' ? material : material.name;
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [data, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => {
              await activity.materials.generate(name);
            };
            if (!activity.materials[name]) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: "no elements"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate), _react.default.createElement(_ui.ProcessContainer, {
                fetching: fetching
              }));
            }
            return _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, {
              content: activity.materials[name]
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./options/answer-form
      *************************************/

      ims.set('./options/answer-form', {
        hash: 3039286241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function AnswerForm({
            activity,
            toggleAnswerForm
          }) {
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              activity.addOption(value);
              toggleAnswerForm(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              variant: "primary"
            }, "Add"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./options/answers/index
      ***************************************/

      ims.set('./options/answers/index', {
        hash: 1943714166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _answerForm = require("../answer-form");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            data: activity,
            index
          }) {
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(false);
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity], () => {
              setUpdate({});
            });
            if (!activity.options) return null;
            const openForm = event => {
              event.stopPropagation();
              toggleAnswerForm(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-100 flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: openForm
            }, "Add answer")), _react.default.createElement(_list.List, {
              className: "question-options__list",
              specs: {
                activity
              },
              items: activity.options,
              control: _item.AnswerItem
            }), showAnswerForm && _react.default.createElement(_answerForm.AnswerForm, {
              activity: activity,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./options/answers/item
      **************************************/

      ims.set('./options/answers/item', {
        hash: 1888714584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          const AnswerItem = props => {
            const {
              specs: {
                activity
              },
              item,
              index
            } = props;
            const mark = event => {
              event.preventDefault();
              activity.setCorrect(index);
            };
            return _react.default.createElement("li", null, _react.default.createElement("span", null, item), activity.correctAnswer === index ? _react.default.createElement(_chips.Chip, {
              icon: "check",
              sizing: "xs",
              type: "primary"
            }, "Correct answer") : _react.default.createElement(_components.Button, {
              onClick: mark,
              icon: "info",
              bordered: true,
              sizing: "xs",
              variant: "primary"
            }, "Mark as correct"));
          };
          exports.AnswerItem = AnswerItem;
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/index
      *******************************/

      ims.set('./options/index', {
        hash: 119220794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityOptions = ActivityOptions;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("./options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityOptions({
            activity,
            values,
            setValues,
            texts
          }) {
            const {
              types,
              itemsType
            } = (0, _context.useFormActivityContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              setValues(values => {
                return {
                  ...values,
                  specs: {
                    [itemsType]: target.value
                  }
                };
              });
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            if (itemsType === 'questions') {
              //values = activity.specs.questionLabels;
              actionsSpecs.answers = {
                //@ts-ignore
                icon: _icons.ICONS.aiStars,
                title: texts.actions.generateAnswers,
                onClick: async (event, index, data) => {
                  const promise = new _core.PendingPromise();
                  await activity.generateAnswer(index, data);
                  globalThis.setTimeout(() => {
                    promise.resolve();
                  }, 2000);
                  return promise;
                }
              };
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: bulletValues,
              Item: _item.ItemOption,
              specs: {
                type: itemsType
              },
              handleChange: handleChange,
              fieldName: "topics"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 550718844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const text = specs.type === 'questions' ? data.text : data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), typeof data === 'object' && _react.default.createElement(_answers.OptionAnswers, {
              data: data,
              index: index
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./options/options-header
      ****************************************/

      ims.set('./options/options-header', {
        hash: 2832574234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function BulletPointsHeader() {
            const {
              setShowRefiningModal,
              itemsType,
              texts
            } = (0, _context.useFormActivityContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const couldBeRefined = ['questions', 'topics'].includes(itemsType);
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), couldBeRefined && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal(true)
            }, texts.bulletPoint.refine));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./radio-button
      ******************************/

      ims.set('./radio-button', {
        hash: 51908500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalRadioButton = ModalRadioButton;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _getOptions = require("./get-options");
          function ModalRadioButton({
            value: currentValue,
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
            };
            const data = (0, _getOptions.getOptions)(texts?.activities.refine.type);
            const output = data[name].map(([value, label], index) => {
              if (value === currentValue) selected = index;
              return _react.default.createElement(_components.Button, {
                name: name,
                ...disabled,
                "data-index": index,
                onClick: onChange,
                key: index,
                value: value
              }, label);
            });
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./refine-modal/index
      ************************************/

      ims.set('./refine-modal/index', {
        hash: 3045768379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions");
          var _topics = require("./topics");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          function RefineModal({
            type,
            onClose,
            data: activity,
            texts
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              observations: '',
              removeItems: false,
              type
            });
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                setFetching(true);
                await activity.generateSuggestions(values);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            const Forms = {
              questions: _questions.RefineQuestionsModal,
              topics: _topics.RefineTopicsModal,
              criterias: _topics.RefineTopicsModal
            };
            const Control = Forms[type];
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(Control, {
              events: events,
              values: values,
              setValues: setValues,
              fetching: fetching,
              setFetching: setFetching,
              texts: texts
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, "Generate")), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./refine-modal/questions
      ****************************************/

      ims.set('./refine-modal/questions', {
        hash: 2544567815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("../radio-button");
          function RefineQuestionsModal({
            values,
            events,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific sgit uggestions or areas for improvement..."
            }), _react.default.createElement(_radioButton.ModalRadioButton, {
              name: "type",
              value: values.type,
              label: texts.activities.refine.type.label,
              onChange: events.onChange
            }), values.type === 'questions' && _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./refine-modal/topics
      *************************************/

      ims.set('./refine-modal/topics', {
        hash: 4093539765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineTopicsModal = RefineTopicsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function RefineTopicsModal({
            values,
            events
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific suggestions or areas for improvement..."
            }), _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./sections/header-title
      ***************************************/

      ims.set('./sections/header-title', {
        hash: 1446212779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          function HeaderTitle() {
            const {
              values,
              setValues,
              texts
            } = (0, _context.useFormActivityContext)();
            const onChange = event => setValues({
              ...values,
              [event.currentTarget.name]: event.currentTarget.value
            });
            return _react.default.createElement("div", {
              className: "header-form__container mt-15"
            }, _react.default.createElement(_form.Input, {
              name: "title",
              label: texts.activities.form.title,
              value: values.title,
              onChange: onChange
            }), _react.default.createElement(_form.Textarea, {
              label: texts.activities.form.description,
              value: values.description,
              name: "description",
              onChange: onChange
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 300128686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _materials = require("./materials");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("./activity");
          var _context = require("./context");
          function ActivityFormTabs({
            texts
          }) {
            const {
              activity,
              itemsType
            } = (0, _context.useFormActivityContext)();
            const onChange = (event, index, a) => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const panes = [];
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => setMaterials([...activity.materials.items]));
            activity.materials.items.forEach(item => {
              const isBulletPoint = item === 'bullet-points';
              const labels = !isBulletPoint ? texts.activities.materials : texts.activities.types;
              const labelTab = isBulletPoint ? labels[itemsType] : typeof item === 'string' ? item : labels[item.name];
              const attrs = {
                disabled: false
              };
              const addTab = (attrs = {}) => {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  ...attrs,
                  key: `${activity.id}.${item}-tab`
                }, labelTab));
              };
              if (typeof item === 'string') {
                addTab();
                if (item === 'bullet-points') panes.push(_react.default.createElement(_activity.ActivityForm, {
                  key: `${activity.id}.${item}-pane`
                }));
                panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                  key: `${activity.id}.${item}-pane`,
                  material: item,
                  texts: texts
                }));
                return;
              }
              if (item.required && !activity.materials[item.required]) attrs.disabled = true;
              panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                key: `${activity.id}.${item.name}-pane`,
                material: item,
                texts: texts
              }));
              addTab(attrs);
            });
            return _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "mt-15 ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, panes));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity/information",
        "from": "ModuleInformation",
        "name": "ModuleInformation"
      }, {
        "im": "./index",
        "from": "ModuleActivityForm",
        "name": "ModuleActivityForm"
      }, {
        "im": "./options/answers/index",
        "from": "OptionAnswers",
        "name": "OptionAnswers"
      }, {
        "im": "./options/item",
        "from": "ItemOption",
        "name": "ItemOption"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ModuleInformation') && _export("ModuleInformation", ModuleInformation = require ? require('./activity/information').ModuleInformation : value);
        (require || prop === 'ModuleActivityForm') && _export("ModuleActivityForm", ModuleActivityForm = require ? require('./index').ModuleActivityForm : value);
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./options/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./options/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwic2F2ZSIsInNldCIsIm1vZGVsIiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJBY3Rpdml0eU9wdGlvbnMiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiTW9kdWxlSW5mb3JtYXRpb24iLCJpdGVtcyIsImxlbmd0aCIsImxhYmVscyIsIkZvcm1BY3Rpdml0eUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJnZXRPcHRpb25zIiwidHlwZSIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfaG9va3MiLCJfaGVhZGVyVGl0bGUiLCJfYmV5b25kX2NvbnRleHQiLCJfdGFicyIsIl9yZWZpbmVNb2RhbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInNldFVwZGF0ZSIsInNob3dSZWZpbmluZ01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsInR5cGVzIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwib25DbG9zZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsInZhbHVlIiwiSGVhZGVyVGl0bGUiLCJBY3Rpdml0eUZvcm1UYWJzIiwiYmFjayIsIlJlZmluZU1vZGFsIiwiZGF0YSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3VpIiwiX21hcmtkb3duIiwiQWN0aXZpdHlNYXRlcmlhbCIsIm1hdGVyaWFsIiwibmFtZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYXRlcmlhbHMiLCJzZXREYXRhIiwiZXZlbnQiLCJnZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJQcm9jZXNzQ29udGFpbmVyIiwiTWFya2Rvd24iLCJjb250ZW50IiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiRnJhZ21lbnQiLCJJbnB1dCIsIl9saXN0IiwiX2Fuc3dlckZvcm0iLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJpbmRleCIsInNob3dBbnN3ZXJGb3JtIiwidXBkYXRlIiwib3B0aW9ucyIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJpdGVtIiwibWFyayIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJDaGlwIiwiaWNvbiIsInNpemluZyIsImJvcmRlcmVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2ljb25zIiwiX2NvcmUiLCJfb3B0aW9uc0hlYWRlciIsInNldEVycm9yIiwiaGFzT3duUHJvcGVydHkiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiSXRlbSIsIkl0ZW1PcHRpb24iLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJfYW5zd2VycyIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFkZEJ1bGxldFBvaW50IiwiY291bGRCZVJlZmluZWQiLCJpbmNsdWRlcyIsImJ1bGxldFBvaW50IiwiYWRkIiwicmVmaW5lIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwibGFiZWwiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwib3V0cHV0IiwibWFwIiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiX21vZGFsIiwiX3F1ZXN0aW9ucyIsIl90b3BpY3MiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJGb3JtcyIsIlJlZmluZVF1ZXN0aW9uc01vZGFsIiwidG9waWNzIiwiUmVmaW5lVG9waWNzTW9kYWwiLCJjcml0ZXJpYXMiLCJDb250cm9sIiwiTW9kYWwiLCJzaG93IiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsInByb2Nlc3NNZXNzYWdlcyIsIl9yYWRpb0J1dHRvbiIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJDaGVja2JveCIsImNoZWNrZWQiLCJmb3JtIiwiX21hdGVyaWFscyIsIl9hY3Rpdml0eSIsImEiLCJzZXRNYXRlcmlhbHMiLCJwYW5lcyIsInRhYnMiLCJmb3JFYWNoIiwiaXNCdWxsZXRQb2ludCIsImxhYmVsVGFiIiwiYXR0cnMiLCJhZGRUYWIiLCJwdXNoIiwiVGFiIiwiaWQiLCJyZXF1aXJlZCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5L2luZm9ybWF0aW9uLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2dldC1vcHRpb25zLnRzIiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlci1mb3JtLnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvcmVmaW5lLW1vZGFsL2luZGV4LnRzeCIsIi90cy9yZWZpbmUtbW9kYWwvcXVlc3Rpb25zLnRzeCIsIi90cy9yZWZpbmUtbW9kYWwvdG9waWNzLnRzeCIsIi90cy9zZWN0aW9ucy9oZWFkZXItdGl0bGUudHN4IiwiL3RzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVUssWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxzQkFBc0IsR0FBRTtZQUNqRCxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FB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