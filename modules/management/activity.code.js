System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/empty", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips"], function (_export, _context2) {
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
    }, function (_pragmateUi006Empty) {
      dependency_14 = _pragmateUi006Empty;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupWiseForm004Form) {
      dependency_16 = _bgroupWiseForm004Form;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@bgroup/wise-form/form', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/chips', dependency_20]]);
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
        hash: 2547633096,
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

      /****************************************************
      INTERNAL MODULE: ./components/refine-modal/base/index
      ****************************************************/

      ims.set('./components/refine-modal/base/index', {
        hash: 2229060017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineBaseModal = RefineBaseModal;
          var _react = require("react");
          var _questions = require("./questions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineBaseModal({
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_questions.RefineQuestionsModalFields, {
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

      /********************************************************
      INTERNAL MODULE: ./components/refine-modal/base/questions
      ********************************************************/

      ims.set('./components/refine-modal/base/questions', {
        hash: 4080325559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModalFields = RefineQuestionsModalFields;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineQuestionsModalFields({
            values,
            events
          }) {
            const {
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
            }));
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
        hash: 3734139998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _base = require("./base");
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
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_base.RefineBaseModal, {
              values: values
            }));
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

      /****************************
      INTERNAL MODULE: ./forms/base
      ****************************/

      ims.set('./forms/base', {
        hash: 187563751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormBase = ActivityFormBase;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ = require("./");
          function ActivityFormBase({
            type
          }) {
            const {
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            if (!_.forms[type]) console.error('No form for type', type, _.forms);
            const Form = _.forms[type];
            const onDelete = async () => {
              activity.specs.clear();
              activity.materials.clear();
              editData({
                specs: activity.specs.getData(),
                materials: activity.materials.getData()
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h3", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              disabled: !activity.specs.isValid,
              variant: "primary",
              bordered: true,
              onClick: onDelete
            }, texts.actions.delete))), _react.default.createElement(Form, null));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./forms/character-talk/form
      *******************************************/

      ims.set('./forms/character-talk/form', {
        hash: 2232674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkManualForm = CharacterTalkManualForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function CharacterTalkManualForm({
            onCancel
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
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
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.role.label,
              placeholder: texts.specs.role.placeholder,
              name: "role"
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.character.label,
              placeholder: texts.specs.character.placeholder,
              name: "character"
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/character-talk/index
      ********************************************/

      ims.set('./forms/character-talk/index', {
        hash: 3427031532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkForm = CharacterTalkForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          function CharacterTalkForm() {
            const {
              activity,
              editData,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manual) {
              return _react.default.createElement(_form.CharacterTalkManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.role || !values.specs.character) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "character-talk",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "role"
            }), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "character"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/content-theory/content
      **********************************************/

      ims.set('./forms/content-theory/content', {
        hash: 783251285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentTheoryContent({
            content
          }) {
            const {
              activity,
              values,
              texts
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
            if (activity.materials.article) return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-end material__actions"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              variant: "link",
              bordered: true
            }, texts.actions.edit)), _react.default.createElement("div", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: activity.materials.article
            })));
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
        hash: 2996062177,
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
              activity
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              console.log(199, activity.materials.getData());
              setData({
                materials: activity.materials.getData(),
                updated: true
              });
            });
            return _react.default.createElement(_materials.ActivityFormTabs, null);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/content-theory/manual
      *********************************************/

      ims.set('./forms/content-theory/manual', {
        hash: 2212386199,
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
              values,
              editData,
              activity,
              texts
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
            console.log(22, values);
            return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: activity.materials?.[name] ?? '',
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
        hash: 4281441528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _context = require("../../context");
          var _pane = require("../materials/pane");
          var _content = require("./content");
          function ActivityFormTabs({}) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onChange = () => {};
            const tabs = [];
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

      /***********************************
      INTERNAL MODULE: ./forms/debate/form
      ***********************************/

      ims.set('./forms/debate/form', {
        hash: 3746069090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualDebateForm = ManualDebateForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function ManualDebateForm({
            onCancel
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
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
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.role.label,
              placeholder: texts.specs.role.placeholder,
              name: "role"
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./forms/debate/index
      ************************************/

      ims.set('./forms/debate/index', {
        hash: 497201529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateForm = DebateForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          function DebateForm() {
            const {
              activity,
              editData,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manual) {
              return _react.default.createElement(_form.ManualDebateForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.role) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "debate",
                onManual: () => setManual(true)
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

      /**************************************************
      INTERNAL MODULE: ./forms/spoken/criteria-field-item
      **************************************************/

      ims.set('./forms/spoken/criteria-field-item', {
        hash: 2276911582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaFieldItem = CriteriaFieldItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function CriteriaFieldItem({
            total,
            item,
            index,
            onDelete,
            onChange
          }) {
            const {
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const handleChange = event => {
              const target = event.currentTarget;
              item[target.name] = target.value;
              onChange(index, item);
            };
            return _react.default.createElement("div", {
              className: "form-repeated-container"
            }, _react.default.createElement("h5", null, texts.specs.criteria.label + ' ' + parseInt(index) + 1), _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.criteria.label,
              placeholder: texts.specs.criteria.placeholder,
              value: item.criteria,
              name: "criteria",
              variant: "floating"
            }), _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.subject.label,
              value: item.subject,
              placeholder: texts.specs.subject.placeholder,
              name: "subject",
              variant: "floating"
            }), total > 1 && _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: () => onDelete(index)
            }, ' ', texts.actions.delete)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/spoken/criteria-field
      *********************************************/

      ims.set('./forms/spoken/criteria-field', {
        hash: 100249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaField = CriteriaField;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _criteriaFieldItem = require("./criteria-field-item");
          function CriteriaField() {
            const {
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [totalItems, setTotalItems] = _react.default.useState(values.specs?.criteria?.length || 1);
            const [items, setItems] = _react.default.useState(values.specs.criteria.length ? values.specs.criteria : [{
              criteria: '',
              subject: ''
            }]);
            const onAdd = () => {
              setTotalItems(totalItems + 1);
              setItems([...items, {
                criteria: '',
                subject: ''
              }]);
            };
            const output = [];
            const onDelete = index => {
              const elements = items.slice(0, index).concat(items.slice(index + 1));
              setTotalItems(elements.length);
              setItems(elements);
              editData({
                specs: {
                  ...values.specs,
                  criteria: elements
                }
              });
            };
            const onChangeItem = (index, value) => {
              const data = items;
              data[index] = value;
              setItems(data);
              editData({
                specs: {
                  ...values.specs,
                  criteria: data
                }
              });
            };
            for (let i = 0; i < totalItems; ++i) {
              output.push(_react.default.createElement(_criteriaFieldItem.CriteriaFieldItem, {
                onChange: onChangeItem,
                total: totalItems,
                item: items[i],
                onDelete: onDelete,
                key: `criteria-${i}`,
                index: i
              }));
            }
            return _react.default.createElement("div", {
              className: "form__subsection"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.criteria.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onAdd
            }, texts.actions.add))), output);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./forms/spoken/form
      ***********************************/

      ims.set('./forms/spoken/form', {
        hash: 123068640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenManualForm = SpokenManualForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _criteriaField = require("./criteria-field");
          function SpokenManualForm({
            onCancel
          }) {
            const {
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
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
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            console.log(12, values.specs);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.task.label,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.instructions.label,
              placeholder: texts.specs.instructions.placeholder,
              name: "instructions"
            }), _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./forms/spoken/index
      ************************************/

      ims.set('./forms/spoken/index', {
        hash: 2430585250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenForm = SpokenForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _list = require("pragmate-ui/list");
          var _icons = require("pragmate-ui/icons");
          var _criteriaField = require("./criteria-field");
          function SpokenForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [editCriteria, setEditCriteria] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manualForm) {
              return _react.default.createElement(_form.SpokenManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.criteria || !values.specs.task || !values.specs.instructions) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "spoken",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "task"
            }), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "instructions"
            }), _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.criteria.title), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: () => setEditCriteria(true)
            })), editCriteria ? _react.default.createElement(_criteriaField.CriteriaField, null) : _react.default.createElement(_list.List, {
              className: "criteria__items-list",
              items: values.specs.criteria,
              specs: {},
              control: ({
                data
              }) => _react.default.createElement("div", {
                className: "subform__items"
              }, _react.default.createElement("strong", null, data.criteria, ": "), " ", _react.default.createElement("span", null, data.subject))
            })));
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
        hash: 2622543453,
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
            const onBack = () => {
              if (values.updated) {
                setShowBackModal(true);
                return;
              }
              store.editActivity = undefined;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between mb-15 separator activity-form__header"
            }, _react.default.createElement("div", {
              className: "activity-type flex-container"
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: onBack
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
        hash: 1125523332,
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
          var _refineModal = require("./components/refine-modal");
          var _questions = require("./components/refine-modal/questions");
          var _base = require("./forms/base");
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_base.ActivityFormBase, {
              type: type
            }), showRefiningModal && _react.default.createElement(ModalControl, {
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
        hash: 1743634122,
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
                  ...values.specs,
                  [name]: value
                }
              });
            };
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: name,
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
        hash: 2511398999,
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
            if (!activity.specs.properties.includes('objective')) return null;
            const value = values.specs.objective ?? texts.specs.objective.placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs.objective.label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlTW9kdWxlQ29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwiZ2V0RGF0YSIsInNhdmUiLCJzZXQiLCJtb2RlbCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlPcHRpb25zIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIl9tb2RhbCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93IiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiSWNvbkJ1dHRvbiIsImV4cG9ydHMiLCJfaWNvbnMyIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RXJyb3IiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiX3F1ZXN0aW9ucyIsIlJlZmluZUJhc2VNb2RhbCIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIkZyYWdtZW50IiwiUmVmaW5lUXVlc3Rpb25zTW9kYWxGaWVsZHMiLCJnZW5lcmF0ZSIsInJlZmluaW5nUXVlc3Rpb25zIiwiZ2V0T3B0aW9ucyIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfYmFzZSIsIlJlZmluZU1vZGFsIiwiUmVmaW5lUXVlc3Rpb25zTW9kYWwiLCJfcmFkaW9CdXR0b24iLCJhY3Rpdml0eVRleHRzIiwiTW9kYWxSYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9nZXRPcHRpb25zIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIlJlZmluZVRvcGljc01vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImlkIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJzZXRVcGRhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9uSW5wdXRDaGFuZ2UiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJJY29uIiwiY29udmVyc2F0aW9uIiwidG9waWNzIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJJdGVtIiwiSXRlbU9wdGlvbiIsImhhbmRsZUNoYW5nZSIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9mb3JtMiIsIkFjdGl2aXR5Q29udmVyc2F0aW9uRm9ybSIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFkZEJ1bGxldFBvaW50IiwiY291bGRCZVJlZmluZWQiLCJpbmNsdWRlcyIsImJ1bGxldFBvaW50IiwiYWRkIiwiXyIsIkFjdGl2aXR5Rm9ybUJhc2UiLCJlZGl0RGF0YSIsImZvcm1zIiwib25EZWxldGUiLCJjbGVhciIsIm1hdGVyaWFscyIsImlzVmFsaWQiLCJkZWxldGUiLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInRhcmdldCIsImJ0bkxhYmVsIiwidXBkYXRlZCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwiY2hhcmFjdGVyIiwibWFudWFsIiwiX2VtcHR5TWF0ZXJpYWwiLCJfYmFzZVNwZWMiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX21hcmtkb3duIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsImFydGljbGUiLCJlZGl0IiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwic2V0RGF0YSIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwibG9nIiwiQWN0aXZpdHlGb3JtVGFicyIsIl90YWJzIiwiX3BhbmUiLCJfY29udGVudCIsInRhYnMiLCJpdGVtIiwiYXR0cnMiLCJyZXF1aXJlZCIsIlRhYiIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJNYW51YWxEZWJhdGVGb3JtIiwiRGViYXRlRm9ybSIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX2NvcmUiLCJzZXRPcHRpb25zIiwiYWRkQW5zd2VyIiwic2V0QWRkQW5zd2VyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwic2hvd0Fuc3dlckZvcm1JbiIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsInBhcnNlSW50Iiwic3ViamVjdCIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsImxlbmd0aCIsInNldEl0ZW1zIiwib25BZGQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsIl9saXN0IiwibWFudWFsRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsIkxpc3QiLCJjb250cm9sIiwidXNlRm9ybSIsInNldHRpbmdzIiwic2V0TW9kZWwiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwiaW5zdGFuY2UiLCJGb3JtTW9kZWwiLCJyZWFkeSIsIl9jb3ZlckltYWdlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9yZWZpbmVNb2RhbCIsIkhlYWRlciIsImNsZWFyRGF0YSIsInNhdmVFZGl0YWJsZSIsInNob3dCYWNrTW9kYWwiLCJzZXRTaG93QmFja01vZGFsIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiZm9ybSIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsIkxpbmsiLCJiYWNrIiwiZGF0YVR5cGUiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInNob3dSZWZpbmluZ01vZGFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiRXJyb3IiLCJmaW5hbERhdGEiLCJTcGlubmVyIiwiTW9kYWxDb250cm9sIiwiUHJvdmlkZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJBY3Rpdml0eU1hdGVyaWFsIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRWYWx1ZSIsImFkZE9wdGlvbiIsIk9wdGlvbkFuc3dlcnMiLCJ1cGRhdGUiLCJvcGVuRm9ybSIsInN0b3BQcm9wYWdhdGlvbiIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJzaXppbmciLCJfYW5zd2VycyIsIl9hbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm0iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsInJlZmluZUFjdGlvbiIsIkR5bmFtaWNTcGVjcyIsIkFjdGl2aXR5U3BlY3MiLCJwcm9wZXJ0eSIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2Jhc2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2Jhc2UvcXVlc3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9nZXQtb3B0aW9ucy50cyIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMvcXVlc3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9yYWRpby1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3RvcGljcy50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvYmFzZS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9mb3Jtcy91c2UtZm9ybS50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXItZm9ybS50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FB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