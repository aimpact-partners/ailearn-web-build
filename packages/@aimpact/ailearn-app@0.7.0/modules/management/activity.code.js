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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
        hash: 2576010707,
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
              activity: activity
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
        hash: 1336298128,
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
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
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
              activity: activity
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNwZWNzIiwiZW1wdHkiLCJ1c2VTdG9yZSIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkFwcEljb25CdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2VudGl0eUF0dGFjaG1lbnRzIiwiQXJ0aWNsZUZvcm0iLCJzdG9yZSIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwicHJvbWlzZSIsInNldFByb21pc2UiLCJhcnRpY2xlIiwiY29udGVudCIsInNldCIsInRhcmdldCIsIm9uU2F2ZSIsInNhdmUiLCJvbkNsb3NlIiwiRm9ybSIsIm9uU3VibWl0IiwiV2lraUVkaXRvciIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXJhY3RlckNvdW50ZXIiLCJtYXhMZW5ndGgiLCJ3YXJuaW5nVGhyZXNob2xkIiwiZXJyb3JUaHJlc2hvbGQiLCJjaGFyYWN0ZXJzIiwiQXR0YWNobWVudHNNb2RhbCIsIl9tYXJrZG93biIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVByZXZpZXciLCJvbkVkaXQiLCJvbkRlbGV0ZSIsInJldmVydCIsImNsZWFyIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiX2Nsc3giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwicmVtYWluaW5nIiwiY2xzQ2hhcmFjdGVycyIsIl91c2VVcGxvYWRlciIsImhhbmRsZUNsb3NlIiwicmVzb2x2ZSIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsImZpbGVzIiwidXBsb2FkaW5nIiwicHJvZ3Jlc3MiLCJlcnJvcnMiLCJ1c2VVcGxvYWRlciIsIm11bHRpcGxlIiwidmFsaWRhdG9yIiwicHJvY2Vzc29yIiwibWF4U2l6ZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInJlZiIsInN0eWxlIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImNvbG9yIiwiU3RyaW5nIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFwIiwiZmlsZSIsImtleSIsImlkIiwibWFyZ2luUmlnaHQiLCJwcmV2aWV3VXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJfZW1wdHlBcnRpY2xlIiwiX2FydGljbGVQcmV2aWV3IiwiX2FydGljbGVGb3JtIiwiQXJ0aWNsZVRhYiIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJfdXBsb2FkZXIiLCJ1c2VSZWYiLCJ1cGxvYWRlciIsIlVwbG9hZGVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNyZWF0ZSIsInVuZGVmaW5lZCIsImRlc3Ryb3kiLCJjb3VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwiaXRlbXMiLCJBcnRpY2xlQXR0YWNobWVudHMiLCJBdHRhY2htZW50cyIsImNyZWRpdHMiLCJtb2RlbCIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsInVzZUJpbmRlciIsIk9iamVjdCIsImtleXMiLCJkZWxldGVBdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsIl9yZWZpbmFtZW50Iiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsImdlbmVyYXRlQXJ0aWNsZSIsInRvZ2dsZU1vZGFsIiwiUmVmaW5lbWVudEFjdGl2aXR5TW9kYWwiLCJyZXF1aXJlZCIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfYXR0YWNobWVudHMiLCJfYXVkaW9zIiwiX3BhbmUiLCJNYXRlcmlhbHNGb3JtIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImZvckVhY2giLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJSZWZpbmVtZW50TW9kYWwiLCJvbkNyZWF0ZSIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsIm92ZXJmbG93IiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiZGVsZXRlTW9kYWwiLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwidmFsdWVzIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwic2V0Q29udGVudCIsIm9uQ2xpY2tDYW5jZWwiLCJ1cGRhdGVkIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInRvZ2dsZU1hbnVhbCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5Iiwic2F2ZUFjdGl2aXR5Iiwic2V0VmlldyIsIm9uQmx1ciIsIm9uTGlzdGVuIiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJFeGVyY2lzZUFjdGl2aXR5IiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsIlRleHRhcmVhIiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3Iiwic2V0RXJyb3JzIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJtb2RhbFF1ZXN0aW9ucyIsImRlc2NyaXBjdGlvbiIsInJlZnMiLCJmb2N1cyIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX2FjdGlvbnMiLCJfcXVlc3Rpb24iLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0yIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImZpbmFsVmlldyIsImxpc3RlbkNoYW5nZXMiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uUmVvcmRlciIsIm9yZGVyTGFiZWwiLCJzYXZlUmVvcmRlcmluZyIsInJlb3JkZXJBdHRycyIsIm11bHRpcGxlY2hvaWNlIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsInNldFVwZGF0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsImkiLCJEeW5hbWljSWNvbkJ1dHRvbiIsInBvc2l0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJTcGVjc0ZpZWxkIiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsIl9haUJ1dHRvbiIsInNldE5vdGVzIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInNlbGVjdENoYW5nZSIsIkFjdGl2aXR5Q29udGV4dCIsIl90b2FzdCIsIl9wcm9ncmVzcyIsIl9wcmV2aWV3IiwiRWRpdG9yVG9vbGJhciIsInNob3dUZXN0TW9kYWwiLCJzZXRTaG93VGVzdE1vZGFsIiwidGVzdCIsInJlYWR5VG9UZXN0IiwidG9hc3QiLCJ3YXJuaW5nIiwidGVzdEFzc2Vzc21lbnRBY3Rpdml0eSIsInRlc3RBY3Rpdml0eSIsIkRFRkFVTFRfRVJST1IiLCJjbG9zZVRlc3QiLCJBY3Rpdml0eVByb2dyZXNzIiwiQXBwQnV0dG9uIiwiQWN0aXZpdHlQcmV2aWV3Iiwic2hvd1JlbGF0ZWQiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsImFyZ3MiLCJnZW5lcmF0ZVBpY3R1cmUiLCJzdWZpeCIsImdlbmVyYXRlSW1hZ2UiLCJwaWN0dXJlIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJwaWN0dXJlU3JjIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsInN1cHBvcnRlZExhbmd1YWdlcyIsInN1cHBvcnRlZCIsInNldFNob3ciLCJlbnRyaWVzIiwibGFuZ0NvZGUiLCJsYW5nRGF0YSIsIlByb2dyZXNzSXRlbSIsIm9wdGlvbmFsIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsInByb2dyZXNzSXRlbXMiLCJwcm9ncmVzc0ZpZWxkcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2V4ZXJjaXNlIiwiX2ZyZWVDb252ZXJzYXRpb24iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2VkaXRvclRvb2xiYXIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic3Bva2VuIiwid3JpdHRlbiIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIkFjdGl2aXR5Q29udHJvbCIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eUNvbXBvbmVudFZpZXciLCJDaGF0Q29udHJvbCIsImFjdGl2aXR5RGF0YSIsIkFzc2Vzc21lbnRBY3Rpdml0eVByZXZpZXciLCJfYWN0aXZpdHlDb250cm9sIiwiYXZhaWxhYmxlIiwiZ2V0TW9kYWxDbGFzc05hbWUiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaWNvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2FydGljbGUtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9hcnRpY2xlLXByZXZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvY2hhcmFjdGVyLWNvdW50ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvZ2FsbGVyeS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS91c2UtdXBsb2FkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F0dGFjaG1lbnRzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci9lZGl0b3ItdG9vbGJhci50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvcHJldmlldy9hY3Rpdml0eS1jb250cm9sLnRzeCIsIi90cy9wcmV2aWV3L2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ByZXZpZXcvaW5kZXgudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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