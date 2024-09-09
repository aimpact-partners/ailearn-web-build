System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.3.1", "@aimpact/ailearn-app@0.1.6-dev.21/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.6-dev.21/main-layout.widget", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@aimpact/ailearn-app@0.1.6-dev.21/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.1.6-dev.21/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev21ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev21ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_5 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp016Dev21MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev21MainLayoutWidget;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_9 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_11 = _pragmateUi100Beta6FormReactSelect;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_15 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_16 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_17 = _pragmateUi100Beta6DynamicList;
    }, function (_aimpactAilearnApp016Dev21ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp016Dev21ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_20 = _pragmateUi100Beta6Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev21ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp016Dev21ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp016Dev21ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp016Dev21ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["swiper", "10.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/modules/management/activity.code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsImdldEVycm9yIiwiZmllbGRzIiwia2V5IiwiZXJyb3JzIiwibGVuZ3RoIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJjYWxsYmFjayIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJfZGVsZXRlTW9kYWwiLCJDb250ZW50VGhlb3J5Rm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJkZWxldGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwib25TYXZlIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsInJlbGF0ZWQiLCJ1c2VNZW1vIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJIQVJDT0RFRF9RVUVTVElPTlMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiTWFudWFsRm9ybSIsIl9xdWVzdGlvbnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJpbmRleCIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJnZXQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9pdGVtIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwib3duZXIiLCJjcmVkaXRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiZ2xvYmFsVGV4dHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIk11bHRpcGxlQ2hvaWNlRm9ybUhlYWRlciIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9uQmluZGVyIiwib25FZGl0Iiwib25SZW9yZGVyIiwiZWRpdEF0dHJzIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwidG9nZ2xlUmVvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsInNwb2tlbiIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJkZWZpbmVQcm9wZXJ0eSIsIl9zcGVjc01vZGFsIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiX2xhbmd1YWdlIiwic2F2ZUVkaXRhYmxlIiwic2VsZWN0b3IiLCJwcm9wZXJ0aWVzIiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9mb3JtLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL2xhbmd1YWdlLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9lbXB0eS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9oYXJjb2RlZC1xdWVzdGlvbnMudHMiLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2hlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvbGlzdC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZpZWxkLWl0ZW0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vZm9ybS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ087VUFBVSxTQUFVSyxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUwsV0FBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxDQUFDO1lBQzdELE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFdB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