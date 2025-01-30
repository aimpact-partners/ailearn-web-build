System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_4 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_8 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_9 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ModulesManagementRefinamentCode) {
      dependency_11 = _aimpactAilearnApp031ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_13 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_14 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_16 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_18 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_19 = _beyondJsKernel019Core;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp031ComponentsDynamicField;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_24 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_25 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta7Image) {
      dependency_26 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/form', dependency_4], ['react', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/collapsible', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26]]);
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
        hash: 1858443149,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const options = [{
              value: 'main-chat-layout',
              label: texts.activities.settings.layout.options['main-chat-layout']
            }, {
              value: 'main-content-layout',
              label: texts.activities.settings.layout.options['main-content-layout']
            }, {
              value: 'full-content-layout',
              label: texts.activities.settings.layout.options['full-content-layout']
            }];
            const value = activity?.settings?.layout ? activity.settings.layout : options[0];
            const onChange = event => {
              const selected = event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.value);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement("section", {
              className: "layout__selection"
            }, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description)), _react.default.createElement("div", {
              className: "layout-types-container"
            }, _react.default.createElement(_icons.AppIconButton, {
              value: "full-content-layout",
              icon: "fullContentLayout",
              onClick: onChange,
              title: texts.activities.settings.layout.options.fullContentLayout
            }), _react.default.createElement(_icons.AppIconButton, {
              value: "main-content-layout",
              icon: "mainContentLayout",
              onClick: onChange,
              title: texts.activities.settings.layout.options.mainContentLayout
            }), _react.default.createElement(_icons.AppIconButton, {
              value: "main-chat-layout",
              icon: "mainChatLayout",
              onClick: onChange,
              title: texts.activities.settings.layout.options.mainChatLayout
            }))), _react.default.createElement("div", {
              className: "mt-15 mb-100"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-header advanced-section"
            }, _react.default.createElement("div", {
              className: "flex-container"
            }, _react.default.createElement("div", {
              className: "bg-neutral"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "advancedSettings"
            })), _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.advanced.subtitle))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
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
        hash: 2801874620,
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
            };
            const onBlur = () => activity.save();
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
              onChange: onChange,
              onBlur: onBlur
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
        hash: 367046360,
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
              activity,
              saveActivity
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
              name: "description",
              label: texts.activities.description.label,
              onChange: onChange,
              variant: "floating",
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
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
        hash: 3990564066,
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
            const onBlur = () => activity.save();
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
        hash: 1416515319,
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
              console.log(20);
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
        hash: 4078986996,
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
              texts
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
      INTERNAL MODULE: ./activities/specs/manual/dynamic/empty
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/empty', {
        hash: 917111638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyDynamicContent = EmptyDynamicContent;
          var _react = require("react");
          var _context = require("../../../../context");
          function EmptyDynamicContent() {
            const {
              texts
            } = (0, _context.useActivityContext)();
            return _react.default.createElement("div", {
              className: "form__empty-section"
            }, _react.default.createElement("span", null, texts.specs.objective.empty));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/field
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/field', {
        hash: 1005986422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomDynamicField = CustomDynamicField;
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
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
              texts
            } = (0, _context.useActivityContext)();
            const {
              value
            } = (0, _dynamicField.useDynamicFieldContext)();
            const [updated, setUpdated] = _react.default.useState({});
            const fields = Object.keys(data.fields);
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
            const values = specs[name] ? specs[name] : [];
            const defaultValues = {};
            const fieldTexts = texts.specs[name];
            const onBlur = () => {
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
                disabled: activity.fetching,
                onChange: onChange,
                key: `${name}-${i}`,
                className: "with-placeholder",
                variant: "floating",
                onBlur: onBlur
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, _react.default.createElement("footer", {
              className: "flex-container flex-space-between flex-end"
            }, _react.default.createElement(_dynamicField.DynamicIconButton, {
              className: "circle",
              action: "remove",
              icon: "delete",
              index: index
            })));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/index
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/index', {
        hash: 92808670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _react = require("react");
          var _context = require("../../../../context");
          var _empty = require("./empty");
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
              }
            };
            const onBlur = event => activity.save();
            // if (!values.length) values.push(defaultValues);
            return _react.default.createElement("div", {
              className: "dynamic-form-field-container"
            }, _react.default.createElement(_dynamicField.DynamicFieldContainer, {
              lazyInit: true,
              value: values,
              name: name,
              onBlur: onBlur,
              onChange: onChange,
              empty: _empty.EmptyDynamicContent
            }, _react.default.createElement("section", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, fieldTexts.label), _react.default.createElement("div", {
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
        hash: 3805803047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsForm = SpecsForm;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              specs
            } = activity;
            const structure = specs.structure[type];
            const fields = Object.keys(structure);
            const [updates, setUpdates] = _react.default.useState({});
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            (0, _hooks.useBinder)([activity], () => setUpdates({}));
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
              //the structure has and advance settings defining if is required or not, for example.
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
              console.log(0.3, name, structure[name], attrs);
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
        hash: 1088763227,
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
          function ManualMaterialForm({}) {
            const {
              texts,
              activity
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
                  className: "with-placeholder",
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              //strings
              const Field = fieldTypes[specs.structure[name]];
              return _react.default.createElement(Field, {
                className: "with-placeholder",
                key: `${name}-${index}`,
                name: name,
                ...attrs,
                onChange: onChange
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
        hash: 1556109825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
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
            const onBlur = () => activity.save();
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "page-container"
            }, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.Textarea, {
              name: "description",
              label: texts.activities.description.label,
              onChange: onChange,
              variant: "floating",
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }), React.createElement(_form2.SpecsForm, {
              type: "general"
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: "page-container"
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
            }, React.createElement(_form2.SpecsForm, null)))));
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

      /***********************************
      INTERNAL MODULE: ./header/breadcrumb
      ***********************************/

      ims.set('./header/breadcrumb', {
        hash: 4163355509,
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
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _progress = require("./progress");
          var _toast = require("pragmate-ui/toast");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onGnerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            const test = async () => {
              try {
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                const response = await store.testActivity(activity.id);
                _routing.routing.pushState(`/assignments/${store.model.id}/${activity.type}/${activity.id}/chat/${response.activity.chat.id}?type=draft`);
                console.log(response);
              } catch (e) {
                _toast.toast.error(store.globalTexts.errors.DEFAULT_ERROR);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "internal-breadcrumb"
            }, _react.default.createElement("div", {
              className: "page-container flex-container"
            }, _react.default.createElement("div", {
              className: "internal-breadcrumb__content"
            }, _react.default.createElement(_progress.ActivityProgress, null), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-1"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "eye",
              className: "circle test-action-button",
              onClick: test
            }), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate))))), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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

      /******************************
      INTERNAL MODULE: ./header/index
      ******************************/

      ims.set('./header/index', {
        hash: 66967748,
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
          var _context = require("../context");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              saveActivity,
              store
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

      /*********************************
      INTERNAL MODULE: ./header/language
      *********************************/

      ims.set('./header/language', {
        hash: 3386563106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityLanguage = ActivityLanguage;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
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

      /**************************************
      INTERNAL MODULE: ./header/progress-item
      **************************************/

      ims.set('./header/progress-item', {
        hash: 2273232414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressItem = ProgressItem;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ProgressItem({
            name,
            optional = false,
            spec = false
          }) {
            const {
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const obj = spec ? activity.specs : activity;
            const ref = _react.default.useRef(null);
            const value = spec ? activity.specs.validateData(name) : !!activity[name];
            const [current, setCurrent] = _react.default.useState(value);
            const cls = `progress__item${value ? ' progress__item--completed' : ''}`;
            let state = value ? 'completed' : 'pending';
            if (optional && !value) state = 'optional';
            (0, _hooks.useBinder)([obj], () => {
              const value = spec ? activity.specs.validateData(name) : !!activity[name];
              if (value) ref.current.classList.add('progress__item--completed');else ref.current.classList.remove('progress__item--completed');
              setCurrent(value);
            }, `${name}.changed`);
            if (spec && !activity.specs.structure[name]) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
              className: cls,
              ref: ref
            }, _react.default.createElement("span", {
              className: "label"
            }, texts.activities.progress[name]), _react.default.createElement("span", {
              className: "state"
            }, texts.progress.states[state])));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./header/progress
      *********************************/

      ims.set('./header/progress', {
        hash: 2144555580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProgress = ActivityProgress;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../context");
          var _progressItem = require("./progress-item");
          function ActivityProgress() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const total = activity.progressData;
            const [updated, setUpdated] = _react.default.useState({});
            const valid = total.filter(item => !!item);
            (0, _hooks.useBinder)([activity, activity.specs], () => {
              setUpdated({});
            }, 'change');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity-progress__container"
            }, _react.default.createElement("div", {
              className: "progress-label"
            }, _react.default.createElement("span", {
              className: "state-label"
            }, texts.progress.label), _react.default.createElement("span", {
              className: "state-result"
            }, valid.length, "/", total.length)), _react.default.createElement("ul", {
              className: "activity__progress"
            }, _react.default.createElement(_progressItem.ProgressItem, {
              name: "title"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              name: "description"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              name: "picture",
              optional: true
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "general"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "agent"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "advanced",
              optional: true
            }))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 86721099,
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
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
          var _context = require("./context");
          var _breadcrumb = require("./header/breadcrumb");
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
            }, 'change');
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
        "im": "./header/index",
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
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./header/index').ActivityHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIk1hdGVyaWFsc1ZpZXciLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsImZ1bGxDb250ZW50TGF5b3V0IiwibWFpbkNvbnRlbnRMYXlvdXQiLCJtYWluQ2hhdExheW91dCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJhZHZhbmNlZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJfYWR2YW5jZWRGaWVsZHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzdG9yZSIsInNhdmVBY3Rpdml0eSIsInNldFVwZGF0ZWQiLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInZhbHVlcyIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFydGljbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInJlZmluZW1lbnQiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsImF0dHJzIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkZpZWxkIiwiRHluYW1pY0ljb25CdXR0b24iLCJfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJhcnJheSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3Byb2dyZXNzIiwiX3RvYXN0IiwidGVzdCIsInJlYWR5VG9UZXN0IiwidG9hc3QiLCJ3YXJuaW5nIiwidGVzdEFjdGl2aXR5IiwicHVzaFN0YXRlIiwiY2hhdCIsIkRFRkFVTFRfRVJST1IiLCJBY3Rpdml0eVByb2dyZXNzIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlByb2dyZXNzSXRlbSIsIm9wdGlvbmFsIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInByb2dyZXNzIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInRvdGFsIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVTyxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHVCxLQUFLLENBQUNVLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUMsVUFBVSxHQUFHTCxJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1NLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RFgsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFB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