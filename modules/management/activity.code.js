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
        hash: 99967884,
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
                processMessages
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
                  await store.model.generatePicture(values.notes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibW9kZWwiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic3VidGl0bGUiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiY2FuY2VsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJnZW5lcmF0ZSIsInVwZGF0ZWQiLCJkZXNjcmlwdGlvbiIsInJlZmluaW5nUXVlc3Rpb25zIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm1hdGVyaWFscyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2l0ZW0iLCJfb3B0aW9uc0hlYWRlciIsIkNvbnZlcnNhdGlvbkZvcm0iLCJ0eXBlcyIsIml0ZW1zVHlwZSIsInNldFVwZGF0ZSIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkljb24iLCJjb252ZXJzYXRpb24iLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZWRpdEFjdGl2aXR5Iiwic2V0Iiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJidWxsZXRQb2ludCIsImFkZCIsIl8iLCJBY3Rpdml0eUZvcm1CYXNlIiwiZm9ybXMiLCJvbkRlbGV0ZSIsImNsZWFyIiwiZ2V0RGF0YSIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidGFyZ2V0IiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiZWRpdCIsIk1hcmtkb3duIiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImF0dHJzIiwicmVxdWlyZWQiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJhZGRBbnN3ZXIiLCJzZXRWYWx1ZSIsIm9uQWRkIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJfcmVsYXRlZEFjdGl2aXR5IiwibWFudWFsRm9ybSIsImVkaXRPcHRpb25zU2VwY3MiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29yZSIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJyZWZpbmVBY3Rpb24iLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZmlsdGVyIiwicmVsYXRlZCIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsImFzc2Vzc21lbnQiLCJ1c2VGb3JtIiwic2V0dGluZ3MiLCJzZXRNb2RlbCIsInByb3BlcnRpZXMiLCJmaWVsZHMiLCJpbnN0YW5jZSIsIkZvcm1Nb2RlbCIsInJlYWR5IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX2FjdGl2aXR5TW9kYWwiLCJIZWFkZXIiLCJjbGVhckRhdGEiLCJzYXZlRWRpdGFibGUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImZvcm0iLCJvbkNsb3NlTW9kYWwiLCJvbkJhY2siLCJMaW5rIiwiYmFjayIsIm1vZHVsZSIsImRhdGFUeXBlIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9vYmplY3RpdmUiLCJfYmFzZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsIkVycm9yIiwiZmluYWxEYXRhIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiQWN0aXZpdHlNYXRlcmlhbCIsIkR5bmFtaWNTcGVjcyIsIl9zcGVjc01vZGFsIiwiQWN0aXZpdHlTcGVjcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9iYXNlLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL3VzZS1mb3JtLnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2R5bmFtaWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxrQkFBa0JBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFTLENBQUU7WUFDeEQsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsTUFBQSxDQUFBUSxZQUFZO2NBQ1pDLElBQUk7Y0FDSkMsS0FBSyxFQUFDLGNBQWM7Y0FDcEJDLElBQUksRUFBQyx3RUFBd0U7Y0FDN0VQLE9BQU8sRUFBRUEsT0FBTztjQUNoQlEsUUFBUSxFQUFFUixPQUFPO2NBQ2pCQyxTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZkEsU0FBUyxFQUFFO2NBQ1o7WUFBQyxFQUNjO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBSCxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBWSxNQUFBLEdBQUFaLE9BQUE7VUFVTyxNQUFNYSxlQUFlLEdBQXFCQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsUUFBUSxFQUFFQyxPQUFPLEdBQUcsS0FBSztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDckgsTUFBTSxDQUFDQyxVQUFVLEVB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