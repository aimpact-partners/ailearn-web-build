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
        hash: 1763212402,
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
        hash: 867437584,
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
            }, _react.default.createElement("h6", null, texts.specs.criteria.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onAdd
            }, texts.actions.add))), output);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/spoken/criteria-item
      ********************************************/

      ims.set('./forms/spoken/criteria-item', {
        hash: 2100267794,
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
            }, _react.default.createElement("strong", null, data.name, ": "), " ", _react.default.createElement("span", null, data.subject));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./forms/spoken/form
      ***********************************/

      ims.set('./forms/spoken/form', {
        hash: 3997932191,
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
                }
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              label: texts.specs.task.label,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              label: texts.specs.assessment.label,
              placeholder: texts.specs.assessment.placeholder,
              name: "task"
            }), _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 2936092302,
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
        hash: 1584241115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJvbkNvbmZpcm0iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwib25DbGljayIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsImFjdGlvbnMiLCJiYWNrIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsImJvcmRlcmVkIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwib25DbG9zZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJfdWkiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJ0b2dnbGVNb2RhbCIsIkFJQnV0dG9uIiwibG9nIiwicGljdHVyZSIsIkFJSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwiUmVmaW5lbWVudE1vZGFsIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0T3BlbkNvbmZpcm0iLCJzdWJ0aXRsZSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIl9ob29rcyIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwidXNlQmluZGVyIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfZXJyb3IiLCJfY29uZmlybSIsInNldEVycm9yIiwic2V0VmFsdWVzIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJtZXNzYWdlIiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsIkZvcm0iLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImRhdGEiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJJY29uIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3VnZ2VzdGlvblNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiYnRuTGFiZWwiLCJNYW51YWxEZWJhdGVGb3JtIiwiRGViYXRlRm9ybSIsInN1YmplY3QiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsInRvZ2dsZU1hbnVhbCIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0QW5zd2VycyIsImFjdGlvbnNTcGVjcyIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJtYXAiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsImNhbGxiYWNrIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJDcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbk1hbnVhbEZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIl9jcml0ZXJpYUl0ZW0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJfYnJlYWRjcnVtYiIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiaW5zcGlyYXRpb24iLCJvYmplY3RpdmUiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWhlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2NvbmZpcm0udHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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