System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.34.dev-01/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.34.dev-01/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.34.dev-01/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.34.dev-01/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AudioPlayer, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0034Dev01ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0034Dev01ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0034Dev01CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0034Dev01CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0034Dev01ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0034Dev01Config) {
      dependency_14 = _aimpactAilearnApp0034Dev01Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0034Dev01ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0034Dev01ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_21 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUiBulletPointsInput) {
      dependency_23 = _aimpactAilearnApp0034Dev01ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0034Dev01ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0034Dev01ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.34.dev-01"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['framer-motion', dependency_22], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.34.dev-01/modules/management/activity.code');
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
        hash: 3386163319,
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
          var _modal = require("pragmate-ui/modal");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts,
              values
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity = undefined;
              store.setBreadcrumb();
              _routing.routing.back();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity = undefined;
              store.setBreadcrumb();
              _routing.routing.back();
            };
            const onModalCancel = () => setShowCanceLModal(false);
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
            }), _react.default.createElement("span", null, texts.actions.back, " ", texts.activities.module)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
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
        hash: 2953786438,
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
            callback,
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
                  const specs = activity.specs.getData();
                  console.log(33, specs);
                  // await activity.set({ specs });
                  editData({
                    specs
                  });
                  // onClose();
                  setTimeout(() => {
                    setFetching(false);
                  }, 1000);
                } catch (e) {
                  console.log('we got an error', e.message);
                  console.error(e);
                }
              }
            };
            const onClick = callback ?? events.onClick;
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
        hash: 3132427329,
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
              texts
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
              className: "section-actions__container actions-end border-top"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 1036904397,
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
                className: "list-unstyled",
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
        hash: 1124374791,
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
              className: "content-theory__tabs ",
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
        hash: 4000207373,
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
              className: "section-actions__container actions-end"
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
        hash: 2217101849,
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
        hash: 4280406465,
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
            if (type === 'spoken') return _react.default.createElement(_spoken.SpokenForm, null);
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
        hash: 463685516,
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
              className: "section-actions__container actions-end"
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
        hash: 3959656546,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("section", {
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

      /********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/manual
      ********************************************************/

      ims.set('./forms/multiple-choice/body/form/manual', {
        hash: 2915253956,
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
              className: "section-actions__container border-top actions-end"
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
        hash: 3692925222,
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
              className: "section-actions__container actions-end no-m no-p stretch"
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
        hash: 3006866304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicHeader = DynamicHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../../../context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                  questions: [...values.specs.questions, ...questions]
                },
                updated: true
              });
            };
            const onClick = () => _coinsLayout.LayoutBroker.ensureCredits(toggleModal);
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end border-bottom"
            }, _react.default.createElement(_ui.AIButton, {
              variant: "link",
              onClick: onClick
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
        hash: 2259167476,
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
          var _collapsible = require("pragmate-ui/collapsible");
          function QuestionItemList({
            data,
            as = 'li',
            draggable = false
          }) {
            const [isDragging, setIsDragging] = _react.default.useState(false);
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
            const onToggle = () => !isDragging;
            return _react.default.createElement(Control, {
              className: "subform__items"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, draggable ? _react.default.createElement(_icons.Icon, {
              className: "item-list-icon",
              icon: "drag"
            }) : _react.default.createElement(_icons.Icon, {
              className: "item-list-icon",
              icon: "circle-check"
            }), _react.default.createElement("span", {
              className: "item-list__content"
            }, data.question))), _react.default.createElement(_collapsible.CollapsibleContent, {
              onToggle: onToggle
            }, data.options?.length ? _react.default.createElement(_list.List, {
              items: data.options,
              control: Answers
            }) : _react.default.createElement("div", {
              className: "text-end text-danger"
            }, texts.multipleChoice.emptyOptions))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/multiple-choice/index
      *********************************************/

      ims.set('./forms/multiple-choice/index', {
        hash: 3322061107,
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
            const orderLabel = !redordering ? texts.actions.order : texts.actions.cancel;
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
            }, orderLabel), _react.default.createElement(_components.Button, {
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
        hash: 2186914017,
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
                const specs = {
                  ...values.specs,
                  questions: [...values.specs.questions]
                };
                editData({
                  specs,
                  updated: false
                });
                await activity.specs.set(specs);
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
              }, _react.default.createElement(_saveButton.SaveButton, {
                saved: true,
                callback: callback
              })));
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
        hash: 945060312,
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
              const data = {
                ...item
              };
              data[target.name] = target.value;
              onChange(index, data);
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
        hash: 1383492319,
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
                  criteria: elements
                },
                updated: true
              });
            };
            const onChangeItem = (index, value) => {
              const data = [...items];
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
        hash: 1245134839,
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
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            return _react.default.createElement(_form.Form, {
              className: "activity__form"
            }, _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "section-actions__container actions-end border-top"
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
        hash: 3132798405,
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
            const validCriteria = values.specs.criteria?.length && values.specs.criteria?.reduce((acc, item) => acc && !!item.name && !!item.subject, true);
            const disabled = !values.specs.task || !values.specs.assessment || !validCriteria;
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
        hash: 319775467,
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
          var _components = require("pragmate-ui/components");
          var _criteriaItem = require("./criteria-item");
          var _criteriaForm = require("./criteria-form");
          var _deleteModal = require("../delete-modal");
          function SpokenForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [editCriteria, setEditCriteria] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleCriteria = () => setEditCriteria(!editCriteria);
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            (0, _hooks.useBinder)([activity.specs], () => editData(activity.getData()), 'specs.generated');
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const toggleManual = () => {
              // editData({ specs: activity.specs.getData() });
              setManual(!manualForm);
            };
            if (!values.specs.criteria || !values.specs.task || !values.specs.assessment) {
              /**
               * Empty specs
               */
              return _react.default.createElement(_empty.EmptySpecs, {
                name: "spoken",
                onManual: toggleManual
              });
            }
            if (manualForm) return _react.default.createElement(_form.SpokenManualForm, {
              onCancel: toggleManual
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, texts.actions.delete))), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
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
            }))), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
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
        hash: 12305265,
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
            }, _react.default.createElement(_ui.PageContainer, {
              className: `activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_specs.GeneralActivityFields, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_forms.ActivityBaseForm, {
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
        hash: 4061288394,
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
            saved = false,
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
              if (saved) {
                await store.model.activities.map.get(activity.id).set(values);
                await activity.set(values);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiX2Zvcm0iLCJfdWkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsInNldFRpbWVvdXQiLCJNb2RhbCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRleHRFcnJvciIsImVycm9ycyIsImZpZWxkcyIsImdldERhdGEiLCJlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWxldGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJfcXVlc3Rpb25zIiwiTWFudWFsRm9ybSIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImluZGV4IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInF1ZXN0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIlJlZmluZW1lbnRNb2RhbCIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwiZ2xvYmFsVGhpcyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwic2V0U2hvd0Fuc3dlcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiYWRkIiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuQ3JpdGVyaWFGb3JtIiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwiY2xlYXIiLCJ2YWxpZENyaXRlcmlhIiwicmVkdWNlIiwiYWNjIiwiX2NyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZvcm0iLCJtYW51YWxGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJvblNhdmUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJEYXRlIiwibm93IiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQ29udGVudEVkaXRhYmxlIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUwsWUFBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxDQUFDO1lBQzdELE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFBLEdBQUtOLEtBQUs7Y0FBRU8sSUFBSSxFQUFFZCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTztjQUFFVixPQUFPLEVBQUVFO1lBQVcsR0FDMURILFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVWSxZQUFZQSxDQUFDO1lBQUVaLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdD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