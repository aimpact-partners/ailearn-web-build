System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui/bullet-points-input", "pragmate-ui@0.1.1/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_14 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_18], ['pragmate-ui/chips', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['@aimpact/ailearn-app/components/cover-image.code', dependency_21]]);
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
        hash: 559422192,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onBack = () => {
              _coinsLayout.LayoutBroker.trimBreadcrumb(1);
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
        hash: 1845183190,
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
              texts,
              editData
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState(`${activity.picture}?size=sm`);
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-module__container  flex-container flex-space-between`;
            const onSave = async event => {
              const data = {
                title: event.target.value
              };
              editData(data);
              await activity.save(data);
            };
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
              as: "h3",
              onSave: onSave
            }, activity.title ?? texts.form.title)))), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 4058066515,
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
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            globalThis.activity = activity;
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_specs.GeneralActivityFields, null), _react.default.createElement(_forms.ActivityBaseForm, {
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

      /*****************************
      INTERNAL MODULE: ./specs/index
      *****************************/

      ims.set('./specs/index', {
        hash: 1288385182,
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
          var _objective = require("./objective");
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
            }, activity.description)), _react.default.createElement(_objective.ActivityObjectiveSpecs, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInRyaW1CcmVhZGNydW1iIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1vZGVsIiwiaWQiLCJMaW5rIiwiSWNvbiIsImJhY2siLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJ0YXJnZXQiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIm1hbnVhbCIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiZ2V0RGF0YSIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX21hbnVhbCIsIl9saXN0IiwiX2NvbmZpZyIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwibG9nIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiSXRlbSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpdGVtIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIl9zYXZlQnV0dG9uIiwiU2F2ZUJ1dHRvbiIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJjYWxsYmFjayIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJmb3JtcyIsImRlYmF0ZSIsInNwb2tlbiIsIlNwb2tlbkZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJkZWxldGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0IiwibWFwIiwic2F2ZWQiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkFuc3dlckZvcm0iLCJxdWVzdGlvbiIsImluZGV4IiwidG9nZ2xlQW5zd2VyRm9ybSIsImNsZWFyIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0Iiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkFkZCIsImFkZE9wdGlvbiIsImFkZCIsIl9pdGVtIiwiT3B0aW9uQW5zd2VycyIsImNvcnJlY3QiLCJzZXRDb3JyZWN0Iiwic2V0T3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJsZW5ndGgiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwibWFyayIsInByZXZlbnREZWZhdWx0Iiwib25EZWxldGUiLCJyZW1vdmVPcHRpb24iLCJDaGlwIiwic2l6aW5nIiwibXVsdGlwbGVDaG9pY2UiLCJsYWJlbHMiLCJfYW5zd2VycyIsIkl0ZW1PcHRpb24iLCJzaG93QW5zd2VyRm9ybSIsInNob3dBbnN3ZXJGb3JtSW4iLCJBbnN3ZXJGb3JtVmlzaWJsZSIsInF1ZXN0aW9ucyIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFuc3dlcnMiLCJNYW51YWxGb3JtIiwiX29wdGlvbnNIZWFkZXIiLCJfdXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsInNldEVycm9yIiwic2V0QW5zd2VycyIsImFjdGlvbnNTcGVjcyIsInVzZUJ1bGxldFBvaW50U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2UiLCJCdWxsZXRQb2ludHNJbnB1dCIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIkFuc3dlcnMiLCJhbnN3ZXIiLCJlbXB0eU9wdGlvbnMiLCJfY29yZSIsInF1ZXN0aW9uTGFiZWxzIiwiYWRkQW5zd2VyIiwic2V0QWRkQW5zd2VyIiwic2V0VXBkYXRlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVpcmVWYWx1ZSIsIkhlYWRlciIsInNwZWNzRWRpdGlvbiIsInNldFNwZWNzRWRpdGlvbiIsInRvZ2dsZSIsIl9oZWFkZXIiLCJtYW51YWxGb3JtIiwiY2xvc2VNYW51YWwiLCJvbkJpbmRlciIsInJlZmluZUFjdGlvbiIsImFkZEJ1bGxldFBvaW50IiwiYnVsbGV0UG9pbnQiLCJmaWx0ZXIiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib3V0cHV0IiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuQ3JpdGVyaWFGb3JtIiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwiX2NyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJhcyIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfc3BlY3MiLCJfZm9ybXMiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJHZW5lcmFsQWN0aXZpdHlGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jb250ZW50RWRpdGFibGUiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJzYXZlRWRpdGFibGUiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvZm9ybS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vY2hvaWNlcy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS91c2UtYnVsbGV0LXBvaW50LXNldHRpbmdzLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZ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