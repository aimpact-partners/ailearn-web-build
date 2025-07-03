System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.2/collapsible", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/empty", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/form/react-select", "pragmate-ui@1.0.2/modal", "@aimpact/ailearn-app@0.4.2/modules/management/refinament.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/perfect-scrollbar", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tabs", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/dynamic-list", "@beyond-js/kernel@0.1.12/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/dynamic-field", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.2/toast", "@aimpact/ailearn-app@0.4.2/components/cover-image.code", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/assignments/chat"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi102Collapsible) {
      dependency_3 = _pragmateUi102Collapsible;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_5 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102Form) {
      dependency_6 = _pragmateUi102Form;
    }, function (_pragmateUi102Empty) {
      dependency_7 = _pragmateUi102Empty;
    }, function (_pragmateUi102Components) {
      dependency_8 = _pragmateUi102Components;
    }, function (_pragmateUi102FormReactSelect) {
      dependency_9 = _pragmateUi102FormReactSelect;
    }, function (_pragmateUi102Modal) {
      dependency_10 = _pragmateUi102Modal;
    }, function (_aimpactAilearnApp042ModulesManagementRefinamentCode) {
      dependency_11 = _aimpactAilearnApp042ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102PerfectScrollbar) {
      dependency_13 = _pragmateUi102PerfectScrollbar;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_14 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi102List) {
      dependency_15 = _pragmateUi102List;
    }, function (_pragmateUi102Tabs) {
      dependency_16 = _pragmateUi102Tabs;
    }, function (_pragmateUi102Icons) {
      dependency_17 = _pragmateUi102Icons;
    }, function (_pragmateUi102DynamicList) {
      dependency_18 = _pragmateUi102DynamicList;
    }, function (_beyondJsKernel0112Core) {
      dependency_19 = _beyondJsKernel0112Core;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_aimpactAilearnApp042ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp042ComponentsDynamicField;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsKernel0112Routing) {
      dependency_23 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi102Toast) {
      dependency_24 = _pragmateUi102Toast;
    }, function (_aimpactAilearnApp042ComponentsCoverImageCode) {
      dependency_25 = _aimpactAilearnApp042ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_26 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Image) {
      dependency_27 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042AssignmentsChat) {
      dependency_28 = _aimpactAilearnApp042AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/collapsible', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['@aimpact/ailearn-app/components/hooks', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/ailearn-app/assignments/chat', dependency_28]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/modules/management/activity.code');
      ims = new Map();
      /***********************************************************
      INTERNAL MODULE: ./activities/character-talk/advanced-fields
      ***********************************************************/
      ims.set('./activities/character-talk/advanced-fields', {
        hash: 802138123,
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
        hash: 3060157737,
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
          var _layouts = require("./layouts");
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
        hash: 743749101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
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
        hash: 627428843,
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
            return _react.default.createElement("div", null, titles ? _react.default.createElement("h5", null, position ? _react.default.createElement("span", null, position, ". ") : null, title) : null, _react.default.createElement(Field, {
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
        hash: 4028738605,
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
            const pictureSrc = picture.src ? `${picture.src}?size=sm&${Date.now()}` : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJkYXRhc2V0IiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsInVuZGVmaW5lZCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsIm9uQmx1ciIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiRXhlcmNpc2VBY3Rpdml0eSIsIl9keW5hbWljIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiRHluYW1pY0NvbnRhaW5lciIsInByb3BzIiwiaW5kZXgiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsImludGVybmFsVmFsdWUiLCJzZXRJbnRlcm5hbFZhbHVlIiwid2FybiIsIkZpZWxkIiwiRnJlZUNvbnZlcnNhdGlvbkFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX2NvbnRleHQyIiwiX3F1ZXN0aW9ucyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJzZXRDb25maXJtIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvd25lciIsImNyZWRpdHMiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImlkIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJfZm9ybTIiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwicmV2ZXJ0IiwiZmluYWxWaWV3IiwibGlzdGVuQ2hhbmdlcyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJvcmRlckxhYmVsIiwic2F2ZVJlb3JkZXJpbmciLCJyZW9yZGVyQXR0cnMiLCJtdWx0aXBsZWNob2ljZSIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsIl9haUJ1dHRvbiIsInNldE5vdGVzIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3IiwiRWRpdG9yVG9vbGJhciIsInNob3dUZXN0TW9kYWwiLCJzZXRTaG93VGVzdE1vZGFsIiwidGVzdCIsInJlYWR5VG9UZXN0IiwidG9hc3QiLCJ3YXJuaW5nIiwidGVzdEFzc2Vzc21lbnRBY3Rpdml0eSIsInRlc3RBY3Rpdml0eSIsIkRFRkFVTFRfRVJST1IiLCJjbG9zZVRlc3QiLCJBY3Rpdml0eVByb2dyZXNzIiwiQXBwQnV0dG9uIiwiQWN0aXZpdHlQcmV2aWV3Iiwic2hvd1JlbGF0ZWQiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ1c2VTdG9yZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJkZSIsIkltYWdlIiwiYWx0IiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsInByb2dyZXNzSXRlbXMiLCJwcm9ncmVzc0ZpZWxkcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2V4ZXJjaXNlIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2VkaXRvclRvb2xiYXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic3Bva2VuIiwid3JpdHRlbiIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIkFjdGl2aXR5Q29udHJvbCIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eUNvbXBvbmVudFZpZXciLCJDaGF0Q29udHJvbCIsImFjdGl2aXR5RGF0YSIsIkFzc2Vzc21lbnRBY3Rpdml0eVByZXZpZXciLCJfYWN0aXZpdHlDb250cm9sIiwiX2hvb2tzMiIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvZWRpdG9yLXRvb2xiYXIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3ByZXZpZXcvYWN0aXZpdHktY29udHJvbC50c3giLCIvdHMvcHJldmlldy9hc3Nlc3NtZW50LnRzeCIsIi90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFB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