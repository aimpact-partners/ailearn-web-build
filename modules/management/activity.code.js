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
        hash: 2538275920,
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
        hash: 2664981611,
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
        hash: 259797456,
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
        hash: 2616966894,
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
            const [fetching, setFetching] = React.useState(store.fetching && !store?.activityStore?.ready);
            (0, _hooks.useBinder)([store], () => {
              console.log(store.fetching, !store?.activityStore?.ready);
              setFetching(store.fetching && !store?.activityStore?.ready);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldCIsImNvbnRhaW5lckNscyIsIkh0bWxXcmFwcGVyIiwiX2ljb24iLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInN0b3JlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwic2F2ZSIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJtb2RlbCIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3Iiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIl9jaGF0IiwiYWN0aXZpdHlTdG9yZSIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcmV2aWV3LnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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