System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/editor", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/modules/draft/gallery.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "clsx@2.1.1", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/refinament.code", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/dynamic-list", "pragmate-ui@1.0.8/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/dynamic-field", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/assignments/chat"], function (_export, _context3) {
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
    }, function (_aimpactChatSdk155Editor) {
      dependency_9 = _aimpactChatSdk155Editor;
    }, function (_beyondJsKernel0114Core) {
      dependency_10 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnApp070ModulesDraftGalleryCode) {
      dependency_11 = _aimpactAilearnApp070ModulesDraftGalleryCode;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/chat-sdk/editor', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/ailearn-app/modules/draft/gallery.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['clsx', dependency_13], ['@aimpact/media-manager/uploader', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_17], ['pragmate-ui/tabs', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/dynamic-list', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['framer-motion', dependency_23], ['@aimpact/ailearn-app/components/dynamic-field', dependency_24], ['@aimpact/ailearn-app/main-layout.widget', dependency_25], ['@beyond-js/kernel/routing', dependency_26], ['pragmate-ui/toast', dependency_27], ['@aimpact/ailearn-app/components/cover-image.code', dependency_28], ['@aimpact/ailearn-app/assignments/chat', dependency_29]]);
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
        hash: 1629728558,
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
        hash: 943316508,
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
          var _editor = require("@aimpact/chat-sdk/editor");
          var _core = require("@beyond-js/kernel/core");
          var _gallery = require("@aimpact/ailearn-app/modules/draft/gallery.code");
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
            }, globalTexts.actions.save)), showModal && _react.default.createElement(_gallery.GalleryModal, {
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
        hash: 1371141415,
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
              className: "material-content"
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
        hash: 3281164740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GalleryModal = GalleryModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _useUploader = require("./use-uploader");
          function GalleryModal({
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
              className: "modal-form--gallery",
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
        hash: 1688627829,
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
        hash: 4227632733,
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
              store,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
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
        hash: 1200387711,
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
          var _editor = require("@aimpact/chat-sdk/editor");
          var _gallery = require("@aimpact/ailearn-app/modules/draft/gallery.code");
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
            }, globalTexts.actions.save)), showModal && _react.default.createElement(_gallery.GalleryModal, {
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
        hash: 2647077232,
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
            const onGenerate = args => activity.generatePicture(args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2dhbGxlcnkiLCJBcnRpY2xlRm9ybSIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsImFydGljbGUiLCJjb250ZW50Iiwic2V0IiwidGFyZ2V0Iiwib25TYXZlIiwic2F2ZSIsIm9uQ2xvc2UiLCJGb3JtIiwib25TdWJtaXQiLCJXaWtpRWRpdG9yIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiaW5pdGlhbENvbnRlbnQiLCJsb2FkZXJzIiwiaW1hZ2UiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhcmFjdGVyQ291bnRlciIsIm1heExlbmd0aCIsIndhcm5pbmdUaHJlc2hvbGQiLCJlcnJvclRocmVzaG9sZCIsImNoYXJhY3RlcnMiLCJHYWxsZXJ5TW9kYWwiLCJfbWFya2Rvd24iLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVQcmV2aWV3Iiwib25FZGl0Iiwib25EZWxldGUiLCJyZXZlcnQiLCJjbGVhciIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsIl9jbHN4IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInJlbWFpbmluZyIsImNsc0NoYXJhY3RlcnMiLCJfdXNlVXBsb2FkZXIiLCJoYW5kbGVDbG9zZSIsInJlc29sdmUiLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsInZhbGlkYXRvciIsInByb2Nlc3NvciIsIm1heFNpemUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiX2VtcHR5QXJ0aWNsZSIsIl9hcnRpY2xlUHJldmlldyIsIl9hcnRpY2xlRm9ybSIsIkFydGljbGVUYWIiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1zIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJzaXplIiwiY2FuQmVDcmVhdGVkIiwiZW1wdHlUZXh0IiwiYXVkaW8iLCJlbXB0eU1hdGVyaWFsIiwidHlwZXMiLCJub0F1ZGlvIiwicGFyYW1zIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJmb3JFYWNoIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInZhbHVlcyIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInNldENvbnRlbnQiLCJvbkNsaWNrQ2FuY2VsIiwidXBkYXRlZCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ0b2dnbGVNYW51YWwiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsIm9uQmx1ciIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiRXhlcmNpc2VBY3Rpdml0eSIsIl9keW5hbWljIiwiZmllbGRUeXBlcyIsImlucHV0IiwiSW5wdXQiLCJUZXh0YXJlYSIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJGcmVlQ29udmVyc2F0aW9uQWN0aXZpdHkiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfY29udGV4dDIiLCJfcXVlc3Rpb25zIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsInNldEVycm9ycyIsInNldENvbmZpcm0iLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJpdGVtIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJjYW5jZWxDaGFuZ2VzIiwidW5wdWJsaXNoZWQiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXJrQ29ycmVjdCIsIkR5bmFtaWNIZWFkZXIiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfYWN0aW9ucyIsIl9xdWVzdGlvbiIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsIm5ld1ZhbHVlIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJfZm9ybTIiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiZmluYWxWaWV3IiwibGlzdGVuQ2hhbmdlcyIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJvcmRlciIsInNldE9yZGVyIiwidG9nZ2xlUmVvcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25SZW9yZGVyIiwib3JkZXJMYWJlbCIsInNhdmVSZW9yZGVyaW5nIiwicmVvcmRlckF0dHJzIiwibXVsdGlwbGVjaG9pY2UiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0IiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJNYW51YWxGb3JtRm9vdGVyIiwiRW1wdHlEeW5hbWljQ29udGVudCIsIl9keW5hbWljRmllbGQiLCJDdXN0b21EeW5hbWljRmllbGQiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0Iiwic2V0VXBkYXRlZCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiX2FpQnV0dG9uIiwic2V0Tm90ZXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJFZGl0b3JUb29sYmFyIiwic2hvd1Rlc3RNb2RhbCIsInNldFNob3dUZXN0TW9kYWwiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5IiwidGVzdEFjdGl2aXR5IiwiREVGQVVMVF9FUlJPUiIsImNsb3NlVGVzdCIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJBcHBCdXR0b24iLCJBY3Rpdml0eVByZXZpZXciLCJzaG93UmVsYXRlZCIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwic2V0U2hvdyIsImVudHJpZXMiLCJsYW5nQ29kZSIsImxhbmdEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwicHJvZ3Jlc3NJdGVtcyIsInByb2dyZXNzRmllbGRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfZXhlcmNpc2UiLCJfZnJlZUNvbnZlcnNhdGlvbiIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfZWRpdG9yVG9vbGJhciIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzcG9rZW4iLCJ3cml0dGVuIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jaGF0IiwiQWN0aXZpdHlDb250cm9sIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiQXNzZXNzbWVudEFjdGl2aXR5UHJldmlldyIsIl9hY3Rpdml0eUNvbnRyb2wiLCJhdmFpbGFibGUiLCJnZXRNb2RhbENsYXNzTmFtZSIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2xheW91dHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvYXJ0aWNsZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2FydGljbGUtcHJldmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9jaGFyYWN0ZXItY291bnRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9nYWxsZXJ5LW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL3VzZS11cGxvYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZXhlcmNpc2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2ZyZWUtY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvZWRpdG9yLXRvb2xiYXIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3ByZXZpZXcvYWN0aXZpdHktY29udHJvbC50c3giLCIvdHMvcHJldmlldy9hc3Nlc3NtZW50LnRzeCIsIi90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFj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O2tCQUFDckUsUUFBUTtnQkFBQTtlQUNoRztjQUNEYyxXQUFXLEVBQUU1RyxLQUFBLENBQUFiLGFBQUEsQ0FBQ29OLEdBQUEsQ0FBQTBWLGdCQUFnQjtnQkFBQzlYLEdBQUcsRUFBQyxXQUFXO2dCQUFDckUsUUFBUTtjQUFBO1lBQUcsRUFDekQsQ0FDSztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVd3BCLFVBQVVBLENBQUM7WUFDMUJyRixLQUFLLEdBQUcsS0FBSztZQUNidGdCLFFBQVE7WUFDUkc7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFMk8sTUFBTTtjQUFFMkssUUFBUTtjQUFFbGQsS0FBSztjQUFFd0csS0FBSztjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNcUgsTUFBTSxHQUFHLE1BQU03RSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQytCLGVBQWUsRUFBRTtjQUN2Qjs7Ozs7Y0FNQSxJQUFJLENBQUNzZixLQUFLLEVBQUU7Z0JBQ1gsTUFBTXZkLEtBQUssQ0FBQzRKLEtBQUssQ0FBQzdQLFVBQVUsQ0FBQzJLLEdBQUcsQ0FBQytRLEdBQUcsQ0FBQ2hjLFFBQVEsQ0FBQ29MLEVBQUUsQ0FBQyxDQUFDaEUsR0FBRyxDQUFDa0wsTUFBTSxDQUFDO2dCQUM3RCxNQUFNdFMsUUFBUSxDQUFDb0gsR0FBRyxDQUFDa0wsTUFBTSxDQUFDO2dCQUMxQi9MLEtBQUssQ0FBQ2dCLElBQUksRUFBRTtnQkFDWjBWLFFBQVEsQ0FBQztrQkFBRXRLLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUloUCxRQUFRLEVBQUVBLFFBQVEsRUFBRTtZQUN6QixDQUFDO1lBQ0QsTUFBTWdDLEtBQUssR0FBRztjQUFFbkMsUUFBUSxFQUFFLENBQUM4TyxNQUFNLENBQUNLLE9BQU8sSUFBSW5QLFFBQVE7Y0FBRXFCLE9BQU8sRUFBRXlDO1lBQU0sQ0FBRTtZQUV4RSxPQUNDNUgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS2tDO1lBQUssR0FDakNZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBTyxDQUFDc0MsSUFBSSxDQUN2QjtVQUVYIiwiaWdub3JlTGlzdCI6W119