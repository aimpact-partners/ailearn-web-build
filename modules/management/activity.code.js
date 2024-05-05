System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui/bullet-points-input", "pragmate-ui@0.1.1/chips", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, OptionAnswers, ItemOption, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_7 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_10 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_12 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_13 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
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
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/form/react-select', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-sdk/config', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_17], ['pragmate-ui/chips', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['@aimpact/ailearn-app/components/cover-image.code', dependency_20]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ1F1ZXN0aW9ucyIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJpZCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJGcmFnbWVudCIsIklucHV0Iiwicm9sZSIsImJvcmRlcmVkIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiX2hvb2tzIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJ1c2VCaW5kZXIiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiX3NhdmVCdXR0b24iLCJTYXZlQnV0dG9uIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiY2xlYXIiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiYWRkIiwiX2l0ZW0iLCJPcHRpb25BbnN3ZXJzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJzZXRPcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImFzIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsInNhdmVFZGl0YWJsZSIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUss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