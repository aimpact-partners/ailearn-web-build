System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/form/react-select", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/empty", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
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
    }, function (_pragmateUi006Alert) {
      dependency_8 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-sdk/config', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/empty', dependency_18], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_19], ['pragmate-ui/chips', dependency_20], ['@beyond-js/kernel/core', dependency_21]]);
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
        hash: 485454423,
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
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
        hash: 1391938227,
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
                if (!item?.required) return false;
                if (typeof item?.required === 'string') return !activity.materials[item.required];
                return item.required.some(property => !activity.materials[property]);
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
        hash: 760220754,
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

      /************************************
      INTERNAL MODULE: ./forms/delete-modal
      ************************************/

      ims.set('./forms/delete-modal', {
        hash: 3870887364,
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
                await activity.clearContent();
                const data = {
                  specs: activity.specs.getData(),
                  materials: activity.materials.getData(),
                  updated: false
                };
                onClose();
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
        hash: 58856492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
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
              activity,
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [showBackModal, setShowBackModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onSave = event => store.save({
              title: event.target.value
            });
            const onCloseModal = () => setShowBackModal(false);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const disabled = {
              disabled: activity.aiCompleted
            };
            const cls = `header-module__container  flex-container flex-space-between`;
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
            }, activity.title)), _react.default.createElement(_coverImage.CoverImage, null), _react.default.createElement("section", {
              className: "header-container__actions"
            }, _react.default.createElement(_ui.AIButton, {
              ...disabled,
              variant: "primary",
              bordered: true,
              onClick: toggleSuggestions
            }, texts.actions.generate)))), _react.default.createElement(_cancelModal.CancelChangesModal, {
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
        hash: 342339634,
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
              onClick: onManual,
              ...disabled
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
        hash: 3619594582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
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
              editData
            } = (0, _context.useModuleContext)();
            const saveEditable = ({
              name,
              value
            }) => editData({
              [name]: value
            });
            const onSave = async ({
              name,
              value
            }) => editData({
              specs: {
                [name]: value
              }
            });
            const value = values.specs.objective ?? texts.specs.objective.placeholder;
            if (!activity.specs.properties.includes('objective')) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.activities.description), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, activity.description)), _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.specs.objective.label), _react.default.createElement(_contentEditable.ContentEditable, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJvbkNvbmZpcm0iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwib25DbGljayIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsImFjdGlvbnMiLCJiYWNrIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsImJvcmRlcmVkIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwib25DbG9zZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIl91aSIsIl9ob29rcyIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0aW5nSW1hZ2UiLCJzZXRFcnJvciIsInNldFZhbHVlcyIsIm5vdGVzIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic3VidGl0bGUiLCJGb3JtIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50Iiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwicmVmaW5pbmdRdWVzdGlvbnMiLCJCcmVhZENydW1iSGVhZGVyIiwiSWNvbiIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJlZGl0IiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImFpQ29tcGxldGVkIiwiQUlCdXR0b24iLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpdGVtIiwiaXNEaXNhYmxlZCIsInJlcXVpcmVkIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZGVsZXRlTW9kYWwiLCJBY3Rpdml0eUJhc2VGb3JtIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiZGVsZXRlIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInJlbGF0ZWQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwicXVlc3Rpb24iLCJpbmRleCIsInRvZ2dsZUFuc3dlckZvcm0iLCJjbGVhciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwidXBkYXRlIiwib25BZGQiLCJhZGRPcHRpb24iLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJjb3JyZWN0Iiwic2V0Q29ycmVjdCIsInNldE9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIm9uRGVsZXRlIiwicmVtb3ZlT3B0aW9uIiwiQ2hpcCIsInNpemluZyIsIm11bHRpcGxlQ2hvaWNlIiwibGFiZWxzIiwiX2Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJxdWVzdGlvbnMiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhbnN3ZXJzIiwidG9nZ2xlTWFudWFsIiwiTWFudWFsRm9ybSIsIl9vcHRpb25zSGVhZGVyIiwiX3VzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsInNldCIsIm1hcCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiY2FsbGJhY2siLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZW1wdHlPcHRpb25zIiwiX2NvcmUiLCJxdWVzdGlvbkxhYmVscyIsImFkZEFuc3dlciIsInNldEFkZEFuc3dlciIsInNldFVwZGF0ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJIZWFkZXIiLCJzcGVjc0VkaXRpb24iLCJzZXRTcGVjc0VkaXRpb24iLCJ0b2dnbGUiLCJfaGVhZGVyIiwibWFudWFsRm9ybSIsImNsb3NlTWFudWFsIiwib25CaW5kZXIiLCJyZWZpbmVBY3Rpb24iLCJpdGVtc1R5cGUiLCJhZGRCdWxsZXRQb2ludCIsImJ1bGxldFBvaW50IiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJzZWxlY3RlZCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwiX2JyZWFkY3J1bWIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIk5hdmJhckhlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9vYmplY3RpdmUiLCJfZm9ybXMiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImluc3BpcmF0aW9uIiwib2JqZWN0aXZlIiwicHJvcGVydGllcyJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS1oZWFkZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9B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