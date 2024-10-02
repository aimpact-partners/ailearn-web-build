System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "pragmate-ui@1.0.0-beta.6/modal", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_8 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_aimpactAilearnApp0113ComponentsDynamicField) {
      dependency_10 = _aimpactAilearnApp0113ComponentsDynamicField;
    }, function (_pragmateUi100Beta6Form) {
      dependency_11 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_13 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_14 = _pragmateUi100Beta6Modal;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_16 = _pragmateUi100Beta6FormReactSelect;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0113ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/list', dependency_6], ['@aimpact/chat-sdk/widgets/markdown', dependency_7], ['pragmate-ui/icons', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['@aimpact/ailearn-app/components/dynamic-field', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@aimpact/ailearn-app/main-layout.widget', dependency_13], ['pragmate-ui/modal', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 941424523,
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
                  onCancel: onCancel
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
        hash: 2445335671,
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
            const onCancel = () => setView(activity.specs.empty() ? 'empty' : 'specs');
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const toggleView = view => {
              setView(view);
            };
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
                  onCancel: onCancel
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
        hash: 85120906,
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
            const toggleView = view => {
              setView(view);
            };
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
                  onCancel: toggleView
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

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/index
      **************************************************/

      ims.set('./activities/multiple-choice/index', {
        hash: 2459856897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var React = require("react");
          function MultipleChoiceActivity() {
            return React.createElement("div", null, "Multiple Choice");
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
        hash: 4171241418,
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
            const items = specs[name]?.map((item, index) => ({
              name: item.name,
              value: item.objective
            }));
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
        hash: 3368870507,
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
        hash: 495103144,
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
              activity,
              activity: {
                specs
              },
              store: {
                globalTexts
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
        hash: 3883988105,
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
                name,
                value
              } = event.currentTarget;
              specs.set({
                objectives: value
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
        hash: 2169444511,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualFormFooter = ManualFormFooter;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          var _components = require("pragmate-ui/components");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
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
        hash: 347956163,
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
            onCancel
          }) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(onCancel);
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
        hash: 3048251983,
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
          function useForm(onCancel) {
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
              } catch (e) {
                console.error(e);
              }
            };
            const handleCancel = () => {
              activity.specs.revert();
              onCancel();
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
        hash: 3782958361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          function SpokenActivity() {
            return React.createElement("div", null, "Spoken");
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
        hash: 3257967666,
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
          var _spoken = require("./activities/spoken");
          var _multipleChoice = require("./activities/multiple-choice");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGFuZ3VhZ2VGaWVsZCIsIl91aSIsIl9jb250ZXh0IiwiX2VtcHR5IiwiX21hbnVhbCIsIl9jb21wb25lbnRzIiwiX3NwZWNzIiwiX2hvb2tzIiwiX29iamVjdGl2ZUZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzcGVjcyIsImVtcHR5IiwidG9nZ2xlVmlldyIsIm9uU2F2ZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzYXZlIiwib25MaXN0ZW4iLCJvbkNhbmNlbCIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxhbmd1YWdlRmllbGQiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiX21hdGVyaWFscyIsIkVtcHR5TWF0ZXJpYWwiLCJvbk1hbnVhbCIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJkZWZhdWx0IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hdGVyaWFscyIsInNldERhdGEiLCJ0b2dnbGVNb2RhbCIsImRpc2FibGVkIiwiYWlDb21wbGV0ZWQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsInNldE1hbnVhbCIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZUF1ZGlvIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJfbWFya2Rvd24iLCJfZW1wdHlNYXRlcmlhbCIsIkNvbnRlbnRUaGVvcnlDb250ZW50Iiwib3Blbk1hbnVhbEZvcm0iLCJhcnRpY2xlIiwiTWFya2Rvd24iLCJpY29uIiwiZWRpdCIsIkRlYmF0ZUFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInNldCIsIm9iamVjdGl2ZSIsIkFjdGl2aXR5QmFzZVNwZWMiLCJ0YXJnZXQiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfaWNvbnMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJkYXRhIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwib25Ub2dnbGUiLCJtYXAiLCJpbmRleCIsIkljb24iLCJ0ZXJuYXJ5IiwidHJ1ZSIsIkR5bmFtaWNJdGVtU3BlYyIsImZhbHNlIiwiX3JlZmluYW1lbnQiLCJzdWdnZXN0aW9uU3BlY3MiLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIm5vdGVzIiwiZW5zdXJlIiwiUmVmaW5lbWVudE1vZGFsIiwic2hvdyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lIiwiZGVzY3JpcGN0aW9uIiwiX2R5bmFtaWMiLCJfZm9vdGVyIiwiX3VzZUZvcm0iLCJwcm9jZXNzaW5nIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJzdHJ1Y3R1cmUiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsIl9mb3JtIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJ0ZXh0YXJlYSIsIlRleHRhcmVhIiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsImhhc093blByb3BlcnR5Iiwid2FybiIsImZpZWxkcyIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib25DaGFuZ2UiLCJldmVudCIsIm9iamVjdGl2ZXMiLCJvdXRwdXQiLCJGaWVsZCIsImtleSIsImxlbmd0aCIsInB1c2giLCJEeW5hbWljRmllbGQiLCJjYW5jZWwiLCJzZXRQcm9jZXNzaW5nIiwiZXJyb3IiLCJoYW5kbGVDYW5jZWwiLCJyZXZlcnQiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiX2RlbGV0ZU1vZGFsIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZ2V0UHJvcGVydGllcyIsImRlbGV0ZSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJvbkNvbmZpcm0iLCJlZGl0QWN0aXZpdHkiLCJ1bmRlZmluZWQiLCJDb25maXJtTW9kYWwiLCJtb2RhbCIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2xlYXIiLCJkZWxldGVNb2RhbCIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsImVkaXREYXRhIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJ1cGRhdGVkIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uTW9kYWxDYW5jZWwiLCJMaW5rIiwiQXBwSWNvbiIsIm1vZHVsZSIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJyZXNwb25zZSIsImdldEVycm9yIiwiZXJyb3JzIiwiZ2V0RGF0YSIsIm1lc3NhZ2UiLCJFcnJvclJlbmRlcmVyIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0Iiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiUmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJjbHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJhcyIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2NoYXJhY3RlclRhbGsiLCJfc3Bva2VuIiwiX211bHRpcGxlQ2hvaWNlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX3NhdmVCdXR0b24iLCJvbkNsaWNrQ2FuY2VsIiwiU2F2ZUJ1dHRvbiIsImNhbGxiYWNrIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIk1hdGVyaWFsUGFuZSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJ0b2dnbGVNYW51YWwiLCJBbmltYXRlZENvbnRhaW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImdldCJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsZUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUscUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBVCxRQUFBLENBQUFVLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUMsVUFBVSxHQUFHTCxJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1NLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBS1gsUUFBUSxD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