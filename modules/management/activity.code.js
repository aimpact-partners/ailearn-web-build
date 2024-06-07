System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-10/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-10/main-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.46.dev-10/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.46.dev-10/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
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
    }, function (_aimpactAilearnApp0046Dev10ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0046Dev10ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0046Dev10MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev10MainLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev10ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev10ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_11 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Tabs) {
      dependency_15 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Empty) {
      dependency_16 = _pragmateUi011Empty;
    }, function (_pragmateUi011DynamicList) {
      dependency_17 = _pragmateUi011DynamicList;
    }, function (_aimpactAilearnApp0046Dev10ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp0046Dev10ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_20 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev10ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp0046Dev10ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0046Dev10ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0046Dev10ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-10"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-10/modules/management/activity.code');
      ims = new Map();
      /**************************************
      INTERNAL MODULE: ./components/ai-button
      **************************************/
      ims.set('./components/ai-button', {
        hash: 2168291771,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
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
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
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
        hash: 4002999591,
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

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/audio
      ********************************************/

      ims.set('./forms/content-theory/audio', {
        hash: 955093853,
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
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [audios, setAudios] = _react.default.useState(activity.materials.audios);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            const onGenerate = async () => {
              try {
                setFetching(true);
                await activity.materials.generateAudio();
                setAudios(activity.materials.audios);
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
                className: "activity__audio"
              }, _react.default.createElement("h5", null, texts.materials[type]), _react.default.createElement(_ui.AudioPlayer, {
                url: audios[type].url
              }));
            };
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
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
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
        hash: 1415701636,
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
              className: "activity__actions"
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
        hash: 1015243611,
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
          var _components = require("pragmate-ui/components");
          var _deleteModal = require("../delete-modal");
          function ContentTheoryForm() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [edition, setEdition] = _react.default.useState(false);
            const toggleEdition = () => setEdition(!edition);
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
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
            }, texts.actions.delete))), _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "content-theory__tabs ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, _react.default.createElement(_content.ContentTheoryContent, null), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            }), _react.default.createElement(_audio.ContentTheoryAudio, null))), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/content-theory/manual
      *********************************************/

      ims.set('./forms/content-theory/manual', {
        hash: 1132675609,
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
              console;
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
                },
                updated: false
              });
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            const onSave = () => {
              editData({
                updated: false
              });
            };
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
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onSave
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 1183129835,
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
              className: "section-actions__container actions-end border-top"
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
        hash: 3351610770,
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
              },
              onCancel: onClose
            }, _react.default.createElement("h3", null, texts.deleteModal.title), _react.default.createElement("p", null, texts.deleteModal.description)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./forms/index
      *****************************/

      ims.set('./forms/index', {
        hash: 792752938,
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
            if (type === 'content-theory') return _react.default.createElement(_contentTheory.ContentTheoryForm, null);
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
        hash: 472773709,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
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
        hash: 2471684898,
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
            const onSave = () => {
              editData({
                updated: false
              });
              onCancel();
            };
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
              callback: onSave
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
        hash: 2777116014,
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
              editData,
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
                if (!question?.question || !question?.options.length || isNaN(question?.correctAnswer)) {
                  wrongs.push(index);
                  return;
                }
                const empties = question.options.filter(item => item.value === '');
                if (empties.length > 0) {
                  wrongs.push(index);
                }
              });
              if (wrongs.length) {
                setErrors(wrongs);
                return;
              }
              editData({
                updated: false
              });
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
        hash: 1104551707,
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
          var _components = require("pragmate-ui/components");
          function DynamicAnswersForm({
            fetching,
            show,
            answers,
            onChange,
            disabled
          }) {
            const [added, setAdded] = _react.default.useState(false);
            if (fetching) {
              return _react.default.createElement("div", null, _react.default.createElement(_components.Spinner, {
                active: true,
                variant: "primary"
              }));
            }
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
        hash: 3149391426,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function DynamicHeader() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const {
              specs
            } = (0, _dynamicList.useDynamicListContext)();
            let {
              actions
            } = texts.multipleChoice;
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const onGenerate = async ({
              notes
            }) => {
              const response = await activity.specs.generate(notes);
              const questions = response.questions.map(({
                question,
                options,
                correct_answer
              }) => ({
                question,
                options,
                correctAnswer: correct_answer
              }));
              specs.setFetching(true);
              globalThis.setTimeout(() => {
                specs.setFetching(false);
                editData({
                  specs: {
                    ...values.specs,
                    questions: [...values.specs.questions, ...questions]
                  },
                  updated: true
                });
              }, 1000);
            };
            const onClick = () => _mainLayout.LayoutBroker.ensureCredits(toggleModal);
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
        hash: 2125261280,
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
          var _components = require("pragmate-ui/components");
          function DynamicQuestionsForm() {
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = ({
              currentTarget: target
            }) => {
              const questions = target.value.map(item => ({
                question: item.question,
                options: item.options,
                correctAnswer: item.correctAnswer
              }));
              const specs = {
                ...values.specs,
                questions: [...questions]
              };
              editData({
                specs: {
                  ...specs
                },
                updated: true
              });
            };
            if (fetching) return _react.default.createElement("div", null, _react.default.createElement(_components.Spinner, {
              active: true,
              variant: "primary"
            }));
            return _react.default.createElement(Dynamic.Provider, {
              name: "questions",
              defaultValue: {
                question: ''
              },
              draggable: true,
              Item: _question.DynamicQuestionItem,
              value: values.specs.questions,
              onChange: onChange,
              specs: {
                setFetching
              }
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
        hash: 2205669843,
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
              activity,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
            globalThis.activity = activity;
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const processOptions = options => {
              const correctIndex = props.value.correctAnswer;
              return options.map((option, index) => ({
                value: option,
                correct: index === correctIndex
              }));
            };
            const data = props.value?.options ? processOptions(props.value.options) : [];
            const [answers, setAnswers] = _react.default.useState(data); // [ { value: 'answer', correct: true }
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
            const value = props.value?.question ?? '';
            const deleteItem = event => {
              event.stopPropagation();
              const items = removeItem(props.index);
              editData({
                specs: {
                  ...values.specs,
                  questions: items
                },
                updated: true
              });
            };
            const [fetching, setFetching] = _react.default.useState(false);
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
              const options = await activity.specs.generateAnswers({
                notes,
                question: value
              });
              const data = [...values.specs.questions];
              setFetching(true);
              globalThis.setTimeout(() => {
                data[props.index].options = options;
                setAnswers(processOptions(options));
                editData({
                  specs: {
                    ...values.specs,
                    questions: [...data]
                  },
                  updated: true
                });
                setFetching(false);
              }, 1000);
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
              fetching: fetching,
              disabled: !props.value,
              show: answers?.length,
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
        hash: 423270581,
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
            const toggleEdition = async () => setEdition(!edition);
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
        hash: 1351157801,
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
        hash: 2980465286,
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
              onSave: onSave,
              content: activity.title,
              placeholder: texts.form.title
            })), _react.default.createElement(_icons.AppIcon, {
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
        hash: 4180999191,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
                ensureCredits: _mainLayout.LayoutBroker.ensureCredits,
                itemsType
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
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
        hash: 2072912433,
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
            const onSave = async event => {
              console.log(2, callback);
              event.stopPropagation();
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
        hash: 3182451074,
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
              target: {
                name,
                value
              }
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
              onSave: onSave,
              content: value
            }, value));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./specs/empty
      *****************************/

      ims.set('./specs/empty', {
        hash: 2100839357,
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
            }, _react.default.createElement("footer", {
              className: "activity__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual), _react.default.createElement(_aiButton.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "primary"
            }, texts.actions.generate))), showSuggestions && _react.default.createElement(_specsModal.SpecsSuggestionsModal, {
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
        hash: 1630174409,
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
            }, _react.default.createElement("label", null, " ", texts.activities.description.label), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/objective
      *********************************/

      ims.set('./specs/objective', {
        hash: 948121357,
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
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", null, texts.specs.objective.label), _react.default.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs.objective
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwiRm9ybSIsInJlZmluZSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25CYWNrIiwic2V0QnJlYWRjcnVtYiIsInJvdXRpbmciLCJiYWNrIiwib25Nb2RhbENhbmNlbCIsIkxpbmsiLCJJY29uIiwiQXBwSWNvbiIsImFjdGl2aXRpZXMiLCJtb2R1bGUiLCJtYW51YWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJzZXROb3RlcyIsIm1hdGVyaWFscyIsInNwZWNzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwiY2FsbGJhY2siLCJzdWdnZXN0aW9uU3BlY3MiLCJlcnJvciIsInNldEVycm9yIiwicmVzcG9uc2UiLCJ0ZXh0RXJyb3IiLCJlcnJvcnMiLCJmaWVsZHMiLCJnZXREYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiRXJyb3JSZW5kZXJlciIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm1vZGVsIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImlkIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJ0YXJnZXQiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3NhdmVCdXR0b24iLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsIm9uQ2xpY2tDYW5jZWwiLCJGcmFnbWVudCIsIklucHV0Iiwicm9sZSIsImJvcmRlcmVkIiwiU2F2ZUJ1dHRvbiIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJfZGVsZXRlTW9kYWwiLCJDb250ZW50VGhlb3J5Rm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJrZXkiLCJkZWxldGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwib25TYXZlIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsInNldERpc2FibGVkIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJyZWxhdGVkIiwiSEFSQ09ERURfUVVFU1RJT05TIiwicXVlc3Rpb24iLCJjb3JyZWN0X2Fuc3dlciIsIk1hbnVhbEZvcm0iLCJfcXVlc3Rpb25zIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwiaW5kZXgiLCJsZW5ndGgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiZ2V0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJnbG9iYWxUaGlzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfaXRlbSIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFya0NvcnJlY3QiLCJfcmVmaW5hbWVudCIsIkR5bmFtaWNIZWFkZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIlJlZmluZW1lbnRNb2RhbCIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJfaGVhZGVyIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiYXMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIkFuc3dlcnMiLCJDb250cm9sIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwib25FZGl0Iiwib25SZW9yZGVyIiwiZWRpdEF0dHJzIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJzZXRPcmRlciIsIm91dHB1dCIsIlJlb3JkZXIiLCJHcm91cCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsImFkZEJ1bGxldFBvaW50IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiYnVsbGV0UG9pbnQiLCJpbmRlcGVuZGVudCIsInJlbGF0ZWRBcnRpY2xlIiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsIm9uRGVsZXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJDcml0ZXJpYUZpZWxkIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJzZXRJdGVtcyIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwiQ3JpdGVyaWFJdGVtIiwiU3Bva2VuTWFudWFsRm9ybSIsImNsZWFyIiwidmFsaWRDcml0ZXJpYSIsInJlZHVjZSIsImFjYyIsIl9jcml0ZXJpYUl0ZW0iLCJfY3JpdGVyaWFGb3JtIiwibWFudWFsRm9ybSIsImVkaXRDcml0ZXJpYSIsInNldEVkaXRDcml0ZXJpYSIsInRvZ2dsZUNyaXRlcmlhIiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiRGF0ZSIsIm5vdyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkNvbnRlbnRFZGl0YWJsZSIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfc3BlY3MiLCJfZm9ybXMiLCJfb2JqZWN0aXZlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJpdGVtc1R5cGUiLCJhY3Rpdml0eVR5cGVzIiwiZmluYWxEYXRhIiwiRXJyb3IiLCJQYWdlQ29udGFpbmVyIiwiR2VuZXJhbEFjdGl2aXR5RmllbGRzIiwiQWN0aXZpdHlPYmplY3RpdmVTcGVjcyIsImRlZmluZVByb3BlcnR5IiwiX3NwZWNzTW9kYWwiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUwsV0FBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxDQUFDO1lBQzdELE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdBQUEsQ0FBQVksTUFBTTtjQUFBLEdBQUtOLEtBQUs7Y0FBRU8sSUFBSSxFQUFFZCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTztjQUFFVixPQUFPLEVBQUVFO1lBQVcsR0FDMURILFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVWSxZQUFZQSxD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