System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.39/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.39/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.39/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.39/config", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.39/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.39/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.39/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0039ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0039ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0039CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0039CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0039ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0039ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0039Config) {
      dependency_14 = _aimpactAilearnApp0039Config;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_17 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_18 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0039ModulesManagementRefinamentCode) {
      dependency_19 = _aimpactAilearnApp0039ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_21 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_aimpactAilearnApp0039ComponentsUiBulletPointsInput) {
      dependency_23 = _aimpactAilearnApp0039ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0039ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0039ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.39"], ["@aimpact/ailearn-app", "0.0.39"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.39/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-sdk/config', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['framer-motion', dependency_22], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.39/modules/management/activity.code');
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
        hash: 3356805588,
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
            const onSave = () => {};
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
        hash: 291912894,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX2NvaW5zTGF5b3V0IiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJfY29udGV4dCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidmFsdWVzIiwiYWN0aXZpdHkiLCJzdG9yZSIsInRleHRzIiwiY2xlYXJEYXRhIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ29uZmlybSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwibW9kYWwiLCJjYW5jZWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiX2Zvcm0iLCJfdWkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJ0eXBlIiwiZWRpdERhdGEiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRWYWx1ZXMiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGF0YSIsImdlbmVyYXRlIiwidXBkYXRlZCIsInNldFRpbWVvdXQiLCJNb2RhbCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRleHRFcnJvciIsImVycm9ycyIsImZpZWxkcyIsImdldERhdGEiLCJlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYW51YWwiLCJfbGlzdCIsIl9jb25maWciLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50Iiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsImVtcHR5IiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIm9wZW5NYW51YWxGb3JtIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIl9jb250ZW50IiwiX3RhYnMiLCJfcGFuZSIsIl9hdWRpbyIsIkNvbnRlbnRUaGVvcnlGb3JtIiwidGFicyIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9kZWxldGVNb2RhbCIsIkFjdGl2aXR5QmFzZUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWxldGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsIm9uU2F2ZSIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImluZGV4IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInF1ZXN0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIlJlZmluZW1lbnRNb2RhbCIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwiZ2xvYmFsVGhpcyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsInNob3dBbnN3ZXJzIiwic2V0U2hvd0Fuc3dlcnMiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiYWRkIiwiZmlsdGVyIiwiaW5kZXBlbmRlbnQiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuQ3JpdGVyaWFGb3JtIiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwiY2xlYXIiLCJ2YWxpZENyaXRlcmlhIiwicmVkdWNlIiwiYWNjIiwiX2NyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZvcm0iLCJtYW51YWxGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJEYXRlIiwibm93IiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQ29udGVudEVkaXRhYmxlIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJFcnJvciIsIlNwaW5uZXIiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvQXVkaW9QbGF5ZXIudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxZQUFBLENBQUFNLFlBQVksQ0FBQ0MsYUFBYSxDQUFDSixPQUFPLENBQUM7WUFDN0QsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUEsR0FBS04sS0FBSztjQUFFTyxJQUFJLEVBQUVkLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPO2NBQUVWLE9BQU8sRUFBRUU7WUFBVyxHQUMxREgsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVZLFlBQVlBLENBQUM7WUFBRVosUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ3RFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxZQUFBLENBQUFNLFlBQVksQ0FBQ0MsYUFBYSxDQUFDSixPQUFPLENBQUM7WUFDN0QsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsT0FBQSxDQUFBZ0IsVUFBVTtjQUFBLEdBQUtYLEtBQUs7Y0FBRU8sSUFBSSxFQUFFZCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTztjQUFFVixPQUFPLEVBQUVFO1lBQVcsR0FDOURILFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBYyxNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDTSxTQUFVc0Isa0JBQWtCQSxDQUFDO1lBQUVDLElBQUk7WUFBRUM7VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLEtBQUs7Y0FBRUMsS0FBSztjQUFFQztZQUFTLENBQUUsR0FBRyxJQUFBUixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3hFLElBQUksQ0FBQ1AsSUFBSSxFQUFFLE9BQU8sS0FBSztZQUN2QixNQUFNUSxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QkYsU0FBUyxFQUFFO2NBQ1hGLEtBQUssQ0FBQ0ssWUFBWSxHQUFHQyxTQUFTO2NBQzlCVCxPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsT0FDQ3pCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQWMsWUFBWTtjQUNaWCxJQUFJO2NBQ0pZLEtBQUssRUFBRVAsS0FBSyxDQUFDUSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSztjQUMvQkcsSUFBSSxFQUFFVixLQUFLLENBQUNRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxXQUFXO2NBQ3BDZixPQUFPLEVBQUVBLE9BQU87Y0FDaEJnQixRQUFRLEVBQUVoQixPQUFPO2NBQ2pCaUIsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVkLEtBQUssQ0FBQ2UsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDNUNDLFNBQVMsRUFBRTtnQkFBRUgsS0FBSyxFQUFFZCxLQUFLLENBQUNlLE9BQU8sQ0FBQ047Y0FBTSxDQUFFO2NBQzFDTixTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZkEsU0FBUyxFQUFFO2NBQ1o7WUFBQyxFQUNBO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFoQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBRUEsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBZ0QsU0FBQSxHQUFBaEQsT0FBQTtVQUVBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBRU0sU0FBVWlELHdCQUF3QkEsQ0FBQztZQUFFMUIsSUFBSTtZQUFFMkIsSUFBSTtZQUFFMUI7VUFBTyxDQUFFO1lBQy9ELE1BQU07Y0FBRUksS0FBSztjQUFFRixRQUFRO2NBQUV5QjtZQUFRLENBQUUsR0FBRyxJQUFBOUIsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNLENBQUNzQixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzdCLE1BQU0sRUFBRThCLFNBQVMsQ0FBQyxHQUFHeEQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM7Y0FDMUNFLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQlA7YUFDQSxDQUFDO1lBRUYsSUFBSSxDQUFDM0IsSUFBSSxFQUFFLE9BQU8sS0FBSztZQUN2QixNQUFNbUMsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQkwsU0FBUyxDQUFDO2tCQUNULEdBQUc5QixNQUFNO2tCQUNULENBQUNtQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0MsSUFBSSxHQUFHRixLQUFLLENBQUNDLGFBQWEsQ0FBQ0U7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R4RCxPQUFPLEVBQUUsTUFBTXFELEtBQUssSUFBRztnQkFDdEJQLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1XLElBQUksR0FBRyxNQUFNdEMsUUFBUSxDQUFDdUMsUUFBUSxDQUFDZixJQUFJLEVBQUV6QixNQUFNLENBQUMrQixZQUFZLENBQUM7Z0JBQy9ETCxRQUFRLENBQUM7a0JBQUUsR0FBR2EsSUFBSTtrQkFBRUUsT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFDckMxQyxPQUFPLEVBQUU7Z0JBQ1QyQyxVQUFVLENBQUMsTUFBTWQsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztjQUMzQzthQUNBO1lBRUQsT0FDQ3RELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQWdELEtBQUs7Y0FBQzdDLElBQUk7Y0FBQzhDLFNBQVMsRUFBQyxjQUFjO2NBQUM3QyxPQUFPLEVBQUVBO1lBQU8sR0FDcER6QixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ3BDLEtBQUssQ0FBTSxFQUM3QnBDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGVBQU9lLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ2hDLFdBQVcsQ0FBUSxDQUMvQixFQUNUeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBCLFFBQVE7Y0FDUjlCLEtBQUssRUFBRWQsS0FBSyxDQUFDMkMsTUFBTSxDQUFDRSxRQUFRLENBQUMvQixLQUFLO2NBQ2xDb0IsSUFBSSxFQUFDLGNBQWM7Y0FDbkJDLEtBQUssRUFBRXRDLE1BQU0sQ0FBQytCLFlBQVk7Y0FDMUJHLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCZSxXQUFXLEVBQUU5QyxLQUFLLENBQUMyQyxNQUFNLENBQUNFLFFBQVEsQ0FBQ0M7WUFBVyxFQUM3QyxDQUNJLEVBRVAzRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQStCLEdBQ2hEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21DLFNBQUEsQ0FBQTNDLFFBQVE7Y0FBQ3NFLE9BQU8sRUFBQyxTQUFTO2NBQUNwRSxPQUFPLEVBQUVtRCxNQUFNLENBQUNuRDtZQUFPLEdBQ2pEcUIsS0FBSyxDQUFDZSxPQUFPLENBQUNzQixRQUFRLENBQ2IsQ0FDSCxFQUNUbEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQTZCLGdCQUFnQjtjQUFDeEIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQXJELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTZFLFFBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNNLFNBQVU4RSxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFcEQsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUg7WUFBTSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM3RCxNQUFNLENBQUNpRCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqRixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTJCLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUl4RCxNQUFNLENBQUN5QyxPQUFPLEVBQUU7Z0JBQ25CYyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEckQsS0FBSyxDQUFDSyxZQUFZLEdBQUdDLFNBQVM7Y0FDOUJOLEtBQUssQ0FBQ3VELGFBQWEsRUFBRTtjQUNyQkwsUUFBQSxDQUFBTSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFFRCxNQUFNckQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJpRCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJyRCxLQUFLLENBQUNLLFlBQVksR0FBR0MsU0FBUztjQUM5Qk4sS0FBSyxDQUFDdUQsYUFBYSxFQUFFO2NBQ3JCTCxRQUFBLENBQUFNLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUNELE1BQU1DLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ2pGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBc0IsR0FDcEN0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFvRixJQUFJO2NBQUNqQixTQUFTLEVBQUMsV0FBVztjQUFDOUQsT0FBTyxFQUFFMEU7WUFBTSxHQUMxQ2xGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQXNGLElBQUk7Y0FBQ3hFLElBQUksRUFBQyxXQUFXO2NBQUNzRCxTQUFTLEVBQUM7WUFBUSxFQUFHLEVBQzVDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsT0FBQSxDQUFBcUYsT0FBTztjQUFDekUsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN6QmhCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGVBQ0VlLEtBQUssQ0FBQ2UsT0FBTyxDQUFDeUMsSUFBSSxFLEtBQUd4RCxLQUFLLENBQUM2RCxVQUFVLENBQUNDLE1BQU0sQ0FDdkMsQ0FDRCxFQUNOWCxlQUFlLElBQ2ZoRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRTZDO1lBQWEsR0FDMUR0RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUMrRCxNQUFNLENBQUN0RCxNQUFNLENBQU8sQ0FFakMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWdELFNBQUEsR0FBQWhELE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVU0Rix5QkFBeUJBLENBQUM7WUFBRTFDLElBQUk7WUFBRTFCO1VBQU8sQ0FBRTtZQUMxRCxNQUFNO2NBQUVJLEtBQUs7Y0FBRUYsUUFBUTtjQUFFeUI7WUFBUSxDQUFFLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDc0IsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3RELE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUN1QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHL0YsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDLE1BQU1JLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakJrQyxRQUFRLENBQUNsQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRHhELE9BQU8sRUFBRSxNQUFNcUQsS0FBSyxJQUFHO2dCQUN0QlAsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTTNCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzlCLFFBQVEsQ0FBQ2YsSUFBSSxFQUFFMkMsS0FBSyxDQUFDO2dCQUM5QzFDLFFBQVEsQ0FBQztrQkFBRTRDLFNBQVMsRUFBRTtvQkFBRSxHQUFHckUsUUFBUSxDQUFDcUU7a0JBQVMsQ0FBRTtrQkFBRUMsS0FBSyxFQUFFO29CQUFFLEdBQUd0RSxRQUFRLENBQUNzRTtrQkFBSztnQkFBRSxDQUFFLENBQUM7Z0JBQ2hGeEUsT0FBTyxFQUFFO2dCQUVUMkMsVUFBVSxDQUFDLE1BQUs7a0JBQ2ZkLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ3RELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQWdELEtBQUs7Y0FBQzdDLElBQUk7Y0FBQzhDLFNBQVMsRUFBQyxjQUFjO2NBQUM3QyxPQUFPLEVBQUVBO1lBQU8sR0FDcER6QixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ3BDLEtBQUssQ0FBTSxFQUM3QnBDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGVBQU9lLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ2hDLFdBQVcsQ0FBUSxDQUMvQixFQUVUeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBCLFFBQVE7Y0FDUjlCLEtBQUssRUFBRWQsS0FBSyxDQUFDMkMsTUFBTSxDQUFDRSxRQUFRLENBQUMvQixLQUFLO2NBQ2xDb0IsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFOEIsS0FBSztjQUNabEMsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJlLFdBQVcsRUFBRTlDLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFFUDNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBK0IsR0FDaER0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUMsU0FBQSxDQUFBM0MsUUFBUTtjQUFDc0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ3BFLE9BQU8sRUFBRW1ELE1BQU0sQ0FBQ25EO1lBQU8sR0FDakRxQixLQUFLLENBQUNlLE9BQU8sQ0FBQ3NCLFFBQVEsQ0FDYixDQUNILEVBQ1RsRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBNkIsZ0JBQWdCO2NBQUN4QixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBckQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWdELFNBQUEsR0FBQWhELE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQVFNLFNBQVVpRyxxQkFBcUJBLENBQUM7WUFBRXpFLE9BQU87WUFBRTBFLFFBQVE7WUFBRUMsZUFBZSxHQUFHO1VBQUUsQ0FBRTtZQUNoRixNQUFNO2NBQUV2RSxLQUFLO2NBQUVGLFFBQVE7Y0FBRUQsTUFBTTtjQUFFMEI7WUFBUSxDQUFFLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDc0IsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3RELE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUN1QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHL0YsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQzhDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd0RyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTUksTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQmtDLFFBQVEsQ0FBQ2xDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRSxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEeEQsT0FBTyxFQUFFLE1BQU1xRCxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hQLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU1pRCxRQUFRLEdBQUcsTUFBTTVFLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQy9CLFFBQVEsQ0FBQzRCLEtBQUssRUFBRTtvQkFBRSxHQUFHTTtrQkFBZSxDQUFFLENBQUM7a0JBQzdFSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUVGLFFBQVEsQ0FBQztrQkFDekI7a0JBQ0EsSUFBSUEsUUFBUSxDQUFDRixLQUFLLEVBQUU7b0JBQ25CLE1BQU1LLFNBQVMsR0FBRzdFLEtBQUssQ0FBQzhFLE1BQU0sR0FBR0osUUFBUSxDQUFDRixLQUFLLENBQUMsR0FDN0N4RSxLQUFLLENBQUM4RSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDLEdBQUcsSUFBSUUsUUFBUSxDQUFDSyxNQUFNLEVBQUUsR0FDdEQvRSxLQUFLLENBQUM4RSxNQUFNLENBQUM5RixPQUFPO29CQUN2QnlGLFFBQVEsQ0FBQ0ksU0FBUyxDQUFDO29CQUNuQnBELFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2xCOztrQkFFRCxNQUFNMkMsS0FBSyxHQUFHdEUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDWSxPQUFPLEVBQUU7a0JBQ3RDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUVSLEtBQUssQ0FBQztrQkFDdEI7a0JBQ0E3QyxRQUFRLENBQUM7b0JBQUU2QztrQkFBSyxDQUFFLENBQUM7a0JBQ25CO2tCQUNBN0IsVUFBVSxDQUFDLE1BQUs7b0JBQ2ZkLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ1IsQ0FBQyxPQUFPd0QsQ0FBQyxFQUFFO2tCQUNYTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUssQ0FBQyxDQUFDQyxPQUFPLENBQUM7a0JBQ3pDUCxPQUFPLENBQUNILEtBQUssQ0FBQ1MsQ0FBQyxDQUFDOztjQUVsQjthQUNBO1lBRUQsTUFBTXRHLE9BQU8sR0FBRzJGLFFBQVEsSUFBSXhDLE1BQU0sQ0FBQ25ELE9BQU87WUFFMUMsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBZ0QsS0FBSztjQUFDN0MsSUFBSTtjQUFDOEMsU0FBUyxFQUFDLGNBQWM7Y0FBQzdDLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHpCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDZCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUMyQyxNQUFNLENBQUNwQyxLQUFLLENBQU0sRUFDN0JwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxlQUFPZSxLQUFLLENBQUMyQyxNQUFNLENBQUNoQyxXQUFXLENBQVEsQ0FDL0IsRUFDVHhDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUF3QixJQUFJLFFBQ0p2RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBZ0UsYUFBYTtjQUFDbkYsS0FBSyxFQUFFQSxLQUFLO2NBQUV3RSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3Q3JHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUEwQixRQUFRO2NBQ1I5QixLQUFLLEVBQUVkLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDL0IsS0FBSztjQUNsQ29CLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRThCLEtBQUs7Y0FDWmxDLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCZSxXQUFXLEVBQUU5QyxLQUFLLENBQUMyQyxNQUFNLENBQUNFLFFBQVEsQ0FBQ0M7WUFBVyxFQUM3QyxDQUNJLEVBRVAzRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQStCLEdBQ2hEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21DLFNBQUEsQ0FBQTNDLFFBQVE7Y0FBQ3NFLE9BQU8sRUFBQyxTQUFTO2NBQUNwRSxPQUFPLEVBQUVtRCxNQUFNLENBQUNuRDtZQUFPLEdBQ2pEcUIsS0FBSyxDQUFDZSxPQUFPLENBQUNzQixRQUFRLENBQ2IsQ0FDSCxFQUNUbEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQTZCLGdCQUFnQjtjQUFDeEIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRUEsSUFBQXJELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQThDLEtBQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBK0MsR0FBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnRCxTQUFBLEdBQUFoRCxPQUFBO1VBR0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFFTSxTQUFVZ0gsZUFBZUEsQ0FBQztZQUFFOUQsSUFBSTtZQUFFMUI7VUFBTyxDQUFFO1lBQ2hELE1BQU07Y0FBRUksS0FBSztjQUFFRjtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ3NCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0RCxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDN0IsTUFBTSxFQUFFOEIsU0FBUyxDQUFDLEdBQUd4RCxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQztjQUMxQ0UsWUFBWSxFQUFFLEVBQUU7Y0FDaEJDLFdBQVcsRUFBRSxLQUFLO2NBQ2xCUDthQUNBLENBQUM7WUFFRixNQUFNUSxNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCTCxTQUFTLENBQUM7a0JBQ1QsR0FBRzlCLE1BQU07a0JBQ1QsQ0FBQ21DLEtBQUssQ0FBQ0MsYUFBYSxDQUFDQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRTtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRHhELE9BQU8sRUFBRSxNQUFNcUQsS0FBSyxJQUFHO2dCQUN0QlAsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTTNCLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQy9CLFFBQVEsQ0FBQ3hDLE1BQU0sQ0FBQytCLFlBQVksQ0FBQztnQkFDbERoQyxPQUFPLEVBQUU7Z0JBRVQyQyxVQUFVLENBQUMsTUFBSztrQkFDZmQsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDdEQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBZ0QsS0FBSztjQUFDN0MsSUFBSTtjQUFDOEMsU0FBUyxFQUFDLGNBQWM7Y0FBQzdDLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHpCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUF3QixJQUFJLFFBQ0p2RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDMkMsTUFBTSxDQUFDcEMsS0FBSyxDQUFNLEVBQzdCcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZUFBT2UsS0FBSyxDQUFDMkMsTUFBTSxDQUFDaEMsV0FBVyxDQUFRLENBQy9CLEVBRVR4QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBMEIsUUFBUTtjQUNSOUIsS0FBSyxFQUFFZCxLQUFLLENBQUMyQyxNQUFNLENBQUNFLFFBQVEsQ0FBQy9CLEtBQUs7Y0FDbENvQixJQUFJLEVBQUMsY0FBYztjQUNuQkMsS0FBSyxFQUFFdEMsTUFBTSxDQUFDK0IsWUFBWTtjQUMxQkcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJlLFdBQVcsRUFBRTlDLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFFUDNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBK0IsR0FDaER0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUMsU0FBQSxDQUFBM0MsUUFBUTtjQUFDc0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ3BFLE9BQU8sRUFBRW1ELE1BQU0sQ0FBQ25EO1lBQU8sR0FDakRxQixLQUFLLENBQUNlLE9BQU8sQ0FBQ3NCLFFBQVEsQ0FDYixDQUNILEVBQ1RsRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBNkIsZ0JBQWdCO2NBQUN4QixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEQSxJQUFBckQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWlILFlBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNNLFNBQVVrSCxjQUFjQSxDQUFDO1lBQUV6RixNQUFNO1lBQUU4QjtVQUFTLENBQUU7WUFDbkQsTUFBTTtjQUFFN0IsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLElBQUlxRixZQUFZLEdBQUc7Y0FBRXBELEtBQUssRUFBRSxFQUFFO2NBQUVyQixLQUFLLEVBQUU7WUFBUSxDQUFFO1lBQ2pELE1BQU0wRSxPQUFPLEdBQUcsRUFBRTtZQUNsQnpGLEtBQUssQ0FBQzBGLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQzZCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUsvRixRQUFRLENBQUMrRixFQUFFLEVBQUU7Y0FDMUIsSUFBSUQsQ0FBQyxDQUFDQyxFQUFFLEtBQUtoRyxNQUFNLENBQUN1RSxLQUFLLENBQUMwQixVQUFVLEVBQUVQLFlBQVksR0FBRztnQkFBRXBELEtBQUssRUFBRXlELENBQUMsQ0FBQ0MsRUFBRTtnQkFBRS9FLEtBQUssRUFBRThFLENBQUMsQ0FBQ3JGO2NBQUssQ0FBRTtjQUNwRmlGLE9BQU8sQ0FBQ08sSUFBSSxDQUFDO2dCQUFFNUQsS0FBSyxFQUFFeUQsQ0FBQyxDQUFDQyxFQUFFO2dCQUFFL0UsS0FBSyxFQUFFOEUsQ0FBQyxDQUFDckY7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTXlGLFlBQVksR0FBRzVELElBQUksSUFBRztjQUMzQlQsU0FBUyxDQUFDOUIsTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUV1RSxLQUFLLEVBQUU7a0JBQUUsR0FBR3ZFLE1BQU0sQ0FBQ3VFLEtBQUs7a0JBQUUwQixVQUFVLEVBQUUxRCxJQUFJLENBQUM2RCxNQUFNLENBQUM5RDtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7WUFFRCxPQUNDaEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT2lILE9BQU8sRUFBQyxFQUFFO2NBQUN6RCxTQUFTLEVBQUM7WUFBVyxHLHNDQUV0Q3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNvRyxZQUFBLENBQUFjLFdBQVc7Y0FBQ3BFLFFBQVEsRUFBRWlFLFlBQVk7Y0FBRVQsWUFBWSxFQUFFQSxZQUFZO2NBQUVDLE9BQU8sRUFBRSxDQUFDRCxZQUFZLEVBQUUsR0FBR0MsT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXJILE1BQUEsR0FBQUMsT0FBQTtVQWtCTyxNQUFNZ0ksYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR2pJLE1BQUEsQ0FBQWEsT0FBSyxDQUFDc0gsYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTXBHLGdCQUFnQixHQUFHQSxDQUFBLEtBQU0vQixNQUFBLENBQUFhLE9BQUssQ0FBQ3VILFVBQVUsQ0FBQ0gsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQW5HLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CdEUsSUFBQS9CLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvSSxXQUFBLEdBQUFwSSxPQUFBO1VBRU0sU0FBVXFJLHVCQUF1QkEsQ0FBQztZQUFFN0Y7VUFBUSxDQUFFO1lBQ25ELE1BQU07Y0FBRVo7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUVMLE1BQU07Y0FBRTBCO1lBQVEsQ0FBRSxHQUFHLElBQUE5QixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ2lELGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2pGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNSyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNaUUsTUFBTSxHQUFHakUsS0FBSyxDQUFDQyxhQUFhO2NBQ2xDLE1BQU1tQyxLQUFLLEdBQUc7Z0JBQUUsR0FBR3ZFLE1BQU0sQ0FBQ3VFO2NBQUssQ0FBRTtjQUNqQzdDLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUM2QixNQUFNLENBQUMvRCxJQUFJLEdBQUcrRCxNQUFNLENBQUM5RDtnQkFBSyxDQUFFO2dCQUFFRyxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUVELE1BQU1vRSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJN0csTUFBTSxDQUFDeUMsT0FBTyxFQUFFO2dCQUNuQmMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHhDLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNVCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QmlELGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnhDLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNNkMsYUFBYSxHQUFHQSxDQUFBLEtBQU1MLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDakYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBd0IsSUFBSSxRQUNKdkUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBGLEtBQUs7Y0FDTDdFLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmpCLEtBQUssRUFBRWQsS0FBSyxDQUFDb0UsS0FBSyxDQUFDeUMsSUFBSSxDQUFDL0YsS0FBSztjQUM3QmdDLFdBQVcsRUFBRTlDLEtBQUssQ0FBQ29FLEtBQUssQ0FBQ3lDLElBQUksQ0FBQy9ELFdBQVc7Y0FDekNaLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRi9ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBbUQsR0FDcEV0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ1AsT0FBTyxFQUFFK0gsYUFBYTtjQUFFM0QsT0FBTyxFQUFDLFNBQVM7Y0FBQytELFFBQVE7WUFBQSxHQUN4RDlHLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTixNQUFNLENBQ2IsRUFDVHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxXQUFBLENBQUFPLFVBQVU7Y0FBQ3pDLFFBQVEsRUFBRTFEO1lBQVEsRUFBSSxDQUMxQixFQUNSdUMsZUFBZSxJQUNmaEYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFUyxRQUFRLEVBQUU2QztZQUFhLEdBQzFEdEYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FBTWUsS0FBSyxDQUFDK0QsTUFBTSxDQUFDdEQsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTRJLE1BQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBNkksU0FBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQThJLE1BQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUVNLFNBQVUrSSxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFckgsUUFBUTtjQUFFeUIsUUFBUTtjQUFFMUI7WUFBTSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNLENBQUM2RCxNQUFNLEVBQUVxRCxTQUFTLENBQUMsR0FBR2pKLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBd0YsTUFBQSxDQUFBRyxTQUFTLEVBQ1IsQ0FBQ3ZILFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHdEUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDWSxPQUFPLEVBQUU7Y0FDdEN6RCxRQUFRLENBQUM7Z0JBQUU2QztjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDLEVBQ0QsaUJBQWlCLENBQ2pCO1lBRUQsSUFBSUwsTUFBTSxFQUFFO2NBQ1gsT0FBTzVGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUF1Rix1QkFBdUI7Z0JBQUM3RixRQUFRLEVBQUVBLENBQUEsS0FBTXdHLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFFckUsSUFBSSxDQUFDdkgsTUFBTSxDQUFDdUUsS0FBSyxDQUFDeUMsSUFBSSxFQUFFO2NBQ3ZCLE9BQU8xSSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0gsTUFBQSxDQUFBTSxVQUFVO2dCQUFDcEYsSUFBSSxFQUFDLGdCQUFnQjtnQkFBQ3FGLFFBQVEsRUFBRUEsQ0FBQSxLQUFNSCxTQUFTLENBQUMsSUFBSTtjQUFDLEVBQUk7O1lBRzdFLE9BQ0NqSixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnSSxTQUFBLENBQUFPLGdCQUFnQjtjQUFDdEYsSUFBSSxFQUFDO1lBQU0sRUFBRyxDQUM5QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBL0QsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVXFKLFdBQVdBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1QvQyxPQUFPLENBQUNnRCxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaRCxHQUFHLEdBQUdFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSCxHQUFHLENBQUM7WUFDOUIsTUFBTUksR0FBRyxHQUFHM0osTUFBQSxDQUFBYSxPQUFLLENBQUMrSSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCNUosTUFBQSxDQUFBYSxPQUFLLENBQUNnSixTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNL0IsTUFBTSxHQUFHNkIsR0FBRyxDQUFDRyxPQUFPO2NBQzFCaEMsTUFBTSxDQUFDaUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSWpDLE1BQU0sQ0FBQ2tDLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQ25DLE1BQU0sQ0FBQ29DLFdBQVcsR0FBRyxLQUFLO2tCQUMxQnBDLE1BQU0sQ0FBQ3FDLFlBQVksR0FBRyxNQUFLO29CQUMxQnJDLE1BQU0sQ0FBQ3FDLFlBQVksR0FBRyxJQUFJO29CQUMxQnJDLE1BQU0sQ0FBQ29DLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDWCxHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDdkosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUFjLEdBQzVCdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT3NKLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakNySyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFReUksR0FBRyxFQUFFQSxHQUFHO2NBQUVwRyxJQUFJLEVBQUMsV0FBVztjQUFDd0csR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFeEMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBM0osTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFLLE9BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFFQSxJQUFBc0ssS0FBQSxHQUFBdEssT0FBQTtVQUNBLElBQUF1SyxPQUFBLEdBQUF2SyxPQUFBO1VBQ0EsSUFBQWdELFNBQUEsR0FBQWhELE9BQUE7VUFDTSxTQUFVd0ssa0JBQWtCQSxDQUFDO1lBQUVDO1VBQU8sQ0FBbUM7WUFDOUUsTUFBTTtjQUFFL0ksUUFBUTtjQUFFRCxNQUFNO2NBQUVHO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDNkQsTUFBTSxFQUFFcUQsU0FBUyxDQUFDLEdBQUdqSixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsTUFBTSxDQUFDRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUNxRSxTQUFTLENBQUMzQyxRQUFRLENBQUM7WUFDM0UsSUFBQTBGLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUN2SCxRQUFRLENBQUNxRSxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDaUQsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixNQUFNMEIsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNIckgsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTNCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzRFLGFBQWEsRUFBRTtlQUN4QyxDQUFDLE9BQU85RCxDQUFDLEVBQUU7Z0JBQ1hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUeEQsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELElBQUlzQyxNQUFNLEVBQUU7Y0FDWCxPQUFPNUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dKLE9BQUEsQ0FBQU8sa0JBQWtCO2dCQUFDOUcsSUFBSSxFQUFDLFNBQVM7Z0JBQUN0QixRQUFRLEVBQUVBLENBQUEsS0FBTXdHLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHL0UsTUFBTTZCLElBQUksR0FBR0EsQ0FBQztjQUFFN0csSUFBSSxFQUFFZDtZQUFJLENBQUUsS0FBSTtjQUMvQixNQUFNb0csR0FBRyxHQUFHLEdBQUdpQixPQUFBLENBQUEzSixPQUFNLENBQUNrSyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxlQUFldEosUUFBUSxDQUFDK0YsRUFBRSxjQUFjdkUsSUFBSSxRQUFRO2NBRTdGLE9BQ0NuRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS3dELFNBQVMsRUFBQztjQUF3RSxHQUN0RnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQ21FLFNBQVMsQ0FBQzdDLElBQUksQ0FBQyxDQUFNLEVBQ2hDbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQUt3RCxTQUFTLEVBQUM7Y0FBYyxHQUM1QnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFPc0osUUFBUTtnQkFBQ0MsT0FBTyxFQUFDO2NBQVUsR0FDakNySyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUXlJLEdBQUcsRUFBRUEsR0FBRztnQkFBRXBHLElBQUksRUFBQztjQUFXLEVBQUcsRSxtREFFOUIsQ0FDSCxDQUNEO1lBRVIsQ0FBQztZQUVELElBQUl4QixRQUFRLENBQUNxRSxTQUFTLENBQUNrRixNQUFNLEVBQUU7Y0FDOUIsT0FDQ2xMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lKLEtBQUEsQ0FBQVksSUFBSTtnQkFBQzdHLFNBQVMsRUFBQyxlQUFlO2dCQUFDaUQsS0FBSyxFQUFFNUYsUUFBUSxDQUFDcUUsU0FBUyxDQUFDa0YsTUFBTTtnQkFBRUUsT0FBTyxFQUFFTixJQUFJO2dCQUFFTyxTQUFTLEVBQUM7Y0FBSyxFQUFHLENBQ2pHOztZQUlMLE9BQ0NyTCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxHQUFBLENBQUFzSSxTQUFTO2NBQUMvSSxJQUFJLEVBQUVWLEtBQUssQ0FBQzZELFVBQVUsQ0FBQzZGLEtBQUssQ0FBQ25KLEtBQUs7Y0FBRUksV0FBVyxFQUFFWCxLQUFLLENBQUM2RCxVQUFVLENBQUM2RixLQUFLLENBQUMvSTtZQUFXLEdBQzdGeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUE0QixHQUMxQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNtQyxTQUFBLENBQUEzQyxRQUFRO2NBQUNFLE9BQU8sRUFBRW1LLFVBQVU7Y0FBRS9GLE9BQU8sRUFBQztZQUFTLEdBQzlDL0MsS0FBSyxDQUFDZSxPQUFPLENBQUNzQixRQUFRLENBQ2IsQ0FDTixFQUVObEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQTZCLGdCQUFnQjtjQUFDeEIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0IsQ0FDVjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBbEQsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFLLE9BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUF1TCxTQUFBLEdBQUF2TCxPQUFBO1VBQ0EsSUFBQXdMLGNBQUEsR0FBQXhMLE9BQUE7VUFFQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUVNLFNBQVV5TCxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFL0osUUFBUTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQzZELE1BQU0sRUFBRXFELFNBQVMsQ0FBQyxHQUFHakosTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1vSSxjQUFjLEdBQUdBLENBQUEsS0FBTTFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQU1ILFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBQUYsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQ3ZILFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENpRCxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLElBQUlyRCxNQUFNLEVBQUU7Y0FDWCxPQUFPNUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dKLE9BQUEsQ0FBQU8sa0JBQWtCO2dCQUFDOUcsSUFBSSxFQUFDLFNBQVM7Z0JBQUN0QixRQUFRLEVBQUUyRztjQUFRLEVBQUk7O1lBR2pFLElBQUl6SCxRQUFRLENBQUNxRSxTQUFTLENBQUM0RixPQUFPLEVBQUU7Y0FDL0IsT0FDQzVMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQVN3RCxTQUFTLEVBQUM7Y0FBbUIsR0FDckN0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEssU0FBQSxDQUFBSyxRQUFRO2dCQUFDbkIsT0FBTyxFQUFFL0ksUUFBUSxDQUFDcUUsU0FBUyxDQUFDNEY7Y0FBTyxFQUFJLENBQ3hDLEVBQ1Y1TCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS3dELFNBQVMsRUFBQztjQUF3RSxHQUN0RnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNSLE9BQU8sRUFBRW1MLGNBQWM7Z0JBQUUvRyxPQUFPLEVBQUMsU0FBUztnQkFBQytELFFBQVE7Y0FBQSxHQUNyRTlHLEtBQUssQ0FBQ2UsT0FBTyxDQUFDa0osSUFBSSxDQUNYLENBQ0osQ0FDSjs7WUFHTCxPQUFPOUwsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJLLGNBQUEsQ0FBQU0sYUFBYTtjQUFDaEksSUFBSSxFQUFDLFNBQVM7Y0FBQ3FGLFFBQVEsRUFBRXVDO1lBQWMsRUFBSTtVQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQTNMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBRUEsSUFBQWdELFNBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQStMLFVBQUEsR0FBQS9MLE9BQUE7VUFFTSxTQUFVOEwsYUFBYUEsQ0FBQztZQUFFaEksSUFBSTtZQUFFcUY7VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FBRXpILFFBQVE7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNrSyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdsTSxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTSxDQUFDRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUNxRSxTQUFTLENBQUMzQyxRQUFRLENBQUM7WUFDM0UsTUFBTSxHQUFHOEksT0FBTyxDQUFDLEdBQUduTSxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQ2pDLElBQUksQ0FBQyxDQUFDO1lBRTVELE1BQU1xSSxXQUFXLEdBQUdBLENBQUEsS0FBTUYsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELElBQUFsRCxNQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDdkgsUUFBUSxDQUFDcUUsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzFDLFdBQVcsQ0FBQzNCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzNDLFFBQVEsQ0FBQztjQUN4QzhJLE9BQU8sQ0FBQ3hLLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQ2pDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE1BQU1zSSxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUMxSyxRQUFRLENBQUMySztZQUFXLENBQUU7WUFDcEQsT0FDQ3RNLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQXNJLFNBQVM7Y0FDVGhILFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0IvQixJQUFJLEVBQUVWLEtBQUssQ0FBQzZELFVBQVUsQ0FBQzZGLEtBQUssQ0FBQ25KLEtBQUs7Y0FDbENJLFdBQVcsRUFBRVgsS0FBSyxDQUFDNkQsVUFBVSxDQUFDNkYsS0FBSyxDQUFDL0k7WUFBVyxHQUUvQ3hDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBNEIsR0FDMUN0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQzZELE9BQU8sRUFBQyxTQUFTO2NBQUMrRCxRQUFRO2NBQUNuSSxPQUFPLEVBQUU0STtZQUFRLEdBQ2xEdkgsS0FBSyxDQUFDZSxPQUFPLENBQUNnRCxNQUFNLENBQ2IsRUFDVDVGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNtQyxTQUFBLENBQUEzQyxRQUFRO2NBQUNFLE9BQU8sRUFBRTRMLFdBQVc7Y0FBRXhILE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS3lIO1lBQVEsR0FDNUR4SyxLQUFLLENBQUNlLE9BQU8sQ0FBQ3NCLFFBQVEsQ0FDYixDQUNOLEVBRU5sRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBNkIsZ0JBQWdCO2NBQUN4QixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QixFQUNYNEksZUFBZSxJQUFJak0sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tMLFVBQUEsQ0FBQW5HLHlCQUF5QjtjQUFDMUMsSUFBSSxFQUFFWSxJQUFJO2NBQUV0QyxPQUFPLEVBQUUySztZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQXBNLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQThJLE1BQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUF1TSxLQUFBLEdBQUF2TSxPQUFBO1VBQ0EsSUFBQXdNLEtBQUEsR0FBQXhNLE9BQUE7VUFDQSxJQUFBeU0sTUFBQSxHQUFBek0sT0FBQTtVQUVNLFNBQVUwTSxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFaEwsUUFBUTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sR0FBR3VCLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUNxRSxTQUFTLENBQUMzQyxRQUFRLENBQUM7WUFDbkUsTUFBTSxHQUFHOEksT0FBTyxDQUFDLEdBQUduTSxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzRGLE9BQU8sQ0FBQztZQUM5RCxNQUFNaEksUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBQ3pCLE1BQU1nSixJQUFJLEdBQUcsRUFBRTtZQUVmLElBQUE3RCxNQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDdkgsUUFBUSxDQUFDcUUsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzFDLFdBQVcsQ0FBQzNCLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzNDLFFBQVEsQ0FBQztjQUN4QzhJLE9BQU8sQ0FBQztnQkFBRW5HLFNBQVMsRUFBRXJFLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQ2EsT0FBTyxFQUFFO2dCQUFFMUMsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3BFLENBQUMsQ0FBQztZQUVGeEMsUUFBUSxDQUFDcUUsU0FBUyxDQUFDdUIsS0FBSyxDQUFDQyxPQUFPLENBQUNxRixJQUFJLElBQUc7Y0FDdkMsTUFBTTlJLElBQUksR0FBRyxPQUFPOEksSUFBSSxLQUFLLFFBQVEsR0FBR0EsSUFBSSxHQUFHQSxJQUFJLENBQUM5SSxJQUFJO2NBQ3hELE1BQU1wQixLQUFLLEdBQUdkLEtBQUssQ0FBQ21FLFNBQVMsQ0FBQ2pDLElBQUksQ0FBQztjQUVuQyxNQUFNK0ksVUFBVSxHQUFHLENBQUMsTUFBSztnQkFDeEIsSUFBSSxDQUFDRCxJQUFJLEVBQUVFLFlBQVksRUFBRSxPQUFPLEtBQUs7Z0JBQ3JDLElBQUksT0FBT0YsSUFBSSxFQUFFRSxZQUFZLEtBQUssUUFBUSxFQUFFLE9BQU8sQ0FBQ3BMLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQzZHLElBQUksQ0FBQ0UsWUFBWSxDQUFDO2dCQUN6RixPQUFPRixJQUFJLENBQUNFLFlBQVksQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQ3RMLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQ2lILFFBQVEsQ0FBQyxDQUFDO2NBQ3pFLENBQUMsRUFBQyxDQUFFO2NBQ0osTUFBTUMsS0FBSyxHQUFHO2dCQUFFYixRQUFRLEVBQUVTO2NBQVUsQ0FBRTtjQUV0Q0YsSUFBSSxDQUFDaEYsSUFBSSxDQUNSNUgsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBMLEtBQUEsQ0FBQVcsR0FBRztnQkFBQSxHQUFLRCxLQUFLO2dCQUFFRSxHQUFHLEVBQUUsR0FBR3pMLFFBQVEsQ0FBQytGLEVBQUUsSUFBSTNELElBQUk7Y0FBTSxHQUMvQ3BCLEtBQUssQ0FDRCxDQUNOO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsT0FDQzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwTCxLQUFBLENBQUFhLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFLENBQUM7Y0FBRWhKLFNBQVMsRUFBQyx1QkFBdUI7Y0FBQ1YsUUFBUSxFQUFFQTtZQUFRLEdBQzdFNUQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBMLEtBQUEsQ0FBQWUsSUFBSSxRQUFFWCxJQUFJLENBQVEsRUFDbkI1TSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEwsS0FBQSxDQUFBZ0IsS0FBSztjQUFDbEosU0FBUyxFQUFDO1lBQUUsR0FDbEJ0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUwsUUFBQSxDQUFBYixvQkFBb0IsT0FBRyxFQUN4QjFMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMyTCxLQUFBLENBQUFnQixZQUFZO2NBQUMxSixJQUFJLEVBQUM7WUFBVyxFQUFHLEVBQ2pDL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJMLEtBQUEsQ0FBQWdCLFlBQVk7Y0FBQzFKLElBQUksRUFBQztZQUFVLEVBQUcsRUFDaEMvRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEwsTUFBQSxDQUFBakMsa0JBQWtCLE9BQUcsQ0FDZixDQUNPO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSxJQUFBdEssV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQThDLEtBQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQW9JLFdBQUEsR0FBQXBJLE9BQUE7VUFFTSxTQUFVNEssa0JBQWtCQSxDQUFDO1lBQ2xDOUcsSUFBSTtZQUNKMkcsT0FBTztZQUNQakk7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFZixNQUFNO2NBQUUwQixRQUFRO2NBQUV6QixRQUFRO2NBQUVFO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDaUQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHakYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5FLE1BQU1LLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCLE1BQU1pRSxNQUFNLEdBQUdqRSxLQUFLLENBQUNDLGFBQWE7Y0FDbEMsTUFBTWtDLFNBQVMsR0FBRztnQkFBRSxHQUFHdEUsTUFBTSxDQUFDc0U7Y0FBUyxDQUFFO2NBQ3pDNUMsUUFBUSxDQUFDO2dCQUFFNEMsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ2pDLElBQUksR0FBRytELE1BQU0sQ0FBQzlEO2dCQUFLLENBQUU7Z0JBQUVHLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTW9FLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUk3RyxNQUFNLENBQUN5QyxPQUFPLEVBQUU7Z0JBQ25CYyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEeEMsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU1ULFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLE1BQU1nRSxTQUFTLEdBQUc7Z0JBQUUsR0FBR3RFLE1BQU0sQ0FBQ3NFO2NBQVMsQ0FBRTtjQUN6QzVDLFFBQVEsQ0FBQztnQkFBRTRDLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNqQyxJQUFJLEdBQUdwQyxRQUFRLENBQUNxRSxTQUFTLENBQUNqQyxJQUFJO2dCQUFDO2NBQUUsQ0FBRSxDQUFDO2NBQzNFa0Isa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCeEMsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU02QyxhQUFhLEdBQUdBLENBQUEsS0FBTUwsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0NqRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBbUIsR0FDakN0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBMEIsUUFBUTtjQUNSYixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJHLElBQUksRUFBQyxTQUFTO2NBQ2RDLEtBQUssRUFBRXRDLE1BQU0sQ0FBQ3NFLFNBQVMsR0FBR2pDLElBQUksQ0FBQyxJQUFJLEVBQUU7Y0FDckNZLFdBQVcsRUFBRTlDLEtBQUssQ0FBQytELE1BQU0sQ0FBQ2xCO1lBQVEsRUFDakMsQ0FDRyxFQUNOMUUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXdELFNBQVMsRUFBQztZQUF3QyxHQUN6RHRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxPQUFPLEVBQUUrSCxhQUFhO2NBQUUzRCxPQUFPLEVBQUMsU0FBUztjQUFDK0QsUUFBUTtZQUFBLEdBQ3hEOUcsS0FBSyxDQUFDZSxPQUFPLENBQUNOLE1BQU0sQ0FDYixFQUNUdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VILFdBQUEsQ0FBQU8sVUFBVSxPQUFHLENBQ04sRUFDUjVELGVBQWUsSUFDZmhGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQWMsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRVMsUUFBUSxFQUFFNkM7WUFBYSxHQUMxRHRGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGNBQU1lLEtBQUssQ0FBQytELE1BQU0sQ0FBQ3RELE1BQU0sQ0FBTyxDQUVqQyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUF0QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBb0ksV0FBQSxHQUFBcEksT0FBQTtVQUVNLFNBQVV5TixnQkFBZ0JBLENBQUM7WUFBRWpMO1VBQVEsQ0FBRTtZQUM1QyxNQUFNO2NBQUVaLEtBQUs7Y0FBRUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNO2NBQUVMLE1BQU07Y0FBRTBCO1lBQVEsQ0FBRSxHQUFHLElBQUE5QixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ2lELGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2pGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNSyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNaUUsTUFBTSxHQUFHakUsS0FBSyxDQUFDQyxhQUFhO2NBQ2xDLE1BQU1tQyxLQUFLLEdBQUc7Z0JBQUUsR0FBR3ZFLE1BQU0sQ0FBQ3VFO2NBQUssQ0FBRTtjQUNqQzdDLFFBQVEsQ0FBQztnQkFBRWUsT0FBTyxFQUFFLElBQUk7Z0JBQUU4QixLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDNkIsTUFBTSxDQUFDL0QsSUFBSSxHQUFHK0QsTUFBTSxDQUFDOUQ7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDOUUsQ0FBQztZQUNELE1BQU0ySixRQUFRLEdBQUdqTSxNQUFNLENBQUN5QyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTW9FLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUk3RyxNQUFNLENBQUN5QyxPQUFPLEVBQUU7Z0JBQ25CYyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEeEMsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1ULFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCaUQsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCeEMsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU02QyxhQUFhLEdBQUdBLENBQUEsS0FBTUwsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE9BQ0NqRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUF3QixJQUFJLFFBQ0p2RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBMEIsUUFBUTtjQUNSYixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJJLEtBQUssRUFBRXRDLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQzJILE9BQU87Y0FDM0JqTCxLQUFLLEVBQUVkLEtBQUssQ0FBQ29FLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ2pMLEtBQUs7Y0FDaENnQyxXQUFXLEVBQUU5QyxLQUFLLENBQUNvRSxLQUFLLENBQUMySCxPQUFPLENBQUNqSixXQUFXO2NBQzVDWixJQUFJLEVBQUM7WUFBUyxFQUNiLEVBQ0YvRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQStCLEdBQ2hEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNQLE9BQU8sRUFBRStILGFBQWE7Y0FBRTNELE9BQU8sRUFBQyxTQUFTO2NBQUMrRCxRQUFRO1lBQUEsR0FDeERnRixRQUFRLENBQ0QsRUFDVDNOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxXQUFBLENBQUFPLFVBQVU7Y0FBQ3pDLFFBQVEsRUFBRTFEO1lBQVEsRUFBSSxDQUMxQixFQUNSdUMsZUFBZSxJQUNmaEYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBYyxZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFUyxRQUFRLEVBQUU2QztZQUFhLEdBQzFEdEYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FBTWUsS0FBSyxDQUFDK0QsTUFBTSxDQUFDdEQsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRJLE1BQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQThDLEtBQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBNkksU0FBQSxHQUFBN0ksT0FBQTtVQUVNLFNBQVU0TixVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRWxNLFFBQVE7Y0FBRXlCLFFBQVE7Y0FBRTFCO1lBQU0sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDekQsTUFBTSxDQUFDNkQsTUFBTSxFQUFFcUQsU0FBUyxDQUFDLEdBQUdqSixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQXdGLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUN2SCxRQUFRLENBQUNzRSxLQUFLLENBQUMsRUFBRSxNQUFNN0MsUUFBUSxDQUFDekIsUUFBUSxDQUFDa0YsT0FBTyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztZQUVsRixNQUFNaUgsWUFBWSxHQUFHQSxDQUFBLEtBQU03RSxTQUFTLENBQUMsQ0FBQ3JELE1BQU0sQ0FBQztZQUM3QyxJQUFJQSxNQUFNLEVBQUUsT0FBTzVGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUEySyxnQkFBZ0I7Y0FBQ2pMLFFBQVEsRUFBRXFMO1lBQVksRUFBSTtZQUMvRCxJQUFJLENBQUNwTSxNQUFNLENBQUN1RSxLQUFLLENBQUMySCxPQUFPLEVBQUUsT0FBTzVOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMrSCxNQUFBLENBQUFNLFVBQVU7Y0FBQ3BGLElBQUksRUFBQyxRQUFRO2NBQUNxRixRQUFRLEVBQUUwRTtZQUFZLEVBQUk7WUFFdEYsT0FBTzlOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnSSxTQUFBLENBQUFPLGdCQUFnQjtjQUFDdEYsSUFBSSxFQUFDO1lBQVMsRUFBRztVQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTFDLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVU4TixrQkFBa0JBLENBQUM7WUFBRXZNLElBQUk7WUFBRUM7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQzRCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0RCxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMMUIsS0FBSyxFQUFFO2dCQUFFNkQsVUFBVSxFQUFFN0QsS0FBSztnQkFBRWU7Y0FBTyxDQUFFO2NBQ3JDakIsUUFBUTtjQUNSeUI7WUFBUSxDQUNSLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEIsSUFBSSxDQUFDUCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1RLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSHNCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCN0IsT0FBTyxFQUFFO2dCQUNULE1BQU1FLFFBQVEsQ0FBQ3FNLFlBQVksRUFBRTtnQkFFN0IsTUFBTS9KLElBQUksR0FBRztrQkFBRWdDLEtBQUssRUFBRXRFLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ1ksT0FBTyxFQUFFO2tCQUFFYixTQUFTLEVBQUVyRSxRQUFRLENBQUNxRSxTQUFTLENBQUNhLE9BQU8sRUFBRTtrQkFBRTFDLE9BQU8sRUFBRTtnQkFBSyxDQUFFO2dCQUV6R2YsUUFBUSxDQUFDYSxJQUFJLENBQUM7ZUFDZCxDQUFDLE9BQU82QyxDQUFDLEVBQUU7Z0JBQ1hOLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDUyxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVHhELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxPQUNDdEQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FDWlgsSUFBSTtjQUNKQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJPLFNBQVMsRUFBRUEsU0FBUztjQUNwQlUsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVILEtBQUssRUFBRUMsT0FBTyxDQUFDTjtjQUFNO1lBQUUsR0FFcEN0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUNvTSxXQUFXLENBQUM3TCxLQUFLLENBQU0sRUFDbENwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxZQUFJZSxLQUFLLENBQUNvTSxXQUFXLENBQUN6TCxXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBeEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWlPLGNBQUEsR0FBQWpPLE9BQUE7VUFDQSxJQUFBa08sY0FBQSxHQUFBbE8sT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBQ0EsSUFBQW9PLGVBQUEsR0FBQXBPLE9BQUE7VUFDQSxJQUFBcU8sT0FBQSxHQUFBck8sT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXNPLFlBQUEsR0FBQXRPLE9BQUE7VUFFTSxTQUFVdU8sZ0JBQWdCQSxDQUFDO1lBQUVyTDtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFeEIsUUFBUTtjQUFFRTtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQzBNLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzFPLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUNvTCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHNU8sTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU1zTCxhQUFhLEdBQUdBLENBQUEsS0FBTUQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztZQUVoRCxJQUFJeEwsSUFBSSxLQUFLLGlCQUFpQixFQUFFLE9BQU9uRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdU4sZUFBQSxDQUFBUyxrQkFBa0IsT0FBRztZQUM3RCxJQUFJM0wsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dOLE9BQUEsQ0FBQVMsVUFBVSxPQUFHO1lBRTVDLE1BQU1DLEtBQUssR0FBRztjQUNiLGdCQUFnQixFQUFFYixjQUFBLENBQUF4QixpQkFBaUI7Y0FDbkNzQyxNQUFNLEVBQUViLE9BQUEsQ0FBQVAsVUFBVTtjQUNsQnFCLE1BQU0sRUFBRVosT0FBQSxDQUFBUyxVQUFVO2NBQ2xCLGlCQUFpQixFQUFFVixlQUFBLENBQUFTLGtCQUFrQjtjQUNyQyxnQkFBZ0IsRUFBRVosY0FBQSxDQUFBbEY7YUFDbEI7WUFFRCxJQUFJLENBQUNnRyxLQUFLLENBQUM3TCxJQUFJLENBQUMsRUFBRXFELE9BQU8sQ0FBQ0gsS0FBSyxDQUFDLGtCQUFrQixFQUFFbEQsSUFBSSxFQUFFNkwsS0FBSyxDQUFDO1lBRWhFLE1BQU16SyxJQUFJLEdBQUd5SyxLQUFLLENBQUM3TCxJQUFJLENBQUM7WUFFeEIsTUFBTWlKLFdBQVcsR0FBR0EsQ0FBQSxLQUFNc0Msa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU12QixLQUFLLEdBQUc7Y0FBRTFNLE9BQU8sRUFBRTRMLFdBQVc7Y0FBRUMsUUFBUSxFQUFFMUssUUFBUSxDQUFDc0UsS0FBSyxDQUFDc0YsS0FBSyxJQUFJNUosUUFBUSxDQUFDcUUsU0FBUyxDQUFDdUY7WUFBSyxDQUFFO1lBRWxHLE9BQ0N2TCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBMEIsR0FDM0N0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUNvRSxLQUFLLENBQUM3RCxLQUFLLENBQU0sRUFFNUJwQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQWdDLEdBQzlDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUM2RCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUtzSSxLQUFLO2NBQUVsTSxJQUFJLEVBQUM7WUFBUSxHQUM3Q2EsS0FBSyxDQUFDZSxPQUFPLENBQUN1TSxNQUFNLENBQ2IsQ0FDSixDQUNFLEVBQ1RuUCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsSUFBSTtjQUFDb0ssT0FBTyxFQUFFQSxPQUFPO2NBQUVFLGFBQWEsRUFBRUE7WUFBYSxFQUFJLEVBQ3hEN08sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lOLFlBQUEsQ0FBQVIsa0JBQWtCO2NBQUN2TSxJQUFJLEVBQUVpTixlQUFlO2NBQUVoTixPQUFPLEVBQUUySztZQUFXLEVBQUksQ0FDakU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQXBNLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFpSCxZQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFFTSxTQUFVbVAsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUV2TixLQUFLO2NBQUVELEtBQUs7Y0FBRTRCLFNBQVM7Y0FBRTdCO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTXNOLFFBQVEsR0FBRztjQUFFckwsS0FBSyxFQUFFLEVBQUU7Y0FBRXJCLEtBQUssRUFBRWQsS0FBSyxDQUFDeU4sU0FBUyxDQUFDQyxNQUFNLENBQUM1SztZQUFXLENBQUU7WUFDekUsTUFBTSxDQUFDNkssUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3pQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDNUIsUUFBUSxDQUFDNk4sUUFBUSxDQUFDO1lBQ2pFLE1BQU01TCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCNEwsV0FBVyxDQUFDNUwsS0FBSyxDQUFDQyxhQUFhLENBQUNFLEtBQUssQ0FBQztjQUN0QyxNQUFNckMsUUFBUSxDQUFDK04sR0FBRyxDQUFDO2dCQUFFRixRQUFRLEVBQUUzTCxLQUFLLENBQUNDLGFBQWEsQ0FBQ0U7Y0FBSyxDQUFFLENBQUM7Y0FDM0QsTUFBTXBDLEtBQUssQ0FBQytOLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTXRJLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3VJLEdBQUcsQ0FBQy9DLElBQUksS0FBSztjQUFFN0ksS0FBSyxFQUFFNkksSUFBSTtjQUFFbEssS0FBSyxFQUFFZCxLQUFLLENBQUN5TixTQUFTLENBQUN6QyxJQUFJO1lBQUMsQ0FBRSxDQUFDLENBQUM7WUFDekYsTUFBTVIsUUFBUSxHQUFHO2NBQUVTLFVBQVUsRUFBRWxMLEtBQUssQ0FBQ2lPO1lBQUssQ0FBRTtZQUU1QyxPQUNDN1AsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsY0FDQ2QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT2lILE9BQU8sRUFBQztZQUFFLEdBQUVsRyxLQUFLLENBQUN5TixTQUFTLENBQUNDLE1BQU0sQ0FBQzVNLEtBQUssQ0FBUyxFQUN4RDNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNvRyxZQUFBLENBQUFjLFdBQVc7Y0FDWGhFLEtBQUssRUFBRXJDLFFBQVEsQ0FBQzZOLFFBQVE7Y0FDeEJ6TCxJQUFJLEVBQUMsVUFBVTtjQUNmc0QsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCekQsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZHlJO1lBQVEsRUFDWCxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFsTSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBb0ksV0FBQSxHQUFBcEksT0FBQTtVQUVNLFNBQVU0SyxrQkFBa0JBLENBQUM7WUFDbEM5RyxJQUFJO1lBQ0p0QjtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUVmLE1BQU07Y0FBRTBCLFFBQVE7Y0FBRXpCLFFBQVE7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNpRCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqRixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTUssUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTWlFLE1BQU0sR0FBR2pFLEtBQUssQ0FBQ0MsYUFBYTtjQUNsQyxNQUFNa0MsU0FBUyxHQUFHO2dCQUFFLEdBQUd0RSxNQUFNLENBQUNzRTtjQUFTLENBQUU7Y0FFekM1QyxRQUFRLENBQUM7Z0JBQUU0QyxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRSxDQUFDakMsSUFBSSxHQUFHK0QsTUFBTSxDQUFDOUQ7Z0JBQUssQ0FBRTtnQkFBRUcsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQy9FLENBQUM7WUFFRCxNQUFNb0UsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSTdHLE1BQU0sQ0FBQ3lDLE9BQU8sRUFBRTtnQkFDbkJjLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR4QyxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTVQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIsTUFBTWdFLFNBQVMsR0FBRztnQkFBRSxHQUFHdEUsTUFBTSxDQUFDc0U7Y0FBUyxDQUFFO2NBQ3pDNUMsUUFBUSxDQUFDO2dCQUFFNEMsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ2pDLElBQUksR0FBR3BDLFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQ2pDLElBQUk7Z0JBQUM7Y0FBRSxDQUFFLENBQUM7Y0FDM0VrQixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ4QyxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZDLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ2pGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUEwQixRQUFRO2NBQ1JiLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkcsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZDLEtBQUssRUFBRXRDLE1BQU0sQ0FBQ3NFLFNBQVMsR0FBR2pDLElBQUksQ0FBQyxJQUFJLEVBQUU7Y0FDckNZLFdBQVcsRUFBRTlDLEtBQUssQ0FBQytELE1BQU0sQ0FBQzdCLElBQUksQ0FBQyxDQUFDVztZQUFRLEVBQ3ZDLEVBQ0YxRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQXdDLEdBQ3pEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNQLE9BQU8sRUFBRStILGFBQWE7Y0FBRTNELE9BQU8sRUFBQyxTQUFTO2NBQUMrRCxRQUFRO1lBQUEsR0FDeEQ5RyxLQUFLLENBQUNlLE9BQU8sQ0FBQ04sTUFBTSxDQUNiLEVBQ1R0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUgsV0FBQSxDQUFBTyxVQUFVO2NBQUN6QyxRQUFRLEVBQUUxRDtZQUFRLEVBQUksQ0FDMUIsRUFDUnVDLGVBQWUsSUFDZmhGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQWMsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRVMsUUFBUSxFQUFFNkM7WUFBYSxHQUMxRHRGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGNBQU1lLEtBQUssQ0FBQytELE1BQU0sQ0FBQ3RELE1BQU0sQ0FBTyxDQUVqQyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUF0QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUwsU0FBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBd0wsY0FBQSxHQUFBeEwsT0FBQTtVQUNBLElBQUE2UCxtQkFBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBRU0sU0FBVXdOLFlBQVlBLENBQUM7WUFBRTFKO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQUVwQyxRQUFRO2NBQUVFO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDNkQsTUFBTSxFQUFFcUQsU0FBUyxDQUFDLEdBQUdqSixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDd00sUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hRLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDNUIsUUFBUSxDQUFDcUUsU0FBUyxDQUFDakMsSUFBSSxDQUFDLENBQUM7WUFDeEUsTUFBTTRILGNBQWMsR0FBR0EsQ0FBQSxLQUFNMUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUM1QyxNQUFNNkUsWUFBWSxHQUFHQSxDQUFBLEtBQU03RSxTQUFTLENBQUMsQ0FBQ3JELE1BQU0sQ0FBQztZQUU3QyxJQUFBbUQsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQ3ZILFFBQVEsQ0FBQ3FFLFNBQVMsQ0FBQyxFQUFFLE1BQU1nSyxXQUFXLENBQUNyTyxRQUFRLENBQUNxRSxTQUFTLENBQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTVFLElBQUk2QixNQUFNLEVBQUUsT0FBTzVGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnUCxtQkFBQSxDQUFBakYsa0JBQWtCO2NBQUM5RyxJQUFJLEVBQUVBLElBQUk7Y0FBRXRCLFFBQVEsRUFBRXFMO1lBQVksRUFBSTtZQUM3RSxJQUFJLENBQUNpQyxRQUFRLEVBQUUsT0FBTy9QLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMySyxjQUFBLENBQUFNLGFBQWE7Y0FBQ2hJLElBQUksRUFBRUEsSUFBSTtjQUFFcUYsUUFBUSxFQUFFMEU7WUFBWSxFQUFJO1lBRTNFLE9BQ0M5TixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBaU4saUJBQWlCLFFBQ2pCalEsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBU3dELFNBQVMsRUFBQztZQUFtQixHQUNyQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwSyxTQUFBLENBQUFLLFFBQVE7Y0FBQ25CLE9BQU8sRUFBRXFGO1lBQVEsRUFBSSxDQUN0QixFQUNWL1AsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUF3RSxHQUN0RnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDUixPQUFPLEVBQUVtTCxjQUFjO2NBQUUvRyxPQUFPLEVBQUMsU0FBUztjQUFDK0QsUUFBUTtZQUFBLEdBQ3JFOUcsS0FBSyxDQUFDZSxPQUFPLENBQUNrSixJQUFJLENBQ1gsQ0FDSixDQUNhO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBOUwsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNEksTUFBQSxHQUFBNUksT0FBQTtVQUNBLElBQUFpUSxnQkFBQSxHQUFBalEsT0FBQTtVQUVNLFNBQVVrUSxhQUFhQSxDQUFDO1lBQUVDO1VBQVUsQ0FBRTtZQUMzQyxNQUFNO2NBQUV6TztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZDLE9BQ0MvQixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNvUCxnQkFBQSxDQUFBRyxvQkFBb0IsT0FBRyxFQUN4QnJRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMrSCxNQUFBLENBQUFNLFVBQVU7Y0FDVnBGLElBQUksRUFBQyxpQkFBaUI7Y0FDdEJxRixRQUFRLEVBQUVnSCxVQUFVO2NBQ3BCaEssZUFBZSxFQUFFO2dCQUFFa0ssT0FBTyxFQUFFM08sUUFBUSxDQUFDc0UsS0FBSyxDQUFDcUs7Y0FBTztZQUFFLEVBQ25ELENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQk8sTUFBTUMsa0JBQWtCLEdBQUFySSxPQUFBLENBQUFxSSxrQkFBQSxHQUFHLENBQ2pDO1lBQ0NDLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0JuSixPQUFPLEVBQUUsQ0FDUix5QkFBeUIsRUFDekIsOEJBQThCLEVBQzlCLHVCQUF1QixFQUN2QixvQkFBb0IsQ0FDcEI7WUFDRG9KLGNBQWMsRUFBRTtXQUNoQixFQUNEO1lBQ0NELFFBQVEsRUFBRSxzQ0FBc0M7WUFDaERuSixPQUFPLEVBQUUsQ0FDUixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLGtDQUFrQyxFQUNsQyx1QkFBdUIsQ0FDdkI7WUFDRG9KLGNBQWMsRUFBRTtXQUNoQixFQUNEO1lBQ0NELFFBQVEsRUFBRSw0RUFBNEU7WUFDdEZuSixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQztZQUNwRW9KLGNBQWMsRUFBRTtXQUNoQixFQUNEO1lBQ0NELFFBQVEsRUFBRSxvRUFBb0U7WUFDOUVuSixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUNwRW9KLGNBQWMsRUFBRTtXQUNoQixFQUNEO1lBQ0NELFFBQVEsRUFBRSxxRUFBcUU7WUFDL0VuSixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7WUFDakRvSixjQUFjLEVBQUU7V0FDaEIsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0QsSUFBQXpRLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBRUEsSUFBQXFLLE9BQUEsR0FBQXJLLE9BQUE7VUFFTSxTQUFVNk8sa0JBQWtCQSxDQUFDO1lBQUVoQixZQUFZO1lBQUV6STtVQUFJLENBQUU7WUFDeEQsTUFBTTtjQUFFeEQsS0FBSztjQUFFRixRQUFRO2NBQUV5QjtZQUFRLENBQUUsR0FBRyxJQUFBOUIsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN4RCxNQUFNcUgsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJoRyxRQUFRLENBQUM7Z0JBQUU2QyxLQUFLLEVBQUV0RSxRQUFRLENBQUNzRSxLQUFLLENBQUNZLE9BQU87Y0FBRSxDQUFFLENBQUM7WUFDOUMsQ0FBQztZQUVELE9BQ0M3RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFFQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN3SixPQUFBLENBQUFvRyxVQUFVO2NBQUNqTyxRQUFRLEVBQUUyRztZQUFRLEVBQUksQ0FDaEM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXBKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9JLFdBQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBMFEsVUFBQSxHQUFBMVEsT0FBQTtVQUVNLFNBQVV5USxVQUFVQSxDQUFDO1lBQUVqTztVQUFRLENBQUU7WUFDdEMsTUFBTTtjQUFFWjtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBR3BDLE1BQU02TyxNQUFNLEdBQUdBLENBQUEsS0FBSyxDQUVwQixDQUFDO1lBQ0QsT0FDQzVRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBeUMsR0FDM0R0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNlAsVUFBQSxDQUFBRSxvQkFBb0IsT0FBRyxFQUN4QjdRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBbUQsR0FDcEV0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQzZELE9BQU8sRUFBQyxTQUFTO2NBQUMrRCxRQUFRO2NBQUNuSSxPQUFPLEVBQUVpQztZQUFRLEdBQ2xEWixLQUFLLENBQUNlLE9BQU8sQ0FBQ04sTUFBTSxDQUNiLEVBQ1R0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUgsV0FBQSxDQUFBTyxVQUFVO2NBQUN6QyxRQUFRLEVBQUUxRDtZQUFRLEVBQUksQ0FDMUIsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBekMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTZRLFlBQUEsR0FBQTdRLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNNLFNBQVU4USxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRWxQO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDcEMsSUFBSTtjQUFFYTtZQUFPLENBQUUsR0FBR2YsS0FBSyxDQUFDbVAsY0FBYztZQUN0QyxNQUFNO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFILFlBQUEsQ0FBQUkscUJBQXFCLEdBQUU7WUFDM0MsT0FDQ2xSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBMEQsR0FDNUV0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQzZELE9BQU8sRUFBQyxNQUFNO2NBQUNwRSxPQUFPLEVBQUV5UTtZQUFPLEdBQ3JDck8sT0FBTyxDQUFDdU8sV0FBVyxDQUNaLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQW5SLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQTZRLFlBQUEsR0FBQTdRLE9BQUE7VUFDTSxTQUFVbVIsb0JBQW9CQSxDQUFDO1lBQUUvRSxRQUFRO1lBQUVnRixLQUFLO1lBQUVDO1VBQU0sQ0FBRTtZQUMvRCxNQUFNO2NBQ0x6UCxLQUFLLEVBQUU7Z0JBQUVtUCxjQUFjLEVBQUVuUDtjQUFLO1lBQUUsQ0FDaEMsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRWtQO1lBQU8sQ0FBRSxHQUFHLElBQUFILFlBQUEsQ0FBQUkscUJBQXFCLEdBQUU7WUFDM0MsTUFBTTFRLE9BQU8sR0FBR3FELEtBQUssSUFBRztjQUN2QixJQUFJLENBQUN5TixNQUFNLEVBQUU7Z0JBQ1osT0FBT0QsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FFbkJKLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDalIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBU3dELFNBQVMsRUFBQztZQUF5QixHQUMzQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDcUIsS0FBSyxFQUFFUCxLQUFLLENBQUNlLE9BQU8sQ0FBQzJPLFNBQVM7Y0FBRS9RLE9BQU8sRUFBRUEsT0FBTztjQUFFNkwsUUFBUSxFQUFFQTtZQUFRLEdBQzFFeEssS0FBSyxDQUFDZSxPQUFPLENBQUMyTyxTQUFTLENBQ2hCLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQXZSLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1UixPQUFBLEdBQUF2UixPQUFBO1VBQ0EsSUFBQXdSLEtBQUEsR0FBQXhSLE9BQUE7VUFDQSxJQUFBeVIsT0FBQSxHQUFBelIsT0FBQTtVQUVNLFNBQVUwUixrQkFBa0JBLENBQUM7WUFBRW5RLElBQUk7WUFBRW9RLE9BQU87WUFBRWhPLFFBQVE7WUFBRXlJO1VBQVEsQ0FBRTtZQUN2RSxNQUFNLENBQUN3RixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHOVIsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE9BQ0N2RCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFEsT0FBTyxDQUFDTyxRQUFRO2NBQ2hCaE8sSUFBSSxFQUFDLGtCQUFrQjtjQUN2Qk8sU0FBUyxFQUFDLGtDQUFrQztjQUM1Q04sS0FBSyxFQUFFNE4sT0FBTztjQUNkOUcsSUFBSSxFQUFFMkcsS0FBQSxDQUFBTyx5QkFBeUI7Y0FDL0JwTyxRQUFRLEVBQUVBO1lBQVEsR0FFakIsQ0FBQ3BDLElBQUksSUFBSXFRLEtBQUssS0FBSzdSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUSxPQUFPLENBQUNyRyxJQUFJO2NBQUM3RyxTQUFTLEVBQUM7WUFBYyxFQUFHLEVBQzdEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRRLE9BQUEsQ0FBQU4sb0JBQW9CO2NBQUNFLE1BQU0sRUFBRTlQLElBQUksSUFBSXFRLEtBQUs7Y0FBRXhGLFFBQVEsRUFBRUEsUUFBUTtjQUFFZ0YsS0FBSyxFQUFFUztZQUFRLEVBQUksQ0FDbEU7VUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUE5UixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEMsS0FBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnUyxTQUFBLEdBQUFoUyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNlEsWUFBQSxHQUFBN1EsT0FBQTtVQUVNLFNBQVUrUix5QkFBeUJBLENBQUN2UixLQUFLO1lBQzlDLE1BQU07Y0FBRXlSO1lBQVMsQ0FBRSxHQUFHLElBQUFELFNBQUEsQ0FBQUUsUUFBUSxFQUFDMVIsS0FBSyxDQUFDMlIsS0FBSyxDQUFDO1lBQzNDLE1BQU07Y0FBRUMsT0FBTztjQUFFck8sS0FBSyxHQUFHO1lBQUUsQ0FBRSxHQUFHdkQsS0FBSyxDQUFDdUQsS0FBSztZQUMzQyxNQUFNO2NBQUV0QyxNQUFNO2NBQUU4QixTQUFTO2NBQUU4TztZQUFVLENBQUUsR0FBRyxJQUFBeEIsWUFBQSxDQUFBSSxxQkFBcUIsR0FBRTtZQUNqRSxNQUFNO2NBQ0xyUCxLQUFLLEVBQUU7Z0JBQUVtUCxjQUFjLEVBQUVuUDtjQUFLO1lBQUUsQ0FDaEMsR0FBRyxJQUFBUCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXRCLE1BQU13USxHQUFHLEdBQUcsMkJBQTJCRixPQUFPLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxFQUFFO1lBQ2pGLE1BQU16TyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QnBELEtBQUssQ0FBQytSLFFBQVEsQ0FBQztnQkFBRXhPLEtBQUssRUFBRUgsS0FBSyxDQUFDaUUsTUFBTSxDQUFDOUQsS0FBSztnQkFBRXFPLE9BQU8sRUFBRSxDQUFDLENBQUNBO2NBQU8sQ0FBRSxDQUFDO1lBQ2xFLENBQUM7WUFDRCxNQUFNSSxVQUFVLEdBQUdBLENBQUEsS0FBTUgsVUFBVSxDQUFDN1IsS0FBSyxDQUFDMlIsS0FBSyxDQUFDO1lBQ2hELE1BQU1NLGFBQWEsR0FBRzdPLEtBQUssSUFBRztjQUM3QixNQUFNOE8sS0FBSyxHQUFHQSxDQUFDOUYsSUFBSSxFQUFFdUYsS0FBSyxLQUFJO2dCQUM3QixPQUFPQSxLQUFLLEtBQUszUixLQUFLLENBQUMyUixLQUFLLEdBQUc7a0JBQUUsR0FBR3ZGLElBQUk7a0JBQUV3RixPQUFPLEVBQUUsQ0FBQ0E7Z0JBQU8sQ0FBRSxHQUFHO2tCQUFFLEdBQUd4RixJQUFJO2tCQUFFd0YsT0FBTyxFQUFFO2dCQUFLLENBQUU7Y0FDNUYsQ0FBQztjQUNEN08sU0FBUyxDQUFDOUIsTUFBTSxDQUFDa08sR0FBRyxDQUFDK0MsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUVELE9BQ0MzUyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQWlELEdBQy9EdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUFXLEdBQUU3RCxLQUFLLENBQUMyUixLQUFLLEdBQUcsQ0FBQyxFLElBQVEsRUFFbkRwUyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBMEYsS0FBSztjQUNMdEYsSUFBSSxFQUFDLE1BQU07Y0FDWGEsS0FBSyxFQUFFQSxLQUFLO2NBQ1prTyxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJ0TyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJlLFdBQVcsRUFBRTlDLEtBQUssQ0FBQytQLE9BQU8sQ0FBQ2pOO1lBQVcsRUFDckMsRUFDRjNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBZSxHQUNqQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFVBQVU7Y0FDVkosSUFBSSxFQUFDLGNBQWM7Y0FDbkJzRCxTQUFTLEVBQUVpTyxHQUFHO2NBQ2RuUSxLQUFLLEVBQUVQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDZ1EsV0FBVztjQUNoQ3BTLE9BQU8sRUFBRWtTO1lBQWEsRUFDckIsRUFDRjFTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFVBQVU7Y0FDVkosSUFBSSxFQUFDLFFBQVE7Y0FDYnNELFNBQVMsRUFBQyxtQkFBbUI7Y0FDN0JsQyxLQUFLLEVBQUVQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDdU0sTUFBTTtjQUMzQjNPLE9BQU8sRUFBRWlTO1lBQVUsRUFDbEIsQ0FDTyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF6UyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNFMsV0FBQSxHQUFBNVMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBSSxZQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVNlMsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVuUixRQUFRO2NBQUVFLEtBQUs7Y0FBRUgsTUFBTTtjQUFFMEI7WUFBUSxDQUFFLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsSUFBSTtjQUFFYTtZQUFPLENBQUUsR0FBR2YsS0FBSyxDQUFDbVAsY0FBYztZQUN0QyxNQUFNLENBQUMrQixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHaFQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU02SSxXQUFXLEdBQUdBLENBQUEsS0FBTTRHLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTXBJLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsTUFBTXBFLFFBQVEsR0FBRyxNQUFNNUUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDL0IsUUFBUSxFQUFFO2NBRWhELE1BQU0rTyxTQUFTLEdBQUcxTSxRQUFRLENBQUMwTSxTQUFTLENBQUNyRCxHQUFHLENBQUMsQ0FBQztnQkFBRVksUUFBUTtnQkFBRW5KLE9BQU87Z0JBQUVvSjtjQUFjLENBQUUsTUFBTTtnQkFDcEZELFFBQVE7Z0JBQ1JuSixPQUFPO2dCQUNQNkwsYUFBYSxFQUFFekM7ZUFDZixDQUFDLENBQUM7Y0FDSHJOLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRTtrQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUUsS0FBSztrQkFBRWdOLFNBQVMsRUFBRSxDQUFDLEdBQUd2UixNQUFNLENBQUN1RSxLQUFLLENBQUNnTixTQUFTLEVBQUUsR0FBR0EsU0FBUztnQkFBQyxDQUFFO2dCQUFFOU8sT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQzlHLENBQUM7WUFFRCxNQUFNM0QsT0FBTyxHQUFHQSxDQUFBLEtBQU1ILFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUN3TCxXQUFXLENBQUM7WUFFN0QsT0FDQ3BNLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBc0QsR0FDeEV0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBMUMsUUFBUTtjQUFDc0UsT0FBTyxFQUFDLE1BQU07Y0FBQ3BFLE9BQU8sRUFBRUE7WUFBTyxHQUN2Q29DLE9BQU8sQ0FBQ3VRLGlCQUFpQixDQUNoQixFQUNYblQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytSLFdBQUEsQ0FBQU8sZUFBZTtjQUNmNVIsSUFBSSxFQUFFdVIsU0FBUztjQUNmdFIsT0FBTyxFQUFFMkssV0FBVztjQUNwQmhLLEtBQUssRUFBRVAsS0FBSyxDQUFDbVAsY0FBYyxDQUFDcUMsY0FBYyxDQUFDalIsS0FBSztjQUNoRGtSLFlBQVksRUFBRXpSLEtBQUssQ0FBQ21QLGNBQWMsQ0FBQ3FDLGNBQWMsQ0FBQzdRLFdBQVc7Y0FDN0RtSSxVQUFVLEVBQUVBO1lBQVUsRUFDckIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBbUcsWUFBQSxHQUFBN1EsT0FBQTtVQUNNLFNBQVVrUyxRQUFRQSxDQUFDQyxLQUFLO1lBQzdCLE1BQU07Y0FBRW5CLE9BQU87Y0FBRXNDLElBQUk7Y0FBRWpCLFVBQVU7Y0FBRS9LO1lBQUssQ0FBRSxHQUFHLElBQUF1SixZQUFBLENBQUFJLHFCQUFxQixHQUFFO1lBRXBFLE1BQU1zQyxLQUFLLEdBQUdwQixLQUFLLElBQUc7Y0FDckJxQixVQUFVLENBQUNyUCxVQUFVLENBQUMsTUFBTW1QLElBQUksQ0FBQ3pKLE9BQU8sQ0FBQ3NJLEtBQUssQ0FBQyxFQUFFc0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDRixLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELE1BQU10QixTQUFTLEdBQUdyTyxLQUFLLElBQUc7Y0FDekIsTUFBTUcsS0FBSyxHQUFHSCxLQUFLLENBQUNDLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDMlAsSUFBSSxFQUFFO2NBRTlDLElBQUk5UCxLQUFLLENBQUN1SixHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN4QjtnQkFDQSxJQUFJdkosS0FBSyxDQUFDK1AsUUFBUSxJQUFJeEIsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDcE8sS0FBSyxFQUFFO29CQUNYc08sVUFBVSxDQUFDRixLQUFLLENBQUM7O2tCQUVsQm9CLEtBQUssQ0FBQ3BCLEtBQUssR0FBRyxDQUFDLENBQUM7a0JBQ2hCdk8sS0FBSyxDQUFDZ1EsY0FBYyxFQUFFO2tCQUN0Qjs7Z0JBRUQ7Z0JBQ0EsSUFBSXpCLEtBQUssR0FBRzdLLEtBQUssQ0FBQ3VNLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQzdCTixLQUFLLENBQUNwQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQjs7Z0JBRUR2TyxLQUFLLENBQUNnUSxjQUFjLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQzdQLEtBQUssRUFBRTtnQkFDWmlOLE9BQU8sRUFBRTtnQkFFVHdDLFVBQVUsQ0FBQ3JQLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQm9QLEtBQUssQ0FBQ3BCLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7O2NBR04sSUFBSXZPLEtBQUssQ0FBQ3VKLEdBQUcsS0FBSyxXQUFXLElBQUksQ0FBQ3BKLEtBQUssRUFBRTtnQkFDeENILEtBQUssQ0FBQ2dRLGNBQWMsRUFBRTtnQkFFdEIsSUFBSWhRLEtBQUssQ0FBQytQLFFBQVEsSUFBSXhCLEtBQUssR0FBRyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQ3BPLEtBQUssRUFBRTtvQkFDWHNPLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDO29CQUNqQm9CLEtBQUssQ0FBQ3BCLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUdqQnZPLEtBQUssQ0FBQ2dRLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVELElBQUl6QixLQUFLLEdBQUcsQ0FBQyxFQUFFRSxVQUFVLENBQUNGLEtBQUssQ0FBQzs7WUFFbEMsQ0FBQztZQUNELE9BQU87Y0FBRUY7WUFBUyxDQUFFO1VBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBbFMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXVSLE9BQUEsR0FBQXZSLE9BQUE7VUFDQSxJQUFBOFQsU0FBQSxHQUFBOVQsT0FBQTtVQUNBLElBQUErVCxRQUFBLEdBQUEvVCxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBZ1UsT0FBQSxHQUFBaFUsT0FBQTtVQUNNLFNBQVU0USxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFblAsTUFBTTtjQUFFMEI7WUFBUSxDQUFFLEdBQUcsSUFBQTlCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFL0MsTUFBTTZCLFFBQVEsR0FBR0EsQ0FBQztjQUFFRSxhQUFhLEVBQUVnRTtZQUFNLENBQUUsS0FBSTtjQUM5QyxNQUFNN0IsS0FBSyxHQUFHO2dCQUFFLEdBQUd2RSxNQUFNLENBQUN1RTtjQUFLLENBQUU7Y0FDakMsTUFBTWdOLFNBQVMsR0FBR25MLE1BQU0sQ0FBQzlELEtBQUssQ0FBQzRMLEdBQUcsQ0FBQy9DLElBQUksS0FBSztnQkFDM0MyRCxRQUFRLEVBQUUzRCxJQUFJLENBQUMyRCxRQUFRO2dCQUN2Qm5KLE9BQU8sRUFBRXdGLElBQUksQ0FBQ3hGLE9BQU87Z0JBQ3JCNkwsYUFBYSxFQUFFckcsSUFBSSxDQUFDcUc7ZUFDcEIsQ0FBQyxDQUFDO2NBRUg5UCxRQUFRLENBQUM7Z0JBQUU2QyxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRWdOO2dCQUFTLENBQUU7Z0JBQUU5TyxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDNUQsQ0FBQztZQUVELE9BQ0NuRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFEsT0FBTyxDQUFDTyxRQUFRO2NBQ2hCaE8sSUFBSSxFQUFDLFdBQVc7Y0FDaEJxRCxZQUFZLEVBQUU7Z0JBQUVvSixRQUFRLEVBQUU7Y0FBRSxDQUFFO2NBQzlCMEQsU0FBUztjQUNUcEosSUFBSSxFQUFFaUosU0FBQSxDQUFBSSxtQkFBbUI7Y0FDekJuUSxLQUFLLEVBQUV0QyxNQUFNLENBQUN1RSxLQUFLLENBQUNnTixTQUFTO2NBQzdCclAsUUFBUSxFQUFFQTtZQUFRLEdBRWxCNUQsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ULE9BQUEsQ0FBQW5CLGFBQWEsT0FBRyxFQUNqQjlTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUSxPQUFPLENBQUNyRyxJQUFJO2NBQUM3RyxTQUFTLEVBQUM7WUFBcUMsRUFBRyxFQUNoRXRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrVCxRQUFBLENBQUFqRCxjQUFjLE9BQUcsQ0FDQTtVQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQS9RLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTRTLFdBQUEsR0FBQTVTLE9BQUE7VUFDQSxJQUFBZ1MsU0FBQSxHQUFBaFMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQW1VLFFBQUEsR0FBQW5VLE9BQUE7VUFDQSxJQUFBNlEsWUFBQSxHQUFBN1EsT0FBQTtVQUVBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQW9VLEtBQUEsR0FBQXBVLE9BQUE7VUFGQTs7VUFJTSxTQUFVa1UsbUJBQW1CQSxDQUFDMVQsS0FBSztZQUN4QyxNQUFNO2NBQUV5UjtZQUFTLENBQUUsR0FBRyxJQUFBRCxTQUFBLENBQUFFLFFBQVEsRUFBQzFSLEtBQUssQ0FBQzJSLEtBQUssQ0FBQztZQUMzQyxNQUFNO2NBQUV6UTtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3ZDLE1BQU07Y0FDTEYsS0FBSyxFQUFFO2dCQUFFbVAsY0FBYyxFQUFFblA7Y0FBSztZQUFFLENBQ2hDLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV0QjBSLFVBQVUsQ0FBQzlSLFFBQVEsR0FBR0EsUUFBUTtZQUM5QixNQUFNLENBQUNvUixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHaFQsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU02SSxXQUFXLEdBQUdBLENBQUEsS0FBTTRHLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTXVCLGNBQWMsR0FBR0EsQ0FBQSxLQUFLO2NBQzNCLE1BQU1DLFlBQVksR0FBRzlULEtBQUssQ0FBQ3VELEtBQUssQ0FBQ2tQLGFBQWE7Y0FDOUMsT0FBT3pTLEtBQUssQ0FBQ3VELEtBQUssQ0FBQ3FELE9BQU8sQ0FBQ3VJLEdBQUcsQ0FBQyxDQUFDNEUsTUFBTSxFQUFFcEMsS0FBSyxNQUFNO2dCQUFFcE8sS0FBSyxFQUFFd1EsTUFBTTtnQkFBRW5DLE9BQU8sRUFBRUQsS0FBSyxLQUFLbUM7Y0FBWSxDQUFFLENBQUMsQ0FBQztZQUN4RyxDQUFDO1lBQ0QsTUFBTTtjQUFFakM7WUFBVSxDQUFFLEdBQUcsSUFBQXhCLFlBQUEsQ0FBQUkscUJBQXFCLEdBQUU7WUFFOUMsTUFBTXROLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCcEQsS0FBSyxDQUFDK1IsUUFBUSxDQUFDO2dCQUFFaEMsUUFBUSxFQUFFM00sS0FBSyxDQUFDaUUsTUFBTSxDQUFDOUQsS0FBSztnQkFBRXFELE9BQU8sRUFBRXVLO2NBQU8sQ0FBRSxDQUFDO1lBQ25FLENBQUM7WUFFRCxNQUFNNkMsU0FBUyxHQUFHQSxDQUFDO2NBQUUzUSxhQUFhLEVBQUU7Z0JBQUVFLEtBQUssRUFBRTROO2NBQU87WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTThDLGtCQUFrQixHQUFHOUMsT0FBTyxDQUFDK0MsU0FBUyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3ZDLE9BQU8sQ0FBQztjQUN0RSxNQUFNYSxhQUFhLEdBQUd3QixrQkFBa0IsS0FBSyxDQUFDLENBQUMsR0FBR3hTLFNBQVMsR0FBR3dTLGtCQUFrQjtjQUNoRixNQUFNRyxRQUFRLEdBQUc7Z0JBQUVyRSxRQUFRLEVBQUV4TSxLQUFLO2dCQUFFcUQsT0FBTyxFQUFFdUssT0FBTyxDQUFDaEMsR0FBRyxDQUFDL0MsSUFBSSxJQUFJQSxJQUFJLENBQUM3SSxLQUFLLENBQUM7Z0JBQUVrUDtjQUFhLENBQUU7Y0FFN0Z6UyxLQUFLLENBQUMrUixRQUFRLENBQUNxQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUNELElBQUlqRCxPQUFPLEdBQUduUixLQUFLLENBQUN1RCxLQUFLLEVBQUVxRCxPQUFPLEdBQUdpTixjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQzFELE1BQU0sQ0FBQ1EsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRy9VLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDcU8sT0FBTyxDQUFDa0MsTUFBTSxDQUFDO1lBQ3BFLE1BQU05UCxLQUFLLEdBQUd2RCxLQUFLLENBQUN1RCxLQUFLLEVBQUV3TSxRQUFRLElBQUksRUFBRTtZQUN6QyxNQUFNaUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1ILFVBQVUsQ0FBQzdSLEtBQUssQ0FBQzJSLEtBQUssQ0FBQztZQUVoRCxNQUFNNEMsZUFBZSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNsQyxNQUFNQyxPQUFPLEdBQUcsSUFBSVosS0FBQSxDQUFBYSxjQUFjLEVBQUU7Y0FDcEM5SSxXQUFXLEVBQUU7Y0FDYmhJLFVBQVUsQ0FBQyxNQUFLO2dCQUNmNlEsT0FBTyxDQUFDRSxPQUFPLEVBQUU7Y0FDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNSLE9BQU9GLE9BQU87WUFDZixDQUFDO1lBQ0QsTUFBTUcsaUJBQWlCLEdBQUcsTUFBQUEsQ0FBTztjQUFFdFA7WUFBSyxDQUFFLEtBQUk7Y0FDN0MsTUFBTXVCLE9BQU8sR0FBRyxNQUFNMUYsUUFBUSxDQUFDc0UsS0FBSyxDQUFDZ04sU0FBUyxDQUFDeFMsS0FBSyxDQUFDMlIsS0FBSyxDQUFDLENBQUM0QyxlQUFlLENBQUM7Z0JBQUVsUDtjQUFLLENBQUUsQ0FBQztjQUN0RnJGLEtBQUssQ0FBQytSLFFBQVEsQ0FBQztnQkFBRWhDLFFBQVEsRUFBRXhNLEtBQUs7Z0JBQUVxRDtjQUFPLENBQUUsQ0FBQztZQUM3QyxDQUFDO1lBRUQsT0FDQ3JILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBa0MsR0FDcER0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQTJDLEdBSXpEdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUFXLEdBQUU3RCxLQUFLLENBQUMyUixLQUFLLEdBQUcsQ0FBQyxFLElBQVEsRUFFbkRwUyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUMsS0FBQSxDQUFBMEYsS0FBSztjQUFDMUUsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRTtjQUFFSixRQUFRLEVBQUVBLFFBQVE7Y0FBRXNPLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ3ZGbFMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBU3dELFNBQVMsRUFBQztZQUFlLEdBQ2pDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQXFTLGlCQUFpQjtjQUFDclUsSUFBSSxFQUFDLFNBQVM7Y0FBQ1IsT0FBTyxFQUFFd1UsZUFBZTtjQUFFNVMsS0FBSyxFQUFFUCxLQUFLLENBQUNlLE9BQU8sQ0FBQ29TO1lBQWUsRUFBSSxFQUNwR2hWLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFVBQVU7Y0FDVkosSUFBSSxFQUFDLFFBQVE7Y0FDYnNELFNBQVMsRUFBQyxtQkFBbUI7Y0FDN0I5RCxPQUFPLEVBQUVpUyxVQUFVO2NBQ25CclEsS0FBSyxFQUFFUCxLQUFLLENBQUNlLE9BQU8sQ0FBQ3VNO1lBQU0sRUFDMUIsQ0FDTyxDQUNMLEVBQ05uUCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1QsUUFBQSxDQUFBekMsa0JBQWtCO2NBQUN0RixRQUFRLEVBQUUsQ0FBQzVMLEtBQUssQ0FBQ3VELEtBQUs7Y0FBRXhDLElBQUksRUFBRXNULFdBQVc7Y0FBRWxELE9BQU8sRUFBRUEsT0FBTztjQUFFaE8sUUFBUSxFQUFFNlE7WUFBUyxFQUFJLEVBQ3hHelUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytSLFdBQUEsQ0FBQU8sZUFBZTtjQUNmNVIsSUFBSSxFQUFFdVIsU0FBUztjQUNmdFIsT0FBTyxFQUFFMkssV0FBVztjQUNwQmhLLEtBQUssRUFBRVAsS0FBSyxDQUFDeVQsWUFBWSxDQUFDbFQsS0FBSztjQUMvQmtSLFlBQVksRUFBRXpSLEtBQUssQ0FBQ3lULFlBQVksQ0FBQzlTLFdBQVc7Y0FDNUNtSSxVQUFVLEVBQUV5SztZQUFpQixFQUM1QixDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBLElBQUFwVixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUFzSyxLQUFBLEdBQUF0SyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNWLGlCQUFBLEdBQUF0VixPQUFBO1VBRU0sU0FBVXVWLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUU5VCxNQUFNO2NBQUVDLFFBQVE7Y0FBRXlCLFFBQVE7Y0FBRXZCO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxHQUFHMFQsa0JBQWtCLENBQUMsR0FBR3pWLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwRCxNQUFNdUksSUFBSSxHQUFHQSxDQUFBLEtBQU0ySixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFFM0MsT0FDQ3pWLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXdELFNBQVMsRUFBQztZQUFtQyxHQUNwRHRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQ29FLEtBQUssQ0FBQ2dOLFNBQVMsQ0FBQzdRLEtBQUssQ0FBTSxFQUN0Q3BDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFVBQVU7Y0FBQ0osSUFBSSxFQUFDLE1BQU07Y0FBQ1IsT0FBTyxFQUFFc0w7WUFBSSxFQUFJLENBQ2pDLEVBQ1Q5TCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUosS0FBQSxDQUFBWSxJQUFJO2NBQUM3RyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNpRCxLQUFLLEVBQUU3RixNQUFNLENBQUN1RSxLQUFLLENBQUNnTixTQUFTO2NBQUVoTixLQUFLLEVBQUUsRUFBRTtjQUFFbUYsT0FBTyxFQUFFbUssaUJBQUEsQ0FBQUc7WUFBZ0IsRUFBSSxDQUN6RztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBeFYsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNLLEtBQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUEwVixZQUFBLEdBQUExVixPQUFBO1VBQ00sU0FBVXlWLGdCQUFnQkEsQ0FBQztZQUNoQ3pSLElBQUk7WUFDSjJSLEVBQUUsR0FBRyxJQUFJO1lBQ1QxQixTQUFTLEdBQUc7VUFBSyxDQUlqQjtZQUNBLE1BQU0sQ0FBQzJCLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc5VixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTtjQUFFMUI7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNZ1UsT0FBTyxHQUFHQSxDQUFDO2NBQUU5UixJQUFJLEVBQUUyUSxNQUFNO2NBQUV4QztZQUFLLENBQW1DLEtBQUk7Y0FDNUUsTUFBTXBSLElBQUksR0FBR29SLEtBQUssS0FBS25PLElBQUksQ0FBQ2lQLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUM3RCxNQUFNWCxHQUFHLEdBQUcsdUNBQ1h2UixJQUFJLEtBQUssT0FBTyxHQUFHLG1CQUFtQixHQUFHLGtCQUMxQyxFQUFFO2NBQ0YsT0FDQ2hCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFJd0QsU0FBUyxFQUFFaU87Y0FBRyxHQUNqQnZTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFNd0QsU0FBUyxFQUFDO2NBQWdCLEdBQUV0RCxJQUFJLEtBQUssT0FBTyxJQUFJaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBc0YsSUFBSTtnQkFBQ3hFLElBQUksRUFBRUEsSUFBSTtnQkFBRXNELFNBQVMsRUFBQztjQUFTLEVBQUcsQ0FBUSxFQUN0R3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2dCQUFNd0QsU0FBUyxFQUFDO2NBQW9CLEdBQUVzUSxNQUFNLENBQVEsQ0FDaEQ7WUFFUCxDQUFDO1lBQ0QsTUFBTW9CLE9BQU8sR0FBR0osRUFBRTtZQUNsQixNQUFNSyxRQUFRLEdBQUdBLENBQUEsS0FBTSxDQUFDSixVQUFVO1lBRWxDLE9BQ0M3VixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa1YsT0FBTztjQUFDMVIsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZVLFlBQUEsQ0FBQU8sb0JBQW9CO2NBQUNELFFBQVEsRUFBRUE7WUFBUSxHQUN2Q2pXLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUM2VSxZQUFBLENBQUFRLGlCQUFpQixRQUNqQm5XLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQ0VvVCxTQUFTLEdBQ1RsVSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUFzRixJQUFJO2NBQUNsQixTQUFTLEVBQUMsZ0JBQWdCO2NBQUN0RCxJQUFJLEVBQUM7WUFBTSxFQUFHLEdBRS9DaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBc0YsSUFBSTtjQUFDbEIsU0FBUyxFQUFDLGdCQUFnQjtjQUFDdEQsSUFBSSxFQUFDO1lBQWMsRUFDcEQsRUFDRGhCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQU13RCxTQUFTLEVBQUM7WUFBb0IsR0FBRUwsSUFBSSxDQUFDdU0sUUFBUSxDQUFRLENBQ3ZELENBQ2MsRUFDcEJ4USxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNlUsWUFBQSxDQUFBUyxrQkFBa0I7Y0FBQ0gsUUFBUSxFQUFFQTtZQUFRLEdBQ3BDaFMsSUFBSSxDQUFDb0QsT0FBTyxFQUFFeU0sTUFBTSxHQUNwQjlULE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5SixLQUFBLENBQUFZLElBQUk7Y0FBQzVELEtBQUssRUFBRXRELElBQUksQ0FBQ29ELE9BQU87Y0FBRStELE9BQU8sRUFBRTJLO1lBQU8sRUFBSSxHQUUvQy9WLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBc0IsR0FBRXpDLEtBQUssQ0FBQ21QLGNBQWMsQ0FBQ3FGLFlBQVksQ0FDeEUsQ0FDbUIsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUFyVyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQXFLLE9BQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBNEksTUFBQSxHQUFBNUksT0FBQTtVQUNBLElBQUFzTyxZQUFBLEdBQUF0TyxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXNLLEtBQUEsR0FBQXRLLE9BQUE7VUFFTSxTQUFVNk8sa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU0sQ0FBQ0gsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVPLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUU3QixNQUFNO2NBQUVDLFFBQVE7Y0FBRXlCLFFBQVE7Y0FBRXZCO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDME0sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHMU8sTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQytTLFdBQVcsRUFBRUMsVUFBVSxDQUFDLEdBQUd2VyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTXNMLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDaEMsTUFBTXpMLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRXRFLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ1ksT0FBTztjQUFFLENBQUUsQ0FBQztjQUNuRCtILFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7WUFDckIsQ0FBQztZQUNELE1BQU02SCxhQUFhLEdBQUdBLENBQUEsS0FBTUQsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUNwRCxNQUFNRyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNeFEsS0FBSyxHQUFHdEUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDWSxPQUFPLEVBQUU7Y0FFdEN6RCxRQUFRLENBQUM7Z0JBQUU2QztjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBQThDLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUN2SCxRQUFRLENBQUNzRSxLQUFLLENBQUMsRUFBRXdRLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztZQUV4RCxJQUFJOUgsT0FBTyxFQUFFLE9BQU8zTyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0osT0FBQSxDQUFBb0csVUFBVTtjQUFDak8sUUFBUSxFQUFFb007WUFBYSxFQUFJO1lBQzNEO1lBQ0EsSUFBSSxDQUFDbk4sTUFBTSxDQUFDdUUsS0FBSyxFQUFFZ04sU0FBUyxFQUFFYSxNQUFNLEVBQUUsT0FBTzlULE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMrSCxNQUFBLENBQUFzSCxhQUFhO2NBQUNDLFVBQVUsRUFBRXZCO1lBQWEsRUFBSTtZQUN6RixNQUFNekMsV0FBVyxHQUFHQSxDQUFBLEtBQU1zQyxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsTUFBTXZCLEtBQUssR0FBRztjQUFFMU0sT0FBTyxFQUFFNEwsV0FBVztjQUFFQyxRQUFRLEVBQUUxSyxRQUFRLENBQUNzRSxLQUFLLENBQUNzRixLQUFLLElBQUk1SixRQUFRLENBQUNxRSxTQUFTLENBQUN1RjtZQUFLLENBQUU7WUFDbEcsTUFBTW1MLE1BQU0sR0FBRzdTLEtBQUssSUFBSStLLFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7WUFDNUMsTUFBTWdJLFNBQVMsR0FBRzlTLEtBQUssSUFBSTBTLFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFDbkQsTUFBTU0sU0FBUyxHQUFHO2NBQUVwVyxPQUFPLEVBQUVrVyxNQUFNO2NBQUVySyxRQUFRLEVBQUUxSyxRQUFRLENBQUNzRSxLQUFLLENBQUNzRixLQUFLLElBQUk1SixRQUFRLENBQUNxRSxTQUFTLENBQUN1RjtZQUFLLENBQUU7WUFDakcsTUFBTXNMLFlBQVksR0FBRztjQUFFclcsT0FBTyxFQUFFbVcsU0FBUztjQUFFdEssUUFBUSxFQUFFMUssUUFBUSxDQUFDc0UsS0FBSyxDQUFDc0YsS0FBSyxJQUFJNUosUUFBUSxDQUFDcUUsU0FBUyxDQUFDdUY7WUFBSyxDQUFFO1lBQ3ZHLE1BQU11TCxVQUFVLEdBQUcsQ0FBQ1IsV0FBVyxHQUFHelUsS0FBSyxDQUFDZSxPQUFPLENBQUNtVSxLQUFLLEdBQUdsVixLQUFLLENBQUNlLE9BQU8sQ0FBQ04sTUFBTTtZQUM1RSxPQUNDdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBUXdELFNBQVMsRUFBQztZQUEwQixHQUMzQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGFBQUtlLEtBQUssQ0FBQ29FLEtBQUssQ0FBQzdELEtBQUssQ0FBTSxFQUM1QnBDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBZ0MsR0FDN0MsQ0FBQ3FLLE9BQU8sSUFDUjNPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDNkQsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLZ1MsU0FBUztjQUFFNVYsSUFBSSxFQUFDO1lBQU0sR0FDL0NhLEtBQUssQ0FBQ2UsT0FBTyxDQUFDa0osSUFBSSxDQUVwQixFQUNEOUwsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUM2RCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUtpUyxZQUFZO2NBQUU3VixJQUFJLEVBQUM7WUFBTSxHQUNsRDhWLFVBQVUsQ0FDSCxFQUNUOVcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUM2RCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUtzSSxLQUFLO2NBQUVsTSxJQUFJLEVBQUM7WUFBUSxHQUM3Q2EsS0FBSyxDQUFDZSxPQUFPLENBQUN1TSxNQUFNLENBQ2IsQ0FDSixDQUNFLEVBQ1JSLE9BQU8sR0FDUDNPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN3SixPQUFBLENBQUFvRyxVQUFVO2NBQUNqTyxRQUFRLEVBQUVvTTtZQUFhLEVBQUksR0FFdkM3TyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUosS0FBQSxDQUFBaUwsa0JBQWtCO2NBQUN3QixVQUFVLEVBQUVWLFdBQVc7Y0FBRVcsTUFBTSxFQUFFVDtZQUFhLEVBQ2xFLENBQ0ksRUFDTnhXLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN5TixZQUFBLENBQUFSLGtCQUFrQjtjQUFDdk0sSUFBSSxFQUFFaU4sZUFBZTtjQUFFaE4sT0FBTyxFQUFFMks7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVBLElBQUFwTSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0ssS0FBQSxHQUFBdEssT0FBQTtVQUNBLElBQUFzVixpQkFBQSxHQUFBdFYsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQWlYLGFBQUEsR0FBQWpYLE9BQUE7VUFDQSxJQUFBb0ksV0FBQSxHQUFBcEksT0FBQTtVQUNNLFNBQVV1VixrQkFBa0JBLENBQUM7WUFBRXdCLFVBQVU7WUFBRUM7VUFBTSxDQUFFO1lBQ3hELE1BQU07Y0FBRXZWLE1BQU07Y0FBRUMsUUFBUTtjQUFFeUIsUUFBUTtjQUFFdkI7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNnVixLQUFLLEVBQUVJLFFBQVEsQ0FBQyxHQUFHblgsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM3QixNQUFNLENBQUN1RSxLQUFLLENBQUNnTixTQUFTLENBQUM7WUFFaEUsTUFBTTBELFNBQVMsR0FBR2pWLE1BQU0sSUFBRztjQUMxQnlWLFFBQVEsQ0FBQ3pWLE1BQU0sQ0FBQztjQUNoQixNQUFNdUUsS0FBSyxHQUFHO2dCQUFFLEdBQUd2RSxNQUFNLENBQUN1RTtjQUFLLENBQUU7Y0FDakNBLEtBQUssQ0FBQ2dOLFNBQVMsR0FBRyxDQUFDLEdBQUc4RCxLQUFLLENBQUM7Y0FDNUIsTUFBTUssTUFBTSxHQUFHO2dCQUFFblIsS0FBSztnQkFBRTlCLE9BQU8sRUFBRTtjQUFJLENBQUU7Y0FDdkNmLFFBQVEsQ0FBQ2dVLE1BQU0sQ0FBQztZQUNqQixDQUFDO1lBRUQsSUFBSUosVUFBVSxFQUFFO2NBQ2YsTUFBTTdRLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Z0JBQzNCLE1BQU1GLEtBQUssR0FBRztrQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUUsS0FBSztrQkFBRWdOLFNBQVMsRUFBRSxDQUFDLEdBQUd2UixNQUFNLENBQUN1RSxLQUFLLENBQUNnTixTQUFTO2dCQUFDLENBQUU7Z0JBQ3pFN1AsUUFBUSxDQUFDO2tCQUFFNkMsS0FBSztrQkFBRTlCLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7Z0JBQ25DLE1BQU14QyxRQUFRLENBQUNzRSxLQUFLLENBQUN5SixHQUFHLENBQUN6SixLQUFLLENBQUM7Z0JBRS9CZ1IsTUFBTSxFQUFFO2NBQ1QsQ0FBQztjQUVELE9BQ0NqWCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFBZCxNQUFBLENBQUFhLE9BQUEsQ0FBQTJILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNvVyxhQUFBLENBQUFHLE9BQU8sQ0FBQ0MsS0FBSztnQkFBQzVWLE1BQU0sRUFBRXFWLEtBQUs7Z0JBQUVKLFNBQVMsRUFBRUEsU0FBUztnQkFBRXJTLFNBQVMsRUFBQztjQUFlLEdBQzNFeVMsS0FBSyxDQUFDbkgsR0FBRyxDQUFDWSxRQUFRLElBQUc7Z0JBQ3JCLE9BQ0N4USxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1csYUFBQSxDQUFBRyxPQUFPLENBQUN2TSxJQUFJO2tCQUFDc0MsR0FBRyxFQUFFb0QsUUFBUSxDQUFDQSxRQUFRO2tCQUFFeE0sS0FBSyxFQUFFd007Z0JBQVEsR0FDcER4USxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeVUsaUJBQUEsQ0FBQUcsZ0JBQWdCO2tCQUFDelIsSUFBSSxFQUFFdU0sUUFBUTtrQkFBRW9GLEVBQUUsRUFBQyxLQUFLO2tCQUFDMUIsU0FBUztnQkFBQSxFQUFHLENBQ3pDO2NBRWpCLENBQUMsQ0FBQyxDQUNhLEVBQ2hCbFUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQVN3RCxTQUFTLEVBQUM7Y0FBd0MsR0FDMUR0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUgsV0FBQSxDQUFBTyxVQUFVO2dCQUFDaUgsS0FBSyxFQUFFLElBQUk7Z0JBQUUxSixRQUFRLEVBQUVBO2NBQVEsRUFBSSxDQUN0QyxDQUNSOztZQUdMLE9BQU9uRyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUosS0FBQSxDQUFBWSxJQUFJO2NBQUM3RyxTQUFTLEVBQUMsZUFBZTtjQUFDaUQsS0FBSyxFQUFFN0YsTUFBTSxDQUFDdUUsS0FBSyxDQUFDZ04sU0FBUztjQUFFaE4sS0FBSyxFQUFFLEVBQUU7Y0FBRW1GLE9BQU8sRUFBRW1LLGlCQUFBLENBQUFHO1lBQWdCLEVBQUk7VUFDL0c7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUExVixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc1gsa0JBQUEsR0FBQXRYLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBZ0QsU0FBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBRU0sU0FBVXVYLGtCQUFrQkEsQ0FBQztZQUFFQyxZQUFZLEdBQUc7VUFBSSxDQUFFO1lBQ3pELE1BQU07Y0FBRTVWO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFMlY7WUFBYyxDQUFFLEdBQUcsSUFBQUgsa0JBQUEsQ0FBQUksMkJBQTJCLEdBQUU7WUFDeEQsTUFBTW5YLE9BQU8sR0FBR0EsQ0FBQSxLQUFNZ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzlDLE9BQ0N6RyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQWtFLEdBQ2hGdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNDLElBQUksRUFBQyxLQUFLO2NBQUM0RCxPQUFPLEVBQUMsU0FBUztjQUFDK0QsUUFBUTtjQUFDbkksT0FBTyxFQUFFa1g7WUFBYyxHQUNuRTdWLEtBQUssQ0FBQytWLFdBQVcsQ0FBQ0MsR0FBRyxDQUNkLEVBQ1JKLFlBQVksSUFDWnpYLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNtQyxTQUFBLENBQUEzQyxRQUFRO2NBQUNzRSxPQUFPLEVBQUMsU0FBUztjQUFDcEUsT0FBTyxFQUFFQTtZQUFPLEdBQzFDcUIsS0FBSyxDQUFDZSxPQUFPLENBQUNzQixRQUFRLENBRXhCLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQWxFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQWlILFlBQUEsR0FBQWpILE9BQUE7VUFFTSxTQUFVb1Esb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FDTHpPLEtBQUs7Y0FDTEMsS0FBSyxFQUFFO2dCQUFFbVAsY0FBYyxFQUFFblA7Y0FBSyxDQUFFO2NBQ2hDSCxNQUFNO2NBQ05DLFFBQVE7Y0FDUnlCO1lBQVEsQ0FDUixHQUFHLElBQUE5QixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0rVixNQUFNLEdBQUdqTCxJQUFJLElBQUlBLElBQUksQ0FBQzFKLElBQUksS0FBSyxnQkFBZ0I7WUFDckQsTUFBTXlNLEdBQUcsR0FBRy9DLElBQUksS0FBSztjQUFFN0ksS0FBSyxFQUFFNkksSUFBSSxDQUFDbkYsRUFBRTtjQUFFL0UsS0FBSyxFQUFFa0ssSUFBSSxDQUFDeks7WUFBSyxDQUFFLENBQUM7WUFDM0QsTUFBTWlGLE9BQU8sR0FBR3pGLEtBQUssQ0FBQzBGLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQzZCLEtBQUssQ0FBQ3VRLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUNsSSxHQUFHLENBQUNBLEdBQUcsQ0FBQztZQUNwRSxJQUFJeEksWUFBWSxHQUFHO2NBQUVwRCxLQUFLLEVBQUUsRUFBRTtjQUFFckIsS0FBSyxFQUFFZCxLQUFLLENBQUN5TyxPQUFPLENBQUN5SDtZQUFXLENBQUU7WUFDbEUsSUFBSXpILE9BQU8sR0FBR3BPLFNBQVM7WUFDdkIsTUFBTTBCLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCbEMsUUFBUSxDQUFDc0UsS0FBSyxDQUFDeUosR0FBRyxDQUFDO2dCQUFFWSxPQUFPLEVBQUV6TSxLQUFLLENBQUNpRSxNQUFNLENBQUM5RDtjQUFLLENBQUUsQ0FBQztjQUNuRFosUUFBUSxDQUFDO2dCQUFFNkMsS0FBSyxFQUFFO2tCQUFFLEdBQUd2RSxNQUFNLENBQUN1RSxLQUFLO2tCQUFFcUssT0FBTyxFQUFFek0sS0FBSyxDQUFDaUUsTUFBTSxDQUFDOUQ7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDdEUsQ0FBQztZQUVELElBQUlyQyxRQUFRLENBQUNzRSxLQUFLLENBQUNxSyxPQUFPLEtBQUtwTyxTQUFTLEVBQUU7Y0FDekMsTUFBTW1OLFFBQVEsR0FBR3pOLEtBQUssQ0FBQzBGLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQzZCLEtBQUssQ0FBQzVGLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ3FLLE9BQU8sQ0FBQztjQUNyRUEsT0FBTyxHQUFHakIsUUFBUSxFQUFFM0gsRUFBRTs7WUFHdkIsT0FDQzFILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFlLEtBQUssQ0FBQ3lPLE9BQU8sQ0FBQzNOLEtBQUssQ0FBUyxFQUNwQzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNvRyxZQUFBLENBQUFjLFdBQVc7Y0FBQ2hFLEtBQUssRUFBRXNNLE9BQU87Y0FBRWpKLE9BQU8sRUFBRSxDQUFDRCxZQUFZLEVBQUUsR0FBR0MsT0FBTyxDQUFDO2NBQUV6RCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUN0RjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBNUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThDLEtBQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLFNBQVUrWCxpQkFBaUJBLENBQUM7WUFBRUMsS0FBSztZQUFFcEwsSUFBSTtZQUFFdUYsS0FBSztZQUFFOEYsUUFBUTtZQUFFdFU7VUFBUSxDQUFFO1lBQzNFLE1BQU07Y0FBRS9CO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTW9XLFlBQVksR0FBR3RVLEtBQUssSUFBRztjQUM1QixNQUFNaUUsTUFBTSxHQUFHakUsS0FBSyxDQUFDQyxhQUFhO2NBQ2xDLE1BQU1HLElBQUksR0FBRztnQkFBRSxHQUFHNEk7Y0FBSSxDQUFFO2NBQ3hCNUksSUFBSSxDQUFDNkQsTUFBTSxDQUFDL0QsSUFBSSxDQUFDLEdBQUcrRCxNQUFNLENBQUM5RCxLQUFLO2NBQ2hDSixRQUFRLENBQUN3TyxLQUFLLEVBQUVuTyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0NqRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBGLEtBQUs7Y0FDTDdFLFFBQVEsRUFBRXVVLFlBQVk7Y0FDdEJ4VixLQUFLLEVBQUVkLEtBQUssQ0FBQ29FLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ2pMLEtBQUs7Y0FDaENnQyxXQUFXLEVBQUU5QyxLQUFLLENBQUNvRSxLQUFLLENBQUNtUyxRQUFRLENBQUN6VCxXQUFXO2NBQzdDWCxLQUFLLEVBQUU2SSxJQUFJLENBQUM5SSxJQUFJO2NBQ2hCQSxJQUFJLEVBQUMsTUFBTTtjQUNYTyxTQUFTLEVBQUM7WUFBZSxFQUN4QixFQUNGdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBCLFFBQVE7Y0FDUmIsUUFBUSxFQUFFdVUsWUFBWTtjQUN0QnhWLEtBQUssRUFBRWQsS0FBSyxDQUFDb0UsS0FBSyxDQUFDbVMsUUFBUSxDQUFDelYsS0FBSztjQUNqQ3FCLEtBQUssRUFBRTZJLElBQUksQ0FBQ2UsT0FBTztjQUNuQmpKLFdBQVcsRUFBRTlDLEtBQUssQ0FBQ29FLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ2pKLFdBQVc7Y0FDNUNaLElBQUksRUFBQztZQUFTLEVBQ2IsRUFDRGtVLEtBQUssR0FBRyxDQUFDLElBQ1RqWSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUM2RCxPQUFPLEVBQUMsTUFBTTtjQUFDcEUsT0FBTyxFQUFFQSxDQUFBLEtBQU0wWCxRQUFRLENBQUM5RixLQUFLO1lBQUMsR0FDbkQsR0FBRyxFQUNIdlEsS0FBSyxDQUFDZSxPQUFPLENBQUN1TSxNQUFNLENBQ2IsQ0FFVixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFuUCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvWSxrQkFBQSxHQUFBcFksT0FBQTtVQUVNLFNBQVVxWSxhQUFhQSxDQUFDO1lBQUU3VixRQUFRLEdBQUdQO1VBQVMsQ0FBRTtZQUNyRCxNQUFNO2NBQUVSLE1BQU07Y0FBRTBCLFFBQVE7Y0FBRXZCO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDd1csVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3hZLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDN0IsTUFBTSxDQUFDdUUsS0FBSyxFQUFFbVMsUUFBUSxFQUFFdEUsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN2RixNQUFNLENBQUN2TSxLQUFLLEVBQUVrUixRQUFRLENBQUMsR0FBR3pZLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUN2QzdCLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQ21TLFFBQVEsQ0FBQ3RFLE1BQU0sR0FBRyxDQUFDLEdBQUdwUyxNQUFNLENBQUN1RSxLQUFLLENBQUNtUyxRQUFRLENBQUMsR0FBRyxDQUFDO2NBQUVyVSxJQUFJLEVBQUUsRUFBRTtjQUFFNkosT0FBTyxFQUFFO1lBQUUsQ0FBRSxDQUFDLENBQ3ZGO1lBRUQsTUFBTXlELEtBQUssR0FBR0EsQ0FBQSxLQUFLO2NBQ2xCbUgsYUFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2NBQzdCRSxRQUFRLENBQUMsQ0FBQyxHQUFHbFIsS0FBSyxFQUFFO2dCQUFFeEQsSUFBSSxFQUFFLEVBQUU7Z0JBQUU2SixPQUFPLEVBQUU7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsTUFBTXdKLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLE1BQU1jLFFBQVEsR0FBRzlGLEtBQUssSUFBRztjQUN4QixNQUFNc0csUUFBUSxHQUFHblIsS0FBSyxDQUFDb1IsS0FBSyxDQUFDLENBQUMsRUFBRXZHLEtBQUssQ0FBQyxDQUFDd0csTUFBTSxDQUFDclIsS0FBSyxDQUFDb1IsS0FBSyxDQUFDdkcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQ3JFb0csYUFBYSxDQUFDRSxRQUFRLENBQUM1RSxNQUFNLENBQUM7Y0FDOUIyRSxRQUFRLENBQUNDLFFBQVEsQ0FBQztjQUVsQnRWLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRTtrQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUUsS0FBSztrQkFBRW1TLFFBQVEsRUFBRU07Z0JBQVEsQ0FBRTtnQkFBRXZVLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUM1RSxDQUFDO1lBQ0QsTUFBTTBVLFlBQVksR0FBR0EsQ0FBQ3pHLEtBQUssRUFBRXBPLEtBQUssS0FBSTtjQUNyQyxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxHQUFHc0QsS0FBSyxDQUFDO2NBQ3ZCdEQsSUFBSSxDQUFDbU8sS0FBSyxDQUFDLEdBQUdwTyxLQUFLO2NBQ25CeVUsUUFBUSxDQUFDeFUsSUFBSSxDQUFDO2NBQ2RiLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRTtrQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUUsS0FBSztrQkFBRW1TLFFBQVEsRUFBRW5VO2dCQUFJLENBQUU7Z0JBQUVFLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsS0FBSyxJQUFJc0QsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHOFEsVUFBVSxFQUFFLEVBQUU5USxDQUFDLEVBQUU7Y0FDcEMyUCxNQUFNLENBQUN4UCxJQUFJLENBQ1Y1SCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVgsa0JBQUEsQ0FBQUwsaUJBQWlCO2dCQUNqQnBVLFFBQVEsRUFBRWlWLFlBQVk7Z0JBQ3RCWixLQUFLLEVBQUVNLFVBQVU7Z0JBQ2pCMUwsSUFBSSxFQUFFdEYsS0FBSyxDQUFDRSxDQUFDLENBQUM7Z0JBQ2R5USxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCOUssR0FBRyxFQUFFLFFBQVEzRixDQUFDLEVBQUU7Z0JBQ2hCMkssS0FBSyxFQUFFM0s7Y0FBQyxFQUNQLENBQ0Y7O1lBR0YsT0FDQ3pILE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBa0IsR0FDbkM4UyxNQUFNLEVBQ1BwWCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQXdDLEdBQ3hEN0IsUUFBUSxJQUNSekMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUM2RCxPQUFPLEVBQUMsU0FBUztjQUFDK0QsUUFBUTtjQUFDbkksT0FBTyxFQUFFaUM7WUFBUSxHQUNsRFosS0FBSyxDQUFDZSxPQUFPLENBQUNOLE1BQU0sQ0FFdEIsRUFFRHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDNkQsT0FBTyxFQUFDLE1BQU07Y0FBQ3BFLE9BQU8sRUFBRTZRO1lBQUssR0FDbkN4UCxLQUFLLENBQUNlLE9BQU8sQ0FBQ2lWLEdBQUcsQ0FDVixDQUNELENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQTdYLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE2WSxjQUFBLEdBQUE3WSxPQUFBO1VBQ0EsSUFBQW9JLFdBQUEsR0FBQXBJLE9BQUE7VUFFTSxTQUFVOFksa0JBQWtCQSxDQUFDO1lBQUV0VztVQUFRLENBQUU7WUFDOUMsTUFBTTtjQUFFZixNQUFNO2NBQUVHLEtBQUs7Y0FBRXVCLFFBQVE7Y0FBRXpCO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDaUQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHakYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0rQixhQUFhLEdBQUdBLENBQUEsS0FBTUwsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1vSCxRQUFRLEdBQUcsQ0FBQzNLLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQytTLElBQUksSUFBSSxDQUFDdFgsTUFBTSxDQUFDdUUsS0FBSyxDQUFDZ1QsVUFBVSxJQUFJLENBQUN2WCxNQUFNLENBQUN1RSxLQUFLLENBQUNtUyxRQUFRLEVBQUV0RSxNQUFNO1lBQ2pHLE1BQU12TCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJN0csTUFBTSxDQUFDeUMsT0FBTyxFQUFFO2dCQUNuQmMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FHRDdCLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRXRFLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ1ksT0FBTyxFQUFFO2dCQUFFMUMsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzdEMUIsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU1ULFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCaUQsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCN0IsUUFBUSxDQUFDO2dCQUFFNkMsS0FBSyxFQUFFdEUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDWSxPQUFPLEVBQUU7Z0JBQUUxQyxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0QxQixRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsT0FDQ3pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUF3QixJQUFJO2NBQUNELFNBQVMsRUFBQztZQUFnQixHQUMvQnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnWSxjQUFBLENBQUFSLGFBQWEsT0FBRyxFQUNqQnRZLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBbUQsR0FDcEV0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ1AsT0FBTyxFQUFFK0gsYUFBYTtjQUFFM0QsT0FBTyxFQUFDLFNBQVM7Y0FBQytELFFBQVE7WUFBQSxHQUN4RDlHLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTixNQUFNLENBQ2IsRUFDVHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxXQUFBLENBQUFPLFVBQVU7Y0FBQ3pDLFFBQVEsRUFBRTFELFFBQVE7Y0FBRTRKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzlDLEVBQ1JySCxlQUFlLElBQ2ZoRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRTZDO1lBQWEsR0FDMUR0RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUMrRCxNQUFNLENBQUN0RCxNQUFNLENBQU8sQ0FFakMsQ0FDSztVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVWlaLFlBQVlBLENBQUM7WUFBRWpWO1VBQUksQ0FBK0M7WUFDakYsT0FDQ2pFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQVksR0FBRUwsSUFBSSxDQUFDRixJQUFJLEUsS0FBWSxFLEtBQUMvRCxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxlQUFPbUQsSUFBSSxDQUFDMkosT0FBTyxDQUFRLENBQzVFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQTVOLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUE2WSxjQUFBLEdBQUE3WSxPQUFBO1VBQ0EsSUFBQW9JLFdBQUEsR0FBQXBJLE9BQUE7VUFFTSxTQUFVa1osZ0JBQWdCQSxDQUFDO1lBQUUxVztVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFZixNQUFNO2NBQUUwQixRQUFRO2NBQUV2QixLQUFLO2NBQUVGO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDaUQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHakYsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1LLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCLE1BQU1pRSxNQUFNLEdBQUdqRSxLQUFLLENBQUNDLGFBQWE7Y0FDbEMsTUFBTW1DLEtBQUssR0FBRztnQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUU7Y0FBSyxDQUFFO2NBRWpDN0MsUUFBUSxDQUFDO2dCQUFFNkMsS0FBSyxFQUFFO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUUsQ0FBQzZCLE1BQU0sQ0FBQy9ELElBQUksR0FBRytELE1BQU0sQ0FBQzlEO2dCQUFLLENBQUU7Z0JBQUVHLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUM5RSxDQUFDO1lBRUQsTUFBTW9FLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUk3RyxNQUFNLENBQUN5QyxPQUFPLEVBQUU7Z0JBQ25CYyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEN0IsUUFBUSxDQUFDO2dCQUFFNkMsS0FBSyxFQUFFdEUsUUFBUSxDQUFDc0UsS0FBSyxDQUFDWSxPQUFPLEVBQUU7Z0JBQUUxQyxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0QxQixRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTVQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJMLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ21ULEtBQUssRUFBRTtjQUN0QmhXLFFBQVEsQ0FBQztnQkFBRTZDLEtBQUssRUFBRXRFLFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQ1ksT0FBTyxFQUFFO2dCQUFFMUMsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzdEYyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ4QyxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZDLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTW9VLGFBQWEsR0FDbEIzWCxNQUFNLENBQUN1RSxLQUFLLENBQUNtUyxRQUFRLEVBQUV0RSxNQUFNLElBQzdCcFMsTUFBTSxDQUFDdUUsS0FBSyxDQUFDbVMsUUFBUSxFQUFFa0IsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTFNLElBQUksS0FBSzBNLEdBQUcsSUFBSSxDQUFDLENBQUMxTSxJQUFJLENBQUM5SSxJQUFJLElBQUksQ0FBQyxDQUFDOEksSUFBSSxDQUFDZSxPQUFPLEVBQUUsSUFBSSxDQUFDO1lBRXpGLE1BQU12QixRQUFRLEdBQUcsQ0FBQzNLLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQytTLElBQUksSUFBSSxDQUFDdFgsTUFBTSxDQUFDdUUsS0FBSyxDQUFDZ1QsVUFBVSxJQUFJLENBQUNJLGFBQWE7WUFFakYsT0FDQ3JaLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUFkLE1BQUEsQ0FBQWEsT0FBQSxDQUFBMkgsUUFBQSxRQUNDeEksTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQXdCLElBQUk7Y0FBQ0QsU0FBUyxFQUFDO1lBQWdCLEdBQy9CdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBCLFFBQVE7Y0FDUmIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCSSxLQUFLLEVBQUV0QyxNQUFNLENBQUN1RSxLQUFLLENBQUMrUyxJQUFJO2NBQ3hCclcsS0FBSyxFQUFFZCxLQUFLLENBQUNvRSxLQUFLLENBQUMrUyxJQUFJLENBQUNyVyxLQUFLO2NBQzdCZ0MsV0FBVyxFQUFFOUMsS0FBSyxDQUFDb0UsS0FBSyxDQUFDK1MsSUFBSSxDQUFDclUsV0FBVztjQUN6Q1osSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lDLEtBQUEsQ0FBQTBCLFFBQVE7Y0FDUmIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCSSxLQUFLLEVBQUV0QyxNQUFNLENBQUN1RSxLQUFLLENBQUNnVCxVQUFVO2NBQzlCdFcsS0FBSyxFQUFFZCxLQUFLLENBQUNvRSxLQUFLLENBQUNnVCxVQUFVLENBQUN0VyxLQUFLO2NBQ25DZ0MsV0FBVyxFQUFFOUMsS0FBSyxDQUFDb0UsS0FBSyxDQUFDZ1QsVUFBVSxDQUFDdFUsV0FBVztjQUMvQ1osSUFBSSxFQUFDO1lBQVksRUFDaEIsRUFDRi9ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnWSxjQUFBLENBQUFSLGFBQWEsT0FBRyxFQUNqQnRZLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVF3RCxTQUFTLEVBQUM7WUFBd0IsR0FDekN0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ1AsT0FBTyxFQUFFK0gsYUFBYTtjQUFFM0QsT0FBTyxFQUFDLFNBQVM7Y0FBQytELFFBQVE7WUFBQSxHQUN4RDlHLEtBQUssQ0FBQ2UsT0FBTyxDQUFDTixNQUFNLENBQ2IsRUFDVHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxXQUFBLENBQUFPLFVBQVU7Y0FBQ3pDLFFBQVEsRUFBRTFELFFBQVE7Y0FBRTRKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzlDLEVBQ1JySCxlQUFlLElBQ2ZoRixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUFjLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVTLFFBQVEsRUFBRTZDO1lBQWEsR0FDMUR0RixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZSxLQUFLLENBQUMrRCxNQUFNLENBQUN0RCxNQUFNLENBQU8sQ0FFakMsQ0FDSyxDQUNMO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVBLElBQUF0QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEksTUFBQSxHQUFBNUksT0FBQTtVQUNBLElBQUE2SSxTQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUE4QyxLQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQXNLLEtBQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdVosYUFBQSxHQUFBdlosT0FBQTtVQUNBLElBQUF3WixhQUFBLEdBQUF4WixPQUFBO1VBQ0EsSUFBQXNPLFlBQUEsR0FBQXRPLE9BQUE7VUFFTSxTQUFVOE8sVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUVyTixNQUFNO2NBQUVDLFFBQVE7Y0FBRXlCLFFBQVE7Y0FBRXZCO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDMlgsVUFBVSxFQUFFelEsU0FBUyxDQUFDLEdBQUdqSixNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDb1csWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRzVaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3RCxNQUFNLENBQUNrTCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUcxTyxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTXNXLGNBQWMsR0FBR0EsQ0FBQSxLQUFNRCxlQUFlLENBQUMsQ0FBQ0QsWUFBWSxDQUFDO1lBQzNELE1BQU12TixXQUFXLEdBQUdBLENBQUEsS0FBTXNDLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxJQUFBMUYsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQ3ZILFFBQVEsQ0FBQ3NFLEtBQUssQ0FBQyxFQUFFLE1BQU03QyxRQUFRLENBQUN6QixRQUFRLENBQUNrRixPQUFPLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRWxGLE1BQU1xRyxLQUFLLEdBQUc7Y0FBRTFNLE9BQU8sRUFBRTRMLFdBQVc7Y0FBRUMsUUFBUSxFQUFFMUssUUFBUSxDQUFDc0UsS0FBSyxDQUFDc0YsS0FBSyxJQUFJNUosUUFBUSxDQUFDcUUsU0FBUyxDQUFDdUY7WUFBSyxDQUFFO1lBQ2xHLE1BQU11QyxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QjtjQUNBN0UsU0FBUyxDQUFDLENBQUN5USxVQUFVLENBQUM7WUFDdkIsQ0FBQztZQUVELElBQUksQ0FBQ2hZLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQ21TLFFBQVEsSUFBSSxDQUFDMVcsTUFBTSxDQUFDdUUsS0FBSyxDQUFDK1MsSUFBSSxJQUFJLENBQUN0WCxNQUFNLENBQUN1RSxLQUFLLENBQUNnVCxVQUFVLEVBQUU7Y0FHN0U7OztjQUdBLE9BQU9qWixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0gsTUFBQSxDQUFBTSxVQUFVO2dCQUFDcEYsSUFBSSxFQUFDLFFBQVE7Z0JBQUNxRixRQUFRLEVBQUUwRTtjQUFZLEVBQUk7O1lBRTVELElBQUk0TCxVQUFVLEVBQUUsT0FBTzFaLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNpQyxLQUFBLENBQUFvVyxnQkFBZ0I7Y0FBQzFXLFFBQVEsRUFBRXFMO1lBQVksRUFBSTtZQUVuRSxPQUNDOU4sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFDO1lBQTBCLEdBQzNDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDb0UsS0FBSyxDQUFDN0QsS0FBSyxDQUFNLEVBRTVCcEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUFnQyxHQUM5Q3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDNkQsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLc0ksS0FBSztjQUFFbE0sSUFBSSxFQUFDO1lBQVEsR0FDN0NhLEtBQUssQ0FBQ2UsT0FBTyxDQUFDdU0sTUFBTSxDQUNiLENBQ0osQ0FDRSxFQUNUblAsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dJLFNBQUEsQ0FBQU8sZ0JBQWdCO2NBQUN0RixJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ2hDL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dJLFNBQUEsQ0FBQU8sZ0JBQWdCO2NBQUN0RixJQUFJLEVBQUM7WUFBWSxFQUFHLEVBQ3RDL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUEwQixHQUN2Q3FWLFlBQVksR0FDWjNaLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMyWSxhQUFBLENBQUFWLGtCQUFrQjtjQUFDdFcsUUFBUSxFQUFFb1g7WUFBYyxFQUFJLEdBRWhEN1osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQXdELEdBQ3RFdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsYUFBS2UsS0FBSyxDQUFDcU4sTUFBTSxDQUFDa0osUUFBUSxDQUFDelYsS0FBSyxDQUFNLEVBQ3RDM0MsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1osTUFBQSxDQUFBc0YsSUFBSTtjQUFDeEUsSUFBSSxFQUFDLE1BQU07Y0FBQ3NELFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzlELE9BQU8sRUFBRXFaO1lBQWMsRUFBSSxDQUNuRSxFQUNON1osTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lKLEtBQUEsQ0FBQVksSUFBSTtjQUNKN0csU0FBUyxFQUFDLHNCQUFzQjtjQUNoQ2lELEtBQUssRUFBRTdGLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQ21TLFFBQVE7Y0FDNUJuUyxLQUFLLEVBQUUsRUFBRTtjQUNUbUYsT0FBTyxFQUFFb08sYUFBQSxDQUFBTjtZQUFZLEVBQ3BCLENBRUgsQ0FDSSxFQUNObFosTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lOLFlBQUEsQ0FBQVIsa0JBQWtCO2NBQUN2TSxJQUFJLEVBQUVpTixlQUFlO2NBQUVoTixPQUFPLEVBQUUySztZQUFXLEVBQUksQ0FDakU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQXBNLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNlosY0FBQSxHQUFBN1osT0FBQTtVQUNBLElBQUE4WixXQUFBLEdBQUE5WixPQUFBO1VBQ0EsSUFBQStaLFdBQUEsR0FBQS9aLE9BQUE7VUFDQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVWdhLGNBQWNBLENBQUMsRUFBRTtZQUMzQyxNQUFNO2NBQUV0WSxRQUFRO2NBQUVFLEtBQUs7Y0FBRXVCO1lBQVEsQ0FBRSxHQUFHLElBQUE5QixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3hELE1BQU0sQ0FBQ2tLLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2xNLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUMyVyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbmEsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUM1QixRQUFRLENBQUN1WSxPQUFPLEdBQUcsR0FBR3ZZLFFBQVEsQ0FBQ3VZLE9BQU8sVUFBVSxHQUFHaFksU0FBUyxDQUFDO1lBQzFHLE1BQU1rWSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNbE8sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3BFLE1BQU1zRyxHQUFHLEdBQUcsMERBQTBENVEsUUFBUSxDQUFDd0IsSUFBSSxFQUFFO1lBQ3JGLE1BQU15TixNQUFNLEdBQUcsTUFBTS9NLEtBQUssSUFBRztjQUM1QixNQUFNSSxJQUFJLEdBQUc7Z0JBQUU3QixLQUFLLEVBQUV5QixLQUFLLENBQUNpRSxNQUFNLENBQUM5RDtjQUFLLENBQUU7Y0FDMUNaLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDO2NBQ2QsTUFBTXRDLFFBQVEsQ0FBQ2dPLElBQUksQ0FBQzFMLElBQUksQ0FBQztZQUMxQixDQUFDO1lBQ0QsTUFBTTBHLFVBQVUsR0FBRzdFLEtBQUssSUFBSW5FLFFBQVEsQ0FBQzBZLGVBQWUsQ0FBQ3ZVLEtBQUssQ0FBQztZQUUzRCxJQUFBaUQsTUFBQSxDQUFBRyxTQUFTLEVBQUMsQ0FBQ3ZILFFBQVEsQ0FBQyxFQUFFLE1BQU13WSxVQUFVLENBQUMsR0FBR3hZLFFBQVEsQ0FBQ3VZLE9BQU8sWUFBWUksSUFBSSxDQUFDQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFdkcsT0FDQ3ZhLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVN3RCxTQUFTLEVBQUM7WUFBNkIsR0FDL0N0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVosV0FBQSxDQUFBaFYsZ0JBQWdCLE9BQUcsRUFDcEIvRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFRd0QsU0FBUyxFQUFFaU87WUFBRyxHQUNyQnZTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrWixXQUFBLENBQUFRLFVBQVU7Y0FDVnBZLEtBQUssRUFBRVAsS0FBSyxDQUFDcVksT0FBTyxDQUFDOVgsS0FBSztjQUMxQkksV0FBVyxFQUFFWCxLQUFLLENBQUNxWSxPQUFPLENBQUMxWCxXQUFXO2NBQ3RDaVksV0FBVyxFQUFFOVksUUFBUSxDQUFDK1ksa0JBQWtCO2NBQ3hDQyxNQUFNLEVBQUMsVUFBVTtjQUNqQlQsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCdlAsVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0YzSyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQTRYLGVBQWU7Y0FBQ3RXLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ1AsSUFBSSxFQUFDLE9BQU87Y0FBQzZSLEVBQUUsRUFBQyxJQUFJO2NBQUNoRixNQUFNLEVBQUVBO1lBQU0sR0FDN0VqUCxRQUFRLENBQUNTLEtBQUssSUFBSVAsS0FBSyxDQUFDZ1osSUFBSSxDQUFDelksS0FBSyxDQUNsQixDQUNiLEVBQ05wQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUF1RixPQUFPO2NBQUNuQixTQUFTLEVBQUMsY0FBYztjQUFDdEQsSUFBSSxFQUFFVyxRQUFRLENBQUN3QjtZQUFJLEVBQUksQ0FDakQsRUFFVG5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNnWixjQUFBLENBQUE1Vyx3QkFBd0I7Y0FBQzFCLElBQUksRUFBRXlLLGVBQWU7Y0FBRTlJLElBQUksRUFBRXhCLFFBQVEsQ0FBQ3dCLElBQUk7Y0FBRTFCLE9BQU8sRUFBRTJZO1lBQWlCLEVBQUksQ0FDM0Y7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXBhLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQUksWUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQThJLE1BQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBNmEsZUFBQSxHQUFBN2EsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQThhLE1BQUEsR0FBQTlhLE9BQUE7VUFDQSxJQUFBK2EsTUFBQSxHQUFBL2EsT0FBQTtVQUNBLElBQUFnVSxPQUFBLEdBQUFoVSxPQUFBO1VBQ0EsSUFBQWdiLFVBQUEsR0FBQWhiLE9BQUE7VUFFTztVQUFZLFNBQVVpYixrQkFBa0JBLENBQUM7WUFBRXRaLEtBQUs7WUFBRUQ7VUFBUSxDQUFFO1lBQ2xFLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFOEIsU0FBUyxDQUFDLEdBQUd4RCxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBd0I1QixRQUFRLENBQUNrRixPQUFPLEVBQUUsQ0FBQztZQUNyRixNQUFNLENBQUNzVSxVQUFVLEVBQUV0WixLQUFLLENBQUMsR0FBRyxJQUFBa0gsTUFBQSxDQUFBcVMsUUFBUSxFQUFDTixlQUFBLENBQUFuVixNQUFZLENBQUMwVixTQUFTLENBQUM7WUFDNUQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHdmIsTUFBQSxDQUFBYSxPQUFLLENBQUMwQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU07Y0FBRUo7WUFBSSxDQUFFLEdBQUd4QixRQUFRO1lBQ3pCLE1BQU02WixTQUFTLEdBQUc1WixLQUFLLENBQUM2WixhQUFhLENBQUNDLEdBQUcsQ0FBQ3ZZLElBQUksQ0FBQztZQUMvQ3NRLFVBQVUsQ0FBQzlSLFFBQVEsR0FBR0EsUUFBUTtZQUM5Qjs7OztZQUlBLE1BQU15QixRQUFRLEdBQUdhLElBQUksSUFBRztjQUN2QixNQUFNMFgsU0FBUyxHQUFHO2dCQUFFLEdBQUdqYSxNQUFNO2dCQUFFLEdBQUd1QztjQUFJLENBQUU7Y0FDeENULFNBQVMsQ0FBQztnQkFBRSxHQUFHbVk7Y0FBUyxDQUFFLENBQUM7WUFDNUIsQ0FBQztZQUNELE1BQU03WixTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QkgsUUFBUSxDQUFDcUUsU0FBUyxDQUFDb1QsS0FBSyxFQUFFO2NBQzFCNVYsU0FBUyxDQUFDN0IsUUFBUSxDQUFDa0YsT0FBTyxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUVELElBQUksQ0FBQzJVLFNBQVMsRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQyxxQkFBcUJ6WSxJQUFJLG1CQUFtQixDQUFDO1lBQzdFLElBQUksQ0FBQ2dZLFVBQVUsRUFBRSxPQUFPbmIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBMGIsT0FBTztjQUFDdk8sTUFBTSxFQUFFO1lBQUksRUFBSTtZQUVqRCxPQUNDdE4sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsUUFBQSxDQUFBMkcsYUFBYSxDQUFDOEosUUFBUTtjQUN0Qi9OLEtBQUssRUFBRTtnQkFDTnJDLFFBQVE7Z0JBQ1JFLEtBQUs7Z0JBQ0xELEtBQUs7Z0JBQ0xGLE1BQU07Z0JBQ05JLFNBQVM7Z0JBQ1RxQyxPQUFPLEVBQUV6QyxNQUFNLENBQUN5QyxPQUFPO2dCQUN2QmYsUUFBUTtnQkFDUmtZLFVBQVU7Z0JBQ1ZDLGFBQWE7Z0JBQ2IzYSxhQUFhLEVBQUVQLFlBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhO2dCQUN6QzRhOztZQUNBLEdBRUR4YixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBOFksYUFBYTtjQUFDeFgsU0FBUyxFQUFFLDBDQUEwQzNDLFFBQVEsQ0FBQ3dCLElBQUk7WUFBRSxHQUNsRm5ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNtVCxPQUFBLENBQUFnRyxjQUFjLE9BQUcsRUFDbEJqYSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaWEsTUFBQSxDQUFBZ0IscUJBQXFCLE9BQUcsRUFDekIvYixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbWEsVUFBQSxDQUFBZSxzQkFBc0IsT0FBRyxFQUMxQmhjLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrYSxNQUFBLENBQUF4TSxnQkFBZ0I7Y0FBQ3JMLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2pCLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7O1VDN0RBOztVQUVBOFksTUFBQSxDQUFBQyxjQUFBLENBQUFoVSxPQUFBO1lBQ0FsRSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWhFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVTJJLFVBQVVBLENBQUM7WUFDMUJpSCxLQUFLLEdBQUcsS0FBSztZQUNieEQsUUFBUTtZQUNSbEc7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFekUsTUFBTTtjQUFFMEIsUUFBUTtjQUFFdkIsS0FBSztjQUFFRCxLQUFLO2NBQUVEO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFdkUsTUFBTTZPLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekI7Ozs7O2NBTUEsSUFBSSxDQUFDZixLQUFLLEVBQUU7Z0JBQ1gsTUFBTWpPLEtBQUssQ0FBQzBGLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQ2tLLEdBQUcsQ0FBQzhMLEdBQUcsQ0FBQy9aLFFBQVEsQ0FBQytGLEVBQUUsQ0FBQyxDQUFDZ0ksR0FBRyxDQUFDaE8sTUFBTSxDQUFDO2dCQUM3RCxNQUFNQyxRQUFRLENBQUMrTixHQUFHLENBQUNoTyxNQUFNLENBQUM7O2NBRzNCMEIsUUFBUSxDQUFDO2dCQUFFZSxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDNUJ2QyxLQUFLLENBQUMrTixJQUFJLEVBQUU7Y0FDWixJQUFJeEosUUFBUSxFQUFFQSxRQUFRLEVBQUU7WUFDekIsQ0FBQztZQUNELE1BQU0rRyxLQUFLLEdBQUc7Y0FBRWIsUUFBUSxFQUFFLENBQUMzSyxNQUFNLENBQUN5QyxPQUFPLElBQUlrSSxRQUFRO2NBQUU3TCxPQUFPLEVBQUVvUTtZQUFNLENBQUU7WUFFeEUsT0FDQzVRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDNkQsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLc0k7WUFBSyxHQUNqQ3JMLEtBQUssQ0FBQ2UsT0FBTyxDQUFDK00sSUFBSSxDQUNYO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUEzUCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ00sU0FBVW9KLGdCQUFnQkEsQ0FBQztZQUFFdEY7VUFBSSxDQUFFO1lBQ3hDLE1BQU07Y0FBRXJDLE1BQU07Y0FBRUcsS0FBSztjQUFFRixRQUFRO2NBQUV5QjtZQUFRLENBQUUsR0FBRyxJQUFBOUIsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUVoRSxNQUFNNk8sTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRTdNLElBQUk7Y0FBRUM7WUFBSyxDQUFFLEtBQUk7Y0FDeEMsTUFBTXJDLFFBQVEsQ0FBQ2dPLElBQUksQ0FBQztnQkFBRTFKLEtBQUssRUFBRTtrQkFBRSxHQUFHdkUsTUFBTSxDQUFDdUUsS0FBSztrQkFBRSxDQUFDbEMsSUFBSSxHQUFHQztnQkFBSztjQUFFLENBQUUsQ0FBQztjQUNsRVosUUFBUSxDQUFDO2dCQUFFNkMsS0FBSyxFQUFFO2tCQUFFLEdBQUd2RSxNQUFNLENBQUN1RSxLQUFLO2tCQUFFLENBQUNsQyxJQUFJLEdBQUdDO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUdyQyxRQUFRLENBQUNzRSxLQUFLLENBQUNsQyxJQUFJLENBQUMsSUFBSWxDLEtBQUssQ0FBQ29FLEtBQUssQ0FBQ2xDLElBQUksQ0FBQyxDQUFDWSxXQUFXO1lBQ25FLE9BQ0MzRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQWEsR0FDM0J0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFPaUgsT0FBTyxFQUFDO1lBQUUsR0FBRWxHLEtBQUssQ0FBQ29FLEtBQUssQ0FBQ2xDLElBQUksQ0FBQyxDQUFDcEIsS0FBSyxDQUFTLEVBQ25EM0MsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEdBQUEsQ0FBQTRYLGVBQWU7Y0FBQzdXLElBQUksRUFBRUEsSUFBSTtjQUFFNk0sTUFBTSxFQUFFQTtZQUFNLEdBQ3pDNU0sS0FBSyxDQUNXLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQWhFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErQyxHQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa2MsV0FBQSxHQUFBbGMsT0FBQTtVQUNBLElBQUFnRCxTQUFBLEdBQUFoRCxPQUFBO1VBRUE7Ozs7OztVQU1NLFNBQVVrSixVQUFVQSxDQUFDO1lBQUVwRixJQUFJO1lBQUVxRixRQUFRO1lBQUVoRCxlQUFlLEdBQUc7VUFBRSxDQUFFO1lBQ2xFLE1BQU07Y0FBRXZFLEtBQUs7Y0FBRUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNrSyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdsTSxNQUFBLENBQUFhLE9BQUssQ0FBQzBDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTThJLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQzFLLFFBQVEsQ0FBQ3lhO1lBQVEsQ0FBRTtZQUNqRCxNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTW5RLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU3RCxPQUNDak0sTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBc0ksU0FBUztjQUNUaEgsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQi9CLElBQUksRUFBRVYsS0FBSyxDQUFDNkQsVUFBVSxDQUFDNkYsS0FBSyxDQUFDbkosS0FBSztjQUNsQ0ksV0FBVyxFQUFFWCxLQUFLLENBQUM2RCxVQUFVLENBQUM2RixLQUFLLENBQUMvSTtZQUFXLEdBRS9DeEMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUE0QixHQUMxQ3RFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFDNkQsT0FBTyxFQUFDLFNBQVM7Y0FBQytELFFBQVE7Y0FBQ25JLE9BQU8sRUFBRTRJO1lBQVEsR0FDbER2SCxLQUFLLENBQUNlLE9BQU8sQ0FBQ2dELE1BQU0sQ0FDYixFQUNUNUYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21DLFNBQUEsQ0FBQTNDLFFBQVE7Y0FBQSxHQUFLK0wsUUFBUTtjQUFFN0wsT0FBTyxFQUFFNmIsVUFBVTtjQUFFelgsT0FBTyxFQUFDO1lBQVMsR0FDNUQvQyxLQUFLLENBQUNlLE9BQU8sQ0FBQ3NCLFFBQVEsQ0FDYixDQUNOLEVBQ05sRSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQTRCLEVBQU8sQ0FDdkMsRUFDWDJILGVBQWUsSUFDZmpNLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNxYixXQUFBLENBQUFqVyxxQkFBcUI7Y0FBQy9DLElBQUksRUFBRVksSUFBSTtjQUFFdEMsT0FBTyxFQUFFNGEsVUFBVTtjQUFFalcsZUFBZSxFQUFFQTtZQUFlLEVBQ3hGLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXBHLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBcWMsU0FBQSxHQUFBcmMsT0FBQTtVQUVBOzs7Ozs7O1VBT00sU0FBVThiLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVyYSxNQUFNO2NBQUVHLEtBQUs7Y0FBRUYsUUFBUTtjQUFFeUIsUUFBUTtjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN2RSxNQUFNd2EsWUFBWSxHQUFHLE1BQUFBLENBQU87Y0FBRXpZLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUNqRVosUUFBUSxDQUFDO2dCQUFFLENBQUNXLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7Y0FDM0IsTUFBTXJDLFFBQVEsQ0FBQytOLEdBQUcsQ0FBQztnQkFBRSxDQUFDM0wsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztjQUNyQyxNQUFNcEMsS0FBSyxDQUFDK04sSUFBSSxFQUFFO1lBQ25CLENBQUM7WUFFRCxPQUNDM1AsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUEySCxRQUFBLFFBQ0N4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0QsU0FBUyxFQUFDO1lBQWEsR0FDM0J0RSxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd2IsU0FBQSxDQUFBbE4sYUFBYSxPQUFHLENBQ1osRUFDTnBQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt3RCxTQUFTLEVBQUM7WUFBYSxHQUMzQnRFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGdCLEtBQVNlLEtBQUssQ0FBQzZELFVBQVUsQ0FBQ2xELFdBQVcsQ0FBUyxFQUM5Q3hDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxHQUFBLENBQUE0WCxlQUFlO2NBQUM3VyxJQUFJLEVBQUMsYUFBYTtjQUFDeVksUUFBUSxFQUFDLEdBQUc7Y0FBQzVMLE1BQU0sRUFBRTJMO1lBQVksR0FDbkU1YSxRQUFRLENBQUNhLFdBQVcsQ0FDSixDQUNiLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQXhDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFFTSxTQUFVK2Isc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRXRhLE1BQU07Y0FBRUcsS0FBSztjQUFFRixRQUFRO2NBQUV5QixRQUFRO2NBQUV4QjtZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZFLElBQUksQ0FBQ0osUUFBUSxDQUFDc0UsS0FBSyxDQUFDd1csVUFBVSxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBRWpFLE1BQU05TCxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFOU0sYUFBYSxFQUFFO2dCQUFFQyxJQUFJO2dCQUFFQztjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzNELE1BQU1DLElBQUksR0FBRztnQkFBRWdDLEtBQUssRUFBRTtrQkFBRSxHQUFHdEUsUUFBUSxDQUFDc0UsS0FBSztrQkFBRSxDQUFDbEMsSUFBSSxHQUFHQztnQkFBSztjQUFFLENBQUU7Y0FDNURaLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDO2NBQ2QsTUFBTXRDLFFBQVEsQ0FBQytOLEdBQUcsQ0FBQ3pMLElBQUksQ0FBQztjQUN4QixNQUFNckMsS0FBSyxDQUFDK04sSUFBSSxFQUFFO1lBQ25CLENBQUM7WUFDRCxNQUFNM0wsS0FBSyxHQUFHdEMsTUFBTSxDQUFDdUUsS0FBSyxDQUFDMFcsU0FBUyxJQUFJOWEsS0FBSyxDQUFDb0UsS0FBSyxDQUFDMFcsU0FBUyxDQUFDaFksV0FBVztZQUV6RSxPQUNDM0UsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dELFNBQVMsRUFBQztZQUFhLEdBQzNCdEUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFlLEtBQUssQ0FBQ29FLEtBQUssQ0FBQzBXLFNBQVMsQ0FBQ2hhLEtBQUssQ0FBUyxFQUM1QzNDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxHQUFBLENBQUE0WCxlQUFlO2NBQUM3VyxJQUFJLEVBQUMsV0FBVztjQUFDNk0sTUFBTSxFQUFFQTtZQUFNLEdBQzlDNU0sS0FBSyxDQUNXLENBQ2I7VUFFUiJ9