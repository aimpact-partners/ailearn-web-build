System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_5 = _beyondJsReact18Widgets113Hooks;
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
    }, function (_aimpactAilearnApp031AssignmentsChat) {
      dependency_27 = _aimpactAilearnApp031AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/collapsible', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26], ['@aimpact/ailearn-app/assignments/chat', dependency_27]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/activity.code');
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
        hash: 3421326282,
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

      /********************************************************
      INTERNAL MODULE: ./activities/content-theory/layouts/icon
      ********************************************************/

      ims.set('./activities/content-theory/layouts/icon', {
        hash: 3180072490,
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
              console.log('selected', event.currentTarget.dataset.value);
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
        hash: 1102205853,
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
            }, _react.default.createElement("h5", null, "4. ", texts.contentTheory.materials.title), _react.default.createElement("div", {
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
        hash: 3428500303,
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
        hash: 1524982468,
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
              position
            } = props;
            const {
              specs
            } = activity;
            const {
              label,
              placeholder,
              title
            } = texts.specs[name];
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
        hash: 650963966,
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
              //the structure has and advance settings defining if is required or not, for example.
              if (typeof structure[name] === 'string' || typeof structure[name] === 'object' && structure[name].type !== 'array') {
                return _react.default.createElement(_field.SpecsField, {
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
        hash: 4174602183,
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
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
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
        hash: 3839412643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _routing = require("@beyond-js/kernel/routing");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../context");
          var _progress = require("./progress");
          var _preview = require("./preview");
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
                await store.testActivity(activity.id);
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
            }, !['multiple-choice', 'spoken', 'assessment'].includes(activity.type) && _react.default.createElement(_icons.AppButton, {
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

      /********************************
      INTERNAL MODULE: ./header/preview
      ********************************/

      ims.set('./header/preview', {
        hash: 1431666526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityPreview = ActivityPreview;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _context = require("../context");
          function ActivityPreview({
            onClose
          }) {
            const {
              store
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = React.useState(true);
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
            }, 'test.activity.changed');
            return React.createElement(_modal.Modal, {
              show: true,
              className: "activity-modal__form activity-preview-modal",
              onClose: onClose
            }, !fetching ? React.createElement(_chat.ChatControl, {
              store: store.activityStore,
              ...store.activityData
            }) : React.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldCIsImNvbnRhaW5lckNscyIsIkh0bWxXcmFwcGVyIiwiX2ljb24iLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInN0b3JlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwic2F2ZSIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJtb2RlbCIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3Iiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJfY2hhdCIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5RGF0YSIsIlByb2dyZXNzSXRlbSIsIm9wdGlvbmFsIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInByb2dyZXNzIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInRvdGFsIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJldmlldy50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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