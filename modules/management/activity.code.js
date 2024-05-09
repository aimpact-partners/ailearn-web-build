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
        hash: 3632271496,
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
            const [picture, setPicture] = _react.default.useState(activity.picture ? `${activity.picture}?size=sm` : undefined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwidHlwZXMiLCJkYXRhVHlwZSIsImlkIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIkZyYWdtZW50IiwiSW5wdXQiLCJyb2xlIiwiYm9yZGVyZWQiLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiX3NhdmVCdXR0b24iLCJTYXZlQnV0dG9uIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQW5zd2VyRm9ybSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJ0b2dnbGVBbnN3ZXJGb3JtIiwiY2xlYXIiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiYWRkIiwiX2l0ZW0iLCJPcHRpb25BbnN3ZXJzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJzZXRPcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImxlbmd0aCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJtYXJrIiwicHJldmVudERlZmF1bHQiLCJvbkRlbGV0ZSIsInJlbW92ZU9wdGlvbiIsIkNoaXAiLCJzaXppbmciLCJtdWx0aXBsZUNob2ljZSIsImxhYmVscyIsIl9hbnN3ZXJzIiwiSXRlbU9wdGlvbiIsInNob3dBbnN3ZXJGb3JtIiwic2hvd0Fuc3dlckZvcm1JbiIsIkFuc3dlckZvcm1WaXNpYmxlIiwicXVlc3Rpb25zIiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYW5zd2VycyIsIk1hbnVhbEZvcm0iLCJfb3B0aW9uc0hlYWRlciIsIl91c2VCdWxsZXRQb2ludFNldHRpbmdzIiwic2V0RXJyb3IiLCJzZXRBbnN3ZXJzIiwiYWN0aW9uc1NwZWNzIiwidXNlQnVsbGV0UG9pbnRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZSIsIkJ1bGxldFBvaW50c0lucHV0IiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiQW5zd2VycyIsImFuc3dlciIsImVtcHR5T3B0aW9ucyIsIl9jb3JlIiwicXVlc3Rpb25MYWJlbHMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJzZXRVcGRhdGUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVxdWlyZVZhbHVlIiwiSGVhZGVyIiwic3BlY3NFZGl0aW9uIiwic2V0U3BlY3NFZGl0aW9uIiwidG9nZ2xlIiwiX2hlYWRlciIsIm1hbnVhbEZvcm0iLCJjbG9zZU1hbnVhbCIsIm9uQmluZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJidWxsZXRQb2ludCIsImZpbHRlciIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImFzIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvbnRlbnRFZGl0YWJsZSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsInNhdmVFZGl0YWJsZSIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9mb3JtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2Nob2ljZXMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9jaG9pY2VzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3VzZS1idWxsZXQtcG9pbnQtc2V0dGluZ3MudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxZQUFB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