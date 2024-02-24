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
        hash: 2758208765,
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

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 3405422756,
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
                await activity.materials.generate(type, values.observations);
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

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 2198725968,
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
        hash: 3438740932,
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
            const text = typeof data === 'object' ? data.text : data;
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
        hash: 3756434129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _icons = require("pragmate-ui/icons");
          var _manual = require("./manual");
          var _questionItemList = require("./question-item-list");
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
              return _react.default.createElement(_empty.EmptySpecs, {
                name: "multiple-choice",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "task"
            }), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "instructions"
            }), _react.default.createElement("div", {
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
        hash: 510384160,
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
              return _react.default.createElement("li", {
                className: "flex-container flex-space-between"
              }, answer, index === data.correctAnswer && _react.default.createElement(_icons.Icon, {
                icon: "check"
              }));
            };
            return _react.default.createElement("li", {
              className: "subform__items"
            }, _react.default.createElement("h5", null, data.text), _react.default.createElement(_list.List, {
              items: data.options,
              control: Answers
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
        hash: 2954468304,
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
        hash: 1107219364,
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
        hash: 4150221019,
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
        hash: 2253785924,
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
            console.log(30, name);
            const onClick = async event => {
              try {
                await activity.specs.generate(name);
              } catch (e) {
                console.error(e);
              }
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiQWxlcnQiLCJ2YXJpYW50IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwic3RvcmUiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsImFjdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInByb2Nlc3NNZXNzYWdlcyIsInNldEVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic3VidGl0bGUiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiY2FuY2VsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwicmVtb3ZlSXRlbXMiLCJzcGVjcyIsImdlbmVyYXRlIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsImRhdGEiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJfaXRlbSIsIl9vcHRpb25zSGVhZGVyIiwiQ29udmVyc2F0aW9uRm9ybSIsInR5cGVzIiwiaXRlbXNUeXBlIiwic2V0VXBkYXRlIiwiaGFzT3duUHJvcGVydHkiLCJvbklucHV0Q2hhbmdlIiwiYnVsbGV0VmFsdWVzIiwiYWN0aW9uc1NwZWNzIiwiRnJhZ21lbnQiLCJJY29uIiwiY29udmVyc2F0aW9uIiwidG9waWNzIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJJdGVtIiwiSXRlbU9wdGlvbiIsImhhbmRsZUNoYW5nZSIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9mb3JtMiIsIkFjdGl2aXR5Q29udmVyc2F0aW9uRm9ybSIsImVkaXRBY3Rpdml0eSIsInNldCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImluZGV4IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiYnVsbGV0UG9pbnQiLCJhZGQiLCJfIiwiQWN0aXZpdHlGb3JtQmFzZSIsImVkaXREYXRhIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJ1cGRhdGVkIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJJbnB1dCIsInJvbGUiLCJjaGFyYWN0ZXIiLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiYXJ0aWNsZSIsImVkaXQiLCJNYXJrZG93biIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiQ29udGVudFRoZW9yeUZvcm0iLCJsb2ciLCJBY3Rpdml0eUZvcm1UYWJzIiwiX3RhYnMiLCJfcGFuZSIsIl9jb250ZW50IiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsImFkZEFuc3dlciIsInNldFZhbHVlIiwib25BZGQiLCJfbGlzdCIsIk9wdGlvbkFuc3dlcnMiLCJxdWVzdGlvbiIsInVwZGF0ZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwiTGlzdCIsImNvbnRyb2wiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwiQ2hpcCIsInNpemluZyIsIm11bHRpcGxlQ2hvaWNlIiwibGFiZWxzIiwiX2Fuc3dlcnMiLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb3JlIiwic2V0T3B0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwic2V0QWRkQW5zd2VyIiwic2V0QW5zd2VycyIsIm1hcCIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlQW5zd2VyIiwicmVzb2x2ZSIsInJlcXVpcmVWYWx1ZSIsInJlZmluZUFjdGlvbiIsIkFuc3dlcnMiLCJhbnN3ZXIiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJwYXJzZUludCIsInN1YmplY3QiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbk1hbnVhbEZvcm0iLCJ0YXNrIiwiaW5zdHJ1Y3Rpb25zIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidXNlRm9ybSIsInNldHRpbmdzIiwic2V0TW9kZWwiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwiaW5zdGFuY2UiLCJGb3JtTW9kZWwiLCJyZWFkeSIsIl9jb3ZlckltYWdlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9hY3Rpdml0eU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJmb3JtIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwiTGluayIsImJhY2siLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Jhc2UiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkFjdGl2aXR5TWF0ZXJpYWwiLCJEeW5hbWljU3BlY3MiLCJfc3BlY3NNb2RhbCIsIkFjdGl2aXR5U3BlY3MiLCJwcm9wZXJ0eSIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvYmFzZS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9mb3Jtcy91c2UtZm9ybS50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9keW5hbWljLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsa0JBQWtCQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBUyxDQUFFO1lBQ3hELE9BQ0NILE1BQUEsQ0FBQUks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