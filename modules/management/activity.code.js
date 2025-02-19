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
        hash: 1168788475,
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
            const emptyText = size === 0 ? texts.contentTheory.materials.audio.emptyMaterial : texts.contentTheory.materials.audio.maxLength;
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
            }, emptyText))) : null), _react.default.createElement("div", null, has ? _react.default.createElement("div", {
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
        hash: 4163374942,
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
        hash: 1527610170,
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
        hash: 1779083481,
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
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              variant: "floating",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "modal__actions"
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
        hash: 3139479261,
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
              disabled: processing || !activity.readyToTest || !store.hasCredits,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJkYXRhc2V0IiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfZW1wdHkiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwidW5kZWZpbmVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZXNwb25zZSIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0yIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsImxpc3RlbkNoYW5nZXMiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBY3Rpdml0eSIsIkRFRkFVTFRfRVJST1IiLCJjbG9zZVRlc3QiLCJBY3Rpdml0eVByb2dyZXNzIiwiQXBwQnV0dG9uIiwiaGFzQ3JlZGl0cyIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIl9jaGF0IiwiYWN0aXZpdHlTdG9yZSIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcmV2aWV3LnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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