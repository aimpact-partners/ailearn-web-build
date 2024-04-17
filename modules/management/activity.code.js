System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui/bullet-points-input", "pragmate-ui@0.1.1/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, OptionAnswers, ItemOption, PageHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
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
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_9 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_12 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011List) {
      dependency_14 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_15 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032ComponentsUiBulletPointsInput) {
      dependency_18 = _aimpactAilearnApp0032ComponentsUiBulletPointsInput;
    }, function (_pragmateUi011Chips) {
      dependency_19 = _pragmateUi011Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_21 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/ailearn-sdk/config', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['@aimpact/ailearn-app/components/cover-image.code', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/management/activity.code');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./activity-header
      *********************************/
      ims.set('./activity-header', {
        hash: 3067517893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _context = require("./context");
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
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
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
            }, texts.actions.generate), _react.default.createElement(_saveButton.SaveButton, null)))), _react.default.createElement(CoverImage, null)), _react.default.createElement("div", null, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, description)), _react.default.createElement(_cancelModal.CancelChangesModal, {
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

      /**************************************
      INTERNAL MODULE: ./components/ai-button
      **************************************/

      ims.set('./components/ai-button', {
        hash: 3669703153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
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

      /************************************************************
      INTERNAL MODULE: ./components/generation-modal/activity-modal
      ************************************************************/

      ims.set('./components/generation-modal/activity-modal', {
        hash: 3328483075,
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
          var _aiButton = require("../ai-button");
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
            }, _react.default.createElement(_aiButton.AIButton, {
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
        hash: 430068369,
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
          var _aiButton = require("../ai-button");
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
            const [notes, setNotes] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                setFetching(true);
                await activity.materials.generate(type, notes);
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
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
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
        hash: 1727343991,
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
          var _aiButton = require("../ai-button");
          var _context = require("../../context");
          function SpecsSuggestionsModal({
            onClose,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                setFetching(true);
                await activity.specs.generate(notes, {
                  ...suggestionSpecs
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
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
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
        hash: 2756043493,
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
          var _aiButton = require("../ai-button");
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
                await activity.specs.generate(values.observations);
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
            }, _react.default.createElement(_aiButton.AIButton, {
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
        hash: 1403361296,
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
        hash: 3634568172,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../../components/ai-button");
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
            }, texts.actions.manual), _react.default.createElement(_aiButton.AIButton, {
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
        hash: 1007984020,
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
        hash: 577303246,
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
                updated: true,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.specs.subject,
              label: texts.specs.subject.label,
              placeholder: texts.specs.subject.placeholder,
              name: "subject"
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 702768284,
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
            const toggleManual = () => setManual(!manual);
            if (manual) return _react.default.createElement(_form.ManualDebateForm, {
              onCancel: toggleManual
            });
            if (!values.specs.subject) return _react.default.createElement(_empty.EmptySpecs, {
              name: "debate",
              onManual: toggleManual
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
        hash: 4040925672,
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
        hash: 1615908993,
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
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onClickCancel
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 322178034,
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
              specs: {
                clear
              }
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const {
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => setValue(event.currentTarget.value);
            const update = () => editData({
              specs: activity.specs.getData(),
              updated: true
            });
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
        hash: 3454183772,
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
        hash: 4017858604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _aiButton = require("../../components/ai-button");
          var _context = require("../../context");
          function BulletPointsHeader({
            refineAction = true
          }) {
            const {
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
            }, texts.bulletPoint.add), refineAction && _react.default.createElement(_aiButton.AIButton, {
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
        hash: 2638025758,
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
            const toggleManual = () => setManual(!manualForm);
            if (manualForm) return _react.default.createElement(_form.SpokenManualForm, {
              onCancel: toggleManual
            });
            if (!values.specs.criteria || !values.specs.task || !values.specs.assessment) {
              /**
               * Empty specs
               */
              return _react.default.createElement(_empty.EmptySpecs, {
                name: "spoken",
                onManual: toggleManual
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
        hash: 3558394814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function PageHeader({}) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState(activity.picture);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-module__container  flex-container flex-space-between`;
            const onSave = async event => await activity.save({
              title: event.target.value
            });
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture(activity.picture), 'image.generated');
            return _react.default.createElement("section", null, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              picture: picture,
              onGenerate: onGenerate
            }), _react.default.createElement("div", {
              className: "header__title-container"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
              onSave: onSave
            }, activity.title)))), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 1131026524,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _objective = require("./specs/objective");
          var _forms = require("./forms");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
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
            if (!itemsType) throw new Error(`the activity type ${type} is not supported`);
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
                ensureCredits: _coinsLayout.LayoutBroker.ensureCredits,
                itemsType
              }
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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
        hash: 243964913,
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
          var _aiButton = require("../components/ai-button");
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
            }, texts.actions.manual), _react.default.createElement(_aiButton.AIButton, {
              ...disabled,
              onClick: toggleShow,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
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
        hash: 262534360,
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
                  ...activity.specs,
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
        "im": "./components/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./components/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
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
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./components/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./components/ai-button').AIIconButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfaWNvbnMiLCJfYWN0aXZpdHlNb2RhbCIsIl9pY29uczIiLCJfc2F2ZUJ1dHRvbiIsIl9yb3V0aW5nIiwiQWN0aXZpdHlIZWFkZXIiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInRleHRzIiwic3RvcmUiLCJhY3Rpdml0eSIsInVwZGF0ZWQiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2F2ZUVkaXRhYmxlIiwibmFtZSIsInZhbHVlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJhY3Rpdml0aWVzIiwiZm9ybSIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtb2RlbCIsImlkIiwiZWRpdEFjdGl2aXR5IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiYmFjayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJib3JkZXJlZCIsImdlbmVyYXRlIiwiU2F2ZUJ1dHRvbiIsIkNvdmVySW1hZ2UiLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsIm9uU2F2ZSIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIl9jb2luc0xheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkFJSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udHJvbCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0ZXh0Q29udGVudCIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwic2F2ZSIsImV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImNvbnRyb2xDbHMiLCJyZWYiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJleHBvcnRzIiwiX2Zvcm0iLCJfdWkiLCJfYWlCdXR0b24iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwiTW9kYWwiLCJGb3JtIiwicmVmaW5lIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdRdWVzdGlvbnMiLCJCcmVhZENydW1iSGVhZGVyIiwiSWNvbiIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJ0YXJnZXQiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiX2hvb2tzIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJ1c2VCaW5kZXIiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib3Blbk1hbnVhbEZvcm0iLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50IiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiY2xlYXIiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiYWRkIiwiX2l0ZW0iLCJPcHRpb25BbnN3ZXJzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJzZXRPcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsInNldCIsIm1hcCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsIml0ZW1zVHlwZSIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiUGFnZUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiZ2VuZXJhdGVQaWN0dXJlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiZmluYWxEYXRhIiwiRXJyb3IiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJvYmplY3RpdmUiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWhlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZW1wdHkudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvdXNlLWJ1bGxldC1wb2ludC1zZXR0aW5ncy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE1BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLGNBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE9BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFdBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFFBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLGNB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