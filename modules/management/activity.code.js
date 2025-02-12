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
        hash: 3603136999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "mt-15 mb-100 advanced__fields"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-subheader advanced-section"
            }, _react.default.createElement("div", {
              className: "flex-container"
            }, _react.default.createElement("div", {
              className: "bg-neutral"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "advancedSettings"
            })), _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.advanced.subtitle))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced"
            }))))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/

      ims.set('./activities/character-talk/index', {
        hash: 1474604232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          function CharacterTalkActivity() {
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
            }, React.createElement(_form.Textarea, {
              variant: "floating",
              name: "description",
              label: texts.activities.description.label,
              onBlur: onBlur,
              onChange: onChange,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }), React.createElement(_form2.SpecsForm, {
              toggleView: toggleView,
              type: "general"
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
            }, React.createElement(_form2.SpecsForm, {
              toggleView: toggleView
            })), React.createElement(_advancedFields.AdvancedFields, null))));
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
        hash: 3568453591,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement("section", {
              className: "layout__selection"
            }, _react.default.createElement("div", {
              className: "activity__section-subheader"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "5. ", texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description))), _react.default.createElement("div", {
              className: "layout-types-container"
            }, _react.default.createElement(Icon, {
              value: "full-content-layout",
              icon: "fullContentLayout"
            }), _react.default.createElement(Icon, {
              value: "main-content-layout",
              icon: "mainContentLayout"
            }), _react.default.createElement(Icon, {
              value: "main-chat-layout",
              icon: "mainChatLayout"
            }))), _react.default.createElement("div", {
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
        hash: 2868233692,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
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
            }));
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
        hash: 1642340529,
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
              value
            } = props;
            const {
              specs
            } = activity;
            const {
              label,
              placeholder,
              title,
              position
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
            console.log(0.1, type, Field);
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
        hash: 2950336836,
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
                placeholder,
                position
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              return _react.default.createElement(Field, {
                onChange: onChange,
                variant: "floating",
                position: position,
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
        hash: 1556109825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          function SpokenActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
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
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "page-container"
            }, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.Textarea, {
              name: "description",
              label: texts.activities.description.label,
              onChange: onChange,
              variant: "floating",
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }), React.createElement(_form2.SpecsForm, {
              type: "general"
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
            }, React.createElement(_form2.SpecsForm, null)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2NvbGxhcHNpYmxlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQXBwSWNvbiIsImljb24iLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2Zvcm0yIiwiX2FkdmFuY2VkRmllbGRzIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Iiwib25CbHVyIiwic2F2ZSIsIm9uTGlzdGVuIiwidXNlQmluZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJUZXh0YXJlYSIsInZhcmlhbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJhZ2VudCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsIlNwZWNzIiwiX21hdGVyaWFscyIsImV2ZW50Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldExheW91dCIsIkljb24iLCJhdHRycyIsInNldHRpbmdzIiwibGF5b3V0Iiwib3B0aW9ucyIsIkFwcEljb25CdXR0b24iLCJvbkNsaWNrIiwiTWF0ZXJpYWxzVmlldyIsInRpdGxlcyIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJfZmllbGQiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJzZXRVcGRhdGVkIiwiQWN0aXZpdHlGaWVsZCIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJvbkNsaWNrQ2FuY2VsIiwib25TYXZlIiwiRW1wdHlBcnRpY2xlTWF0ZXJpYWwiLCJvbk1hbnVhbCIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsImNsc0NoYXJhY3RlcnMiLCJsZW5ndGgiLCJGb3JtIiwib25TdWJtaXQiLCJhdXRvcmVzaXplIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJtb2RlbCIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9xdWVzdGlvbnMiLCJfY29udGV4dDIiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZXNwb25zZSIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsImZpbmFsVmlldyIsImxpc3RlbkNoYW5nZXMiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJNYW51YWxGb3JtRm9vdGVyIiwiRW1wdHlEeW5hbWljQ29udGVudCIsIl9keW5hbWljRmllbGQiLCJDdXN0b21EeW5hbWljRmllbGQiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfcHJvZ3Jlc3MiLCJfdG9hc3QiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJwdXNoU3RhdGUiLCJjaGF0IiwiREVGQVVMVF9FUlJPUiIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfaW1hZ2UiLCJzZXRTaG93IiwiZW4iLCJlcyIsIkltYWdlIiwiYWx0IiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVLLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ04sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUFFLFFBQUEsUUFDQ1QsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FB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