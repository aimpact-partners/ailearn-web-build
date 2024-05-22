System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.33.dev-01/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.33.dev-01/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.33.dev-01/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.33.dev-01/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.33.dev-01/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.33.dev-01/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.33.dev-01/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0033Dev01ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0033Dev01ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0033Dev01CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0033Dev01CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0033Dev01ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0033Dev01ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0033Dev01Config) {
      dependency_14 = _aimpactAilearnApp0033Dev01Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0033Dev01ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0033Dev01ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp0033Dev01ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp0033Dev01ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0033Dev01ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0033Dev01ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.33.dev-01"], ["@aimpact/ailearn-app", "0.0.33.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.33.dev-01/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.33.dev-01/modules/management/activity.code');
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
        hash: 182458646,
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
              activity,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [error, setError] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  const response = await activity.specs.generate(notes, {
                    ...suggestionSpecs
                  });
                  console.log(20, response);
                  //controlled error
                  if (response.error) {
                    const textError = texts.errors?.[response.error] ? texts.errors?.[response.error] + ` ${response.fields}` : texts.errors.default;
                    setError(textError);
                    setFetching(false);
                    return;
                  }
                  const specs = {
                    ...values.specs,
                    questions: response.questions.map(item => ({
                      ...item,
                      correctAnswer: item.correct_answer
                    }))
                  };
                  await activity.set({
                    specs
                  });
                  editData({
                    specs
                  });
                  onClose();
                  setTimeout(() => {
                    setFetching(false);
                  }, 1000);
                } catch (e) {
                  console.log('we got an error', e.message);
                  console.error(e);
                }
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Form, null, _react.default.createElement(_ui.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
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
        hash: 4126988329,
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
        hash: 3807880146,
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
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onManual = () => {
              console.log('si');
              editData({
                specs: activity.specs.getData()
              });
            };
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
        hash: 998091985,
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

      /**************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/answers/footer
      **************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/answers/footer', {
        hash: 4211204766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersFooter = DynamicAnswersFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../../../context");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function DynamicAnswersFooter({
            disabled,
            onAdd,
            showed
          }) {
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            const {
              addItem
            } = (0, _dynamicList.useDynamicListContext)();
            const onClick = event => {
              if (!showed) {
                return onAdd(true);
              }
              addItem();
            };
            return _react.default.createElement("section", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              title: texts.actions.addAnswer,
              onClick: onClick,
              disabled: disabled
            }, texts.actions.addAnswer));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/answers/index
      *************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/answers/index', {
        hash: 3175510660,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersForm = DynamicAnswersForm;
          var _react = require("react");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _item = require("./item");
          var _footer = require("./footer");
          function DynamicAnswersForm({
            show,
            answers,
            onChange,
            disabled
          }) {
            const [added, setAdded] = _react.default.useState(false);
            return _react.default.createElement(Dynamic.Provider, {
              name: "question-answers",
              className: "answer-questions-form__container",
              value: answers,
              Item: _item.DynamicQuestionAnswerItem,
              onChange: onChange
            }, (show || added) && _react.default.createElement(Dynamic.List, {
              className: "dynamic-form"
            }), _react.default.createElement(_footer.DynamicAnswersFooter, {
              showed: show || added,
              disabled: disabled,
              onAdd: setAdded
            }));
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/answers/item
      ************************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/answers/item', {
        hash: 569073849,
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
            const onChange = event => {
              props.setValue({
                value: event.target.value,
                correct: !!correct
              });
            };
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

      /******************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/header
      ******************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/header', {
        hash: 3404883918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicHeader = DynamicHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../../context");
          function DynamicHeader() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            let {
              actions
            } = texts.multipleChoice;
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const onGenerate = async () => {
              const response = await activity.specs.generate();
              const questions = response.questions.map(({
                question,
                options,
                correct_answer
              }) => ({
                question,
                options,
                correctAnswer: correct_answer
              }));
              editData({
                specs: {
                  ...values.specs,
                  questions
                },
                updated: true
              });
            };
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: toggleModal
            }, actions.generateQuestions), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              onClose: toggleModal,
              title: texts.multipleChoice.modalQuestions.title,
              descripction: texts.multipleChoice.modalQuestions.description,
              onGenerate: onGenerate
            }));
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
        hash: 3212015501,
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
          var _header = require("./header");
          function DynamicQuestionsForm() {
            const {
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
                options: item.options,
                correctAnswer: item.correctAnswer
              }));
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
            }, _react.default.createElement(_header.DynamicHeader, null), _react.default.createElement(Dynamic.List, {
              className: "dynamic-form dynamic-questions-form"
            }), _react.default.createElement(_actions.DynamicActions, null));
          }
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/questions/question
      ********************************************************************/

      ims.set('./forms/multiple-choice/body/form/questions/question', {
        hash: 782648975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionItem = DynamicQuestionItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
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
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            globalThis.activity = activity;
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const processOptions = () => {
              const correctIndex = props.value.correctAnswer;
              return props.value.options.map((option, index) => ({
                value: option,
                correct: index === correctIndex
              }));
            };
            const {
              removeItem
            } = (0, _dynamicList.useDynamicListContext)();
            const onChange = event => {
              props.setValue({
                question: event.target.value,
                options: answers
              });
            };
            const getAnswer = ({
              currentTarget: {
                value: answers
              }
            }) => {
              const correctAnswerIndex = answers.findIndex(answer => answer.correct);
              const correctAnswer = correctAnswerIndex === -1 ? undefined : correctAnswerIndex;
              const newValue = {
                question: value,
                options: answers.map(item => item.value),
                correctAnswer
              };
              props.setValue(newValue);
            };
            let answers = props.value?.options ? processOptions() : [];
            const [showAnswers, setShowAnswers] = _react.default.useState(answers.length);
            const value = props.value?.question ?? '';
            const deleteItem = () => removeItem(props.index);
            const generateAnswers = async () => {
              const promise = new _core.PendingPromise();
              toggleModal();
              setTimeout(() => {
                promise.resolve();
              }, 1000);
              return promise;
            };
            const onGenerateAnswers = async ({
              notes
            }) => {
              const options = await activity.specs.questions[props.index].generateAnswers({
                notes
              });
              props.setValue({
                question: value,
                options
              });
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
            }, _react.default.createElement(_ui.ProcessIconButton, {
              icon: "aiStars",
              onClick: generateAnswers,
              title: texts.actions.generateAnswers
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "drag-bullet-point",
              onClick: deleteItem,
              title: texts.actions.delete
            }))), _react.default.createElement(_answers.DynamicAnswersForm, {
              disabled: !props.value,
              show: showAnswers,
              answers: answers,
              onChange: getAnswer
            }), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              onClose: toggleModal,
              title: texts.modalAnswers.title,
              descripction: texts.modalAnswers.description,
              onGenerate: onGenerateAnswers
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
        hash: 3629205671,
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
            }, data.question)), data.options?.length ? _react.default.createElement(_list.List, {
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
        hash: 3170852206,
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
            const toggleEdition = async () => {
              await editData({
                specs: activity.specs.getData()
              });
              setEdition(!edition);
            };
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
            //empty activity case
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
        hash: 35300791,
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
              texts
            } = (0, _context.useModuleContext)();
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
              className: "main__control"
            }), _react.default.createElement(_form.Textarea, {
              onChange: handleChange,
              label: texts.specs.criteria.label,
              value: item.subject,
              placeholder: texts.specs.subject.placeholder,
              name: "subject"
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
        hash: 1309929856,
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
            const [items, setItems] = _react.default.useState(values.specs.criteria.length ? [...values.specs.criteria] : [{
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
        hash: 691427879,
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
              texts,
              editData,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onModalCancel = () => setShowCanceLModal(false);
            const disabled = !values.specs.task || !values.specs.assessment || !values.specs.criteria?.length;
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              activity.specs.clear();
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              activity.specs.clear();
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            return _react.default.createElement(_form.Form, {
              className: "activity__form"
            }, _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "section-actions__container actions-end no-border"
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
        hash: 1276844059,
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
              texts,
              activity
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
              activity.specs.clear();
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            const onConfirm = () => {
              activity.specs.clear();
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            const validCriteria = values.specs.criteria?.reduce((acc, item) => acc && !!item.name && !!item.subject, true);
            const disabled = !values.specs.task || !values.specs.assessment || !values.specs.criteria?.length;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity__form"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.specs.task,
              label: texts.specs.task.label,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.specs.assessment,
              label: texts.specs.assessment.label,
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
        hash: 3417517690,
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
            const toggleManual = () => {
              editData({
                specs: activity.specs.getData()
              });
              setManual(!manualForm);
            };
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
            }) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h6", null, texts.spoken.criteria.label), _react.default.createElement(_icons.Icon, {
              icon: "edit",
              className: "icon-clickable",
              onClick: toggleCriteria
            })), _react.default.createElement(_list.List, {
              className: "criteria__items-list",
              items: values.specs.criteria,
              specs: {},
              control: _criteriaItem.CriteriaItem
            }))));
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
        hash: 1749911432,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJBcHBJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwibG9nIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwicXVlc3Rpb25zIiwibWFwIiwiaXRlbSIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsInNldCIsIm1lc3NhZ2UiLCJFcnJvclJlbmRlcmVyIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwibW9kZWwiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkNsaWNrQ2FuY2VsIiwib25Nb2RhbENhbmNlbCIsIkZyYWdtZW50IiwiSW5wdXQiLCJyb2xlIiwiYm9yZGVyZWQiLCJTYXZlQnV0dG9uIiwibWFudWFsIiwiX2VtcHR5IiwiX2Jhc2VTcGVjIiwiX2hvb2tzIiwiQ2hhcmFjdGVyVGFsa0Zvcm0iLCJzZXRNYW51YWwiLCJ1c2VCaW5kZXIiLCJnZXREYXRhIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJfbWFudWFsIiwiX2xpc3QiLCJfY29uZmlnIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiY29udGVudCIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwiSXRlbSIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJDb250ZW50VGhlb3J5Rm9ybSIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImluZGV4IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJfaGVhZGVyIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwic2hvd0Fuc3dlcnMiLCJzZXRTaG93QW5zd2VycyIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiYXMiLCJBbnN3ZXJzIiwiZW1wdHlPcHRpb25zIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwib25FZGl0Iiwib25SZW9yZGVyIiwiZWRpdEF0dHJzIiwicmVvcmRlckF0dHJzIiwib3JkZXIiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsInNldE9yZGVyIiwib3V0cHV0IiwiUmVvcmRlciIsIkdyb3VwIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJidWxsZXRQb2ludCIsImFkZCIsImZpbHRlciIsImluZGVwZW5kZW50IiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsIm9uRGVsZXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiY2xlYXIiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwidmFsaWRDcml0ZXJpYSIsInJlZHVjZSIsImFjYyIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwibWFudWFsRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfc3BlY3MiLCJfZm9ybXMiLCJfb2JqZWN0aXZlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJpdGVtc1R5cGUiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiZmluYWxEYXRhIiwiRXJyb3IiLCJTcGlubmVyIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwic2F2ZUVkaXRhYmxlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUwsWUFBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxDQUFDO1lBQzdELE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxD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