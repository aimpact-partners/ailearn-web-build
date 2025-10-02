System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "clsx@2.1.1", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/modules/management/refinament.code", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/dynamic-list", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/dynamic-field", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.6.1/components/cover-image.code", "@aimpact/ailearn-app@0.6.1/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_4 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Form) {
      dependency_5 = _pragmateUi108Form;
    }, function (_pragmateUi108Empty) {
      dependency_6 = _pragmateUi108Empty;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_pragmateUi108Modal) {
      dependency_8 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_clsx2) {
      dependency_10 = _clsx2;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_11 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108List) {
      dependency_12 = _pragmateUi108List;
    }, function (_aimpactAilearnApp061ModulesManagementRefinamentCode) {
      dependency_13 = _aimpactAilearnApp061ModulesManagementRefinamentCode;
    }, function (_pragmateUi108Tabs) {
      dependency_14 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Icons) {
      dependency_15 = _pragmateUi108Icons;
    }, function (_pragmateUi108Collapsible) {
      dependency_16 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108DynamicList) {
      dependency_17 = _pragmateUi108DynamicList;
    }, function (_beyondJsKernel0114Core) {
      dependency_18 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_19 = _pragmateUi108FormReactSelect;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_aimpactAilearnApp061ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp061ComponentsDynamicField;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsKernel0114Routing) {
      dependency_23 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Toast) {
      dependency_24 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp061ComponentsCoverImageCode) {
      dependency_25 = _aimpactAilearnApp061ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp061AssignmentsChat) {
      dependency_26 = _aimpactAilearnApp061AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['clsx', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['@aimpact/ailearn-app/assignments/chat', dependency_26]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/modules/management/activity.code');
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
        hash: 843751429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3965879345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTab = ArticleTab;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _clsx = require("clsx");
          var _context = require("../../../context");
          var _confirmAction = require("../confirm-action");
          var _emptyArticle = require("./empty-article");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ArticleTab() {
            const {
              texts,
              store,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [fetching, setFetching] = _react.default.useState(false);
            const [manual, setManual] = _react.default.useState(false);
            const toggleManual = () => setManual(!manual);
            const onChange = event => activity.materials.set({
              article: event.target.value
            });
            const {
              article: content
            } = activity.materials;
            const onDelete = async () => {
              activity.materials.revert();
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
            (0, _hooks.useStore)(activity.materials, ['article.changed']);
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
            const clsCharacters = (0, _clsx.default)('characters__container', {
              'error-text': content.length > 3950,
              'warning-text': content.length > 3900 && content.length <= 3950
            });
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
        hash: 2647077232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 1341146231,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityControl = ActivityControl;
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 2925570549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssessmentActivityPreview = AssessmentActivityPreview;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 2632279005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityPreview = ActivityPreview;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _activityControl = require("./activity-control");
          function ActivityPreview({
            onClose
          }) {
            const {
              store,
              activity
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(store, ['change', 'test.activity.changed']);
            const [view, setView] = React.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'activity' : 'credits');
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'activity' : 'credits'), 'credits.change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9jbHN4IiwiX2NvbmZpcm1BY3Rpb24iLCJfZW1wdHlBcnRpY2xlIiwiQXJ0aWNsZVRhYiIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJzZXQiLCJhcnRpY2xlIiwidGFyZ2V0IiwiY29udGVudCIsIm9uRGVsZXRlIiwicmV2ZXJ0IiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsInVuZGVmaW5lZCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwib25DbG9zZSIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJ2YWx1ZXMiLCJzZXRDb250ZW50Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsIm9uQmx1ciIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiRXhlcmNpc2VBY3Rpdml0eSIsIl9keW5hbWljIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiRHluYW1pY0NvbnRhaW5lciIsInByb3BzIiwiaW5kZXgiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsImludGVybmFsVmFsdWUiLCJzZXRJbnRlcm5hbFZhbHVlIiwid2FybiIsIkZpZWxkIiwiRnJlZUNvbnZlcnNhdGlvbkFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX2NvbnRleHQyIiwiX3F1ZXN0aW9ucyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJzZXRDb25maXJtIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvd25lciIsImNyZWRpdHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImlkIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJfZm9ybTIiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiZmluYWxWaWV3IiwibGlzdGVuQ2hhbmdlcyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJvcmRlciIsInNldE9yZGVyIiwidG9nZ2xlUmVvcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwib3JkZXJMYWJlbCIsInNhdmVSZW9yZGVyaW5nIiwicmVvcmRlckF0dHJzIiwibXVsdGlwbGVjaG9pY2UiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJNYW51YWxGb3JtRm9vdGVyIiwiRW1wdHlEeW5hbWljQ29udGVudCIsIl9keW5hbWljRmllbGQiLCJDdXN0b21EeW5hbWljRmllbGQiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJfYWlCdXR0b24iLCJzZXROb3RlcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfdG9hc3QiLCJfcHJvZ3Jlc3MiLCJfcHJldmlldyIsIkVkaXRvclRvb2xiYXIiLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJzZXRTaG93IiwiZW50cmllcyIsImxhbmdDb2RlIiwibGFuZ0RhdGEiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJwcm9ncmVzcyIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJ0b3RhbCIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwicHJvZ3Jlc3NJdGVtcyIsInByb2dyZXNzRmllbGRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfZnJlZUNvbnZlcnNhdGlvbiIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZWRpdG9yVG9vbGJhciIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzcG9rZW4iLCJ3cml0dGVuIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jaGF0IiwiQWN0aXZpdHlDb250cm9sIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiQXNzZXNzbWVudEFjdGl2aXR5UHJldmlldyIsIl9hY3Rpdml0eUNvbnRyb2wiLCJhdmFpbGFibGUiLCJnZXRNb2RhbENsYXNzTmFtZSIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaWNvbi50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiLy90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi8vdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiLy90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi8vdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiLy90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2hlYWRlci9lZGl0b3ItdG9vbGJhci50c3giLCIvL3RzL2hlYWRlci9pbmRleC50c3giLCIvL3RzL2hlYWRlci9sYW5ndWFnZS50c3giLCIvL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi8vdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2UudHMvIiwiLy90cy9wcmV2aWV3L2FjdGl2aXR5LWNvbnRyb2wudHN4IiwiLy90cy9wcmV2aWV3L2Fzc2Vzc21lbnQudHN4IiwiLy90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi8vdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQyxHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBSTlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhLE9BQVFKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ3REZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVeUIscUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRXJCLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBQ2xCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNELENBQ0csRUFDVkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLEVBQ05LLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZSxlQUFBLENBQUFwQixjQUFjLE9BQUcsQ0FDYixDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFLTSxTQUFVd0MsZUFBZUEsQ0FBQztZQUFFQztVQUFVLENBQUU7WUFDN0MsT0FDQzFDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMrQixNQUFBLENBQUFHLEtBQUssT0FBRyxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQTNDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUEyQyxRQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQTRDLFVBQUEsR0FBQTVDLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE1BQU11QyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUNsQ0MsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQ2xDQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQ3pCQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Y0FDL0JOLEtBQUssQ0FBQ0UsYUFBYSxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUM7Y0FDN0NoRCxRQUFRLENBQUNpRCxTQUFTLENBQUNSLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7WUFDOUMsQ0FBQztZQUVELE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0MsVUFBQSxDQUFBWSxhQUFhLE9BQUcsRUFDakJ6RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUMsUUFBQSxDQUFBYyxtQkFBbUIsT0FBRyxFQUN2QjFELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQyxHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBSTlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhLE9BQVFKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ3REZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQW5CLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBZ0JNLFNBQVU0RCxhQUFhQSxDQUFDO1lBQzdCbEQsU0FBUztZQUNUbUQsUUFBUSxHQUFHLEtBQUs7WUFDaEJDLE9BQU8sR0FBRyxTQUFTO1lBQ25CeEIsSUFBSTtZQUNKeUIsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLEVBQUUsR0FBRyxRQUFRO1lBQ2JDLFFBQVE7WUFDUnBELEtBQUs7WUFDTHFELFdBQVc7WUFDWEMsTUFBTSxHQUFHLFFBQVE7WUFDakJDO1VBQVEsQ0FDc0I7WUFDOUIsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHeEUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU0sQ0FBQzRDLEtBQUssRUFBRXBFLEtBQUssQ0FBQyxHQUFHLElBQUFnQixNQUFBLENBQUFxRCxRQUFRLEVBQUMsMkJBQTJCLENBQUM7WUFFNUQsSUFBSSxDQUFDRCxLQUFLLEVBQUU7WUFFWjFELEtBQUssR0FBR0EsS0FBSyxJQUFJVixLQUFLLENBQUNzRSxLQUFLLENBQUNOLE1BQU0sQ0FBQyxDQUFDdEQsS0FBSztZQUMxQ3FELFdBQVcsR0FBR0EsV0FBVyxJQUFJL0QsS0FBSyxDQUFDc0UsS0FBSyxDQUFDTixNQUFNLENBQUMsQ0FBQ0QsV0FBVztZQUU1RCxNQUFNUSxVQUFVLEdBQUdBLENBQUEsS0FBTUosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztZQUN2QyxNQUFNTSxhQUFhLEdBQUc5QixLQUFLLElBQUc7Y0FDN0JBLEtBQUssQ0FBQytCLGVBQWUsRUFBRTtjQUN2QkYsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVELE1BQU1HLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsTUFBTWQsUUFBUSxFQUFFO2NBQ2hCVyxVQUFVLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTUksT0FBTyxHQUFHZCxFQUFFLEtBQUssTUFBTSxHQUFHOUMsTUFBQSxDQUFBNkQsYUFBYSxHQUFHckIsV0FBQSxDQUFBc0IsTUFBTTtZQUN0RCxPQUNDbEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLE9BQU87Y0FDUHJFLFNBQVMsRUFBRUEsU0FBUztjQUNwQndELFFBQVEsRUFBRUEsUUFBUTtjQUNsQkwsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ4QixJQUFJLEVBQUVBLElBQUk7Y0FDVnhCLEtBQUssRUFBRWlELE9BQU87Y0FDZG1CLE9BQU8sRUFBRU47WUFBYSxHQUVyQlAsUUFBUSxDQUNBLEVBQ1RDLElBQUksSUFDSnZFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQ1pDLFVBQVUsRUFBRTtnQkFDWEMsS0FBSyxFQUFFakYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDQyxPQUFPO2dCQUM1QnpCLE9BQU8sRUFBRTtlQUNUO2NBQ0QwQixTQUFTLEVBQUU7Z0JBQ1ZILEtBQUssRUFBRWpGLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ0csTUFBTTtnQkFDM0IzQixPQUFPLEVBQUUsU0FBUztnQkFDbEJJLFFBQVEsRUFBRTtlQUNWO2NBQ0R3QixJQUFJO2NBQ0paLFNBQVMsRUFBRUEsU0FBUztjQUNwQmEsUUFBUSxFQUFFaEI7WUFBVSxHQUVwQjVFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtNLEtBQUssQ0FBTSxFQUNoQmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsWUFBSTJELFdBQVcsQ0FBSyxDQUNmLENBRVAsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFGQSxJQUFBL0MsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLGVBQUEsR0FBQXZCLE9BQUE7VUFFTSxTQUFVNEYscUJBQXFCQSxDQUFDLEVBQUU7WUFDdkMsTUFBTTtjQUFFeEYsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELElBQUFjLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3hGLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUVqRSxPQUNDZ0IsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBVyxjQUFjLE9BQUcsRUFDbEJaLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBVSxhQUFhO2NBQUNqQixJQUFJLEVBQUMsVUFBVTtjQUFDa0IsSUFBSSxFQUFDO1lBQWEsRUFBRyxFQUNwRGQsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3RDLENBQ0QsQ0FDRyxFQUNWRyxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3RCLEtBQUssQ0FBTSxFQUNoRE8sS0FBQSxDQUFBYixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCTixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDckIsUUFBUSxFQUN6Q00sS0FBQSxDQUFBYixhQUFBLENBQUNXLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUM0QixJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUVUakIsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUyxPQUFHLENBQ1IsRUFDTkssS0FBQSxDQUFBYixhQUFBLENBQUNlLGVBQUEsQ0FBQXBCLGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBZ0IsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVThGLFVBQVVBLENBQUM7WUFBRXZDLEtBQUs7WUFBRWpCO1VBQUksQ0FBRTtZQUN6QyxNQUFNO2NBQUVsQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFRaEQsTUFBTXVDLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRUMsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO2NBQy9HTixLQUFLLENBQUNFLGFBQWEsQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDO2NBRTdDaEQsUUFBUSxDQUFDaUQsU0FBUyxDQUFDUixLQUFLLENBQUNFLGFBQWEsQ0FBQytDLE9BQU8sQ0FBQ3hDLEtBQUssQ0FBQztZQUN0RCxDQUFDO1lBRUQsTUFBTXlDLEtBQUssR0FBYztjQUN4QnpDLEtBQUs7Y0FDTGpCLElBQUk7Y0FDSnhCLEtBQUssRUFBRVYsS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0QsSUFBSSxDQUFDLENBQUN4QjthQUN0RDtZQUVELElBQUlzRixZQUFZLEdBQUcsb0JBQW9CN0MsS0FBSyxLQUFLbEQsUUFBUSxDQUFDNEYsUUFBUSxFQUFFQyxNQUFNLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUMvRixJQUFJM0MsS0FBSyxLQUFLbEQsUUFBUSxDQUFDNEYsUUFBUSxFQUFFQyxNQUFNLEVBQUVGLEtBQUssQ0FBQ3RGLFNBQVMsR0FBRyxRQUFRO1lBRW5FLE9BQ0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRTBGLFlBQVk7Y0FBRWxCLE9BQU8sRUFBRXJDLFFBQVE7Y0FBQSxjQUFjVTtZQUFLLEdBQ2pFeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBNkQsYUFBYTtjQUFBLEdBQUtnQjtZQUFLLEVBQUksRUFFNUJqRyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBMEMsV0FBVztjQUFDM0YsU0FBUyxFQUFDO1lBQUksR0FBRU4sS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0QsSUFBSSxDQUFDLENBQUM2QixXQUFXLENBQWUsQ0FDakc7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXBFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzRyxLQUFBLEdBQUF0RyxPQUFBO1VBRU0sU0FBVXlELG1CQUFtQkEsQ0FBQTtZQUNsQyxNQUFNO2NBQUVyRCxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNkIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUNPLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDcEYsS0FBSyxDQUFNLEVBQ3BEZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDL0IsV0FBVyxDQUFRLENBQ3RELENBQ0QsRUFDTnBFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQVIsVUFBVTtjQUFDdkMsS0FBSyxFQUFDLHFCQUFxQjtjQUFDakIsSUFBSSxFQUFDO1lBQW1CLEVBQUcsRUFDbkV2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEYsS0FBQSxDQUFBUixVQUFVO2NBQUN2QyxLQUFLLEVBQUMscUJBQXFCO2NBQUNqQixJQUFJLEVBQUM7WUFBbUIsRUFBRyxFQUNuRXZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM4RixLQUFBLENBQUFSLFVBQVU7Y0FBQ3ZDLEtBQUssRUFBQyxrQkFBa0I7Y0FBQ2pCLElBQUksRUFBQztZQUFnQixFQUFHLENBQ3hELENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBaUUsU0FBQSxHQUFBdkcsT0FBQTtVQUVBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdHLEtBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBeUcsY0FBQSxHQUFBekcsT0FBQTtVQUNBLElBQUEwRyxhQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFTSxTQUFVMkcsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUV2RyxLQUFLO2NBQUV3RyxLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU1FLGFBQWEsR0FBRzFHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUztZQUNuRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDdUYsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNeUYsWUFBWSxHQUFHQSxDQUFBLEtBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7WUFDN0MsTUFBTXRFLFFBQVEsR0FBR0MsS0FBSyxJQUFJekMsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTSxHQUFHLENBQUM7Y0FBRUMsT0FBTyxFQUFFekUsS0FBSyxDQUFDMEUsTUFBTSxDQUFDakU7WUFBSyxDQUFFLENBQUM7WUFDakYsTUFBTTtjQUFFZ0UsT0FBTyxFQUFFRTtZQUFPLENBQUUsR0FBR3BILFFBQVEsQ0FBQzJHLFNBQVM7WUFDL0MsTUFBTVUsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQnJILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ1csTUFBTSxFQUFFO2NBQzNCdEgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDWSxLQUFLLEVBQUU7Y0FDMUJ2SCxRQUFRLENBQUN3SCxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUNELE1BQU1DLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCVCxZQUFZLEVBQUU7WUFDZixDQUFDO1lBQ0QsTUFBTVUsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QmIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQjdHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ00sR0FBRyxDQUFDO2dCQUFFQyxPQUFPLEVBQUVFO2NBQU8sQ0FBRSxDQUFDO2NBQzVDLE1BQU1wSCxRQUFRLENBQUN3SCxJQUFJLEVBQUU7Y0FDckJYLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJHLFlBQVksRUFBRTtZQUNmLENBQUM7WUFFRCxJQUFBakcsTUFBQSxDQUFBeUUsUUFBUSxFQUFDeEYsUUFBUSxDQUFDMkcsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUVqRCxJQUFJLENBQUNHLE1BQU0sSUFBSSxDQUFDOUcsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUU7Y0FDM0MsT0FBT3hILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxhQUFBLENBQUFzQixvQkFBb0I7Z0JBQUM3RixJQUFJLEVBQUMsU0FBUztnQkFBQzhGLFFBQVEsRUFBRVo7Y0FBWSxFQUFJOztZQUV2RSxJQUFJLENBQUNGLE1BQU0sSUFBSTlHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxFQUFFO2NBQzFDLE9BQ0N4SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsU0FBQSxDQUFBMkIsUUFBUTtnQkFBQ1QsT0FBTyxFQUFFcEgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTztjQUFPLEVBQUksQ0FDNUMsRUFFTnhILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2dCQUFRRSxTQUFTLEVBQUM7Y0FBOEIsR0FDL0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2dCQUFDM0MsSUFBSSxFQUFDLE1BQU07Z0JBQUM0QyxPQUFPLEVBQUVtQyxZQUFZO2dCQUFFdkQsT0FBTyxFQUFDLFNBQVM7Z0JBQUNJLFFBQVE7Y0FBQSxHQUNuRTJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQzZDLElBQUksQ0FDakIsRUFDVHBJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxjQUFBLENBQUE3QyxhQUFhO2dCQUFDdEIsSUFBSSxFQUFDLFFBQVE7Z0JBQUMwQixRQUFRLEVBQUUwRCxRQUFRO2dCQUFFNUQsT0FBTyxFQUFDLFNBQVM7Z0JBQUNJLFFBQVE7Y0FBQSxHQUN6RTJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQzhDLE1BQU0sQ0FDWixDQUNSLENBQ1A7O1lBSUwsTUFBTUMsYUFBYSxHQUFHLElBQUE3QixLQUFBLENBQUFqRyxPQUFJLEVBQUMsdUJBQXVCLEVBQUU7Y0FDbkQsWUFBWSxFQUFFa0gsT0FBTyxDQUFDYSxNQUFNLEdBQUcsSUFBSTtjQUNuQyxjQUFjLEVBQUViLE9BQU8sQ0FBQ2EsTUFBTSxHQUFHLElBQUksSUFBSWIsT0FBTyxDQUFDYSxNQUFNLElBQUk7YUFDM0QsQ0FBQztZQUNGLE9BQ0N2SSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFxSSxJQUFJO2NBQUM3SCxTQUFTLEVBQUMsOEJBQThCO2NBQUM4SCxRQUFRLEVBQUVUO1lBQU0sR0FDOURoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXVJLFFBQVE7Y0FDUjVGLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjZGLFVBQVUsRUFBRSxLQUFLO2NBQ2pCdkcsSUFBSSxFQUFDLFNBQVM7Y0FDZDBCLFFBQVEsRUFBRW9ELFFBQVE7Y0FDbEIxRCxLQUFLLEVBQUVrRSxPQUFPO2NBQ2RrQixXQUFXLEVBQUU3QixhQUFhLENBQUM4QixJQUFJLENBQUNyQixPQUFPLENBQUNvQjtZQUFXLEVBQ2xELENBQ0csRUFDTjVJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRTJIO1lBQWEsR0FDM0JqSSxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQzZCLFVBQVUsRSxLQUFHLElBQUksR0FBR3BCLE9BQU8sQ0FBQ2EsTUFBTSxDQUM1RCxDQUNBLEVBRVB2SSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNDLE9BQU8sRUFBRTRDLGFBQWE7Y0FBRWhFLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7Y0FBQ0wsUUFBUSxFQUFFb0Q7WUFBUSxHQUMzRUosV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRTZDLE1BQU07Y0FBRWxFLFFBQVEsRUFBRW9EO1lBQVEsR0FDM0RKLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3VDLElBQUksQ0FDakIsQ0FDRCxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUZBLElBQUE5SCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUdBLElBQUErSSxhQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVWdKLHVCQUF1QkEsQ0FBQyxFQUFvQztZQUMzRSxNQUFNO2NBQ0w1SSxLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU07Y0FBRTJJO1lBQWEsQ0FBRSxHQUFHLElBQUFGLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFDOUMsTUFBTUMsVUFBVSxHQUFHRixhQUFhO1lBRWhDLE9BQ0NsSixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBTSxTQUFTO2NBQ1QxSSxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMkksSUFBSSxFQUFFakosS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNoQixLQUFLO2NBQ2xDcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQztZQUFXLEdBRS9DcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBUSxRQUFRO2NBQUNwRSxPQUFPLEVBQUVpRSxVQUFVO2NBQUVyRixPQUFPLEVBQUM7WUFBUyxHQUM5QytDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lFLFFBQVEsQ0FDbkIsQ0FDTixDQUNLLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQW5JLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdBLElBQUF3SixLQUFBLEdBQUF4SixPQUFBO1VBRU0sU0FBVXlKLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUVwSixRQUFRO2NBQUVELEtBQUs7Y0FBRXdHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU0sQ0FBQ29KLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd0SSxLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzBDLE1BQU0sQ0FBQztZQUVyRSxJQUFBdEksTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzNCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUNwQixNQUFLO2NBQ0oyQyxTQUFTLENBQUM7Z0JBQUUsR0FBR3RKLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzBDO2NBQU0sQ0FBRSxDQUFDO1lBQzVDLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFFRCxPQUNDckksS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ1csS0FBQSxDQUFBYixhQUFBLENBQUNnSixLQUFBLENBQUFJLHNCQUFzQjtjQUFDM0ksSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUN6Q0ksS0FBQSxDQUFBYixhQUFBLENBQUNnSixLQUFBLENBQUFJLHNCQUFzQjtjQUFDM0ksSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUNyQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBNkgsR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5RyxjQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQStJLGFBQUEsR0FBQS9JLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUdPLE1BQU00SixzQkFBc0IsR0FBR0EsQ0FBQztZQUFFM0k7VUFBSSxDQUFFLEtBQUk7WUFDbEQsTUFBTTtjQUFFMkYsS0FBSztjQUFFdkcsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU07Y0FBRThDO1lBQU0sQ0FBRSxHQUFHckosUUFBUSxDQUFDMkcsU0FBUztZQUNyQyxNQUFNO2NBQUVpQyxhQUFhO2NBQUVoQyxRQUFRO2NBQUU0QztZQUFXLENBQUUsR0FBRyxJQUFBZCxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBRXJFLE1BQU1ZLEdBQUcsR0FBRyxDQUFDLENBQUN6SixRQUFRLENBQUMyRyxTQUFTLENBQUMwQyxNQUFNLEdBQUd6SSxJQUFJLENBQUM7WUFDL0MsTUFBTThJLGNBQWMsR0FBR2pILEtBQUssSUFBRztjQUM5Qm1HLGFBQWEsQ0FBQyxDQUFDbkcsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNbUUsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsT0FBT21DLFdBQVcsQ0FBQyxDQUFDNUksSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUVELE1BQU0rSSxJQUFJLEdBQUczSixRQUFRLENBQUMyRyxTQUFTLENBQUMvRixJQUFJLENBQUMsRUFBRXFILE1BQU07WUFDN0MsTUFBTTJCLFlBQVksR0FBR0QsSUFBSSxHQUFHLENBQUMsSUFBSUEsSUFBSSxJQUFJLElBQUk7WUFFN0MsTUFBTUUsU0FBUyxHQUNkRixJQUFJLEtBQUssQ0FBQyxJQUFJQSxJQUFJLEtBQUtHLFNBQVMsR0FDN0IvSixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ29ELEtBQUssQ0FBQ0MsYUFBYSxHQUNqRGpLLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDb0QsS0FBSyxDQUFDRSxTQUFTO1lBQ2pELE9BQ0N2SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDdUQsS0FBSyxDQUFDdEosSUFBSSxDQUFDLENBQU0sRUFDbkQsQ0FBQzZJLEdBQUcsR0FDSi9KLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0V3SixZQUFZLEdBQ1psSyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBd0IsR0FDdENOLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDb0QsS0FBSyxDQUFDSSxPQUFPLENBQ3RDLEdBRVB6SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBeUIsR0FDeENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUEwQyxXQUFXO2NBQUNvRSxNQUFNLEVBQUU7Z0JBQUV4SixJQUFJLEVBQUViLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDb0QsS0FBSyxDQUFDbkosSUFBSTtjQUFDO1lBQUUsR0FDdEVpSixTQUFTLENBQ0csQ0FFZixDQUNDLEdBQ0EsSUFBSSxDQUNILEVBQ05uSyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDL0JvSixHQUFHLEdBQ0gvSixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkMsR0FDekRYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUE0QixXQUFXO2NBQUNDLEdBQUcsRUFBRWpCLE1BQU0sQ0FBQ3pJLElBQUksQ0FBQyxDQUFDMEo7WUFBRyxFQUFJLEVBQ3RDNUssTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLGNBQUEsQ0FBQTdDLGFBQWE7Y0FDYmxELFNBQVMsRUFBQyxRQUFRO2NBQ2xCcUQsT0FBTyxFQUFFOEMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDOEMsTUFBTTtjQUNuQzlGLElBQUksRUFBQyxRQUFRO2NBQ2IyQixFQUFFLEVBQUMsTUFBTTtjQUNURCxRQUFRLEVBQUUwRCxRQUFRO2NBQ2xCN0QsUUFBUSxFQUFFb0QsUUFBUTtjQUNsQm5ELE9BQU8sRUFBQztZQUFTLEVBQ2hCLENBQ0csR0FFTi9ELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUFRLFFBQVE7Y0FDUnpGLFFBQVEsRUFBRSxDQUFDb0csWUFBWTtjQUN2QmhELFFBQVEsRUFBRUEsUUFBUTtjQUNsQjFELEtBQUssRUFBRXRDLElBQUk7Y0FDWGlFLE9BQU8sRUFBRTZFLGNBQWM7Y0FDdkJqRyxPQUFPLEVBQUM7WUFBUyxHQUVoQitDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lFLFFBQVEsQ0FFOUIsQ0FDSSxDQUNEO1VBRVIsQ0FBQztVQUFDcUIsT0FBQSxDQUFBaEIsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVGLElBQUF4SSxNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQTZLLEtBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBd0osS0FBQSxHQUFBeEosT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ00sU0FBVThLLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQ0x6SyxRQUFRO2NBQ1J1RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzZHLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsTUFBTSxDQUFDcUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFDM0UsTUFBTTtjQUFFeUM7WUFBTSxDQUFFLEdBQUdySixRQUFRLENBQUMyRyxTQUFTO1lBQ3JDLElBQUE1RixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0ksU0FBUyxDQUFDLEtBQUssQ0FBQztjQUNoQkYsV0FBVyxDQUFDN0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFDekMsQ0FBQyxDQUFDO1lBRUYsTUFBTThELEtBQUssR0FBRyxDQUFDLENBQUNyQixNQUFNLEdBQUdzQixNQUFNLENBQUNDLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDakQsTUFBTWhDLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0JSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTTdHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ2tFLFlBQVksRUFBRTtjQUV2Q2hFLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQ0NuSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxSyxLQUFBLENBQUFNLElBQUk7Y0FBQ3pLLFNBQVMsRUFBQyxlQUFlO2NBQUNxSyxLQUFLLEVBQUVBLEtBQUs7Y0FBRUssT0FBTyxFQUFFNUIsS0FBQSxDQUFBSSxzQkFBc0I7Y0FBRTNGLEVBQUUsRUFBQztZQUFLLEVBQUcsRSxJQUNyRixFQUNObEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQThCLEdBQy9DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDM0MsSUFBSSxFQUFDLFFBQVE7Y0FBQzRDLE9BQU8sRUFBRXdDLFFBQVE7Y0FBRTVELE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUNqRTJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQzhDLE1BQU0sQ0FDbkIsQ0FDRCxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFVLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBK0ksYUFBQSxHQUFBL0ksT0FBQTtVQUVNLFNBQVVnSSxvQkFBb0JBLENBQUM7WUFBRTdGLElBQUk7WUFBRThGO1VBQVEsQ0FBRTtZQUN0RCxNQUFNO2NBQ0w1SCxRQUFRO2NBQ1JELEtBQUs7Y0FDTHdHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sQ0FBQ3NFLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3hMLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLEdBQUc0SixPQUFPLENBQUMsR0FBR3pMLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDN0UsSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTTtjQUFFK0UsV0FBVztjQUFFdUU7WUFBZSxDQUFFLEdBQUcsSUFBQTFDLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFDN0QsTUFBTXdDLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsTUFBTXpILFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQ3hELFFBQVEsQ0FBQ1M7WUFBSyxDQUFFO1lBRTlDLElBQUFNLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDRSxXQUFXLENBQUM3RyxRQUFRLENBQUMyRyxTQUFTLENBQUNDLFFBQVEsQ0FBQztjQUN4Q3VFLE9BQU8sQ0FBQ25MLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLE9BQ0NwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBTSxTQUFTO2NBQ1QxSSxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMkksSUFBSSxFQUFFakosS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNoQixLQUFLO2NBQ2xDcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQztZQUFXLEdBRS9DcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFK0M7WUFBUSxHQUNsRHBCLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQzZCLE1BQU0sQ0FDbkIsRUFDVHBILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUFRLFFBQVE7Y0FBQ3BFLE9BQU8sRUFBRXdHLFdBQVc7Y0FBRTVILE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS0Q7WUFBUSxHQUM1RGdELFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lFLFFBQVEsQ0FDbkIsQ0FDTixDQUdLLEVBQ1grQixlQUFlLElBQ2Z2TCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssV0FBQSxDQUFBTSx1QkFBdUI7Y0FDdkJqRyxJQUFJLEVBQUU0RixlQUFlO2NBQ3JCTSxRQUFRO2NBQ1JDLFNBQVMsRUFBRWpGLEtBQUssQ0FBQ2tGLEtBQUssQ0FBQ0MsWUFBWTtjQUNuQ2pMLEtBQUssRUFBRWdHLGFBQWEsQ0FBQ2tGLFVBQVUsQ0FBQ2xMLEtBQUs7Y0FDckNtTCxTQUFTLEVBQUU1TCxRQUFRLENBQUM0TCxTQUFTO2NBQzdCOUgsV0FBVyxFQUFFMkMsYUFBYSxDQUFDa0YsVUFBVSxDQUFDN0gsV0FBVztjQUNqRCtILE9BQU8sRUFBRVIsV0FBVztjQUNwQnZDLFVBQVUsRUFBRXNDO1lBQWUsRUFFNUIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBMUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFHQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTRDLFVBQUEsR0FBQTVDLE9BQUE7VUFFTSxTQUFVbU0sYUFBYUEsQ0FBQztZQUFFaEssSUFBSTtZQUFFOEY7VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FDTDVILFFBQVE7Y0FDUkQsS0FBSztjQUNMd0csS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUNnTCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd4TCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDcUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFDM0UsTUFBTSxHQUFHdUUsT0FBTyxDQUFDLEdBQUd6TCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQzVELE1BQU11SixXQUFXLEdBQUdBLENBQUEsS0FBTUgsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBRTlELElBQUFsSyxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0UsV0FBVyxDQUFDN0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDQyxRQUFRLENBQUM7Y0FDeEN1RSxPQUFPLENBQUNuTCxRQUFRLENBQUMyRyxTQUFTLENBQUM3RSxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFDRixNQUFNMEIsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRSxDQUFDeEQsUUFBUSxDQUFDUyxLQUFLLElBQUksQ0FBQ1QsUUFBUSxDQUFDMkcsU0FBUyxFQUFFTztZQUFPLENBQUU7WUFFOUUsT0FDQ3hILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUFNLFNBQVM7Y0FDVDFJLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0IySSxJQUFJLEVBQUVqSixLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ2hCLEtBQUs7Y0FDbENxRCxXQUFXLEVBQUUvRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ3FDO1lBQVcsR0FFL0NwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUUrQztZQUFRLEdBQ2xEcEIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDNkIsTUFBTSxDQUNuQixFQUNUcEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQVEsUUFBUTtjQUFDcEUsT0FBTyxFQUFFd0csV0FBVztjQUFFNUgsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLRDtZQUFRLEdBQzVEZ0QsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUUsUUFBUSxDQUNuQixDQUNOLENBRUssRUFDWCtCLGVBQWUsSUFBSXZMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxVQUFBLENBQUF3Six5QkFBeUI7Y0FBQ25MLElBQUksRUFBRWtCLElBQUk7Y0FBRStKLE9BQU8sRUFBRVI7WUFBVyxFQUFJLENBQ2pGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUEzTCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxTCxXQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQXFNLEtBQUEsR0FBQXJNLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUF1TSxLQUFBLEdBQUF2TSxPQUFBO1VBQ0EsSUFBQXdNLE9BQUEsR0FBQXhNLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQStJLGFBQUEsR0FBQS9JLE9BQUE7VUFFTSxTQUFVeU0sYUFBYUEsQ0FBQztZQUFFL0csSUFBSTtZQUFFd0c7VUFBTyxDQUFFO1lBQzlDLE1BQU07Y0FBRTlMLEtBQUs7Y0FBRXdHLEtBQUs7Y0FBRThGLE1BQU07Y0FBRXJNO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDL0QsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTUUsYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sR0FBRzJGLFVBQVUsQ0FBQyxHQUFHNU0sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUM4SyxNQUFNLENBQUMxRixTQUFTLEVBQUVPLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDdEUsTUFBTSxDQUFDcUYsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzlNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNrTCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaE4sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sQ0FBQ29MLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdsTixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDN0QsTUFBTThKLFdBQVcsR0FBR0EsQ0FBQSxLQUFNbUIsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNO2NBQUVNO1lBQVMsQ0FBRSxHQUFHLElBQUFuRSxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzFDLElBQUE5SCxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzJGLFVBQVUsQ0FBQ3RNLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxDQUFDO2NBQ3RDd0YsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3JILElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTW1HLFNBQVMsR0FBR0EsQ0FBQSxLQUFLLENBQUUsQ0FBQztZQUMxQixNQUFNc0IsSUFBSSxHQUFHLEVBQUU7WUFDZixNQUFNdEssUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJtSyxhQUFhLENBQUNuSyxLQUFLLENBQUNFLGFBQWEsQ0FBQytDLE9BQU8sQ0FBQzVELElBQUksQ0FBQztZQUNoRCxDQUFDO1lBRURnTCxJQUFJLENBQUNDLElBQUksQ0FDUnJOLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2TCxLQUFBLENBQUFnQixHQUFHO2NBQUNDLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ25MLElBQUksRUFBQztZQUFTLEdBQzFDMkUsYUFBYSxDQUFDeUQsS0FBSyxDQUFDaEQsT0FBTyxDQUN2QixDQUNOO1lBRUQsSUFBSWxILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxFQUFFO2NBQy9CeUQsTUFBTSxDQUFDQyxJQUFJLENBQUNuRSxhQUFhLENBQUN5RCxLQUFLLENBQUMsQ0FBQ2dELE9BQU8sQ0FBQ3RNLElBQUksSUFBRztnQkFDL0MsSUFBSUEsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDeEJrTSxJQUFJLENBQUNDLElBQUksQ0FDUnJOLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2TCxLQUFBLENBQUFnQixHQUFHO2tCQUFDbEwsSUFBSSxFQUFFbEIsSUFBSTtrQkFBRXFNLEdBQUcsRUFBRXJNO2dCQUFJLEdBQ3hCNkYsYUFBYSxDQUFDeUQsS0FBSyxDQUFDdEosSUFBSSxDQUFDLENBQ3JCLENBQ047Y0FDRixDQUFDLENBQUM7O1lBRUgsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUE4SixLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUvSCxJQUFJO2NBQUNoRixTQUFTLEVBQUMsc0JBQXNCO2NBQUN3TCxPQUFPLEVBQUVBO1lBQU8sR0FDbEZuTSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxPQUFBLENBQUFvTSxvQkFBb0I7Y0FBQ1YsVUFBVSxFQUFFQSxVQUFVO2NBQUV0QixXQUFXLEVBQUVBO1lBQVcsRUFBSSxFQUUxRTNMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2TCxLQUFBLENBQUFzQixhQUFhO2NBQUNDLE1BQU0sRUFBRSxDQUFDO2NBQUVsTixTQUFTLEVBQUMsdUJBQXVCO2NBQUNtQyxRQUFRLEVBQUVBO1lBQVEsR0FDN0U5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkwsS0FBQSxDQUFBd0IsSUFBSSxRQUFFVixJQUFJLENBQVEsRUFDbkJwTixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkwsS0FBQSxDQUFBeUIsS0FBSyxRQUNML04sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhMLFFBQUEsQ0FBQTNGLFVBQVU7Y0FBQ3VGLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEVBQ2hDbk0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytMLEtBQUEsQ0FBQXdCLFlBQVk7Y0FBQzVMLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakNwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0wsS0FBQSxDQUFBd0IsWUFBWTtjQUFDNUwsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNoQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTSxPQUFBLENBQUEvQyxrQkFBa0IsT0FBRyxDQUNmLENBQ08sRUFFaEIxSixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssV0FBQSxDQUFBMkMsZUFBZTtjQUNmdEksSUFBSSxFQUFFa0gsU0FBUztjQUNmaEIsUUFBUTtjQUNSOUssS0FBSyxFQUFFZ0csYUFBYSxDQUFDa0YsVUFBVSxDQUFDbEwsS0FBSztjQUNyQ3FELFdBQVcsRUFBRTJDLGFBQWEsQ0FBQ2tGLFVBQVUsQ0FBQzdILFdBQVc7Y0FDakQrSCxPQUFPLEVBQUVSLFdBQVc7Y0FDcEJHLFNBQVMsRUFBRUEsU0FBUztjQUNwQjFDLFVBQVUsRUFBRStELFNBQVMsQ0FBQ0YsVUFBVTtZQUFDLEVBQ2hDLENBQ0ssQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBak4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTBOLG9CQUFvQkEsQ0FBQztZQUFFVixVQUFVO1lBQUV0QjtVQUFXLENBQUU7WUFDL0QsTUFBTTtjQUFFdEw7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV0QyxNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBRW5ELE9BQ0NqSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtzRyxhQUFhLENBQUNoRyxLQUFLLENBQU0sQ0FDdEI7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBNkMsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE2SyxLQUFBLEdBQUE3SyxPQUFBO1VBRU0sU0FBVXdELGFBQWFBLENBQUMsRUFBRTtZQUMvQixNQUFNO2NBQUVwRDtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3RDLE1BQU0sQ0FBQ3NNLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc5TSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTXFNLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCcEIsWUFBWSxDQUFDLElBQUksQ0FBQztjQUNsQnFCLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDakwsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDa0wsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUTtZQUNwRSxDQUFDO1lBRUQsTUFBTW5DLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCVyxZQUFZLENBQUMsS0FBSyxDQUFDO2NBQ25CcUIsVUFBVSxDQUFDQyxRQUFRLENBQUNqTCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNrTCxLQUFLLENBQUNDLFFBQVEsR0FBRyxNQUFNO1lBQ2xFLENBQUM7WUFDRCxPQUNDdE8sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsa0JBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ2xHLEtBQUssQ0FBTSxFQUNqRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUMzQyxJQUFJLEVBQUMsS0FBSztjQUFDNEMsT0FBTyxFQUFFK0ksUUFBUTtjQUFFbkssT0FBTyxFQUFDO1lBQU0sR0FDbEQxRCxLQUFLLENBQUMyRyxhQUFhLENBQUNqRixLQUFLLENBQUN3RCxPQUFPLENBQUNqQyxHQUFHLENBQzlCLENBQ0osQ0FDRSxFQUNUdEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FLLEtBQUEsQ0FBQXlELFlBQVk7Y0FBQ0wsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDM0IsRUFDVHJCLFNBQVMsSUFBSTdNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXVNLGFBQWE7Y0FBQy9HLElBQUksRUFBRWtILFNBQVM7Y0FBRVYsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDaEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQS9LLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLFNBQVN1TyxZQUFZQSxDQUFDbEYsSUFBSSxFQUFFaUIsU0FBUztZQUNwQyxPQUFPakIsSUFBSSxDQUFDZixNQUFNLEdBQUdnQyxTQUFTLEdBQUdqQixJQUFJLENBQUNtRixTQUFTLENBQUMsQ0FBQyxFQUFFbEUsU0FBUyxDQUFDLEdBQUcsS0FBSyxHQUFHakIsSUFBSTtVQUM3RTtVQUVNLFNBQVVpRixZQUFZQSxDQUFDO1lBQUVMO1VBQVEsQ0FBRTtZQUN4QyxNQUFNO2NBQUVySCxLQUFLO2NBQUV4RyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFdkQsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTSxDQUFDdEMsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR3hFLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNK0MsVUFBVSxHQUFHQSxDQUFBLEtBQU1KLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFFdkMsTUFBTVEsU0FBUyxHQUFHaEMsS0FBSyxJQUFHO2NBQ3pCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkJ4RSxRQUFRLENBQUMyRyxTQUFTLENBQUNZLEtBQUssRUFBRTtjQUMxQnZILFFBQVEsQ0FBQ3dILElBQUksRUFBRTtjQUNmbEQsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1PLE9BQU8sR0FBR3BDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCRixVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUQsTUFBTTtjQUFFN0QsS0FBSztjQUFFcUQ7WUFBVyxDQUFFLEdBQUcvRCxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ3lILFdBQVc7WUFDeEUsT0FDQzFPLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0VKLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxHQUMxQnhILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDLGdDQUFnQztjQUFDd0UsT0FBTyxFQUFFK0k7WUFBUSxHQUMvRE0sWUFBWSxDQUFDbE8sUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQzdDeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBdU4sVUFBVTtjQUFDaE8sU0FBUyxFQUFDLFFBQVE7Y0FBQzRCLElBQUksRUFBQyxRQUFRO2NBQUM0QyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1RCxDQUNELEdBRU5uRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDbEYsS0FBSyxDQUFRLENBQzdDLENBRVAsRUFDQXdDLElBQUksSUFDSnZFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNPLElBQUk7Y0FBQ1osU0FBUyxFQUFFQSxTQUFTO2NBQUVhLFFBQVEsRUFBRWhCO1lBQVUsR0FDNUQ1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUMsZUFBZTtjQUFDd0UsT0FBTyxFQUFFUDtZQUFVLEVBQUksRUFDdEQ1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS00sS0FBSyxDQUFNLEVBQ2hCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMkQsV0FBVyxDQUFLLENBQ2YsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUFSLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVUyTyxrQkFBa0JBLENBQUM7WUFDbEN4TSxJQUFJO1lBQ0p3RCxRQUFRO1lBQ1J1RztVQUFPLENBTVA7WUFDQSxNQUFNO2NBQUVRLE1BQU07Y0FBRXJNLFFBQVE7Y0FBRUQsS0FBSztjQUFFd0c7WUFBSyxDQUFFLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDL0QsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTSxDQUFDZ0ksZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHOU8sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQzZGLE9BQU8sRUFBRWtGLFVBQVUsQ0FBQyxHQUFHNU0sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUM4SyxNQUFNLENBQUMxRixTQUFTLEdBQUc3RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUUsTUFBTSxDQUFDOEUsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNaUIsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEI2SixVQUFVLENBQUM3SixLQUFLLENBQUMwRSxNQUFNLENBQUNqRSxLQUFLLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU11RSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJNEUsTUFBTSxDQUFDSSxPQUFPLEVBQUU7Z0JBQ25CK0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRGxKLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNYixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXLENBQUUsQ0FBQztZQUNoQyxNQUFNZ0ssYUFBYSxHQUFHQSxDQUFBLEtBQU1ELGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNOUcsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QmIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQjdHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ00sR0FBRyxDQUFDO2dCQUFFLENBQUNuRixJQUFJLEdBQUdzRjtjQUFPLENBQUUsQ0FBQztjQUMzQyxNQUFNcEgsUUFBUSxDQUFDd0gsSUFBSSxDQUFDO2dCQUFFLENBQUMxRixJQUFJLEdBQUdzRjtjQUFPLENBQUUsQ0FBQztjQUN4Q1AsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQmdGLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxNQUFNN0QsYUFBYSxHQUFHLHdCQUNyQlosT0FBTyxDQUFDYSxNQUFNLEdBQUcsSUFBSSxHQUFJYixPQUFPLENBQUNhLE1BQU0sR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLGVBQWUsR0FBSSxFQUNyRixFQUFFO1lBRUYsT0FDQ3ZJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXFJLElBQUk7Y0FBQzdILFNBQVMsRUFBQyw4QkFBOEI7Y0FBQzhILFFBQVEsRUFBRVQ7WUFBTSxHQUM5RGhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBdUksUUFBUTtjQUNSNUYsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCVixJQUFJLEVBQUVBLElBQUk7Y0FDVm9CLEtBQUssRUFBRWtFLE9BQU87Y0FDZGtCLFdBQVcsRUFBRXZJLEtBQUssQ0FBQytHLE1BQU0sQ0FBQ2hGLElBQUksQ0FBQyxDQUFDNE07WUFBUSxFQUN2QyxDQUNHLEVBQ05oUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUUySDtZQUFhLEdBQzNCakksS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUM2QixVQUFVLEUsS0FBRyxJQUFJLEdBQUdwQixPQUFPLENBQUNhLE1BQU0sQ0FDNUQsQ0FDQSxFQUNQdkksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDQyxPQUFPLEVBQUU0QyxhQUFhO2NBQUVoRSxPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO1lBQUEsR0FDeEQyQyxXQUFXLENBQUN2QixPQUFPLENBQUNHLE1BQU0sQ0FDbkIsRUFDVDFGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFNkMsTUFBTTtjQUFFbEUsUUFBUSxFQUFFLENBQUM0RCxPQUFPLElBQUlSO1lBQVEsR0FDdkVKLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3VDLElBQUksQ0FDakIsQ0FDRCxFQUNSK0csZUFBZSxJQUNmN08sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVhLFFBQVEsRUFBRW1KO1lBQWEsR0FDMUQvTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUFNcUcsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQU8sQ0FFeEMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVFQSxJQUFBMUYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVHLFNBQUEsR0FBQXZHLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQWdQLE1BQUEsR0FBQWhQLE9BQUE7VUFDQSxJQUFBaVAsbUJBQUEsR0FBQWpQLE9BQUE7VUFHQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBeUcsY0FBQSxHQUFBekcsT0FBQTtVQUVNLFNBQVUrTixZQUFZQSxDQUFDO1lBQUU1TDtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFeUUsS0FBSztjQUFFdkcsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ08sTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNzTixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHcFAsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUMyRyxTQUFTLENBQUM3RSxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNaU4sY0FBYyxHQUFHQSxDQUFBLEtBQU1oSSxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBQzdDLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFBUixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ21JLFdBQVcsQ0FBQzlPLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztZQUVGLElBQUlnRixNQUFNLEVBQUUsT0FBT3BILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5TyxtQkFBQSxDQUFBTixrQkFBa0I7Y0FBQ3hNLElBQUksRUFBRUEsSUFBSTtjQUFFK0osT0FBTyxFQUFFN0UsWUFBWTtjQUFFMUIsUUFBUSxFQUFFMEI7WUFBWSxFQUFJO1lBQ3BHLElBQUksQ0FBQzZILFFBQVEsRUFBRSxPQUFPblAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dPLE1BQUEsQ0FBQTdDLGFBQWE7Y0FBQ2hLLElBQUksRUFBRUEsSUFBSTtjQUFFOEYsUUFBUSxFQUFFWjtZQUFZLEVBQUk7WUFFM0UsTUFBTUssUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakI3RyxRQUFRLENBQUMyRyxTQUFTLENBQUNNLEdBQUcsQ0FBQztnQkFBRSxDQUFDbkYsSUFBSSxHQUFHO2NBQUUsQ0FBRSxDQUFDO2NBQ3RDOUIsUUFBUSxDQUFDd0gsSUFBSSxDQUFDO2dCQUFFLENBQUMxRixJQUFJLEdBQUc7Y0FBRSxDQUFFLENBQUM7Y0FDN0IrRSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFDRCxPQUNDbkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsU0FBQSxDQUFBMkIsUUFBUTtjQUFDVCxPQUFPLEVBQUV5SDtZQUFRLEVBQUksQ0FDdEIsRUFDVm5QLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQyxHQUNoRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQzNDLElBQUksRUFBQyxNQUFNO2NBQUM0QyxPQUFPLEVBQUVrSyxjQUFjO2NBQUV2TCxRQUFRLEVBQUVvRCxRQUFRO2NBQUVuRCxPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO1lBQUEsR0FDekYyQyxXQUFXLENBQUN2QixPQUFPLENBQUM2QyxJQUFJLENBQ2pCLEVBQ1RwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUcsY0FBQSxDQUFBN0MsYUFBYTtjQUFDSSxRQUFRLEVBQUUwRCxRQUFRO2NBQUVwRixJQUFJLEVBQUMsUUFBUTtjQUFDdUIsUUFBUSxFQUFFb0QsUUFBUTtjQUFFbkQsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtZQUFBLEdBQzdGMkMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDOEMsTUFBTSxDQUNaLENBQ1IsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBckksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVWtKLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUU3STtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3pDLE1BQU0sQ0FBQzJHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQsTUFBTXFILGFBQWEsR0FBRyxNQUFBQSxDQUFPOEIsS0FBSyxHQUFHWixTQUFTLEtBQUk7Y0FDakQsSUFBSTtnQkFDSGpELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU03RyxRQUFRLENBQUMyRyxTQUFTLENBQUNpQyxhQUFhLENBQUM4QixLQUFLLENBQUM7ZUFDN0MsQ0FBQyxPQUFPc0UsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVG5JLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxNQUFNMkMsV0FBVyxHQUFHLE1BQUFBLENBQU9rQixLQUFLLEdBQUdaLFNBQVMsS0FBSTtjQUMvQyxJQUFJO2dCQUNIakQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTdHLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzZDLFdBQVcsQ0FBQ2tCLEtBQUssQ0FBQztlQUMzQyxDQUFDLE9BQU9zRSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUbkksV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU11RSxlQUFlLEdBQUcsTUFBQUEsQ0FBTztjQUFFK0QsS0FBSztjQUFFdkQ7WUFBUyxDQUFFLEtBQUk7Y0FDdEQsSUFBSTtnQkFDSCxNQUFNd0QsSUFBSSxHQUFHLE1BQU1wUCxRQUFRLENBQUMyRyxTQUFTLENBQUN1QyxRQUFRLENBQUMsU0FBUyxFQUFFaUcsS0FBSyxFQUFFdkQsU0FBUyxDQUFDO2VBQzNFLENBQUMsT0FBT29ELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQzs7WUFFaEIsQ0FBQztZQUVELE1BQU1LLGdCQUFnQixHQUFHLE1BQUFBLENBQU96TyxJQUFJLEVBQUV1TyxLQUFLLEtBQUk7Y0FDOUN0SSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU03RyxRQUFRLENBQUMyRyxTQUFTLENBQUN1QyxRQUFRLENBQUN0SSxJQUFJLEVBQUV1TyxLQUFLLENBQUM7Y0FFOUNHLFVBQVUsQ0FBQyxNQUFLO2dCQUNmekksV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUNELE9BQU87Y0FDTitCLGFBQWE7Y0FDYndDLGVBQWU7Y0FDZmlFLGdCQUFnQjtjQUNoQnpJLFFBQVE7Y0FDUkMsV0FBVztjQUNYMkMsV0FBVztjQUNYcUQsU0FBUyxFQUFFO2dCQUNWeEQsTUFBTSxFQUFFVCxhQUFhO2dCQUNyQjFCLE9BQU8sRUFBRWtFLGVBQWU7Z0JBQ3hCeUQsUUFBUSxFQUFFUSxnQkFBZ0I7Z0JBQzFCRSxRQUFRLEVBQUVGLGdCQUFnQjtnQkFDMUJHLFNBQVMsRUFBRUg7O2FBRVo7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQTNQLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ25EZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVOFAsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUUxUCxLQUFLO2NBQUVDLFFBQVE7Y0FBRTBQO1lBQVksQ0FBRSxHQUFHLElBQUE5UCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1XLFVBQVUsR0FBR2YsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNbUIsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ2lILEdBQUcsQ0FBQztnQkFBRSxDQUFDbkYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU15TSxNQUFNLEdBQUdBLENBQUEsS0FBTTNQLFFBQVEsQ0FBQ3dILElBQUksRUFBRTtZQUNwQyxNQUFNOUYsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUVsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBRVZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUF1RCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVWlRLGtCQUFrQkEsQ0FBQztZQUFFdkssSUFBSTtZQUFFd0c7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQ2pGLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMdkIsUUFBUTtjQUNSRCxLQUFLLEVBQUU7Z0JBQUVPLFVBQVUsRUFBRVA7Y0FBSyxDQUFFO2NBQzVCd0csS0FBSyxFQUFFO2dCQUNOQyxXQUFXLEVBQUU7a0JBQUV2QjtnQkFBTztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBckYsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixJQUFJLENBQUNvRixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1aLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSG9DLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU03RyxRQUFRLENBQUM2UCxZQUFZLEVBQUU7Z0JBQzdCaEUsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPbUQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNhLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1RuSSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ25ILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQ1pPLElBQUk7Y0FDSndHLE9BQU8sRUFBRUEsT0FBTztjQUNoQnBILFNBQVMsRUFBRUEsU0FBUztjQUNwQk0sVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVILEtBQUssRUFBRUMsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDcENFLFFBQVEsRUFBRXVHO1lBQU8sR0FFakJuTSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNxTyxXQUFXLENBQUMzTixLQUFLLENBQU0sRUFDbENmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUlKLEtBQUssQ0FBQ3FPLFdBQVcsQ0FBQ3RLLFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQyxHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBSTlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBTSxFQUNuRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQVEsQ0FDckQsQ0FDRCxFQUNOaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN2QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFDLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRWMsU0FBVW9RLGdCQUFnQkEsQ0FBQTtZQUN2QyxNQUFNO2NBQUVoUSxLQUFLO2NBQUVDLFFBQVE7Y0FBRTBQO1lBQVksQ0FBRSxHQUFHLElBQUE5UCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1XLFVBQVUsR0FBR2YsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNbUIsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ2lILEdBQUcsQ0FBQztnQkFBRSxDQUFDbkYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU15TSxNQUFNLEdBQUdBLENBQUEsS0FBTTNQLFFBQVEsQ0FBQ3dILElBQUksRUFBRTtZQUNwQyxNQUFNOUYsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUVsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBRVZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUFELEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxUSxRQUFBLEdBQUFyUSxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxNQUFNc1EsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUVyUSxLQUFBLENBQUFzUSxLQUFLO1lBQ1p6QixRQUFRLEVBQUU3TyxLQUFBLENBQUF1SSxRQUFRO1lBQ2xCZ0ksS0FBSyxFQUFFdlEsS0FBQSxDQUFBd1EsS0FBSztZQUNaQyxRQUFRLEVBQUV6USxLQUFBLENBQUEwUSxRQUFRO1lBQ2xCQyxNQUFNLEVBQUUzUSxLQUFBLENBQUE0USxNQUFNO1lBQ2RDLEtBQUssRUFBRVYsUUFBQSxDQUFBVztXQUNQO1VBRUssU0FBVTlPLGFBQWFBLENBQUMrTyxLQUFLO1lBQ2xDLE1BQU07Y0FBRTdRLEtBQUs7Y0FBRUMsUUFBUTtjQUFFMFA7WUFBWSxDQUFFLEdBQUcsSUFBQTlQLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTtjQUFFNkIsSUFBSTtjQUFFbEIsSUFBSTtjQUFFaVEsS0FBSztjQUFFaFEsTUFBTTtjQUFFcUM7WUFBSyxDQUFFLEdBQUcwTixLQUFLO1lBRWxELE1BQU0sQ0FBQ0UsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3JSLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUVoRCxNQUFNO2NBQUV5RCxLQUFLO2NBQUVzRCxXQUFXO2NBQUU3SDtZQUFLLENBQUUsR0FBR1YsS0FBSyxDQUFDTyxVQUFVLENBQUN3QixJQUFJLENBQUM7WUFDNUQsTUFBTSxDQUFDa1AsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHdlIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUM4QixJQUFJLENBQUMsQ0FBQztZQUV4RSxJQUFBZixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQmlSLGdCQUFnQixDQUFDalIsUUFBUSxDQUFDOEIsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDO1lBQ0YsTUFBTTZOLE1BQU0sR0FBR0EsQ0FBQSxLQUFNM1AsUUFBUSxDQUFDd0gsSUFBSSxFQUFFO1lBQ3BDLE1BQU1oRixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QndPLGdCQUFnQixDQUFDeE8sS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFcEIsSUFBSTtnQkFBRW9CO2NBQUssQ0FBRSxHQUFHVCxLQUFLLENBQUNFLGFBQWE7Y0FDM0MzQyxRQUFRLENBQUNpSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ25GLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxJQUFJLENBQUNuRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ3dCLElBQUksQ0FBQyxFQUFFO2NBQzVCbU4sT0FBTyxDQUFDaUMsSUFBSSxDQUFDLGdEQUFnRHBQLElBQUksRUFBRSxDQUFDO2NBQ3BFLE9BQU8sSUFBSTs7WUFHWixNQUFNNkQsS0FBSyxHQUFHO2NBQUVYLEtBQUs7Y0FBRXNELFdBQVc7Y0FBRXBGLEtBQUssRUFBRThOO1lBQWEsQ0FBRTtZQUUxRDtZQUVBLE1BQU1HLEtBQUssR0FBR2xCLFVBQVUsQ0FBQ3JQLElBQUksQ0FBQztZQUM5QixPQUNDbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDRVUsTUFBTSxHQUFHbkIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS00sS0FBSyxDQUFNLEdBQUcsSUFBSSxFQUNqQ2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dSLEtBQUs7Y0FDTGxFLEdBQUcsRUFBRSxHQUFHbkwsSUFBSSxpQkFBaUI7Y0FDN0IyQixPQUFPLEVBQUMsVUFBVTtjQUNsQnVCLEtBQUssRUFBRUEsS0FBSztjQUNabEQsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FDTjZELEtBQUs7Y0FDVG5ELFFBQVEsRUFBRUEsUUFBUTtjQUNsQm1OLE1BQU0sRUFBRUE7WUFBTSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQWpRLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ25EZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFYyxTQUFVeVIsd0JBQXdCQSxDQUFBO1lBQy9DLE1BQU07Y0FBRXJSLEtBQUs7Y0FBRUMsUUFBUTtjQUFFMFA7WUFBWSxDQUFFLEdBQUcsSUFBQTlQLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTVcsVUFBVSxHQUFHZixJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1tQixRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFRyxhQUFhLEVBQUU7Z0JBQUViLElBQUk7Z0JBQUVvQjtjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEbEQsUUFBUSxDQUFDaUgsR0FBRyxDQUFDO2dCQUFFLENBQUNuRixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTXlNLE1BQU0sR0FBR0EsQ0FBQSxLQUFNM1AsUUFBUSxDQUFDd0gsSUFBSSxFQUFFO1lBQ3BDLE1BQU05RixRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBRWxCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNELENBQ0csRUFFVkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLEVBQ05LLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZSxlQUFBLENBQUFwQixjQUFjLE9BQUcsQ0FDYixDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBTU8sTUFBTTBSLHFCQUFxQixHQUFBOUcsT0FBQSxDQUFBOEcscUJBQUEsR0FBRzNSLE1BQUEsQ0FBQVEsT0FBSyxDQUFDb1IsYUFBYSxDQUFDLEVBQTZCLENBQUM7VUFDaEYsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTTdSLE1BQUEsQ0FBQVEsT0FBSyxDQUFDc1IsVUFBVSxDQUFDSCxxQkFBcUIsQ0FBQztVQUFDOUcsT0FBQSxDQUFBZ0gsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUHRGLElBQUFqTyxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBY00sU0FBVThSLHdCQUF3QkEsQ0FBQztZQUFFM1AsSUFBSTtZQUFFTSxVQUFVO1lBQUVvQixRQUFRO1lBQUVrTyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUM5RyxNQUFNO2NBQ0wzUixLQUFLO2NBQ0xDLFFBQVE7Y0FDUnVHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNMkgsUUFBUSxHQUFHQSxDQUFBLEtBQU14RixVQUFVLENBQUMsTUFBTSxDQUFDO1lBRXpDLE9BQ0MxQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLEVBQzVCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRStDO1lBQVEsR0FDL0M3SCxLQUFLLENBQUM0UixjQUFjLENBQUMxTSxPQUFPLENBQUMyTSxXQUFXLENBQ2pDLENBQ0osQ0FDRSxFQUNUbFMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBUSxDQUM1QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFSLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBa1MsU0FBQSxHQUFBbFMsT0FBQTtVQUNBLElBQUFtUyxVQUFBLEdBQUFuUyxPQUFBO1VBRU0sU0FBVW9TLHdCQUF3QkEsQ0FBQztZQUFFek0sUUFBUTtZQUFFME07VUFBVSxDQUFFO1lBQ2hFLE1BQU0sQ0FBQ3BMLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMOEssTUFBTTtjQUNOdE0sS0FBSztjQUNMd0csS0FBSztjQUNMdkcsUUFBUTtjQUNSdUcsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUNnUyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHeFMsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU00USxHQUFHLEdBQUd6UyxNQUFBLENBQUFRLE9BQUssQ0FBQ2tTLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTSxDQUFDbE4sT0FBTyxFQUFFbU4sVUFBVSxDQUFDLEdBQUczUyxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTW1HLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekJiLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTTtnQkFBRXlMO2NBQVMsQ0FBRSxHQUFHakcsTUFBTSxDQUFDN0ssS0FBSztjQUVsQyxNQUFNK1EsTUFBTSxHQUFHLEVBQUU7Y0FFakJELFNBQVMsQ0FBQ3BGLE9BQU8sQ0FBQyxDQUFDc0YsUUFBUSxFQUFFM0IsS0FBSyxLQUFJO2dCQUNyQyxJQUFJLENBQUMyQixRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDQSxRQUFRLEVBQUUxTSxPQUFPLENBQUNtQyxNQUFNLElBQUl3SyxLQUFLLENBQUNELFFBQVEsRUFBRUUsYUFBYSxDQUFDLEVBQUU7a0JBQ3ZGSCxNQUFNLENBQUN4RixJQUFJLENBQUM4RCxLQUFLLENBQUM7a0JBQ2xCOztnQkFFRCxNQUFNOEIsT0FBTyxHQUFHSCxRQUFRLENBQUMxTSxPQUFPLENBQUM4TSxNQUFNLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDM1AsS0FBSyxLQUFLLEVBQUUsQ0FBQztnQkFDbEUsSUFBSXlQLE9BQU8sQ0FBQzFLLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQ3ZCc0ssTUFBTSxDQUFDeEYsSUFBSSxDQUFDOEQsS0FBSyxDQUFDOztjQUVwQixDQUFDLENBQUM7Y0FFRixJQUFJMEIsTUFBTSxDQUFDdEssTUFBTSxFQUFFO2dCQUNsQmlLLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDO2dCQUNqQjFMLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCOztjQUdELE1BQU03RyxRQUFRLENBQUN3SCxJQUFJLEVBQUU7Y0FDckJYLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJtTCxVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUR0UyxNQUFBLENBQUFRLE9BQUssQ0FBQzRTLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2IsTUFBTSxDQUFDaEssTUFBTSxFQUFFO2NBQ3BCLE1BQU04SyxTQUFTLEdBQUdaLEdBQUcsQ0FBQ2EsT0FBTztjQUM3QkQsU0FBUyxDQUFDRSxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDL0YsT0FBTyxDQUFDLENBQUMyRixJQUFJLEVBQUVoQyxLQUFLLEtBQUk7Z0JBQ3ZGLElBQUksQ0FBQ29CLE1BQU0sQ0FBQ2lCLFFBQVEsQ0FBQ3JDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QmdDLElBQUksQ0FBQy9QLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2dCQUNyQzZQLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQUs7a0JBQ3JDTixJQUFJLENBQUMvUCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDekMsQ0FBQyxDQUFDO2dCQUNGOEssVUFBVSxDQUFDdUYsUUFBUSxDQUFDO2tCQUFFQyxHQUFHLEVBQUUsQ0FBQztrQkFBRUMsUUFBUSxFQUFFO2dCQUFRLENBQUUsQ0FBQztnQkFDbkQ7Y0FDRCxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQ3JCLE1BQU0sQ0FBQyxDQUFDO1lBRVosTUFBTXNCLFlBQVksR0FBRztjQUNwQnRCLE1BQU07Y0FDTkM7YUFDQTtZQUNELE1BQU01TixVQUFVLEdBQUdBLENBQUEsS0FBTStOLFVBQVUsQ0FBQyxDQUFDbk4sT0FBTyxDQUFDO1lBQzdDLE1BQU1zTyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJLENBQUN4VCxRQUFRLENBQUN5VCxXQUFXLEVBQUU7Z0JBQzFCbk8sUUFBUSxFQUFFO2dCQUNWOztjQUVEaEIsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE9BQ0M1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFIsU0FBQSxDQUFBUixxQkFBcUIsQ0FBQ3FDLFFBQVE7Y0FBQ3hRLEtBQUssRUFBRXFRO1lBQVksR0FDbEQ3VCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxPQUFBLENBQUEwUyxXQUFXLE9BQUcsRUFFZmpVLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNnUyxHQUFHLEVBQUVBLEdBQUc7Y0FBRTlSLFNBQVMsRUFBQztZQUF5QyxHQUVyRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQW1MLGFBQWE7Y0FBQzlELEtBQUssRUFBRW1DLE1BQU0sQ0FBQ2hLLE1BQU0sR0FBR2xJLEtBQUssQ0FBQ2tTLE1BQU0sQ0FBQzRCLGNBQWMsR0FBRztZQUFFLEVBQUksRUFDMUVuVSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlIsVUFBQSxDQUFBZ0Msb0JBQW9CO2NBQUM3QixNQUFNLEVBQUVBLE1BQU07Y0FBRUMsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDOUR4UyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBbUQsR0FDcEVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUUyTztZQUFhLEdBQ3ZEaE4sV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRTZDLE1BQU07Y0FBRWxFLFFBQVEsRUFBRSxDQUFDLENBQUN5TyxNQUFNLENBQUNoSyxNQUFNLElBQUlyQjtZQUFRLEdBQzlFSixXQUFXLENBQUN2QixPQUFPLENBQUN1QyxJQUFJLENBQ2pCLENBQ0QsQ0FDQSxDQUNzQixFQUVoQ3RDLE9BQU8sSUFDUHhGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNPLElBQUk7Y0FBQ1osU0FBUyxFQUFFYSxRQUFRO2NBQUVBLFFBQVEsRUFBRWhCO1lBQVUsR0FDM0Q1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUM0UixjQUFjLENBQUN2TSxNQUFNLENBQUMzRSxLQUFLLENBQU0sRUFDNUNmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUlKLEtBQUssQ0FBQzRSLGNBQWMsQ0FBQ3ZNLE1BQU0sQ0FBQ3RCLFdBQVcsQ0FBSyxDQUVqRCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb1UsWUFBQSxHQUFBcFUsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVXFVLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFalU7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN0QyxJQUFJO2NBQUVnRjtZQUFPLENBQUUsR0FBR2xGLEtBQUssQ0FBQzRSLGNBQWM7WUFDdEMsTUFBTTtjQUFFc0M7WUFBTyxDQUFFLEdBQUcsSUFBQUYsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUMzQyxPQUNDeFUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTBELEdBQzVFWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQ29CLE9BQU8sRUFBRW9QO1lBQU8sR0FDckNoUCxPQUFPLENBQUMyTSxXQUFXLENBQ1osQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFsUyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFvVSxZQUFBLEdBQUFwVSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVXdVLG9CQUFvQkEsQ0FBQztZQUFFM1EsUUFBUTtZQUFFNFEsS0FBSztZQUFFQztVQUFNLENBQUU7WUFDL0QsTUFBTTtjQUNMdFUsS0FBSyxFQUFFO2dCQUFFNFIsY0FBYyxFQUFFNVI7Y0FBSztZQUFFLENBQ2hDLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNO2NBQUVnVTtZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE1BQU1yUCxPQUFPLEdBQUdwQyxLQUFLLElBQUc7Y0FDdkIsSUFBSSxDQUFDNFIsTUFBTSxFQUFFO2dCQUNaLE9BQU9ELEtBQUssQ0FBQyxJQUFJLENBQUM7O2NBRW5CSCxPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsT0FDQ3ZVLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUF5QixHQUMzQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25FLEtBQUssRUFBRVYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDcVAsU0FBUztjQUFFelAsT0FBTyxFQUFFQSxPQUFPO2NBQUVyQixRQUFRLEVBQUVBO1lBQVEsR0FDMUV6RCxLQUFLLENBQUNrRixPQUFPLENBQUNxUCxTQUFTLENBQ2hCLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQTVVLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0VSxPQUFBLEdBQUE1VSxPQUFBO1VBQ0EsSUFBQXdKLEtBQUEsR0FBQXhKLE9BQUE7VUFDQSxJQUFBNlUsT0FBQSxHQUFBN1UsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVThVLGtCQUFrQkEsQ0FBQztZQUFFN04sUUFBUTtZQUFFdkIsSUFBSTtZQUFFcVAsT0FBTztZQUFFbFMsUUFBUTtZQUFFZ0I7VUFBUSxDQUFFO1lBQ2pGLE1BQU0sQ0FBQ21SLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdsVixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFL0MsSUFBSXFGLFFBQVEsRUFBRTtjQUNiLE9BQ0NsSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBdVIsT0FBTztnQkFBQ3RILE1BQU07Z0JBQUM5SixPQUFPLEVBQUM7Y0FBUyxFQUFHLENBQy9COztZQUlSLE9BQ0MvRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1UsT0FBTyxDQUFDYixRQUFRO2NBQ2hCNVIsSUFBSSxFQUFDLGtCQUFrQjtjQUN2QnpCLFNBQVMsRUFBQyxrQ0FBa0M7Y0FDNUM2QyxLQUFLLEVBQUV3UixPQUFPO2NBQ2RJLElBQUksRUFBRTNMLEtBQUEsQ0FBQTRMLHlCQUF5QjtjQUMvQnZTLFFBQVEsRUFBRUE7WUFBUSxHQUVqQixDQUFDNkMsSUFBSSxJQUFJc1AsS0FBSyxLQUFLalYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29VLE9BQU8sQ0FBQ3pKLElBQUk7Y0FBQ3pLLFNBQVMsRUFBQztZQUFjLEVBQUcsRUFDN0RYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxVSxPQUFBLENBQUFMLG9CQUFvQjtjQUFDRSxNQUFNLEVBQUVoUCxJQUFJLElBQUlzUCxLQUFLO2NBQUVuUixRQUFRLEVBQUVBLFFBQVE7Y0FBRTRRLEtBQUssRUFBRVE7WUFBUSxFQUFJLENBQ2xFO1VBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBbFYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBcVYsU0FBQSxHQUFBclYsT0FBQTtVQUNBLElBQUFvVSxZQUFBLEdBQUFwVSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtTLFNBQUEsR0FBQWxTLE9BQUE7VUFFTSxTQUFVb1YseUJBQXlCQSxDQUFDbkUsS0FBSztZQUM5QyxNQUFNO2NBQUVxRTtZQUFTLENBQUUsR0FBRyxJQUFBRCxTQUFBLENBQUFFLFFBQVEsRUFBQ3RFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1lBQzNDLE1BQU07Y0FBRXNFLE9BQU87Y0FBRWpTLEtBQUssR0FBRztZQUFFLENBQUUsR0FBRzBOLEtBQUssQ0FBQzFOLEtBQUs7WUFDM0MsTUFBTTtjQUFFbUosTUFBTTtjQUFFK0ksU0FBUztjQUFFQztZQUFVLENBQUUsR0FBRyxJQUFBdEIsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUNqRSxNQUFNO2NBQUVoQztZQUFTLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFOLHdCQUF3QixHQUFFO1lBQ2hELE1BQU07Y0FDTHhSLEtBQUssRUFBRTtnQkFBRTRSLGNBQWMsRUFBRTVSO2NBQUssQ0FBRTtjQUNoQ0M7WUFBUSxDQUNSLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNcVYsR0FBRyxHQUFHLGtDQUFrQ0gsT0FBTyxHQUFHLHlCQUF5QixHQUFHLEVBQUUsRUFBRTtZQUN4RixNQUFNM1MsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJtTyxLQUFLLENBQUMyRSxRQUFRLENBQUM7Z0JBQUVyUyxLQUFLLEVBQUVULEtBQUssQ0FBQzBFLE1BQU0sQ0FBQ2pFLEtBQUs7Z0JBQUVpUyxPQUFPLEVBQUUsQ0FBQyxDQUFDQTtjQUFPLENBQUUsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsTUFBTUssVUFBVSxHQUFHQSxDQUFBLEtBQU1ILFVBQVUsQ0FBQ3pFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1lBQ2hELE1BQU00RSxhQUFhLEdBQUdoVCxLQUFLLElBQUc7Y0FDN0IsTUFBTWlULEtBQUssR0FBR0EsQ0FBQzdDLElBQUksRUFBRWhDLEtBQUssS0FBSTtnQkFDN0IsT0FBT0EsS0FBSyxLQUFLRCxLQUFLLENBQUNDLEtBQUssR0FBRztrQkFBRSxHQUFHZ0MsSUFBSTtrQkFBRXNDLE9BQU8sRUFBRSxDQUFDQTtnQkFBTyxDQUFFLEdBQUc7a0JBQUUsR0FBR3RDLElBQUk7a0JBQUVzQyxPQUFPLEVBQUU7Z0JBQUssQ0FBRTtjQUM1RixDQUFDO2NBQ0QsTUFBTS9GLElBQUksR0FBRy9DLE1BQU0sQ0FBQ3NKLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDO2NBQzlCTixTQUFTLENBQUNoRyxJQUFJLENBQUM7Y0FDZjtjQUNBO2NBQ0E4QyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUVELE9BQ0N4UyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBaUQsR0FDL0RYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFXLEdBQUV1USxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDLEUsSUFBUSxFQUVuRG5SLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXNRLEtBQUs7Y0FDTHZQLElBQUksRUFBQyxNQUFNO2NBQ1hzQyxLQUFLLEVBQUVBLEtBQUs7Y0FDWitSLFNBQVMsRUFBRUEsU0FBUztjQUNwQnpTLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjhGLFdBQVcsRUFBRXZJLEtBQUssQ0FBQzJVLE9BQU8sQ0FBQ3BNO1lBQVcsRUFDckMsRUFDRjVJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFlLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUF1TixVQUFVO2NBQ1ZwTSxJQUFJLEVBQUMsY0FBYztjQUNuQjVCLFNBQVMsRUFBRWlWLEdBQUc7Y0FDZDdVLEtBQUssRUFBRVYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDMlEsV0FBVztjQUNoQy9RLE9BQU8sRUFBRTRRO1lBQWEsRUFDckIsRUFDRi9WLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXVOLFVBQVU7Y0FDVnBNLElBQUksRUFBQyxRQUFRO2NBQ2I1QixTQUFTLEVBQUMsMEJBQTBCO2NBQ3BDSSxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQzhDLE1BQU07Y0FDM0JsRCxPQUFPLEVBQUUyUTtZQUFVLEVBQ2xCLENBQ08sQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBOVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFMLFdBQUEsR0FBQXJMLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFvVSxZQUFBLEdBQUFwVSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVWtXLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFN1YsUUFBUTtjQUFFRCxLQUFLO2NBQUVzTSxNQUFNO2NBQUU5RjtZQUFLLENBQUUsR0FBRyxJQUFBM0csUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUUvRCxNQUFNO2NBQUV1QjtZQUFLLENBQUUsR0FBRyxJQUFBdVMsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUN6QyxJQUFJO2NBQUVqUDtZQUFPLENBQUUsR0FBR2xGLEtBQUssQ0FBQzRSLGNBQWM7WUFDdEMsTUFBTSxDQUFDcEYsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzlNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNOEosV0FBVyxHQUFHQSxDQUFBLEtBQU1tQixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO1lBQ2xELE1BQU16RCxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFcUc7WUFBSyxDQUFFLEtBQUk7Y0FDdEMsSUFBSTtnQkFDSCxNQUFNMkcsUUFBUSxHQUFHLE1BQU05VixRQUFRLENBQUN3QixLQUFLLENBQUMwSCxRQUFRLENBQUNpRyxLQUFLLEVBQUU7a0JBQUU0RyxPQUFPLEVBQUUxSixNQUFNLENBQUM3SyxLQUFLLENBQUN1VTtnQkFBTyxDQUFFLENBQUM7Z0JBQ3hGLE1BQU16RCxTQUFTLEdBQUd3RCxRQUFRLENBQUN4RCxTQUFTLENBQUNxRCxHQUFHLENBQUMsQ0FBQztrQkFBRW5ELFFBQVE7a0JBQUUxTSxPQUFPO2tCQUFFa1E7Z0JBQWMsQ0FBRSxNQUFNO2tCQUNwRnhELFFBQVE7a0JBQ1IxTSxPQUFPO2tCQUNQNE0sYUFBYSxFQUFFc0Q7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVIeFUsS0FBSyxDQUFDcUYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDdkJnSCxVQUFVLENBQUN5QixVQUFVLENBQUMsTUFBSztrQkFDMUI5TixLQUFLLENBQUNxRixXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUN4QjdHLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQztvQkFBRXFMLFNBQVMsRUFBRSxDQUFDLEdBQUdqRyxNQUFNLENBQUM3SyxLQUFLLENBQUM4USxTQUFTLEVBQUUsR0FBR0EsU0FBUztrQkFBQyxDQUFFLENBQUM7Z0JBQzdFLENBQUMsRUFBRSxHQUFHLENBQUM7ZUFDUCxDQUFDLE9BQU94QyxLQUFLLEVBQUU7Z0JBQ2ZiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDcFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQXNELEdBQ3hFWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBUSxRQUFRO2NBQUN4RixPQUFPLEVBQUMsTUFBTTtjQUFDb0IsT0FBTyxFQUFFd0c7WUFBVyxHQUMzQ3BHLE9BQU8sQ0FBQ2dSLGlCQUFpQixDQUNoQixFQUNYdlcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZLLFdBQUEsQ0FBQTJDLGVBQWU7Y0FDZnRJLElBQUksRUFBRWtILFNBQVM7Y0FDZjJKLEtBQUssRUFBRTNQLEtBQUssQ0FBQ2tGLEtBQUssQ0FBQ3lLLEtBQUs7Y0FDeEJDLE9BQU8sRUFBRTVQLEtBQUssQ0FBQ2tGLEtBQUssQ0FBQzBLLE9BQU87Y0FDNUIzSyxTQUFTLEVBQUVqRixLQUFLLENBQUNrRixLQUFLLENBQUNDLFlBQVk7Y0FDbkNHLE9BQU8sRUFBRVIsV0FBVztjQUNwQjdFLFdBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFXO2NBQzlCL0YsS0FBSyxFQUFFVixLQUFLLENBQUM0UixjQUFjLENBQUN5RSxjQUFjLENBQUMzVixLQUFLO2NBQ2hENFYsWUFBWSxFQUFFdFcsS0FBSyxDQUFDNFIsY0FBYyxDQUFDeUUsY0FBYyxDQUFDdFMsV0FBVztjQUM3RGdGLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFpTCxZQUFBLEdBQUFwVSxPQUFBO1VBQ00sU0FBVXVWLFFBQVFBLENBQUNyRSxLQUFLO1lBQzdCLE1BQU07Y0FBRW9ELE9BQU87Y0FBRXFDLElBQUk7Y0FBRWpCLFVBQVU7Y0FBRTNLO1lBQUssQ0FBRSxHQUFHLElBQUFxSixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBRXBFLE1BQU1xQyxLQUFLLEdBQUcxRixLQUFLLElBQUc7Y0FDckJoRCxVQUFVLENBQUN5QixVQUFVLENBQUMsTUFBTWdILElBQUksQ0FBQ3RELE9BQU8sQ0FBQ25DLEtBQUssQ0FBQyxFQUFFaE8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDMFQsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUM7WUFDRCxNQUFNdEIsU0FBUyxHQUFHeFMsS0FBSyxJQUFHO2NBQ3pCLE1BQU1TLEtBQUssR0FBR1QsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQ3NULElBQUksRUFBRTtjQUU5QyxJQUFJL1QsS0FBSyxDQUFDd0ssR0FBRyxLQUFLLEtBQUssRUFBRTtnQkFDeEI7Z0JBQ0EsSUFBSXhLLEtBQUssQ0FBQ2dVLFFBQVEsSUFBSTVGLEtBQUssR0FBRyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQzNOLEtBQUssRUFBRTtvQkFDWG1TLFVBQVUsQ0FBQ3hFLEtBQUssQ0FBQzs7a0JBRWxCMEYsS0FBSyxDQUFDMUYsS0FBSyxHQUFHLENBQUMsQ0FBQztrQkFDaEJwTyxLQUFLLENBQUNpVSxjQUFjLEVBQUU7a0JBQ3RCOztnQkFFRDtnQkFDQSxJQUFJN0YsS0FBSyxHQUFHbkcsS0FBSyxDQUFDekMsTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDN0JzTyxLQUFLLENBQUMxRixLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQjs7Z0JBRURwTyxLQUFLLENBQUNpVSxjQUFjLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ3hULEtBQUssRUFBRTtnQkFDWitRLE9BQU8sRUFBRTtnQkFFVHBHLFVBQVUsQ0FBQ3lCLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQmlILEtBQUssQ0FBQzFGLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7O2NBR04sSUFBSXBPLEtBQUssQ0FBQ3dLLEdBQUcsS0FBSyxXQUFXLElBQUksQ0FBQy9KLEtBQUssRUFBRTtnQkFDeENULEtBQUssQ0FBQ2lVLGNBQWMsRUFBRTtnQkFFdEIsSUFBSWpVLEtBQUssQ0FBQ2dVLFFBQVEsSUFBSTVGLEtBQUssR0FBRyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQzNOLEtBQUssRUFBRTtvQkFDWG1TLFVBQVUsQ0FBQ3hFLEtBQUssQ0FBQztvQkFDakIwRixLQUFLLENBQUMxRixLQUFLLEdBQUcsQ0FBQyxDQUFDOztrQkFHakJwTyxLQUFLLENBQUNpVSxjQUFjLEVBQUU7a0JBQ3RCOztnQkFFRCxJQUFJN0YsS0FBSyxHQUFHLENBQUMsRUFBRXdFLFVBQVUsQ0FBQ3hFLEtBQUssQ0FBQzs7WUFFbEMsQ0FBQztZQUNELE9BQU87Y0FBRW9FO1lBQVMsQ0FBRTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQXZWLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE0VSxPQUFBLEdBQUE1VSxPQUFBO1VBQ0EsSUFBQWdYLFNBQUEsR0FBQWhYLE9BQUE7VUFDQSxJQUFBaVgsUUFBQSxHQUFBalgsT0FBQTtVQUVBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVW1VLG9CQUFvQkEsQ0FBQztZQUFFN0IsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUFFN0YsTUFBTTtjQUFFck07WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVqRCxNQUFNLENBQUMyRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1pQixRQUFRLEdBQUdBLENBQUM7Y0FBRUcsYUFBYSxFQUFFd0U7WUFBTSxDQUFFLEtBQUk7Y0FDOUMsTUFBTW1MLFNBQVMsR0FBR25MLE1BQU0sQ0FBQ2pFLEtBQUssQ0FBQ3lTLEdBQUcsQ0FBQzlDLElBQUksS0FBSztnQkFDM0NMLFFBQVEsRUFBRUssSUFBSSxDQUFDTCxRQUFRO2dCQUN2QjFNLE9BQU8sRUFBRStNLElBQUksQ0FBQy9NLE9BQU87Z0JBQ3JCNE0sYUFBYSxFQUFFRyxJQUFJLENBQUNIO2VBQ3BCLENBQUMsQ0FBQztjQUVIMVMsUUFBUSxDQUFDd0IsS0FBSyxDQUFDeUYsR0FBRyxDQUFDO2dCQUFFcUwsU0FBUyxFQUFFLENBQUMsR0FBR0EsU0FBUztjQUFDLENBQUUsQ0FBQztZQUNsRCxDQUFDO1lBRUQsSUFBSTFMLFFBQVEsRUFDWCxPQUNDbEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXVSLE9BQU87Y0FBQ3RILE1BQU07Y0FBQzlKLE9BQU8sRUFBQztZQUFTLEVBQUcsQ0FDL0I7WUFFUixPQUNDL0QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29VLE9BQU8sQ0FBQ2IsUUFBUTtjQUNoQjVSLElBQUksRUFBQyxXQUFXO2NBQ2hCK1UsWUFBWSxFQUFFO2dCQUFFckUsUUFBUSxFQUFFO2NBQUUsQ0FBRTtjQUM5QnNFLFNBQVM7Y0FDVGhDLElBQUksRUFBRTZCLFNBQUEsQ0FBQUksbUJBQW1CO2NBQ3pCN1QsS0FBSyxFQUFFbUosTUFBTSxDQUFDN0ssS0FBSyxDQUFDOFEsU0FBUztjQUM3QjlQLFFBQVEsRUFBRUE7WUFBUSxHQUVsQjlDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvVSxPQUFPLENBQUN6SixJQUFJO2NBQUN6SyxTQUFTLEVBQUM7WUFBcUMsRUFBRyxFQUNoRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lXLFFBQUEsQ0FBQTVDLGNBQWMsT0FBRyxDQUNBO1VBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBdFUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUFxVixTQUFBLEdBQUFyVixPQUFBO1VBQ0EsSUFBQXFYLFFBQUEsR0FBQXJYLE9BQUE7VUFDQSxJQUFBb1UsWUFBQSxHQUFBcFUsT0FBQTtVQUVBLElBQUE4SSxHQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQXNYLEtBQUEsR0FBQXRYLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFIQTs7VUFLTSxTQUFVb1gsbUJBQW1CQSxDQUFDbkcsS0FBSztZQUN4QyxNQUFNO2NBQUVxRTtZQUFTLENBQUUsR0FBRyxJQUFBRCxTQUFBLENBQUFFLFFBQVEsRUFBQ3RFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1lBQzNDLE1BQU07Y0FDTDlRLEtBQUssRUFBRTtnQkFBRTRSLGNBQWMsRUFBRTVSO2NBQUssQ0FBRTtjQUNoQ0MsUUFBUTtjQUNScU0sTUFBTTtjQUNOOUY7WUFBSyxDQUNMLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDc00sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzlNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNOEosV0FBVyxHQUFHQSxDQUFBLEtBQU1tQixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO1lBQ2xELE1BQU0ySyxjQUFjLEdBQUdBLENBQUNwUixPQUFPLEVBQUU0TSxhQUFjLEtBQUk7Y0FDbEQsTUFBTXlFLFlBQVksR0FBR3pFLGFBQWEsSUFBSTlCLEtBQUssQ0FBQzFOLEtBQUssQ0FBQ3dQLGFBQWE7Y0FDL0QsT0FBTzVNLE9BQU8sQ0FBQzZQLEdBQUcsQ0FBQyxDQUFDeUIsTUFBTSxFQUFFdkcsS0FBSyxNQUFNO2dCQUFFM04sS0FBSyxFQUFFa1UsTUFBTTtnQkFBRWpDLE9BQU8sRUFBRXRFLEtBQUssS0FBS3NHO2NBQVksQ0FBRSxDQUFDLENBQUM7WUFDNUYsQ0FBQztZQUNELE1BQU0vSCxJQUFJLEdBQUd3QixLQUFLLENBQUMxTixLQUFLLEVBQUU0QyxPQUFPLEdBQUdvUixjQUFjLENBQUN0RyxLQUFLLENBQUMxTixLQUFLLENBQUM0QyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzVFLE1BQU0sQ0FBQzRPLE9BQU8sRUFBRTJDLFVBQVUsQ0FBQyxHQUFHM1gsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUM2TixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU07Y0FBRWlHO1lBQVUsQ0FBRSxHQUFHLElBQUF0QixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBRTlDLE1BQU0xUixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4Qm1PLEtBQUssQ0FBQzJFLFFBQVEsQ0FBQztnQkFDZDdDLGFBQWEsRUFBRTlCLEtBQUssQ0FBQzFOLEtBQUssQ0FBQ3dQLGFBQWE7Z0JBQ3hDRixRQUFRLEVBQUUvUCxLQUFLLENBQUMwRSxNQUFNLENBQUNqRSxLQUFLO2dCQUM1QjRDLE9BQU8sRUFBRTRPLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQzlDLElBQUksSUFBSUEsSUFBSSxDQUFDM1AsS0FBSztlQUN2QyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1vVSxTQUFTLEdBQUdBLENBQUM7Y0FBRTNVLGFBQWEsRUFBRTtnQkFBRU8sS0FBSyxFQUFFd1I7Y0FBTztZQUFFLENBQUUsS0FBSTtjQUMzRCxNQUFNNkMsa0JBQWtCLEdBQUc3QyxPQUFPLENBQUM4QyxTQUFTLENBQUNDLE1BQU0sSUFBSUEsTUFBTSxDQUFDdEMsT0FBTyxDQUFDO2NBQ3RFLE1BQU16QyxhQUFhLEdBQUc2RSxrQkFBa0IsS0FBSyxDQUFDLENBQUMsR0FBR3pOLFNBQVMsR0FBR3lOLGtCQUFrQjtjQUNoRixNQUFNRyxRQUFRLEdBQUc7Z0JBQUVsRixRQUFRLEVBQUV0UCxLQUFLO2dCQUFFNEMsT0FBTyxFQUFFNE8sT0FBTyxDQUFDaUIsR0FBRyxDQUFDOUMsSUFBSSxJQUFJQSxJQUFJLENBQUMzUCxLQUFLLENBQUM7Z0JBQUV3UDtjQUFhLENBQUU7Y0FFN0Y5QixLQUFLLENBQUMyRSxRQUFRLENBQUNtQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU14VSxLQUFLLEdBQUcwTixLQUFLLENBQUMxTixLQUFLLEVBQUVzUCxRQUFRLElBQUksRUFBRTtZQUN6QyxNQUFNZ0QsVUFBVSxHQUFHL1MsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkIsTUFBTWtHLEtBQUssR0FBRzJLLFVBQVUsQ0FBQ3pFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO2NBQ3JDN1EsUUFBUSxDQUFDd0IsS0FBSyxDQUFDeUYsR0FBRyxDQUFDO2dCQUFFcUwsU0FBUyxFQUFFNUg7Y0FBSyxDQUFFLENBQUM7WUFDekMsQ0FBQztZQUNELE1BQU0sQ0FBQzlELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQsTUFBTW9XLGVBQWUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDbEMsTUFBTUMsT0FBTyxHQUFHLElBQUlYLEtBQUEsQ0FBQVksY0FBYyxFQUFFO2NBQ3BDeE0sV0FBVyxFQUFFO2NBQ2JpRSxVQUFVLENBQUMsTUFBSztnQkFDZnNJLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFO2NBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDUixPQUFPRixPQUFPO1lBQ2YsQ0FBQztZQUNELE1BQU1HLGlCQUFpQixHQUFHLE1BQUFBLENBQU87Y0FBRTVJO1lBQUssQ0FBRSxLQUFJO2NBQzdDLE1BQU1xRCxRQUFRLEdBQUcsTUFBTXhTLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ21XLGVBQWUsQ0FBQztnQkFBRXhJLEtBQUs7Z0JBQUVxRCxRQUFRLEVBQUV0UCxLQUFLO2dCQUFFMk4sS0FBSyxFQUFFRCxLQUFLLENBQUNDO2NBQUssQ0FBRSxDQUFDO2NBRXJHaEssV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQmdILFVBQVUsQ0FBQ3lCLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjtnQkFDQStILFVBQVUsQ0FBQ0gsY0FBYyxDQUFDMUUsUUFBUSxDQUFDMU0sT0FBTyxFQUFFME0sUUFBUSxDQUFDRSxhQUFhLENBQUMsQ0FBQztnQkFFcEU3TCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTTtjQUFFcVAsS0FBSztjQUFFQyxPQUFPO2NBQUV6SztZQUFZLENBQUUsR0FBR25GLEtBQUssQ0FBQ2tGLEtBQUs7WUFFcEQsT0FDQy9MLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFrQyxHQUNwRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBSXpEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUFFdVEsS0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxFLElBQVEsRUFDbkRuUixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFzUSxLQUFLO2NBQ0w3SCxXQUFXLEVBQUV2SSxLQUFLLENBQUN1UyxTQUFTLENBQUNoSyxXQUFXO2NBQ3hDeEcsSUFBSSxFQUFDLFVBQVU7Y0FDZm9CLEtBQUssRUFBRUEsS0FBSyxJQUFJLEVBQUU7Y0FDbEJWLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnlTLFNBQVMsRUFBRUE7WUFBUyxFQUNuQixFQUNGdlYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWUsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUF1UCxpQkFBaUI7Y0FDakIvVixJQUFJLEVBQUMsU0FBUztjQUNkNUIsU0FBUyxFQUFDLFFBQVE7Y0FDbEJtRCxRQUFRLEVBQUUsQ0FBQ04sS0FBSyxJQUFJQSxLQUFLLEtBQUssRUFBRTtjQUNoQzJCLE9BQU8sRUFBRThTLGVBQWU7Y0FDeEJsWCxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQzBTO1lBQWUsRUFDbkMsRUFDRmpZLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXVOLFVBQVU7Y0FBQ3BNLElBQUksRUFBQyxRQUFRO2NBQUM1QixTQUFTLEVBQUMsUUFBUTtjQUFDd0UsT0FBTyxFQUFFMlEsVUFBVTtjQUFFL1UsS0FBSyxFQUFFVixLQUFLLENBQUNrRixPQUFPLENBQUM4QztZQUFNLEVBQUksQ0FDeEYsQ0FDTCxFQUNOckksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZXLFFBQUEsQ0FBQXZDLGtCQUFrQjtjQUNsQjdOLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnBELFFBQVEsRUFBRSxDQUFDb04sS0FBSyxDQUFDMU4sS0FBSztjQUN0Qm1DLElBQUksRUFBRXFQLE9BQU8sRUFBRXpNLE1BQU07Y0FDckJ5TSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJsUyxRQUFRLEVBQUU4VTtZQUFTLEVBQ2xCLEVBQ0Y1WCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkssV0FBQSxDQUFBMkMsZUFBZTtjQUNmdUksS0FBSyxFQUFFQSxLQUFLO2NBQ1pDLE9BQU8sRUFBRUEsT0FBTztjQUNoQjNLLFNBQVMsRUFBRUUsWUFBWTtjQUN2QmxGLFdBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFXO2NBQzlCbkIsSUFBSSxFQUFFa0gsU0FBUztjQUNmVixPQUFPLEVBQUVSLFdBQVc7Y0FDcEI1SyxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tZLFlBQVksQ0FBQ3hYLEtBQUs7Y0FDL0I0VixZQUFZLEVBQUV0VyxLQUFLLENBQUNrWSxZQUFZLENBQUNuVSxXQUFXO2NBQzVDZ0YsVUFBVSxFQUFFaVA7WUFBaUIsRUFDNUIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNIQSxJQUFBclksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVZLFlBQUEsR0FBQXZZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVd1ksb0JBQW9CQSxDQUFDO1lBQUVwQyxPQUFPO1lBQUVxQztVQUFZLENBQUU7WUFDN0QsTUFBTTtjQUNMN1IsS0FBSztjQUNMeEcsS0FBSyxFQUFFO2dCQUFFNFIsY0FBYyxFQUFFNVIsS0FBSztnQkFBRWtTO2NBQU0sQ0FBRTtjQUN4Q2pTO1lBQVEsQ0FDUixHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTJTLE1BQU0sR0FBR0MsSUFBSSxJQUFJQSxJQUFJLENBQUNqUyxJQUFJLEtBQUssZ0JBQWdCO1lBQ3JELE1BQU0rVSxHQUFHLEdBQUc5QyxJQUFJLEtBQUs7Y0FBRTNQLEtBQUssRUFBRTJQLElBQUksQ0FBQ3dGLEVBQUU7Y0FBRXJULEtBQUssRUFBRTZOLElBQUksQ0FBQ3BTO1lBQUssQ0FBRSxDQUFDO1lBRTNELE1BQU1xRixPQUFPLEdBQUdTLEtBQUssQ0FBQ2tGLEtBQUssQ0FBQ25MLFVBQVUsQ0FBQ29LLEtBQUssQ0FBQ2tJLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUMrQyxHQUFHLENBQUNBLEdBQUcsQ0FBQztZQUNwRSxJQUFJa0IsWUFBWSxHQUFHO2NBQUUzVCxLQUFLLEVBQUUsRUFBRTtjQUFFOEIsS0FBSyxFQUFFakYsS0FBSyxDQUFDZ1csT0FBTyxDQUFDdUM7WUFBVyxDQUFFO1lBRWxFLE1BQU05VixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QnpDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQztnQkFBRThPLE9BQU8sRUFBRXRULEtBQUssQ0FBQzBFLE1BQU0sQ0FBQ2pFO2NBQUssQ0FBRSxDQUFDO2NBQ25ELElBQUlULEtBQUssQ0FBQzBFLE1BQU0sQ0FBQ2pFLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU02UyxPQUFPLEdBQUd4UCxLQUFLLENBQUNrRixLQUFLLENBQUNuTCxVQUFVLENBQUNpWSxHQUFHLENBQUM5VixLQUFLLENBQUMwRSxNQUFNLENBQUNqRSxLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQzZTLE9BQU8sQ0FBQ3BQLFNBQVMsQ0FBQ08sT0FBTyxFQUFFO2tCQUMvQmtSLFlBQVksQ0FBQyxDQUFDbkcsTUFBTSxDQUFDdUcsbUJBQW1CLENBQUMsQ0FBQztrQkFFMUM7OztjQUdGSixZQUFZLENBQUMsRUFBRSxDQUFDO2NBQ2hCcFksUUFBUSxDQUFDd0IsS0FBSyxDQUFDeUYsR0FBRyxDQUFDO2dCQUFFOE8sT0FBTyxFQUFFdFQsS0FBSyxDQUFDMEUsTUFBTSxDQUFDakU7Y0FBSyxDQUFFLENBQUM7WUFDcEQsQ0FBQztZQUVELE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxnQkFBUUosS0FBSyxDQUFDZ1csT0FBTyxDQUFDL1EsS0FBSyxDQUFTLEVBQ3BDdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLFlBQUEsQ0FBQU8sV0FBVztjQUFDdlYsS0FBSyxFQUFFNlMsT0FBTztjQUFFalEsT0FBTyxFQUFFLENBQUMrUSxZQUFZLEVBQUUsR0FBRy9RLE9BQU8sQ0FBQztjQUFFdEQsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXpCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBZ1AsTUFBQSxHQUFBaFAsT0FBQTtVQUNBLElBQUErWSxNQUFBLEdBQUEvWSxPQUFBO1VBQ0EsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFFTSxTQUFVZ1osc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRTVZLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNVyxVQUFVLEdBQUdmLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTW1CLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVHLGFBQWEsRUFBRTtnQkFBRWIsSUFBSTtnQkFBRW9CO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RsRCxRQUFRLENBQUNpSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ25GLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNeU0sTUFBTSxHQUFHQSxDQUFBLEtBQU0zUCxRQUFRLENBQUN3SCxJQUFJLEVBQUU7WUFDcEMsTUFBTWxDLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCdEYsUUFBUSxDQUFDd0IsS0FBSyxDQUFDOEYsTUFBTSxFQUFFO2NBQ3ZCaEcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTTBRLFVBQVUsR0FBR0EsQ0FBQSxLQUFNMVEsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QyxNQUFNc1gsU0FBUyxHQUFHNVksUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsSUFBSUosSUFBSSxLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUdBLElBQUksS0FBSyxPQUFPLEdBQUcsT0FBTyxHQUFHQSxJQUFJO1lBQ3pHLE1BQU13WCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQnZYLE9BQU8sQ0FBQ3RCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHSixJQUFJLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBR0EsSUFBSSxDQUFDO1lBQzlFLENBQUM7WUFDRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQUVxWCxhQUFhLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRyxJQUFBOVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFNlksYUFBYSxFQUFFLG9CQUFvQixDQUFDO1lBRTFELE9BQ0M3WCxLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBcUIsR0FDcENXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUNsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBdUksUUFBUTtjQUNScEQsS0FBSyxFQUFFakYsS0FBSyxDQUFDTyxVQUFVLENBQUN3RCxXQUFXLENBQUNrQixLQUFLO2NBQ3pDdkIsT0FBTyxFQUFDLFVBQVU7Y0FDbEIzQixJQUFJLEVBQUMsYUFBYTtjQUNsQlUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCbU4sTUFBTSxFQUFFQSxNQUFNO2NBQ2RySCxXQUFXLEVBQUV2SSxLQUFLLENBQUNPLFVBQVUsQ0FBQ3dELFdBQVcsQ0FBQ3dFLFdBQVc7Y0FDckRwRixLQUFLLEVBQUVsRCxRQUFRLENBQUM4RDtZQUFXLEVBQzFCLENBQ0csQ0FDRCxFQUVOOUMsS0FBQSxDQUFBYixhQUFBLENBQUNtRCxXQUFBLENBQUF3VixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUgsU0FBUztjQUNwQjlTLE9BQU8sRUFBRTtnQkFDUnRFLEtBQUssRUFBRVIsS0FBQSxDQUFBYixhQUFBLENBQUMrQixNQUFBLENBQUE4VyxtQkFBbUI7a0JBQUMxWCxPQUFPLEVBQUVBO2dCQUFPLEVBQUk7Z0JBQ2hEaUgsSUFBSSxFQUFFdkgsS0FBQSxDQUFBYixhQUFBLENBQUN1WSxNQUFBLENBQUEzRyx3QkFBd0I7a0JBQUN6TSxRQUFRLEVBQUVBLFFBQVE7a0JBQUUwTSxVQUFVLEVBQUVBO2dCQUFVO2VBQzFFO2NBQ0QxSixXQUFXLEVBQUV0SCxLQUFBLENBQUFiLGFBQUEsQ0FBQ3dPLE1BQUEsQ0FBQThDLHdCQUF3QjtnQkFBQzNQLElBQUksRUFBRTlCLFFBQVEsQ0FBQ1ksSUFBSTtnQkFBRXdCLFVBQVUsRUFBRUE7Y0FBVTtZQUFJLEVBQ3JGLENBQ0csQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUF0QixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBUU8sTUFBTXNaLGNBQWMsR0FBR0EsQ0FBQztZQUFFcEcsSUFBSSxFQUFFNEUsTUFBTTtZQUFFL0UsYUFBYTtZQUFFN0I7VUFBSyxDQUFVLEtBQUk7WUFDaEYsTUFBTTVPLElBQUksR0FBRzRPLEtBQUssS0FBSzZCLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTztZQUN4RCxNQUFNNEMsR0FBRyxHQUFHLHVDQUF1Q3JULElBQUksS0FBSyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsa0JBQWtCLEVBQUU7WUFDaEgsT0FDQ3ZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBRWlWO1lBQUcsR0FDakI1VixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBZ0IsR0FBRTRCLElBQUksS0FBSyxPQUFPLElBQUl2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUFvWSxJQUFJO2NBQUNqWCxJQUFJLEVBQUVBLElBQUk7Y0FBRTVCLFNBQVMsRUFBQztZQUFTLEVBQUcsQ0FBUSxFQUN0R1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQW9CLEdBQUVvWCxNQUFNLENBQVEsQ0FDaEQ7VUFFUCxDQUFDO1VBQUNsTixPQUFBLENBQUEwTyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJGLElBQUF2WixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUE4SSxHQUFBLEdBQUE5SSxPQUFBO1VBR0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBYU0sU0FBVWdVLFdBQVdBLENBQUM7WUFBRTNQLFFBQVE7WUFBRVIsUUFBUTtZQUFFa08sZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDekYsTUFBTTtjQUNMM1IsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDZ0wsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHeEwsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1vRSxLQUFLLEdBQUc7Y0FBRW5DLFFBQVEsRUFBRSxDQUFDeEQsUUFBUSxDQUFDbVosUUFBUSxJQUFJM1Y7WUFBUSxDQUFFO1lBQzFELE1BQU00VixVQUFVLEdBQUdBLENBQUEsS0FBTWxPLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU3RCxNQUFNbkMsVUFBVSxHQUFHcUcsS0FBSyxJQUFHO2NBQzFCLE9BQU9uUCxRQUFRLENBQUN3QixLQUFLLENBQUMwSCxRQUFRLENBQUNpRyxLQUFLLEVBQUU7Z0JBQUUsR0FBR3VDO2NBQWUsQ0FBRSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDaFMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUFRLFFBQVE7Y0FBQSxHQUFLdEQsS0FBSztjQUFFZCxPQUFPLEVBQUV1VSxVQUFVO2NBQUUzVixPQUFPLEVBQUMsTUFBTTtjQUFDNFYsTUFBTSxFQUFFO1lBQUssR0FDcEU3UyxXQUFXLENBQUN2QixPQUFPLENBQUNpRSxRQUFRLENBQ25CLENBQ04sQ0FDRSxFQUNSbEYsUUFBUSxFQUNSaUgsZUFBZSxJQUNmdkwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZLLFdBQUEsQ0FBQTJDLGVBQWU7Y0FDZnRJLElBQUksRUFBRTRGLGVBQWU7Y0FDckJpTCxLQUFLLEVBQUUzUCxLQUFLLENBQUNrRixLQUFLLENBQUN5SyxLQUFLO2NBQ3hCMUssU0FBUyxFQUFFakYsS0FBSyxDQUFDa0YsS0FBSyxDQUFDQyxZQUFZO2NBQ25DRyxPQUFPLEVBQUV1TixVQUFVO2NBQ25CM1ksS0FBSyxFQUFFVixLQUFLLENBQUN1WixNQUFNLENBQUM3WSxLQUFLO2NBQ3pCNFYsWUFBWSxFQUFFdFcsS0FBSyxDQUFDdVosTUFBTSxDQUFDeFYsV0FBVztjQUN0Q2dGLFVBQVUsRUFBRUE7WUFBVSxFQUV2QixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUFwSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUE0WixZQUFBLEdBQUE1WixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNkssS0FBQSxHQUFBN0ssT0FBQTtVQUVNLFNBQVVxWixtQkFBbUJBLENBQUM7WUFBRTFYO1VBQU8sQ0FBRTtZQUM5QyxNQUFNO2NBQUUrSyxNQUFNO2NBQUVyTSxRQUFRO2NBQUV3WixRQUFRO2NBQUVqVCxLQUFLO2NBQUV4RztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3pFLE1BQU13WixXQUFXLEdBQUdsVCxLQUFLLENBQUNDLFdBQVcsQ0FBQ3ZCLE9BQU87WUFDN0MsTUFBTSxDQUFDeVUsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHamEsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3FZLFdBQVcsRUFBRUMsVUFBVSxDQUFDLEdBQUduYSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDdVksS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3JhLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDOEssTUFBTSxDQUFDN0ssS0FBSyxDQUFDOFEsU0FBUyxDQUFDO1lBQ2hFLE1BQU0wSCxhQUFhLEdBQUdBLENBQUEsS0FBTUgsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUNwRCxNQUFNLENBQUNLLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd4YSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTRZLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU0zWSxLQUFLLEdBQUd4QixRQUFRLENBQUN3QixLQUFLLENBQUM0WSxPQUFPLEVBQUU7Y0FDdENaLFFBQVEsQ0FBQztnQkFBRWhZO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFBVCxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQUUyWSxRQUFRLEVBQUUsaUJBQWlCLENBQUM7WUFFeEQsTUFBTTlPLFdBQVcsR0FBR0EsQ0FBQSxLQUFNc08sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU0vVCxLQUFLLEdBQUc7Y0FBRWQsT0FBTyxFQUFFd0csV0FBVztjQUFFN0gsUUFBUSxFQUFFeEQsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLElBQUl6QixRQUFRLENBQUMyRyxTQUFTLENBQUNsRjtZQUFLLENBQUU7WUFDbEcsTUFBTTRZLE1BQU0sR0FBRzVYLEtBQUssSUFBSW5CLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDdkMsTUFBTWdaLFNBQVMsR0FBRzdYLEtBQUssSUFBSW9YLFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFFbkQsTUFBTVcsVUFBVSxHQUFHLENBQUNYLFdBQVcsR0FBR0gsV0FBVyxDQUFDSyxLQUFLLEdBQUdMLFdBQVcsQ0FBQ2pTLElBQUk7WUFDdEUsTUFBTWdULGNBQWMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakNOLGFBQWEsQ0FBQyxJQUFJLENBQUM7Y0FDbkIsTUFBTWxhLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQztnQkFBRXFMLFNBQVMsRUFBRXdIO2NBQUssQ0FBRSxDQUFDO2NBQzlDLE1BQU05WixRQUFRLENBQUN3SCxJQUFJLEVBQUU7Y0FDckIwUyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3BCRixhQUFhLEVBQUU7WUFDaEIsQ0FBQztZQUNELE1BQU1TLFlBQVksR0FBRztjQUNwQjVWLE9BQU8sRUFBRStVLFdBQVcsR0FBR1ksY0FBYyxHQUFHRixTQUFTO2NBQ2pEOVcsUUFBUSxFQUFHeEQsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLElBQUl6QixRQUFRLENBQUMyRyxTQUFTLENBQUNsRixLQUFLLElBQUt3WTthQUNoRTtZQUVELE9BQ0N2YSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDWCxNQUFNLENBQUM2WixjQUFjLENBQU0sRUFDNUNoYixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDN0MsQ0FBQ3VaLFdBQVcsSUFDWmxhLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFDb0IsT0FBTyxFQUFFd1YsTUFBTTtjQUFFcFksSUFBSSxFQUFDO1lBQVEsR0FDbkR3WCxXQUFXLENBQUMzUixJQUFJLENBRWxCLEVBQ0RwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLZ1gsWUFBWTtjQUFFeFksSUFBSSxFQUFDO1lBQU0sR0FDbERzWSxVQUFVLENBQ0gsRUFDUixDQUFDWCxXQUFXLElBQ1psYSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLa0MsS0FBSztjQUFFMUQsSUFBSSxFQUFDO1lBQVEsR0FDN0N3WCxXQUFXLENBQUMxUixNQUFNLENBRXBCLENBQ0ksQ0FDRSxFQUNUckksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FLLEtBQUEsQ0FBQW1RLGtCQUFrQjtjQUFDYixLQUFLLEVBQUVBLEtBQUs7Y0FBRUMsUUFBUSxFQUFFQSxRQUFRO2NBQUVhLFVBQVUsRUFBRWhCLFdBQVc7Y0FBRWlCLE1BQU0sRUFBRWI7WUFBYSxFQUFJLENBQ25HLEVBQ050YSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1osWUFBQSxDQUFBM0osa0JBQWtCO2NBQUN2SyxJQUFJLEVBQUVxVSxlQUFlO2NBQUU3TixPQUFPLEVBQUVSO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFQSxJQUFBM0wsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZLLEtBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBbWIsYUFBQSxHQUFBbmIsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFvYixpQkFBQSxHQUFBcGIsT0FBQTtVQUVNLFNBQVVnYixrQkFBa0JBLENBQUM7WUFBRWIsS0FBSztZQUFFQyxRQUFRO1lBQUVhLFVBQVU7WUFBRUM7VUFBTSxDQUFFO1lBQ3pFLE1BQU07Y0FBRXhPLE1BQU07Y0FBRXJNLFFBQVE7Y0FBRXdaLFFBQVE7Y0FBRXpaLEtBQUs7Y0FBRXdHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXpFLE1BQU1xYSxTQUFTLEdBQUdqTyxNQUFNLElBQUc7Y0FDMUIwTixRQUFRLENBQUMxTixNQUFNLENBQUM7Y0FDaEIsTUFBTTdLLEtBQUssR0FBRztnQkFBRSxHQUFHNkssTUFBTSxDQUFDN0s7Y0FBSyxDQUFFO2NBQ2pDQSxLQUFLLENBQUM4USxTQUFTLEdBQUcsQ0FBQyxHQUFHd0gsS0FBSyxDQUFDO2NBRTVCOVosUUFBUSxDQUFDd0IsS0FBSyxDQUFDeUYsR0FBRyxDQUFDekYsS0FBSyxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJb1osVUFBVSxFQUFFO2NBQ2YsT0FDQ2xiLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyYSxhQUFBLENBQUFFLE9BQU8sQ0FBQ0MsS0FBSztnQkFBQzVPLE1BQU0sRUFBRXlOLEtBQUs7Z0JBQUVRLFNBQVMsRUFBRUEsU0FBUztnQkFBRWphLFNBQVMsRUFBQztjQUFlLEdBQzNFeVosS0FBSyxDQUFDbkUsR0FBRyxDQUFDbkQsUUFBUSxJQUFHO2dCQUNyQixPQUNDOVMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJhLGFBQUEsQ0FBQUUsT0FBTyxDQUFDbEcsSUFBSTtrQkFBQzdILEdBQUcsRUFBRXVGLFFBQVEsQ0FBQ0EsUUFBUTtrQkFBRXRQLEtBQUssRUFBRXNQO2dCQUFRLEdBQ3BEOVMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRhLGlCQUFBLENBQUFHLGdCQUFnQjtrQkFBQzlMLElBQUksRUFBRW9ELFFBQVE7a0JBQUU1TyxFQUFFLEVBQUMsS0FBSztrQkFBQ2tULFNBQVM7Z0JBQUEsRUFBRyxDQUN6QztjQUVqQixDQUFDLENBQUMsQ0FDYSxDQUNkOztZQUlMLE9BQU9wWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUssS0FBQSxDQUFBTSxJQUFJO2NBQUN6SyxTQUFTLEVBQUMsZUFBZTtjQUFDcUssS0FBSyxFQUFFMkIsTUFBTSxDQUFDN0ssS0FBSyxDQUFDOFEsU0FBUztjQUFFdkgsT0FBTyxFQUFFZ1EsaUJBQUEsQ0FBQUc7WUFBZ0IsRUFBSTtVQUNwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQXBhLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBNkssS0FBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF3YixZQUFBLEdBQUF4YixPQUFBO1VBQ0EsSUFBQXFYLFFBQUEsR0FBQXJYLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQU9NLFNBQVV1YixnQkFBZ0JBLENBQUM7WUFBRTlMLElBQUk7WUFBRXhMLEVBQUUsR0FBRyxJQUFJO1lBQUVrVCxTQUFTLEdBQUc7VUFBSyxDQUFVO1lBQzlFLE1BQU0sQ0FBQ3NFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUczYixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTtjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV0QyxNQUFNeUUsT0FBTyxHQUFHZCxFQUFFO1lBQ2xCLE1BQU0wWCxRQUFRLEdBQUdBLENBQUEsS0FBTSxDQUFDRixVQUFVO1lBRWxDLE9BQ0MxYixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsT0FBTztjQUFDckUsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ2IsWUFBQSxDQUFBSSxvQkFBb0I7Y0FBQ0QsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZDNWIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2diLFlBQUEsQ0FBQUssaUJBQWlCLFFBQ2pCOWIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXdWLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFakMsU0FBUztjQUNwQjJFLE9BQU87Y0FDUDNWLE9BQU8sRUFBRTtnQkFDUjRWLElBQUksRUFBRWhjLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQW9ZLElBQUk7a0JBQUM3WSxTQUFTLEVBQUMsZ0JBQWdCO2tCQUFDNEIsSUFBSSxFQUFDO2dCQUFNLEVBQUc7Z0JBQ3JEMFosS0FBSyxFQUFFamMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBb1ksSUFBSTtrQkFBQzdZLFNBQVMsRUFBQyxnQkFBZ0I7a0JBQUM0QixJQUFJLEVBQUM7Z0JBQWM7O1lBQzNELEVBQ0EsRUFFRnZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFvQixHQUFFK08sSUFBSSxDQUFDb0QsUUFBUSxDQUFRLENBQ3ZELENBQ2MsRUFDcEI5UyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ2IsWUFBQSxDQUFBUyxrQkFBa0IsUUFDbEJsYyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBd1Ysb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDM0osSUFBSSxDQUFDdEosT0FBTyxFQUFFbUMsTUFBTTtjQUNqQ25DLE9BQU8sRUFBRTtnQkFDUjRWLElBQUksRUFDSGhjLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxSyxLQUFBLENBQUFNLElBQUk7a0JBQ0pKLEtBQUssRUFBRTBFLElBQUksQ0FBQ3RKLE9BQU87a0JBQ25CdEUsS0FBSyxFQUFFO29CQUFFa1IsYUFBYSxFQUFFdEQsSUFBSSxDQUFDc0Q7a0JBQWEsQ0FBRTtrQkFDNUMzSCxPQUFPLEVBQUVpTSxRQUFBLENBQUFpQztnQkFBYyxFQUV4QjtnQkFDRDBDLEtBQUssRUFBRWpjLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2tCQUFLRSxTQUFTLEVBQUM7Z0JBQXNCLEdBQUVOLEtBQUssQ0FBQzRSLGNBQWMsQ0FBQ2tLLFlBQVk7O1lBQy9FLEVBQ0EsQ0FDa0IsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUFoYyxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVtYyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXpQLE1BQU07Y0FBRXRNLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4RCxPQUNDZSxLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYSxHQUMzQlcsS0FBQSxDQUFBYixhQUFBLGdCQUFRSixLQUFLLENBQUN5QixLQUFLLENBQUNvSyxTQUFTLENBQUM1RyxLQUFLLENBQVMsRUFDNUNoRSxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBdUksUUFBUTtjQUNSdEcsSUFBSSxFQUFDLFdBQVc7Y0FDaEJ3RyxXQUFXLEVBQUV2SSxLQUFLLENBQUN5QixLQUFLLENBQUNvSyxTQUFTLENBQUN0RCxXQUFXO2NBQzlDcEYsS0FBSyxFQUFFbUosTUFBTSxDQUFDN0ssS0FBSyxFQUFFb0s7WUFBUyxFQUM3QixDQUNHLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQS9MLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVvYyxnQkFBZ0JBLENBQUM7WUFBRWphO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUV1SyxNQUFNO2NBQUV0TSxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEQsTUFBTXVDLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVHLGFBQWEsRUFBRTtnQkFBRWIsSUFBSTtnQkFBRW9CO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RsRCxRQUFRLENBQUNpSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ25GLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNeU0sTUFBTSxHQUFHQSxDQUFBLEtBQU0zUCxRQUFRLENBQUN3SCxJQUFJLEVBQUU7WUFFcEMsTUFBTXRFLEtBQUssR0FBR2xELFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLElBQUkvQixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDd0csV0FBVztZQUVuRSxPQUNDNUksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0JYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU82YixPQUFPLEVBQUM7WUFBRSxHQUFFamMsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQ2tELEtBQUssQ0FBUyxFQUNuRHRGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXVJLFFBQVE7Y0FBQzVGLFFBQVEsRUFBRUEsUUFBUTtjQUFFbU4sTUFBTSxFQUFFQSxNQUFNO2NBQUUvTyxJQUFJLEVBQUMsVUFBVTtjQUFDa0IsSUFBSSxFQUFFQSxJQUFJO2NBQUVvQixLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUNyRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBeEQsTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVXNjLFdBQVdBLENBQUM7WUFBRXBKO1VBQUksQ0FBNkM7WUFDOUUsT0FDQ25ULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQVksR0FBRXdTLElBQUksQ0FBQy9RLElBQUksRSxLQUFZLEUsS0FBQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU8wUyxJQUFJLENBQUMzUCxLQUFLLENBQVEsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBeEQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZLLEtBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBdWMsWUFBQSxHQUFBdmMsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBd2MsWUFBQSxHQUFBeGMsT0FBQTtVQUNNLFNBQVV5YyxxQkFBcUJBLENBQUM7WUFBRXRhLElBQUk7WUFBRXNOO1VBQUksQ0FBRTtZQUNuRCxNQUFNO2NBQ0xwUCxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ6QjtZQUFLLENBQ0wsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQzRhLE1BQU0sRUFBRXdCLFNBQVMsQ0FBQyxHQUFHM2MsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0rWixRQUFRLEdBQUdBLENBQUEsS0FBTWUsU0FBUyxDQUFDLENBQUN4QixNQUFNLENBQUM7WUFDekMsTUFBTW5RLEtBQUssR0FBR2xKLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUU2VCxHQUFHLENBQUMsQ0FBQzlDLElBQUksRUFBRWhDLEtBQUssS0FBSTtjQUM5QyxNQUFNLENBQUN5TCxTQUFTLEVBQUVwWixLQUFLLENBQUMsR0FBR3lILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDcEosS0FBSyxDQUFDK2EsU0FBUyxDQUFDemEsSUFBSSxDQUFDLENBQUMwYSxNQUFNLENBQUM7Y0FDcEUsT0FBTztnQkFBRTFhLElBQUksRUFBRStRLElBQUksQ0FBQ3lKLFNBQVMsQ0FBQztnQkFBRXBaLEtBQUssRUFBRTJQLElBQUksQ0FBQzNQLEtBQUs7Y0FBQyxDQUFFO1lBQ3JELENBQUMsQ0FBQztZQUVGLE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBd0QsR0FDekVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQUNrRCxLQUFLLENBQU0sRUFDbEN0RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUFvWSxJQUFJO2NBQUNqWCxJQUFJLEVBQUMsTUFBTTtjQUFDNUIsU0FBUyxFQUFDLGdCQUFnQjtjQUFDd0UsT0FBTyxFQUFFeVc7WUFBUSxFQUFJLENBQzFELEVBQ1Q1YixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBd1Ysb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU4QixNQUFNO2NBQ2pCWSxPQUFPO2NBQ1AzVixPQUFPLEVBQUU7Z0JBQ1I0VixJQUFJLEVBQUVoYyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ2MsWUFBQSxDQUFBTSxlQUFlO2tCQUFDblgsUUFBUSxFQUFFZ1csUUFBUTtrQkFBRXhaLElBQUksRUFBRUEsSUFBSTtrQkFBRStRLElBQUksRUFBRXJSLEtBQUssQ0FBQ00sSUFBSTtnQkFBQyxFQUFJO2dCQUM1RTZaLEtBQUssRUFBRWpjLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxSyxLQUFBLENBQUFNLElBQUk7a0JBQUN6SyxTQUFTLEVBQUMsc0JBQXNCO2tCQUFDcUssS0FBSyxFQUFFQSxLQUFLO2tCQUFFSyxPQUFPLEVBQUVtUixZQUFBLENBQUFEO2dCQUFXOztZQUNoRixFQUNBLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTNZLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFrQk0sU0FBVStjLFVBQVVBLENBQUM7WUFBRTVhLElBQUk7WUFBRU0sVUFBVTtZQUFFb0IsUUFBUTtZQUFFa08sZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDaEcsTUFBTTtjQUNMM1IsS0FBSztjQUNMd0csS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNMkgsUUFBUSxHQUFHQSxDQUFBLEtBQU14RixVQUFVLENBQUMsUUFBUSxDQUFDO1lBRTNDLE9BQ0MxQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLEVBQzVCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRStDO1lBQVEsR0FDL0NwQixXQUFXLENBQUN2QixPQUFPLENBQUM2QixNQUFNLENBQ25CLENBQ0osQ0FDRSxFQUNUcEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBOEIsR0FBRU4sS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQyxXQUFXLENBQVEsQ0FDckYsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBcEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBYU0sU0FBVWdVLFdBQVdBLENBQUM7WUFBRTNQLFFBQVE7WUFBRVIsUUFBUTtZQUFFa08sZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDekYsTUFBTTtjQUFFM1I7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV0QyxPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLENBQ3BCLEVBQ1J1RCxRQUFRLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQXRFLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxUSxRQUFBLEdBQUFyUSxPQUFBO1VBQ0EsSUFBQTZVLE9BQUEsR0FBQTdVLE9BQUE7VUFDQSxJQUFBZ2QsUUFBQSxHQUFBaGQsT0FBQTtVQU9NLFNBQVU4YyxlQUFlQSxDQUFDO1lBQUVuWCxRQUFRO1lBQUV4RCxJQUFJO1lBQUUrUTtVQUFJLENBQXlCO1lBQzlFLE1BQU07Y0FDTDdTLFFBQVEsRUFBRTtnQkFBRXdCO2NBQUs7WUFBRSxDQUNuQixHQUFHLElBQUE1QixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU07Y0FBRWdhLFVBQVU7Y0FBRWhWO1lBQU8sQ0FBRSxHQUFHLElBQUEwWCxRQUFBLENBQUFDLE9BQU8sRUFBQ3RYLFFBQVEsQ0FBQztZQUNqRCxPQUNDNUYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZQLFFBQUEsQ0FBQVcsZ0JBQWdCO2NBQUM3TyxJQUFJLEVBQUVBLElBQUk7Y0FBRXNOLElBQUksRUFBRTVOLEtBQUssQ0FBQythLFNBQVMsQ0FBQ3phLElBQUk7WUFBQyxFQUFJLEVBQzdEcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FVLE9BQUEsQ0FBQXFJLGdCQUFnQjtjQUFDblYsTUFBTSxFQUFFekMsT0FBTyxDQUFDeUMsTUFBTTtjQUFFcEMsUUFBUSxFQUFFTCxPQUFPLENBQUNLLFFBQVE7Y0FBRTJVLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQzlGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUF2YSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVbWQsbUJBQW1CQSxDQUFBO1lBQ2xDLE1BQU07Y0FBRS9jO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdEMsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUN5QixLQUFLLENBQUNvSyxTQUFTLENBQUNuSyxLQUFLLENBQVEsQ0FDckM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBc2IsYUFBQSxHQUFBcGQsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsTUFBTXNRLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFclEsS0FBQSxDQUFBc1EsS0FBSztZQUNaekIsUUFBUSxFQUFFN08sS0FBQSxDQUFBdUksUUFBUTtZQUNsQmdJLEtBQUssRUFBRXZRLEtBQUEsQ0FBQXdRLEtBQUs7WUFDWkMsUUFBUSxFQUFFelEsS0FBQSxDQUFBMFEsUUFBUTtZQUNsQkMsTUFBTSxFQUFFM1EsS0FBQSxDQUFBNFE7V0FDUjtVQVlLLFNBQVV1TSxrQkFBa0JBLENBQUM7WUFBRWxiLElBQUk7WUFBRXNOLElBQUk7WUFBRXlCLEtBQUs7WUFBRXJPO1VBQVEsQ0FBc0M7WUFDckcsTUFBTTtjQUNMeEMsUUFBUSxFQUFFO2dCQUFFd0I7Y0FBSyxDQUFFO2NBQ25CeEIsUUFBUTtjQUNSRDtZQUFLLENBQ0wsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU07Y0FBRWlEO1lBQUssQ0FBRSxHQUFHLElBQUE2WixhQUFBLENBQUFFLHNCQUFzQixHQUFFO1lBQzFDLE1BQU0sQ0FBQ3hRLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdoTixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTWliLE1BQU0sR0FBRzdSLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDd0UsSUFBSSxDQUFDb04sTUFBTSxDQUFDO1lBQ3ZDLElBQUF6YixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUsTUFBTTBNLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQyxNQUFNTCxNQUFNLEdBQUc3SyxLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHTixLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFN0MsTUFBTW9iLGFBQWEsR0FBRyxFQUFFO1lBQ3hCLE1BQU1DLFVBQVUsR0FBR3BkLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDO1lBRXBDLE1BQU02TixNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQjNQLFFBQVEsQ0FBQ3dILElBQUksQ0FBQztnQkFBRWhHLEtBQUssRUFBRTtrQkFBRU0sSUFBSSxFQUFFb0I7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDMUMsQ0FBQztZQUVELE1BQU1rYSxNQUFNLEdBQUdaLE1BQU0sQ0FBQzdHLEdBQUcsQ0FBQyxDQUFDN1QsSUFBSSxFQUFFdWIsQ0FBQyxLQUFJO2NBQ3JDLElBQUl2YixJQUFJLEtBQUssYUFBYSxFQUFFLE9BQU8sSUFBSTtjQUN2QyxNQUFNcVAsS0FBSyxHQUFHbEIsVUFBVSxDQUFDYixJQUFJLENBQUNvTixNQUFNLENBQUMxYSxJQUFJLENBQUMsQ0FBQztjQUMzQyxNQUFNNkQsS0FBSyxHQUFHO2dCQUNiWCxLQUFLLEVBQUVtWSxVQUFVLENBQUNyYixJQUFJLENBQUMsQ0FBQ2tELEtBQUs7Z0JBQzdCc0QsV0FBVyxFQUFFNlUsVUFBVSxDQUFDcmIsSUFBSSxDQUFDLENBQUN3RyxXQUFXO2dCQUN6Q3hHLElBQUk7Z0JBQ0pzTixJQUFJLEVBQUV0TixJQUFJO2dCQUNWb0IsS0FBSyxFQUFFbUosTUFBTSxDQUFDd0UsS0FBSyxDQUFDLEdBQUcvTyxJQUFJLENBQUMsSUFBSTtlQUNoQztjQUVEb2IsYUFBYSxDQUFDcGIsSUFBSSxDQUFDLEdBQUcsRUFBRTtjQUV4QixPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dSLEtBQUs7Z0JBQUEsR0FDRHhMLEtBQUs7Z0JBQ1RuQyxRQUFRLEVBQUV4RCxRQUFRLENBQUM0RyxRQUFRO2dCQUMzQnBFLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJ5SyxHQUFHLEVBQUUsR0FBR25MLElBQUksSUFBSXViLENBQUMsRUFBRTtnQkFDbkJoZCxTQUFTLEVBQUMsa0JBQWtCO2dCQUM1Qm9ELE9BQU8sRUFBQyxVQUFVO2dCQUNsQmtNLE1BQU0sRUFBRUE7Y0FBTSxFQUNiO1lBRUosQ0FBQyxDQUFDO1lBRUYsT0FDQ2pRLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0VnZCxNQUFNLEVBQ1AxZCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNEMsR0FDN0RYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM0YyxhQUFBLENBQUFPLGlCQUFpQjtjQUFDamQsU0FBUyxFQUFDLFFBQVE7Y0FBQzBELE1BQU0sRUFBQyxRQUFRO2NBQUM5QixJQUFJLEVBQUMsUUFBUTtjQUFDNE8sS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDNUUsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBa00sYUFBQSxHQUFBcGQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnUCxNQUFBLEdBQUFoUCxPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVZ1IsZ0JBQWdCQSxDQUFDO1lBQUU3TyxJQUFJO1lBQUVzTixJQUFJO1lBQUVtTztVQUFRLENBQUU7WUFDeEQsTUFBTTtjQUNMdmQsUUFBUSxFQUFFO2dCQUFFd0I7Y0FBSyxDQUFFO2NBQ25CeEIsUUFBUTtjQUNSRCxLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLElBQUksQ0FBQ21QLElBQUksQ0FBQ29PLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtjQUNuQ3ZPLE9BQU8sQ0FBQ2lDLElBQUksQ0FBQyx3Q0FBd0NwUCxJQUFJLEVBQUUsQ0FBQztjQUM1RCxPQUFPLElBQUk7O1lBR1osTUFBTXVLLE1BQU0sR0FBRzdLLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUdOLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUU3QyxNQUFNcWIsVUFBVSxHQUFHcGQsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUM7WUFFcEMsTUFBTVUsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRVM7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUNyQ25CLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQztnQkFBRSxDQUFDbkYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7Y0FDNUIsSUFBSVQsS0FBSyxDQUFDWCxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QjlCLFFBQVEsQ0FBQ3dILElBQUksRUFBRTs7WUFFakIsQ0FBQztZQUVELE1BQU1tSSxNQUFNLEdBQUdsTixLQUFLLElBQUl6QyxRQUFRLENBQUN3SCxJQUFJLEVBQUU7WUFDdkM7WUFFQSxPQUNDOUgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNGMsYUFBQSxDQUFBVSxxQkFBcUI7Y0FDckJDLFFBQVE7Y0FDUnhhLEtBQUssRUFBRW1KLE1BQU07Y0FDYnZLLElBQUksRUFBRUEsSUFBSTtjQUNWNk4sTUFBTSxFQUFFQSxNQUFNO2NBQ2RuTixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJmLEtBQUssRUFBRWtOLE1BQUEsQ0FBQW1PO1lBQW1CLEdBRTFCcGQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUNFb2QsUUFBUSxHQUFHN2QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT29kLFFBQVEsRSxLQUFVLEdBQUcsSUFBSSxFQUMzQ0osVUFBVSxDQUFDblksS0FBSyxDQUNiLEVBQ0x0RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRjLGFBQUEsQ0FBQVksYUFBYTtjQUFDbGEsT0FBTyxFQUFDLE1BQU07Y0FBQ00sTUFBTSxFQUFDLEtBQUs7Y0FBQzlCLElBQUksRUFBQztZQUFLLEdBQ25EdUUsV0FBVyxDQUFDdkIsT0FBTyxDQUFDakMsR0FBRyxDQUNULENBQ1gsQ0FDRyxFQUNWdEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRjLGFBQUEsQ0FBQWEsWUFBWSxRQUNabGUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQTZiLGtCQUFrQjtjQUFDbGIsSUFBSSxFQUFFQSxJQUFJO2NBQUVzTixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNoQyxDQUNWLENBQ2lCLENBQ25CO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUF2UCxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcVEsUUFBQSxHQUFBclEsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsTUFBTXNRLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFclEsS0FBQSxDQUFBc1EsS0FBSztZQUNaekIsUUFBUSxFQUFFN08sS0FBQSxDQUFBdUksUUFBUTtZQUNsQmdJLEtBQUssRUFBRXZRLEtBQUEsQ0FBQXdRLEtBQUs7WUFDWkMsUUFBUSxFQUFFelEsS0FBQSxDQUFBMFEsUUFBUTtZQUNsQkMsTUFBTSxFQUFFM1EsS0FBQSxDQUFBNFEsTUFBTTtZQUNkQyxLQUFLLEVBQUVWLFFBQUEsQ0FBQVc7V0FDUDtVQUVLLFNBQVVrTixVQUFVQSxDQUFDak4sS0FBSztZQUMvQixNQUFNO2NBQUU3USxLQUFLO2NBQUVDLFFBQVE7Y0FBRTBQO1lBQVksQ0FBRSxHQUFHLElBQUE5UCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU07Y0FBRTZCLElBQUk7Y0FBRWxCLElBQUk7Y0FBRWlRLEtBQUs7Y0FBRWhRLE1BQU07Y0FBRXFDLEtBQUs7Y0FBRXFhLFFBQVE7Y0FBRWhCO1lBQVMsQ0FBRSxHQUFHM0wsS0FBSztZQUN2RSxNQUFNO2NBQUVwUDtZQUFLLENBQUUsR0FBR3hCLFFBQVE7WUFFMUIsTUFBTTtjQUFFZ0YsS0FBSztjQUFFc0QsV0FBVztjQUFFN0g7WUFBSyxDQUFFLEdBQUdWLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQythLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxFQUFFa0QsS0FBSyxHQUFHdVgsU0FBUyxDQUFDemEsSUFBSSxDQUFDLEVBQUVrRCxLQUFLLEdBQUdsRCxJQUFJLENBQUM7WUFDekcsTUFBTSxDQUFDa1AsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHdlIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUNDLEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQUM7WUFFckUsSUFBQWYsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQ0gsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnlQLGdCQUFnQixDQUFDelAsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUM7WUFDRixNQUFNVSxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QndPLGdCQUFnQixDQUFDeE8sS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFcEIsSUFBSTtnQkFBRW9CO2NBQUssQ0FBRSxHQUFHVCxLQUFLLENBQUNFLGFBQWE7Y0FDM0MzQyxRQUFRLENBQUN3QixLQUFLLENBQUN5RixHQUFHLENBQUM7Z0JBQUUsQ0FBQ25GLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxJQUFJLENBQUNuRCxLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxFQUFFO2NBQ3ZCbU4sT0FBTyxDQUFDaUMsSUFBSSxDQUFDLGdEQUFnRHBQLElBQUksRUFBRSxDQUFDO2NBQ3BFLE9BQU8sSUFBSTs7WUFHWixNQUFNNkQsS0FBSyxHQUFHO2NBQUVYLEtBQUs7Y0FBRXNELFdBQVc7Y0FBRXBGLEtBQUssRUFBRThOO1lBQWEsQ0FBRTtZQUUxRDtZQUVBLE1BQU1HLEtBQUssR0FBR2xCLFVBQVUsQ0FBQ3JQLElBQUksQ0FBQztZQUU5QixPQUNDbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDRVUsTUFBTSxHQUNObkIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQU0sR0FDcEJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQ0VvZCxRQUFRLEdBQUc3ZCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPb2QsUUFBUSxFLEtBQVUsR0FBRyxJQUFJLEVBQzNDOWMsS0FBSyxDQUNGLENBQ0EsR0FDSCxJQUFJLEVBQ1JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnUixLQUFLO2NBQUMxTixPQUFPLEVBQUMsVUFBVTtjQUFDM0IsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FBTTZELEtBQUs7Y0FBRW5ELFFBQVEsRUFBRUEsUUFBUTtjQUFFbU4sTUFBTSxFQUFFRDtZQUFZLEVBQUksQ0FDeEY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQWhRLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVWtkLGdCQUFnQkEsQ0FBQztZQUFFNUMsVUFBVTtZQUFFM1UsUUFBUTtZQUFFb0M7VUFBTSxDQUFFO1lBQ2hFLE1BQU07Y0FDTG5CLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFUyxRQUFRO2NBQUU5QixRQUFRLEVBQUV5VztZQUFVLEdBQ3hFelQsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRTZDLE1BQU07Y0FBRWxFLFFBQVEsRUFBRXlXO1lBQVUsR0FDN0R6VCxXQUFXLENBQUN2QixPQUFPLENBQUN1QyxJQUFJLENBQ2pCLENBQ0Q7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTNILEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxUSxRQUFBLEdBQUFyUSxPQUFBO1VBRUEsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFQSxNQUFNc1EsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUVyUSxLQUFBLENBQUFzUSxLQUFLO1lBQ1p6QixRQUFRLEVBQUU3TyxLQUFBLENBQUF1SSxRQUFRO1lBQ2xCZ0ksS0FBSyxFQUFFdlEsS0FBQSxDQUFBd1EsS0FBSztZQUNaQyxRQUFRLEVBQUV6USxLQUFBLENBQUEwUSxRQUFRO1lBQ2xCQyxNQUFNLEVBQUUzUSxLQUFBLENBQUE0USxNQUFNO1lBQ2RDLEtBQUssRUFBRVYsUUFBQSxDQUFBVztXQUNQO1VBRUssU0FBVWhRLFNBQVNBLENBQUM7WUFBRUMsSUFBSSxHQUFHLE9BQU87WUFBRUMsTUFBTSxHQUFHO1VBQUksQ0FBRTtZQUMxRCxNQUFNO2NBQUVkLEtBQUs7Y0FBRUMsUUFBUTtjQUFFMFA7WUFBWSxDQUFFLEdBQUcsSUFBQTlQLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTtjQUFFdUI7WUFBSyxDQUFFLEdBQUd4QixRQUFRO1lBQzFCLE1BQU11YyxTQUFTLEdBQUcvYSxLQUFLLENBQUMrYSxTQUFTLENBQUMzYixJQUFJLENBQUM7WUFDdkMsTUFBTTRiLE1BQU0sR0FBRzdSLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMlIsU0FBUyxDQUFDO1lBRXJDLE1BQU0vWixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFWCxJQUFJO2dCQUFFb0I7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUMzQzNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQztnQkFBRSxDQUFDbkYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELE1BQU00YSxLQUFLLEdBQUd0QixNQUFNLENBQUM1SixNQUFNLENBQUM5USxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQ29SLFFBQVEsQ0FBQ3BSLElBQUksQ0FBQyxDQUFDO1lBQ2hGLE1BQU1zYixNQUFNLEdBQUdVLEtBQUssQ0FBQ25JLEdBQUcsQ0FBQyxDQUFDN1QsSUFBSSxFQUFFK08sS0FBSyxLQUFJO2NBQ3hDLElBQUksQ0FBQzlRLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCbU4sT0FBTyxDQUFDaUMsSUFBSSxDQUFDLGdEQUFnRHBQLElBQUksRUFBRSxDQUFDOztjQUdyRTtjQUVBLElBQ0MsT0FBT3lhLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFDbEMsT0FBT3lhLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSXlhLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxLQUFLLE9BQVEsRUFDeEU7Z0JBQ0QsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnQixNQUFBLENBQUEwYyxVQUFVO2tCQUNWdEIsU0FBUyxFQUFFQSxTQUFTO2tCQUNwQmdCLFFBQVEsRUFBRWhCLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxDQUFDeWIsUUFBUTtrQkFDbEN0USxHQUFHLEVBQUUsR0FBR25MLElBQUksSUFBSStPLEtBQUssRUFBRTtrQkFDdkJoUSxNQUFNLEVBQUVBLE1BQU07a0JBQ2RnUSxLQUFLLEVBQUVBLEtBQUs7a0JBQ1pqUSxJQUFJLEVBQUUyYixTQUFTLENBQUN6YSxJQUFJLENBQUMsQ0FBQ2xCLElBQUk7a0JBQzFCa0IsSUFBSSxFQUFFQTtnQkFBSSxFQUNUOztjQUlKLE1BQU1xUCxLQUFLLEdBQUdsQixVQUFVLENBQUNzTSxTQUFTLENBQUN6YSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksQ0FBQztjQUU5QyxNQUFNO2dCQUFFb0UsS0FBSztnQkFBRXNEO2NBQVcsQ0FBRSxHQUFHdkksS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUM7Y0FDaEQsTUFBTTZELEtBQUssR0FBRztnQkFBRVgsS0FBSztnQkFBRXNELFdBQVc7Z0JBQUVwRixLQUFLLEVBQUUxQixLQUFLLENBQUNNLElBQUksQ0FBQyxJQUFJO2NBQUUsQ0FBRTtjQUU5RCxPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dSLEtBQUs7Z0JBQ0wzTyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCaUIsT0FBTyxFQUFDLFVBQVU7Z0JBQ2xCOFosUUFBUSxFQUFFaEIsU0FBUyxDQUFDemEsSUFBSSxDQUFDLENBQUN5YixRQUFRO2dCQUNsQ3RRLEdBQUcsRUFBRSxHQUFHbkwsSUFBSSxJQUFJK08sS0FBSyxFQUFFO2dCQUN2Qi9PLElBQUksRUFBRUEsSUFBSTtnQkFDVnNOLElBQUksRUFBRW1OLFNBQVMsQ0FBQ3phLElBQUksQ0FBQztnQkFDckI2TixNQUFNLEVBQUVELFlBQVk7Z0JBQUEsR0FDaEIvSjtjQUFLLEVBQ1I7WUFFSixDQUFDLENBQUM7WUFFRixPQUFPakcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFBR2dkLE1BQU0sQ0FBSTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQXZkLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxUSxRQUFBLEdBQUFyUSxPQUFBO1VBRUEsTUFBTXNRLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFclEsS0FBQSxDQUFBc1EsS0FBSztZQUNaekIsUUFBUSxFQUFFN08sS0FBQSxDQUFBdUksUUFBUTtZQUNsQmdJLEtBQUssRUFBRXZRLEtBQUEsQ0FBQXdRLEtBQUs7WUFDWkMsUUFBUSxFQUFFelEsS0FBQSxDQUFBMFEsUUFBUTtZQUNsQkMsTUFBTSxFQUFFM1EsS0FBQSxDQUFBNFEsTUFBTTtZQUNkQyxLQUFLLEVBQUVWLFFBQUEsQ0FBQVc7V0FDUDtVQUVLLFNBQVVyQyxrQkFBa0JBLENBQUMsRUFBRTtZQUNwQyxNQUFNO2NBQUV2TyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTTtjQUFFdUI7WUFBSyxDQUFFLEdBQUd4QixRQUFRO1lBQzFCLE1BQU13YyxNQUFNLEdBQUc3UixNQUFNLENBQUNDLElBQUksQ0FBQ3BKLEtBQUssQ0FBQythLFNBQVMsQ0FBQztZQUMzQyxNQUFNL1osUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRVgsSUFBSTtnQkFBRW9CO2NBQUssQ0FBRSxHQUFHVCxLQUFLLENBQUNFLGFBQWE7Y0FDM0MzQyxRQUFRLENBQUN3QixLQUFLLENBQUN5RixHQUFHLENBQUM7Z0JBQUUsQ0FBQ25GLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxNQUFNa2EsTUFBTSxHQUFHWixNQUFNLENBQUM3RyxHQUFHLENBQUMsQ0FBQzdULElBQUksRUFBRStPLEtBQUssS0FBSTtjQUN6QyxJQUFJLENBQUM5USxLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxFQUFFO2dCQUN2Qm1OLE9BQU8sQ0FBQ2lDLElBQUksQ0FBQyxnREFBZ0RwUCxJQUFJLEVBQUUsQ0FBQzs7Y0FFckUsTUFBTTtnQkFBRWtELEtBQUs7Z0JBQUVzRDtjQUFXLENBQUUsR0FBR3ZJLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDO2NBQ2hELE1BQU02RCxLQUFLLEdBQUc7Z0JBQUVYLEtBQUs7Z0JBQUVzRCxXQUFXO2dCQUFFcEYsS0FBSyxFQUFFMUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsSUFBSTtjQUFFLENBQUU7Y0FFOUQsSUFBSSxPQUFPTixLQUFLLENBQUMrYSxTQUFTLENBQUN6YSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUlOLEtBQUssQ0FBQythLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDeEYsTUFBTXVRLEtBQUssR0FBR2xCLFVBQVUsQ0FBQ3pPLEtBQUssQ0FBQythLFNBQVMsQ0FBQ3phLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxDQUFDO2dCQUNwRCxPQUNDbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dSLEtBQUs7a0JBQ0w5USxTQUFTLEVBQUMsa0JBQWtCO2tCQUM1QjRNLEdBQUcsRUFBRSxHQUFHbkwsSUFBSSxJQUFJK08sS0FBSyxFQUFFO2tCQUN2Qi9PLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNONkQsS0FBSztrQkFDVG5ELFFBQVEsRUFBRUE7Z0JBQVEsRUFDakI7O2NBR0o7Y0FDQSxNQUFNMk8sS0FBSyxHQUFHbEIsVUFBVSxDQUFDek8sS0FBSyxDQUFDK2EsU0FBUyxDQUFDemEsSUFBSSxDQUFDLENBQUM7Y0FDL0MsT0FDQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnUixLQUFLO2dCQUFDOVEsU0FBUyxFQUFDLGtCQUFrQjtnQkFBQzRNLEdBQUcsRUFBRSxHQUFHbkwsSUFBSSxJQUFJK08sS0FBSyxFQUFFO2dCQUFFL08sSUFBSSxFQUFFQSxJQUFJO2dCQUFBLEdBQU02RCxLQUFLO2dCQUFFbkQsUUFBUSxFQUFFQTtjQUFRLEVBQUk7WUFFNUcsQ0FBQyxDQUFDO1lBRUYsT0FDQzlDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDZixLQUFLLENBQU0sQ0FDcEIsRUFDVGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUFNaWQsTUFBTSxDQUFPLENBQ2QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQSxJQUFBMWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7O1VBS00sU0FBVWlkLE9BQU9BLENBQUN4YSxVQUFVO1lBQ2pDLE1BQU0sQ0FBQzZYLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd4YSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTtjQUNMeEIsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU15SCxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLElBQUk7Z0JBQ0h3UyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNuQixNQUFNbGEsUUFBUSxDQUFDd0gsSUFBSSxFQUFFO2dCQUNyQjBTLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCOVgsVUFBVSxDQUFDLE9BQU8sQ0FBQztlQUNuQixDQUFDLE9BQU80TSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDZCxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxNQUFNK08sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekIsTUFBTW5TLFNBQVMsR0FBRzVMLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ29LLFNBQVM7Y0FDMUM1TCxRQUFRLENBQUN3QixLQUFLLENBQUM4RixNQUFNLEVBQUU7Y0FDdkJ0SCxRQUFRLENBQUNpSCxHQUFHLENBQUM7Z0JBQUUyRTtjQUFTLENBQUUsQ0FBQztjQUUzQnhKLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQU87Y0FBRTZYLFVBQVU7Y0FBRUMsYUFBYTtjQUFFalYsT0FBTyxFQUFFO2dCQUFFeUMsTUFBTTtnQkFBRXBDLFFBQVEsRUFBRXlZO2NBQVk7WUFBRSxDQUFFO1VBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBcmUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXFlLGFBQUEsR0FBQXJlLE9BQUE7VUFDQSxJQUFBc2UsU0FBQSxHQUFBdGUsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQTRaLFlBQUEsR0FBQTVaLE9BQUE7VUFDTSxTQUFVMEMsS0FBS0EsQ0FBQTtZQUNwQixNQUFNLENBQUNxWCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqYSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTtjQUNMdkIsUUFBUTtjQUNSQSxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ6QixLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU1vTCxXQUFXLEdBQUdBLENBQUEsS0FBTXNPLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNdEssSUFBSSxHQUFHNU4sS0FBSyxDQUFDMGMsYUFBYSxFQUFFO1lBQ2xDLE1BQU0xQixNQUFNLEdBQUc3UixNQUFNLENBQUNDLElBQUksQ0FBQ3BKLEtBQUssQ0FBQythLFNBQVMsQ0FBQztZQUMzQyxNQUFNNVcsS0FBSyxHQUFHO2NBQUVkLE9BQU8sRUFBRXdHLFdBQVc7Y0FBRTdILFFBQVEsRUFBRXhELFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSztZQUFFLENBQUU7WUFFeEUsTUFBTTJiLE1BQU0sR0FBR1osTUFBTSxDQUFDN0csR0FBRyxDQUFDLENBQUM3VCxJQUFJLEVBQUUrTyxLQUFLLEtBQUk7Y0FDekMsSUFBSSxPQUFPclAsS0FBSyxDQUFDK2EsU0FBUyxDQUFDemEsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJTixLQUFLLENBQUMrYSxTQUFTLENBQUN6YSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hGLE9BQU9sQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOGQsU0FBQSxDQUFBbEMsZ0JBQWdCO2tCQUFDOU8sR0FBRyxFQUFFLEdBQUduTCxJQUFJLElBQUkrTyxLQUFLLEVBQUU7a0JBQUUvTyxJQUFJLEVBQUVBO2dCQUFJLEVBQUk7O2NBR2pFLE9BQU9wQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNmQsYUFBQSxDQUFBNUIscUJBQXFCO2dCQUFDblAsR0FBRyxFQUFFLEdBQUduTCxJQUFJLElBQUkrTyxLQUFLLEVBQUU7Z0JBQUUvTyxJQUFJLEVBQUVBLElBQUk7Z0JBQUVzTixJQUFJLEVBQUVBO2NBQUksRUFBSTtZQUNsRixDQUFDLENBQUM7WUFFRixPQUNDMVAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdDLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLa0MsS0FBSztjQUFFMUQsSUFBSSxFQUFDO1lBQVEsR0FDN0N1RSxXQUFXLENBQUN2QixPQUFPLENBQUM4QyxNQUFNLENBQ25CLENBQ0osQ0FDRSxFQUNScVYsTUFBTSxFQUNQMWQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29aLFlBQUEsQ0FBQTNKLGtCQUFrQjtjQUFDdkssSUFBSSxFQUFFcVUsZUFBZTtjQUFFN04sT0FBTyxFQUFFUjtZQUFXLEVBQUksQ0FDakU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXZLLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVNLFNBQVV3ZSxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXBlLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUVsRixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBQ2xCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNHLENBQ0wsRUFDTkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLENBQ0QsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBakIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUF5ZSxPQUFBLEdBQUF6ZSxPQUFBO1VBQ0EsSUFBQTBlLFdBQUEsR0FBQTFlLE9BQUE7VUFDTztVQUFVLFNBQVVzSixRQUFRQSxDQUFDO1lBQUVqRixRQUFRO1lBQUVhLE9BQU87WUFBRXdVLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBR3pJO1VBQUssQ0FBRTtZQUNqRixNQUFNME4sV0FBVyxHQUFHakYsTUFBTSxHQUFHLE1BQU1nRixXQUFBLENBQUFFLFlBQVksQ0FBQ0MsYUFBYSxDQUFDM1osT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ25GLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUEsR0FBS2dNLEtBQUs7Y0FBRTNPLElBQUksRUFBRW5CLE1BQUEsQ0FBQTJkLEtBQUssQ0FBQ0MsT0FBTztjQUFFN1osT0FBTyxFQUFFeVo7WUFBVyxHQUMxRHRhLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVMmEsWUFBWUEsQ0FBQztZQUFFM2EsUUFBUTtZQUFFYSxPQUFPO1lBQUV3VSxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUd6STtVQUFLLENBQUU7WUFDckYsTUFBTTBOLFdBQVcsR0FBR2pGLE1BQU0sR0FBRyxNQUFNZ0YsV0FBQSxDQUFBRSxZQUFZLENBQUNDLGFBQWEsQ0FBQzNaLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0NuRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaWUsT0FBQSxDQUFBL1AsVUFBVTtjQUFBLEdBQUt1QyxLQUFLO2NBQUUzTyxJQUFJLEVBQUVuQixNQUFBLENBQUEyZCxLQUFLLENBQUNDLE9BQU87Y0FBRTdaLE9BQU8sRUFBRXlaO1lBQVcsR0FDOUR0YSxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVgsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVVpZixrQkFBa0JBLENBQUM7WUFBRXZaLElBQUk7WUFBRXdHO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQ0x0RixLQUFLO2NBQ0x4RyxLQUFLO2NBQ0w4ZSxTQUFTO2NBQ1R0WSxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLElBQUksQ0FBQ29GLElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTVosU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJvYSxTQUFTLEVBQUU7Y0FDWHRZLEtBQUssQ0FBQ3VZLFlBQVksQ0FBQ2hWLFNBQVMsQ0FBQztjQUM3QitCLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDbk0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWk8sSUFBSTtjQUNKNUUsS0FBSyxFQUFFVixLQUFLLENBQUNzRSxLQUFLLENBQUNlLE1BQU0sQ0FBQzNFLEtBQUs7Y0FDL0J1SSxJQUFJLEVBQUVqSixLQUFLLENBQUNzRSxLQUFLLENBQUNlLE1BQU0sQ0FBQ3RCLFdBQVc7Y0FDcEMrSCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ2RyxRQUFRLEVBQUV1RyxPQUFPO2NBQ2pCOUcsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUV3QixXQUFXLENBQUN2QixPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUNsREMsU0FBUyxFQUFFO2dCQUFFSCxLQUFLLEVBQUV3QixXQUFXLENBQUN2QixPQUFPLENBQUNHO2NBQU0sQ0FBRTtjQUNoRFgsU0FBUyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2ZBLFNBQVMsRUFBRTtjQUNaO1lBQUMsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBcEIsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVpUSxrQkFBa0JBLENBQUM7WUFBRXZLLElBQUk7WUFBRXdHO1VBQU8sQ0FBRTtZQUNuRCxNQUFNLENBQUNqRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTHhCLEtBQUssRUFBRTtnQkFBRU8sVUFBVSxFQUFFUDtjQUFLLENBQUU7Y0FDNUJDLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFDTkMsV0FBVyxFQUFFO2tCQUFFdkI7Z0JBQU87Y0FBRTtZQUN4QixDQUNELEdBQUcsSUFBQXJGLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDb0YsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNWixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hvQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQmdGLE9BQU8sRUFBRTtnQkFDVDdMLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQytGLEtBQUssRUFBRTtnQkFDdEIsTUFBTXZILFFBQVEsQ0FBQ3dILElBQUksRUFBRTtlQUNyQixDQUFDLE9BQU93SCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDZCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVG5JLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDbkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWk8sSUFBSTtjQUNKd0csT0FBTyxFQUFFQSxPQUFPO2NBQ2hCcEgsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCTSxVQUFVLEVBQUU7Z0JBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDdENDLFNBQVMsRUFBRTtnQkFBRUgsS0FBSyxFQUFFQyxPQUFPLENBQUNHO2NBQU0sQ0FBRTtjQUNwQ0UsUUFBUSxFQUFFdUc7WUFBTyxHQUVqQm5NLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3FPLFdBQVcsQ0FBQzNOLEtBQUssQ0FBTSxFQUNsQ2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsWUFBSUosS0FBSyxDQUFDcU8sV0FBVyxDQUFDdEssV0FBVyxDQUFLLENBQ3hCLENBQ2I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTJFLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFvZixRQUFBLEdBQUFwZixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFFQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNNLFNBQVVxZixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMaGYsUUFBUTtjQUNSdUcsS0FBSztjQUNMeEcsS0FBSztjQUNMc00sTUFBTTtjQUNOOUYsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUNzTyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc5TyxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDMEosZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHeEwsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0wZCxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJNVMsTUFBTSxDQUFDSSxPQUFPLEVBQUU7Z0JBQ25CK0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FHRGpJLEtBQUssQ0FBQ3VZLFlBQVksQ0FBQ2hWLFNBQVMsQ0FBQztjQUM3QmlWLFFBQUEsQ0FBQUcsT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDZixDQUFDO1lBRUQsTUFBTUMsU0FBUyxHQUFHNWQsS0FBSyxJQUFHO2NBQ3pCO1lBQUEsQ0FDQTtZQUNELE1BQU1pRCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QitKLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QmpJLEtBQUssQ0FBQ3VZLFlBQVksQ0FBQ2hWLFNBQVMsQ0FBQztjQUM3QmlWLFFBQUEsQ0FBQUcsT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDZixDQUFDO1lBQ0QsTUFBTUUsaUJBQWlCLEdBQUdBLENBQUEsS0FBTW5VLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUNwRSxNQUFNd0QsYUFBYSxHQUFHQSxDQUFBLEtBQU1ELGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDOU8sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUF1TixVQUFVO2NBQ1Z4SixPQUFPLEVBQUVvYSxNQUFNO2NBQ2Z4ZSxLQUFLLEVBQUUrRixXQUFXLENBQUN2QixPQUFPLENBQUNrYSxJQUFJO2NBQy9CbGQsSUFBSSxFQUFDLFdBQVc7Y0FDaEI1QixTQUFTLEVBQUMsUUFBUTtjQUNsQm9ELE9BQU8sRUFBQztZQUFTLEVBQ2hCLEVBQ0YvRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBUSxRQUFRO2NBQUN4RixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFd2E7WUFBaUIsR0FDcEQ3WSxXQUFXLENBQUN2QixPQUFPLENBQUNpRSxRQUFRLENBQ25CLEVBRVZxRixlQUFlLElBQ2Y3TyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRWEsUUFBUSxFQUFFbUo7WUFBYSxHQUMxRC9PLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQU1KLEtBQUssQ0FBQytHLE1BQU0sQ0FBQzFCLE1BQU0sQ0FBTyxDQUVqQyxFQUNBNkYsZUFBZSxJQUNmdkwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZLLFdBQUEsQ0FBQU0sdUJBQXVCO2NBQ3ZCakcsSUFBSSxFQUFFNEYsZUFBZTtjQUNyQk0sUUFBUTtjQUNSSyxTQUFTLEVBQUU1TCxRQUFRLENBQUM0TCxTQUFTO2NBQzdCQyxPQUFPLEVBQUV3VCxpQkFBaUI7Y0FDMUJ2VyxVQUFVLEVBQUVzVztZQUFTLEVBRXRCLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUEsSUFBQTFmLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBMmYsU0FBQSxHQUFBM2YsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUErSSxhQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVW9NLHlCQUF5QkEsQ0FBQztZQUFFbkwsSUFBSTtZQUFFaUw7VUFBTyxDQUFFO1lBQzFELE1BQU07Y0FDTDlMLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDa1AsS0FBSyxFQUFFb1EsUUFBUSxDQUFDLEdBQUc3ZixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTtjQUFFOE4sZ0JBQWdCO2NBQUV6STtZQUFRLENBQUUsR0FBRyxJQUFBOEIsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUMzRCxNQUFNMlcsTUFBTSxHQUFHO2NBQ2RoZCxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakI4YyxRQUFRLENBQUM5YyxLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRDJCLE9BQU8sRUFBRSxNQUFNcEMsS0FBSyxJQUFHO2dCQUN0QixNQUFNNE0sZ0JBQWdCLENBQUN6TyxJQUFJLEVBQUV1TyxLQUFLLENBQUM7Z0JBQ25DdEQsT0FBTyxFQUFFO2NBQ1Y7YUFDQTtZQUVELE9BQ0NuTSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBOEosS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFL0gsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLDZCQUE2QjtjQUFDd0wsT0FBTyxFQUFFQTtZQUFPLEdBQ3pGbk0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQzFZLElBQUksQ0FBQyxDQUFDSCxLQUFLLENBQU0sRUFDbkNmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQzFZLElBQUksQ0FBQyxDQUFDa0QsV0FBVyxDQUFRLENBQ3JDLEVBQ1RwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFxSSxJQUFJLFFBQ0p4SSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUF1SSxRQUFRO2NBQ1JwRCxLQUFLLEVBQUVqRixLQUFLLENBQUN1WixNQUFNLENBQUM1SyxRQUFRLENBQUMxSixLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLE9BQU87Y0FDWjJCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCUCxLQUFLLEVBQUVpTSxLQUFLO2NBQ1ozTSxRQUFRLEVBQUVnZCxNQUFNLENBQUNoZCxRQUFRO2NBQ3pCOEYsV0FBVyxFQUFFdkksS0FBSyxDQUFDdVosTUFBTSxDQUFDNUssUUFBUSxDQUFDcEc7WUFBVyxFQUM3QyxFQUNGNUksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWdCLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbWYsU0FBQSxDQUFBclcsUUFBUTtjQUFDeEYsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRTJhLE1BQU0sQ0FBQzNhO1lBQU8sR0FDakQyQixXQUFXLENBQUN2QixPQUFPLENBQUNpRSxRQUFRLENBQ25CLENBQ0gsQ0FDSCxFQUVQeEosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQWdYLGdCQUFnQjtjQUFDN1ksUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQWxILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBMmYsU0FBQSxHQUFBM2YsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQVFNLFNBQVUrZixxQkFBcUJBLENBQUM7WUFBRTdULE9BQU87WUFBRTZGLGVBQWUsR0FBRztVQUFFLENBQUU7WUFDdEUsTUFBTTtjQUNMM1IsS0FBSztjQUNMQyxRQUFRO2NBQ1JxTSxNQUFNO2NBQ05tTixRQUFRO2NBQ1JqVCxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzJHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDNE4sS0FBSyxFQUFFb1EsUUFBUSxDQUFDLEdBQUc3ZixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDdU8sS0FBSyxFQUFFNlAsUUFBUSxDQUFDLEdBQUdqZ0IsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU1pZSxNQUFNLEdBQUc7Y0FDZGhkLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQjhjLFFBQVEsQ0FBQzljLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEMkIsT0FBTyxFQUFFLE1BQU1wQyxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hvRSxXQUFXLENBQUMsSUFBSSxDQUFDO2tCQUVqQixNQUFNaVAsUUFBUSxHQUFHLE1BQU05VixRQUFRLENBQUN3QixLQUFLLENBQUMwSCxRQUFRLENBQUNpRyxLQUFLLEVBQUU7b0JBQUUsR0FBR3VDO2tCQUFlLENBQUUsQ0FBQztrQkFFN0U7a0JBQ0EsSUFBSW9FLFFBQVEsQ0FBQ2hHLEtBQUssRUFBRTtvQkFDbkIsTUFBTThQLFFBQVEsR0FBR0EsQ0FBQzlQLEtBQUssRUFBRTBNLE1BQU0sR0FBRyxFQUFFLEtBQUk7c0JBQ3ZDLE1BQU12UCxHQUFHLEdBQUdsTixLQUFLLENBQUNrUyxNQUFNLEdBQUduQyxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFHLFNBQVM7c0JBQ3JELElBQUksQ0FBQyxDQUFDME0sTUFBTSxDQUFDdlUsTUFBTSxFQUFFO3dCQUNwQixPQUFPbEksS0FBSyxDQUFDa1MsTUFBTSxDQUFDaEYsR0FBRyxDQUFDLEdBQUcsSUFBSXVQLE1BQU0sRUFBRTs7c0JBRXhDLE9BQU96YyxLQUFLLENBQUNrUyxNQUFNLENBQUNoRixHQUFHLENBQUM7b0JBQ3pCLENBQUM7b0JBRUQwUyxRQUFRLENBQUNDLFFBQVEsQ0FBQzlKLFFBQVEsQ0FBQ2hHLEtBQUssRUFBRWdHLFFBQVEsQ0FBQzBHLE1BQU0sQ0FBQyxDQUFDO29CQUNuRDNWLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2xCOztrQkFFRCxNQUFNckYsS0FBSyxHQUFHeEIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNFksT0FBTyxFQUFFO2tCQUV0QztrQkFDQVosUUFBUSxDQUFDO29CQUFFaFk7a0JBQUssQ0FBRSxDQUFDO2tCQUNuQjtrQkFDQThOLFVBQVUsQ0FBQyxNQUFLO29CQUNmekksV0FBVyxDQUFDLEtBQUssQ0FBQztrQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztpQkFDUixDQUFDLE9BQU9tSSxDQUFDLEVBQUU7a0JBQ1hDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDLEVBQUUsRUFBRWQsQ0FBQyxFQUFFQSxDQUFDLENBQUM2USxPQUFPLENBQUM7a0JBQy9CRixRQUFRLENBQUMsU0FBUyxDQUFDOztjQUVyQjthQUNBO1lBRUQsT0FDQ2pnQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBOEosS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFL0gsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLGNBQWM7Y0FBQ3dMLE9BQU8sRUFBRUE7WUFBTyxHQUMxRW5NLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN1WixNQUFNLENBQUM3WSxLQUFLLENBQU0sRUFDN0JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQ3hWLFdBQVcsQ0FBUSxDQUMvQixFQUNUcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBcUksSUFBSSxRQUNKeEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQW1MLGFBQWE7Y0FBQzdULEtBQUssRUFBRUEsS0FBSztjQUFFK1AsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDN0NwUSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUF1SSxRQUFRO2NBQ1JwRCxLQUFLLEVBQUVqRixLQUFLLENBQUN1WixNQUFNLENBQUM1SyxRQUFRLENBQUMxSixLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLE9BQU87Y0FDWm9CLEtBQUssRUFBRWlNLEtBQUs7Y0FDWjNNLFFBQVEsRUFBRWdkLE1BQU0sQ0FBQ2hkLFFBQVE7Y0FDekI4RixXQUFXLEVBQUV2SSxLQUFLLENBQUN1WixNQUFNLENBQUM1SyxRQUFRLENBQUNwRztZQUFXLEVBQzdDLENBQ0ksRUFFUDVJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21mLFNBQUEsQ0FBQXJXLFFBQVE7Y0FBQ3hGLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUUyYSxNQUFNLENBQUMzYTtZQUFPLEdBQ2pEMkIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUUsUUFBUSxDQUNuQixDQUNILEVBQ1R4SixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBZ1gsZ0JBQWdCO2NBQUM3WSxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQSxJQUFBbEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBOEksR0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUEyZixTQUFBLEdBQUEzZixPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVW1nQixlQUFlQSxDQUFDO1lBQUVsZixJQUFJO1lBQUVpTDtVQUFPLENBQUU7WUFDaEQsTUFBTTtjQUNMOUwsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzJHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDOEssTUFBTSxFQUFFK0ksU0FBUyxDQUFDLEdBQUcxVixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQztjQUMxQ3dlLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQnBmO2FBQ0EsQ0FBQztZQUVGLE1BQU00ZSxNQUFNLEdBQUc7Y0FDZGhkLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQjJTLFNBQVMsQ0FBQztrQkFDVCxHQUFHL0ksTUFBTTtrQkFDVCxDQUFDNUosS0FBSyxDQUFDRSxhQUFhLENBQUNiLElBQUksR0FBR1csS0FBSyxDQUFDRSxhQUFhLENBQUNPO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEMkIsT0FBTyxFQUFFLE1BQU1wQyxLQUFLLElBQUc7Z0JBQ3RCb0UsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTTdHLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzBILFFBQVEsQ0FBQ21ELE1BQU0sQ0FBQzBULFlBQVksQ0FBQztnQkFDbERsVSxPQUFPLEVBQUU7Z0JBRVR5RCxVQUFVLENBQUMsTUFBSztrQkFDZnpJLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ25ILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUE4SixLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUvSCxJQUFJO2NBQUNoRixTQUFTLEVBQUMsY0FBYztjQUFDd0wsT0FBTyxFQUFFQTtZQUFPLEdBQzFFbk0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBcUksSUFBSSxRQUNKeEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQzdZLEtBQUssQ0FBTSxFQUM3QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDdVosTUFBTSxDQUFDeFYsV0FBVyxDQUFRLENBQy9CLEVBRVRwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUF1SSxRQUFRO2NBQ1JwRCxLQUFLLEVBQUVqRixLQUFLLENBQUN1WixNQUFNLENBQUM1SyxRQUFRLENBQUMxSixLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLGNBQWM7Y0FDbkJvQixLQUFLLEVBQUVtSixNQUFNLENBQUMwVCxZQUFZO2NBQzFCdmQsUUFBUSxFQUFFZ2QsTUFBTSxDQUFDaGQsUUFBUTtjQUN6QjhGLFdBQVcsRUFBRXZJLEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQzVLLFFBQVEsQ0FBQ3BHO1lBQVcsRUFDN0MsQ0FDSSxFQUVQNUksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbWYsU0FBQSxDQUFBclcsUUFBUTtjQUFDeEYsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRTJhLE1BQU0sQ0FBQzNhO1lBQU8sR0FDakQyQixXQUFXLENBQUN2QixPQUFPLENBQUNpRSxRQUFRLENBQ25CLENBQ0gsRUFDVHhKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxHQUFBLENBQUFnWCxnQkFBZ0I7Y0FBQzdZLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVBLElBQUFsSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdVksWUFBQSxHQUFBdlksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVzZ0IsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVsZ0IsS0FBSztjQUFFd0csS0FBSztjQUFFNk8sU0FBUztjQUFFcFY7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNsRSxNQUFNeUMsUUFBUSxHQUFHO2NBQUVRLEtBQUssRUFBRSxFQUFFO2NBQUU4QixLQUFLLEVBQUVqRixLQUFLLENBQUNtZ0IsU0FBUyxDQUFDMVAsTUFBTSxDQUFDbEk7WUFBVyxDQUFFO1lBQ3pFLE1BQU0sQ0FBQzZYLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcxZ0IsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUNtZ0IsUUFBUSxDQUFDO1lBQ2pFLE1BQU0zZCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCMmQsV0FBVyxDQUFDM2QsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUN0QyxNQUFNbEQsUUFBUSxDQUFDaUgsR0FBRyxDQUFDO2dCQUFFa1osUUFBUSxFQUFFMWQsS0FBSyxDQUFDRSxhQUFhLENBQUNPO2NBQUssQ0FBRSxDQUFDO2NBQzNELE1BQU1xRCxLQUFLLENBQUNpQixJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUNELE1BQU0xQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM2UCxHQUFHLENBQUM5QyxJQUFJLEtBQUs7Y0FBRTNQLEtBQUssRUFBRTJQLElBQUk7Y0FBRTdOLEtBQUssRUFBRWpGLEtBQUssQ0FBQ21nQixTQUFTLENBQUNyTixJQUFJO1lBQUMsQ0FBRSxDQUFDLENBQUM7WUFDekYsTUFBTXJQLFFBQVEsR0FBRztjQUFFNmMsVUFBVSxFQUFFOVosS0FBSyxDQUFDK1o7WUFBSyxDQUFFO1lBRTVDLE9BQ0M1Z0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTzZiLE9BQU8sRUFBQztZQUFFLEdBQUVqYyxLQUFLLENBQUNtZ0IsU0FBUyxDQUFDMVAsTUFBTSxDQUFDeEwsS0FBSyxDQUFTLEVBQ3hEdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLFlBQUEsQ0FBQU8sV0FBVztjQUNYdlYsS0FBSyxFQUFFbEQsUUFBUSxDQUFDbWdCLFFBQVE7Y0FDeEJyZSxJQUFJLEVBQUMsVUFBVTtjQUNmZ0UsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCdEQsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZGdCO1lBQVEsRUFDWCxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE5RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdVksWUFBQSxHQUFBdlksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVU0Z0IsY0FBY0EsQ0FBQztZQUFFbFUsTUFBTTtZQUFFK0k7VUFBUyxDQUFFO1lBQ25ELE1BQU07Y0FBRXBWLFFBQVE7Y0FBRXVHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELElBQUk0VyxZQUFZLEdBQUc7Y0FBRTNULEtBQUssRUFBRSxFQUFFO2NBQUU4QixLQUFLLEVBQUU7WUFBUSxDQUFFO1lBQ2pELE1BQU1jLE9BQU8sR0FBRyxFQUFFO1lBQ2xCUyxLQUFLLENBQUNrRixLQUFLLENBQUNuTCxVQUFVLENBQUNvSyxLQUFLLENBQUN3QyxPQUFPLENBQUNtUSxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDaEYsRUFBRSxLQUFLclksUUFBUSxDQUFDcVksRUFBRSxFQUFFO2NBQzFCLElBQUlnRixDQUFDLENBQUNoRixFQUFFLEtBQUtoTSxNQUFNLENBQUM3SyxLQUFLLENBQUNnZixVQUFVLEVBQUUzSixZQUFZLEdBQUc7Z0JBQUUzVCxLQUFLLEVBQUVtYSxDQUFDLENBQUNoRixFQUFFO2dCQUFFclQsS0FBSyxFQUFFcVksQ0FBQyxDQUFDNWM7Y0FBSyxDQUFFO2NBQ3BGcUYsT0FBTyxDQUFDaUgsSUFBSSxDQUFDO2dCQUFFN0osS0FBSyxFQUFFbWEsQ0FBQyxDQUFDaEYsRUFBRTtnQkFBRXJULEtBQUssRUFBRXFZLENBQUMsQ0FBQzVjO2NBQUssQ0FBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGLE1BQU1nZ0IsWUFBWSxHQUFHclIsSUFBSSxJQUFHO2NBQzNCZ0csU0FBUyxDQUFDL0ksTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUU3SyxLQUFLLEVBQUU7a0JBQUUsR0FBRzZLLE1BQU0sQ0FBQzdLLEtBQUs7a0JBQUVnZixVQUFVLEVBQUVwUixJQUFJLENBQUNqSSxNQUFNLENBQUNqRTtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7WUFFRCxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTzZiLE9BQU8sRUFBQyxFQUFFO2NBQUMzYixTQUFTLEVBQUM7WUFBVyxHLHNDQUV0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLFlBQUEsQ0FBQU8sV0FBVztjQUFDalcsUUFBUSxFQUFFaWUsWUFBWTtjQUFFNUosWUFBWSxFQUFFQSxZQUFZO2NBQUUvUSxPQUFPLEVBQUUsQ0FBQytRLFlBQVksRUFBRSxHQUFHL1EsT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXBHLE1BQUEsR0FBQUMsT0FBQTtVQWtCTyxNQUFNK2dCLGVBQWUsR0FBQW5XLE9BQUEsQ0FBQW1XLGVBQUEsR0FBR2hoQixNQUFBLENBQUFRLE9BQUssQ0FBQ29SLGFBQWEsQ0FBQyxFQUE2QixDQUFDO1VBQzFFLE1BQU1yUixrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNUCxNQUFBLENBQUFRLE9BQUssQ0FBQ3NSLFVBQVUsQ0FBQ2tQLGVBQWUsQ0FBQztVQUFDblcsT0FBQSxDQUFBdEssa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkIxRSxJQUFBYSxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQThJLEdBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUFvZixRQUFBLEdBQUFwZixPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBZ2hCLE1BQUEsR0FBQWhoQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWloQixTQUFBLEdBQUFqaEIsT0FBQTtVQUNBLElBQUFraEIsUUFBQSxHQUFBbGhCLE9BQUE7VUFFTSxTQUFVbWhCLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUNMOWdCLFFBQVE7Y0FDUnVHLEtBQUs7Y0FDTHhHLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDc08sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHOU8sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQzBKLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3hMLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN3ZixhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUd0aEIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQzBZLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd4YSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTXVILFVBQVUsR0FBR3RILEtBQUssSUFBSXhCLFFBQVEsQ0FBQ2tKLFFBQVEsQ0FBQzFILEtBQUssQ0FBQztZQUVwRCxNQUFNaUQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIrSixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJqSSxLQUFLLENBQUN1WSxZQUFZLENBQUNoVixTQUFTLENBQUM7Y0FDN0JpVixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUVELE1BQU1FLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1uVSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTXdELGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTXlTLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkIsSUFBSTtnQkFDSEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN0QjlHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUksQ0FBQ2xhLFFBQVEsQ0FBQ2toQixXQUFXLEVBQUU7a0JBQzFCUCxNQUFBLENBQUFRLEtBQUssQ0FBQ0MsT0FBTyxDQUFDcmhCLEtBQUssQ0FBQ08sVUFBVSxDQUFDMmdCLElBQUksQ0FBQ0csT0FBTyxDQUFDO2tCQUM1Qzs7Z0JBR0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUNsTyxRQUFRLENBQUNsVCxRQUFRLENBQUNZLElBQUksQ0FBQyxFQUFFO2tCQUNsRSxNQUFNMkYsS0FBSyxDQUFDOGEsc0JBQXNCLENBQUNyaEIsUUFBUSxDQUFDcVksRUFBRSxDQUFDO2lCQUMvQyxNQUFNO2tCQUNOLE1BQU05UixLQUFLLENBQUMrYSxZQUFZLENBQUN0aEIsUUFBUSxDQUFDcVksRUFBRSxDQUFDOztnQkFHdEN4SyxVQUFVLENBQUNDLFFBQVEsQ0FBQ2pMLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tMLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVE7Z0JBQ25Fa00sYUFBYSxDQUFDLEtBQUssQ0FBQztlQUNwQixDQUFDLE9BQU9sTCxDQUFDLEVBQUU7Z0JBQ1gyUixNQUFBLENBQUFRLEtBQUssQ0FBQ3JSLEtBQUssQ0FBQ3ZKLEtBQUssQ0FBQ0MsV0FBVyxDQUFDeUwsTUFBTSxDQUFDc1AsYUFBYSxDQUFDOztZQUVyRCxDQUFDO1lBRUQsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEIzVCxVQUFVLENBQUNDLFFBQVEsQ0FBQ2pMLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tMLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE1BQU07Y0FFakVnVCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDeEIsQ0FBQztZQUNELE9BQ0N0aEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lnQixTQUFBLENBQUFhLGdCQUFnQixPQUFHLEVBQ3BCL2hCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QyxHQUN6RCxDQUFDLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM2UyxRQUFRLENBQUNsVCxRQUFRLENBQUNZLElBQUksQ0FBQyxJQUMxRGxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQTRnQixTQUFTO2NBQ1RsZSxRQUFRLEVBQUV5VyxVQUFVLElBQUksQ0FBQ2phLFFBQVEsQ0FBQ2toQixXQUFXO2NBQzdDamYsSUFBSSxFQUFDLGNBQWM7Y0FDbkJ3QixPQUFPLEVBQUMsV0FBVztjQUNuQnBELFNBQVMsRUFBQywyQkFBMkI7Y0FDckN3RSxPQUFPLEVBQUVvYztZQUFJLEdBRVoxYSxLQUFLLENBQUNDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3FjLFlBQVksQ0FFeEMsRUFDRDVoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksR0FBQSxDQUFBUSxRQUFRO2NBQUN4RixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFd2E7WUFBaUIsR0FDcEQ3WSxXQUFXLENBQUN2QixPQUFPLENBQUNpRSxRQUFRLENBQ25CLENBQ04sQ0FDRCxDQUNELENBQ0QsRUFDTDZYLGFBQWEsSUFBSXJoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMGdCLFFBQUEsQ0FBQWMsZUFBZTtjQUFDOVYsT0FBTyxFQUFFMlY7WUFBUyxFQUFJLEVBQ3hEalQsZUFBZSxJQUNmN08sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVhLFFBQVEsRUFBRW1KO1lBQWEsR0FDMUQvTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUFNcUcsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQU8sQ0FFeEMsRUFDQTZGLGVBQWUsSUFDZnZMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2SyxXQUFBLENBQUFNLHVCQUF1QjtjQUN2QmpHLElBQUksRUFBRTRGLGVBQWU7Y0FDckJNLFFBQVE7Y0FDUjlLLEtBQUssRUFBRVYsS0FBSyxDQUFDdVosTUFBTSxDQUFDN1ksS0FBSztjQUN6QnFELFdBQVcsRUFBRS9ELEtBQUssQ0FBQ3VaLE1BQU0sQ0FBQ3hWLFdBQVc7Y0FDckMvRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ3VaLE1BQU07Y0FDbkIxTixTQUFTLEVBQUU1TCxRQUFRLENBQUM0TCxTQUFTO2NBQzdCNUwsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCNGhCLFdBQVcsRUFBRTVoQixRQUFRLENBQUNZLElBQUksS0FBSyxpQkFBaUI7Y0FDaEROLFVBQVUsRUFBRWlHLEtBQUssQ0FBQ2tGLEtBQUssQ0FBQ25MLFVBQVU7Y0FDbEN1TCxPQUFPLEVBQUV3VCxpQkFBaUI7Y0FDMUI3VCxTQUFTLEVBQUVqRixLQUFLLENBQUNrRixLQUFLLENBQUNDLFlBQVk7Y0FDbkM1QyxVQUFVLEVBQUVBO1lBQVUsRUFFdkIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdHQSxJQUFBK1ksV0FBQSxHQUFBbGlCLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW1pQixTQUFBLEdBQUFuaUIsT0FBQTtVQUVPO1VBQVUsU0FBVWlDLGNBQWNBLENBQUMsRUFBRTtZQUMzQyxNQUFNO2NBQUU1QixRQUFRO2NBQUVELEtBQUs7Y0FBRTJQO1lBQVksQ0FBRSxHQUFHLElBQUE5UCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU02SSxVQUFVLEdBQUdpWixJQUFJLElBQUkvaEIsUUFBUSxDQUFDZ2lCLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDO1lBQ3pELE1BQU16TSxHQUFHLEdBQUcsMERBQTBEdFYsUUFBUSxDQUFDWSxJQUFJLEVBQUU7WUFDckYsTUFBTXFoQixPQUFPLEdBQUc7Y0FDZkMsR0FBRyxFQUFFbGlCLFFBQVEsQ0FBQ2lpQixPQUFPO2NBQ3JCRSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBRzthQUNkO1lBQ0QsSUFBQXRoQixNQUFBLENBQUF5RSxRQUFRLEVBQUN4RixRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXJFLE1BQU1zaUIsVUFBVSxHQUFHTCxPQUFPLENBQUNDLEdBQUcsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUcsSUFBSUUsSUFBSSxDQUFDQyxHQUFHLEVBQUUsRUFBRSxHQUFHdlksU0FBUztZQUMzRSxNQUFNdEgsUUFBUSxHQUFHQyxLQUFLLElBQUl6QyxRQUFRLENBQUNpSCxHQUFHLENBQUM7Y0FBRXhHLEtBQUssRUFBRWdDLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTztZQUFLLENBQUUsQ0FBQztZQUU1RSxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBRS9DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUVpVjtZQUFHLEdBQ3JCNVYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBoQixXQUFBLENBQUFVLFVBQVU7Y0FDVjloQixLQUFLLEVBQUVWLEtBQUssQ0FBQ2tpQixPQUFPLENBQUN4aEIsS0FBSztjQUMxQnFELFdBQVcsRUFBRS9ELEtBQUssQ0FBQ2tpQixPQUFPLENBQUNuZSxXQUFXO2NBQ3RDMGUsV0FBVyxFQUFFeGlCLFFBQVEsQ0FBQ3lpQixrQkFBa0I7Y0FDeENDLE1BQU0sRUFBQyxVQUFVO2NBQ2pCVCxPQUFPLEVBQUVLLFVBQVU7Y0FDbkIzWSxJQUFJLEVBQUMsSUFBSTtjQUNUYixVQUFVLEVBQUVBO1lBQVUsRUFDckIsRUFDRnBKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBc1EsS0FBSztjQUNMOVAsU0FBUyxFQUFDLHdCQUF3QjtjQUNsQ3lCLElBQUksRUFBQyxPQUFPO2NBQ1pvQixLQUFLLEVBQUVsRCxRQUFRLENBQUNTLEtBQUssR0FBR1QsUUFBUSxDQUFDUyxLQUFLLEdBQUcsRUFBRTtjQUMzQytCLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjhGLFdBQVcsRUFBRXZJLEtBQUssQ0FBQ3dJLElBQUksQ0FBQzlILEtBQUs7Y0FDN0JrUCxNQUFNLEVBQUVEO1lBQVksRUFDbkIsQ0FDRyxFQUNOaFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWUsR0FDN0JYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQ0YsSUFBSSxFQUFFOUIsUUFBUSxDQUFDWTtZQUFJLEVBQUksRSxLQUFFYixLQUFLLENBQUNtSyxLQUFLLENBQUNsSyxRQUFRLENBQUNZLElBQUksQ0FBQyxDQUN2RCxDQUNELEVBQ05sQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyaEIsU0FBQSxDQUFBYSxnQkFBZ0IsT0FBRyxDQUNmLENBQ0UsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBampCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1WSxZQUFBLEdBQUF2WSxPQUFBO1VBQ0EsSUFBQXNYLEtBQUEsR0FBQXRYLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVZ2pCLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUU1aUIsS0FBSztjQUFFd0csS0FBSztjQUFFNk8sU0FBUztjQUFFcFY7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNsRSxNQUFNO2NBQUV1RztZQUFXLENBQUUsR0FBR0QsS0FBSztZQUU3QjtZQUNBLE1BQU1xYyxrQkFBa0IsR0FBRyxDQUFDLEdBQUczTCxLQUFBLENBQUFpSixTQUFTLENBQUMyQyxTQUFTLENBQUNqWSxJQUFJLEVBQUUsQ0FBQztZQUUxRCxNQUFNbEksUUFBUSxHQUFHO2NBQUVRLEtBQUssRUFBRSxFQUFFO2NBQUU4QixLQUFLLEVBQUVqRixLQUFLLENBQUNtZ0IsU0FBUyxDQUFDMVAsTUFBTSxDQUFDbEk7WUFBVyxDQUFFO1lBQ3pFLE1BQU0sQ0FBQzZYLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcxZ0IsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUNtZ0IsUUFBUSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQzlhLElBQUksRUFBRXlkLE9BQU8sQ0FBQyxHQUFHcGpCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUNxRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1pQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCMmQsV0FBVyxDQUFDM2QsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztZQUN2QyxDQUFDO1lBRUQ7WUFDQSxNQUFNNEMsT0FBTyxHQUFHVSxXQUFXLEVBQUUwWixTQUFTLEdBQ25DdlYsTUFBTSxDQUFDb1ksT0FBTyxDQUFDdmMsV0FBVyxDQUFDMFosU0FBUyxDQUFDLENBQ3BDdE4sTUFBTSxDQUFDLENBQUMsQ0FBQ29RLFFBQVEsQ0FBQyxLQUFLSixrQkFBa0IsQ0FBQzFQLFFBQVEsQ0FBQzhQLFFBQVEsQ0FBQyxDQUFDLENBQzdEck4sR0FBRyxDQUFDLENBQUMsQ0FBQ3FOLFFBQVEsRUFBRUMsUUFBUSxDQUFDLE1BQU07Y0FDL0IvZixLQUFLLEVBQUU4ZixRQUFRO2NBQ2ZoZSxLQUFLLEVBQUdpZSxRQUFnQixDQUFDbmhCO2FBQ3pCLENBQUMsQ0FBQyxHQUNILEVBQUU7WUFFTCxNQUFNNEYsTUFBTSxHQUFHLE1BQU1qRixLQUFLLElBQUc7Y0FDNUJvRSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCN0csUUFBUSxDQUFDd0gsSUFBSSxDQUFDO2dCQUFFMlk7Y0FBUSxDQUFFLENBQUM7Y0FFM0J0WixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCaWMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNMUosVUFBVSxHQUFHQSxDQUFBLEtBQU0wSixPQUFPLENBQUMsQ0FBQ3pkLElBQUksQ0FBQztZQUV2QyxPQUNDM0YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUNQNkMsT0FBTyxFQUFFdVUsVUFBVTtjQUNuQnRYLElBQUksRUFBRSxhQUFhOUIsUUFBUSxDQUFDbWdCLFFBQVEsRUFBRTtjQUN0QzFmLEtBQUssRUFBRSxHQUFHVCxRQUFRLENBQUNtZ0IsUUFBUSxXQUFXO2NBQ3RDOWYsU0FBUyxFQUFDO1lBQTJELEVBQ3BFLEVBQ0RnRixJQUFJLElBQ0ozRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBOEosS0FBSztjQUFDOUgsSUFBSTtjQUFDd0csT0FBTyxFQUFFdU47WUFBVSxHQUM5QjFaLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQXFJLElBQUk7Y0FBQ0MsUUFBUSxFQUFFVDtZQUFNLEdBQ3JCaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTzZiLE9BQU8sRUFBQztZQUFFLEdBQUVqYyxLQUFLLENBQUNtZ0IsU0FBUyxDQUFDMVAsTUFBTSxDQUFDeEwsS0FBSyxDQUFTLEVBQ3hEdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytYLFlBQUEsQ0FBQU8sV0FBVztjQUFDdlYsS0FBSyxFQUFFaWQsUUFBUTtjQUFFcmUsSUFBSSxFQUFDLFVBQVU7Y0FBQ2dFLE9BQU8sRUFBRUEsT0FBTztjQUFFdEQsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDdEY5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUU2QyxNQUFNO2NBQUVsRSxRQUFRLEVBQUVvRDtZQUFRLEdBQzNETCxLQUFLLENBQUNDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3VDLElBQUksQ0FDdkIsQ0FDSixDQUNBLENBRVIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25FQSxJQUFBOUgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFlTSxTQUFVdWpCLFlBQVlBLENBQUM7WUFBRXBoQixJQUFJO1lBQUVxaEIsUUFBUSxHQUFHLEtBQUs7WUFBRUMsSUFBSSxHQUFHO1VBQUssQ0FBc0I7WUFDeEYsTUFBTTtjQUFFcGpCLFFBQVE7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNb2pCLEdBQUcsR0FBR0QsSUFBSSxHQUFHcGpCLFFBQVEsQ0FBQ3dCLEtBQUssR0FBR3hCLFFBQVE7WUFDNUMsTUFBTW1TLEdBQUcsR0FBR3pTLE1BQUEsQ0FBQVEsT0FBSyxDQUFDa1MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QixNQUFNbFAsS0FBSyxHQUFHbEQsUUFBUSxDQUFDc2pCLFlBQVksQ0FBQ3hoQixJQUFJLENBQUM7WUFFekMsTUFBTSxDQUFDa1IsT0FBTyxFQUFFdVEsVUFBVSxDQUFDLEdBQUc3akIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMyQixLQUFLLENBQUM7WUFFbkQsTUFBTW9TLEdBQUcsR0FBRyxpQkFBaUJwUyxLQUFLLEdBQUcsNEJBQTRCLEdBQUcsRUFBRSxFQUFFO1lBQ3hFLElBQUlzZ0IsS0FBSyxHQUFHdGdCLEtBQUssR0FBRyxXQUFXLEdBQUcsU0FBUztZQUUzQyxJQUFJaWdCLFFBQVEsSUFBSSxDQUFDamdCLEtBQUssRUFBRXNnQixLQUFLLEdBQUcsVUFBVTtZQUMxQyxJQUFBemlCLE1BQUEsQ0FBQVksU0FBUyxFQUNSLENBQUMwaEIsR0FBRyxDQUFDLEVBQ0wsTUFBSztjQUNKLE1BQU1uZ0IsS0FBSyxHQUFHa2dCLElBQUksR0FBR3BqQixRQUFRLENBQUN3QixLQUFLLENBQUM4aEIsWUFBWSxDQUFDeGhCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzlCLFFBQVEsQ0FBQzhCLElBQUksQ0FBQztjQUN6RSxJQUFJb0IsS0FBSyxFQUFFaVAsR0FBRyxDQUFDYSxPQUFPLENBQUNsUSxTQUFTLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQzdEbVAsR0FBRyxDQUFDYSxPQUFPLENBQUNsUSxTQUFTLENBQUNDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztjQUM5RHdnQixVQUFVLENBQUNyZ0IsS0FBSyxDQUFDO1lBQ2xCLENBQUMsRUFDRCxHQUFHcEIsSUFBSSxVQUFVLENBQ2pCO1lBRUQsSUFBSXNoQixJQUFJLElBQUksQ0FBQ3BqQixRQUFRLENBQUN3QixLQUFLLENBQUMrYSxTQUFTLENBQUN6YSxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUk7WUFFeEQsT0FDQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBRWlWLEdBQUc7Y0FBRW5ELEdBQUcsRUFBRUE7WUFBRyxHQUMzQnpTLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFPLEdBQUVOLEtBQUssQ0FBQzBqQixRQUFRLENBQUNqSCxNQUFNLENBQUMxYSxJQUFJLENBQUMsQ0FBUSxFQUM1RHBDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFPLEdBQUVOLEtBQUssQ0FBQzBqQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQVEsQ0FDekQsQ0FDSDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBemlCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ2tCLGFBQUEsR0FBQWhrQixPQUFBO1VBRU0sU0FBVThoQixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFMWhCLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNMmpCLEtBQUssR0FBRzVqQixRQUFRLENBQUM2akIsWUFBWTtZQUNuQyxNQUFNLENBQUNwWCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaE4sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU11aUIsS0FBSyxHQUFHRixLQUFLLENBQUNoUixNQUFNLENBQUNDLElBQUksSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQztZQUUxQyxJQUFBOVIsTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzNCLFFBQVEsRUFBRUEsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQzFCLE1BQUs7Y0FDSmtMLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZixDQUFDLEVBQ0QsUUFBUSxDQUNSO1lBRUQsTUFBTXFYLGFBQWEsR0FBRy9qQixRQUFRLENBQUNna0IsY0FBYyxDQUFDck8sR0FBRyxDQUFDLENBQUM7Y0FBRTdULElBQUk7Y0FBRXFoQjtZQUFRLENBQUUsS0FDcEV6akIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dqQixhQUFBLENBQUFULFlBQVk7Y0FBQ2pXLEdBQUcsRUFBRW5MLElBQUk7Y0FBRUEsSUFBSSxFQUFFQSxJQUFJO2NBQUVxaEIsUUFBUSxFQUFFQTtZQUFRLEVBQ3ZELENBQUM7WUFFRixPQUNDempCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBYSxHQUFFTixLQUFLLENBQUMwakIsUUFBUSxDQUFDemUsS0FBSyxDQUFRLEVBQzNEdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWMsR0FDNUJ5akIsS0FBSyxDQUFDN2IsTUFBTSxFLEtBQUcyYixLQUFLLENBQUMzYixNQUFNLENBQ3RCLENBQ0YsRUFDTnZJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFvQixHQUFFMGpCLGFBQWEsQ0FBTSxDQUNsRCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFoakIsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFza0IsZUFBQSxHQUFBdGtCLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1a0IsY0FBQSxHQUFBdmtCLE9BQUE7VUFDQSxJQUFBd2tCLGNBQUEsR0FBQXhrQixPQUFBO1VBQ0EsSUFBQXlrQixPQUFBLEdBQUF6a0IsT0FBQTtVQUNBLElBQUEwa0IsU0FBQSxHQUFBMWtCLE9BQUE7VUFDQSxJQUFBMmtCLGlCQUFBLEdBQUEza0IsT0FBQTtVQUNBLElBQUE0a0IsZUFBQSxHQUFBNWtCLE9BQUE7VUFDQSxJQUFBNmtCLE9BQUEsR0FBQTdrQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQThrQixjQUFBLEdBQUE5a0IsT0FBQTtVQUdPO1VBQVksU0FBVStrQixrQkFBa0JBLENBQUM7WUFBRW5lLEtBQUs7WUFBRXZHO1VBQVEsQ0FBRTtZQUNsRSxNQUFNLENBQUNxTSxNQUFNLEVBQUUrSSxTQUFTLENBQUMsR0FBRzFWLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUF3QnZCLFFBQVEsQ0FBQ2tlLGFBQWEsRUFBRSxDQUFDO1lBQzNGLE1BQU0sQ0FBQ3lHLFVBQVUsRUFBRTVrQixLQUFLLENBQUMsR0FBRyxJQUFBZ0IsTUFBQSxDQUFBcUQsUUFBUSxFQUFDNmYsZUFBQSxDQUFBVyxNQUFZLENBQUNDLFNBQVMsQ0FBQztZQUM1RCxNQUFNO2NBQUVqa0I7WUFBSSxDQUFFLEdBQUdaLFFBQVE7WUFFekIsSUFBQWUsTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzNCLFFBQVEsQ0FBQyxFQUNWLE1BQUs7Y0FDSm9WLFNBQVMsQ0FBQztnQkFBRSxHQUFHcFYsUUFBUSxDQUFDa2UsYUFBYTtjQUFFLENBQUUsQ0FBQztZQUMzQyxDQUFDLEVBQ0QsUUFBUSxDQUNSO1lBRUQsSUFBSSxDQUFDeUcsVUFBVSxFQUFFLE9BQU9qbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXVSLE9BQU87Y0FBQ3RILE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFDakQsTUFBTW1DLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ3pCMVAsUUFBUSxDQUFDd0gsSUFBSSxFQUFFO1lBQ2hCLENBQUM7WUFDRCxNQUFNdEUsS0FBSyxHQUFHO2NBQUVxRCxLQUFLO2NBQUV2RyxRQUFRO2NBQUVELEtBQUs7Y0FBRXNNLE1BQU07Y0FBRStJLFNBQVM7Y0FBRTFGO1lBQVksQ0FBRTtZQUV6RSxPQUNDaFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsUUFBQSxDQUFBOGdCLGVBQWUsQ0FBQ2hOLFFBQVE7Y0FBQ3hRLEtBQUssRUFBRUE7WUFBSyxHQUNyQ3hELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFvQixHQUNsQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NrQixjQUFBLENBQUEzRCxhQUFhLE9BQUcsRUFDakJwaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXdWLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFblksSUFBSTtjQUNma0YsT0FBTyxFQUFFO2dCQUNSLGlCQUFpQixFQUFFcEcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29rQixlQUFBLENBQUE1TCxzQkFBc0IsT0FBRztnQkFDN0NtTSxNQUFNLEVBQUVwbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FrQixPQUFBLENBQUFyRyxjQUFjLE9BQUc7Z0JBQzFCLGNBQWMsRUFBRXplLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxa0IsT0FBQSxDQUFBckcsY0FBYyxPQUFHO2dCQUNsQzRHLE9BQU8sRUFBRXJsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWtCLE9BQUEsQ0FBQXJHLGNBQWMsT0FBRztnQkFDM0I2RyxNQUFNLEVBQUV0bEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lrQixPQUFBLENBQUEzVSxjQUFjLE9BQUc7Z0JBQzFCd1YsUUFBUSxFQUFFdmxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNra0IsU0FBQSxDQUFBbmtCLE9BQWdCLE9BQUc7Z0JBQzlCLGdCQUFnQixFQUFFUixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK2pCLGNBQUEsQ0FBQTlpQixxQkFBcUIsT0FBRztnQkFDM0MsZ0JBQWdCLEVBQUUxQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ2tCLGNBQUEsQ0FBQTVlLHFCQUFxQixPQUFHO2dCQUMzQyxtQkFBbUIsRUFBRTdGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNta0IsaUJBQUEsQ0FBQXBrQixPQUF3QjtlQUM5QztjQUNEb0ksV0FBVyxFQUFFNUksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUE7WUFBd0IsRUFDcEMsQ0FDRyxDQUNvQjtVQUU3Qjs7Ozs7Ozs7Ozs7VUN4REE7O1VBRUF1SyxNQUFBLENBQUF1YSxjQUFBLENBQUEzYSxPQUFBO1lBQ0FySCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWlpQixLQUFBLEdBQUF4bEIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVeWxCLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFN2UsS0FBSztjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxJQUFBYyxNQUFBLENBQUF5RSxRQUFRLEVBQUNlLEtBQUssQ0FBQzhlLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1lBRWxFO1lBQ0EsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUNuUyxRQUFRLENBQUNsVCxRQUFRLENBQUNZLElBQUksQ0FBQyxFQUFFO2NBQ2xFLE1BQU04RCxPQUFPLEdBQUc2QixLQUFLLENBQUMrZSxxQkFBcUI7Y0FDM0MsT0FBT3RrQixLQUFBLENBQUFiLGFBQUEsQ0FBQ3VFLE9BQU87Z0JBQUM2QixLQUFLLEVBQUVBLEtBQUssQ0FBQzhlO2NBQWEsRUFBSTs7WUFHL0M7WUFDQTtZQUVBLE9BQU9ya0IsS0FBQSxDQUFBYixhQUFBLENBQUNnbEIsS0FBQSxDQUFBSSxXQUFXO2NBQUNoZixLQUFLLEVBQUVBLEtBQUssQ0FBQzhlLGFBQWE7Y0FBQSxHQUFNOWUsS0FBSyxDQUFDaWY7WUFBWSxFQUFJO1VBQzNFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBemtCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVU4bEIseUJBQXlCQSxDQUFBO1lBQ3hDLE1BQU07Y0FBRWxmO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3RDLElBQUFjLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ2UsS0FBSyxDQUFDOGUsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFFbEUsTUFBTTNnQixPQUFPLEdBQUc2QixLQUFLLENBQUMrZSxxQkFBcUI7WUFFM0MsT0FBT3RrQixLQUFBLENBQUFiLGFBQUEsQ0FBQ3VFLE9BQU87Y0FBQzZCLEtBQUssRUFBRUEsS0FBSyxDQUFDOGU7WUFBYSxFQUFJO1VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUF0a0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUE4SSxHQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBlLFdBQUEsR0FBQTFlLE9BQUE7VUFFQSxJQUFBK2xCLGdCQUFBLEdBQUEvbEIsT0FBQTtVQUlNLFNBQVVnaUIsZUFBZUEsQ0FBQztZQUFFOVY7VUFBTyxDQUFFO1lBQzFDLE1BQU07Y0FBRXRGLEtBQUs7Y0FBRXZHO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsSUFBQWMsTUFBQSxDQUFBeUUsUUFBUSxFQUFDZSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUNsRixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQzhjLFdBQUEsQ0FBQUUsWUFBWSxDQUFDOVMsS0FBSyxDQUFDMEssT0FBTyxFQUFFd1AsU0FBUyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzFHLElBQUE1a0IsTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzBjLFdBQUEsQ0FBQUUsWUFBWSxDQUFDOVMsS0FBSyxDQUFDLEVBQ3BCLE1BQU1uSyxPQUFPLENBQUMrYyxXQUFBLENBQUFFLFlBQVksQ0FBQzlTLEtBQUssRUFBRTBLLE9BQU8sRUFBRXdQLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUNsRixnQkFBZ0IsQ0FDaEI7WUFFRDtZQUNBLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQUs7Y0FDOUIsSUFBSXZrQixJQUFJLEtBQUssU0FBUyxFQUFFLE9BQU8sRUFBRTtjQUNqQyxPQUFPLDZDQUE2QztZQUNyRCxDQUFDO1lBRUQsT0FDQ0wsS0FBQSxDQUFBYixhQUFBLENBQUNrRCxNQUFBLENBQUE4SixLQUFLO2NBQUM5SCxJQUFJO2NBQUNoRixTQUFTLEVBQUV1bEIsaUJBQWlCLEVBQUU7Y0FBRS9aLE9BQU8sRUFBRUE7WUFBTyxHQUMzRDdLLEtBQUEsQ0FBQWIsYUFBQSxDQUFDbUQsV0FBQSxDQUFBd1Ysb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUxWCxJQUFJO2NBQ2Z5RSxPQUFPLEVBQUU7Z0JBQ1JxUSxPQUFPLEVBQ05uVixLQUFBLENBQUFiLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQW9kLGtCQUFrQjtrQkFDbEJyYSxTQUFTLEVBQUVqRixLQUFLLENBQUNrRixLQUFLLENBQUNDLFlBQVk7a0JBQ25DRyxPQUFPLEVBQUVBLE9BQU87a0JBQ2hCdkcsUUFBUSxFQUFFdUcsT0FBTztrQkFDakJyRixXQUFXLEVBQUU2WCxXQUFBLENBQUFFLFlBQVksQ0FBQy9YO2dCQUFXLEVBRXRDO2dCQUNEeEcsUUFBUSxFQUFFdUcsS0FBSyxDQUFDOGUsYUFBYSxHQUFHcmtCLEtBQUEsQ0FBQWIsYUFBQSxDQUFDdWxCLGdCQUFBLENBQUFOLGVBQWUsT0FBRyxHQUFHcGtCLEtBQUEsQ0FBQWIsYUFBQSxDQUFDc0ksR0FBQSxDQUFBZ1gsZ0JBQWdCO2tCQUFDeFMsR0FBRyxFQUFDLFdBQVc7a0JBQUNyRyxRQUFRO2dCQUFBO2VBQ2hHO2NBQ0QwQixXQUFXLEVBQUV0SCxLQUFBLENBQUFiLGFBQUEsQ0FBQ3NJLEdBQUEsQ0FBQWdYLGdCQUFnQjtnQkFBQ3hTLEdBQUcsRUFBQyxXQUFXO2dCQUFDckcsUUFBUTtjQUFBO1lBQUcsRUFDekQsQ0FDSztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBbEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVbW1CLFVBQVVBLENBQUM7WUFDMUJ4RixLQUFLLEdBQUcsS0FBSztZQUNiOWMsUUFBUTtZQUNSRztVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUUwSSxNQUFNO2NBQUVtTixRQUFRO2NBQUV6WixLQUFLO2NBQUV3RyxLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXpFLE1BQU15SCxNQUFNLEdBQUcsTUFBTWpGLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCOzs7OztjQU1BLElBQUksQ0FBQzhiLEtBQUssRUFBRTtnQkFDWCxNQUFNL1osS0FBSyxDQUFDa0YsS0FBSyxDQUFDbkwsVUFBVSxDQUFDcVYsR0FBRyxDQUFDNEMsR0FBRyxDQUFDdlksUUFBUSxDQUFDcVksRUFBRSxDQUFDLENBQUNwUixHQUFHLENBQUNvRixNQUFNLENBQUM7Z0JBQzdELE1BQU1yTSxRQUFRLENBQUNpSCxHQUFHLENBQUNvRixNQUFNLENBQUM7Z0JBQzFCOUYsS0FBSyxDQUFDaUIsSUFBSSxFQUFFO2dCQUNaZ1MsUUFBUSxDQUFDO2tCQUFFL00sT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQzs7Y0FHN0IsSUFBSTlJLFFBQVEsRUFBRUEsUUFBUSxFQUFFO1lBQ3pCLENBQUM7WUFDRCxNQUFNZ0MsS0FBSyxHQUFHO2NBQUVuQyxRQUFRLEVBQUUsQ0FBQzZJLE1BQU0sQ0FBQ0ksT0FBTyxJQUFJakosUUFBUTtjQUFFcUIsT0FBTyxFQUFFNkM7WUFBTSxDQUFFO1lBRXhFLE9BQ0NoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLa0M7WUFBSyxHQUNqQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUN2QixPQUFPLENBQUN1QyxJQUFJLENBQ3ZCO1VBRVgiLCJpZ25vcmVMaXN0IjpbXX0=