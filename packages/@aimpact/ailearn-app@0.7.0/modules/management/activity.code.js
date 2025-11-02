System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/editor.code", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/entity-attachments.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "clsx@2.1.1", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/refinament.code", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/dynamic-list", "pragmate-ui@1.0.8/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/dynamic-field", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_3 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Form) {
      dependency_4 = _pragmateUi108Form;
    }, function (_pragmateUi108Empty) {
      dependency_5 = _pragmateUi108Empty;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_pragmateUi108Modal) {
      dependency_7 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155EditorCode) {
      dependency_8 = _aimpactChatSdk155EditorCode;
    }, function (_beyondJsKernel0114Core) {
      dependency_9 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnApp070EntityAttachmentsCode) {
      dependency_10 = _aimpactAilearnApp070EntityAttachmentsCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_clsx2) {
      dependency_12 = _clsx2;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_13 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_14 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108List) {
      dependency_15 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ModulesManagementRefinamentCode) {
      dependency_16 = _aimpactAilearnApp070ModulesManagementRefinamentCode;
    }, function (_pragmateUi108Tabs) {
      dependency_17 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Icons) {
      dependency_18 = _pragmateUi108Icons;
    }, function (_pragmateUi108Collapsible) {
      dependency_19 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108DynamicList) {
      dependency_20 = _pragmateUi108DynamicList;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_21 = _pragmateUi108FormReactSelect;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsDynamicField) {
      dependency_23 = _aimpactAilearnApp070ComponentsDynamicField;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_24 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsKernel0114Routing) {
      dependency_25 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Toast) {
      dependency_26 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp070ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp070ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp070AssignmentsChat) {
      dependency_28 = _aimpactAilearnApp070AssignmentsChat;
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
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/chat-sdk/editor.code', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-app/entity-attachments.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['clsx', dependency_12], ['@aimpact/media-manager/uploader', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/dynamic-list', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['framer-motion', dependency_22], ['@aimpact/ailearn-app/components/dynamic-field', dependency_23], ['@aimpact/ailearn-app/main-layout.widget', dependency_24], ['@beyond-js/kernel/routing', dependency_25], ['pragmate-ui/toast', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['@aimpact/ailearn-app/assignments/chat', dependency_28]]);
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