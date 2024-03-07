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
        hash: 1298680224,
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
                  updated: false
                });
                onClose();
                setTimeout(() => setFetching(false), 2000);
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
        hash: 2853381978,
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
        hash: 2971708945,
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
                  activityId: data.target.value
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
        hash: 2047749569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateForm = DebateForm;
          var _react = require("react");
          var _empty = require("../../specs/empty");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _baseSpec = require("../../specs/base-spec");
          function DebateForm() {
            const {
              activity,
              editData,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => editData(activity.getData()), 'specs.generated');
            if (manual) return _react.default.createElement(_form.ManualDebateForm, {
              onCancel: () => setManual(false)
            });
            if (!values.specs.subject) return _react.default.createElement(_empty.EmptySpecs, {
              name: "debate",
              onManual: () => setManual(true)
            });
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
        hash: 310259669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseForm = ActivityBaseForm;
          var _react = require("react");
          var _characterTalk = require("./character-talk");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function ActivityBaseForm({
            type
          }) {
            const {
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const forms = {
              'content-theory': _contentTheory.ContentTheoryForm,
              debate: _debate.DebateForm,
              spoken: _spoken.SpokenForm,
              'multiple-choice': _multipleChoice.MultipleChoiceForm,
              'character-talk': _characterTalk.CharacterTalkForm
            };
            if (!forms[type]) console.error('No form for type', type, forms);
            const Form = forms[type];
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
        hash: 2192258181,
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
            const openManual = () => setManual(true);
            if (!values.specs.questions.length) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_empty.EmptySpecs, {
                name: "multiple-choice",
                onManual: openManual
              }));
            }
            const edit = () => setEditOptionSpecs(true);
            const back = () => setEditOptionSpecs(false);
            const onManual = () => setManual(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__multiple-field"
            }, editOptionsSepcs ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: back
            })), _react.default.createElement(_manual.MultipleChoiceManualForm, {
              onCancel: onManual
            })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: edit
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
        hash: 3827288807,
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
                related: event.target.value
              });
              editData({
                specs: {
                  ...values.specs,
                  related: event.target.value
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
        hash: 1668004861,
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
            (0, _hooks.useBinder)([activity.specs], () => editData(activity.getData()), 'specs.generated');
            if (manualForm) return _react.default.createElement(_form.SpokenManualForm, {
              onCancel: () => setManual(false)
            });
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

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1059082053,
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
              /**
               * activity object is a copy and does not update the model items list.
               * We need to update the model item to reflect the changes
               * @todo: validate how to update the model item directly.
               */
              await store.model.activities.map.get(activity.id).set(values);
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
        hash: 3326913230,
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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

      /*****************************
      INTERNAL MODULE: ./specs/empty
      *****************************/

      ims.set('./specs/empty', {
        hash: 3880532811,
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
          var _specsModal = require("../components/generation-modal/specs-modal");
          function EmptySpecs({
            name,
            onManual
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const disabled = {
              disabled: !activity.prepared
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              ...disabled,
              onClick: () => setShowSuggestions(true),
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual,
              ...disabled
            }, texts.actions.manual))), showSuggestions && _react.default.createElement(_specsModal.SpecsSuggestionsModal, {
              type: name,
              onClose: () => setShowSuggestions(false)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJidG5MYWJlbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwiY2hhcmFjdGVyIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50IiwiYXJ0aWNsZSIsImVkaXQiLCJNYXJrZG93biIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJvbkRlbGV0ZSIsImNsZWFyIiwiaGFzVmFsdWVzIiwiZGVsZXRlIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiYWRkQW5zd2VyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwiYW5zd2VycyIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiX3JlbGF0ZWRBY3Rpdml0eSIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwiYmFjayIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29yZSIsIl9vcHRpb25zSGVhZGVyIiwic2V0T3B0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwic2V0QWRkQW5zd2VyIiwic2V0QW5zd2VycyIsIm1hcCIsImhhbmRsZUNoYW5nZSIsInNldCIsImFjdGlvbnNTcGVjcyIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlQW5zd2VyIiwicmVzb2x2ZSIsInJlcXVpcmVWYWx1ZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsIkFuc3dlcnMiLCJhbnN3ZXIiLCJJY29uIiwiZmlsdGVyIiwicmVsYXRlZCIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsImFzc2Vzc21lbnQiLCJfY292ZXJJbWFnZSIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfYWN0aXZpdHlNb2RhbCIsIkhlYWRlciIsImNsZWFyRGF0YSIsInNhdmVFZGl0YWJsZSIsInNob3dCYWNrTW9kYWwiLCJzZXRTaG93QmFja01vZGFsIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJmb3JtIiwiZ2V0Iiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwiZWRpdEFjdGl2aXR5IiwiTGluayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsIkVycm9yIiwiZmluYWxEYXRhIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVFLGtCQUFrQkEsQ0FBQztZQUFFQyxPQUFPO1lBQUVDO1VBQVMsQ0FBRTtZQUN4RCxPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFRLFlBQVk7Y0FDWkMsSUFBSTtjQUNKQyxLQUFLLEVBQUMsY0FBYztj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