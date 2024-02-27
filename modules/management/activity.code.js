System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_16 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Empty) {
      dependency_17 = _pragmateUi006Empty;
    }, function (_pragmateUi006Tabs) {
      dependency_18 = _pragmateUi006Tabs;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/modal', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/alert', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-sdk/config', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/tabs', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20]]);
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
        hash: 1421178133,
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
            if (!values.specs.role) {
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
        hash: 2358915821,
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
        hash: 3315678589,
        creator: function (require, exports) {
          // import React from 'react';
          // import { FormModel } from '@bgroup/wise-form/form';
          // export function useForm(settings) {
          // 	const [model, setModel] = React.useState<any>(null);
          // 	React.useEffect(() => {
          // 		const properties = settings.fields.map(item => item.name);
          // 		//@ts-ignore
          // 		const values = settings.values || {};
          // 		const instance = new FormModel(settings, { properties, ...values });
          // 		setModel(instance);
          // 	}, []);
          // 	return {
          // 		ready: !!model,
          // 		model
          // 	};
          // }
          "use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2l0ZW0iLCJfb3B0aW9uc0hlYWRlciIsIkNvbnZlcnNhdGlvbkZvcm0iLCJ0eXBlcyIsIml0ZW1zVHlwZSIsInNldFVwZGF0ZSIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkljb24iLCJjb252ZXJzYXRpb24iLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZWRpdEFjdGl2aXR5Iiwic2V0Iiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJidWxsZXRQb2ludCIsImFkZCIsIl8iLCJBY3Rpdml0eUZvcm1CYXNlIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJhZGRBbnN3ZXIiLCJzZXRWYWx1ZSIsIm9uQWRkIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJfcmVsYXRlZEFjdGl2aXR5IiwibWFudWFsRm9ybSIsImVkaXRPcHRpb25zU2VwY3MiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29yZSIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJyZWZpbmVBY3Rpb24iLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZmlsdGVyIiwicmVsYXRlZCIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsImFzc2Vzc21lbnQiLCJfY292ZXJJbWFnZSIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfYWN0aXZpdHlNb2RhbCIsIkhlYWRlciIsImNsZWFyRGF0YSIsInNhdmVFZGl0YWJsZSIsInNob3dCYWNrTW9kYWwiLCJzZXRTaG93QmFja01vZGFsIiwiZm9ybSIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsIkxpbmsiLCJiYWNrIiwibW9kdWxlIiwiZGF0YVR5cGUiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9iYXNlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiRXJyb3IiLCJmaW5hbERhdGEiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJBY3Rpdml0eU1hdGVyaWFsIiwiRHluYW1pY1NwZWNzIiwiX3NwZWNzTW9kYWwiLCJBY3Rpdml0eVNwZWNzIiwicHJvcGVydGllcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9iYXNlLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL3VzZS1mb3JtLnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsa0JBQWtCQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBUyxDQUFFO1lBQ3hELE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUNaQyxJQUFJO2NBQ0pDLEtBQUssRUFBQyxjQUFjO2NBQ3BCQyxJQUFJLEVBQUMsd0VBQXdFO2NBQzdFUCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJRLFFBQVEsRUFBRVIsT0FBTztjQUNqQkMsU0FBUyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2ZBLFNBQVMsRUFBRTtjQUNaO1lBQUMsRUFDYztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQUgsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBVU8sTUFBTWEsZUFBZSxHQUFxQkEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLFFBQVEsRUFBRUMsT0FBTyxHQUFHLEtBQUs7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDO1VBQU0sQ0FBRSxLQUFJO1lBQ3JILE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBcEIsTUFBQSxDQUFBcUIsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNQyxVQUFV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