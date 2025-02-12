System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_3 = _pragmateUi100Beta7Collapsible;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_6 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_7 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/collapsible', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/activity.code');
      ims = new Map();
      /***********************************************************
      INTERNAL MODULE: ./activities/character-talk/advanced-fields
      ***********************************************************/
      ims.set('./activities/character-talk/advanced-fields', {
        hash: 3603136999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "mt-15 mb-100 advanced__fields"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-subheader advanced-section"
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

      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/

      ims.set('./activities/character-talk/index', {
        hash: 1474604232,
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
          var _advancedFields = require("./advanced-fields");
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
            const onBlur = () => activity.save();
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
            })), React.createElement(_advancedFields.AdvancedFields, null))));
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
        hash: 2327192811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
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
            const onChange = event => {
              const selected = event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.value);
            };
            const Icon = ({
              value,
              icon
            }) => {
              const attrs = {
                value,
                icon,
                title: texts.activities.settings.layout.options[icon]
              };
              if (value === activity.settings?.layout) attrs.className = 'selected';
              return _react.default.createElement(_icons.AppIconButton, {
                ...attrs,
                onClick: onChange
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement("section", {
              className: "layout__selection"
            }, _react.default.createElement("div", {
              className: "activity__section-subheader"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description))), _react.default.createElement("div", {
              className: "layout-types-container"
            }, _react.default.createElement(Icon, {
              value: "full-content-layout",
              icon: "fullContentLayout"
            }), _react.default.createElement(Icon, {
              value: "main-content-layout",
              icon: "mainContentLayout"
            }), _react.default.createElement(Icon, {
              value: "main-chat-layout",
              icon: "mainChatLayout"
            }))), _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "5. ", texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
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
        hash: 1673254263,
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
              activity
            } = (0, _context.useActivityContext)();
            const [, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
            const [internalValue, setInternalValue] = React.useState(activity.description);
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const onChange = event => {
              setInternalValue(event.currentTarget.value);
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
              value: internalValue,
              onChange: onChange,
              onBlur: onBlur
            }), React.createElement(_form2.SpecsForm, {
              type: "general",
              titles: false
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
        hash: 909898923,
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
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              autoresize: false,
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
        hash: 1985059227,
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
              store,
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
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              onConsume: store.model.consumeCoins,
              title: materialTexts.refinement.title,
              objective: activity.objective,
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
        hash: 2463039133,
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
        hash: 4241220270,
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
              className: "activity__section-subheader"
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
        hash: 2675687743,
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
              notes,
              objective
            }) => {
              try {
                const data = await activity.materials.generate('article', notes, objective);
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

      /***************************************************
      INTERNAL MODULE: ./activities/debate/advanced-fields
      ***************************************************/

      ims.set('./activities/debate/advanced-fields', {
        hash: 2670224060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "mt-15 mb-100 advanced__fields"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-subheader advanced-section"
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

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 2475609314,
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
          var _advancedFields = require("./advanced-fields");
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
            const onBlur = () => activity.save();
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
            })), React.createElement(_advancedFields.AdvancedFields, null))));
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
        hash: 861297949,
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
        hash: 3531890085,
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
                correctAnswer: props.value.correctAnswer,
                question: event.target.value,
                options: answers.map(item => item.value)
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
        hash: 3206624180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const finalView = activity.specs.empty() ? 'empty' : view === 'empty' ? 'specs' : view;
            const listenChanges = () => {
              setView(activity.specs.empty() ? 'empty' : view === 'empty' ? 'specs' : view);
            };
            (0, _hooks.useBinder)([activity.specs], listenChanges, ['specs.cleaned', 'activity.generated', 'activity.saved']);
            (0, _hooks.useBinder)([activity], listenChanges, 'activity.generated');
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
        hash: 4229975323,
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
              className: "activity__section-subheader"
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
        hash: 3031721988,
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
            const onBlur = () => activity.save();
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
        hash: 2215289490,
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
              className: "activity__section-subheader"
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
        hash: 3576683522,
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
              className: "activity__section-subheader"
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

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/field
      ***********************************************/

      ims.set('./activities/specs/manual/field', {
        hash: 3950160505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsField = SpecsField;
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
          function SpecsField(specs) {
            const {
              texts,
              activity,
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              name,
              type,
              index,
              titles,
              value
            } = specs;
            const [updates, setUpdates] = _react.default.useState({});
            const [internalValue, setInternalValue] = _react.default.useState(value);
            const onChange = event => {
              setInternalValue(event.currentTarget.value);
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            if (!texts.specs[name]) {
              console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              return null;
            }
            const {
              label,
              placeholder,
              title
            } = texts.specs[name];
            const attrs = {
              label,
              placeholder,
              value: internalValue
            };
            //the structure has and advance settings defining if is required or not, for example.
            const Field = fieldTypes[type];
            return _react.default.createElement("div", null, titles ? _react.default.createElement("h5", null, title) : null, _react.default.createElement(Field, {
              key: `${name}-${index}`,
              variant: "floating",
              name: name,
              ...attrs,
              onChange: onChange,
              onBlur: saveActivity
            }));
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
        hash: 3116463149,
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
          var _field = require("./field");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsForm({
            type = 'agent',
            titles = true
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
              //the structure has and advance settings defining if is required or not, for example.
              if (typeof structure[name] === 'string' || typeof structure[name] === 'object' && structure[name].type !== 'array') {
                return _react.default.createElement(_field.SpecsField, {
                  titles: titles,
                  index: index,
                  type: structure[name].type,
                  key: `${name}-${index}`,
                  variant: "floating",
                  name: name,
                  ...attrs,
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
        hash: 3711330155,
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
              className: "activity__section-subheader"
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
        hash: 2058428127,
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
              className: "activity__section-subheader"
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
        hash: 856343870,
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
        hash: 1898541400,
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
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _progress = require("./progress");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            const [processing, setProcessing] = _react.default.useState(false);
            const onGenerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            const test = async () => {
              try {
                setProcessing(true);
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                const response = await store.testActivity(activity.id);
                setProcessing(false);
                _routing.routing.pushState(`/assignments/${store.model.id}/${activity.type}/${activity.id}/chat/${response.activity.chat.id}?type=draft`);
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
              className: "flex-container flex-vertical-center gap-05"
            }, !['multiple-choice', 'spoken', 'assessment'].includes(activity.type) && _react.default.createElement(_icons.AppButton, {
              disabled: processing || !activity.readyToTest,
              icon: "outlinedPlay",
              variant: "secondary",
              className: "circle test-action-button",
              onClick: test
            }, store.globalTexts.actions.testActivity), _react.default.createElement(_ui.AIButton, {
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
              onConsume: store.model.consumeCoins,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./header/index
      ******************************/

      ims.set('./header/index', {
        hash: 383186873,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2NvbGxhcHNpYmxlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQXBwSWNvbiIsImljb24iLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2Zvcm0yIiwiX2FkdmFuY2VkRmllbGRzIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Iiwib25CbHVyIiwic2F2ZSIsIm9uTGlzdGVuIiwidXNlQmluZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJUZXh0YXJlYSIsInZhcmlhbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJhZ2VudCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsIlNwZWNzIiwiX21hdGVyaWFscyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIkljb24iLCJhdHRycyIsIkFwcEljb25CdXR0b24iLCJvbkNsaWNrIiwiTWF0ZXJpYWxzVmlldyIsInRpdGxlcyIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzZXRVcGRhdGVkIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInN0b3JlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiYXV0b3Jlc2l6ZSIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJkYXRhc2V0IiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwidW5kZWZpbmVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX3F1ZXN0aW9ucyIsIl9jb250ZXh0MiIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvd25lciIsImNyZWRpdHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImlkIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwicmV2ZXJ0IiwiZmluYWxWaWV3IiwibGlzdGVuQ2hhbmdlcyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkZpZWxkIiwiRHluYW1pY0ljb25CdXR0b24iLCJfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJhcnJheSIsIlNwZWNzRmllbGQiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfcHJvZ3Jlc3MiLCJfdG9hc3QiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJwdXNoU3RhdGUiLCJjaGF0IiwiREVGQVVMVF9FUlJPUiIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfaW1hZ2UiLCJzZXRTaG93IiwiZW4iLCJlcyIsIkltYWdlIiwiYWx0IiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVSyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUFSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBRSxRQUFBLFFBQ0NULE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUErQixHQUM3Q1YsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsWUFBQSxD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