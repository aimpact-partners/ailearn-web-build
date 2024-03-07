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
        hash: 4119567422,
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
              activity,
              editData
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
                editData({
                  materials: {
                    ...activity.materials
                  },
                  specs: {
                    ...activity.specs
                  }
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
        hash: 91937516,
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
          var _saveButton = require("../../save-button");
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
            }, btnLabel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 958425436,
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
            const onManual = () => setManual(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: onManual
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
        hash: 895735082,
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
            const openSuggestions = () => setShowSuggestions(true);
            const closeSuggestions = () => setShowSuggestions(true);
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
              onClick: openSuggestions,
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
              onClose: closeSuggestions
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
        hash: 1845520189,
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
          var _saveButton = require("../../save-button");
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
            }, btnLabel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 574362319,
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
          var _saveButton = require("../../save-button");
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
            }, btnLabel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 1231712103,
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
            if (!values.specs?.questions?.length) {
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
        hash: 353745297,
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
          var _saveButton = require("../../save-button");
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
            }, btnLabel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 2153492536,
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
          var _saveButton = require("./save-button");
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
            }, texts.actions.generate), _react.default.createElement(_saveButton.SaveButton, null))), _react.default.createElement(_contentEditable.ContentEditable, {
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

      /*****************************
      INTERNAL MODULE: ./save-button
      *****************************/

      ims.set('./save-button', {
        hash: 522179673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SaveButton = SaveButton;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          function SaveButton() {
            const {
              values,
              editData,
              texts,
              store,
              activity
            } = (0, _context.useModuleContext)();
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
            return _react.default.createElement(_components.Button, {
              variant: "primary",
              ...attrs
            }, texts.actions.save);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kYWwiLCJyZXF1aXJlIiwiX3JlYWN0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwib25DbGljayIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIkljb25CdXR0b24iLCJleHBvcnRzIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJhY3Rpdml0eSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIkZyYWdtZW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJBbGVydCIsInZhcmlhbnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJzdG9yZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiYWN0aW9ucyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwiZGVzY3JpcHRpb24iLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiYWN0aXZpdGllcyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3NhdmVCdXR0b24iLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsImJ0bkxhYmVsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJJbnB1dCIsInJvbGUiLCJjaGFyYWN0ZXIiLCJTYXZlQnV0dG9uIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50IiwiYXJ0aWNsZSIsImVkaXQiLCJNYXJrZG93biIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsIm9wZW5TdWdnZXN0aW9ucyIsImNsb3NlU3VnZ2VzdGlvbnMiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpdGVtIiwiYXR0cnMiLCJyZXF1aXJlZCIsIlRhYiIsImtleSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJNYW51YWxEZWJhdGVGb3JtIiwiRGViYXRlRm9ybSIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJBY3Rpdml0eUJhc2VGb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwib25EZWxldGUiLCJjbGVhciIsImhhc1ZhbHVlcyIsImRlbGV0ZSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImFkZEFuc3dlciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwib25BZGQiLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJxdWVzdGlvbiIsInVwZGF0ZSIsInNldFVwZGF0ZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsIkl0ZW1PcHRpb24iLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsImFuc3dlcnMiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJxdWVzdGlvbnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJtYW51YWxGb3JtIiwiZWRpdE9wdGlvbnNTZXBjcyIsInNldEVkaXRPcHRpb25TcGVjcyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsIm9wZW5NYW51YWwiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsImJhY2siLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvcmUiLCJfb3B0aW9uc0hlYWRlciIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJhY3Rpb25zU3BlY3MiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsIml0ZW1zVHlwZSIsImFkZEJ1bGxldFBvaW50IiwiYnVsbGV0UG9pbnQiLCJBbnN3ZXJzIiwiYW5zd2VyIiwiSWNvbiIsImZpbHRlciIsInJlbGF0ZWQiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX2FjdGl2aXR5TW9kYWwiLCJIZWFkZXIiLCJjbGVhckRhdGEiLCJzYXZlRWRpdGFibGUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiZm9ybSIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsImVkaXRBY3Rpdml0eSIsIkxpbmsiLCJtb2R1bGUiLCJ0eXBlcyIsImRhdGFUeXBlIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9vYmplY3RpdmUiLCJfZm9ybXMiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJwcm9wZXJ0aWVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxrQkFBa0JBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFTLENBQUU7WUFD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