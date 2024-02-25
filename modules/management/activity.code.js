System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/empty", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, ItemOption, AudioPlayer, OptionAnswers, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    ItemOption: void 0,
    AudioPlayer: void 0,
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

      /**************************************************
      INTERNAL MODULE: ./forms/content-theory/AudioPlayer
      **************************************************/

      ims.set('./forms/content-theory/AudioPlayer', {
        hash: 2781382207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: 'audio-player'
            }, _react.default.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, _react.default.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/audio
      ********************************************/

      ims.set('./forms/content-theory/audio', {
        hash: 1965008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _AudioPlayer = require("./AudioPlayer");
          function ContentTheoryAudio({
            content
          }) {
            const {
              activity,
              values,
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const openManualForm = () => setManual(true);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            const onGenerate = () => {};
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: () => setManual(false)
              });
            }
            if (activity.materials.audio) return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_AudioPlayer.AudioPlayer, {
              src: activity.materials.audio
            }));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: onGenerate,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/content-theory/content
      **********************************************/

      ims.set('./forms/content-theory/content', {
        hash: 753953209,
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
          function ContentTheoryContent() {
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
        hash: 1791055665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryForm = ContentTheoryForm;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _content = require("./content");
          var _tabs = require("pragmate-ui/tabs");
          var _pane = require("../materials/pane");
          var _audio = require("./audio");
          function ContentTheoryForm() {
            const {
              activity,
              texts
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
            const onChange = () => {};
            const tabs = [];
            console.log(0.1, activity.materials.items);
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
            }), _react.default.createElement(_audio.ContentTheoryAudio, null)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/content-theory/manual
      *********************************************/

      ims.set('./forms/content-theory/manual', {
        hash: 2694357805,
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

      /******************************************************
      INTERNAL MODULE: ./forms/materials/manual-material-form
      ******************************************************/

      ims.set('./forms/materials/manual-material-form', {
        hash: 3591859880,
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
              name: name,
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual[name].textarea
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

      /**************************************
      INTERNAL MODULE: ./forms/materials/pane
      **************************************/

      ims.set('./forms/materials/pane', {
        hash: 2051955450,
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
          var _manualMaterialForm = require("./manual-material-form");
          function MaterialPane({
            name
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterial(activity.materials[name]);
            });
            if (manual) {
              return _react.default.createElement(_manualMaterialForm.ManualMaterialForm, {
                name: name,
                onCancel: () => setManual(false)
              });
            }
            if (!material) return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: name,
              onManual: () => setManual(true)
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
        hash: 3554637821,
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
        hash: 341749152,
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
        hash: 2262152428,
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
            console.log(3, specs.answers);
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
        hash: 2954545075,
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
            const [options, setOptions] = _react.default.useState(activity.specs.questionLabels ?? []);
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            const [addAnswer, setAddAnswer] = _react.default.useState(false);
            const [answers, setAnswers] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => {
              setOptions(activity.specs.questions.map(item => item.question));
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
        hash: 930064618,
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
            }, _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.subject.label,
              placeholder: texts.specs.criteria.placeholder,
              value: item.name,
              name: "name",
              variant: "floating"
            }), _react.default.createElement(_form.Textarea, {
              onChange: handleChange,
              label: texts.specs.criteria.label,
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
        hash: 1460664675,
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
            }, btnLabel), _react.default.createElement(_components.Button, {
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
        hash: 3864383137,
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
              name: "assessment"
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
        "im": "./forms/content-theory/AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./forms/content-theory/AudioPlayer').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiQWxlcnQiLCJ2YXJpYW50IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwic3RvcmUiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsImFjdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInByb2Nlc3NNZXNzYWdlcyIsInNldEVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic3VidGl0bGUiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiY2FuY2VsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJnZW5lcmF0ZSIsInVwZGF0ZWQiLCJkZXNjcmlwdGlvbiIsInJlZmluaW5nUXVlc3Rpb25zIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwibWF0ZXJpYWxzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJzZXRVcGRhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9uSW5wdXRDaGFuZ2UiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJGcmFnbWVudCIsIkljb24iLCJjb252ZXJzYXRpb24iLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZWRpdEFjdGl2aXR5Iiwic2V0Iiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJidWxsZXRQb2ludCIsImFkZCIsIl8iLCJBY3Rpdml0eUZvcm1CYXNlIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX0F1ZGlvUGxheWVyIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiYXVkaW8iLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwibG9nIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsImFkZEFuc3dlciIsInNldFZhbHVlIiwib25BZGQiLCJfbGlzdCIsIk9wdGlvbkFuc3dlcnMiLCJxdWVzdGlvbiIsInVwZGF0ZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkxpc3QiLCJjb250cm9sIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJfcmVsYXRlZEFjdGl2aXR5IiwibWFudWFsRm9ybSIsImVkaXRPcHRpb25zU2VwY3MiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29yZSIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJyZWZpbmVBY3Rpb24iLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZmlsdGVyIiwicmVsYXRlZCIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsInN1YmplY3QiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwidXNlRm9ybSIsInNldHRpbmdzIiwic2V0TW9kZWwiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwiaW5zdGFuY2UiLCJGb3JtTW9kZWwiLCJyZWFkeSIsIl9jb3ZlckltYWdlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9hY3Rpdml0eU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJmb3JtIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwiTGluayIsImJhY2siLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Jhc2UiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkFjdGl2aXR5TWF0ZXJpYWwiLCJEeW5hbWljU3BlY3MiLCJfc3BlY3NNb2RhbCIsIkFjdGl2aXR5U3BlY3MiLCJwcm9wZXJ0eSIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvYmFzZS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9mb3Jtcy91c2UtZm9ybS50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9keW5hbWljLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVFLGtCQUFrQkEsQ0FBQztZQUFFQyxPQUFPO1lBQUVDO1VBQVMsQ0FBRTtZQUN4RCxPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFRLFlBQVk7Y0FDWkMsSUFBSTtjQUNKQyxLQUFLLEVBQUMsY0FBYztjQUNwQkMsSUFBSSxFQUFDLHdFQUF3RTtjQUM3RVAsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCUSxRQUFRLEVBQUVSLE9BQU87Y0FDakJDLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ2M7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFILE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFZLE1BQUEsR0FBQVosT0FBQTtVQVVPLE1BQU1hLGVBQWUsR0FBcUJBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxRQUFRLEVBQUVDLE9BQU8sR0FBRyxLQUFLO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQztVQUFNLENBQUUsS0FBSTtZQUNySCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQXBCLE1BQUEsQ0FBQXFCLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDbkQsTUFBTUMsVUFB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