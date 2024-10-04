System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/dynamic-list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Empty) {
      dependency_6 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6List) {
      dependency_7 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_11 = _pragmateUi100Beta6DynamicList;
    }, function (_pragmateUi100Beta6Form) {
      dependency_12 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_13 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_17 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactAilearnApp0113ComponentsDynamicField) {
      dependency_18 = _aimpactAilearnApp0113ComponentsDynamicField;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_20 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_22 = _aimpactAilearnApp0113ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/list', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['pragmate-ui/dynamic-list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['framer-motion', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['@aimpact/ailearn-app/components/dynamic-field', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['@aimpact/ailearn-app/main-layout.widget', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/components/cover-image.code', dependency_22]]);
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

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/activity-content
      ************************************************************/

      ims.set('./activities/content-theory/activity-content', {
        hash: 3543994277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _specs = require("../specs/specs");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ActivityContent({
            toggleView
          }) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            const onCreate = () => {
              toggleView('materials');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_specs.Specs, null), _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.title)), _react.default.createElement(_empty.Empty, {
              className: "activity__empty"
            }, _react.default.createElement("h6", null, texts.contentTheory.empty.title), _react.default.createElement("span", null, texts.contentTheory.empty.description), _react.default.createElement("div", {
              className: "actions empty__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onCreate,
              variant: "primary"
            }, texts.contentTheory.empty.actions.add), _react.default.createElement(_components.Button, {
              className: "disabled-button",
              title: "proximamente",
              icon: "file",
              variant: "primary"
            }, texts.contentTheory.empty.actions.upload)))));
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
        hash: 3661828456,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _activityContent = require("./activity-content");
          var _materials = require("./materials");
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
                specs: React.createElement(_activityContent.ActivityContent, {
                  toggleView: toggleView
                }),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: toggleView,
                  toggleView: toggleView
                }),
                materials: React.createElement(_materials.MaterialsView, {
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

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/index
      ***********************************************************/

      ims.set('./activities/content-theory/materials/index', {
        hash: 1143685677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsView = MaterialsView;
          var _react = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function MaterialsView({
            toggleView
          }) {
            const {
              store,
              texts: {
                contentTheory: {
                  materials: texts
                }
              }
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            })), _react.default.createElement(_ui.AIButton, {
              variant: "link"
            }, globalTexts.actions.generate));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGFuZ3VhZ2VGaWVsZCIsIl91aSIsIl9jb250ZXh0IiwiX2VtcHR5IiwiX21hbnVhbCIsIl9jb21wb25lbnRzIiwiX3NwZWNzIiwiX2hvb2tzIiwiX29iamVjdGl2ZUZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsInZpZXciLCJzZXRWaWV3IiwidXNlU3RhdGUiLCJzcGVjcyIsImVtcHR5IiwidG9nZ2xlVmlldyIsIm9uU2F2ZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzYXZlIiwib25MaXN0ZW4iLCJvbkNhbmNlbCIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkxhbmd1YWdlRmllbGQiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50Iiwib25DcmVhdGUiLCJkZWZhdWx0IiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInRpdGxlIiwiRW1wdHkiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJhZGQiLCJpY29uIiwidXBsb2FkIiwiX21hdGVyaWFscyIsIkVtcHR5TWF0ZXJpYWwiLCJvbk1hbnVhbCIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIkVtcHR5Q2FyZCIsInRleHQiLCJib3JkZXJlZCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJfYWN0aXZpdHlDb250ZW50IiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidmFsdWVzIiwiTWF0ZXJpYWxzVmlldyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvIiwic2V0TWFudWFsIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJlIiwiY29uc29sZSIsImxvZyIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImVkaXQiLCJEZWJhdGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsInNob3ciLCJvbkNvbmZpcm0iLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwiZGVsZXRlTW9kYWwiLCJfcmVmaW5hbWVudCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93Iiwibm90ZXMiLCJlbnN1cmUiLCJSZWZpbmVtZW50TW9kYWwiLCJtb2RlbCIsIm93bmVyIiwiY3JlZGl0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsInJlZmluZSIsImRlc2NyaXBjdGlvbiIsIl9xdWVzdGlvbnMiLCJfcmVsYXRlZEFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlbGF0ZWQiLCJ1c2VNZW1vIiwidW5kZWZpbmVkIiwic2VsZWN0ZWQiLCJpZCIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsImZvckVhY2giLCJxdWVzdGlvbiIsImluZGV4IiwibGVuZ3RoIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwicHVzaCIsImVtcHRpZXMiLCJmaWx0ZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidXBkYXRlRXJyb3JzIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiZXZlbnQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsIm9uQ2hhbmdlIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfZm9ybSIsIl9pY29ucyIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwidGFyZ2V0IiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwiSWNvbkJ1dHRvbiIsIm1hcmtDb3JyZWN0IiwiZGVsZXRlIiwiRHluYW1pY0hlYWRlciIsImVkaXREYXRhIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicmVzcG9uc2UiLCJjb3JyZWN0X2Fuc3dlciIsInNldFRpbWVvdXQiLCJzZXQiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm1vZGFsUXVlc3Rpb25zIiwicmVmcyIsImZvY3VzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJfaGVhZGVyIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJkYXRhIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwidXBkYXRlZCIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwicmV2ZXJ0IiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsImZvcm0iLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJleHBvcnRzIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm91dHB1dCIsImNhbGxiYWNrIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImFzIiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJDb250cm9sIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIm9iamVjdGl2ZSIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInRleHRhcmVhIiwiVGV4dGFyZWEiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwibW9kYWwiLCJjbGVhciIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25Nb2RhbENhbmNlbCIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIlBhZ2VDb250YWluZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIl9zYXZlQnV0dG9uIiwib25DbGlja0NhbmNlbCIsIlNhdmVCdXR0b24iLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwiTWF0ZXJpYWxQYW5lIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsInRvZ2dsZU1hbnVhbCIsIkFuaW1hdGVkQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2NvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9lbXB0eS1tYXRlcmlhbC50c3giLCIvdHMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLFdBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLGVBQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVQsUUFBQSxDQUFBVSxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUND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