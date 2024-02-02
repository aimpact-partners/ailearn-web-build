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
        hash: 515145005,
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