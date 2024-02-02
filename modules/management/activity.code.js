System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/modal", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/tabs"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, ModuleActivityForm, OptionAnswers, ItemOption, __beyond_pkg, hmr;
  _export({
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
    }, function (_pragmateUi006Form) {
      dependency_3 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_4 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_6 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_7 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Image) {
      dependency_8 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_9 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Modal) {
      dependency_11 = _pragmateUi006Modal;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_13 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_14 = _pragmateUi006Chips;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_15 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_beyondJsKernel019Core) {
      dependency_16 = _beyondJsKernel019Core;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/components/icons', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/chips', dependency_14], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/tabs', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 1149359194,
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
              texts: texts.activities
            }), _react.default.createElement("footer", {
              className: "form__footer flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: save
            }, texts.actions.save))));
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

      /*************************************
      INTERNAL MODULE: ./cover-image/actions
      *************************************/

      ims.set('./cover-image/actions', {
        hash: 1609327048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _refinementModal = require("./refinement-modal");
          var _context = require("../context");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              texts,
              store,
              activity
            } = (0, _context.useFormActivityContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await activity.generatePicture();
              setFetching(false);
            };
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: () => setShowRefiningModal(true),
                icon: _icons.ICONS.aiStars
              }, texts.actions.refine), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: generateImage,
              bordered: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.cover));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./cover-image/error
      ***********************************/

      ims.set('./cover-image/error', {
        hash: 3301282445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./cover-image/index
      ***********************************/

      ims.set('./cover-image/index', {
        hash: 2440018814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          var _context = require("../context");
          function CoverImage() {
            const {
              store,
              activity
            } = (0, _context.useFormActivityContext)();
            const [image, setImage] = _react.default.useState(activity.picture);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity], () => setImage(activity.picture), 'image.generated');
            return _react.default.createElement("div", {
              className: "cover-image__container"
            }, activity.picture && _react.default.createElement(_image.Image, {
              src: image
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching,
              generated: !!activity.picture
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./cover-image/refinement-modal
      **********************************************/

      ims.set('./cover-image/refinement-modal', {
        hash: 294123216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _context = require("../context");
          function RefinementModal({
            confirm,
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts,
                  textarea: textAreaTexts
                },
                actions: textActions,
                processMessages
              },
              activity
            } = (0, _context.useFormActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              observations: '',
              generation: 'answers'
            });
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await activity.generatePicture(values.observations);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_error.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })));
          }
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
        hash: 727708823,
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
            console.log(20, material);
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
        hash: 1421880381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _coverImage = require("../cover-image");
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
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              variant: "floating",
              name: "title",
              label: texts.activities.form.title,
              value: values.title,
              onChange: onChange
            }), _react.default.createElement(_form.Textarea, {
              variant: "floating",
              label: texts.activities.form.description,
              value: values.description,
              name: "description",
              onChange: onChange
            })), _react.default.createElement(_coverImage.CoverImage, null));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 1993869179,
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
                }));else panes.push(_react.default.createElement(_materials.ActivityMaterial, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwic2F2ZSIsInNldCIsIm1vZGVsIiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJBY3Rpdml0eU9wdGlvbnMiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiRm9ybUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJyZWZpbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwib25DbG9zZSIsImJvcmRlcmVkIiwiY292ZXIiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3IiLCJBbGVydCIsIl91aSIsIl9ob29rcyIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfbW9kYWwiLCJfZXJyb3IiLCJtb2R1bGUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJ0ZXh0QWN0aW9ucyIsInByb2Nlc3NNZXNzYWdlcyIsInNldEVycm9yIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJlIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInNob3ciLCJzdWJ0aXRsZSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwiY2FuY2VsIiwidGV4dCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2V0T3B0aW9ucyIsInR5cGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX2hlYWRlclRpdGxlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RhYnMiLCJfcmVmaW5lTW9kYWwiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJzZXRVcGRhdGUiLCJzaG93UmVmaW5pbmdNb2RhbCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwidHlwZXMiLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJIZWFkZXJUaXRsZSIsIkFjdGl2aXR5Rm9ybVRhYnMiLCJiYWNrIiwiUmVmaW5lTW9kYWwiLCJkYXRhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfbWFya2Rvd24iLCJBY3Rpdml0eU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJtYXRlcmlhbHMiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlIiwiRW1wdHlDYXJkIiwiTWFya2Rvd24iLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFZhbHVlIiwib25BZGQiLCJhZGRPcHRpb24iLCJGcmFnbWVudCIsIklucHV0IiwiX2xpc3QiLCJfYW5zd2VyRm9ybSIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImluZGV4Iiwic2hvd0Fuc3dlckZvcm0iLCJ1cGRhdGUiLCJvcHRpb25zIiwib3BlbkZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwiaXRlbSIsIm1hcmsiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJzaXppbmciLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJfY29yZSIsIl9vcHRpb25zSGVhZGVyIiwiaGFzT3duUHJvcGVydHkiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiSXRlbSIsIkl0ZW1PcHRpb24iLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJfYW5zd2VycyIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFkZEJ1bGxldFBvaW50IiwiY291bGRCZVJlZmluZWQiLCJpbmNsdWRlcyIsImJ1bGxldFBvaW50IiwiYWRkIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm91dHB1dCIsIm1hcCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIl9xdWVzdGlvbnMiLCJfdG9waWNzIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwiRm9ybXMiLCJSZWZpbmVRdWVzdGlvbnNNb2RhbCIsInRvcGljcyIsIlJlZmluZVRvcGljc01vZGFsIiwiY3JpdGVyaWFzIiwiQ29udHJvbCIsIl9yYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9jb3ZlckltYWdlIiwiZm9ybSIsIl9tYXRlcmlhbHMiLCJfYWN0aXZpdHkiLCJhIiwic2V0TWF0ZXJpYWxzIiwicGFuZXMiLCJ0YWJzIiwiZm9yRWFjaCIsImlzQnVsbGV0UG9pbnQiLCJsYWJlbHMiLCJsYWJlbFRhYiIsImF0dHJzIiwiYWRkVGFiIiwicHVzaCIsIlRhYiIsImlkIiwicmVxdWlyZWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvZ2V0LW9wdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2VyLWZvcm0udHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy9yZWZpbmUtbW9kYWwvaW5kZXgudHN4IiwiL3RzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMudHN4IiwiL3RzL3JlZmluZS1tb2RhbC90b3BpY3MudHN4IiwiL3RzL3NlY3Rpb25zL2hlYWRlci10aXRsZS50c3giLCIvdHMvdGFicy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVLLFlBQVlBLENBQUE7WUFDM0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksc0JBQXNCLEdBQUU7WUFDakQsTUFBTUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFlBQVk7WUFFbkMsTUFBTUMsR0FBRyxHQUFHWixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdoQixNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUF3QjtjQUNqRUMsS0FBSyxFQUFFUixRQUFRLENBQUNRLEtBQUs7Y0FDckJDLFdBQVcsRUFBRVQsUUFBUSxDQUFDUyxXQUFXLElBQUksRUFBRTtjQUN2Q0MsS0FBSyxFQUFFVixRQUFRLENBQUNVO2FBQ2hCLENBQUM7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZCWCxRQUFRLENBQUNZLEdBQUcsQ0FBQ1AsTUFBTSxDQUFDO2NBQ3BCLE1BQU1QLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxTQUFTLEVBQUU7Y0FDN0JoQixLQUFLLENBQUNHLFlBQVksR0FBR2MsU0FBUztZQUMvQixDQUFDO1lBRUQs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