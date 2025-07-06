System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/empty", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/modal", "@aimpact/ailearn-app@0.4.2/components/hooks", "@aimpact/ailearn-app@0.4.2/modules/management/refinament.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/perfect-scrollbar", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tabs", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/collapsible", "pragmate-ui@1.0.2/dynamic-list", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.2/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/dynamic-field", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.2/toast", "@aimpact/ailearn-app@0.4.2/components/cover-image.code", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_4 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102Form) {
      dependency_5 = _pragmateUi102Form;
    }, function (_pragmateUi102Empty) {
      dependency_6 = _pragmateUi102Empty;
    }, function (_pragmateUi102Components) {
      dependency_7 = _pragmateUi102Components;
    }, function (_pragmateUi102Modal) {
      dependency_8 = _pragmateUi102Modal;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_9 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_aimpactAilearnApp042ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp042ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102PerfectScrollbar) {
      dependency_12 = _pragmateUi102PerfectScrollbar;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_13 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi102List) {
      dependency_14 = _pragmateUi102List;
    }, function (_pragmateUi102Tabs) {
      dependency_15 = _pragmateUi102Tabs;
    }, function (_pragmateUi102Icons) {
      dependency_16 = _pragmateUi102Icons;
    }, function (_pragmateUi102Collapsible) {
      dependency_17 = _pragmateUi102Collapsible;
    }, function (_pragmateUi102DynamicList) {
      dependency_18 = _pragmateUi102DynamicList;
    }, function (_beyondJsKernel0112Core) {
      dependency_19 = _beyondJsKernel0112Core;
    }, function (_pragmateUi102FormReactSelect) {
      dependency_20 = _pragmateUi102FormReactSelect;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_aimpactAilearnApp042ComponentsDynamicField) {
      dependency_22 = _aimpactAilearnApp042ComponentsDynamicField;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_23 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsKernel0112Routing) {
      dependency_24 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi102Toast) {
      dependency_25 = _pragmateUi102Toast;
    }, function (_aimpactAilearnApp042ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp042ComponentsCoverImageCode;
    }, function (_pragmateUi102Image) {
      dependency_27 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042AssignmentsChat) {
      dependency_28 = _aimpactAilearnApp042AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/hooks', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['framer-motion', dependency_21], ['@aimpact/ailearn-app/components/dynamic-field', dependency_22], ['@aimpact/ailearn-app/main-layout.widget', dependency_23], ['@beyond-js/kernel/routing', dependency_24], ['pragmate-ui/toast', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/ailearn-app/assignments/chat', dependency_28]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/modules/management/activity.code');
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
        hash: 412617283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 1714147485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 1571357808,
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
            const options = ['en', 'es', 'de'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const languages = {
              en: '/assets/images/languages/english.png',
              es: '/assets/images/languages/spanish.png',
              de: '/assets/images/languages/german.png'
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
        hash: 319236059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityControl = ActivityControl;
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 1622294847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssessmentActivityPreview = AssessmentActivityPreview;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 922329626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityPreview = ActivityPreview;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsInVuZGVmaW5lZCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJkZWxldGVNb2RhbCIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJjYW5jZWxDaGFuZ2VzIiwidW5wdWJsaXNoZWQiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZXNwb25zZSIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0yIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsImxpc3RlbkNoYW5nZXMiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsIm9yZGVyTGFiZWwiLCJzYXZlUmVvcmRlcmluZyIsInJlb3JkZXJBdHRycyIsIm11bHRpcGxlY2hvaWNlIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiX2FpQnV0dG9uIiwic2V0Tm90ZXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJFZGl0b3JUb29sYmFyIiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5IiwidGVzdEFjdGl2aXR5IiwiREVGQVVMVF9FUlJPUiIsImNsb3NlVGVzdCIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJBY3Rpdml0eVByZXZpZXciLCJzaG93UmVsYXRlZCIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJkZSIsIkltYWdlIiwiYWx0IiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsInByb2dyZXNzSXRlbXMiLCJwcm9ncmVzc0ZpZWxkcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2V4ZXJjaXNlIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2VkaXRvclRvb2xiYXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic3Bva2VuIiwid3JpdHRlbiIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIkFjdGl2aXR5Q29udHJvbCIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eUNvbXBvbmVudFZpZXciLCJDaGF0Q29udHJvbCIsImFjdGl2aXR5RGF0YSIsIkFzc2Vzc21lbnRBY3Rpdml0eVByZXZpZXciLCJfYWN0aXZpdHlDb250cm9sIiwiX2hvb2tzMiIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvZWRpdG9yLXRvb2xiYXIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3ByZXZpZXcvYWN0aXZpdHktY29udHJvbC50c3giLCIvdHMvcHJldmlldy9hc3Nlc3NtZW50LnRzeCIsIi90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFB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LGFBQUEsQ0FBQ3VJLEdBQUEsQ0FBQThXLGdCQUFnQjtnQkFBQ3pTLEdBQUcsRUFBQyxXQUFXO2dCQUFDL0YsUUFBUTtjQUFBO1lBQUcsRUFDekQsQ0FDSztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBdEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVb21CLFVBQVVBLENBQUM7WUFDMUIxRixLQUFLLEdBQUcsS0FBSztZQUNiN2MsUUFBUTtZQUNSRztVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUU2QyxNQUFNO2NBQUUrUyxRQUFRO2NBQUV4WixLQUFLO2NBQUV3RyxLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXpFLE1BQU15SCxNQUFNLEdBQUcsTUFBTWpGLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCOzs7OztjQU1BLElBQUksQ0FBQzZiLEtBQUssRUFBRTtnQkFDWCxNQUFNOVosS0FBSyxDQUFDbUYsS0FBSyxDQUFDcEwsVUFBVSxDQUFDbVYsR0FBRyxDQUFDNEMsR0FBRyxDQUFDclksUUFBUSxDQUFDbVksRUFBRSxDQUFDLENBQUN4USxHQUFHLENBQUNuQixNQUFNLENBQUM7Z0JBQzdELE1BQU14RyxRQUFRLENBQUMySCxHQUFHLENBQUNuQixNQUFNLENBQUM7Z0JBQzFCRCxLQUFLLENBQUNpQixJQUFJLEVBQUU7Z0JBQ1orUixRQUFRLENBQUM7a0JBQUVoTixPQUFPLEVBQUU7Z0JBQUssQ0FBRSxDQUFDOztjQUc3QixJQUFJNUksUUFBUSxFQUFFQSxRQUFRLEVBQUU7WUFDekIsQ0FBQztZQUNELE1BQU1nQyxLQUFLLEdBQUc7Y0FBRW5DLFFBQVEsRUFBRSxDQUFDZ0QsTUFBTSxDQUFDK0YsT0FBTyxJQUFJL0ksUUFBUTtjQUFFcUIsT0FBTyxFQUFFNkM7WUFBTSxDQUFFO1lBRXhFLE9BQ0NoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLa0M7WUFBSyxHQUNqQ1ksS0FBSyxDQUFDRSxXQUFXLENBQUN4QixPQUFPLENBQUN1QyxJQUFJLENBQ3ZCO1VBRVgiLCJpZ25vcmVMaXN0IjpbXX0=