System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/components/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/form", "pragmate-ui@1.0.6/empty", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/modal", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@aimpact/ailearn-app@0.5.7/modules/management/refinament.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.6/perfect-scrollbar", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/tabs", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/collapsible", "pragmate-ui@1.0.6/dynamic-list", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.6/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.5.7/components/dynamic-field", "@aimpact/ailearn-app@0.5.7/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/toast", "@aimpact/ailearn-app@0.5.7/components/cover-image.code", "@aimpact/ailearn-app@0.5.7/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_4 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106Form) {
      dependency_5 = _pragmateUi106Form;
    }, function (_pragmateUi106Empty) {
      dependency_6 = _pragmateUi106Empty;
    }, function (_pragmateUi106Components) {
      dependency_7 = _pragmateUi106Components;
    }, function (_pragmateUi106Modal) {
      dependency_8 = _pragmateUi106Modal;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_9 = _aimpactAilearnApp057SharedHooks;
    }, function (_aimpactAilearnApp057ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp057ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi106PerfectScrollbar) {
      dependency_12 = _pragmateUi106PerfectScrollbar;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_13 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106List) {
      dependency_14 = _pragmateUi106List;
    }, function (_pragmateUi106Tabs) {
      dependency_15 = _pragmateUi106Tabs;
    }, function (_pragmateUi106Icons) {
      dependency_16 = _pragmateUi106Icons;
    }, function (_pragmateUi106Collapsible) {
      dependency_17 = _pragmateUi106Collapsible;
    }, function (_pragmateUi106DynamicList) {
      dependency_18 = _pragmateUi106DynamicList;
    }, function (_beyondJsKernel0112Core) {
      dependency_19 = _beyondJsKernel0112Core;
    }, function (_pragmateUi106FormReactSelect) {
      dependency_20 = _pragmateUi106FormReactSelect;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp057ComponentsDynamicField) {
      dependency_22 = _aimpactAilearnApp057ComponentsDynamicField;
    }, function (_aimpactAilearnApp057MainLayoutWidget) {
      dependency_23 = _aimpactAilearnApp057MainLayoutWidget;
    }, function (_beyondJsKernel0112Routing) {
      dependency_24 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi106Toast) {
      dependency_25 = _pragmateUi106Toast;
    }, function (_aimpactAilearnApp057ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp057ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp057AssignmentsChat) {
      dependency_27 = _aimpactAilearnApp057AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/shared/hooks', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/dynamic-field', dependency_22], ['@aimpact/ailearn-app/main-layout.widget', dependency_23], ['@beyond-js/kernel/routing', dependency_24], ['pragmate-ui/toast', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26], ['@aimpact/ailearn-app/assignments/chat', dependency_27]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/modules/management/activity.code');
      ims = new Map();
      /***********************************************************
      INTERNAL MODULE: ./activities/character-talk/advanced-fields
      ***********************************************************/
      ims.set('./activities/character-talk/advanced-fields', {
        hash: 2863048650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "4. ", texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/

      ims.set('./activities/character-talk/index', {
        hash: 4224088490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
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
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
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
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
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
        hash: 3308786945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          var _layouts = require("./layouts");
          var _materials = require("./materials");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = event => {
              const selected = event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.value);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement(_layouts.LayoutChatSelection, null), _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "6. ", texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
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
        hash: 2583235142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _field = require("../field");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          function ContentTheoryActivity({}) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(activity, ['change', 'activity.saved', 'specs.cleaned']);
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
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
            }, React.createElement("h3", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./activities/content-theory/layouts/icon
      ********************************************************/

      ims.set('./activities/content-theory/layouts/icon', {
        hash: 1625558547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutIcon = LayoutIcon;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function LayoutIcon({
            value,
            icon
          }) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = event => {
              event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.dataset.value);
            };
            const attrs = {
              value,
              icon,
              title: texts.activities.settings.layout.options[icon].title
            };
            let containerCls = `layout-icon__item${value === activity.settings?.layout ? ' selected' : ''}`;
            if (value === activity.settings?.layout) attrs.className = 'active';
            return _react.default.createElement("div", {
              className: containerCls,
              onClick: onChange,
              "data-value": value
            }, _react.default.createElement(_icons.AppIconButton, {
              ...attrs
            }), _react.default.createElement(_components.HtmlWrapper, {
              className: "p3"
            }, texts.activities.settings.layout.options[icon].description));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./activities/content-theory/layouts/index
      *********************************************************/

      ims.set('./activities/content-theory/layouts/index', {
        hash: 3109636246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutChatSelection = LayoutChatSelection;
          var _react = require("react");
          var _context = require("../../../context");
          var _icon = require("./icon");
          function LayoutChatSelection() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "layout__selection"
            }, _react.default.createElement("div", {
              className: "activity__section-subheader"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "5. ", texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description))), _react.default.createElement("div", {
              className: "layout-types-container"
            }, _react.default.createElement(_icon.LayoutIcon, {
              value: "full-content-layout",
              icon: "fullContentLayout"
            }), _react.default.createElement(_icon.LayoutIcon, {
              value: "main-content-layout",
              icon: "mainContentLayout"
            }), _react.default.createElement(_icon.LayoutIcon, {
              value: "main-chat-layout",
              icon: "mainChatLayout"
            }))));
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
        hash: 2532574987,
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
          var _components = require("pragmate-ui/components");
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
            const size = activity.materials[type]?.length;
            const canBeCreated = size > 0 && size <= 4000;
            const emptyText = size === 0 || size === undefined ? texts.contentTheory.materials.audio.emptyMaterial : texts.contentTheory.materials.audio.maxLength;
            return _react.default.createElement("div", {
              className: "activity__audio"
            }, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.contentTheory.materials.types[type]), !has ? _react.default.createElement(_react.default.Fragment, null, canBeCreated ? _react.default.createElement("span", {
              className: "audio-label text-muted"
            }, texts.contentTheory.materials.audio.noAudio) : _react.default.createElement("span", {
              className: "audio-label  error-text"
            }, _react.default.createElement(_components.HtmlWrapper, {
              params: {
                type: texts.contentTheory.materials.audio[type]
              }
            }, emptyText))) : null), _react.default.createElement("div", {
              className: "audio__container"
            }, has ? _react.default.createElement("div", {
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
        hash: 156145576,
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
              texts
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const onCreate = () => {
              setShowModal(true);
              globalThis.document.querySelector('html').style.overflow = 'hidden';
            };
            const onClose = () => {
              setShowModal(false);
              globalThis.document.querySelector('html').style.overflow = 'auto';
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, "4. ", texts.contentTheory.materials.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              onClick: onCreate,
              variant: "link"
            }, texts.contentTheory.empty.actions.add))), _react.default.createElement(_list.MaterialList, {
              onCreate: onCreate
            })), showModal && _react.default.createElement(_form.MaterialsForm, {
              show: showModal,
              onClose: onClose
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/list
      **********************************************************/

      ims.set('./activities/content-theory/materials/list', {
        hash: 4227632733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
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
            const {
              globalTexts
            } = store;
            const [open, setOpen] = _react.default.useState(false);
            const toggleOpen = () => setOpen(!open);
            const onConfirm = event => {
              event.stopPropagation();
              activity.materials.clear();
              activity.save();
              toggleOpen();
            };
            const onClick = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const {
              title,
              description
            } = texts.contentTheory.materials.deleteModal;
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
            }, _react.default.createElement("span", null, texts.contentTheory.materials.empty))), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
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
        hash: 674171479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 3370878882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
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
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
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
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
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

      /*****************************************************
      INTERNAL MODULE: ./activities/exercise/advanced-fields
      *****************************************************/

      ims.set('./activities/exercise/advanced-fields', {
        hash: 674171479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activities/exercise/index
      *******************************************/

      ims.set('./activities/exercise/index', {
        hash: 3362493912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ExerciseActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function ExerciseActivity() {
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
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
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
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/field
      **********************************/

      ims.set('./activities/field', {
        hash: 3424251951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityField = ActivityField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _dynamic = require("./specs/manual/dynamic");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ActivityField(props) {
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
            } = props;
            const [updates, setUpdates] = _react.default.useState({});
            const {
              label,
              placeholder,
              title
            } = texts.activities[name];
            const [internalValue, setInternalValue] = _react.default.useState(activity[name]);
            (0, _hooks.useBinder)([activity], () => {
              setInternalValue(activity[name]);
            });
            const onBlur = () => activity.save();
            const onChange = event => {
              setInternalValue(event.currentTarget.value);
              const {
                name,
                value
              } = event.currentTarget;
              activity.set({
                [name]: value
              });
            };
            if (!texts.activities[name]) {
              console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              return null;
            }
            const attrs = {
              label,
              placeholder,
              value: internalValue
            };
            //the structure has and advance settings defining if is required or not, for example.
            const Field = fieldTypes[type];
            return _react.default.createElement("div", null, titles ? _react.default.createElement("h5", null, title) : null, _react.default.createElement(Field, {
              key: `${name}-activity-field`,
              variant: "floating",
              label: label,
              name: name,
              ...attrs,
              onChange: onChange,
              onBlur: onBlur
            }));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./activities/free-conversation/advanced-fields
      **************************************************************/

      ims.set('./activities/free-conversation/advanced-fields', {
        hash: 674171479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./activities/free-conversation/index
      ****************************************************/

      ims.set('./activities/free-conversation/index', {
        hash: 2672189481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = FreeConversationActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function FreeConversationActivity() {
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
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
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
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
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
        hash: 363144000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceManualForm = MultipleChoiceManualForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          var _header = require("../../specs/header");
          var _context2 = require("../context");
          var _questions = require("./questions");
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
            const [confirm, setConfirm] = _react.default.useState(false);
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
            const toggleOpen = () => setConfirm(!confirm);
            const cancelChanges = () => {
              if (!activity.unpublished) {
                onCancel();
                return;
              }
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context2.MultipleChoiceContext.Provider, {
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
              onClick: cancelChanges
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !!errors.length || fetching
            }, globalTexts.actions.save)))), confirm && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onCancel,
              onCancel: toggleOpen
            }, _react.default.createElement("h3", null, texts.multipleChoice.cancel.title), _react.default.createElement("p", null, texts.multipleChoice.cancel.description)));
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
        hash: 769504278,
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
            const finalView = activity.specs.empty() && view !== 'form' ? 'empty' : view === 'empty' ? 'specs' : view;
            const listenChanges = () => {
              setView(activity.specs.empty() ? 'empty' : view === 'empty' ? 'specs' : view);
            };
            (0, _hooks.useBinder)([activity.specs], listenChanges, ['specs.cleaned', 'activity.generated', 'activity.saved']);
            (0, _hooks.useBinder)([activity], listenChanges, 'activity.generated');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container pt-0`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_form.Textarea, {
              label: texts.activities.description.label,
              variant: "floating",
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }))), React.createElement(_components.ConditionalContainer, {
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
        hash: 2075130467,
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
            const [order, setOrder] = _react.default.useState(values.specs.questions);
            const toggleReorder = () => setReorder(!redordering);
            const [processing, setProcessing] = _react.default.useState(false);
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
            const orderLabel = !redordering ? actionTexts.order : actionTexts.save;
            const saveReordering = async () => {
              setProcessing(true);
              await activity.specs.set({
                questions: order
              });
              await activity.save();
              setProcessing(false);
              toggleReorder();
            };
            const reorderAttrs = {
              onClick: redordering ? saveReordering : onReorder,
              disabled: activity.specs.empty && activity.materials.empty || processing
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.titles.multiplechoice), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, !redordering && _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: onEdit,
              icon: "pencil"
            }, actionTexts.edit), _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), !redordering && _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, actionTexts.delete))), _react.default.createElement(_list.MultipleChoiceList, {
              order: order,
              setOrder: setOrder,
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
        hash: 4142711631,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceList = MultipleChoiceList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _framerMotion = require("framer-motion");
          var _context = require("../../../context");
          var _questionItemList = require("./question-item-list");
          function MultipleChoiceList({
            order,
            setOrder,
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
            const onReorder = values => {
              setOrder(values);
              const specs = {
                ...values.specs
              };
              specs.questions = [...order];
              activity.specs.set(specs);
            };
            if (reordering) {
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
              })));
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
        hash: 2891573058,
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
            data,
            position
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
            }, _react.default.createElement("h5", null, position ? _react.default.createElement("span", null, position, ". ") : null, fieldTexts.label), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_dynamicField.DynamicButton, {
              variant: "link",
              action: "add",
              icon: "add"
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
        hash: 704304710,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsField(props) {
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
              value,
              position,
              structure
            } = props;
            const {
              specs
            } = activity;
            const {
              label,
              placeholder,
              title
            } = texts.specs[structure[name]?.label ? structure[name]?.label : name];
            const [internalValue, setInternalValue] = _react.default.useState(specs[name]);
            (0, _hooks.useBinder)([specs], () => {
              setInternalValue(specs[name]);
            });
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
            const attrs = {
              label,
              placeholder,
              value: internalValue
            };
            //the structure has and advance settings defining if is required or not, for example.
            const Field = fieldTypes[type];
            return _react.default.createElement("div", null, titles ? _react.default.createElement("div", {
              className: "mt-1"
            }, _react.default.createElement("h5", null, position ? _react.default.createElement("span", null, position, ". ") : null, title)) : null, _react.default.createElement(Field, {
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
        hash: 3123132512,
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
            const toMap = fields.filter(name => !['optional', 'attachments'].includes(name));
            const output = toMap.map((name, index) => {
              if (!texts.specs[name]) {
                console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              }
              //the structure has and advance settings defining if is required or not, for example.
              if (typeof structure[name] === 'string' || typeof structure[name] === 'object' && structure[name].type !== 'array') {
                return _react.default.createElement(_field.SpecsField, {
                  structure: structure,
                  position: structure[name].position,
                  key: `${name}.${index}`,
                  titles: titles,
                  index: index,
                  type: structure[name].type,
                  name: name
                });
              }
              const Field = fieldTypes[structure[name].type];
              const {
                label,
                placeholder
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              return _react.default.createElement(Field, {
                onChange: onChange,
                variant: "floating",
                position: structure[name].position,
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
        hash: 3101363102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _field = require("../field");
          function SpokenActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "page-container"
            }, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
              type: "general",
              titles: false
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
            }, React.createElement(_form.SpecsForm, null)))));
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

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 354493598,
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
              // console.log('generate', specs);
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
        hash: 2776097170,
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
              className: "refine-modal modal-centered",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine[type].title), _react.default.createElement("span", null, texts.refine[type].description)), _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              variant: "floating",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            }), _react.default.createElement("footer", {
              className: "modal__actions"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: events.onClick
            }, globalTexts.actions.generate))), _react.default.createElement(_ui.ProcessContainer, {
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

      /***************************************
      INTERNAL MODULE: ./header/editor-toolbar
      ***************************************/

      ims.set('./header/editor-toolbar', {
        hash: 3209481573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditorToolbar = EditorToolbar;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _routing = require("@beyond-js/kernel/routing");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../context");
          var _progress = require("./progress");
          var _preview = require("../preview");
          function EditorToolbar() {
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
            const [showTestModal, setShowTestModal] = _react.default.useState(false);
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
                setShowTestModal(true);
                setProcessing(true);
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                if (['hand-written', 'written', 'spoken'].includes(activity.type)) {
                  await store.testAssessmentActivity(activity.id);
                } else {
                  await store.testActivity(activity.id);
                }
                globalThis.document.querySelector('html').style.overflow = 'hidden';
                setProcessing(false);
              } catch (e) {
                _toast.toast.error(store.globalTexts.errors.DEFAULT_ERROR);
              }
            };
            const closeTest = () => {
              globalThis.document.querySelector('html').style.overflow = 'auto';
              setShowTestModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "internal-breadcrumb"
            }, _react.default.createElement("div", {
              className: "page-container flex-container"
            }, _react.default.createElement("div", {
              className: "internal-breadcrumb__content"
            }, _react.default.createElement(_progress.ActivityProgress, null), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, !['multiple-choice', 'assessment'].includes(activity.type) && _react.default.createElement(_icons.AppButton, {
              disabled: processing || !activity.readyToTest,
              icon: "outlinedPlay",
              variant: "secondary",
              className: "circle test-action-button",
              onClick: test
            }, store.globalTexts.actions.testActivity), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate))))), showTestModal && _react.default.createElement(_preview.ActivityPreview, {
              onClose: closeTest
            }), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, globalTexts.actions.cancel)), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              title: texts.refine.title,
              description: texts.refine.description,
              texts: texts.refine,
              objective: activity.objective,
              activity: activity,
              showRelated: activity.type === 'multiple-choice',
              activities: store.model.activities,
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
        hash: 3777128831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              saveActivity
            } = (0, _context.useActivityContext)();
            const onGenerate = args => activity.generatePicture(args);
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const picture = {
              src: activity.picture,
              date: Date.now()
            };
            (0, _hooks.useStore)(activity, ['pictureSuggestions.changed', 'image.generated']);
            const pictureSrc = picture.src ? `${picture.src}?${Date.now()}` : undefined;
            const onChange = event => activity.set({
              title: event.currentTarget.value
            });
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
              size: "xs",
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
        hash: 3134597535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityLanguage = ActivityLanguage;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _core = require("@beyond-js/kernel/core");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
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
            const {
              globalTexts
            } = store;
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
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
            // Get languages from globalTexts and filter by supportedLanguages
            const options = globalTexts?.languages ? Object.entries(globalTexts.languages).filter(([langCode]) => supportedLanguages.includes(langCode)).map(([langCode, langData]) => ({
              value: langCode,
              label: langData.name
            })) : [];
            const onSave = async event => {
              setFetching(true);
              activity.save({
                language
              });
              setFetching(false);
              setShow(false);
            };
            const toggleShow = () => setShow(!show);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIcon, {
              onClick: toggleShow,
              name: `languages-${activity.language}`,
              title: `${activity.language} language`,
              className: "activity__language language-icon icon-circle pointer-icon"
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
        hash: 2182598468,
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
            const value = activity.validateData(name);
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
            }, texts.progress.fields[name]), _react.default.createElement("span", {
              className: "state"
            }, texts.progress.states[state])));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./header/progress
      *********************************/

      ims.set('./header/progress', {
        hash: 1618109175,
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
            const progressItems = activity.progressFields.map(({
              name,
              optional
            }) => _react.default.createElement(_progressItem.ProgressItem, {
              key: name,
              name: name,
              optional: optional
            }));
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
            }, progressItems)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2911426290,
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
          var _exercise = require("./activities/exercise");
          var _freeConversation = require("./activities/free-conversation");
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
          var _context = require("./context");
          var _editorToolbar = require("./header/editor-toolbar");
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
            }, _react.default.createElement(_editorToolbar.EditorToolbar, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivity, null),
                spoken: _react.default.createElement(_spoken.SpokenActivity, null),
                'hand-written': _react.default.createElement(_spoken.SpokenActivity, null),
                written: _react.default.createElement(_spoken.SpokenActivity, null),
                debate: _react.default.createElement(_debate.DebateActivity, null),
                exercise: _react.default.createElement(_exercise.default, null),
                'character-talk': _react.default.createElement(_characterTalk.CharacterTalkActivity, null),
                'content-theory': _react.default.createElement(_contentTheory.ContentTheoryActivity, null),
                'free-conversation': _react.default.createElement(_freeConversation.default, null)
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
      INTERNAL MODULE: ./preview/activity-control
      ******************************************/

      ims.set('./preview/activity-control', {
        hash: 4131199467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityControl = ActivityControl;
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var React = require("react");
          var _context = require("../context");
          function ActivityControl() {
            const {
              store,
              activity
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(store.activityStore, ['change', 'test.activity.changed']);
            // For assessment activities (hand-written, written, spoken)
            if (['hand-written', 'written', 'spoken'].includes(activity.type)) {
              const Control = store.activityComponentView;
              return React.createElement(Control, {
                store: store.activityStore
              });
            }
            // <Form model={store.model} onSubmit/>
            // For chat activities
            return React.createElement(_chat.ChatControl, {
              store: store.activityStore,
              ...store.activityData
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./preview/assessment
      ************************************/

      ims.set('./preview/assessment', {
        hash: 2237049942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssessmentActivityPreview = AssessmentActivityPreview;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var React = require("react");
          var _context = require("../context");
          function AssessmentActivityPreview() {
            const {
              store
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(store.activityStore, ['change', 'test.activity.changed']);
            const Control = store.activityComponentView;
            return React.createElement(Control, {
              store: store.activityStore
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./preview/index
      *******************************/

      ims.set('./preview/index', {
        hash: 3081464527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityPreview = ActivityPreview;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _activityControl = require("./activity-control");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          function ActivityPreview({
            onClose
          }) {
            const {
              store,
              activity
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(store, ['change', 'test.activity.changed']);
            const [view, setView] = React.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'activity' : 'credits');
            (0, _hooks2.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'activity' : 'credits'), 'credits.change');
            // Determine modal className based on view
            const getModalClassName = () => {
              if (view === 'credits') return '';
              return 'activity-modal__form activity-preview-modal';
            };
            return React.createElement(_modal.Modal, {
              show: true,
              className: getModalClassName(),
              onClose: onClose
            }, React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                credits: React.createElement(_ui.RequestCreditsForm, {
                  onConsume: store.model.consumeCoins,
                  onClose: onClose,
                  onCancel: onClose,
                  globalTexts: _mainLayout.LayoutBroker.globalTexts
                }),
                activity: store.activityStore ? React.createElement(_activityControl.ActivityControl, null) : React.createElement(_ui.ProcessContainer, {
                  key: "container",
                  fetching: true
                })
              },
              placeholder: React.createElement(_ui.ProcessContainer, {
                key: "container",
                fetching: true
              })
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsInVuZGVmaW5lZCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJkZWxldGVNb2RhbCIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJjYW5jZWxDaGFuZ2VzIiwidW5wdWJsaXNoZWQiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZXNwb25zZSIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0yIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsImxpc3RlbkNoYW5nZXMiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsIm9yZGVyTGFiZWwiLCJzYXZlUmVvcmRlcmluZyIsInJlb3JkZXJBdHRycyIsIm11bHRpcGxlY2hvaWNlIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiX2FpQnV0dG9uIiwic2V0Tm90ZXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJFZGl0b3JUb29sYmFyIiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5IiwidGVzdEFjdGl2aXR5IiwiREVGQVVMVF9FUlJPUiIsImNsb3NlVGVzdCIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJBY3Rpdml0eVByZXZpZXciLCJzaG93UmVsYXRlZCIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwic2V0U2hvdyIsImVudHJpZXMiLCJsYW5nQ29kZSIsImxhbmdEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsInByb2dyZXNzSXRlbXMiLCJwcm9ncmVzc0ZpZWxkcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2V4ZXJjaXNlIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2VkaXRvclRvb2xiYXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic3Bva2VuIiwid3JpdHRlbiIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIkFjdGl2aXR5Q29udHJvbCIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eUNvbXBvbmVudFZpZXciLCJDaGF0Q29udHJvbCIsImFjdGl2aXR5RGF0YSIsIkFzc2Vzc21lbnRBY3Rpdml0eVByZXZpZXciLCJfYWN0aXZpdHlDb250cm9sIiwiX2hvb2tzMiIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi8vdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvL3RzL2FjdGl2aXRpZXMvZGViYXRlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiLy90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL2ZpZWxkLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiLy90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi8vdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiLy90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi8vdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiLy90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi8vdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi8vdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi8vdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi8vdHMvY29udGV4dC50cyIsIi8vdHMvaGVhZGVyL2VkaXRvci10b29sYmFyLnRzeCIsIi8vdHMvaGVhZGVyL2luZGV4LnRzeCIsIi8vdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi8vdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiLy90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiLy90cy9pbmRleC50c3giLCIvL2ludGVyZmFjZS50cy8iLCIvL3RzL3ByZXZpZXcvYWN0aXZpdHktY29udHJvbC50c3giLCIvL3RzL3ByZXZpZXcvYXNzZXNzbWVudC50c3giLCIvL3RzL3ByZXZpZXcvaW5kZXgudHN4IiwiLy90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLEtBQUs7Y0FB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