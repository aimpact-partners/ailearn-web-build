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
        hash: 1303666217,
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
              console.trace(20, content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2dhbGxlcnkiLCJBcnRpY2xlRm9ybSIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsImFydGljbGUiLCJjb250ZW50Iiwic2V0IiwidGFyZ2V0Iiwib25TYXZlIiwiY29uc29sZSIsInRyYWNlIiwic2F2ZSIsIm9uQ2xvc2UiLCJGb3JtIiwib25TdWJtaXQiLCJXaWtpRWRpdG9yIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiaW5pdGlhbENvbnRlbnQiLCJsb2FkZXJzIiwiaW1hZ2UiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhcmFjdGVyQ291bnRlciIsIm1heExlbmd0aCIsIndhcm5pbmdUaHJlc2hvbGQiLCJlcnJvclRocmVzaG9sZCIsImNoYXJhY3RlcnMiLCJHYWxsZXJ5TW9kYWwiLCJfbWFya2Rvd24iLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVQcmV2aWV3Iiwib25FZGl0Iiwib25EZWxldGUiLCJyZXZlcnQiLCJjbGVhciIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsIl9jbHN4IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInJlbWFpbmluZyIsImNsc0NoYXJhY3RlcnMiLCJfdXNlVXBsb2FkZXIiLCJoYW5kbGVDbG9zZSIsInJlc29sdmUiLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsInZhbGlkYXRvciIsInByb2Nlc3NvciIsIm1heFNpemUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiX2VtcHR5QXJ0aWNsZSIsIl9hcnRpY2xlUHJldmlldyIsIl9hcnRpY2xlRm9ybSIsIkFydGljbGVUYWIiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1zIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJzaXplIiwiY2FuQmVDcmVhdGVkIiwiZW1wdHlUZXh0IiwiYXVkaW8iLCJlbXB0eU1hdGVyaWFsIiwidHlwZXMiLCJub0F1ZGlvIiwicGFyYW1zIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJmb3JFYWNoIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInZhbHVlcyIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInNldENvbnRlbnQiLCJvbkNsaWNrQ2FuY2VsIiwidXBkYXRlZCIsIm9uTW9kYWxDYW5jZWwiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInRvZ2dsZU1hbnVhbCIsImUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3Iiwic2V0RXJyb3JzIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9hY3Rpb25zIiwiX3F1ZXN0aW9uIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvbkJpbmRlciIsImdldERhdGEiLCJvblJlb3JkZXIiLCJvcmRlckxhYmVsIiwic2F2ZVJlb3JkZXJpbmciLCJyZW9yZGVyQXR0cnMiLCJtdWx0aXBsZWNob2ljZSIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJfYWlCdXR0b24iLCJzZXROb3RlcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfdG9hc3QiLCJfcHJvZ3Jlc3MiLCJfcHJldmlldyIsIkVkaXRvclRvb2xiYXIiLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsImRhdGUiLCJEYXRlIiwibm93IiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJzZXRTaG93IiwiZW50cmllcyIsImxhbmdDb2RlIiwibGFuZ0RhdGEiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJwcm9ncmVzc0l0ZW1zIiwicHJvZ3Jlc3NGaWVsZHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9leGVyY2lzZSIsIl9mcmVlQ29udmVyc2F0aW9uIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9lZGl0b3JUb29sYmFyIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwb2tlbiIsIndyaXR0ZW4iLCJkZWJhdGUiLCJleGVyY2lzZSIsImRlZmluZVByb3BlcnR5IiwiX2NoYXQiLCJBY3Rpdml0eUNvbnRyb2wiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlDb21wb25lbnRWaWV3IiwiQ2hhdENvbnRyb2wiLCJhY3Rpdml0eURhdGEiLCJBc3Nlc3NtZW50QWN0aXZpdHlQcmV2aWV3IiwiX2FjdGl2aXR5Q29udHJvbCIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi8vdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pY29uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9hcnRpY2xlLWZvcm0udHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2FydGljbGUtcHJldmlldy50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvY2hhcmFjdGVyLWNvdW50ZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2dhbGxlcnktbW9kYWwudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS91c2UtdXBsb2FkZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9leGVyY2lzZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiLy90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vYWR2YW5jZWQtZmllbGRzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9lbXB0eS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZmllbGQudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiLy90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi8vdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiLy90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi8vdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiLy90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2hlYWRlci9lZGl0b3ItdG9vbGJhci50c3giLCIvL3RzL2hlYWRlci9pbmRleC50c3giLCIvL3RzL2hlYWRlci9sYW5ndWFnZS50c3giLCIvL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi8vdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2UudHMvIiwiLy90cy9wcmV2aWV3L2FjdGl2aXR5LWNvbnRyb2wudHN4IiwiLy90cy9wcmV2aWV3L2Fzc2Vzc21lbnQudHN4IiwiLy90cy9wcmV2aWV3L2luZGV4LnRzeCIsIi8vdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVoRCxPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0MsR0FDaERYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUk5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBTSxFQUN0RGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQVEsQ0FDckQsQ0FDRCxFQUNOaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN2QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFDLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVXlCLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVyQixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBcUIsR0FDcENXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUNsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBQ1ZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QyxNQUFBLEdBQUF2QyxPQUFBO1VBS00sU0FBVXdDLGVBQWVBLENBQUM7WUFBRUM7VUFBVSxDQUFFO1lBQzdDLE9BQ0MxQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsTUFBQSxDQUFBRyxLQUFLLE9BQUcsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUEzQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBMkMsUUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxVQUFBLEdBQUE1QyxPQUFBO1VBRU0sU0FBVUcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVoRCxNQUFNdUMsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLGFBQWEsQ0FDbENDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUNsQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUN6QkMsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO2NBQy9CTixLQUFLLENBQUNFLGFBQWEsQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDO2NBQzdDaEQsUUFBUSxDQUFDaUQsU0FBUyxDQUFDUixLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO1lBQzlDLENBQUM7WUFFRCxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFVBQUEsQ0FBQVksYUFBYSxPQUFHLEVBQ2pCekQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21DLFFBQUEsQ0FBQWMsbUJBQW1CLE9BQUcsRUFDdkIxRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0MsR0FDaERYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUk5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBTSxFQUN0RGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQVEsQ0FDckQsQ0FDRCxFQUNOaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN2QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFuQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQWdCTSxTQUFVNEQsYUFBYUEsQ0FBQztZQUM3QmxELFNBQVM7WUFDVG1ELFFBQVEsR0FBRyxLQUFLO1lBQ2hCQyxPQUFPLEdBQUcsU0FBUztZQUNuQnhCLElBQUk7WUFDSnlCLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxFQUFFLEdBQUcsUUFBUTtZQUNiQyxRQUFRO1lBQ1JwRCxLQUFLO1lBQ0xxRCxXQUFXO1lBQ1hDLE1BQU0sR0FBRyxRQUFRO1lBQ2pCQztVQUFRLENBQ3NCO1lBQzlCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR3hFLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNLENBQUM0QyxLQUFLLEVBQUVwRSxLQUFLLENBQUMsR0FBRyxJQUFBZ0IsTUFBQSxDQUFBcUQsUUFBUSxFQUFDLDJCQUEyQixDQUFDO1lBRTVELElBQUksQ0FBQ0QsS0FBSyxFQUFFO1lBRVoxRCxLQUFLLEdBQUdBLEtBQUssSUFBSVYsS0FBSyxDQUFDc0UsS0FBSyxDQUFDTixNQUFNLENBQUMsQ0FBQ3RELEtBQUs7WUFDMUNxRCxXQUFXLEdBQUdBLFdBQVcsSUFBSS9ELEtBQUssQ0FBQ3NFLEtBQUssQ0FBQ04sTUFBTSxDQUFDLENBQUNELFdBQVc7WUFFNUQsTUFBTVEsVUFBVSxHQUFHQSxDQUFBLEtBQU1KLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDdkMsTUFBTU0sYUFBYSxHQUFHOUIsS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkJGLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNRyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLE1BQU1kLFFBQVEsRUFBRTtjQUNoQlcsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1JLE9BQU8sR0FBR2QsRUFBRSxLQUFLLE1BQU0sR0FBRzlDLE1BQUEsQ0FBQTZELGFBQWEsR0FBR3JCLFdBQUEsQ0FBQXNCLE1BQU07WUFDdEQsT0FDQ2xGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1RSxPQUFPO2NBQ1ByRSxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJ3RCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJMLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkMsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCeEIsSUFBSSxFQUFFQSxJQUFJO2NBQ1Z4QixLQUFLLEVBQUVpRCxPQUFPO2NBQ2RtQixPQUFPLEVBQUVOO1lBQWEsR0FFckJQLFFBQVEsQ0FDQSxFQUNUQyxJQUFJLElBQ0p2RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUNaQyxVQUFVLEVBQUU7Z0JBQ1hDLEtBQUssRUFBRWpGLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ0MsT0FBTztnQkFDNUJ6QixPQUFPLEVBQUU7ZUFDVDtjQUNEMEIsU0FBUyxFQUFFO2dCQUNWSCxLQUFLLEVBQUVqRixLQUFLLENBQUNrRixPQUFPLENBQUNHLE1BQU07Z0JBQzNCM0IsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCSSxRQUFRLEVBQUU7ZUFDVjtjQUNEd0IsSUFBSTtjQUNKWixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJhLFFBQVEsRUFBRWhCO1lBQVUsR0FFcEI1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTSxLQUFLLENBQU0sRUFDaEJmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUkyRCxXQUFXLENBQUssQ0FDZixDQUVQLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkEsSUFBQS9DLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBRU0sU0FBVTRGLHFCQUFxQkEsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU07Y0FDTHhGLEtBQUssRUFBRTtnQkFDTk8sVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7b0JBQUV3QixLQUFLLEVBQUVoQztrQkFBSztnQkFBRTtjQUMxQixDQUNEO2NBQ0RDO1lBQVEsQ0FDUixHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsSUFBQWMsTUFBQSxDQUFBeUUsUUFBUSxFQUFDeEYsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRWpFLE9BQ0NnQixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBcUIsR0FDcENXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUNsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBQ1ZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNVLEtBQUssQ0FBTSxFQUN0Qk8sS0FBQSxDQUFBYixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCTixLQUFLLENBQUNXLFFBQVEsRUFDZk0sS0FBQSxDQUFBYixhQUFBLENBQUNXLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUM0QixJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUVUakIsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUyxPQUFHLENBQ1IsRUFDTkssS0FBQSxDQUFBYixhQUFBLENBQUNlLGVBQUEsQ0FBQXBCLGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBZ0IsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVThGLFVBQVVBLENBQUM7WUFBRXZDLEtBQUs7WUFBRWpCO1VBQUksQ0FBRTtZQUN6QyxNQUFNO2NBQUVsQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFRaEQsTUFBTXVDLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRUMsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO2NBQy9HTixLQUFLLENBQUNFLGFBQWEsQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDO2NBRTdDaEQsUUFBUSxDQUFDaUQsU0FBUyxDQUFDUixLQUFLLENBQUNFLGFBQWEsQ0FBQytDLE9BQU8sQ0FBQ3hDLEtBQUssQ0FBQztZQUN0RCxDQUFDO1lBRUQsTUFBTXlDLEtBQUssR0FBYztjQUN4QnpDLEtBQUs7Y0FDTGpCLElBQUk7Y0FDSnhCLEtBQUssRUFBRVYsS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0QsSUFBSSxDQUFDLENBQUN4QjthQUN0RDtZQUVELElBQUlzRixZQUFZLEdBQUcsb0JBQW9CN0MsS0FBSyxLQUFLbEQsUUFBUSxDQUFDNEYsUUFBUSxFQUFFQyxNQUFNLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUMvRixJQUFJM0MsS0FBSyxLQUFLbEQsUUFBUSxDQUFDNEYsUUFBUSxFQUFFQyxNQUFNLEVBQUVGLEtBQUssQ0FBQ3RGLFNBQVMsR0FBRyxRQUFRO1lBRW5FLE9BQ0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRTBGLFlBQVk7Y0FBRWxCLE9BQU8sRUFBRXJDLFFBQVE7Y0FBQSxjQUFjVTtZQUFLLEdBQ2pFeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBNkQsYUFBYTtjQUFBLEdBQUtnQjtZQUFLLEVBQUksRUFFNUJqRyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBMEMsV0FBVztjQUFDM0YsU0FBUyxFQUFDO1lBQUksR0FBRU4sS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0QsSUFBSSxDQUFDLENBQUM2QixXQUFXLENBQWUsQ0FDakc7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXBFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzRyxLQUFBLEdBQUF0RyxPQUFBO1VBRU0sU0FBVXlELG1CQUFtQkEsQ0FBQTtZQUNsQyxNQUFNO2NBQUVyRCxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNkIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUNPLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDcEYsS0FBSyxDQUFNLEVBQ3BEZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDL0IsV0FBVyxDQUFRLENBQ3RELENBQ0QsRUFDTnBFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQVIsVUFBVTtjQUFDdkMsS0FBSyxFQUFDLHFCQUFxQjtjQUFDakIsSUFBSSxFQUFDO1lBQW1CLEVBQUcsRUFDbkV2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEYsS0FBQSxDQUFBUixVQUFVO2NBQUN2QyxLQUFLLEVBQUMscUJBQXFCO2NBQUNqQixJQUFJLEVBQUM7WUFBbUIsRUFBRyxFQUNuRXZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM4RixLQUFBLENBQUFSLFVBQVU7Y0FBQ3ZDLEtBQUssRUFBQyxrQkFBa0I7Y0FBQ2pCLElBQUksRUFBQztZQUFnQixFQUFHLENBQ3hELENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBcUIsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RyxpQkFBQSxHQUFBdkcsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF3RyxPQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQXlHLEtBQUEsR0FBQXpHLE9BQUE7VUFFQSxJQUFBMEcsUUFBQSxHQUFBMUcsT0FBQTtVQUtNLFNBQVUyRyxXQUFXQSxDQUFDO1lBQUVoQjtVQUFRLENBQXFCO1lBQzFELE1BQU07Y0FBRXZGLEtBQUs7Y0FBRXdHLEtBQUs7Y0FBRXZHO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdkQsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTUUsYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUN1RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQ3lGLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd2SCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBNkIsSUFBSSxDQUFDO1lBQzlFLE1BQU07Y0FBRTJGLE9BQU8sRUFBRUM7WUFBTyxDQUFFLEdBQUduSCxRQUFRLENBQUMyRyxTQUFTLElBQUksRUFBRTtZQUVyRCxNQUFNbkUsUUFBUSxHQUFJQyxLQUE2QyxJQUFVO2NBQ3hFekMsUUFBUSxDQUFDMkcsU0FBUyxDQUFDUyxHQUFHLENBQUM7Z0JBQUVGLE9BQU8sRUFBRXpFLEtBQUssQ0FBQzRFLE1BQU0sQ0FBQ25FO2NBQUssQ0FBRSxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNb0UsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBMEI7Y0FDeENQLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsRUFBRUwsT0FBTyxDQUFDO2NBRTFCbkgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDUyxHQUFHLENBQUM7Z0JBQUVGLE9BQU8sRUFBRUM7Y0FBTyxDQUFFLENBQUM7Y0FDNUMsTUFBTW5ILFFBQVEsQ0FBQ3lILElBQUksRUFBRTtjQUNyQlYsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQnpCLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNb0MsT0FBTyxHQUFHQSxDQUFBLEtBQVc7Y0FDMUJULFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEJKLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0NuSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE4SCxJQUFJO2NBQUN0SCxTQUFTLEVBQUMsOEJBQThCO2NBQUN1SCxRQUFRLEVBQUVOO1lBQU0sR0FDOUQ1SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnRyxPQUFBLENBQUEwQixVQUFVO2NBQ1YvRixJQUFJLEVBQUMsU0FBUztjQUNkZ0csV0FBVyxFQUFFckIsYUFBYSxDQUFDc0IsSUFBSSxDQUFDYixPQUFPLENBQUNZLFdBQVc7Y0FDbkRFLGNBQWMsRUFBRWIsT0FBTztjQUN2QjNFLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnlGLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFQSxDQUFBLEtBQUs7a0JBQ1gsTUFBTUMsUUFBUSxHQUFHLElBQUkvQixLQUFBLENBQUFnQyxjQUFjLEVBQUU7a0JBQ3JDbkIsVUFBVSxDQUFDa0IsUUFBUSxDQUFDO2tCQUNwQnRCLFlBQVksQ0FBQyxJQUFJLENBQUM7a0JBRWxCLE9BQU9zQixRQUFRO2dCQUNoQjs7WUFDQSxFQUNBLENBQ0csQ0FDQSxFQUVQekksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsaUJBQUEsQ0FBQW1DLGdCQUFnQjtjQUNoQmxCLE9BQU8sRUFBRUEsT0FBTztjQUNoQm1CLFNBQVMsRUFBRSxJQUFJO2NBQ2ZDLGdCQUFnQixFQUFFLElBQUk7Y0FDdEJDLGNBQWMsRUFBRSxJQUFJO2NBQ3BCeEQsS0FBSyxFQUFFakYsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUM4QjtZQUFVLEVBQzlDLEVBQ0YvSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDQyxPQUFPLEVBQUVTLFFBQVE7Y0FBRTdCLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7Y0FBQ0wsUUFBUSxFQUFFc0Q7WUFBUSxHQUN0RU4sV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXlDLE1BQU07Y0FBRTlELFFBQVEsRUFBRXNEO1lBQVEsR0FDM0ROLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3dDLElBQUksQ0FDakIsQ0FDRCxFQUNSYixTQUFTLElBQUlsSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0csUUFBQSxDQUFBcUMsWUFBWTtjQUFDaEIsT0FBTyxFQUFFQSxPQUFPO2NBQUVWLE9BQU8sRUFBRUEsT0FBTztjQUFFaEgsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDcEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQTJJLFNBQUEsR0FBQWhKLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFpSixjQUFBLEdBQUFqSixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVWtKLGNBQWNBLENBQUM7WUFBRUM7VUFBTSxDQUF3QjtZQUM5RCxNQUFNO2NBQUV2QyxLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBRTdCLE1BQU13QyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUEwQjtjQUMxQy9JLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3FDLE1BQU0sRUFBRTtjQUMzQmhKLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3NDLEtBQUssRUFBRTtjQUMxQmpKLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUNoQixDQUFDO1lBRUQsT0FDQy9ILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dJLFNBQUEsQ0FBQU8sUUFBUTtjQUFDL0IsT0FBTyxFQUFFbkgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTztZQUFPLEVBQUksQ0FDNUMsRUFFTnhILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE4QixHQUMvQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQzNDLElBQUksRUFBQyxNQUFNO2NBQUM0QyxPQUFPLEVBQUVpRSxNQUFNO2NBQUVyRixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO1lBQUEsR0FDN0QyQyxXQUFXLENBQUN2QixPQUFPLENBQUNrRSxJQUFJLENBQ2pCLEVBQ1R6SixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUksY0FBQSxDQUFBckYsYUFBYTtjQUFDdEIsSUFBSSxFQUFDLFFBQVE7Y0FBQzBCLFFBQVEsRUFBRW9GLFFBQVE7Y0FBRXRGLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUN6RTJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ21FLE1BQU0sQ0FDWixDQUNSLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQTFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwSixLQUFBLEdBQUExSixPQUFBO1VBVU0sU0FBVTBJLGdCQUFnQkEsQ0FBQztZQUNoQ2xCLE9BQU87WUFDUG1CLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxjQUFjO1lBQ2R4RDtVQUFLLENBQ21CO1lBQ3hCLE1BQU1zRSxhQUFhLEdBQUduQyxPQUFPLEVBQUVvQyxNQUFNLElBQUksQ0FBQztZQUMxQyxNQUFNQyxTQUFTLEdBQUdsQixTQUFTLEdBQUdnQixhQUFhO1lBRTNDLE1BQU1HLGFBQWEsR0FBRyxJQUFBSixLQUFBLENBQUFuSixPQUFJLEVBQUMsdUJBQXVCLEVBQUU7Y0FDbkQsWUFBWSxFQUFFb0osYUFBYSxHQUFHZCxjQUFjO2NBQzVDLGNBQWMsRUFBRWMsYUFBYSxHQUFHZixnQkFBZ0IsSUFBSWUsYUFBYSxJQUFJZDthQUNyRSxDQUFDO1lBRUYsT0FDQzlJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRW9KO1lBQWEsR0FDM0J6RSxLQUFLLEUsS0FBR3dFLFNBQVMsQ0FDYjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBOUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFFQSxJQUFBK0osWUFBQSxHQUFBL0osT0FBQTtVQU9NLFNBQVUrSSxZQUFZQSxDQUFDO1lBQUVoQixPQUFPO1lBQUVWO1VBQU8sQ0FBc0I7WUFDcEUsTUFBTTJDLFdBQVcsR0FBR0EsQ0FBQSxLQUFXO2NBQzlCM0MsT0FBTyxFQUFFNEMsT0FBTyxFQUFFO2NBQ2xCbEMsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUVELE1BQU07Y0FBRW1DLFVBQVU7Y0FBRUMsV0FBVztjQUFFQyxLQUFLO2NBQUVDLFNBQVM7Y0FBRUMsUUFBUTtjQUFFQztZQUFNLENBQUUsR0FBRyxJQUFBUixZQUFBLENBQUFTLFdBQVcsRUFBQztjQUNuRkMsUUFBUSxFQUFFLElBQUk7Y0FDZEMsU0FBUyxFQUFFLE9BQU87Y0FDbEJDLFNBQVMsRUFBRSxPQUFPO2NBQ2xCeEUsT0FBTyxFQUFFO2dCQUFFeUUsT0FBTyxFQUFFO2NBQUM7YUFDckIsQ0FBQztZQUVGLE9BQ0M3SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDbkYsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLHFCQUFxQjtjQUFDcUgsT0FBTyxFQUFFaUMsV0FBVztjQUFFYyxhQUFhLEVBQUU7WUFBSyxHQUNyRi9LLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxnQ0FBeUIsQ0FDcEIsRUFDTlQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUXVLLEdBQUcsRUFBRWI7WUFBZ0QsbUJBQXdCLEVBQ3JGbkssTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FDQ3VLLEdBQUcsRUFBRVosV0FBOEM7Y0FDbkRhLEtBQUssRUFBRTtnQkFBRUMsTUFBTSxFQUFFLGlCQUFpQjtnQkFBRUMsT0FBTyxFQUFFLEVBQUU7Z0JBQUVDLFNBQVMsRUFBRTtjQUFFO1lBQUUscUJBRzNELEVBRUxkLFNBQVMsSUFBSXRLLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFksZUFBZThKLFFBQVEsRSxJQUFNLEVBQzFDQyxNQUFNLElBQUl4SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFHd0ssS0FBSyxFQUFFO2dCQUFFSSxLQUFLLEVBQUU7Y0FBSztZQUFFLEdBQUdDLE1BQU0sQ0FBQ2QsTUFBTSxDQUFDLENBQUssRUFFM0R4SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLd0ssS0FBSyxFQUFFO2dCQUFFTSxPQUFPLEVBQUUsTUFBTTtnQkFBRUMsUUFBUSxFQUFFLE1BQU07Z0JBQUVKLFNBQVMsRUFBRTtjQUFFO1lBQUUsR0FDOURmLEtBQUssQ0FBQ29CLEdBQUcsQ0FBQ0MsSUFBSSxJQUNkMUwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS2tMLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFFO2NBQUVYLEtBQUssRUFBRTtnQkFBRVksV0FBVyxFQUFFO2NBQUU7WUFBRSxHQUMzQ0gsSUFBSSxDQUFDSSxVQUFVLEdBQ2Y5TCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUNDc0wsR0FBRyxFQUFFTCxJQUFJLENBQUNJLFVBQVU7Y0FDcEJFLEdBQUcsRUFBRU4sSUFBSSxDQUFDdEosSUFBSTtjQUNkNkksS0FBSyxFQUFFO2dCQUFFZ0IsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLE1BQU0sRUFBRSxHQUFHO2dCQUFFQyxTQUFTLEVBQUU7Y0FBTztZQUFFLEVBQ3JELEdBRUZuTSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUNDd0ssS0FBSyxFQUFFO2dCQUNOZ0IsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLE1BQU0sRUFBRSxHQUFHO2dCQUNYRSxVQUFVLEVBQUUsTUFBTTtnQkFDbEJiLE9BQU8sRUFBRSxNQUFNO2dCQUNmYyxVQUFVLEVBQUUsUUFBUTtnQkFDcEJDLGNBQWMsRUFBRSxRQUFRO2dCQUN4QmpCLEtBQUssRUFBRTs7WUFDUCxnQkFJRixFQUNEckwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBR3dLLEtBQUssRUFBRTtnQkFBRXNCLFFBQVEsRUFBRTtjQUFFO1lBQUUsR0FBR2IsSUFBSSxDQUFDdEosSUFBSSxDQUFLLENBRTVDLENBQUMsQ0FDRyxDQUNELENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUEsSUFBQWYsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1TSxhQUFBLEdBQUF2TSxPQUFBO1VBQ0EsSUFBQXdNLGVBQUEsR0FBQXhNLE9BQUE7VUFDQSxJQUFBeU0sWUFBQSxHQUFBek0sT0FBQTtVQUVNLFNBQVUwTSxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXJNO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDekMsTUFBTSxDQUFDcU0sTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzdNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUUxRCxNQUFNaUwsTUFBTSxHQUFHQSxDQUFBLEtBQVlELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7WUFFN0MsSUFBQXZMLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3hGLFFBQVEsQ0FBQzJHLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDMkYsTUFBTSxJQUFJLENBQUN0TSxRQUFRLENBQUMyRyxTQUFTLENBQUNPLE9BQU8sRUFBRTtjQUMzQyxPQUFPeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytMLGFBQUEsQ0FBQU8sb0JBQW9CO2dCQUFDM0ssSUFBSSxFQUFDLFNBQVM7Z0JBQUM0SyxRQUFRLEVBQUVGO2NBQU0sRUFBSTs7WUFHakUsSUFBSSxDQUFDRixNQUFNLElBQUl0TSxRQUFRLENBQUMyRyxTQUFTLENBQUNPLE9BQU8sRUFBRTtjQUMxQyxPQUFPeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dNLGVBQUEsQ0FBQXRELGNBQWM7Z0JBQUNDLE1BQU0sRUFBRTBEO2NBQU0sRUFBSTs7WUFHMUMsT0FBTzlNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNpTSxZQUFBLENBQUE5RixXQUFXO2NBQUNoQixRQUFRLEVBQUVrSDtZQUFNLEVBQUk7VUFDekM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUF4TCxLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBZ04sU0FBQSxHQUFBaE4sT0FBQTtVQUhBOztVQWdCQTs7O1VBR00sU0FBVXdLLFdBQVdBLENBQUMzSSxLQUFxQjtZQUNoRCxNQUFNcUksVUFBVSxHQUFHN0ksS0FBSyxDQUFDNEwsTUFBTSxDQUFxQixJQUFJLENBQUM7WUFDekQsTUFBTTlDLFdBQVcsR0FBRzlJLEtBQUssQ0FBQzRMLE1BQU0sQ0FBcUIsSUFBSSxDQUFDO1lBRTFEO1lBQ0EsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRzdMLEtBQUssQ0FBQ08sUUFBUSxDQUFDLE1BQU0sSUFBSW9MLFNBQUEsQ0FBQUcsUUFBUSxDQUFDdEwsS0FBSyxDQUFDLENBQUM7WUFDNUQsTUFBTStFLEtBQUssR0FBRyxJQUFBeEYsTUFBQSxDQUFBeUUsUUFBUSxFQUFDcUgsUUFBUSxDQUFDO1lBRWhDO1lBQ0E3TCxLQUFLLENBQUMrTCxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNsRCxVQUFVLENBQUNtRCxPQUFPLEVBQUU7Y0FFekJILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDcEQsVUFBVSxDQUFDbUQsT0FBTyxFQUFFbEQsV0FBVyxDQUFDa0QsT0FBTyxJQUFJRSxTQUFTLENBQUM7Y0FDckUsT0FBTyxNQUFNTCxRQUFRLENBQUNNLE9BQU8sRUFBRTtZQUNoQyxDQUFDLEVBQUUsQ0FBQ04sUUFBUSxDQUFDLENBQUM7WUFFZCxNQUFNTyxLQUFLLEdBQUc3RyxLQUFLLENBQUN3RCxLQUFLLENBQUNzRCxLQUFLO1lBQy9CLE1BQU1wRCxRQUFRLEdBQUcxRCxLQUFLLENBQUN3RCxLQUFLLENBQUNzRCxLQUFLLEdBQUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBRWhILEtBQUssQ0FBQ3dELEtBQUssQ0FBQ3lELEtBQUssQ0FBQ2pFLE1BQU0sR0FBR2hELEtBQUssQ0FBQ3dELEtBQUssQ0FBQ3NELEtBQUssR0FBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRTdHLE9BQU87Y0FDTnhELFVBQVU7Y0FDVkMsV0FBVztjQUNYK0MsUUFBUTtjQUNSOUMsS0FBSyxFQUFFeEQsS0FBSyxDQUFDd0QsS0FBSyxDQUFDeUQsS0FBSztjQUN4QnRELE1BQU0sRUFBRTNELEtBQUssQ0FBQzJELE1BQU07Y0FDcEJGLFNBQVMsRUFBRXpELEtBQUssQ0FBQ08sUUFBUTtjQUN6Qm1ELFFBQVE7Y0FDUm1EO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQTFOLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBR0EsSUFBQStOLGFBQUEsR0FBQS9OLE9BQUE7VUFFTSxTQUFVZ08sdUJBQXVCQSxDQUFDLEVBQW9DO1lBQzNFLE1BQU07Y0FDTDVOLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTtjQUFFMk47WUFBYSxDQUFFLEdBQUcsSUFBQUYsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUM5QyxNQUFNQyxVQUFVLEdBQUdGLGFBQWE7WUFFaEMsT0FDQ2xPLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFNLFNBQVM7Y0FDVDFOLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0IyTixJQUFJLEVBQUVqTyxLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ2hCLEtBQUs7Y0FDbENxRCxXQUFXLEVBQUUvRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ3FDO1lBQVcsR0FFL0NwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBbUIsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3BKLE9BQU8sRUFBRWlKLFVBQVU7Y0FBRXJLLE9BQU8sRUFBQztZQUFTLEdBQzlDK0MsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNOLENBQ0ssQ0FDVjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBbk4sTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQXdPLEtBQUEsR0FBQXhPLE9BQUE7VUFFTSxTQUFVeU8sa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRXBPLFFBQVE7Y0FBRUQsS0FBSztjQUFFd0c7WUFBSyxDQUFFLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdkQsTUFBTSxDQUFDb08sTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3ROLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDMEgsTUFBTSxDQUFDO1lBRXJFLElBQUF0TixNQUFBLENBQUFZLFNBQVMsRUFDUixDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQ3BCLE1BQUs7Y0FDSjJILFNBQVMsQ0FBQztnQkFBRSxHQUFHdE8sUUFBUSxDQUFDMkcsU0FBUyxDQUFDMEg7Y0FBTSxDQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE9BQ0NyTixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dPLEtBQUEsQ0FBQUksc0JBQXNCO2NBQUMzTixJQUFJLEVBQUM7WUFBUyxFQUFHLEVBQ3pDSSxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dPLEtBQUEsQ0FBQUksc0JBQXNCO2NBQUMzTixJQUFJLEVBQUM7WUFBVSxFQUFHLENBQ3JDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUE2TSxHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWlKLGNBQUEsR0FBQWpKLE9BQUE7VUFDQSxJQUFBK04sYUFBQSxHQUFBL04sT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBR08sTUFBTTRPLHNCQUFzQixHQUFHQSxDQUFDO1lBQUUzTjtVQUFJLENBQUUsS0FBSTtZQUNsRCxNQUFNO2NBQUUyRixLQUFLO2NBQUV2RyxRQUFRO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdkQsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTTtjQUFFOEg7WUFBTSxDQUFFLEdBQUdyTyxRQUFRLENBQUMyRyxTQUFTO1lBQ3JDLE1BQU07Y0FBRWlILGFBQWE7Y0FBRTlHLFFBQVE7Y0FBRTBIO1lBQVcsQ0FBRSxHQUFHLElBQUFkLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFFckUsTUFBTVksR0FBRyxHQUFHLENBQUMsQ0FBQ3pPLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzBILE1BQU0sR0FBR3pOLElBQUksQ0FBQztZQUMvQyxNQUFNOE4sY0FBYyxHQUFHak0sS0FBSyxJQUFHO2NBQzlCbUwsYUFBYSxDQUFDLENBQUNuTCxLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELE1BQU02RixRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixPQUFPeUYsV0FBVyxDQUFDLENBQUM1TixJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTStOLElBQUksR0FBRzNPLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQy9GLElBQUksQ0FBQyxFQUFFMkksTUFBTTtZQUM3QyxNQUFNcUYsWUFBWSxHQUFHRCxJQUFJLEdBQUcsQ0FBQyxJQUFJQSxJQUFJLElBQUksSUFBSTtZQUU3QyxNQUFNRSxTQUFTLEdBQ2RGLElBQUksS0FBSyxDQUFDLElBQUlBLElBQUksS0FBS3pCLFNBQVMsR0FDN0JuTixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ21JLEtBQUssQ0FBQ0MsYUFBYSxHQUNqRGhQLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDbUksS0FBSyxDQUFDeEcsU0FBUztZQUNqRCxPQUNDNUksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ3FJLEtBQUssQ0FBQ3BPLElBQUksQ0FBQyxDQUFNLEVBQ25ELENBQUM2TixHQUFHLEdBQ0ovTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNFd08sWUFBWSxHQUNabFAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDTixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ21JLEtBQUssQ0FBQ0csT0FBTyxDQUN0QyxHQUVQdlAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQXlCLEdBQ3hDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBMEMsV0FBVztjQUFDa0osTUFBTSxFQUFFO2dCQUFFdE8sSUFBSSxFQUFFYixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ21JLEtBQUssQ0FBQ2xPLElBQUk7Y0FBQztZQUFFLEdBQ3RFaU8sU0FBUyxDQUNHLENBRWYsQ0FDQyxHQUNBLElBQUksQ0FDSCxFQUNOblAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQy9Cb08sR0FBRyxHQUNIL08sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBQ3pEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBMEIsV0FBVztjQUFDQyxHQUFHLEVBQUVmLE1BQU0sQ0FBQ3pOLElBQUksQ0FBQyxDQUFDd087WUFBRyxFQUFJLEVBQ3RDMVAsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lJLGNBQUEsQ0FBQXJGLGFBQWE7Y0FDYmxELFNBQVMsRUFBQyxRQUFRO2NBQ2xCcUQsT0FBTyxFQUFFOEMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDbUUsTUFBTTtjQUNuQ25ILElBQUksRUFBQyxRQUFRO2NBQ2IyQixFQUFFLEVBQUMsTUFBTTtjQUNURCxRQUFRLEVBQUVvRixRQUFRO2NBQ2xCdkYsUUFBUSxFQUFFc0QsUUFBUTtjQUNsQnJELE9BQU8sRUFBQztZQUFTLEVBQ2hCLENBQ0csR0FFTi9ELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FDUnpLLFFBQVEsRUFBRSxDQUFDb0wsWUFBWTtjQUN2QjlILFFBQVEsRUFBRUEsUUFBUTtjQUNsQjVELEtBQUssRUFBRXRDLElBQUk7Y0FDWGlFLE9BQU8sRUFBRTZKLGNBQWM7Y0FDdkJqTCxPQUFPLEVBQUM7WUFBUyxHQUVoQitDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FFOUIsQ0FDSSxDQUNEO1VBRVIsQ0FBQztVQUFDbUIsT0FBQSxDQUFBZCxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUYsSUFBQXhOLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBMlAsS0FBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDTSxTQUFVNFAsc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FDTHZQLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDcU0sTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzdNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxNQUFNLENBQUN1RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUMyRyxTQUFTLENBQUNHLFFBQVEsQ0FBQztZQUMzRSxNQUFNO2NBQUV1SDtZQUFNLENBQUUsR0FBR3JPLFFBQVEsQ0FBQzJHLFNBQVM7WUFDckMsSUFBQTVGLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDNEYsU0FBUyxDQUFDLEtBQUssQ0FBQztjQUNoQnhGLFdBQVcsQ0FBQy9HLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0csUUFBUSxDQUFDO1lBQ3pDLENBQUMsQ0FBQztZQUVGLE1BQU0wRyxLQUFLLEdBQUcsQ0FBQyxDQUFDYSxNQUFNLEdBQUdtQixNQUFNLENBQUNDLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDakQsTUFBTXRGLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0JoQyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU0vRyxRQUFRLENBQUMyRyxTQUFTLENBQUMrSSxZQUFZLEVBQUU7Y0FFdkMzSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFDRCxPQUNDckgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsS0FBQSxDQUFBSyxJQUFJO2NBQUN0UCxTQUFTLEVBQUMsZUFBZTtjQUFDbU4sS0FBSyxFQUFFQSxLQUFLO2NBQUVvQyxPQUFPLEVBQUV6QixLQUFBLENBQUFJLHNCQUFzQjtjQUFFM0ssRUFBRSxFQUFDO1lBQUssRUFBRyxFLElBQ3JGLEVBQ05sRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBOEIsR0FDL0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUMzQyxJQUFJLEVBQUMsUUFBUTtjQUFDNEMsT0FBTyxFQUFFa0UsUUFBUTtjQUFFdEYsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtZQUFBLEdBQ2pFMkMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDbUUsTUFBTSxDQUNuQixDQUNELENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXFFLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBK04sYUFBQSxHQUFBL04sT0FBQTtVQUVNLFNBQVU4TSxvQkFBb0JBLENBQUM7WUFBRTNLLElBQUk7WUFBRTRLO1VBQVEsQ0FBRTtZQUN0RCxNQUFNO2NBQ0wxTSxRQUFRO2NBQ1JELEtBQUs7Y0FDTHdHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sQ0FBQ21KLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLEdBQUd5TyxPQUFPLENBQUMsR0FBR3RRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDN0UsSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTTtjQUFFaUYsV0FBVztjQUFFa0o7WUFBZSxDQUFFLEdBQUcsSUFBQXZDLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFDN0QsTUFBTXFDLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsTUFBTXRNLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQ3hELFFBQVEsQ0FBQ1M7WUFBSyxDQUFFO1lBRTlDLElBQUFNLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDSSxXQUFXLENBQUMvRyxRQUFRLENBQUMyRyxTQUFTLENBQUNHLFFBQVEsQ0FBQztjQUN4Q2tKLE9BQU8sQ0FBQ2hRLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLE9BQ0NwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBTSxTQUFTO2NBQ1QxTixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMk4sSUFBSSxFQUFFak8sS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNoQixLQUFLO2NBQ2xDcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQztZQUFXLEdBRS9DcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFNkg7WUFBUSxHQUNsRGxHLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3FILE1BQU0sQ0FDbkIsRUFDVDVNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3BKLE9BQU8sRUFBRXFMLFdBQVc7Y0FBRXpNLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS0Q7WUFBUSxHQUM1RGdELFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsQ0FDTixDQUdLLEVBQ1g0QixlQUFlLElBQ2ZwUSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBTSx1QkFBdUI7Y0FDdkI5SyxJQUFJLEVBQUV5SyxlQUFlO2NBQ3JCTSxRQUFRO2NBQ1JDLFNBQVMsRUFBRTlKLEtBQUssQ0FBQytKLEtBQUssQ0FBQ0MsWUFBWTtjQUNuQzlQLEtBQUssRUFBRWdHLGFBQWEsQ0FBQytKLFVBQVUsQ0FBQy9QLEtBQUs7Y0FDckNnUSxTQUFTLEVBQUV6USxRQUFRLENBQUN5USxTQUFTO2NBQzdCM00sV0FBVyxFQUFFMkMsYUFBYSxDQUFDK0osVUFBVSxDQUFDMU0sV0FBVztjQUNqRDRELE9BQU8sRUFBRXdJLFdBQVc7Y0FDcEJwQyxVQUFVLEVBQUVtQztZQUFlLEVBRTVCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQXZRLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBR0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUE0QyxVQUFBLEdBQUE1QyxPQUFBO1VBRU0sU0FBVStRLGFBQWFBLENBQUM7WUFBRTVPLElBQUk7WUFBRTRLO1VBQVEsQ0FBRTtZQUMvQyxNQUFNO2NBQ0wxTSxRQUFRO2NBQ1JELEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDNlAsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHclEsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3VGLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0csUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBR2tKLE9BQU8sQ0FBQyxHQUFHdFEsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUMyRyxTQUFTLENBQUM3RSxJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNb08sV0FBVyxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU5RCxJQUFBL08sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcENJLFdBQVcsQ0FBQy9HLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ0csUUFBUSxDQUFDO2NBQ3hDa0osT0FBTyxDQUFDaFEsUUFBUSxDQUFDMkcsU0FBUyxDQUFDN0UsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTTBCLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQ3hELFFBQVEsQ0FBQ1MsS0FBSyxJQUFJLENBQUNULFFBQVEsQ0FBQzJHLFNBQVMsRUFBRU87WUFBTyxDQUFFO1lBRTlFLE9BQ0N4SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBTSxTQUFTO2NBQ1QxTixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMk4sSUFBSSxFQUFFak8sS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNoQixLQUFLO2NBQ2xDcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQztZQUFXLEdBRS9DcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFNkg7WUFBUSxHQUNsRGxHLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3FILE1BQU0sQ0FDbkIsRUFDVDVNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3BKLE9BQU8sRUFBRXFMLFdBQVc7Y0FBRXpNLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS0Q7WUFBUSxHQUM1RGdELFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsQ0FDTixDQUVLLEVBQ1g0QixlQUFlLElBQUlwUSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0MsVUFBQSxDQUFBb08seUJBQXlCO2NBQUMvUCxJQUFJLEVBQUVrQixJQUFJO2NBQUU0RixPQUFPLEVBQUV3STtZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXhRLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBaVIsS0FBQSxHQUFBalIsT0FBQTtVQUNBLElBQUFrUixRQUFBLEdBQUFsUixPQUFBO1VBQ0EsSUFBQW1SLEtBQUEsR0FBQW5SLE9BQUE7VUFDQSxJQUFBb1IsT0FBQSxHQUFBcFIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBK04sYUFBQSxHQUFBL04sT0FBQTtVQUVNLFNBQVVxUixhQUFhQSxDQUFDO1lBQUUzTCxJQUFJO1lBQUVxQztVQUFPLENBQUU7WUFDOUMsTUFBTTtjQUFFM0gsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELE1BQU13RyxhQUFhLEdBQUcxRyxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVM7WUFDbkQsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQzBQLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd4UixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDN0QsTUFBTTJPLFdBQVcsR0FBR0EsQ0FBQSxLQUFNckosWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNO2NBQUV1SztZQUFTLENBQUUsR0FBRyxJQUFBekQsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUUxQyxJQUFBOU0sTUFBQSxDQUFBeUUsUUFBUSxFQUFDeEYsUUFBUSxDQUFDMkcsU0FBUyxDQUFDO1lBRTVCLElBQUksQ0FBQ3RCLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTWdMLFNBQVMsR0FBR0EsQ0FBQSxLQUFLLENBQUUsQ0FBQztZQUMxQixNQUFNZSxJQUFJLEdBQUcsRUFBRTtZQUNmLE1BQU01TyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QnlPLGFBQWEsQ0FBQ3pPLEtBQUssQ0FBQ0UsYUFBYSxDQUFDK0MsT0FBTyxDQUFDNUQsSUFBSSxDQUFDO1lBQ2hELENBQUM7WUFFRHNQLElBQUksQ0FBQ0MsSUFBSSxDQUNSM1IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lRLEtBQUEsQ0FBQVUsR0FBRztjQUFDakcsR0FBRyxFQUFDLG9CQUFvQjtjQUFDdkosSUFBSSxFQUFDO1lBQVMsR0FDMUMyRSxhQUFhLENBQUN1SSxLQUFLLENBQUM5SCxPQUFPLENBQ3ZCLENBQ047WUFFRCxJQUFJbEgsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUU7Y0FDL0JzSSxNQUFNLENBQUNDLElBQUksQ0FBQ2hKLGFBQWEsQ0FBQ3VJLEtBQUssQ0FBQyxDQUFDdUMsT0FBTyxDQUFDM1EsSUFBSSxJQUFHO2dCQUMvQyxJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN4QndRLElBQUksQ0FBQ0MsSUFBSSxDQUNSM1IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lRLEtBQUEsQ0FBQVUsR0FBRztrQkFBQ3hQLElBQUksRUFBRWxCLElBQUk7a0JBQUV5SyxHQUFHLEVBQUV6SztnQkFBSSxHQUN4QjZGLGFBQWEsQ0FBQ3VJLEtBQUssQ0FBQ3BPLElBQUksQ0FBQyxDQUNyQixDQUNOO2NBQ0YsQ0FBQyxDQUFDOztZQUVILE9BQ0NsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFcEYsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLDJCQUEyQjtjQUFDcUgsT0FBTyxFQUFFQTtZQUFPLEdBQ3ZGaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBdVEsb0JBQW9CLE9BQUcsRUFDeEI5UixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeVEsS0FBQSxDQUFBYSxhQUFhO2NBQUNDLE1BQU0sRUFBRSxDQUFDO2NBQUVyUixTQUFTLEVBQUMsdUJBQXVCO2NBQUNtQyxRQUFRLEVBQUVBO1lBQVEsR0FDN0U5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeVEsS0FBQSxDQUFBZSxJQUFJO2NBQUN0UixTQUFTLEVBQUM7WUFBWSxHQUFFK1EsSUFBSSxDQUFRLEVBRTFDMVIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lRLEtBQUEsQ0FBQWdCLEtBQUssUUFDTGxTLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUSxRQUFBLENBQUF4RSxVQUFVO2NBQUMzRSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxFQUNoQ2hJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxLQUFBLENBQUFlLFlBQVk7Y0FBQy9QLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakNwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsS0FBQSxDQUFBZSxZQUFZO2NBQUMvUCxJQUFJLEVBQUM7WUFBVSxFQUFHLEVBQ2hDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRRLE9BQUEsQ0FBQTNDLGtCQUFrQixPQUFHLENBQ2YsQ0FDTyxFQUVoQjFPLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxXQUFBLENBQUFpQyxlQUFlO2NBQ2Z6TSxJQUFJLEVBQUV1QixTQUFTO2NBQ2Z3SixRQUFRO2NBQ1IzUCxLQUFLLEVBQUVnRyxhQUFhLENBQUMrSixVQUFVLENBQUMvUCxLQUFLO2NBQ3JDcUQsV0FBVyxFQUFFMkMsYUFBYSxDQUFDK0osVUFBVSxDQUFDMU0sV0FBVztjQUNqRDRELE9BQU8sRUFBRXdJLFdBQVc7Y0FDcEJHLFNBQVMsRUFBRUEsU0FBUztjQUNwQnZDLFVBQVUsRUFBRXFELFNBQVMsQ0FBQ0YsVUFBVTtZQUFDLEVBQ2hDLENBQ0ssQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pFQSxJQUFBdlIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTZSLG9CQUFvQkEsQ0FBQyxFQUFFO1lBQ3RDLE1BQU07Y0FBRXpSO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFdEMsTUFBTXdHLGFBQWEsR0FBRzFHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUztZQUVuRCxPQUNDakgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLc0csYUFBYSxDQUFDaEcsS0FBSyxDQUFNLENBQ3RCO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQTZDLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBMlAsS0FBQSxHQUFBM1AsT0FBQTtVQUVNLFNBQVV3RCxhQUFhQSxDQUFDLEVBQUU7WUFDL0IsTUFBTTtjQUFFcEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN0QyxNQUFNLENBQUMyRyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU13USxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQmxMLFlBQVksQ0FBQyxJQUFJLENBQUM7Y0FDbEJtTCxVQUFVLENBQUNDLFFBQVEsQ0FBQ3BQLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzhILEtBQUssQ0FBQ3VILFFBQVEsR0FBRyxRQUFRO1lBQ3BFLENBQUM7WUFFRCxNQUFNeEssT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEJiLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDbkJtTCxVQUFVLENBQUNDLFFBQVEsQ0FBQ3BQLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzhILEtBQUssQ0FBQ3VILFFBQVEsR0FBRyxNQUFNO1lBQ2xFLENBQUM7WUFDRCxPQUNDeFMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsa0JBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYSxPQUFRSixLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ2xHLEtBQUssQ0FBTSxFQUNqRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUMzQyxJQUFJLEVBQUMsS0FBSztjQUFDNEMsT0FBTyxFQUFFa04sUUFBUTtjQUFFdE8sT0FBTyxFQUFDO1lBQU0sR0FDbEQxRCxLQUFLLENBQUMyRyxhQUFhLENBQUNqRixLQUFLLENBQUN3RCxPQUFPLENBQUNqQyxHQUFHLENBQzlCLENBQ0osQ0FDRSxFQUNUdEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLEtBQUEsQ0FBQTZDLFlBQVk7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDM0IsRUFDVG5MLFNBQVMsSUFBSWxILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQW1SLGFBQWE7Y0FBQzNMLElBQUksRUFBRXVCLFNBQVM7Y0FBRWMsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDaEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQTVHLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLFNBQVN5UyxZQUFZQSxDQUFDcEUsSUFBSSxFQUFFMUYsU0FBUztZQUNwQyxPQUFPMEYsSUFBSSxDQUFDekUsTUFBTSxHQUFHakIsU0FBUyxHQUFHMEYsSUFBSSxDQUFDcUUsU0FBUyxDQUFDLENBQUMsRUFBRS9KLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRzBGLElBQUk7VUFDN0U7VUFFTSxTQUFVbUUsWUFBWUEsQ0FBQztZQUFFSjtVQUFRLENBQUU7WUFDeEMsTUFBTTtjQUFFeEwsS0FBSztjQUFFeEcsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ3RDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd4RSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTStDLFVBQVUsR0FBR0EsQ0FBQSxLQUFNSixPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBRXZDLE1BQU1RLFNBQVMsR0FBR2hDLEtBQUssSUFBRztjQUN6QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCeEUsUUFBUSxDQUFDMkcsU0FBUyxDQUFDc0MsS0FBSyxFQUFFO2NBQzFCakosUUFBUSxDQUFDeUgsSUFBSSxFQUFFO2NBQ2ZuRCxVQUFVLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTU8sT0FBTyxHQUFHcEMsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkJGLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNO2NBQUU3RCxLQUFLO2NBQUVxRDtZQUFXLENBQUUsR0FBRy9ELEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDMkwsV0FBVztZQUN4RSxPQUNDNVMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDRUosUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEdBQzFCeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUMsZ0NBQWdDO2NBQUN3RSxPQUFPLEVBQUVrTjtZQUFRLEdBQy9ESyxZQUFZLENBQUNwUyxRQUFRLENBQUMyRyxTQUFTLENBQUNPLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFDN0N4SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUF5UixVQUFVO2NBQUNsUyxTQUFTLEVBQUMsUUFBUTtjQUFDNEIsSUFBSSxFQUFDLFFBQVE7Y0FBQzRDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQzVELENBQ0QsR0FFTm5GLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNsRixLQUFLLENBQVEsQ0FDN0MsQ0FFUCxFQUNBd0MsSUFBSSxJQUNKdkUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FBQ08sSUFBSTtjQUFDWixTQUFTLEVBQUVBLFNBQVM7Y0FBRWEsUUFBUSxFQUFFaEI7WUFBVSxHQUM1RDVFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQyxlQUFlO2NBQUN3RSxPQUFPLEVBQUVQO1lBQVUsRUFBSSxFQUN0RDVFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFlLEdBQzdCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTSxLQUFLLENBQU0sRUFDaEJmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUkyRCxXQUFXLENBQUssQ0FDZixDQUVQLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQVIsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTZTLGtCQUFrQkEsQ0FBQztZQUNsQzFRLElBQUk7WUFDSndELFFBQVE7WUFDUm9DO1VBQU8sQ0FNUDtZQUNBLE1BQU07Y0FBRStLLE1BQU07Y0FBRXpTLFFBQVE7Y0FBRUQsS0FBSztjQUFFd0c7WUFBSyxDQUFFLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDL0QsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTSxDQUFDbU0sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHalQsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQzRGLE9BQU8sRUFBRXlMLFVBQVUsQ0FBQyxHQUFHbFQsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUNrUixNQUFNLENBQUM5TCxTQUFTLEdBQUc3RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUUsTUFBTSxDQUFDZ0YsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNaUIsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJtUSxVQUFVLENBQUNuUSxLQUFLLENBQUM0RSxNQUFNLENBQUNuRSxLQUFLLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU0yUCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJSixNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJILGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRURyTixRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTWIsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVyxDQUFFLENBQUM7WUFDaEMsTUFBTXNPLGFBQWEsR0FBR0EsQ0FBQSxLQUFNSixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTXJMLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekJQLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIvRyxRQUFRLENBQUMyRyxTQUFTLENBQUNTLEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHcUY7Y0FBTyxDQUFFLENBQUM7Y0FDM0MsTUFBTW5ILFFBQVEsQ0FBQ3lILElBQUksQ0FBQztnQkFBRSxDQUFDM0YsSUFBSSxHQUFHcUY7Y0FBTyxDQUFFLENBQUM7Y0FDeENKLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJXLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxNQUFNK0IsYUFBYSxHQUFHLHdCQUNyQnRDLE9BQU8sQ0FBQ29DLE1BQU0sR0FBRyxJQUFJLEdBQUlwQyxPQUFPLENBQUNvQyxNQUFNLEdBQUcsSUFBSSxHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUksRUFDckYsRUFBRTtZQUVGLE9BQ0M3SixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE4SCxJQUFJO2NBQUN0SCxTQUFTLEVBQUMsOEJBQThCO2NBQUN1SCxRQUFRLEVBQUVOO1lBQU0sR0FDOUQ1SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQW1ULFFBQVE7Y0FDUnhRLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlYsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZvQixLQUFLLEVBQUVpRSxPQUFPO2NBQ2RXLFdBQVcsRUFBRS9ILEtBQUssQ0FBQ3VNLE1BQU0sQ0FBQ3hLLElBQUksQ0FBQyxDQUFDbVI7WUFBUSxFQUN2QyxDQUNHLEVBQ052VCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUVvSjtZQUFhLEdBQzNCMUosS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUM4QixVQUFVLEUsS0FBRyxJQUFJLEdBQUd0QixPQUFPLENBQUNvQyxNQUFNLENBQzVELENBQ0EsRUFDUDdKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ0MsT0FBTyxFQUFFZ08sYUFBYTtjQUFFcFAsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtZQUFBLEdBQ3hEMkMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXlDLE1BQU07Y0FBRTlELFFBQVEsRUFBRSxDQUFDMkQsT0FBTyxJQUFJTDtZQUFRLEdBQ3ZFTixXQUFXLENBQUN2QixPQUFPLENBQUN3QyxJQUFJLENBQ2pCLENBQ0QsRUFDUmlMLGVBQWUsSUFDZmhULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNMLFNBQVMsRUFBRUEsU0FBUztjQUFFYSxRQUFRLEVBQUV5TjtZQUFhLEdBQzFEclQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FBTXFHLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ0csTUFBTSxDQUFPLENBRXhDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUEsSUFBQTFGLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnSixTQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUF1VCxNQUFBLEdBQUF2VCxPQUFBO1VBQ0EsSUFBQXdULG1CQUFBLEdBQUF4VCxPQUFBO1VBR0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWlKLGNBQUEsR0FBQWpKLE9BQUE7VUFFTSxTQUFVa1MsWUFBWUEsQ0FBQztZQUFFL1A7VUFBSSxDQUFFO1lBQ3BDLE1BQU07Y0FBRXlFLEtBQUs7Y0FBRXZHLFFBQVE7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN2RCxNQUFNO2NBQUV1RztZQUFXLENBQUUsR0FBR0QsS0FBSztZQUM3QixNQUFNLENBQUMrRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHN00sTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sQ0FBQzZSLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUczVCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ3hFLE1BQU13UixjQUFjLEdBQUdBLENBQUEsS0FBTS9HLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTWdILFlBQVksR0FBR0EsQ0FBQSxLQUFNaEgsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztZQUM3QyxNQUFNLENBQUN4RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUFSLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDME0sV0FBVyxDQUFDclQsUUFBUSxDQUFDMkcsU0FBUyxDQUFDN0UsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsSUFBSXdLLE1BQU0sRUFBRSxPQUFPNU0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dULG1CQUFBLENBQUFYLGtCQUFrQjtjQUFDMVEsSUFBSSxFQUFFQSxJQUFJO2NBQUU0RixPQUFPLEVBQUU2TCxZQUFZO2NBQUVqTyxRQUFRLEVBQUVpTztZQUFZLEVBQUk7WUFDcEcsSUFBSSxDQUFDSCxRQUFRLEVBQUUsT0FBTzFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMrUyxNQUFBLENBQUF4QyxhQUFhO2NBQUM1TyxJQUFJLEVBQUVBLElBQUk7Y0FBRTRLLFFBQVEsRUFBRTZHO1lBQVksRUFBSTtZQUUzRSxNQUFNeEssUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJoQyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDUyxHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBRztjQUFFLENBQUUsQ0FBQztjQUN0QzlCLFFBQVEsQ0FBQ3lILElBQUksQ0FBQztnQkFBRSxDQUFDM0YsSUFBSSxHQUFHO2NBQUUsQ0FBRSxDQUFDO2NBQzdCaUYsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FDQ3JILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFtQixHQUNyQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dJLFNBQUEsQ0FBQU8sUUFBUTtjQUFDL0IsT0FBTyxFQUFFaU07WUFBUSxFQUFJLENBQ3RCLEVBQ1YxVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0MsR0FDaEVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUMzQyxJQUFJLEVBQUMsTUFBTTtjQUFDNEMsT0FBTyxFQUFFeU8sY0FBYztjQUFFOVAsUUFBUSxFQUFFc0QsUUFBUTtjQUFFckQsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtZQUFBLEdBQ3pGMkMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDa0UsSUFBSSxDQUNqQixFQUNUekosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lJLGNBQUEsQ0FBQXJGLGFBQWE7Y0FBQ0ksUUFBUSxFQUFFb0YsUUFBUTtjQUFFOUcsSUFBSSxFQUFDLFFBQVE7Y0FBQ3VCLFFBQVEsRUFBRXNELFFBQVE7Y0FBRXJELE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUM3RjJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ21FLE1BQU0sQ0FDWixDQUNSLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQTFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVrTyxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFN047WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN6QyxNQUFNLENBQUM2RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1xTSxhQUFhLEdBQUcsTUFBQUEsQ0FBT0osS0FBSyxHQUFHTixTQUFTLEtBQUk7Y0FDakQsSUFBSTtnQkFDSG5HLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0vRyxRQUFRLENBQUMyRyxTQUFTLENBQUNpSCxhQUFhLENBQUNKLEtBQUssQ0FBQztlQUM3QyxDQUFDLE9BQU9nRyxDQUFDLEVBQUU7Z0JBQ1hqTSxPQUFPLENBQUNrTSxHQUFHLENBQUNELENBQUMsQ0FBQztlQUNkLFNBQVM7Z0JBQ1R6TSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXlILFdBQVcsR0FBRyxNQUFBQSxDQUFPaEIsS0FBSyxHQUFHTixTQUFTLEtBQUk7Y0FDL0MsSUFBSTtnQkFDSG5HLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0vRyxRQUFRLENBQUMyRyxTQUFTLENBQUM2SCxXQUFXLENBQUNoQixLQUFLLENBQUM7ZUFDM0MsQ0FBQyxPQUFPZ0csQ0FBQyxFQUFFO2dCQUNYak0sT0FBTyxDQUFDa00sR0FBRyxDQUFDRCxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUek0sV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU1rSixlQUFlLEdBQUcsTUFBQUEsQ0FBTztjQUFFeUQsS0FBSztjQUFFakQ7WUFBUyxDQUFFLEtBQUk7Y0FDdEQsSUFBSTtnQkFDSCxNQUFNa0QsSUFBSSxHQUFHLE1BQU0zVCxRQUFRLENBQUMyRyxTQUFTLENBQUN1SCxRQUFRLENBQUMsU0FBUyxFQUFFd0YsS0FBSyxFQUFFakQsU0FBUyxDQUFDO2VBQzNFLENBQUMsT0FBTytDLENBQUMsRUFBRTtnQkFDWGpNLE9BQU8sQ0FBQ2tNLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDOztZQUVoQixDQUFDO1lBRUQsTUFBTUksZ0JBQWdCLEdBQUcsTUFBQUEsQ0FBT2hULElBQUksRUFBRThTLEtBQUssS0FBSTtjQUM5QzNNLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTS9HLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3VILFFBQVEsQ0FBQ3ROLElBQUksRUFBRThTLEtBQUssQ0FBQztjQUU5Q0csVUFBVSxDQUFDLE1BQUs7Z0JBQ2Y5TSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsT0FBTztjQUNONkcsYUFBYTtjQUNicUMsZUFBZTtjQUNmMkQsZ0JBQWdCO2NBQ2hCOU0sUUFBUTtjQUNSQyxXQUFXO2NBQ1h5SCxXQUFXO2NBQ1gyQyxTQUFTLEVBQUU7Z0JBQ1Y5QyxNQUFNLEVBQUVULGFBQWE7Z0JBQ3JCMUcsT0FBTyxFQUFFK0ksZUFBZTtnQkFDeEJtRCxRQUFRLEVBQUVRLGdCQUFnQjtnQkFDMUJFLFFBQVEsRUFBRUYsZ0JBQWdCO2dCQUMxQkcsU0FBUyxFQUFFSDs7YUFFWjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQSxJQUFBbFUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVoRCxPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0MsR0FDaERYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUk5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQU0sRUFDbkRmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFRLENBQ3JELENBQ0QsRUFDTmhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxVQUFVO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdkMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBQyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLGVBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVNLFNBQVVxVSxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRWpVLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaVU7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTVcsVUFBVSxHQUFHZixJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1tQixRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFRyxhQUFhLEVBQUU7Z0JBQUViLElBQUk7Z0JBQUVvQjtjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEbEQsUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTWdSLE1BQU0sR0FBR0EsQ0FBQSxLQUFNbFUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBQ3BDLE1BQU0vRixRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBRWxCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNELENBQ0csRUFFVkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLEVBQ05LLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZSxlQUFBLENBQUFwQixjQUFjLE9BQUcsQ0FDYixDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQXVELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVd1Usa0JBQWtCQSxDQUFDO1lBQUU5TyxJQUFJO1lBQUVxQztVQUFPLENBQUU7WUFDbkQsTUFBTSxDQUFDWixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTHZCLFFBQVE7Y0FDUkQsS0FBSyxFQUFFO2dCQUFFTyxVQUFVLEVBQUVQO2NBQUssQ0FBRTtjQUM1QndHLEtBQUssRUFBRTtnQkFDTkMsV0FBVyxFQUFFO2tCQUFFdkI7Z0JBQU87Y0FBRTtZQUN4QixDQUNELEdBQUcsSUFBQXJGLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDb0YsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNWixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hzQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNL0csUUFBUSxDQUFDb1UsWUFBWSxFQUFFO2dCQUM3QjFNLE9BQU8sRUFBRTtlQUNULENBQUMsT0FBTzhMLENBQUMsRUFBRTtnQkFDWGpNLE9BQU8sQ0FBQzhNLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1R6TSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ3JILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQ1pPLElBQUk7Y0FDSnFDLE9BQU8sRUFBRUEsT0FBTztjQUNoQmpELFNBQVMsRUFBRUEsU0FBUztjQUNwQk0sVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVILEtBQUssRUFBRUMsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDcENFLFFBQVEsRUFBRW9DO1lBQU8sR0FFakJoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN1UyxXQUFXLENBQUM3UixLQUFLLENBQU0sRUFDbENmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUlKLEtBQUssQ0FBQ3VTLFdBQVcsQ0FBQ3hPLFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQyxHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBSTlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBTSxFQUNuRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQVEsQ0FDckQsQ0FDRCxFQUNOaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN2QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFDLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRWMsU0FBVTJVLGdCQUFnQkEsQ0FBQTtZQUN2QyxNQUFNO2NBQUV2VSxLQUFLO2NBQUVDLFFBQVE7Y0FBRWlVO1lBQVksQ0FBRSxHQUFHLElBQUFyVSxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1XLFVBQVUsR0FBR2YsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNbUIsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1nUixNQUFNLEdBQUdBLENBQUEsS0FBTWxVLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUNwQyxNQUFNL0YsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUVsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBRVZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUFELEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0VSxRQUFBLEdBQUE1VSxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxNQUFNNlUsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUU1VSxLQUFBLENBQUE2VSxLQUFLO1lBQ1p6QixRQUFRLEVBQUVwVCxLQUFBLENBQUFtVCxRQUFRO1lBQ2xCMkIsS0FBSyxFQUFFOVUsS0FBQSxDQUFBK1UsS0FBSztZQUNaQyxRQUFRLEVBQUVoVixLQUFBLENBQUFpVixRQUFRO1lBQ2xCQyxNQUFNLEVBQUVsVixLQUFBLENBQUFtVixNQUFNO1lBQ2RDLEtBQUssRUFBRVYsUUFBQSxDQUFBVztXQUNQO1VBRUssU0FBVXJULGFBQWFBLENBQUNzVCxLQUFLO1lBQ2xDLE1BQU07Y0FBRXBWLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaVU7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTtjQUFFNkIsSUFBSTtjQUFFbEIsSUFBSTtjQUFFd1UsS0FBSztjQUFFdlUsTUFBTTtjQUFFcUM7WUFBSyxDQUFFLEdBQUdpUyxLQUFLO1lBRWxELE1BQU0sQ0FBQ0UsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVWLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUVoRCxNQUFNO2NBQUV5RCxLQUFLO2NBQUU4QyxXQUFXO2NBQUVySDtZQUFLLENBQUUsR0FBR1YsS0FBSyxDQUFDTyxVQUFVLENBQUN3QixJQUFJLENBQUM7WUFDNUQsTUFBTSxDQUFDeVQsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHOVYsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUM4QixJQUFJLENBQUMsQ0FBQztZQUV4RSxJQUFBZixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQndWLGdCQUFnQixDQUFDeFYsUUFBUSxDQUFDOEIsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDO1lBQ0YsTUFBTW9TLE1BQU0sR0FBR0EsQ0FBQSxLQUFNbFUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBQ3BDLE1BQU1qRixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QitTLGdCQUFnQixDQUFDL1MsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFcEIsSUFBSTtnQkFBRW9CO2NBQUssQ0FBRSxHQUFHVCxLQUFLLENBQUNFLGFBQWE7Y0FDM0MzQyxRQUFRLENBQUNvSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxJQUFJLENBQUNuRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ3dCLElBQUksQ0FBQyxFQUFFO2NBQzVCeUYsT0FBTyxDQUFDa08sSUFBSSxDQUFDLGdEQUFnRDNULElBQUksRUFBRSxDQUFDO2NBQ3BFLE9BQU8sSUFBSTs7WUFHWixNQUFNNkQsS0FBSyxHQUFHO2NBQUVYLEtBQUs7Y0FBRThDLFdBQVc7Y0FBRTVFLEtBQUssRUFBRXFTO1lBQWEsQ0FBRTtZQUUxRDtZQUVBLE1BQU1HLEtBQUssR0FBR2xCLFVBQVUsQ0FBQzVULElBQUksQ0FBQztZQUM5QixPQUNDbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDRVUsTUFBTSxHQUFHbkIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS00sS0FBSyxDQUFNLEdBQUcsSUFBSSxFQUNqQ2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VWLEtBQUs7Y0FDTHJLLEdBQUcsRUFBRSxHQUFHdkosSUFBSSxpQkFBaUI7Y0FDN0IyQixPQUFPLEVBQUMsVUFBVTtjQUNsQnVCLEtBQUssRUFBRUEsS0FBSztjQUNabEQsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FDTjZELEtBQUs7Y0FDVG5ELFFBQVEsRUFBRUEsUUFBUTtjQUNsQjBSLE1BQU0sRUFBRUE7WUFBTSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQXhVLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ25EZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFYyxTQUFVZ1csd0JBQXdCQSxDQUFBO1lBQy9DLE1BQU07Y0FBRTVWLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaVU7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTVcsVUFBVSxHQUFHZixJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1tQixRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFRyxhQUFhLEVBQUU7Z0JBQUViLElBQUk7Z0JBQUVvQjtjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEbEQsUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTWdSLE1BQU0sR0FBR0EsQ0FBQSxLQUFNbFUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBQ3BDLE1BQU0vRixRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBRWxCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNELENBQ0csRUFFVkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLEVBQ05LLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZSxlQUFBLENBQUFwQixjQUFjLE9BQUcsQ0FDYixDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBTU8sTUFBTWlXLHFCQUFxQixHQUFBdkcsT0FBQSxDQUFBdUcscUJBQUEsR0FBR2xXLE1BQUEsQ0FBQVEsT0FBSyxDQUFDMlYsYUFBYSxDQUFDLEVBQTZCLENBQUM7VUFDaEYsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTXBXLE1BQUEsQ0FBQVEsT0FBSyxDQUFDNlYsVUFBVSxDQUFDSCxxQkFBcUIsQ0FBQztVQUFDdkcsT0FBQSxDQUFBeUcsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUHRGLElBQUF4UyxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBY00sU0FBVXFXLHdCQUF3QkEsQ0FBQztZQUFFbFUsSUFBSTtZQUFFTSxVQUFVO1lBQUVvQixRQUFRO1lBQUV5UyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUM5RyxNQUFNO2NBQ0xsVyxLQUFLO2NBQ0xDLFFBQVE7Y0FDUnVHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNeU0sUUFBUSxHQUFHQSxDQUFBLEtBQU10SyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBRXpDLE9BQ0MxQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLEVBQzVCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRTZIO1lBQVEsR0FDL0MzTSxLQUFLLENBQUNtVyxjQUFjLENBQUNqUixPQUFPLENBQUNrUixXQUFXLENBQ2pDLENBQ0osQ0FDRSxFQUNUelcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBUSxDQUM1QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFSLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBeVcsU0FBQSxHQUFBelcsT0FBQTtVQUNBLElBQUEwVyxVQUFBLEdBQUExVyxPQUFBO1VBRU0sU0FBVTJXLHdCQUF3QkEsQ0FBQztZQUFFaFIsUUFBUTtZQUFFaVI7VUFBVSxDQUFFO1lBQ2hFLE1BQU0sQ0FBQ3pQLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMa1IsTUFBTTtjQUNOMVMsS0FBSztjQUNMd0csS0FBSztjQUNMdkcsUUFBUTtjQUNSdUcsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUNpSyxNQUFNLEVBQUVzTSxTQUFTLENBQUMsR0FBRzlXLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxNQUFNbUosR0FBRyxHQUFHaEwsTUFBQSxDQUFBUSxPQUFLLENBQUMwTSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQzFILE9BQU8sRUFBRXVSLFVBQVUsQ0FBQyxHQUFHL1csTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0rRixNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCUCxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU07Z0JBQUUyUDtjQUFTLENBQUUsR0FBR2pFLE1BQU0sQ0FBQ2pSLEtBQUs7Y0FFbEMsTUFBTW1WLE1BQU0sR0FBRyxFQUFFO2NBRWpCRCxTQUFTLENBQUNuRixPQUFPLENBQUMsQ0FBQ3FGLFFBQVEsRUFBRXhCLEtBQUssS0FBSTtnQkFDckMsSUFBSSxDQUFDd0IsUUFBUSxFQUFFQSxRQUFRLElBQUksQ0FBQ0EsUUFBUSxFQUFFOVEsT0FBTyxDQUFDeUQsTUFBTSxJQUFJc04sS0FBSyxDQUFDRCxRQUFRLEVBQUVFLGFBQWEsQ0FBQyxFQUFFO2tCQUN2RkgsTUFBTSxDQUFDdEYsSUFBSSxDQUFDK0QsS0FBSyxDQUFDO2tCQUNsQjs7Z0JBRUQsTUFBTTJCLE9BQU8sR0FBR0gsUUFBUSxDQUFDOVEsT0FBTyxDQUFDa1IsTUFBTSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQy9ULEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ2xFLElBQUk2VCxPQUFPLENBQUN4TixNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUN2Qm9OLE1BQU0sQ0FBQ3RGLElBQUksQ0FBQytELEtBQUssQ0FBQzs7Y0FFcEIsQ0FBQyxDQUFDO2NBRUYsSUFBSXVCLE1BQU0sQ0FBQ3BOLE1BQU0sRUFBRTtnQkFDbEJpTixTQUFTLENBQUNHLE1BQU0sQ0FBQztnQkFDakI1UCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNsQjs7Y0FHRCxNQUFNL0csUUFBUSxDQUFDeUgsSUFBSSxFQUFFO2NBQ3JCVixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCd1AsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVEN1csTUFBQSxDQUFBUSxPQUFLLENBQUM2TSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUM3QyxNQUFNLENBQUNYLE1BQU0sRUFBRTtjQUNwQixNQUFNMk4sU0FBUyxHQUFHeE0sR0FBRyxDQUFDc0MsT0FBTztjQUM3QmtLLFNBQVMsQ0FBQ0MsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUMsQ0FBQzVGLE9BQU8sQ0FBQyxDQUFDMEYsSUFBSSxFQUFFN0IsS0FBSyxLQUFJO2dCQUN2RixJQUFJLENBQUNsTCxNQUFNLENBQUNrTixRQUFRLENBQUNoQyxLQUFLLENBQUMsRUFBRTtnQkFDN0I2QixJQUFJLENBQUNuVSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDckNpVSxJQUFJLENBQUNJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxNQUFLO2tCQUNyQ0osSUFBSSxDQUFDblUsU0FBUyxDQUFDQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQztnQkFDRmlQLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQztrQkFBRUMsR0FBRyxFQUFFLENBQUM7a0JBQUVDLFFBQVEsRUFBRTtnQkFBUSxDQUFFLENBQUM7Z0JBQ25EO2NBQ0QsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUN0TixNQUFNLENBQUMsQ0FBQztZQUVaLE1BQU11TixZQUFZLEdBQUc7Y0FDcEJ2TixNQUFNO2NBQ05zTTthQUNBO1lBQ0QsTUFBTWxTLFVBQVUsR0FBR0EsQ0FBQSxLQUFNbVMsVUFBVSxDQUFDLENBQUN2UixPQUFPLENBQUM7WUFDN0MsTUFBTXdTLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUksQ0FBQzFYLFFBQVEsQ0FBQzJYLFdBQVcsRUFBRTtnQkFDMUJyUyxRQUFRLEVBQUU7Z0JBQ1Y7O2NBRURoQixVQUFVLEVBQUU7WUFDYixDQUFDO1lBQ0QsT0FDQzVFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNpVyxTQUFBLENBQUFSLHFCQUFxQixDQUFDZ0MsUUFBUTtjQUFDMVUsS0FBSyxFQUFFdVU7WUFBWSxHQUNsRC9YLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE9BQUEsQ0FBQTRXLFdBQVcsT0FBRyxFQUVmblksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU3VLLEdBQUcsRUFBRUEsR0FBRztjQUFFckssU0FBUyxFQUFDO1lBQXlDLEdBRXJFWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBcUssYUFBYTtjQUFDekQsS0FBSyxFQUFFbkssTUFBTSxDQUFDWCxNQUFNLEdBQUd4SixLQUFLLENBQUNtSyxNQUFNLENBQUM2TixjQUFjLEdBQUc7WUFBRSxFQUFJLEVBQzFFclksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tXLFVBQUEsQ0FBQTJCLG9CQUFvQjtjQUFDOU4sTUFBTSxFQUFFQSxNQUFNO2NBQUVzTSxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUM5RDlXLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtRCxHQUNwRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRTZTO1lBQWEsR0FDdkRsUixXQUFXLENBQUN2QixPQUFPLENBQUNHLE1BQU0sQ0FDbkIsRUFDVDFGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFeUMsTUFBTTtjQUFFOUQsUUFBUSxFQUFFLENBQUMsQ0FBQzBHLE1BQU0sQ0FBQ1gsTUFBTSxJQUFJekM7WUFBUSxHQUM5RU4sV0FBVyxDQUFDdkIsT0FBTyxDQUFDd0MsSUFBSSxDQUNqQixDQUNELENBQ0EsQ0FDc0IsRUFFaEN2QyxPQUFPLElBQ1B4RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUFDTyxJQUFJO2NBQUNaLFNBQVMsRUFBRWEsUUFBUTtjQUFFQSxRQUFRLEVBQUVoQjtZQUFVLEdBQzNENUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDbVcsY0FBYyxDQUFDOVEsTUFBTSxDQUFDM0UsS0FBSyxDQUFNLEVBQzVDZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSixLQUFLLENBQUNtVyxjQUFjLENBQUM5USxNQUFNLENBQUN0QixXQUFXLENBQUssQ0FFakQsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZHQSxJQUFBcEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNZLFlBQUEsR0FBQXRZLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVV1WSxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRW5ZO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdEMsSUFBSTtjQUFFZ0Y7WUFBTyxDQUFFLEdBQUdsRixLQUFLLENBQUNtVyxjQUFjO1lBQ3RDLE1BQU07Y0FBRWlDO1lBQU8sQ0FBRSxHQUFHLElBQUFGLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDM0MsT0FDQzFZLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEwRCxHQUM1RVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUNvQixPQUFPLEVBQUVzVDtZQUFPLEdBQ3JDbFQsT0FBTyxDQUFDa1IsV0FBVyxDQUNaLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBelcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBc1ksWUFBQSxHQUFBdFksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVUwWSxvQkFBb0JBLENBQUM7WUFBRTdVLFFBQVE7WUFBRThVLEtBQUs7WUFBRUM7VUFBTSxDQUFFO1lBQy9ELE1BQU07Y0FDTHhZLEtBQUssRUFBRTtnQkFBRW1XLGNBQWMsRUFBRW5XO2NBQUs7WUFBRSxDQUNoQyxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTTtjQUFFa1k7WUFBTyxDQUFFLEdBQUcsSUFBQUYsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUMzQyxNQUFNdlQsT0FBTyxHQUFHcEMsS0FBSyxJQUFHO2NBQ3ZCLElBQUksQ0FBQzhWLE1BQU0sRUFBRTtnQkFDWixPQUFPRCxLQUFLLENBQUMsSUFBSSxDQUFDOztjQUVuQkgsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE9BQ0N6WSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBeUIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuRSxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ3VULFNBQVM7Y0FBRTNULE9BQU8sRUFBRUEsT0FBTztjQUFFckIsUUFBUSxFQUFFQTtZQUFRLEdBQzFFekQsS0FBSyxDQUFDa0YsT0FBTyxDQUFDdVQsU0FBUyxDQUNoQixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUE5WSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOFksT0FBQSxHQUFBOVksT0FBQTtVQUNBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQStZLE9BQUEsR0FBQS9ZLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVVnWixrQkFBa0JBLENBQUM7WUFBRTdSLFFBQVE7WUFBRXpCLElBQUk7WUFBRXVULE9BQU87WUFBRXBXLFFBQVE7WUFBRWdCO1VBQVEsQ0FBRTtZQUNqRixNQUFNLENBQUNxVixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHcFosTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRS9DLElBQUl1RixRQUFRLEVBQUU7Y0FDYixPQUNDcEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXlWLE9BQU87Z0JBQUNySCxNQUFNO2dCQUFDak8sT0FBTyxFQUFDO2NBQVMsRUFBRyxDQUMvQjs7WUFJUixPQUNDL0QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NZLE9BQU8sQ0FBQ2IsUUFBUTtjQUNoQjlWLElBQUksRUFBQyxrQkFBa0I7Y0FDdkJ6QixTQUFTLEVBQUMsa0NBQWtDO2NBQzVDNkMsS0FBSyxFQUFFMFYsT0FBTztjQUNkSSxJQUFJLEVBQUU3SyxLQUFBLENBQUE4Syx5QkFBeUI7Y0FDL0J6VyxRQUFRLEVBQUVBO1lBQVEsR0FFakIsQ0FBQzZDLElBQUksSUFBSXdULEtBQUssS0FBS25aLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzWSxPQUFPLENBQUM5SSxJQUFJO2NBQUN0UCxTQUFTLEVBQUM7WUFBYyxFQUFHLEVBQzdEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVksT0FBQSxDQUFBTCxvQkFBb0I7Y0FBQ0UsTUFBTSxFQUFFbFQsSUFBSSxJQUFJd1QsS0FBSztjQUFFclYsUUFBUSxFQUFFQSxRQUFRO2NBQUU4VSxLQUFLLEVBQUVRO1lBQVEsRUFBSSxDQUNsRTtVQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQXBaLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXVaLFNBQUEsR0FBQXZaLE9BQUE7VUFDQSxJQUFBc1ksWUFBQSxHQUFBdFksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5VyxTQUFBLEdBQUF6VyxPQUFBO1VBRU0sU0FBVXNaLHlCQUF5QkEsQ0FBQzlELEtBQUs7WUFDOUMsTUFBTTtjQUFFZ0U7WUFBUyxDQUFFLEdBQUcsSUFBQUQsU0FBQSxDQUFBRSxRQUFRLEVBQUNqRSxLQUFLLENBQUNDLEtBQUssQ0FBQztZQUMzQyxNQUFNO2NBQUVpRSxPQUFPO2NBQUVuVyxLQUFLLEdBQUc7WUFBRSxDQUFFLEdBQUdpUyxLQUFLLENBQUNqUyxLQUFLO1lBQzNDLE1BQU07Y0FBRXVQLE1BQU07Y0FBRTZHLFNBQVM7Y0FBRUM7WUFBVSxDQUFFLEdBQUcsSUFBQXRCLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDakUsTUFBTTtjQUFFNUI7WUFBUyxDQUFFLEdBQUcsSUFBQUosU0FBQSxDQUFBTix3QkFBd0IsR0FBRTtZQUNoRCxNQUFNO2NBQ0wvVixLQUFLLEVBQUU7Z0JBQUVtVyxjQUFjLEVBQUVuVztjQUFLLENBQUU7Y0FDaENDO1lBQVEsQ0FDUixHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXVaLEdBQUcsR0FBRyxrQ0FBa0NILE9BQU8sR0FBRyx5QkFBeUIsR0FBRyxFQUFFLEVBQUU7WUFDeEYsTUFBTTdXLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCMFMsS0FBSyxDQUFDc0UsUUFBUSxDQUFDO2dCQUFFdlcsS0FBSyxFQUFFVCxLQUFLLENBQUM0RSxNQUFNLENBQUNuRSxLQUFLO2dCQUFFbVcsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7Y0FBTyxDQUFFLENBQUM7WUFDbEUsQ0FBQztZQUNELE1BQU1LLFVBQVUsR0FBR0EsQ0FBQSxLQUFNSCxVQUFVLENBQUNwRSxLQUFLLENBQUNDLEtBQUssQ0FBQztZQUNoRCxNQUFNdUUsYUFBYSxHQUFHbFgsS0FBSyxJQUFHO2NBQzdCLE1BQU1tWCxLQUFLLEdBQUdBLENBQUMzQyxJQUFJLEVBQUU3QixLQUFLLEtBQUk7Z0JBQzdCLE9BQU9BLEtBQUssS0FBS0QsS0FBSyxDQUFDQyxLQUFLLEdBQUc7a0JBQUUsR0FBRzZCLElBQUk7a0JBQUVvQyxPQUFPLEVBQUUsQ0FBQ0E7Z0JBQU8sQ0FBRSxHQUFHO2tCQUFFLEdBQUdwQyxJQUFJO2tCQUFFb0MsT0FBTyxFQUFFO2dCQUFLLENBQUU7Y0FDNUYsQ0FBQztjQUNELE1BQU0xRixJQUFJLEdBQUdsQixNQUFNLENBQUN0SCxHQUFHLENBQUN5TyxLQUFLLENBQUM7Y0FDOUJOLFNBQVMsQ0FBQzNGLElBQUksQ0FBQztjQUNmO2NBQ0E7Y0FDQTZDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBRUQsT0FDQzlXLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpRCxHQUMvRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVcsR0FBRThVLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUMsRSxJQUFRLEVBRW5EMVYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBNlUsS0FBSztjQUNMOVQsSUFBSSxFQUFDLE1BQU07Y0FDWHNDLEtBQUssRUFBRUEsS0FBSztjQUNaaVcsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCM1csUUFBUSxFQUFFQSxRQUFRO2NBQ2xCc0YsV0FBVyxFQUFFL0gsS0FBSyxDQUFDNlksT0FBTyxDQUFDOVE7WUFBVyxFQUNyQyxFQUNGcEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWUsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXlSLFVBQVU7Y0FDVnRRLElBQUksRUFBQyxjQUFjO2NBQ25CNUIsU0FBUyxFQUFFbVosR0FBRztjQUNkL1ksS0FBSyxFQUFFVixLQUFLLENBQUNrRixPQUFPLENBQUM0VSxXQUFXO2NBQ2hDaFYsT0FBTyxFQUFFOFU7WUFBYSxFQUNyQixFQUNGamEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBeVIsVUFBVTtjQUNWdFEsSUFBSSxFQUFDLFFBQVE7Y0FDYjVCLFNBQVMsRUFBQywwQkFBMEI7Y0FDcENJLEtBQUssRUFBRVYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDbUUsTUFBTTtjQUMzQnZFLE9BQU8sRUFBRTZVO1lBQVUsRUFDbEIsQ0FDTyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUFoYSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQXNZLFlBQUEsR0FBQXRZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVbWEsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUU5WixRQUFRO2NBQUVELEtBQUs7Y0FBRTBTLE1BQU07Y0FBRWxNO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRS9ELE1BQU07Y0FBRXVCO1lBQUssQ0FBRSxHQUFHLElBQUF5VyxZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQ3pDLElBQUk7Y0FBRW5UO1lBQU8sQ0FBRSxHQUFHbEYsS0FBSyxDQUFDbVcsY0FBYztZQUN0QyxNQUFNLENBQUN0UCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHbkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0yTyxXQUFXLEdBQUdBLENBQUEsS0FBTXJKLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTWtILFVBQVUsR0FBRyxNQUFBQSxDQUFPO2NBQUU0RjtZQUFLLENBQUUsS0FBSTtjQUN0QyxJQUFJO2dCQUNILE1BQU12TCxRQUFRLEdBQUcsTUFBTW5JLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzBNLFFBQVEsQ0FBQ3dGLEtBQUssRUFBRTtrQkFBRXFHLE9BQU8sRUFBRXRILE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQ3VZO2dCQUFPLENBQUUsQ0FBQztnQkFDeEYsTUFBTXJELFNBQVMsR0FBR3ZPLFFBQVEsQ0FBQ3VPLFNBQVMsQ0FBQ3ZMLEdBQUcsQ0FBQyxDQUFDO2tCQUFFeUwsUUFBUTtrQkFBRTlRLE9BQU87a0JBQUVrVTtnQkFBYyxDQUFFLE1BQU07a0JBQ3BGcEQsUUFBUTtrQkFDUjlRLE9BQU87a0JBQ1BnUixhQUFhLEVBQUVrRDtpQkFDZixDQUFDLENBQUM7Z0JBRUh4WSxLQUFLLENBQUN1RixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUN2QmlMLFVBQVUsQ0FBQzZCLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQnJTLEtBQUssQ0FBQ3VGLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ3hCL0csUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO29CQUFFc1AsU0FBUyxFQUFFLENBQUMsR0FBR2pFLE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQ2tWLFNBQVMsRUFBRSxHQUFHQSxTQUFTO2tCQUFDLENBQUUsQ0FBQztnQkFDN0UsQ0FBQyxFQUFFLEdBQUcsQ0FBQztlQUNQLENBQUMsT0FBT3JDLEtBQUssRUFBRTtnQkFDZjlNLE9BQU8sQ0FBQ2tNLEdBQUcsQ0FBQ1ksS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQzNVLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFzRCxHQUN4RVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQVEsUUFBUTtjQUFDeEssT0FBTyxFQUFDLE1BQU07Y0FBQ29CLE9BQU8sRUFBRXFMO1lBQVcsR0FDM0NqTCxPQUFPLENBQUNnVixpQkFBaUIsQ0FDaEIsRUFDWHZhLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxXQUFBLENBQUFpQyxlQUFlO2NBQ2Z6TSxJQUFJLEVBQUV1QixTQUFTO2NBQ2ZzVCxLQUFLLEVBQUUzVCxLQUFLLENBQUMrSixLQUFLLENBQUM0SixLQUFLO2NBQ3hCQyxPQUFPLEVBQUU1VCxLQUFLLENBQUMrSixLQUFLLENBQUM2SixPQUFPO2NBQzVCOUosU0FBUyxFQUFFOUosS0FBSyxDQUFDK0osS0FBSyxDQUFDQyxZQUFZO2NBQ25DN0ksT0FBTyxFQUFFd0ksV0FBVztjQUNwQjFKLFdBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFXO2NBQzlCL0YsS0FBSyxFQUFFVixLQUFLLENBQUNtVyxjQUFjLENBQUNrRSxjQUFjLENBQUMzWixLQUFLO2NBQ2hENFosWUFBWSxFQUFFdGEsS0FBSyxDQUFDbVcsY0FBYyxDQUFDa0UsY0FBYyxDQUFDdFcsV0FBVztjQUM3RGdLLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFtSyxZQUFBLEdBQUF0WSxPQUFBO1VBQ00sU0FBVXlaLFFBQVFBLENBQUNoRSxLQUFLO1lBQzdCLE1BQU07Y0FBRStDLE9BQU87Y0FBRW1DLElBQUk7Y0FBRWYsVUFBVTtjQUFFL0w7WUFBSyxDQUFFLEdBQUcsSUFBQXlLLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFFcEUsTUFBTW1DLEtBQUssR0FBR25GLEtBQUssSUFBRztjQUNyQnBELFVBQVUsQ0FBQzZCLFVBQVUsQ0FBQyxNQUFNeUcsSUFBSSxDQUFDdE4sT0FBTyxDQUFDb0ksS0FBSyxDQUFDLEVBQUV2UyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMwWCxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELE1BQU1wQixTQUFTLEdBQUcxVyxLQUFLLElBQUc7Y0FDekIsTUFBTVMsS0FBSyxHQUFHVCxLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDc1gsSUFBSSxFQUFFO2NBRTlDLElBQUkvWCxLQUFLLENBQUM0SSxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN4QjtnQkFDQSxJQUFJNUksS0FBSyxDQUFDZ1ksUUFBUSxJQUFJckYsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDbFMsS0FBSyxFQUFFO29CQUNYcVcsVUFBVSxDQUFDbkUsS0FBSyxDQUFDOztrQkFFbEJtRixLQUFLLENBQUNuRixLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQjNTLEtBQUssQ0FBQ2lZLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVEO2dCQUNBLElBQUl0RixLQUFLLEdBQUc1SCxLQUFLLENBQUNqRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUM3QmdSLEtBQUssQ0FBQ25GLEtBQUssR0FBRyxDQUFDLENBQUM7a0JBQ2hCOztnQkFFRDNTLEtBQUssQ0FBQ2lZLGNBQWMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDeFgsS0FBSyxFQUFFO2dCQUNaaVYsT0FBTyxFQUFFO2dCQUVUbkcsVUFBVSxDQUFDNkIsVUFBVSxDQUFDLE1BQUs7a0JBQzFCMEcsS0FBSyxDQUFDbkYsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Y0FHTixJQUFJM1MsS0FBSyxDQUFDNEksR0FBRyxLQUFLLFdBQVcsSUFBSSxDQUFDbkksS0FBSyxFQUFFO2dCQUN4Q1QsS0FBSyxDQUFDaVksY0FBYyxFQUFFO2dCQUV0QixJQUFJalksS0FBSyxDQUFDZ1ksUUFBUSxJQUFJckYsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDbFMsS0FBSyxFQUFFO29CQUNYcVcsVUFBVSxDQUFDbkUsS0FBSyxDQUFDO29CQUNqQm1GLEtBQUssQ0FBQ25GLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUdqQjNTLEtBQUssQ0FBQ2lZLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVELElBQUl0RixLQUFLLEdBQUcsQ0FBQyxFQUFFbUUsVUFBVSxDQUFDbkUsS0FBSyxDQUFDOztZQUVsQyxDQUFDO1lBQ0QsT0FBTztjQUFFK0Q7WUFBUyxDQUFFO1VBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBelosTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBOFksT0FBQSxHQUFBOVksT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFnYixRQUFBLEdBQUFoYixPQUFBO1VBQ0EsSUFBQWliLFNBQUEsR0FBQWpiLE9BQUE7VUFFTSxTQUFVcVksb0JBQW9CQSxDQUFDO1lBQUU5TixNQUFNO1lBQUVzTTtVQUFTLENBQUU7WUFDekQsTUFBTTtjQUFFL0QsTUFBTTtjQUFFelM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVqRCxNQUFNLENBQUM2RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1pQixRQUFRLEdBQUdBLENBQUM7Y0FBRUcsYUFBYSxFQUFFMEU7WUFBTSxDQUFFLEtBQUk7Y0FDOUMsTUFBTXFQLFNBQVMsR0FBR3JQLE1BQU0sQ0FBQ25FLEtBQUssQ0FBQ2lJLEdBQUcsQ0FBQzhMLElBQUksS0FBSztnQkFDM0NMLFFBQVEsRUFBRUssSUFBSSxDQUFDTCxRQUFRO2dCQUN2QjlRLE9BQU8sRUFBRW1SLElBQUksQ0FBQ25SLE9BQU87Z0JBQ3JCZ1IsYUFBYSxFQUFFRyxJQUFJLENBQUNIO2VBQ3BCLENBQUMsQ0FBQztjQUVIOVcsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFc1AsU0FBUyxFQUFFLENBQUMsR0FBR0EsU0FBUztjQUFDLENBQUUsQ0FBQztZQUNsRCxDQUFDO1lBRUQsSUFBSTVQLFFBQVEsRUFDWCxPQUNDcEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXlWLE9BQU87Y0FBQ3JILE1BQU07Y0FBQ2pPLE9BQU8sRUFBQztZQUFTLEVBQUcsQ0FDL0I7WUFFUixPQUNDL0QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NZLE9BQU8sQ0FBQ2IsUUFBUTtjQUNoQjlWLElBQUksRUFBQyxXQUFXO2NBQ2hCK1ksWUFBWSxFQUFFO2dCQUFFakUsUUFBUSxFQUFFO2NBQUUsQ0FBRTtjQUM5QmtFLFNBQVM7Y0FDVDlCLElBQUksRUFBRTRCLFNBQUEsQ0FBQUcsbUJBQW1CO2NBQ3pCN1gsS0FBSyxFQUFFdVAsTUFBTSxDQUFDalIsS0FBSyxDQUFDa1YsU0FBUztjQUM3QmxVLFFBQVEsRUFBRUE7WUFBUSxHQUVsQjlDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzWSxPQUFPLENBQUM5SSxJQUFJO2NBQUN0UCxTQUFTLEVBQUM7WUFBcUMsRUFBRyxFQUNoRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dhLFFBQUEsQ0FBQXpDLGNBQWMsT0FBRyxDQUNBO1VBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBeFksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUF1WixTQUFBLEdBQUF2WixPQUFBO1VBQ0EsSUFBQXFiLFFBQUEsR0FBQXJiLE9BQUE7VUFDQSxJQUFBc1ksWUFBQSxHQUFBdFksT0FBQTtVQUVBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQXlHLEtBQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFIQTs7VUFLTSxTQUFVb2IsbUJBQW1CQSxDQUFDNUYsS0FBSztZQUN4QyxNQUFNO2NBQUVnRTtZQUFTLENBQUUsR0FBRyxJQUFBRCxTQUFBLENBQUFFLFFBQVEsRUFBQ2pFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1lBQzNDLE1BQU07Y0FDTHJWLEtBQUssRUFBRTtnQkFBRW1XLGNBQWMsRUFBRW5XO2NBQUssQ0FBRTtjQUNoQ0MsUUFBUTtjQUNSeVMsTUFBTTtjQUNObE07WUFBSyxDQUNMLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDMkcsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNMk8sV0FBVyxHQUFHQSxDQUFBLEtBQU1ySixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO1lBQ2xELE1BQU1xVSxjQUFjLEdBQUdBLENBQUNuVixPQUFPLEVBQUVnUixhQUFjLEtBQUk7Y0FDbEQsTUFBTW9FLFlBQVksR0FBR3BFLGFBQWEsSUFBSTNCLEtBQUssQ0FBQ2pTLEtBQUssQ0FBQzRULGFBQWE7Y0FDL0QsT0FBT2hSLE9BQU8sQ0FBQ3FGLEdBQUcsQ0FBQyxDQUFDZ1EsTUFBTSxFQUFFL0YsS0FBSyxNQUFNO2dCQUFFbFMsS0FBSyxFQUFFaVksTUFBTTtnQkFBRTlCLE9BQU8sRUFBRWpFLEtBQUssS0FBSzhGO2NBQVksQ0FBRSxDQUFDLENBQUM7WUFDNUYsQ0FBQztZQUNELE1BQU12SCxJQUFJLEdBQUd3QixLQUFLLENBQUNqUyxLQUFLLEVBQUU0QyxPQUFPLEdBQUdtVixjQUFjLENBQUM5RixLQUFLLENBQUNqUyxLQUFLLENBQUM0QyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzVFLE1BQU0sQ0FBQzhTLE9BQU8sRUFBRXdDLFVBQVUsQ0FBQyxHQUFHMWIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUNvUyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU07Y0FBRTRGO1lBQVUsQ0FBRSxHQUFHLElBQUF0QixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBRTlDLE1BQU01VixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QjBTLEtBQUssQ0FBQ3NFLFFBQVEsQ0FBQztnQkFDZDNDLGFBQWEsRUFBRTNCLEtBQUssQ0FBQ2pTLEtBQUssQ0FBQzRULGFBQWE7Z0JBQ3hDRixRQUFRLEVBQUVuVSxLQUFLLENBQUM0RSxNQUFNLENBQUNuRSxLQUFLO2dCQUM1QjRDLE9BQU8sRUFBRThTLE9BQU8sQ0FBQ3pOLEdBQUcsQ0FBQzhMLElBQUksSUFBSUEsSUFBSSxDQUFDL1QsS0FBSztlQUN2QyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1tWSxTQUFTLEdBQUdBLENBQUM7Y0FBRTFZLGFBQWEsRUFBRTtnQkFBRU8sS0FBSyxFQUFFMFY7Y0FBTztZQUFFLENBQUUsS0FBSTtjQUMzRCxNQUFNMEMsa0JBQWtCLEdBQUcxQyxPQUFPLENBQUMyQyxTQUFTLENBQUNDLE1BQU0sSUFBSUEsTUFBTSxDQUFDbkMsT0FBTyxDQUFDO2NBQ3RFLE1BQU12QyxhQUFhLEdBQUd3RSxrQkFBa0IsS0FBSyxDQUFDLENBQUMsR0FBR3BPLFNBQVMsR0FBR29PLGtCQUFrQjtjQUNoRixNQUFNRyxRQUFRLEdBQUc7Z0JBQUU3RSxRQUFRLEVBQUUxVCxLQUFLO2dCQUFFNEMsT0FBTyxFQUFFOFMsT0FBTyxDQUFDek4sR0FBRyxDQUFDOEwsSUFBSSxJQUFJQSxJQUFJLENBQUMvVCxLQUFLLENBQUM7Z0JBQUU0VDtjQUFhLENBQUU7Y0FFN0YzQixLQUFLLENBQUNzRSxRQUFRLENBQUNnQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU12WSxLQUFLLEdBQUdpUyxLQUFLLENBQUNqUyxLQUFLLEVBQUUwVCxRQUFRLElBQUksRUFBRTtZQUN6QyxNQUFNOEMsVUFBVSxHQUFHalgsS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkIsTUFBTWdKLEtBQUssR0FBRytMLFVBQVUsQ0FBQ3BFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO2NBQ3JDcFYsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFc1AsU0FBUyxFQUFFbEo7Y0FBSyxDQUFFLENBQUM7WUFDekMsQ0FBQztZQUNELE1BQU0sQ0FBQzFHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQsTUFBTW1hLGVBQWUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDbEMsTUFBTTFVLE9BQU8sR0FBRyxJQUFJWixLQUFBLENBQUFnQyxjQUFjLEVBQUU7Y0FDcEM4SCxXQUFXLEVBQUU7Y0FDYjJELFVBQVUsQ0FBQyxNQUFLO2dCQUNmN00sT0FBTyxDQUFDNEMsT0FBTyxFQUFFO2NBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDUixPQUFPNUMsT0FBTztZQUNmLENBQUM7WUFDRCxNQUFNMlUsaUJBQWlCLEdBQUcsTUFBQUEsQ0FBTztjQUFFakk7WUFBSyxDQUFFLEtBQUk7Y0FDN0MsTUFBTWtELFFBQVEsR0FBRyxNQUFNNVcsUUFBUSxDQUFDd0IsS0FBSyxDQUFDa2EsZUFBZSxDQUFDO2dCQUFFaEksS0FBSztnQkFBRWtELFFBQVEsRUFBRTFULEtBQUs7Z0JBQUVrUyxLQUFLLEVBQUVELEtBQUssQ0FBQ0M7Y0FBSyxDQUFFLENBQUM7Y0FFckdyTyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCaUwsVUFBVSxDQUFDNkIsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCO2dCQUNBdUgsVUFBVSxDQUFDSCxjQUFjLENBQUNyRSxRQUFRLENBQUM5USxPQUFPLEVBQUU4USxRQUFRLENBQUNFLGFBQWEsQ0FBQyxDQUFDO2dCQUVwRS9QLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFRCxNQUFNO2NBQUVtVCxLQUFLO2NBQUVDLE9BQU87Y0FBRTVKO1lBQVksQ0FBRSxHQUFHaEssS0FBSyxDQUFDK0osS0FBSztZQUVwRCxPQUNDNVEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWtDLEdBQ3BEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkMsR0FJekRYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFXLEdBQUU4VSxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDLEUsSUFBUSxFQUNuRDFWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQTZVLEtBQUs7Y0FDTDVNLFdBQVcsRUFBRS9ILEtBQUssQ0FBQzJXLFNBQVMsQ0FBQzVPLFdBQVc7Y0FDeENoRyxJQUFJLEVBQUMsVUFBVTtjQUNmb0IsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRTtjQUNsQlYsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCMlcsU0FBUyxFQUFFQTtZQUFTLEVBQ25CLEVBQ0Z6WixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBZSxHQUNqQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQW1PLGlCQUFpQjtjQUNqQjNaLElBQUksRUFBQyxTQUFTO2NBQ2Q1QixTQUFTLEVBQUMsUUFBUTtjQUNsQm1ELFFBQVEsRUFBRSxDQUFDTixLQUFLLElBQUlBLEtBQUssS0FBSyxFQUFFO2NBQ2hDMkIsT0FBTyxFQUFFNlcsZUFBZTtjQUN4QmpiLEtBQUssRUFBRVYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDeVc7WUFBZSxFQUNuQyxFQUNGaGMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBeVIsVUFBVTtjQUFDdFEsSUFBSSxFQUFDLFFBQVE7Y0FBQzVCLFNBQVMsRUFBQyxRQUFRO2NBQUN3RSxPQUFPLEVBQUU2VSxVQUFVO2NBQUVqWixLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ21FO1lBQU0sRUFBSSxDQUN4RixDQUNMLEVBQ04xSixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNmEsUUFBQSxDQUFBckMsa0JBQWtCO2NBQ2xCN1IsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCdEQsUUFBUSxFQUFFLENBQUMyUixLQUFLLENBQUNqUyxLQUFLO2NBQ3RCbUMsSUFBSSxFQUFFdVQsT0FBTyxFQUFFclAsTUFBTTtjQUNyQnFQLE9BQU8sRUFBRUEsT0FBTztjQUNoQnBXLFFBQVEsRUFBRTZZO1lBQVMsRUFDbEIsRUFDRjNiLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxXQUFBLENBQUFpQyxlQUFlO2NBQ2ZvSSxLQUFLLEVBQUVBLEtBQUs7Y0FDWkMsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCOUosU0FBUyxFQUFFRSxZQUFZO2NBQ3ZCL0osV0FBVyxFQUFFRCxLQUFLLENBQUNDLFdBQVc7Y0FDOUJuQixJQUFJLEVBQUV1QixTQUFTO2NBQ2ZjLE9BQU8sRUFBRXdJLFdBQVc7Y0FDcEJ6UCxLQUFLLEVBQUVWLEtBQUssQ0FBQzhiLFlBQVksQ0FBQ3BiLEtBQUs7Y0FDL0I0WixZQUFZLEVBQUV0YSxLQUFLLENBQUM4YixZQUFZLENBQUMvWCxXQUFXO2NBQzVDZ0ssVUFBVSxFQUFFNk47WUFBaUIsRUFDNUIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNIQSxJQUFBamMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1jLFlBQUEsR0FBQW5jLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVb2Msb0JBQW9CQSxDQUFDO1lBQUVoQyxPQUFPO1lBQUVpQztVQUFZLENBQUU7WUFDN0QsTUFBTTtjQUNMelYsS0FBSztjQUNMeEcsS0FBSyxFQUFFO2dCQUFFbVcsY0FBYyxFQUFFblcsS0FBSztnQkFBRW1LO2NBQU0sQ0FBRTtjQUN4Q2xLO1lBQVEsQ0FDUixHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTStXLE1BQU0sR0FBR0MsSUFBSSxJQUFJQSxJQUFJLENBQUNyVyxJQUFJLEtBQUssZ0JBQWdCO1lBQ3JELE1BQU11SyxHQUFHLEdBQUc4TCxJQUFJLEtBQUs7Y0FBRS9ULEtBQUssRUFBRStULElBQUksQ0FBQzNMLEVBQUU7Y0FBRXRHLEtBQUssRUFBRWlTLElBQUksQ0FBQ3hXO1lBQUssQ0FBRSxDQUFDO1lBRTNELE1BQU1xRixPQUFPLEdBQUdTLEtBQUssQ0FBQytKLEtBQUssQ0FBQ2hRLFVBQVUsQ0FBQ2tOLEtBQUssQ0FBQ3dKLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUM3TCxHQUFHLENBQUNBLEdBQUcsQ0FBQztZQUNwRSxJQUFJMFAsWUFBWSxHQUFHO2NBQUUzWCxLQUFLLEVBQUUsRUFBRTtjQUFFOEIsS0FBSyxFQUFFakYsS0FBSyxDQUFDZ2EsT0FBTyxDQUFDa0M7WUFBVyxDQUFFO1lBRWxFLE1BQU16WixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QnpDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRTJTLE9BQU8sRUFBRXRYLEtBQUssQ0FBQzRFLE1BQU0sQ0FBQ25FO2NBQUssQ0FBRSxDQUFDO2NBQ25ELElBQUlULEtBQUssQ0FBQzRFLE1BQU0sQ0FBQ25FLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU02VyxPQUFPLEdBQUd4VCxLQUFLLENBQUMrSixLQUFLLENBQUNoUSxVQUFVLENBQUM0YixHQUFHLENBQUN6WixLQUFLLENBQUM0RSxNQUFNLENBQUNuRSxLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQzZXLE9BQU8sQ0FBQ3BULFNBQVMsQ0FBQ08sT0FBTyxFQUFFO2tCQUMvQjhVLFlBQVksQ0FBQyxDQUFDOVIsTUFBTSxDQUFDaVMsbUJBQW1CLENBQUMsQ0FBQztrQkFFMUM7OztjQUdGSCxZQUFZLENBQUMsRUFBRSxDQUFDO2NBQ2hCaGMsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFMlMsT0FBTyxFQUFFdFgsS0FBSyxDQUFDNEUsTUFBTSxDQUFDbkU7Y0FBSyxDQUFFLENBQUM7WUFDcEQsQ0FBQztZQUVELE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxnQkFBUUosS0FBSyxDQUFDZ2EsT0FBTyxDQUFDL1UsS0FBSyxDQUFTLEVBQ3BDdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJiLFlBQUEsQ0FBQU0sV0FBVztjQUFDbFosS0FBSyxFQUFFNlcsT0FBTztjQUFFalUsT0FBTyxFQUFFLENBQUMrVSxZQUFZLEVBQUUsR0FBRy9VLE9BQU8sQ0FBQztjQUFFdEQsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXpCLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdVQsTUFBQSxHQUFBdlQsT0FBQTtVQUNBLElBQUEwYyxNQUFBLEdBQUExYyxPQUFBO1VBQ0EsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFFTSxTQUFVMmMsc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRXZjLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNVyxVQUFVLEdBQUdmLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTW1CLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVHLGFBQWEsRUFBRTtnQkFBRWIsSUFBSTtnQkFBRW9CO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RsRCxRQUFRLENBQUNvSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNZ1IsTUFBTSxHQUFHQSxDQUFBLEtBQU1sVSxRQUFRLENBQUN5SCxJQUFJLEVBQUU7WUFDcEMsTUFBTW5DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCdEYsUUFBUSxDQUFDd0IsS0FBSyxDQUFDd0gsTUFBTSxFQUFFO2NBQ3ZCMUgsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTWlWLFVBQVUsR0FBR0EsQ0FBQSxLQUFNalYsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QyxNQUFNaWIsU0FBUyxHQUFHdmMsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsSUFBSUosSUFBSSxLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUdBLElBQUksS0FBSyxPQUFPLEdBQUcsT0FBTyxHQUFHQSxJQUFJO1lBQ3pHLE1BQU1tYixhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQmxiLE9BQU8sQ0FBQ3RCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHSixJQUFJLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBR0EsSUFBSSxDQUFDO1lBQzlFLENBQUM7WUFDRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQUVnYixhQUFhLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRyxJQUFBemIsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFd2MsYUFBYSxFQUFFLG9CQUFvQixDQUFDO1lBRTFELE9BQ0N4YixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBcUIsR0FDcENXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUNsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBbVQsUUFBUTtjQUNSaE8sS0FBSyxFQUFFakYsS0FBSyxDQUFDTyxVQUFVLENBQUN3RCxXQUFXLENBQUNrQixLQUFLO2NBQ3pDdkIsT0FBTyxFQUFDLFVBQVU7Y0FDbEIzQixJQUFJLEVBQUMsYUFBYTtjQUNsQlUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCMFIsTUFBTSxFQUFFQSxNQUFNO2NBQ2RwTSxXQUFXLEVBQUUvSCxLQUFLLENBQUNPLFVBQVUsQ0FBQ3dELFdBQVcsQ0FBQ2dFLFdBQVc7Y0FDckQ1RSxLQUFLLEVBQUVsRCxRQUFRLENBQUM4RDtZQUFXLEVBQzFCLENBQ0csQ0FDRCxFQUVOOUMsS0FBQSxDQUFBYixhQUFBLENBQUNtRCxXQUFBLENBQUFtWixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUgsU0FBUztjQUNwQnpXLE9BQU8sRUFBRTtnQkFDUnRFLEtBQUssRUFBRVIsS0FBQSxDQUFBYixhQUFBLENBQUMrQixNQUFBLENBQUF5YSxtQkFBbUI7a0JBQUNyYixPQUFPLEVBQUVBO2dCQUFPLEVBQUk7Z0JBQ2hEeUcsSUFBSSxFQUFFL0csS0FBQSxDQUFBYixhQUFBLENBQUNrYyxNQUFBLENBQUEvRix3QkFBd0I7a0JBQUNoUixRQUFRLEVBQUVBLFFBQVE7a0JBQUVpUixVQUFVLEVBQUVBO2dCQUFVO2VBQzFFO2NBQ0R6TyxXQUFXLEVBQUU5RyxLQUFBLENBQUFiLGFBQUEsQ0FBQytTLE1BQUEsQ0FBQThDLHdCQUF3QjtnQkFBQ2xVLElBQUksRUFBRTlCLFFBQVEsQ0FBQ1ksSUFBSTtnQkFBRXdCLFVBQVUsRUFBRUE7Y0FBVTtZQUFJLEVBQ3JGLENBQ0csQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUF0QixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBUU8sTUFBTWlkLGNBQWMsR0FBR0EsQ0FBQztZQUFFM0YsSUFBSSxFQUFFdUUsTUFBTTtZQUFFMUUsYUFBYTtZQUFFMUI7VUFBSyxDQUFVLEtBQUk7WUFDaEYsTUFBTW5ULElBQUksR0FBR21ULEtBQUssS0FBSzBCLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTztZQUN4RCxNQUFNMEMsR0FBRyxHQUFHLHVDQUF1Q3ZYLElBQUksS0FBSyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsa0JBQWtCLEVBQUU7WUFDaEgsT0FDQ3ZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBRW1aO1lBQUcsR0FDakI5WixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBZ0IsR0FBRTRCLElBQUksS0FBSyxPQUFPLElBQUl2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUErYixJQUFJO2NBQUM1YSxJQUFJLEVBQUVBLElBQUk7Y0FBRTVCLFNBQVMsRUFBQztZQUFTLEVBQUcsQ0FBUSxFQUN0R1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQW9CLEdBQUVtYixNQUFNLENBQVEsQ0FDaEQ7VUFFUCxDQUFDO1VBQUNuTSxPQUFBLENBQUF1TixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJGLElBQUFsZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBR0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBYU0sU0FBVWtZLFdBQVdBLENBQUM7WUFBRTdULFFBQVE7WUFBRVIsUUFBUTtZQUFFeVMsZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDekYsTUFBTTtjQUNMbFcsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDNlAsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHclEsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1vRSxLQUFLLEdBQUc7Y0FBRW5DLFFBQVEsRUFBRSxDQUFDeEQsUUFBUSxDQUFDOGMsUUFBUSxJQUFJdFo7WUFBUSxDQUFFO1lBQzFELE1BQU11WixVQUFVLEdBQUdBLENBQUEsS0FBTWhOLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU3RCxNQUFNaEMsVUFBVSxHQUFHNEYsS0FBSyxJQUFHO2NBQzFCLE9BQU8xVCxRQUFRLENBQUN3QixLQUFLLENBQUMwTSxRQUFRLENBQUN3RixLQUFLLEVBQUU7Z0JBQUUsR0FBR3VDO2NBQWUsQ0FBRSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDdlcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQSxHQUFLdEksS0FBSztjQUFFZCxPQUFPLEVBQUVrWSxVQUFVO2NBQUV0WixPQUFPLEVBQUMsTUFBTTtjQUFDdVosTUFBTSxFQUFFO1lBQUssR0FDcEV4VyxXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBQ25CLENBQ04sQ0FDRSxFQUNSbEssUUFBUSxFQUNSOEwsZUFBZSxJQUNmcFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBQLFdBQUEsQ0FBQWlDLGVBQWU7Y0FDZnpNLElBQUksRUFBRXlLLGVBQWU7Y0FDckJvSyxLQUFLLEVBQUUzVCxLQUFLLENBQUMrSixLQUFLLENBQUM0SixLQUFLO2NBQ3hCN0osU0FBUyxFQUFFOUosS0FBSyxDQUFDK0osS0FBSyxDQUFDQyxZQUFZO2NBQ25DN0ksT0FBTyxFQUFFcVYsVUFBVTtjQUNuQnRjLEtBQUssRUFBRVYsS0FBSyxDQUFDa2QsTUFBTSxDQUFDeGMsS0FBSztjQUN6QjRaLFlBQVksRUFBRXRhLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ25aLFdBQVc7Y0FDdENnSyxVQUFVLEVBQUVBO1lBQVUsRUFFdkIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBcE8sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBdWQsWUFBQSxHQUFBdmQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQTJQLEtBQUEsR0FBQTNQLE9BQUE7VUFFTSxTQUFVZ2QsbUJBQW1CQSxDQUFDO1lBQUVyYjtVQUFPLENBQUU7WUFDOUMsTUFBTTtjQUFFbVIsTUFBTTtjQUFFelMsUUFBUTtjQUFFbWQsUUFBUTtjQUFFNVcsS0FBSztjQUFFeEc7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN6RSxNQUFNbWQsV0FBVyxHQUFHN1csS0FBSyxDQUFDQyxXQUFXLENBQUN2QixPQUFPO1lBQzdDLE1BQU0sQ0FBQ29ZLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzVkLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUNnYyxXQUFXLEVBQUVDLFVBQVUsQ0FBQyxHQUFHOWQsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQ2tjLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdoZSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ2tSLE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQ2tWLFNBQVMsQ0FBQztZQUNoRSxNQUFNaUgsYUFBYSxHQUFHQSxDQUFBLEtBQU1ILFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFDcEQsTUFBTSxDQUFDSyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbmUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU11YyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNdGMsS0FBSyxHQUFHeEIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdWMsT0FBTyxFQUFFO2NBQ3RDWixRQUFRLENBQUM7Z0JBQUUzYjtjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBQVQsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFc2MsUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBRXhELE1BQU01TixXQUFXLEdBQUdBLENBQUEsS0FBTW9OLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNMVgsS0FBSyxHQUFHO2NBQUVkLE9BQU8sRUFBRXFMLFdBQVc7Y0FBRTFNLFFBQVEsRUFBRXhELFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxJQUFJekIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDbEY7WUFBSyxDQUFFO1lBQ2xHLE1BQU1xSCxNQUFNLEdBQUdyRyxLQUFLLElBQUluQixPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQU0wYyxTQUFTLEdBQUd2YixLQUFLLElBQUkrYSxVQUFVLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBRW5ELE1BQU1VLFVBQVUsR0FBRyxDQUFDVixXQUFXLEdBQUdILFdBQVcsQ0FBQ0ssS0FBSyxHQUFHTCxXQUFXLENBQUMzVixJQUFJO1lBQ3RFLE1BQU15VyxjQUFjLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2pDTCxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU03ZCxRQUFRLENBQUN3QixLQUFLLENBQUM0RixHQUFHLENBQUM7Z0JBQUVzUCxTQUFTLEVBQUUrRztjQUFLLENBQUUsQ0FBQztjQUM5QyxNQUFNemQsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO2NBQ3JCb1csYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNwQkYsYUFBYSxFQUFFO1lBQ2hCLENBQUM7WUFDRCxNQUFNUSxZQUFZLEdBQUc7Y0FDcEJ0WixPQUFPLEVBQUUwWSxXQUFXLEdBQUdXLGNBQWMsR0FBR0YsU0FBUztjQUNqRHhhLFFBQVEsRUFBR3hELFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxJQUFJekIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDbEYsS0FBSyxJQUFLbWM7YUFDaEU7WUFFRCxPQUNDbGUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ1gsTUFBTSxDQUFDdWQsY0FBYyxDQUFNLEVBQzVDMWUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdDLEdBQzdDLENBQUNrZCxXQUFXLElBQ1o3ZCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQ29CLE9BQU8sRUFBRWlFLE1BQU07Y0FBRTdHLElBQUksRUFBQztZQUFRLEdBQ25EbWIsV0FBVyxDQUFDalUsSUFBSSxDQUVsQixFQUNEekosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUEsR0FBSzBhLFlBQVk7Y0FBRWxjLElBQUksRUFBQztZQUFNLEdBQ2xEZ2MsVUFBVSxDQUNILEVBQ1IsQ0FBQ1YsV0FBVyxJQUNaN2QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUEsR0FBS2tDLEtBQUs7Y0FBRTFELElBQUksRUFBQztZQUFRLEdBQzdDbWIsV0FBVyxDQUFDaFUsTUFBTSxDQUVwQixDQUNJLENBQ0UsRUFDVDFKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtUCxLQUFBLENBQUErTyxrQkFBa0I7Y0FBQ1osS0FBSyxFQUFFQSxLQUFLO2NBQUVDLFFBQVEsRUFBRUEsUUFBUTtjQUFFWSxVQUFVLEVBQUVmLFdBQVc7Y0FBRS9RLE1BQU0sRUFBRW1SO1lBQWEsRUFBSSxDQUNuRyxFQUNOamUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytjLFlBQUEsQ0FBQS9JLGtCQUFrQjtjQUFDOU8sSUFBSSxFQUFFZ1ksZUFBZTtjQUFFM1YsT0FBTyxFQUFFd0k7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVBLElBQUF4USxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMlAsS0FBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUE0ZSxhQUFBLEdBQUE1ZSxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTZlLGlCQUFBLEdBQUE3ZSxPQUFBO1VBRU0sU0FBVTBlLGtCQUFrQkEsQ0FBQztZQUFFWixLQUFLO1lBQUVDLFFBQVE7WUFBRVksVUFBVTtZQUFFOVI7VUFBTSxDQUFFO1lBQ3pFLE1BQU07Y0FBRWlHLE1BQU07Y0FBRXpTLFFBQVE7Y0FBRW1kLFFBQVE7Y0FBRXBkLEtBQUs7Y0FBRXdHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXpFLE1BQU0rZCxTQUFTLEdBQUd2TCxNQUFNLElBQUc7Y0FDMUJpTCxRQUFRLENBQUNqTCxNQUFNLENBQUM7Y0FDaEIsTUFBTWpSLEtBQUssR0FBRztnQkFBRSxHQUFHaVIsTUFBTSxDQUFDalI7Y0FBSyxDQUFFO2NBQ2pDQSxLQUFLLENBQUNrVixTQUFTLEdBQUcsQ0FBQyxHQUFHK0csS0FBSyxDQUFDO2NBRTVCemQsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDNUYsS0FBSyxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJOGMsVUFBVSxFQUFFO2NBQ2YsT0FDQzVlLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvZSxhQUFBLENBQUFFLE9BQU8sQ0FBQ0MsS0FBSztnQkFBQ2pNLE1BQU0sRUFBRWdMLEtBQUs7Z0JBQUVPLFNBQVMsRUFBRUEsU0FBUztnQkFBRTNkLFNBQVMsRUFBQztjQUFlLEdBQzNFb2QsS0FBSyxDQUFDdFMsR0FBRyxDQUFDeUwsUUFBUSxJQUFHO2dCQUNyQixPQUNDbFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29lLGFBQUEsQ0FBQUUsT0FBTyxDQUFDekYsSUFBSTtrQkFBQzNOLEdBQUcsRUFBRXVMLFFBQVEsQ0FBQ0EsUUFBUTtrQkFBRTFULEtBQUssRUFBRTBUO2dCQUFRLEdBQ3BEbFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FlLGlCQUFBLENBQUFHLGdCQUFnQjtrQkFBQ2hMLElBQUksRUFBRWlELFFBQVE7a0JBQUVoVCxFQUFFLEVBQUMsS0FBSztrQkFBQ2tYLFNBQVM7Z0JBQUEsRUFBRyxDQUN6QztjQUVqQixDQUFDLENBQUMsQ0FDYSxDQUNkOztZQUlMLE9BQU9wYixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsS0FBQSxDQUFBSyxJQUFJO2NBQUN0UCxTQUFTLEVBQUMsZUFBZTtjQUFDbU4sS0FBSyxFQUFFaUYsTUFBTSxDQUFDalIsS0FBSyxDQUFDa1YsU0FBUztjQUFFOUcsT0FBTyxFQUFFNE8saUJBQUEsQ0FBQUc7WUFBZ0IsRUFBSTtVQUNwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTdkLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBMlAsS0FBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFpZixZQUFBLEdBQUFqZixPQUFBO1VBQ0EsSUFBQXFiLFFBQUEsR0FBQXJiLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQU9NLFNBQVVnZixnQkFBZ0JBLENBQUM7WUFBRWhMLElBQUk7WUFBRS9QLEVBQUUsR0FBRyxJQUFJO1lBQUVrWCxTQUFTLEdBQUc7VUFBSyxDQUFVO1lBQzlFLE1BQU0sQ0FBQytELFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdwZixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTtjQUFFeEI7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV0QyxNQUFNeUUsT0FBTyxHQUFHZCxFQUFFO1lBQ2xCLE1BQU1tYixRQUFRLEdBQUdBLENBQUEsS0FBTSxDQUFDRixVQUFVO1lBRWxDLE9BQ0NuZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsT0FBTztjQUFDckUsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeWUsWUFBQSxDQUFBSSxvQkFBb0I7Y0FBQ0QsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZDcmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3llLFlBQUEsQ0FBQUssaUJBQWlCLFFBQ2pCdmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQW1aLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFNUIsU0FBUztjQUNwQm9FLE9BQU87Y0FDUHBaLE9BQU8sRUFBRTtnQkFDUnFaLElBQUksRUFBRXpmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQStiLElBQUk7a0JBQUN4YyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUFDNEIsSUFBSSxFQUFDO2dCQUFNLEVBQUc7Z0JBQ3JEbWQsS0FBSyxFQUFFMWYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBK2IsSUFBSTtrQkFBQ3hjLFNBQVMsRUFBQyxnQkFBZ0I7a0JBQUM0QixJQUFJLEVBQUM7Z0JBQWM7O1lBQzNELEVBQ0EsRUFFRnZDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFvQixHQUFFc1QsSUFBSSxDQUFDaUQsUUFBUSxDQUFRLENBQ3ZELENBQ2MsRUFDcEJsWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeWUsWUFBQSxDQUFBUyxrQkFBa0IsUUFDbEIzZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBbVosb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDL0ksSUFBSSxDQUFDN04sT0FBTyxFQUFFeUQsTUFBTTtjQUNqQ3pELE9BQU8sRUFBRTtnQkFDUnFaLElBQUksRUFDSHpmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtUCxLQUFBLENBQUFLLElBQUk7a0JBQ0puQyxLQUFLLEVBQUVtRyxJQUFJLENBQUM3TixPQUFPO2tCQUNuQnRFLEtBQUssRUFBRTtvQkFBRXNWLGFBQWEsRUFBRW5ELElBQUksQ0FBQ21EO2tCQUFhLENBQUU7a0JBQzVDbEgsT0FBTyxFQUFFb0wsUUFBQSxDQUFBNEI7Z0JBQWMsRUFFeEI7Z0JBQ0R3QyxLQUFLLEVBQUUxZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtrQkFBS0UsU0FBUyxFQUFDO2dCQUFzQixHQUFFTixLQUFLLENBQUNtVyxjQUFjLENBQUNvSixZQUFZOztZQUMvRSxFQUNBLENBQ2tCLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBemYsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVNGYsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUU5TSxNQUFNO2NBQUUxUyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEQsT0FDQ2UsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0JXLEtBQUEsQ0FBQWIsYUFBQSxnQkFBUUosS0FBSyxDQUFDeUIsS0FBSyxDQUFDaVAsU0FBUyxDQUFDekwsS0FBSyxDQUFTLEVBQzVDaEUsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQW1ULFFBQVE7Y0FDUmxSLElBQUksRUFBQyxXQUFXO2NBQ2hCZ0csV0FBVyxFQUFFL0gsS0FBSyxDQUFDeUIsS0FBSyxDQUFDaVAsU0FBUyxDQUFDM0ksV0FBVztjQUM5QzVFLEtBQUssRUFBRXVQLE1BQU0sQ0FBQ2pSLEtBQUssRUFBRWlQO1lBQVMsRUFDN0IsQ0FDRyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUE1USxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVNmYsZ0JBQWdCQSxDQUFDO1lBQUUxZDtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFMlEsTUFBTTtjQUFFMVMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hELE1BQU11QyxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFRyxhQUFhLEVBQUU7Z0JBQUViLElBQUk7Z0JBQUVvQjtjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEbEQsUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTWdSLE1BQU0sR0FBR0EsQ0FBQSxLQUFNbFUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBRXBDLE1BQU12RSxLQUFLLEdBQUdsRCxRQUFRLENBQUN3QixLQUFLLENBQUNNLElBQUksQ0FBQyxJQUFJL0IsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQ2dHLFdBQVc7WUFFbkUsT0FDQ3BJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFPc2YsT0FBTyxFQUFDO1lBQUUsR0FBRTFmLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQUNrRCxLQUFLLENBQVMsRUFDbkR0RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQUN4USxRQUFRLEVBQUVBLFFBQVE7Y0FBRTBSLE1BQU0sRUFBRUEsTUFBTTtjQUFFdFQsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBRUEsSUFBSTtjQUFFb0IsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDckY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXhELE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVUrZixXQUFXQSxDQUFDO1lBQUV6STtVQUFJLENBQTZDO1lBQzlFLE9BQ0N2WCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFZLEdBQUU0VyxJQUFJLENBQUNuVixJQUFJLEUsS0FBWSxFLEtBQUNwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPOFcsSUFBSSxDQUFDL1QsS0FBSyxDQUFRLENBQzFFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXhELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyUCxLQUFBLEdBQUEzUCxPQUFBO1VBQ0EsSUFBQWdnQixZQUFBLEdBQUFoZ0IsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBaWdCLFlBQUEsR0FBQWpnQixPQUFBO1VBQ00sU0FBVWtnQixxQkFBcUJBLENBQUM7WUFBRS9kLElBQUk7WUFBRTZSO1VBQUksQ0FBRTtZQUNuRCxNQUFNO2NBQ0wzVCxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ6QjtZQUFLLENBQ0wsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQ3VNLE1BQU0sRUFBRXNULFNBQVMsQ0FBQyxHQUFHcGdCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNd2QsUUFBUSxHQUFHQSxDQUFBLEtBQU1lLFNBQVMsQ0FBQyxDQUFDdFQsTUFBTSxDQUFDO1lBQ3pDLE1BQU1nQixLQUFLLEdBQUdoTSxLQUFLLENBQUNNLElBQUksQ0FBQyxFQUFFcUosR0FBRyxDQUFDLENBQUM4TCxJQUFJLEVBQUU3QixLQUFLLEtBQUk7Y0FDOUMsTUFBTSxDQUFDMkssU0FBUyxFQUFFN2MsS0FBSyxDQUFDLEdBQUdzTSxNQUFNLENBQUNDLElBQUksQ0FBQ2pPLEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDbWUsTUFBTSxDQUFDO2NBQ3BFLE9BQU87Z0JBQUVuZSxJQUFJLEVBQUVtVixJQUFJLENBQUM4SSxTQUFTLENBQUM7Z0JBQUU3YyxLQUFLLEVBQUUrVCxJQUFJLENBQUMvVCxLQUFLO2NBQUMsQ0FBRTtZQUNyRCxDQUFDLENBQUM7WUFFRixPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXdELEdBQ3pFWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDa0QsS0FBSyxDQUFNLEVBQ2xDdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBK2IsSUFBSTtjQUFDNWEsSUFBSSxFQUFDLE1BQU07Y0FBQzVCLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ3dFLE9BQU8sRUFBRWthO1lBQVEsRUFBSSxDQUMxRCxFQUNUcmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQW1aLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFbFEsTUFBTTtjQUNqQjBTLE9BQU87Y0FDUHBaLE9BQU8sRUFBRTtnQkFDUnFaLElBQUksRUFBRXpmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5ZixZQUFBLENBQUFNLGVBQWU7a0JBQUM1YSxRQUFRLEVBQUV5WixRQUFRO2tCQUFFamQsSUFBSSxFQUFFQSxJQUFJO2tCQUFFbVYsSUFBSSxFQUFFelYsS0FBSyxDQUFDTSxJQUFJO2dCQUFDLEVBQUk7Z0JBQzVFc2QsS0FBSyxFQUFFMWYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLEtBQUEsQ0FBQUssSUFBSTtrQkFBQ3RQLFNBQVMsRUFBQyxzQkFBc0I7a0JBQUNtTixLQUFLLEVBQUVBLEtBQUs7a0JBQUVvQyxPQUFPLEVBQUUrUCxZQUFBLENBQUFEO2dCQUFXOztZQUNoRixFQUNBLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQXBjLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFrQk0sU0FBVXdnQixVQUFVQSxDQUFDO1lBQUVyZSxJQUFJO1lBQUVNLFVBQVU7WUFBRW9CLFFBQVE7WUFBRXlTLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ2hHLE1BQU07Y0FDTGxXLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXlNLFFBQVEsR0FBR0EsQ0FBQSxLQUFNdEssVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUUzQyxPQUNDMUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUU2SDtZQUFRLEdBQy9DbEcsV0FBVyxDQUFDdkIsT0FBTyxDQUFDcUgsTUFBTSxDQUNuQixDQUNKLENBQ0UsRUFDVDVNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQixHQUN6Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQThCLEdBQUVOLEtBQUssQ0FBQ08sVUFBVSxDQUFDbUIsS0FBSyxDQUFDcUMsV0FBVyxDQUFRLENBQ3JGLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQXBFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQWFNLFNBQVVrWSxXQUFXQSxDQUFDO1lBQUU3VCxRQUFRO1lBQUVSLFFBQVE7WUFBRXlTLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ3pGLE1BQU07Y0FBRWxXO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFdEMsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxDQUNwQixFQUNSdUQsUUFBUSxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUF0RSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNFUsUUFBQSxHQUFBNVUsT0FBQTtVQUNBLElBQUErWSxPQUFBLEdBQUEvWSxPQUFBO1VBQ0EsSUFBQXlnQixRQUFBLEdBQUF6Z0IsT0FBQTtVQU9NLFNBQVV1Z0IsZUFBZUEsQ0FBQztZQUFFNWEsUUFBUTtZQUFFeEQsSUFBSTtZQUFFbVY7VUFBSSxDQUF5QjtZQUM5RSxNQUFNO2NBQ0xqWCxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLO1lBQUUsQ0FDbkIsR0FBRyxJQUFBNUIsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNO2NBQUUyZCxVQUFVO2NBQUUzWTtZQUFPLENBQUUsR0FBRyxJQUFBbWIsUUFBQSxDQUFBQyxPQUFPLEVBQUMvYSxRQUFRLENBQUM7WUFDakQsT0FDQzVGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvVSxRQUFBLENBQUFXLGdCQUFnQjtjQUFDcFQsSUFBSSxFQUFFQSxJQUFJO2NBQUU2UixJQUFJLEVBQUVuUyxLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJO1lBQUMsRUFBSSxFQUM3RHBDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1WSxPQUFBLENBQUE0SCxnQkFBZ0I7Y0FBQ2haLE1BQU0sRUFBRXJDLE9BQU8sQ0FBQ3FDLE1BQU07Y0FBRWhDLFFBQVEsRUFBRUwsT0FBTyxDQUFDSyxRQUFRO2NBQUVzWSxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUM5RjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBbGUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVTRnQixtQkFBbUJBLENBQUE7WUFDbEMsTUFBTTtjQUFFeGdCO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdEMsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUN5QixLQUFLLENBQUNpUCxTQUFTLENBQUNoUCxLQUFLLENBQVEsQ0FDckM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBK2UsYUFBQSxHQUFBN2dCLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLE1BQU02VSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTVVLEtBQUEsQ0FBQTZVLEtBQUs7WUFDWnpCLFFBQVEsRUFBRXBULEtBQUEsQ0FBQW1ULFFBQVE7WUFDbEIyQixLQUFLLEVBQUU5VSxLQUFBLENBQUErVSxLQUFLO1lBQ1pDLFFBQVEsRUFBRWhWLEtBQUEsQ0FBQWlWLFFBQVE7WUFDbEJDLE1BQU0sRUFBRWxWLEtBQUEsQ0FBQW1WO1dBQ1I7VUFZSyxTQUFVeUwsa0JBQWtCQSxDQUFDO1lBQUUzZSxJQUFJO1lBQUU2UixJQUFJO1lBQUV5QixLQUFLO1lBQUU1UztVQUFRLENBQXNDO1lBQ3JHLE1BQU07Y0FDTHhDLFFBQVEsRUFBRTtnQkFBRXdCO2NBQUssQ0FBRTtjQUNuQnhCLFFBQVE7Y0FDUkQ7WUFBSyxDQUNMLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNO2NBQUVpRDtZQUFLLENBQUUsR0FBRyxJQUFBc2QsYUFBQSxDQUFBRSxzQkFBc0IsR0FBRTtZQUMxQyxNQUFNLENBQUM1TixPQUFPLEVBQUU2TixVQUFVLENBQUMsR0FBR2poQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTTBlLE1BQU0sR0FBR3pRLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDa0UsSUFBSSxDQUFDc00sTUFBTSxDQUFDO1lBQ3ZDLElBQUFsZixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUsTUFBTTJnQixVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsTUFBTWxPLE1BQU0sR0FBR2pSLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUdOLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUU3QyxNQUFNOGUsYUFBYSxHQUFHLEVBQUU7WUFDeEIsTUFBTUMsVUFBVSxHQUFHOWdCLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDO1lBRXBDLE1BQU1vUyxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQmxVLFFBQVEsQ0FBQ3lILElBQUksQ0FBQztnQkFBRWpHLEtBQUssRUFBRTtrQkFBRU0sSUFBSSxFQUFFb0I7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDMUMsQ0FBQztZQUVELE1BQU00ZCxNQUFNLEdBQUdiLE1BQU0sQ0FBQzlVLEdBQUcsQ0FBQyxDQUFDckosSUFBSSxFQUFFaWYsQ0FBQyxLQUFJO2NBQ3JDLElBQUlqZixJQUFJLEtBQUssYUFBYSxFQUFFLE9BQU8sSUFBSTtjQUN2QyxNQUFNNFQsS0FBSyxHQUFHbEIsVUFBVSxDQUFDYixJQUFJLENBQUNzTSxNQUFNLENBQUNuZSxJQUFJLENBQUMsQ0FBQztjQUMzQyxNQUFNNkQsS0FBSyxHQUFHO2dCQUNiWCxLQUFLLEVBQUU2YixVQUFVLENBQUMvZSxJQUFJLENBQUMsQ0FBQ2tELEtBQUs7Z0JBQzdCOEMsV0FBVyxFQUFFK1ksVUFBVSxDQUFDL2UsSUFBSSxDQUFDLENBQUNnRyxXQUFXO2dCQUN6Q2hHLElBQUk7Z0JBQ0o2UixJQUFJLEVBQUU3UixJQUFJO2dCQUNWb0IsS0FBSyxFQUFFdVAsTUFBTSxDQUFDMkMsS0FBSyxDQUFDLEdBQUd0VCxJQUFJLENBQUMsSUFBSTtlQUNoQztjQUVEOGUsYUFBYSxDQUFDOWUsSUFBSSxDQUFDLEdBQUcsRUFBRTtjQUV4QixPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VWLEtBQUs7Z0JBQUEsR0FDRC9QLEtBQUs7Z0JBQ1RuQyxRQUFRLEVBQUV4RCxRQUFRLENBQUM4RyxRQUFRO2dCQUMzQnRFLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEI2SSxHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSWlmLENBQUMsRUFBRTtnQkFDbkIxZ0IsU0FBUyxFQUFDLGtCQUFrQjtnQkFDNUJvRCxPQUFPLEVBQUMsVUFBVTtnQkFDbEJ5USxNQUFNLEVBQUVBO2NBQU0sRUFDYjtZQUVKLENBQUMsQ0FBQztZQUVGLE9BQ0N4VSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNFMGdCLE1BQU0sRUFDUHBoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNEMsR0FDN0RYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxZ0IsYUFBQSxDQUFBUSxpQkFBaUI7Y0FBQzNnQixTQUFTLEVBQUMsUUFBUTtjQUFDMEQsTUFBTSxFQUFDLFFBQVE7Y0FBQzlCLElBQUksRUFBQyxRQUFRO2NBQUNtVCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUM1RSxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVBLElBQUFvTCxhQUFBLEdBQUE3Z0IsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1VCxNQUFBLEdBQUF2VCxPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVdVYsZ0JBQWdCQSxDQUFDO1lBQUVwVCxJQUFJO1lBQUU2UixJQUFJO1lBQUVzTjtVQUFRLENBQUU7WUFDeEQsTUFBTTtjQUNMamhCLFFBQVEsRUFBRTtnQkFBRXdCO2NBQUssQ0FBRTtjQUNuQnhCLFFBQVE7Y0FDUkQsS0FBSztjQUNMd0csS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixJQUFJLENBQUMwVCxJQUFJLENBQUN1TixjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Y0FDbkMzWixPQUFPLENBQUNrTyxJQUFJLENBQUMsd0NBQXdDM1QsSUFBSSxFQUFFLENBQUM7Y0FDNUQsT0FBTyxJQUFJOztZQUdaLE1BQU0yUSxNQUFNLEdBQUdqUixLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHTixLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFN0MsTUFBTStlLFVBQVUsR0FBRzlnQixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQztZQUVwQyxNQUFNVSxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFUztjQUFLLENBQUUsR0FBR1QsS0FBSyxDQUFDRSxhQUFhO2NBQ3JDbkIsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztjQUM1QixJQUFJVCxLQUFLLENBQUNYLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCOUIsUUFBUSxDQUFDeUgsSUFBSSxFQUFFOztZQUVqQixDQUFDO1lBRUQsTUFBTXlNLE1BQU0sR0FBR3pSLEtBQUssSUFBSXpDLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUN2QztZQUVBLE9BQ0MvSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxZ0IsYUFBQSxDQUFBVyxxQkFBcUI7Y0FDckJDLFFBQVE7Y0FDUmxlLEtBQUssRUFBRXVQLE1BQU07Y0FDYjNRLElBQUksRUFBRUEsSUFBSTtjQUNWb1MsTUFBTSxFQUFFQSxNQUFNO2NBQ2QxUixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJmLEtBQUssRUFBRXlSLE1BQUEsQ0FBQXFOO1lBQW1CLEdBRTFCN2dCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFDRThnQixRQUFRLEdBQUd2aEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBTzhnQixRQUFRLEUsS0FBVSxHQUFHLElBQUksRUFDM0NKLFVBQVUsQ0FBQzdiLEtBQUssQ0FDYixFQUNMdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxZ0IsYUFBQSxDQUFBYSxhQUFhO2NBQUM1ZCxPQUFPLEVBQUMsTUFBTTtjQUFDTSxNQUFNLEVBQUMsS0FBSztjQUFDOUIsSUFBSSxFQUFDO1lBQUssR0FDbkR1RSxXQUFXLENBQUN2QixPQUFPLENBQUNqQyxHQUFHLENBQ1QsQ0FDWCxDQUNHLEVBQ1Z0RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWdCLGFBQUEsQ0FBQWMsWUFBWSxRQUNaNWhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnQixNQUFBLENBQUFzZixrQkFBa0I7Y0FBQzNlLElBQUksRUFBRUEsSUFBSTtjQUFFNlIsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDaEMsQ0FDVixDQUNpQixDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQSxJQUFBOVQsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTRVLFFBQUEsR0FBQTVVLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLE1BQU02VSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTVVLEtBQUEsQ0FBQTZVLEtBQUs7WUFDWnpCLFFBQVEsRUFBRXBULEtBQUEsQ0FBQW1ULFFBQVE7WUFDbEIyQixLQUFLLEVBQUU5VSxLQUFBLENBQUErVSxLQUFLO1lBQ1pDLFFBQVEsRUFBRWhWLEtBQUEsQ0FBQWlWLFFBQVE7WUFDbEJDLE1BQU0sRUFBRWxWLEtBQUEsQ0FBQW1WLE1BQU07WUFDZEMsS0FBSyxFQUFFVixRQUFBLENBQUFXO1dBQ1A7VUFFSyxTQUFVcU0sVUFBVUEsQ0FBQ3BNLEtBQUs7WUFDL0IsTUFBTTtjQUFFcFYsS0FBSztjQUFFQyxRQUFRO2NBQUVpVTtZQUFZLENBQUUsR0FBRyxJQUFBclUsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNO2NBQUU2QixJQUFJO2NBQUVsQixJQUFJO2NBQUV3VSxLQUFLO2NBQUV2VSxNQUFNO2NBQUVxQyxLQUFLO2NBQUUrZCxRQUFRO2NBQUVqQjtZQUFTLENBQUUsR0FBRzdLLEtBQUs7WUFDdkUsTUFBTTtjQUFFM1Q7WUFBSyxDQUFFLEdBQUd4QixRQUFRO1lBRTFCLE1BQU07Y0FBRWdGLEtBQUs7Y0FBRThDLFdBQVc7Y0FBRXJIO1lBQUssQ0FBRSxHQUFHVixLQUFLLENBQUN5QixLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsRUFBRWtELEtBQUssR0FBR2diLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxFQUFFa0QsS0FBSyxHQUFHbEQsSUFBSSxDQUFDO1lBQ3pHLE1BQU0sQ0FBQ3lULGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBRzlWLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDQyxLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDO1lBRXJFLElBQUFmLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUNILEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJnVSxnQkFBZ0IsQ0FBQ2hVLEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO1lBQ0YsTUFBTVUsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIrUyxnQkFBZ0IsQ0FBQy9TLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7Y0FDM0MsTUFBTTtnQkFBRXBCLElBQUk7Z0JBQUVvQjtjQUFLLENBQUUsR0FBR1QsS0FBSyxDQUFDRSxhQUFhO2NBQzNDM0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUN0QyxDQUFDO1lBRUQsSUFBSSxDQUFDbkQsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsRUFBRTtjQUN2QnlGLE9BQU8sQ0FBQ2tPLElBQUksQ0FBQyxnREFBZ0QzVCxJQUFJLEVBQUUsQ0FBQztjQUNwRSxPQUFPLElBQUk7O1lBR1osTUFBTTZELEtBQUssR0FBRztjQUFFWCxLQUFLO2NBQUU4QyxXQUFXO2NBQUU1RSxLQUFLLEVBQUVxUztZQUFhLENBQUU7WUFFMUQ7WUFFQSxNQUFNRyxLQUFLLEdBQUdsQixVQUFVLENBQUM1VCxJQUFJLENBQUM7WUFFOUIsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0VVLE1BQU0sR0FDTm5CLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFNLEdBQ3BCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUNFOGdCLFFBQVEsR0FBR3ZoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPOGdCLFFBQVEsRSxLQUFVLEdBQUcsSUFBSSxFQUMzQ3hnQixLQUFLLENBQ0YsQ0FDQSxHQUNILElBQUksRUFDUmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VWLEtBQUs7Y0FBQ2pTLE9BQU8sRUFBQyxVQUFVO2NBQUMzQixJQUFJLEVBQUVBLElBQUk7Y0FBQSxHQUFNNkQsS0FBSztjQUFFbkQsUUFBUSxFQUFFQSxRQUFRO2NBQUUwUixNQUFNLEVBQUVEO1lBQVksRUFBSSxDQUN4RjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQSxJQUFBdlUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVMmdCLGdCQUFnQkEsQ0FBQztZQUFFMUMsVUFBVTtZQUFFdFksUUFBUTtZQUFFZ0M7VUFBTSxDQUFFO1lBQ2hFLE1BQU07Y0FDTGYsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBc0MsR0FDdkRYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUVTLFFBQVE7Y0FBRTlCLFFBQVEsRUFBRW9hO1lBQVUsR0FDeEVwWCxXQUFXLENBQUN2QixPQUFPLENBQUNHLE1BQU0sQ0FDbkIsRUFDVDFGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFeUMsTUFBTTtjQUFFOUQsUUFBUSxFQUFFb2E7WUFBVSxHQUM3RHBYLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3dDLElBQUksQ0FDakIsQ0FDRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBNUgsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTRVLFFBQUEsR0FBQTVVLE9BQUE7VUFFQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVBLE1BQU02VSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTVVLEtBQUEsQ0FBQTZVLEtBQUs7WUFDWnpCLFFBQVEsRUFBRXBULEtBQUEsQ0FBQW1ULFFBQVE7WUFDbEIyQixLQUFLLEVBQUU5VSxLQUFBLENBQUErVSxLQUFLO1lBQ1pDLFFBQVEsRUFBRWhWLEtBQUEsQ0FBQWlWLFFBQVE7WUFDbEJDLE1BQU0sRUFBRWxWLEtBQUEsQ0FBQW1WLE1BQU07WUFDZEMsS0FBSyxFQUFFVixRQUFBLENBQUFXO1dBQ1A7VUFFSyxTQUFVdlUsU0FBU0EsQ0FBQztZQUFFQyxJQUFJLEdBQUcsT0FBTztZQUFFQyxNQUFNLEdBQUc7VUFBSSxDQUFFO1lBQzFELE1BQU07Y0FBRWQsS0FBSztjQUFFQyxRQUFRO2NBQUVpVTtZQUFZLENBQUUsR0FBRyxJQUFBclUsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNO2NBQUV1QjtZQUFLLENBQUUsR0FBR3hCLFFBQVE7WUFDMUIsTUFBTWdnQixTQUFTLEdBQUd4ZSxLQUFLLENBQUN3ZSxTQUFTLENBQUNwZixJQUFJLENBQUM7WUFDdkMsTUFBTXFmLE1BQU0sR0FBR3pRLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDdVEsU0FBUyxDQUFDO1lBRXJDLE1BQU14ZCxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFWCxJQUFJO2dCQUFFb0I7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUMzQzNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELE1BQU1zZSxLQUFLLEdBQUd2QixNQUFNLENBQUNqSixNQUFNLENBQUNsVixJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQ3NWLFFBQVEsQ0FBQ3RWLElBQUksQ0FBQyxDQUFDO1lBQ2hGLE1BQU1nZixNQUFNLEdBQUdVLEtBQUssQ0FBQ3JXLEdBQUcsQ0FBQyxDQUFDckosSUFBSSxFQUFFc1QsS0FBSyxLQUFJO2NBQ3hDLElBQUksQ0FBQ3JWLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCeUYsT0FBTyxDQUFDa08sSUFBSSxDQUFDLGdEQUFnRDNULElBQUksRUFBRSxDQUFDOztjQUdyRTtjQUVBLElBQ0MsT0FBT2tlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFDbEMsT0FBT2tlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSWtlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxLQUFLLE9BQVEsRUFDeEU7Z0JBQ0QsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnQixNQUFBLENBQUFvZ0IsVUFBVTtrQkFDVnZCLFNBQVMsRUFBRUEsU0FBUztrQkFDcEJpQixRQUFRLEVBQUVqQixTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ21mLFFBQVE7a0JBQ2xDNVYsR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlzVCxLQUFLLEVBQUU7a0JBQ3ZCdlUsTUFBTSxFQUFFQSxNQUFNO2tCQUNkdVUsS0FBSyxFQUFFQSxLQUFLO2tCQUNaeFUsSUFBSSxFQUFFb2YsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNsQixJQUFJO2tCQUMxQmtCLElBQUksRUFBRUE7Z0JBQUksRUFDVDs7Y0FJSixNQUFNNFQsS0FBSyxHQUFHbEIsVUFBVSxDQUFDd0wsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNsQixJQUFJLENBQUM7Y0FFOUMsTUFBTTtnQkFBRW9FLEtBQUs7Z0JBQUU4QztjQUFXLENBQUUsR0FBRy9ILEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDO2NBQ2hELE1BQU02RCxLQUFLLEdBQUc7Z0JBQUVYLEtBQUs7Z0JBQUU4QyxXQUFXO2dCQUFFNUUsS0FBSyxFQUFFMUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsSUFBSTtjQUFFLENBQUU7Y0FFOUQsT0FDQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1VixLQUFLO2dCQUNMbFQsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQmlCLE9BQU8sRUFBQyxVQUFVO2dCQUNsQndkLFFBQVEsRUFBRWpCLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDbWYsUUFBUTtnQkFDbEM1VixHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSXNULEtBQUssRUFBRTtnQkFDdkJ0VCxJQUFJLEVBQUVBLElBQUk7Z0JBQ1Y2UixJQUFJLEVBQUVxTSxTQUFTLENBQUNsZSxJQUFJLENBQUM7Z0JBQ3JCb1MsTUFBTSxFQUFFRCxZQUFZO2dCQUFBLEdBQ2hCdE87Y0FBSyxFQUNSO1lBRUosQ0FBQyxDQUFDO1lBRUYsT0FBT2pHLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQUcwZ0IsTUFBTSxDQUFJO1VBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBamhCLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0VSxRQUFBLEdBQUE1VSxPQUFBO1VBRUEsTUFBTTZVLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFNVUsS0FBQSxDQUFBNlUsS0FBSztZQUNaekIsUUFBUSxFQUFFcFQsS0FBQSxDQUFBbVQsUUFBUTtZQUNsQjJCLEtBQUssRUFBRTlVLEtBQUEsQ0FBQStVLEtBQUs7WUFDWkMsUUFBUSxFQUFFaFYsS0FBQSxDQUFBaVYsUUFBUTtZQUNsQkMsTUFBTSxFQUFFbFYsS0FBQSxDQUFBbVYsTUFBTTtZQUNkQyxLQUFLLEVBQUVWLFFBQUEsQ0FBQVc7V0FDUDtVQUVLLFNBQVUxQyxrQkFBa0JBLENBQUMsRUFBRTtZQUNwQyxNQUFNO2NBQUV6UyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTTtjQUFFdUI7WUFBSyxDQUFFLEdBQUd4QixRQUFRO1lBQzFCLE1BQU1pZ0IsTUFBTSxHQUFHelEsTUFBTSxDQUFDQyxJQUFJLENBQUNqTyxLQUFLLENBQUN3ZSxTQUFTLENBQUM7WUFDM0MsTUFBTXhkLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCLE1BQU07Z0JBQUVYLElBQUk7Z0JBQUVvQjtjQUFLLENBQUUsR0FBR1QsS0FBSyxDQUFDRSxhQUFhO2NBQzNDM0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUN0QyxDQUFDO1lBRUQsTUFBTTRkLE1BQU0sR0FBR2IsTUFBTSxDQUFDOVUsR0FBRyxDQUFDLENBQUNySixJQUFJLEVBQUVzVCxLQUFLLEtBQUk7Y0FDekMsSUFBSSxDQUFDclYsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsRUFBRTtnQkFDdkJ5RixPQUFPLENBQUNrTyxJQUFJLENBQUMsZ0RBQWdEM1QsSUFBSSxFQUFFLENBQUM7O2NBRXJFLE1BQU07Z0JBQUVrRCxLQUFLO2dCQUFFOEM7Y0FBVyxDQUFFLEdBQUcvSCxLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQztjQUNoRCxNQUFNNkQsS0FBSyxHQUFHO2dCQUFFWCxLQUFLO2dCQUFFOEMsV0FBVztnQkFBRTVFLEtBQUssRUFBRTFCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLElBQUk7Y0FBRSxDQUFFO2NBRTlELElBQUksT0FBT04sS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJTixLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hGLE1BQU04VSxLQUFLLEdBQUdsQixVQUFVLENBQUNoVCxLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksQ0FBQztnQkFDcEQsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1VixLQUFLO2tCQUNMclYsU0FBUyxFQUFDLGtCQUFrQjtrQkFDNUJnTCxHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSXNULEtBQUssRUFBRTtrQkFDdkJ0VCxJQUFJLEVBQUVBLElBQUk7a0JBQUEsR0FDTjZELEtBQUs7a0JBQ1RuRCxRQUFRLEVBQUVBO2dCQUFRLEVBQ2pCOztjQUdKO2NBQ0EsTUFBTWtULEtBQUssR0FBR2xCLFVBQVUsQ0FBQ2hULEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDO2NBQy9DLE9BQ0NwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVYsS0FBSztnQkFBQ3JWLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQUNnTCxHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSXNULEtBQUssRUFBRTtnQkFBRXRULElBQUksRUFBRUEsSUFBSTtnQkFBQSxHQUFNNkQsS0FBSztnQkFBRW5ELFFBQVEsRUFBRUE7Y0FBUSxFQUFJO1lBRTVHLENBQUMsQ0FBQztZQUVGLE9BQ0M5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLENBQ3BCLEVBQ1RmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FBTTJnQixNQUFNLENBQU8sQ0FDZCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUFwaEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7O1VBS00sU0FBVTBnQixPQUFPQSxDQUFDamUsVUFBVTtZQUNqQyxNQUFNLENBQUN3YixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbmUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FDTHhCLEtBQUs7Y0FDTEMsUUFBUTtjQUNSdUcsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNcUgsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixJQUFJO2dCQUNIdVcsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDbkIsTUFBTTdkLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtnQkFDckJvVyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNwQnpiLFVBQVUsQ0FBQyxPQUFPLENBQUM7ZUFDbkIsQ0FBQyxPQUFPb1IsQ0FBQyxFQUFFO2dCQUNYak0sT0FBTyxDQUFDOE0sS0FBSyxDQUFDYixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxNQUFNaU8sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekIsTUFBTWhSLFNBQVMsR0FBR3pRLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ2lQLFNBQVM7Y0FDMUN6USxRQUFRLENBQUN3QixLQUFLLENBQUN3SCxNQUFNLEVBQUU7Y0FDdkJoSixRQUFRLENBQUNvSCxHQUFHLENBQUM7Z0JBQUVxSjtjQUFTLENBQUUsQ0FBQztjQUUzQnJPLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQU87Y0FBRXdiLFVBQVU7Y0FBRUMsYUFBYTtjQUFFNVksT0FBTyxFQUFFO2dCQUFFcUMsTUFBTTtnQkFBRWhDLFFBQVEsRUFBRW1jO2NBQVk7WUFBRSxDQUFFO1VBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBL2hCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEraEIsYUFBQSxHQUFBL2hCLE9BQUE7VUFDQSxJQUFBZ2lCLFNBQUEsR0FBQWhpQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBdWQsWUFBQSxHQUFBdmQsT0FBQTtVQUNNLFNBQVUwQyxLQUFLQSxDQUFBO1lBQ3BCLE1BQU0sQ0FBQ2diLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzVkLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNO2NBQ0x2QixRQUFRO2NBQ1JBLFFBQVEsRUFBRTtnQkFBRXdCO2NBQUssQ0FBRTtjQUNuQnpCLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTWlRLFdBQVcsR0FBR0EsQ0FBQSxLQUFNb04sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU0xSixJQUFJLEdBQUduUyxLQUFLLENBQUNvZ0IsYUFBYSxFQUFFO1lBQ2xDLE1BQU0zQixNQUFNLEdBQUd6USxNQUFNLENBQUNDLElBQUksQ0FBQ2pPLEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQztZQUMzQyxNQUFNcmEsS0FBSyxHQUFHO2NBQUVkLE9BQU8sRUFBRXFMLFdBQVc7Y0FBRTFNLFFBQVEsRUFBRXhELFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSztZQUFFLENBQUU7WUFFeEUsTUFBTXFmLE1BQU0sR0FBR2IsTUFBTSxDQUFDOVUsR0FBRyxDQUFDLENBQUNySixJQUFJLEVBQUVzVCxLQUFLLEtBQUk7Y0FDekMsSUFBSSxPQUFPNVQsS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJTixLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hGLE9BQU9sQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd2hCLFNBQUEsQ0FBQW5DLGdCQUFnQjtrQkFBQ25VLEdBQUcsRUFBRSxHQUFHdkosSUFBSSxJQUFJc1QsS0FBSyxFQUFFO2tCQUFFdFQsSUFBSSxFQUFFQTtnQkFBSSxFQUFJOztjQUdqRSxPQUFPcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VoQixhQUFBLENBQUE3QixxQkFBcUI7Z0JBQUN4VSxHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSXNULEtBQUssRUFBRTtnQkFBRXRULElBQUksRUFBRUEsSUFBSTtnQkFBRTZSLElBQUksRUFBRUE7Y0FBSSxFQUFJO1lBQ2xGLENBQUMsQ0FBQztZQUVGLE9BQ0NqVSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2YsS0FBSyxDQUFNLEVBQzVCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUtrQyxLQUFLO2NBQUUxRCxJQUFJLEVBQUM7WUFBUSxHQUM3Q3VFLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ21FLE1BQU0sQ0FDbkIsQ0FDSixDQUNFLEVBQ1IwWCxNQUFNLEVBQ1BwaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytjLFlBQUEsQ0FBQS9JLGtCQUFrQjtjQUFDOU8sSUFBSSxFQUFFZ1ksZUFBZTtjQUFFM1YsT0FBTyxFQUFFd0k7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFwUCxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVa2lCLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFOWhCLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUVsRixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQixNQUFNTCxJQUFJLEdBQUdyQixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxJQUFBTixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDLEVBQUUwQixRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQVgsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFRSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NWLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ1csS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ1csS0FBQSxDQUFBYixhQUFBLENBQUNjLE9BQUEsQ0FBQVcsY0FBYyxPQUFHLEVBQ2xCWixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2dCLE1BQUEsQ0FBQVUsYUFBYTtjQUFDakIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2tCLElBQUksRUFBQztZQUFhLEVBQUcsRUFDcERkLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN0QyxDQUNHLENBQ0wsRUFDTkcsS0FBQSxDQUFBYixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1csS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUN0QixLQUFLLENBQU0sRUFDaERPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3JCLFFBQVEsRUFDekNNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLENBQ0QsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBakIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFtaUIsT0FBQSxHQUFBbmlCLE9BQUE7VUFDQSxJQUFBb2lCLFdBQUEsR0FBQXBpQixPQUFBO1VBQ087VUFBVSxTQUFVc08sUUFBUUEsQ0FBQztZQUFFakssUUFBUTtZQUFFYSxPQUFPO1lBQUVtWSxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUc3SDtVQUFLLENBQUU7WUFDakYsTUFBTTZNLFdBQVcsR0FBR2hGLE1BQU0sR0FBRyxNQUFNK0UsV0FBQSxDQUFBRSxZQUFZLENBQUNDLGFBQWEsQ0FBQ3JkLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0NuRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFBLEdBQUt1USxLQUFLO2NBQUVsVCxJQUFJLEVBQUVuQixNQUFBLENBQUFxaEIsS0FBSyxDQUFDQyxPQUFPO2NBQUV2ZCxPQUFPLEVBQUVtZDtZQUFXLEdBQzFEaGUsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVxZSxZQUFZQSxDQUFDO1lBQUVyZSxRQUFRO1lBQUVhLE9BQU87WUFBRW1ZLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBRzdIO1VBQUssQ0FBRTtZQUNyRixNQUFNNk0sV0FBVyxHQUFHaEYsTUFBTSxHQUFHLE1BQU0rRSxXQUFBLENBQUFFLFlBQVksQ0FBQ0MsYUFBYSxDQUFDcmQsT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ25GLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyaEIsT0FBQSxDQUFBdlAsVUFBVTtjQUFBLEdBQUs0QyxLQUFLO2NBQUVsVCxJQUFJLEVBQUVuQixNQUFBLENBQUFxaEIsS0FBSyxDQUFDQyxPQUFPO2NBQUV2ZCxPQUFPLEVBQUVtZDtZQUFXLEdBQzlEaGUsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFYLE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVMmlCLGtCQUFrQkEsQ0FBQztZQUFFamQsSUFBSTtZQUFFcUM7VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FDTG5CLEtBQUs7Y0FDTHhHLEtBQUs7Y0FDTHdpQixTQUFTO2NBQ1RoYyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLElBQUksQ0FBQ29GLElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTVosU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEI4ZCxTQUFTLEVBQUU7Y0FDWGhjLEtBQUssQ0FBQ2ljLFlBQVksQ0FBQ3RWLFNBQVMsQ0FBQztjQUM3QnhGLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWk8sSUFBSTtjQUNKNUUsS0FBSyxFQUFFVixLQUFLLENBQUNzRSxLQUFLLENBQUNlLE1BQU0sQ0FBQzNFLEtBQUs7Y0FDL0J1TixJQUFJLEVBQUVqTyxLQUFLLENBQUNzRSxLQUFLLENBQUNlLE1BQU0sQ0FBQ3RCLFdBQVc7Y0FDcEM0RCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJwQyxRQUFRLEVBQUVvQyxPQUFPO2NBQ2pCM0MsVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUV3QixXQUFXLENBQUN2QixPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUNsREMsU0FBUyxFQUFFO2dCQUFFSCxLQUFLLEVBQUV3QixXQUFXLENBQUN2QixPQUFPLENBQUNHO2NBQU0sQ0FBRTtjQUNoRFgsU0FBUyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2ZBLFNBQVMsRUFBRTtjQUNaO1lBQUMsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBcEIsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV3VSxrQkFBa0JBLENBQUM7WUFBRTlPLElBQUk7WUFBRXFDO1VBQU8sQ0FBRTtZQUNuRCxNQUFNLENBQUNaLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMeEIsS0FBSyxFQUFFO2dCQUFFTyxVQUFVLEVBQUVQO2NBQUssQ0FBRTtjQUM1QkMsUUFBUTtjQUNSdUcsS0FBSyxFQUFFO2dCQUNOQyxXQUFXLEVBQUU7a0JBQUV2QjtnQkFBTztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBckYsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixJQUFJLENBQUNvRixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1aLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSHNDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCVyxPQUFPLEVBQUU7Z0JBQ1QxSCxRQUFRLENBQUN3QixLQUFLLENBQUN5SCxLQUFLLEVBQUU7Z0JBQ3RCLE1BQU1qSixRQUFRLENBQUN5SCxJQUFJLEVBQUU7ZUFDckIsQ0FBQyxPQUFPK0wsQ0FBQyxFQUFFO2dCQUNYak0sT0FBTyxDQUFDOE0sS0FBSyxDQUFDYixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVHpNLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDckgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWk8sSUFBSTtjQUNKcUMsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCakQsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCTSxVQUFVLEVBQUU7Z0JBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDdENDLFNBQVMsRUFBRTtnQkFBRUgsS0FBSyxFQUFFQyxPQUFPLENBQUNHO2NBQU0sQ0FBRTtjQUNwQ0UsUUFBUSxFQUFFb0M7WUFBTyxHQUVqQmhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ3VTLFdBQVcsQ0FBQzdSLEtBQUssQ0FBTSxFQUNsQ2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsWUFBSUosS0FBSyxDQUFDdVMsV0FBVyxDQUFDeE8sV0FBVyxDQUFLLENBQ3hCLENBQ2I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTJKLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUE4aUIsUUFBQSxHQUFBOWlCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUVBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ00sU0FBVStpQixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMMWlCLFFBQVE7Y0FDUnVHLEtBQUs7Y0FDTHhHLEtBQUs7Y0FDTDBTLE1BQU07Y0FDTmxNLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDeVMsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHalQsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3VPLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNb2hCLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUlsUSxNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDbkJILGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBR0RwTSxLQUFLLENBQUNpYyxZQUFZLENBQUN0VixTQUFTLENBQUM7Y0FDN0J1VixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUVELE1BQU1DLFNBQVMsR0FBR3RoQixLQUFLLElBQUc7Y0FDekI7WUFBQSxDQUNBO1lBQ0QsTUFBTWlELFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCa08sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCcE0sS0FBSyxDQUFDaWMsWUFBWSxDQUFDdFYsU0FBUyxDQUFDO2NBQzdCdVYsUUFBQSxDQUFBRyxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFDRCxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNaFQsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3BFLE1BQU1pRCxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBRXJELE9BQ0NqVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXlSLFVBQVU7Y0FDVjFOLE9BQU8sRUFBRThkLE1BQU07Y0FDZmxpQixLQUFLLEVBQUUrRixXQUFXLENBQUN2QixPQUFPLENBQUM0ZCxJQUFJO2NBQy9CNWdCLElBQUksRUFBQyxXQUFXO2NBQ2hCNUIsU0FBUyxFQUFDLFFBQVE7Y0FDbEJvRCxPQUFPLEVBQUM7WUFBUyxFQUNoQixFQUNGL0QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQVEsUUFBUTtjQUFDeEssT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRWtlO1lBQWlCLEdBQ3BEdmMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixFQUVWd0UsZUFBZSxJQUNmaFQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVhLFFBQVEsRUFBRXlOO1lBQWEsR0FDMURyVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUFNSixLQUFLLENBQUN1TSxNQUFNLENBQUNsSCxNQUFNLENBQU8sQ0FFakMsRUFDQTBLLGVBQWUsSUFDZnBRLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxXQUFBLENBQUFNLHVCQUF1QjtjQUN2QjlLLElBQUksRUFBRXlLLGVBQWU7Y0FDckJNLFFBQVE7Y0FDUkssU0FBUyxFQUFFelEsUUFBUSxDQUFDeVEsU0FBUztjQUM3Qi9JLE9BQU8sRUFBRXFiLGlCQUFpQjtjQUMxQmpWLFVBQVUsRUFBRWdWO1lBQVMsRUFFdEIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBcGpCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThOLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBcWpCLFNBQUEsR0FBQXJqQixPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQStOLGFBQUEsR0FBQS9OLE9BQUE7VUFFTSxTQUFVZ1IseUJBQXlCQSxDQUFDO1lBQUUvUCxJQUFJO1lBQUU4RztVQUFPLENBQUU7WUFDMUQsTUFBTTtjQUNMM0gsS0FBSztjQUNMd0csS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUN5VCxLQUFLLEVBQUV1UCxRQUFRLENBQUMsR0FBR3ZqQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTtjQUFFcVMsZ0JBQWdCO2NBQUU5TTtZQUFRLENBQUUsR0FBRyxJQUFBNEcsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUMzRCxNQUFNcVYsTUFBTSxHQUFHO2NBQ2QxZ0IsUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCd2dCLFFBQVEsQ0FBQ3hnQixLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRDJCLE9BQU8sRUFBRSxNQUFNcEMsS0FBSyxJQUFHO2dCQUN0QixNQUFNbVIsZ0JBQWdCLENBQUNoVCxJQUFJLEVBQUU4UyxLQUFLLENBQUM7Z0JBQ25DaE0sT0FBTyxFQUFFO2NBQ1Y7YUFDQTtZQUVELE9BQ0NoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFcEYsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLDZCQUE2QjtjQUFDcUgsT0FBTyxFQUFFQTtZQUFPLEdBQ3pGaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3JjLElBQUksQ0FBQyxDQUFDSCxLQUFLLENBQU0sRUFDbkNmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3JjLElBQUksQ0FBQyxDQUFDa0QsV0FBVyxDQUFRLENBQ3JDLEVBQ1RwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE4SCxJQUFJLFFBQ0pqSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQ1JoTyxLQUFLLEVBQUVqRixLQUFLLENBQUNrZCxNQUFNLENBQUNoSyxRQUFRLENBQUNqTyxLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLE9BQU87Y0FDWjJCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCUCxLQUFLLEVBQUV3USxLQUFLO2NBQ1psUixRQUFRLEVBQUUwZ0IsTUFBTSxDQUFDMWdCLFFBQVE7Y0FDekJzRixXQUFXLEVBQUUvSCxLQUFLLENBQUNrZCxNQUFNLENBQUNoSyxRQUFRLENBQUNuTDtZQUFXLEVBQzdDLEVBQ0ZwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBZ0IsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2aUIsU0FBQSxDQUFBL1UsUUFBUTtjQUFDeEssT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXFlLE1BQU0sQ0FBQ3JlO1lBQU8sR0FDakQyQixXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBQ25CLENBQ0gsQ0FDSCxFQUVQeE8sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTBWLGdCQUFnQjtjQUFDcmMsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQXBILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThOLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBcWpCLFNBQUEsR0FBQXJqQixPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBUU0sU0FBVXlqQixxQkFBcUJBLENBQUM7WUFBRTFiLE9BQU87WUFBRXVPLGVBQWUsR0FBRztVQUFFLENBQUU7WUFDdEUsTUFBTTtjQUNMbFcsS0FBSztjQUNMQyxRQUFRO2NBQ1J5UyxNQUFNO2NBQ04wSyxRQUFRO2NBQ1I1VyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzZHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDbVMsS0FBSyxFQUFFdVAsUUFBUSxDQUFDLEdBQUd2akIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQzhTLEtBQUssRUFBRWdQLFFBQVEsQ0FBQyxHQUFHM2pCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNMmhCLE1BQU0sR0FBRztjQUNkMWdCLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQndnQixRQUFRLENBQUN4Z0IsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0QyQixPQUFPLEVBQUUsTUFBTXBDLEtBQUssSUFBRztnQkFDdEIsSUFBSTtrQkFDSHNFLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBRWpCLE1BQU1vQixRQUFRLEdBQUcsTUFBTW5JLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzBNLFFBQVEsQ0FBQ3dGLEtBQUssRUFBRTtvQkFBRSxHQUFHdUM7a0JBQWUsQ0FBRSxDQUFDO2tCQUU3RTtrQkFDQSxJQUFJOU4sUUFBUSxDQUFDa00sS0FBSyxFQUFFO29CQUNuQixNQUFNaVAsUUFBUSxHQUFHQSxDQUFDalAsS0FBSyxFQUFFNEwsTUFBTSxHQUFHLEVBQUUsS0FBSTtzQkFDdkMsTUFBTTVVLEdBQUcsR0FBR3RMLEtBQUssQ0FBQ21LLE1BQU0sR0FBR21LLEtBQUssQ0FBQyxHQUFHQSxLQUFLLEdBQUcsU0FBUztzQkFDckQsSUFBSSxDQUFDLENBQUM0TCxNQUFNLENBQUMxVyxNQUFNLEVBQUU7d0JBQ3BCLE9BQU94SixLQUFLLENBQUNtSyxNQUFNLENBQUNtQixHQUFHLENBQUMsR0FBRyxJQUFJNFUsTUFBTSxFQUFFOztzQkFFeEMsT0FBT2xnQixLQUFLLENBQUNtSyxNQUFNLENBQUNtQixHQUFHLENBQUM7b0JBQ3pCLENBQUM7b0JBRURnWSxRQUFRLENBQUNDLFFBQVEsQ0FBQ25iLFFBQVEsQ0FBQ2tNLEtBQUssRUFBRWxNLFFBQVEsQ0FBQzhYLE1BQU0sQ0FBQyxDQUFDO29CQUNuRGxaLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2xCOztrQkFFRCxNQUFNdkYsS0FBSyxHQUFHeEIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdWMsT0FBTyxFQUFFO2tCQUV0QztrQkFDQVosUUFBUSxDQUFDO29CQUFFM2I7a0JBQUssQ0FBRSxDQUFDO2tCQUNuQjtrQkFDQXFTLFVBQVUsQ0FBQyxNQUFLO29CQUNmOU0sV0FBVyxDQUFDLEtBQUssQ0FBQztrQkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztpQkFDUixDQUFDLE9BQU95TSxDQUFDLEVBQUU7a0JBQ1hqTSxPQUFPLENBQUM4TSxLQUFLLENBQUMsRUFBRSxFQUFFYixDQUFDLEVBQUVBLENBQUMsQ0FBQytQLE9BQU8sQ0FBQztrQkFDL0JGLFFBQVEsQ0FBQyxTQUFTLENBQUM7O2NBRXJCO2FBQ0E7WUFFRCxPQUNDM2pCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUFtSCxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUVwRixJQUFJO2NBQUNoRixTQUFTLEVBQUMsY0FBYztjQUFDcUgsT0FBTyxFQUFFQTtZQUFPLEdBQzFFaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3hjLEtBQUssQ0FBTSxFQUM3QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDa2QsTUFBTSxDQUFDblosV0FBVyxDQUFRLENBQy9CLEVBQ1RwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE4SCxJQUFJLFFBQ0pqSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBcUssYUFBYTtjQUFDL1gsS0FBSyxFQUFFQSxLQUFLO2NBQUVzVSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3QzNVLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQW1ULFFBQVE7Y0FDUmhPLEtBQUssRUFBRWpGLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ2hLLFFBQVEsQ0FBQ2pPLEtBQUs7Y0FDbENsRCxJQUFJLEVBQUMsT0FBTztjQUNab0IsS0FBSyxFQUFFd1EsS0FBSztjQUNabFIsUUFBUSxFQUFFMGdCLE1BQU0sQ0FBQzFnQixRQUFRO2NBQ3pCc0YsV0FBVyxFQUFFL0gsS0FBSyxDQUFDa2QsTUFBTSxDQUFDaEssUUFBUSxDQUFDbkw7WUFBVyxFQUM3QyxDQUNJLEVBRVBwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaERYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM2aUIsU0FBQSxDQUFBL1UsUUFBUTtjQUFDeEssT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXFlLE1BQU0sQ0FBQ3JlO1lBQU8sR0FDakQyQixXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBQ25CLENBQ0gsRUFDVHhPLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUEwVixnQkFBZ0I7Y0FBQ3JjLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBLElBQUFwSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQXFqQixTQUFBLEdBQUFyakIsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVU2akIsZUFBZUEsQ0FBQztZQUFFNWlCLElBQUk7WUFBRThHO1VBQU8sQ0FBRTtZQUNoRCxNQUFNO2NBQ0wzSCxLQUFLO2NBQ0xDLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDNkcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNrUixNQUFNLEVBQUU2RyxTQUFTLENBQUMsR0FBRzVaLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDO2NBQzFDa2lCLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQjlpQjthQUNBLENBQUM7WUFFRixNQUFNc2lCLE1BQU0sR0FBRztjQUNkMWdCLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQjZXLFNBQVMsQ0FBQztrQkFDVCxHQUFHN0csTUFBTTtrQkFDVCxDQUFDaFEsS0FBSyxDQUFDRSxhQUFhLENBQUNiLElBQUksR0FBR1csS0FBSyxDQUFDRSxhQUFhLENBQUNPO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEMkIsT0FBTyxFQUFFLE1BQU1wQyxLQUFLLElBQUc7Z0JBQ3RCc0UsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTS9HLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzBNLFFBQVEsQ0FBQ3VFLE1BQU0sQ0FBQ2dSLFlBQVksQ0FBQztnQkFDbEQvYixPQUFPLEVBQUU7Z0JBRVRtTSxVQUFVLENBQUMsTUFBSztrQkFDZjlNLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ3JILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUFtSCxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUVwRixJQUFJO2NBQUNoRixTQUFTLEVBQUMsY0FBYztjQUFDcUgsT0FBTyxFQUFFQTtZQUFPLEdBQzFFaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSSxRQUNKakksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3hjLEtBQUssQ0FBTSxFQUM3QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDa2QsTUFBTSxDQUFDblosV0FBVyxDQUFRLENBQy9CLEVBRVRwRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQ1JoTyxLQUFLLEVBQUVqRixLQUFLLENBQUNrZCxNQUFNLENBQUNoSyxRQUFRLENBQUNqTyxLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLGNBQWM7Y0FDbkJvQixLQUFLLEVBQUV1UCxNQUFNLENBQUNnUixZQUFZO2NBQzFCamhCLFFBQVEsRUFBRTBnQixNQUFNLENBQUMxZ0IsUUFBUTtjQUN6QnNGLFdBQVcsRUFBRS9ILEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ2hLLFFBQVEsQ0FBQ25MO1lBQVcsRUFDN0MsQ0FDSSxFQUVQcEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNmlCLFNBQUEsQ0FBQS9VLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUVxZSxNQUFNLENBQUNyZTtZQUFPLEdBQ2pEMkIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNILEVBQ1R4TyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBMFYsZ0JBQWdCO2NBQUNyYyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1jLFlBQUEsR0FBQW5jLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVZ2tCLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFNWpCLEtBQUs7Y0FBRXdHLEtBQUs7Y0FBRStTLFNBQVM7Y0FBRXRaO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDbEUsTUFBTXlDLFFBQVEsR0FBRztjQUFFUSxLQUFLLEVBQUUsRUFBRTtjQUFFOEIsS0FBSyxFQUFFakYsS0FBSyxDQUFDNmpCLFNBQVMsQ0FBQzdPLE1BQU0sQ0FBQ2pOO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUMrYixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHcGtCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDNmpCLFFBQVEsQ0FBQztZQUNqRSxNQUFNcmhCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUJxaEIsV0FBVyxDQUFDcmhCLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7Y0FDdEMsTUFBTWxELFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztnQkFBRXljLFFBQVEsRUFBRXBoQixLQUFLLENBQUNFLGFBQWEsQ0FBQ087Y0FBSyxDQUFFLENBQUM7Y0FDM0QsTUFBTXFELEtBQUssQ0FBQ2tCLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTTNCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3FGLEdBQUcsQ0FBQzhMLElBQUksS0FBSztjQUFFL1QsS0FBSyxFQUFFK1QsSUFBSTtjQUFFalMsS0FBSyxFQUFFakYsS0FBSyxDQUFDNmpCLFNBQVMsQ0FBQzNNLElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUN6RixNQUFNelQsUUFBUSxHQUFHO2NBQUV1Z0IsVUFBVSxFQUFFeGQsS0FBSyxDQUFDeWQ7WUFBSyxDQUFFO1lBRTVDLE9BQ0N0a0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBT3NmLE9BQU8sRUFBQztZQUFFLEdBQUUxZixLQUFLLENBQUM2akIsU0FBUyxDQUFDN08sTUFBTSxDQUFDL1AsS0FBSyxDQUFTLEVBQ3hEdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJiLFlBQUEsQ0FBQU0sV0FBVztjQUNYbFosS0FBSyxFQUFFbEQsUUFBUSxDQUFDNmpCLFFBQVE7Y0FDeEIvaEIsSUFBSSxFQUFDLFVBQVU7Y0FDZmdFLE9BQU8sRUFBRUEsT0FBTztjQUNoQnRELFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RnQjtZQUFRLEVBQ1gsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBOUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1jLFlBQUEsR0FBQW5jLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVc2tCLGNBQWNBLENBQUM7WUFBRXhSLE1BQU07WUFBRTZHO1VBQVMsQ0FBRTtZQUNuRCxNQUFNO2NBQUV0WixRQUFRO2NBQUV1RztZQUFLLENBQUUsR0FBRyxJQUFBM0csUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxJQUFJNGEsWUFBWSxHQUFHO2NBQUUzWCxLQUFLLEVBQUUsRUFBRTtjQUFFOEIsS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUNqRCxNQUFNYyxPQUFPLEdBQUcsRUFBRTtZQUNsQlMsS0FBSyxDQUFDK0osS0FBSyxDQUFDaFEsVUFBVSxDQUFDa04sS0FBSyxDQUFDK0QsT0FBTyxDQUFDd1AsQ0FBQyxJQUFHO2NBQ3hDLElBQUlBLENBQUMsQ0FBQ3pWLEVBQUUsS0FBS3RMLFFBQVEsQ0FBQ3NMLEVBQUUsRUFBRTtjQUMxQixJQUFJeVYsQ0FBQyxDQUFDelYsRUFBRSxLQUFLbUgsTUFBTSxDQUFDalIsS0FBSyxDQUFDMGlCLFVBQVUsRUFBRXJKLFlBQVksR0FBRztnQkFBRTNYLEtBQUssRUFBRTZkLENBQUMsQ0FBQ3pWLEVBQUU7Z0JBQUV0RyxLQUFLLEVBQUUrYixDQUFDLENBQUN0Z0I7Y0FBSyxDQUFFO2NBQ3BGcUYsT0FBTyxDQUFDdUwsSUFBSSxDQUFDO2dCQUFFbk8sS0FBSyxFQUFFNmQsQ0FBQyxDQUFDelYsRUFBRTtnQkFBRXRHLEtBQUssRUFBRStiLENBQUMsQ0FBQ3RnQjtjQUFLLENBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRixNQUFNMGpCLFlBQVksR0FBR3hRLElBQUksSUFBRztjQUMzQjJGLFNBQVMsQ0FBQzdHLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFalIsS0FBSyxFQUFFO2tCQUFFLEdBQUdpUixNQUFNLENBQUNqUixLQUFLO2tCQUFFMGlCLFVBQVUsRUFBRXZRLElBQUksQ0FBQ3RNLE1BQU0sQ0FBQ25FO2dCQUFLO2NBQUUsQ0FBRSxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUVELE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFPc2YsT0FBTyxFQUFDLEVBQUU7Y0FBQ3BmLFNBQVMsRUFBQztZQUFXLEcsc0NBRXRDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMmIsWUFBQSxDQUFBTSxXQUFXO2NBQUM1WixRQUFRLEVBQUUyaEIsWUFBWTtjQUFFdEosWUFBWSxFQUFFQSxZQUFZO2NBQUUvVSxPQUFPLEVBQUUsQ0FBQytVLFlBQVksRUFBRSxHQUFHL1UsT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXBHLE1BQUEsR0FBQUMsT0FBQTtVQWtCTyxNQUFNeWtCLGVBQWUsR0FBQS9VLE9BQUEsQ0FBQStVLGVBQUEsR0FBRzFrQixNQUFBLENBQUFRLE9BQUssQ0FBQzJWLGFBQWEsQ0FBQyxFQUE2QixDQUFDO1VBQzFFLE1BQU01VixrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNUCxNQUFBLENBQUFRLE9BQUssQ0FBQzZWLFVBQVUsQ0FBQ3FPLGVBQWUsQ0FBQztVQUFDL1UsT0FBQSxDQUFBcFAsa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkIxRSxJQUFBYSxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQThOLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBa1EsV0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUE4aUIsUUFBQSxHQUFBOWlCLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEwa0IsTUFBQSxHQUFBMWtCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMmtCLFNBQUEsR0FBQTNrQixPQUFBO1VBQ0EsSUFBQTRrQixRQUFBLEdBQUE1a0IsT0FBQTtVQUVNLFNBQVU2a0IsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQ0x4a0IsUUFBUTtjQUNSdUcsS0FBSztjQUNMeEcsS0FBSztjQUNMd0csS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUN5UyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdqVCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDdU8sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHclEsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ2tqQixhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUdobEIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQ3FjLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUduZSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTXVNLFVBQVUsR0FBR3RNLEtBQUssSUFBSXhCLFFBQVEsQ0FBQ2tPLFFBQVEsQ0FBQzFNLEtBQUssQ0FBQztZQUVwRCxNQUFNaUQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJrTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJwTSxLQUFLLENBQUNpYyxZQUFZLENBQUN0VixTQUFTLENBQUM7Y0FDN0J1VixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUVELE1BQU1FLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1oVCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTWlELGFBQWEsR0FBR0EsQ0FBQSxLQUFNSixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTWdTLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkIsSUFBSTtnQkFDSEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN0QjdHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUksQ0FBQzdkLFFBQVEsQ0FBQzRrQixXQUFXLEVBQUU7a0JBQzFCUCxNQUFBLENBQUFRLEtBQUssQ0FBQ0MsT0FBTyxDQUFDL2tCLEtBQUssQ0FBQ08sVUFBVSxDQUFDcWtCLElBQUksQ0FBQ0csT0FBTyxDQUFDO2tCQUM1Qzs7Z0JBR0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMxTixRQUFRLENBQUNwWCxRQUFRLENBQUNZLElBQUksQ0FBQyxFQUFFO2tCQUNsRSxNQUFNMkYsS0FBSyxDQUFDd2Usc0JBQXNCLENBQUMva0IsUUFBUSxDQUFDc0wsRUFBRSxDQUFDO2lCQUMvQyxNQUFNO2tCQUNOLE1BQU0vRSxLQUFLLENBQUN5ZSxZQUFZLENBQUNobEIsUUFBUSxDQUFDc0wsRUFBRSxDQUFDOztnQkFHdEMwRyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3BQLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzhILEtBQUssQ0FBQ3VILFFBQVEsR0FBRyxRQUFRO2dCQUNuRTJMLGFBQWEsQ0FBQyxLQUFLLENBQUM7ZUFDcEIsQ0FBQyxPQUFPckssQ0FBQyxFQUFFO2dCQUNYNlEsTUFBQSxDQUFBUSxLQUFLLENBQUN4USxLQUFLLENBQUM5TixLQUFLLENBQUNDLFdBQVcsQ0FBQzBELE1BQU0sQ0FBQythLGFBQWEsQ0FBQzs7WUFFckQsQ0FBQztZQUVELE1BQU1DLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCbFQsVUFBVSxDQUFDQyxRQUFRLENBQUNwUCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM4SCxLQUFLLENBQUN1SCxRQUFRLEdBQUcsTUFBTTtjQUVqRXdTLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUN4QixDQUFDO1lBQ0QsT0FDQ2hsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUErQixHQUM3Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbWtCLFNBQUEsQ0FBQWEsZ0JBQWdCLE9BQUcsRUFDcEJ6bEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRDLEdBQ3pELENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQytXLFFBQVEsQ0FBQ3BYLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDLElBQzFEbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBc2tCLFNBQVM7Y0FDVDVoQixRQUFRLEVBQUVvYSxVQUFVLElBQUksQ0FBQzVkLFFBQVEsQ0FBQzRrQixXQUFXO2NBQzdDM2lCLElBQUksRUFBQyxjQUFjO2NBQ25Cd0IsT0FBTyxFQUFDLFdBQVc7Y0FDbkJwRCxTQUFTLEVBQUMsMkJBQTJCO2NBQ3JDd0UsT0FBTyxFQUFFOGY7WUFBSSxHQUVacGUsS0FBSyxDQUFDQyxXQUFXLENBQUN2QixPQUFPLENBQUMrZixZQUFZLENBRXhDLEVBQ0R0bEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQVEsUUFBUTtjQUFDeEssT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRWtlO1lBQWlCLEdBQ3BEdmMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNOLENBQ0QsQ0FDRCxDQUNELEVBQ0x1VyxhQUFhLElBQUkva0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29rQixRQUFBLENBQUFjLGVBQWU7Y0FBQzNkLE9BQU8sRUFBRXdkO1lBQVMsRUFBSSxFQUN4RHhTLGVBQWUsSUFDZmhULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNMLFNBQVMsRUFBRUEsU0FBUztjQUFFYSxRQUFRLEVBQUV5TjtZQUFhLEdBQzFEclQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FBTXFHLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ0csTUFBTSxDQUFPLENBRXhDLEVBQ0EwSyxlQUFlLElBQ2ZwUSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBTSx1QkFBdUI7Y0FDdkI5SyxJQUFJLEVBQUV5SyxlQUFlO2NBQ3JCTSxRQUFRO2NBQ1IzUCxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3hjLEtBQUs7Y0FDekJxRCxXQUFXLEVBQUUvRCxLQUFLLENBQUNrZCxNQUFNLENBQUNuWixXQUFXO2NBQ3JDL0QsS0FBSyxFQUFFQSxLQUFLLENBQUNrZCxNQUFNO2NBQ25CeE0sU0FBUyxFQUFFelEsUUFBUSxDQUFDeVEsU0FBUztjQUM3QnpRLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnNsQixXQUFXLEVBQUV0bEIsUUFBUSxDQUFDWSxJQUFJLEtBQUssaUJBQWlCO2NBQ2hETixVQUFVLEVBQUVpRyxLQUFLLENBQUMrSixLQUFLLENBQUNoUSxVQUFVO2NBQ2xDb0gsT0FBTyxFQUFFcWIsaUJBQWlCO2NBQzFCMVMsU0FBUyxFQUFFOUosS0FBSyxDQUFDK0osS0FBSyxDQUFDQyxZQUFZO2NBQ25DekMsVUFBVSxFQUFFQTtZQUFVLEVBRXZCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3R0EsSUFBQXlYLFdBQUEsR0FBQTVsQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2bEIsU0FBQSxHQUFBN2xCLE9BQUE7VUFFTztVQUFVLFNBQVVpQyxjQUFjQSxDQUFDLEVBQUU7WUFDM0MsTUFBTTtjQUFFNUIsUUFBUTtjQUFFRCxLQUFLO2NBQUVrVTtZQUFZLENBQUUsR0FBRyxJQUFBclUsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNNk4sVUFBVSxHQUFHMlgsSUFBSSxJQUFJemxCLFFBQVEsQ0FBQzBsQixlQUFlLENBQUNELElBQUksQ0FBQztZQUN6RCxNQUFNak0sR0FBRyxHQUFHLDBEQUEwRHhaLFFBQVEsQ0FBQ1ksSUFBSSxFQUFFO1lBQ3JGLE1BQU0ra0IsT0FBTyxHQUFHO2NBQ2ZsYSxHQUFHLEVBQUV6TCxRQUFRLENBQUMybEIsT0FBTztjQUNyQkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUc7YUFDZDtZQUNELElBQUEva0IsTUFBQSxDQUFBeUUsUUFBUSxFQUFDeEYsUUFBUSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUVyRSxNQUFNK2xCLFVBQVUsR0FBR0osT0FBTyxDQUFDbGEsR0FBRyxHQUFHLEdBQUdrYSxPQUFPLENBQUNsYSxHQUFHLElBQUlvYSxJQUFJLENBQUNDLEdBQUcsRUFBRSxFQUFFLEdBQUc1WSxTQUFTO1lBQzNFLE1BQU0xSyxRQUFRLEdBQUdDLEtBQUssSUFBSXpDLFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztjQUFFM0csS0FBSyxFQUFFZ0MsS0FBSyxDQUFDRSxhQUFhLENBQUNPO1lBQUssQ0FBRSxDQUFDO1lBRTVFLE9BQ0N4RCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FFL0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBRW1aO1lBQUcsR0FDckI5WixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb2xCLFdBQUEsQ0FBQVMsVUFBVTtjQUNWdmxCLEtBQUssRUFBRVYsS0FBSyxDQUFDNGxCLE9BQU8sQ0FBQ2xsQixLQUFLO2NBQzFCcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDNGxCLE9BQU8sQ0FBQzdoQixXQUFXO2NBQ3RDbWlCLFdBQVcsRUFBRWptQixRQUFRLENBQUNrbUIsa0JBQWtCO2NBQ3hDQyxNQUFNLEVBQUMsVUFBVTtjQUNqQlIsT0FBTyxFQUFFSSxVQUFVO2NBQ25CcFgsSUFBSSxFQUFDLElBQUk7Y0FDVGIsVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0ZwTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQTZVLEtBQUs7Y0FDTHJVLFNBQVMsRUFBQyx3QkFBd0I7Y0FDbEN5QixJQUFJLEVBQUMsT0FBTztjQUNab0IsS0FBSyxFQUFFbEQsUUFBUSxDQUFDUyxLQUFLLEdBQUdULFFBQVEsQ0FBQ1MsS0FBSyxHQUFHLEVBQUU7Y0FDM0MrQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJzRixXQUFXLEVBQUUvSCxLQUFLLENBQUNnSSxJQUFJLENBQUN0SCxLQUFLO2NBQzdCeVQsTUFBTSxFQUFFRDtZQUFZLEVBQ25CLENBQ0csRUFDTnZVLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFlLEdBQzdCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUNGLElBQUksRUFBRTlCLFFBQVEsQ0FBQ1k7WUFBSSxFQUFJLEUsS0FBRWIsS0FBSyxDQUFDaVAsS0FBSyxDQUFDaFAsUUFBUSxDQUFDWSxJQUFJLENBQUMsQ0FDdkQsQ0FDRCxFQUNObEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWxCLFNBQUEsQ0FBQVksZ0JBQWdCLE9BQUcsQ0FDZixDQUNFLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQTFtQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbWMsWUFBQSxHQUFBbmMsT0FBQTtVQUNBLElBQUF5RyxLQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVXltQixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFcm1CLEtBQUs7Y0FBRXdHLEtBQUs7Y0FBRStTLFNBQVM7Y0FBRXRaO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDbEUsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFFN0I7WUFDQSxNQUFNOGYsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHamdCLEtBQUEsQ0FBQXdkLFNBQVMsQ0FBQzBDLFNBQVMsQ0FBQzdXLElBQUksRUFBRSxDQUFDO1lBRTFELE1BQU0vTSxRQUFRLEdBQUc7Y0FBRVEsS0FBSyxFQUFFLEVBQUU7Y0FBRThCLEtBQUssRUFBRWpGLEtBQUssQ0FBQzZqQixTQUFTLENBQUM3TyxNQUFNLENBQUNqTjtZQUFXLENBQUU7WUFDekUsTUFBTSxDQUFDK2IsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3BrQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzZqQixRQUFRLENBQUM7WUFDakUsTUFBTSxDQUFDeGUsSUFBSSxFQUFFa2hCLE9BQU8sQ0FBQyxHQUFHN21CLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUN1RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1pQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCcWhCLFdBQVcsQ0FBQ3JoQixLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO1lBQ3ZDLENBQUM7WUFFRDtZQUNBLE1BQU00QyxPQUFPLEdBQUdVLFdBQVcsRUFBRW9kLFNBQVMsR0FDbkNwVSxNQUFNLENBQUNnWCxPQUFPLENBQUNoZ0IsV0FBVyxDQUFDb2QsU0FBUyxDQUFDLENBQ3BDNU0sTUFBTSxDQUFDLENBQUMsQ0FBQ3lQLFFBQVEsQ0FBQyxLQUFLSixrQkFBa0IsQ0FBQ2pQLFFBQVEsQ0FBQ3FQLFFBQVEsQ0FBQyxDQUFDLENBQzdEdGIsR0FBRyxDQUFDLENBQUMsQ0FBQ3NiLFFBQVEsRUFBRUMsUUFBUSxDQUFDLE1BQU07Y0FDL0J4akIsS0FBSyxFQUFFdWpCLFFBQVE7Y0FDZnpoQixLQUFLLEVBQUcwaEIsUUFBZ0IsQ0FBQzVrQjthQUN6QixDQUFDLENBQUMsR0FDSCxFQUFFO1lBRUwsTUFBTXdGLE1BQU0sR0FBRyxNQUFNN0UsS0FBSyxJQUFHO2NBQzVCc0UsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQi9HLFFBQVEsQ0FBQ3lILElBQUksQ0FBQztnQkFBRW9jO2NBQVEsQ0FBRSxDQUFDO2NBRTNCOWMsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQndmLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTXhKLFVBQVUsR0FBR0EsQ0FBQSxLQUFNd0osT0FBTyxDQUFDLENBQUNsaEIsSUFBSSxDQUFDO1lBRXZDLE9BQ0MzRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQ1A2QyxPQUFPLEVBQUVrWSxVQUFVO2NBQ25CamIsSUFBSSxFQUFFLGFBQWE5QixRQUFRLENBQUM2akIsUUFBUSxFQUFFO2NBQ3RDcGpCLEtBQUssRUFBRSxHQUFHVCxRQUFRLENBQUM2akIsUUFBUSxXQUFXO2NBQ3RDeGpCLFNBQVMsRUFBQztZQUEyRCxFQUNwRSxFQUNEZ0YsSUFBSSxJQUNKM0YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQW1ILEtBQUs7Y0FBQ25GLElBQUk7Y0FBQ3FDLE9BQU8sRUFBRXFWO1lBQVUsR0FDOUJyZCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE4SCxJQUFJO2NBQUNDLFFBQVEsRUFBRU47WUFBTSxHQUNyQjVILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU9zZixPQUFPLEVBQUM7WUFBRSxHQUFFMWYsS0FBSyxDQUFDNmpCLFNBQVMsQ0FBQzdPLE1BQU0sQ0FBQy9QLEtBQUssQ0FBUyxFQUN4RHRGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyYixZQUFBLENBQUFNLFdBQVc7Y0FBQ2xaLEtBQUssRUFBRTJnQixRQUFRO2NBQUUvaEIsSUFBSSxFQUFDLFVBQVU7Y0FBQ2dFLE9BQU8sRUFBRUEsT0FBTztjQUFFdEQsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDdEY5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUV5QyxNQUFNO2NBQUU5RCxRQUFRLEVBQUVzRDtZQUFRLEdBQzNEUCxLQUFLLENBQUNDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3dDLElBQUksQ0FDdkIsQ0FDSixDQUNBLENBRVIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25FQSxJQUFBL0gsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFlTSxTQUFVZ25CLFlBQVlBLENBQUM7WUFBRTdrQixJQUFJO1lBQUU4a0IsUUFBUSxHQUFHLEtBQUs7WUFBRUMsSUFBSSxHQUFHO1VBQUssQ0FBc0I7WUFDeEYsTUFBTTtjQUFFN21CLFFBQVE7Y0FBRUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNNm1CLEdBQUcsR0FBR0QsSUFBSSxHQUFHN21CLFFBQVEsQ0FBQ3dCLEtBQUssR0FBR3hCLFFBQVE7WUFDNUMsTUFBTTBLLEdBQUcsR0FBR2hMLE1BQUEsQ0FBQVEsT0FBSyxDQUFDME0sTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QixNQUFNMUosS0FBSyxHQUFHbEQsUUFBUSxDQUFDK21CLFlBQVksQ0FBQ2psQixJQUFJLENBQUM7WUFFekMsTUFBTSxDQUFDa0wsT0FBTyxFQUFFZ2EsVUFBVSxDQUFDLEdBQUd0bkIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMyQixLQUFLLENBQUM7WUFFbkQsTUFBTXNXLEdBQUcsR0FBRyxpQkFBaUJ0VyxLQUFLLEdBQUcsNEJBQTRCLEdBQUcsRUFBRSxFQUFFO1lBQ3hFLElBQUkrakIsS0FBSyxHQUFHL2pCLEtBQUssR0FBRyxXQUFXLEdBQUcsU0FBUztZQUUzQyxJQUFJMGpCLFFBQVEsSUFBSSxDQUFDMWpCLEtBQUssRUFBRStqQixLQUFLLEdBQUcsVUFBVTtZQUMxQyxJQUFBbG1CLE1BQUEsQ0FBQVksU0FBUyxFQUNSLENBQUNtbEIsR0FBRyxDQUFDLEVBQ0wsTUFBSztjQUNKLE1BQU01akIsS0FBSyxHQUFHMmpCLElBQUksR0FBRzdtQixRQUFRLENBQUN3QixLQUFLLENBQUN1bEIsWUFBWSxDQUFDamxCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzlCLFFBQVEsQ0FBQzhCLElBQUksQ0FBQztjQUN6RSxJQUFJb0IsS0FBSyxFQUFFd0gsR0FBRyxDQUFDc0MsT0FBTyxDQUFDbEssU0FBUyxDQUFDRSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUM3RDBILEdBQUcsQ0FBQ3NDLE9BQU8sQ0FBQ2xLLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2NBQzlEaWtCLFVBQVUsQ0FBQzlqQixLQUFLLENBQUM7WUFDbEIsQ0FBQyxFQUNELEdBQUdwQixJQUFJLFVBQVUsQ0FDakI7WUFFRCxJQUFJK2tCLElBQUksSUFBSSxDQUFDN21CLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUV4RCxPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFFbVosR0FBRztjQUFFOU8sR0FBRyxFQUFFQTtZQUFHLEdBQzNCaEwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQU8sR0FBRU4sS0FBSyxDQUFDa0ssUUFBUSxDQUFDZ1csTUFBTSxDQUFDbmUsSUFBSSxDQUFDLENBQVEsRUFDNURwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBTyxHQUFFTixLQUFLLENBQUNrSyxRQUFRLENBQUNpZCxNQUFNLENBQUNELEtBQUssQ0FBQyxDQUFRLENBQ3pELENBQ0g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQWxtQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXduQixhQUFBLEdBQUF4bkIsT0FBQTtVQUVNLFNBQVV3bEIsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRXBsQixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTW9OLEtBQUssR0FBR3JOLFFBQVEsQ0FBQ29uQixZQUFZO1lBQ25DLE1BQU0sQ0FBQ3RVLE9BQU8sRUFBRTZOLFVBQVUsQ0FBQyxHQUFHamhCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNOGxCLEtBQUssR0FBR2hhLEtBQUssQ0FBQzJKLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDO1lBRTFDLElBQUFsVyxNQUFBLENBQUFZLFNBQVMsRUFDUixDQUFDM0IsUUFBUSxFQUFFQSxRQUFRLENBQUN3QixLQUFLLENBQUMsRUFDMUIsTUFBSztjQUNKbWYsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFDRCxRQUFRLENBQ1I7WUFFRCxNQUFNMkcsYUFBYSxHQUFHdG5CLFFBQVEsQ0FBQ3VuQixjQUFjLENBQUNwYyxHQUFHLENBQUMsQ0FBQztjQUFFckosSUFBSTtjQUFFOGtCO1lBQVEsQ0FBRSxLQUNwRWxuQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ25CLGFBQUEsQ0FBQVIsWUFBWTtjQUFDdGIsR0FBRyxFQUFFdkosSUFBSTtjQUFFQSxJQUFJLEVBQUVBLElBQUk7Y0FBRThrQixRQUFRLEVBQUVBO1lBQVEsRUFDdkQsQ0FBQztZQUVGLE9BQ0NsbkIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFhLEdBQUVOLEtBQUssQ0FBQ2tLLFFBQVEsQ0FBQ2pGLEtBQUssQ0FBUSxFQUMzRHRGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFjLEdBQzVCZ25CLEtBQUssQ0FBQzlkLE1BQU0sRSxLQUFHOEQsS0FBSyxDQUFDOUQsTUFBTSxDQUN0QixDQUNGLEVBQ043SixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFJRSxTQUFTLEVBQUM7WUFBb0IsR0FBRWluQixhQUFhLENBQU0sQ0FDbEQsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBdm1CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBNm5CLGVBQUEsR0FBQTduQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOG5CLGNBQUEsR0FBQTluQixPQUFBO1VBQ0EsSUFBQStuQixjQUFBLEdBQUEvbkIsT0FBQTtVQUNBLElBQUFnb0IsT0FBQSxHQUFBaG9CLE9BQUE7VUFDQSxJQUFBaW9CLFNBQUEsR0FBQWpvQixPQUFBO1VBQ0EsSUFBQWtvQixpQkFBQSxHQUFBbG9CLE9BQUE7VUFDQSxJQUFBbW9CLGVBQUEsR0FBQW5vQixPQUFBO1VBQ0EsSUFBQW9vQixPQUFBLEdBQUFwb0IsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxb0IsY0FBQSxHQUFBcm9CLE9BQUE7VUFHTztVQUFZLFNBQVVzb0Isa0JBQWtCQSxDQUFDO1lBQUUxaEIsS0FBSztZQUFFdkc7VUFBUSxDQUFFO1lBQ2xFLE1BQU0sQ0FBQ3lTLE1BQU0sRUFBRTZHLFNBQVMsQ0FBQyxHQUFHNVosTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQXdCdkIsUUFBUSxDQUFDNGhCLGFBQWEsRUFBRSxDQUFDO1lBQzNGLE1BQU0sQ0FBQ3NHLFVBQVUsRUFBRW5vQixLQUFLLENBQUMsR0FBRyxJQUFBZ0IsTUFBQSxDQUFBcUQsUUFBUSxFQUFDb2pCLGVBQUEsQ0FBQVcsTUFBWSxDQUFDQyxTQUFTLENBQUM7WUFDNUQsTUFBTTtjQUFFeG5CO1lBQUksQ0FBRSxHQUFHWixRQUFRO1lBRXpCLElBQUFlLE1BQUEsQ0FBQVksU0FBUyxFQUNSLENBQUMzQixRQUFRLENBQUMsRUFDVixNQUFLO2NBQ0pzWixTQUFTLENBQUM7Z0JBQUUsR0FBR3RaLFFBQVEsQ0FBQzRoQixhQUFhO2NBQUUsQ0FBRSxDQUFDO1lBQzNDLENBQUMsRUFDRCxRQUFRLENBQ1I7WUFFRCxJQUFJLENBQUNzRyxVQUFVLEVBQUUsT0FBT3hvQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBeVYsT0FBTztjQUFDckgsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUNqRCxNQUFNdUMsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJqVSxRQUFRLENBQUN5SCxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUNELE1BQU12RSxLQUFLLEdBQUc7Y0FBRXFELEtBQUs7Y0FBRXZHLFFBQVE7Y0FBRUQsS0FBSztjQUFFMFMsTUFBTTtjQUFFNkcsU0FBUztjQUFFckY7WUFBWSxDQUFFO1lBRXpFLE9BQ0N2VSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxRQUFBLENBQUF3a0IsZUFBZSxDQUFDeE0sUUFBUTtjQUFDMVUsS0FBSyxFQUFFQTtZQUFLLEdBQ3JDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNm5CLGNBQUEsQ0FBQXhELGFBQWEsT0FBRyxFQUNqQjlrQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBbVosb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU5YixJQUFJO2NBQ2ZrRixPQUFPLEVBQUU7Z0JBQ1IsaUJBQWlCLEVBQUVwRyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMm5CLGVBQUEsQ0FBQXhMLHNCQUFzQixPQUFHO2dCQUM3QytMLE1BQU0sRUFBRTNvQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNG5CLE9BQUEsQ0FBQWxHLGNBQWMsT0FBRztnQkFDMUIsY0FBYyxFQUFFbmlCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM0bkIsT0FBQSxDQUFBbEcsY0FBYyxPQUFHO2dCQUNsQ3lHLE9BQU8sRUFBRTVvQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNG5CLE9BQUEsQ0FBQWxHLGNBQWMsT0FBRztnQkFDM0IwRyxNQUFNLEVBQUU3b0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3duQixPQUFBLENBQUEzVCxjQUFjLE9BQUc7Z0JBQzFCd1UsUUFBUSxFQUFFOW9CLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5bkIsU0FBQSxDQUFBMW5CLE9BQWdCLE9BQUc7Z0JBQzlCLGdCQUFnQixFQUFFUixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc25CLGNBQUEsQ0FBQXJtQixxQkFBcUIsT0FBRztnQkFDM0MsZ0JBQWdCLEVBQUUxQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdW5CLGNBQUEsQ0FBQW5pQixxQkFBcUIsT0FBRztnQkFDM0MsbUJBQW1CLEVBQUU3RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMG5CLGlCQUFBLENBQUEzbkIsT0FBd0I7ZUFDOUM7Y0FDRDRILFdBQVcsRUFBRXBJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBO1lBQXdCLEVBQ3BDLENBQ0csQ0FDb0I7VUFFN0I7Ozs7Ozs7Ozs7O1VDeERBOztVQUVBb1AsTUFBQSxDQUFBaVosY0FBQSxDQUFBcFosT0FBQTtZQUNBbk0sS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUF3bEIsS0FBQSxHQUFBL29CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVWdwQixlQUFlQSxDQUFBO1lBQzlCLE1BQU07Y0FBRXBpQixLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELElBQUFjLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ2UsS0FBSyxDQUFDcWlCLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1lBRWxFO1lBQ0EsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUN4UixRQUFRLENBQUNwWCxRQUFRLENBQUNZLElBQUksQ0FBQyxFQUFFO2NBQ2xFLE1BQU04RCxPQUFPLEdBQUc2QixLQUFLLENBQUNzaUIscUJBQXFCO2NBQzNDLE9BQU83bkIsS0FBQSxDQUFBYixhQUFBLENBQUN1RSxPQUFPO2dCQUFDNkIsS0FBSyxFQUFFQSxLQUFLLENBQUNxaUI7Y0FBYSxFQUFJOztZQUcvQztZQUNBO1lBRUEsT0FBTzVuQixLQUFBLENBQUFiLGFBQUEsQ0FBQ3VvQixLQUFBLENBQUFJLFdBQVc7Y0FBQ3ZpQixLQUFLLEVBQUVBLEtBQUssQ0FBQ3FpQixhQUFhO2NBQUEsR0FBTXJpQixLQUFLLENBQUN3aUI7WUFBWSxFQUFJO1VBQzNFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBaG9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVxcEIseUJBQXlCQSxDQUFBO1lBQ3hDLE1BQU07Y0FBRXppQjtZQUFLLENBQUUsR0FBRyxJQUFBM0csUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN0QyxJQUFBYyxNQUFBLENBQUF5RSxRQUFRLEVBQUNlLEtBQUssQ0FBQ3FpQixhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUVsRSxNQUFNbGtCLE9BQU8sR0FBRzZCLEtBQUssQ0FBQ3NpQixxQkFBcUI7WUFFM0MsT0FBTzduQixLQUFBLENBQUFiLGFBQUEsQ0FBQ3VFLE9BQU87Y0FBQzZCLEtBQUssRUFBRUEsS0FBSyxDQUFDcWlCO1lBQWEsRUFBSTtVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBN25CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFvaUIsV0FBQSxHQUFBcGlCLE9BQUE7VUFFQSxJQUFBc3BCLGdCQUFBLEdBQUF0cEIsT0FBQTtVQUlNLFNBQVUwbEIsZUFBZUEsQ0FBQztZQUFFM2Q7VUFBTyxDQUFFO1lBQzFDLE1BQU07Y0FBRW5CLEtBQUs7Y0FBRXZHO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsSUFBQWMsTUFBQSxDQUFBeUUsUUFBUSxFQUFDZSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUNsRixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3dnQixXQUFBLENBQUFFLFlBQVksQ0FBQzNSLEtBQUssQ0FBQzZKLE9BQU8sRUFBRStPLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUMxRyxJQUFBbm9CLE1BQUEsQ0FBQVksU0FBUyxFQUNSLENBQUNvZ0IsV0FBQSxDQUFBRSxZQUFZLENBQUMzUixLQUFLLENBQUMsRUFDcEIsTUFBTWhQLE9BQU8sQ0FBQ3lnQixXQUFBLENBQUFFLFlBQVksQ0FBQzNSLEtBQUssRUFBRTZKLE9BQU8sRUFBRStPLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUNsRixnQkFBZ0IsQ0FDaEI7WUFFRDtZQUNBLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQUs7Y0FDOUIsSUFBSTluQixJQUFJLEtBQUssU0FBUyxFQUFFLE9BQU8sRUFBRTtjQUNqQyxPQUFPLDZDQUE2QztZQUNyRCxDQUFDO1lBRUQsT0FDQ0wsS0FBQSxDQUFBYixhQUFBLENBQUNrRCxNQUFBLENBQUFtSCxLQUFLO2NBQUNuRixJQUFJO2NBQUNoRixTQUFTLEVBQUU4b0IsaUJBQWlCLEVBQUU7Y0FBRXpoQixPQUFPLEVBQUVBO1lBQU8sR0FDM0QxRyxLQUFBLENBQUFiLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQW1aLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFcmIsSUFBSTtjQUNmeUUsT0FBTyxFQUFFO2dCQUNScVUsT0FBTyxFQUNOblosS0FBQSxDQUFBYixhQUFBLENBQUNzTixHQUFBLENBQUEyYixrQkFBa0I7a0JBQ2xCL1ksU0FBUyxFQUFFOUosS0FBSyxDQUFDK0osS0FBSyxDQUFDQyxZQUFZO2tCQUNuQzdJLE9BQU8sRUFBRUEsT0FBTztrQkFDaEJwQyxRQUFRLEVBQUVvQyxPQUFPO2tCQUNqQmxCLFdBQVcsRUFBRXViLFdBQUEsQ0FBQUUsWUFBWSxDQUFDemI7Z0JBQVcsRUFFdEM7Z0JBQ0R4RyxRQUFRLEVBQUV1RyxLQUFLLENBQUNxaUIsYUFBYSxHQUFHNW5CLEtBQUEsQ0FBQWIsYUFBQSxDQUFDOG9CLGdCQUFBLENBQUFOLGVBQWUsT0FBRyxHQUFHM25CLEtBQUEsQ0FBQWIsYUFBQSxDQUFDc04sR0FBQSxDQUFBMFYsZ0JBQWdCO2tCQUFDOVgsR0FBRyxFQUFDLFdBQVc7a0JBQUN2RSxRQUFRO2dCQUFBO2VBQ2hHO2NBQ0RnQixXQUFXLEVBQUU5RyxLQUFBLENBQUFiLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTBWLGdCQUFnQjtnQkFBQzlYLEdBQUcsRUFBQyxXQUFXO2dCQUFDdkUsUUFBUTtjQUFBO1lBQUcsRUFDekQsQ0FDSztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVMHBCLFVBQVVBLENBQUM7WUFDMUJyRixLQUFLLEdBQUcsS0FBSztZQUNieGdCLFFBQVE7WUFDUkc7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFOE8sTUFBTTtjQUFFMEssUUFBUTtjQUFFcGQsS0FBSztjQUFFd0csS0FBSztjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNcUgsTUFBTSxHQUFHLE1BQU03RSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQytCLGVBQWUsRUFBRTtjQUN2Qjs7Ozs7Y0FNQSxJQUFJLENBQUN3ZixLQUFLLEVBQUU7Z0JBQ1gsTUFBTXpkLEtBQUssQ0FBQytKLEtBQUssQ0FBQ2hRLFVBQVUsQ0FBQzZLLEdBQUcsQ0FBQytRLEdBQUcsQ0FBQ2xjLFFBQVEsQ0FBQ3NMLEVBQUUsQ0FBQyxDQUFDbEUsR0FBRyxDQUFDcUwsTUFBTSxDQUFDO2dCQUM3RCxNQUFNelMsUUFBUSxDQUFDb0gsR0FBRyxDQUFDcUwsTUFBTSxDQUFDO2dCQUMxQmxNLEtBQUssQ0FBQ2tCLElBQUksRUFBRTtnQkFDWjBWLFFBQVEsQ0FBQztrQkFBRXJLLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUluUCxRQUFRLEVBQUVBLFFBQVEsRUFBRTtZQUN6QixDQUFDO1lBQ0QsTUFBTWdDLEtBQUssR0FBRztjQUFFbkMsUUFBUSxFQUFFLENBQUNpUCxNQUFNLENBQUNLLE9BQU8sSUFBSXRQLFFBQVE7Y0FBRXFCLE9BQU8sRUFBRXlDO1lBQU0sQ0FBRTtZQUV4RSxPQUNDNUgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS2tDO1lBQUssR0FDakNZLEtBQUssQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBTyxDQUFDd0MsSUFBSSxDQUN2QjtVQUVYIiwiaWdub3JlTGlzdCI6W119