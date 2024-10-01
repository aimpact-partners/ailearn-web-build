System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Form) {
      dependency_6 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6List) {
      dependency_8 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_12 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_13 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp0113ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/list', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/main-layout.widget', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 2837926980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var React = require("react");
          function CharacterTalkActivity() {
            return React.createElement("div", null, "Character Talk");
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/empty-material
      **********************************************************/

      ims.set('./activities/content-theory/empty-material', {
        hash: 1314517444,
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
              texts
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
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

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 2783112513,
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
          var _manual = require("./manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("./specs");
          function ContentTheoryActivity() {
            const {
              values,
              texts,
              activity,
              editData,
              store
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = React.useState(false);
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
            const [view, setView] = React.useState(activity.specs.empty ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            // if (manual) {
            // 	return <ManualMaterialForm onCancel={toggleManual} />;
            // }
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
            })), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs?.objective
            })), React.createElement(_components.ConditionalContainer, {
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
      INTERNAL MODULE: ./activities/content-theory/manual
      **************************************************/

      ims.set('./activities/content-theory/manual', {
        hash: 1908146065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _react = require("react");
          function ManualMaterialForm({
            onCancel
          }) {
            return _react.default.createElement("h1", null, "Formulario manual");
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audio
      ***********************************************************/

      ims.set('./activities/content-theory/materials/audio', {
        hash: 1192546483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _react = require("react");
          var _manual = require("../manual");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          function ContentTheoryAudio({
            content
          }) {
            const {
              activity,
              texts
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/content
      *************************************************************/

      ims.set('./activities/content-theory/materials/content', {
        hash: 2765808671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _manual = require("../manual");
          var _context = require("../../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyMaterial = require("../empty-material");
          // import { EmptyMaterial } from './empty-material';

          function ContentTheoryContent() {
            const {
              activity,
              texts
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
              }, texts.actions.edit)));
            }
            return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: "article",
              onManual: openManualForm
            });
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/specs
      *************************************************/

      ims.set('./activities/content-theory/specs', {
        hash: 2438546549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Specs = Specs;
          var _react = require("react");
          function Specs() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, "Informaci\u00F3n de specs"));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 3587483468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var React = require("react");
          function DebateActivity() {
            return React.createElement("div", null, "Debate");
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

      /****************************************
      INTERNAL MODULE: ./activities/specs/empty
      ****************************************/

      ims.set('./activities/specs/empty', {
        hash: 2844063032,
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
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              store
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
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
        hash: 68363370,
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

      /*****************************************
      INTERNAL MODULE: ./components/delete-modal
      *****************************************/

      ims.set('./components/delete-modal', {
        hash: 179458114,
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
            } = (0, _context.useActivityContext)();
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

      /**************************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-field-item
      **************************************************************/

      ims.set('./components/dynamic-field/criteria-field-item', {
        hash: 3400313418,
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
            } = (0, _context.useActivityContext)();
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

      /********************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-form
      ********************************************************/

      ims.set('./components/dynamic-field/criteria-form', {
        hash: 1127451340,
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
          var _saveButton = require("../../save-button");
          function SpokenCriteriaForm({
            onCancel
          }) {
            const {
              values,
              texts,
              editData,
              activity
            } = (0, _context.useActivityContext)();
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
            }, _react.default.createElement("footer", {
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

      /********************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-item
      ********************************************************/

      ims.set('./components/dynamic-field/criteria-item', {
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

      /************************************************
      INTERNAL MODULE: ./components/dynamic-field/index
      ************************************************/

      ims.set('./components/dynamic-field/index', {
        hash: 1543671200,
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
            data,
            onChange,
            onCancel = undefined
          }) {
            const {
              values,
              editData,
              texts
            } = (0, _context.useActivityContext)();
            const [totalItems, setTotalItems] = _react.default.useState(data?.length || 1);
            const [items, setItems] = _react.default.useState(data?.length ? [...values.specs.criteria] : [{
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
              onChange(data);
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

      /************************************************************
      INTERNAL MODULE: ./components/generation-modal/activity-modal
      ************************************************************/

      ims.set('./components/generation-modal/activity-modal', {
        hash: 644120694,
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
        hash: 3063751016,
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
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              console.log(10, store);
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
        hash: 2359120133,
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
        hash: 4175345689,
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
        hash: 1224808865,
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 3467580505,
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
            (0, _hooks.useBinder)([activity], () => {
              setValues({
                ...activity.getProperties()
              });
              console.log(1, activity.getProperties());
            }, 'properties.changed');
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
                // 'multiple-choice': <MultipleChoiceActivity />,
                // debate: <DebateActivity />,
                // 'character-talk': <CharacterTalkActivity />,
                // spoken: <SpokenActivity />,
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
        hash: 2431094634,
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
              texts
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
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

      /************************************************
      INTERNAL MODULE: ./materials/manual-material-form
      ************************************************/

      ims.set('./materials/manual-material-form', {
        hash: 2062599933,
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
              texts
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
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
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
        hash: 1043890086,
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
              texts
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
            }, texts.actions.edit)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./save-button
      *****************************/

      ims.set('./save-button', {
        hash: 2188458310,
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
            }, texts.actions.save);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJjcmVhdGVFbGVtZW50IiwiX3JlYWN0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9tYXRlcmlhbHMiLCJFbXB0eU1hdGVyaWFsIiwibmFtZSIsIm9uTWFudWFsIiwiYWN0aXZpdHkiLCJ0ZXh0cyIsInVzZUFjdGl2aXR5Q29udGV4dCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYXRlcmlhbHMiLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJ1c2VCaW5kZXIiLCJkaXNhYmxlZCIsImFpQ29tcGxldGVkIiwiRnJhZ21lbnQiLCJFbXB0eUNhcmQiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYWN0aXZpdGllcyIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwibWFudWFsIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwidHlwZSIsIm9uQ2xvc2UiLCJfbGFuZ3VhZ2VGaWVsZCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfc3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInN0b3JlIiwic2V0TWFudWFsIiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2F2ZSIsInZpZXciLCJzZXRWaWV3Iiwic3BlY3MiLCJ0b2dnbGVWaWV3IiwiTGFuZ3VhZ2VGaWVsZCIsImxhYmVsIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIm9uQ2FuY2VsIiwiRW1wdHlTcGVjcyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJlIiwiY29uc29sZSIsImxvZyIsIkl0ZW0iLCJpdGVtIiwidXJsIiwiQXVkaW9QbGF5ZXIiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsImljb24iLCJlZGl0IiwiRGViYXRlQWN0aXZpdHkiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiX3JlZmluYW1lbnQiLCJzdWdnZXN0aW9uU3BlY3MiLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsIm5vdGVzIiwiZW5zdXJlIiwiUmVmaW5lbWVudE1vZGFsIiwic2hvdyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiZ2xvYmFsVGV4dHMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29ucyIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX21vZGFsIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwib25Db25maXJtIiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiQ29uZmlybU1vZGFsIiwibW9kYWwiLCJjYW5jZWwiLCJidG5Db25maXJtIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImRhdGEiLCJnZXREYXRhIiwidXBkYXRlZCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJfZm9ybSIsIkNyaXRlcmlhRmllbGRJdGVtIiwidG90YWwiLCJpbmRleCIsIm9uRGVsZXRlIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIklucHV0Iiwic3ViamVjdCIsImNyaXRlcmlhIiwiVGV4dGFyZWEiLCJkZWxldGUiLCJfc2F2ZUJ1dHRvbiIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0YXNrIiwiYXNzZXNzbWVudCIsImxlbmd0aCIsIm9uQ2xpY2tDYW5jZWwiLCJGb3JtIiwiU2F2ZUJ1dHRvbiIsImNhbGxiYWNrIiwiQ3JpdGVyaWFJdGVtIiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwic2V0SXRlbXMiLCJvbkFkZCIsIm91dHB1dCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJpIiwicHVzaCIsImtleSIsImFkZCIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInRleHRhcmVhIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJtb2R1bGUiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwicmVzcG9uc2UiLCJnZXRFcnJvciIsImZpZWxkcyIsImVycm9ycyIsIm1lc3NhZ2UiLCJFcnJvclJlbmRlcmVyIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0Iiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0IiwibWFwIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJmb3JFYWNoIiwiaWQiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiQWN0aXZpdHlIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJjbHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJhcyIsImZvcm0iLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnRUaGVvcnkiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIk1hdGVyaWFsUGFuZSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJ0b2dnbGVNYW51YWwiLCJBbmltYXRlZENvbnRhaW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImdldCJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2NvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZC9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2R5bmFtaWMtZmllbGQvY3JpdGVyaWEtZm9ybS50c3giLCIvdHMvY29tcG9uZW50cy9keW5hbWljLWZpZWxkL2NyaXRlcmlhLWl0ZW0udHN4IiwiL3RzL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZC9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9tYXRlcmlhbHMvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVUMscUJBQXFCQSxDQUFBO1lBQ3BDLE9BQU9GLEtBQUEsQ0FBQUcsYUFBQSwrQkFBeUI7VUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBR0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsVUFBQSxHQUFBUixPQUFBO1VBRU0sU0FBVVMsYUFBYUEsQ0FBQztZQUFFQyxJQUFJ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