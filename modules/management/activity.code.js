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
        hash: 2420342426,
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
                  className: "with-placeholder",
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
                  className: "with-placeholder",
                  onChange: onChange,
                  variant: "floating",
                  onBlur: saveActivity
                });
              }
              const Field = fieldTypes[structure[name].type];
              return _react.default.createElement(Field, {
                onChange: onChange,
                className: "with-placeholder",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIk1hdGVyaWFsc1ZpZXciLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsImZ1bGxDb250ZW50TGF5b3V0IiwibWFpbkNvbnRlbnRMYXlvdXQiLCJtYWluQ2hhdExheW91dCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJhZHZhbmNlZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJfYWR2YW5jZWRGaWVsZHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzdG9yZSIsInNhdmVBY3Rpdml0eSIsInNldFVwZGF0ZWQiLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInZhbHVlcyIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFydGljbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInJlZmluZW1lbnQiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsImF0dHJzIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkZpZWxkIiwiRHluYW1pY0ljb25CdXR0b24iLCJfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJhcnJheSIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl9wcm9ncmVzcyIsIl90b2FzdCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBY3Rpdml0eSIsInB1c2hTdGF0ZSIsImNoYXQiLCJERUZBVUxUX0VSUk9SIiwiQWN0aXZpdHlQcm9ncmVzcyIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJwcm9ncmVzcyIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJ0b3RhbCIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2JyZWFkY3J1bWIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGViYXRlIiwic3Bva2VuIiwiZGVmaW5lUHJvcGVydHkiLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVU8scUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7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