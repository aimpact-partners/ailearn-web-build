System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-20/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-20/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.46.dev-20/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-20/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.46.dev-20/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev20ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0046Dev20ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0046Dev20MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev20MainLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev20ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev20ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev20ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp0046Dev20ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_20 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev20ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp0046Dev20ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0046Dev20ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0046Dev20ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-20"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-20/modules/management/activity.code');
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
        hash: 1170363015,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50IiwiYXVkaW9zIiwic2V0QXVkaW9zIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiT2JqZWN0Iiwia2V5cyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiX2RlbGV0ZU1vZGFsIiwiQ29udGVudFRoZW9yeUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJ0YWJzIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiZGVsZXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsIm9uU2F2ZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJEZWJhdGVGb3JtIiwidG9nZ2xlTWFudWFsIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJBY3Rpdml0eUJhc2VGb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiU3Bva2VuRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldCIsInNhdmUiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJzZXREaXNhYmxlZCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsImluZGV4IiwibGVuZ3RoIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImdldCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJSZWZpbmVtZW50TW9kYWwiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwic2F2ZUVkaXRhYmxlIiwic2VsZWN0b3IiLCJwcm9wZXJ0aWVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFdBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VB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