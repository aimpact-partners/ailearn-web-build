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
        hash: 51871388,
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
            console.log(0.1, activity.picture);
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
        hash: 3895958283,
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

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 3120782026,
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
          function BreadCrumbHeader({
            setShowBackModal
          }) {
            const {
              values,
              activity,
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onBack = () => {
              if (values.updated) {
                setShowBackModal(true);
                return;
              }
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
        hash: 1931982603,
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
        hash: 777246845,
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
        hash: 941922273,
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
          var _criteriaItem = require("./criteria-item");
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
            })), editCriteria ? _react.default.createElement(_criteriaField.CriteriaField, {
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
        hash: 3774390826,
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
          var _cancelModal = require("./components/cancel-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          /*bundle*/
          function PageHeader({
            breadcrumb
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [showBackModal, setShowBackModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onCloseModal = () => setShowBackModal(false);
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
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, {
              setShowBackModal: setShowBackModal
            }), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
              onSave: onSave
            }, activity.title)), _react.default.createElement(_coverImage.CoverImage, null))), _react.default.createElement(_cancelModal.CancelChangesModal, {
              show: showBackModal,
              onClose: onCloseModal
            }), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJvbkNvbmZpcm0iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwib25DbGljayIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsImFjdGlvbnMiLCJiYWNrIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsImJvcmRlcmVkIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwib25DbG9zZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJfdWkiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJ0b2dnbGVNb2RhbCIsIkFJQnV0dG9uIiwibG9nIiwicGljdHVyZSIsIkFJSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwiUmVmaW5lbWVudE1vZGFsIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0T3BlbkNvbmZpcm0iLCJzdWJ0aXRsZSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIl9ob29rcyIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfZXJyb3IiLCJfY29uZmlybSIsInNldEVycm9yIiwic2V0VmFsdWVzIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJtZXNzYWdlIiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsIkZvcm0iLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJJY29uIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3VnZ2VzdGlvblNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwiRGViYXRlRm9ybSIsInN1YmplY3QiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsInRvZ2dsZU1hbnVhbCIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0QW5zd2VycyIsImFjdGlvbnNTcGVjcyIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJtYXAiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsImNhbGxiYWNrIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJDcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbk1hbnVhbEZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIl9jcml0ZXJpYUl0ZW0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJOYXZiYXJIZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiZmluYWxEYXRhIiwiRXJyb3IiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJpbnNwaXJhdGlvbiIsIm9iamVjdGl2ZSIsInByb3BlcnRpZXMiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktaGVhZGVyLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvY29uZmlybS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLGdCQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxZQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxjQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxPQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxXQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxRQUFBLEdBQUFWLE9BQUE7VUFFTSxTQUFVVyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDLE9BQU87Y0FBRUM7WUFBUyxDQUFFLEdBQUcsSUFBQWpCLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzNGLE1BQU1DLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxJQUFJO2NBQUVDO1lBQUssQ0FBRSxLQUFLVCxRQUFRLENBQUM7Y0FBRSxDQUFDUSxJQUFJLEdBQUdDO1lBQUssQ0FBRSxDQUFDO1lBQ3JFLE1BQU0sQ0FBQ0MsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHekIsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQ0MsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN0IsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1HLEtBQUssR0FBRyxDQUFDQyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNuQixNQUFNLENBQUNpQixLQUFLLENBQUMsR0FBR2YsS0FBSyxDQUFDa0IsVUFBVSxDQUFDQyxJQUFJLENBQUNKLEtBQUssR0FBR2pCLE1BQU0sQ0FBQ2lCLEtBQUs7WUFDdkcsTUFBTUssV0FBVyxHQUFHLENBQUNKLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ25CLE1BQU0sQ0FBQ3NCLFdBQVcsQ0FBQyxHQUNuRXBCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLEdBQ2pDdEIsTUFBTSxDQUFDc0IsV0FBVztZQUVyQixNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBTVgsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ2xELE1BQU1ZLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUl4QixNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJPLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDdEI7O2NBR0RkLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQnZCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ0MsRUFBRSxFQUFFLENBQUM7Y0FDN0R6QixLQUFLLENBQUMwQixZQUFZLEdBQUdYLFNBQVM7WUFDL0IsQ0FBQztZQUNELE1BQU1ZLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCeEIsU0FBUyxFQUFFO2NBQ1hILEtBQUssQ0FBQzBCLFlBQVksR0FBR1gsU0FBUztjQUM5QkssWUFBWSxFQUFFO1lBQ2YsQ0FBQztZQUVELE9BQ0NwQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsa0JBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5RSxHQUN2RjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBMkMsSUFBSTtjQUFDRCxTQUFTLEVBQUMsV0FBVztjQUFDRSxPQUFPLEVBQUVYO1lBQU0sR0FDMUNyQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUEwQyxVQUFVO2NBQUNDLElBQUksRUFBQyxXQUFXO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNMLFNBQVMsRUFBQztZQUFRLEVBQUcsRUFDbkUvQixLQUFLLENBQUNxQyxPQUFPLENBQUNDLElBQUksRUFDbkJyRCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUFTN0IsS0FBSyxDQUFDa0IsVUFBVSxDQUFDcUIsTUFBTSxFLElBQVcsQ0FDckMsRUFDUHRELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWMsR0FBRS9CLEtBQUssQ0FBQ3dDLEtBQUssQ0FBQ3RDLFFBQVEsQ0FBQ3VDLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLENBQVEsQ0FDcEUsRUFDTnpDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTBCLEdBQzVDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDUCxJQUFJLEVBQUV6QyxPQUFBLENBQUFpRCxLQUFLLENBQUNDLE9BQU87Y0FBRVIsT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFDWixPQUFPLEVBQUVhO1lBQWlCLEdBQ2hGOUMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDVSxRQUFRLENBQ2YsRUFDVDlELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2xDLFdBQUEsQ0FBQXFELFVBQVUsT0FBRyxDQUNMLENBQ0wsQ0FDRyxFQUNWL0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDekMsV0FBQSxDQUFBNkQsVUFBVSxPQUFHLENBQ1QsRUFDTmhFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3ZDLGdCQUFBLENBQUE0RCxlQUFlO2NBQUMzQyxJQUFJLEVBQUMsYUFBYTtjQUFDNEMsUUFBUSxFQUFDLEdBQUc7Y0FBQ0MsTUFBTSxFQUFFOUM7WUFBWSxHQUNuRWMsV0FBVyxDQUNLLENBQ2IsRUFDTFgsYUFBYSxJQUFJeEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdEMsWUFBQSxDQUFBOEQsa0JBQWtCO2NBQUN6QixTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUM3RGYsZUFBZSxJQUFJNUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDcEMsY0FBQSxDQUFBNkQsd0JBQXdCO2NBQUNDLElBQUksRUFBRXJELFFBQVEsQ0FBQ3FELElBQUk7Y0FBRUMsT0FBTyxFQUFFVjtZQUFpQixFQUFJLENBQy9GO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVBLElBQUFXLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVbUUsa0JBQWtCQSxDQUFDO1lBQUVLLElBQUk7WUFBRUY7VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FBRTFELE1BQU07Y0FBRUksUUFBUTtjQUFFRCxLQUFLO2NBQUVELEtBQUs7Y0FBRUk7WUFBUyxDQUFFLEdBQUcsSUFBQWpCLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3hFLElBQUksQ0FBQ3FELElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTTlCLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCeEIsU0FBUyxFQUFFO2NBQ1hILEtBQUssQ0FBQzBCLFlBQVksR0FBR1gsU0FBUztjQUM5QndDLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDdkUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBRSxZQUFZO2NBQ1pELElBQUk7Y0FDSjNDLEtBQUssRUFBRWYsS0FBSyxDQUFDNEQsS0FBSyxDQUFDQyxNQUFNLENBQUM5QyxLQUFLO2NBQy9CK0MsSUFBSSxFQUFFOUQsS0FBSyxDQUFDNEQsS0FBSyxDQUFDQyxNQUFNLENBQUN6QyxXQUFXO2NBQ3BDb0MsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCTyxRQUFRLEVBQUVQLE9BQU87Y0FDakJRLFVBQVUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFakUsS0FBSyxDQUFDcUMsT0FBTyxDQUFDNkI7Y0FBTyxDQUFFO2NBQzVDQyxTQUFTLEVBQUU7Z0JBQUVGLEtBQUssRUFBRWpFLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3dCO2NBQU0sQ0FBRTtjQUMxQ2pDLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQTNDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQVVPLE1BQU1nRSxlQUFlLEdBQXFCQSxDQUFDO1lBQUUzQyxJQUFJO1lBQUU0QyxRQUFRLEVBQUVpQixPQUFPLEdBQUcsS0FBSztZQUFFckMsU0FBUztZQUFFc0MsUUFBUTtZQUFFakI7VUFBTSxDQUFFLEtBQUk7WUFDckgsTUFBTSxDQUFDa0IsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBdEYsTUFBQSxDQUFBMkIsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNNEQsVUFBVSxHQUFHLElBQUF2RixNQUFBLENBQUF3RixNQUFNLEVBQWlCLElBQUksQ0FBQztZQUUvQyxJQUFBeEYsTUFBQSxDQUFBeUYsU0FBUyxFQUFDLE1BQUs7Y0FDZCxJQUFJLE9BQU9MLFFBQVEsS0FBSyxRQUFRLElBQUlHLFVBQVUsQ0FBQ0csT0FBTyxFQUFFO2dCQUN2REgsVUFBVSxDQUFDRyxPQUFPLENBQUNDLFdBQVcsR0FBR1AsUUFBUTs7WUFFM0MsQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTVEsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJOLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FFMUJRLFVBQVUsQ0FBQyxNQUFLO2dCQUNmLE1BQU1DLEVBQUUsR0FBR1AsVUFBVSxDQUFDRyxPQUFPO2dCQUM3QixJQUFJSSxFQUFFLEVBQUU7a0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtrQkFDcEMsTUFBTUMsR0FBRyxHQUFHQyxVQUFVLENBQUNDLFlBQVksRUFBRTtrQkFDckNMLEtBQUssQ0FBQ00sa0JBQWtCLENBQUNQLEVBQUUsQ0FBQztrQkFDNUJDLEtBQUssQ0FBQ08sUUFBUSxDQUFDLEtBQUssQ0FBQztrQkFDckJKLEdBQUcsRUFBRUssZUFBZSxFQUFFO2tCQUN0QkwsR0FBRyxFQUFFTSxRQUFRLENBQUNULEtBQUssQ0FBQztrQkFDcEJELEVBQUUsQ0FBQ1csS0FBSyxFQUFFOztjQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUMxQixJQUFJO2dCQUNILE1BQU14QyxNQUFNLENBQUM7a0JBQUU3QyxJQUFJO2tCQUFFQyxLQUFLLEVBQUVnRSxVQUFVLENBQUNHLE9BQU8sRUFBRUM7Z0JBQVcsQ0FBRSxDQUFDO2dCQUM5REwsYUFBYSxDQUFDLEtBQUssQ0FBQztlQUNwQixDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNRyxHQUFHLEdBQUcsdUJBQXVCakUsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxNQUFNSSxJQUFJLEdBQUdtQyxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTTJCLFVBQVUsR0FBRzNCLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBQzVELE1BQU1yQyxPQUFPLEdBQUdxQyxVQUFVLEdBQUdxQixJQUFJLEdBQUdkLFVBQVU7WUFDOUMsT0FDQzVGLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFaUU7WUFBRyxHQUNsQi9HLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3VDLE9BQU87Y0FDUDhCLEdBQUcsRUFBRTFCLFVBQVU7Y0FDZnpDLFNBQVMsRUFBRWtFLFVBQVU7Y0FDckJFLGVBQWUsRUFBRTdCLFVBQVU7Y0FDM0I4Qiw4QkFBOEIsRUFBRTtZQUFJLEVBQ25DLEVBQ0ZuSCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUEwQyxVQUFVO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFRixPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUN2QztVQUVSLENBQUM7VUFBQ29FLE9BQUEsQ0FBQW5ELGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REYsSUFBQWpFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUVBLElBQUFvSCxnQkFBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxSCxHQUFBLEdBQUFySCxPQUFBO1VBRU0sU0FBVXNILGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVcsQ0FBRTtZQUMzRCxNQUFNO2NBQUV4RztZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV2QyxNQUFNLENBQUNzRyxTQUFTLEVBQUVDLG9CQUFvQixDQUFDLEdBQUczSCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFL0QsTUFBTWlHLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRCxvQkFBb0IsQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFFMUQsSUFBSUYsU0FBUyxFQUFFO2NBQ2QsT0FDQ3hILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQVFFLFNBQVMsRUFBQztjQUFTLEdBQzFCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBTyxRQUFRO2dCQUFDN0UsT0FBTyxFQUFFNEU7Y0FBVyxFQUFJLENBQzFCOztZQUlYZixPQUFPLENBQUNpQixHQUFHLENBQUMsR0FBRyxFQUFFN0csUUFBUSxDQUFDOEcsT0FBTyxDQUFDO1lBQ2xDLE9BQ0MvSCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFTLEdBQzFCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBVSxZQUFZO2NBQUNoRixPQUFPLEVBQUU0RSxXQUFXO2NBQUVoRSxRQUFRO1lBQUEsRUFBRyxFQUMvQzVELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ2dGLFFBQVEsRUFBRSxJQUFJO2NBQUUvRSxJQUFJLEVBQUM7WUFBUSxFQUFHLENBQ3BDLEVBQ1RsRCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN5RSxnQkFBQSxDQUFBYSxlQUFlO2NBQUN6RCxJQUFJLEVBQUVpRCxTQUFTO2NBQUV6QyxPQUFPLEVBQUUsQ0FBQyxDQUFDaEUsUUFBUSxDQUFDOEcsT0FBTztjQUFFeEQsT0FBTyxFQUFFcUQ7WUFBVyxFQUFJLENBQ3JGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUE1SCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVrSSxzQkFBc0JBLENBQUM7WUFBRTFELElBQUk7WUFBRTlCLFNBQVM7WUFBRTRCO1VBQU8sQ0FBRTtZQUNsRSxNQUFNO2NBQ0x4RCxLQUFLLEVBQUU7Z0JBQ05nSCxPQUFPLEVBQUVoSCxLQUFLO2dCQUNkcUgsTUFBTSxFQUFFO2tCQUFFQyxRQUFRLEVBQUVDO2dCQUFhLENBQUU7Z0JBQ25DbEYsT0FBTyxFQUFFbUYsV0FBVztnQkFDcEJDO2NBQWU7WUFDZixDQUNELEdBQUcsSUFBQXRJLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sR0FBR3FILGNBQWMsQ0FBQyxHQUFHekksTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWhELElBQUksQ0FBQzhDLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTUssUUFBUSxHQUFHQSxDQUFBLEtBQU0yRCxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQzVDLE1BQU1yRixPQUFPLEdBQUc7Y0FDZjZCLE9BQU8sRUFBRTtnQkFDUjlCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQjZCLEtBQUssRUFBRXVELFdBQVcsQ0FBQ3REO2VBQ25CO2NBQ0RMLE1BQU0sRUFBRTtnQkFBRUksS0FBSyxFQUFFdUQsV0FBVyxDQUFDM0QsTUFBTTtnQkFBRXpCLE9BQU8sRUFBRSxTQUFTO2dCQUFFUyxRQUFRLEVBQUU7Y0FBSTthQUN2RTtZQUNELE9BQ0M1RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFFLFlBQVk7Y0FDWi9CLFNBQVMsRUFBRUEsU0FBUztjQUNwQm1DLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjFCLE9BQU8sRUFBRUEsT0FBTztjQUNoQnFCLElBQUk7Y0FDSjNDLEtBQUssRUFBRWYsS0FBSyxDQUFDa0UsT0FBTyxDQUFDbkQsS0FBSztjQUMxQitDLElBQUksRUFBRTlELEtBQUssQ0FBQ2tFLE9BQU8sQ0FBQ3lEO1lBQVEsRUFDM0I7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQTFJLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwSSxNQUFBLEdBQUExSSxPQUFBO1VBRU0sU0FBVTJJLGFBQWFBLENBQUM7WUFBRTdILEtBQUs7WUFBRStGO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPOUcsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDK0YsTUFBQSxDQUFBRSxLQUFLO2NBQUMxRixPQUFPLEVBQUM7WUFBTyxHQUFFcEMsS0FBSyxDQUFDK0YsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQTlHLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFxSCxHQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUErSSxRQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVStELFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFaEQsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUU5QyxNQUFNLENBQUM2SCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbEosTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQzhHLE9BQU8sQ0FBQztZQUMxRCxNQUFNLENBQUNvQixRQUFRLEVBQUUxQixXQUFXLENBQUMsR0FBR3pILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFBbUgsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25JLFFBQVEsQ0FBQyxFQUFFLE1BQU1pSSxRQUFRLENBQUNqSSxRQUFRLENBQUM4RyxPQUFPLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztZQUUxRSxPQUNDL0gsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBd0IsR0FDckM3QixRQUFRLENBQUM4RyxPQUFPLElBQUkvSCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNtRyxNQUFBLENBQUFNLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFTDtZQUFLLEVBQUksRUFDMUNqSixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNvRyxRQUFBLENBQUF6QixpQkFBaUI7Y0FBQ0UsV0FBVyxFQUFFQSxXQUFXO2NBQUVELFNBQVMsRUFBRSxDQUFDLENBQUN2RyxRQUFRLENBQUM4RztZQUFPLEVBQUksRUFDOUUvSCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFpQyxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQW5KLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUF3SixNQUFBLEdBQUF4SixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFFTSxTQUFVaUksZUFBZUEsQ0FBQztZQUFFekQsSUFBSTtZQUFFUSxPQUFPO1lBQUVWO1VBQU8sQ0FBRTtZQUN6RCxNQUFNO2NBQ0x0RCxRQUFRO2NBQ1JELEtBQUs7Y0FDTEQsS0FBSyxFQUFFO2dCQUNOZ0gsT0FBTyxFQUFFaEgsS0FBSztnQkFDZHFILE1BQU0sRUFBRTtrQkFBRUMsUUFBUSxFQUFFQztnQkFBYSxDQUFFO2dCQUNuQ2xGLE9BQU8sRUFBRW1GLFdBQVc7Z0JBQ3BCQztjQUFlO1lBQ2YsQ0FDRCxHQUFHLElBQUF0SSxRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUMrSCxRQUFRLEVBQUUxQixXQUFXLENBQUMsR0FBR3pILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNtRixLQUFLLEVBQUU2QyxRQUFRLENBQUMsR0FBRzNKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQzFDLE1BQU0sQ0FBQ2QsTUFBTSxFQUFFK0ksU0FBUyxDQUFDLEdBQUc1SixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ2tJLEtBQUssRUFBRTVJLFFBQVEsQ0FBQzZJLGtCQUFrQjtjQUNsQ0MsVUFBVSxFQUFFO2FBQ1osQ0FBQztZQUNGLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFdkIsY0FBYyxDQUFDLEdBQUd6SSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsSUFBSSxDQUFDOEMsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNd0YsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRXZELEtBQUssSUFBRztnQkFDakJpRCxTQUFTLENBQUM7a0JBQ1QsR0FBRy9JLE1BQU07a0JBQ1QsQ0FBQzhGLEtBQUssQ0FBQ3dELGFBQWEsQ0FBQzdJLElBQUksR0FBR3FGLEtBQUssQ0FBQ3dELGFBQWEsQ0FBQzVJO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEeUIsT0FBTyxFQUFFLE1BQU0yRCxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0g4QixjQUFjLENBQUMsS0FBSyxDQUFDO2tCQUNyQmhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU14RyxRQUFRLENBQUNtSixlQUFlLENBQUN2SixNQUFNLENBQUNnSixLQUFLLENBQUM7a0JBQzVDdEYsT0FBTyxFQUFFO2lCQUNULENBQUMsT0FBT3FDLENBQUMsRUFBRTtrQkFDWCtDLFFBQVEsQ0FBQy9DLENBQUMsQ0FBQ3lELE9BQU8sQ0FBQztpQkFDbkIsU0FBUztrQkFDVDVDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O2NBRXBCO2FBQ0E7WUFFRCxNQUFNNkMsYUFBYSxHQUFHQSxDQUFBLEtBQU03QixjQUFjLENBQUMsQ0FBQ3VCLFdBQVcsQ0FBQztZQUN4RCxNQUFNTyxhQUFhLEdBQUd0RixPQUFPLEdBQUdxRixhQUFhLEdBQUdMLE1BQU0sQ0FBQ2pILE9BQU87WUFFOUQsT0FDQ2hELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQWdHLEtBQUs7Y0FBQy9GLElBQUk7Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUN5QixPQUFPLEVBQUVBO1lBQU8sR0FDcER2RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZSxLQUFLLENBQU0sRUFDdEI5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUMySCxRQUFRLENBQVEsQ0FDckIsRUFDVDFJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWlCLElBQUksUUFDSnpLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzZHLE1BQUEsQ0FBQWIsYUFBYTtjQUFDN0gsS0FBSyxFQUFFQSxLQUFLO2NBQUUrRixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3QzlHLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWtCLFFBQVE7Y0FDUnBKLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRVYsTUFBTSxDQUFDZ0osS0FBSztjQUNuQkssUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJsRixLQUFLLEVBQUVzRCxhQUFhLENBQUN0RCxLQUFLO2NBQzFCMkYsV0FBVyxFQUFFckMsYUFBYSxDQUFDcUM7WUFBVyxFQUNyQyxDQUNJLEVBRVAzSyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQU8sUUFBUTtjQUFDMUUsT0FBTyxFQUFDLFNBQVM7Y0FBQzhFLFFBQVEsRUFBRSxDQUFDcEgsTUFBTSxDQUFDZ0osS0FBSztjQUFFN0csT0FBTyxFQUFFdUg7WUFBYSxHQUN6RWhDLFdBQVcsQ0FBQ0gsTUFBTSxDQUNULENBQ0gsRUFDVHBJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhHLFFBQUEsQ0FBQXZCLHNCQUFzQjtjQUFDMUQsSUFBSSxFQUFFdUYsV0FBVztjQUFFekYsT0FBTyxFQUFFK0YsYUFBYTtjQUFFM0gsU0FBUyxFQUFFc0gsTUFBTSxDQUFDakg7WUFBTyxFQUFJLEVBQ2hHaEQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBaUMsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ25KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQXNELGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFdEM7WUFBZSxFQUFJLENBQ3ZDLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQXhJLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFFQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVvRSx3QkFBd0JBLENBQUM7WUFBRUksSUFBSTtZQUFFSCxJQUFJO1lBQUVDO1VBQU8sQ0FBRTtZQUMvRCxNQUFNO2NBQUV4RCxLQUFLO2NBQUVFLFFBQVE7Y0FBRUg7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDK0gsUUFBUSxFQUFFMUIsV0FBVyxDQUFDLEdBQUd6SCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDZCxNQUFNLEVBQUUrSSxTQUFTLENBQUMsR0FBRzVKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQzFDb0osWUFBWSxFQUFFLEVBQUU7Y0FDaEJDLFdBQVcsRUFBRSxLQUFLO2NBQ2xCMUc7YUFDQSxDQUFDO1lBRUYsSUFBSSxDQUFDRyxJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLE1BQU13RixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkQsS0FBSyxJQUFHO2dCQUNqQmlELFNBQVMsQ0FBQztrQkFDVCxHQUFHL0ksTUFBTTtrQkFDVCxDQUFDOEYsS0FBSyxDQUFDd0QsYUFBYSxDQUFDN0ksSUFBSSxHQUFHcUYsS0FBSyxDQUFDd0QsYUFBYSxDQUFDNUk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTTJELEtBQUssSUFBRztnQkFDdEJjLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU13RCxJQUFJLEdBQUcsTUFBTWhLLFFBQVEsQ0FBQzZDLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFekQsTUFBTSxDQUFDa0ssWUFBWSxDQUFDO2dCQUMvRGpLLFFBQVEsQ0FBQztrQkFBRSxHQUFHbUssSUFBSTtrQkFBRS9KLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7Z0JBQ3JDcUQsT0FBTyxFQUFFO2dCQUNUc0IsVUFBVSxDQUFDLE1BQU00QixXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQzNDO2FBQ0E7WUFFRCxPQUNDekgsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBZ0csS0FBSztjQUFDL0YsSUFBSTtjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQ3lCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHZFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWlCLElBQUksUUFDSnpLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUNxSCxNQUFNLENBQUN0RyxLQUFLLENBQU0sRUFDN0I5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUNxSCxNQUFNLENBQUNqRyxXQUFXLENBQVEsQ0FDL0IsRUFDVG5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWtCLFFBQVE7Y0FDUjFGLEtBQUssRUFBRWpFLEtBQUssQ0FBQ3FILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDckQsS0FBSztjQUNsQzFELElBQUksRUFBQyxjQUFjO2NBQ25CQyxLQUFLLEVBQUVWLE1BQU0sQ0FBQ2tLLFlBQVk7Y0FDMUJiLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCUyxXQUFXLEVBQUU1SixLQUFLLENBQUNxSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3NDO1lBQVcsRUFDN0MsQ0FDSSxFQUVQM0ssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNILE9BQU8sRUFBRWlILE1BQU0sQ0FBQ2pIO1lBQU8sR0FDL0NqQyxLQUFLLENBQUNxQyxPQUFPLENBQUNVLFFBQVEsQ0FDZixDQUNELEVBQ1Q5RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFpQyxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DbkosTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBc0QsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUUvSixLQUFLLENBQUNtSztZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQWxMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUVNLFNBQVVrTCxnQkFBZ0JBLENBQUM7WUFBRTFKO1VBQWdCLENBQUU7WUFDcEQsTUFBTTtjQUFFWixNQUFNO2NBQUVJLFFBQVE7Y0FBRUQsS0FBSztjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUU3RCxNQUFNaUIsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkIsSUFBSXhCLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFO2dCQUNuQk8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN0Qjs7Y0FHRGQsUUFBQSxDQUFBMkIsT0FBTyxDQUFDQyxTQUFTLENBQUMsMEJBQTBCdkIsS0FBSyxDQUFDd0IsS0FBSyxDQUFDQyxFQUFFLEVBQUUsQ0FBQztjQUM3RHpCLEtBQUssQ0FBQzBCLFlBQVksR0FBR1gsU0FBUztZQUMvQixDQUFDO1lBRUQsT0FDQy9CLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBMkMsSUFBSTtjQUFDRCxTQUFTLEVBQUMsV0FBVztjQUFDRSxPQUFPLEVBQUVYO1lBQU0sR0FDMUNyQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUE2SyxJQUFJO2NBQUNsSSxJQUFJLEVBQUMsV0FBVztjQUFDSixTQUFTLEVBQUM7WUFBUSxFQUFHLEVBQzVDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxlQUNFN0IsS0FBSyxDQUFDcUMsT0FBTyxDQUFDQyxJQUFJLEUsT0FBS3RDLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ3FCLE1BQU0sQ0FDekMsQ0FDRCxFQUNQdEQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBMkMsSUFBSSxRQUNKL0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBYyxHQUFFL0IsS0FBSyxDQUFDd0MsS0FBSyxDQUFDdEMsUUFBUSxDQUFDdUMsUUFBUSxDQUFDZixFQUFFLENBQUMsQ0FBUSxDQUNuRSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUF6QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF1SixLQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQXFILEdBQUEsR0FBQXJILE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVb0wseUJBQXlCQSxDQUFDO1lBQUUvRyxJQUFJO1lBQUVDO1VBQU8sQ0FBRTtZQUMxRCxNQUFNO2NBQUV4RCxLQUFLO2NBQUVFLFFBQVE7Y0FBRUg7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDK0gsUUFBUSxFQUFFMUIsV0FBVyxDQUFDLEdBQUd6SCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDZCxNQUFNLEVBQUUrSSxTQUFTLENBQUMsR0FBRzVKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQzFDa0ksS0FBSyxFQUFFLEVBQUU7Y0FDVG1CLFdBQVcsRUFBRSxLQUFLO2NBQ2xCMUc7YUFDQSxDQUFDO1lBRUYsTUFBTTJGLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV2RCxLQUFLLElBQUc7Z0JBQ2pCaUQsU0FBUyxDQUFDO2tCQUNULEdBQUcvSSxNQUFNO2tCQUNULENBQUM4RixLQUFLLENBQUN3RCxhQUFhLENBQUM3SSxJQUFJLEdBQUdxRixLQUFLLENBQUN3RCxhQUFhLENBQUM1STtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRHlCLE9BQU8sRUFBRSxNQUFNMkQsS0FBSyxJQUFHO2dCQUN0QmMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTXhHLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ3hILFFBQVEsQ0FBQ1EsSUFBSSxFQUFFekQsTUFBTSxDQUFDZ0osS0FBSyxDQUFDO2dCQUNyRC9JLFFBQVEsQ0FBQztrQkFBRXdLLFNBQVMsRUFBRTtvQkFBRSxHQUFHckssUUFBUSxDQUFDcUs7a0JBQVMsQ0FBRTtrQkFBRUMsS0FBSyxFQUFFO29CQUFFLEdBQUd0SyxRQUFRLENBQUNzSztrQkFBSztnQkFBRSxDQUFFLENBQUM7Z0JBQ2hGaEgsT0FBTyxFQUFFO2dCQUVUc0IsVUFBVSxDQUFDLE1BQUs7a0JBQ2Y0QixXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0N6SCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFnRyxLQUFLO2NBQUMvRixJQUFJO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDeUIsT0FBTyxFQUFFQTtZQUFPLEdBQ3BEdkUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBaUIsSUFBSSxRQUNKekssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxpQkFDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ3FILE1BQU0sQ0FBQ3RHLEtBQUssQ0FBTSxFQUM3QjlCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsZUFBTzdCLEtBQUssQ0FBQ3FILE1BQU0sQ0FBQ2pHLFdBQVcsQ0FBUSxDQUMvQixFQUVUbkMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBa0IsUUFBUTtjQUNSMUYsS0FBSyxFQUFFakUsS0FBSyxDQUFDcUgsTUFBTSxDQUFDQyxRQUFRLENBQUNyRCxLQUFLO2NBQ2xDMUQsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFVixNQUFNLENBQUNnSixLQUFLO2NBQ25CSyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFNUosS0FBSyxDQUFDcUgsTUFBTSxDQUFDQyxRQUFRLENBQUNzQztZQUFXLEVBQzdDLENBQ0ksRUFFUDNLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDSCxPQUFPLEVBQUVpSCxNQUFNLENBQUNqSDtZQUFPLEdBQy9DakMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDVSxRQUFRLENBQ2YsQ0FDRCxFQUNUOUQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBaUMsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ25KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQXNELGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFL0osS0FBSyxDQUFDbUs7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFsTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF1SixLQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQXFILEdBQUEsR0FBQXJILE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVdUwscUJBQXFCQSxDQUFDO1lBQUVsSCxJQUFJO1lBQUVDLE9BQU87WUFBRWtILGVBQWUsR0FBRztVQUFFLENBQUU7WUFDNUUsTUFBTTtjQUFFMUssS0FBSztjQUFFRTtZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUMrSCxRQUFRLEVBQUUxQixXQUFXLENBQUMsR0FBR3pILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNkLE1BQU0sRUFBRStJLFNBQVMsQ0FBQyxHQUFHNUosTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FDMUNrSSxLQUFLLEVBQUUsRUFBRTtjQUNUbUIsV0FBVyxFQUFFLEtBQUs7Y0FDbEIxRzthQUNBLENBQUM7WUFFRixNQUFNMkYsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRXZELEtBQUssSUFBRztnQkFDakJpRCxTQUFTLENBQUM7a0JBQ1QsR0FBRy9JLE1BQU07a0JBQ1QsQ0FBQzhGLEtBQUssQ0FBQ3dELGFBQWEsQ0FBQzdJLElBQUksR0FBR3FGLEtBQUssQ0FBQ3dELGFBQWEsQ0FBQzVJO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEeUIsT0FBTyxFQUFFLE1BQU0yRCxLQUFLLElBQUc7Z0JBQ3RCYyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNeEcsUUFBUSxDQUFDc0ssS0FBSyxDQUFDekgsUUFBUSxDQUFDUSxJQUFJLEVBQUU7a0JBQ25DLEdBQUdtSCxlQUFlO2tCQUNsQjVCLEtBQUssRUFBRWhKLE1BQU0sQ0FBQ2dKO2lCQUNkLENBQUM7Z0JBQ0Z0RixPQUFPLEVBQUU7Z0JBQ1RzQixVQUFVLENBQUMsTUFBSztrQkFDZjRCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ3pILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQWdHLEtBQUs7Y0FBQy9GLElBQUk7Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUN5QixPQUFPLEVBQUVBO1lBQU8sR0FDcER2RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFpQixJQUFJLFFBQ0p6SyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDcUgsTUFBTSxDQUFDdEcsS0FBSyxDQUFNLEVBQzdCOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxlQUFPN0IsS0FBSyxDQUFDcUgsTUFBTSxDQUFDakcsV0FBVyxDQUFRLENBQy9CLEVBRVRuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFrQixRQUFRO2NBQ1IxRixLQUFLLEVBQUVqRSxLQUFLLENBQUNxSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3JELEtBQUs7Y0FDbEMxRCxJQUFJLEVBQUMsT0FBTztjQUNaQyxLQUFLLEVBQUVWLE1BQU0sQ0FBQ2dKLEtBQUs7Y0FDbkJLLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCUyxXQUFXLEVBQUU1SixLQUFLLENBQUNxSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3NDO1lBQVcsRUFDN0MsQ0FDSSxFQUVQM0ssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNILE9BQU8sRUFBRWlILE1BQU0sQ0FBQ2pIO1lBQU8sR0FDL0NqQyxLQUFLLENBQUNxQyxPQUFPLENBQUNVLFFBQVEsQ0FDZixDQUNELEVBQ1Q5RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFpQyxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DbkosTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBc0QsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUUvSixLQUFLLENBQUNtSztZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQWxMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV5TCxlQUFlQSxDQUFDO1lBQUVwSCxJQUFJO1lBQUVDO1VBQU8sQ0FBRTtZQUNoRCxNQUFNO2NBQUV4RCxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQytILFFBQVEsRUFBRTFCLFdBQVcsQ0FBQyxHQUFHekgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2QsTUFBTSxFQUFFK0ksU0FBUyxDQUFDLEdBQUc1SixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ29KLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQjFHO2FBQ0EsQ0FBQztZQUVGLE1BQU0yRixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkQsS0FBSyxJQUFHO2dCQUNqQmlELFNBQVMsQ0FBQztrQkFDVCxHQUFHL0ksTUFBTTtrQkFDVCxDQUFDOEYsS0FBSyxDQUFDd0QsYUFBYSxDQUFDN0ksSUFBSSxHQUFHcUYsS0FBSyxDQUFDd0QsYUFBYSxDQUFDNUk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTTJELEtBQUssSUFBRztnQkFDdEJjLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU14RyxRQUFRLENBQUNzSyxLQUFLLENBQUN6SCxRQUFRLENBQUNRLElBQUksRUFBRXpELE1BQU0sQ0FBQ2tLLFlBQVksQ0FBQztnQkFDeER4RyxPQUFPLEVBQUU7Z0JBRVRzQixVQUFVLENBQUMsTUFBSztrQkFDZjRCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ3pILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQWdHLEtBQUs7Y0FBQy9GLElBQUk7Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUN5QixPQUFPLEVBQUVBO1lBQU8sR0FDcER2RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFpQixJQUFJLFFBQ0p6SyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDcUgsTUFBTSxDQUFDdEcsS0FBSyxDQUFNLEVBQzdCOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxlQUFPN0IsS0FBSyxDQUFDcUgsTUFBTSxDQUFDakcsV0FBVyxDQUFRLENBQy9CLEVBRVRuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFrQixRQUFRO2NBQ1IxRixLQUFLLEVBQUVqRSxLQUFLLENBQUNxSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3JELEtBQUs7Y0FDbEMxRCxJQUFJLEVBQUMsY0FBYztjQUNuQkMsS0FBSyxFQUFFVixNQUFNLENBQUNrSyxZQUFZO2NBQzFCYixRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFNUosS0FBSyxDQUFDcUgsTUFBTSxDQUFDQyxRQUFRLENBQUNzQztZQUFXLEVBQzdDLENBQ0ksRUFFUDNLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDSCxPQUFPLEVBQUVpSCxNQUFNLENBQUNqSDtZQUFPLEdBQy9DakMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDVSxRQUFRLENBQ2YsQ0FDRCxFQUNUOUQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBaUMsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ25KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQXNELGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFL0osS0FBSyxDQUFDbUs7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUFsTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEwsWUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVUyTCxjQUFjQSxDQUFDO1lBQUUvSyxNQUFNO1lBQUUrSTtVQUFTLENBQUU7WUFDbkQsTUFBTTtjQUFFM0ksUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBZCxRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxJQUFJeUssWUFBWSxHQUFHO2NBQUV0SyxLQUFLLEVBQUUsRUFBRTtjQUFFeUQsS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUNqRCxNQUFNOEcsT0FBTyxHQUFHLEVBQUU7WUFDbEI5SyxLQUFLLENBQUN3QixLQUFLLENBQUNQLFVBQVUsQ0FBQzhKLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDeEosRUFBRSxLQUFLeEIsUUFBUSxDQUFDd0IsRUFBRSxFQUFFO2NBQzFCLElBQUl3SixDQUFDLENBQUN4SixFQUFFLEtBQUs1QixNQUFNLENBQUMwSyxLQUFLLENBQUNXLFVBQVUsRUFBRUwsWUFBWSxHQUFHO2dCQUFFdEssS0FBSyxFQUFFMEssQ0FBQyxDQUFDeEosRUFBRTtnQkFBRXVDLEtBQUssRUFBRWlILENBQUMsQ0FBQ25LO2NBQUssQ0FBRTtjQUNwRmdLLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFNUssS0FBSyxFQUFFMEssQ0FBQyxDQUFDeEosRUFBRTtnQkFBRXVDLEtBQUssRUFBRWlILENBQUMsQ0FBQ25LO2NBQUssQ0FBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGLE1BQU1zSyxZQUFZLEdBQUduQixJQUFJLElBQUc7Y0FDM0JyQixTQUFTLENBQUMvSSxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRTBLLEtBQUssRUFBRTtrQkFBRSxHQUFHMUssTUFBTSxDQUFDMEssS0FBSztrQkFBRVcsVUFBVSxFQUFFakIsSUFBSSxDQUFDb0IsTUFBTSxDQUFDOUs7Z0JBQUs7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNoRyxDQUFDO1lBRUQsT0FDQ3ZCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBTzBKLE9BQU8sRUFBQyxFQUFFO2NBQUN4SixTQUFTLEVBQUM7WUFBVyxHLHNDQUV0QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQytJLFlBQUEsQ0FBQVksV0FBVztjQUFDckMsUUFBUSxFQUFFa0MsWUFBWTtjQUFFUCxZQUFZLEVBQUVBLFlBQVk7Y0FBRUMsT0FBTyxFQUFFLENBQUNELFlBQVksRUFBRSxHQUFHQyxPQUFPO1lBQUMsRUFBSSxDQUNqRztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBOUwsTUFBQSxHQUFBQyxPQUFBO1VBaUJPLE1BQU11TSxhQUFhLEdBQUFwRixPQUFBLENBQUFvRixhQUFBLEdBQUd4TSxNQUFBLENBQUEwQixPQUFLLENBQUMrSyxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNckwsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTXBCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ2dMLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNwRixPQUFBLENBQUFoRyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnRFLElBQUFwQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUosS0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBR00sU0FBVTBNLHVCQUF1QkEsQ0FBQztZQUFFN0g7VUFBUSxDQUFFO1lBQ25ELE1BQU07Y0FBRS9ELEtBQUs7Y0FBRUU7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTTtjQUFFUCxNQUFNO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ3dMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNdUksUUFBUSxHQUFHdkQsS0FBSyxJQUFHO2NBQ3hCLE1BQU0wRixNQUFNLEdBQUcxRixLQUFLLENBQUN3RCxhQUFhO2NBQ2xDLE1BQU1vQixLQUFLLEdBQUc7Z0JBQUUsR0FBRzFLLE1BQU0sQ0FBQzBLO2NBQUssQ0FBRTtjQUNqQ3pLLFFBQVEsQ0FBQztnQkFBRXlLLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNjLE1BQU0sQ0FBQy9LLElBQUksR0FBRytLLE1BQU0sQ0FBQzlLO2dCQUFLLENBQUU7Z0JBQUVMLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUM5RSxDQUFDO1lBRUQsTUFBTTRMLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUlqTSxNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkIyTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEL0gsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1uQyxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QmtLLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qi9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNaUksYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDN00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBaUIsSUFBSSxRQUNKekssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBd0QsS0FBSztjQUNMOUMsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbEYsS0FBSyxFQUFFakUsS0FBSyxDQUFDd0ssS0FBSyxDQUFDMEIsSUFBSSxDQUFDakksS0FBSztjQUM3QjJGLFdBQVcsRUFBRTVKLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQzBCLElBQUksQ0FBQ3RDLFdBQVc7Y0FDekNySixJQUFJLEVBQUM7WUFBTSxFQUNWLEVBQ0Z0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFOEosYUFBYTtjQUFFM0osT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtZQUFBLEdBQ3hEN0MsS0FBSyxDQUFDcUMsT0FBTyxDQUFDd0IsTUFBTSxDQUNiLENBQ0QsRUFDUmdJLGVBQWUsSUFDZjVNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDL0IsU0FBUyxFQUFFQSxTQUFTO2NBQUVtQyxRQUFRLEVBQUVpSTtZQUFhLEdBQzFEL00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDbU0sTUFBTSxDQUFDdEksTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBNUUsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWtOLE1BQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBbU4sU0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFFTSxTQUFVb04saUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXBNLFFBQVE7Y0FBRUgsUUFBUTtjQUFFRDtZQUFNLENBQUUsR0FBRyxJQUFBWCxRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNLENBQUM4TCxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHdE4sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUFtSCxNQUFBLENBQUFNLFNBQVMsRUFDUixDQUFDbkksUUFBUSxDQUFDc0ssS0FBSyxDQUFDLEVBQ2hCLE1BQUs7Y0FDSixNQUFNQSxLQUFLLEdBQUd0SyxRQUFRLENBQUNzSyxLQUFLLENBQUNnQyxPQUFPLEVBQUU7Y0FDdEN6TSxRQUFRLENBQUM7Z0JBQUV5SztjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDLEVBQ0QsaUJBQWlCLENBQ2pCO1lBRUQsSUFBSTJCLE1BQU0sRUFBRTtjQUNYLE9BQU9sTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFtRCx1QkFBdUI7Z0JBQUM3SCxRQUFRLEVBQUVBLENBQUEsS0FBTXdJLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFFckUsSUFBSSxDQUFDek0sTUFBTSxDQUFDMEssS0FBSyxDQUFDMEIsSUFBSSxFQUFFO2NBQ3ZCLE9BQU9qTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1SyxNQUFBLENBQUFLLFVBQVU7Z0JBQUNsTSxJQUFJLEVBQUMsZ0JBQWdCO2dCQUFDbU0sUUFBUSxFQUFFQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHN0UsT0FDQ3ROLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dLLFNBQUEsQ0FBQU0sZ0JBQWdCO2NBQUNwTSxJQUFJLEVBQUM7WUFBTSxFQUFHLENBQzlCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUF0QixNQUFBLEdBQUFDLE9BQUE7VUFFTyxhQUhQOztVQUdtQixTQUFVME4sV0FBV0EsQ0FBQztZQUFFckU7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1R6QyxPQUFPLENBQUMrRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdadEUsR0FBRyxHQUFHdUUsR0FBRyxDQUFDQyxlQUFlLENBQUN4RSxHQUFHLENBQUM7WUFDOUIsTUFBTXJDLEdBQUcsR0FBR2pILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQzhELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJ4RixNQUFBLENBQUEwQixPQUFLLENBQUMrRCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNNEcsTUFBTSxHQUFHcEYsR0FBRyxDQUFDdkIsT0FBTztjQUMxQjJHLE1BQU0sQ0FBQzBCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQUs7Z0JBQzlDLElBQUkxQixNQUFNLENBQUMyQixRQUFRLEtBQUtDLFFBQVEsRUFBRTtrQkFDakM1QixNQUFNLENBQUM2QixXQUFXLEdBQUcsS0FBSztrQkFDMUI3QixNQUFNLENBQUM4QixZQUFZLEdBQUcsTUFBSztvQkFDMUI5QixNQUFNLENBQUM4QixZQUFZLEdBQUcsSUFBSTtvQkFDMUI5QixNQUFNLENBQUM2QixXQUFXLEdBQUcsQ0FBQztrQkFDdkIsQ0FBQzs7Y0FFSCxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQzVFLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0N0SixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFjLEdBQzVCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFPd0wsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3JPLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUTBHLEdBQUcsRUFBRUEsR0FBRztjQUFFaEYsSUFBSSxFQUFDLFdBQVc7Y0FBQzJDLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTdHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxTyxPQUFBLEdBQUFyTyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUdBLElBQUFzTyxLQUFBLEdBQUF0TyxPQUFBO1VBQ0EsSUFBQXVPLE9BQUEsR0FBQXZPLE9BQUE7VUFDTSxTQUFVd08sa0JBQWtCQSxDQUFDO1lBQUUzRDtVQUFPLENBQW1DO1lBQzlFLE1BQU07Y0FBRTdKLFFBQVE7Y0FBRUosTUFBTTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUN0RCxNQUFNLENBQUM4TCxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHdE4sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0rTSxjQUFjLEdBQUdBLENBQUEsS0FBTXBCLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTSxDQUFDbkUsUUFBUSxFQUFFMUIsV0FBVyxDQUFDLEdBQUd6SCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDcUssU0FBUyxDQUFDbkMsUUFBUSxDQUFDO1lBQzNFLElBQUFMLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNuSSxRQUFRLENBQUNxSyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDZ0MsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixNQUFNcUIsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNIbEgsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXhHLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ3NELGFBQWEsRUFBRTtlQUN4QyxDQUFDLE9BQU9oSSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQ2xCLENBQUMsQ0FBQztlQUNkLFNBQVM7Z0JBQ1RhLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxJQUFJeUYsTUFBTSxFQUFFO2NBQ1gsT0FBT2xOLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBMLE9BQUEsQ0FBQU8sa0JBQWtCO2dCQUFDdk4sSUFBSSxFQUFDLFNBQVM7Z0JBQUN3RCxRQUFRLEVBQUVBLENBQUEsS0FBTXdJLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHL0UsTUFBTXdCLElBQUksR0FBR0EsQ0FBQztjQUFFN0QsSUFBSSxFQUFFM0c7WUFBSSxDQUFFLEtBQUk7Y0FDL0IsTUFBTWdGLEdBQUcsR0FBRyxHQUFHa0YsT0FBQSxDQUFBOU0sT0FBTSxDQUFDcU4sTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sZUFBZWhPLFFBQVEsQ0FBQ3dCLEVBQUUsY0FBYzZCLElBQUksUUFBUTtjQUU3RixPQUNDdEUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQXdFLEdBQ3RGOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDdUssU0FBUyxDQUFDaEgsSUFBSSxDQUFDLENBQU0sRUFDaEN0RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFLRSxTQUFTLEVBQUM7Y0FBYyxHQUM1QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQU93TCxRQUFRO2dCQUFDQyxPQUFPLEVBQUM7Y0FBVSxHQUNqQ3JPLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQVEwRyxHQUFHLEVBQUVBLEdBQUc7Z0JBQUVoRixJQUFJLEVBQUM7Y0FBVyxFQUFHLEUsbURBRTlCLENBQ0gsQ0FDRDtZQUVSLENBQUM7WUFFRCxJQUFJckQsUUFBUSxDQUFDcUssU0FBUyxDQUFDNEQsTUFBTSxFQUFFO2NBQzlCLE9BQ0NsUCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMyTCxLQUFBLENBQUFZLElBQUk7Z0JBQUNwRCxLQUFLLEVBQUU5SyxRQUFRLENBQUNxSyxTQUFTLENBQUM0RCxNQUFNO2dCQUFFRSxPQUFPLEVBQUVOLElBQUk7Z0JBQUVPLFNBQVMsRUFBQztjQUFLLEVBQUcsQ0FDdkU7O1lBSUwsT0FDQ3JQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQWdJLFNBQVM7Y0FBQ3pLLElBQUksRUFBRTlELEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ3NOLEtBQUssQ0FBQ3pOLEtBQUs7Y0FBRUssV0FBVyxFQUFFcEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDc04sS0FBSyxDQUFDcE47WUFBVyxHQUM3Rm5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDVCxPQUFPLEVBQUUyTCxVQUFVO2NBQUV4TCxPQUFPLEVBQUM7WUFBUyxHQUM1Q3BDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ1UsUUFBUSxDQUNmLENBQ0osRUFFTjlELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQWlDLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QixDQUNWO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBLElBQUEvSSxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcU8sT0FBQSxHQUFBck8sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1UCxTQUFBLEdBQUF2UCxPQUFBO1VBQ0EsSUFBQXdQLGNBQUEsR0FBQXhQLE9BQUE7VUFFQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUVNLFNBQVV5UCxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFek8sUUFBUTtjQUFFRjtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUM4TCxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHdE4sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0rTSxjQUFjLEdBQUdBLENBQUEsS0FBTXBCLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBQXhFLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNuSSxRQUFRLENBQUNxSyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDZ0MsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixJQUFJSixNQUFNLEVBQUU7Y0FDWCxPQUFPbE4sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEwsT0FBQSxDQUFBTyxrQkFBa0I7Z0JBQUN2TixJQUFJLEVBQUMsU0FBUztnQkFBQ3dELFFBQVEsRUFBRTJJO2NBQVEsRUFBSTs7WUFHakUsSUFBSXhNLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ3FFLE9BQU8sRUFBRTtjQUMvQixPQUNDM1AsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtnQkFBU0UsU0FBUyxFQUFDO2NBQW1CLEdBQ3JDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNE0sU0FBQSxDQUFBSSxRQUFRO2dCQUFDOUUsT0FBTyxFQUFFN0osUUFBUSxDQUFDcUssU0FBUyxDQUFDcUU7Y0FBTyxFQUFJLENBQ3hDLEVBQ1YzUCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFLRSxTQUFTLEVBQUM7Y0FBd0UsR0FDdEY5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2dCQUFDUCxJQUFJLEVBQUMsTUFBTTtnQkFBQ0YsT0FBTyxFQUFFMEwsY0FBYztnQkFBRXZMLE9BQU8sRUFBQyxTQUFTO2dCQUFDUyxRQUFRO2NBQUEsR0FDckU3QyxLQUFLLENBQUNxQyxPQUFPLENBQUN5TSxJQUFJLENBQ1gsQ0FDSixDQUNKOztZQUdMLE9BQU83UCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM2TSxjQUFBLENBQUFLLGFBQWE7Y0FBQ3hPLElBQUksRUFBQyxTQUFTO2NBQUNtTSxRQUFRLEVBQUVpQjtZQUFjLEVBQUk7VUFDbEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUExTyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQThQLFVBQUEsR0FBQTlQLE9BQUE7VUFFTSxTQUFVNlAsYUFBYUEsQ0FBQztZQUFFeE8sSUFBSTtZQUFFbU07VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FBRXhNLFFBQVE7Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDUSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc3QixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTSxDQUFDd0gsUUFBUSxFQUFFMUIsV0FBVyxDQUFDLEdBQUd6SCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDcUssU0FBUyxDQUFDbkMsUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBRzZHLE9BQU8sQ0FBQyxHQUFHaFEsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ2hLLElBQUksQ0FBQyxDQUFDO1lBRTVELE1BQU1zRyxXQUFXLEdBQUdBLENBQUEsS0FBTS9GLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxJQUFBa0gsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25JLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM3RCxXQUFXLENBQUN4RyxRQUFRLENBQUNxSyxTQUFTLENBQUNuQyxRQUFRLENBQUM7Y0FDeEM2RyxPQUFPLENBQUMvTyxRQUFRLENBQUNxSyxTQUFTLENBQUNoSyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFDRixNQUFNMkcsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDaEgsUUFBUSxDQUFDZ1A7WUFBVyxDQUFFO1lBQ3BELE9BQ0NqUSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFnSSxTQUFTO2NBQ1R4TSxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCK0IsSUFBSSxFQUFFOUQsS0FBSyxDQUFDa0IsVUFBVSxDQUFDc04sS0FBSyxDQUFDek4sS0FBSztjQUNsQ0ssV0FBVyxFQUFFcEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDc04sS0FBSyxDQUFDcE47WUFBVyxHQUUvQ25DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNaLE9BQU8sRUFBRXlLO1lBQVEsR0FDbEQxTSxLQUFLLENBQUNxQyxPQUFPLENBQUM4SixNQUFNLENBQ2IsRUFDVGxOLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQU8sUUFBUTtjQUFDN0UsT0FBTyxFQUFFNEUsV0FBVztjQUFFekUsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLOEU7WUFBUSxHQUM1RGxILEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ1UsUUFBUSxDQUNiLENBQ04sRUFFTjlELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQWlDLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QixFQUNYdkgsZUFBZSxJQUFJNUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbU4sVUFBQSxDQUFBMUUseUJBQXlCO2NBQUMvRyxJQUFJLEVBQUVoRCxJQUFJO2NBQUVpRCxPQUFPLEVBQUVxRDtZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQTVILE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQWlRLFFBQUEsR0FBQWpRLE9BQUE7VUFDQSxJQUFBa1EsS0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUFtUSxLQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQW9RLE1BQUEsR0FBQXBRLE9BQUE7VUFFTSxTQUFVcVEsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXJQLFFBQVE7Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxHQUFHcUcsV0FBVyxDQUFDLEdBQUd6SCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDcUssU0FBUyxDQUFDbkMsUUFBUSxDQUFDO1lBQ25FLE1BQU0sR0FBRzZHLE9BQU8sQ0FBQyxHQUFHaFEsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ3FFLE9BQU8sQ0FBQztZQUM5RCxNQUFNekYsUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBQ3pCLE1BQU1xRyxJQUFJLEdBQUcsRUFBRTtZQUVmLElBQUF6SCxNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkksUUFBUSxDQUFDcUssU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzdELFdBQVcsQ0FBQ3hHLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ25DLFFBQVEsQ0FBQztjQUN4QzZHLE9BQU8sQ0FBQztnQkFBRTFFLFNBQVMsRUFBRXJLLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ2lDLE9BQU8sRUFBRTtnQkFBRXJNLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUNwRSxDQUFDLENBQUM7WUFFRkQsUUFBUSxDQUFDcUssU0FBUyxDQUFDUyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3dFLElBQUksSUFBRztjQUN2QyxNQUFNbFAsSUFBSSxHQUFHLE9BQU9rUCxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2xQLElBQUk7Y0FDeEQsTUFBTTBELEtBQUssR0FBR2pFLEtBQUssQ0FBQ3VLLFNBQVMsQ0FBQ2hLLElBQUksQ0FBQztjQUVuQyxNQUFNbVAsVUFBVSxHQUFHLENBQUMsTUFBSztnQkFDeEIsSUFBSSxDQUFDRCxJQUFJLEVBQUVFLFlBQVksRUFBRSxPQUFPLEtBQUs7Z0JBQ3JDLElBQUksT0FBT0YsSUFBSSxFQUFFRSxZQUFZLEtBQUssUUFBUSxFQUFFLE9BQU8sQ0FBQ3pQLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ2tGLElBQUksQ0FBQ0UsWUFBWSxDQUFDO2dCQUN6RixPQUFPRixJQUFJLENBQUNFLFlBQVksQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQzNQLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ3NGLFFBQVEsQ0FBQyxDQUFDO2NBQ3pFLENBQUMsRUFBQyxDQUFFO2NBQ0osTUFBTUMsS0FBSyxHQUFHO2dCQUFFNUksUUFBUSxFQUFFd0k7Y0FBVSxDQUFFO2NBRXRDRixJQUFJLENBQUNwRSxJQUFJLENBQ1JuTSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1TixLQUFBLENBQUFXLEdBQUc7Z0JBQUEsR0FBS0QsS0FBSztnQkFBRUUsR0FBRyxFQUFFLEdBQUc5UCxRQUFRLENBQUN3QixFQUFFLElBQUluQixJQUFJO2NBQU0sR0FDL0MwRCxLQUFLLENBQ0QsQ0FDTjtZQUNGLENBQUMsQ0FBQztZQUVGLE9BQ0NoRixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1TixLQUFBLENBQUFhLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFLENBQUM7Y0FBRW5PLFNBQVMsRUFBQyxRQUFRO2NBQUNvSCxRQUFRLEVBQUVBO1lBQVEsR0FDOURsSyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1TixLQUFBLENBQUFlLElBQUksUUFBRVgsSUFBSSxDQUFRLEVBQ25CdlEsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdU4sS0FBQSxDQUFBZ0IsS0FBSztjQUFDck8sU0FBUyxFQUFDO1lBQUUsR0FDbEI5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNzTixRQUFBLENBQUFSLG9CQUFvQixPQUFHLEVBQ3hCMVAsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDd04sS0FBQSxDQUFBZ0IsWUFBWTtjQUFDOVAsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUNqQ3RCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dOLEtBQUEsQ0FBQWdCLFlBQVk7Y0FBQzlQLElBQUksRUFBQztZQUFVLEVBQUcsRUFDaEN0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN5TixNQUFBLENBQUE1QixrQkFBa0IsT0FBRyxDQUNmLENBQ087VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFyTyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBdUosS0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQVMsV0FBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVTRPLGtCQUFrQkEsQ0FBQztZQUNsQ3ZOLElBQUk7WUFDSndKLE9BQU87WUFDUGhHO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWpFLE1BQU07Y0FBRUMsUUFBUTtjQUFFRyxRQUFRO2NBQUVGO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ3dMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuRSxNQUFNdUksUUFBUSxHQUFHdkQsS0FBSyxJQUFHO2NBQ3hCLE1BQU0wRixNQUFNLEdBQUcxRixLQUFLLENBQUN3RCxhQUFhO2NBQ2xDLE1BQU1tQixTQUFTLEdBQUc7Z0JBQUUsR0FBR3pLLE1BQU0sQ0FBQ3lLO2NBQVMsQ0FBRTtjQUN6Q3hLLFFBQVEsQ0FBQztnQkFBRXdLLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNoSyxJQUFJLEdBQUcrSyxNQUFNLENBQUM5SztnQkFBSyxDQUFFO2dCQUFFTCxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDL0UsQ0FBQztZQUVELE1BQU00TCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJak0sTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CMkwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRC9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNbkMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTTJJLFNBQVMsR0FBRztnQkFBRSxHQUFHekssTUFBTSxDQUFDeUs7Y0FBUyxDQUFFO2NBQ3pDeEssUUFBUSxDQUFDO2dCQUFFd0ssU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ2hLLElBQUksR0FBR0wsUUFBUSxDQUFDcUssU0FBUyxDQUFDaEssSUFBSTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUMzRXVMLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qi9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNaUksYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDN00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFrQixRQUFRO2NBQ1JSLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjVJLElBQUksRUFBQyxTQUFTO2NBQ2RDLEtBQUssRUFBRVYsTUFBTSxDQUFDeUssU0FBUyxHQUFHaEssSUFBSSxDQUFDLElBQUksRUFBRTtjQUNyQ3FKLFdBQVcsRUFBRTVKLEtBQUssQ0FBQ21NLE1BQU0sQ0FBQzdFO1lBQVEsRUFDakMsQ0FDRyxFQUNOckksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRThKLGFBQWE7Y0FBRTNKLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7WUFBQSxHQUN4RDdDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3dCLE1BQU0sQ0FDYixFQUNUNUUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbEMsV0FBQSxDQUFBcUQsVUFBVSxPQUFHLENBQ04sRUFDUjZJLGVBQWUsSUFDZjVNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDL0IsU0FBUyxFQUFFQSxTQUFTO2NBQUVtQyxRQUFRLEVBQUVpSTtZQUFhLEdBQzFEL00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDbU0sTUFBTSxDQUFDdEksTUFBTSxDQUFPLENBRWpDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQTVFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1SixLQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBUyxXQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVb1IsZ0JBQWdCQSxDQUFDO1lBQUV2TTtVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFL0QsS0FBSztjQUFFRTtZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNO2NBQUVQLE1BQU07Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDL0MsTUFBTSxDQUFDd0wsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN00sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU11SSxRQUFRLEdBQUd2RCxLQUFLLElBQUc7Y0FDeEIsTUFBTTBGLE1BQU0sR0FBRzFGLEtBQUssQ0FBQ3dELGFBQWE7Y0FDbEMsTUFBTW9CLEtBQUssR0FBRztnQkFBRSxHQUFHMUssTUFBTSxDQUFDMEs7Y0FBSyxDQUFFO2NBQ2pDekssUUFBUSxDQUFDO2dCQUFFeUssS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsQ0FBQ2MsTUFBTSxDQUFDL0ssSUFBSSxHQUFHK0ssTUFBTSxDQUFDOUs7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU0rUCxRQUFRLEdBQUd6USxNQUFNLENBQUNLLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNNEwsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSWpNLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFO2dCQUNuQjJMLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUQvSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTW5DLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCa0ssa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCL0gsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU1pSSxhQUFhLEdBQUdBLENBQUEsS0FBTUYsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE9BQ0M3TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFpQixJQUFJLFFBQ0p6SyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUF3RCxLQUFLO2NBQ0w5QyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJsRixLQUFLLEVBQUVqRSxLQUFLLENBQUN3SyxLQUFLLENBQUMwQixJQUFJLENBQUNqSSxLQUFLO2NBQzdCMkYsV0FBVyxFQUFFNUosS0FBSyxDQUFDd0ssS0FBSyxDQUFDMEIsSUFBSSxDQUFDdEMsV0FBVztjQUN6Q3JKLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRnRCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDVCxPQUFPLEVBQUU4SixhQUFhO2NBQUUzSixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO1lBQUEsR0FDeEQwTixRQUFRLENBQ0QsRUFDVHRSLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2xDLFdBQUEsQ0FBQXFELFVBQVUsT0FBRyxDQUNOLEVBQ1I2SSxlQUFlLElBQ2Y1TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFFLFlBQVk7Y0FBQy9CLFNBQVMsRUFBRUEsU0FBUztjQUFFbUMsUUFBUSxFQUFFaUk7WUFBYSxHQUMxRC9NLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FBTTdCLEtBQUssQ0FBQ21NLE1BQU0sQ0FBQ3RJLE1BQU0sQ0FBTyxDQUVqQyxDQUNLLENBQ0w7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTVFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBdUosS0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFtTixTQUFBLEdBQUFuTixPQUFBO1VBRU0sU0FBVXNSLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFdFEsUUFBUTtjQUFFSCxRQUFRO2NBQUVEO1lBQU0sQ0FBRSxHQUFHLElBQUFYLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3pELE1BQU0sQ0FBQzhMLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUd0TixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQW1ILE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNuSSxRQUFRLENBQUNzSyxLQUFLLENBQUMsRUFBRSxNQUFNekssUUFBUSxDQUFDRyxRQUFRLENBQUNzTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRWxGLElBQUlMLE1BQU0sRUFBRSxPQUFPbE4sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBNkgsZ0JBQWdCO2NBQUN2TSxRQUFRLEVBQUVBLENBQUEsS0FBTXdJLFNBQVMsQ0FBQyxLQUFLO1lBQUMsRUFBSTtZQUN6RSxJQUFJLENBQUN6TSxNQUFNLENBQUMwSyxLQUFLLENBQUNpRyxPQUFPLEVBQUUsT0FBT3hSLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3VLLE1BQUEsQ0FBQUssVUFBVTtjQUFDbE0sSUFBSSxFQUFDLFFBQVE7Y0FBQ21NLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtZQUFDLEVBQUk7WUFFL0YsT0FBT3ROLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dLLFNBQUEsQ0FBQU0sZ0JBQWdCO2NBQUNwTSxJQUFJLEVBQUM7WUFBUyxFQUFHO1VBQzNDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQSxJQUFBa0QsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV3UixrQkFBa0JBLENBQUM7WUFBRWhOLElBQUk7WUFBRUY7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQzRFLFFBQVEsRUFBRTFCLFdBQVcsQ0FBQyxHQUFHekgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTFosS0FBSyxFQUFFO2dCQUFFa0IsVUFBVSxFQUFFbEIsS0FBSztnQkFBRXFDO2NBQU8sQ0FBRTtjQUNyQ25DLFFBQVE7Y0FDUkg7WUFBUSxDQUNSLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDdEIsSUFBSSxDQUFDcUQsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNOUIsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIOEUsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakJsRCxPQUFPLEVBQUU7Z0JBQ1QsTUFBTXRELFFBQVEsQ0FBQ3lRLFlBQVksRUFBRTtnQkFDN0IsTUFBTXpHLElBQUksR0FBRztrQkFBRU0sS0FBSyxFQUFFdEssUUFBUSxDQUFDc0ssS0FBSyxDQUFDZ0MsT0FBTyxFQUFFO2tCQUFFakMsU0FBUyxFQUFFckssUUFBUSxDQUFDcUssU0FBUyxDQUFDaUMsT0FBTyxFQUFFO2tCQUFFck0sT0FBTyxFQUFFO2dCQUFLLENBQUU7Z0JBRXpHSixRQUFRLENBQUNtSyxJQUFJLENBQUM7ZUFDZCxDQUFDLE9BQU9yRSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVGEsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0N6SCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFFLFlBQVk7Y0FDWkQsSUFBSTtjQUNKRixPQUFPLEVBQUVBLE9BQU87Y0FDaEI1QixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJvQyxVQUFVLEVBQUU7Z0JBQUVDLEtBQUssRUFBRTVCLE9BQU8sQ0FBQzZCO2NBQU8sQ0FBRTtjQUN0Q0MsU0FBUyxFQUFFO2dCQUFFRixLQUFLLEVBQUU1QixPQUFPLENBQUN3QjtjQUFNO1lBQUUsR0FFcEM1RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUM0USxXQUFXLENBQUM3UCxLQUFLLENBQU0sRUFDbEM5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLFlBQUk3QixLQUFLLENBQUM0USxXQUFXLENBQUN4UCxXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBbkMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJSLGNBQUEsR0FBQTNSLE9BQUE7VUFDQSxJQUFBNFIsY0FBQSxHQUFBNVIsT0FBQTtVQUNBLElBQUE2UixPQUFBLEdBQUE3UixPQUFBO1VBQ0EsSUFBQThSLGVBQUEsR0FBQTlSLE9BQUE7VUFDQSxJQUFBK1IsT0FBQSxHQUFBL1IsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFnUyxZQUFBLEdBQUFoUyxPQUFBO1VBRU0sU0FBVWlTLGdCQUFnQkEsQ0FBQztZQUFFNU47VUFBSSxDQUFFO1lBQ3hDLE1BQU07Y0FBRXJELFFBQVE7Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFOUMsTUFBTSxDQUFDK1EsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHcFMsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0wUSxLQUFLLEdBQUc7Y0FDYixnQkFBZ0IsRUFBRVIsY0FBQSxDQUFBdkIsaUJBQWlCO2NBQ25DZ0MsTUFBTSxFQUFFUixPQUFBLENBQUFQLFVBQVU7Y0FDbEJnQixNQUFNLEVBQUVQLE9BQUEsQ0FBQVEsVUFBVTtjQUNsQixpQkFBaUIsRUFBRVQsZUFBQSxDQUFBVSxrQkFBa0I7Y0FDckMsZ0JBQWdCLEVBQUViLGNBQUEsQ0FBQXZFO2FBQ2xCO1lBRUQsSUFBSSxDQUFDZ0YsS0FBSyxDQUFDL04sSUFBSSxDQUFDLEVBQUV1QyxPQUFPLENBQUNDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRXhDLElBQUksRUFBRStOLEtBQUssQ0FBQztZQUVoRSxNQUFNNUgsSUFBSSxHQUFHNEgsS0FBSyxDQUFDL04sSUFBSSxDQUFDO1lBRXhCLE1BQU1zRCxXQUFXLEdBQUdBLENBQUEsS0FBTXdLLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNdEIsS0FBSyxHQUFHO2NBQUU3TixPQUFPLEVBQUU0RSxXQUFXO2NBQUVLLFFBQVEsRUFBRWhILFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQ2dFLEtBQUssSUFBSXRPLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ2lFO1lBQUssQ0FBRTtZQUVsRyxPQUNDdlAsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0MsR0FDaEU5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUN3SyxLQUFLLENBQUN6SixLQUFLLENBQU0sRUFDNUI5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQyxHQUM5QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFBLEdBQUtpTjtZQUFLLEdBQzFDOVAsS0FBSyxDQUFDcUMsT0FBTyxDQUFDc1AsTUFBTSxDQUNiLENBQ0osQ0FDRSxFQUNUMVMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNkgsSUFBSSxPQUFHLEVBQ1J6SyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNxUCxZQUFBLENBQUFSLGtCQUFrQjtjQUFDaE4sSUFBSSxFQUFFME4sZUFBZTtjQUFFNU4sT0FBTyxFQUFFcUQ7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUF4SCxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBdUosS0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBRU0sU0FBVTRPLGtCQUFrQkEsQ0FBQztZQUNsQ3ZOLElBQUk7WUFDSndEO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWpFLE1BQU07Y0FBRUMsUUFBUTtjQUFFRyxRQUFRO2NBQUVGO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ3dMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdNLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuRSxNQUFNdUksUUFBUSxHQUFHdkQsS0FBSyxJQUFHO2NBQ3hCLE1BQU0wRixNQUFNLEdBQUcxRixLQUFLLENBQUN3RCxhQUFhO2NBQ2xDLE1BQU1tQixTQUFTLEdBQUc7Z0JBQUUsR0FBR3pLLE1BQU0sQ0FBQ3lLO2NBQVMsQ0FBRTtjQUN6Q3hLLFFBQVEsQ0FBQztnQkFBRXdLLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNoSyxJQUFJLEdBQUcrSyxNQUFNLENBQUM5SztnQkFBSztjQUFFLENBQUUsQ0FBQztZQUNoRSxDQUFDO1lBQ0QsTUFBTStQLFFBQVEsR0FBR3pRLE1BQU0sQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ25ELE1BQU00TCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJak0sTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CMkwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRC9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNbkMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTTJJLFNBQVMsR0FBRztnQkFBRSxHQUFHekssTUFBTSxDQUFDeUs7Y0FBUyxDQUFFO2NBQ3pDeEssUUFBUSxDQUFDO2dCQUFFd0ssU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ2hLLElBQUksR0FBR0wsUUFBUSxDQUFDcUssU0FBUyxDQUFDaEssSUFBSTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUMzRXVMLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qi9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNaUksYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDN00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBa0IsUUFBUTtjQUNSUixRQUFRLEVBQUVBLFFBQVE7Y0FDbEI1SSxJQUFJLEVBQUVBLElBQUk7Y0FDVkMsS0FBSyxFQUFFVixNQUFNLENBQUN5SyxTQUFTLEdBQUdoSyxJQUFJLENBQUMsSUFBSSxFQUFFO2NBQ3JDcUosV0FBVyxFQUFFNUosS0FBSyxDQUFDbU0sTUFBTSxDQUFDNUwsSUFBSSxDQUFDLENBQUMrRztZQUFRLEVBQ3ZDLEVBQ0ZySSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFOEosYUFBYTtjQUFFM0osT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtZQUFBLEdBQ3hEME4sUUFBUSxDQUNELENBQ0QsRUFDUjFFLGVBQWUsSUFDZjVNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDL0IsU0FBUyxFQUFFQSxTQUFTO2NBQUVtQyxRQUFRLEVBQUVpSTtZQUFhLEdBQzFEL00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDbU0sTUFBTSxDQUFDdEksTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQTVFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1UCxTQUFBLEdBQUF2UCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBd1AsY0FBQSxHQUFBeFAsT0FBQTtVQUNBLElBQUEwUyxtQkFBQSxHQUFBMVMsT0FBQTtVQUVNLFNBQVVtUixZQUFZQSxDQUFDO1lBQUU5UDtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFTDtZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV2QyxNQUFNLENBQUN3UixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN1MsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQ3FLLFNBQVMsQ0FBQ2hLLElBQUksQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQzRMLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUd0TixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBQW1ILE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNuSSxRQUFRLENBQUNxSyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDdUgsV0FBVyxDQUFDNVIsUUFBUSxDQUFDcUssU0FBUyxDQUFDaEssSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsSUFBSTRMLE1BQU0sRUFBRTtjQUNYLE9BQU9sTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMrUCxtQkFBQSxDQUFBOUQsa0JBQWtCO2dCQUFDdk4sSUFBSSxFQUFFQSxJQUFJO2dCQUFFd0QsUUFBUSxFQUFFQSxDQUFBLEtBQU13SSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRTVFLElBQUksQ0FBQ3NGLFFBQVEsRUFBRSxPQUFPNVMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNk0sY0FBQSxDQUFBSyxhQUFhO2NBQUN4TyxJQUFJLEVBQUVBLElBQUk7Y0FBRW1NLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtZQUFDLEVBQUk7WUFFcEYsT0FBT3ROLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRNLFNBQUEsQ0FBQUksUUFBUTtjQUFDOUUsT0FBTyxFQUFFOEg7WUFBUSxFQUFJO1VBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBNVMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtOLE1BQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBNlMsZ0JBQUEsR0FBQTdTLE9BQUE7VUFFTSxTQUFVOFMsYUFBYUEsQ0FBQztZQUFFQztVQUFVLENBQUU7WUFDM0MsTUFBTTtjQUFFL1I7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFdkMsT0FDQ3BCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tRLGdCQUFBLENBQUFHLG9CQUFvQixPQUFHLEVBQ3hCalQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdUssTUFBQSxDQUFBSyxVQUFVO2NBQ1ZsTSxJQUFJLEVBQUMsaUJBQWlCO2NBQ3RCbU0sUUFBUSxFQUFFdUYsVUFBVTtjQUNwQnZILGVBQWUsRUFBRTtnQkFBRXlILE9BQU8sRUFBRWpTLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQzJIO2NBQU87WUFBRSxFQUNuRCxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFsVCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUosS0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrVCxrQkFBQSxHQUFBbFQsT0FBQTtVQUVNLFNBQVVtVCxVQUFVQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsS0FBSztZQUFFQztVQUFnQixDQUFFO1lBQy9ELE1BQU07Y0FBRXhTLEtBQUs7Y0FBRUUsUUFBUTtjQUFFSDtZQUFRLENBQUUsR0FBRyxJQUFBWixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNO2NBQ0xtSyxLQUFLLEVBQUU7Z0JBQUVpSTtjQUFLO1lBQUUsQ0FDaEIsR0FBRyxJQUFBTCxrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUNqQyxNQUFNLENBQUNsUyxLQUFLLEVBQUVtUyxRQUFRLENBQUMsR0FBRzFULE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNdUksUUFBUSxHQUFHdkQsS0FBSyxJQUFHO2NBQ3hCK00sUUFBUSxDQUFDL00sS0FBSyxDQUFDd0QsYUFBYSxDQUFDNUksS0FBSyxDQUFDO1lBQ3BDLENBQUM7WUFFRCxNQUFNb1MsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkI5TSxPQUFPLENBQUNpQixHQUFHLENBQUMsRUFBRSxFQUFFN0csUUFBUSxDQUFDc0ssS0FBSyxDQUFDZ0MsT0FBTyxFQUFFLENBQUM7Y0FDekN6TSxRQUFRLENBQUM7Z0JBQUV5SyxLQUFLLEVBQUV0SyxRQUFRLENBQUNzSyxLQUFLLENBQUNnQyxPQUFPLEVBQUU7Z0JBQUVyTSxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDN0QsQ0FBQztZQUNELE1BQU0wUyxLQUFLLEdBQUdqTixLQUFLLElBQUc7Y0FDckIrTSxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pMLFFBQVEsQ0FBQ1EsU0FBUyxDQUFDdFMsS0FBSyxDQUFDO2NBQ3pCb1MsTUFBTSxFQUFFO1lBQ1QsQ0FBQztZQUNELE1BQU03TyxRQUFRLEdBQUc2QixLQUFLLElBQUc7Y0FDeEI0TSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Y0FDdkJDLEtBQUssRUFBRTtZQUNSLENBQUM7WUFFRCxPQUNDeFQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUM1QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQXdELEtBQUs7Y0FBQzFMLElBQUksRUFBQyxtQkFBbUI7Y0FBQ0MsS0FBSyxFQUFFQSxLQUFLO2NBQUUySSxRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUNwRWxLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXVELEdBQ3JFOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDVCxPQUFPLEVBQUU4QixRQUFRO2NBQUUzQixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNWLElBQUksRUFBQztZQUFRLEdBQ2pFbkMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDc1AsTUFBTSxDQUNiLEVBQ1QxUyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRTRRLEtBQUs7Y0FBRTFRLElBQUksRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBQztZQUFTLEdBQ2xEcEMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDMFEsR0FBRyxDQUNWLENBQ0osQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBOVQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNPLEtBQUEsR0FBQXRPLE9BQUE7VUFDQSxJQUFBOFQsS0FBQSxHQUFBOVQsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBRU87VUFBVyxTQUFVK1QsYUFBYUEsQ0FBQztZQUFFWDtVQUFRLENBQUU7WUFDckQsTUFBTSxDQUFDWSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbFUsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMwUixRQUFRLENBQUNZLE9BQU8sQ0FBQztZQUM5RCxNQUFNLENBQUNuSSxPQUFPLEVBQUVxSSxVQUFVLENBQUMsR0FBR25VLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDMFIsUUFBUSxDQUFDdkgsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNwRSxNQUFNLENBQUNiLElBQUksRUFBRStFLE9BQU8sQ0FBQyxHQUFHaFEsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMwUixRQUFRLENBQUM5RixPQUFPLEVBQUUsQ0FBQztZQUMxRCxJQUFBekUsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ2lLLFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDMUJhLFVBQVUsQ0FBQ2IsUUFBUSxDQUFDZSxhQUFhLENBQUM7Y0FDbENELFVBQVUsQ0FBQ2QsUUFBUSxDQUFDdkgsT0FBTyxDQUFDO2NBQzVCa0UsT0FBTyxDQUFDcUQsUUFBUSxDQUFDOUYsT0FBTyxFQUFFLENBQUM7Y0FDM0IxRyxPQUFPLENBQUNpQixHQUFHLENBQUMsWUFBWSxFQUFFdUwsUUFBUSxDQUFDOUYsT0FBTyxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDdEMsSUFBSSxDQUFDYSxPQUFPLENBQUN1SSxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRXJDLE9BQ0NyVSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMyTCxLQUFBLENBQUFZLElBQUk7Y0FDSjVELEtBQUssRUFBRTtnQkFDTjhIO2VBQ0E7Y0FDRHZRLFNBQVMsRUFBQyx3QkFBd0I7Y0FDbENpSixLQUFLLEVBQUVkLElBQUksQ0FBQ2EsT0FBTztjQUNuQnNELE9BQU8sRUFBRTJFLEtBQUEsQ0FBQU87WUFBVSxFQUNsQjtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBdFUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXNVLE1BQUEsR0FBQXRVLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFTyxNQUFNcVUsVUFBVSxHQUFHRSxLQUFLLElBQUc7WUFDakMsTUFBTTtjQUFFelQsS0FBSztjQUFFRSxRQUFRO2NBQUVIO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3hELE1BQU07Y0FDTG9QLElBQUk7Y0FDSjhDLEtBQUs7Y0FDTC9ILEtBQUssRUFBRTtnQkFBRThIO2NBQVE7WUFBRSxDQUNuQixHQUFHbUIsS0FBSztZQUVULE1BQU1iLE1BQU0sR0FBR0EsQ0FBQSxLQUFNN1MsUUFBUSxDQUFDO2NBQUV5SyxLQUFLLEVBQUV0SyxRQUFRLENBQUNzSyxLQUFLLENBQUNnQyxPQUFPLEVBQUU7Y0FBRXJNLE9BQU8sRUFBRTtZQUFJLENBQUUsQ0FBQztZQUVqRixNQUFNdVQsSUFBSSxHQUFHOU4sS0FBSyxJQUFHO2NBQ3BCQSxLQUFLLENBQUMrTixjQUFjLEVBQUU7Y0FDdEJyQixRQUFRLENBQUNhLFVBQVUsQ0FBQ1osS0FBSyxDQUFDO2NBQzFCSyxNQUFNLEVBQUU7WUFDVCxDQUFDO1lBQ0QsTUFBTWdCLFFBQVEsR0FBR2hPLEtBQUssSUFBRztjQUN4QjBNLFFBQVEsQ0FBQ3VCLFlBQVksQ0FBQ3RCLEtBQUssQ0FBQztjQUM1QkssTUFBTSxFQUFFO1lBQ1QsQ0FBQztZQUVELE9BQ0MzVCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU80TixJQUFJLENBQVEsRUFDbkJ4USxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUM5Q3VRLFFBQVEsQ0FBQ2UsYUFBYSxLQUFLZCxLQUFLLEdBQ2hDdFQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMlIsTUFBQSxDQUFBTSxJQUFJO2NBQUMzUixJQUFJLEVBQUMsT0FBTztjQUFDNFIsTUFBTSxFQUFDLElBQUk7Y0FBQ3hRLElBQUksRUFBQztZQUFTLEdBQzNDdkQsS0FBSyxDQUFDZ1UsY0FBYyxDQUFDQyxNQUFNLENBQUNmLE9BQU8sQ0FDOUIsR0FFUGpVLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFeVIsSUFBSTtjQUFFdlIsSUFBSSxFQUFDLE1BQU07Y0FBQ1UsUUFBUTtjQUFDa1IsTUFBTSxFQUFDLElBQUk7Y0FBQzNSLE9BQU8sRUFBQztZQUFTLEdBQ3ZFcEMsS0FBSyxDQUFDZ1UsY0FBYyxDQUFDQyxNQUFNLENBQUNQLElBQUksQ0FFbEMsRUFDRHpVLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0gsU0FBUyxFQUFDLFFBQVE7Y0FBQ0ksSUFBSSxFQUFDLFFBQVE7Y0FBQ0YsT0FBTyxFQUFFMlI7WUFBUSxFQUFJLENBQ3pELENBQ047VUFFUCxDQUFDO1VBQUN2TixPQUFBLENBQUFrTixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NGLElBQUF0VSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa1Qsa0JBQUEsR0FBQWxULE9BQUE7VUFLQSxJQUFBZ1YsUUFBQSxHQUFBaFYsT0FBQTtVQUNBLElBQUF1SixLQUFBLEdBQUF2SixPQUFBO1VBRU87VUFBVyxTQUFVaVYsVUFBVUEsQ0FBQztZQUFFakssSUFBSTtZQUFFcUk7VUFBSyxDQUFFO1lBQ3JELE1BQU07Y0FBRS9IO1lBQUssQ0FBRSxHQUFHLElBQUE0SCxrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUUvQyxNQUFNLENBQUMwQixjQUFjLEVBQUU1QixnQkFBZ0IsQ0FBQyxHQUFHdlQsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUM0SixLQUFLLENBQUM2SixnQkFBZ0IsS0FBSzlCLEtBQUssQ0FBQztZQUUzRixNQUFNek8sSUFBSSxHQUFHLE9BQU9vRyxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLENBQUNvSSxRQUFRLEdBQUdwSSxJQUFJO1lBQzVELE1BQU1vSyxpQkFBaUIsR0FBRzlKLEtBQUssQ0FBQzZKLGdCQUFnQixLQUFLOUIsS0FBSyxJQUFJNkIsY0FBYztZQUM1RSxNQUFNOUIsUUFBUSxHQUFHOUgsS0FBSyxDQUFDQSxLQUFLLENBQUMrSixTQUFTLENBQUNoQyxLQUFLLENBQUM7WUFDN0MsT0FDQ3RULE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdVEsa0JBQUEsQ0FBQW9DLHFCQUFxQjtjQUFDdEssSUFBSSxFQUFFcEcsSUFBSTtjQUFFeU8sS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDbEQvSCxLQUFLLENBQUNpSyxPQUFPLElBQUluQyxRQUFRLElBQUlyVCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNxUyxRQUFBLENBQUFqQixhQUFhO2NBQUNYLFFBQVEsRUFBRUEsUUFBUTtjQUFFcEksSUFBSSxFQUFFTSxLQUFLLENBQUNpSyxPQUFPO2NBQUVsQyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUNyRytCLGlCQUFpQixJQUFJclYsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBNEosVUFBVTtjQUFDRSxLQUFLLEVBQUVBLEtBQUs7Y0FBRUQsUUFBUSxFQUFFQSxRQUFRO2NBQUVFLGdCQUFnQixFQUFFQTtZQUFnQixFQUFJLENBQ3JHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUF2VCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBcU8sT0FBQSxHQUFBck8sT0FBQTtVQUVNLFNBQVV3UyxrQkFBa0JBLENBQUM7WUFBRWdELFlBQVk7WUFBRXBTO1VBQUksQ0FBRTtZQUN4RCxNQUFNO2NBQUV0QztZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNcU0sUUFBUSxHQUFHQSxDQUFBLEtBQU1nSSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBRTFDLE9BQ0N6VixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQytKLFNBQVMsQ0FBQ3hULEtBQUssQ0FBTSxFQUN0QzlCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0YsT0FBTyxFQUFFSztZQUFJLEVBQUksQ0FDdEMsRUFDVHJELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBMLE9BQUEsQ0FBQW9ILFVBQVU7Y0FBQzVRLFFBQVEsRUFBRTJJO1lBQVEsRUFBSSxDQUNoQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBek4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWtULGtCQUFBLEdBQUFsVCxPQUFBO1VBQ0EsSUFBQThULEtBQUEsR0FBQTlULE9BQUE7VUFDQSxJQUFBMFYsY0FBQSxHQUFBMVYsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUEyVix1QkFBQSxHQUFBM1YsT0FBQTtVQUNBLElBQUFTLFdBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVV5VixVQUFVQSxDQUFDO1lBQUU1UTtVQUFRLENBQUU7WUFDdEMsTUFBTTtjQUFFN0QsUUFBUTtjQUFFRixLQUFLO2NBQUVGLE1BQU07Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTXVJLFFBQVEsR0FBRzNKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0Qzs7O1lBR0EsTUFBTTtjQUFFa1UsVUFBVTtjQUFFdEssS0FBSztjQUFFdUssWUFBWTtjQUFFaEssT0FBTztjQUFFcUk7WUFBVSxDQUFFLEdBQUcsSUFBQXlCLHVCQUFBLENBQUFHLHNCQUFzQixHQUFFO1lBRXpGLE1BQU1DLFlBQVksR0FBR0EsQ0FBQztjQUFFN0wsYUFBYSxFQUFFa0M7WUFBTSxDQUFFLEtBQUk7Y0FDbEQxQyxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1osTUFBTTRCLEtBQUssR0FBRztnQkFBRSxHQUFHMUssTUFBTSxDQUFDMEs7Y0FBSyxDQUFFO2NBRWpDdEssUUFBUSxDQUFDc0ssS0FBSyxDQUFDMEssR0FBRyxDQUFDO2dCQUFFWCxTQUFTLEVBQUVqSixNQUFNLENBQUM5SztjQUFLLENBQUUsQ0FBQztjQUMvQyxNQUFNaVUsT0FBTyxHQUFHdlUsUUFBUSxDQUFDc0ssS0FBSyxDQUFDK0osU0FBUyxDQUFDWSxHQUFHLENBQUMxRixJQUFJLEtBQUs7Z0JBQUV6RSxLQUFLLEVBQUV5RSxJQUFJLENBQUMxRSxPQUFPO2dCQUFFbUksT0FBTyxFQUFFekQsSUFBSSxDQUFDNEQ7Y0FBYSxDQUFFLENBQUMsQ0FBQztjQUM1R3lCLFVBQVUsQ0FBQ0wsT0FBTyxDQUFDO2NBQ25CckIsVUFBVSxDQUFDOUgsTUFBTSxDQUFDOUssS0FBSyxDQUFDO2NBQ3hCVCxRQUFRLENBQUM7Z0JBQUV5SyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxHQUFHdEssUUFBUSxDQUFDc0ssS0FBSyxDQUFDZ0MsT0FBTztnQkFBRSxDQUFFO2dCQUFFck0sT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQzlFLENBQUM7WUFFRCxPQUNDbEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMEIsR0FFNUM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1USxrQkFBQSxDQUFBZ0QsaUJBQWlCO2NBQ2pCL1MsT0FBTyxFQUFFMFMsWUFBWTtjQUNyQmpWLE1BQU0sRUFBRWlMLE9BQU87Y0FDZmdELElBQUksRUFBRWlGLEtBQUEsQ0FBQW1CLFVBQVU7Y0FDaEIzSixLQUFLLEVBQUVBLEtBQUs7Y0FDWnlLLFlBQVksRUFBRUEsWUFBWTtjQUMxQkksU0FBUyxFQUFDO1lBQVcsR0FFckJwVyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMrUyxjQUFBLENBQUFVLGtCQUFrQixPQUFHLENBQ0gsRUFFcEJyVyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFDWixPQUFPLEVBQUU4QjtZQUFRLEdBQ2xEL0QsS0FBSyxDQUFDcUMsT0FBTyxDQUFDd0IsTUFBTSxDQUNiLEVBQ1Q1RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNsQyxXQUFBLENBQUFxRCxVQUFVO2NBQUN1UyxRQUFRLEVBQUV4UjtZQUFRLEVBQUksQ0FDMUIsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBOUUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQXNPLEtBQUEsR0FBQXRPLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBc1csaUJBQUEsR0FBQXRXLE9BQUE7VUFFTSxTQUFVdVcsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRTNWLE1BQU07Y0FBRUksUUFBUTtjQUFFSCxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sR0FBR3FWLGtCQUFrQixDQUFDLEdBQUd6VyxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEQsTUFBTWtPLElBQUksR0FBR0EsQ0FBQSxLQUFNNEcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBRTNDLE9BQ0N6VyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQytKLFNBQVMsQ0FBQ3hULEtBQUssQ0FBTSxFQUN0QzlCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0YsT0FBTyxFQUFFNk07WUFBSSxFQUFJLENBQ2pDLEVBQ1Q3UCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMyTCxLQUFBLENBQUFZLElBQUk7Y0FBQ3JNLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ2lKLEtBQUssRUFBRWxMLE1BQU0sQ0FBQzBLLEtBQUssQ0FBQytKLFNBQVM7Y0FBRS9KLEtBQUssRUFBRSxFQUFFO2NBQUU2RCxPQUFPLEVBQUVtSCxpQkFBQSxDQUFBRztZQUFnQixFQUFJLENBQ3pHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFuVyxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBc08sS0FBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV5VyxnQkFBZ0JBLENBQUM7WUFBRXpMO1VBQUksQ0FBdUU7WUFDN0csTUFBTTtjQUFFbEs7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTXVWLE9BQU8sR0FBR0EsQ0FBQztjQUFFMUwsSUFBSSxFQUFFMkwsTUFBTTtjQUFFdEQ7WUFBSyxDQUFtQyxLQUFJO2NBQzVFLE1BQU1wUSxJQUFJLEdBQUdvUSxLQUFLLEtBQUtySSxJQUFJLENBQUNtSixhQUFhLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDN0QsT0FDQ3BVLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQUlFLFNBQVMsRUFBQztjQUE2QyxHQUMxRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTZLLElBQUk7Z0JBQUNsSSxJQUFJLEVBQUVBLElBQUk7Z0JBQUVKLFNBQVMsRUFBQztjQUFTLEVBQUcsRUFDdkM4VCxNQUFNLENBQ0g7WUFFUCxDQUFDO1lBRUQsT0FDQzVXLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQWdCLEdBQzdCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLcUksSUFBSSxDQUFDb0ksUUFBUSxDQUFNLEVBQ3ZCcEksSUFBSSxDQUFDYSxPQUFPLENBQUN1SSxNQUFNLEdBQ25CclUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMkwsS0FBQSxDQUFBWSxJQUFJO2NBQUNwRCxLQUFLLEVBQUVkLElBQUksQ0FBQ2EsT0FBTztjQUFFc0QsT0FBTyxFQUFFdUg7WUFBTyxFQUFJLEdBRS9DM1csTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFHRSxTQUFTLEVBQUM7WUFBWSxHQUFFL0IsS0FBSyxDQUFDZ1UsY0FBYyxDQUFDOEIsWUFBWSxDQUFLLENBRWxFLENBQ0c7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQUMsS0FBQSxHQUFBN1csT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0E7Ozs7OztVQU1NLFNBQVU4VixzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFOVUsUUFBUTtjQUFFRixLQUFLO2NBQUVGLE1BQU07Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDMEssT0FBTyxFQUFFcUksVUFBVSxDQUFDLEdBQUduVSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDc0ssS0FBSyxDQUFDd0wsY0FBYyxJQUFJLEVBQUUsQ0FBQztZQUNqRixNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdqWCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDNlQsT0FBTyxFQUFFSyxVQUFVLENBQUMsR0FBRzdWLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNLEdBQUd1VixTQUFTLENBQUMsR0FBR2xYLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBbUgsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25JLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDaEM0SSxVQUFVLENBQUNsVCxRQUFRLENBQUNzSyxLQUFLLENBQUMrSixTQUFTLENBQUNZLEdBQUcsQ0FBQzFGLElBQUksSUFBSUEsSUFBSSxDQUFDNkMsUUFBUSxDQUFDLENBQUM7Y0FDL0QsTUFBTW1DLE9BQU8sR0FBR3ZVLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQytKLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDMUYsSUFBSSxLQUFLO2dCQUFFekUsS0FBSyxFQUFFeUUsSUFBSSxDQUFDMUUsT0FBTztnQkFBRW1JLE9BQU8sRUFBRXpELElBQUksQ0FBQzREO2NBQWEsQ0FBRSxDQUFDLENBQUM7Y0FDNUd5QixVQUFVLENBQUNMLE9BQU8sQ0FBQztjQUNuQixNQUFNakssS0FBSyxHQUFHO2dCQUFFLEdBQUcxSyxNQUFNLENBQUMwSztjQUFLLENBQUU7Y0FDakN6SyxRQUFRLENBQUM7Z0JBQUV5SyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxHQUFHdEssUUFBUSxDQUFDc0ssS0FBSyxDQUFDZ0MsT0FBTztnQkFBRTtjQUFFLENBQUUsQ0FBQztjQUM5RDJKLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixNQUFNcEIsWUFBWSxHQUF3QjtjQUN6Q04sT0FBTyxFQUFFO2dCQUNSO2dCQUNBdFMsSUFBSSxFQUFFM0MsTUFBQSxDQUFBbUQsS0FBSyxDQUFDQyxPQUFPO2dCQUNuQjdCLEtBQUssRUFBRWYsS0FBSyxDQUFDcUMsT0FBTyxDQUFDK1QsZUFBZTtnQkFDcENuVSxPQUFPLEVBQUUsTUFBQUEsQ0FBTzJELEtBQUssRUFBRTJNLEtBQUssRUFBRXJJLElBQUksS0FBSTtrQkFDckMsTUFBTW1NLE9BQU8sR0FBRyxJQUFJTixLQUFBLENBQUFPLGNBQWMsRUFBRTtrQkFFcEMsSUFBSSxDQUFDcFcsUUFBUSxDQUFDc0ssS0FBSyxDQUFDK0osU0FBUyxDQUFDaEMsS0FBSyxDQUFDLEVBQUU7b0JBQ3JDek0sT0FBTyxDQUFDQyxLQUFLLENBQUMsNkJBQTZCLEVBQUV3TSxLQUFLLENBQUM7b0JBQ25EOztrQkFHRCxNQUFNeEgsT0FBTyxHQUFHLE1BQU03SyxRQUFRLENBQUNzSyxLQUFLLENBQUMrSixTQUFTLENBQUNoQyxLQUFLLENBQUMsQ0FBQzZELGVBQWUsRUFBRTtrQkFDdkV0USxPQUFPLENBQUNpQixHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUFFLEdBQUcwTixPQUFPO29CQUFFLEdBQUcxSjtrQkFBTyxDQUFFLENBQUM7a0JBQzFDK0osVUFBVSxDQUFDO29CQUFFLEdBQUdMLE9BQU87b0JBQUUsR0FBRzFKO2tCQUFPLENBQUUsQ0FBQztrQkFDdENzTCxPQUFPLENBQUNFLE9BQU8sRUFBRTtrQkFDakI7a0JBQ0FuUixVQUFVLENBQUNOLFVBQVUsQ0FBQyxNQUFLO29CQUMxQnVSLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFO2tCQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2tCQUVSLE9BQU9GLE9BQU87Z0JBQ2Y7ZUFDQTtjQUNEdEQsR0FBRyxFQUFFO2dCQUNKNVEsSUFBSSxFQUFFLEtBQUs7Z0JBQ1hwQixLQUFLLEVBQUVmLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQzBRLEdBQUc7Z0JBQ3hCeUQsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCdlUsT0FBTyxFQUFFQSxDQUFDMkQsS0FBSyxFQUFFMk0sS0FBSyxLQUFJO2tCQUN6QjJELFlBQVksQ0FBQzNELEtBQUssQ0FBQztnQkFDcEI7O2FBRUQ7WUFDRCxNQUFNL0gsS0FBSyxHQUFHO2NBQ2JqSCxJQUFJLEVBQUUsV0FBVztjQUNqQmlILEtBQUssRUFBRXRLLFFBQVEsQ0FBQ3NLLEtBQUs7Y0FDckI2SixnQkFBZ0IsRUFBRTRCLFNBQVM7Y0FDM0J4QixPQUFPO2NBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW1CQWhDLEtBQUssRUFBRUEsQ0FBQSxLQUFNeUQsWUFBWSxDQUFDLEtBQUs7YUFDL0I7WUFFRCxPQUFPO2NBQUVuQixZQUFZO2NBQUV2SyxLQUFLO2NBQUVpSyxPQUFPO2NBQUVLLFVBQVU7Y0FBRS9KLE9BQU87Y0FBRXFJO1lBQVUsQ0FBRTtVQUN6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkEsSUFBQW5VLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV1WCxNQUFNQSxDQUFDO1lBQUVDLFlBQVk7WUFBRUM7VUFBZSxDQUFFO1lBQ3ZELE1BQU07Y0FBRTNXO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU11VyxNQUFNLEdBQUdBLENBQUEsS0FBTUQsZUFBZSxDQUFDLENBQUNELFlBQVksQ0FBQztZQUNuRCxNQUFNdlUsSUFBSSxHQUFHdVUsWUFBWSxHQUFHLFdBQVcsR0FBRyxNQUFNO1lBQ2hELE9BQ0N6WCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQytKLFNBQVMsQ0FBQ3hULEtBQUssQ0FBTSxFQUN0QzlCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVGLE9BQU8sRUFBRTJVO1lBQU0sRUFBSSxDQUNuQyxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUEzWCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUFxTyxPQUFBLEdBQUFyTyxPQUFBO1VBQ0EsSUFBQTJYLE9BQUEsR0FBQTNYLE9BQUE7VUFDQSxJQUFBa04sTUFBQSxHQUFBbE4sT0FBQTtVQUVBLElBQUFzVyxpQkFBQSxHQUFBdFcsT0FBQTtVQUNBLElBQUFzTyxLQUFBLEdBQUF0TyxPQUFBO1VBRU0sU0FBVXdTLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUU1UixNQUFNO2NBQUVJLFFBQVE7Y0FBRUgsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUN5VyxVQUFVLEVBQUV2SyxTQUFTLENBQUMsR0FBR3ROLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM4VixZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHMVgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELE1BQU1tVyxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QnhLLFNBQVMsQ0FBQyxLQUFLLENBQUM7Y0FDaEJvSyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNMUUsVUFBVSxHQUFHQSxDQUFBLEtBQU0xRixTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3hDLE1BQU15SyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNeE0sS0FBSyxHQUFHdEssUUFBUSxDQUFDc0ssS0FBSyxDQUFDZ0MsT0FBTyxFQUFFO2NBQ3RDek0sUUFBUSxDQUFDO2dCQUFFeUs7Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUF6QyxNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDbkksUUFBUSxDQUFDc0ssS0FBSyxDQUFDLEVBQUV3TSxRQUFRLEVBQUUsaUJBQWlCLENBQUM7WUFFeEQsSUFBSUYsVUFBVSxFQUFFLE9BQU83WCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwTCxPQUFBLENBQUFvSCxVQUFVO2NBQUM1USxRQUFRLEVBQUVnVDtZQUFXLEVBQUk7WUFDNUQsSUFBSSxDQUFDalgsTUFBTSxDQUFDMEssS0FBSyxFQUFFK0osU0FBUyxFQUFFakIsTUFBTSxFQUFFLE9BQU9yVSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1SyxNQUFBLENBQUE0RixhQUFhO2NBQUNDLFVBQVUsRUFBRUE7WUFBVSxFQUFJO1lBRXRGLE9BQ0NoVCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFzQixHQUNwQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2dWLE9BQUEsQ0FBQUosTUFBTTtjQUFDQyxZQUFZLEVBQUVBLFlBQVk7Y0FBRUMsZUFBZSxFQUFFQTtZQUFlLEVBQUksRUFDdkVELFlBQVksR0FDWnpYLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBMLE9BQUEsQ0FBQW9ILFVBQVU7Y0FBQzVRLFFBQVEsRUFBRWdUO1lBQVcsRUFBSSxHQUVyQzlYLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzJMLEtBQUEsQ0FBQVksSUFBSTtjQUNKck0sU0FBUyxFQUFDLG1CQUFtQjtjQUM3QmlKLEtBQUssRUFBRWxMLE1BQU0sQ0FBQzBLLEtBQUssQ0FBQytKLFNBQVM7Y0FDN0IvSixLQUFLLEVBQUUsRUFBRTtjQUNUNkQsT0FBTyxFQUFFbUgsaUJBQUEsQ0FBQUc7WUFBZ0IsRUFFMUIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBMVcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtULGtCQUFBLEdBQUFsVCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXFILEdBQUEsR0FBQXJILE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVb1csa0JBQWtCQSxDQUFDO1lBQUUyQixZQUFZLEdBQUc7VUFBSSxDQUFFO1lBQ3pELE1BQU07Y0FBRUMsU0FBUztjQUFFbFg7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDL0MsTUFBTTtjQUFFOFc7WUFBYyxDQUFFLEdBQUcsSUFBQS9FLGtCQUFBLENBQUFNLDJCQUEyQixHQUFFO1lBQ3hELE1BQU16USxPQUFPLEdBQUdBLENBQUEsS0FBTTZELE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDOUMsT0FDQzlILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtFLEdBQ2hGOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDUCxJQUFJLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNaLE9BQU8sRUFBRWtWO1lBQWMsR0FDbkVuWCxLQUFLLENBQUNvWCxXQUFXLENBQUNyRSxHQUFHLENBQ2QsRUFDUmtFLFlBQVksSUFDWmhZLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQU8sUUFBUTtjQUFDMUUsT0FBTyxFQUFDLFNBQVM7Y0FBQ0gsT0FBTyxFQUFFQTtZQUFPLEdBQzFDakMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDVSxRQUFRLENBRXhCLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQTlELE1BQUEsR0FBQUMsT0FBQTtVQUlBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwTCxZQUFBLEdBQUExTCxPQUFBO1VBQ00sU0FBVWdULG9CQUFvQkEsQ0FBQztZQUFFK0UsWUFBWSxHQUFHO1VBQUksQ0FBRTtZQUMzRCxNQUFNO2NBQ0xoWCxLQUFLO2NBQ0xpWCxTQUFTO2NBQ1RsWCxLQUFLLEVBQUU7Z0JBQUVnVSxjQUFjLEVBQUVoVTtjQUFLLENBQUU7Y0FDaENGLE1BQU07Y0FDTkksUUFBUTtjQUNSSDtZQUFRLENBQ1IsR0FBRyxJQUFBWixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNMEssT0FBTyxHQUFHOUssS0FBSyxDQUFDd0IsS0FBSyxDQUFDUCxVQUFVLENBQUM4SixLQUFLLENBQzFDcU0sTUFBTSxDQUFDNUgsSUFBSSxJQUFJQSxJQUFJLENBQUNsTSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsQ0FDOUM0UixHQUFHLENBQUMxRixJQUFJLElBQUc7Y0FDWCxPQUFPO2dCQUFFalAsS0FBSyxFQUFFaVAsSUFBSSxDQUFDL04sRUFBRTtnQkFBRXVDLEtBQUssRUFBRXdMLElBQUksQ0FBQzFPO2NBQUssQ0FBRTtZQUM3QyxDQUFDLENBQUM7WUFFSCxJQUFJK0osWUFBWSxHQUFHO2NBQUV0SyxLQUFLLEVBQUUsS0FBSztjQUFFeUQsS0FBSyxFQUFFakUsS0FBSyxDQUFDbVMsT0FBTyxDQUFDbUY7WUFBVyxDQUFFO1lBQ3JFLElBQUluRixPQUFPLEdBQUduUixTQUFTO1lBQ3ZCLElBQUlkLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQzJILE9BQU8sS0FBS25SLFNBQVMsRUFBRTtjQUN6QyxNQUFNdVcsUUFBUSxHQUFHdFgsS0FBSyxDQUFDd0IsS0FBSyxDQUFDUCxVQUFVLENBQUM4SixLQUFLLENBQUM5SyxRQUFRLENBQUNzSyxLQUFLLENBQUMySCxPQUFPLENBQUM7Y0FDckVBLE9BQU8sR0FBR29GLFFBQVEsRUFBRTdWLEVBQUU7O1lBRXZCLE1BQU15SCxRQUFRLEdBQUd2RCxLQUFLLElBQUc7Y0FDeEIxRixRQUFRLENBQUNzSyxLQUFLLENBQUMwSyxHQUFHLENBQUM7Z0JBQUUvQyxPQUFPLEVBQUV2TSxLQUFLLENBQUMwRixNQUFNLENBQUM5SztjQUFLLENBQUUsQ0FBQztjQUNuRFQsUUFBUSxDQUFDO2dCQUFFeUssS0FBSyxFQUFFO2tCQUFFLEdBQUcxSyxNQUFNLENBQUMwSyxLQUFLO2tCQUFFMkgsT0FBTyxFQUFFdk0sS0FBSyxDQUFDMEYsTUFBTSxDQUFDOUs7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDdEUsQ0FBQztZQUNELE9BQ0N2QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQU8wSixPQUFPLEVBQUM7WUFBRSxHQUFFdkwsS0FBSyxDQUFDbVMsT0FBTyxDQUFDbE8sS0FBSyxDQUFTLEVBQy9DaEYsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDK0ksWUFBQSxDQUFBWSxXQUFXO2NBQUNoTCxLQUFLLEVBQUUyUixPQUFPO2NBQUVwSCxPQUFPLEVBQUUsQ0FBQ0QsWUFBWSxFQUFFLEdBQUdDLE9BQU8sQ0FBQztjQUFFNUIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQWxLLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1SixLQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVXNZLGlCQUFpQkEsQ0FBQztZQUFFQyxLQUFLO1lBQUVoSSxJQUFJO1lBQUU4QyxLQUFLO1lBQUVxQixRQUFRO1lBQUV6SztVQUFRLENBQUU7WUFDM0UsTUFBTTtjQUFFckosTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUU7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDd0wsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN00sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1xVSxZQUFZLEdBQUdyUCxLQUFLLElBQUc7Y0FDNUIsTUFBTTBGLE1BQU0sR0FBRzFGLEtBQUssQ0FBQ3dELGFBQWE7Y0FDbENxRyxJQUFJLENBQUNuRSxNQUFNLENBQUMvSyxJQUFJLENBQUMsR0FBRytLLE1BQU0sQ0FBQzlLLEtBQUs7Y0FDaEMySSxRQUFRLENBQUNvSixLQUFLLEVBQUU5QyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0N4USxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQXdELEtBQUs7Y0FDTDlDLFFBQVEsRUFBRThMLFlBQVk7Y0FDdEJoUixLQUFLLEVBQUVqRSxLQUFLLENBQUN3SyxLQUFLLENBQUNpRyxPQUFPLENBQUN4TSxLQUFLO2NBQ2hDMkYsV0FBVyxFQUFFNUosS0FBSyxDQUFDd0ssS0FBSyxDQUFDa04sUUFBUSxDQUFDOU4sV0FBVztjQUM3Q3BKLEtBQUssRUFBRWlQLElBQUksQ0FBQ2xQLElBQUk7Y0FDaEJBLElBQUksRUFBQyxNQUFNO2NBQ1g2QixPQUFPLEVBQUM7WUFBVSxFQUNqQixFQUNGbkQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBa0IsUUFBUTtjQUNSUixRQUFRLEVBQUU4TCxZQUFZO2NBQ3RCaFIsS0FBSyxFQUFFakUsS0FBSyxDQUFDd0ssS0FBSyxDQUFDa04sUUFBUSxDQUFDelQsS0FBSztjQUNqQ3pELEtBQUssRUFBRWlQLElBQUksQ0FBQ2dCLE9BQU87Y0FDbkI3RyxXQUFXLEVBQUU1SixLQUFLLENBQUN3SyxLQUFLLENBQUNpRyxPQUFPLENBQUM3RyxXQUFXO2NBQzVDckosSUFBSSxFQUFDLFNBQVM7Y0FDZDZCLE9BQU8sRUFBQztZQUFVLEVBQ2pCLEVBQ0RxVixLQUFLLEdBQUcsQ0FBQyxJQUNUeFksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxNQUFNO2NBQUNILE9BQU8sRUFBRUEsQ0FBQSxLQUFNMlIsUUFBUSxDQUFDckIsS0FBSztZQUFDLEdBQ25ELEdBQUcsRUFDSHZTLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3NQLE1BQU0sQ0FDYixDQUVWLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTFTLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5WSxrQkFBQSxHQUFBelksT0FBQTtVQUVNLFNBQVUwWSxhQUFhQSxDQUFDO1lBQUU3VCxRQUFRLEdBQUcvQztVQUFTLENBQUU7WUFDckQsTUFBTTtjQUFFbEIsTUFBTTtjQUFFQyxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3RELE1BQU0sQ0FBQ3dYLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc3WSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ2QsTUFBTSxDQUFDMEssS0FBSyxFQUFFa04sUUFBUSxFQUFFcEUsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN2RixNQUFNLENBQUN0SSxLQUFLLEVBQUUrTSxRQUFRLENBQUMsR0FBRzlZLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUN2Q2QsTUFBTSxDQUFDMEssS0FBSyxDQUFDa04sUUFBUSxDQUFDcEUsTUFBTSxHQUFHeFQsTUFBTSxDQUFDMEssS0FBSyxDQUFDa04sUUFBUSxHQUFHLENBQUM7Y0FBRW5YLElBQUksRUFBRSxFQUFFO2NBQUVrUSxPQUFPLEVBQUU7WUFBRSxDQUFFLENBQUMsQ0FDbEY7WUFFRCxNQUFNb0MsS0FBSyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEJpRixhQUFhLENBQUNELFVBQVUsR0FBRyxDQUFDLENBQUM7Y0FDN0JFLFFBQVEsQ0FBQyxDQUFDLEdBQUcvTSxLQUFLLEVBQUU7Z0JBQUV6SyxJQUFJLEVBQUUsRUFBRTtnQkFBRWtRLE9BQU8sRUFBRTtjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxNQUFNdUgsTUFBTSxHQUFHLEVBQUU7WUFDakIsTUFBTXBFLFFBQVEsR0FBR3JCLEtBQUssSUFBRztjQUN4QixNQUFNMEYsUUFBUSxHQUFHak4sS0FBSyxDQUFDa04sS0FBSyxDQUFDLENBQUMsRUFBRTNGLEtBQUssQ0FBQyxDQUFDNEYsTUFBTSxDQUFDbk4sS0FBSyxDQUFDa04sS0FBSyxDQUFDM0YsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQ3JFdUYsYUFBYSxDQUFDRyxRQUFRLENBQUMzRSxNQUFNLENBQUM7Y0FDOUJ5RSxRQUFRLENBQUNFLFFBQVEsQ0FBQztjQUNsQmxZLFFBQVEsQ0FBQztnQkFBRXlLLEtBQUssRUFBRTtrQkFBRSxHQUFHMUssTUFBTSxDQUFDMEssS0FBSztrQkFBRWpLLElBQUksRUFBRTBYO2dCQUFRLENBQUU7Z0JBQUU5WCxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUNELE1BQU1pWSxZQUFZLEdBQUdBLENBQUM3RixLQUFLLEVBQUUvUixLQUFLLEtBQUk7Y0FDckMsTUFBTTBKLElBQUksR0FBR2MsS0FBSztjQUNsQmQsSUFBSSxDQUFDcUksS0FBSyxDQUFDLEdBQUcvUixLQUFLO2NBQ25CdVgsUUFBUSxDQUFDN04sSUFBSSxDQUFDO2NBQ2RuSyxRQUFRLENBQUM7Z0JBQUV5SyxLQUFLLEVBQUU7a0JBQUUsR0FBRzFLLE1BQU0sQ0FBQzBLLEtBQUs7a0JBQUVrTixRQUFRLEVBQUV4TjtnQkFBSSxDQUFFO2dCQUFFL0osT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFDRCxLQUFLLElBQUkrSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcyTSxVQUFVLEVBQUUsRUFBRTNNLENBQUMsRUFBRTtjQUNwQzhNLE1BQU0sQ0FBQzVNLElBQUksQ0FDVm5NLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhWLGtCQUFBLENBQUFILGlCQUFpQjtnQkFDakJyTyxRQUFRLEVBQUVpUCxZQUFZO2dCQUN0QlgsS0FBSyxFQUFFSSxVQUFVO2dCQUNqQnBJLElBQUksRUFBRXpFLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2dCQUNkMEksUUFBUSxFQUFFQSxRQUFRO2dCQUNsQjVELEdBQUcsRUFBRSxRQUFROUUsQ0FBQyxFQUFFO2dCQUNoQnFILEtBQUssRUFBRXJIO2NBQUMsRUFDUCxDQUNGOztZQUdGLE9BQ0NqTSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFrQixHQUNuQ2lXLE1BQU0sRUFDUC9ZLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXlDLEdBQ3pEZ0MsUUFBUSxJQUNSOUUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNaLE9BQU8sRUFBRThCO1lBQVEsR0FDbEQvRCxLQUFLLENBQUNxQyxPQUFPLENBQUN3QixNQUFNLENBRXRCLEVBRUQ1RSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNILE9BQU8sRUFBRTRRO1lBQUssR0FDdEM3UyxLQUFLLENBQUNxQyxPQUFPLENBQUMwUSxHQUFHLENBQ1YsQ0FDRCxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNURBLElBQUE5VCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVbVosWUFBWUEsQ0FBQztZQUFFbk87VUFBSSxDQUErQztZQUNqRixPQUNDakwsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUI5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFZLEdBQUVtSSxJQUFJLENBQUMzSixJQUFJLEUsS0FBWSxFLEtBQUN0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU9xSSxJQUFJLENBQUN1RyxPQUFPLENBQVEsQ0FDNUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBeFIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFvWixjQUFBLEdBQUFwWixPQUFBO1VBQ0EsSUFBQVMsV0FBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVXFaLGdCQUFnQkEsQ0FBQztZQUFFeFU7VUFBUSxDQUFFO1lBQzVDLE1BQU07Y0FBRWpFLE1BQU07Y0FBRUMsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV0RCxNQUFNLENBQUN3TCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc3TSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTXVJLFFBQVEsR0FBR3ZELEtBQUssSUFBRztjQUN4QixNQUFNMEYsTUFBTSxHQUFHMUYsS0FBSyxDQUFDd0QsYUFBYTtjQUNsQyxNQUFNb0IsS0FBSyxHQUFHO2dCQUFFLEdBQUcxSyxNQUFNLENBQUMwSztjQUFLLENBQUU7Y0FFakN6SyxRQUFRLENBQUM7Z0JBQUV5SyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDYyxNQUFNLENBQUMvSyxJQUFJLEdBQUcrSyxNQUFNLENBQUM5SztnQkFBSyxDQUFFO2dCQUFFTCxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUVELE1BQU00TCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJak0sTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CMkwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRC9ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNbkMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJrSyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekIvSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTWlJLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTVFLFFBQVEsR0FBRyxDQUFDcEgsTUFBTSxDQUFDMEssS0FBSyxDQUFDZ08sSUFBSSxJQUFJLENBQUMxWSxNQUFNLENBQUMwSyxLQUFLLENBQUNpTyxVQUFVLElBQUksQ0FBQzNZLE1BQU0sQ0FBQzBLLEtBQUssQ0FBQ2tOLFFBQVEsRUFBRXBFLE1BQU07WUFFakcsT0FDQ3JVLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWlCLElBQUksUUFDSnpLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRHLEtBQUEsQ0FBQWtCLFFBQVE7Y0FDUlIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbEYsS0FBSyxFQUFFakUsS0FBSyxDQUFDd0ssS0FBSyxDQUFDZ08sSUFBSSxDQUFDdlUsS0FBSztjQUM3QnpELEtBQUssRUFBRVYsTUFBTSxDQUFDMEssS0FBSyxDQUFDZ08sSUFBSTtjQUN4QjVPLFdBQVcsRUFBRTVKLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQ2dPLElBQUksQ0FBQzVPLFdBQVc7Y0FDekNySixJQUFJLEVBQUM7WUFBTSxFQUNWLEVBQ0Z0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0RyxLQUFBLENBQUFrQixRQUFRO2NBQ1JSLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmxGLEtBQUssRUFBRWpFLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQ2lPLFVBQVUsQ0FBQ3hVLEtBQUs7Y0FDbkN6RCxLQUFLLEVBQUVWLE1BQU0sQ0FBQzBLLEtBQUssQ0FBQ2lPLFVBQVU7Y0FDOUI3TyxXQUFXLEVBQUU1SixLQUFLLENBQUN3SyxLQUFLLENBQUNpTyxVQUFVLENBQUM3TyxXQUFXO2NBQy9DckosSUFBSSxFQUFDO1lBQVksRUFDaEIsRUFDRnRCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3lXLGNBQUEsQ0FBQVYsYUFBYSxPQUFHLEVBQ2pCM1ksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRThKLGFBQWE7Y0FBRTNKLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7WUFBQSxHQUN4RDdDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3dCLE1BQU0sQ0FDYixFQUNUNUUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbEMsV0FBQSxDQUFBcUQsVUFBVTtjQUFDdVMsUUFBUSxFQUFFeFIsUUFBUTtjQUFFbUQsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDOUMsRUFDUjJFLGVBQWUsSUFDZjVNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDL0IsU0FBUyxFQUFFQSxTQUFTO2NBQUVtQyxRQUFRLEVBQUVpSTtZQUFhLEdBQzFEL00sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDbU0sTUFBTSxDQUFDdEksTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFQSxJQUFBNUUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtOLE1BQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBbU4sU0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXVKLEtBQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBc08sS0FBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFvWixjQUFBLEdBQUFwWixPQUFBO1VBQ0EsSUFBQXdaLGFBQUEsR0FBQXhaLE9BQUE7VUFFTSxTQUFVdVMsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUUzUixNQUFNO2NBQUVJLFFBQVE7Y0FBRUgsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUN5VyxVQUFVLEVBQUV2SyxTQUFTLENBQUMsR0FBR3ROLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMrWCxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHM1osTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELE1BQU1pWSxjQUFjLEdBQUdBLENBQUEsS0FBTUQsZUFBZSxDQUFDLENBQUNELFlBQVksQ0FBQztZQUMzRCxJQUFBNVEsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ25JLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQyxFQUFFLE1BQU16SyxRQUFRLENBQUNHLFFBQVEsQ0FBQ3NNLE9BQU8sRUFBRSxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFbEYsSUFBSXNLLFVBQVUsRUFBRSxPQUFPN1gsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsS0FBQSxDQUFBOFAsZ0JBQWdCO2NBQUN4VSxRQUFRLEVBQUVBLENBQUEsS0FBTXdJLFNBQVMsQ0FBQyxLQUFLO1lBQUMsRUFBSTtZQUU3RSxJQUFJLENBQUN6TSxNQUFNLENBQUMwSyxLQUFLLENBQUNrTixRQUFRLElBQUksQ0FBQzVYLE1BQU0sQ0FBQzBLLEtBQUssQ0FBQ2dPLElBQUksSUFBSSxDQUFDMVksTUFBTSxDQUFDMEssS0FBSyxDQUFDaU8sVUFBVSxFQUFFO2NBQzdFLE9BQU94WixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1SyxNQUFBLENBQUFLLFVBQVU7Z0JBQUNsTSxJQUFJLEVBQUMsUUFBUTtnQkFBQ21NLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtjQUFDLEVBQUk7O1lBR3JFLE9BQ0N0TixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN3SyxTQUFBLENBQUFNLGdCQUFnQjtjQUFDcE0sSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNoQ3RCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dLLFNBQUEsQ0FBQU0sZ0JBQWdCO2NBQUNwTSxJQUFJLEVBQUM7WUFBWSxFQUFHLEVBQ3RDdEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcEM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQ2tOLFFBQVEsQ0FBQzNXLEtBQUssQ0FBTSxFQUNyQzlCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0YsT0FBTyxFQUFFNFc7WUFBYyxFQUFJLENBQzNDLEVBQ1JGLFlBQVksR0FDWjFaLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3lXLGNBQUEsQ0FBQVYsYUFBYTtjQUFDN1QsUUFBUSxFQUFFOFU7WUFBYyxFQUFJLEdBRTNDNVosTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMkwsS0FBQSxDQUFBWSxJQUFJO2NBQ0pyTSxTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDaUosS0FBSyxFQUFFbEwsTUFBTSxDQUFDMEssS0FBSyxDQUFDa04sUUFBUTtjQUM1QmxOLEtBQUssRUFBRSxFQUFFO2NBQ1Q2RCxPQUFPLEVBQUVxSyxhQUFBLENBQUFMO1lBQVksRUFFdEIsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFwWixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFPLGNBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFLLFlBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUE0WixXQUFBLEdBQUE1WixPQUFBO1VBRU87VUFBVSxTQUFVNlosVUFBVUEsQ0FBQztZQUFFQztVQUFVLENBQUU7WUFDbkQsTUFBTTtjQUFFOVk7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDdkMsTUFBTSxDQUFDSSxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUd6QixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0QsTUFBTSxDQUFDQyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc3QixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTVMsWUFBWSxHQUFHQSxDQUFBLEtBQU1YLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUNsRCxNQUFNb0MsaUJBQWlCLEdBQUdBLENBQUEsS0FBTWhDLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUNwRSxNQUFNbUYsR0FBRyxHQUFHLDZEQUE2RDtZQUN6RSxNQUFNNUMsTUFBTSxHQUFHLE1BQU13QyxLQUFLLElBQUksTUFBTTFGLFFBQVEsQ0FBQ3lGLElBQUksQ0FBQztjQUFFNUUsS0FBSyxFQUFFNkUsS0FBSyxDQUFDMEYsTUFBTSxDQUFDOUs7WUFBSyxDQUFFLENBQUM7WUFFaEYsT0FDQ3ZCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsa0JBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUEwUyxZQUFZO2NBQUNELFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQ3hDL1osTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUVpRTtZQUFHLEdBQ3JCL0csTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkMsR0FDL0Q5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2lYLFdBQUEsQ0FBQTFPLGdCQUFnQjtjQUFDMUosZ0JBQWdCLEVBQUVBO1lBQWdCLEVBQUksRUFDeER6QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFyRCxlQUFlO2NBQUMzQyxJQUFJLEVBQUMsT0FBTztjQUFDNEMsUUFBUSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFQTtZQUFNLEdBQ3hEbEQsUUFBUSxDQUFDYSxLQUFLLENBQ0UsQ0FDYixFQUNOOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDekMsV0FBQSxDQUFBNkQsVUFBVSxPQUFHLENBQ0wsQ0FDRixFQUNUaEUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdEMsWUFBQSxDQUFBOEQsa0JBQWtCO2NBQUNLLElBQUksRUFBRWpELGFBQWE7Y0FBRStDLE9BQU8sRUFBRW5DO1lBQVksRUFBSSxFQUNsRXBDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3BDLGNBQUEsQ0FBQTZELHdCQUF3QjtjQUFDSSxJQUFJLEVBQUU3QyxlQUFlO2NBQUUwQyxJQUFJLEVBQUVyRCxRQUFRLENBQUNxRCxJQUFJO2NBQUVDLE9BQU8sRUFBRVY7WUFBaUIsRUFBSSxDQUMzRjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBN0QsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFJQSxJQUFBZ2EsZUFBQSxHQUFBaGEsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFpYSxVQUFBLEdBQUFqYSxPQUFBO1VBQ0EsSUFBQWthLE1BQUEsR0FBQWxhLE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUNBLElBQUEyWCxPQUFBLEdBQUEzWCxPQUFBO1VBRU87VUFBWSxTQUFVbWEsa0JBQWtCQSxDQUFDO1lBQUVMLFVBQVU7WUFBRS9ZLEtBQUs7WUFBRUM7VUFBUSxDQUFFO1lBQzlFLE1BQU0sR0FBR2lXLFNBQVMsQ0FBQyxHQUFHbFgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQ2QsTUFBTSxFQUFFK0ksU0FBUyxDQUFDLEdBQUc1SixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBd0JWLFFBQVEsQ0FBQ3NNLE9BQU8sRUFBRSxDQUFDO1lBQ3JGLE1BQU0sQ0FBQzhNLFVBQVUsRUFBRXRaLEtBQUssQ0FBQyxHQUFHLElBQUErSCxNQUFBLENBQUF3UixRQUFRLEVBQUNMLGVBQUEsQ0FBQTNXLE1BQVksQ0FBQ2lYLFNBQVMsQ0FBQztZQUM1RCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6YSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTTtjQUFFMkM7WUFBSSxDQUFFLEdBQUdyRCxRQUFRO1lBQ3pCLE1BQU1nWCxTQUFTLEdBQUdqWCxLQUFLLENBQUMwWixhQUFhLENBQUNDLEdBQUcsQ0FBQ3JXLElBQUksQ0FBQztZQUMvQyxNQUFNeEQsUUFBUSxHQUFHbUssSUFBSSxJQUFHO2NBQ3ZCLE1BQU0yUCxTQUFTLEdBQUc7Z0JBQUUsR0FBRy9aLE1BQU07Z0JBQUUsR0FBR29LO2NBQUksQ0FBRTtjQUN4Q3JCLFNBQVMsQ0FBQ2dSLFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsTUFBTXpaLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCRixRQUFRLENBQUNxSyxTQUFTLENBQUNrSSxLQUFLLEVBQUU7Y0FDMUI1SixTQUFTLENBQUMzSSxRQUFRLENBQUNzTSxPQUFPLEVBQUUsQ0FBQztZQUM5QixDQUFDO1lBRUQ7WUFDQXBILFVBQVUsQ0FBQ2xGLFFBQVEsR0FBR0EsUUFBUTtZQUM5QixJQUFJLENBQUNnWCxTQUFTLEVBQUUsTUFBTSxJQUFJNEMsS0FBSyxDQUFDLHFCQUFxQnZXLElBQUksbUJBQW1CLENBQUM7WUFFN0UsSUFBQXdFLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNuSSxRQUFRLENBQUMsRUFBRSxNQUFNaVcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLElBQUksQ0FBQ21ELFVBQVUsRUFBRSxPQUFPcmEsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBMGEsT0FBTztjQUFDN0osTUFBTSxFQUFFO1lBQUksRUFBSTtZQUVqRCxPQUNDalIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMUMsUUFBQSxDQUFBc00sYUFBYSxDQUFDdU8sUUFBUTtjQUN0QnhaLEtBQUssRUFBRTtnQkFDTk4sUUFBUTtnQkFDUkYsS0FBSztnQkFDTEMsS0FBSztnQkFDTEgsTUFBTTtnQkFDTk0sU0FBUztnQkFDVEQsT0FBTyxFQUFFTCxNQUFNLENBQUNLLE9BQU87Z0JBQ3ZCSixRQUFRO2dCQUNSMFosVUFBVTtnQkFDVkMsYUFBYTtnQkFDYnhDOztZQUNBLEdBRURqWSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNnVixPQUFBLENBQUFrQyxVQUFVO2NBQUNDLFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQ3RDL1osTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBMFQsYUFBYSxRQUNiaGIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDc1gsVUFBQSxDQUFBZSxzQkFBc0IsT0FBRyxFQUMxQmpiLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3VYLE1BQUEsQ0FBQWpJLGdCQUFnQjtjQUFDNU4sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDakIsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7VUMzREE7O1VBRUE0VyxNQUFBLENBQUFDLGNBQUEsQ0FBQS9ULE9BQUE7WUFDQTdGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBdkIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRU0sU0FBVThELFVBQVVBLENBQUM7WUFBRWtFLFFBQVE7WUFBRXFPO1VBQVEsQ0FBaUQ7WUFDL0YsTUFBTTtjQUFFelYsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV2RSxNQUFNK0MsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6Qjs7Ozs7Y0FLQSxNQUFNbkQsS0FBSyxDQUFDd0IsS0FBSyxDQUFDUCxVQUFVLENBQUNpVSxHQUFHLENBQUN5RSxHQUFHLENBQUMxWixRQUFRLENBQUN3QixFQUFFLENBQUMsQ0FBQ3dULEdBQUcsQ0FBQ3BWLE1BQU0sQ0FBQztjQUM3RCxNQUFNSSxRQUFRLENBQUNnVixHQUFHLENBQUNwVixNQUFNLENBQUM7Y0FFMUJDLFFBQVEsQ0FBQztnQkFBRUksT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzVCRixLQUFLLENBQUMwRixJQUFJLEVBQUU7Y0FDWixJQUFJNFAsUUFBUSxFQUFFQSxRQUFRLEVBQUU7WUFDekIsQ0FBQztZQUNELE1BQU16RixLQUFLLEdBQUc7Y0FBRTVJLFFBQVEsRUFBRSxDQUFDcEgsTUFBTSxDQUFDSyxPQUFPLElBQUkrRyxRQUFRO2NBQUVqRixPQUFPLEVBQUVtQjtZQUFNLENBQUU7WUFFeEUsT0FDQ25FLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLME47WUFBSyxHQUNqQzlQLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3NELElBQUksQ0FDWDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBMUcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUksZ0JBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVV5TixnQkFBZ0JBLENBQUM7WUFBRXBNO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUVULE1BQU07Y0FBRUUsS0FBSztjQUFFRSxRQUFRO2NBQUVIO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0rQyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFN0MsSUFBSTtjQUFFQztZQUFLLENBQUUsS0FBSTtjQUN4QyxNQUFNTixRQUFRLENBQUN5RixJQUFJLENBQUM7Z0JBQUU2RSxLQUFLLEVBQUU7a0JBQUUsR0FBRzFLLE1BQU0sQ0FBQzBLLEtBQUs7a0JBQUUsQ0FBQ2pLLElBQUksR0FBR0M7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7Y0FDbEVULFFBQVEsQ0FBQztnQkFBRXlLLEtBQUssRUFBRTtrQkFBRSxHQUFHMUssTUFBTSxDQUFDMEssS0FBSztrQkFBRSxDQUFDakssSUFBSSxHQUFHQztnQkFBSztjQUFFLENBQUUsQ0FBQztZQUN4RCxDQUFDO1lBRUQsTUFBTUEsS0FBSyxHQUFHTixRQUFRLENBQUNzSyxLQUFLLENBQUNqSyxJQUFJLENBQUMsSUFBSVAsS0FBSyxDQUFDd0ssS0FBSyxDQUFDakssSUFBSSxDQUFDLENBQUNxSixXQUFXO1lBQ25FLE9BQ0MzSyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFPMEosT0FBTyxFQUFDO1lBQUUsR0FBRXZMLEtBQUssQ0FBQ3dLLEtBQUssQ0FBQ2pLLElBQUksQ0FBQyxDQUFDMEQsS0FBSyxDQUFTLEVBQ25EaEYsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdkMsZ0JBQUEsQ0FBQTRELGVBQWU7Y0FBQzNDLElBQUksRUFBRUEsSUFBSTtjQUFFNkMsTUFBTSxFQUFFQTtZQUFNLEdBQ3pDNUMsS0FBSyxDQUNXLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQXZCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxSCxHQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQW1iLFdBQUEsR0FBQW5iLE9BQUE7VUFHQTs7Ozs7O1VBTU0sU0FBVXVOLFVBQVVBLENBQUM7WUFBRWxNLElBQUk7WUFBRW1NLFFBQVE7WUFBRWhDLGVBQWUsR0FBRztVQUFFLENBQUU7WUFDbEUsTUFBTTtjQUFFMUssS0FBSztjQUFFRTtZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNRLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNc0csUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDaEgsUUFBUSxDQUFDb2E7WUFBUSxDQUFFO1lBQ2pELE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNelosa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBRTdELE9BQ0M1QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFnSSxTQUFTO2NBQ1R4TSxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCK0IsSUFBSSxFQUFFOUQsS0FBSyxDQUFDa0IsVUFBVSxDQUFDc04sS0FBSyxDQUFDek4sS0FBSztjQUNsQ0ssV0FBVyxFQUFFcEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDc04sS0FBSyxDQUFDcE47WUFBVyxHQUUvQ25DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNaLE9BQU8sRUFBRXlLO1lBQVEsR0FDbEQxTSxLQUFLLENBQUNxQyxPQUFPLENBQUM4SixNQUFNLENBQ2IsRUFDVGxOLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQU8sUUFBUTtjQUFBLEdBQUtJLFFBQVE7Y0FBRWpGLE9BQU8sRUFBRXNZLFVBQVU7Y0FBRW5ZLE9BQU8sRUFBQztZQUFTLEdBQzVEcEMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDbVksV0FBVyxDQUNoQixDQUNOLEVBQ052YixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixFQUFPLENBQ3ZDLEVBQ1hsQixlQUFlLElBQ2Y1QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN3WSxXQUFBLENBQUE1UCxxQkFBcUI7Y0FBQ2xILElBQUksRUFBRWhELElBQUk7Y0FBRWlELE9BQU8sRUFBRStXLFVBQVU7Y0FBRTdQLGVBQWUsRUFBRUE7WUFBZSxFQUN4RixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF6TCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcUgsR0FBQSxHQUFBckgsT0FBQTtVQUVBOzs7Ozs7O1VBT00sU0FBVWdiLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQUVwYSxNQUFNO2NBQUVFLEtBQUs7Y0FBRUUsUUFBUTtjQUFFSCxRQUFRO2NBQUVFO1lBQUssQ0FBRSxHQUFHLElBQUFkLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3ZFLE1BQU1DLFlBQVksR0FBRyxNQUFBQSxDQUFPO2NBQUU4SSxhQUFhLEVBQUU7Z0JBQUU3SSxJQUFJO2dCQUFFQztjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQ2pFLE1BQU1OLFFBQVEsQ0FBQ2dWLEdBQUcsQ0FBQztnQkFBRSxDQUFDM1UsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztjQUNyQyxNQUFNUCxLQUFLLENBQUMwRixJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUNELE1BQU12QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFZ0csYUFBYSxFQUFFO2dCQUFFN0ksSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUMzRCxNQUFNTixRQUFRLENBQUNnVixHQUFHLENBQUM7Z0JBQUUxSyxLQUFLLEVBQUU7a0JBQUUsQ0FBQ2pLLElBQUksR0FBR0M7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7Y0FDaEQsTUFBTVAsS0FBSyxDQUFDMEYsSUFBSSxFQUFFO1lBQ25CLENBQUM7WUFDRCxNQUFNbkYsS0FBSyxHQUFHVixNQUFNLENBQUMwSyxLQUFLLENBQUNpUSxTQUFTLElBQUl6YSxLQUFLLENBQUN3SyxLQUFLLENBQUNpUSxTQUFTLENBQUM3USxXQUFXO1lBRXpFLElBQUksQ0FBQzFKLFFBQVEsQ0FBQ3NLLEtBQUssQ0FBQ2tRLFVBQVUsQ0FBQ3paLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLElBQUk7WUFFakUsT0FDQ2hDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0I5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGdCQUFRN0IsS0FBSyxDQUFDa0IsVUFBVSxDQUFDRSxXQUFXLENBQVMsRUFDN0NuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMwRSxHQUFBLENBQUFyRCxlQUFlO2NBQUMzQyxJQUFJLEVBQUMsYUFBYTtjQUFDNEMsUUFBUSxFQUFDLEdBQUc7Y0FBQ0MsTUFBTSxFQUFFOUM7WUFBWSxHQUNuRUosUUFBUSxDQUFDa0IsV0FBVyxDQUNKLENBQ2IsRUFDTm5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0I5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGdCQUFRN0IsS0FBSyxDQUFDd0ssS0FBSyxDQUFDaVEsU0FBUyxDQUFDeFcsS0FBSyxDQUFTLEVBQzVDaEYsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMEUsR0FBQSxDQUFBckQsZUFBZTtjQUFDM0MsSUFBSSxFQUFDLFdBQVc7Y0FBQzZDLE1BQU0sRUFBRUE7WUFBTSxHQUM5QzVDLEtBQUssQ0FDVyxDQUNiLENBQ0o7VUFFTCJ9