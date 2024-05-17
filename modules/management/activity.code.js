System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-beta.5/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-beta.5/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-beta.5/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32-beta.5/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-beta.5/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.32-beta.5/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Beta5ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032Beta5ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Beta5CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032Beta5CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Beta5ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032Beta5ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Beta5Config) {
      dependency_14 = _aimpactAilearnApp0032Beta5Config;
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
    }, function (_aimpactAilearnApp0032Beta5ComponentsUiBulletPointsInput) {
      dependency_21 = _aimpactAilearnApp0032Beta5ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0032Beta5ComponentsCoverImageCode) {
      dependency_22 = _aimpactAilearnApp0032Beta5ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.5"], ["@aimpact/ailearn-app", "0.0.32-beta.5"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.5/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_21], ['@aimpact/ailearn-app/components/cover-image.code', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.5/modules/management/activity.code');
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
        hash: 3454515959,
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
              className: "internal-breadcrumb"
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
        hash: 4030743845,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJBcHBJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIkZyYWdtZW50IiwiSW5wdXQiLCJyb2xlIiwiYm9yZGVyZWQiLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiX3NhdmVCdXR0b24iLCJTYXZlQnV0dG9uIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIm9uRWRpdCIsImVkaXRBdHRycyIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsInF1ZXN0aW9ucyIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pYyIsIl9pdGVtIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiaW5kZXgiLCJzZXRTaG93QW5zd2VycyIsImNvcnJlY3QiLCJyZW1vdmVJdGVtIiwic2V0VmFsdWUiLCJhbnN3ZXIiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFya0NvcnJlY3QiLCJfY29yZSIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJzZXRPcHRpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRBbnN3ZXJzIiwic2V0VXBkYXRlIiwiY29ycmVjdEFuc3dlciIsImFjdGlvbnNTcGVjcyIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJhZGQiLCJyZXF1aXJlVmFsdWUiLCJzaG93QW5zd2VyRm9ybUluIiwiY2xlYXIiLCJyZWZzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImFkZEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJhcyIsIkFuc3dlcnMiLCJlbXB0eU9wdGlvbnMiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib25BZGQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX2hlYWRlciIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVVksWUFBWUEsQ0FBQztZQUFFWixRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDdEUsTUFBTUMsV0FBVyxH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