System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.45/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.45/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.45/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.45/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.45/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.45/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0045ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0045CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0045CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_14 = _aimpactAilearnApp0045Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0045ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0045ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_21 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_aimpactAilearnApp0045ComponentsUiBulletPointsInput) {
      dependency_23 = _aimpactAilearnApp0045ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0045ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0045ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['framer-motion', dependency_22], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/modules/management/activity.code');
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
        hash: 1821268521,
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
              item: type
            }) => {
              const {
                activity
              } = (0, _context.useModuleContext)();
              const url = activity.materials.audios[type]?.url;
              if (!url) return null;
              return _react.default.createElement("div", {
                className: "audio-item flex-container flex-flex-vertical-center flex-space-between"
              }, _react.default.createElement("h5", null, texts.materials[type]), _react.default.createElement("div", {
                className: "audio-player"
              }, _react.default.createElement("audio", {
                controls: true,
                preload: "metadata"
              }, _react.default.createElement("source", {
                src: url,
                type: "audio/mp3"
              }), "Your browser does not support the audio element.")));
            };
            const {
              audios
            } = activity.materials;
            if (audios) {
              const items = Object.keys(audios);
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
                className: "list-unstyled",
                items: items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiX2Zvcm0iLCJfdWkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsInNldFRpbWVvdXQiLCJNb2RhbCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwiZ2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiYXVkaW9zIiwiT2JqZWN0Iiwia2V5cyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiQ29udGVudFRoZW9yeUZvcm0iLCJ0YWJzIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJEZWJhdGVGb3JtIiwidG9nZ2xlTWFudWFsIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZGVsZXRlTW9kYWwiLCJBY3Rpdml0eUJhc2VGb3JtIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJ0b2dnbGVFZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiU3Bva2VuRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiZGVsZXRlIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldCIsInNhdmUiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJzZXREaXNhYmxlZCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsInNldEVycm9ycyIsIm9uU2F2ZSIsInF1ZXN0aW9ucyIsIndyb25ncyIsImluZGV4IiwibGVuZ3RoIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJnZXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnbG9iYWxUaGlzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfaXRlbSIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsIl9oZWFkZXIiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzaG93QW5zd2VycyIsInNldFNob3dBbnN3ZXJzIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJhcyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiQW5zd2VycyIsIkNvbnRyb2wiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJlZGl0QXR0cnMiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsInNldE9yZGVyIiwib3V0cHV0IiwiUmVvcmRlciIsIkdyb3VwIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJidWxsZXRQb2ludCIsImluZGVwZW5kZW50IiwicmVsYXRlZEFydGljbGUiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuQ3JpdGVyaWFGb3JtIiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwiY2xlYXIiLCJ2YWxpZENyaXRlcmlhIiwicmVkdWNlIiwiYWNjIiwiX2NyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZvcm0iLCJtYW51YWxGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJEYXRlIiwibm93IiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQ29udGVudEVkaXRhYmxlIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L0F1ZGlvUGxheWVyLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUwsWUFBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxDQUFDO1lBQzdELE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdB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