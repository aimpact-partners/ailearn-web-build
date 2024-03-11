System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/modal", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/alert", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/form/react-select", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/empty", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, AudioPlayer, OptionAnswers, ItemOption, PageHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    OptionAnswers: void 0,
    ItemOption: void 0,
    PageHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_3 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_4 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006Modal) {
      dependency_7 = _pragmateUi006Modal;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Alert) {
      dependency_9 = _pragmateUi006Alert;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_11 = _pragmateUi006Image;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_13 = _pragmateUi006FormReactSelect;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_16 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }, function (_pragmateUi006Empty) {
      dependency_18 = _pragmateUi006Empty;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_19 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_pragmateUi006Chips) {
      dependency_20 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_21 = _beyondJsKernel019Core;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-sdk/config', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/empty', dependency_18], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_19], ['pragmate-ui/chips', dependency_20], ['@beyond-js/kernel/core', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./activity-header
      *********************************/
      ims.set('./activity-header', {
        hash: 1402083870,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
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
          var _routing = require("@beyond-js/kernel/routing");
          function ActivityHeader() {
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
              _routing.routing.pushState(`/modules/management?id=${store.model.id}`);
              store.editActivity = undefined;
            };
            const onConfirm = () => {
              clearData();
              store.editActivity = undefined;
              onCloseModal();
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
              onClick: toggleSuggestions
            }, texts.actions.generate), _react.default.createElement(_saveButton.SaveButton, null)))), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement("div", null, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, description)), showBackModal && _react.default.createElement(_cancelModal.CancelChangesModal, {
              onConfirm: onConfirm
            }), showSuggestions && _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
              type: activity.type,
              onClose: toggleSuggestions
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/cancel-modal
      *****************************************/

      ims.set('./components/cancel-modal', {
        hash: 1641415938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancelChangesModal = CancelChangesModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          function CancelChangesModal({
            show,
            onClose
          }) {
            const {
              values,
              activity,
              store,
              texts,
              clearData
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            const onConfirm = () => {
              clearData();
              store.editActivity = undefined;
              onClose();
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: texts.modal.cancel.title,
              text: texts.modal.cancel.description,
              onClose: onClose,
              onCancel: onClose,
              btnConfirm: {
                label: texts.actions.confirm
              },
              btnCancel: {
                label: texts.actions.cancel
              },
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
        hash: 1392692614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _refinementModal = require("./refinement-modal");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const toggleModal = () => setShowRefiningModal(!showModal);
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_ui.AIButton, {
                onClick: toggleModal
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_ui.AIIconButton, {
              onClick: toggleModal,
              bordered: true
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            })), _react.default.createElement(_refinementModal.RefinementModal, {
              show: showModal,
              confirm: !!activity.picture,
              onClose: toggleModal
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./components/cover-image/confirm
      ************************************************/

      ims.set('./components/cover-image/confirm', {
        hash: 735351596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmRefinementModal = ConfirmRefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function ConfirmRefinementModal({
            show,
            onConfirm,
            onClose
          }) {
            const {
              texts: {
                picture: texts,
                refine: {
                  textarea: textAreaTexts
                },
                actions: textActions,
                generatingImage
              }
            } = (0, _context.useModuleContext)();
            const [, setOpenConfirm] = _react.default.useState(false);
            if (!show) return null;
            const onCancel = () => setOpenConfirm(false);
            const actions = {
              confirm: {
                variant: 'primary',
                label: textActions.confirm
              },
              cancel: {
                label: textActions.cancel,
                variant: 'primary',
                bordered: true
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onCancel,
              actions: actions,
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            });
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
        hash: 286583537,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _context = require("../../context");
          var _confirm = require("./confirm");
          function RefinementModal({
            show,
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
            if (!show) return null;
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
            const toggleConfirm = () => setOpenConfirm(!openConfirm);
            const onClickAction = confirm ? toggleConfirm : events.onClick;
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
            }, _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              disabled: !values.notes,
              onClick: onClickAction
            }, textActions.refine)), _react.default.createElement(_confirm.ConfirmRefinementModal, {
              show: openConfirm,
              onClose: toggleConfirm,
              onConfirm: events.onClick
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
        hash: 3513984127,
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
          var _context = require("../../context");
          function ActivitySuggestionsModal({
            show,
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
            if (!show) return false;
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
            }, _react.default.createElement(_ui.AIButton, {
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

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 1926223799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onBack = () => {
              _routing.routing.pushState(`/modules/management?id=${store.model.id}`);
              store.editActivity = undefined;
            };
            return _react.default.createElement("div", {
              className: "internal-breadcrumb"
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: onBack
            }, _react.default.createElement(_icons.Icon, {
              icon: "backArrow",
              className: "circle"
            }), _react.default.createElement("span", null, texts.actions.back, " : ", texts.activities.module)), _react.default.createElement(_components.Link, null, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.types[activity.dataType.id])));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 1125424079,
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
            }, _react.default.createElement(_ui.AIButton, {
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
        hash: 2324018970,
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
          var _context = require("../../context");
          function SpecsSuggestionsModal({
            type,
            onClose,
            suggestionSpecs = {}
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
                await activity.specs.generate(type, {
                  ...suggestionSpecs,
                  notes: values.notes
                });
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 1000);
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
            }, _react.default.createElement(_ui.AIButton, {
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
        hash: 3522023502,
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
            }, _react.default.createElement(_ui.AIButton, {
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
        hash: 165451354,
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
                },
                updated: true
              });
            };
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
            }, texts.actions.cancel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 3341164438,
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
        hash: 2186283171,
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
            if (activity.materials.article) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
                className: "material__content"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("div", {
                className: "mt-30 activity-specs-actions flex-container flex-end material__actions"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: openManualForm,
                variant: "primary",
                bordered: true
              }, texts.actions.edit)));
            }
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
        hash: 775958518,
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
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const disabled = {
              disabled: !activity.aiCompleted
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/index
      ********************************************/

      ims.set('./forms/content-theory/index', {
        hash: 1357849403,
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
            const [, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            const onChange = () => {};
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData({
                materials: activity.materials.getData(),
                updated: true
              });
            });
            activity.materials.items.forEach(item => {
              const name = typeof item === 'string' ? item : item.name;
              const label = texts.materials[name];
              const isDisabled = (() => {
                if (!item?.dependencies) return false;
                if (typeof item?.dependencies === 'string') return !activity.materials[item.dependencies];
                return item.dependencies.some(property => !activity.materials[property]);
              })();
              const attrs = {
                disabled: isDisabled
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
        hash: 993347427,
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
                },
                updated: true
              });
            };
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "material__content"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual.textarea
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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

      /************************************
      INTERNAL MODULE: ./forms/delete-modal
      ************************************/

      ims.set('./forms/delete-modal', {
        hash: 1523120684,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteActivityData = DeleteActivityData;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          function DeleteActivityData({
            show,
            onClose
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              texts: {
                activities: texts,
                actions
              },
              activity,
              editData
            } = (0, _context.useModuleContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                onClose();
                await activity.clearContent();
                const data = {
                  specs: activity.specs.getData(),
                  materials: activity.materials.getData(),
                  updated: false
                };
                editData(data);
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onClose: onClose,
              onConfirm: onConfirm,
              btnConfirm: {
                label: actions.confirm
              },
              btnCancel: {
                label: actions.cancel
              }
            }, _react.default.createElement("h3", null, texts.deleteModal.title), _react.default.createElement("p", null, texts.deleteModal.description)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./forms/index
      *****************************/

      ims.set('./forms/index', {
        hash: 2160601541,
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
          var _deleteModal = require("./delete-modal");
          function ActivityBaseForm({
            type
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const forms = {
              'content-theory': _contentTheory.ContentTheoryForm,
              debate: _debate.DebateForm,
              spoken: _spoken.SpokenForm,
              'multiple-choice': _multipleChoice.MultipleChoiceForm,
              'character-talk': _characterTalk.CharacterTalkForm
            };
            if (!forms[type]) console.error('No form for type', type, forms);
            const Form = forms[type];
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between mt-15 mb-15"
            }, _react.default.createElement("h3", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              ...attrs
            }, texts.actions.delete))), _react.default.createElement(Form, null), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
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

      /**************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/empty
      **************************************************/

      ims.set('./forms/multiple-choice/body/empty', {
        hash: 1107922265,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivity = EmptyActivity;
          var _react = require("react");
          var _context = require("../../../context");
          var _empty = require("../../../specs/empty");
          var _relatedActivity = require("../related-activity");
          function EmptyActivity({
            openManual
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_empty.EmptySpecs, {
              name: "multiple-choice",
              onManual: openManual,
              suggestionSpecs: {
                related: activity.specs.related
              }
            }));
          }
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/choices/answers/form
      **********************************************************************/

      ims.set('./forms/multiple-choice/body/form/choices/answers/form', {
        hash: 2774513442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../../../context");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          function AnswerForm({
            question,
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
                clear
              }
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const update = () => {
              console.log(20, activity.specs.getData());
              editData({
                specs: activity.specs.getData(),
                updated: true
              });
            };
            const onAdd = event => {
              setValue('');
              question.addOption(value);
              update();
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

      /***********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/choices/answers/index
      ***********************************************************************/

      ims.set('./forms/multiple-choice/body/form/choices/answers/index', {
        hash: 3232145774,
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
            question
          }) {
            const [correct, setCorrect] = _react.default.useState(question.correct);
            const [options, setOptions] = _react.default.useState(question.options ?? []);
            const [data, setData] = _react.default.useState(question.getData());
            (0, _hooks.useBinder)([question], () => {
              setCorrect(question.correctAnswer);
              setOptions(question.options);
              setData(question.getData());
              console.log('me disparo', question.getData());
            });
            if (!data.options.length) return null;
            return _react.default.createElement(_list.List, {
              specs: {
                question
              },
              className: "question-options__list",
              items: data.options,
              control: _item.AnswerItem
            });
          }
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/choices/answers/item
      **********************************************************************/

      ims.set('./forms/multiple-choice/body/form/choices/answers/item', {
        hash: 3663724462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          var _context = require("../../../../../../context");
          var _icons = require("pragmate-ui/icons");
          const AnswerItem = props => {
            const {
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const {
              item,
              index,
              specs: {
                question
              }
            } = props;
            const update = () => editData({
              specs: activity.specs.getData(),
              updated: true
            });
            const mark = event => {
              event.preventDefault();
              question.setCorrect(index);
              update();
            };
            const onDelete = event => {
              question.removeOption(index);
              update();
            };
            return _react.default.createElement("li", null, _react.default.createElement("span", null, item), _react.default.createElement("section", {
              className: "item-actions flex-container"
            }, question.correctAnswer === index ? _react.default.createElement(_chips.Chip, {
              icon: "check",
              sizing: "xs",
              type: "primary"
            }, texts.multipleChoice.labels.correct) : _react.default.createElement(_components.Button, {
              onClick: mark,
              icon: "info",
              bordered: true,
              sizing: "xs",
              variant: "primary"
            }, texts.multipleChoice.labels.mark), _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: onDelete
            })));
          };
          exports.AnswerItem = AnswerItem;
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/choices/item
      **************************************************************/

      ims.set('./forms/multiple-choice/body/form/choices/item', {
        hash: 3150143409,
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
            const question = specs.specs.questions[index];
            return _react.default.createElement("div", {
              className: "bullet-point__item-container"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), specs.answers && question && _react.default.createElement(_answers.OptionAnswers, {
              question: question,
              data: specs.answers,
              index: index
            }), AnswerFormVisible && _react.default.createElement(_form.AnswerForm, {
              index: index,
              question: question,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/index
      *******************************************************/

      ims.set('./forms/multiple-choice/body/form/index', {
        hash: 2619896165,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _context = require("../../../../context");
          var _icons = require("pragmate-ui/icons");
          var _manual = require("./manual");
          function MultipleChoiceForm({
            toggleManual,
            back
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onManual = () => toggleManual(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: back
            })), _react.default.createElement(_manual.ManualForm, {
              onCancel: onManual
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/manual
      ********************************************************/

      ims.set('./forms/multiple-choice/body/form/manual', {
        hash: 1585690530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _item = require("./choices/item");
          var _optionsHeader = require("../../options-header");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _useBulletPointSettings = require("../use-bullet-point-settings");
          var _saveButton = require("../../../../save-button");
          function ManualForm({
            onCancel
          }) {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const setError = _react.default.useState('')[1];
            /**
             * The useBulletPointSettings hook is a custom hook that is used to manage the state of the bullet points input.
             */
            const {
              setAnswers,
              specs,
              actionsSpecs,
              options,
              setOptions
            } = (0, _useBulletPointSettings.useBulletPointSettings)();
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
                },
                updated: true
              });
            };
            return _react.default.createElement("section", {
              className: "activity__materials-form"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: options,
              Item: _item.ItemOption,
              specs: specs,
              handleChange: handleChange,
              fieldName: "questions"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)), _react.default.createElement("footer", {
              className: "flex flex-container mt-15 flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/list
      *************************************************/

      ims.set('./forms/multiple-choice/body/list', {
        hash: 4059176057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceList = MultipleChoiceList;
          var _react = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _icons = require("pragmate-ui/icons");
          var _questionItemList = require("./question-item-list");
          function MultipleChoiceList() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [, setEditOptionSpecs] = _react.default.useState(false);
            const edit = () => setEditOptionSpecs(true);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: edit
            })), _react.default.createElement(_list.List, {
              className: "specs__items-list",
              items: values.specs.questions,
              specs: {},
              control: _questionItemList.QuestionItemList
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/question-item-list
      ***************************************************************/

      ims.set('./forms/multiple-choice/body/question-item-list', {
        hash: 3704646287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionItemList = QuestionItemList;
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          function QuestionItemList({
            data
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
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
            }, _react.default.createElement("h5", null, data.question), data.options.length ? _react.default.createElement(_list.List, {
              items: data.options,
              control: Answers
            }) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", {
              className: "text-muted"
            }, texts.multipleChoice.emptyOptions)));
          }
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/use-bullet-point-settings
      **********************************************************************/

      ims.set('./forms/multiple-choice/body/use-bullet-point-settings', {
        hash: 2405428929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPointSettings = useBulletPointSettings;
          var _core = require("@beyond-js/kernel/core");
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../context");
          /**
           *
           * @param activity
           * @param texts
           * @returns
           */
          function useBulletPointSettings() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState(activity.specs.questionLabels ?? []);
            const [addAnswer, setAddAnswer] = _react.default.useState(false);
            const [answers, setAnswers] = _react.default.useState({});
            const [, setUpdate] = _react.default.useState({});
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
            const actionsSpecs = {
              answers: {
                //@ts-ignore
                icon: _icons.ICONS.aiStars,
                title: texts.actions.generateAnswers,
                onClick: async (event, index, data) => {
                  const promise = new _core.PendingPromise();
                  if (!activity.specs.questions[index]) {
                    console.error('the question is not defined', index);
                    return;
                  }
                  const options = await activity.specs.questions[index].generateAnswers();
                  console.log(5, {
                    ...answers,
                    ...options
                  });
                  setAnswers({
                    ...answers,
                    ...options
                  });
                  promise.resolve();
                  // await activity.specs.generateAnswers(specs);
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
            return {
              actionsSpecs,
              specs,
              answers,
              setAnswers,
              options,
              setOptions
            };
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/multiple-choice/header
      **********************************************/

      ims.set('./forms/multiple-choice/header', {
        hash: 125051230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          function Header({
            specsEdition,
            setSpecsEdition
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const toggle = () => setSpecsEdition(!specsEdition);
            const icon = specsEdition ? 'backArrow' : 'edit';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.questions.title), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: toggle
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/multiple-choice/index
      *********************************************/

      ims.set('./forms/multiple-choice/index', {
        hash: 2130336022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _manual = require("./body/form/manual");
          var _header = require("./header");
          var _empty = require("./body/empty");
          var _questionItemList = require("./body/question-item-list");
          var _list = require("pragmate-ui/list");
          function MultipleChoiceForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [specsEdition, setSpecsEdition] = _react.default.useState(false);
            const closeManual = () => {
              setManual(false);
              setSpecsEdition(false);
            };
            const openManual = () => setManual(true);
            const onBinder = () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            };
            (0, _hooks.useBinder)([activity.specs], onBinder, 'specs.generated');
            if (manualForm) return _react.default.createElement(_manual.ManualForm, {
              onCancel: closeManual
            });
            if (!values.specs?.questions?.length) return _react.default.createElement(_empty.EmptyActivity, {
              openManual: openManual
            });
            return _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement(_header.Header, {
              specsEdition: specsEdition,
              setSpecsEdition: setSpecsEdition
            }), specsEdition ? _react.default.createElement(_manual.ManualForm, {
              onCancel: closeManual
            }) : _react.default.createElement(_list.List, {
              className: "specs__items-list",
              items: values.specs.questions,
              specs: {},
              control: _questionItemList.QuestionItemList
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./forms/multiple-choice/options-header
      ******************************************************/

      ims.set('./forms/multiple-choice/options-header', {
        hash: 1129316472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          function BulletPointsHeader({
            refineAction = true
          }) {
            const {
              itemsType,
              texts
            } = (0, _context.useModuleContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const onClick = () => console.log('questions');
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), refineAction && _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: onClick
            }, texts.actions.generate));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/related-activity
      ********************************************************/

      ims.set('./forms/multiple-choice/related-activity', {
        hash: 3862189923,
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
            let defaultValue = {
              value: 'n/a',
              label: texts.related.independent
            };
            let related = undefined;
            if (activity.specs.related !== undefined) {
              const selected = store.model.activities.items[activity.specs.related];
              related = selected?.id;
            }
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
              value: related,
              options: [defaultValue, ...options],
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
        hash: 3358725844,
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
          function CriteriaField({
            onCancel = undefined
          }) {
            const {
              values,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [totalItems, setTotalItems] = _react.default.useState(values.specs?.criteria?.length || 1);
            const [items, setItems] = _react.default.useState(values.specs.criteria.length ? values.specs.criteria : [{
              name: '',
              subject: ''
            }]);
            const onAdd = () => {
              setTotalItems(totalItems + 1);
              setItems([...items, {
                name: '',
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
                  name: elements
                },
                updated: true
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
                },
                updated: true
              });
            };
            for (let i = 0; i < totalItems; ++i) {
              output.push(_react.default.createElement(_criteriaFieldItem.CriteriaFieldItem, {
                onChange: onChangeItem,
                total: totalItems,
                item: items[i],
                onDelete: onDelete,
                key: `name-${i}`,
                index: i
              }));
            }
            return _react.default.createElement("section", {
              className: "form__subsection"
            }, output, _react.default.createElement("footer", {
              className: "actions flex-container flex-05 flex-end"
            }, onCancel && _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onAdd
            }, texts.actions.add)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/spoken/criteria-form
      ********************************************/

      ims.set('./forms/spoken/criteria-form', {
        hash: 1190605705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenCriteriaForm = SpokenCriteriaForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _criteriaField = require("./criteria-field");
          var _saveButton = require("../../save-button");
          function SpokenCriteriaForm({
            onCancel
          }) {
            const {
              values,
              texts
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onModalCancel = () => setShowCanceLModal(false);
            const disabled = !values.specs.task || !values.specs.assessment || !values.specs.criteria?.length;
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
            return _react.default.createElement(_form.Form, null, _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel,
              disabled: disabled
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/spoken/criteria-item
      ********************************************/

      ims.set('./forms/spoken/criteria-item', {
        hash: 1299847821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaItem = CriteriaItem;
          var _react = require("react");
          function CriteriaItem({
            data
          }) {
            return _react.default.createElement("div", {
              className: "subform__items"
            }, _react.default.createElement("strong", {
              className: "capitalize"
            }, data.name, ": "), " ", _react.default.createElement("span", null, data.subject));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./forms/spoken/form
      ***********************************/

      ims.set('./forms/spoken/form', {
        hash: 3296238602,
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
              texts
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
                },
                updated: true
              });
            };
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
            const disabled = !values.specs.task || !values.specs.assessment || !values.specs.criteria?.length;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              label: texts.specs.task.label,
              value: values.specs.task,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              label: texts.specs.assessment.label,
              value: values.specs.assessment,
              placeholder: texts.specs.assessment.placeholder,
              name: "assessment"
            }), _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel,
              disabled: disabled
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 3832513305,
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
          var _criteriaItem = require("./criteria-item");
          var _criteriaForm = require("./criteria-form");
          function SpokenForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [editCriteria, setEditCriteria] = _react.default.useState(false);
            const toggleCriteria = () => setEditCriteria(!editCriteria);
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
              onClick: toggleCriteria
            })), editCriteria ? _react.default.createElement(_criteriaForm.SpokenCriteriaForm, {
              onCancel: toggleCriteria
            }) : _react.default.createElement(_list.List, {
              className: "criteria__items-list",
              items: values.specs.criteria,
              specs: {},
              control: _criteriaItem.CriteriaItem
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2946892368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _coverImage = require("./components/cover-image");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          /*bundle*/
          function PageHeader({
            breadcrumb
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-module__container  flex-container flex-space-between`;
            const onSave = async event => await activity.save({
              title: event.target.value
            });
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: breadcrumb
            }), _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement("div", {
              className: "header__title-container"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
              onSave: onSave
            }, activity.title)), _react.default.createElement(_coverImage.CoverImage, null))), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
              show: showSuggestions,
              type: activity.type,
              onClose: toggleSuggestions
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 404384315,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _objective = require("./specs/objective");
          var _forms = require("./forms");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          /* bundle */
          function ModuleActivityForm({
            breadcrumb,
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
            const editData = data => {
              const finalData = {
                ...values,
                ...data
              };
              setValues(finalData);
            };
            const clearData = () => {
              activity.materials.clear();
              setValues(activity.getData());
            };
            //TODO: remove this line
            globalThis.activity = activity;
            if (!itemsType) throw new Error(`the activity type ${type} is not supported`);
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
                clearData,
                updated: values.updated,
                editData,
                currentTab,
                setCurrentTab,
                itemsType
              }
            }, _react.default.createElement(_header.PageHeader, {
              breadcrumb: breadcrumb
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
              type: type
            })));
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
        hash: 3780228212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SaveButton = SaveButton;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          function SaveButton({
            disabled,
            callback
          }) {
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
              if (callback) callback();
            };
            const attrs = {
              disabled: !values.updated || disabled,
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
        hash: 3273638513,
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
              await activity.save({
                specs: {
                  ...values.specs,
                  [name]: value
                }
              });
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
        hash: 969248757,
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
          /**
           *
           * @param props.suggestionsSpecs The suggestions specs param is used for activities with has custom parameters
           * such as  the multiple choice wich can receives a related id.
           * @returns
           */
          function EmptySpecs({
            name,
            onManual,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const disabled = {
              disabled: !activity.prepared
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...disabled,
              onClick: toggleShow,
              variant: "primary"
            }, texts.actions.inspiration)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            })), showSuggestions && _react.default.createElement(_specsModal.SpecsSuggestionsModal, {
              type: name,
              onClose: toggleShow,
              suggestionSpecs: suggestionSpecs
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/objective
      *********************************/

      ims.set('./specs/objective', {
        hash: 164755996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /**
           * The ActivityObjectiveSpecs component is used to display the objective of the activity.
           * The description of the activity is also displayed, this is not a specs property, but uses the
           * same style and has the same behavior as the specs properties.
           *
           * @returns
           */
          function ActivityObjectiveSpecs() {
            const {
              values,
              texts,
              activity,
              editData,
              store
            } = (0, _context.useModuleContext)();
            const saveEditable = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              await activity.set({
                [name]: value
              });
              await store.save();
            };
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              await activity.set({
                specs: {
                  [name]: value
                }
              });
              await store.save();
            };
            const value = values.specs.objective ?? texts.specs.objective.placeholder;
            if (!activity.specs.properties.includes('objective')) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.activities.description), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, activity.description)), _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.specs.objective.label), _react.default.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, value)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./forms/content-theory/AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./forms/multiple-choice/body/form/choices/answers/index",
        "from": "OptionAnswers",
        "name": "OptionAnswers"
      }, {
        "im": "./forms/multiple-choice/body/form/choices/item",
        "from": "ItemOption",
        "name": "ItemOption"
      }, {
        "im": "./header",
        "from": "PageHeader",
        "name": "PageHeader"
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
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./forms/multiple-choice/body/form/choices/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./forms/multiple-choice/body/form/choices/item').ItemOption : value);
        (require || prop === 'PageHeader') && _export("PageHeader", PageHeader = require ? require('./header').PageHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJvbkNvbmZpcm0iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwib25DbGljayIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsImFjdGlvbnMiLCJiYWNrIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsImJvcmRlcmVkIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwib25DbG9zZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJfdWkiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJ0b2dnbGVNb2RhbCIsIkFJQnV0dG9uIiwiQUlJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJSZWZpbmVtZW50TW9kYWwiLCJwaWN0dXJlIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0T3BlbkNvbmZpcm0iLCJzdWJ0aXRsZSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIl9ob29rcyIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfZXJyb3IiLCJfY29uZmlybSIsInNldEVycm9yIiwic2V0VmFsdWVzIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJtZXNzYWdlIiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsIkZvcm0iLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJJY29uIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3VnZ2VzdGlvblNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwiRGViYXRlRm9ybSIsInN1YmplY3QiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsInRvZ2dsZU1hbnVhbCIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0QW5zd2VycyIsImFjdGlvbnNTcGVjcyIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJtYXAiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsImNhbGxiYWNrIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYnJlYWRjcnVtYiIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiaW5zcGlyYXRpb24iLCJvYmplY3RpdmUiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWhlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2NvbmZpcm0udHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxnQkFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssWUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sY0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsT0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsV0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsUUFBQSxHQUFBVixPQUFBO1VBRU0sU0FBVVcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxPQUFPO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElBQUFqQixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUMzRixNQUFNQyxZQUFZLEdBQUdBLENBQUM7Y0FBRUMsSUFBSTtjQUFFQztZQUFLLENBQUUsS0FBS1QsUUFBUSxDQUFDO2NBQUUsQ0FBQ1EsSUFBSSxHQUFHQztZQUFLLENBQUUsQ0FBQztZQUNyRSxNQUFNLENBQUNDLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3pCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUNDLGVBQWUsRUFBRUMsa0JBQWtC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