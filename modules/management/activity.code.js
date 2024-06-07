System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-11/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-11/main-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-11/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/list", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/dynamic-list", "@aimpact/ailearn-app@0.0.46.dev-11/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-11/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.0.46.dev-11/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev11ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0046Dev11ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0046Dev11MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev11MainLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_7 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_8 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev11ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0046Dev11ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev11ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp0046Dev11ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi011Collapsible) {
      dependency_20 = _pragmateUi011Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev11ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp0046Dev11ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp0046Dev11ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0046Dev11ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-11"], ["@aimpact/ailearn-app", "0.0.46.dev-11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-11/modules/management/activity.code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsImNhbGxiYWNrIiwic3VnZ2VzdGlvblNwZWNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwidGV4dEVycm9yIiwiZXJyb3JzIiwiZmllbGRzIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJfZW1wdHkiLCJfYmFzZVNwZWMiLCJfaG9va3MiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsInVzZUJpbmRlciIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50IiwiYXVkaW9zIiwic2V0QXVkaW9zIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiT2JqZWN0Iiwia2V5cyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJlZGl0IiwiRW1wdHlNYXRlcmlhbCIsIl9tYXRlcmlhbHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiX2NvbnRlbnQiLCJfdGFicyIsIl9wYW5lIiwiX2F1ZGlvIiwiX2RlbGV0ZU1vZGFsIiwiQ29udGVudFRoZW9yeUZvcm0iLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJ0YWJzIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiVGFiIiwia2V5IiwiZGVsZXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsIm9uU2F2ZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJidG5MYWJlbCIsInN1YmplY3QiLCJEZWJhdGVGb3JtIiwidG9nZ2xlTWFudWFsIiwiY2xlYXJDb250ZW50IiwiZGVsZXRlTW9kYWwiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJBY3Rpdml0eUJhc2VGb3JtIiwiTXVsdGlwbGVDaG9pY2VGb3JtIiwiU3Bva2VuRm9ybSIsImZvcm1zIiwiZGViYXRlIiwic3Bva2VuIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldCIsInNhdmUiLCJtYXAiLCJzYXZlZCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfcmVsYXRlZEFjdGl2aXR5IiwiRW1wdHlBY3Rpdml0eSIsIm9wZW5NYW51YWwiLCJzZXREaXNhYmxlZCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwicmVsYXRlZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsImluZGV4IiwibGVuZ3RoIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImdldCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJSZWZpbmVtZW50TW9kYWwiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwic2F2ZUVkaXRhYmxlIiwic2VsZWN0b3IiLCJwcm9wZXJ0aWVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFdBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VB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