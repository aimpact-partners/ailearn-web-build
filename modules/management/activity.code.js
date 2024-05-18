System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-beta.13/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-beta.13/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-beta.13/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32-beta.13/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-beta.13/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.32-beta.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    AudioPlayer: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp0032Beta13ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032Beta13ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Beta13CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032Beta13CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Beta13ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032Beta13ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Beta13Config) {
      dependency_14 = _aimpactAilearnApp0032Beta13Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Beta13ComponentsUiBulletPointsInput) {
      dependency_21 = _aimpactAilearnApp0032Beta13ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0032Beta13ComponentsCoverImageCode) {
      dependency_22 = _aimpactAilearnApp0032Beta13ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_21], ['@aimpact/ailearn-app/components/cover-image.code', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.13/modules/management/activity.code');
      ims = new Map();
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
        hash: 492044030,
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
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 3709085277,
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
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onBack = () => {
              store.editActivity = undefined;
              store.setBreadcrumb();
              _routing.routing.back();
            };
            return _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: onBack
            }, _react.default.createElement(_icons.Icon, {
              icon: "backArrow",
              className: "circle"
            }), _react.default.createElement(_icons2.AppIcon, {
              icon: "module"
            }), _react.default.createElement("span", null, texts.actions.back, " ", texts.activities.module)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 2450520703,
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
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 1558602698,
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
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./components/generation-modal/suggestions-modal
      ***************************************************************/

      ims.set('./components/generation-modal/suggestions-modal', {
        hash: 1573064741,
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
            }));
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
        hash: 2481071899,
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
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, null)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 3826439041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _aiButton = require("../../components/ai-button");
          function ContentTheoryAudio({
            content
          }) {
            const {
              activity,
              values,
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
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
            }, _react.default.createElement(_aiButton.AIButton, {
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
        hash: 3323500811,
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
            const [edition, setEdition] = _react.default.useState(false);
            const toggleEdition = () => setEdition(!edition);
            if (type === 'multiple-choice') return _react.default.createElement(_multipleChoice.MultipleChoiceForm, null);
            globalThis.activity = activity;
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
            const onEdit = event => setEdition(!edition);
            const editAttrs = {
              onClick: onEdit,
              disabled: activity.specs.empty && activity.materials.empty
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, texts.actions.delete))), _react.default.createElement(Form, {
              edition: edition,
              toggleEdition: toggleEdition
            }), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./forms/language
      ********************************/

      ims.set('./forms/language', {
        hash: 802517160,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function LanguageField() {
            const {
              texts,
              store,
              setValues,
              activity
            } = (0, _context.useModuleContext)();
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
            const [language, setLanguage] = _react.default.useState(activity.language);
            const onChange = async event => {
              setLanguage(event.currentTarget.value);
              await activity.set({
                language: event.currentTarget.value
              });
              await store.save();
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: activity.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...disabled
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./forms/materials/manual-material-form
      ******************************************************/

      ims.set('./forms/materials/manual-material-form', {
        hash: 1055788041,
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
              callback: onCancel
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
        hash: 1298703228,
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
          var _components = require("pragmate-ui/components");
          var _emptyMaterial = require("../content-theory/empty-material");
          var _manualMaterialForm = require("./manual-material-form");
          function MaterialPane({
            name
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            const openManualForm = () => setManual(true);
            const toggleManual = () => setManual(!manual);
            (0, _hooks.useBinder)([activity.materials], () => setMaterial(activity.materials[name]));
            if (manual) return _react.default.createElement(_manualMaterialForm.ManualMaterialForm, {
              name: name,
              onCancel: toggleManual
            });
            if (!material) return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: name,
              onManual: toggleManual
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: material
            })), _react.default.createElement("div", {
              className: "mt-30 activity-specs-actions flex-container flex-end material__actions"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              variant: "primary",
              bordered: true
            }, texts.actions.edit)));
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

      /********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/harcoded-questions
      ********************************************************************/

      ims.set('./forms/multiple-choice/body/form/harcoded-questions', {
        hash: 1328673946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARCODED_QUESTIONS = void 0;
          const HARCODED_QUESTIONS = exports.HARCODED_QUESTIONS = [{
            question: '¿Qué es JavaScript?',
            options: ['Un lenguaje de marcado.', 'Un lenguaje de programación.', 'Un sistema operativo.', 'Una base de datos.'],
            correct_answer: 1
          }, {
            question: '¿Dónde se puede ejecutar JavaScript?',
            options: ['En el navegador web.', 'En el servidor.', 'En una aplicación de escritorio.', 'Todas las anteriores.'],
            correct_answer: 3
          }, {
            question: '¿Qué método se utiliza para imprimir mensajes en la consola del navegador?',
            options: ['alert()', 'console.log()', 'document.write()', 'print()'],
            correct_answer: 1
          }, {
            question: '¿Cuál es la forma correcta de declarar una variable en JavaScript?',
            options: ['variable x = 5;', 'var x = 5;', 'v x = 5;', 'int x = 5;'],
            correct_answer: 1
          }, {
            question: '¿Cuál de las siguientes es una estructura de control en JavaScript?',
            options: ['for', 'execute', 'repeat', 'function'],
            correct_answer: 0
          }];
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
        hash: 3239663652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _saveButton = require("../../../../save-button");
          var _questions = require("./questions");
          function ManualForm({
            onCancel
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_questions.DynamicQuestionsForm, null), _react.default.createElement("footer", {
              className: "activity__form__footer"
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

      /*******************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/actions
      *******************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/actions', {
        hash: 723073748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicActions = DynamicActions;
          var _react = require("react");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../../context");
          function DynamicActions() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            let {
              actions
            } = texts.multipleChoice;
            const {
              addItem
            } = (0, _dynamicList.useDynamicListContext)();
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: addItem
            }, actions.addQuestion));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/answers/index
      *************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/answers/index', {
        hash: 3711996813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersForm = DynamicAnswersForm;
          var _react = require("react");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _item = require("./item");
          function DynamicAnswersForm({
            show,
            answers,
            onChange
          }) {
            if (!show) return false;
            return _react.default.createElement(Dynamic.Provider, {
              name: "question-answers",
              className: "answer-questions-form__container",
              value: answers,
              Item: _item.DynamicQuestionAnswerItem,
              onChange: onChange
            }, _react.default.createElement(Dynamic.List, {
              className: "dynamic-form"
            }));
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/answers/item
      ************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/answers/item', {
        hash: 246483373,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionAnswerItem = DynamicQuestionAnswerItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _useInput = require("../hooks/use-input");
          var _context = require("../../../../../../context");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function DynamicQuestionAnswerItem(props) {
            const {
              onKeyDown
            } = (0, _useInput.useInput)(props.index);
            const [, setShowAnswers] = _react.default.useState(false);
            const {
              correct,
              value = ''
            } = props.value;
            const {
              values,
              setValues,
              removeItem
            } = (0, _dynamicList.useDynamicListContext)();
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            const cls = `dynamic__icon selectable${correct ? ' dynamic__icon--correct' : ''}`;
            const onChange = event => props.setValue({
              answer: event.target.value,
              correct: !!correct
            });
            const deleteItem = () => removeItem(props.index);
            const onMarkCorrect = event => {
              const check = (item, index) => {
                return index === props.index ? {
                  ...item,
                  correct: !correct
                } : {
                  ...item,
                  correct: false
                };
              };
              setValues(values.map(check));
            };
            return _react.default.createElement("div", {
              className: "dynamic-field__item dynamic-field__item--answer"
            }, _react.default.createElement("div", {
              className: "drag-icon"
            }, props.index + 1, "."), _react.default.createElement(_form.Input, {
              type: "text",
              value: value,
              onKeyDown: onKeyDown,
              onChange: onChange,
              placeholder: texts.answers.placeholder
            }), _react.default.createElement("section", {
              className: "item__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "circle-check",
              className: cls,
              title: texts.actions.markCorrect,
              onClick: onMarkCorrect
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "drag-bullet-point",
              title: texts.actions.delete,
              onClick: deleteItem
            })));
          }
        }
      });

      /*******************************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/hooks/use-bullet-point-settings
      *******************************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/hooks/use-bullet-point-settings', {
        hash: 2909363956,
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
          var _context = require("../../../../../../context");
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

      /***************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/hooks/use-input
      ***************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/hooks/use-input', {
        hash: 4293506373,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInput = useInput;
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function useInput(index) {
            const {
              addItem,
              refs,
              removeItem,
              items
            } = (0, _dynamicList.useDynamicListContext)();
            const focus = index => {
              globalThis.setTimeout(() => refs.current[index]?.querySelector('input').focus(), 0);
            };
            const onKeyDown = event => {
              const value = event.currentTarget.value.trim();
              if (event.key === 'Tab') {
                //pressing shift + tab
                if (event.shiftKey && index > 0) {
                  if (!value) {
                    removeItem(index);
                  }
                  focus(index - 1);
                  event.preventDefault();
                  return;
                }
                //has more items
                if (index < items.length - 1) {
                  focus(index + 1);
                  return;
                }
                event.preventDefault();
                if (!value) return;
                addItem();
                globalThis.setTimeout(() => {
                  focus(index + 1);
                }, 0);
              }
              if (event.key === 'Backspace' && !value) {
                event.preventDefault();
                if (event.shiftKey && index > 0) {
                  if (!value) {
                    removeItem(index);
                    focus(index - 2);
                  }
                  event.preventDefault();
                  return;
                }
                if (index > 0) removeItem(index);
              }
            };
            return {
              onKeyDown
            };
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/index
      *****************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/index', {
        hash: 3192292427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionsForm = DynamicQuestionsForm;
          var _react = require("react");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _question = require("./question");
          var _actions = require("./actions");
          var _context = require("../../../../../context");
          function DynamicQuestionsForm() {
            const {
              activity,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const onChange = ({
              currentTarget: target
            }) => {
              const specs = {
                ...values.specs
              };
              const questions = target.value.map(item => ({
                question: item.question,
                options: item.answers?.map(answer => answer.answer),
                correctAnswer: item.correctAnswer
              }));
              // activity.specs.set({ questions });
              editData({
                specs: {
                  ...specs,
                  questions
                },
                updated: true
              });
            };
            return _react.default.createElement(Dynamic.Provider, {
              name: "questions",
              defaultValue: {
                question: ''
              },
              draggable: true,
              Item: _question.DynamicQuestionItem,
              value: values.specs.questions,
              onChange: onChange
            }, _react.default.createElement(Dynamic.List, {
              className: "dynamic-form dynamic-questions-form"
            }), _react.default.createElement(_actions.DynamicActions, null));
          }
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/question
      ********************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/question', {
        hash: 2079087623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionItem = DynamicQuestionItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _useInput = require("./hooks/use-input");
          var _context = require("../../../../../context");
          var _answers = require("./answers");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          //@ts-ignore

          function DynamicQuestionItem(props) {
            const {
              onKeyDown
            } = (0, _useInput.useInput)(props.index);
            const {
              activity
            } = (0, _context.useModuleContext)();
            globalThis.activity = activity;
            const processOptions = () => {
              const correctIndex = props.value.correct_answer;
              return props.value.options.map((option, index) => ({
                value: option,
                correct: index === correctIndex
              }));
            };
            const {
              removeItem
            } = (0, _dynamicList.useDynamicListContext)();
            const addAnswers = () => setShowAnswers(true);
            const onChange = event => props.setValue({
              question: event.target.value,
              answers
            });
            const getAnswer = ({
              currentTarget: {
                value: answers
              }
            }) => {
              const correctAnswerIndex = answers.findIndex(answer => answer.correct);
              const correctAnswer = correctAnswerIndex === -1 ? undefined : correctAnswerIndex;
              const newValue = {
                question: value,
                answers,
                correctAnswer
              };
              props.setValue(newValue);
            };
            let answers = props.value?.options ? processOptions() : [];
            const [showAnswers, setShowAnswers] = _react.default.useState(!!answers.length);
            const value = props.value?.question ?? '';
            const deleteItem = () => removeItem(props.index);
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            const generateAnswers = async () => {
              const promise = new _core.PendingPromise();
              setTimeout(() => {
                promise.resolve();
              }, 1000);
              return promise;
            };
            return _react.default.createElement("section", {
              className: "dynamic-question-item__container"
            }, _react.default.createElement("div", {
              className: "dynamic-field__item dynamic-question-item"
            }, _react.default.createElement("div", {
              className: "drag-icon"
            }, props.index + 1, "."), _react.default.createElement(_form.Input, {
              name: "question",
              value: value ?? '',
              onChange: onChange,
              onKeyDown: onKeyDown
            }), _react.default.createElement("section", {
              className: "item__actions"
            }, _react.default.createElement(_components.Button, {
              title: texts.actions.addAnswer,
              onClick: addAnswers,
              disabled: !props.value
            }, texts.actions.addAnswer), _react.default.createElement(_ui.ProcessIconButton, {
              icon: "aiStars",
              onClick: generateAnswers,
              title: texts.actions.generateAnswers
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "drag-bullet-point",
              onClick: deleteItem,
              title: texts.actions.delete
            }))), _react.default.createElement(_answers.DynamicAnswersForm, {
              show: showAnswers,
              answers: answers,
              onChange: getAnswer
            }));
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
        hash: 2767276708,
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
            data,
            as = 'li',
            draggable = false
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const Answers = ({
              data: answer,
              index
            }) => {
              const icon = index === data.correctAnswer ? 'check' : 'close';
              const cls = `item-list--answer section-container ${icon === 'check' ? 'success-container' : 'incorrect-answer'}`;
              return _react.default.createElement("li", {
                className: cls
              }, _react.default.createElement("span", {
                className: "item-list-icon"
              }, icon === 'check' && _react.default.createElement(_icons.Icon, {
                icon: icon,
                className: "icon-xs"
              })), _react.default.createElement("span", {
                className: "item-list__content"
              }, answer));
            };
            const Control = as;
            return _react.default.createElement(Control, {
              className: "subform__items"
            }, _react.default.createElement("h6", null, draggable ? _react.default.createElement(_icons.Icon, {
              className: "item-list-icon",
              icon: "drag"
            }) : _react.default.createElement(_icons.Icon, {
              className: "item-list-icon",
              icon: "circle-check"
            }), _react.default.createElement("span", {
              className: "item-list__content"
            }, data.question)), data.options.length ? _react.default.createElement(_list.List, {
              items: data.options,
              control: Answers
            }) : _react.default.createElement("div", {
              className: "text-end text-danger"
            }, texts.multipleChoice.emptyOptions));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/multiple-choice/index
      *********************************************/

      ims.set('./forms/multiple-choice/index', {
        hash: 526591733,
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
          var _empty = require("./body/empty");
          var _deleteModal = require("../delete-modal");
          var _components = require("pragmate-ui/components");
          var _list = require("./list");
          function MultipleChoiceForm() {
            const [edition, setEdition] = _react.default.useState(false);
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [redordering, setReorder] = _react.default.useState(false);
            const toggleEdition = () => setEdition(!edition);
            const toggleReorder = () => setReorder(!redordering);
            const onBinder = () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            };
            (0, _hooks.useBinder)([activity.specs], onBinder, 'specs.generated');
            if (edition) return _react.default.createElement(_manual.ManualForm, {
              onCancel: toggleEdition
            });
            if (!values.specs?.questions?.length) return _react.default.createElement(_empty.EmptyActivity, {
              openManual: toggleEdition
            });
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const onEdit = event => setEdition(!edition);
            const onReorder = event => setReorder(!redordering);
            const editAttrs = {
              onClick: onEdit,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const reorderAttrs = {
              onClick: onReorder,
              disabled: activity.specs.empty && activity.materials.empty
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, !edition && _react.default.createElement(_components.Button, {
              variant: "link",
              ...editAttrs,
              icon: "edit"
            }, texts.actions.edit), _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, texts.actions.order), _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, texts.actions.delete))), edition ? _react.default.createElement(_manual.ManualForm, {
              onCancel: toggleEdition
            }) : _react.default.createElement(_list.MultipleChoiceList, {
              reordering: redordering,
              toggle: toggleReorder
            })), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/multiple-choice/list
      ********************************************/

      ims.set('./forms/multiple-choice/list', {
        hash: 1102581680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceList = MultipleChoiceList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _questionItemList = require("./body/question-item-list");
          var _context = require("../../context");
          var _framerMotion = require("framer-motion");
          var _saveButton = require("../../save-button");
          function MultipleChoiceList({
            reordering,
            toggle
          }) {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [order, setOrder] = _react.default.useState(values.specs.questions);
            const onReorder = values => {
              setOrder(values);
              const specs = {
                ...values.specs
              };
              specs.questions = [...order];
              const output = {
                specs,
                updated: true
              };
              editData(output);
            };
            if (reordering) {
              const callback = async () => {
                toggle();
              };
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.Reorder.Group, {
                values: order,
                onReorder: onReorder,
                className: "activity-list"
              }, order.map(question => {
                return _react.default.createElement(_framerMotion.Reorder.Item, {
                  key: question.question,
                  value: question
                }, _react.default.createElement(_questionItemList.QuestionItemList, {
                  data: question,
                  as: "div",
                  draggable: true
                }));
              })), _react.default.createElement("section", {
                className: "section-actions__container actions-end"
              }, _react.default.createElement(_saveButton.SaveButton, null)));
            }
            return _react.default.createElement(_list.List, {
              className: "activity-list",
              items: values.specs.questions,
              specs: {},
              control: _questionItemList.QuestionItemList
            });
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
        hash: 1813646956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _context = require("../../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function RelatedActivityField() {
            const {
              store,
              texts: {
                multipleChoice: texts
              },
              values,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const filter = item => item.type === 'content-theory';
            const map = item => ({
              value: item.id,
              label: item.title
            });
            const options = store.model.activities.items.filter(filter).map(map);
            let defaultValue = {
              value: '',
              label: texts.related.independent
            };
            let related = undefined;
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
            if (activity.specs.related !== undefined) {
              const selected = store.model.activities.items[activity.specs.related];
              related = selected?.id;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
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
        hash: 294826699,
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
              className: "main__control",
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
        hash: 3932757455,
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
              className: "section-actions__container actions-end"
            }, onCancel && _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "link",
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
        hash: 3546911856,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity__form"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.specs.task,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.specs.assessment,
              placeholder: texts.specs.assessment.placeholder,
              name: "assessment"
            }), _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "activity__form__footer"
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
        hash: 1999462194,
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
              className: "activity-list__container"
            }, editCriteria ? _react.default.createElement(_criteriaForm.SpokenCriteriaForm, {
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
        hash: 2789271581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              editData
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState(activity.picture ? `${activity.picture}?size=sm` : undefined);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const onSave = async event => {
              const data = {
                title: event.target.value
              };
              editData(data);
              await activity.save(data);
            };
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture(`${activity.picture}?size=sm&${Date.now()}`), 'image.generated');
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              entity: "activity",
              picture: picture,
              onGenerate: onGenerate
            }), _react.default.createElement("div", {
              className: "header__title-container"
            }, _react.default.createElement(_ui.ContentEditable, {
              className: "inline-control",
              name: "title",
              as: "h3",
              onSave: onSave
            }, activity.title ?? texts.form.title)), _react.default.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: activity.type
            })), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 219443999,
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
          var _specs = require("./specs");
          var _forms = require("./forms");
          var _header = require("./header");
          var _objective = require("./specs/objective");
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
            globalThis.activity = activity;
            /**
             * Updates the values with the new data only for the ui behavior
             * @param data
             */
            const editData = data => {
              const finalData = {
                ...values,
                ...data
              };
              setValues({
                ...finalData
              });
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_specs.GeneralActivityFields, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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
        hash: 2983396089,
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
              console.log(400, values);
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
        hash: 346123248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, texts.specs[name].label), _react.default.createElement(_ui.ContentEditable, {
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

      /*****************************
      INTERNAL MODULE: ./specs/index
      *****************************/

      ims.set('./specs/index', {
        hash: 2404221289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralActivityFields = GeneralActivityFields;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _language = require("../forms/language");
          /**
           * The ActivityObjectiveSpecs component is used to display the objective of the activity.
           * The description of the activity is also displayed, this is not a specs property, but uses the
           * same style and has the same behavior as the specs properties.
           *
           * @returns
           */
          function GeneralActivityFields() {
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
              editData({
                [name]: value
              });
              await activity.set({
                [name]: value
              });
              await store.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement(_language.LanguageField, null)), _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, " ", texts.activities.description), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, activity.description)));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/objective
      *********************************/

      ims.set('./specs/objective', {
        hash: 563243364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ActivityObjectiveSpecs() {
            const {
              values,
              texts,
              activity,
              editData,
              store
            } = (0, _context.useModuleContext)();
            if (!activity.specs.properties.includes('objective')) return null;
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              const data = {
                specs: {
                  ...activity.specs,
                  [name]: value
                }
              };
              editData(data);
              await activity.set(data);
              await store.save();
            };
            const value = values.specs.objective ?? texts.specs.objective.placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.specs.objective.label), _react.default.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, value));
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
        "im": "./header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
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
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./header').ActivityHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJBcHBJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3NhdmVCdXR0b24iLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIm9uRWRpdCIsImVkaXRBdHRycyIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsInF1ZXN0aW9ucyIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pYyIsIl9pdGVtIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiaW5kZXgiLCJzZXRTaG93QW5zd2VycyIsImNvcnJlY3QiLCJyZW1vdmVJdGVtIiwic2V0VmFsdWUiLCJhbnN3ZXIiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFya0NvcnJlY3QiLCJfY29yZSIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwic2V0VXBkYXRlIiwiY29ycmVjdEFuc3dlciIsImFjdGlvbnNTcGVjcyIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJhZGQiLCJyZXF1aXJlVmFsdWUiLCJzaG93QW5zd2VyRm9ybUluIiwiY2xlYXIiLCJyZWZzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImFkZEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJhcyIsIkFuc3dlcnMiLCJlbXB0eU9wdGlvbnMiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib25BZGQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX2hlYWRlciIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVVksWUFBWUEsQ0FBQztZQUFFWixRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDdEUsTUFBTUMsV0FBVyxH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QUFHO2NBQUNHLE1BQU0sRUFBRThZO1lBQVksR0FDbkV2YSxRQUFRLENBQUNhLFdBQVcsQ0FDSixDQUNiLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQXhDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXVGLEdBQUEsR0FBQXZGLE9BQUE7VUFFTSxTQUFVMGIsc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRWphLE1BQU07Y0FBRUcsS0FBSztjQUFFRixRQUFRO2NBQUVpRSxRQUFRO2NBQUVoRTtZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZFLElBQUksQ0FBQ0osUUFBUSxDQUFDb0csS0FBSyxDQUFDb1UsVUFBVSxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBRWpFLE1BQU1oWixNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFZ0QsYUFBYSxFQUFFO2dCQUFFcEQsSUFBSTtnQkFBRTZCO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTXdCLElBQUksR0FBRztnQkFBRTBCLEtBQUssRUFBRTtrQkFBRSxHQUFHcEcsUUFBUSxDQUFDb0csS0FBSztrQkFBRSxDQUFDL0UsSUFBSSxHQUFHNkI7Z0JBQUs7Y0FBRSxDQUFFO2NBQzVEZSxRQUFRLENBQUNTLElBQUksQ0FBQztjQUNkLE1BQU0xRSxRQUFRLENBQUNvUCxHQUFHLENBQUMxSyxJQUFJLENBQUM7Y0FDeEIsTUFBTXpFLEtBQUssQ0FBQytDLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTUUsS0FBSyxHQUFHbkQsTUFBTSxDQUFDcUcsS0FBSyxDQUFDc1UsU0FBUyxJQUFJeGEsS0FBSyxDQUFDa0csS0FBSyxDQUFDc1UsU0FBUyxDQUFDeFYsV0FBVztZQUV6RSxPQUNDN0csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUFhLEdBQzNCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFlLEtBQUssQ0FBQ2tHLEtBQUssQ0FBQ3NVLFNBQVMsQ0FBQzFaLEtBQUssQ0FBUyxFQUM1QzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF6QyxlQUFlO2NBQUNDLElBQUksRUFBQyxXQUFXO2NBQUNJLE1BQU0sRUFBRUE7WUFBTSxHQUM5Q3lCLEtBQUssQ0FDVyxDQUNiO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=