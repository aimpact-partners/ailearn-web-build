System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/form/react-select", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/tabs", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core"], function (_export, _context2) {
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
    }, function (_pragmateUi006Empty) {
      dependency_17 = _pragmateUi006Empty;
    }, function (_pragmateUi006Tabs) {
      dependency_18 = _pragmateUi006Tabs;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-sdk/config', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/tabs', dependency_18], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_19], ['pragmate-ui/chips', dependency_20], ['@beyond-js/kernel/core', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./activity-header
      *********************************/
      ims.set('./activity-header', {
        hash: 1923705544,
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
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
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
              onClose: onCloseModal,
              onConfirm: () => {
                clearData();
                store.editActivity = undefined;
                onCloseModal();
              }
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
        hash: 1893364271,
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
        hash: 2014892860,
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
        hash: 2537925641,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: toggleModal,
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
              onClose: toggleModal
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
        hash: 953460462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _coverImage = require("./components/cover-image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _cancelModal = require("./components/cancel-modal");
          var _saveButton = require("./save-button");
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
            const cls = `header-module__container  flex-container flex-space-between`;
            const disabled = {
              disabled: activity.aiCompleted
            };
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
            }, _react.default.createElement(_saveButton.SaveButton, null), _react.default.createElement(_components.Button, {
              ...disabled,
              icon: _icons.ICONS.aiStars,
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
        hash: 232904589,
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
        hash: 908134392,
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
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            console.log(20, showSuggestions);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              ...disabled,
              onClick: toggleShow,
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
              onClose: toggleShow
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
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./forms/multiple-choice/choices/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./forms/multiple-choice/choices/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxpbmsiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImljb24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsImJhY2siLCJtb2R1bGUiLCJ0eXBlcyIsImRhdGFUeXBlIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiYm9yZGVyZWQiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9lcnJvciIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50Iiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwicmVmaW5pbmdRdWVzdGlvbnMiLCJCcmVhZENydW1iSGVhZGVyIiwiSWNvbiIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJlZGl0IiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJvbkRlbGV0ZSIsImNsZWFyIiwiaGFzVmFsdWVzIiwiZGVsZXRlIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiYWRkQW5zd2VyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwiYW5zd2VycyIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiX3JlbGF0ZWRBY3Rpdml0eSIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb3JlIiwiX29wdGlvbnNIZWFkZXIiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwic2V0IiwiYWN0aW9uc1NwZWNzIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJpdGVtc1R5cGUiLCJhZGRCdWxsZXRQb2ludCIsImJ1bGxldFBvaW50IiwiQW5zd2VycyIsImFuc3dlciIsImZpbHRlciIsInJlbGF0ZWQiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwiX2JyZWFkY3J1bWIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsImFpQ29tcGxldGVkIiwiTmF2YmFySGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIl9oZWFkZXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktaGVhZGVyLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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