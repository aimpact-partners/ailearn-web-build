System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.43/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.43/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.43/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.43/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.43/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.43/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.43/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0043ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0043ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0043CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0043CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0043ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0043ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0043Config) {
      dependency_14 = _aimpactAilearnApp0043Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0043ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0043ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_21 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_aimpactAilearnApp0043ComponentsUiBulletPointsInput) {
      dependency_23 = _aimpactAilearnApp0043ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0043ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0043ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.43"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.43/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['framer-motion', dependency_22], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.43/modules/management/activity.code');
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
        hash: 1572699143,
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
        hash: 948271612,
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
            const [disabled, setDisabled] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, {
              setError: setError,
              error: error
            }), _react.default.createElement(_empty.EmptySpecs, {
              name: "multiple-choice",
              onManual: openManual,
              disabled: !!error,
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
        hash: 2429795119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _context = require("../../../../context");
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
              editData({
                specs: activity.specs.getData()
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_manual.ManualForm, {
              onCancel: onManual
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./forms/multiple-choice/body/form/manual
      ********************************************************/

      ims.set('./forms/multiple-choice/body/form/manual', {
        hash: 1691182910,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ManualForm({
            onCancel
          }) {
            const {
              values,
              texts,
              store,
              activity
            } = (0, _context.useModuleContext)();
            const [errors, setErrors] = _react.default.useState([]);
            const ref = _react.default.useRef(null);
            const onSave = async () => {
              const {
                questions
              } = values.specs;
              const wrongs = [];
              questions.forEach((question, index) => {
                if (!question?.question || !question?.options.length || !question?.correctAnswer) {
                  console.log(0.2);
                  wrongs.push(index);
                  return;
                }
                const empties = question.options.filter(item => item.value === '');
                if (empties.length > 0) {
                  console.log(0.3, empties);
                  wrongs.push(index);
                }
              });
              if (wrongs.length) {
                setErrors(wrongs);
                return;
              }
              await store.model.activities.map.get(activity.id).set(values);
              await activity.set(values);
              store.save();
              onCancel();
            };
            _react.default.useEffect(() => {
              if (!errors.length) return;
              const container = ref.current;
              container.querySelectorAll('.dynamic-question-item__container').forEach((item, index) => {
                if (!errors.includes(index)) return;
                item.classList.add('question--error');
                item.addEventListener('focusin', () => {
                  item.classList.remove('question--error');
                });
                globalThis.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                // globalThis.setTimeout(() => item.classList.remove('question--error'), 2000);
              });
            }, [errors]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.ErrorRenderer, {
              error: errors.length ? texts.errors.wrongQuestions : ''
            }), _react.default.createElement("section", {
              ref: ref,
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_questions.DynamicQuestionsForm, null), _react.default.createElement("footer", {
              className: "section-actions__container border-top actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              saved: true,
              callback: onSave
            }))));
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
        hash: 376603310,
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
              texts,
              store
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
                  questions: order
                };
                console.log(1, 'order', specs.questions.map(item => item.question));
                await activity.specs.set(specs);
                editData({
                  specs,
                  updated: false
                });
                await store.save();
                // await activity.specs.set(specs);
                // toggle();
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
        hash: 851230001,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _context = require("../../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function RelatedActivityField({
            setError,
            error
          }) {
            const {
              store,
              texts: {
                multipleChoice: texts,
                errors
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
              if (event.target.value !== '') {
                const related = store.model.activities.map.get(event.target.value);
                if (!related.materials.article) {
                  setError(errors.relatedArticle);
                  return;
                }
              }
              setError('');
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
            }), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              texts: errors
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
        hash: 3068182093,
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
              console.log(90);
              setManual(!manualForm);
            };
            if (!manualForm && (!values.specs.criteria || !values.specs.task || !values.specs.assessment)) {
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
        hash: 1693297214,
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
              if (!saved) {
                await store.model.activities.map.get(activity.id).set(values);
                await activity.set(values);
                store.save();
              }
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
        hash: 3379564028,
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
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
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
              ...attrs,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiX2Zvcm0iLCJfdWkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsInNldFRpbWVvdXQiLCJNb2RhbCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwiZ2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWxldGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsInNldERpc2FibGVkIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwic2V0RXJyb3JzIiwib25TYXZlIiwicXVlc3Rpb25zIiwid3JvbmdzIiwiaW5kZXgiLCJsZW5ndGgiLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImdldCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9pdGVtIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJSZWZpbmVtZW50TW9kYWwiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwic2V0U2hvd0Fuc3dlcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiU3Bpbm5lciIsIlBhZ2VDb250YWluZXIiLCJHZW5lcmFsQWN0aXZpdHlGaWVsZHMiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIl9sYW5ndWFnZSIsInNhdmVFZGl0YWJsZSIsInNlbGVjdG9yIiwicHJvcGVydGllcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxZQUFBLENBQUFNLFlBQVksQ0FBQ0MsYUFBYSxDQUFDSixPQUFPLENBQUM7WUFDN0QsT0FDQ1IsTUFBQSxDQUFBYSxP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