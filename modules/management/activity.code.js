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
        hash: 1319615861,
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
        hash: 77432613,
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
            }, texts.actions.inspiration), _react.default.createElement(_components.Button, {
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
        hash: 2614642485,
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
        hash: 2553784977,
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
              editData,
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
        hash: 3521837489,
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
              onCancel: onManual
            });
            if (!values.specs?.questions?.length) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_empty.EmptySpecs, {
                name: "multiple-choice",
                onManual: openManual,
                suggestionSpecs: {
                  related: activity.specs.related
                }
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
        hash: 2047343629,
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
            }, _react.default.createElement(_components.Button, {
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
        hash: 4200214229,
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
        hash: 4096234531,
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
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              ...disabled,
              onClick: toggleShow,
              variant: "primary"
            }, texts.actions.inspiration), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual,
              ...disabled
            }, texts.actions.manual)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9jYW5jZWxNb2RhbCIsIl9pY29ucyIsIl9hY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9zYXZlQnV0dG9uIiwiX3JvdXRpbmciLCJBY3Rpdml0eUhlYWRlciIsInZhbHVlcyIsImVkaXREYXRhIiwidGV4dHMiLCJzdG9yZSIsImFjdGl2aXR5IiwidXBkYXRlZCIsImNsZWFyRGF0YSIsInVzZU1vZHVsZUNvbnRleHQiLCJzYXZlRWRpdGFibGUiLCJuYW1lIiwidmFsdWUiLCJzaG93QmFja01vZGFsIiwic2V0U2hvd0JhY2tNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsImRlc2NyaXB0aW9uIiwib25DbG9zZU1vZGFsIiwib25CYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJlZGl0QWN0aXZpdHkiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxpbmsiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImljb24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsImJhY2siLCJtb2R1bGUiLCJ0eXBlcyIsImRhdGFUeXBlIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiYm9yZGVyZWQiLCJnZW5lcmF0ZSIsIlNhdmVCdXR0b24iLCJDb3ZlckltYWdlIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJvblNhdmUiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIl9tb2RhbCIsInNob3ciLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsInNhdmUiLCJldmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJfdWkiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9lcnJvciIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRm9ybSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50Iiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJkYXRhIiwicmVmaW5pbmdRdWVzdGlvbnMiLCJCcmVhZENydW1iSGVhZGVyIiwiSWNvbiIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwiYnRuTGFiZWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsImNoYXJhY3RlciIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJlZGl0IiwiTWFya2Rvd24iLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImluc3BpcmF0aW9uIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImlzRGlzYWJsZWQiLCJyZXF1aXJlZCIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJpbmRleCIsInRvZ2dsZUFuc3dlckZvcm0iLCJjbGVhciIsImFkZEFuc3dlciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwib25BZGQiLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJxdWVzdGlvbiIsInVwZGF0ZSIsInNldFVwZGF0ZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIm1hcmsiLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsIkl0ZW1PcHRpb24iLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJtYW51YWxGb3JtIiwiZWRpdE9wdGlvbnNTZXBjcyIsInNldEVkaXRPcHRpb25TcGVjcyIsIm9wZW5NYW51YWwiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInJlbGF0ZWQiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvcmUiLCJfb3B0aW9uc0hlYWRlciIsInNldE9wdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInNldEFkZEFuc3dlciIsInNldEFuc3dlcnMiLCJtYXAiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJhY3Rpb25zU3BlY3MiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsIml0ZW1zVHlwZSIsImFkZEJ1bGxldFBvaW50IiwiYnVsbGV0UG9pbnQiLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJzZWxlY3RlZCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5NYW51YWxGb3JtIiwidGFzayIsImluc3RydWN0aW9ucyIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsImFzc2Vzc21lbnQiLCJfYnJlYWRjcnVtYiIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiYWlDb21wbGV0ZWQiLCJOYXZiYXJIZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiX2hlYWRlciIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsIkVycm9yIiwiZmluYWxEYXRhIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwicHJvcGVydGllcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS1oZWFkZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9lcnJvci50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxnQkFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssWUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sY0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsT0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsV0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsUUFBQSxHQUFBVixPQUFBO1VBRU0sU0FBVVcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxPQUFPO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElBQUFqQixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUMzRixNQUFNQyxZQUFZLEdBQUdBLENBQUM7Y0FBRUMsSUFBSTtjQUFFQztZQUFLLENBQUUsS0FBS1QsUUFBUSxDQUFDO2NBQUUsQ0FBQ1EsSUFBSSxHQUFHQztZQUFLLENBQUUsQ0FBQztZQUNyRSxNQUFNLENBQUNDLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3pCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUNDLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNRyxLQUFLLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDbkIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDLEdBQUdmLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLEdBQUdqQixNQUFNLENBQUNpQixLQUFLO1lBQ3ZHLE1BQU1LLFdBQVcsR0FBRyxDQUFDSixTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNuQixNQUFNLENBQUNzQixXQUFXLENBQUMsR0FDbkVwQixLQUFLLENBQUNrQixVQUFVLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxHQUNqQ3RCLE1BQU0sQ0FBQ3NCLFdBQVc7WUFFckIsTUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU1YLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUNsRCxNQUFNWSxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJeEIsTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCOztjQUdEZCxRQUFBLENBQUEyQixPQUFPLENBQUNDLFNBQVMsQ0FBQywwQkFBMEJ2QixLQUFLLENBQUN3QixLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFDO2NBQzdEekIsS0FBSyxDQUFDMEIsWUFBWSxHQUFHWCxTQUFTO1lBQy9CLENBQUM7WUFDRCxNQUFNWSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNZCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFFcEUsT0FDQzVCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxrQkFDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXlFLEdBQ3ZGOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUEyQyxJQUFJO2NBQUNELFNBQVMsRUFBQyxXQUFXO2NBQUNFLE9BQU8sRUFBRVg7WUFBTSxHQUMxQ3JDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0wsU0FBUyxFQUFDO1lBQVEsRUFBRyxFQUNuRS9CLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ0MsSUFBSSxFQUNuQnJELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQVM3QixLQUFLLENBQUNrQixVQUFVLENBQUNxQixNQUFNLEUsSUFBVyxDQUNyQyxFQUNQdEQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBYyxHQUFFL0IsS0FBSyxDQUFDd0MsS0FBSyxDQUFDdEMsUUFBUSxDQUFDdUMsUUFBUSxDQUFDZixFQUFFLENBQUMsQ0FBUSxDQUNwRSxFQUNOekMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMEIsR0FDNUM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNQLElBQUksRUFBRXpDLE9BQUEsQ0FBQWlELEtBQUssQ0FBQ0MsT0FBTztjQUFFUixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO2NBQUNaLE9BQU8sRUFBRUw7WUFBaUIsR0FDaEY1QixLQUFLLENBQUNxQyxPQUFPLENBQUNTLFFBQVEsQ0FDZixFQUNUN0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbEMsV0FBQSxDQUFBb0QsVUFBVSxPQUFHLENBQ0wsQ0FDTCxDQUNHLEVBQ1Y5RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN6QyxXQUFBLENBQUE0RCxVQUFVLE9BQUcsQ0FDVCxFQUNOL0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdkMsZ0JBQUEsQ0FBQTJELGVBQWU7Y0FBQzFDLElBQUksRUFBQyxhQUFhO2NBQUMyQyxRQUFRLEVBQUMsR0FBRztjQUFDQyxNQUFNLEVBQUU3QztZQUFZLEdBQ25FYyxXQUFXLENBQ0ssQ0FDYixFQUNMWCxhQUFhLElBQ2J4QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN0QyxZQUFBLENBQUE2RCxrQkFBa0I7Y0FDbEJDLE9BQU8sRUFBRWhDLFlBQVk7Y0FDckJpQyxTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZmxELFNBQVMsRUFBRTtnQkFDWEgsS0FBSyxDQUFDMEIsWUFBWSxHQUFHWCxTQUFTO2dCQUM5QkssWUFBWSxFQUFFO2NBQ2Y7WUFBQyxFQUVGLEVBQ0FSLGVBQWUsSUFBSTVCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3BDLGNBQUEsQ0FBQThELHdCQUF3QjtjQUFDQyxJQUFJLEVBQUV0RCxRQUFRLENBQUNzRCxJQUFJO2NBQUVILE9BQU8sRUFBRXpCO1lBQWlCLEVBQUksQ0FDL0Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUEsSUFBQTZCLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVa0Usa0JBQWtCQSxDQUFDO1lBQUVNLElBQUk7WUFBRUw7VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FBRXZELE1BQU07Y0FBRUksUUFBUTtjQUFFRCxLQUFLO2NBQUVELEtBQUs7Y0FBRUk7WUFBUyxDQUFFLEdBQUcsSUFBQWpCLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3hFLElBQUksQ0FBQ3FELElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTUosU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJsRCxTQUFTLEVBQUU7Y0FDWEgsS0FBSyxDQUFDMEIsWUFBWSxHQUFHWCxTQUFTO2NBQzlCcUMsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE9BQ0NwRSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFFLFlBQVk7Y0FDWkQsSUFBSTtjQUNKM0MsS0FBSyxFQUFDLGNBQWM7Y0FDcEI2QyxJQUFJLEVBQUMsd0VBQXdFO2NBQzdFUCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJRLFFBQVEsRUFBRVIsT0FBTztjQUNqQkMsU0FBUyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2ZBLFNBQVMsRUFBRTtjQUNaO1lBQUMsRUFDYztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXJFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQVVPLE1BQU0rRCxlQUFlLEdBQXFCQSxDQUFDO1lBQUUxQyxJQUFJO1lBQUUyQyxRQUFRLEVBQUVZLE9BQU8sR0FBRyxLQUFLO1lBQUUvQixTQUFTO1lBQUVnQyxRQUFRO1lBQUVaO1VBQU0sQ0FBRSxLQUFJO1lBQ3JILE1BQU0sQ0FBQ2EsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBaEYsTUFBQSxDQUFBMkIsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNc0QsVUFBVSxHQUFHLElBQUFqRixNQUFBLENBQUFrRixNQUFNLEVBQWlCLElBQUksQ0FBQztZQUUvQyxJQUFBbEYsTUFBQSxDQUFBbUYsU0FBUyxFQUFDLE1BQUs7Y0FDZCxJQUFJLE9BQU9MLFFBQVEsS0FBSyxRQUFRLElBQUlHLFVBQVUsQ0FBQ0csT0FBTyxFQUFFO2dCQUN2REgsVUFBVSxDQUFDRyxPQUFPLENBQUNDLFdBQVcsR0FBR1AsUUFBUTs7WUFFM0MsQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTVEsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJOLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FFMUJRLFVBQVUsQ0FBQyxNQUFLO2dCQUNmLE1BQU1DLEVBQUUsR0FBR1AsVUFBVSxDQUFDRyxPQUFPO2dCQUM3QixJQUFJSSxFQUFFLEVBQUU7a0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtrQkFDcEMsTUFBTUMsR0FBRyxHQUFHQyxVQUFVLENBQUNDLFlBQVksRUFBRTtrQkFDckNMLEtBQUssQ0FBQ00sa0JBQWtCLENBQUNQLEVBQUUsQ0FBQztrQkFDNUJDLEtBQUssQ0FBQ08sUUFBUSxDQUFDLEtBQUssQ0FBQztrQkFDckJKLEdBQUcsRUFBRUssZUFBZSxFQUFFO2tCQUN0QkwsR0FBRyxFQUFFTSxRQUFRLENBQUNULEtBQUssQ0FBQztrQkFDcEJELEVBQUUsQ0FBQ1csS0FBSyxFQUFFOztjQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUMxQixJQUFJO2dCQUNILE1BQU1uQyxNQUFNLENBQUM7a0JBQUU1QyxJQUFJO2tCQUFFQyxLQUFLLEVBQUUwRCxVQUFVLENBQUNHLE9BQU8sRUFBRUM7Z0JBQVcsQ0FBRSxDQUFDO2dCQUM5REwsYUFBYSxDQUFDLEtBQUssQ0FBQztlQUNwQixDQUFDLE9BQU9zQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNRyxHQUFHLEdBQUcsdUJBQXVCM0QsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxNQUFNSSxJQUFJLEdBQUc2QixVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTTJCLFVBQVUsR0FBRzNCLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBQzVELE1BQU0vQixPQUFPLEdBQUcrQixVQUFVLEdBQUdxQixJQUFJLEdBQUdkLFVBQVU7WUFDOUMsT0FDQ3RGLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFMkQ7WUFBRyxHQUNsQnpHLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2lDLE9BQU87Y0FDUDhCLEdBQUcsRUFBRTFCLFVBQVU7Y0FDZm5DLFNBQVMsRUFBRTRELFVBQVU7Y0FDckJFLGVBQWUsRUFBRTdCLFVBQVU7Y0FDM0I4Qiw4QkFBOEIsRUFBRTtZQUFJLEVBQ25DLEVBQ0Y3RyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUEwQyxVQUFVO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFRixPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUN2QztVQUVSLENBQUM7VUFBQzhELE9BQUEsQ0FBQTlDLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REYsSUFBQWhFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFRLE9BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUE4RyxnQkFBQSxHQUFBOUcsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVUrRyxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFXLENBQUU7WUFDM0QsTUFBTTtjQUFFakc7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFdkMsTUFBTSxDQUFDK0YsU0FBUyxFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHcEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRS9ELE1BQU0wRixhQUFhLEdBQUcsTUFBTWhCLEtBQUssSUFBRztjQUNuQ0EsS0FBSyxDQUFDaUIsY0FBYyxFQUFFO2NBQ3RCSixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1qRyxRQUFRLENBQUNzRyxlQUFlLEVBQUU7Y0FDaENMLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELElBQUlELFNBQVMsRUFBRTtjQUNkLE9BQ0NqSCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFRRSxTQUFTLEVBQUM7Y0FBUyxHQUMxQjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3JDLE1BQUEsQ0FBQTBDLFVBQVU7Z0JBQUNELE9BQU8sRUFBRUEsQ0FBQSxLQUFNb0Usb0JBQW9CLENBQUMsSUFBSSxDQUFDO2dCQUFFbEUsSUFBSSxFQUFFekMsT0FBQSxDQUFBaUQsS0FBSyxDQUFDQztjQUFPLEVBQUksQ0FDdEU7O1lBR1gsT0FDQzNELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQVMsR0FDMUI5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUEwQyxVQUFVO2NBQUNELE9BQU8sRUFBRUEsQ0FBQSxLQUFNb0Usb0JBQW9CLENBQUMsSUFBSSxDQUFDO2NBQUV4RCxRQUFRO2NBQUNWLElBQUksRUFBRXpDLE9BQUEsQ0FBQWlELEtBQUssQ0FBQ0M7WUFBTyxFQUFJLEVBQ3ZGM0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDckMsTUFBQSxDQUFBMEMsVUFBVTtjQUFDdUUsUUFBUSxFQUFFLElBQUk7Y0FBRXRFLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDcEMsRUFDUmlFLFNBQVMsSUFBSW5ILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ21FLGdCQUFBLENBQUFVLGVBQWU7Y0FBQ0MsT0FBTyxFQUFFLElBQUk7Y0FBRXRELE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ0Qsb0JBQW9CLENBQUMsS0FBSztZQUFDLEVBQUksQ0FDMUY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXBILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwSCxNQUFBLEdBQUExSCxPQUFBO1VBRU0sU0FBVTJILGFBQWFBLENBQUM7WUFBRTdHLEtBQUs7WUFBRXlGO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPeEcsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDK0UsTUFBQSxDQUFBRSxLQUFLO2NBQUMxRSxPQUFPLEVBQUM7WUFBTyxHQUFFcEMsS0FBSyxDQUFDeUYsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXhHLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE2SCxHQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQThILE1BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBK0gsTUFBQSxHQUFBL0gsT0FBQTtVQUNBLElBQUFnSSxRQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVThELFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFL0MsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUU5QyxNQUFNLENBQUM4RyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkksTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQ21ILE9BQU8sQ0FBQztZQUMxRCxNQUFNLENBQUNDLFFBQVEsRUFBRW5CLFdBQVcsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUFvRyxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDckgsUUFBUSxDQUFDLEVBQUUsTUFBTWtILFFBQVEsQ0FBQ2xILFFBQVEsQ0FBQ21ILE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRTFFLE9BQ0NwSSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUNyQzdCLFFBQVEsQ0FBQ21ILE9BQU8sSUFBSXBJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ29GLE1BQUEsQ0FBQU8sS0FBSztjQUFDQyxHQUFHLEVBQUVOO1lBQUssRUFBSSxFQUMxQ2xJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FGLFFBQUEsQ0FBQWpCLGlCQUFpQjtjQUFDRSxXQUFXLEVBQUVBLFdBQVc7Y0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQ2hHLFFBQVEsQ0FBQ21IO1lBQU8sRUFBSSxFQUM5RXBJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQVcsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ25DO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFySSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF5SSxLQUFBLEdBQUF6SSxPQUFBO1VBRUEsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQTZILEdBQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV3SCxlQUFlQSxDQUFDO1lBQUVDLE9BQU87WUFBRXREO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQ0xuRCxRQUFRO2NBQ1JELEtBQUs7Y0FDTEQsS0FBSyxFQUFFO2dCQUNOcUgsT0FBTyxFQUFFckgsS0FBSztnQkFDZDZILE1BQU0sRUFBRTtrQkFBRUMsUUFBUSxFQUFFQztnQkFBYSxDQUFFO2dCQUNuQzFGLE9BQU8sRUFBRTJGLFdBQVc7Z0JBQ3BCQztjQUFlO1lBQ2YsQ0FDRCxHQUFHLElBQUE5SSxRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUNpSCxRQUFRLEVBQUVuQixXQUFXLENBQUMsR0FBR2xILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM2RSxLQUFLLEVBQUV5QyxRQUFRLENBQUMsR0FBR2pKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQzFDLE1BQU0sQ0FBQ2QsTUFBTSxFQUFFcUksU0FBUyxDQUFDLEdBQUdsSixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ3dILEtBQUssRUFBRWxJLFFBQVEsQ0FBQ21JLGtCQUFrQjtjQUNsQ0MsVUFBVSxFQUFFO2FBQ1osQ0FBQztZQUNGLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3ZKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUzRCxNQUFNNkgsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRXBELEtBQUssSUFBRztnQkFDakI2QyxTQUFTLENBQUM7a0JBQ1QsR0FBR3JJLE1BQU07a0JBQ1QsQ0FBQ3dGLEtBQUssQ0FBQ3FELGFBQWEsQ0FBQ3BJLElBQUksR0FBRytFLEtBQUssQ0FBQ3FELGFBQWEsQ0FBQ25JO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEeUIsT0FBTyxFQUFFLE1BQU1xRCxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hrRCxjQUFjLENBQUMsS0FBSyxDQUFDO2tCQUNyQnJDLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU1qRyxRQUFRLENBQUNzRyxlQUFlLENBQUMxRyxNQUFNLENBQUNzSSxLQUFLLENBQUM7a0JBQzVDL0UsT0FBTyxFQUFFO2lCQUNULENBQUMsT0FBT2tDLENBQUMsRUFBRTtrQkFDWDJDLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3FELE9BQU8sQ0FBQztpQkFDbkIsU0FBUztrQkFDVHpDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O2NBRXBCO2FBQ0E7WUFFRCxNQUFNMEMsYUFBYSxHQUFHbEMsT0FBTyxHQUFHLE1BQU02QixjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ3hHLE9BQU87WUFFM0UsT0FDQ2hELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQXFGLEtBQUs7Y0FBQ3BGLElBQUk7Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUNzQixPQUFPLEVBQUVBO1lBQU8sR0FDcERwRSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZSxLQUFLLENBQU0sRUFDdEI5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUMrSSxRQUFRLENBQVEsQ0FDckIsRUFDVDlKLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXFCLElBQUksUUFDSi9KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQytGLE1BQUEsQ0FBQWYsYUFBYTtjQUFDN0csS0FBSyxFQUFFQSxLQUFLO2NBQUV5RixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3Q3hHLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXNCLFFBQVE7Y0FDUjFJLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRVYsTUFBTSxDQUFDc0ksS0FBSztjQUNuQk0sUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJRLEtBQUssRUFBRW5CLGFBQWEsQ0FBQ21CLEtBQUs7Y0FDMUJDLFdBQVcsRUFBRXBCLGFBQWEsQ0FBQ29CO1lBQVcsRUFDckMsQ0FDSSxFQUVQbEssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNxRSxRQUFRLEVBQUUsQ0FBQzNHLE1BQU0sQ0FBQ3NJLEtBQUs7Y0FBRW5HLE9BQU8sRUFBRTRHLGFBQWE7Y0FBRTFHLElBQUksRUFBRTNDLE1BQUEsQ0FBQW1ELEtBQUssQ0FBQ0M7WUFBTyxHQUM1Rm9GLFdBQVcsQ0FBQ0gsTUFBTSxDQUNYLENBQ0QsRUFDUlUsV0FBVyxJQUNYdEosTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBRSxZQUFZO2NBQ1pMLFNBQVMsRUFBRW1GLE1BQU0sQ0FBQ3hHLE9BQU87Y0FDekI0QixRQUFRLEVBQUVBLENBQUEsS0FBTTJFLGNBQWMsQ0FBQyxLQUFLLENBQUM7Y0FDckNuRyxPQUFPLEVBQUU7Z0JBQ1JzRSxPQUFPLEVBQUU7a0JBQ1J2RSxPQUFPLEVBQUUsU0FBUztrQkFDbEI4RyxLQUFLLEVBQUVsQixXQUFXLENBQUNyQjtpQkFDbkI7Z0JBQ0R5QyxNQUFNLEVBQUU7a0JBQUVGLEtBQUssRUFBRWxCLFdBQVcsQ0FBQ29CLE1BQU07a0JBQUVoSCxPQUFPLEVBQUUsU0FBUztrQkFBRVMsUUFBUSxFQUFFO2dCQUFJO2VBQ3ZFO2NBQ0RhLElBQUk7Y0FDSjNDLEtBQUssRUFBRWYsS0FBSyxDQUFDMkcsT0FBTyxDQUFDNUYsS0FBSztjQUMxQjZDLElBQUksRUFBRTVELEtBQUssQ0FBQzJHLE9BQU8sQ0FBQ29DO1lBQVEsRUFFN0IsRUFFRDlKLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQVcsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ3JJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQXNDLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFdEI7WUFBZSxFQUFJLENBQ3ZDLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqR0EsSUFBQWhKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFFQSxJQUFBNkgsR0FBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVxRSx3QkFBd0JBLENBQUM7WUFBRUcsSUFBSTtZQUFFRixJQUFJO1lBQUVIO1VBQU8sQ0FBRTtZQUMvRCxNQUFNO2NBQUVyRCxLQUFLO2NBQUVFLFFBQVE7Y0FBRUg7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDaUgsUUFBUSxFQUFFbkIsV0FBVyxDQUFDLEdBQUdsSCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDZCxNQUFNLEVBQUVxSSxTQUFTLENBQUMsR0FBR2xKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQzFDNEksWUFBWSxFQUFFLEVBQUU7Y0FDaEJDLFdBQVcsRUFBRSxLQUFLO2NBQ2xCakc7YUFDQSxDQUFDO1lBRUYsSUFBSSxDQUFDRSxJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLE1BQU0rRSxNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFcEQsS0FBSyxJQUFHO2dCQUNqQjZDLFNBQVMsQ0FBQztrQkFDVCxHQUFHckksTUFBTTtrQkFDVCxDQUFDd0YsS0FBSyxDQUFDcUQsYUFBYSxDQUFDcEksSUFBSSxHQUFHK0UsS0FBSyxDQUFDcUQsYUFBYSxDQUFDbkk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTXFELEtBQUssSUFBRztnQkFDdEJhLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU11RCxJQUFJLEdBQUcsTUFBTXhKLFFBQVEsQ0FBQzRDLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFMUQsTUFBTSxDQUFDMEosWUFBWSxDQUFDO2dCQUMvRHpKLFFBQVEsQ0FBQztrQkFBRSxHQUFHMkosSUFBSTtrQkFBRXZKLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7Z0JBQ3JDa0QsT0FBTyxFQUFFO2dCQUNUbUIsVUFBVSxDQUFDLE1BQU0yQixXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQzNDO2FBQ0E7WUFFRCxPQUNDbEgsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBcUYsS0FBSztjQUFDcEYsSUFBSTtjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQ3NCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHBFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXFCLElBQUksUUFDSi9KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUM2SCxNQUFNLENBQUM5RyxLQUFLLENBQU0sRUFDN0I5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUM2SCxNQUFNLENBQUN6RyxXQUFXLENBQVEsQ0FDL0IsRUFDVG5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXNCLFFBQVE7Y0FDUkMsS0FBSyxFQUFFbEosS0FBSyxDQUFDNkgsTUFBTSxDQUFDQyxRQUFRLENBQUNvQixLQUFLO2NBQ2xDM0ksSUFBSSxFQUFDLGNBQWM7Y0FDbkJDLEtBQUssRUFBRVYsTUFBTSxDQUFDMEosWUFBWTtjQUMxQmQsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJTLFdBQVcsRUFBRW5KLEtBQUssQ0FBQzZILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDcUI7WUFBVyxFQUM3QyxDQUNJLEVBRVBsSyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQ0gsT0FBTyxFQUFFd0csTUFBTSxDQUFDeEc7WUFBTyxHQUMvQ2pDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ1MsUUFBUSxDQUNmLENBQ0QsRUFDVDdELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQVcsZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ3JJLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQXNDLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFdkosS0FBSyxDQUFDMko7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUExSyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBVSxRQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVMEssZ0JBQWdCQSxDQUFDO1lBQUVsSjtVQUFnQixDQUFFO1lBQ3BELE1BQU07Y0FBRVosTUFBTTtjQUFFSSxRQUFRO2NBQUVELEtBQUs7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFN0QsTUFBTWlCLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUl4QixNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJPLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDdEI7O2NBR0RkLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQnZCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ0MsRUFBRSxFQUFFLENBQUM7Y0FDN0R6QixLQUFLLENBQUMwQixZQUFZLEdBQUdYLFNBQVM7WUFDL0IsQ0FBQztZQUVELE9BQ0MvQixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQTJDLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLFdBQVc7Y0FBQ0UsT0FBTyxFQUFFWDtZQUFNLEdBQzFDckMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDckMsTUFBQSxDQUFBcUssSUFBSTtjQUFDMUgsSUFBSSxFQUFDLFdBQVc7Y0FBQ0osU0FBUyxFQUFDO1lBQVEsRUFBRyxFQUM1QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsZUFDRTdCLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ0MsSUFBSSxFLE9BQUt0QyxLQUFLLENBQUNrQixVQUFVLENBQUNxQixNQUFNLENBQ3pDLENBQ0QsRUFDUHRELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQTJDLElBQUksUUFDSi9DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWMsR0FBRS9CLEtBQUssQ0FBQ3dDLEtBQUssQ0FBQ3RDLFFBQVEsQ0FBQ3VDLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLENBQVEsQ0FDbkUsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBekMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBeUksS0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUE2SCxHQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTRLLHlCQUF5QkEsQ0FBQztZQUFFdEcsSUFBSTtZQUFFSDtVQUFPLENBQUU7WUFDMUQsTUFBTTtjQUFFckQsS0FBSztjQUFFRSxRQUFRO2NBQUVIO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3hELE1BQU0sQ0FBQ2lILFFBQVEsRUFBRW5CLFdBQVcsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2QsTUFBTSxFQUFFcUksU0FBUyxDQUFDLEdBQUdsSixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ3dILEtBQUssRUFBRSxFQUFFO2NBQ1RxQixXQUFXLEVBQUUsS0FBSztjQUNsQmpHO2FBQ0EsQ0FBQztZQUVGLE1BQU1pRixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFcEQsS0FBSyxJQUFHO2dCQUNqQjZDLFNBQVMsQ0FBQztrQkFDVCxHQUFHckksTUFBTTtrQkFDVCxDQUFDd0YsS0FBSyxDQUFDcUQsYUFBYSxDQUFDcEksSUFBSSxHQUFHK0UsS0FBSyxDQUFDcUQsYUFBYSxDQUFDbkk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTXFELEtBQUssSUFBRztnQkFDdEJhLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1qRyxRQUFRLENBQUM2SixTQUFTLENBQUNqSCxRQUFRLENBQUNVLElBQUksRUFBRTFELE1BQU0sQ0FBQ3NJLEtBQUssQ0FBQztnQkFDckRySSxRQUFRLENBQUM7a0JBQUVnSyxTQUFTLEVBQUU7b0JBQUUsR0FBRzdKLFFBQVEsQ0FBQzZKO2tCQUFTLENBQUU7a0JBQUVDLEtBQUssRUFBRTtvQkFBRSxHQUFHOUosUUFBUSxDQUFDOEo7a0JBQUs7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNoRjNHLE9BQU8sRUFBRTtnQkFFVG1CLFVBQVUsQ0FBQyxNQUFLO2tCQUNmMkIsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDbEgsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBcUYsS0FBSztjQUFDcEYsSUFBSTtjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQ3NCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHBFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXFCLElBQUksUUFDSi9KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUM2SCxNQUFNLENBQUM5RyxLQUFLLENBQU0sRUFDN0I5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUM2SCxNQUFNLENBQUN6RyxXQUFXLENBQVEsQ0FDL0IsRUFFVG5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXNCLFFBQVE7Y0FDUkMsS0FBSyxFQUFFbEosS0FBSyxDQUFDNkgsTUFBTSxDQUFDQyxRQUFRLENBQUNvQixLQUFLO2NBQ2xDM0ksSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFVixNQUFNLENBQUNzSSxLQUFLO2NBQ25CTSxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFbkosS0FBSyxDQUFDNkgsTUFBTSxDQUFDQyxRQUFRLENBQUNxQjtZQUFXLEVBQzdDLENBQ0ksRUFFUGxLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDSCxPQUFPLEVBQUV3RyxNQUFNLENBQUN4RztZQUFPLEdBQy9DakMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDUyxRQUFRLENBQ2YsQ0FDRCxFQUNUN0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0YsR0FBQSxDQUFBVyxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DckksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0YsR0FBQSxDQUFBc0MsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV2SixLQUFLLENBQUMySjtZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQTFLLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBNkgsR0FBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVUrSyxxQkFBcUJBLENBQUM7WUFBRXpHLElBQUk7WUFBRUgsT0FBTztZQUFFNkcsZUFBZSxHQUFHO1VBQUUsQ0FBRTtZQUM1RSxNQUFNO2NBQUVsSyxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ2lILFFBQVEsRUFBRW5CLFdBQVcsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2QsTUFBTSxFQUFFcUksU0FBUyxDQUFDLEdBQUdsSixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ3dILEtBQUssRUFBRSxFQUFFO2NBQ1RxQixXQUFXLEVBQUUsS0FBSztjQUNsQmpHO2FBQ0EsQ0FBQztZQUVGLE1BQU1pRixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFcEQsS0FBSyxJQUFHO2dCQUNqQjZDLFNBQVMsQ0FBQztrQkFDVCxHQUFHckksTUFBTTtrQkFDVCxDQUFDd0YsS0FBSyxDQUFDcUQsYUFBYSxDQUFDcEksSUFBSSxHQUFHK0UsS0FBSyxDQUFDcUQsYUFBYSxDQUFDbkk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTXFELEtBQUssSUFBRztnQkFDdEJhLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1qRyxRQUFRLENBQUM4SixLQUFLLENBQUNsSCxRQUFRLENBQUNVLElBQUksRUFBRTtrQkFDbkMsR0FBRzBHLGVBQWU7a0JBQ2xCOUIsS0FBSyxFQUFFdEksTUFBTSxDQUFDc0k7aUJBQ2QsQ0FBQztnQkFDRi9FLE9BQU8sRUFBRTtnQkFDVG1CLFVBQVUsQ0FBQyxNQUFLO2tCQUNmMkIsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDbEgsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBcUYsS0FBSztjQUFDcEYsSUFBSTtjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQ3NCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHBFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXFCLElBQUksUUFDSi9KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQUs3QixLQUFLLENBQUM2SCxNQUFNLENBQUM5RyxLQUFLLENBQU0sRUFDN0I5QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU83QixLQUFLLENBQUM2SCxNQUFNLENBQUN6RyxXQUFXLENBQVEsQ0FDL0IsRUFFVG5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXNCLFFBQVE7Y0FDUkMsS0FBSyxFQUFFbEosS0FBSyxDQUFDNkgsTUFBTSxDQUFDQyxRQUFRLENBQUNvQixLQUFLO2NBQ2xDM0ksSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFVixNQUFNLENBQUNzSSxLQUFLO2NBQ25CTSxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlMsV0FBVyxFQUFFbkosS0FBSyxDQUFDNkgsTUFBTSxDQUFDQyxRQUFRLENBQUNxQjtZQUFXLEVBQzdDLENBQ0ksRUFFUGxLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDTixPQUFPLEVBQUMsU0FBUztjQUFDSCxPQUFPLEVBQUV3RyxNQUFNLENBQUN4RztZQUFPLEdBQy9DakMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDUyxRQUFRLENBQ2YsQ0FDRCxFQUNUN0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0YsR0FBQSxDQUFBVyxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DckksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0YsR0FBQSxDQUFBc0MsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV2SixLQUFLLENBQUMySjtZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQTFLLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFFQSxJQUFBNkgsR0FBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVpTCxlQUFlQSxDQUFDO1lBQUUzRyxJQUFJO1lBQUVIO1VBQU8sQ0FBRTtZQUNoRCxNQUFNO2NBQUVyRCxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ2lILFFBQVEsRUFBRW5CLFdBQVcsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2QsTUFBTSxFQUFFcUksU0FBUyxDQUFDLEdBQUdsSixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQzRJLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQmpHO2FBQ0EsQ0FBQztZQUVGLE1BQU1pRixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFcEQsS0FBSyxJQUFHO2dCQUNqQjZDLFNBQVMsQ0FBQztrQkFDVCxHQUFHckksTUFBTTtrQkFDVCxDQUFDd0YsS0FBSyxDQUFDcUQsYUFBYSxDQUFDcEksSUFBSSxHQUFHK0UsS0FBSyxDQUFDcUQsYUFBYSxDQUFDbkk7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R5QixPQUFPLEVBQUUsTUFBTXFELEtBQUssSUFBRztnQkFDdEJhLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1qRyxRQUFRLENBQUM4SixLQUFLLENBQUNsSCxRQUFRLENBQUNVLElBQUksRUFBRTFELE1BQU0sQ0FBQzBKLFlBQVksQ0FBQztnQkFDeERuRyxPQUFPLEVBQUU7Z0JBRVRtQixVQUFVLENBQUMsTUFBSztrQkFDZjJCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ2xILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQXFGLEtBQUs7Y0FBQ3BGLElBQUk7Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUNzQixPQUFPLEVBQUVBO1lBQU8sR0FDcERwRSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUFxQixJQUFJLFFBQ0ovSixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGlCQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDNkgsTUFBTSxDQUFDOUcsS0FBSyxDQUFNLEVBQzdCOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxlQUFPN0IsS0FBSyxDQUFDNkgsTUFBTSxDQUFDekcsV0FBVyxDQUFRLENBQy9CLEVBRVRuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUFzQixRQUFRO2NBQ1JDLEtBQUssRUFBRWxKLEtBQUssQ0FBQzZILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDb0IsS0FBSztjQUNsQzNJLElBQUksRUFBQyxjQUFjO2NBQ25CQyxLQUFLLEVBQUVWLE1BQU0sQ0FBQzBKLFlBQVk7Y0FDMUJkLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCUyxXQUFXLEVBQUVuSixLQUFLLENBQUM2SCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3FCO1lBQVcsRUFDN0MsQ0FDSSxFQUVQbEssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNILE9BQU8sRUFBRXdHLE1BQU0sQ0FBQ3hHO1lBQU8sR0FDL0NqQyxLQUFLLENBQUNxQyxPQUFPLENBQUNTLFFBQVEsQ0FDZixDQUNELEVBQ1Q3RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFXLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FDbkNySSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFzQyxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXZKLEtBQUssQ0FBQzJKO1lBQWlCLEVBQUksQ0FDL0MsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBMUssTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtMLFlBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVbUwsY0FBY0EsQ0FBQztZQUFFdkssTUFBTTtZQUFFcUk7VUFBUyxDQUFFO1lBQ25ELE1BQU07Y0FBRWpJLFFBQVE7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQWQsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsSUFBSWlLLFlBQVksR0FBRztjQUFFOUosS0FBSyxFQUFFLEVBQUU7Y0FBRTBJLEtBQUssRUFBRTtZQUFRLENBQUU7WUFDakQsTUFBTXFCLE9BQU8sR0FBRyxFQUFFO1lBQ2xCdEssS0FBSyxDQUFDd0IsS0FBSyxDQUFDUCxVQUFVLENBQUNzSixLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsQ0FBQyxJQUFHO2NBQ3hDLElBQUlBLENBQUMsQ0FBQ2hKLEVBQUUsS0FBS3hCLFFBQVEsQ0FBQ3dCLEVBQUUsRUFBRTtjQUMxQixJQUFJZ0osQ0FBQyxDQUFDaEosRUFBRSxLQUFLNUIsTUFBTSxDQUFDa0ssS0FBSyxDQUFDVyxVQUFVLEVBQUVMLFlBQVksR0FBRztnQkFBRTlKLEtBQUssRUFBRWtLLENBQUMsQ0FBQ2hKLEVBQUU7Z0JBQUV3SCxLQUFLLEVBQUV3QixDQUFDLENBQUMzSjtjQUFLLENBQUU7Y0FDcEZ3SixPQUFPLENBQUNLLElBQUksQ0FBQztnQkFBRXBLLEtBQUssRUFBRWtLLENBQUMsQ0FBQ2hKLEVBQUU7Z0JBQUV3SCxLQUFLLEVBQUV3QixDQUFDLENBQUMzSjtjQUFLLENBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRixNQUFNOEosWUFBWSxHQUFHbkIsSUFBSSxJQUFHO2NBQzNCdkIsU0FBUyxDQUFDckksTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVrSyxLQUFLLEVBQUU7a0JBQUUsR0FBR2xLLE1BQU0sQ0FBQ2tLLEtBQUs7a0JBQUVXLFVBQVUsRUFBRWpCLElBQUksQ0FBQ29CLE1BQU0sQ0FBQ3RLO2dCQUFLO2NBQUUsQ0FBRSxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUVELE9BQ0N2QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQU9rSixPQUFPLEVBQUMsRUFBRTtjQUFDaEosU0FBUyxFQUFDO1lBQVcsRyxzQ0FFdEM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1SSxZQUFBLENBQUFZLFdBQVc7Y0FBQ3RDLFFBQVEsRUFBRW1DLFlBQVk7Y0FBRVAsWUFBWSxFQUFFQSxZQUFZO2NBQUVDLE9BQU8sRUFBRSxDQUFDRCxZQUFZLEVBQUUsR0FBR0MsT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXRMLE1BQUEsR0FBQUMsT0FBQTtVQWlCTyxNQUFNK0wsYUFBYSxHQUFBbEYsT0FBQSxDQUFBa0YsYUFBQSxHQUFHaE0sTUFBQSxDQUFBMEIsT0FBSyxDQUFDdUssYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTTdLLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1wQixNQUFBLENBQUEwQixPQUFLLENBQUN3SyxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDbEYsT0FBQSxDQUFBMUYsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJ0RSxJQUFBcEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFTLFdBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVrTSx1QkFBdUJBLENBQUM7WUFBRXZIO1VBQVEsQ0FBRTtZQUNuRCxNQUFNO2NBQUU3RCxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzlDLE1BQU07Y0FBRVAsTUFBTTtjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBWixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUMvQyxNQUFNLENBQUNnTCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyTSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTThILFFBQVEsR0FBR3BELEtBQUssSUFBRztjQUN4QixNQUFNd0YsTUFBTSxHQUFHeEYsS0FBSyxDQUFDcUQsYUFBYTtjQUNsQyxNQUFNcUIsS0FBSyxHQUFHO2dCQUFFLEdBQUdsSyxNQUFNLENBQUNrSztjQUFLLENBQUU7Y0FDakNqSyxRQUFRLENBQUM7Z0JBQUVpSyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDYyxNQUFNLENBQUN2SyxJQUFJLEdBQUd1SyxNQUFNLENBQUN0SztnQkFBSztjQUFFLENBQUUsQ0FBQztZQUMvRCxDQUFDO1lBQ0QsTUFBTStLLFFBQVEsR0FBR3pMLE1BQU0sQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ25ELE1BQU1xTCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJMUwsTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CbUwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHpILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNUCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QmdJLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnpILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNNEgsYUFBYSxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDck0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBcUIsSUFBSSxRQUNKL0osTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBK0QsS0FBSztjQUNMaEQsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCUSxLQUFLLEVBQUVsSixLQUFLLENBQUNnSyxLQUFLLENBQUMyQixJQUFJLENBQUN6QyxLQUFLO2NBQzdCQyxXQUFXLEVBQUVuSixLQUFLLENBQUNnSyxLQUFLLENBQUMyQixJQUFJLENBQUN4QyxXQUFXO2NBQ3pDNUksSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGdEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBK0QsS0FBSztjQUNMaEQsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCUSxLQUFLLEVBQUVsSixLQUFLLENBQUNnSyxLQUFLLENBQUM0QixTQUFTLENBQUMxQyxLQUFLO2NBQ2xDQyxXQUFXLEVBQUVuSixLQUFLLENBQUNnSyxLQUFLLENBQUM0QixTQUFTLENBQUN6QyxXQUFXO2NBQzlDNUksSUFBSSxFQUFDO1lBQVcsRUFDZixFQUNGdEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRXVKLGFBQWE7Y0FBRXBKLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7WUFBQSxHQUN4RDBJLFFBQVEsQ0FDRCxFQUNUdE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbEMsV0FBQSxDQUFBb0QsVUFBVSxPQUFHLENBQ04sRUFDUnNJLGVBQWUsSUFDZnBNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRU8sUUFBUSxFQUFFNEg7WUFBYSxHQUMxRHhNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FBTTdCLEtBQUssQ0FBQzZMLE1BQU0sQ0FBQ3pDLE1BQU0sQ0FBTyxDQUVqQyxDQUNLLENBQ0w7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQW5LLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE0TSxNQUFBLEdBQUE1TSxPQUFBO1VBQ0EsSUFBQTZNLFNBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUF5SSxLQUFBLEdBQUF6SSxPQUFBO1VBRU0sU0FBVThNLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUU5TCxRQUFRO2NBQUVILFFBQVE7Y0FBRUQ7WUFBTSxDQUFFLEdBQUcsSUFBQVgsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFekQsTUFBTSxDQUFDd0wsTUFBTSxFQUFFSSxTQUFTLENBQUMsR0FBR2hOLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBb0csTUFBQSxDQUFBTyxTQUFTLEVBQ1IsQ0FBQ3JILFFBQVEsQ0FBQzhKLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHOUosUUFBUSxDQUFDOEosS0FBSyxDQUFDa0MsT0FBTyxFQUFFO2NBQ3RDbk0sUUFBUSxDQUFDO2dCQUFFaUs7Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELElBQUk2QixNQUFNLEVBQUU7Y0FDWCxPQUFPNU0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBeUQsdUJBQXVCO2dCQUFDdkgsUUFBUSxFQUFFQSxDQUFBLEtBQU1vSSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRXJFLElBQUksQ0FBQ25NLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQzJCLElBQUksRUFBRTtjQUN2QixPQUFPMU0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDaUssTUFBQSxDQUFBSyxVQUFVO2dCQUFDNUwsSUFBSSxFQUFDLGdCQUFnQjtnQkFBQzZMLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtjQUFDLEVBQUk7O1lBRzdFLE9BQ0NoTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrSyxTQUFBLENBQUFNLGdCQUFnQjtjQUFDOUwsSUFBSSxFQUFDO1lBQU0sRUFBRyxDQUM5QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBdEIsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVW9OLFdBQVdBLENBQUM7WUFBRTdFO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRTtjQUNUakMsT0FBTyxDQUFDK0csSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWjlFLEdBQUcsR0FBRytFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDaEYsR0FBRyxDQUFDO1lBQzlCLE1BQU03QixHQUFHLEdBQUczRyxNQUFBLENBQUEwQixPQUFLLENBQUN3RCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCbEYsTUFBQSxDQUFBMEIsT0FBSyxDQUFDeUQsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTTBHLE1BQU0sR0FBR2xGLEdBQUcsQ0FBQ3ZCLE9BQU87Y0FDMUJ5RyxNQUFNLENBQUM0QixnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJNUIsTUFBTSxDQUFDNkIsUUFBUSxLQUFLQyxRQUFRLEVBQUU7a0JBQ2pDOUIsTUFBTSxDQUFDK0IsV0FBVyxHQUFHLEtBQUs7a0JBQzFCL0IsTUFBTSxDQUFDZ0MsWUFBWSxHQUFHLE1BQUs7b0JBQzFCaEMsTUFBTSxDQUFDZ0MsWUFBWSxHQUFHLElBQUk7b0JBQzFCaEMsTUFBTSxDQUFDK0IsV0FBVyxHQUFHLENBQUM7a0JBQ3ZCLENBQUM7O2NBRUgsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUNwRixHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDeEksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUM1QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBT2tMLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakMvTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVE0RixHQUFHLEVBQUVBLEdBQUc7Y0FBRWpFLElBQUksRUFBQyxXQUFXO2NBQUNvQyxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV4QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUF2RyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK04sT0FBQSxHQUFBL04sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQTZILEdBQUEsR0FBQTdILE9BQUE7VUFHQSxJQUFBZ08sS0FBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUFpTyxPQUFBLEdBQUFqTyxPQUFBO1VBQ00sU0FBVWtPLGtCQUFrQkEsQ0FBQztZQUFFN0Q7VUFBTyxDQUFtQztZQUM5RSxNQUFNO2NBQUVySixRQUFRO2NBQUVKLE1BQU07Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDd0wsTUFBTSxFQUFFSSxTQUFTLENBQUMsR0FBR2hOLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNeU0sY0FBYyxHQUFHQSxDQUFBLEtBQU1wQixTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0sQ0FBQzNFLFFBQVEsRUFBRW5CLFdBQVcsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3pDLFFBQVEsQ0FBQztZQUMzRSxJQUFBTixNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDckgsUUFBUSxDQUFDNkosU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ2tDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUYsTUFBTXFCLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSG5ILFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1qRyxRQUFRLENBQUM2SixTQUFTLENBQUN3RCxhQUFhLEVBQUU7ZUFDeEMsQ0FBQyxPQUFPaEksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNnSSxHQUFHLENBQUNqSSxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUWSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsSUFBSTBGLE1BQU0sRUFBRTtjQUNYLE9BQU81TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNvTCxPQUFBLENBQUFRLGtCQUFrQjtnQkFBQ2xOLElBQUksRUFBQyxTQUFTO2dCQUFDc0QsUUFBUSxFQUFFQSxDQUFBLEtBQU1vSSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRy9FLE1BQU15QixJQUFJLEdBQUdBLENBQUM7Y0FBRWhFLElBQUksRUFBRWxHO1lBQUksQ0FBRSxLQUFJO2NBQy9CLE1BQU1pRSxHQUFHLEdBQUcsR0FBRzBGLE9BQUEsQ0FBQXhNLE9BQU0sQ0FBQ2dOLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGVBQWUzTixRQUFRLENBQUN3QixFQUFFLGNBQWM4QixJQUFJLFFBQVE7Y0FFN0YsT0FDQ3ZFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQUtFLFNBQVMsRUFBQztjQUF3RSxHQUN0RjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQytKLFNBQVMsQ0FBQ3ZHLElBQUksQ0FBQyxDQUFNLEVBQ2hDdkUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQWMsR0FDNUI5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFPa0wsUUFBUTtnQkFBQ0MsT0FBTyxFQUFDO2NBQVUsR0FDakMvTixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFRNEYsR0FBRyxFQUFFQSxHQUFHO2dCQUFFakUsSUFBSSxFQUFDO2NBQVcsRUFBRyxFLG1EQUU5QixDQUNILENBQ0Q7WUFFUixDQUFDO1lBRUQsSUFBSXRELFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQytELE1BQU0sRUFBRTtjQUM5QixPQUNDN08sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDcUwsS0FBQSxDQUFBYSxJQUFJO2dCQUFDdkQsS0FBSyxFQUFFdEssUUFBUSxDQUFDNkosU0FBUyxDQUFDK0QsTUFBTTtnQkFBRUUsT0FBTyxFQUFFTixJQUFJO2dCQUFFTyxTQUFTLEVBQUM7Y0FBSyxFQUFHLENBQ3ZFOztZQUlMLE9BQ0NoUCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFtSCxTQUFTO2NBQUN0SyxJQUFJLEVBQUU1RCxLQUFLLENBQUNrQixVQUFVLENBQUNpTixLQUFLLENBQUNwTixLQUFLO2NBQUVLLFdBQVcsRUFBRXBCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ2lOLEtBQUssQ0FBQy9NO1lBQVcsR0FDN0ZuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFcUwsVUFBVTtjQUFFbEwsT0FBTyxFQUFDO1lBQVMsR0FDNUNwQyxLQUFLLENBQUNxQyxPQUFPLENBQUNTLFFBQVEsQ0FDZixDQUNKLEVBRU43RCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFXLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QixDQUNWO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBLElBQUFqSSxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK04sT0FBQSxHQUFBL04sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrUCxTQUFBLEdBQUFsUCxPQUFBO1VBQ0EsSUFBQW1QLGNBQUEsR0FBQW5QLE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUVNLFNBQVVvUCxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFcE8sUUFBUTtjQUFFRjtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUN3TCxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHaE4sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU15TSxjQUFjLEdBQUdBLENBQUEsS0FBTXBCLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBQWpGLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNySCxRQUFRLENBQUM2SixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDa0MsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixJQUFJSixNQUFNLEVBQUU7Y0FDWCxPQUFPNU0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDb0wsT0FBQSxDQUFBUSxrQkFBa0I7Z0JBQUNsTixJQUFJLEVBQUMsU0FBUztnQkFBQ3NELFFBQVEsRUFBRXVJO2NBQVEsRUFBSTs7WUFHakUsSUFBSWxNLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3dFLE9BQU8sRUFDN0IsT0FDQ3RQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBQ3pEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDUCxJQUFJLEVBQUMsTUFBTTtjQUFDRixPQUFPLEVBQUVvTCxjQUFjO2NBQUVqTCxPQUFPLEVBQUMsTUFBTTtjQUFDUyxRQUFRO1lBQUEsR0FDbEU3QyxLQUFLLENBQUNxQyxPQUFPLENBQUNtTSxJQUFJLENBQ1gsQ0FDSixFQUNOdlAsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN1TSxTQUFBLENBQUFLLFFBQVE7Y0FBQ2xGLE9BQU8sRUFBRXJKLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3dFO1lBQU8sRUFBSSxDQUM1QyxDQUNKO1lBR0wsT0FBT3RQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dNLGNBQUEsQ0FBQUssYUFBYTtjQUFDbk8sSUFBSSxFQUFDLFNBQVM7Y0FBQzZMLFFBQVEsRUFBRWlCO1lBQWMsRUFBSTtVQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQXBPLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2SCxHQUFBLEdBQUE3SCxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQThILE1BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBeVAsVUFBQSxHQUFBelAsT0FBQTtVQUVNLFNBQVV3UCxhQUFhQSxDQUFDO1lBQUVuTyxJQUFJO1lBQUU2TDtVQUFRLENBQUU7WUFDL0MsTUFBTTtjQUFFbE0sUUFBUTtjQUFFRjtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNRLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuRSxNQUFNLENBQUMwRyxRQUFRLEVBQUVuQixXQUFXLENBQUMsR0FBR2xILE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDVixRQUFRLENBQUM2SixTQUFTLENBQUN6QyxRQUFRLENBQUM7WUFDM0UsTUFBTSxHQUFHc0gsT0FBTyxDQUFDLEdBQUczUCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDNkosU0FBUyxDQUFDeEosSUFBSSxDQUFDLENBQUM7WUFFNUQsTUFBTXNPLFdBQVcsR0FBR0EsQ0FBQSxLQUFNL04sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELElBQUFtRyxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDckgsUUFBUSxDQUFDNkosU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzVELFdBQVcsQ0FBQ2pHLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3pDLFFBQVEsQ0FBQztjQUN4Q3NILE9BQU8sQ0FBQzFPLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3hKLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLE9BQ0N0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFtSCxTQUFTO2NBQUN0SyxJQUFJLEVBQUU1RCxLQUFLLENBQUNrQixVQUFVLENBQUNpTixLQUFLLENBQUNwTixLQUFLO2NBQUVLLFdBQVcsRUFBRXBCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ2lOLEtBQUssQ0FBQy9NO1lBQVcsR0FDN0ZuQyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFNE0sV0FBVztjQUFFek0sT0FBTyxFQUFDO1lBQVMsR0FDN0NwQyxLQUFLLENBQUNxQyxPQUFPLENBQUN5TSxXQUFXLENBQ2xCLEVBQ1Q3UCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7Y0FBQ1osT0FBTyxFQUFFbUs7WUFBUSxHQUNsRHBNLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3dKLE1BQU0sQ0FDYixDQUNKLEVBRU41TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNrRixHQUFBLENBQUFXLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QixFQUNYekcsZUFBZSxJQUFJNUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOE0sVUFBQSxDQUFBN0UseUJBQXlCO2NBQUN0RyxJQUFJLEVBQUVqRCxJQUFJO2NBQUU4QyxPQUFPLEVBQUV3TDtZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTVQLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQTZQLFFBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBOFAsS0FBQSxHQUFBOVAsT0FBQTtVQUNBLElBQUErUCxLQUFBLEdBQUEvUCxPQUFBO1VBQ0EsSUFBQWdRLE1BQUEsR0FBQWhRLE9BQUE7VUFFTSxTQUFVaVEsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRWpQLFFBQVE7Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDaUgsUUFBUSxFQUFFbkIsV0FBVyxDQUFDLEdBQUdsSCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDNkosU0FBUyxDQUFDekMsUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBR3NILE9BQU8sQ0FBQyxHQUFHM1AsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3dFLE9BQU8sQ0FBQztZQUU5RCxJQUFBdkgsTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ3JILFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM1RCxXQUFXLENBQUNqRyxRQUFRLENBQUM2SixTQUFTLENBQUN6QyxRQUFRLENBQUM7Y0FDeENzSCxPQUFPLENBQUM7Z0JBQUU3RSxTQUFTLEVBQUU3SixRQUFRLENBQUM2SixTQUFTLENBQUNtQyxPQUFPLEVBQUU7Z0JBQUUvTCxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDcEUsQ0FBQyxDQUFDO1lBRUYsTUFBTXVJLFFBQVEsR0FBR0EsQ0FBQSxLQUFLLENBQUUsQ0FBQztZQUV6QixNQUFNMEcsSUFBSSxHQUFHLEVBQUU7WUFFZmxQLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLENBQUM0RSxJQUFJLElBQUc7Y0FDdkMsTUFBTTlPLElBQUksR0FBRyxPQUFPOE8sSUFBSSxLQUFLLFFBQVEsR0FBR0EsSUFBSSxHQUFHQSxJQUFJLENBQUM5TyxJQUFJO2NBQ3hELE1BQU0ySSxLQUFLLEdBQUdsSixLQUFLLENBQUMrSixTQUFTLENBQUN4SixJQUFJLENBQUM7Y0FFbkMsTUFBTStPLFVBQVUsR0FBRyxDQUFDLE1BQUs7Z0JBQ3hCLElBQUksQ0FBQ0QsSUFBSSxFQUFFRSxRQUFRLEVBQUUsT0FBTyxLQUFLO2dCQUNqQyxJQUFJLE9BQU9GLElBQUksRUFBRUUsUUFBUSxLQUFLLFFBQVEsRUFBRSxPQUFPLENBQUNyUCxRQUFRLENBQUM2SixTQUFTLENBQUNzRixJQUFJLENBQUNFLFFBQVEsQ0FBQztnQkFDakYsT0FBT0YsSUFBSSxDQUFDRSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxJQUFJLENBQUN2UCxRQUFRLENBQUM2SixTQUFTLENBQUMwRixRQUFRLENBQUMsQ0FBQztjQUNyRSxDQUFDLEVBQUMsQ0FBRTtjQUNKLE1BQU1DLEtBQUssR0FBRztnQkFBRWpKLFFBQVEsRUFBRTZJO2NBQVUsQ0FBRTtjQUV0Q0YsSUFBSSxDQUFDeEUsSUFBSSxDQUNSM0wsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbU4sS0FBQSxDQUFBVyxHQUFHO2dCQUFBLEdBQUtELEtBQUs7Z0JBQUVFLEdBQUcsRUFBRSxHQUFHMVAsUUFBUSxDQUFDd0IsRUFBRSxJQUFJbkIsSUFBSTtjQUFNLEdBQy9DMkksS0FBSyxDQUNELENBQ047WUFDRixDQUFDLENBQUM7WUFFRixPQUNDakssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbU4sS0FBQSxDQUFBYSxhQUFhO2NBQUNDLE1BQU0sRUFBRSxDQUFDO2NBQUUvTixTQUFTLEVBQUMsUUFBUTtjQUFDMkcsUUFBUSxFQUFFQTtZQUFRLEdBQzlEekosTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbU4sS0FBQSxDQUFBZSxJQUFJLFFBQUVYLElBQUksQ0FBUSxFQUNuQm5RLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ21OLEtBQUEsQ0FBQWdCLEtBQUs7Y0FBQ2pPLFNBQVMsRUFBQztZQUFFLEdBQ2xCOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa04sUUFBQSxDQUFBVCxvQkFBb0IsT0FBRyxFQUN4QnJQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ29OLEtBQUEsQ0FBQWdCLFlBQVk7Y0FBQzFQLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakN0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNvTixLQUFBLENBQUFnQixZQUFZO2NBQUMxUCxJQUFJLEVBQUM7WUFBVSxFQUFHLEVBQ2hDdEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDcU4sTUFBQSxDQUFBOUIsa0JBQWtCLE9BQUcsQ0FDZixDQUNPO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBL04sV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFTLFdBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVV1TyxrQkFBa0JBLENBQUM7WUFDbENsTixJQUFJO1lBQ0pnSixPQUFPO1lBQ1AxRjtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUUvRCxNQUFNO2NBQUVDLFFBQVE7Y0FBRUcsUUFBUTtjQUFFRjtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNnTCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyTSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTThILFFBQVEsR0FBR3BELEtBQUssSUFBRztjQUN4QixNQUFNd0YsTUFBTSxHQUFHeEYsS0FBSyxDQUFDcUQsYUFBYTtjQUNsQyxNQUFNb0IsU0FBUyxHQUFHO2dCQUFFLEdBQUdqSyxNQUFNLENBQUNpSztjQUFTLENBQUU7Y0FDekNoSyxRQUFRLENBQUM7Z0JBQUVnSyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDeEosSUFBSSxHQUFHdUssTUFBTSxDQUFDdEs7Z0JBQUssQ0FBRTtnQkFBRUwsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQy9FLENBQUM7WUFDRCxNQUFNb0wsUUFBUSxHQUFHekwsTUFBTSxDQUFDSyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTXFMLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUkxTCxNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJtTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEekgsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU1QLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLE1BQU15RyxTQUFTLEdBQUc7Z0JBQUUsR0FBR2pLLE1BQU0sQ0FBQ2lLO2NBQVMsQ0FBRTtjQUN6Q2hLLFFBQVEsQ0FBQztnQkFBRWdLLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUN4SixJQUFJLEdBQUdMLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3hKLElBQUk7Z0JBQUM7Y0FBRSxDQUFFLENBQUM7Y0FDM0UrSyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ6SCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTRILGFBQWEsR0FBR0EsQ0FBQSxLQUFNSCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ3JNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXNCLFFBQVE7Y0FDUlAsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbkksSUFBSSxFQUFDLFNBQVM7Y0FDZEMsS0FBSyxFQUFFVixNQUFNLENBQUNpSyxTQUFTLEdBQUd4SixJQUFJLENBQUMsSUFBSSxFQUFFO2NBQ3JDNEksV0FBVyxFQUFFbkosS0FBSyxDQUFDNkwsTUFBTSxDQUFDL0Q7WUFBUSxFQUNqQyxFQUNGN0ksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRXVKLGFBQWE7Y0FBRXBKLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7WUFBQSxHQUN4RDBJLFFBQVEsQ0FDRCxFQUNUdE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbEMsV0FBQSxDQUFBb0QsVUFBVSxPQUFHLENBQ04sRUFDUnNJLGVBQWUsSUFDZnBNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRU8sUUFBUSxFQUFFNEg7WUFBYSxHQUMxRHhNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FBTTdCLEtBQUssQ0FBQzZMLE1BQU0sQ0FBQ3pDLE1BQU0sQ0FBTyxDQUVqQyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUFuSyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUksS0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQVMsV0FBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVWdSLGdCQUFnQkEsQ0FBQztZQUFFck07VUFBUSxDQUFFO1lBQzVDLE1BQU07Y0FBRTdELEtBQUs7Y0FBRUU7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTTtjQUFFUCxNQUFNO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ2dMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JNLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNOEgsUUFBUSxHQUFHcEQsS0FBSyxJQUFHO2NBQ3hCLE1BQU13RixNQUFNLEdBQUd4RixLQUFLLENBQUNxRCxhQUFhO2NBQ2xDLE1BQU1xQixLQUFLLEdBQUc7Z0JBQUUsR0FBR2xLLE1BQU0sQ0FBQ2tLO2NBQUssQ0FBRTtjQUNqQ2pLLFFBQVEsQ0FBQztnQkFBRWlLLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNjLE1BQU0sQ0FBQ3ZLLElBQUksR0FBR3VLLE1BQU0sQ0FBQ3RLO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQy9ELENBQUM7WUFDRCxNQUFNK0ssUUFBUSxHQUFHekwsTUFBTSxDQUFDSyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTXFMLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUkxTCxNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJtTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEekgsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1QLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCZ0ksa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCekgsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU00SCxhQUFhLEdBQUdBLENBQUEsS0FBTUgsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE9BQ0NyTSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUFxQixJQUFJLFFBQ0ovSixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUErRCxLQUFLO2NBQ0xoRCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJRLEtBQUssRUFBRWxKLEtBQUssQ0FBQ2dLLEtBQUssQ0FBQzJCLElBQUksQ0FBQ3pDLEtBQUs7Y0FDN0JDLFdBQVcsRUFBRW5KLEtBQUssQ0FBQ2dLLEtBQUssQ0FBQzJCLElBQUksQ0FBQ3hDLFdBQVc7Y0FDekM1SSxJQUFJLEVBQUM7WUFBTSxFQUNWLEVBQ0Z0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFdUosYUFBYTtjQUFFcEosT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtZQUFBLEdBQ3hEMEksUUFBUSxDQUNELEVBQ1R0TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNsQyxXQUFBLENBQUFvRCxVQUFVLE9BQUcsQ0FDTixFQUNSc0ksZUFBZSxJQUNmcE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBRSxZQUFZO2NBQUNMLFNBQVMsRUFBRUEsU0FBUztjQUFFTyxRQUFRLEVBQUU0SDtZQUFhLEdBQzFEeE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDNkwsTUFBTSxDQUFDekMsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBbkssTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRNLE1BQUEsR0FBQTVNLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUF5SSxLQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQTZNLFNBQUEsR0FBQTdNLE9BQUE7VUFFTSxTQUFVaVIsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUVqUSxRQUFRO2NBQUVILFFBQVE7Y0FBRUQ7WUFBTSxDQUFFLEdBQUcsSUFBQVgsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDekQsTUFBTSxDQUFDd0wsTUFBTSxFQUFFSSxTQUFTLENBQUMsR0FBR2hOLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBb0csTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ3JILFFBQVEsQ0FBQzhKLEtBQUssQ0FBQyxFQUFFLE1BQU1qSyxRQUFRLENBQUNHLFFBQVEsQ0FBQ2dNLE9BQU8sRUFBRSxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFbEYsSUFBSUwsTUFBTSxFQUFFLE9BQU81TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUF1SSxnQkFBZ0I7Y0FBQ3JNLFFBQVEsRUFBRUEsQ0FBQSxLQUFNb0ksU0FBUyxDQUFDLEtBQUs7WUFBQyxFQUFJO1lBQ3pFLElBQUksQ0FBQ25NLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQ29HLE9BQU8sRUFBRSxPQUFPblIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDaUssTUFBQSxDQUFBSyxVQUFVO2NBQUM1TCxJQUFJLEVBQUMsUUFBUTtjQUFDNkwsUUFBUSxFQUFFQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxJQUFJO1lBQUMsRUFBSTtZQUUvRixPQUFPaE4sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0ssU0FBQSxDQUFBTSxnQkFBZ0I7Y0FBQzlMLElBQUksRUFBQztZQUFTLEVBQUc7VUFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFrRCxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVW1SLGtCQUFrQkEsQ0FBQztZQUFFM00sSUFBSTtZQUFFTDtVQUFPLENBQUU7WUFDbkQsTUFBTSxDQUFDaUUsUUFBUSxFQUFFbkIsV0FBVyxDQUFDLEdBQUdsSCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMWixLQUFLLEVBQUU7Z0JBQUVrQixVQUFVLEVBQUVsQixLQUFLO2dCQUFFcUM7Y0FBTyxDQUFFO2NBQ3JDbkMsUUFBUTtjQUNSSDtZQUFRLENBQ1IsR0FBRyxJQUFBWixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUN0QixJQUFJLENBQUNxRCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1KLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSDZDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1qRyxRQUFRLENBQUNvUSxZQUFZLEVBQUU7Z0JBQzdCLE1BQU01RyxJQUFJLEdBQUc7a0JBQUVNLEtBQUssRUFBRTlKLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQ2tDLE9BQU8sRUFBRTtrQkFBRW5DLFNBQVMsRUFBRTdKLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ21DLE9BQU8sRUFBRTtrQkFBRS9MLE9BQU8sRUFBRTtnQkFBSyxDQUFFO2dCQUN6R2tELE9BQU8sRUFBRTtnQkFDVHRELFFBQVEsQ0FBQzJKLElBQUksQ0FBQztlQUNkLENBQUMsT0FBT25FLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUWSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ2xILE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUUsWUFBWTtjQUNaRCxJQUFJO2NBQ0pMLE9BQU8sRUFBRUEsT0FBTztjQUNoQkMsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCaU4sVUFBVSxFQUFFO2dCQUFFckgsS0FBSyxFQUFFN0csT0FBTyxDQUFDc0U7Y0FBTyxDQUFFO2NBQ3RDNkosU0FBUyxFQUFFO2dCQUFFdEgsS0FBSyxFQUFFN0csT0FBTyxDQUFDK0c7Y0FBTTtZQUFFLEdBRXBDbkssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDeVEsV0FBVyxDQUFDMVAsS0FBSyxDQUFNLEVBQ2xDOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxZQUFJN0IsS0FBSyxDQUFDeVEsV0FBVyxDQUFDclAsV0FBVyxDQUFLLENBQ3hCLENBQ2I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQW5DLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3UixjQUFBLEdBQUF4UixPQUFBO1VBQ0EsSUFBQXlSLGNBQUEsR0FBQXpSLE9BQUE7VUFDQSxJQUFBMFIsT0FBQSxHQUFBMVIsT0FBQTtVQUNBLElBQUEyUixlQUFBLEdBQUEzUixPQUFBO1VBQ0EsSUFBQTRSLE9BQUEsR0FBQTVSLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBNlIsWUFBQSxHQUFBN1IsT0FBQTtVQUVNLFNBQVU4UixnQkFBZ0JBLENBQUM7WUFBRXhOO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUV0RCxRQUFRO2NBQUVILFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFeEQsTUFBTSxDQUFDNFEsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHalMsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU11USxLQUFLLEdBQUc7Y0FDYixnQkFBZ0IsRUFBRVIsY0FBQSxDQUFBeEIsaUJBQWlCO2NBQ25DaUMsTUFBTSxFQUFFUixPQUFBLENBQUFULFVBQVU7Y0FDbEJrQixNQUFNLEVBQUVQLE9BQUEsQ0FBQVEsVUFBVTtjQUNsQixpQkFBaUIsRUFBRVQsZUFBQSxDQUFBVSxrQkFBa0I7Y0FDckMsZ0JBQWdCLEVBQUViLGNBQUEsQ0FBQTFFO2FBQ2xCO1lBRUQsSUFBSSxDQUFDbUYsS0FBSyxDQUFDM04sSUFBSSxDQUFDLEVBQUVnQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRWpDLElBQUksRUFBRTJOLEtBQUssQ0FBQztZQUVoRSxNQUFNbkksSUFBSSxHQUFHbUksS0FBSyxDQUFDM04sSUFBSSxDQUFDO1lBRXhCLE1BQU1xTCxXQUFXLEdBQUdBLENBQUEsS0FBTXFDLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNdkIsS0FBSyxHQUFHO2NBQUV6TixPQUFPLEVBQUU0TSxXQUFXO2NBQUVwSSxRQUFRLEVBQUV2RyxRQUFRLENBQUM4SixLQUFLLENBQUNtRSxLQUFLLElBQUlqTyxRQUFRLENBQUM2SixTQUFTLENBQUNvRTtZQUFLLENBQUU7WUFFbEcsT0FDQ2xQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStDLEdBQ2hFOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZ0ssS0FBSyxDQUFDakosS0FBSyxDQUFNLEVBQzVCOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNOLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7Y0FBQSxHQUFLNk07WUFBSyxHQUMxQzFQLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ21QLE1BQU0sQ0FDYixDQUNKLENBQ0UsRUFDVHZTLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ21ILElBQUksT0FBRyxFQUNSL0osTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa1AsWUFBQSxDQUFBVixrQkFBa0I7Y0FBQzNNLElBQUksRUFBRXVOLGVBQWU7Y0FBRTVOLE9BQU8sRUFBRXdMO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBeFAsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUVNLFNBQVV1TyxrQkFBa0JBLENBQUM7WUFDbENsTixJQUFJO1lBQ0pzRDtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUUvRCxNQUFNO2NBQUVDLFFBQVE7Y0FBRUcsUUFBUTtjQUFFRjtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNnTCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyTSxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTThILFFBQVEsR0FBR3BELEtBQUssSUFBRztjQUN4QixNQUFNd0YsTUFBTSxHQUFHeEYsS0FBSyxDQUFDcUQsYUFBYTtjQUNsQyxNQUFNb0IsU0FBUyxHQUFHO2dCQUFFLEdBQUdqSyxNQUFNLENBQUNpSztjQUFTLENBQUU7Y0FDekNoSyxRQUFRLENBQUM7Z0JBQUVnSyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDeEosSUFBSSxHQUFHdUssTUFBTSxDQUFDdEs7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDaEUsQ0FBQztZQUNELE1BQU0rSyxRQUFRLEdBQUd6TCxNQUFNLENBQUNLLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNcUwsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSTFMLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFO2dCQUNuQm1MLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR6SCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTVAsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTXlHLFNBQVMsR0FBRztnQkFBRSxHQUFHakssTUFBTSxDQUFDaUs7Y0FBUyxDQUFFO2NBQ3pDaEssUUFBUSxDQUFDO2dCQUFFZ0ssU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ3hKLElBQUksR0FBR0wsUUFBUSxDQUFDNkosU0FBUyxDQUFDeEosSUFBSTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUMzRStLLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnpILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNNEgsYUFBYSxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDck0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUNDNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBc0IsUUFBUTtjQUNSUCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJuSSxJQUFJLEVBQUVBLElBQUk7Y0FDVkMsS0FBSyxFQUFFVixNQUFNLENBQUNpSyxTQUFTLEdBQUd4SixJQUFJLENBQUMsSUFBSSxFQUFFO2NBQ3JDNEksV0FBVyxFQUFFbkosS0FBSyxDQUFDNkwsTUFBTSxDQUFDdEwsSUFBSSxDQUFDLENBQUN1SDtZQUFRLEVBQ3ZDLEVBQ0Y3SSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFdUosYUFBYTtjQUFFcEosT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtZQUFBLEdBQ3hEMEksUUFBUSxDQUNELENBQ0QsRUFDUkYsZUFBZSxJQUNmcE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBRSxZQUFZO2NBQUNMLFNBQVMsRUFBRUEsU0FBUztjQUFFTyxRQUFRLEVBQUU0SDtZQUFhLEdBQzFEeE0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxjQUFNN0IsS0FBSyxDQUFDNkwsTUFBTSxDQUFDekMsTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQW5LLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrUCxTQUFBLEdBQUFsUCxPQUFBO1VBQ0EsSUFBQThILE1BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBbVAsY0FBQSxHQUFBblAsT0FBQTtVQUNBLElBQUF1UyxtQkFBQSxHQUFBdlMsT0FBQTtVQUVNLFNBQVUrUSxZQUFZQSxDQUFDO1lBQUUxUDtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFTDtZQUFRLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUV2QyxNQUFNLENBQUNxUixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHMVMsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQzZKLFNBQVMsQ0FBQ3hKLElBQUksQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQ3NMLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUdoTixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBQW9HLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNySCxRQUFRLENBQUM2SixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDNEgsV0FBVyxDQUFDelIsUUFBUSxDQUFDNkosU0FBUyxDQUFDeEosSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsSUFBSXNMLE1BQU0sRUFBRTtjQUNYLE9BQU81TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0UCxtQkFBQSxDQUFBaEUsa0JBQWtCO2dCQUFDbE4sSUFBSSxFQUFFQSxJQUFJO2dCQUFFc0QsUUFBUSxFQUFFQSxDQUFBLEtBQU1vSSxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRTVFLElBQUksQ0FBQ3lGLFFBQVEsRUFBRSxPQUFPelMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDd00sY0FBQSxDQUFBSyxhQUFhO2NBQUNuTyxJQUFJLEVBQUVBLElBQUk7Y0FBRTZMLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtZQUFDLEVBQUk7WUFFcEYsT0FBT2hOLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3VNLFNBQUEsQ0FBQUssUUFBUTtjQUFDbEYsT0FBTyxFQUFFbUk7WUFBUSxFQUFJO1VBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBelMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlJLEtBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMFMsa0JBQUEsR0FBQTFTLE9BQUE7VUFFTSxTQUFVMlMsVUFBVUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQWdCLENBQUU7WUFDckQsTUFBTTtjQUFFL1IsS0FBSztjQUFFRSxRQUFRO2NBQUVIO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3hELE1BQU07Y0FDTDJKLEtBQUssRUFBRTtnQkFBRWdJLEtBQUs7Z0JBQUVDLFNBQVM7Z0JBQUVqSTtjQUFLO1lBQUUsQ0FDbEMsR0FBRyxJQUFBNEgsa0JBQUEsQ0FBQU0sMkJBQTJCLEdBQUU7WUFDakMsTUFBTSxDQUFDMVIsS0FBSyxFQUFFMlIsUUFBUSxDQUFDLEdBQUdsVCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTThILFFBQVEsR0FBR3BELEtBQUssSUFBRztjQUN4QjZNLFFBQVEsQ0FBQzdNLEtBQUssQ0FBQ3FELGFBQWEsQ0FBQ25JLEtBQUssQ0FBQztZQUNwQyxDQUFDO1lBRUQsTUFBTTRSLEtBQUssR0FBRzlNLEtBQUssSUFBRztjQUNyQjZNLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FFWm5JLEtBQUssQ0FBQ2lJLFNBQVMsQ0FBQ0gsS0FBSyxFQUFFdFIsS0FBSyxDQUFDO1lBQzlCLENBQUM7WUFDRCxNQUFNcUQsUUFBUSxHQUFHeUIsS0FBSyxJQUFHO2NBQ3hCeU0sZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2NBQ3ZCQyxLQUFLLEVBQUU7WUFDUixDQUFDO1lBRUQsT0FDQy9TLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWMsR0FDNUI5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUErRCxLQUFLO2NBQUNuTCxJQUFJLEVBQUMsbUJBQW1CO2NBQUNDLEtBQUssRUFBRUEsS0FBSztjQUFFa0ksUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDcEV6SixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF1RCxHQUNyRTlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ1QsT0FBTyxFQUFFNEIsUUFBUTtjQUFFekIsT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFDVixJQUFJLEVBQUM7WUFBUSxHQUNqRW5DLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ21QLE1BQU0sQ0FDYixFQUNUdlMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDVCxPQUFPLEVBQUVtUSxLQUFLO2NBQUVqUSxJQUFJLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUM7WUFBUyxHQUNsRHBDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2dRLEdBQUcsQ0FDVixDQUNKLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0EsSUFBQXBULE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnTyxLQUFBLEdBQUFoTyxPQUFBO1VBR0EsSUFBQW9ULEtBQUEsR0FBQXBULE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUNPO1VBQVcsU0FBVXFULGFBQWFBLENBQUM7WUFBRUMsUUFBUTtZQUFFOUksSUFBSSxHQUFHLEVBQUU7WUFBRW9JLEtBQUs7WUFBRUM7VUFBZ0IsQ0FBRTtZQUN6RixNQUFNLENBQUNVLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd6VCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTSxDQUFDK1IsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzNULE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDNFIsUUFBUSxDQUFDRyxPQUFPLENBQUM7WUFFOUQsSUFBQTNMLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNpTCxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQzFCSSxVQUFVLENBQUNKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ0wsUUFBUSxFQUFFakksT0FBTyxJQUFJLENBQUNpSSxRQUFRLENBQUNqSSxPQUFPLENBQUN1SSxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBQy9ELElBQUksQ0FBQ04sUUFBUSxDQUFDakksT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUNsQyxPQUNDdEwsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDcUwsS0FBQSxDQUFBYSxJQUFJO2NBQ0ovRCxLQUFLLEVBQUU7Z0JBQ04ySSxPQUFPO2dCQUNQSDtlQUNBO2NBQ0R6USxTQUFTLEVBQUMsd0JBQXdCO2NBQ2xDeUksS0FBSyxFQUFFZ0ksUUFBUSxDQUFDakksT0FBTztjQUN2QnlELE9BQU8sRUFBRXNFLEtBQUEsQ0FBQVM7WUFBVSxFQUNsQixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUE5VCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBOFQsTUFBQSxHQUFBOVQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPLE1BQU02VCxVQUFVLEdBQUdFLEtBQUssSUFBRztZQUNqQyxNQUFNO2NBQ0w1RCxJQUFJO2NBQ0p5QyxLQUFLO2NBQ0w5SCxLQUFLLEVBQUU7Z0JBQUV3SSxRQUFRO2dCQUFFRztjQUFPO1lBQUUsQ0FDNUIsR0FBR00sS0FBSztZQUNULE1BQU07Y0FBRWpUO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRXBDLE1BQU02UyxJQUFJLEdBQUc1TixLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ2lCLGNBQWMsRUFBRTtjQUN0QmlNLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDZCxLQUFLLENBQUM7WUFDM0IsQ0FBQztZQUVELE9BQ0M3UyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGFBQ0M1QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU93TixJQUFJLENBQVEsRUFDbEJtRCxRQUFRLENBQUNLLGFBQWEsS0FBS2YsS0FBSyxHQUNoQzdTLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ21SLE1BQUEsQ0FBQUcsSUFBSTtjQUFDaFIsSUFBSSxFQUFDLE9BQU87Y0FBQ2lSLE1BQU0sRUFBQyxJQUFJO2NBQUM1UCxJQUFJLEVBQUM7WUFBUyxHQUMzQ3hELEtBQUssQ0FBQ3FULGNBQWMsQ0FBQ0MsTUFBTSxDQUFDWCxPQUFPLENBQzlCLEdBRVAxVCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNULE9BQU8sRUFBRWlSLElBQUk7Y0FBRS9RLElBQUksRUFBQyxNQUFNO2NBQUNVLFFBQVE7Y0FBQ3VRLE1BQU0sRUFBQyxJQUFJO2NBQUNoUixPQUFPLEVBQUM7WUFBUyxHQUN2RXBDLEtBQUssQ0FBQ3FULGNBQWMsQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENBRWxDLENBQ0c7VUFFUCxDQUFDO1VBQUNuTixPQUFBLENBQUFnTixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENGLElBQUE5VCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMFMsa0JBQUEsR0FBQTFTLE9BQUE7VUFJQSxJQUFBcVUsUUFBQSxHQUFBclUsT0FBQTtVQUNBLElBQUF5SSxLQUFBLEdBQUF6SSxPQUFBO1VBRU87VUFBVyxTQUFVc1UsVUFBVUEsQ0FBQztZQUFFOUosSUFBSTtZQUFFb0k7VUFBSyxDQUFFO1lBQ3JELE1BQU07Y0FBRTlIO1lBQUssQ0FBRSxHQUFHLElBQUE0SCxrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUUvQyxNQUFNLENBQUN1QixjQUFjLEVBQUUxQixnQkFBZ0IsQ0FBQyxHQUFHOVMsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNvSixLQUFLLENBQUMwSixnQkFBZ0IsS0FBSzVCLEtBQUssQ0FBQztZQUUzRixNQUFNbE8sSUFBSSxHQUFHLE9BQU84RixJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLENBQUM4SSxRQUFRLEdBQUc5SSxJQUFJO1lBQzVELE1BQU1pSyxpQkFBaUIsR0FBRzNKLEtBQUssQ0FBQzBKLGdCQUFnQixLQUFLNUIsS0FBSyxJQUFJMkIsY0FBYztZQUU1RSxPQUNDeFUsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMrUCxrQkFBQSxDQUFBZ0MscUJBQXFCO2NBQUNsSyxJQUFJLEVBQUU5RixJQUFJO2NBQUVrTyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUNsRDlILEtBQUssQ0FBQzZKLE9BQU8sSUFBSTdKLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOEosU0FBUyxDQUFDaEMsS0FBSyxDQUFDLElBQzdDN1MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDMFIsUUFBQSxDQUFBaEIsYUFBYTtjQUNiQyxRQUFRLEVBQUV4SSxLQUFLLENBQUNBLEtBQUssQ0FBQzhKLFNBQVMsQ0FBQ2hDLEtBQUssQ0FBQztjQUN0Q0MsZ0JBQWdCLEVBQUVBLGdCQUFnQjtjQUNsQ3JJLElBQUksRUFBRU0sS0FBSyxDQUFDNkosT0FBTztjQUNuQi9CLEtBQUssRUFBRUE7WUFBSyxFQUViLEVBRUE2QixpQkFBaUIsSUFBSTFVLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQWtLLFVBQVU7Y0FBQ0MsS0FBSyxFQUFFQSxLQUFLO2NBQUVDLGdCQUFnQixFQUFFQTtZQUFnQixFQUFJLENBQ2pGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUE5UyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNE0sTUFBQSxHQUFBNU0sT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBRUEsSUFBQWdPLEtBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBK04sT0FBQSxHQUFBL04sT0FBQTtVQUNBLElBQUE2VSxpQkFBQSxHQUFBN1UsT0FBQTtVQUNBLElBQUE4VSxnQkFBQSxHQUFBOVUsT0FBQTtVQUVNLFNBQVVxUyxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFelIsTUFBTTtjQUFFSSxRQUFRO2NBQUVILFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDNFQsVUFBVSxFQUFFaEksU0FBUyxDQUFDLEdBQUdoTixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDc1QsZ0JBQWdCLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdsVixNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEUsTUFBTTROLElBQUksR0FBR0EsQ0FBQSxLQUFNMkYsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNDLE1BQU03UixJQUFJLEdBQUdBLENBQUEsS0FBTTZSLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUM1QyxNQUFNL0gsUUFBUSxHQUFHQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsTUFBTW1JLFVBQVUsR0FBR0EsQ0FBQSxLQUFNbkksU0FBUyxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFBakYsTUFBQSxDQUFBTyxTQUFTLEVBQ1IsQ0FBQ3JILFFBQVEsQ0FBQzhKLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHOUosUUFBUSxDQUFDOEosS0FBSyxDQUFDa0MsT0FBTyxFQUFFO2NBQ3RDbk0sUUFBUSxDQUFDO2dCQUFFaUs7Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELElBQUlpSyxVQUFVLEVBQUUsT0FBT2hWLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ29MLE9BQUEsQ0FBQW9ILHdCQUF3QjtjQUFDeFEsUUFBUSxFQUFFdUk7WUFBUSxFQUFJO1lBRXZFLElBQUksQ0FBQ3RNLE1BQU0sQ0FBQ2tLLEtBQUssRUFBRThKLFNBQVMsRUFBRWhCLE1BQU0sRUFBRTtjQUNyQyxPQUNDN1QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbVMsZ0JBQUEsQ0FBQU0sb0JBQW9CLE9BQUcsRUFDeEJyVixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNpSyxNQUFBLENBQUFLLFVBQVU7Z0JBQ1Y1TCxJQUFJLEVBQUMsaUJBQWlCO2dCQUN0QjZMLFFBQVEsRUFBRWdJLFVBQVU7Z0JBQ3BCbEssZUFBZSxFQUFFO2tCQUFFcUssT0FBTyxFQUFFclUsUUFBUSxDQUFDOEosS0FBSyxDQUFDdUs7Z0JBQU87Y0FBRSxFQUNuRCxDQUNBOztZQUlMLE9BQ0N0VixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUE1QyxNQUFBLENBQUEwQixPQUFBLENBQUFtQixRQUFBLFFBQ0M3QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFzQixHQUNuQ21TLGdCQUFnQixHQUNoQmpWLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZ0ssS0FBSyxDQUFDOEosU0FBUyxDQUFDL1MsS0FBSyxDQUFNLEVBQ3RDOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDckMsTUFBQSxDQUFBMEMsVUFBVTtjQUFDQyxJQUFJLEVBQUMsV0FBVztjQUFDRixPQUFPLEVBQUVLO1lBQUksRUFBSSxDQUN0QyxFQUNUckQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDb0wsT0FBQSxDQUFBb0gsd0JBQXdCO2NBQUN4USxRQUFRLEVBQUV1STtZQUFRLEVBQUksQ0FDOUMsR0FFSG5OLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZ0ssS0FBSyxDQUFDOEosU0FBUyxDQUFDL1MsS0FBSyxDQUFNLEVBQ3RDOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDckMsTUFBQSxDQUFBMEMsVUFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDRixPQUFPLEVBQUV1TTtZQUFJLEVBQUksQ0FDakMsRUFDVHZQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FMLEtBQUEsQ0FBQWEsSUFBSTtjQUNKaE0sU0FBUyxFQUFDLG1CQUFtQjtjQUM3QnlJLEtBQUssRUFBRTFLLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQzhKLFNBQVM7Y0FDN0I5SixLQUFLLEVBQUUsRUFBRTtjQUNUZ0UsT0FBTyxFQUFFK0YsaUJBQUEsQ0FBQVM7WUFBZ0IsRUFDeEIsQ0FFSCxDQUNJLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUEsSUFBQXZWLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUEwUyxrQkFBQSxHQUFBMVMsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFvVCxLQUFBLEdBQUFwVCxPQUFBO1VBQ0EsSUFBQXVWLEtBQUEsR0FBQXZWLE9BQUE7VUFDQSxJQUFBd1YsY0FBQSxHQUFBeFYsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBR00sU0FBVW1WLHdCQUF3QkEsQ0FBQztZQUFFeFE7VUFBUSxDQUFFO1lBQ3BELE1BQU07Y0FBRTNELFFBQVE7Y0FBRUYsS0FBSztjQUFFRixNQUFNO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0sQ0FBQ2tLLE9BQU8sRUFBRW9LLFVBQVUsQ0FBQyxHQUFHMVYsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQzRLLGNBQWMsSUFBSSxFQUFFLENBQUM7WUFDakYsTUFBTTFNLFFBQVEsR0FBR2pKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUc4UixTQUFTLENBQUMsR0FBR3pULE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUNxUixTQUFTLEVBQUU0QyxZQUFZLENBQUMsR0FBRzVWLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNpVCxPQUFPLEVBQUVpQixVQUFVLENBQUMsR0FBRzdWLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUVoRCxJQUFBb0csTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ3JILFFBQVEsQ0FBQzhKLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDaEMySyxVQUFVLENBQUN6VSxRQUFRLENBQUM4SixLQUFLLENBQUM4SixTQUFTLENBQUNpQixHQUFHLENBQUMxRixJQUFJLElBQUlBLElBQUksQ0FBQ21ELFFBQVEsQ0FBQyxDQUFDO2NBQy9ELE1BQU1xQixPQUFPLEdBQUczVCxRQUFRLENBQUM4SixLQUFLLENBQUM4SixTQUFTLENBQUNpQixHQUFHLENBQUMxRixJQUFJLEtBQUs7Z0JBQUU3RSxLQUFLLEVBQUU2RSxJQUFJLENBQUM5RSxPQUFPO2dCQUFFb0ksT0FBTyxFQUFFdEQsSUFBSSxDQUFDd0Q7Y0FBYSxDQUFFLENBQUMsQ0FBQztjQUU1R2lDLFVBQVUsQ0FBQ2pCLE9BQU8sQ0FBQztjQUNuQixNQUFNN0osS0FBSyxHQUFHO2dCQUFFLEdBQUdsSyxNQUFNLENBQUNrSztjQUFLLENBQUU7Y0FDakNqSyxRQUFRLENBQUM7Z0JBQUVpSyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxHQUFHOUosUUFBUSxDQUFDOEosS0FBSyxDQUFDa0MsT0FBTztnQkFBRTtjQUFFLENBQUUsQ0FBQztjQUM5RHdHLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixNQUFNc0MsWUFBWSxHQUFHQSxDQUFDO2NBQUVyTSxhQUFhLEVBQUVtQztZQUFNLENBQUUsS0FBSTtjQUNsRDVDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWixNQUFNOEIsS0FBSyxHQUFHO2dCQUFFLEdBQUdsSyxNQUFNLENBQUNrSztjQUFLLENBQUU7Y0FFakM5SixRQUFRLENBQUM4SixLQUFLLENBQUNpTCxHQUFHLENBQUM7Z0JBQUVuQixTQUFTLEVBQUVoSixNQUFNLENBQUN0SztjQUFLLENBQUUsQ0FBQztjQUMvQyxNQUFNcVQsT0FBTyxHQUFHM1QsUUFBUSxDQUFDOEosS0FBSyxDQUFDOEosU0FBUyxDQUFDaUIsR0FBRyxDQUFDMUYsSUFBSSxLQUFLO2dCQUFFN0UsS0FBSyxFQUFFNkUsSUFBSSxDQUFDOUUsT0FBTztnQkFBRW9JLE9BQU8sRUFBRXRELElBQUksQ0FBQ3dEO2NBQWEsQ0FBRSxDQUFDLENBQUM7Y0FDNUdpQyxVQUFVLENBQUNqQixPQUFPLENBQUM7Y0FDbkJjLFVBQVUsQ0FBQzdKLE1BQU0sQ0FBQ3RLLEtBQUssQ0FBQztjQUN4QlQsUUFBUSxDQUFDO2dCQUFFaUssS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsR0FBRzlKLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQ2tDLE9BQU87Z0JBQUU7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUVELE1BQU1nSixZQUFZLEdBQXdCO2NBQ3pDckIsT0FBTyxFQUFFO2dCQUNSO2dCQUNBMVIsSUFBSSxFQUFFM0MsTUFBQSxDQUFBbUQsS0FBSyxDQUFDQyxPQUFPO2dCQUNuQjdCLEtBQUssRUFBRWYsS0FBSyxDQUFDcUMsT0FBTyxDQUFDOFMsZUFBZTtnQkFDcENsVCxPQUFPLEVBQUUsTUFBQUEsQ0FBT3FELEtBQUssRUFBRXdNLEtBQUssRUFBRXBJLElBQUksS0FBSTtrQkFDckMsTUFBTTBMLE9BQU8sR0FBRyxJQUFJWCxLQUFBLENBQUFZLGNBQWMsRUFBRTtrQkFDcEMsTUFBTW5WLFFBQVEsQ0FBQ29WLGNBQWMsQ0FBQ3hELEtBQUssRUFBRXBJLElBQUksQ0FBQztrQkFDMUM1RSxVQUFVLENBQUNOLFVBQVUsQ0FBQyxNQUFLO29CQUMxQjRRLE9BQU8sQ0FBQ0csT0FBTyxFQUFFO2tCQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2tCQUVSLE9BQU9ILE9BQU87Z0JBQ2Y7ZUFDQTtjQUNEL0MsR0FBRyxFQUFFO2dCQUNKbFEsSUFBSSxFQUFFLEtBQUs7Z0JBQ1hwQixLQUFLLEVBQUVmLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2dRLEdBQUc7Z0JBQ3hCbUQsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCdlQsT0FBTyxFQUFFQSxDQUFDcUQsS0FBSyxFQUFFd00sS0FBSyxLQUFJO2tCQUN6QitDLFlBQVksQ0FBQy9DLEtBQUssQ0FBQztnQkFDcEI7O2FBRUQ7WUFDRCxNQUFNOUgsS0FBSyxHQUFHO2NBQ2J4RyxJQUFJLEVBQUUsV0FBVztjQUNqQndHLEtBQUssRUFBRTlKLFFBQVEsQ0FBQzhKLEtBQUs7Y0FDckIwSixnQkFBZ0IsRUFBRXpCLFNBQVM7Y0FDM0I0QixPQUFPO2NBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW1CQTdCLEtBQUssRUFBRUEsQ0FBQSxLQUFNNkMsWUFBWSxDQUFDLEtBQUs7YUFDL0I7WUFFRCxPQUNDNVYsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMEIsR0FFeEM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUMrUCxrQkFBQSxDQUFBNkQsaUJBQWlCO2NBQ2pCcFQsT0FBTyxFQUFFNlMsWUFBWTtjQUNyQnBWLE1BQU0sRUFBRXlLLE9BQU87Y0FDZm1ELElBQUksRUFBRTRFLEtBQUEsQ0FBQWtCLFVBQVU7Y0FDaEJ4SixLQUFLLEVBQUVBLEtBQUs7Y0FDWmdMLFlBQVksRUFBRUEsWUFBWTtjQUMxQlUsU0FBUyxFQUFDO1lBQVcsR0FFckJ6VyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM2UyxjQUFBLENBQUFpQixrQkFBa0IsT0FBRyxDQUNILENBQ2Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzR0EsSUFBQTFXLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwUyxrQkFBQSxHQUFBMVMsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVV5VyxrQkFBa0JBLENBQUM7WUFBRUMsWUFBWSxHQUFHO1VBQUksQ0FBRTtZQUN6RCxNQUFNO2NBQUV2UCxvQkFBb0I7Y0FBRXdQLFNBQVM7Y0FBRTdWO1lBQUssQ0FBRSxHQUFHLElBQUFiLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQ3JFLE1BQU07Y0FBRXlWO1lBQWMsQ0FBRSxHQUFHLElBQUFsRSxrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUV4RCxPQUNDalQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0UsR0FDaEY5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN4QyxXQUFBLENBQUFxRCxNQUFNO2NBQUNQLElBQUksRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNTLFFBQVE7Y0FBQ1osT0FBTyxFQUFFNlQ7WUFBYyxHQUNuRTlWLEtBQUssQ0FBQytWLFdBQVcsQ0FBQzFELEdBQUcsQ0FDZCxFQUNSdUQsWUFBWSxJQUNaM1csTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDUCxJQUFJLEVBQUUzQyxNQUFBLENBQUFtRCxLQUFLLENBQUNDLE9BQU87Y0FBRVIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0gsT0FBTyxFQUFFQSxDQUFBLEtBQU1vRSxvQkFBb0IsQ0FBQyxXQUFXO1lBQUMsR0FDN0ZyRyxLQUFLLENBQUNxQyxPQUFPLENBQUNTLFFBQVEsQ0FFeEIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBdEQsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQWdPLEtBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVc1YsZ0JBQWdCQSxDQUFDO1lBQUU5SztVQUFJLENBQXVFO1lBQzdHLE1BQU1zTSxPQUFPLEdBQUdBLENBQUM7Y0FBRXRNLElBQUksRUFBRXVNLE1BQU07Y0FBRW5FO1lBQUssQ0FBbUMsS0FBSTtjQUM1RSxNQUFNM1AsSUFBSSxHQUFHMlAsS0FBSyxLQUFLcEksSUFBSSxDQUFDbUosYUFBYSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQzdELE9BQ0M1VCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2dCQUFJRSxTQUFTLEVBQUM7Y0FBNkMsR0FDMUQ5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNyQyxNQUFBLENBQUFxSyxJQUFJO2dCQUFDMUgsSUFBSSxFQUFFQSxJQUFJO2dCQUFFSixTQUFTLEVBQUM7Y0FBUyxFQUFHLEVBQ3ZDa1UsTUFBTSxDQUNIO1lBRVAsQ0FBQztZQUVELE9BQ0NoWCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFnQixHQUM3QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzZILElBQUksQ0FBQzhJLFFBQVEsQ0FBTSxFQUN4QnZULE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FMLEtBQUEsQ0FBQWEsSUFBSTtjQUFDdkQsS0FBSyxFQUFFZCxJQUFJLENBQUNhLE9BQU87Y0FBRXlELE9BQU8sRUFBRWdJO1lBQU8sRUFBSSxDQUMzQztVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBL1csTUFBQSxHQUFBQyxPQUFBO1VBSUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtMLFlBQUEsR0FBQWxMLE9BQUE7VUFDTSxTQUFVb1Ysb0JBQW9CQSxDQUFDO1lBQUVzQixZQUFZLEdBQUc7VUFBSSxDQUFFO1lBQzNELE1BQU07Y0FDTDNWLEtBQUs7Y0FDTDRWLFNBQVM7Y0FDVDdWLEtBQUssRUFBRTtnQkFBRXFULGNBQWMsRUFBRXJUO2NBQUssQ0FBRTtjQUNoQ0YsTUFBTTtjQUNOSSxRQUFRO2NBQ1JIO1lBQVEsQ0FDUixHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRXRCLE1BQU1rSyxPQUFPLEdBQUd0SyxLQUFLLENBQUN3QixLQUFLLENBQUNQLFVBQVUsQ0FBQ3NKLEtBQUssQ0FDMUMwTCxNQUFNLENBQUM3RyxJQUFJLElBQUlBLElBQUksQ0FBQzdMLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUM5Q3VSLEdBQUcsQ0FBQzFGLElBQUksSUFBRztjQUNYLE9BQU87Z0JBQUU3TyxLQUFLLEVBQUU2TyxJQUFJLENBQUMzTixFQUFFO2dCQUFFd0gsS0FBSyxFQUFFbUcsSUFBSSxDQUFDdE87Y0FBSyxDQUFFO1lBQzdDLENBQUMsQ0FBQztZQUVILElBQUl1SixZQUFZLEdBQUc7Y0FBRTlKLEtBQUssRUFBRSxLQUFLO2NBQUUwSSxLQUFLLEVBQUVsSixLQUFLLENBQUN1VSxPQUFPLENBQUM0QjtZQUFXLENBQUU7WUFDckUsSUFBSTVCLE9BQU8sR0FBR3ZULFNBQVM7WUFDdkIsSUFBSWQsUUFBUSxDQUFDOEosS0FBSyxDQUFDdUssT0FBTyxLQUFLdlQsU0FBUyxFQUFFO2NBQ3pDLE1BQU1vVixRQUFRLEdBQUduVyxLQUFLLENBQUN3QixLQUFLLENBQUNQLFVBQVUsQ0FBQ3NKLEtBQUssQ0FBQ3RLLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQ3VLLE9BQU8sQ0FBQztjQUNyRUEsT0FBTyxHQUFHNkIsUUFBUSxFQUFFMVUsRUFBRTs7WUFFdkIsTUFBTWdILFFBQVEsR0FBR3BELEtBQUssSUFBRztjQUN4QnBGLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQ2lMLEdBQUcsQ0FBQztnQkFBRVYsT0FBTyxFQUFFalAsS0FBSyxDQUFDd0YsTUFBTSxDQUFDdEs7Y0FBSyxDQUFFLENBQUM7Y0FDbkRULFFBQVEsQ0FBQztnQkFBRWlLLEtBQUssRUFBRTtrQkFBRSxHQUFHbEssTUFBTSxDQUFDa0ssS0FBSztrQkFBRXVLLE9BQU8sRUFBRWpQLEtBQUssQ0FBQ3dGLE1BQU0sQ0FBQ3RLO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ3RFLENBQUM7WUFDRCxPQUNDdkIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFBNUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBbUIsUUFBQSxRQUNDN0MsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFPa0osT0FBTyxFQUFDO1lBQUUsR0FBRS9LLEtBQUssQ0FBQ3VVLE9BQU8sQ0FBQ3JMLEtBQUssQ0FBUyxFQUMvQ2pLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3VJLFlBQUEsQ0FBQVksV0FBVztjQUFDeEssS0FBSyxFQUFFK1QsT0FBTztjQUFFaEssT0FBTyxFQUFFLENBQUNELFlBQVksRUFBRSxHQUFHQyxPQUFPLENBQUM7Y0FBRTdCLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3RGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUF6SixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUksS0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVtWCxpQkFBaUJBLENBQUM7WUFBRUMsS0FBSztZQUFFakgsSUFBSTtZQUFFeUMsS0FBSztZQUFFeUUsUUFBUTtZQUFFN047VUFBUSxDQUFFO1lBQzNFLE1BQU07Y0FBRTVJLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0sQ0FBQ2dMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JNLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNb1UsWUFBWSxHQUFHMVAsS0FBSyxJQUFHO2NBQzVCLE1BQU13RixNQUFNLEdBQUd4RixLQUFLLENBQUNxRCxhQUFhO2NBQ2xDMEcsSUFBSSxDQUFDdkUsTUFBTSxDQUFDdkssSUFBSSxDQUFDLEdBQUd1SyxNQUFNLENBQUN0SyxLQUFLO2NBQ2hDa0ksUUFBUSxDQUFDb0osS0FBSyxFQUFFekMsSUFBSSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxPQUNDcFEsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkM5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUErRCxLQUFLO2NBQ0xoRCxRQUFRLEVBQUVzTSxZQUFZO2NBQ3RCOUwsS0FBSyxFQUFFbEosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDb0csT0FBTyxDQUFDbEgsS0FBSztjQUNoQ0MsV0FBVyxFQUFFbkosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDd00sUUFBUSxDQUFDck4sV0FBVztjQUM3QzNJLEtBQUssRUFBRTZPLElBQUksQ0FBQzlPLElBQUk7Y0FDaEJBLElBQUksRUFBQyxNQUFNO2NBQ1g2QixPQUFPLEVBQUM7WUFBVSxFQUNqQixFQUNGbkQsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDOEYsS0FBQSxDQUFBc0IsUUFBUTtjQUNSUCxRQUFRLEVBQUVzTSxZQUFZO2NBQ3RCOUwsS0FBSyxFQUFFbEosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDd00sUUFBUSxDQUFDdE4sS0FBSztjQUNqQzFJLEtBQUssRUFBRTZPLElBQUksQ0FBQ2UsT0FBTztjQUNuQmpILFdBQVcsRUFBRW5KLEtBQUssQ0FBQ2dLLEtBQUssQ0FBQ29HLE9BQU8sQ0FBQ2pILFdBQVc7Y0FDNUM1SSxJQUFJLEVBQUMsU0FBUztjQUNkNkIsT0FBTyxFQUFDO1lBQVUsRUFDakIsRUFDRGtVLEtBQUssR0FBRyxDQUFDLElBQ1RyWCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLE1BQU07Y0FBQ0gsT0FBTyxFQUFFQSxDQUFBLEtBQU1zVSxRQUFRLENBQUN6RSxLQUFLO1lBQUMsR0FDbkQsR0FBRyxFQUNIOVIsS0FBSyxDQUFDcUMsT0FBTyxDQUFDbVAsTUFBTSxDQUNiLENBRVYsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBdlMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXVYLGtCQUFBLEdBQUF2WCxPQUFBO1VBRU0sU0FBVXdYLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFNVcsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUU7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDc1csVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzNYLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDZCxNQUFNLENBQUNrSyxLQUFLLEVBQUV3TSxRQUFRLEVBQUUxRCxNQUFNLElBQUksQ0FBQyxDQUFDO1lBRXZGLE1BQU0sQ0FBQ3RJLEtBQUssRUFBRXFNLFFBQVEsQ0FBQyxHQUFHNVgsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQ3ZDZCxNQUFNLENBQUNrSyxLQUFLLENBQUN3TSxRQUFRLENBQUMxRCxNQUFNLEdBQUdoVCxNQUFNLENBQUNrSyxLQUFLLENBQUN3TSxRQUFRLEdBQUcsQ0FBQztjQUFFQSxRQUFRLEVBQUUsRUFBRTtjQUFFcEcsT0FBTyxFQUFFO1lBQUUsQ0FBRSxDQUFDLENBQ3RGO1lBRUQsTUFBTWdDLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2NBQ2xCd0UsYUFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2NBQzdCRSxRQUFRLENBQUMsQ0FBQyxHQUFHck0sS0FBSyxFQUFFO2dCQUFFZ00sUUFBUSxFQUFFLEVBQUU7Z0JBQUVwRyxPQUFPLEVBQUU7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0QsTUFBTTBHLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLE1BQU1QLFFBQVEsR0FBR3pFLEtBQUssSUFBRztjQUN4QixNQUFNaUYsUUFBUSxHQUFHdk0sS0FBSyxDQUFDd00sS0FBSyxDQUFDLENBQUMsRUFBRWxGLEtBQUssQ0FBQyxDQUFDbUYsTUFBTSxDQUFDek0sS0FBSyxDQUFDd00sS0FBSyxDQUFDbEYsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQ3JFOEUsYUFBYSxDQUFDRyxRQUFRLENBQUNqRSxNQUFNLENBQUM7Y0FDOUIrRCxRQUFRLENBQUNFLFFBQVEsQ0FBQztjQUNsQmhYLFFBQVEsQ0FBQztnQkFBRWlLLEtBQUssRUFBRTtrQkFBRSxHQUFHbEssTUFBTSxDQUFDa0ssS0FBSztrQkFBRXdNLFFBQVEsRUFBRU87Z0JBQVE7Y0FBRSxDQUFFLENBQUM7WUFDN0QsQ0FBQztZQUNELE1BQU1HLFlBQVksR0FBR0EsQ0FBQ3BGLEtBQUssRUFBRXRSLEtBQUssS0FBSTtjQUNyQyxNQUFNa0osSUFBSSxHQUFHYyxLQUFLO2NBQ2xCZCxJQUFJLENBQUNvSSxLQUFLLENBQUMsR0FBR3RSLEtBQUs7Y0FDbkJxVyxRQUFRLENBQUNuTixJQUFJLENBQUM7Y0FDZDNKLFFBQVEsQ0FBQztnQkFBRWlLLEtBQUssRUFBRTtrQkFBRSxHQUFHbEssTUFBTSxDQUFDa0ssS0FBSztrQkFBRXdNLFFBQVEsRUFBRTlNO2dCQUFJO2NBQUUsQ0FBRSxDQUFDO1lBQ3pELENBQUM7WUFDRCxLQUFLLElBQUlnQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpTSxVQUFVLEVBQUUsRUFBRWpNLENBQUMsRUFBRTtjQUNwQ29NLE1BQU0sQ0FBQ2xNLElBQUksQ0FDVjNMLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRVLGtCQUFBLENBQUFKLGlCQUFpQjtnQkFDakIzTixRQUFRLEVBQUV3TyxZQUFZO2dCQUN0QlosS0FBSyxFQUFFSyxVQUFVO2dCQUNqQnRILElBQUksRUFBRTdFLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2dCQUNkNkwsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQjNHLEdBQUcsRUFBRSxZQUFZbEYsQ0FBQyxFQUFFO2dCQUNwQm9ILEtBQUssRUFBRXBIO2NBQUMsRUFDUCxDQUNGOztZQUdGLE9BQ0N6TCxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZ0ssS0FBSyxDQUFDd00sUUFBUSxDQUFDelYsS0FBSyxDQUFNLEVBQ3JDOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFDWixPQUFPLEVBQUVtUTtZQUFLLEdBQy9DcFMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDZ1EsR0FBRyxDQUNWLENBQ0osQ0FDRSxFQUNSeUUsTUFBTSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUE3WCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUksS0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWlZLGNBQUEsR0FBQWpZLE9BQUE7VUFDQSxJQUFBUyxXQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVa1ksZ0JBQWdCQSxDQUFDO1lBQUV2VDtVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFL0QsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUU7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDZ0wsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHck0sTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU04SCxRQUFRLEdBQUdwRCxLQUFLLElBQUc7Y0FDeEIsTUFBTXdGLE1BQU0sR0FBR3hGLEtBQUssQ0FBQ3FELGFBQWE7Y0FDbEMsTUFBTXFCLEtBQUssR0FBRztnQkFBRSxHQUFHbEssTUFBTSxDQUFDa0s7Y0FBSyxDQUFFO2NBQ2pDakssUUFBUSxDQUFDO2dCQUFFaUssS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsQ0FBQ2MsTUFBTSxDQUFDdkssSUFBSSxHQUFHdUssTUFBTSxDQUFDdEs7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU0rSyxRQUFRLEdBQUd6TCxNQUFNLENBQUNLLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNcUwsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSTFMLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFO2dCQUNuQm1MLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR6SCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTVAsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJnSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ6SCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTRILGFBQWEsR0FBR0EsQ0FBQSxLQUFNSCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ3JNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQXFCLElBQUksUUFDSi9KLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQStELEtBQUs7Y0FDTGhELFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFFbEosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDcU4sSUFBSSxDQUFDbk8sS0FBSztjQUM3QkMsV0FBVyxFQUFFbkosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDcU4sSUFBSSxDQUFDbE8sV0FBVztjQUN6QzVJLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRnRCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQStELEtBQUs7Y0FDTGhELFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFFbEosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDc04sWUFBWSxDQUFDcE8sS0FBSztjQUNyQ0MsV0FBVyxFQUFFbkosS0FBSyxDQUFDZ0ssS0FBSyxDQUFDc04sWUFBWSxDQUFDbk8sV0FBVztjQUNqRDVJLElBQUksRUFBQztZQUFjLEVBQ2xCLEVBQ0Z0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNzVixjQUFBLENBQUFULGFBQWEsT0FBRyxFQUNqQnpYLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFDVCxPQUFPLEVBQUV1SixhQUFhO2NBQUVwSixPQUFPLEVBQUMsU0FBUztjQUFDUyxRQUFRO1lBQUEsR0FDeEQwSSxRQUFRLENBQ0QsRUFDVHRNLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2xDLFdBQUEsQ0FBQW9ELFVBQVUsT0FBRyxDQUNOLEVBQ1JzSSxlQUFlLElBQ2ZwTSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM0QixNQUFBLENBQUFFLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVPLFFBQVEsRUFBRTRIO1lBQWEsR0FDMUR4TSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGNBQU03QixLQUFLLENBQUM2TCxNQUFNLENBQUN6QyxNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUFuSyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNE0sTUFBQSxHQUFBNU0sT0FBQTtVQUNBLElBQUE2TSxTQUFBLEdBQUE3TSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQThILE1BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBeUksS0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUFnTyxLQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQWlZLGNBQUEsR0FBQWpZLE9BQUE7VUFFTSxTQUFVb1MsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUV4UixNQUFNO2NBQUVJLFFBQVE7Y0FBRUgsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUM0VCxVQUFVLEVBQUVoSSxTQUFTLENBQUMsR0FBR2hOLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMyVyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHdlksTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUFvRyxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDckgsUUFBUSxDQUFDOEosS0FBSyxDQUFDLEVBQUUsTUFBTWpLLFFBQVEsQ0FBQ0csUUFBUSxDQUFDZ00sT0FBTyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztZQUVsRixJQUFJK0gsVUFBVSxFQUFFLE9BQU9oVixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUM4RixLQUFBLENBQUF5UCxnQkFBZ0I7Y0FBQ3ZULFFBQVEsRUFBRUEsQ0FBQSxLQUFNb0ksU0FBUyxDQUFDLEtBQUs7WUFBQyxFQUFJO1lBRTdFLElBQUksQ0FBQ25NLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQ3dNLFFBQVEsSUFBSSxDQUFDMVcsTUFBTSxDQUFDa0ssS0FBSyxDQUFDcU4sSUFBSSxJQUFJLENBQUN2WCxNQUFNLENBQUNrSyxLQUFLLENBQUN5TixVQUFVLEVBQUU7Y0FDN0UsT0FBT3hZLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2lLLE1BQUEsQ0FBQUssVUFBVTtnQkFBQzVMLElBQUksRUFBQyxRQUFRO2dCQUFDNkwsUUFBUSxFQUFFQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHckUsT0FDQ2hOLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tLLFNBQUEsQ0FBQU0sZ0JBQWdCO2NBQUM5TCxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ2hDdEIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDa0ssU0FBQSxDQUFBTSxnQkFBZ0I7Y0FBQzlMLElBQUksRUFBQztZQUFZLEVBQUcsRUFDdEN0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFzQixHQUNwQzlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxhQUFLN0IsS0FBSyxDQUFDZ0ssS0FBSyxDQUFDd00sUUFBUSxDQUFDelYsS0FBSyxDQUFNLEVBQ3JDOUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDckMsTUFBQSxDQUFBMEMsVUFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDRixPQUFPLEVBQUVBLENBQUEsS0FBTXVWLGVBQWUsQ0FBQyxJQUFJO1lBQUMsRUFBSSxDQUN4RCxFQUNSRCxZQUFZLEdBQ1p0WSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNzVixjQUFBLENBQUFULGFBQWEsT0FBRyxHQUVqQnpYLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FMLEtBQUEsQ0FBQWEsSUFBSTtjQUNKaE0sU0FBUyxFQUFDLHNCQUFzQjtjQUNoQ3lJLEtBQUssRUFBRTFLLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQ3dNLFFBQVE7Y0FDNUJ4TSxLQUFLLEVBQUUsRUFBRTtjQUNUZ0UsT0FBTyxFQUFFQSxDQUFDO2dCQUFFdEU7Y0FBSSxDQUFtRCxLQUNsRXpLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Z0JBQUtFLFNBQVMsRUFBQztjQUFnQixHQUM5QjlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsaUJBQVM2SCxJQUFJLENBQUNuSixJQUFJLEUsS0FBWSxFLEtBQUN0QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLGVBQU82SCxJQUFJLENBQUMwRyxPQUFPLENBQVE7WUFFM0QsRUFFRixDQUNJLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQXJKLEdBQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxjQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBSyxZQUFBLEdBQUFMLE9BQUE7VUFFQSxJQUFBd1ksV0FBQSxHQUFBeFksT0FBQTtVQUVPO1VBQVUsU0FBVXlZLFVBQVVBLENBQUM7WUFBRUM7VUFBVSxDQUFFO1lBQ25ELE1BQU07Y0FBRTFYLFFBQVE7Y0FBRUQsS0FBSztjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBYixRQUFBLENBQUFrQixnQkFBZ0IsR0FBRTtZQUNyRCxNQUFNLENBQUNJLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3pCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUNDLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzdCLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNdUMsTUFBTSxHQUFHbUMsS0FBSyxJQUFJckYsS0FBSyxDQUFDb0YsSUFBSSxDQUFDO2NBQUV0RSxLQUFLLEVBQUV1RSxLQUFLLENBQUN3RixNQUFNLENBQUN0SztZQUFLLENBQUUsQ0FBQztZQUNqRSxNQUFNYSxZQUFZLEdBQUdBLENBQUEsS0FBTVgsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ2xELE1BQU1rQixpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNZCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTTZFLEdBQUcsR0FBRyw2REFBNkQ7WUFFekUsTUFBTWUsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXZHLFFBQVEsQ0FBQzJYO1lBQVcsQ0FBRTtZQUNuRCxPQUNDNVksTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxrQkFDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQStRLFlBQVk7Y0FBQ0YsVUFBVSxFQUFFQTtZQUFVLEVBQUksRUFDeEMzWSxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVFFLFNBQVMsRUFBRTJEO1lBQUcsR0FDckJ6RyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QyxHQUMvRDlDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNlYsV0FBQSxDQUFBOU4sZ0JBQWdCO2NBQUNsSixnQkFBZ0IsRUFBRUE7WUFBZ0IsRUFBSSxFQUN4RHpCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQTlELGVBQWU7Y0FBQzFDLElBQUksRUFBQyxPQUFPO2NBQUMyQyxRQUFRLEVBQUMsSUFBSTtjQUFDQyxNQUFNLEVBQUVBO1lBQU0sR0FDeERqRCxRQUFRLENBQUNhLEtBQUssQ0FDRSxDQUNiLEVBRU45QixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN6QyxXQUFBLENBQUE0RCxVQUFVLE9BQUcsRUFDZC9ELE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFBLEdBQ0YrRCxRQUFRO2NBQ1p0RSxJQUFJLEVBQUUzQyxNQUFBLENBQUFtRCxLQUFLLENBQUNDLE9BQU87Y0FDbkJSLE9BQU8sRUFBQyxTQUFTO2NBQ2pCUyxRQUFRO2NBQ1JaLE9BQU8sRUFBRUw7WUFBaUIsR0FFekI1QixLQUFLLENBQUNxQyxPQUFPLENBQUNTLFFBQVEsQ0FDZixDQUNBLENBQ0QsQ0FDRixFQUNUN0QsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdEMsWUFBQSxDQUFBNkQsa0JBQWtCO2NBQUNNLElBQUksRUFBRWpELGFBQWE7Y0FBRTRDLE9BQU8sRUFBRWhDO1lBQVksRUFBSSxFQUNsRXBDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3BDLGNBQUEsQ0FBQThELHdCQUF3QjtjQUFDRyxJQUFJLEVBQUU3QyxlQUFlO2NBQUUyQyxJQUFJLEVBQUV0RCxRQUFRLENBQUNzRCxJQUFJO2NBQUVILE9BQU8sRUFBRXpCO1lBQWlCLEVBQUksQ0FDM0Y7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQTNDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4SCxNQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBSUEsSUFBQTZZLGVBQUEsR0FBQTdZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBOFksVUFBQSxHQUFBOVksT0FBQTtVQUNBLElBQUErWSxNQUFBLEdBQUEvWSxPQUFBO1VBQ0EsSUFBQTZILEdBQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBZ1osT0FBQSxHQUFBaFosT0FBQTtVQUNBLElBQUFJLGdCQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFZLFNBQVVpWixrQkFBa0JBLENBQUM7WUFBRVAsVUFBVTtZQUFFM1gsS0FBSztZQUFFQztVQUFRLENBQUU7WUFDOUUsTUFBTSxHQUFHd1MsU0FBUyxDQUFDLEdBQUd6VCxNQUFBLENBQUEwQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDZCxNQUFNLEVBQUVxSSxTQUFTLENBQUMsR0FBR2xKLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUF3QlYsUUFBUSxDQUFDZ00sT0FBTyxFQUFFLENBQUM7WUFDckYsTUFBTSxDQUFDa00sVUFBVSxFQUFFcFksS0FBSyxDQUFDLEdBQUcsSUFBQWdILE1BQUEsQ0FBQXFSLFFBQVEsRUFBQ04sZUFBQSxDQUFBeFYsTUFBWSxDQUFDK1YsU0FBUyxDQUFDO1lBQzVELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3ZaLE1BQUEsQ0FBQTBCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNO2NBQUU0QztZQUFJLENBQUUsR0FBR3RELFFBQVE7WUFDekIsTUFBTTJWLFNBQVMsR0FBRzVWLEtBQUssQ0FBQ3dZLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDbFYsSUFBSSxDQUFDO1lBQy9DLE1BQU1sRCxZQUFZLEdBQUdBLENBQUM7Y0FBRUMsSUFBSTtjQUFFQztZQUFLLENBQUUsS0FBS1QsUUFBUSxDQUFDO2NBQUUsQ0FBQ1EsSUFBSSxHQUFHQztZQUFLLENBQUUsQ0FBQztZQUNyRSxJQUFJLENBQUNxVixTQUFTLEVBQUUsTUFBTSxJQUFJOEMsS0FBSyxDQUFDLHFCQUFxQm5WLElBQUksbUJBQW1CLENBQUM7WUFFN0UsTUFBTXpELFFBQVEsR0FBRzJKLElBQUksSUFBRztjQUN2QixNQUFNa1AsU0FBUyxHQUFHO2dCQUFFLEdBQUc5WSxNQUFNO2dCQUFFLEdBQUc0SjtjQUFJLENBQUU7Y0FDeEN2QixTQUFTLENBQUN5USxTQUFTLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUE1UixNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDckgsUUFBUSxDQUFDLEVBQUUsTUFBTXdTLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUxQyxJQUFJLENBQUMwRixVQUFVLEVBQUUsT0FBT25aLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXdaLE9BQU87Y0FBQy9JLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFFakQsT0FDQzdRLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzFDLFFBQUEsQ0FBQThMLGFBQWEsQ0FBQzZOLFFBQVE7Y0FDdEJ0WSxLQUFLLEVBQUU7Z0JBQ05OLFFBQVE7Z0JBQ1JGLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xILE1BQU07Z0JBQ05NLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2tCQUNmRixRQUFRLENBQUM2SixTQUFTLENBQUNpSSxLQUFLLEVBQUU7a0JBQzFCN0osU0FBUyxDQUFDakksUUFBUSxDQUFDZ00sT0FBTyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0QvTCxPQUFPLEVBQUVMLE1BQU0sQ0FBQ0ssT0FBTztnQkFDdkJKLFFBQVE7Z0JBQ1J3WSxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiM0M7O1lBQ0EsR0FFRDVXLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FXLE9BQUEsQ0FBQVAsVUFBVTtjQUFDQyxVQUFVLEVBQUVBO1lBQVUsRUFBSSxFQUN0QzNZLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQWdTLGFBQWEsUUFDYjlaLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsY0FDQzVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSzdCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ0UsV0FBVyxDQUFNLEVBQ3ZDbkMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdkMsZ0JBQUEsQ0FBQTJELGVBQWU7Y0FBQzFDLElBQUksRUFBQyxhQUFhO2NBQUMyQyxRQUFRLEVBQUMsR0FBRztjQUFDQyxNQUFNLEVBQUU3QztZQUFZLEdBQ25FSixRQUFRLENBQUNrQixXQUFXLENBQ0osQ0FDYixFQUNObkMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbVcsVUFBQSxDQUFBZ0Isc0JBQXNCLE9BQUcsRUFDMUIvWixNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUNvVyxNQUFBLENBQUFqSCxnQkFBZ0I7Y0FBQ3hOLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2pCLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7O1VDaEVBOztVQUVBeVYsTUFBQSxDQUFBQyxjQUFBLENBQUFuVCxPQUFBO1lBQ0F2RixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXZCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVNLFNBQVU2RCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRWpELE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQWYsUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFdkUsTUFBTThDLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekI7Ozs7O2NBS0EsTUFBTWxELEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ1AsVUFBVSxDQUFDNlQsR0FBRyxDQUFDMkQsR0FBRyxDQUFDeFksUUFBUSxDQUFDd0IsRUFBRSxDQUFDLENBQUN1VCxHQUFHLENBQUNuVixNQUFNLENBQUM7Y0FDN0QsTUFBTUksUUFBUSxDQUFDK1UsR0FBRyxDQUFDblYsTUFBTSxDQUFDO2NBRTFCQyxRQUFRLENBQUM7Z0JBQUVJLE9BQU8sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUM1QkYsS0FBSyxDQUFDb0YsSUFBSSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1xSyxLQUFLLEdBQUc7Y0FBRWpKLFFBQVEsRUFBRSxDQUFDM0csTUFBTSxDQUFDSyxPQUFPO2NBQUU4QixPQUFPLEVBQUVrQjtZQUFNLENBQUU7WUFFNUQsT0FDQ2xFLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLc047WUFBSyxHQUNqQzFQLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2dELElBQUksQ0FDWDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBcEcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUksZ0JBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVtTixnQkFBZ0JBLENBQUM7WUFBRTlMO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUVULE1BQU07Y0FBRUUsS0FBSztjQUFFRSxRQUFRO2NBQUVIO1lBQVEsQ0FBRSxHQUFHLElBQUFaLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBRWhFLE1BQU04QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFNUMsSUFBSTtjQUFFQztZQUFLLENBQUUsS0FBSTtjQUN4Q1QsUUFBUSxDQUFDO2dCQUFFaUssS0FBSyxFQUFFO2tCQUFFLEdBQUdsSyxNQUFNLENBQUNrSyxLQUFLO2tCQUFFLENBQUN6SixJQUFJLEdBQUdDO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUdOLFFBQVEsQ0FBQzhKLEtBQUssQ0FBQ3pKLElBQUksQ0FBQyxJQUFJUCxLQUFLLENBQUNnSyxLQUFLLENBQUN6SixJQUFJLENBQUMsQ0FBQzRJLFdBQVc7WUFDbkUsT0FDQ2xLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0I5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQU9rSixPQUFPLEVBQUM7WUFBRSxHQUFFL0ssS0FBSyxDQUFDZ0ssS0FBSyxDQUFDekosSUFBSSxDQUFDLENBQUMySSxLQUFLLENBQVMsRUFDbkRqSyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBLENBQUN2QyxnQkFBQSxDQUFBMkQsZUFBZTtjQUFDMUMsSUFBSSxFQUFFQSxJQUFJO2NBQUU0QyxNQUFNLEVBQUVBO1lBQU0sR0FDekMzQyxLQUFLLENBQ1csQ0FDYjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdkIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZILEdBQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBaWEsV0FBQSxHQUFBamEsT0FBQTtVQUVBOzs7Ozs7VUFNTSxTQUFVaU4sVUFBVUEsQ0FBQztZQUFFNUwsSUFBSTtZQUFFNkwsUUFBUTtZQUFFbEMsZUFBZSxHQUFHO1VBQUUsQ0FBRTtZQUNsRSxNQUFNO2NBQUVsSyxLQUFLO2NBQUVFO1lBQVEsQ0FBRSxHQUFHLElBQUFmLFFBQUEsQ0FBQWtCLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ1EsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHN0IsTUFBQSxDQUFBMEIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU02RixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUN2RyxRQUFRLENBQUNrWjtZQUFRLENBQUU7WUFDakQsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU12WSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFFN0QsT0FDQzVCLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQTVDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQW1CLFFBQUEsUUFDQzdDLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tGLEdBQUEsQ0FBQW1ILFNBQVM7Y0FBQ3RLLElBQUksRUFBRTVELEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ2lOLEtBQUssQ0FBQ3BOLEtBQUs7Y0FBRUssV0FBVyxFQUFFcEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDaU4sS0FBSyxDQUFDL007WUFBVyxHQUM3Rm5DLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDOUMsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDeEMsV0FBQSxDQUFBcUQsTUFBTTtjQUFBLEdBQUsrRCxRQUFRO2NBQUV4RSxPQUFPLEVBQUVvWCxVQUFVO2NBQUVqWCxPQUFPLEVBQUM7WUFBUyxHQUMxRHBDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ3lNLFdBQVcsQ0FDbEIsRUFDVDdQLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3hDLFdBQUEsQ0FBQXFELE1BQU07Y0FBQ04sT0FBTyxFQUFDLFNBQVM7Y0FBQ1MsUUFBUTtjQUFDWixPQUFPLEVBQUVtSyxRQUFRO2NBQUEsR0FBTTNGO1lBQVEsR0FDaEV6RyxLQUFLLENBQUNxQyxPQUFPLENBQUN3SixNQUFNLENBQ2IsQ0FDSixFQUNONU0sTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNEIsRUFBTyxDQUN2QyxFQUNYbEIsZUFBZSxJQUNmNUIsTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDc1gsV0FBQSxDQUFBbFAscUJBQXFCO2NBQUN6RyxJQUFJLEVBQUVqRCxJQUFJO2NBQUU4QyxPQUFPLEVBQUVnVyxVQUFVO2NBQUVuUCxlQUFlLEVBQUVBO1lBQWUsRUFDeEYsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBakwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUksZ0JBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVU4WixzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFbFosTUFBTTtjQUFFRSxLQUFLO2NBQUVFLFFBQVE7Y0FBRUg7WUFBUSxDQUFFLEdBQUcsSUFBQVosUUFBQSxDQUFBa0IsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTThDLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUU1QyxJQUFJO2NBQUVDO1lBQUssQ0FBRSxLQUFJO2NBQ3hDVCxRQUFRLENBQUM7Z0JBQUVpSyxLQUFLLEVBQUU7a0JBQUUsQ0FBQ3pKLElBQUksR0FBR0M7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDdkMsQ0FBQztZQUVELElBQUksQ0FBQ04sUUFBUSxDQUFDOEosS0FBSyxDQUFDc1AsVUFBVSxDQUFDclksUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUVqRSxNQUFNVCxLQUFLLEdBQUdWLE1BQU0sQ0FBQ2tLLEtBQUssQ0FBQ3VQLFNBQVMsSUFBSXZaLEtBQUssQ0FBQ2dLLEtBQUssQ0FBQ3VQLFNBQVMsQ0FBQ3BRLFdBQVc7WUFDekUsT0FDQ2xLLE1BQUEsQ0FBQTBCLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0I5QyxNQUFBLENBQUEwQixPQUFBLENBQUFrQixhQUFBO2NBQU9rSixPQUFPLEVBQUM7WUFBRSxHQUFFL0ssS0FBSyxDQUFDZ0ssS0FBSyxDQUFDdVAsU0FBUyxDQUFDclEsS0FBSyxDQUFTLEVBQ3ZEakssTUFBQSxDQUFBMEIsT0FBQSxDQUFBa0IsYUFBQSxDQUFDdkMsZ0JBQUEsQ0FBQTJELGVBQWU7Y0FBQzFDLElBQUksRUFBQyxXQUFXO2NBQUM0QyxNQUFNLEVBQUVBO1lBQU0sR0FDOUMzQyxLQUFLLENBQ1csQ0FDYjtVQUVSIn0=