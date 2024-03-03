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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJidG5MYWJlbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwiY2hhcmFjdGVyIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50IiwiYXJ0aWNsZSIsImVkaXQiLCJNYXJrZG93biIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJvbkRlbGV0ZSIsImNsZWFyIiwiaGFzVmFsdWVzIiwiZGVsZXRlIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiYWRkQW5zd2VyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwiYW5zd2VycyIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiX3JlbGF0ZWRBY3Rpdml0eSIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvcmUiLCJfb3B0aW9uc0hlYWRlciIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJhY3Rpb25zU3BlY3MiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsIml0ZW1zVHlwZSIsImFkZEJ1bGxldFBvaW50IiwiYnVsbGV0UG9pbnQiLCJBbnN3ZXJzIiwiYW5zd2VyIiwiSWNvbiIsImZpbHRlciIsInJlbGF0ZWQiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX2FjdGl2aXR5TW9kYWwiLCJIZWFkZXIiLCJjbGVhckRhdGEiLCJzYXZlRWRpdGFibGUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiZm9ybSIsImdldCIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsImVkaXRBY3Rpdml0eSIsIkxpbmsiLCJiYWNrIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiRXJyb3IiLCJmaW5hbERhdGEiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwicHJvcGVydGllcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsa0JBQWtCQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBUyxDQUFFO1lBQ3hELE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNQLE1BQUEsQ0FBQVEsWUFBWTtjQUNaQyxJQUFJO2NBQ0pDLEtBQUssRUFBQyxjQUFjO2NBQ3BCQyxJQUFJLEVB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