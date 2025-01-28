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
        hash: 91690501,
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
        hash: 1328952424,
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
            const onBlur = activity.save;
            const toggleView = view => setView(view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIk1hdGVyaWFsc1ZpZXciLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsImZ1bGxDb250ZW50TGF5b3V0IiwibWFpbkNvbnRlbnRMYXlvdXQiLCJtYWluQ2hhdExheW91dCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJhZHZhbmNlZCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJfYWR2YW5jZWRGaWVsZHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzdG9yZSIsInNhdmVBY3Rpdml0eSIsInNldFVwZGF0ZWQiLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInZhbHVlcyIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFydGljbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInJlZmluZW1lbnQiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsImF0dHJzIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkZpZWxkIiwiRHluYW1pY0ljb25CdXR0b24iLCJfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJhcnJheSIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl9wcm9ncmVzcyIsIl90b2FzdCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBY3Rpdml0eSIsInB1c2hTdGF0ZSIsImNoYXQiLCJERUZBVUxUX0VSUk9SIiwiQWN0aXZpdHlQcm9ncmVzcyIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJwcm9ncmVzcyIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJ0b3RhbCIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2JyZWFkY3J1bWIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGViYXRlIiwic3Bva2VuIiwiZGVmaW5lUHJvcGVydHkiLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVU8scUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1FLE1BQU0sR0FBR2IsUUFBUSxDQUFDYyxJQUFJO1lBQzVCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1iLElBQUksR0FBR0YsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBVixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUFFZSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQXZCLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDSyxLQUFLLENBQUMsRUFBRVUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDckIsS0FBQSxDQUFBdUIsYUFBQSxDQUFBdkIsS0FBQSxDQUFBd0IsUUFBQSxRQUNDeEIsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQXdCLGNBQWMsT0FBRyxFQUNsQjFCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNEIsUUFBUTtjQUNSQyxPQUFPLEVBQUMsVUFBVTtjQUNsQlosSUFBSSxFQUFDLGFBQWE7Y0FDbEJhLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDVixNQUFNLEVBQUVBLE1BQU07Y0FDZEwsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCa0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNDLFdBQVc7Y0FDckRmLEtBQUssRUFBRVgsUUFBUSxDQUFDeUI7WUFBVyxFQUMxQixFQUNGL0IsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDcEIsVUFBVSxFQUFFQSxVQUFVO2NBQUVxQixJQUFJLEVBQUM7WUFBUyxFQUFHLENBQy9DLENBQ0QsQ0FDRyxFQUNWbEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDaERyQyxLQUFBLENBQUF1QixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUN6Q3RDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ2QsU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVHhDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDcEIsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDaEMsQ0FDRCxDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQTRCLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBNkMsTUFBQSxHQUFBN0MsT0FBQTtVQUtNLFNBQVU4QyxlQUFlQSxDQUFDO1lBQUU5QjtVQUFVLENBQUU7WUFDN0MsT0FDQzRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ21CLE1BQUEsQ0FBQUcsS0FBSyxPQUFHLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBSixNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWlELFlBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0QsVUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUdNLFNBQVVtRCxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRTNDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUVoRCxNQUFNMEMsT0FBTyxHQUFHLENBQ2Y7Y0FDQ2hDLEtBQUssRUFBRSxrQkFBa0I7Y0FDekJZLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ29CLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUMsa0JBQWtCO2FBQ2xFLEVBQ0Q7Y0FDQ2hDLEtBQUssRUFBRSxxQkFBcUI7Y0FDNUJZLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ29CLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUMscUJBQXFCO2FBQ3JFLEVBQ0Q7Y0FDQ2hDLEtBQUssRUFBRSxxQkFBcUI7Y0FDNUJZLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ29CLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUMscUJBQXFCO2FBQ3JFLENBQ0Q7WUFFRCxNQUFNaEMsS0FBSyxHQUFHWCxRQUFRLEVBQUU0QyxRQUFRLEVBQUVDLE1BQU0sR0FBRzdDLFFBQVEsQ0FBQzRDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHRixPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU1uQyxRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEIsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNyQyxhQUFhLENBQ2xDdUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQ2xDQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQ3pCQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Y0FDL0JMLEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ3lDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQVUsQ0FBQztjQUM3Q3BELFFBQVEsQ0FBQ3FELFNBQVMsQ0FBQ1AsS0FBSyxDQUFDckMsYUFBYSxDQUFDRSxLQUFLLENBQUM7WUFDOUMsQ0FBQztZQUNELE9BQ0N3QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3QixVQUFBLENBQUFhLGFBQWEsT0FBRyxFQUNqQm5CLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBbUIsR0FDckNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDb0IsUUFBUSxDQUFDQyxNQUFNLENBQUNkLEtBQUssQ0FBTSxFQUNqREksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUN5QixVQUFVLENBQUNvQixRQUFRLENBQUNDLE1BQU0sQ0FBQ3BCLFdBQVcsQ0FBUSxDQUN0RCxFQUNOVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFpRSxhQUFhO2NBQ2I1QyxLQUFLLEVBQUMscUJBQXFCO2NBQzNCdUIsSUFBSSxFQUFDLG1CQUFtQjtjQUN4QnNCLE9BQU8sRUFBRWhELFFBQVE7Y0FDakJ1QixLQUFLLEVBQUVoQyxLQUFLLENBQUN5QixVQUFVLENBQUNvQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDYztZQUFpQixFQUNoRSxFQUNGdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFpRSxhQUFhO2NBQ2I1QyxLQUFLLEVBQUMscUJBQXFCO2NBQzNCdUIsSUFBSSxFQUFDLG1CQUFtQjtjQUN4QnNCLE9BQU8sRUFBRWhELFFBQVE7Y0FDakJ1QixLQUFLLEVBQUVoQyxLQUFLLENBQUN5QixVQUFVLENBQUNvQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZTtZQUFpQixFQUNoRSxFQUNGdkIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFpRSxhQUFhO2NBQ2I1QyxLQUFLLEVBQUMsa0JBQWtCO2NBQ3hCdUIsSUFBSSxFQUFDLGdCQUFnQjtjQUNyQnNCLE9BQU8sRUFBRWhELFFBQVE7Y0FDakJ1QixLQUFLLEVBQUVoQyxLQUFLLENBQUN5QixVQUFVLENBQUNvQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZ0I7WUFBYyxFQUM3RCxDQUNHLENBQ0csRUFDVnhCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUM1QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUIsWUFBQSxDQUFBb0Isb0JBQW9CLFFBQ3BCekIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1QixZQUFBLENBQUFxQixpQkFBaUIsUUFDakIxQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTJDLEdBQzVEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBWSxHQUMxQmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBMkMsT0FBTztjQUFDQyxJQUFJLEVBQUM7WUFBa0IsRUFBRyxDQUM5QixFQUNOQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ2lDLFFBQVEsQ0FBQy9CLEtBQUssQ0FBTSxFQUNuREksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQUVwQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ2lDLFFBQVEsQ0FBQzlCLFFBQVEsQ0FBUSxDQUMxRSxDQUNELENBQ0UsQ0FDVSxFQUVwQkcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1QixZQUFBLENBQUF1QixrQkFBa0IsUUFDbEI1QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUFrQyxTQUFTO2NBQUNDLElBQUksRUFBQztZQUFVLEVBQUcsQ0FDeEIsQ0FHYyxDQUNDLENBQ2xCLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRkEsSUFBQU8sTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFnQk0sU0FBVTJFLGFBQWFBLENBQUM7WUFDN0IvQyxTQUFTO1lBQ1RnRCxRQUFRLEdBQUcsS0FBSztZQUNoQjdDLE9BQU8sR0FBRyxTQUFTO1lBQ25CWSxJQUFJO1lBQ0prQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsRUFBRSxHQUFHLFFBQVE7WUFDYkMsUUFBUTtZQUNSeEMsS0FBSztZQUNMTixXQUFXO1lBQ1grQyxNQUFNLEdBQUcsUUFBUTtZQUNqQkM7VUFBUSxDQUNzQjtZQUM5QixNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd4QyxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTSxDQUFDd0UsS0FBSyxFQUFFN0UsS0FBSyxDQUFDLEdBQUcsSUFBQVAsTUFBQSxDQUFBcUYsUUFBUSxFQUFDLDJCQUEyQixDQUFDO1lBRTVELElBQUksQ0FBQ0QsS0FBSyxFQUFFO1lBRVo3QyxLQUFLLEdBQUdBLEtBQUssSUFBSWhDLEtBQUssQ0FBQytFLEtBQUssQ0FBQ04sTUFBTSxDQUFDLENBQUN6QyxLQUFLO1lBQzFDTixXQUFXLEdBQUdBLFdBQVcsSUFBSTFCLEtBQUssQ0FBQytFLEtBQUssQ0FBQ04sTUFBTSxDQUFDLENBQUMvQyxXQUFXO1lBRTVELE1BQU1zRCxVQUFVLEdBQUdBLENBQUEsS0FBTUosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztZQUN2QyxNQUFNTSxhQUFhLEdBQUdsQyxLQUFLLElBQUc7Y0FDN0JBLEtBQUssQ0FBQ21DLGVBQWUsRUFBRTtjQUN2QkYsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVELE1BQU1HLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsTUFBTWIsUUFBUSxFQUFFO2NBQ2hCVSxVQUFVLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTUksT0FBTyxHQUFHYixFQUFFLEtBQUssTUFBTSxHQUFHaEYsTUFBQSxDQUFBaUUsYUFBYSxHQUFHVSxXQUFBLENBQUFtQixNQUFNO1lBQ3RELE9BQ0NqRCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNrRSxPQUFPO2NBQ1BoRSxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJvRCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJKLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjdDLE9BQU8sRUFBRUEsT0FBTztjQUNoQlksSUFBSSxFQUFFQSxJQUFJO2NBQ1ZILEtBQUssRUFBRXFDLE9BQU87Y0FDZFosT0FBTyxFQUFFd0I7WUFBYSxHQUVyQlAsUUFBUSxDQUNBLEVBQ1RDLElBQUksSUFDSnZDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0MsTUFBQSxDQUFBcUIsWUFBWTtjQUNaQyxVQUFVLEVBQUU7Z0JBQ1gvRCxLQUFLLEVBQUV4QixLQUFLLENBQUN3RixPQUFPLENBQUNDLE9BQU87Z0JBQzVCbEUsT0FBTyxFQUFFO2VBQ1Q7Y0FDRG1FLFNBQVMsRUFBRTtnQkFDVmxFLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ0csTUFBTTtnQkFDM0JwRSxPQUFPLEVBQUUsU0FBUztnQkFDbEJpRCxRQUFRLEVBQUU7ZUFDVjtjQUNEb0IsSUFBSTtjQUNKVCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJVLFFBQVEsRUFBRWI7WUFBVSxHQUVwQjVDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtjLEtBQUssQ0FBTSxFQUNoQkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLFlBQUlRLFdBQVcsQ0FBSyxDQUNmLENBRVAsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFGQSxJQUFBbkMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRUEsSUFBQXNHLGVBQUEsR0FBQXRHLE9BQUE7VUFFTSxTQUFVdUcscUJBQXFCQSxDQUFDLEVBQUU7WUFDdkMsTUFBTTtjQUFFL0YsS0FBSztjQUFFQyxRQUFRO2NBQUUrRixLQUFLO2NBQUVDO1lBQVksQ0FBRSxHQUFHLElBQUFyRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3JFLE1BQU0sR0FBR0UsT0FBTyxDQUFDLEdBQUdULEtBQUssQ0FBQ1UsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUM5RSxNQUFNLEdBQUcyRixVQUFVLENBQUMsR0FBR3ZHLEtBQUssQ0FBQ1UsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxJQUFBWixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUFFLE1BQU1pRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsTUFBTTFGLFVBQVUsR0FBR0wsSUFBSSxJQUFHO2NBQ3pCLElBQUlBLElBQUksS0FBSyxPQUFPLElBQUlGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0NILE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ2hCOztjQUdEQSxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxNQUFNYSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNYixJQUFJLEdBQUdGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBQVYsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUMsRUFBRWUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUF2QixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUVVLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFFdEQsTUFBTVAsUUFBUSxHQUFHc0MsS0FBSyxJQUFHO2NBQ3hCOUMsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUVhLFdBQVcsRUFBRXFCLEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0U7Y0FBSyxDQUFFLENBQUM7WUFDekQsQ0FBQztZQUVELE9BQ0NqQixLQUFBLENBQUF1QixhQUFBLENBQUF2QixLQUFBLENBQUF3QixRQUFBLFFBQ0N4QixLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDckIsT0FBQSxDQUFBd0IsY0FBYyxPQUFHLEVBQ2xCMUIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDYixJQUFJLEVBQUMsYUFBYTtjQUNsQlksT0FBTyxFQUFDLFVBQVU7Y0FDbEJJLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXO2NBQ3JEZixLQUFLLEVBQUVYLFFBQVEsQ0FBQ3lCLFdBQVc7Y0FDM0JqQixRQUFRLEVBQUVBO1lBQVEsRUFDakIsRUFDRmQsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDQyxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQ3ZCLENBQ0QsQ0FDRyxFQUNWbEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDaERyQyxLQUFBLENBQUF1QixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUN6Q3RDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ2QsU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVHhDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUyxPQUFHLENBQ1IsRUFFTmpDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzRFLGVBQUEsQ0FBQW5ELGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBUCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBMkcsU0FBQSxHQUFBM0csT0FBQTtVQUVBLElBQUE0RyxhQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZHLGNBQUEsR0FBQTdHLE9BQUE7VUFDTSxTQUFVOEcsVUFBVUEsQ0FBQztZQUFFQztVQUFPLENBQUU7WUFDckMsTUFBTTtjQUFFdkcsS0FBSztjQUFFZ0csS0FBSztjQUFFUSxNQUFNO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQy9ELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU1VLGFBQWEsR0FBRzFHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUztZQUNuRCxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ21HLE1BQU0sQ0FBQ0ksU0FBUyxFQUFFRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQzdFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUM2RyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHL0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0rRyxZQUFZLEdBQUdBLENBQUEsS0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztZQUM3QyxNQUFNekcsUUFBUSxHQUFHc0MsS0FBSyxJQUFHO2NBQ3hCK0QsVUFBVSxDQUFDL0QsS0FBSyxDQUFDc0UsTUFBTSxDQUFDekcsS0FBSyxDQUFDO1lBQy9CLENBQUM7WUFDRCxJQUFBbkIsTUFBQSxDQUFBd0IsU0FBUyxFQUNSLENBQUNoQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFDcEIsTUFBSztjQUNKRSxVQUFVLENBQUM3RyxRQUFRLENBQUMyRyxTQUFTLENBQUNHLE9BQU8sQ0FBQztZQUN2QyxDQUFDLEVBQ0QsaUJBQWlCLENBQ2pCO1lBRUQsTUFBTU8sUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQnJILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ1csS0FBSyxFQUFFO2NBQzFCdEgsUUFBUSxDQUFDYyxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUNELE1BQU15RyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQkosWUFBWSxFQUFFO1lBQ2YsQ0FBQztZQUNELE1BQU1LLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekJSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJoSCxRQUFRLENBQUMyRyxTQUFTLENBQUMvRixHQUFHLENBQUM7Z0JBQUVrRyxPQUFPLEVBQUVGO2NBQU8sQ0FBRSxDQUFDO2NBQzVDLE1BQU01RyxRQUFRLENBQUNjLElBQUksRUFBRTtjQUNyQmtHLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJHLFlBQVksRUFBRTtZQUNmLENBQUM7WUFDRCxJQUFJLENBQUNGLE1BQU0sSUFBSSxDQUFDakgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDRyxPQUFPLEVBQUU7Y0FDM0MsT0FBTzNFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDa0YsYUFBQSxDQUFBc0Isb0JBQW9CO2dCQUFDL0csSUFBSSxFQUFDLFNBQVM7Z0JBQUNnSCxRQUFRLEVBQUVQO2NBQVksRUFBSTs7WUFFdkUsSUFBSSxDQUFDRixNQUFNLElBQUlqSCxRQUFRLENBQUMyRyxTQUFTLENBQUNHLE9BQU8sRUFBRTtjQUMxQyxPQUNDM0UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpRixTQUFBLENBQUF5QixRQUFRO2dCQUFDZixPQUFPLEVBQUU1RyxRQUFRLENBQUMyRyxTQUFTLENBQUNHO2NBQU8sRUFBSSxDQUM1QyxFQUVOM0UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2dCQUFRRSxTQUFTLEVBQUM7Y0FBOEIsR0FDL0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Z0JBQUNsRCxJQUFJLEVBQUMsTUFBTTtnQkFBQ3NCLE9BQU8sRUFBRTJELFlBQVk7Z0JBQUU3RixPQUFPLEVBQUMsU0FBUztnQkFBQ2lELFFBQVE7Y0FBQSxHQUNuRWlDLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3FDLElBQUksQ0FDakIsRUFDVHpGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDbUYsY0FBQSxDQUFBbEMsYUFBYTtnQkFBQ2hDLElBQUksRUFBQyxRQUFRO2dCQUFDbUMsUUFBUSxFQUFFZ0QsUUFBUTtnQkFBRS9GLE9BQU8sRUFBQyxTQUFTO2dCQUFDaUQsUUFBUTtjQUFBLEdBQ3pFaUMsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNaLENBQ1IsQ0FDUDs7WUFJTCxNQUFNQyxHQUFHLEdBQUcsaUJBQWlCZixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUM3RCxNQUFNZ0IsYUFBYSxHQUFHLHdCQUNyQm5CLE9BQU8sQ0FBQ29CLE1BQU0sR0FBRyxJQUFJLEdBQUlwQixPQUFPLENBQUNvQixNQUFNLEdBQUcsSUFBSSxHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUksRUFDckYsRUFBRTtZQUNGLE9BQ0M3RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF3SSxJQUFJO2NBQUM5RyxTQUFTLEVBQUMsOEJBQThCO2NBQUMrRyxRQUFRLEVBQUVWO1lBQU0sR0FDOURyRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JiLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkUsSUFBSSxFQUFDLFNBQVM7Y0FDZHlELFFBQVEsRUFBRTRDLFFBQVE7Y0FDbEJwRyxLQUFLLEVBQUVpRyxPQUFPO2NBQ2RsRixXQUFXLEVBQUUrRSxhQUFhLENBQUMwQixJQUFJLENBQUNyQixPQUFPLENBQUNwRjtZQUFXLEVBQ2xELENBQ0csRUFDTlMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBRTRHO1lBQWEsR0FDM0JoSSxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ3lCLFVBQVUsRSxLQUFHLElBQUksR0FBR3hCLE9BQU8sQ0FBQ29CLE1BQU0sQ0FDNUQsQ0FDQSxFQUVQN0YsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDNUIsT0FBTyxFQUFFK0QsYUFBYTtjQUFFakcsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lELFFBQVE7Y0FBQ0osUUFBUSxFQUFFNEM7WUFBUSxHQUMzRVAsV0FBVyxDQUFDakIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1R2RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNrQyxPQUFPLEVBQUVnRSxNQUFNO2NBQUVyRCxRQUFRLEVBQUU0QztZQUFRLEdBQzNEUCxXQUFXLENBQUNqQixPQUFPLENBQUN6RSxJQUFJLENBQ2pCLENBQ0QsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pHQSxJQUFBcUIsTUFBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVBLElBQUE4SSxHQUFBLEdBQUE5SSxPQUFBO1VBR0EsSUFBQStJLGFBQUEsR0FBQS9JLE9BQUE7VUFFTSxTQUFVZ0osdUJBQXVCQSxDQUFDLEVBQW9DO1lBQzNFLE1BQU07Y0FDTHhJLEtBQUs7Y0FDTGdHLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTdHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTtjQUFFdUk7WUFBYSxDQUFFLEdBQUcsSUFBQUYsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUM5QyxNQUFNQyxVQUFVLEdBQUdGLGFBQWE7WUFFaEMsT0FDQ3JHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQU0sU0FBUztjQUNUeEgsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQnlILElBQUksRUFBRTdJLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ3lCLEtBQUs7Y0FDbENOLFdBQVcsRUFBRTFCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ21CO1lBQVcsR0FFL0NVLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQVEsUUFBUTtjQUFDckYsT0FBTyxFQUFFa0YsVUFBVTtjQUFFcEgsT0FBTyxFQUFDO1lBQVMsR0FDOUNrRixXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ04sQ0FDSyxDQUNWO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUF0SixNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFHQSxJQUFBd0osS0FBQSxHQUFBeEosT0FBQTtVQUVNLFNBQVV5SixrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFaEosUUFBUTtjQUFFRCxLQUFLO2NBQUVnRztZQUFLLENBQUUsR0FBRyxJQUFBcEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN2RCxNQUFNLENBQUNnSixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHeEosS0FBSyxDQUFDVSxRQUFRLENBQUNKLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3NDLE1BQU0sQ0FBQztZQUVyRSxJQUFBekosTUFBQSxDQUFBd0IsU0FBUyxFQUNSLENBQUNoQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFDcEIsTUFBSztjQUNKdUMsU0FBUyxDQUFDO2dCQUFFLEdBQUdsSixRQUFRLENBQUMyRyxTQUFTLENBQUNzQztjQUFNLENBQUUsQ0FBQztZQUM1QyxDQUFDLEVBQ0QsZ0JBQWdCLENBQ2hCO1lBRUQsT0FDQ3ZKLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDOEgsS0FBQSxDQUFBSSxzQkFBc0I7Y0FBQ3ZILElBQUksRUFBQztZQUFTLEVBQUcsRUFDekNsQyxLQUFBLENBQUF1QixhQUFBLENBQUM4SCxLQUFBLENBQUFJLHNCQUFzQjtjQUFDdkgsSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUNyQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBeUcsR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTZHLGNBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBK0ksYUFBQSxHQUFBL0ksT0FBQTtVQUdPLE1BQU00SixzQkFBc0IsR0FBR0EsQ0FBQztZQUFFdkg7VUFBSSxDQUFFLEtBQUk7WUFDbEQsTUFBTTtjQUFFbUUsS0FBSztjQUFFL0YsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU07Y0FBRWtEO1lBQU0sQ0FBRSxHQUFHakosUUFBUSxDQUFDMkcsU0FBUztZQUNyQyxNQUFNO2NBQUU2QixhQUFhO2NBQUV6QixRQUFRO2NBQUVxQztZQUFXLENBQUUsR0FBRyxJQUFBZCxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBRXJFLE1BQU1ZLEdBQUcsR0FBRyxDQUFDLENBQUNySixRQUFRLENBQUMyRyxTQUFTLENBQUNzQyxNQUFNLEdBQUdySCxJQUFJLENBQUM7WUFDL0MsTUFBTTBILGNBQWMsR0FBR3hHLEtBQUssSUFBRztjQUM5QjBGLGFBQWEsQ0FBQyxDQUFDMUYsS0FBSyxDQUFDckMsYUFBYSxDQUFDRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsTUFBTTBHLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE9BQU8rQixXQUFXLENBQUMsQ0FBQ3hILElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNMkgsWUFBWSxHQUFHLENBQUN2SixRQUFRLENBQUMyRyxTQUFTLENBQUMvRSxJQUFJLENBQUMsRUFBRW9HLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSTtZQUVuRSxPQUNDN0YsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixHQUMvQmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQzZDLEtBQUssQ0FBQzVILElBQUksQ0FBQyxDQUFNLEVBQ25ELENBQUN5SCxHQUFHLEdBQ0psSCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNFcUksWUFBWSxHQUNacEgsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUF3QixHQUN0Q3BCLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDOEMsS0FBSyxDQUFDQyxPQUFPLENBQ3RDLEdBRVB2SCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDcEIsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUM4QyxLQUFLLENBQUNFLFNBQVMsQ0FFL0MsQ0FDQyxHQUNBLElBQUksQ0FDSCxFQUNOeEgsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQ0VvSSxHQUFHLEdBQ0hsSCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBQ3pEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUF1QixXQUFXO2NBQUNDLEdBQUcsRUFBRVosTUFBTSxDQUFDckgsSUFBSSxDQUFDLENBQUNpSTtZQUFHLEVBQUksRUFDdEMxSCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ21GLGNBQUEsQ0FBQWxDLGFBQWE7Y0FDYi9DLFNBQVMsRUFBQyxRQUFRO2NBQ2xCaUQsT0FBTyxFQUFFb0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTTtjQUNuQzNGLElBQUksRUFBQyxRQUFRO2NBQ2JvQyxFQUFFLEVBQUMsTUFBTTtjQUNURCxRQUFRLEVBQUVnRCxRQUFRO2NBQ2xCbEQsUUFBUSxFQUFFNEMsUUFBUTtjQUNsQnpGLE9BQU8sRUFBQztZQUFTLEVBQ2hCLENBQ0csR0FFTmEsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUFRLFFBQVE7Y0FDUjFFLFFBQVEsRUFBRSxDQUFDb0YsWUFBWTtjQUN2QnhDLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnBHLEtBQUssRUFBRWlCLElBQUk7Y0FDWDRCLE9BQU8sRUFBRThGLGNBQWM7Y0FDdkJoSSxPQUFPLEVBQUM7WUFBUyxHQUVoQmtGLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FFOUIsQ0FDSSxDQUNEO1VBRVIsQ0FBQztVQUFDZ0IsT0FBQSxDQUFBWCxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUYsSUFBQTNKLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUF3SyxLQUFBLEdBQUF4SyxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQSxJQUFBd0osS0FBQSxHQUFBeEosT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ00sU0FBVXlLLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQ0xoSyxRQUFRO2NBQ1IrRixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ2dILE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcvRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsTUFBTSxDQUFDMkcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUMyRyxTQUFTLENBQUNJLFFBQVEsQ0FBQztZQUMzRSxNQUFNO2NBQUVrQztZQUFNLENBQUUsR0FBR2pKLFFBQVEsQ0FBQzJHLFNBQVM7WUFDckMsSUFBQW5ILE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ08sU0FBUyxDQUFDLEtBQUssQ0FBQztjQUNoQkYsV0FBVyxDQUFDaEgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDSSxRQUFRLENBQUM7WUFDekMsQ0FBQyxDQUFDO1lBRUYsTUFBTWtELEtBQUssR0FBRyxDQUFDLENBQUNoQixNQUFNLEdBQUdpQixNQUFNLENBQUNDLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDakQsTUFBTTVCLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0JMLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTWhILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3lELFlBQVksRUFBRTtjQUV2Q3BELFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQ0M3RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDOEksS0FBQSxDQUFBTSxJQUFJO2NBQUNsSixTQUFTLEVBQUMsZUFBZTtjQUFDOEksS0FBSyxFQUFFQSxLQUFLO2NBQUVLLE9BQU8sRUFBRXZCLEtBQUEsQ0FBQUksc0JBQXNCO2NBQUU3RSxFQUFFLEVBQUM7WUFBSyxFQUFHLEUsSUFDckYsRUFDTm5DLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBOEIsR0FDL0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ2xELElBQUksRUFBQyxRQUFRO2NBQUNzQixPQUFPLEVBQUU2RCxRQUFRO2NBQUUvRixPQUFPLEVBQUMsU0FBUztjQUFDaUQsUUFBUTtZQUFBLEdBQ2pFaUMsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNuQixDQUNELENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQVEsR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFnTCxXQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUErSSxhQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVWtJLG9CQUFvQkEsQ0FBQztZQUFFL0csSUFBSTtZQUFFZ0g7VUFBUSxDQUFFO1lBQ3RELE1BQU07Y0FDTDFILFFBQVE7Y0FDUkQsS0FBSztjQUNMZ0csS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sQ0FBQzZELGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3RJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLEdBQUdzSyxPQUFPLENBQUMsR0FBR3ZJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUMyRyxTQUFTLENBQUNqRyxJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNO2NBQUVzRyxXQUFXO2NBQUUyRDtZQUFlLENBQUUsR0FBRyxJQUFBckMsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUM3RCxNQUFNbUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNckcsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDbkUsUUFBUSxDQUFDK0I7WUFBSyxDQUFFO1lBRTlDLElBQUF2QyxNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENLLFdBQVcsQ0FBQ2hILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDO2NBQ3hDMkQsT0FBTyxDQUFDMUssUUFBUSxDQUFDMkcsU0FBUyxDQUFDakcsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsT0FDQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQU0sU0FBUztjQUNUeEgsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQnlILElBQUksRUFBRTdJLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ3lCLEtBQUs7Y0FDbENOLFdBQVcsRUFBRTFCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ21CO1lBQVcsR0FFL0NVLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxRQUFRO2NBQUNmLE9BQU8sRUFBRWtFO1lBQVEsR0FDbERsQixXQUFXLENBQUNqQixPQUFPLENBQUMwQixNQUFNLENBQ25CLEVBQ1Q5RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQVEsUUFBUTtjQUFDckYsT0FBTyxFQUFFb0gsV0FBVztjQUFFdEosT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLNkM7WUFBUSxHQUM1RHFDLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDTixDQUdLLEVBQ1gwQixlQUFlLElBQ2ZySSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NKLFdBQUEsQ0FBQU0sZUFBZTtjQUNmbEYsSUFBSSxFQUFFNkUsZUFBZTtjQUNyQk0sUUFBUTtjQUNSL0ksS0FBSyxFQUFFMEUsYUFBYSxDQUFDc0UsVUFBVSxDQUFDaEosS0FBSztjQUNyQ04sV0FBVyxFQUFFZ0YsYUFBYSxDQUFDc0UsVUFBVSxDQUFDdEosV0FBVztjQUNqRDZFLE9BQU8sRUFBRXNFLFdBQVc7Y0FDcEJsQyxVQUFVLEVBQUVpQztZQUFlLEVBRTVCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQXhJLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUdBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtELFVBQUEsR0FBQWxELE9BQUE7VUFFTSxTQUFVeUwsYUFBYUEsQ0FBQztZQUFFdEssSUFBSTtZQUFFZ0g7VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FDTDFILFFBQVE7Y0FDUkQsS0FBSztjQUNMZ0csS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUN1SyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd0SSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDMkcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUMyRyxTQUFTLENBQUNJLFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUcyRCxPQUFPLENBQUMsR0FBR3ZJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUMyRyxTQUFTLENBQUNqRyxJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNa0ssV0FBVyxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU5RCxJQUFBaEwsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDSyxXQUFXLENBQUNoSCxRQUFRLENBQUMyRyxTQUFTLENBQUNJLFFBQVEsQ0FBQztjQUN4QzJELE9BQU8sQ0FBQzFLLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ2pHLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE1BQU15RCxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNuRSxRQUFRLENBQUMrQixLQUFLLElBQUksQ0FBQy9CLFFBQVEsQ0FBQzJHLFNBQVMsRUFBRUc7WUFBTyxDQUFFO1lBRTlFLE9BQ0MzRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUFNLFNBQVM7Y0FDVHhILFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0J5SCxJQUFJLEVBQUU3SSxLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUN5QixLQUFLO2NBQ2xDTixXQUFXLEVBQUUxQixLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUNtQjtZQUFXLEdBRS9DVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnRCxXQUFBLENBQUFtQixNQUFNO2NBQUM5RCxPQUFPLEVBQUMsU0FBUztjQUFDaUQsUUFBUTtjQUFDZixPQUFPLEVBQUVrRTtZQUFRLEdBQ2xEbEIsV0FBVyxDQUFDakIsT0FBTyxDQUFDMEIsTUFBTSxDQUNuQixFQUNUOUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUFRLFFBQVE7Y0FBQ3JGLE9BQU8sRUFBRW9ILFdBQVc7Y0FBRXRKLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBSzZDO1lBQVEsR0FDNURxQyxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ04sQ0FFSyxFQUNYMEIsZUFBZSxJQUFJckksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3QixVQUFBLENBQUF3SSx5QkFBeUI7Y0FBQ3JKLElBQUksRUFBRWxCLElBQUk7Y0FBRTRGLE9BQU8sRUFBRXNFO1lBQVcsRUFBSSxDQUNqRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBekksTUFBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQWdMLFdBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE0TCxRQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQTZMLEtBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBOEwsT0FBQSxHQUFBOUwsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUErSSxhQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVStMLGFBQWFBLENBQUM7WUFBRTNGLElBQUk7WUFBRVc7VUFBTyxDQUFFO1lBQzlDLE1BQU07Y0FBRXZHLEtBQUs7Y0FBRWdHLEtBQUs7Y0FBRVEsTUFBTTtjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUMvRCxNQUFNO2NBQUV1RztZQUFXLENBQUUsR0FBR1QsS0FBSztZQUM3QixNQUFNVSxhQUFhLEdBQUcxRyxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVM7WUFDbkQsTUFBTSxHQUFHRSxVQUFVLENBQUMsR0FBRzFFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDbUcsTUFBTSxDQUFDSSxTQUFTLEVBQUVHLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDdEUsTUFBTSxDQUFDeUUsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JKLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNxTCxPQUFPLEVBQUV4RixVQUFVLENBQUMsR0FBRzlELE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNLENBQUNzTCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHeEosTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQzdELE1BQU13SyxXQUFXLEdBQUdBLENBQUEsS0FBTVksWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNO2NBQUVLO1lBQVMsQ0FBRSxHQUFHLElBQUF0RCxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzFDLElBQUFqSixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENFLFVBQVUsQ0FBQzdHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0csT0FBTyxDQUFDO2NBQ3RDYixVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDTixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1rRyxTQUFTLEdBQUdBLENBQUEsS0FBSyxDQUFFLENBQUM7WUFDMUIsTUFBTUMsSUFBSSxHQUFHLEVBQUU7WUFDZixNQUFNdEwsUUFBUSxHQUFHc0MsS0FBSyxJQUFHO2NBQ3hCNkksYUFBYSxDQUFDN0ksS0FBSyxDQUFDckMsYUFBYSxDQUFDc0wsT0FBTyxDQUFDckwsSUFBSSxDQUFDO1lBQ2hELENBQUM7WUFFRG9MLElBQUksQ0FBQ0UsSUFBSSxDQUNSN0osTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpSyxLQUFBLENBQUFlLEdBQUc7Y0FBQ0MsR0FBRyxFQUFDLG9CQUFvQjtjQUFDeEwsSUFBSSxFQUFDO1lBQVMsR0FDMUMrRixhQUFhLENBQUMrQyxLQUFLLENBQUMxQyxPQUFPLENBQ3ZCLENBQ047WUFFRCxJQUFJOUcsUUFBUSxDQUFDMkcsU0FBUyxDQUFDRyxPQUFPLEVBQUU7Y0FDL0JvRCxNQUFNLENBQUNDLElBQUksQ0FBQzFELGFBQWEsQ0FBQytDLEtBQUssQ0FBQyxDQUFDMkMsT0FBTyxDQUFDdkssSUFBSSxJQUFHO2dCQUMvQyxJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN4QmtLLElBQUksQ0FBQ0UsSUFBSSxDQUNSN0osTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpSyxLQUFBLENBQUFlLEdBQUc7a0JBQUN2TCxJQUFJLEVBQUVrQixJQUFJO2tCQUFFc0ssR0FBRyxFQUFFdEs7Z0JBQUksR0FDeEI2RSxhQUFhLENBQUMrQyxLQUFLLENBQUM1SCxJQUFJLENBQUMsQ0FDckIsQ0FDTjtjQUNGLENBQUMsQ0FBQzs7WUFFSCxPQUNDTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxRyxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsc0JBQXNCO2NBQUNtRixPQUFPLEVBQUVBO1lBQU8sR0FDbEZuRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQTBNLG9CQUFvQjtjQUFDWixVQUFVLEVBQUVBLFVBQVU7Y0FBRWQsV0FBVyxFQUFFQTtZQUFXLEVBQUksRUFFMUV6SSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2lLLEtBQUEsQ0FBQXFCLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFLENBQUM7Y0FBRXJMLFNBQVMsRUFBQyx1QkFBdUI7Y0FBQ1gsUUFBUSxFQUFFQTtZQUFRLEdBQzdFMkIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpSyxLQUFBLENBQUF1QixJQUFJLFFBQUVYLElBQUksQ0FBUSxFQUNuQjNKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaUssS0FBQSxDQUFBd0IsS0FBSyxRQUNMdkssTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNrSyxRQUFBLENBQUE5RSxVQUFVO2NBQUNDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEVBQ2hDbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtSyxLQUFBLENBQUF1QixZQUFZO2NBQUNqTSxJQUFJLEVBQUM7WUFBVyxFQUFHLEVBQ2pDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtSyxLQUFBLENBQUF1QixZQUFZO2NBQUNqTSxJQUFJLEVBQUM7WUFBVSxFQUFHLEVBQ2hDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSyxPQUFBLENBQUFyQyxrQkFBa0IsT0FBRyxDQUNmLENBQ08sRUFFaEI3RyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NKLFdBQUEsQ0FBQU0sZUFBZTtjQUNmbEYsSUFBSSxFQUFFNEYsU0FBUztjQUNmVCxRQUFRO2NBQ1IvSSxLQUFLLEVBQUUwRSxhQUFhLENBQUNzRSxVQUFVLENBQUNoSixLQUFLO2NBQ3JDTixXQUFXLEVBQUVnRixhQUFhLENBQUNzRSxVQUFVLENBQUN0SixXQUFXO2NBQ2pENkUsT0FBTyxFQUFFc0UsV0FBVztjQUNwQmlCLFNBQVMsRUFBRUEsU0FBUztjQUNwQm5ELFVBQVUsRUFBRWtELFNBQVMsQ0FBQ0YsVUFBVTtZQUFDLEVBQ2hDLENBQ0ssQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBdkosTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVUrTSxvQkFBb0JBLENBQUM7WUFBRVosVUFBVTtZQUFFZDtVQUFXLENBQUU7WUFDL0QsTUFBTTtjQUFFN0s7WUFBSyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV0QyxNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBRW5ELE9BQ0N4RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUt3RixhQUFhLENBQUMxRSxLQUFLLENBQU0sQ0FDdEI7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBa0MsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXdLLEtBQUEsR0FBQXhLLE9BQUE7VUFFTSxTQUFVK0QsYUFBYUEsQ0FBQyxFQUFFO1lBQy9CLE1BQU07Y0FBRXlDLEtBQUs7Y0FBRWhHO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDN0MsTUFBTSxDQUFDc0wsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JKLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2RCxNQUFNd00sUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJwQixZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFDRCxPQUNDckosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxrQkFDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDNUUsS0FBSyxDQUFNLEVBQzlDSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzVCLE9BQU8sRUFBRW9KLFFBQVE7Y0FBRXRMLE9BQU8sRUFBQztZQUFNLEdBQ3ZDdkIsS0FBSyxDQUFDMkcsYUFBYSxDQUFDcEcsS0FBSyxDQUFDaUYsT0FBTyxDQUFDbkMsR0FBRyxDQUM5QixDQUNKLENBQ0UsRUFDVGpCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDOEksS0FBQSxDQUFBOEMsWUFBWTtjQUFDRCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUMzQixFQUNUckIsU0FBUyxJQUFJcEosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE2TCxhQUFhO2NBQUMzRixJQUFJLEVBQUU0RixTQUFTO2NBQUVqRixPQUFPLEVBQUVBLENBQUEsS0FBTWtGLFlBQVksQ0FBQyxLQUFLO1lBQUMsRUFBSSxDQUNsRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBbE0sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQSxTQUFTdU4sWUFBWUEsQ0FBQ2xFLElBQUksRUFBRWUsU0FBUztZQUNwQyxPQUFPZixJQUFJLENBQUNaLE1BQU0sR0FBRzJCLFNBQVMsR0FBR2YsSUFBSSxDQUFDbUUsU0FBUyxDQUFDLENBQUMsRUFBRXBELFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBR2YsSUFBSTtVQUM3RTtVQUVNLFNBQVVpRSxZQUFZQSxDQUFDO1lBQUVEO1VBQVEsQ0FBRTtZQUN4QyxNQUFNO2NBQUU3RyxLQUFLO2NBQUVoRyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDdkQsTUFBTSxDQUFDc0wsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JKLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNO2NBQUVvRztZQUFXLENBQUUsR0FBR1QsS0FBSztZQUU3QixNQUFNdkMsT0FBTyxHQUFHVixLQUFLLElBQUc7Y0FDdkI7Y0FDQUEsS0FBSyxDQUFDbUMsZUFBZSxFQUFFO2NBQ3ZCakYsUUFBUSxDQUFDMkcsU0FBUyxDQUFDVyxLQUFLLEVBQUU7Y0FDMUJ0SCxRQUFRLENBQUNjLElBQUksRUFBRTtZQUNoQixDQUFDO1lBQ0QsT0FDQ3FCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0VsQixRQUFRLENBQUMyRyxTQUFTLENBQUNHLE9BQU8sR0FDMUIzRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQyxnQ0FBZ0M7Y0FBQ3FDLE9BQU8sRUFBRW9KO1lBQVEsR0FDL0RFLFlBQVksQ0FBQzlNLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0csT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUM3QzNFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBME4sVUFBVTtjQUFDN0wsU0FBUyxFQUFDLFFBQVE7Y0FBQ2UsSUFBSSxFQUFDLFFBQVE7Y0FBQ3NCLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQzVELENBQ0QsR0FFTnJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ3JHLEtBQUssQ0FBUSxDQUM3QyxDQUVQLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQTJELFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVTBOLGtCQUFrQkEsQ0FBQztZQUNsQ3ZNLElBQUk7WUFDSmtGLFFBQVE7WUFDUlU7VUFBTyxDQU1QO1lBQ0EsTUFBTTtjQUFFQyxNQUFNO2NBQUV2RyxRQUFRO2NBQUVELEtBQUs7Y0FBRWdHO1lBQUssQ0FBRSxHQUFHLElBQUFwRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQy9ELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ21ILGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2hMLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN3RyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHMUUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNtRyxNQUFNLENBQUNJLFNBQVMsR0FBR2pHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1RSxNQUFNLENBQUNxRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1JLFFBQVEsR0FBR3NDLEtBQUssSUFBRztjQUN4QitELFVBQVUsQ0FBQy9ELEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQ3pHLEtBQUssQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTTRHLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUloQixNQUFNLENBQUNrRixPQUFPLEVBQUU7Z0JBQ25CMEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHZILFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNVixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXLENBQUUsQ0FBQztZQUNoQyxNQUFNa0ksYUFBYSxHQUFHQSxDQUFBLEtBQU1ELGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNM0YsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QlIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQmhILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQy9GLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdrRztjQUFPLENBQUUsQ0FBQztjQUMzQyxNQUFNNUcsUUFBUSxDQUFDYyxJQUFJLENBQUM7Z0JBQUUsQ0FBQ0osSUFBSSxHQUFHa0c7Y0FBTyxDQUFFLENBQUM7Y0FDeENJLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJWLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxNQUFNeUIsYUFBYSxHQUFHLHdCQUNyQm5CLE9BQU8sQ0FBQ29CLE1BQU0sR0FBRyxJQUFJLEdBQUlwQixPQUFPLENBQUNvQixNQUFNLEdBQUcsSUFBSSxHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUksRUFDckYsRUFBRTtZQUVGLE9BQ0M3RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF3SSxJQUFJO2NBQUM5RyxTQUFTLEVBQUMsOEJBQThCO2NBQUMrRyxRQUFRLEVBQUVWO1lBQU0sR0FDOURyRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JiLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkUsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZDLEtBQUssRUFBRWlHLE9BQU87Y0FDZGxGLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ2tILE1BQU0sQ0FBQ3ZHLElBQUksQ0FBQyxDQUFDMk07WUFBUSxFQUN2QyxDQUNHLEVBQ05sTCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFNEc7WUFBYSxHQUMzQmhJLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDeUIsVUFBVSxFLEtBQUcsSUFBSSxHQUFHeEIsT0FBTyxDQUFDb0IsTUFBTSxDQUM1RCxDQUNBLEVBQ1A3RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnRCxXQUFBLENBQUFtQixNQUFNO2NBQUM1QixPQUFPLEVBQUUrRCxhQUFhO2NBQUVqRyxPQUFPLEVBQUMsU0FBUztjQUFDaUQsUUFBUTtZQUFBLEdBQ3hEaUMsV0FBVyxDQUFDakIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1R2RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNrQyxPQUFPLEVBQUVnRSxNQUFNO2NBQUVyRCxRQUFRLEVBQUUsQ0FBQ3lDLE9BQU8sSUFBSUc7WUFBUSxHQUN2RVAsV0FBVyxDQUFDakIsT0FBTyxDQUFDekUsSUFBSSxDQUNqQixDQUNELEVBQ1JvTSxlQUFlLElBQ2YvSyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytDLE1BQUEsQ0FBQXFCLFlBQVk7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVVLFFBQVEsRUFBRXdIO1lBQWEsR0FDMURqTCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FBTXVGLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0csTUFBTSxDQUFPLENBRXhDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUEsSUFBQXZELE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMkcsU0FBQSxHQUFBM0csT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQStOLE1BQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBZ08sbUJBQUEsR0FBQWhPLE9BQUE7VUFHQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBNkcsY0FBQSxHQUFBN0csT0FBQTtVQUVNLFNBQVVvTixZQUFZQSxDQUFDO1lBQUVqTTtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFcUYsS0FBSztjQUFFL0YsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcvRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDb04sUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3RMLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUMyRyxTQUFTLENBQUNqRyxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNZ04sY0FBYyxHQUFHQSxDQUFBLEtBQU14RyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBQzdDLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFBWixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEM4RyxXQUFXLENBQUN6TixRQUFRLENBQUMyRyxTQUFTLENBQUNqRyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7WUFFRixJQUFJdUcsTUFBTSxFQUFFLE9BQU85RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NNLG1CQUFBLENBQUFOLGtCQUFrQjtjQUFDdk0sSUFBSSxFQUFFQSxJQUFJO2NBQUU0RixPQUFPLEVBQUVhLFlBQVk7Y0FBRXZCLFFBQVEsRUFBRXVCO1lBQVksRUFBSTtZQUNwRyxJQUFJLENBQUNxRyxRQUFRLEVBQUUsT0FBT3JMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDcU0sTUFBQSxDQUFBdEMsYUFBYTtjQUFDdEssSUFBSSxFQUFFQSxJQUFJO2NBQUVnSCxRQUFRLEVBQUVQO1lBQVksRUFBSTtZQUUzRSxNQUFNRSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkwsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQmhILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQy9GLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUc7Y0FBRSxDQUFFLENBQUM7Y0FDdENWLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFLENBQUNKLElBQUksR0FBRztjQUFFLENBQUUsQ0FBQztjQUM3QnNHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQ0M3RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFtQixHQUNyQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaUYsU0FBQSxDQUFBeUIsUUFBUTtjQUFDZixPQUFPLEVBQUU0RztZQUFRLEVBQUksQ0FDdEIsRUFDVnJMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0MsR0FDaEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ2xELElBQUksRUFBQyxNQUFNO2NBQUNzQixPQUFPLEVBQUVrSyxjQUFjO2NBQUV2SixRQUFRLEVBQUU0QyxRQUFRO2NBQUV6RixPQUFPLEVBQUMsU0FBUztjQUFDaUQsUUFBUTtZQUFBLEdBQ3pGaUMsV0FBVyxDQUFDakIsT0FBTyxDQUFDcUMsSUFBSSxDQUNqQixFQUNUekYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtRixjQUFBLENBQUFsQyxhQUFhO2NBQUNHLFFBQVEsRUFBRWdELFFBQVE7Y0FBRW5GLElBQUksRUFBQyxRQUFRO2NBQUNpQyxRQUFRLEVBQUU0QyxRQUFRO2NBQUV6RixPQUFPLEVBQUMsU0FBUztjQUFDaUQsUUFBUTtZQUFBLEdBQzdGaUMsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNaLENBQ1IsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBMUYsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVrSixrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFekk7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN6QyxNQUFNLENBQUM4RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1vSSxhQUFhLEdBQUcsTUFBQUEsQ0FBT3lCLEtBQUssR0FBRzBELFNBQVMsS0FBSTtjQUNqRCxJQUFJO2dCQUNIM0csV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzZCLGFBQWEsQ0FBQ3lCLEtBQUssQ0FBQztlQUM3QyxDQUFDLE9BQU8yRCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUNUcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1vQyxXQUFXLEdBQUcsTUFBQUEsQ0FBT2EsS0FBSyxHQUFHMEQsU0FBUyxLQUFJO2NBQy9DLElBQUk7Z0JBQ0gzRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNaEgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDeUMsV0FBVyxDQUFDYSxLQUFLLENBQUM7ZUFDM0MsQ0FBQyxPQUFPMkQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVDVHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNMkQsZUFBZSxHQUFHLE1BQUFBLENBQU87Y0FBRW9EO1lBQUssQ0FBRSxLQUFJO2NBQzNDLElBQUk7Z0JBQ0gsTUFBTUMsSUFBSSxHQUFHLE1BQU1oTyxRQUFRLENBQUMyRyxTQUFTLENBQUNtQyxRQUFRLENBQUMsU0FBUyxFQUFFaUYsS0FBSyxDQUFDO2VBQ2hFLENBQUMsT0FBT0gsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDOztZQUVoQixDQUFDO1lBRUQsTUFBTUssZ0JBQWdCLEdBQUcsTUFBQUEsQ0FBT3JNLElBQUksRUFBRW1NLEtBQUssS0FBSTtjQUM5Qy9HLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTWhILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ21DLFFBQVEsQ0FBQ2xILElBQUksRUFBRW1NLEtBQUssQ0FBQztjQUU5Q0csVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZsSCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsT0FBTztjQUNOd0IsYUFBYTtjQUNibUMsZUFBZTtjQUNmc0QsZ0JBQWdCO2NBQ2hCbEgsUUFBUTtjQUNSQyxXQUFXO2NBQ1hvQyxXQUFXO2NBQ1h3QyxTQUFTLEVBQUU7Z0JBQ1YzQyxNQUFNLEVBQUVULGFBQWE7Z0JBQ3JCMUIsT0FBTyxFQUFFNkQsZUFBZTtnQkFDeEI2QyxRQUFRLEVBQUVTLGdCQUFnQjtnQkFDMUJFLFFBQVEsRUFBRUYsZ0JBQWdCO2dCQUMxQkcsU0FBUyxFQUFFSDs7YUFFWjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQSxJQUFBM08sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVThPLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFdE8sS0FBSztjQUFFQyxRQUFRO2NBQUVnRztZQUFZLENBQUUsR0FBRyxJQUFBckcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdULEtBQUssQ0FBQ1UsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTU0sUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFFQyxJQUFJO2dCQUFFQztjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEWCxRQUFRLENBQUNZLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdDO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNRSxNQUFNLEdBQUdiLFFBQVEsQ0FBQ2MsSUFBSTtZQUM1QixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNYixJQUFJLEdBQUdGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQVYsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUMsRUFBRWUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUF2QixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUVVLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFFdEQsT0FDQ3JCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQXZCLEtBQUEsQ0FBQXdCLFFBQUEsUUFDQ3hCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0J6QixLQUFBLENBQUF1QixhQUFBLENBQUNyQixPQUFBLENBQUF3QixjQUFjLE9BQUcsRUFFbEIxQixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUlgsSUFBSSxFQUFDLGFBQWE7Y0FDbEJhLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDZixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJjLE9BQU8sRUFBQyxVQUFVO2NBQ2xCVCxNQUFNLEVBQUVBLE1BQU07Y0FDZGEsV0FBVyxFQUFFM0IsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNDLFdBQVc7Y0FDckRmLEtBQUssRUFBRVgsUUFBUSxDQUFDeUI7WUFBVyxFQUMxQixFQUNGL0IsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDQyxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQ3ZCLENBQ0QsQ0FDRyxFQUVWbEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDaERyQyxLQUFBLENBQUF1QixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUN6Q3RDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ2QsU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVHhDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDcEIsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDaEMsQ0FDRCxDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQXlELE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVUrTyxrQkFBa0JBLENBQUM7WUFBRTNJLElBQUk7WUFBRVc7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQ1MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNO2NBQ0xKLFFBQVE7Y0FDUkQsS0FBSyxFQUFFO2dCQUFFeUIsVUFBVSxFQUFFekI7Y0FBSyxDQUFFO2NBQzVCZ0csS0FBSyxFQUFFO2dCQUNOUyxXQUFXLEVBQUU7a0JBQUVqQjtnQkFBTztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBNUYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixJQUFJLENBQUMwRixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1ULFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSDhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1oSCxRQUFRLENBQUN1TyxZQUFZLEVBQUU7Z0JBQzdCakksT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPc0gsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNXLEtBQUssQ0FBQ1osQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q1RyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQzdFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytDLE1BQUEsQ0FBQXFCLFlBQVk7Y0FDWk0sSUFBSTtjQUNKVyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJwQixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJJLFVBQVUsRUFBRTtnQkFBRS9ELEtBQUssRUFBRWdFLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVsRSxLQUFLLEVBQUVnRSxPQUFPLENBQUNHO2NBQU0sQ0FBRTtjQUNwQ0UsUUFBUSxFQUFFVTtZQUFPLEdBRWpCbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUMwTyxXQUFXLENBQUMxTSxLQUFLLENBQU0sRUFDbENJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxZQUFJbEIsS0FBSyxDQUFDME8sV0FBVyxDQUFDaE4sV0FBVyxDQUFLLENBQ3hCLENBQ2I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQVUsTUFBQSxHQUFBNUMsT0FBQTtVQU1PLE1BQU1tUCxxQkFBcUIsR0FBQTVFLE9BQUEsQ0FBQTRFLHFCQUFBLEdBQUd2TSxNQUFBLENBQUFHLE9BQUssQ0FBQ3FNLGFBQWEsQ0FBQyxFQUE2QixDQUFDO1VBQ2hGLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU16TSxNQUFBLENBQUFHLE9BQUssQ0FBQ3VNLFVBQVUsQ0FBQ0gscUJBQXFCLENBQUM7VUFBQzVFLE9BQUEsQ0FBQThFLHdCQUFBLEdBQUFBLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1B0RixJQUFBM0ssV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBY00sU0FBVXVQLHdCQUF3QkEsQ0FBQztZQUFFcE8sSUFBSTtZQUFFSCxVQUFVO1lBQUU0RCxRQUFRO1lBQUU0SyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUM5RyxNQUFNO2NBQ0xoUCxLQUFLO2NBQ0xDLFFBQVE7Y0FDUitGLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNeUgsUUFBUSxHQUFHQSxDQUFBLEtBQU1uSCxVQUFVLENBQUMsTUFBTSxDQUFDO1lBRXpDLE9BQ0M0QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDTSxLQUFLLENBQUMwQixLQUFLLENBQU0sRUFDNUJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDOUQsT0FBTyxFQUFDLE1BQU07Y0FBQ2lELFFBQVE7Y0FBQ2YsT0FBTyxFQUFFa0U7WUFBUSxHQUMvQzNILEtBQUssQ0FBQ2lQLGNBQWMsQ0FBQ3pKLE9BQU8sQ0FBQzBKLFdBQVcsQ0FDakMsQ0FDSixDQUNFLEVBQ1Q5TSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUNtQixXQUFXLENBQVEsQ0FDNUMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBVSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFFQSxJQUFBMlAsVUFBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUE4SSxHQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRUEsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQTRQLFNBQUEsR0FBQTVQLE9BQUE7VUFOQTs7VUFRTSxTQUFVNlAsd0JBQXdCQSxDQUFDO1lBQUV4SixRQUFRO1lBQUV5SjtVQUFVLENBQUU7WUFDaEUsTUFBTSxDQUFDdEksUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNO2NBQ0xtRyxNQUFNO2NBQ054RyxLQUFLO2NBQ0xnRyxLQUFLO2NBQ0wvRixRQUFRO2NBQ1IrRixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ3FQLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdwTixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTW9QLEdBQUcsR0FBR3JOLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbU4sTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNakksTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QlIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNO2dCQUFFMEk7Y0FBUyxDQUFFLEdBQUduSixNQUFNLENBQUNsRyxLQUFLO2NBRWxDLE1BQU1zUCxNQUFNLEdBQUcsRUFBRTtjQUNqQkQsU0FBUyxDQUFDdkQsT0FBTyxDQUFDLENBQUN5RCxRQUFRLEVBQUVDLEtBQUssS0FBSTtnQkFDckMsSUFBSSxDQUFDRCxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDQSxRQUFRLEVBQUVqTixPQUFPLENBQUNxRixNQUFNLElBQUk4SCxLQUFLLENBQUNGLFFBQVEsRUFBRUcsYUFBYSxDQUFDLEVBQUU7a0JBQ3ZGSixNQUFNLENBQUMzRCxJQUFJLENBQUM2RCxLQUFLLENBQUM7a0JBQ2xCOztnQkFFRCxNQUFNRyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pOLE9BQU8sQ0FBQ3NOLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUN2UCxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNsRSxJQUFJcVAsT0FBTyxDQUFDaEksTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDdkIySCxNQUFNLENBQUMzRCxJQUFJLENBQUM2RCxLQUFLLENBQUM7O2NBRXBCLENBQUMsQ0FBQztjQUVGLElBQUlGLE1BQU0sQ0FBQzNILE1BQU0sRUFBRTtnQkFDbEJ1SCxTQUFTLENBQUNJLE1BQU0sQ0FBQztnQkFDakIzSSxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNsQjs7Y0FHRCxNQUFNaEgsUUFBUSxDQUFDYyxJQUFJLEVBQUU7Y0FDckJrRyxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCcUksVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVEbE4sTUFBQSxDQUFBRyxPQUFLLENBQUM2TixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNiLE1BQU0sQ0FBQ3RILE1BQU0sRUFBRTtjQUNwQixNQUFNb0ksU0FBUyxHQUFHWixHQUFHLENBQUNhLE9BQU87Y0FDN0JELFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUMsQ0FBQ25FLE9BQU8sQ0FBQyxDQUFDK0QsSUFBSSxFQUFFTCxLQUFLLEtBQUk7Z0JBQ3ZGLElBQUksQ0FBQ1AsTUFBTSxDQUFDaUIsUUFBUSxDQUFDVixLQUFLLENBQUMsRUFBRTtnQkFDN0JLLElBQUksQ0FBQ2hOLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2dCQUNyQzhNLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQUs7a0JBQ3JDTixJQUFJLENBQUNoTixTQUFTLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDekMsQ0FBQyxDQUFDO2dCQUNGc04sVUFBVSxDQUFDQyxRQUFRLENBQUM7a0JBQUVDLEdBQUcsRUFBRSxDQUFDO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQVEsQ0FBRSxDQUFDO2dCQUNuRDtjQUNELENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDdEIsTUFBTSxDQUFDLENBQUM7WUFFWixNQUFNdUIsWUFBWSxHQUFHO2NBQ3BCdkIsTUFBTTtjQUNOQzthQUNBO1lBRUQsT0FDQ3BOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDa08sU0FBQSxDQUFBVCxxQkFBcUIsQ0FBQ29DLFFBQVE7Y0FBQ25RLEtBQUssRUFBRWtRO1lBQVksR0FDbEQxTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQW1SLFdBQVcsT0FBRyxFQUNmNU8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVN1TyxHQUFHLEVBQUVBLEdBQUc7Y0FBRXJPLFNBQVMsRUFBQztZQUF5QyxHQUVyRWdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0gsR0FBQSxDQUFBMkksYUFBYTtjQUFDeEMsS0FBSyxFQUFFYyxNQUFNLENBQUN0SCxNQUFNLEdBQUdqSSxLQUFLLENBQUN1UCxNQUFNLENBQUMyQixjQUFjLEdBQUc7WUFBRSxFQUFJLEVBQzFFOU8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpTyxVQUFBLENBQUFnQyxvQkFBb0I7Y0FBQzVCLE1BQU0sRUFBRUEsTUFBTTtjQUFFQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUM5RHBOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBbUQsR0FDcEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxRQUFRO2NBQUNmLE9BQU8sRUFBRW9DO1lBQVEsR0FDbERZLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0csTUFBTSxDQUNuQixFQUNUdkQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnRCxXQUFBLENBQUFtQixNQUFNO2NBQUM5RCxPQUFPLEVBQUMsU0FBUztjQUFDa0MsT0FBTyxFQUFFZ0UsTUFBTTtjQUFFckQsUUFBUSxFQUFFLENBQUMsQ0FBQ21MLE1BQU0sQ0FBQ3RILE1BQU0sSUFBSWpCO1lBQVEsR0FDOUVQLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3pFLElBQUksQ0FDakIsQ0FDRCxDQUNBLENBQ3NCO1VBRW5DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JGQSxJQUFBcUIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUE0UixZQUFBLEdBQUE1UixPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVNlIsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVyUjtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3RDLElBQUk7Y0FBRXNGO1lBQU8sQ0FBRSxHQUFHeEYsS0FBSyxDQUFDaVAsY0FBYztZQUN0QyxNQUFNO2NBQUVxQztZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE9BQ0NuUCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTBELEdBQzVFZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnRCxXQUFBLENBQUFtQixNQUFNO2NBQUM5RCxPQUFPLEVBQUMsTUFBTTtjQUFDa0MsT0FBTyxFQUFFNk47WUFBTyxHQUNyQzlMLE9BQU8sQ0FBQzBKLFdBQVcsQ0FDWixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQTlNLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0UixZQUFBLEdBQUE1UixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVWdTLG9CQUFvQkEsQ0FBQztZQUFFcE4sUUFBUTtZQUFFcU4sS0FBSztZQUFFQztVQUFNLENBQUU7WUFDL0QsTUFBTTtjQUNMMVIsS0FBSyxFQUFFO2dCQUFFaVAsY0FBYyxFQUFFalA7Y0FBSztZQUFFLENBQ2hDLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNO2NBQUVvUjtZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE1BQU05TixPQUFPLEdBQUdWLEtBQUssSUFBRztjQUN2QixJQUFJLENBQUMyTyxNQUFNLEVBQUU7Z0JBQ1osT0FBT0QsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FFbkJILE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDbFAsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUF5QixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDckQsS0FBSyxFQUFFaEMsS0FBSyxDQUFDd0YsT0FBTyxDQUFDbU0sU0FBUztjQUFFbE8sT0FBTyxFQUFFQSxPQUFPO2NBQUVXLFFBQVEsRUFBRUE7WUFBUSxHQUMxRXBFLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ21NLFNBQVMsQ0FDaEIsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBdlAsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFvUyxPQUFBLEdBQUFwUyxPQUFBO1VBQ0EsSUFBQXdKLEtBQUEsR0FBQXhKLE9BQUE7VUFDQSxJQUFBcVMsT0FBQSxHQUFBclMsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVXNTLGtCQUFrQkEsQ0FBQztZQUFFOUssUUFBUTtZQUFFcEIsSUFBSTtZQUFFbU0sT0FBTztZQUFFdFIsUUFBUTtZQUFFMkQ7VUFBUSxDQUFFO1lBQ2pGLE1BQU0sQ0FBQzROLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUc3UCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFL0MsSUFBSTJHLFFBQVEsRUFBRTtjQUNiLE9BQ0M1RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBZ08sT0FBTztnQkFBQ3pGLE1BQU07Z0JBQUNsTCxPQUFPLEVBQUM7Y0FBUyxFQUFHLENBQy9COztZQUlSLE9BQ0NhLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMFEsT0FBTyxDQUFDYixRQUFRO2NBQ2hCcFEsSUFBSSxFQUFDLGtCQUFrQjtjQUN2QlMsU0FBUyxFQUFDLGtDQUFrQztjQUM1Q1IsS0FBSyxFQUFFbVIsT0FBTztjQUNkSSxJQUFJLEVBQUVuSixLQUFBLENBQUFvSix5QkFBeUI7Y0FDL0IzUixRQUFRLEVBQUVBO1lBQVEsR0FFakIsQ0FBQ21GLElBQUksSUFBSW9NLEtBQUssS0FBSzVQLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMFEsT0FBTyxDQUFDdEgsSUFBSTtjQUFDbEosU0FBUyxFQUFDO1lBQWMsRUFBRyxFQUM3RGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMlEsT0FBQSxDQUFBTCxvQkFBb0I7Y0FBQ0UsTUFBTSxFQUFFOUwsSUFBSSxJQUFJb00sS0FBSztjQUFFNU4sUUFBUSxFQUFFQSxRQUFRO2NBQUVxTixLQUFLLEVBQUVRO1lBQVEsRUFBSSxDQUNsRTtVQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQTdQLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNlMsU0FBQSxHQUFBN1MsT0FBQTtVQUNBLElBQUE0UixZQUFBLEdBQUE1UixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTRQLFNBQUEsR0FBQTVQLE9BQUE7VUFFTSxTQUFVNFMseUJBQXlCQSxDQUFDRSxLQUFLO1lBQzlDLE1BQU07Y0FBRUM7WUFBUyxDQUFFLEdBQUcsSUFBQUYsU0FBQSxDQUFBRyxRQUFRLEVBQUNGLEtBQUssQ0FBQ3hDLEtBQUssQ0FBQztZQUMzQyxNQUFNO2NBQUUyQyxPQUFPO2NBQUU3UixLQUFLLEdBQUc7WUFBRSxDQUFFLEdBQUcwUixLQUFLLENBQUMxUixLQUFLO1lBQzNDLE1BQU07Y0FBRTRGLE1BQU07Y0FBRWtNLFNBQVM7Y0FBRUM7WUFBVSxDQUFFLEdBQUcsSUFBQXZCLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDakUsTUFBTTtjQUFFL0I7WUFBUyxDQUFFLEdBQUcsSUFBQUosU0FBQSxDQUFBUCx3QkFBd0IsR0FBRTtZQUNoRCxNQUFNO2NBQ0w3TyxLQUFLLEVBQUU7Z0JBQUVpUCxjQUFjLEVBQUVqUDtjQUFLLENBQUU7Y0FDaENDO1lBQVEsQ0FDUixHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTZILEdBQUcsR0FBRyxrQ0FBa0MwSyxPQUFPLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxFQUFFO1lBQ3hGLE1BQU1oUyxRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEJ1UCxLQUFLLENBQUNNLFFBQVEsQ0FBQztnQkFBRWhTLEtBQUssRUFBRW1DLEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQ3pHLEtBQUs7Z0JBQUU2UixPQUFPLEVBQUUsQ0FBQyxDQUFDQTtjQUFPLENBQUUsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsTUFBTUksVUFBVSxHQUFHQSxDQUFBLEtBQU1GLFVBQVUsQ0FBQ0wsS0FBSyxDQUFDeEMsS0FBSyxDQUFDO1lBQ2hELE1BQU1nRCxhQUFhLEdBQUcvUCxLQUFLLElBQUc7Y0FDN0IsTUFBTWdRLEtBQUssR0FBR0EsQ0FBQzVDLElBQUksRUFBRUwsS0FBSyxLQUFJO2dCQUM3QixPQUFPQSxLQUFLLEtBQUt3QyxLQUFLLENBQUN4QyxLQUFLLEdBQUc7a0JBQUUsR0FBR0ssSUFBSTtrQkFBRXNDLE9BQU8sRUFBRSxDQUFDQTtnQkFBTyxDQUFFLEdBQUc7a0JBQUUsR0FBR3RDLElBQUk7a0JBQUVzQyxPQUFPLEVBQUU7Z0JBQUssQ0FBRTtjQUM1RixDQUFDO2NBQ0QsTUFBTXhFLElBQUksR0FBR3pILE1BQU0sQ0FBQ3dNLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDO2NBQzlCTCxTQUFTLENBQUN6RSxJQUFJLENBQUM7Y0FDZjtjQUNBO2NBQ0F1QixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUVELE9BQ0NwTixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlELEdBQy9EZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFXLEdBQUVrUixLQUFLLENBQUN4QyxLQUFLLEdBQUcsQ0FBQyxFLElBQVEsRUFFbkQxTixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQXVULEtBQUs7Y0FDTHBSLElBQUksRUFBQyxNQUFNO2NBQ1hqQixLQUFLLEVBQUVBLEtBQUs7Y0FDWjJSLFNBQVMsRUFBRUEsU0FBUztjQUNwQjlSLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQytSLE9BQU8sQ0FBQ3BRO1lBQVcsRUFDckMsRUFDRlMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFlLEdBQ2pDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUEwTixVQUFVO2NBQ1Y5SyxJQUFJLEVBQUMsY0FBYztjQUNuQmYsU0FBUyxFQUFFMkcsR0FBRztjQUNkL0YsS0FBSyxFQUFFaEMsS0FBSyxDQUFDd0YsT0FBTyxDQUFDME4sV0FBVztjQUNoQ3pQLE9BQU8sRUFBRXFQO1lBQWEsRUFDckIsRUFDRjFRLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBME4sVUFBVTtjQUNWOUssSUFBSSxFQUFDLFFBQVE7Y0FDYmYsU0FBUyxFQUFDLDBCQUEwQjtjQUNwQ1ksS0FBSyxFQUFFaEMsS0FBSyxDQUFDd0YsT0FBTyxDQUFDc0MsTUFBTTtjQUMzQnJFLE9BQU8sRUFBRW9QO1lBQVUsRUFDbEIsQ0FDTyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUF6USxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWdMLFdBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUE0UixZQUFBLEdBQUE1UixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVTJULGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFbFQsUUFBUTtjQUFFRCxLQUFLO2NBQUV3RyxNQUFNO2NBQUVSO1lBQUssQ0FBRSxHQUFHLElBQUFwRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRS9ELE1BQU07Y0FBRUk7WUFBSyxDQUFFLEdBQUcsSUFBQThRLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDekMsSUFBSTtjQUFFL0w7WUFBTyxDQUFFLEdBQUd4RixLQUFLLENBQUNpUCxjQUFjO1lBQ3RDLE1BQU0sQ0FBQ3pELFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdySixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTXdLLFdBQVcsR0FBR0EsQ0FBQSxLQUFNWSxZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO1lBQ2xELE1BQU03QyxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFcUY7WUFBSyxDQUFFLEtBQUk7Y0FDdEMsSUFBSTtnQkFDSCxNQUFNb0YsUUFBUSxHQUFHLE1BQU1uVCxRQUFRLENBQUNLLEtBQUssQ0FBQ3lJLFFBQVEsQ0FBQ2lGLEtBQUssRUFBRTtrQkFBRXFGLE9BQU8sRUFBRTdNLE1BQU0sQ0FBQ2xHLEtBQUssQ0FBQytTO2dCQUFPLENBQUUsQ0FBQztnQkFDeEYsTUFBTTFELFNBQVMsR0FBR3lELFFBQVEsQ0FBQ3pELFNBQVMsQ0FBQ3FELEdBQUcsQ0FBQyxDQUFDO2tCQUFFbkQsUUFBUTtrQkFBRWpOLE9BQU87a0JBQUUwUTtnQkFBYyxDQUFFLE1BQU07a0JBQ3BGekQsUUFBUTtrQkFDUmpOLE9BQU87a0JBQ1BvTixhQUFhLEVBQUVzRDtpQkFDZixDQUFDLENBQUM7Z0JBRUhoVCxLQUFLLENBQUMyRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUN2QnlKLFVBQVUsQ0FBQ3ZDLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQjdOLEtBQUssQ0FBQzJHLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ3hCaEgsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztvQkFBRThPLFNBQVMsRUFBRSxDQUFDLEdBQUduSixNQUFNLENBQUNsRyxLQUFLLENBQUNxUCxTQUFTLEVBQUUsR0FBR0EsU0FBUztrQkFBQyxDQUFFLENBQUM7Z0JBQzdFLENBQUMsRUFBRSxHQUFHLENBQUM7ZUFDUCxDQUFDLE9BQU9sQixLQUFLLEVBQUU7Z0JBQ2ZYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDck0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFzRCxHQUN4RWdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0gsR0FBQSxDQUFBUSxRQUFRO2NBQUN2SCxPQUFPLEVBQUMsTUFBTTtjQUFDa0MsT0FBTyxFQUFFb0g7WUFBVyxHQUMzQ3JGLE9BQU8sQ0FBQytOLGlCQUFpQixDQUNoQixFQUNYblIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNzSixXQUFBLENBQUFNLGVBQWU7Y0FDZmxGLElBQUksRUFBRTRGLFNBQVM7Y0FDZmdJLEtBQUssRUFBRXhOLEtBQUssQ0FBQ3lOLEtBQUssQ0FBQ0QsS0FBSztjQUN4QkUsT0FBTyxFQUFFMU4sS0FBSyxDQUFDeU4sS0FBSyxDQUFDQyxPQUFPO2NBQzVCNUgsU0FBUyxFQUFFOUYsS0FBSyxDQUFDeU4sS0FBSyxDQUFDRSxZQUFZO2NBQ25DcE4sT0FBTyxFQUFFc0UsV0FBVztjQUNwQnBFLFdBQVcsRUFBRVQsS0FBSyxDQUFDUyxXQUFXO2NBQzlCekUsS0FBSyxFQUFFaEMsS0FBSyxDQUFDaVAsY0FBYyxDQUFDMkUsY0FBYyxDQUFDNVIsS0FBSztjQUNoRDZSLFlBQVksRUFBRTdULEtBQUssQ0FBQ2lQLGNBQWMsQ0FBQzJFLGNBQWMsQ0FBQ2xTLFdBQVc7Y0FDN0RpSCxVQUFVLEVBQUVBO1lBQVUsRUFDckIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBeUksWUFBQSxHQUFBNVIsT0FBQTtVQUNNLFNBQVVnVCxRQUFRQSxDQUFDMUMsS0FBSztZQUM3QixNQUFNO2NBQUV3QixPQUFPO2NBQUV3QyxJQUFJO2NBQUVuQixVQUFVO2NBQUV6STtZQUFLLENBQUUsR0FBRyxJQUFBa0gsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUVwRSxNQUFNd0MsS0FBSyxHQUFHakUsS0FBSyxJQUFHO2NBQ3JCWSxVQUFVLENBQUN2QyxVQUFVLENBQUMsTUFBTTJGLElBQUksQ0FBQ3hELE9BQU8sQ0FBQ1IsS0FBSyxDQUFDLEVBQUU1TSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM2USxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELE1BQU14QixTQUFTLEdBQUd4UCxLQUFLLElBQUc7Y0FDekIsTUFBTW5DLEtBQUssR0FBR21DLEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDb1QsSUFBSSxFQUFFO2NBRTlDLElBQUlqUixLQUFLLENBQUNvSixHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN4QjtnQkFDQSxJQUFJcEosS0FBSyxDQUFDa1IsUUFBUSxJQUFJbkUsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDbFAsS0FBSyxFQUFFO29CQUNYK1IsVUFBVSxDQUFDN0MsS0FBSyxDQUFDOztrQkFFbEJpRSxLQUFLLENBQUNqRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQi9NLEtBQUssQ0FBQ21SLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVEO2dCQUNBLElBQUlwRSxLQUFLLEdBQUc1RixLQUFLLENBQUNqQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUM3QjhMLEtBQUssQ0FBQ2pFLEtBQUssR0FBRyxDQUFDLENBQUM7a0JBQ2hCOztnQkFFRC9NLEtBQUssQ0FBQ21SLGNBQWMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDdFQsS0FBSyxFQUFFO2dCQUNaMFEsT0FBTyxFQUFFO2dCQUVUWixVQUFVLENBQUN2QyxVQUFVLENBQUMsTUFBSztrQkFDMUI0RixLQUFLLENBQUNqRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztjQUdOLElBQUkvTSxLQUFLLENBQUNvSixHQUFHLEtBQUssV0FBVyxJQUFJLENBQUN2TCxLQUFLLEVBQUU7Z0JBQ3hDbUMsS0FBSyxDQUFDbVIsY0FBYyxFQUFFO2dCQUV0QixJQUFJblIsS0FBSyxDQUFDa1IsUUFBUSxJQUFJbkUsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDbFAsS0FBSyxFQUFFO29CQUNYK1IsVUFBVSxDQUFDN0MsS0FBSyxDQUFDO29CQUNqQmlFLEtBQUssQ0FBQ2pFLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUdqQi9NLEtBQUssQ0FBQ21SLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVELElBQUlwRSxLQUFLLEdBQUcsQ0FBQyxFQUFFNkMsVUFBVSxDQUFDN0MsS0FBSyxDQUFDOztZQUVsQyxDQUFDO1lBQ0QsT0FBTztjQUFFeUM7WUFBUyxDQUFFO1VBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBblEsTUFBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUFvUyxPQUFBLEdBQUFwUyxPQUFBO1VBQ0EsSUFBQTJVLFNBQUEsR0FBQTNVLE9BQUE7VUFDQSxJQUFBNFUsUUFBQSxHQUFBNVUsT0FBQTtVQUVBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVTJSLG9CQUFvQkEsQ0FBQztZQUFFNUIsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUFFaEosTUFBTTtjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUVqRCxNQUFNLENBQUM4RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1JLFFBQVEsR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUUyRztZQUFNLENBQUUsS0FBSTtjQUM5QyxNQUFNc0ksU0FBUyxHQUFHdEksTUFBTSxDQUFDekcsS0FBSyxDQUFDb1MsR0FBRyxDQUFDN0MsSUFBSSxLQUFLO2dCQUMzQ04sUUFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQVE7Z0JBQ3ZCak4sT0FBTyxFQUFFdU4sSUFBSSxDQUFDdk4sT0FBTztnQkFDckJvTixhQUFhLEVBQUVHLElBQUksQ0FBQ0g7ZUFDcEIsQ0FBQyxDQUFDO2NBRUgvUCxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2dCQUFFOE8sU0FBUyxFQUFFLENBQUMsR0FBR0EsU0FBUztjQUFDLENBQUUsQ0FBQztZQUNsRCxDQUFDO1lBRUQsSUFBSTNJLFFBQVEsRUFDWCxPQUNDNUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQWdPLE9BQU87Y0FBQ3pGLE1BQU07Y0FBQ2xMLE9BQU8sRUFBQztZQUFTLEVBQUcsQ0FDL0I7WUFFUixPQUNDYSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzBRLE9BQU8sQ0FBQ2IsUUFBUTtjQUNoQnBRLElBQUksRUFBQyxXQUFXO2NBQ2hCMFQsWUFBWSxFQUFFO2dCQUFFeEUsUUFBUSxFQUFFO2NBQUUsQ0FBRTtjQUM5QnlFLFNBQVM7Y0FDVG5DLElBQUksRUFBRWdDLFNBQUEsQ0FBQUksbUJBQW1CO2NBQ3pCM1QsS0FBSyxFQUFFNEYsTUFBTSxDQUFDbEcsS0FBSyxDQUFDcVAsU0FBUztjQUM3QmxQLFFBQVEsRUFBRUE7WUFBUSxHQUVsQjJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMFEsT0FBTyxDQUFDdEgsSUFBSTtjQUFDbEosU0FBUyxFQUFDO1lBQXFDLEVBQUcsRUFDaEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2tULFFBQUEsQ0FBQS9DLGNBQWMsT0FBRyxDQUNBO1VBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBalAsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnTCxXQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQTZTLFNBQUEsR0FBQTdTLE9BQUE7VUFDQSxJQUFBZ1YsUUFBQSxHQUFBaFYsT0FBQTtVQUNBLElBQUE0UixZQUFBLEdBQUE1UixPQUFBO1VBRUEsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBaVYsS0FBQSxHQUFBalYsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUhBOztVQUtNLFNBQVUrVSxtQkFBbUJBLENBQUNqQyxLQUFLO1lBQ3hDLE1BQU07Y0FBRUM7WUFBUyxDQUFFLEdBQUcsSUFBQUYsU0FBQSxDQUFBRyxRQUFRLEVBQUNGLEtBQUssQ0FBQ3hDLEtBQUssQ0FBQztZQUMzQyxNQUFNO2NBQ0w5UCxLQUFLLEVBQUU7Z0JBQUVpUCxjQUFjLEVBQUVqUDtjQUFLLENBQUU7Y0FDaENDLFFBQVE7Y0FDUnVHLE1BQU07Y0FDTlI7WUFBSyxDQUNMLEdBQUcsSUFBQXBHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDc0wsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JKLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNd0ssV0FBVyxHQUFHQSxDQUFBLEtBQU1ZLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTWtKLGNBQWMsR0FBR0EsQ0FBQzlSLE9BQU8sRUFBRW9OLGFBQWMsS0FBSTtjQUNsRCxNQUFNMkUsWUFBWSxHQUFHM0UsYUFBYSxJQUFJc0MsS0FBSyxDQUFDMVIsS0FBSyxDQUFDb1AsYUFBYTtjQUMvRCxPQUFPcE4sT0FBTyxDQUFDb1EsR0FBRyxDQUFDLENBQUM0QixNQUFNLEVBQUU5RSxLQUFLLE1BQU07Z0JBQUVsUCxLQUFLLEVBQUVnVSxNQUFNO2dCQUFFbkMsT0FBTyxFQUFFM0MsS0FBSyxLQUFLNkU7Y0FBWSxDQUFFLENBQUMsQ0FBQztZQUM1RixDQUFDO1lBQ0QsTUFBTTFHLElBQUksR0FBR3FFLEtBQUssQ0FBQzFSLEtBQUssRUFBRWdDLE9BQU8sR0FBRzhSLGNBQWMsQ0FBQ3BDLEtBQUssQ0FBQzFSLEtBQUssQ0FBQ2dDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDNUUsTUFBTSxDQUFDbVAsT0FBTyxFQUFFOEMsVUFBVSxDQUFDLEdBQUd6UyxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQzROLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTTtjQUFFMEU7WUFBVSxDQUFFLEdBQUcsSUFBQXZCLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFFOUMsTUFBTTlRLFFBQVEsR0FBR3NDLEtBQUssSUFBRztjQUN4QnVQLEtBQUssQ0FBQ00sUUFBUSxDQUFDO2dCQUFFL0MsUUFBUSxFQUFFOU0sS0FBSyxDQUFDc0UsTUFBTSxDQUFDekcsS0FBSztnQkFBRWdDLE9BQU8sRUFBRW1QO2NBQU8sQ0FBRSxDQUFDO1lBQ25FLENBQUM7WUFFRCxNQUFNK0MsU0FBUyxHQUFHQSxDQUFDO2NBQUVwVSxhQUFhLEVBQUU7Z0JBQUVFLEtBQUssRUFBRW1SO2NBQU87WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTWdELGtCQUFrQixHQUFHaEQsT0FBTyxDQUFDaUQsU0FBUyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3hDLE9BQU8sQ0FBQztjQUN0RSxNQUFNekMsYUFBYSxHQUFHK0Usa0JBQWtCLEtBQUssQ0FBQyxDQUFDLEdBQUduSCxTQUFTLEdBQUdtSCxrQkFBa0I7Y0FDaEYsTUFBTUcsUUFBUSxHQUFHO2dCQUFFckYsUUFBUSxFQUFFalAsS0FBSztnQkFBRWdDLE9BQU8sRUFBRW1QLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQzdDLElBQUksSUFBSUEsSUFBSSxDQUFDdlAsS0FBSyxDQUFDO2dCQUFFb1A7Y0FBYSxDQUFFO2NBRTdGc0MsS0FBSyxDQUFDTSxRQUFRLENBQUNzQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU10VSxLQUFLLEdBQUcwUixLQUFLLENBQUMxUixLQUFLLEVBQUVpUCxRQUFRLElBQUksRUFBRTtZQUN6QyxNQUFNZ0QsVUFBVSxHQUFHOVAsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUNtQyxlQUFlLEVBQUU7Y0FDdkIsTUFBTWdGLEtBQUssR0FBR3lJLFVBQVUsQ0FBQ0wsS0FBSyxDQUFDeEMsS0FBSyxDQUFDO2NBQ3JDN1AsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztnQkFBRThPLFNBQVMsRUFBRXpGO2NBQUssQ0FBRSxDQUFDO1lBQ3pDLENBQUM7WUFDRCxNQUFNLENBQUNsRCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU04VSxlQUFlLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2xDLE1BQU1DLE9BQU8sR0FBRyxJQUFJWCxLQUFBLENBQUFZLGNBQWMsRUFBRTtjQUNwQ3hLLFdBQVcsRUFBRTtjQUNic0QsVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZpSCxPQUFPLENBQUNFLE9BQU8sRUFBRTtjQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1IsT0FBT0YsT0FBTztZQUNmLENBQUM7WUFDRCxNQUFNRyxpQkFBaUIsR0FBRyxNQUFBQSxDQUFPO2NBQUV2SDtZQUFLLENBQUUsS0FBSTtjQUM3QyxNQUFNNkIsUUFBUSxHQUFHLE1BQU01UCxRQUFRLENBQUNLLEtBQUssQ0FBQzZVLGVBQWUsQ0FBQztnQkFBRW5ILEtBQUs7Z0JBQUU2QixRQUFRLEVBQUVqUCxLQUFLO2dCQUFFa1AsS0FBSyxFQUFFd0MsS0FBSyxDQUFDeEM7Y0FBSyxDQUFFLENBQUM7Y0FFckc3SSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCeUosVUFBVSxDQUFDdkMsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCO2dCQUNBMEcsVUFBVSxDQUFDSCxjQUFjLENBQUM3RSxRQUFRLENBQUNqTixPQUFPLEVBQUVpTixRQUFRLENBQUNHLGFBQWEsQ0FBQyxDQUFDO2dCQUVwRS9JLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFRCxNQUFNO2NBQUV1TSxLQUFLO2NBQUVFLE9BQU87Y0FBRUM7WUFBWSxDQUFFLEdBQUczTixLQUFLLENBQUN5TixLQUFLO1lBRXBELE9BQ0NyUixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWtDLEdBQ3BEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQyxHQUl6RGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUFFa1IsS0FBSyxDQUFDeEMsS0FBSyxHQUFHLENBQUMsRSxJQUFRLEVBQ25EMU4sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF1VCxLQUFLO2NBQ0x0UixXQUFXLEVBQUUzQixLQUFLLENBQUMyUCxTQUFTLENBQUNoTyxXQUFXO2NBQ3hDaEIsSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRTtjQUNsQkgsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCOFIsU0FBUyxFQUFFQTtZQUFTLEVBQ25CLEVBQ0ZuUSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWUsR0FDakNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQWtOLGlCQUFpQjtjQUNqQnJULElBQUksRUFBQyxTQUFTO2NBQ2RmLFNBQVMsRUFBQyxRQUFRO2NBQ2xCZ0QsUUFBUSxFQUFFLENBQUN4RCxLQUFLLElBQUlBLEtBQUssS0FBSyxFQUFFO2NBQ2hDNkMsT0FBTyxFQUFFMFIsZUFBZTtjQUN4Qm5ULEtBQUssRUFBRWhDLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQzJQO1lBQWUsRUFDbkMsRUFDRi9TLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBME4sVUFBVTtjQUFDOUssSUFBSSxFQUFDLFFBQVE7Y0FBQ2YsU0FBUyxFQUFDLFFBQVE7Y0FBQ3FDLE9BQU8sRUFBRW9QLFVBQVU7Y0FBRTdRLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ3NDO1lBQU0sRUFBSSxDQUN4RixDQUNMLEVBQ04xRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NULFFBQUEsQ0FBQTFDLGtCQUFrQjtjQUNsQjlLLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjVDLFFBQVEsRUFBRSxDQUFDa08sS0FBSyxDQUFDMVIsS0FBSztjQUN0QmdGLElBQUksRUFBRW1NLE9BQU8sRUFBRTlKLE1BQU07Y0FDckI4SixPQUFPLEVBQUVBLE9BQU87Y0FDaEJ0UixRQUFRLEVBQUVxVTtZQUFTLEVBQ2xCLEVBQ0YxUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NKLFdBQUEsQ0FBQU0sZUFBZTtjQUNmMEksS0FBSyxFQUFFQSxLQUFLO2NBQ1pFLE9BQU8sRUFBRUEsT0FBTztjQUNoQjVILFNBQVMsRUFBRTZILFlBQVk7Y0FDdkJsTixXQUFXLEVBQUVULEtBQUssQ0FBQ1MsV0FBVztjQUM5QmIsSUFBSSxFQUFFNEYsU0FBUztjQUNmakYsT0FBTyxFQUFFc0UsV0FBVztjQUNwQjdJLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3lWLFlBQVksQ0FBQ3pULEtBQUs7Y0FDL0I2UixZQUFZLEVBQUU3VCxLQUFLLENBQUN5VixZQUFZLENBQUMvVCxXQUFXO2NBQzVDaUgsVUFBVSxFQUFFNE07WUFBaUIsRUFDNUIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIQSxJQUFBblQsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFrVyxZQUFBLEdBQUFsVyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVW1XLG9CQUFvQkEsQ0FBQztZQUFFdEMsT0FBTztZQUFFdUM7VUFBWSxDQUFFO1lBQzdELE1BQU07Y0FDTDVQLEtBQUs7Y0FDTGhHLEtBQUssRUFBRTtnQkFBRWlQLGNBQWMsRUFBRWpQLEtBQUs7Z0JBQUV1UDtjQUFNLENBQUU7Y0FDeEN0UDtZQUFRLENBQ1IsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU1nUSxNQUFNLEdBQUdDLElBQUksSUFBSUEsSUFBSSxDQUFDdE8sSUFBSSxLQUFLLGdCQUFnQjtZQUNyRCxNQUFNbVIsR0FBRyxHQUFHN0MsSUFBSSxLQUFLO2NBQUV2UCxLQUFLLEVBQUV1UCxJQUFJLENBQUMwRixFQUFFO2NBQUVyVSxLQUFLLEVBQUUyTyxJQUFJLENBQUNuTztZQUFLLENBQUUsQ0FBQztZQUUzRCxNQUFNWSxPQUFPLEdBQUdvRCxLQUFLLENBQUN5TixLQUFLLENBQUNoUyxVQUFVLENBQUN5SSxLQUFLLENBQUNnRyxNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDOEMsR0FBRyxDQUFDQSxHQUFHLENBQUM7WUFDcEUsSUFBSXFCLFlBQVksR0FBRztjQUFFelQsS0FBSyxFQUFFLEVBQUU7Y0FBRVksS0FBSyxFQUFFeEIsS0FBSyxDQUFDcVQsT0FBTyxDQUFDeUM7WUFBVyxDQUFFO1lBRWxFLE1BQU1yVixRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEI5QyxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2dCQUFFd1MsT0FBTyxFQUFFdFEsS0FBSyxDQUFDc0UsTUFBTSxDQUFDekc7Y0FBSyxDQUFFLENBQUM7Y0FDbkQsSUFBSW1DLEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQ3pHLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU15UyxPQUFPLEdBQUdyTixLQUFLLENBQUN5TixLQUFLLENBQUNoUyxVQUFVLENBQUNzVSxHQUFHLENBQUNoVCxLQUFLLENBQUNzRSxNQUFNLENBQUN6RyxLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQ3lTLE9BQU8sQ0FBQ3pNLFNBQVMsQ0FBQ0csT0FBTyxFQUFFO2tCQUMvQjZPLFlBQVksQ0FBQyxDQUFDckcsTUFBTSxDQUFDeUcsbUJBQW1CLENBQUMsQ0FBQztrQkFFMUM7OztjQUdGSixZQUFZLENBQUMsRUFBRSxDQUFDO2NBQ2hCM1YsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztnQkFBRXdTLE9BQU8sRUFBRXRRLEtBQUssQ0FBQ3NFLE1BQU0sQ0FBQ3pHO2NBQUssQ0FBRSxDQUFDO1lBQ3BELENBQUM7WUFFRCxPQUNDd0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxnQkFBUWxCLEtBQUssQ0FBQ3FULE9BQU8sQ0FBQzdSLEtBQUssQ0FBUyxFQUNwQ1ksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3VSxZQUFBLENBQUFPLFdBQVc7Y0FBQ3JWLEtBQUssRUFBRXlTLE9BQU87Y0FBRXpRLE9BQU8sRUFBRSxDQUFDeVIsWUFBWSxFQUFFLEdBQUd6UixPQUFPLENBQUM7Y0FBRW5DLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3RGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUF5RCxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQStOLE1BQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBNkMsTUFBQSxHQUFBN0MsT0FBQTtVQUVNLFNBQVUwVyxzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFbFcsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1FLE1BQU0sR0FBR2IsUUFBUSxDQUFDYyxJQUFJO1lBRTVCLE1BQU04RSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQjVGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDNlYsTUFBTSxFQUFFO2NBQ3ZCL1YsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTWtQLFVBQVUsR0FBR0EsQ0FBQSxLQUFNbFAsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUV6QyxNQUFNZ1csU0FBUyxHQUFHblcsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxJQUFJSixJQUFJLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBR0EsSUFBSTtZQUU3RSxPQUNDUixLQUFBLENBQUF1QixhQUFBLENBQUF2QixLQUFBLENBQUF3QixRQUFBLFFBQ0N4QixLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDckIsT0FBQSxDQUFBd0IsY0FBYyxPQUFHLEVBQ2xCMUIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYSxHQUMzQnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUkUsS0FBSyxFQUFFeEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNGLEtBQUs7Y0FDekNELE9BQU8sRUFBQyxVQUFVO2NBQ2xCWixJQUFJLEVBQUMsYUFBYTtjQUNsQkYsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCSyxNQUFNLEVBQUVBLE1BQU07Y0FDZGEsV0FBVyxFQUFFM0IsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNDLFdBQVc7Y0FDckRmLEtBQUssRUFBRVgsUUFBUSxDQUFDeUI7WUFBVyxFQUMxQixDQUNHLENBQ0QsQ0FDRyxFQUNWL0IsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1TLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFRixTQUFTO2NBQ3BCeFQsT0FBTyxFQUFFO2dCQUNSdEMsS0FBSyxFQUFFWCxLQUFBLENBQUF1QixhQUFBLENBQUNtQixNQUFBLENBQUFrVSxtQkFBbUI7a0JBQUNuVyxPQUFPLEVBQUVBO2dCQUFPLEVBQUk7Z0JBQ2hEZ0ksSUFBSSxFQUFFekksS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBdVAsd0JBQXdCO2tCQUFDeEosUUFBUSxFQUFFQSxRQUFRO2tCQUFFeUosVUFBVSxFQUFFQTtnQkFBVTtlQUMxRTtjQUNEM04sV0FBVyxFQUFFaEMsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcU0sTUFBQSxDQUFBd0Isd0JBQXdCO2dCQUFDcE8sSUFBSSxFQUFFVixRQUFRLENBQUM0QixJQUFJO2dCQUFFckIsVUFBVSxFQUFFQTtjQUFVO1lBQUksRUFDckYsQ0FDRyxDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQWpCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBUU8sTUFBTWdYLGNBQWMsR0FBR0EsQ0FBQztZQUFFckcsSUFBSSxFQUFFOEUsTUFBTTtZQUFFakYsYUFBYTtZQUFFRjtVQUFLLENBQVUsS0FBSTtZQUNoRixNQUFNM04sSUFBSSxHQUFHMk4sS0FBSyxLQUFLRSxhQUFhLEdBQUcsT0FBTyxHQUFHLE9BQU87WUFDeEQsTUFBTWpJLEdBQUcsR0FBRyx1Q0FBdUM1RixJQUFJLEtBQUssT0FBTyxHQUFHLG1CQUFtQixHQUFHLGtCQUFrQixFQUFFO1lBQ2hILE9BQ0NDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFJRSxTQUFTLEVBQUUyRztZQUFHLEdBQ2pCM0YsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFnQixHQUFFZSxJQUFJLEtBQUssT0FBTyxJQUFJQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQWtYLElBQUk7Y0FBQ3RVLElBQUksRUFBRUEsSUFBSTtjQUFFZixTQUFTLEVBQUM7WUFBUyxFQUFHLENBQVEsRUFDdEdnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQW9CLEdBQUU2VCxNQUFNLENBQVEsQ0FDaEQ7VUFFUCxDQUFDO1VBQUNsTCxPQUFBLENBQUF5TSxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJGLElBQUFwVSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWdMLFdBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUdBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQWFNLFNBQVV3UixXQUFXQSxDQUFDO1lBQUV0TSxRQUFRO1lBQUVOLFFBQVE7WUFBRTRLLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ3pGLE1BQU07Y0FDTGhQLEtBQUs7Y0FDTEMsUUFBUTtjQUNSK0YsS0FBSztjQUNMQSxLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQ3VLLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3RJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNcVcsS0FBSyxHQUFHO2NBQUV0UyxRQUFRLEVBQUUsQ0FBQ25FLFFBQVEsQ0FBQzBXLFFBQVEsSUFBSXZTO1lBQVEsQ0FBRTtZQUMxRCxNQUFNd1MsVUFBVSxHQUFHQSxDQUFBLEtBQU1sTSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFFN0QsTUFBTTlCLFVBQVUsR0FBR3FGLEtBQUssSUFBRztjQUMxQixPQUFPL04sUUFBUSxDQUFDSyxLQUFLLENBQUN5SSxRQUFRLENBQUNpRixLQUFLLEVBQUU7Z0JBQUUsR0FBR2dCO2NBQWUsQ0FBRSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDNU0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLEVBQzVCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQVEsUUFBUTtjQUFBLEdBQUs0TixLQUFLO2NBQUVqVCxPQUFPLEVBQUVtVCxVQUFVO2NBQUVyVixPQUFPLEVBQUMsTUFBTTtjQUFDc1YsTUFBTSxFQUFFO1lBQUssR0FDcEVwUSxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ04sQ0FDRSxFQUNSckUsUUFBUSxFQUNSK0YsZUFBZSxJQUNmckksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNzSixXQUFBLENBQUFNLGVBQWU7Y0FDZmxGLElBQUksRUFBRTZFLGVBQWU7Y0FDckIrSSxLQUFLLEVBQUV4TixLQUFLLENBQUN5TixLQUFLLENBQUNELEtBQUs7Y0FDeEIxSCxTQUFTLEVBQUU5RixLQUFLLENBQUN5TixLQUFLLENBQUNFLFlBQVk7Y0FDbkNwTixPQUFPLEVBQUVxUSxVQUFVO2NBQ25CNVUsS0FBSyxFQUFFaEMsS0FBSyxDQUFDOFcsTUFBTSxDQUFDOVUsS0FBSztjQUN6QjZSLFlBQVksRUFBRTdULEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3BWLFdBQVc7Y0FDdENpSCxVQUFVLEVBQUVBO1lBQVUsRUFFdkIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBdkcsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1WCxZQUFBLEdBQUF2WCxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBd0ssS0FBQSxHQUFBeEssT0FBQTtVQUVNLFNBQVUrVyxtQkFBbUJBLENBQUM7WUFBRW5XO1VBQU8sQ0FBRTtZQUM5QyxNQUFNLENBQUM0VyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHN1UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU07Y0FBRW1HLE1BQU07Y0FBRXZHLFFBQVE7Y0FBRWlYLFFBQVE7Y0FBRWxSLEtBQUs7Y0FBRWhHO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDekUsTUFBTWlYLFdBQVcsR0FBR25SLEtBQUssQ0FBQ1MsV0FBVyxDQUFDakIsT0FBTztZQUM3QyxNQUFNLENBQUM0UixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqVixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDaVgsV0FBVyxFQUFFQyxVQUFVLENBQUMsR0FBR25WLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2RCxNQUFNbVgsYUFBYSxHQUFHQSxDQUFBLEtBQU1ELFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFDcEQsTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTW5YLEtBQUssR0FBR0wsUUFBUSxDQUFDSyxLQUFLLENBQUNvWCxPQUFPLEVBQUU7Y0FDdENSLFFBQVEsQ0FBQztnQkFBRTVXO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFBYixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUVtWCxRQUFRLEVBQUUsaUJBQWlCLENBQUM7WUFFeEQsTUFBTTVNLFdBQVcsR0FBR0EsQ0FBQSxLQUFNd00sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU1WLEtBQUssR0FBRztjQUFFalQsT0FBTyxFQUFFb0gsV0FBVztjQUFFekcsUUFBUSxFQUFFbkUsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssSUFBSU4sUUFBUSxDQUFDMkcsU0FBUyxDQUFDckc7WUFBSyxDQUFFO1lBQ2xHLE1BQU1vWCxNQUFNLEdBQUc1VSxLQUFLLElBQUkzQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQU13WCxTQUFTLEdBQUc3VSxLQUFLLElBQUl3VSxVQUFVLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBQ25ELE1BQU1PLFlBQVksR0FBRztjQUFFcFUsT0FBTyxFQUFFbVUsU0FBUztjQUFFeFQsUUFBUSxFQUFFbkUsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssSUFBSU4sUUFBUSxDQUFDMkcsU0FBUyxDQUFDckc7WUFBSyxDQUFFO1lBQ3ZHLE1BQU11WCxVQUFVLEdBQUcsQ0FBQ1IsV0FBVyxHQUFHSCxXQUFXLENBQUNZLEtBQUssR0FBR1osV0FBVyxDQUFDeFIsTUFBTTtZQUV4RSxPQUNDdkQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUNNLEtBQUssQ0FBQzBCLEtBQUssQ0FBTSxFQUM1QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQyxHQUM5Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDOUQsT0FBTyxFQUFDLE1BQU07Y0FBQ2tDLE9BQU8sRUFBRWtVLE1BQU07Y0FBRXhWLElBQUksRUFBQztZQUFRLEdBQ25EZ1YsV0FBVyxDQUFDdFAsSUFBSSxDQUNULEVBQ1R6RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxNQUFNO2NBQUEsR0FBS3NXLFlBQVk7Y0FBRTFWLElBQUksRUFBQztZQUFNLEdBQ2xEMlYsVUFBVSxDQUNILEVBQ1QxVixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxNQUFNO2NBQUEsR0FBS21WLEtBQUs7Y0FBRXZVLElBQUksRUFBQztZQUFRLEdBQzdDZ1YsV0FBVyxDQUFDclAsTUFBTSxDQUNYLENBQ0osQ0FDRSxFQUNUMUYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4SSxLQUFBLENBQUFnTyxrQkFBa0I7Y0FBQ0MsVUFBVSxFQUFFWCxXQUFXO2NBQUVZLE1BQU0sRUFBRVY7WUFBYSxFQUFJLENBQ2pFLEVBQ05wVixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzZWLFlBQUEsQ0FBQXhJLGtCQUFrQjtjQUFDM0ksSUFBSSxFQUFFd1IsZUFBZTtjQUFFN1EsT0FBTyxFQUFFc0U7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUF6SSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXdLLEtBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBMlksYUFBQSxHQUFBM1ksT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTRZLGlCQUFBLEdBQUE1WSxPQUFBO1VBRU0sU0FBVXdZLGtCQUFrQkEsQ0FBQztZQUFFQyxVQUFVO1lBQUVDO1VBQU0sQ0FBRTtZQUN4RCxNQUFNO2NBQUUxUixNQUFNO2NBQUV2RyxRQUFRO2NBQUVpWCxRQUFRO2NBQUVsWCxLQUFLO2NBQUVnRztZQUFLLENBQUUsR0FBRyxJQUFBcEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN6RSxNQUFNLENBQUM2WCxLQUFLLEVBQUVNLFFBQVEsQ0FBQyxHQUFHalcsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNtRyxNQUFNLENBQUNsRyxLQUFLLENBQUNxUCxTQUFTLENBQUM7WUFDaEUsTUFBTSxDQUFDMkksVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR25XLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNdVgsU0FBUyxHQUFHcFIsTUFBTSxJQUFHO2NBQzFCNlIsUUFBUSxDQUFDN1IsTUFBTSxDQUFDO2NBQ2hCLE1BQU1sRyxLQUFLLEdBQUc7Z0JBQUUsR0FBR2tHLE1BQU0sQ0FBQ2xHO2NBQUssQ0FBRTtjQUNqQ0EsS0FBSyxDQUFDcVAsU0FBUyxHQUFHLENBQUMsR0FBR29JLEtBQUssQ0FBQztjQUU1QjlYLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDTyxHQUFHLENBQUNQLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsSUFBSTJYLFVBQVUsRUFBRTtjQUNmLE1BQU0zVCxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2dCQUMzQmlVLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE1BQU10WSxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2tCQUFFOE8sU0FBUyxFQUFFb0k7Z0JBQUssQ0FBRSxDQUFDO2dCQUM5QyxNQUFNOVgsUUFBUSxDQUFDYyxJQUFJLEVBQUU7Z0JBQ3JCd1gsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDcEJMLE1BQU0sRUFBRTtjQUNULENBQUM7Y0FFRCxPQUNDOVYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaVgsYUFBQSxDQUFBSyxPQUFPLENBQUNDLEtBQUs7Z0JBQUNqUyxNQUFNLEVBQUV1UixLQUFLO2dCQUFFSCxTQUFTLEVBQUVBLFNBQVM7Z0JBQUV4VyxTQUFTLEVBQUM7Y0FBZSxHQUMzRTJXLEtBQUssQ0FBQy9FLEdBQUcsQ0FBQ25ELFFBQVEsSUFBRztnQkFDckIsT0FDQ3pOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaVgsYUFBQSxDQUFBSyxPQUFPLENBQUNyRyxJQUFJO2tCQUFDaEcsR0FBRyxFQUFFMEQsUUFBUSxDQUFDQSxRQUFRO2tCQUFFalAsS0FBSyxFQUFFaVA7Z0JBQVEsR0FDcER6TixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2tYLGlCQUFBLENBQUFNLGdCQUFnQjtrQkFBQ3pLLElBQUksRUFBRTRCLFFBQVE7a0JBQUV0TCxFQUFFLEVBQUMsS0FBSztrQkFBQytQLFNBQVM7Z0JBQUEsRUFBRyxDQUN6QztjQUVqQixDQUFDLENBQUMsQ0FDYSxFQUNoQmxTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtnQkFBU0UsU0FBUyxFQUFDO2NBQXdDLEdBQzFEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnRCxXQUFBLENBQUFtQixNQUFNO2dCQUFDOUQsT0FBTyxFQUFDLFNBQVM7Z0JBQUNrQyxPQUFPLEVBQUVhLFFBQVE7Z0JBQUVGLFFBQVEsRUFBRWtVO2NBQVUsR0FDL0R0UyxLQUFLLENBQUNTLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3pFLElBQUksQ0FDdkIsQ0FDQSxDQUNSOztZQUlMLE9BQU9xQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhJLEtBQUEsQ0FBQU0sSUFBSTtjQUFDbEosU0FBUyxFQUFDLGVBQWU7Y0FBQzhJLEtBQUssRUFBRTFELE1BQU0sQ0FBQ2xHLEtBQUssQ0FBQ3FQLFNBQVM7Y0FBRXBGLE9BQU8sRUFBRTZOLGlCQUFBLENBQUFNO1lBQWdCLEVBQUk7VUFDcEc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFuWixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0ssS0FBQSxHQUFBeEssT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQWlELFlBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBZ1YsUUFBQSxHQUFBaFYsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBT00sU0FBVWtaLGdCQUFnQkEsQ0FBQztZQUFFekssSUFBSTtZQUFFMUosRUFBRSxHQUFHLElBQUk7WUFBRStQLFNBQVMsR0FBRztVQUFLLENBQVU7WUFDOUUsTUFBTSxDQUFDcUUsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3hXLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNO2NBQUVMO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFdEMsTUFBTWtGLE9BQU8sR0FBR2IsRUFBRTtZQUNsQixNQUFNc1UsUUFBUSxHQUFHQSxDQUFBLEtBQU0sQ0FBQ0YsVUFBVTtZQUVsQyxPQUNDdlcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNrRSxPQUFPO2NBQUNoRSxTQUFTLEVBQUM7WUFBZ0IsR0FDbENnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VCLFlBQUEsQ0FBQW9CLG9CQUFvQjtjQUFDZ1YsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZDelcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1QixZQUFBLENBQUFxQixpQkFBaUIsUUFDakIxQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVoQyxTQUFTO2NBQ3BCd0UsT0FBTztjQUNQbFcsT0FBTyxFQUFFO2dCQUNSbVcsSUFBSSxFQUFFM1csTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFrWCxJQUFJO2tCQUFDclYsU0FBUyxFQUFDLGdCQUFnQjtrQkFBQ2UsSUFBSSxFQUFDO2dCQUFNLEVBQUc7Z0JBQ3JENlcsS0FBSyxFQUFFNVcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFrWCxJQUFJO2tCQUFDclYsU0FBUyxFQUFDLGdCQUFnQjtrQkFBQ2UsSUFBSSxFQUFDO2dCQUFjOztZQUMzRCxFQUNBLEVBRUZDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBb0IsR0FBRTZNLElBQUksQ0FBQzRCLFFBQVEsQ0FBUSxDQUN2RCxDQUNjLEVBQ3BCek4sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1QixZQUFBLENBQUF1QixrQkFBa0IsUUFDbEI1QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1TLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQ3JJLElBQUksQ0FBQ3JMLE9BQU8sRUFBRXFGLE1BQU07Y0FDakNyRixPQUFPLEVBQUU7Z0JBQ1JtVyxJQUFJLEVBQ0gzVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhJLEtBQUEsQ0FBQU0sSUFBSTtrQkFDSkosS0FBSyxFQUFFK0QsSUFBSSxDQUFDckwsT0FBTztrQkFDbkJ0QyxLQUFLLEVBQUU7b0JBQUUwUCxhQUFhLEVBQUUvQixJQUFJLENBQUMrQjtrQkFBYSxDQUFFO2tCQUM1Q3pGLE9BQU8sRUFBRWlLLFFBQUEsQ0FBQWdDO2dCQUFjLEVBRXhCO2dCQUNEd0MsS0FBSyxFQUFFNVcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2tCQUFLRSxTQUFTLEVBQUM7Z0JBQXNCLEdBQUVwQixLQUFLLENBQUNpUCxjQUFjLENBQUNnSyxZQUFZOztZQUMvRSxFQUNBLENBQ2tCLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBdlosS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVTBaLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFMVMsTUFBTTtjQUFFeEcsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhELE9BQ0NQLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQXZCLEtBQUEsQ0FBQXdCLFFBQUEsUUFDQ3hCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0J6QixLQUFBLENBQUF1QixhQUFBLGdCQUFRbEIsS0FBSyxDQUFDTSxLQUFLLENBQUM2WSxTQUFTLENBQUMzWCxLQUFLLENBQVMsRUFDNUM3QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JYLElBQUksRUFBQyxXQUFXO2NBQ2hCZ0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDTSxLQUFLLENBQUM2WSxTQUFTLENBQUN4WCxXQUFXO2NBQzlDZixLQUFLLEVBQUU0RixNQUFNLENBQUNsRyxLQUFLLEVBQUU2WTtZQUFTLEVBQzdCLENBQ0csQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBelosS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVNFosZ0JBQWdCQSxDQUFDO1lBQUV6WTtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFNkYsTUFBTTtjQUFFeEcsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hELE1BQU1PLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RFgsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTUUsTUFBTSxHQUFHYixRQUFRLENBQUNjLElBQUk7WUFFNUIsTUFBTUgsS0FBSyxHQUFHWCxRQUFRLENBQUNLLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLElBQUlYLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQ2dCLFdBQVc7WUFFbkUsT0FDQ1MsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU9tWSxPQUFPLEVBQUM7WUFBRSxHQUFFclosS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDYSxLQUFLLENBQVMsRUFDbkRZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNEIsUUFBUTtjQUFDYixRQUFRLEVBQUVBLFFBQVE7Y0FBRUssTUFBTSxFQUFFQSxNQUFNO2NBQUVlLElBQUksRUFBQyxVQUFVO2NBQUNsQixJQUFJLEVBQUVBLElBQUk7Y0FBRUMsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDckY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXdCLE1BQUEsR0FBQTVDLE9BQUE7VUFFTSxTQUFVOFosV0FBV0EsQ0FBQztZQUFFbko7VUFBSSxDQUE2QztZQUM5RSxPQUNDL04sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBWSxHQUFFK08sSUFBSSxDQUFDeFAsSUFBSSxFLEtBQVksRSxLQUFDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9pUCxJQUFJLENBQUN2UCxLQUFLLENBQVEsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBd0IsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUF3SyxLQUFBLEdBQUF4SyxPQUFBO1VBQ0EsSUFBQStaLFlBQUEsR0FBQS9aLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFnYSxZQUFBLEdBQUFoYSxPQUFBO1VBQ00sU0FBVWlhLHFCQUFxQkEsQ0FBQztZQUFFOVksSUFBSTtZQUFFc047VUFBSSxDQUFFO1lBQ25ELE1BQU07Y0FDTGhPLFFBQVEsRUFBRTtnQkFBRUs7Y0FBSyxDQUFFO2NBQ25CTjtZQUFLLENBQ0wsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQ2dZLE1BQU0sRUFBRXdCLFNBQVMsQ0FBQyxHQUFHdFgsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU13WSxRQUFRLEdBQUdBLENBQUEsS0FBTWEsU0FBUyxDQUFDLENBQUN4QixNQUFNLENBQUM7WUFDekMsTUFBTWhPLEtBQUssR0FBRzVKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEVBQUVxUyxHQUFHLENBQUMsQ0FBQzdDLElBQUksRUFBRUwsS0FBSyxLQUFJO2NBQzlDLE1BQU0sQ0FBQzZKLFNBQVMsRUFBRS9ZLEtBQUssQ0FBQyxHQUFHdUosTUFBTSxDQUFDQyxJQUFJLENBQUM5SixLQUFLLENBQUNzWixTQUFTLENBQUNqWixJQUFJLENBQUMsQ0FBQ2taLE1BQU0sQ0FBQztjQUNwRSxPQUFPO2dCQUFFbFosSUFBSSxFQUFFd1AsSUFBSSxDQUFDd0osU0FBUyxDQUFDO2dCQUFFL1ksS0FBSyxFQUFFdVAsSUFBSSxDQUFDdlAsS0FBSztjQUFDLENBQUU7WUFDckQsQ0FBQyxDQUFDO1lBRUYsT0FDQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXdELEdBQ3pFZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLENBQUNhLEtBQUssQ0FBTSxFQUNsQ1ksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUFrWCxJQUFJO2NBQUN0VSxJQUFJLEVBQUMsTUFBTTtjQUFDZixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNxQyxPQUFPLEVBQUVvVjtZQUFRLEVBQUksQ0FDMUQsRUFDVHpXLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbVMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU0QixNQUFNO2NBQ2pCWSxPQUFPO2NBQ1BsVyxPQUFPLEVBQUU7Z0JBQ1JtVyxJQUFJLEVBQUUzVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NZLFlBQUEsQ0FBQU0sZUFBZTtrQkFBQ2pVLFFBQVEsRUFBRWdULFFBQVE7a0JBQUVsWSxJQUFJLEVBQUVBLElBQUk7a0JBQUV3UCxJQUFJLEVBQUU3UCxLQUFLLENBQUNLLElBQUk7Z0JBQUMsRUFBSTtnQkFDNUVxWSxLQUFLLEVBQUU1VyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhJLEtBQUEsQ0FBQU0sSUFBSTtrQkFBQ2xKLFNBQVMsRUFBQyxzQkFBc0I7a0JBQUM4SSxLQUFLLEVBQUVBLEtBQUs7a0JBQUVLLE9BQU8sRUFBRWdQLFlBQUEsQ0FBQUQ7Z0JBQVc7O1lBQ2hGLEVBQ0EsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBcFYsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBa0JNLFNBQVV1YSxVQUFVQSxDQUFDO1lBQUVwWixJQUFJO1lBQUVILFVBQVU7WUFBRTRELFFBQVE7WUFBRTRLLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ2hHLE1BQU07Y0FDTGhQLEtBQUs7Y0FDTGdHLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTdHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXlILFFBQVEsR0FBR0EsQ0FBQSxLQUFNbkgsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUUzQyxPQUNDNEIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLEVBQzVCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxNQUFNO2NBQUNpRCxRQUFRO2NBQUNmLE9BQU8sRUFBRWtFO1lBQVEsR0FDL0NsQixXQUFXLENBQUNqQixPQUFPLENBQUMwQixNQUFNLENBQ25CLENBQ0osQ0FDRSxFQUNUOUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQixHQUN6Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBOEIsR0FBRXBCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ21CLFdBQVcsQ0FBUSxDQUNyRixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFVLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFhTSxTQUFVd1IsV0FBV0EsQ0FBQztZQUFFdE0sUUFBUTtZQUFFTixRQUFRO1lBQUU0SyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUN6RixNQUFNO2NBQ0xoUCxLQUFLO2NBQ0xDLFFBQVE7Y0FDUitGLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUd4QixPQUNDa0MsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLENBQ3BCLEVBQ1IwQyxRQUFRLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQXRDLE1BQUEsR0FBQTVDLE9BQUE7VUFFQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBd2EsUUFBQSxHQUFBeGEsT0FBQTtVQUNBLElBQUFxUyxPQUFBLEdBQUFyUyxPQUFBO1VBQ0EsSUFBQXlhLFFBQUEsR0FBQXphLE9BQUE7VUFPTSxTQUFVc2EsZUFBZUEsQ0FBQztZQUFFalUsUUFBUTtZQUFFbEYsSUFBSTtZQUFFd1A7VUFBSSxDQUF5QjtZQUM5RSxNQUFNO2NBQ0xsUSxRQUFRLEVBQUU7Z0JBQUVLO2NBQUs7WUFBRSxDQUNuQixHQUFHLElBQUFWLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsTUFBTTtjQUFFb1ksVUFBVTtjQUFFOVM7WUFBTyxDQUFFLEdBQUcsSUFBQXlVLFFBQUEsQ0FBQUMsT0FBTyxFQUFDclUsUUFBUSxDQUFDO1lBQ2pELE9BQ0N6RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4WSxRQUFBLENBQUFHLGdCQUFnQjtjQUFDeFosSUFBSSxFQUFFQSxJQUFJO2NBQUVzTixJQUFJLEVBQUUzTixLQUFLLENBQUNzWixTQUFTLENBQUNqWixJQUFJO1lBQUMsRUFBSSxFQUM3RHlCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMlEsT0FBQSxDQUFBdUksZ0JBQWdCO2NBQUMzUyxNQUFNLEVBQUVqQyxPQUFPLENBQUNpQyxNQUFNO2NBQUU1QixRQUFRLEVBQUVMLE9BQU8sQ0FBQ0ssUUFBUTtjQUFFeVMsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDOUY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQWxXLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVNmEsbUJBQW1CQSxDQUFBO1lBQ2xDLE1BQU07Y0FBRXJhO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDdEMsT0FDQ2tDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZUFBT2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDNlksU0FBUyxDQUFDNVksS0FBSyxDQUFRLENBQ3JDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQStaLGFBQUEsR0FBQTlhLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVBLE1BQU0rYSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTlhLEtBQUEsQ0FBQXVULEtBQUs7WUFDWjNGLFFBQVEsRUFBRTVOLEtBQUEsQ0FBQTRCLFFBQVE7WUFDbEJtWixLQUFLLEVBQUUvYSxLQUFBLENBQUFnYixLQUFLO1lBQ1pDLFFBQVEsRUFBRWpiLEtBQUEsQ0FBQWtiLFFBQVE7WUFDbEJDLE1BQU0sRUFBRW5iLEtBQUEsQ0FBQW9iO1dBQ1I7VUFZSyxTQUFVQyxrQkFBa0JBLENBQUM7WUFBRXBhLElBQUk7WUFBRXNOLElBQUk7WUFBRTZCLEtBQUs7WUFBRXJQO1VBQVEsQ0FBc0M7WUFDckcsTUFBTTtjQUNMUixRQUFRLEVBQUU7Z0JBQUVLO2NBQUssQ0FBRTtjQUNuQkwsUUFBUTtjQUNSRDtZQUFLLENBQ0wsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU07Y0FBRVU7WUFBSyxDQUFFLEdBQUcsSUFBQTBaLGFBQUEsQ0FBQVUsc0JBQXNCLEdBQUU7WUFDMUMsTUFBTSxDQUFDdFAsT0FBTyxFQUFFeEYsVUFBVSxDQUFDLEdBQUc5RCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTXdaLE1BQU0sR0FBRzFQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDNkQsSUFBSSxDQUFDNEwsTUFBTSxDQUFDO1lBQ3ZDLElBQUFwYSxNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUFFLE1BQU1pRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsTUFBTU0sTUFBTSxHQUFHbEcsS0FBSyxDQUFDSyxJQUFJLENBQUMsR0FBR0wsS0FBSyxDQUFDSyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRTdDLE1BQU1zYSxhQUFhLEdBQUcsRUFBRTtZQUN4QixNQUFNQyxVQUFVLEdBQUdsYixLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDO1lBRXBDLE1BQU1HLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CYixRQUFRLENBQUNjLElBQUksQ0FBQztnQkFBRVQsS0FBSyxFQUFFO2tCQUFFSyxJQUFJLEVBQUVDO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQzFDLENBQUM7WUFFRCxNQUFNdWEsTUFBTSxHQUFHdEIsTUFBTSxDQUFDN0csR0FBRyxDQUFDLENBQUNyUyxJQUFJLEVBQUV5YSxDQUFDLEtBQUk7Y0FDckMsSUFBSXphLElBQUksS0FBSyxhQUFhLEVBQUUsT0FBTyxJQUFJO2NBQ3ZDLE1BQU0wYSxLQUFLLEdBQUdkLFVBQVUsQ0FBQ3RNLElBQUksQ0FBQzRMLE1BQU0sQ0FBQ2xaLElBQUksQ0FBQyxDQUFDO2NBQzNDLE1BQU0rVixLQUFLLEdBQUc7Z0JBQ2JsVixLQUFLLEVBQUUwWixVQUFVLENBQUN2YSxJQUFJLENBQUMsQ0FBQ2EsS0FBSztnQkFDN0JHLFdBQVcsRUFBRXVaLFVBQVUsQ0FBQ3ZhLElBQUksQ0FBQyxDQUFDZ0IsV0FBVztnQkFDekNoQixJQUFJO2dCQUNKc04sSUFBSSxFQUFFdE4sSUFBSTtnQkFDVkMsS0FBSyxFQUFFNEYsTUFBTSxDQUFDc0osS0FBSyxDQUFDLEdBQUduUCxJQUFJLENBQUMsSUFBSTtlQUNoQztjQUVEc2EsYUFBYSxDQUFDdGEsSUFBSSxDQUFDLEdBQUcsRUFBRTtjQUV4QixPQUNDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtYSxLQUFLO2dCQUFBLEdBQ0QzRSxLQUFLO2dCQUNUdFMsUUFBUSxFQUFFbkUsUUFBUSxDQUFDK0csUUFBUTtnQkFDM0J2RyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCMEwsR0FBRyxFQUFFLEdBQUd4TCxJQUFJLElBQUl5YSxDQUFDLEVBQUU7Z0JBQ25CaGEsU0FBUyxFQUFDLGtCQUFrQjtnQkFDNUJHLE9BQU8sRUFBQyxVQUFVO2dCQUNsQlQsTUFBTSxFQUFFQTtjQUFNLEVBQ2I7WUFFSixDQUFDLENBQUM7WUFFRixPQUNDc0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDRWdhLE1BQU0sRUFDUC9ZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNEMsR0FDN0RnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29aLGFBQUEsQ0FBQWdCLGlCQUFpQjtjQUFDbGEsU0FBUyxFQUFDLFFBQVE7Y0FBQ3FELE1BQU0sRUFBQyxRQUFRO2NBQUN0QyxJQUFJLEVBQUMsUUFBUTtjQUFDMk4sS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDNUUsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBd0ssYUFBQSxHQUFBOWEsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQStOLE1BQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBK2IsTUFBQSxHQUFBL2IsT0FBQTtVQUVNLFNBQVUyYSxnQkFBZ0JBLENBQUM7WUFBRXhaLElBQUk7WUFBRXNOO1VBQUksQ0FBRTtZQUM5QyxNQUFNO2NBQ0xoTyxRQUFRLEVBQUU7Z0JBQUVLO2NBQUssQ0FBRTtjQUNuQkwsUUFBUTtjQUNSRCxLQUFLO2NBQ0xnRyxLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLElBQUksQ0FBQytOLElBQUksQ0FBQ3VOLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtjQUNuQzFOLE9BQU8sQ0FBQzJOLElBQUksQ0FBQyx3Q0FBd0M5YSxJQUFJLEVBQUUsQ0FBQztjQUM1RCxPQUFPLElBQUk7O1lBR1osTUFBTTZGLE1BQU0sR0FBR2xHLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEdBQUdMLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUU3QyxNQUFNdWEsVUFBVSxHQUFHbGIsS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQztZQUVwQyxNQUFNRixRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRW5DO2NBQUssQ0FBRSxHQUFHbUMsS0FBSyxDQUFDckMsYUFBYTtjQUNyQ0osS0FBSyxDQUFDTyxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztjQUM1QixJQUFJbUMsS0FBSyxDQUFDcEMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUJWLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFOztZQUVqQixDQUFDO1lBRUQsTUFBTUQsTUFBTSxHQUFHaUMsS0FBSyxJQUFJOUMsUUFBUSxDQUFDYyxJQUFJLEVBQUU7WUFDdkM7WUFFQSxPQUNDcUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb1osYUFBQSxDQUFBb0IscUJBQXFCO2NBQ3JCQyxRQUFRO2NBQ1IvYSxLQUFLLEVBQUU0RixNQUFNO2NBQ2I3RixJQUFJLEVBQUVBLElBQUk7Y0FDVkcsTUFBTSxFQUFFQSxNQUFNO2NBQ2RMLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkYsS0FBSyxFQUFFZ04sTUFBQSxDQUFBOE07WUFBbUIsR0FFMUJqWSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTBCLEdBQzVDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtnYSxVQUFVLENBQUMxWixLQUFLLENBQU0sRUFDM0JZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb1osYUFBQSxDQUFBc0IsYUFBYTtjQUFDcmEsT0FBTyxFQUFDLE1BQU07Y0FBQ2tELE1BQU0sRUFBQztZQUFLLEdBQ3hDZ0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDbkMsR0FBRyxDQUNULENBQ1gsQ0FDRyxFQUNWakIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29aLGFBQUEsQ0FBQXVCLFlBQVksUUFDWnpaLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDcWEsTUFBQSxDQUFBUixrQkFBa0I7Y0FBQ3BhLElBQUksRUFBRUEsSUFBSTtjQUFFc04sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDaEMsQ0FDVixDQUNpQixDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBN0wsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVTRhLGdCQUFnQkEsQ0FBQztZQUFFOUIsVUFBVTtZQUFFelMsUUFBUTtZQUFFNEI7VUFBTSxDQUFFO1lBQ2hFLE1BQU07Y0FDTHpCLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTdHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsT0FDQ2tDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBc0MsR0FDdkRnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxRQUFRO2NBQUNmLE9BQU8sRUFBRW9DLFFBQVE7Y0FBRXpCLFFBQVEsRUFBRWtVO1lBQVUsR0FDeEU3UixXQUFXLENBQUNqQixPQUFPLENBQUNHLE1BQU0sQ0FDbkIsRUFDVHZELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDOUQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2tDLE9BQU8sRUFBRWdFLE1BQU07Y0FBRXJELFFBQVEsRUFBRWtVO1lBQVUsR0FDN0Q3UixXQUFXLENBQUNqQixPQUFPLENBQUN6RSxJQUFJLENBQ2pCLENBQ0Q7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXFCLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBd2EsUUFBQSxHQUFBeGEsT0FBQTtVQU9BLE1BQU0rYSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTlhLEtBQUEsQ0FBQXVULEtBQUs7WUFDWjNGLFFBQVEsRUFBRTVOLEtBQUEsQ0FBQTRCLFFBQVE7WUFDbEJtWixLQUFLLEVBQUUvYSxLQUFBLENBQUFnYixLQUFLO1lBQ1pDLFFBQVEsRUFBRWpiLEtBQUEsQ0FBQWtiLFFBQVE7WUFDbEJDLE1BQU0sRUFBRW5iLEtBQUEsQ0FBQW9iLE1BQU07WUFDZGdCLEtBQUssRUFBRTlCLFFBQUEsQ0FBQUc7V0FDUDtVQUVLLFNBQVV2WSxTQUFTQSxDQUFDO1lBQUVDLElBQUksR0FBRztVQUFPLENBQUU7WUFDM0MsTUFBTTtjQUFFN0IsS0FBSztjQUFFQyxRQUFRO2NBQUVnRztZQUFZLENBQUUsR0FBRyxJQUFBckcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNO2NBQUVJO1lBQUssQ0FBRSxHQUFHTCxRQUFRO1lBQzFCLE1BQU0yWixTQUFTLEdBQUd0WixLQUFLLENBQUNzWixTQUFTLENBQUMvWCxJQUFJLENBQUM7WUFDdkMsTUFBTWdZLE1BQU0sR0FBRzFQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDd1AsU0FBUyxDQUFDO1lBQ3JDLE1BQU1uWixRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVDO2NBQUssQ0FBRSxHQUFHbUMsS0FBSyxDQUFDckMsYUFBYTtjQUMzQ1QsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdDO2NBQUssQ0FBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxNQUFNbWIsS0FBSyxHQUFHbEMsTUFBTSxDQUFDM0osTUFBTSxDQUFDdlAsSUFBSSxJQUFJQSxJQUFJLEtBQUssYUFBYSxDQUFDO1lBQzNELE1BQU13YSxNQUFNLEdBQUdZLEtBQUssQ0FBQy9JLEdBQUcsQ0FBQyxDQUFDclMsSUFBSSxFQUFFbVAsS0FBSyxLQUFJO2NBQ3hDLElBQUksQ0FBQzlQLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUMsRUFBRTtnQkFDdkJtTixPQUFPLENBQUMyTixJQUFJLENBQUMsZ0RBQWdEOWEsSUFBSSxFQUFFLENBQUM7O2NBR3JFLE1BQU07Z0JBQUVhLEtBQUs7Z0JBQUVHO2NBQVcsQ0FBRSxHQUFHM0IsS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQztjQUNoRCxNQUFNK1YsS0FBSyxHQUFHO2dCQUFFbFYsS0FBSztnQkFBRUcsV0FBVztnQkFBRWYsS0FBSyxFQUFFTixLQUFLLENBQUNLLElBQUksQ0FBQyxJQUFJO2NBQUUsQ0FBRTtjQUM5RCxJQUFJLE9BQU9pWixTQUFTLENBQUNqWixJQUFJLENBQUMsS0FBSyxRQUFRLElBQUlpWixTQUFTLENBQUNqWixJQUFJLENBQUMsQ0FBQ2tCLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQzVFLE1BQU13WixLQUFLLEdBQUdkLFVBQVUsQ0FBQ1gsU0FBUyxDQUFDalosSUFBSSxDQUFDLENBQUNrQixJQUFJLENBQUM7Z0JBQzlDLE9BQ0NPLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDbWEsS0FBSztrQkFDTGxQLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2tCQUN2QnZPLE9BQU8sRUFBQyxVQUFVO2tCQUNsQkgsU0FBUyxFQUFDLGtCQUFrQjtrQkFDNUJULElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNOK1YsS0FBSztrQkFDVGpXLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJLLE1BQU0sRUFBRW1GO2dCQUFZLEVBQ25COztjQUlKLElBQUksT0FBTzJULFNBQVMsQ0FBQ2paLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDeEMsTUFBTTBhLEtBQUssR0FBR2QsVUFBVSxDQUFDWCxTQUFTLENBQUNqWixJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FDQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDbWEsS0FBSztrQkFDTGxQLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2tCQUN2Qm5QLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNOK1YsS0FBSztrQkFDVHRWLFNBQVMsRUFBQyxrQkFBa0I7a0JBQzVCWCxRQUFRLEVBQUVBLFFBQVE7a0JBQ2xCYyxPQUFPLEVBQUMsVUFBVTtrQkFDbEJULE1BQU0sRUFBRW1GO2dCQUFZLEVBQ25COztjQUlKLE1BQU1vVixLQUFLLEdBQUdkLFVBQVUsQ0FBQ1gsU0FBUyxDQUFDalosSUFBSSxDQUFDLENBQUNrQixJQUFJLENBQUM7Y0FFOUMsT0FDQ08sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtYSxLQUFLO2dCQUNMNWEsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQlcsU0FBUyxFQUFDLGtCQUFrQjtnQkFDNUJHLE9BQU8sRUFBQyxVQUFVO2dCQUNsQjRLLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2dCQUN2Qm5QLElBQUksRUFBRUEsSUFBSTtnQkFDVnNOLElBQUksRUFBRTJMLFNBQVMsQ0FBQ2paLElBQUksQ0FBQztnQkFDckJHLE1BQU0sRUFBRW1GLFlBQVk7Z0JBQUEsR0FDaEJ5UTtjQUFLLEVBQ1I7WUFFSixDQUFDLENBQUM7WUFFRixPQUFPdFUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFBR2dhLE1BQU0sQ0FBSTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkEsSUFBQXpiLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQXdhLFFBQUEsR0FBQXhhLE9BQUE7VUFFQSxNQUFNK2EsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUU5YSxLQUFBLENBQUF1VCxLQUFLO1lBQ1ozRixRQUFRLEVBQUU1TixLQUFBLENBQUE0QixRQUFRO1lBQ2xCbVosS0FBSyxFQUFFL2EsS0FBQSxDQUFBZ2IsS0FBSztZQUNaQyxRQUFRLEVBQUVqYixLQUFBLENBQUFrYixRQUFRO1lBQ2xCQyxNQUFNLEVBQUVuYixLQUFBLENBQUFvYixNQUFNO1lBQ2RnQixLQUFLLEVBQUU5QixRQUFBLENBQUFHO1dBQ1A7VUFFSyxTQUFVak4sa0JBQWtCQSxDQUFDLEVBQUU7WUFDcEMsTUFBTTtjQUFFbE4sS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2hELE1BQU07Y0FBRUk7WUFBSyxDQUFFLEdBQUdMLFFBQVE7WUFDMUIsTUFBTTRaLE1BQU0sR0FBRzFQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOUosS0FBSyxDQUFDc1osU0FBUyxDQUFDO1lBQzNDLE1BQU1uWixRQUFRLEdBQUdzQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRXBDLElBQUk7Z0JBQUVDO2NBQUssQ0FBRSxHQUFHbUMsS0FBSyxDQUFDckMsYUFBYTtjQUMzQ1QsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdDO2NBQUssQ0FBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxNQUFNdWEsTUFBTSxHQUFHdEIsTUFBTSxDQUFDN0csR0FBRyxDQUFDLENBQUNyUyxJQUFJLEVBQUVtUCxLQUFLLEtBQUk7Y0FDekMsSUFBSSxDQUFDOVAsS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQyxFQUFFO2dCQUN2Qm1OLE9BQU8sQ0FBQzJOLElBQUksQ0FBQyxnREFBZ0Q5YSxJQUFJLEVBQUUsQ0FBQzs7Y0FFckUsTUFBTTtnQkFBRWEsS0FBSztnQkFBRUc7Y0FBVyxDQUFFLEdBQUczQixLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDO2NBQ2hELE1BQU0rVixLQUFLLEdBQUc7Z0JBQUVsVixLQUFLO2dCQUFFRyxXQUFXO2dCQUFFZixLQUFLLEVBQUVOLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLElBQUk7Y0FBRSxDQUFFO2NBRTlELElBQUksT0FBT0wsS0FBSyxDQUFDc1osU0FBUyxDQUFDalosSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJTCxLQUFLLENBQUNzWixTQUFTLENBQUNqWixJQUFJLENBQUMsQ0FBQ2tCLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hGLE1BQU13WixLQUFLLEdBQUdkLFVBQVUsQ0FBQ2phLEtBQUssQ0FBQ3NaLFNBQVMsQ0FBQ2paLElBQUksQ0FBQyxDQUFDa0IsSUFBSSxDQUFDO2dCQUNwRCxPQUNDTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ21hLEtBQUs7a0JBQ0xqYSxTQUFTLEVBQUMsa0JBQWtCO2tCQUM1QitLLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2tCQUN2Qm5QLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNOK1YsS0FBSztrQkFDVGpXLFFBQVEsRUFBRUE7Z0JBQVEsRUFDakI7O2NBR0o7Y0FDQSxNQUFNNGEsS0FBSyxHQUFHZCxVQUFVLENBQUNqYSxLQUFLLENBQUNzWixTQUFTLENBQUNqWixJQUFJLENBQUMsQ0FBQztjQUMvQyxPQUNDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtYSxLQUFLO2dCQUFDamEsU0FBUyxFQUFDLGtCQUFrQjtnQkFBQytLLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2dCQUFFblAsSUFBSSxFQUFFQSxJQUFJO2dCQUFBLEdBQU0rVixLQUFLO2dCQUFFalcsUUFBUSxFQUFFQTtjQUFRLEVBQUk7WUFFNUcsQ0FBQyxDQUFDO1lBRUYsT0FDQzJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDTSxLQUFLLENBQUMwQixLQUFLLENBQU0sQ0FDcEIsRUFDVEksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUFNaWEsTUFBTSxDQUFPLENBQ2QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQSxJQUFBL1ksTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVBOzs7OztVQUtNLFNBQVUwYSxPQUFPQSxDQUFDMVosVUFBVTtZQUNqQyxNQUFNLENBQUM4WCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHblcsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FDTEwsS0FBSztjQUNMQyxRQUFRO2NBQ1IrRixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU11SCxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLElBQUk7Z0JBQ0g4USxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNuQixNQUFNdFksUUFBUSxDQUFDYyxJQUFJLEVBQUU7Z0JBQ3JCd1gsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDcEIvWCxVQUFVLENBQUMsT0FBTyxDQUFDO2VBQ25CLENBQUMsT0FBT3FOLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVyxLQUFLLENBQUNaLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUNELE1BQU1tTyxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QixNQUFNN0MsU0FBUyxHQUFHbFosUUFBUSxDQUFDSyxLQUFLLENBQUM2WSxTQUFTO2NBQzFDbFosUUFBUSxDQUFDSyxLQUFLLENBQUM2VixNQUFNLEVBQUU7Y0FDdkJsVyxRQUFRLENBQUNZLEdBQUcsQ0FBQztnQkFBRXNZO2NBQVMsQ0FBRSxDQUFDO2NBRTNCM1ksVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNwQixDQUFDO1lBRUQsT0FBTztjQUFFOFgsVUFBVTtjQUFFQyxhQUFhO2NBQUUvUyxPQUFPLEVBQUU7Z0JBQUVpQyxNQUFNO2dCQUFFNUIsUUFBUSxFQUFFbVc7Y0FBWTtZQUFFLENBQUU7VUFDbEY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUE1WixNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQXljLGFBQUEsR0FBQXpjLE9BQUE7VUFDQSxJQUFBMGMsU0FBQSxHQUFBMWMsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQXVYLFlBQUEsR0FBQXZYLE9BQUE7VUFDTSxTQUFVZ0QsS0FBS0EsQ0FBQTtZQUNwQixNQUFNLENBQUM0VSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqVixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTtjQUNMSixRQUFRO2NBQ1JBLFFBQVEsRUFBRTtnQkFBRUs7Y0FBSyxDQUFFO2NBQ25CTixLQUFLO2NBQ0xnRyxLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0ySyxXQUFXLEdBQUdBLENBQUEsS0FBTXdNLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNbkosSUFBSSxHQUFHM04sS0FBSyxDQUFDNmIsYUFBYSxFQUFFO1lBQ2xDLE1BQU10QyxNQUFNLEdBQUcxUCxNQUFNLENBQUNDLElBQUksQ0FBQzlKLEtBQUssQ0FBQ3NaLFNBQVMsQ0FBQztZQUMzQyxNQUFNbEQsS0FBSyxHQUFHO2NBQUVqVCxPQUFPLEVBQUVvSCxXQUFXO2NBQUV6RyxRQUFRLEVBQUVuRSxRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSztZQUFFLENBQUU7WUFFeEUsTUFBTTRhLE1BQU0sR0FBR3RCLE1BQU0sQ0FBQzdHLEdBQUcsQ0FBQyxDQUFDclMsSUFBSSxFQUFFbVAsS0FBSyxLQUFJO2NBQ3pDLElBQUksT0FBT3hQLEtBQUssQ0FBQ3NaLFNBQVMsQ0FBQ2paLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSUwsS0FBSyxDQUFDc1osU0FBUyxDQUFDalosSUFBSSxDQUFDLENBQUNrQixJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN4RixPQUFPTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2diLFNBQUEsQ0FBQTlDLGdCQUFnQjtrQkFBQ2pOLEdBQUcsRUFBRSxHQUFHeEwsSUFBSSxJQUFJbVAsS0FBSyxFQUFFO2tCQUFFblAsSUFBSSxFQUFFQTtnQkFBSSxFQUFJOztjQUdqRSxPQUFPeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrYSxhQUFBLENBQUF4QyxxQkFBcUI7Z0JBQUN0TixHQUFHLEVBQUUsR0FBR3hMLElBQUksSUFBSW1QLEtBQUssRUFBRTtnQkFBRW5QLElBQUksRUFBRUEsSUFBSTtnQkFBRXNOLElBQUksRUFBRUE7Y0FBSSxFQUFJO1lBQ2xGLENBQUMsQ0FBQztZQUVGLE9BQ0M3TCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDTSxLQUFLLENBQUMwQixLQUFLLENBQU0sRUFDNUJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxNQUFNO2NBQUEsR0FBS21WLEtBQUs7Y0FBRXZVLElBQUksRUFBQztZQUFRLEdBQzdDc0UsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNuQixDQUNKLENBQ0UsRUFDUnFULE1BQU0sRUFDUC9ZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDNlYsWUFBQSxDQUFBeEksa0JBQWtCO2NBQUMzSSxJQUFJLEVBQUV3UixlQUFlO2NBQUU3USxPQUFPLEVBQUVzRTtZQUFXLEVBQUksQ0FDakU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXRMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUVNLFNBQVU0YyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRTVWLE1BQU07Y0FBRXhHLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4RCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdULEtBQUssQ0FBQ1UsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNRSxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1FLE1BQU0sR0FBR2IsUUFBUSxDQUFDYyxJQUFJO1lBQzVCLE1BQU1QLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUV4QyxNQUFNYSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNYixJQUFJLEdBQUdGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUV2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBQVYsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUMsRUFBRWUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUF2QixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUVVLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFDdEQsTUFBTW9WLFNBQVMsR0FBR2pXLElBQUksS0FBSyxPQUFPLElBQUlGLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUdKLElBQUk7WUFDN0UsT0FDQ1IsS0FBQSxDQUFBdUIsYUFBQSxDQUFBdkIsS0FBQSxDQUFBd0IsUUFBQSxRQUNDeEIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ3pCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQXdCLGNBQWMsT0FBRyxFQUNsQjFCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNEIsUUFBUTtjQUNSWCxJQUFJLEVBQUMsYUFBYTtjQUNsQmEsS0FBSyxFQUFFeEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNGLEtBQUs7Y0FDekNmLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmMsT0FBTyxFQUFDLFVBQVU7Y0FDbEJULE1BQU0sRUFBRUEsTUFBTTtjQUNkYSxXQUFXLEVBQUUzQixLQUFLLENBQUN5QixVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVztjQUNyRGYsS0FBSyxFQUFFWCxRQUFRLENBQUN5QjtZQUFXLEVBQzFCLEVBQ0YvQixLQUFBLENBQUF1QixhQUFBLENBQUNwQixNQUFBLENBQUE4QixTQUFTO2NBQUNDLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDdkIsQ0FDRyxDQUNMLEVBQ05sQyxLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0ssUUFBUSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUNoRHJDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJwQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDRSxRQUFRLEVBQ3pDdEMsS0FBQSxDQUFBdUIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBMkMsT0FBTztjQUFDZCxTQUFTLEVBQUMsY0FBYztjQUFDZSxJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUNUeEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLENBQUNwQixNQUFBLENBQUE4QixTQUFTLE9BQUcsQ0FDUixDQUNELENBQ0csQ0FTUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUEsSUFBQVEsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTZjLE9BQUEsR0FBQTdjLE9BQUE7VUFDQSxJQUFBOGMsV0FBQSxHQUFBOWMsT0FBQTtVQUNPO1VBQVUsU0FBVXNKLFFBQVFBLENBQUM7WUFBRXBFLFFBQVE7WUFBRWpCLE9BQU87WUFBRW9ULE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBR3ZFO1VBQUssQ0FBRTtZQUNqRixNQUFNaUssV0FBVyxHQUFHMUYsTUFBTSxHQUFHLE1BQU15RixXQUFBLENBQUFFLFlBQVksQ0FBQ0MsYUFBYSxDQUFDaFosT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ3JCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFBLEdBQUtpTixLQUFLO2NBQUVuUSxJQUFJLEVBQUU1QyxNQUFBLENBQUFtZCxLQUFLLENBQUNDLE9BQU87Y0FBRWxaLE9BQU8sRUFBRThZO1lBQVcsR0FDMUQ3WCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVWtZLFlBQVlBLENBQUM7WUFBRWxZLFFBQVE7WUFBRWpCLE9BQU87WUFBRW9ULE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBR3ZFO1VBQUssQ0FBRTtZQUNyRixNQUFNaUssV0FBVyxHQUFHMUYsTUFBTSxHQUFHLE1BQU15RixXQUFBLENBQUFFLFlBQVksQ0FBQ0MsYUFBYSxDQUFDaFosT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ3JCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDbWIsT0FBQSxDQUFBcFAsVUFBVTtjQUFBLEdBQUtxRixLQUFLO2NBQUVuUSxJQUFJLEVBQUU1QyxNQUFBLENBQUFtZCxLQUFLLENBQUNDLE9BQU87Y0FBRWxaLE9BQU8sRUFBRThZO1lBQVcsR0FDOUQ3WCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVQsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVXFkLGtCQUFrQkEsQ0FBQztZQUFFalgsSUFBSTtZQUFFVztVQUFPLENBQUU7WUFDbkQsTUFBTTtjQUNMUCxLQUFLO2NBQ0xoRyxLQUFLO2NBQ0w4YyxTQUFTO2NBQ1Q5VyxLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLElBQUksQ0FBQzBGLElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTVQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIyWCxTQUFTLEVBQUU7Y0FDWDlXLEtBQUssQ0FBQytXLFlBQVksQ0FBQ25QLFNBQVMsQ0FBQztjQUM3QnJILE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFxQixZQUFZO2NBQ1pNLElBQUk7Y0FDSjVELEtBQUssRUFBRWhDLEtBQUssQ0FBQytFLEtBQUssQ0FBQ1ksTUFBTSxDQUFDM0QsS0FBSztjQUMvQjZHLElBQUksRUFBRTdJLEtBQUssQ0FBQytFLEtBQUssQ0FBQ1ksTUFBTSxDQUFDakUsV0FBVztjQUNwQzZFLE9BQU8sRUFBRUEsT0FBTztjQUNoQlYsUUFBUSxFQUFFVSxPQUFPO2NBQ2pCaEIsVUFBVSxFQUFFO2dCQUFFL0QsS0FBSyxFQUFFaUYsV0FBVyxDQUFDakIsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDbERDLFNBQVMsRUFBRTtnQkFBRWxFLEtBQUssRUFBRWlGLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0c7Y0FBTSxDQUFFO2NBQ2hEUixTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZkEsU0FBUyxFQUFFO2NBQ1o7WUFBQyxFQUNBO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFsQixNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVK08sa0JBQWtCQSxDQUFDO1lBQUUzSSxJQUFJO1lBQUVXO1VBQU8sQ0FBRTtZQUNuRCxNQUFNLENBQUNTLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3RSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMTCxLQUFLLEVBQUU7Z0JBQUV5QixVQUFVLEVBQUV6QjtjQUFLLENBQUU7Y0FDNUJDLFFBQVE7Y0FDUitGLEtBQUssRUFBRTtnQkFDTlMsV0FBVyxFQUFFO2tCQUFFakI7Z0JBQU87Y0FBRTtZQUN4QixDQUNELEdBQUcsSUFBQTVGLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDMEYsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNVCxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0g4QixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQlYsT0FBTyxFQUFFO2dCQUNUdEcsUUFBUSxDQUFDSyxLQUFLLENBQUNpSCxLQUFLLEVBQUU7Z0JBQ3RCLE1BQU10SCxRQUFRLENBQUNjLElBQUksRUFBRTtlQUNyQixDQUFDLE9BQU84TSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1csS0FBSyxDQUFDWixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDVHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDN0UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0MsTUFBQSxDQUFBcUIsWUFBWTtjQUNaTSxJQUFJO2NBQ0pXLE9BQU8sRUFBRUEsT0FBTztjQUNoQnBCLFNBQVMsRUFBRUEsU0FBUztjQUNwQkksVUFBVSxFQUFFO2dCQUFFL0QsS0FBSyxFQUFFZ0UsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDdENDLFNBQVMsRUFBRTtnQkFBRWxFLEtBQUssRUFBRWdFLE9BQU8sQ0FBQ0c7Y0FBTSxDQUFFO2NBQ3BDRSxRQUFRLEVBQUVVO1lBQU8sR0FFakJuRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzBPLFdBQVcsQ0FBQzFNLEtBQUssQ0FBTSxFQUNsQ0ksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLFlBQUlsQixLQUFLLENBQUMwTyxXQUFXLENBQUNoTixXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBVSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUF3ZCxTQUFBLEdBQUF4ZCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVXlkLHdCQUF3QkEsQ0FBQztZQUFFclgsSUFBSTtZQUFFL0QsSUFBSTtZQUFFMEU7VUFBTyxDQUFFO1lBQy9ELE1BQU07Y0FDTHZHLEtBQUs7Y0FDTEMsUUFBUTtjQUNSaVgsUUFBUTtjQUNSbFIsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUM4RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ21HLE1BQU0sRUFBRWtNLFNBQVMsQ0FBQyxHQUFHdFEsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUM7Y0FDMUM2YyxZQUFZLEVBQUUsRUFBRTtjQUNoQkMsV0FBVyxFQUFFLEtBQUs7Y0FDbEJ0YjthQUNBLENBQUM7WUFFRixJQUFJLENBQUMrRCxJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLE1BQU13WCxNQUFNLEdBQUc7Y0FDZDNjLFFBQVEsRUFBRXNDLEtBQUssSUFBRztnQkFDakIyUCxTQUFTLENBQUM7a0JBQ1QsR0FBR2xNLE1BQU07a0JBQ1QsQ0FBQ3pELEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0MsSUFBSSxHQUFHb0MsS0FBSyxDQUFDckMsYUFBYSxDQUFDRTtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRDZDLE9BQU8sRUFBRSxNQUFNVixLQUFLLElBQUc7Z0JBQ3RCa0UsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWdILElBQUksR0FBRyxNQUFNaE8sUUFBUSxDQUFDOEksUUFBUSxDQUFDbEgsSUFBSSxFQUFFMkUsTUFBTSxDQUFDMFcsWUFBWSxDQUFDO2dCQUMvRGhHLFFBQVEsQ0FBQztrQkFBRSxHQUFHakosSUFBSTtrQkFBRXZDLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7Z0JBQ3JDbkYsT0FBTyxFQUFFO2dCQUNUNEgsVUFBVSxDQUFDLE1BQU1sSCxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQzNDO2FBQ0E7WUFFRCxPQUNDN0UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxRyxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsY0FBYztjQUFDbUYsT0FBTyxFQUFFQTtZQUFPLEdBQzFFbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF3SSxJQUFJLFFBQ0o5RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsaUJBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQzlVLEtBQUssQ0FBTSxFQUM3QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUM4VyxNQUFNLENBQUNwVixXQUFXLENBQVEsQ0FDL0IsRUFDVFUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzlMLEtBQUs7Y0FDbENiLElBQUksRUFBQyxjQUFjO2NBQ25CQyxLQUFLLEVBQUU0RixNQUFNLENBQUMwVyxZQUFZO2NBQzFCemMsUUFBUSxFQUFFMmMsTUFBTSxDQUFDM2MsUUFBUTtjQUN6QmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzNMO1lBQVcsRUFDN0MsQ0FDSSxFQUVQUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4YixTQUFBLENBQUFsVSxRQUFRO2NBQUN2SCxPQUFPLEVBQUMsU0FBUztjQUFDa0MsT0FBTyxFQUFFMlosTUFBTSxDQUFDM1o7WUFBTyxHQUNqRGdELFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDSCxFQUNUM0csTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUErVSxnQkFBZ0I7Y0FBQ3JXLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFzQixHQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBZ0wsV0FBQSxHQUFBaEwsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVBLElBQUE4ZCxRQUFBLEdBQUE5ZCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDTSxTQUFVK2QsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FDTHRkLFFBQVE7Y0FDUitGLEtBQUs7Y0FDTGhHLEtBQUs7Y0FDTHdHLE1BQU07Y0FDTlIsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUNpTixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdoTCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDb0ssZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHdEksTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1tZCxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJaFgsTUFBTSxDQUFDa0YsT0FBTyxFQUFFO2dCQUNuQjBCLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBR0RwSCxLQUFLLENBQUMrVyxZQUFZLENBQUNuUCxTQUFTLENBQUM7Y0FDN0IwUCxRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUVELE1BQU1DLFNBQVMsR0FBR3JkLEtBQUssSUFBRztjQUN6QndOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRXpOLEtBQUssQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTTZFLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCaUksa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCcEgsS0FBSyxDQUFDK1csWUFBWSxDQUFDblAsU0FBUyxDQUFDO2NBQzdCMFAsUUFBQSxDQUFBRyxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFDRCxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNbFQsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3BFLE1BQU00QyxhQUFhLEdBQUdBLENBQUEsS0FBTUQsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0NoTCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUEwTixVQUFVO2NBQ1Z4SixPQUFPLEVBQUUrWixNQUFNO2NBQ2Z4YixLQUFLLEVBQUV5RSxXQUFXLENBQUNqQixPQUFPLENBQUNrWSxJQUFJO2NBQy9CdmIsSUFBSSxFQUFDLFdBQVc7Y0FDaEJmLFNBQVMsRUFBQyxRQUFRO2NBQ2xCRyxPQUFPLEVBQUM7WUFBUyxFQUNoQixFQUNGYSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29ILEdBQUEsQ0FBQVEsUUFBUTtjQUFDdkgsT0FBTyxFQUFDLFNBQVM7Y0FBQ2tDLE9BQU8sRUFBRW1hO1lBQWlCLEdBQ3BEblgsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixFQUVWb0UsZUFBZSxJQUNmL0ssTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFxQixZQUFZO2NBQUNILFNBQVMsRUFBRUEsU0FBUztjQUFFVSxRQUFRLEVBQUV3SDtZQUFhLEdBQzFEakwsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQU1sQixLQUFLLENBQUNrSCxNQUFNLENBQUN2QixNQUFNLENBQU8sQ0FFakMsRUFDQThFLGVBQWUsSUFDZnJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0osV0FBQSxDQUFBcVQsdUJBQXVCO2NBQ3ZCalksSUFBSSxFQUFFNkUsZUFBZTtjQUNyQk0sUUFBUTtjQUNSb08sU0FBUyxFQUFFbFosUUFBUSxDQUFDa1osU0FBUztjQUM3QjVTLE9BQU8sRUFBRXFYLGlCQUFpQjtjQUMxQmpWLFVBQVUsRUFBRWdWO1lBQVMsRUFFdEIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBdmIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBd2QsU0FBQSxHQUFBeGQsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUErSSxhQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVTBMLHlCQUF5QkEsQ0FBQztZQUFFckosSUFBSTtZQUFFMEU7VUFBTyxDQUFFO1lBQzFELE1BQU07Y0FDTHZHLEtBQUs7Y0FDTGdHLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTdHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDOE4sS0FBSyxFQUFFOFAsUUFBUSxDQUFDLEdBQUcxYixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTtjQUFFNk4sZ0JBQWdCO2NBQUVsSDtZQUFRLENBQUUsR0FBRyxJQUFBdUIsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUMzRCxNQUFNMFUsTUFBTSxHQUFHO2NBQ2QzYyxRQUFRLEVBQUVzQyxLQUFLLElBQUc7Z0JBQ2pCK2EsUUFBUSxDQUFDL2EsS0FBSyxDQUFDckMsYUFBYSxDQUFDRSxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNENkMsT0FBTyxFQUFFLE1BQU1WLEtBQUssSUFBRztnQkFDdEIsTUFBTW1MLGdCQUFnQixDQUFDck0sSUFBSSxFQUFFbU0sS0FBSyxDQUFDO2dCQUNuQ3pILE9BQU8sRUFBRTtjQUNWO2FBQ0E7WUFFRCxPQUNDbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxRyxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsY0FBYztjQUFDbUYsT0FBTyxFQUFFQTtZQUFPLEdBQzFFbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF3SSxJQUFJLFFBQ0o5RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsaUJBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQzlVLEtBQUssQ0FBTSxFQUM3QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUM4VyxNQUFNLENBQUNwVixXQUFXLENBQVEsQ0FDL0IsRUFFVFUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzlMLEtBQUs7Y0FDbENiLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRW9OLEtBQUs7Y0FDWnZOLFFBQVEsRUFBRTJjLE1BQU0sQ0FBQzNjLFFBQVE7Y0FDekJrQixXQUFXLEVBQUUzQixLQUFLLENBQUM4VyxNQUFNLENBQUN4SixRQUFRLENBQUMzTDtZQUFXLEVBQzdDLENBQ0ksRUFFUFMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDOGIsU0FBQSxDQUFBbFUsUUFBUTtjQUFDdkgsT0FBTyxFQUFDLFNBQVM7Y0FBQ2tDLE9BQU8sRUFBRTJaLE1BQU0sQ0FBQzNaO1lBQU8sR0FDakRnRCxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ0gsRUFDVDNHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0gsR0FBQSxDQUFBK1UsZ0JBQWdCO2NBQUNyVyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBNUUsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBd2QsU0FBQSxHQUFBeGQsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQVFNLFNBQVV1ZSxxQkFBcUJBLENBQUM7WUFBRXhYLE9BQU87WUFBRXlJLGVBQWUsR0FBRztVQUFFLENBQUU7WUFDdEUsTUFBTTtjQUNMaFAsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxNQUFNO2NBQ04wUSxRQUFRO2NBQ1JsUixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzhHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3RSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDMk4sS0FBSyxFQUFFOFAsUUFBUSxDQUFDLEdBQUcxYixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDb08sS0FBSyxFQUFFdVAsUUFBUSxDQUFDLEdBQUc1YixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTStjLE1BQU0sR0FBRztjQUNkM2MsUUFBUSxFQUFFc0MsS0FBSyxJQUFHO2dCQUNqQithLFFBQVEsQ0FBQy9hLEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRDZDLE9BQU8sRUFBRSxNQUFNVixLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hrRSxXQUFXLENBQUMsSUFBSSxDQUFDO2tCQUVqQixNQUFNbU0sUUFBUSxHQUFHLE1BQU1uVCxRQUFRLENBQUNLLEtBQUssQ0FBQ3lJLFFBQVEsQ0FBQ2lGLEtBQUssRUFBRTtvQkFBRSxHQUFHZ0I7a0JBQWUsQ0FBRSxDQUFDO2tCQUU3RTtrQkFDQSxJQUFJb0UsUUFBUSxDQUFDM0UsS0FBSyxFQUFFO29CQUNuQixNQUFNd1AsUUFBUSxHQUFHQSxDQUFDeFAsS0FBSyxFQUFFb0wsTUFBTSxHQUFHLEVBQUUsS0FBSTtzQkFDdkMsTUFBTTFOLEdBQUcsR0FBR25NLEtBQUssQ0FBQ3VQLE1BQU0sR0FBR2QsS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBRyxTQUFTO3NCQUNyRCxJQUFJLENBQUMsQ0FBQ29MLE1BQU0sQ0FBQzVSLE1BQU0sRUFBRTt3QkFDcEIsT0FBT2pJLEtBQUssQ0FBQ3VQLE1BQU0sQ0FBQ3BELEdBQUcsQ0FBQyxHQUFHLElBQUkwTixNQUFNLEVBQUU7O3NCQUV4QyxPQUFPN1osS0FBSyxDQUFDdVAsTUFBTSxDQUFDcEQsR0FBRyxDQUFDO29CQUN6QixDQUFDO29CQUVENlIsUUFBUSxDQUFDQyxRQUFRLENBQUM3SyxRQUFRLENBQUMzRSxLQUFLLEVBQUUyRSxRQUFRLENBQUN5RyxNQUFNLENBQUMsQ0FBQztvQkFDbkQ1UyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNsQjs7a0JBRUQsTUFBTTNHLEtBQUssR0FBR0wsUUFBUSxDQUFDSyxLQUFLLENBQUNvWCxPQUFPLEVBQUU7a0JBRXRDO2tCQUNBUixRQUFRLENBQUM7b0JBQUU1VztrQkFBSyxDQUFFLENBQUM7a0JBQ25CO2tCQUNBNk4sVUFBVSxDQUFDLE1BQUs7b0JBQ2ZsSCxXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2lCQUNSLENBQUMsT0FBTzRHLENBQUMsRUFBRTtrQkFDWEMsT0FBTyxDQUFDVyxLQUFLLENBQUMsRUFBRSxFQUFFWixDQUFDLEVBQUVBLENBQUMsQ0FBQ3FRLE9BQU8sQ0FBQztrQkFDL0JGLFFBQVEsQ0FBQyxTQUFTLENBQUM7O2NBRXJCO2FBQ0E7WUFFRCxPQUNDNWIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxRyxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsY0FBYztjQUFDbUYsT0FBTyxFQUFFQTtZQUFPLEdBQzFFbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGlCQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUM4VyxNQUFNLENBQUM5VSxLQUFLLENBQU0sRUFDN0JJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxlQUFPbEIsS0FBSyxDQUFDOFcsTUFBTSxDQUFDcFYsV0FBVyxDQUFRLENBQy9CLEVBQ1RVLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBd0ksSUFBSSxRQUNKOUYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUEySSxhQUFhO2NBQUNqUixLQUFLLEVBQUVBLEtBQUs7Y0FBRXlPLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzdDck0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzlMLEtBQUs7Y0FDbENiLElBQUksRUFBQyxPQUFPO2NBQ1pDLEtBQUssRUFBRW9OLEtBQUs7Y0FDWnZOLFFBQVEsRUFBRTJjLE1BQU0sQ0FBQzNjLFFBQVE7Y0FDekJrQixXQUFXLEVBQUUzQixLQUFLLENBQUM4VyxNQUFNLENBQUN4SixRQUFRLENBQUMzTDtZQUFXLEVBQzdDLENBQ0ksRUFFUFMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDOGIsU0FBQSxDQUFBbFUsUUFBUTtjQUFDdkgsT0FBTyxFQUFDLFNBQVM7Y0FBQ2tDLE9BQU8sRUFBRTJaLE1BQU0sQ0FBQzNaO1lBQU8sR0FDakRnRCxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ0gsRUFDVDNHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0gsR0FBQSxDQUFBK1UsZ0JBQWdCO2NBQUNyVyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQSxJQUFBNUUsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBd2QsU0FBQSxHQUFBeGQsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVUyZSxlQUFlQSxDQUFDO1lBQUV0YyxJQUFJO1lBQUUwRTtVQUFPLENBQUU7WUFDaEQsTUFBTTtjQUNMdkcsS0FBSztjQUNMQyxRQUFRO2NBQ1IrRixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE3RyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzhHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3RSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDbUcsTUFBTSxFQUFFa00sU0FBUyxDQUFDLEdBQUd0USxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQztjQUMxQzZjLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQnRiO2FBQ0EsQ0FBQztZQUVGLE1BQU11YixNQUFNLEdBQUc7Y0FDZDNjLFFBQVEsRUFBRXNDLEtBQUssSUFBRztnQkFDakIyUCxTQUFTLENBQUM7a0JBQ1QsR0FBR2xNLE1BQU07a0JBQ1QsQ0FBQ3pELEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0MsSUFBSSxHQUFHb0MsS0FBSyxDQUFDckMsYUFBYSxDQUFDRTtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRDZDLE9BQU8sRUFBRSxNQUFNVixLQUFLLElBQUc7Z0JBQ3RCa0UsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTWhILFFBQVEsQ0FBQ0ssS0FBSyxDQUFDeUksUUFBUSxDQUFDdkMsTUFBTSxDQUFDMFcsWUFBWSxDQUFDO2dCQUNsRDNXLE9BQU8sRUFBRTtnQkFFVDRILFVBQVUsQ0FBQyxNQUFLO2tCQUNmbEgsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNUO2FBQ0E7WUFFRCxPQUNDN0UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxRyxJQUFJO2NBQUN4RSxTQUFTLEVBQUMsY0FBYztjQUFDbUYsT0FBTyxFQUFFQTtZQUFPLEdBQzFFbkUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF3SSxJQUFJLFFBQ0o5RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsaUJBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQzlVLEtBQUssQ0FBTSxFQUM3QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUM4VyxNQUFNLENBQUNwVixXQUFXLENBQVEsQ0FDL0IsRUFFVFUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzlMLEtBQUs7Y0FDbENiLElBQUksRUFBQyxjQUFjO2NBQ25CQyxLQUFLLEVBQUU0RixNQUFNLENBQUMwVyxZQUFZO2NBQzFCemMsUUFBUSxFQUFFMmMsTUFBTSxDQUFDM2MsUUFBUTtjQUN6QmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQzhXLE1BQU0sQ0FBQ3hKLFFBQVEsQ0FBQzNMO1lBQVcsRUFDN0MsQ0FDSSxFQUVQUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4YixTQUFBLENBQUFsVSxRQUFRO2NBQUN2SCxPQUFPLEVBQUMsU0FBUztjQUFDa0MsT0FBTyxFQUFFMlosTUFBTSxDQUFDM1o7WUFBTyxHQUNqRGdELFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDSCxFQUNUM0csTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSCxHQUFBLENBQUErVSxnQkFBZ0I7Y0FBQ3JXLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVBLElBQUE1RSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWtXLFlBQUEsR0FBQWxXLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVNGUsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVwZSxLQUFLO2NBQUVnRyxLQUFLO2NBQUUwTSxTQUFTO2NBQUV6UztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2xFLE1BQU04QyxRQUFRLEdBQUc7Y0FBRXBDLEtBQUssRUFBRSxFQUFFO2NBQUVZLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3FlLFNBQVMsQ0FBQ3hELE1BQU0sQ0FBQ2xaO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUMyYyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbmMsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNKLFFBQVEsQ0FBQ3FlLFFBQVEsQ0FBQztZQUNqRSxNQUFNN2QsUUFBUSxHQUFHLE1BQU1zQyxLQUFLLElBQUc7Y0FDOUJ3YixXQUFXLENBQUN4YixLQUFLLENBQUNyQyxhQUFhLENBQUNFLEtBQUssQ0FBQztjQUN0QyxNQUFNWCxRQUFRLENBQUNZLEdBQUcsQ0FBQztnQkFBRXlkLFFBQVEsRUFBRXZiLEtBQUssQ0FBQ3JDLGFBQWEsQ0FBQ0U7Y0FBSyxDQUFFLENBQUM7Y0FDM0QsTUFBTW9GLEtBQUssQ0FBQ2pGLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTTZCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ29RLEdBQUcsQ0FBQzdDLElBQUksS0FBSztjQUFFdlAsS0FBSyxFQUFFdVAsSUFBSTtjQUFFM08sS0FBSyxFQUFFeEIsS0FBSyxDQUFDcWUsU0FBUyxDQUFDbE8sSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0vTCxRQUFRLEdBQUc7Y0FBRW9hLFVBQVUsRUFBRXhZLEtBQUssQ0FBQ3lZO1lBQUssQ0FBRTtZQUU1QyxPQUNDcmMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFPbVksT0FBTyxFQUFDO1lBQUUsR0FBRXJaLEtBQUssQ0FBQ3FlLFNBQVMsQ0FBQ3hELE1BQU0sQ0FBQ3JaLEtBQUssQ0FBUyxFQUN4RFksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3VSxZQUFBLENBQUFPLFdBQVc7Y0FDWHJWLEtBQUssRUFBRVgsUUFBUSxDQUFDcWUsUUFBUTtjQUN4QjNkLElBQUksRUFBQyxVQUFVO2NBQ2ZpQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJuQyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkMkQ7WUFBUSxFQUNYLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQWhDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBa1csWUFBQSxHQUFBbFcsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVrZixjQUFjQSxDQUFDO1lBQUVsWSxNQUFNO1lBQUVrTTtVQUFTLENBQUU7WUFDbkQsTUFBTTtjQUFFelMsUUFBUTtjQUFFK0Y7WUFBSyxDQUFFLEdBQUcsSUFBQXBHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDaEQsSUFBSW1VLFlBQVksR0FBRztjQUFFelQsS0FBSyxFQUFFLEVBQUU7Y0FBRVksS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUNqRCxNQUFNb0IsT0FBTyxHQUFHLEVBQUU7WUFDbEJvRCxLQUFLLENBQUN5TixLQUFLLENBQUNoUyxVQUFVLENBQUN5SSxLQUFLLENBQUNrQyxPQUFPLENBQUNnUCxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDdkYsRUFBRSxLQUFLNVYsUUFBUSxDQUFDNFYsRUFBRSxFQUFFO2NBQzFCLElBQUl1RixDQUFDLENBQUN2RixFQUFFLEtBQUtyUCxNQUFNLENBQUNsRyxLQUFLLENBQUNxZSxVQUFVLEVBQUV0SyxZQUFZLEdBQUc7Z0JBQUV6VCxLQUFLLEVBQUV3YSxDQUFDLENBQUN2RixFQUFFO2dCQUFFclUsS0FBSyxFQUFFNFosQ0FBQyxDQUFDcFo7Y0FBSyxDQUFFO2NBQ3BGWSxPQUFPLENBQUNxSixJQUFJLENBQUM7Z0JBQUVyTCxLQUFLLEVBQUV3YSxDQUFDLENBQUN2RixFQUFFO2dCQUFFclUsS0FBSyxFQUFFNFosQ0FBQyxDQUFDcFo7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTTRjLFlBQVksR0FBRzNRLElBQUksSUFBRztjQUMzQnlFLFNBQVMsQ0FBQ2xNLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFbEcsS0FBSyxFQUFFO2tCQUFFLEdBQUdrRyxNQUFNLENBQUNsRyxLQUFLO2tCQUFFcWUsVUFBVSxFQUFFMVEsSUFBSSxDQUFDNUcsTUFBTSxDQUFDekc7Z0JBQUs7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNoRyxDQUFDO1lBRUQsT0FDQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFPbVksT0FBTyxFQUFDLEVBQUU7Y0FBQ2pZLFNBQVMsRUFBQztZQUFXLEcsc0NBRXRDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3VSxZQUFBLENBQUFPLFdBQVc7Y0FBQ3hWLFFBQVEsRUFBRW1lLFlBQVk7Y0FBRXZLLFlBQVksRUFBRUEsWUFBWTtjQUFFelIsT0FBTyxFQUFFLENBQUN5UixZQUFZLEVBQUUsR0FBR3pSLE9BQU87WUFBQyxFQUFJLENBQ2pHO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFSLE1BQUEsR0FBQTVDLE9BQUE7VUFrQk8sTUFBTXFmLGVBQWUsR0FBQTlVLE9BQUEsQ0FBQThVLGVBQUEsR0FBR3pjLE1BQUEsQ0FBQUcsT0FBSyxDQUFDcU0sYUFBYSxDQUFDLEVBQTZCLENBQUM7VUFDMUUsTUFBTTFPLGtCQUFrQixHQUFHQSxDQUFBLEtBQU1rQyxNQUFBLENBQUFHLE9BQUssQ0FBQ3VNLFVBQVUsQ0FBQytQLGVBQWUsQ0FBQztVQUFDOVUsT0FBQSxDQUFBN0osa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkIxRSxJQUFBb0ksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFnTCxXQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBOGQsUUFBQSxHQUFBOWQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBRUEsSUFBQXNmLFNBQUEsR0FBQXRmLE9BQUE7VUFDQSxJQUFBdWYsTUFBQSxHQUFBdmYsT0FBQTtVQUVNLFNBQVUrZCxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMdGQsUUFBUTtjQUNSK0YsS0FBSztjQUNMaEcsS0FBSztjQUNMZ0csS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBN0csUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUNpTixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdoTCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDb0ssZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHdEksTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5FLE1BQU1zZCxTQUFTLEdBQUdyZCxLQUFLLElBQUlMLFFBQVEsQ0FBQzhJLFFBQVEsQ0FBQ3pJLEtBQUssQ0FBQztZQUVuRCxNQUFNNkUsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJpSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJwSCxLQUFLLENBQUMrVyxZQUFZLENBQUNuUCxTQUFTLENBQUM7Y0FDN0IwUCxRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUVELE1BQU1FLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1sVCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTTRDLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTRSLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkIsSUFBSTtnQkFDSCxJQUFJLENBQUMvZSxRQUFRLENBQUNnZixXQUFXLEVBQUU7a0JBQzFCRixNQUFBLENBQUFHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbmYsS0FBSyxDQUFDeUIsVUFBVSxDQUFDdWQsSUFBSSxDQUFDRyxPQUFPLENBQUM7a0JBQzVDOztnQkFHRCxNQUFNL0wsUUFBUSxHQUFHLE1BQU1wTixLQUFLLENBQUNvWixZQUFZLENBQUNuZixRQUFRLENBQUM0VixFQUFFLENBQUM7Z0JBQ3REeUgsUUFBQSxDQUFBRyxPQUFPLENBQUM0QixTQUFTLENBQ2hCLGdCQUFnQnJaLEtBQUssQ0FBQ3lOLEtBQUssQ0FBQ29DLEVBQUUsSUFBSTVWLFFBQVEsQ0FBQzRCLElBQUksSUFBSTVCLFFBQVEsQ0FBQzRWLEVBQUUsU0FBU3pDLFFBQVEsQ0FBQ25ULFFBQVEsQ0FBQ3FmLElBQUksQ0FBQ3pKLEVBQUUsYUFBYSxDQUM3RztnQkFDRC9ILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUYsUUFBUSxDQUFDO2VBQ3JCLENBQUMsT0FBT3ZGLENBQUMsRUFBRTtnQkFDWGtSLE1BQUEsQ0FBQUcsS0FBSyxDQUFDelEsS0FBSyxDQUFDekksS0FBSyxDQUFDUyxXQUFXLENBQUM4SSxNQUFNLENBQUNnUSxhQUFhLENBQUM7O1lBRXJELENBQUM7WUFDRCxPQUNDbmQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQStCLEdBQzdDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDNGQsU0FBQSxDQUFBVSxnQkFBZ0IsT0FBRyxFQUNwQnBkLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkMsR0FDekRnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTBOLFVBQVU7Y0FBQzlLLElBQUksRUFBQyxLQUFLO2NBQUNmLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ3FDLE9BQU8sRUFBRXViO1lBQUksRUFBSSxFQUM5RTVjLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0gsR0FBQSxDQUFBUSxRQUFRO2NBQUN2SCxPQUFPLEVBQUMsU0FBUztjQUFDa0MsT0FBTyxFQUFFbWE7WUFBaUIsR0FDcERuWCxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLENBQ04sQ0FDRCxDQUNELENBQ0QsRUFDTG9FLGVBQWUsSUFDZi9LLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0MsTUFBQSxDQUFBcUIsWUFBWTtjQUFDSCxTQUFTLEVBQUVBLFNBQVM7Y0FBRVUsUUFBUSxFQUFFd0g7WUFBYSxHQUMxRGpMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUFNdUYsV0FBVyxDQUFDakIsT0FBTyxDQUFDRyxNQUFNLENBQU8sQ0FFeEMsRUFDQThFLGVBQWUsSUFDZnJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0osV0FBQSxDQUFBcVQsdUJBQXVCO2NBQ3ZCalksSUFBSSxFQUFFNkUsZUFBZTtjQUNyQk0sUUFBUTtjQUNSb08sU0FBUyxFQUFFbFosUUFBUSxDQUFDa1osU0FBUztjQUM3QjVTLE9BQU8sRUFBRXFYLGlCQUFpQjtjQUMxQmpWLFVBQVUsRUFBRWdWO1lBQVMsRUFFdEIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBOEIsV0FBQSxHQUFBamdCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFrZ0IsU0FBQSxHQUFBbGdCLE9BQUE7VUFFTztVQUFVLFNBQVU2QixjQUFjQSxDQUFDLEVBQUU7WUFDM0MsTUFBTTtjQUFFcEIsUUFBUTtjQUFFRCxLQUFLO2NBQUVpRyxZQUFZO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFwRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3JFLE1BQU0sQ0FBQ3lmLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd4ZCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQztjQUM1Q3dmLEdBQUcsRUFBRTVmLFFBQVEsQ0FBQzBmLE9BQU87Y0FDckJHLElBQUksRUFBRUMsSUFBSSxDQUFDQyxHQUFHO2FBQ2QsQ0FBQztZQUVGLE1BQU1qWSxHQUFHLEdBQUcsMERBQTBEOUgsUUFBUSxDQUFDNEIsSUFBSSxFQUFFO1lBRXJGLE1BQU04RyxVQUFVLEdBQUdzWCxJQUFJLElBQUloZ0IsUUFBUSxDQUFDaWdCLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDO1lBRXpELElBQUF4Z0IsTUFBQSxDQUFBd0IsU0FBUyxFQUNSLENBQUNoQixRQUFRLENBQUMsRUFDVixNQUNDMmYsVUFBVSxDQUFDO2NBQ1ZDLEdBQUcsRUFBRTVmLFFBQVEsQ0FBQzBmLE9BQU87Y0FDckJHLElBQUksRUFBRUMsSUFBSSxDQUFDQyxHQUFHO2FBQ2QsQ0FBQyxFQUNILGlCQUFpQixDQUNqQjtZQUVELE1BQU1HLFVBQVUsR0FBR1IsT0FBTyxDQUFDRSxHQUFHLEdBQUcsR0FBR0YsT0FBTyxDQUFDRSxHQUFHLFlBQVlFLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsR0FBR3BTLFNBQVM7WUFDbkYsTUFBTW5OLFFBQVEsR0FBR3NDLEtBQUssSUFBRztjQUN4QjlDLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFbUIsS0FBSyxFQUFFZSxLQUFLLENBQUNyQyxhQUFhLENBQUNFO2NBQUssQ0FBRSxDQUFDO1lBQ25ELENBQUM7WUFFRCxPQUNDd0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUUvQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUUyRztZQUFHLEdBQ3JCM0YsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1ZSxXQUFBLENBQUFXLFVBQVU7Y0FDVnBlLEtBQUssRUFBRWhDLEtBQUssQ0FBQzJmLE9BQU8sQ0FBQzNkLEtBQUs7Y0FDMUJOLFdBQVcsRUFBRTFCLEtBQUssQ0FBQzJmLE9BQU8sQ0FBQ2plLFdBQVc7Y0FDdEMyZSxXQUFXLEVBQUVwZ0IsUUFBUSxDQUFDcWdCLGtCQUFrQjtjQUN4Q0MsTUFBTSxFQUFDLFVBQVU7Y0FDakJaLE9BQU8sRUFBRVEsVUFBVTtjQUNuQnhYLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGdkcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUF1VCxLQUFLO2NBQ0w3UixTQUFTLEVBQUMsd0JBQXdCO2NBQ2xDVCxJQUFJLEVBQUMsT0FBTztjQUNaQyxLQUFLLEVBQUVYLFFBQVEsQ0FBQytCLEtBQUssR0FBRy9CLFFBQVEsQ0FBQytCLEtBQUssR0FBRyxFQUFFO2NBQzNDdkIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCa0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDb0ksSUFBSSxDQUFDcEcsS0FBSztjQUM3QmxCLE1BQU0sRUFBRW1GO1lBQVksRUFDbkIsQ0FDRyxFQUNON0QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFlLEdBQzdCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUEyQyxPQUFPO2NBQUN2QixJQUFJLEVBQUVWLFFBQVEsQ0FBQzRCO1lBQUksRUFBSSxFLEtBQUU3QixLQUFLLENBQUN5SixLQUFLLENBQUN4SixRQUFRLENBQUM0QixJQUFJLENBQUMsQ0FDdkQsQ0FDRCxFQUNOTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3ZSxTQUFBLENBQUFjLGdCQUFnQixPQUFHLENBQ2YsQ0FDRSxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUFwZSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWtXLFlBQUEsR0FBQWxXLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBaWhCLE1BQUEsR0FBQWpoQixPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVnaEIsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRXhnQixLQUFLO2NBQUVnRyxLQUFLO2NBQUUwTSxTQUFTO2NBQUV6UztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2xFLE1BQU04QyxRQUFRLEdBQUc7Y0FBRXBDLEtBQUssRUFBRSxFQUFFO2NBQUVZLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3FlLFNBQVMsQ0FBQ3hELE1BQU0sQ0FBQ2xaO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUMyYyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbmMsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNKLFFBQVEsQ0FBQ3FlLFFBQVEsQ0FBQztZQUNqRSxNQUFNLENBQUMxWSxJQUFJLEVBQUU4YSxPQUFPLENBQUMsR0FBR3RlLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUMyRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1JLFFBQVEsR0FBRyxNQUFNc0MsS0FBSyxJQUFHO2NBQzlCd2IsV0FBVyxDQUFDeGIsS0FBSyxDQUFDckMsYUFBYSxDQUFDRSxLQUFLLENBQUM7WUFDdkMsQ0FBQztZQUNELE1BQU1nQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNvUSxHQUFHLENBQUM3QyxJQUFJLEtBQUs7Y0FBRXZQLEtBQUssRUFBRXVQLElBQUk7Y0FBRTNPLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3FlLFNBQVMsQ0FBQ2xPLElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUV6RixNQUFNa08sU0FBUyxHQUFHO2NBQ2pCc0MsRUFBRSxFQUFFLHFCQUFxQjtjQUN6QkMsRUFBRSxFQUFFO2FBQ0o7WUFDRCxNQUFNblosTUFBTSxHQUFHLE1BQU0xRSxLQUFLLElBQUc7Y0FDNUJrRSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCaEgsUUFBUSxDQUFDYyxJQUFJLENBQUM7Z0JBQUV1ZDtjQUFRLENBQUUsQ0FBQztjQUUzQnJYLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJ5WixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU05SixVQUFVLEdBQUdBLENBQUEsS0FBTThKLE9BQU8sQ0FBQyxDQUFDOWEsSUFBSSxDQUFDO1lBQ3ZDLE9BQ0N4RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1ZixNQUFBLENBQUFJLEtBQUs7Y0FDTHpmLFNBQVMsRUFBQyxvQkFBb0I7Y0FDOUJ5ZSxHQUFHLEVBQUV4QixTQUFTLENBQUNwZSxRQUFRLENBQUNxZSxRQUFRLENBQUM7Y0FDakN3QyxHQUFHLEVBQUMsVUFBVTtjQUNkcmQsT0FBTyxFQUFFbVQ7WUFBVSxFQUNsQixFQUNEaFIsSUFBSSxJQUNKeEQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQyxNQUFBLENBQUFvSSxLQUFLO2NBQUN6RyxJQUFJO2NBQUNXLE9BQU8sRUFBRXFRO1lBQVUsR0FDOUJ4VSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQXdJLElBQUk7Y0FBQ0MsUUFBUSxFQUFFVjtZQUFNLEdBQ3JCckYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU9tWSxPQUFPLEVBQUM7WUFBRSxHQUFFclosS0FBSyxDQUFDcWUsU0FBUyxDQUFDeEQsTUFBTSxDQUFDclosS0FBSyxDQUFTLEVBQ3hEWSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3dVLFlBQUEsQ0FBQU8sV0FBVztjQUFDclYsS0FBSyxFQUFFMGQsUUFBUTtjQUFFM2QsSUFBSSxFQUFDLFVBQVU7Y0FBQ2lDLE9BQU8sRUFBRUEsT0FBTztjQUFFbkMsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDdEYyQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1CLE1BQU07Y0FBQzlELE9BQU8sRUFBQyxTQUFTO2NBQUNrQyxPQUFPLEVBQUVnRSxNQUFNO2NBQUVyRCxRQUFRLEVBQUU0QztZQUFRLEdBQzNEaEIsS0FBSyxDQUFDUyxXQUFXLENBQUNqQixPQUFPLENBQUN6RSxJQUFJLENBQ3ZCLENBQ0osQ0FDQSxDQUVSLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REEsSUFBQXFCLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFlTSxTQUFVdWhCLFlBQVlBLENBQUM7WUFBRXBnQixJQUFJO1lBQUVxZ0IsUUFBUSxHQUFHLEtBQUs7WUFBRUMsSUFBSSxHQUFHO1VBQUssQ0FBc0I7WUFDeEYsTUFBTTtjQUFFaGhCLFFBQVE7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNZ2hCLEdBQUcsR0FBR0QsSUFBSSxHQUFHaGhCLFFBQVEsQ0FBQ0ssS0FBSyxHQUFHTCxRQUFRO1lBQzVDLE1BQU13UCxHQUFHLEdBQUdyTixNQUFBLENBQUFHLE9BQUssQ0FBQ21OLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTTlPLEtBQUssR0FBR3FnQixJQUFJLEdBQUdoaEIsUUFBUSxDQUFDSyxLQUFLLENBQUM2Z0IsWUFBWSxDQUFDeGdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ1YsUUFBUSxDQUFDVSxJQUFJLENBQUM7WUFFekUsTUFBTSxDQUFDMlAsT0FBTyxFQUFFOFEsVUFBVSxDQUFDLEdBQUdoZixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ08sS0FBSyxDQUFDO1lBRW5ELE1BQU1tSCxHQUFHLEdBQUcsaUJBQWlCbkgsS0FBSyxHQUFHLDRCQUE0QixHQUFHLEVBQUUsRUFBRTtZQUN4RSxJQUFJeWdCLEtBQUssR0FBR3pnQixLQUFLLEdBQUcsV0FBVyxHQUFHLFNBQVM7WUFFM0MsSUFBSW9nQixRQUFRLElBQUksQ0FBQ3BnQixLQUFLLEVBQUV5Z0IsS0FBSyxHQUFHLFVBQVU7WUFDMUMsSUFBQTVoQixNQUFBLENBQUF3QixTQUFTLEVBQ1IsQ0FBQ2lnQixHQUFHLENBQUMsRUFDTCxNQUFLO2NBQ0osTUFBTXRnQixLQUFLLEdBQUdxZ0IsSUFBSSxHQUFHaGhCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDNmdCLFlBQVksQ0FBQ3hnQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNWLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDO2NBQ3pFLElBQUlDLEtBQUssRUFBRTZPLEdBQUcsQ0FBQ2EsT0FBTyxDQUFDbk4sU0FBUyxDQUFDRSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUM3RG9NLEdBQUcsQ0FBQ2EsT0FBTyxDQUFDbk4sU0FBUyxDQUFDQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7Y0FDOURnZSxVQUFVLENBQUN4Z0IsS0FBSyxDQUFDO1lBQ2xCLENBQUMsRUFDRCxHQUFHRCxJQUFJLFVBQVUsQ0FDakI7WUFFRCxJQUFJc2dCLElBQUksSUFBSSxDQUFDaGhCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDc1osU0FBUyxDQUFDalosSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBRXhELE9BQ0N5QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUlFLFNBQVMsRUFBRTJHLEdBQUc7Y0FBRTBILEdBQUcsRUFBRUE7WUFBRyxHQUMzQnJOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBTyxHQUFFcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDNmYsUUFBUSxDQUFDM2dCLElBQUksQ0FBQyxDQUFRLEVBQ2hFeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFPLEdBQUVwQixLQUFLLENBQUNzaEIsUUFBUSxDQUFDQyxNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFRLENBQ3pELENBQ0g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQTVoQixNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFnaUIsYUFBQSxHQUFBaGlCLE9BQUE7VUFFTSxTQUFVZ2dCLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUV4ZixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDaEQsTUFBTXVoQixLQUFLLEdBQUd4aEIsUUFBUSxDQUFDeWhCLFlBQVk7WUFDbkMsTUFBTSxDQUFDaFcsT0FBTyxFQUFFeEYsVUFBVSxDQUFDLEdBQUc5RCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTXNoQixLQUFLLEdBQUdGLEtBQUssQ0FBQ3ZSLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDO1lBQzFDLElBQUExUSxNQUFBLENBQUF3QixTQUFTLEVBQ1IsQ0FBQ2hCLFFBQVEsRUFBRUEsUUFBUSxDQUFDSyxLQUFLLENBQUMsRUFDMUIsTUFBSztjQUNKNEYsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFDRCxRQUFRLENBQ1I7WUFFRCxPQUNDOUQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFhLEdBQUVwQixLQUFLLENBQUNzaEIsUUFBUSxDQUFDOWYsS0FBSyxDQUFRLEVBQzNEWSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWMsR0FDNUJ1Z0IsS0FBSyxDQUFDMVosTUFBTSxFLEtBQUd3WixLQUFLLENBQUN4WixNQUFNLENBQ3RCLENBQ0YsRUFDTjdGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFJRSxTQUFTLEVBQUM7WUFBb0IsR0FDakNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NnQixhQUFBLENBQUFULFlBQVk7Y0FBQ3BnQixJQUFJLEVBQUM7WUFBTyxFQUFHLEVBQzdCeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNzZ0IsYUFBQSxDQUFBVCxZQUFZO2NBQUNwZ0IsSUFBSSxFQUFDO1lBQWEsRUFBRyxFQUNuQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc2dCLGFBQUEsQ0FBQVQsWUFBWTtjQUFDcGdCLElBQUksRUFBQyxTQUFTO2NBQUNxZ0IsUUFBUTtZQUFBLEVBQUcsRUFDeEM1ZSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NnQixhQUFBLENBQUFULFlBQVk7Y0FBQ0UsSUFBSTtjQUFDdGdCLElBQUksRUFBQztZQUFTLEVBQUcsRUFDcEN5QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NnQixhQUFBLENBQUFULFlBQVk7Y0FBQ0UsSUFBSTtjQUFDdGdCLElBQUksRUFBQztZQUFPLEVBQUcsRUFDbEN5QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3NnQixhQUFBLENBQUFULFlBQVk7Y0FBQ0UsSUFBSTtjQUFDdGdCLElBQUksRUFBQyxVQUFVO2NBQUNxZ0IsUUFBUTtZQUFBLEVBQUcsQ0FDMUMsQ0FDQSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUF2aEIsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9pQixlQUFBLEdBQUFwaUIsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBcWlCLGNBQUEsR0FBQXJpQixPQUFBO1VBQ0EsSUFBQXNpQixjQUFBLEdBQUF0aUIsT0FBQTtVQUNBLElBQUF1aUIsT0FBQSxHQUFBdmlCLE9BQUE7VUFDQSxJQUFBd2lCLGVBQUEsR0FBQXhpQixPQUFBO1VBQ0EsSUFBQXlpQixPQUFBLEdBQUF6aUIsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwaUIsV0FBQSxHQUFBMWlCLE9BQUE7VUFHTztVQUFZLFNBQVUyaUIsa0JBQWtCQSxDQUFDO1lBQUVuYyxLQUFLO1lBQUUvRjtVQUFRLENBQUU7WUFDbEUsTUFBTSxDQUFDdUcsTUFBTSxFQUFFa00sU0FBUyxDQUFDLEdBQUd0USxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBd0JKLFFBQVEsQ0FBQ2tjLGFBQWEsRUFBRSxDQUFDO1lBQzNGLE1BQU0sQ0FBQ2lHLFVBQVUsRUFBRXBpQixLQUFLLENBQUMsR0FBRyxJQUFBUCxNQUFBLENBQUFxRixRQUFRLEVBQUM4YyxlQUFBLENBQUFTLE1BQVksQ0FBQ0MsU0FBUyxDQUFDO1lBQzVELE1BQU07Y0FBRXpnQjtZQUFJLENBQUUsR0FBRzVCLFFBQVE7WUFFekIsSUFBQVIsTUFBQSxDQUFBd0IsU0FBUyxFQUNSLENBQUNoQixRQUFRLENBQUMsRUFDVixNQUFLO2NBQ0p5UyxTQUFTLENBQUM7Z0JBQUUsR0FBR3pTLFFBQVEsQ0FBQ2tjLGFBQWE7Y0FBRSxDQUFFLENBQUM7WUFDM0MsQ0FBQyxFQUNELFFBQVEsQ0FDUjtZQUVELElBQUksQ0FBQ2lHLFVBQVUsRUFBRSxPQUFPaGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBZ08sT0FBTztjQUFDekYsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUNqRCxNQUFNeEcsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJoRyxRQUFRLENBQUNjLElBQUksRUFBRTtZQUNoQixDQUFDO1lBQ0QsTUFBTUgsS0FBSyxHQUFHO2NBQUVvRixLQUFLO2NBQUUvRixRQUFRO2NBQUVELEtBQUs7Y0FBRXdHLE1BQU07Y0FBRWtNLFNBQVM7Y0FBRXpNO1lBQVksQ0FBRTtZQUV6RSxPQUNDN0QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN0QixRQUFBLENBQUFpZixlQUFlLENBQUM5TixRQUFRO2NBQUNuUSxLQUFLLEVBQUVBO1lBQUssR0FDckN3QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnaEIsV0FBQSxDQUFBM0UsZ0JBQWdCLE9BQUcsRUFDcEJuYixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQW1TLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFelUsSUFBSTtjQUNmZSxPQUFPLEVBQUU7Z0JBQ1IsaUJBQWlCLEVBQUVSLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDOGdCLGVBQUEsQ0FBQTlMLHNCQUFzQixPQUFHO2dCQUM3Q3FNLE1BQU0sRUFBRW5nQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzZnQixPQUFBLENBQUF6VCxjQUFjLE9BQUc7Z0JBQzFCLGdCQUFnQixFQUFFbE0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMyZ0IsY0FBQSxDQUFBOWhCLHFCQUFxQixPQUFHO2dCQUMzQ3lpQixNQUFNLEVBQUVwZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrZ0IsT0FBQSxDQUFBN0YsY0FBYyxPQUFHO2dCQUMxQixnQkFBZ0IsRUFBRWhhLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDNGdCLGNBQUEsQ0FBQS9iLHFCQUFxQjtlQUN4QztjQUNEcEUsV0FBVyxFQUFFUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQTtZQUF3QixFQUNwQyxDQUNHLENBQ29CO1VBRTdCOzs7Ozs7Ozs7OztVQ2xEQTs7VUFFQWdKLE1BQUEsQ0FBQXNZLGNBQUEsQ0FBQTFZLE9BQUE7WUFDQW5KLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBd0IsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVWtqQixVQUFVQSxDQUFDO1lBQzFCakUsS0FBSyxHQUFHLEtBQUs7WUFDYnJhLFFBQVE7WUFDUkU7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFa0MsTUFBTTtjQUFFMFEsUUFBUTtjQUFFbFgsS0FBSztjQUFFZ0csS0FBSztjQUFFL0Y7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNdUgsTUFBTSxHQUFHLE1BQU0xRSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQ21DLGVBQWUsRUFBRTtjQUN2Qjs7Ozs7Y0FNQSxJQUFJLENBQUN1WixLQUFLLEVBQUU7Z0JBQ1gsTUFBTXpZLEtBQUssQ0FBQ3lOLEtBQUssQ0FBQ2hTLFVBQVUsQ0FBQ3VSLEdBQUcsQ0FBQytDLEdBQUcsQ0FBQzlWLFFBQVEsQ0FBQzRWLEVBQUUsQ0FBQyxDQUFDaFYsR0FBRyxDQUFDMkYsTUFBTSxDQUFDO2dCQUM3RCxNQUFNdkcsUUFBUSxDQUFDWSxHQUFHLENBQUMyRixNQUFNLENBQUM7Z0JBQzFCUixLQUFLLENBQUNqRixJQUFJLEVBQUU7Z0JBQ1ptVyxRQUFRLENBQUM7a0JBQUV4TCxPQUFPLEVBQUU7Z0JBQUssQ0FBRSxDQUFDOztjQUc3QixJQUFJcEgsUUFBUSxFQUFFQSxRQUFRLEVBQUU7WUFDekIsQ0FBQztZQUNELE1BQU1vUyxLQUFLLEdBQUc7Y0FBRXRTLFFBQVEsRUFBRSxDQUFDb0MsTUFBTSxDQUFDa0YsT0FBTyxJQUFJdEgsUUFBUTtjQUFFWCxPQUFPLEVBQUVnRTtZQUFNLENBQUU7WUFFeEUsT0FDQ3JGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0QsV0FBQSxDQUFBbUIsTUFBTTtjQUFDOUQsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLbVY7WUFBSyxHQUNqQzFRLEtBQUssQ0FBQ1MsV0FBVyxDQUFDakIsT0FBTyxDQUFDekUsSUFBSSxDQUN2QjtVQUVYIiwiaWdub3JlTGlzdCI6W119