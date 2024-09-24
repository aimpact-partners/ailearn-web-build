System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.9/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.9/main-layout.widget", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.9/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@aimpact/ailearn-app@0.1.9/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.9/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.1.9/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp019ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp019ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_5 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp019MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp019MainLayoutWidget;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp019ComponentsUi) {
      dependency_9 = _aimpactAilearnApp019ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_11 = _pragmateUi100Beta6FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_15 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_16 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_17 = _pragmateUi100Beta6DynamicList;
    }, function (_aimpactAilearnApp019ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp019ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_20 = _pragmateUi100Beta6Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp019ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp019ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp019ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp019ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.9"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.9/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.9/modules/management/activity.code');
      ims = new Map();
      /**************************************
      INTERNAL MODULE: ./components/ai-button
      **************************************/
      ims.set('./components/ai-button', {
        hash: 2396306767,
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
            ensure = true,
            ...props
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
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
            ensure = true,
            ...props
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
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
        hash: 3785027250,
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
        hash: 2061303712,
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
          var _criteriaField = require("../spoken/criteria-field");
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
            }), _react.default.createElement(_form.Textarea, {
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
        hash: 1794692111,
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
              debate: _debate.DebateForm,
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
        hash: 497491262,
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
        hash: 3894635481,
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
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function DynamicHeader() {
            const {
              activity,
              texts,
              values,
              editData,
              store
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
              const response = await activity.specs.generate(notes, {
                related: values.specs.related
              });
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
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end border-bottom"
            }, _react.default.createElement(_ui.AIButton, {
              variant: "link",
              onClick: toggleModal
            }, actions.generateQuestions), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleModal,
              globalTexts: store.globalTexts,
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
        hash: 3096915448,
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
              editData,
              store
            } = (0, _context.useModuleContext)();
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useModuleContext)();
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
            const {
              owner,
              credits,
              consumeCoins
            } = store.model;
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
              disabled: !value || value === '',
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
              owner: owner,
              credits: credits,
              onConsume: consumeCoins,
              globalTexts: store.globalTexts,
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

      /**********************************************
      INTERNAL MODULE: ./forms/multiple-choice/header
      **********************************************/

      ims.set('./forms/multiple-choice/header', {
        hash: 4179258504,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceFormHeader = MultipleChoiceFormHeader;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _manual = require("./body/form/manual");
          var _empty = require("./body/empty");
          var _components = require("pragmate-ui/components");
          function MultipleChoiceFormHeader() {
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
            return _react.default.createElement("header", {
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
            }, texts.actions.delete)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/multiple-choice/index
      *********************************************/

      ims.set('./forms/multiple-choice/index', {
        hash: 290129061,
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
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: onEdit,
              icon: "pencil"
            }, texts.actions.edit), _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, texts.actions.delete))), _react.default.createElement(_list.MultipleChoiceList, {
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
        hash: 2212344137,
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
        hash: 148616516,
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
            const [items, setItems] = _react.default.useState(values?.specs?.criteria?.length ? [...values.specs.criteria] : [{
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
        hash: 4175545107,
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
            const [picture, setPicture] = _react.default.useState({
              src: activity.picture,
              date: Date.now()
            });
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
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              entity: "activity",
              picture: `${picture.src}?size=sm&${Date.now()}`,
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
        hash: 1540801845,
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
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              activity,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_header.ActivityHeader, null)));
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
        hash: 1019237359,
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
          var _aiButton = require("../components/ai-button");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
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
              activity,
              store
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
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
              variant: "primary",
              ensure: false
            }, texts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              globalTexts: store.globalTexts,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsImVuc3VyZSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsImdldEVycm9yIiwiZmllbGRzIiwia2V5IiwiZXJyb3JzIiwibGVuZ3RoIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJjYWxsYmFjayIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJfZGVsZXRlTW9kYWwiLCJDb250ZW50VGhlb3J5Rm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJkZWxldGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwib25TYXZlIiwiX2NyaXRlcmlhRmllbGQiLCJNYW51YWxEZWJhdGVGb3JtIiwiYnRuTGFiZWwiLCJzdWJqZWN0IiwidGFzayIsImFzc2Vzc21lbnQiLCJDcml0ZXJpYUZpZWxkIiwiRGViYXRlRm9ybSIsInRvZ2dsZU1hbnVhbCIsImNsZWFyQ29udGVudCIsImRlbGV0ZU1vZGFsIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiQWN0aXZpdHlCYXNlRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIlNwb2tlbkZvcm0iLCJmb3JtcyIsImRlYmF0ZSIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsInNlbGVjdCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXQiLCJzYXZlIiwibWFwIiwic2F2ZWQiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiX3JlbGF0ZWRBY3Rpdml0eSIsIkVtcHR5QWN0aXZpdHkiLCJvcGVuTWFudWFsIiwicmVsYXRlZCIsInVzZU1lbW8iLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIkhBUkNPREVEX1FVRVNUSU9OUyIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJNYW51YWxGb3JtIiwiX3F1ZXN0aW9ucyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImdldCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0IiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiX3JlZmluYW1lbnQiLCJEeW5hbWljSGVhZGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJSZWZpbmVtZW50TW9kYWwiLCJvd25lciIsImNyZWRpdHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJnbG9iYWxUZXh0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJfaGVhZGVyIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJzZXRFZGl0T3B0aW9uU3BlY3MiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiYXMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIkFuc3dlcnMiLCJDb250cm9sIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiTXVsdGlwbGVDaG9pY2VGb3JtSGVhZGVyIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwib25CaW5kZXIiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJlZGl0QXR0cnMiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJzZXRPcmRlciIsIm91dHB1dCIsIlJlb3JkZXIiLCJHcm91cCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIkJ1bGxldFBvaW50c0hlYWRlciIsInJlZmluZUFjdGlvbiIsImFkZEJ1bGxldFBvaW50IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiYnVsbGV0UG9pbnQiLCJpbmRlcGVuZGVudCIsInJlbGF0ZWRBcnRpY2xlIiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsIm9uRGVsZXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3JpdGVyaWEiLCJfY3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwiZWxlbWVudHMiLCJzbGljZSIsImNvbmNhdCIsIm9uQ2hhbmdlSXRlbSIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsInNwb2tlbiIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQ29udGVudEVkaXRhYmxlIiwiZm9ybSIsIl9iZXlvbmRfY29udGV4dCIsIl9zcGVjcyIsIl9mb3JtcyIsIl9vYmplY3RpdmUiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJmaW5hbERhdGEiLCJQYWdlQ29udGFpbmVyIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJpdGVtc1R5cGUiLCJHZW5lcmFsQWN0aXZpdHlGaWVsZHMiLCJBY3Rpdml0eU9iamVjdGl2ZVNwZWNzIiwiZGVmaW5lUHJvcGVydHkiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJfbGFuZ3VhZ2UiLCJzYXZlRWRpdGFibGUiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJvYmplY3RpdmUiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvZm9ybS50c3giLCIvdHMvZm9ybXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9mb3Jtcy9pbmRleC50c3giLCIvdHMvZm9ybXMvbGFuZ3VhZ2UudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2VtcHR5LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2hhcmNvZGVkLXF1ZXN0aW9ucy50cyIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL21hbnVhbC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2Uvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giLCIvdHMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9zcGVjcy9lbXB0eS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3NwZWNzL29iamVjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDTztVQUFVLFNBQVVLLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUVDLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ2pGLE1BQU1DLFdBQVcsR0FBR0YsTUFBTSxHQUFHLE1BQU1KLFdBQUEsQ0FBQU8sWUFBWSxDQUFDQyxhQUFhLENBQUNMLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0NSLE1BQUEsQ0FBQWMsT0FB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