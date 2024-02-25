System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/empty", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, ItemOption, OptionAnswers, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    ItemOption: void 0,
    OptionAnswers: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_pragmateUi006Modal) {
      dependency_2 = _pragmateUi006Modal;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_4 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Alert) {
      dependency_6 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_8 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_9 = _pragmateUi006Image;
    }, function (_pragmateUi006Form) {
      dependency_10 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_11 = _pragmateUi006Components;
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
    }, function (_pragmateUi006List) {
      dependency_18 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/modal', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/alert', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@bgroup/wise-form/form', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
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

      /************************************************************
      INTERNAL MODULE: ./components/generation-modal/activity-modal
      ************************************************************/

      ims.set('./components/generation-modal/activity-modal', {
        hash: 2877120488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySuggestionsModal = ActivitySuggestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ActivitySuggestionsModal({
            type,
            onClose
          }) {
            const {
              texts,
              activity,
              editData
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
                const data = await activity.generate(type, values.observations);
                editData({
                  ...data,
                  updated: true
                });
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
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
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

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 3383587456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsSuggestionsModal = MaterialsSuggestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function MaterialsSuggestionsModal({
            type,
            onClose
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              notes: '',
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
                await activity.materials.generate(type, values.notes);
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
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              value: values.notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
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

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 15222223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsSuggestionsModal = SpecsSuggestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function SpecsSuggestionsModal({
            type,
            onClose
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              notes: '',
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
                await activity.specs.generate(type, values.notes);
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
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              value: values.notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
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

      /***************************************************************
      INTERNAL MODULE: ./components/generation-modal/suggestions-modal
      ***************************************************************/

      ims.set('./components/generation-modal/suggestions-modal', {
        hash: 3948435131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionModal = SuggestionModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function SuggestionModal({
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
                await activity.specs.generate(type, values.observations);
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
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
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
        hash: 1454616698,
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
        hash: 181502598,
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
        hash: 1210803569,
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
              className: "flex-container flex-space-between mt-15 mb-15"
            }, _react.default.createElement("h3", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              disabled: !activity.specs.hasValues,
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
        hash: 2988259939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkForm = CharacterTalkForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
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
              return _react.default.createElement(_empty.EmptySpecs, {
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
        hash: 2417590747,
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
          var _materials = require("../../components/generation-modal/materials");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: () => setShowSuggestions(true),
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: () => setShowSuggestions(false)
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/index
      ********************************************/

      ims.set('./forms/content-theory/index', {
        hash: 2126357318,
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
        hash: 2140222248,
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
        hash: 4197441013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateForm = DebateForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
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
              return _react.default.createElement(_empty.EmptySpecs, {
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

      /************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/choices/answers/form
      ************************************************************/

      ims.set('./forms/multiple-choice/choices/answers/form', {
        hash: 4095822368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          function AnswerForm({
            index,
            toggleAnswerForm
          }) {
            const {
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const {
              specs: {
                clear,
                addAnswer,
                specs
              }
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              setValue('');
              specs.addAnswer(index, value);
              console.log(10, specs.getData());
            };
            const onCancel = event => {
              toggleAnswerForm(false);
              clear();
            };
            return _react.default.createElement("div", {
              className: "answer__form"
            }, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement("div", {
              className: "answer__form__actions flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              onClick: onCancel,
              variant: "primary",
              bordered: true,
              icon: "delete"
            }, texts.actions.delete), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              icon: "add",
              variant: "primary"
            }, texts.actions.add)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/choices/answers/index
      *************************************************************/

      ims.set('./forms/multiple-choice/choices/answers/index', {
        hash: 2406355822,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            question,
            data = [],
            index,
            toggleAnswerForm
          }) {
            const [update, setUpdate] = _react.default.useState({});
            const [correct, setCorrect] = _react.default.useState(question.correct);
            (0, _hooks.useBinder)([question], () => {
              setCorrect(question.correctAnswer);
            });
            const openForm = event => {
              event.stopPropagation();
              toggleAnswerForm(true);
            };
            if (!question?.options || !question.options.length) return null;
            if (!question.options) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              specs: {
                correct,
                question
              },
              className: "question-options__list",
              items: question.options,
              control: _item.AnswerItem
            }));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/choices/answers/item
      ************************************************************/

      ims.set('./forms/multiple-choice/choices/answers/item', {
        hash: 1455793485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          var _context = require("../../../../context");
          const AnswerItem = props => {
            const {
              item,
              index,
              specs: {
                question,
                correct
              }
            } = props;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const mark = event => {
              event.preventDefault();
              question.setCorrect(index);
            };
            return _react.default.createElement("li", null, _react.default.createElement("span", null, item), question.correctAnswer === index ? _react.default.createElement(_chips.Chip, {
              icon: "check",
              sizing: "xs",
              type: "primary"
            }, texts.multipleChoice.labels.correct) : _react.default.createElement(_components.Button, {
              onClick: mark,
              icon: "info",
              bordered: true,
              sizing: "xs",
              variant: "primary"
            }, texts.multipleChoice.labels.mark));
          };
          exports.AnswerItem = AnswerItem;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./forms/multiple-choice/choices/item
      ****************************************************/

      ims.set('./forms/multiple-choice/choices/item', {
        hash: 2579582345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          var _form = require("./answers/form");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(specs.showAnswerFormIn === index);
            const text = typeof data === 'object' ? data.question : data;
            const AnswerFormVisible = specs.showAnswerFormIn === index || showAnswerForm;
            return _react.default.createElement("div", {
              className: "bullet-point__item-container"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), specs.answers && specs.specs.questions[index] && _react.default.createElement(_answers.OptionAnswers, {
              question: specs.specs.questions[index],
              toggleAnswerForm: toggleAnswerForm,
              data: specs.answers,
              index: index
            }), AnswerFormVisible && _react.default.createElement(_form.AnswerForm, {
              index: index,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/multiple-choice/index
      *********************************************/

      ims.set('./forms/multiple-choice/index', {
        hash: 3939589075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _icons = require("pragmate-ui/icons");
          var _manual = require("./manual");
          var _questionItemList = require("./question-item-list");
          var _relatedActivity = require("./related-activity");
          function MultipleChoiceForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [editOptionsSepcs, setEditOptionSpecs] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manualForm) {
              return _react.default.createElement(_manual.MultipleChoiceManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.questions.length) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_empty.EmptySpecs, {
                name: "multiple-choice",
                onManual: () => setManual(true)
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__multiple-field"
            }, editOptionsSepcs ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: () => setEditOptionSpecs(false)
            })), _react.default.createElement(_manual.MultipleChoiceManualForm, {
              onCancel: () => setManual(false)
            })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: () => setEditOptionSpecs(true)
            })), _react.default.createElement(_list.List, {
              className: "specs__items-list",
              items: values.specs.questions,
              specs: {},
              control: _questionItemList.QuestionItemList
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/multiple-choice/manual
      **********************************************/

      ims.set('./forms/multiple-choice/manual', {
        hash: 1004347081,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceManualForm = MultipleChoiceManualForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./choices/item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("./options-header");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function MultipleChoiceManualForm({
            onCancel
          }) {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState(activity.materials.questionLabels ?? []);
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            const [addAnswer, setAddAnswer] = _react.default.useState(false);
            const [answers, setAnswers] = _react.default.useState({});
            console.log(99, values.specs);
            (0, _hooks.useBinder)([activity.specs], () => {
              setOptions(activity.specs.questions.map(item => item.text));
              const answers = activity.specs.questions.map(item => ({
                items: item.options,
                correct: item.correctAnswer
              }));
              setAnswers(answers);
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  ...activity.specs.getData()
                }
              });
              setUpdate({});
            });
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              const specs = {
                ...values.specs
              };
              activity.specs.set({
                questions: target.value
              });
              const answers = activity.specs.questions.map(item => ({
                items: item.options,
                correct: item.correctAnswer
              }));
              setAnswers(answers);
              setOptions(target.value);
              editData({
                specs: {
                  ...specs,
                  ...activity.specs.getData()
                }
              });
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
                requireValue: true,
                onClick: (event, index) => {
                  setAddAnswer(index);
                }
              }
            };
            const specs = {
              type: 'questions',
              specs: activity.specs,
              showAnswerFormIn: addAnswer,
              answers,
              /**
               * Function to display the answer form field at a specified index within the BulletPointInput component.
               *
               * @function showAnswerFormIn
               * @param {number} index - The index position at which the answer form should be displayed.
               * The function initializes or updates the state to render the answer form at the specified index.
               * This is a temporary solution necessitated by the current structure of the BulletPointInput component.
               * The goal is to refactor the BulletPointInput into a more flexible composable structure
               * that would allow for easier state updates and better reusability.
               *
               * @example
               * // To show the answer form at the third position in the BulletPointInput component
               * showAnswerFormIn(2);
               *
               * NOTE: The current implementation is a workaround due to the limitations of the BulletPointInput.
               * It is imperative to undertake component restructuring to facilitate easier state management
               * and to adhere to best practices in terms of component architecture.
               */
              clear: () => setAddAnswer(false)
            };
            return _react.default.createElement("div", {
              className: "activity__materials-form"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: options,
              Item: _item.ItemOption,
              specs: specs,
              handleChange: handleChange,
              fieldName: "questions"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./forms/multiple-choice/options-header
      ******************************************************/

      ims.set('./forms/multiple-choice/options-header', {
        hash: 2109050189,
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
          var _context = require("../../context");
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

      /**********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/question-item-list
      **********************************************************/

      ims.set('./forms/multiple-choice/question-item-list', {
        hash: 2665885222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionItemList = QuestionItemList;
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          function QuestionItemList({
            data
          }) {
            const Answers = ({
              data: answer,
              index
            }) => {
              const icon = index === data.correctAnswer ? 'check' : 'close';
              return _react.default.createElement("li", {
                className: "flex-container flex-vertical-center flex-05"
              }, _react.default.createElement(_icons.Icon, {
                icon: icon,
                className: "icon-xs"
              }), answer);
            };
            return _react.default.createElement("li", {
              className: "subform__items"
            }, _react.default.createElement("h5", null, data.question), _react.default.createElement(_list.List, {
              items: data.options,
              control: Answers
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/related-activity
      ********************************************************/

      ims.set('./forms/multiple-choice/related-activity', {
        hash: 1620034359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _context = require("../../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function RelatedActivityField({
            refineAction = true
          }) {
            const {
              store,
              itemsType,
              texts: {
                multipleChoice: texts
              },
              values,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const options = store.model.activities.items.filter(item => item.type === 'content-theory').map(item => {
              return {
                value: item.id,
                label: item.title
              };
            });
            const onChange = event => {
              activity.specs.set({
                related: event.value
              });
              editData({
                specs: {
                  ...values.specs,
                  related: event.value
                }
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              options: [{
                value: 'n/a',
                label: texts.related.independent
              }, ...options],
              onChange: onChange
            }));
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
        hash: 3022251049,
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
        hash: 3591435131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenForm = SpokenForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
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
              console.log(3, specs);
              editData({
                specs
              });
            }, 'specs.generated');
            if (manualForm) {
              return _react.default.createElement(_form.SpokenManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.criteria || !values.specs.task || !values.specs.assessment) {
              return _react.default.createElement(_empty.EmptySpecs, {
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
              }, _react.default.createElement("strong", null, data.name, ": "), " ", _react.default.createElement("span", null, data.subject))
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
        hash: 3893803387,
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
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
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
              className: "header-form__container mt-15"
            }, _react.default.createElement("section", null, _react.default.createElement("div", {
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
              icon: _icons2.ICONS.aiStars,
              variant: "primary",
              bordered: true,
              onClick: () => setShowSuggestions(true)
            }, texts.actions.generate), _react.default.createElement(_components.Button, {
              variant: "primary",
              ...attrs
            }, texts.actions.save))), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "title",
              selector: "h4",
              onSave: saveEditable
            }, title)), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement("div", null, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, description)), showBackModal && _react.default.createElement(_cancelModal.CancelChangesModal, {
              onClose: onCloseModal,
              onConfirm: () => {
                clearData();
                store.editActivity = undefined;
                onCloseModal();
              }
            }), showSuggestions && _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 1336861619,
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
          var _base = require("./forms/base");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [values, setValues] = _react.default.useState(activity.getData());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const {
              type
            } = activity;
            const itemsType = store.activityTypes.get(type);
            if (!itemsType) throw new Error(`the activity type ${type} is not supported`);
            const editData = data => {
              const finalData = {
                ...values,
                updated: true,
                ...data
              };
              console.log(500, finalData);
              setValues(finalData);
            };
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
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
                itemsType
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_base.ActivityFormBase, {
              type: type
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
        hash: 1798568906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicSpecs = DynamicSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("./empty");
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
            return _react.default.createElement("div", null, _react.default.createElement(_empty.EmptySpecs, {
              name: name,
              onManual: () => console.log('on manual')
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./specs/empty
      *****************************/

      ims.set('./specs/empty', {
        hash: 3639275956,
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
          var _specsModal = require("../components/generation-modal/specs-modal");
          function EmptySpecs({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.specs.fetching);
            const [, setData] = _react.default.useState(activity.specs.getData());
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.specs.getData());
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: () => setShowSuggestions(true),
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_specsModal.SpecsSuggestionsModal, {
              type: name,
              onClose: () => setShowSuggestions(false)
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
        "im": "./forms/multiple-choice/choices/answers/index",
        "from": "OptionAnswers",
        "name": "OptionAnswers"
      }, {
        "im": "./forms/multiple-choice/choices/item",
        "from": "ItemOption",
        "name": "ItemOption"
      }, {
        "im": "./index",
        "from": "ModuleActivityForm",
        "name": "ModuleActivityForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./conversation/item').ItemOption : value);
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./forms/multiple-choice/choices/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./forms/multiple-choice/choices/item').ItemOption : value);
        (require || prop === 'ModuleActivityForm') && _export("ModuleActivityForm", ModuleActivityForm = require ? require('./index').ModuleActivityForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiQWxlcnQiLCJ2YXJpYW50IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwic3RvcmUiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsImFjdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInByb2Nlc3NNZXNzYWdlcyIsInNldEVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic3VidGl0bGUiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiY2FuY2VsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJnZW5lcmF0ZSIsInVwZGF0ZWQiLCJkZXNjcmlwdGlvbiIsInJlZmluaW5nUXVlc3Rpb25zIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwibWF0ZXJpYWxzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJzZXRVcGRhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9uSW5wdXRDaGFuZ2UiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJGcmFnbWVudCIsIkljb24iLCJjb252ZXJzYXRpb24iLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZWRpdEFjdGl2aXR5Iiwic2V0Iiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJidWxsZXRQb2ludCIsImFkZCIsIl8iLCJBY3Rpdml0eUZvcm1CYXNlIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJDb250ZW50VGhlb3J5Rm9ybSIsIkFjdGl2aXR5Rm9ybVRhYnMiLCJfdGFicyIsIl9wYW5lIiwiX2NvbnRlbnQiLCJ0YWJzIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsImxvZyIsIkFuc3dlckZvcm0iLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiYWRkQW5zd2VyIiwic2V0VmFsdWUiLCJvbkFkZCIsIl9saXN0IiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwib3BlbkZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJMaXN0IiwiY29udHJvbCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwiYW5zd2VycyIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiX3JlbGF0ZWRBY3Rpdml0eSIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvcmUiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwibWFwIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwicmVmaW5lQWN0aW9uIiwiQW5zd2VycyIsImFuc3dlciIsImZpbHRlciIsInJlbGF0ZWQiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsInBhcnNlSW50Iiwic3ViamVjdCIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwidXNlRm9ybSIsInNldHRpbmdzIiwic2V0TW9kZWwiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwiaW5zdGFuY2UiLCJGb3JtTW9kZWwiLCJyZWFkeSIsIl9jb3ZlckltYWdlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9hY3Rpdml0eU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJmb3JtIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwiTGluayIsImJhY2siLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Jhc2UiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkFjdGl2aXR5TWF0ZXJpYWwiLCJEeW5hbWljU3BlY3MiLCJfc3BlY3NNb2RhbCIsIkFjdGl2aXR5U3BlY3MiLCJwcm9wZXJ0eSIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvYmFzZS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvZm9ybXMvdXNlLWZvcm0udHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZHluYW1pYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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