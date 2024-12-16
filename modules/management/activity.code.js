System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "lodash@4.17.21", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_2 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_3 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_7 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp031ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_11 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_14 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_16 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_18 = _pragmateUi100Beta7FormReactSelect;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsDynamicField) {
      dependency_20 = _aimpactAilearnApp031ComponentsDynamicField;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_lodash) {
      dependency_24 = _lodash;
    }, function (_pragmateUi100Beta7Image) {
      dependency_25 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['pragmate-ui/form', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/collapsible', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/perfect-scrollbar', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23], ['lodash', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 2347768452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = activity.save;
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.Textarea, {
              variant: "floating",
              name: "description",
              label: texts.activities.description.label,
              onBlur: onBlur,
              onChange: onChange,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }), React.createElement(_form2.SpecsForm, {
              toggleView: toggleView,
              type: "general"
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form2.SpecsForm, {
              toggleView: toggleView
            })))));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/activity-content
      ************************************************************/

      ims.set('./activities/content-theory/activity-content', {
        hash: 21954670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _specs = require("../specs/specs");
          function ActivityContent({
            toggleView
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_specs.Specs, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/advanced-fields
      ***********************************************************/

      ims.set('./activities/content-theory/advanced-fields', {
        hash: 1789629564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          var _materials = require("./materials");
          function AdvancedFields() {
            const {
              texts
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title)))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced"
            }))))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/confirm-action
      **********************************************************/

      ims.set('./activities/content-theory/confirm-action', {
        hash: 3576600209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmButton = ConfirmButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          function ConfirmButton({
            className,
            disabled = false,
            variant = 'primary',
            icon,
            tooltip,
            callback,
            as = 'button',
            bordered,
            title,
            description,
            action = 'delete',
            children
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/i18n');
            if (!ready) return;
            title = title || texts.modal[action].title;
            description = description || texts.modal[action].description;
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            const Control = as === 'icon' ? _icons.AppIconButton : _components.Button;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Control, {
              className: className,
              bordered: bordered,
              disabled: disabled,
              variant: variant,
              icon: icon,
              title: tooltip,
              onClick: onClickButton
            }, children), open && _react.default.createElement(_modal.ConfirmModal, {
              btnConfirm: {
                label: texts.actions.confirm,
                variant: 'primary'
              },
              btnCancel: {
                label: texts.actions.cancel,
                variant: 'primary',
                bordered: true
              },
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 3879083817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          function ContentTheoryActivity({}) {
            const {
              texts,
              activity,
              store,
              saveActivity
            } = (0, _context.useActivityContext)();
            const [, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
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
            const onChange = event => {
              activity.set({
                description: event.currentTarget.value
              });
              saveActivity();
            };
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.Textarea, {
              label: texts.activities.description.label,
              name: "description",
              variant: "floating",
              placeholder: texts.activities.description.placeholder,
              value: activity.description,
              onChange: onChange
            }), React.createElement(_form2.SpecsForm, {
              type: "general"
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form2.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article
      *************************************************************/

      ims.set('./activities/content-theory/materials/article', {
        hash: 4019914665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTab = ArticleTab;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _emptyArticle = require("./empty-article");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _confirmAction = require("../confirm-action");
          function ArticleTab({
            onClose
          }) {
            const {
              texts,
              store,
              values,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [content, setContent] = _react.default.useState(values.materials?.article ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const [manual, setManual] = _react.default.useState(false);
            const toggleManual = () => setManual(!manual);
            const onChange = event => {
              setContent(event.target.value);
            };
            (0, _hooks.useBinder)([activity.materials], () => {
              setContent(activity.materials.article);
            }, 'article.changed');
            const onDelete = async () => {
              activity.materials.clear();
              activity.save();
            };
            const onClickCancel = () => {
              toggleManual();
            };
            const onSave = async () => {
              setFetching(true);
              activity.materials.set({
                article: content
              });
              await activity.save();
              setFetching(false);
              toggleManual();
            };
            if (!manual && !activity.materials.article) {
              return _react.default.createElement(_emptyArticle.EmptyArticleMaterial, {
                name: "article",
                onManual: toggleManual
              });
            }
            if (!manual && activity.materials.article) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
                className: "material-content"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("footer", {
                className: " activity-modal__form-footer"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: toggleManual,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.edit), _react.default.createElement(_confirmAction.ConfirmButton, {
                icon: "delete",
                callback: onDelete,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.delete)));
            }
            const cls = `tab-container ${fetching ? ' is-fetching' : ''}`;
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              disabled: fetching,
              value: content,
              placeholder: materialTexts.form.article.placeholder
            })), _react.default.createElement("div", {
              className: clsCharacters
            }, texts.contentTheory.materials.characters, " ", 4000 - content.length)), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true,
              disabled: fetching
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: fetching
            }, globalTexts.actions.save)));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/empty
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/empty', {
        hash: 3579229221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryEmptyAudio = ContentTheoryEmptyAudio;
          var _react = require("react");
          var _context = require("../../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _useMaterials = require("../use-materials");
          function ContentTheoryEmptyAudio({}) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const {
              generateAudio
            } = (0, _useMaterials.useMaterialActions)();
            const onGenerate = generateAudio;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
            }, _react.default.createElement(_ui.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, globalTexts.actions.generate))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/index
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/index', {
        hash: 1282810147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../../../context");
          var _item = require("./item");
          function ContentTheoryAudio() {
            const {
              activity,
              texts,
              store
            } = (0, _context.useActivityContext)();
            const [audios, setAudios] = React.useState(activity.materials.audios);
            (0, _hooks.useBinder)([activity.materials], () => {
              setAudios({
                ...activity.materials.audios
              });
            }, 'audios.changed');
            return React.createElement("div", {
              className: "material-content"
            }, React.createElement(_item.ContentTheoryAudioItem, {
              type: "article"
            }), React.createElement(_item.ContentTheoryAudioItem, {
              type: "dyslexia"
            }));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/item
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/item', {
        hash: 3095616037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudioItem = void 0;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../../../context");
          var _confirmAction = require("../../confirm-action");
          var _useMaterials = require("../use-materials");
          const ContentTheoryAudioItem = ({
            type
          }) => {
            const {
              store,
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const {
              audios
            } = activity.materials;
            const {
              generateAudio,
              fetching,
              deleteAudio
            } = (0, _useMaterials.useMaterialActions)();
            const has = !!activity.materials.audios?.[type];
            const onGenerateItem = event => {
              generateAudio([event.currentTarget.value]);
            };
            const onDelete = () => {
              return deleteAudio([type]);
            };
            const canBeCreated = (activity.materials[type]?.length ?? 0) < 4000;
            return _react.default.createElement("div", {
              className: "activity__audio"
            }, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.contentTheory.materials.types[type]), !has ? _react.default.createElement(_react.default.Fragment, null, canBeCreated ? _react.default.createElement("span", {
              className: "audio-label text-muted"
            }, texts.contentTheory.materials.audio.noAudio) : _react.default.createElement("span", {
              className: "audio-label  error-text"
            }, texts.contentTheory.materials.audio.maxLength)) : null), _react.default.createElement("div", null, has ? _react.default.createElement("div", {
              className: "flex-container gap-1 flex-vertical-center"
            }, _react.default.createElement(_ui.AudioPlayer, {
              url: audios[type].url
            }), _react.default.createElement(_confirmAction.ConfirmButton, {
              className: "circle",
              tooltip: globalTexts.actions.delete,
              icon: "delete",
              as: "icon",
              callback: onDelete,
              disabled: fetching,
              variant: "primary"
            })) : _react.default.createElement(_ui.AIButton, {
              disabled: !canBeCreated,
              fetching: fetching,
              value: type,
              onClick: onGenerateItem,
              variant: "primary"
            }, globalTexts.actions.generate)));
          };
          exports.ContentTheoryAudioItem = ContentTheoryAudioItem;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/view
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/view', {
        hash: 4109247576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudioView = ContentTheoryAudioView;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../../context");
          var _item = require("./item");
          var _components = require("pragmate-ui/components");
          function ContentTheoryAudioView() {
            const {
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const {
              audios
            } = activity.materials;
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
              setFetching(activity.materials.fetching);
            });
            const items = !!audios ? Object.keys(audios) : [];
            const onDelete = async () => {
              setFetching(true);
              await activity.materials.deleteAudios();
              setFetching(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "material-content"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: items,
              control: _item.ContentTheoryAudioItem,
              as: "div"
            }), ","), _react.default.createElement("footer", {
              className: " activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              icon: "delete",
              onClick: onDelete,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.delete)));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty-article
      *******************************************************************/

      ims.set('./activities/content-theory/materials/empty-article', {
        hash: 4229091980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyArticleMaterial = EmptyArticleMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../../context");
          var _useMaterials = require("./use-materials");
          function EmptyArticleMaterial({
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
            const materialTexts = texts.contentTheory.materials;
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const {
              setFetching,
              generateArticle
            } = (0, _useMaterials.useMaterialActions)();
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            const disabled = {
              disabled: !activity.title
            };
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
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
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onGenerate: generateArticle
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty
      ***********************************************************/

      ims.set('./activities/content-theory/materials/empty', {
        hash: 3210392964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("../../../components/generation-modal/materials");
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
              disabled: !activity.title || !activity.materials?.article
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
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/form
      **********************************************************/

      ims.set('./activities/content-theory/materials/form', {
        hash: 1575153102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsForm = MaterialsForm;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _tabs = require("pragmate-ui/tabs");
          var _article = require("./article");
          var _pane = require("./pane");
          var _audios = require("./audios");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _header = require("./header");
          var _useMaterials = require("./use-materials");
          function MaterialsForm({
            show,
            onClose
          }) {
            const {
              texts,
              store,
              values,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [, setContent] = _react.default.useState(values.materials?.article ?? '');
            const [showModal, setShowModal] = _react.default.useState(false);
            const [updated, setUpdated] = _react.default.useState({});
            const [currentTab, setCurrentTab] = _react.default.useState('article');
            const toggleModal = () => setShowModal(!showModal);
            const {
              generator
            } = (0, _useMaterials.useMaterialActions)();
            (0, _hooks.useBinder)([activity.materials], () => {
              setContent(activity.materials.article);
              setUpdated({});
            });
            if (!show) return null;
            const onConsume = () => {};
            const tabs = [];
            const onChange = event => {
              setCurrentTab(event.currentTarget.dataset.name);
            };
            tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "article-attachment",
              name: "article"
            }, materialTexts.types.article));
            if (activity.materials.article) {
              Object.keys(materialTexts.types).forEach(type => {
                if (type === 'article') return;
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  name: type,
                  key: type
                }, materialTexts.types[type]));
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "activity-modal__form",
              onClose: onClose
            }, _react.default.createElement(_header.MaterialsHeaderModal, {
              currentTab: currentTab,
              toggleModal: toggleModal
            }), _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "content-theory__tabs ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_article.ArticleTab, {
              onClose: onClose
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            }), _react.default.createElement(_audios.ContentTheoryAudio, null))), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onConsume: onConsume,
              onGenerate: generator[currentTab]
            })));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/header
      ************************************************************/

      ims.set('./activities/content-theory/materials/header', {
        hash: 1951469989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsHeaderModal = MaterialsHeaderModal;
          var _react = require("react");
          var _context = require("../../../context");
          function MaterialsHeaderModal({
            currentTab,
            toggleModal
          }) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            const materialTexts = texts.contentTheory.materials;
            return _react.default.createElement("header", {
              className: "activity-modal__form-header"
            }, _react.default.createElement("h5", null, materialTexts.title));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/index
      ***********************************************************/

      ims.set('./activities/content-theory/materials/index', {
        hash: 775623520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsView = MaterialsView;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("./form");
          var _list = require("./list");
          function MaterialsView({}) {
            const {
              store,
              texts
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const onCreate = () => {
              setShowModal(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onCreate,
              variant: "link"
            }, texts.contentTheory.empty.actions.add))), _react.default.createElement(_list.MaterialList, {
              onCreate: onCreate
            })), showModal && _react.default.createElement(_form.MaterialsForm, {
              show: showModal,
              onClose: () => setShowModal(false)
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/list
      **********************************************************/

      ims.set('./activities/content-theory/materials/list', {
        hash: 2311399976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../../../context");
          function truncateText(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
          }
          function MaterialList({
            onCreate
          }) {
            const {
              store,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const {
              globalTexts
            } = store;
            const onClick = event => {
              // setShowModal(true);
              event.stopPropagation();
              activity.materials.clear();
              activity.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article ? _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: onClick
            }))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__empty-section"
            }, _react.default.createElement("span", null, texts.contentTheory.materials.empty))));
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/manual-material-form
      **************************************************************************/

      ims.set('./activities/content-theory/materials/manual-material-form', {
        hash: 223410630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          function ManualMaterialForm({
            name,
            onCancel,
            onClose
          }) {
            const {
              values,
              activity,
              texts,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(values.materials?.[name] ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = event => {
              setContent(event.target.value);
            };
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = async () => {};
            const onModalCancel = () => setShowCanceLModal(false);
            const onSave = async () => {
              setFetching(true);
              activity.materials.set({
                [name]: content
              });
              await activity.save({
                [name]: content
              });
              setFetching(false);
              onClose();
            };
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: name,
              value: content,
              placeholder: texts.manual[name].textarea
            })), _react.default.createElement("div", {
              className: clsCharacters
            }, texts.contentTheory.materials.characters, " ", 4000 - content.length)), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !content || fetching
            }, globalTexts.actions.save)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, globalTexts.actions.cancel)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/pane
      **********************************************************/

      ims.set('./activities/content-theory/materials/pane', {
        hash: 127478258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _manualMaterialForm = require("./manual-material-form");
          var _context = require("../../../context");
          var _confirmAction = require("../confirm-action");
          function MaterialPane({
            name
          }) {
            const {
              store,
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [manual, setManual] = _react.default.useState(false);
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            const openManualForm = () => setManual(true);
            const toggleManual = () => setManual(!manual);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterial(activity.materials[name]);
            });
            if (manual) return _react.default.createElement(_manualMaterialForm.ManualMaterialForm, {
              name: name,
              onClose: toggleManual,
              onCancel: toggleManual
            });
            if (!material) return _react.default.createElement(_empty.EmptyMaterial, {
              name: name,
              onManual: toggleManual
            });
            const onDelete = () => {
              setFetching(true);
              activity.materials.set({
                [name]: ''
              });
              activity.save({
                [name]: ''
              });
              setFetching(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: material
            })), _react.default.createElement("footer", {
              className: "activity-modal__form-footer material__actions"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.edit), _react.default.createElement(_confirmAction.ConfirmButton, {
              callback: onDelete,
              icon: "delete",
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.delete)));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/use-materials
      *******************************************************************/

      ims.set('./activities/content-theory/materials/use-materials', {
        hash: 2379374794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMaterialActions = useMaterialActions;
          var _react = require("react");
          var _context = require("../../../context");
          function useMaterialActions() {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const generateAudio = async (items = undefined) => {
              try {
                setFetching(true);
                await activity.materials.generateAudio(items);
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            const deleteAudio = async (items = undefined) => {
              try {
                setFetching(true);
                await activity.materials.deleteAudio(items);
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            const generateArticle = async ({
              notes
            }) => {
              try {
                const data = await activity.materials.generate('article', notes);
              } catch (e) {
                console.log(e);
              }
            };
            const generateMaterial = async (type, notes) => {
              setFetching(true);
              await activity.materials.generate(type, notes);
              setTimeout(() => {
                setFetching(false);
              }, 2000);
            };
            return {
              generateAudio,
              generateArticle,
              generateMaterial,
              fetching,
              setFetching,
              deleteAudio,
              generator: {
                audios: generateAudio,
                article: generateArticle,
                material: generateMaterial,
                dyslexia: generateMaterial,
                synthesis: generateMaterial
              }
            };
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 913373611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          function DebateActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = activity.save;
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_form.Textarea, {
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }), React.createElement(_form2.SpecsForm, {
              toggleView: toggleView,
              type: "general"
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form2.SpecsForm, {
              toggleView: toggleView
            })))));
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

      /****************************************************
      INTERNAL MODULE: ./activities/multiple-choice/context
      ****************************************************/

      ims.set('./activities/multiple-choice/context', {
        hash: 1928575685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMultipleChoiceContext = exports.MultipleChoiceContext = void 0;
          var _react = require("react");
          const MultipleChoiceContext = exports.MultipleChoiceContext = _react.default.createContext({});
          const useMultipleChoiceContext = () => _react.default.useContext(MultipleChoiceContext);
          exports.useMultipleChoiceContext = useMultipleChoiceContext;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/empty
      **************************************************/

      ims.set('./activities/multiple-choice/empty', {
        hash: 578953830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceEmptySpecs = MultipleChoiceEmptySpecs;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
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
            const onManual = () => toggleView('form');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, texts.multipleChoice.actions.addQuestion))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("span", null, texts.activities.empty.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/index
      *******************************************************/

      ims.set('./activities/multiple-choice/form/index', {
        hash: 2198781521,
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
          var _header = require("../../specs/header");
          var _context2 = require("../context");
          // import { SaveButton } from '../../../../save-button';

          function MultipleChoiceManualForm({
            onCancel,
            changeView
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
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
            const ref = _react.default.useRef(null);
            const onSave = async () => {
              setFetching(true);
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
                setFetching(false);
                return;
              }
              await activity.save();
              setFetching(false);
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
            const contextValue = {
              errors,
              setErrors
            };
            return _react.default.createElement(_context2.MultipleChoiceContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.SpecsHeader, null), _react.default.createElement("section", {
              ref: ref,
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: errors.length ? texts.errors.wrongQuestions : ''
            }), _react.default.createElement(_questions.DynamicQuestionsForm, {
              errors: errors,
              setErrors: setErrors
            }), _react.default.createElement("footer", {
              className: "section-actions__container border-top actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !!errors.length || fetching
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
        hash: 1640077995,
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
          var _context2 = require("../../../context");
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
              setErrors
            } = (0, _context2.useMultipleChoiceContext)();
            const {
              texts: {
                multipleChoice: texts
              },
              activity
            } = (0, _context.useActivityContext)();
            const cls = `dynamic__icon selectable circle${correct ? ' dynamic__icon--correct' : ''}`;
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
              const data = values.map(check);
              setValues(data);
              // we need to reset the errors when we change the correct answer
              // to be able to active the save button again.
              setErrors([]);
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
              className: "drag-bullet-point circle",
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
        hash: 955337108,
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
        hash: 1430472930,
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
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          function DynamicQuestionsForm({
            errors,
            setErrors
          }) {
            const {
              values,
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
              onChange: onChange
            }, _react.default.createElement(Dynamic.List, {
              className: "dynamic-form dynamic-questions-form"
            }), _react.default.createElement(_actions.DynamicActions, null));
          }
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/question
      ********************************************************************/

      ims.set('./activities/multiple-choice/form/questions/question', {
        hash: 3821545880,
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
              store
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const processOptions = (options, correctAnswer) => {
              const correctIndex = correctAnswer ?? props.value.correctAnswer;
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
              const question = await activity.specs.generateAnswers({
                notes,
                question: value,
                index: props.index
              });
              setFetching(true);
              globalThis.setTimeout(() => {
                // activity.specs.set({ questions });
                setAnswers(processOptions(question.options, question.correctAnswer));
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
              placeholder: texts.questions.placeholder,
              name: "question",
              value: value ?? '',
              onChange: onChange,
              onKeyDown: onKeyDown
            }), _react.default.createElement("section", {
              className: "item__actions"
            }, _react.default.createElement(_ui.ProcessIconButton, {
              icon: "aiStars",
              className: "circle",
              disabled: !value || value === '',
              onClick: generateAnswers,
              title: texts.actions.generateAnswers
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "circle",
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
        hash: 2262903222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _empty = require("./empty");
          var _form2 = require("./form");
          var _specs = require("./specs");
          function MultipleChoiceActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = activity.save;
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            const finalView = activity.specs.empty() && view === 'specs' ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_form.Textarea, {
              label: texts.activities.description.label,
              variant: "floating",
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            })))), React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.MultipleChoiceSpecs, {
                  setView: setView
                }),
                form: React.createElement(_form2.MultipleChoiceManualForm, {
                  onCancel: onCancel,
                  changeView: changeView
                })
              },
              placeholder: React.createElement(_empty.MultipleChoiceEmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/answers
      **********************************************************/

      ims.set('./activities/multiple-choice/specs/answers', {
        hash: 1788779777,
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

      /*********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/header
      *********************************************************/

      ims.set('./activities/multiple-choice/specs/header', {
        hash: 551076203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../context");
          function SpecsHeader({
            children,
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
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), children, showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              owner: store.model.owner,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
          }
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
        hash: 1130532532,
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
              activity.specs.set(specs);
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
        hash: 3117135016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_form.Textarea, {
              name: "objective",
              placeholder: texts.specs.objective.placeholder,
              value: values.specs?.objective
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/specs/base-spec
      ********************************************/

      ims.set('./activities/specs/base-spec', {
        hash: 2925245183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../context");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = activity.save;
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              onBlur: onBlur,
              type: "textarea",
              name: name,
              value: value
            }));
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
        hash: 4152479464,
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
        hash: 2491807003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
          function EmptySpecs({
            name,
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const onManual = () => toggleView('manual');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual))), _react.default.createElement("div", {
              className: "activity__empty-container"
            }, _react.default.createElement("span", {
              className: "activity--empty__description"
            }, texts.activities.empty.description)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/header
      *****************************************/

      ims.set('./activities/specs/header', {
        hash: 3598479935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _context = require("../../context");
          function SpecsHeader({
            children,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title)), children);
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

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/field
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/field', {
        hash: 1084710385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomDynamicField = CustomDynamicField;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../../context");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select
          };
          function CustomDynamicField({
            name,
            data,
            index,
            onChange
          }) {
            const {
              activity: {
                specs
              },
              activity,
              saveActivity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              onRemove,
              value
            } = (0, _dynamicField.useDynamicFieldContext)();
            const fields = Object.keys(data.fields);
            const values = specs[name] ? specs[name] : [];
            const defaultValues = {};
            const fieldTexts = texts.specs[name];
            const onBlur = event => {
              activity.save({
                specs: {
                  name: value
                }
              });
            };
            const output = fields.map((name, i) => {
              if (name === 'attachments') return null;
              const Field = fieldTypes[data.fields[name]];
              const attrs = {
                label: fieldTexts[name].label,
                placeholder: fieldTexts[name].placeholder,
                name,
                data: name,
                value: values[index]?.[name] ?? ''
              };
              defaultValues[name] = '';
              return _react.default.createElement(Field, {
                ...attrs,
                onChange: onChange,
                key: `${name}-${i}`,
                variant: "floating",
                onBlur: onBlur
              });
            });
            if (!values.length) values.push(defaultValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h6", null, "Objective ", index + 1), _react.default.createElement(_dynamicField.DynamicIconButton, {
              className: "circle",
              action: "remove",
              icon: "delete",
              index: index
            })), output);
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/index
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/index', {
        hash: 24533445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _context = require("../../../../context");
          var _field = require("./field");
          function DynamicContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            if (!data.hasOwnProperty('fields')) {
              console.warn(`DynamicContainer: no fields found on ${name}`);
              return null;
            }
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
              if (event.name !== 'change') {
                activity.save();
                console.log('guardamos en el onChange');
              }
            };
            const onBlur = event => activity.save();
            // if (!values.length) values.push(defaultValues);
            return _react.default.createElement("div", {
              className: "dynamic-form-field-container"
            }, _react.default.createElement(_dynamicField.DynamicFieldContainer, {
              lazyInit: true,
              fields: Object.keys(data),
              value: values,
              name: name,
              onBlur: onBlur,
              onChange: onChange
            }, _react.default.createElement("section", {
              className: "section__label"
            }, _react.default.createElement("h6", null, fieldTexts.label), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_dynamicField.DynamicButton, {
              variant: "link",
              action: "add"
            }, globalTexts.actions.add))), _react.default.createElement("div", null, _react.default.createElement(_dynamicField.DynamicField, null, _react.default.createElement(_field.CustomDynamicField, {
              name: name,
              data: data
            })))));
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

      /**********************************************
      INTERNAL MODULE: ./activities/specs/manual/form
      **********************************************/

      ims.set('./activities/specs/manual/form', {
        hash: 1333424901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsForm = SpecsForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsForm({
            type = 'agent'
          }) {
            const {
              texts,
              activity,
              store,
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              specs
            } = activity;
            const structure = specs.structure[type];
            const fields = Object.keys(structure);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            const toMap = fields.filter(name => name !== 'attachments');
            const output = toMap.map((name, index) => {
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
              if (typeof structure[name] === 'object' && structure[name].type !== 'array') {
                const Field = fieldTypes[structure[name].type];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  variant: "floating",
                  name: name,
                  ...attrs,
                  onChange: onChange,
                  onBlur: saveActivity
                });
              }
              if (typeof structure[name] === 'string') {
                const Field = fieldTypes[structure[name]];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange,
                  variant: "floating",
                  onBlur: saveActivity
                });
              }
              const Field = fieldTypes[structure[name].type];
              return _react.default.createElement(Field, {
                onChange: onChange,
                variant: "floating",
                key: `${name}-${index}`,
                name: name,
                data: structure[name],
                onBlur: saveActivity,
                ...attrs
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/index
      ***********************************************/

      ims.set('./activities/specs/manual/index', {
        hash: 1565506611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ManualMaterialForm({
            toggleView
          }) {
            const {
              texts,
              activity,
              store
            } = (0, _context.useActivityContext)();
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
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title)), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("div", null, output)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/manual/use-form
      **************************************************/

      ims.set('./activities/specs/manual/use-form', {
        hash: 1109786597,
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
              const objective = activity.specs.objective;
              activity.specs.revert();
              activity.set({
                objective
              });
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
        hash: 752628908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          var _form = require("pragmate-ui/form");
          function SpokenActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = activity.save;
            const toggleView = view => setView(view);
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_form.Textarea, {
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
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

      /****************************
      INTERNAL MODULE: ./breadcrumb
      ****************************/

      ims.set('./breadcrumb', {
        hash: 57089000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
            };
            const onGnerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "page-container"
            }, _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_icons.IconButton, {
              onClick: onBack,
              title: globalTexts.actions.back,
              icon: "backArrow",
              className: "circle",
              variant: "default"
            }), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate))), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, globalTexts.actions.cancel)), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              objective: activity.objective,
              onClose: toggleSuggestions,
              onGenerate: onGnerate
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
        hash: 1417067151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("../../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onGnerate = specs => {
              console.log('generate', specs);
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_icons.IconButton, {
              onClick: onBack,
              title: globalTexts.actions.back,
              icon: "backArrow",
              className: "circle",
              variant: "default"
            }), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              objective: activity.objective,
              onClose: toggleSuggestions,
              onGenerate: onGnerate
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 320771109,
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
          var _useMaterials = require("../../activities/content-theory/materials/use-materials");
          function MaterialsSuggestionsModal({
            type,
            onClose
          }) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [notes, setNotes] = _react.default.useState('');
            const {
              generateMaterial,
              fetching
            } = (0, _useMaterials.useMaterialActions)();
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                await generateMaterial(type, notes);
                onClose();
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
        hash: 3983226997,
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
        hash: 654159545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("./context");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              saveActivity
            } = (0, _context.useActivityContext)();
            const [picture, setPicture] = _react.default.useState({
              src: activity.picture,
              date: Date.now()
            });
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const onGenerate = args => activity.generatePicture(args);
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
            const pictureSrc = picture.src ? `${picture.src}?size=sm&${Date.now()}` : undefined;
            const onChange = event => {
              activity.set({
                title: event.currentTarget.value
              });
            };
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              entity: "activity",
              picture: pictureSrc,
              onGenerate: onGenerate
            }), _react.default.createElement("div", {
              className: "header__title-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_form.Input, {
              className: "input__activity-header",
              name: "title",
              value: activity.title ? activity.title : '',
              onChange: onChange,
              placeholder: texts.form.title,
              onBlur: saveActivity
            })), _react.default.createElement("div", {
              className: "activity-type"
            }, _react.default.createElement(_icons.AppIcon, {
              name: activity.type
            }), " ", texts.types[activity.type])), _react.default.createElement("div", {
              className: "flex-container header__icons"
            }, _react.default.createElement(_language.ActivityLanguage, null))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3146115548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _characterTalk = require("./activities/character-talk");
          var _contentTheory = require("./activities/content-theory");
          var _debate = require("./activities/debate");
          var _context = require("./context");
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
          var _breadcrumb = require("./breadcrumb");
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
            const saveActivity = () => {
              activity.save();
            };
            const value = {
              store,
              activity,
              texts,
              values,
              setValues,
              saveActivity
            };
            return _react.default.createElement(_context.ActivityContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "activity-container"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement(_components.ConditionalContainer, {
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

      /**************************
      INTERNAL MODULE: ./language
      **************************/

      ims.set('./language', {
        hash: 1603135645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityLanguage = ActivityLanguage;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("./context");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          function ActivityLanguage() {
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
            const [show, setShow] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = async event => {
              setLanguage(event.currentTarget.value);
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const languages = {
              en: '/assets/english.png',
              es: '/assets/spanish.png'
            };
            const onSave = async event => {
              setFetching(true);
              activity.save({
                language
              });
              setFetching(false);
              setShow(false);
            };
            const toggleShow = () => setShow(!show);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: "activity__language",
              src: languages[activity.language],
              alt: "language",
              onClick: toggleShow
            }), show && _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: toggleShow
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSave
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: language,
              name: "language",
              options: options,
              onChange: onChange
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: fetching
            }, store.globalTexts.actions.save)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIk1hdGVyaWFsc1ZpZXciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiYWR2YW5jZWQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJhY3Rpb24iLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZGFsIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJhY3Rpb25zIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsInNob3ciLCJvbkNhbmNlbCIsIl9hZHZhbmNlZEZpZWxkcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eSIsInN0b3JlIiwic2F2ZUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHMiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJvbkNvbnN1bWUiLCJ0YWJzIiwiZGF0YXNldCIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwib25DcmVhdGUiLCJhZGQiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9xdWVzdGlvbnMiLCJfY29udGV4dDIiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpbmRleCIsIm9wdGlvbnMiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwib25SZW1vdmUiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRmllbGQiLCJEeW5hbWljSWNvbkJ1dHRvbiIsIl9maWVsZCIsImhhc093blByb3BlcnR5Iiwid2FybiIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsImFycmF5IiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIl9tYW51YWwiLCJfb2JqZWN0aXZlRmllbGQiLCJTcG9rZW5BY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsImVkaXRBY3Rpdml0eSIsIm9uR25lcmF0ZSIsInJvdXRpbmciLCJiYWNrIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2JyZWFkY3J1bWIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGViYXRlIiwic3Bva2VuIiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJzZXRTaG93IiwiZW4iLCJlcyIsIkltYWdlIiwiYWx0IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVU8scUJBQXFCQSxDQUFB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