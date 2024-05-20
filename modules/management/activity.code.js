System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.48/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-dev.48/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32-dev.48/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.32-dev.48/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.32-dev.48/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev48ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032Dev48ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Dev48CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032Dev48CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_14 = _aimpactAilearnApp0032Dev48Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0032Dev48ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0032Dev48ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp0032Dev48ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0032Dev48ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0032Dev48ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/modules/management/activity.code');
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
        hash: 1873205410,
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
        hash: 2349643226,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersForm = DynamicAnswersForm;
          var _react = require("react");
          var _context = require("../../../../../../context");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var Dynamic = _dynamicList;
          var _item = require("./item");
          var _components = require("pragmate-ui/components");
          function DynamicAnswersForm({
            show,
            answers,
            onChange,
            disabled
          }) {
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            const {
              addItem
            } = (0, _dynamicList.useDynamicListContext)();
            return _react.default.createElement(Dynamic.Provider, {
              name: "question-answers",
              className: "answer-questions-form__container",
              value: answers,
              Item: _item.DynamicQuestionAnswerItem,
              onChange: onChange
            }, _react.default.createElement(Dynamic.List, {
              className: "dynamic-form"
            }), _react.default.createElement("section", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              title: texts.actions.addAnswer,
              onClick: addItem,
              disabled: disabled
            }, texts.actions.addAnswer)));
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
        hash: 3670580626,
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
            const addAnswers = () => setShowAnswers(true);
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
            const [showAnswers, setShowAnswers] = _react.default.useState(false);
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
              show: true,
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
        hash: 4085890340,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJzYXZlIiwiZXZlbnQiLCJ2YWx1ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbHMiLCJjb250cm9sQ2xzIiwicmVmIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiZXhwb3J0cyIsIl9mb3JtIiwiX3VpIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsImVkaXREYXRhIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsIk1vZGFsIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkljb24iLCJBcHBJY29uIiwiYWN0aXZpdGllcyIsIm1vZHVsZSIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwibWF0ZXJpYWxzIiwic3BlY3MiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwibG9nIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3NhdmVCdXR0b24iLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJtYW51YWwiLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsImdldERhdGEiLCJFbXB0eVNwZWNzIiwib25NYW51YWwiLCJBY3Rpdml0eUJhc2VTcGVjIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsImNhbGxiYWNrIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2RlbGV0ZU1vZGFsIiwiQWN0aXZpdHlCYXNlRm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIm9uRWRpdCIsImVkaXRBdHRycyIsImRlbGV0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsInF1ZXN0aW9ucyIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pYyIsIl9pdGVtIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsImFkZEFuc3dlciIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiaW5kZXgiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY29ycmVjdEFuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJfaGVhZGVyIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImFkZEFuc3dlcnMiLCJzZXRTaG93QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwic2hvd0Fuc3dlcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsImFzIiwiQW5zd2VycyIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyIiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJzZXRPcmRlciIsIm91dHB1dCIsIlJlb3JkZXIiLCJHcm91cCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsImFkZEJ1bGxldFBvaW50IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiYnVsbGV0UG9pbnQiLCJhZGQiLCJmaWx0ZXIiLCJpbmRlcGVuZGVudCIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvbkFkZCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwibWFudWFsRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfc3BlY3MiLCJfZm9ybXMiLCJfb2JqZWN0aXZlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJpdGVtc1R5cGUiLCJhY3Rpdml0eVR5cGVzIiwiZ2V0IiwiZmluYWxEYXRhIiwiY2xlYXIiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxZQUFBLENBQUFNLFlBQVksQ0FBQ0MsYUFBYSxDQUFDSixPQUFPLENBQUM7WUFDN0QsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUEsR0FBS04sS0FBSztjQUFFTyxJQUFJLEVBQUVkLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPO2NBQUVWLE9BQU8sRUFBRUU7WUFBVyxHQUMxREgsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVZ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