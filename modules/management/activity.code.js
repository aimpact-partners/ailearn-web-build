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
        hash: 3741894077,
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
        hash: 2579582345,
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
        hash: 3327778923,
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
            const edit = () => setEditOptionSpecs(true);
            const back = () => setEditOptionSpecs(false);
            const onManual = () => setManual(false);
            const openManual = () => setManual(true);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manualForm) return _react.default.createElement(_manual.MultipleChoiceManualForm, {
              onCancel: () => setManual(false)
            });
            if (!values.specs?.questions?.length) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_empty.EmptySpecs, {
                name: "multiple-choice",
                onManual: openManual
              }));
            }
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
        hash: 977045786,
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
            }, texts.actions.generate));
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
        hash: 1995870307,
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
          var _contentEditable = require("./components/content-editable");
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
            const saveEditable = ({
              name,
              value
            }) => editData({
              [name]: value
            });
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
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.activities.description), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, activity.description)), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxpbmsiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImljb24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsImJhY2siLCJtb2R1bGUiLCJ0eXBlcyIsImRhdGFUeXBlIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiYm9yZGVyZWQiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9lcnJvciIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50Iiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwicmVmaW5pbmdRdWVzdGlvbnMiLCJCcmVhZENydW1iSGVhZGVyIiwiSWNvbiIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJlZGl0IiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJvbkRlbGV0ZSIsImNsZWFyIiwiZGVsZXRlIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiYWRkQW5zd2VyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsInF1ZXN0aW9uIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiX3JlbGF0ZWRBY3Rpdml0eSIsIm1hbnVhbEZvcm0iLCJlZGl0T3B0aW9uc1NlcGNzIiwic2V0RWRpdE9wdGlvblNwZWNzIiwib3Blbk1hbnVhbCIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb3JlIiwiX29wdGlvbnNIZWFkZXIiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwic2V0IiwiYWN0aW9uc1NwZWNzIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJpdGVtc1R5cGUiLCJhZGRCdWxsZXRQb2ludCIsImJ1bGxldFBvaW50IiwiQW5zd2VycyIsImFuc3dlciIsImZpbHRlciIsInJlbGF0ZWQiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuTWFudWFsRm9ybSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJhc3Nlc3NtZW50IiwiX2JyZWFkY3J1bWIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsImFpQ29tcGxldGVkIiwiTmF2YmFySGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIl9oZWFkZXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktaGVhZGVyLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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