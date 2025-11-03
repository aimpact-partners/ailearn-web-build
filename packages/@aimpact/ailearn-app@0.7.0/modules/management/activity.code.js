System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/editor.code", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/entity-attachments.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "clsx@2.1.1", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/refinament.code", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/dynamic-list", "pragmate-ui@1.0.8/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/dynamic-field", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp070ComponentsIcons;
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
    }, function (_aimpactChatSdk155EditorCode) {
      dependency_9 = _aimpactChatSdk155EditorCode;
    }, function (_beyondJsKernel0114Core) {
      dependency_10 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnApp070EntityAttachmentsCode) {
      dependency_11 = _aimpactAilearnApp070EntityAttachmentsCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_clsx2) {
      dependency_13 = _clsx2;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_14 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_15 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108List) {
      dependency_16 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ModulesManagementRefinamentCode) {
      dependency_17 = _aimpactAilearnApp070ModulesManagementRefinamentCode;
    }, function (_pragmateUi108Tabs) {
      dependency_18 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Icons) {
      dependency_19 = _pragmateUi108Icons;
    }, function (_pragmateUi108Collapsible) {
      dependency_20 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108DynamicList) {
      dependency_21 = _pragmateUi108DynamicList;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_22 = _pragmateUi108FormReactSelect;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsDynamicField) {
      dependency_24 = _aimpactAilearnApp070ComponentsDynamicField;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_25 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsKernel0114Routing) {
      dependency_26 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Toast) {
      dependency_27 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp070ComponentsCoverImageCode) {
      dependency_28 = _aimpactAilearnApp070ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp070AssignmentsChat) {
      dependency_29 = _aimpactAilearnApp070AssignmentsChat;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/chat-sdk/editor.code', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/ailearn-app/entity-attachments.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['clsx', dependency_13], ['@aimpact/media-manager/uploader', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_17], ['pragmate-ui/tabs', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/dynamic-list', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['framer-motion', dependency_23], ['@aimpact/ailearn-app/components/dynamic-field', dependency_24], ['@aimpact/ailearn-app/main-layout.widget', dependency_25], ['@beyond-js/kernel/routing', dependency_26], ['pragmate-ui/toast', dependency_27], ['@aimpact/ailearn-app/components/cover-image.code', dependency_28], ['@aimpact/ailearn-app/assignments/chat', dependency_29]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/modules/management/activity.code');
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
        hash: 4044521543,
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
            const view = activity.specs.empty() ? 'empty' : 'specs';
            (0, _hooks.useStore)(activity, ['activity.saved', 'specs.cleaned']);
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container pt-0`
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
        hash: 2474456383,
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
              texts: {
                activities: {
                  sections: {
                    agent: texts
                  }
                }
              },
              activity
            } = (0, _context.useActivityContext)();
            (0, _hooks.useStore)(activity, ['change', 'activity.saved', 'specs.cleaned']);
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container pt-0`
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
            }, React.createElement("h3", null, texts.title), React.createElement("span", {
              className: "subtitle"
            }, texts.subtitle, React.createElement(_icons.AppIcon, {
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

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/article-form
      **************************************************************************/

      ims.set('./activities/content-theory/materials/article/article-form', {
        hash: 3594148959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleForm = ArticleForm;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _characterCounter = require("./character-counter");
          var _context = require("../../../../context");
          var _editor = require("@aimpact/chat-sdk/editor.code");
          var _core = require("@beyond-js/kernel/core");
          var _entityAttachments = require("@aimpact/ailearn-app/entity-attachments.code");
          function ArticleForm({
            onCancel
          }) {
            const {
              texts,
              store,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [showModal, setShowModal] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [promise, setPromise] = _react.default.useState(null);
            const {
              article: content
            } = activity.materials || '';
            const onChange = event => {
              activity.materials.set({
                article: event.target.value
              });
            };
            const onSave = async () => {
              setFetching(true);
              activity.materials.set({
                article: content
              });
              await activity.save();
              setFetching(false);
              onCancel();
            };
            const onClose = () => {
              setPromise(null);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_editor.WikiEditor, {
              name: "content",
              placeholder: materialTexts.form.article.placeholder,
              initialContent: content,
              onChange: onChange,
              loaders: {
                image: () => {
                  const response = new _core.PendingPromise();
                  setPromise(response);
                  setShowModal(true);
                  return response;
                }
              }
            }))), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_characterCounter.CharacterCounter, {
              content: content,
              maxLength: 4000,
              warningThreshold: 3900,
              errorThreshold: 3950,
              label: texts.contentTheory.materials.characters
            }), _react.default.createElement(_components.Button, {
              onClick: onCancel,
              variant: "primary",
              bordered: true,
              disabled: fetching
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: fetching
            }, globalTexts.actions.save)), showModal && _react.default.createElement(_entityAttachments.AttachmentsModal, {
              onClose: onClose,
              promise: promise,
              activity: activity,
              credits: store.model.credits,
              inEditor: true
            }));
          }
        }
      });

      /*****************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/article-preview
      *****************************************************************************/

      ims.set('./activities/content-theory/materials/article/article-preview', {
        hash: 1623250746,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticlePreview = ArticlePreview;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _confirmAction = require("../../confirm-action");
          var _context = require("../../../../context");
          function ArticlePreview({
            onEdit
          }) {
            const {
              store,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const onDelete = async () => {
              activity.materials.revert();
              activity.materials.clear();
              activity.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "material-content article-preview"
            }, _react.default.createElement(_markdown.Markdown, {
              content: activity.materials.article
            })), _react.default.createElement("footer", {
              className: " activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: onEdit,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.edit), _react.default.createElement(_confirmAction.ConfirmButton, {
              icon: "delete",
              callback: onDelete,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.delete)));
          }
        }
      });

      /*******************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/character-counter
      *******************************************************************************/

      ims.set('./activities/content-theory/materials/article/character-counter', {
        hash: 4257211407,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterCounter = CharacterCounter;
          var _react = require("react");
          var _clsx = require("clsx");
          function CharacterCounter({
            content,
            maxLength,
            warningThreshold,
            errorThreshold,
            label
          }) {
            const contentLength = content?.length || 0;
            const remaining = maxLength - contentLength;
            const clsCharacters = (0, _clsx.default)('characters__container', {
              'error-text': contentLength > errorThreshold,
              'warning-text': contentLength > warningThreshold && contentLength <= errorThreshold
            });
            return _react.default.createElement("div", {
              className: clsCharacters
            }, label, " ", remaining);
          }
        }
      });

      /***************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/gallery-modal
      ***************************************************************************/

      ims.set('./activities/content-theory/materials/article/gallery-modal', {
        hash: 214055911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AttachmentsModal = AttachmentsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _useUploader = require("./use-uploader");
          function AttachmentsModal({
            onClose,
            promise
          }) {
            const handleClose = () => {
              promise?.resolve();
              onClose();
            };
            const {
              triggerRef,
              dropZoneRef,
              files,
              uploading,
              progress,
              errors
            } = (0, _useUploader.useUploader)({
              multiple: true,
              validator: 'image',
              processor: 'image',
              options: {
                maxSize: 5
              }
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "main-attachments-content",
              onClose: handleClose,
              closeBackdrop: false
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, "Galeria de fotos")), _react.default.createElement("div", null, _react.default.createElement("button", {
              ref: triggerRef
            }, "Select Images"), _react.default.createElement("div", {
              ref: dropZoneRef,
              style: {
                border: '2px dashed #aaa',
                padding: 20,
                marginTop: 10
              }
            }, "Drop files here"), uploading && _react.default.createElement("p", null, "Loading... ", progress, "%"), errors && _react.default.createElement("p", {
              style: {
                color: 'red'
              }
            }, String(errors)), _react.default.createElement("div", {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 20
              }
            }, files.map(file => _react.default.createElement("div", {
              key: file.id,
              style: {
                marginRight: 10
              }
            }, file.previewUrl ? _react.default.createElement("img", {
              src: file.previewUrl,
              alt: file.name,
              style: {
                width: 100,
                height: 100,
                objectFit: 'cover'
              }
            }) : _react.default.createElement("div", {
              style: {
                width: 100,
                height: 100,
                background: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999'
              }
            }, "No Preview"), _react.default.createElement("p", {
              style: {
                fontSize: 12
              }
            }, file.name))))));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/index
      *******************************************************************/

      ims.set('./activities/content-theory/materials/article/index', {
        hash: 1511030040,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTab = ArticleTab;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../../../../context");
          var _emptyArticle = require("../empty-article");
          var _articlePreview = require("./article-preview");
          var _articleForm = require("./article-form");
          function ArticleTab() {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const toggle = () => setManual(!manual);
            (0, _hooks.useStore)(activity.materials, ['article.changed']);
            if (!manual && !activity.materials.article) {
              return _react.default.createElement(_emptyArticle.EmptyArticleMaterial, {
                name: "article",
                onManual: toggle
              });
            }
            if (!manual && activity.materials.article) {
              return _react.default.createElement(_articlePreview.ArticlePreview, {
                onEdit: toggle
              });
            }
            return _react.default.createElement(_articleForm.ArticleForm, {
              onCancel: toggle
            });
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/use-uploader
      **************************************************************************/

      ims.set('./activities/content-theory/materials/article/use-uploader', {
        hash: 246296229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uploader = require("@aimpact/media-manager/uploader");
          // react/use-uploader.ts

          /**
           * Minimal React hook for using the Uploader inside components.
           */
          function useUploader(specs) {
            const triggerRef = React.useRef(null);
            const dropZoneRef = React.useRef(null);
            // Create uploader instance once
            const [uploader] = React.useState(() => new _uploader.Uploader(specs));
            const store = (0, _hooks.useStore)(uploader);
            // Bind uploader with trigger/dropzone once mounted
            React.useEffect(() => {
              if (!triggerRef.current) return;
              uploader.create(triggerRef.current, dropZoneRef.current ?? undefined);
              return () => uploader.destroy();
            }, [uploader]);
            const count = store.files.total;
            const progress = store.files.total > 0 ? Math.round(store.files.items.length / store.files.total * 100) : 0;
            return {
              triggerRef,
              dropZoneRef,
              uploader,
              files: store.files.items,
              errors: store.errors,
              uploading: store.fetching,
              progress,
              count
            };
          }
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/attachments/index
      ***********************************************************************/

      ims.set('./activities/content-theory/materials/attachments/index', {
        hash: 2193127252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleAttachments = ArticleAttachments;
          var _react = require("react");
          var _entityAttachments = require("@aimpact/ailearn-app/entity-attachments.code");
          var _context = require("../../../../context");
          function ArticleAttachments() {
            const {
              texts,
              store,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_entityAttachments.Attachments, {
              activity: activity,
              credits: store.model.credits
            })));
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
        hash: 556477101,
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
            (0, _hooks.useStore)(activity.materials, ['audios.changed']);
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
        hash: 439957582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsForm = MaterialsForm;
          var _entityAttachments = require("@aimpact/ailearn-app/entity-attachments.code");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _modal = require("pragmate-ui/modal");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _context = require("../../../context");
          var _article = require("./article");
          var _attachments = require("./attachments");
          var _audios = require("./audios");
          var _header = require("./header");
          var _pane = require("./pane");
          var _useMaterials = require("./use-materials");
          function MaterialsForm({
            show,
            onClose
          }) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const materialTexts = texts.contentTheory.materials;
            const [showModal, setShowModal] = _react.default.useState(false);
            const [currentTab, setCurrentTab] = _react.default.useState('article');
            const toggleModal = () => setShowModal(!showModal);
            const {
              generator
            } = (0, _useMaterials.useMaterialActions)();
            (0, _hooks.useStore)(activity.materials);
            const [promise] = _react.default.useState(null);
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
              className: "activity-materials__modal",
              onClose: onClose
            }, _react.default.createElement(_header.MaterialsHeaderModal, null), _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "content-theory__tabs ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_article.ArticleTab, {
              onClose: onClose
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            }), _react.default.createElement(_audios.ContentTheoryAudio, null), _react.default.createElement(_attachments.ArticleAttachments, null))), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onConsume: onConsume,
              onGenerate: generator[currentTab]
            })), showModal && _react.default.createElement(_entityAttachments.AttachmentsModal, {
              onClose: () => setShowModal(false),
              promise: promise,
              activity: activity
            }));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/header
      ************************************************************/

      ims.set('./activities/content-theory/materials/header', {
        hash: 3938566574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsHeaderModal = MaterialsHeaderModal;
          var _react = require("react");
          var _context = require("../../../context");
          function MaterialsHeaderModal({}) {
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
        hash: 4024977879,
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
              texts,
              activity
            } = (0, _context.useActivityContext)();
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
        hash: 2726297560,
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
          var _editor = require("@aimpact/chat-sdk/editor.code");
          var _entityAttachments = require("@aimpact/ailearn-app/entity-attachments.code");
          var _core = require("@beyond-js/kernel/core");
          var _characterCounter = require("./article/character-counter");
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
            const [showModal, setShowModal] = _react.default.useState(false);
            const [promise, setPromise] = _react.default.useState(null);
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
            console.log(99, store.model.credits);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_editor.WikiEditor, {
              name: name,
              placeholder: texts.manual[name].textarea,
              initialContent: content,
              onChange: onChange,
              inEditor: true,
              loaders: {
                image: () => {
                  const response = new _core.PendingPromise();
                  setPromise(response);
                  setShowModal(true);
                  return response;
                }
              }
            }))), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_characterCounter.CharacterCounter, {
              content: content,
              maxLength: 4000,
              warningThreshold: 3900,
              errorThreshold: 3950,
              label: texts.contentTheory.materials.characters
            }), _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !content || fetching
            }, globalTexts.actions.save)), showModal && _react.default.createElement(_entityAttachments.AttachmentsModal, {
              onClose: onClose,
              promise: promise,
              activity: activity,
              credits: store.model.credits,
              inEditor: true
            }), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 3621247248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionsForm = DynamicQuestionsForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../context");
          var _actions = require("./actions");
          var _question = require("./question");
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
        hash: 3852644257,
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
            const listenChanges = () => setView(activity.specs.empty() ? 'empty' : view === 'empty' ? 'specs' : view);
            (0, _hooks.useStore)(activity.specs, ['specs.cleaned', 'activity.generated', 'activity.saved'], listenChanges);
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: "page-container pt-0"
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
        hash: 226272910,
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
              className: "page-container pt-0"
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
        hash: 1474020916,
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
            const onGenerate = args => {
              return activity.generatePicture(args, {
                sufix: texts.activities.generateImage.sufix
              });
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNwZWNzIiwiZW1wdHkiLCJ1c2VTdG9yZSIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkFwcEljb25CdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2VudGl0eUF0dGFjaG1lbnRzIiwiQXJ0aWNsZUZvcm0iLCJzdG9yZSIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwicHJvbWlzZSIsInNldFByb21pc2UiLCJhcnRpY2xlIiwiY29udGVudCIsInNldCIsInRhcmdldCIsIm9uU2F2ZSIsInNhdmUiLCJvbkNsb3NlIiwiRm9ybSIsIm9uU3VibWl0IiwiV2lraUVkaXRvciIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXJhY3RlckNvdW50ZXIiLCJtYXhMZW5ndGgiLCJ3YXJuaW5nVGhyZXNob2xkIiwiZXJyb3JUaHJlc2hvbGQiLCJjaGFyYWN0ZXJzIiwiQXR0YWNobWVudHNNb2RhbCIsImNyZWRpdHMiLCJtb2RlbCIsImluRWRpdG9yIiwiX21hcmtkb3duIiwiX2NvbmZpcm1BY3Rpb24iLCJBcnRpY2xlUHJldmlldyIsIm9uRWRpdCIsIm9uRGVsZXRlIiwicmV2ZXJ0IiwiY2xlYXIiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJfY2xzeCIsImNvbnRlbnRMZW5ndGgiLCJsZW5ndGgiLCJyZW1haW5pbmciLCJjbHNDaGFyYWN0ZXJzIiwiX3VzZVVwbG9hZGVyIiwiaGFuZGxlQ2xvc2UiLCJyZXNvbHZlIiwidHJpZ2dlclJlZiIsImRyb3Bab25lUmVmIiwiZmlsZXMiLCJ1cGxvYWRpbmciLCJwcm9ncmVzcyIsImVycm9ycyIsInVzZVVwbG9hZGVyIiwibXVsdGlwbGUiLCJ2YWxpZGF0b3IiLCJwcm9jZXNzb3IiLCJtYXhTaXplIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwicmVmIiwic3R5bGUiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY29sb3IiLCJTdHJpbmciLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXAiLCJmaWxlIiwia2V5IiwiaWQiLCJtYXJnaW5SaWdodCIsInByZXZpZXdVcmwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJhY2tncm91bmQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsIl9lbXB0eUFydGljbGUiLCJfYXJ0aWNsZVByZXZpZXciLCJfYXJ0aWNsZUZvcm0iLCJBcnRpY2xlVGFiIiwibWFudWFsIiwic2V0TWFudWFsIiwidG9nZ2xlIiwiRW1wdHlBcnRpY2xlTWF0ZXJpYWwiLCJvbk1hbnVhbCIsIl91cGxvYWRlciIsInVzZVJlZiIsInVwbG9hZGVyIiwiVXBsb2FkZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlIiwidW5kZWZpbmVkIiwiZGVzdHJveSIsImNvdW50IiwidG90YWwiLCJNYXRoIiwicm91bmQiLCJpdGVtcyIsIkFydGljbGVBdHRhY2htZW50cyIsIkF0dGFjaG1lbnRzIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJzaXplIiwiY2FuQmVDcmVhdGVkIiwiZW1wdHlUZXh0IiwiYXVkaW8iLCJlbXB0eU1hdGVyaWFsIiwidHlwZXMiLCJub0F1ZGlvIiwicGFyYW1zIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwidXNlQmluZGVyIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lbWVudCIsIm9iamVjdGl2ZSIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9hdHRhY2htZW50cyIsIl9hdWRpb3MiLCJfcGFuZSIsIk1hdGVyaWFsc0Zvcm0iLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJwdXNoIiwiVGFiIiwiZm9yRWFjaCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50Iiwib3ZlcmZsb3ciLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJkZWxldGVNb2RhbCIsIkljb25CdXR0b24iLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJ2YWx1ZXMiLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJzZXRDb250ZW50Iiwib25DbGlja0NhbmNlbCIsInVwZGF0ZWQiLCJvbk1vZGFsQ2FuY2VsIiwiY29uc29sZSIsImxvZyIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInRvZ2dsZU1hbnVhbCIsImUiLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJzZXRWaWV3Iiwib25CbHVyIiwib25MaXN0ZW4iLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwiVGV4dGFyZWEiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiRHluYW1pY0NvbnRhaW5lciIsInByb3BzIiwiaW5kZXgiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsImludGVybmFsVmFsdWUiLCJzZXRJbnRlcm5hbFZhbHVlIiwid2FybiIsIkZpZWxkIiwiRnJlZUNvbnZlcnNhdGlvbkFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU11bHRpcGxlQ2hvaWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJtdWx0aXBsZUNob2ljZSIsImFkZFF1ZXN0aW9uIiwiX2NvbnRleHQyIiwiX3F1ZXN0aW9ucyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJzZXRFcnJvcnMiLCJzZXRDb25maXJtIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiY2FuY2VsQ2hhbmdlcyIsInVucHVibGlzaGVkIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJvd25lciIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfYWN0aW9ucyIsIl9xdWVzdGlvbiIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJfZm9ybTIiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiZmluYWxWaWV3IiwibGlzdGVuQ2hhbmdlcyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJvcmRlciIsInNldE9yZGVyIiwidG9nZ2xlUmVvcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25SZW9yZGVyIiwib3JkZXJMYWJlbCIsInNhdmVSZW9yZGVyaW5nIiwicmVvcmRlckF0dHJzIiwibXVsdGlwbGVjaG9pY2UiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJNYW51YWxGb3JtRm9vdGVyIiwiRW1wdHlEeW5hbWljQ29udGVudCIsIl9keW5hbWljRmllbGQiLCJDdXN0b21EeW5hbWljRmllbGQiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0Iiwic2V0VXBkYXRlZCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiX2FpQnV0dG9uIiwic2V0Tm90ZXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJFZGl0b3JUb29sYmFyIiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5IiwidGVzdEFjdGl2aXR5IiwiREVGQVVMVF9FUlJPUiIsImNsb3NlVGVzdCIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJBY3Rpdml0eVByZXZpZXciLCJzaG93UmVsYXRlZCIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInN1Zml4IiwiZ2VuZXJhdGVJbWFnZSIsInBpY3R1cmUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwic2V0U2hvdyIsImVudHJpZXMiLCJsYW5nQ29kZSIsImxhbmdEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwicHJvZ3Jlc3NJdGVtcyIsInByb2dyZXNzRmllbGRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfZnJlZUNvbnZlcnNhdGlvbiIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZWRpdG9yVG9vbGJhciIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzcG9rZW4iLCJ3cml0dGVuIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jaGF0IiwiQWN0aXZpdHlDb250cm9sIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiQXNzZXNzbWVudEFjdGl2aXR5UHJldmlldyIsIl9hY3Rpdml0eUNvbnRyb2wiLCJhdmFpbGFibGUiLCJnZXRNb2RhbENsYXNzTmFtZSIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvYXJ0aWNsZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2FydGljbGUtcHJldmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9jaGFyYWN0ZXItY291bnRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9nYWxsZXJ5LW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL3VzZS11cGxvYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXR0YWNobWVudHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2VkaXRvci10b29sYmFyLnRzeCIsIi90cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL2hlYWRlci9sYW5ndWFnZS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9wcmV2aWV3L2FjdGl2aXR5LWNvbnRyb2wudHN4IiwiL3RzL3ByZXZpZXcvYXNzZXNzbWVudC50c3giLCIvdHMvcHJldmlldy9pbmRleC50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTRWLGdCQUFnQjtnQkFBQ2xZLEdBQUcsRUFBQyxXQUFXO2dCQUFDeEUsUUFBUTtjQUFBO1lBQUcsRUFDekQsQ0FDSztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBakgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXdELFdBQUEsR0FBQXhELE9BQUE7VUFFTSxTQUFVOHBCLFVBQVVBLENBQUM7WUFDMUJ2RixLQUFLLEdBQUcsS0FBSztZQUNiN2dCLFFBQVE7WUFDUkc7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFaVAsTUFBTTtjQUFFNEssUUFBUTtjQUFFdGQsS0FBSztjQUFFcUcsS0FBSztjQUFFcEc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNa0gsTUFBTSxHQUFHLE1BQU03RSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQ2dDLGVBQWUsRUFBRTtjQUN2Qjs7Ozs7Y0FNQSxJQUFJLENBQUM0ZixLQUFLLEVBQUU7Z0JBQ1gsTUFBTTlkLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ2pJLFVBQVUsQ0FBQzJLLEdBQUcsQ0FBQ21SLEdBQUcsQ0FBQ3BjLFFBQVEsQ0FBQ29MLEVBQUUsQ0FBQyxDQUFDbkUsR0FBRyxDQUFDd0wsTUFBTSxDQUFDO2dCQUM3RCxNQUFNelMsUUFBUSxDQUFDaUgsR0FBRyxDQUFDd0wsTUFBTSxDQUFDO2dCQUMxQnJNLEtBQUssQ0FBQ2dCLElBQUksRUFBRTtnQkFDWmlXLFFBQVEsQ0FBQztrQkFBRXZLLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUl0UCxRQUFRLEVBQUVBLFFBQVEsRUFBRTtZQUN6QixDQUFDO1lBQ0QsTUFBTWdDLEtBQUssR0FBRztjQUFFbkMsUUFBUSxFQUFFLENBQUNvUCxNQUFNLENBQUNLLE9BQU8sSUFBSXpQLFFBQVE7Y0FBRXNCLE9BQU8sRUFBRXdDO1lBQU0sQ0FBRTtZQUV4RSxPQUNDekgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQXVCLE1BQU07Y0FBQ3BCLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS2tDO1lBQUssR0FDakNZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDdEIsT0FBTyxDQUFDcUMsSUFBSSxDQUN2QjtVQUVYIiwiaWdub3JlTGlzdCI6W119