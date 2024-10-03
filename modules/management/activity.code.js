System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/dynamic-list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_3 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_6 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_7 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_8 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_10 = _pragmateUi100Beta6DynamicList;
    }, function (_pragmateUi100Beta6Form) {
      dependency_11 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_12 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_14 = _pragmateUi100Beta6FormReactSelect;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_16 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactAilearnApp0113ComponentsDynamicField) {
      dependency_17 = _aimpactAilearnApp0113ComponentsDynamicField;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_19 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_21 = _aimpactAilearnApp0113ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/list', dependency_6], ['@aimpact/chat-sdk/widgets/markdown', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['pragmate-ui/dynamic-list', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['framer-motion', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/ailearn-app/components/dynamic-field', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/main-layout.widget', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@aimpact/ailearn-app/components/cover-image.code', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 520335239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => setView(activity.specs.empty() ? 'empty' : 'specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: onCancel,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/empty-material
      **********************************************************/

      ims.set('./activities/content-theory/empty-material', {
        hash: 2125434082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 1163751555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          function ContentTheoryActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const toggleView = view => {
              if (view === 'specs' && activity.specs.empty()) {
                setView('empty');
                return;
              }
              setView(view);
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: toggleView,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audio
      ***********************************************************/

      ims.set('./activities/content-theory/materials/audio', {
        hash: 2962854358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _react = require("react");
          var _manual = require("../../specs/manual");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          function ContentTheoryAudio({
            content
          }) {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
              } = (0, _context.useActivityContext)();
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
            }, _react.default.createElement(_ui.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/content
      *************************************************************/

      ims.set('./activities/content-theory/materials/content', {
        hash: 2459479353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _manual = require("../../specs/manual");
          var _context = require("../../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyMaterial = require("../empty-material");
          // import { EmptyMaterial } from './empty-material';

          function ContentTheoryContent() {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
              }, globalTexts.actions.edit)));
            }
            return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: "article",
              onManual: openManualForm
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 2255307620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          function DebateActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: toggleView,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/delete-modal
      *****************************************/

      ims.set('./activities/delete-modal', {
        hash: 3238128405,
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
              activity,
              texts: {
                activities: texts
              },
              store: {
                globalTexts: {
                  actions
                }
              }
            } = (0, _context.useActivityContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await activity.clearContent();
                onClose();
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

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/empty
      **************************************************/

      ims.set('./activities/multiple-choice/empty', {
        hash: 3980881128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceEmptySpecs = MultipleChoiceEmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function MultipleChoiceEmptySpecs({
            name,
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('form');
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
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "primary",
              ensure: false
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              activity: activity,
              activities: store.model.activities.items,
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

      /*******************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/index
      *******************************************************/

      ims.set('./activities/multiple-choice/form/index', {
        hash: 721692934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceManualForm = MultipleChoiceManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _questions = require("./questions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../context");
          var _relatedActivity = require("./related-activity");
          // import { SaveButton } from '../../../../save-button';

          function MultipleChoiceManualForm({
            onCancel,
            changeView
          }) {
            const {
              values,
              texts,
              store,
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [errors, setErrors] = _react.default.useState([]);
            const related = _react.default.useMemo(() => {
              if (activity.specs.related !== undefined) {
                const selected = store.model.activities.items[activity.specs.related];
                return selected?.id;
              }
              return undefined;
            }, [activity.specs.related, store.model.activities.items]);
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
              await activity.save();
              changeView();
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
            const updateErrors = error => setErrors([...errors, error]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              ref: ref,
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_relatedActivity.RelatedActivityField, {
              related: related,
              updateErrors: updateErrors
            }), _react.default.createElement(_ui.ErrorRenderer, {
              error: errors.length ? texts.errors.wrongQuestions : ''
            }), _react.default.createElement(_questions.DynamicQuestionsForm, null), _react.default.createElement("footer", {
              className: "section-actions__container border-top actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !!errors.length
            }, globalTexts.actions.save))));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/actions
      *******************************************************************/

      ims.set('./activities/multiple-choice/form/questions/actions', {
        hash: 3330609136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicActions = DynamicActions;
          var _react = require("react");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          function DynamicActions() {
            const {
              texts
            } = (0, _context.useActivityContext)();
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/footer
      **************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/footer', {
        hash: 4144017881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersFooter = DynamicAnswersFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../../context");
          function DynamicAnswersFooter({
            disabled,
            onAdd,
            showed
          }) {
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useActivityContext)();
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/index
      *************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/index', {
        hash: 4190891243,
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/item
      ************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/item', {
        hash: 2500085018,
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
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../../context");
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
            } = (0, _context.useActivityContext)();
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/header
      ******************************************************************/

      ims.set('./activities/multiple-choice/form/questions/header', {
        hash: 3550025075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicHeader = DynamicHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../context");
          function DynamicHeader() {
            const {
              activity,
              texts,
              values,
              editData,
              store
            } = (0, _context.useActivityContext)();
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
              try {
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
                  activity.specs.set({
                    questions: [...values.specs.questions, ...questions]
                  });
                }, 100);
              } catch (error) {
                console.log(error);
              }
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/hooks/use-input
      ***************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/hooks/use-input', {
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/index
      *****************************************************************/

      ims.set('./activities/multiple-choice/form/questions/index', {
        hash: 1350775389,
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
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          function DynamicQuestionsForm() {
            const {
              values,
              editData,
              activity
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = ({
              currentTarget: target
            }) => {
              const questions = target.value.map(item => ({
                question: item.question,
                options: item.options,
                correctAnswer: item.correctAnswer
              }));
              activity.specs.set({
                questions: [...questions]
              });
              console.log(20, activity.specs.getProperties());
              // editData({ specs: { ...specs }, updated: true });
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
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/question
      ********************************************************************/

      ims.set('./activities/multiple-choice/form/questions/question', {
        hash: 1941176386,
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
          var _answers = require("./answers");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          var _context = require("../../../../context");
          //@ts-ignore

          function DynamicQuestionItem(props) {
            const {
              onKeyDown
            } = (0, _useInput.useInput)(props.index);
            const {
              texts: {
                multipleChoice: texts
              },
              activity,
              values,
              editData,
              store
            } = (0, _context.useActivityContext)();
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
              activity.specs.set({
                questions: items
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

      /******************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/related-activity
      ******************************************************************/

      ims.set('./activities/multiple-choice/form/related-activity', {
        hash: 1842988910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../../context");
          function RelatedActivityField({
            related,
            updateErrors
          }) {
            const {
              store,
              texts: {
                multipleChoice: texts,
                errors
              },
              activity
            } = (0, _context.useActivityContext)();
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
                const related = store.model.activities.get(event.target.value);
                if (!related.materials.article) {
                  updateErrors([errors.NO_RELATED_ACTIVITY]);
                  return;
                }
              }
              updateErrors([]);
              activity.specs.set({
                related: event.target.value
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: related,
              options: [defaultValue, ...options],
              onChange: onChange
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/index
      **************************************************/

      ims.set('./activities/multiple-choice/index', {
        hash: 762294128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _form = require("./form");
          var _specs = require("./specs");
          var _empty = require("./empty");
          function MultipleChoiceActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.MultipleChoiceSpecs, {
                  setView: setView
                }),
                form: React.createElement(_form.MultipleChoiceManualForm, {
                  onCancel: onCancel,
                  changeView: changeView
                })
              },
              placeholder: React.createElement(_empty.MultipleChoiceEmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/answers
      **********************************************************/

      ims.set('./activities/multiple-choice/specs/answers', {
        hash: 3022094038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionAnswer = void 0;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          const QuestionAnswer = ({
            item: answer,
            correctAnswer,
            index
          }) => {
            console.log(45, answer);
            const icon = index === correctAnswer ? 'check' : 'close';
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
          exports.QuestionAnswer = QuestionAnswer;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/index
      ********************************************************/

      ims.set('./activities/multiple-choice/specs/index', {
        hash: 1430869190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceSpecs = MultipleChoiceSpecs;
          var _react = require("react");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _deleteModal = require("../../delete-modal");
          var _components = require("pragmate-ui/components");
          var _list = require("./list");
          function MultipleChoiceSpecs({
            setView
          }) {
            const [edition, setEdition] = _react.default.useState(false);
            const {
              values,
              activity,
              editData,
              store,
              texts
            } = (0, _context.useActivityContext)();
            const actionTexts = store.globalTexts.actions;
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [redordering, setReorder] = _react.default.useState(false);
            const toggleReorder = () => setReorder(!redordering);
            const onBinder = () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            };
            (0, _hooks.useBinder)([activity.specs], onBinder, 'specs.generated');
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const onEdit = event => setView('form');
            const onReorder = event => setReorder(!redordering);
            const reorderAttrs = {
              onClick: onReorder,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const orderLabel = !redordering ? actionTexts.order : actionTexts.cancel;
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
            }, actionTexts.edit), _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, actionTexts.delete))), _react.default.createElement(_list.MultipleChoiceList, {
              reordering: redordering,
              toggle: toggleReorder
            })), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/list
      *******************************************************/

      ims.set('./activities/multiple-choice/specs/list', {
        hash: 2348912727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceList = MultipleChoiceList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _questionItemList = require("./question-item-list");
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
            } = (0, _context.useActivityContext)();
            const [order, setOrder] = _react.default.useState(values.specs.questions);
            const [processing, setProcessing] = _react.default.useState(false);
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
                setProcessing(true);
                await activity.specs.set({
                  questions: order
                });
                await activity.save();
                setProcessing(false);
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
              }, _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: callback,
                disabled: processing
              }, store.globalTexts.actions.save)));
            }
            return _react.default.createElement(_list.List, {
              className: "activity-list",
              items: values.specs.questions,
              control: _questionItemList.QuestionItemList
            });
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/question-item-list
      *********************************************************************/

      ims.set('./activities/multiple-choice/specs/question-item-list', {
        hash: 2044658730,
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
          var _answers = require("./answers");
          var _components = require("pragmate-ui/components");
          function QuestionItemList({
            data,
            as = 'li',
            draggable = false
          }) {
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useActivityContext)();
            const Control = as;
            const onToggle = () => !isDragging;
            return _react.default.createElement(Control, {
              className: "subform__items"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, _react.default.createElement(_components.ConditionalContainer, {
              condition: draggable,
              ternary: true,
              options: {
                true: _react.default.createElement(_icons.Icon, {
                  className: "item-list-icon",
                  icon: "drag"
                }),
                false: _react.default.createElement(_icons.Icon, {
                  className: "item-list-icon",
                  icon: "circle-check"
                })
              }
            }), _react.default.createElement("span", {
              className: "item-list__content"
            }, data.question))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!data.options?.length,
              options: {
                true: _react.default.createElement(_list.List, {
                  items: data.options,
                  specs: {
                    correctAnswer: data.correctAnswer
                  },
                  control: _answers.QuestionAnswer
                }),
                false: _react.default.createElement("div", {
                  className: "text-end text-danger"
                }, texts.multipleChoice.emptyOptions)
              }
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/objective-field
      ********************************************/

      ims.set('./activities/objective-field', {
        hash: 1628285344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              currentTarget: {
                value
              }
            }) => {
              activity.specs.set({
                objective: value
              });
              await activity.save();
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs?.objective
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/specs/base-spec
      ********************************************/

      ims.set('./activities/specs/base-spec', {
        hash: 3313503426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              target: {
                name,
                value
              }
            }) => {
              activity.specs.set({
                [name]: value
              });
              await activity.save();
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

      /***********************************************
      INTERNAL MODULE: ./activities/specs/base-subspec
      ***********************************************/

      ims.set('./activities/specs/base-subspec', {
        hash: 1868760248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseSubspec = BaseSubspec;
          var _react = require("react");
          function BaseSubspec({
            item
          }) {
            return _react.default.createElement("div", {
              className: "subform__items"
            }, _react.default.createElement("strong", {
              className: "capitalize"
            }, item.name, ": "), " ", _react.default.createElement("span", null, item.value));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/specs/dynamic-label
      ************************************************/

      ims.set('./activities/specs/dynamic-label', {
        hash: 1851586303,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicLabelContainer = DynamicLabelContainer;
          var _react = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _baseSubspec = require("./base-subspec");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _dynamicSpec = require("./manual/dynamic-spec");
          function DynamicLabelContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              texts
            } = (0, _context.useActivityContext)();
            const [toggle, setToggle] = _react.default.useState(false);
            const onToggle = () => setToggle(!toggle);
            const items = specs[name]?.map((item, index) => {
              const [fieldName, value] = Object.keys(specs.structure[name].fields);
              return {
                name: item[fieldName],
                value: item[value]
              };
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h6", null, texts.specs[name].label), _react.default.createElement(_icons.Icon, {
              icon: "edit",
              className: "icon-clickable",
              onClick: onToggle
            })), _react.default.createElement(_components.ConditionalContainer, {
              condition: toggle,
              ternary: true,
              options: {
                true: _react.default.createElement(_dynamicSpec.DynamicItemSpec, {
                  onCancel: onToggle,
                  name: name,
                  item: specs[name]
                }),
                false: _react.default.createElement(_list.List, {
                  className: "criteria__items-list",
                  items: items,
                  control: _baseSubspec.BaseSubspec
                })
              }
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./activities/specs/empty
      ****************************************/

      ims.set('./activities/specs/empty', {
        hash: 3876055791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptySpecs({
            name,
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('manual');
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
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "primary",
              ensure: false
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
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

      /******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic-spec
      ******************************************************/

      ims.set('./activities/specs/manual/dynamic-spec', {
        hash: 4290850893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicItemSpec = DynamicItemSpec;
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          var _footer = require("./footer");
          var _useForm = require("./use-form");
          function DynamicItemSpec({
            onCancel,
            name,
            item
          }) {
            const {
              activity: {
                specs
              }
            } = (0, _context.useActivityContext)();
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(onCancel);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dynamic.DynamicContainer, {
              name: name,
              data: specs.structure[name]
            }), _react.default.createElement(_footer.ManualFormFooter, {
              onSave: actions.onSave,
              onCancel: actions.onCancel,
              processing: processing
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic
      *************************************************/

      ims.set('./activities/specs/manual/dynamic', {
        hash: 2456718410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: DynamicContainer
          };
          function DynamicContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              texts
            } = (0, _context.useActivityContext)();
            if (!data.hasOwnProperty('fields')) {
              console.warn(`DynamicContainer: no fields found on ${name}`);
              return null;
            }
            const fields = Object.keys(data.fields);
            const values = specs[name] ? specs[name] : [];
            const defaultValues = {};
            const fieldTexts = texts.specs[name];
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              specs.set({
                [name]: value
              });
            };
            const output = fields.map((name, index) => {
              const Field = fieldTypes[data.fields[name]];
              const attrs = {
                label: fieldTexts[name].label,
                placeholder: fieldTexts[name].placeholder
              };
              defaultValues[name] = '';
              return _react.default.createElement(Field, {
                ...attrs,
                key: `${name}-${index}`,
                name: name,
                data: name
              });
            });
            if (!values.length) values.push(defaultValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dynamicField.DynamicField, {
              name: name,
              value: values,
              onChange: onChange
            }, output));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/specs/manual/footer
      ************************************************/

      ims.set('./activities/specs/manual/footer', {
        hash: 2408792289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualFormFooter = ManualFormFooter;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function ManualFormFooter({
            processing,
            onCancel,
            onSave
          }) {
            const {
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            return _react.default.createElement("footer", {
              className: "flex-container flex-end mt-30 gap-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel,
              disabled: processing
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: processing
            }, globalTexts.actions.save));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/index
      ***********************************************/

      ims.set('./activities/specs/manual/index', {
        hash: 194376207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          var _useForm = require("./use-form");
          var _footer = require("./footer");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ManualMaterialForm({
            onCancel,
            toggleView
          }) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(toggleView);
            const {
              specs
            } = activity;
            const fields = Object.keys(specs.structure);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            const output = fields.map((name, index) => {
              if (!texts.specs[name]) {
                console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              }
              const {
                label,
                placeholder
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              if (typeof specs.structure[name] === 'object' && specs.structure[name].type !== 'array') {
                const Field = fieldTypes[specs.structure[name].type];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              if (typeof specs.structure[name] === 'string') {
                const Field = fieldTypes[specs.structure[name]];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              const Field = fieldTypes[specs.structure[name].type];
              return _react.default.createElement(Field, {
                variant: "floating",
                key: `${name}-${index}`,
                name: name,
                data: specs.structure[name],
                ...attrs
              });
            });
            return _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("div", null, output), _react.default.createElement(_footer.ManualFormFooter, {
              onSave: actions.onSave,
              onCancel: actions.onCancel,
              processing: processing
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/manual/use-form
      **************************************************/

      ims.set('./activities/specs/manual/use-form', {
        hash: 56153088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var _react = require("react");
          var _context = require("../../../context");
          /**
           *
           * @param onCancel Function to toggle the form, it could be a field or the full manual form
           * @returns
           */
          function useForm(toggleView) {
            const [processing, setProcessing] = _react.default.useState(false);
            const {
              texts,
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const onSave = async () => {
              try {
                setProcessing(true);
                await activity.save();
                setProcessing(false);
                toggleView('specs');
              } catch (e) {
                console.error(e);
              }
            };
            const handleCancel = () => {
              activity.specs.revert();
              toggleView('specs');
            };
            return {
              processing,
              setProcessing,
              actions: {
                onSave,
                onCancel: handleCancel
              }
            };
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./activities/specs/specs
      ****************************************/

      ims.set('./activities/specs/specs', {
        hash: 145476041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Specs = Specs;
          var _react = require("react");
          var _context = require("../../context");
          var _dynamicLabel = require("./dynamic-label");
          var _baseSpec = require("./base-spec");
          var _components = require("pragmate-ui/components");
          var _deleteModal = require("../../components/delete-modal");
          function Specs() {
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const {
              activity,
              activity: {
                specs
              },
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const data = specs.getProperties();
            const fields = Object.keys(specs.structure);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty()
            };
            const output = fields.map((name, index) => {
              if (typeof specs.structure[name] === 'string' || specs.structure[name].type !== 'array') {
                return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
                  key: `${name}-${index}`,
                  name: name
                });
              }
              return _react.default.createElement(_dynamicLabel.DynamicLabelContainer, {
                key: `${name}-${index}`,
                name: name,
                data: data
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, globalTexts.actions.delete))), output, _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/spoken/index
      *****************************************/

      ims.set('./activities/spoken/index', {
        hash: 2391623525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          function SpokenActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onCancel = () => setView(activity.specs.empty() ? 'empty' : 'specs');
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: onCancel,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
          }
        }
      });

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
        hash: 2305831071,
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
              store,
              texts,
              clearData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            if (!show) return false;
            const onConfirm = () => {
              clearData();
              store.editActivity(undefined);
              onClose();
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: texts.modal.cancel.title,
              text: texts.modal.cancel.description,
              onClose: onClose,
              onCancel: onClose,
              btnConfirm: {
                label: globalTexts.actions.confirm
              },
              btnCancel: {
                label: globalTexts.actions.cancel
              },
              onConfirm: () => {
                onConfirm();
              }
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/delete-modal
      *****************************************/

      ims.set('./components/delete-modal', {
        hash: 3566858788,
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
                activities: texts
              },
              activity,
              store: {
                globalTexts: {
                  actions
                }
              }
            } = (0, _context.useActivityContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                onClose();
                activity.specs.clear();
                await activity.save();
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

      /************************************************************
      INTERNAL MODULE: ./components/generation-modal/activity-modal
      ************************************************************/

      ims.set('./components/generation-modal/activity-modal', {
        hash: 931967617,
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
              editData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 1165703704,
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
              values,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
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
            }), _react.default.createElement("span", null, globalTexts.actions.back, " ", texts.activities.module)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 14032902,
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
              editData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 3747141589,
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
              editData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./components/generation-modal/suggestions-modal
      ***************************************************************/

      ims.set('./components/generation-modal/suggestions-modal', {
        hash: 2815882905,
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
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/language-field
      *******************************************/

      ims.set('./components/language-field', {
        hash: 4219818305,
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
            } = (0, _context.useActivityContext)();
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

      /********************************************
      INTERNAL MODULE: ./components/select-activity
      ********************************************/

      ims.set('./components/select-activity', {
        hash: 3390676443,
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
            } = (0, _context.useActivityContext)();
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
        hash: 3218830360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActivityContext = exports.ActivityContext = void 0;
          var _react = require("react");
          const ActivityContext = exports.ActivityContext = _react.default.createContext({});
          const useActivityContext = () => _react.default.useContext(ActivityContext);
          exports.useActivityContext = useActivityContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1497859435,
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
            } = (0, _context.useActivityContext)();
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
        hash: 3687607944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _contentTheory = require("./activities/content-theory");
          var _debate = require("./activities/debate");
          var _characterTalk = require("./activities/character-talk");
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [values, setValues] = _react.default.useState(activity.getProperties());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              type
            } = activity;
            (0, _hooks.useBinder)([activity], () => setValues({
              ...activity.getProperties()
            }), 'properties.changed');
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              activity,
              texts,
              values,
              setValues
            };
            return _react.default.createElement(_context.ActivityContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivity, null),
                debate: _react.default.createElement(_debate.DebateActivity, null),
                'character-talk': _react.default.createElement(_characterTalk.CharacterTalkActivity, null),
                spoken: _react.default.createElement(_spoken.SpokenActivity, null),
                'content-theory': _react.default.createElement(_contentTheory.ContentTheoryActivity, null)
              },
              placeholder: _react.default.createElement(_react.default.Fragment, null, "Nada que renderizar")
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

      /******************************************
      INTERNAL MODULE: ./materials/empty-material
      ******************************************/

      ims.set('./materials/empty-material', {
        hash: 2912801640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("../components/generation-modal/materials");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./materials/manual-material-form
      ************************************************/

      ims.set('./materials/manual-material-form', {
        hash: 377140406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _saveButton = require("../save-button");
          function ManualMaterialForm({
            name,
            onCancel
          }) {
            const {
              values,
              editData,
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onSave
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./materials/pane
      ********************************/

      ims.set('./materials/pane', {
        hash: 3673014102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _emptyMaterial = require("./empty-material");
          var _manualMaterialForm = require("./manual-material-form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function MaterialPane({
            name
          }) {
            const {
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
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
            }, globalTexts.actions.edit)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./save-button
      *****************************/

      ims.set('./save-button', {
        hash: 520994083,
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
            } = (0, _context.useActivityContext)();
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
            }, store.globalTexts.actions.save);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGFuZ3VhZ2VGaWVsZCIsIl91aSIsIl9jb250ZXh0IiwiX2VtcHR5IiwiX21hbnVhbCIsIl9jb21wb25lbnRzIiwiX3NwZWNzIiwiX2hvb2tzIiwiX29iamVjdGl2ZUZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzcGVjcyIsImVtcHR5IiwidG9nZ2xlVmlldyIsIm9uU2F2ZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzYXZlIiwib25MaXN0ZW4iLCJvbkNhbmNlbCIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxhbmd1YWdlRmllbGQiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiX21hdGVyaWFscyIsIkVtcHR5TWF0ZXJpYWwiLCJvbk1hbnVhbCIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJkZWZhdWx0IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsInNldE1hbnVhbCIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJpY29uIiwiZWRpdCIsIkRlYmF0ZUFjdGl2aXR5IiwiX21vZGFsIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwic2hvdyIsIm9uQ29uZmlybSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiQ29uZmlybU1vZGFsIiwiYnRuQ29uZmlybSIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJkZWxldGVNb2RhbCIsIl9yZWZpbmFtZW50IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwiYXR0cnMiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJub3RlcyIsImVuc3VyZSIsIlJlZmluZW1lbnRNb2RhbCIsIm1vZGVsIiwib3duZXIiLCJjcmVkaXRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lIiwiZGVzY3JpcGN0aW9uIiwiX3F1ZXN0aW9ucyIsIl9yZWxhdGVkQWN0aXZpdHkiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVsYXRlZCIsInVzZU1lbW8iLCJ1bmRlZmluZWQiLCJzZWxlY3RlZCIsImlkIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwiZm9yRWFjaCIsInF1ZXN0aW9uIiwiaW5kZXgiLCJsZW5ndGgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJwdXNoIiwiZW1wdGllcyIsImZpbHRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ1cGRhdGVFcnJvcnMiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJldmVudCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfaXRlbSIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwib25DaGFuZ2UiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl9mb3JtIiwiX2ljb25zIiwiX3VzZUlucHV0IiwicHJvcHMiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJ0YXJnZXQiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwiSW5wdXQiLCJJY29uQnV0dG9uIiwibWFya0NvcnJlY3QiLCJkZWxldGUiLCJEeW5hbWljSGVhZGVyIiwiZWRpdERhdGEiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJyZXNwb25zZSIsImNvcnJlY3RfYW5zd2VyIiwic2V0VGltZW91dCIsInNldCIsImdlbmVyYXRlUXVlc3Rpb25zIiwibW9kYWxRdWVzdGlvbnMiLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsIl9oZWFkZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsImRhdGEiLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJ1cGRhdGVkIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiZm9ybSIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsImV4cG9ydHMiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib3V0cHV0IiwiY2FsbGJhY2siLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiYXMiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIkNvbnRyb2wiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJfZHluYW1pY0ZpZWxkIiwiZmllbGRUeXBlcyIsImlucHV0IiwidGV4dGFyZWEiLCJUZXh0YXJlYSIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIkZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJtb2RhbCIsImNsZWFyIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbk1vZGFsQ2FuY2VsIiwiTGluayIsIkFwcEljb24iLCJtb2R1bGUiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiaSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2NoYXJhY3RlclRhbGsiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX3NhdmVCdXR0b24iLCJvbkNsaWNrQ2FuY2VsIiwiU2F2ZUJ1dHRvbiIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJNYXRlcmlhbFBhbmUiLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwidG9nZ2xlTWFudWFsIiwiQW5pbWF0ZWRDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2NvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsZUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUscUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBVCxRQUFBLENBQUFVLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUMsVUFBVSxHQUFHTCxJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1NLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtn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