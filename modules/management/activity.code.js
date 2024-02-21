System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/empty", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, ItemOption, ModuleActivityForm, OptionAnswers, __beyond_pkg, hmr;
  _export({
    ItemOption: void 0,
    ModuleActivityForm: void 0,
    OptionAnswers: void 0
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
    }, function (_pragmateUi006Modal) {
      dependency_5 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_6 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Alert) {
      dependency_8 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_11 = _pragmateUi006Image;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_12 = _pragmateUi006FormReactSelect;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_13 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_bgroupWiseForm004Form) {
      dependency_14 = _bgroupWiseForm004Form;
    }, function (_pragmateUi006Empty) {
      dependency_15 = _pragmateUi006Empty;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_pragmateUi006List) {
      dependency_19 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_20 = _pragmateUi006Chips;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['@bgroup/wise-form/form', dependency_14], ['pragmate-ui/empty', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/chips', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 4191088778,
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
            } = (0, _context.useModuleContext)();
            const activity = store.editActivity;
            const ref = _react.default.useRef(null);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs.getData()
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

      /*****************************************
      INTERNAL MODULE: ./components/cancel-modal
      *****************************************/

      ims.set('./components/cancel-modal', {
        hash: 4135962634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancelChangesModal = CancelChangesModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          function CancelChangesModal({
            onClose,
            onConfirm
          }) {
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Are you sure",
              text: "Your changes have not been saved. If you continue, you will lose them.",
              onClose: onClose,
              onCancel: onClose,
              onConfirm: () => {
                onConfirm();
              }
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./components/content-editable
      *********************************************/

      ims.set('./components/content-editable', {
        hash: 1757035369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const ContentEditable = ({
            name,
            selector: Control = 'div',
            className,
            children,
            onSave
          }) => {
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const contentRef = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              if (typeof children === 'string' && contentRef.current) {
                contentRef.current.textContent = children;
              }
            }, [children]);
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              setTimeout(() => {
                const el = contentRef.current;
                if (el) {
                  const range = document.createRange();
                  const sel = globalThis.getSelection();
                  range.selectNodeContents(el);
                  range.collapse(false);
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                  el.focus();
                }
              }, 0);
            };
            const save = async event => {
              try {
                await onSave({
                  name,
                  value: contentRef.current?.textContent
                });
                setIsEditable(false);
              } catch (e) {
                console.error(e);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? `pui-editable-selector` : '';
            const onClick = isEditable ? save : toggleEdit;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              // onInput={handleContentChange}
              suppressContentEditableWarning: true
            }), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: onClick
            }));
          };
          exports.ContentEditable = ContentEditable;
        }
      });

      /************************************************
      INTERNAL MODULE: ./components/cover-image/actions
      ************************************************/

      ims.set('./components/cover-image/actions', {
        hash: 3332004448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _refinementModal = require("./refinement-modal");
          var _context = require("../../context");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
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
              }, _react.default.createElement(_icons.IconButton, {
                onClick: () => setShowRefiningModal(true),
                icon: _icons2.ICONS.aiStars
              }), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: generateImage,
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./components/cover-image/error
      **********************************************/

      ims.set('./components/cover-image/error', {
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

      /**********************************************
      INTERNAL MODULE: ./components/cover-image/index
      **********************************************/

      ims.set('./components/cover-image/index', {
        hash: 2035565100,
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
          var _context = require("../../context");
          function CoverImage() {
            const {
              store,
              activity
            } = (0, _context.useModuleContext)();
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

      /*********************************************************
      INTERNAL MODULE: ./components/cover-image/refinement-modal
      *********************************************************/

      ims.set('./components/cover-image/refinement-modal', {
        hash: 4168714935,
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
          var _context = require("../../context");
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
            } = (0, _context.useModuleContext)();
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

      /*****************************************************
      INTERNAL MODULE: ./components/refine-modal/get-options
      *****************************************************/

      ims.set('./components/refine-modal/get-options', {
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

      /***********************************************
      INTERNAL MODULE: ./components/refine-modal/index
      ***********************************************/

      ims.set('./components/refine-modal/index', {
        hash: 2279098757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions/questions");
          var _topics = require("./topics");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          function RefineModal({
            data,
            type,
            onClose
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
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
              criterias: _topics.RefineTopicsModal,
              default: _topics.RefineTopicsModal
            };
            const Control = _topics.RefineTopicsModal;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(_questions.RefineQuestionsModal, {
              events: events,
              values: values
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            })));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/refine-modal/questions/index
      *********************************************************/

      ims.set('./components/refine-modal/questions/index', {
        hash: 3177838515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineQuestionsModal({
            data,
            type,
            onClose
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
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
                await activity.generateQuestions(values.observations);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(_questions.RefineQuestionsModalFields, {
              events: events,
              values: values
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.refiningQuestions
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./components/refine-modal/questions/questions
      *************************************************************/

      ims.set('./components/refine-modal/questions/questions', {
        hash: 1790335474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModalFields = RefineQuestionsModalFields;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("../radio-button");
          var _context = require("../../../context");
          function RefineQuestionsModalFields({
            values,
            events
          }) {
            const {
              texts: {
                activities: activityTexts
              },
              texts: {
                refine: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.description)), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            }), _react.default.createElement(_radioButton.ModalRadioButton, {
              name: "type",
              value: values.type,
              label: activityTexts.refine.type.label,
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

      /******************************************************
      INTERNAL MODULE: ./components/refine-modal/radio-button
      ******************************************************/

      ims.set('./components/refine-modal/radio-button', {
        hash: 3728914250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalRadioButton = ModalRadioButton;
          var _react = require("react");
          var _context = require("../../context");
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
            } = (0, _context.useModuleContext)();
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

      /************************************************
      INTERNAL MODULE: ./components/refine-modal/topics
      ************************************************/

      ims.set('./components/refine-modal/topics', {
        hash: 516230958,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineTopicsModal = RefineTopicsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function RefineTopicsModal({
            setValues,
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

      /********************************************
      INTERNAL MODULE: ./components/select-activity
      ********************************************/

      ims.set('./components/select-activity', {
        hash: 4144897060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectActivity = SelectActivity;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function SelectActivity({
            values,
            setValues
          }) {
            const {
              activity,
              store
            } = (0, _context.useModuleContext)();
            let defaultValue = {
              value: '',
              label: 'Select'
            };
            const options = [];
            store.model.activities.items.forEach(i => {
              if (i.id === activity.id) return;
              if (i.id === values.specs.activityId) defaultValue = {
                value: i.id,
                label: i.title
              };
              options.push({
                value: i.id,
                label: i.title
              });
            });
            const selectChange = data => {
              setValues(values => ({
                ...values,
                specs: {
                  ...values.specs,
                  activityId: data.value
                }
              }));
            };
            return _react.default.createElement("label", {
              htmlFor: "",
              className: "help-info"
            }, "Is this activity based on another?", _react.default.createElement(_reactSelect.ReactSelect, {
              onChange: selectChange,
              defaultValue: defaultValue,
              options: [defaultValue, ...options]
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2291617846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./conversation/form
      ***********************************/

      ims.set('./conversation/form', {
        hash: 464435488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationForm = ConversationForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _item = require("./item");
          var _optionsHeader = require("./options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function ConversationForm({
            activity,
            values,
            setValues
          }) {
            const {
              types,
              itemsType,
              texts,
              store
            } = (0, _context.useModuleContext)();
            globalThis.store = store;
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
            const onInputChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues(values => ({
                ...values,
                specs: {
                  ...values.specs,
                  [name]: value
                }
              }));
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.conversation.description), _react.default.createElement(_form.Textarea, {
              value: values.specs.description ?? '',
              label: "Description",
              name: "description",
              onChange: onInputChange
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info",
              className: "circle"
            }), texts.conversation.topics), _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: bulletValues,
              Item: _item.ItemOption,
              specs: {
                type: itemsType
              },
              handleChange: onInputChange,
              fieldName: itemsType
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/

      ims.set('./conversation/index', {
        hash: 2219671691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityConversationForm = ActivityConversationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form2 = require("./form");
          function ActivityConversationForm() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
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
            }, _react.default.createElement(_form2.ConversationForm, {
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

      /***********************************
      INTERNAL MODULE: ./conversation/item
      ***********************************/

      ims.set('./conversation/item', {
        hash: 406907725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
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
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/options-header
      *********************************************/

      ims.set('./conversation/options-header', {
        hash: 267651600,
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
            } = (0, _context.useModuleContext)();
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

      /**************************************
      INTERNAL MODULE: ./forms/character-talk
      **************************************/

      ims.set('./forms/character-talk', {
        hash: 2061269602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkForm = CharacterTalkForm;
          var _react = require("react");
          function CharacterTalkForm() {
            return _react.default.createElement("div", null, "Multiple Choice");
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/content-theory/content
      **********************************************/

      ims.set('./forms/content-theory/content', {
        hash: 1429734784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _icons = require("pragmate-ui/icons");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentTheoryContent({
            content
          }) {
            const {
              activity,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const openManualForm = () => setManual(true);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: () => setManual(false)
              });
            }
            if (activity.materials.article) return _react.default.createElement("div", {
              className: "material__content"
            }, _react.default.createElement("div", {
              className: "flex-container flex-end material__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: openManualForm
            })), _react.default.createElement(_markdown.Markdown, {
              content: activity.materials.article
            }));
            return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: "article",
              onManual: openManualForm
            });
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./forms/content-theory/empty-material
      *****************************************************/

      ims.set('./forms/content-theory/empty-material', {
        hash: 4235629345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onClick = async event => {
              try {
                await activity.materials.generate(name);
              } catch (e) {
                console.error(e);
              }
            };
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/index
      ********************************************/

      ims.set('./forms/content-theory/index', {
        hash: 3315729649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryForm = ContentTheoryForm;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("./materials");
          function ContentTheoryForm() {
            const {
              activity,
              values,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials.article);
            });
            const onClick = async event => await activity.materials.generate(name);
            const onChange = event => {
              const target = event.currentTarget;
              editData({
                article: target.value
              });
            };
            return _react.default.createElement(_materials.ActivityFormTabs, null);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/content-theory/manual
      *********************************************/

      ims.set('./forms/content-theory/manual', {
        hash: 760757099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          function ManualMaterialForm({
            name,
            content,
            onCancel
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  [name]: target.value
                }
              });
            };
            const btnLabel = values.updated ? 'Cancel' : 'Back';
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  [name]: activity.materials[name]
                }
              });
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual.textarea
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./forms/content-theory/materials
      ************************************************/

      ims.set('./forms/content-theory/materials', {
        hash: 4219842577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _pane = require("../materials/pane");
          var _content = require("./content");
          function ActivityFormTabs({}) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onChange = () => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => setMaterials([...activity.materials.items]));
            activity.materials.items.forEach(item => {
              const name = typeof item === 'string' ? item : item.name;
              const label = texts.materials[name];
              const attrs = {
                disabled: !!item?.required && !activity.materials[item.required]
              };
              tabs.push(_react.default.createElement(_tabs.Tab, {
                ...attrs,
                key: `${activity.id}.${name}-tab`
              }, label));
            });
            return _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "mt-15 ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, _react.default.createElement(_content.ContentTheoryContent, null), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./forms/debate
      ******************************/

      ims.set('./forms/debate', {
        hash: 410656650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateForm = DebateForm;
          var _react = require("react");
          var _emptyMaterial = require("../specs/empty-material");
          var _baseSpec = require("../specs/base-spec");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DebateForm() {
            const {
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const [specs, setSpecs] = _react.default.useState(activity.specs.getData());
            (0, _hooks.useBinder)([activity.specs], () => {
              setSpecs({
                ...activity.specs.getData()
              });
              editData({
                specs: specs
              });
            }, 'specs.generated');
            if (!specs.role) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "debate",
                onManual: () => console.log('on manual')
              });
            }
            return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "role"
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./forms/index
      *****************************/

      ims.set('./forms/index', {
        hash: 296584300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.forms = void 0;
          var _characterTalk = require("./character-talk");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          const forms = exports.forms = {
            'content-theory': _contentTheory.ContentTheoryForm,
            debate: _debate.DebateForm,
            spoken: _spoken.SpokenForm,
            'multiple-choice': _multipleChoice.MultipleChoiceForm,
            'character-talk': _characterTalk.CharacterTalkForm
          };
        }
      });

      /**************************************
      INTERNAL MODULE: ./forms/materials/pane
      **************************************/

      ims.set('./forms/materials/pane', {
        hash: 1887555764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _emptyMaterial = require("../content-theory/empty-material");
          function MaterialPane({
            name
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterial(activity.materials[name]);
            });
            if (!material) return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: name,
              onManual: () => console.log('manual edition')
            });
            return _react.default.createElement(_markdown.Markdown, {
              content: material
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./forms/multiple-choice
      ***************************************/

      ims.set('./forms/multiple-choice', {
        hash: 3712250070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("../options/item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("../options/options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function MultipleChoiceForm() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState(activity.materials.questions ?? []);
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            const [addAnswer, setAddAnswer] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              console.log(20, activity.materials.questions, activity);
              setOptions(activity.materials.questions);
              setUpdate({});
            });
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  questions: target.value
                }
              });
              setOptions(target.value);
            };
            const actionsSpecs = {
              answers: {
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
              },
              add: {
                icon: 'add',
                title: texts.actions.add,
                onClick: (event, index) => {
                  setAddAnswer(index);
                }
              }
            };
            console.log(33, options);
            return _react.default.createElement("div", {
              className: "activity__materials-form"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: options,
              Item: _item.ItemOption,
              specs: {
                type: 'questions',
                answers: true,
                showAnswerFormIn: addAnswer
              },
              handleChange: handleChange,
              fieldName: "questions"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./forms/spoken
      ******************************/

      ims.set('./forms/spoken', {
        hash: 382949774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenForm = SpokenForm;
          var _react = require("react");
          var _emptyMaterial = require("../specs/empty-material");
          var _baseSpec = require("../specs/base-spec");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _optionsHeader = require("../options/options-header");
          function SpokenForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManualForm] = _react.default.useState(false);
            const [specs, setSpecs] = _react.default.useState(activity.specs.getData());
            const [questions, setQuestions] = _react.default.useState([]);
            const onChange = event => {
              setQuestions(event.currentTarget.value);
            };
            (0, _hooks.useBinder)([activity.specs], () => {
              setSpecs({
                ...activity.specs.getData()
              });
              editData({
                specs: specs
              });
            }, 'specs.generated');
            if (manualForm) {
              return _react.default.createElement("div", {
                className: "mt-30"
              }, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
                values: questions,
                handleChange: onChange,
                fieldName: "questions"
              }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
            }
            if (!specs.criteria) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "debate",
                onManual: () => setManualForm(true)
              });
            }
            return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "role"
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./forms/use-form
      ********************************/

      ims.set('./forms/use-form', {
        hash: 1296880974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          function useForm(settings) {
            const [model, setModel] = _react.default.useState(null);
            _react.default.useEffect(() => {
              const properties = settings.fields.map(item => item.name);
              //@ts-ignore
              const values = settings.values || {};
              const instance = new _form.FormModel(settings, {
                properties,
                ...values
              });
              setModel(instance);
            }, []);
            return {
              ready: !!model,
              model
            };
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2915967568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _coverImage = require("./components/cover-image");
          var _components = require("pragmate-ui/components");
          var _contentEditable = require("./components/content-editable");
          var _cancelModal = require("./components/cancel-modal");
          var _icons = require("pragmate-ui/icons");
          var _refineModal = require("./components/refine-modal");
          function Header() {
            const {
              values,
              editData,
              texts,
              store,
              activity,
              updated,
              clearData
            } = (0, _context.useModuleContext)();
            const saveEditable = ({
              name,
              value
            }) => editData({
              [name]: value
            });
            const [showBackModal, setShowBackModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const title = [undefined, '', null].includes(values.title) ? texts.activities.form.title : values.title;
            const description = [undefined, '', null].includes(values.description) ? texts.activities.form.description : values.description;
            const onSave = async () => {
              await activity.set(values);
              editData({
                updated: false
              });
              store.save();
            };
            const attrs = {
              disabled: !values.updated,
              onClick: onSave
            };
            const onCloseModal = () => setShowBackModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between mb-15 separator activity-form__header"
            }, _react.default.createElement("div", {
              className: "activity-type flex-container"
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: () => {
                if (values.updated) {
                  setShowBackModal(true);
                  return;
                }
                store.editActivity = undefined;
              }
            }, _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              variant: "primary",
              className: "circle"
            }), texts.actions.back, _react.default.createElement("strong", null, texts.activities.module, ":")), _react.default.createElement("span", {
              className: "primary-text"
            }, texts.types[activity.dataType.id])), _react.default.createElement("section", {
              className: "activity-header__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: () => setShowSuggestions(true)
            }, texts.actions.refine), _react.default.createElement(_components.Button, {
              variant: "primary",
              ...attrs
            }, texts.actions.save))), _react.default.createElement("div", {
              className: "header-form__container mt-15"
            }, _react.default.createElement("section", null, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "title",
              selector: "h4",
              onSave: saveEditable
            }, title), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, description)), _react.default.createElement(_coverImage.CoverImage, null)), showBackModal && _react.default.createElement(_cancelModal.CancelChangesModal, {
              onClose: onCloseModal,
              onConfirm: () => {
                clearData();
                store.editActivity = undefined;
                onCloseModal();
              }
            }), showSuggestions && _react.default.createElement(_refineModal.RefineModal, {
              type: activity.type,
              onClose: () => setShowSuggestions(false)
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3217231074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _header = require("./header");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _objective = require("./specs/objective");
          var _forms = require("./forms");
          var _refineModal = require("./components/refine-modal");
          var _questions = require("./components/refine-modal/questions");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [showRefiningModal, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState(activity.getData());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const {
              type
            } = activity;
            const itemsType = store.activityTypes.get(type);
            const onClose = () => setShowRefiningModal(false);
            if (!itemsType) throw new Error(`the activity type ${type} is not supported`);
            if (!_forms.forms[type]) console.error('No form for type', type, _forms.forms);
            const Form = _forms.forms[type];
            const editData = data => {
              const finalData = {
                ...values,
                updated: true,
                ...data
              };
              setValues(finalData);
            };
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const ModalControl = showRefiningModal && showRefiningModal === 'questions' ? _questions.RefineQuestionsModal : _refineModal.RefineModal;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                activity,
                texts,
                store,
                values,
                clearData: () => {
                  activity.materials.clear();
                  setValues(activity.getData());
                },
                updated: values.updated,
                editData,
                currentTab,
                setCurrentTab,
                itemsType,
                setShowRefiningModal
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(Form, null), showRefiningModal && _react.default.createElement(ModalControl, {
              type: itemsType,
              data: activity,
              onClose: onClose
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 792411869,
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
        hash: 4112947974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterial = ActivityMaterial;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          function ActivityMaterial({
            material,
            texts
          }) {
            const {
              activity,
              values,
              editData
            } = (0, _context.useModuleContext)();
            let name = typeof material === 'string' ? material : material.name;
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => await activity.materials.generate(name);
            const onChange = event => {
              const target = event.currentTarget;
              editData({
                [name]: target.value
              });
            };
            if (!activity.materials[name]) {
              return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
                onChange: onChange,
                name: "content",
                value: values[name],
                placeholder: "Add the content of the activity"
              }), _react.default.createElement("div", {
                className: "flex-container flex-center mt-15"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate)));
            }
            return _react.default.createElement(_markdown.Markdown, {
              content: activity.materials[name]
            });
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./options/answer-form
      *************************************/

      ims.set('./options/answer-form', {
        hash: 2448129157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function AnswerForm({
            activity,
            toggleAnswerForm
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              activity.addOption(value);
              toggleAnswerForm(false);
            };
            return _react.default.createElement("div", {
              className: "answer__form"
            }, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              variant: "primary"
            }, texts.actions.save));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./options/answers/index
      ***************************************/

      ims.set('./options/answers/index', {
        hash: 3542766125,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            data: activity,
            index,
            toggleAnswerForm
          }) {
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
        hash: 1095684545,
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
              itemsType
            } = (0, _context.useModuleContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            //if (!types.hasOwnProperty(type)) return null;
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
            if (itemsType === 'questions' || itemsType?.id === 'multiple-choice') {
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
              fieldName: itemsType
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 1148735468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          var _answerForm = require("./answer-form");
          var _context = require("../context");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(specs.showAnswerFormIn === index);
            const text = typeof data === 'object' ? data.text : data;
            const AnswerFormVisible = specs.showAnswerFormIn === index || showAnswerForm;
            console.log(22);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), specs.answers && _react.default.createElement(_answers.OptionAnswers, {
              toggleAnswerForm: toggleAnswerForm,
              data: data,
              index: index
            }), AnswerFormVisible && _react.default.createElement(_answerForm.AnswerForm, {
              activity: activity,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./options/options-header
      ****************************************/

      ims.set('./options/options-header', {
        hash: 2488556518,
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
          function BulletPointsHeader({
            refineAction = true
          }) {
            const {
              setShowRefiningModal,
              itemsType,
              texts
            } = (0, _context.useModuleContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), refineAction && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal('questions')
            }, texts.bulletPoint.refine));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/base-spec
      *********************************/

      ims.set('./specs/base-spec', {
        hash: 4238644503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  [name]: value
                }
              });
            };
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, value));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./specs/dynamic
      *******************************/

      ims.set('./specs/dynamic', {
        hash: 1252604982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicSpecs = DynamicSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DynamicSpecs({
            name
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([activity.specs], () => {
              console.log(13, activity.specs.getData());
            }, 'specs.generated');
            return _react.default.createElement("div", null, _react.default.createElement(_emptyMaterial.EmptySpecs, {
              name: name,
              onManual: () => console.log('on manual')
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./specs/empty-material
      **************************************/

      ims.set('./specs/empty-material', {
        hash: 887750621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptySpecs({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onClick = async event => {
              try {
                await activity.specs.generate(name);
              } catch (e) {
                console.error(e);
              }
            };
            const [fetching, setFetching] = _react.default.useState(activity.specs.fetching);
            const [, setData] = _react.default.useState(activity.specs.getData());
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.specs.getData());
            });
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./specs/index
      *****************************/

      ims.set('./specs/index', {
        hash: 3325377208,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivitySpecs() {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  [name]: value
                }
              });
            };
            return _react.default.createElement("div", null, _react.default.createElement("h4", null, texts.specs.title), activity.specs.properties.map((property, index) => {
              const label = [undefined, '', null].includes(activity.specs[property]) ? texts.specs.objective : values.specs[property];
              return _react.default.createElement("div", {
                key: index
              }, _react.default.createElement(_contentEditable.ContentEditable, {
                name: property,
                onSave: onSave
              }, label));
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/objective
      *********************************/

      ims.set('./specs/objective', {
        hash: 4161454892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivityObjectiveSpecs() {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  [name]: value
                }
              });
            };
            if (!activity.specs.properties.includes['objective']) return null;
            console.log('si', texts.specs);
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs.objective.label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, texts.specs.objective.placeholder));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./conversation/item",
        "from": "ItemOption",
        "name": "ItemOption"
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
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./conversation/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlTW9kdWxlQ29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwiZ2V0RGF0YSIsInNhdmUiLCJzZXQiLCJtb2RlbCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlPcHRpb25zIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIl9tb2RhbCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93IiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiSWNvbkJ1dHRvbiIsImV4cG9ydHMiLCJfaWNvbnMyIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RXJyb3IiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2V0T3B0aW9ucyIsInR5cGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9ucyIsIl90b3BpY3MiLCJSZWZpbmVNb2RhbCIsImRhdGEiLCJyZW1vdmVJdGVtcyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJGb3JtcyIsIlJlZmluZVF1ZXN0aW9uc01vZGFsIiwidG9waWNzIiwiUmVmaW5lVG9waWNzTW9kYWwiLCJjcml0ZXJpYXMiLCJnZW5lcmF0ZSIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lUXVlc3Rpb25zTW9kYWxGaWVsZHMiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yYWRpb0J1dHRvbiIsImFjdGl2aXR5VGV4dHMiLCJGcmFnbWVudCIsIk1vZGFsUmFkaW9CdXR0b24iLCJDaGVja2JveCIsImNoZWNrZWQiLCJfZ2V0T3B0aW9ucyIsImN1cnJlbnRWYWx1ZSIsInNlbGVjdGVkIiwib3V0cHV0IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2l0ZW0iLCJfb3B0aW9uc0hlYWRlciIsIkNvbnZlcnNhdGlvbkZvcm0iLCJ0eXBlcyIsIml0ZW1zVHlwZSIsInNldFVwZGF0ZSIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkljb24iLCJjb252ZXJzYXRpb24iLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiYnVsbGV0UG9pbnQiLCJhZGQiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsIl9tYW51YWwiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50IiwibWFudWFsIiwic2V0TWFudWFsIiwib3Blbk1hbnVhbEZvcm0iLCJtYXRlcmlhbHMiLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwib25NYW51YWwiLCJzZXREYXRhIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUZvcm0iLCJlZGl0RGF0YSIsInRhcmdldCIsIkFjdGl2aXR5Rm9ybVRhYnMiLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJidG5MYWJlbCIsInVwZGF0ZWQiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIl90YWJzIiwiX3BhbmUiLCJfY29udGVudCIsInNldE1hdGVyaWFscyIsInRhYnMiLCJpdGVtIiwiYXR0cnMiLCJyZXF1aXJlZCIsIlRhYiIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJfYmFzZVNwZWMiLCJEZWJhdGVGb3JtIiwic2V0U3BlY3MiLCJyb2xlIiwiRW1wdHlTcGVjcyIsImxvZyIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX2NvcmUiLCJzZXRPcHRpb25zIiwiYWRkQW5zd2VyIiwic2V0QWRkQW5zd2VyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwic2hvd0Fuc3dlckZvcm1JbiIsIm1hbnVhbEZvcm0iLCJzZXRNYW51YWxGb3JtIiwic2V0UXVlc3Rpb25zIiwiY3JpdGVyaWEiLCJ1c2VGb3JtIiwic2V0dGluZ3MiLCJzZXRNb2RlbCIsInByb3BlcnRpZXMiLCJmaWVsZHMiLCJpbnN0YW5jZSIsIkZvcm1Nb2RlbCIsInJlYWR5IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX3JlZmluZU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJmb3JtIiwib25DbG9zZU1vZGFsIiwiTGluayIsImJhY2siLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwic2hvd1JlZmluaW5nTW9kYWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJNb2RhbENvbnRyb2wiLCJQcm92aWRlciIsImNsZWFyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiQWN0aXZpdHlNYXRlcmlhbCIsIkFuc3dlckZvcm0iLCJ0b2dnbGVBbnN3ZXJGb3JtIiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZE9wdGlvbiIsIklucHV0IiwiX2xpc3QiLCJPcHRpb25BbnN3ZXJzIiwidXBkYXRlIiwib3BlbkZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJMaXN0IiwiY29udHJvbCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJzaXppbmciLCJfYW5zd2VycyIsIl9hbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm0iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsInJlZmluZUFjdGlvbiIsIkR5bmFtaWNTcGVjcyIsIkFjdGl2aXR5U3BlY3MiLCJwcm9wZXJ0eSIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2dldC1vcHRpb25zLnRzIiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3F1ZXN0aW9ucy9xdWVzdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvdG9waWNzLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy50c3giLCIvdHMvZm9ybXMvZGViYXRlLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvZm9ybXMvc3Bva2VuLnRzeCIsIi90cy9mb3Jtcy91c2UtZm9ybS50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXItZm9ybS50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVUssWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQXdCO2NBQ2pFQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ1EsS0FBSztjQUNyQkMsV0FBVyxFQUFFVCxRQUFRLENBQUNTLFdBQVcsSUFBSSxFQUFFO2NBQ3ZDQyxLQUFLLEVBQUVWLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPO2FBQzdCLENBQUM7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZCWixRQUFRLENBQUNhLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDO2NBQ3BCLE1BQU1QLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2NBQzdCakIsS0FBSyxDQUFDRyxZQUFZLEdBQUdl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