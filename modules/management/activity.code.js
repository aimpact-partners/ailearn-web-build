System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/form", "@aimpact/ailearn-app@0.1.1/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/dynamic-list", "@aimpact/ailearn-app@0.1.1/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.1/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.1.1/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp011ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_4 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_5 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_7 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Form) {
      dependency_8 = _pragmateUi100Beta1Form;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_9 = _aimpactAilearnApp011ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1FormReactSelect) {
      dependency_11 = _pragmateUi100Beta1FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1List) {
      dependency_13 = _pragmateUi100Beta1List;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_15 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_16 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1DynamicList) {
      dependency_17 = _pragmateUi100Beta1DynamicList;
    }, function (_aimpactAilearnApp011ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp011ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_20 = _pragmateUi100Beta1Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp011ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp011ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp011ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp011ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/modules/management/activity.code');
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
        hash: 3897163173,
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
              closeBackdrop: false,
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
        hash: 1256829720,
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
              closeBackdrop: false,
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
        hash: 3995102290,
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
                  console.error(99, e, e.message);
                  setError('default');
                }
              }
            };
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
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
        hash: 3036694819,
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
              closeBackdrop: false,
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
        hash: 9897201,
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
            // const onSave() => {}
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
        hash: 1286932305,
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
              activity,
              store
            } = (0, _context.useModuleContext)();
            const [disabled, setDisabled] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)();
            const related = (0, _react.useMemo)(() => {
              if (activity.specs.related !== undefined) {
                const selected = store.model.activities.items[activity.specs.related];
                return selected?.id;
              }
              return undefined;
            }, [activity.specs.related, store.model.activities.items]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_relatedActivity.RelatedActivityField, {
              related: related,
              setError: setError,
              error: error
            }), _react.default.createElement(_empty.EmptySpecs, {
              name: "multiple-choice",
              onManual: openManual,
              disabled: !!error,
              suggestionSpecs: {
                related
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
        hash: 714486323,
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
        hash: 1594318554,
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
            related,
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
        hash: 3192161906,
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
        hash: 1603006657,
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
                editData({
                  updated: false
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsInRleHRFcnJvciIsImVycm9ycyIsImZpZWxkcyIsImdldERhdGEiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJFcnJvclJlbmRlcmVyIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwibW9kZWwiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsInRhcmdldCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfc2F2ZUJ1dHRvbiIsIkNoYXJhY3RlclRhbGtNYW51YWxGb3JtIiwib25DbGlja0NhbmNlbCIsIkZyYWdtZW50IiwiSW5wdXQiLCJyb2xlIiwiYm9yZGVyZWQiLCJTYXZlQnV0dG9uIiwiY2FsbGJhY2siLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50IiwiYXVkaW9zIiwic2V0QXVkaW9zIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJsb2ciLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiT2JqZWN0Iiwia2V5cyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiX2RlbGV0ZU1vZGFsIiwiQ29udGVudFRoZW9yeUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJ0YWJzIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiZGVsZXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsIm9uU2F2ZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJEZWJhdGVGb3JtIiwidG9nZ2xlTWFudWFsIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJBY3Rpdml0eUJhc2VGb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiU3Bva2VuRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldCIsInNhdmUiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJzZXREaXNhYmxlZCIsInJlbGF0ZWQiLCJ1c2VNZW1vIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJIQVJDT0RFRF9RVUVTVElPTlMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiTWFudWFsRm9ybSIsIl9xdWVzdGlvbnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJpbmRleCIsImxlbmd0aCIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJnZXQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9pdGVtIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsIl9oZWFkZXIiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcXVlc3Rpb25JdGVtTGlzdCIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInNldEVkaXRPcHRpb25TcGVjcyIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJhcyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiQW5zd2VycyIsIkNvbnRyb2wiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJlZGl0QXR0cnMiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsInNldE9yZGVyIiwib3V0cHV0IiwiUmVvcmRlciIsIkdyb3VwIiwiX2J1bGxldFBvaW50c0lucHV0IiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwicmVmaW5lQWN0aW9uIiwiYWRkQnVsbGV0UG9pbnQiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJidWxsZXRQb2ludCIsImluZGVwZW5kZW50IiwicmVsYXRlZEFydGljbGUiLCJDcml0ZXJpYUZpZWxkSXRlbSIsInRvdGFsIiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJjcml0ZXJpYSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIl9jcml0ZXJpYUZpZWxkIiwiU3Bva2VuQ3JpdGVyaWFGb3JtIiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUl0ZW0iLCJTcG9rZW5NYW51YWxGb3JtIiwiY2xlYXIiLCJ2YWxpZENyaXRlcmlhIiwicmVkdWNlIiwiYWNjIiwiX2NyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZvcm0iLCJtYW51YWxGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwidG9nZ2xlQ3JpdGVyaWEiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJEYXRlIiwibm93IiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQ29udGVudEVkaXRhYmxlIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJmaW5hbERhdGEiLCJFcnJvciIsIlBhZ2VDb250YWluZXIiLCJHZW5lcmFsQWN0aXZpdHlGaWVsZHMiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiZGVmaW5lUHJvcGVydHkiLCJfc3BlY3NNb2RhbCIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIl9sYW5ndWFnZSIsInNhdmVFZGl0YWJsZSIsInNlbGVjdG9yIiwicHJvcGVydGllcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9sYW5ndWFnZS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZW1wdHkudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaGFyY29kZWQtcXVlc3Rpb25zLnRzIiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxXQUFBLENBQUFNLFlBQVksQ0FBQ0MsYUFBYSxDQUFDSixPQUFPLENBQUM7WUFDN0QsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUEsR0FBS04sS0FBSztjQUFFTyxJQUFJLEVBQUVkLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPO2NBQUVWLE9BQU8sRUFBRUU7WUFBVyxHQUMxREgsUUFBUSxDQUNEO1VB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