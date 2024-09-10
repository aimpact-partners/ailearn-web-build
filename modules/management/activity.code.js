System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.27/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.6-dev.27/main-layout.widget", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.6-dev.27/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@aimpact/ailearn-app@0.1.6-dev.27/modules/management/refinament.code", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/collapsible", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.27/components/ui/bullet-points-input", "@aimpact/ailearn-app@0.1.6-dev.27/components/cover-image.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev27ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev27ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_5 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp016Dev27MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev27MainLayoutWidget;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp016Dev27ComponentsUi) {
      dependency_9 = _aimpactAilearnApp016Dev27ComponentsUi;
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
    }, function (_aimpactAilearnApp016Dev27ModulesManagementRefinamentCode) {
      dependency_18 = _aimpactAilearnApp016Dev27ModulesManagementRefinamentCode;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_20 = _pragmateUi100Beta6Collapsible;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev27ComponentsUiBulletPointsInput) {
      dependency_22 = _aimpactAilearnApp016Dev27ComponentsUiBulletPointsInput;
    }, function (_aimpactAilearnApp016Dev27ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp016Dev27ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.27"], ["@aimpact/ailearn-app", "0.1.6-dev.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.27/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.27/modules/management/activity.code');
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
        hash: 240439471,
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
            const onGenerate = notes => activity.specs.generate(notes, {
              ...suggestionSpecs
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsImVuc3VyZSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsInN0b3JlIiwidGV4dHMiLCJjbGVhckRhdGEiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJtb2RhbCIsImNhbmNlbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJfZm9ybSIsIl91aSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInR5cGUiLCJlZGl0RGF0YSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZ2VuZXJhdGUiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImNsYXNzTmFtZSIsIkZvcm0iLCJyZWZpbmUiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJhY3Rpdml0aWVzIiwibW9kdWxlIiwibWFudWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsImdldEVycm9yIiwiZmllbGRzIiwia2V5IiwiZXJyb3JzIiwibGVuZ3RoIiwiZ2V0RGF0YSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yUmVuZGVyZXIiLCJTdWdnZXN0aW9uTW9kYWwiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJtb2RlbCIsIml0ZW1zIiwiZm9yRWFjaCIsImkiLCJpZCIsImFjdGl2aXR5SWQiLCJwdXNoIiwic2VsZWN0Q2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9zYXZlQnV0dG9uIiwiQ2hhcmFjdGVyVGFsa01hbnVhbEZvcm0iLCJvbkNsaWNrQ2FuY2VsIiwiRnJhZ21lbnQiLCJJbnB1dCIsInJvbGUiLCJib3JkZXJlZCIsIlNhdmVCdXR0b24iLCJjYWxsYmFjayIsIl9lbXB0eSIsIl9iYXNlU3BlYyIsIl9ob29rcyIsIkNoYXJhY3RlclRhbGtGb3JtIiwic2V0TWFudWFsIiwidXNlQmluZGVyIiwiRW1wdHlTcGVjcyIsIm9uTWFudWFsIiwiQWN0aXZpdHlCYXNlU3BlYyIsIl9tYW51YWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImNvbnRlbnQiLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX21hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJfY29udGVudCIsIl90YWJzIiwiX3BhbmUiLCJfYXVkaW8iLCJfZGVsZXRlTW9kYWwiLCJDb250ZW50VGhlb3J5Rm9ybSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwidG9nZ2xlRWRpdGlvbiIsInRhYnMiLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJUYWIiLCJkZWxldGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwib25TYXZlIiwiTWFudWFsRGViYXRlRm9ybSIsImJ0bkxhYmVsIiwic3ViamVjdCIsIkRlYmF0ZUZvcm0iLCJ0b2dnbGVNYW51YWwiLCJjbGVhckNvbnRlbnQiLCJkZWxldGVNb2RhbCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIkFjdGl2aXR5QmFzZUZvcm0iLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJTcG9rZW5Gb3JtIiwiZm9ybXMiLCJkZWJhdGUiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0Iiwic2F2ZSIsIm1hcCIsInNhdmVkIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJBbmltYXRlZENvbnRhaW5lciIsIl9yZWxhdGVkQWN0aXZpdHkiLCJFbXB0eUFjdGl2aXR5Iiwib3Blbk1hbnVhbCIsInJlbGF0ZWQiLCJ1c2VNZW1vIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJIQVJDT0RFRF9RVUVTVElPTlMiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiTWFudWFsRm9ybSIsIl9xdWVzdGlvbnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJpbmRleCIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJnZXQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9pdGVtIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIl9yZWZpbmFtZW50IiwiRHluYW1pY0hlYWRlciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImdlbmVyYXRlUXVlc3Rpb25zIiwiUmVmaW5lbWVudE1vZGFsIiwib3duZXIiLCJjcmVkaXRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiZ2xvYmFsVGV4dHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiX2hlYWRlciIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiTXVsdGlwbGVDaG9pY2VMaXN0Iiwic2V0RWRpdE9wdGlvblNwZWNzIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImFzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJBbnN3ZXJzIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIk11bHRpcGxlQ2hvaWNlRm9ybUhlYWRlciIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9uQmluZGVyIiwib25FZGl0Iiwib25SZW9yZGVyIiwiZWRpdEF0dHJzIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwidG9nZ2xlUmVvcmRlciIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwic2V0T3JkZXIiLCJvdXRwdXQiLCJSZW9yZGVyIiwiR3JvdXAiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJyZWZpbmVBY3Rpb24iLCJhZGRCdWxsZXRQb2ludCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsImJ1bGxldFBvaW50IiwiaW5kZXBlbmRlbnQiLCJyZWxhdGVkQXJ0aWNsZSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJvbkRlbGV0ZSIsImhhbmRsZUNoYW5nZSIsImNyaXRlcmlhIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiX2NyaXRlcmlhRmllbGQiLCJTcG9rZW5Dcml0ZXJpYUZvcm0iLCJ0YXNrIiwiYXNzZXNzbWVudCIsIkNyaXRlcmlhSXRlbSIsIlNwb2tlbk1hbnVhbEZvcm0iLCJjbGVhciIsInZhbGlkQ3JpdGVyaWEiLCJyZWR1Y2UiLCJhY2MiLCJfY3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRm9ybSIsIm1hbnVhbEZvcm0iLCJlZGl0Q3JpdGVyaWEiLCJzZXRFZGl0Q3JpdGVyaWEiLCJ0b2dnbGVDcml0ZXJpYSIsInNwb2tlbiIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkRhdGUiLCJub3ciLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJDb250ZW50RWRpdGFibGUiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX3NwZWNzIiwiX2Zvcm1zIiwiX29iamVjdGl2ZSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiaXRlbXNUeXBlIiwiYWN0aXZpdHlUeXBlcyIsImZpbmFsRGF0YSIsIkVycm9yIiwiUGFnZUNvbnRhaW5lciIsIkdlbmVyYWxBY3Rpdml0eUZpZWxkcyIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJkZWZpbmVQcm9wZXJ0eSIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIl9sYW5ndWFnZSIsInNhdmVFZGl0YWJsZSIsInNlbGVjdG9yIiwicHJvcGVydGllcyIsIm9iamVjdGl2ZSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvYXVkaW8udHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2NvbnRlbnQudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9kZWJhdGUvZm9ybS50c3giLCIvdHMvZm9ybXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2Zvcm1zL2luZGV4LnRzeCIsIi90cy9mb3Jtcy9sYW5ndWFnZS50c3giLCIvdHMvZm9ybXMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9mb3Jtcy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZW1wdHkudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaGFyY29kZWQtcXVlc3Rpb25zLnRzIiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vbWFudWFsLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2JvZHkvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9ib2R5L2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9saXN0LnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UvYm9keS9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9oZWFkZXIudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL2xpc3QudHN4IiwiL3RzL2Zvcm1zL211bHRpcGxlLWNob2ljZS9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvZm9ybXMvbXVsdGlwbGUtY2hvaWNlL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtaXRlbS50c3giLCIvdHMvZm9ybXMvc3Bva2VuL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCIsIi90cy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9zcGVjcy9pbmRleC50c3giLCIvdHMvc3BlY3Mvb2JqZWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsU0FBVUssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRUMsTUFBTSxHQUFHLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDakYsTUFBTUMsV0FBVyxHQUFHRixNQUFNLEdBQUcsTUFBTUosV0FBQSxDQUFBTyxZQUFZLENBQUNDLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ1IsTUFB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