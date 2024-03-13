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
        hash: 1697476109,
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
        hash: 643490670,
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
        hash: 1562222694,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfaWNvbnMiLCJfYWN0aXZpdHlNb2RhbCIsIl9pY29uczIiLCJfc2F2ZUJ1dHRvbiIsIl9yb3V0aW5nIiwiQWN0aXZpdHlIZWFkZXIiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInRleHRzIiwic3RvcmUiLCJhY3Rpdml0eSIsInVwZGF0ZWQiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2F2ZUVkaXRhYmxlIiwibmFtZSIsInZhbHVlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJ0aXRsZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiYWN0aXZpdGllcyIsImZvcm0iLCJkZXNjcmlwdGlvbiIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtb2RlbCIsImlkIiwiZWRpdEFjdGl2aXR5Iiwib25Db25maXJtIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiYmFjayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJib3JkZXJlZCIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGUiLCJTYXZlQnV0dG9uIiwiQ292ZXJJbWFnZSIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwib25TYXZlIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIm9uQ2xvc2UiLCJfbW9kYWwiLCJzaG93IiwiQ29uZmlybU1vZGFsIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udHJvbCIsImNoaWxkcmVuIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2xzIiwiY29udHJvbENscyIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJfZm9ybSIsIl91aSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGEiLCJNb2RhbCIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJBSUJ1dHRvbiIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nUXVlc3Rpb25zIiwiQnJlYWRDcnVtYkhlYWRlciIsIkljb24iLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsInNldE5vdGVzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpdGVtIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsIkRlYmF0ZUZvcm0iLCJzdWJqZWN0IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZGVsZXRlTW9kYWwiLCJBY3Rpdml0eUJhc2VGb3JtIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiZGVsZXRlIiwiY2FsbGJhY2siLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsInRvZ2dsZU1hbnVhbCIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsInNldCIsIm1hcCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJnZW5lcmF0ZVBpY3R1cmUiLCJOYXZiYXJIZWFkZXIiLCJwaWN0dXJlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiZmluYWxEYXRhIiwiRXJyb3IiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJvYmplY3RpdmUiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWhlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssTUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sY0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sT0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsV0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxPQUFPO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElBQUFo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