System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_3 = _pragmateUi100Beta7Collapsible;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/collapsible', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26]]);
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
        hash: 4255868022,
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
              activity.setLayout(event.currentTarget.value);
            };
            const attrs = {
              value,
              icon,
              title: texts.activities.settings.layout.options[icon].title
            };
            if (value === activity.settings?.layout) attrs.className = 'selected';
            return _react.default.createElement("div", {
              className: "layout-icon__item",
              onClick: onChange
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
        hash: 1898541400,
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
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _progress = require("./progress");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
                setProcessing(true);
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                const response = await store.testActivity(activity.id);
                setProcessing(false);
                _routing.routing.pushState(`/assignments/${store.model.id}/${activity.type}/${activity.id}/chat/${response.activity.chat.id}?type=draft`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJIdG1sV3JhcHBlciIsIl9pY29uIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJzdG9yZSIsInZhbHVlcyIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFydGljbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsInNhdmUiLCJvbkNsaWNrQ2FuY2VsIiwib25TYXZlIiwic2V0IiwiRW1wdHlBcnRpY2xlTWF0ZXJpYWwiLCJvbk1hbnVhbCIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsImNsc0NoYXJhY3RlcnMiLCJsZW5ndGgiLCJGb3JtIiwib25TdWJtaXQiLCJUZXh0YXJlYSIsImF1dG9yZXNpemUiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJkYXRhc2V0IiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwidW5kZWZpbmVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl9wcm9ncmVzcyIsIl90b2FzdCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBY3Rpdml0eSIsInB1c2hTdGF0ZSIsImNoYXQiLCJERUZBVUxUX0VSUk9SIiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJwcm9ncmVzcyIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJ0b3RhbCIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2JyZWFkY3J1bWIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGViYXRlIiwic3Bva2VuIiwiZGVmaW5lUHJvcGVydHkiLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaWNvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci9icmVhZGNydW1iLnRzeCIsIi90cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL2hlYWRlci9sYW5ndWFnZS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JB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QVEsT0FBQSxDQUFBRSxRQUFBO1lBQXdCLEVBQ3BDLENBQ0csQ0FDb0I7VUFFN0I7Ozs7Ozs7Ozs7O1VDbERBOztVQUVBa0ssTUFBQSxDQUFBbVosY0FBQSxDQUFBdlosT0FBQTtZQUNBaEgsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUF4RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0UsV0FBQSxHQUFBbEUsT0FBQTtVQUVNLFNBQVUrakIsVUFBVUEsQ0FBQztZQUMxQmxFLEtBQUssR0FBRyxLQUFLO1lBQ2J6YixRQUFRO1lBQ1JHO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRXFDLE1BQU07Y0FBRW9TLFFBQVE7Y0FBRTVZLEtBQUs7Y0FBRXVHLEtBQUs7Y0FBRXRHO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFekUsTUFBTXdILE1BQU0sR0FBRyxNQUFNaEYsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUNzQyxlQUFlLEVBQUU7Y0FDdkI7Ozs7O2NBTUEsSUFBSSxDQUFDeWEsS0FBSyxFQUFFO2dCQUNYLE1BQU1sWixLQUFLLENBQUM4RSxLQUFLLENBQUM5SyxVQUFVLENBQUNzVSxHQUFHLENBQUM0QyxHQUFHLENBQUN4WCxRQUFRLENBQUNzWCxFQUFFLENBQUMsQ0FBQzVQLEdBQUcsQ0FBQ25CLE1BQU0sQ0FBQztnQkFDN0QsTUFBTXZHLFFBQVEsQ0FBQzBILEdBQUcsQ0FBQ25CLE1BQU0sQ0FBQztnQkFDMUJELEtBQUssQ0FBQ2lCLElBQUksRUFBRTtnQkFDWm9SLFFBQVEsQ0FBQztrQkFBRTFNLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUkvSCxRQUFRLEVBQUVBLFFBQVEsRUFBRTtZQUN6QixDQUFDO1lBQ0QsTUFBTWQsS0FBSyxHQUFHO2NBQUVXLFFBQVEsRUFBRSxDQUFDd0MsTUFBTSxDQUFDMEYsT0FBTyxJQUFJbEksUUFBUTtjQUFFTixPQUFPLEVBQUVnRTtZQUFNLENBQUU7WUFFeEUsT0FDQy9ILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwRCxXQUFBLENBQUFxQixNQUFNO2NBQUNsQixPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUtaO1lBQUssR0FDakNrRCxLQUFLLENBQUNFLFdBQVcsQ0FBQ2xCLE9BQU8sQ0FBQ2lDLElBQUksQ0FDdkI7VUFFWCIsImlnbm9yZUxpc3QiOltdfQ==