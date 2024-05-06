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
        hash: 3309774354,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJpZCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJGcmFnbWVudCIsIklucHV0Iiwicm9sZSIsImJvcmRlcmVkIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiX2hvb2tzIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJ1c2VCaW5kZXIiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiX3NhdmVCdXR0b24iLCJTYXZlQnV0dG9uIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiY2xlYXIiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiYWRkIiwiX2l0ZW0iLCJPcHRpb25BbnN3ZXJzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJzZXRPcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImFzIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsInNhdmVFZGl0YWJsZSIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFB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