System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.44/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-dev.44/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-dev.44/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32-dev.44/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-dev.44/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.32-dev.44/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev44ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032Dev44ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Dev44CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032Dev44CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Dev44ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032Dev44ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Dev44Config) {
      dependency_14 = _aimpactAilearnApp0032Dev44Config;
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
    }, function (_aimpactAilearnApp0032Dev44ComponentsUiBulletPointsInput) {
      dependency_21 = _aimpactAilearnApp0032Dev44ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0032Dev44ComponentsCoverImageCode) {
      dependency_22 = _aimpactAilearnApp0032Dev44ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_21], ['@aimpact/ailearn-app/components/cover-image.code', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.44/modules/management/activity.code');
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
        hash: 1135356334,
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
            }, !edition && _react.default.createElement(_components.Button, {
              variant: "link",
              ...editAttrs,
              icon: "edit"
            }, texts.actions.edit), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJBcHBJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3NhdmVCdXR0b24iLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIm9uRWRpdCIsImVkaXRBdHRycyIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsInF1ZXN0aW9ucyIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pYyIsIl9pdGVtIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiaW5kZXgiLCJzZXRTaG93QW5zd2VycyIsImNvcnJlY3QiLCJyZW1vdmVJdGVtIiwic2V0VmFsdWUiLCJhbnN3ZXIiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFya0NvcnJlY3QiLCJfY29yZSIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwic2V0VXBkYXRlIiwiY29ycmVjdEFuc3dlciIsImFjdGlvbnNTcGVjcyIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJhZGQiLCJyZXF1aXJlVmFsdWUiLCJzaG93QW5zd2VyRm9ybUluIiwiY2xlYXIiLCJyZWZzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImFkZEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJhcyIsIkFuc3dlcnMiLCJlbXB0eU9wdGlvbnMiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib25BZGQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX2hlYWRlciIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVVksWUFBWUEsQ0FBQztZQUFFWixRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDdEUsTUFBTUMsV0FBVyxH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