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
        hash: 1538745068,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
                if (type === 'attachments') {
                  tabs.push(_react.default.createElement(_tabs.Tab, {
                    name: type,
                    key: type
                  }, _react.default.createElement(_ui.TourStep, {
                    name: "attachments",
                    texts: {
                      attachments: {
                        description: 'Adjunta imagenes a tu contenido',
                        title: 'Adjunta imagenes a tu contenido'
                      }
                    }
                  }, materialTexts.types[type])));
                } else {
                  tabs.push(_react.default.createElement(_tabs.Tab, {
                    name: type,
                    key: type
                  }, materialTexts.types[type]));
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNwZWNzIiwiZW1wdHkiLCJ1c2VTdG9yZSIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkFwcEljb25CdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93Iiwib25DYW5jZWwiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2VudGl0eUF0dGFjaG1lbnRzIiwiQXJ0aWNsZUZvcm0iLCJzdG9yZSIsImdsb2JhbFRleHRzIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwicHJvbWlzZSIsInNldFByb21pc2UiLCJhcnRpY2xlIiwiY29udGVudCIsInNldCIsInRhcmdldCIsIm9uU2F2ZSIsInNhdmUiLCJvbkNsb3NlIiwiRm9ybSIsIm9uU3VibWl0IiwiV2lraUVkaXRvciIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkNoYXJhY3RlckNvdW50ZXIiLCJtYXhMZW5ndGgiLCJ3YXJuaW5nVGhyZXNob2xkIiwiZXJyb3JUaHJlc2hvbGQiLCJjaGFyYWN0ZXJzIiwiQXR0YWNobWVudHNNb2RhbCIsIl9tYXJrZG93biIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVByZXZpZXciLCJvbkVkaXQiLCJvbkRlbGV0ZSIsInJldmVydCIsImNsZWFyIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiX2Nsc3giLCJjb250ZW50TGVuZ3RoIiwibGVuZ3RoIiwicmVtYWluaW5nIiwiY2xzQ2hhcmFjdGVycyIsIl91c2VVcGxvYWRlciIsImhhbmRsZUNsb3NlIiwicmVzb2x2ZSIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsImZpbGVzIiwidXBsb2FkaW5nIiwicHJvZ3Jlc3MiLCJlcnJvcnMiLCJ1c2VVcGxvYWRlciIsIm11bHRpcGxlIiwidmFsaWRhdG9yIiwicHJvY2Vzc29yIiwibWF4U2l6ZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInJlZiIsInN0eWxlIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImNvbG9yIiwiU3RyaW5nIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFwIiwiZmlsZSIsImtleSIsImlkIiwibWFyZ2luUmlnaHQiLCJwcmV2aWV3VXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJfZW1wdHlBcnRpY2xlIiwiX2FydGljbGVQcmV2aWV3IiwiX2FydGljbGVGb3JtIiwiQXJ0aWNsZVRhYiIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJfdXBsb2FkZXIiLCJ1c2VSZWYiLCJ1cGxvYWRlciIsIlVwbG9hZGVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNyZWF0ZSIsInVuZGVmaW5lZCIsImRlc3Ryb3kiLCJjb3VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwiaXRlbXMiLCJBcnRpY2xlQXR0YWNobWVudHMiLCJBdHRhY2htZW50cyIsImNyZWRpdHMiLCJtb2RlbCIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsInVzZUJpbmRlciIsIk9iamVjdCIsImtleXMiLCJkZWxldGVBdWRpb3MiLCJMaXN0IiwiY29udHJvbCIsIl9yZWZpbmFtZW50Iiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsImdlbmVyYXRlQXJ0aWNsZSIsInRvZ2dsZU1vZGFsIiwiUmVmaW5lbWVudEFjdGl2aXR5TW9kYWwiLCJyZXF1aXJlZCIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsInJlZmluZW1lbnQiLCJvYmplY3RpdmUiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfYXR0YWNobWVudHMiLCJfYXVkaW9zIiwiX3BhbmUiLCJNYXRlcmlhbHNGb3JtIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImZvckVhY2giLCJUb3VyU3RlcCIsImF0dGFjaG1lbnRzIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInZhbHVlcyIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInNldENvbnRlbnQiLCJvbkNsaWNrQ2FuY2VsIiwidXBkYXRlZCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ0b2dnbGVNYW51YWwiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsInNldFZpZXciLCJvbkJsdXIiLCJvbkxpc3RlbiIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiRXhlcmNpc2VBY3Rpdml0eSIsIl9keW5hbWljIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJUZXh0YXJlYSIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJGcmVlQ29udmVyc2F0aW9uQWN0aXZpdHkiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfY29udGV4dDIiLCJfcXVlc3Rpb25zIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsInNldEVycm9ycyIsInNldENvbmZpcm0iLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJpdGVtIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJjYW5jZWxDaGFuZ2VzIiwidW5wdWJsaXNoZWQiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9hY3Rpb25zIiwiX3F1ZXN0aW9uIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvbkJpbmRlciIsImdldERhdGEiLCJvblJlb3JkZXIiLCJvcmRlckxhYmVsIiwic2F2ZVJlb3JkZXJpbmciLCJyZW9yZGVyQXR0cnMiLCJtdWx0aXBsZWNob2ljZSIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJfYWlCdXR0b24iLCJzZXROb3RlcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfdG9hc3QiLCJfcHJvZ3Jlc3MiLCJfcHJldmlldyIsIkVkaXRvclRvb2xiYXIiLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwic3VmaXgiLCJnZW5lcmF0ZUltYWdlIiwicGljdHVyZSIsImRhdGUiLCJEYXRlIiwibm93IiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJzZXRTaG93IiwiZW50cmllcyIsImxhbmdDb2RlIiwibGFuZ0RhdGEiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJwcm9ncmVzc0l0ZW1zIiwicHJvZ3Jlc3NGaWVsZHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9leGVyY2lzZSIsIl9mcmVlQ29udmVyc2F0aW9uIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9lZGl0b3JUb29sYmFyIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwb2tlbiIsIndyaXR0ZW4iLCJkZWJhdGUiLCJleGVyY2lzZSIsImRlZmluZVByb3BlcnR5IiwiX2NoYXQiLCJBY3Rpdml0eUNvbnRyb2wiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlDb21wb25lbnRWaWV3IiwiQ2hhdENvbnRyb2wiLCJhY3Rpdml0eURhdGEiLCJBc3Nlc3NtZW50QWN0aXZpdHlQcmV2aWV3IiwiX2FjdGl2aXR5Q29udHJvbCIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9hcnRpY2xlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvYXJ0aWNsZS1wcmV2aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2NoYXJhY3Rlci1jb3VudGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2dhbGxlcnktbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvdXNlLXVwbG9hZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdHRhY2htZW50cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvZWRpdG9yLXRvb2xiYXIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3ByZXZpZXcvYWN0aXZpdHktY29udHJvbC50c3giLCIvdHMvcHJldmlldy9hc3Nlc3NtZW50LnRzeCIsIi90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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