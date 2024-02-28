System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form/react-select", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/tabs", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, AudioPlayer, OptionAnswers, ItemOption, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    OptionAnswers: void 0,
    ItemOption: void 0,
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
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_14 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_15 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Empty) {
      dependency_16 = _pragmateUi006Empty;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_18 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/modal', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/alert', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/ailearn-sdk/config', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiXyIsIkFjdGl2aXR5Rm9ybUJhc2UiLCJmb3JtcyIsIm9uRGVsZXRlIiwiY2xlYXIiLCJnZXREYXRhIiwiaGFzVmFsdWVzIiwiZGVsZXRlIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJ0YXJnZXQiLCJidG5MYWJlbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwiY2hhcmFjdGVyIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJvcGVuTWFudWFsRm9ybSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwibG9nIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiSXRlbSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImFkZEFuc3dlciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwib25BZGQiLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJxdWVzdGlvbiIsInVwZGF0ZSIsInNldFVwZGF0ZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsIkl0ZW1PcHRpb24iLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsImFuc3dlcnMiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJxdWVzdGlvbnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJtYW51YWxGb3JtIiwiZWRpdE9wdGlvbnNTZXBjcyIsInNldEVkaXRPcHRpb25TcGVjcyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb3JlIiwiX29wdGlvbnNIZWFkZXIiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwic2V0IiwiYWN0aW9uc1NwZWNzIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJpdGVtc1R5cGUiLCJhZGRCdWxsZXRQb2ludCIsImJ1bGxldFBvaW50IiwiQW5zd2VycyIsImFuc3dlciIsIkljb24iLCJmaWx0ZXIiLCJyZWxhdGVkIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbk1hbnVhbEZvcm0iLCJ0YXNrIiwiaW5zdHJ1Y3Rpb25zIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwiYXNzZXNzbWVudCIsIl9jb3ZlckltYWdlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9hY3Rpdml0eU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImZvcm0iLCJvbkNsb3NlTW9kYWwiLCJvbkJhY2siLCJlZGl0QWN0aXZpdHkiLCJMaW5rIiwiYmFjayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9iYXNlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiRXJyb3IiLCJmaW5hbERhdGEiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJBY3Rpdml0eU1hdGVyaWFsIiwiRHluYW1pY1NwZWNzIiwiX3NwZWNzTW9kYWwiLCJBY3Rpdml0eVNwZWNzIiwicHJvcGVydGllcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9iYXNlLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL3VzZS1mb3JtLnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEs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