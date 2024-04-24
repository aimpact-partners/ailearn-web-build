System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui/bullet-points-input", "pragmate-ui@0.1.1/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, OptionAnswers, ItemOption, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    AudioPlayer: void 0,
    OptionAnswers: void 0,
    ItemOption: void 0,
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/ailearn-sdk/config', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['@aimpact/ailearn-app/components/cover-image.code', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/management/activity.code');
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
        hash: 1026745565,
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
              console.log(99, name, target.value);
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
        hash: 96622090,
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
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState(`${activity.picture}?size=sm`);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-module__container  flex-container flex-space-between`;
            const onSave = async event => await activity.save({
              title: event.target.value
            });
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture(`${activity.picture}?size=sm&${Date.now()}`), 'image.generated');
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
        hash: 2417291643,
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
          var _header = require("./header");
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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
        hash: 1077235258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
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
            }, _react.default.createElement(_language.LanguageField, null)), _react.default.createElement("div", {
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
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./forms/multiple-choice/body/form/choices/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./forms/multiple-choice/body/form/choices/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtb2RlbCIsImlkIiwiTGluayIsIkljb24iLCJiYWNrIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJzZXROb3RlcyIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic3VnZ2VzdGlvblNwZWNzIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIkZyYWdtZW50IiwiSW5wdXQiLCJyb2xlIiwiYm9yZGVyZWQiLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJvcGVuTWFudWFsRm9ybSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwibG9nIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiSXRlbSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXRlbSIsImlzRGlzYWJsZWQiLCJkZXBlbmRlbmNpZXMiLCJzb21lIiwicHJvcGVydHkiLCJhdHRycyIsIlRhYiIsImtleSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJfc2F2ZUJ1dHRvbiIsIlNhdmVCdXR0b24iLCJNYW51YWxEZWJhdGVGb3JtIiwiYnRuTGFiZWwiLCJzdWJqZWN0IiwiY2FsbGJhY2siLCJEZWJhdGVGb3JtIiwidG9nZ2xlTWFudWFsIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZGVsZXRlTW9kYWwiLCJBY3Rpdml0eUJhc2VGb3JtIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJTcG9rZW5Gb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiZGVsZXRlIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldCIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInJlbGF0ZWQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJBbnN3ZXJGb3JtIiwicXVlc3Rpb24iLCJpbmRleCIsInRvZ2dsZUFuc3dlckZvcm0iLCJjbGVhciIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInNldFZhbHVlIiwidXBkYXRlIiwib25BZGQiLCJhZGRPcHRpb24iLCJhZGQiLCJfaXRlbSIsIk9wdGlvbkFuc3dlcnMiLCJjb3JyZWN0Iiwic2V0Q29ycmVjdCIsInNldE9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsIm1hcmsiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRGVsZXRlIiwicmVtb3ZlT3B0aW9uIiwiQ2hpcCIsInNpemluZyIsIm11bHRpcGxlQ2hvaWNlIiwibGFiZWxzIiwiX2Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwic2hvd0Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybUluIiwiQW5zd2VyRm9ybVZpc2libGUiLCJxdWVzdGlvbnMiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJhbnN3ZXJzIiwiTWFudWFsRm9ybSIsIl9vcHRpb25zSGVhZGVyIiwiX3VzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJzZXRFcnJvciIsInNldEFuc3dlcnMiLCJhY3Rpb25zU3BlY3MiLCJ1c2VCdWxsZXRQb2ludFNldHRpbmdzIiwiaGFuZGxlQ2hhbmdlIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJBbnN3ZXJzIiwiYW5zd2VyIiwiZW1wdHlPcHRpb25zIiwiX2NvcmUiLCJxdWVzdGlvbkxhYmVscyIsImFkZEFuc3dlciIsInNldEFkZEFuc3dlciIsInNldFVwZGF0ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJyZXF1aXJlVmFsdWUiLCJIZWFkZXIiLCJzcGVjc0VkaXRpb24iLCJzZXRTcGVjc0VkaXRpb24iLCJ0b2dnbGUiLCJfaGVhZGVyIiwibWFudWFsRm9ybSIsImNsb3NlTWFudWFsIiwib25CaW5kZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsImJ1bGxldFBvaW50IiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJEYXRlIiwibm93IiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiX2JleW9uZF9jb250ZXh0IiwiX29iamVjdGl2ZSIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jb250ZW50RWRpdGFibGUiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIl9sYW5ndWFnZSIsInNhdmVFZGl0YWJsZSIsIm9iamVjdGl2ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9BdWRpb1BsYXllci50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9sYW5ndWFnZS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZW1wdHkudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvdXNlLWJ1bGxldC1wb2ludC1zZXR0aW5ncy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVVksWUFBWUEsQ0FBQztZQUFFWixRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDdEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixPQUFBLENBQUFnQixVQUFVO2NBQUEsR0FBS1gsS0FBSztjQUFFTyxJQUFJLEVBQUVkLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPO2NBQUVWLE9BQU8sRUFBRUU7WUFBVyxHQUM5REgsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFjLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNNLFNBQVVzQixrQkFBa0JBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUU7WUFDbkQsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUMsS0FBSztjQUFFQyxLQUFLO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElBQUFSLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDeEUsSUFBSSxDQUFDUCxJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLE1BQU1RLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCRixTQUFTLEVBQUU7Y0FDWEYsS0FBSyxDQUFDSyxZQUFZLEdBQUdDLFNBQVM7Y0FDOUJULE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDekIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQ1pYLElBQUk7Y0FDSlksS0FBSyxFQUFFUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRixLQUFLO2NBQy9CRyxJQUFJLEVBQUVWLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxNQUFNLENBQUNFLFdBQVc7Y0FDcENmLE9BQU8sRUFBRUEsT0FBTztjQUNoQmdCLFFBQVEsRUFBRWhCLE9BQU87Y0FDakJpQixVQUFVLEVBQUU7Z0JBQUVDLEtBQUssRUFBRWQsS0FBSyxDQUFDZSxPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUM1Q0MsU0FBUyxFQUFFO2dCQUFFSCxLQUFLLEVBQUVkLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTjtjQUFNLENBQUU7Y0FDMUNOLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQWhDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVVPLE1BQU04QyxlQUFlLEdBQXFCQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsUUFBUSxFQUFFQyxPQUFPLEdBQUcsS0FBSztZQUFFQyxTQUFTO1lBQUU1QyxRQUFRO1lBQUU2QztVQUFNLENBQUUsS0FBSTtZQUNySCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQXRELE1BQUEsQ0FBQXVELFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDbkQsTUFBTUMsVUFBVSxHQUFHLElBQUF4RCxNQUFBLENBQUF5RCxNQUFNLEVBQWlCLElBQUksQ0FBQztZQUUvQyxJQUFBekQsTUFBQSxDQUFBMEQsU0FBUyxFQUFDLE1BQUs7Y0FDZCxJQUFJLE9BQU9uRCxRQUFRLEtBQUssUUFBUSxJQUFJaUQsVUFBVSxDQUFDRyxPQUFPLEVBQUU7Z0JBQ3ZESCxVQUFVLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHckQsUUFBUTs7WUFFM0MsQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTXNELFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCUCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO2NBRTFCUyxVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNQyxFQUFFLEdBQUdQLFVBQVUsQ0FBQ0csT0FBTztnQkFDN0IsSUFBSUksRUFBRSxFQUFFO2tCQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7a0JBQ3BDLE1BQU1DLEdBQUcsR0FBR0MsVUFBVSxDQUFDQyxZQUFZLEVBQUU7a0JBQ3JDTCxLQUFLLENBQUNNLGtCQUFrQixDQUFDUCxFQUFFLENBQUM7a0JBQzVCQyxLQUFLLENBQUNPLFFBQVEsQ0FBQyxLQUFLLENBQUM7a0JBQ3JCSixHQUFHLEVBQUVLLGVBQWUsRUFBRTtrQkFDdEJMLEdBQUcsRUFBRU0sUUFBUSxDQUFDVCxLQUFLLENBQUM7a0JBQ3BCRCxFQUFFLENBQUNXLEtBQUssRUFBRTs7Y0FFWixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQUVELE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDMUIsSUFBSTtnQkFDSCxNQUFNeEIsTUFBTSxDQUFDO2tCQUFFSixJQUFJO2tCQUFFNkIsS0FBSyxFQUFFckIsVUFBVSxDQUFDRyxPQUFPLEVBQUVDO2dCQUFXLENBQUUsQ0FBQztnQkFDOUROLGFBQWEsQ0FBQyxLQUFLLENBQUM7ZUFDcEIsQ0FBQyxPQUFPd0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsTUFBTUcsR0FBRyxHQUFHLHVCQUF1QjlCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsTUFBTW5DLElBQUksR0FBR3FDLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6QyxNQUFNNkIsVUFBVSxHQUFHN0IsVUFBVSxHQUFHLHVCQUF1QixHQUFHLEVBQUU7WUFDNUQsTUFBTTdDLE9BQU8sR0FBRzZDLFVBQVUsR0FBR3NCLElBQUksR0FBR2QsVUFBVTtZQUM5QyxPQUNDN0QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBRThCO1lBQUcsR0FDbEJqRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0MsT0FBTztjQUNQaUMsR0FBRyxFQUFFM0IsVUFBVTtjQUNmTCxTQUFTLEVBQUUrQixVQUFVO2NBQ3JCRSxlQUFlLEVBQUUvQixVQUFVO2NBQzNCZ0MsOEJBQThCLEVBQUU7WUFBSSxFQUNuQyxFQUNGckYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBa0IsVUFBVTtjQUFDSixJQUFJLEVBQUVBLElBQUk7Y0FBRVIsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDdkM7VUFFUixDQUFDO1VBQUM4RSxPQUFBLENBQUF2QyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURGLElBQUEvQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBRUEsSUFBQXVGLEdBQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBd0YsU0FBQSxHQUFBeEYsT0FBQTtVQUVBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBRU0sU0FBVXlGLHdCQUF3QkEsQ0FBQztZQUFFbEUsSUFBSTtZQUFFbUUsSUFBSTtZQUFFbEU7VUFBTyxDQUFFO1lBQy9ELE1BQU07Y0FBRUksS0FBSztjQUFFRixRQUFRO2NBQUVpRTtZQUFRLENBQUUsR0FBRyxJQUFBdEUsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNLENBQUM4RCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHOUYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzdCLE1BQU0sRUFBRXFFLFNBQVMsQ0FBQyxHQUFHL0YsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM7Y0FDMUN5QyxZQUFZLEVBQUUsRUFBRTtjQUNoQkMsV0FBVyxFQUFFLEtBQUs7Y0FDbEJOO2FBQ0EsQ0FBQztZQUVGLElBQUksQ0FBQ25FLElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTTBFLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV2QixLQUFLLElBQUc7Z0JBQ2pCbUIsU0FBUyxDQUFDO2tCQUNULEdBQUdyRSxNQUFNO2tCQUNULENBQUNrRCxLQUFLLENBQUN3QixhQUFhLENBQUNwRCxJQUFJLEdBQUc0QixLQUFLLENBQUN3QixhQUFhLENBQUN2QjtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRHJFLE9BQU8sRUFBRSxNQUFNb0UsS0FBSyxJQUFHO2dCQUN0QmtCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1PLElBQUksR0FBRyxNQUFNMUUsUUFBUSxDQUFDMkUsUUFBUSxDQUFDWCxJQUFJLEVBQUVqRSxNQUFNLENBQUNzRSxZQUFZLENBQUM7Z0JBQy9ESixRQUFRLENBQUM7a0JBQUUsR0FBR1MsSUFBSTtrQkFBRUUsT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFDckM5RSxPQUFPLEVBQUU7Z0JBQ1RxQyxVQUFVLENBQUMsTUFBTWdDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDM0M7YUFDQTtZQUVELE9BQ0M5RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFtRixLQUFLO2NBQUNoRixJQUFJO2NBQUMyQixTQUFTLEVBQUMsY0FBYztjQUFDMUIsT0FBTyxFQUFFQTtZQUFPLEdBQ3BEekIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQWtCLElBQUksUUFDSnpHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDZCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUM2RSxNQUFNLENBQUN0RSxLQUFLLENBQU0sRUFDN0JwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxlQUFPZSxLQUFLLENBQUM2RSxNQUFNLENBQUNsRSxXQUFXLENBQVEsQ0FDL0IsRUFDVHhDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFvQixRQUFRO2NBQ1JoRSxLQUFLLEVBQUVkLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDakUsS0FBSztjQUNsQ0ssSUFBSSxFQUFDLGNBQWM7Y0FDbkI2QixLQUFLLEVBQUVuRCxNQUFNLENBQUNzRSxZQUFZO2NBQzFCRyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlUsV0FBVyxFQUFFaEYsS0FBSyxDQUFDNkUsTUFBTSxDQUFDRSxRQUFRLENBQUNDO1lBQVcsRUFDN0MsQ0FDSSxFQUVQN0csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUErQixHQUNoRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxTQUFBLENBQUFuRixRQUFRO2NBQUN3RyxPQUFPLEVBQUMsU0FBUztjQUFDdEcsT0FBTyxFQUFFMEYsTUFBTSxDQUFDMUY7WUFBTyxHQUNqRHFCLEtBQUssQ0FBQ2UsT0FBTyxDQUFDMEQsUUFBUSxDQUNiLENBQ0gsRUFDVHRHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF1QixnQkFBZ0I7Y0FBQ2xCLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzdGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF3QixlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXJGLEtBQUssQ0FBQ3NGO1lBQWlCLEVBQUksQ0FDL0MsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBbkgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBbUgsUUFBQSxHQUFBbkgsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVvSCxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFMUYsUUFBUTtjQUFFQyxLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDckQsTUFBTXVGLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CRixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQjVGLEtBQUssQ0FBQzZGLEtBQUssQ0FBQ0MsRUFBRSxFQUFFLENBQUM7Y0FDN0Q5RixLQUFLLENBQUNLLFlBQVksR0FBR0MsU0FBUztZQUMvQixDQUFDO1lBRUQsT0FDQ2xDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBcUIsR0FDbkNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUF3SCxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsV0FBVztjQUFDM0MsT0FBTyxFQUFFOEc7WUFBTSxHQUMxQ3RILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQTBILElBQUk7Y0FBQzVHLElBQUksRUFBQyxXQUFXO2NBQUNtQyxTQUFTLEVBQUM7WUFBUSxFQUFHLEVBQzVDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZUFDRWUsS0FBSyxDQUFDZSxPQUFPLENBQUNpRixJQUFJLEUsT0FBS2hHLEtBQUssQ0FBQ2lHLFVBQVUsQ0FBQ0MsTUFBTSxDQUN6QyxDQUNELEVBQ1AvSCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUF3SCxJQUFJLFFBQ0ozSCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFNcUMsU0FBUyxFQUFDO1lBQWMsR0FBRXRCLEtBQUssQ0FBQ21HLEtBQUssQ0FBQ3JHLFFBQVEsQ0FBQ3NHLFFBQVEsQ0FBQ1AsRUFBRSxDQUFDLENBQVEsQ0FDbkUsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBMUgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUF1RixHQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXdGLFNBQUEsR0FBQXhGLE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVVpSSx5QkFBeUJBLENBQUM7WUFBRXZDLElBQUk7WUFBRWxFO1VBQU8sQ0FBRTtZQUMxRCxNQUFNO2NBQUVJLEtBQUs7Y0FBRUYsUUFBUTtjQUFFaUU7WUFBUSxDQUFFLEdBQUcsSUFBQXRFLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDOEQsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzlGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM0RSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHcEksTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDLE1BQU0yQyxNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkIsS0FBSyxJQUFHO2dCQUNqQndELFFBQVEsQ0FBQ3hELEtBQUssQ0FBQ3dCLGFBQWEsQ0FBQ3ZCLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0RyRSxPQUFPLEVBQUUsTUFBTW9FLEtBQUssSUFBRztnQkFDdEJrQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNbkUsUUFBUSxDQUFDMEcsU0FBUyxDQUFDL0IsUUFBUSxDQUFDWCxJQUFJLEVBQUV3QyxLQUFLLENBQUM7Z0JBQzlDdkMsUUFBUSxDQUFDO2tCQUFFeUMsU0FBUyxFQUFFO29CQUFFLEdBQUcxRyxRQUFRLENBQUMwRztrQkFBUyxDQUFFO2tCQUFFQyxLQUFLLEVBQUU7b0JBQUUsR0FBRzNHLFFBQVEsQ0FBQzJHO2tCQUFLO2dCQUFFLENBQUUsQ0FBQztnQkFDaEY3RyxPQUFPLEVBQUU7Z0JBRVRxQyxVQUFVLENBQUMsTUFBSztrQkFDZmdDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQzlGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQW1GLEtBQUs7Y0FBQ2hGLElBQUk7Y0FBQzJCLFNBQVMsRUFBQyxjQUFjO2NBQUMxQixPQUFPLEVBQUVBO1lBQU8sR0FDcER6QixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBa0IsSUFBSSxRQUNKekcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ3RFLEtBQUssQ0FBTSxFQUM3QnBDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGVBQU9lLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ2xFLFdBQVcsQ0FBUSxDQUMvQixFQUVUeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQW9CLFFBQVE7Y0FDUmhFLEtBQUssRUFBRWQsS0FBSyxDQUFDNkUsTUFBTSxDQUFDRSxRQUFRLENBQUNqRSxLQUFLO2NBQ2xDSyxJQUFJLEVBQUMsT0FBTztjQUNaNkIsS0FBSyxFQUFFc0QsS0FBSztjQUNaaEMsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJVLFdBQVcsRUFBRWhGLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFFUDdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkUsU0FBQSxDQUFBbkYsUUFBUTtjQUFDd0csT0FBTyxFQUFDLFNBQVM7Y0FBQ3RHLE9BQU8sRUFBRTBGLE1BQU0sQ0FBQzFGO1lBQU8sR0FDakRxQixLQUFLLENBQUNlLE9BQU8sQ0FBQzBELFFBQVEsQ0FDYixDQUNILEVBQ1R0RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBdUIsZ0JBQWdCO2NBQUNsQixRQUFRLEVBQUVBO1lBQVEsR0FDbkM3RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBd0IsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVyRixLQUFLLENBQUNzRjtZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQW5ILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsR0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RixTQUFBLEdBQUF4RixPQUFBO1VBRUEsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFFTSxTQUFVc0kscUJBQXFCQSxDQUFDO1lBQUU5RyxPQUFPO1lBQUUrRyxlQUFlLEdBQUc7VUFBRSxDQUFFO1lBQ3RFLE1BQU07Y0FBRTNHLEtBQUs7Y0FBRUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUM4RCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHOUYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzRFLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdwSSxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUMsTUFBTTJDLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV2QixLQUFLLElBQUc7Z0JBQ2pCd0QsUUFBUSxDQUFDeEQsS0FBSyxDQUFDd0IsYUFBYSxDQUFDdkIsS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRHJFLE9BQU8sRUFBRSxNQUFNb0UsS0FBSyxJQUFHO2dCQUN0QmtCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1uRSxRQUFRLENBQUMyRyxLQUFLLENBQUNoQyxRQUFRLENBQUM2QixLQUFLLEVBQUU7a0JBQUUsR0FBR0s7Z0JBQWUsQ0FBRSxDQUFDO2dCQUM1RC9HLE9BQU8sRUFBRTtnQkFDVHFDLFVBQVUsQ0FBQyxNQUFLO2tCQUNmZ0MsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDOUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBbUYsS0FBSztjQUFDaEYsSUFBSTtjQUFDMkIsU0FBUyxFQUFDLGNBQWM7Y0FBQzFCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHpCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFrQixJQUFJLFFBQ0p6RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDNkUsTUFBTSxDQUFDdEUsS0FBSyxDQUFNLEVBQzdCcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZUFBT2UsS0FBSyxDQUFDNkUsTUFBTSxDQUFDbEUsV0FBVyxDQUFRLENBQy9CLEVBRVR4QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBb0IsUUFBUTtjQUNSaEUsS0FBSyxFQUFFZCxLQUFLLENBQUM2RSxNQUFNLENBQUNFLFFBQVEsQ0FBQ2pFLEtBQUs7Y0FDbENLLElBQUksRUFBQyxPQUFPO2NBQ1o2QixLQUFLLEVBQUVzRCxLQUFLO2NBQ1poQyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlUsV0FBVyxFQUFFaEYsS0FBSyxDQUFDNkUsTUFBTSxDQUFDRSxRQUFRLENBQUNDO1lBQVcsRUFDN0MsQ0FDSSxFQUVQN0csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUErQixHQUNoRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxTQUFBLENBQUFuRixRQUFRO2NBQUN3RyxPQUFPLEVBQUMsU0FBUztjQUFDdEcsT0FBTyxFQUFFMEYsTUFBTSxDQUFDMUY7WUFBTyxHQUNqRHFCLEtBQUssQ0FBQ2UsT0FBTyxDQUFDMEQsUUFBUSxDQUNiLENBQ0gsRUFDVHRHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF1QixnQkFBZ0I7Y0FBQ2xCLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzdGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF3QixlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXJGLEtBQUssQ0FBQ3NGO1lBQWlCLEVBQUksQ0FDL0MsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBbkgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUF1RixHQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXdGLFNBQUEsR0FBQXhGLE9BQUE7VUFHQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVV3SSxlQUFlQSxDQUFDO1lBQUU5QyxJQUFJO1lBQUVsRTtVQUFPLENBQUU7WUFDaEQsTUFBTTtjQUFFSSxLQUFLO2NBQUVGO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDOEQsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzlGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM3QixNQUFNLEVBQUVxRSxTQUFTLENBQUMsR0FBRy9GLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDO2NBQzFDeUMsWUFBWSxFQUFFLEVBQUU7Y0FDaEJDLFdBQVcsRUFBRSxLQUFLO2NBQ2xCTjthQUNBLENBQUM7WUFFRixNQUFNTyxNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFdkIsS0FBSyxJQUFHO2dCQUNqQm1CLFNBQVMsQ0FBQztrQkFDVCxHQUFHckUsTUFBTTtrQkFDVCxDQUFDa0QsS0FBSyxDQUFDd0IsYUFBYSxDQUFDcEQsSUFBSSxHQUFHNEIsS0FBSyxDQUFDd0IsYUFBYSxDQUFDdkI7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0RyRSxPQUFPLEVBQUUsTUFBTW9FLEtBQUssSUFBRztnQkFDdEJrQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNbkUsUUFBUSxDQUFDMkcsS0FBSyxDQUFDaEMsUUFBUSxDQUFDNUUsTUFBTSxDQUFDc0UsWUFBWSxDQUFDO2dCQUNsRHZFLE9BQU8sRUFBRTtnQkFFVHFDLFVBQVUsQ0FBQyxNQUFLO2tCQUNmZ0MsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDOUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBbUYsS0FBSztjQUFDaEYsSUFBSTtjQUFDMkIsU0FBUyxFQUFDLGNBQWM7Y0FBQzFCLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHpCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFrQixJQUFJLFFBQ0p6RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDNkUsTUFBTSxDQUFDdEUsS0FBSyxDQUFNLEVBQzdCcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZUFBT2UsS0FBSyxDQUFDNkUsTUFBTSxDQUFDbEUsV0FBVyxDQUFRLENBQy9CLEVBRVR4QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBb0IsUUFBUTtjQUNSaEUsS0FBSyxFQUFFZCxLQUFLLENBQUM2RSxNQUFNLENBQUNFLFFBQVEsQ0FBQ2pFLEtBQUs7Y0FDbENLLElBQUksRUFBQyxjQUFjO2NBQ25CNkIsS0FBSyxFQUFFbkQsTUFBTSxDQUFDc0UsWUFBWTtjQUMxQkcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJVLFdBQVcsRUFBRWhGLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFFUDdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkUsU0FBQSxDQUFBbkYsUUFBUTtjQUFDd0csT0FBTyxFQUFDLFNBQVM7Y0FBQ3RHLE9BQU8sRUFBRTBGLE1BQU0sQ0FBQzFGO1lBQU8sR0FDakRxQixLQUFLLENBQUNlLE9BQU8sQ0FBQzBELFFBQVEsQ0FDYixDQUNILEVBQ1R0RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBdUIsZ0JBQWdCO2NBQUNsQixRQUFRLEVBQUVBO1lBQVEsR0FDbkM3RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBd0IsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVyRixLQUFLLENBQUNzRjtZQUFpQixFQUFJLENBQy9DLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQW5ILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF5SSxZQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDTSxTQUFVMEksY0FBY0EsQ0FBQztZQUFFakgsTUFBTTtZQUFFcUU7VUFBUyxDQUFFO1lBQ25ELE1BQU07Y0FBRXBFLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxJQUFJNkcsWUFBWSxHQUFHO2NBQUUvRCxLQUFLLEVBQUUsRUFBRTtjQUFFbEMsS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUNqRCxNQUFNa0csT0FBTyxHQUFHLEVBQUU7WUFDbEJqSCxLQUFLLENBQUM2RixLQUFLLENBQUNLLFVBQVUsQ0FBQ2dCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDdEIsRUFBRSxLQUFLL0YsUUFBUSxDQUFDK0YsRUFBRSxFQUFFO2NBQzFCLElBQUlzQixDQUFDLENBQUN0QixFQUFFLEtBQUtoRyxNQUFNLENBQUM0RyxLQUFLLENBQUNXLFVBQVUsRUFBRUwsWUFBWSxHQUFHO2dCQUFFL0QsS0FBSyxFQUFFbUUsQ0FBQyxDQUFDdEIsRUFBRTtnQkFBRS9FLEtBQUssRUFBRXFHLENBQUMsQ0FBQzVHO2NBQUssQ0FBRTtjQUNwRnlHLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFckUsS0FBSyxFQUFFbUUsQ0FBQyxDQUFDdEIsRUFBRTtnQkFBRS9FLEtBQUssRUFBRXFHLENBQUMsQ0FBQzVHO2NBQUssQ0FBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGLE1BQU0rRyxZQUFZLEdBQUc5QyxJQUFJLElBQUc7Y0FDM0JOLFNBQVMsQ0FBQ3JFLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFNEcsS0FBSyxFQUFFO2tCQUFFLEdBQUc1RyxNQUFNLENBQUM0RyxLQUFLO2tCQUFFVyxVQUFVLEVBQUU1QyxJQUFJLENBQUMrQyxNQUFNLENBQUN2RTtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7WUFFRCxPQUNDN0UsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VJLE9BQU8sRUFBQyxFQUFFO2NBQUNsRyxTQUFTLEVBQUM7WUFBVyxHLHNDQUV0Q25ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0SCxZQUFBLENBQUFZLFdBQVc7Y0FBQ25ELFFBQVEsRUFBRWdELFlBQVk7Y0FBRVAsWUFBWSxFQUFFQSxZQUFZO2NBQUVDLE9BQU8sRUFBRSxDQUFDRCxZQUFZLEVBQUUsR0FBR0MsT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQTdJLE1BQUEsR0FBQUMsT0FBQTtVQWtCTyxNQUFNc0osYUFBYSxHQUFBakUsT0FBQSxDQUFBaUUsYUFBQSxHQUFHdkosTUFBQSxDQUFBYSxPQUFLLENBQUMySSxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNekgsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTS9CLE1BQUEsQ0FBQWEsT0FBSyxDQUFDNEksVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQ2pFLE9BQUEsQ0FBQXZELGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CdEUsSUFBQS9CLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUdNLFNBQVV5Six1QkFBdUJBLENBQUM7WUFBRWpIO1VBQVEsQ0FBRTtZQUNuRCxNQUFNO2NBQUVaLEtBQUs7Y0FBRUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNO2NBQUVMLE1BQU07Y0FBRWtFO1lBQVEsQ0FBRSxHQUFHLElBQUF0RSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQzRILGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzVKLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNNEMsUUFBUSxHQUFHdkIsS0FBSyxJQUFHO2NBQ3hCLE1BQU13RSxNQUFNLEdBQUd4RSxLQUFLLENBQUN3QixhQUFhO2NBQ2xDLE1BQU1rQyxLQUFLLEdBQUc7Z0JBQUUsR0FBRzVHLE1BQU0sQ0FBQzRHO2NBQUssQ0FBRTtjQUNqQzFDLFFBQVEsQ0FBQztnQkFBRTBDLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNjLE1BQU0sQ0FBQ3BHLElBQUksR0FBR29HLE1BQU0sQ0FBQ3ZFO2dCQUFLLENBQUU7Z0JBQUUwQixPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUVELE1BQU1zRCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJbkksTUFBTSxDQUFDNkUsT0FBTyxFQUFFO2dCQUNuQnFELGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRURuSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTVQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEI0SCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJuSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTXFILGFBQWEsR0FBR0EsQ0FBQSxLQUFNRixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsT0FDQzVKLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBa0osUUFBQSxRQUNDL0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQWtCLElBQUksUUFDSnpHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUF5RSxLQUFLO2NBQ0w3RCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ4RCxLQUFLLEVBQUVkLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQzJCLElBQUksQ0FBQ3RILEtBQUs7Y0FDN0JrRSxXQUFXLEVBQUVoRixLQUFLLENBQUN5RyxLQUFLLENBQUMyQixJQUFJLENBQUNwRCxXQUFXO2NBQ3pDN0QsSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGaEQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUErQixHQUNoRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUVxSixhQUFhO2NBQUUvQyxPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtZQUFBLEdBQ3hEckksS0FBSyxDQUFDZSxPQUFPLENBQUNOLE1BQU0sQ0FDYixDQUNELEVBQ1JxSCxlQUFlLElBQ2YzSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRXFIO1lBQWEsR0FDMUQ5SixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUNzSSxNQUFNLENBQUM3SCxNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUF0QyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFvSyxTQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBRU0sU0FBVXNLLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUU1SSxRQUFRO2NBQUVpRSxRQUFRO2NBQUVsRTtZQUFNLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXpELE1BQU0sQ0FBQ29JLE1BQU0sRUFBRUssU0FBUyxDQUFDLEdBQUd4SyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQStHLE1BQUEsQ0FBQUcsU0FBUyxFQUNSLENBQUM5SSxRQUFRLENBQUMyRyxLQUFLLENBQUMsRUFDaEIsTUFBSztjQUNKLE1BQU1BLEtBQUssR0FBRzNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU8sRUFBRTtjQUN0QzlFLFFBQVEsQ0FBQztnQkFBRTBDO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxpQkFBaUIsQ0FDakI7WUFFRCxJQUFJNkIsTUFBTSxFQUFFO2NBQ1gsT0FBT25LLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFtRSx1QkFBdUI7Z0JBQUNqSCxRQUFRLEVBQUVBLENBQUEsS0FBTStILFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFFckUsSUFBSSxDQUFDOUksTUFBTSxDQUFDNEcsS0FBSyxDQUFDMkIsSUFBSSxFQUFFO2NBQ3ZCLE9BQU9qSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0osTUFBQSxDQUFBTyxVQUFVO2dCQUFDM0gsSUFBSSxFQUFDLGdCQUFnQjtnQkFBQzRILFFBQVEsRUFBRUEsQ0FBQSxLQUFNSixTQUFTLENBQUMsSUFBSTtjQUFDLEVBQUk7O1lBRzdFLE9BQ0N4SyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SixTQUFBLENBQUFRLGdCQUFnQjtjQUFDN0gsSUFBSSxFQUFDO1lBQU0sRUFBRyxDQUM5QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBaEQsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVTZLLFdBQVdBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1RoRyxPQUFPLENBQUNpRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaRCxHQUFHLEdBQUdFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSCxHQUFHLENBQUM7WUFDOUIsTUFBTTVGLEdBQUcsR0FBR25GLE1BQUEsQ0FBQWEsT0FBSyxDQUFDNEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnpELE1BQUEsQ0FBQWEsT0FBSyxDQUFDNkMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTTBGLE1BQU0sR0FBR2pFLEdBQUcsQ0FBQ3hCLE9BQU87Y0FDMUJ5RixNQUFNLENBQUMrQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJL0IsTUFBTSxDQUFDZ0MsUUFBUSxLQUFLQyxRQUFRLEVBQUU7a0JBQ2pDakMsTUFBTSxDQUFDa0MsV0FBVyxHQUFHLEtBQUs7a0JBQzFCbEMsTUFBTSxDQUFDbUMsWUFBWSxHQUFHLE1BQUs7b0JBQzFCbkMsTUFBTSxDQUFDbUMsWUFBWSxHQUFHLElBQUk7b0JBQzFCbkMsTUFBTSxDQUFDa0MsV0FBVyxHQUFHLENBQUM7a0JBQ3ZCLENBQUM7O2NBRUgsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUNQLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0MvSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQWMsR0FDNUJuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFPMEssUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3pMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFpSyxHQUFHLEVBQUVBLEdBQUc7Y0FBRXBGLElBQUksRUFBQyxXQUFXO2NBQUNSLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWhGLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF5TCxPQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFHQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUF1RixHQUFBLEdBQUF2RixPQUFBO1VBR0EsSUFBQTBMLEtBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMkwsT0FBQSxHQUFBM0wsT0FBQTtVQUNNLFNBQVU0TCxrQkFBa0JBLENBQUM7WUFBRTNFO1VBQU8sQ0FBbUM7WUFDOUUsTUFBTTtjQUFFdkYsUUFBUTtjQUFFRCxNQUFNO2NBQUVHO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDb0ksTUFBTSxFQUFFSyxTQUFTLENBQUMsR0FBR3hLLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNdUksY0FBYyxHQUFHQSxDQUFBLEtBQU10QixTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0sQ0FBQzNFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5RixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ3hDLFFBQVEsQ0FBQztZQUMzRSxJQUFBeUUsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQzlJLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENtQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLE1BQU11QixVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0hqRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNbkUsUUFBUSxDQUFDMEcsU0FBUyxDQUFDMkQsYUFBYSxFQUFFO2VBQ3hDLENBQUMsT0FBT2xILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDa0gsR0FBRyxDQUFDbkgsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVGdCLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxJQUFJcUUsTUFBTSxFQUFFO2NBQ1gsT0FBT25LLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0SyxPQUFBLENBQUFRLGtCQUFrQjtnQkFBQ2xKLElBQUksRUFBQyxTQUFTO2dCQUFDUCxRQUFRLEVBQUVBLENBQUEsS0FBTStILFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHL0UsTUFBTTJCLElBQUksR0FBR0EsQ0FBQztjQUFFOUYsSUFBSSxFQUFFVjtZQUFJLENBQUUsS0FBSTtjQUMvQixNQUFNb0YsR0FBRyxHQUFHLEdBQUdhLE9BQUEsQ0FBQS9LLE9BQU0sQ0FBQ3VMLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGVBQWUzSyxRQUFRLENBQUMrRixFQUFFLGNBQWMvQixJQUFJLFFBQVE7Y0FFN0YsT0FDQzNGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFLcUMsU0FBUyxFQUFDO2NBQXdFLEdBQ3RGbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDd0csU0FBUyxDQUFDMUMsSUFBSSxDQUFDLENBQU0sRUFDaEMzRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS3FDLFNBQVMsRUFBQztjQUFjLEdBQzVCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQU8wSyxRQUFRO2dCQUFDQyxPQUFPLEVBQUM7Y0FBVSxHQUNqQ3pMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFRaUssR0FBRyxFQUFFQSxHQUFHO2dCQUFFcEYsSUFBSSxFQUFDO2NBQVcsRUFBRyxFLG1EQUU5QixDQUNILENBQ0Q7WUFFUixDQUFDO1lBRUQsSUFBSWhFLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ2tFLE1BQU0sRUFBRTtjQUM5QixPQUNDdk0sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssS0FBQSxDQUFBYSxJQUFJO2dCQUFDMUQsS0FBSyxFQUFFbkgsUUFBUSxDQUFDMEcsU0FBUyxDQUFDa0UsTUFBTTtnQkFBRUUsT0FBTyxFQUFFTixJQUFJO2dCQUFFTyxTQUFTLEVBQUM7Y0FBSyxFQUFHLENBQ3ZFOztZQUlMLE9BQ0MxTSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUFtSCxTQUFTO2NBQUNwSyxJQUFJLEVBQUVWLEtBQUssQ0FBQ2lHLFVBQVUsQ0FBQzhFLEtBQUssQ0FBQ3hLLEtBQUs7Y0FBRUksV0FBVyxFQUFFWCxLQUFLLENBQUNpRyxVQUFVLENBQUM4RSxLQUFLLENBQUNwSztZQUFXLEdBQzdGeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUE0QixHQUMxQ25ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUV1TCxVQUFVO2NBQUVqRixPQUFPLEVBQUM7WUFBUyxHQUM1Q2pGLEtBQUssQ0FBQ2UsT0FBTyxDQUFDMEQsUUFBUSxDQUNmLENBQ0osRUFFTnRHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF1QixnQkFBZ0I7Y0FBQ2xCLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzdCLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQTFGLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF5TCxPQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNE0sU0FBQSxHQUFBNU0sT0FBQTtVQUNBLElBQUE2TSxjQUFBLEdBQUE3TSxPQUFBO1VBRUEsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFFTSxTQUFVOE0sb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRXBMLFFBQVE7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNvSSxNQUFNLEVBQUVLLFNBQVMsQ0FBQyxHQUFHeEssTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU11SSxjQUFjLEdBQUdBLENBQUEsS0FBTXRCLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTUksUUFBUSxHQUFHQSxDQUFBLEtBQU1KLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBQUYsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQzlJLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENtQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLElBQUlMLE1BQU0sRUFBRTtjQUNYLE9BQU9uSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEssT0FBQSxDQUFBUSxrQkFBa0I7Z0JBQUNsSixJQUFJLEVBQUMsU0FBUztnQkFBQ1AsUUFBUSxFQUFFbUk7Y0FBUSxFQUFJOztZQUdqRSxJQUFJakosUUFBUSxDQUFDMEcsU0FBUyxDQUFDMkUsT0FBTyxFQUFFO2NBQy9CLE9BQ0NoTixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFTcUMsU0FBUyxFQUFDO2NBQW1CLEdBQ3JDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytMLFNBQUEsQ0FBQUksUUFBUTtnQkFBQy9GLE9BQU8sRUFBRXZGLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQzJFO2NBQU8sRUFBSSxDQUN4QyxFQUNWaE4sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQUtxQyxTQUFTLEVBQUM7Y0FBd0UsR0FDdEZuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDUixPQUFPLEVBQUVzTCxjQUFjO2dCQUFFaEYsT0FBTyxFQUFDLFNBQVM7Z0JBQUNvRCxRQUFRO2NBQUEsR0FDckVySSxLQUFLLENBQUNlLE9BQU8sQ0FBQ3NLLElBQUksQ0FDWCxDQUNKLENBQ0o7O1lBR0wsT0FBT2xOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTSxjQUFBLENBQUFLLGFBQWE7Y0FBQ25LLElBQUksRUFBQyxTQUFTO2NBQUM0SCxRQUFRLEVBQUVrQjtZQUFjLEVBQUk7VUFDbEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUE5TCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUYsR0FBQSxHQUFBdkYsT0FBQTtVQUVBLElBQUF3RixTQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUFtTixVQUFBLEdBQUFuTixPQUFBO1VBRU0sU0FBVWtOLGFBQWFBLENBQUM7WUFBRW5LLElBQUk7WUFBRTRIO1VBQVEsQ0FBRTtZQUMvQyxNQUFNO2NBQUVqSixRQUFRO2NBQUVFO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDc0wsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHdE4sTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5FLE1BQU0sQ0FBQ3NDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5RixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ3hDLFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUcwSCxPQUFPLENBQUMsR0FBR3ZOLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDNUIsUUFBUSxDQUFDMEcsU0FBUyxDQUFDckYsSUFBSSxDQUFDLENBQUM7WUFFNUQsTUFBTXdLLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsSUFBQS9DLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM5SSxRQUFRLENBQUMwRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDdkMsV0FBVyxDQUFDbkUsUUFBUSxDQUFDMEcsU0FBUyxDQUFDeEMsUUFBUSxDQUFDO2NBQ3hDMEgsT0FBTyxDQUFDNUwsUUFBUSxDQUFDMEcsU0FBUyxDQUFDckYsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTXlLLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQzlMLFFBQVEsQ0FBQytMO1lBQVcsQ0FBRTtZQUNwRCxPQUNDMU4sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBbUgsU0FBUztjQUNUeEosU0FBUyxFQUFDLGlCQUFpQjtjQUMzQlosSUFBSSxFQUFFVixLQUFLLENBQUNpRyxVQUFVLENBQUM4RSxLQUFLLENBQUN4SyxLQUFLO2NBQ2xDSSxXQUFXLEVBQUVYLEtBQUssQ0FBQ2lHLFVBQVUsQ0FBQzhFLEtBQUssQ0FBQ3BLO1lBQVcsR0FFL0N4QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQTRCLEdBQzFDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUMrRixPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtjQUFDMUosT0FBTyxFQUFFb0s7WUFBUSxHQUNsRC9JLEtBQUssQ0FBQ2UsT0FBTyxDQUFDdUgsTUFBTSxDQUNiLEVBQ1RuSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkUsU0FBQSxDQUFBbkYsUUFBUTtjQUFDRSxPQUFPLEVBQUVnTixXQUFXO2NBQUUxRyxPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUsyRztZQUFRLEdBQzVENUwsS0FBSyxDQUFDZSxPQUFPLENBQUMwRCxRQUFRLENBQ2IsQ0FDTixFQUVOdEcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBFLEdBQUEsQ0FBQXVCLGdCQUFnQjtjQUFDbEIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0IsRUFDWHdILGVBQWUsSUFBSXJOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTSxVQUFBLENBQUFsRix5QkFBeUI7Y0FBQ3ZDLElBQUksRUFBRTNDLElBQUk7Y0FBRXZCLE9BQU8sRUFBRStMO1lBQVcsRUFBSSxDQUNqRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBeE4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUEwTixRQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQTJOLEtBQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBNE4sS0FBQSxHQUFBNU4sT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBR00sU0FBVThOLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUVwTSxRQUFRO2NBQUVFO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxHQUFHK0QsV0FBVyxDQUFDLEdBQUc5RixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ3hDLFFBQVEsQ0FBQztZQUNuRSxNQUFNLEdBQUcwSCxPQUFPLENBQUMsR0FBR3ZOLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDNUIsUUFBUSxDQUFDMEcsU0FBUyxDQUFDMkUsT0FBTyxDQUFDO1lBQzlELE1BQU03RyxRQUFRLEdBQUdBLENBQUEsS0FBSyxDQUFFLENBQUM7WUFDekIsTUFBTTZILElBQUksR0FBRyxFQUFFO1lBRWYsSUFBQTFELE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM5SSxRQUFRLENBQUMwRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDdkMsV0FBVyxDQUFDbkUsUUFBUSxDQUFDMEcsU0FBUyxDQUFDeEMsUUFBUSxDQUFDO2NBQ3hDMEgsT0FBTyxDQUFDO2dCQUFFbEYsU0FBUyxFQUFFMUcsUUFBUSxDQUFDMEcsU0FBUyxDQUFDcUMsT0FBTyxFQUFFO2dCQUFFbkUsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3BFLENBQUMsQ0FBQztZQUVGNUUsUUFBUSxDQUFDMEcsU0FBUyxDQUFDUyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2tGLElBQUksSUFBRztjQUN2QyxNQUFNakwsSUFBSSxHQUFHLE9BQU9pTCxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2pMLElBQUk7Y0FDeEQsTUFBTUwsS0FBSyxHQUFHZCxLQUFLLENBQUN3RyxTQUFTLENBQUNyRixJQUFJLENBQUM7Y0FFbkMsTUFBTWtMLFVBQVUsR0FBRyxDQUFDLE1BQUs7Z0JBQ3hCLElBQUksQ0FBQ0QsSUFBSSxFQUFFRSxZQUFZLEVBQUUsT0FBTyxLQUFLO2dCQUNyQyxJQUFJLE9BQU9GLElBQUksRUFBRUUsWUFBWSxLQUFLLFFBQVEsRUFBRSxPQUFPLENBQUN4TSxRQUFRLENBQUMwRyxTQUFTLENBQUM0RixJQUFJLENBQUNFLFlBQVksQ0FBQztnQkFDekYsT0FBT0YsSUFBSSxDQUFDRSxZQUFZLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxJQUFJLENBQUMxTSxRQUFRLENBQUMwRyxTQUFTLENBQUNnRyxRQUFRLENBQUMsQ0FBQztjQUN6RSxDQUFDLEVBQUMsQ0FBRTtjQUNKLE1BQU1DLEtBQUssR0FBRztnQkFBRWIsUUFBUSxFQUFFUztjQUFVLENBQUU7Y0FFdENGLElBQUksQ0FBQzlFLElBQUksQ0FDUmxKLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM4TSxLQUFBLENBQUFXLEdBQUc7Z0JBQUEsR0FBS0QsS0FBSztnQkFBRUUsR0FBRyxFQUFFLEdBQUc3TSxRQUFRLENBQUMrRixFQUFFLElBQUkxRSxJQUFJO2NBQU0sR0FDL0NMLEtBQUssQ0FDRCxDQUNOO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsT0FDQzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM4TSxLQUFBLENBQUFhLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFLENBQUM7Y0FBRXZMLFNBQVMsRUFBQyxRQUFRO2NBQUNnRCxRQUFRLEVBQUVBO1lBQVEsR0FDOURuRyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOE0sS0FBQSxDQUFBZSxJQUFJLFFBQUVYLElBQUksQ0FBUSxFQUNuQmhPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM4TSxLQUFBLENBQUFnQixLQUFLO2NBQUN6TCxTQUFTLEVBQUM7WUFBRSxHQUNsQm5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM2TSxRQUFBLENBQUFaLG9CQUFvQixPQUFHLEVBQ3hCL00sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytNLEtBQUEsQ0FBQWdCLFlBQVk7Y0FBQzdMLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakNoRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK00sS0FBQSxDQUFBZ0IsWUFBWTtjQUFDN0wsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNoQ2hELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTixNQUFBLENBQUFqQyxrQkFBa0IsT0FBRyxDQUNmLENBQ087VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUExTCxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBNk8sV0FBQSxHQUFBN08sT0FBQTtVQUVNLFNBQVVpTSxrQkFBa0JBLENBQUM7WUFDbENsSixJQUFJO1lBQ0prRSxPQUFPO1lBQ1B6RTtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUVmLE1BQU07Y0FBRWtFLFFBQVE7Y0FBRWpFLFFBQVE7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUM0SCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1SixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTTRDLFFBQVEsR0FBR3ZCLEtBQUssSUFBRztjQUN4QixNQUFNd0UsTUFBTSxHQUFHeEUsS0FBSyxDQUFDd0IsYUFBYTtjQUNsQyxNQUFNaUMsU0FBUyxHQUFHO2dCQUFFLEdBQUczRyxNQUFNLENBQUMyRztjQUFTLENBQUU7Y0FDekN6QyxRQUFRLENBQUM7Z0JBQUV5QyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDckYsSUFBSSxHQUFHb0csTUFBTSxDQUFDdkU7Z0JBQUssQ0FBRTtnQkFBRTBCLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTXNELGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUluSSxNQUFNLENBQUM2RSxPQUFPLEVBQUU7Z0JBQ25CcUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNVCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixNQUFNcUcsU0FBUyxHQUFHO2dCQUFFLEdBQUczRyxNQUFNLENBQUMyRztjQUFTLENBQUU7Y0FDekN6QyxRQUFRLENBQUM7Z0JBQUV5QyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDckYsSUFBSSxHQUFHckIsUUFBUSxDQUFDMEcsU0FBUyxDQUFDckYsSUFBSTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUMzRTRHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNcUgsYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDNUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQW9CLFFBQVE7Y0FDUlIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbkQsSUFBSSxFQUFDLFNBQVM7Y0FDZDZCLEtBQUssRUFBRW5ELE1BQU0sQ0FBQzJHLFNBQVMsR0FBR3JGLElBQUksQ0FBQyxJQUFJLEVBQUU7Y0FDckM2RCxXQUFXLEVBQUVoRixLQUFLLENBQUNzSSxNQUFNLENBQUN2RDtZQUFRLEVBQ2pDLENBQ0csRUFDTjVHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ1AsT0FBTyxFQUFFcUosYUFBYTtjQUFFL0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ29ELFFBQVE7WUFBQSxHQUN4RHJJLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTixNQUFNLENBQ2IsRUFDVHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTyxXQUFBLENBQUFDLFVBQVUsT0FBRyxDQUNOLEVBQ1JwRixlQUFlLElBQ2YzSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRXFIO1lBQWEsR0FDMUQ5SixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUNzSSxNQUFNLENBQUM3SCxNQUFNLENBQU8sQ0FFakMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQTZPLFdBQUEsR0FBQTdPLE9BQUE7VUFFTSxTQUFVK08sZ0JBQWdCQSxDQUFDO1lBQUV2TTtVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFWixLQUFLO2NBQUVGO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTTtjQUFFTCxNQUFNO2NBQUVrRTtZQUFRLENBQUUsR0FBRyxJQUFBdEUsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUMvQyxNQUFNLENBQUM0SCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1SixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTRDLFFBQVEsR0FBR3ZCLEtBQUssSUFBRztjQUN4QixNQUFNd0UsTUFBTSxHQUFHeEUsS0FBSyxDQUFDd0IsYUFBYTtjQUNsQyxNQUFNa0MsS0FBSyxHQUFHO2dCQUFFLEdBQUc1RyxNQUFNLENBQUM0RztjQUFLLENBQUU7Y0FDakMxQyxRQUFRLENBQUM7Z0JBQUVXLE9BQU8sRUFBRSxJQUFJO2dCQUFFK0IsS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsQ0FBQ2MsTUFBTSxDQUFDcEcsSUFBSSxHQUFHb0csTUFBTSxDQUFDdkU7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUNELE1BQU1vSyxRQUFRLEdBQUd2TixNQUFNLENBQUM2RSxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTXNELGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUluSSxNQUFNLENBQUM2RSxPQUFPLEVBQUU7Z0JBQ25CcUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNVCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjRILGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNcUgsYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDNUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBa0IsSUFBSSxRQUNKekcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQW9CLFFBQVE7Y0FDUlIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCdEIsS0FBSyxFQUFFbkQsTUFBTSxDQUFDNEcsS0FBSyxDQUFDNEcsT0FBTztjQUMzQnZNLEtBQUssRUFBRWQsS0FBSyxDQUFDeUcsS0FBSyxDQUFDNEcsT0FBTyxDQUFDdk0sS0FBSztjQUNoQ2tFLFdBQVcsRUFBRWhGLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQzRHLE9BQU8sQ0FBQ3JJLFdBQVc7Y0FDNUM3RCxJQUFJLEVBQUM7WUFBUyxFQUNiLEVBQ0ZoRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRcUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNQLE9BQU8sRUFBRXFKLGFBQWE7Y0FBRS9DLE9BQU8sRUFBQyxTQUFTO2NBQUNvRCxRQUFRO1lBQUEsR0FDeEQrRSxRQUFRLENBQ0QsRUFDVGpQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTyxXQUFBLENBQUFDLFVBQVU7Y0FBQ0ksUUFBUSxFQUFFMU07WUFBUSxFQUFJLENBQzFCLEVBQ1JrSCxlQUFlLElBQ2YzSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRXFIO1lBQWEsR0FDMUQ5SixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUNzSSxNQUFNLENBQUM3SCxNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF0QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFvSyxTQUFBLEdBQUFwSyxPQUFBO1VBRU0sU0FBVW1QLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFek4sUUFBUTtjQUFFaUUsUUFBUTtjQUFFbEU7WUFBTSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN6RCxNQUFNLENBQUNvSSxNQUFNLEVBQUVLLFNBQVMsQ0FBQyxHQUFHeEssTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUErRyxNQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDOUksUUFBUSxDQUFDMkcsS0FBSyxDQUFDLEVBQUUsTUFBTTFDLFFBQVEsQ0FBQ2pFLFFBQVEsQ0FBQytJLE9BQU8sRUFBRSxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFbEYsTUFBTTJFLFlBQVksR0FBR0EsQ0FBQSxLQUFNN0UsU0FBUyxDQUFDLENBQUNMLE1BQU0sQ0FBQztZQUM3QyxJQUFJQSxNQUFNLEVBQUUsT0FBT25LLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUF5SixnQkFBZ0I7Y0FBQ3ZNLFFBQVEsRUFBRTRNO1lBQVksRUFBSTtZQUMvRCxJQUFJLENBQUMzTixNQUFNLENBQUM0RyxLQUFLLENBQUM0RyxPQUFPLEVBQUUsT0FBT2xQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSixNQUFBLENBQUFPLFVBQVU7Y0FBQzNILElBQUksRUFBQyxRQUFRO2NBQUM0SCxRQUFRLEVBQUV5RTtZQUFZLEVBQUk7WUFFdEYsT0FBT3JQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SixTQUFBLENBQUFRLGdCQUFnQjtjQUFDN0gsSUFBSSxFQUFDO1lBQVMsRUFBRztVQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTNCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVVxUCxrQkFBa0JBLENBQUM7WUFBRTlOLElBQUk7WUFBRUM7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQ29FLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5RixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMMUIsS0FBSyxFQUFFO2dCQUFFaUcsVUFBVSxFQUFFakcsS0FBSztnQkFBRWU7Y0FBTyxDQUFFO2NBQ3JDakIsUUFBUTtjQUNSaUU7WUFBUSxDQUNSLEdBQUcsSUFBQXRFLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEIsSUFBSSxDQUFDUCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1RLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSDhELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCckUsT0FBTyxFQUFFO2dCQUNULE1BQU1FLFFBQVEsQ0FBQzROLFlBQVksRUFBRTtnQkFDN0IsTUFBTWxKLElBQUksR0FBRztrQkFBRWlDLEtBQUssRUFBRTNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU8sRUFBRTtrQkFBRXJDLFNBQVMsRUFBRTFHLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ3FDLE9BQU8sRUFBRTtrQkFBRW5FLE9BQU8sRUFBRTtnQkFBSyxDQUFFO2dCQUV6R1gsUUFBUSxDQUFDUyxJQUFJLENBQUM7ZUFDZCxDQUFDLE9BQU92QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVGdCLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxPQUNDOUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FDWlgsSUFBSTtjQUNKQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJPLFNBQVMsRUFBRUEsU0FBUztjQUNwQlUsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVILEtBQUssRUFBRUMsT0FBTyxDQUFDTjtjQUFNO1lBQUUsR0FFcEN0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUMyTixXQUFXLENBQUNwTixLQUFLLENBQU0sRUFDbENwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxZQUFJZSxLQUFLLENBQUMyTixXQUFXLENBQUNoTixXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBeEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdQLGNBQUEsR0FBQXhQLE9BQUE7VUFDQSxJQUFBeVAsY0FBQSxHQUFBelAsT0FBQTtVQUNBLElBQUEwUCxPQUFBLEdBQUExUCxPQUFBO1VBQ0EsSUFBQTJQLGVBQUEsR0FBQTNQLE9BQUE7VUFDQSxJQUFBNFAsT0FBQSxHQUFBNVAsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTZQLFlBQUEsR0FBQTdQLE9BQUE7VUFFTSxTQUFVOFAsZ0JBQWdCQSxDQUFDO1lBQUVwSztVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFaEUsUUFBUTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ2lPLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2pRLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNMk0sS0FBSyxHQUFHO2NBQ2IsZ0JBQWdCLEVBQUVSLGNBQUEsQ0FBQTNCLGlCQUFpQjtjQUNuQ29DLE1BQU0sRUFBRVIsT0FBQSxDQUFBUCxVQUFVO2NBQ2xCZ0IsTUFBTSxFQUFFUCxPQUFBLENBQUFRLFVBQVU7Y0FDbEIsaUJBQWlCLEVBQUVULGVBQUEsQ0FBQVUsa0JBQWtCO2NBQ3JDLGdCQUFnQixFQUFFYixjQUFBLENBQUFsRjthQUNsQjtZQUVELElBQUksQ0FBQzJGLEtBQUssQ0FBQ3ZLLElBQUksQ0FBQyxFQUFFWixPQUFPLENBQUNDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRVcsSUFBSSxFQUFFdUssS0FBSyxDQUFDO1lBRWhFLE1BQU16SixJQUFJLEdBQUd5SixLQUFLLENBQUN2SyxJQUFJLENBQUM7WUFDeEIsTUFBTTZILFdBQVcsR0FBR0EsQ0FBQSxLQUFNeUMsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU0xQixLQUFLLEdBQUc7Y0FBRTlOLE9BQU8sRUFBRWdOLFdBQVc7Y0FBRUMsUUFBUSxFQUFFOUwsUUFBUSxDQUFDMkcsS0FBSyxDQUFDc0UsS0FBSyxJQUFJakwsUUFBUSxDQUFDMEcsU0FBUyxDQUFDdUU7WUFBSyxDQUFFO1lBRWxHLE9BQ0M1TSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBK0MsR0FDaEVuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUN5RyxLQUFLLENBQUNsRyxLQUFLLENBQU0sRUFDNUJwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQWdDLEdBQzlDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUMrRixPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtjQUFBLEdBQUtvRTtZQUFLLEdBQzFDek0sS0FBSyxDQUFDZSxPQUFPLENBQUMyTixNQUFNLENBQ2IsQ0FDSixDQUNFLEVBQ1R2USxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkYsSUFBSSxPQUFHLEVBQ1J6RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1AsWUFBQSxDQUFBUixrQkFBa0I7Y0FBQzlOLElBQUksRUFBRXdPLGVBQWU7Y0FBRXZPLE9BQU8sRUFBRStMO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBeE4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlJLFlBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVV1USxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRTNPLEtBQUs7Y0FBRUQsS0FBSztjQUFFbUUsU0FBUztjQUFFcEU7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNME8sUUFBUSxHQUFHO2NBQUU1TCxLQUFLLEVBQUUsRUFBRTtjQUFFbEMsS0FBSyxFQUFFZCxLQUFLLENBQUM2TyxTQUFTLENBQUNDLE1BQU0sQ0FBQzlKO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUMrSixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN1EsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUNpUCxRQUFRLENBQUM7WUFDakUsTUFBTXpLLFFBQVEsR0FBRyxNQUFNdkIsS0FBSyxJQUFHO2NBQzlCaU0sV0FBVyxDQUFDak0sS0FBSyxDQUFDd0IsYUFBYSxDQUFDdkIsS0FBSyxDQUFDO2NBQ3RDLE1BQU1sRCxRQUFRLENBQUNtUCxHQUFHLENBQUM7Z0JBQUVGLFFBQVEsRUFBRWhNLEtBQUssQ0FBQ3dCLGFBQWEsQ0FBQ3ZCO2NBQUssQ0FBRSxDQUFDO2NBQzNELE1BQU1qRCxLQUFLLENBQUMrQyxJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUNELE1BQU1rRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNrSSxHQUFHLENBQUM5QyxJQUFJLEtBQUs7Y0FBRXBKLEtBQUssRUFBRW9KLElBQUk7Y0FBRXRMLEtBQUssRUFBRWQsS0FBSyxDQUFDNk8sU0FBUyxDQUFDekMsSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU1SLFFBQVEsR0FBRztjQUFFUyxVQUFVLEVBQUV0TSxLQUFLLENBQUNvUDtZQUFLLENBQUU7WUFFNUMsT0FDQ2hSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQU91SSxPQUFPLEVBQUM7WUFBRSxHQUFFeEgsS0FBSyxDQUFDNk8sU0FBUyxDQUFDQyxNQUFNLENBQUNoTyxLQUFLLENBQVMsRUFDeEQzQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEgsWUFBQSxDQUFBWSxXQUFXO2NBQ1h6RSxLQUFLLEVBQUVsRCxRQUFRLENBQUNpUCxRQUFRO2NBQ3hCNU4sSUFBSSxFQUFDLFVBQVU7Y0FDZjZGLE9BQU8sRUFBRUEsT0FBTztjQUNoQjFDLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RzSDtZQUFRLEVBQ1gsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBdE4sV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTZPLFdBQUEsR0FBQTdPLE9BQUE7VUFFTSxTQUFVaU0sa0JBQWtCQSxDQUFDO1lBQ2xDbEosSUFBSTtZQUNKUDtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUVmLE1BQU07Y0FBRWtFLFFBQVE7Y0FBRWpFLFFBQVE7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUM0SCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1SixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTTRDLFFBQVEsR0FBR3ZCLEtBQUssSUFBRztjQUN4QixNQUFNd0UsTUFBTSxHQUFHeEUsS0FBSyxDQUFDd0IsYUFBYTtjQUNsQyxNQUFNaUMsU0FBUyxHQUFHO2dCQUFFLEdBQUczRyxNQUFNLENBQUMyRztjQUFTLENBQUU7Y0FDekN0RCxPQUFPLENBQUNrSCxHQUFHLENBQUMsRUFBRSxFQUFFakosSUFBSSxFQUFFb0csTUFBTSxDQUFDdkUsS0FBSyxDQUFDO2NBQ25DZSxRQUFRLENBQUM7Z0JBQUV5QyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDckYsSUFBSSxHQUFHb0csTUFBTSxDQUFDdkU7Z0JBQUssQ0FBRTtnQkFBRTBCLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTXNELGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUluSSxNQUFNLENBQUM2RSxPQUFPLEVBQUU7Z0JBQ25CcUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNVCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixNQUFNcUcsU0FBUyxHQUFHO2dCQUFFLEdBQUczRyxNQUFNLENBQUMyRztjQUFTLENBQUU7Y0FDekN6QyxRQUFRLENBQUM7Z0JBQUV5QyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDckYsSUFBSSxHQUFHckIsUUFBUSxDQUFDMEcsU0FBUyxDQUFDckYsSUFBSTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUMzRTRHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5ILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNcUgsYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDNUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQW9CLFFBQVE7Y0FDUlIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbkQsSUFBSSxFQUFFQSxJQUFJO2NBQ1Y2QixLQUFLLEVBQUVuRCxNQUFNLENBQUMyRyxTQUFTLEdBQUdyRixJQUFJLENBQUMsSUFBSSxFQUFFO2NBQ3JDNkQsV0FBVyxFQUFFaEYsS0FBSyxDQUFDc0ksTUFBTSxDQUFDbkgsSUFBSSxDQUFDLENBQUM0RDtZQUFRLEVBQ3ZDLEVBQ0Y1RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRcUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNQLE9BQU8sRUFBRXFKLGFBQWE7Y0FBRS9DLE9BQU8sRUFBQyxTQUFTO2NBQUNvRCxRQUFRO1lBQUEsR0FDeERySSxLQUFLLENBQUNlLE9BQU8sQ0FBQ04sTUFBTSxDQUNiLEVBQ1R0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ08sV0FBQSxDQUFBQyxVQUFVO2NBQUNJLFFBQVEsRUFBRTFNO1lBQVEsRUFBSSxDQUMxQixFQUNSa0gsZUFBZSxJQUNmM0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFUyxRQUFRLEVBQUVxSDtZQUFhLEdBQzFEOUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FBTWUsS0FBSyxDQUFDc0ksTUFBTSxDQUFDN0gsTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQXRDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0TSxTQUFBLEdBQUE1TSxPQUFBO1VBQ0EsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUE2TSxjQUFBLEdBQUE3TSxPQUFBO1VBQ0EsSUFBQWdSLG1CQUFBLEdBQUFoUixPQUFBO1VBRU0sU0FBVTRPLFlBQVlBLENBQUM7WUFBRTdMO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQUVyQjtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZDLE1BQU0sQ0FBQ21QLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduUixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQzBHLFNBQVMsQ0FBQ3JGLElBQUksQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQ21ILE1BQU0sRUFBRUssU0FBUyxDQUFDLEdBQUd4SyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBQStHLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM5SSxRQUFRLENBQUMwRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDOEksV0FBVyxDQUFDeFAsUUFBUSxDQUFDMEcsU0FBUyxDQUFDckYsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsSUFBSW1ILE1BQU0sRUFBRTtjQUNYLE9BQU9uSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVEsbUJBQUEsQ0FBQS9FLGtCQUFrQjtnQkFBQ2xKLElBQUksRUFBRUEsSUFBSTtnQkFBRVAsUUFBUSxFQUFFQSxDQUFBLEtBQU0rSCxTQUFTLENBQUMsS0FBSztjQUFDLEVBQUk7O1lBRTVFLElBQUksQ0FBQzBHLFFBQVEsRUFBRSxPQUFPbFIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dNLGNBQUEsQ0FBQUssYUFBYTtjQUFDbkssSUFBSSxFQUFFQSxJQUFJO2NBQUU0SCxRQUFRLEVBQUVBLENBQUEsS0FBTUosU0FBUyxDQUFDLElBQUk7WUFBQyxFQUFJO1lBRXBGLE9BQU94SyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0wsU0FBQSxDQUFBSSxRQUFRO2NBQUMvRixPQUFPLEVBQUVnSztZQUFRLEVBQUk7VUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFsUixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFtSyxNQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQW1SLGdCQUFBLEdBQUFuUixPQUFBO1VBRU0sU0FBVW9SLGFBQWFBLENBQUM7WUFBRUM7VUFBVSxDQUFFO1lBQzNDLE1BQU07Y0FBRTNQO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFdkMsT0FDQy9CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBa0osUUFBQSxRQUNDL0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NRLGdCQUFBLENBQUFHLG9CQUFvQixPQUFHLEVBQ3hCdlIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NKLE1BQUEsQ0FBQU8sVUFBVTtjQUNWM0gsSUFBSSxFQUFDLGlCQUFpQjtjQUN0QjRILFFBQVEsRUFBRTBHLFVBQVU7Y0FDcEI5SSxlQUFlLEVBQUU7Z0JBQUVnSixPQUFPLEVBQUU3UCxRQUFRLENBQUMyRyxLQUFLLENBQUNrSjtjQUFPO1lBQUUsRUFDbkQsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBeFIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUF3UixrQkFBQSxHQUFBeFIsT0FBQTtVQUVNLFNBQVV5UixVQUFVQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsS0FBSztZQUFFQztVQUFnQixDQUFFO1lBQy9ELE1BQU07Y0FDTHZKLEtBQUssRUFBRTtnQkFBRXdKO2NBQUs7WUFBRSxDQUNoQixHQUFHLElBQUFMLGtCQUFBLENBQUFNLDJCQUEyQixHQUFFO1lBQ2pDLE1BQU07Y0FBRWxRLEtBQUs7Y0FBRUYsUUFBUTtjQUFFaUU7WUFBUSxDQUFFLEdBQUcsSUFBQXRFLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDOEMsS0FBSyxFQUFFbU4sUUFBUSxDQUFDLEdBQUdoUyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTRDLFFBQVEsR0FBR3ZCLEtBQUssSUFBSW9OLFFBQVEsQ0FBQ3BOLEtBQUssQ0FBQ3dCLGFBQWEsQ0FBQ3ZCLEtBQUssQ0FBQztZQUM3RCxNQUFNb04sTUFBTSxHQUFHQSxDQUFBLEtBQU1yTSxRQUFRLENBQUM7Y0FBRTBDLEtBQUssRUFBRTNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU8sRUFBRTtjQUFFbkUsT0FBTyxFQUFFO1lBQUksQ0FBRSxDQUFDO1lBQ2pGLE1BQU0yTCxLQUFLLEdBQUd0TixLQUFLLElBQUc7Y0FDckJvTixRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pMLFFBQVEsQ0FBQ1EsU0FBUyxDQUFDdE4sS0FBSyxDQUFDO2NBQ3pCb04sTUFBTSxFQUFFO1lBQ1QsQ0FBQztZQUNELE1BQU14UCxRQUFRLEdBQUdtQyxLQUFLLElBQUc7Y0FDeEJpTixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Y0FDdkJDLEtBQUssRUFBRTtZQUNSLENBQUM7WUFFRCxPQUNDOVIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUFjLEdBQzVCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQXlFLEtBQUs7Y0FBQ2hILElBQUksRUFBQyxtQkFBbUI7Y0FBQzZCLEtBQUssRUFBRUEsS0FBSztjQUFFc0IsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDcEVuRyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQXVELEdBQ3JFbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNQLE9BQU8sRUFBRWlDLFFBQVE7Y0FBRXFFLE9BQU8sRUFBQyxTQUFTO2NBQUNvRCxRQUFRO2NBQUNsSixJQUFJLEVBQUM7WUFBUSxHQUNqRWEsS0FBSyxDQUFDZSxPQUFPLENBQUMyTixNQUFNLENBQ2IsRUFDVHZRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUUwUixLQUFLO2NBQUVsUixJQUFJLEVBQUMsS0FBSztjQUFDOEYsT0FBTyxFQUFDO1lBQVMsR0FDbERqRixLQUFLLENBQUNlLE9BQU8sQ0FBQ3dQLEdBQUcsQ0FDVixDQUNKLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXBTLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwTCxLQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQW9TLEtBQUEsR0FBQXBTLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUVPO1VBQVcsU0FBVXFTLGFBQWFBLENBQUM7WUFBRVg7VUFBUSxDQUFFO1lBQ3JELE1BQU0sQ0FBQ1ksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3hTLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDb08sUUFBUSxDQUFDWSxPQUFPLENBQUM7WUFDOUQsTUFBTSxDQUFDMUosT0FBTyxFQUFFNEosVUFBVSxDQUFDLEdBQUd6UyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQ29PLFFBQVEsQ0FBQzlJLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDcEUsTUFBTSxDQUFDeEMsSUFBSSxFQUFFa0gsT0FBTyxDQUFDLEdBQUd2TixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQ29PLFFBQVEsQ0FBQ2pILE9BQU8sRUFBRSxDQUFDO1lBQzFELElBQUFKLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUNrSCxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQzFCYSxVQUFVLENBQUNiLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDO2NBQ2xDRCxVQUFVLENBQUNkLFFBQVEsQ0FBQzlJLE9BQU8sQ0FBQztjQUM1QjBFLE9BQU8sQ0FBQ29FLFFBQVEsQ0FBQ2pILE9BQU8sRUFBRSxDQUFDO2NBQzNCM0YsT0FBTyxDQUFDa0gsR0FBRyxDQUFDLFlBQVksRUFBRTBGLFFBQVEsQ0FBQ2pILE9BQU8sRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3JFLElBQUksQ0FBQ3dDLE9BQU8sQ0FBQzhKLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFFckMsT0FDQzNTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM2SyxLQUFBLENBQUFhLElBQUk7Y0FDSmxFLEtBQUssRUFBRTtnQkFDTnFKO2VBQ0E7Y0FDRHhPLFNBQVMsRUFBQyx3QkFBd0I7Y0FDbEMyRixLQUFLLEVBQUV6QyxJQUFJLENBQUN3QyxPQUFPO2NBQ25CNEQsT0FBTyxFQUFFNEYsS0FBQSxDQUFBTztZQUFVLEVBQ2xCO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE1UyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNFMsTUFBQSxHQUFBNVMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU8sTUFBTTJTLFVBQVUsR0FBR25TLEtBQUssSUFBRztZQUNqQyxNQUFNO2NBQUVvQixLQUFLO2NBQUVGLFFBQVE7Y0FBRWlFO1lBQVEsQ0FBRSxHQUFHLElBQUF0RSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3hELE1BQU07Y0FDTGtNLElBQUk7Y0FDSjJELEtBQUs7Y0FDTHRKLEtBQUssRUFBRTtnQkFBRXFKO2NBQVE7WUFBRSxDQUNuQixHQUFHbFIsS0FBSztZQUVULE1BQU13UixNQUFNLEdBQUdBLENBQUEsS0FBTXJNLFFBQVEsQ0FBQztjQUFFMEMsS0FBSyxFQUFFM0csUUFBUSxDQUFDMkcsS0FBSyxDQUFDb0MsT0FBTyxFQUFFO2NBQUVuRSxPQUFPLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFFakYsTUFBTXVNLElBQUksR0FBR2xPLEtBQUssSUFBRztjQUNwQkEsS0FBSyxDQUFDbU8sY0FBYyxFQUFFO2NBQ3RCcEIsUUFBUSxDQUFDYSxVQUFVLENBQUNaLEtBQUssQ0FBQztjQUMxQkssTUFBTSxFQUFFO1lBQ1QsQ0FBQztZQUNELE1BQU1lLFFBQVEsR0FBR3BPLEtBQUssSUFBRztjQUN4QitNLFFBQVEsQ0FBQ3NCLFlBQVksQ0FBQ3JCLEtBQUssQ0FBQztjQUM1QkssTUFBTSxFQUFFO1lBQ1QsQ0FBQztZQUVELE9BQ0NqUyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUNDZCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxlQUFPbU4sSUFBSSxDQUFRLEVBQ25Cak8sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBU3FDLFNBQVMsRUFBQztZQUE2QixHQUM5Q3dPLFFBQVEsQ0FBQ2UsYUFBYSxLQUFLZCxLQUFLLEdBQ2hDNVIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytSLE1BQUEsQ0FBQUssSUFBSTtjQUFDbFMsSUFBSSxFQUFDLE9BQU87Y0FBQ21TLE1BQU0sRUFBQyxJQUFJO2NBQUN4TixJQUFJLEVBQUM7WUFBUyxHQUMzQzlELEtBQUssQ0FBQ3VSLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDZCxPQUFPLENBQzlCLEdBRVB2UyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ1AsT0FBTyxFQUFFc1MsSUFBSTtjQUFFOVIsSUFBSSxFQUFDLE1BQU07Y0FBQ2tKLFFBQVE7Y0FBQ2lKLE1BQU0sRUFBQyxJQUFJO2NBQUNyTSxPQUFPLEVBQUM7WUFBUyxHQUN2RWpGLEtBQUssQ0FBQ3VSLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDUCxJQUFJLENBRWxDLEVBQ0Q5UyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUFrQixVQUFVO2NBQUMrQixTQUFTLEVBQUMsUUFBUTtjQUFDbkMsSUFBSSxFQUFDLFFBQVE7Y0FBQ1IsT0FBTyxFQUFFd1M7WUFBUSxFQUFJLENBQ3pELENBQ047VUFFUCxDQUFDO1VBQUMxTixPQUFBLENBQUFzTixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NGLElBQUE1UyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd1Isa0JBQUEsR0FBQXhSLE9BQUE7VUFLQSxJQUFBcVQsUUFBQSxHQUFBclQsT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBRU87VUFBVyxTQUFVc1QsVUFBVUEsQ0FBQztZQUFFbE4sSUFBSTtZQUFFdUw7VUFBSyxDQUFFO1lBQ3JELE1BQU07Y0FBRXRKO1lBQUssQ0FBRSxHQUFHLElBQUFtSixrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUUvQyxNQUFNLENBQUN5QixjQUFjLEVBQUUzQixnQkFBZ0IsQ0FBQyxHQUFHN1IsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMrRSxLQUFLLENBQUNtTCxnQkFBZ0IsS0FBSzdCLEtBQUssQ0FBQztZQUUzRixNQUFNclAsSUFBSSxHQUFHLE9BQU84RCxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLENBQUNzTCxRQUFRLEdBQUd0TCxJQUFJO1lBQzVELE1BQU1xTixpQkFBaUIsR0FBR3BMLEtBQUssQ0FBQ21MLGdCQUFnQixLQUFLN0IsS0FBSyxJQUFJNEIsY0FBYztZQUM1RSxNQUFNN0IsUUFBUSxHQUFHckosS0FBSyxDQUFDQSxLQUFLLENBQUNxTCxTQUFTLENBQUMvQixLQUFLLENBQUM7WUFDN0MsT0FDQzVSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsa0JBQUEsQ0FBQW1DLHFCQUFxQjtjQUFDdk4sSUFBSSxFQUFFOUQsSUFBSTtjQUFFcVAsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDbER0SixLQUFLLENBQUN1TCxPQUFPLElBQUlsQyxRQUFRLElBQUkzUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd1MsUUFBQSxDQUFBaEIsYUFBYTtjQUFDWCxRQUFRLEVBQUVBLFFBQVE7Y0FBRXRMLElBQUksRUFBRWlDLEtBQUssQ0FBQ3VMLE9BQU87Y0FBRWpDLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3JHOEIsaUJBQWlCLElBQUkxVCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBbU0sVUFBVTtjQUFDRSxLQUFLLEVBQUVBLEtBQUs7Y0FBRUQsUUFBUSxFQUFFQSxRQUFRO2NBQUVFLGdCQUFnQixFQUFFQTtZQUFnQixFQUFJLENBQ3JHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUE3UixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5TCxPQUFBLEdBQUF6TCxPQUFBO1VBRU0sU0FBVXFRLGtCQUFrQkEsQ0FBQztZQUFFakIsWUFBWTtZQUFFeEg7VUFBSSxDQUFFO1lBQ3hELE1BQU07Y0FBRWhHO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTZJLFFBQVEsR0FBR0EsQ0FBQSxLQUFNeUUsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUUxQyxPQUNDclAsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRcUMsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDeUcsS0FBSyxDQUFDcUwsU0FBUyxDQUFDdlIsS0FBSyxDQUFNLEVBQ3RDcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBa0IsVUFBVTtjQUFDSixJQUFJLEVBQUMsV0FBVztjQUFDUixPQUFPLEVBQUVxSDtZQUFJLEVBQUksQ0FDdEMsRUFDVDdILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0SyxPQUFBLENBQUFvSSxVQUFVO2NBQUNyUixRQUFRLEVBQUVtSTtZQUFRLEVBQUksQ0FDaEM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTVLLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUF3UixrQkFBQSxHQUFBeFIsT0FBQTtVQUNBLElBQUFvUyxLQUFBLEdBQUFwUyxPQUFBO1VBQ0EsSUFBQThULGNBQUEsR0FBQTlULE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUErVCx1QkFBQSxHQUFBL1QsT0FBQTtVQUNBLElBQUE2TyxXQUFBLEdBQUE3TyxPQUFBO1VBRU0sU0FBVTZULFVBQVVBLENBQUM7WUFBRXJSO1VBQVEsQ0FBRTtZQUN0QyxNQUFNO2NBQUVkLFFBQVE7Y0FBRUUsS0FBSztjQUFFSCxNQUFNO2NBQUVrRTtZQUFRLENBQUUsR0FBRyxJQUFBdEUsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUVoRSxNQUFNa1MsUUFBUSxHQUFHalUsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRDOzs7WUFHQSxNQUFNO2NBQUUyUSxVQUFVO2NBQUU1TCxLQUFLO2NBQUU2TCxZQUFZO2NBQUV0TCxPQUFPO2NBQUU0SjtZQUFVLENBQUUsR0FBRyxJQUFBdUIsdUJBQUEsQ0FBQUksc0JBQXNCLEdBQUU7WUFFekYsTUFBTUMsWUFBWSxHQUFHQSxDQUFDO2NBQUVqTyxhQUFhLEVBQUVnRDtZQUFNLENBQUUsS0FBSTtjQUNsRDZLLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWixNQUFNM0wsS0FBSyxHQUFHO2dCQUFFLEdBQUc1RyxNQUFNLENBQUM0RztjQUFLLENBQUU7Y0FFakMzRyxRQUFRLENBQUMyRyxLQUFLLENBQUN3SSxHQUFHLENBQUM7Z0JBQUU2QyxTQUFTLEVBQUV2SyxNQUFNLENBQUN2RTtjQUFLLENBQUUsQ0FBQztjQUMvQyxNQUFNZ1AsT0FBTyxHQUFHbFMsUUFBUSxDQUFDMkcsS0FBSyxDQUFDcUwsU0FBUyxDQUFDNUMsR0FBRyxDQUFDOUMsSUFBSSxLQUFLO2dCQUFFbkYsS0FBSyxFQUFFbUYsSUFBSSxDQUFDcEYsT0FBTztnQkFBRTBKLE9BQU8sRUFBRXRFLElBQUksQ0FBQ3lFO2NBQWEsQ0FBRSxDQUFDLENBQUM7Y0FDNUd3QixVQUFVLENBQUNMLE9BQU8sQ0FBQztjQUNuQnBCLFVBQVUsQ0FBQ3JKLE1BQU0sQ0FBQ3ZFLEtBQUssQ0FBQztjQUN4QmUsUUFBUSxDQUFDO2dCQUFFMEMsS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsR0FBRzNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU87Z0JBQUUsQ0FBRTtnQkFBRW5FLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUM5RSxDQUFDO1lBRUQsT0FDQ3ZHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVNxQyxTQUFTLEVBQUM7WUFBMEIsR0FFNUNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsa0JBQUEsQ0FBQTZDLGlCQUFpQjtjQUNqQjFSLE9BQU8sRUFBRXVSLFlBQVk7Y0FDckJ6UyxNQUFNLEVBQUVtSCxPQUFPO2NBQ2ZzRCxJQUFJLEVBQUVrRyxLQUFBLENBQUFrQixVQUFVO2NBQ2hCakwsS0FBSyxFQUFFQSxLQUFLO2NBQ1orTCxZQUFZLEVBQUVBLFlBQVk7Y0FDMUJFLFNBQVMsRUFBQztZQUFXLEdBRXJCdlUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lULGNBQUEsQ0FBQVMsa0JBQWtCLE9BQUcsQ0FDSCxFQUVwQnhVLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBbUMsR0FDcERuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQytGLE9BQU8sRUFBQyxTQUFTO2NBQUNvRCxRQUFRO2NBQUMxSixPQUFPLEVBQUVpQztZQUFRLEdBQ2xEWixLQUFLLENBQUNlLE9BQU8sQ0FBQ04sTUFBTSxDQUNiLEVBQ1R0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ08sV0FBQSxDQUFBQyxVQUFVO2NBQUNJLFFBQVEsRUFBRTFNO1lBQVEsRUFBSSxDQUMxQixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF6QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUEwTCxLQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXdVLGlCQUFBLEdBQUF4VSxPQUFBO1VBRU0sU0FBVXlVLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUVoVCxNQUFNO2NBQUVDLFFBQVE7Y0FBRWlFLFFBQVE7Y0FBRS9EO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxHQUFHNFMsa0JBQWtCLENBQUMsR0FBRzNVLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwRCxNQUFNMkosSUFBSSxHQUFHQSxDQUFBLEtBQU15SCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFFM0MsT0FDQzNVLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBa0osUUFBQSxRQUNDL0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUFtQyxHQUNwRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ3FMLFNBQVMsQ0FBQ3ZSLEtBQUssQ0FBTSxFQUN0Q3BDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFVBQVU7Y0FBQ0osSUFBSSxFQUFDLE1BQU07Y0FBQ1IsT0FBTyxFQUFFME07WUFBSSxFQUFJLENBQ2pDLEVBQ1RsTixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssS0FBQSxDQUFBYSxJQUFJO2NBQUNySixTQUFTLEVBQUMsbUJBQW1CO2NBQUMyRixLQUFLLEVBQUVwSCxNQUFNLENBQUM0RyxLQUFLLENBQUNxTCxTQUFTO2NBQUVyTCxLQUFLLEVBQUUsRUFBRTtjQUFFbUUsT0FBTyxFQUFFZ0ksaUJBQUEsQ0FBQUc7WUFBZ0IsRUFBSSxDQUN6RztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBMVUsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBMLEtBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVUyVSxnQkFBZ0JBLENBQUM7WUFBRXZPO1VBQUksQ0FBdUU7WUFDN0csTUFBTTtjQUFFeEU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNOFMsT0FBTyxHQUFHQSxDQUFDO2NBQUV4TyxJQUFJLEVBQUV5TyxNQUFNO2NBQUVsRDtZQUFLLENBQW1DLEtBQUk7Y0FDNUUsTUFBTTVRLElBQUksR0FBRzRRLEtBQUssS0FBS3ZMLElBQUksQ0FBQ3FNLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUM3RCxPQUNDMVMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQUlxQyxTQUFTLEVBQUM7Y0FBNkMsR0FDMURuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUEwSCxJQUFJO2dCQUFDNUcsSUFBSSxFQUFFQSxJQUFJO2dCQUFFbUMsU0FBUyxFQUFDO2NBQVMsRUFBRyxFQUN2QzJSLE1BQU0sQ0FDSDtZQUVQLENBQUM7WUFFRCxPQUNDOVUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBSXFDLFNBQVMsRUFBQztZQUFnQixHQUM3Qm5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUt1RixJQUFJLENBQUNzTCxRQUFRLENBQU0sRUFDdkJ0TCxJQUFJLENBQUN3QyxPQUFPLENBQUM4SixNQUFNLEdBQ25CM1MsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZLLEtBQUEsQ0FBQWEsSUFBSTtjQUFDMUQsS0FBSyxFQUFFekMsSUFBSSxDQUFDd0MsT0FBTztjQUFFNEQsT0FBTyxFQUFFb0k7WUFBTyxFQUFJLEdBRS9DN1UsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFHcUMsU0FBUyxFQUFDO1lBQVksR0FBRXRCLEtBQUssQ0FBQ3VSLGNBQWMsQ0FBQzJCLFlBQVksQ0FBSyxDQUVsRSxDQUNHO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFDLEtBQUEsR0FBQS9VLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0E7Ozs7OztVQU1NLFNBQVVtVSxzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFelMsUUFBUTtjQUFFRSxLQUFLO2NBQUVILE1BQU07Y0FBRWtFO1lBQVEsQ0FBRSxHQUFHLElBQUF0RSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQzhHLE9BQU8sRUFBRTRKLFVBQVUsQ0FBQyxHQUFHelMsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUMyRyxLQUFLLENBQUMyTSxjQUFjLElBQUksRUFBRSxDQUFDO1lBQ2pGLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25WLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNzUSxPQUFPLEVBQUVLLFVBQVUsQ0FBQyxHQUFHbFUsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sR0FBRzZSLFNBQVMsQ0FBQyxHQUFHcFYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRXhDLElBQUErRyxNQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDOUksUUFBUSxDQUFDMkcsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUNoQ21LLFVBQVUsQ0FBQzlRLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ3FMLFNBQVMsQ0FBQzVDLEdBQUcsQ0FBQzlDLElBQUksSUFBSUEsSUFBSSxDQUFDMEQsUUFBUSxDQUFDLENBQUM7Y0FDL0QsTUFBTWtDLE9BQU8sR0FBR2xTLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ3FMLFNBQVMsQ0FBQzVDLEdBQUcsQ0FBQzlDLElBQUksS0FBSztnQkFBRW5GLEtBQUssRUFBRW1GLElBQUksQ0FBQ3BGLE9BQU87Z0JBQUUwSixPQUFPLEVBQUV0RSxJQUFJLENBQUN5RTtjQUFhLENBQUUsQ0FBQyxDQUFDO2NBQzVHd0IsVUFBVSxDQUFDTCxPQUFPLENBQUM7Y0FDbkIsTUFBTXZMLEtBQUssR0FBRztnQkFBRSxHQUFHNUcsTUFBTSxDQUFDNEc7Y0FBSyxDQUFFO2NBQ2pDMUMsUUFBUSxDQUFDO2dCQUFFMEMsS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsR0FBRzNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU87Z0JBQUU7Y0FBRSxDQUFFLENBQUM7Y0FDOUQwSyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsTUFBTWpCLFlBQVksR0FBd0I7Y0FDekNOLE9BQU8sRUFBRTtnQkFDUjtnQkFDQTdTLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Z0JBQ25Ca0IsS0FBSyxFQUFFUCxLQUFLLENBQUNlLE9BQU8sQ0FBQ3lTLGVBQWU7Z0JBQ3BDN1UsT0FBTyxFQUFFLE1BQUFBLENBQU9vRSxLQUFLLEVBQUVnTixLQUFLLEVBQUV2TCxJQUFJLEtBQUk7a0JBQ3JDLE1BQU1pUCxPQUFPLEdBQUcsSUFBSU4sS0FBQSxDQUFBTyxjQUFjLEVBQUU7a0JBRXBDLElBQUksQ0FBQzVULFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ3FMLFNBQVMsQ0FBQy9CLEtBQUssQ0FBQyxFQUFFO29CQUNyQzdNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDZCQUE2QixFQUFFNE0sS0FBSyxDQUFDO29CQUNuRDs7a0JBR0QsTUFBTS9JLE9BQU8sR0FBRyxNQUFNbEgsUUFBUSxDQUFDMkcsS0FBSyxDQUFDcUwsU0FBUyxDQUFDL0IsS0FBSyxDQUFDLENBQUN5RCxlQUFlLEVBQUU7a0JBRXZFbkIsVUFBVSxDQUFDO29CQUFFLEdBQUdMLE9BQU87b0JBQUUsR0FBR2hMO2tCQUFPLENBQUUsQ0FBQztrQkFDdEN5TSxPQUFPLENBQUNFLE9BQU8sRUFBRTtrQkFDakI7a0JBQ0FwUixVQUFVLENBQUNOLFVBQVUsQ0FBQyxNQUFLO29CQUMxQndSLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFO2tCQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2tCQUVSLE9BQU9GLE9BQU87Z0JBQ2Y7ZUFDQTtjQUNEbEQsR0FBRyxFQUFFO2dCQUNKcFIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1hvQixLQUFLLEVBQUVQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDd1AsR0FBRztnQkFDeEJxRCxZQUFZLEVBQUUsSUFBSTtnQkFDbEJqVixPQUFPLEVBQUVBLENBQUNvRSxLQUFLLEVBQUVnTixLQUFLLEtBQUk7a0JBQ3pCdUQsWUFBWSxDQUFDdkQsS0FBSyxDQUFDO2dCQUNwQjs7YUFFRDtZQUNELE1BQU10SixLQUFLLEdBQUc7Y0FDYjNDLElBQUksRUFBRSxXQUFXO2NBQ2pCMkMsS0FBSyxFQUFFM0csUUFBUSxDQUFDMkcsS0FBSztjQUNyQm1MLGdCQUFnQixFQUFFeUIsU0FBUztjQUMzQnJCLE9BQU87Y0FDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBbUJBL0IsS0FBSyxFQUFFQSxDQUFBLEtBQU1xRCxZQUFZLENBQUMsS0FBSzthQUMvQjtZQUVELE9BQU87Y0FBRWhCLFlBQVk7Y0FBRTdMLEtBQUs7Y0FBRXVMLE9BQU87Y0FBRUssVUFBVTtjQUFFckwsT0FBTztjQUFFNEo7WUFBVSxDQUFFO1VBQ3pFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQSxJQUFBelMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFFTSxTQUFVeVYsTUFBTUEsQ0FBQztZQUFFQyxZQUFZO1lBQUVDO1VBQWUsQ0FBRTtZQUN2RCxNQUFNO2NBQUUvVDtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU04VCxNQUFNLEdBQUdBLENBQUEsS0FBTUQsZUFBZSxDQUFDLENBQUNELFlBQVksQ0FBQztZQUNuRCxNQUFNM1UsSUFBSSxHQUFHMlUsWUFBWSxHQUFHLFdBQVcsR0FBRyxNQUFNO1lBQ2hELE9BQ0MzVixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBbUMsR0FDcERuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUN5RyxLQUFLLENBQUNxTCxTQUFTLENBQUN2UixLQUFLLENBQU0sRUFDdENwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUFrQixVQUFVO2NBQUNKLElBQUksRUFBRUEsSUFBSTtjQUFFUixPQUFPLEVBQUVxVjtZQUFNLEVBQUksQ0FDbkMsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBN1YsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUF5TCxPQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQTZWLE9BQUEsR0FBQTdWLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUVBLElBQUF3VSxpQkFBQSxHQUFBeFUsT0FBQTtVQUNBLElBQUEwTCxLQUFBLEdBQUExTCxPQUFBO1VBRU0sU0FBVXFRLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUU1TyxNQUFNO2NBQUVDLFFBQVE7Y0FBRWlFLFFBQVE7Y0FBRS9EO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDZ1UsVUFBVSxFQUFFdkwsU0FBUyxDQUFDLEdBQUd4SyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDb1MsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRzVWLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3RCxNQUFNeVMsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJ4TCxTQUFTLENBQUMsS0FBSyxDQUFDO2NBQ2hCb0wsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDO1lBQ0QsTUFBTXRFLFVBQVUsR0FBR0EsQ0FBQSxLQUFNOUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN4QyxNQUFNeUwsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTTNOLEtBQUssR0FBRzNHLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ29DLE9BQU8sRUFBRTtjQUN0QzlFLFFBQVEsQ0FBQztnQkFBRTBDO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFBZ0MsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQzlJLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQyxFQUFFMk4sUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBRXhELElBQUlGLFVBQVUsRUFBRSxPQUFPL1YsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRLLE9BQUEsQ0FBQW9JLFVBQVU7Y0FBQ3JSLFFBQVEsRUFBRXVUO1lBQVcsRUFBSTtZQUM1RCxJQUFJLENBQUN0VSxNQUFNLENBQUM0RyxLQUFLLEVBQUVxTCxTQUFTLEVBQUVoQixNQUFNLEVBQUUsT0FBTzNTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSixNQUFBLENBQUFpSCxhQUFhO2NBQUNDLFVBQVUsRUFBRUE7WUFBVSxFQUFJO1lBRXRGLE9BQ0N0UixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dWLE9BQUEsQ0FBQUosTUFBTTtjQUFDQyxZQUFZLEVBQUVBLFlBQVk7Y0FBRUMsZUFBZSxFQUFFQTtZQUFlLEVBQUksRUFDdkVELFlBQVksR0FDWjNWLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0SyxPQUFBLENBQUFvSSxVQUFVO2NBQUNyUixRQUFRLEVBQUV1VDtZQUFXLEVBQUksR0FFckNoVyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssS0FBQSxDQUFBYSxJQUFJO2NBQ0pySixTQUFTLEVBQUMsbUJBQW1CO2NBQzdCMkYsS0FBSyxFQUFFcEgsTUFBTSxDQUFDNEcsS0FBSyxDQUFDcUwsU0FBUztjQUM3QnJMLEtBQUssRUFBRSxFQUFFO2NBQ1RtRSxPQUFPLEVBQUVnSSxpQkFBQSxDQUFBRztZQUFnQixFQUUxQixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUE1VSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd1Isa0JBQUEsR0FBQXhSLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBd0YsU0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBRU0sU0FBVXVVLGtCQUFrQkEsQ0FBQztZQUFFMEIsWUFBWSxHQUFHO1VBQUksQ0FBRTtZQUN6RCxNQUFNO2NBQUVyVTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU07Y0FBRW9VO1lBQWMsQ0FBRSxHQUFHLElBQUExRSxrQkFBQSxDQUFBTSwyQkFBMkIsR0FBRTtZQUN4RCxNQUFNdlIsT0FBTyxHQUFHQSxDQUFBLEtBQU11RSxPQUFPLENBQUNrSCxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzlDLE9BQ0NqTSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQWtFLEdBQ2hGbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNDLElBQUksRUFBQyxLQUFLO2NBQUM4RixPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtjQUFDMUosT0FBTyxFQUFFMlY7WUFBYyxHQUNuRXRVLEtBQUssQ0FBQ3VVLFdBQVcsQ0FBQ2hFLEdBQUcsQ0FDZCxFQUNSOEQsWUFBWSxJQUNabFcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJFLFNBQUEsQ0FBQW5GLFFBQVE7Y0FBQ3dHLE9BQU8sRUFBQyxTQUFTO2NBQUN0RyxPQUFPLEVBQUVBO1lBQU8sR0FDMUNxQixLQUFLLENBQUNlLE9BQU8sQ0FBQzBELFFBQVEsQ0FFeEIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBdEcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBeUksWUFBQSxHQUFBekksT0FBQTtVQUVNLFNBQVVzUixvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUNMM1AsS0FBSztjQUNMQyxLQUFLLEVBQUU7Z0JBQUV1UixjQUFjLEVBQUV2UjtjQUFLLENBQUU7Y0FDaENILE1BQU07Y0FDTkMsUUFBUTtjQUNSaUU7WUFBUSxDQUNSLEdBQUcsSUFBQXRFLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTXNVLE1BQU0sR0FBR3BJLElBQUksSUFBSUEsSUFBSSxDQUFDdEksSUFBSSxLQUFLLGdCQUFnQjtZQUNyRCxNQUFNb0wsR0FBRyxHQUFHOUMsSUFBSSxLQUFLO2NBQUVwSixLQUFLLEVBQUVvSixJQUFJLENBQUN2RyxFQUFFO2NBQUUvRSxLQUFLLEVBQUVzTCxJQUFJLENBQUM3TDtZQUFLLENBQUUsQ0FBQztZQUMzRCxNQUFNeUcsT0FBTyxHQUFHakgsS0FBSyxDQUFDNkYsS0FBSyxDQUFDSyxVQUFVLENBQUNnQixLQUFLLENBQUN1TixNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDdEYsR0FBRyxDQUFDQSxHQUFHLENBQUM7WUFDcEUsSUFBSW5JLFlBQVksR0FBRztjQUFFL0QsS0FBSyxFQUFFLEVBQUU7Y0FBRWxDLEtBQUssRUFBRWQsS0FBSyxDQUFDMlAsT0FBTyxDQUFDOEU7WUFBVyxDQUFFO1lBQ2xFLElBQUk5RSxPQUFPLEdBQUd0UCxTQUFTO1lBQ3ZCLE1BQU1pRSxRQUFRLEdBQUd2QixLQUFLLElBQUc7Y0FDeEJqRCxRQUFRLENBQUMyRyxLQUFLLENBQUN3SSxHQUFHLENBQUM7Z0JBQUVVLE9BQU8sRUFBRTVNLEtBQUssQ0FBQ3dFLE1BQU0sQ0FBQ3ZFO2NBQUssQ0FBRSxDQUFDO2NBQ25EZSxRQUFRLENBQUM7Z0JBQUUwQyxLQUFLLEVBQUU7a0JBQUUsR0FBRzVHLE1BQU0sQ0FBQzRHLEtBQUs7a0JBQUVrSixPQUFPLEVBQUU1TSxLQUFLLENBQUN3RSxNQUFNLENBQUN2RTtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUN0RSxDQUFDO1lBRUQsSUFBSWxELFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ2tKLE9BQU8sS0FBS3RQLFNBQVMsRUFBRTtjQUN6QyxNQUFNdU8sUUFBUSxHQUFHN08sS0FBSyxDQUFDNkYsS0FBSyxDQUFDSyxVQUFVLENBQUNnQixLQUFLLENBQUNuSCxRQUFRLENBQUMyRyxLQUFLLENBQUNrSixPQUFPLENBQUM7Y0FDckVBLE9BQU8sR0FBR2YsUUFBUSxFQUFFL0ksRUFBRTs7WUFHdkIsT0FDQzFILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBa0osUUFBQSxRQUNDL0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFlLEtBQUssQ0FBQzJQLE9BQU8sQ0FBQzdPLEtBQUssQ0FBUyxFQUNwQzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0SCxZQUFBLENBQUFZLFdBQVc7Y0FBQ3pFLEtBQUssRUFBRTJNLE9BQU87Y0FBRTNJLE9BQU8sRUFBRSxDQUFDRCxZQUFZLEVBQUUsR0FBR0MsT0FBTyxDQUFDO2NBQUUxQyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUN0RjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBbkcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNGLEtBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVVzVyxpQkFBaUJBLENBQUM7WUFBRUMsS0FBSztZQUFFdkksSUFBSTtZQUFFMkQsS0FBSztZQUFFb0IsUUFBUTtZQUFFN007VUFBUSxDQUFFO1lBQzNFLE1BQU07Y0FBRXpFLE1BQU07Y0FBRWtFLFFBQVE7Y0FBRS9ELEtBQUs7Y0FBRUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUVoRSxNQUFNLENBQUM0SCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1SixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTThRLFlBQVksR0FBR3pQLEtBQUssSUFBRztjQUM1QixNQUFNd0UsTUFBTSxHQUFHeEUsS0FBSyxDQUFDd0IsYUFBYTtjQUNsQzZILElBQUksQ0FBQzdFLE1BQU0sQ0FBQ3BHLElBQUksQ0FBQyxHQUFHb0csTUFBTSxDQUFDdkUsS0FBSztjQUNoQ3NCLFFBQVEsQ0FBQ3lMLEtBQUssRUFBRTNELElBQUksQ0FBQztZQUN0QixDQUFDO1lBRUQsT0FDQ2pPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBeUUsS0FBSztjQUNMN0QsUUFBUSxFQUFFa08sWUFBWTtjQUN0QjFSLEtBQUssRUFBRWQsS0FBSyxDQUFDeUcsS0FBSyxDQUFDNEcsT0FBTyxDQUFDdk0sS0FBSztjQUNoQ2tFLFdBQVcsRUFBRWhGLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ21PLFFBQVEsQ0FBQzVQLFdBQVc7Y0FDN0NoQyxLQUFLLEVBQUVvSixJQUFJLENBQUNqTCxJQUFJO2NBQ2hCQSxJQUFJLEVBQUMsTUFBTTtjQUNYOEQsT0FBTyxFQUFDO1lBQVUsRUFDakIsRUFDRjlHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFvQixRQUFRO2NBQ1JSLFFBQVEsRUFBRWtPLFlBQVk7Y0FDdEIxUixLQUFLLEVBQUVkLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ21PLFFBQVEsQ0FBQzlULEtBQUs7Y0FDakNrQyxLQUFLLEVBQUVvSixJQUFJLENBQUNpQixPQUFPO2NBQ25CckksV0FBVyxFQUFFaEYsS0FBSyxDQUFDeUcsS0FBSyxDQUFDNEcsT0FBTyxDQUFDckksV0FBVztjQUM1QzdELElBQUksRUFBQyxTQUFTO2NBQ2Q4RCxPQUFPLEVBQUM7WUFBVSxFQUNqQixFQUNEMFAsS0FBSyxHQUFHLENBQUMsSUFDVHhXLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQytGLE9BQU8sRUFBQyxNQUFNO2NBQUN0RyxPQUFPLEVBQUVBLENBQUEsS0FBTXdTLFFBQVEsQ0FBQ3BCLEtBQUs7WUFBQyxHQUNuRCxHQUFHLEVBQ0gvUCxLQUFLLENBQUNlLE9BQU8sQ0FBQzJOLE1BQU0sQ0FDYixDQUVWLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQXZRLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXlXLGtCQUFBLEdBQUF6VyxPQUFBO1VBRU0sU0FBVTBXLGFBQWFBLENBQUM7WUFBRWxVLFFBQVEsR0FBR1A7VUFBUyxDQUFFO1lBQ3JELE1BQU07Y0FBRVIsTUFBTTtjQUFFa0UsUUFBUTtjQUFFL0Q7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN0RCxNQUFNLENBQUM2VSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN1csTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM3QixNQUFNLENBQUM0RyxLQUFLLEVBQUVtTyxRQUFRLEVBQUU5RCxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ3ZGLE1BQU0sQ0FBQzdKLEtBQUssRUFBRWdPLFFBQVEsQ0FBQyxHQUFHOVcsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQ3ZDN0IsTUFBTSxDQUFDNEcsS0FBSyxDQUFDbU8sUUFBUSxDQUFDOUQsTUFBTSxHQUFHalIsTUFBTSxDQUFDNEcsS0FBSyxDQUFDbU8sUUFBUSxHQUFHLENBQUM7Y0FBRXpULElBQUksRUFBRSxFQUFFO2NBQUVrTSxPQUFPLEVBQUU7WUFBRSxDQUFFLENBQUMsQ0FDbEY7WUFFRCxNQUFNZ0QsS0FBSyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEIyRSxhQUFhLENBQUNELFVBQVUsR0FBRyxDQUFDLENBQUM7Y0FDN0JFLFFBQVEsQ0FBQyxDQUFDLEdBQUdoTyxLQUFLLEVBQUU7Z0JBQUU5RixJQUFJLEVBQUUsRUFBRTtnQkFBRWtNLE9BQU8sRUFBRTtjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxNQUFNNkgsTUFBTSxHQUFHLEVBQUU7WUFDakIsTUFBTS9ELFFBQVEsR0FBR3BCLEtBQUssSUFBRztjQUN4QixNQUFNb0YsUUFBUSxHQUFHbE8sS0FBSyxDQUFDbU8sS0FBSyxDQUFDLENBQUMsRUFBRXJGLEtBQUssQ0FBQyxDQUFDc0YsTUFBTSxDQUFDcE8sS0FBSyxDQUFDbU8sS0FBSyxDQUFDckYsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQ3JFaUYsYUFBYSxDQUFDRyxRQUFRLENBQUNyRSxNQUFNLENBQUM7Y0FDOUJtRSxRQUFRLENBQUNFLFFBQVEsQ0FBQztjQUNsQnBSLFFBQVEsQ0FBQztnQkFBRTBDLEtBQUssRUFBRTtrQkFBRSxHQUFHNUcsTUFBTSxDQUFDNEcsS0FBSztrQkFBRXRGLElBQUksRUFBRWdVO2dCQUFRLENBQUU7Z0JBQUV6USxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUNELE1BQU00USxZQUFZLEdBQUdBLENBQUN2RixLQUFLLEVBQUUvTSxLQUFLLEtBQUk7Y0FDckMsTUFBTXdCLElBQUksR0FBR3lDLEtBQUs7Y0FDbEJ6QyxJQUFJLENBQUN1TCxLQUFLLENBQUMsR0FBRy9NLEtBQUs7Y0FDbkJpUyxRQUFRLENBQUN6USxJQUFJLENBQUM7Y0FDZFQsUUFBUSxDQUFDO2dCQUFFMEMsS0FBSyxFQUFFO2tCQUFFLEdBQUc1RyxNQUFNLENBQUM0RyxLQUFLO2tCQUFFbU8sUUFBUSxFQUFFcFE7Z0JBQUksQ0FBRTtnQkFBRUUsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFDRCxLQUFLLElBQUl5QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0TixVQUFVLEVBQUUsRUFBRTVOLENBQUMsRUFBRTtjQUNwQytOLE1BQU0sQ0FBQzdOLElBQUksQ0FDVmxKLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM0VixrQkFBQSxDQUFBSCxpQkFBaUI7Z0JBQ2pCcFEsUUFBUSxFQUFFZ1IsWUFBWTtnQkFDdEJYLEtBQUssRUFBRUksVUFBVTtnQkFDakIzSSxJQUFJLEVBQUVuRixLQUFLLENBQUNFLENBQUMsQ0FBQztnQkFDZGdLLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJ4RSxHQUFHLEVBQUUsUUFBUXhGLENBQUMsRUFBRTtnQkFDaEI0SSxLQUFLLEVBQUU1STtjQUFDLEVBQ1AsQ0FDRjs7WUFHRixPQUNDaEosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBU3FDLFNBQVMsRUFBQztZQUFrQixHQUNuQzRULE1BQU0sRUFDUC9XLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQyxTQUFTLEVBQUM7WUFBeUMsR0FDekRWLFFBQVEsSUFDUnpDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDK0YsT0FBTyxFQUFDLFNBQVM7Y0FBQ29ELFFBQVE7Y0FBQzFKLE9BQU8sRUFBRWlDO1lBQVEsR0FDbERaLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTixNQUFNLENBRXRCLEVBRUR0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQytGLE9BQU8sRUFBQyxTQUFTO2NBQUN0RyxPQUFPLEVBQUUwUjtZQUFLLEdBQ3RDclEsS0FBSyxDQUFDZSxPQUFPLENBQUN3UCxHQUFHLENBQ1YsQ0FDRCxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNURBLElBQUFwUyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBbVgsY0FBQSxHQUFBblgsT0FBQTtVQUNBLElBQUE2TyxXQUFBLEdBQUE3TyxPQUFBO1VBRU0sU0FBVW9YLGtCQUFrQkEsQ0FBQztZQUFFNVU7VUFBUSxDQUFFO1lBQzlDLE1BQU07Y0FBRWYsTUFBTTtjQUFFRztZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzVDLE1BQU0sQ0FBQzRILGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzVKLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNdUcsYUFBYSxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNNkQsUUFBUSxHQUFHLENBQUMvTCxNQUFNLENBQUM0RyxLQUFLLENBQUNnUCxJQUFJLElBQUksQ0FBQzVWLE1BQU0sQ0FBQzRHLEtBQUssQ0FBQ2lQLFVBQVUsSUFBSSxDQUFDN1YsTUFBTSxDQUFDNEcsS0FBSyxDQUFDbU8sUUFBUSxFQUFFOUQsTUFBTTtZQUNqRyxNQUFNOUksYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSW5JLE1BQU0sQ0FBQzZFLE9BQU8sRUFBRTtnQkFDbkJxRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEbkgsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1ULFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCNEgsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCbkgsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE9BQ0N6QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUUsS0FBQSxDQUFBa0IsSUFBSSxRQUNKekcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NXLGNBQUEsQ0FBQVQsYUFBYSxPQUFHLEVBQ2pCM1csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUErQixHQUNoRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUVxSixhQUFhO2NBQUUvQyxPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtZQUFBLEdBQ3hEckksS0FBSyxDQUFDZSxPQUFPLENBQUNOLE1BQU0sQ0FDYixFQUNUdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dPLFdBQUEsQ0FBQUMsVUFBVTtjQUFDSSxRQUFRLEVBQUUxTSxRQUFRO2NBQUVnTCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM5QyxFQUNSOUQsZUFBZSxJQUNmM0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFUyxRQUFRLEVBQUVxSDtZQUFhLEdBQzFEOUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FBTWUsS0FBSyxDQUFDc0ksTUFBTSxDQUFDN0gsTUFBTSxDQUFPLENBRWpDLENBQ0s7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQXRDLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVV1WCxZQUFZQSxDQUFDO1lBQUVuUjtVQUFJLENBQStDO1lBQ2pGLE9BQ0NyRyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQWdCLEdBQzlCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUFZLEdBQUVrRCxJQUFJLENBQUNyRCxJQUFJLEUsS0FBWSxFLEtBQUNoRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxlQUFPdUYsSUFBSSxDQUFDNkksT0FBTyxDQUFRLENBQzVFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQWxQLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFzRixLQUFBLEdBQUF0RixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFtWCxjQUFBLEdBQUFuWCxPQUFBO1VBQ0EsSUFBQTZPLFdBQUEsR0FBQTdPLE9BQUE7VUFFTSxTQUFVd1gsZ0JBQWdCQSxDQUFDO1lBQUVoVjtVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFZixNQUFNO2NBQUVrRSxRQUFRO2NBQUUvRDtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXRELE1BQU0sQ0FBQzRILGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzVKLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNNEMsUUFBUSxHQUFHdkIsS0FBSyxJQUFHO2NBQ3hCLE1BQU13RSxNQUFNLEdBQUd4RSxLQUFLLENBQUN3QixhQUFhO2NBQ2xDLE1BQU1rQyxLQUFLLEdBQUc7Z0JBQUUsR0FBRzVHLE1BQU0sQ0FBQzRHO2NBQUssQ0FBRTtjQUVqQzFDLFFBQVEsQ0FBQztnQkFBRTBDLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNjLE1BQU0sQ0FBQ3BHLElBQUksR0FBR29HLE1BQU0sQ0FBQ3ZFO2dCQUFLLENBQUU7Z0JBQUUwQixPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUVELE1BQU1zRCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJbkksTUFBTSxDQUFDNkUsT0FBTyxFQUFFO2dCQUNuQnFELGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRURuSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTVQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEI0SCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJuSCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTXFILGFBQWEsR0FBR0EsQ0FBQSxLQUFNRixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTZELFFBQVEsR0FBRyxDQUFDL0wsTUFBTSxDQUFDNEcsS0FBSyxDQUFDZ1AsSUFBSSxJQUFJLENBQUM1VixNQUFNLENBQUM0RyxLQUFLLENBQUNpUCxVQUFVLElBQUksQ0FBQzdWLE1BQU0sQ0FBQzRHLEtBQUssQ0FBQ21PLFFBQVEsRUFBRTlELE1BQU07WUFFakcsT0FDQzNTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBa0osUUFBQSxRQUNDL0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQWtCLElBQUksUUFDSnpHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5RSxLQUFBLENBQUFvQixRQUFRO2NBQ1JSLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnhELEtBQUssRUFBRWQsS0FBSyxDQUFDeUcsS0FBSyxDQUFDZ1AsSUFBSSxDQUFDM1UsS0FBSztjQUM3QmtDLEtBQUssRUFBRW5ELE1BQU0sQ0FBQzRHLEtBQUssQ0FBQ2dQLElBQUk7Y0FDeEJ6USxXQUFXLEVBQUVoRixLQUFLLENBQUN5RyxLQUFLLENBQUNnUCxJQUFJLENBQUN6USxXQUFXO2NBQ3pDN0QsSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGaEQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQW9CLFFBQVE7Y0FDUlIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCeEQsS0FBSyxFQUFFZCxLQUFLLENBQUN5RyxLQUFLLENBQUNpUCxVQUFVLENBQUM1VSxLQUFLO2NBQ25Da0MsS0FBSyxFQUFFbkQsTUFBTSxDQUFDNEcsS0FBSyxDQUFDaVAsVUFBVTtjQUM5QjFRLFdBQVcsRUFBRWhGLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ2lQLFVBQVUsQ0FBQzFRLFdBQVc7Y0FDL0M3RCxJQUFJLEVBQUM7WUFBWSxFQUNoQixFQUNGaEQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NXLGNBQUEsQ0FBQVQsYUFBYSxPQUFHLEVBQ2pCM1csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBQztZQUErQixHQUNoRG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUVxSixhQUFhO2NBQUUvQyxPQUFPLEVBQUMsU0FBUztjQUFDb0QsUUFBUTtZQUFBLEdBQ3hEckksS0FBSyxDQUFDZSxPQUFPLENBQUNOLE1BQU0sQ0FDYixFQUNUdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dPLFdBQUEsQ0FBQUMsVUFBVTtjQUFDSSxRQUFRLEVBQUUxTSxRQUFRO2NBQUVnTCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM5QyxFQUNSOUQsZUFBZSxJQUNmM0osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFUyxRQUFRLEVBQUVxSDtZQUFhLEdBQzFEOUosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FBTWUsS0FBSyxDQUFDc0ksTUFBTSxDQUFDN0gsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1LLE1BQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBb0ssU0FBQSxHQUFBcEssT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBc0YsS0FBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUEwTCxLQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQXlYLGFBQUEsR0FBQXpYLE9BQUE7VUFDQSxJQUFBMFgsYUFBQSxHQUFBMVgsT0FBQTtVQUVNLFNBQVVvUSxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRTNPLE1BQU07Y0FBRUMsUUFBUTtjQUFFaUUsUUFBUTtjQUFFL0Q7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNnVSxVQUFVLEVBQUV2TCxTQUFTLENBQUMsR0FBR3hLLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNxVSxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHN1gsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELE1BQU11VSxjQUFjLEdBQUdBLENBQUEsS0FBTUQsZUFBZSxDQUFDLENBQUNELFlBQVksQ0FBQztZQUMzRCxJQUFBdE4sTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQzlJLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQyxFQUFFLE1BQU0xQyxRQUFRLENBQUNqRSxRQUFRLENBQUMrSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRWxGLE1BQU0yRSxZQUFZLEdBQUdBLENBQUEsS0FBTTdFLFNBQVMsQ0FBQyxDQUFDdUwsVUFBVSxDQUFDO1lBRWpELElBQUlBLFVBQVUsRUFBRSxPQUFPL1YsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQWtTLGdCQUFnQjtjQUFDaFYsUUFBUSxFQUFFNE07WUFBWSxFQUFJO1lBRW5FLElBQUksQ0FBQzNOLE1BQU0sQ0FBQzRHLEtBQUssQ0FBQ21PLFFBQVEsSUFBSSxDQUFDL1UsTUFBTSxDQUFDNEcsS0FBSyxDQUFDZ1AsSUFBSSxJQUFJLENBQUM1VixNQUFNLENBQUM0RyxLQUFLLENBQUNpUCxVQUFVLEVBQUU7Y0FDN0U7OztjQUdBLE9BQU92WCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0osTUFBQSxDQUFBTyxVQUFVO2dCQUFDM0gsSUFBSSxFQUFDLFFBQVE7Z0JBQUM0SCxRQUFRLEVBQUV5RTtjQUFZLEVBQUk7O1lBRzVELE9BQ0NyUCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SixTQUFBLENBQUFRLGdCQUFnQjtjQUFDN0gsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNoQ2hELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SixTQUFBLENBQUFRLGdCQUFnQjtjQUFDN0gsSUFBSSxFQUFDO1lBQVksRUFBRyxFQUN0Q2hELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBc0IsR0FDcENuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRcUMsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDeUcsS0FBSyxDQUFDbU8sUUFBUSxDQUFDclUsS0FBSyxDQUFNLEVBQ3JDcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBa0IsVUFBVTtjQUFDSixJQUFJLEVBQUMsTUFBTTtjQUFDUixPQUFPLEVBQUVzWDtZQUFjLEVBQUksQ0FDM0MsRUFDUkYsWUFBWSxHQUNaNVgsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZXLGFBQUEsQ0FBQU4sa0JBQWtCO2NBQUM1VSxRQUFRLEVBQUVxVjtZQUFjLEVBQUksR0FFaEQ5WCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssS0FBQSxDQUFBYSxJQUFJO2NBQ0pySixTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDMkYsS0FBSyxFQUFFcEgsTUFBTSxDQUFDNEcsS0FBSyxDQUFDbU8sUUFBUTtjQUM1Qm5PLEtBQUssRUFBRSxFQUFFO2NBQ1RtRSxPQUFPLEVBQUVpTCxhQUFBLENBQUFGO1lBQVksRUFFdEIsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUF4WCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUYsR0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQThYLGNBQUEsR0FBQTlYLE9BQUE7VUFDQSxJQUFBK1gsV0FBQSxHQUFBL1gsT0FBQTtVQUNBLElBQUFnWSxXQUFBLEdBQUFoWSxPQUFBO1VBQ0EsSUFBQXFLLE1BQUEsR0FBQXJLLE9BQUE7VUFFTztVQUFVLFNBQVVpWSxjQUFjQSxDQUFDLEVBQUU7WUFDM0MsTUFBTTtjQUFFdlcsUUFBUTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ3NMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3ROLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUM0VSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcFksTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsR0FBRzVCLFFBQVEsQ0FBQ3dXLE9BQU8sVUFBVSxDQUFDO1lBQzNFLE1BQU1FLGlCQUFpQixHQUFHQSxDQUFBLEtBQU0vSyxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTXBJLEdBQUcsR0FBRyw2REFBNkQ7WUFDekUsTUFBTTdCLE1BQU0sR0FBRyxNQUFNd0IsS0FBSyxJQUFJLE1BQU1qRCxRQUFRLENBQUNnRCxJQUFJLENBQUM7Y0FBRXZDLEtBQUssRUFBRXdDLEtBQUssQ0FBQ3dFLE1BQU0sQ0FBQ3ZFO1lBQUssQ0FBRSxDQUFDO1lBQ2hGLE1BQU1rSCxVQUFVLEdBQUc1RCxLQUFLLElBQUl4RyxRQUFRLENBQUMyVyxlQUFlLENBQUNuUSxLQUFLLENBQUM7WUFFM0QsSUFBQW1DLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM5SSxRQUFRLENBQUMsRUFBRSxNQUFNeVcsVUFBVSxDQUFDLEdBQUd6VyxRQUFRLENBQUN3VyxPQUFPLFlBQVlJLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRXZHLE9BQ0N4WSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXFDLFNBQVMsRUFBRThCO1lBQUcsR0FDckJqRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFTcUMsU0FBUyxFQUFDO1lBQTZDLEdBQy9EbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21YLFdBQUEsQ0FBQVEsVUFBVTtjQUNWclcsS0FBSyxFQUFFUCxLQUFLLENBQUNzVyxPQUFPLENBQUMvVixLQUFLO2NBQzFCSSxXQUFXLEVBQUVYLEtBQUssQ0FBQ3NXLE9BQU8sQ0FBQzNWLFdBQVc7Y0FDdENrVyxXQUFXLEVBQUUvVyxRQUFRLENBQUNnWCxrQkFBa0I7Y0FDeENSLE9BQU8sRUFBRUEsT0FBTztjQUNoQnBNLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGL0wsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUF5QixHQUN2Q25ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrWCxXQUFBLENBQUEzUSxnQkFBZ0IsT0FBRyxFQUNwQnJILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF6QyxlQUFlO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNDLFFBQVEsRUFBQyxJQUFJO2NBQUNHLE1BQU0sRUFBRUE7WUFBTSxHQUN4RHpCLFFBQVEsQ0FBQ1MsS0FBSyxDQUNFLENBQ2IsQ0FDRyxDQUNGLEVBRVRwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVgsY0FBQSxDQUFBclMsd0JBQXdCO2NBQUNsRSxJQUFJLEVBQUU2TCxlQUFlO2NBQUUxSCxJQUFJLEVBQUVoRSxRQUFRLENBQUNnRSxJQUFJO2NBQUVsRSxPQUFPLEVBQUU0VztZQUFpQixFQUFJLENBQzNGO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFyWSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBdUYsR0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFJLFlBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFxSyxNQUFBLEdBQUFySyxPQUFBO1VBQ0EsSUFBQTJZLGVBQUEsR0FBQTNZLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE0WSxVQUFBLEdBQUE1WSxPQUFBO1VBQ0EsSUFBQTZZLE1BQUEsR0FBQTdZLE9BQUE7VUFDQSxJQUFBNlYsT0FBQSxHQUFBN1YsT0FBQTtVQUVPO1VBQVksU0FBVThZLGtCQUFrQkEsQ0FBQztZQUFFblgsS0FBSztZQUFFRDtVQUFRLENBQUU7WUFDbEUsTUFBTSxDQUFDRCxNQUFNLEVBQUVxRSxTQUFTLENBQUMsR0FBRy9GLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUF3QjVCLFFBQVEsQ0FBQytJLE9BQU8sRUFBRSxDQUFDO1lBQ3JGLE1BQU0sQ0FBQ3NPLFVBQVUsRUFBRW5YLEtBQUssQ0FBQyxHQUFHLElBQUF5SSxNQUFBLENBQUEyTyxRQUFRLEVBQUNMLGVBQUEsQ0FBQTdRLE1BQVksQ0FBQ21SLFNBQVMsQ0FBQztZQUM1RCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdwWixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTTtjQUFFb0M7WUFBSSxDQUFFLEdBQUdoRSxRQUFRO1lBQ3pCLE1BQU0wWCxTQUFTLEdBQUd6WCxLQUFLLENBQUMwWCxhQUFhLENBQUNDLEdBQUcsQ0FBQzVULElBQUksQ0FBQztZQUMvQyxNQUFNQyxRQUFRLEdBQUdTLElBQUksSUFBRztjQUN2QixNQUFNbVQsU0FBUyxHQUFHO2dCQUFFLEdBQUc5WCxNQUFNO2dCQUFFLEdBQUcyRTtjQUFJLENBQUU7Y0FDeENOLFNBQVMsQ0FBQ3lULFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsTUFBTTFYLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCSCxRQUFRLENBQUMwRyxTQUFTLENBQUN5SixLQUFLLEVBQUU7Y0FDMUIvTCxTQUFTLENBQUNwRSxRQUFRLENBQUMrSSxPQUFPLEVBQUUsQ0FBQztZQUM5QixDQUFDO1lBRUQsSUFBSSxDQUFDMk8sU0FBUyxFQUFFLE1BQU0sSUFBSUksS0FBSyxDQUFDLHFCQUFxQjlULElBQUksbUJBQW1CLENBQUM7WUFDN0UsSUFBSSxDQUFDcVQsVUFBVSxFQUFFLE9BQU9oWixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUF1WixPQUFPO2NBQUNoTCxNQUFNLEVBQUU7WUFBSSxFQUFJO1lBRWpELE9BQ0MxTyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxRQUFBLENBQUFpSSxhQUFhLENBQUNvUSxRQUFRO2NBQ3RCOVUsS0FBSyxFQUFFO2dCQUNObEQsUUFBUTtnQkFDUkUsS0FBSztnQkFDTEQsS0FBSztnQkFDTEYsTUFBTTtnQkFDTkksU0FBUztnQkFDVHlFLE9BQU8sRUFBRTdFLE1BQU0sQ0FBQzZFLE9BQU87Z0JBQ3ZCWCxRQUFRO2dCQUNSdVQsVUFBVTtnQkFDVkMsYUFBYTtnQkFDYnhZLGFBQWEsRUFBRVAsWUFBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWE7Z0JBQ3pDeVk7O1lBQ0EsR0FFRHJaLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUFvVSxhQUFhLFFBQ2I1WixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1YsT0FBQSxDQUFBb0MsY0FBYyxPQUFHLEVBQ2xCbFksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLFVBQUEsQ0FBQWdCLHNCQUFzQixPQUFHLEVBQzFCN1osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dZLE1BQUEsQ0FBQS9JLGdCQUFnQjtjQUFDcEssSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDakIsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7VUN0REE7O1VBRUFtVSxNQUFBLENBQUFDLGNBQUEsQ0FBQXpVLE9BQUE7WUFDQVQsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE3RSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVU4TyxVQUFVQSxDQUFDO1lBQUV0QixRQUFRO1lBQUUwQjtVQUFRLENBQWlEO1lBQy9GLE1BQU07Y0FBRXpOLE1BQU07Y0FBRWtFLFFBQVE7Y0FBRS9ELEtBQUs7Y0FBRUQsS0FBSztjQUFFRDtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZFLE1BQU1xQixNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCOzs7OztjQUtBLE1BQU14QixLQUFLLENBQUM2RixLQUFLLENBQUNLLFVBQVUsQ0FBQ2lKLEdBQUcsQ0FBQ3dJLEdBQUcsQ0FBQzVYLFFBQVEsQ0FBQytGLEVBQUUsQ0FBQyxDQUFDb0osR0FBRyxDQUFDcFAsTUFBTSxDQUFDO2NBQzdELE1BQU1DLFFBQVEsQ0FBQ21QLEdBQUcsQ0FBQ3BQLE1BQU0sQ0FBQztjQUUxQmtFLFFBQVEsQ0FBQztnQkFBRVcsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzVCM0UsS0FBSyxDQUFDK0MsSUFBSSxFQUFFO2NBQ1osSUFBSXdLLFFBQVEsRUFBRUEsUUFBUSxFQUFFO1lBQ3pCLENBQUM7WUFDRCxNQUFNYixLQUFLLEdBQUc7Y0FBRWIsUUFBUSxFQUFFLENBQUMvTCxNQUFNLENBQUM2RSxPQUFPLElBQUlrSCxRQUFRO2NBQUVqTixPQUFPLEVBQUU0QztZQUFNLENBQUU7WUFFeEUsT0FDQ3BELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDK0YsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLd0g7WUFBSyxHQUNqQ3pNLEtBQUssQ0FBQ2UsT0FBTyxDQUFDK0IsSUFBSSxDQUNYO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUEzRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUErWixnQkFBQSxHQUFBL1osT0FBQTtVQUNNLFNBQVU0SyxnQkFBZ0JBLENBQUM7WUFBRTdIO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUV0QixNQUFNO2NBQUVHLEtBQUs7Y0FBRUYsUUFBUTtjQUFFaUU7WUFBUSxDQUFFLEdBQUcsSUFBQXRFLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTXFCLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVKLElBQUk7Y0FBRTZCO1lBQUssQ0FBRSxLQUFJO2NBQ3hDLE1BQU1sRCxRQUFRLENBQUNnRCxJQUFJLENBQUM7Z0JBQUUyRCxLQUFLLEVBQUU7a0JBQUUsR0FBRzVHLE1BQU0sQ0FBQzRHLEtBQUs7a0JBQUUsQ0FBQ3RGLElBQUksR0FBRzZCO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO2NBQ2xFZSxRQUFRLENBQUM7Z0JBQUUwQyxLQUFLLEVBQUU7a0JBQUUsR0FBRzVHLE1BQU0sQ0FBQzRHLEtBQUs7a0JBQUUsQ0FBQ3RGLElBQUksR0FBRzZCO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUdsRCxRQUFRLENBQUMyRyxLQUFLLENBQUN0RixJQUFJLENBQUMsSUFBSW5CLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ3RGLElBQUksQ0FBQyxDQUFDNkQsV0FBVztZQUNuRSxPQUNDN0csTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUFhLEdBQzNCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VJLE9BQU8sRUFBQztZQUFFLEdBQUV4SCxLQUFLLENBQUN5RyxLQUFLLENBQUN0RixJQUFJLENBQUMsQ0FBQ0wsS0FBSyxDQUFTLEVBQ25EM0MsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2taLGdCQUFBLENBQUFqWCxlQUFlO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFSSxNQUFNLEVBQUVBO1lBQU0sR0FDekN5QixLQUFLLENBQ1csQ0FDYjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBN0UsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVGLEdBQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFnYSxXQUFBLEdBQUFoYSxPQUFBO1VBQ0EsSUFBQXdGLFNBQUEsR0FBQXhGLE9BQUE7VUFFQTs7Ozs7O1VBTU0sU0FBVTBLLFVBQVVBLENBQUM7WUFBRTNILElBQUk7WUFBRTRILFFBQVE7WUFBRXBDLGVBQWUsR0FBRztVQUFFLENBQUU7WUFDbEUsTUFBTTtjQUFFM0csS0FBSztjQUFFRjtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ3NMLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3ROLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNa0ssUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDOUwsUUFBUSxDQUFDdVk7WUFBUSxDQUFFO1lBQ2pELE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNN00sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBRTdELE9BQ0NyTixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQy9KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUFtSCxTQUFTO2NBQ1R4SixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCWixJQUFJLEVBQUVWLEtBQUssQ0FBQ2lHLFVBQVUsQ0FBQzhFLEtBQUssQ0FBQ3hLLEtBQUs7Y0FDbENJLFdBQVcsRUFBRVgsS0FBSyxDQUFDaUcsVUFBVSxDQUFDOEUsS0FBSyxDQUFDcEs7WUFBVyxHQUUvQ3hDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQytGLE9BQU8sRUFBQyxTQUFTO2NBQUNvRCxRQUFRO2NBQUMxSixPQUFPLEVBQUVvSztZQUFRLEdBQ2xEL0ksS0FBSyxDQUFDZSxPQUFPLENBQUN1SCxNQUFNLENBQ2IsRUFDVG5LLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxTQUFBLENBQUFuRixRQUFRO2NBQUEsR0FBS21OLFFBQVE7Y0FBRWpOLE9BQU8sRUFBRTJaLFVBQVU7Y0FBRXJULE9BQU8sRUFBQztZQUFTLEdBQzVEakYsS0FBSyxDQUFDZSxPQUFPLENBQUMwRCxRQUFRLENBQ2IsQ0FDTixFQUNOdEcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUE0QixFQUFPLENBQ3ZDLEVBQ1hrSyxlQUFlLElBQ2ZyTixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVosV0FBQSxDQUFBMVIscUJBQXFCO2NBQUM1QyxJQUFJLEVBQUUzQyxJQUFJO2NBQUV2QixPQUFPLEVBQUUwWSxVQUFVO2NBQUUzUixlQUFlLEVBQUVBO1lBQWUsRUFDeEYsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBeEksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBdUYsR0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFtYSxTQUFBLEdBQUFuYSxPQUFBO1VBRUE7Ozs7Ozs7VUFPTSxTQUFVNFosc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRW5ZLE1BQU07Y0FBRUcsS0FBSztjQUFFRixRQUFRO2NBQUVpRSxRQUFRO2NBQUVoRTtZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3ZFLE1BQU1zWSxZQUFZLEdBQUcsTUFBQUEsQ0FBTztjQUFFalUsYUFBYSxFQUFFO2dCQUFFcEQsSUFBSTtnQkFBRTZCO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDakUsTUFBTWxELFFBQVEsQ0FBQ21QLEdBQUcsQ0FBQztnQkFBRSxDQUFDOU4sSUFBSSxHQUFHNkI7Y0FBSyxDQUFFLENBQUM7Y0FDckMsTUFBTWpELEtBQUssQ0FBQytDLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTXZCLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVnRCxhQUFhLEVBQUU7Z0JBQUVwRCxJQUFJO2dCQUFFNkI7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUMzRCxNQUFNbEQsUUFBUSxDQUFDbVAsR0FBRyxDQUFDO2dCQUFFeEksS0FBSyxFQUFFO2tCQUFFLEdBQUczRyxRQUFRLENBQUMyRyxLQUFLO2tCQUFFLENBQUN0RixJQUFJLEdBQUc2QjtnQkFBSztjQUFFLENBQUUsQ0FBQztjQUNuRSxNQUFNakQsS0FBSyxDQUFDK0MsSUFBSSxFQUFFO1lBQ25CLENBQUM7WUFDRCxNQUFNRSxLQUFLLEdBQUduRCxNQUFNLENBQUM0RyxLQUFLLENBQUNnUyxTQUFTLElBQUl6WSxLQUFLLENBQUN5RyxLQUFLLENBQUNnUyxTQUFTLENBQUN6VCxXQUFXO1lBRXpFLElBQUksQ0FBQ2xGLFFBQVEsQ0FBQzJHLEtBQUssQ0FBQ2lTLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUVqRSxPQUNDeGEsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFrSixRQUFBLFFBQ0MvSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUMsU0FBUyxFQUFDO1lBQWEsR0FDM0JuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1osU0FBQSxDQUFBNUosYUFBYSxPQUFHLENBQ1osRUFDTnhRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQyxTQUFTLEVBQUM7WUFBYSxHQUMzQm5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGdCQUFRZSxLQUFLLENBQUNpRyxVQUFVLENBQUN0RixXQUFXLENBQVMsRUFDN0N4QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsR0FBQSxDQUFBekMsZUFBZTtjQUFDQyxJQUFJLEVBQUMsYUFBYTtjQUFDQyxRQUFRLEVBQUMsR0FBRztjQUFDRyxNQUFNLEVBQUVpWDtZQUFZLEdBQ25FMVksUUFBUSxDQUFDYSxXQUFXLENBQ0osQ0FDYixFQUNOeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3FDLFNBQVMsRUFBQztZQUFhLEdBQzNCbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFlLEtBQUssQ0FBQ3lHLEtBQUssQ0FBQ2dTLFNBQVMsQ0FBQzNYLEtBQUssQ0FBUyxFQUM1QzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRSxHQUFBLENBQUF6QyxlQUFlO2NBQUNDLElBQUksRUFBQyxXQUFXO2NBQUNJLE1BQU0sRUFBRUE7WUFBTSxHQUM5Q3lCLEtBQUssQ0FDVyxDQUNiLENBQ0o7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==