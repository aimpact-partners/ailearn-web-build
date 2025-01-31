System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_2 = _pragmateUi100Beta7Collapsible;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_5 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_8 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp031ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_12 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_15 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_16 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_17 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsDynamicField) {
      dependency_20 = _aimpactAilearnApp031ComponentsDynamicField;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_21 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_22 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_23 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta7Image) {
      dependency_25 = _pragmateUi100Beta7Image;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['pragmate-ui/collapsible', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/main-layout.widget', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['pragmate-ui/toast', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/activity.code');
      ims = new Map();
      /***********************************************************
      INTERNAL MODULE: ./activities/character-talk/advanced-fields
      ***********************************************************/
      ims.set('./activities/character-talk/advanced-fields', {
        hash: 1467882870,
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
        hash: 2138196459,
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
            }, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description)), _react.default.createElement("div", {
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
              className: "mt-15 mb-100 advanced__fields"
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
        hash: 3225792783,
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
        hash: 887968102,
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
        hash: 1670077659,
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
        hash: 3195382392,
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
                console.log(99, notes, objective);
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
        hash: 3007844373,
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

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 92913596,
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
        hash: 565539116,
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
            const finalView = activity.specs.empty() && view === 'specs' ? 'empty' : view;
            (0, _hooks.useBinder)([activity.specs], () => setView(activity.specs.empty() ? 'empty' : 'specs'));
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
        hash: 3555708070,
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
        hash: 2684210222,
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
            console.log(2);
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
        hash: 1719529357,
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
            }, !['multiple-choice', 'spoken', 'assessment'].includes(activity.type) && _react.default.createElement(_icons.IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2NvbGxhcHNpYmxlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQXBwSWNvbiIsImljb24iLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2Zvcm0yIiwiX2FkdmFuY2VkRmllbGRzIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Iiwib25CbHVyIiwic2F2ZSIsIm9uTGlzdGVuIiwidXNlQmluZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJUZXh0YXJlYSIsInZhcmlhbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJhZ2VudCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsIlNwZWNzIiwiX21hdGVyaWFscyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIkljb24iLCJhdHRycyIsIkFwcEljb25CdXR0b24iLCJvbkNsaWNrIiwiTWF0ZXJpYWxzVmlldyIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzZXRVcGRhdGVkIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJzdG9yZSIsInZhbHVlcyIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFydGljbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJkYXRhc2V0IiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwidW5kZWZpbmVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX3F1ZXN0aW9ucyIsIl9jb250ZXh0MiIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvd25lciIsImNyZWRpdHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImlkIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwicmV2ZXJ0IiwiZmluYWxWaWV3IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiZmllbGRUeXBlcyIsImlucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJDdXN0b21EeW5hbWljRmllbGQiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRmllbGQiLCJEeW5hbWljSWNvbkJ1dHRvbiIsIl9maWVsZCIsImhhc093blByb3BlcnR5Iiwid2FybiIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsImFycmF5IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3Byb2dyZXNzIiwiX3RvYXN0IiwidGVzdCIsInJlYWR5VG9UZXN0IiwidG9hc3QiLCJ3YXJuaW5nIiwidGVzdEFjdGl2aXR5IiwicHVzaFN0YXRlIiwiY2hhdCIsIkRFRkFVTFRfRVJST1IiLCJBY3Rpdml0eVByb2dyZXNzIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlByb2dyZXNzSXRlbSIsIm9wdGlvbmFsIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInByb2dyZXNzIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInRvdGFsIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVLLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ04sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUFFLFFBQUEsUUFDQ1QsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQStCLEdBQzdDVixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxZQUFBLENBQUFZLG9CQUFvQixRQUNwQlgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsWUFBQSxDQUFBYSxpQkFBaUIsUUFDakJaLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEyQyxHQUM1RFYsTUFBQSxDQUFBTyxP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