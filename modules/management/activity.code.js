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
        hash: 2362978363,
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
              store.setBreadcrumb();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibW9kZWwiLCJpZCIsIkxpbmsiLCJJY29uIiwiYmFjayIsImFjdGl2aXRpZXMiLCJtb2R1bGUiLCJ0eXBlcyIsImRhdGFUeXBlIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJGcmFnbWVudCIsIklucHV0Iiwicm9sZSIsImJvcmRlcmVkIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiX2hvb2tzIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJ1c2VCaW5kZXIiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiX3NhdmVCdXR0b24iLCJTYXZlQnV0dG9uIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiY2xlYXIiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiYWRkIiwiX2l0ZW0iLCJPcHRpb25BbnN3ZXJzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJzZXRPcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImFzIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsInNhdmVFZGl0YWJsZSIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lB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