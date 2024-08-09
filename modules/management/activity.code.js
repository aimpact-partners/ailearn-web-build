System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.3-dev.12/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.3-dev.12/main-layout.widget", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/form", "@aimpact/ailearn-app@0.1.3-dev.12/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/dynamic-list", "@aimpact/ailearn-app@0.1.3-dev.12/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.1/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.3-dev.12/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.1.3-dev.12/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp013Dev12ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp013Dev12ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_4 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_5 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp013Dev12MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp013Dev12MainLayoutWidget;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_7 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Form) {
      dependency_8 = _pragmateUi100Beta1Form;
    }, function (_aimpactAilearnApp013Dev12ComponentsUi) {
      dependency_9 = _aimpactAilearnApp013Dev12ComponentsUi;
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
    }, function (_aimpactAilearnApp013Dev12ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp013Dev12ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_20 = _pragmateUi100Beta1Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp013Dev12ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp013Dev12ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp013Dev12ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp013Dev12ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-dev.12"], ["@aimpact/ailearn-app", "0.1.3-dev.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-dev.12/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-dev.12/modules/management/activity.code');
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
        hash: 3045223981,
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
                    const getError = (error, fields = []) => {
                      const key = texts.errors?.[error] ? error : 'default';
                      if (!!fields.length) {
                        return texts.errors[key] + ` ${fields}`;
                      }
                      return texts.errors[key];
                    };
                    setError(getError(response.error, response.fields));
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
        hash: 2401728664,
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
            const [items, setItems] = _react.default.useState(values?.specs?.criteria.length ? [...values.specs.criteria] : [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsImdldEVycm9yIiwiZmllbGRzIiwia2V5IiwiZXJyb3JzIiwibGVuZ3RoIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJjYWxsYmFjayIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJfZGVsZXRlTW9kYWwiLCJDb250ZW50VGhlb3J5Rm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJkZWxldGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwib25TYXZlIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJzcG9rZW4iLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsInNldERpc2FibGVkIiwicmVsYXRlZCIsInVzZU1lbW8iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImdldCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJSZWZpbmVtZW50TW9kYWwiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsIm9uRWRpdCIsIm9uUmVvcmRlciIsImVkaXRBdHRycyIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwic2F2ZUVkaXRhYmxlIiwic2VsZWN0b3IiLCJwcm9wZXJ0aWVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1MLFdBQUEsQ0FBQU0sWUFBWSxDQUFDQyxhQUFhLENBQUNKLE9BQU8sQ0FBQztZQUM3RCxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQSxHQUFLTixLQUFLO2NBQUVPLElBQUksRUFBRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLE9BQU87Y0FBRVYsT0FBTyxFQUFFRTtZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFF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LE9BQU8sRUFBRWhJLFFBQVEsQ0FBQ2E7WUFBVyxFQUM1QixDQUNHLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXhDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQixRQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFFTSxTQUFVcWMsc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRTVhLE1BQU07Y0FBRUcsS0FBSztjQUFFRixRQUFRO2NBQUV5QixRQUFRO2NBQUV4QjtZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRXZFLElBQUksQ0FBQ0osUUFBUSxDQUFDdUUsS0FBSyxDQUFDNFcsVUFBVSxDQUFDOUwsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUVqRSxNQUFNM0QsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRXZKLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUMzRCxNQUFNQyxJQUFJLEdBQUc7Z0JBQUVpQyxLQUFLLEVBQUU7a0JBQUUsR0FBR3ZFLFFBQVEsQ0FBQ3VFLEtBQUs7a0JBQUUsQ0FBQ25DLElBQUksR0FBR0M7Z0JBQUs7Y0FBRSxDQUFFO2NBRTVEWixRQUFRLENBQUNhLElBQUksQ0FBQztjQUNkLE1BQU10QyxRQUFRLENBQUNtTixHQUFHLENBQUM3SyxJQUFJLENBQUM7Y0FDeEIsTUFBTXJDLEtBQUssQ0FBQ21OLElBQUksRUFBRTtZQUNuQixDQUFDO1lBRUQsT0FDQy9PLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUt5RCxTQUFTLEVBQUM7WUFBYSxHQUMzQnZFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLGdCQUFRZSxLQUFLLENBQUNxRSxLQUFLLENBQUM2VyxTQUFTLENBQUNwYSxLQUFLLENBQVMsRUFDNUMzQyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsR0FBQSxDQUFBb1ksZUFBZTtjQUNmclgsSUFBSSxFQUFDLFdBQVc7Y0FDaEJzSixNQUFNLEVBQUVBLE1BQU07Y0FDZHpJLFdBQVcsRUFBRS9DLEtBQUssQ0FBQ3FFLEtBQUssQ0FBQzZXLFNBQVMsQ0FBQ25ZLFdBQVc7Y0FDOUMrRSxPQUFPLEVBQUVqSSxNQUFNLENBQUN3RSxLQUFLLENBQUM2VztZQUFTLEVBQzlCLENBQ0c7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==