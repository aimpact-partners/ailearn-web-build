System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/assignments/chat"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_2 = _pragmateUi100Beta7Collapsible;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_4 = _beyondJsReact18Widgets113Hooks;
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
    }, function (_aimpactAilearnApp031AssignmentsChat) {
      dependency_26 = _aimpactAilearnApp031AssignmentsChat;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['pragmate-ui/collapsible', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/main-layout.widget', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['pragmate-ui/toast', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25], ['@aimpact/ailearn-app/assignments/chat', dependency_26]]);
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
        hash: 1501015105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldCIsImNvbnRhaW5lckNscyIsIkh0bWxXcmFwcGVyIiwiX2ljb24iLCJfbWFya2Rvd24iLCJfZW1wdHlBcnRpY2xlIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsInN0b3JlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwic2F2ZSIsIm9uQ2xpY2tDYW5jZWwiLCJvblNhdmUiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJtb2RlbCIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3Iiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJfY2hhdCIsImFjdGl2aXR5U3RvcmUiLCJDaGF0Q29udHJvbCIsImFjdGl2aXR5RGF0YSIsIlByb2dyZXNzSXRlbSIsIm9wdGlvbmFsIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInByb2dyZXNzIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInRvdGFsIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJldmlldy50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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