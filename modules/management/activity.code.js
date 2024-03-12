System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/form/react-select", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/tabs", "pragmate-ui@0.0.6/empty", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.24/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, AudioPlayer, OptionAnswers, ItemOption, PageHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006Form) {
      dependency_8 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_10 = _pragmateUi006FormReactSelect;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_13 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_14 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Tabs) {
      dependency_15 = _pragmateUi006Tabs;
    }, function (_pragmateUi006Empty) {
      dependency_16 = _pragmateUi006Empty;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_17 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_pragmateUi006Chips) {
      dependency_18 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0024ComponentsCoverImageCode) {
      dependency_20 = _aimpactAilearnApp0024ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/form/react-select', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_17], ['pragmate-ui/chips', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['@aimpact/ailearn-app/components/cover-image.code', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./activity-header
      *********************************/
      ims.set('./activity-header', {
        hash: 3941916366,
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
            }, texts.actions.generate), _react.default.createElement(_saveButton.SaveButton, null)))), _react.default.createElement(CoverImage, null)), _react.default.createElement("div", null, _react.default.createElement(_contentEditable.ContentEditable, {
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
        hash: 2119058650,
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
          /*bundle*/
          function PageHeader({
            breadcrumb
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-module__container  flex-container flex-space-between`;
            const onSave = async event => await activity.save({
              title: event.target.value
            });
            const onGenerate = notes => activity.generatePicture(notes);
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: breadcrumb
            }), _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              picture: activity.picture,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfaWNvbnMiLCJfYWN0aXZpdHlNb2RhbCIsIl9pY29uczIiLCJfc2F2ZUJ1dHRvbiIsIl9yb3V0aW5nIiwiQWN0aXZpdHlIZWFkZXIiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInRleHRzIiwic3RvcmUiLCJhY3Rpdml0eSIsInVwZGF0ZWQiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2F2ZUVkaXRhYmxlIiwibmFtZSIsInZhbHVlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJ0aXRsZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiYWN0aXZpdGllcyIsImZvcm0iLCJkZXNjcmlwdGlvbiIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtb2RlbCIsImlkIiwiZWRpdEFjdGl2aXR5Iiwib25Db25maXJtIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiYmFjayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJib3JkZXJlZCIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGUiLCJTYXZlQnV0dG9uIiwiQ292ZXJJbWFnZSIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwib25TYXZlIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIm9uQ2xvc2UiLCJfbW9kYWwiLCJzaG93IiwiQ29uZmlybU1vZGFsIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udHJvbCIsImNoaWxkcmVuIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2xzIiwiY29udHJvbENscyIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJfZm9ybSIsIl91aSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGEiLCJNb2RhbCIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJBSUJ1dHRvbiIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nUXVlc3Rpb25zIiwiQnJlYWRDcnVtYkhlYWRlciIsIkljb24iLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJJbnB1dCIsInJvbGUiLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJvcGVuTWFudWFsRm9ybSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwibG9nIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiSXRlbSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImlzRGlzYWJsZWQiLCJkZXBlbmRlbmNpZXMiLCJzb21lIiwicHJvcGVydHkiLCJhdHRycyIsIlRhYiIsImtleSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJNYW51YWxEZWJhdGVGb3JtIiwiYnRuTGFiZWwiLCJEZWJhdGVGb3JtIiwic3ViamVjdCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsImNhbGxiYWNrIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInJlbGF0ZWQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwicXVlc3Rpb24iLCJpbmRleCIsInRvZ2dsZUFuc3dlckZvcm0iLCJjbGVhciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwidXBkYXRlIiwib25BZGQiLCJhZGRPcHRpb24iLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJjb3JyZWN0Iiwic2V0Q29ycmVjdCIsInNldE9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsInByZXZlbnREZWZhdWx0Iiwib25EZWxldGUiLCJyZW1vdmVPcHRpb24iLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsIkl0ZW1PcHRpb24iLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsInF1ZXN0aW9ucyIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFuc3dlcnMiLCJ0b2dnbGVNYW51YWwiLCJNYW51YWxGb3JtIiwiX29wdGlvbnNIZWFkZXIiLCJfdXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsInNldEVycm9yIiwic2V0QW5zd2VycyIsImFjdGlvbnNTcGVjcyIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJtYXAiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIkFuc3dlcnMiLCJhbnN3ZXIiLCJlbXB0eU9wdGlvbnMiLCJfY29yZSIsInF1ZXN0aW9uTGFiZWxzIiwiYWRkQW5zd2VyIiwic2V0QWRkQW5zd2VyIiwic2V0VXBkYXRlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVpcmVWYWx1ZSIsIkhlYWRlciIsInNwZWNzRWRpdGlvbiIsInNldFNwZWNzRWRpdGlvbiIsInRvZ2dsZSIsIl9oZWFkZXIiLCJtYW51YWxGb3JtIiwiY2xvc2VNYW51YWwiLCJvbkJpbmRlciIsInJlZmluZUFjdGlvbiIsIml0ZW1zVHlwZSIsImFkZEJ1bGxldFBvaW50IiwiYnVsbGV0UG9pbnQiLCJmaWx0ZXIiLCJpbmRlcGVuZGVudCIsInNlbGVjdGVkIiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiZ2VuZXJhdGVQaWN0dXJlIiwiTmF2YmFySGVhZGVyIiwicGljdHVyZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiaW5zcGlyYXRpb24iLCJvYmplY3RpdmUiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWhlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssTUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sY0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sT0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsV0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxPQUFPO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElB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