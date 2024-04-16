System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui/bullet-points-input", "pragmate-ui@0.1.1/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_10 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_11 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_14 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Tabs) {
      dependency_15 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_16 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032ComponentsUiBulletPointsInput) {
      dependency_17 = _aimpactAilearnApp0032ComponentsUiBulletPointsInput;
    }, function (_pragmateUi011Chips) {
      dependency_18 = _pragmateUi011Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_20 = _aimpactAilearnApp0032ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/form/react-select', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_17], ['pragmate-ui/chips', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['@aimpact/ailearn-app/components/cover-image.code', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/management/activity.code');
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
        hash: 3400178553,
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
        hash: 2382215128,
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
        hash: 1991971262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _objective = require("./specs/objective");
          var _forms = require("./forms");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /* bundle */
          function ModuleActivityForm({
            breadcrumb,
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
            //TODO: remove this line
            globalThis.activity = activity;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZW50RWRpdGFibGUiLCJfY2FuY2VsTW9kYWwiLCJfaWNvbnMiLCJfYWN0aXZpdHlNb2RhbCIsIl9pY29uczIiLCJfc2F2ZUJ1dHRvbiIsIl9yb3V0aW5nIiwiQWN0aXZpdHlIZWFkZXIiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInRleHRzIiwic3RvcmUiLCJhY3Rpdml0eSIsInVwZGF0ZWQiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2F2ZUVkaXRhYmxlIiwibmFtZSIsInZhbHVlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJ0aXRsZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiYWN0aXZpdGllcyIsImZvcm0iLCJkZXNjcmlwdGlvbiIsIm9uQ2xvc2VNb2RhbCIsIm9uQmFjayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtb2RlbCIsImlkIiwiZWRpdEFjdGl2aXR5Iiwib25Db25maXJtIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiYmFjayIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJib3JkZXJlZCIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGUiLCJTYXZlQnV0dG9uIiwiQ292ZXJJbWFnZSIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwib25TYXZlIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIm9uQ2xvc2UiLCJfbW9kYWwiLCJzaG93IiwiQ29uZmlybU1vZGFsIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0Iiwib25DYW5jZWwiLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udHJvbCIsImNoaWxkcmVuIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2xzIiwiY29udHJvbENscyIsInJlZiIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJfZm9ybSIsIl91aSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGEiLCJNb2RhbCIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJBSUJ1dHRvbiIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nUXVlc3Rpb25zIiwiQnJlYWRDcnVtYkhlYWRlciIsIkljb24iLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJzZXROb3RlcyIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3VnZ2VzdGlvblNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIklucHV0Iiwicm9sZSIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9wZW5NYW51YWxGb3JtIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpdGVtIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJjYWxsYmFjayIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsInNldCIsIm1hcCIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiaXRlbXNUeXBlIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50Iiwic2VsZWN0ZWQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiUGFnZUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiZ2VuZXJhdGVQaWN0dXJlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiX2Zvcm1zIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93Iiwib2JqZWN0aXZlIiwicHJvcGVydGllcyJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS1oZWFkZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZW1wdHkudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvdXNlLWJ1bGxldC1wb2ludC1zZXR0aW5ncy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE1BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLGNBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE9BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFdBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFFBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUMsS0FBSztjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUMsT0FBTztjQUFFQztZQUFTLENBQUUsR0FBRyxJQUFBaEIs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