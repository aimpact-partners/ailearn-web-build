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
        hash: 840314725,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJkYXRhc2V0IiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwiY2FuQmVDcmVhdGVkIiwidHlwZXMiLCJhdWRpbyIsIm5vQXVkaW8iLCJtYXhMZW5ndGgiLCJBdWRpb1BsYXllciIsInVybCIsImV4cG9ydHMiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpb1ZpZXciLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJkZWxldGVBdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsIl9yZWZpbmFtZW50Iiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsImdlbmVyYXRlQXJ0aWNsZSIsInRvZ2dsZU1vZGFsIiwiUmVmaW5lbWVudEFjdGl2aXR5TW9kYWwiLCJyZXF1aXJlZCIsIm9uQ29uc3VtZSIsIm1vZGVsIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lbWVudCIsIm9iamVjdGl2ZSIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5Iiwic2F2ZUFjdGl2aXR5Iiwib25CbHVyIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIl9keW5hbWljIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiRHluYW1pY0NvbnRhaW5lciIsInByb3BzIiwiaW5kZXgiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsImludGVybmFsVmFsdWUiLCJzZXRJbnRlcm5hbFZhbHVlIiwid2FybiIsIkZpZWxkIiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX3F1ZXN0aW9ucyIsIl9jb250ZXh0MiIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJpdGVtIiwidXNlRWZmZWN0IiwiY29udGFpbmVyIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3Iiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIl9jaGF0IiwiYWN0aXZpdHlTdG9yZSIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcmV2aWV3LnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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