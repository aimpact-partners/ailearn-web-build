System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/empty", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, ItemOption, AudioPlayer, OptionAnswers, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_16 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Empty) {
      dependency_17 = _pragmateUi006Empty;
    }, function (_bgroupWiseForm004Form) {
      dependency_18 = _bgroupWiseForm004Form;
    }, function (_pragmateUi006Tabs) {
      dependency_19 = _pragmateUi006Tabs;
    }, function (_pragmateUi006Chips) {
      dependency_20 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_21 = _beyondJsKernel019Core;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/modal', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/alert', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-sdk/config', dependency_16], ['pragmate-ui/empty', dependency_17], ['@bgroup/wise-form/form', dependency_18], ['pragmate-ui/tabs', dependency_19], ['pragmate-ui/chips', dependency_20], ['@beyond-js/kernel/core', dependency_21]]);
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
        hash: 4026859603,
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
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: () => setShowRefiningModal(true),
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            })), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
              confirm: true,
              onClose: () => setShowRefiningModal(false)
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
        hash: 369485448,
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
              activity,
              store,
              texts: {
                picture: texts,
                refine: {
                  textarea: textAreaTexts
                },
                actions: textActions,
                generatingImage
              }
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              notes: activity.pictureSuggestions,
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
                  await activity.generatePicture(values.notes);
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
              name: "notes",
              value: values.notes,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !values.notes,
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
              content: generatingImage
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
        hash: 1395398444,
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
          var _list = require("pragmate-ui/list");
          var _config = require("@aimpact/ailearn-sdk/config");
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
            const onGenerate = async () => {
              try {
                setFetching(true);
                await activity.materials.generateAudio();
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: () => setManual(false)
              });
            }
            const Item = ({
              data: type
            }) => {
              const src = `${_config.default.params.apis.ailearn}/activities/${activity.id}/materials/${type}/audio`;
              return _react.default.createElement("div", {
                className: "audio-item flex-container flex-flex-vertical-center flex-space-between"
              }, _react.default.createElement("h5", null, texts.materials[type]), _react.default.createElement("div", {
                className: "audio-player"
              }, _react.default.createElement("audio", {
                controls: true,
                preload: "metadata"
              }, _react.default.createElement("source", {
                src: src,
                type: "audio/mp3"
              }), "Your browser does not support the audio element.")));
            };
            if (activity.materials.audios) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
                items: activity.materials.audios,
                control: Item,
                container: "div"
              }));
            }
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
        hash: 696599097,
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
        hash: 3004468718,
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
            if (!values.specs.subject) {
              return _react.default.createElement(_empty.EmptySpecs, {
                name: "debate",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "subject"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2l0ZW0iLCJfb3B0aW9uc0hlYWRlciIsIkNvbnZlcnNhdGlvbkZvcm0iLCJ0eXBlcyIsIml0ZW1zVHlwZSIsInNldFVwZGF0ZSIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkljb24iLCJjb252ZXJzYXRpb24iLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZWRpdEFjdGl2aXR5Iiwic2V0Iiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJidWxsZXRQb2ludCIsImFkZCIsIl8iLCJBY3Rpdml0eUZvcm1CYXNlIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJhZGRBbnN3ZXIiLCJzZXRWYWx1ZSIsIm9uQWRkIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJfcmVsYXRlZEFjdGl2aXR5IiwibWFudWFsRm9ybSIsImVkaXRPcHRpb25zU2VwY3MiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29yZSIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJyZWZpbmVBY3Rpb24iLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZmlsdGVyIiwicmVsYXRlZCIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsImFzc2Vzc21lbnQiLCJ1c2VGb3JtIiwic2V0dGluZ3MiLCJzZXRNb2RlbCIsInByb3BlcnRpZXMiLCJmaWVsZHMiLCJpbnN0YW5jZSIsIkZvcm1Nb2RlbCIsInJlYWR5IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX2FjdGl2aXR5TW9kYWwiLCJIZWFkZXIiLCJjbGVhckRhdGEiLCJzYXZlRWRpdGFibGUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImZvcm0iLCJvbkNsb3NlTW9kYWwiLCJvbkJhY2siLCJMaW5rIiwiYmFjayIsIm1vZHVsZSIsImRhdGFUeXBlIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9vYmplY3RpdmUiLCJfYmFzZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsIkVycm9yIiwiZmluYWxEYXRhIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiQWN0aXZpdHlNYXRlcmlhbCIsIkR5bmFtaWNTcGVjcyIsIl9zcGVjc01vZGFsIiwiQWN0aXZpdHlTcGVjcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9iYXNlLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL3VzZS1mb3JtLnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxrQkFBa0JBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFTLENBQUU7WUFDeEQsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsTUFBQSxDQUFBUSxZQUFZO2NBQ1pDLElBQUk7Y0FDSkMsS0FBSyxFQUFDLGNBQWM7Y0FDcEJDLElBQUksRUFBQyx3RUFBd0U7Y0FDN0VQLE9BQU8sRUFBRUEsT0FBTztjQUNoQlEsUUFBUSxFQUFFUixPQUFPO2NBQ2pCQyxTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZkEsU0FBUyxFQUFFO2NBQ1o7WUFBQyxFQUNjO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBSCxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFVTyxNQUFNYSxlQUFlLEdBQXFCQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsUUFBUSxFQUFFQyxPQUFPLEdBQUcsS0FBSztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDckgsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUFwQixNQUFBLENBQUFxQixRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU1DLFVBQVUsR0FBRyxJQUFBdEIsTUFBQSxDQUFBdUIsTUFBTSxFQUFpQixJQUFJLENBQUM7WUFFL0MsSUFBQXZCLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxNQUFLO2NBQ2QsSUFBSSxPQUFPUCxRQUFRLEtBQUssUUFBUSxJQUFJSyxVQUFVLENBQUNHLE9BQU8sRUFBRTtnQkFDdkRILFVBQVUsQ0FBQ0csT0FBTyxDQUFDQyxXQUFXLEdBQUdULFFBQVE7O1lBRTNDLENBQUMsRUFBRSxDQUFDQSxRQUFRLENBQUMsQ0FBQztZQUVkLE1BQU1VLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCUCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO2NBRTFCUyxVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNQyxFQUFFLEdBQUdQLFVBQVUsQ0FBQ0csT0FBTztnQkFDN0IsSUFBSUksRUFBRSxFQUFFO2tCQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7a0JBQ3BDLE1BQU1DLEdBQUcsR0FBR0MsVUFBVSxDQUFDQyxZQUFZLEVBQUU7a0JBQ3JDTCxLQUFLLENBQUNNLGtCQUFrQixDQUFDUCxFQUFFLENBQUM7a0JBQzVCQyxLQUFLLENBQUNPLFFBQVEsQ0FBQyxLQUFLLENBQUM7a0JBQ3JCSixHQUFHLEVBQUVLLGVBQWUsRUFBRTtrQkFDdEJMLEdBQUcsRUFBRU0sUUFBUSxDQUFDVCxLQUFLLENBQUM7a0JBQ3BCRCxFQUFFLENBQUNXLEtBQUssRUFBRTs7Y0FFWixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQUVELE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDMUIsSUFBSTtnQkFDSCxNQUFNeEIsTUFBTSxDQUFDO2tCQUFFTCxJQUFJO2tCQUFFOEIsS0FBSyxFQUFFckIsVUFBVSxDQUFDRyxPQUFPLEVBQUVDO2dCQUFXLENBQUUsQ0FBQztnQkFDOUROLGFBQWEsQ0FBQyxLQUFLLENBQUM7ZUFDcEIsQ0FBQyxPQUFPd0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsTUFBTUcsR0FBRyxHQUFHLHVCQUF1Qi9CLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsTUFBTWdDLElBQUksR0FBRzdCLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6QyxNQUFNOEIsVUFBVSxHQUFHOUIsVUFBVSxHQUFHLHVCQUF1QixHQUFHLEVBQUU7WUFDNUQsTUFBTStCLE9BQU8sR0FBRy9CLFVBQVUsR0FBR3NCLElBQUksR0FBR2QsVUFBVTtZQUM5QyxPQUNDM0IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFFK0I7WUFBRyxHQUNsQi9DLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNVLE9BQU87Y0FDUG9DLEdBQUcsRUFBRTdCLFVBQVU7Y0FDZk4sU0FBUyxFQUFFaUMsVUFBVTtjQUNyQkcsZUFBZSxFQUFFakMsVUFBVTtjQUMzQmtDLDhCQUE4QixFQUFFO1lBQUksRUFDbkMsRUFDRnJELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLE1BQUEsQ0FBQTJDLFVBQVU7Y0FBQ04sSUFBSSxFQUFFQSxJQUFJO2NBQUVFLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3ZDO1VBRVIsQ0FBQztVQUFDSyxPQUFBLENBQUEzQyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURGLElBQUFaLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFZLE1BQUEsR0FBQVosT0FBQTtVQUNBLElBQUF5RCxPQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTBELGdCQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVNEQsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUM7VUFBVyxDQUFFO1lBQzNELE1BQU07Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUV2QyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsb0JBQW9CLENBQUMsR0FBR2pFLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUvRCxNQUFNNkMsYUFBYSxHQUFHLE1BQU14QixLQUFLLElBQUc7Y0FDbkNBLEtBQUssQ0FBQ3lCLGNBQWMsRUFBRTtjQUN0Qk4sV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNQyxRQUFRLENBQUNNLGVBQWUsRUFBRTtjQUNoQ1AsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsSUFBSUQsU0FBUyxFQUFFO2NBQ2QsT0FDQzVELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFRVyxTQUFTLEVBQUM7Y0FBUyxHQUMxQmhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLE1BQUEsQ0FBQTJDLFVBQVU7Z0JBQUNKLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Z0JBQUVqQixJQUFJLEVBQUVRLE9BQUEsQ0FBQWEsS0FBSyxDQUFDQztjQUFPLEVBQUksQ0FDdEU7O1lBR1gsT0FDQ3RFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQVMsR0FDMUJoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxNQUFBLENBQUEyQyxVQUFVO2NBQUNKLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Y0FBRU8sUUFBUTtjQUFDeEIsSUFBSSxFQUFFUSxPQUFBLENBQUFhLEtBQUssQ0FBQ0M7WUFBTyxFQUFJLEVBQ3ZGdEUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sTUFBQSxDQUFBMkMsVUFBVTtjQUFDbUIsUUFBUSxFQUFFLElBQUk7Y0FBRXpCLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDcEMsRUFDUmdCLFNBQVMsSUFBSWhFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvRCxnQkFBQSxDQUFBaUIsZUFBZTtjQUFDQyxPQUFPLEVBQUUsSUFBSTtjQUFFekUsT0FBTyxFQUFFQSxDQUFBLEtBQU0rRCxvQkFBb0IsQ0FBQyxLQUFLO1lBQUMsRUFBSSxDQUMxRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBakUsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZFLE1BQUEsR0FBQTdFLE9BQUE7VUFFTSxTQUFVOEUsYUFBYUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVoQztVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBTzlDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN1RSxNQUFBLENBQUFHLEtBQUs7Y0FBQ0MsT0FBTyxFQUFDO1lBQU8sR0FBRUYsS0FBSyxDQUFDaEMsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQTlDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFrRixHQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBb0YsTUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixRQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDTSxTQUFVc0YsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUVDLEtBQUs7Y0FBRXhCO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFOUMsTUFBTSxDQUFDd0IsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3hGLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDeUMsUUFBUSxDQUFDMkIsT0FBTyxDQUFDO1lBQzFELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFN0IsV0FBVyxDQUFDLEdBQUc3RCxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsSUFBQTZELE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3QixRQUFRLENBQUMsRUFBRSxNQUFNMEIsUUFBUSxDQUFDMUIsUUFBUSxDQUFDMkIsT0FBTyxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFMUUsT0FDQ3pGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUF3QixHQUNyQzhDLFFBQVEsQ0FBQzJCLE9BQU8sSUFBSXpGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM4RSxNQUFBLENBQUFTLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFTjtZQUFLLEVBQUksRUFDMUN2RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0UsUUFBQSxDQUFBekIsaUJBQWlCO2NBQUNFLFdBQVcsRUFBRUEsV0FBVztjQUFFRCxTQUFTLEVBQUUsQ0FBQyxDQUFDRSxRQUFRLENBQUMyQjtZQUFPLEVBQUksRUFDOUV6RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBYSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQTFGLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBRUEsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBa0YsR0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFrRyxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVMkUsZUFBZUEsQ0FBQztZQUFFQyxPQUFPO1lBQUV6RTtVQUFPLENBQUU7WUFDbkQsTUFBTTtjQUNMNEQsUUFBUTtjQUNSd0IsS0FBSztjQUNMUixLQUFLLEVBQUU7Z0JBQ05XLE9BQU8sRUFBRVgsS0FBSztnQkFDZG9CLE1BQU0sRUFBRTtrQkFBRUMsUUFBUSxFQUFFQztnQkFBYSxDQUFFO2dCQUNuQ0MsT0FBTyxFQUFFQyxXQUFXO2dCQUNwQkM7Y0FBZTtZQUNmLENBQ0QsR0FBRyxJQUFBN0MsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUMyQixRQUFRLEVBQUU3QixXQUFXLENBQUMsR0FBRzdELE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUN5QixLQUFLLEVBQUUwRCxRQUFRLENBQUMsR0FBR3hHLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxFQUFFO1lBQzFDLE1BQU0sQ0FBQ29GLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcxRyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQztjQUMxQ3NGLEtBQUssRUFBRTdDLFFBQVEsQ0FBQzhDLGtCQUFrQjtjQUNsQ0MsVUFBVSxFQUFFO2FBQ1osQ0FBQztZQUNGLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRy9HLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUzRCxNQUFNMkYsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRXZFLEtBQUssSUFBRztnQkFDakJnRSxTQUFTLENBQUM7a0JBQ1QsR0FBR0QsTUFBTTtrQkFDVCxDQUFDL0QsS0FBSyxDQUFDd0UsYUFBYSxDQUFDckcsSUFBSSxHQUFHNkIsS0FBSyxDQUFDd0UsYUFBYSxDQUFDdkU7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0RPLE9BQU8sRUFBRSxNQUFNUixLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hxRSxjQUFjLENBQUMsS0FBSyxDQUFDO2tCQUNyQmxELFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU1DLFFBQVEsQ0FBQ00sZUFBZSxDQUFDcUMsTUFBTSxDQUFDRSxLQUFLLENBQUM7a0JBQzVDekcsT0FBTyxFQUFFO2lCQUNULENBQUMsT0FBTzBDLENBQUMsRUFBRTtrQkFDWDRELFFBQVEsQ0FBQzVELENBQUMsQ0FBQ3VFLE9BQU8sQ0FBQztpQkFDbkIsU0FBUztrQkFDVHRELFdBQVcsQ0FBQyxLQUFLLENBQUM7O2NBRXBCO2FBQ0E7WUFFRCxNQUFNdUQsYUFBYSxHQUFHekMsT0FBTyxHQUFHLE1BQU1vQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUdDLE1BQU0sQ0FBQzlELE9BQU87WUFFM0UsT0FDQ2xELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQXVILEtBQUs7Y0FBQzlHLElBQUk7Y0FBQ1MsU0FBUyxFQUFDLGNBQWM7Y0FBQ2QsT0FBTyxFQUFFQTtZQUFPLEdBQ3BERixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS3lFLEtBQUssQ0FBQ3RFLEtBQUssQ0FBTSxFQUN0QlIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBT3lFLEtBQUssQ0FBQ3dDLFFBQVEsQ0FBUSxDQUNyQixFQUNUdEgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXdCLElBQUksUUFDSnZILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RixNQUFBLENBQUFwQixhQUFhO2NBQUNDLEtBQUssRUFBRUEsS0FBSztjQUFFaEMsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDN0M5QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSM0csSUFBSSxFQUFDLE9BQU87Y0FDWjhCLEtBQUssRUFBRThELE1BQU0sQ0FBQ0UsS0FBSztjQUNuQk0sUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJRLEtBQUssRUFBRXJCLGFBQWEsQ0FBQ3FCLEtBQUs7Y0FDMUJDLFdBQVcsRUFBRXRCLGFBQWEsQ0FBQ3NCO1lBQVcsRUFDckMsQ0FDSSxFQUVQMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQStCLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNDLE9BQU8sRUFBQyxTQUFTO2NBQUNQLFFBQVEsRUFBRSxDQUFDZ0MsTUFBTSxDQUFDRSxLQUFLO2NBQUV6RCxPQUFPLEVBQUVrRSxhQUFhO2NBQUVwRSxJQUFJLEVBQUVyQyxNQUFBLENBQUEwRCxLQUFLLENBQUNDO1lBQU8sR0FDNUZnQyxXQUFXLENBQUNKLE1BQU0sQ0FDWCxDQUNELEVBQ1JZLFdBQVcsSUFDWDlHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUNaSCxTQUFTLEVBQUU2RyxNQUFNLENBQUM5RCxPQUFPO2NBQ3pCeEMsUUFBUSxFQUFFQSxDQUFBLEtBQU1xRyxjQUFjLENBQUMsS0FBSyxDQUFDO2NBQ3JDVixPQUFPLEVBQUU7Z0JBQ1IxQixPQUFPLEVBQUU7a0JBQ1JLLE9BQU8sRUFBRSxTQUFTO2tCQUNsQnlDLEtBQUssRUFBRW5CLFdBQVcsQ0FBQzNCO2lCQUNuQjtnQkFDRGlELE1BQU0sRUFBRTtrQkFBRUgsS0FBSyxFQUFFbkIsV0FBVyxDQUFDc0IsTUFBTTtrQkFBRTVDLE9BQU8sRUFBRSxTQUFTO2tCQUFFUixRQUFRLEVBQUU7Z0JBQUk7ZUFDdkU7Y0FDRGpFLElBQUk7Y0FDSkMsS0FBSyxFQUFFc0UsS0FBSyxDQUFDSCxPQUFPLENBQUNuRSxLQUFLO2NBQzFCQyxJQUFJLEVBQUVxRSxLQUFLLENBQUNILE9BQU8sQ0FBQzJDO1lBQVEsRUFFN0IsRUFFRHRILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RSxHQUFBLENBQUFhLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FDbkMxRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBNEMsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV4QjtZQUFlLEVBQUksQ0FDdkMsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pHQSxJQUFBdkcsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdHLEtBQUEsR0FBQWhHLE9BQUE7VUFFQSxJQUFBa0YsR0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVaUksd0JBQXdCQSxDQUFDO1lBQUVDLElBQUk7WUFBRS9IO1VBQU8sQ0FBRTtZQUN6RCxNQUFNO2NBQUU0RSxLQUFLO2NBQUVoQixRQUFRO2NBQUVvRTtZQUFRLENBQUUsR0FBRyxJQUFBeEUsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNLENBQUMyQixRQUFRLEVBQUU3QixXQUFXLENBQUMsR0FBRzdELE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNvRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHMUcsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUM7Y0FDMUM4RyxZQUFZLEVBQUUsRUFBRTtjQUNoQkMsV0FBVyxFQUFFLEtBQUs7Y0FDbEJIO2FBQ0EsQ0FBQztZQUVGLE1BQU1qQixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkUsS0FBSyxJQUFHO2dCQUNqQmdFLFNBQVMsQ0FBQztrQkFDVCxHQUFHRCxNQUFNO2tCQUNULENBQUMvRCxLQUFLLENBQUN3RSxhQUFhLENBQUNyRyxJQUFJLEdBQUc2QixLQUFLLENBQUN3RSxhQUFhLENBQUN2RTtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRE8sT0FBTyxFQUFFLE1BQU1SLEtBQUssSUFBRztnQkFDdEJtQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNd0UsSUFBSSxHQUFHLE1BQU12RSxRQUFRLENBQUN3RSxRQUFRLENBQUNMLElBQUksRUFBRXhCLE1BQU0sQ0FBQzBCLFlBQVksQ0FBQztnQkFDL0RELFFBQVEsQ0FBQztrQkFBRSxHQUFHRyxJQUFJO2tCQUFFRSxPQUFPLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUNwQ3JJLE9BQU8sRUFBRTtnQkFFVDBCLFVBQVUsQ0FBQyxNQUFLO2tCQUNmaUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDN0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsTUFBQSxDQUFBdUgsS0FBSztjQUFDOUcsSUFBSTtjQUFDUyxTQUFTLEVBQUMsY0FBYztjQUFDZCxPQUFPLEVBQUVBO1lBQU8sR0FDcERGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixLQUFBLENBQUF3QixJQUFJLFFBQ0p2SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS3lFLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQzFGLEtBQUssQ0FBTSxFQUM3QlIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBT3lFLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ3NDLFdBQVcsQ0FBUSxDQUMvQixFQUNUeEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXlCLFFBQVE7Y0FDUkMsS0FBSyxFQUFFM0MsS0FBSyxDQUFDb0IsTUFBTSxDQUFDQyxRQUFRLENBQUNzQixLQUFLO2NBQ2xDNUcsSUFBSSxFQUFDLGNBQWM7Y0FDbkI4QixLQUFLLEVBQUU4RCxNQUFNLENBQUMwQixZQUFZO2NBQzFCbEIsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJTLFdBQVcsRUFBRTVDLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDdUI7WUFBVyxFQUM3QyxDQUNJLEVBRVAxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVyxTQUFTLEVBQUM7WUFBK0IsR0FDaERoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0MsT0FBTyxFQUFDLFNBQVM7Y0FBQzlCLE9BQU8sRUFBRThELE1BQU0sQ0FBQzlEO1lBQU8sR0FDL0M0QixLQUFLLENBQUN1QixPQUFPLENBQUNpQyxRQUFRLENBQ2YsQ0FDRCxFQUNUdEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRFLEdBQUEsQ0FBQWEsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzFGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RSxHQUFBLENBQUE0QyxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRWpELEtBQUssQ0FBQzJEO1lBQWlCLEVBQUksQ0FDL0MsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBekksTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdHLEtBQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBa0YsR0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVMkkseUJBQXlCQSxDQUFDO1lBQUVULElBQUk7WUFBRS9IO1VBQU8sQ0FBRTtZQUMxRCxNQUFNO2NBQUU0RSxLQUFLO2NBQUVoQjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQzJCLFFBQVEsRUFBRTdCLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ29GLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcxRyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQztjQUMxQ3NGLEtBQUssRUFBRSxFQUFFO2NBQ1R5QixXQUFXLEVBQUUsS0FBSztjQUNsQkg7YUFDQSxDQUFDO1lBRUYsTUFBTWpCLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV2RSxLQUFLLElBQUc7Z0JBQ2pCZ0UsU0FBUyxDQUFDO2tCQUNULEdBQUdELE1BQU07a0JBQ1QsQ0FBQy9ELEtBQUssQ0FBQ3dFLGFBQWEsQ0FBQ3JHLElBQUksR0FBRzZCLEtBQUssQ0FBQ3dFLGFBQWEsQ0FBQ3ZFO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNETyxPQUFPLEVBQUUsTUFBTVIsS0FBSyxJQUFHO2dCQUN0Qm1CLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1DLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDTCxJQUFJLEVBQUV4QixNQUFNLENBQUNFLEtBQUssQ0FBQztnQkFDckR6RyxPQUFPLEVBQUU7Z0JBRVQwQixVQUFVLENBQUMsTUFBSztrQkFDZmlDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQzdELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQXVILEtBQUs7Y0FBQzlHLElBQUk7Y0FBQ1MsU0FBUyxFQUFDLGNBQWM7Y0FBQ2QsT0FBTyxFQUFFQTtZQUFPLEdBQ3BERixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUt5RSxLQUFLLENBQUNvQixNQUFNLENBQUMxRixLQUFLLENBQU0sRUFDN0JSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU95RSxLQUFLLENBQUNvQixNQUFNLENBQUNzQyxXQUFXLENBQVEsQ0FDL0IsRUFFVHhJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixLQUFBLENBQUF5QixRQUFRO2NBQ1JDLEtBQUssRUFBRTNDLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDc0IsS0FBSztjQUNsQzVHLElBQUksRUFBQyxPQUFPO2NBQ1o4QixLQUFLLEVBQUU4RCxNQUFNLENBQUNFLEtBQUs7Y0FDbkJNLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCUyxXQUFXLEVBQUU1QyxLQUFLLENBQUNvQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3VCO1lBQVcsRUFDN0MsQ0FDSSxFQUVQMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQStCLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNDLE9BQU8sRUFBQyxTQUFTO2NBQUM5QixPQUFPLEVBQUU4RCxNQUFNLENBQUM5RDtZQUFPLEdBQy9DNEIsS0FBSyxDQUFDdUIsT0FBTyxDQUFDaUMsUUFBUSxDQUNmLENBQ0QsRUFDVHRJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RSxHQUFBLENBQUFhLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FDbkMxRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBNEMsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVqRCxLQUFLLENBQUMyRDtZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQXpJLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWtGLEdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBaUcsV0FBQSxHQUFBakcsT0FBQTtVQUVBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTZJLHFCQUFxQkEsQ0FBQztZQUFFWCxJQUFJO1lBQUUvSDtVQUFPLENBQUU7WUFDdEQsTUFBTTtjQUFFNEUsS0FBSztjQUFFaEI7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUMyQixRQUFRLEVBQUU3QixXQUFXLENBQUMsR0FBRzdELE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNvRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHMUcsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUM7Y0FDMUNzRixLQUFLLEVBQUUsRUFBRTtjQUNUeUIsV0FBVyxFQUFFLEtBQUs7Y0FDbEJIO2FBQ0EsQ0FBQztZQUVGLE1BQU1qQixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkUsS0FBSyxJQUFHO2dCQUNqQmdFLFNBQVMsQ0FBQztrQkFDVCxHQUFHRCxNQUFNO2tCQUNULENBQUMvRCxLQUFLLENBQUN3RSxhQUFhLENBQUNyRyxJQUFJLEdBQUc2QixLQUFLLENBQUN3RSxhQUFhLENBQUN2RTtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRE8sT0FBTyxFQUFFLE1BQU1SLEtBQUssSUFBRztnQkFDdEJtQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNQyxRQUFRLENBQUMrRSxLQUFLLENBQUNQLFFBQVEsQ0FBQ0wsSUFBSSxFQUFFeEIsTUFBTSxDQUFDRSxLQUFLLENBQUM7Z0JBQ2pEekcsT0FBTyxFQUFFO2dCQUVUMEIsVUFBVSxDQUFDLE1BQUs7a0JBQ2ZpQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0M3RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUF1SCxLQUFLO2NBQUM5RyxJQUFJO2NBQUNTLFNBQVMsRUFBQyxjQUFjO2NBQUNkLE9BQU8sRUFBRUE7WUFBTyxHQUNwREYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXdCLElBQUksUUFDSnZILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUUsS0FBSyxDQUFDb0IsTUFBTSxDQUFDMUYsS0FBSyxDQUFNLEVBQzdCUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxlQUFPeUUsS0FBSyxDQUFDb0IsTUFBTSxDQUFDc0MsV0FBVyxDQUFRLENBQy9CLEVBRVR4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSQyxLQUFLLEVBQUUzQyxLQUFLLENBQUNvQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3NCLEtBQUs7Y0FDbEM1RyxJQUFJLEVBQUMsT0FBTztjQUNaOEIsS0FBSyxFQUFFOEQsTUFBTSxDQUFDRSxLQUFLO2NBQ25CTSxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFNUMsS0FBSyxDQUFDb0IsTUFBTSxDQUFDQyxRQUFRLENBQUN1QjtZQUFXLEVBQzdDLENBQ0ksRUFFUDFILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUErQixHQUNoRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUMzQyxPQUFPLEVBQUMsU0FBUztjQUFDOUIsT0FBTyxFQUFFOEQsTUFBTSxDQUFDOUQ7WUFBTyxHQUMvQzRCLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2lDLFFBQVEsQ0FDZixDQUNELEVBQ1R0SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBYSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DMUYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRFLEdBQUEsQ0FBQTRDLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFakQsS0FBSyxDQUFDMkQ7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUF6SSxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0csS0FBQSxHQUFBaEcsT0FBQTtVQUVBLElBQUFrRixHQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVUrSSxlQUFlQSxDQUFDO1lBQUViLElBQUk7WUFBRS9IO1VBQU8sQ0FBRTtZQUNoRCxNQUFNO2NBQUU0RSxLQUFLO2NBQUVoQjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQzJCLFFBQVEsRUFBRTdCLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ29GLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcxRyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQztjQUMxQzhHLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQkg7YUFDQSxDQUFDO1lBRUYsTUFBTWpCLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV2RSxLQUFLLElBQUc7Z0JBQ2pCZ0UsU0FBUyxDQUFDO2tCQUNULEdBQUdELE1BQU07a0JBQ1QsQ0FBQy9ELEtBQUssQ0FBQ3dFLGFBQWEsQ0FBQ3JHLElBQUksR0FBRzZCLEtBQUssQ0FBQ3dFLGFBQWEsQ0FBQ3ZFO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNETyxPQUFPLEVBQUUsTUFBTVIsS0FBSyxJQUFHO2dCQUN0Qm1CLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1DLFFBQVEsQ0FBQytFLEtBQUssQ0FBQ1AsUUFBUSxDQUFDTCxJQUFJLEVBQUV4QixNQUFNLENBQUMwQixZQUFZLENBQUM7Z0JBQ3hEakksT0FBTyxFQUFFO2dCQUVUMEIsVUFBVSxDQUFDLE1BQUs7a0JBQ2ZpQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0M3RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUF1SCxLQUFLO2NBQUM5RyxJQUFJO2NBQUNTLFNBQVMsRUFBQyxjQUFjO2NBQUNkLE9BQU8sRUFBRUE7WUFBTyxHQUNwREYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXdCLElBQUksUUFDSnZILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUUsS0FBSyxDQUFDb0IsTUFBTSxDQUFDMUYsS0FBSyxDQUFNLEVBQzdCUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxlQUFPeUUsS0FBSyxDQUFDb0IsTUFBTSxDQUFDc0MsV0FBVyxDQUFRLENBQy9CLEVBRVR4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSQyxLQUFLLEVBQUUzQyxLQUFLLENBQUNvQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3NCLEtBQUs7Y0FDbEM1RyxJQUFJLEVBQUMsY0FBYztjQUNuQjhCLEtBQUssRUFBRThELE1BQU0sQ0FBQzBCLFlBQVk7Y0FDMUJsQixRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFNUMsS0FBSyxDQUFDb0IsTUFBTSxDQUFDQyxRQUFRLENBQUN1QjtZQUFXLEVBQzdDLENBQ0ksRUFFUDFILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUErQixHQUNoRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUMzQyxPQUFPLEVBQUMsU0FBUztjQUFDOUIsT0FBTyxFQUFFOEQsTUFBTSxDQUFDOUQ7WUFBTyxHQUMvQzRCLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2lDLFFBQVEsQ0FDZixDQUNELEVBQ1R0SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBYSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DMUYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRFLEdBQUEsQ0FBQTRDLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFakQsS0FBSyxDQUFDMkQ7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUF6SSxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ0osWUFBQSxHQUFBaEosT0FBQTtVQUNBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ00sU0FBVWlKLGNBQWNBLENBQUM7WUFBRXZDLE1BQU07WUFBRUM7VUFBUyxDQUFFO1lBQ25ELE1BQU07Y0FBRTVDLFFBQVE7Y0FBRXdCO1lBQUssQ0FBRSxHQUFHLElBQUE1QixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLElBQUlrRixZQUFZLEdBQUc7Y0FBRXRHLEtBQUssRUFBRSxFQUFFO2NBQUU4RSxLQUFLLEVBQUU7WUFBUSxDQUFFO1lBQ2pELE1BQU15QixPQUFPLEdBQUcsRUFBRTtZQUNsQjVELEtBQUssQ0FBQzZELEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsQ0FBQyxJQUFHO2NBQ3hDLElBQUlBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLMUYsUUFBUSxDQUFDMEYsRUFBRSxFQUFFO2NBQzFCLElBQUlELENBQUMsQ0FBQ0MsRUFBRSxLQUFLL0MsTUFBTSxDQUFDb0MsS0FBSyxDQUFDWSxVQUFVLEVBQUVSLFlBQVksR0FBRztnQkFBRXRHLEtBQUssRUFBRTRHLENBQUMsQ0FBQ0MsRUFBRTtnQkFBRS9CLEtBQUssRUFBRThCLENBQUMsQ0FBQy9JO2NBQUssQ0FBRTtjQUNwRjBJLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFL0csS0FBSyxFQUFFNEcsQ0FBQyxDQUFDQyxFQUFFO2dCQUFFL0IsS0FBSyxFQUFFOEIsQ0FBQyxDQUFDL0k7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTW1KLFlBQVksR0FBR3RCLElBQUksSUFBRztjQUMzQjNCLFNBQVMsQ0FBQ0QsTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVvQyxLQUFLLEVBQUU7a0JBQUUsR0FBR3BDLE1BQU0sQ0FBQ29DLEtBQUs7a0JBQUVZLFVBQVUsRUFBRXBCLElBQUksQ0FBQzFGO2dCQUFLO2NBQUUsQ0FBRSxDQUFDLENBQUM7WUFDekYsQ0FBQztZQUVELE9BQ0MzQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPdUosT0FBTyxFQUFDLEVBQUU7Y0FBQzVJLFNBQVMsRUFBQztZQUFXLEcsc0NBRXRDaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBJLFlBQUEsQ0FBQWMsV0FBVztjQUFDNUMsUUFBUSxFQUFFMEMsWUFBWTtjQUFFVixZQUFZLEVBQUVBLFlBQVk7Y0FBRUMsT0FBTyxFQUFFLENBQUNELFlBQVksRUFBRSxHQUFHQyxPQUFPO1lBQUMsRUFBSSxDQUNqRztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBbEosTUFBQSxHQUFBRCxPQUFBO1VBaUJPLE1BQU0rSixhQUFhLEdBQUF2RyxPQUFBLENBQUF1RyxhQUFBLEdBQUc5SixNQUFBLENBQUFJLE9BQUssQ0FBQzJKLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1oRyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNL0QsTUFBQSxDQUFBSSxPQUFLLENBQUM0SixVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDdkcsT0FBQSxDQUFBUSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnRFLElBQUEvRCxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0ssa0JBQUEsR0FBQWxLLE9BQUE7VUFFQSxJQUFBbUssS0FBQSxHQUFBbkssT0FBQTtVQUVBLElBQUFvSyxjQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBSU0sU0FBVXFLLGdCQUFnQkEsQ0FBQztZQUFFdEcsUUFBUTtZQUFFMkMsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDL0QsTUFBTTtjQUFFMkQsS0FBSztjQUFFQyxTQUFTO2NBQUV4RixLQUFLO2NBQUVRO1lBQUssQ0FBRSxHQUFHLElBQUE1QixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzdEN0IsVUFBVSxDQUFDb0QsS0FBSyxHQUFHQSxLQUFLO1lBQ3hCLE1BQU07Y0FBRTJDO1lBQUksQ0FBRSxHQUFHbkUsUUFBUTtZQUN6QixNQUFNMEMsUUFBUSxHQUFHeEcsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sR0FBR2tKLFNBQVMsQ0FBQyxHQUFHdkssTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUE2RCxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDN0IsUUFBUSxDQUFDK0UsS0FBSyxDQUFDLEVBQUUsTUFBTTBCLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUNGLEtBQUssQ0FBQ0csY0FBYyxDQUFDdkMsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBRTVDLE1BQU13QyxhQUFhLEdBQUcvSCxLQUFLLElBQUc7Y0FDN0IsTUFBTTtnQkFBRTdCLElBQUk7Z0JBQUU4QjtjQUFLLENBQUUsR0FBR0QsS0FBSyxDQUFDd0UsYUFBYTtjQUMzQ1IsU0FBUyxDQUFDRCxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRW9DLEtBQUssRUFBRTtrQkFBRSxHQUFHcEMsTUFBTSxDQUFDb0MsS0FBSztrQkFBRSxDQUFDaEksSUFBSSxHQUFHOEI7Z0JBQUs7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNoRixDQUFDO1lBRUQsSUFBSStILFlBQVksR0FBR2pFLE1BQU0sQ0FBQ29DLEtBQUssQ0FBQ3lCLFNBQVMsQ0FBQztZQUMxQyxNQUFNSyxZQUFZLEdBQXdCLEVBQUU7WUFFNUMsT0FDQzNLLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQVcsR0FDekJoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxNQUFBLENBQUFpSyxJQUFJO2NBQUM1SCxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ25COEIsS0FBSyxDQUFDK0YsWUFBWSxDQUFDckMsV0FBVyxDQUMxQixFQUVOeEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXlCLFFBQVE7Y0FDUjdFLEtBQUssRUFBRThELE1BQU0sQ0FBQ29DLEtBQUssQ0FBQ0wsV0FBVyxJQUFJLEVBQUU7Y0FDckNmLEtBQUssRUFBQyxhQUFhO2NBQ25CNUcsSUFBSSxFQUFDLGFBQWE7Y0FDbEJvRyxRQUFRLEVBQUV3RDtZQUFhLEVBQ3RCLEVBQ0Z6SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBVyxHQUN6QmhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLE1BQUEsQ0FBQWlLLElBQUk7Y0FBQzVILElBQUksRUFBQyxNQUFNO2NBQUNoQyxTQUFTLEVBQUM7WUFBUSxFQUFHLEVBQ3RDOEQsS0FBSyxDQUFDK0YsWUFBWSxDQUFDQyxNQUFNLENBQ3JCLEVBQ045SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEosa0JBQUEsQ0FBQWMsaUJBQWlCO2NBQ2pCMUUsT0FBTyxFQUFFc0UsWUFBWTtjQUNyQmxFLE1BQU0sRUFBRWlFLFlBQVk7Y0FDcEJNLElBQUksRUFBRWQsS0FBQSxDQUFBZSxVQUFVO2NBQ2hCcEMsS0FBSyxFQUFFO2dCQUFFWixJQUFJLEVBQUVxQztjQUFTLENBQUU7Y0FDMUJZLFlBQVksRUFBRVQsYUFBYTtjQUMzQlUsU0FBUyxFQUFFYjtZQUFTLEdBRXBCdEssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhKLGNBQUEsQ0FBQWlCLGtCQUFrQixPQUFHLENBQ0gsQ0FDbEI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQXBMLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBRUEsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFzTCxNQUFBLEdBQUF0TCxPQUFBO1VBRU0sU0FBVXVMLHdCQUF3QkEsQ0FBQTtZQUN2QyxNQUFNO2NBQUV4RyxLQUFLO2NBQUVRO1lBQUssQ0FBRSxHQUFHLElBQUE1QixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1ELFFBQVEsR0FBR3dCLEtBQUssQ0FBQ2lHLFlBQVk7WUFFbkMsTUFBTXBJLEdBQUcsR0FBR25ELE1BQUEsQ0FBQUksT0FBSyxDQUFDbUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNLENBQUNrRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHMUcsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQXdCO2NBQ2pFYixLQUFLLEVBQUVzRCxRQUFRLENBQUN0RCxLQUFLO2NBQ3JCZ0ksV0FBVyxFQUFFMUUsUUFBUSxDQUFDMEUsV0FBVyxJQUFJLEVBQUU7Y0FDdkNLLEtBQUssRUFBRS9FLFFBQVEsQ0FBQytFO2FBQ2hCLENBQUM7WUFDRixNQUFNcEcsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN2QnFCLFFBQVEsQ0FBQzBILEdBQUcsQ0FBQy9FLE1BQU0sQ0FBQztjQUNwQixNQUFNbkIsS0FBSyxDQUFDNkQsS0FBSyxDQUFDc0MsU0FBUyxFQUFFO2NBQzdCbkcsS0FBSyxDQUFDaUcsWUFBWSxHQUFHRyxTQUFTO1lBQy9CLENBQUM7WUFFRCxPQUNDMUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXdCLElBQUksUUFDSnZILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQyx1QkFBdUI7Y0FBQ21DLEdBQUcsRUFBRUE7WUFBRyxHQUM5Q25ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnTCxNQUFBLENBQUFqQixnQkFBZ0I7Y0FBQzNELE1BQU0sRUFBRUEsTUFBTTtjQUFFM0MsUUFBUSxFQUFFQSxRQUFRO2NBQUU0QyxTQUFTLEVBQUVBLFNBQVM7Y0FBRTVCLEtBQUssRUFBRUEsS0FBSyxDQUFDc0U7WUFBVSxFQUFJLEVBQ3ZHcEosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQThDLEdBQy9EaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNDLE9BQU8sRUFBQyxTQUFTO2NBQUM5QixPQUFPLEVBQUVUO1lBQUksR0FDckNxQyxLQUFLLENBQUN1QixPQUFPLENBQUM1RCxJQUFJLENBQ1gsQ0FDRCxDQUNKLENBQ0E7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXpDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrSyxrQkFBQSxHQUFBbEssT0FBQTtVQUtPO1VBQVcsU0FBVWtMLFVBQVVBLENBQUM7WUFBRTVDLElBQUk7WUFBRXNEO1VBQUssQ0FBRTtZQUNyRCxNQUFNO2NBQUU5QztZQUFLLENBQUUsR0FBRyxJQUFBb0Isa0JBQUEsQ0FBQTJCLDJCQUEyQixHQUFFO1lBQy9DLE1BQU1uTCxJQUFJLEdBQUdvSSxLQUFLLENBQUNaLElBQUksS0FBSyxXQUFXLEdBQUdJLElBQUksQ0FBQzVILElBQUksR0FBRzRILElBQUk7WUFFMUQsT0FDQ3JJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRKLGtCQUFBLENBQUE0QixxQkFBcUI7Y0FBQ3hELElBQUksRUFBRTVILElBQUk7Y0FBRWtMLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2pEO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQTNMLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrSyxrQkFBQSxHQUFBbEssT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDTSxTQUFVcUwsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRW5ILG9CQUFvQjtjQUFFcUcsU0FBUztjQUFFeEY7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDckUsTUFBTTtjQUFFK0g7WUFBYyxDQUFFLEdBQUcsSUFBQTdCLGtCQUFBLENBQUEyQiwyQkFBMkIsR0FBRTtZQUV4RCxNQUFNRyxjQUFjLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUNDLFFBQVEsQ0FBQzFCLFNBQVMsQ0FBQztZQUNsRSxPQUNDdEssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQWtFLEdBQ2hGaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNFLElBQUksRUFBQyxLQUFLO2NBQUNnQyxPQUFPLEVBQUMsU0FBUztjQUFDUixRQUFRO2NBQUN0QixPQUFPLEVBQUU0STtZQUFjLEdBQ25FaEgsS0FBSyxDQUFDbUgsV0FBVyxDQUFDQyxHQUFHLENBQ2QsRUFDUkgsY0FBYyxJQUNkL0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNFLElBQUksRUFBRXJDLE1BQUEsQ0FBQTBELEtBQUssQ0FBQ0MsT0FBTztjQUFFVSxPQUFPLEVBQUMsU0FBUztjQUFDOUIsT0FBTyxFQUFFQSxDQUFBLEtBQU1lLG9CQUFvQixDQUFDLElBQUk7WUFBQyxHQUN0RmEsS0FBSyxDQUFDbUgsV0FBVyxDQUFDL0YsTUFBTSxDQUUxQixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFsRyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQW9NLENBQUEsR0FBQXBNLE9BQUE7VUFFTSxTQUFVcU0sZ0JBQWdCQSxDQUFDO1lBQUVuRTtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFbkUsUUFBUTtjQUFFb0UsUUFBUTtjQUFFcEQ7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFeEQsSUFBSSxDQUFDb0ksQ0FBQSxDQUFBRSxLQUFLLENBQUNwRSxJQUFJLENBQUMsRUFBRXBGLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQixFQUFFbUYsSUFBSSxFQUFFa0UsQ0FBQSxDQUFBRSxLQUFLLENBQUM7WUFDaEUsTUFBTTlFLElBQUksR0FBRzRFLENBQUEsQ0FBQUUsS0FBSyxDQUFDcEUsSUFBSSxDQUFDO1lBQ3hCLE1BQU1xRSxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCeEksUUFBUSxDQUFDK0UsS0FBSyxDQUFDMEQsS0FBSyxFQUFFO2NBQ3RCekksUUFBUSxDQUFDNkUsU0FBUyxDQUFDNEQsS0FBSyxFQUFFO2NBQzFCckUsUUFBUSxDQUFDO2dCQUFFVyxLQUFLLEVBQUUvRSxRQUFRLENBQUMrRSxLQUFLLENBQUMyRCxPQUFPLEVBQUU7Z0JBQUU3RCxTQUFTLEVBQUU3RSxRQUFRLENBQUM2RSxTQUFTLENBQUM2RCxPQUFPO2NBQUUsQ0FBRSxDQUFDO1lBQ3ZGLENBQUM7WUFFRCxPQUNDeE0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVyxTQUFTLEVBQUM7WUFBK0MsR0FDaEVoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUUsS0FBSyxDQUFDK0QsS0FBSyxDQUFDckksS0FBSyxDQUFNLEVBQzVCUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDbEQsUUFBUSxFQUFFLENBQUNYLFFBQVEsQ0FBQytFLEtBQUssQ0FBQzRELFNBQVM7Y0FBRXpILE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7Y0FBQ3RCLE9BQU8sRUFBRW9KO1lBQVEsR0FDdkZ4SCxLQUFLLENBQUN1QixPQUFPLENBQUNxRyxNQUFNLENBQ2IsQ0FDSixDQUNFLEVBQ1QxTSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0gsSUFBSSxPQUFHLENBQ047VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQXZILE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVU0TSx1QkFBdUJBLENBQUM7WUFBRWpNO1VBQVEsQ0FBRTtZQUNuRCxNQUFNO2NBQUVvRSxLQUFLO2NBQUVoQjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLE1BQU07Y0FBRTBDLE1BQU07Y0FBRXlCO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQzZJLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNNEYsUUFBUSxHQUFHdkUsS0FBSyxJQUFHO2NBQ3hCLE1BQU1vSyxNQUFNLEdBQUdwSyxLQUFLLENBQUN3RSxhQUFhO2NBQ2xDLE1BQU0yQixLQUFLLEdBQUc7Z0JBQUUsR0FBR3BDLE1BQU0sQ0FBQ29DO2NBQUssQ0FBRTtjQUNqQ1gsUUFBUSxDQUFDO2dCQUFFVyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDaUUsTUFBTSxDQUFDak0sSUFBSSxHQUFHaU0sTUFBTSxDQUFDbks7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU1vSyxRQUFRLEdBQUd0RyxNQUFNLENBQUM4QixPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTXlFLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUl2RyxNQUFNLENBQUM4QixPQUFPLEVBQUU7Z0JBQ25Cc0Usa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5NLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNUCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjBNLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5NLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNdU0sYUFBYSxHQUFHQSxDQUFBLEtBQU1KLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDN00sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQW1ILEtBQUs7Y0FDTGpHLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFFM0MsS0FBSyxDQUFDK0QsS0FBSyxDQUFDc0UsSUFBSSxDQUFDMUYsS0FBSztjQUM3QkMsV0FBVyxFQUFFNUMsS0FBSyxDQUFDK0QsS0FBSyxDQUFDc0UsSUFBSSxDQUFDekYsV0FBVztjQUN6QzdHLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRmIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQW1ILEtBQUs7Y0FDTGpHLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFFM0MsS0FBSyxDQUFDK0QsS0FBSyxDQUFDdUUsU0FBUyxDQUFDM0YsS0FBSztjQUNsQ0MsV0FBVyxFQUFFNUMsS0FBSyxDQUFDK0QsS0FBSyxDQUFDdUUsU0FBUyxDQUFDMUYsV0FBVztjQUM5QzdHLElBQUksRUFBQztZQUFXLEVBQ2YsRUFDRmIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQStCLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRThKLGFBQWE7Y0FBRWhJLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7WUFBQSxHQUN4RHVJLFFBQVEsQ0FDRCxDQUNELEVBQ1JILGVBQWUsSUFDZjVNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRU8sUUFBUSxFQUFFdU07WUFBYSxHQUMxRGpOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQU15RSxLQUFLLENBQUN1SSxNQUFNLENBQUN6RixNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBLElBQUE1SCxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBdU4sTUFBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUF3TixTQUFBLEdBQUF4TixPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBRU0sU0FBVXlOLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUUxSixRQUFRO2NBQUVvRSxRQUFRO2NBQUV6QjtZQUFNLENBQUUsR0FBRyxJQUFBL0MsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNLENBQUNzSixNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHek4sTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUE2RCxNQUFBLENBQUFTLFNBQVMsRUFDUixDQUFDN0IsUUFBUSxDQUFDK0UsS0FBSyxDQUFDLEVBQ2hCLE1BQUs7Y0FDSixNQUFNQSxLQUFLLEdBQUcvRSxRQUFRLENBQUMrRSxLQUFLLENBQUMyRCxPQUFPLEVBQUU7Y0FDdEN0RSxRQUFRLENBQUM7Z0JBQUVXO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxpQkFBaUIsQ0FDakI7WUFFRCxJQUFJd0UsTUFBTSxFQUFFO2NBQ1gsT0FBT3JOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixLQUFBLENBQUE0Ryx1QkFBdUI7Z0JBQUNqTSxRQUFRLEVBQUVBLENBQUEsS0FBTStNLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFFckUsSUFBSSxDQUFDaEgsTUFBTSxDQUFDb0MsS0FBSyxDQUFDc0UsSUFBSSxJQUFJLENBQUMxRyxNQUFNLENBQUNvQyxLQUFLLENBQUN1RSxTQUFTLEVBQUU7Y0FDbEQsT0FBT3BOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNpTixNQUFBLENBQUFJLFVBQVU7Z0JBQUM3TSxJQUFJLEVBQUMsZ0JBQWdCO2dCQUFDOE0sUUFBUSxFQUFFQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHN0UsT0FDQ3pOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tOLFNBQUEsQ0FBQUssZ0JBQWdCO2NBQUMvTSxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ2hDYixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa04sU0FBQSxDQUFBSyxnQkFBZ0I7Y0FBQy9NLElBQUksRUFBQztZQUFXLEVBQUcsQ0FDbkM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQWIsTUFBQSxHQUFBRCxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVThOLFdBQVdBLENBQUM7WUFBRWhJO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRTtjQUNUaEQsT0FBTyxDQUFDaUwsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWmpJLEdBQUcsR0FBR2tJLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDbkksR0FBRyxDQUFDO1lBQzlCLE1BQU0xQyxHQUFHLEdBQUduRCxNQUFBLENBQUFJLE9BQUssQ0FBQ21CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJ2QixNQUFBLENBQUFJLE9BQUssQ0FBQ29CLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1zTCxNQUFNLEdBQUczSixHQUFHLENBQUMxQixPQUFPO2NBQzFCcUwsTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSW5CLE1BQU0sQ0FBQ29CLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQ3JCLE1BQU0sQ0FBQ3NCLFdBQVcsR0FBRyxLQUFLO2tCQUMxQnRCLE1BQU0sQ0FBQ3VCLFlBQVksR0FBRyxNQUFLO29CQUMxQnZCLE1BQU0sQ0FBQ3VCLFlBQVksR0FBRyxJQUFJO29CQUMxQnZCLE1BQU0sQ0FBQ3NCLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDdkksR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQzdGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFjLEdBQzVCaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT2lPLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakN2TyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0YsR0FBRyxFQUFFQSxHQUFHO2NBQUVvQyxJQUFJLEVBQUMsV0FBVztjQUFDOUUsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFeEMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBNkMsV0FBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5TyxPQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFHQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFrRixHQUFBLEdBQUFsRixPQUFBO1VBR0EsSUFBQTBPLEtBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBMk8sT0FBQSxHQUFBM08sT0FBQTtVQUNNLFNBQVU0TyxrQkFBa0JBLENBQUM7WUFBRTVHO1VBQU8sQ0FBbUM7WUFDOUUsTUFBTTtjQUFFakUsUUFBUTtjQUFFMkMsTUFBTTtjQUFFM0I7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDc0osTUFBTSxFQUFFSSxTQUFTLENBQUMsR0FBR3pOLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNdU4sY0FBYyxHQUFHQSxDQUFBLEtBQU1uQixTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0sQ0FBQy9ILFFBQVEsRUFBRTdCLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUN5QyxRQUFRLENBQUM2RSxTQUFTLENBQUNqRCxRQUFRLENBQUM7WUFDM0UsSUFBQVIsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM4RSxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLE1BQU1vQixVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0hoTCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNQyxRQUFRLENBQUM2RSxTQUFTLENBQUNtRyxhQUFhLEVBQUU7ZUFDeEMsQ0FBQyxPQUFPbE0sQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNrTSxHQUFHLENBQUNuTSxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUaUIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELElBQUl3SixNQUFNLEVBQUU7Y0FDWCxPQUFPck4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21PLE9BQUEsQ0FBQVEsa0JBQWtCO2dCQUFDbk8sSUFBSSxFQUFDLFNBQVM7Z0JBQUNILFFBQVEsRUFBRUEsQ0FBQSxLQUFNK00sU0FBUyxDQUFDLEtBQUs7Y0FBQyxFQUFJOztZQUcvRSxNQUFNekMsSUFBSSxHQUFHQSxDQUFDO2NBQUUzQyxJQUFJLEVBQUVKO1lBQUksQ0FBRSxLQUFJO2NBQy9CLE1BQU1wQyxHQUFHLEdBQUcsR0FBRzZJLE9BQUEsQ0FBQXRPLE9BQU0sQ0FBQzZPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGVBQWVyTCxRQUFRLENBQUMwRixFQUFFLGNBQWN2QixJQUFJLFFBQVE7Y0FFN0YsT0FDQ2pJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFLVyxTQUFTLEVBQUM7Y0FBd0UsR0FDdEZoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUUsS0FBSyxDQUFDNkQsU0FBUyxDQUFDVixJQUFJLENBQUMsQ0FBTSxFQUNoQ2pJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFLVyxTQUFTLEVBQUM7Y0FBYyxHQUM1QmhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFPaU8sUUFBUTtnQkFBQ0MsT0FBTyxFQUFDO2NBQVUsR0FDakN2TyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUXdGLEdBQUcsRUFBRUEsR0FBRztnQkFBRW9DLElBQUksRUFBQztjQUFXLEVBQUcsRSxtREFFOUIsQ0FDSCxDQUNEO1lBRVIsQ0FBQztZQUVELElBQUluRSxRQUFRLENBQUM2RSxTQUFTLENBQUN5RyxNQUFNLEVBQUU7Y0FDOUIsT0FDQ3BQLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29PLEtBQUEsQ0FBQVksSUFBSTtnQkFBQ2hHLEtBQUssRUFBRXZGLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQ3lHLE1BQU07Z0JBQUVFLE9BQU8sRUFBRXRFLElBQUk7Z0JBQUV1RSxTQUFTLEVBQUM7Y0FBSyxFQUFHLENBQ3ZFOztZQUlMLE9BQ0N2UCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RSxHQUFBLENBQUF1SyxTQUFTO2NBQUMvTyxJQUFJLEVBQUVxRSxLQUFLLENBQUNzRSxVQUFVLENBQUNxRyxLQUFLLENBQUNqUCxLQUFLO2NBQUVnSSxXQUFXLEVBQUUxRCxLQUFLLENBQUNzRSxVQUFVLENBQUNxRyxLQUFLLENBQUNqSDtZQUFXLEdBQzdGeEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQTRCLEdBQzFDaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRTJMLFVBQVU7Y0FBRTdKLE9BQU8sRUFBQztZQUFTLEdBQzVDRixLQUFLLENBQUN1QixPQUFPLENBQUNpQyxRQUFRLENBQ2YsQ0FDSixFQUVOdEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRFLEdBQUEsQ0FBQWEsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzdCLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQU0sV0FBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUF5TyxPQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBMlAsU0FBQSxHQUFBM1AsT0FBQTtVQUVBLElBQUE0UCxjQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQW1GLE1BQUEsR0FBQW5GLE9BQUE7VUFDTSxTQUFVNlAsb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRTlMLFFBQVE7Y0FBRTJDLE1BQU07Y0FBRTNCO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQ3RELE1BQU0sQ0FBQ3NKLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUd6TixNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTXVOLGNBQWMsR0FBR0EsQ0FBQSxLQUFNbkIsU0FBUyxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFBdkksTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM4RSxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLElBQUlKLE1BQU0sRUFBRTtjQUNYLE9BQU9yTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbU8sT0FBQSxDQUFBUSxrQkFBa0I7Z0JBQUNuTyxJQUFJLEVBQUMsU0FBUztnQkFBQ0gsUUFBUSxFQUFFQSxDQUFBLEtBQU0rTSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRy9FLElBQUkzSixRQUFRLENBQUM2RSxTQUFTLENBQUNrSCxPQUFPLEVBQzdCLE9BQ0M3UCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUEyQyxHQUN6RGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUMzRSxJQUFJLEVBQUMsTUFBTTtjQUFDRSxPQUFPLEVBQUUwTCxjQUFjO2NBQUU1SixPQUFPLEVBQUMsTUFBTTtjQUFDUixRQUFRO1lBQUEsR0FDbEVNLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ3lKLElBQUksQ0FDWCxDQUNKLEVBQ045UCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBbUIsR0FDakNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcVAsU0FBQSxDQUFBSyxRQUFRO2NBQUNoSSxPQUFPLEVBQUVqRSxRQUFRLENBQUM2RSxTQUFTLENBQUNrSDtZQUFPLEVBQUksQ0FDNUMsQ0FDSjtZQUdMLE9BQU83UCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1AsY0FBQSxDQUFBSyxhQUFhO2NBQUNuUCxJQUFJLEVBQUMsU0FBUztjQUFDOE0sUUFBUSxFQUFFaUI7WUFBYyxFQUFJO1VBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBNU8sTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtGLEdBQUEsR0FBQWxGLE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQW1GLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBa1EsVUFBQSxHQUFBbFEsT0FBQTtVQUVNLFNBQVVpUSxhQUFhQSxDQUFDO1lBQUVuUCxJQUFJO1lBQUU4TTtVQUFRLENBQUU7WUFDL0MsTUFBTTtjQUFFN0osUUFBUTtjQUFFZ0I7WUFBSyxDQUFFLEdBQUcsSUFBQXBCLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDbU0sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHblEsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5FLE1BQU0sQ0FBQ3FFLFFBQVEsRUFBRTdCLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUN5QyxRQUFRLENBQUM2RSxTQUFTLENBQUNqRCxRQUFRLENBQUM7WUFDM0UsTUFBTSxHQUFHMEssT0FBTyxDQUFDLEdBQUdwUSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3lDLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQzlILElBQUksQ0FBQyxDQUFDO1lBRTVELElBQUFxRSxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDN0IsUUFBUSxDQUFDNkUsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzlFLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDNkUsU0FBUyxDQUFDakQsUUFBUSxDQUFDO2NBQ3hDMEssT0FBTyxDQUFDdE0sUUFBUSxDQUFDNkUsU0FBUyxDQUFDOUgsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsT0FDQ2IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBdUssU0FBUztjQUFDL08sSUFBSSxFQUFFcUUsS0FBSyxDQUFDc0UsVUFBVSxDQUFDcUcsS0FBSyxDQUFDalAsS0FBSztjQUFFZ0ksV0FBVyxFQUFFMUQsS0FBSyxDQUFDc0UsVUFBVSxDQUFDcUcsS0FBSyxDQUFDakg7WUFBVyxHQUM3RnhJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUE0QixHQUMxQ2hCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUN6RSxPQUFPLEVBQUVBLENBQUEsS0FBTWlOLGtCQUFrQixDQUFDLElBQUksQ0FBQztjQUFFbkwsT0FBTyxFQUFDO1lBQVMsR0FDaEVGLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2lDLFFBQVEsQ0FDZixDQUNKLEVBQ050SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ1IsUUFBUTtjQUFDdEIsT0FBTyxFQUFFeUs7WUFBUSxHQUNsRDdJLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2dILE1BQU0sQ0FDYixDQUNKLEVBRU5yTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBYSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0IsRUFDWHdLLGVBQWUsSUFBSWxRLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0UCxVQUFBLENBQUF2SCx5QkFBeUI7Y0FBQ1QsSUFBSSxFQUFFcEgsSUFBSTtjQUFFWCxPQUFPLEVBQUVBLENBQUEsS0FBTWlRLGtCQUFrQixDQUFDLEtBQUs7WUFBQyxFQUFJLENBQ3JHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFuUSxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBR0EsSUFBQXNRLFFBQUEsR0FBQXRRLE9BQUE7VUFFQSxJQUFBdVEsS0FBQSxHQUFBdlEsT0FBQTtVQUNBLElBQUF3USxLQUFBLEdBQUF4USxPQUFBO1VBQ0EsSUFBQXlRLE1BQUEsR0FBQXpRLE9BQUE7VUFFTSxTQUFVMFEsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRTNNLFFBQVE7Y0FBRWdCO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQzJCLFFBQVEsRUFBRTdCLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUN5QyxRQUFRLENBQUM2RSxTQUFTLENBQUNqRCxRQUFRLENBQUM7WUFDM0UsTUFBTSxHQUFHMEssT0FBTyxDQUFDLEdBQUdwUSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3lDLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQ2tILE9BQU8sQ0FBQztZQUU5RCxJQUFBM0ssTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM5RSxXQUFXLENBQUNDLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQ2pELFFBQVEsQ0FBQztjQUN4QzBLLE9BQU8sQ0FBQztnQkFBRXpILFNBQVMsRUFBRTdFLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQzZELE9BQU8sRUFBRTtnQkFBRWpFLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUNwRSxDQUFDLENBQUM7WUFFRixNQUFNdEIsUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBRXpCLE1BQU15SixJQUFJLEdBQUcsRUFBRTtZQUVmNU0sUUFBUSxDQUFDNkUsU0FBUyxDQUFDVSxLQUFLLENBQUNDLE9BQU8sQ0FBQ3FILElBQUksSUFBRztjQUN2QyxNQUFNOVAsSUFBSSxHQUFHLE9BQU84UCxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQzlQLElBQUk7Y0FDeEQsTUFBTTRHLEtBQUssR0FBRzNDLEtBQUssQ0FBQzZELFNBQVMsQ0FBQzlILElBQUksQ0FBQztjQUVuQyxNQUFNK1AsS0FBSyxHQUFHO2dCQUFFbk0sUUFBUSxFQUFFLENBQUMsQ0FBQ2tNLElBQUksRUFBRUUsUUFBUSxJQUFJLENBQUMvTSxRQUFRLENBQUM2RSxTQUFTLENBQUNnSSxJQUFJLENBQUNFLFFBQVE7Y0FBQyxDQUFFO2NBRWxGSCxJQUFJLENBQUNoSCxJQUFJLENBQ1IxSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVEsS0FBQSxDQUFBUSxHQUFHO2dCQUFBLEdBQUtGLEtBQUs7Z0JBQUVHLEdBQUcsRUFBRSxHQUFHak4sUUFBUSxDQUFDMEYsRUFBRSxJQUFJM0ksSUFBSTtjQUFNLEdBQy9DNEcsS0FBSyxDQUNELENBQ047WUFDRixDQUFDLENBQUM7WUFFRixPQUNDekgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lRLEtBQUEsQ0FBQVUsYUFBYTtjQUFDQyxNQUFNLEVBQUUsQ0FBQztjQUFFalEsU0FBUyxFQUFDLFFBQVE7Y0FBQ2lHLFFBQVEsRUFBRUE7WUFBUSxHQUM5RGpILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNpUSxLQUFBLENBQUFZLElBQUksUUFBRVIsSUFBSSxDQUFRLEVBQ25CMVEsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lRLEtBQUEsQ0FBQWEsS0FBSztjQUFDblEsU0FBUyxFQUFDO1lBQUUsR0FDbEJoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1EsUUFBQSxDQUFBVCxvQkFBb0IsT0FBRyxFQUN4QjVQLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNrUSxLQUFBLENBQUFhLFlBQVk7Y0FBQ3ZRLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakNiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNrUSxLQUFBLENBQUFhLFlBQVk7Y0FBQ3ZRLElBQUksRUFBQztZQUFVLEVBQUcsRUFDaENiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtUSxNQUFBLENBQUE3QixrQkFBa0IsT0FBRyxDQUNmLENBQ087VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUEzSSxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQWdHLEtBQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVpUCxrQkFBa0JBLENBQUM7WUFDbENuTyxJQUFJO1lBQ0prSCxPQUFPO1lBQ1BySDtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUUrRixNQUFNO2NBQUV5QixRQUFRO2NBQUVwRSxRQUFRO2NBQUVnQjtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUM2SSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc3TSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTTRGLFFBQVEsR0FBR3ZFLEtBQUssSUFBRztjQUN4QixNQUFNb0ssTUFBTSxHQUFHcEssS0FBSyxDQUFDd0UsYUFBYTtjQUNsQyxNQUFNeUIsU0FBUyxHQUFHO2dCQUFFLEdBQUdsQyxNQUFNLENBQUNrQztjQUFTLENBQUU7Y0FDekNULFFBQVEsQ0FBQztnQkFBRVMsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQzlILElBQUksR0FBR2lNLE1BQU0sQ0FBQ25LO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNb0ssUUFBUSxHQUFHdEcsTUFBTSxDQUFDOEIsT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ25ELE1BQU15RSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJdkcsTUFBTSxDQUFDOEIsT0FBTyxFQUFFO2dCQUNuQnNFLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRURuTSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTVAsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTXdJLFNBQVMsR0FBRztnQkFBRSxHQUFHbEMsTUFBTSxDQUFDa0M7Y0FBUyxDQUFFO2NBQ3pDVCxRQUFRLENBQUM7Z0JBQUVTLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUM5SCxJQUFJLEdBQUdpRCxRQUFRLENBQUM2RSxTQUFTLENBQUM5SCxJQUFJO2dCQUFDO2NBQUUsQ0FBRSxDQUFDO2NBQzNFZ00sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCbk0sUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU11TSxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0M3TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSUCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJwRyxJQUFJLEVBQUMsU0FBUztjQUNkOEIsS0FBSyxFQUFFOEQsTUFBTSxDQUFDa0MsU0FBUyxHQUFHOUgsSUFBSSxDQUFDLElBQUksRUFBRTtjQUNyQzZHLFdBQVcsRUFBRTVDLEtBQUssQ0FBQ3VJLE1BQU0sQ0FBQ2xIO1lBQVEsRUFDakMsRUFDRm5HLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUErQixHQUNoRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUN6RSxPQUFPLEVBQUU4SixhQUFhO2NBQUVoSSxPQUFPLEVBQUMsU0FBUztjQUFDUixRQUFRO1lBQUEsR0FDeER1SSxRQUFRLENBQ0QsQ0FDRCxFQUNSSCxlQUFlLElBQ2Y1TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFRLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVPLFFBQVEsRUFBRXVNO1lBQWEsR0FDMURqTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUFNeUUsS0FBSyxDQUFDdUksTUFBTSxDQUFDekYsTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQTVILE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVVzUixnQkFBZ0JBLENBQUM7WUFBRTNRO1VBQVEsQ0FBRTtZQUM1QyxNQUFNO2NBQUVvRSxLQUFLO2NBQUVoQjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzlDLE1BQU07Y0FBRTBDLE1BQU07Y0FBRXlCO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQzZJLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNNEYsUUFBUSxHQUFHdkUsS0FBSyxJQUFHO2NBQ3hCLE1BQU1vSyxNQUFNLEdBQUdwSyxLQUFLLENBQUN3RSxhQUFhO2NBQ2xDLE1BQU0yQixLQUFLLEdBQUc7Z0JBQUUsR0FBR3BDLE1BQU0sQ0FBQ29DO2NBQUssQ0FBRTtjQUNqQ1gsUUFBUSxDQUFDO2dCQUFFVyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDaUUsTUFBTSxDQUFDak0sSUFBSSxHQUFHaU0sTUFBTSxDQUFDbks7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU1vSyxRQUFRLEdBQUd0RyxNQUFNLENBQUM4QixPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTXlFLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUl2RyxNQUFNLENBQUM4QixPQUFPLEVBQUU7Z0JBQ25Cc0Usa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5NLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNUCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjBNLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5NLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNdU0sYUFBYSxHQUFHQSxDQUFBLEtBQU1KLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDN00sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQW1ILEtBQUs7Y0FDTGpHLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFFM0MsS0FBSyxDQUFDK0QsS0FBSyxDQUFDc0UsSUFBSSxDQUFDMUYsS0FBSztjQUM3QkMsV0FBVyxFQUFFNUMsS0FBSyxDQUFDK0QsS0FBSyxDQUFDc0UsSUFBSSxDQUFDekYsV0FBVztjQUN6QzdHLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRmIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQStCLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRThKLGFBQWE7Y0FBRWhJLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7WUFBQSxHQUN4RHVJLFFBQVEsQ0FDRCxDQUNELEVBQ1JILGVBQWUsSUFDZjVNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRU8sUUFBUSxFQUFFdU07WUFBYSxHQUMxRGpOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQU15RSxLQUFLLENBQUN1SSxNQUFNLENBQUN6RixNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUE1SCxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBdU4sTUFBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUF3TixTQUFBLEdBQUF4TixPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBRU0sU0FBVXVSLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFeE4sUUFBUTtjQUFFb0UsUUFBUTtjQUFFekI7WUFBTSxDQUFFLEdBQUcsSUFBQS9DLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFekQsTUFBTSxDQUFDc0osTUFBTSxFQUFFSSxTQUFTLENBQUMsR0FBR3pOLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFBNkQsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQzdCLFFBQVEsQ0FBQytFLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHL0UsUUFBUSxDQUFDK0UsS0FBSyxDQUFDMkQsT0FBTyxFQUFFO2NBQ3RDdEUsUUFBUSxDQUFDO2dCQUFFVztjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDLEVBQ0QsaUJBQWlCLENBQ2pCO1lBRUQsSUFBSXdFLE1BQU0sRUFBRTtjQUNYLE9BQU9yTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBc0wsZ0JBQWdCO2dCQUFDM1EsUUFBUSxFQUFFQSxDQUFBLEtBQU0rTSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRTlELElBQUksQ0FBQ2hILE1BQU0sQ0FBQ29DLEtBQUssQ0FBQzBJLE9BQU8sRUFBRTtjQUMxQixPQUFPdlIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lOLE1BQUEsQ0FBQUksVUFBVTtnQkFBQzdNLElBQUksRUFBQyxRQUFRO2dCQUFDOE0sUUFBUSxFQUFFQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHckUsT0FBT3pOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNrTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDL00sSUFBSSxFQUFDO1lBQVMsRUFBRztVQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQTJRLGNBQUEsR0FBQXpSLE9BQUE7VUFDQSxJQUFBMFIsY0FBQSxHQUFBMVIsT0FBQTtVQUNBLElBQUEyUixPQUFBLEdBQUEzUixPQUFBO1VBQ0EsSUFBQTRSLGVBQUEsR0FBQTVSLE9BQUE7VUFDQSxJQUFBNlIsT0FBQSxHQUFBN1IsT0FBQTtVQUVPLE1BQU1zTSxLQUFLLEdBQUE5SSxPQUFBLENBQUE4SSxLQUFBLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUVvRixjQUFBLENBQUFoQixpQkFBaUI7WUFDbkNvQixNQUFNLEVBQUVILE9BQUEsQ0FBQUosVUFBVTtZQUNsQlEsTUFBTSxFQUFFRixPQUFBLENBQUFHLFVBQVU7WUFDbEIsaUJBQWlCLEVBQUVKLGVBQUEsQ0FBQUssa0JBQWtCO1lBQ3JDLGdCQUFnQixFQUFFUixjQUFBLENBQUFoRTtXQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaRCxJQUFBeEgsV0FBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVaVAsa0JBQWtCQSxDQUFDO1lBQ2xDbk8sSUFBSTtZQUNKSDtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUUrRixNQUFNO2NBQUV5QixRQUFRO2NBQUVwRSxRQUFRO2NBQUVnQjtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUM2SSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc3TSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTTRGLFFBQVEsR0FBR3ZFLEtBQUssSUFBRztjQUN4QixNQUFNb0ssTUFBTSxHQUFHcEssS0FBSyxDQUFDd0UsYUFBYTtjQUNsQyxNQUFNeUIsU0FBUyxHQUFHO2dCQUFFLEdBQUdsQyxNQUFNLENBQUNrQztjQUFTLENBQUU7Y0FDekNULFFBQVEsQ0FBQztnQkFBRVMsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQzlILElBQUksR0FBR2lNLE1BQU0sQ0FBQ25LO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNb0ssUUFBUSxHQUFHdEcsTUFBTSxDQUFDOEIsT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ25ELE1BQU15RSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJdkcsTUFBTSxDQUFDOEIsT0FBTyxFQUFFO2dCQUNuQnNFLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRURuTSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTVAsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTXdJLFNBQVMsR0FBRztnQkFBRSxHQUFHbEMsTUFBTSxDQUFDa0M7Y0FBUyxDQUFFO2NBQ3pDVCxRQUFRLENBQUM7Z0JBQUVTLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUM5SCxJQUFJLEdBQUdpRCxRQUFRLENBQUM2RSxTQUFTLENBQUM5SCxJQUFJO2dCQUFDO2NBQUUsQ0FBRSxDQUFDO2NBQzNFZ00sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCbk0sUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU11TSxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0M3TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSUCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJwRyxJQUFJLEVBQUVBLElBQUk7Y0FDVjhCLEtBQUssRUFBRThELE1BQU0sQ0FBQ2tDLFNBQVMsR0FBRzlILElBQUksQ0FBQyxJQUFJLEVBQUU7Y0FDckM2RyxXQUFXLEVBQUU1QyxLQUFLLENBQUN1SSxNQUFNLENBQUN4TSxJQUFJLENBQUMsQ0FBQ3NGO1lBQVEsRUFDdkMsRUFDRm5HLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUErQixHQUNoRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUN6RSxPQUFPLEVBQUU4SixhQUFhO2NBQUVoSSxPQUFPLEVBQUMsU0FBUztjQUFDUixRQUFRO1lBQUEsR0FDeER1SSxRQUFRLENBQ0QsQ0FDRCxFQUNSSCxlQUFlLElBQ2Y1TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFRLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVPLFFBQVEsRUFBRXVNO1lBQWEsR0FDMURqTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUFNeUUsS0FBSyxDQUFDdUksTUFBTSxDQUFDekYsTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQTVILE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyUCxTQUFBLEdBQUEzUCxPQUFBO1VBQ0EsSUFBQW1GLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVBLElBQUE0UCxjQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQWtTLG1CQUFBLEdBQUFsUyxPQUFBO1VBRU0sU0FBVXFSLFlBQVlBLENBQUM7WUFBRXZRO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQUVpRDtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRXZDLE1BQU0sQ0FBQ21PLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduUyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3lDLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQzlILElBQUksQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQ3dNLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUd6TixNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBQTZELE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3QixRQUFRLENBQUM2RSxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDd0osV0FBVyxDQUFDck8sUUFBUSxDQUFDNkUsU0FBUyxDQUFDOUgsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsSUFBSXdNLE1BQU0sRUFBRTtjQUNYLE9BQU9yTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNFIsbUJBQUEsQ0FBQWpELGtCQUFrQjtnQkFBQ25PLElBQUksRUFBRUEsSUFBSTtnQkFBRUgsUUFBUSxFQUFFQSxDQUFBLEtBQU0rTSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRTVFLElBQUksQ0FBQ3lFLFFBQVEsRUFBRSxPQUFPbFMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NQLGNBQUEsQ0FBQUssYUFBYTtjQUFDblAsSUFBSSxFQUFFQSxJQUFJO2NBQUU4TSxRQUFRLEVBQUVBLENBQUEsS0FBTUYsU0FBUyxDQUFDLElBQUk7WUFBQyxFQUFJO1lBRXBGLE9BQU96TixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcVAsU0FBQSxDQUFBSyxRQUFRO2NBQUNoSSxPQUFPLEVBQUVtSztZQUFRLEVBQUk7VUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFsUyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ0csS0FBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBa0ssa0JBQUEsR0FBQWxLLE9BQUE7VUFFTSxTQUFVcVMsVUFBVUEsQ0FBQztZQUFFekcsS0FBSztZQUFFMEc7VUFBZ0IsQ0FBRTtZQUNyRCxNQUFNO2NBQUV2TixLQUFLO2NBQUVoQixRQUFRO2NBQUVvRTtZQUFRLENBQUUsR0FBRyxJQUFBeEUsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNO2NBQ0w4RSxLQUFLLEVBQUU7Z0JBQUUwRCxLQUFLO2dCQUFFK0YsU0FBUztnQkFBRXpKO2NBQUs7WUFBRSxDQUNsQyxHQUFHLElBQUFvQixrQkFBQSxDQUFBMkIsMkJBQTJCLEdBQUU7WUFDakMsTUFBTSxDQUFDakosS0FBSyxFQUFFNFAsUUFBUSxDQUFDLEdBQUd2UyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTRGLFFBQVEsR0FBR3ZFLEtBQUssSUFBRztjQUN4QjZQLFFBQVEsQ0FBQzdQLEtBQUssQ0FBQ3dFLGFBQWEsQ0FBQ3ZFLEtBQUssQ0FBQztZQUNwQyxDQUFDO1lBRUQsTUFBTTZQLEtBQUssR0FBRzlQLEtBQUssSUFBRztjQUNyQjZQLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FFWjFKLEtBQUssQ0FBQ3lKLFNBQVMsQ0FBQzNHLEtBQUssRUFBRWhKLEtBQUssQ0FBQztZQUM5QixDQUFDO1lBQ0QsTUFBTWpDLFFBQVEsR0FBR2dDLEtBQUssSUFBRztjQUN4QjJQLGdCQUFnQixDQUFDLEtBQUssQ0FBQztjQUN2QjlGLEtBQUssRUFBRTtZQUNSLENBQUM7WUFFRCxPQUNDdk0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQWMsR0FDNUJoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBbUgsS0FBSztjQUFDck0sSUFBSSxFQUFDLG1CQUFtQjtjQUFDOEIsS0FBSyxFQUFFQSxLQUFLO2NBQUVzRSxRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUNwRWpILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUF1RCxHQUNyRWhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUN6RSxPQUFPLEVBQUV4QyxRQUFRO2NBQUVzRSxPQUFPLEVBQUMsU0FBUztjQUFDUixRQUFRO2NBQUN4QixJQUFJLEVBQUM7WUFBUSxHQUNqRThCLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FDYixFQUNUMU0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRXNQLEtBQUs7Y0FBRXhQLElBQUksRUFBQyxLQUFLO2NBQUNnQyxPQUFPLEVBQUM7WUFBUyxHQUNsREYsS0FBSyxDQUFDdUIsT0FBTyxDQUFDNkYsR0FBRyxDQUNWLENBQ0osQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBbE0sTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBPLEtBQUEsR0FBQTFPLE9BQUE7VUFHQSxJQUFBbUssS0FBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBQ087VUFBVyxTQUFVMFMsYUFBYUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVySyxJQUFJLEdBQUcsRUFBRTtZQUFFc0QsS0FBSztZQUFFMEc7VUFBZ0IsQ0FBRTtZQUN6RixNQUFNLENBQUNNLE1BQU0sRUFBRXBJLFNBQVMsQ0FBQyxHQUFHdkssTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sQ0FBQ3VSLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc3UyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3FSLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO1lBRTlELElBQUExTixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDK00sUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQkcsVUFBVSxDQUFDSCxRQUFRLENBQUNJLGFBQWEsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNKLFFBQVEsRUFBRXhKLE9BQU8sSUFBSSxDQUFDd0osUUFBUSxDQUFDeEosT0FBTyxDQUFDNkosTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUMvRCxJQUFJLENBQUNMLFFBQVEsQ0FBQ3hKLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDbEMsT0FDQ2xKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29PLEtBQUEsQ0FBQVksSUFBSTtjQUNKeEcsS0FBSyxFQUFFO2dCQUNOK0osT0FBTztnQkFDUEY7ZUFDQTtjQUNEMVIsU0FBUyxFQUFDLHdCQUF3QjtjQUNsQ3FJLEtBQUssRUFBRXFKLFFBQVEsQ0FBQ3hKLE9BQU87Y0FDdkJvRyxPQUFPLEVBQUVwRixLQUFBLENBQUE4STtZQUFVLEVBQ2xCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWhULE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFpRyxXQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQWtULE1BQUEsR0FBQWxULE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVPLE1BQU1pVCxVQUFVLEdBQUdFLEtBQUssSUFBRztZQUNqQyxNQUFNO2NBQ0x2QyxJQUFJO2NBQ0poRixLQUFLO2NBQ0w5QyxLQUFLLEVBQUU7Z0JBQUU2SixRQUFRO2dCQUFFRTtjQUFPO1lBQUUsQ0FDNUIsR0FBR00sS0FBSztZQUNULE1BQU07Y0FBRXBPO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRXBDLE1BQU1vUCxJQUFJLEdBQUd6USxLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ3lCLGNBQWMsRUFBRTtjQUN0QnVPLFFBQVEsQ0FBQ0csVUFBVSxDQUFDbEgsS0FBSyxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDM0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBT3NRLElBQUksQ0FBUSxFQUNsQitCLFFBQVEsQ0FBQ0ksYUFBYSxLQUFLbkgsS0FBSyxHQUNoQzNMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0UyxNQUFBLENBQUFHLElBQUk7Y0FBQ3BRLElBQUksRUFBQyxPQUFPO2NBQUNxUSxNQUFNLEVBQUMsSUFBSTtjQUFDcEwsSUFBSSxFQUFDO1lBQVMsR0FDM0NuRCxLQUFLLENBQUN3TyxjQUFjLENBQUNDLE1BQU0sQ0FBQ1gsT0FBTyxDQUM5QixHQUVQNVMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRWlRLElBQUk7Y0FBRW5RLElBQUksRUFBQyxNQUFNO2NBQUN3QixRQUFRO2NBQUM2TyxNQUFNLEVBQUMsSUFBSTtjQUFDck8sT0FBTyxFQUFDO1lBQVMsR0FDdkVGLEtBQUssQ0FBQ3dPLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENBRWxDLENBQ0c7VUFFUCxDQUFDO1VBQUM1UCxPQUFBLENBQUF5UCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENGLElBQUFoVCxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0ssa0JBQUEsR0FBQWxLLE9BQUE7VUFJQSxJQUFBeVQsUUFBQSxHQUFBelQsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBRU87VUFBVyxTQUFVa0wsVUFBVUEsQ0FBQztZQUFFNUMsSUFBSTtZQUFFc0Q7VUFBSyxDQUFFO1lBQ3JELE1BQU07Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUFvQixrQkFBQSxDQUFBMkIsMkJBQTJCLEdBQUU7WUFFL0MsTUFBTSxDQUFDNkgsY0FBYyxFQUFFcEIsZ0JBQWdCLENBQUMsR0FBR3JTLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDd0gsS0FBSyxDQUFDNkssZ0JBQWdCLEtBQUsvSCxLQUFLLENBQUM7WUFFM0YsTUFBTWxMLElBQUksR0FBRyxPQUFPNEgsSUFBSSxLQUFLLFFBQVEsR0FBR0EsSUFBSSxDQUFDcUssUUFBUSxHQUFHckssSUFBSTtZQUM1RCxNQUFNc0wsaUJBQWlCLEdBQUc5SyxLQUFLLENBQUM2SyxnQkFBZ0IsS0FBSy9ILEtBQUssSUFBSThILGNBQWM7WUFDNUU1USxPQUFPLENBQUNrTSxHQUFHLENBQUMsQ0FBQyxFQUFFbEcsS0FBSyxDQUFDK0ssT0FBTyxDQUFDO1lBQzdCLE9BQ0M1VCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEosa0JBQUEsQ0FBQTRCLHFCQUFxQjtjQUFDeEQsSUFBSSxFQUFFNUgsSUFBSTtjQUFFa0wsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDbEQ5QyxLQUFLLENBQUMrSyxPQUFPLElBQUkvSyxLQUFLLENBQUNBLEtBQUssQ0FBQ2dMLFNBQVMsQ0FBQ2xJLEtBQUssQ0FBQyxJQUM3QzNMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtVCxRQUFBLENBQUFmLGFBQWE7Y0FDYkMsUUFBUSxFQUFFN0osS0FBSyxDQUFDQSxLQUFLLENBQUNnTCxTQUFTLENBQUNsSSxLQUFLLENBQUM7Y0FDdEMwRyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO2NBQ2xDaEssSUFBSSxFQUFFUSxLQUFLLENBQUMrSyxPQUFPO2NBQ25CakksS0FBSyxFQUFFQTtZQUFLLEVBRWIsRUFFQWdJLGlCQUFpQixJQUFJM1QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXFNLFVBQVU7Y0FBQ3pHLEtBQUssRUFBRUEsS0FBSztjQUFFMEcsZ0JBQWdCLEVBQUVBO1lBQWdCLEVBQUksQ0FDakY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQXJTLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1TixNQUFBLEdBQUF2TixPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUVBLElBQUEwTyxLQUFBLEdBQUExTyxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBRUEsSUFBQXlPLE9BQUEsR0FBQXpPLE9BQUE7VUFDQSxJQUFBK1QsaUJBQUEsR0FBQS9ULE9BQUE7VUFDQSxJQUFBZ1UsZ0JBQUEsR0FBQWhVLE9BQUE7VUFFTSxTQUFVaVMsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRXZMLE1BQU07Y0FBRTNDLFFBQVE7Y0FBRW9FLFFBQVE7Y0FBRXBEO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ2lRLFVBQVUsRUFBRXZHLFNBQVMsQ0FBQyxHQUFHek4sTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzRTLGdCQUFnQixFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHbFUsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXBFLElBQUE2RCxNQUFBLENBQUFTLFNBQVMsRUFDUixDQUFDN0IsUUFBUSxDQUFDK0UsS0FBSyxDQUFDLEVBQ2hCLE1BQUs7Y0FDSixNQUFNQSxLQUFLLEdBQUcvRSxRQUFRLENBQUMrRSxLQUFLLENBQUMyRCxPQUFPLEVBQUU7Y0FDdEN0RSxRQUFRLENBQUM7Z0JBQUVXO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxpQkFBaUIsQ0FDakI7WUFFRCxJQUFJbUwsVUFBVSxFQUFFO2NBQ2YsT0FBT2hVLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtTyxPQUFBLENBQUEyRix3QkFBd0I7Z0JBQUN6VCxRQUFRLEVBQUVBLENBQUEsS0FBTStNLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHdEUsSUFBSSxDQUFDaEgsTUFBTSxDQUFDb0MsS0FBSyxDQUFDZ0wsU0FBUyxDQUFDZCxNQUFNLEVBQUU7Y0FDbkMsT0FDQy9TLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBULGdCQUFBLENBQUFLLG9CQUFvQixPQUFHLEVBQ3hCcFUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lOLE1BQUEsQ0FBQUksVUFBVTtnQkFBQzdNLElBQUksRUFBQyxpQkFBaUI7Z0JBQUM4TSxRQUFRLEVBQUVBLENBQUEsS0FBTUYsU0FBUyxDQUFDLElBQUk7Y0FBQyxFQUFJLENBQ3BFOztZQUlMLE9BQ0N6TixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFzQixHQUNuQ2lULGdCQUFnQixHQUNoQmpVLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBbUUsUUFBQSxRQUNDdkUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS3lFLEtBQUssQ0FBQytELEtBQUssQ0FBQ2dMLFNBQVMsQ0FBQ3JULEtBQUssQ0FBTSxFQUN0Q1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sTUFBQSxDQUFBMkMsVUFBVTtjQUFDTixJQUFJLEVBQUMsV0FBVztjQUFDRSxPQUFPLEVBQUVBLENBQUEsS0FBTWdSLGtCQUFrQixDQUFDLEtBQUs7WUFBQyxFQUFJLENBQ2pFLEVBQ1RsVSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbU8sT0FBQSxDQUFBMkYsd0JBQXdCO2NBQUN6VCxRQUFRLEVBQUVBLENBQUEsS0FBTStNLFNBQVMsQ0FBQyxLQUFLO1lBQUMsRUFBSSxDQUM1RCxHQUVIek4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVyxTQUFTLEVBQUM7WUFBbUMsR0FDcERoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUUsS0FBSyxDQUFDK0QsS0FBSyxDQUFDZ0wsU0FBUyxDQUFDclQsS0FBSyxDQUFNLEVBQ3RDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxNQUFBLENBQUEyQyxVQUFVO2NBQUNOLElBQUksRUFBQyxNQUFNO2NBQUNFLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ1Isa0JBQWtCLENBQUMsSUFBSTtZQUFDLEVBQUksQ0FDM0QsRUFDVGxVLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvTyxLQUFBLENBQUFZLElBQUk7Y0FDSnJPLFNBQVMsRUFBQyxtQkFBbUI7Y0FDN0JxSSxLQUFLLEVBQUU1QyxNQUFNLENBQUNvQyxLQUFLLENBQUNnTCxTQUFTO2NBQzdCaEwsS0FBSyxFQUFFLEVBQUU7Y0FDVHlHLE9BQU8sRUFBRXdFLGlCQUFBLENBQUFPO1lBQWdCLEVBQ3hCLENBRUgsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVBLElBQUFyVSxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBa0ssa0JBQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBbUssS0FBQSxHQUFBbkssT0FBQTtVQUNBLElBQUF1VSxLQUFBLEdBQUF2VSxPQUFBO1VBQ0EsSUFBQW9LLGNBQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBR00sU0FBVW9VLHdCQUF3QkEsQ0FBQztZQUFFelQ7VUFBUSxDQUFFO1lBQ3BELE1BQU07Y0FBRW9ELFFBQVE7Y0FBRWdCLEtBQUs7Y0FBRTJCLE1BQU07Y0FBRXlCO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0sQ0FBQ21GLE9BQU8sRUFBRXFMLFVBQVUsQ0FBQyxHQUFHdlUsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUN5QyxRQUFRLENBQUMrRSxLQUFLLENBQUMyTCxjQUFjLElBQUksRUFBRSxDQUFDO1lBQ2pGLE1BQU1oTyxRQUFRLEdBQUd4RyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFHa0osU0FBUyxDQUFDLEdBQUd2SyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDaVIsU0FBUyxFQUFFbUMsWUFBWSxDQUFDLEdBQUd6VSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDdVMsT0FBTyxFQUFFYyxVQUFVLENBQUMsR0FBRzFVLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUVoRCxJQUFBNkQsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLFFBQVEsQ0FBQytFLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDaEMwTCxVQUFVLENBQUN6USxRQUFRLENBQUMrRSxLQUFLLENBQUNnTCxTQUFTLENBQUNjLEdBQUcsQ0FBQ2hFLElBQUksSUFBSUEsSUFBSSxDQUFDK0IsUUFBUSxDQUFDLENBQUM7Y0FDL0QsTUFBTWtCLE9BQU8sR0FBRzlQLFFBQVEsQ0FBQytFLEtBQUssQ0FBQ2dMLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDaEUsSUFBSSxLQUFLO2dCQUFFdEgsS0FBSyxFQUFFc0gsSUFBSSxDQUFDekgsT0FBTztnQkFBRTBKLE9BQU8sRUFBRWpDLElBQUksQ0FBQ21DO2NBQWEsQ0FBRSxDQUFDLENBQUM7Y0FFNUc0QixVQUFVLENBQUNkLE9BQU8sQ0FBQztjQUNuQixNQUFNL0ssS0FBSyxHQUFHO2dCQUFFLEdBQUdwQyxNQUFNLENBQUNvQztjQUFLLENBQUU7Y0FDakNYLFFBQVEsQ0FBQztnQkFBRVcsS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsR0FBRy9FLFFBQVEsQ0FBQytFLEtBQUssQ0FBQzJELE9BQU87Z0JBQUU7Y0FBRSxDQUFFLENBQUM7Y0FDOURqQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsTUFBTVcsWUFBWSxHQUFHQSxDQUFDO2NBQUVoRSxhQUFhLEVBQUU0RjtZQUFNLENBQUUsS0FBSTtjQUNsRHRHLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWixNQUFNcUMsS0FBSyxHQUFHO2dCQUFFLEdBQUdwQyxNQUFNLENBQUNvQztjQUFLLENBQUU7Y0FFakMvRSxRQUFRLENBQUMrRSxLQUFLLENBQUMyQyxHQUFHLENBQUM7Z0JBQUVxSSxTQUFTLEVBQUUvRyxNQUFNLENBQUNuSztjQUFLLENBQUUsQ0FBQztjQUMvQyxNQUFNaVIsT0FBTyxHQUFHOVAsUUFBUSxDQUFDK0UsS0FBSyxDQUFDZ0wsU0FBUyxDQUFDYyxHQUFHLENBQUNoRSxJQUFJLEtBQUs7Z0JBQUV0SCxLQUFLLEVBQUVzSCxJQUFJLENBQUN6SCxPQUFPO2dCQUFFMEosT0FBTyxFQUFFakMsSUFBSSxDQUFDbUM7Y0FBYSxDQUFFLENBQUMsQ0FBQztjQUM1RzRCLFVBQVUsQ0FBQ2QsT0FBTyxDQUFDO2NBQ25CVyxVQUFVLENBQUN6SCxNQUFNLENBQUNuSyxLQUFLLENBQUM7Y0FDeEJ1RixRQUFRLENBQUM7Z0JBQUVXLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLEdBQUcvRSxRQUFRLENBQUMrRSxLQUFLLENBQUMyRCxPQUFPO2dCQUFFO2NBQUUsQ0FBRSxDQUFDO1lBQy9ELENBQUM7WUFFRCxNQUFNN0IsWUFBWSxHQUF3QjtjQUN6Q2lKLE9BQU8sRUFBRTtnQkFDUjtnQkFDQTVRLElBQUksRUFBRXJDLE1BQUEsQ0FBQTBELEtBQUssQ0FBQ0MsT0FBTztnQkFDbkI5RCxLQUFLLEVBQUVzRSxLQUFLLENBQUN1QixPQUFPLENBQUN1TyxlQUFlO2dCQUNwQzFSLE9BQU8sRUFBRSxNQUFBQSxDQUFPUixLQUFLLEVBQUVpSixLQUFLLEVBQUV0RCxJQUFJLEtBQUk7a0JBQ3JDLE1BQU13TSxPQUFPLEdBQUcsSUFBSVAsS0FBQSxDQUFBUSxjQUFjLEVBQUU7a0JBQ3BDLE1BQU1oUixRQUFRLENBQUNpUixjQUFjLENBQUNwSixLQUFLLEVBQUV0RCxJQUFJLENBQUM7a0JBQzFDbkcsVUFBVSxDQUFDTixVQUFVLENBQUMsTUFBSztvQkFDMUJpVCxPQUFPLENBQUNHLE9BQU8sRUFBRTtrQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFFUixPQUFPSCxPQUFPO2dCQUNmO2VBQ0E7Y0FDRDNJLEdBQUcsRUFBRTtnQkFDSmxKLElBQUksRUFBRSxLQUFLO2dCQUNYeEMsS0FBSyxFQUFFc0UsS0FBSyxDQUFDdUIsT0FBTyxDQUFDNkYsR0FBRztnQkFDeEIrSSxZQUFZLEVBQUUsSUFBSTtnQkFDbEIvUixPQUFPLEVBQUVBLENBQUNSLEtBQUssRUFBRWlKLEtBQUssS0FBSTtrQkFDekI4SSxZQUFZLENBQUM5SSxLQUFLLENBQUM7Z0JBQ3BCOzthQUVEO1lBQ0QsTUFBTTlDLEtBQUssR0FBRztjQUNiWixJQUFJLEVBQUUsV0FBVztjQUNqQlksS0FBSyxFQUFFL0UsUUFBUSxDQUFDK0UsS0FBSztjQUNyQjZLLGdCQUFnQixFQUFFcEIsU0FBUztjQUMzQnNCLE9BQU87Y0FDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBbUJBckgsS0FBSyxFQUFFQSxDQUFBLEtBQU1rSSxZQUFZLENBQUMsS0FBSzthQUMvQjtZQUVELE9BQ0N6VSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBMEIsR0FFeENoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEosa0JBQUEsQ0FBQWMsaUJBQWlCO2NBQ2pCMUUsT0FBTyxFQUFFc0UsWUFBWTtjQUNyQmxFLE1BQU0sRUFBRXlDLE9BQU87Y0FDZjhCLElBQUksRUFBRWQsS0FBQSxDQUFBZSxVQUFVO2NBQ2hCcEMsS0FBSyxFQUFFQSxLQUFLO2NBQ1pxQyxZQUFZLEVBQUVBLFlBQVk7Y0FDMUJDLFNBQVMsRUFBQztZQUFXLEdBRXJCbkwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhKLGNBQUEsQ0FBQWlCLGtCQUFrQixPQUFHLENBQ0gsQ0FDZjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHQSxJQUFBcEwsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtLLGtCQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNNLFNBQVVxTCxrQkFBa0JBLENBQUM7WUFBRThKLFlBQVksR0FBRztVQUFJLENBQUU7WUFDekQsTUFBTTtjQUFFalIsb0JBQW9CO2NBQUVxRyxTQUFTO2NBQUV4RjtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUNyRSxNQUFNO2NBQUUrSDtZQUFjLENBQUUsR0FBRyxJQUFBN0Isa0JBQUEsQ0FBQTJCLDJCQUEyQixHQUFFO1lBRXhELE9BQ0M1TCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBa0UsR0FDaEZoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0UsSUFBSSxFQUFDLEtBQUs7Y0FBQ2dDLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7Y0FBQ3RCLE9BQU8sRUFBRTRJO1lBQWMsR0FDbkVoSCxLQUFLLENBQUNtSCxXQUFXLENBQUNDLEdBQUcsQ0FDZCxFQUNSZ0osWUFBWSxJQUNabFYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNFLElBQUksRUFBRXJDLE1BQUEsQ0FBQTBELEtBQUssQ0FBQ0MsT0FBTztjQUFFVSxPQUFPLEVBQUMsU0FBUztjQUFDOUIsT0FBTyxFQUFFQSxDQUFBLEtBQU1lLG9CQUFvQixDQUFDLFdBQVc7WUFBQyxHQUM3RmEsS0FBSyxDQUFDbUgsV0FBVyxDQUFDL0YsTUFBTSxDQUUxQixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUF2RixNQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBME8sS0FBQSxHQUFBMU8sT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVzVSxnQkFBZ0JBLENBQUM7WUFBRWhNO1VBQUksQ0FBdUU7WUFDN0csTUFBTThNLE9BQU8sR0FBR0EsQ0FBQztjQUFFOU0sSUFBSSxFQUFFK00sTUFBTTtjQUFFeko7WUFBSyxDQUFtQyxLQUFJO2NBQzVFLE1BQU0zSSxJQUFJLEdBQUcySSxLQUFLLEtBQUt0RCxJQUFJLENBQUN5SyxhQUFhLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDN0QsT0FDQzlTLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFJVyxTQUFTLEVBQUM7Y0FBNkMsR0FDMURoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxNQUFBLENBQUFpSyxJQUFJO2dCQUFDNUgsSUFBSSxFQUFFQSxJQUFJO2dCQUFFaEMsU0FBUyxFQUFDO2NBQVMsRUFBRyxFQUN2Q29VLE1BQU0sQ0FDSDtZQUVQLENBQUM7WUFFRCxPQUNDcFYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBSVcsU0FBUyxFQUFDO1lBQWdCLEdBQzdCaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS2dJLElBQUksQ0FBQ3FLLFFBQVEsQ0FBTSxFQUN4QjFTLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvTyxLQUFBLENBQUFZLElBQUk7Y0FBQ2hHLEtBQUssRUFBRWhCLElBQUksQ0FBQ2EsT0FBTztjQUFFb0csT0FBTyxFQUFFNkY7WUFBTyxFQUFJLENBQzNDO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFuVixNQUFBLEdBQUFELE9BQUE7VUFJQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFnSixZQUFBLEdBQUFoSixPQUFBO1VBQ00sU0FBVXFVLG9CQUFvQkEsQ0FBQztZQUFFYyxZQUFZLEdBQUc7VUFBSSxDQUFFO1lBQzNELE1BQU07Y0FDTDVQLEtBQUs7Y0FDTGdGLFNBQVM7Y0FDVHhGLEtBQUssRUFBRTtnQkFBRXdPLGNBQWMsRUFBRXhPO2NBQUssQ0FBRTtjQUNoQzJCLE1BQU07Y0FDTjNDLFFBQVE7Y0FDUm9FO1lBQVEsQ0FDUixHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRXRCLE1BQU1tRixPQUFPLEdBQUc1RCxLQUFLLENBQUM2RCxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxDQUMxQ2dNLE1BQU0sQ0FBQzFFLElBQUksSUFBSUEsSUFBSSxDQUFDMUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLENBQzlDME0sR0FBRyxDQUFDaEUsSUFBSSxJQUFHO2NBQ1gsT0FBTztnQkFBRWhPLEtBQUssRUFBRWdPLElBQUksQ0FBQ25ILEVBQUU7Z0JBQUUvQixLQUFLLEVBQUVrSixJQUFJLENBQUNuUTtjQUFLLENBQUU7WUFDN0MsQ0FBQyxDQUFDO1lBRUgsTUFBTXlHLFFBQVEsR0FBR3ZFLEtBQUssSUFBRztjQUN4Qm9CLFFBQVEsQ0FBQytFLEtBQUssQ0FBQzJDLEdBQUcsQ0FBQztnQkFBRThKLE9BQU8sRUFBRTVTLEtBQUssQ0FBQ0M7Y0FBSyxDQUFFLENBQUM7Y0FDNUN1RixRQUFRLENBQUM7Z0JBQUVXLEtBQUssRUFBRTtrQkFBRSxHQUFHcEMsTUFBTSxDQUFDb0MsS0FBSztrQkFBRXlNLE9BQU8sRUFBRTVTLEtBQUssQ0FBQ0M7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE9BQ0MzQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU91SixPQUFPLEVBQUM7WUFBRSxHQUFFOUUsS0FBSyxDQUFDd1EsT0FBTyxDQUFDN04sS0FBSyxDQUFTLEVBQy9DekgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBJLFlBQUEsQ0FBQWMsV0FBVztjQUNYWCxPQUFPLEVBQUUsQ0FBQztnQkFBRXZHLEtBQUssRUFBRSxLQUFLO2dCQUFFOEUsS0FBSyxFQUFFM0MsS0FBSyxDQUFDd1EsT0FBTyxDQUFDQztjQUFXLENBQUUsRUFBRSxHQUFHck0sT0FBTyxDQUFDO2NBQ3pFakMsUUFBUSxFQUFFQTtZQUFRLEVBQ2pCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWpILE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVV5VixpQkFBaUJBLENBQUM7WUFBRUMsS0FBSztZQUFFOUUsSUFBSTtZQUFFaEYsS0FBSztZQUFFVyxRQUFRO1lBQUVyRjtVQUFRLENBQUU7WUFDM0UsTUFBTTtjQUFFUixNQUFNO2NBQUV5QixRQUFRO2NBQUVwRCxLQUFLO2NBQUVoQjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0sQ0FBQzZJLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNNkosWUFBWSxHQUFHeEksS0FBSyxJQUFHO2NBQzVCLE1BQU1vSyxNQUFNLEdBQUdwSyxLQUFLLENBQUN3RSxhQUFhO2NBQ2xDeUosSUFBSSxDQUFDN0QsTUFBTSxDQUFDak0sSUFBSSxDQUFDLEdBQUdpTSxNQUFNLENBQUNuSyxLQUFLO2NBQ2hDc0UsUUFBUSxDQUFDMEUsS0FBSyxFQUFFZ0YsSUFBSSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxPQUNDM1EsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQW1ILEtBQUs7Y0FDTGpHLFFBQVEsRUFBRWlFLFlBQVk7Y0FDdEJ6RCxLQUFLLEVBQUUzQyxLQUFLLENBQUMrRCxLQUFLLENBQUMwSSxPQUFPLENBQUM5SixLQUFLO2NBQ2hDQyxXQUFXLEVBQUU1QyxLQUFLLENBQUMrRCxLQUFLLENBQUM2TSxRQUFRLENBQUNoTyxXQUFXO2NBQzdDL0UsS0FBSyxFQUFFZ08sSUFBSSxDQUFDOVAsSUFBSTtjQUNoQkEsSUFBSSxFQUFDLE1BQU07Y0FDWG1FLE9BQU8sRUFBQztZQUFVLEVBQ2pCLEVBQ0ZoRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBeUIsUUFBUTtjQUNSUCxRQUFRLEVBQUVpRSxZQUFZO2NBQ3RCekQsS0FBSyxFQUFFM0MsS0FBSyxDQUFDK0QsS0FBSyxDQUFDNk0sUUFBUSxDQUFDak8sS0FBSztjQUNqQzlFLEtBQUssRUFBRWdPLElBQUksQ0FBQ1ksT0FBTztjQUNuQjdKLFdBQVcsRUFBRTVDLEtBQUssQ0FBQytELEtBQUssQ0FBQzBJLE9BQU8sQ0FBQzdKLFdBQVc7Y0FDNUM3RyxJQUFJLEVBQUMsU0FBUztjQUNkbUUsT0FBTyxFQUFDO1lBQVUsRUFDakIsRUFDRHlRLEtBQUssR0FBRyxDQUFDLElBQ1R6VixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0MsT0FBTyxFQUFDLE1BQU07Y0FBQzlCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNb0osUUFBUSxDQUFDWCxLQUFLO1lBQUMsR0FDbkQsR0FBRyxFQUNIN0csS0FBSyxDQUFDdUIsT0FBTyxDQUFDcUcsTUFBTSxDQUNiLENBRVYsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBMU0sTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0VixrQkFBQSxHQUFBNVYsT0FBQTtVQUVNLFNBQVU2VixhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRW5QLE1BQU07Y0FBRXlCLFFBQVE7Y0FBRXBELEtBQUs7Y0FBRWhCO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDOFIsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlWLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDb0YsTUFBTSxDQUFDb0MsS0FBSyxFQUFFNk0sUUFBUSxFQUFFM0MsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUV2RixNQUFNLENBQUMxSixLQUFLLEVBQUUwTSxRQUFRLENBQUMsR0FBRy9WLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUN2Q29GLE1BQU0sQ0FBQ29DLEtBQUssQ0FBQzZNLFFBQVEsQ0FBQzNDLE1BQU0sR0FBR3RNLE1BQU0sQ0FBQ29DLEtBQUssQ0FBQzZNLFFBQVEsR0FBRyxDQUFDO2NBQUVBLFFBQVEsRUFBRSxFQUFFO2NBQUVuRSxPQUFPLEVBQUU7WUFBRSxDQUFFLENBQUMsQ0FDdEY7WUFFRCxNQUFNaUIsS0FBSyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEJzRCxhQUFhLENBQUNELFVBQVUsR0FBRyxDQUFDLENBQUM7Y0FDN0JFLFFBQVEsQ0FBQyxDQUFDLEdBQUcxTSxLQUFLLEVBQUU7Z0JBQUVxTSxRQUFRLEVBQUUsRUFBRTtnQkFBRW5FLE9BQU8sRUFBRTtjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNeUUsTUFBTSxHQUFHLEVBQUU7WUFDakIsTUFBTTFKLFFBQVEsR0FBR1gsS0FBSyxJQUFHO2NBQ3hCLE1BQU1zSyxRQUFRLEdBQUc1TSxLQUFLLENBQUM2TSxLQUFLLENBQUMsQ0FBQyxFQUFFdkssS0FBSyxDQUFDLENBQUN3SyxNQUFNLENBQUM5TSxLQUFLLENBQUM2TSxLQUFLLENBQUN2SyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Y0FDckVtSyxhQUFhLENBQUNHLFFBQVEsQ0FBQ2xELE1BQU0sQ0FBQztjQUM5QmdELFFBQVEsQ0FBQ0UsUUFBUSxDQUFDO2NBQ2xCL04sUUFBUSxDQUFDO2dCQUFFVyxLQUFLLEVBQUU7a0JBQUUsR0FBR3BDLE1BQU0sQ0FBQ29DLEtBQUs7a0JBQUU2TSxRQUFRLEVBQUVPO2dCQUFRO2NBQUUsQ0FBRSxDQUFDO1lBQzdELENBQUM7WUFDRCxNQUFNRyxZQUFZLEdBQUdBLENBQUN6SyxLQUFLLEVBQUVoSixLQUFLLEtBQUk7Y0FDckMsTUFBTTBGLElBQUksR0FBR2dCLEtBQUs7Y0FDbEJoQixJQUFJLENBQUNzRCxLQUFLLENBQUMsR0FBR2hKLEtBQUs7Y0FDbkJvVCxRQUFRLENBQUMxTixJQUFJLENBQUM7Y0FDZEgsUUFBUSxDQUFDO2dCQUFFVyxLQUFLLEVBQUU7a0JBQUUsR0FBR3BDLE1BQU0sQ0FBQ29DLEtBQUs7a0JBQUU2TSxRQUFRLEVBQUVyTjtnQkFBSTtjQUFFLENBQUUsQ0FBQztZQUN6RCxDQUFDO1lBQ0QsS0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHc00sVUFBVSxFQUFFLEVBQUV0TSxDQUFDLEVBQUU7Y0FDcEN5TSxNQUFNLENBQUN0TSxJQUFJLENBQ1YxSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1Ysa0JBQUEsQ0FBQUgsaUJBQWlCO2dCQUNqQnZPLFFBQVEsRUFBRW1QLFlBQVk7Z0JBQ3RCWCxLQUFLLEVBQUVJLFVBQVU7Z0JBQ2pCbEYsSUFBSSxFQUFFdEgsS0FBSyxDQUFDRSxDQUFDLENBQUM7Z0JBQ2QrQyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCeUUsR0FBRyxFQUFFLFlBQVl4SCxDQUFDLEVBQUU7Z0JBQ3BCb0MsS0FBSyxFQUFFcEM7Y0FBQyxFQUNQLENBQ0Y7O1lBR0YsT0FDQ3ZKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFrQixHQUNoQ2hCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUFtQyxHQUNwRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUt5RSxLQUFLLENBQUMrRCxLQUFLLENBQUM2TSxRQUFRLENBQUNsVixLQUFLLENBQU0sRUFDckNSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFTLEdBQ3ZCaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQzNDLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7Y0FBQ3RCLE9BQU8sRUFBRXNQO1lBQUssR0FDL0MxTixLQUFLLENBQUN1QixPQUFPLENBQUM2RixHQUFHLENBQ1YsQ0FDSixDQUNFLEVBQ1I4SixNQUFNLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQWhXLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFzVyxjQUFBLEdBQUF0VyxPQUFBO1VBRU0sU0FBVXVXLGdCQUFnQkEsQ0FBQztZQUFFNVY7VUFBUSxDQUFFO1lBQzVDLE1BQU07Y0FBRStGLE1BQU07Y0FBRXlCLFFBQVE7Y0FBRXBELEtBQUs7Y0FBRWhCO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDNkksZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN00sTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU00RixRQUFRLEdBQUd2RSxLQUFLLElBQUc7Y0FDeEIsTUFBTW9LLE1BQU0sR0FBR3BLLEtBQUssQ0FBQ3dFLGFBQWE7Y0FDbEMsTUFBTTJCLEtBQUssR0FBRztnQkFBRSxHQUFHcEMsTUFBTSxDQUFDb0M7Y0FBSyxDQUFFO2NBQ2pDWCxRQUFRLENBQUM7Z0JBQUVXLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNpRSxNQUFNLENBQUNqTSxJQUFJLEdBQUdpTSxNQUFNLENBQUNuSztnQkFBSztjQUFFLENBQUUsQ0FBQztZQUMvRCxDQUFDO1lBQ0QsTUFBTW9LLFFBQVEsR0FBR3RHLE1BQU0sQ0FBQzhCLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNeUUsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSXZHLE1BQU0sQ0FBQzhCLE9BQU8sRUFBRTtnQkFDbkJzRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEbk0sUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1QLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCME0sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCbk0sUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU11TSxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0M3TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQW1FLFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixLQUFBLENBQUF3QixJQUFJLFFBQ0p2SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBbUgsS0FBSztjQUNMakcsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCUSxLQUFLLEVBQUUzQyxLQUFLLENBQUMrRCxLQUFLLENBQUMwTixJQUFJLENBQUM5TyxLQUFLO2NBQzdCQyxXQUFXLEVBQUU1QyxLQUFLLENBQUMrRCxLQUFLLENBQUMwTixJQUFJLENBQUM3TyxXQUFXO2NBQ3pDN0csSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGYixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsS0FBQSxDQUFBbUgsS0FBSztjQUNMakcsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCUSxLQUFLLEVBQUUzQyxLQUFLLENBQUMrRCxLQUFLLENBQUMyTixZQUFZLENBQUMvTyxLQUFLO2NBQ3JDQyxXQUFXLEVBQUU1QyxLQUFLLENBQUMrRCxLQUFLLENBQUMyTixZQUFZLENBQUM5TyxXQUFXO2NBQ2pEN0csSUFBSSxFQUFDO1lBQWMsRUFDbEIsRUFDRmIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dXLGNBQUEsQ0FBQVQsYUFBYSxPQUFHLEVBQ2pCNVYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQStCLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRThKLGFBQWE7Y0FBRWhJLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7WUFBQSxHQUN4RHVJLFFBQVEsQ0FDRCxFQUNUL00sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Y0FBQ3pFLE9BQU8sRUFBRThKLGFBQWE7Y0FBRWhJLE9BQU8sRUFBQyxTQUFTO2NBQUNSLFFBQVE7WUFBQSxHQUN4RHVJLFFBQVEsQ0FDRCxDQUNELEVBQ1JILGVBQWUsSUFDZjVNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRU8sUUFBUSxFQUFFdU07WUFBYSxHQUMxRGpOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQU15RSxLQUFLLENBQUN1SSxNQUFNLENBQUN6RixNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUE1SCxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBdU4sTUFBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUF3TixTQUFBLEdBQUF4TixPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFnRyxLQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQTBPLEtBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBc1csY0FBQSxHQUFBdFcsT0FBQTtVQUVNLFNBQVVnUyxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXRMLE1BQU07Y0FBRTNDLFFBQVE7Y0FBRW9FLFFBQVE7Y0FBRXBEO1lBQUssQ0FBRSxHQUFHLElBQUFwQixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ2lRLFVBQVUsRUFBRXZHLFNBQVMsQ0FBQyxHQUFHek4sTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ29WLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUcxVyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBQTZELE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUM3QixRQUFRLENBQUMrRSxLQUFLLENBQUMsRUFDaEIsTUFBSztjQUNKLE1BQU1BLEtBQUssR0FBRy9FLFFBQVEsQ0FBQytFLEtBQUssQ0FBQzJELE9BQU8sRUFBRTtjQUN0QzNKLE9BQU8sQ0FBQ2tNLEdBQUcsQ0FBQyxDQUFDLEVBQUVsRyxLQUFLLENBQUM7Y0FDckJYLFFBQVEsQ0FBQztnQkFBRVc7Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELElBQUltTCxVQUFVLEVBQUU7Y0FDZixPQUFPaFUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBGLEtBQUEsQ0FBQXVRLGdCQUFnQjtnQkFBQzVWLFFBQVEsRUFBRUEsQ0FBQSxLQUFNK00sU0FBUyxDQUFDLEtBQUs7Y0FBQyxFQUFJOztZQUc5RCxJQUFJLENBQUNoSCxNQUFNLENBQUNvQyxLQUFLLENBQUM2TSxRQUFRLElBQUksQ0FBQ2pQLE1BQU0sQ0FBQ29DLEtBQUssQ0FBQzBOLElBQUksSUFBSSxDQUFDOVAsTUFBTSxDQUFDb0MsS0FBSyxDQUFDOE4sVUFBVSxFQUFFO2NBQzdFLE9BQU8zVyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaU4sTUFBQSxDQUFBSSxVQUFVO2dCQUFDN00sSUFBSSxFQUFDLFFBQVE7Z0JBQUM4TSxRQUFRLEVBQUVBLENBQUEsS0FBTUYsU0FBUyxDQUFDLElBQUk7Y0FBQyxFQUFJOztZQUdyRSxPQUNDek4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa04sU0FBQSxDQUFBSyxnQkFBZ0I7Y0FBQy9NLElBQUksRUFBQztZQUFNLEVBQUcsRUFDaENiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNrTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDL00sSUFBSSxFQUFDO1lBQVksRUFBRyxFQUN0Q2IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQXNCLEdBQ3BDaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUVcsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS3lFLEtBQUssQ0FBQytELEtBQUssQ0FBQzZNLFFBQVEsQ0FBQ2xWLEtBQUssQ0FBTSxFQUNyQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sTUFBQSxDQUFBMkMsVUFBVTtjQUFDTixJQUFJLEVBQUMsTUFBTTtjQUFDRSxPQUFPLEVBQUVBLENBQUEsS0FBTXdULGVBQWUsQ0FBQyxJQUFJO1lBQUMsRUFBSSxDQUN4RCxFQUNSRCxZQUFZLEdBQ1p6VyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1csY0FBQSxDQUFBVCxhQUFhLE9BQUcsR0FFakI1VixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb08sS0FBQSxDQUFBWSxJQUFJO2NBQ0pyTyxTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDcUksS0FBSyxFQUFFNUMsTUFBTSxDQUFDb0MsS0FBSyxDQUFDNk0sUUFBUTtjQUM1QjdNLEtBQUssRUFBRSxFQUFFO2NBQ1R5RyxPQUFPLEVBQUVBLENBQUM7Z0JBQUVqSDtjQUFJLENBQW1ELEtBQ2xFckksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Z0JBQUtXLFNBQVMsRUFBQztjQUFnQixHQUM5QmhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUFTZ0ksSUFBSSxDQUFDeEgsSUFBSSxFLEtBQVksRSxLQUFDYixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxlQUFPZ0ksSUFBSSxDQUFDa0osT0FBTyxDQUFRO1lBRTNELEVBRUYsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUF2UixNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ0csS0FBQSxHQUFBaEcsT0FBQTtVQUVNLFNBQVU2VyxPQUFPQSxDQUFDQyxRQUFRO1lBQy9CLE1BQU0sQ0FBQzFOLEtBQUssRUFBRTJOLFFBQVEsQ0FBQyxHQUFHOVcsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQU0sSUFBSSxDQUFDO1lBRW5EckIsTUFBQSxDQUFBSSxPQUFLLENBQUNvQixTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNdVYsVUFBVSxHQUFHRixRQUFRLENBQUNHLE1BQU0sQ0FBQ3JDLEdBQUcsQ0FBQ2hFLElBQUksSUFBSUEsSUFBSSxDQUFDOVAsSUFBSSxDQUFDO2NBQ3pEO2NBQ0EsTUFBTTRGLE1BQU0sR0FBR29RLFFBQVEsQ0FBQ3BRLE1BQU0sSUFBSSxFQUFFO2NBQ3BDLE1BQU13USxRQUFRLEdBQUcsSUFBSWxSLEtBQUEsQ0FBQW1SLFNBQVMsQ0FBQ0wsUUFBUSxFQUFFO2dCQUFFRSxVQUFVO2dCQUFFLEdBQUd0UTtjQUFNLENBQUUsQ0FBQztjQUNuRXFRLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO1lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUFPO2NBQ05FLEtBQUssRUFBRSxDQUFDLENBQUNoTyxLQUFLO2NBQ2RBO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQW5KLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXFYLFdBQUEsR0FBQXJYLE9BQUE7VUFDQSxJQUFBaUcsV0FBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFzWCxnQkFBQSxHQUFBdFgsT0FBQTtVQUNBLElBQUF1WCxZQUFBLEdBQUF2WCxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQXdYLGNBQUEsR0FBQXhYLE9BQUE7VUFFQSxJQUFBeUQsT0FBQSxHQUFBekQsT0FBQTtVQUNNLFNBQVV5WCxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRS9RLE1BQU07Y0FBRXlCLFFBQVE7Y0FBRXBELEtBQUs7Y0FBRVEsS0FBSztjQUFFeEIsUUFBUTtjQUFFeUUsT0FBTztjQUFFa1A7WUFBUyxDQUFFLEdBQUcsSUFBQS9ULFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDM0YsTUFBTTJULFlBQVksR0FBR0EsQ0FBQztjQUFFN1csSUFBSTtjQUFFOEI7WUFBSyxDQUFFLEtBQUt1RixRQUFRLENBQUM7Y0FBRSxDQUFDckgsSUFBSSxHQUFHOEI7WUFBSyxDQUFFLENBQUM7WUFDckUsTUFBTSxDQUFDZ1YsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHNVgsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQzZPLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR25RLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNYixLQUFLLEdBQUcsQ0FBQ2tMLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNNLFFBQVEsQ0FBQ3ZGLE1BQU0sQ0FBQ2pHLEtBQUssQ0FBQyxHQUFHc0UsS0FBSyxDQUFDc0UsVUFBVSxDQUFDeU8sSUFBSSxDQUFDclgsS0FBSyxHQUFHaUcsTUFBTSxDQUFDakcsS0FBSztZQUN2RyxNQUFNZ0ksV0FBVyxHQUFHLENBQUNrRCxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDTSxRQUFRLENBQUN2RixNQUFNLENBQUMrQixXQUFXLENBQUMsR0FDbkUxRCxLQUFLLENBQUNzRSxVQUFVLENBQUN5TyxJQUFJLENBQUNyUCxXQUFXLEdBQ2pDL0IsTUFBTSxDQUFDK0IsV0FBVztZQUVyQixNQUFNdEgsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixNQUFNNEMsUUFBUSxDQUFDMEgsR0FBRyxDQUFDL0UsTUFBTSxDQUFDO2NBQzFCeUIsUUFBUSxDQUFDO2dCQUFFSyxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDNUJqRCxLQUFLLENBQUM3QyxJQUFJLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTW1PLEtBQUssR0FBRztjQUFFbk0sUUFBUSxFQUFFLENBQUNnQyxNQUFNLENBQUM4QixPQUFPO2NBQUVyRixPQUFPLEVBQUVoQztZQUFNLENBQUU7WUFDNUQsTUFBTTRXLFlBQVksR0FBR0EsQ0FBQSxLQUFNRixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDbEQsTUFBTUcsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkIsSUFBSXRSLE1BQU0sQ0FBQzhCLE9BQU8sRUFBRTtnQkFDbkJxUCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCOztjQUVEdFMsS0FBSyxDQUFDaUcsWUFBWSxHQUFHRyxTQUFTO1lBQy9CLENBQUM7WUFFRCxPQUNDMUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQXlFLEdBQ3ZGaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQThCLEdBQzVDaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQWdTLElBQUk7Y0FBQ2hYLFNBQVMsRUFBQyxXQUFXO2NBQUNrQyxPQUFPLEVBQUU2VTtZQUFNLEdBQzFDL1gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sTUFBQSxDQUFBMkMsVUFBVTtjQUFDTixJQUFJLEVBQUMsV0FBVztjQUFDZ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ2hFLFNBQVMsRUFBQztZQUFRLEVBQUcsRUFDbkU4RCxLQUFLLENBQUN1QixPQUFPLENBQUM0UixJQUFJLEVBQ25CalksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsaUJBQVN5RSxLQUFLLENBQUNzRSxVQUFVLENBQUM4TyxNQUFNLEUsSUFBVyxDQUNyQyxFQUNQbFksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTVcsU0FBUyxFQUFDO1lBQWMsR0FBRThELEtBQUssQ0FBQ3VGLEtBQUssQ0FBQ3ZHLFFBQVEsQ0FBQ3FVLFFBQVEsQ0FBQzNPLEVBQUUsQ0FBQyxDQUFRLENBQ3BFLEVBQ054SixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFTVyxTQUFTLEVBQUM7WUFBMEIsR0FDNUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUNOM0UsSUFBSSxFQUFFUSxPQUFBLENBQUFhLEtBQUssQ0FBQ0MsT0FBTztjQUNuQlUsT0FBTyxFQUFDLFNBQVM7Y0FDakJSLFFBQVE7Y0FDUnRCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNaU4sa0JBQWtCLENBQUMsSUFBSTtZQUFDLEdBRXRDckwsS0FBSyxDQUFDdUIsT0FBTyxDQUFDaUMsUUFBUSxDQUNmLEVBQ1R0SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0MsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLNEw7WUFBSyxHQUNqQzlMLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQzVELElBQUksQ0FDWCxDQUNBLENBQ0wsRUFDTnpDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnWCxnQkFBQSxDQUFBelcsZUFBZTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDQyxRQUFRLEVBQUMsSUFBSTtjQUFDSSxNQUFNLEVBQUV3VztZQUFZLEdBQzlEbFgsS0FBSyxDQUNXLENBQ1QsRUFDVlIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQytXLFdBQUEsQ0FBQS9SLFVBQVUsT0FBRyxDQUNULEVBQ05yRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1gsZ0JBQUEsQ0FBQXpXLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLGFBQWE7Y0FBQ0MsUUFBUSxFQUFDLEdBQUc7Y0FBQ0ksTUFBTSxFQUFFd1c7WUFBWSxHQUNuRWxQLFdBQVcsQ0FDSyxDQUNiLEVBQ0xtUCxhQUFhLElBQ2IzWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVgsWUFBQSxDQUFBclgsa0JBQWtCO2NBQ2xCQyxPQUFPLEVBQUU0WCxZQUFZO2NBQ3JCM1gsU0FBUyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2ZzWCxTQUFTLEVBQUU7Z0JBQ1huUyxLQUFLLENBQUNpRyxZQUFZLEdBQUdHLFNBQVM7Z0JBQzlCb00sWUFBWSxFQUFFO2NBQ2Y7WUFBQyxFQUVGLEVBQ0E1SCxlQUFlLElBQ2ZsUSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa1gsY0FBQSxDQUFBdlAsd0JBQXdCO2NBQUNDLElBQUksRUFBRW5FLFFBQVEsQ0FBQ21FLElBQUk7Y0FBRS9ILE9BQU8sRUFBRUEsQ0FBQSxLQUFNaVEsa0JBQWtCLENBQUMsS0FBSztZQUFDLEVBQ3ZGLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkEsSUFBQW5RLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBcVksT0FBQSxHQUFBclksT0FBQTtVQUVBLElBQUFzWSxlQUFBLEdBQUF0WSxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBdVksVUFBQSxHQUFBdlksT0FBQTtVQUNBLElBQUF3WSxLQUFBLEdBQUF4WSxPQUFBO1VBRU87VUFBWSxTQUFVeVksa0JBQWtCQSxDQUFDO1lBQUVsVCxLQUFLO1lBQUV4QjtVQUFRLENBQUU7WUFDbEUsTUFBTSxHQUFHeUcsU0FBUyxDQUFDLEdBQUd2SyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDb0YsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzFHLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUF3QnlDLFFBQVEsQ0FBQzBJLE9BQU8sRUFBRSxDQUFDO1lBQ3JGLE1BQU0sQ0FBQ2lNLFVBQVUsRUFBRTNULEtBQUssQ0FBQyxHQUFHLElBQUFJLE1BQUEsQ0FBQXdULFFBQVEsRUFBQ0wsZUFBQSxDQUFBSCxNQUFZLENBQUNTLFNBQVMsQ0FBQztZQUM1RCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc3WSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTTtjQUFFNEc7WUFBSSxDQUFFLEdBQUduRSxRQUFRO1lBQ3pCLE1BQU13RyxTQUFTLEdBQUdoRixLQUFLLENBQUN3VCxhQUFhLENBQUNDLEdBQUcsQ0FBQzlRLElBQUksQ0FBQztZQUUvQyxJQUFJLENBQUNxQyxTQUFTLEVBQUUsTUFBTSxJQUFJME8sS0FBSyxDQUFDLHFCQUFxQi9RLElBQUksbUJBQW1CLENBQUM7WUFFN0UsTUFBTUMsUUFBUSxHQUFHRyxJQUFJLElBQUc7Y0FDdkIsTUFBTTRRLFNBQVMsR0FBRztnQkFBRSxHQUFHeFMsTUFBTTtnQkFBRThCLE9BQU8sRUFBRSxJQUFJO2dCQUFFLEdBQUdGO2NBQUksQ0FBRTtjQUN2RDNCLFNBQVMsQ0FBQ3VTLFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBRUQsSUFBQS9ULE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3QixRQUFRLENBQUMsRUFBRSxNQUFNeUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLElBQUksQ0FBQ2tPLFVBQVUsRUFBRSxPQUFPelksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQWtULE9BQU87Y0FBQ2pJLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFFakQsT0FDQ2pSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNxRCxRQUFBLENBQUFvRyxhQUFhLENBQUNxUCxRQUFRO2NBQ3RCeFcsS0FBSyxFQUFFO2dCQUNObUIsUUFBUTtnQkFDUmdCLEtBQUs7Z0JBQ0xRLEtBQUs7Z0JBQ0xtQixNQUFNO2dCQUNOZ1IsU0FBUyxFQUFFQSxDQUFBLEtBQUs7a0JBQ2YzVCxRQUFRLENBQUM2RSxTQUFTLENBQUM0RCxLQUFLLEVBQUU7a0JBQzFCN0YsU0FBUyxDQUFDNUMsUUFBUSxDQUFDMEksT0FBTyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0RqRSxPQUFPLEVBQUU5QixNQUFNLENBQUM4QixPQUFPO2dCQUN2QkwsUUFBUTtnQkFDUjBRLFVBQVU7Z0JBQ1ZDLGFBQWE7Z0JBQ2J2Tzs7WUFDQSxHQUVEdEssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLE9BQUEsQ0FBQVosTUFBTSxPQUFHLEVBQ1Z4WCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVksVUFBQSxDQUFBYyxzQkFBc0IsT0FBRyxFQUMxQnBaLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNrWSxLQUFBLENBQUFuTSxnQkFBZ0I7Y0FBQ25FLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ1I7VUFFM0I7Ozs7Ozs7Ozs7O1VDckRBOztVQUVBb1IsTUFBQSxDQUFBQyxjQUFBLENBQUEvVixPQUFBO1lBQ0FaLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBM0MsTUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUVBLElBQUEyUCxTQUFBLEdBQUEzUCxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBZ0csS0FBQSxHQUFBaEcsT0FBQTtVQUNNLFNBQVV3WixnQkFBZ0JBLENBQUM7WUFBRXJILFFBQVE7WUFBRXBOO1VBQUssQ0FBRTtZQUNuRCxNQUFNO2NBQUVoQixRQUFRO2NBQUUyQyxNQUFNO2NBQUV5QjtZQUFRLENBQUUsR0FBRyxJQUFBeEUsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUN6RCxJQUFJbEQsSUFBSSxHQUFHLE9BQU9xUixRQUFRLEtBQUssUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ3JSLElBQUk7WUFDbEUsTUFBTSxDQUFDNkUsUUFBUSxFQUFFN0IsV0FBVyxDQUFDLEdBQUc3RCxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3lDLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQ2pELFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUcwSyxPQUFPLENBQUMsR0FBR3BRLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDeUMsUUFBUSxDQUFDNkUsU0FBUyxDQUFDOUgsSUFBSSxDQUFDLENBQUM7WUFFNUQsSUFBQXFFLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3QixRQUFRLENBQUM2RSxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDOUUsV0FBVyxDQUFDQyxRQUFRLENBQUM2RSxTQUFTLENBQUNqRCxRQUFRLENBQUM7Y0FDeEMwSyxPQUFPLENBQUN0TSxRQUFRLENBQUM2RSxTQUFTLENBQUM5SCxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFDRixNQUFNcUMsT0FBTyxHQUFHLE1BQU1SLEtBQUssSUFBSSxNQUFNb0IsUUFBUSxDQUFDNkUsU0FBUyxDQUFDTCxRQUFRLENBQUN6SCxJQUFJLENBQUM7WUFDdEUsTUFBTW9HLFFBQVEsR0FBR3ZFLEtBQUssSUFBRztjQUN4QixNQUFNb0ssTUFBTSxHQUFHcEssS0FBSyxDQUFDd0UsYUFBYTtjQUNsQ2dCLFFBQVEsQ0FBQztnQkFBRSxDQUFDckgsSUFBSSxHQUFHaU0sTUFBTSxDQUFDbks7Y0FBSyxDQUFFLENBQUM7WUFDbkMsQ0FBQztZQUVELElBQUksQ0FBQ21CLFFBQVEsQ0FBQzZFLFNBQVMsQ0FBQzlILElBQUksQ0FBQyxFQUFFO2NBQzlCLE9BQ0NiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixLQUFBLENBQUF5QixRQUFRO2dCQUNSUCxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCcEcsSUFBSSxFQUFDLFNBQVM7Z0JBQ2Q4QixLQUFLLEVBQUU4RCxNQUFNLENBQUM1RixJQUFJLENBQUM7Z0JBQ25CNkcsV0FBVyxFQUFDO2NBQWlDLEVBQzVDLEVBRUYxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS1csU0FBUyxFQUFDO2NBQWtDLEdBQ2hEaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFdBQUEsQ0FBQTJCLE1BQU07Z0JBQUN6RSxPQUFPLEVBQUVBLE9BQU87Z0JBQUU4QixPQUFPLEVBQUM7Y0FBUyxHQUN6Q0YsS0FBSyxDQUFDdUIsT0FBTyxDQUFDaUMsUUFBUSxDQUNmLENBQ0osQ0FDRDs7WUFJUixPQUFPdEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FQLFNBQUEsQ0FBQUssUUFBUTtjQUFDaEksT0FBTyxFQUFFakUsUUFBUSxDQUFDNkUsU0FBUyxDQUFDOUgsSUFBSTtZQUFDLEVBQUk7VUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUFiLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXNYLGdCQUFBLEdBQUF0WCxPQUFBO1VBQ00sU0FBVTZOLGdCQUFnQkEsQ0FBQztZQUFFL007VUFBSSxDQUFFO1lBQ3hDLE1BQU07Y0FBRTRGLE1BQU07Y0FBRTNCLEtBQUs7Y0FBRWhCLFFBQVE7Y0FBRW9FO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWhFLE1BQU03QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFTCxJQUFJO2NBQUU4QjtZQUFLLENBQUUsS0FBSTtjQUN4Q3VGLFFBQVEsQ0FBQztnQkFBRVcsS0FBSyxFQUFFO2tCQUFFLEdBQUdwQyxNQUFNLENBQUNvQyxLQUFLO2tCQUFFLENBQUNoSSxJQUFJLEdBQUc4QjtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUN4RCxDQUFDO1lBRUQsTUFBTUEsS0FBSyxHQUFHbUIsUUFBUSxDQUFDK0UsS0FBSyxDQUFDaEksSUFBSSxDQUFDLElBQUlpRSxLQUFLLENBQUMrRCxLQUFLLENBQUNoSSxJQUFJLENBQUMsQ0FBQzZHLFdBQVc7WUFDbkUsT0FDQzFILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFhLEdBQzNCaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VKLE9BQU8sRUFBQztZQUFFLEdBQUU5RSxLQUFLLENBQUMrRCxLQUFLLENBQUNoSSxJQUFJLENBQUMsQ0FBQzRHLEtBQUssQ0FBUyxFQUNuRHpILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnWCxnQkFBQSxDQUFBelcsZUFBZTtjQUFDQyxJQUFJLEVBQUVBLElBQUk7Y0FBRUssTUFBTSxFQUFFQTtZQUFNLEdBQ3pDeUIsS0FBSyxDQUNXLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTNDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXVOLE1BQUEsR0FBQXZOLE9BQUE7VUFDQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNNLFNBQVV5WixZQUFZQSxDQUFDO1lBQUUzWTtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFaUQ7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUN2QyxJQUFBbUIsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQzdCLFFBQVEsQ0FBQytFLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0poRyxPQUFPLENBQUNrTSxHQUFHLENBQUMsRUFBRSxFQUFFakwsUUFBUSxDQUFDK0UsS0FBSyxDQUFDMkQsT0FBTyxFQUFFLENBQUM7WUFDMUMsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELE9BQ0N4TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaU4sTUFBQSxDQUFBSSxVQUFVO2NBQUM3TSxJQUFJLEVBQUVBLElBQUk7Y0FBRThNLFFBQVEsRUFBRUEsQ0FBQSxLQUFNOUssT0FBTyxDQUFDa00sR0FBRyxDQUFDLFdBQVc7WUFBQyxFQUFJLENBQy9EO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUEvTyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBa0YsR0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQWlHLFdBQUEsR0FBQWpHLE9BQUE7VUFFQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUEwWixXQUFBLEdBQUExWixPQUFBO1VBRU0sU0FBVTJOLFVBQVVBLENBQUM7WUFBRTdNLElBQUk7WUFBRThNO1VBQVEsQ0FBRTtZQUM1QyxNQUFNO2NBQUU3SixRQUFRO2NBQUVnQjtZQUFLLENBQUUsR0FBRyxJQUFBcEIsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNtTSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUduUSxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDcUUsUUFBUSxFQUFFN0IsV0FBVyxDQUFDLEdBQUc3RCxNQUFBLENBQUFJLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQ3lDLFFBQVEsQ0FBQytFLEtBQUssQ0FBQ25ELFFBQVEsQ0FBQztZQUN2RSxNQUFNLEdBQUcwSyxPQUFPLENBQUMsR0FBR3BRLE1BQUEsQ0FBQUksT0FBSyxDQUFDaUIsUUFBUSxDQUFDeUMsUUFBUSxDQUFDK0UsS0FBSyxDQUFDMkQsT0FBTyxFQUFFLENBQUM7WUFFNUQsSUFBQXRILE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3QixRQUFRLENBQUM2RSxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDOUUsV0FBVyxDQUFDQyxRQUFRLENBQUM2RSxTQUFTLENBQUNqRCxRQUFRLENBQUM7Y0FDeEMwSyxPQUFPLENBQUN0TSxRQUFRLENBQUMrRSxLQUFLLENBQUMyRCxPQUFPLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixPQUNDeE0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUFtRSxRQUFBLFFBQ0N2RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBdUssU0FBUztjQUFDL08sSUFBSSxFQUFFcUUsS0FBSyxDQUFDc0UsVUFBVSxDQUFDcUcsS0FBSyxDQUFDalAsS0FBSztjQUFFZ0ksV0FBVyxFQUFFMUQsS0FBSyxDQUFDc0UsVUFBVSxDQUFDcUcsS0FBSyxDQUFDakg7WUFBVyxHQUM3RnhJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUE0QixHQUMxQ2hCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixXQUFBLENBQUEyQixNQUFNO2NBQUN6RSxPQUFPLEVBQUVBLENBQUEsS0FBTWlOLGtCQUFrQixDQUFDLElBQUksQ0FBQztjQUFFbkwsT0FBTyxFQUFDO1lBQVMsR0FDaEVGLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2lDLFFBQVEsQ0FDZixDQUNKLEVBQ050SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsV0FBQSxDQUFBMkIsTUFBTTtjQUFDM0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ1IsUUFBUTtjQUFDdEIsT0FBTyxFQUFFeUs7WUFBUSxHQUNsRDdJLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQ2dILE1BQU0sQ0FDYixDQUNKLEVBRU5yTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEUsR0FBQSxDQUFBYSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0IsRUFDWHdLLGVBQWUsSUFBSWxRLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvWixXQUFBLENBQUE3USxxQkFBcUI7Y0FBQ1gsSUFBSSxFQUFFcEgsSUFBSTtjQUFFWCxPQUFPLEVBQUVBLENBQUEsS0FBTWlRLGtCQUFrQixDQUFDLEtBQUs7WUFBQyxFQUFJLENBQ2pHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFuUSxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFzWCxnQkFBQSxHQUFBdFgsT0FBQTtVQUNNLFNBQVUyWixhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRWpULE1BQU07Y0FBRTNCLEtBQUs7Y0FBRWhCLFFBQVE7Y0FBRW9FO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWhFLE1BQU03QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFTCxJQUFJO2NBQUU4QjtZQUFLLENBQUUsS0FBSTtjQUN4Q3VGLFFBQVEsQ0FBQztnQkFBRVcsS0FBSyxFQUFFO2tCQUFFLENBQUNoSSxJQUFJLEdBQUc4QjtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUN2QyxDQUFDO1lBRUQsT0FDQzNDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUt5RSxLQUFLLENBQUMrRCxLQUFLLENBQUNySSxLQUFLLENBQU0sRUFDM0JzRCxRQUFRLENBQUMrRSxLQUFLLENBQUNrTyxVQUFVLENBQUNwQyxHQUFHLENBQUMsQ0FBQ2dGLFFBQVEsRUFBRWhPLEtBQUssS0FBSTtjQUNsRCxNQUFNbEUsS0FBSyxHQUFHLENBQUNpRSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDTSxRQUFRLENBQUNsSSxRQUFRLENBQUMrRSxLQUFLLENBQUM4USxRQUFRLENBQUMsQ0FBQyxHQUNuRTdVLEtBQUssQ0FBQytELEtBQUssQ0FBQytRLFNBQVMsR0FDckJuVCxNQUFNLENBQUNvQyxLQUFLLENBQUM4USxRQUFRLENBQUM7Y0FDekIsT0FDQzNaLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFLMFEsR0FBRyxFQUFFcEY7Y0FBSyxHQUNkM0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dYLGdCQUFBLENBQUF6VyxlQUFlO2dCQUFDQyxJQUFJLEVBQUU4WSxRQUFRO2dCQUFFelksTUFBTSxFQUFFQTtjQUFNLEdBQzdDdUcsS0FBSyxDQUNXLENBQ2I7WUFFUixDQUFDLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBekgsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBc1gsZ0JBQUEsR0FBQXRYLE9BQUE7VUFDTSxTQUFVcVosc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRTNTLE1BQU07Y0FBRTNCLEtBQUs7Y0FBRWhCLFFBQVE7Y0FBRW9FO1lBQVEsQ0FBRSxHQUFHLElBQUF4RSxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWhFLE1BQU03QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFTCxJQUFJO2NBQUU4QjtZQUFLLENBQUUsS0FBSTtjQUN4Q3VGLFFBQVEsQ0FBQztnQkFBRVcsS0FBSyxFQUFFO2tCQUFFLENBQUNoSSxJQUFJLEdBQUc4QjtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUN2QyxDQUFDO1lBRUQsSUFBSSxDQUFDbUIsUUFBUSxDQUFDK0UsS0FBSyxDQUFDa08sVUFBVSxDQUFDL0ssUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUVqRSxNQUFNckosS0FBSyxHQUFHOEQsTUFBTSxDQUFDb0MsS0FBSyxDQUFDK1EsU0FBUyxJQUFJOVUsS0FBSyxDQUFDK0QsS0FBSyxDQUFDK1EsU0FBUyxDQUFDbFMsV0FBVztZQUN6RSxPQUNDMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS1csU0FBUyxFQUFDO1lBQWEsR0FDM0JoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPdUosT0FBTyxFQUFDO1lBQUUsR0FBRTlFLEtBQUssQ0FBQytELEtBQUssQ0FBQytRLFNBQVMsQ0FBQ25TLEtBQUssQ0FBUyxFQUN2RHpILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnWCxnQkFBQSxDQUFBelcsZUFBZTtjQUFDQyxJQUFJLEVBQUMsV0FBVztjQUFDSyxNQUFNLEVBQUVBO1lBQU0sR0FDOUN5QixLQUFLLENBQ1csQ0FDYjtVQUVSIn0=